'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PaymentSchema = new Schema({
	_id: Number,
	recipient_profile_ID: { type: Number, required: true },
	recipient_ZIP: String,
	recipient_FIPS: { type: Number, required: true },
	recipient_specialty: String,
	submitting_mfr: { type: String, required: true },
	form_of_payment : String,
	nature_of_payment: String,
	amount_USD: Number,
	program_year: Number,
	drugs: [String]
});

PaymentSchema.index({program_year: 1, recipient_FIPS: 1, recipient_profile_ID: 1, submitting_mfr: 1});

module.exports = mongoose.model('Payment', PaymentSchema);