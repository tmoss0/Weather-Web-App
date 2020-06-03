// Initialize local storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Initialize weather object
const weather = new Weather(weatherLocation.lat, weatherLocation.long, weatherLocation.city, weatherLocation.state);

// Initialize UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
	const city = document.getElementById('city').value;
	const state = document.getElementById('state').value;

	// Change location
	weather.changeLocation(city, state);

	// Set location in local storage
	storage.setLocationData(city, state);

	// Get and display weather
	getWeather();
	
	// Close modal
	$('#locModal').modal('hide');
});

// Get location via browser
document.getElementById('btn-get-location').addEventListener('click', (e) => {
	if(window.navigator.geolocation) {
		//window.navigator.geolocation.getCurrentPosition(console.log, console.log);

		// Get longitude and latitude if user accepts giving geolocation data
		window.navigator.geolocation.getCurrentPosition(successCallback);

		function successCallback(position) {
			const { latitude, longitude } = position.coords;

			weather.changeGeoLocation(latitude, longitude);

			storage.setGeoLocationData(latitude, longitude);

			getGeoWeather();
		}
	}
});

// Function to display weather based on data input from user
function getWeather() {
	weather.getWeather()
		.then((results) => {
			ui.display(results);
		})
		.catch((err) => err);
}

// Function to display weather based on data location from browser
function getGeoWeather() {
  	weather.getGeoWeather()
		.then((results) => {
			ui.display(results);
		})
		.catch((err) => err);
}