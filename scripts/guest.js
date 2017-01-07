let eventArray = [];
let categoryArray = [];
$(document).ready(function() {
    const baseURL = SERVER_URL;
    var eventURL = `${SERVER_URL}/events`;
    var categoryURL = `${SERVER_URL}/category`;
    var eventCategoryURL = `${SERVER_URL}/view_categoriesEvents/`;



    $.get(categoryURL)
        .then((data) => {
            categoryArray = data;
            for (var i = 0; i < data.length; i++) {
                var categoryName = data[i].name;
                var categoryId = data[i].id;
                var $listItem = $(`<div class="list-group-item" id="category-${categoryId}" val="${categoryId}">${categoryName}</div>`);
                $('#listTwo').append($listItem);
                createClickHandler(categoryId);
            }
        })

    // $.get(eventURL, function(data) {
    //
    //
    //
    //
    //     $('.panel').click(function() {
    //         var thisId = parseInt($(this).children(':first').text());
    //         var thisEvent = data[thisId];
    //
    //         var name = null;
    //         if (thisEvent.event_name) {
    //             name = thisEvent.event_name;
    //         } else {
    //             name = "This event has no name.";
    //         }
    //
    //         var date = null;
    //         if (thisEvent.date) {
    //             date = normalDate(thisEvent.date);
    //         } else {
    //             date = "Event Date TBD";
    //         }
    //
    //         var time = null;
    //         if (thisEvent.time) {
    //             time = thisEvent.time;
    //         } else {
    //             date = "Event Time TBD";
    //         }
    //
    //         var description = null;
    //         if (thisEvent.description) {
    //             description = thisEvent.description;
    //         } else {
    //             description = "No one has bothered to describe this Event!";
    //         }
    //
    //         var price = null;
    //         if (thisEvent.price) {
    //             price = thisEvent.price;
    //         } else {
    //             price = "This event has no price posted";
    //         }
    //
    //         var address = null;
    //         if (thisEvent.address) {
    //             address = thisEvent.address;
    //         } else {
    //             address = "The address for this event has not been listed.";
    //         }
    //
    //         var eventLink = thisEvent.event_link;
    //
    //         $('main').empty();
    //         var $id = $('<p class="hidden">' + thisId + '</p>');
    //         var $bigDiv = $('<div class="jumbotron"></>');
    //         var $flagLink = $('<div class="flag-link"></div>');
    //         var $flag = $('<button type="button" class="btn btn-primary"><p class="flagger">w</p></button>');
    //         var $backLink = $('<a class="btn btn-primary" id="back-button" href="index.html">Back to List</a>');
    //         var $bigName = $('<h3 class="big-title">' + name + '</h3>');
    //         var $bigDate = $('<p class="big-date">' + date + ' at ' + time + '</p>');
    //         var $description = $('<p class="big-description">' + description + '</p>');
    //         var $price = $('<p class="price"><small>' + price + "</p>");
    //         var $bigLink = $('<a class="btn btn-primary btn-lg" class="link-button" href="' + eventLink + '">Click this link for further details</a>');
    //         var $address = $('<p class="address">' + address + '</p>');
    //
    //         $('main').append($bigDiv);
    //         $($bigDiv).append($id);
    //         $($flagLink).append($backLink);
    //         $($flagLink).append($flag);
    //         $($bigDiv).append($flagLink);
    //         $($bigDiv).append($bigName);
    //         $($bigDiv).append($bigDate);
    //         $($bigDiv).append($description);
    //         $($bigDiv).append($address);
    //         $($bigDiv).append($price);
    //         $($bigDiv).append($bigLink);
    //     });
    // });

    $.get(eventURL)
    .then((data)=>{
      data = data.sort(function compare(objectA, objectB) {
          if (objectA.date < objectB.date) { //a is less than b by some ordering criterion
              return -1;
          }
          if (objectA.date > objectB.date) { //a is greater than b by the ordering criterion
              return 1;
          }
          // a must be equal to b
          return 0;
      });

      eventArray = data;

      for (var i = 0; i < data.length; i++) {
          var thisEvent = data[i];
          populateEvent(thisEvent, i);
      }
    })


    $('#subButton').click(function() {

        for (var i = 0; i < data.length; i++) {

            //*Mark - Took away cardId and just used i
            // var cardId = i;
            var thisEvent = data[i];

            //*Mark - Validating that the properties are populated
            var sourceName = null;
            if (thisEvent.date) {
                sourceName = thisEvent.sourceName;
            } else {
                date = "Indeterminate Date";
            }

            var eventLink = null;
            if (thisEvent.event_link) {
                eventLink = thisEvent.event_link;
            } else {
                eventLink = "No Link Available";
            }

            var description = null;
            if (thisEvent.description) {
                description = thisEvent.description;
            } else {
                description = "Description Unavailable";
            }

            var date = null;
            if (thisEvent.date) {
                date = normalDate(thisEvent.date);
            } else {
                date = "Date: TBD";
            }

            var time = null;
            if (thisEvent.time) {
                time = thisEvent.time;
            } else {
                time = "Time: TBD";
            }

            var eventName = null;
            if (thisEvent.event_name) {
                eventName = thisEvent.event_name;
            } else {
                eventName = "Event is Unnamed";
            }

            var price = null;
            if (thisEvent.price) {
                price = thisEvent.price;
            } else {
                price = "Price: TBD";
            }

            var imageLink = null;
            if (thisEvent.imageLink) {
                imageLink = thisEvent.imageLink;
            } else {
                imageLink = "Image Unavailable";
            }

            var location = null;
            if (thisEvent.location) {
                location = thisEvent.location;
            } else {
                location = "Location: TBD";
            }

            var address = null;
            if (thisEvent.address) {
                address = thisEvent.address;
            } else {
                address = "Address: TBD";
            }

            var $id = $('<p class="hidden">' + i + '</p>');
            var $card = $('<div class="panel panel-default" + id="card' + (i + 1) + '"></div>');
            if (i === 0) {
                $card.attr('id', 'card1');
            }

            var $heading = $('<div class="panel-heading"><h3 class="panel-title">' + thisEvent.event_name + '</h3></div>');
            var $body = $('<div class="panel-body"">' + date + ' at ' + time + '</div>');
            $($card).append($id);
            $($card).append($heading);
            $($card).append($body);


            $('.panel').click(function() {
                var thisId = parseInt($(this).children(':first').text());
                var thisEvent = data[thisId];

                var name = null;
                if (thisEvent.event_name) {
                    name = thisEvent.event_name;
                } else {
                    name = "This event has no name.";
                }

                var date = null;
                if (thisEvent.date) {
                    date = normalDate(thisEvent.date);
                } else {
                    date = "Event Date TBD";
                }

                var time = null;
                if (thisEvent.time) {
                    time = thisEvent.time;
                } else {
                    date = "Event Time TBD";
                }

                var description = null;
                if (thisEvent.description) {
                    description = thisEvent.description;
                } else {
                    description = "No one has bothered to describe this Event!";
                }

                var price = null;
                if (thisEvent.price) {
                    price = thisEvent.price;
                } else {
                    price = "This event has no price posted";
                }

                var address = null;
                if (thisEvent.address) {
                    address = thisEvent.address;
                } else {
                    address = "The address for this event has not been listed.";
                }

                var eventLink = thisEvent.event_link;

                $('main').empty();
                var $id = $('<p class="hidden">' + thisId + '</p>');
                var $bigDiv = $('<div class="jumbotron"></>');
                var $flagLink = $('<div class="flag-link"></div>');
                var $flag = $('<button type="button" class="btn btn-primary"><p class="flagger">w</p></button>');
                var $backLink = $('<a class="btn btn-primary" id="back-button" href="index.html">Back to List</a>');
                var $bigName = $('<h3 class="big-title">' + name + '</h3>');
                var $bigDate = $('<p class="big-date">' + date + ' at ' + time + '</p>');
                var $description = $('<p class="big-description">' + description + '</p>');
                var $price = $('<p class="price"><small>' + price + "</p>");
                var $bigLink = $('<a class="btn btn-primary btn-lg" class="link-button" href="' + eventLink + '">Click this link for further details</a>');
                var $address = $('<p class="address">' + address + '</p>');

                $('main').append($bigDiv);
                $($bigDiv).append($id);
                $($flagLink).append($backLink);
                $($flagLink).append($flag);
                $($bigDiv).append($flagLink);
                $($bigDiv).append($bigName);
                $($bigDiv).append($bigDate);
                $($bigDiv).append($description);
                $($bigDiv).append($address);
                $($bigDiv).append($price);
                $($bigDiv).append($bigLink);
            });
            // });

        }

    });
});



