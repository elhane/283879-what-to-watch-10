import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PromoFilmProcess } from '../../types/state';
import {fetchPromoFilmAction} from '../api-actions';

const initialState: PromoFilmProcess = {
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
  isDataLoaded: false,
};

export const promoFilmProcess = createSlice({
  name: NameSpace.PromoFilm,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      });
  }
});
