var mongoose = require("mongoose");

mongoose.connect(process.env.MONGLAB_URI || "mongodb://localhost/securities")

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