function parseId(string) {
    var noLetter = string.replace(/[a-z]/g, '');
    console.log(noLetter);
}

function normalDate(string) {
    if (string.substr(0, 3) === "201") {
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

function createClickHandler(id) {
    $(`#category-${id}`).click(function() {
        console.log('clicked' + id);
        $(`.list-group-item`).removeClass('selected');
        $(`#category-${id}`).addClass('selected');
        $('#listOne').empty();
        for (var i = 0; i < eventArray.length; i++) {
            // debugger;
            let shouldAppend = false;
            const thisEvent = eventArray[i];
            for (var j = 0; j < categoryArray.length; j++) {
                const thisCategory = categoryArray[id - 1];
                for (var z = 0; z < thisEvent.categories.length; z++) {
                    const thisEventCategory = thisEvent.categories[z];
                    if (thisEventCategory === thisCategory.name) {
                        shouldAppend = true;
                    }
                }
            }
            if (shouldAppend) {
                console.log(thisEvent.event_name);
                populateEvent(thisEvent, i);
            }
        }
    });
}

function populateEvent(thisEvent, i) {
    var sourceName = null;
    if (thisEvent.date) {
        sourceName = thisEvent.sourceName;
    } else {
        date = "Indeterminate Date";
    }

    var eventLink = null;
    if (thisEvent.event_link) {
        eventLink = thisEvent.event_link;
    } else {
        eventLink = "No Link Available";
    }

    var description = null;
    if (thisEvent.description) {
        description = thisEvent.description;
    } else {
        description = "Description Unavailable";
    }

    var date = null;
    if (thisEvent.date) {
        date = normalDate(thisEvent.date);
    } else {
        date = "Date: TBD";
    }

    var time = null;
    if (thisEvent.time) {
        time = thisEvent.time;
    } else {
        time = "Time: TBD";
    }

    var eventName = null;
    if (thisEvent.event_name) {
        eventName = thisEvent.event_name;
    } else {
        eventName = "Event is Unnamed";
    }

    var price = null;
    if (thisEvent.price) {
        price = thisEvent.price;
    } else {
        price = "Price: TBD";
    }

    var imageLink = null;
    if (thisEvent.imageLink) {
        imageLink = thisEvent.imageLink;
    } else {
        imageLink = "Image Unavailable";
    }

    var location = null;
    if (thisEvent.location) {
        location = thisEvent.location;
    } else {
        location = "Location: TBD";
    }

    var address = null;
    if (thisEvent.address) {
        address = thisEvent.address;
    } else {
        address = "Address: TBD";
    }

    var $id = $('<p class="hidden">' + i + '</p>');
    var $card = $('<div class="panel panel-default" + id="card' + (i + 1) + '"></div>');
    if (i === 0) {
        $card.attr('id', 'card1');
    }

    var $heading = $('<div class="panel-heading"><h3 class="panel-title">' + thisEvent.event_name + '</h3></div>');
    var $body = $('<div class="panel-body"">' + date + ' at ' + time + '</div>');
    $($card).append($id);
    $($card).append($heading);
    $($card).append($body);

    $('#listOne').append($card);

}
