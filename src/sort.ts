import { Appataments, AppatamentsSmall } from './components/types/apatament';
import { typeSort } from './const';

export const sortList = (param: string, list: Appataments): Appataments => {
  let newList;
  switch (param) {
    case typeSort.TopFirst:
      newList = list.sort((a, b) => b.rate - a.rate);
      break;
    case typeSort.LowToHigh:
      newList = list.sort((a, b) => a.cash - b.cash);
      break;
    case typeSort.HighToLow:
      newList = list.sort((a, b) => b.cash - a.cash);
      break;
    default:
      newList = list.sort((a, b) => a.id - b.id);
      break;
  }
  return newList;
};

export const getCityArr = (param: string, list: Appataments): Appataments => list.filter((item: AppatamentsSmall): boolean => item.city.name.toLowerCase() === param);
