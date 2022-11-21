import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SimilarFilmsList from '../../components/similar-films-list/similar-films-list';
import { useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';
import Tabs from '../../components/tabs/tabs';
import { fetchCurrentFilmAction, fetchCommentsAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import { getCurrentFilm, getSimilarFilms } from '../../store/film-process/selectors';
import { getAuthorizationStatus} from '../../store/user-process/selectors';
import { getLoaderStatus, getLoadingFailedStatus } from '../../store/film-process/selectors';
import MyListButton from '../../components/my-list-button/my-list-button';

function FilmScreen(): JSX.Element {
  const params = useParams();
  const film = useAppSelector(getCurrentFilm);
  const similarFilms = useAppSelector(getSimilarFilms);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isShowLoader = useAppSelector(getLoaderStatus);
  const isLoadingFailed = useAppSelector(getLoadingFailedStatus);
  const { id, name, genre, posterImage, released, backgroundImage, backgroundColor} = film;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handlePlayButtonClick = () => {
    navigate(`/what-to-watch/player/${id}`);
  };

  useEffect(() => {
    if (isLoadingFailed) {
      navigate(AppRoute.NotFound);
    }
  }, [navigate, isLoadingFailed]);

  useEffect(() => {
    dispatch(fetchCurrentFilmAction(params?.id));
    dispatch(fetchSimilarFilmsAction(params?.id));
    dispatch(fetchCommentsAction(params?.id));
  }, [dispatch, params?.id]);

  return (
    <>
      { isShowLoader ? <LoadingScreen /> : '' }
      <section className="film-card film-card--full" style={{ backgroundColor: backgroundColor }}>
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
                <button className="btn btn--play film-card__button" type="button" onClick={ handlePlayButtonClick }>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <MyListButton filmId={ id } />

                { authorizationStatus === AuthorizationStatus.Auth && <Link to={ `${AppRoute.Films}${id}/review` } className="btn film-card__button">Add review</Link> }
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
            {
              similarFilms.length > 1 ?
                <SimilarFilmsList filmId={ id } films={ similarFilms }/> :
                <p>we did&apos;t find any similar films :(</p>
            }
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmScreen;
