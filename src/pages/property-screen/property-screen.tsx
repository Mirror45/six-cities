import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import browserHistory from '../../browser-history';
import { getRatingStarsStyle} from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setOfferFavoriteStatusAction } from '../../store/action/api-actions';
import { getCurrentOfferDataLoadingStatus, getNearbyOffers, getOfferInfo } from '../../store/reducer/current-offer-data/selectors';
import { getAuthorizationStatus } from '../../store/reducer/authorization-user-process/selectors';
import { AppRoute } from '../../const';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import AdCardList from '../../components/ad-card-list/ad-card-list';
import PropertyReviews from '../../components/property-reviews/property-reviews';
import PropertyReviewForm from '../../components/property-review-form/property-review-form';


function PropertyScreen(): JSX.Element {
  const offer = useAppSelector(getOfferInfo);
  const isCurrenOfferDataLoading = useAppSelector(getCurrentOfferDataLoadingStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const dispatch = useAppDispatch();
  const [isFavoriteOffer, setFavoriteOffer] = useState<boolean | null>(offer?.isFavorite ? offer.isFavorite : null);

  if (offer && !isCurrenOfferDataLoading) {
    const {isPremium, description, goods, host, images, rating, maxAdults, price, title, type, bedrooms, id} = offer;
    const favoriteStatus = `${+!isFavoriteOffer}`;

    const handleFavoriteButtonClick = () => {
      if(authorizationStatus !== 'AUTH') {
        browserHistory.push(AppRoute.SignIn);

        return;
      }
      setFavoriteOffer((prevState) => !prevState);
      dispatch(setOfferFavoriteStatusAction({id, favoriteStatus}));
    };

    return (
      <div className="page">
        <Helmet>
          <title>Offer</title>
        </Helmet>
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((image) => (
                  (
                    <div className="property__image-wrapper" key = {image}>
                      <img className="property__image" src={image} alt="studio"/>
                    </div>
                  )
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className="property__mark">
                  <span>{isPremium ? 'Premium' : ''}</span>
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <button
                    className={`property__bookmark-button button ${isFavoriteOffer ? 'property__bookmark-button--active' : ''}`}
                    onClick={handleFavoriteButtonClick}
                    type="button"
                  >
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width:  getRatingStarsStyle(rating)}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {`${bedrooms} Bedrooms`}
                  </li>
                  <li className="property__feature property__feature--adults">
                    {`Max ${maxAdults} adults`}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((good) => (
                      <li className="property__inside-item" key={good}>
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                    <span className="property__user-status">
                      {host.isPro ? 'Pro' : ''}
                    </span>
                  </div>
                  <div className="property__description">
                    {description.split('.').map((sentense) => (
                      <p className="property__text" key={sentense}>
                        {sentense}
                      </p>
                    ))}
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <PropertyReviews/>
                  {
                    authorizationStatus === 'AUTH' &&
                    <PropertyReviewForm id={offer.id.toString()}/>
                  }
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map points={nearbyOffers.slice(0, 3)}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <AdCardList offers={nearbyOffers.slice(0, 3)} />
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }

  return <NotFoundScreen />;
}

export default PropertyScreen;
