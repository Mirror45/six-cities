import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus, CardType } from '../../const';
import Main from '../../pages/main/main';
import Favorited from '../../pages/favorited/favorited';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import PrivateRoute from '../private-route/private-route';
import NotFound from '../../pages/not-found/not-found';

type AppType = {
  card: CardType[];
};

function App({ card }: AppType): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <Main card={card}/>
            }
          />
          <Route
            path={AppRoute.Favorited}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorited/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.SignIn}
            element={
              <Login/>
            }
          />
          <Route
            path={AppRoute.Room}
            element={
              <Property card={card.slice(0,3)}></Property>
            }
          />
          <Route
            path="*"
            element={
              <NotFound/>
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
