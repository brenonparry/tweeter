$(document).ready(function() {
  $("textarea").on("input", function() {
    
    let tweet = ($(this).val().length);
    $('output').val(140 - tweet)
    
    if ($('output').val() < 0) {
      $('output').addClass("negative-counter")
    } else {
      $('output').removeClass("negative-counter")
    }
    
  });
});



