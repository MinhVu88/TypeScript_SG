import axios, { AxiosResponse } from 'axios';
import { Events } from '../helperClasses/Events';

// T: the type that specifies a collection stored inside the class's models property
// K: the type that specifies the structure of JSON data returned from invoking fetch
// T & K only go in locations where a type is specified
export class DataCollection<T, K> {
  models: T[] = [];
  events: Events = new Events();

  // deserialize() takes some JSON data as an arg & uses it to return an instance of a model
  constructor(
    public apiUrl: string,
    public deserialize: (json: K) => T
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.apiUrl)
         .then((response: AxiosResponse): void => {
           response.data.forEach((value: K) => {
            const modelInstance = this.deserialize(value);

            this.models.push(modelInstance);
           });

           this.trigger('change');
         })
         .catch(error => console.log(error));
  }
}