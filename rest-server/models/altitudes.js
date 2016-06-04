var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//create Schema
var Altitudeschema = new Schema({
    altitude: {
        type: Number,
        required: true
    }
},  {
    timestamps: true
});

//create a model using a schema
var Altitude = mongoose.model('altitude', Altitudeschema);

//make this available in module appliccation
module.exports = Altitude;