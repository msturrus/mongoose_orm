var express = require('express');
var controller = express.Router();

var Place = require('../models/PlanetPlace');

/* GET users listing. */
controller.get('/?', function(req, res, next){
  // get ALL of the types from my collection
  Place.find(function(err, places){
    if (err) console.log(err);
    res.json(places);
  });

});

module.exports = controller;
