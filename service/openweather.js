const API_KEY = "7a22c2ac065e71a0b2da4986c633380a";

const axios = require('axios');

const getCurrentWeather = async(lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    let result = await axios.get(url);

    if (result.data.cod !== 200) {
        throw new Error(`No weather found for ${lat}, ${lon}`);
    }

    let response = {
        temp: result.data.main.temp,
        humidity: result.data.main.humidity,
        weather: result.data.weather[0].main
    }

    return response;

}

module.exports = {
    getCurrentWeather
}