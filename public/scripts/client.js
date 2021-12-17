

// Ensures the DOM is ready before firing everything in the call back below //
$(document).ready(() => {

  $('.take-a-shit').on("click", (event) => { // Function to focus on the tweet box when nav button is clicked
    $('#tweet-text').focus();
    $('#tweet-text').scrollIntoView(); // Scrolls to element if out of view
  });


  $('#tweet').on('submit', (event) => { // Event listener for a tweet submission 
    event.preventDefault(); // Stop the refresh action on the page
  
    const textBox = $('#tweet-text').val();

    // Error handling using jQuery
    // This pushes a new error messege into an empty element depending on the condition using the functions .slideUp & .slideDown

    $('#error').slideUp('fast');
    if (textBox.length === 0) {
      $('#error').html(`<i class="fas fa-toilet-paper-slash"></i> Ya can't flush nothing! It's a waste of water <i class="fas fa-toilet-paper-slash"></i>`).slideDown('fast');
    } else if (textBox.length > 140) {
      return $('#error').html(`<i class="fas fa-toilet-paper-slash"></i> Your shit is too big to flush! Big oof. <i class="fas fa-toilet-paper-slash"></i>`).slideDown('fast');
    };
  

    const $tweet = $('#tweet').serialize()
   
  
    $.ajax({ // Our post request 
      url: '/tweets/',
      method: 'POST',
      data: $tweet,
      success: loadTweets // with a successful request, we call the loadTweets function
    })
    $('#tweet-text').val(''); // Clear the tweet textbox after a successful tweet
    $('.counter').val(140) // reset the character counter to 140
  })

  const loadTweets = function() { // This is our GET request
    $.ajax({
      url: "/tweets/",
      method: "GET"
    })
      .then(function (data) {
        renderTweets(data.reverse()); // render the array of tweets in reverse order so the latest is on top 
      })
    }
  loadTweets();



  const renderTweets = function(tweets) {
    $('#tweets-container').html('');
    for(const tweet of tweets) {
      $(`#tweets-container`).append(createTweetElement(tweet)) // Append the tweet into the empty HTML element
    }
  }

  const createTweetElement = function(tweet) { // build the tweet from the database

   let $tweet = $(`
       <article class="full-tweet">
          <header class="user-info">
            <div class="icon-user">
            <i class="fas fa-toilet-paper"></i><p class="user">${tweet.user.name}</p>
            </div>
            <div>
              <p class="handle">${tweet.user.handle}</p>
            </div>
          </header>
          <p class="old-tweet">${tweet.content.text}</p>
          <header class="footer">
              <p class="date">${timeago.format(tweet.created_at)}</p>
            <div class="icons">
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
            </div>
          </header>
        </article>
      `)
    return $tweet;
  }
});

