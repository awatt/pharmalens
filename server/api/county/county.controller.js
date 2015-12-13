'use strict';

var _ = require('lodash');
var County = require('./county.model');

// Get county info by FIPS
exports.findByFIPS = function(req, res) {
  County.find({ FIPS: req.params.FIPS }).exec(function(err, county) {
    console.log("this is req.params.FIPS in county back end query: ", req.params.FIPS)
    if(err) {return handleError(res, err); }
    console.log("this is county returned in the back end: ", county)
      return res.json(200, county);
  });
};

exports.findByFIPS = function(req, res) {
  Payment.find({ recipient_FIPS: req.params.FIPS }).exec(function(err, payments) {
    console.log("this is req.params.FIPS on the payments back end: ", req.params.FIPS)
    if(err) {return handleError(res, err); }
    // console.log("this is payments in the back end: ", payments)
      return res.json(200, payments);
  });
};

// Get list of countys
exports.index = function(req, res) {
  County.find(function (err, countys) {
    if(err) { return handleError(res, err); }
    return res.json(200, countys);
  });
};

// Get a single county
exports.show = function(req, res) {
  County.findById(req.params.id, function (err, county) {
    if(err) { return handleError(res, err); }
    if(!county) { return res.send(404); }
    return res.json(county);
  });
};

// Creates a new county in the DB.
exports.create = function(req, res) {
  County.create(req.body, function(err, county) {
    if(err) { return handleError(res, err); }
    return res.json(201, county);
  });
};

// Updates an existing county in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  County.findById(req.params.id, function (err, county) {
    if (err) { return handleError(res, err); }
    if(!county) { return res.send(404); }
    var updated = _.merge(county, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, county);
    });
  });
};

// Deletes a county from the DB.
exports.destroy = function(req, res) {
  County.findById(req.params.id, function (err, county) {
    if(err) { return handleError(res, err); }
    if(!county) { return res.send(404); }
    county.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}