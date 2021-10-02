import { Model } from './reusableClasses/Model';
import { Attributes } from './helperClasses/Attributes';
import { APIResources } from './helperClasses/APIResources';
import { Events } from './helperClasses/Events';
import { DataCollection } from './reusableClasses/DataCollection';

const apiUrl = 'http://localhost:3000/users';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}; 

export class User1 extends Model<UserProps> {
  static buildUserInstance(attributes: UserProps): User1 {
    return new User1(
      new Attributes<UserProps>(attributes),
      new APIResources<UserProps>(apiUrl),
      new Events()
    );
  }

  static buildUserCollection(): DataCollection<User1, UserProps> {
    return new DataCollection<User1, UserProps>(
      apiUrl,
      (json: UserProps) => User1.buildUserInstance(json) 
    );
  }

  setRandomAge(): void {
    const randomAge = Math.round(Math.random() * 100);

    this.set({age: randomAge});
  }
};