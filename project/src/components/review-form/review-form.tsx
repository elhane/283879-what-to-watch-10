import React from 'react';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCommentsAction, postCommentAction } from '../../store/api-actions';
import FormError from '../../components/form-error/form-error';
import { CommentLength } from '../../const';
import { getLoadingFailedStatus,getLoaderStatus } from '../../store/reviews-process/selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import './review-form.css';

function ReviewForm(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const filmId = params.id;
  const [ formData, setFormData ] = useState({ comment: '', rating: 0 });
  const [ formErrors, setFormErrors ] = useState({ comment: '', rating: '' });
  const [ formValid, setFormValid ] = useState(true);
  const [ commentValid, setCommentValid ] = useState(false);
  const [ ratingValid, setRatingValid ] = useState(true);
  const isLoadingFailed = useAppSelector(getLoadingFailedStatus);
  const isShowLoader = useAppSelector(getLoaderStatus);

  const validateTextarea = (value: string) => {
    switch (true) {
      case value.length < CommentLength.Min || value.length === 0:
        setFormErrors({ ...formErrors, comment: commentValid ? '' : 'too short, the comment must contain at least 50 characters' });
        setCommentValid(false);
        break;
      case value.length > CommentLength.Max:
        setFormErrors({ ...formErrors, comment: commentValid ? '' : 'too long, the comment must contain no more than 400 characters' });
        setCommentValid(false);
        break;
      case value.length > CommentLength.Min && value.length < CommentLength.Max:
        setCommentValid(true);
    }
  };

  const validateRating = () => {
    if (formData.rating < 1) {
      setRatingValid(false);
      setFormErrors({ ...formErrors, rating: 'the rating is not selected' });
    } else {
      setRatingValid(true);
      setFormErrors({ ...formErrors, rating: '' });
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

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    validateField(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formValid) {
      dispatch(postCommentAction([filmId, formData]));
      dispatch(fetchCommentsAction(filmId));
    }
  };

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setFormValid(commentValid && ratingValid);
    }

    return () => {
      isMounted = false;
    };
  }, [commentValid, ratingValid]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      validateRating();
    }
    return () => {
      isMounted = false;
    };
  }, [formData]);

  return (
    <>
      { isShowLoader ? <LoadingScreen /> : '' }
      <form action="#" className="add-review__form" onSubmit={ handleFormSubmit } >
        <div className="rating">
          <div className="rating__stars">

            { Array.from(Array(10)).map((_, index)=> {
              const keyValue = 10 - index;

              return (
                <React.Fragment key={ keyValue }>
                  <input
                    className="rating__input"
                    id={ `star-${keyValue}` }
                    type="radio"
                    name="rating"
                    value={ keyValue }
                    onChange={ handleFieldChange }
                  />
                  <label
                    className="rating__label"
                    htmlFor={ `star-${ keyValue }` }
                  >
                    Rating { keyValue }
                  </label>
                </React.Fragment>
              );
            }
            )}
          </div>
        </div>
        { !ratingValid ? <FormError error={ formErrors.rating } /> : '' }

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="comment"
            id="review-text"
            placeholder="Review text"
            onChange={ handleFieldChange }
          >
          </textarea>

          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={ !formValid || isLoadingFailed }
            >
              Post
            </button>
          </div>
        </div>
        { !commentValid ? <FormError error={ formErrors.comment } /> : '' }
      </form>
    </>
  );
}

export default ReviewForm;
