var request = require('request');

var options = 
    {url: "http://localhost:3000/temperatures/",
    method: "POST",
    json: true,
    body: {}};



module.exports = {
    
    setTemperature: function (temperature, callback) {
        options.body = {temperature: temperature}

        request(options, function (error, response, body){
            if (!error && response.statusCode == 200) {            

                callback(null, body)

            } else if (!error && response.statusCode !== 200) {            
                
                console.log ('rest-server response error code ' + 
                             response.statusCode + ' ' + body);
                callback(response.statusCode, null);
            }
            else {

                console.log ('Rest server: ' + error);
                callback(error, null);

            }

        })
    }
};