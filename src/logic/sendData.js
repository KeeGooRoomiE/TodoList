import { home_url } from './exports';

export function sendData(method = "GET", url, body = null) {
  const config = (body === null) ? {
    method: method,
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  } : {
      method: method,
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(body)
    }
  const token = sessionStorage.getItem("userToken");

  return fetch(
    home_url + url + "?access_token=" + token, config
  )
    .then(serverAnswer => serverAnswer.json())
    .catch(error => console.log('error', error)
    )
}