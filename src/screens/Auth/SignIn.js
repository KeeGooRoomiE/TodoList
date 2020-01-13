import React from "react";
import UserField from "../../components/UserField";
import { initArrayInputs, initArraySigninButtons } from "./AuthElements";
import AuthStore from "./AuthStore";

class SignIn extends React.Component {

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

    performSignIn = () => AuthStore.SignIn(this.state.mail, this.state.password);

    render() {
        const inputsArray = initArrayInputs(this.handleChangeMail, this.handleChangePass);
        const buttonsArray = initArraySigninButtons(this.performSignIn);
        return (
            <div>
                <UserField inputs={inputsArray} pressers={buttonsArray} />
            </div>
        )
    }
}

export default SignIn;