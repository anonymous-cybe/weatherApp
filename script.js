function getWeather(){
    const apiKey='b31d8285eff74760301750fe0bb4ed5b'
    const city =document.getElementById('city').value;

    if(!city){
        alert('Please enter a city');
        return;
    }
    const currentWeatherUrl =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl =`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
    .then(response=>response.json())
    .then(data=>{displayWeather(data)})
    .catch(error=>{
            console.error('Error fetching weather', error);
            alert('Error fetching weather,Please try again');
    })

    fetch(forecastUrl)
    .then(response=>response.json())
    .then(data=>{displayHourlyForecast(data.list)})
    .catch(error=>{
            console.error('Error fetching weather', error);
            alert('Error fetching weather,Please try again');
    })
}
function displayWeather(data){
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv =document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForcastDiv = document.getElementById('hourly-forcast');
}