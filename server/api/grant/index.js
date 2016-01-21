'use strict';

var express = require('express');
var controller = require('./grant.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/FIPS/:FIPS/:program_year', controller.findByFIPS);
router.get('/profile_ID/:profile_ID/:program_year', controller.findByProfileID);
router.get('/FIPS/RecipientTotals/:FIPS/:program_year', controller.recipientTotalsByFIPS);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;