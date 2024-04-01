export type LocationType = {
  latitude: number;
  longitude: number;
};

export type CardType = {
  id: number;
  type: string;
  premium: boolean;
  title: string;
  price: number;
  favorited: boolean;
  img: string;
  rating: number;
  location: LocationType;
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
    img: 'img/apartment-01.jpg',
    rating: 4,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
    },
  },
  {
    id: 1,
    type: 'Private room',
    premium: false,
    title: 'Wood and stone place',
    price: 80,
    favorited: true,
    img: 'img/room.jpg',
    rating: 4,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
    },
  },
  {
    id: 2,
    type: 'Apartment',
    premium: false,
    title: 'Canal View Prinsengracht',
    price: 132,
    favorited: false,
    img: 'img/apartment-02.jpg',
    rating: 4,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
    },
  },
  {
    id: 3,
    type: 'Apartment',
    premium: true,
    title: 'Nice, cozy, warm big bed apartment',
    price: 180,
    favorited: false,
    img: 'img/apartment-03.jpg',
    rating: 5,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
    },
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
