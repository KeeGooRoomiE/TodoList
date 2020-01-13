import { home_url } from './consts';

export function sendData(method = "GET", url, body = null) {
  const config = {
    method: method,
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  }
  if (body) {
    config.body = JSON.stringify(body);
  }
  const token = sessionStorage.getItem("userToken");

  return fetch(
    home_url + url + "?access_token=" + token, config
  )
    .then(serverAnswer => serverAnswer.json())
    .catch(error => console.log('error', error)
    )
}