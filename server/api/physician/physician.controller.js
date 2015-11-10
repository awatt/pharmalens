'use strict';

var _ = require('lodash');
var Physician = require('./physician.model');

// Get list of physicians
exports.index = function(req, res) {
  Physician.find(function (err, physicians) {
    if(err) { return handleError(res, err); }
    return res.json(200, physicians);
  });
};

// Get a single physician
exports.show = function(req, res) {
  Physician.findById(req.params.id, function (err, physician) {
    if(err) { return handleError(res, err); }
    if(!physician) { return res.send(404); }
    return res.json(physician);
  });
};

// Creates a new physician in the DB.
exports.create = function(req, res) {
  Physician.create(req.body, function(err, physician) {
    if(err) { return handleError(res, err); }
    return res.json(201, physician);
  });
};

// Updates an existing physician in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Physician.findById(req.params.id, function (err, physician) {
    if (err) { return handleError(res, err); }
    if(!physician) { return res.send(404); }
    var updated = _.merge(physician, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, physician);
    });
  });
};

// Deletes a physician from the DB.
exports.destroy = function(req, res) {
  Physician.findById(req.params.id, function (err, physician) {
    if(err) { return handleError(res, err); }
    if(!physician) { return res.send(404); }
    physician.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}