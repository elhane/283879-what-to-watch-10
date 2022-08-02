import { createReducer } from '@reduxjs/toolkit';
import {
  resetFilmCards,
  resetCardsToShowAmount,
  setActiveGenre,
  showMoreCards,
  loadFilms,
  setDataLoadedStatus,
  setError,
  setAuthorizationStatus,
  setUserAvatar
} from './action';
import { Film, Films } from '../types/films';
import { AuthorizationStatus, DEFAULT_FILM_GENRE, FILMS_PER_STEP_AMOUNT} from '../const';

type initialState = {
  genre: string,
  movies: Films,
  promoFilm: Film,
  genresList: string[],
  cardsToShowAmount: number,
  favoritesList: Films,
  isDataLoaded: boolean,
  error: string | null,
  authorizationStatus: AuthorizationStatus,
  avatarUrl: string
}

const initialState: initialState = {
  genre: DEFAULT_FILM_GENRE,
  movies: [],
  promoFilm: {
    name: 'The Grand Budapest Hotel',
    genre: 'Drama',
    released: 2014,
    id: 123,
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: ['', ''],
    runTime: 123,
    isFavorite: true,
  },
  genresList: [],
  cardsToShowAmount: FILMS_PER_STEP_AMOUNT,
  favoritesList: [],
  isDataLoaded: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  avatarUrl: 'img/avatar.jpg'
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre,(state, action) => {
      state.genre = action.payload;
    })
    .addCase(showMoreCards, (state) => {
      state.cardsToShowAmount += FILMS_PER_STEP_AMOUNT;
    })
    .addCase(resetCardsToShowAmount, (state) => {
      state.cardsToShowAmount = FILMS_PER_STEP_AMOUNT;
    })
    .addCase(resetFilmCards, (state) => {
      state.cardsToShowAmount = FILMS_PER_STEP_AMOUNT;
      state.genre = DEFAULT_FILM_GENRE;
    })
    .addCase(loadFilms, (state, action) => {
      state.movies = action.payload;
      state.genresList = [ DEFAULT_FILM_GENRE, ...Array.from(new Set(action.payload.map((film) => film.genre))).sort()];
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserAvatar, (state, action) => {
      state.avatarUrl = action.payload;
    });
});

export { reducer };
