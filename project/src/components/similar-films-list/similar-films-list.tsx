import {useMemo, useState} from 'react';
import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';

type SimilarFilmsListProps = {
  filmId: number,
  films: Films
}

function SimilarFilmsList({ filmId, films }: SimilarFilmsListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState(0);
  const filteredFilms = useMemo(() => films.filter((film) => film.id !== filmId).slice(0, 4), [films, filmId]);

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
