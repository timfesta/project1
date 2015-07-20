// require express framework and additional modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

// set up root route to respond with 'hello world'
app.get('/', function (req, res) {
  res.send('ciabatta');
});


app.get('/api/stocks', function (req, res) {
	var stocks = [
		{text: "citi"},
		{text: "citi"},
		{text: "citi"}
	]
	res.json(stocks)
})

// mongoose.connect(
//   process.env.MONGOLAB_URI ||
//   process.env.MONGOHQ_URL ||
//   'mongodb://localhost/YOUR_LOCAL_DATABASE_NAME' // plug in the db name you've been using
// );


// listen on port 3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});