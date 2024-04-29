import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/reducer/favorite-offers-data/selectors';
import Header from '../../components/header/header';
import FavoriteAdCardList from '../../components/favorite-ad-card-list/favorite-ad-card-list';
import Footer from '../../components/footer/footer';
import FavoritedEmpty from '../../components/favorited-empty/favorited-empty';

function FavoritedScreen(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <div className="page">
      <Helmet>
        <title>Favorited</title>
      </Helmet>
      <Header></Header>
      {!favoriteOffers.length ? <FavoritedEmpty/> :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <FavoriteAdCardList />
              </ul>
            </section>
          </div>
        </main>}
      <Footer/>
    </div>
  );
}

export default FavoritedScreen;
