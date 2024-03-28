export type CardType = {
  id: number;
  type: string;
  premium: boolean;
  title: string;
  price: number;
  favorited: boolean;
};

export type UserType = {
  email: string;
};

export type ChildrenType = {
  children: JSX.Element;
};

export const User: UserType = {
  email: 'Oliver.conner@gmail.com',
};

export const Cards: CardType[] = [
  {
    id: 0,
    type: 'Apartment',
    premium: true,
    title: 'Beautiful & luxurious apartment at great location',
    price: 120,
    favorited: false,
  },
  {
    id: 1,
    type: 'Private room',
    premium: false,
    title: 'Wood and stone place',
    price: 80,
    favorited: true,
  },
  {
    id: 2,
    type: 'Apartment',
    premium: false,
    title: 'Canal View Prinsengracht',
    price: 132,
    favorited: false,
  },
  {
    id: 3,
    type: 'Apartment',
    premium: true,
    title: 'Nice, cozy, warm big bed apartment',
    price: 180,
    favorited: false,
  },
  {
    id: 4,
    type: 'Private room',
    premium: false,
    title: 'Wood and stone place',
    price: 80,
    favorited: true,
  },
];

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
