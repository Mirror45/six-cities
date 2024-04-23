import AdCard from '../ad-card/ad-card';
import { Offer } from '../../types/offer';

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
