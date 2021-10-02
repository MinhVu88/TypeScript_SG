import { User1, UserProps } from "../../models/inheritanceApproach/User1";
import { Details } from "./Details";
import { UICollection } from "./reusableClasses/UICollection";

export class UserList extends UICollection<User1, UserProps> {
  renderView(model: User1, view: Element): void {
    new Details(view, model).render();
  }
}