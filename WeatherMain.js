var weather = require("./Weather.js");
var location = require('./location.js')
var argv = require("yargs")
  .option("loc", {
    alias: 'l',
    demand: false,
    type: "string",
    description: 'Enter city to get the weather'
  })
  .help("help").argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
  weather(argv.l, function (currentWeather) {
    console.log(currentWeather);
  });
}
else {
  console.log('Location not provided, detecting the current city ......!');
  location(function (location) {
    if (location) {
      weather(location.city, function (data) {
        console.log(data);

      })
    }
    else{
      console.log('unable to guess');
    }
  })
}
