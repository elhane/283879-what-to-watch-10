import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Film } from '../../types/films';

export const getPromoFilm = (state: State): Film => state[NameSpace.PromoFilm].promoFilm;
export const getDataLoadedStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;

