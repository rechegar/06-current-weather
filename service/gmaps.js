const axios = require('axios');

const getLocation = async(address) => {
    let encoded = encodeURI(address);
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}&key=AIzaSyBCBnpLhvyzhIf2-d-EBb9NkRD300TMQVc`;

    let result = await axios.get(url);

    if (result.data.status === 'ZERO_RESULTS') {
        throw new Error(`No results found for ${address}`);
    }

    let response = {
        formatted_address: result.data.results[0].formatted_address,
        lat: result.data.results[0].geometry.location.lat,
        lng: result.data.results[0].geometry.location.lng
    }

    return response;

}

module.exports = {
    getLocation
}