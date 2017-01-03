$(document).ready(function(){

  var eventURL = 'https://stack-of-all-trade.herokuapp.com/events';

  $.get(eventURL, function(data){
    for(var i = 0; i < data.length; i++){
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
      var $bigName = $('<h3 class="big-title">' + data[thisId].eventName + '</h3>');
      var $bigDate = $('<p class="big-date">' + data[thisId].date + ' at ' + data[thisId].time + '</p>');
      var $description = $('<p class="big-description">' + data[thisId].description + '</p>');
      var $bigLink = $('<a class="big-link" href="' + data[thisId].link + '">Click this link for further details</a>');

      $('main').append($bigDiv);
      $($bigDiv).append($bigName);
      $($bigDiv).append($bigDate);
      $($bigDiv).append($description);
      $($bigDiv).append($bigLink);


      // for (var j = 0; j < data.length; j++) {
      //   if (thisId === i) {
      //     var $id = $('<p class="hidden">' + cardId + '</p>');
      //     var $bigCard = $('<div class="big-div"></div>');
      //     var $h3 = $('<h3>' + data[i].eventName + '</h3>');
      //     var $p1 = $('<p class="location">' + data[i].date + 'at' + data[i].time + '</p>');
      //     var $p2 = $('<p class="description">' + data[i].description + '</p>');
      //     var $p3 = $('<a class="thisLink" href="' + data[i].link + '"> The Link</p>');
      //     $('main').empty();
      //     $('main').append($bigCard);
      //     $($bigCard).append($h3);
      //     $($bigCard).append($p1);
      //     $($bigCard).append($p2);
      //     $($bigCard).append($p3);
      //   }
      // }
    });
  });

});


function parseId(string){
  var noLetter = string.replace(/[a-z]/g, '');
  console.log(noLetter);
}
