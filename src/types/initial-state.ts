import { Offer } from './offer';

export type initialStateType = {
    cityName: string | null;
    offers: Offer[];
    markerMap: null | number;
    filteredOffers: Offer[];
    isOffersDataLoading: boolean;
}
