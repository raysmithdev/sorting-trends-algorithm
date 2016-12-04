const Twitter = require('twitter')
const prettyjson = require('prettyjson')
const env = require('./config')

const client = new Twitter({
  consumer_key: env.consumer_key,
  consumer_secret: env.consumer_secret,
  access_token_key: env.access_token_key,
  access_token_secret: env.access_token_secret
});

const trendings = []

client.stream('statuses/filter', {track: 'beer'},  function(stream) {
  stream.on('data', tweet => {
    console.log(prettyjson.render(tweet.text))
    trendings.push(tweet)
    trendings.sort(favourites)
  });

  stream.on('error', error => console.log(error))
});

const favourites = (a,b) => {
  console.log(a.favorite_count);
  if(a.favorite_count === b.favorite_count)
    return a.favorite_count - b.favorite_count

  return false
}


// console.log(trendings)
