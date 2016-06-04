var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Temperatures = require('../models/temperatures');

var temperatureRouter = express.Router();
temperatureRouter.use(bodyParser.json());

temperatureRouter.route('/')
.get(function (req, res, next) {
    Temperatures.find({}, function (err, temperature) {
        if (err) throw err;
        res.json(temperature);
    });
})

.post(function (req, res, next) {
    Temperatures.create(req.body, function (err, temperature) {        
        if (err) throw err;        
        var id = temperature._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added Temperature on database: ' + temperature.temperature);
    });
})

.delete(function (req, res, next) {
    Temperatures.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

temperatureRouter.route('/:temperatureId')
.get(function (req, res, next) {
    Temperatures.findById(req.params.temperatureId, function (err, temperature) {
        if (err) throw err;
        res.json(temperature);
    });
})

.delete(function (req, res, next) {
    Temperatures.findByIdAndRemove(req.params.temperatureId, function (err, resp) {        if (err) throw err;
        res.json(resp);
    });
});

module.exports = temperatureRouter;
