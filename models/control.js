var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  firstName : {type: String},
  lastName : {type: String},
  birthday : {type: Date},
  created_at: { type : Date, default: Date.now },
  });

mongoose.model('User', userSchema);