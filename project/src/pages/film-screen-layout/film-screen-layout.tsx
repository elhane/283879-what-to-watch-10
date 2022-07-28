import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useParams, useNavigate, Link, Outlet } from 'react-router-dom';
import { Film } from '../../types/films';
import FilmsList from '../../components/films-list/films-list';
import { useAppSelector } from '../../hooks';


function FilmScreenLayout(): JSX.Element {
  const params = useParams();
  const movies = useAppSelector((state) => state.movies);
  const film = movies.find((item) => item.id.toString() === params.id) as Film;

  const {
    id,
    name,
    genre,
    posterImage,
    released,
    backgroundImage
  } = film;

  const navigate = useNavigate();

  const onPlayBtnClickHandler = () => {
    navigate(`/player/${film.id}`);
  };

  const onMyListBtnClickHandler = () => {
    //callback для добавления фильма в список?
  };

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={ backgroundImage } alt={ name }/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header isAuthorized extraClasses={ 'film-card__head' }/>

          <div className="film-card__wrap">
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
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20" onClick={ onMyListBtnClickHandler }>
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span> <span className="film-card__count">{ movies.length }</span>
                </button>
                <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={ posterImage } alt={ `${name} poster` } width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <Outlet />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <FilmsList />
          </div>
        </section>

        <Footer />
      </div>

    </>
  );
}

export default FilmScreenLayout;
