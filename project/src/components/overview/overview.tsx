import { useAppSelector } from '../../hooks';
import { getCurrentFilm } from '../../store/film-process/selectors';

function Overview(): JSX.Element {
  const film = useAppSelector(getCurrentFilm);

  const {
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
      <div className="film-rating">
        <div className="film-rating__score">{ rating }</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ getRatingText(rating) }</span>
          <span className="film-rating__count">{ `${ scoresCount } ratings `}</span>
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
