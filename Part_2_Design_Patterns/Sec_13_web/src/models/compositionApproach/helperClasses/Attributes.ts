export class Attributes<T> {
  constructor(private data: T) {}

  // version #1: ineffective (refer to vids 165 & 166)
  // get(prop: string): (string | number) {
  //   return this.data[prop];
  // }

  // version #2: using an advanced generic constraint (vid 167)
  // get<K extends keyof T>(key: K): T[K] {
  //   return this.data[key];
  // }

  // version #3: refer to vid 172 (the same fix's applied to on & trigger in Eventing.ts)
  // get just 1 attribute (id, name or age) at a time
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  // get all attributes
  getAll(): T {
    return this.data;
  }

  set(update: T): void {
    /* More about Object.assign():

      - https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/

      - https://appdividend.com/2018/12/27/javascript-object-assign-example-object-assign-tutorial/

      - https://www.javascripttutorial.net/es6/javascript-object-assign/
    */
    Object.assign(this.data, update);
  }
}
