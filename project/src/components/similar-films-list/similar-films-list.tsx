import { useState } from 'react';
import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';
import { useAppSelector } from '../../hooks';

type SimilarFilmsListProps = {
  genre: string,
  filmId: number
}

const getFilteredFilms = (genre: string, movies: Films, filmId: number): Films => movies.filter((film) =>
  film.genre === genre && film.id !== filmId
);

function SimilarFilmsList({ genre, filmId }: SimilarFilmsListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState(0);
  const movies = useAppSelector((state) => state.movies);
  const filteredFilms = getFilteredFilms(genre, movies, filmId).slice(0, 4);

  const makeCardActive = (id: number) => {
    setActiveCardId(id);
  };

  return (
    <>
      {
        filteredFilms.map((film) => <FilmCard key={ film.id } { ...film } isActive={(activeCardId === film.id)} makeCardActive={ makeCardActive } />)
      }
    </>

  );
}

export default SimilarFilmsList;
