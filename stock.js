$(function() {
	console.log("Ello Gubna")


// var baseUrl = "http://localhost:3000" // DEV
  var baseUrl = "https://holidaytrading.herokuapp.com/" // PRD


//----- TEMPLATE - inputs into html-----=---//
$stock = _.template( $("#stockTemplate").html() )


//------GET REQUEST TO SERVER.JS------------//
// $.get('/api/stocks', function(data) {
//     var stocks = data 


//---- WHATEVER YOU INPUT => ADD TO LIST ----//
_.each(stocks, function(yourInput) {
      $('#stocks').append($stock(yourInput))
    })
 })


//-------------EVENT LISTENER---------------//
$('#new-stock').submit(function (event){
    event.preventDefault();
    console.log("Dont trip chocolate chip")


//-----GRABBING THE VALUE FROM THE INPUT LINE----//
var stock = {
      text: $('#stock-text').val()
    }


//- grabs the data from the input line runs it through template and adds to list--//
$('#stocks').prepend($stock(stock))


//-----POSTS TO ROUTE API/STOCKS--------------//
// $.post('/api/stocks', stock, function(data) {
//       console.log(data)
//       $('#stocks').prepend($stock(data))
//     })
//   })
// })


//----- SEED DATA -----///
	// var stocks = [
	// 	{text: "citi"},
	// 	{text: "citi"},
	// 	{text: "citi"}
	// ]
});