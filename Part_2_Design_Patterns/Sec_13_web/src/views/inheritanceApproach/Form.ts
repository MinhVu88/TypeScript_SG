import { User1, UserProps } from "../../models/inheritanceApproach/User1";
import { Rendering } from "./reusableClasses/Rendering";

export class Form extends Rendering<User1, UserProps> {
  setNameBtn = (): void => {
    const userInput = this.parentElement.querySelector('input');

    // implement type guard to counter a potentially null value returned by querySelector
    if(userInput) {
      const name = userInput.value;

      this.model.set({name});
    }
  }

  setAgeBtn = (): void => {
    this.model.setRandomAge();
  }

  saveModelBtn = (): void => {
    this.model.save();
  }

  mapEvents(): {[key: string]: () => void} {
    // the return object's values are all arrow functions for the binding of "this" to work properly
    // this is explained in vid 195
    return {
      'click:#set-name-btn': this.setNameBtn,
      'click:#set-age-btn': this.setAgeBtn,
      'click:#save-model': this.saveModelBtn
    };
  }

  getTemplate(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}"/>
        <button id="set-name-btn">Update Name</button>
        <button id="set-age-btn">Update Age</button>
        <button id="save-model">Save</button>
      </div>
    `;
  }
}