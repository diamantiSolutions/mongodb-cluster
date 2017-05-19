var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PupsSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of puppy'
  },
  age: {
    type: Number,
    
  },
  sex: {
    type: String
  },
  breed: {
    type: String
  },
  
});

module.exports = mongoose.model('pups', PupsSchema);