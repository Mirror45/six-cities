import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendOfferCommentAction } from '../../store/action/api-actions';
import { getCommentDataSendingStatus } from '../../store/reducer/user-review/selectors';

const MIN_COMMENT_CHARACTERS = 50;

export default function PropertyReviewForm({id}: {id: string}): JSX.Element {
  const [formData, setFormData] = useState({
    rating: null,
    review: '',
  });

  const isCommentDataSending = useAppSelector(getCommentDataSendingStatus);
  const isSubmitDisabled = (formData.review.length < MIN_COMMENT_CHARACTERS) || (formData.rating === null) || isCommentDataSending;
  const dispatch = useAppDispatch();

  const fieldChangeHandle = (evt: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>): void => {
    const {name, value} = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const resetFormData = () => {
    setFormData({
      rating: null,
      review: '',
    });
  };

  const submitHandle = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    dispatch(sendOfferCommentAction({id, resetFormData, commentData:{
      comment: formData.review,
      rating: formData.rating,
    }}));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={submitHandle}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" disabled={isCommentDataSending} onChange={fieldChangeHandle}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" disabled={isCommentDataSending} onChange={fieldChangeHandle}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" disabled={isCommentDataSending} onChange={fieldChangeHandle}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" disabled={isCommentDataSending} onChange={fieldChangeHandle}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" disabled={isCommentDataSending} onChange={fieldChangeHandle}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={formData.review} disabled={isCommentDataSending} onChange={fieldChangeHandle}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled}>Submit</button>
      </div>
    </form>
  );
}
