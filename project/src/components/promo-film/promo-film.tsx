import Header from '../header/header';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { getPromoFilm } from '../../store/promo-film-process/selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { getLoaderStatus } from '../../store/promo-film-process/selectors';
import MyListButton from '../my-list-button/my-list-button';
import { useEffect } from 'react';
import { fetchFilmsFavoriteAction } from '../../store/api-actions';

function PromoFilm(): JSX.Element {
  const promoFilm = useAppSelector(getPromoFilm);
  const isShowLoader = useAppSelector(getLoaderStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id, backgroundColor, backgroundImage, posterImage, name, genre, released } = promoFilm;

  const handlePlayButtonClick = () => {
    navigate(`/player/${id}`);
  };

  useEffect(() => {
    dispatch(fetchFilmsFavoriteAction());
  }, [dispatch]);

  return (
    <>
      { isShowLoader ? <LoadingScreen /> : '' }
      <section className="film-card" style={{ backgroundColor: backgroundColor }}>
        <div className="film-card__bg">
          <img src={ backgroundImage } alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header extraClasses={ 'film-card__head' }/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={ posterImage } alt={`${ name } poster`} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{ name }</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{ genre }</span>
                <span className="film-card__year">{ released }</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={ handlePlayButtonClick }>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <MyListButton filmId={ id } />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PromoFilm;
