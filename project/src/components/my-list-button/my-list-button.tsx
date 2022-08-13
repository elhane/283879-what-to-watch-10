import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoritesList } from '../../store/film-process/selectors';
import { postFilmFavoriteStatusAction } from '../../store/api-actions';
import { ADD_FILM_IN_LIST, DELETE_FILM_FROM_LIST } from '../../const';

type MyListButtonProps = {
  filmId: number
}

function MyListButton({ filmId }: MyListButtonProps): JSX.Element {
  const favoritesList = useAppSelector(getFavoritesList);
  const dispatch = useAppDispatch();
  const isFilmInList = favoritesList.find((film) => film.id === filmId);

  const handleMyListBtnClick = () => {
    dispatch(postFilmFavoriteStatusAction([filmId, isFilmInList ? DELETE_FILM_FROM_LIST : ADD_FILM_IN_LIST]));
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={ handleMyListBtnClick }>
      {
        isFilmInList ? (
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
        ) : (
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
        )
      }
      <span>My list</span> <span className="film-card__count">{ favoritesList.length }</span>
    </button>
  );
}

export default MyListButton;
