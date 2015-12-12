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

exports.recipientNamesByFIPS = function(req, res) {
  var o = {};
  o.map = function(){var fullName = this.first_name.substr(0,1).toUpperCase() + this.first_name.substr(1).toLowerCase() + " " + this.last_name.substr(0,1).toUpperCase() + "" + this.last_name.substr(1).toLowerCase(); emit(this.profile_ID, fullName); };
  o.reduce = function(profile_ID, fullName){return Array(fullName);};
  o.query = { FIPS: req.params.FIPS };

  Physician.mapReduce(o, function (err, results) {
    if(err) {return handleError(res, err); }
    console.log("these are physician mapreduce results in the back end: ", results)
    return res.json(200, results);
})
};

exports.recipientStatsByFIPS = function(req, res) {
  var o = {};
  o.map = function(){ emit(this.recipient_profile_ID, this.amount_USD); };
  o.reduce = function(recipient_profile_ID, amount_USD){return Array.sum(amount_USD);};
  o.query = { recipient_FIPS: req.params.FIPS };

  Payment.mapReduce(o, function (err, results) {
    if(err) {return handleError(res, err); }
    // console.log("these are mapreduce results in the back end: ", results)
    return res.json(200, results);
})
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