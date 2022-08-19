import { useAppSelector } from '../../hooks';
import { getCurrentFilm } from '../../store/film-process/selectors';
import { Rating } from '../../const';

function Overview(): JSX.Element {
  const film = useAppSelector(getCurrentFilm);

  const { description, director, starring, rating, scoresCount } = film;

  const getRatingTextFromNumber = (rate: number) => {
    switch(true) {
      case rate < Rating.Bad.max:
        return Rating.Bad.text;
      case rate >= Rating.Normal.min && rate < Rating.Normal.max:
        return Rating.Normal.text;
      case rate >= Rating.Good.min && rate < Rating.Good.max:
        return Rating.Good.text;
      case rate >= Rating.VeryGood.min && rate < Rating.VeryGood.max:
        return Rating.VeryGood.text;
      case rate === Rating.Awesome.min:
        return Rating.Awesome.text;
    }
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{ rating }</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ getRatingTextFromNumber(rating) }</span>
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
