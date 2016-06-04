var temperatureSensor = require ('./sensors/temperatureSensor');
var humiditySensor = require ('./sensors/humiditySensor');
var airQualitySensor = require ('./sensors/airQualitySensor');
var altitudeSensor = require ('./sensors/altitudeSensor');
var pressureSensor = require ('./sensors/pressureSensor');

var restServer = require ('./sensors/restServer');

var userToken = 'a6c24dfec564ba5b602b85b981b1ad4a';
var mongoDbUrl =  'localhost:27017';


function getTemperature(interval) {
    
    var timer = setInterval(function(){ 
        
        temperatureSensor(userToken, function(err, sensorData){
            if (err) {                
                clearInterval(timer);
            }
            else {              
                restServer.setTemperature(sensorData, function(err, response){
                    if (err) {                
                        clearInterval(timer);
                    }
                    else {
                        console.log ("Temperature readed from sensor and saved on DB: " + sensorData );
                    }
                });
                
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

function getAirQuality(interval) {
    
    var timer = setInterval(function(){ 
        airQualitySensor(userToken, function(err, sensorData){
            if (err) {                
                clearInterval(timer);
            }
            else {
                console.log ('Air Quality Data ' +  sensorData);
                //call rest-server for store the data
            }
        });
    }, interval); 
};

function getAltitude(interval) {
    
    var timer = setInterval(function(){ 
        altitudeSensor(userToken, function(err, sensorData){
            if (err) {                
                clearInterval(timer);
            }
            else {
                console.log ('Altitude Data ' +  sensorData);
                //call rest-server for store the data
            }
        });
    }, interval); 
};

function getPressure(interval) {
    
    var timer = setInterval(function(){ 
        pressureSensor(userToken, function(err, sensorData){
            if (err) {                
                clearInterval(timer);
            }
            else {
                console.log ('Pressure Data ' +  sensorData);
                //call rest-server for store the data
            }
        });
    }, interval); 
};


getTemperature(3000);
/*getHumidity(3000);
getAirQuality(3000);
getAltitude(6000);
getPressure(6000);*/
