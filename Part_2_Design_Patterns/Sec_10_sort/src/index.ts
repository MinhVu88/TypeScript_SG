// import { Sorter } from "./Sorter";
import { Numbers } from "./Numbers";
import { Characters } from "./Characters";
import { LinkedList } from "./LinkedList";

const numbers = new Numbers([10, 5, -7, 0]);
// const sorter0 = new Sorter(numbers);
// sorter0.sort();
numbers.sort();
console.log(numbers.data);

console.log("\n------------------\n");

const characters = new Characters("Xaayb");
// const sorter1 = new Sorter(characters);
// sorter1.sort();
characters.sort();
console.log(characters.data);

console.log("\n------------------\n");

const linkedList = new LinkedList();
linkedList.add(369);
linkedList.add(-51);
linkedList.add(88);
linkedList.add(-23);
linkedList.add(13);
// const sorter2 = new Sorter(linkedList);
// sorter2.sort();
linkedList.sort();
linkedList.print();
