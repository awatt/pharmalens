'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PaymentSchema = new Schema({
	  recipient_profile_ID: Number,
	  recipient_ZIP: String,
	  recipient_FIPS: Number,
	  recipient_specialty: String,
	  submitting_mfr: String,
	  form_of_payment : String,
	  nature_of_payment: String,
	  amount_USD: Number,
	  program_year: Number,
	  drugs: [String]
});

PaymentSchema.index({program_year: 1, recipient_FIPS: 1, recipient_profile_ID: 1, submitting_mfr: 1});

// ProductSchema.statics.findPaymentsByFIPS = function(FIPS, cb) {
//   return this.find({ recipient_FIPS: FIPS }, cb);
// };

module.exports = mongoose.model('Payment', PaymentSchema);