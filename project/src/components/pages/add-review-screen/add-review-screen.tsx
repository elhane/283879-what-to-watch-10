import { useParams} from 'react-router-dom';
import { Film, Films } from '../../../types/films';
import Header from '../../header/header';
import ReviewForm from '../../review-form/review-form';

type AddReviewScreenProps = {
  films: Films
};

function AddReviewScreen({ films }: AddReviewScreenProps): JSX.Element {
  const params = useParams();
  const film = films.find((item) => item.id.toString() === params.id) as Film;

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
          isAuthorized
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
