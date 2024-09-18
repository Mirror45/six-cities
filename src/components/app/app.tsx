import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritedScreen from '../../pages/favorited-screen/favorited-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { getOffersDataLoadingStatus } from '../../store/reducer/offers-data/selectors';
import { getCurrentOfferDataLoadingStatus } from '../../store/reducer/current-offer-data/selectors';


function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const isCurrenOfferDataLoading = useAppSelector(getCurrentOfferDataLoadingStatus);

  if (isOffersDataLoading || isCurrenOfferDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen/>}
          />
          <Route
            path={AppRoute.Favorited}
            element={
              <PrivateRoute>
                <FavoritedScreen/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.SignIn}
            element={<LoginScreen/>}
          />
          <Route
            path={AppRoute.Room}
            element={
              <PropertyScreen/>
            }
          />
          <Route
            path="*"
            element={<NotFoundScreen/>}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
