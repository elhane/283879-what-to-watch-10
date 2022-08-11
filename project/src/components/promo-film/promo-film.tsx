import Header from '../header/header';
import { useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { getFavoritesList } from '../../store/film-process/selectors';
import { getPromoFilm } from '../../store/promo-film-process/selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { getLoaderStatus } from '../../store/promo-film-process/selectors';

function PromoFilm(): JSX.Element {
  const favoritesList = useAppSelector(getFavoritesList);
  const promoFilm = useAppSelector(getPromoFilm);
  const navigate = useNavigate();
  const isShowLoader = useAppSelector(getLoaderStatus);

  const { id, backgroundColor, backgroundImage, posterImage, name, genre, released } = promoFilm;

  const onPlayBtnClickHandler = () => {
    navigate(`/player/${id}`);
  };

  const onMyListBtnClickHandler = () => {
    //callback для добавления фильма в список?
  };

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
                <button className="btn btn--play film-card__button" type="button" onClick={ onPlayBtnClickHandler }>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={ onMyListBtnClickHandler }>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span> <span className="film-card__count">{ favoritesList.length }</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PromoFilm;
