
function getWeather() {
    const apiKey = '5f56677b72799e124bac6a866d388258';
    let city = document.querySelector('#city').value;

    if (!city) {
        alert('Please enter a City!');
        return;
    }

    const currentWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const foreCastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then((response) => response.json())
        .then((data) => showWeatherData(data))
        .catch((error) => {
            console.log("Error fetching current weather data", error);
            alert("Error fetching current weather data. Please try again.");
        }
        )

    fetch(foreCastUrl)
        .then((response) => response.json())
        .then((data) => showForecastData(data.list))
        .catch((error) => {
            console.log("Error fetching hourly Forecast data", error);
            alert("Error fetching hourly forecast data. Please try again.");
        }
        )
}

function showWeatherData(data) {
    console.log(data)

    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    //clear previous content
    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`
    } else {
        //get the required data from api

        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        const temperatureHTML = `<p>${temperature}°C</p>`
        const weatherHTML = `<p>${cityName}</p><p>${description}</p>`

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML += weatherHTML;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

    }
    showImage()

}

function showForecastData(data) {
    console.log(data)
    let hourlyForecast = document.getElementById('hourly-forecast');
    const next24Hours = data.slice(0, 8);
    console.log(next24Hours)
    next24Hours.forEach(item => {
        const time = new Date(item.dt * 1000);
        const hour = time.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHtml = `
        <div class="hourly-item">
        <span>${hour}:00</span>
        <img src="${iconUrl}" alt="Hourly Weather Icon"/>
        <span>${temperature}°C</span>
        </div>  
        `;

        //Adding the HTML to the page
        hourlyForecast.innerHTML += hourlyItemHtml

    })

}


function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block'
}