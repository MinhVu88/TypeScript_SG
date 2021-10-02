import { DataCollection } from "../../../models/inheritanceApproach/reusableClasses/DataCollection";

export abstract class UICollection<T, K> {
  constructor(
    public parentElement: Element,
    public dataCollection: DataCollection<T, K>
  ) {}

  abstract renderView(model: T, view: Element): void;

  renderCollection(): void {
    this.parentElement.innerHTML = '';

    const templateElement = document.createElement('template');

    for(let model of this.dataCollection.models) {
      const view = document.createElement('div');

      this.renderView(model, view);

      templateElement.content.append(view);
    }

    this.parentElement.append(templateElement.content);
  }
}