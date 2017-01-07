 const URL = SERVER_URL;
 $(document).ready(function() {
     const Chicken = getEvents()
         .then((data) => {
             getEventData(data)
         })
         .catch((error) => {
             if (res.status === 500) {
                 alert("Sorry... our bad. Reloading the page.");
                 window.location.reload();
             }
         })
        //  .then(() => {
        //      alert("Ready for categories!");
        //  });


 });

 function getEvents() {
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

 function getCategoryData(data) {
     console.log(data[0]);
 }

 $(function carousel() {
     $('.carousel').carousel({
         interval: 3000
     });
 });
