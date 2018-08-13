// All required modules

// Dotenv helps in retrieving environment variables
require("dotenv").config();

// fs package to read from text file
var fs = require("fs");

// keys for authentication details
var keys = require("./keys.js");

// Twitter and Spotify API will be called when required




// Initial decision on whether to read from the file or the command line

var dashboard = {

    'do-what-it-says': function(){
                                    fs.readFile("random.txt", "utf8", function(error, data) {

                                        // If the code experiences any errors it will log the error to the console.
                                        if (error) {
                                            console.log(error);
                                        } else {
                                            var dataArr = data.split(",");
                                            console.log(dataArr[0]);
                                            dashboard[dataArr[0]](dataArr[1]);
                                        };
                                    });
                                },
    'spotify-this-song' :  function(song){
                                    var Spotify = require('node-spotify-api');
                                    var spot = new Spotify(keys.spotify);
                                    spot.search({ type: 'track', query: song, limit:5 }, function(err, data) {
                                        if (err) {
                                            return console.log('Error occurred: ' + err);
                                        } else {
                                            console.log("Here are the results from Spotify: \n ( "+ data.tracks.items.length + " results)");
                                        };
                                        for (var xyz=0; xyz < data.tracks.items.length ; xyz++ ){
                                            console.log("======================================\n");
                                            console.log("Item "+xyz+" of "+data.tracks.items.length+"\n");
                                            console.log("======================================\n");
                                            console.log("   Song Name : "+data.tracks.items[xyz].name+"\n");
                                            console.log("   By :"+data.tracks.items[xyz].artists[0].name+"\n");
                                            console.log("   part of :"+data.tracks.items[xyz].album.name+"  (album name) \n");
                                            if (data.tracks.items[xyz].preview_url) console.log("   Listen to a preview :"+data.tracks.items[xyz].preview_url+"\n");
                                            console.log("======================================\n");
                                        };
                                
                                    });
                                        
                                },
    'my-tweets':    function(){
                                    var Twitter = require("twitter");
                                    var twt = new Twitter(keys.twitter);
                                    var params = {screen_name: 'SunRajApp',count:10};
                                    twt.get('statuses/home_timeline', params, function(error, tweets, response) {
                                      if (!error) {
                                                    for (var ijk = 0; ijk < tweets.length; ijk++){
                                                        console.log("-------------------------------------------\n");
                                                        console.log("Tweet "+ijk+"of "+tweets.length+"\n");
                                                        console.log(JSON.stringify(tweets[ijk].created_at,null,4));
                                                        console.log("\nby "+ tweets[ijk].user.name+"\n");
                                                        console.log(JSON.stringify(tweets[ijk].text,null,4));
                                                        console.log("-------------------------------------------\n");
                                                    };
                                      } else {
                                                    console.log("Error Message Follows");
                                                    console.log(error);
                                      };
                                    });
                                },
    'movie-this':   function(movie){
                                            var request = require("request");
                                            
                                            // Then run a request to the OMDB API with the movie specified
                                            request("http://www.omdbapi.com/?t="+movie+"&y=&plot=short&apikey="+keys.omdb.apikey, function(error, response, body) {
                                            
                                            // If the request is successful (i.e. if the response status code is 200)
                                            if (!error && response.statusCode === 200) {
                                                console.log(JSON.stringify(body,null,4));
                                                // Parse the body of the site and recover just the imdbRating
                                                // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
                                                console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
                                            }
                                            });
                                }

};

// And voila - calling this all together

if(process.argv.length === 4){
                                        dashboard[process.argv[2]](process.argv[3]);
                                } else if ( process.argv.length === 3) {
                                        dashboard[process.argv[2]]();
                                } else {
                                        console.log("Please provide an argument - options are : \n");
                                        console.log("my-tweets \n");
                                        console.log("spotify-this-song\n");
                                        console.log("movie-this\n");
                                        console.log("do-what-it-says\n");
                                };