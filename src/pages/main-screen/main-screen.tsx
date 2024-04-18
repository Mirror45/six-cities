import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/location.list';
import CitiesPlaces from '../../components/cities-places/cities-places';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';

type MainProps = {
  offers: Offer[];
}

function MainScreen({ offers }: MainProps): JSX.Element {
  const currentCity = useAppSelector((state)=>state.cityName);

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
            <CitiesPlaces offers={offers}/>
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
