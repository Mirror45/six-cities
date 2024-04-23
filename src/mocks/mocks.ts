import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: 0,
    type: 'Apartment',
    isPremium: true,
    title: 'Beautiful & luxurious apartment at great location',
    price: 120,
    isFavorite: false,
    img: 'img/apartment-01.jpg',
    rating: 2.5,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
    },
    city: {
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
      },
      name: 'Paris',
    }
  },
  {
    id: 1,
    type: 'Private room',
    isPremium: false,
    title: 'Wood and stone place',
    price: 80,
    isFavorite: true,
    img: 'img/room.jpg',
    rating: 4,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
    },
    city: {
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
      },
      name: 'Paris',
    }
  },
  {
    id: 2,
    type: 'Apartment',
    isPremium: false,
    title: 'Canal View Prinsengracht',
    price: 132,
    isFavorite: false,
    img: 'img/apartment-02.jpg',
    rating: 4,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
    },
    city: {
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
      },
      name: 'Amsterdam',
    }
  },
  {
    id: 3,
    type: 'Apartment',
    isPremium: true,
    title: 'Nice, cozy, warm big bed apartment',
    price: 180,
    isFavorite: false,
    img: 'img/apartment-03.jpg',
    rating: 5,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
    },
    city: {
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
      },
      name: 'Amsterdam',
    }
  },
];
