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
      console.log("this is statsObj test: ", statsObj)
      statsObj = newStats;
    }

    paymentStats.formatData = function(data,recipientStats){

      //convert stats from back end into a hashmap for sorting payment data points into d3 buckets
      var recipientStatsMap = {};
      for (var key in recipientStats) {
        if (recipientStats.hasOwnProperty(key) && !isNaN(key)) {
          recipientStatsMap[recipientStats[key]._id] = findBin(recipientStats[key].value);
        }
      }

      //format each data point for d3 and push into appropriate visualization bin
      for (var i = 0, max = data.length; i<max; i++){
        var bin = dataObj[recipientStatsMap[data[i].recipient_profile_ID]];
        if (data[i].drugs.length){
          for(var j = 0, max2 = data[i].drugs.length; j<max2; j++){
            var obj1 = {};
            var obj2 = {};
            obj1["source"] = data[i].submitting_mfr;
            obj1["target"] = data[i].drugs[j];
            obj1["value"] = data[i].amount_USD/max2;
            obj2["source"] = data[i].drugs[j];
            obj2["target"] = data[i].recipient_profile_ID;
            obj2["value"] = data[i].amount_USD/max2;
            if(obj2.target !== null){obj2.target = obj2.target.toString()}

            bin.push(obj1);
            bin.push(obj2)
          }
        }
        if (data[i].drugs.length === 0) { 
        var obj = {};
        obj["source"] = data[i].submitting_mfr;
        obj["target"] = data[i].recipient_profile_ID;
        obj["value"] = data[i].amount_USD;
        if(obj.target !== null){obj.target = obj.target.toString()}
        bin.push(obj); 
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

      console.log("this is dataObj in the paymentStats factory: ", dataObj)
      console.log("this is binObj in the paymentStats factory: ", binObj)

      return binObj;
    }
    return {paymentStats: paymentStats, recipientStats: recipientStats, dataObj: dataObj};
  });
