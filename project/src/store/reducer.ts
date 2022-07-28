import { createReducer } from '@reduxjs/toolkit';
import { setActiveGenre } from './action';
import { films } from '../mocks/films';
import { DEFAULT_FILM_GENRE } from '../const';

const initialState = {
  genre: DEFAULT_FILM_GENRE,
  movies: films,
  promoFilm: {
    name: 'The Grand Budapest Hotel',
    genre: 'Drama',
    released: 2014
  },
  genresList: [ DEFAULT_FILM_GENRE, ...Array.from(new Set(films.map((film) => film.genre))).sort()]

};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre,(state, action) => {
      state.genre = action.payload;
    });
});

export { reducer };
