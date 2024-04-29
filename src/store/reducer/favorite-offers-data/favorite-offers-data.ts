import { createSlice } from '@reduxjs/toolkit';
import { FavoriteOffersData } from '../../../types/state';
import { fetchFavoriteOffersAction } from '../../action/api-actions';
import { SlicesName } from '../../../const';

const initialState: FavoriteOffersData = {
  isFavoriteOffersDataLoading: false,
  favoriteOffers: [],
};

export const favoriteOffersData = createSlice({
  name: SlicesName.FavoriteOffersData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isFavoriteOffersDataLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteOffersDataLoading = false;
      });
  }
});
