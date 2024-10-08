import {useRef, FormEvent} from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { getCityName } from '../../store/reducer/offers-data/selectors';
import { loginAction } from '../../store/action/api-actions';
import { AuthData } from '../../types/auth-data';
import { getAuthorizationStatus } from '../../store/reducer/authorization-user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../const';
import Header from '../../components/header/header';

function LoginScreen(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCityName);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    authorizationStatus !== AuthorizationStatus.Auth ?
      <div className="page page--gray page--login">
        <Helmet>
          <title>Login</title>
        </Helmet>
        <Header />
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" ref={loginRef} type="email" name="email" placeholder="Email" required/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" ref={passwordRef} type="password" name="password" placeholder="Password" required/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to="/">
                  <span>{currentCity}</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
      :
      <Navigate to={AppRoute.Main} />
  );
}

export default LoginScreen;
