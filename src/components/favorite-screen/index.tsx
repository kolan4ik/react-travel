import React, { useEffect, useState } from 'react';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import FavoriteCard from '../UI/FavoriteCard';
import { useAppSelector } from '../../hooks';
import { Favorite } from '../types/apatament';

const FavoriteScreen = (): JSX.Element => {
  const { list } = useAppSelector(({ APARTMENTS }) => APARTMENTS);
  const { isFavorite } = useAppSelector(({ USER }) => USER);
  const [favoriteList, setFavoriteList] = useState<Favorite[] | null>();

  useEffect(() => {
    const listFavorite = list.reduce((acc:Favorite[], apartment): Favorite[] => {
      if (isFavorite.includes(apartment.id)) {
        const hasIndex = acc.findIndex((item) => item.name === apartment.city.name);
        if (hasIndex >= 0) {
          acc[hasIndex] = {
            ...acc[hasIndex],
            list: [
              ...acc[hasIndex].list,
              apartment,
            ],
          };
          return [...acc];
        }
        return [...acc,
          {
            name: apartment.city.name,
            list: [
              apartment,
            ],
          },
        ];
      }
      return [...acc];
    }, []);
    setFavoriteList(listFavorite);
  }, [isFavorite, list]);

  return (
    <div className="page">
      <Header />
      <div className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {
              (favoriteList?.length) && (
              <ul className="favorites__list">
                { favoriteList.map((item) => (
                  <li key={item.name} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <div className="locations__item-link">
                          <span>{item.name}</span>
                        </div>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {item.list.map((itemList) => (
                        <FavoriteCard
                          cash={itemList.cash}
                          title={itemList.title}
                          rate={itemList.rate}
                          photos={itemList.photos[0]}
                          type={itemList.type}
                          key={itemList.id}
                        />
                      ))}
                    </div>
                  </li>
                )) }
              </ul>
              )
            }
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FavoriteScreen;
