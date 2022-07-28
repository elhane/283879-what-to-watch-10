import { createAction } from '@reduxjs/toolkit';

export const setActiveGenre = createAction('film/setActiveGenre', (value) => ({
  payload: value,
}));
