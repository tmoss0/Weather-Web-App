class Storage {
	constructor() {
		this.lat;
		this.long;		
		this.defaultLat = 0.0;
		this.defaultLong = 0.0;
				
		this.city;
		this.state;
		this.defaultCity = 'Miami';
		this.defaultState = 'FL';
	}

	getLocationData() {
		if (localStorage.getItem('latitude') === 0.0) {
			this.state = this.defaultLat;
		} 
		else {
			this.state = localStorage.getItem('latitude');
		}

		if (localStorage.getItem('longitude') === 0.0) {
			this.long = this.defaultLong;
		} 
		else {
			this.long = localStorage.getItem('longitude');
		}

		if (localStorage.getItem('city') === null) {
			this.city = this.defaultCity;
		} 
		else {
			this.city = localStorage.getItem('city');
		}

		if (localStorage.getItem('state') === null) {
			this.state = this.defaultState;
		} 
		else {
			this.state = localStorage.getItem('state');
		}

		return {
			long: this.defaultLong,
			lat: this.defaultLat,
			city: this.city,
			state: this.state,
		};
	}

	setLocationData(city, state) {
		localStorage.setItem('city', city);
		localStorage.setItem('state', state);
	}

	setGeoLocationData(lat, long) {
		localStorage.setItem('latitude', lat);
		localStorage.setItem('longitude', long);		
	}
}