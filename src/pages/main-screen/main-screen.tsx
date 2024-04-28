import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import { useSort } from '../../hooks/useSort';
import { SortingTypes } from '../../const';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/location.list';
import CitiesPlaces from '../../components/cities-places/cities-places';
import Map from '../../components/map/map';
import { getCity } from '../../store/reducer/data/selector';

type MainProps = {
  offers: Offer[];
}

function MainScreen({ offers }: MainProps): JSX.Element {
  const currentCity = useAppSelector(getCity);
  const [sortingType, setSortingType] = useState<string | null>(SortingTypes.Popular);
  const sortedOffers = useSort(offers, sortingType);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six-cities</title>
      </Helmet>
      <Header></Header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList currentCity={currentCity}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CitiesPlaces onSortingTypeClick={setSortingType} sortingType={sortingType} offers={sortedOffers} currentCity={currentCity}/>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map points={offers}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
