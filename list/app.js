$(document).ready(function(){

  $('.card').click(function(){
    $(this).removeClass('card');
    $(this).addClass('big-div');
    $('h3').addClass('big-title');
    $('.location').addClass('big-location');
    $('.big-div').append('<h2 class="x">X</h3>');
    $('.big-div').append('<p class="big-description">Macque choux trail ride Boudreaux smoked sausage hunting yams file fishing. Zydeco fried catfish hunting food tasso fishing jambalaya. Cajun sac a lait cajun Mardi Gras pirogue boiled crawfish fais do do barbed wire cayenne. Merci beaucoup alligator bbq bourre envie pirogue make a roux red beans & rice.</p>');
    $('.card').toggleClass('no-display');
  });

  $('.big-div').click(function(){
    $(this).removeClass('big-div');
    $(this).addClass('card');
    $('.card').removeClass('no-display');
  });

});
