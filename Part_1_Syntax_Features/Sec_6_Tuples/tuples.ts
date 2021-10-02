const drink = {
	color: "brown",
	carbonated: true,
	sugar: 40
};

// specify a tuple whose each element's type is fixed in order
const coke: [string, boolean, number] = ["brown", true, 40];

// using type alias
type Drink = [string, boolean, number];

const gin: Drink = ["white", false, 0];
const tea: Drink = ["green", false, 0];

console.log("\n", coke, " | ", gin, " | ", tea, "\n");
