import { RATING_STARS_STYLE_KOEF } from './const';

export function getRatingStarsStyle(rating: number): string {
  return `${RATING_STARS_STYLE_KOEF * rating}%`;
}
