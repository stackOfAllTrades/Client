$(document).ready(function(){

  var eventURL = 'https://stack-of-all-trade.herokuapp.com/events';
  var categoryURL = 'https://stack-of-all-trade.herokuapp.com/category';

  $.get(categoryURL, function(data){

    for (var i = 0; i < data.length; i++){
      let categoryName = data[i].name;
      let $catButton = $('<button type="checkbox" class="list-group-item">' + categoryName + '</button>');
      $('.list-group').prepend($catButton);
    }

  });

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
      if(thisEvent.event_link){
        eventLink = thisEvent.event_link;
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
        date = normalDate(thisEvent.date);
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
      if(thisEvent.event_name) {
        eventName = thisEvent.event_name;
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

      var $heading = $('<div class="panel-heading"><h3 class="panel-title">' + eventName + '</h3></div>');
      var $body = $('<div class="panel-body"">' + date + ' at ' + time + '</div>');
      $($card).append($id);
      $($card).append($heading);
      $($card).append($body);

      $('.column').append($card);

      // if (data[i].id % 2 === 0) {
      //   $('#column2').append($card);
      //
      // } else {
      //   $('#column1').append($card);
      // }
    }


    $('.panel').click(function(){
      var thisId = parseInt($(this).children(':first').text());
      $('main').empty();
      var $id = $('<p class="hidden">'+thisId+'</p>');
      var $bigDiv = $('<div class="jumbotron"></>');
      var $backLink = $('<a class="btn btn-primary btn-lg" id="back-button" href="index.html">Back to List</a>');
      var $bigName = $('<h3 class="big-title">' + data[thisId].event_name + '</h3>');
      var $bigDate = $('<p class="big-date">' + normalDate(data[thisId].date) + ' at ' + data[thisId].time + '</p>');
      var $description = $('<p class="big-description">' + data[thisId].description + '</p>');
      var $price = $('<p class="price"><small>' + data[thisId].price + "</p>");
      var $bigLink = $('<a class="btn btn-primary btn-lg" class="link-button" href="' + data[thisId].event_link + '">Click this link for further details</a>');
      var $address = $('<p class="address">' + data[thisId].address + '</p>');
      var $main2 = $('<div class="main2"></div>');
      // var $price = $('<p class="price"></p>');

      $('main').append($bigDiv);
      $($bigDiv).append($id);
      $($bigDiv).append($backLink);
      $($bigDiv).append($bigName);
      $($bigDiv).append($bigDate);
      $($bigDiv).append($description);
      $($bigDiv).append($address);
      $($bigDiv).append($price);
      $($bigDiv).append($bigLink);
      });
    });
});


function parseId(string){
  var noLetter = string.replace(/[a-z]/g, '');
  console.log(noLetter);
}

function normalDate(string){
  if (string.substr(0, 3) === "201"){
    var justDate = string.substr(0, 10);
    var stringArray = justDate.split('-');
    stringArray.push(stringArray[0]);
    stringArray.shift(stringArray[0]);
    stringArray.join('-');
    var backString = stringArray.toString();
    var thisDate = backString.replace(/,/g, '/');
    return thisDate;
  } else {
    return string;
  }
}
