var request = require('request');

var options = 
    {url: "http://localhost:3000/humidities/",
    method: "POST",
    json: true,
    body: {}};



module.exports = {
    
    setHumidity: function (humidity, callback) {
        options.body = {humidity: humidity}

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