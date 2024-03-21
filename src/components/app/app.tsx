import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Cards, AppRoute } from '../../const';
import Main from '../../pages/main/main';
import MainEmpty from '../main-empty/main-empty';
import Header from '../header/header';
import Favorited from '../../pages/favorited/favorited';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import SignIn from '../header/signin/signin';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <React.Fragment>
              <Header></Header>
              <Main card={Cards} />
            </React.Fragment>
          }
        />
        <Route
          path={AppRoute.Favorited}
          element={
            <React.Fragment>
              <Header />
              <Favorited />
            </React.Fragment>
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={
            <React.Fragment>
              <Header />
              <Login />
            </React.Fragment>
          }
        />
        <Route
          path={AppRoute.Room}
          element={
            <React.Fragment>
              <Header />
              <Property />
            </React.Fragment>
          }
        />
        <Route path="*" element={<MainEmpty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
