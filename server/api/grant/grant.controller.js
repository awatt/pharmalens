'use strict';

var _ = require('lodash');
var Grant = require('./grant.model');

// Get list of grants
exports.index = function(req, res) {
  Grant.find(function (err, grants) {
    if(err) { return handleError(res, err); }
    return res.json(200, grants);
  });
};

// Get a single grant
exports.show = function(req, res) {
  Grant.findById(req.params.id, function (err, grant) {
    if(err) { return handleError(res, err); }
    if(!grant) { return res.send(404); }
    return res.json(grant);
  });
};

// Creates a new grant in the DB.
exports.create = function(req, res) {
  Grant.create(req.body, function(err, grant) {
    if(err) { return handleError(res, err); }
    return res.json(201, grant);
  });
};

// Updates an existing grant in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Grant.findById(req.params.id, function (err, grant) {
    if (err) { return handleError(res, err); }
    if(!grant) { return res.send(404); }
    var updated = _.merge(grant, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, grant);
    });
  });
};

// Deletes a grant from the DB.
exports.destroy = function(req, res) {
  Grant.findById(req.params.id, function (err, grant) {
    if(err) { return handleError(res, err); }
    if(!grant) { return res.send(404); }
    grant.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}