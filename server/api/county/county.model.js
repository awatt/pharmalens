'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CountySchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('County', CountySchema);