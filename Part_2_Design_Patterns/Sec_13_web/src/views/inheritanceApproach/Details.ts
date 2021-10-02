import { User1, UserProps } from "../../models/inheritanceApproach/User1";
import { Rendering } from "./reusableClasses/Rendering";

export class Details extends Rendering<User1, UserProps> {
  getTemplate(): string {
    return `
      <div>
        <h1>User Details</h1>
        <div>Name: ${this.model.get('name')}</div>
        <div>Age: ${this.model.get('age')}</div>
      </div>
    `;
  }
}