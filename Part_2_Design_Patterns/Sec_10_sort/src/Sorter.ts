// import { Numbers } from "./Numbers";

interface Sortable {
	length: number;
	compare(leftIndex: number, rightIndex: number): boolean;
	swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
	// constructor(public collection: number[] | string) {}
	// constructor(public collection: Numbers) {}
	// constructor(public collection: Sortable) {}

	abstract length: number;
	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;

	sort(): void {
		// const { length } = this.collection;
		const { length } = this;

		/*
    - bubble sort: comparing & swapping the left value (this.collection[y]) & right value (this.collection[y + 1])

    - Use type guards to restore access to a set of properties in a union type (number[] | string)

    - "this.collection instanceof Array" & "typeof this.collection === 'string'" -> 
       type-guard techniques to check the collection's type
    */
		// for (let x = 0; x < length; x++) {
		// 	for (let y = 0; y < length - x - 1; y++) {
		// 		// this.collection === number[]
		// 		if (this.collection instanceof Array) {
		// 			if (this.collection[y] > this.collection[y + 1]) {
		// 				const leftValue = this.collection[y];
		// 				this.collection[y] = this.collection[y + 1];
		// 				this.collection[y + 1] = leftValue;
		// 			}
		// 		}

		// 		// this.collection === a string
		// 		if (typeof this.collection === "string") {}
		// 	}
		// }

		for (let x = 0; x < length; x++) {
			for (let y = 0; y < length - x - 1; y++) {
				// if (this.collection.compare(y, y + 1)) {
				// 	this.collection.swap(y, y + 1);
				// }

				if (this.compare(y, y + 1)) {
					this.swap(y, y + 1);
				}
			}
		}
	}
}
