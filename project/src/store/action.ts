import { createAction } from '@reduxjs/toolkit';

export const selectGenre = createAction('film/selectGenre', (value) => ({
  payload: value,
}));

export const getFilmsBySelectedGenre = createAction('film/getFilmsBySelectedGenre');
