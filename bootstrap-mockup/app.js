 const URL = 'https://stack-of-all-trade.herokuapp.com';
 $(document).ready(function() {
     const data = getData()
         .then((data) => {
             getEventData(data);
         });

 });

 function getData() {
     let data = $.get(`${URL}/events`);
     return data;
 }

 function getEventData(data) {
     for (var i = 0; i < data.length; i++) {
         console.log(data[1]);
         $('.card-title').append(data[i].event_name);
        //  for (var x in data[1]){
        //      console.log(x + data[1][x]);
        //  }
        //  for (var event_name in data[i]){
        //      console.log(event_name + data[i][event_name]);
        //  }

     }

 }
