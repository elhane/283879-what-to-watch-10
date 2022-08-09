import { store } from '../store/index.js';
import { AuthorizationStatus } from '../const';
import { Film, Films } from './films';
import { Comments } from './comments';
import { UserType } from './user-data';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  userData: UserType,
  error: string | null
}

export type FilmsData = {
  movies: Films,
  genresList: string[],
  isDataLoaded: boolean,
  isShowLoader: boolean,
  isLoadingFailed: boolean
}

export type FilmProcess = {
  genre: string,
  cardsToShowAmount: number,
  favoritesList: Films,
  currentFilm: Film,
  similarFilms: Films,
  isDataLoaded: boolean,
  isShowLoader: boolean,
  isLoadingFailed: boolean
}

export type PromoFilmProcess = {
  promoFilm: Film,
  isDataLoaded: boolean,
}

export type ReviewsProcess = {
  reviews: Comments,
  isShowLoader: boolean,
  isLoadingFailed: boolean,
  isDataLoaded: boolean,
}
