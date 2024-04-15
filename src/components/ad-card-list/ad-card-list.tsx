import AdCard from '../ad-card/ad-card';
import { CardType } from '../../const';
import { activeType } from '../../const';

type AdCardListProps = {
  cards: CardType[];
  active: any;
}

function AdCardList({active, cards}: AdCardListProps): JSX.Element {
  return (
    <>
      {cards.map((item) => (<AdCard key={item.id} {...item} active={active} />))}
    </>
  );
}

export default AdCardList;
