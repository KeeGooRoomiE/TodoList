import React from 'react';
import {
  Route,
  Redirect } from "react-router-dom";


function PrivateRoute({ children, canRoute, targetRoute, ...rest }) {
    return (
      <Route {...rest} render={({ location }) => canRoute ? (children) : (<Redirect to={{ pathname: targetRoute, state: { from: location } }} />)} />
    );
  }

export default PrivateRoute;