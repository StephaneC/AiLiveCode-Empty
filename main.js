var apiHelper = require('./apiaiHelper.js');

var bodyParser = require('body-parser')
var express = require('express');
var app = express();

var http = require('http').Server(app);
var myApiKey = "MyAuthenticationTokenIsHereAndIWillFoundABetterLater";

/** understand JSON in body. */
app.use(bodyParser.json());

// Endpoint for api.ai
app.post('/apiwebhook', function(req, res){

});

http.listen(8080, function(){
  console.log('listening on *:8080');
});
