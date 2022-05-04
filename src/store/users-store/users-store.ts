import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { User } from '../../components/types/user';

const initialState: User = {
  email: '',
  password: '',
  isFavorite: [],
  authorizationStatus: AuthorizationStatus.NoAuth,
};

export const UsersStore = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    autorization: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.authorizationStatus = AuthorizationStatus.Auth;
    },
    addToFavorite: (state, action) => {
      const indexEl = state.isFavorite.indexOf(action.payload);
      if (indexEl < 0) {
        state.isFavorite = [...state.isFavorite, action.payload];
      } else {
        state.isFavorite.splice(indexEl, 1);
      }
    },
  },
});

export const { autorization, addToFavorite } = UsersStore.actions;
