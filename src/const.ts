export enum AppRoute {
  Root = '/',
  Favorite = '/favorite',
  Login = '/login',
  Property = '/property',
}
export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const LOCATIONS = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const TYPE = ['Apartment', 'Private room'];

export enum typeSort {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopFirst = 'Top rated first',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  data = 'DATA',
  user = 'USER',
  apartments = 'APARTMENTS',
}
