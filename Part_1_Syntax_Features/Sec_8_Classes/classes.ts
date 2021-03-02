class Animal {
	// version #1
	// color: string;
	// constructor(color: string) {
	// 	this.color = color;
	// }

	// version #2 (shorter)
	constructor(public color: string) {}

	eats(): void {
		console.log("\nan animal consumes food to stay alive");
	}

	moves(): void {
		console.log("\nan animal moves distinctly");
	}

	protected givesBirth(): void {
		console.log("\na female produces its offsprings");
	}
}

const spider = new Animal("black");
spider.eats();
spider.moves();
console.log("\na freakin' big,", spider.color, "spider is on the wall");

// basic inheritance
class Mammal extends Animal {
	constructor(public ossicles: number, color: string) {
		super(color);
	}

	eats(): void {
		console.log("\nmammals consume food to stay alive");
	}

	moves(): void {
		console.log("\nmammals move distinctively to each other");
	}

	private breastFeeds(): void {
		console.log("\na female mammal breastfeeds its offsprings");
	}

	nurses(): void {
		this.breastFeeds();
	}

	mates(): void {
		this.givesBirth();
	}
}

const blueWhale = new Mammal(undefined, "blue");
blueWhale.eats();
blueWhale.moves();
blueWhale.nurses();
blueWhale.mates();
console.log(`\na blue whale is ${blueWhale.color}, DUH!`);

const man = new Mammal(3, null);
console.log(`\na human being has ${man.ossicles} middle ear bones`);
