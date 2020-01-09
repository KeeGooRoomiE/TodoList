import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { observer } from 'mobx-react';

import Layer from "./screens/Layer/BkgLayer";
import Main from "./screens/List/Main";
import UserField from './screens/Auth/UserField';
import PrivateRoute from "./screens/PrivateRoute";
import AuthStore from './screens/Auth/AuthStore';

//
//
//
//
//

class App extends React.Component {

  componentDidMount() {
    AuthStore.getTokenExist();
  }

  state = {
    mail: "",
    password: "",
  }

  initArrayInputs() {
    let mailInput = { title: "Почта: ", secured: false, text: "example@mail.com", titleNewLined: true, onChange: (event) => this.setState({ mail: event.target.value }) }
    let passwordInput = { title: "Пароль: ", secured: true, text: "password", titleNewLined: true, onChange: (event) => this.setState({ password: event.target.value }) }
    //let passConfirmInput = {title: "Подтверждение пароля: ", text: "password", secured: true, titleNewLined:true }
    let loginInputs = [mailInput, passwordInput] //login
    let registerInputs = [mailInput, passwordInput] //register

    let inputArray = [loginInputs, registerInputs]
    return inputArray;
  }

  initArrayButtons() {
    let fromSignToLog = { text: "Уже есть аккаунт?", isLink: true, link: "/login" }
    let fromLogToSign = { text: "Нет аккаунта?", isLink: true, link: "/register" }
    let signInButton = { text: "Регистрация", reaction: () => AuthStore.SignIn(this.state.mail, this.state.password), isLink: true, link: "/home" }
    let logInButton = { text: "Войти", reaction: () => AuthStore.LogIn(this.state.mail, this.state.password), isLink: true, link: "/home" }

    let logInButtonsArray = [logInButton, fromLogToSign]  //login
    let signInButtonsArray = [signInButton, fromSignToLog] //register

    let buttonArray = [logInButtonsArray, signInButtonsArray]
    return buttonArray;
  }

  render() {
    const inputsArray = this.initArrayInputs();
    const loginInputArray = inputsArray[0];
    const registerInputArray = inputsArray[1];

    const buttonsArray = this.initArrayButtons();
    const loginButtonArray = buttonsArray[0];
    const registerButtonArray = buttonsArray[1];
    return (
      <Router>
        <Switch>
          <PrivateRoute path="/register" isAuth={!AuthStore.isLoggedIn} targetRoute="/home" > <Layer><UserField inputs={registerInputArray} pressers={registerButtonArray} isInputRight={this.state.isPassRight} /></Layer>  </PrivateRoute>
          <PrivateRoute path="/login" isAuth={!AuthStore.isLoggedIn} targetRoute="/home" > <Layer><UserField inputs={loginInputArray} pressers={loginButtonArray} /></Layer> </PrivateRoute>
          <PrivateRoute path="/home" isAuth={AuthStore.isLoggedIn} targetRoute="/login" ><Layer><Main /></Layer></PrivateRoute>
          <Route path="/" > <Redirect to={{ pathname: "/home" }} /> </Route>
        </Switch>
      </Router>
    );
  };
}

export default observer(App);
