var express = require('express');
var controller = express.Router();

var PlanetType = require('../models/PlanetType');

/* GET home page. */
controller.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})
.get('/planetTypes', function(req, res, next){
  // get ALL of the types from my collection
  PlanetType.find(function(err, types){
    if (err) console.log(err);
    res.json(types);
  });

});

module.exports = controller;
