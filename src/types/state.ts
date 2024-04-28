import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import { Offer } from './offer';

export type DataApi = {
  offers: Offer[];
  filterOffers: Offer[];
  isOffersDataLoading: boolean;
  cityName: string|null;
  hasError: boolean;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  markerMap: number|null;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
