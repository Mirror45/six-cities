import { Offers } from "../types/offers";

export const offers: Offers[] = [
  {
    id: 1,
    price: '125',
    title: 'Title 1',
    description: 'Desciption 1',
    is_premium: true,
    is_type: 'Private room 1 ',
    is_favorite: false,
    img: 'img/apartment-03.jpg',
    rating: 3.5,
  },
  {
    id: 3,
    price: '215',
    title: 'Title 2',
    description: 'Desciption 2',
    is_premium: false,
    is_type: 'Private room 2',
    is_favorite: false,
    img: 'img/apartment-02.jpg',
    rating: 2,
  },
  {
    id: 2,
    price: '80',
    title: 'Title 3',
    description: 'Desciption 3',
    is_premium: false,
    is_type: 'Private room 3',
    is_favorite: true,
    img: 'img/apartment-01.jpg',
    rating: 1.5,
  },
  {
    id: 2,
    price: '180',
    title: 'Title 4',
    description: 'Desciption 4',
    is_premium: true,
    is_type: 'Private room 4',
    is_favorite: true,
    img: 'img/room.jpg',
    rating: 4.5,
  },
];

