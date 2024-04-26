import {useState} from 'react';
import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { getRatingStarsStyle} from '../../utils';
import { useAppDispatch } from '../../hooks';
import { activeMarkerMap } from '../../store/action/action';
import { offerInfoInitAction } from '../../store/action/api-actions';


function Card({type, id, isPremium, title, price, isFavorite, previewImage, rating}: Offer): JSX.Element {
  const [Favorite, setFavorite] = useState(isFavorite);
  const dispatch = useAppDispatch();

  const handleMouseOver = () => dispatch(activeMarkerMap(id));
  const handleMouseOut = () => dispatch(activeMarkerMap(null));

  const handleFavoriteButtonClick = () => {
    setFavorite((prevState) => !prevState);
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {
        <div className={`${isPremium ? 'place-card place-card__mark' : ''}`}>
          <span>{isPremium ? 'Premium' : ''}</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${Favorite ? 'place-card__bookmark-button--active' : ''} button`}
            onClick={handleFavoriteButtonClick}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingStarsStyle(rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offers/${id}`} onClick={() => {
            dispatch(offerInfoInitAction(id.toString()));
          }}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
