"use strict";
// import { Numbers } from "./Numbers";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        // const { length } = this.collection;
        var length = this.length;
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
        for (var x = 0; x < length; x++) {
            for (var y = 0; y < length - x - 1; y++) {
                // if (this.collection.compare(y, y + 1)) {
                // 	this.collection.swap(y, y + 1);
                // }
                if (this.compare(y, y + 1)) {
                    this.swap(y, y + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
