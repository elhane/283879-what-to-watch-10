import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

export const setActiveGenre = createAction('film/setActiveGenre', (value) => ({
  payload: value,
}));

export const showMoreCards = createAction('film/showMoreCards');

export const resetFilmCards = createAction('film/resetFilmCards');

export const resetCardsToShowAmount = createAction('film/resetCardsToShowAmount');

export const setError = createAction<string | null>('user/setError');

export const redirectToRoute = createAction<AppRoute | string>('main/redirectToRoute');
