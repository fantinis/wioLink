var request = require('request');
var url = 'https://iot.seeed.cc/v1/node/GroveAirqualityA0/quality?access_token='

module.exports = function(userToken, callback) {

    request(url + userToken, function(error, response, body) {
        if (!error && response.statusCode == 200) {            
            
            var sensorData = JSON.parse(body);
            callback(null, sensorData.quality)
            
        } else if (!error && response.statusCode !== 200) {            
            var sensorData = JSON.parse(body);            
            console.log ('Air Quality sensor, response error code ' + 
                         response.statusCode + ' ' + sensorData.error);
            
            callback(response.statusCode, null);
        }
        else {
            
            console.log ('Air Quality sensor, rerquest error: ' + error );
            callback(error, null);
            
        }

    })
}