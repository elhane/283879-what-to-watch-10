import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, DEFAULT_FILM_GENRE, FILMS_PER_STEP_AMOUNT } from '../../const';
import { FilmProcess } from '../../types/state';
import { fetchCurrentFilmAction, fetchSimilarFilmsAction, fetchFilmsFavoriteAction, postFilmFavoriteStatusAction } from '../api-actions';

const initialState: FilmProcess = {
  genre: DEFAULT_FILM_GENRE,
  cardsToShowAmount: FILMS_PER_STEP_AMOUNT,
  favoritesList: [],
  currentFilm: {
    name: '',
    genre: '',
    released: 0,
    id: 0,
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
    runTime: 0,
    isFavorite: false,
  },
  similarFilms: [],
  isShowLoader: false,
  isLoadingFailed: false,
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    showMoreCards: (state) => {
      state.cardsToShowAmount += FILMS_PER_STEP_AMOUNT;
    },
    resetCardsToShowAmount: (state) => {
      state.cardsToShowAmount = FILMS_PER_STEP_AMOUNT;
    },
    setActiveGenre: (state, action) => {
      state.genre = action.payload;
    },
    resetFilmCards: (state) => {
      state.cardsToShowAmount = FILMS_PER_STEP_AMOUNT;
      state.genre = DEFAULT_FILM_GENRE;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentFilmAction.pending, (state) => {
        state.isShowLoader = true;
      })
      .addCase(fetchCurrentFilmAction.fulfilled, (state, action) => {
        state.currentFilm = action.payload;
      })
      .addCase(fetchCurrentFilmAction.rejected, (state) => {
        state.isShowLoader = false;
        state.isLoadingFailed = true;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.isShowLoader = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isShowLoader = false;
        state.isLoadingFailed = false;
      })
      .addCase(fetchSimilarFilmsAction.rejected, (state) => {
        state.isShowLoader = false;
        state.isLoadingFailed = true;
      })
      .addCase(fetchFilmsFavoriteAction.pending, (state) => {
        state.isShowLoader = true;
      })
      .addCase(fetchFilmsFavoriteAction.fulfilled, (state, action) => {
        state.favoritesList = action.payload;
        state.isShowLoader = false;
      })
      .addCase(postFilmFavoriteStatusAction.fulfilled, (state, action) => {
        state.favoritesList = action.payload;
      });
  }
});

export const { showMoreCards, resetCardsToShowAmount, setActiveGenre, resetFilmCards } = filmProcess.actions;
