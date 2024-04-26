import { createAction } from '@reduxjs/toolkit';
import { Actions, AppRoute, AuthorizationStatus } from '../../const';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

export const pickCity = createAction(Actions.PICK_CITY, (textContent: string | null) => ({
  payload: textContent,
}));

export const filterOffers = createAction(Actions.FILTER_OFFERS);

export const activeMarkerMap = createAction(Actions.ACTIVE_MARKER_MAP, (id: number| null) => ({payload: id}));

export const loadOffers = createAction<Offer[]>(Actions.LOAD_OFFERS);

export const setOffersDataLoading = createAction<boolean>(Actions.SET_STATUS_OFFERS_DATA_LOADING);

export const requireAuthorization = createAction<AuthorizationStatus>(Actions.REQUIRE_AUTHORIZATION);

export const setError = createAction<string | null>(Actions.SET_ERROR);

export const setUserEmail = createAction<string>(Actions.SET_USER_EMAIL);

export const redirectToRoute = createAction<AppRoute>(Actions.REDIRECT_ROUTE);

export const loadOfferInfo = createAction<Offer>(Actions.LOAD_OFFER_INFO);

export const loadNearbyOffers = createAction<Offer[]>(Actions.LOAD_NEARBY_OFFERS);

export const loadOfferComments = createAction<Review[]>(Actions.LOAD_OFFER_COMMENTS);

export const setCurrentOfferDataLoading = createAction<boolean>(Actions.SET_CURRENT_OFFER_DATA_LOADING);

export const setCommentDataSending = createAction<boolean>(Actions.SET_COMMENT_DATA_SENDING);
