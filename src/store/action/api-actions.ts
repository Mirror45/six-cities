import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { dropToken, saveToken } from '../../services/token';
import { AppDispatch, State } from '../../types/state';
import { initialStateType } from '../../types/initial-state';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/user-data';
import { Actions, APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../../const';
import { loadOffers, filterOffers ,requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import { store } from '..';

export const clearErrorAction = createAsyncThunk(
  Actions.CLEAR_ERROR,
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  Actions.FETCH_OFFERS,
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<initialStateType['offers']>(APIRoute.Offers);

    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
    dispatch(filterOffers());
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  APIRoute.LogIn,
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.LogIn);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  APIRoute.LogIn,
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.LogIn, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  APIRoute.LogOut,
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.LogOut);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
