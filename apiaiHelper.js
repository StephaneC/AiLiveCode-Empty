/**
 * This class create readable message for api.ai
 */
var defaultSource = 'Stéphane Castrec';

var createError = function(statusCode, message){
  var response = {
    speech : message,
    displayText: message,
    data: {
      statusCode: statusCode,
      message : message
    },
    source:defaultSource
  };
  return response;
};
var createResponse = function(speech, message, data, source){

  var response = {
    speech : speech,
    displayText: message,
    data: {
      facebook: data
    },
    source:source
  };
  if(!source){
    response.source = defaultSource;
  }

  console.log("Sending message" + JSON.stringify(response));
  return response;
};

module.exports = {
  createError : createError,
  createResponse : createResponse
};
