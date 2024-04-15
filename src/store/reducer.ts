import {createReducer} from '@reduxjs/toolkit';
import { toogleCityAction, filterCardAction } from './action';
import { Cards } from '../const';

const initialState = {
  cards: Cards,
  filterCards: [],
  city: Cards[0].city.name,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toogleCityAction, (state, action) => {
      state.city = action.payload;
    });
});
