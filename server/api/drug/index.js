'use strict';

var express = require('express');
var controller = require('./drug.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/DrugGrantTotals/:program_year', controller.drugGrantTotalsByYear);
router.get('/DrugPaymentTotals/:program_year', controller.drugPaymentTotalsByYear);
router.get('/DrugTotalTotals/:program_year', controller.drugTotalTotalsByYear);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;