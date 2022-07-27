import './genre-tabs.css';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilmsBySelectedGenre, selectGenre } from '../../store/action';
import { Films } from '../../types/films';
import { DEFAULT_FILM_GENRE } from '../../const';

type GenresTabsProps = {
  films: Films
}

function GenresTabs({ films }: GenresTabsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedGenre = useAppSelector((state) => state.genre);
  const allGenresList = [ DEFAULT_FILM_GENRE, ...Array.from(new Set(films.map((film) => film.genre))).sort()];

  const onTabClickHAndler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(selectGenre(evt.currentTarget.textContent));
    dispatch(getFilmsBySelectedGenre());
  };

  return (
    <ul className="catalog__genres-list">
      {
        allGenresList.map((tab) => (
          <li className={`catalog__genres-item ${ (selectedGenre === tab) ? 'catalog__genres-item--active' : ''}`} key={ tab }>
            <button className="catalog__genres-link" onClick={ onTabClickHAndler }>{ tab }</button>
          </li>
        ))
      }
    </ul>
  );
}

export default GenresTabs;
