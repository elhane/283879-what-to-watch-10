import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { Film, Films } from '../../types/films';

export const getCurrentFilm = (state: State): Film => state[NameSpace.Film].currentFilm;
export const getActiveGenre = (state: State): string => state[NameSpace.Film].genre;
export const getCardsToShowAmount = (state: State): number => state[NameSpace.Film].cardsToShowAmount;
export const getSimilarFilms = (state: State): Films => state[NameSpace.Film].similarFilms;
export const getFavoritesList = (state: State): Films => state[NameSpace.Film].favoritesList;
