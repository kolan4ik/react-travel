import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../UI/Header';
import Nav from '../UI/Nav';
import Card from '../UI/Card';
import Sort from '../UI/Sort';
import Loader from '../UI/Loader';
import CustomMap from '../UI/CustomMap';
import { AppatamentsSmall, City } from '../types/apatament';
import { loadApartmentListCity } from '../../store/appartmant-store/apartment-store';
import { useAppDispatch, useAppSelector } from '../../hooks';

const capitalizeFirstLetter = (str: string): string => str.charAt(0).toUpperCase() + str.substring(1);

const MainScreen = (): JSX.Element => {
  const { cityName } = useParams();
  const dispatch = useAppDispatch();

  const { listCity } = useAppSelector(({ APARTMENTS }) => APARTMENTS);

  const [pointsList, setPointsList] = useState<City[] | []>([]);

  useEffect(() => {
    if (cityName) {
      dispatch(loadApartmentListCity(cityName));
    }
  }, [cityName, dispatch]);

  useEffect(() => {
    if (listCity.length && cityName) {
      const filterList = listCity.map((item) => item.city);
      setPointsList(filterList);
    }
  }, [listCity, cityName]);

  if (listCity.length === 0) {
    return <Loader />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">
          Cities
        </h1>
        <Nav />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">
                Places
              </h2>
              <b className="places__found">
                {listCity.length}
                {' '}
                places to stay in
                {' '}
                { capitalizeFirstLetter(cityName as string) }
              </b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                {listCity.map((item: AppatamentsSmall) => <Card key={item.id} {...item} />)}
              </div>
            </section>
            <div className="cities__right-section">
              {(pointsList.length > 0) && <CustomMap pointsList={pointsList} centerMap={pointsList[0].location} />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainScreen;
