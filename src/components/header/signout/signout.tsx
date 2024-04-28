import { useAppDispatch } from '../../../hooks';
import { UserType } from '../../../const';
import { logoutAction } from '../../../store/action/api-actions';

function SignOut({ email }: UserType): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper" />
            <span className="header__user-name user__name">{email}</span>
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#" onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          >
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SignOut;
