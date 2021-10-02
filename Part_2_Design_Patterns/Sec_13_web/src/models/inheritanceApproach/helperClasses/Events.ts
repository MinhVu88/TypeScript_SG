// a type alias that represents an anonymous function taking no args & returning nothing
export type Callback = () => void;

export class Events {
  events: {[key: string]: Callback[]} = {};
  
  on = (event: string, callback: Callback): void => {
    const eventHandlers = this.events[event] || [];

    eventHandlers.push(callback);

    this.events[event] = eventHandlers;
  }

  trigger = (event: string): void => {
    const eventHandlers = this.events[event];

    if(!eventHandlers || eventHandlers.length === 0) {
      return;
    }

    eventHandlers.forEach(callback => callback());
  }
}