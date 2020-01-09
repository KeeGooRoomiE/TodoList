import React from 'react';
import {
  Route,
  Redirect } from "react-router-dom";


function PrivateRoute({ children, isAuth, targetRoute, ...rest }) {
    return (
      <Route {...rest} render={({ location }) => isAuth ? (children) : (<Redirect to={{ pathname: targetRoute, state: { from: location } }} />)} />
    );
  }

export default PrivateRoute;