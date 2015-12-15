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
        '1to5k': []
      };

    var dataObj_mfr = {
        '0to500': {},
        '500to1k': {},
        '1to5k': {}
      };

    var dataObj_drug = {
        '0to500': {},
        '500to1k': {},
        '1to5k': {}
      };

    var dataObj_direct = {
        '0to500': {},
        '500to1k': {},
        '1to5k': {}
      };

    var dataObj_misc = {
        '0to500': {},
        '500to1k': {},
        '1to5k': {}
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

      console.log("this is recipientStats: ", recipientStats)

      var highBins = ['5to10k', '10to25k', '25to50k', '50to100k', '100to200k', 'over200k'];

      //convert names and stats from back end into a hashmap for sorting payment data points into d3 buckets
      for (var key in recipientNames) {
        if (recipientNames.hasOwnProperty(key) && !isNaN(key)) {
          recipientNamesMap[recipientNames[key]._id] = recipientNames[key].value;
        }
      }

      for (var key in recipientStats) {
        if (recipientStats.hasOwnProperty(key) && !isNaN(key)) {
          
          var bin = findBin(recipientStats[key].value);
          var recipientKey = recipientStats[key]._id;
          recipientStatsMap[recipientKey] = bin;

          //create separate bin property for each recipient recieving over $5k in a year
          if (highBins.indexOf(bin) > -1){
            dataObj[recipientKey] = [];
            dataObj_mfr[recipientKey] = {};
            dataObj_drug[recipientKey] = {};
            dataObj_direct[recipientKey] = {};
            dataObj_misc[recipientKey] = {};
          }
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

        var miscSwitch = -1,
        recipient = data[i].recipient_profile_ID,
        recipientBin = recipientStatsMap[recipient],
        objectBin

        //if the recipient of the data point recieved > $5k in the year, allocate the data to personal bin
        if (highBins.indexOf(recipientBin) > -1){
          objectBin = recipient;
        } else {
          objectBin = recipientBin;          
        }

        // if(dataObj[objectBin] === undefined){
        //   dataObj[objectBin] = {};
        // }

        var bin = dataObj[objectBin],
        bin_mfr = dataObj_mfr[objectBin],
        bin_drug = dataObj_drug[objectBin],
        bin_direct = dataObj_direct[objectBin],
        bin_misc = dataObj_misc[objectBin],
        mfr = data[i].submitting_mfr,
        drugs = data[i].drugs,
        amount = data[i].amount_USD/data[i].drugs.length,
        nature = data[i].nature_of_payment
        
        if ((recipientBin === '5to10k' && amount < 25) ||
          (recipientBin === '10to25k' && amount < 50) ||
          (recipientBin === '25to50k' && amount < 100) ||
          (recipientBin === '50to100k' && amount < 150) ||
          (recipientBin === '100to200k' && amount < 250) ||
          (recipientBin === 'over200k' && amount < 500)){

          //misc logic here
          if (bin_misc[recipient] === undefined){
            bin_misc[recipient] = {
              'amount': 0,
              'mfrs': [],
              'drugs': [],
              'natures': []
            };
          };

          bin_misc[recipient]['amount'] += amount;

          console.log("this is bin_misc[recipient]: ", bin_misc[recipient])

          if (bin_misc[recipient]['mfrs'].indexOf(mfr) > -1){
            bin_misc[recipient]['mfrs'].push(mfr);
          }

          if (bin_misc[recipient]['natures'].indexOf(nature) > -1){
            bin_misc[recipient]['natures'].push(nature);
          }

          for (var j=0, max=drugs.length; j<max; j++){
            if (bin_misc[recipient]['drugs'].indexOf(drugs[j]) > -1){
              bin_misc[recipient]['drugs'].push(drugs[j]);  
            }
          }
          miscSwitch = 1;
        }

        if (drugs.length && miscSwitch < 0){
          for(var j = 0, max2 = drugs.length; j<max2; j++){

            var drug = drugs[j];
            
            //aggregate mfr_drug payment values into single node-link pairs
            if (bin_mfr[mfr] === undefined){
              bin_mfr[mfr] = {};
            };

            if (bin_mfr[mfr][drug] === undefined){
              bin_mfr[mfr][drug] = 0;
            };
            bin_mfr[mfr][drug] += amount;
            
            if (bin_drug[drug] === undefined){
              bin_drug[drug] = {};
            };

            if (bin_drug[drug][recipient] === undefined){
              bin_drug[drug][recipient] = {};
            };

            if (bin_drug[drug][recipient][nature] === undefined){
              bin_drug[drug][recipient][nature] = 0;
            };
            bin_drug[drug][recipient][nature] += amount;

          }
        }
        if (drugs.length === 0 && miscSwitch < 0) { 

          if (bin_direct[mfr] === undefined){
            bin_direct[mfr] = {};
          };

          if (bin_direct[mfr][recipient] === undefined){
            bin_direct[mfr][recipient] = {};
          };

          if (bin_direct[mfr][recipient][nature] === undefined){
            bin_direct[mfr][recipient][nature] = 0;
          };
          bin_direct[mfr][recipient][nature] += amount;

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

    for (var binKey in dataObj_drug) {
      if (dataObj_drug.hasOwnProperty(binKey)) {
        var bin = dataObj_drug[binKey]

        for (var drugKey in bin) {
          if (bin.hasOwnProperty(drugKey)) {
            var drugBin = bin[drugKey];

            for (var recipientKey in drugBin) {
              if (drugBin.hasOwnProperty(recipientKey)) {
                var recipientBin = drugBin[recipientKey];

                for (var natureKey in recipientBin){
                  if (recipientBin.hasOwnProperty(natureKey)){
                    var amount = recipientBin[natureKey];
                
                    var newLink = {};
                    newLink["source"] = drugKey;
                    newLink["sourceType"] = "drug";
                    newLink["target"] = recipientNamesMap[recipientKey];
                    newLink["targetType"] = "recipient";
                    newLink["value"] = amount;
                    newLink["nature"] = natureKey;
                    newLink["linkType"] = "drug_recipient";

                    dataObj[binKey].push(newLink);

                  }
                }
              }
            }
          }
        }
      }
    }

    for (var binKey in dataObj_direct) {
      if (dataObj_direct.hasOwnProperty(binKey)) {
        var bin = dataObj_direct[binKey]

        for (var mfrKey in bin) {
          if (bin.hasOwnProperty(mfrKey)) {
            var mfrBin = bin[mfrKey];

            for (var recipientKey in mfrBin) {
              if (mfrBin.hasOwnProperty(recipientKey)) {
                var recipientBin = mfrBin[recipientKey];

                for (var natureKey in recipientBin){
                  if (recipientBin.hasOwnProperty(natureKey)){
                    var amount = recipientBin[natureKey];
                
                    var newLink = {};
                    newLink["source"] = formatMfr(mfrKey);
                    newLink["sourceType"] = "mfr";
                    newLink["target"] = recipientNamesMap[recipientKey];
                    newLink["targetType"] = "recipient";
                    newLink["value"] = amount;
                    newLink["nature"] = natureKey;
                    newLink["linkType"] = "mfr_recipient";

                    dataObj[binKey].push(newLink);

                  }
                }
              }
            }
          }
        }
      }
    }

    for (var binKey in dataObj_misc) {
      if (dataObj_misc.hasOwnProperty(binKey)) {
        var bin = dataObj_misc[binKey]

        for (var recipientKey in bin) {
          if (bin.hasOwnProperty(recipientKey)) {
            var recipientBin = bin[recipientKey];

            for (var recipientKey in recipientBin) {
              if (recipientBin.hasOwnProperty(recipientKey)) {
                var recipient = recipientBin[recipientKey];
                
                    var newLink = {};
                    newLink["source"] = "Miscellaneous";
                    newLink["sourceType"] = "mfr";
                    newLink["target"] = recipientNamesMap[recipientKey];
                    newLink["targetType"] = "recipient";
                    newLink["value"] = amount;
                    newLink["mfrs"] = recipient['mfrs'];
                    newLink["drugs"] = recipient['drugs'];
                    newLink["natures"] = recipient['natures'];
                    newLink["linkType"] = "mfr_recipient";

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
