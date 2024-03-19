import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPages from '../pages/main-pages-screen/main-pages-screen';
import Login from '../pages/login-screen/login-screen';
import FavoritesList from '../pages/favorites-list-screen/favorites-list-screen';
import Property from '../pages/property-screen/property-screen';

type AppPlacesFoundProps = {
  countAmsterdam: number;
}

function App({countAmsterdam}: AppPlacesFoundProps): JSX.Element {
  return (
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
          element={<FavoritesList />}
        />
        <Route
          path={AppRoute.Property}
          element={<Property />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
