import request from 'request';

const weather = (location, callback) => {
    // Replace with your weather fetching logic
    // Example:
    const url = `http://api.weatherstack.com/current?access_key=YOUR_API_KEY&query=${location}`;
    request({ url, json: true }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to weather service');
        } else if (body.error) {
            callback('Unable to find location');
        } else {
            callback(body.current.weather_descriptions[0]);
        }
    });
};

export default weather;