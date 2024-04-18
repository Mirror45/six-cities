type LocationType = {
  latitude: number;
  longitude: number;
};

export type Offer = {
  city: {
    location: LocationType;
    name: string;
  };
  title: string;
  id: number;
  type: string;
  isPremium: boolean;
  isFavorite: boolean;
  price: number;
  img: string;
  rating: number;
  location: LocationType;
};

