import Sort from '../sort/sort';
import AdCardList from '../ad-card-list/ad-card-list';

function CitiesPlaces(): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <Sort/>
      <div className="cities__places-list places__list tabs__content">
        <AdCardList/>
      </div>
    </section>
  );
}

export default CitiesPlaces;
