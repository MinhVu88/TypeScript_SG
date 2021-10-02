import { Rendering } from './reusableClasses/Rendering';
import { User1, UserProps } from "../../models/inheritanceApproach/User1";
import { Details } from './Details';
import { Form } from './Form';

export class UserDetailsForm extends Rendering<User1, UserProps> {
  mapViews(): {[key: string]: string} {
    return {
      userDetails: '#user-details',
      userForm: '#user-form'
    };
  }

  nestViews = (): void => {
    new Details(this.views.userDetails, this.model).render();

    new Form(this.views.userForm, this.model).render();
  }

  getTemplate(): string {
    return `
      <div>
        <div id="user-details"></div>
        <div id="user-form"></div>
      </div>
    `;
  }
}