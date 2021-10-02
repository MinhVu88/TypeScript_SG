import { Model } from "../../../models/inheritanceApproach/reusableClasses/Model";

export abstract class Rendering<T extends Model<K>, K> {
  views: {[key: string]: Element} = {};
  
  constructor(
    public parentElement: Element,
    public model: T
  ) {
    // When this class's implemented, a change event is immediately checked on Model.
    // If "change" exists, that means the model's been updated somehow
    // and that's also when the render method's called to re-render the page 
    this.model.on('change', () => {
      this.render();
    });
  }

  abstract getTemplate(): string;

  mapEvents(): {[key: string]: () => void} {
    return {};
  };

  mapViews(): {[key: string]: string} {
    return {};
  }

  /* More about DocumentFragment:

  - https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment

  - https://dev.to/ibn_abubakre/document-fragments-and-why-you-should-use-them-14fk

  - https://www.javascripttutorial.net/javascript-dom/javascript-documentfragment/

  - https://stackoverflow.com/questions/45540613/how-document-fragment-works
  */
  bindEvents(docFragment: DocumentFragment): void {
    // mapEvents() returns an object in which the key is 'event name: html-based id' & the value is a corresponding function
    const mappedEvents = this.mapEvents();

    for(let key in mappedEvents) {
      // destructure the array returned by key.split(':') to get the event name & html-based id
      const [eventName, htmlBasedId] = key.split(':');

      console.log('\nRendering.ts | eventName & htmlBasedId ->',eventName,'&',htmlBasedId,'\n\n');

      // find all references of html-based IDs specified in key in DocumentFragment
      // and loop thru those IDs, add event handlers to each of them
      const IDs = docFragment.querySelectorAll(htmlBasedId);
      
      IDs.forEach(element => {
        // mappedEvents[key] is the mappedEvents object's value/corresponding function
        element.addEventListener(eventName, mappedEvents[key]);
      });
    }
  }

  bindViews(docFragment: DocumentFragment): void {
    const mappedViews = this.mapViews();

    console.log('\nRendering.ts | mappedViews ->',mappedViews,'\n\n');

    for(let key in mappedViews) {
      const  htmlBasedId = mappedViews[key];

      const IDBasedHtmlElement = docFragment.querySelector(htmlBasedId);

      if(IDBasedHtmlElement) {
        this.views[key] = IDBasedHtmlElement;
      }
    }
  }

  nestViews = (): void => {}

  /* More about the HTML5 <template> element:
  
  - https://dev.to/ahferroin7/the-html5-template-element-26b6

  - https://javascript.info/template-element

  - https://css-tricks.com/crafting-reusable-html-templates/

  - https://www.quackit.com/html/tags/html_template_tag.cfm
  */
  render(): void {
    // to avoid duplicating DocumentFragment whenever render is called more than once,
    // the current version of parentElement is wiped out & replaced by the updated one
    this.parentElement.innerHTML = '';

    const templateElement = document.createElement('template');

    templateElement.innerHTML = this.getTemplate();

    this.bindEvents(templateElement.content);
    this.bindViews(templateElement.content);

    this.nestViews();

    this.parentElement.append(templateElement.content);
  }
}