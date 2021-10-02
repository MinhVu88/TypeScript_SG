import { AxiosResponse } from 'axios';
import { Eventing } from './helperClasses/Eventing';
import { Sync } from './helperClasses/Sync';
import { Attributes } from './helperClasses/Attributes';

const apiUrl = 'http://localhost:3000/users';

export interface UserProps {
  /*
    - The question mark renders the properties optional
    
    - This means all or 1 of them can be either specified or left out in 
      creating a User instance (new User({})) or calling set({}) like this
  */
  id?: number;
  name?: string;
  age?: number;
}; 

export class User0 {
  // the helper classes/sub-modules
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(apiUrl);
  public attributes: Attributes<UserProps>;
  
  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  // a passthru method without using the "get" accessors (not recommended)
  // on(event: string, callback: Callback): void {
  //   this.events.on(event, callback);
  // }

  // passthru methods with the accessors (vids 169, 170 & 171)
  // these methods don't need coordination between the helper classes
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  // passthru methods that need coordination between the sub-modules (vids 173, 174 & 175)
  set(update: UserProps): void {
    this.attributes.set(update);

    this.events.trigger('change');
  }

  fetch(): void {
    const currentUserId = this.attributes.get('id');

    if(typeof currentUserId !== 'number') {
      throw new Error('User not found');
    }

    this.sync.fetch(currentUserId)
             .then((response: AxiosResponse): void => {
                // why "this.set(response.data)", but not "this.attributes.set(response.data)"? Refer to vid 174
                this.set(response.data);
             })
             .catch(error => console.log(error));
  }

  save(): void {
    const allUserAttributes = this.attributes.getAll();

    this.sync.save(allUserAttributes)
             .then((response: AxiosResponse): void => {
               this.trigger('save');
             })
             .catch(() => {
               this.trigger('error');
             });
  }
};