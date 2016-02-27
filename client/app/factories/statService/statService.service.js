'use strict';

angular.module('foglightApp')
  .factory('statService', function () {

   var dataObj = {},
   recipientStatsMap = {},
        bins = ["less than $500", "btw $500 - $1,000", "btw $1,000 - $5,000", '5to10k', '10to25k', '25to50k', '50to100k', '100to200k', 'over200k']

    var findBin = function(val){
      var arr = [0, 500, 1000, 5000, 10000, 25000, 50000, 100000, 200000],
          i = 0
      while (val - arr[i] > 0 && i < 9){
        i++;
      }
      return bins[i-1];
    }

    var formatBins = function(newLowBins, newIndivBins){
        var lowBins = bins.slice(0,3),
            newBins = []

            //pull and sort lower three bin categories and put them first for display
            for (var i = 0, max = lowBins.length; i<max; i++){
              if (newLowBins.indexOf(lowBins[i]) >= 0){
                newBins.push({ bin: lowBins[i], rawAmount: 0 });
              }
            }
            newIndivBins.sort(function (a, b) {
                if (a.rawAmount > b.rawAmount) {
                  return 1;
                }
                if (a.rawAmount < b.rawAmount) {
                  return -1;
                }
            return 0;
            });
            for (var i = 0, max = newIndivBins.length; i<max; i++){
              newBins.push(newIndivBins[i]);
            }
            return newBins;
    }

   

    var formatData = function(data,recipientStats,recipientNames){
      
        //clear out global objects
        for (var key in dataObj){delete dataObj[key]};
        for (var key in recipientStatsMap){delete recipientStatsMap[key]};
          
    var dataObj_mfr = {},
        dataObj_drug = {},
        dataObj_direct = {},
        dataObj_misc = {},
        newLowBins = [],
        newIndivBins = [],
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
          if(str === "Rapid Pathogen Screening, Inc."){return "RAPID PATHOGEN"};
          if(str === "Dr.Reddy's Laboratories,Inc."){return "DR. REDDY'S"};
          return str.match(/(?:^|(?:[.!?]\s))(\w+)/)[0].toUpperCase();
        }

        var deDupe = function(arr){
         return arr.filter(function(elem, pos) {
          return arr.indexOf(elem) == pos;
        }); 
       }

      for (var key in recipientStats) {
        if (recipientStats.hasOwnProperty(key) && !isNaN(key)) {
          var rawAmount = recipientStats[key];
          var bin;
          if (recipientStats.length === 1){
            bin = findBin(10000);
          } else {
           bin = findBin(rawAmount);
          }
          var recipientKey = recipientNames[key];
          recipientStatsMap[recipientKey] = bin;

          //create separate bin property for each recipient recieving over $5k in a year
          if (highBins.indexOf(bin) > -1){
            dataObj[recipientKey] = [];
            dataObj_mfr[recipientKey] = {};
            dataObj_drug[recipientKey] = {};
            dataObj_direct[recipientKey] = {};
            dataObj_misc[recipientKey] = {};
            newIndivBins.push({bin: recipientKey, rawAmount: rawAmount});
          } else {
            if(dataObj[bin] === undefined){
              dataObj[bin] = [];
              dataObj_mfr[bin] = {};
              dataObj_drug[bin] = {};
              dataObj_direct[bin] = {};
              newLowBins.push(bin);
            }
          }
        }
      }

      //format each data point for d3 and push into appropriate visualization bin
      for (var i = 0, max = data.length; i<max; i++){

        var miscSwitch = -1,
            recipient = recipientNames[data[i].recipient_profile_ID],
            recipientBin = recipientStatsMap[recipient],
            objectBin;

        //if the recipient of the data point recieved > $5k in the year, allocate the data to personal bin
        if (highBins.indexOf(recipientBin) > -1){
          objectBin = recipient;
        } else {
          objectBin = recipientBin;          
        }

        var getTestAmount = function(totalAmount, drugsArr){
          if (drugsArr.length){
            return totalAmount/drugsArr.length;
          }
          return totalAmount;
        }

        var bin = dataObj[objectBin],
            bin_mfr = dataObj_mfr[objectBin],
            bin_drug = dataObj_drug[objectBin],
            bin_direct = dataObj_direct[objectBin],
            bin_misc = dataObj_misc[objectBin],
            mfr = data[i].submitting_mfr,
            drugs = data[i].drugs,
            testAmount = getTestAmount(data[i].amount_USD, data[i].drugs),
            amount = data[i].amount_USD,
            nature = data[i].nature_of_payment;

        //filter out smaller payments to aggregate in misc bin
        if ((recipientBin === '5to10k' && testAmount < 50) ||
            (recipientBin === '10to25k' && testAmount < 100) ||
            (recipientBin === '25to50k' && testAmount < 150) ||
            (recipientBin === '50to100k' && testAmount < 200) ||
            (recipientBin === '100to200k' && testAmount < 350) ||
            (recipientBin === 'over200k' && testAmount < 500)){

          //misc logic here
          if (bin_misc[recipient] === undefined){
            bin_misc[recipient] = {};
            bin_misc[recipient]['value'] = 0;
            bin_misc[recipient]['mfrs'] = [];
            bin_misc[recipient]['drugs'] = [];
            bin_misc[recipient]['natures'] = [];
          };

          bin_misc[recipient].value += amount;

          if (bin_misc[recipient].mfrs.indexOf(mfr) < 0){
            bin_misc[recipient].mfrs.push(formatMfr(mfr));
          }

          if (bin_misc[recipient].natures.indexOf(nature) < 0){
            bin_misc[recipient].natures.push(nature);
          }

          for (var k=0, max2=drugs.length; k<max2; k++){
            if (bin_misc[recipient].drugs.indexOf(drugs[k]) < 0){
              bin_misc[recipient].drugs.push(drugs[k]);  
            }
          }

          miscSwitch = 1;
        }

        if (drugs.length && miscSwitch < 0){
          for(var j = 0, max3 = drugs.length; j<max3; j++){

            var drug = drugs[j];
            
            //aggregate mfr_drug payment values into single node-link pairs
            if (bin_mfr[mfr] === undefined){
              bin_mfr[mfr] = {};
            };

            if (bin_mfr[mfr][drug] === undefined){
              bin_mfr[mfr][drug] = 0;
            };
            bin_mfr[mfr][drug] += testAmount;
            
            if (bin_drug[drug] === undefined){
              bin_drug[drug] = {};
            };

            if (bin_drug[drug][recipient] === undefined){
              bin_drug[drug][recipient] = {};
            };

            if (bin_drug[drug][recipient][nature] === undefined){
              bin_drug[drug][recipient][nature] = 0;
            };
            bin_drug[drug][recipient][nature] += testAmount;

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
                var value = drugBin[drugKey];

                var newLink = {};
                newLink["source"] = formatMfr(mfrKey);
                newLink["sourceType"] = "mfr";
                newLink["mfr_fullName"] = mfrKey;
                newLink["target"] = drugKey;
                newLink["targetType"] = "drug";
                newLink["value"] = value;
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
                    var value = recipientBin[natureKey];
                
                    var newLink = {};
                    newLink["source"] = drugKey;
                    newLink["sourceType"] = "drug";
                    newLink["target"] = recipientKey;
                    newLink["targetType"] = "recipient";
                    newLink["value"] = value;
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
                    var value = recipientBin[natureKey];
                
                    var newLink = {};
                    newLink["source"] = formatMfr(mfrKey);
                    newLink["sourceType"] = "mfr";
                    newLink["target"] = recipientKey;
                    newLink["targetType"] = "recipient";
                    newLink["value"] = value;
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
                
                    var newLink = {};
                    newLink["source"] = "Miscellaneous";
                    newLink["sourceType"] = "mfr_and_drug";
                    newLink["target"] = recipientKey;
                    newLink["targetType"] = "recipient";
                    newLink["value"] = recipientBin.value;
                    newLink["mfrs"] = deDupe(recipientBin.mfrs);
                    newLink["drugs"] = deDupe(recipientBin.drugs);
                    newLink["natures"] = deDupe(recipientBin.natures);
                    newLink["linkType"] = "misc_recipient";

                    dataObj[binKey].push(newLink);
          }
        }
      }
    }
      var formattedBins = formatBins(newLowBins, newIndivBins);
      return formattedBins;
    }

    return {
      formatData: formatData,
      dataObj: dataObj
    };
  });
