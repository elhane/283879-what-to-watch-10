import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import SvgSprite from './components/svg-sprite/svg-sprite';
import { films } from './mocks/films';
import { Provider } from 'react-redux';
import { store } from './store';

const FilmInfo = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <SvgSprite />
    <Provider store = { store }>
      <App title={ FilmInfo.TITLE } genre={ FilmInfo.GENRE } year={ FilmInfo.YEAR } films={ films } />
    </Provider>
  </React.StrictMode>,
);
