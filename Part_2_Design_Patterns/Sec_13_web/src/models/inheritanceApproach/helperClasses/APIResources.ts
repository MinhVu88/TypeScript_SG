import axios, { AxiosPromise } from 'axios';

interface ID {
  id?: number;
};

export class APIResources<T extends ID> {
  constructor(public apiUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.apiUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const {id} = data;

    if(id) {
      return axios.put(this.apiUrl.concat(`/${id}`), data); 
    } else {
      return axios.post(this.apiUrl, data);
    }
  }
}