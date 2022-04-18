import { API_PATH } from '../constants';

export class HttpService {
  constructor(controllerName = '') {
    this.baseApi = `${API_PATH}/${controllerName}`;
  }

  async get(path = '') {
    const response = await fetch(`${this.baseApi}/${path}`);
    return response.json();
  }

  async post(path = '', body) {
    const stringifiedData = JSON.stringify(body);

    const response = await fetch(`${this.baseApi}/${path}`, {
      method: 'POST',
      body: stringifiedData,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  }

  async postFormData(path = '', body) {
    const response = await fetch(`${this.baseApi}/${path}`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.json();
  }
}
