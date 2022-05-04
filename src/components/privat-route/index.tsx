import React from 'react';
import { Navigate, RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

type PrivatRouteProps = RouteProps & {
  children: JSX.Element
}

const PrivatRoute = (props: PrivatRouteProps): JSX.Element => {
  const { children } = props;
  const { authorizationStatus } = useAppSelector(({ USER }) => USER);

  return (authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />);
};

export default PrivatRoute;
