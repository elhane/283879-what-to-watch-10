import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SimilarFilmsList from '../../components/similar-films-list/similar-films-list';
import { useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';
import Tabs from '../../components/tabs/tabs';
import { fetchCurrentFilmAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

function FilmScreen(): JSX.Element {
  const params = useParams();
  const movies = useAppSelector((state) => state.movies);
  const favoritesList = useAppSelector((state) => state.favoritesList);
  const film = useAppSelector((state) => state.currentFilm);
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  // const isDataLoaded = useAppSelector((state) => state.isDataLoaded);
  const filmsIds = movies.map((movie) => movie.id);

  const {
    id,
    name,
    genre,
    posterImage,
    released,
    backgroundImage
  } = film;

  console.debug('film screen');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onPlayBtnClickHandler = () => {
    navigate(`/player/${id}`);
  };

  const onMyListBtnClickHandler = () => {
    //callback для добавления фильма в список?
  };

  useEffect(() => {
    if (!filmsIds.includes(Number(params?.id))) {
      navigate(AppRoute.NotFound);
    }
  }, [params?.id]);

  useEffect(() => {
    dispatch(fetchCurrentFilmAction(params?.id));
  }, []);

  // useEffect(() => {
  //   let isNeedUpdate = true;
  //
  //   if (isNeedUpdate) {
  //     dispatch(fetchCurrentFilmAction(params?.id));
  //   }
  //
  //   return () => { isNeedUpdate = false; };
  // }, [params?.id]);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={ backgroundImage } alt={ name }/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header extraClasses={ 'film-card__head' }/>

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
                  <span>My list</span> <span className="film-card__count">{ favoritesList.length }</span>
                </button>

                { authorizationStatus === AuthorizationStatus.Auth && <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link> }

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
              <Tabs />
            </div>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <SimilarFilmsList filmId={ id } films={ similarFilms }/>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmScreen;
