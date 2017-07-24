var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var messageSchema = new Schema({
  Name: {type: String, required: true,},
  Post: {type: String, required: true,},

});

// export our model
module.exports = mongoose.model('Message', messageSchema, 'messages');
