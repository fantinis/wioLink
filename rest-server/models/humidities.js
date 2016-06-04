var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//create Schema
var Humidityschema = new Schema({
    humidity: {
        type: Number,
        required: true
    }
},  {
    timestamps: true
});

//create a model using a schema
var Humidity = mongoose.model('humidity', Humidityschema);

//make this available in module appliccation
module.exports = Humidity;