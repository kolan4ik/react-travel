import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type FavoriteCardProps = {
  cash: number
  title: string
  rate: number
  photos: string
  type: string
}

const FavoriteCard = (props: FavoriteCardProps): JSX.Element => {
  const {
    cash, title, rate, photos, type,
  } = props;
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Property}>
          <img
            className="place-card__image"
            src={photos}
            width="150"
            height="110"
            alt="Place"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              &euro;
              {cash}
            </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rate * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Property}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default FavoriteCard;
