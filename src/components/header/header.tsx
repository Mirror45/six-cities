import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import SignIn from './signin/signin';
import SignOut from './signout/signout';
import { AppRoute } from '../../const';
import { User } from '../../const';
import { getAuthorizationStatus } from '../../store/reducer/user/selector';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const {email} = User;
  const chield = authorizationStatus === AuthorizationStatus.Auth ? <SignOut email={email}/> : <SignIn/>;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </a>
          </div>
          {document.location.pathname === AppRoute.SignIn ? null : chield}
        </div>
      </div>
    </header>
  );
}

export default Header;
