import request from 'request';
const URL = 'https://ipinfo.io';

const location = (callback) => {
    request({
        url: URL,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to guess location');
        } else {
            callback(body.city);
        }
    });
};

export default location;