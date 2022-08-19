import { Comments } from '../../types/comments';
import { useAppSelector } from '../../hooks';
import Review from '../review/review';
import { getReviews } from '../../store/reviews-process/selectors';

function Reviews(): JSX.Element {
  const reviews = useAppSelector(getReviews);
  let firstColumnReviews: Comments = [];
  let secondColumnReviews: Comments = [];

  if (reviews.length) {
    firstColumnReviews = reviews.slice(0, Math.round(reviews.length / 2));
    secondColumnReviews = reviews.slice(Math.round(reviews.length / 2), reviews.length);
  }

  return (
    <div className="film-card__reviews film-card__row">

      <div className="film-card__reviews-col">
        { !reviews.length ? <p className="film-card__text">No reviews</p> : ''}

        {
          firstColumnReviews.length ? (
            firstColumnReviews.map(({ id, comment, user, date, rating}) => (
              <Review
                key={ id }
                comment={ comment }
                userName={ user.name }
                date={ date }
                rating={ rating }
              />
            ))
          ) : ''
        }
      </div>

      <div className="film-card__reviews-col">
        {
          secondColumnReviews.length ? (
            secondColumnReviews.map(({ id, comment, user, date, rating}) => (
              <Review
                key={ id }
                comment={ comment }
                userName={ user.name }
                date={ date }
                rating={ rating }
              />
            ))
          ) : ''
        }
      </div>
    </div>
  );
}

export default Reviews;
