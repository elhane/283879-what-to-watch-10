import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Film, Films } from '../types/films';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import {
  loadFilms,
  redirectToRoute,
  setAuthorizationStatus,
  setCurrentFilm,
  setDataLoadedStatus,
  setError,
  setFilmReviews,
  setSimilarFilms,
  setUserData
} from './action';
import { dropToken, saveToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { store } from './';
import { CommentData, Comments } from '../types/comments';

export const clearErrorAction = createAsyncThunk(
  'main/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Films);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadFilms(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data: { name, email, id, avatarUrl }} = await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(setUserData({name, email, id, avatarUrl }));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: { token, name, id, avatarUrl }} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(setUserData({name, email, id, avatarUrl }));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);

export const fetchCurrentFilmAction = createAsyncThunk<void, string | number | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchCurrentFilmAction',
  async (id, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    const {data: currentFilm} = await api.get<Film>(`${APIRoute.Films}/${id}`);
    const {data: similarFilms} = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
    const {data: reviews } = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
    dispatch(setCurrentFilm(currentFilm));
    dispatch(setSimilarFilms(similarFilms));
    dispatch(setFilmReviews(reviews));
    dispatch(setDataLoadedStatus(false));
  },
);

export const postCommentAction = createAsyncThunk<void, [(string | undefined), CommentData], {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
  'film/postComment',
  async ([filmId, {comment, rating}], {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    await api.post<CommentData>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
    const {data: reviews } = await api.get<Comments>(`${APIRoute.Comments}/${filmId}`);
    dispatch(setFilmReviews(reviews));
    dispatch(redirectToRoute(`${AppRoute.Films}${filmId}`));
    dispatch(setDataLoadedStatus(false));
  },);
