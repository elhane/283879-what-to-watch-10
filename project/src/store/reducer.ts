import { createReducer } from '@reduxjs/toolkit';
import {resetFilmCards, setActiveGenre, showMoreCards} from './action';
import { films } from '../mocks/films';
import { DEFAULT_FILM_GENRE, FILMS_PER_STEP_AMOUNT } from '../const';

const initialState = {
  genre: DEFAULT_FILM_GENRE,
  movies: films,
  promoFilm: {
    name: 'The Grand Budapest Hotel',
    genre: 'Drama',
    released: 2014
  },
  genresList: [ DEFAULT_FILM_GENRE, ...Array.from(new Set(films.map((film) => film.genre))).sort()],
  cardsToShowAmount: FILMS_PER_STEP_AMOUNT,
  favoritesList: films.filter((film) => film.isFavorite)
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre,(state, action) => {
      state.genre = action.payload;
    })
    .addCase(showMoreCards, (state) => {
      state.cardsToShowAmount += FILMS_PER_STEP_AMOUNT;
    })
    .addCase(resetFilmCards, (state) => {
      state.cardsToShowAmount = FILMS_PER_STEP_AMOUNT;
      state.genre = DEFAULT_FILM_GENRE;
    });
});

export { reducer };
