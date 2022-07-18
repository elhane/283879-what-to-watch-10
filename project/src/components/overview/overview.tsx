import { useParams, Link } from 'react-router-dom';
import { Films, Film } from '../../types/films';

type OverviewProps = {
  films: Films
};

function Overview({ films }: OverviewProps): JSX.Element {
  const params = useParams();
  const film = films.find((item) => item.id.toString() === params.id) as Film;

  const {
    id,
    description,
    director,
    starring,
    rating,
    scoresCount
  } = film;

  const getRatingText = (rate: number) => {
    switch(true) {
      case rate < 3:
        return 'Bad';
      case rate >= 3 && rate < 5:
        return 'Normal';
      case rate >= 5 && rate < 8:
        return 'Good';
      case rate >= 8 && rate < 10:
        return'Very good';
      case rate === 10:
        return 'Awesome';
    }
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active">
            <Link to='#' className="film-nav__link">Overview</Link>
          </li>
          <li className="film-nav__item">
            <Link to={`/films/${id}/details`} className="film-nav__link">Details</Link>
          </li>
          <li className="film-nav__item">
            <Link to={`/films/${id}/reviews`} className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>

      <div className="film-rating">
        <div className="film-rating__score">{ rating }</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ getRatingText(rating) }</span>
          <span className="film-rating__count">{ ` ${ scoresCount } ratings `}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{ description }</p>

        <p className="film-card__director"><strong>Director: { director }</strong></p>

        <p className="film-card__starring"><strong>Starring: { starring.join(', ') }</strong></p>
      </div>
    </>
  );
}

export default Overview;
