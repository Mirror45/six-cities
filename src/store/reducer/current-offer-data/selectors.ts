import { SlicesName } from '../../../const';
import { State } from '../../../types/state';
import { Offer } from '../../../types/offer';
import { Review } from '../../../types/review';

export const getCurrentOfferDataLoadingStatus = (state: State): boolean => state[SlicesName.CurrentOfferData].isCurrentOfferDataLoading;
export const getOfferInfo = (state: State): Offer | null => state[SlicesName.CurrentOfferData].offerInfo;
export const getComments = (state: State): Review[] => state[SlicesName.CurrentOfferData].comments;
export const getNearbyOffers = (state: State): Offer[] => state[SlicesName.CurrentOfferData].nearbyOffers;
