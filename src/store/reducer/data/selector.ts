import { NameSpace } from '../../../const';
import { State } from '../../../type/state';

export const getFilterOffers = (state: State) => state[NameSpace.DATA].filterOffers;
export const getOffersDataLoadingStatus = (state: State) => state[NameSpace.DATA].isOffersDataLoading;
export const getCity = (state: State) => state[NameSpace.DATA].cityName;
export const getErrorStatus = (state: State): boolean => state[NameSpace.DATA].hasError;
