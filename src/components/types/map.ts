import { City } from './apatament';

export const makeFakeCurrentCity = (): City => ({
  location: {
    latitude: 50.123456789,
    longitude: 5.123456789,
    zoom: 10,
  },
  name: 'Amsterdam',
});
