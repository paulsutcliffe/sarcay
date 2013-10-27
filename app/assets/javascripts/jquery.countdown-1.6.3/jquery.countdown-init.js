$(document).ready(function() {	
  $('.contador').countdown({until: new Date(2013, 10-1, 28), timezone: -5, timeSeparator: ":"});
  $('.contador').countdown('pause');

});
