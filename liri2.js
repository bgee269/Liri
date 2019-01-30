var axios = require("axios");

var nodeArgs = process.argv;

var artist = "";

for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {
    artist = artist + "+" + nodeArgs[i];
  }
  else {
    artist += nodeArgs[i];

  }
}

var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log("Venue: " + response.data[0].venue.name, "\nVenue City: " + response.data[0].venue.city, "\nDate: " + response.data[0].datetime );
  }
);
//console.log("Date - " + moment(element.datetime).format("MM/DD/YYYY"));