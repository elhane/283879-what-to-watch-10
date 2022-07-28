import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import SvgSprite from './components/svg-sprite/svg-sprite';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <SvgSprite />
    <Provider store = { store }>
      <App />
    </Provider>
  </React.StrictMode>,
);
