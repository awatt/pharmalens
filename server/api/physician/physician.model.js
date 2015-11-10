'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PhysicianSchema = new Schema({
  	profile_ID: Number,
  	name_first: String,
  	name_last: String,
  	name_middle: String,
  	name_suffix: String,	
	primary_type: String,
	specialty: String,
	address_1: String,
	address_2: String,
	city: String,
	state: String,
	ZIP: String,
	FIPS: Number,
	_payments: {type: Schema.Types.ObjectId, ref: 'Payment'},
    _grants: {type: Schema.Types.ObjectId, ref: 'Grant'}
});

PhysicianSchema.index({profile_ID: 1});

module.exports = mongoose.model('Physician', PhysicianSchema);

