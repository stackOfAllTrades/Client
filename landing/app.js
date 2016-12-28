$(document).ready(function(){
  $('#title1').toggleClass('animated slideInLeft')
  .then($('#title2').toggleClass('animated slideInRight')
  .then($('.logo').toggleClass('animated fadeIn')
  .then($('.scroll').toggleClass('animated slideInUp')
  .then($('.skip').toggleClass('animated slideInUp')))));
});
