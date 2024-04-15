import LocationsList from '../../components/locations-list/location.list';
import CitiesPlaces from '../../components/cities-places/cities-places';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import { CardType } from '../../const';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

type MainType = {
  cards: CardType[];
}

function Main({ cards }: MainType): JSX.Element {
  const [active, setActive] = useState<number | null>(null);
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
            <LocationsList/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CitiesPlaces active={setActive} cards={cards}/>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map points={cards} active={active} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
