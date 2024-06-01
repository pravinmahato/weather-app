import weather from './weather.js';
import location from './location.js';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
    .option("loc", {
        alias: 'l',
        demand: false,
        type: "string",
        description: 'Enter city to get the weather'
    })
    .help()
    .argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
    weather(argv.l, function(currentWeather) {
        console.log(currentWeather);
    });
} else {
    console.log('Location not provided, detecting the current city ......!');
    location(function(loc) {
        if (loc) {
            weather(loc, function(data) {
                console.log(data);
            });
        } else {
            console.log('Unable to guess location');
        }
    });
}