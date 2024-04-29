import { SlicesName } from '../../../const';
import { State } from '../../../types/state';
import { Offer } from '../../../types/offer';

export const getFavoriteOffersDataLoadingStatus = (state: State): boolean => state[SlicesName.FavoriteOffersData].isFavoriteOffersDataLoading;
export const getFavoriteOffers = (state: State): Offer[]=> state[SlicesName.FavoriteOffersData].favoriteOffers;
