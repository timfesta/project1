$(function() {
  // console.log("Ello Gubna")


   var baseUrl = "http://localhost:3000" // DEV
// var baseUrl = "https://holidaytrading.herokuapp.com/" // PRD


  //----- TEMPLATE - inputs into html-----=---//
  var $stock = _.template($("#stockTemplate").html())

//---- WHATEVER YOU INPUT => ADD TO LIST ----//
  // _.each(stocks, function(yourInput) {
  //       $('#stocks').append($stock(yourInput))
  //     })
  // })

  //--- Client makes a request to server "i need the stocks"---///
  //--- THIS HAPPENS WHEN YOU LOAD THE PAGE ----////
  $.get('/api/stocks').done(function(data) {
  // --- when it is done backend given to front end 
    _.each(data, function(stocks) {
        $('#stocks').append($stock(stocks))
      });
   });


  //-------------EVENT LISTENER---------------//
  //---- THIS HAPPENS WHEN YOU SUBMIT A NAME ---///
  $('#new-stock').submit(function (event){
      event.preventDefault();
      console.log("Dont trip chocolate chip")
  });

  //-----GRABBING THE VALUE FROM THE INPUT LINE----//
  var userInput = {
        text: $('#stockText').val()
      }


  //- grabs the data from the input line runs it through template and adds to list--//
  $('#stocks').append($stock(userInput))


  //-----POSTS TO ROUTE API/STOCKS--------------//
  $.post('/api/stocks', userInput).done(function(data) {
    $('#stockText').val('')
  });
});