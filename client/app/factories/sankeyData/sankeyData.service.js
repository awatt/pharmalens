'use strict';

angular.module('foglightApp')
  .factory('sankeyData', function () {

var sankeyData = [
  {
    "source":"Barry",
    "target":"Elvis",
    "value": 2
  },
  {
    "source":"Frodo",
    "target":"Elvis",
    "value": 2
  },
  {
    "source":"Frodo",
    "target":"Sarah",
    "value": 2
  },
  {
    "source":"Barry",
    "target":"Alice",
    "value": 2
  },
  {
    "source":"Elvis",
    "target":"Sarah",
    "value": 2
  },
  {
    "source":"Elvis",
    "target":"Alice",
    "value": 2
  },
  {
    "source":"Sarah",
    "target":"Alice",
    "value": 4
  }
]
    return sankeyData;

  });
