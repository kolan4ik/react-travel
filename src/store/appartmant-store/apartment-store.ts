import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, typeSort } from '../../const';
import { ApartamentSrore } from '../../components/types/apatament';
import { getCityArr, sortList } from '../../sort';
import { mockAppartamentList } from '../../components/utils/mock';

const initialState: ApartamentSrore = {
  list: [],
  isLoader: false,
  currentCity: {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 11,
    },
    name: 'Paris',
  },
  listCity: [],
  sort: typeSort.Popular,
};

export const ApartmentStore = createSlice({
  name: NameSpace.apartments,
  initialState,
  reducers: {
    loadApartmentList: (state) => {
      state.list = mockAppartamentList;
      state.isLoader = true;
    },
    loadApartmentListCity: (state, action: PayloadAction<string>) => {
      state.listCity = sortList(state.sort, getCityArr(action.payload, state.list));
    },
    loadCurrentApartment: (state, action: PayloadAction<string>) => {
      state.listCity = getCityArr(action.payload, state.list);
    },
    changeSort: (state, action:PayloadAction<string>) => {
      state.sort = action.payload;
      state.listCity = sortList(action.payload, state.listCity);
    },
  },
});

export const { loadApartmentList, loadApartmentListCity, changeSort } = ApartmentStore.actions;
