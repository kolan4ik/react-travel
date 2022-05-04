import {
  datatype, lorem, image,
} from 'faker';

import { Appataments } from '../types/apatament';
import { LOCATIONS, TYPE } from '../../const';

export const mockAppartamentList: Appataments = new Array(30).fill(null).map(() => (
  {
    id: datatype.number(),
    title: lorem.sentence(),
    rate: datatype.float({
      min: 1,
      max: 5,
    }),
    cash: datatype.number({
      min: 100,
      max: 5000,
    }),
    type: TYPE[datatype.number({
      min: 0,
      max: TYPE.length,
    })],
    bedroom: datatype.number({
      min: 1,
      max: 5,
    }),
    adults: datatype.number({
      min: 1,
      max: 5,
    }),
    inside: Array.from(Array(4), () => lorem.sentence(2)),
    isPremium: datatype.boolean(),
    isFavorite: false,
    photos: Array.from(Array(6), () => `${image.nature()}?random=${Math.round(Math.random() * 1000)}`),
    city: {
      location: {
        latitude: datatype.float({
          min: 20,
          max: 90,
        }),
        longitude: datatype.float({
          min: 20,
          max: 90,
        }),
        zoom: 3,
      },
      name: LOCATIONS[datatype.number({
        min: 0,
        max: LOCATIONS.length - 1,
      })],
    },
  }
));
