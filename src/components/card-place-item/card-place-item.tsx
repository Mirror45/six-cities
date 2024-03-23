import {useState} from 'react';
import { Offers } from "../../types/offers";
import { getRatingStarsStyle } from '../../utils';

interface CardPlaceProps {
  offer: Offers;
}

function CardPlaceItem({offer}: CardPlaceProps): JSX.Element {
  const {price, title, is_premium, is_type, is_favorite, img, rating} = offer;
  const [isFavorite, setFavorite] = useState(is_favorite);

  const handleFavoriteButtonClick = () => {
    setFavorite((prevState) => !prevState);
  };

  return (
    <article className="cities__place-card place-card">
      {
        <div className={`${is_premium ? "place-card place-card__mark" : ""}`}>
          <span>{is_premium ? "Premium" : ""}</span>
        </div>
      }
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={img} width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
        className={`place-card__bookmark-button ${isFavorite ? "place-card__bookmark-button--active" : ""} button`}
        onClick={handleFavoriteButtonClick}
        type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width:  getRatingStarsStyle(rating)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{title}</a>
      </h2>
      <p className="place-card__type">{is_type}</p>
    </div>
  </article>
    )
}

export default CardPlaceItem;
