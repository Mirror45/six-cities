import {createReducer} from '@reduxjs/toolkit';
import { CitiesName, AuthorizationStatus } from '../../const';
import { initialStateType } from '../../types/initial-state';
import { pickCity, filterOffers, activeMarkerMap, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus } from '../action/action';

const initialState: initialStateType = {
  cityName: CitiesName.PARIS,
  offers: [],
  filterOffers: [],
  markerMap: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(pickCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(filterOffers, (state) => {
      state.filterOffers = state.offers.filter((offer)=> offer.city.name === state.cityName);
    })
    .addCase(activeMarkerMap, (state, action) => {
      state.markerMap = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
