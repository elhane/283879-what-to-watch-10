import { createReducer } from '@reduxjs/toolkit';
import { getFilmsBySelectedGenre, selectGenre } from './action';
import { films } from '../mocks/films';
import { DEFAULT_FILM_GENRE } from '../const';
import { Films } from '../types/films';

const initialState = {
  genre: DEFAULT_FILM_GENRE,
  movies: films
};

const getFilteredFilms = (genre: string, movies: Films): Films => movies.filter((film) => genre === DEFAULT_FILM_GENRE ? movies : film.genre === genre);

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectGenre,(state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsBySelectedGenre, (state) => {
      state.movies = getFilteredFilms(state.genre, films);
    });
});

export { reducer };
