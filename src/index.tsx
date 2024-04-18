import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/index';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>
);
