
// require frameworks and additional modules--//
var express = require('express'),
    app = express(),
    _ = require('underscore'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoose = require("mongoose"),
    session = require('express-session'); // is this a dup OF LINE 25    


//---- Connection to the DB------------------//
mongoose.connect(
  process.env.MONGOLAB_URI || 'mongodb://localhost/test' ); // plug in the db name you've been using

// ------ grabs SECURITY.JS FILE - DB SCHEMA ----///
var Stock = require('./security')


//---tell app to use bodyParser middleware and cors---//
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(__dirname));


//------------- Route to home page-----------//
app.get('/', function (req, res) {
   var index = __dirname + "/index.html";
  res.sendFile(index);
});

app.get('/stocks', function (req, res) {
  var stocks = __dirname + "/stocks.html"; 
//----- SEED DATA -----///
	var seeds = [
		{text: "citi"},
		{text: "chase"},
		{text: "BOA"}
	]
  res.sendFile(stocks);


})



//---------Route to stocks and grab stocks----//
// app.get('/api/stocks', function (req, res) {
// 	console.log(Stock)
// 	Stock.find().sort(-_id).exec(function(err, stocks){
// 		console.log(stocks);
// 	res.json(stocks);
// 	})
// })

//---------- POST a new stock to stocks file -----------------//
// app.post('/api/stocks', function(req, res) {
// 	var stock = new Stock({
// 		text: req.body.text
// 	});


// stock.save(function(err, stock){
// 	res.json(stock)
// 	});
// });
//----------listen on port 3000---------------//
app.listen(process.env.PORT || 3000);






