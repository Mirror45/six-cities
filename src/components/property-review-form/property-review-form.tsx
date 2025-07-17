import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendOfferCommentAction } from '../../store/action/api-actions';
import { getCommentDataSendingStatus } from '../../store/reducer/user-review/selectors';

const MIN_COMMENT_CHARACTERS = 50;

export default function PropertyReviewForm({ id }: { id: string }): JSX.Element {
  const [formData, setFormData] = useState({
    rating: null as number | null,
    review: '',
  });

  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const isCommentDataSending = useAppSelector(getCommentDataSendingStatus);
  const isSubmitDisabled = (formData.review.length < MIN_COMMENT_CHARACTERS) || (formData.rating === null) || isCommentDataSending;
  const dispatch = useAppDispatch();

  const fieldChangeHandle = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = evt.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value
    }));
  };

  const resetFormData = () => {
    setFormData({
      rating: null,
      review: '',
    });
  };

  const submitHandle = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    dispatch(sendOfferCommentAction({
      id,
      resetFormData,
      commentData: {
        comment: formData.review,
        rating: formData.rating,
      }
    }));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={submitHandle}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((star) => {
          const isActive = hoverRating !== null
            ? star <= hoverRating
            : star <= (formData.rating ?? 0);

          return (
            <div key={star}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={star}
                id={`${star}-stars`}
                type="radio"
                disabled={isCommentDataSending}
                onChange={fieldChangeHandle}
                checked={formData.rating === star}
              />
              <label
                htmlFor={`${star}-stars`}
                className={`reviews__rating-label form__rating-label ${isActive ? 'active' : ''}`}
                title={['terribly', 'badly', 'not bad', 'good', 'perfect'][5 - star]}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(null)}
              >
                <svg className="form__star-image" width="37" height="33" style={{ fill: isActive ? '#ff9000' : '#ccc' }}>
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </div>
          );
        })}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        disabled={isCommentDataSending}
        onChange={fieldChangeHandle}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled}>
          Submit
        </button>
      </div>
    </form>
  );
}
