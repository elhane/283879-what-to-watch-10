import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import SvgSprite from './components/svg-sprite/svg-sprite';
import { films } from './mocks/films';

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
    <App title={ FilmInfo.TITLE } genre={ FilmInfo.GENRE } year={ FilmInfo.YEAR } films={ films } />
  </React.StrictMode>,
);
