import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { Films } from '../../types/films';

export const getFilms = (state: State): Films => state[NameSpace.Data].movies;
export const getGenresList = (state: State): string[] => state[NameSpace.Data].genresList;
export const getLoaderStatus = (state: State): boolean => state[NameSpace.Data].isShowLoader;
