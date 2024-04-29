import { Offer } from './types/offer';
import { RATING_STARS_STYLE_KOEF, SortingTypes } from './const';
import dayjs from 'dayjs';

export function getRatingStarsStyle(rating: number): string {
  return `${RATING_STARS_STYLE_KOEF * rating}%`;
}

export function compareOffersPriceUp(offerA: Offer, offerB: Offer) {
  return offerA.price - offerB.price;
}

export function compareOffersPriceDown(offerA: Offer, offerB: Offer) {
  return offerB.price - offerA.price;
}

export function compareOffersRatingDown(offerA: Offer, offerB: Offer) {
  return offerB.rating - offerA.rating;
}

export function sortOffers(offers: Offer[], sortingType: string | null) {
  const sortedOffers = [...offers];
  switch(sortingType) {
    case SortingTypes.LowToHigh:
      return sortedOffers.sort(compareOffersPriceUp);
    case SortingTypes.HighToLow:
      return sortedOffers.sort(compareOffersPriceDown);
    case SortingTypes.TopRated:
      return sortedOffers.sort(compareOffersRatingDown);
    default:
      return sortedOffers;
  }
}

const RELEASE_DATE_FORMAT = 'MMMM YYYY';

export function humanizeReleaseDate(releaseDate: string) {
  return releaseDate ? dayjs(releaseDate).format(RELEASE_DATE_FORMAT) : '';
}
