import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus, CardType, UserType, LocationType } from '../../const';
import Main from '../../pages/main/main';
import Header from '../header/header';
import Favorited from '../../pages/favorited/favorited';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import SignIn from '../header/signin/signin';
import SignOut from '../header/signout/signout';
import PrivateRoute from '../private-route/private-route';
import NotFound from '../../pages/not-found/not-found';

type AppType = {
  card: CardType[];
  user: UserType;
  city: LocationType;
};

function App({ card, user, city }: AppType): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <Main card={card} city={city}>
                <Header>
                  <SignIn />
                </Header>
              </Main>
            }
          />
          <Route
            path={AppRoute.Favorited}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorited>
                  <Header>
                    <SignOut {...user} />
                  </Header>
                </Favorited>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.SignIn}
            element={
              <Login>
                <Header />
              </Login>
            }
          />
          <Route
            path={AppRoute.Room}
            element={
              <Property>
                <Header>
                  <SignIn />
                </Header>
              </Property>
            }
          />
          <Route
            path="*"
            element={
              <NotFound>
                <Header />
              </NotFound>
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
