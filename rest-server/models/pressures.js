var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//create Schema
var Pressureschema = new Schema({
    pressure: {
        type: Number,
        required: true
    }
},  {
    timestamps: true
});

//create a model using a schema
var Pressure = mongoose.model('pressure', Pressureschemaschema);

//make this available in module appliccation
module.exports = Pressure;