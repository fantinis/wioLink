var temperatureSensor = require ('./sensors/temperatureSensor');
var humiditySensor = require ('./sensors/humiditySensor');

var userToken = 'a6c24dfec564ba5b602b85b981b1ad4a';


function getTemperature(interval) {
    
    var timer = setInterval(function(){ 
        temperatureSensor(userToken, function(err, sensorData){
            if (err) {                
                clearInterval(timer);
            }
            else {
                console.log ('Temeperature Data ' +  sensorData);
                //call rest-server for store the data
            }
        });
    }, interval); 
};

function getHumidity(interval) {
    
    var timer = setInterval(function(){ 
        humiditySensor(userToken, function(err, sensorData){
            if (err) {                
                clearInterval(timer);
            }
            else {
                console.log ('Humidity Data ' +  sensorData);
                //call rest-server for store the data
            }
        });
    }, interval); 
};


getTemperature(3000);
getHumidity(3000);