var apiHelper = require('./apiaiHelper.js');

var bodyParser = require('body-parser')
var express = require('express');
var app = express();

var http = require('http').Server(app);
var myApiKey = "MyAuthenticationTokenIsHereAndIWillFoundABetterLater";

/** understand JSON in body. */
app.use(bodyParser.json());

/**
 * Input test
 */
app.get('/time', function(req, res){
  //check authentication
  res.send(getTime());
});

// Endpoint for api.ai
app.post('/apiwebhook', function(req, res){
  //check authentication
  if(req.headers.token != 'token'){
    console.log("token inccorect : " + req.headers.token);
    res.statusCode = 401;
    res.send('error');
  } else {
    console.log("apiwebhook " + JSON.stringify(req.body));

    if(req.body.result.action == 'get_time'){

        var date = getTime();
          res.send(date);

    }
  }
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});


var getTime = function(cb){
  var date = new Date();
  var data = {};
  var speech =  'Il est ' + (date.getUTCHours() + 1) + ':' + date.getUTCMinutes() + ' et ' + date.getUTCSeconds() + " secondes.";
  var response = apiHelper.createResponse(speech, speech, data, 'Crédit Mutuel Arkéa');
  if(cb){
    cb(response);
  }
  return response;
}
