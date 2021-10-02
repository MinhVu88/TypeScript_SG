import 'reflect-metadata';

// DEMO 1
const person = {
  name: 'Adam Thomas Jones'
};

Reflect.defineMetadata('alias', 'Bastardometer', person);
const alias1 = Reflect.getMetadata('alias', person);
console.log('\t',alias1);

Reflect.defineMetadata('instruments', '1979 Gibson Les Paul Custom Silverburst', person);
const guitar = Reflect.getMetadata('instruments', person);
console.log('\t',guitar);

Reflect.defineMetadata('alias', 'Bastardometer', person, 'instruments');
const alias1Metadata = Reflect.getMetadata('alias', person, 'instruments');
console.log('\t',alias1Metadata);

console.log('---------------------------------------------------------');

// DEMO 2
@getMetadataValue
class Person {
  name: string = 'Maynard James Keenan';

  @setMetadataValue('Möstresticator')
  getName(): string {
    return `Full name: ${this.name}`;
  }
}

// decorators & metadata
function setMetadataValue(info: string): Function {
  return function(target: Person, propertyKey: string): void {
    const metadataKey = 'alias';
    const metadataValue = info;

    Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey);
  };
}

const alias2 = Reflect.getMetadata('alias', Person.prototype, 'getName');
console.log('\t',alias2);

function getMetadataValue(constructor: typeof Person): void {
  for(let classMethod in constructor.prototype) {
    const alias2 = Reflect.getMetadata('alias', constructor.prototype, classMethod);

    console.log('\t',alias2);
  }
}