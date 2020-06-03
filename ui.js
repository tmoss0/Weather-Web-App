class UI {
	constructor() {
		this.location = document.getElementById('w-location');
		this.desc = document.getElementById('w-desc');
		this.string = document.getElementById('w-string');
		this.details = document.getElementById('w-location');
		this.icon = document.getElementById('w-icon');
		this.humidity = document.getElementById('w-humidity');
		this.feelsLike = document.getElementById('w-feels-like');
		this.wind = document.getElementById('w-wind');
	}

	display(weather) {
		this.location.textContent = weather.name;
		this.desc.textContent = weather.weather[0].main;
		this.string.textContent = weather.main.temp + ' °F';
		this.icon.setAttribute(
			'src',
			`https//openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
		);
		this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
		this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} °F`;
		this.wind.textContent = `Wind Speed: ${weather.wind.speed} mph`;
	}
}