import { useEffect, useMemo } from 'react';
import FilmCard from '../film-card/film-card';
import { DEFAULT_FILM_GENRE } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ShowMoreButton from '../show-more-button/show-more-button';
import { resetFilmCards } from '../../store/film-process/film-process';
import { getFilms } from '../../store/films-data/selectors';
import { getActiveGenre, getCardsToShowAmount } from '../../store/film-process/selectors';

function FilmsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(getFilms);
  const selectedGenre = useAppSelector(getActiveGenre);
  const cardsToShowAmount = useAppSelector(getCardsToShowAmount);
  const filteredFilms = useMemo(() => movies.filter((film) => selectedGenre === DEFAULT_FILM_GENRE ? movies : film.genre === selectedGenre), [selectedGenre, movies]);
  const filmsToShow = filteredFilms.slice(0, cardsToShowAmount);

  useEffect(() => {
    dispatch(resetFilmCards());
  }, []);

  return (
    <>
      <div className={'catalog__films-list'}>
        {
          filmsToShow.map((film) => <FilmCard key={ film.id } { ...film }/>)
        }
      </div>
      { (filteredFilms.length > cardsToShowAmount) && <ShowMoreButton /> }
    </>
  );
}

export default FilmsList;
