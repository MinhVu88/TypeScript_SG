// NON-GENERIC CLASSES
class NumbersArray {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class StringsArray {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// GENERIC CLASS
class MiscellaneousArray<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

/*
 - Thanks to generic-related type inference & the array of strings that's 
   passed to MiscellaneousArray's constructor, typescript can detect that 
   <T> is of type string, even without specifying type annotations like this:

  const array = new MiscellaneousArray<string>(['a', 'b', 'c']);   
*/
const array = new MiscellaneousArray(['a', 'b', 'c']);

console.log('\n\t',array[1],'is a',typeof array.get(1),'\n');