class Weather {
	constructor(long, lat, city, state) {
		this.apiKey = '6d854d133147c116e8f186b9fe003ecc';
		this.geoApiKey = '686244e5045b4ff1a96384ed59e3bdf1';

		this.long = long;
		this.lat = lat;

		this.city = city;
		this.state = state;
	}

	// Fetch weather from the API
	async getWeather() {	
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},US&units=imperial&mode=json&appid=${this.apiKey}`
		);	

		const responseData = await response.json();

		return responseData;
	}

	async getGeoWeather() {
		const geoResponse = await fetch(
			`https://api.opencagedata.com/geocode/v1/json?q=${this.lat}+${this.long}&key=${this.geoApiKey}`
		);
	
		const geoResponseData = await geoResponse.json();

		let city = geoResponseData.results[0].components.city;
		let state = geoResponseData.results[0].components.state_code;

		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&units=imperial&mode=json&appid=${this.apiKey}`
		);

		console.log('Geo location data' + response);

		const responseData = await response.json();

    	return responseData;
	}

	// Change weather location
	changeLocation(city, state) {
		this.city = city;
		this.state = state;
	}

	// Change geo coordinate location
	changeGeoLocation(lat, long) {
		this.lat = lat;
		this.long = long;		
	}
}