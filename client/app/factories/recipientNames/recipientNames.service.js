'use strict';

angular.module('foglightApp')
  .factory('recipientNames', function ($resource) {

    var recipientNames = $resource('api/physicians/FIPS/RecipientNames/:FIPS', {FIPS: '@FIPS'}, {
      update: {
        method: 'PUT'
      }
    });

    return recipientNames;
  });
