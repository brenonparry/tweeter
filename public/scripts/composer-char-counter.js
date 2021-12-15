$(document).ready(function() {
  $("textarea").on("input", function() {
    // console.log($(this).val().length)
    let tweet = ($(this).val().length);
    $('output').val(140 - tweet)
    // let numOfCharacters = 140;
    // let remainingCharacters = numOfCharacters - tweet;

    // console.log(remainingCharacters)

    
  });
});



