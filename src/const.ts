export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorited = '/favorited',
  Room = '/offer/:id?',
  Comment = '/comments/',
  NearbyOffers = '/nearby',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CitiesName {
  AMSTERDAM = 'Amsterdam',
  COLOGNE = 'Cologne',
  PARIS = 'Paris',
  DUSSELDORF = 'Dusseldorf',
  BRUSSELS = 'Brussels',
  HAMBURG = 'Hamburg',
}

export enum SortingTypes {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum Actions {
  PICK_CITY = 'PICK_CITY',
  FILTER_OFFERS = 'FILTER_OFFERS',
  LOAD_OFFERS = 'LOAD_OFFERS',
  SET_STATUS_OFFERS_DATA_LOADING = 'SET_STATUS_OFFERS_DATA_LOADING',
  REQUIRE_AUTHORIZATION = 'REQUIRE_AUTHORIZATION',
  ACTIVE_MARKER_MAP = 'ACTIVE_MARKER_MAP',
  SET_USER_EMAIL = 'SET_USER_EMAIL',
  REDIRECT_ROUTE = 'REDIRECT_ROUTE',
  LOAD_OFFER_INFO = 'LOAD_OFFER_INFO',
  LOAD_NEARBY_OFFERS = 'LOAD_NEARBY_OFFERS',
  LOAD_OFFER_COMMENTS = 'LOAD_OFFER_COMMENTS',
  SET_CURRENT_OFFER_DATA_LOADING = 'SET_CURRENT_OFFER_DATA_LOADING',
  SET_COMMENT_DATA_SENDING = 'SET_COMMENT_DATA_SENDING',
  SET_SORT_TYPE = 'SET_SORT_TYPE',
  SET_CURRENT_OFFER_ID = 'SET_CURRENT_OFFER_ID',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comment = '/comments',
  NearbyOffers = '/nearby',
  FavoriteOffers = '/favorite/',
}

export enum SlicesName {
  Page = 'PAGE',
  User = 'USER',
  OffersData = 'OFFERS_DATA',
  FavoriteOffersData = 'FAVORITE_OFFERS_DATA',
  CurrentOfferData = 'CURRENT_OFFER_DATA',
  UserReview = 'USER_REVIEW',
}

export const RATING_STARS_STYLE_KOEF = 20;

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export type UserType = {
  email: string;
};

export const User: UserType = {
  email: 'Oliver.conner@gmail.com',
};

