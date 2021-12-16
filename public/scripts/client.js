/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// (function( ) { })( )
$(document).ready(() => {


  $('#tweet').on('submit', (event) => {
    event.preventDefault();
    // console.log($('#tweet-text').val().length)
    const textBox = $('#tweet-text').val();
    if (textBox.length > 140) {
     return alert("AhAhAh Not Right Now");
    } else if (textBox === "") {
      return alert("Tweet cannot be empty!")
    } else if (textBox === null) {
      return alert("What are you even doing?!")
    }
    
    // console.log("event: ", event)
    // console.log("Pre-serialize: ", $('#tweet'));
    const $tweet = $('#tweet').serialize()
    // console.log("$tweet: ", $tweet)
  

    $.ajax({
      url: '/tweets/',
      method: 'POST',
      data: $tweet,
      success: loadTweets
    })
    $('#tweet-text').val('');
  
  })

  const loadTweets = function() {
    $.ajax({
      url: "/tweets/",
      method: "GET"
    })
      .then(function (data) {
        renderTweets(data.reverse());
      })
    }
  loadTweets();



  const renderTweets = function(tweets) {
    $('#tweets-container').html('');
    for(const tweet of tweets) {
      $(`#tweets-container`).append(createTweetElement(tweet))
    }
  }

  const createTweetElement = function(tweet) {
    // console.log("TWEET: ", tweet)
   let $tweet = $(`
       <article class="full-tweet">
          <header class="user-info">
            <div>
            <p class="user"><i class="fas fa-toilet-paper"></i>    ${tweet.user.name}</p>
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
    return $tweet;
  }
});

