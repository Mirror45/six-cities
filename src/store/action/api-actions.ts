import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { Offer } from '../../types/offer';
import { AppDispatch, State } from '../../types/state';
import { filterOffers, loadOffers, setOffersDataLoading } from './action';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoading(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoading(false));
    dispatch(loadOffers(data));
    dispatch(filterOffers());
  },
);
