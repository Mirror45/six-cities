import { createAction } from '@reduxjs/toolkit';
import { Actions } from '../../const';
import { Offer } from '../../types/offer';

export const pickCity = createAction(Actions.PICK_CITY, (textContent: string | null) => ({
  payload: textContent,
}));

export const filterOffers = createAction(Actions.FILTER_OFFERS);

export const activeMarkerMap = createAction(Actions.ACTIVE_MARKER_MAP, (id: number| null) => ({payload: id}));

export const loadOffers = createAction<Offer[]>(Actions.LOAD_OFFERS);

export const setOffersDataLoading = createAction<boolean>(Actions.SET_STATUS_OFFERS_DATA_LOADING);
