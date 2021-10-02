const car_1 = {
	name: "Ford Mustang",
	year: 1969,
	isFunctional: true
};

const showVehicle_0 = (vehicle: { name: string; year: number; isFunctional: boolean }): void => {
	console.log(
		`\ncar 1: ${vehicle.name} | year: ${vehicle.year} | still running? -> ${vehicle.isFunctional}`
	);
};

showVehicle_0(car_1);

// specify the Vehicle_0 interface
interface Vehicle_0 {
	name: string;
	year: number;
	isOperational: boolean;
}

const car_2 = { name: "Tesla", year: 2020, isOperational: true };

const showVehicle_1 = (vehicle: Vehicle_0): void => {
	console.log(
		`\ncar 2: ${vehicle.name} | year: ${vehicle.year} | still running? -> ${vehicle.isOperational}`
	);
};

showVehicle_1(car_2);

// types other than primitive ones & functions can be defined within an interface
interface Vehicle_1 {
	name: string;
	year: Date;
	isOperational: boolean;
	getFacts(): string;
}

const car_3 = {
	name: "Plymouth Fury",
	year: new Date("1958"),
	isOperational: false,
	getFacts(): string {
		return `A ${this.year.getFullYear()} ${
			this.name
		} was the title subject of the 1983 best-selling novel Christine by Stephen King`;
	},
	summarize(): string {
		return `${this.name} is a model of automobile which was produced by Plymouth from 1955 to 1989`;
	}
};

const showVehicle_2 = (vehicle: Vehicle_1): void => {
	console.log(
		`\ncar 3: ${vehicle.name} | year: ${vehicle.year.getFullYear()} | still running? -> ${
			vehicle.isOperational
		} | Fact: ${vehicle.getFacts()}`
	);
};

showVehicle_2(car_3);

const drink = {
	color: "brown",
	carbonated: true,
	sugar: 40,
	summarize(): string {
		return `my drink has ${this.sugar} grams of sugar`;
	}
};

/*
- Using a generic-looking interface to implement a same, reusable function for different objects

- Report is a generic interface, whose summarize() function returns a string

- getSummary is a function that takes an arg of Report type, which calls the summarize method

- Both car_3 & drink have the summarize() method that returns a string, 
  so they're both essentially considered of Report type

- As a result, they can be passed to getSummary() as args, which then prints a summary
  that's specifically designed based on each object's summary() method
*/
interface Report {
	summarize(): string;
}

const getSummary = (item: Report): void => {
	console.log("\nSummary:", item.summarize());
};

getSummary(car_3);
getSummary(drink);
