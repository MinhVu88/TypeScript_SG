let cars: string[] = [];
cars = ["ford", "tesla", "bmw", "volkswagen", "toyota"];
console.log("\ncars ->", cars);

// 864e5 == 86400000 == 24*60*60*1000
let dates_0: Date[] = [];
dates_0 = [new Date(Date.now() - 864e5), new Date(), new Date(Date.now() + 864e5)];
console.log("\ndates_0 ->", dates_0);

let tool: string[][] = [];
tool = [
	["Maynard Keenan", "vocalist"],
	["Adam Jones", "guitarist"],
	["Justin Chancellor", "bassist"],
	["Dan Carey", "drummer"]
];
console.log("\nTool ->", tool);

// advantages of using typed arrays
// 1) automatic inference
console.log("\ncar: ", cars[3], " | type:", typeof cars[3]);
console.log("\nanother car: ", cars.pop(), " | type:", typeof cars.pop(), "\n");

// 2) prevent incompatible values
// tool.push([13])

// 3) assistance with built-in functions
dates_0.map(date => console.log(date.toUTCString()));

// 4) multiple types in an array
const httpCodes: (string | number)[][] = [
	[100, "Informational"],
	[200, "Success"],
	[300, "Redirection"],
	[400, "Client Error"],
	[500, "Server Error"]
];
console.log("\n http status codes ->", httpCodes);

const dates_1: (Date | string)[] = [new Date(Date.now() + 864e5)];
dates_1.push(new Date(Date.now() + 172800000).toDateString());
dates_1.push("2021/03/03");
console.log("\ndates_1 ->", dates_1);
