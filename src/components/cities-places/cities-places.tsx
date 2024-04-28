import { useMemo } from 'react';
import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';
import { sortOffers } from '../../utils';
import Sort from '../sort/sort';
import AdCardList from '../ad-card-list/ad-card-list';
import { getCityName } from '../../store/reducer/offers-data/selectors';
import { getSortType } from '../../store/reducer/page-events/selectors';

type CitiesPlacesProps = {
  offers: Offer[];
}

function CitiesPlaces({ offers}: CitiesPlacesProps): JSX.Element {
  const currentCity = useAppSelector(getCityName);
  const sortType = useAppSelector(getSortType);
  const sortedOffers = useMemo(() => sortOffers(offers, sortType), [offers, sortType]);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {currentCity}</b>
      <Sort />
      <div className="cities__places-list places__list tabs__content">
        <AdCardList offers={sortedOffers}/>
      </div>
    </section>
  );
}

export default CitiesPlaces;
