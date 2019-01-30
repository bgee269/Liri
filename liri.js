// Spotify (Not Working)
// using fs package to store keys and spotify-this-song command

require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
//var spotify = new Spotify(keys.spotify);
var axios = require("axios");
//var moment = require("moment");
var fs = require("fs");

// var axios = require("axios");

// var nodeArgs = process.argv;

// var songName = "";

// for (var i = 2; i < nodeArgs.length; i++) {

  // if (i > 2 && i < nodeArgs.length) {
   // songName = songName + "+" + nodeArgs[i];
  // }
  // else {
 //   songName += nodeArgs[i];

 // }
// }
// error ?
// var queryUrl = " https://api.spotify.com" + songName + "";


// console.log(queryUrl);

 // axios.get(queryUrl).then(
  // function (response) {
    // console.log("Release Year: " + response.data.Year + "\nTitle: " + response.data.Title + "\nRating: " + response.data.imdbRating + "\nRating: " + response.data.ratingrot + "\nPlot: " + response.data.Plot + "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nActors: " + response.data.Actors);
//  }
 // );


               
              
             
    
  

// Omdb

// Grab the movieName which will always be the third node argument.
var axios = require("axios");

var nodeArgs = process.argv;

var movieName = "";

for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
  }
  else {
    movieName += nodeArgs[i];

  }
}

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


console.log(queryUrl);

axios.get(queryUrl).then(
  function (response) {
    console.log("Release Year: " + response.data.Year + "\nTitle: " + response.data.Title + "\nRating: " + response.data.imdbRating + "\nRating: " + "\nPlot: " + response.data.Plot + "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nActors: " + response.data.Actors);
  }
);

//
