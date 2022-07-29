import { useEffect, useState } from 'react';
import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';
import { DEFAULT_FILM_GENRE } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ShowMoreButton from '../show-more-button/show-more-button';
import { resetFilmCards } from '../../store/action';

const getFilteredFilms = (genre: string, movies: Films): Films => movies.filter((film) => genre === DEFAULT_FILM_GENRE ? movies : film.genre === genre);

function FilmsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const [activeCardId, setActiveCardId] = useState(0);
  const movies = useAppSelector((state) => state.movies);
  const selectedGenre = useAppSelector((state) => state.genre);
  const cardsToShowAmount = useAppSelector((state) => state.cardsToShowAmount);
  const filteredFilms = getFilteredFilms(selectedGenre, movies);
  const filmsToShow = filteredFilms.slice(0, cardsToShowAmount);

  const makeCardActive = (id: number) => {
    setActiveCardId(id);
  };

  useEffect(() => {
    dispatch(resetFilmCards());
  }, []);

  return (
    <>
      <div className={'catalog__films-list'}>
        {
          filmsToShow.map((film) => <FilmCard key={ film.id } { ...film } isActive={(activeCardId === film.id)} makeCardActive={ makeCardActive } />)
        }
      </div>
      { (filteredFilms.length > cardsToShowAmount) && <ShowMoreButton /> }
    </>
  );
}

export default FilmsList;
