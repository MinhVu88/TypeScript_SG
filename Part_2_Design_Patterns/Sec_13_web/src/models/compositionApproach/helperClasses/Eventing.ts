// a type alias that represents an anonymous function taking no args & returning nothing
type Callback = () => void;

export class Eventing {
  // explained in Sec 13 | vid 147
  events: {[key: string]: Callback[]} = {};
  
  // old version: on(event: string, callback: Callback): void {...}
  on = (event: string, callback: Callback): void => {
    const eventHandlers = this.events[event] || [];

    eventHandlers.push(callback);

    this.events[event] = eventHandlers;
  }

  // old version: trigger(event: string): void {...}
  trigger = (event: string): void => {
    const eventHandlers = this.events[event];

    if(!eventHandlers || eventHandlers.length === 0) {
      return;
    }

    eventHandlers.forEach(callback => callback());
  }
}