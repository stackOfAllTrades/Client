 const URL = SERVER_URL;
 $(document).ready(function() {
     const data = getData()
         .then((data) => {
             getEventData(data);
            //  .then(getCategoryData);

         });

 });

 function getData() {
     let data = $.get(`${URL}/events`);
     return data;
 }

 function getEventData(data) {
    //  console.log(data[0].categories[1]);
     data.forEach((element) => {
         //  console.log(element);
         const parent = $('.card-container');
         const source = $(`#card-template`).html();
         const template = Handlebars.compile(source);
         const html = template(element);
         parent.append(html);
         //  getEventData(location, element.id);
         return data;
     });

 }
 // function getCategoryData(data){
 //     console.log(data[0]);
 // }

 $(function carousel() {
     $('.carousel').carousel({
         interval: 3000
     });
 });
