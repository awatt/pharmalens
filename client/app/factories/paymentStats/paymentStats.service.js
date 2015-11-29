'use strict';

angular.module('foglightApp')
  .factory('paymentStats', function ($resource) {

    var paymentStats = $resource('api/payments/FIPS/:FIPS', {FIPS: '@FIPS'}, {
      update: {
        method: 'PUT'
      }
    });

    paymentStats.formatData = function(data){
      console.log(data)

      var arr = []
      for (var i = 0, max = data.length; i<max; i++){
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

            arr.push(obj1);
            arr.push(obj2)
          }
        }
        if (data[i].drugs.length === 0) { 
        var obj = {};
        obj["source"] = data[i].submitting_mfr;
        obj["target"] = data[i].recipient_profile_ID;
        obj["value"] = data[i].amount_USD;
        if(obj.target !== null){obj.target = obj.target.toString()}
        arr.push(obj); 
      }
    }
    console.log(arr)
      return arr;
    }
    return paymentStats;
  });


// var User = $resource('/user/:userId', {userId:'@id'});
// User.get({userId:123})
//     .$promise.then(function(user) {
//       $scope.user = user;
//     });