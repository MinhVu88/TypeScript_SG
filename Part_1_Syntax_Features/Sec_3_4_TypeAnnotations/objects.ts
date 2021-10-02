const profile = {
	name: "Maynard Keenan",
	age: 27,
	coordinates: { latitude: 0, longitude: 15 },
	setAge(a: number): void {
		this.age = a;
	}
};

// destruturing
// const {age}: number = profile; // wrong
const { age }: { age: number } = profile;
console.log("\nage: ", age);

const {
	coordinates: { latitude, longitude }
}: { coordinates: { latitude: number; longitude: number } } = profile;
console.log(`\nlat: ${latitude} - long: ${longitude}`);
