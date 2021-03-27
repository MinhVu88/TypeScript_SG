import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
	companyName: string;
	catchPhrase: string;
	location: { latitude: number; longitude: number };
	color: string = "bluesteel";

	constructor() {
		this.companyName = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			latitude: parseFloat(faker.address.latitude()),
			longitude: parseFloat(faker.address.longitude())
		};
	}

	showMarkerContent(): string {
		return `
			<div>
				<h1>Company: ${this.companyName}</h1>
				<h3>Catch phrase: ${this.catchPhrase}</h3>
			</div>
		`;
	}
}
