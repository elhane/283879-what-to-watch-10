import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, DEFAULT_FILM_GENRE } from '../../const';
import { FilmsData } from '../../types/state';
import { fetchFilmsAction } from '../api-actions';

const initialState: FilmsData = {
  movies: [],
  genresList: [],
  isDataLoaded: false,
};

export const filmsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.genresList = [ DEFAULT_FILM_GENRE, ...Array.from(new Set(action.payload.map((film) => film.genre))).sort()];
        state.isDataLoaded = false;
      });
  }
});
