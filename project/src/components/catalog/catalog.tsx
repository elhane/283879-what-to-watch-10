import GenresTabs from '../genres-tabs/genres-tabs';
import FilmsList from '../films-list/films-list';
import { useAppSelector } from '../../hooks';
import { Films } from '../../types/films';

type CatalogProps = {
  films: Films
}

function Catalog({ films }: CatalogProps): JSX.Element {
  const { movies } = useAppSelector((state) => state);

  return (
    <>
      <GenresTabs films={ films } />
      <FilmsList films={ movies } />
    </>
  );
}

export default Catalog;
