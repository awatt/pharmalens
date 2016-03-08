'use strict';

var _ = require('lodash');
var Grant = require('./grant.model');


// Get a list of grants by FIPS
exports.findByFIPS = function(req, res) {
  Grant.find({ program_year: req.params.program_year, recipient_FIPS: req.params.FIPS }).exec(function(err, grants) {
    if(err) {return handleError(res, err); }
      return res.json(200, grants);
  });
};

exports.findByProfileID = function(req, res) {
  Grant.find({ program_year: req.params.program_year, recipient_profile_ID: req.params.profile_ID }).exec(function(err, grants) {
    if(err) {return handleError(res, err); }
      return res.json(200, grants);
  });
};

exports.recipientTotalsByFIPS = function(req, res) {
    var o = {};
    o.map = function(){ emit(this.recipient_profile_ID, this.amount_USD); };
    o.reduce = function(recipient_profile_ID, amount_USD){return Array.sum(amount_USD);};
    o.query = { program_year: req.params.program_year, recipient_FIPS: req.params.FIPS };

    Grant.mapReduce(o, function (err, results) {
      if(err) {return handleError(res, err); }
      var resultsMap = {};
      for (var key in results) {
          if (results.hasOwnProperty(key) && !isNaN(key)) {
            resultsMap[results[key]._id] = results[key].value;
          }
        }
      return res.json(200, resultsMap);
  })
};


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