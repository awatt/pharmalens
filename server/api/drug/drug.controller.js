'use strict';

var _ = require('lodash');
var Drug = require('./drug.model');

exports.drugTotalsByYear = function(req, res) {
      var matchProperty = 'total' 
                        + req.params.dataSet.substr(0,1).toUpperCase() 
                        + req.params.dataSet.substr(1, req.params.dataSet.length-2) 
                        + req.params.program_year;
      
      var queryObj = {},
      sortObj = {},
      projectObj = { 
        drug: 1,
        submitting_mfrs: 1
      },
      queryConditions = {$exists: true};
      queryObj[matchProperty] = queryConditions;
      projectObj['amount'] = "$" + matchProperty;
      Drug.aggregate([
          { $match: queryObj},
          { $project: projectObj},
          { $sort: {amount: -1} }
          // { $limit: 100 }
      ], function (err, results) {

      
      results.forEach(function(doc){
        var arr = doc.submitting_mfrs, mfrs = formatMfr(arr[0]);
        for (var i = 1, max = arr.length; i < max; i++){
          mfrs += ', ' + formatMfr(arr[i]);
        }
        doc.submitting_mfrs = mfrs;
        return doc;
      })

      if(err) {return handleError(res, err); }
      return res.json(200, results);
  });
};

var zeroFormat = function(val){
  return (val) ? val : 0;
}

var formatMfr = function(str){
  if(str === "Daiichi Sankyo Inc."){return "SANKYO"};
  if(str === "Eli Lilly and Company"){return "LILLY"};
  if(str === "Bristol-Myers Squibb Company"){return "BMS"};
  if(str === "Becton, Dickinson and Company"){return "BECTON, DICKINSON"};
  if(str === "Johnson & Johnson Health Care Systems Inc."){return "J&J"};
  if(str === "St. Jude Medical, Inc."){return "ST. JUDE"};
  if(str === "BOSTON SCIENTIFIC CORPORATION"){return "BOSTON SCIENTIFIC"};
  if(str === "C. R. Bard, Inc. & Subsidiaries"){return "C. R. BARD"};
  if(str === "Henry Schein, Inc."){return "HENRY SCHEIN"};
  if(str === "Cardiovascular Systems Inc."){return "CARDIOVASCULAR SYSTEMS"};
  if(str === "United Therapeutics Corporation"){return "UNITED THERAPEUTICS"};
  if(str === "The Spectranetics Corporation"){return "SPECTRANETICS"};
  if(str === "W. L. Gore & Associates, Inc."){return "W. L. GORE"};
  if(str === "Novo Nordisk Inc."){return "N. NORDISK"};
  if(str === "Rapid Pathogen Screening, Inc."){return "RAPID PATHOGEN"};
  if(str === "Dr.Reddy's Laboratories,Inc."){return "DR. REDDY'S"};
  return str.match(/(?:^|(?:[.!?]\s))(\w+)/)[0].toUpperCase();
}


// Get list of drugs
exports.index = function(req, res) {
  Drug.find(function (err, drugs) {
    if(err) { return handleError(res, err); }
    return res.json(200, drugs);
  });
};

// Get a single drug
exports.show = function(req, res) {
  Drug.findById(req.params.id, function (err, drug) {
    if(err) { return handleError(res, err); }
    if(!drug) { return res.send(404); }
    return res.json(drug);
  });
};

// Creates a new drug in the DB.
exports.create = function(req, res) {
  Drug.create(req.body, function(err, drug) {
    if(err) { return handleError(res, err); }
    return res.json(201, drug);
  });
};

// Updates an existing drug in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Drug.findById(req.params.id, function (err, drug) {
    if (err) { return handleError(res, err); }
    if(!drug) { return res.send(404); }
    var updated = _.merge(drug, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, drug);
    });
  });
};

// Deletes a drug from the DB.
exports.destroy = function(req, res) {
  Drug.findById(req.params.id, function (err, drug) {
    if(err) { return handleError(res, err); }
    if(!drug) { return res.send(404); }
    drug.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}