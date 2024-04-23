import {createAction} from '@reduxjs/toolkit';
import { Actions } from '../../const';
import { initialStateType } from '../../types/initial-state';

export const pickCity = createAction<initialStateType['cityName']>(Actions.PICK_CITY);

export const filterOffers = createAction(Actions.FILTER_OFFERS);

export const activeMarkerMap = createAction<initialStateType['markerMap']>(Actions.ACTIVE_MARKER_MAP);

export const loadOffers = createAction<initialStateType['offers']>(Actions.LOAD_OFFERS);

export const setOffersDataLoadingStatus = createAction<initialStateType['isOffersDataLoading']>(Actions.SET_OFFERS_DATA_LOADING_STATUS);

export const requireAuthorization = createAction<initialStateType['authorizationStatus']>(Actions.REQUIRE_AUTHORIZATION);

export const setError = createAction<initialStateType['error']>(Actions.SET_ERROR);
