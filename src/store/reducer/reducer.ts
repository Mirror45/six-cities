import {createReducer} from '@reduxjs/toolkit';
// import { offers } from '../../mocks/mocks';
import { CitiesName } from '../../const';
import { initialStateType } from '../../types/initial-state';
import { pickCity, filterOffers, activeMarkerMap, loadOffers, setOffersDataLoading } from '../action/action';

const initialState: initialStateType = {
  cityName: CitiesName.PARIS,
  offers: [],
  markerMap: null,
  filteredOffers: [],
  isOffersDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(pickCity, (state, action) => {
      state.cityName = action.payload;
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
    });
});
