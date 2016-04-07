// $ mongoimport --db planets --collection types planets.json --jsonArray


var mongoose = require('mongoose');

// This connects us to our database
var connectionString = process.env.DB;

console.log('Attempting to connect to MongoDB');
mongoose.connect(connectionString); // connect to the db supplied in the connectionString

mongoose.connection.on('connected', function(){
  console.log('Mongoose connected to: ' + process.env.DB);

});

mongoose.connection.on('error',function (error) {
  console.log('Mongoose connection error: ' + error);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected!');
});

// listen for the error and disconnected events
// log out something when either occur
// then, kill your server.
// which event fired?  Answer: disconnected.  Restart your server.
// then, go find the terminal tab running sudo MongoDB
// and get ready for block # 2
