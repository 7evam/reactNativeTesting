const mongoose = require ('mongoose');

const testSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'This cannot be blank!'
  },
  description: {
    type: String,
    required: 'This cannot be blank!'
  },
  picture: {
    type: String,
    required: 'This cannot be blank!'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

const Test = mongoose.model('Test', testSchema)

module.exports = Test;
