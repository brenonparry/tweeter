// FUNCTION FOR KEEPING TRACK OF THE NUMBER OF CHARACTERS //

$(document).ready(function() {
  $("textarea").on("input", function() {
    
    let tweet = ($(this).val().length);
    $('output').val(140 - tweet)
    
    if ($('output').val() < 0) {
      $('output').addClass("negative-counter") // Add a class to be styled if counter goes below 0
    } else {
      $('output').removeClass("negative-counter") // Remove the class
    }
    
  });
});



