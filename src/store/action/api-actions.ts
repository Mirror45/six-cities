import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { CommentData } from '../../types/comment-data';
import { AppDispatch, State } from '../../types/state';
import { redirectToRoute } from './action';
import { APIRoute, AppRoute } from '../../const';
import { saveToken, dropToken } from '../../services/token';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/user-data';


export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);

    return data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Room));

    return data.email;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchOfferInfoAction = createAsyncThunk<{offerData: Offer; nearbyOffersData: Offer[]; commentsData: Review[]}, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offerInfoInit',
  async(id, { extra: api}) => {
    const {data: offerData} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
    const {data: nearbyOffersData} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}${APIRoute.NearbyOffers}`);
    const {data: commentsData} = await api.get<Review[]>(`${APIRoute.Comment}/${id}`);

    return {offerData, nearbyOffersData, commentsData};
  },
);


export const sendOfferCommentAction = createAsyncThunk<Review[], {
  id: string;
  commentData: CommentData;
  resetFormData: () => void;
    },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'sendOfferComment',
    async({id, resetFormData, commentData}, { extra: api}) => {
      const {data} = await api.post<Review[]>(`${APIRoute.Comment}/${id}`, commentData);
      resetFormData();

      return data;
    }
    );


export const fetchFavoriteOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavoriteOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.FavoriteOffers);

    return data;
  },
);

export const setOfferFavoriteStatusAction = createAsyncThunk<Offer, {
  id: number;
  favoriteStatus: string;
    },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'setOfferFavoriteStatus',
    async({id, favoriteStatus}, {dispatch, extra: api}) => {
      // const {data} = await api.post<Offer>(APIRoute.FavoriteOffers + id.toString() + APIRoute.JustSlash + favoriteStatus);
      const {data} = await api.post<Offer>(`${APIRoute.FavoriteOffers}/${id}/${favoriteStatus}`);
      dispatch(fetchFavoriteOffersAction());

      return data;
    }
  );
