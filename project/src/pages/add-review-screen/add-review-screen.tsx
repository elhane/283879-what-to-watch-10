import { useParams} from 'react-router-dom';
import { Film } from '../../types/films';
import Header from '../../components/header/header';
import ReviewForm from '../../components/review-form/review-form';
import { useAppSelector } from '../../hooks';

function AddReviewScreen(): JSX.Element {
  const params = useParams();
  const movies = useAppSelector((state) => state.movies);
  const film = movies.find((item) => item.id.toString() === params.id) as Film;

  const {
    id,
    name,
    posterImage,
    backgroundImage
  } = film;

  const filmHref = `/films/${id}/`;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={ backgroundImage } alt={ name } />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          isIncludeBreadcrumbs
          breadcrumbsItems={[
            { title: name, href: filmHref },
            { title: 'Add review', href: ''}
          ]}
        />

        <div className="film-card__poster film-card__poster--small">
          <img src={ posterImage } alt={` ${name} poster`} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>

    </section>
  );
}

export default AddReviewScreen;
