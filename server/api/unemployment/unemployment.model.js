'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UnemploymentSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Unemployment', UnemploymentSchema);