import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getFilteredOffers } from '../../store/reducer/offers-data/selectors';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/location.list';
import CitiesPlaces from '../../components/cities-places/cities-places';
import Map from '../../components/map/map';
import { MainEmpty } from '../../components/main-empty/main-empty';


function MainScreen(): JSX.Element {
  const offers = useAppSelector(getFilteredOffers);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six cities</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList/>
          </section>
        </div>
        <div className="cities">
          {!offers.length ? <MainEmpty /> :
            <div className="cities__places-container container">
              <CitiesPlaces offers={offers}/>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map points={offers}/>
                </section>
              </div>
            </div>}
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
