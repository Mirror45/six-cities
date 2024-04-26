import { useState } from 'react';
import { SortingTypes } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSortType } from '../../store/action/action';


function Sort(): JSX.Element {
  const [sortingOptionsOpened, setSortingOptionsOpened] = useState(false);
  const sortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setSortingOptionsOpened(!sortingOptionsOpened)}>
        {sortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${sortingOptionsOpened ? 'places__options--opened' : 'places__options--closed'}`}
        onClick={(evt) => {
          const target = evt.target as HTMLElement;
          if(target.tagName !== 'LI') {
            return;
          }
          dispatch(setSortType(target.textContent || ''));
          setSortingOptionsOpened(!sortingOptionsOpened);
        }}
      >
        <li className={`places__option ${sortType === SortingTypes.Popular ? 'places__option--active' : ''}`} tabIndex={0}>
          Popular
        </li>
        <li className={`places__option ${sortType === SortingTypes.LowToHigh ? 'places__option--active' : ''}`} tabIndex={0}>
          Price: low to high
        </li>
        <li className={`places__option ${sortType === SortingTypes.HighToLow ? 'places__option--active' : ''}`} tabIndex={0}>
          Price: high to low
        </li>
        <li className={`places__option ${sortType === SortingTypes.TopRated ? 'places__option--active' : ''}`} tabIndex={0}>
          Top rated first
        </li>
      </ul>
    </form>
  );
}

export default Sort;
