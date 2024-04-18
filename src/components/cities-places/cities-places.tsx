import Sort from '../sort/sort';
import AdCardList from '../ad-card-list/ad-card-list';
import { Offer } from '../../types/offer';

type CitiesPlacesProps = {
  offers: Offer[];
  sortingType: string | null;
  onSortingTypeClick(value: string | null): void;
  currentCity: string | null;
}

function CitiesPlaces({ offers, onSortingTypeClick, sortingType, currentCity}: CitiesPlacesProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {currentCity}</b>
      <Sort onSortingTypeClick={onSortingTypeClick} sortingType={sortingType}/>
      <div className="cities__places-list places__list tabs__content">
        <AdCardList offers={offers}/>
      </div>
    </section>
  );
}

export default CitiesPlaces;
