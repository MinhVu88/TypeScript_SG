import { AxiosPromise, AxiosResponse } from 'axios';
import { Callback } from '../helperClasses/Events';

// like classes & functions, interfaces can also be of generic type
interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Eventing {
  on(event: string, callback: Callback): void;
  trigger(event: string): void
}

interface ID {
  id?: number;
}

export class Model<T extends ID> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Eventing
  ) {}

  // the "get" accessors/getter methods (version 1: longer than v.2)
  // get on() {
  //   return this.events.on;
  // }
  // get trigger() {
  //   return this.events.trigger;
  // }
  // get get() {
  //   return this.attributes.get;
  // }

  // the getter methods (version 2: shorter than v.1)
  // why this short version is only possible to implement 
  // in the inheritance approach is explained in vid 181
  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if(typeof id !== 'number') {
      throw new Error('Data not found');
    }

    this.sync.fetch(id)
             .then((response: AxiosResponse): void => {
                this.set(response.data);
             })
             .catch(error => console.log(error));
  }

  save(): void {
    const allAttributes = this.attributes.getAll();

    this.sync.save(allAttributes)
             .then((response: AxiosResponse): void => {
               this.trigger('save');
             })
             .catch(() => {
               this.trigger('error');
             });
  }
}