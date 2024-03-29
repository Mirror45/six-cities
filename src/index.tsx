import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const PlacesAmsterdam = {
  countPlacesAmsterdam: 3
};

root.render(
  <React.StrictMode>
    <App
    countAmsterdam = {PlacesAmsterdam.countPlacesAmsterdam}
    offers = {offers}
    />
  </React.StrictMode>,
);
