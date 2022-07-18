import { useState, ChangeEvent } from 'react';

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    'review-text': '',
    rating: ''
  });

  const fieldChangeHandle = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          { Array.from({ length: 10 }, (v, k) => k).map((index) => {
            const keyValue = 10 - index;

            return (
              <>
                <input
                  className="rating__input"
                  id={ `star-${keyValue}` }
                  type="radio"
                  name="rating"
                  value={ keyValue }
                  onChange={ fieldChangeHandle }
                />
                <label
                  className="rating__label"
                  htmlFor={`star-${ keyValue }`}
                >
                  Rating { keyValue }
                </label>
              </>
            );
          }
          )}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={ fieldChangeHandle }
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
