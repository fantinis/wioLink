var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Humidities = require('../models/humidities');

var humidityRouter = express.Router();
humidityRouter.use(bodyParser.json());

humidityRouter.route('/')
.get(function (req, res, next) {
    Humidities.find({}, function (err, humidity) {
        if (err) throw err;
        res.json(humidity);
    });
})

.post(function (req, res, next) {
    Humidities.create(req.body, function (err, humidity) {        
        if (err) throw err;        
        var id = humidity._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added Humidity on database: ' + humidity.humidity);
    });
})

.delete(function (req, res, next) {
    Humidities.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

humidityRouter.route('/:humidityId')
.get(function (req, res, next) {
    Humidities.findById(req.params.humidityId, function (err, humidity) {
        if (err) throw err;
        res.json(humidity);
    });
})

.delete(function (req, res, next) {
    Humidities.findByIdAndRemove(req.params.humidityId, function (err, resp) {        if (err) throw err;
        res.json(resp);
    });
});

module.exports = humidityRouter;
