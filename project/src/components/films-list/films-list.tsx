import { useState } from 'react';
import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Films
};

function FilmsList({films}: FilmListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState(0);

  const makeCardActive = (id: number) => {
    setActiveCardId(id);
  };

  return (
    <div className={'catalog__films-list'}>
      {
        films?.map((film) => <FilmCard key={ film.id } { ...film } isActive={(activeCardId === film.id)} makeCardActive={makeCardActive} />)
      }
    </div>
  );
}

export default FilmsList;
