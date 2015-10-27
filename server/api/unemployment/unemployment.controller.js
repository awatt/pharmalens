'use strict';

var _ = require('lodash');
var Unemployment = require('./unemployment.model');

// Get list of unemployments
exports.index = function(req, res) {
  Unemployment.find(function (err, unemployments) {
    if(err) { return handleError(res, err); }
    return res.json(200, unemployments);
  });
};

// Get a single unemployment
exports.show = function(req, res) {
  Unemployment.findById(req.params.id, function (err, unemployment) {
    if(err) { return handleError(res, err); }
    if(!unemployment) { return res.send(404); }
    return res.json(unemployment);
  });
};

// Creates a new unemployment in the DB.
exports.create = function(req, res) {
  Unemployment.create(req.body, function(err, unemployment) {
    if(err) { return handleError(res, err); }
    return res.json(201, unemployment);
  });
};

// Updates an existing unemployment in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Unemployment.findById(req.params.id, function (err, unemployment) {
    if (err) { return handleError(res, err); }
    if(!unemployment) { return res.send(404); }
    var updated = _.merge(unemployment, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, unemployment);
    });
  });
};

// Deletes a unemployment from the DB.
exports.destroy = function(req, res) {
  Unemployment.findById(req.params.id, function (err, unemployment) {
    if(err) { return handleError(res, err); }
    if(!unemployment) { return res.send(404); }
    unemployment.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}