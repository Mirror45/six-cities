import Sort from '../sort/sort';
import AdCardList from '../ad-card-list/ad-card-list';
import { CardType } from '../../const';

type CitiesProp = {
  cards: CardType[];
  active: any;
}

function CitiesPlaces({active, cards}: CitiesProp): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <Sort/>
      <div className="cities__places-list places__list tabs__content">
        <AdCardList active={active} cards={cards}/>
      </div>
    </section>
  );
}

export default CitiesPlaces;
