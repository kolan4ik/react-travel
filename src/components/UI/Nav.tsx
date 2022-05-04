import React from 'react';
import {
  Link, LinkProps, useMatch, useResolvedPath,
} from 'react-router-dom';
import { AppRoute, LOCATIONS } from '../../const';

function CustomLink({ children, to }: LinkProps): JSX.Element {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={`locations__item-link tabs__item ${match ? 'tabs__item--active' : ''}`}
        to={to}
      >
        <span>{children}</span>
      </Link>
    </div>
  );
}

const Nav = (): JSX.Element => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        { LOCATIONS.map((item) => (
          <li key={item} className="locations__item">
            <CustomLink to={`${AppRoute.Root}${item.toLowerCase()}`}>{item}</CustomLink>
          </li>
        )) }
      </ul>
    </section>
  </div>
);

export default Nav;
