import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { AppatamentsSmall } from '../types/apatament';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addToFavorite } from '../../store/users-store/users-store';

const OtherPlaceCard = (props: AppatamentsSmall): JSX.Element => {
  const { isFavorite } = useAppSelector(({ USER }) => USER);
  const { cityName } = useParams();
  const dispatch = useAppDispatch();
  const {
    photos, cash, title, id, rate, type,
  } = props;
  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Root}${cityName}/${id}`}>
          <img
            className="place-card__image"
            src={photos[0]}
            width="260"
            height="195"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              &euro;
              {cash}
            </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            onClick={() => {
              dispatch(addToFavorite(id));
            }}
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" fill={isFavorite.includes(id) ? '#4481c3' : ''} stroke={isFavorite.includes(id) ? '#4481c3' : ''} />
            </svg>
            {!isFavorite.includes(id) && <span className="visually-hidden">To bookmarks</span> }
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rate * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Root}${cityName}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default OtherPlaceCard;
