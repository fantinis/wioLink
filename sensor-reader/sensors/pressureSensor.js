var request = require('request');
var url = 'https://iot.seeed.cc/v1/node/GroveBaroBMP280I2C0/pressure?access_token='

module.exports = function(userToken, callback) {

    request(url + userToken, function(error, response, body) {
        if (!error && response.statusCode == 200) {            
            
            var sensorData = JSON.parse(body);
            callback(null, sensorData.pressure)
            
        } else if (!error && response.statusCode !== 200) {            
            var sensorData = JSON.parse(body);
            
            console.log ('Pressure sensor, response error code ' + 
                         response.statusCode + ' ' + sensorData.error);
            callback(response.statusCode, null);
        }
        else {
            
            console.log ('Pressure sensor, rerquest error: ' + error + ' response code ' + response.statusCode);
            callback(error, null);
            
        }

    })
}