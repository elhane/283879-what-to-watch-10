import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Comments } from '../../types/comments';

export const getReviews = (state: State): Comments => state[NameSpace.Reviews].reviews;
export const getLoaderStatus = (state: State): boolean => state[NameSpace.Film].isShowLoader;
export const getLoadingFailedStatus = (state: State): boolean => state[NameSpace.Film].isLoadingFailed;

