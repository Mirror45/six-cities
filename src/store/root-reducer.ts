import { combineReducers } from '@reduxjs/toolkit';
import { SlicesName } from '../const';
import { authorizationUserProcess } from './reducer/authorization-user-process/authorization-user-process';
import { currentOfferData } from './reducer/current-offer-data/current-offer-data';
import { userReview } from './reducer/user-review/user-review';
import { offersData } from './reducer/offers-data/offers-data';
import { pageEvents } from './reducer/page-events/page-events';
import {favoriteOffersData} from './reducer/favorite-offers-data/favorite-offers-data';

export const rootReducer = combineReducers({
  [SlicesName.User]: authorizationUserProcess.reducer,
  [SlicesName.Page]: pageEvents.reducer,
  [SlicesName.OffersData]: offersData.reducer,
  [SlicesName.CurrentOfferData]: currentOfferData.reducer,
  [SlicesName.UserReview]: userReview.reducer,
  [SlicesName.FavoriteOffersData]: favoriteOffersData.reducer,
});
