import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { filmsData } from './films-data/films-data';
import { filmProcess } from './film-process/film-process';
import { promoFilmProcess } from './promo-film-process/promo-film-process';
import { reviewsProcess } from './reviews-process/reviews-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Data]: filmsData.reducer,
  [NameSpace.Film]: filmProcess.reducer,
  [NameSpace.PromoFilm]: promoFilmProcess.reducer,
  [NameSpace.Reviews]: reviewsProcess.reducer,
});
