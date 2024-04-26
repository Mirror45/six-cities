import { Link } from 'react-router-dom';
import { CitiesName, SortingTypes } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { pickCity, filterOffers, setSortType } from '../../store/action/action';


function LocationsList(): JSX.Element {
  const currentCity = useAppSelector((state)=>state.cityName);
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list" onClick={(evt) => {
      const target = evt.target as HTMLElement;
      if (target.tagName !== 'SPAN') {
        return;
      }
      dispatch(pickCity(target.firstChild?.textContent ? target.firstChild.textContent : ''));
      dispatch(filterOffers());
      dispatch(setSortType(SortingTypes.Popular));
    }}
    >
      <li className="locations__item">
        <Link className={`locations__item-link tabs__item ${currentCity === CitiesName.PARIS ? 'tabs__item--active' : ''}`} to="#">
          <span>Paris</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className={`locations__item-link tabs__item ${currentCity === CitiesName.COLOGNE ? 'tabs__item--active' : ''}`} to="#">
          <span>Cologne</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className={`locations__item-link tabs__item ${currentCity === CitiesName.BRUSSELS ? 'tabs__item--active' : ''}`} to="#">
          <span>Brussels</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className={`locations__item-link tabs__item ${currentCity === CitiesName.AMSTERDAM ? 'tabs__item--active' : ''}`} to="#">
          <span>Amsterdam</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className={`locations__item-link tabs__item ${currentCity === CitiesName.HAMBURG ? 'tabs__item--active' : ''}`} to="#">
          <span>Hamburg</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className={`locations__item-link tabs__item ${currentCity === CitiesName.DUSSELDORF ? 'tabs__item--active' : ''}`} to="#">
          <span>Dusseldorf</span>
        </Link>
      </li>
    </ul>
  );
}

export default LocationsList;
