$(function() {
	console.log("Ello Gubna")

//----- SEED DATA -----///
	// var stocks = [
	// 	{text: "citi"},
	// 	{text: "citi"},
	// 	{text: "citi"}
	// ]

//----- TEMPLATE - inputs into html-----//
 $stock = _.template( $("#stockTemplate").html() )

  $.get(baseUrl + '/api/stocks', function(data) {
    var stocks = data 


//---- WHATEVER YOU INPUT => ADD TO LIST ----//
 _.each(stocks, function(yourInput) {
      console.log(yourInput)
      $('#stocks').append($stock(yourInput))
    })

//-----EVENT LISTENER-------//
 $('#new-stock').submit(function(event){
    event.preventDefault();
    console.log("im submitting a form")

//-----GRABBING THE VALUE FROM THE INPUT LINE----//
    var stock = {
      text: $('#stock-text').val()
    }
    //- grabs the data from the input line runs it through template and adds to list
      $('#stocks').prepend($stock(stock))


    $.post('/api/stocks', stock, function(data) {
      console.log(data)
      $('#stocks').prepend($stock(data))
    })

  })
})
})

