import React from "react";
import UserField from "../../components/UserField";
import { initArrayInputs, initArrayLoginButtons } from "./AuthElements"
import AuthStore from "./AuthStore"

class LogIn extends React.Component {

    state = {
        mail: "",
        password: "",
    }

    handleChangeMail = (event) => {
        this.setState({ mail: event.target.value })
    }

    handleChangePass = (event) => {
        this.setState({ password: event.target.value })
    }

    performLogIn = () => AuthStore.LogIn(this.state.mail, this.state.password);

    render() {
        const inputsArray = initArrayInputs(this.handleChangeMail, this.handleChangePass);
        const buttonsArray = initArrayLoginButtons(this.performLogIn);
        return (
            <div>
                <UserField inputs={inputsArray} pressers={buttonsArray} />
            </div>
        )
    }
}

export default LogIn;