$(document).ready(function(){

  var eventURL = 'https://stack-of-all-trade.herokuapp.com/events';

  $.get(eventURL, function(data){
    for(var i = 0; i < 8; i++){
      var cardId = data[i].id;
      var $id = $('<p class="hidden">' + cardId + '</p>');
      var $card = $('<div class="card" + id="card' + (i+1) + '"></div>');
      var $h3 = $('<h3>' + data[i].eventName + '</h3>');
      var $p = $('<p class="date">' + data[i].date + ' at ' + data[i].time + '</p>');
      $($card).append($id);
      $($card).append($h3);
      $($card).append($p);

      if (data[i].id % 2 === 0) {
        $('#column2').append($card);

      } else {
        $('#column1').append($card);
      }
    }
    $('.card').click(function(){
      var thisId = parseInt($(this).children(':first').text()-1);
      $('main').empty();
      var $bigDiv = $('<div class="big-div"></>');
      var $backLink = $('<a class=back-link href="index.html">Back to List</a>');
      var $bigName = $('<h3 class="big-title">' + data[thisId].eventName + '</h3>');
      var $bigDate = $('<p class="big-date">' + data[thisId].date + ' at ' + data[thisId].time + '</p>');
      var $description = $('<p class="big-description">' + data[thisId].description + '</p>');
      var $bigLink = $('<a class="big-link" href="' + data[thisId].eventLink + '">Click this link for further details</a>');
      var $main2 = $('<div class="main2"></div>');
      var $price = $('<p class="price">' + data[i].price + '</p>');
      $('main').append($bigDiv);
      $($bigDiv).append($backLink);
      $($bigDiv).append($bigName);
      $($bigDiv).append($bigDate);
      $($bigDiv).append($description);
      $($bigDiv).append($bigLink);
      $($bigDiv).append($price);
      });
    });
});


function parseId(string){
  var noLetter = string.replace(/[a-z]/g, '');
  console.log(noLetter);
}
