var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

	
var StockSchema = new Schema({
    text: { type:String, required: true }
});

var Stock = mongoose.model('Stock', StockSchema);

module.exports = Stock;


