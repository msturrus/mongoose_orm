var mongoose = require('mongoose'); // our handy ORM


// define what types our values should be using a Schema


var PlaceSchema = new mongoose.Schema({
  contributor: String,
  place: String,
  notes: String,
  typeOfPlace: String
});

module.exports = mongoose.model('Place', PlaceSchema);
