export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorited = '/favorited',
  Room = '/offers/:id?',
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
  SET_ERROR = 'SET_ERROR',
  ACTIVE_MARKER_MAP = 'ACTIVE_MARKER_MAP',
  SET_USER_EMAIL = 'SET_USER_EMAIL',
  REDIRECT_ROUTE = 'REDIRECT_ROUTE',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}

export const RATING_STARS_STYLE_KOEF = 20;

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const TIMEOUT_SHOW_ERROR = 2000;

export type UserType = {
  email: string;
};

export const User: UserType = {
  email: 'Oliver.conner@gmail.com',
};

