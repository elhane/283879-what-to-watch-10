import { createAction } from '@reduxjs/toolkit';
import { Films, Film } from '../types/films';
import { AuthorizationStatus, AppRoute } from '../const';
import { UserType } from '../types/user-data';
import { Comments } from '../types/comments';

export const setActiveGenre = createAction('film/setActiveGenre', (value) => ({
  payload: value,
}));

export const showMoreCards = createAction('film/showMoreCards');

export const resetFilmCards = createAction('film/resetFilmCards');

export const resetCardsToShowAmount = createAction('film/resetCardsToShowAmount');

export const loadFilms = createAction<Films>('data/loadFilms');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const setLoader = createAction<boolean>('data/setLoader');

export const setLoadingFailed = createAction<boolean>('data/setLoadingFailed');

export const setError = createAction<string | null>('main/setError');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const setUserData = createAction<UserType>('user/setUserData');

export const redirectToRoute = createAction<AppRoute | string>('main/redirectToRoute');

export const setCurrentFilm = createAction<Film>('data/setCurrentFilm');

export const setSimilarFilms = createAction<Films>('data/setSimilarFilms');

export const setFilmReviews = createAction<Comments>('data/setFilmReviews');

