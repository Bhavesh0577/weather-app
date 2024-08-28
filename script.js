const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'YOUR_API_KEY_HERE',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((response) => {
            console.log(response);
            feels_like.innerHTML = response.feels_like || "N/A";
            humidity.innerHTML = response.humidity || "N/A";
            humidity2.innerHTML = response.humidity || "N/A";
            max_temp.innerHTML = response.max_temp || "N/A";
            min_temp.innerHTML = response.min_temp || "N/A";
            sunrise.innerHTML = response.sunrise || "N/A";
            sunset.innerHTML = response.sunset || "N/A";
            temp.innerHTML = response.temp || "N/A";
            temp2.innerHTML = response.temp || "N/A";
            wind_degrees.innerHTML = response.wind_degrees || "N/A";
            wind_speed.innerHTML = response.wind_speed || "N/A";
            wind_speed2.innerHTML = response.wind_speed || "N/A";
        })
        .catch(err => console.error('Fetch error: ', err));
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

getWeather("Bengaluru");
