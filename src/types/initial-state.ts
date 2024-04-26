import { Offer } from './offer';
import { Review } from './review';

export type initialStateType = {
    cityName: string;
    sortType: string;
    offers: Offer[];
    markerMap: null | number;
    filteredOffers: Offer[];
    isOffersDataLoading: boolean;
    authorizationStatus: string;
    error: string | null;
    userEmail: string;
    currentOffer: {
      offerInfo: Offer | null;
      comments: Review[];
      nearbyOffers: Offer[];
      isCommentDataSending: boolean;
      currentOfferId: number | null;
    };
    isCurrentOfferDataLoading: boolean;
}
