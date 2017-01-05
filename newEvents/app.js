$(document).ready(function(){

  var eventURL = 'https://stack-of-all-trade.herokuapp.com/events';

  $.get(eventURL, function(data){
    for(var i = 0; i < data.length; i++){

      //*Mark - Took away cardId and just used i
      // var cardId = i;
      var thisEvent = data[i];

      //*Mark - Validating that the properties are populated
      var sourceName = null;
      if(thisEvent.date){
      sourceName = thisEvent.sourceName;
      }
      else{
      date = "Indeterminate Date";
      }

      var eventLink = null;
      if(thisEvent.eventLink){
        eventLink = thisEvent.eventLink;
      } else {
        eventLink = "No Link Available";
      }

      var description = null;
      if(thisEvent.description) {
        description = thisEvent.description;
      }else{
        description = "Description Unavailable"
      }

      var date = null;
      if(thisEvent.date){
        date = thisEvent.date;
      }
      else{
        date = "Date: TBD";
      }

      var time = null;
      if(thisEvent.time) {
        time = thisEvent.time;
      } else {
        time = "Time: TBD"
      }

      var eventName = null;
      if(thisEvent.eventName) {
        eventName = thisEvent.eventName;
      } else {
        eventName = "Event is Unnamed";
      }

      var price = null;
      if(thisEvent.price) {
        price = thisEvent.price;
      } else {
        price = "Price: TBD"
      }

      var imageLink = null;
      if (thisEvent.imageLink) {
        imageLink = thisEvent.imageLink;
      } else {
        imageLink = "Image Unavailable"
      }

      var location = null;
      if (thisEvent.location) {
        location = thisEvent.location;
      } else {
        location = "Location: TBD"
      }

      var address = null;
      if (thisEvent.address) {
        address = thisEvent.address;
      } else {
        address = "Address: TBD"
      }

      var price = null;
      if (thisEvent.address) {
        price = thisEvent.price;
      } else {
        price = "Price: TBD"
      }

      var $id = $('<p class="hidden">' + i + '</p>');
      var $card = $('<div class="panel panel-default" + id="card' + (i+1) + '"></div>');
      if (i === 0) {
        $card.attr('id', 'card1');
      }

      var $h3 = $('<h6>' + eventName + '</h3>');
      var $p = $('<p class="date">' + date + ' at ' + time + '</p>');
      $($card).append($id);
      $($card).append($h3);
      $($card).append($p);

      $('.column').append($card);

      // if (data[i].id % 2 === 0) {
      //   $('#column2').append($card);
      //
      // } else {
      //   $('#column1').append($card);
      // }
    }
    $('.card').click(function(){
      var thisId = parseInt($(this).children(':first').text());
      $('main').empty();
      var $id = $('<p class="hidden">'+thisId+'</p>');
      var $bigDiv = $('<div class="big-div"></>');
      var $backLink = $('<a class=back-link href="index.html">Back to List</a>');
      var $bigName = $('<h3 class="big-title">' + data[thisId].eventName + '</h3>');
      var $bigDate = $('<p class="big-date">' + data[thisId].date + ' at ' + data[thisId].time + '</p>');
      var $description = $('<p class="big-description">' + data[thisId].description + '</p>');
      var $bigLink = $('<a class="big-link" href="' + data[thisId].eventLink + '">Click this link for further details</a>');
      var $main2 = $('<div class="main2"></div>');
      // var $price = $('<p class="price"></p>');

      $('main').append($bigDiv);
      $($bigDiv).append($id);
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
