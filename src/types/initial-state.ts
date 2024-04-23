import { Offer } from './offer';
import { AuthorizationStatus } from '../const';

export type initialStateType = {
    cityName: string | null;
    offers: Offer[];
    filterOffers: Offer[];
    markerMap: null | number;
    authorizationStatus: AuthorizationStatus;
    isOffersDataLoading: boolean;
    error: string | null;
}
