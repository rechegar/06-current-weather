const { argv } = require('./config/yargs.js');
const gmaps = require('./service/gmaps.js');
const weather = require('./service/openweather.js');

// console.log(argv);

const getInfo = async(address) => {
    console.clear();
    console.log(`Finding ${address}...`);
    let location = await gmaps.getLocation(address);
    let current_weather = await weather.getCurrentWeather(location.lat, location.lng);

    console.clear();
    return `The current weather in ${location.formatted_address} is ${current_weather.weather}, the temperature is ${current_weather.temp}°C and ${current_weather.humidity}% of humidity.`;
}

getInfo(argv.address)
    .then(message => console.log(message))
    .catch(err => console.log(err));