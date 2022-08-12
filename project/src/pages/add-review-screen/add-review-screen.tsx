import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import ReviewForm from '../../components/review-form/review-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import { useEffect } from 'react';
import { fetchCurrentFilmAction } from '../../store/api-actions';
import { getCurrentFilm } from '../../store/film-process/selectors';

function AddReviewScreen(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getCurrentFilm);

  const {
    id,
    name,
    posterImage,
    backgroundImage
  } = film;

  useEffect(() => {
    dispatch(fetchCurrentFilmAction(params?.id));
  }, [dispatch, params?.id]);

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
            { title: name, href: `${AppRoute.Films}${id}` },
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
