import { SlicesName } from '../../../const';
import { State } from '../../../types/state';
import { Offer } from '../../../types/offer';

export const getOffersDataLoadingStatus = (state: State): boolean => state[SlicesName.OffersData].isOffersDataLoading;
export const getOffers = (state: State): Offer[]=> state[SlicesName.OffersData].offers;
export const getFilteredOffers = (state: State): Offer[]=> state[SlicesName.OffersData].filteredOffers;
export const getCityName = (state: State): string => state[SlicesName.OffersData].cityName;
