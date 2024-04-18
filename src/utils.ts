import { Offer } from './types/offer';
import { RATING_STARS_STYLE_KOEF } from './const';

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
