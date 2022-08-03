import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useNavigate } from 'react-router-dom';
import GenresTabs from '../../components/genres-tabs/genres-tabs';
import FilmsList from '../../components/films-list/films-list';
import { useAppSelector } from '../../hooks';

function FirstScreen(): JSX.Element {
  const favoritesList = useAppSelector((state) => state.favoritesList);
  const promoFilm = useAppSelector((state) => state.promoFilm);
  const navigate = useNavigate();

  const onPlayBtnClickHandler = () => {
    navigate('/player/1');
  };

  const onMyListBtnClickHandler = () => {
    //callback для добавления фильма в список?
  };

  return (
    <>
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

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresTabs />
          <FilmsList />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FirstScreen;
