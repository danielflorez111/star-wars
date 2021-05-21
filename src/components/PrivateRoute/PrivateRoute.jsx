import React from 'react';
import { Route, Redirect } from "react-router-dom";

import { isLoggedIn } from '../../authentication/token';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userLoggedIn = isLoggedIn();

  return (
    <Route
      {...rest}
      render={props => (
        userLoggedIn ?
          <Component {...props} {...rest} />
          :
          <Redirect to={{
            pathname: '/',
          }} />
      )}
    />
  )
};

export default PrivateRoute;
