# liri-node-app
Homework for the liri node app - calls Twitter, spotify and OMDB apps

- This is a node.js application which helps you : 
  -- retrieve your last 10 tweets - (remember you need to provide your twitter key as part of an environment file)
      --- node main.js my-tweets
  
  -- access details regarding your favorite songs through Spotify (again, a spotify API is required in your env file)
     --- node main.js spotify-this "<song-name>"
  
  -- Get details on your favorite movies through OMDB (and ...should I mention... you need an API key from OMDB too :))
     --- node main.js movie-this "<Movie name>"
  
  -- And, you can also input a list of details into a text file - (random.txt) and the app will pick it up from there.
      --- node main.js do-what-it-says
      
  >>> Some special elements - 
      >>>>>>> This considers all commands as object keys on a central "dashboard" - therefore procedural program flows are kept to a minimum
      >>>>>>> The API keys for Twitter, Spotify and OMDB are not shared - but you can create a new env file with your keys loaded - the dkjfks is as follows : 
ksfjkdl
      >>>>>>> >>>>>>> # Spotify API keys >>>>>>> >>>>>>>  >>>>>>> >>>>>>>  >>>>>>> >>>>>>> djfkssjdk>>>>>>> >>>>>>> >>>>>>> SPOTIFY_ID=df00aac0a2264442a75d8251152594df
 >>>>>>> >>>>>>> SPOTIFY_SECRET=51e938e3037c49439c02a5bbe701ef97
 >>>>>>> >>>>>>> 
 >>>>>>> >>>>>>> # Twitter API keys

 >>>>>>> >>>>>>> TWITTER_CONSUMER_KEY='dkjfks'
 >>>>>>> >>>>>>> TWITTER_CONSUMER_SECRET='ksfjkdl'
 >>>>>>> >>>>>>> TWITTER_ACCESS_TOKEN_KEY='djfks'
 >>>>>>> >>>>>>> TWITTER_ACCESS_TOKEN_SECRET='sjdk'

 >>>>>>> >>>>>>> #TRILOGY API keys

 >>>>>>> >>>>>>> OMDBKEY='  '
