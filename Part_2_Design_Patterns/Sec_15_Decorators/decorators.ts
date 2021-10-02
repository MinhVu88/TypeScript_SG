@classDecorator
class Person {
  @propertyDecorator
  name: string = 'Maynard Keenan';

  @accessorDecorator
  get getName(): string {
    return `Full name: ${this.name}`;
  }

  @methodDecorator1
  walk(
    @parameterDecorator miles: number, 
    @parameterDecorator stopWalking: boolean
  ): void {
    if (miles > 100) {
      console.log(`${this.name} is taking a long walk`);
    } else {
      console.log(`${this.name} is taking a short walk`);
    }
  }

  @methodDecorator2('this is an error message')
  talk(): void {
    throw new Error();
  }
}

// DECORATOR FUNCTIONS
function propertyDecorator(target: any, key: string): void {
  console.log(
    '\npropertyDecorator:',
    '\n\ttarget ->',target,
    '\n\tkey ->',key,
    '\n\ttarget[key] ->',target[key],
    '\n\ttarget.name ->',target.name
  );
};

function methodDecorator1(target: any, key: string): void {
  console.log(
    '\nmethodDecorator1:',
    '\n\ttarget ->',target,
    '\n\tkey ->',key
  );
};

// methodDecorator1(Person.prototype, 'walk');

// a decorator factory is one that returns another function
// the usage of a decorator factory allows that decor function to take an arg
function methodDecorator2(errorMsg: string): Function {
  return function(
    target: any, 
    key: string, 
    propertyDescriptor: PropertyDescriptor
  ): void {
    const method = propertyDescriptor.value;

    propertyDescriptor.value = function() {
      try {
        method();
      } catch (error) {
        console.log('\nmethodDecorator2 | errorMsg ->',errorMsg,'\n');
      }
    };
  };
};

new Person().talk();

function accessorDecorator(target: any, key: string): void {
  console.log('\naccessorDecorator | key ->',key,'\n');
}

function parameterDecorator(target: any, key: string, index: number): void {
  console.log(
    '\nparameterDecorator:',
    '\n\tkey ->',key,
    '\n\tindex ->',index
  );
}

// typeof Person is a reference to the constructor function of the Person class
function classDecorator(constructor: typeof Person) {
  console.log('\nclassDecorator | constructor ->',constructor);
}