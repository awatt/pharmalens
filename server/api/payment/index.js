'use strict';

var express = require('express');
var controller = require('./payment.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/FIPS/:FIPS', controller.findByFIPS);
router.get('/profile_ID/:profile_ID', controller.findByProfileID);
router.get('/FIPS/RecipientStats/:FIPS', controller.recipientStatsByFIPS);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;