import { useAppSelector } from '../../hooks';
import { getCurrentFilm } from '../../store/film-process/selectors';

function Details(): JSX.Element {
  const film = useAppSelector(getCurrentFilm);

  const {
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
  );
}

export default Details;
