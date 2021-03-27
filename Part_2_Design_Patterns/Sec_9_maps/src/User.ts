import faker, { fake } from "faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
	username: string;
	location: { latitude: number; longitude: number };
	color: string = "crimson";

	constructor() {
		this.username = faker.name.firstName();
		this.location = {
			latitude: parseFloat(faker.address.latitude()),
			longitude: parseFloat(faker.address.longitude())
		};
	}

	showMarkerContent(): string {
		return `<h1>User: ${this.username}</h1>`;
	}
}
