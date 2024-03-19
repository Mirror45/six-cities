import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPages from '../pages/main-pages-screen/main-pages-screen';
import Login from '../pages/login-screen/login-screen';
import FavoritesList from '../pages/favorites-list-screen/favorites-list-screen';
import Property from '../pages/property-screen/property-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

type AppPlacesFoundProps = {
  countAmsterdam: number;
}

function App({countAmsterdam}: AppPlacesFoundProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPages countAmsterdam={countAmsterdam} />}
          />
          <Route
            path={AppRoute.Sign_In}
            element={<Login />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesList />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Property}
            element={<Property />}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
