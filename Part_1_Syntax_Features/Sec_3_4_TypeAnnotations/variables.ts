// ": number" -> type annotation (with number type)
const num0: number = 7;
console.log("\nnum0:", num0, " | type:", typeof num0);

// ERROR: Type 'string' is not assignable to type 'number'
// const num1: number = '13';

let num2: number = 3.8;
console.log("\nnum1:", num2, " | type:", typeof num2);
num2 = -8.8;
console.log("\nnum1:", num2, " | type:", typeof num2);

// ERROR: Type 'boolean' is not assignable to type 'number'
// num2 = false;

// ": string"
let str: string = "some string";
console.log("\nstr:", str, " | type:", typeof str);

// ERROR: Type 'boolean' is not assignable to type 'string'
// str = true;

// ": boolean"
let bool: boolean = true;
console.log("\nbool:", bool, " | type:", typeof bool);

// ": null"
let nothing0: null = null;
console.log("\nnothing0:", nothing0, " | type:", typeof nothing0);

// ": undefined"
let nothing1: undefined = undefined;
console.log("\nnothing1:", nothing1, " | type:", typeof nothing1);

// built-in objects
let now: Date = new Date();
console.log("\nnow:", now, " | Date type? ->", now instanceof Date);

// arrays
let strings: string[] = ["str 1", "str 2", "str 3"];
console.log("\nstrings:", strings, " | Array type? ->", strings instanceof Array);

let numbers: number[] = [1, 2, 3];
console.log("\nnumbers:", numbers, " | Array type? ->", numbers instanceof Array);

let bools: boolean[] = [true, false, true, false];
console.log("\nbools:", bools, " | Array type? ->", bools instanceof Array);

// classes
class Car_0 {}
let car_0: Car_0 = new Car_0();
console.log("\ncar:", car_0, " | Car type? ->", car_0 instanceof Car_0);

// object literal
let point: { x: number; y: number } = {
	x: 47,
	y: 23
};
console.log("\npoint:", point);

// function
// the annotation -> ": (num: number) => void"
const logNumber: (num: number) => void = (num: number) => console.log(`\nlogNumber -> ${num}`);

// ERROR: Argument of type 'string' is not assignable to parameter of type 'number'
// logNumber('369');

logNumber(369);

// when to use type annotations:
// 1) when a function returns the "any" type (in this case, JSON.parse())
const json = '{"x": 7, "y": 23}';
const parsed: { x: number; y: number } = JSON.parse(json);
console.log("\nparsed ->", parsed);

// 2) when a var's declaration & initialization are on different lines
let colors = ["black", "red", "yellow"];
let found: boolean;
colors.forEach(color => {
	if (color === "red") {
		found = true;
		console.log("\nfound color ->", color);
	}
});

// 3) when a var whose type can't be inferred accurately
let values = [-51, -27, 88];
let positive: boolean | number = false;
values.forEach(val => {
	if (val > 0) positive = val;
});
console.log("\npositive value ->", positive);
