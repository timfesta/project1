var Schema = mongoose.Schema;
	Schema = mongoose.Schema;

	
var StockSchema = new Schema({
    ticker: String,   
});

var Stock = mongoose.model('Stock', StockSchema);

module.exports = Stock;