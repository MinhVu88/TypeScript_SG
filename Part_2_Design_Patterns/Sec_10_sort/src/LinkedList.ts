import { Sorter } from "./Sorter";

class LinkedListNode {
	next: LinkedListNode | null = null;

	constructor(public data: number) {}
}

export class LinkedList extends Sorter {
	head: LinkedListNode | null = null;

	add(data: number): void {
		const node = new LinkedListNode(data);

		if (!this.head) {
			this.head = node;
			return;
		}

		let tail = this.head;

		while (tail.next) {
			tail = tail.next;
		}

		tail.next = node;
	}

	get length(): number {
		if (!this.head) {
			return 0;
		}

		let nodeQuantity = 1;
		let node = this.head;

		while (node.next) {
			nodeQuantity++;
			node = node.next;
		}

		return nodeQuantity;
	}

	at(index: number): LinkedListNode {
		if (!this.head) {
			throw new Error("index out of bounds");
		}

		let indexCounter = 0;
		let node: LinkedListNode | null = this.head;

		while (node) {
			if (indexCounter === index) {
				return node;
			}

			indexCounter++;
			node = node.next;
		}

		throw new Error("index out of bounds");
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		if (!this.head) {
			throw new Error("list is empty");
		}

		return this.at(leftIndex).data > this.at(rightIndex).data;
	}

	swap(leftIndex: number, rightIndex: number): void {
		const leftNode = this.at(leftIndex);

		const rightNode = this.at(rightIndex);

		const leftNodeValue = leftNode.data;

		leftNode.data = rightNode.data;

		rightNode.data = leftNodeValue;
	}

	print(): void {
		if (!this.head) {
			throw new Error("list is empty");
		}

		let node: LinkedListNode | null = this.head;

		while (node) {
			console.log(node.data);

			node = node.next;
		}
	}
}
