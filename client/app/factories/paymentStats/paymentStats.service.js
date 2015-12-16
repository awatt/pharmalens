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

    var dataObj = {},
        recipientStatsMap = {},
        recipientNamesMap = {};

    var findBin = function(val){
      var bins = ['0to500', '500to1k', '1to5k', '5to10k', '10to25k', '25to50k', '50to100k', '100to200k', 'over200k'],
          arr = [0, 500, 1000, 5000, 10000, 25000, 50000, 100000, 200000],
          i = 0
      while (val - arr[i] > 0 && i < 9){
        i++;
      }
      return bins[i-1];
    }

    paymentStats.formatData = function(data,recipientStats,recipientNames){

        //clear out global objects
        for (var key in dataObj){delete dataObj[key]};
        for (var key in recipientStatsMap){delete recipientStatsMap[key]};
        for (var key in recipientNamesMap){delete recipientNamesMap[key]};
          
    var dataObj_mfr = {},
        dataObj_drug = {},
        dataObj_direct = {},
        dataObj_misc = {},
        allBins = [],
        highBins = ['5to10k', '10to25k', '25to50k', '50to100k', '100to200k', 'over200k'];

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


      //convert names and stats from back end into a hashmap for sorting payment data points into d3 buckets
      for (var key in recipientNames) {
        if (recipientNames.hasOwnProperty(key) && !isNaN(key)) {
          recipientNamesMap[recipientNames[key]._id] = recipientNames[key].value;
        }
      }

      for (var key in recipientStats) {
        if (recipientStats.hasOwnProperty(key) && !isNaN(key)) {
          
          var bin = findBin(recipientStats[key].value);
          var recipientKey = recipientNamesMap[recipientStats[key]._id];
          recipientStatsMap[recipientKey] = bin;

          //create separate bin property for each recipient recieving over $5k in a year
          if (highBins.indexOf(bin) > -1){
            dataObj[recipientKey] = [];
            dataObj_mfr[recipientKey] = {};
            dataObj_drug[recipientKey] = {};
            dataObj_direct[recipientKey] = {};
            dataObj_misc[recipientKey] = {};
            allBins.push(recipientKey);
          } else {
            if(dataObj[bin] === undefined){
              dataObj[bin] = [];
              dataObj_mfr[bin] = {};
              dataObj_drug[bin] = {};
              dataObj_direct[bin] = {};
              allBins.push(bin);
            }
          }
        }
      }

      //format each data point for d3 and push into appropriate visualization bin
      for (var i = 0, max = data.length; i<max; i++){

        var miscSwitch = -1,
            recipient = recipientNamesMap[data[i].recipient_profile_ID],
            recipientBin = recipientStatsMap[recipient],
            objectBin;

        //if the recipient of the data point recieved > $5k in the year, allocate the data to personal bin
        if (highBins.indexOf(recipientBin) > -1){
          objectBin = recipient;
        } else {
          objectBin = recipientBin;          
        }

        var bin = dataObj[objectBin],
            bin_mfr = dataObj_mfr[objectBin],
            bin_drug = dataObj_drug[objectBin],
            bin_direct = dataObj_direct[objectBin],
            bin_misc = dataObj_misc[objectBin],
            mfr = data[i].submitting_mfr,
            drugs = data[i].drugs,
            amount = data[i].amount_USD/data[i].drugs.length,
            nature = data[i].nature_of_payment;

        
        // if ((recipientBin === '5to10k' && amount < 25) ||
        //     (recipientBin === '10to25k' && amount < 50) ||
        //     (recipientBin === '25to50k' && amount < 100) ||
        //     (recipientBin === '50to100k' && amount < 150) ||
        //     (recipientBin === '100to200k' && amount < 250) ||
        //     (recipientBin === 'over200k' && amount < 500)){

        if(objectBin === recipient && amount < 50){

        //   console.log("this is recipient, recipientBin past the misc hurdle: ", recipient + " " + recipientBin);
        // console.log("this is data[i] past the misc hurdle: ", data[i])
          //misc logic here
          if (bin_misc[recipient] === undefined){
            bin_misc[recipient] = {};
            bin_misc[recipient]['value'] = 0;
            bin_misc[recipient]['mfrs'] = [];
            bin_misc[recipient]['drugs'] = [];
            bin_misc[recipient]['natures'] = [];
          };

          // console.log("this is bin_misc[recipient].value: ", bin_misc[recipient].value)

          bin_misc[recipient].value += data[i].amount_USD;

          if (bin_misc[recipient].mfrs.indexOf(mfr) < 0){
            bin_misc[recipient].mfrs.push(mfr);
          }

          if (bin_misc[recipient].natures.indexOf(nature) < 0){
            bin_misc[recipient].natures.push(nature);
          }

          for (var k=0, max3=drugs.length; k<max3; k++){
            if (bin_misc[recipient].drugs.indexOf(drugs[k]) < 0){
              bin_misc[recipient].drugs.push(drugs[k]);  
            }
          }
          // console.log("this is dataObj_misc before debugger: ", dataObj_misc);
          // console.log("this is bin_misc before debugger: ", bin_misc);

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

    // console.log("this is dataObj_drug just before harvesting: ", dataObj_drug)

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
                    newLink["target"] = recipientKey;
                    newLink["targetType"] = "recipient";
                    newLink["value"] = amount;
                    newLink["nature"] = natureKey;
                    newLink["linkType"] = "drug_recipient";

                    // console.log("this is newLink in dataObj_drug: ", newLink)

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
                    newLink["target"] = recipientKey;
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

    console.log("this is dataObj_misc just before harvesting: ", dataObj_misc)

    for (var binKey in dataObj_misc) {
      if (dataObj_misc.hasOwnProperty(binKey)) {
        var bin = dataObj_misc[binKey]

        for (var recipientKey in bin) {
          if (bin.hasOwnProperty(recipientKey)) {
            var recipientBin = bin[recipientKey];

            // for (var recipientKey in recipientBin) {
            //   if (recipientBin.hasOwnProperty(recipientKey)) {
            //     var recipient = recipientBin[recipientKey];

                // console.log("this is bin: ", bin)
                // console.log("this is recipientBin: ", recipientBin)

                
                    var newLink = {};
                    newLink["source"] = "Miscellaneous";
                    newLink["sourceType"] = "mfr";
                    newLink["target"] = recipientKey;
                    newLink["targetType"] = "recipient";
                    newLink["value"] = recipientBin.value;
                    newLink["mfrs"] = recipientBin.mfrs;
                    newLink["drugs"] = recipientBin.drugs;
                    newLink["natures"] = recipientBin.natures;
                    newLink["linkType"] = "mfr_recipient";

                    // console.log("this is newLink in dataObj_misc: ", newLink)

                    dataObj[binKey].push(newLink);

            //   }
            // }
          }
        }
      }
    }

      return allBins;
    }

    return {
      paymentStats: paymentStats,
      countyInfo: countyInfo,
      recipientStats: recipientStats,
      recipientNames: recipientNames,
      dataObj: dataObj,
      recipientStatsMap: recipientStatsMap,
      recipientNamesMap: recipientNamesMap
    };
  });
