import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../UI/Header';
import OtherPlaceCard from '../UI/OtherPlaceCard';
import { AppatamentsSmall } from '../types/apatament';
import Loader from '../UI/Loader';
import CustomMap from '../UI/CustomMap';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addToFavorite } from '../../store/users-store/users-store';

const PropertyScreen = (): JSX.Element => {
  const disapatch = useAppDispatch();

  const { list } = useAppSelector(({ APARTMENTS }) => APARTMENTS);
  const { isFavorite } = useAppSelector(({ USER }) => USER);

  const [mockAppartament, setMockAppartament] = useState<AppatamentsSmall>();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      const isActiveAppertament = list.find((item: AppatamentsSmall): boolean => {
        const numberId: number = parseInt(id, 10);
        return item.id === numberId;
      });
      setMockAppartament(isActiveAppertament);
    }
  }, [id, list]);

  if (!mockAppartament) {
    return (
      <div className="page">
        <Header />
        <div className="page__main page__main--property">
          <div className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                <Loader />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              { mockAppartament.photos.map((item) => (
                <div key={item} className="property__image-wrapper">
                  <img className="property__image" src={item} alt="studio" />
                </div>
              )) }

            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {mockAppartament.isPremium && (
              <div className="property__mark">
                <span>Premium</span>
              </div>
              )}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {mockAppartament.title}
                  {' '}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg
                    onClick={() => {
                      disapatch(addToFavorite(mockAppartament.id));
                    }}
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark" fill={isFavorite.includes(mockAppartament.id) ? '#4481c3' : ''} stroke={isFavorite.includes(mockAppartament.id) ? '#4481c3' : ''} />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${mockAppartament.rate * 20}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {mockAppartament.rate.toFixed(1)}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  Apartment
                  {' '}
                  {mockAppartament.city.name}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {mockAppartament.bedroom}
                  {' '}
                  Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max
                  {' '}
                  {mockAppartament.adults}
                  {' '}
                  adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">
                  &euro;
                  {mockAppartament.cash}
                </b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {mockAppartament.inside.map((item) => (<li key={item} className="property__inside-item">{item}</li>))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper" />
                  <span className="property__user-name">
                    Angelina
                  </span>
                  <span className="property__user-status">
                    Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section className="property__map map">
            <CustomMap centerMap={{ ...mockAppartament.city.location, zoom: 8 }} pointsList={[mockAppartament.city]} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              {list.slice(0, 3).map((item) => <OtherPlaceCard key={item.id} {...item} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PropertyScreen;
