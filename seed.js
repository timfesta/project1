var mongoose = require("mongoose");

mongoose.connect(
	process.env.MONGLAB_URI ||
	 "mongodb://localhost/test")

var Stock = require("./security");

Stock.remove({}, function (err, removedObj) {
	console.log("REMOVED", removedObj.result.n, "stocks");

	Stock.create({
		text: "MSFT"
	}, function (err, stock) {
		console.log("STOCK CREATED", stock);
	});

	Stock.create({
		text: "CITI"
	}, function (err, stock) {
		console.log("STOCK CREATED", stock);
	});
})
