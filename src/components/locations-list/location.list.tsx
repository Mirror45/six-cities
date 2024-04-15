import { useAppSelector, useAppDispatch } from '../../hooks';
import { toogleCityAction } from '../../store/action';

function LocationsList(): JSX.Element {
  const {city} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  //dispatch(toogleCityAction(city))


  return (
    <ul className="locations__list tabs__list">
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span>Paris{city}</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span>Cologne</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span>Brussels</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item tabs__item--active">
          <span>Amsterdam</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span>Hamburg</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span>Dusseldorf</span>
        </a>
      </li>
    </ul>
  );
}

export default LocationsList;
