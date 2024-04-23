import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritedScreen from '../../pages/favorited-screen/favorited-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state)=>state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state)=>state.isOffersDataLoading);
  const filterOffers = useAppSelector((state)=>state.filterOffers);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainScreen offers={filterOffers}/>
            }
          />
          <Route
            path={AppRoute.Favorited}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritedScreen/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.SignIn}
            element={
              <LoginScreen/>
            }
          />
          <Route
            path={AppRoute.Room}
            element={
              <PropertyScreen/>
            }
          />
          <Route
            path="*"
            element={
              <NotFoundScreen/>
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
