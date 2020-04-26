class Weather {
	constructor(city, state) {
		this.apiKey = '6d854d133147c116e8f186b9fe003ecc';
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

	// Change weather location
	changeLocation(city, state) {
		this.city = city;
		this.state = state;
	}
}