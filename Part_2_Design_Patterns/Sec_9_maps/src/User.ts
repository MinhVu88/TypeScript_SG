import faker, { fake } from "faker";

export class User {
	username: string;
	location: { latitude: number; longitude: number };
	constructor() {
		this.username = faker.name.firstName();
		this.location = {
			latitude: parseFloat(faker.address.latitude()),
			longitude: parseFloat(faker.address.longitude())
		};
	}
}
