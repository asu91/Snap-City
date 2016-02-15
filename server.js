var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var db = require('./config/db');


app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

// require('./app/routes')(app);


var port = 8080;
app.listen(port);
console.log('Listening to PORT: ', port);

module.exports = app;
