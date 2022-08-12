import { useMemo } from 'react';
import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';

type SimilarFilmsListProps = {
  filmId: number,
  films: Films
}

function SimilarFilmsList({ filmId, films }: SimilarFilmsListProps): JSX.Element {
  const filteredFilms = useMemo(() => films.filter((film) => film.id !== filmId).slice(0, 4), [films, filmId]);

  return (
    <>
      {
        filteredFilms.map((film) => <FilmCard key={ film.id } { ...film }/>)
      }
    </>

  );
}

export default SimilarFilmsList;
