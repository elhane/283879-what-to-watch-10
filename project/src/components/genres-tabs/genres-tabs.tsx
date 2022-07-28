import './genre-tabs.css';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveGenre } from '../../store/action';

function GenresTabs(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedGenre = useAppSelector((state) => state.genre);
  const genresList = useAppSelector((state) => state.genresList);

  const onTabClickHAndler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setActiveGenre(evt.currentTarget.textContent));
  };

  return (
    <ul className="catalog__genres-list">
      {
        genresList.map((tab) => (
          <li className={`catalog__genres-item ${ (selectedGenre === tab) ? 'catalog__genres-item--active' : ''}`} key={ tab }>
            <button className="catalog__genres-link" onClick={ onTabClickHAndler }>{ tab }</button>
          </li>
        ))
      }
    </ul>
  );
}

export default GenresTabs;
