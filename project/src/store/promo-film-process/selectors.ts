import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Film } from '../../types/films';

export const getPromoFilm = (state: State): Film => state[NameSpace.PromoFilm].promoFilm;
