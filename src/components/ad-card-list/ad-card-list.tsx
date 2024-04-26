import { Offer } from '../../types/offer';
import AdCard from '../ad-card/ad-card';

type AdCardListProps = {
  offers: Offer[];
}

function AdCardList({ offers}: AdCardListProps): JSX.Element {

  return (
    <>
      {offers.map((offer) => (<AdCard key={offer.id} {...offer} />))}
    </>
  );
}

export default AdCardList;
