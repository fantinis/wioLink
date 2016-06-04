var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//create Schema
var AirQualityschema = new Schema({
    airquality: {
        type: Number,
        required: true
    }
},  {
    timestamps: true
});

//create a model using a schema
var AirQaulity = mongoose.model('airquality', AirQualityschema);

//make this available in module appliccation
module.exports = AirQaulity;