'use strict';

var express = require('express');
var controller = require('./physician.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/FIPS/RecipientNames/:FIPS', controller.recipientNamesByFIPS);
router.get('/RecipientGrantTotals/:program_year', controller.recipientGrantTotalsByYear);
router.get('/RecipientPaymentTotals/:program_year', controller.recipientPaymentTotalsByYear);
router.get('/RecipientTotalTotals/:program_year', controller.recipientTotalTotalsByYear);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;