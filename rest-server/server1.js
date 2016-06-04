var mongoose = require('mongoose');
var Temperatures = require('./models/temperatures');

var url = 'mongodb://localhost:27017/wioLink';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");
});



Temperatures.create({ temperature:44 }, function (err, temperature) {
        console.log('sono qui');
        if (err) throw err;
        console.log('Temperature added!');
        var id = temperature._id;

        console.log ('Added the temperature with id: ' + id);
    });