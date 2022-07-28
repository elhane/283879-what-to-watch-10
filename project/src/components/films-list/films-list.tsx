import { useState } from 'react';
import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';
import { DEFAULT_FILM_GENRE } from '../../const';
import { useAppSelector } from '../../hooks';

const getFilteredFilms = (genre: string, movies: Films): Films => movies.filter((film) => genre === DEFAULT_FILM_GENRE ? movies : film.genre === genre);

function FilmsList(): JSX.Element {
  const [activeCardId, setActiveCardId] = useState(0);
  const movies = useAppSelector((state) => state.movies);
  const selectedGenre = useAppSelector((state) => state.genre);
  const filteredFilms = getFilteredFilms(selectedGenre, movies);

  const makeCardActive = (id: number) => {
    setActiveCardId(id);
  };

  return (
    <div className={'catalog__films-list'}>
      {
        filteredFilms.map((film) => <FilmCard key={ film.id } { ...film } isActive={(activeCardId === film.id)} makeCardActive={makeCardActive} />)
      }
    </div>
  );
}

export default FilmsList;
