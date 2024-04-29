import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction, fetchFavoriteOffersAction } from '../../store/action/api-actions';
import { getAuthorizationStatus, getUserEmail } from '../../store/reducer/authorization-user-process/selectors';
import { getFavoriteOffers } from '../../store/reducer/favorite-offers-data/selectors';
import { memo } from 'react';


function MainHeader(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userEmail = useAppSelector(getUserEmail);
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            {authorizationStatus === AuthorizationStatus.Auth &&
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" onClick={() => {
                    dispatch(fetchFavoriteOffersAction());
                  }} to="/favorites"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{userEmail}</span>
                    <span className="header__favorite-count">{favoriteOffers.length}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/" onClick={() => {
                    dispatch(logoutAction());
                  }}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>}
            {authorizationStatus !== AuthorizationStatus.Auth &&
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/login">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>}
          </nav>
        </div>
      </div>
    </header>
  );
}

const Header = memo(MainHeader);

export default Header;
