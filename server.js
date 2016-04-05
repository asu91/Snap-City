var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

// var db = require('./config/db');

mongoose.connect('mongodb://localhost/MVP');


// mongoose.connect(db.url);

app.use(bodyParser.json());

require('./app/routes')(app);


// app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
// app.use(methodOverride('X-HTTP-Method-Override')); 

app.use(express.static(__dirname + '/public'));


var port = 8080;
app.listen(port);
console.log('Listening to PORT: ', port);

module.exports = app;
