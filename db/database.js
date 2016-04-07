var mongoose = require('mongoose');

// This connects us to our database
var connectionString = process.env.DB;

console.log('Attempting to connect to MongoDB');
mongoose.connect(connectionString); // connect to the db supplied in the connectionString

mongoose.connection.on('connected', function(){
  console.log('Mongoose connected to: ' + process.env.DB);

});

// listen for the error and disconnected events
// log out something when either occur
// then, kill your server.
// which event fired?  Restart your server.
// then, go find the terminal tab running sudo MongoDB
// and get ready for block # 2
