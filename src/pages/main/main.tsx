import LocationsList from '../../components/locations-list/location.list';
import Card from '../../components/ad-card/ad-card';
import Map from '../../components/map/map';
import { CardType, ChildrenType, LocationType } from '../../const';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

type MainType = {
  card: CardType[];
  city: LocationType;
} & ChildrenType;

function Main({ card, children, city }: MainType): JSX.Element {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six-cities</title>
      </Helmet>
      {children}
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {card.map((item) => (
                  <Card key={item.id} {...item} active={setActive} />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map points={card.map(({ id, location }) => ({ id, ...location }))} city={city} active={active} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
