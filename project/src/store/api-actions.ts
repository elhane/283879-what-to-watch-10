import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Films } from '../types/films';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import {
  loadFilms,
  setDataLoadedStatus,
  setError,
  setAuthorizationStatus,
  setUserAvatar,
  redirectToRoute
} from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, TIMEOUT_SHOW_ERROR, AuthorizationStatus, AppRoute } from '../const';
import { store } from './';

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
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
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
    const {data: {token, avatarUrl }} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(setUserAvatar(avatarUrl));
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
