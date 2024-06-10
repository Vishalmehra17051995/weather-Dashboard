function getWeather(){
    const apikey = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}';
    const city = document.getElementById('city').Value;


if (!city) {
    alert('Please enter a city');
    return;
}

const currentWeatherUrl ='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}';

}

function getWeather(){
    fetch(currentWeatherUrl)
           .then(response => response.json())
           .then(data => {
            displayWeather(data);
           })
           .catch(error =>{
            console.error('Error fetching current weather data:',error);

             alert('Error fetching current weather data.Please try again.');
           });
}