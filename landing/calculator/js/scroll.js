$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 10) {
    $('.navigation-border').fadeIn();
  } else {
    $('.navigation-border').fadeOut();
  }
});