import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Film, Films } from '../types/films';
import { UserData, UserType } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { redirectToRoute } from './action';
import { dropToken, saveToken } from '../services/token';
import { APIRoute, AppRoute } from '../const';
import { CommentData, Comments } from '../types/comments';

export const checkAuthAction = createAsyncThunk<UserType, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data: { name, email, id, avatarUrl }} = await api.get(APIRoute.Login);
    return { name, email, id, avatarUrl };
  },
);

export const fetchFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Films);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserType, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: { token, name, id, avatarUrl }} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Root));
    return { name, email, id, avatarUrl };
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchCurrentFilmAction = createAsyncThunk<Film, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/fetchCurrentFilmAction',
  async (id, {extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Films}/${id}`);
    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<Films, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/fetchSimilarFilmsAction',
  async (id, {extra: api}) => {
    const {data} = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<Comments, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'reviews/fetchCommentsAction',
  async (id, {extra: api}) => {
    const {data} = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const postCommentAction = createAsyncThunk<void, [(string | undefined), CommentData], {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
  'reviews/postComment',
  async ([filmId, {comment, rating}], {dispatch, extra: api}) => {
    await api.post<CommentData>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
    dispatch(redirectToRoute(`${AppRoute.Films}${filmId}`));
  },);

export const fetchPromoFilmAction = createAsyncThunk<Film, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/fetchPromoFilmAction',
  async (id, {extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    return data;
  },
);

export const fetchFilmsFavoriteAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilmsFavoriteAction',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Favorite);
    return data;
  },
);

export const postFilmFavoriteStatusAction = createAsyncThunk<Films, [number, number], {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}>(
  'film/postFilmFavoriteStatus',
  async ([filmId, filmStatus], {extra: api}) => {
    await api.post(`${APIRoute.Favorite}/${filmId}/${filmStatus}`);
    const {data} = await api.get<Films>(APIRoute.Favorite);
    return data;
  }
);
