import axios, { AxiosPromise, AxiosResponse } from 'axios';
// import {UserProps} from '../User';

// const apiUrl = 'http://localhost:3000/users';

interface ID {
  id?: number;
};

export class Sync<T extends ID> {
  constructor(public apiUrl: string) {}

  // fetch(): void {
  //   axios.get(apiUrl.concat(`/${this.get('id')}`))
  //        .then((response: AxiosResponse): void => {
  //          this.set(response.data); 
  //        })
  //        .catch(error => console.log(error));
  // }

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.apiUrl}/${id}`);
  }

  // save(): void {
  //   const id = this.get('id');
  //   if(id) {
  //     axios.put(apiUrl.concat(`/${id}`), this.data); 
  //   } else {
  //     axios.post(apiUrl, this.data);
  //   }
  // }

  save(/*data: UserProps*/ data: T): AxiosPromise {
    const {id} = data;

    if(id) {
      // the existence of id proves that an User instance's been saved to the db
      // so saving an User instance in this case means updating an existing db record
      return axios.put(this.apiUrl.concat(`/${id}`), data); 
    } else {
      // if an id is nonexistent, that means an User instance isn't in the db
      // so post() is called to create a brand new record in the db
      return axios.post(this.apiUrl, data);
    }
  }
}