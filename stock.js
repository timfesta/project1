$(function () {
	console.log('ciabatta')

//----- SEED DATA -----///
	var lines = [
		{text: "citi"},
		{text: "citi"},
		{text: "citi"}
	]

//----- TEMPLATE - inputs into html-----//
 $line = _.template( $("#lineTemplate").html() )


//---- WHATEVER YOU INPUT => ADD TO LIST ----//
 _.each(lines, function(yourInput) {
      console.log(yourInput)
      $('#lines').append($line(yourInput))
    })

//-----EVENT LISTENER-------//
 $('#new-stock').submit(function(e){
    e.preventDefault();
    console.log("im submitting a form")

//-----GRABBING THE VALUE FROM THE INPUT LINE----//
    var line = {
      text: $('#line-text').val()
    }
    //- grabs the data from the input line runs it through template and adds to list---//
      $('#lines').prepend($line(line))
   

  })
})


