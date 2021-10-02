// GENERIC CONSTRAINTS
class Car {
  print() {
    console.log('this is a car');
  }
}

class House {
  print() {
    console.log('this is a house');
  }
}

interface Stuff {
  print(): void;
}

// the generic constraint: <T extends Stuff>
// this means whatever type T is, it has access to the interface's properties
// the constraint limits the types that are passed to <T> 
function printStuff<T extends Stuff>(array: T[]): void {
  for(let i = 0; i < array.length; i++) {
    array[i].print();
  }
}

// evidently an array of numbers doesn't satisfy the Stuff interface, so an error occurs
// printStuff([1, 2, 3]);

// instead, an array of Car or House instances produces no errors
// because each instance has a print method, which satisfies the interface
printStuff<House>([new House(), new House()]);
printStuff<House>([new Car(), new House()]); 
printStuff<Car>([new Car(), new Car()]); 
printStuff<Car>([new Car(), new House()]); 