'use strict';

angular.module('foglightApp')
  .factory('paymentStats', function ($resource) {

    var paymentStats = $resource('api/payments/FIPS/:FIPS', {FIPS: '@FIPS'}, {
      update: {
        method: 'PUT'
      }
    });

    var recipientStats = $resource('api/payments/FIPS/RecipientStats/:FIPS', {FIPS: '@FIPS'}, {
      update: {
        method: 'PUT'
      }
    });

    var recipientNames = $resource('api/physicians/FIPS/RecipientNames/:FIPS', {FIPS: '@FIPS'}, {
      update: {
        method: 'PUT'
      }
    });

    var countyInfo = $resource('api/countys/FIPS/:FIPS', {FIPS: '@FIPS'}, {
      update: {
        method: 'PUT'
      }
    });

    var dataObj = {
        '0to500': [],
        '500to1k': [],
        '1to5k': [], 
        '5to10k': [],
        '10to25k': [],
        '25to50k': [],
        '50to100k': [],
        '100to200k': [],
        'over200k': []
      };

    var dataObj_mfr = {
        '0to500': {},
        '500to1k': {},
        '1to5k': {}, 
        '5to10k': {},
        '10to25k': {},
        '25to50k': {},
        '50to100k': {},
        '100to200k': {},
        'over200k': {}
      };

    var recipientStatsMap = {};
    var recipientNamesMap = {};

    var findBin = function(val){
    var bins = ['0to500', '500to1k', '1to5k', '5to10k', '10to25k', '25to50k', '50to100k', '100to200k', 'over200k'];
    var arr = [0, 500, 1000, 5000, 10000, 25000, 50000, 100000, 200000];
    var i = 0;

    while (val - arr[i] > 0 && i < 9){
      i++;
    }
    return bins[i-1];
    }

    var updateStats = function(newStats){
      statsObj = newStats;
    }

    paymentStats.formatData = function(data,recipientStats,recipientNames){

      //convert names and stats from back end into a hashmap for sorting payment data points into d3 buckets
      for (var key in recipientNames) {
        if (recipientNames.hasOwnProperty(key) && !isNaN(key)) {
          recipientNamesMap[recipientNames[key]._id] = recipientNames[key].value;
        }
      }

      console.log("this is recipientNamesMap: ", recipientNamesMap)

      for (var key in recipientStats) {
        if (recipientStats.hasOwnProperty(key) && !isNaN(key)) {
          recipientStatsMap[recipientStats[key]._id] = findBin(recipientStats[key].value);
        }
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
        return str.match(/(?:^|(?:[.!?]\s))(\w+)/)[0].toUpperCase();
      }

      //format each data point for d3 and push into appropriate visualization bin
      for (var i = 0, max = data.length; i<max; i++){
        var bin = dataObj[recipientStatsMap[data[i].recipient_profile_ID]];
        var bin_mfr = dataObj_mfr[recipientStatsMap[data[i].recipient_profile_ID]];
        if (data[i].drugs.length){
          for(var j = 0, max2 = data[i].drugs.length; j<max2; j++){
            
            //aggregate mfr_drug payment values into single node-link pairs
            var mfr = data[i].submitting_mfr, drug = data[i].drugs[j], amount = data[i].amount_USD/max2;
          

            if (bin_mfr[mfr] === undefined){
              bin_mfr[mfr] = {};
            };

            if (bin_mfr[mfr][drug] === undefined){
              bin_mfr[mfr][drug] = 0;
            };
            bin_mfr[mfr][drug] += amount;
            
            var obj1 = {};

            if (recipientNamesMap[data[i].recipient_profile_ID] === undefined){
            console.log("this is data[i].recipient_profile_ID inside paymentStats: ", data[i].recipient_profile_ID)
            console.log("this is recipientNamesMap[data[i].recipient_profile_ID] inside paymentStats: ", recipientNamesMap[data[i].recipient_profile_ID])
          }

            obj1["source"] = data[i].drugs[j];
            obj1["sourceType"] = "drug";
            // obj1["target"] = data[i].recipient_profile_ID;
            obj1["target"] = recipientNamesMap[data[i].recipient_profile_ID];
            obj1["targetType"] = "recipient";
            // obj1["recipient_fullName"] = recipientNames[data[i].recipient_profile_ID];
            obj1["value"] = data[i].amount_USD/max2;
            obj1["linkType"] = "drug_recipient";
            // if(obj1.target !== null){obj1.target = obj1.target.toString()}

            bin.push(obj1)
          }
        }
        if (data[i].drugs.length === 0) { 
        var obj2 = {};
        obj2["source"] = formatMfr(data[i].submitting_mfr);
        obj2["sourceType"] = "mfr";
        obj2["mfr_fullName"] = data[i].submitting_mfr;
        // obj2["target"] = data[i].recipient_profile_ID;
        obj2["target"] = recipientNamesMap[data[i].recipient_profile_ID];
        obj2["targetType"] = "recipient";
        // obj2["recipient_fullName"] = recipientNames[data[i].recipient_profile_ID];
        obj2["value"] = data[i].amount_USD;
        obj2["linkType"] = "mfr_recipient";
        // if(obj2.target !== null){obj2.target = obj2.target.toString()}
        bin.push(obj2); 
      }
    }

    for (var binKey in dataObj_mfr) {
      if (dataObj_mfr.hasOwnProperty(binKey)) {
        var bin = dataObj_mfr[binKey]

        for (var mfrKey in bin) {
          if (bin.hasOwnProperty(mfrKey)) {
            var drugBin = bin[mfrKey];

            for (var drugKey in drugBin) {
              if (drugBin.hasOwnProperty(drugKey)) {
                var amount = drugBin[drugKey];

                var newLink = {};
                newLink["source"] = formatMfr(mfrKey);
                newLink["sourceType"] = "mfr";
                newLink["mfr_fullName"] = mfrKey;
                newLink["target"] = drugKey;
                newLink["targetType"] = "drug";
                newLink["value"] = amount;
                newLink["linkType"] = "mfr_drug";

                dataObj[binKey].push(newLink);
              }
            }
          }
        }
      }
    }
    
    //create front-end object to signal show/hide status of visualization bins 
    var binObj = {};

      for (var key in dataObj) {
        if (dataObj.hasOwnProperty(key) && dataObj[key].length > 0) {
          binObj[key] = true;
        } else {
          binObj[key] = false;
        }
      }

      return binObj;
    }
    return {
      paymentStats: paymentStats,
      countyInfo: countyInfo,
      recipientStats: recipientStats,
      recipientNames: recipientNames,
      dataObj: dataObj,
      recipientStatsMap: recipientStatsMap
    };
  });
