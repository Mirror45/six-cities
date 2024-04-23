type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
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
  previewImage: string;
  rating: number;
  location: LocationType;
};


