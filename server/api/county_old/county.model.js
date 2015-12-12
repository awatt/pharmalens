'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CountySchema = new Schema({
  FIPS: Number,
  county: String,
  state: String,
  DM_number: Number,
  DM_percent: Number,
  population: Number
});

CountySchema.index({FIPS: 1});

module.exports = mongoose.model('County', CountySchema);