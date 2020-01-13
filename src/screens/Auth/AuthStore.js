import { observable, decorate, action } from 'mobx';
import { sendData } from '../../logic/sendData';


class AuthStore {

    isLoggedIn = false;

    LogIn = (mail, pass) => {
        let body = {
            email: mail,
            password: pass
        }

        sendData("POST", "Users/login", body)
            .then(result => {
                this.setTokenData(result.id)
                this.getTokenData(result.id)
            })
            .catch(error => console.log('error', error))
    }

    SignIn = (mail, pass) => {
        let body = {
            email: mail,
            password: pass
        }

        sendData("POST", "Users/", body)
            .then(result => { this.LogIn(mail, pass) })
            .catch(error => console.log('error', error))
    }

    setTokenData = (token) => {
        sessionStorage.setItem("userToken", token);
    }

    getTokenData = (token) => {
        if (token === sessionStorage.getItem('userToken')) {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
            sessionStorage.removeItem('userToken');
        }
    }

    getTokenExist = () => {
        this.isLoggedIn = (sessionStorage.getItem('userToken') !== null)
    }
}

const AuthExport = decorate(AuthStore, {
    isLoggedIn: observable,
    LogIn: action,
    SignIn: action,
    getTokenData: action,
    getTokenExist: action
})

export default new AuthExport()