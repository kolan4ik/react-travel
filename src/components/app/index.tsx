import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainEmptyScreen from '../main-empty-screen';
import MainScreen from '../main-screen';
import LoginScreen from '../login-screen';
import { AppRoute } from '../../const';
import SvgSprite from '../UI/SvgSprite';
import PrivatRoute from '../privat-route';
import PropertyScreen from '../property-screen';
import FavoriteScreen from '../favorite-screen';
import { useAppDispatch } from '../../hooks';
import { loadApartmentList } from '../../store/appartmant-store/apartment-store';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadApartmentList());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <SvgSprite />
      <Routes>
        <Route path={AppRoute.Root} element={<MainEmptyScreen />} />
        <Route path={`${AppRoute.Root}:cityName`} element={<MainScreen />} />
        <Route
          path={`${AppRoute.Root}:cityName/:id`}
          element={<PropertyScreen />}
        />
        <Route
          path={AppRoute.Favorite}
          element={<PrivatRoute><FavoriteScreen /></PrivatRoute>}
        />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path="*" element={<MainEmptyScreen />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
