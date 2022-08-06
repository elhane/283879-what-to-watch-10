import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postCommentAction } from '../../store/api-actions';
import FormError from '../../components/form-error/form-error';
import { COMMENT_MAX_LENGTH, COMMENT_MIN_LENGTH } from '../../const';

function ReviewForm(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const filmId = params.id;
  const [formData, setFormData] = useState({
    comment: '',
    rating: 0
  });

  const [formValid, setFormValid] = useState(true);
  const [formErrors, setFormErrors] = useState({comment: '', rating: ''});
  const [commentValid, setCommentValid] = useState(true);
  const [ratingValid, setRatingValid] = useState(true);

  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);

  const validateTextarea = (value: string) => {
    switch (true) {
      case value.length < COMMENT_MIN_LENGTH:
        setFormErrors({...formErrors, comment: commentValid ? '' : 'too short, the comment must contain at least 50 characters'});
        setCommentValid(false);
        break;
      case value.length > COMMENT_MAX_LENGTH:
        setFormErrors({...formErrors, comment: commentValid ? '' : 'too long, the comment must contain no more than 400 characters'});
        setCommentValid(false);
        break;
      case value.length > COMMENT_MIN_LENGTH && value.length < COMMENT_MAX_LENGTH:
        setCommentValid(true);
    }
  };

  const validateRating = () => {
    if (formData.rating < 1) {
      setRatingValid(false);
      setFormErrors({...formErrors, rating: 'the rating is not selected'});
    } else {
      setRatingValid(true);
      setFormErrors({...formErrors, rating: ''});
    }
  };

  const validateField = (fieldName: string, value: string) => {
    switch(fieldName) {
      case 'comment':
        validateTextarea(value);
        break;
      case 'rating':
        validateRating();
        break;
      default:
        break;
    }
  };

  const fieldChangeHandle = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    validateField(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formValid) {
      dispatch(postCommentAction([filmId, formData]));
    }
  };

  useEffect(() => {
    setFormValid(commentValid && ratingValid);
  }, [commentValid, ratingValid]);

  useEffect(() => {
    validateRating();
  }, [formData]);

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmitForm} >
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
                  key={ keyValue }
                />
                <label
                  className="rating__label"
                  htmlFor={`star-${ keyValue }`}
                  key={ `label${keyValue}` }
                >
                  Rating { keyValue }
                </label>
              </>
            );
          }
          )}
        </div>
      </div>
      {!ratingValid ? <FormError error={ formErrors.rating } /> : ''}

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="comment"
          id="review-text"
          placeholder="Review text"
          onChange={ fieldChangeHandle }
        >
        </textarea>

        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={!formValid || isDataLoaded}>Post</button>
        </div>
      </div>
      {!commentValid ? <FormError error={ formErrors.comment } /> : ''}
    </form>
  );
}

export default ReviewForm;
