import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { ApartmentStore } from './appartmant-store/apartment-store';
import { UsersStore } from './users-store/users-store';

export const rootReducer = combineReducers({
  [NameSpace.apartments]: ApartmentStore.reducer,
  [NameSpace.user]: UsersStore.reducer,
});
