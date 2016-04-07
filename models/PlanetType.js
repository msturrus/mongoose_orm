var mongoose = require('mongoose'); // our handy ORM


// define what types our values should be using a Schema


var PlanetTypeSchema = new mongoose.Schema({
  type: String,
  minMass: Number,
  maxMaxx: Number,
  desc: String
});

module.exports = mongoose.model('Type', PlanetTypeSchema);
