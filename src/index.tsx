import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Cards } from './const';
import { store } from './store';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App card={Cards} />
    </Provider>
  </StrictMode>
);
