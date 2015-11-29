'use strict';

angular.module('foglightApp')
  .factory('sankeyData', function () {

var sankeyData = [
  {
    source: "AstraZeneca Pharmaceuticals LP",
    target: "42394",
    value: 17.99
  },
  {
    source: "AstraZeneca Pharmaceuticals LP",
    target: "82459",
    value: 15.58
  },
  {
      source: "Animas Corporation",
      target: "82459",
      value: 14.29
  }
  //   {
  //   source: "AstraZeneca Pharmaceuticals LP",
  //   target: 42394,
  //   value: 17.99
  // },
  //   {
  //   source: "AstraZeneca Pharmaceuticals LP",
  //   target: 42394,
  //   value: 17.99
  // }
  // {
  //   "source":"Barry",
  //   "target":"Elvis",
  //   "value": 2
  // },
  // {
  //   "source":"Frodo",
  //   "target":"Elvis",
  //   "value": 3
  // },
  // {
  //   "source":"Frodo",
  //   "target":"Sarah",
  //   "value": 2
  // },
  // {
  //   "source":"Barry",
  //   "target":"Alice",
  //   "value": 2
  // },
  // {
  //   "source":"Frodo",
  //   "target":"Alice",
  //   "value": 1
  // },
  // {
  //   "source":"Elvis",
  //   "target":"Sarah",
  //   "value": 2
  // },
  // {
  //   "source":"Barry",
  //   "target":"Sarah",
  //   "value": 3  
  // },
  // {
  //   "source":"Barry",
  //   "target":"Tinkles",
  //   "value": 3
  // },
  // {
  //   "source":"Sarah",
  //   "target":"Tinkles",
  //   "value": 2  
  // },
  // {
  //   "source":"Barry",
  //   "target":"Tinkles",
  //   "value": 2  
  // },
  // {
  //   "source":"Elvis",
  //   "target":"Alice",
  //   "value": 2
  // },
  // {
  //   "source":"Sarah",
  //   "target":"Alice",
  //   "value": 5
  // }
]
    return sankeyData;

  });
