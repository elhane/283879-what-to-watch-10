import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoritesList } from '../../store/film-process/selectors';
import {
  fetchFilmsFavoriteAction,
  postFilmFavoriteStatusAction
} from '../../store/api-actions';
import { AppRoute, AuthorizationStatus, FavoritesListAction } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type MyListButtonProps = {
  filmId: number
}

function MyListButton({ filmId }: MyListButtonProps): JSX.Element {
  const favoritesList = useAppSelector(getFavoritesList);
  const dispatch = useAppDispatch();
  const isFilmInList = favoritesList.find((film) => film.id === filmId);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  const handleMyListButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(postFilmFavoriteStatusAction([filmId, isFilmInList ? FavoritesListAction.Delete : FavoritesListAction.Add]));
    } else {
      navigate(AppRoute.Login);
    }
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFilmsFavoriteAction());
    }
  }, [dispatch, authorizationStatus]);

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={ handleMyListButtonClick }>
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
