'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GrantSchema = new Schema({
	recipient_profile_ID: { type: Number, required: true },
	recipient_ZIP: String,
	recipient_FIPS: { type: Number, required: true },
	recipient_specialty: String,
	hospital_ID: String,
	hospital_name: String,
	submitting_mfr: { type: String, required: true },
	form_of_payment : String,
	nature_of_payment: String,
	amount_USD: Number,
	program_year: Number,
	drugs: [String]
});

GrantSchema.index({program_year: 1, FIPS: 1, principal_investigator_profile_ID: 1, submitting_mfr: 1});

module.exports = mongoose.model('Grant', GrantSchema);