import { useState } from 'react';
import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';

type SimilarFilmsListProps = {
  filmId: number,
  films: Films
}

const getFilteredFilms = (movies: Films, filmId: number): Films => movies.filter((film) =>
  film.id !== filmId
);

function SimilarFilmsList({ filmId, films }: SimilarFilmsListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState(0);
  const filteredFilms = getFilteredFilms(films, filmId).slice(0, 4);

  const makeCardActive = (id: number) => {
    setActiveCardId(id);
  };

  return (
    <>
      {
        filteredFilms.map((film) => <FilmCard key={ film.id } { ...film } isActive={ (activeCardId === film.id) } makeCardActive={ makeCardActive } />)
      }
    </>

  );
}

export default SimilarFilmsList;
