import {createAction} from '@reduxjs/toolkit';
import { Actions } from '../../const';

export const pickCity = createAction(Actions.PICK_CITY, (textContent: string | null) => ({
  payload: textContent,
}));

export const filterOffers = createAction(Actions.FILTER_OFFERS);
