
// require frameworks and additional modules--//
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require("mongoose"),
    User = require('./models/user'),
    session = require('express-session'),
    _ = require('underscore');
    // cors = require('cors'),
     
       


//---- Connection to the DB------------------//
// mongoose.connect(
//   process.env.MONGOLAB_URI || 'mongodb://localhost/test' ); // plug in the db name you've been using


// ------ grabs CLIENT.JS FILE - DB SCHEMA ----///
var Stock = require('./client')


//---tell app to use bodyParser middleware and cors---//
// app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SuperSecretCookie',
  cookie: { maxAge: 60000 }
}));

 app.use(express.static(__dirname));

// middleware to manage sessions
// app.use('/', function (req, res, next) {
//   // saves userId in session for logged-in user
//   req.login = function (user) {
//     req.session.userId = user.id;
//   };

//   // finds user currently logged in based on `session.userId`
//   req.currentUser = function (callback) {
//     User.findOne({_id: req.session.userId}, function (err, user) {
//       req.user = user;
//       callback(null, user);
//     });
//   };

  // destroy `session.userId` to log out user
//   req.logout = function () {
//     req.session.userId = null;
//     req.user = null;
//   };

//   next();
// });

//------------- Route to home page-----------//
app.get('/', function (req, res) {
   var index = __dirname + "public/views/index.html";
  res.sendFile(index);
});


//---------ROUTE TO SIGNUPs----------------//
// signup route with placeholder response
// app.get('/signup', function (req, res) {
//   res.send('coming soon');
// });

// user submits the signup form
// app.post('/users', function (req, res) {

//   // grab user data from params (req.body)
//   var newUser = req.body.user;

//   // create new user with secure password
//   User.createSecure(newUser.email, newUser.password, function (err, user) {
//     res.send(user);
//   });
// });

// // login route (renders login view)
// app.get('/login', function (req, res) {
//   res.sendFile(__dirname + '/public/views/login.html');
// });


// user submits the login form
// app.post('/login', function (req, res) {

//   // grab user data from params (req.body)
//   var userData = req.body.user;

//   // call authenticate function to check if password user entered is correct
//   User.authenticate(userData.email, userData.password, function (err, user) {
//     // saves user id to session
//     req.login(user);

//     // redirect to user profile
//     res.redirect('/profile');
//   });
// });

// user profile page
// app.get('/profile', function (req, res) {
//   // finds user currently logged in
//   req.currentUser(function (err, user) {
//     res.send('Welcome ' + user.email);
//   });
// });



//---------ROUTE TO STOCKS PAGE-----------//
// app.get('/stocks', function (req, res) {
//   var stocks = __dirname + "/stocks.html"; 
// //----- SEED DATA -----///
// 	// var seeds = [
// 	// 	{text: "citi"},
// 	// 	{text: "chase"},
// 	// 	{text: "BOA"}
// 	// ]
//   res.sendFile(stocks);
// })



//---------Route to stocks and grab stocks----//
// app.get('/api/stocks', function (req, res) {
// 	console.log(Stock)
// 	Stock.find({}).exec(function(err, stocks){
// 		console.log(stocks);
// 	   res.json(stocks);
// 	})
// })

//---------- POST a new stock to stocks file -----------------//
// app.post('/api/stocks', function(req, res) {

// 	var stock = new Stock({
// 		text: req.body.text
// 	});


//   stock.save(function(err, stock){
// 	   res.json(stock)
// 	});

// })

//----------listen on port 3000---------------//
app.listen(3000);






