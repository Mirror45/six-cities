import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../../const';
import {DataApi} from '../../../types/state';
import {fetchOffersAction} from '../../action/api-actions';
import { CitiesName } from '../../../const';
import { pickCity } from '../../action/action';

const initialState: DataApi = {
  offers: [],
  filterOffers: [],
  isOffersDataLoading: false,
  cityName: CitiesName.PARIS,
  hasError: false,
};

export const dataApi = createSlice({
  name: NameSpace.DATA,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
        state.filterOffers = action.payload.filter((offer)=> offer.city.name === state.cityName);
      })
      .addCase(pickCity, (state, action) => {
        state.cityName = action.payload;
        state.filterOffers = state.offers.filter((offer)=> offer.city.name === action.payload);
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      });
  }
});
