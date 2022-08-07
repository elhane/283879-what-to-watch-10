import { formatDate } from '../../utils';

type ReviewProps = {
  comment: string,
  userName: string,
  date: string,
  rating: number
};

function Review({ comment, userName, date, rating }: ReviewProps):JSX.Element {
  return (
    <div className="review" >
      <blockquote className="review__quote">
        <p className="review__text">{ comment }</p>
        <footer className="review__details">
          <cite className="review__author">{ userName }</cite>
          <time className="review__date" dateTime={ date }>{ formatDate(date) }</time>
        </footer>
      </blockquote>

      <div className="review__rating">{ rating }</div>
    </div>
  );
}

export default Review;
