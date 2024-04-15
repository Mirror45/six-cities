import AdCard from '../ad-card/ad-card';

function AdCardList(): JSX.Element {
  return (
    <>
      {card.map((item) => (<AdCard key={item.id} {...item} active={setActive} />))}
    </>
  );
}

export default AdCardList;
