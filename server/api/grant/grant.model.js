'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GrantSchema = new Schema({
	principal_investigator_profile_ID: Number,
	principal_investigator_ZIP: String,
	principal_investigator_FIPS: Number,
	principal_investigator_specialty: String,
	hospital_ID: String,
	hospital_name: String,
	submitting_mfr: String,
	form_of_payment : String,
	amount_USD: Number,
	program_year: Number,
	drugs: [String]
});

GrantSchema.index({program_year: 1, FIPS: 1, principal_investigator_profile_ID: 1, submitting_mfr: 1});

// ProductSchema.statics.findProductsByCategory = function(category, cb) {
//   return this.find({ categories: category }, cb);
// };

module.exports = mongoose.model('Grant', GrantSchema);