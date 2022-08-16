import './my-list-films.css';
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
        { favoritesList.length > 0 ?
          filmsToShow.map((film) => <FilmCard key={ film.id } { ...film }/>)
          :
          <p className="catalog__films-empty-message">no films added to list yet</p>}
      </div>
      { (favoritesList.length > cardsToShowAmount) && <ShowMoreButton /> }
    </>
  );
}

export default MyListFilms;
