var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//create Schema
var Temperatureschema = new Schema({
    temperature: {
        type: Number,
        required: true
    }
},  {
    timestamps: true
});

//create a model using a schema
var Temperature = mongoose.model('temperature', Temperatureschema);

//make this available in module appliccation
module.exports = Temperature;