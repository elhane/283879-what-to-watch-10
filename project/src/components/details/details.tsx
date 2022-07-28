import { Link, useParams } from 'react-router-dom';
import { Film } from '../../types/films';
import { useAppSelector } from '../../hooks';

function Details(): JSX.Element {
  const params = useParams();
  const movies = useAppSelector((state) => state.movies);
  const film = movies.find((item) => item.id.toString() === params.id) as Film;

  const {
    id,
    director,
    starring,
    genre,
    released,
    runTime
  } = film;

  const getTimeFromMinutes = (mins: number): string => {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return `${hours}h ${minutes}m`;
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item">
            <Link to={`/films/${id}`} className="film-nav__link">Overview</Link>
          </li>
          <li className="film-nav__item film-nav__item--active">
            <Link to="#" className="film-nav__link">Details</Link>
          </li>
          <li className="film-nav__item">
            <Link to={`/films/${id}/reviews`} className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>
      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{ director }</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              { starring.join(', ') }
            </span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{ getTimeFromMinutes(runTime) }</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{ genre }</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{ released }</span>
          </p>
        </div>
      </div>

    </>
  );
}

export default Details;
