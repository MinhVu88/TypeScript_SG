/*
- (a: number, b: number): number 
  -> type annotation for the function's args & output

- Type inference doesn't work with function args but is automatically
  applied to its output

- So, for a function, "(a: number, b: number)" is a must, 
  ": number" after it is optional
*/
const add = (a: number, b: number): number => {
	return a + b;
};
console.log("\nadd() ->", add(7, 3));

/*
- without specifying the type of a function's output as that's optional,
  that function is meant to return nothing/undefined (void)

- Sometimes that may yield unexpected results, so type annotation for
  a function's output should be specified, consequently logic errors can be avoided
*/
const subtract = (a: number, b: number) => {
	a - b;
};
console.log("\nsubtract() ->", subtract(51, 23));

function divide(a: number, b: number): number {
	return a / b;
}
console.log("\ndivide ->", divide(1, 2));

const multiply = function (a: number, b: number): number {
	return a * b;
};
console.log("\nmultiply ->", multiply(8, 8));

// types void & never for function output
const logger = (msg: string): void => {
	console.log("\nmessage ->", msg);
};

const throwError = (msg: string): never => {
	throw new Error(msg);
};

// object destructuring with annotations
const today = {
	date: new Date(),
	weather: "cold"
};

// a) without destructuring
const logWeather_0 = (forecast: { date: Date; weather: string }): void => {
	console.log(`\nDate: ${forecast.date} - Weather: ${forecast.weather}`);
};
logWeather_0(today);

// b) with destructuring:
// ({ date, weather }: { date: Date; weather: string }) -> ({destructuring}: {type annotations})
const logWeather_1 = ({ date, weather }: { date: Date; weather: string }): void => {
	console.log(`\nDate: ${date} - Weather: ${weather}\n`);
};
logWeather_1(today);
