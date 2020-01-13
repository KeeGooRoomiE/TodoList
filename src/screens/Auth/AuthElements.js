
export function initArrayInputs(mailInputOnChange,passInputOnChange) {
    let mailInput = { title: "Почта: ", secured: false, text: "example@mail.com", titleNewLined: true, onChange: mailInputOnChange };
    let passwordInput = { title: "Пароль: ", secured: true, text: "password", titleNewLined: true, onChange: passInputOnChange };
    return [mailInput, passwordInput]; 
  }

export function initArrayLoginButtons(reaction) {
    let fromLogToSign = { text: "Нет аккаунта?", isLink: true, link: "/register" }
    let logInButton = { text: "Войти", reaction: reaction, isLink: true, link: "/home" }

    return [logInButton, fromLogToSign]
  }

export function initArraySigninButtons(reaction) {
    let fromSignToLog = { text: "Уже есть аккаунт?", isLink: true, link: "/login" }
    let signInButton = { text: "Регистрация", reaction: reaction, isLink: true, link: "/home" }

    return [signInButton, fromSignToLog]

  }