import './genre-tabs.css';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetCardsToShowAmount, setActiveGenre } from '../../store/film-process/film-process';
import { getActiveGenre } from '../../store/film-process/selectors';
import { getGenresList } from '../../store/films-data/selectors';

function GenresTabs(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedGenre = useAppSelector(getActiveGenre);
  const genresList = useAppSelector(getGenresList);

  const onTabClickHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setActiveGenre(evt.currentTarget.textContent));
    dispatch(resetCardsToShowAmount());
  };

  return (
    <ul className="catalog__genres-list">
      {
        genresList.map((tab) => (
          <li className={`catalog__genres-item ${ (selectedGenre === tab) ? 'catalog__genres-item--active' : ''}`} key={ tab }>
            <button className="catalog__genres-link" onClick={ onTabClickHandler }>{ tab }</button>
          </li>
        ))
      }
    </ul>
  );
}

export default GenresTabs;
