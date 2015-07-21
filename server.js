// require express framework and additional modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    mongoose = require("mongoose"),
    session = require('express-session');

    var Stock = require('./security.js');

// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/test' // plug in the db name you've been using
);



// set up root route to respond with 'hello world'
app.get('/', function (req, res) {
  res.send(__dirname + 'public/stock.html');
});


app.get('/api/stocks', function (req, res) {
	var stocks = [
		{text: "citi"},
		{text: "citi"},
		{text: "citi"}
	]
	res.json(stocks)
})



// listen on port 3000
app.listen(3000, function () {
  console.log('ciabatta');
});