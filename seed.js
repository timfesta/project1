var mongoose = require("mongoose");

mongoose.connect(
	process.env.MONGOLAB_URI ||
	 "mongodb://localhost/test")

var Stock = require("./security");


Stock.remove({}, function (err, removedObj) {
	console.log("REMOVED", removedObj.result.n, "stocks");

	Stock.create([
		{
			text: "MSFT"
		},
		{
			text: "CITI"
		}
	], function (){
		console.log(arguments)
		mongoose.connection.close()
	});


})
