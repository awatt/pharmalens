'use strict';

angular.module('foglightApp')
  .factory('diabetes', function () {

  //diabetes data for choropleth countymap rendering 
    var diabetes = [
  {
    "state":"AK",
    "FIPS":2013,
    "number":214,
    "rate":7.8,
    "population":3320,
    "county":"Aleutians East Borough"
  },
  {
    "state":"AK",
    "FIPS":2016,
    "number":297,
    "rate":6.3,
    "population":5671,
    "county":"Aleutians West Census Area"
  },
  {
    "state":"AK",
    "FIPS":2020,
    "number":15195,
    "rate":7.1,
    "population":298633,
    "county":"Municipality of Anchorage"
  },
  {
    "state":"AK",
    "FIPS":2050,
    "number":658,
    "rate":6.1,
    "population":17687,
    "county":"Bethel Census Area"
  },
  {
    "state":"AK",
    "FIPS":2060,
    "number":64,
    "rate":8.8,
    "population":984,
    "county":"Bristol Bay Borough"
  },
  {
    "state":"AK",
    "FIPS":2068,
    "number":83,
    "rate":5.8,
    "population":1906,
    "county":"Denali Borough"
  },
  {
    "state":"AK",
    "FIPS":2070,
    "number":237,
    "rate":7.4,
    "population":4968,
    "county":"Dillingham Census Area"
  },
  {
    "state":"AK",
    "FIPS":2090,
    "number":4129,
    "rate":5.7,
    "population":100227,
    "county":"Fairbanks North Star Borough"
  },
  {
    "state":"AK",
    "FIPS":2100,
    "number":140,
    "rate":7,
    "population":2572,
    "county":"Haines Borough"
  },
  {
    "state":"AK",
    "FIPS":2105,
    "number":135,
    "rate":8.1,
    "population":2140,
    "county":"Hoonah-Angoon Borough"
  },
  {
    "state":"AK",
    "FIPS":2110,
    "number":1487,
    "rate":6.1,
    "population":32411,
    "county":"Juneau Borough"
  },
  {
    "state":"AK",
    "FIPS":2122,
    "number":2994,
    "rate":7.1,
    "population":56958,
    "county":"Kenai Peninsula Borough"
  },
  {
    "state":"AK",
    "FIPS":2130,
    "number":891,
    "rate":8.7,
    "population":13709,
    "county":"Ketchikan Gateway Borough"
  },
  {
    "state":"AK",
    "FIPS":2150,
    "number":585,
    "rate":5.9,
    "population":14075,
    "county":"Kodiak Island Borough"
  },
  {
    "state":"AK",
    "FIPS":2164,
    "number":88,
    "rate":8,
    "population":1643,
    "county":"Lake and Peninsula Borough"
  },
  {
    "state":"AK",
    "FIPS":2170,
    "number":5238,
    "rate":8.1,
    "population":93798,
    "county":"Matanuska-Susitna Borough"
  },
  {
    "state":"AK",
    "FIPS":2180,
    "number":426,
    "rate":6.9,
    "population":9873,
    "county":"Nome Census Area"
  },
  {
    "state":"AK",
    "FIPS":2185,
    "number":518,
    "rate":7.4,
    "population":9655,
    "county":"North Slope Borough"
  },
  {
    "state":"AK",
    "FIPS":2188,
    "number":324,
    "rate":6.8,
    "population":7709,
    "county":"Northwest Arctic Borough"
  },
  {
    "state":"AK",
    "FIPS":2195,
    "number":201,
    "rate":7,
    "population":3241,
    "county":"Petersburg Borough"
  },
  {
    "state":"AK",
    "FIPS":2198,
    "number":323,
    "rate":7.7,
    "population":6387,
    "county":"Prince of Wales-Outer Ketchikan Borough"
  },
  {
    "state":"AK",
    "FIPS":2220,
    "number":502,
    "rate":7.4,
    "population":9060,
    "county":"Sitka Borough"
  },
  {
    "state":"AK",
    "FIPS":2230,
    "number":56,
    "rate":6.7,
    "population":994,
    "county":"Skagway Borough"
  },
  {
    "state":"AK",
    "FIPS":2240,
    "number":333,
    "rate":6.5,
    "population":7149,
    "county":"Southeast Fairbanks Census Area"
  },
  {
    "state":"AK",
    "FIPS":2261,
    "number":472,
    "rate":6.7,
    "population":9736,
    "county":"Valdez-Cordova Census Area"
  },
  {
    "state":"AK",
    "FIPS":2270,
    "number":232,
    "rate":5.4,
    "population":7795,
    "county":"Wade Hampton Census Area"
  },
  {
    "state":"AK",
    "FIPS":2275,
    "number":159,
    "rate":8.7,
    "population":2398,
    "county":"Wrangell Borough"
  },
  {
    "state":"AK",
    "FIPS":2282,
    "number":39,
    "rate":7.9,
    "population":651,
    "county":"Yakutat Borough"
  },
  {
    "state":"AK",
    "FIPS":2290,
    "number":328,
    "rate":8.1,
    "population":5731,
    "county":"Yukon-Koyukuk Census Area"
  },
  {
    "state":"AL",
    "FIPS":1001,
    "number":4724,
    "rate":12,
    "population":55192,
    "county":"Autauga County"
  },
  {
    "state":"AL",
    "FIPS":1003,
    "number":15437,
    "rate":10.8,
    "population":190561,
    "county":"Baldwin County"
  },
  {
    "state":"AL",
    "FIPS":1005,
    "number":3377,
    "rate":16.2,
    "population":27169,
    "county":"Barbour County"
  },
  {
    "state":"AL",
    "FIPS":1007,
    "number":2276,
    "rate":13.2,
    "population":22634,
    "county":"Bibb County"
  },
  {
    "state":"AL",
    "FIPS":1009,
    "number":5869,
    "rate":13.8,
    "population":57748,
    "county":"Blount County"
  },
  {
    "state":"AL",
    "FIPS":1011,
    "number":1527,
    "rate":18.6,
    "population":10589,
    "county":"Bullock County"
  },
  {
    "state":"AL",
    "FIPS":1013,
    "number":2507,
    "rate":16.4,
    "population":20409,
    "county":"Butler County"
  },
  {
    "state":"AL",
    "FIPS":1015,
    "number":12582,
    "rate":14.3,
    "population":117264,
    "county":"Calhoun County"
  },
  {
    "state":"AL",
    "FIPS":1017,
    "number":4102,
    "rate":15.8,
    "population":34087,
    "county":"Chambers County"
  },
  {
    "state":"AL",
    "FIPS":1019,
    "number":2993,
    "rate":14.9,
    "population":26017,
    "county":"Cherokee County"
  },
  {
    "state":"AL",
    "FIPS":1021,
    "number":4234,
    "rate":13.2,
    "population":43709,
    "county":"Chilton County"
  },
  {
    "state":"AL",
    "FIPS":1023,
    "number":1960,
    "rate":18.9,
    "population":13559,
    "county":"Choctaw County"
  },
  {
    "state":"AL",
    "FIPS":1025,
    "number":2948,
    "rate":15.8,
    "population":25168,
    "county":"Clarke County"
  },
  {
    "state":"AL",
    "FIPS":1027,
    "number":1455,
    "rate":14.3,
    "population":13465,
    "county":"Clay County"
  },
  {
    "state":"AL",
    "FIPS":1029,
    "number":1484,
    "rate":13.3,
    "population":14918,
    "county":"Cleburne County"
  },
  {
    "state":"AL",
    "FIPS":1031,
    "number":5313,
    "rate":14,
    "population":51217,
    "county":"Coffee County"
  },
  {
    "state":"AL",
    "FIPS":1033,
    "number":6928,
    "rate":16.8,
    "population":54473,
    "county":"Colbert County"
  },
  {
    "state":"AL",
    "FIPS":1035,
    "number":1746,
    "rate":17.8,
    "population":13005,
    "county":"Conecuh County"
  },
  {
    "state":"AL",
    "FIPS":1037,
    "number":1441,
    "rate":16.7,
    "population":11181,
    "county":"Coosa County"
  },
  {
    "state":"AL",
    "FIPS":1039,
    "number":4435,
    "rate":15.5,
    "population":37809,
    "county":"Covington County"
  },
  {
    "state":"AL",
    "FIPS":1041,
    "number":1604,
    "rate":15.4,
    "population":13972,
    "county":"Crenshaw County"
  },
  {
    "state":"AL",
    "FIPS":1043,
    "number":8293,
    "rate":13.7,
    "population":80361,
    "county":"Cullman County"
  },
  {
    "state":"AL",
    "FIPS":1045,
    "number":5358,
    "rate":14.5,
    "population":50310,
    "county":"Dale County"
  },
  {
    "state":"AL",
    "FIPS":1047,
    "number":5347,
    "rate":17.5,
    "population":42839,
    "county":"Dallas County"
  },
  {
    "state":"AL",
    "FIPS":1049,
    "number":7716,
    "rate":15,
    "population":70930,
    "county":"Dekalb County"
  },
  {
    "state":"AL",
    "FIPS":1051,
    "number":7530,
    "rate":12.6,
    "population":80392,
    "county":"Elmore County"
  },
  {
    "state":"AL",
    "FIPS":1053,
    "number":4630,
    "rate":16.1,
    "population":38048,
    "county":"Escambia County"
  },
  {
    "state":"AL",
    "FIPS":1055,
    "number":11804,
    "rate":15.1,
    "population":104324,
    "county":"Etowah County"
  },
  {
    "state":"AL",
    "FIPS":1057,
    "number":2045,
    "rate":15.8,
    "population":16982,
    "county":"Fayette County"
  },
  {
    "state":"AL",
    "FIPS":1059,
    "number":3121,
    "rate":13.5,
    "population":31660,
    "county":"Franklin County"
  },
  {
    "state":"AL",
    "FIPS":1061,
    "number":2996,
    "rate":14.7,
    "population":27002,
    "county":"Geneva County"
  },
  {
    "state":"AL",
    "FIPS":1063,
    "number":1379,
    "rate":21,
    "population":8827,
    "county":"Greene County"
  },
  {
    "state":"AL",
    "FIPS":1065,
    "number":1956,
    "rate":17.2,
    "population":15390,
    "county":"Hale County"
  },
  {
    "state":"AL",
    "FIPS":1067,
    "number":2188,
    "rate":16.7,
    "population":17248,
    "county":"Henry County"
  },
  {
    "state":"AL",
    "FIPS":1069,
    "number":10657,
    "rate":14,
    "population":103368,
    "county":"Houston County"
  },
  {
    "state":"AL",
    "FIPS":1071,
    "number":5735,
    "rate":14.3,
    "population":53048,
    "county":"Jackson County"
  },
  {
    "state":"AL",
    "FIPS":1073,
    "number":60238,
    "rate":12.3,
    "population":657953,
    "county":"Jefferson County"
  },
  {
    "state":"AL",
    "FIPS":1075,
    "number":1748,
    "rate":16.1,
    "population":14255,
    "county":"Lamar County"
  },
  {
    "state":"AL",
    "FIPS":1077,
    "number":9158,
    "rate":13,
    "population":92694,
    "county":"Lauderdale County"
  },
  {
    "state":"AL",
    "FIPS":1079,
    "number":3977,
    "rate":15.7,
    "population":33776,
    "county":"Lawrence County"
  },
  {
    "state":"AL",
    "FIPS":1081,
    "number":10552,
    "rate":9.7,
    "population":148040,
    "county":"Lee County"
  },
  {
    "state":"AL",
    "FIPS":1085,
    "number":1880,
    "rate":23.5,
    "population":10864,
    "county":"Lowndes County"
  },
  {
    "state":"AL",
    "FIPS":1087,
    "number":2708,
    "rate":17.8,
    "population":20470,
    "county":"Macon County"
  },
  {
    "state":"AL",
    "FIPS":1083,
    "number":7745,
    "rate":11.9,
    "population":87363,
    "county":"Limestone County"
  },
  {
    "state":"AL",
    "FIPS":1089,
    "number":29744,
    "rate":11.7,
    "population":342868,
    "county":"Madison County"
  },
  {
    "state":"AL",
    "FIPS":1091,
    "number":2778,
    "rate":18.5,
    "population":20443,
    "county":"Marengo County"
  },
  {
    "state":"AL",
    "FIPS":1093,
    "number":3884,
    "rate":16.6,
    "population":30516,
    "county":"Marion County"
  },
  {
    "state":"AL",
    "FIPS":1095,
    "number":9247,
    "rate":13.5,
    "population":94303,
    "county":"Marshall County"
  },
  {
    "state":"AL",
    "FIPS":1097,
    "number":41997,
    "rate":13.9,
    "population":413955,
    "county":"Mobile County"
  },
  {
    "state":"AL",
    "FIPS":1099,
    "number":2660,
    "rate":16.1,
    "population":22609,
    "county":"Monroe County"
  },
  {
    "state":"AL",
    "FIPS":1101,
    "number":22734,
    "rate":13.8,
    "population":229426,
    "county":"Montgomery County"
  },
  {
    "state":"AL",
    "FIPS":1103,
    "number":12160,
    "rate":13.6,
    "population":120057,
    "county":"Morgan County"
  },
  {
    "state":"AL",
    "FIPS":1105,
    "number":1285,
    "rate":17.9,
    "population":10172,
    "county":"Perry County"
  },
  {
    "state":"AL",
    "FIPS":1107,
    "number":2584,
    "rate":17.8,
    "population":19344,
    "county":"Pickens County"
  },
  {
    "state":"AL",
    "FIPS":1109,
    "number":3468,
    "rate":14,
    "population":33128,
    "county":"Pike County"
  },
  {
    "state":"AL",
    "FIPS":1111,
    "number":2718,
    "rate":16.1,
    "population":22657,
    "county":"Randolph County"
  },
  {
    "state":"AL",
    "FIPS":1113,
    "number":5782,
    "rate":13.9,
    "population":57736,
    "county":"Russell County"
  },
  {
    "state":"AL",
    "FIPS":1117,
    "number":12622,
    "rate":8.6,
    "population":200963,
    "county":"Shelby County"
  },
  {
    "state":"AL",
    "FIPS":1115,
    "number":8222,
    "rate":13,
    "population":85165,
    "county":"St. Clair County"
  },
  {
    "state":"AL",
    "FIPS":1119,
    "number":1589,
    "rate":16,
    "population":13411,
    "county":"Sumter County"
  },
  {
    "state":"AL",
    "FIPS":1121,
    "number":8356,
    "rate":13.6,
    "population":81858,
    "county":"Talladega County"
  },
  {
    "state":"AL",
    "FIPS":1123,
    "number":4502,
    "rate":14.4,
    "population":41156,
    "county":"Tallapoosa County"
  },
  {
    "state":"AL",
    "FIPS":1125,
    "number":16403,
    "rate":11.2,
    "population":198643,
    "county":"Tuscaloosa County"
  },
  {
    "state":"AL",
    "FIPS":1127,
    "number":7742,
    "rate":15.5,
    "population":66125,
    "county":"Walker County"
  },
  {
    "state":"AL",
    "FIPS":1129,
    "number":2050,
    "rate":16.3,
    "population":17088,
    "county":"Washington County"
  },
  {
    "state":"AL",
    "FIPS":1131,
    "number":1645,
    "rate":20.1,
    "population":11386,
    "county":"Wilcox County"
  },
  {
    "state":"AL",
    "FIPS":1133,
    "number":2268,
    "rate":12.2,
    "population":24185,
    "county":"Winston County"
  },
  {
    "state":"AR",
    "FIPS":5001,
    "number":1829,
    "rate":13,
    "population":18994,
    "county":"Arkansas County"
  },
  {
    "state":"AR",
    "FIPS":5003,
    "number":2135,
    "rate":13.4,
    "population":21497,
    "county":"Ashley County"
  },
  {
    "state":"AR",
    "FIPS":5005,
    "number":4364,
    "rate":13.2,
    "population":41077,
    "county":"Baxter County"
  },
  {
    "state":"AR",
    "FIPS":5007,
    "number":16401,
    "rate":10,
    "population":232739,
    "county":"Benton County"
  },
  {
    "state":"AR",
    "FIPS":5009,
    "number":3403,
    "rate":12.2,
    "population":37333,
    "county":"Boone County"
  },
  {
    "state":"AR",
    "FIPS":5011,
    "number":1057,
    "rate":12.5,
    "population":11298,
    "county":"Bradley County"
  },
  {
    "state":"AR",
    "FIPS":5013,
    "number":540,
    "rate":12.9,
    "population":5299,
    "county":"Calhoun County"
  },
  {
    "state":"AR",
    "FIPS":5015,
    "number":2616,
    "rate":12.5,
    "population":27598,
    "county":"Carroll County"
  },
  {
    "state":"AR",
    "FIPS":5017,
    "number":1399,
    "rate":16.4,
    "population":11458,
    "county":"Chicot County"
  },
  {
    "state":"AR",
    "FIPS":5019,
    "number":1933,
    "rate":11.5,
    "population":22822,
    "county":"Clark County"
  },
  {
    "state":"AR",
    "FIPS":5021,
    "number":1330,
    "rate":11.2,
    "population":15580,
    "county":"Clay County"
  },
  {
    "state":"AR",
    "FIPS":5023,
    "number":2759,
    "rate":13.7,
    "population":25778,
    "county":"Cleburne County"
  },
  {
    "state":"AR",
    "FIPS":5025,
    "number":916,
    "rate":14.4,
    "population":8615,
    "county":"Cleveland County"
  },
  {
    "state":"AR",
    "FIPS":5027,
    "number":2226,
    "rate":12.6,
    "population":24401,
    "county":"Columbia County"
  },
  {
    "state":"AR",
    "FIPS":5029,
    "number":1984,
    "rate":12.6,
    "population":21216,
    "county":"Conway County"
  },
  {
    "state":"AR",
    "FIPS":5031,
    "number":8765,
    "rate":12.2,
    "population":99903,
    "county":"Craighead County"
  },
  {
    "state":"AR",
    "FIPS":5033,
    "number":4959,
    "rate":11.1,
    "population":61933,
    "county":"Crawford County"
  },
  {
    "state":"AR",
    "FIPS":5035,
    "number":5381,
    "rate":15.6,
    "population":50070,
    "county":"Crittenden County"
  },
  {
    "state":"AR",
    "FIPS":5037,
    "number":1749,
    "rate":13.6,
    "population":17654,
    "county":"Cross County"
  },
  {
    "state":"AR",
    "FIPS":5039,
    "number":843,
    "rate":14.1,
    "population":7965,
    "county":"Dallas County"
  },
  {
    "state":"AR",
    "FIPS":5041,
    "number":1296,
    "rate":14.4,
    "population":12574,
    "county":"Desha County"
  },
  {
    "state":"AR",
    "FIPS":5043,
    "number":1695,
    "rate":12.4,
    "population":18775,
    "county":"Drew County"
  },
  {
    "state":"AR",
    "FIPS":5045,
    "number":9247,
    "rate":10.8,
    "population":118529,
    "county":"Faulkner County"
  },
  {
    "state":"AR",
    "FIPS":5047,
    "number":1673,
    "rate":12.7,
    "population":17942,
    "county":"Franklin County"
  },
  {
    "state":"AR",
    "FIPS":5049,
    "number":1316,
    "rate":13.9,
    "population":12241,
    "county":"Fulton County"
  },
  {
    "state":"AR",
    "FIPS":5051,
    "number":10348,
    "rate":13.9,
    "population":96837,
    "county":"Garland County"
  },
  {
    "state":"AR",
    "FIPS":5053,
    "number":1448,
    "rate":10.9,
    "population":18035,
    "county":"Grant County"
  },
  {
    "state":"AR",
    "FIPS":5055,
    "number":4318,
    "rate":13.8,
    "population":43158,
    "county":"Greene County"
  },
  {
    "state":"AR",
    "FIPS":5057,
    "number":2265,
    "rate":14.2,
    "population":22325,
    "county":"Hempstead County"
  },
  {
    "state":"AR",
    "FIPS":5059,
    "number":3054,
    "rate":12.1,
    "population":33386,
    "county":"Hot Spring County"
  },
  {
    "state":"AR",
    "FIPS":5061,
    "number":1183,
    "rate":12,
    "population":13710,
    "county":"Howard County"
  },
  {
    "state":"AR",
    "FIPS":5063,
    "number":3164,
    "rate":11.7,
    "population":36905,
    "county":"Independence County"
  },
  {
    "state":"AR",
    "FIPS":5065,
    "number":1385,
    "rate":12.9,
    "population":13506,
    "county":"Izard County"
  },
  {
    "state":"AR",
    "FIPS":5067,
    "number":1724,
    "rate":12.7,
    "population":17640,
    "county":"Jackson County"
  },
  {
    "state":"AR",
    "FIPS":5071,
    "number":2368,
    "rate":12.7,
    "population":25864,
    "county":"Johnson County"
  },
  {
    "state":"AR",
    "FIPS":5069,
    "number":8230,
    "rate":15,
    "population":74580,
    "county":"Jefferson County"
  },
  {
    "state":"AR",
    "FIPS":5073,
    "number":864,
    "rate":15.3,
    "population":7431,
    "county":"Lafayette County"
  },
  {
    "state":"AR",
    "FIPS":5075,
    "number":1533,
    "rate":12.1,
    "population":17039,
    "county":"Lawrence County"
  },
  {
    "state":"AR",
    "FIPS":5077,
    "number":1032,
    "rate":13.1,
    "population":10190,
    "county":"Lee County"
  },
  {
    "state":"AR",
    "FIPS":5079,
    "number":1248,
    "rate":11.1,
    "population":14149,
    "county":"Lincoln County"
  },
  {
    "state":"AR",
    "FIPS":5081,
    "number":1225,
    "rate":12.8,
    "population":12905,
    "county":"Little River County"
  },
  {
    "state":"AR",
    "FIPS":5083,
    "number":2074,
    "rate":12.7,
    "population":22005,
    "county":"Logan County"
  },
  {
    "state":"AR",
    "FIPS":5085,
    "number":6221,
    "rate":12.6,
    "population":70087,
    "county":"Lonoke County"
  },
  {
    "state":"AR",
    "FIPS":5087,
    "number":1467,
    "rate":12.7,
    "population":15636,
    "county":"Madison County"
  },
  {
    "state":"AR",
    "FIPS":5089,
    "number":1648,
    "rate":12.3,
    "population":16595,
    "county":"Marion County"
  },
  {
    "state":"AR",
    "FIPS":5091,
    "number":3792,
    "rate":11.8,
    "population":43617,
    "county":"Miller County"
  },
  {
    "state":"AR",
    "FIPS":5093,
    "number":4699,
    "rate":14.7,
    "population":45550,
    "county":"Mississippi County"
  },
  {
    "state":"AR",
    "FIPS":5095,
    "number":986,
    "rate":16.5,
    "population":7840,
    "county":"Monroe County"
  },
  {
    "state":"AR",
    "FIPS":5097,
    "number":907,
    "rate":12.5,
    "population":9315,
    "county":"Montgomery County"
  },
  {
    "state":"AR",
    "FIPS":5099,
    "number":926,
    "rate":13.9,
    "population":8903,
    "county":"Nevada County"
  },
  {
    "state":"AR",
    "FIPS":5101,
    "number":740,
    "rate":11.7,
    "population":8084,
    "county":"Newton County"
  },
  {
    "state":"AR",
    "FIPS":5103,
    "number":2535,
    "rate":13.4,
    "population":25411,
    "county":"Ouachita County"
  },
  {
    "state":"AR",
    "FIPS":5105,
    "number":944,
    "rate":12.1,
    "population":10326,
    "county":"Perry County"
  },
  {
    "state":"AR",
    "FIPS":5107,
    "number":2206,
    "rate":15.2,
    "population":20772,
    "county":"Phillips County"
  },
  {
    "state":"AR",
    "FIPS":5109,
    "number":1015,
    "rate":12.3,
    "population":11266,
    "county":"Pike County"
  },
  {
    "state":"AR",
    "FIPS":5111,
    "number":2267,
    "rate":12.7,
    "population":24325,
    "county":"Poinsett County"
  },
  {
    "state":"AR",
    "FIPS":5113,
    "number":1946,
    "rate":12.8,
    "population":20440,
    "county":"Polk County"
  },
  {
    "state":"AR",
    "FIPS":5115,
    "number":5387,
    "rate":11.8,
    "population":62717,
    "county":"Pope County"
  },
  {
    "state":"AR",
    "FIPS":5117,
    "number":886,
    "rate":13.6,
    "population":8446,
    "county":"Prairie County"
  },
  {
    "state":"AR",
    "FIPS":5119,
    "number":32251,
    "rate":11.2,
    "population":389058,
    "county":"Pulaski County"
  },
  {
    "state":"AR",
    "FIPS":5121,
    "number":1480,
    "rate":11,
    "population":17851,
    "county":"Randolph County"
  },
  {
    "state":"AR",
    "FIPS":5125,
    "number":8689,
    "rate":10.5,
    "population":111668,
    "county":"Saline County"
  },
  {
    "state":"AR",
    "FIPS":5127,
    "number":986,
    "rate":12.3,
    "population":11007,
    "county":"Scott County"
  },
  {
    "state":"AR",
    "FIPS":5129,
    "number":799,
    "rate":12.8,
    "population":7995,
    "county":"Searcy County"
  },
  {
    "state":"AR",
    "FIPS":5131,
    "number":11806,
    "rate":12.8,
    "population":127370,
    "county":"Sebastian County"
  },
  {
    "state":"AR",
    "FIPS":5133,
    "number":1434,
    "rate":12.2,
    "population":17174,
    "county":"Sevier County"
  },
  {
    "state":"AR",
    "FIPS":5135,
    "number":1691,
    "rate":12.9,
    "population":17053,
    "county":"Sharp County"
  },
  {
    "state":"AR",
    "FIPS":5123,
    "number":2841,
    "rate":13.7,
    "population":27883,
    "county":"St. Francis County"
  },
  {
    "state":"AR",
    "FIPS":5137,
    "number":1286,
    "rate":13.2,
    "population":12628,
    "county":"Stone County"
  },
  {
    "state":"AR",
    "FIPS":5139,
    "number":3963,
    "rate":13.1,
    "population":40904,
    "county":"Union County"
  },
  {
    "state":"AR",
    "FIPS":5141,
    "number":1805,
    "rate":13.6,
    "population":17155,
    "county":"Van Buren County"
  },
  {
    "state":"AR",
    "FIPS":5143,
    "number":11726,
    "rate":7.9,
    "population":211734,
    "county":"Washington County"
  },
  {
    "state":"AR",
    "FIPS":5145,
    "number":5751,
    "rate":10.1,
    "population":78652,
    "county":"White County"
  },
  {
    "state":"AR",
    "FIPS":5147,
    "number":741,
    "rate":13.9,
    "population":7071,
    "county":"Woodruff County"
  },
  {
    "state":"AR",
    "FIPS":5149,
    "number":1948,
    "rate":12.3,
    "population":21811,
    "county":"Yell County"
  },
  {
    "state":"AZ",
    "FIPS":4001,
    "number":7363,
    "rate":15.3,
    "population":72911,
    "county":"Apache County"
  },
  {
    "state":"AZ",
    "FIPS":4003,
    "number":9600,
    "rate":9.8,
    "population":131919,
    "county":"Cochise County"
  },
  {
    "state":"AZ",
    "FIPS":4005,
    "number":7304,
    "rate":7.5,
    "population":135949,
    "county":"Coconino County"
  },
  {
    "state":"AZ",
    "FIPS":4007,
    "number":4801,
    "rate":11.8,
    "population":53027,
    "county":"Gila County"
  },
  {
    "state":"AZ",
    "FIPS":4009,
    "number":2504,
    "rate":9.9,
    "population":36945,
    "county":"Graham County"
  },
  {
    "state":"AZ",
    "FIPS":4011,
    "number":552,
    "rate":9.2,
    "population":8775,
    "county":"Greenlee County"
  },
  {
    "state":"AZ",
    "FIPS":4012,
    "number":2235,
    "rate":13.7,
    "population":20289,
    "county":"La Paz County"
  },
  {
    "state":"AZ",
    "FIPS":4013,
    "number":240523,
    "rate":8.5,
    "population":3942868,
    "county":"Maricopa County"
  },
  {
    "state":"AZ",
    "FIPS":4015,
    "number":18913,
    "rate":11.9,
    "population":203174,
    "county":"Mohave County"
  },
  {
    "state":"AZ",
    "FIPS":4017,
    "number":9105,
    "rate":12.4,
    "population":106973,
    "county":"Navajo County"
  },
  {
    "state":"AZ",
    "FIPS":4019,
    "number":62949,
    "rate":8.5,
    "population":993094,
    "county":"Pima County"
  },
  {
    "state":"AZ",
    "FIPS":4021,
    "number":34897,
    "rate":12.5,
    "population":388106,
    "county":"Pinal County"
  },
  {
    "state":"AZ",
    "FIPS":4023,
    "number":2183,
    "rate":6.9,
    "population":47433,
    "county":"Santa Cruz County"
  },
  {
    "state":"AZ",
    "FIPS":4025,
    "number":17618,
    "rate":10.4,
    "population":212509,
    "county":"Yavapai County"
  },
  {
    "state":"AZ",
    "FIPS":4027,
    "number":15046,
    "rate":10.7,
    "population":202264,
    "county":"Yuma County"
  },
  {
    "state":"CA",
    "FIPS":6001,
    "number":96007,
    "rate":8.2,
    "population":1556249,
    "county":"Alameda County"
  },
  {
    "state":"CA",
    "FIPS":6003,
    "number":91,
    "rate":10.4,
    "population":1127,
    "county":"Alpine County"
  },
  {
    "state":"CA",
    "FIPS":6005,
    "number":2785,
    "rate":9.1,
    "population":37072,
    "county":"Amador County"
  },
  {
    "state":"CA",
    "FIPS":6007,
    "number":16176,
    "rate":9.7,
    "population":221279,
    "county":"Butte County"
  },
  {
    "state":"CA",
    "FIPS":6009,
    "number":3411,
    "rate":9.6,
    "population":44774,
    "county":"Calaveras County"
  },
  {
    "state":"CA",
    "FIPS":6011,
    "number":1334,
    "rate":9.2,
    "population":21397,
    "county":"Colusa County"
  },
  {
    "state":"CA",
    "FIPS":6013,
    "number":71764,
    "rate":9.1,
    "population":1079358,
    "county":"Contra Costa County"
  },
  {
    "state":"CA",
    "FIPS":6015,
    "number":1950,
    "rate":9,
    "population":28226,
    "county":"Del Norte County"
  },
  {
    "state":"CA",
    "FIPS":6017,
    "number":10808,
    "rate":7.9,
    "population":180605,
    "county":"El Dorado County"
  },
  {
    "state":"CA",
    "FIPS":6019,
    "number":57294,
    "rate":8.9,
    "population":948240,
    "county":"Fresno County"
  },
  {
    "state":"CA",
    "FIPS":6021,
    "number":1694,
    "rate":8.7,
    "population":27938,
    "county":"Glenn County"
  },
  {
    "state":"CA",
    "FIPS":6023,
    "number":9265,
    "rate":9,
    "population":134680,
    "county":"Humboldt County"
  },
  {
    "state":"CA",
    "FIPS":6025,
    "number":9717,
    "rate":8.1,
    "population":177443,
    "county":"Imperial County"
  },
  {
    "state":"CA",
    "FIPS":6027,
    "number":1410,
    "rate":9.9,
    "population":18416,
    "county":"Inyo County"
  },
  {
    "state":"CA",
    "FIPS":6029,
    "number":51580,
    "rate":9,
    "population":856502,
    "county":"Kern County"
  },
  {
    "state":"CA",
    "FIPS":6031,
    "number":8347,
    "rate":7.9,
    "population":151340,
    "county":"Kings County"
  },
  {
    "state":"CA",
    "FIPS":6033,
    "number":5171,
    "rate":10.5,
    "population":63984,
    "county":"Lake County"
  },
  {
    "state":"CA",
    "FIPS":6035,
    "number":2068,
    "rate":7.6,
    "population":33679,
    "county":"Lassen County"
  },
  {
    "state":"CA",
    "FIPS":6037,
    "number":618803,
    "rate":8.5,
    "population":9974868,
    "county":"Los Angeles County"
  },
  {
    "state":"CA",
    "FIPS":6039,
    "number":8696,
    "rate":8.3,
    "population":152244,
    "county":"Madera County"
  },
  {
    "state":"CA",
    "FIPS":6041,
    "number":13658,
    "rate":6.9,
    "population":256143,
    "county":"Marin County"
  },
  {
    "state":"CA",
    "FIPS":6043,
    "number":1489,
    "rate":10.3,
    "population":17845,
    "county":"Mariposa County"
  },
  {
    "state":"CA",
    "FIPS":6045,
    "number":5636,
    "rate":8.5,
    "population":87497,
    "county":"Mendocino County"
  },
  {
    "state":"CA",
    "FIPS":6047,
    "number":15394,
    "rate":8.9,
    "population":261783,
    "county":"Merced County"
  },
  {
    "state":"CA",
    "FIPS":6049,
    "number":699,
    "rate":9.8,
    "population":9332,
    "county":"Modoc County"
  },
  {
    "state":"CA",
    "FIPS":6051,
    "number":808,
    "rate":7.3,
    "population":14306,
    "county":"Mono County"
  },
  {
    "state":"CA",
    "FIPS":6053,
    "number":21381,
    "rate":7.1,
    "population":426411,
    "county":"Monterey County"
  },
  {
    "state":"CA",
    "FIPS":6055,
    "number":8106,
    "rate":7.8,
    "population":139135,
    "county":"Napa County"
  },
  {
    "state":"CA",
    "FIPS":6057,
    "number":5661,
    "rate":7.2,
    "population":98333,
    "county":"Nevada County"
  },
  {
    "state":"CA",
    "FIPS":6059,
    "number":174950,
    "rate":7.7,
    "population":3089893,
    "county":"Orange County"
  },
  {
    "state":"CA",
    "FIPS":6061,
    "number":21280,
    "rate":8,
    "population":361446,
    "county":"Placer County"
  },
  {
    "state":"CA",
    "FIPS":6063,
    "number":1440,
    "rate":9.3,
    "population":19341,
    "county":"Plumas County"
  },
  {
    "state":"CA",
    "FIPS":6065,
    "number":146853,
    "rate":9.3,
    "population":2268019,
    "county":"Riverside County"
  },
  {
    "state":"CA",
    "FIPS":6067,
    "number":87701,
    "rate":8.3,
    "population":1448771,
    "county":"Sacramento County"
  },
  {
    "state":"CA",
    "FIPS":6069,
    "number":2849,
    "rate":7.2,
    "population":56871,
    "county":"San Benito County"
  },
  {
    "state":"CA",
    "FIPS":6071,
    "number":131498,
    "rate":9.2,
    "population":2080651,
    "county":"San Bernardino County"
  },
  {
    "state":"CA",
    "FIPS":6073,
    "number":171503,
    "rate":7.3,
    "population":3183413,
    "county":"San Diego County"
  },
  {
    "state":"CA",
    "FIPS":6075,
    "number":51351,
    "rate":7.3,
    "population":829691,
    "county":"San Francisco County"
  },
  {
    "state":"CA",
    "FIPS":6077,
    "number":51190,
    "rate":10.7,
    "population":701635,
    "county":"San Joaquin County"
  },
  {
    "state":"CA",
    "FIPS":6079,
    "number":17259,
    "rate":8.2,
    "population":274528,
    "county":"San Luis Obispo County"
  },
  {
    "state":"CA",
    "FIPS":6081,
    "number":43949,
    "rate":7.8,
    "population":740738,
    "county":"San Mateo County"
  },
  {
    "state":"CA",
    "FIPS":6083,
    "number":20941,
    "rate":6.7,
    "population":430728,
    "county":"Santa Barbara County"
  },
  {
    "state":"CA",
    "FIPS":6085,
    "number":107945,
    "rate":8,
    "population":1841098,
    "county":"Santa Clara County"
  },
  {
    "state":"CA",
    "FIPS":6087,
    "number":12732,
    "rate":6.4,
    "population":266632,
    "county":"Santa Cruz County"
  },
  {
    "state":"CA",
    "FIPS":6089,
    "number":13137,
    "rate":9.7,
    "population":178421,
    "county":"Shasta County"
  },
  {
    "state":"CA",
    "FIPS":6091,
    "number":254,
    "rate":10.1,
    "population":3076,
    "county":"Sierra County"
  },
  {
    "state":"CA",
    "FIPS":6093,
    "number":2930,
    "rate":8.6,
    "population":44214,
    "county":"Siskiyou County"
  },
  {
    "state":"CA",
    "FIPS":6095,
    "number":31473,
    "rate":10.1,
    "population":420724,
    "county":"Solano County"
  },
  {
    "state":"CA",
    "FIPS":6097,
    "number":25600,
    "rate":6.9,
    "population":490838,
    "county":"Sonoma County"
  },
  {
    "state":"CA",
    "FIPS":6099,
    "number":33650,
    "rate":9.3,
    "population":522134,
    "county":"Stanislaus County"
  },
  {
    "state":"CA",
    "FIPS":6101,
    "number":5861,
    "rate":8.8,
    "population":94637,
    "county":"Sutter County"
  },
  {
    "state":"CA",
    "FIPS":6103,
    "number":4415,
    "rate":9.6,
    "population":63263,
    "county":"Tehama County"
  },
  {
    "state":"CA",
    "FIPS":6105,
    "number":1041,
    "rate":9.5,
    "population":13495,
    "county":"Trinity County"
  },
  {
    "state":"CA",
    "FIPS":6107,
    "number":21147,
    "rate":7.2,
    "population":451499,
    "county":"Tulare County"
  },
  {
    "state":"CA",
    "FIPS":6109,
    "number":4310,
    "rate":9.9,
    "population":54100,
    "county":"Tuolumne County"
  },
  {
    "state":"CA",
    "FIPS":6111,
    "number":44990,
    "rate":7.5,
    "population":835476,
    "county":"Ventura County"
  },
  {
    "state":"CA",
    "FIPS":6113,
    "number":9777,
    "rate":6.6,
    "population":204265,
    "county":"Yolo County"
  },
  {
    "state":"CA",
    "FIPS":6115,
    "number":4299,
    "rate":8.6,
    "population":72977,
    "county":"Yuba County"
  },
  {
    "state":"CO",
    "FIPS":8001,
    "number":22403,
    "rate":7,
    "population":460653,
    "county":"Adams County"
  },
  {
    "state":"CO",
    "FIPS":8003,
    "number":741,
    "rate":6.6,
    "population":16113,
    "county":"Alamosa County"
  },
  {
    "state":"CO",
    "FIPS":8005,
    "number":25428,
    "rate":5.9,
    "population":596051,
    "county":"Arapahoe County"
  },
  {
    "state":"CO",
    "FIPS":8007,
    "number":570,
    "rate":6,
    "population":12129,
    "county":"Archuleta County"
  },
  {
    "state":"CO",
    "FIPS":8009,
    "number":236,
    "rate":8.2,
    "population":3756,
    "county":"Baca County"
  },
  {
    "state":"CO",
    "FIPS":8011,
    "number":318,
    "rate":6.8,
    "population":5807,
    "county":"Bent County"
  },
  {
    "state":"CO",
    "FIPS":8013,
    "number":10179,
    "rate":4.5,
    "population":305483,
    "county":"Boulder County"
  },
  {
    "state":"CO",
    "FIPS":8014,
    "number":2475,
    "rate":5.8,
    "population":58992,
    "county":"Broomfield County"
  },
  {
    "state":"CO",
    "FIPS":8015,
    "number":967,
    "rate":6.5,
    "population":18103,
    "county":"Chaffee County"
  },
  {
    "state":"CO",
    "FIPS":8017,
    "number":97,
    "rate":7.2,
    "population":1887,
    "county":"Cheyenne County"
  },
  {
    "state":"CO",
    "FIPS":8019,
    "number":527,
    "rate":7.1,
    "population":9091,
    "county":"Clear Creek County"
  },
  {
    "state":"CO",
    "FIPS":8021,
    "number":380,
    "rate":6.6,
    "population":8273,
    "county":"Conejos County"
  },
  {
    "state":"CO",
    "FIPS":8023,
    "number":231,
    "rate":8.3,
    "population":3605,
    "county":"Costilla County"
  },
  {
    "state":"CO",
    "FIPS":8025,
    "number":285,
    "rate":6.2,
    "population":5412,
    "county":"Crowley County"
  },
  {
    "state":"CO",
    "FIPS":8027,
    "number":271,
    "rate":7.7,
    "population":4240,
    "county":"Custer County"
  },
  {
    "state":"CO",
    "FIPS":8029,
    "number":1836,
    "rate":7.9,
    "population":30449,
    "county":"Delta County"
  },
  {
    "state":"CO",
    "FIPS":8031,
    "number":30383,
    "rate":6.2,
    "population":633868,
    "county":"Denver County"
  },
  {
    "state":"CO",
    "FIPS":8033,
    "number":120,
    "rate":7.9,
    "population":1991,
    "county":"Dolores County"
  },
  {
    "state":"CO",
    "FIPS":8035,
    "number":9824,
    "rate":4.8,
    "population":298576,
    "county":"Douglas County"
  },
  {
    "state":"CO",
    "FIPS":8037,
    "number":1403,
    "rate":3.6,
    "population":51951,
    "county":"Eagle County"
  },
  {
    "state":"CO",
    "FIPS":8041,
    "number":30209,
    "rate":6.6,
    "population":645724,
    "county":"El Paso County"
  },
  {
    "state":"CO",
    "FIPS":8039,
    "number":960,
    "rate":5.6,
    "population":23432,
    "county":"Elbert County"
  },
  {
    "state":"CO",
    "FIPS":8043,
    "number":3048,
    "rate":8,
    "population":47114,
    "county":"Fremont County"
  },
  {
    "state":"CO",
    "FIPS":8045,
    "number":1915,
    "rate":4.8,
    "population":56777,
    "county":"Garfield County"
  },
  {
    "state":"CO",
    "FIPS":8047,
    "number":291,
    "rate":6.5,
    "population":5453,
    "county":"Gilpin County"
  },
  {
    "state":"CO",
    "FIPS":8049,
    "number":600,
    "rate":5.4,
    "population":14182,
    "county":"Grand County"
  },
  {
    "state":"CO",
    "FIPS":8051,
    "number":573,
    "rate":4.8,
    "population":15463,
    "county":"Gunnison County"
  },
  {
    "state":"CO",
    "FIPS":8053,
    "number":44,
    "rate":6.9,
    "population":801,
    "county":"Hinsdale County"
  },
  {
    "state":"CO",
    "FIPS":8055,
    "number":432,
    "rate":8,
    "population":6588,
    "county":"Huerfano County"
  },
  {
    "state":"CO",
    "FIPS":8057,
    "number":70,
    "rate":6.4,
    "population":1347,
    "county":"Jackson County"
  },
  {
    "state":"CO",
    "FIPS":8059,
    "number":22187,
    "rate":5.3,
    "population":545621,
    "county":"Jefferson County"
  },
  {
    "state":"CO",
    "FIPS":8061,
    "number":89,
    "rate":8.2,
    "population":1437,
    "county":"Kiowa County"
  },
  {
    "state":"CO",
    "FIPS":8063,
    "number":512,
    "rate":8.4,
    "population":8093,
    "county":"Kit Carson County"
  },
  {
    "state":"CO",
    "FIPS":8067,
    "number":2148,
    "rate":5.4,
    "population":52305,
    "county":"La Plata County"
  },
  {
    "state":"CO",
    "FIPS":8065,
    "number":269,
    "rate":5,
    "population":7274,
    "county":"Lake County"
  },
  {
    "state":"CO",
    "FIPS":8069,
    "number":11864,
    "rate":5.1,
    "population":310835,
    "county":"Larimer County"
  },
  {
    "state":"CO",
    "FIPS":8071,
    "number":810,
    "rate":7,
    "population":14986,
    "county":"Las Animas County"
  },
  {
    "state":"CO",
    "FIPS":8073,
    "number":332,
    "rate":7.8,
    "population":5446,
    "county":"Lincoln County"
  },
  {
    "state":"CO",
    "FIPS":8075,
    "number":1224,
    "rate":7.1,
    "population":22613,
    "county":"Logan County"
  },
  {
    "state":"CO",
    "FIPS":8077,
    "number":7932,
    "rate":7.3,
    "population":147724,
    "county":"Mesa County"
  },
  {
    "state":"CO",
    "FIPS":8079,
    "number":44,
    "rate":7.3,
    "population":709,
    "county":"Mineral County"
  },
  {
    "state":"CO",
    "FIPS":8081,
    "number":574,
    "rate":6.1,
    "population":13167,
    "county":"Moffat County"
  },
  {
    "state":"CO",
    "FIPS":8083,
    "number":1295,
    "rate":6.8,
    "population":25424,
    "county":"Montezuma County"
  },
  {
    "state":"CO",
    "FIPS":8085,
    "number":1966,
    "rate":6.5,
    "population":40722,
    "county":"Montrose County"
  },
  {
    "state":"CO",
    "FIPS":8087,
    "number":1589,
    "rate":8,
    "population":28355,
    "county":"Morgan County"
  },
  {
    "state":"CO",
    "FIPS":8089,
    "number":972,
    "rate":7.2,
    "population":18712,
    "county":"Otero County"
  },
  {
    "state":"CO",
    "FIPS":8091,
    "number":237,
    "rate":6.4,
    "population":4545,
    "county":"Ouray County"
  },
  {
    "state":"CO",
    "FIPS":8093,
    "number":823,
    "rate":6.3,
    "population":16043,
    "county":"Park County"
  },
  {
    "state":"CO",
    "FIPS":8095,
    "number":250,
    "rate":7.8,
    "population":4376,
    "county":"Phillips County"
  },
  {
    "state":"CO",
    "FIPS":8097,
    "number":693,
    "rate":4.9,
    "population":17232,
    "county":"Pitkin County"
  },
  {
    "state":"CO",
    "FIPS":8099,
    "number":614,
    "rate":7.1,
    "population":12405,
    "county":"Prowers County"
  },
  {
    "state":"CO",
    "FIPS":8101,
    "number":10990,
    "rate":9.3,
    "population":160840,
    "county":"Pueblo County"
  },
  {
    "state":"CO",
    "FIPS":8103,
    "number":291,
    "rate":6,
    "population":6793,
    "county":"Rio Grande County"
  },
  {
    "state":"",
    "FIPS":8105,
    "number":607,
    "rate":7,
    "population":null,
    "county":""
  },
  {
    "state":"CO",
    "FIPS":8107,
    "number":720,
    "rate":4,
    "population":23207,
    "county":"Routt County"
  },
  {
    "state":"CO",
    "FIPS":8109,
    "number":306,
    "rate":6.5,
    "population":6319,
    "county":"Saguache County"
  },
  {
    "state":"CO",
    "FIPS":8111,
    "number":36,
    "rate":6.2,
    "population":695,
    "county":"San Juan County"
  },
  {
    "state":"CO",
    "FIPS":8113,
    "number":288,
    "rate":4.8,
    "population":7604,
    "county":"San Miguel County"
  },
  {
    "state":"CO",
    "FIPS":8115,
    "number":153,
    "rate":8.2,
    "population":2377,
    "county":"Sedgwick County"
  },
  {
    "state":"CO",
    "FIPS":8117,
    "number":912,
    "rate":4,
    "population":28228,
    "county":"Summit County"
  },
  {
    "state":"CO",
    "FIPS":8119,
    "number":1082,
    "rate":5.9,
    "population":23376,
    "county":"Teller County"
  },
  {
    "state":"CO",
    "FIPS":8121,
    "number":248,
    "rate":6.9,
    "population":4736,
    "county":"Washington County"
  },
  {
    "state":"CO",
    "FIPS":8123,
    "number":11943,
    "rate":6.5,
    "population":264189,
    "county":"Weld County"
  },
  {
    "state":"CO",
    "FIPS":8125,
    "number":454,
    "rate":6.3,
    "population":10117,
    "county":"Yuma County"
  },
  {
    "state":"CT",
    "FIPS":9001,
    "number":54161,
    "rate":7.9,
    "population":935290,
    "county":"Fairfield County"
  },
  {
    "state":"CT",
    "FIPS":9003,
    "number":62845,
    "rate":9.3,
    "population":897698,
    "county":"Hartford County"
  },
  {
    "state":"CT",
    "FIPS":9005,
    "number":10400,
    "rate":7.2,
    "population":187415,
    "county":"Litchfield County"
  },
  {
    "state":"CT",
    "FIPS":9007,
    "number":10835,
    "rate":8.5,
    "population":165520,
    "county":"Middlesex County"
  },
  {
    "state":"CT",
    "FIPS":9009,
    "number":60796,
    "rate":9.4,
    "population":864031,
    "county":"New Haven County"
  },
  {
    "state":"CT",
    "FIPS":9011,
    "number":18491,
    "rate":8.8,
    "population":274544,
    "county":"New London County"
  },
  {
    "state":"CT",
    "FIPS":9013,
    "number":8060,
    "rate":7.1,
    "population":151925,
    "county":"Tolland County"
  },
  {
    "state":"CT",
    "FIPS":9015,
    "number":9123,
    "rate":10.3,
    "population":117939,
    "county":"Windham County"
  },
  {
    "state":"DC",
    "FIPS":11001,
    "number":40849,
    "rate":8.1,
    "population":635040,
    "county":"District of Columbia"
  },
  {
    "state":"DE",
    "FIPS":10001,
    "number":14990,
    "rate":12.3,
    "population":167666,
    "county":"Kent County"
  },
  {
    "state":"DE",
    "FIPS":10003,
    "number":36030,
    "rate":8.9,
    "population":546021,
    "county":"New Castle County"
  },
  {
    "state":"DE",
    "FIPS":10005,
    "number":19641,
    "rate":12.4,
    "population":203194,
    "county":"Sussex County"
  },
  {
    "state":"FL",
    "FIPS":12001,
    "number":15997,
    "rate":8.3,
    "population":251713,
    "county":"Alachua County"
  },
  {
    "state":"FL",
    "FIPS":12003,
    "number":2603,
    "rate":13.3,
    "population":27041,
    "county":"Baker County"
  },
  {
    "state":"FL",
    "FIPS":12007,
    "number":2973,
    "rate":14.1,
    "population":27132,
    "county":"Bradford County"
  },
  {
    "state":"FL",
    "FIPS":12005,
    "number":14720,
    "rate":11.2,
    "population":171994,
    "county":"Bay County"
  },
  {
    "state":"FL",
    "FIPS":12009,
    "number":51846,
    "rate":12,
    "population":547669,
    "county":"Brevard County"
  },
  {
    "state":"FL",
    "FIPS":12011,
    "number":129759,
    "rate":9.4,
    "population":1819773,
    "county":"Broward County"
  },
  {
    "state":"FL",
    "FIPS":12013,
    "number":1798,
    "rate":15.9,
    "population":14709,
    "county":"Calhoun County"
  },
  {
    "state":"FL",
    "FIPS":12015,
    "number":19831,
    "rate":14.4,
    "population":162792,
    "county":"Charlotte County"
  },
  {
    "state":"FL",
    "FIPS":12017,
    "number":15780,
    "rate":13.7,
    "population":139290,
    "county":"Citrus County"
  },
  {
    "state":"FL",
    "FIPS":12019,
    "number":17046,
    "rate":12.1,
    "population":194294,
    "county":"Clay County"
  },
  {
    "state":"FL",
    "FIPS":12021,
    "number":23644,
    "rate":9,
    "population":332873,
    "county":"Collier County"
  },
  {
    "state":"FL",
    "FIPS":12023,
    "number":6603,
    "rate":12.8,
    "population":67943,
    "county":"Columbia County"
  },
  {
    "state":"FL",
    "FIPS":12027,
    "number":3607,
    "rate":13.7,
    "population":34745,
    "county":"Desoto County"
  },
  {
    "state":"FL",
    "FIPS":12029,
    "number":1901,
    "rate":15,
    "population":16063,
    "county":"Dixie County"
  },
  {
    "state":"FL",
    "FIPS":12031,
    "number":70613,
    "rate":10.8,
    "population":880595,
    "county":"Duval County"
  },
  {
    "state":"FL",
    "FIPS":12033,
    "number":29315,
    "rate":12.9,
    "population":304214,
    "county":"Escambia County"
  },
  {
    "state":"FL",
    "FIPS":12035,
    "number":9365,
    "rate":12,
    "population":98510,
    "county":"Flagler County"
  },
  {
    "state":"FL",
    "FIPS":12037,
    "number":1054,
    "rate":11.1,
    "population":11671,
    "county":"Franklin County"
  },
  {
    "state":"FL",
    "FIPS":12039,
    "number":5893,
    "rate":16.8,
    "population":46653,
    "county":"Gadsden County"
  },
  {
    "state":"FL",
    "FIPS":12041,
    "number":1092,
    "rate":8.6,
    "population":16872,
    "county":"Gilchrist County"
  },
  {
    "state":"FL",
    "FIPS":12043,
    "number":1530,
    "rate":14.4,
    "population":13026,
    "county":"Glades County"
  },
  {
    "state":"FL",
    "FIPS":12045,
    "number":1489,
    "rate":11.5,
    "population":15670,
    "county":"Gulf County"
  },
  {
    "state":"FL",
    "FIPS":12047,
    "number":1506,
    "rate":13,
    "population":14699,
    "county":"Hamilton County"
  },
  {
    "state":"FL",
    "FIPS":12049,
    "number":2511,
    "rate":13,
    "population":27414,
    "county":"Hardee County"
  },
  {
    "state":"FL",
    "FIPS":12051,
    "number":3668,
    "rate":14.1,
    "population":37686,
    "county":"Hendry County"
  },
  {
    "state":"FL",
    "FIPS":12053,
    "number":18439,
    "rate":13.5,
    "population":173102,
    "county":"Hernando County"
  },
  {
    "state":"FL",
    "FIPS":12055,
    "number":11339,
    "rate":14.5,
    "population":98087,
    "county":"Highlands County"
  },
  {
    "state":"FL",
    "FIPS":12057,
    "number":99791,
    "rate":10.5,
    "population":1282032,
    "county":"Hillsborough County"
  },
  {
    "state":"FL",
    "FIPS":12059,
    "number":2264,
    "rate":14.8,
    "population":19725,
    "county":"Holmes County"
  },
  {
    "state":"FL",
    "FIPS":12061,
    "number":12919,
    "rate":11.5,
    "population":140608,
    "county":"Indian River County"
  },
  {
    "state":"FL",
    "FIPS":12063,
    "number":4393,
    "rate":11.4,
    "population":48980,
    "county":"Jackson County"
  },
  {
    "state":"FL",
    "FIPS":12065,
    "number":1391,
    "rate":12.2,
    "population":14193,
    "county":"Jefferson County"
  },
  {
    "state":"FL",
    "FIPS":12067,
    "number":849,
    "rate":12.5,
    "population":8802,
    "county":"Lafayette County"
  },
  {
    "state":"FL",
    "FIPS":12069,
    "number":32754,
    "rate":13.9,
    "population":303450,
    "county":"Lake County"
  },
  {
    "state":"FL",
    "FIPS":12071,
    "number":48931,
    "rate":9.6,
    "population":644988,
    "county":"Lee County"
  },
  {
    "state":"FL",
    "FIPS":12073,
    "number":17045,
    "rate":8,
    "population":283854,
    "county":"Leon County"
  },
  {
    "state":"FL",
    "FIPS":12075,
    "number":4385,
    "rate":14.1,
    "population":39997,
    "county":"Levy County"
  },
  {
    "state":"FL",
    "FIPS":12077,
    "number":875,
    "rate":13.6,
    "population":8247,
    "county":"Liberty County"
  },
  {
    "state":"FL",
    "FIPS":12079,
    "number":2300,
    "rate":15.7,
    "population":18915,
    "county":"Madison County"
  },
  {
    "state":"FL",
    "FIPS":12081,
    "number":26656,
    "rate":10.2,
    "population":334071,
    "county":"Manatee County"
  },
  {
    "state":"FL",
    "FIPS":12083,
    "number":34138,
    "rate":12.9,
    "population":334495,
    "county":"Marion County"
  },
  {
    "state":"FL",
    "FIPS":12085,
    "number":13479,
    "rate":11.2,
    "population":148846,
    "county":"Martin County"
  },
  {
    "state":"FL",
    "FIPS":12086,
    "number":158849,
    "rate":8,
    "population":2610960,
    "county":"Miami-Dade County"
  },
  {
    "state":"FL",
    "FIPS":12087,
    "number":5291,
    "rate":8.5,
    "population":74991,
    "county":"Monroe County"
  },
  {
    "state":"FL",
    "FIPS":12089,
    "number":6192,
    "rate":10.8,
    "population":74640,
    "county":"Nassau County"
  },
  {
    "state":"FL",
    "FIPS":12091,
    "number":13790,
    "rate":9.6,
    "population":190437,
    "county":"Okaloosa County"
  },
  {
    "state":"FL",
    "FIPS":12093,
    "number":3280,
    "rate":11.2,
    "population":39285,
    "county":"Okeechobee County"
  },
  {
    "state":"FL",
    "FIPS":12095,
    "number":76796,
    "rate":8.7,
    "population":1202076,
    "county":"Orange County"
  },
  {
    "state":"FL",
    "FIPS":12097,
    "number":23172,
    "rate":11.2,
    "population":288970,
    "county":"Osceola County"
  },
  {
    "state":"FL",
    "FIPS":12099,
    "number":104685,
    "rate":10,
    "population":1358613,
    "county":"Palm Beach County"
  },
  {
    "state":"FL",
    "FIPS":12101,
    "number":43506,
    "rate":12,
    "population":470604,
    "county":"Pasco County"
  },
  {
    "state":"FL",
    "FIPS":12103,
    "number":80026,
    "rate":10.8,
    "population":922265,
    "county":"Pinellas County"
  },
  {
    "state":"FL",
    "FIPS":12105,
    "number":60210,
    "rate":13.1,
    "population":615764,
    "county":"Polk County"
  },
  {
    "state":"FL",
    "FIPS":12107,
    "number":7156,
    "rate":12.9,
    "population":73119,
    "county":"Putnam County"
  },
  {
    "state":"FL",
    "FIPS":12113,
    "number":10342,
    "rate":8.7,
    "population":158398,
    "county":"Santa Rosa County"
  },
  {
    "state":"FL",
    "FIPS":12115,
    "number":36058,
    "rate":11.3,
    "population":386050,
    "county":"Sarasota County"
  },
  {
    "state":"FL",
    "FIPS":12117,
    "number":32862,
    "rate":10.1,
    "population":431405,
    "county":"Seminole County"
  },
  {
    "state":"FL",
    "FIPS":12109,
    "number":13275,
    "rate":8.7,
    "population":202264,
    "county":"St. Johns County"
  },
  {
    "state":"FL",
    "FIPS":12111,
    "number":24891,
    "rate":11.5,
    "population":283559,
    "county":"St. Lucie County"
  },
  {
    "state":"FL",
    "FIPS":12119,
    "number":13340,
    "rate":14.4,
    "population":102823,
    "county":"Sumter County"
  },
  {
    "state":"FL",
    "FIPS":12121,
    "number":4657,
    "rate":14,
    "population":43576,
    "county":"Suwannee County"
  },
  {
    "state":"FL",
    "FIPS":12123,
    "number":2799,
    "rate":15.6,
    "population":22739,
    "county":"Taylor County"
  },
  {
    "state":"FL",
    "FIPS":12125,
    "number":1518,
    "rate":12.7,
    "population":15239,
    "county":"Union County"
  },
  {
    "state":"FL",
    "FIPS":12127,
    "number":45175,
    "rate":11.5,
    "population":497092,
    "county":"Volusia County"
  },
  {
    "state":"FL",
    "FIPS":12129,
    "number":2763,
    "rate":11.8,
    "population":30823,
    "county":"Wakulla County"
  },
  {
    "state":"FL",
    "FIPS":12131,
    "number":5082,
    "rate":11.3,
    "population":57275,
    "county":"Walton County"
  },
  {
    "state":"FL",
    "FIPS":12133,
    "number":2487,
    "rate":12.9,
    "population":24857,
    "county":"Washington County"
  },
  {
    "state":"GA",
    "FIPS":13001,
    "number":1924,
    "rate":14.4,
    "population":18379,
    "county":"Appling County"
  },
  {
    "state":"GA",
    "FIPS":13003,
    "number":650,
    "rate":11.4,
    "population":8247,
    "county":"Atkinson County"
  },
  {
    "state":"GA",
    "FIPS":13005,
    "number":845,
    "rate":10.6,
    "population":11186,
    "county":"Bacon County"
  },
  {
    "state":"GA",
    "FIPS":13007,
    "number":361,
    "rate":14.3,
    "population":3369,
    "county":"Baker County"
  },
  {
    "state":"GA",
    "FIPS":13009,
    "number":4350,
    "rate":12.7,
    "population":46455,
    "county":"Baldwin County"
  },
  {
    "state":"GA",
    "FIPS":13011,
    "number":1455,
    "rate":10.8,
    "population":18232,
    "county":"Banks County"
  },
  {
    "state":"GA",
    "FIPS":13013,
    "number":5530,
    "rate":11.2,
    "population":70171,
    "county":"Bartow County"
  },
  {
    "state":"",
    "FIPS":13015,
    "number":8663,
    "rate":12,
    "population":null,
    "county":""
  },
  {
    "state":"GA",
    "FIPS":13017,
    "number":1747,
    "rate":13.9,
    "population":17545,
    "county":"Ben Hill County"
  },
  {
    "state":"GA",
    "FIPS":13019,
    "number":1757,
    "rate":12.5,
    "population":19063,
    "county":"Berrien County"
  },
  {
    "state":"GA",
    "FIPS":13021,
    "number":13019,
    "rate":11.6,
    "population":156184,
    "county":"Bibb County"
  },
  {
    "state":"GA",
    "FIPS":13023,
    "number":1326,
    "rate":14.3,
    "population":12897,
    "county":"Bleckley County"
  },
  {
    "state":"GA",
    "FIPS":13025,
    "number":1491,
    "rate":11.1,
    "population":18555,
    "county":"Brantley County"
  },
  {
    "state":"GA",
    "FIPS":13027,
    "number":1753,
    "rate":14.9,
    "population":15537,
    "county":"Brooks County"
  },
  {
    "state":"GA",
    "FIPS":13029,
    "number":2564,
    "rate":11.6,
    "population":32246,
    "county":"Bryan County"
  },
  {
    "state":"GA",
    "FIPS":13031,
    "number":6105,
    "rate":11.7,
    "population":72824,
    "county":"Bulloch County"
  },
  {
    "state":"GA",
    "FIPS":13033,
    "number":2322,
    "rate":14.2,
    "population":23128,
    "county":"Burke County"
  },
  {
    "state":"GA",
    "FIPS":13035,
    "number":2126,
    "rate":12,
    "population":23454,
    "county":"Butts County"
  },
  {
    "state":"GA",
    "FIPS":13037,
    "number":699,
    "rate":13.7,
    "population":6502,
    "county":"Calhoun County"
  },
  {
    "state":"GA",
    "FIPS":13039,
    "number":3758,
    "rate":10.3,
    "population":51402,
    "county":"Camden County"
  },
  {
    "state":"GA",
    "FIPS":13043,
    "number":978,
    "rate":12.4,
    "population":11125,
    "county":"Candler County"
  },
  {
    "state":"GA",
    "FIPS":13045,
    "number":9167,
    "rate":11.6,
    "population":111453,
    "county":"Carroll County"
  },
  {
    "state":"GA",
    "FIPS":13047,
    "number":5985,
    "rate":12.5,
    "population":64961,
    "county":"Catoosa County"
  },
  {
    "state":"GA",
    "FIPS":13049,
    "number":1185,
    "rate":11.4,
    "population":13308,
    "county":"Charlton County"
  },
  {
    "state":"GA",
    "FIPS":13051,
    "number":21364,
    "rate":10.4,
    "population":276710,
    "county":"Chatham County"
  },
  {
    "state":"GA",
    "FIPS":13053,
    "number":584,
    "rate":6.6,
    "population":12570,
    "county":"Chattahoochee County"
  },
  {
    "state":"GA",
    "FIPS":13055,
    "number":2309,
    "rate":12,
    "population":25676,
    "county":"Chattooga County"
  },
  {
    "state":"GA",
    "FIPS":13057,
    "number":14288,
    "rate":9.1,
    "population":220914,
    "county":"Cherokee County"
  },
  {
    "state":"GA",
    "FIPS":13059,
    "number":7829,
    "rate":8.8,
    "population":120270,
    "county":"Clarke County"
  },
  {
    "state":"GA",
    "FIPS":13061,
    "number":392,
    "rate":16.5,
    "population":3102,
    "county":"Clay County"
  },
  {
    "state":"GA",
    "FIPS":13063,
    "number":20477,
    "rate":11.2,
    "population":266253,
    "county":"Clayton County"
  },
  {
    "state":"GA",
    "FIPS":13065,
    "number":665,
    "rate":13.8,
    "population":6715,
    "county":"Clinch County"
  },
  {
    "state":"GA",
    "FIPS":13067,
    "number":45757,
    "rate":8.9,
    "population":708036,
    "county":"Cobb County"
  },
  {
    "state":"GA",
    "FIPS":13069,
    "number":3418,
    "rate":11,
    "population":43093,
    "county":"Coffee County"
  },
  {
    "state":"GA",
    "FIPS":13071,
    "number":3927,
    "rate":12.1,
    "population":46095,
    "county":"Colquitt County"
  },
  {
    "state":"GA",
    "FIPS":13073,
    "number":9407,
    "rate":10.1,
    "population":132556,
    "county":"Columbia County"
  },
  {
    "state":"GA",
    "FIPS":13075,
    "number":1553,
    "rate":12.9,
    "population":16859,
    "county":"Cook County"
  },
  {
    "state":"GA",
    "FIPS":13077,
    "number":10356,
    "rate":11.1,
    "population":130878,
    "county":"Coweta County"
  },
  {
    "state":"GA",
    "FIPS":13079,
    "number":1262,
    "rate":13.2,
    "population":12619,
    "county":"Crawford County"
  },
  {
    "state":"GA",
    "FIPS":13081,
    "number":2392,
    "rate":14,
    "population":23657,
    "county":"Crisp County"
  },
  {
    "state":"GA",
    "FIPS":13083,
    "number":1527,
    "rate":12.3,
    "population":16551,
    "county":"Dade County"
  },
  {
    "state":"GA",
    "FIPS":13085,
    "number":1842,
    "rate":10.9,
    "population":22376,
    "county":"Dawson County"
  },
  {
    "state":"GA",
    "FIPS":13087,
    "number":2397,
    "rate":12.1,
    "population":27463,
    "county":"Decatur County"
  },
  {
    "state":"GA",
    "FIPS":13089,
    "number":51602,
    "rate":9.9,
    "population":708304,
    "county":"Dekalb County"
  },
  {
    "state":"GA",
    "FIPS":13091,
    "number":2278,
    "rate":14.2,
    "population":21353,
    "county":"Dodge County"
  },
  {
    "state":"GA",
    "FIPS":13093,
    "number":1572,
    "rate":14.2,
    "population":14326,
    "county":"Dooly County"
  },
  {
    "state":"GA",
    "FIPS":13095,
    "number":8209,
    "rate":12.2,
    "population":94542,
    "county":"Dougherty County"
  },
  {
    "state":"GA",
    "FIPS":13097,
    "number":10800,
    "rate":11.5,
    "population":133926,
    "county":"Douglas County"
  },
  {
    "state":"GA",
    "FIPS":13099,
    "number":1034,
    "rate":13.5,
    "population":10605,
    "county":"Early County"
  },
  {
    "state":"GA",
    "FIPS":13101,
    "number":302,
    "rate":10.7,
    "population":3965,
    "county":"Echols County"
  },
  {
    "state":"GA",
    "FIPS":13103,
    "number":4023,
    "rate":10.8,
    "population":53337,
    "county":"Effingham County"
  },
  {
    "state":"GA",
    "FIPS":13105,
    "number":1878,
    "rate":12.7,
    "population":19593,
    "county":"Elbert County"
  },
  {
    "state":"GA",
    "FIPS":13107,
    "number":1863,
    "rate":11.2,
    "population":22849,
    "county":"Emanuel County"
  },
  {
    "state":"GA",
    "FIPS":13109,
    "number":1098,
    "rate":14.3,
    "population":10660,
    "county":"Evans County"
  },
  {
    "state":"GA",
    "FIPS":13111,
    "number":2131,
    "rate":11.4,
    "population":23467,
    "county":"Fannin County"
  },
  {
    "state":"GA",
    "FIPS":13113,
    "number":8586,
    "rate":11.1,
    "population":107432,
    "county":"Fayette County"
  },
  {
    "state":"GA",
    "FIPS":13115,
    "number":9058,
    "rate":13,
    "population":96066,
    "county":"Floyd County"
  },
  {
    "state":"GA",
    "FIPS":13117,
    "number":13252,
    "rate":10.4,
    "population":187826,
    "county":"Forsyth County"
  },
  {
    "state":"GA",
    "FIPS":13119,
    "number":1936,
    "rate":11.8,
    "population":21923,
    "county":"Franklin County"
  },
  {
    "state":"GA",
    "FIPS":13121,
    "number":57454,
    "rate":8,
    "population":977950,
    "county":"Fulton County"
  },
  {
    "state":"GA",
    "FIPS":13123,
    "number":2517,
    "rate":11.6,
    "population":28205,
    "county":"Gilmer County"
  },
  {
    "state":"GA",
    "FIPS":13125,
    "number":272,
    "rate":12.1,
    "population":3120,
    "county":"Glascock County"
  },
  {
    "state":"GA",
    "FIPS":13127,
    "number":6508,
    "rate":10.8,
    "population":80960,
    "county":"Glynn County"
  },
  {
    "state":"GA",
    "FIPS":13129,
    "number":4052,
    "rate":10.2,
    "population":55740,
    "county":"Gordon County"
  },
  {
    "state":"GA",
    "FIPS":13131,
    "number":2119,
    "rate":11.6,
    "population":25366,
    "county":"Grady County"
  },
  {
    "state":"GA",
    "FIPS":13133,
    "number":1962,
    "rate":15.5,
    "population":16132,
    "county":"Greene County"
  },
  {
    "state":"GA",
    "FIPS":13135,
    "number":47000,
    "rate":8.1,
    "population":840221,
    "county":"Gwinnett County"
  },
  {
    "state":"GA",
    "FIPS":13137,
    "number":3563,
    "rate":11.1,
    "population":43463,
    "county":"Habersham County"
  },
  {
    "state":"GA",
    "FIPS":13139,
    "number":15170,
    "rate":11.7,
    "population":185084,
    "county":"Hall County"
  },
  {
    "state":"GA",
    "FIPS":13141,
    "number":1103,
    "rate":15.2,
    "population":9030,
    "county":"Hancock County"
  },
  {
    "state":"GA",
    "FIPS":13143,
    "number":2439,
    "rate":11.8,
    "population":28388,
    "county":"Haralson County"
  },
  {
    "state":"GA",
    "FIPS":13145,
    "number":3459,
    "rate":14.2,
    "population":32613,
    "county":"Harris County"
  },
  {
    "state":"GA",
    "FIPS":13147,
    "number":2407,
    "rate":12.4,
    "population":25549,
    "county":"Hart County"
  },
  {
    "state":"GA",
    "FIPS":13149,
    "number":1011,
    "rate":11.9,
    "population":11644,
    "county":"Heard County"
  },
  {
    "state":"GA",
    "FIPS":13151,
    "number":15926,
    "rate":11.1,
    "population":208443,
    "county":"Henry County"
  },
  {
    "state":"GA",
    "FIPS":13153,
    "number":11719,
    "rate":11.3,
    "population":146200,
    "county":"Houston County"
  },
  {
    "state":"GA",
    "FIPS":13155,
    "number":887,
    "rate":12.2,
    "population":9600,
    "county":"Irwin County"
  },
  {
    "state":"GA",
    "FIPS":13157,
    "number":4011,
    "rate":9.2,
    "population":60472,
    "county":"Jackson County"
  },
  {
    "state":"GA",
    "FIPS":13159,
    "number":1151,
    "rate":11.5,
    "population":13596,
    "county":"Jasper County"
  },
  {
    "state":"GA",
    "FIPS":13161,
    "number":1392,
    "rate":13.1,
    "population":15114,
    "county":"Jeff Davis County"
  },
  {
    "state":"GA",
    "FIPS":13163,
    "number":1776,
    "rate":14.8,
    "population":16422,
    "county":"Jefferson County"
  },
  {
    "state":"GA",
    "FIPS":13165,
    "number":853,
    "rate":12.5,
    "population":9133,
    "county":"Jenkins County"
  },
  {
    "state":"GA",
    "FIPS":13167,
    "number":976,
    "rate":12.7,
    "population":9882,
    "county":"Johnson County"
  },
  {
    "state":"GA",
    "FIPS":13169,
    "number":2761,
    "rate":13.3,
    "population":28795,
    "county":"Jones County"
  },
  {
    "state":"GA",
    "FIPS":13171,
    "number":1590,
    "rate":12.1,
    "population":18039,
    "county":"Lamar County"
  },
  {
    "state":"GA",
    "FIPS":13173,
    "number":807,
    "rate":10.6,
    "population":10444,
    "county":"Lanier County"
  },
  {
    "state":"GA",
    "FIPS":13175,
    "number":4480,
    "rate":12.9,
    "population":47970,
    "county":"Laurens County"
  },
  {
    "state":"GA",
    "FIPS":13177,
    "number":2173,
    "rate":10.8,
    "population":28727,
    "county":"Lee County"
  },
  {
    "state":"GA",
    "FIPS":13179,
    "number":4129,
    "rate":9.3,
    "population":65391,
    "county":"Liberty County"
  },
  {
    "state":"GA",
    "FIPS":13181,
    "number":851,
    "rate":14,
    "population":7770,
    "county":"Lincoln County"
  },
  {
    "state":"GA",
    "FIPS":13183,
    "number":1050,
    "rate":9.5,
    "population":16161,
    "county":"Long County"
  },
  {
    "state":"GA",
    "FIPS":13185,
    "number":8354,
    "rate":10.4,
    "population":114668,
    "county":"Lowndes County"
  },
  {
    "state":"GA",
    "FIPS":13187,
    "number":2275,
    "rate":10,
    "population":30721,
    "county":"Lumpkin County"
  },
  {
    "state":"GA",
    "FIPS":13193,
    "number":1421,
    "rate":13,
    "population":14274,
    "county":"Macon County"
  },
  {
    "state":"GA",
    "FIPS":13195,
    "number":2568,
    "rate":12.4,
    "population":28018,
    "county":"Madison County"
  },
  {
    "state":"GA",
    "FIPS":13197,
    "number":946,
    "rate":14.7,
    "population":8751,
    "county":"Marion County"
  },
  {
    "state":"GA",
    "FIPS":13189,
    "number":2664,
    "rate":17.1,
    "population":21581,
    "county":"McDuffie County"
  },
  {
    "state":"GA",
    "FIPS":13191,
    "number":1586,
    "rate":14.7,
    "population":13922,
    "county":"McIntosh County"
  },
  {
    "state":"GA",
    "FIPS":13199,
    "number":2091,
    "rate":13.1,
    "population":21316,
    "county":"Meriwether County"
  },
  {
    "state":"GA",
    "FIPS":13201,
    "number":576,
    "rate":13,
    "population":5982,
    "county":"Miller County"
  },
  {
    "state":"GA",
    "FIPS":13205,
    "number":2171,
    "rate":12.8,
    "population":23121,
    "county":"Mitchell County"
  },
  {
    "state":"GA",
    "FIPS":13207,
    "number":2671,
    "rate":13.2,
    "population":26741,
    "county":"Monroe County"
  },
  {
    "state":"GA",
    "FIPS":13209,
    "number":912,
    "rate":13.7,
    "population":8909,
    "county":"Montgomery County"
  },
  {
    "state":"GA",
    "FIPS":13211,
    "number":1606,
    "rate":12.2,
    "population":17823,
    "county":"Morgan County"
  },
  {
    "state":"GA",
    "FIPS":13213,
    "number":3335,
    "rate":11.8,
    "population":39394,
    "county":"Murray County"
  },
  {
    "state":"GA",
    "FIPS":13215,
    "number":18156,
    "rate":12.7,
    "population":200041,
    "county":"Muscogee County"
  },
  {
    "state":"GA",
    "FIPS":13217,
    "number":7801,
    "rate":11.1,
    "population":101016,
    "county":"Newton County"
  },
  {
    "state":"GA",
    "FIPS":13219,
    "number":2302,
    "rate":9.8,
    "population":33520,
    "county":"Oconee County"
  },
  {
    "state":"GA",
    "FIPS":13221,
    "number":1371,
    "rate":12.5,
    "population":14597,
    "county":"Oglethorpe County"
  },
  {
    "state":"GA",
    "FIPS":13223,
    "number":12177,
    "rate":12.3,
    "population":145066,
    "county":"Paulding County"
  },
  {
    "state":"GA",
    "FIPS":13227,
    "number":2839,
    "rate":12.6,
    "population":29316,
    "county":"Pickens County"
  },
  {
    "state":"GA",
    "FIPS":13229,
    "number":1558,
    "rate":11.4,
    "population":18835,
    "county":"Pierce County"
  },
  {
    "state":"GA",
    "FIPS":13231,
    "number":1520,
    "rate":11.9,
    "population":17804,
    "county":"Pike County"
  },
  {
    "state":"GA",
    "FIPS":13225,
    "number":2496,
    "rate":12.7,
    "population":27510,
    "county":"Peach County"
  },
  {
    "state":"GA",
    "FIPS":13233,
    "number":3427,
    "rate":11.6,
    "population":41127,
    "county":"Polk County"
  },
  {
    "state":"GA",
    "FIPS":13235,
    "number":1227,
    "rate":13.5,
    "population":11680,
    "county":"Pulaski County"
  },
  {
    "state":"GA",
    "FIPS":13237,
    "number":2103,
    "rate":13,
    "population":21161,
    "county":"Putnam County"
  },
  {
    "state":"GA",
    "FIPS":13239,
    "number":316,
    "rate":16.8,
    "population":2398,
    "county":"Quitman County"
  },
  {
    "state":"GA",
    "FIPS":13241,
    "number":1768,
    "rate":13.9,
    "population":16307,
    "county":"Rabun County"
  },
  {
    "state":"GA",
    "FIPS":13243,
    "number":901,
    "rate":16.4,
    "population":7308,
    "county":"Randolph County"
  },
  {
    "state":"GA",
    "FIPS":13245,
    "number":18114,
    "rate":12.3,
    "population":201966,
    "county":"Richmond County"
  },
  {
    "state":"GA",
    "FIPS":13247,
    "number":8474,
    "rate":13.9,
    "population":85684,
    "county":"Rockdale County"
  },
  {
    "state":"GA",
    "FIPS":13249,
    "number":441,
    "rate":12.7,
    "population":4989,
    "county":"Schley County"
  },
  {
    "state":"GA",
    "FIPS":13251,
    "number":1352,
    "rate":12.9,
    "population":14200,
    "county":"Screven County"
  },
  {
    "state":"GA",
    "FIPS":13253,
    "number":954,
    "rate":14.2,
    "population":8915,
    "county":"Seminole County"
  },
  {
    "state":"GA",
    "FIPS":13255,
    "number":6255,
    "rate":13.4,
    "population":63799,
    "county":"Spalding County"
  },
  {
    "state":"GA",
    "FIPS":13257,
    "number":2665,
    "rate":13.8,
    "population":25725,
    "county":"Stephens County"
  },
  {
    "state":"GA",
    "FIPS":13259,
    "number":654,
    "rate":13,
    "population":6090,
    "county":"Stewart County"
  },
  {
    "state":"GA",
    "FIPS":13261,
    "number":2906,
    "rate":12.9,
    "population":31631,
    "county":"Sumter County"
  },
  {
    "state":"GA",
    "FIPS":13263,
    "number":866,
    "rate":16.9,
    "population":6538,
    "county":"Talbot County"
  },
  {
    "state":"GA",
    "FIPS":13265,
    "number":214,
    "rate":16,
    "population":1681,
    "county":"Taliaferro County"
  },
  {
    "state":"GA",
    "FIPS":13267,
    "number":2027,
    "rate":10.5,
    "population":25305,
    "county":"Tattnall County"
  },
  {
    "state":"GA",
    "FIPS":13269,
    "number":828,
    "rate":13.2,
    "population":8381,
    "county":"Taylor County"
  },
  {
    "state":"GA",
    "FIPS":13271,
    "number":1602,
    "rate":12.3,
    "population":16429,
    "county":"Telfair County"
  },
  {
    "state":"GA",
    "FIPS":13273,
    "number":977,
    "rate":14.6,
    "population":9247,
    "county":"Terrell County"
  },
  {
    "state":"GA",
    "FIPS":13275,
    "number":4622,
    "rate":14.1,
    "population":44530,
    "county":"Thomas County"
  },
  {
    "state":"GA",
    "FIPS":13277,
    "number":3879,
    "rate":13.3,
    "population":40994,
    "county":"Tift County"
  },
  {
    "state":"GA",
    "FIPS":13279,
    "number":2682,
    "rate":14.1,
    "population":27217,
    "county":"Toombs County"
  },
  {
    "state":"GA",
    "FIPS":13281,
    "number":1089,
    "rate":13,
    "population":10487,
    "county":"Towns County"
  },
  {
    "state":"GA",
    "FIPS":13283,
    "number":594,
    "rate":11.9,
    "population":6751,
    "county":"Treutlen County"
  },
  {
    "state":"GA",
    "FIPS":13285,
    "number":6418,
    "rate":13.2,
    "population":68472,
    "county":"Troup County"
  },
  {
    "state":"GA",
    "FIPS":13287,
    "number":788,
    "rate":12.9,
    "population":8369,
    "county":"Turner County"
  },
  {
    "state":"GA",
    "FIPS":13289,
    "number":1003,
    "rate":15,
    "population":8501,
    "county":"Twiggs County"
  },
  {
    "state":"GA",
    "FIPS":13291,
    "number":2718,
    "rate":15.6,
    "population":21481,
    "county":"Union County"
  },
  {
    "state":"GA",
    "FIPS":13293,
    "number":2527,
    "rate":12.7,
    "population":26615,
    "county":"Upson County"
  },
  {
    "state":"GA",
    "FIPS":13295,
    "number":6872,
    "rate":13.5,
    "population":68184,
    "county":"Walker County"
  },
  {
    "state":"GA",
    "FIPS":13297,
    "number":6970,
    "rate":11.6,
    "population":84867,
    "county":"Walton County"
  },
  {
    "state":"GA",
    "FIPS":13299,
    "number":3459,
    "rate":13,
    "population":35814,
    "county":"Ware County"
  },
  {
    "state":"GA",
    "FIPS":13301,
    "number":634,
    "rate":15.1,
    "population":5563,
    "county":"Warren County"
  },
  {
    "state":"GA",
    "FIPS":13303,
    "number":2133,
    "rate":13.7,
    "population":20857,
    "county":"Washington County"
  },
  {
    "state":"GA",
    "FIPS":13305,
    "number":2874,
    "rate":12.9,
    "population":30371,
    "county":"Wayne County"
  },
  {
    "state":"GA",
    "FIPS":13307,
    "number":298,
    "rate":14.4,
    "population":2792,
    "county":"Webster County"
  },
  {
    "state":"GA",
    "FIPS":13309,
    "number":718,
    "rate":11.2,
    "population":7908,
    "county":"Wheeler County"
  },
  {
    "state":"GA",
    "FIPS":13311,
    "number":2300,
    "rate":11.1,
    "population":27577,
    "county":"White County"
  },
  {
    "state":"GA",
    "FIPS":13313,
    "number":8189,
    "rate":11.4,
    "population":103187,
    "county":"Whitfield County"
  },
  {
    "state":"GA",
    "FIPS":13315,
    "number":786,
    "rate":11.1,
    "population":9027,
    "county":"Wilcox County"
  },
  {
    "state":"GA",
    "FIPS":13317,
    "number":1258,
    "rate":16.5,
    "population":10046,
    "county":"Wilkes County"
  },
  {
    "state":"GA",
    "FIPS":13319,
    "number":941,
    "rate":13.3,
    "population":9542,
    "county":"Wilkinson County"
  },
  {
    "state":"GA",
    "FIPS":13321,
    "number":2162,
    "rate":13.5,
    "population":21470,
    "county":"Worth County"
  },
  {
    "state":"HI",
    "FIPS":15001,
    "number":11040,
    "rate":7.8,
    "population":188946,
    "county":"Hawaii County"
  },
  {
    "state":"HI",
    "FIPS":15003,
    "number":59786,
    "rate":8.1,
    "population":976746,
    "county":"Honolulu County"
  },
  {
    "state":"HI",
    "FIPS":15005,
    "number":11,
    "rate":12,
    "population":89,
    "county":"Kalawao County"
  },
  {
    "state":"HI",
    "FIPS":15007,
    "number":4428,
    "rate":8.6,
    "population":68553,
    "county":"Kauai County"
  },
  {
    "state":"HI",
    "FIPS":15009,
    "number":9305,
    "rate":7.8,
    "population":158432,
    "county":"Maui County"
  },
  {
    "state":"IA",
    "FIPS":19001,
    "number":706,
    "rate":12.4,
    "population":7515,
    "county":"Adair County"
  },
  {
    "state":"IA",
    "FIPS":19003,
    "number":302,
    "rate":10,
    "population":3904,
    "county":"Adams County"
  },
  {
    "state":"IA",
    "FIPS":19005,
    "number":971,
    "rate":9.1,
    "population":14131,
    "county":"Allamakee County"
  },
  {
    "state":"IA",
    "FIPS":19007,
    "number":1128,
    "rate":11.7,
    "population":12711,
    "county":"Appanoose County"
  },
  {
    "state":"IA",
    "FIPS":19009,
    "number":488,
    "rate":10.8,
    "population":5876,
    "county":"Audubon County"
  },
  {
    "state":"IA",
    "FIPS":19011,
    "number":1881,
    "rate":10,
    "population":25861,
    "county":"Benton County"
  },
  {
    "state":"IA",
    "FIPS":19013,
    "number":9050,
    "rate":9.2,
    "population":131661,
    "county":"Black Hawk County"
  },
  {
    "state":"IA",
    "FIPS":19015,
    "number":1887,
    "rate":9.6,
    "population":26234,
    "county":"Boone County"
  },
  {
    "state":"IA",
    "FIPS":19017,
    "number":1674,
    "rate":9.3,
    "population":24463,
    "county":"Bremer County"
  },
  {
    "state":"IA",
    "FIPS":19019,
    "number":1447,
    "rate":9.7,
    "population":20942,
    "county":"Buchanan County"
  },
  {
    "state":"IA",
    "FIPS":19021,
    "number":1460,
    "rate":10,
    "population":20548,
    "county":"Buena Vista County"
  },
  {
    "state":"IA",
    "FIPS":19023,
    "number":1132,
    "rate":10.2,
    "population":14977,
    "county":"Butler County"
  },
  {
    "state":"IA",
    "FIPS":19025,
    "number":874,
    "rate":11.4,
    "population":9910,
    "county":"Calhoun County"
  },
  {
    "state":"IA",
    "FIPS":19027,
    "number":1554,
    "rate":10.3,
    "population":20674,
    "county":"Carroll County"
  },
  {
    "state":"IA",
    "FIPS":19029,
    "number":1025,
    "rate":9.9,
    "population":13720,
    "county":"Cass County"
  },
  {
    "state":"IA",
    "FIPS":19031,
    "number":1464,
    "rate":10.7,
    "population":18425,
    "county":"Cedar County"
  },
  {
    "state":"IA",
    "FIPS":19033,
    "number":3826,
    "rate":11.5,
    "population":43711,
    "county":"Cerro Gordo County"
  },
  {
    "state":"IA",
    "FIPS":19035,
    "number":1035,
    "rate":11.2,
    "population":11981,
    "county":"Cherokee County"
  },
  {
    "state":"IA",
    "FIPS":19037,
    "number":934,
    "rate":10.3,
    "population":12270,
    "county":"Chickasaw County"
  },
  {
    "state":"IA",
    "FIPS":19039,
    "number":667,
    "rate":9.8,
    "population":9340,
    "county":"Clarke County"
  },
  {
    "state":"IA",
    "FIPS":19041,
    "number":1199,
    "rate":9.6,
    "population":16563,
    "county":"Clay County"
  },
  {
    "state":"IA",
    "FIPS":19043,
    "number":1211,
    "rate":9,
    "population":17934,
    "county":"Clayton County"
  },
  {
    "state":"IA",
    "FIPS":19045,
    "number":4325,
    "rate":12,
    "population":48723,
    "county":"Clinton County"
  },
  {
    "state":"IA",
    "FIPS":19047,
    "number":1286,
    "rate":10.5,
    "population":17306,
    "county":"Crawford County"
  },
  {
    "state":"IA",
    "FIPS":19049,
    "number":3980,
    "rate":8,
    "population":72121,
    "county":"Dallas County"
  },
  {
    "state":"IA",
    "FIPS":19051,
    "number":681,
    "rate":11.3,
    "population":8709,
    "county":"Davis County"
  },
  {
    "state":"IA",
    "FIPS":19053,
    "number":623,
    "rate":10.4,
    "population":8250,
    "county":"Decatur County"
  },
  {
    "state":"IA",
    "FIPS":19055,
    "number":1357,
    "rate":10.5,
    "population":17572,
    "county":"Delaware County"
  },
  {
    "state":"IA",
    "FIPS":19057,
    "number":3480,
    "rate":11.5,
    "population":40271,
    "county":"Des Moines County"
  },
  {
    "state":"IA",
    "FIPS":19059,
    "number":1330,
    "rate":10,
    "population":16965,
    "county":"Dickinson County"
  },
  {
    "state":"IA",
    "FIPS":19061,
    "number":6939,
    "rate":9.9,
    "population":95147,
    "county":"Dubuque County"
  },
  {
    "state":"IA",
    "FIPS":19063,
    "number":806,
    "rate":10.8,
    "population":9997,
    "county":"Emmet County"
  },
  {
    "state":"IA",
    "FIPS":19065,
    "number":1627,
    "rate":10.5,
    "population":20794,
    "county":"Fayette County"
  },
  {
    "state":"IA",
    "FIPS":19067,
    "number":1498,
    "rate":12.5,
    "population":16136,
    "county":"Floyd County"
  },
  {
    "state":"IA",
    "FIPS":19069,
    "number":821,
    "rate":10.5,
    "population":10526,
    "county":"Franklin County"
  },
  {
    "state":"IA",
    "FIPS":19071,
    "number":576,
    "rate":10.6,
    "population":7134,
    "county":"Fremont County"
  },
  {
    "state":"IA",
    "FIPS":19073,
    "number":708,
    "rate":10.3,
    "population":9161,
    "county":"Greene County"
  },
  {
    "state":"IA",
    "FIPS":19075,
    "number":961,
    "rate":10.4,
    "population":12423,
    "county":"Grundy County"
  },
  {
    "state":"IA",
    "FIPS":19077,
    "number":786,
    "rate":9.7,
    "population":10771,
    "county":"Guthrie County"
  },
  {
    "state":"IA",
    "FIPS":19079,
    "number":1296,
    "rate":11.4,
    "population":15308,
    "county":"Hamilton County"
  },
  {
    "state":"IA",
    "FIPS":19081,
    "number":855,
    "rate":10.2,
    "population":11164,
    "county":"Hancock County"
  },
  {
    "state":"IA",
    "FIPS":19083,
    "number":1340,
    "rate":10.3,
    "population":17378,
    "county":"Hardin County"
  },
  {
    "state":"IA",
    "FIPS":19085,
    "number":1160,
    "rate":10.7,
    "population":14520,
    "county":"Harrison County"
  },
  {
    "state":"IA",
    "FIPS":19087,
    "number":1643,
    "rate":11,
    "population":20112,
    "county":"Henry County"
  },
  {
    "state":"IA",
    "FIPS":19089,
    "number":765,
    "rate":11,
    "population":9582,
    "county":"Howard County"
  },
  {
    "state":"IA",
    "FIPS":19091,
    "number":753,
    "rate":10.4,
    "population":9733,
    "county":"Humboldt County"
  },
  {
    "state":"IA",
    "FIPS":19093,
    "number":573,
    "rate":10.9,
    "population":7091,
    "county":"Ida County"
  },
  {
    "state":"IA",
    "FIPS":19095,
    "number":1122,
    "rate":9.3,
    "population":16206,
    "county":"Iowa County"
  },
  {
    "state":"IA",
    "FIPS":19097,
    "number":1721,
    "rate":11.7,
    "population":19689,
    "county":"Jackson County"
  },
  {
    "state":"IA",
    "FIPS":19099,
    "number":2911,
    "rate":10.5,
    "population":36544,
    "county":"Jasper County"
  },
  {
    "state":"IA",
    "FIPS":19101,
    "number":1413,
    "rate":10.5,
    "population":17084,
    "county":"Jefferson County"
  },
  {
    "state":"IA",
    "FIPS":19103,
    "number":5114,
    "rate":5,
    "population":136913,
    "county":"Johnson County"
  },
  {
    "state":"IA",
    "FIPS":19105,
    "number":1486,
    "rate":9.5,
    "population":20619,
    "county":"Jones County"
  },
  {
    "state":"IA",
    "FIPS":19107,
    "number":859,
    "rate":11.1,
    "population":10398,
    "county":"Keokuk County"
  },
  {
    "state":"IA",
    "FIPS":19109,
    "number":1351,
    "rate":11.7,
    "population":15351,
    "county":"Kossuth County"
  },
  {
    "state":"IA",
    "FIPS":19111,
    "number":2941,
    "rate":10.8,
    "population":35622,
    "county":"Lee County"
  },
  {
    "state":"IA",
    "FIPS":19113,
    "number":14640,
    "rate":9.3,
    "population":215206,
    "county":"Linn County"
  },
  {
    "state":"IA",
    "FIPS":19115,
    "number":876,
    "rate":10.7,
    "population":11327,
    "county":"Louisa County"
  },
  {
    "state":"IA",
    "FIPS":19117,
    "number":733,
    "rate":11.3,
    "population":8764,
    "county":"Lucas County"
  },
  {
    "state":"IA",
    "FIPS":19119,
    "number":765,
    "rate":9.3,
    "population":11760,
    "county":"Lyon County"
  },
  {
    "state":"IA",
    "FIPS":19121,
    "number":1231,
    "rate":11,
    "population":15627,
    "county":"Madison County"
  },
  {
    "state":"IA",
    "FIPS":19123,
    "number":1703,
    "rate":10.4,
    "population":22417,
    "county":"Mahaska County"
  },
  {
    "state":"IA",
    "FIPS":19125,
    "number":2420,
    "rate":10.1,
    "population":33378,
    "county":"Marion County"
  },
  {
    "state":"IA",
    "FIPS":19127,
    "number":3117,
    "rate":10.5,
    "population":41058,
    "county":"Marshall County"
  },
  {
    "state":"IA",
    "FIPS":19129,
    "number":1001,
    "rate":9.3,
    "population":14881,
    "county":"Mills County"
  },
  {
    "state":"IA",
    "FIPS":19131,
    "number":781,
    "rate":9.9,
    "population":10727,
    "county":"Mitchell County"
  },
  {
    "state":"IA",
    "FIPS":19133,
    "number":771,
    "rate":11,
    "population":9142,
    "county":"Monona County"
  },
  {
    "state":"IA",
    "FIPS":19135,
    "number":651,
    "rate":11,
    "population":8071,
    "county":"Monroe County"
  },
  {
    "state":"IA",
    "FIPS":19137,
    "number":884,
    "rate":11.2,
    "population":10558,
    "county":"Montgomery County"
  },
  {
    "state":"IA",
    "FIPS":19139,
    "number":3017,
    "rate":9.8,
    "population":42905,
    "county":"Muscatine County"
  },
  {
    "state":"IA",
    "FIPS":19141,
    "number":1032,
    "rate":9.8,
    "population":14163,
    "county":"Obrien County"
  },
  {
    "state":"IA",
    "FIPS":19143,
    "number":532,
    "rate":11.4,
    "population":6190,
    "county":"Osceola County"
  },
  {
    "state":"IA",
    "FIPS":19145,
    "number":1389,
    "rate":11.5,
    "population":15751,
    "county":"Page County"
  },
  {
    "state":"IA",
    "FIPS":19147,
    "number":766,
    "rate":11,
    "population":9281,
    "county":"Palo Alto County"
  },
  {
    "state":"IA",
    "FIPS":19149,
    "number":1972,
    "rate":10.9,
    "population":24881,
    "county":"Plymouth County"
  },
  {
    "state":"IA",
    "FIPS":19151,
    "number":655,
    "rate":11.9,
    "population":7161,
    "county":"Pocahontas County"
  },
  {
    "state":"IA",
    "FIPS":19153,
    "number":26417,
    "rate":8.3,
    "population":443984,
    "county":"Polk County"
  },
  {
    "state":"IA",
    "FIPS":19155,
    "number":7984,
    "rate":11.7,
    "population":92918,
    "county":"Pottawattamie County"
  },
  {
    "state":"IA",
    "FIPS":19157,
    "number":1377,
    "rate":9.9,
    "population":18759,
    "county":"Poweshiek County"
  },
  {
    "state":"IA",
    "FIPS":19159,
    "number":433,
    "rate":11.5,
    "population":5085,
    "county":"Ringgold County"
  },
  {
    "state":"IA",
    "FIPS":19161,
    "number":796,
    "rate":10.3,
    "population":10162,
    "county":"Sac County"
  },
  {
    "state":"IA",
    "FIPS":19163,
    "number":10414,
    "rate":8.4,
    "population":168827,
    "county":"Scott County"
  },
  {
    "state":"IA",
    "FIPS":19165,
    "number":1038,
    "rate":11.5,
    "population":12071,
    "county":"Shelby County"
  },
  {
    "state":"IA",
    "FIPS":19167,
    "number":1983,
    "rate":8.4,
    "population":34348,
    "county":"Sioux County"
  },
  {
    "state":"IA",
    "FIPS":19169,
    "number":4255,
    "rate":6.2,
    "population":91721,
    "county":"Story County"
  },
  {
    "state":"IA",
    "FIPS":19171,
    "number":1406,
    "rate":11,
    "population":17526,
    "county":"Tama County"
  },
  {
    "state":"IA",
    "FIPS":19173,
    "number":479,
    "rate":10.4,
    "population":6223,
    "county":"Taylor County"
  },
  {
    "state":"IA",
    "FIPS":19175,
    "number":1189,
    "rate":12.8,
    "population":12591,
    "county":"Union County"
  },
  {
    "state":"IA",
    "FIPS":19177,
    "number":594,
    "rate":10.7,
    "population":7454,
    "county":"Van Buren County"
  },
  {
    "state":"IA",
    "FIPS":19179,
    "number":3029,
    "rate":11.5,
    "population":35349,
    "county":"Wapello County"
  },
  {
    "state":"IA",
    "FIPS":19181,
    "number":3465,
    "rate":10.3,
    "population":46950,
    "county":"Warren County"
  },
  {
    "state":"IA",
    "FIPS":19183,
    "number":1623,
    "rate":10.2,
    "population":21921,
    "county":"Washington County"
  },
  {
    "state":"IA",
    "FIPS":19185,
    "number":563,
    "rate":11.9,
    "population":6355,
    "county":"Wayne County"
  },
  {
    "state":"IA",
    "FIPS":19187,
    "number":2789,
    "rate":10.1,
    "population":37253,
    "county":"Webster County"
  },
  {
    "state":"IA",
    "FIPS":19189,
    "number":820,
    "rate":10.2,
    "population":10626,
    "county":"Winnebago County"
  },
  {
    "state":"IA",
    "FIPS":19191,
    "number":1166,
    "rate":7.4,
    "population":21036,
    "county":"Winneshiek County"
  },
  {
    "state":"IA",
    "FIPS":19193,
    "number":7265,
    "rate":10.1,
    "population":102330,
    "county":"Woodbury County"
  },
  {
    "state":"IA",
    "FIPS":19195,
    "number":594,
    "rate":10.5,
    "population":7519,
    "county":"Worth County"
  },
  {
    "state":"IA",
    "FIPS":19197,
    "number":903,
    "rate":9.3,
    "population":13008,
    "county":"Wright County"
  },
  {
    "state":"ID",
    "FIPS":16001,
    "number":22513,
    "rate":7.7,
    "population":408891,
    "county":"Ada County"
  },
  {
    "state":"ID",
    "FIPS":16003,
    "number":372,
    "rate":11.8,
    "population":3908,
    "county":"Adams County"
  },
  {
    "state":"ID",
    "FIPS":16005,
    "number":5986,
    "rate":10.2,
    "population":83741,
    "county":"Bannock County"
  },
  {
    "state":"ID",
    "FIPS":16007,
    "number":380,
    "rate":9.2,
    "population":5889,
    "county":"Bear Lake County"
  },
  {
    "state":"ID",
    "FIPS":16009,
    "number":730,
    "rate":10.6,
    "population":9125,
    "county":"Benewah County"
  },
  {
    "state":"ID",
    "FIPS":16011,
    "number":3444,
    "rate":11.7,
    "population":45493,
    "county":"Bingham County"
  },
  {
    "state":"ID",
    "FIPS":16013,
    "number":1016,
    "rate":6.5,
    "population":21140,
    "county":"Blaine County"
  },
  {
    "state":"ID",
    "FIPS":16015,
    "number":523,
    "rate":9.8,
    "population":6803,
    "county":"Boise County"
  },
  {
    "state":"ID",
    "FIPS":16017,
    "number":2715,
    "rate":8.7,
    "population":40447,
    "county":"Bonner County"
  },
  {
    "state":"ID",
    "FIPS":16019,
    "number":6512,
    "rate":9.2,
    "population":106880,
    "county":"Bonneville County"
  },
  {
    "state":"ID",
    "FIPS":16021,
    "number":783,
    "rate":9.8,
    "population":10835,
    "county":"Boundary County"
  },
  {
    "state":"ID",
    "FIPS":16023,
    "number":197,
    "rate":10.1,
    "population":2722,
    "county":"Butte County"
  },
  {
    "state":"ID",
    "FIPS":16025,
    "number":77,
    "rate":9.7,
    "population":1075,
    "county":"Camas County"
  },
  {
    "state":"ID",
    "FIPS":16027,
    "number":13567,
    "rate":10.5,
    "population":193856,
    "county":"Canyon County"
  },
  {
    "state":"ID",
    "FIPS":16029,
    "number":470,
    "rate":10,
    "population":6785,
    "county":"Caribou County"
  },
  {
    "state":"ID",
    "FIPS":16031,
    "number":1560,
    "rate":10.3,
    "population":23270,
    "county":"Cassia County"
  },
  {
    "state":"ID",
    "FIPS":16033,
    "number":58,
    "rate":9.6,
    "population":873,
    "county":"Clark County"
  },
  {
    "state":"ID",
    "FIPS":16035,
    "number":791,
    "rate":11.3,
    "population":8582,
    "county":"Clearwater County"
  },
  {
    "state":"ID",
    "FIPS":16037,
    "number":348,
    "rate":10.1,
    "population":4338,
    "county":"Custer County"
  },
  {
    "state":"ID",
    "FIPS":16039,
    "number":1732,
    "rate":9.4,
    "population":26199,
    "county":"Elmore County"
  },
  {
    "state":"ID",
    "FIPS":16041,
    "number":667,
    "rate":8.3,
    "population":12811,
    "county":"Franklin County"
  },
  {
    "state":"ID",
    "FIPS":16043,
    "number":783,
    "rate":8.9,
    "population":12979,
    "county":"Fremont County"
  },
  {
    "state":"ID",
    "FIPS":16045,
    "number":1239,
    "rate":10,
    "population":16692,
    "county":"Gem County"
  },
  {
    "state":"ID",
    "FIPS":16047,
    "number":1132,
    "rate":10.9,
    "population":15216,
    "county":"Gooding County"
  },
  {
    "state":"ID",
    "FIPS":16049,
    "number":1402,
    "rate":11.1,
    "population":16399,
    "county":"Idaho County"
  },
  {
    "state":"ID",
    "FIPS":16051,
    "number":1515,
    "rate":9.1,
    "population":26657,
    "county":"Jefferson County"
  },
  {
    "state":"ID",
    "FIPS":16053,
    "number":1283,
    "rate":8.6,
    "population":22515,
    "county":"Jerome County"
  },
  {
    "state":"ID",
    "FIPS":16055,
    "number":9672,
    "rate":9.2,
    "population":142297,
    "county":"Kootenai County"
  },
  {
    "state":"ID",
    "FIPS":16057,
    "number":1991,
    "rate":7,
    "population":38157,
    "county":"Latah County"
  },
  {
    "state":"ID",
    "FIPS":16059,
    "number":744,
    "rate":12,
    "population":7763,
    "county":"Lemhi County"
  },
  {
    "state":"ID",
    "FIPS":16061,
    "number":326,
    "rate":11.1,
    "population":3836,
    "county":"Lewis County"
  },
  {
    "state":"ID",
    "FIPS":16063,
    "number":292,
    "rate":8.4,
    "population":5256,
    "county":"Lincoln County"
  },
  {
    "state":"ID",
    "FIPS":16065,
    "number":1357,
    "rate":5.5,
    "population":37680,
    "county":"Madison County"
  },
  {
    "state":"ID",
    "FIPS":16067,
    "number":1649,
    "rate":12,
    "population":20089,
    "county":"Minidoka County"
  },
  {
    "state":"ID",
    "FIPS":16069,
    "number":3338,
    "rate":11.1,
    "population":39577,
    "county":"Nez Perce County"
  },
  {
    "state":"ID",
    "FIPS":16071,
    "number":355,
    "rate":12.1,
    "population":4223,
    "county":"Oneida County"
  },
  {
    "state":"ID",
    "FIPS":16073,
    "number":855,
    "rate":10.8,
    "population":11409,
    "county":"Owyhee County"
  },
  {
    "state":"ID",
    "FIPS":16075,
    "number":1467,
    "rate":9.3,
    "population":22673,
    "county":"Payette County"
  },
  {
    "state":"ID",
    "FIPS":16077,
    "number":451,
    "rate":8.7,
    "population":7779,
    "county":"Power County"
  },
  {
    "state":"ID",
    "FIPS":16079,
    "number":1067,
    "rate":10.8,
    "population":12699,
    "county":"Shoshone County"
  },
  {
    "state":"ID",
    "FIPS":16081,
    "number":456,
    "rate":6.6,
    "population":10087,
    "county":"Teton County"
  },
  {
    "state":"ID",
    "FIPS":16083,
    "number":4782,
    "rate":8.7,
    "population":78392,
    "county":"Twin Falls County"
  },
  {
    "state":"ID",
    "FIPS":16085,
    "number":689,
    "rate":9.1,
    "population":9511,
    "county":"Valley County"
  },
  {
    "state":"ID",
    "FIPS":16087,
    "number":854,
    "rate":11.6,
    "population":10041,
    "county":"Washington County"
  },
  {
    "state":"IL",
    "FIPS":17001,
    "number":4814,
    "rate":9.6,
    "population":67199,
    "county":"Adams County"
  },
  {
    "state":"IL",
    "FIPS":17003,
    "number":747,
    "rate":12.8,
    "population":7750,
    "county":"Alexander County"
  },
  {
    "state":"IL",
    "FIPS":17005,
    "number":1459,
    "rate":10.8,
    "population":17621,
    "county":"Bond County"
  },
  {
    "state":"IL",
    "FIPS":17007,
    "number":3668,
    "rate":9.8,
    "population":53880,
    "county":"Boone County"
  },
  {
    "state":"IL",
    "FIPS":17009,
    "number":518,
    "rate":9.1,
    "population":6912,
    "county":"Brown County"
  },
  {
    "state":"IL",
    "FIPS":17011,
    "number":3001,
    "rate":11.6,
    "population":34337,
    "county":"Bureau County"
  },
  {
    "state":"IL",
    "FIPS":17013,
    "number":421,
    "rate":10.9,
    "population":5022,
    "county":"Calhoun County"
  },
  {
    "state":"IL",
    "FIPS":17015,
    "number":1384,
    "rate":11.8,
    "population":15003,
    "county":"Carroll County"
  },
  {
    "state":"IL",
    "FIPS":17017,
    "number":1024,
    "rate":10.5,
    "population":13422,
    "county":"Cass County"
  },
  {
    "state":"IL",
    "FIPS":17019,
    "number":11735,
    "rate":7.8,
    "population":204009,
    "county":"Champaign County"
  },
  {
    "state":"IL",
    "FIPS":17021,
    "number":2935,
    "rate":11.2,
    "population":34511,
    "county":"Christian County"
  },
  {
    "state":"IL",
    "FIPS":17023,
    "number":1316,
    "rate":10.8,
    "population":16304,
    "county":"Clark County"
  },
  {
    "state":"IL",
    "FIPS":17025,
    "number":1194,
    "rate":11.5,
    "population":13733,
    "county":"Clay County"
  },
  {
    "state":"IL",
    "FIPS":17027,
    "number":2458,
    "rate":8.5,
    "population":38057,
    "county":"Clinton County"
  },
  {
    "state":"IL",
    "FIPS":17029,
    "number":3390,
    "rate":8.3,
    "population":53631,
    "county":"Coles County"
  },
  {
    "state":"IL",
    "FIPS":17031,
    "number":328064,
    "rate":8.5,
    "population":5232340,
    "county":"Cook County"
  },
  {
    "state":"IL",
    "FIPS":17033,
    "number":1698,
    "rate":11.1,
    "population":19627,
    "county":"Crawford County"
  },
  {
    "state":"IL",
    "FIPS":17035,
    "number":916,
    "rate":11.2,
    "population":10936,
    "county":"Cumberland County"
  },
  {
    "state":"IL",
    "FIPS":17039,
    "number":1421,
    "rate":11.4,
    "population":16492,
    "county":"De Witt County"
  },
  {
    "state":"IL",
    "FIPS":17037,
    "number":6106,
    "rate":8.1,
    "population":104693,
    "county":"Dekalb County"
  },
  {
    "state":"IL",
    "FIPS":17041,
    "number":1497,
    "rate":10.4,
    "population":19832,
    "county":"Douglas County"
  },
  {
    "state":"IL",
    "FIPS":17043,
    "number":57437,
    "rate":8.5,
    "population":926933,
    "county":"Dupage County"
  },
  {
    "state":"IL",
    "FIPS":17045,
    "number":1578,
    "rate":11.4,
    "population":18153,
    "county":"Edgar County"
  },
  {
    "state":"IL",
    "FIPS":17047,
    "number":534,
    "rate":10.6,
    "population":6731,
    "county":"Edwards County"
  },
  {
    "state":"IL",
    "FIPS":17049,
    "number":2567,
    "rate":10.2,
    "population":34322,
    "county":"Effingham County"
  },
  {
    "state":"IL",
    "FIPS":17051,
    "number":1927,
    "rate":11.6,
    "population":22022,
    "county":"Fayette County"
  },
  {
    "state":"IL",
    "FIPS":17053,
    "number":1161,
    "rate":11.1,
    "population":13998,
    "county":"Ford County"
  },
  {
    "state":"IL",
    "FIPS":17055,
    "number":3490,
    "rate":11.7,
    "population":39862,
    "county":"Franklin County"
  },
  {
    "state":"IL",
    "FIPS":17057,
    "number":3221,
    "rate":11.4,
    "population":36659,
    "county":"Fulton County"
  },
  {
    "state":"IL",
    "FIPS":17059,
    "number":490,
    "rate":11.5,
    "population":5414,
    "county":"Gallatin County"
  },
  {
    "state":"IL",
    "FIPS":17061,
    "number":1200,
    "rate":11.7,
    "population":13616,
    "county":"Greene County"
  },
  {
    "state":"IL",
    "FIPS":17063,
    "number":3460,
    "rate":9.7,
    "population":50150,
    "county":"Grundy County"
  },
  {
    "state":"IL",
    "FIPS":17065,
    "number":696,
    "rate":11,
    "population":8364,
    "county":"Hamilton County"
  },
  {
    "state":"IL",
    "FIPS":17067,
    "number":1527,
    "rate":10.6,
    "population":18835,
    "county":"Hancock County"
  },
  {
    "state":"IL",
    "FIPS":17069,
    "number":400,
    "rate":12.1,
    "population":4257,
    "county":"Hardin County"
  },
  {
    "state":"IL",
    "FIPS":17071,
    "number":647,
    "rate":11.7,
    "population":7019,
    "county":"Henderson County"
  },
  {
    "state":"IL",
    "FIPS":17073,
    "number":3913,
    "rate":10.5,
    "population":50071,
    "county":"Henry County"
  },
  {
    "state":"IL",
    "FIPS":17075,
    "number":2468,
    "rate":11.3,
    "population":29289,
    "county":"Iroquois County"
  },
  {
    "state":"IL",
    "FIPS":17077,
    "number":4156,
    "rate":9,
    "population":60214,
    "county":"Jackson County"
  },
  {
    "state":"IL",
    "FIPS":17079,
    "number":807,
    "rate":11.1,
    "population":9644,
    "county":"Jasper County"
  },
  {
    "state":"IL",
    "FIPS":17081,
    "number":3393,
    "rate":11.5,
    "population":38730,
    "county":"Jefferson County"
  },
  {
    "state":"IL",
    "FIPS":17083,
    "number":1761,
    "rate":10.3,
    "population":22732,
    "county":"Jersey County"
  },
  {
    "state":"IL",
    "FIPS":17085,
    "number":2009,
    "rate":11.5,
    "population":22380,
    "county":"Jo Daviess County"
  },
  {
    "state":"IL",
    "FIPS":17087,
    "number":1097,
    "rate":10.9,
    "population":12756,
    "county":"Johnson County"
  },
  {
    "state":"IL",
    "FIPS":17089,
    "number":28324,
    "rate":7.8,
    "population":521843,
    "county":"Kane County"
  },
  {
    "state":"IL",
    "FIPS":17091,
    "number":8173,
    "rate":10,
    "population":112926,
    "county":"Kankakee County"
  },
  {
    "state":"IL",
    "FIPS":17093,
    "number":6172,
    "rate":7.8,
    "population":118145,
    "county":"Kendall County"
  },
  {
    "state":"IL",
    "FIPS":17095,
    "number":3942,
    "rate":9.8,
    "population":52314,
    "county":"Knox County"
  },
  {
    "state":"IL",
    "FIPS":17097,
    "number":44376,
    "rate":9,
    "population":701513,
    "county":"Lake County"
  },
  {
    "state":"IL",
    "FIPS":17099,
    "number":9468,
    "rate":11.2,
    "population":112882,
    "county":"La Salle County"
  },
  {
    "state":"IL",
    "FIPS":17101,
    "number":1555,
    "rate":11.9,
    "population":16698,
    "county":"Lawrence County"
  },
  {
    "state":"IL",
    "FIPS":17105,
    "number":3021,
    "rate":10.4,
    "population":38535,
    "county":"Livingston County"
  },
  {
    "state":"IL",
    "FIPS":17107,
    "number":2290,
    "rate":9.9,
    "population":30003,
    "county":"Logan County"
  },
  {
    "state":"IL",
    "FIPS":17115,
    "number":8622,
    "rate":10.5,
    "population":110043,
    "county":"Macon County"
  },
  {
    "state":"IL",
    "FIPS":17103,
    "number":2861,
    "rate":10.6,
    "population":35141,
    "county":"Lee County"
  },
  {
    "state":"IL",
    "FIPS":17117,
    "number":4265,
    "rate":12,
    "population":47208,
    "county":"Macoupin County"
  },
  {
    "state":"IL",
    "FIPS":17119,
    "number":22767,
    "rate":11.3,
    "population":268039,
    "county":"Madison County"
  },
  {
    "state":"IL",
    "FIPS":17121,
    "number":2874,
    "rate":9.9,
    "population":38923,
    "county":"Marion County"
  },
  {
    "state":"IL",
    "FIPS":17123,
    "number":1105,
    "rate":11.7,
    "population":12301,
    "county":"Marshall County"
  },
  {
    "state":"IL",
    "FIPS":17125,
    "number":1270,
    "rate":11.6,
    "population":14339,
    "county":"Mason County"
  },
  {
    "state":"IL",
    "FIPS":17127,
    "number":1364,
    "rate":11.9,
    "population":15143,
    "county":"Massac County"
  },
  {
    "state":"IL",
    "FIPS":17109,
    "number":2478,
    "rate":9.9,
    "population":32545,
    "county":"McDonough County"
  },
  {
    "state":"IL",
    "FIPS":17111,
    "number":20803,
    "rate":9.5,
    "population":307775,
    "county":"McHenry County"
  },
  {
    "state":"IL",
    "FIPS":17113,
    "number":9472,
    "rate":7.6,
    "population":172418,
    "county":"Mclean County"
  },
  {
    "state":"IL",
    "FIPS":17129,
    "number":984,
    "rate":10.3,
    "population":12709,
    "county":"Menard County"
  },
  {
    "state":"IL",
    "FIPS":17131,
    "number":1416,
    "rate":11.5,
    "population":16176,
    "county":"Mercer County"
  },
  {
    "state":"IL",
    "FIPS":17133,
    "number":2793,
    "rate":11.3,
    "population":33331,
    "county":"Monroe County"
  },
  {
    "state":"IL",
    "FIPS":17135,
    "number":2208,
    "rate":9.7,
    "population":29725,
    "county":"Montgomery County"
  },
  {
    "state":"IL",
    "FIPS":17137,
    "number":3140,
    "rate":11.7,
    "population":35279,
    "county":"Morgan County"
  },
  {
    "state":"IL",
    "FIPS":17139,
    "number":1123,
    "rate":10.3,
    "population":14973,
    "county":"Moultrie County"
  },
  {
    "state":"IL",
    "FIPS":17141,
    "number":4421,
    "rate":11.3,
    "population":52839,
    "county":"Ogle County"
  },
  {
    "state":"IL",
    "FIPS":17143,
    "number":12831,
    "rate":9.3,
    "population":187193,
    "county":"Peoria County"
  },
  {
    "state":"IL",
    "FIPS":17145,
    "number":1821,
    "rate":10.7,
    "population":22070,
    "county":"Perry County"
  },
  {
    "state":"IL",
    "FIPS":17147,
    "number":1348,
    "rate":10.9,
    "population":16507,
    "county":"Piatt County"
  },
  {
    "state":"IL",
    "FIPS":17149,
    "number":1466,
    "rate":11.9,
    "population":16279,
    "county":"Pike County"
  },
  {
    "state":"IL",
    "FIPS":17151,
    "number":383,
    "rate":11.3,
    "population":4289,
    "county":"Pope County"
  },
  {
    "state":"IL",
    "FIPS":17153,
    "number":604,
    "rate":13.4,
    "population":5971,
    "county":"Pulaski County"
  },
  {
    "state":"IL",
    "FIPS":17155,
    "number":499,
    "rate":10.9,
    "population":5875,
    "county":"Putnam County"
  },
  {
    "state":"IL",
    "FIPS":17157,
    "number":2584,
    "rate":10,
    "population":32947,
    "county":"Randolph County"
  },
  {
    "state":"IL",
    "FIPS":17159,
    "number":1388,
    "rate":11.3,
    "population":16165,
    "county":"Richland County"
  },
  {
    "state":"IL",
    "FIPS":17161,
    "number":12770,
    "rate":11.5,
    "population":147065,
    "county":"Rock Island County"
  },
  {
    "state":"IL",
    "FIPS":17165,
    "number":2374,
    "rate":12.6,
    "population":24981,
    "county":"Saline County"
  },
  {
    "state":"IL",
    "FIPS":17167,
    "number":16703,
    "rate":11.3,
    "population":199247,
    "county":"Sangamon County"
  },
  {
    "state":"IL",
    "FIPS":17169,
    "number":619,
    "rate":10.7,
    "population":7486,
    "county":"Schuyler County"
  },
  {
    "state":"IL",
    "FIPS":17171,
    "number":414,
    "rate":10.5,
    "population":5295,
    "county":"Scott County"
  },
  {
    "state":"IL",
    "FIPS":17173,
    "number":1683,
    "rate":10,
    "population":22233,
    "county":"Shelby County"
  },
  {
    "state":"IL",
    "FIPS":17163,
    "number":24131,
    "rate":12.3,
    "population":268785,
    "county":"St. Clair County"
  },
  {
    "state":"IL",
    "FIPS":17175,
    "number":545,
    "rate":12,
    "population":5937,
    "county":"Stark County"
  },
  {
    "state":"IL",
    "FIPS":17177,
    "number":4165,
    "rate":11.7,
    "population":46973,
    "county":"Stephenson County"
  },
  {
    "state":"IL",
    "FIPS":17179,
    "number":10104,
    "rate":9.9,
    "population":136094,
    "county":"Tazewell County"
  },
  {
    "state":"IL",
    "FIPS":17181,
    "number":1601,
    "rate":11.8,
    "population":17632,
    "county":"Union County"
  },
  {
    "state":"IL",
    "FIPS":17183,
    "number":7745,
    "rate":13.1,
    "population":80764,
    "county":"Vermilion County"
  },
  {
    "state":"IL",
    "FIPS":17185,
    "number":1108,
    "rate":12.4,
    "population":11716,
    "county":"Wabash County"
  },
  {
    "state":"IL",
    "FIPS":17187,
    "number":1403,
    "rate":10.7,
    "population":17785,
    "county":"Warren County"
  },
  {
    "state":"IL",
    "FIPS":17189,
    "number":1256,
    "rate":11.2,
    "population":14611,
    "county":"Washington County"
  },
  {
    "state":"IL",
    "FIPS":17191,
    "number":1405,
    "rate":11.2,
    "population":16621,
    "county":"Wayne County"
  },
  {
    "state":"IL",
    "FIPS":17193,
    "number":1215,
    "rate":10.9,
    "population":14582,
    "county":"White County"
  },
  {
    "state":"IL",
    "FIPS":17195,
    "number":4598,
    "rate":10.6,
    "population":57627,
    "county":"Whiteside County"
  },
  {
    "state":"IL",
    "FIPS":17197,
    "number":42573,
    "rate":9,
    "population":682187,
    "county":"Will County"
  },
  {
    "state":"IL",
    "FIPS":17201,
    "number":25561,
    "rate":12,
    "population":291923,
    "county":"Winnebago County"
  },
  {
    "state":"IL",
    "FIPS":17203,
    "number":2627,
    "rate":9.3,
    "population":38925,
    "county":"Woodford County"
  },
  {
    "state":"IL",
    "FIPS":17199,
    "number":5241,
    "rate":10.3,
    "population":66770,
    "county":"Williamson County"
  },
  {
    "state":"IN",
    "FIPS":18001,
    "number":2612,
    "rate":11.4,
    "population":34401,
    "county":"Adams County"
  },
  {
    "state":"IN",
    "FIPS":18003,
    "number":25577,
    "rate":10,
    "population":360832,
    "county":"Allen County"
  },
  {
    "state":"IN",
    "FIPS":18005,
    "number":6292,
    "rate":10.9,
    "population":78903,
    "county":"Bartholomew County"
  },
  {
    "state":"IN",
    "FIPS":18007,
    "number":788,
    "rate":12.3,
    "population":8834,
    "county":"Benton County"
  },
  {
    "state":"IN",
    "FIPS":18009,
    "number":1256,
    "rate":13.3,
    "population":12548,
    "county":"Blackford County"
  },
  {
    "state":"IN",
    "FIPS":18011,
    "number":3964,
    "rate":9.6,
    "population":59076,
    "county":"Boone County"
  },
  {
    "state":"IN",
    "FIPS":18013,
    "number":1415,
    "rate":12.1,
    "population":15068,
    "county":"Brown County"
  },
  {
    "state":"IN",
    "FIPS":18015,
    "number":1711,
    "rate":11.5,
    "population":20096,
    "county":"Carroll County"
  },
  {
    "state":"IN",
    "FIPS":18017,
    "number":2737,
    "rate":9.7,
    "population":38746,
    "county":"Cass County"
  },
  {
    "state":"IN",
    "FIPS":18019,
    "number":10179,
    "rate":12.2,
    "population":111919,
    "county":"Clark County"
  },
  {
    "state":"IN",
    "FIPS":18021,
    "number":2241,
    "rate":11.2,
    "population":26855,
    "county":"Clay County"
  },
  {
    "state":"IN",
    "FIPS":18023,
    "number":2889,
    "rate":12.3,
    "population":32957,
    "county":"Clinton County"
  },
  {
    "state":"IN",
    "FIPS":18025,
    "number":1075,
    "rate":13.5,
    "population":10645,
    "county":"Crawford County"
  },
  {
    "state":"IN",
    "FIPS":18027,
    "number":2612,
    "rate":11.9,
    "population":32116,
    "county":"Daviess County"
  },
  {
    "state":"IN",
    "FIPS":18029,
    "number":4152,
    "rate":11.3,
    "population":49782,
    "county":"Dearborn County"
  },
  {
    "state":"IN",
    "FIPS":18031,
    "number":2464,
    "rate":13,
    "population":26083,
    "county":"Decatur County"
  },
  {
    "state":"IN",
    "FIPS":18033,
    "number":3102,
    "rate":10.2,
    "population":42255,
    "county":"De Kalb County"
  },
  {
    "state":"IN",
    "FIPS":18035,
    "number":11277,
    "rate":12.8,
    "population":117309,
    "county":"Delaware County"
  },
  {
    "state":"IN",
    "FIPS":18037,
    "number":3268,
    "rate":10.7,
    "population":42094,
    "county":"Dubois County"
  },
  {
    "state":"IN",
    "FIPS":18039,
    "number":13406,
    "rate":9.7,
    "population":199236,
    "county":"Elkhart County"
  },
  {
    "state":"IN",
    "FIPS":18041,
    "number":2289,
    "rate":12.8,
    "population":23965,
    "county":"Fayette County"
  },
  {
    "state":"IN",
    "FIPS":18043,
    "number":5398,
    "rate":9.6,
    "population":75284,
    "county":"Floyd County"
  },
  {
    "state":"IN",
    "FIPS":18045,
    "number":1697,
    "rate":13.4,
    "population":17100,
    "county":"Fountain County"
  },
  {
    "state":"IN",
    "FIPS":18047,
    "number":1861,
    "rate":11.2,
    "population":22986,
    "county":"Franklin County"
  },
  {
    "state":"IN",
    "FIPS":18049,
    "number":1736,
    "rate":11.4,
    "population":20664,
    "county":"Fulton County"
  },
  {
    "state":"IN",
    "FIPS":18051,
    "number":3126,
    "rate":12.6,
    "population":33551,
    "county":"Gibson County"
  },
  {
    "state":"IN",
    "FIPS":18053,
    "number":7232,
    "rate":14,
    "population":69283,
    "county":"Grant County"
  },
  {
    "state":"IN",
    "FIPS":18055,
    "number":3554,
    "rate":14.4,
    "population":33029,
    "county":"Greene County"
  },
  {
    "state":"IN",
    "FIPS":18057,
    "number":17167,
    "rate":8.7,
    "population":289570,
    "county":"Hamilton County"
  },
  {
    "state":"IN",
    "FIPS":18059,
    "number":5664,
    "rate":11,
    "population":70641,
    "county":"Hancock County"
  },
  {
    "state":"IN",
    "FIPS":18061,
    "number":3302,
    "rate":11.3,
    "population":39099,
    "county":"Harrison County"
  },
  {
    "state":"IN",
    "FIPS":18063,
    "number":9418,
    "rate":8.8,
    "population":150722,
    "county":"Hendricks County"
  },
  {
    "state":"IN",
    "FIPS":18065,
    "number":4413,
    "rate":11.7,
    "population":49259,
    "county":"Henry County"
  },
  {
    "state":"IN",
    "FIPS":18067,
    "number":8705,
    "rate":14.1,
    "population":82973,
    "county":"Howard County"
  },
  {
    "state":"IN",
    "FIPS":18069,
    "number":3435,
    "rate":12.5,
    "population":36979,
    "county":"Huntington County"
  },
  {
    "state":"IN",
    "FIPS":18071,
    "number":4119,
    "rate":13,
    "population":42990,
    "county":"Jackson County"
  },
  {
    "state":"IN",
    "FIPS":18073,
    "number":2512,
    "rate":10.4,
    "population":33453,
    "county":"Jasper County"
  },
  {
    "state":"IN",
    "FIPS":18075,
    "number":2231,
    "rate":14.7,
    "population":21370,
    "county":"Jay County"
  },
  {
    "state":"IN",
    "FIPS":18077,
    "number":3076,
    "rate":12.6,
    "population":32506,
    "county":"Jefferson County"
  },
  {
    "state":"IN",
    "FIPS":18079,
    "number":2469,
    "rate":12.2,
    "population":28182,
    "county":"Jennings County"
  },
  {
    "state":"IN",
    "FIPS":18081,
    "number":11115,
    "rate":10.8,
    "population":143562,
    "county":"Johnson County"
  },
  {
    "state":"IN",
    "FIPS":18083,
    "number":2878,
    "rate":10.2,
    "population":38051,
    "county":"Knox County"
  },
  {
    "state":"IN",
    "FIPS":18085,
    "number":6173,
    "rate":11,
    "population":77654,
    "county":"Kosciusko County"
  },
  {
    "state":"IN",
    "FIPS":18087,
    "number":2923,
    "rate":12.3,
    "population":37635,
    "county":"Lagrange County"
  },
  {
    "state":"IN",
    "FIPS":18089,
    "number":44996,
    "rate":12.6,
    "population":493194,
    "county":"Lake County"
  },
  {
    "state":"IN",
    "FIPS":18091,
    "number":8905,
    "rate":10.6,
    "population":111158,
    "county":"La Porte County"
  },
  {
    "state":"IN",
    "FIPS":18093,
    "number":5145,
    "rate":14.9,
    "population":46045,
    "county":"Lawrence County"
  },
  {
    "state":"IN",
    "FIPS":18095,
    "number":12498,
    "rate":12.8,
    "population":130284,
    "county":"Madison County"
  },
  {
    "state":"IN",
    "FIPS":18097,
    "number":70892,
    "rate":10.6,
    "population":918581,
    "county":"Marion County"
  },
  {
    "state":"IN",
    "FIPS":18099,
    "number":3547,
    "rate":10.6,
    "population":47025,
    "county":"Marshall County"
  },
  {
    "state":"IN",
    "FIPS":18101,
    "number":1109,
    "rate":14.5,
    "population":10322,
    "county":"Martin County"
  },
  {
    "state":"IN",
    "FIPS":18103,
    "number":2991,
    "rate":10.9,
    "population":36502,
    "county":"Miami County"
  },
  {
    "state":"IN",
    "FIPS":18105,
    "number":8740,
    "rate":8.1,
    "population":141289,
    "county":"Monroe County"
  },
  {
    "state":"IN",
    "FIPS":18107,
    "number":3475,
    "rate":12.3,
    "population":38202,
    "county":"Montgomery County"
  },
  {
    "state":"IN",
    "FIPS":18109,
    "number":6701,
    "rate":13.2,
    "population":69216,
    "county":"Morgan County"
  },
  {
    "state":"IN",
    "FIPS":18111,
    "number":1224,
    "rate":11.5,
    "population":14079,
    "county":"Newton County"
  },
  {
    "state":"IN",
    "FIPS":18113,
    "number":3832,
    "rate":11.3,
    "population":47424,
    "county":"Noble County"
  },
  {
    "state":"IN",
    "FIPS":18115,
    "number":574,
    "rate":12.2,
    "population":6103,
    "county":"Ohio County"
  },
  {
    "state":"IN",
    "FIPS":18117,
    "number":1673,
    "rate":11.6,
    "population":19696,
    "county":"Orange County"
  },
  {
    "state":"IN",
    "FIPS":18119,
    "number":1993,
    "rate":12.4,
    "population":21363,
    "county":"Owen County"
  },
  {
    "state":"IN",
    "FIPS":18121,
    "number":1519,
    "rate":11.6,
    "population":17112,
    "county":"Parke County"
  },
  {
    "state":"IN",
    "FIPS":18123,
    "number":1761,
    "rate":11.7,
    "population":19429,
    "county":"Perry County"
  },
  {
    "state":"IN",
    "FIPS":18125,
    "number":1225,
    "rate":12.7,
    "population":12774,
    "county":"Pike County"
  },
  {
    "state":"IN",
    "FIPS":18127,
    "number":11767,
    "rate":9.6,
    "population":165659,
    "county":"Porter County"
  },
  {
    "state":"IN",
    "FIPS":18129,
    "number":2459,
    "rate":12.9,
    "population":25616,
    "county":"Posey County"
  },
  {
    "state":"IN",
    "FIPS":18131,
    "number":1212,
    "rate":12.5,
    "population":13053,
    "county":"Pulaski County"
  },
  {
    "state":"IN",
    "FIPS":18133,
    "number":3046,
    "rate":10.8,
    "population":37681,
    "county":"Putnam County"
  },
  {
    "state":"IN",
    "FIPS":18135,
    "number":2682,
    "rate":14.1,
    "population":25835,
    "county":"Randolph County"
  },
  {
    "state":"IN",
    "FIPS":18137,
    "number":2748,
    "rate":13.3,
    "population":28529,
    "county":"Ripley County"
  },
  {
    "state":"IN",
    "FIPS":18139,
    "number":1651,
    "rate":13,
    "population":17134,
    "county":"Rush County"
  },
  {
    "state":"IN",
    "FIPS":18143,
    "number":2066,
    "rate":11.7,
    "population":23784,
    "county":"Scott County"
  },
  {
    "state":"IN",
    "FIPS":18145,
    "number":3688,
    "rate":11.2,
    "population":44382,
    "county":"Shelby County"
  },
  {
    "state":"IN",
    "FIPS":18147,
    "number":1555,
    "rate":10,
    "population":20875,
    "county":"Spencer County"
  },
  {
    "state":"IN",
    "FIPS":18141,
    "number":19057,
    "rate":9.9,
    "population":266571,
    "county":"St. Joseph County"
  },
  {
    "state":"IN",
    "FIPS":18149,
    "number":2140,
    "rate":12.5,
    "population":23197,
    "county":"Starke County"
  },
  {
    "state":"IN",
    "FIPS":18151,
    "number":2803,
    "rate":11,
    "population":34155,
    "county":"Steuben County"
  },
  {
    "state":"IN",
    "FIPS":18153,
    "number":2100,
    "rate":12.9,
    "population":21227,
    "county":"Sullivan County"
  },
  {
    "state":"IN",
    "FIPS":18155,
    "number":998,
    "rate":13.1,
    "population":10402,
    "county":"Switzerland County"
  },
  {
    "state":"IN",
    "FIPS":18157,
    "number":10057,
    "rate":7.7,
    "population":178180,
    "county":"Tippecanoe County"
  },
  {
    "state":"IN",
    "FIPS":18159,
    "number":1369,
    "rate":11.5,
    "population":15721,
    "county":"Tipton County"
  },
  {
    "state":"IN",
    "FIPS":18161,
    "number":666,
    "rate":12.3,
    "population":7340,
    "county":"Union County"
  },
  {
    "state":"IN",
    "FIPS":18163,
    "number":16889,
    "rate":12.4,
    "population":180781,
    "county":"Vanderburgh County"
  },
  {
    "state":"IN",
    "FIPS":18165,
    "number":1492,
    "rate":12.4,
    "population":15955,
    "county":"Vermillion County"
  },
  {
    "state":"IN",
    "FIPS":18167,
    "number":8295,
    "rate":10.2,
    "population":108589,
    "county":"Vigo County"
  },
  {
    "state":"IN",
    "FIPS":18169,
    "number":3357,
    "rate":13.9,
    "population":32428,
    "county":"Wabash County"
  },
  {
    "state":"IN",
    "FIPS":18171,
    "number":724,
    "rate":11.4,
    "population":8386,
    "county":"Warren County"
  },
  {
    "state":"IN",
    "FIPS":18173,
    "number":4916,
    "rate":11.2,
    "population":60439,
    "county":"Warrick County"
  },
  {
    "state":"IN",
    "FIPS":18175,
    "number":2407,
    "rate":11.7,
    "population":27925,
    "county":"Washington County"
  },
  {
    "state":"IN",
    "FIPS":18177,
    "number":6339,
    "rate":12.4,
    "population":68371,
    "county":"Wayne County"
  },
  {
    "state":"IN",
    "FIPS":18179,
    "number":2384,
    "rate":11.7,
    "population":27678,
    "county":"Wells County"
  },
  {
    "state":"IN",
    "FIPS":18181,
    "number":2369,
    "rate":13.1,
    "population":24408,
    "county":"White County"
  },
  {
    "state":"IN",
    "FIPS":18183,
    "number":2705,
    "rate":11,
    "population":33270,
    "county":"Whitley County"
  },
  {
    "state":"KS",
    "FIPS":20001,
    "number":1099,
    "rate":11.2,
    "population":13341,
    "county":"Allen County"
  },
  {
    "state":"KS",
    "FIPS":20003,
    "number":507,
    "rate":8.8,
    "population":7918,
    "county":"Anderson County"
  },
  {
    "state":"KS",
    "FIPS":20005,
    "number":1222,
    "rate":10.2,
    "population":16800,
    "county":"Atchison County"
  },
  {
    "state":"KS",
    "FIPS":20007,
    "number":346,
    "rate":9.4,
    "population":4880,
    "county":"Barber County"
  },
  {
    "state":"KS",
    "FIPS":20009,
    "number":2060,
    "rate":10.3,
    "population":27553,
    "county":"Barton County"
  },
  {
    "state":"KS",
    "FIPS":20011,
    "number":1219,
    "rate":11.4,
    "population":14859,
    "county":"Bourbon County"
  },
  {
    "state":"KS",
    "FIPS":20013,
    "number":849,
    "rate":11.8,
    "population":9888,
    "county":"Brown County"
  },
  {
    "state":"KS",
    "FIPS":20015,
    "number":4622,
    "rate":9.9,
    "population":65756,
    "county":"Butler County"
  },
  {
    "state":"KS",
    "FIPS":20017,
    "number":247,
    "rate":11.7,
    "population":2750,
    "county":"Chase County"
  },
  {
    "state":"KS",
    "FIPS":20019,
    "number":336,
    "rate":12.1,
    "population":3566,
    "county":"Chautauqua County"
  },
  {
    "state":"KS",
    "FIPS":20021,
    "number":1939,
    "rate":12.5,
    "population":21224,
    "county":"Cherokee County"
  },
  {
    "state":"KS",
    "FIPS":20023,
    "number":252,
    "rate":12.3,
    "population":2675,
    "county":"Cheyenne County"
  },
  {
    "state":"KS",
    "FIPS":20025,
    "number":192,
    "rate":12.3,
    "population":2174,
    "county":"Clark County"
  },
  {
    "state":"KS",
    "FIPS":20027,
    "number":712,
    "rate":11.2,
    "population":8517,
    "county":"Clay County"
  },
  {
    "state":"KS",
    "FIPS":20029,
    "number":911,
    "rate":13.2,
    "population":9392,
    "county":"Cloud County"
  },
  {
    "state":"KS",
    "FIPS":20031,
    "number":574,
    "rate":9.1,
    "population":8506,
    "county":"Coffey County"
  },
  {
    "state":"KS",
    "FIPS":20033,
    "number":165,
    "rate":11.7,
    "population":1908,
    "county":"Comanche County"
  },
  {
    "state":"KS",
    "FIPS":20035,
    "number":3140,
    "rate":12,
    "population":36264,
    "county":"Cowley County"
  },
  {
    "state":"KS",
    "FIPS":20037,
    "number":3287,
    "rate":11.4,
    "population":39361,
    "county":"Crawford County"
  },
  {
    "state":"KS",
    "FIPS":20039,
    "number":311,
    "rate":13.5,
    "population":2881,
    "county":"Decatur County"
  },
  {
    "state":"KS",
    "FIPS":20041,
    "number":1681,
    "rate":11.6,
    "population":19758,
    "county":"Dickinson County"
  },
  {
    "state":"KS",
    "FIPS":20043,
    "number":588,
    "rate":10.3,
    "population":7877,
    "county":"Doniphan County"
  },
  {
    "state":"KS",
    "FIPS":20045,
    "number":5060,
    "rate":6,
    "population":113339,
    "county":"Douglas County"
  },
  {
    "state":"KS",
    "FIPS":20047,
    "number":232,
    "rate":10.4,
    "population":2974,
    "county":"Edwards County"
  },
  {
    "state":"KS",
    "FIPS":20051,
    "number":1818,
    "rate":8.4,
    "population":29090,
    "county":"Ellis County"
  },
  {
    "state":"KS",
    "FIPS":20049,
    "number":264,
    "rate":12.6,
    "population":2669,
    "county":"Elk County"
  },
  {
    "state":"KS",
    "FIPS":20053,
    "number":555,
    "rate":10.8,
    "population":6465,
    "county":"Ellsworth County"
  },
  {
    "state":"KS",
    "FIPS":20055,
    "number":2160,
    "rate":8.9,
    "population":37130,
    "county":"Finney County"
  },
  {
    "state":"KS",
    "FIPS":20057,
    "number":2019,
    "rate":8.9,
    "population":34773,
    "county":"Ford County"
  },
  {
    "state":"KS",
    "FIPS":20059,
    "number":1968,
    "rate":10.6,
    "population":25878,
    "county":"Franklin County"
  },
  {
    "state":"KS",
    "FIPS":20061,
    "number":2006,
    "rate":7.9,
    "population":38003,
    "county":"Geary County"
  },
  {
    "state":"KS",
    "FIPS":20063,
    "number":250,
    "rate":12.3,
    "population":2721,
    "county":"Gove County"
  },
  {
    "state":"KS",
    "FIPS":20065,
    "number":226,
    "rate":11.1,
    "population":2592,
    "county":"Graham County"
  },
  {
    "state":"KS",
    "FIPS":20067,
    "number":460,
    "rate":8.9,
    "population":7852,
    "county":"Grant County"
  },
  {
    "state":"KS",
    "FIPS":20069,
    "number":379,
    "rate":9.3,
    "population":5994,
    "county":"Gray County"
  },
  {
    "state":"KS",
    "FIPS":20071,
    "number":99,
    "rate":10.4,
    "population":1266,
    "county":"Greeley County"
  },
  {
    "state":"KS",
    "FIPS":20073,
    "number":575,
    "rate":11.6,
    "population":6446,
    "county":"Greenwood County"
  },
  {
    "state":"KS",
    "FIPS":20075,
    "number":159,
    "rate":8.7,
    "population":2631,
    "county":"Hamilton County"
  },
  {
    "state":"KS",
    "FIPS":20077,
    "number":481,
    "rate":11,
    "population":5874,
    "county":"Harper County"
  },
  {
    "state":"KS",
    "FIPS":20079,
    "number":2557,
    "rate":10.3,
    "population":34831,
    "county":"Harvey County"
  },
  {
    "state":"KS",
    "FIPS":20081,
    "number":246,
    "rate":8.8,
    "population":4221,
    "county":"Haskell County"
  },
  {
    "state":"KS",
    "FIPS":20083,
    "number":176,
    "rate":12.1,
    "population":1953,
    "county":"Hodgeman County"
  },
  {
    "state":"KS",
    "FIPS":20085,
    "number":1052,
    "rate":11,
    "population":13448,
    "county":"Jackson County"
  },
  {
    "state":"KS",
    "FIPS":20087,
    "number":1448,
    "rate":10.4,
    "population":18901,
    "county":"Jefferson County"
  },
  {
    "state":"KS",
    "FIPS":20089,
    "number":309,
    "rate":12.8,
    "population":3037,
    "county":"Jewell County"
  },
  {
    "state":"KS",
    "FIPS":20091,
    "number":28547,
    "rate":7.1,
    "population":559954,
    "county":"Johnson County"
  },
  {
    "state":"KS",
    "FIPS":20093,
    "number":270,
    "rate":10.1,
    "population":3976,
    "county":"Kearny County"
  },
  {
    "state":"KS",
    "FIPS":20095,
    "number":768,
    "rate":13.1,
    "population":7828,
    "county":"Kingman County"
  },
  {
    "state":"KS",
    "FIPS":20097,
    "number":193,
    "rate":10.3,
    "population":2499,
    "county":"Kiowa County"
  },
  {
    "state":"KS",
    "FIPS":20099,
    "number":1856,
    "rate":11.9,
    "population":21219,
    "county":"Labette County"
  },
  {
    "state":"KS",
    "FIPS":20101,
    "number":145,
    "rate":11.2,
    "population":1700,
    "county":"Lane County"
  },
  {
    "state":"KS",
    "FIPS":20103,
    "number":5289,
    "rate":9.3,
    "population":77729,
    "county":"Leavenworth County"
  },
  {
    "state":"KS",
    "FIPS":20105,
    "number":264,
    "rate":11.3,
    "population":3159,
    "county":"Lincoln County"
  },
  {
    "state":"KS",
    "FIPS":20107,
    "number":739,
    "rate":10.4,
    "population":9481,
    "county":"Linn County"
  },
  {
    "state":"KS",
    "FIPS":20109,
    "number":291,
    "rate":14,
    "population":2795,
    "county":"Logan County"
  },
  {
    "state":"KS",
    "FIPS":20111,
    "number":2447,
    "rate":10.1,
    "population":33529,
    "county":"Lyon County"
  },
  {
    "state":"KS",
    "FIPS":20115,
    "number":902,
    "rate":9.7,
    "population":12372,
    "county":"Marion County"
  },
  {
    "state":"KS",
    "FIPS":20117,
    "number":766,
    "rate":10.1,
    "population":10066,
    "county":"Marshall County"
  },
  {
    "state":"KS",
    "FIPS":20113,
    "number":2091,
    "rate":9.6,
    "population":29341,
    "county":"McPherson County"
  },
  {
    "state":"KS",
    "FIPS":20119,
    "number":329,
    "rate":10.7,
    "population":4415,
    "county":"Meade County"
  },
  {
    "state":"KS",
    "FIPS":20121,
    "number":2270,
    "rate":9.8,
    "population":32605,
    "county":"Miami County"
  },
  {
    "state":"KS",
    "FIPS":20123,
    "number":553,
    "rate":11.7,
    "population":6342,
    "county":"Mitchell County"
  },
  {
    "state":"KS",
    "FIPS":20125,
    "number":3529,
    "rate":14.1,
    "population":34433,
    "county":"Montgomery County"
  },
  {
    "state":"KS",
    "FIPS":20127,
    "number":475,
    "rate":10.5,
    "population":5851,
    "county":"Morris County"
  },
  {
    "state":"KS",
    "FIPS":20129,
    "number":249,
    "rate":11.1,
    "population":3139,
    "county":"Morton County"
  },
  {
    "state":"KS",
    "FIPS":20131,
    "number":744,
    "rate":10.3,
    "population":10104,
    "county":"Nemaha County"
  },
  {
    "state":"KS",
    "FIPS":20133,
    "number":1450,
    "rate":12.2,
    "population":16452,
    "county":"Neosho County"
  },
  {
    "state":"KS",
    "FIPS":20135,
    "number":265,
    "rate":11.4,
    "population":3085,
    "county":"Ness County"
  },
  {
    "state":"KS",
    "FIPS":20137,
    "number":473,
    "rate":10.7,
    "population":5605,
    "county":"Norton County"
  },
  {
    "state":"KS",
    "FIPS":20139,
    "number":1323,
    "rate":11.2,
    "population":16173,
    "county":"Osage County"
  },
  {
    "state":"KS",
    "FIPS":20141,
    "number":353,
    "rate":12,
    "population":3815,
    "county":"Osborne County"
  },
  {
    "state":"KS",
    "FIPS":20143,
    "number":514,
    "rate":11.6,
    "population":6061,
    "county":"Ottawa County"
  },
  {
    "state":"KS",
    "FIPS":20145,
    "number":607,
    "rate":11.4,
    "population":6913,
    "county":"Pawnee County"
  },
  {
    "state":"KS",
    "FIPS":20147,
    "number":476,
    "rate":11.6,
    "population":5521,
    "county":"Phillips County"
  },
  {
    "state":"KS",
    "FIPS":20149,
    "number":1629,
    "rate":10.7,
    "population":22351,
    "county":"Pottawatomie County"
  },
  {
    "state":"KS",
    "FIPS":20151,
    "number":791,
    "rate":11.1,
    "population":9787,
    "county":"Pratt County"
  },
  {
    "state":"KS",
    "FIPS":20153,
    "number":264,
    "rate":13,
    "population":2538,
    "county":"Rawlins County"
  },
  {
    "state":"KS",
    "FIPS":20155,
    "number":5641,
    "rate":11.8,
    "population":64217,
    "county":"Reno County"
  },
  {
    "state":"KS",
    "FIPS":20157,
    "number":423,
    "rate":11.1,
    "population":4858,
    "county":"Republic County"
  },
  {
    "state":"KS",
    "FIPS":20159,
    "number":818,
    "rate":11.3,
    "population":10009,
    "county":"Rice County"
  },
  {
    "state":"KS",
    "FIPS":20161,
    "number":3299,
    "rate":5.8,
    "population":76297,
    "county":"Riley County"
  },
  {
    "state":"KS",
    "FIPS":20163,
    "number":412,
    "rate":10.5,
    "population":5197,
    "county":"Rooks County"
  },
  {
    "state":"KS",
    "FIPS":20165,
    "number":273,
    "rate":10.9,
    "population":3207,
    "county":"Rush County"
  },
  {
    "state":"KS",
    "FIPS":20167,
    "number":717,
    "rate":13.4,
    "population":6963,
    "county":"Russell County"
  },
  {
    "state":"KS",
    "FIPS":20169,
    "number":4706,
    "rate":11.6,
    "population":55890,
    "county":"Saline County"
  },
  {
    "state":"KS",
    "FIPS":20171,
    "number":335,
    "rate":9.4,
    "population":4900,
    "county":"Scott County"
  },
  {
    "state":"KS",
    "FIPS":20173,
    "number":36806,
    "rate":10.3,
    "population":503821,
    "county":"Sedgwick County"
  },
  {
    "state":"KS",
    "FIPS":20175,
    "number":1344,
    "rate":8.9,
    "population":23453,
    "county":"Seward County"
  },
  {
    "state":"KS",
    "FIPS":20177,
    "number":13584,
    "rate":10.4,
    "population":178904,
    "county":"Shawnee County"
  },
  {
    "state":"KS",
    "FIPS":20179,
    "number":228,
    "rate":12,
    "population":2533,
    "county":"Sheridan County"
  },
  {
    "state":"KS",
    "FIPS":20181,
    "number":462,
    "rate":10.1,
    "population":6125,
    "county":"Sherman County"
  },
  {
    "state":"KS",
    "FIPS":20183,
    "number":345,
    "rate":11.7,
    "population":3754,
    "county":"Smith County"
  },
  {
    "state":"KS",
    "FIPS":20185,
    "number":376,
    "rate":11.7,
    "population":4354,
    "county":"Stafford County"
  },
  {
    "state":"KS",
    "FIPS":20187,
    "number":153,
    "rate":10.1,
    "population":2170,
    "county":"Stanton County"
  },
  {
    "state":"KS",
    "FIPS":20189,
    "number":391,
    "rate":10.1,
    "population":5737,
    "county":"Stevens County"
  },
  {
    "state":"KS",
    "FIPS":20191,
    "number":2088,
    "rate":12.2,
    "population":23706,
    "county":"Sumner County"
  },
  {
    "state":"KS",
    "FIPS":20193,
    "number":512,
    "rate":8.9,
    "population":7947,
    "county":"Thomas County"
  },
  {
    "state":"KS",
    "FIPS":20195,
    "number":256,
    "rate":10.9,
    "population":2969,
    "county":"Trego County"
  },
  {
    "state":"KS",
    "FIPS":20197,
    "number":468,
    "rate":9.1,
    "population":7018,
    "county":"Wabaunsee County"
  },
  {
    "state":"KS",
    "FIPS":20199,
    "number":129,
    "rate":11.8,
    "population":1524,
    "county":"Wallace County"
  },
  {
    "state":"KS",
    "FIPS":20201,
    "number":488,
    "rate":11.3,
    "population":5731,
    "county":"Washington County"
  },
  {
    "state":"KS",
    "FIPS":20203,
    "number":171,
    "rate":10.7,
    "population":2226,
    "county":"Wichita County"
  },
  {
    "state":"KS",
    "FIPS":20205,
    "number":905,
    "rate":13.4,
    "population":9119,
    "county":"Wilson County"
  },
  {
    "state":"KS",
    "FIPS":20207,
    "number":304,
    "rate":12.1,
    "population":3260,
    "county":"Woodson County"
  },
  {
    "state":"KS",
    "FIPS":20209,
    "number":14149,
    "rate":12.8,
    "population":159303,
    "county":"Wyandotte County"
  },
  {
    "state":"KY",
    "FIPS":21001,
    "number":1711,
    "rate":12.3,
    "population":18971,
    "county":"Adair County"
  },
  {
    "state":"KY",
    "FIPS":21003,
    "number":1785,
    "rate":12,
    "population":20231,
    "county":"Allen County"
  },
  {
    "state":"KY",
    "FIPS":21005,
    "number":1770,
    "rate":11.2,
    "population":21663,
    "county":"Anderson County"
  },
  {
    "state":"KY",
    "FIPS":21007,
    "number":871,
    "rate":13.9,
    "population":8304,
    "county":"Ballard County"
  },
  {
    "state":"KY",
    "FIPS":21009,
    "number":3953,
    "rate":12.5,
    "population":42669,
    "county":"Barren County"
  },
  {
    "state":"KY",
    "FIPS":21011,
    "number":1078,
    "rate":12.5,
    "population":11799,
    "county":"Bath County"
  },
  {
    "state":"KY",
    "FIPS":21013,
    "number":2836,
    "rate":13.2,
    "population":28152,
    "county":"Bell County"
  },
  {
    "state":"KY",
    "FIPS":21015,
    "number":9457,
    "rate":11,
    "population":123258,
    "county":"Boone County"
  },
  {
    "state":"KY",
    "FIPS":21017,
    "number":2083,
    "rate":14,
    "population":19996,
    "county":"Bourbon County"
  },
  {
    "state":"KY",
    "FIPS":21019,
    "number":5625,
    "rate":14.9,
    "population":49284,
    "county":"Boyd County"
  },
  {
    "state":"KY",
    "FIPS":21021,
    "number":2509,
    "rate":11.5,
    "population":29048,
    "county":"Boyle County"
  },
  {
    "state":"KY",
    "FIPS":21023,
    "number":807,
    "rate":13,
    "population":8464,
    "county":"Bracken County"
  },
  {
    "state":"KY",
    "FIPS":21025,
    "number":1469,
    "rate":14.2,
    "population":13645,
    "county":"Breathitt County"
  },
  {
    "state":"KY",
    "FIPS":21027,
    "number":2153,
    "rate":14.5,
    "population":20098,
    "county":"Breckinridge County"
  },
  {
    "state":"KY",
    "FIPS":21029,
    "number":6662,
    "rate":11.9,
    "population":75913,
    "county":"Bullitt County"
  },
  {
    "state":"KY",
    "FIPS":21031,
    "number":1339,
    "rate":14,
    "population":12806,
    "county":"Butler County"
  },
  {
    "state":"KY",
    "FIPS":21033,
    "number":1195,
    "rate":12.3,
    "population":12921,
    "county":"Caldwell County"
  },
  {
    "state":"KY",
    "FIPS":21035,
    "number":2931,
    "rate":10.2,
    "population":38228,
    "county":"Calloway County"
  },
  {
    "state":"KY",
    "FIPS":21037,
    "number":7184,
    "rate":10.6,
    "population":91175,
    "county":"Campbell County"
  },
  {
    "state":"KY",
    "FIPS":21039,
    "number":468,
    "rate":12.3,
    "population":5042,
    "county":"Carlisle County"
  },
  {
    "state":"KY",
    "FIPS":21041,
    "number":1077,
    "rate":13.6,
    "population":10874,
    "county":"Carroll County"
  },
  {
    "state":"KY",
    "FIPS":21043,
    "number":2825,
    "rate":13.9,
    "population":27471,
    "county":"Carter County"
  },
  {
    "state":"KY",
    "FIPS":21045,
    "number":1473,
    "rate":12.3,
    "population":16086,
    "county":"Casey County"
  },
  {
    "state":"KY",
    "FIPS":21047,
    "number":5659,
    "rate":10.9,
    "population":75770,
    "county":"Christian County"
  },
  {
    "state":"KY",
    "FIPS":21049,
    "number":3234,
    "rate":12.1,
    "population":35739,
    "county":"Clark County"
  },
  {
    "state":"KY",
    "FIPS":21051,
    "number":2064,
    "rate":12.6,
    "population":21541,
    "county":"Clay County"
  },
  {
    "state":"KY",
    "FIPS":21053,
    "number":896,
    "rate":11.7,
    "population":10233,
    "county":"Clinton County"
  },
  {
    "state":"KY",
    "FIPS":21055,
    "number":898,
    "rate":12.8,
    "population":9247,
    "county":"Crittenden County"
  },
  {
    "state":"KY",
    "FIPS":21057,
    "number":654,
    "rate":12.6,
    "population":6859,
    "county":"Cumberland County"
  },
  {
    "state":"KY",
    "FIPS":21059,
    "number":7673,
    "rate":10.7,
    "population":97727,
    "county":"Daviess County"
  },
  {
    "state":"KY",
    "FIPS":21061,
    "number":1295,
    "rate":14,
    "population":12130,
    "county":"Edmonson County"
  },
  {
    "state":"KY",
    "FIPS":21063,
    "number":750,
    "rate":12.2,
    "population":7748,
    "county":"Elliott County"
  },
  {
    "state":"KY",
    "FIPS":21065,
    "number":1638,
    "rate":14.9,
    "population":14486,
    "county":"Estill County"
  },
  {
    "state":"KY",
    "FIPS":21067,
    "number":20729,
    "rate":9,
    "population":305251,
    "county":"Fayette County"
  },
  {
    "state":"KY",
    "FIPS":21069,
    "number":1396,
    "rate":13.1,
    "population":14532,
    "county":"Fleming County"
  },
  {
    "state":"KY",
    "FIPS":21071,
    "number":4284,
    "rate":14.4,
    "population":39141,
    "county":"Floyd County"
  },
  {
    "state":"KY",
    "FIPS":21073,
    "number":4617,
    "rate":12.3,
    "population":49379,
    "county":"Franklin County"
  },
  {
    "state":"KY",
    "FIPS":21075,
    "number":716,
    "rate":14.2,
    "population":6547,
    "county":"Fulton County"
  },
  {
    "state":"KY",
    "FIPS":21077,
    "number":683,
    "rate":11.3,
    "population":8491,
    "county":"Gallatin County"
  },
  {
    "state":"KY",
    "FIPS":21079,
    "number":1594,
    "rate":12.5,
    "population":16922,
    "county":"Garrard County"
  },
  {
    "state":"KY",
    "FIPS":21081,
    "number":2106,
    "rate":12.3,
    "population":24491,
    "county":"Grant County"
  },
  {
    "state":"KY",
    "FIPS":21083,
    "number":3236,
    "rate":11.8,
    "population":37535,
    "county":"Graves County"
  },
  {
    "state":"KY",
    "FIPS":21085,
    "number":2490,
    "rate":13,
    "population":25865,
    "county":"Grayson County"
  },
  {
    "state":"KY",
    "FIPS":21087,
    "number":1050,
    "rate":12.3,
    "population":11300,
    "county":"Green County"
  },
  {
    "state":"KY",
    "FIPS":21089,
    "number":3829,
    "rate":13.7,
    "population":36718,
    "county":"Greenup County"
  },
  {
    "state":"KY",
    "FIPS":21091,
    "number":807,
    "rate":12.9,
    "population":8671,
    "county":"Hancock County"
  },
  {
    "state":"KY",
    "FIPS":21093,
    "number":8896,
    "rate":11.6,
    "population":107052,
    "county":"Hardin County"
  },
  {
    "state":"KY",
    "FIPS":21095,
    "number":3340,
    "rate":15.4,
    "population":28616,
    "county":"Harlan County"
  },
  {
    "state":"KY",
    "FIPS":21097,
    "number":1691,
    "rate":12.2,
    "population":18592,
    "county":"Harrison County"
  },
  {
    "state":"KY",
    "FIPS":21099,
    "number":1812,
    "rate":13.5,
    "population":18433,
    "county":"Hart County"
  },
  {
    "state":"KY",
    "FIPS":21101,
    "number":3840,
    "rate":11.1,
    "population":46462,
    "county":"Henderson County"
  },
  {
    "state":"KY",
    "FIPS":21103,
    "number":1291,
    "rate":11.4,
    "population":15342,
    "county":"Henry County"
  },
  {
    "state":"KY",
    "FIPS":21105,
    "number":516,
    "rate":13.9,
    "population":4764,
    "county":"Hickman County"
  },
  {
    "state":"KY",
    "FIPS":21107,
    "number":4384,
    "rate":12.6,
    "population":46702,
    "county":"Hopkins County"
  },
  {
    "state":"KY",
    "FIPS":21109,
    "number":1129,
    "rate":11.3,
    "population":13298,
    "county":"Jackson County"
  },
  {
    "state":"KY",
    "FIPS":21111,
    "number":67071,
    "rate":11.9,
    "population":751327,
    "county":"Jefferson County"
  },
  {
    "state":"KY",
    "FIPS":21113,
    "number":3590,
    "rate":10.1,
    "population":49563,
    "county":"Jessamine County"
  },
  {
    "state":"KY",
    "FIPS":21115,
    "number":2712,
    "rate":15.3,
    "population":23415,
    "county":"Johnson County"
  },
  {
    "state":"KY",
    "FIPS":21117,
    "number":11233,
    "rate":9.5,
    "population":161671,
    "county":"Kenton County"
  },
  {
    "state":"KY",
    "FIPS":21119,
    "number":1828,
    "rate":15,
    "population":16087,
    "county":"Knott County"
  },
  {
    "state":"KY",
    "FIPS":21121,
    "number":3476,
    "rate":14.9,
    "population":31700,
    "county":"Knox County"
  },
  {
    "state":"KY",
    "FIPS":21123,
    "number":1384,
    "rate":13.1,
    "population":14085,
    "county":"Larue County"
  },
  {
    "state":"KY",
    "FIPS":21125,
    "number":5560,
    "rate":12.6,
    "population":59587,
    "county":"Laurel County"
  },
  {
    "state":"KY",
    "FIPS":21127,
    "number":1944,
    "rate":16.4,
    "population":15827,
    "county":"Lawrence County"
  },
  {
    "state":"KY",
    "FIPS":21129,
    "number":765,
    "rate":13.5,
    "population":7646,
    "county":"Lee County"
  },
  {
    "state":"KY",
    "FIPS":21131,
    "number":1387,
    "rate":16.2,
    "population":11144,
    "county":"Leslie County"
  },
  {
    "state":"KY",
    "FIPS":21133,
    "number":2818,
    "rate":15.4,
    "population":23946,
    "county":"Letcher County"
  },
  {
    "state":"KY",
    "FIPS":21135,
    "number":1330,
    "rate":12.8,
    "population":13842,
    "county":"Lewis County"
  },
  {
    "state":"KY",
    "FIPS":21137,
    "number":2125,
    "rate":11.8,
    "population":24408,
    "county":"Lincoln County"
  },
  {
    "state":"KY",
    "FIPS":21139,
    "number":866,
    "rate":11.8,
    "population":9447,
    "county":"Livingston County"
  },
  {
    "state":"KY",
    "FIPS":21141,
    "number":2614,
    "rate":13.3,
    "population":26703,
    "county":"Logan County"
  },
  {
    "state":"KY",
    "FIPS":21143,
    "number":956,
    "rate":13.6,
    "population":8437,
    "county":"Lyon County"
  },
  {
    "state":"KY",
    "FIPS":21151,
    "number":6415,
    "rate":10.3,
    "population":85206,
    "county":"Madison County"
  },
  {
    "state":"KY",
    "FIPS":21153,
    "number":1334,
    "rate":13.7,
    "population":13030,
    "county":"Magoffin County"
  },
  {
    "state":"KY",
    "FIPS":21155,
    "number":1594,
    "rate":10.8,
    "population":19990,
    "county":"Marion County"
  },
  {
    "state":"KY",
    "FIPS":21157,
    "number":2418,
    "rate":10,
    "population":31268,
    "county":"Marshall County"
  },
  {
    "state":"KY",
    "FIPS":21159,
    "number":1330,
    "rate":13.6,
    "population":12763,
    "county":"Martin County"
  },
  {
    "state":"KY",
    "FIPS":21161,
    "number":1891,
    "rate":14.7,
    "population":17463,
    "county":"Mason County"
  },
  {
    "state":"KY",
    "FIPS":21145,
    "number":4864,
    "rate":9.8,
    "population":65645,
    "county":"McCracken County"
  },
  {
    "state":"KY",
    "FIPS":21147,
    "number":2084,
    "rate":15.3,
    "population":18035,
    "county":"McCreary County"
  },
  {
    "state":"KY",
    "FIPS":21149,
    "number":1104,
    "rate":15.6,
    "population":9520,
    "county":"McLean County"
  },
  {
    "state":"KY",
    "FIPS":21163,
    "number":2165,
    "rate":10.3,
    "population":29276,
    "county":"Meade County"
  },
  {
    "state":"KY",
    "FIPS":21165,
    "number":600,
    "rate":12.6,
    "population":6314,
    "county":"Menifee County"
  },
  {
    "state":"KY",
    "FIPS":21167,
    "number":1844,
    "rate":11.6,
    "population":21343,
    "county":"Mercer County"
  },
  {
    "state":"KY",
    "FIPS":21169,
    "number":998,
    "rate":13.5,
    "population":9983,
    "county":"Metcalfe County"
  },
  {
    "state":"KY",
    "FIPS":21171,
    "number":946,
    "rate":11.7,
    "population":10859,
    "county":"Monroe County"
  },
  {
    "state":"KY",
    "FIPS":21173,
    "number":2539,
    "rate":12.8,
    "population":26880,
    "county":"Montgomery County"
  },
  {
    "state":"KY",
    "FIPS":21175,
    "number":1525,
    "rate":14.4,
    "population":13480,
    "county":"Morgan County"
  },
  {
    "state":"KY",
    "FIPS":21177,
    "number":3076,
    "rate":12.8,
    "population":31359,
    "county":"Muhlenberg County"
  },
  {
    "state":"KY",
    "FIPS":21179,
    "number":3315,
    "rate":10.3,
    "population":44351,
    "county":"Nelson County"
  },
  {
    "state":"KY",
    "FIPS":21181,
    "number":651,
    "rate":12.4,
    "population":7029,
    "county":"Nicholas County"
  },
  {
    "state":"KY",
    "FIPS":21183,
    "number":2637,
    "rate":15,
    "population":24011,
    "county":"Ohio County"
  },
  {
    "state":"KY",
    "FIPS":21185,
    "number":4508,
    "rate":10.4,
    "population":61423,
    "county":"Oldham County"
  },
  {
    "state":"KY",
    "FIPS":21187,
    "number":867,
    "rate":10.9,
    "population":10761,
    "county":"Owen County"
  },
  {
    "state":"KY",
    "FIPS":21189,
    "number":503,
    "rate":14.1,
    "population":4694,
    "county":"Owsley County"
  },
  {
    "state":"KY",
    "FIPS":21191,
    "number":1506,
    "rate":13.9,
    "population":14547,
    "county":"Pendleton County"
  },
  {
    "state":"KY",
    "FIPS":21193,
    "number":2923,
    "rate":13.5,
    "population":28279,
    "county":"Perry County"
  },
  {
    "state":"KY",
    "FIPS":21195,
    "number":7416,
    "rate":15.2,
    "population":64563,
    "county":"Pike County"
  },
  {
    "state":"KY",
    "FIPS":21197,
    "number":1151,
    "rate":12.5,
    "population":12495,
    "county":"Powell County"
  },
  {
    "state":"KY",
    "FIPS":21199,
    "number":6578,
    "rate":13.7,
    "population":63448,
    "county":"Pulaski County"
  },
  {
    "state":"KY",
    "FIPS":21201,
    "number":245,
    "rate":14.3,
    "population":2215,
    "county":"Robertson County"
  },
  {
    "state":"KY",
    "FIPS":21203,
    "number":1631,
    "rate":12.7,
    "population":17069,
    "county":"Rockcastle County"
  },
  {
    "state":"KY",
    "FIPS":21205,
    "number":2072,
    "rate":11.9,
    "population":23414,
    "county":"Rowan County"
  },
  {
    "state":"KY",
    "FIPS":21207,
    "number":1467,
    "rate":11,
    "population":17541,
    "county":"Russell County"
  },
  {
    "state":"KY",
    "FIPS":21209,
    "number":3615,
    "rate":10.4,
    "population":49028,
    "county":"Scott County"
  },
  {
    "state":"KY",
    "FIPS":21211,
    "number":3439,
    "rate":10.8,
    "population":43603,
    "county":"Shelby County"
  },
  {
    "state":"KY",
    "FIPS":21213,
    "number":1529,
    "rate":11.9,
    "population":17559,
    "county":"Simpson County"
  },
  {
    "state":"KY",
    "FIPS":21215,
    "number":1394,
    "rate":11,
    "population":17409,
    "county":"Spencer County"
  },
  {
    "state":"KY",
    "FIPS":21217,
    "number":2434,
    "rate":13.3,
    "population":25049,
    "county":"Taylor County"
  },
  {
    "state":"KY",
    "FIPS":21219,
    "number":987,
    "rate":11.1,
    "population":12640,
    "county":"Todd County"
  },
  {
    "state":"KY",
    "FIPS":21221,
    "number":1398,
    "rate":12.8,
    "population":14392,
    "county":"Trigg County"
  },
  {
    "state":"KY",
    "FIPS":21223,
    "number":769,
    "rate":11.9,
    "population":8842,
    "county":"Trimble County"
  },
  {
    "state":"KY",
    "FIPS":21225,
    "number":1214,
    "rate":11,
    "population":15119,
    "county":"Union County"
  },
  {
    "state":"KY",
    "FIPS":21227,
    "number":7241,
    "rate":8.5,
    "population":117185,
    "county":"Warren County"
  },
  {
    "state":"KY",
    "FIPS":21229,
    "number":1208,
    "rate":13.8,
    "population":11882,
    "county":"Washington County"
  },
  {
    "state":"KY",
    "FIPS":21231,
    "number":2047,
    "rate":13,
    "population":20775,
    "county":"Wayne County"
  },
  {
    "state":"KY",
    "FIPS":21233,
    "number":1335,
    "rate":13.2,
    "population":13479,
    "county":"Webster County"
  },
  {
    "state":"KY",
    "FIPS":21235,
    "number":3265,
    "rate":12.6,
    "population":35505,
    "county":"Whitley County"
  },
  {
    "state":"KY",
    "FIPS":21237,
    "number":652,
    "rate":12.1,
    "population":7188,
    "county":"Wolfe County"
  },
  {
    "state":"KY",
    "FIPS":21239,
    "number":2236,
    "rate":12,
    "population":25039,
    "county":"Woodford County"
  },
  {
    "state":"LA",
    "FIPS":22001,
    "number":5069,
    "rate":11.6,
    "population":61873,
    "county":"Acadia Parish"
  },
  {
    "state":"LA",
    "FIPS":22003,
    "number":2351,
    "rate":12.3,
    "population":25613,
    "county":"Allen Parish"
  },
  {
    "state":"LA",
    "FIPS":22005,
    "number":8699,
    "rate":11.2,
    "population":112173,
    "county":"Ascension Parish"
  },
  {
    "state":"LA",
    "FIPS":22007,
    "number":2167,
    "rate":12.7,
    "population":23073,
    "county":"Assumption Parish"
  },
  {
    "state":"LA",
    "FIPS":22009,
    "number":4768,
    "rate":15.5,
    "population":41602,
    "county":"Avoyelles Parish"
  },
  {
    "state":"LA",
    "FIPS":22011,
    "number":3498,
    "rate":13.4,
    "population":36254,
    "county":"Beauregard Parish"
  },
  {
    "state":"LA",
    "FIPS":22013,
    "number":1526,
    "rate":14.5,
    "population":14163,
    "county":"Bienville Parish"
  },
  {
    "state":"LA",
    "FIPS":22015,
    "number":9332,
    "rate":10.5,
    "population":123073,
    "county":"Bossier Parish"
  },
  {
    "state":"LA",
    "FIPS":22017,
    "number":23441,
    "rate":12.5,
    "population":257328,
    "county":"Caddo Parish"
  },
  {
    "state":"LA",
    "FIPS":22019,
    "number":17145,
    "rate":12.2,
    "population":194653,
    "county":"Calcasieu Parish"
  },
  {
    "state":"LA",
    "FIPS":22021,
    "number":924,
    "rate":12.3,
    "population":10000,
    "county":"Caldwell Parish"
  },
  {
    "state":"LA",
    "FIPS":22023,
    "number":629,
    "rate":12.8,
    "population":6623,
    "county":"Cameron Parish"
  },
  {
    "state":"LA",
    "FIPS":22025,
    "number":926,
    "rate":12,
    "population":10250,
    "county":"Catahoula Parish"
  },
  {
    "state":"LA",
    "FIPS":22027,
    "number":1735,
    "rate":13,
    "population":16861,
    "county":"Claiborne Parish"
  },
  {
    "state":"LA",
    "FIPS":22029,
    "number":2263,
    "rate":15.1,
    "population":20446,
    "county":"Concordia Parish"
  },
  {
    "state":"LA",
    "FIPS":22031,
    "number":2988,
    "rate":15.2,
    "population":27035,
    "county":"De Soto Parish"
  },
  {
    "state":"LA",
    "FIPS":22033,
    "number":37369,
    "rate":11.5,
    "population":444296,
    "county":"East Baton Rouge Parish"
  },
  {
    "state":"LA",
    "FIPS":22035,
    "number":921,
    "rate":16.8,
    "population":7578,
    "county":"East Carroll Parish"
  },
  {
    "state":"LA",
    "FIPS":22037,
    "number":2594,
    "rate":16.7,
    "population":19970,
    "county":"East Feliciana Parish"
  },
  {
    "state":"LA",
    "FIPS":22039,
    "number":3127,
    "rate":13.1,
    "population":33657,
    "county":"Evangeline Parish"
  },
  {
    "state":"LA",
    "FIPS":22041,
    "number":2186,
    "rate":14.7,
    "population":20613,
    "county":"Franklin Parish"
  },
  {
    "state":"LA",
    "FIPS":22043,
    "number":2236,
    "rate":13.4,
    "population":22376,
    "county":"Grant Parish"
  },
  {
    "state":"LA",
    "FIPS":22045,
    "number":6614,
    "rate":12.7,
    "population":73916,
    "county":"Iberia Parish"
  },
  {
    "state":"LA",
    "FIPS":22047,
    "number":3280,
    "rate":13,
    "population":33350,
    "county":"Iberville Parish"
  },
  {
    "state":"LA",
    "FIPS":22049,
    "number":1651,
    "rate":13.5,
    "population":16236,
    "county":"Jackson Parish"
  },
  {
    "state":"LA",
    "FIPS":22053,
    "number":2906,
    "rate":12.9,
    "population":31439,
    "county":"Jefferson Davis Parish"
  },
  {
    "state":"LA",
    "FIPS":22051,
    "number":39352,
    "rate":12,
    "population":434575,
    "county":"Jefferson Parish"
  },
  {
    "state":"LA",
    "FIPS":22059,
    "number":1380,
    "rate":12.4,
    "population":14858,
    "county":"La Salle Parish"
  },
  {
    "state":"LA",
    "FIPS":22055,
    "number":15331,
    "rate":9.2,
    "population":227055,
    "county":"Lafayette Parish"
  },
  {
    "state":"LA",
    "FIPS":22057,
    "number":7374,
    "rate":10.4,
    "population":97125,
    "county":"Lafourche Parish"
  },
  {
    "state":"LA",
    "FIPS":22061,
    "number":3619,
    "rate":10.6,
    "population":47146,
    "county":"Lincoln Parish"
  },
  {
    "state":"LA",
    "FIPS":22063,
    "number":11413,
    "rate":12.2,
    "population":131944,
    "county":"Livingston Parish"
  },
  {
    "state":"LA",
    "FIPS":22065,
    "number":984,
    "rate":11,
    "population":12194,
    "county":"Madison Parish"
  },
  {
    "state":"LA",
    "FIPS":22067,
    "number":3588,
    "rate":17.9,
    "population":27431,
    "county":"Morehouse Parish"
  },
  {
    "state":"LA",
    "FIPS":22069,
    "number":3513,
    "rate":12.5,
    "population":39461,
    "county":"Natchitoches Parish"
  },
  {
    "state":"LA",
    "FIPS":22071,
    "number":33632,
    "rate":11.9,
    "population":370167,
    "county":"Orleans Parish"
  },
  {
    "state":"LA",
    "FIPS":22073,
    "number":12687,
    "rate":11.5,
    "population":155350,
    "county":"Ouachita Parish"
  },
  {
    "state":"LA",
    "FIPS":22075,
    "number":1821,
    "rate":10.8,
    "population":23901,
    "county":"Plaquemines Parish"
  },
  {
    "state":"LA",
    "FIPS":22077,
    "number":2380,
    "rate":14.2,
    "population":22711,
    "county":"Pointe Coupee Parish"
  },
  {
    "state":"LA",
    "FIPS":22079,
    "number":12736,
    "rate":13.4,
    "population":132111,
    "county":"Rapides Parish"
  },
  {
    "state":"LA",
    "FIPS":22081,
    "number":837,
    "rate":12.8,
    "population":9027,
    "county":"Red River Parish"
  },
  {
    "state":"LA",
    "FIPS":22083,
    "number":1919,
    "rate":12.7,
    "population":20923,
    "county":"Richland Parish"
  },
  {
    "state":"LA",
    "FIPS":22085,
    "number":2596,
    "rate":14.5,
    "population":24306,
    "county":"Sabine Parish"
  },
  {
    "state":"LA",
    "FIPS":22087,
    "number":3546,
    "rate":11.9,
    "population":41498,
    "county":"St Bernard Parish"
  },
  {
    "state":"LA",
    "FIPS":22091,
    "number":1301,
    "rate":15.8,
    "population":11032,
    "county":"St Helena Parish"
  },
  {
    "state":"LA",
    "FIPS":22089,
    "number":4239,
    "rate":11.3,
    "population":52437,
    "county":"St. Charles Parish"
  },
  {
    "state":"LA",
    "FIPS":22093,
    "number":2269,
    "rate":14.3,
    "population":21698,
    "county":"St. James Parish"
  },
  {
    "state":"LA",
    "FIPS":22095,
    "number":4510,
    "rate":14.1,
    "population":44753,
    "county":"St. John the Baptist Parish"
  },
  {
    "state":"LA",
    "FIPS":22097,
    "number":8894,
    "rate":15.1,
    "population":83483,
    "county":"St. Landry Parish"
  },
  {
    "state":"LA",
    "FIPS":22099,
    "number":4739,
    "rate":12.5,
    "population":52716,
    "county":"St Martin Parish"
  },
  {
    "state":"LA",
    "FIPS":22101,
    "number":5775,
    "rate":14.8,
    "population":53526,
    "county":"St. Mary Parish"
  },
  {
    "state":"LA",
    "FIPS":22103,
    "number":17970,
    "rate":10.3,
    "population":239346,
    "county":"St. Tammany Parish"
  },
  {
    "state":"LA",
    "FIPS":22105,
    "number":11065,
    "rate":12.5,
    "population":123767,
    "county":"Tangipahoa Parish"
  },
  {
    "state":"LA",
    "FIPS":22107,
    "number":546,
    "rate":15.1,
    "population":4971,
    "county":"Tensas Parish"
  },
  {
    "state":"LA",
    "FIPS":22109,
    "number":11092,
    "rate":13.8,
    "population":111731,
    "county":"Terrebonne Parish"
  },
  {
    "state":"LA",
    "FIPS":22111,
    "number":2669,
    "rate":15.8,
    "population":22535,
    "county":"Union Parish"
  },
  {
    "state":"LA",
    "FIPS":22115,
    "number":4242,
    "rate":11.2,
    "population":54176,
    "county":"Vernon Parish"
  },
  {
    "state":"LA",
    "FIPS":22113,
    "number":5103,
    "rate":12.2,
    "population":58660,
    "county":"Vermilion Parish"
  },
  {
    "state":"LA",
    "FIPS":22117,
    "number":5583,
    "rate":16.4,
    "population":46664,
    "county":"Washington Parish"
  },
  {
    "state":"LA",
    "FIPS":22119,
    "number":4233,
    "rate":13.9,
    "population":40943,
    "county":"Webster Parish"
  },
  {
    "state":"LA",
    "FIPS":22121,
    "number":2370,
    "rate":13.4,
    "population":24068,
    "county":"West Baton Rouge Parish"
  },
  {
    "state":"LA",
    "FIPS":22123,
    "number":1418,
    "rate":16.7,
    "population":11506,
    "county":"West Carroll Parish"
  },
  {
    "state":"LA",
    "FIPS":22125,
    "number":1684,
    "rate":13.4,
    "population":15449,
    "county":"West Feliciana Parish"
  },
  {
    "state":"LA",
    "FIPS":22127,
    "number":1479,
    "rate":13,
    "population":15049,
    "county":"Winn Parish"
  },
  {
    "state":"MA",
    "FIPS":25001,
    "number":15486,
    "rate":8.8,
    "population":214845,
    "county":"Barnstable County"
  },
  {
    "state":"MA",
    "FIPS":25003,
    "number":8957,
    "rate":8.8,
    "population":130230,
    "county":"Berkshire County"
  },
  {
    "state":"MA",
    "FIPS":25005,
    "number":42663,
    "rate":10.3,
    "population":550765,
    "county":"Bristol County"
  },
  {
    "state":"MA",
    "FIPS":25007,
    "number":972,
    "rate":7.3,
    "population":16796,
    "county":"Dukes County"
  },
  {
    "state":"MA",
    "FIPS":25009,
    "number":53523,
    "rate":9.5,
    "population":756763,
    "county":"Essex County"
  },
  {
    "state":"MA",
    "FIPS":25011,
    "number":4574,
    "rate":8.1,
    "population":71544,
    "county":"Franklin County"
  },
  {
    "state":"MA",
    "FIPS":25013,
    "number":36736,
    "rate":10.7,
    "population":466539,
    "county":"Hampden County"
  },
  {
    "state":"MA",
    "FIPS":25015,
    "number":7927,
    "rate":6.5,
    "population":160351,
    "county":"Hampshire County"
  },
  {
    "state":"MA",
    "FIPS":25017,
    "number":99159,
    "rate":8.5,
    "population":1540192,
    "county":"Middlesex County"
  },
  {
    "state":"MA",
    "FIPS":25019,
    "number":581,
    "rate":7.3,
    "population":10342,
    "county":"Nantucket County"
  },
  {
    "state":"MA",
    "FIPS":25021,
    "number":41900,
    "rate":8.2,
    "population":682749,
    "county":"Norfolk County"
  },
  {
    "state":"MA",
    "FIPS":25023,
    "number":37632,
    "rate":10.2,
    "population":499076,
    "county":"Plymouth County"
  },
  {
    "state":"MA",
    "FIPS":25025,
    "number":44460,
    "rate":7.6,
    "population":749504,
    "county":"Suffolk County"
  },
  {
    "state":"MA",
    "FIPS":25027,
    "number":53989,
    "rate":9,
    "population":806133,
    "county":"Worcester County"
  },
  {
    "state":"MD",
    "FIPS":24001,
    "number":7059,
    "rate":12.1,
    "population":73883,
    "county":"Allegany County"
  },
  {
    "state":"MD",
    "FIPS":24003,
    "number":38448,
    "rate":9.4,
    "population":550715,
    "county":"Anne Arundel County"
  },
  {
    "state":"MD",
    "FIPS":24510,
    "number":58631,
    "rate":12.4,
    "population":622950,
    "county":"Baltimore City"
  },
  {
    "state":"MD",
    "FIPS":24005,
    "number":61443,
    "rate":10,
    "population":818425,
    "county":"Baltimore County"
  },
  {
    "state":"MD",
    "FIPS":24009,
    "number":5781,
    "rate":8.9,
    "population":89661,
    "county":"Calvert County"
  },
  {
    "state":"MD",
    "FIPS":24011,
    "number":2699,
    "rate":11.3,
    "population":32628,
    "county":"Caroline County"
  },
  {
    "state":"MD",
    "FIPS":24013,
    "number":10453,
    "rate":8.5,
    "population":167190,
    "county":"Carroll County"
  },
  {
    "state":"MD",
    "FIPS":24015,
    "number":8012,
    "rate":10.7,
    "population":101822,
    "county":"Cecil County"
  },
  {
    "state":"MD",
    "FIPS":24017,
    "number":11156,
    "rate":10.3,
    "population":150791,
    "county":"Charles County"
  },
  {
    "state":"MD",
    "FIPS":24019,
    "number":3616,
    "rate":14.5,
    "population":32488,
    "county":"Dorchester County"
  },
  {
    "state":"MD",
    "FIPS":24021,
    "number":15805,
    "rate":9.1,
    "population":239668,
    "county":"Frederick County"
  },
  {
    "state":"MD",
    "FIPS":24023,
    "number":2811,
    "rate":12.3,
    "population":29901,
    "county":"Garrett County"
  },
  {
    "state":"MD",
    "FIPS":24025,
    "number":17856,
    "rate":9.7,
    "population":248696,
    "county":"Harford County"
  },
  {
    "state":"MD",
    "FIPS":24027,
    "number":17372,
    "rate":8,
    "population":299685,
    "county":"Howard County"
  },
  {
    "state":"MD",
    "FIPS":24029,
    "number":1642,
    "rate":10.4,
    "population":19999,
    "county":"Kent County"
  },
  {
    "state":"MD",
    "FIPS":24031,
    "number":56365,
    "rate":7.6,
    "population":1006547,
    "county":"Montgomery County"
  },
  {
    "state":"MD",
    "FIPS":24033,
    "number":74082,
    "rate":11.4,
    "population":883764,
    "county":"Prince George's County"
  },
  {
    "state":"MD",
    "FIPS":24035,
    "number":3446,
    "rate":9.5,
    "population":48570,
    "county":"Queen Anne's County"
  },
  {
    "state":"MD",
    "FIPS":24039,
    "number":2543,
    "rate":12.4,
    "population":26153,
    "county":"Somerset County"
  },
  {
    "state":"MD",
    "FIPS":24037,
    "number":7553,
    "rate":9.7,
    "population":108999,
    "county":"St. Mary's County"
  },
  {
    "state":"MD",
    "FIPS":24041,
    "number":3407,
    "rate":11.3,
    "population":38062,
    "county":"Talbot County"
  },
  {
    "state":"MD",
    "FIPS":24043,
    "number":14004,
    "rate":12.5,
    "population":149162,
    "county":"Washington County"
  },
  {
    "state":"MD",
    "FIPS":24045,
    "number":8126,
    "rate":11.1,
    "population":100472,
    "county":"Wicomico County"
  },
  {
    "state":"MD",
    "FIPS":24047,
    "number":5196,
    "rate":12.6,
    "population":51588,
    "county":"Worcester County"
  },
  {
    "state":"ME",
    "FIPS":23001,
    "number":8826,
    "rate":10.9,
    "population":107506,
    "county":"Androscoggin County"
  },
  {
    "state":"ME",
    "FIPS":23003,
    "number":7833,
    "rate":14.2,
    "population":70744,
    "county":"Aroostook County"
  },
  {
    "state":"ME",
    "FIPS":23005,
    "number":16519,
    "rate":7.6,
    "population":284050,
    "county":"Cumberland County"
  },
  {
    "state":"ME",
    "FIPS":23007,
    "number":2124,
    "rate":9,
    "population":30627,
    "county":"Franklin County"
  },
  {
    "state":"ME",
    "FIPS":23009,
    "number":3872,
    "rate":8.9,
    "population":54536,
    "county":"Hancock County"
  },
  {
    "state":"ME",
    "FIPS":23011,
    "number":9844,
    "rate":10.5,
    "population":121586,
    "county":"Kennebec County"
  },
  {
    "state":"ME",
    "FIPS":23013,
    "number":2690,
    "rate":8.5,
    "population":39608,
    "county":"Knox County"
  },
  {
    "state":"ME",
    "FIPS":23015,
    "number":2559,
    "rate":9.3,
    "population":34195,
    "county":"Lincoln County"
  },
  {
    "state":"ME",
    "FIPS":23017,
    "number":4479,
    "rate":10.1,
    "population":57496,
    "county":"Oxford County"
  },
  {
    "state":"ME",
    "FIPS":23019,
    "number":12562,
    "rate":10.6,
    "population":153612,
    "county":"Penobscot County"
  },
  {
    "state":"ME",
    "FIPS":23021,
    "number":1717,
    "rate":12.5,
    "population":17260,
    "county":"Piscataquis County"
  },
  {
    "state":"ME",
    "FIPS":23023,
    "number":2584,
    "rate":9.4,
    "population":35114,
    "county":"Sagadahoc County"
  },
  {
    "state":"ME",
    "FIPS":23025,
    "number":4757,
    "rate":11.9,
    "population":51829,
    "county":"Somerset County"
  },
  {
    "state":"ME",
    "FIPS":23027,
    "number":2997,
    "rate":10,
    "population":38889,
    "county":"Waldo County"
  },
  {
    "state":"ME",
    "FIPS":23029,
    "number":2779,
    "rate":11,
    "population":32485,
    "county":"Washington County"
  },
  {
    "state":"ME",
    "FIPS":23031,
    "number":15011,
    "rate":9.8,
    "population":199055,
    "county":"York County"
  },
  {
    "state":"MI",
    "FIPS":26001,
    "number":1261,
    "rate":14.1,
    "population":10599,
    "county":"Alcona County"
  },
  {
    "state":"MI",
    "FIPS":26003,
    "number":870,
    "rate":11.1,
    "population":9494,
    "county":"Alger County"
  },
  {
    "state":"MI",
    "FIPS":26005,
    "number":7605,
    "rate":9.4,
    "population":111939,
    "county":"Allegan County"
  },
  {
    "state":"MI",
    "FIPS":26007,
    "number":2757,
    "rate":12.1,
    "population":29240,
    "county":"Alpena County"
  },
  {
    "state":"MI",
    "FIPS":26009,
    "number":2140,
    "rate":11.7,
    "population":23361,
    "county":"Antrim County"
  },
  {
    "state":"MI",
    "FIPS":26011,
    "number":1673,
    "rate":13.7,
    "population":15512,
    "county":"Arenac County"
  },
  {
    "state":"MI",
    "FIPS":26013,
    "number":807,
    "rate":11.8,
    "population":8706,
    "county":"Baraga County"
  },
  {
    "state":"MI",
    "FIPS":26015,
    "number":4217,
    "rate":9.7,
    "population":59073,
    "county":"Barry County"
  },
  {
    "state":"MI",
    "FIPS":26017,
    "number":8586,
    "rate":10.5,
    "population":107084,
    "county":"Bay County"
  },
  {
    "state":"MI",
    "FIPS":26019,
    "number":1682,
    "rate":12.3,
    "population":17387,
    "county":"Benzie County"
  },
  {
    "state":"MI",
    "FIPS":26021,
    "number":15013,
    "rate":12.9,
    "population":156057,
    "county":"Berrien County"
  },
  {
    "state":"MI",
    "FIPS":26023,
    "number":3603,
    "rate":11.2,
    "population":43756,
    "county":"Branch County"
  },
  {
    "state":"MI",
    "FIPS":26025,
    "number":12085,
    "rate":12.2,
    "population":134760,
    "county":"Calhoun County"
  },
  {
    "state":"MI",
    "FIPS":26027,
    "number":4588,
    "rate":11.7,
    "population":52054,
    "county":"Cass County"
  },
  {
    "state":"MI",
    "FIPS":26029,
    "number":1981,
    "rate":9.9,
    "population":26039,
    "county":"Charlevoix County"
  },
  {
    "state":"MI",
    "FIPS":26031,
    "number":2287,
    "rate":11.2,
    "population":25774,
    "county":"Cheboygan County"
  },
  {
    "state":"MI",
    "FIPS":26033,
    "number":3473,
    "rate":11.6,
    "population":38996,
    "county":"Chippewa County"
  },
  {
    "state":"MI",
    "FIPS":26035,
    "number":2803,
    "rate":11.8,
    "population":30780,
    "county":"Clare County"
  },
  {
    "state":"MI",
    "FIPS":26037,
    "number":5204,
    "rate":9.2,
    "population":76426,
    "county":"Clinton County"
  },
  {
    "state":"MI",
    "FIPS":26039,
    "number":1276,
    "rate":11.6,
    "population":13985,
    "county":"Crawford County"
  },
  {
    "state":"MI",
    "FIPS":26041,
    "number":3416,
    "rate":12,
    "population":36831,
    "county":"Delta County"
  },
  {
    "state":"MI",
    "FIPS":26043,
    "number":2617,
    "rate":12.9,
    "population":26228,
    "county":"Dickinson County"
  },
  {
    "state":"MI",
    "FIPS":26045,
    "number":9202,
    "rate":11.4,
    "population":107968,
    "county":"Eaton County"
  },
  {
    "state":"MI",
    "FIPS":26047,
    "number":2298,
    "rate":9.2,
    "population":32895,
    "county":"Emmet County"
  },
  {
    "state":"MI",
    "FIPS":26049,
    "number":39947,
    "rate":13,
    "population":418058,
    "county":"Genesee County"
  },
  {
    "state":"MI",
    "FIPS":26051,
    "number":2644,
    "rate":13.2,
    "population":25508,
    "county":"Gladwin County"
  },
  {
    "state":"MI",
    "FIPS":26053,
    "number":1482,
    "rate":11.3,
    "population":16050,
    "county":"Gogebic County"
  },
  {
    "state":"MI",
    "FIPS":26055,
    "number":6175,
    "rate":9.1,
    "population":89005,
    "county":"Grand Traverse County"
  },
  {
    "state":"MI",
    "FIPS":26057,
    "number":3452,
    "rate":10.8,
    "population":42031,
    "county":"Gratiot County"
  },
  {
    "state":"MI",
    "FIPS":26059,
    "number":3623,
    "rate":10.6,
    "population":46264,
    "county":"Hillsdale County"
  },
  {
    "state":"MI",
    "FIPS":26061,
    "number":2703,
    "rate":10.1,
    "population":36850,
    "county":"Houghton County"
  },
  {
    "state":"MI",
    "FIPS":26063,
    "number":2990,
    "rate":11.8,
    "population":32466,
    "county":"Huron County"
  },
  {
    "state":"MI",
    "FIPS":26065,
    "number":18757,
    "rate":9,
    "population":282272,
    "county":"Ingham County"
  },
  {
    "state":"MI",
    "FIPS":26067,
    "number":4561,
    "rate":9.7,
    "population":63896,
    "county":"Ionia County"
  },
  {
    "state":"MI",
    "FIPS":26069,
    "number":2570,
    "rate":12.5,
    "population":25370,
    "county":"Iosco County"
  },
  {
    "state":"MI",
    "FIPS":26071,
    "number":1256,
    "rate":13.3,
    "population":11586,
    "county":"Iron County"
  },
  {
    "state":"MI",
    "FIPS":26073,
    "number":4239,
    "rate":8.1,
    "population":70552,
    "county":"Isabella County"
  },
  {
    "state":"MI",
    "FIPS":26075,
    "number":12923,
    "rate":10.8,
    "population":160156,
    "county":"Jackson County"
  },
  {
    "state":"MI",
    "FIPS":26077,
    "number":15333,
    "rate":8.1,
    "population":255020,
    "county":"Kalamazoo County"
  },
  {
    "state":"MI",
    "FIPS":26081,
    "number":41776,
    "rate":9.5,
    "population":614545,
    "county":"Kent County"
  },
  {
    "state":"MI",
    "FIPS":26079,
    "number":1652,
    "rate":12.8,
    "population":17082,
    "county":"Kalkaska County"
  },
  {
    "state":"MI",
    "FIPS":26083,
    "number":230,
    "rate":12.8,
    "population":2207,
    "county":"Keweenaw County"
  },
  {
    "state":"MI",
    "FIPS":26085,
    "number":1230,
    "rate":13.2,
    "population":11468,
    "county":"Lake County"
  },
  {
    "state":"MI",
    "FIPS":26087,
    "number":6364,
    "rate":9.7,
    "population":88184,
    "county":"Lapeer County"
  },
  {
    "state":"MI",
    "FIPS":26089,
    "number":1762,
    "rate":10.2,
    "population":21636,
    "county":"Leelanau County"
  },
  {
    "state":"MI",
    "FIPS":26091,
    "number":9064,
    "rate":12.3,
    "population":99150,
    "county":"Lenawee County"
  },
  {
    "state":"MI",
    "FIPS":26093,
    "number":12449,
    "rate":9.3,
    "population":183013,
    "county":"Livingston County"
  },
  {
    "state":"MI",
    "FIPS":26095,
    "number":702,
    "rate":13.3,
    "population":6494,
    "county":"Luce County"
  },
  {
    "state":"MI",
    "FIPS":26097,
    "number":1150,
    "rate":12.9,
    "population":11129,
    "county":"Mackinac County"
  },
  {
    "state":"MI",
    "FIPS":26099,
    "number":63917,
    "rate":10,
    "population":847750,
    "county":"Macomb County"
  },
  {
    "state":"MI",
    "FIPS":26101,
    "number":2391,
    "rate":12.2,
    "population":24604,
    "county":"Manistee County"
  },
  {
    "state":"MI",
    "FIPS":26103,
    "number":5189,
    "rate":9.9,
    "population":67790,
    "county":"Marquette County"
  },
  {
    "state":"MI",
    "FIPS":26105,
    "number":2649,
    "rate":12.1,
    "population":28669,
    "county":"Mason County"
  },
  {
    "state":"MI",
    "FIPS":26107,
    "number":3400,
    "rate":10.6,
    "population":43482,
    "county":"Mecosta County"
  },
  {
    "state":"MI",
    "FIPS":26109,
    "number":2183,
    "rate":11.8,
    "population":23748,
    "county":"Menominee County"
  },
  {
    "state":"MI",
    "FIPS":26111,
    "number":6447,
    "rate":10.3,
    "population":83649,
    "county":"Midland County"
  },
  {
    "state":"MI",
    "FIPS":26113,
    "number":1213,
    "rate":10.9,
    "population":15037,
    "county":"Missaukee County"
  },
  {
    "state":"MI",
    "FIPS":26115,
    "number":12540,
    "rate":11.2,
    "population":150840,
    "county":"Monroe County"
  },
  {
    "state":"MI",
    "FIPS":26117,
    "number":4838,
    "rate":10.3,
    "population":63059,
    "county":"Montcalm County"
  },
  {
    "state":"MI",
    "FIPS":26119,
    "number":1078,
    "rate":13.8,
    "population":9492,
    "county":"Montmorency County"
  },
  {
    "state":"MI",
    "FIPS":26121,
    "number":15930,
    "rate":12.8,
    "population":170146,
    "county":"Muskegon County"
  },
  {
    "state":"MI",
    "FIPS":26123,
    "number":4020,
    "rate":11.4,
    "population":47962,
    "county":"Newaygo County"
  },
  {
    "state":"MI",
    "FIPS":26125,
    "number":83225,
    "rate":9.1,
    "population":1220631,
    "county":"Oakland County"
  },
  {
    "state":"MI",
    "FIPS":26127,
    "number":2541,
    "rate":13.2,
    "population":26259,
    "county":"Oceana County"
  },
  {
    "state":"MI",
    "FIPS":26129,
    "number":2276,
    "rate":13.5,
    "population":21425,
    "county":"Ogemaw County"
  },
  {
    "state":"MI",
    "FIPS":26131,
    "number":722,
    "rate":13.4,
    "population":6404,
    "county":"Ontonagon County"
  },
  {
    "state":"MI",
    "FIPS":26133,
    "number":1879,
    "rate":11,
    "population":23270,
    "county":"Osceola County"
  },
  {
    "state":"MI",
    "FIPS":26135,
    "number":973,
    "rate":14.5,
    "population":8602,
    "county":"Oscoda County"
  },
  {
    "state":"MI",
    "FIPS":26137,
    "number":2108,
    "rate":11.6,
    "population":24049,
    "county":"Otsego County"
  },
  {
    "state":"MI",
    "FIPS":26139,
    "number":15177,
    "rate":8,
    "population":269454,
    "county":"Ottawa County"
  },
  {
    "state":"MI",
    "FIPS":26141,
    "number":1530,
    "rate":14.3,
    "population":13112,
    "county":"Presque Isle County"
  },
  {
    "state":"MI",
    "FIPS":26143,
    "number":3195,
    "rate":16,
    "population":24091,
    "county":"Roscommon County"
  },
  {
    "state":"MI",
    "FIPS":26145,
    "number":18546,
    "rate":12.6,
    "population":198268,
    "county":"Saginaw County"
  },
  {
    "state":"MI",
    "FIPS":26151,
    "number":3105,
    "rate":9.8,
    "population":42311,
    "county":"Sanilac County"
  },
  {
    "state":"MI",
    "FIPS":26153,
    "number":785,
    "rate":11.9,
    "population":8355,
    "county":"Schoolcraft County"
  },
  {
    "state":"MI",
    "FIPS":26155,
    "number":5272,
    "rate":10.3,
    "population":69300,
    "county":"Shiawassee County"
  },
  {
    "state":"MI",
    "FIPS":26147,
    "number":12968,
    "rate":10.8,
    "population":160564,
    "county":"St. Clair County"
  },
  {
    "state":"MI",
    "FIPS":26149,
    "number":4399,
    "rate":10,
    "population":60902,
    "county":"St Joseph County"
  },
  {
    "state":"MI",
    "FIPS":26157,
    "number":5153,
    "rate":12.5,
    "population":54705,
    "county":"Tuscola County"
  },
  {
    "state":"MI",
    "FIPS":26159,
    "number":6663,
    "rate":12.1,
    "population":75250,
    "county":"Van Buren County"
  },
  {
    "state":"MI",
    "FIPS":26161,
    "number":18635,
    "rate":7.1,
    "population":351301,
    "county":"Washtenaw County"
  },
  {
    "state":"MI",
    "FIPS":26163,
    "number":163219,
    "rate":12.5,
    "population":1792770,
    "county":"Wayne County"
  },
  {
    "state":"MI",
    "FIPS":26165,
    "number":2950,
    "rate":12.2,
    "population":32594,
    "county":"Wexford County"
  },
  {
    "state":"MN",
    "FIPS":27001,
    "number":1249,
    "rate":9.7,
    "population":15945,
    "county":"Aitkin County"
  },
  {
    "state":"MN",
    "FIPS":27003,
    "number":19967,
    "rate":8.2,
    "population":336132,
    "county":"Anoka County"
  },
  {
    "state":"MN",
    "FIPS":27005,
    "number":1976,
    "rate":8.2,
    "population":33018,
    "county":"Becker County"
  },
  {
    "state":"MN",
    "FIPS":27007,
    "number":2981,
    "rate":9.3,
    "population":45241,
    "county":"Beltrami County"
  },
  {
    "state":"MN",
    "FIPS":27009,
    "number":2347,
    "rate":8.2,
    "population":38867,
    "county":"Benton County"
  },
  {
    "state":"MN",
    "FIPS":27011,
    "number":367,
    "rate":9.2,
    "population":5165,
    "county":"Big Stone County"
  },
  {
    "state":"MN",
    "FIPS":27013,
    "number":2703,
    "rate":5.6,
    "population":65000,
    "county":"Blue Earth County"
  },
  {
    "state":"MN",
    "FIPS":27015,
    "number":1701,
    "rate":8.9,
    "population":25423,
    "county":"Brown County"
  },
  {
    "state":"MN",
    "FIPS":27017,
    "number":2022,
    "rate":7.7,
    "population":35311,
    "county":"Carlton County"
  },
  {
    "state":"MN",
    "FIPS":27019,
    "number":4447,
    "rate":6.9,
    "population":93890,
    "county":"Carver County"
  },
  {
    "state":"MN",
    "FIPS":27021,
    "number":2523,
    "rate":11.6,
    "population":28398,
    "county":"Cass County"
  },
  {
    "state":"MN",
    "FIPS":27023,
    "number":882,
    "rate":9.7,
    "population":12149,
    "county":"Chippewa County"
  },
  {
    "state":"MN",
    "FIPS":27025,
    "number":3356,
    "rate":8.6,
    "population":53491,
    "county":"Chisago County"
  },
  {
    "state":"MN",
    "FIPS":27027,
    "number":3243,
    "rate":7.5,
    "population":60213,
    "county":"Clay County"
  },
  {
    "state":"MN",
    "FIPS":27029,
    "number":607,
    "rate":9.5,
    "population":8682,
    "county":"Clearwater County"
  },
  {
    "state":"MN",
    "FIPS":27031,
    "number":400,
    "rate":9.5,
    "population":5182,
    "county":"Cook County"
  },
  {
    "state":"MN",
    "FIPS":27033,
    "number":822,
    "rate":9.5,
    "population":11648,
    "county":"Cottonwood County"
  },
  {
    "state":"MN",
    "FIPS":27035,
    "number":4679,
    "rate":9.9,
    "population":62850,
    "county":"Crow Wing County"
  },
  {
    "state":"MN",
    "FIPS":27037,
    "number":19404,
    "rate":6.6,
    "population":405067,
    "county":"Dakota County"
  },
  {
    "state":"MN",
    "FIPS":27039,
    "number":986,
    "rate":7,
    "population":20237,
    "county":"Dodge County"
  },
  {
    "state":"MN",
    "FIPS":27041,
    "number":2110,
    "rate":7.6,
    "population":36446,
    "county":"Douglas County"
  },
  {
    "state":"MN",
    "FIPS":27043,
    "number":921,
    "rate":8.5,
    "population":14261,
    "county":"Faribault County"
  },
  {
    "state":"MN",
    "FIPS":27045,
    "number":1244,
    "rate":8,
    "population":20894,
    "county":"Fillmore County"
  },
  {
    "state":"MN",
    "FIPS":27047,
    "number":2216,
    "rate":9.4,
    "population":31052,
    "county":"Freeborn County"
  },
  {
    "state":"MN",
    "FIPS":27049,
    "number":3302,
    "rate":9.5,
    "population":46393,
    "county":"Goodhue County"
  },
  {
    "state":"MN",
    "FIPS":27051,
    "number":382,
    "rate":8.4,
    "population":5945,
    "county":"Grant County"
  },
  {
    "state":"MN",
    "FIPS":27053,
    "number":60307,
    "rate":6.8,
    "population":1184787,
    "county":"Hennepin County"
  },
  {
    "state":"MN",
    "FIPS":27055,
    "number":1117,
    "rate":7.8,
    "population":18816,
    "county":"Houston County"
  },
  {
    "state":"MN",
    "FIPS":27057,
    "number":1465,
    "rate":9.4,
    "population":20436,
    "county":"Hubbard County"
  },
  {
    "state":"MN",
    "FIPS":27059,
    "number":2325,
    "rate":8.4,
    "population":38245,
    "county":"Isanti County"
  },
  {
    "state":"MN",
    "FIPS":27061,
    "number":3334,
    "rate":9.6,
    "population":45252,
    "county":"Itasca County"
  },
  {
    "state":"MN",
    "FIPS":27063,
    "number":663,
    "rate":8.6,
    "population":10298,
    "county":"Jackson County"
  },
  {
    "state":"MN",
    "FIPS":27065,
    "number":1096,
    "rate":9.1,
    "population":15999,
    "county":"Kanabec County"
  },
  {
    "state":"MN",
    "FIPS":27067,
    "number":2638,
    "rate":8.4,
    "population":42399,
    "county":"Kandiyohi County"
  },
  {
    "state":"MN",
    "FIPS":27069,
    "number":318,
    "rate":9.3,
    "population":4505,
    "county":"Kittson County"
  },
  {
    "state":"MN",
    "FIPS":27071,
    "number":1078,
    "rate":10.6,
    "population":13180,
    "county":"Koochiching County"
  },
  {
    "state":"MN",
    "FIPS":27073,
    "number":511,
    "rate":9.4,
    "population":7116,
    "county":"Lac Qui Parle County"
  },
  {
    "state":"MN",
    "FIPS":27075,
    "number":773,
    "rate":9,
    "population":10830,
    "county":"Lake County"
  },
  {
    "state":"MN",
    "FIPS":27077,
    "number":280,
    "rate":9,
    "population":3968,
    "county":"Lake of the Woods County"
  },
  {
    "state":"MN",
    "FIPS":27079,
    "number":1634,
    "rate":8.1,
    "population":27647,
    "county":"Le Sueur County"
  },
  {
    "state":"MN",
    "FIPS":27081,
    "number":399,
    "rate":9,
    "population":5800,
    "county":"Lincoln County"
  },
  {
    "state":"MN",
    "FIPS":27083,
    "number":1474,
    "rate":8,
    "population":25618,
    "county":"Lyon County"
  },
  {
    "state":"MN",
    "FIPS":27087,
    "number":420,
    "rate":11.2,
    "population":5521,
    "county":"Mahnomen County"
  },
  {
    "state":"MN",
    "FIPS":27089,
    "number":685,
    "rate":9.7,
    "population":9471,
    "county":"Marshall County"
  },
  {
    "state":"MN",
    "FIPS":27091,
    "number":1319,
    "rate":8.5,
    "population":20482,
    "county":"Martin County"
  },
  {
    "state":"MN",
    "FIPS":27085,
    "number":2297,
    "rate":8.7,
    "population":36011,
    "county":"McLeod County"
  },
  {
    "state":"MN",
    "FIPS":27093,
    "number":1686,
    "rate":10,
    "population":23044,
    "county":"Meeker County"
  },
  {
    "state":"MN",
    "FIPS":27095,
    "number":1950,
    "rate":10.4,
    "population":25728,
    "county":"Mille Lacs County"
  },
  {
    "state":"MN",
    "FIPS":27097,
    "number":2137,
    "rate":8.7,
    "population":33097,
    "county":"Morrison County"
  },
  {
    "state":"MN",
    "FIPS":27099,
    "number":2535,
    "rate":8.9,
    "population":39377,
    "county":"Mower County"
  },
  {
    "state":"MN",
    "FIPS":27101,
    "number":615,
    "rate":9.4,
    "population":8574,
    "county":"Murray County"
  },
  {
    "state":"MN",
    "FIPS":27103,
    "number":1826,
    "rate":7.6,
    "population":32936,
    "county":"Nicollet County"
  },
  {
    "state":"MN",
    "FIPS":27107,
    "number":443,
    "rate":9,
    "population":6637,
    "county":"Norman County"
  },
  {
    "state":"MN",
    "FIPS":27105,
    "number":1277,
    "rate":8.3,
    "population":21674,
    "county":"Nobles County"
  },
  {
    "state":"MN",
    "FIPS":27109,
    "number":7648,
    "rate":7.1,
    "population":147156,
    "county":"Olmsted County"
  },
  {
    "state":"MN",
    "FIPS":27111,
    "number":3778,
    "rate":8.6,
    "population":57292,
    "county":"Otter Tail County"
  },
  {
    "state":"MN",
    "FIPS":27113,
    "number":861,
    "rate":8.2,
    "population":14071,
    "county":"Pennington County"
  },
  {
    "state":"MN",
    "FIPS":27115,
    "number":1894,
    "rate":8.5,
    "population":29223,
    "county":"Pine County"
  },
  {
    "state":"MN",
    "FIPS":27117,
    "number":566,
    "rate":8.3,
    "population":9373,
    "county":"Pipestone County"
  },
  {
    "state":"MN",
    "FIPS":27119,
    "number":2087,
    "rate":9,
    "population":31513,
    "county":"Polk County"
  },
  {
    "state":"MN",
    "FIPS":27121,
    "number":772,
    "rate":9.2,
    "population":10918,
    "county":"Pope County"
  },
  {
    "state":"MN",
    "FIPS":27123,
    "number":30698,
    "rate":8,
    "population":520919,
    "county":"Ramsey County"
  },
  {
    "state":"MN",
    "FIPS":27125,
    "number":255,
    "rate":8.5,
    "population":4075,
    "county":"Red Lake County"
  },
  {
    "state":"MN",
    "FIPS":27127,
    "number":1020,
    "rate":8.8,
    "population":15853,
    "county":"Redwood County"
  },
  {
    "state":"MN",
    "FIPS":27129,
    "number":993,
    "rate":8.6,
    "population":15343,
    "county":"Renville County"
  },
  {
    "state":"MN",
    "FIPS":27131,
    "number":3441,
    "rate":7.3,
    "population":64904,
    "county":"Rice County"
  },
  {
    "state":"MN",
    "FIPS":27133,
    "number":672,
    "rate":9.7,
    "population":9551,
    "county":"Rock County"
  },
  {
    "state":"MN",
    "FIPS":27135,
    "number":1014,
    "rate":9.1,
    "population":15487,
    "county":"Roseau County"
  },
  {
    "state":"MN",
    "FIPS":27139,
    "number":5323,
    "rate":5.8,
    "population":135254,
    "county":"Scott County"
  },
  {
    "state":"MN",
    "FIPS":27143,
    "number":986,
    "rate":9,
    "population":15100,
    "county":"Sibley County"
  },
  {
    "state":"MN",
    "FIPS":27141,
    "number":3703,
    "rate":6,
    "population":89488,
    "county":"Sherburne County"
  },
  {
    "state":"MN",
    "FIPS":27137,
    "number":14577,
    "rate":9.5,
    "population":200487,
    "county":"St. Louis County"
  },
  {
    "state":"MN",
    "FIPS":27145,
    "number":7770,
    "rate":7.1,
    "population":151646,
    "county":"Stearns County"
  },
  {
    "state":"MN",
    "FIPS":27147,
    "number":1958,
    "rate":7.5,
    "population":36301,
    "county":"Steele County"
  },
  {
    "state":"MN",
    "FIPS":27149,
    "number":513,
    "rate":7.3,
    "population":9745,
    "county":"Stevens County"
  },
  {
    "state":"MN",
    "FIPS":27151,
    "number":597,
    "rate":8.2,
    "population":9606,
    "county":"Swift County"
  },
  {
    "state":"MN",
    "FIPS":27153,
    "number":1603,
    "rate":8.9,
    "population":24546,
    "county":"Todd County"
  },
  {
    "state":"MN",
    "FIPS":27155,
    "number":261,
    "rate":9.9,
    "population":3426,
    "county":"Traverse County"
  },
  {
    "state":"MN",
    "FIPS":27157,
    "number":1271,
    "rate":7.9,
    "population":21422,
    "county":"Wabasha County"
  },
  {
    "state":"MN",
    "FIPS":27159,
    "number":935,
    "rate":9.2,
    "population":13689,
    "county":"Wadena County"
  },
  {
    "state":"MN",
    "FIPS":27161,
    "number":1056,
    "rate":7.4,
    "population":19194,
    "county":"Waseca County"
  },
  {
    "state":"MN",
    "FIPS":27163,
    "number":13524,
    "rate":7.7,
    "population":244112,
    "county":"Washington County"
  },
  {
    "state":"MN",
    "FIPS":27165,
    "number":652,
    "rate":8,
    "population":11155,
    "county":"Watonwan County"
  },
  {
    "state":"MN",
    "FIPS":27167,
    "number":419,
    "rate":8.6,
    "population":6608,
    "county":"Wilkin County"
  },
  {
    "state":"MN",
    "FIPS":27169,
    "number":2932,
    "rate":7.6,
    "population":51326,
    "county":"Winona County"
  },
  {
    "state":"MN",
    "FIPS":27171,
    "number":5968,
    "rate":6.8,
    "population":127316,
    "county":"Wright County"
  },
  {
    "state":"MN",
    "FIPS":27173,
    "number":664,
    "rate":8.8,
    "population":10168,
    "county":"Yellow Medicine County"
  },
  {
    "state":"MO",
    "FIPS":29001,
    "number":1709,
    "rate":9.2,
    "population":25671,
    "county":"Adair County"
  },
  {
    "state":"MO",
    "FIPS":29003,
    "number":1280,
    "rate":9.9,
    "population":17420,
    "county":"Andrew County"
  },
  {
    "state":"MO",
    "FIPS":29005,
    "number":517,
    "rate":12,
    "population":5532,
    "county":"Atchison County"
  },
  {
    "state":"MO",
    "FIPS":29007,
    "number":2356,
    "rate":12.5,
    "population":25610,
    "county":"Audrain County"
  },
  {
    "state":"MO",
    "FIPS":29009,
    "number":3074,
    "rate":11.6,
    "population":35646,
    "county":"Barry County"
  },
  {
    "state":"MO",
    "FIPS":29011,
    "number":1190,
    "rate":13.3,
    "population":12365,
    "county":"Barton County"
  },
  {
    "state":"MO",
    "FIPS":29013,
    "number":1313,
    "rate":10.7,
    "population":16709,
    "county":"Bates County"
  },
  {
    "state":"MO",
    "FIPS":29015,
    "number":2245,
    "rate":14.7,
    "population":18958,
    "county":"Benton County"
  },
  {
    "state":"MO",
    "FIPS":29017,
    "number":1110,
    "rate":12,
    "population":12405,
    "county":"Bollinger County"
  },
  {
    "state":"MO",
    "FIPS":29019,
    "number":9379,
    "rate":7.5,
    "population":168592,
    "county":"Boone County"
  },
  {
    "state":"MO",
    "FIPS":29021,
    "number":8018,
    "rate":12.1,
    "population":89779,
    "county":"Buchanan County"
  },
  {
    "state":"MO",
    "FIPS":29023,
    "number":3894,
    "rate":12.1,
    "population":43012,
    "county":"Butler County"
  },
  {
    "state":"MO",
    "FIPS":29025,
    "number":835,
    "rate":12.5,
    "population":9116,
    "county":"Caldwell County"
  },
  {
    "state":"MO",
    "FIPS":29027,
    "number":3216,
    "rate":9.7,
    "population":44458,
    "county":"Callaway County"
  },
  {
    "state":"MO",
    "FIPS":29029,
    "number":3862,
    "rate":11.1,
    "population":43870,
    "county":"Camden County"
  },
  {
    "state":"MO",
    "FIPS":29031,
    "number":6539,
    "rate":11.4,
    "population":77080,
    "county":"Cape Girardeau County"
  },
  {
    "state":"MO",
    "FIPS":29033,
    "number":828,
    "rate":12.2,
    "population":9095,
    "county":"Carroll County"
  },
  {
    "state":"MO",
    "FIPS":29035,
    "number":563,
    "rate":12.1,
    "population":6253,
    "county":"Carter County"
  },
  {
    "state":"MO",
    "FIPS":29037,
    "number":7129,
    "rate":9.9,
    "population":100439,
    "county":"Cass County"
  },
  {
    "state":"MO",
    "FIPS":29039,
    "number":1289,
    "rate":12.5,
    "population":13834,
    "county":"Cedar County"
  },
  {
    "state":"MO",
    "FIPS":29041,
    "number":685,
    "rate":11.8,
    "population":7683,
    "county":"Chariton County"
  },
  {
    "state":"MO",
    "FIPS":29043,
    "number":6049,
    "rate":10.7,
    "population":79781,
    "county":"Christian County"
  },
  {
    "state":"MO",
    "FIPS":29045,
    "number":595,
    "rate":11.5,
    "population":6987,
    "county":"Clark County"
  },
  {
    "state":"MO",
    "FIPS":29047,
    "number":19251,
    "rate":11.7,
    "population":227689,
    "county":"Clay County"
  },
  {
    "state":"MO",
    "FIPS":29049,
    "number":1745,
    "rate":11.6,
    "population":20505,
    "county":"Clinton County"
  },
  {
    "state":"MO",
    "FIPS":29051,
    "number":5791,
    "rate":10.2,
    "population":76377,
    "county":"Cole County"
  },
  {
    "state":"MO",
    "FIPS":29053,
    "number":1547,
    "rate":11.7,
    "population":17529,
    "county":"Cooper County"
  },
  {
    "state":"MO",
    "FIPS":29055,
    "number":1983,
    "rate":10.8,
    "population":24774,
    "county":"Crawford County"
  },
  {
    "state":"MO",
    "FIPS":29057,
    "number":794,
    "rate":13.8,
    "population":7566,
    "county":"Dade County"
  },
  {
    "state":"MO",
    "FIPS":29059,
    "number":1701,
    "rate":13.7,
    "population":16775,
    "county":"Dallas County"
  },
  {
    "state":"MO",
    "FIPS":29061,
    "number":653,
    "rate":11,
    "population":8271,
    "county":"Daviess County"
  },
  {
    "state":"MO",
    "FIPS":29063,
    "number":1290,
    "rate":12.4,
    "population":12874,
    "county":"Dekalb County"
  },
  {
    "state":"MO",
    "FIPS":29065,
    "number":1455,
    "rate":12.4,
    "population":15665,
    "county":"Dent County"
  },
  {
    "state":"MO",
    "FIPS":29067,
    "number":1220,
    "rate":11.7,
    "population":13598,
    "county":"Douglas County"
  },
  {
    "state":"MO",
    "FIPS":29069,
    "number":2688,
    "rate":11.7,
    "population":31872,
    "county":"Dunklin County"
  },
  {
    "state":"MO",
    "FIPS":29073,
    "number":1337,
    "rate":11.6,
    "population":14980,
    "county":"Gasconade County"
  },
  {
    "state":"MO",
    "FIPS":29071,
    "number":8009,
    "rate":10.7,
    "population":101386,
    "county":"Franklin County"
  },
  {
    "state":"MO",
    "FIPS":29075,
    "number":585,
    "rate":11.7,
    "population":6799,
    "county":"Gentry County"
  },
  {
    "state":"MO",
    "FIPS":29077,
    "number":17797,
    "rate":8.4,
    "population":280686,
    "county":"Greene County"
  },
  {
    "state":"MO",
    "FIPS":29079,
    "number":767,
    "rate":10.2,
    "population":10323,
    "county":"Grundy County"
  },
  {
    "state":"MO",
    "FIPS":29081,
    "number":783,
    "rate":12.1,
    "population":8741,
    "county":"Harrison County"
  },
  {
    "state":"MO",
    "FIPS":29083,
    "number":1868,
    "rate":11.1,
    "population":22150,
    "county":"Henry County"
  },
  {
    "state":"MO",
    "FIPS":29085,
    "number":1025,
    "rate":13.4,
    "population":9392,
    "county":"Hickory County"
  },
  {
    "state":"MO",
    "FIPS":29087,
    "number":412,
    "rate":11.3,
    "population":4656,
    "county":"Holt County"
  },
  {
    "state":"MO",
    "FIPS":29089,
    "number":868,
    "rate":11.5,
    "population":10181,
    "county":"Howard County"
  },
  {
    "state":"MO",
    "FIPS":29091,
    "number":3478,
    "rate":11.7,
    "population":40622,
    "county":"Howell County"
  },
  {
    "state":"MO",
    "FIPS":29093,
    "number":913,
    "rate":11.6,
    "population":10424,
    "county":"Iron County"
  },
  {
    "state":"MO",
    "FIPS":29095,
    "number":53087,
    "rate":10.7,
    "population":677390,
    "county":"Jackson County"
  },
  {
    "state":"MO",
    "FIPS":29097,
    "number":8757,
    "rate":10.6,
    "population":115382,
    "county":"Jasper County"
  },
  {
    "state":"MO",
    "FIPS":29099,
    "number":15381,
    "rate":9.5,
    "population":220102,
    "county":"Jefferson County"
  },
  {
    "state":"MO",
    "FIPS":29101,
    "number":3539,
    "rate":8.9,
    "population":54418,
    "county":"Johnson County"
  },
  {
    "state":"MO",
    "FIPS":29103,
    "number":329,
    "rate":11.1,
    "population":4084,
    "county":"Knox County"
  },
  {
    "state":"MO",
    "FIPS":29105,
    "number":2936,
    "rate":11.4,
    "population":35412,
    "county":"Laclede County"
  },
  {
    "state":"MO",
    "FIPS":29107,
    "number":2723,
    "rate":11.2,
    "population":33109,
    "county":"Lafayette County"
  },
  {
    "state":"MO",
    "FIPS":29109,
    "number":3239,
    "rate":11.7,
    "population":38373,
    "county":"Lawrence County"
  },
  {
    "state":"MO",
    "FIPS":29111,
    "number":871,
    "rate":11.7,
    "population":10160,
    "county":"Lewis County"
  },
  {
    "state":"MO",
    "FIPS":29113,
    "number":4736,
    "rate":12.6,
    "population":53348,
    "county":"Lincoln County"
  },
  {
    "state":"MO",
    "FIPS":29115,
    "number":999,
    "rate":10.9,
    "population":12486,
    "county":"Linn County"
  },
  {
    "state":"MO",
    "FIPS":29117,
    "number":1213,
    "rate":10.5,
    "population":15023,
    "county":"Livingston County"
  },
  {
    "state":"MO",
    "FIPS":29121,
    "number":1480,
    "rate":12.9,
    "population":15556,
    "county":"Macon County"
  },
  {
    "state":"MO",
    "FIPS":29123,
    "number":1054,
    "rate":11.4,
    "population":12467,
    "county":"Madison County"
  },
  {
    "state":"MO",
    "FIPS":29127,
    "number":2237,
    "rate":10.5,
    "population":28809,
    "county":"Marion County"
  },
  {
    "state":"MO",
    "FIPS":29119,
    "number":1815,
    "rate":11.3,
    "population":22920,
    "county":"McDonald County"
  },
  {
    "state":"MO",
    "FIPS":29125,
    "number":805,
    "rate":11.9,
    "population":9036,
    "county":"Maries County"
  },
  {
    "state":"MO",
    "FIPS":29129,
    "number":345,
    "rate":12.7,
    "population":3714,
    "county":"Mercer County"
  },
  {
    "state":"MO",
    "FIPS":29131,
    "number":2171,
    "rate":11.9,
    "population":24753,
    "county":"Miller County"
  },
  {
    "state":"MO",
    "FIPS":29133,
    "number":1411,
    "rate":13,
    "population":14305,
    "county":"Mississippi County"
  },
  {
    "state":"MO",
    "FIPS":29135,
    "number":1206,
    "rate":10.6,
    "population":15671,
    "county":"Moniteau County"
  },
  {
    "state":"MO",
    "FIPS":29137,
    "number":828,
    "rate":12.7,
    "population":8686,
    "county":"Monroe County"
  },
  {
    "state":"MO",
    "FIPS":29139,
    "number":1088,
    "rate":12.1,
    "population":12024,
    "county":"Montgomery County"
  },
  {
    "state":"MO",
    "FIPS":29141,
    "number":1764,
    "rate":11.5,
    "population":20141,
    "county":"Morgan County"
  },
  {
    "state":"MO",
    "FIPS":29143,
    "number":1809,
    "rate":13.1,
    "population":18479,
    "county":"New Madrid County"
  },
  {
    "state":"MO",
    "FIPS":29145,
    "number":4646,
    "rate":10.8,
    "population":59063,
    "county":"Newton County"
  },
  {
    "state":"MO",
    "FIPS":29147,
    "number":1740,
    "rate":10,
    "population":23367,
    "county":"Nodaway County"
  },
  {
    "state":"MO",
    "FIPS":29149,
    "number":1010,
    "rate":12.2,
    "population":10997,
    "county":"Oregon County"
  },
  {
    "state":"MO",
    "FIPS":29151,
    "number":1142,
    "rate":11.3,
    "population":13860,
    "county":"Osage County"
  },
  {
    "state":"MO",
    "FIPS":29153,
    "number":1107,
    "rate":14.7,
    "population":9624,
    "county":"Ozark County"
  },
  {
    "state":"MO",
    "FIPS":29155,
    "number":1593,
    "rate":12.5,
    "population":18117,
    "county":"Pemiscot County"
  },
  {
    "state":"MO",
    "FIPS":29157,
    "number":1520,
    "rate":10.9,
    "population":19024,
    "county":"Perry County"
  },
  {
    "state":"MO",
    "FIPS":29159,
    "number":3893,
    "rate":12.8,
    "population":42279,
    "county":"Pettis County"
  },
  {
    "state":"MO",
    "FIPS":29161,
    "number":4013,
    "rate":12.1,
    "population":45183,
    "county":"Phelps County"
  },
  {
    "state":"MO",
    "FIPS":29163,
    "number":1592,
    "rate":11.3,
    "population":18551,
    "county":"Pike County"
  },
  {
    "state":"MO",
    "FIPS":29165,
    "number":6918,
    "rate":10.2,
    "population":92126,
    "county":"Platte County"
  },
  {
    "state":"MO",
    "FIPS":29167,
    "number":2582,
    "rate":11.6,
    "population":31105,
    "county":"Polk County"
  },
  {
    "state":"MO",
    "FIPS":29169,
    "number":3459,
    "rate":9.4,
    "population":53389,
    "county":"Pulaski County"
  },
  {
    "state":"MO",
    "FIPS":29171,
    "number":461,
    "rate":12.4,
    "population":4930,
    "county":"Putnam County"
  },
  {
    "state":"MO",
    "FIPS":29173,
    "number":1050,
    "rate":13.5,
    "population":10238,
    "county":"Ralls County"
  },
  {
    "state":"MO",
    "FIPS":29175,
    "number":2191,
    "rate":11.6,
    "population":25305,
    "county":"Randolph County"
  },
  {
    "state":"MO",
    "FIPS":29177,
    "number":2140,
    "rate":12.6,
    "population":23058,
    "county":"Ray County"
  },
  {
    "state":"MO",
    "FIPS":29179,
    "number":638,
    "rate":12.6,
    "population":6671,
    "county":"Reynolds County"
  },
  {
    "state":"MO",
    "FIPS":29181,
    "number":1215,
    "rate":11.6,
    "population":14035,
    "county":"Ripley County"
  },
  {
    "state":"MO",
    "FIPS":29195,
    "number":1920,
    "rate":11.1,
    "population":23472,
    "county":"Saline County"
  },
  {
    "state":"MO",
    "FIPS":29197,
    "number":380,
    "rate":12,
    "population":4388,
    "county":"Schuyler County"
  },
  {
    "state":"MO",
    "FIPS":29199,
    "number":385,
    "rate":11.4,
    "population":4872,
    "county":"Scotland County"
  },
  {
    "state":"MO",
    "FIPS":29201,
    "number":3409,
    "rate":11.9,
    "population":39149,
    "county":"Scott County"
  },
  {
    "state":"MO",
    "FIPS":29203,
    "number":827,
    "rate":13.2,
    "population":8323,
    "county":"Shannon County"
  },
  {
    "state":"MO",
    "FIPS":29205,
    "number":510,
    "rate":11.2,
    "population":6226,
    "county":"Shelby County"
  },
  {
    "state":"MO",
    "FIPS":29183,
    "number":22323,
    "rate":8.4,
    "population":368791,
    "county":"St. Charles County"
  },
  {
    "state":"MO",
    "FIPS":29185,
    "number":952,
    "rate":12.8,
    "population":9530,
    "county":"St. Clair County"
  },
  {
    "state":"MO",
    "FIPS":29187,
    "number":6052,
    "rate":12.1,
    "population":65835,
    "county":"St Francois County"
  },
  {
    "state":"MO",
    "FIPS":29510,
    "number":30184,
    "rate":12.4,
    "population":319274,
    "county":"St. Louis City"
  },
  {
    "state":"MO",
    "FIPS":29189,
    "number":76753,
    "rate":10.3,
    "population":1000800,
    "county":"St. Louis County"
  },
  {
    "state":"MO",
    "FIPS":29186,
    "number":1388,
    "rate":10.4,
    "population":17872,
    "county":"Ste Genevieve County"
  },
  {
    "state":"MO",
    "FIPS":29207,
    "number":2749,
    "rate":12.2,
    "population":29828,
    "county":"Stoddard County"
  },
  {
    "state":"MO",
    "FIPS":29209,
    "number":3165,
    "rate":12.5,
    "population":31613,
    "county":"Stone County"
  },
  {
    "state":"MO",
    "FIPS":29211,
    "number":581,
    "rate":11.9,
    "population":6525,
    "county":"Sullivan County"
  },
  {
    "state":"MO",
    "FIPS":29213,
    "number":4589,
    "rate":11.5,
    "population":53062,
    "county":"Taney County"
  },
  {
    "state":"MO",
    "FIPS":29215,
    "number":2285,
    "rate":11.7,
    "population":25748,
    "county":"Texas County"
  },
  {
    "state":"MO",
    "FIPS":29217,
    "number":1887,
    "rate":12.6,
    "population":20798,
    "county":"Vernon County"
  },
  {
    "state":"MO",
    "FIPS":29219,
    "number":2658,
    "rate":11,
    "population":32785,
    "county":"Warren County"
  },
  {
    "state":"MO",
    "FIPS":29221,
    "number":2785,
    "rate":14.9,
    "population":25091,
    "county":"Washington County"
  },
  {
    "state":"MO",
    "FIPS":29223,
    "number":1396,
    "rate":13.5,
    "population":13377,
    "county":"Wayne County"
  },
  {
    "state":"MO",
    "FIPS":29225,
    "number":2723,
    "rate":10.7,
    "population":36334,
    "county":"Webster County"
  },
  {
    "state":"MO",
    "FIPS":29227,
    "number":199,
    "rate":12.3,
    "population":2078,
    "county":"Worth County"
  },
  {
    "state":"MO",
    "FIPS":29229,
    "number":1765,
    "rate":13.1,
    "population":18610,
    "county":"Wright County"
  },
  {
    "state":"MS",
    "FIPS":28001,
    "number":3566,
    "rate":14.6,
    "population":32141,
    "county":"Adams County"
  },
  {
    "state":"MS",
    "FIPS":28003,
    "number":3934,
    "rate":14.3,
    "population":37237,
    "county":"Alcorn County"
  },
  {
    "state":"MS",
    "FIPS":28005,
    "number":1610,
    "rate":16.4,
    "population":12972,
    "county":"Amite County"
  },
  {
    "state":"MS",
    "FIPS":28007,
    "number":2038,
    "rate":14.9,
    "population":19123,
    "county":"Attala County"
  },
  {
    "state":"MS",
    "FIPS":28009,
    "number":1042,
    "rate":16.2,
    "population":8652,
    "county":"Benton County"
  },
  {
    "state":"MS",
    "FIPS":28011,
    "number":3537,
    "rate":14.5,
    "population":34061,
    "county":"Bolivar County"
  },
  {
    "state":"MS",
    "FIPS":28013,
    "number":1617,
    "rate":14.9,
    "population":14848,
    "county":"Calhoun County"
  },
  {
    "state":"MS",
    "FIPS":28015,
    "number":1403,
    "rate":17.3,
    "population":10413,
    "county":"Carroll County"
  },
  {
    "state":"MS",
    "FIPS":28017,
    "number":1928,
    "rate":15.3,
    "population":17406,
    "county":"Chickasaw County"
  },
  {
    "state":"MS",
    "FIPS":28019,
    "number":1022,
    "rate":16.5,
    "population":8355,
    "county":"Choctaw County"
  },
  {
    "state":"MS",
    "FIPS":28021,
    "number":1130,
    "rate":17,
    "population":9376,
    "county":"Claiborne County"
  },
  {
    "state":"MS",
    "FIPS":28023,
    "number":1850,
    "rate":15.2,
    "population":16495,
    "county":"Clarke County"
  },
  {
    "state":"MS",
    "FIPS":28025,
    "number":2288,
    "rate":15.4,
    "population":20395,
    "county":"Clay County"
  },
  {
    "state":"MS",
    "FIPS":28027,
    "number":2949,
    "rate":16.9,
    "population":25685,
    "county":"Coahoma County"
  },
  {
    "state":"MS",
    "FIPS":28029,
    "number":3155,
    "rate":15.1,
    "population":28902,
    "county":"Copiah County"
  },
  {
    "state":"MS",
    "FIPS":28031,
    "number":2187,
    "rate":15.5,
    "population":19523,
    "county":"Covington County"
  },
  {
    "state":"MS",
    "FIPS":28033,
    "number":14686,
    "rate":12.6,
    "population":166355,
    "county":"Desoto County"
  },
  {
    "state":"MS",
    "FIPS":28035,
    "number":5864,
    "rate":10.5,
    "population":76769,
    "county":"Forrest County"
  },
  {
    "state":"MS",
    "FIPS":28037,
    "number":823,
    "rate":14.3,
    "population":7887,
    "county":"Franklin County"
  },
  {
    "state":"MS",
    "FIPS":28039,
    "number":2171,
    "rate":13.3,
    "population":22872,
    "county":"George County"
  },
  {
    "state":"MS",
    "FIPS":28041,
    "number":1489,
    "rate":13.4,
    "population":14286,
    "county":"Greene County"
  },
  {
    "state":"MS",
    "FIPS":28043,
    "number":2374,
    "rate":15,
    "population":21616,
    "county":"Grenada County"
  },
  {
    "state":"MS",
    "FIPS":28045,
    "number":4370,
    "rate":12.9,
    "population":45310,
    "county":"Hancock County"
  },
  {
    "state":"MS",
    "FIPS":28047,
    "number":18800,
    "rate":13.3,
    "population":193691,
    "county":"Harrison County"
  },
  {
    "state":"MS",
    "FIPS":28049,
    "number":22144,
    "rate":12.6,
    "population":248298,
    "county":"Hinds County"
  },
  {
    "state":"MS",
    "FIPS":28051,
    "number":2338,
    "rate":18.3,
    "population":19040,
    "county":"Holmes County"
  },
  {
    "state":"MS",
    "FIPS":28053,
    "number":1120,
    "rate":17.4,
    "population":9208,
    "county":"Humphreys County"
  },
  {
    "state":"MS",
    "FIPS":28055,
    "number":176,
    "rate":15.8,
    "population":1410,
    "county":"Issaquena County"
  },
  {
    "state":"MS",
    "FIPS":28057,
    "number":2146,
    "rate":12.5,
    "population":23371,
    "county":"Itawamba County"
  },
  {
    "state":"MS",
    "FIPS":28059,
    "number":13858,
    "rate":13.6,
    "population":139969,
    "county":"Jackson County"
  },
  {
    "state":"MS",
    "FIPS":28061,
    "number":2051,
    "rate":16.8,
    "population":16535,
    "county":"Jasper County"
  },
  {
    "state":"MS",
    "FIPS":28063,
    "number":1053,
    "rate":18.4,
    "population":7649,
    "county":"Jefferson County"
  },
  {
    "state":"MS",
    "FIPS":28065,
    "number":1358,
    "rate":14.9,
    "population":12087,
    "county":"Jefferson Davis County"
  },
  {
    "state":"MS",
    "FIPS":28067,
    "number":7073,
    "rate":14.4,
    "population":68385,
    "county":"Jones County"
  },
  {
    "state":"MS",
    "FIPS":28069,
    "number":1166,
    "rate":15.3,
    "population":10366,
    "county":"Kemper County"
  },
  {
    "state":"MS",
    "FIPS":28071,
    "number":3638,
    "rate":9.8,
    "population":50416,
    "county":"Lafayette County"
  },
  {
    "state":"MS",
    "FIPS":28073,
    "number":4374,
    "rate":10.6,
    "population":57864,
    "county":"Lamar County"
  },
  {
    "state":"MS",
    "FIPS":28075,
    "number":8645,
    "rate":14.8,
    "population":80271,
    "county":"Lauderdale County"
  },
  {
    "state":"MS",
    "FIPS":28077,
    "number":1504,
    "rate":16.4,
    "population":12601,
    "county":"Lawrence County"
  },
  {
    "state":"MS",
    "FIPS":28079,
    "number":2463,
    "rate":15.4,
    "population":23253,
    "county":"Leake County"
  },
  {
    "state":"MS",
    "FIPS":28081,
    "number":7715,
    "rate":12.7,
    "population":85115,
    "county":"Lee County"
  },
  {
    "state":"MS",
    "FIPS":28083,
    "number":3425,
    "rate":15.6,
    "population":31566,
    "county":"Leflore County"
  },
  {
    "state":"MS",
    "FIPS":28085,
    "number":3250,
    "rate":12.9,
    "population":34849,
    "county":"Lincoln County"
  },
  {
    "state":"MS",
    "FIPS":28087,
    "number":5841,
    "rate":13.5,
    "population":59641,
    "county":"Lowndes County"
  },
  {
    "state":"MS",
    "FIPS":28089,
    "number":7298,
    "rate":10.4,
    "population":98479,
    "county":"Madison County"
  },
  {
    "state":"MS",
    "FIPS":28091,
    "number":2574,
    "rate":13.4,
    "population":26398,
    "county":"Marion County"
  },
  {
    "state":"MS",
    "FIPS":28093,
    "number":4033,
    "rate":14.8,
    "population":36587,
    "county":"Marshall County"
  },
  {
    "state":"MS",
    "FIPS":28095,
    "number":3864,
    "rate":14.3,
    "population":36378,
    "county":"Monroe County"
  },
  {
    "state":"MS",
    "FIPS":28097,
    "number":1138,
    "rate":14.5,
    "population":10557,
    "county":"Montgomery County"
  },
  {
    "state":"MS",
    "FIPS":28099,
    "number":3029,
    "rate":14.8,
    "population":29679,
    "county":"Neshoba County"
  },
  {
    "state":"MS",
    "FIPS":28101,
    "number":2333,
    "rate":15.2,
    "population":21625,
    "county":"Newton County"
  },
  {
    "state":"MS",
    "FIPS":28103,
    "number":1515,
    "rate":19,
    "population":11175,
    "county":"Noxubee County"
  },
  {
    "state":"MS",
    "FIPS":28105,
    "number":3517,
    "rate":9.7,
    "population":48956,
    "county":"Oktibbeha County"
  },
  {
    "state":"MS",
    "FIPS":28107,
    "number":3519,
    "rate":14.4,
    "population":34464,
    "county":"Panola County"
  },
  {
    "state":"MS",
    "FIPS":28109,
    "number":5800,
    "rate":14.3,
    "population":55090,
    "county":"Pearl River County"
  },
  {
    "state":"MS",
    "FIPS":28111,
    "number":1176,
    "rate":13.2,
    "population":12080,
    "county":"Perry County"
  },
  {
    "state":"MS",
    "FIPS":28113,
    "number":4498,
    "rate":16,
    "population":40111,
    "county":"Pike County"
  },
  {
    "state":"MS",
    "FIPS":28115,
    "number":2932,
    "rate":13.5,
    "population":30345,
    "county":"Pontotoc County"
  },
  {
    "state":"MS",
    "FIPS":28117,
    "number":2852,
    "rate":15.3,
    "population":25310,
    "county":"Prentiss County"
  },
  {
    "state":"MS",
    "FIPS":28119,
    "number":905,
    "rate":16.2,
    "population":7802,
    "county":"Quitman County"
  },
  {
    "state":"MS",
    "FIPS":28121,
    "number":12454,
    "rate":11.7,
    "population":145604,
    "county":"Rankin County"
  },
  {
    "state":"MS",
    "FIPS":28123,
    "number":2914,
    "rate":14.5,
    "population":28248,
    "county":"Scott County"
  },
  {
    "state":"MS",
    "FIPS":28125,
    "number":600,
    "rate":17.3,
    "population":4787,
    "county":"Sharkey County"
  },
  {
    "state":"MS",
    "FIPS":28127,
    "number":2780,
    "rate":14.1,
    "population":27334,
    "county":"Simpson County"
  },
  {
    "state":"MS",
    "FIPS":28129,
    "number":1675,
    "rate":14,
    "population":16333,
    "county":"Smith County"
  },
  {
    "state":"MS",
    "FIPS":28131,
    "number":1721,
    "rate":13.3,
    "population":18049,
    "county":"Stone County"
  },
  {
    "state":"MS",
    "FIPS":28133,
    "number":2944,
    "rate":14.2,
    "population":28473,
    "county":"Sunflower County"
  },
  {
    "state":"MS",
    "FIPS":28135,
    "number":1754,
    "rate":15.2,
    "population":15103,
    "county":"Tallahatchie County"
  },
  {
    "state":"MS",
    "FIPS":28137,
    "number":3371,
    "rate":16.7,
    "population":28506,
    "county":"Tate County"
  },
  {
    "state":"MS",
    "FIPS":28139,
    "number":1945,
    "rate":12.2,
    "population":21965,
    "county":"Tippah County"
  },
  {
    "state":"MS",
    "FIPS":28141,
    "number":2055,
    "rate":13.9,
    "population":19589,
    "county":"Tishomingo County"
  },
  {
    "state":"MS",
    "FIPS":28143,
    "number":1182,
    "rate":16.6,
    "population":10458,
    "county":"Tunica County"
  },
  {
    "state":"MS",
    "FIPS":28145,
    "number":2384,
    "rate":12,
    "population":27352,
    "county":"Union County"
  },
  {
    "state":"MS",
    "FIPS":28147,
    "number":1912,
    "rate":17.5,
    "population":15088,
    "county":"Walthall County"
  },
  {
    "state":"MS",
    "FIPS":28149,
    "number":4910,
    "rate":14.1,
    "population":48120,
    "county":"Warren County"
  },
  {
    "state":"MS",
    "FIPS":28151,
    "number":5305,
    "rate":15.2,
    "population":50051,
    "county":"Washington County"
  },
  {
    "state":"MS",
    "FIPS":28153,
    "number":2359,
    "rate":15.9,
    "population":20635,
    "county":"Wayne County"
  },
  {
    "state":"MS",
    "FIPS":28155,
    "number":1071,
    "rate":14.4,
    "population":10051,
    "county":"Webster County"
  },
  {
    "state":"MS",
    "FIPS":28157,
    "number":1368,
    "rate":19.1,
    "population":9451,
    "county":"Wilkinson County"
  },
  {
    "state":"MS",
    "FIPS":28159,
    "number":2179,
    "rate":15.5,
    "population":18985,
    "county":"Winston County"
  },
  {
    "state":"MS",
    "FIPS":28161,
    "number":1536,
    "rate":16.6,
    "population":12373,
    "county":"Yalobusha County"
  },
  {
    "state":"MS",
    "FIPS":28163,
    "number":2823,
    "rate":13.6,
    "population":28282,
    "county":"Yazoo County"
  },
  {
    "state":"MT",
    "FIPS":30001,
    "number":562,
    "rate":7.8,
    "population":9356,
    "county":"Beaverhead County"
  },
  {
    "state":"MT",
    "FIPS":30003,
    "number":1167,
    "rate":14.1,
    "population":13008,
    "county":"Big Horn County"
  },
  {
    "state":"MT",
    "FIPS":30005,
    "number":493,
    "rate":11,
    "population":6637,
    "county":"Blaine County"
  },
  {
    "state":"MT",
    "FIPS":30007,
    "number":357,
    "rate":8.2,
    "population":5762,
    "county":"Broadwater County"
  },
  {
    "state":"MT",
    "FIPS":30009,
    "number":713,
    "rate":8.9,
    "population":10109,
    "county":"Carbon County"
  },
  {
    "state":"MT",
    "FIPS":30011,
    "number":83,
    "rate":8.7,
    "population":1174,
    "county":"Carter County"
  },
  {
    "state":"MT",
    "FIPS":30013,
    "number":5348,
    "rate":8.7,
    "population":81765,
    "county":"Cascade County"
  },
  {
    "state":"MT",
    "FIPS":30015,
    "number":348,
    "rate":8.2,
    "population":5927,
    "county":"Chouteau County"
  },
  {
    "state":"MT",
    "FIPS":30017,
    "number":867,
    "rate":9.7,
    "population":11845,
    "county":"Custer County"
  },
  {
    "state":"MT",
    "FIPS":30019,
    "number":129,
    "rate":9.4,
    "population":1779,
    "county":"Daniels County"
  },
  {
    "state":"MT",
    "FIPS":30021,
    "number":553,
    "rate":7.9,
    "population":9239,
    "county":"Dawson County"
  },
  {
    "state":"MT",
    "FIPS":30023,
    "number":633,
    "rate":8.6,
    "population":9222,
    "county":"Deer Lodge County"
  },
  {
    "state":"MT",
    "FIPS":30025,
    "number":174,
    "rate":7.8,
    "population":3031,
    "county":"Fallon County"
  },
  {
    "state":"MT",
    "FIPS":30027,
    "number":782,
    "rate":8.7,
    "population":11439,
    "county":"Fergus County"
  },
  {
    "state":"MT",
    "FIPS":30029,
    "number":5081,
    "rate":7.4,
    "population":91692,
    "county":"Flathead County"
  },
  {
    "state":"MT",
    "FIPS":30031,
    "number":2891,
    "rate":4.2,
    "population":92604,
    "county":"Gallatin County"
  },
  {
    "state":"MT",
    "FIPS":30033,
    "number":72,
    "rate":7.6,
    "population":1264,
    "county":"Garfield County"
  },
  {
    "state":"MT",
    "FIPS":30035,
    "number":1140,
    "rate":12.7,
    "population":13684,
    "county":"Glacier County"
  },
  {
    "state":"MT",
    "FIPS":30037,
    "number":63,
    "rate":9.7,
    "population":842,
    "county":"Golden Valley County"
  },
  {
    "state":"MT",
    "FIPS":30039,
    "number":229,
    "rate":8.9,
    "population":3107,
    "county":"Granite County"
  },
  {
    "state":"MT",
    "FIPS":30041,
    "number":1120,
    "rate":9.7,
    "population":16427,
    "county":"Hill County"
  },
  {
    "state":"MT",
    "FIPS":30043,
    "number":665,
    "rate":7.6,
    "population":11400,
    "county":"Jefferson County"
  },
  {
    "state":"MT",
    "FIPS":30045,
    "number":141,
    "rate":8.9,
    "population":2021,
    "county":"Judith Basin County"
  },
  {
    "state":"MT",
    "FIPS":30047,
    "number":2241,
    "rate":10.6,
    "population":28999,
    "county":"Lake County"
  },
  {
    "state":"MT",
    "FIPS":30049,
    "number":3560,
    "rate":7.3,
    "population":64845,
    "county":"Lewis and Clark County"
  },
  {
    "state":"MT",
    "FIPS":30051,
    "number":154,
    "rate":8.5,
    "population":2395,
    "county":"Liberty County"
  },
  {
    "state":"MT",
    "FIPS":30053,
    "number":1705,
    "rate":11,
    "population":19469,
    "county":"Lincoln County"
  },
  {
    "state":"MT",
    "FIPS":30057,
    "number":491,
    "rate":7.8,
    "population":7725,
    "county":"Madison County"
  },
  {
    "state":"MT",
    "FIPS":30055,
    "number":115,
    "rate":8.8,
    "population":1693,
    "county":"McCone County"
  },
  {
    "state":"MT",
    "FIPS":30059,
    "number":132,
    "rate":8.8,
    "population":1897,
    "county":"Meagher County"
  },
  {
    "state":"MT",
    "FIPS":30061,
    "number":329,
    "rate":9.7,
    "population":4164,
    "county":"Mineral County"
  },
  {
    "state":"MT",
    "FIPS":30063,
    "number":3995,
    "rate":4.7,
    "population":111054,
    "county":"Missoula County"
  },
  {
    "state":"MT",
    "FIPS":30065,
    "number":317,
    "rate":8.8,
    "population":4675,
    "county":"Musselshell County"
  },
  {
    "state":"MT",
    "FIPS":30067,
    "number":872,
    "rate":7.1,
    "population":15580,
    "county":"Park County"
  },
  {
    "state":"MT",
    "FIPS":30069,
    "number":36,
    "rate":9.3,
    "population":509,
    "county":"Petroleum County"
  },
  {
    "state":"MT",
    "FIPS":30071,
    "number":296,
    "rate":9.5,
    "population":4127,
    "county":"Phillips County"
  },
  {
    "state":"MT",
    "FIPS":30073,
    "number":467,
    "rate":10.4,
    "population":6193,
    "county":"Pondera County"
  },
  {
    "state":"MT",
    "FIPS":30075,
    "number":106,
    "rate":7.6,
    "population":1755,
    "county":"Powder River County"
  },
  {
    "state":"MT",
    "FIPS":30077,
    "number":498,
    "rate":8.6,
    "population":7085,
    "county":"Powell County"
  },
  {
    "state":"MT",
    "FIPS":30079,
    "number":95,
    "rate":10.1,
    "population":1157,
    "county":"Prairie County"
  },
  {
    "state":"MT",
    "FIPS":30081,
    "number":2428,
    "rate":7.8,
    "population":40637,
    "county":"Ravalli County"
  },
  {
    "state":"MT",
    "FIPS":30083,
    "number":594,
    "rate":7.4,
    "population":10794,
    "county":"Richland County"
  },
  {
    "state":"MT",
    "FIPS":30085,
    "number":916,
    "rate":12.9,
    "population":10885,
    "county":"Roosevelt County"
  },
  {
    "state":"MT",
    "FIPS":30087,
    "number":704,
    "rate":11,
    "population":9382,
    "county":"Rosebud County"
  },
  {
    "state":"MT",
    "FIPS":30089,
    "number":903,
    "rate":10.1,
    "population":11383,
    "county":"Sanders County"
  },
  {
    "state":"MT",
    "FIPS":30091,
    "number":296,
    "rate":10.6,
    "population":3580,
    "county":"Sheridan County"
  },
  {
    "state":"MT",
    "FIPS":30093,
    "number":2198,
    "rate":8.4,
    "population":34493,
    "county":"Silver Bow County"
  },
  {
    "state":"MT",
    "FIPS":30095,
    "number":544,
    "rate":7.8,
    "population":9195,
    "county":"Stillwater County"
  },
  {
    "state":"MT",
    "FIPS":30097,
    "number":229,
    "rate":8.5,
    "population":3587,
    "county":"Sweet Grass County"
  },
  {
    "state":"MT",
    "FIPS":30099,
    "number":414,
    "rate":9.2,
    "population":6072,
    "county":"Teton County"
  },
  {
    "state":"MT",
    "FIPS":30101,
    "number":322,
    "rate":8,
    "population":5231,
    "county":"Toole County"
  },
  {
    "state":"MT",
    "FIPS":30103,
    "number":53,
    "rate":9.1,
    "population":730,
    "county":"Treasure County"
  },
  {
    "state":"MT",
    "FIPS":30105,
    "number":531,
    "rate":9.4,
    "population":7494,
    "county":"Valley County"
  },
  {
    "state":"MT",
    "FIPS":30107,
    "number":126,
    "rate":8.2,
    "population":2099,
    "county":"Wheatland County"
  },
  {
    "state":"MT",
    "FIPS":30109,
    "number":75,
    "rate":9.3,
    "population":1057,
    "county":"Wibaux County"
  },
  {
    "state":"MT",
    "FIPS":30111,
    "number":9597,
    "rate":8.5,
    "population":151888,
    "county":"Yellowstone County"
  },
  {
    "state":"NC",
    "FIPS":37001,
    "number":13657,
    "rate":12.1,
    "population":153672,
    "county":"Alamance County"
  },
  {
    "state":"NC",
    "FIPS":37003,
    "number":3174,
    "rate":11.3,
    "population":37012,
    "county":"Alexander County"
  },
  {
    "state":"NC",
    "FIPS":37005,
    "number":1044,
    "rate":12.1,
    "population":10925,
    "county":"Alleghany County"
  },
  {
    "state":"NC",
    "FIPS":37007,
    "number":2826,
    "rate":14,
    "population":26351,
    "county":"Anson County"
  },
  {
    "state":"NC",
    "FIPS":37009,
    "number":2204,
    "rate":10.2,
    "population":27150,
    "county":"Ashe County"
  },
  {
    "state":"NC",
    "FIPS":37011,
    "number":1428,
    "rate":10,
    "population":17656,
    "county":"Avery County"
  },
  {
    "state":"NC",
    "FIPS":37013,
    "number":5197,
    "rate":14.3,
    "population":47491,
    "county":"Beaufort County"
  },
  {
    "state":"NC",
    "FIPS":37017,
    "number":3918,
    "rate":14.9,
    "population":34906,
    "county":"Bladen County"
  },
  {
    "state":"NC",
    "FIPS":37015,
    "number":2267,
    "rate":14.1,
    "population":20601,
    "county":"Bertie County"
  },
  {
    "state":"NC",
    "FIPS":37019,
    "number":10263,
    "rate":11.4,
    "population":112138,
    "county":"Brunswick County"
  },
  {
    "state":"NC",
    "FIPS":37021,
    "number":17561,
    "rate":9.3,
    "population":244363,
    "county":"Buncombe County"
  },
  {
    "state":"NC",
    "FIPS":37023,
    "number":8753,
    "rate":12.8,
    "population":90235,
    "county":"Burke County"
  },
  {
    "state":"NC",
    "FIPS":37025,
    "number":12782,
    "rate":9.8,
    "population":184487,
    "county":"Cabarrus County"
  },
  {
    "state":"NC",
    "FIPS":37027,
    "number":8692,
    "rate":13.9,
    "population":81946,
    "county":"Caldwell County"
  },
  {
    "state":"NC",
    "FIPS":37029,
    "number":834,
    "rate":11.4,
    "population":10054,
    "county":"Camden County"
  },
  {
    "state":"NC",
    "FIPS":37031,
    "number":5801,
    "rate":10.8,
    "population":67779,
    "county":"Carteret County"
  },
  {
    "state":"NC",
    "FIPS":37033,
    "number":2393,
    "rate":13.2,
    "population":23183,
    "county":"Caswell County"
  },
  {
    "state":"NC",
    "FIPS":37035,
    "number":15394,
    "rate":13.4,
    "population":154518,
    "county":"Catawba County"
  },
  {
    "state":"NC",
    "FIPS":37037,
    "number":5717,
    "rate":11.2,
    "population":65811,
    "county":"Chatham County"
  },
  {
    "state":"NC",
    "FIPS":37039,
    "number":3110,
    "rate":14.5,
    "population":26972,
    "county":"Cherokee County"
  },
  {
    "state":"NC",
    "FIPS":37041,
    "number":1578,
    "rate":14.1,
    "population":14695,
    "county":"Chowan County"
  },
  {
    "state":"NC",
    "FIPS":37043,
    "number":1054,
    "rate":12.4,
    "population":10656,
    "county":"Clay County"
  },
  {
    "state":"NC",
    "FIPS":37045,
    "number":8860,
    "rate":12.2,
    "population":97515,
    "county":"Cleveland County"
  },
  {
    "state":"NC",
    "FIPS":37047,
    "number":6435,
    "rate":14.9,
    "population":57604,
    "county":"Columbus County"
  },
  {
    "state":"NC",
    "FIPS":37049,
    "number":8282,
    "rate":10.6,
    "population":105309,
    "county":"Craven County"
  },
  {
    "state":"NC",
    "FIPS":37051,
    "number":26508,
    "rate":11.6,
    "population":323099,
    "county":"Cumberland County"
  },
  {
    "state":"NC",
    "FIPS":37053,
    "number":1946,
    "rate":10.8,
    "population":24092,
    "county":"Currituck County"
  },
  {
    "state":"NC",
    "FIPS":37055,
    "number":2813,
    "rate":10.4,
    "population":34458,
    "county":"Dare County"
  },
  {
    "state":"NC",
    "FIPS":37057,
    "number":14564,
    "rate":12,
    "population":163542,
    "county":"Davidson County"
  },
  {
    "state":"NC",
    "FIPS":37059,
    "number":3712,
    "rate":11.9,
    "population":41366,
    "county":"Davie County"
  },
  {
    "state":"NC",
    "FIPS":37061,
    "number":5464,
    "rate":12.6,
    "population":59667,
    "county":"Duplin County"
  },
  {
    "state":"NC",
    "FIPS":37063,
    "number":19766,
    "rate":9.4,
    "population":282308,
    "county":"Durham County"
  },
  {
    "state":"NC",
    "FIPS":37065,
    "number":6543,
    "rate":16,
    "population":55714,
    "county":"Edgecombe County"
  },
  {
    "state":"NC",
    "FIPS":37067,
    "number":27268,
    "rate":10.4,
    "population":357967,
    "county":"Forsyth County"
  },
  {
    "state":"NC",
    "FIPS":37069,
    "number":6018,
    "rate":13.3,
    "population":61571,
    "county":"Franklin County"
  },
  {
    "state":"NC",
    "FIPS":37071,
    "number":22643,
    "rate":14.7,
    "population":208204,
    "county":"Gaston County"
  },
  {
    "state":"NC",
    "FIPS":37073,
    "number":1140,
    "rate":12.7,
    "population":11909,
    "county":"Gates County"
  },
  {
    "state":"NC",
    "FIPS":37075,
    "number":788,
    "rate":11.8,
    "population":8696,
    "county":"Graham County"
  },
  {
    "state":"NC",
    "FIPS":37077,
    "number":5914,
    "rate":13.6,
    "population":57818,
    "county":"Granville County"
  },
  {
    "state":"NC",
    "FIPS":37079,
    "number":2062,
    "rate":12.7,
    "population":21391,
    "county":"Greene County"
  },
  {
    "state":"NC",
    "FIPS":37081,
    "number":35635,
    "rate":9.7,
    "population":500894,
    "county":"Guilford County"
  },
  {
    "state":"NC",
    "FIPS":37083,
    "number":6108,
    "rate":15,
    "population":53923,
    "county":"Halifax County"
  },
  {
    "state":"NC",
    "FIPS":37085,
    "number":9744,
    "rate":11.5,
    "population":122213,
    "county":"Harnett County"
  },
  {
    "state":"NC",
    "FIPS":37087,
    "number":5676,
    "rate":12.2,
    "population":58782,
    "county":"Haywood County"
  },
  {
    "state":"NC",
    "FIPS":37089,
    "number":9089,
    "rate":10.8,
    "population":108115,
    "county":"Henderson County"
  },
  {
    "state":"NC",
    "FIPS":37091,
    "number":2666,
    "rate":14.4,
    "population":24432,
    "county":"Hertford County"
  },
  {
    "state":"NC",
    "FIPS":37093,
    "number":3975,
    "rate":11.5,
    "population":50467,
    "county":"Hoke County"
  },
  {
    "state":"NC",
    "FIPS":37095,
    "number":578,
    "rate":12.6,
    "population":5738,
    "county":"Hyde County"
  },
  {
    "state":"NC",
    "FIPS":37097,
    "number":11516,
    "rate":9.7,
    "population":162724,
    "county":"Iredell County"
  },
  {
    "state":"NC",
    "FIPS":37099,
    "number":4123,
    "rate":13.4,
    "population":40516,
    "county":"Jackson County"
  },
  {
    "state":"NC",
    "FIPS":37101,
    "number":15301,
    "rate":12.4,
    "population":174893,
    "county":"Johnston County"
  },
  {
    "state":"NC",
    "FIPS":37103,
    "number":1232,
    "rate":15.3,
    "population":10276,
    "county":"Jones County"
  },
  {
    "state":"NC",
    "FIPS":37105,
    "number":5777,
    "rate":13.6,
    "population":59368,
    "county":"Lee County"
  },
  {
    "state":"NC",
    "FIPS":37107,
    "number":6508,
    "rate":14.9,
    "population":59181,
    "county":"Lenoir County"
  },
  {
    "state":"NC",
    "FIPS":37109,
    "number":6779,
    "rate":11.4,
    "population":78973,
    "county":"Lincoln County"
  },
  {
    "state":"NC",
    "FIPS":37113,
    "number":2990,
    "rate":11.2,
    "population":33796,
    "county":"Macon County"
  },
  {
    "state":"NC",
    "FIPS":37115,
    "number":1670,
    "rate":10.4,
    "population":20882,
    "county":"Madison County"
  },
  {
    "state":"NC",
    "FIPS":37117,
    "number":2959,
    "rate":16.2,
    "population":23886,
    "county":"Martin County"
  },
  {
    "state":"NC",
    "FIPS":37111,
    "number":4776,
    "rate":13.9,
    "population":44967,
    "county":"McDowell County"
  },
  {
    "state":"NC",
    "FIPS":37119,
    "number":59154,
    "rate":8.4,
    "population":968779,
    "county":"Mecklenburg County"
  },
  {
    "state":"NC",
    "FIPS":37121,
    "number":1719,
    "rate":14.1,
    "population":15367,
    "county":"Mitchell County"
  },
  {
    "state":"NC",
    "FIPS":37123,
    "number":2732,
    "rate":13.4,
    "population":27637,
    "county":"Montgomery County"
  },
  {
    "state":"NC",
    "FIPS":37125,
    "number":8021,
    "rate":11.6,
    "population":90320,
    "county":"Moore County"
  },
  {
    "state":"NC",
    "FIPS":37127,
    "number":8473,
    "rate":12,
    "population":95320,
    "county":"Nash County"
  },
  {
    "state":"NC",
    "FIPS":37129,
    "number":13503,
    "rate":8.4,
    "population":209134,
    "county":"New Hanover County"
  },
  {
    "state":"NC",
    "FIPS":37131,
    "number":2619,
    "rate":15.8,
    "population":21311,
    "county":"Northampton County"
  },
  {
    "state":"NC",
    "FIPS":37133,
    "number":11485,
    "rate":8.8,
    "population":183888,
    "county":"Onslow County"
  },
  {
    "state":"NC",
    "FIPS":37135,
    "number":7667,
    "rate":7.6,
    "population":137728,
    "county":"Orange County"
  },
  {
    "state":"NC",
    "FIPS":37137,
    "number":1587,
    "rate":15,
    "population":13045,
    "county":"Pamlico County"
  },
  {
    "state":"NC",
    "FIPS":37139,
    "number":4319,
    "rate":14.4,
    "population":40528,
    "county":"Pasquotank County"
  },
  {
    "state":"NC",
    "FIPS":37141,
    "number":4985,
    "rate":12.2,
    "population":53967,
    "county":"Pender County"
  },
  {
    "state":"NC",
    "FIPS":37143,
    "number":1555,
    "rate":14.8,
    "population":13532,
    "county":"Perquimans County"
  },
  {
    "state":"NC",
    "FIPS":37145,
    "number":3845,
    "rate":13,
    "population":39179,
    "county":"Person County"
  },
  {
    "state":"NC",
    "FIPS":37147,
    "number":11407,
    "rate":9,
    "population":172895,
    "county":"Pitt County"
  },
  {
    "state":"NC",
    "FIPS":37149,
    "number":2019,
    "rate":12.5,
    "population":20248,
    "county":"Polk County"
  },
  {
    "state":"NC",
    "FIPS":37151,
    "number":12859,
    "rate":12.2,
    "population":142326,
    "county":"Randolph County"
  },
  {
    "state":"NC",
    "FIPS":37153,
    "number":4115,
    "rate":12.1,
    "population":46381,
    "county":"Richmond County"
  },
  {
    "state":"NC",
    "FIPS":37155,
    "number":15346,
    "rate":16.1,
    "population":135368,
    "county":"Robeson County"
  },
  {
    "state":"NC",
    "FIPS":37157,
    "number":9362,
    "rate":13.2,
    "population":92646,
    "county":"Rockingham County"
  },
  {
    "state":"NC",
    "FIPS":37159,
    "number":12686,
    "rate":12.4,
    "population":137915,
    "county":"Rowan County"
  },
  {
    "state":"NC",
    "FIPS":37161,
    "number":6605,
    "rate":12.9,
    "population":67243,
    "county":"Rutherford County"
  },
  {
    "state":"NC",
    "FIPS":37163,
    "number":6302,
    "rate":13.6,
    "population":63895,
    "county":"Sampson County"
  },
  {
    "state":"NC",
    "FIPS":37165,
    "number":3376,
    "rate":12.8,
    "population":36157,
    "county":"Scotland County"
  },
  {
    "state":"NC",
    "FIPS":37167,
    "number":5318,
    "rate":11.7,
    "population":60493,
    "county":"Stanly County"
  },
  {
    "state":"NC",
    "FIPS":37169,
    "number":4554,
    "rate":12.7,
    "population":46756,
    "county":"Stokes County"
  },
  {
    "state":"NC",
    "FIPS":37171,
    "number":7193,
    "rate":13.1,
    "population":73568,
    "county":"Surry County"
  },
  {
    "state":"NC",
    "FIPS":37173,
    "number":1688,
    "rate":16.1,
    "population":14080,
    "county":"Swain County"
  },
  {
    "state":"NC",
    "FIPS":37175,
    "number":2859,
    "rate":10.9,
    "population":32854,
    "county":"Transylvania County"
  },
  {
    "state":"NC",
    "FIPS":37177,
    "number":450,
    "rate":13.6,
    "population":4131,
    "county":"Tyrrell County"
  },
  {
    "state":"NC",
    "FIPS":37179,
    "number":13016,
    "rate":9.2,
    "population":208393,
    "county":"Union County"
  },
  {
    "state":"NC",
    "FIPS":37181,
    "number":4381,
    "rate":13.4,
    "population":45074,
    "county":"Vance County"
  },
  {
    "state":"NC",
    "FIPS":37183,
    "number":57857,
    "rate":8.5,
    "population":952611,
    "county":"Wake County"
  },
  {
    "state":"NC",
    "FIPS":37185,
    "number":2463,
    "rate":15.3,
    "population":20594,
    "county":"Warren County"
  },
  {
    "state":"NC",
    "FIPS":37187,
    "number":1433,
    "rate":14.8,
    "population":12726,
    "county":"Washington County"
  },
  {
    "state":"NC",
    "FIPS":37189,
    "number":3304,
    "rate":8.2,
    "population":52064,
    "county":"Watauga County"
  },
  {
    "state":"NC",
    "FIPS":37191,
    "number":11566,
    "rate":12.8,
    "population":124504,
    "county":"Wayne County"
  },
  {
    "state":"NC",
    "FIPS":37193,
    "number":5836,
    "rate":11.1,
    "population":69210,
    "county":"Wilkes County"
  },
  {
    "state":"NC",
    "FIPS":37195,
    "number":8169,
    "rate":13.6,
    "population":81768,
    "county":"Wilson County"
  },
  {
    "state":"NC",
    "FIPS":37197,
    "number":2989,
    "rate":10.4,
    "population":38056,
    "county":"Yadkin County"
  },
  {
    "state":"NC",
    "FIPS":37199,
    "number":1629,
    "rate":11.8,
    "population":17633,
    "county":"Yancey County"
  },
  {
    "state":"ND",
    "FIPS":38001,
    "number":201,
    "rate":11,
    "population":2302,
    "county":"Adams County"
  },
  {
    "state":"ND",
    "FIPS":38003,
    "number":793,
    "rate":9.4,
    "population":11013,
    "county":"Barnes County"
  },
  {
    "state":"ND",
    "FIPS":38005,
    "number":496,
    "rate":11.6,
    "population":6762,
    "county":"Benson County"
  },
  {
    "state":"ND",
    "FIPS":38007,
    "number":64,
    "rate":8.8,
    "population":913,
    "county":"Billings County"
  },
  {
    "state":"ND",
    "FIPS":38009,
    "number":484,
    "rate":9.6,
    "population":6583,
    "county":"Bottineau County"
  },
  {
    "state":"ND",
    "FIPS":38011,
    "number":245,
    "rate":10.2,
    "population":3220,
    "county":"Bowman County"
  },
  {
    "state":"ND",
    "FIPS":38013,
    "number":157,
    "rate":9.5,
    "population":2170,
    "county":"Burke County"
  },
  {
    "state":"ND",
    "FIPS":38015,
    "number":5128,
    "rate":8,
    "population":86073,
    "county":"Burleigh County"
  },
  {
    "state":"ND",
    "FIPS":38017,
    "number":8533,
    "rate":7.3,
    "population":156839,
    "county":"Cass County"
  },
  {
    "state":"ND",
    "FIPS":38019,
    "number":344,
    "rate":11.2,
    "population":3943,
    "county":"Cavalier County"
  },
  {
    "state":"ND",
    "FIPS":38021,
    "number":442,
    "rate":11.4,
    "population":5245,
    "county":"Dickey County"
  },
  {
    "state":"ND",
    "FIPS":38023,
    "number":178,
    "rate":10,
    "population":2233,
    "county":"Divide County"
  },
  {
    "state":"ND",
    "FIPS":38025,
    "number":317,
    "rate":10.6,
    "population":3974,
    "county":"Dunn County"
  },
  {
    "state":"ND",
    "FIPS":38027,
    "number":203,
    "rate":11.1,
    "population":2377,
    "county":"Eddy County"
  },
  {
    "state":"ND",
    "FIPS":38029,
    "number":310,
    "rate":11.6,
    "population":3483,
    "county":"Emmons County"
  },
  {
    "state":"ND",
    "FIPS":38031,
    "number":287,
    "rate":11.1,
    "population":3392,
    "county":"Foster County"
  },
  {
    "state":"ND",
    "FIPS":38033,
    "number":123,
    "rate":9.2,
    "population":1799,
    "county":"Golden Valley County"
  },
  {
    "state":"ND",
    "FIPS":38035,
    "number":3343,
    "rate":6.6,
    "population":67701,
    "county":"Grand Forks County"
  },
  {
    "state":"ND",
    "FIPS":38037,
    "number":210,
    "rate":11.3,
    "population":2337,
    "county":"Grant County"
  },
  {
    "state":"ND",
    "FIPS":38039,
    "number":219,
    "rate":11.6,
    "population":2351,
    "county":"Griggs County"
  },
  {
    "state":"ND",
    "FIPS":38041,
    "number":193,
    "rate":9.8,
    "population":2553,
    "county":"Hettinger County"
  },
  {
    "state":"ND",
    "FIPS":38043,
    "number":171,
    "rate":9.2,
    "population":2434,
    "county":"Kidder County"
  },
  {
    "state":"ND",
    "FIPS":38045,
    "number":371,
    "rate":11.6,
    "population":4103,
    "county":"Lamoure County"
  },
  {
    "state":"ND",
    "FIPS":38047,
    "number":170,
    "rate":11.4,
    "population":1932,
    "county":"Logan County"
  },
  {
    "state":"ND",
    "FIPS":38049,
    "number":378,
    "rate":8.6,
    "population":5784,
    "county":"McHenry County"
  },
  {
    "state":"ND",
    "FIPS":38051,
    "number":230,
    "rate":10.5,
    "population":2774,
    "county":"McIntosh County"
  },
  {
    "state":"ND",
    "FIPS":38053,
    "number":515,
    "rate":9.2,
    "population":7965,
    "county":"McKenzie County"
  },
  {
    "state":"ND",
    "FIPS":38055,
    "number":753,
    "rate":10.4,
    "population":9371,
    "county":"McLean County"
  },
  {
    "state":"ND",
    "FIPS":38057,
    "number":599,
    "rate":9.3,
    "population":8486,
    "county":"Mercer County"
  },
  {
    "state":"ND",
    "FIPS":38059,
    "number":1680,
    "rate":8.1,
    "population":28045,
    "county":"Morton County"
  },
  {
    "state":"ND",
    "FIPS":38061,
    "number":709,
    "rate":11,
    "population":8750,
    "county":"Mountrail County"
  },
  {
    "state":"ND",
    "FIPS":38063,
    "number":276,
    "rate":11.2,
    "population":3081,
    "county":"Nelson County"
  },
  {
    "state":"ND",
    "FIPS":38065,
    "number":162,
    "rate":11.7,
    "population":1832,
    "county":"Oliver County"
  },
  {
    "state":"ND",
    "FIPS":38067,
    "number":692,
    "rate":12.4,
    "population":7261,
    "county":"Pembina County"
  },
  {
    "state":"ND",
    "FIPS":38069,
    "number":370,
    "rate":10.9,
    "population":4466,
    "county":"Pierce County"
  },
  {
    "state":"ND",
    "FIPS":38071,
    "number":825,
    "rate":9.5,
    "population":11555,
    "county":"Ramsey County"
  },
  {
    "state":"ND",
    "FIPS":38073,
    "number":448,
    "rate":11,
    "population":5474,
    "county":"Ransom County"
  },
  {
    "state":"ND",
    "FIPS":38075,
    "number":208,
    "rate":10.8,
    "population":2554,
    "county":"Renville County"
  },
  {
    "state":"ND",
    "FIPS":38077,
    "number":1068,
    "rate":9,
    "population":16210,
    "county":"Richland County"
  },
  {
    "state":"ND",
    "FIPS":38079,
    "number":1215,
    "rate":13.3,
    "population":14350,
    "county":"Rolette County"
  },
  {
    "state":"ND",
    "FIPS":38081,
    "number":282,
    "rate":9.6,
    "population":3895,
    "county":"Sargent County"
  },
  {
    "state":"ND",
    "FIPS":38083,
    "number":132,
    "rate":12.7,
    "population":1270,
    "county":"Sheridan County"
  },
  {
    "state":"ND",
    "FIPS":38085,
    "number":347,
    "rate":13.4,
    "population":4343,
    "county":"Sioux County"
  },
  {
    "state":"ND",
    "FIPS":38087,
    "number":52,
    "rate":9,
    "population":759,
    "county":"Slope County"
  },
  {
    "state":"ND",
    "FIPS":38089,
    "number":1744,
    "rate":8.7,
    "population":26921,
    "county":"Stark County"
  },
  {
    "state":"ND",
    "FIPS":38093,
    "number":1429,
    "rate":8.9,
    "population":20958,
    "county":"Stutsman County"
  },
  {
    "state":"ND",
    "FIPS":38091,
    "number":182,
    "rate":11.8,
    "population":1993,
    "county":"Steele County"
  },
  {
    "state":"ND",
    "FIPS":38095,
    "number":193,
    "rate":10.6,
    "population":2323,
    "county":"Towner County"
  },
  {
    "state":"ND",
    "FIPS":38097,
    "number":603,
    "rate":10,
    "population":8073,
    "county":"Traill County"
  },
  {
    "state":"ND",
    "FIPS":38099,
    "number":889,
    "rate":10.6,
    "population":11054,
    "county":"Walsh County"
  },
  {
    "state":"ND",
    "FIPS":38101,
    "number":3849,
    "rate":8,
    "population":65480,
    "county":"Ward County"
  },
  {
    "state":"ND",
    "FIPS":38103,
    "number":405,
    "rate":12,
    "population":4260,
    "county":"Wells County"
  },
  {
    "state":"ND",
    "FIPS":38105,
    "number":1757,
    "rate":8.9,
    "population":26686,
    "county":"Williams County"
  },
  {
    "state":"NE",
    "FIPS":31001,
    "number":2118,
    "rate":9.3,
    "population":31384,
    "county":"Adams County"
  },
  {
    "state":"NE",
    "FIPS":31003,
    "number":517,
    "rate":10.7,
    "population":6520,
    "county":"Antelope County"
  },
  {
    "state":"NE",
    "FIPS":31005,
    "number":29,
    "rate":8.9,
    "population":482,
    "county":"Arthur County"
  },
  {
    "state":"NE",
    "FIPS":31007,
    "number":70,
    "rate":11.7,
    "population":773,
    "county":"Banner County"
  },
  {
    "state":"NE",
    "FIPS":31009,
    "number":35,
    "rate":9.2,
    "population":512,
    "county":"Blaine County"
  },
  {
    "state":"NE",
    "FIPS":31011,
    "number":415,
    "rate":10.3,
    "population":5407,
    "county":"Boone County"
  },
  {
    "state":"NE",
    "FIPS":31013,
    "number":917,
    "rate":11.2,
    "population":11291,
    "county":"Box Butte County"
  },
  {
    "state":"NE",
    "FIPS":31015,
    "number":186,
    "rate":11.7,
    "population":2059,
    "county":"Boyd County"
  },
  {
    "state":"NE",
    "FIPS":31017,
    "number":256,
    "rate":11.1,
    "population":3021,
    "county":"Brown County"
  },
  {
    "state":"NE",
    "FIPS":31019,
    "number":2297,
    "rate":6.7,
    "population":47644,
    "county":"Buffalo County"
  },
  {
    "state":"NE",
    "FIPS":31021,
    "number":523,
    "rate":10.4,
    "population":6672,
    "county":"Burt County"
  },
  {
    "state":"NE",
    "FIPS":31023,
    "number":511,
    "rate":8.4,
    "population":8308,
    "county":"Butler County"
  },
  {
    "state":"NE",
    "FIPS":31025,
    "number":1636,
    "rate":8.9,
    "population":25159,
    "county":"Cass County"
  },
  {
    "state":"NE",
    "FIPS":31027,
    "number":575,
    "rate":9,
    "population":8770,
    "county":"Cedar County"
  },
  {
    "state":"NE",
    "FIPS":31029,
    "number":285,
    "rate":9.6,
    "population":4033,
    "county":"Chase County"
  },
  {
    "state":"NE",
    "FIPS":31031,
    "number":356,
    "rate":8.2,
    "population":5738,
    "county":"Cherry County"
  },
  {
    "state":"NE",
    "FIPS":31033,
    "number":592,
    "rate":8,
    "population":10062,
    "county":"Cheyenne County"
  },
  {
    "state":"NE",
    "FIPS":31035,
    "number":420,
    "rate":8.9,
    "population":6407,
    "county":"Clay County"
  },
  {
    "state":"NE",
    "FIPS":31037,
    "number":558,
    "rate":7.8,
    "population":10541,
    "county":"Colfax County"
  },
  {
    "state":"NE",
    "FIPS":31039,
    "number":499,
    "rate":7.5,
    "population":9090,
    "county":"Cuming County"
  },
  {
    "state":"NE",
    "FIPS":31041,
    "number":832,
    "rate":10.4,
    "population":10788,
    "county":"Custer County"
  },
  {
    "state":"NE",
    "FIPS":31043,
    "number":1332,
    "rate":9.4,
    "population":20837,
    "county":"Dakota County"
  },
  {
    "state":"NE",
    "FIPS":31045,
    "number":661,
    "rate":9.8,
    "population":9167,
    "county":"Dawes County"
  },
  {
    "state":"NE",
    "FIPS":31047,
    "number":1552,
    "rate":9.3,
    "population":24100,
    "county":"Dawson County"
  },
  {
    "state":"NE",
    "FIPS":31049,
    "number":163,
    "rate":10.8,
    "population":1973,
    "county":"Deuel County"
  },
  {
    "state":"NE",
    "FIPS":31051,
    "number":372,
    "rate":8.7,
    "population":5907,
    "county":"Dixon County"
  },
  {
    "state":"NE",
    "FIPS":31053,
    "number":2506,
    "rate":9.3,
    "population":36670,
    "county":"Dodge County"
  },
  {
    "state":"NE",
    "FIPS":31055,
    "number":33157,
    "rate":8.7,
    "population":531309,
    "county":"Douglas County"
  },
  {
    "state":"NE",
    "FIPS":31057,
    "number":163,
    "rate":10.9,
    "population":1991,
    "county":"Dundy County"
  },
  {
    "state":"NE",
    "FIPS":31059,
    "number":414,
    "rate":9.5,
    "population":5748,
    "county":"Fillmore County"
  },
  {
    "state":"NE",
    "FIPS":31061,
    "number":247,
    "rate":10.1,
    "population":3190,
    "county":"Franklin County"
  },
  {
    "state":"NE",
    "FIPS":31063,
    "number":189,
    "rate":9.3,
    "population":2731,
    "county":"Frontier County"
  },
  {
    "state":"NE",
    "FIPS":31065,
    "number":451,
    "rate":12.2,
    "population":4903,
    "county":"Furnas County"
  },
  {
    "state":"NE",
    "FIPS":31067,
    "number":1807,
    "rate":11,
    "population":21735,
    "county":"Gage County"
  },
  {
    "state":"NE",
    "FIPS":31069,
    "number":165,
    "rate":10.4,
    "population":1962,
    "county":"Garden County"
  },
  {
    "state":"NE",
    "FIPS":31071,
    "number":154,
    "rate":9.9,
    "population":1991,
    "county":"Garfield County"
  },
  {
    "state":"NE",
    "FIPS":31073,
    "number":146,
    "rate":9.7,
    "population":2038,
    "county":"Gosper County"
  },
  {
    "state":"NE",
    "FIPS":31075,
    "number":49,
    "rate":9.9,
    "population":615,
    "county":"Grant County"
  },
  {
    "state":"NE",
    "FIPS":31077,
    "number":170,
    "rate":9.2,
    "population":2457,
    "county":"Greeley County"
  },
  {
    "state":"NE",
    "FIPS":31079,
    "number":3689,
    "rate":8.7,
    "population":60335,
    "county":"Hall County"
  },
  {
    "state":"NE",
    "FIPS":31081,
    "number":479,
    "rate":7.3,
    "population":9025,
    "county":"Hamilton County"
  },
  {
    "state":"NE",
    "FIPS":31083,
    "number":256,
    "rate":9.7,
    "population":3426,
    "county":"Harlan County"
  },
  {
    "state":"NE",
    "FIPS":31085,
    "number":75,
    "rate":10.2,
    "population":947,
    "county":"Hayes County"
  },
  {
    "state":"NE",
    "FIPS":31087,
    "number":227,
    "rate":10.2,
    "population":2883,
    "county":"Hitchcock County"
  },
  {
    "state":"NE",
    "FIPS":31089,
    "number":641,
    "rate":8.3,
    "population":10409,
    "county":"Holt County"
  },
  {
    "state":"NE",
    "FIPS":31091,
    "number":58,
    "rate":10.5,
    "population":711,
    "county":"Hooker County"
  },
  {
    "state":"NE",
    "FIPS":31093,
    "number":486,
    "rate":10.4,
    "population":6305,
    "county":"Howard County"
  },
  {
    "state":"NE",
    "FIPS":31095,
    "number":641,
    "rate":11.2,
    "population":7551,
    "county":"Jefferson County"
  },
  {
    "state":"NE",
    "FIPS":31097,
    "number":365,
    "rate":9,
    "population":5164,
    "county":"Johnson County"
  },
  {
    "state":"NE",
    "FIPS":31099,
    "number":384,
    "rate":8,
    "population":6534,
    "county":"Kearney County"
  },
  {
    "state":"NE",
    "FIPS":31101,
    "number":564,
    "rate":8.9,
    "population":8210,
    "county":"Keith County"
  },
  {
    "state":"NE",
    "FIPS":31103,
    "number":65,
    "rate":10.6,
    "population":799,
    "county":"Keya Paha County"
  },
  {
    "state":"NE",
    "FIPS":31105,
    "number":285,
    "rate":10.1,
    "population":3785,
    "county":"Kimball County"
  },
  {
    "state":"NE",
    "FIPS":31107,
    "number":638,
    "rate":10.1,
    "population":8579,
    "county":"Knox County"
  },
  {
    "state":"NE",
    "FIPS":31109,
    "number":15870,
    "rate":7.4,
    "population":293469,
    "county":"Lancaster County"
  },
  {
    "state":"NE",
    "FIPS":31111,
    "number":2663,
    "rate":10.1,
    "population":36029,
    "county":"Lincoln County"
  },
  {
    "state":"NE",
    "FIPS":31113,
    "number":50,
    "rate":8.9,
    "population":771,
    "county":"Logan County"
  },
  {
    "state":"NE",
    "FIPS":31115,
    "number":48,
    "rate":10.6,
    "population":600,
    "county":"Loup County"
  },
  {
    "state":"NE",
    "FIPS":31119,
    "number":2241,
    "rate":8.8,
    "population":35122,
    "county":"Madison County"
  },
  {
    "state":"NE",
    "FIPS":31117,
    "number":35,
    "rate":9.9,
    "population":505,
    "county":"McPherson County"
  },
  {
    "state":"NE",
    "FIPS":31121,
    "number":617,
    "rate":10.8,
    "population":7797,
    "county":"Merrick County"
  },
  {
    "state":"NE",
    "FIPS":31123,
    "number":316,
    "rate":8.9,
    "population":4875,
    "county":"Morrill County"
  },
  {
    "state":"NE",
    "FIPS":31125,
    "number":335,
    "rate":12,
    "population":3703,
    "county":"Nance County"
  },
  {
    "state":"NE",
    "FIPS":31127,
    "number":505,
    "rate":9.5,
    "population":7197,
    "county":"Nemaha County"
  },
  {
    "state":"NE",
    "FIPS":31129,
    "number":355,
    "rate":10.3,
    "population":4431,
    "county":"Nuckolls County"
  },
  {
    "state":"NE",
    "FIPS":31131,
    "number":1323,
    "rate":11.3,
    "population":15704,
    "county":"Otoe County"
  },
  {
    "state":"NE",
    "FIPS":31133,
    "number":251,
    "rate":11.8,
    "population":2782,
    "county":"Pawnee County"
  },
  {
    "state":"NE",
    "FIPS":31135,
    "number":199,
    "rate":9.1,
    "population":2947,
    "county":"Perkins County"
  },
  {
    "state":"NE",
    "FIPS":31137,
    "number":685,
    "rate":10.1,
    "population":9216,
    "county":"Phelps County"
  },
  {
    "state":"NE",
    "FIPS":31139,
    "number":554,
    "rate":10.7,
    "population":7180,
    "county":"Pierce County"
  },
  {
    "state":"NE",
    "FIPS":31141,
    "number":1858,
    "rate":8,
    "population":32558,
    "county":"Platte County"
  },
  {
    "state":"NE",
    "FIPS":31143,
    "number":380,
    "rate":9.7,
    "population":5282,
    "county":"Polk County"
  },
  {
    "state":"NE",
    "FIPS":31145,
    "number":766,
    "rate":9.4,
    "population":11013,
    "county":"Red Willow County"
  },
  {
    "state":"NE",
    "FIPS":31147,
    "number":694,
    "rate":10.9,
    "population":8267,
    "county":"Richardson County"
  },
  {
    "state":"NE",
    "FIPS":31149,
    "number":125,
    "rate":11.6,
    "population":1393,
    "county":"Rock County"
  },
  {
    "state":"NE",
    "FIPS":31151,
    "number":847,
    "rate":8.2,
    "population":14447,
    "county":"Saline County"
  },
  {
    "state":"NE",
    "FIPS":31153,
    "number":9825,
    "rate":8.6,
    "population":165822,
    "county":"Sarpy County"
  },
  {
    "state":"NE",
    "FIPS":31155,
    "number":1233,
    "rate":8.2,
    "population":20807,
    "county":"Saunders County"
  },
  {
    "state":"NE",
    "FIPS":31157,
    "number":2854,
    "rate":10.6,
    "population":36902,
    "county":"Scotts Bluff County"
  },
  {
    "state":"NE",
    "FIPS":31159,
    "number":957,
    "rate":7.9,
    "population":16965,
    "county":"Seward County"
  },
  {
    "state":"NE",
    "FIPS":31161,
    "number":431,
    "rate":10.7,
    "population":5355,
    "county":"Sheridan County"
  },
  {
    "state":"NE",
    "FIPS":31163,
    "number":252,
    "rate":10.6,
    "population":3124,
    "county":"Sherman County"
  },
  {
    "state":"NE",
    "FIPS":31165,
    "number":85,
    "rate":8.6,
    "population":1321,
    "county":"Sioux County"
  },
  {
    "state":"NE",
    "FIPS":31167,
    "number":416,
    "rate":9.6,
    "population":6093,
    "county":"Stanton County"
  },
  {
    "state":"NE",
    "FIPS":31169,
    "number":422,
    "rate":10.6,
    "population":5154,
    "county":"Thayer County"
  },
  {
    "state":"NE",
    "FIPS":31171,
    "number":49,
    "rate":9.7,
    "population":691,
    "county":"Thomas County"
  },
  {
    "state":"NE",
    "FIPS":31173,
    "number":692,
    "rate":16.3,
    "population":6923,
    "county":"Thurston County"
  },
  {
    "state":"NE",
    "FIPS":31175,
    "number":361,
    "rate":11.3,
    "population":4229,
    "county":"Valley County"
  },
  {
    "state":"NE",
    "FIPS":31177,
    "number":1243,
    "rate":8.5,
    "population":20291,
    "county":"Washington County"
  },
  {
    "state":"NE",
    "FIPS":31179,
    "number":457,
    "rate":6.7,
    "population":9514,
    "county":"Wayne County"
  },
  {
    "state":"NE",
    "FIPS":31181,
    "number":279,
    "rate":9.9,
    "population":3753,
    "county":"Webster County"
  },
  {
    "state":"NE",
    "FIPS":31183,
    "number":59,
    "rate":9.9,
    "population":792,
    "county":"Wheeler County"
  },
  {
    "state":"NE",
    "FIPS":31185,
    "number":900,
    "rate":8.7,
    "population":13815,
    "county":"York County"
  },
  {
    "state":"NH",
    "FIPS":33001,
    "number":4479,
    "rate":9.5,
    "population":60394,
    "county":"Belknap County"
  },
  {
    "state":"NH",
    "FIPS":33003,
    "number":3817,
    "rate":9.9,
    "population":47667,
    "county":"Carroll County"
  },
  {
    "state":"NH",
    "FIPS":33005,
    "number":5112,
    "rate":8.7,
    "population":76758,
    "county":"Cheshire County"
  },
  {
    "state":"NH",
    "FIPS":33007,
    "number":2905,
    "rate":11.3,
    "population":31977,
    "county":"Coos County"
  },
  {
    "state":"NH",
    "FIPS":33009,
    "number":6297,
    "rate":9.1,
    "population":89342,
    "county":"Grafton County"
  },
  {
    "state":"NH",
    "FIPS":33011,
    "number":27718,
    "rate":9.2,
    "population":402600,
    "county":"Hillsborough County"
  },
  {
    "state":"NH",
    "FIPS":33013,
    "number":10329,
    "rate":9.2,
    "population":146987,
    "county":"Merrimack County"
  },
  {
    "state":"NH",
    "FIPS":33015,
    "number":20161,
    "rate":8.9,
    "population":297841,
    "county":"Rockingham County"
  },
  {
    "state":"NH",
    "FIPS":33017,
    "number":9876,
    "rate":10.6,
    "population":124543,
    "county":"Strafford County"
  },
  {
    "state":"NH",
    "FIPS":33019,
    "number":3287,
    "rate":9.8,
    "population":43188,
    "county":"Sullivan County"
  },
  {
    "state":"NJ",
    "FIPS":34001,
    "number":21761,
    "rate":10.6,
    "population":275566,
    "county":"Atlantic County"
  },
  {
    "state":"NJ",
    "FIPS":34003,
    "number":52747,
    "rate":7.6,
    "population":920440,
    "county":"Bergen County"
  },
  {
    "state":"NJ",
    "FIPS":34005,
    "number":32387,
    "rate":9.5,
    "population":451207,
    "county":"Burlington County"
  },
  {
    "state":"NJ",
    "FIPS":34007,
    "number":38113,
    "rate":10,
    "population":513104,
    "county":"Camden County"
  },
  {
    "state":"NJ",
    "FIPS":34009,
    "number":8747,
    "rate":11.4,
    "population":96398,
    "county":"Cape May County"
  },
  {
    "state":"NJ",
    "FIPS":34011,
    "number":13525,
    "rate":11.6,
    "population":157794,
    "county":"Cumberland County"
  },
  {
    "state":"NJ",
    "FIPS":34013,
    "number":58341,
    "rate":10.2,
    "population":788425,
    "county":"Essex County"
  },
  {
    "state":"NJ",
    "FIPS":34015,
    "number":23225,
    "rate":10.9,
    "population":289671,
    "county":"Gloucester County"
  },
  {
    "state":"NJ",
    "FIPS":34017,
    "number":37536,
    "rate":7.4,
    "population":656879,
    "county":"Hudson County"
  },
  {
    "state":"NJ",
    "FIPS":34019,
    "number":6060,
    "rate":6.4,
    "population":126593,
    "county":"Hunterdon County"
  },
  {
    "state":"NJ",
    "FIPS":34021,
    "number":26282,
    "rate":9.6,
    "population":369057,
    "county":"Mercer County"
  },
  {
    "state":"NJ",
    "FIPS":34023,
    "number":58321,
    "rate":9.5,
    "population":824447,
    "county":"Middlesex County"
  },
  {
    "state":"NJ",
    "FIPS":34025,
    "number":41276,
    "rate":8.8,
    "population":629176,
    "county":"Monmouth County"
  },
  {
    "state":"NJ",
    "FIPS":34027,
    "number":27963,
    "rate":7.6,
    "population":497630,
    "county":"Morris County"
  },
  {
    "state":"NJ",
    "FIPS":34029,
    "number":47249,
    "rate":10.9,
    "population":580709,
    "county":"Ocean County"
  },
  {
    "state":"NJ",
    "FIPS":34031,
    "number":32922,
    "rate":9,
    "population":505013,
    "county":"Passaic County"
  },
  {
    "state":"NJ",
    "FIPS":34033,
    "number":5701,
    "rate":11.6,
    "population":65664,
    "county":"Salem County"
  },
  {
    "state":"NJ",
    "FIPS":34035,
    "number":20112,
    "rate":8.3,
    "population":328691,
    "county":"Somerset County"
  },
  {
    "state":"NJ",
    "FIPS":34037,
    "number":9038,
    "rate":8.2,
    "population":146985,
    "county":"Sussex County"
  },
  {
    "state":"NJ",
    "FIPS":34039,
    "number":31495,
    "rate":7.9,
    "population":545001,
    "county":"Union County"
  },
  {
    "state":"NJ",
    "FIPS":34041,
    "number":7006,
    "rate":8.7,
    "population":107550,
    "county":"Warren County"
  },
  {
    "state":"NM",
    "FIPS":35001,
    "number":32409,
    "rate":6.5,
    "population":672995,
    "county":"Bernalillo County"
  },
  {
    "state":"NM",
    "FIPS":35003,
    "number":312,
    "rate":10.2,
    "population":3652,
    "county":"Catron County"
  },
  {
    "state":"NM",
    "FIPS":35005,
    "number":4834,
    "rate":10.6,
    "population":65828,
    "county":"Chaves County"
  },
  {
    "state":"NM",
    "FIPS":35006,
    "number":2563,
    "rate":13,
    "population":27318,
    "county":"Cibola County"
  },
  {
    "state":"NM",
    "FIPS":35007,
    "number":1006,
    "rate":9.8,
    "population":13230,
    "county":"Colfax County"
  },
  {
    "state":"NM",
    "FIPS":35009,
    "number":2929,
    "rate":8.3,
    "population":50674,
    "county":"Curry County"
  },
  {
    "state":"NM",
    "FIPS":35011,
    "number":134,
    "rate":9.1,
    "population":1935,
    "county":"De Baca County"
  },
  {
    "state":"NM",
    "FIPS":35013,
    "number":9967,
    "rate":6.7,
    "population":214208,
    "county":"Dona Ana County"
  },
  {
    "state":"NM",
    "FIPS":35015,
    "number":3617,
    "rate":9.3,
    "population":54370,
    "county":"Eddy County"
  },
  {
    "state":"NM",
    "FIPS":35017,
    "number":2037,
    "rate":9.1,
    "population":29339,
    "county":"Grant County"
  },
  {
    "state":"NM",
    "FIPS":35019,
    "number":308,
    "rate":8.7,
    "population":4607,
    "county":"Guadalupe County"
  },
  {
    "state":"NM",
    "FIPS":35021,
    "number":62,
    "rate":10.7,
    "population":701,
    "county":"Harding County"
  },
  {
    "state":"NM",
    "FIPS":35023,
    "number":323,
    "rate":9.3,
    "population":4789,
    "county":"Hidalgo County"
  },
  {
    "state":"NM",
    "FIPS":35025,
    "number":3528,
    "rate":7.9,
    "population":66286,
    "county":"Lea County"
  },
  {
    "state":"NM",
    "FIPS":35027,
    "number":1297,
    "rate":8.1,
    "population":20208,
    "county":"Lincoln County"
  },
  {
    "state":"NM",
    "FIPS":35028,
    "number":944,
    "rate":7,
    "population":18162,
    "county":"Los Alamos County"
  },
  {
    "state":"NM",
    "FIPS":35029,
    "number":1732,
    "rate":9.8,
    "population":25019,
    "county":"Luna County"
  },
  {
    "state":"NM",
    "FIPS":35031,
    "number":6837,
    "rate":14.2,
    "population":72716,
    "county":"Mckinley County"
  },
  {
    "state":"NM",
    "FIPS":35033,
    "number":384,
    "rate":10.6,
    "population":4679,
    "county":"Mora County"
  },
  {
    "state":"NM",
    "FIPS":35035,
    "number":4770,
    "rate":10,
    "population":66102,
    "county":"Otero County"
  },
  {
    "state":"NM",
    "FIPS":35037,
    "number":700,
    "rate":10.4,
    "population":8798,
    "county":"Quay County"
  },
  {
    "state":"NM",
    "FIPS":35039,
    "number":2626,
    "rate":8.9,
    "population":40260,
    "county":"Rio Arriba County"
  },
  {
    "state":"NM",
    "FIPS":35041,
    "number":1336,
    "rate":9.6,
    "population":20336,
    "county":"Roosevelt County"
  },
  {
    "state":"NM",
    "FIPS":35045,
    "number":8684,
    "rate":9.8,
    "population":128367,
    "county":"San Juan County"
  },
  {
    "state":"NM",
    "FIPS":35047,
    "number":1952,
    "rate":8.9,
    "population":28953,
    "county":"San Miguel County"
  },
  {
    "state":"NM",
    "FIPS":35043,
    "number":7857,
    "rate":8.1,
    "population":135319,
    "county":"Sandoval County"
  },
  {
    "state":"NM",
    "FIPS":35049,
    "number":5611,
    "rate":4.9,
    "population":146385,
    "county":"Santa Fe County"
  },
  {
    "state":"NM",
    "FIPS":35051,
    "number":1013,
    "rate":10.4,
    "population":11893,
    "county":"Sierra County"
  },
  {
    "state":"NM",
    "FIPS":35053,
    "number":1248,
    "rate":9.8,
    "population":17527,
    "county":"Socorro County"
  },
  {
    "state":"NM",
    "FIPS":35055,
    "number":1871,
    "rate":7.3,
    "population":32817,
    "county":"Taos County"
  },
  {
    "state":"NM",
    "FIPS":35057,
    "number":1146,
    "rate":9.6,
    "population":16072,
    "county":"Torrance County"
  },
  {
    "state":"NM",
    "FIPS":35059,
    "number":271,
    "rate":7.8,
    "population":4419,
    "county":"Union County"
  },
  {
    "state":"NM",
    "FIPS":35061,
    "number":4979,
    "rate":9,
    "population":76630,
    "county":"Valencia County"
  },
  {
    "state":"NV",
    "FIPS":32510,
    "number":3530,
    "rate":8.4,
    "population":54578,
    "county":"Carson City"
  },
  {
    "state":"NV",
    "FIPS":32001,
    "number":1717,
    "rate":9.6,
    "population":24317,
    "county":"Churchill County"
  },
  {
    "state":"NV",
    "FIPS":32003,
    "number":125100,
    "rate":8.5,
    "population":1998646,
    "county":"Clark County"
  },
  {
    "state":"NV",
    "FIPS":32005,
    "number":2845,
    "rate":7.7,
    "population":46991,
    "county":"Douglas County"
  },
  {
    "state":"NV",
    "FIPS":32007,
    "number":2746,
    "rate":7.8,
    "population":51078,
    "county":"Elko County"
  },
  {
    "state":"NV",
    "FIPS":32009,
    "number":68,
    "rate":10.8,
    "population":763,
    "county":"Esmeralda County"
  },
  {
    "state":"NV",
    "FIPS":32013,
    "number":744,
    "rate":6.2,
    "population":17101,
    "county":"Humboldt County"
  },
  {
    "state":"NV",
    "FIPS":32015,
    "number":329,
    "rate":7.9,
    "population":5929,
    "county":"Lander County"
  },
  {
    "state":"NV",
    "FIPS":32011,
    "number":130,
    "rate":8.7,
    "population":1996,
    "county":"Eureka County"
  },
  {
    "state":"NV",
    "FIPS":32017,
    "number":331,
    "rate":8.5,
    "population":5348,
    "county":"Lincoln County"
  },
  {
    "state":"NV",
    "FIPS":32019,
    "number":3615,
    "rate":9.5,
    "population":51158,
    "county":"Lyon County"
  },
  {
    "state":"NV",
    "FIPS":32021,
    "number":391,
    "rate":10.5,
    "population":4662,
    "county":"Mineral County"
  },
  {
    "state":"NV",
    "FIPS":32023,
    "number":3786,
    "rate":11.2,
    "population":42923,
    "county":"Nye County"
  },
  {
    "state":"NV",
    "FIPS":32027,
    "number":442,
    "rate":8.2,
    "population":6765,
    "county":"Pershing County"
  },
  {
    "state":"NV",
    "FIPS":32029,
    "number":330,
    "rate":10,
    "population":3915,
    "county":"Storey County"
  },
  {
    "state":"NV",
    "FIPS":32031,
    "number":22356,
    "rate":7,
    "population":429086,
    "county":"Washoe County"
  },
  {
    "state":"NV",
    "FIPS":32033,
    "number":634,
    "rate":8.3,
    "population":9989,
    "county":"White Pine County"
  },
  {
    "state":"NY",
    "FIPS":36001,
    "number":22820,
    "rate":9.8,
    "population":306186,
    "county":"Albany County"
  },
  {
    "state":"NY",
    "FIPS":36003,
    "number":3575,
    "rate":10.2,
    "population":48289,
    "county":"Allegany County"
  },
  {
    "state":"NY",
    "FIPS":36005,
    "number":113337,
    "rate":11.4,
    "population":1414225,
    "county":"Bronx County"
  },
  {
    "state":"NY",
    "FIPS":36007,
    "number":16027,
    "rate":10.6,
    "population":198670,
    "county":"Broome County"
  },
  {
    "state":"NY",
    "FIPS":36009,
    "number":6150,
    "rate":10.5,
    "population":79342,
    "county":"Cattaraugus County"
  },
  {
    "state":"NY",
    "FIPS":36013,
    "number":10330,
    "rate":10.3,
    "population":133458,
    "county":"Chautauqua County"
  },
  {
    "state":"NY",
    "FIPS":36011,
    "number":6097,
    "rate":10,
    "population":79617,
    "county":"Cayuga County"
  },
  {
    "state":"NY",
    "FIPS":36015,
    "number":7108,
    "rate":10.6,
    "population":89231,
    "county":"Chemung County"
  },
  {
    "state":"NY",
    "FIPS":36017,
    "number":4117,
    "rate":10.9,
    "population":49849,
    "county":"Chenango County"
  },
  {
    "state":"NY",
    "FIPS":36021,
    "number":4928,
    "rate":10,
    "population":62554,
    "county":"Columbia County"
  },
  {
    "state":"NY",
    "FIPS":36019,
    "number":6167,
    "rate":9.8,
    "population":81826,
    "county":"Clinton County"
  },
  {
    "state":"NY",
    "FIPS":36023,
    "number":3256,
    "rate":9,
    "population":49203,
    "county":"Cortland County"
  },
  {
    "state":"NY",
    "FIPS":36025,
    "number":3714,
    "rate":10.2,
    "population":47166,
    "county":"Delaware County"
  },
  {
    "state":"NY",
    "FIPS":36027,
    "number":20457,
    "rate":9.2,
    "population":297340,
    "county":"Dutchess County"
  },
  {
    "state":"NY",
    "FIPS":36029,
    "number":64276,
    "rate":9.2,
    "population":920205,
    "county":"Erie County"
  },
  {
    "state":"NY",
    "FIPS":36031,
    "number":3239,
    "rate":10.4,
    "population":39066,
    "county":"Essex County"
  },
  {
    "state":"NY",
    "FIPS":36033,
    "number":4199,
    "rate":10.5,
    "population":51813,
    "county":"Franklin County"
  },
  {
    "state":"NY",
    "FIPS":36035,
    "number":4392,
    "rate":10.5,
    "population":55013,
    "county":"Fulton County"
  },
  {
    "state":"NY",
    "FIPS":36037,
    "number":4589,
    "rate":10.1,
    "population":59874,
    "county":"Genesee County"
  },
  {
    "state":"NY",
    "FIPS":36039,
    "number":3652,
    "rate":9.5,
    "population":48656,
    "county":"Greene County"
  },
  {
    "state":"NY",
    "FIPS":36041,
    "number":457,
    "rate":11.6,
    "population":4787,
    "county":"Hamilton County"
  },
  {
    "state":"NY",
    "FIPS":36043,
    "number":4893,
    "rate":10,
    "population":64572,
    "county":"Herkimer County"
  },
  {
    "state":"NY",
    "FIPS":36045,
    "number":8575,
    "rate":9.8,
    "population":120916,
    "county":"Jefferson County"
  },
  {
    "state":"NY",
    "FIPS":36047,
    "number":198412,
    "rate":10.4,
    "population":2574864,
    "county":"Kings County"
  },
  {
    "state":"NY",
    "FIPS":36049,
    "number":2197,
    "rate":11,
    "population":27259,
    "county":"Lewis County"
  },
  {
    "state":"NY",
    "FIPS":36051,
    "number":4988,
    "rate":10.2,
    "population":64862,
    "county":"Livingston County"
  },
  {
    "state":"NY",
    "FIPS":36053,
    "number":5207,
    "rate":9.7,
    "population":72420,
    "county":"Madison County"
  },
  {
    "state":"NY",
    "FIPS":36055,
    "number":54680,
    "rate":9.8,
    "population":748582,
    "county":"Monroe County"
  },
  {
    "state":"NY",
    "FIPS":36057,
    "number":3569,
    "rate":9.6,
    "population":49891,
    "county":"Montgomery County"
  },
  {
    "state":"NY",
    "FIPS":36059,
    "number":86437,
    "rate":8.6,
    "population":1350923,
    "county":"Nassau County"
  },
  {
    "state":"NY",
    "FIPS":36061,
    "number":86062,
    "rate":6.4,
    "population":1625198,
    "county":"New York County"
  },
  {
    "state":"NY",
    "FIPS":36063,
    "number":16964,
    "rate":10.3,
    "population":214862,
    "county":"Niagara County"
  },
  {
    "state":"NY",
    "FIPS":36065,
    "number":17418,
    "rate":9.9,
    "population":233981,
    "county":"Oneida County"
  },
  {
    "state":"NY",
    "FIPS":36067,
    "number":36195,
    "rate":10.4,
    "population":467182,
    "county":"Onondaga County"
  },
  {
    "state":"NY",
    "FIPS":36069,
    "number":6550,
    "rate":8,
    "population":108824,
    "county":"Ontario County"
  },
  {
    "state":"NY",
    "FIPS":36071,
    "number":27948,
    "rate":10.6,
    "population":373936,
    "county":"Orange County"
  },
  {
    "state":"NY",
    "FIPS":36073,
    "number":3466,
    "rate":10.7,
    "population":42517,
    "county":"Orleans County"
  },
  {
    "state":"NY",
    "FIPS":36075,
    "number":8471,
    "rate":9.4,
    "population":121654,
    "county":"Oswego County"
  },
  {
    "state":"NY",
    "FIPS":36077,
    "number":5188,
    "rate":11,
    "population":61880,
    "county":"Otsego County"
  },
  {
    "state":"NY",
    "FIPS":36079,
    "number":6691,
    "rate":8.9,
    "population":99657,
    "county":"Putnam County"
  },
  {
    "state":"NY",
    "FIPS":36081,
    "number":191472,
    "rate":10.9,
    "population":2280639,
    "county":"Queens County"
  },
  {
    "state":"NY",
    "FIPS":36083,
    "number":11437,
    "rate":9.4,
    "population":159572,
    "county":"Rensselaer County"
  },
  {
    "state":"NY",
    "FIPS":36085,
    "number":34392,
    "rate":9.8,
    "population":470977,
    "county":"Richmond County"
  },
  {
    "state":"NY",
    "FIPS":36087,
    "number":24283,
    "rate":11,
    "population":317825,
    "county":"Rockland County"
  },
  {
    "state":"NY",
    "FIPS":36091,
    "number":14177,
    "rate":8.4,
    "population":222413,
    "county":"Saratoga County"
  },
  {
    "state":"NY",
    "FIPS":36093,
    "number":12457,
    "rate":10.7,
    "population":155051,
    "county":"Schenectady County"
  },
  {
    "state":"NY",
    "FIPS":36095,
    "number":2366,
    "rate":9.6,
    "population":32048,
    "county":"Schoharie County"
  },
  {
    "state":"NY",
    "FIPS":36097,
    "number":1534,
    "rate":10.7,
    "population":18549,
    "county":"Schuyler County"
  },
  {
    "state":"NY",
    "FIPS":36099,
    "number":2780,
    "rate":10.2,
    "population":35381,
    "county":"Seneca County"
  },
  {
    "state":"NY",
    "FIPS":36089,
    "number":9264,
    "rate":11.1,
    "population":112466,
    "county":"St. Lawrence County"
  },
  {
    "state":"NY",
    "FIPS":36101,
    "number":8019,
    "rate":10.8,
    "population":99048,
    "county":"Steuben County"
  },
  {
    "state":"NY",
    "FIPS":36103,
    "number":91800,
    "rate":8.3,
    "population":1500422,
    "county":"Suffolk County"
  },
  {
    "state":"NY",
    "FIPS":36107,
    "number":3821,
    "rate":10.1,
    "population":50335,
    "county":"Tioga County"
  },
  {
    "state":"NY",
    "FIPS":36105,
    "number":6332,
    "rate":10.9,
    "population":76951,
    "county":"Sullivan County"
  },
  {
    "state":"NY",
    "FIPS":36109,
    "number":6166,
    "rate":8,
    "population":103044,
    "county":"Tompkins County"
  },
  {
    "state":"NY",
    "FIPS":36111,
    "number":14487,
    "rate":10.2,
    "population":181708,
    "county":"Ulster County"
  },
  {
    "state":"NY",
    "FIPS":36113,
    "number":5228,
    "rate":10.2,
    "population":65430,
    "county":"Warren County"
  },
  {
    "state":"NY",
    "FIPS":36115,
    "number":4765,
    "rate":9.7,
    "population":63046,
    "county":"Washington County"
  },
  {
    "state":"NY",
    "FIPS":36117,
    "number":6806,
    "rate":9.8,
    "population":93009,
    "county":"Wayne County"
  },
  {
    "state":"NY",
    "FIPS":36119,
    "number":61590,
    "rate":8.7,
    "population":961849,
    "county":"Westchester County"
  },
  {
    "state":"NY",
    "FIPS":36121,
    "number":2687,
    "rate":8.2,
    "population":41762,
    "county":"Wyoming County"
  },
  {
    "state":"NY",
    "FIPS":36123,
    "number":1661,
    "rate":9,
    "population":25265,
    "county":"Yates County"
  },
  {
    "state":"OH",
    "FIPS":39001,
    "number":2278,
    "rate":11,
    "population":28366,
    "county":"Adams County"
  },
  {
    "state":"OH",
    "FIPS":39003,
    "number":10175,
    "rate":13.2,
    "population":105283,
    "county":"Allen County"
  },
  {
    "state":"OH",
    "FIPS":39005,
    "number":4451,
    "rate":11.4,
    "population":53240,
    "county":"Ashland County"
  },
  {
    "state":"OH",
    "FIPS":39007,
    "number":9849,
    "rate":13.1,
    "population":100264,
    "county":"Ashtabula County"
  },
  {
    "state":"OH",
    "FIPS":39009,
    "number":5192,
    "rate":10.8,
    "population":64638,
    "county":"Athens County"
  },
  {
    "state":"OH",
    "FIPS":39011,
    "number":3666,
    "rate":10.9,
    "population":45866,
    "county":"Auglaize County"
  },
  {
    "state":"OH",
    "FIPS":39013,
    "number":8544,
    "rate":15.6,
    "population":69624,
    "county":"Belmont County"
  },
  {
    "state":"OH",
    "FIPS":39015,
    "number":4356,
    "rate":13.3,
    "population":44404,
    "county":"Brown County"
  },
  {
    "state":"OH",
    "FIPS":39017,
    "number":30470,
    "rate":11.4,
    "population":370833,
    "county":"Butler County"
  },
  {
    "state":"OH",
    "FIPS":39019,
    "number":2825,
    "rate":13.1,
    "population":28560,
    "county":"Carroll County"
  },
  {
    "state":"OH",
    "FIPS":39021,
    "number":3378,
    "rate":11.6,
    "population":39586,
    "county":"Champaign County"
  },
  {
    "state":"OH",
    "FIPS":39023,
    "number":13333,
    "rate":13.2,
    "population":137194,
    "county":"Clark County"
  },
  {
    "state":"OH",
    "FIPS":39025,
    "number":16530,
    "rate":11.4,
    "population":199219,
    "county":"Clermont County"
  },
  {
    "state":"OH",
    "FIPS":39027,
    "number":3366,
    "rate":11,
    "population":41831,
    "county":"Clinton County"
  },
  {
    "state":"OH",
    "FIPS":39029,
    "number":9005,
    "rate":11,
    "population":106438,
    "county":"Columbiana County"
  },
  {
    "state":"OH",
    "FIPS":39031,
    "number":3796,
    "rate":13.9,
    "population":36806,
    "county":"Coshocton County"
  },
  {
    "state":"OH",
    "FIPS":39033,
    "number":4219,
    "rate":13.1,
    "population":42847,
    "county":"Crawford County"
  },
  {
    "state":"OH",
    "FIPS":39035,
    "number":108724,
    "rate":11.4,
    "population":1265889,
    "county":"Cuyahoga County"
  },
  {
    "state":"OH",
    "FIPS":39037,
    "number":4838,
    "rate":12.6,
    "population":52506,
    "county":"Darke County"
  },
  {
    "state":"OH",
    "FIPS":39039,
    "number":3206,
    "rate":11.3,
    "population":38818,
    "county":"Delaware County"
  },
  {
    "state":"",
    "FIPS":39041,
    "number":11244,
    "rate":9,
    "population":null,
    "county":""
  },
  {
    "state":"OH",
    "FIPS":39043,
    "number":6389,
    "rate":11,
    "population":76442,
    "county":"Erie County"
  },
  {
    "state":"OH",
    "FIPS":39045,
    "number":11073,
    "rate":10.4,
    "population":147446,
    "county":"Fairfield County"
  },
  {
    "state":"OH",
    "FIPS":39047,
    "number":2724,
    "rate":12.8,
    "population":28850,
    "county":"Fayette County"
  },
  {
    "state":"OH",
    "FIPS":39049,
    "number":82651,
    "rate":9.4,
    "population":1196936,
    "county":"Franklin County"
  },
  {
    "state":"OH",
    "FIPS":39051,
    "number":3592,
    "rate":11.6,
    "population":42516,
    "county":"Fulton County"
  },
  {
    "state":"OH",
    "FIPS":39053,
    "number":2983,
    "rate":13.1,
    "population":30805,
    "county":"Gallia County"
  },
  {
    "state":"OH",
    "FIPS":39055,
    "number":7319,
    "rate":10.8,
    "population":93917,
    "county":"Geauga County"
  },
  {
    "state":"OH",
    "FIPS":39057,
    "number":13204,
    "rate":10.8,
    "population":164145,
    "county":"Greene County"
  },
  {
    "state":"OH",
    "FIPS":39059,
    "number":4054,
    "rate":13.7,
    "population":39813,
    "county":"Guernsey County"
  },
  {
    "state":"OH",
    "FIPS":39061,
    "number":66588,
    "rate":11.2,
    "population":802355,
    "county":"Hamilton County"
  },
  {
    "state":"OH",
    "FIPS":39063,
    "number":6326,
    "rate":11.3,
    "population":75647,
    "county":"Hancock County"
  },
  {
    "state":"OH",
    "FIPS":39065,
    "number":2252,
    "rate":9.8,
    "population":31643,
    "county":"Hardin County"
  },
  {
    "state":"OH",
    "FIPS":39067,
    "number":1564,
    "rate":13,
    "population":15694,
    "county":"Harrison County"
  },
  {
    "state":"OH",
    "FIPS":39069,
    "number":2254,
    "rate":10.9,
    "population":28060,
    "county":"Henry County"
  },
  {
    "state":"OH",
    "FIPS":39071,
    "number":3538,
    "rate":11.2,
    "population":43024,
    "county":"Highland County"
  },
  {
    "state":"OH",
    "FIPS":39073,
    "number":2890,
    "rate":13.2,
    "population":29291,
    "county":"Hocking County"
  },
  {
    "state":"OH",
    "FIPS":39075,
    "number":2665,
    "rate":9.7,
    "population":43105,
    "county":"Holmes County"
  },
  {
    "state":"OH",
    "FIPS":39077,
    "number":4772,
    "rate":11.2,
    "population":59295,
    "county":"Huron County"
  },
  {
    "state":"OH",
    "FIPS":39079,
    "number":3505,
    "rate":14.5,
    "population":32873,
    "county":"Jackson County"
  },
  {
    "state":"OH",
    "FIPS":39081,
    "number":8296,
    "rate":15.7,
    "population":68347,
    "county":"Jefferson County"
  },
  {
    "state":"OH",
    "FIPS":39083,
    "number":4583,
    "rate":10.4,
    "population":60817,
    "county":"Knox County"
  },
  {
    "state":"OH",
    "FIPS":39085,
    "number":18885,
    "rate":10.8,
    "population":229365,
    "county":"Lake County"
  },
  {
    "state":"OH",
    "FIPS":39087,
    "number":6657,
    "rate":14.3,
    "population":62108,
    "county":"Lawrence County"
  },
  {
    "state":"OH",
    "FIPS":39089,
    "number":13525,
    "rate":11,
    "population":167719,
    "county":"Licking County"
  },
  {
    "state":"OH",
    "FIPS":39091,
    "number":4443,
    "rate":13.4,
    "population":45454,
    "county":"Logan County"
  },
  {
    "state":"OH",
    "FIPS":39093,
    "number":25572,
    "rate":11.5,
    "population":301695,
    "county":"Lorain County"
  },
  {
    "state":"OH",
    "FIPS":39095,
    "number":36739,
    "rate":11.4,
    "population":437376,
    "county":"Lucas County"
  },
  {
    "state":"OH",
    "FIPS":39097,
    "number":3155,
    "rate":9.7,
    "population":42959,
    "county":"Madison County"
  },
  {
    "state":"OH",
    "FIPS":39099,
    "number":22292,
    "rate":12.3,
    "population":235787,
    "county":"Mahoning County"
  },
  {
    "state":"OH",
    "FIPS":39101,
    "number":6334,
    "rate":12.5,
    "population":66235,
    "county":"Marion County"
  },
  {
    "state":"OH",
    "FIPS":39103,
    "number":12708,
    "rate":10,
    "population":173704,
    "county":"Medina County"
  },
  {
    "state":"OH",
    "FIPS":39105,
    "number":2839,
    "rate":15.9,
    "population":23600,
    "county":"Meigs County"
  },
  {
    "state":"OH",
    "FIPS":39107,
    "number":3130,
    "rate":10.7,
    "population":40827,
    "county":"Mercer County"
  },
  {
    "state":"OH",
    "FIPS":39109,
    "number":8184,
    "rate":10.7,
    "population":103118,
    "county":"Miami County"
  },
  {
    "state":"OH",
    "FIPS":39111,
    "number":1646,
    "rate":14.6,
    "population":14579,
    "county":"Monroe County"
  },
  {
    "state":"OH",
    "FIPS":39113,
    "number":51460,
    "rate":12.8,
    "population":534971,
    "county":"Montgomery County"
  },
  {
    "state":"OH",
    "FIPS":39115,
    "number":1623,
    "rate":14.5,
    "population":14945,
    "county":"Morgan County"
  },
  {
    "state":"OH",
    "FIPS":39117,
    "number":3194,
    "rate":12.6,
    "population":35003,
    "county":"Morrow County"
  },
  {
    "state":"OH",
    "FIPS":39119,
    "number":7808,
    "rate":12.3,
    "population":85838,
    "county":"Muskingum County"
  },
  {
    "state":"OH",
    "FIPS":39121,
    "number":1659,
    "rate":14.4,
    "population":14577,
    "county":"Noble County"
  },
  {
    "state":"OH",
    "FIPS":39123,
    "number":3666,
    "rate":11.4,
    "population":41361,
    "county":"Ottawa County"
  },
  {
    "state":"OH",
    "FIPS":39125,
    "number":1623,
    "rate":11.5,
    "population":19287,
    "county":"Paulding County"
  },
  {
    "state":"OH",
    "FIPS":39127,
    "number":3124,
    "rate":12,
    "population":35997,
    "county":"Perry County"
  },
  {
    "state":"OH",
    "FIPS":39129,
    "number":4655,
    "rate":11.1,
    "population":56346,
    "county":"Pickaway County"
  },
  {
    "state":"OH",
    "FIPS":39131,
    "number":2934,
    "rate":14,
    "population":28501,
    "county":"Pike County"
  },
  {
    "state":"OH",
    "FIPS":39133,
    "number":11240,
    "rate":9.2,
    "population":161336,
    "county":"Portage County"
  },
  {
    "state":"OH",
    "FIPS":39135,
    "number":3465,
    "rate":11.2,
    "population":41895,
    "county":"Preble County"
  },
  {
    "state":"OH",
    "FIPS":39137,
    "number":2577,
    "rate":10.5,
    "population":34181,
    "county":"Putnam County"
  },
  {
    "state":"OH",
    "FIPS":39139,
    "number":11599,
    "rate":12.5,
    "population":122588,
    "county":"Richland County"
  },
  {
    "state":"OH",
    "FIPS":39141,
    "number":7677,
    "rate":13.1,
    "population":77485,
    "county":"Ross County"
  },
  {
    "state":"OH",
    "FIPS":39143,
    "number":5354,
    "rate":12,
    "population":60560,
    "county":"Sandusky County"
  },
  {
    "state":"OH",
    "FIPS":39145,
    "number":7777,
    "rate":13.2,
    "population":78572,
    "county":"Scioto County"
  },
  {
    "state":"OH",
    "FIPS":39147,
    "number":5425,
    "rate":13.2,
    "population":56025,
    "county":"Seneca County"
  },
  {
    "state":"OH",
    "FIPS":39149,
    "number":3685,
    "rate":10.6,
    "population":49142,
    "county":"Shelby County"
  },
  {
    "state":"OH",
    "FIPS":39151,
    "number":35030,
    "rate":12.4,
    "population":374844,
    "county":"Stark County"
  },
  {
    "state":"OH",
    "FIPS":39153,
    "number":40041,
    "rate":9.8,
    "population":540867,
    "county":"Summit County"
  },
  {
    "state":"OH",
    "FIPS":39155,
    "number":20478,
    "rate":12.9,
    "population":207439,
    "county":"Trumbull County"
  },
  {
    "state":"OH",
    "FIPS":39157,
    "number":7293,
    "rate":10.6,
    "population":92488,
    "county":"Tuscarawas County"
  },
  {
    "state":"OH",
    "FIPS":39159,
    "number":3890,
    "rate":10.4,
    "population":52815,
    "county":"Union County"
  },
  {
    "state":"OH",
    "FIPS":39161,
    "number":2969,
    "rate":14.1,
    "population":28729,
    "county":"Van Wert County"
  },
  {
    "state":"OH",
    "FIPS":39163,
    "number":1364,
    "rate":13.9,
    "population":13233,
    "county":"Vinton County"
  },
  {
    "state":"OH",
    "FIPS":39165,
    "number":14223,
    "rate":9.2,
    "population":217653,
    "county":"Warren County"
  },
  {
    "state":"OH",
    "FIPS":39167,
    "number":6057,
    "rate":12.8,
    "population":61508,
    "county":"Washington County"
  },
  {
    "state":"OH",
    "FIPS":39169,
    "number":9377,
    "rate":11.3,
    "population":114990,
    "county":"Wayne County"
  },
  {
    "state":"OH",
    "FIPS":39171,
    "number":3713,
    "rate":13.3,
    "population":37568,
    "county":"Williams County"
  },
  {
    "state":"OH",
    "FIPS":39173,
    "number":11016,
    "rate":11.6,
    "population":128659,
    "county":"Wood County"
  },
  {
    "state":"OH",
    "FIPS":39175,
    "number":2068,
    "rate":12.4,
    "population":22592,
    "county":"Wyandot County"
  },
  {
    "state":"OK",
    "FIPS":40001,
    "number":2239,
    "rate":14.3,
    "population":22248,
    "county":"Adair County"
  },
  {
    "state":"OK",
    "FIPS":40003,
    "number":603,
    "rate":13.3,
    "population":5643,
    "county":"Alfalfa County"
  },
  {
    "state":"OK",
    "FIPS":40005,
    "number":1309,
    "rate":12.5,
    "population":13960,
    "county":"Atoka County"
  },
  {
    "state":"OK",
    "FIPS":40007,
    "number":528,
    "rate":13,
    "population":5592,
    "county":"Beaver County"
  },
  {
    "state":"OK",
    "FIPS":40009,
    "number":1558,
    "rate":9.2,
    "population":23117,
    "county":"Beckham County"
  },
  {
    "state":"OK",
    "FIPS":40011,
    "number":1005,
    "rate":14.2,
    "population":9819,
    "county":"Blaine County"
  },
  {
    "state":"OK",
    "FIPS":40013,
    "number":3798,
    "rate":11.8,
    "population":43462,
    "county":"Bryan County"
  },
  {
    "state":"OK",
    "FIPS":40015,
    "number":2478,
    "rate":11.6,
    "population":29672,
    "county":"Caddo County"
  },
  {
    "state":"OK",
    "FIPS":40017,
    "number":9855,
    "rate":11.3,
    "population":122605,
    "county":"Canadian County"
  },
  {
    "state":"OK",
    "FIPS":40019,
    "number":4567,
    "rate":13.1,
    "population":48114,
    "county":"Carter County"
  },
  {
    "state":"OK",
    "FIPS":40021,
    "number":4657,
    "rate":13.4,
    "population":48085,
    "county":"Cherokee County"
  },
  {
    "state":"OK",
    "FIPS":40023,
    "number":1798,
    "rate":16,
    "population":15170,
    "county":"Choctaw County"
  },
  {
    "state":"OK",
    "FIPS":40025,
    "number":222,
    "rate":12.5,
    "population":2392,
    "county":"Cimarron County"
  },
  {
    "state":"OK",
    "FIPS":40027,
    "number":19965,
    "rate":10.2,
    "population":266122,
    "county":"Cleveland County"
  },
  {
    "state":"OK",
    "FIPS":40029,
    "number":551,
    "rate":12.8,
    "population":5918,
    "county":"Coal County"
  },
  {
    "state":"OK",
    "FIPS":40031,
    "number":10410,
    "rate":11.5,
    "population":126611,
    "county":"Comanche County"
  },
  {
    "state":"OK",
    "FIPS":40033,
    "number":636,
    "rate":13.9,
    "population":6147,
    "county":"Cotton County"
  },
  {
    "state":"OK",
    "FIPS":40035,
    "number":1506,
    "rate":13.5,
    "population":14721,
    "county":"Craig County"
  },
  {
    "state":"OK",
    "FIPS":40037,
    "number":6589,
    "rate":12.7,
    "population":70854,
    "county":"Creek County"
  },
  {
    "state":"OK",
    "FIPS":40039,
    "number":2291,
    "rate":11.1,
    "population":28518,
    "county":"Custer County"
  },
  {
    "state":"OK",
    "FIPS":40041,
    "number":4885,
    "rate":15.5,
    "population":41373,
    "county":"Delaware County"
  },
  {
    "state":"OK",
    "FIPS":40043,
    "number":478,
    "rate":13.7,
    "population":4779,
    "county":"Dewey County"
  },
  {
    "state":"OK",
    "FIPS":40045,
    "number":381,
    "rate":12.7,
    "population":4075,
    "county":"Ellis County"
  },
  {
    "state":"OK",
    "FIPS":40047,
    "number":4632,
    "rate":10.4,
    "population":61318,
    "county":"Garfield County"
  },
  {
    "state":"OK",
    "FIPS":40049,
    "number":2692,
    "rate":13.5,
    "population":27270,
    "county":"Garvin County"
  },
  {
    "state":"OK",
    "FIPS":40051,
    "number":4397,
    "rate":11.4,
    "population":53054,
    "county":"Grady County"
  },
  {
    "state":"OK",
    "FIPS":40053,
    "number":444,
    "rate":13.2,
    "population":4510,
    "county":"Grant County"
  },
  {
    "state":"OK",
    "FIPS":40055,
    "number":609,
    "rate":12.6,
    "population":6056,
    "county":"Greer County"
  },
  {
    "state":"OK",
    "FIPS":40057,
    "number":277,
    "rate":13.3,
    "population":2900,
    "county":"Harmon County"
  },
  {
    "state":"OK",
    "FIPS":40059,
    "number":316,
    "rate":11.7,
    "population":3693,
    "county":"Harper County"
  },
  {
    "state":"OK",
    "FIPS":40061,
    "number":1537,
    "rate":16.3,
    "population":12867,
    "county":"Haskell County"
  },
  {
    "state":"OK",
    "FIPS":40063,
    "number":1539,
    "rate":14.6,
    "population":13785,
    "county":"Hughes County"
  },
  {
    "state":"OK",
    "FIPS":40065,
    "number":2261,
    "rate":12.1,
    "population":26261,
    "county":"Jackson County"
  },
  {
    "state":"OK",
    "FIPS":40067,
    "number":594,
    "rate":12.4,
    "population":6335,
    "county":"Jefferson County"
  },
  {
    "state":"OK",
    "FIPS":40069,
    "number":1027,
    "rate":12.8,
    "population":11005,
    "county":"Johnston County"
  },
  {
    "state":"OK",
    "FIPS":40071,
    "number":4136,
    "rate":12.5,
    "population":45657,
    "county":"Kay County"
  },
  {
    "state":"OK",
    "FIPS":40073,
    "number":1195,
    "rate":11.2,
    "population":14996,
    "county":"Kingfisher County"
  },
  {
    "state":"OK",
    "FIPS":40075,
    "number":1031,
    "rate":14.8,
    "population":9343,
    "county":"Kiowa County"
  },
  {
    "state":"OK",
    "FIPS":40077,
    "number":1145,
    "rate":14.2,
    "population":10941,
    "county":"Latimer County"
  },
  {
    "state":"OK",
    "FIPS":40079,
    "number":5444,
    "rate":14.9,
    "population":49935,
    "county":"Le Flore County"
  },
  {
    "state":"OK",
    "FIPS":40081,
    "number":3282,
    "rate":13.2,
    "population":34215,
    "county":"Lincoln County"
  },
  {
    "state":"OK",
    "FIPS":40083,
    "number":4232,
    "rate":13.5,
    "population":43668,
    "county":"Logan County"
  },
  {
    "state":"OK",
    "FIPS":40085,
    "number":936,
    "rate":13.4,
    "population":9563,
    "county":"Love County"
  },
  {
    "state":"OK",
    "FIPS":40093,
    "number":675,
    "rate":12,
    "population":7659,
    "county":"Major County"
  },
  {
    "state":"OK",
    "FIPS":40095,
    "number":1476,
    "rate":12.6,
    "population":15913,
    "county":"Marshall County"
  },
  {
    "state":"OK",
    "FIPS":40087,
    "number":2810,
    "rate":11.1,
    "population":35587,
    "county":"McClain County"
  },
  {
    "state":"OK",
    "FIPS":40097,
    "number":4076,
    "rate":13.7,
    "population":41111,
    "county":"Mayes County"
  },
  {
    "state":"OK",
    "FIPS":40089,
    "number":3134,
    "rate":13.2,
    "population":33229,
    "county":"McCurtain County"
  },
  {
    "state":"OK",
    "FIPS":40091,
    "number":2290,
    "rate":14.4,
    "population":20522,
    "county":"McIntosh County"
  },
  {
    "state":"OK",
    "FIPS":40099,
    "number":1324,
    "rate":13,
    "population":13640,
    "county":"Murray County"
  },
  {
    "state":"OK",
    "FIPS":40101,
    "number":7134,
    "rate":13.9,
    "population":70528,
    "county":"Muskogee County"
  },
  {
    "state":"OK",
    "FIPS":40103,
    "number":1092,
    "rate":12.9,
    "population":11505,
    "county":"Noble County"
  },
  {
    "state":"OK",
    "FIPS":40105,
    "number":1104,
    "rate":14,
    "population":10582,
    "county":"Nowata County"
  },
  {
    "state":"OK",
    "FIPS":40107,
    "number":1118,
    "rate":12.3,
    "population":12303,
    "county":"Okfuskee County"
  },
  {
    "state":"OK",
    "FIPS":40109,
    "number":55737,
    "rate":10.4,
    "population":742635,
    "county":"Oklahoma County"
  },
  {
    "state":"OK",
    "FIPS":40111,
    "number":3538,
    "rate":12.3,
    "population":39587,
    "county":"Okmulgee County"
  },
  {
    "state":"OK",
    "FIPS":40113,
    "number":4914,
    "rate":13.8,
    "population":48010,
    "county":"Osage County"
  },
  {
    "state":"OK",
    "FIPS":40115,
    "number":3133,
    "rate":13.5,
    "population":32252,
    "county":"Ottawa County"
  },
  {
    "state":"OK",
    "FIPS":40117,
    "number":1660,
    "rate":13.7,
    "population":16483,
    "county":"Pawnee County"
  },
  {
    "state":"OK",
    "FIPS":40119,
    "number":4131,
    "rate":7.1,
    "population":78479,
    "county":"Payne County"
  },
  {
    "state":"OK",
    "FIPS":40121,
    "number":4362,
    "rate":12.8,
    "population":45131,
    "county":"Pittsburg County"
  },
  {
    "state":"OK",
    "FIPS":40123,
    "number":2837,
    "rate":10.3,
    "population":38006,
    "county":"Pontotoc County"
  },
  {
    "state":"OK",
    "FIPS":40125,
    "number":7111,
    "rate":13.9,
    "population":70703,
    "county":"Pottawatomie County"
  },
  {
    "state":"OK",
    "FIPS":40127,
    "number":1243,
    "rate":14.6,
    "population":11233,
    "county":"Pushmataha County"
  },
  {
    "state":"OK",
    "FIPS":40129,
    "number":334,
    "rate":12.3,
    "population":3774,
    "county":"Roger Mills County"
  },
  {
    "state":"OK",
    "FIPS":40131,
    "number":6743,
    "rate":10.6,
    "population":88445,
    "county":"Rogers County"
  },
  {
    "state":"OK",
    "FIPS":40133,
    "number":2406,
    "rate":13.2,
    "population":25469,
    "county":"Seminole County"
  },
  {
    "state":"OK",
    "FIPS":40135,
    "number":3939,
    "rate":13,
    "population":41466,
    "county":"Sequoyah County"
  },
  {
    "state":"OK",
    "FIPS":40137,
    "number":4353,
    "rate":13.1,
    "population":44837,
    "county":"Stephens County"
  },
  {
    "state":"OK",
    "FIPS":40139,
    "number":1320,
    "rate":8.9,
    "population":21533,
    "county":"Texas County"
  },
  {
    "state":"OK",
    "FIPS":40141,
    "number":783,
    "rate":13.8,
    "population":7784,
    "county":"Tillman County"
  },
  {
    "state":"OK",
    "FIPS":40143,
    "number":46559,
    "rate":10.5,
    "population":614460,
    "county":"Tulsa County"
  },
  {
    "state":"OK",
    "FIPS":40145,
    "number":6687,
    "rate":12.4,
    "population":74997,
    "county":"Wagoner County"
  },
  {
    "state":"OK",
    "FIPS":40147,
    "number":5280,
    "rate":13.9,
    "population":51710,
    "county":"Washington County"
  },
  {
    "state":"OK",
    "FIPS":40149,
    "number":1011,
    "rate":12.1,
    "population":11638,
    "county":"Washita County"
  },
  {
    "state":"OK",
    "FIPS":40151,
    "number":734,
    "rate":10.9,
    "population":8832,
    "county":"Woods County"
  },
  {
    "state":"OK",
    "FIPS":40153,
    "number":1713,
    "rate":11.4,
    "population":20647,
    "county":"Woodward County"
  },
  {
    "state":"OR",
    "FIPS":41001,
    "number":1465,
    "rate":11.8,
    "population":15961,
    "county":"Baker County"
  },
  {
    "state":"OR",
    "FIPS":41003,
    "number":4652,
    "rate":7,
    "population":86380,
    "county":"Benton County"
  },
  {
    "state":"OR",
    "FIPS":41005,
    "number":26705,
    "rate":9.3,
    "population":383540,
    "county":"Clackamas County"
  },
  {
    "state":"OR",
    "FIPS":41007,
    "number":3087,
    "rate":10.6,
    "population":37343,
    "county":"Clatsop County"
  },
  {
    "state":"OR",
    "FIPS":41009,
    "number":3806,
    "rate":10.3,
    "population":49208,
    "county":"Columbia County"
  },
  {
    "state":"OR",
    "FIPS":41011,
    "number":5368,
    "rate":10.8,
    "population":62690,
    "county":"Coos County"
  },
  {
    "state":"OR",
    "FIPS":41013,
    "number":1855,
    "rate":11.5,
    "population":20636,
    "county":"Crook County"
  },
  {
    "state":"OR",
    "FIPS":41015,
    "number":2112,
    "rate":11.5,
    "population":22249,
    "county":"Curry County"
  },
  {
    "state":"OR",
    "FIPS":41017,
    "number":10336,
    "rate":8.4,
    "population":161746,
    "county":"Deschutes County"
  },
  {
    "state":"OR",
    "FIPS":41019,
    "number":10140,
    "rate":12.1,
    "population":107082,
    "county":"Douglas County"
  },
  {
    "state":"OR",
    "FIPS":41021,
    "number":171,
    "rate":11.1,
    "population":1941,
    "county":"Gilliam County"
  },
  {
    "state":"OR",
    "FIPS":41023,
    "number":666,
    "rate":11.5,
    "population":7317,
    "county":"Grant County"
  },
  {
    "state":"OR",
    "FIPS":41025,
    "number":638,
    "rate":11.6,
    "population":7228,
    "county":"Harney County"
  },
  {
    "state":"OR",
    "FIPS":41027,
    "number":1357,
    "rate":8.3,
    "population":22628,
    "county":"Hood River County"
  },
  {
    "state":"OR",
    "FIPS":41029,
    "number":15490,
    "rate":9.8,
    "population":206363,
    "county":"Jackson County"
  },
  {
    "state":"OR",
    "FIPS":41031,
    "number":1538,
    "rate":10.1,
    "population":21759,
    "county":"Jefferson County"
  },
  {
    "state":"OR",
    "FIPS":41033,
    "number":6178,
    "rate":9.6,
    "population":82782,
    "county":"Josephine County"
  },
  {
    "state":"OR",
    "FIPS":41035,
    "number":5240,
    "rate":10.5,
    "population":66042,
    "county":"Klamath County"
  },
  {
    "state":"OR",
    "FIPS":41037,
    "number":661,
    "rate":10.7,
    "population":7790,
    "county":"Lake County"
  },
  {
    "state":"OR",
    "FIPS":41039,
    "number":23029,
    "rate":8.4,
    "population":354481,
    "county":"Lane County"
  },
  {
    "state":"OR",
    "FIPS":41041,
    "number":5204,
    "rate":13.9,
    "population":46152,
    "county":"Lincoln County"
  },
  {
    "state":"OR",
    "FIPS":41043,
    "number":8789,
    "rate":10,
    "population":118360,
    "county":"Linn County"
  },
  {
    "state":"OR",
    "FIPS":41045,
    "number":2057,
    "rate":9.3,
    "population":30606,
    "county":"Malheur County"
  },
  {
    "state":"OR",
    "FIPS":41047,
    "number":22598,
    "rate":9.9,
    "population":320085,
    "county":"Marion County"
  },
  {
    "state":"OR",
    "FIPS":41049,
    "number":758,
    "rate":9.7,
    "population":11240,
    "county":"Morrow County"
  },
  {
    "state":"OR",
    "FIPS":41051,
    "number":44624,
    "rate":7.6,
    "population":758817,
    "county":"Multnomah County"
  },
  {
    "state":"OR",
    "FIPS":41053,
    "number":5656,
    "rate":10.2,
    "population":76254,
    "county":"Polk County"
  },
  {
    "state":"OR",
    "FIPS":41055,
    "number":153,
    "rate":11.2,
    "population":1735,
    "county":"Sherman County"
  },
  {
    "state":"OR",
    "FIPS":41057,
    "number":1928,
    "rate":9.7,
    "population":25326,
    "county":"Tillamook County"
  },
  {
    "state":"OR",
    "FIPS":41059,
    "number":5760,
    "rate":10.5,
    "population":76920,
    "county":"Umatilla County"
  },
  {
    "state":"OR",
    "FIPS":41061,
    "number":1835,
    "rate":9.6,
    "population":25818,
    "county":"Union County"
  },
  {
    "state":"OR",
    "FIPS":41063,
    "number":635,
    "rate":11.6,
    "population":6814,
    "county":"Wallowa County"
  },
  {
    "state":"OR",
    "FIPS":41065,
    "number":2023,
    "rate":10.6,
    "population":25457,
    "county":"Wasco County"
  },
  {
    "state":"OR",
    "FIPS":41067,
    "number":32645,
    "rate":8.2,
    "population":547737,
    "county":"Washington County"
  },
  {
    "state":"OR",
    "FIPS":41069,
    "number":140,
    "rate":12.2,
    "population":1426,
    "county":"Wheeler County"
  },
  {
    "state":"OR",
    "FIPS":41071,
    "number":6777,
    "rate":9.3,
    "population":100771,
    "county":"Yamhill County"
  },
  {
    "state":"PA",
    "FIPS":42001,
    "number":8891,
    "rate":11.6,
    "population":101538,
    "county":"Adams County"
  },
  {
    "state":"PA",
    "FIPS":42003,
    "number":86177,
    "rate":9,
    "population":1230383,
    "county":"Allegheny County"
  },
  {
    "state":"PA",
    "FIPS":42005,
    "number":6390,
    "rate":12,
    "population":68362,
    "county":"Armstrong County"
  },
  {
    "state":"PA",
    "FIPS":42007,
    "number":14456,
    "rate":10.9,
    "population":170224,
    "county":"Beaver County"
  },
  {
    "state":"PA",
    "FIPS":42009,
    "number":4789,
    "rate":12.6,
    "population":49399,
    "county":"Bedford County"
  },
  {
    "state":"PA",
    "FIPS":42011,
    "number":31896,
    "rate":10.5,
    "population":413252,
    "county":"Berks County"
  },
  {
    "state":"PA",
    "FIPS":42013,
    "number":10302,
    "rate":10.6,
    "population":126999,
    "county":"Blair County"
  },
  {
    "state":"PA",
    "FIPS":42015,
    "number":5089,
    "rate":10.7,
    "population":62813,
    "county":"Bradford County"
  },
  {
    "state":"PA",
    "FIPS":42019,
    "number":12778,
    "rate":9.2,
    "population":185089,
    "county":"Butler County"
  },
  {
    "state":"PA",
    "FIPS":42021,
    "number":13520,
    "rate":12.3,
    "population":141531,
    "county":"Cambria County"
  },
  {
    "state":"PA",
    "FIPS":42017,
    "number":44056,
    "rate":9.3,
    "population":626189,
    "county":"Bucks County"
  },
  {
    "state":"PA",
    "FIPS":42023,
    "number":450,
    "rate":11.4,
    "population":4942,
    "county":"Cameron County"
  },
  {
    "state":"PA",
    "FIPS":42025,
    "number":5076,
    "rate":10,
    "population":64927,
    "county":"Carbon County"
  },
  {
    "state":"PA",
    "FIPS":42027,
    "number":9184,
    "rate":7.7,
    "population":155582,
    "county":"Centre County"
  },
  {
    "state":"PA",
    "FIPS":42029,
    "number":28910,
    "rate":7.8,
    "population":506317,
    "county":"Chester County"
  },
  {
    "state":"PA",
    "FIPS":42031,
    "number":3361,
    "rate":11.1,
    "population":39450,
    "county":"Clarion County"
  },
  {
    "state":"PA",
    "FIPS":42033,
    "number":7866,
    "rate":12.3,
    "population":81503,
    "county":"Clearfield County"
  },
  {
    "state":"PA",
    "FIPS":42035,
    "number":2996,
    "rate":10.1,
    "population":39730,
    "county":"Clinton County"
  },
  {
    "state":"PA",
    "FIPS":42037,
    "number":6059,
    "rate":11.9,
    "population":66924,
    "county":"Columbia County"
  },
  {
    "state":"PA",
    "FIPS":42039,
    "number":7680,
    "rate":11.7,
    "population":87660,
    "county":"Crawford County"
  },
  {
    "state":"PA",
    "FIPS":42041,
    "number":16949,
    "rate":9.3,
    "population":239198,
    "county":"Cumberland County"
  },
  {
    "state":"PA",
    "FIPS":42043,
    "number":23531,
    "rate":11.6,
    "population":269857,
    "county":"Dauphin County"
  },
  {
    "state":"PA",
    "FIPS":42045,
    "number":35697,
    "rate":8.6,
    "population":560916,
    "county":"Delaware County"
  },
  {
    "state":"PA",
    "FIPS":42047,
    "number":2669,
    "rate":10.9,
    "population":31623,
    "county":"Elk County"
  },
  {
    "state":"PA",
    "FIPS":42049,
    "number":24249,
    "rate":11.6,
    "population":280801,
    "county":"Erie County"
  },
  {
    "state":"PA",
    "FIPS":42051,
    "number":15639,
    "rate":14.8,
    "population":135479,
    "county":"Fayette County"
  },
  {
    "state":"PA",
    "FIPS":42053,
    "number":762,
    "rate":11.2,
    "population":7670,
    "county":"Forest County"
  },
  {
    "state":"PA",
    "FIPS":42055,
    "number":11692,
    "rate":10.4,
    "population":151589,
    "county":"Franklin County"
  },
  {
    "state":"PA",
    "FIPS":42057,
    "number":1275,
    "rate":11.4,
    "population":14764,
    "county":"Fulton County"
  },
  {
    "state":"PA",
    "FIPS":42059,
    "number":3295,
    "rate":11.1,
    "population":38084,
    "county":"Greene County"
  },
  {
    "state":"PA",
    "FIPS":42061,
    "number":3849,
    "rate":10.8,
    "population":46018,
    "county":"Huntingdon County"
  },
  {
    "state":"PA",
    "FIPS":42063,
    "number":6331,
    "rate":9.4,
    "population":88209,
    "county":"Indiana County"
  },
  {
    "state":"PA",
    "FIPS":42065,
    "number":3967,
    "rate":11.6,
    "population":44872,
    "county":"Jefferson County"
  },
  {
    "state":"PA",
    "FIPS":42067,
    "number":2355,
    "rate":12.6,
    "population":24915,
    "county":"Juniata County"
  },
  {
    "state":"PA",
    "FIPS":42069,
    "number":19356,
    "rate":11.7,
    "population":214510,
    "county":"Lackawanna County"
  },
  {
    "state":"PA",
    "FIPS":42071,
    "number":34177,
    "rate":8.9,
    "population":526766,
    "county":"Lancaster County"
  },
  {
    "state":"PA",
    "FIPS":42073,
    "number":8121,
    "rate":11.8,
    "population":89797,
    "county":"Lawrence County"
  },
  {
    "state":"PA",
    "FIPS":42075,
    "number":10800,
    "rate":10.7,
    "population":135582,
    "county":"Lebanon County"
  },
  {
    "state":"PA",
    "FIPS":42077,
    "number":28014,
    "rate":10.6,
    "population":355269,
    "county":"Lehigh County"
  },
  {
    "state":"PA",
    "FIPS":42079,
    "number":29102,
    "rate":11.7,
    "population":321276,
    "county":"Luzerne County"
  },
  {
    "state":"PA",
    "FIPS":42081,
    "number":8921,
    "rate":9.9,
    "population":117296,
    "county":"Lycoming County"
  },
  {
    "state":"PA",
    "FIPS":42083,
    "number":2993,
    "rate":9.1,
    "population":43234,
    "county":"McKean County"
  },
  {
    "state":"PA",
    "FIPS":42085,
    "number":10609,
    "rate":12.1,
    "population":115747,
    "county":"Mercer County"
  },
  {
    "state":"PA",
    "FIPS":42087,
    "number":4291,
    "rate":12.2,
    "population":46829,
    "county":"Mifflin County"
  },
  {
    "state":"PA",
    "FIPS":42089,
    "number":12747,
    "rate":10.2,
    "population":168465,
    "county":"Monroe County"
  },
  {
    "state":"PA",
    "FIPS":42091,
    "number":44112,
    "rate":7.3,
    "population":809618,
    "county":"Montgomery County"
  },
  {
    "state":"PA",
    "FIPS":42093,
    "number":1718,
    "rate":12.1,
    "population":18491,
    "county":"Montour County"
  },
  {
    "state":"PA",
    "FIPS":42095,
    "number":23351,
    "rate":10.3,
    "population":299363,
    "county":"Northampton County"
  },
  {
    "state":"PA",
    "FIPS":42097,
    "number":9084,
    "rate":12.3,
    "population":94556,
    "county":"Northumberland County"
  },
  {
    "state":"PA",
    "FIPS":42099,
    "number":3501,
    "rate":10.2,
    "population":45772,
    "county":"Perry County"
  },
  {
    "state":"PA",
    "FIPS":42101,
    "number":130938,
    "rate":11.4,
    "population":1550396,
    "county":"Philadelphia County"
  },
  {
    "state":"PA",
    "FIPS":42103,
    "number":4547,
    "rate":10.5,
    "population":56762,
    "county":"Pike County"
  },
  {
    "state":"PA",
    "FIPS":42105,
    "number":1551,
    "rate":11.6,
    "population":17625,
    "county":"Potter County"
  },
  {
    "state":"PA",
    "FIPS":42107,
    "number":12906,
    "rate":11.2,
    "population":147288,
    "county":"Schuylkill County"
  },
  {
    "state":"PA",
    "FIPS":42109,
    "number":2950,
    "rate":10,
    "population":39796,
    "county":"Snyder County"
  },
  {
    "state":"PA",
    "FIPS":42113,
    "number":677,
    "rate":12.8,
    "population":6453,
    "county":"Sullivan County"
  },
  {
    "state":"PA",
    "FIPS":42111,
    "number":7315,
    "rate":12,
    "population":77110,
    "county":"Somerset County"
  },
  {
    "state":"PA",
    "FIPS":42115,
    "number":3459,
    "rate":10.5,
    "population":42773,
    "county":"Susquehanna County"
  },
  {
    "state":"PA",
    "FIPS":42117,
    "number":3613,
    "rate":11.1,
    "population":42611,
    "county":"Tioga County"
  },
  {
    "state":"PA",
    "FIPS":42119,
    "number":3482,
    "rate":10,
    "population":45139,
    "county":"Union County"
  },
  {
    "state":"PA",
    "FIPS":42121,
    "number":5247,
    "rate":12.5,
    "population":54235,
    "county":"Venango County"
  },
  {
    "state":"PA",
    "FIPS":42123,
    "number":3782,
    "rate":11.8,
    "population":41212,
    "county":"Warren County"
  },
  {
    "state":"PA",
    "FIPS":42125,
    "number":19626,
    "rate":12.2,
    "population":208431,
    "county":"Washington County"
  },
  {
    "state":"PA",
    "FIPS":42127,
    "number":4895,
    "rate":11.9,
    "population":51685,
    "county":"Wayne County"
  },
  {
    "state":"PA",
    "FIPS":42129,
    "number":31818,
    "rate":11.2,
    "population":363100,
    "county":"Westmoreland County"
  },
  {
    "state":"PA",
    "FIPS":42131,
    "number":2222,
    "rate":10.3,
    "population":28348,
    "county":"Wyoming County"
  },
  {
    "state":"PA",
    "FIPS":42133,
    "number":32540,
    "rate":10,
    "population":437699,
    "county":"York County"
  },
  {
    "state":"PR",
    "FIPS":72001,
    "number":2893,
    "rate":20.7,
    "population":0,
    "county":"Adjuntas"
  },
  {
    "state":"PR",
    "FIPS":72003,
    "number":4736,
    "rate":15.3,
    "population":0,
    "county":"Aguada Municipio"
  },
  {
    "state":"PR",
    "FIPS":72005,
    "number":6677,
    "rate":15.1,
    "population":0,
    "county":"Aguadilla Municipio"
  },
  {
    "state":"PR",
    "FIPS":72007,
    "number":3351,
    "rate":16.2,
    "population":0,
    "county":"Aguas Buenas Municipio"
  },
  {
    "state":"PR",
    "FIPS":72009,
    "number":2690,
    "rate":14.3,
    "population":0,
    "county":"Aibonito Municipio"
  },
  {
    "state":"PR",
    "FIPS":72011,
    "number":3689,
    "rate":17.1,
    "population":0,
    "county":"A�asco Municipio"
  },
  {
    "state":"PR",
    "FIPS":72013,
    "number":10980,
    "rate":15.5,
    "population":0,
    "county":"Arecibo Municipio"
  },
  {
    "state":"PR",
    "FIPS":72015,
    "number":2521,
    "rate":18.2,
    "population":0,
    "county":"Arroyo Municipio"
  },
  {
    "state":"PR",
    "FIPS":72017,
    "number":3238,
    "rate":17.7,
    "population":0,
    "county":"Barceloneta"
  },
  {
    "state":"PR",
    "FIPS":72019,
    "number":3031,
    "rate":14.3,
    "population":0,
    "county":"Barranquitas Municipio"
  },
  {
    "state":"PR",
    "FIPS":72023,
    "number":6050,
    "rate":15.9,
    "population":0,
    "county":"Cabo Rojo Municipio"
  },
  {
    "state":"PR",
    "FIPS":72025,
    "number":14600,
    "rate":14,
    "population":0,
    "county":"Caguas Municipio"
  },
  {
    "state":"PR",
    "FIPS":72027,
    "number":4179,
    "rate":16.4,
    "population":0,
    "county":"Camuy Municipio"
  },
  {
    "state":"PR",
    "FIPS":72029,
    "number":5580,
    "rate":16.3,
    "population":0,
    "county":"Canovanas"
  },
  {
    "state":"PR",
    "FIPS":72031,
    "number":20450,
    "rate":15.8,
    "population":0,
    "county":"Carolina"
  },
  {
    "state":"PR",
    "FIPS":72033,
    "number":3149,
    "rate":15.9,
    "population":0,
    "county":"Catano"
  },
  {
    "state":"PR",
    "FIPS":72035,
    "number":4925,
    "rate":13.9,
    "population":0,
    "county":"Cayey Municipio"
  },
  {
    "state":"PR",
    "FIPS":72037,
    "number":1749,
    "rate":18,
    "population":0,
    "county":"Ceiba Municipio"
  },
  {
    "state":"PR",
    "FIPS":72021,
    "number":23160,
    "rate":15.1,
    "population":0,
    "county":"Bayam�n Municipio"
  },
  {
    "state":"PR",
    "FIPS":72039,
    "number":2229,
    "rate":16.7,
    "population":0,
    "county":"Ciales Municipio"
  },
  {
    "state":"PR",
    "FIPS":72041,
    "number":4081,
    "rate":12.9,
    "population":0,
    "county":"Cidra Municipio"
  },
  {
    "state":"PR",
    "FIPS":72043,
    "number":4669,
    "rate":15.9,
    "population":0,
    "county":"Coamo Municipio"
  },
  {
    "state":"PR",
    "FIPS":72045,
    "number":2265,
    "rate":15.1,
    "population":0,
    "county":"Comer�o Municipio"
  },
  {
    "state":"PR",
    "FIPS":72047,
    "number":4077,
    "rate":15.4,
    "population":0,
    "county":"Corozal Municipio"
  },
  {
    "state":"PR",
    "FIPS":72049,
    "number":281,
    "rate":20.4,
    "population":0,
    "county":"Culebra Municipio"
  },
  {
    "state":"PR",
    "FIPS":72051,
    "number":4062,
    "rate":14.7,
    "population":0,
    "county":"Dorado Municipio"
  },
  {
    "state":"PR",
    "FIPS":72053,
    "number":4672,
    "rate":17.9,
    "population":0,
    "county":"Fajardo Municipio"
  },
  {
    "state":"PR",
    "FIPS":72054,
    "number":1400,
    "rate":15.3,
    "population":0,
    "county":"Florida Municipio"
  },
  {
    "state":"PR",
    "FIPS":72055,
    "number":2583,
    "rate":18.8,
    "population":0,
    "county":"Gu�nica Municipio"
  },
  {
    "state":"PR",
    "FIPS":72057,
    "number":5199,
    "rate":16.3,
    "population":0,
    "county":"Guayama Municipio"
  },
  {
    "state":"",
    "FIPS":72059,
    "number":2652,
    "rate":17.4,
    "population":null,
    "county":""
  },
  {
    "state":"PR",
    "FIPS":72061,
    "number":9274,
    "rate":12.6,
    "population":0,
    "county":"Guaynabo Municipio"
  },
  {
    "state":"PR",
    "FIPS":72063,
    "number":4839,
    "rate":14.3,
    "population":0,
    "county":"Gurabo Municipio"
  },
  {
    "state":"PR",
    "FIPS":72065,
    "number":4979,
    "rate":16,
    "population":0,
    "county":"Hatillo Municipio"
  },
  {
    "state":"PR",
    "FIPS":72067,
    "number":2569,
    "rate":19.5,
    "population":0,
    "county":"Hormigueros Municipio"
  },
  {
    "state":"PR",
    "FIPS":72069,
    "number":6710,
    "rate":15.7,
    "population":0,
    "county":"Humacao Municipio"
  },
  {
    "state":"PR",
    "FIPS":72071,
    "number":5538,
    "rate":16.5,
    "population":0,
    "county":"Isabela Municipio"
  },
  {
    "state":"PR",
    "FIPS":72073,
    "number":1794,
    "rate":15.6,
    "population":0,
    "county":"Jayuya Municipio"
  },
  {
    "state":"PR",
    "FIPS":72075,
    "number":5603,
    "rate":15.7,
    "population":0,
    "county":"Juana D�az Municipio"
  },
  {
    "state":"PR",
    "FIPS":72077,
    "number":4115,
    "rate":14.2,
    "population":0,
    "county":"Juncos Municipio"
  },
  {
    "state":"PR",
    "FIPS":72079,
    "number":3589,
    "rate":18.9,
    "population":0,
    "county":"Lajas Municipio"
  },
  {
    "state":"PR",
    "FIPS":72081,
    "number":3756,
    "rate":17.1,
    "population":0,
    "county":"Lares Municipio"
  },
  {
    "state":"PR",
    "FIPS":72083,
    "number":1246,
    "rate":17.8,
    "population":0,
    "county":"Las Mar�as Municipio"
  },
  {
    "state":"PR",
    "FIPS":72085,
    "number":4296,
    "rate":15.1,
    "population":0,
    "county":"Las Piedras Municipio"
  },
  {
    "state":"PR",
    "FIPS":72087,
    "number":3504,
    "rate":16.8,
    "population":0,
    "county":"Lo�za Municipio"
  },
  {
    "state":"PR",
    "FIPS":72089,
    "number":2477,
    "rate":17.1,
    "population":0,
    "county":"Luquillo Municipio"
  },
  {
    "state":"PR",
    "FIPS":72091,
    "number":6173,
    "rate":19.6,
    "population":0,
    "county":"Manat� Municipio"
  },
  {
    "state":"PR",
    "FIPS":72093,
    "number":816,
    "rate":18,
    "population":0,
    "county":"Maricao"
  },
  {
    "state":"PR",
    "FIPS":72095,
    "number":1552,
    "rate":17.5,
    "population":0,
    "county":"Maunabo Municipio"
  },
  {
    "state":"PR",
    "FIPS":72097,
    "number":10140,
    "rate":15.6,
    "population":0,
    "county":"Mayag�ez Municipio"
  },
  {
    "state":"PR",
    "FIPS":72099,
    "number":4479,
    "rate":15.6,
    "population":0,
    "county":"Moca Municipio"
  },
  {
    "state":"PR",
    "FIPS":72101,
    "number":3628,
    "rate":15.7,
    "population":0,
    "county":"Morovis Municipio"
  },
  {
    "state":"PR",
    "FIPS":72103,
    "number":3327,
    "rate":17.2,
    "population":0,
    "county":""
  },
  {
    "state":"PR",
    "FIPS":72105,
    "number":3481,
    "rate":15.8,
    "population":0,
    "county":"Naranjito Municipio"
  },
  {
    "state":"PR",
    "FIPS":72107,
    "number":2469,
    "rate":15.1,
    "population":0,
    "county":"Orocovis Municipio"
  },
  {
    "state":"PR",
    "FIPS":72109,
    "number":2708,
    "rate":19.4,
    "population":0,
    "county":"Patillas"
  },
  {
    "state":"PR",
    "FIPS":72111,
    "number":2739,
    "rate":16.6,
    "population":0,
    "county":"Pe�uelas Municipio"
  },
  {
    "state":"PR",
    "FIPS":72113,
    "number":18320,
    "rate":15.6,
    "population":0,
    "county":"Ponce Municipio"
  },
  {
    "state":"PR",
    "FIPS":72115,
    "number":3220,
    "rate":17.1,
    "population":0,
    "county":"Quebradillas Municipio"
  },
  {
    "state":"PR",
    "FIPS":72117,
    "number":2029,
    "rate":17.7,
    "population":0,
    "county":"Rinc�n Municipio"
  },
  {
    "state":"PR",
    "FIPS":72119,
    "number":5975,
    "rate":15,
    "population":0,
    "county":"R�o Grande Municipio"
  },
  {
    "state":"PR",
    "FIPS":72121,
    "number":3234,
    "rate":17.8,
    "population":0,
    "county":"Sabana Grande Municipio"
  },
  {
    "state":"PR",
    "FIPS":72123,
    "number":4007,
    "rate":18.4,
    "population":0,
    "county":"Salinas Municipio"
  },
  {
    "state":"PR",
    "FIPS":72125,
    "number":4381,
    "rate":16.8,
    "population":0,
    "county":"San Germ�n Municipio"
  },
  {
    "state":"PR",
    "FIPS":72127,
    "number":39830,
    "rate":13.7,
    "population":0,
    "county":"San Juan Municipio"
  },
  {
    "state":"PR",
    "FIPS":72129,
    "number":4522,
    "rate":15.1,
    "population":0,
    "county":"San Lorenzo Municipio"
  },
  {
    "state":"PR",
    "FIPS":72131,
    "number":5998,
    "rate":19.5,
    "population":0,
    "county":"San Sebasti�n Municipio"
  },
  {
    "state":"PR",
    "FIPS":72133,
    "number":2161,
    "rate":13.4,
    "population":0,
    "county":"Santa Isabel"
  },
  {
    "state":"PR",
    "FIPS":72135,
    "number":6995,
    "rate":13.1,
    "population":0,
    "county":"Toa Alta"
  },
  {
    "state":"PR",
    "FIPS":72137,
    "number":9375,
    "rate":14.6,
    "population":0,
    "county":"Toa Baja Municipio"
  },
  {
    "state":"PR",
    "FIPS":72139,
    "number":6958,
    "rate":12.9,
    "population":0,
    "county":"Trujillo Alto Municipio"
  },
  {
    "state":"PR",
    "FIPS":72141,
    "number":3691,
    "rate":15.6,
    "population":0,
    "county":"Utuado Municipio"
  },
  {
    "state":"PR",
    "FIPS":72143,
    "number":4583,
    "rate":16,
    "population":0,
    "county":"Vega Alta Municipio"
  },
  {
    "state":"PR",
    "FIPS":72145,
    "number":7107,
    "rate":16.7,
    "population":0,
    "county":"Vega Baja Municipio"
  },
  {
    "state":"PR",
    "FIPS":72147,
    "number":1326,
    "rate":19.2,
    "population":0,
    "county":"Vieques Municipio"
  },
  {
    "state":"PR",
    "FIPS":72149,
    "number":2716,
    "rate":15.2,
    "population":0,
    "county":"Villalba Municipio"
  },
  {
    "state":"PR",
    "FIPS":72151,
    "number":4175,
    "rate":15.4,
    "population":0,
    "county":"Yabucoa Municipio"
  },
  {
    "state":"PR",
    "FIPS":72153,
    "number":5159,
    "rate":17.1,
    "population":0,
    "county":"Yauco Municipio"
  },
  {
    "state":"RI",
    "FIPS":44001,
    "number":3239,
    "rate":8.7,
    "population":49238,
    "county":"Bristol County"
  },
  {
    "state":"RI",
    "FIPS":44003,
    "number":12076,
    "rate":9.4,
    "population":164900,
    "county":"Kent County"
  },
  {
    "state":"RI",
    "FIPS":44005,
    "number":5162,
    "rate":8.1,
    "population":82884,
    "county":"Newport County"
  },
  {
    "state":"RI",
    "FIPS":44007,
    "number":44620,
    "rate":9.5,
    "population":629368,
    "county":"Providence County"
  },
  {
    "state":"RI",
    "FIPS":44009,
    "number":8154,
    "rate":8.5,
    "population":126247,
    "county":"Washington County"
  },
  {
    "state":"SC",
    "FIPS":45001,
    "number":2669,
    "rate":14.2,
    "population":25065,
    "county":"Abbeville County"
  },
  {
    "state":"SC",
    "FIPS":45003,
    "number":14827,
    "rate":12.1,
    "population":163426,
    "county":"Aiken County"
  },
  {
    "state":"SC",
    "FIPS":45005,
    "number":1325,
    "rate":17.2,
    "population":10004,
    "county":"Allendale County"
  },
  {
    "state":"SC",
    "FIPS":45007,
    "number":17650,
    "rate":12.6,
    "population":189365,
    "county":"Anderson County"
  },
  {
    "state":"SC",
    "FIPS":45009,
    "number":2092,
    "rate":17.9,
    "population":15790,
    "county":"Bamberg County"
  },
  {
    "state":"SC",
    "FIPS":45011,
    "number":2501,
    "rate":15.5,
    "population":22294,
    "county":"Barnwell County"
  },
  {
    "state":"SC",
    "FIPS":45013,
    "number":12251,
    "rate":9.5,
    "population":167782,
    "county":"Beaufort County"
  },
  {
    "state":"SC",
    "FIPS":45015,
    "number":18513,
    "rate":13.5,
    "population":189493,
    "county":"Berkeley County"
  },
  {
    "state":"SC",
    "FIPS":45017,
    "number":2050,
    "rate":17.8,
    "population":14922,
    "county":"Calhoun County"
  },
  {
    "state":"SC",
    "FIPS":45019,
    "number":31090,
    "rate":11.1,
    "population":365472,
    "county":"Charleston County"
  },
  {
    "state":"SC",
    "FIPS":45021,
    "number":5740,
    "rate":14.1,
    "population":55671,
    "county":"Cherokee County"
  },
  {
    "state":"SC",
    "FIPS":45023,
    "number":3434,
    "rate":14.1,
    "population":32645,
    "county":"Chester County"
  },
  {
    "state":"SC",
    "FIPS":45025,
    "number":5274,
    "rate":15.4,
    "population":46100,
    "county":"Chesterfield County"
  },
  {
    "state":"SC",
    "FIPS":45027,
    "number":4315,
    "rate":16.5,
    "population":34269,
    "county":"Clarendon County"
  },
  {
    "state":"SC",
    "FIPS":45029,
    "number":5102,
    "rate":18,
    "population":38230,
    "county":"Colleton County"
  },
  {
    "state":"SC",
    "FIPS":45031,
    "number":7305,
    "rate":14.5,
    "population":68165,
    "county":"Darlington County"
  },
  {
    "state":"SC",
    "FIPS":45033,
    "number":3584,
    "rate":16,
    "population":31447,
    "county":"Dillon County"
  },
  {
    "state":"SC",
    "FIPS":45035,
    "number":10070,
    "rate":9.9,
    "population":142470,
    "county":"Dorchester County"
  },
  {
    "state":"SC",
    "FIPS":45037,
    "number":2815,
    "rate":13.8,
    "population":26328,
    "county":"Edgefield County"
  },
  {
    "state":"SC",
    "FIPS":45039,
    "number":3015,
    "rate":17,
    "population":23371,
    "county":"Fairfield County"
  },
  {
    "state":"SC",
    "FIPS":45041,
    "number":14884,
    "rate":14.7,
    "population":138060,
    "county":"Florence County"
  },
  {
    "state":"SC",
    "FIPS":45043,
    "number":6803,
    "rate":14.6,
    "population":60284,
    "county":"Georgetown County"
  },
  {
    "state":"SC",
    "FIPS":45045,
    "number":36892,
    "rate":10.8,
    "population":466758,
    "county":"Greenville County"
  },
  {
    "state":"SC",
    "FIPS":45047,
    "number":6355,
    "rate":12.4,
    "population":69833,
    "county":"Greenwood County"
  },
  {
    "state":"SC",
    "FIPS":45049,
    "number":2634,
    "rate":17,
    "population":20719,
    "county":"Hampton County"
  },
  {
    "state":"SC",
    "FIPS":45051,
    "number":23754,
    "rate":10.8,
    "population":281990,
    "county":"Horry County"
  },
  {
    "state":"SC",
    "FIPS":45053,
    "number":2755,
    "rate":14.3,
    "population":25973,
    "county":"Jasper County"
  },
  {
    "state":"SC",
    "FIPS":45055,
    "number":5853,
    "rate":12.8,
    "population":62232,
    "county":"Kershaw County"
  },
  {
    "state":"SC",
    "FIPS":45057,
    "number":8051,
    "rate":13.5,
    "population":79193,
    "county":"Lancaster County"
  },
  {
    "state":"SC",
    "FIPS":45059,
    "number":7325,
    "rate":14.9,
    "population":66258,
    "county":"Laurens County"
  },
  {
    "state":"SC",
    "FIPS":45061,
    "number":2247,
    "rate":15.8,
    "population":18669,
    "county":"Lee County"
  },
  {
    "state":"SC",
    "FIPS":45063,
    "number":20981,
    "rate":10.5,
    "population":270114,
    "county":"Lexington County"
  },
  {
    "state":"SC",
    "FIPS":45067,
    "number":3996,
    "rate":16.7,
    "population":32391,
    "county":"Marion County"
  },
  {
    "state":"SC",
    "FIPS":45069,
    "number":3315,
    "rate":15.4,
    "population":28157,
    "county":"Marlboro County"
  },
  {
    "state":"SC",
    "FIPS":45065,
    "number":1384,
    "rate":16.4,
    "population":9949,
    "county":"Mccormick County"
  },
  {
    "state":"SC",
    "FIPS":45071,
    "number":4121,
    "rate":14.7,
    "population":37563,
    "county":"Newberry County"
  },
  {
    "state":"SC",
    "FIPS":45073,
    "number":7776,
    "rate":13.5,
    "population":74583,
    "county":"Oconee County"
  },
  {
    "state":"SC",
    "FIPS":45075,
    "number":10819,
    "rate":16,
    "population":91429,
    "county":"Orangeburg County"
  },
  {
    "state":"SC",
    "FIPS":45077,
    "number":10070,
    "rate":11.3,
    "population":119656,
    "county":"Pickens County"
  },
  {
    "state":"SC",
    "FIPS":45079,
    "number":30862,
    "rate":10.7,
    "population":393677,
    "county":"Richland County"
  },
  {
    "state":"SC",
    "FIPS":45081,
    "number":2027,
    "rate":13.5,
    "population":19963,
    "county":"Saluda County"
  },
  {
    "state":"SC",
    "FIPS":45083,
    "number":28068,
    "rate":13.3,
    "population":288421,
    "county":"Spartanburg County"
  },
  {
    "state":"SC",
    "FIPS":45085,
    "number":11203,
    "rate":14.3,
    "population":108060,
    "county":"Sumter County"
  },
  {
    "state":"SC",
    "FIPS":45087,
    "number":3237,
    "rate":15.1,
    "population":28222,
    "county":"Union County"
  },
  {
    "state":"SC",
    "FIPS":45089,
    "number":4485,
    "rate":17.8,
    "population":33592,
    "county":"Williamsburg County"
  },
  {
    "state":"SC",
    "FIPS":45091,
    "number":17924,
    "rate":10.6,
    "population":234566,
    "county":"York County"
  },
  {
    "state":"SD",
    "FIPS":46003,
    "number":181,
    "rate":9.2,
    "population":2751,
    "county":"Aurora County"
  },
  {
    "state":"SD",
    "FIPS":46005,
    "number":1247,
    "rate":9.6,
    "population":18000,
    "county":"Beadle County"
  },
  {
    "state":"SD",
    "FIPS":46007,
    "number":327,
    "rate":15.1,
    "population":3438,
    "county":"Bennett County"
  },
  {
    "state":"SD",
    "FIPS":46009,
    "number":501,
    "rate":9.1,
    "population":7038,
    "county":"Bon Homme County"
  },
  {
    "state":"SD",
    "FIPS":46011,
    "number":1466,
    "rate":6.2,
    "population":32686,
    "county":"Brookings County"
  },
  {
    "state":"SD",
    "FIPS":46013,
    "number":2400,
    "rate":8.7,
    "population":37514,
    "county":"Brown County"
  },
  {
    "state":"SD",
    "FIPS":46015,
    "number":410,
    "rate":10.8,
    "population":5304,
    "county":"Brule County"
  },
  {
    "state":"SD",
    "FIPS":46017,
    "number":208,
    "rate":17.8,
    "population":2026,
    "county":"Buffalo County"
  },
  {
    "state":"SD",
    "FIPS":46019,
    "number":633,
    "rate":8.4,
    "population":10238,
    "county":"Butte County"
  },
  {
    "state":"SD",
    "FIPS":46021,
    "number":118,
    "rate":10.5,
    "population":1389,
    "county":"Campbell County"
  },
  {
    "state":"SD",
    "FIPS":46023,
    "number":766,
    "rate":12.3,
    "population":9210,
    "county":"Charles Mix County"
  },
  {
    "state":"SD",
    "FIPS":46025,
    "number":258,
    "rate":9.6,
    "population":3583,
    "county":"Clark County"
  },
  {
    "state":"SD",
    "FIPS":46027,
    "number":810,
    "rate":7.8,
    "population":14091,
    "county":"Clay County"
  },
  {
    "state":"SD",
    "FIPS":46029,
    "number":1694,
    "rate":8.4,
    "population":27581,
    "county":"Codington County"
  },
  {
    "state":"SD",
    "FIPS":46031,
    "number":398,
    "rate":15.4,
    "population":4082,
    "county":"Corson County"
  },
  {
    "state":"SD",
    "FIPS":46033,
    "number":723,
    "rate":10.8,
    "population":8315,
    "county":"Custer County"
  },
  {
    "state":"SD",
    "FIPS":46035,
    "number":1381,
    "rate":9.4,
    "population":19798,
    "county":"Davison County"
  },
  {
    "state":"SD",
    "FIPS":46037,
    "number":504,
    "rate":11.7,
    "population":5636,
    "county":"Day County"
  },
  {
    "state":"SD",
    "FIPS":46039,
    "number":317,
    "rate":9.7,
    "population":4368,
    "county":"Deuel County"
  },
  {
    "state":"SD",
    "FIPS":46041,
    "number":534,
    "rate":15.4,
    "population":5544,
    "county":"Dewey County"
  },
  {
    "state":"SD",
    "FIPS":46043,
    "number":247,
    "rate":11,
    "population":2972,
    "county":"Douglas County"
  },
  {
    "state":"SD",
    "FIPS":46045,
    "number":265,
    "rate":8.8,
    "population":4028,
    "county":"Edmunds County"
  },
  {
    "state":"SD",
    "FIPS":46047,
    "number":627,
    "rate":11.2,
    "population":6999,
    "county":"Fall River County"
  },
  {
    "state":"SD",
    "FIPS":46049,
    "number":185,
    "rate":10.4,
    "population":2379,
    "county":"Faulk County"
  },
  {
    "state":"SD",
    "FIPS":46051,
    "number":504,
    "rate":9.2,
    "population":7268,
    "county":"Grant County"
  },
  {
    "state":"SD",
    "FIPS":46053,
    "number":340,
    "rate":10.6,
    "population":4248,
    "county":"Gregory County"
  },
  {
    "state":"SD",
    "FIPS":46055,
    "number":148,
    "rate":10.2,
    "population":1909,
    "county":"Haakon County"
  },
  {
    "state":"SD",
    "FIPS":46057,
    "number":372,
    "rate":9.3,
    "population":5941,
    "county":"Hamlin County"
  },
  {
    "state":"SD",
    "FIPS":46059,
    "number":295,
    "rate":11.4,
    "population":3385,
    "county":"Hand County"
  },
  {
    "state":"SD",
    "FIPS":46061,
    "number":190,
    "rate":8.6,
    "population":3394,
    "county":"Hanson County"
  },
  {
    "state":"SD",
    "FIPS":46063,
    "number":87,
    "rate":8.7,
    "population":1315,
    "county":"Harding County"
  },
  {
    "state":"SD",
    "FIPS":46065,
    "number":1221,
    "rate":9.4,
    "population":17441,
    "county":"Hughes County"
  },
  {
    "state":"SD",
    "FIPS":46067,
    "number":574,
    "rate":10.7,
    "population":7206,
    "county":"Hutchinson County"
  },
  {
    "state":"SD",
    "FIPS":46069,
    "number":120,
    "rate":11,
    "population":1431,
    "county":"Hyde County"
  },
  {
    "state":"SD",
    "FIPS":46071,
    "number":246,
    "rate":12.1,
    "population":3177,
    "county":"Jackson County"
  },
  {
    "state":"SD",
    "FIPS":46073,
    "number":159,
    "rate":10.2,
    "population":2040,
    "county":"Jerauld County"
  },
  {
    "state":"SD",
    "FIPS":46075,
    "number":82,
    "rate":10.6,
    "population":1010,
    "county":"Jones County"
  },
  {
    "state":"SD",
    "FIPS":46077,
    "number":395,
    "rate":10.1,
    "population":5240,
    "county":"Kingsbury County"
  },
  {
    "state":"SD",
    "FIPS":46079,
    "number":788,
    "rate":8.8,
    "population":11832,
    "county":"Lake County"
  },
  {
    "state":"SD",
    "FIPS":46081,
    "number":1456,
    "rate":7.8,
    "population":24360,
    "county":"Lawrence County"
  },
  {
    "state":"SD",
    "FIPS":46083,
    "number":2200,
    "rate":6.6,
    "population":48302,
    "county":"Lincoln County"
  },
  {
    "state":"SD",
    "FIPS":46085,
    "number":308,
    "rate":11.8,
    "population":3793,
    "county":"Lyman County"
  },
  {
    "state":"SD",
    "FIPS":46091,
    "number":351,
    "rate":9.9,
    "population":4656,
    "county":"Marshall County"
  },
  {
    "state":"SD",
    "FIPS":46087,
    "number":376,
    "rate":9.4,
    "population":5603,
    "county":"McCook County"
  },
  {
    "state":"SD",
    "FIPS":46089,
    "number":226,
    "rate":12.2,
    "population":2429,
    "county":"McPherson County"
  },
  {
    "state":"SD",
    "FIPS":46093,
    "number":1562,
    "rate":8.2,
    "population":25924,
    "county":"Meade County"
  },
  {
    "state":"SD",
    "FIPS":46095,
    "number":177,
    "rate":12.7,
    "population":2092,
    "county":"Mellette County"
  },
  {
    "state":"SD",
    "FIPS":46097,
    "number":177,
    "rate":10.3,
    "population":2323,
    "county":"Miner County"
  },
  {
    "state":"SD",
    "FIPS":46099,
    "number":11055,
    "rate":8.7,
    "population":175511,
    "county":"Minnehaha County"
  },
  {
    "state":"SD",
    "FIPS":46101,
    "number":479,
    "rate":10.3,
    "population":6447,
    "county":"Moody County"
  },
  {
    "state":"SD",
    "FIPS":46103,
    "number":6671,
    "rate":8.7,
    "population":104552,
    "county":"Pennington County"
  },
  {
    "state":"SD",
    "FIPS":46105,
    "number":230,
    "rate":9.9,
    "population":3020,
    "county":"Perkins County"
  },
  {
    "state":"SD",
    "FIPS":46107,
    "number":203,
    "rate":11,
    "population":2349,
    "county":"Potter County"
  },
  {
    "state":"SD",
    "FIPS":46109,
    "number":895,
    "rate":12.7,
    "population":10348,
    "county":"Roberts County"
  },
  {
    "state":"SD",
    "FIPS":46111,
    "number":180,
    "rate":10,
    "population":2325,
    "county":"Sanborn County"
  },
  {
    "state":"SD",
    "FIPS":46113,
    "number":1433,
    "rate":17.6,
    "population":14076,
    "county":"Shannon County"
  },
  {
    "state":"SD",
    "FIPS":46115,
    "number":477,
    "rate":9.8,
    "population":6652,
    "county":"Spink County"
  },
  {
    "state":"SD",
    "FIPS":46117,
    "number":236,
    "rate":10.7,
    "population":2977,
    "county":"Stanley County"
  },
  {
    "state":"SD",
    "FIPS":46119,
    "number":109,
    "rate":10,
    "population":1445,
    "county":"Sully County"
  },
  {
    "state":"SD",
    "FIPS":46121,
    "number":983,
    "rate":17.5,
    "population":9935,
    "county":"Todd County"
  },
  {
    "state":"SD",
    "FIPS":46123,
    "number":452,
    "rate":11,
    "population":5485,
    "county":"Tripp County"
  },
  {
    "state":"SD",
    "FIPS":46125,
    "number":564,
    "rate":9.2,
    "population":8332,
    "county":"Turner County"
  },
  {
    "state":"SD",
    "FIPS":46127,
    "number":1003,
    "rate":9.5,
    "population":14841,
    "county":"Union County"
  },
  {
    "state":"SD",
    "FIPS":46129,
    "number":475,
    "rate":11.4,
    "population":5460,
    "county":"Walworth County"
  },
  {
    "state":"SD",
    "FIPS":46135,
    "number":1375,
    "rate":8,
    "population":22591,
    "county":"Yankton County"
  },
  {
    "state":"SD",
    "FIPS":46137,
    "number":272,
    "rate":16.1,
    "population":2869,
    "county":"Ziebach County"
  },
  {
    "state":"TN",
    "FIPS":47001,
    "number":7926,
    "rate":13.7,
    "population":75349,
    "county":"Anderson County"
  },
  {
    "state":"TN",
    "FIPS":47003,
    "number":3798,
    "rate":11.7,
    "population":45400,
    "county":"Bedford County"
  },
  {
    "state":"TN",
    "FIPS":47005,
    "number":1870,
    "rate":14.7,
    "population":16369,
    "county":"Benton County"
  },
  {
    "state":"TN",
    "FIPS":47007,
    "number":1203,
    "rate":12.1,
    "population":12781,
    "county":"Bledsoe County"
  },
  {
    "state":"TN",
    "FIPS":47009,
    "number":12287,
    "rate":13,
    "population":124016,
    "county":"Blount County"
  },
  {
    "state":"TN",
    "FIPS":47011,
    "number":10638,
    "rate":14.1,
    "population":101117,
    "county":"Bradley County"
  },
  {
    "state":"TN",
    "FIPS":47013,
    "number":4104,
    "rate":13.2,
    "population":40429,
    "county":"Campbell County"
  },
  {
    "state":"TN",
    "FIPS":47015,
    "number":1295,
    "rate":12.2,
    "population":13842,
    "county":"Cannon County"
  },
  {
    "state":"TN",
    "FIPS":47017,
    "number":2935,
    "rate":13.7,
    "population":28623,
    "county":"Carroll County"
  },
  {
    "state":"TN",
    "FIPS":47019,
    "number":6670,
    "rate":14.9,
    "population":57376,
    "county":"Carter County"
  },
  {
    "state":"TN",
    "FIPS":47021,
    "number":3334,
    "rate":11.6,
    "population":39275,
    "county":"Cheatham County"
  },
  {
    "state":"TN",
    "FIPS":47023,
    "number":1848,
    "rate":14.8,
    "population":17225,
    "county":"Chester County"
  },
  {
    "state":"TN",
    "FIPS":47025,
    "number":3509,
    "rate":14.3,
    "population":31716,
    "county":"Claiborne County"
  },
  {
    "state":"TN",
    "FIPS":47027,
    "number":835,
    "rate":13.7,
    "population":7800,
    "county":"Clay County"
  },
  {
    "state":"TN",
    "FIPS":47029,
    "number":4167,
    "rate":15.2,
    "population":35488,
    "county":"Cocke County"
  },
  {
    "state":"TN",
    "FIPS":47031,
    "number":5259,
    "rate":13.4,
    "population":53137,
    "county":"Coffee County"
  },
  {
    "state":"TN",
    "FIPS":47033,
    "number":1510,
    "rate":14,
    "population":14602,
    "county":"Crockett County"
  },
  {
    "state":"TN",
    "FIPS":47035,
    "number":7729,
    "rate":17,
    "population":57037,
    "county":"Cumberland County"
  },
  {
    "state":"TN",
    "FIPS":47037,
    "number":50829,
    "rate":10.4,
    "population":649142,
    "county":"Davidson County"
  },
  {
    "state":"TN",
    "FIPS":47039,
    "number":1399,
    "rate":15.6,
    "population":11648,
    "county":"Decatur County"
  },
  {
    "state":"TN",
    "FIPS":47041,
    "number":2063,
    "rate":14.4,
    "population":18920,
    "county":"De Kalb County"
  },
  {
    "state":"TN",
    "FIPS":47043,
    "number":4948,
    "rate":13.4,
    "population":50167,
    "county":"Dickson County"
  },
  {
    "state":"TN",
    "FIPS":47045,
    "number":3806,
    "rate":13.6,
    "population":38223,
    "county":"Dyer County"
  },
  {
    "state":"TN",
    "FIPS":47047,
    "number":4679,
    "rate":15.9,
    "population":38609,
    "county":"Fayette County"
  },
  {
    "state":"TN",
    "FIPS":47049,
    "number":1825,
    "rate":13.5,
    "population":17911,
    "county":"Fentress County"
  },
  {
    "state":"TN",
    "FIPS":47051,
    "number":3735,
    "rate":12.1,
    "population":40785,
    "county":"Franklin County"
  },
  {
    "state":"TN",
    "FIPS":47053,
    "number":4409,
    "rate":12.1,
    "population":49670,
    "county":"Gibson County"
  },
  {
    "state":"TN",
    "FIPS":47055,
    "number":2855,
    "rate":13,
    "population":28948,
    "county":"Giles County"
  },
  {
    "state":"TN",
    "FIPS":47057,
    "number":2218,
    "rate":12.9,
    "population":22640,
    "county":"Grainger County"
  },
  {
    "state":"TN",
    "FIPS":47059,
    "number":7152,
    "rate":13.6,
    "population":68634,
    "county":"Greene County"
  },
  {
    "state":"TN",
    "FIPS":47061,
    "number":1514,
    "rate":14.7,
    "population":13630,
    "county":"Grundy County"
  },
  {
    "state":"TN",
    "FIPS":47063,
    "number":6277,
    "rate":13.4,
    "population":62733,
    "county":"Hamblen County"
  },
  {
    "state":"TN",
    "FIPS":47065,
    "number":33286,
    "rate":12.7,
    "population":345657,
    "county":"Hamilton County"
  },
  {
    "state":"TN",
    "FIPS":47067,
    "number":704,
    "rate":13.6,
    "population":6679,
    "county":"Hancock County"
  },
  {
    "state":"TN",
    "FIPS":47069,
    "number":2985,
    "rate":14.5,
    "population":26532,
    "county":"Hardeman County"
  },
  {
    "state":"TN",
    "FIPS":47071,
    "number":2934,
    "rate":14.7,
    "population":26025,
    "county":"Hardin County"
  },
  {
    "state":"TN",
    "FIPS":47073,
    "number":5820,
    "rate":13.5,
    "population":56601,
    "county":"Hawkins County"
  },
  {
    "state":"TN",
    "FIPS":47075,
    "number":2287,
    "rate":17.1,
    "population":18243,
    "county":"Haywood County"
  },
  {
    "state":"TN",
    "FIPS":47077,
    "number":3270,
    "rate":15.8,
    "population":28019,
    "county":"Henderson County"
  },
  {
    "state":"TN",
    "FIPS":47079,
    "number":3761,
    "rate":15.2,
    "population":32334,
    "county":"Henry County"
  },
  {
    "state":"TN",
    "FIPS":47081,
    "number":2410,
    "rate":13.1,
    "population":24152,
    "county":"Hickman County"
  },
  {
    "state":"TN",
    "FIPS":47083,
    "number":900,
    "rate":14.3,
    "population":8423,
    "county":"Houston County"
  },
  {
    "state":"TN",
    "FIPS":47085,
    "number":1920,
    "rate":13.9,
    "population":18280,
    "county":"Humphreys County"
  },
  {
    "state":"TN",
    "FIPS":47087,
    "number":1095,
    "rate":12.2,
    "population":11529,
    "county":"Jackson County"
  },
  {
    "state":"TN",
    "FIPS":47089,
    "number":4526,
    "rate":11.5,
    "population":52309,
    "county":"Jefferson County"
  },
  {
    "state":"TN",
    "FIPS":47091,
    "number":2168,
    "rate":14.9,
    "population":18119,
    "county":"Johnson County"
  },
  {
    "state":"TN",
    "FIPS":47093,
    "number":36387,
    "rate":11,
    "population":441136,
    "county":"Knox County"
  },
  {
    "state":"TN",
    "FIPS":47095,
    "number":773,
    "rate":12.3,
    "population":7703,
    "county":"Lake County"
  },
  {
    "state":"TN",
    "FIPS":47097,
    "number":2929,
    "rate":14.2,
    "population":27681,
    "county":"Lauderdale County"
  },
  {
    "state":"TN",
    "FIPS":47099,
    "number":4140,
    "rate":13.5,
    "population":42129,
    "county":"Lawrence County"
  },
  {
    "state":"TN",
    "FIPS":47101,
    "number":1187,
    "rate":13.3,
    "population":11899,
    "county":"Lewis County"
  },
  {
    "state":"TN",
    "FIPS":47103,
    "number":3207,
    "rate":12.7,
    "population":33436,
    "county":"Lincoln County"
  },
  {
    "state":"TN",
    "FIPS":47105,
    "number":5315,
    "rate":13.7,
    "population":49743,
    "county":"Loudon County"
  },
  {
    "state":"TN",
    "FIPS":47111,
    "number":2014,
    "rate":12.3,
    "population":22512,
    "county":"Macon County"
  },
  {
    "state":"TN",
    "FIPS":47113,
    "number":10386,
    "rate":14.5,
    "population":98551,
    "county":"Madison County"
  },
  {
    "state":"TN",
    "FIPS":47115,
    "number":3370,
    "rate":15.6,
    "population":28227,
    "county":"Marion County"
  },
  {
    "state":"TN",
    "FIPS":47117,
    "number":3330,
    "rate":14.6,
    "population":30934,
    "county":"Marshall County"
  },
  {
    "state":"TN",
    "FIPS":47119,
    "number":7206,
    "rate":11.8,
    "population":81944,
    "county":"Maury County"
  },
  {
    "state":"TN",
    "FIPS":47107,
    "number":5559,
    "rate":14,
    "population":52452,
    "county":"McMinn County"
  },
  {
    "state":"TN",
    "FIPS":47109,
    "number":3155,
    "rate":16.1,
    "population":26171,
    "county":"McNairy County"
  },
  {
    "state":"TN",
    "FIPS":47121,
    "number":1265,
    "rate":14,
    "population":11678,
    "county":"Meigs County"
  },
  {
    "state":"TN",
    "FIPS":47123,
    "number":4533,
    "rate":13.2,
    "population":45108,
    "county":"Monroe County"
  },
  {
    "state":"TN",
    "FIPS":47125,
    "number":11748,
    "rate":9.1,
    "population":185360,
    "county":"Montgomery County"
  },
  {
    "state":"TN",
    "FIPS":47127,
    "number":650,
    "rate":13.4,
    "population":6348,
    "county":"Moore County"
  },
  {
    "state":"TN",
    "FIPS":47129,
    "number":2127,
    "rate":12.4,
    "population":21945,
    "county":"Morgan County"
  },
  {
    "state":"TN",
    "FIPS":47131,
    "number":3620,
    "rate":15.3,
    "population":31351,
    "county":"Obion County"
  },
  {
    "state":"TN",
    "FIPS":47133,
    "number":2526,
    "rate":15.2,
    "population":22211,
    "county":"Overton County"
  },
  {
    "state":"TN",
    "FIPS":47135,
    "number":937,
    "rate":15.9,
    "population":7830,
    "county":"Perry County"
  },
  {
    "state":"TN",
    "FIPS":47137,
    "number":597,
    "rate":14.8,
    "population":5088,
    "county":"Pickett County"
  },
  {
    "state":"TN",
    "FIPS":47139,
    "number":1630,
    "rate":12.9,
    "population":16613,
    "county":"Polk County"
  },
  {
    "state":"TN",
    "FIPS":47141,
    "number":7441,
    "rate":13.6,
    "population":73071,
    "county":"Putnam County"
  },
  {
    "state":"TN",
    "FIPS":47143,
    "number":3463,
    "rate":14.5,
    "population":32307,
    "county":"Rhea County"
  },
  {
    "state":"TN",
    "FIPS":47145,
    "number":4864,
    "rate":11.7,
    "population":53426,
    "county":"Roane County"
  },
  {
    "state":"TN",
    "FIPS":47147,
    "number":5950,
    "rate":12.3,
    "population":66719,
    "county":"Robertson County"
  },
  {
    "state":"TN",
    "FIPS":47149,
    "number":18672,
    "rate":9.6,
    "population":274208,
    "county":"Rutherford County"
  },
  {
    "state":"TN",
    "FIPS":47151,
    "number":2189,
    "rate":13.5,
    "population":22166,
    "county":"Scott County"
  },
  {
    "state":"TN",
    "FIPS":47153,
    "number":1449,
    "rate":13.3,
    "population":14417,
    "county":"Sequatchie County"
  },
  {
    "state":"TN",
    "FIPS":47155,
    "number":8757,
    "rate":12.4,
    "population":92532,
    "county":"Sevier County"
  },
  {
    "state":"TN",
    "FIPS":47157,
    "number":83619,
    "rate":12.5,
    "population":939942,
    "county":"Shelby County"
  },
  {
    "state":"TN",
    "FIPS":47159,
    "number":1677,
    "rate":11.9,
    "population":19120,
    "county":"Smith County"
  },
  {
    "state":"TN",
    "FIPS":47161,
    "number":1511,
    "rate":14.9,
    "population":13336,
    "county":"Stewart County"
  },
  {
    "state":"TN",
    "FIPS":47163,
    "number":17739,
    "rate":14.6,
    "population":156673,
    "county":"Sullivan County"
  },
  {
    "state":"TN",
    "FIPS":47165,
    "number":13410,
    "rate":11.1,
    "population":166156,
    "county":"Sumner County"
  },
  {
    "state":"TN",
    "FIPS":47167,
    "number":5272,
    "rate":12.1,
    "population":61576,
    "county":"Tipton County"
  },
  {
    "state":"TN",
    "FIPS":47169,
    "number":733,
    "rate":12.7,
    "population":7791,
    "county":"Trousdale County"
  },
  {
    "state":"TN",
    "FIPS":47171,
    "number":1964,
    "rate":13.7,
    "population":18251,
    "county":"Unicoi County"
  },
  {
    "state":"TN",
    "FIPS":47173,
    "number":1923,
    "rate":13.5,
    "population":19133,
    "county":"Union County"
  },
  {
    "state":"TN",
    "FIPS":47175,
    "number":610,
    "rate":13.9,
    "population":5620,
    "county":"Van Buren County"
  },
  {
    "state":"TN",
    "FIPS":47177,
    "number":4242,
    "rate":14.4,
    "population":39755,
    "county":"Warren County"
  },
  {
    "state":"TN",
    "FIPS":47179,
    "number":10836,
    "rate":11.3,
    "population":124897,
    "county":"Washington County"
  },
  {
    "state":"TN",
    "FIPS":47181,
    "number":1607,
    "rate":11.9,
    "population":16990,
    "county":"Wayne County"
  },
  {
    "state":"TN",
    "FIPS":47183,
    "number":3923,
    "rate":15,
    "population":34712,
    "county":"Weakley County"
  },
  {
    "state":"TN",
    "FIPS":47185,
    "number":2509,
    "rate":12.7,
    "population":26060,
    "county":"White County"
  },
  {
    "state":"TN",
    "FIPS":47187,
    "number":12468,
    "rate":9.4,
    "population":193037,
    "county":"Williamson County"
  },
  {
    "state":"TN",
    "FIPS":47189,
    "number":10442,
    "rate":12,
    "population":119088,
    "county":"Wilson County"
  },
  {
    "state":"TX",
    "FIPS":48001,
    "number":5397,
    "rate":11.8,
    "population":58026,
    "county":"Anderson County"
  },
  {
    "state":"TX",
    "FIPS":48003,
    "number":1078,
    "rate":9.9,
    "population":16119,
    "county":"Andrews County"
  },
  {
    "state":"TX",
    "FIPS":48005,
    "number":7107,
    "rate":11.4,
    "population":87585,
    "county":"Angelina County"
  },
  {
    "state":"TX",
    "FIPS":48007,
    "number":2273,
    "rate":12,
    "population":23707,
    "county":"Aransas County"
  },
  {
    "state":"TX",
    "FIPS":48009,
    "number":722,
    "rate":11.1,
    "population":8772,
    "county":"Archer County"
  },
  {
    "state":"TX",
    "FIPS":48011,
    "number":165,
    "rate":11.2,
    "population":1948,
    "county":"Armstrong County"
  },
  {
    "state":"TX",
    "FIPS":48013,
    "number":3205,
    "rate":10,
    "population":46436,
    "county":"Atascosa County"
  },
  {
    "state":"TX",
    "FIPS":48015,
    "number":2225,
    "rate":10.6,
    "population":28622,
    "county":"Austin County"
  },
  {
    "state":"TX",
    "FIPS":48017,
    "number":456,
    "rate":9.7,
    "population":7101,
    "county":"Bailey County"
  },
  {
    "state":"TX",
    "FIPS":48019,
    "number":2068,
    "rate":12.6,
    "population":20608,
    "county":"Bandera County"
  },
  {
    "state":"TX",
    "FIPS":48021,
    "number":5326,
    "rate":9.9,
    "population":74886,
    "county":"Bastrop County"
  },
  {
    "state":"TX",
    "FIPS":48023,
    "number":330,
    "rate":11.8,
    "population":3615,
    "county":"Baylor County"
  },
  {
    "state":"TX",
    "FIPS":48025,
    "number":2181,
    "rate":8.9,
    "population":32451,
    "county":"Bee County"
  },
  {
    "state":"TX",
    "FIPS":48027,
    "number":20371,
    "rate":9.1,
    "population":323147,
    "county":"Bell County"
  },
  {
    "state":"TX",
    "FIPS":48029,
    "number":112429,
    "rate":8.9,
    "population":1788858,
    "county":"Bexar County"
  },
  {
    "state":"TX",
    "FIPS":48031,
    "number":939,
    "rate":11.4,
    "population":10616,
    "county":"Blanco County"
  },
  {
    "state":"TX",
    "FIPS":48033,
    "number":57,
    "rate":12,
    "population":613,
    "county":"Borden County"
  },
  {
    "state":"TX",
    "FIPS":48035,
    "number":1463,
    "rate":10.7,
    "population":18111,
    "county":"Bosque County"
  },
  {
    "state":"TX",
    "FIPS":48037,
    "number":8539,
    "rate":12.5,
    "population":93088,
    "county":"Bowie County"
  },
  {
    "state":"TX",
    "FIPS":48039,
    "number":21243,
    "rate":9.3,
    "population":324697,
    "county":"Brazoria County"
  },
  {
    "state":"TX",
    "FIPS":48041,
    "number":10226,
    "rate":7,
    "population":200567,
    "county":"Brazos County"
  },
  {
    "state":"TX",
    "FIPS":48043,
    "number":672,
    "rate":9.4,
    "population":9254,
    "county":"Brewster County"
  },
  {
    "state":"TX",
    "FIPS":48047,
    "number":539,
    "rate":10.9,
    "population":7168,
    "county":"Brooks County"
  },
  {
    "state":"TX",
    "FIPS":48045,
    "number":144,
    "rate":12.4,
    "population":1560,
    "county":"Briscoe County"
  },
  {
    "state":"TX",
    "FIPS":48049,
    "number":2824,
    "rate":10.1,
    "population":37857,
    "county":"Brown County"
  },
  {
    "state":"TX",
    "FIPS":48051,
    "number":1647,
    "rate":12.8,
    "population":17316,
    "county":"Burleson County"
  },
  {
    "state":"TX",
    "FIPS":48053,
    "number":3582,
    "rate":10.9,
    "population":44078,
    "county":"Burnet County"
  },
  {
    "state":"TX",
    "FIPS":48055,
    "number":2681,
    "rate":9.7,
    "population":38711,
    "county":"Caldwell County"
  },
  {
    "state":"TX",
    "FIPS":48057,
    "number":1774,
    "rate":11.5,
    "population":21567,
    "county":"Calhoun County"
  },
  {
    "state":"TX",
    "FIPS":48059,
    "number":1107,
    "rate":10.9,
    "population":13515,
    "county":"Callahan County"
  },
  {
    "state":"TX",
    "FIPS":48061,
    "number":24201,
    "rate":9,
    "population":416048,
    "county":"Cameron County"
  },
  {
    "state":"TX",
    "FIPS":48063,
    "number":1101,
    "rate":12.4,
    "population":12460,
    "county":"Camp County"
  },
  {
    "state":"TX",
    "FIPS":48065,
    "number":503,
    "rate":11.3,
    "population":6109,
    "county":"Carson County"
  },
  {
    "state":"TX",
    "FIPS":48067,
    "number":2936,
    "rate":13,
    "population":30187,
    "county":"Cass County"
  },
  {
    "state":"TX",
    "FIPS":48069,
    "number":543,
    "rate":10.1,
    "population":8179,
    "county":"Castro County"
  },
  {
    "state":"TX",
    "FIPS":48071,
    "number":2537,
    "rate":10.1,
    "population":36388,
    "county":"Chambers County"
  },
  {
    "state":"TX",
    "FIPS":48073,
    "number":3802,
    "rate":10.4,
    "population":51152,
    "county":"Cherokee County"
  },
  {
    "state":"TX",
    "FIPS":48075,
    "number":505,
    "rate":9.3,
    "population":7096,
    "county":"Childress County"
  },
  {
    "state":"TX",
    "FIPS":48077,
    "number":948,
    "rate":11.9,
    "population":10512,
    "county":"Clay County"
  },
  {
    "state":"TX",
    "FIPS":48079,
    "number":231,
    "rate":11.2,
    "population":3017,
    "county":"Cochran County"
  },
  {
    "state":"TX",
    "FIPS":48081,
    "number":318,
    "rate":12.6,
    "population":3224,
    "county":"Coke County"
  },
  {
    "state":"TX",
    "FIPS":48083,
    "number":816,
    "rate":12.4,
    "population":8675,
    "county":"Coleman County"
  },
  {
    "state":"TX",
    "FIPS":48085,
    "number":51762,
    "rate":8.9,
    "population":837476,
    "county":"Collin County"
  },
  {
    "state":"TX",
    "FIPS":48087,
    "number":232,
    "rate":11,
    "population":3020,
    "county":"Collingsworth County"
  },
  {
    "state":"TX",
    "FIPS":48089,
    "number":1828,
    "rate":11.9,
    "population":20685,
    "county":"Colorado County"
  },
  {
    "state":"TX",
    "FIPS":48091,
    "number":8281,
    "rate":9.7,
    "population":115097,
    "county":"Comal County"
  },
  {
    "state":"TX",
    "FIPS":48093,
    "number":1137,
    "rate":11.1,
    "population":13746,
    "county":"Comanche County"
  },
  {
    "state":"TX",
    "FIPS":48095,
    "number":317,
    "rate":9.2,
    "population":4065,
    "county":"Concho County"
  },
  {
    "state":"TX",
    "FIPS":48097,
    "number":2983,
    "rate":10.6,
    "population":38733,
    "county":"Cooke County"
  },
  {
    "state":"TX",
    "FIPS":48099,
    "number":4651,
    "rate":8.5,
    "population":77136,
    "county":"Coryell County"
  },
  {
    "state":"TX",
    "FIPS":48101,
    "number":144,
    "rate":12.9,
    "population":1479,
    "county":"Cottle County"
  },
  {
    "state":"TX",
    "FIPS":48103,
    "number":303,
    "rate":9.6,
    "population":4567,
    "county":"Crane County"
  },
  {
    "state":"TX",
    "FIPS":48105,
    "number":279,
    "rate":10.5,
    "population":3716,
    "county":"Crockett County"
  },
  {
    "state":"TX",
    "FIPS":48107,
    "number":427,
    "rate":10.1,
    "population":6099,
    "county":"Crosby County"
  },
  {
    "state":"TX",
    "FIPS":48109,
    "number":174,
    "rate":10.6,
    "population":2303,
    "county":"Culberson County"
  },
  {
    "state":"TX",
    "FIPS":48111,
    "number":388,
    "rate":8.4,
    "population":6996,
    "county":"Dallam County"
  },
  {
    "state":"TX",
    "FIPS":48113,
    "number":148840,
    "rate":8.6,
    "population":2456693,
    "county":"Dallas County"
  },
  {
    "state":"TX",
    "FIPS":48115,
    "number":929,
    "rate":9.3,
    "population":13663,
    "county":"Dawson County"
  },
  {
    "state":"TX",
    "FIPS":48117,
    "number":1171,
    "rate":9.3,
    "population":19358,
    "county":"Deaf Smith County"
  },
  {
    "state":"TX",
    "FIPS":48119,
    "number":486,
    "rate":12.1,
    "population":5307,
    "county":"Delta County"
  },
  {
    "state":"TX",
    "FIPS":48121,
    "number":42910,
    "rate":8.6,
    "population":707962,
    "county":"Denton County"
  },
  {
    "state":"TX",
    "FIPS":48123,
    "number":1765,
    "rate":11.4,
    "population":20456,
    "county":"De Witt County"
  },
  {
    "state":"TX",
    "FIPS":48125,
    "number":188,
    "rate":10.3,
    "population":2325,
    "county":"Dickens County"
  },
  {
    "state":"TX",
    "FIPS":48127,
    "number":723,
    "rate":10.2,
    "population":10510,
    "county":"Dimmit County"
  },
  {
    "state":"TX",
    "FIPS":48129,
    "number":309,
    "rate":11.6,
    "population":3652,
    "county":"Donley County"
  },
  {
    "state":"TX",
    "FIPS":48131,
    "number":824,
    "rate":10,
    "population":11573,
    "county":"Duval County"
  },
  {
    "state":"TX",
    "FIPS":48133,
    "number":1712,
    "rate":12.6,
    "population":18403,
    "county":"Eastland County"
  },
  {
    "state":"TX",
    "FIPS":48135,
    "number":10008,
    "rate":10.2,
    "population":144444,
    "county":"Ector County"
  },
  {
    "state":"TX",
    "FIPS":48137,
    "number":176,
    "rate":11.6,
    "population":1968,
    "county":"Edwards County"
  },
  {
    "state":"TX",
    "FIPS":48141,
    "number":50487,
    "rate":9,
    "population":831144,
    "county":"El Paso County"
  },
  {
    "state":"TX",
    "FIPS":48139,
    "number":10836,
    "rate":10.2,
    "population":153826,
    "county":"Ellis County"
  },
  {
    "state":"TX",
    "FIPS":48143,
    "number":2573,
    "rate":9,
    "population":39456,
    "county":"Erath County"
  },
  {
    "state":"TX",
    "FIPS":48145,
    "number":1577,
    "rate":11.7,
    "population":17600,
    "county":"Falls County"
  },
  {
    "state":"TX",
    "FIPS":48147,
    "number":2741,
    "rate":10.7,
    "population":33667,
    "county":"Fannin County"
  },
  {
    "state":"TX",
    "FIPS":48149,
    "number":2235,
    "rate":11.8,
    "population":24720,
    "county":"Fayette County"
  },
  {
    "state":"TX",
    "FIPS":48151,
    "number":372,
    "rate":12.6,
    "population":3833,
    "county":"Fisher County"
  },
  {
    "state":"TX",
    "FIPS":48153,
    "number":520,
    "rate":11.9,
    "population":6349,
    "county":"Floyd County"
  },
  {
    "state":"TX",
    "FIPS":48155,
    "number":124,
    "rate":12.3,
    "population":1305,
    "county":"Foard County"
  },
  {
    "state":"TX",
    "FIPS":48157,
    "number":32872,
    "rate":7.7,
    "population":626704,
    "county":"Fort Bend County"
  },
  {
    "state":"TX",
    "FIPS":48159,
    "number":859,
    "rate":11,
    "population":10636,
    "county":"Franklin County"
  },
  {
    "state":"TX",
    "FIPS":48161,
    "number":1687,
    "rate":11.6,
    "population":19481,
    "county":"Freestone County"
  },
  {
    "state":"TX",
    "FIPS":48163,
    "number":1234,
    "rate":9.6,
    "population":17829,
    "county":"Frio County"
  },
  {
    "state":"TX",
    "FIPS":48165,
    "number":1112,
    "rate":9.7,
    "population":18452,
    "county":"Gaines County"
  },
  {
    "state":"TX",
    "FIPS":48167,
    "number":20324,
    "rate":9.3,
    "population":301469,
    "county":"Galveston County"
  },
  {
    "state":"TX",
    "FIPS":48169,
    "number":444,
    "rate":9,
    "population":6450,
    "county":"Garza County"
  },
  {
    "state":"TX",
    "FIPS":48171,
    "number":2284,
    "rate":11.6,
    "population":25150,
    "county":"Gillespie County"
  },
  {
    "state":"TX",
    "FIPS":48173,
    "number":85,
    "rate":9.8,
    "population":1256,
    "county":"Glasscock County"
  },
  {
    "state":"TX",
    "FIPS":48175,
    "number":650,
    "rate":11.7,
    "population":7338,
    "county":"Goliad County"
  },
  {
    "state":"TX",
    "FIPS":48177,
    "number":1667,
    "rate":11.8,
    "population":19971,
    "county":"Gonzales County"
  },
  {
    "state":"TX",
    "FIPS":48179,
    "number":1855,
    "rate":11.1,
    "population":22833,
    "county":"Gray County"
  },
  {
    "state":"TX",
    "FIPS":48181,
    "number":8912,
    "rate":10,
    "population":121631,
    "county":"Grayson County"
  },
  {
    "state":"TX",
    "FIPS":48183,
    "number":9624,
    "rate":11,
    "population":122896,
    "county":"Gregg County"
  },
  {
    "state":"TX",
    "FIPS":48185,
    "number":2444,
    "rate":12.1,
    "population":26724,
    "county":"Grimes County"
  },
  {
    "state":"TX",
    "FIPS":48187,
    "number":9214,
    "rate":9.4,
    "population":139714,
    "county":"Guadalupe County"
  },
  {
    "state":"TX",
    "FIPS":48189,
    "number":2913,
    "rate":11.8,
    "population":36316,
    "county":"Hale County"
  },
  {
    "state":"TX",
    "FIPS":48191,
    "number":305,
    "rate":12.8,
    "population":3298,
    "county":"Hall County"
  },
  {
    "state":"TX",
    "FIPS":48193,
    "number":809,
    "rate":12.6,
    "population":8290,
    "county":"Hamilton County"
  },
  {
    "state":"TX",
    "FIPS":48195,
    "number":381,
    "rate":10.2,
    "population":5502,
    "county":"Hansford County"
  },
  {
    "state":"TX",
    "FIPS":48197,
    "number":361,
    "rate":12,
    "population":4048,
    "county":"Hardeman County"
  },
  {
    "state":"TX",
    "FIPS":48199,
    "number":3898,
    "rate":9.8,
    "population":55149,
    "county":"Hardin County"
  },
  {
    "state":"TX",
    "FIPS":48201,
    "number":241536,
    "rate":8.1,
    "population":4263060,
    "county":"Harris County"
  },
  {
    "state":"TX",
    "FIPS":48203,
    "number":5589,
    "rate":11.6,
    "population":67284,
    "county":"Harrison County"
  },
  {
    "state":"TX",
    "FIPS":48205,
    "number":480,
    "rate":10,
    "population":6153,
    "county":"Hartley County"
  },
  {
    "state":"TX",
    "FIPS":48207,
    "number":512,
    "rate":11.3,
    "population":5880,
    "county":"Haskell County"
  },
  {
    "state":"TX",
    "FIPS":48209,
    "number":9104,
    "rate":7.6,
    "population":168855,
    "county":"Hays County"
  },
  {
    "state":"TX",
    "FIPS":48211,
    "number":268,
    "rate":9.8,
    "population":4082,
    "county":"Hemphill County"
  },
  {
    "state":"TX",
    "FIPS":48213,
    "number":6225,
    "rate":10.5,
    "population":78942,
    "county":"Henderson County"
  },
  {
    "state":"TX",
    "FIPS":48215,
    "number":47075,
    "rate":9.3,
    "population":807725,
    "county":"Hidalgo County"
  },
  {
    "state":"TX",
    "FIPS":48217,
    "number":2561,
    "rate":9.9,
    "population":35109,
    "county":"Hill County"
  },
  {
    "state":"TX",
    "FIPS":48219,
    "number":1426,
    "rate":8.9,
    "population":23122,
    "county":"Hockley County"
  },
  {
    "state":"TX",
    "FIPS":48221,
    "number":4291,
    "rate":10.7,
    "population":52136,
    "county":"Hood County"
  },
  {
    "state":"TX",
    "FIPS":48223,
    "number":2592,
    "rate":10.1,
    "population":35420,
    "county":"Hopkins County"
  },
  {
    "state":"TX",
    "FIPS":48225,
    "number":2207,
    "rate":12.1,
    "population":23149,
    "county":"Houston County"
  },
  {
    "state":"TX",
    "FIPS":48227,
    "number":2710,
    "rate":10.2,
    "population":35536,
    "county":"Howard County"
  },
  {
    "state":"TX",
    "FIPS":48229,
    "number":253,
    "rate":10.8,
    "population":3333,
    "county":"Hudspeth County"
  },
  {
    "state":"TX",
    "FIPS":48231,
    "number":6257,
    "rate":9.9,
    "population":87211,
    "county":"Hunt County"
  },
  {
    "state":"TX",
    "FIPS":48233,
    "number":1757,
    "rate":11.3,
    "population":21948,
    "county":"Hutchinson County"
  },
  {
    "state":"TX",
    "FIPS":48235,
    "number":130,
    "rate":11,
    "population":1576,
    "county":"Irion County"
  },
  {
    "state":"TX",
    "FIPS":48239,
    "number":1224,
    "rate":12,
    "population":14249,
    "county":"Jackson County"
  },
  {
    "state":"TX",
    "FIPS":48237,
    "number":669,
    "rate":9.9,
    "population":9005,
    "county":"Jack County"
  },
  {
    "state":"TX",
    "FIPS":48241,
    "number":3269,
    "rate":12.5,
    "population":35856,
    "county":"Jasper County"
  },
  {
    "state":"TX",
    "FIPS":48243,
    "number":237,
    "rate":12.3,
    "population":2312,
    "county":"Jeff Davis County"
  },
  {
    "state":"TX",
    "FIPS":48245,
    "number":22229,
    "rate":12.1,
    "population":251404,
    "county":"Jefferson County"
  },
  {
    "state":"TX",
    "FIPS":48247,
    "number":390,
    "rate":10.8,
    "population":5265,
    "county":"Jim Hogg County"
  },
  {
    "state":"TX",
    "FIPS":48249,
    "number":2639,
    "rate":9.2,
    "population":41644,
    "county":"Jim Wells County"
  },
  {
    "state":"TX",
    "FIPS":48251,
    "number":12517,
    "rate":11.5,
    "population":153530,
    "county":"Johnson County"
  },
  {
    "state":"TX",
    "FIPS":48253,
    "number":1521,
    "rate":9.6,
    "population":19910,
    "county":"Jones County"
  },
  {
    "state":"TX",
    "FIPS":48255,
    "number":1054,
    "rate":9.2,
    "population":14896,
    "county":"Karnes County"
  },
  {
    "state":"TX",
    "FIPS":48257,
    "number":7115,
    "rate":9.6,
    "population":106680,
    "county":"Kaufman County"
  },
  {
    "state":"TX",
    "FIPS":48259,
    "number":2691,
    "rate":10.2,
    "population":35759,
    "county":"Kendall County"
  },
  {
    "state":"TX",
    "FIPS":48261,
    "number":33,
    "rate":10.2,
    "population":432,
    "county":"Kenedy County"
  },
  {
    "state":"TX",
    "FIPS":48263,
    "number":81,
    "rate":12.8,
    "population":839,
    "county":"Kent County"
  },
  {
    "state":"TX",
    "FIPS":48265,
    "number":4734,
    "rate":12.2,
    "population":49798,
    "county":"Kerr County"
  },
  {
    "state":"TX",
    "FIPS":48267,
    "number":436,
    "rate":12.2,
    "population":4534,
    "county":"Kimble County"
  },
  {
    "state":"TX",
    "FIPS":48269,
    "number":23,
    "rate":10.8,
    "population":271,
    "county":"King County"
  },
  {
    "state":"TX",
    "FIPS":48271,
    "number":322,
    "rate":11.5,
    "population":3628,
    "county":"Kinney County"
  },
  {
    "state":"TX",
    "FIPS":48273,
    "number":1871,
    "rate":8.4,
    "population":32180,
    "county":"Kleberg County"
  },
  {
    "state":"TX",
    "FIPS":48275,
    "number":305,
    "rate":11.2,
    "population":3768,
    "county":"Knox County"
  },
  {
    "state":"TX",
    "FIPS":48283,
    "number":486,
    "rate":9,
    "population":7126,
    "county":"La Salle County"
  },
  {
    "state":"TX",
    "FIPS":48277,
    "number":4930,
    "rate":13.4,
    "population":49856,
    "county":"Lamar County"
  },
  {
    "state":"TX",
    "FIPS":48279,
    "number":976,
    "rate":10.3,
    "population":13931,
    "county":"Lamb County"
  },
  {
    "state":"TX",
    "FIPS":48281,
    "number":1605,
    "rate":10.9,
    "population":20081,
    "county":"Lampasas County"
  },
  {
    "state":"TX",
    "FIPS":48285,
    "number":1837,
    "rate":12.7,
    "population":19455,
    "county":"Lavaca County"
  },
  {
    "state":"TX",
    "FIPS":48287,
    "number":1325,
    "rate":11,
    "population":16548,
    "county":"Lee County"
  },
  {
    "state":"TX",
    "FIPS":48289,
    "number":1692,
    "rate":13.3,
    "population":16763,
    "county":"Leon County"
  },
  {
    "state":"TX",
    "FIPS":48291,
    "number":5598,
    "rate":10.1,
    "population":76511,
    "county":"Liberty County"
  },
  {
    "state":"TX",
    "FIPS":48293,
    "number":2088,
    "rate":11.9,
    "population":23664,
    "county":"Limestone County"
  },
  {
    "state":"TX",
    "FIPS":48295,
    "number":236,
    "rate":9.9,
    "population":3432,
    "county":"Lipscomb County"
  },
  {
    "state":"TX",
    "FIPS":48297,
    "number":1097,
    "rate":12,
    "population":11668,
    "county":"Live Oak County"
  },
  {
    "state":"TX",
    "FIPS":48299,
    "number":2097,
    "rate":13.3,
    "population":19121,
    "county":"Llano County"
  },
  {
    "state":"TX",
    "FIPS":48301,
    "number":7,
    "rate":11.2,
    "population":83,
    "county":"Loving County"
  },
  {
    "state":"TX",
    "FIPS":48303,
    "number":17662,
    "rate":8.6,
    "population":286096,
    "county":"Lubbock County"
  },
  {
    "state":"TX",
    "FIPS":48305,
    "number":443,
    "rate":10.9,
    "population":5777,
    "county":"Lynn County"
  },
  {
    "state":"TX",
    "FIPS":48313,
    "number":997,
    "rate":9.6,
    "population":13712,
    "county":"Madison County"
  },
  {
    "state":"TX",
    "FIPS":48315,
    "number":1076,
    "rate":13.2,
    "population":10323,
    "county":"Marion County"
  },
  {
    "state":"TX",
    "FIPS":48317,
    "number":324,
    "rate":9.6,
    "population":5002,
    "county":"Martin County"
  },
  {
    "state":"TX",
    "FIPS":48319,
    "number":399,
    "rate":12.8,
    "population":4044,
    "county":"Mason County"
  },
  {
    "state":"TX",
    "FIPS":48321,
    "number":2925,
    "rate":11.1,
    "population":36566,
    "county":"Matagorda County"
  },
  {
    "state":"TX",
    "FIPS":48323,
    "number":3055,
    "rate":8.7,
    "population":55766,
    "county":"Maverick County"
  },
  {
    "state":"TX",
    "FIPS":48307,
    "number":677,
    "rate":11,
    "population":8275,
    "county":"McCulloch County"
  },
  {
    "state":"TX",
    "FIPS":48309,
    "number":15248,
    "rate":9,
    "population":239511,
    "county":"Mclennan County"
  },
  {
    "state":"TX",
    "FIPS":48311,
    "number":73,
    "rate":12.6,
    "population":738,
    "county":"McMullen County"
  },
  {
    "state":"TX",
    "FIPS":48325,
    "number":3398,
    "rate":10,
    "population":46867,
    "county":"Medina County"
  },
  {
    "state":"TX",
    "FIPS":48327,
    "number":230,
    "rate":13,
    "population":2221,
    "county":"Menard County"
  },
  {
    "state":"TX",
    "FIPS":48329,
    "number":8888,
    "rate":8.7,
    "population":147090,
    "county":"Midland County"
  },
  {
    "state":"TX",
    "FIPS":48331,
    "number":2136,
    "rate":12.3,
    "population":24143,
    "county":"Milam County"
  },
  {
    "state":"TX",
    "FIPS":48333,
    "number":450,
    "rate":12.4,
    "population":4831,
    "county":"Mills County"
  },
  {
    "state":"TX",
    "FIPS":48335,
    "number":696,
    "rate":9.6,
    "population":9312,
    "county":"Mitchell County"
  },
  {
    "state":"TX",
    "FIPS":48337,
    "number":1646,
    "rate":11.2,
    "population":19529,
    "county":"Montague County"
  },
  {
    "state":"TX",
    "FIPS":48339,
    "number":35479,
    "rate":10.4,
    "population":485119,
    "county":"Montgomery County"
  },
  {
    "state":"TX",
    "FIPS":48341,
    "number":1387,
    "rate":9.5,
    "population":22399,
    "county":"Moore County"
  },
  {
    "state":"TX",
    "FIPS":48343,
    "number":1144,
    "rate":12,
    "population":12757,
    "county":"Morris County"
  },
  {
    "state":"TX",
    "FIPS":48345,
    "number":122,
    "rate":13.3,
    "population":1195,
    "county":"Motley County"
  },
  {
    "state":"TX",
    "FIPS":48347,
    "number":4835,
    "rate":10.5,
    "population":65841,
    "county":"Nacogdoches County"
  },
  {
    "state":"TX",
    "FIPS":48349,
    "number":3937,
    "rate":11.6,
    "population":48131,
    "county":"Navarro County"
  },
  {
    "state":"TX",
    "FIPS":48351,
    "number":1366,
    "rate":12.8,
    "population":14328,
    "county":"Newton County"
  },
  {
    "state":"TX",
    "FIPS":48353,
    "number":1162,
    "rate":10.9,
    "population":14877,
    "county":"Nolan County"
  },
  {
    "state":"TX",
    "FIPS":48355,
    "number":25105,
    "rate":10.1,
    "population":347933,
    "county":"Nueces County"
  },
  {
    "state":"TX",
    "FIPS":48357,
    "number":602,
    "rate":8.7,
    "population":10621,
    "county":"Ochiltree County"
  },
  {
    "state":"TX",
    "FIPS":48359,
    "number":136,
    "rate":10.1,
    "population":2047,
    "county":"Oldham County"
  },
  {
    "state":"TX",
    "FIPS":48361,
    "number":5834,
    "rate":9.7,
    "population":82951,
    "county":"Orange County"
  },
  {
    "state":"TX",
    "FIPS":48363,
    "number":2496,
    "rate":12.3,
    "population":27883,
    "county":"Palo Pinto County"
  },
  {
    "state":"TX",
    "FIPS":48365,
    "number":1979,
    "rate":11.3,
    "population":23998,
    "county":"Panola County"
  },
  {
    "state":"TX",
    "FIPS":48367,
    "number":9448,
    "rate":10.8,
    "population":119757,
    "county":"Parker County"
  },
  {
    "state":"TX",
    "FIPS":48369,
    "number":591,
    "rate":8.7,
    "population":10162,
    "county":"Parmer County"
  },
  {
    "state":"TX",
    "FIPS":48371,
    "number":1214,
    "rate":10.6,
    "population":15591,
    "county":"Pecos County"
  },
  {
    "state":"TX",
    "FIPS":48373,
    "number":4152,
    "rate":11.8,
    "population":45745,
    "county":"Polk County"
  },
  {
    "state":"TX",
    "FIPS":48375,
    "number":8058,
    "rate":9.4,
    "population":122754,
    "county":"Potter County"
  },
  {
    "state":"TX",
    "FIPS":48377,
    "number":511,
    "rate":9.8,
    "population":7540,
    "county":"Presidio County"
  },
  {
    "state":"TX",
    "FIPS":48379,
    "number":1023,
    "rate":12.1,
    "population":10938,
    "county":"Rains County"
  },
  {
    "state":"TX",
    "FIPS":48381,
    "number":7536,
    "rate":8.3,
    "population":124897,
    "county":"Randall County"
  },
  {
    "state":"TX",
    "FIPS":48383,
    "number":225,
    "rate":9.6,
    "population":3476,
    "county":"Reagan County"
  },
  {
    "state":"TX",
    "FIPS":48385,
    "number":332,
    "rate":12.3,
    "population":3372,
    "county":"Real County"
  },
  {
    "state":"TX",
    "FIPS":48387,
    "number":1216,
    "rate":12.4,
    "population":12712,
    "county":"Red River County"
  },
  {
    "state":"TX",
    "FIPS":48389,
    "number":895,
    "rate":8.6,
    "population":13892,
    "county":"Reeves County"
  },
  {
    "state":"TX",
    "FIPS":48391,
    "number":610,
    "rate":11.4,
    "population":7238,
    "county":"Refugio County"
  },
  {
    "state":"TX",
    "FIPS":48393,
    "number":69,
    "rate":11.2,
    "population":950,
    "county":"Roberts County"
  },
  {
    "state":"TX",
    "FIPS":48395,
    "number":1415,
    "rate":11.8,
    "population":16490,
    "county":"Robertson County"
  },
  {
    "state":"TX",
    "FIPS":48397,
    "number":5059,
    "rate":8.9,
    "population":82992,
    "county":"Rockwall County"
  },
  {
    "state":"TX",
    "FIPS":48399,
    "number":869,
    "rate":11.4,
    "population":10422,
    "county":"Runnels County"
  },
  {
    "state":"TX",
    "FIPS":48401,
    "number":4834,
    "rate":12,
    "population":55743,
    "county":"Rusk County"
  },
  {
    "state":"TX",
    "FIPS":48403,
    "number":1159,
    "rate":14,
    "population":10469,
    "county":"Sabine County"
  },
  {
    "state":"TX",
    "FIPS":48405,
    "number":953,
    "rate":13.9,
    "population":8836,
    "county":"San Augustine County"
  },
  {
    "state":"TX",
    "FIPS":48407,
    "number":2590,
    "rate":12.9,
    "population":27000,
    "county":"San Jacinto County"
  },
  {
    "state":"TX",
    "FIPS":48409,
    "number":5117,
    "rate":11.3,
    "population":65372,
    "county":"San Patricio County"
  },
  {
    "state":"TX",
    "FIPS":48411,
    "number":482,
    "rate":10.4,
    "population":5988,
    "county":"San Saba County"
  },
  {
    "state":"TX",
    "FIPS":48413,
    "number":226,
    "rate":10.3,
    "population":3249,
    "county":"Schleicher County"
  },
  {
    "state":"TX",
    "FIPS":48415,
    "number":1096,
    "rate":8.9,
    "population":17106,
    "county":"Scurry County"
  },
  {
    "state":"TX",
    "FIPS":48417,
    "number":270,
    "rate":10.9,
    "population":3370,
    "county":"Shackelford County"
  },
  {
    "state":"TX",
    "FIPS":48419,
    "number":2159,
    "rate":11.7,
    "population":25988,
    "county":"Shelby County"
  },
  {
    "state":"TX",
    "FIPS":48421,
    "number":218,
    "rate":10.5,
    "population":3067,
    "county":"Sherman County"
  },
  {
    "state":"TX",
    "FIPS":48423,
    "number":16576,
    "rate":10.8,
    "population":214941,
    "county":"Smith County"
  },
  {
    "state":"TX",
    "FIPS":48425,
    "number":694,
    "rate":11.1,
    "population":8594,
    "county":"Somervell County"
  },
  {
    "state":"TX",
    "FIPS":48427,
    "number":3399,
    "rate":8.8,
    "population":61951,
    "county":"Starr County"
  },
  {
    "state":"TX",
    "FIPS":48429,
    "number":780,
    "rate":11.1,
    "population":9570,
    "county":"Stephens County"
  },
  {
    "state":"TX",
    "FIPS":48431,
    "number":94,
    "rate":10.8,
    "population":1188,
    "county":"Sterling County"
  },
  {
    "state":"TX",
    "FIPS":48433,
    "number":141,
    "rate":12.6,
    "population":1470,
    "county":"Stonewall County"
  },
  {
    "state":"TX",
    "FIPS":48435,
    "number":306,
    "rate":10.9,
    "population":3930,
    "county":"Sutton County"
  },
  {
    "state":"TX",
    "FIPS":48437,
    "number":606,
    "rate":10.7,
    "population":7882,
    "county":"Swisher County"
  },
  {
    "state":"TX",
    "FIPS":48439,
    "number":146809,
    "rate":11.2,
    "population":1882822,
    "county":"Tarrant County"
  },
  {
    "state":"TX",
    "FIPS":48441,
    "number":9454,
    "rate":9.9,
    "population":134104,
    "county":"Taylor County"
  },
  {
    "state":"TX",
    "FIPS":48443,
    "number":77,
    "rate":10.8,
    "population":926,
    "county":"Terrell County"
  },
  {
    "state":"TX",
    "FIPS":48445,
    "number":968,
    "rate":10.8,
    "population":12610,
    "county":"Terry County"
  },
  {
    "state":"TX",
    "FIPS":48447,
    "number":143,
    "rate":11.7,
    "population":1601,
    "county":"Throckmorton County"
  },
  {
    "state":"TX",
    "FIPS":48449,
    "number":2131,
    "rate":9.7,
    "population":32693,
    "county":"Titus County"
  },
  {
    "state":"TX",
    "FIPS":48451,
    "number":7976,
    "rate":9.6,
    "population":113521,
    "county":"Tom Green County"
  },
  {
    "state":"TX",
    "FIPS":48453,
    "number":49351,
    "rate":6.1,
    "population":1097104,
    "county":"Travis County"
  },
  {
    "state":"TX",
    "FIPS":48455,
    "number":1330,
    "rate":12,
    "population":14300,
    "county":"Trinity County"
  },
  {
    "state":"TX",
    "FIPS":48457,
    "number":1989,
    "rate":11.9,
    "population":21452,
    "county":"Tyler County"
  },
  {
    "state":"TX",
    "FIPS":48459,
    "number":3488,
    "rate":11.9,
    "population":39952,
    "county":"Upshur County"
  },
  {
    "state":"TX",
    "FIPS":48461,
    "number":237,
    "rate":10.3,
    "population":3254,
    "county":"Upton County"
  },
  {
    "state":"TX",
    "FIPS":48463,
    "number":1969,
    "rate":10.8,
    "population":26760,
    "county":"Uvalde County"
  },
  {
    "state":"TX",
    "FIPS":48465,
    "number":3052,
    "rate":9.3,
    "population":48953,
    "county":"Val Verde County"
  },
  {
    "state":"TX",
    "FIPS":48467,
    "number":4460,
    "rate":11.5,
    "population":52355,
    "county":"Van Zandt County"
  },
  {
    "state":"TX",
    "FIPS":48469,
    "number":7465,
    "rate":11.8,
    "population":89276,
    "county":"Victoria County"
  },
  {
    "state":"TX",
    "FIPS":48471,
    "number":4828,
    "rate":8.9,
    "population":68656,
    "county":"Walker County"
  },
  {
    "state":"TX",
    "FIPS":48473,
    "number":3224,
    "rate":10.6,
    "population":44353,
    "county":"Waller County"
  },
  {
    "state":"TX",
    "FIPS":48475,
    "number":758,
    "rate":10,
    "population":10876,
    "county":"Ward County"
  },
  {
    "state":"TX",
    "FIPS":48477,
    "number":2916,
    "rate":11.6,
    "population":33866,
    "county":"Washington County"
  },
  {
    "state":"TX",
    "FIPS":48479,
    "number":15375,
    "rate":9.6,
    "population":259986,
    "county":"Webb County"
  },
  {
    "state":"TX",
    "FIPS":48483,
    "number":426,
    "rate":10.6,
    "population":5607,
    "county":"Wheeler County"
  },
  {
    "state":"TX",
    "FIPS":48481,
    "number":3166,
    "rate":10.8,
    "population":41147,
    "county":"Wharton County"
  },
  {
    "state":"TX",
    "FIPS":48485,
    "number":9910,
    "rate":10.3,
    "population":131702,
    "county":"Wichita County"
  },
  {
    "state":"TX",
    "FIPS":48487,
    "number":1086,
    "rate":11.3,
    "population":13262,
    "county":"Wilbarger County"
  },
  {
    "state":"TX",
    "FIPS":48489,
    "number":1305,
    "rate":8.4,
    "population":22107,
    "county":"Willacy County"
  },
  {
    "state":"TX",
    "FIPS":48491,
    "number":26138,
    "rate":8.2,
    "population":456593,
    "county":"Williamson County"
  },
  {
    "state":"TX",
    "FIPS":48493,
    "number":3091,
    "rate":9.7,
    "population":44432,
    "county":"Wilson County"
  },
  {
    "state":"TX",
    "FIPS":48495,
    "number":463,
    "rate":9.4,
    "population":7344,
    "county":"Winkler County"
  },
  {
    "state":"TX",
    "FIPS":48497,
    "number":4345,
    "rate":10,
    "population":60387,
    "county":"Wise County"
  },
  {
    "state":"TX",
    "FIPS":48499,
    "number":4054,
    "rate":12.4,
    "population":42525,
    "county":"Wood County"
  },
  {
    "state":"TX",
    "FIPS":48501,
    "number":494,
    "rate":9.4,
    "population":8018,
    "county":"Yoakum County"
  },
  {
    "state":"TX",
    "FIPS":48503,
    "number":1441,
    "rate":10.6,
    "population":18290,
    "county":"Young County"
  },
  {
    "state":"TX",
    "FIPS":48505,
    "number":814,
    "rate":9,
    "population":14232,
    "county":"Zapata County"
  },
  {
    "state":"TX",
    "FIPS":48507,
    "number":744,
    "rate":9.4,
    "population":11996,
    "county":"Zavala County"
  },
  {
    "state":"UT",
    "FIPS":49001,
    "number":338,
    "rate":8.1,
    "population":6486,
    "county":"Beaver County"
  },
  {
    "state":"UT",
    "FIPS":49003,
    "number":3069,
    "rate":9.5,
    "population":50269,
    "county":"Box Elder County"
  },
  {
    "state":"UT",
    "FIPS":49005,
    "number":4796,
    "rate":6.4,
    "population":115958,
    "county":"Cache County"
  },
  {
    "state":"UT",
    "FIPS":49007,
    "number":1401,
    "rate":9.4,
    "population":21254,
    "county":"Carbon County"
  },
  {
    "state":"UT",
    "FIPS":49009,
    "number":82,
    "rate":10.2,
    "population":1086,
    "county":"Daggett County"
  },
  {
    "state":"UT",
    "FIPS":49011,
    "number":14428,
    "rate":7.2,
    "population":316018,
    "county":"Davis County"
  },
  {
    "state":"UT",
    "FIPS":49013,
    "number":948,
    "rate":7.7,
    "population":19061,
    "county":"Duchesne County"
  },
  {
    "state":"UT",
    "FIPS":49015,
    "number":560,
    "rate":7.7,
    "population":10901,
    "county":"Emery County"
  },
  {
    "state":"UT",
    "FIPS":49017,
    "number":368,
    "rate":10,
    "population":5088,
    "county":"Garfield County"
  },
  {
    "state":"UT",
    "FIPS":49019,
    "number":548,
    "rate":7.8,
    "population":9341,
    "county":"Grand County"
  },
  {
    "state":"UT",
    "FIPS":49021,
    "number":2131,
    "rate":6.9,
    "population":46730,
    "county":"Iron County"
  },
  {
    "state":"UT",
    "FIPS":49023,
    "number":543,
    "rate":8.6,
    "population":10328,
    "county":"Juab County"
  },
  {
    "state":"UT",
    "FIPS":49025,
    "number":522,
    "rate":9.7,
    "population":7217,
    "county":"Kane County"
  },
  {
    "state":"UT",
    "FIPS":49027,
    "number":803,
    "rate":9.8,
    "population":12543,
    "county":"Millard County"
  },
  {
    "state":"UT",
    "FIPS":49029,
    "number":475,
    "rate":7.8,
    "population":9802,
    "county":"Morgan County"
  },
  {
    "state":"UT",
    "FIPS":49031,
    "number":109,
    "rate":10.2,
    "population":1528,
    "county":"Piute County"
  },
  {
    "state":"UT",
    "FIPS":49033,
    "number":139,
    "rate":9.2,
    "population":2279,
    "county":"Rich County"
  },
  {
    "state":"UT",
    "FIPS":49035,
    "number":51938,
    "rate":7.1,
    "population":1064402,
    "county":"Salt Lake County"
  },
  {
    "state":"UT",
    "FIPS":49037,
    "number":994,
    "rate":10.5,
    "population":14899,
    "county":"San Juan County"
  },
  {
    "state":"UT",
    "FIPS":49039,
    "number":1466,
    "rate":7.9,
    "population":28029,
    "county":"Sanpete County"
  },
  {
    "state":"UT",
    "FIPS":49041,
    "number":1382,
    "rate":10,
    "population":20735,
    "county":"Sevier County"
  },
  {
    "state":"UT",
    "FIPS":49043,
    "number":1188,
    "rate":4.4,
    "population":37893,
    "county":"Summit County"
  },
  {
    "state":"UT",
    "FIPS":49045,
    "number":3409,
    "rate":9.2,
    "population":59820,
    "county":"Tooele County"
  },
  {
    "state":"UT",
    "FIPS":49047,
    "number":1903,
    "rate":8.6,
    "population":34636,
    "county":"Uintah County"
  },
  {
    "state":"UT",
    "FIPS":49049,
    "number":18811,
    "rate":5.7,
    "population":539602,
    "county":"Utah County"
  },
  {
    "state":"UT",
    "FIPS":49051,
    "number":1041,
    "rate":6.4,
    "population":25374,
    "county":"Wasatch County"
  },
  {
    "state":"UT",
    "FIPS":49053,
    "number":7065,
    "rate":7.2,
    "population":144643,
    "county":"Washington County"
  },
  {
    "state":"UT",
    "FIPS":49055,
    "number":166,
    "rate":8.8,
    "population":2732,
    "county":"Wayne County"
  },
  {
    "state":"UT",
    "FIPS":49057,
    "number":13311,
    "rate":8.3,
    "population":236540,
    "county":"Weber County"
  },
  {
    "state":"VA",
    "FIPS":51001,
    "number":3109,
    "rate":12.1,
    "population":33313,
    "county":"Accomack County"
  },
  {
    "state":"VA",
    "FIPS":51510,
    "number":7360,
    "rate":6.2,
    "population":146934,
    "county":"Alexandria city"
  },
  {
    "state":"VA",
    "FIPS":51003,
    "number":6828,
    "rate":9.1,
    "population":102030,
    "county":"Albemarle County"
  },
  {
    "state":"VA",
    "FIPS":51005,
    "number":1410,
    "rate":11.2,
    "population":16183,
    "county":"Alleghany County"
  },
  {
    "state":"VA",
    "FIPS":51007,
    "number":1162,
    "rate":12,
    "population":12745,
    "county":"Amelia County"
  },
  {
    "state":"VA",
    "FIPS":51009,
    "number":3556,
    "rate":14.4,
    "population":32445,
    "county":"Amherst County"
  },
  {
    "state":"VA",
    "FIPS":51011,
    "number":1260,
    "rate":10.9,
    "population":15144,
    "county":"Appomattox County"
  },
  {
    "state":"VA",
    "FIPS":51013,
    "number":8891,
    "rate":4.9,
    "population":221947,
    "county":"Arlington County"
  },
  {
    "state":"VA",
    "FIPS":51015,
    "number":6259,
    "rate":11,
    "population":73603,
    "county":"Augusta County"
  },
  {
    "state":"VA",
    "FIPS":51017,
    "number":429,
    "rate":11.3,
    "population":4655,
    "county":"Bath County"
  },
  {
    "state":"",
    "FIPS":51515,
    "number":571,
    "rate":12.4,
    "population":null,
    "county":""
  },
  {
    "state":"VA",
    "FIPS":51019,
    "number":5818,
    "rate":10.9,
    "population":75431,
    "county":"Bedford County"
  },
  {
    "state":"VA",
    "FIPS":51021,
    "number":621,
    "rate":11.4,
    "population":6710,
    "county":"Bland County"
  },
  {
    "state":"VA",
    "FIPS":51023,
    "number":2888,
    "rate":11.4,
    "population":33157,
    "county":"Botetourt County"
  },
  {
    "state":"VA",
    "FIPS":51520,
    "number":1577,
    "rate":11.5,
    "population":17724,
    "county":"Bristol City"
  },
  {
    "state":"VA",
    "FIPS":51025,
    "number":1654,
    "rate":12.3,
    "population":17063,
    "county":"Brunswick County"
  },
  {
    "state":"VA",
    "FIPS":51027,
    "number":2360,
    "rate":12.4,
    "population":23837,
    "county":"Buchanan County"
  },
  {
    "state":"VA",
    "FIPS":51029,
    "number":1960,
    "rate":14.5,
    "population":17043,
    "county":"Buckingham County"
  },
  {
    "state":"VA",
    "FIPS":51530,
    "number":513,
    "rate":10.3,
    "population":6768,
    "county":"Buena Vista City"
  },
  {
    "state":"VA",
    "FIPS":51031,
    "number":4439,
    "rate":10.5,
    "population":54726,
    "county":"Campbell County"
  },
  {
    "state":"VA",
    "FIPS":51033,
    "number":2388,
    "rate":11.1,
    "population":28939,
    "county":"Caroline County"
  },
  {
    "state":"VA",
    "FIPS":51035,
    "number":2640,
    "rate":11.3,
    "population":29873,
    "county":"Carroll County"
  },
  {
    "state":"VA",
    "FIPS":51036,
    "number":875,
    "rate":15,
    "population":7148,
    "county":"Charles City County"
  },
  {
    "state":"VA",
    "FIPS":51037,
    "number":1139,
    "rate":12.1,
    "population":12411,
    "county":"Charlotte County"
  },
  {
    "state":"VA",
    "FIPS":51540,
    "number":2916,
    "rate":8.1,
    "population":44521,
    "county":"Charlottesville City"
  },
  {
    "state":"VA",
    "FIPS":51550,
    "number":17920,
    "rate":10.8,
    "population":228188,
    "county":"Chesapeake City"
  },
  {
    "state":"VA",
    "FIPS":51041,
    "number":21135,
    "rate":9.1,
    "population":323850,
    "county":"Chesterfield County"
  },
  {
    "state":"VA",
    "FIPS":51043,
    "number":1192,
    "rate":11,
    "population":14316,
    "county":"Clarke County"
  },
  {
    "state":"VA",
    "FIPS":51570,
    "number":1482,
    "rate":11.3,
    "population":17510,
    "county":"Colonial Heights City"
  },
  {
    "state":"",
    "FIPS":51580,
    "number":500,
    "rate":11.3,
    "population":null,
    "county":""
  },
  {
    "state":"VA",
    "FIPS":51045,
    "number":448,
    "rate":11,
    "population":5198,
    "county":"Craig County"
  },
  {
    "state":"VA",
    "FIPS":51047,
    "number":3835,
    "rate":11.2,
    "population":47767,
    "county":"Culpeper County"
  },
  {
    "state":"VA",
    "FIPS":51049,
    "number":975,
    "rate":13,
    "population":9851,
    "county":"Cumberland County"
  },
  {
    "state":"VA",
    "FIPS":51590,
    "number":4588,
    "rate":14.1,
    "population":42786,
    "county":"Danville City"
  },
  {
    "state":"VA",
    "FIPS":51051,
    "number":1340,
    "rate":11,
    "population":15668,
    "county":"Dickenson County"
  },
  {
    "state":"VA",
    "FIPS":51053,
    "number":2777,
    "rate":13,
    "population":28100,
    "county":"Dinwiddie County"
  },
  {
    "state":"VA",
    "FIPS":51595,
    "number":561,
    "rate":13.5,
    "population":5704,
    "county":"Emporia City"
  },
  {
    "state":"VA",
    "FIPS":51057,
    "number":1186,
    "rate":13.8,
    "population":11167,
    "county":"Essex County"
  },
  {
    "state":"VA",
    "FIPS":51600,
    "number":1407,
    "rate":7.9,
    "population":23461,
    "county":"Fairfax City"
  },
  {
    "state":"VA",
    "FIPS":51059,
    "number":53869,
    "rate":6.6,
    "population":1121050,
    "county":"Fairfax County"
  },
  {
    "state":"VA",
    "FIPS":51610,
    "number":1008,
    "rate":10.6,
    "population":13136,
    "county":"Falls Church City"
  },
  {
    "state":"VA",
    "FIPS":51061,
    "number":5126,
    "rate":10.5,
    "population":66603,
    "county":"Fauquier County"
  },
  {
    "state":"VA",
    "FIPS":51063,
    "number":1217,
    "rate":10.3,
    "population":15426,
    "county":"Floyd County"
  },
  {
    "state":"VA",
    "FIPS":51065,
    "number":2170,
    "rate":11,
    "population":25943,
    "county":"Fluvanna County"
  },
  {
    "state":"VA",
    "FIPS":51620,
    "number":910,
    "rate":14.7,
    "population":8494,
    "county":"Franklin City"
  },
  {
    "state":"VA",
    "FIPS":51067,
    "number":5330,
    "rate":12.3,
    "population":56392,
    "county":"Franklin County"
  },
  {
    "state":"VA",
    "FIPS":51069,
    "number":5560,
    "rate":9.4,
    "population":80161,
    "county":"Frederick County"
  },
  {
    "state":"VA",
    "FIPS":51630,
    "number":1819,
    "rate":9.1,
    "population":27113,
    "county":"Fredericksburg City"
  },
  {
    "state":"VA",
    "FIPS":51640,
    "number":595,
    "rate":11.5,
    "population":6921,
    "county":"Galax City"
  },
  {
    "state":"VA",
    "FIPS":51071,
    "number":1480,
    "rate":11.3,
    "population":16968,
    "county":"Giles County"
  },
  {
    "state":"VA",
    "FIPS":51073,
    "number":3630,
    "rate":12.8,
    "population":36894,
    "county":"Gloucester County"
  },
  {
    "state":"VA",
    "FIPS":51075,
    "number":1957,
    "rate":11.7,
    "population":21350,
    "county":"Goochland County"
  },
  {
    "state":"VA",
    "FIPS":51077,
    "number":1395,
    "rate":11.5,
    "population":15179,
    "county":"Grayson County"
  },
  {
    "state":"VA",
    "FIPS":51079,
    "number":1352,
    "rate":9.8,
    "population":18807,
    "county":"Greene County"
  },
  {
    "state":"VA",
    "FIPS":51081,
    "number":1335,
    "rate":13.9,
    "population":11824,
    "county":"Greensville County"
  },
  {
    "state":"VA",
    "FIPS":51083,
    "number":4130,
    "rate":15.1,
    "population":35774,
    "county":"Halifax County"
  },
  {
    "state":"VA",
    "FIPS":51650,
    "number":12650,
    "rate":12.4,
    "population":136843,
    "county":"Hampton City"
  },
  {
    "state":"VA",
    "FIPS":51085,
    "number":7096,
    "rate":9.6,
    "population":100432,
    "county":"Hanover County"
  },
  {
    "state":"VA",
    "FIPS":51660,
    "number":2596,
    "rate":7,
    "population":51224,
    "county":"Harrisonburg City"
  },
  {
    "state":"VA",
    "FIPS":51087,
    "number":22726,
    "rate":9.7,
    "population":315431,
    "county":"Henrico County"
  },
  {
    "state":"VA",
    "FIPS":51089,
    "number":6129,
    "rate":14.9,
    "population":52824,
    "county":"Henry County"
  },
  {
    "state":"VA",
    "FIPS":51670,
    "number":2281,
    "rate":14,
    "population":22322,
    "county":"Hopewell City"
  },
  {
    "state":"VA",
    "FIPS":51091,
    "number":243,
    "rate":12.8,
    "population":2249,
    "county":"Highland County"
  },
  {
    "state":"VA",
    "FIPS":51093,
    "number":3452,
    "rate":12.8,
    "population":35380,
    "county":"Isle of Wight County"
  },
  {
    "state":"VA",
    "FIPS":51095,
    "number":5747,
    "rate":10.9,
    "population":69532,
    "county":"James City County"
  },
  {
    "state":"VA",
    "FIPS":51097,
    "number":696,
    "rate":12.6,
    "population":7068,
    "county":"King and Queen County"
  },
  {
    "state":"VA",
    "FIPS":51099,
    "number":1777,
    "rate":10.3,
    "population":24608,
    "county":"King George County"
  },
  {
    "state":"VA",
    "FIPS":51101,
    "number":1283,
    "rate":10.9,
    "population":15977,
    "county":"King William County"
  },
  {
    "state":"VA",
    "FIPS":51103,
    "number":1277,
    "rate":13.7,
    "population":11230,
    "county":"Lancaster County"
  },
  {
    "state":"VA",
    "FIPS":51105,
    "number":2247,
    "rate":11.2,
    "population":25539,
    "county":"Lee County"
  },
  {
    "state":"",
    "FIPS":51678,
    "number":442,
    "rate":8.8,
    "population":null,
    "county":""
  },
  {
    "state":"VA",
    "FIPS":51107,
    "number":16152,
    "rate":7.1,
    "population":338165,
    "county":"Loudoun County"
  },
  {
    "state":"VA",
    "FIPS":51109,
    "number":2710,
    "rate":10.6,
    "population":33517,
    "county":"Louisa County"
  },
  {
    "state":"VA",
    "FIPS":51111,
    "number":1302,
    "rate":13,
    "population":12599,
    "county":"Lunenburg County"
  },
  {
    "state":"VA",
    "FIPS":51680,
    "number":6365,
    "rate":11.3,
    "population":77788,
    "county":"Lynchburg City"
  },
  {
    "state":"VA",
    "FIPS":51113,
    "number":1210,
    "rate":12,
    "population":13207,
    "county":"Madison County"
  },
  {
    "state":"VA",
    "FIPS":51683,
    "number":2408,
    "rate":8.5,
    "population":40742,
    "county":"Manassas City"
  },
  {
    "state":"VA",
    "FIPS":51685,
    "number":979,
    "rate":8.9,
    "population":15079,
    "county":"Manassas Park City"
  },
  {
    "state":"VA",
    "FIPS":51690,
    "number":1401,
    "rate":13.5,
    "population":13747,
    "county":"Martinsville City"
  },
  {
    "state":"VA",
    "FIPS":51115,
    "number":920,
    "rate":12.8,
    "population":8921,
    "county":"Mathews County"
  },
  {
    "state":"VA",
    "FIPS":51117,
    "number":3291,
    "rate":13.2,
    "population":31758,
    "county":"Mecklenburg County"
  },
  {
    "state":"VA",
    "FIPS":51119,
    "number":1145,
    "rate":12.8,
    "population":10827,
    "county":"Middlesex County"
  },
  {
    "state":"VA",
    "FIPS":51121,
    "number":5229,
    "rate":7.2,
    "population":95651,
    "county":"Montgomery County"
  },
  {
    "state":"VA",
    "FIPS":51125,
    "number":1517,
    "rate":12.9,
    "population":14807,
    "county":"Nelson County"
  },
  {
    "state":"VA",
    "FIPS":51127,
    "number":1564,
    "rate":10.7,
    "population":19132,
    "county":"New Kent County"
  },
  {
    "state":"VA",
    "FIPS":51700,
    "number":17783,
    "rate":13.5,
    "population":180487,
    "county":"Newport News City"
  },
  {
    "state":"VA",
    "FIPS":51710,
    "number":18520,
    "rate":10,
    "population":246150,
    "county":"Norfolk City"
  },
  {
    "state":"VA",
    "FIPS":51131,
    "number":1523,
    "rate":15.8,
    "population":12237,
    "county":"Northampton County"
  },
  {
    "state":"VA",
    "FIPS":51133,
    "number":1425,
    "rate":14,
    "population":12354,
    "county":"Northumberland County"
  },
  {
    "state":"VA",
    "FIPS":51720,
    "number":318,
    "rate":10.4,
    "population":4049,
    "county":"Norton City"
  },
  {
    "state":"VA",
    "FIPS":51135,
    "number":1690,
    "rate":13.6,
    "population":15776,
    "county":"Nottoway County"
  },
  {
    "state":"VA",
    "FIPS":51137,
    "number":2749,
    "rate":10.7,
    "population":34187,
    "county":"Orange County"
  },
  {
    "state":"VA",
    "FIPS":51139,
    "number":2036,
    "rate":11,
    "population":23872,
    "county":"Page County"
  },
  {
    "state":"VA",
    "FIPS":51141,
    "number":1839,
    "rate":12.5,
    "population":18403,
    "county":"Patrick County"
  },
  {
    "state":"VA",
    "FIPS":51730,
    "number":3909,
    "rate":15.9,
    "population":32167,
    "county":"Petersburg City"
  },
  {
    "state":"VA",
    "FIPS":51143,
    "number":6821,
    "rate":14,
    "population":62898,
    "county":"Pittsylvania County"
  },
  {
    "state":"VA",
    "FIPS":51735,
    "number":999,
    "rate":11.1,
    "population":12134,
    "county":"Poquoson City"
  },
  {
    "state":"VA",
    "FIPS":51740,
    "number":10402,
    "rate":14.5,
    "population":96546,
    "county":"Portsmouth City"
  },
  {
    "state":"VA",
    "FIPS":51145,
    "number":2372,
    "rate":11,
    "population":28116,
    "county":"Powhatan County"
  },
  {
    "state":"VA",
    "FIPS":51147,
    "number":2006,
    "rate":11.7,
    "population":23211,
    "county":"Prince Edward County"
  },
  {
    "state":"VA",
    "FIPS":51149,
    "number":3710,
    "rate":13.2,
    "population":37036,
    "county":"Prince George County"
  },
  {
    "state":"VA",
    "FIPS":51153,
    "number":23035,
    "rate":7.8,
    "population":431226,
    "county":"Prince William County"
  },
  {
    "state":"VA",
    "FIPS":51155,
    "number":3303,
    "rate":12,
    "population":34747,
    "county":"Pulaski County"
  },
  {
    "state":"VA",
    "FIPS":51750,
    "number":966,
    "rate":7.9,
    "population":16766,
    "county":"Radford City"
  },
  {
    "state":"VA",
    "FIPS":51157,
    "number":692,
    "rate":11.7,
    "population":7430,
    "county":"Rappahannock County"
  },
  {
    "state":"VA",
    "FIPS":51760,
    "number":17298,
    "rate":10.6,
    "population":211526,
    "county":"Richmond City"
  },
  {
    "state":"VA",
    "FIPS":51159,
    "number":930,
    "rate":12.6,
    "population":9052,
    "county":"Richmond County"
  },
  {
    "state":"VA",
    "FIPS":51770,
    "number":8460,
    "rate":11.4,
    "population":97879,
    "county":"Roanoke City"
  },
  {
    "state":"VA",
    "FIPS":51161,
    "number":8627,
    "rate":12.1,
    "population":93031,
    "county":"Roanoke County"
  },
  {
    "state":"VA",
    "FIPS":51163,
    "number":2237,
    "rate":12.5,
    "population":22392,
    "county":"Rockbridge County"
  },
  {
    "state":"VA",
    "FIPS":51165,
    "number":6207,
    "rate":10.8,
    "population":77375,
    "county":"Rockingham County"
  },
  {
    "state":"VA",
    "FIPS":51167,
    "number":2727,
    "rate":12.3,
    "population":28426,
    "county":"Russell County"
  },
  {
    "state":"VA",
    "FIPS":51775,
    "number":1878,
    "rate":9.9,
    "population":25053,
    "county":"Salem City"
  },
  {
    "state":"VA",
    "FIPS":51169,
    "number":2432,
    "rate":13.5,
    "population":22801,
    "county":"Scott County"
  },
  {
    "state":"VA",
    "FIPS":51173,
    "number":2558,
    "rate":10.4,
    "population":31863,
    "county":"Smyth County"
  },
  {
    "state":"VA",
    "FIPS":51171,
    "number":3934,
    "rate":12.1,
    "population":42641,
    "county":"Shenandoah County"
  },
  {
    "state":"VA",
    "FIPS":51175,
    "number":2040,
    "rate":14.3,
    "population":18417,
    "county":"Southampton County"
  },
  {
    "state":"VA",
    "FIPS":51177,
    "number":11106,
    "rate":12.5,
    "population":126137,
    "county":"Spotsylvania County"
  },
  {
    "state":"VA",
    "FIPS":51179,
    "number":7410,
    "rate":7.9,
    "population":134374,
    "county":"Stafford County"
  },
  {
    "state":"VA",
    "FIPS":51790,
    "number":2113,
    "rate":11.3,
    "population":23921,
    "county":"Staunton City"
  },
  {
    "state":"VA",
    "FIPS":51800,
    "number":6718,
    "rate":10.9,
    "population":85183,
    "county":"Suffolk City"
  },
  {
    "state":"VA",
    "FIPS":51181,
    "number":782,
    "rate":14.6,
    "population":6840,
    "county":"Surry County"
  },
  {
    "state":"VA",
    "FIPS":51183,
    "number":1441,
    "rate":14.8,
    "population":11941,
    "county":"Sussex County"
  },
  {
    "state":"VA",
    "FIPS":51185,
    "number":5044,
    "rate":14.6,
    "population":44248,
    "county":"Tazewell County"
  },
  {
    "state":"VA",
    "FIPS":51810,
    "number":28174,
    "rate":8.5,
    "population":445769,
    "county":"Virginia Beach City"
  },
  {
    "state":"VA",
    "FIPS":51187,
    "number":2811,
    "rate":10,
    "population":37963,
    "county":"Warren County"
  },
  {
    "state":"VA",
    "FIPS":51191,
    "number":5601,
    "rate":13.1,
    "population":55073,
    "county":"Washington County"
  },
  {
    "state":"VA",
    "FIPS":51820,
    "number":1677,
    "rate":10.7,
    "population":21105,
    "county":"Waynesboro City"
  },
  {
    "state":"VA",
    "FIPS":51193,
    "number":1849,
    "rate":13.4,
    "population":17497,
    "county":"Westmoreland County"
  },
  {
    "state":"VA",
    "FIPS":51830,
    "number":1093,
    "rate":9.6,
    "population":14617,
    "county":"Williamsburg City"
  },
  {
    "state":"VA",
    "FIPS":51840,
    "number":1945,
    "rate":9.8,
    "population":27178,
    "county":"Winchester City"
  },
  {
    "state":"VA",
    "FIPS":51195,
    "number":4323,
    "rate":13.8,
    "population":40828,
    "county":"Wise County"
  },
  {
    "state":"VA",
    "FIPS":51197,
    "number":2750,
    "rate":12.1,
    "population":29351,
    "county":"Wythe County"
  },
  {
    "state":"VA",
    "FIPS":51199,
    "number":4590,
    "rate":9.6,
    "population":65746,
    "county":"York County"
  },
  {
    "state":"VT",
    "FIPS":50001,
    "number":2073,
    "rate":7.4,
    "population":36837,
    "county":"Addison County"
  },
  {
    "state":"VT",
    "FIPS":50003,
    "number":2634,
    "rate":9.3,
    "population":36669,
    "county":"Bennington County"
  },
  {
    "state":"VT",
    "FIPS":50005,
    "number":1857,
    "rate":7.9,
    "population":31095,
    "county":"Caledonia County"
  },
  {
    "state":"VT",
    "FIPS":50007,
    "number":7497,
    "rate":6.3,
    "population":158641,
    "county":"Chittenden County"
  },
  {
    "state":"VT",
    "FIPS":50009,
    "number":509,
    "rate":10.2,
    "population":6216,
    "county":"Essex County"
  },
  {
    "state":"VT",
    "FIPS":50011,
    "number":2887,
    "rate":8.1,
    "population":48253,
    "county":"Franklin County"
  },
  {
    "state":"VT",
    "FIPS":50013,
    "number":416,
    "rate":7.6,
    "population":6980,
    "county":"Grand Isle County"
  },
  {
    "state":"VT",
    "FIPS":50015,
    "number":1357,
    "rate":7.3,
    "population":24905,
    "county":"Lamoille County"
  },
  {
    "state":"VT",
    "FIPS":50017,
    "number":1620,
    "rate":7.3,
    "population":28933,
    "county":"Orange County"
  },
  {
    "state":"VT",
    "FIPS":50019,
    "number":1850,
    "rate":8.8,
    "population":27159,
    "county":"Orleans County"
  },
  {
    "state":"VT",
    "FIPS":50021,
    "number":4543,
    "rate":9.5,
    "population":60875,
    "county":"Rutland County"
  },
  {
    "state":"VT",
    "FIPS":50023,
    "number":3761,
    "rate":8.3,
    "population":59351,
    "county":"Washington County"
  },
  {
    "state":"VT",
    "FIPS":50025,
    "number":2671,
    "rate":7.8,
    "population":43997,
    "county":"Windham County"
  },
  {
    "state":"VT",
    "FIPS":50027,
    "number":3569,
    "rate":8.1,
    "population":56227,
    "county":"Windsor County"
  },
  {
    "state":"WA",
    "FIPS":53001,
    "number":1213,
    "rate":10.4,
    "population":18914,
    "county":"Adams County"
  },
  {
    "state":"WA",
    "FIPS":53003,
    "number":2032,
    "rate":12.1,
    "population":21873,
    "county":"Asotin County"
  },
  {
    "state":"WA",
    "FIPS":53005,
    "number":12447,
    "rate":9.7,
    "population":182396,
    "county":"Benton County"
  },
  {
    "state":"WA",
    "FIPS":53007,
    "number":5056,
    "rate":9.4,
    "population":73670,
    "county":"Chelan County"
  },
  {
    "state":"WA",
    "FIPS":53009,
    "number":6555,
    "rate":11.4,
    "population":71848,
    "county":"Clallam County"
  },
  {
    "state":"WA",
    "FIPS":53011,
    "number":28236,
    "rate":9,
    "population":437505,
    "county":"Clark County"
  },
  {
    "state":"WA",
    "FIPS":53013,
    "number":369,
    "rate":11.7,
    "population":4001,
    "county":"Columbia County"
  },
  {
    "state":"WA",
    "FIPS":53015,
    "number":8740,
    "rate":11.5,
    "population":101777,
    "county":"Cowlitz County"
  },
  {
    "state":"WA",
    "FIPS":53017,
    "number":2436,
    "rate":8.8,
    "population":39325,
    "county":"Douglas County"
  },
  {
    "state":"WA",
    "FIPS":53019,
    "number":607,
    "rate":10.1,
    "population":7719,
    "county":"Ferry County"
  },
  {
    "state":"WA",
    "FIPS":53021,
    "number":3930,
    "rate":7.2,
    "population":85831,
    "county":"Franklin County"
  },
  {
    "state":"WA",
    "FIPS":53023,
    "number":259,
    "rate":14.8,
    "population":2225,
    "county":"Garfield County"
  },
  {
    "state":"WA",
    "FIPS":53025,
    "number":5163,
    "rate":8.5,
    "population":91688,
    "county":"Grant County"
  },
  {
    "state":"WA",
    "FIPS":53027,
    "number":7262,
    "rate":13.2,
    "population":71705,
    "county":"Grays Harbor County"
  },
  {
    "state":"WA",
    "FIPS":53029,
    "number":6051,
    "rate":9.8,
    "population":79230,
    "county":"Island County"
  },
  {
    "state":"WA",
    "FIPS":53031,
    "number":2551,
    "rate":10.1,
    "population":29823,
    "county":"Jefferson County"
  },
  {
    "state":"WA",
    "FIPS":53033,
    "number":107296,
    "rate":7,
    "population":2008526,
    "county":"King County"
  },
  {
    "state":"WA",
    "FIPS":53035,
    "number":16486,
    "rate":8.5,
    "population":254659,
    "county":"Kitsap County"
  },
  {
    "state":"WA",
    "FIPS":53037,
    "number":2230,
    "rate":7,
    "population":41638,
    "county":"Kittitas County"
  },
  {
    "state":"WA",
    "FIPS":53039,
    "number":1597,
    "rate":10.1,
    "population":20613,
    "county":"Klickitat County"
  },
  {
    "state":"WA",
    "FIPS":53041,
    "number":5827,
    "rate":10.3,
    "population":75532,
    "county":"Lewis County"
  },
  {
    "state":"WA",
    "FIPS":53043,
    "number":855,
    "rate":10.8,
    "population":10437,
    "county":"Lincoln County"
  },
  {
    "state":"WA",
    "FIPS":53045,
    "number":4859,
    "rate":10.2,
    "population":60751,
    "county":"Mason County"
  },
  {
    "state":"WA",
    "FIPS":53047,
    "number":2818,
    "rate":9.2,
    "population":41218,
    "county":"Okanogan County"
  },
  {
    "state":"WA",
    "FIPS":53049,
    "number":2103,
    "rate":12.7,
    "population":20563,
    "county":"Pacific County"
  },
  {
    "state":"WA",
    "FIPS":53051,
    "number":1215,
    "rate":12.2,
    "population":12998,
    "county":"Pend Oreille County"
  },
  {
    "state":"WA",
    "FIPS":53053,
    "number":58824,
    "rate":9.9,
    "population":812363,
    "county":"Pierce County"
  },
  {
    "state":"WA",
    "FIPS":53055,
    "number":1078,
    "rate":8.2,
    "population":15792,
    "county":"San Juan County"
  },
  {
    "state":"WA",
    "FIPS":53057,
    "number":7762,
    "rate":8.8,
    "population":118005,
    "county":"Skagit County"
  },
  {
    "state":"WA",
    "FIPS":53059,
    "number":724,
    "rate":8.5,
    "population":11151,
    "county":"Skamania County"
  },
  {
    "state":"WA",
    "FIPS":53061,
    "number":52523,
    "rate":9.7,
    "population":732942,
    "county":"Snohomish County"
  },
  {
    "state":"WA",
    "FIPS":53063,
    "number":32133,
    "rate":9.1,
    "population":475704,
    "county":"Spokane County"
  },
  {
    "state":"WA",
    "FIPS":53065,
    "number":3422,
    "rate":10.5,
    "population":43610,
    "county":"Stevens County"
  },
  {
    "state":"WA",
    "FIPS":53067,
    "number":17905,
    "rate":9.2,
    "population":258713,
    "county":"Thurston County"
  },
  {
    "state":"WA",
    "FIPS":53069,
    "number":377,
    "rate":11.8,
    "population":3984,
    "county":"Wahkiakum County"
  },
  {
    "state":"WA",
    "FIPS":53071,
    "number":4108,
    "rate":9.4,
    "population":59458,
    "county":"Walla Walla County"
  },
  {
    "state":"WA",
    "FIPS":53073,
    "number":13207,
    "rate":8.5,
    "population":204827,
    "county":"Whatcom County"
  },
  {
    "state":"WA",
    "FIPS":53075,
    "number":2241,
    "rate":6.5,
    "population":46590,
    "county":"Whitman County"
  },
  {
    "state":"WA",
    "FIPS":53077,
    "number":15994,
    "rate":9.7,
    "population":246721,
    "county":"Yakima County"
  },
  {
    "state":"WI",
    "FIPS":55001,
    "number":1979,
    "rate":11.6,
    "population":20528,
    "county":"Adams County"
  },
  {
    "state":"WI",
    "FIPS":55003,
    "number":1182,
    "rate":10,
    "population":15907,
    "county":"Ashland County"
  },
  {
    "state":"WI",
    "FIPS":55005,
    "number":3212,
    "rate":9.2,
    "population":45777,
    "county":"Barron County"
  },
  {
    "state":"WI",
    "FIPS":55007,
    "number":1134,
    "rate":9.5,
    "population":15090,
    "county":"Bayfield County"
  },
  {
    "state":"WI",
    "FIPS":55009,
    "number":18034,
    "rate":9.8,
    "population":253014,
    "county":"Brown County"
  },
  {
    "state":"WI",
    "FIPS":55011,
    "number":923,
    "rate":9.1,
    "population":13332,
    "county":"Buffalo County"
  },
  {
    "state":"WI",
    "FIPS":55013,
    "number":1287,
    "rate":10.6,
    "population":15357,
    "county":"Burnett County"
  },
  {
    "state":"WI",
    "FIPS":55015,
    "number":2714,
    "rate":7.6,
    "population":49704,
    "county":"Calumet County"
  },
  {
    "state":"WI",
    "FIPS":55017,
    "number":3479,
    "rate":7.4,
    "population":63051,
    "county":"Chippewa County"
  },
  {
    "state":"WI",
    "FIPS":55019,
    "number":2199,
    "rate":9.3,
    "population":34465,
    "county":"Clark County"
  },
  {
    "state":"WI",
    "FIPS":55021,
    "number":3783,
    "rate":8.9,
    "population":56461,
    "county":"Columbia County"
  },
  {
    "state":"WI",
    "FIPS":55023,
    "number":1183,
    "rate":9.4,
    "population":16531,
    "county":"Crawford County"
  },
  {
    "state":"WI",
    "FIPS":55025,
    "number":23936,
    "rate":6.3,
    "population":503293,
    "county":"Dane County"
  },
  {
    "state":"WI",
    "FIPS":55027,
    "number":6285,
    "rate":9.3,
    "population":88576,
    "county":"Dodge County"
  },
  {
    "state":"WI",
    "FIPS":55029,
    "number":2185,
    "rate":9.8,
    "population":27710,
    "county":"Door County"
  },
  {
    "state":"WI",
    "FIPS":55031,
    "number":3137,
    "rate":9.4,
    "population":43816,
    "county":"Douglas County"
  },
  {
    "state":"WI",
    "FIPS":55033,
    "number":2716,
    "rate":8.4,
    "population":43930,
    "county":"Dunn County"
  },
  {
    "state":"WI",
    "FIPS":55035,
    "number":5769,
    "rate":7.7,
    "population":100840,
    "county":"Eau Claire County"
  },
  {
    "state":"WI",
    "FIPS":55037,
    "number":408,
    "rate":11.1,
    "population":4472,
    "county":"Florence County"
  },
  {
    "state":"WI",
    "FIPS":55041,
    "number":840,
    "rate":12,
    "population":9183,
    "county":"Forest County"
  },
  {
    "state":"WI",
    "FIPS":55043,
    "number":3167,
    "rate":8.4,
    "population":50991,
    "county":"Grant County"
  },
  {
    "state":"WI",
    "FIPS":55045,
    "number":2754,
    "rate":10,
    "population":36881,
    "county":"Green County"
  },
  {
    "state":"WI",
    "FIPS":55047,
    "number":1422,
    "rate":9.9,
    "population":19075,
    "county":"Green Lake County"
  },
  {
    "state":"WI",
    "FIPS":55049,
    "number":1622,
    "rate":9.2,
    "population":23766,
    "county":"Iowa County"
  },
  {
    "state":"WI",
    "FIPS":55051,
    "number":633,
    "rate":13,
    "population":5938,
    "county":"Iron County"
  },
  {
    "state":"WI",
    "FIPS":55039,
    "number":6660,
    "rate":8.7,
    "population":101702,
    "county":"Fond Du Lac County"
  },
  {
    "state":"WI",
    "FIPS":55053,
    "number":1504,
    "rate":9.8,
    "population":20477,
    "county":"Jackson County"
  },
  {
    "state":"WI",
    "FIPS":55055,
    "number":4834,
    "rate":7.8,
    "population":84408,
    "county":"Jefferson County"
  },
  {
    "state":"WI",
    "FIPS":55057,
    "number":2189,
    "rate":10.6,
    "population":26746,
    "county":"Juneau County"
  },
  {
    "state":"WI",
    "FIPS":55059,
    "number":9515,
    "rate":7.9,
    "population":167352,
    "county":"Kenosha County"
  },
  {
    "state":"WI",
    "FIPS":55061,
    "number":1370,
    "rate":8.9,
    "population":20618,
    "county":"Kewaunee County"
  },
  {
    "state":"WI",
    "FIPS":55063,
    "number":6611,
    "rate":7.6,
    "population":116831,
    "county":"La Crosse County"
  },
  {
    "state":"WI",
    "FIPS":55065,
    "number":1075,
    "rate":8.8,
    "population":16872,
    "county":"Lafayette County"
  },
  {
    "state":"WI",
    "FIPS":55067,
    "number":1446,
    "rate":9.5,
    "population":19729,
    "county":"Langlade County"
  },
  {
    "state":"WI",
    "FIPS":55069,
    "number":2099,
    "rate":9.6,
    "population":28472,
    "county":"Lincoln County"
  },
  {
    "state":"WI",
    "FIPS":55071,
    "number":5742,
    "rate":9.3,
    "population":80816,
    "county":"Manitowoc County"
  },
  {
    "state":"WI",
    "FIPS":55073,
    "number":9465,
    "rate":9.5,
    "population":134689,
    "county":"Marathon County"
  },
  {
    "state":"WI",
    "FIPS":55075,
    "number":3632,
    "rate":11.2,
    "population":41488,
    "county":"Marinette County"
  },
  {
    "state":"WI",
    "FIPS":55077,
    "number":1307,
    "rate":11,
    "population":15186,
    "county":"Marquette County"
  },
  {
    "state":"WI",
    "FIPS":55078,
    "number":388,
    "rate":13.8,
    "population":4373,
    "county":"Menominee County"
  },
  {
    "state":"WI",
    "FIPS":55079,
    "number":67535,
    "rate":9.8,
    "population":954521,
    "county":"Milwaukee County"
  },
  {
    "state":"WI",
    "FIPS":55081,
    "number":2895,
    "rate":8.9,
    "population":45087,
    "county":"Monroe County"
  },
  {
    "state":"WI",
    "FIPS":55083,
    "number":2673,
    "rate":9.3,
    "population":37420,
    "county":"Oconto County"
  },
  {
    "state":"WI",
    "FIPS":55085,
    "number":2885,
    "rate":10.1,
    "population":35746,
    "county":"Oneida County"
  },
  {
    "state":"WI",
    "FIPS":55087,
    "number":9968,
    "rate":7.6,
    "population":178877,
    "county":"Outagamie County"
  },
  {
    "state":"WI",
    "FIPS":55089,
    "number":5689,
    "rate":8.8,
    "population":87030,
    "county":"Ozaukee County"
  },
  {
    "state":"WI",
    "FIPS":55091,
    "number":559,
    "rate":10,
    "population":7387,
    "county":"Pepin County"
  },
  {
    "state":"WI",
    "FIPS":55093,
    "number":2430,
    "rate":8.2,
    "population":40674,
    "county":"Pierce County"
  },
  {
    "state":"WI",
    "FIPS":55095,
    "number":3497,
    "rate":10.7,
    "population":43525,
    "county":"Polk County"
  },
  {
    "state":"WI",
    "FIPS":55097,
    "number":3854,
    "rate":7.3,
    "population":70481,
    "county":"Portage County"
  },
  {
    "state":"WI",
    "FIPS":55099,
    "number":1327,
    "rate":12,
    "population":13870,
    "county":"Price County"
  },
  {
    "state":"WI",
    "FIPS":55101,
    "number":14354,
    "rate":10.1,
    "population":194683,
    "county":"Racine County"
  },
  {
    "state":"WI",
    "FIPS":55103,
    "number":1387,
    "rate":10.4,
    "population":17799,
    "county":"Richland County"
  },
  {
    "state":"WI",
    "FIPS":55105,
    "number":11216,
    "rate":9.6,
    "population":160271,
    "county":"Rock County"
  },
  {
    "state":"WI",
    "FIPS":55107,
    "number":970,
    "rate":8.9,
    "population":14302,
    "county":"Rusk County"
  },
  {
    "state":"WI",
    "FIPS":55111,
    "number":5212,
    "rate":11.2,
    "population":62540,
    "county":"Sauk County"
  },
  {
    "state":"WI",
    "FIPS":55113,
    "number":1293,
    "rate":10.1,
    "population":16540,
    "county":"Sawyer County"
  },
  {
    "state":"WI",
    "FIPS":55115,
    "number":3057,
    "rate":9.7,
    "population":41603,
    "county":"Shawano County"
  },
  {
    "state":"WI",
    "FIPS":55117,
    "number":8654,
    "rate":10.1,
    "population":114952,
    "county":"Sheboygan County"
  },
  {
    "state":"WI",
    "FIPS":55109,
    "number":4812,
    "rate":7.9,
    "population":85220,
    "county":"St Croix County"
  },
  {
    "state":"WI",
    "FIPS":55119,
    "number":1143,
    "rate":7.6,
    "population":20474,
    "county":"Taylor County"
  },
  {
    "state":"WI",
    "FIPS":55121,
    "number":2067,
    "rate":9.6,
    "population":29371,
    "county":"Trempealeau County"
  },
  {
    "state":"WI",
    "FIPS":55123,
    "number":1828,
    "rate":8.4,
    "population":30203,
    "county":"Vernon County"
  },
  {
    "state":"WI",
    "FIPS":55125,
    "number":2012,
    "rate":11.7,
    "population":21281,
    "county":"Vilas County"
  },
  {
    "state":"WI",
    "FIPS":55127,
    "number":6207,
    "rate":8.2,
    "population":103052,
    "county":"Walworth County"
  },
  {
    "state":"WI",
    "FIPS":55129,
    "number":1207,
    "rate":9.8,
    "population":15835,
    "county":"Washburn County"
  },
  {
    "state":"WI",
    "FIPS":55131,
    "number":8518,
    "rate":8.7,
    "population":132581,
    "county":"Washington County"
  },
  {
    "state":"WI",
    "FIPS":55133,
    "number":21429,
    "rate":7.3,
    "population":392623,
    "county":"Waukesha County"
  },
  {
    "state":"WI",
    "FIPS":55135,
    "number":3709,
    "rate":9.4,
    "population":52028,
    "county":"Waupaca County"
  },
  {
    "state":"WI",
    "FIPS":55137,
    "number":1879,
    "rate":9.8,
    "population":24477,
    "county":"Waushara County"
  },
  {
    "state":"WI",
    "FIPS":55139,
    "number":10212,
    "rate":8,
    "population":168634,
    "county":"Winnebago County"
  },
  {
    "state":"WI",
    "FIPS":55141,
    "number":5079,
    "rate":9,
    "population":74354,
    "county":"Wood County"
  },
  {
    "state":"WV",
    "FIPS":54001,
    "number":1721,
    "rate":13.5,
    "population":16860,
    "county":"Barbour County"
  },
  {
    "state":"WV",
    "FIPS":54003,
    "number":9180,
    "rate":11.7,
    "population":107062,
    "county":"Berkeley County"
  },
  {
    "state":"WV",
    "FIPS":54005,
    "number":2720,
    "rate":14.8,
    "population":24397,
    "county":"Boone County"
  },
  {
    "state":"WV",
    "FIPS":54007,
    "number":1684,
    "rate":14.9,
    "population":14485,
    "county":"Braxton County"
  },
  {
    "state":"WV",
    "FIPS":54009,
    "number":2691,
    "rate":14.4,
    "population":23791,
    "county":"Brooke County"
  },
  {
    "state":"WV",
    "FIPS":54011,
    "number":10275,
    "rate":13.8,
    "population":96935,
    "county":"Cabell County"
  },
  {
    "state":"WV",
    "FIPS":54013,
    "number":927,
    "rate":15.6,
    "population":7591,
    "county":"Calhoun County"
  },
  {
    "state":"WV",
    "FIPS":54015,
    "number":913,
    "rate":13.2,
    "population":9251,
    "county":"Clay County"
  },
  {
    "state":"WV",
    "FIPS":54017,
    "number":781,
    "rate":12.2,
    "population":8220,
    "county":"Doddridge County"
  },
  {
    "state":"WV",
    "FIPS":54019,
    "number":4384,
    "rate":12.4,
    "population":45898,
    "county":"Fayette County"
  },
  {
    "state":"WV",
    "FIPS":54021,
    "number":819,
    "rate":11.4,
    "population":8778,
    "county":"Gilmer County"
  },
  {
    "state":"WV",
    "FIPS":54023,
    "number":1475,
    "rate":16.1,
    "population":11841,
    "county":"Grant County"
  },
  {
    "state":"WV",
    "FIPS":54025,
    "number":3490,
    "rate":12.5,
    "population":35806,
    "county":"Greenbrier County"
  },
  {
    "state":"WV",
    "FIPS":54027,
    "number":2195,
    "rate":12.1,
    "population":23678,
    "county":"Hampshire County"
  },
  {
    "state":"WV",
    "FIPS":54029,
    "number":2907,
    "rate":12.3,
    "population":30328,
    "county":"Hancock County"
  },
  {
    "state":"WV",
    "FIPS":54031,
    "number":1546,
    "rate":14.4,
    "population":13870,
    "county":"Hardy County"
  },
  {
    "state":"WV",
    "FIPS":54033,
    "number":7080,
    "rate":13.4,
    "population":69148,
    "county":"Harrison County"
  },
  {
    "state":"WV",
    "FIPS":54035,
    "number":2826,
    "rate":12.7,
    "population":29280,
    "county":"Jackson County"
  },
  {
    "state":"WV",
    "FIPS":54037,
    "number":4529,
    "rate":11.3,
    "population":54566,
    "county":"Jefferson County"
  },
  {
    "state":"WV",
    "FIPS":54039,
    "number":20569,
    "rate":13.8,
    "population":192152,
    "county":"Kanawha County"
  },
  {
    "state":"WV",
    "FIPS":54041,
    "number":1627,
    "rate":12.8,
    "population":16426,
    "county":"Lewis County"
  },
  {
    "state":"WV",
    "FIPS":54043,
    "number":2634,
    "rate":16.1,
    "population":21638,
    "county":"Lincoln County"
  },
  {
    "state":"WV",
    "FIPS":54045,
    "number":4331,
    "rate":15.4,
    "population":36336,
    "county":"Logan County"
  },
  {
    "state":"WV",
    "FIPS":54049,
    "number":5402,
    "rate":12.3,
    "population":56787,
    "county":"Marion County"
  },
  {
    "state":"WV",
    "FIPS":54051,
    "number":3153,
    "rate":12.4,
    "population":32684,
    "county":"Marshall County"
  },
  {
    "state":"WV",
    "FIPS":54053,
    "number":2657,
    "rate":12.7,
    "population":27222,
    "county":"Mason County"
  },
  {
    "state":"WV",
    "FIPS":54047,
    "number":3001,
    "rate":18,
    "population":21314,
    "county":"McDowell County"
  },
  {
    "state":"WV",
    "FIPS":54055,
    "number":7231,
    "rate":15.1,
    "population":62358,
    "county":"Mercer County"
  },
  {
    "state":"WV",
    "FIPS":54057,
    "number":2674,
    "rate":12.6,
    "population":27933,
    "county":"Mineral County"
  },
  {
    "state":"WV",
    "FIPS":54059,
    "number":2702,
    "rate":13.5,
    "population":26122,
    "county":"Mingo County"
  },
  {
    "state":"WV",
    "FIPS":54061,
    "number":7312,
    "rate":9.3,
    "population":100531,
    "county":"Monongalia County"
  },
  {
    "state":"WV",
    "FIPS":54063,
    "number":1389,
    "rate":13.3,
    "population":13492,
    "county":"Monroe County"
  },
  {
    "state":"WV",
    "FIPS":54065,
    "number":1905,
    "rate":13.9,
    "population":17433,
    "county":"Morgan County"
  },
  {
    "state":"WV",
    "FIPS":54067,
    "number":2883,
    "rate":14.2,
    "population":26252,
    "county":"Nicholas County"
  },
  {
    "state":"WV",
    "FIPS":54069,
    "number":4114,
    "rate":12.1,
    "population":44056,
    "county":"Ohio County"
  },
  {
    "state":"WV",
    "FIPS":54071,
    "number":824,
    "rate":13.7,
    "population":7532,
    "county":"Pendleton County"
  },
  {
    "state":"WV",
    "FIPS":54073,
    "number":811,
    "rate":13.7,
    "population":7592,
    "county":"Pleasants County"
  },
  {
    "state":"WV",
    "FIPS":54075,
    "number":969,
    "rate":13.8,
    "population":8697,
    "county":"Pocahontas County"
  },
  {
    "state":"WV",
    "FIPS":54077,
    "number":2837,
    "rate":10.6,
    "population":33910,
    "county":"Preston County"
  },
  {
    "state":"WV",
    "FIPS":54079,
    "number":5050,
    "rate":12,
    "population":56589,
    "county":"Putnam County"
  },
  {
    "state":"WV",
    "FIPS":54081,
    "number":8393,
    "rate":13.8,
    "population":79122,
    "county":"Raleigh County"
  },
  {
    "state":"WV",
    "FIPS":54083,
    "number":2690,
    "rate":11.7,
    "population":29420,
    "county":"Randolph County"
  },
  {
    "state":"WV",
    "FIPS":54085,
    "number":1153,
    "rate":14.6,
    "population":10269,
    "county":"Ritchie County"
  },
  {
    "state":"WV",
    "FIPS":54087,
    "number":1730,
    "rate":15.3,
    "population":14710,
    "county":"Roane County"
  },
  {
    "state":"WV",
    "FIPS":54089,
    "number":1620,
    "rate":14.6,
    "population":13761,
    "county":"Summers County"
  },
  {
    "state":"WV",
    "FIPS":54091,
    "number":1609,
    "rate":12.2,
    "population":16984,
    "county":"Taylor County"
  },
  {
    "state":"WV",
    "FIPS":54093,
    "number":730,
    "rate":13.2,
    "population":6941,
    "county":"Tucker County"
  },
  {
    "state":"WV",
    "FIPS":54095,
    "number":921,
    "rate":13.1,
    "population":9033,
    "county":"Tyler County"
  },
  {
    "state":"WV",
    "FIPS":54097,
    "number":2341,
    "rate":12.6,
    "population":24506,
    "county":"Upshur County"
  },
  {
    "state":"WV",
    "FIPS":54099,
    "number":5050,
    "rate":15.9,
    "population":41672,
    "county":"Wayne County"
  },
  {
    "state":"WV",
    "FIPS":54101,
    "number":1118,
    "rate":16,
    "population":9016,
    "county":"Webster County"
  },
  {
    "state":"WV",
    "FIPS":54103,
    "number":1614,
    "rate":12.7,
    "population":16420,
    "county":"Wetzel County"
  },
  {
    "state":"WV",
    "FIPS":54105,
    "number":674,
    "rate":15,
    "population":5806,
    "county":"Wirt County"
  },
  {
    "state":"WV",
    "FIPS":54107,
    "number":9082,
    "rate":13.7,
    "population":86561,
    "county":"Wood County"
  },
  {
    "state":"WV",
    "FIPS":54109,
    "number":2489,
    "rate":14,
    "population":23251,
    "county":"Wyoming County"
  },
  {
    "state":"WY",
    "FIPS":56001,
    "number":1668,
    "rate":5.8,
    "population":37363,
    "county":"Albany County"
  },
  {
    "state":"WY",
    "FIPS":56003,
    "number":926,
    "rate":10.9,
    "population":11778,
    "county":"Big Horn County"
  },
  {
    "state":"WY",
    "FIPS":56005,
    "number":2325,
    "rate":7,
    "population":47897,
    "county":"Campbell County"
  },
  {
    "state":"WY",
    "FIPS":56007,
    "number":1023,
    "rate":8.7,
    "population":15679,
    "county":"Carbon County"
  },
  {
    "state":"WY",
    "FIPS":56009,
    "number":976,
    "rate":9.6,
    "population":14005,
    "county":"Converse County"
  },
  {
    "state":"WY",
    "FIPS":56011,
    "number":488,
    "rate":9.1,
    "population":7139,
    "county":"Crook County"
  },
  {
    "state":"WY",
    "FIPS":56013,
    "number":2858,
    "rate":9.6,
    "population":41125,
    "county":"Fremont County"
  },
  {
    "state":"WY",
    "FIPS":56015,
    "number":961,
    "rate":9.1,
    "population":13670,
    "county":"Goshen County"
  },
  {
    "state":"WY",
    "FIPS":56017,
    "number":388,
    "rate":10.3,
    "population":4845,
    "county":"Hot Springs County"
  },
  {
    "state":"WY",
    "FIPS":56019,
    "number":620,
    "rate":9.5,
    "population":8606,
    "county":"Johnson County"
  },
  {
    "state":"WY",
    "FIPS":56021,
    "number":6533,
    "rate":9.3,
    "population":94849,
    "county":"Laramie County"
  },
  {
    "state":"WY",
    "FIPS":56023,
    "number":924,
    "rate":7.3,
    "population":17926,
    "county":"Lincoln County"
  },
  {
    "state":"WY",
    "FIPS":56025,
    "number":5174,
    "rate":8.9,
    "population":78686,
    "county":"Natrona County"
  },
  {
    "state":"WY",
    "FIPS":56027,
    "number":173,
    "rate":8.7,
    "population":2475,
    "county":"Niobrara County"
  },
  {
    "state":"WY",
    "FIPS":56029,
    "number":1671,
    "rate":7.6,
    "population":28805,
    "county":"Park County"
  },
  {
    "state":"WY",
    "FIPS":56031,
    "number":587,
    "rate":8.6,
    "population":8735,
    "county":"Platte County"
  },
  {
    "state":"WY",
    "FIPS":56033,
    "number":2010,
    "rate":9,
    "population":29598,
    "county":"Sheridan County"
  },
  {
    "state":"WY",
    "FIPS":56035,
    "number":487,
    "rate":6.3,
    "population":10412,
    "county":"Sublette County"
  },
  {
    "state":"WY",
    "FIPS":56037,
    "number":2549,
    "rate":8,
    "population":45115,
    "county":"Sweetwater County"
  },
  {
    "state":"WY",
    "FIPS":56039,
    "number":820,
    "rate":4.8,
    "population":21704,
    "county":"Teton County"
  },
  {
    "state":"WY",
    "FIPS":56041,
    "number":1235,
    "rate":8.7,
    "population":20989,
    "county":"Uinta County"
  },
  {
    "state":"WY",
    "FIPS":56043,
    "number":681,
    "rate":11.1,
    "population":8441,
    "county":"Washakie County"
  },
  {
    "state":"WY",
    "FIPS":56045,
    "number":526,
    "rate":9.8,
    "population":7051,
    "county":"Weston County"
  }
]
    return diabetes;

  });


