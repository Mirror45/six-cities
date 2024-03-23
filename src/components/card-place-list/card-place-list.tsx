import { Offers } from "../../types/offers";
import CardPlaceItem from '../card-place-item/card-place-item';

type CardListProps = {
    offers: Offers[];
}

function CardPlaceList({offers}: CardListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <CardPlaceItem key={offer.id} offer={offer}/>)};
    </div>
  );
}

export default CardPlaceList;
