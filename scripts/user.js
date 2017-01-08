 const URL = SERVER_URL;
 let globalEventArray = [];
 let globalCategoryArray = [];
 let user = {};
 $(document).ready(function() {

     getUserInfo()
         .then((myInfo) => {
             user = myInfo;
             populateUserInfo(user);
         })
         .then(() => {
             return getCategories()
         })
         .then((categoryArray) => {
             globalCategoryArray = categoryArray;
             populateCategories(categoryArray);
         })
         .then(() => {
             setGlobalEventHandlers();
         })

     getEvents()
         .then((eventArray) => {
             return sortEvents(eventArray);
         })
         .then((sortedEventArray) => {
             const normalizedEventArray = sortedEventArray.map((event) => {
                 const normalizedEvent = normalizeData(event);
                 return normalizedEvent;
             });
             return normalizedEventArray
         })
         .then((normalizedEventArray) => {
             return filterPastEvents(normalizedEventArray);
         })
         .then((cleanEventArray) => {
             globalEventArray = cleanEventArray;
            //  console.log(globalEventArray);
             populateEvents(cleanEventArray)
         })
         .then((data) => {
            // console.log(globalEventArray);
            let imageData = globalEventArray;
            // console.log(imageData);
             populateImages(imageData);
         })
         .catch((error) => {
             console.log(error);
             console.log(error.status);
             //  if (res.status === 500) {
             //  alert("Sorry... our bad. Reloading the page.");
             //  window.location.reload();
             //  }
         });





 });

 function getEvents() {
     let data = $.get(`${URL}/events`);
     return data;
 }

 function sortEvents(eventData) {

     let returnData = eventData.sort(function compare(objectA, objectB) {
         if (objectA.date < objectB.date) { //a is less than b by some ordering criterion
             return -1;
         }
         if (objectA.date > objectB.date) { //a is greater than b by the ordering criterion
             return 1;
         }
         // a must be equal to b
         return 0;
     });
    //  console.log(returnData);
     return returnData;
 }

 function populateEvents(eventArray) {
     eventArray.forEach((event) => {
         populateEvent(event);
         createEventsEventHandler(event.id);
     });

 }

 function populateEvent(event) {
     const parent = $('.card-container');
     const source = $(`#card-template`).html();
     const template = Handlebars.compile(source);
     const html = template(event);
     parent.append(html);
 }

 function populateImages(imageData) {
     for(var i = 0; i < imageData.length; i++){
         let $imgSrc = `${imageData[i].image_link}`;
         let $captionSrc = `${imageData[i].event_name}`;
        //  console.log($captionSrc);
        //  console.log($imgSrc);
         let $div = $('<div class="item active"></div>');
         let $img = $(`<div class="fill" style="background-image:url(${$imgSrc})"></div>`);
         let $caption = $(`<div class="carousel-caption"></div>`);
         let $captionText = $(`<h2>${$captionSrc}</h2>`);
        //  console.log($captionText);
         $(`.carousel-inner`).append($div);
         $($div).append($img);
         $($div).append($caption);
         $($caption).append($captionText);
     }
 }

 function getUserInfo() {
     let data = $.get(`${URL}/myInfo`);
     return data;
 }

 function populateUserInfo(user) {
     const $parent = $('.welcome-container');
     const source = $(`#welcome-template`).html();
     const template = Handlebars.compile(source);
     const html = template(user);
     $parent.append(html);
 }


 function createEventsEventHandler(eventID) {

 }

 function setGlobalEventHandlers() {
     $('#logout').click(() => {
         $.get(`${URL}/logout`);
     });
 }


 function getCategories() {
     let data = $.get(`${URL}/category`);
     return data;
 }

 function populateCategories(categoryArray) {
     categoryArray.forEach((category) => {
         const $parent = $('.category-container');
         const source = $(`#category-template`).html();
         const template = Handlebars.compile(source);
         const html = template(category);
         $parent.append(html);
         createCategoriesEventHandler(category.id);
     });
 }

 function createCategoriesEventHandler(categoryID) {
     const $thisCategory = $(`.category-${categoryID}`);
     $thisCategory.click(() => {
         $thisCategory.addClass('selected');
         $thisCategory.siblings().removeClass('selected');
         const $parent = $('.card-container');
         $parent.empty();
         filterCategories(categoryID);
     })
 }

 function filterCategories(categoryID) {
     const categoryName = globalCategoryArray[categoryID - 1].name;
     //  debugger;
     globalEventArray.forEach((event) => {
         let shouldPopulate = false;
         const eventCategories = event.categories;

         eventCategories.forEach((category) => {
             if (categoryName == category) {
                 shouldPopulate = true;
             }
         })
         if (shouldPopulate === true) {
             populateEvent(event);
         }

     })
 }

 $(function carousel() {
     $('.carousel').carousel({
         interval: 3000
     });
 });

 function filterPastEvents(eventArray) {
     const filteredEventArray = eventArray.filter((event) => {
         return event.isValid;
     });

     return filteredEventArray;

 }

 function normalizeData(event) {

     if (!event.source_name) {
         event.source_name = "No Source Name Specified";
     }

     if (!event.event_link) {
         event.event_link = "No Link Available";
     }

     if (!event.description) {
         event.description = "Description Unavailable"
     }

     let date = null;
     let possibleDate = null;
     if (event.date) {
         try {
             diff = Sugar.Date('today').hoursUntil(event.date).raw;
             //  diff = 12;
             if (diff > 0) {
                 possibleDate = Sugar.Date(event.date).format('{Dow}, {Month} {dd}, {yyyy}').raw;
                 event.isValid = true;
             } else {
                 event.isValid = false;
             }
         } catch (err) {
             possibleDate = event.date;
             event.isValid = false;
         }
         event.date = possibleDate;
     } else {
         date = "TBD";
     }

     if (!event.time) {
         event.time = "TBD";
     }

     if (!event.event_name) {
         event.event_name = "Event Name Unavailable";
     }


     if (!event.image_link) {
         //ImageLink deliberately left null
     }

     if (!event.location) {
         event.location = "TBD";
     }

     if (!event.address) {
         event.address = "TBD";
     }

     if (!event.price) {
         event.price = "TBD";
     }

     if (!event.categories) {
         event.categories = ["Miscellaneous"];
     }

     return event;
 }
