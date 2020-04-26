// Initialize weather object
const weather = new Weather('Boston', 'MA');

// Initialize UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

function getWeather() {
	weather.getWeather()
		.then((results) => {
			ui.display(results);
		})
		.catch((err) => err);
}