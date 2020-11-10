import React, { ReactElement, ReactNode, useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { AuthContext } from '../../constants/context';

export interface AuthRouteProps extends RouteProps {
  renderComponent: (props: any) => ReactElement
}

function AuthRoute({ renderComponent: Component, ...rest }: AuthRouteProps) {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}

export default AuthRoute;