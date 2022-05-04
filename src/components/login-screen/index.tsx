import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from '../UI/Header';
import { AppRoute, AuthorizationStatus } from '../../const';
import { autorization } from '../../store/users-store/users-store';
import { useAppDispatch, useAppSelector } from '../../hooks';

const LoginScreen = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();

  const { authorizationStatus } = useAppSelector(({ USER }) => USER);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <div className="login__form form">
              <div className="login__input-wrapper form__input-wrapper">
                <label htmlFor="email" className="visually-hidden">
                  E-mail
                </label>
                <input id="email" onChange={(e) => setEmail(e.target.value)} className="login__input form__input" type="email" name="email" value={email} placeholder="Email" />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label htmlFor="password" className="visually-hidden">
                  Password
                </label>
                <input id="password" onChange={(e) => setPassword(e.target.value)} className="login__input form__input" type="password" name="password" value={password} placeholder="Password" />
              </div>
              <button
                onClick={() => {
                  dispatch(autorization({ email, password }));
                }}
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={`${AppRoute.Root}amsterdam`} className="locations__item-link">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LoginScreen;
