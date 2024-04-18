import {createReducer} from '@reduxjs/toolkit';
import { offers } from '../../mocks/mocks';
import { CitiesName } from '../../const';
import { initialStateType } from '../../types/initial-state';
import { pickCity, filterOffers, activeMarkerMap } from '../action/action';

const START_CITY_NAME = 'Paris';

const initialState: initialStateType = {
  cityName: CitiesName.PARIS,
  offers: offers.filter((offer) => offer.city.name === START_CITY_NAME),
  markerMap: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(pickCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(filterOffers, (state) => {
      state.offers = offers.filter((offer)=> offer.city.name === state.cityName);
    })
    .addCase(activeMarkerMap, (state, action) => {
      state.markerMap = action.payload;
    });
});
