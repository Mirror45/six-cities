export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorited = '/favorited',
  Room = '/offer/:id?',
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
  ACTIVE_MARKER_MAP = 'ACTIVE_MARKER_MAP',
  FETCH_OFFERS = 'FETCH_OFFERS',
  CHECK_AUTH = 'CHECK_AUTH',
  LOG_OUT = 'LOG_OUT',
  LOG_IN = 'LOG_IN',
  REDIRECT_TO_ROUTE = 'REDIRECTTOROUTE',
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

export enum APIRoute {
  Offers = '/offers',
  LogIn = '/login',
  LogOut = '/logout',
}

export enum NameSpace {
  DATA = 'DATA',
  USER = 'USER',
}
