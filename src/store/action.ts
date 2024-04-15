import { createAction } from '@reduxjs/toolkit';
import { CardType } from '../const';

export const toogleCityAction = createAction<CardType['city']['name']>('city');

export const filterCardAction = createAction<CardType>('card');
