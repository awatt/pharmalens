'use strict';

var express = require('express');
var controller = require('./physician.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/FIPS/RecipientNames/:FIPS', controller.recipientNamesByFIPS);
router.get('/RecipientTotals/:program_year/:dataSet', controller.recipientTotalsByYear);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;