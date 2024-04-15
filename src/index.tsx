import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Cards } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App card={Cards} />
  </StrictMode>
);
