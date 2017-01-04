$(document).ready(function() {
  var idURL = 'https://stack-of-all-trade.herokuapp.com/'
    var proArr = [];
  $.get(idURL, function(data) {
    console.log(data);
    for (var i = 0; i < data.length; i++)
    thisProfile = data[i];

    

  });



});
