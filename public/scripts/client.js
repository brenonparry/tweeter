/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(document).ready(() => {
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
 for(const tweet of tweets) {

  createTweetElement(tweet);
 }
}

const createTweetElement = function(tweet) {
let $tweet = $(`
<article class="full-tweet">
          <header class="user-info">
            <div>
            <p class="user"><i class="fas fa-toilet"></i>    ${tweet.user.name}</p>
            </div>
            <div>
              <p class="handle">${tweet.user.handle}</p>
            </div>
          </header>
          <p class="old-tweet">${tweet.content.text}</p>
          <header class="footer">
              <p class="date">${timeago.format(tweet.created_at)}</p>
            <div class="icons">
              <i class="fas fa-star"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
            </div>
          </header>
        </article>
`)

$(`#tweets-container`).append($tweet)

}

renderTweets(data);

});

