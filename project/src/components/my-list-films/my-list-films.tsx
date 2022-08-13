import FilmCard from '../film-card/film-card';
import { useAppSelector } from '../../hooks';
import ShowMoreButton from '../show-more-button/show-more-button';
import { getCardsToShowAmount, getFavoritesList } from '../../store/film-process/selectors';

function MyListFilms(): JSX.Element {
  const favoritesList = useAppSelector(getFavoritesList);
  const cardsToShowAmount = useAppSelector(getCardsToShowAmount);
  const filmsToShow = favoritesList.slice(0, cardsToShowAmount);

  return (
    <>
      <div className={'catalog__films-list'}>
        {
          filmsToShow.map((film) => <FilmCard key={ film.id } { ...film }/>)
        }
      </div>
      { (favoritesList.length > cardsToShowAmount) && <ShowMoreButton /> }
    </>
  );
}

export default MyListFilms;
