import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { dropToken, saveToken } from '../../services/token';
import { AppDispatch, State } from '../../types/state';
import { Offer } from '../../types/offer';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/user-data';
import { Actions, APIRoute, AppRoute } from '../../const';
import { redirectToRoute } from './action';

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  Actions.FETCH_OFFERS,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  Actions.CHECK_AUTH,
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.LogIn);
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  Actions.LOG_IN,
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.LogIn, {email, password});

    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  Actions.LOG_OUT,
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.LogOut);
    dropToken();
  },
);
