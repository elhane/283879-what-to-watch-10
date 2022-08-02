import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/films';
import { AuthorizationStatus, AppRoute } from '../const';

export const setActiveGenre = createAction('film/setActiveGenre', (value) => ({
  payload: value,
}));

export const showMoreCards = createAction('film/showMoreCards');

export const resetFilmCards = createAction('film/resetFilmCards');

export const resetCardsToShowAmount = createAction('film/resetCardsToShowAmount');

export const loadFilms = createAction<Films>('data/loadFilms');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const setError = createAction<string | null>('main/setError');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const setUserAvatar = createAction<string>('user/setUserAvatar');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
