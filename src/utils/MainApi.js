import { BASE_URL } from "./Auth";

class MainApi {
  constructor() {
    this._url = BASE_URL;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getToken = (token) => {
    this._token = `Bearer ${token}`;
    this._headers = {
        'Content-Type': 'application/json',
        'authorization' :  this._token
    }
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      headers: this._headers
    })
    .then(this._getResponseData)
  }

  editUser(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._getResponseData)
  }

  createMovies(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._getResponseData)
  }

  deleteMovies(data, id) {
    const movieId = id;
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._getResponseData)
  }
}

const mainApi = new MainApi();

export default mainApi;

