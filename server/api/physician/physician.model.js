'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PhysicianSchema = new Schema({
	_id: Number,
  	profile_ID: { type: Number, required: true },
  	first_name: String,
  	last_name: String,
	primary_type: String,
	specialty: String,
	address_1: String,
	address_2: String,
	city: String,
	state: String,
	zip: String,
	FIPS: Number,
	totalPayments: [Object]
	// payments: [{ type: Schema.Types.ObjectId, ref: 'Payment' }]
	// _payments: {type: Schema.Types.ObjectId, ref: 'Payment'}
    // _grants: {type: Schema.Types.ObjectId, ref: 'Grant'}
});

PhysicianSchema.index({profile_ID: 1});

module.exports = mongoose.model('Physician', PhysicianSchema);
