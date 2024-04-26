import {createReducer} from '@reduxjs/toolkit';
import { CitiesName, AuthorizationStatus, SortingTypes } from '../../const';
import { initialStateType } from '../../types/initial-state';
import { pickCity, filterOffers, activeMarkerMap, loadOffers, setOffersDataLoading, requireAuthorization, setError, setUserEmail, loadNearbyOffers, loadOfferComments, loadOfferInfo, setCommentDataSending, setCurrentOfferDataLoading, setSortType, setCurrentOfferId } from '../action/action';

const initialState: initialStateType = {
  cityName: CitiesName.PARIS,
  sortType: SortingTypes.Popular,
  offers: [],
  markerMap: null,
  filteredOffers: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  userEmail: '',
  currentOffer: {
    offerInfo: null,
    comments: [],
    nearbyOffers: [],
    isCommentDataSending: false,
    currentOfferId: null,
  },
  isCurrentOfferDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(pickCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(filterOffers, (state) => {
      state.filteredOffers = state.offers.filter((offer)=> offer.city.name === state.cityName);
    })
    .addCase(activeMarkerMap, (state, action) => {
      state.markerMap = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoading, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    })
    .addCase(loadOfferInfo, (state, action) => {
      state.currentOffer.offerInfo = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.currentOffer.nearbyOffers = action.payload;
    })
    .addCase(loadOfferComments, (state, action) => {
      state.currentOffer.comments = action.payload;
    })
    .addCase(setCurrentOfferDataLoading, (state, action) => {
      state.isCurrentOfferDataLoading = action.payload;
    })
    .addCase(setCommentDataSending, (state, action) => {
      state.currentOffer.isCommentDataSending = action.payload;
    })
    .addCase(setCurrentOfferId, (state, action) => {
      state.currentOffer.currentOfferId = action.payload;
    });
});
