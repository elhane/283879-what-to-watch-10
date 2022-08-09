import Header from '../header/header';
import { useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import {getFavoritesList} from '../../store/film-process/selectors';
import {getPromoFilm} from '../../store/promo-film-process/selectors';

function PromoFilm(): JSX.Element {
  const favoritesList = useAppSelector(getFavoritesList);
  const promoFilm = useAppSelector(getPromoFilm);
  const navigate = useNavigate();

  const onPlayBtnClickHandler = () => {
    navigate('/player/1');
  };

  const onMyListBtnClickHandler = () => {
    //callback для добавления фильма в список?
  };

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header extraClasses={ 'film-card__head' }/>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{ promoFilm.name }</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{ promoFilm.genre }</span>
              <span className="film-card__year">{ promoFilm.released }</span>
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
  );
}

export default PromoFilm;
