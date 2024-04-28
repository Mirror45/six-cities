import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageEvents } from '../../../types/state';
import { SlicesName, SortingTypes } from '../../../const';

const initialState: PageEvents = {
  sortType: SortingTypes.Popular,
  currentOfferId: null,
};

export const pageEvents = createSlice({
  name: SlicesName.Page,
  initialState,
  reducers: {
    setSortType: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },
    setCurrentOfferId: (state, action: PayloadAction<number | null>) => {
      state.currentOfferId = action.payload;
    },
  },
});

export const {setCurrentOfferId, setSortType} = pageEvents.actions;
