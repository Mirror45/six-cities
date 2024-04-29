import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OffersData } from '../../../types/state';
import { fetchOffersAction, setOfferFavoriteStatusAction } from '../../action/api-actions';
import { SlicesName, CitiesName } from '../../../const';

const initialState: OffersData = {
  isOffersDataLoading: false,
  offers: [],
  filteredOffers: [],
  cityName: CitiesName.PARIS,
};

export const offersData = createSlice({
  name: SlicesName.OffersData,
  initialState,
  reducers: {
    filterOffers: (state) => {
      state.filteredOffers = state.offers.filter((offer)=> offer.city.name === state.cityName);
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.cityName = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
        state.filteredOffers = state.offers.filter((offer)=> offer.city.name === state.cityName);
      })
      .addCase(setOfferFavoriteStatusAction.fulfilled, (state, action) => {
        const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
        state.offers = [
          ...state.offers.slice(0, index),
          action.payload,
          ...state.offers.slice(index + 1),
        ];
        state.filteredOffers = state.offers.filter((offer)=> offer.city.name === state.cityName);
      });
  }
});

export const {filterOffers, setCity} = offersData.actions;
