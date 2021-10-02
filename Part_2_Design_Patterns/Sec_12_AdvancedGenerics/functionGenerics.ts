// NON-GENERIC FUNCTIONS
function printStrings(array: string[]): void {
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function printNumbers(array: number[]): void {
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// GENERIC FUNCTION
function printAnything<T>(array: T[]): void {
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

/* NOTE:
  printAnything<string[]>(['a', 'b', 'c']) 
    or 
  printAnything<number[]>([1, 2, 3])

  * This is WRONG in this case as every T specified in this function definition 
    is gonna be replaced with either string or number, so...

    <string[]> -> function printAnything<string>(array: string[][]): void {...}
      or
    <number[]> -> function printAnything<number>(array: number[][]): void {...}

  * The function's arg or param is supposed to be a 1-D array, not a 2-D one
*/
printAnything<string>(['a', 'b', 'c']);
printAnything<number>([1, 2, 3]);