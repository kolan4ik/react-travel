import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

const Header = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleBack = () => {
    navigate(-1);
  };

  const { email, authorizationStatus } = useAppSelector(({ USER }) => USER);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <button type="button" onClick={handleBack} className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src={Logo}
                alt="Logo"
                width="81"
                height="41"
              />
            </button>
          </div>
          {location.pathname !== '/login' && (
          <nav className="header__nav">
            <ul className="header__nav-list">
              {(authorizationStatus === AuthorizationStatus.NoAuth) && (
                <li className="header__nav-item user">
                  <Link
                    to={AppRoute.Login}
                    className="header__nav-link header__nav-link--profile"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              )}
              {(authorizationStatus === AuthorizationStatus.Auth) && (
                <li className="header__nav-item user">
                  <Link
                    to={AppRoute.Favorite}
                    className="header__nav-link header__nav-link--profile"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__login">{email}</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
