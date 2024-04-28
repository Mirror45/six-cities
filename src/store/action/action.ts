import {createAction} from '@reduxjs/toolkit';
import { Actions } from '../../const';
import { AppRoute } from '../../const';

export const pickCity = createAction<string|null>(Actions.PICK_CITY);

export const activeMarkerMap = createAction<number|null>(Actions.ACTIVE_MARKER_MAP);

export const redirectToRoute = createAction<AppRoute>(Actions.REDIRECT_TO_ROUTE);
