import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { observer } from 'mobx-react';

import Layer from "./components/BkgLayer";
import Main from "./screens/List/Main";
import PrivateRoute from "./components/PrivateRoute";
import {
  AuthStore,
  LogIn,
  SignIn
} from "./screens/Auth"

class App extends React.Component {

  componentDidMount() {
    AuthStore.getTokenExist();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Layer>
            <PrivateRoute path="/register" canRoute={!AuthStore.isLoggedIn} targetRoute="/home" > <SignIn />  </PrivateRoute>
            <PrivateRoute path="/login" canRoute={!AuthStore.isLoggedIn} targetRoute="/home" > <LogIn /> </PrivateRoute>
            <PrivateRoute path="/home" canRoute={AuthStore.isLoggedIn} targetRoute="/login" ><Main /></PrivateRoute>
            <Route path="/" > <Redirect to={{ pathname: "/home" }} /> </Route>
          </Layer>
        </Switch>
      </Router>
    );
  };
}

export default observer(App);
