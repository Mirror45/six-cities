import AdCard from '../ad-card/ad-card';
import { Offer } from '../../types/offer';
import { activeType } from '../../const';

type AdCardListProps = {
  offers: Offer[];
  active: any;
}

function AdCardList({active, offers}: AdCardListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (<AdCard key={offer.id} {...offer} active={active} />))}
    </>
  );
}

export default AdCardList;
