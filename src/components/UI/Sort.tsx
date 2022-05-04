import React, { useState } from 'react';
import { typeSort } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSort } from '../../store/appartmant-store/apartment-store';

const Sort = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector(({ APARTMENTS }) => APARTMENTS);
  const [isVisibleSelect, setIsVisibleSelect] = useState(false);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span role="button" aria-hidden="true" onClick={() => setIsVisibleSelect(!isVisibleSelect)} className="places__sorting-type">
        { sort }
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      { isVisibleSelect && (
      <ul
        className="places__options places__options--custom places__options--opened"
      >
        { Object.values(typeSort).map((item): JSX.Element => (
          <li
            key={item}
          >
            <button
              className={`places__option ${item === sort ? 'places__option--active' : ' '}`}
              type="button"
              onClick={() => {
                setIsVisibleSelect(false);
                dispatch(changeSort(item));
              }}
            >
              {' '}
              {item}
              {' '}
            </button>

          </li>
        ))}
      </ul>
      )}
    </form>
  );
};

export default Sort;
