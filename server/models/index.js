const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/testDB')

mongoose.Promise = Promise;

module.exports.Test = require("./test")
