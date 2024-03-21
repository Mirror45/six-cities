export type CardType = {
  id: number;
  type: string;
};

export const Cards: CardType[] = [
  { id: 0, type: 'Apartment' },
  { id: 1, type: 'Private room' },
  { id: 2, type: 'Apartment' },
  { id: 3, type: 'Apartment' },
  { id: 4, type: 'Private room' },
];

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorited = '/favorited',
  Room = '/offer/:id?',
}
