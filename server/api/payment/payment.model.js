'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PaymentSchema = new Schema({
	// recipient: { type: Schema.Types.ObjectId, ref: 'Physician' },
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

// ProductSchema.statics.mapRecipientStatsByFIPS = function(FIPS, cb) {
  
//   return this.find({ recipient_FIPS: FIPS }, cb);
// };


module.exports = mongoose.model('Payment', PaymentSchema);

// 'use strict';

// var mongoose = require('mongoose'),
//     Schema = mongoose.Schema;

// var ReviewSchema = new Schema({
//   _user: {type: Schema.Types.ObjectId, ref: 'User'},
//   _product: {type: Schema.Types.ObjectId, ref: 'Product'},
//   date: String,
//   review_content: {
//   	review_text: String,
//   	rating_stars: Number
//   }
// });


// ReviewSchema.statics.reviewsByProduct = function(product, cb){
// 	return this.find({ _product: product.id })
// 				.populate('_product _user')
// 				.exec(cb);
// }

// module.exports = mongoose.model('Review', ReviewSchema);
