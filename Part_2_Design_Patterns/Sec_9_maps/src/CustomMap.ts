// a potential error: https://github.com/parcel-bundler/parcel/issues/1769

import { User } from "./User";
import { Company } from "./Company";

// contract for other classes to implement if they're passed to addMarker_1 as args
export interface Mappable {
	location: { latitude: number; longitude: number };
	showMarkerContent(): string;
	color: string;
}

class CustomMap {
	private googleMap: google.maps.Map;

	constructor(mapId: string) {
		this.googleMap = new google.maps.Map(document.querySelector(mapId), {
			zoom: 1,
			center: { lat: 0, lng: 0 }
		});
	}

	// bad code #1: duplication (vid #65)
	addUserMarker(user: User): void {
		new google.maps.Marker({
			map: this.googleMap,
			position: { lat: user.location.latitude, lng: user.location.longitude }
		});
	}
	addCompanyMarker(company: Company): void {
		new google.maps.Marker({
			map: this.googleMap,
			position: { lat: company.location.latitude, lng: company.location.longitude }
		});
	}

	// bad code #2: not scalable enough (vid #66)
	addMarker_0(entity: User | Company): void {
		new google.maps.Marker({
			map: this.googleMap,
			position: { lat: entity.location.latitude, lng: entity.location.longitude }
		});
	}

	// good code (vid #67)
	addMarker_1(entity: Mappable): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: { lat: entity.location.latitude, lng: entity.location.longitude }
		});

		marker.addListener("click", () => {
			const infoWindow = new google.maps.InfoWindow({
				content: entity.showMarkerContent()
			});

			infoWindow.open(this.googleMap, marker);
		});
	}
}

export { CustomMap };
