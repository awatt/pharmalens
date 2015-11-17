'use strict';

angular.module('foglightApp')
  .factory('diabetes', function () {

    var diabetes = [
  {
    "id":2013,
    "number":214,
    "rate":7.8,
    "state":"AK",
    "name":"Aleutians East Borough"
  },
  {
    "id":2016,
    "number":297,
    "rate":6.3,
    "state":"AK",
    "name":"Aleutians West Census Area"
  },
  {
    "id":2020,
    "number":15195,
    "rate":7.1,
    "state":"AK",
    "name":"Municipality of Anchorage"
  },
  {
    "id":2050,
    "number":658,
    "rate":6.1,
    "state":"AK",
    "name":"Bethel Census Area"
  },
  {
    "id":2060,
    "number":64,
    "rate":8.8,
    "state":"AK",
    "name":"Bristol Bay Borough"
  },
  {
    "id":2068,
    "number":83,
    "rate":5.8,
    "state":"AK",
    "name":"Denali Borough"
  },
  {
    "id":2070,
    "number":237,
    "rate":7.4,
    "state":"AK",
    "name":"Dillingham Census Area"
  },
  {
    "id":2090,
    "number":4129,
    "rate":5.7,
    "state":"AK",
    "name":"Fairbanks North Star Borough"
  },
  {
    "id":2100,
    "number":140,
    "rate":7,
    "state":"AK",
    "name":"Haines Borough"
  },
  {
    "id":2105,
    "number":135,
    "rate":8.1,
    "state":"AK",
    "name":"Hoonah-Angoon Borough"
  },
  {
    "id":2110,
    "number":1487,
    "rate":6.1,
    "state":"AK",
    "name":"Juneau Borough"
  },
  {
    "id":2122,
    "number":2994,
    "rate":7.1,
    "state":"AK",
    "name":"Kenai Peninsula Borough"
  },
  {
    "id":2130,
    "number":891,
    "rate":8.7,
    "state":"AK",
    "name":"Ketchikan Gateway Borough"
  },
  {
    "id":2150,
    "number":585,
    "rate":5.9,
    "state":"AK",
    "name":"Kodiak Island Borough"
  },
  {
    "id":2164,
    "number":88,
    "rate":8,
    "state":"AK",
    "name":"Lake and Peninsula Borough"
  },
  {
    "id":2170,
    "number":5238,
    "rate":8.1,
    "state":"AK",
    "name":"Matanuska-Susitna Borough"
  },
  {
    "id":2180,
    "number":426,
    "rate":6.9,
    "state":"AK",
    "name":"Nome Census Area"
  },
  {
    "id":2185,
    "number":518,
    "rate":7.4,
    "state":"AK",
    "name":"North Slope Borough"
  },
  {
    "id":2188,
    "number":324,
    "rate":6.8,
    "state":"AK",
    "name":"Northwest Arctic Borough"
  },
  {
    "id":2195,
    "number":201,
    "rate":7,
    "state":"AK",
    "name":"Petersburg Borough"
  },
  {
    "id":2198,
    "number":323,
    "rate":7.7,
    "state":"AK",
    "name":"Prince of Wales-Outer Ketchikan Borough"
  },
  {
    "id":2220,
    "number":502,
    "rate":7.4,
    "state":"AK",
    "name":"Sitka Borough"
  },
  {
    "id":2230,
    "number":56,
    "rate":6.7,
    "state":"AK",
    "name":"Skagway Borough"
  },
  {
    "id":2240,
    "number":333,
    "rate":6.5,
    "state":"AK",
    "name":"Southeast Fairbanks Census Area"
  },
  {
    "id":2261,
    "number":472,
    "rate":6.7,
    "state":"AK",
    "name":"Valdez-Cordova Census Area"
  },
  {
    "id":2270,
    "number":232,
    "rate":5.4,
    "state":"AK",
    "name":"Wade Hampton Census Area"
  },
  {
    "id":2275,
    "number":159,
    "rate":8.7,
    "state":"AK",
    "name":"Wrangell Borough"
  },
  {
    "id":2282,
    "number":39,
    "rate":7.9,
    "state":"AK",
    "name":"Yakutat Borough"
  },
  {
    "id":2290,
    "number":328,
    "rate":8.1,
    "state":"AK",
    "name":"Yukon-Koyukuk Census Area"
  },
  {
    "id":1001,
    "number":4724,
    "rate":12,
    "state":"AL",
    "name":"Autauga County"
  },
  {
    "id":1003,
    "number":15437,
    "rate":10.8,
    "state":"AL",
    "name":"Baldwin County"
  },
  {
    "id":1005,
    "number":3377,
    "rate":16.2,
    "state":"AL",
    "name":"Barbour County"
  },
  {
    "id":1007,
    "number":2276,
    "rate":13.2,
    "state":"AL",
    "name":"Bibb County"
  },
  {
    "id":1009,
    "number":5869,
    "rate":13.8,
    "state":"AL",
    "name":"Blount County"
  },
  {
    "id":1011,
    "number":1527,
    "rate":18.6,
    "state":"AL",
    "name":"Bullock County"
  },
  {
    "id":1013,
    "number":2507,
    "rate":16.4,
    "state":"AL",
    "name":"Butler County"
  },
  {
    "id":1015,
    "number":12582,
    "rate":14.3,
    "state":"AL",
    "name":"Calhoun County"
  },
  {
    "id":1017,
    "number":4102,
    "rate":15.8,
    "state":"AL",
    "name":"Chambers County"
  },
  {
    "id":1019,
    "number":2993,
    "rate":14.9,
    "state":"AL",
    "name":"Cherokee County"
  },
  {
    "id":1021,
    "number":4234,
    "rate":13.2,
    "state":"AL",
    "name":"Chilton County"
  },
  {
    "id":1023,
    "number":1960,
    "rate":18.9,
    "state":"AL",
    "name":"Choctaw County"
  },
  {
    "id":1025,
    "number":2948,
    "rate":15.8,
    "state":"AL",
    "name":"Clarke County"
  },
  {
    "id":1027,
    "number":1455,
    "rate":14.3,
    "state":"AL",
    "name":"Clay County"
  },
  {
    "id":1029,
    "number":1484,
    "rate":13.3,
    "state":"AL",
    "name":"Cleburne County"
  },
  {
    "id":1031,
    "number":5313,
    "rate":14,
    "state":"AL",
    "name":"Coffee County"
  },
  {
    "id":1033,
    "number":6928,
    "rate":16.8,
    "state":"AL",
    "name":"Colbert County"
  },
  {
    "id":1035,
    "number":1746,
    "rate":17.8,
    "state":"AL",
    "name":"Conecuh County"
  },
  {
    "id":1037,
    "number":1441,
    "rate":16.7,
    "state":"AL",
    "name":"Coosa County"
  },
  {
    "id":1039,
    "number":4435,
    "rate":15.5,
    "state":"AL",
    "name":"Covington County"
  },
  {
    "id":1041,
    "number":1604,
    "rate":15.4,
    "state":"AL",
    "name":"Crenshaw County"
  },
  {
    "id":1043,
    "number":8293,
    "rate":13.7,
    "state":"AL",
    "name":"Cullman County"
  },
  {
    "id":1045,
    "number":5358,
    "rate":14.5,
    "state":"AL",
    "name":"Dale County"
  },
  {
    "id":1047,
    "number":5347,
    "rate":17.5,
    "state":"AL",
    "name":"Dallas County"
  },
  {
    "id":1049,
    "number":7716,
    "rate":15,
    "state":"AL",
    "name":"Dekalb County"
  },
  {
    "id":1051,
    "number":7530,
    "rate":12.6,
    "state":"AL",
    "name":"Elmore County"
  },
  {
    "id":1053,
    "number":4630,
    "rate":16.1,
    "state":"AL",
    "name":"Escambia County"
  },
  {
    "id":1055,
    "number":11804,
    "rate":15.1,
    "state":"AL",
    "name":"Etowah County"
  },
  {
    "id":1057,
    "number":2045,
    "rate":15.8,
    "state":"AL",
    "name":"Fayette County"
  },
  {
    "id":1059,
    "number":3121,
    "rate":13.5,
    "state":"AL",
    "name":"Franklin County"
  },
  {
    "id":1061,
    "number":2996,
    "rate":14.7,
    "state":"AL",
    "name":"Geneva County"
  },
  {
    "id":1063,
    "number":1379,
    "rate":21,
    "state":"AL",
    "name":"Greene County"
  },
  {
    "id":1065,
    "number":1956,
    "rate":17.2,
    "state":"AL",
    "name":"Hale County"
  },
  {
    "id":1067,
    "number":2188,
    "rate":16.7,
    "state":"AL",
    "name":"Henry County"
  },
  {
    "id":1069,
    "number":10657,
    "rate":14,
    "state":"AL",
    "name":"Houston County"
  },
  {
    "id":1071,
    "number":5735,
    "rate":14.3,
    "state":"AL",
    "name":"Jackson County"
  },
  {
    "id":1073,
    "number":60238,
    "rate":12.3,
    "state":"AL",
    "name":"Jefferson County"
  },
  {
    "id":1075,
    "number":1748,
    "rate":16.1,
    "state":"AL",
    "name":"Lamar County"
  },
  {
    "id":1077,
    "number":9158,
    "rate":13,
    "state":"AL",
    "name":"Lauderdale County"
  },
  {
    "id":1079,
    "number":3977,
    "rate":15.7,
    "state":"AL",
    "name":"Lawrence County"
  },
  {
    "id":1081,
    "number":10552,
    "rate":9.7,
    "state":"AL",
    "name":"Lee County"
  },
  {
    "id":1085,
    "number":1880,
    "rate":23.5,
    "state":"AL",
    "name":"Lowndes County"
  },
  {
    "id":1087,
    "number":2708,
    "rate":17.8,
    "state":"AL",
    "name":"Macon County"
  },
  {
    "id":1083,
    "number":7745,
    "rate":11.9,
    "state":"AL",
    "name":"Limestone County"
  },
  {
    "id":1089,
    "number":29744,
    "rate":11.7,
    "state":"AL",
    "name":"Madison County"
  },
  {
    "id":1091,
    "number":2778,
    "rate":18.5,
    "state":"AL",
    "name":"Marengo County"
  },
  {
    "id":1093,
    "number":3884,
    "rate":16.6,
    "state":"AL",
    "name":"Marion County"
  },
  {
    "id":1095,
    "number":9247,
    "rate":13.5,
    "state":"AL",
    "name":"Marshall County"
  },
  {
    "id":1097,
    "number":41997,
    "rate":13.9,
    "state":"AL",
    "name":"Mobile County"
  },
  {
    "id":1099,
    "number":2660,
    "rate":16.1,
    "state":"AL",
    "name":"Monroe County"
  },
  {
    "id":1101,
    "number":22734,
    "rate":13.8,
    "state":"AL",
    "name":"Montgomery County"
  },
  {
    "id":1103,
    "number":12160,
    "rate":13.6,
    "state":"AL",
    "name":"Morgan County"
  },
  {
    "id":1105,
    "number":1285,
    "rate":17.9,
    "state":"AL",
    "name":"Perry County"
  },
  {
    "id":1107,
    "number":2584,
    "rate":17.8,
    "state":"AL",
    "name":"Pickens County"
  },
  {
    "id":1109,
    "number":3468,
    "rate":14,
    "state":"AL",
    "name":"Pike County"
  },
  {
    "id":1111,
    "number":2718,
    "rate":16.1,
    "state":"AL",
    "name":"Randolph County"
  },
  {
    "id":1113,
    "number":5782,
    "rate":13.9,
    "state":"AL",
    "name":"Russell County"
  },
  {
    "id":1117,
    "number":12622,
    "rate":8.6,
    "state":"AL",
    "name":"Shelby County"
  },
  {
    "id":1115,
    "number":8222,
    "rate":13,
    "state":"AL",
    "name":"St. Clair County"
  },
  {
    "id":1119,
    "number":1589,
    "rate":16,
    "state":"AL",
    "name":"Sumter County"
  },
  {
    "id":1121,
    "number":8356,
    "rate":13.6,
    "state":"AL",
    "name":"Talladega County"
  },
  {
    "id":1123,
    "number":4502,
    "rate":14.4,
    "state":"AL",
    "name":"Tallapoosa County"
  },
  {
    "id":1125,
    "number":16403,
    "rate":11.2,
    "state":"AL",
    "name":"Tuscaloosa County"
  },
  {
    "id":1127,
    "number":7742,
    "rate":15.5,
    "state":"AL",
    "name":"Walker County"
  },
  {
    "id":1129,
    "number":2050,
    "rate":16.3,
    "state":"AL",
    "name":"Washington County"
  },
  {
    "id":1131,
    "number":1645,
    "rate":20.1,
    "state":"AL",
    "name":"Wilcox County"
  },
  {
    "id":1133,
    "number":2268,
    "rate":12.2,
    "state":"AL",
    "name":"Winston County"
  },
  {
    "id":5001,
    "number":1829,
    "rate":13,
    "state":"AR",
    "name":"Arkansas County"
  },
  {
    "id":5003,
    "number":2135,
    "rate":13.4,
    "state":"AR",
    "name":"Ashley County"
  },
  {
    "id":5005,
    "number":4364,
    "rate":13.2,
    "state":"AR",
    "name":"Baxter County"
  },
  {
    "id":5007,
    "number":16401,
    "rate":10,
    "state":"AR",
    "name":"Benton County"
  },
  {
    "id":5009,
    "number":3403,
    "rate":12.2,
    "state":"AR",
    "name":"Boone County"
  },
  {
    "id":5011,
    "number":1057,
    "rate":12.5,
    "state":"AR",
    "name":"Bradley County"
  },
  {
    "id":5013,
    "number":540,
    "rate":12.9,
    "state":"AR",
    "name":"Calhoun County"
  },
  {
    "id":5015,
    "number":2616,
    "rate":12.5,
    "state":"AR",
    "name":"Carroll County"
  },
  {
    "id":5017,
    "number":1399,
    "rate":16.4,
    "state":"AR",
    "name":"Chicot County"
  },
  {
    "id":5019,
    "number":1933,
    "rate":11.5,
    "state":"AR",
    "name":"Clark County"
  },
  {
    "id":5021,
    "number":1330,
    "rate":11.2,
    "state":"AR",
    "name":"Clay County"
  },
  {
    "id":5023,
    "number":2759,
    "rate":13.7,
    "state":"AR",
    "name":"Cleburne County"
  },
  {
    "id":5025,
    "number":916,
    "rate":14.4,
    "state":"AR",
    "name":"Cleveland County"
  },
  {
    "id":5027,
    "number":2226,
    "rate":12.6,
    "state":"AR",
    "name":"Columbia County"
  },
  {
    "id":5029,
    "number":1984,
    "rate":12.6,
    "state":"AR",
    "name":"Conway County"
  },
  {
    "id":5031,
    "number":8765,
    "rate":12.2,
    "state":"AR",
    "name":"Craighead County"
  },
  {
    "id":5033,
    "number":4959,
    "rate":11.1,
    "state":"AR",
    "name":"Crawford County"
  },
  {
    "id":5035,
    "number":5381,
    "rate":15.6,
    "state":"AR",
    "name":"Crittenden County"
  },
  {
    "id":5037,
    "number":1749,
    "rate":13.6,
    "state":"AR",
    "name":"Cross County"
  },
  {
    "id":5039,
    "number":843,
    "rate":14.1,
    "state":"AR",
    "name":"Dallas County"
  },
  {
    "id":5041,
    "number":1296,
    "rate":14.4,
    "state":"AR",
    "name":"Desha County"
  },
  {
    "id":5043,
    "number":1695,
    "rate":12.4,
    "state":"AR",
    "name":"Drew County"
  },
  {
    "id":5045,
    "number":9247,
    "rate":10.8,
    "state":"AR",
    "name":"Faulkner County"
  },
  {
    "id":5047,
    "number":1673,
    "rate":12.7,
    "state":"AR",
    "name":"Franklin County"
  },
  {
    "id":5049,
    "number":1316,
    "rate":13.9,
    "state":"AR",
    "name":"Fulton County"
  },
  {
    "id":5051,
    "number":10348,
    "rate":13.9,
    "state":"AR",
    "name":"Garland County"
  },
  {
    "id":5053,
    "number":1448,
    "rate":10.9,
    "state":"AR",
    "name":"Grant County"
  },
  {
    "id":5055,
    "number":4318,
    "rate":13.8,
    "state":"AR",
    "name":"Greene County"
  },
  {
    "id":5057,
    "number":2265,
    "rate":14.2,
    "state":"AR",
    "name":"Hempstead County"
  },
  {
    "id":5059,
    "number":3054,
    "rate":12.1,
    "state":"AR",
    "name":"Hot Spring County"
  },
  {
    "id":5061,
    "number":1183,
    "rate":12,
    "state":"AR",
    "name":"Howard County"
  },
  {
    "id":5063,
    "number":3164,
    "rate":11.7,
    "state":"AR",
    "name":"Independence County"
  },
  {
    "id":5065,
    "number":1385,
    "rate":12.9,
    "state":"AR",
    "name":"Izard County"
  },
  {
    "id":5067,
    "number":1724,
    "rate":12.7,
    "state":"AR",
    "name":"Jackson County"
  },
  {
    "id":5071,
    "number":2368,
    "rate":12.7,
    "state":"AR",
    "name":"Johnson County"
  },
  {
    "id":5069,
    "number":8230,
    "rate":15,
    "state":"AR",
    "name":"Jefferson County"
  },
  {
    "id":5073,
    "number":864,
    "rate":15.3,
    "state":"AR",
    "name":"Lafayette County"
  },
  {
    "id":5075,
    "number":1533,
    "rate":12.1,
    "state":"AR",
    "name":"Lawrence County"
  },
  {
    "id":5077,
    "number":1032,
    "rate":13.1,
    "state":"AR",
    "name":"Lee County"
  },
  {
    "id":5079,
    "number":1248,
    "rate":11.1,
    "state":"AR",
    "name":"Lincoln County"
  },
  {
    "id":5081,
    "number":1225,
    "rate":12.8,
    "state":"AR",
    "name":"Little River County"
  },
  {
    "id":5083,
    "number":2074,
    "rate":12.7,
    "state":"AR",
    "name":"Logan County"
  },
  {
    "id":5085,
    "number":6221,
    "rate":12.6,
    "state":"AR",
    "name":"Lonoke County"
  },
  {
    "id":5087,
    "number":1467,
    "rate":12.7,
    "state":"AR",
    "name":"Madison County"
  },
  {
    "id":5089,
    "number":1648,
    "rate":12.3,
    "state":"AR",
    "name":"Marion County"
  },
  {
    "id":5091,
    "number":3792,
    "rate":11.8,
    "state":"AR",
    "name":"Miller County"
  },
  {
    "id":5093,
    "number":4699,
    "rate":14.7,
    "state":"AR",
    "name":"Mississippi County"
  },
  {
    "id":5095,
    "number":986,
    "rate":16.5,
    "state":"AR",
    "name":"Monroe County"
  },
  {
    "id":5097,
    "number":907,
    "rate":12.5,
    "state":"AR",
    "name":"Montgomery County"
  },
  {
    "id":5099,
    "number":926,
    "rate":13.9,
    "state":"AR",
    "name":"Nevada County"
  },
  {
    "id":5101,
    "number":740,
    "rate":11.7,
    "state":"AR",
    "name":"Newton County"
  },
  {
    "id":5103,
    "number":2535,
    "rate":13.4,
    "state":"AR",
    "name":"Ouachita County"
  },
  {
    "id":5105,
    "number":944,
    "rate":12.1,
    "state":"AR",
    "name":"Perry County"
  },
  {
    "id":5107,
    "number":2206,
    "rate":15.2,
    "state":"AR",
    "name":"Phillips County"
  },
  {
    "id":5109,
    "number":1015,
    "rate":12.3,
    "state":"AR",
    "name":"Pike County"
  },
  {
    "id":5111,
    "number":2267,
    "rate":12.7,
    "state":"AR",
    "name":"Poinsett County"
  },
  {
    "id":5113,
    "number":1946,
    "rate":12.8,
    "state":"AR",
    "name":"Polk County"
  },
  {
    "id":5115,
    "number":5387,
    "rate":11.8,
    "state":"AR",
    "name":"Pope County"
  },
  {
    "id":5117,
    "number":886,
    "rate":13.6,
    "state":"AR",
    "name":"Prairie County"
  },
  {
    "id":5119,
    "number":32251,
    "rate":11.2,
    "state":"AR",
    "name":"Pulaski County"
  },
  {
    "id":5121,
    "number":1480,
    "rate":11,
    "state":"AR",
    "name":"Randolph County"
  },
  {
    "id":5125,
    "number":8689,
    "rate":10.5,
    "state":"AR",
    "name":"Saline County"
  },
  {
    "id":5127,
    "number":986,
    "rate":12.3,
    "state":"AR",
    "name":"Scott County"
  },
  {
    "id":5129,
    "number":799,
    "rate":12.8,
    "state":"AR",
    "name":"Searcy County"
  },
  {
    "id":5131,
    "number":11806,
    "rate":12.8,
    "state":"AR",
    "name":"Sebastian County"
  },
  {
    "id":5133,
    "number":1434,
    "rate":12.2,
    "state":"AR",
    "name":"Sevier County"
  },
  {
    "id":5135,
    "number":1691,
    "rate":12.9,
    "state":"AR",
    "name":"Sharp County"
  },
  {
    "id":5123,
    "number":2841,
    "rate":13.7,
    "state":"AR",
    "name":"St. Francis County"
  },
  {
    "id":5137,
    "number":1286,
    "rate":13.2,
    "state":"AR",
    "name":"Stone County"
  },
  {
    "id":5139,
    "number":3963,
    "rate":13.1,
    "state":"AR",
    "name":"Union County"
  },
  {
    "id":5141,
    "number":1805,
    "rate":13.6,
    "state":"AR",
    "name":"Van Buren County"
  },
  {
    "id":5143,
    "number":11726,
    "rate":7.9,
    "state":"AR",
    "name":"Washington County"
  },
  {
    "id":5145,
    "number":5751,
    "rate":10.1,
    "state":"AR",
    "name":"White County"
  },
  {
    "id":5147,
    "number":741,
    "rate":13.9,
    "state":"AR",
    "name":"Woodruff County"
  },
  {
    "id":5149,
    "number":1948,
    "rate":12.3,
    "state":"AR",
    "name":"Yell County"
  },
  {
    "id":4001,
    "number":7363,
    "rate":15.3,
    "state":"AZ",
    "name":"Apache County"
  },
  {
    "id":4003,
    "number":9600,
    "rate":9.8,
    "state":"AZ",
    "name":"Cochise County"
  },
  {
    "id":4005,
    "number":7304,
    "rate":7.5,
    "state":"AZ",
    "name":"Coconino County"
  },
  {
    "id":4007,
    "number":4801,
    "rate":11.8,
    "state":"AZ",
    "name":"Gila County"
  },
  {
    "id":4009,
    "number":2504,
    "rate":9.9,
    "state":"AZ",
    "name":"Graham County"
  },
  {
    "id":4011,
    "number":552,
    "rate":9.2,
    "state":"AZ",
    "name":"Greenlee County"
  },
  {
    "id":4012,
    "number":2235,
    "rate":13.7,
    "state":"AZ",
    "name":"La Paz County"
  },
  {
    "id":4013,
    "number":240523,
    "rate":8.5,
    "state":"AZ",
    "name":"Maricopa County"
  },
  {
    "id":4015,
    "number":18913,
    "rate":11.9,
    "state":"AZ",
    "name":"Mohave County"
  },
  {
    "id":4017,
    "number":9105,
    "rate":12.4,
    "state":"AZ",
    "name":"Navajo County"
  },
  {
    "id":4019,
    "number":62949,
    "rate":8.5,
    "state":"AZ",
    "name":"Pima County"
  },
  {
    "id":4021,
    "number":34897,
    "rate":12.5,
    "state":"AZ",
    "name":"Pinal County"
  },
  {
    "id":4023,
    "number":2183,
    "rate":6.9,
    "state":"AZ",
    "name":"Santa Cruz County"
  },
  {
    "id":4025,
    "number":17618,
    "rate":10.4,
    "state":"AZ",
    "name":"Yavapai County"
  },
  {
    "id":4027,
    "number":15046,
    "rate":10.7,
    "state":"AZ",
    "name":"Yuma County"
  },
  {
    "id":6001,
    "number":96007,
    "rate":8.2,
    "state":"CA",
    "name":"Alameda County"
  },
  {
    "id":6003,
    "number":91,
    "rate":10.4,
    "state":"CA",
    "name":"Alpine County"
  },
  {
    "id":6005,
    "number":2785,
    "rate":9.1,
    "state":"CA",
    "name":"Amador County"
  },
  {
    "id":6007,
    "number":16176,
    "rate":9.7,
    "state":"CA",
    "name":"Butte County"
  },
  {
    "id":6009,
    "number":3411,
    "rate":9.6,
    "state":"CA",
    "name":"Calaveras County"
  },
  {
    "id":6011,
    "number":1334,
    "rate":9.2,
    "state":"CA",
    "name":"Colusa County"
  },
  {
    "id":6013,
    "number":71764,
    "rate":9.1,
    "state":"CA",
    "name":"Contra Costa County"
  },
  {
    "id":6015,
    "number":1950,
    "rate":9,
    "state":"CA",
    "name":"Del Norte County"
  },
  {
    "id":6017,
    "number":10808,
    "rate":7.9,
    "state":"CA",
    "name":"El Dorado County"
  },
  {
    "id":6019,
    "number":57294,
    "rate":8.9,
    "state":"CA",
    "name":"Fresno County"
  },
  {
    "id":6021,
    "number":1694,
    "rate":8.7,
    "state":"CA",
    "name":"Glenn County"
  },
  {
    "id":6023,
    "number":9265,
    "rate":9,
    "state":"CA",
    "name":"Humboldt County"
  },
  {
    "id":6025,
    "number":9717,
    "rate":8.1,
    "state":"CA",
    "name":"Imperial County"
  },
  {
    "id":6027,
    "number":1410,
    "rate":9.9,
    "state":"CA",
    "name":"Inyo County"
  },
  {
    "id":6029,
    "number":51580,
    "rate":9,
    "state":"CA",
    "name":"Kern County"
  },
  {
    "id":6031,
    "number":8347,
    "rate":7.9,
    "state":"CA",
    "name":"Kings County"
  },
  {
    "id":6033,
    "number":5171,
    "rate":10.5,
    "state":"CA",
    "name":"Lake County"
  },
  {
    "id":6035,
    "number":2068,
    "rate":7.6,
    "state":"CA",
    "name":"Lassen County"
  },
  {
    "id":6037,
    "number":618803,
    "rate":8.5,
    "state":"CA",
    "name":"Los Angeles County"
  },
  {
    "id":6039,
    "number":8696,
    "rate":8.3,
    "state":"CA",
    "name":"Madera County"
  },
  {
    "id":6041,
    "number":13658,
    "rate":6.9,
    "state":"CA",
    "name":"Marin County"
  },
  {
    "id":6043,
    "number":1489,
    "rate":10.3,
    "state":"CA",
    "name":"Mariposa County"
  },
  {
    "id":6045,
    "number":5636,
    "rate":8.5,
    "state":"CA",
    "name":"Mendocino County"
  },
  {
    "id":6047,
    "number":15394,
    "rate":8.9,
    "state":"CA",
    "name":"Merced County"
  },
  {
    "id":6049,
    "number":699,
    "rate":9.8,
    "state":"CA",
    "name":"Modoc County"
  },
  {
    "id":6051,
    "number":808,
    "rate":7.3,
    "state":"CA",
    "name":"Mono County"
  },
  {
    "id":6053,
    "number":21381,
    "rate":7.1,
    "state":"CA",
    "name":"Monterey County"
  },
  {
    "id":6055,
    "number":8106,
    "rate":7.8,
    "state":"CA",
    "name":"Napa County"
  },
  {
    "id":6057,
    "number":5661,
    "rate":7.2,
    "state":"CA",
    "name":"Nevada County"
  },
  {
    "id":6059,
    "number":174950,
    "rate":7.7,
    "state":"CA",
    "name":"Orange County"
  },
  {
    "id":6061,
    "number":21280,
    "rate":8,
    "state":"CA",
    "name":"Placer County"
  },
  {
    "id":6063,
    "number":1440,
    "rate":9.3,
    "state":"CA",
    "name":"Plumas County"
  },
  {
    "id":6065,
    "number":146853,
    "rate":9.3,
    "state":"CA",
    "name":"Riverside County"
  },
  {
    "id":6067,
    "number":87701,
    "rate":8.3,
    "state":"CA",
    "name":"Sacramento County"
  },
  {
    "id":6069,
    "number":2849,
    "rate":7.2,
    "state":"CA",
    "name":"San Benito County"
  },
  {
    "id":6071,
    "number":131498,
    "rate":9.2,
    "state":"CA",
    "name":"San Bernardino County"
  },
  {
    "id":6073,
    "number":171503,
    "rate":7.3,
    "state":"CA",
    "name":"San Diego County"
  },
  {
    "id":6075,
    "number":51351,
    "rate":7.3,
    "state":"CA",
    "name":"San Francisco County"
  },
  {
    "id":6077,
    "number":51190,
    "rate":10.7,
    "state":"CA",
    "name":"San Joaquin County"
  },
  {
    "id":6079,
    "number":17259,
    "rate":8.2,
    "state":"CA",
    "name":"San Luis Obispo County"
  },
  {
    "id":6081,
    "number":43949,
    "rate":7.8,
    "state":"CA",
    "name":"San Mateo County"
  },
  {
    "id":6083,
    "number":20941,
    "rate":6.7,
    "state":"CA",
    "name":"Santa Barbara County"
  },
  {
    "id":6085,
    "number":107945,
    "rate":8,
    "state":"CA",
    "name":"Santa Clara County"
  },
  {
    "id":6087,
    "number":12732,
    "rate":6.4,
    "state":"CA",
    "name":"Santa Cruz County"
  },
  {
    "id":6089,
    "number":13137,
    "rate":9.7,
    "state":"CA",
    "name":"Shasta County"
  },
  {
    "id":6091,
    "number":254,
    "rate":10.1,
    "state":"CA",
    "name":"Sierra County"
  },
  {
    "id":6093,
    "number":2930,
    "rate":8.6,
    "state":"CA",
    "name":"Siskiyou County"
  },
  {
    "id":6095,
    "number":31473,
    "rate":10.1,
    "state":"CA",
    "name":"Solano County"
  },
  {
    "id":6097,
    "number":25600,
    "rate":6.9,
    "state":"CA",
    "name":"Sonoma County"
  },
  {
    "id":6099,
    "number":33650,
    "rate":9.3,
    "state":"CA",
    "name":"Stanislaus County"
  },
  {
    "id":6101,
    "number":5861,
    "rate":8.8,
    "state":"CA",
    "name":"Sutter County"
  },
  {
    "id":6103,
    "number":4415,
    "rate":9.6,
    "state":"CA",
    "name":"Tehama County"
  },
  {
    "id":6105,
    "number":1041,
    "rate":9.5,
    "state":"CA",
    "name":"Trinity County"
  },
  {
    "id":6107,
    "number":21147,
    "rate":7.2,
    "state":"CA",
    "name":"Tulare County"
  },
  {
    "id":6109,
    "number":4310,
    "rate":9.9,
    "state":"CA",
    "name":"Tuolumne County"
  },
  {
    "id":6111,
    "number":44990,
    "rate":7.5,
    "state":"CA",
    "name":"Ventura County"
  },
  {
    "id":6113,
    "number":9777,
    "rate":6.6,
    "state":"CA",
    "name":"Yolo County"
  },
  {
    "id":6115,
    "number":4299,
    "rate":8.6,
    "state":"CA",
    "name":"Yuba County"
  },
  {
    "id":8001,
    "number":22403,
    "rate":7,
    "state":"CO",
    "name":"Adams County"
  },
  {
    "id":8003,
    "number":741,
    "rate":6.6,
    "state":"CO",
    "name":"Alamosa County"
  },
  {
    "id":8005,
    "number":25428,
    "rate":5.9,
    "state":"CO",
    "name":"Arapahoe County"
  },
  {
    "id":8007,
    "number":570,
    "rate":6,
    "state":"CO",
    "name":"Archuleta County"
  },
  {
    "id":8009,
    "number":236,
    "rate":8.2,
    "state":"CO",
    "name":"Baca County"
  },
  {
    "id":8011,
    "number":318,
    "rate":6.8,
    "state":"CO",
    "name":"Bent County"
  },
  {
    "id":8013,
    "number":10179,
    "rate":4.5,
    "state":"CO",
    "name":"Boulder County"
  },
  {
    "id":8014,
    "number":2475,
    "rate":5.8,
    "state":"CO",
    "name":"Broomfield County"
  },
  {
    "id":8015,
    "number":967,
    "rate":6.5,
    "state":"CO",
    "name":"Chaffee County"
  },
  {
    "id":8017,
    "number":97,
    "rate":7.2,
    "state":"CO",
    "name":"Cheyenne County"
  },
  {
    "id":8019,
    "number":527,
    "rate":7.1,
    "state":"CO",
    "name":"Clear Creek County"
  },
  {
    "id":8021,
    "number":380,
    "rate":6.6,
    "state":"CO",
    "name":"Conejos County"
  },
  {
    "id":8023,
    "number":231,
    "rate":8.3,
    "state":"CO",
    "name":"Costilla County"
  },
  {
    "id":8025,
    "number":285,
    "rate":6.2,
    "state":"CO",
    "name":"Crowley County"
  },
  {
    "id":8027,
    "number":271,
    "rate":7.7,
    "state":"CO",
    "name":"Custer County"
  },
  {
    "id":8029,
    "number":1836,
    "rate":7.9,
    "state":"CO",
    "name":"Delta County"
  },
  {
    "id":8031,
    "number":30383,
    "rate":6.2,
    "state":"CO",
    "name":"Denver County"
  },
  {
    "id":8033,
    "number":120,
    "rate":7.9,
    "state":"CO",
    "name":"Dolores County"
  },
  {
    "id":8035,
    "number":9824,
    "rate":4.8,
    "state":"CO",
    "name":"Douglas County"
  },
  {
    "id":8037,
    "number":1403,
    "rate":3.6,
    "state":"CO",
    "name":"Eagle County"
  },
  {
    "id":8041,
    "number":30209,
    "rate":6.6,
    "state":"CO",
    "name":"El Paso County"
  },
  {
    "id":8039,
    "number":960,
    "rate":5.6,
    "state":"CO",
    "name":"Elbert County"
  },
  {
    "id":8043,
    "number":3048,
    "rate":8,
    "state":"CO",
    "name":"Fremont County"
  },
  {
    "id":8045,
    "number":1915,
    "rate":4.8,
    "state":"CO",
    "name":"Garfield County"
  },
  {
    "id":8047,
    "number":291,
    "rate":6.5,
    "state":"CO",
    "name":"Gilpin County"
  },
  {
    "id":8049,
    "number":600,
    "rate":5.4,
    "state":"CO",
    "name":"Grand County"
  },
  {
    "id":8051,
    "number":573,
    "rate":4.8,
    "state":"CO",
    "name":"Gunnison County"
  },
  {
    "id":8053,
    "number":44,
    "rate":6.9,
    "state":"CO",
    "name":"Hinsdale County"
  },
  {
    "id":8055,
    "number":432,
    "rate":8,
    "state":"CO",
    "name":"Huerfano County"
  },
  {
    "id":8057,
    "number":70,
    "rate":6.4,
    "state":"CO",
    "name":"Jackson County"
  },
  {
    "id":8059,
    "number":22187,
    "rate":5.3,
    "state":"CO",
    "name":"Jefferson County"
  },
  {
    "id":8061,
    "number":89,
    "rate":8.2,
    "state":"CO",
    "name":"Kiowa County"
  },
  {
    "id":8063,
    "number":512,
    "rate":8.4,
    "state":"CO",
    "name":"Kit Carson County"
  },
  {
    "id":8067,
    "number":2148,
    "rate":5.4,
    "state":"CO",
    "name":"La Plata County"
  },
  {
    "id":8065,
    "number":269,
    "rate":5,
    "state":"CO",
    "name":"Lake County"
  },
  {
    "id":8069,
    "number":11864,
    "rate":5.1,
    "state":"CO",
    "name":"Larimer County"
  },
  {
    "id":8071,
    "number":810,
    "rate":7,
    "state":"CO",
    "name":"Las Animas County"
  },
  {
    "id":8073,
    "number":332,
    "rate":7.8,
    "state":"CO",
    "name":"Lincoln County"
  },
  {
    "id":8075,
    "number":1224,
    "rate":7.1,
    "state":"CO",
    "name":"Logan County"
  },
  {
    "id":8077,
    "number":7932,
    "rate":7.3,
    "state":"CO",
    "name":"Mesa County"
  },
  {
    "id":8079,
    "number":44,
    "rate":7.3,
    "state":"CO",
    "name":"Mineral County"
  },
  {
    "id":8081,
    "number":574,
    "rate":6.1,
    "state":"CO",
    "name":"Moffat County"
  },
  {
    "id":8083,
    "number":1295,
    "rate":6.8,
    "state":"CO",
    "name":"Montezuma County"
  },
  {
    "id":8085,
    "number":1966,
    "rate":6.5,
    "state":"CO",
    "name":"Montrose County"
  },
  {
    "id":8087,
    "number":1589,
    "rate":8,
    "state":"CO",
    "name":"Morgan County"
  },
  {
    "id":8089,
    "number":972,
    "rate":7.2,
    "state":"CO",
    "name":"Otero County"
  },
  {
    "id":8091,
    "number":237,
    "rate":6.4,
    "state":"CO",
    "name":"Ouray County"
  },
  {
    "id":8093,
    "number":823,
    "rate":6.3,
    "state":"CO",
    "name":"Park County"
  },
  {
    "id":8095,
    "number":250,
    "rate":7.8,
    "state":"CO",
    "name":"Phillips County"
  },
  {
    "id":8097,
    "number":693,
    "rate":4.9,
    "state":"CO",
    "name":"Pitkin County"
  },
  {
    "id":8099,
    "number":614,
    "rate":7.1,
    "state":"CO",
    "name":"Prowers County"
  },
  {
    "id":8101,
    "number":10990,
    "rate":9.3,
    "state":"CO",
    "name":"Pueblo County"
  },
  {
    "id":8103,
    "number":291,
    "rate":6,
    "state":"CO",
    "name":"Rio Grande County"
  },
  {
    "id":8105,
    "number":607,
    "rate":7,
    "state":"",
    "name":""
  },
  {
    "id":8107,
    "number":720,
    "rate":4,
    "state":"CO",
    "name":"Routt County"
  },
  {
    "id":8109,
    "number":306,
    "rate":6.5,
    "state":"CO",
    "name":"Saguache County"
  },
  {
    "id":8111,
    "number":36,
    "rate":6.2,
    "state":"CO",
    "name":"San Juan County"
  },
  {
    "id":8113,
    "number":288,
    "rate":4.8,
    "state":"CO",
    "name":"San Miguel County"
  },
  {
    "id":8115,
    "number":153,
    "rate":8.2,
    "state":"CO",
    "name":"Sedgwick County"
  },
  {
    "id":8117,
    "number":912,
    "rate":4,
    "state":"CO",
    "name":"Summit County"
  },
  {
    "id":8119,
    "number":1082,
    "rate":5.9,
    "state":"CO",
    "name":"Teller County"
  },
  {
    "id":8121,
    "number":248,
    "rate":6.9,
    "state":"CO",
    "name":"Washington County"
  },
  {
    "id":8123,
    "number":11943,
    "rate":6.5,
    "state":"CO",
    "name":"Weld County"
  },
  {
    "id":8125,
    "number":454,
    "rate":6.3,
    "state":"CO",
    "name":"Yuma County"
  },
  {
    "id":9001,
    "number":54161,
    "rate":7.9,
    "state":"CT",
    "name":"Fairfield County"
  },
  {
    "id":9003,
    "number":62845,
    "rate":9.3,
    "state":"CT",
    "name":"Hartford County"
  },
  {
    "id":9005,
    "number":10400,
    "rate":7.2,
    "state":"CT",
    "name":"Litchfield County"
  },
  {
    "id":9007,
    "number":10835,
    "rate":8.5,
    "state":"CT",
    "name":"Middlesex County"
  },
  {
    "id":9009,
    "number":60796,
    "rate":9.4,
    "state":"CT",
    "name":"New Haven County"
  },
  {
    "id":9011,
    "number":18491,
    "rate":8.8,
    "state":"CT",
    "name":"New London County"
  },
  {
    "id":9013,
    "number":8060,
    "rate":7.1,
    "state":"CT",
    "name":"Tolland County"
  },
  {
    "id":9015,
    "number":9123,
    "rate":10.3,
    "state":"CT",
    "name":"Windham County"
  },
  {
    "id":11001,
    "number":40849,
    "rate":8.1,
    "state":"DC",
    "name":"District of Columbia"
  },
  {
    "id":10001,
    "number":14990,
    "rate":12.3,
    "state":"DE",
    "name":"Kent County"
  },
  {
    "id":10003,
    "number":36030,
    "rate":8.9,
    "state":"DE",
    "name":"New Castle County"
  },
  {
    "id":10005,
    "number":19641,
    "rate":12.4,
    "state":"DE",
    "name":"Sussex County"
  },
  {
    "id":12001,
    "number":15997,
    "rate":8.3,
    "state":"FL",
    "name":"Alachua County"
  },
  {
    "id":12003,
    "number":2603,
    "rate":13.3,
    "state":"FL",
    "name":"Baker County"
  },
  {
    "id":12007,
    "number":2973,
    "rate":14.1,
    "state":"FL",
    "name":"Bradford County"
  },
  {
    "id":12005,
    "number":14720,
    "rate":11.2,
    "state":"FL",
    "name":"Bay County"
  },
  {
    "id":12009,
    "number":51846,
    "rate":12,
    "state":"FL",
    "name":"Brevard County"
  },
  {
    "id":12011,
    "number":129759,
    "rate":9.4,
    "state":"FL",
    "name":"Broward County"
  },
  {
    "id":12013,
    "number":1798,
    "rate":15.9,
    "state":"FL",
    "name":"Calhoun County"
  },
  {
    "id":12015,
    "number":19831,
    "rate":14.4,
    "state":"FL",
    "name":"Charlotte County"
  },
  {
    "id":12017,
    "number":15780,
    "rate":13.7,
    "state":"FL",
    "name":"Citrus County"
  },
  {
    "id":12019,
    "number":17046,
    "rate":12.1,
    "state":"FL",
    "name":"Clay County"
  },
  {
    "id":12021,
    "number":23644,
    "rate":9,
    "state":"FL",
    "name":"Collier County"
  },
  {
    "id":12023,
    "number":6603,
    "rate":12.8,
    "state":"FL",
    "name":"Columbia County"
  },
  {
    "id":12027,
    "number":3607,
    "rate":13.7,
    "state":"FL",
    "name":"Desoto County"
  },
  {
    "id":12029,
    "number":1901,
    "rate":15,
    "state":"FL",
    "name":"Dixie County"
  },
  {
    "id":12031,
    "number":70613,
    "rate":10.8,
    "state":"FL",
    "name":"Duval County"
  },
  {
    "id":12033,
    "number":29315,
    "rate":12.9,
    "state":"FL",
    "name":"Escambia County"
  },
  {
    "id":12035,
    "number":9365,
    "rate":12,
    "state":"FL",
    "name":"Flagler County"
  },
  {
    "id":12037,
    "number":1054,
    "rate":11.1,
    "state":"FL",
    "name":"Franklin County"
  },
  {
    "id":12039,
    "number":5893,
    "rate":16.8,
    "state":"FL",
    "name":"Gadsden County"
  },
  {
    "id":12041,
    "number":1092,
    "rate":8.6,
    "state":"FL",
    "name":"Gilchrist County"
  },
  {
    "id":12043,
    "number":1530,
    "rate":14.4,
    "state":"FL",
    "name":"Glades County"
  },
  {
    "id":12045,
    "number":1489,
    "rate":11.5,
    "state":"FL",
    "name":"Gulf County"
  },
  {
    "id":12047,
    "number":1506,
    "rate":13,
    "state":"FL",
    "name":"Hamilton County"
  },
  {
    "id":12049,
    "number":2511,
    "rate":13,
    "state":"FL",
    "name":"Hardee County"
  },
  {
    "id":12051,
    "number":3668,
    "rate":14.1,
    "state":"FL",
    "name":"Hendry County"
  },
  {
    "id":12053,
    "number":18439,
    "rate":13.5,
    "state":"FL",
    "name":"Hernando County"
  },
  {
    "id":12055,
    "number":11339,
    "rate":14.5,
    "state":"FL",
    "name":"Highlands County"
  },
  {
    "id":12057,
    "number":99791,
    "rate":10.5,
    "state":"FL",
    "name":"Hillsborough County"
  },
  {
    "id":12059,
    "number":2264,
    "rate":14.8,
    "state":"FL",
    "name":"Holmes County"
  },
  {
    "id":12061,
    "number":12919,
    "rate":11.5,
    "state":"FL",
    "name":"Indian River County"
  },
  {
    "id":12063,
    "number":4393,
    "rate":11.4,
    "state":"FL",
    "name":"Jackson County"
  },
  {
    "id":12065,
    "number":1391,
    "rate":12.2,
    "state":"FL",
    "name":"Jefferson County"
  },
  {
    "id":12067,
    "number":849,
    "rate":12.5,
    "state":"FL",
    "name":"Lafayette County"
  },
  {
    "id":12069,
    "number":32754,
    "rate":13.9,
    "state":"FL",
    "name":"Lake County"
  },
  {
    "id":12071,
    "number":48931,
    "rate":9.6,
    "state":"FL",
    "name":"Lee County"
  },
  {
    "id":12073,
    "number":17045,
    "rate":8,
    "state":"FL",
    "name":"Leon County"
  },
  {
    "id":12075,
    "number":4385,
    "rate":14.1,
    "state":"FL",
    "name":"Levy County"
  },
  {
    "id":12077,
    "number":875,
    "rate":13.6,
    "state":"FL",
    "name":"Liberty County"
  },
  {
    "id":12079,
    "number":2300,
    "rate":15.7,
    "state":"FL",
    "name":"Madison County"
  },
  {
    "id":12081,
    "number":26656,
    "rate":10.2,
    "state":"FL",
    "name":"Manatee County"
  },
  {
    "id":12083,
    "number":34138,
    "rate":12.9,
    "state":"FL",
    "name":"Marion County"
  },
  {
    "id":12085,
    "number":13479,
    "rate":11.2,
    "state":"FL",
    "name":"Martin County"
  },
  {
    "id":12086,
    "number":158849,
    "rate":8,
    "state":"FL",
    "name":"Miami-Dade County"
  },
  {
    "id":12087,
    "number":5291,
    "rate":8.5,
    "state":"FL",
    "name":"Monroe County"
  },
  {
    "id":12089,
    "number":6192,
    "rate":10.8,
    "state":"FL",
    "name":"Nassau County"
  },
  {
    "id":12091,
    "number":13790,
    "rate":9.6,
    "state":"FL",
    "name":"Okaloosa County"
  },
  {
    "id":12093,
    "number":3280,
    "rate":11.2,
    "state":"FL",
    "name":"Okeechobee County"
  },
  {
    "id":12095,
    "number":76796,
    "rate":8.7,
    "state":"FL",
    "name":"Orange County"
  },
  {
    "id":12097,
    "number":23172,
    "rate":11.2,
    "state":"FL",
    "name":"Osceola County"
  },
  {
    "id":12099,
    "number":104685,
    "rate":10,
    "state":"FL",
    "name":"Palm Beach County"
  },
  {
    "id":12101,
    "number":43506,
    "rate":12,
    "state":"FL",
    "name":"Pasco County"
  },
  {
    "id":12103,
    "number":80026,
    "rate":10.8,
    "state":"FL",
    "name":"Pinellas County"
  },
  {
    "id":12105,
    "number":60210,
    "rate":13.1,
    "state":"FL",
    "name":"Polk County"
  },
  {
    "id":12107,
    "number":7156,
    "rate":12.9,
    "state":"FL",
    "name":"Putnam County"
  },
  {
    "id":12113,
    "number":10342,
    "rate":8.7,
    "state":"FL",
    "name":"Santa Rosa County"
  },
  {
    "id":12115,
    "number":36058,
    "rate":11.3,
    "state":"FL",
    "name":"Sarasota County"
  },
  {
    "id":12117,
    "number":32862,
    "rate":10.1,
    "state":"FL",
    "name":"Seminole County"
  },
  {
    "id":12109,
    "number":13275,
    "rate":8.7,
    "state":"FL",
    "name":"St. Johns County"
  },
  {
    "id":12111,
    "number":24891,
    "rate":11.5,
    "state":"FL",
    "name":"St. Lucie County"
  },
  {
    "id":12119,
    "number":13340,
    "rate":14.4,
    "state":"FL",
    "name":"Sumter County"
  },
  {
    "id":12121,
    "number":4657,
    "rate":14,
    "state":"FL",
    "name":"Suwannee County"
  },
  {
    "id":12123,
    "number":2799,
    "rate":15.6,
    "state":"FL",
    "name":"Taylor County"
  },
  {
    "id":12125,
    "number":1518,
    "rate":12.7,
    "state":"FL",
    "name":"Union County"
  },
  {
    "id":12127,
    "number":45175,
    "rate":11.5,
    "state":"FL",
    "name":"Volusia County"
  },
  {
    "id":12129,
    "number":2763,
    "rate":11.8,
    "state":"FL",
    "name":"Wakulla County"
  },
  {
    "id":12131,
    "number":5082,
    "rate":11.3,
    "state":"FL",
    "name":"Walton County"
  },
  {
    "id":12133,
    "number":2487,
    "rate":12.9,
    "state":"FL",
    "name":"Washington County"
  },
  {
    "id":13001,
    "number":1924,
    "rate":14.4,
    "state":"GA",
    "name":"Appling County"
  },
  {
    "id":13003,
    "number":650,
    "rate":11.4,
    "state":"GA",
    "name":"Atkinson County"
  },
  {
    "id":13005,
    "number":845,
    "rate":10.6,
    "state":"GA",
    "name":"Bacon County"
  },
  {
    "id":13007,
    "number":361,
    "rate":14.3,
    "state":"GA",
    "name":"Baker County"
  },
  {
    "id":13009,
    "number":4350,
    "rate":12.7,
    "state":"GA",
    "name":"Baldwin County"
  },
  {
    "id":13011,
    "number":1455,
    "rate":10.8,
    "state":"GA",
    "name":"Banks County"
  },
  {
    "id":13013,
    "number":5530,
    "rate":11.2,
    "state":"GA",
    "name":"Bartow County"
  },
  {
    "id":13015,
    "number":8663,
    "rate":12,
    "state":"",
    "name":""
  },
  {
    "id":13017,
    "number":1747,
    "rate":13.9,
    "state":"GA",
    "name":"Ben Hill County"
  },
  {
    "id":13019,
    "number":1757,
    "rate":12.5,
    "state":"GA",
    "name":"Berrien County"
  },
  {
    "id":13021,
    "number":13019,
    "rate":11.6,
    "state":"GA",
    "name":"Bibb County"
  },
  {
    "id":13023,
    "number":1326,
    "rate":14.3,
    "state":"GA",
    "name":"Bleckley County"
  },
  {
    "id":13025,
    "number":1491,
    "rate":11.1,
    "state":"GA",
    "name":"Brantley County"
  },
  {
    "id":13027,
    "number":1753,
    "rate":14.9,
    "state":"GA",
    "name":"Brooks County"
  },
  {
    "id":13029,
    "number":2564,
    "rate":11.6,
    "state":"GA",
    "name":"Bryan County"
  },
  {
    "id":13031,
    "number":6105,
    "rate":11.7,
    "state":"GA",
    "name":"Bulloch County"
  },
  {
    "id":13033,
    "number":2322,
    "rate":14.2,
    "state":"GA",
    "name":"Burke County"
  },
  {
    "id":13035,
    "number":2126,
    "rate":12,
    "state":"GA",
    "name":"Butts County"
  },
  {
    "id":13037,
    "number":699,
    "rate":13.7,
    "state":"GA",
    "name":"Calhoun County"
  },
  {
    "id":13039,
    "number":3758,
    "rate":10.3,
    "state":"GA",
    "name":"Camden County"
  },
  {
    "id":13043,
    "number":978,
    "rate":12.4,
    "state":"GA",
    "name":"Candler County"
  },
  {
    "id":13045,
    "number":9167,
    "rate":11.6,
    "state":"GA",
    "name":"Carroll County"
  },
  {
    "id":13047,
    "number":5985,
    "rate":12.5,
    "state":"GA",
    "name":"Catoosa County"
  },
  {
    "id":13049,
    "number":1185,
    "rate":11.4,
    "state":"GA",
    "name":"Charlton County"
  },
  {
    "id":13051,
    "number":21364,
    "rate":10.4,
    "state":"GA",
    "name":"Chatham County"
  },
  {
    "id":13053,
    "number":584,
    "rate":6.6,
    "state":"GA",
    "name":"Chattahoochee County"
  },
  {
    "id":13055,
    "number":2309,
    "rate":12,
    "state":"GA",
    "name":"Chattooga County"
  },
  {
    "id":13057,
    "number":14288,
    "rate":9.1,
    "state":"GA",
    "name":"Cherokee County"
  },
  {
    "id":13059,
    "number":7829,
    "rate":8.8,
    "state":"GA",
    "name":"Clarke County"
  },
  {
    "id":13061,
    "number":392,
    "rate":16.5,
    "state":"GA",
    "name":"Clay County"
  },
  {
    "id":13063,
    "number":20477,
    "rate":11.2,
    "state":"GA",
    "name":"Clayton County"
  },
  {
    "id":13065,
    "number":665,
    "rate":13.8,
    "state":"GA",
    "name":"Clinch County"
  },
  {
    "id":13067,
    "number":45757,
    "rate":8.9,
    "state":"GA",
    "name":"Cobb County"
  },
  {
    "id":13069,
    "number":3418,
    "rate":11,
    "state":"GA",
    "name":"Coffee County"
  },
  {
    "id":13071,
    "number":3927,
    "rate":12.1,
    "state":"GA",
    "name":"Colquitt County"
  },
  {
    "id":13073,
    "number":9407,
    "rate":10.1,
    "state":"GA",
    "name":"Columbia County"
  },
  {
    "id":13075,
    "number":1553,
    "rate":12.9,
    "state":"GA",
    "name":"Cook County"
  },
  {
    "id":13077,
    "number":10356,
    "rate":11.1,
    "state":"GA",
    "name":"Coweta County"
  },
  {
    "id":13079,
    "number":1262,
    "rate":13.2,
    "state":"GA",
    "name":"Crawford County"
  },
  {
    "id":13081,
    "number":2392,
    "rate":14,
    "state":"GA",
    "name":"Crisp County"
  },
  {
    "id":13083,
    "number":1527,
    "rate":12.3,
    "state":"GA",
    "name":"Dade County"
  },
  {
    "id":13085,
    "number":1842,
    "rate":10.9,
    "state":"GA",
    "name":"Dawson County"
  },
  {
    "id":13087,
    "number":2397,
    "rate":12.1,
    "state":"GA",
    "name":"Decatur County"
  },
  {
    "id":13089,
    "number":51602,
    "rate":9.9,
    "state":"GA",
    "name":"Dekalb County"
  },
  {
    "id":13091,
    "number":2278,
    "rate":14.2,
    "state":"GA",
    "name":"Dodge County"
  },
  {
    "id":13093,
    "number":1572,
    "rate":14.2,
    "state":"GA",
    "name":"Dooly County"
  },
  {
    "id":13095,
    "number":8209,
    "rate":12.2,
    "state":"GA",
    "name":"Dougherty County"
  },
  {
    "id":13097,
    "number":10800,
    "rate":11.5,
    "state":"GA",
    "name":"Douglas County"
  },
  {
    "id":13099,
    "number":1034,
    "rate":13.5,
    "state":"GA",
    "name":"Early County"
  },
  {
    "id":13101,
    "number":302,
    "rate":10.7,
    "state":"GA",
    "name":"Echols County"
  },
  {
    "id":13103,
    "number":4023,
    "rate":10.8,
    "state":"GA",
    "name":"Effingham County"
  },
  {
    "id":13105,
    "number":1878,
    "rate":12.7,
    "state":"GA",
    "name":"Elbert County"
  },
  {
    "id":13107,
    "number":1863,
    "rate":11.2,
    "state":"GA",
    "name":"Emanuel County"
  },
  {
    "id":13109,
    "number":1098,
    "rate":14.3,
    "state":"GA",
    "name":"Evans County"
  },
  {
    "id":13111,
    "number":2131,
    "rate":11.4,
    "state":"GA",
    "name":"Fannin County"
  },
  {
    "id":13113,
    "number":8586,
    "rate":11.1,
    "state":"GA",
    "name":"Fayette County"
  },
  {
    "id":13115,
    "number":9058,
    "rate":13,
    "state":"GA",
    "name":"Floyd County"
  },
  {
    "id":13117,
    "number":13252,
    "rate":10.4,
    "state":"GA",
    "name":"Forsyth County"
  },
  {
    "id":13119,
    "number":1936,
    "rate":11.8,
    "state":"GA",
    "name":"Franklin County"
  },
  {
    "id":13121,
    "number":57454,
    "rate":8,
    "state":"GA",
    "name":"Fulton County"
  },
  {
    "id":13123,
    "number":2517,
    "rate":11.6,
    "state":"GA",
    "name":"Gilmer County"
  },
  {
    "id":13125,
    "number":272,
    "rate":12.1,
    "state":"GA",
    "name":"Glascock County"
  },
  {
    "id":13127,
    "number":6508,
    "rate":10.8,
    "state":"GA",
    "name":"Glynn County"
  },
  {
    "id":13129,
    "number":4052,
    "rate":10.2,
    "state":"GA",
    "name":"Gordon County"
  },
  {
    "id":13131,
    "number":2119,
    "rate":11.6,
    "state":"GA",
    "name":"Grady County"
  },
  {
    "id":13133,
    "number":1962,
    "rate":15.5,
    "state":"GA",
    "name":"Greene County"
  },
  {
    "id":13135,
    "number":47000,
    "rate":8.1,
    "state":"GA",
    "name":"Gwinnett County"
  },
  {
    "id":13137,
    "number":3563,
    "rate":11.1,
    "state":"GA",
    "name":"Habersham County"
  },
  {
    "id":13139,
    "number":15170,
    "rate":11.7,
    "state":"GA",
    "name":"Hall County"
  },
  {
    "id":13141,
    "number":1103,
    "rate":15.2,
    "state":"GA",
    "name":"Hancock County"
  },
  {
    "id":13143,
    "number":2439,
    "rate":11.8,
    "state":"GA",
    "name":"Haralson County"
  },
  {
    "id":13145,
    "number":3459,
    "rate":14.2,
    "state":"GA",
    "name":"Harris County"
  },
  {
    "id":13147,
    "number":2407,
    "rate":12.4,
    "state":"GA",
    "name":"Hart County"
  },
  {
    "id":13149,
    "number":1011,
    "rate":11.9,
    "state":"GA",
    "name":"Heard County"
  },
  {
    "id":13151,
    "number":15926,
    "rate":11.1,
    "state":"GA",
    "name":"Henry County"
  },
  {
    "id":13153,
    "number":11719,
    "rate":11.3,
    "state":"GA",
    "name":"Houston County"
  },
  {
    "id":13155,
    "number":887,
    "rate":12.2,
    "state":"GA",
    "name":"Irwin County"
  },
  {
    "id":13157,
    "number":4011,
    "rate":9.2,
    "state":"GA",
    "name":"Jackson County"
  },
  {
    "id":13159,
    "number":1151,
    "rate":11.5,
    "state":"GA",
    "name":"Jasper County"
  },
  {
    "id":13161,
    "number":1392,
    "rate":13.1,
    "state":"GA",
    "name":"Jeff Davis County"
  },
  {
    "id":13163,
    "number":1776,
    "rate":14.8,
    "state":"GA",
    "name":"Jefferson County"
  },
  {
    "id":13165,
    "number":853,
    "rate":12.5,
    "state":"GA",
    "name":"Jenkins County"
  },
  {
    "id":13167,
    "number":976,
    "rate":12.7,
    "state":"GA",
    "name":"Johnson County"
  },
  {
    "id":13169,
    "number":2761,
    "rate":13.3,
    "state":"GA",
    "name":"Jones County"
  },
  {
    "id":13171,
    "number":1590,
    "rate":12.1,
    "state":"GA",
    "name":"Lamar County"
  },
  {
    "id":13173,
    "number":807,
    "rate":10.6,
    "state":"GA",
    "name":"Lanier County"
  },
  {
    "id":13175,
    "number":4480,
    "rate":12.9,
    "state":"GA",
    "name":"Laurens County"
  },
  {
    "id":13177,
    "number":2173,
    "rate":10.8,
    "state":"GA",
    "name":"Lee County"
  },
  {
    "id":13179,
    "number":4129,
    "rate":9.3,
    "state":"GA",
    "name":"Liberty County"
  },
  {
    "id":13181,
    "number":851,
    "rate":14,
    "state":"GA",
    "name":"Lincoln County"
  },
  {
    "id":13183,
    "number":1050,
    "rate":9.5,
    "state":"GA",
    "name":"Long County"
  },
  {
    "id":13185,
    "number":8354,
    "rate":10.4,
    "state":"GA",
    "name":"Lowndes County"
  },
  {
    "id":13187,
    "number":2275,
    "rate":10,
    "state":"GA",
    "name":"Lumpkin County"
  },
  {
    "id":13193,
    "number":1421,
    "rate":13,
    "state":"GA",
    "name":"Macon County"
  },
  {
    "id":13195,
    "number":2568,
    "rate":12.4,
    "state":"GA",
    "name":"Madison County"
  },
  {
    "id":13197,
    "number":946,
    "rate":14.7,
    "state":"GA",
    "name":"Marion County"
  },
  {
    "id":13189,
    "number":2664,
    "rate":17.1,
    "state":"GA",
    "name":"McDuffie County"
  },
  {
    "id":13191,
    "number":1586,
    "rate":14.7,
    "state":"GA",
    "name":"McIntosh County"
  },
  {
    "id":13199,
    "number":2091,
    "rate":13.1,
    "state":"GA",
    "name":"Meriwether County"
  },
  {
    "id":13201,
    "number":576,
    "rate":13,
    "state":"GA",
    "name":"Miller County"
  },
  {
    "id":13205,
    "number":2171,
    "rate":12.8,
    "state":"GA",
    "name":"Mitchell County"
  },
  {
    "id":13207,
    "number":2671,
    "rate":13.2,
    "state":"GA",
    "name":"Monroe County"
  },
  {
    "id":13209,
    "number":912,
    "rate":13.7,
    "state":"GA",
    "name":"Montgomery County"
  },
  {
    "id":13211,
    "number":1606,
    "rate":12.2,
    "state":"GA",
    "name":"Morgan County"
  },
  {
    "id":13213,
    "number":3335,
    "rate":11.8,
    "state":"GA",
    "name":"Murray County"
  },
  {
    "id":13215,
    "number":18156,
    "rate":12.7,
    "state":"GA",
    "name":"Muscogee County"
  },
  {
    "id":13217,
    "number":7801,
    "rate":11.1,
    "state":"GA",
    "name":"Newton County"
  },
  {
    "id":13219,
    "number":2302,
    "rate":9.8,
    "state":"GA",
    "name":"Oconee County"
  },
  {
    "id":13221,
    "number":1371,
    "rate":12.5,
    "state":"GA",
    "name":"Oglethorpe County"
  },
  {
    "id":13223,
    "number":12177,
    "rate":12.3,
    "state":"GA",
    "name":"Paulding County"
  },
  {
    "id":13227,
    "number":2839,
    "rate":12.6,
    "state":"GA",
    "name":"Pickens County"
  },
  {
    "id":13229,
    "number":1558,
    "rate":11.4,
    "state":"GA",
    "name":"Pierce County"
  },
  {
    "id":13231,
    "number":1520,
    "rate":11.9,
    "state":"GA",
    "name":"Pike County"
  },
  {
    "id":13225,
    "number":2496,
    "rate":12.7,
    "state":"GA",
    "name":"Peach County"
  },
  {
    "id":13233,
    "number":3427,
    "rate":11.6,
    "state":"GA",
    "name":"Polk County"
  },
  {
    "id":13235,
    "number":1227,
    "rate":13.5,
    "state":"GA",
    "name":"Pulaski County"
  },
  {
    "id":13237,
    "number":2103,
    "rate":13,
    "state":"GA",
    "name":"Putnam County"
  },
  {
    "id":13239,
    "number":316,
    "rate":16.8,
    "state":"GA",
    "name":"Quitman County"
  },
  {
    "id":13241,
    "number":1768,
    "rate":13.9,
    "state":"GA",
    "name":"Rabun County"
  },
  {
    "id":13243,
    "number":901,
    "rate":16.4,
    "state":"GA",
    "name":"Randolph County"
  },
  {
    "id":13245,
    "number":18114,
    "rate":12.3,
    "state":"GA",
    "name":"Richmond County"
  },
  {
    "id":13247,
    "number":8474,
    "rate":13.9,
    "state":"GA",
    "name":"Rockdale County"
  },
  {
    "id":13249,
    "number":441,
    "rate":12.7,
    "state":"GA",
    "name":"Schley County"
  },
  {
    "id":13251,
    "number":1352,
    "rate":12.9,
    "state":"GA",
    "name":"Screven County"
  },
  {
    "id":13253,
    "number":954,
    "rate":14.2,
    "state":"GA",
    "name":"Seminole County"
  },
  {
    "id":13255,
    "number":6255,
    "rate":13.4,
    "state":"GA",
    "name":"Spalding County"
  },
  {
    "id":13257,
    "number":2665,
    "rate":13.8,
    "state":"GA",
    "name":"Stephens County"
  },
  {
    "id":13259,
    "number":654,
    "rate":13,
    "state":"GA",
    "name":"Stewart County"
  },
  {
    "id":13261,
    "number":2906,
    "rate":12.9,
    "state":"GA",
    "name":"Sumter County"
  },
  {
    "id":13263,
    "number":866,
    "rate":16.9,
    "state":"GA",
    "name":"Talbot County"
  },
  {
    "id":13265,
    "number":214,
    "rate":16,
    "state":"GA",
    "name":"Taliaferro County"
  },
  {
    "id":13267,
    "number":2027,
    "rate":10.5,
    "state":"GA",
    "name":"Tattnall County"
  },
  {
    "id":13269,
    "number":828,
    "rate":13.2,
    "state":"GA",
    "name":"Taylor County"
  },
  {
    "id":13271,
    "number":1602,
    "rate":12.3,
    "state":"GA",
    "name":"Telfair County"
  },
  {
    "id":13273,
    "number":977,
    "rate":14.6,
    "state":"GA",
    "name":"Terrell County"
  },
  {
    "id":13275,
    "number":4622,
    "rate":14.1,
    "state":"GA",
    "name":"Thomas County"
  },
  {
    "id":13277,
    "number":3879,
    "rate":13.3,
    "state":"GA",
    "name":"Tift County"
  },
  {
    "id":13279,
    "number":2682,
    "rate":14.1,
    "state":"GA",
    "name":"Toombs County"
  },
  {
    "id":13281,
    "number":1089,
    "rate":13,
    "state":"GA",
    "name":"Towns County"
  },
  {
    "id":13283,
    "number":594,
    "rate":11.9,
    "state":"GA",
    "name":"Treutlen County"
  },
  {
    "id":13285,
    "number":6418,
    "rate":13.2,
    "state":"GA",
    "name":"Troup County"
  },
  {
    "id":13287,
    "number":788,
    "rate":12.9,
    "state":"GA",
    "name":"Turner County"
  },
  {
    "id":13289,
    "number":1003,
    "rate":15,
    "state":"GA",
    "name":"Twiggs County"
  },
  {
    "id":13291,
    "number":2718,
    "rate":15.6,
    "state":"GA",
    "name":"Union County"
  },
  {
    "id":13293,
    "number":2527,
    "rate":12.7,
    "state":"GA",
    "name":"Upson County"
  },
  {
    "id":13295,
    "number":6872,
    "rate":13.5,
    "state":"GA",
    "name":"Walker County"
  },
  {
    "id":13297,
    "number":6970,
    "rate":11.6,
    "state":"GA",
    "name":"Walton County"
  },
  {
    "id":13299,
    "number":3459,
    "rate":13,
    "state":"GA",
    "name":"Ware County"
  },
  {
    "id":13301,
    "number":634,
    "rate":15.1,
    "state":"GA",
    "name":"Warren County"
  },
  {
    "id":13303,
    "number":2133,
    "rate":13.7,
    "state":"GA",
    "name":"Washington County"
  },
  {
    "id":13305,
    "number":2874,
    "rate":12.9,
    "state":"GA",
    "name":"Wayne County"
  },
  {
    "id":13307,
    "number":298,
    "rate":14.4,
    "state":"GA",
    "name":"Webster County"
  },
  {
    "id":13309,
    "number":718,
    "rate":11.2,
    "state":"GA",
    "name":"Wheeler County"
  },
  {
    "id":13311,
    "number":2300,
    "rate":11.1,
    "state":"GA",
    "name":"White County"
  },
  {
    "id":13313,
    "number":8189,
    "rate":11.4,
    "state":"GA",
    "name":"Whitfield County"
  },
  {
    "id":13315,
    "number":786,
    "rate":11.1,
    "state":"GA",
    "name":"Wilcox County"
  },
  {
    "id":13317,
    "number":1258,
    "rate":16.5,
    "state":"GA",
    "name":"Wilkes County"
  },
  {
    "id":13319,
    "number":941,
    "rate":13.3,
    "state":"GA",
    "name":"Wilkinson County"
  },
  {
    "id":13321,
    "number":2162,
    "rate":13.5,
    "state":"GA",
    "name":"Worth County"
  },
  {
    "id":15001,
    "number":11040,
    "rate":7.8,
    "state":"HI",
    "name":"Hawaii County"
  },
  {
    "id":15003,
    "number":59786,
    "rate":8.1,
    "state":"HI",
    "name":"Honolulu County"
  },
  {
    "id":15005,
    "number":11,
    "rate":12,
    "state":"HI",
    "name":"Kalawao County"
  },
  {
    "id":15007,
    "number":4428,
    "rate":8.6,
    "state":"HI",
    "name":"Kauai County"
  },
  {
    "id":15009,
    "number":9305,
    "rate":7.8,
    "state":"HI",
    "name":"Maui County"
  },
  {
    "id":19001,
    "number":706,
    "rate":12.4,
    "state":"IA",
    "name":"Adair County"
  },
  {
    "id":19003,
    "number":302,
    "rate":10,
    "state":"IA",
    "name":"Adams County"
  },
  {
    "id":19005,
    "number":971,
    "rate":9.1,
    "state":"IA",
    "name":"Allamakee County"
  },
  {
    "id":19007,
    "number":1128,
    "rate":11.7,
    "state":"IA",
    "name":"Appanoose County"
  },
  {
    "id":19009,
    "number":488,
    "rate":10.8,
    "state":"IA",
    "name":"Audubon County"
  },
  {
    "id":19011,
    "number":1881,
    "rate":10,
    "state":"IA",
    "name":"Benton County"
  },
  {
    "id":19013,
    "number":9050,
    "rate":9.2,
    "state":"IA",
    "name":"Black Hawk County"
  },
  {
    "id":19015,
    "number":1887,
    "rate":9.6,
    "state":"IA",
    "name":"Boone County"
  },
  {
    "id":19017,
    "number":1674,
    "rate":9.3,
    "state":"IA",
    "name":"Bremer County"
  },
  {
    "id":19019,
    "number":1447,
    "rate":9.7,
    "state":"IA",
    "name":"Buchanan County"
  },
  {
    "id":19021,
    "number":1460,
    "rate":10,
    "state":"IA",
    "name":"Buena Vista County"
  },
  {
    "id":19023,
    "number":1132,
    "rate":10.2,
    "state":"IA",
    "name":"Butler County"
  },
  {
    "id":19025,
    "number":874,
    "rate":11.4,
    "state":"IA",
    "name":"Calhoun County"
  },
  {
    "id":19027,
    "number":1554,
    "rate":10.3,
    "state":"IA",
    "name":"Carroll County"
  },
  {
    "id":19029,
    "number":1025,
    "rate":9.9,
    "state":"IA",
    "name":"Cass County"
  },
  {
    "id":19031,
    "number":1464,
    "rate":10.7,
    "state":"IA",
    "name":"Cedar County"
  },
  {
    "id":19033,
    "number":3826,
    "rate":11.5,
    "state":"IA",
    "name":"Cerro Gordo County"
  },
  {
    "id":19035,
    "number":1035,
    "rate":11.2,
    "state":"IA",
    "name":"Cherokee County"
  },
  {
    "id":19037,
    "number":934,
    "rate":10.3,
    "state":"IA",
    "name":"Chickasaw County"
  },
  {
    "id":19039,
    "number":667,
    "rate":9.8,
    "state":"IA",
    "name":"Clarke County"
  },
  {
    "id":19041,
    "number":1199,
    "rate":9.6,
    "state":"IA",
    "name":"Clay County"
  },
  {
    "id":19043,
    "number":1211,
    "rate":9,
    "state":"IA",
    "name":"Clayton County"
  },
  {
    "id":19045,
    "number":4325,
    "rate":12,
    "state":"IA",
    "name":"Clinton County"
  },
  {
    "id":19047,
    "number":1286,
    "rate":10.5,
    "state":"IA",
    "name":"Crawford County"
  },
  {
    "id":19049,
    "number":3980,
    "rate":8,
    "state":"IA",
    "name":"Dallas County"
  },
  {
    "id":19051,
    "number":681,
    "rate":11.3,
    "state":"IA",
    "name":"Davis County"
  },
  {
    "id":19053,
    "number":623,
    "rate":10.4,
    "state":"IA",
    "name":"Decatur County"
  },
  {
    "id":19055,
    "number":1357,
    "rate":10.5,
    "state":"IA",
    "name":"Delaware County"
  },
  {
    "id":19057,
    "number":3480,
    "rate":11.5,
    "state":"IA",
    "name":"Des Moines County"
  },
  {
    "id":19059,
    "number":1330,
    "rate":10,
    "state":"IA",
    "name":"Dickinson County"
  },
  {
    "id":19061,
    "number":6939,
    "rate":9.9,
    "state":"IA",
    "name":"Dubuque County"
  },
  {
    "id":19063,
    "number":806,
    "rate":10.8,
    "state":"IA",
    "name":"Emmet County"
  },
  {
    "id":19065,
    "number":1627,
    "rate":10.5,
    "state":"IA",
    "name":"Fayette County"
  },
  {
    "id":19067,
    "number":1498,
    "rate":12.5,
    "state":"IA",
    "name":"Floyd County"
  },
  {
    "id":19069,
    "number":821,
    "rate":10.5,
    "state":"IA",
    "name":"Franklin County"
  },
  {
    "id":19071,
    "number":576,
    "rate":10.6,
    "state":"IA",
    "name":"Fremont County"
  },
  {
    "id":19073,
    "number":708,
    "rate":10.3,
    "state":"IA",
    "name":"Greene County"
  },
  {
    "id":19075,
    "number":961,
    "rate":10.4,
    "state":"IA",
    "name":"Grundy County"
  },
  {
    "id":19077,
    "number":786,
    "rate":9.7,
    "state":"IA",
    "name":"Guthrie County"
  },
  {
    "id":19079,
    "number":1296,
    "rate":11.4,
    "state":"IA",
    "name":"Hamilton County"
  },
  {
    "id":19081,
    "number":855,
    "rate":10.2,
    "state":"IA",
    "name":"Hancock County"
  },
  {
    "id":19083,
    "number":1340,
    "rate":10.3,
    "state":"IA",
    "name":"Hardin County"
  },
  {
    "id":19085,
    "number":1160,
    "rate":10.7,
    "state":"IA",
    "name":"Harrison County"
  },
  {
    "id":19087,
    "number":1643,
    "rate":11,
    "state":"IA",
    "name":"Henry County"
  },
  {
    "id":19089,
    "number":765,
    "rate":11,
    "state":"IA",
    "name":"Howard County"
  },
  {
    "id":19091,
    "number":753,
    "rate":10.4,
    "state":"IA",
    "name":"Humboldt County"
  },
  {
    "id":19093,
    "number":573,
    "rate":10.9,
    "state":"IA",
    "name":"Ida County"
  },
  {
    "id":19095,
    "number":1122,
    "rate":9.3,
    "state":"IA",
    "name":"Iowa County"
  },
  {
    "id":19097,
    "number":1721,
    "rate":11.7,
    "state":"IA",
    "name":"Jackson County"
  },
  {
    "id":19099,
    "number":2911,
    "rate":10.5,
    "state":"IA",
    "name":"Jasper County"
  },
  {
    "id":19101,
    "number":1413,
    "rate":10.5,
    "state":"IA",
    "name":"Jefferson County"
  },
  {
    "id":19103,
    "number":5114,
    "rate":5,
    "state":"IA",
    "name":"Johnson County"
  },
  {
    "id":19105,
    "number":1486,
    "rate":9.5,
    "state":"IA",
    "name":"Jones County"
  },
  {
    "id":19107,
    "number":859,
    "rate":11.1,
    "state":"IA",
    "name":"Keokuk County"
  },
  {
    "id":19109,
    "number":1351,
    "rate":11.7,
    "state":"IA",
    "name":"Kossuth County"
  },
  {
    "id":19111,
    "number":2941,
    "rate":10.8,
    "state":"IA",
    "name":"Lee County"
  },
  {
    "id":19113,
    "number":14640,
    "rate":9.3,
    "state":"IA",
    "name":"Linn County"
  },
  {
    "id":19115,
    "number":876,
    "rate":10.7,
    "state":"IA",
    "name":"Louisa County"
  },
  {
    "id":19117,
    "number":733,
    "rate":11.3,
    "state":"IA",
    "name":"Lucas County"
  },
  {
    "id":19119,
    "number":765,
    "rate":9.3,
    "state":"IA",
    "name":"Lyon County"
  },
  {
    "id":19121,
    "number":1231,
    "rate":11,
    "state":"IA",
    "name":"Madison County"
  },
  {
    "id":19123,
    "number":1703,
    "rate":10.4,
    "state":"IA",
    "name":"Mahaska County"
  },
  {
    "id":19125,
    "number":2420,
    "rate":10.1,
    "state":"IA",
    "name":"Marion County"
  },
  {
    "id":19127,
    "number":3117,
    "rate":10.5,
    "state":"IA",
    "name":"Marshall County"
  },
  {
    "id":19129,
    "number":1001,
    "rate":9.3,
    "state":"IA",
    "name":"Mills County"
  },
  {
    "id":19131,
    "number":781,
    "rate":9.9,
    "state":"IA",
    "name":"Mitchell County"
  },
  {
    "id":19133,
    "number":771,
    "rate":11,
    "state":"IA",
    "name":"Monona County"
  },
  {
    "id":19135,
    "number":651,
    "rate":11,
    "state":"IA",
    "name":"Monroe County"
  },
  {
    "id":19137,
    "number":884,
    "rate":11.2,
    "state":"IA",
    "name":"Montgomery County"
  },
  {
    "id":19139,
    "number":3017,
    "rate":9.8,
    "state":"IA",
    "name":"Muscatine County"
  },
  {
    "id":19141,
    "number":1032,
    "rate":9.8,
    "state":"IA",
    "name":"Obrien County"
  },
  {
    "id":19143,
    "number":532,
    "rate":11.4,
    "state":"IA",
    "name":"Osceola County"
  },
  {
    "id":19145,
    "number":1389,
    "rate":11.5,
    "state":"IA",
    "name":"Page County"
  },
  {
    "id":19147,
    "number":766,
    "rate":11,
    "state":"IA",
    "name":"Palo Alto County"
  },
  {
    "id":19149,
    "number":1972,
    "rate":10.9,
    "state":"IA",
    "name":"Plymouth County"
  },
  {
    "id":19151,
    "number":655,
    "rate":11.9,
    "state":"IA",
    "name":"Pocahontas County"
  },
  {
    "id":19153,
    "number":26417,
    "rate":8.3,
    "state":"IA",
    "name":"Polk County"
  },
  {
    "id":19155,
    "number":7984,
    "rate":11.7,
    "state":"IA",
    "name":"Pottawattamie County"
  },
  {
    "id":19157,
    "number":1377,
    "rate":9.9,
    "state":"IA",
    "name":"Poweshiek County"
  },
  {
    "id":19159,
    "number":433,
    "rate":11.5,
    "state":"IA",
    "name":"Ringgold County"
  },
  {
    "id":19161,
    "number":796,
    "rate":10.3,
    "state":"IA",
    "name":"Sac County"
  },
  {
    "id":19163,
    "number":10414,
    "rate":8.4,
    "state":"IA",
    "name":"Scott County"
  },
  {
    "id":19165,
    "number":1038,
    "rate":11.5,
    "state":"IA",
    "name":"Shelby County"
  },
  {
    "id":19167,
    "number":1983,
    "rate":8.4,
    "state":"IA",
    "name":"Sioux County"
  },
  {
    "id":19169,
    "number":4255,
    "rate":6.2,
    "state":"IA",
    "name":"Story County"
  },
  {
    "id":19171,
    "number":1406,
    "rate":11,
    "state":"IA",
    "name":"Tama County"
  },
  {
    "id":19173,
    "number":479,
    "rate":10.4,
    "state":"IA",
    "name":"Taylor County"
  },
  {
    "id":19175,
    "number":1189,
    "rate":12.8,
    "state":"IA",
    "name":"Union County"
  },
  {
    "id":19177,
    "number":594,
    "rate":10.7,
    "state":"IA",
    "name":"Van Buren County"
  },
  {
    "id":19179,
    "number":3029,
    "rate":11.5,
    "state":"IA",
    "name":"Wapello County"
  },
  {
    "id":19181,
    "number":3465,
    "rate":10.3,
    "state":"IA",
    "name":"Warren County"
  },
  {
    "id":19183,
    "number":1623,
    "rate":10.2,
    "state":"IA",
    "name":"Washington County"
  },
  {
    "id":19185,
    "number":563,
    "rate":11.9,
    "state":"IA",
    "name":"Wayne County"
  },
  {
    "id":19187,
    "number":2789,
    "rate":10.1,
    "state":"IA",
    "name":"Webster County"
  },
  {
    "id":19189,
    "number":820,
    "rate":10.2,
    "state":"IA",
    "name":"Winnebago County"
  },
  {
    "id":19191,
    "number":1166,
    "rate":7.4,
    "state":"IA",
    "name":"Winneshiek County"
  },
  {
    "id":19193,
    "number":7265,
    "rate":10.1,
    "state":"IA",
    "name":"Woodbury County"
  },
  {
    "id":19195,
    "number":594,
    "rate":10.5,
    "state":"IA",
    "name":"Worth County"
  },
  {
    "id":19197,
    "number":903,
    "rate":9.3,
    "state":"IA",
    "name":"Wright County"
  },
  {
    "id":16001,
    "number":22513,
    "rate":7.7,
    "state":"ID",
    "name":"Ada County"
  },
  {
    "id":16003,
    "number":372,
    "rate":11.8,
    "state":"ID",
    "name":"Adams County"
  },
  {
    "id":16005,
    "number":5986,
    "rate":10.2,
    "state":"ID",
    "name":"Bannock County"
  },
  {
    "id":16007,
    "number":380,
    "rate":9.2,
    "state":"ID",
    "name":"Bear Lake County"
  },
  {
    "id":16009,
    "number":730,
    "rate":10.6,
    "state":"ID",
    "name":"Benewah County"
  },
  {
    "id":16011,
    "number":3444,
    "rate":11.7,
    "state":"ID",
    "name":"Bingham County"
  },
  {
    "id":16013,
    "number":1016,
    "rate":6.5,
    "state":"ID",
    "name":"Blaine County"
  },
  {
    "id":16015,
    "number":523,
    "rate":9.8,
    "state":"ID",
    "name":"Boise County"
  },
  {
    "id":16017,
    "number":2715,
    "rate":8.7,
    "state":"ID",
    "name":"Bonner County"
  },
  {
    "id":16019,
    "number":6512,
    "rate":9.2,
    "state":"ID",
    "name":"Bonneville County"
  },
  {
    "id":16021,
    "number":783,
    "rate":9.8,
    "state":"ID",
    "name":"Boundary County"
  },
  {
    "id":16023,
    "number":197,
    "rate":10.1,
    "state":"ID",
    "name":"Butte County"
  },
  {
    "id":16025,
    "number":77,
    "rate":9.7,
    "state":"ID",
    "name":"Camas County"
  },
  {
    "id":16027,
    "number":13567,
    "rate":10.5,
    "state":"ID",
    "name":"Canyon County"
  },
  {
    "id":16029,
    "number":470,
    "rate":10,
    "state":"ID",
    "name":"Caribou County"
  },
  {
    "id":16031,
    "number":1560,
    "rate":10.3,
    "state":"ID",
    "name":"Cassia County"
  },
  {
    "id":16033,
    "number":58,
    "rate":9.6,
    "state":"ID",
    "name":"Clark County"
  },
  {
    "id":16035,
    "number":791,
    "rate":11.3,
    "state":"ID",
    "name":"Clearwater County"
  },
  {
    "id":16037,
    "number":348,
    "rate":10.1,
    "state":"ID",
    "name":"Custer County"
  },
  {
    "id":16039,
    "number":1732,
    "rate":9.4,
    "state":"ID",
    "name":"Elmore County"
  },
  {
    "id":16041,
    "number":667,
    "rate":8.3,
    "state":"ID",
    "name":"Franklin County"
  },
  {
    "id":16043,
    "number":783,
    "rate":8.9,
    "state":"ID",
    "name":"Fremont County"
  },
  {
    "id":16045,
    "number":1239,
    "rate":10,
    "state":"ID",
    "name":"Gem County"
  },
  {
    "id":16047,
    "number":1132,
    "rate":10.9,
    "state":"ID",
    "name":"Gooding County"
  },
  {
    "id":16049,
    "number":1402,
    "rate":11.1,
    "state":"ID",
    "name":"Idaho County"
  },
  {
    "id":16051,
    "number":1515,
    "rate":9.1,
    "state":"ID",
    "name":"Jefferson County"
  },
  {
    "id":16053,
    "number":1283,
    "rate":8.6,
    "state":"ID",
    "name":"Jerome County"
  },
  {
    "id":16055,
    "number":9672,
    "rate":9.2,
    "state":"ID",
    "name":"Kootenai County"
  },
  {
    "id":16057,
    "number":1991,
    "rate":7,
    "state":"ID",
    "name":"Latah County"
  },
  {
    "id":16059,
    "number":744,
    "rate":12,
    "state":"ID",
    "name":"Lemhi County"
  },
  {
    "id":16061,
    "number":326,
    "rate":11.1,
    "state":"ID",
    "name":"Lewis County"
  },
  {
    "id":16063,
    "number":292,
    "rate":8.4,
    "state":"ID",
    "name":"Lincoln County"
  },
  {
    "id":16065,
    "number":1357,
    "rate":5.5,
    "state":"ID",
    "name":"Madison County"
  },
  {
    "id":16067,
    "number":1649,
    "rate":12,
    "state":"ID",
    "name":"Minidoka County"
  },
  {
    "id":16069,
    "number":3338,
    "rate":11.1,
    "state":"ID",
    "name":"Nez Perce County"
  },
  {
    "id":16071,
    "number":355,
    "rate":12.1,
    "state":"ID",
    "name":"Oneida County"
  },
  {
    "id":16073,
    "number":855,
    "rate":10.8,
    "state":"ID",
    "name":"Owyhee County"
  },
  {
    "id":16075,
    "number":1467,
    "rate":9.3,
    "state":"ID",
    "name":"Payette County"
  },
  {
    "id":16077,
    "number":451,
    "rate":8.7,
    "state":"ID",
    "name":"Power County"
  },
  {
    "id":16079,
    "number":1067,
    "rate":10.8,
    "state":"ID",
    "name":"Shoshone County"
  },
  {
    "id":16081,
    "number":456,
    "rate":6.6,
    "state":"ID",
    "name":"Teton County"
  },
  {
    "id":16083,
    "number":4782,
    "rate":8.7,
    "state":"ID",
    "name":"Twin Falls County"
  },
  {
    "id":16085,
    "number":689,
    "rate":9.1,
    "state":"ID",
    "name":"Valley County"
  },
  {
    "id":16087,
    "number":854,
    "rate":11.6,
    "state":"ID",
    "name":"Washington County"
  },
  {
    "id":17001,
    "number":4814,
    "rate":9.6,
    "state":"IL",
    "name":"Adams County"
  },
  {
    "id":17003,
    "number":747,
    "rate":12.8,
    "state":"IL",
    "name":"Alexander County"
  },
  {
    "id":17005,
    "number":1459,
    "rate":10.8,
    "state":"IL",
    "name":"Bond County"
  },
  {
    "id":17007,
    "number":3668,
    "rate":9.8,
    "state":"IL",
    "name":"Boone County"
  },
  {
    "id":17009,
    "number":518,
    "rate":9.1,
    "state":"IL",
    "name":"Brown County"
  },
  {
    "id":17011,
    "number":3001,
    "rate":11.6,
    "state":"IL",
    "name":"Bureau County"
  },
  {
    "id":17013,
    "number":421,
    "rate":10.9,
    "state":"IL",
    "name":"Calhoun County"
  },
  {
    "id":17015,
    "number":1384,
    "rate":11.8,
    "state":"IL",
    "name":"Carroll County"
  },
  {
    "id":17017,
    "number":1024,
    "rate":10.5,
    "state":"IL",
    "name":"Cass County"
  },
  {
    "id":17019,
    "number":11735,
    "rate":7.8,
    "state":"IL",
    "name":"Champaign County"
  },
  {
    "id":17021,
    "number":2935,
    "rate":11.2,
    "state":"IL",
    "name":"Christian County"
  },
  {
    "id":17023,
    "number":1316,
    "rate":10.8,
    "state":"IL",
    "name":"Clark County"
  },
  {
    "id":17025,
    "number":1194,
    "rate":11.5,
    "state":"IL",
    "name":"Clay County"
  },
  {
    "id":17027,
    "number":2458,
    "rate":8.5,
    "state":"IL",
    "name":"Clinton County"
  },
  {
    "id":17029,
    "number":3390,
    "rate":8.3,
    "state":"IL",
    "name":"Coles County"
  },
  {
    "id":17031,
    "number":328064,
    "rate":8.5,
    "state":"IL",
    "name":"Cook County"
  },
  {
    "id":17033,
    "number":1698,
    "rate":11.1,
    "state":"IL",
    "name":"Crawford County"
  },
  {
    "id":17035,
    "number":916,
    "rate":11.2,
    "state":"IL",
    "name":"Cumberland County"
  },
  {
    "id":17039,
    "number":1421,
    "rate":11.4,
    "state":"IL",
    "name":"De Witt County"
  },
  {
    "id":17037,
    "number":6106,
    "rate":8.1,
    "state":"IL",
    "name":"Dekalb County"
  },
  {
    "id":17041,
    "number":1497,
    "rate":10.4,
    "state":"IL",
    "name":"Douglas County"
  },
  {
    "id":17043,
    "number":57437,
    "rate":8.5,
    "state":"IL",
    "name":"Dupage County"
  },
  {
    "id":17045,
    "number":1578,
    "rate":11.4,
    "state":"IL",
    "name":"Edgar County"
  },
  {
    "id":17047,
    "number":534,
    "rate":10.6,
    "state":"IL",
    "name":"Edwards County"
  },
  {
    "id":17049,
    "number":2567,
    "rate":10.2,
    "state":"IL",
    "name":"Effingham County"
  },
  {
    "id":17051,
    "number":1927,
    "rate":11.6,
    "state":"IL",
    "name":"Fayette County"
  },
  {
    "id":17053,
    "number":1161,
    "rate":11.1,
    "state":"IL",
    "name":"Ford County"
  },
  {
    "id":17055,
    "number":3490,
    "rate":11.7,
    "state":"IL",
    "name":"Franklin County"
  },
  {
    "id":17057,
    "number":3221,
    "rate":11.4,
    "state":"IL",
    "name":"Fulton County"
  },
  {
    "id":17059,
    "number":490,
    "rate":11.5,
    "state":"IL",
    "name":"Gallatin County"
  },
  {
    "id":17061,
    "number":1200,
    "rate":11.7,
    "state":"IL",
    "name":"Greene County"
  },
  {
    "id":17063,
    "number":3460,
    "rate":9.7,
    "state":"IL",
    "name":"Grundy County"
  },
  {
    "id":17065,
    "number":696,
    "rate":11,
    "state":"IL",
    "name":"Hamilton County"
  },
  {
    "id":17067,
    "number":1527,
    "rate":10.6,
    "state":"IL",
    "name":"Hancock County"
  },
  {
    "id":17069,
    "number":400,
    "rate":12.1,
    "state":"IL",
    "name":"Hardin County"
  },
  {
    "id":17071,
    "number":647,
    "rate":11.7,
    "state":"IL",
    "name":"Henderson County"
  },
  {
    "id":17073,
    "number":3913,
    "rate":10.5,
    "state":"IL",
    "name":"Henry County"
  },
  {
    "id":17075,
    "number":2468,
    "rate":11.3,
    "state":"IL",
    "name":"Iroquois County"
  },
  {
    "id":17077,
    "number":4156,
    "rate":9,
    "state":"IL",
    "name":"Jackson County"
  },
  {
    "id":17079,
    "number":807,
    "rate":11.1,
    "state":"IL",
    "name":"Jasper County"
  },
  {
    "id":17081,
    "number":3393,
    "rate":11.5,
    "state":"IL",
    "name":"Jefferson County"
  },
  {
    "id":17083,
    "number":1761,
    "rate":10.3,
    "state":"IL",
    "name":"Jersey County"
  },
  {
    "id":17085,
    "number":2009,
    "rate":11.5,
    "state":"IL",
    "name":"Jo Daviess County"
  },
  {
    "id":17087,
    "number":1097,
    "rate":10.9,
    "state":"IL",
    "name":"Johnson County"
  },
  {
    "id":17089,
    "number":28324,
    "rate":7.8,
    "state":"IL",
    "name":"Kane County"
  },
  {
    "id":17091,
    "number":8173,
    "rate":10,
    "state":"IL",
    "name":"Kankakee County"
  },
  {
    "id":17093,
    "number":6172,
    "rate":7.8,
    "state":"IL",
    "name":"Kendall County"
  },
  {
    "id":17095,
    "number":3942,
    "rate":9.8,
    "state":"IL",
    "name":"Knox County"
  },
  {
    "id":17097,
    "number":44376,
    "rate":9,
    "state":"IL",
    "name":"Lake County"
  },
  {
    "id":17099,
    "number":9468,
    "rate":11.2,
    "state":"IL",
    "name":"La Salle County"
  },
  {
    "id":17101,
    "number":1555,
    "rate":11.9,
    "state":"IL",
    "name":"Lawrence County"
  },
  {
    "id":17105,
    "number":3021,
    "rate":10.4,
    "state":"IL",
    "name":"Livingston County"
  },
  {
    "id":17107,
    "number":2290,
    "rate":9.9,
    "state":"IL",
    "name":"Logan County"
  },
  {
    "id":17115,
    "number":8622,
    "rate":10.5,
    "state":"IL",
    "name":"Macon County"
  },
  {
    "id":17103,
    "number":2861,
    "rate":10.6,
    "state":"IL",
    "name":"Lee County"
  },
  {
    "id":17117,
    "number":4265,
    "rate":12,
    "state":"IL",
    "name":"Macoupin County"
  },
  {
    "id":17119,
    "number":22767,
    "rate":11.3,
    "state":"IL",
    "name":"Madison County"
  },
  {
    "id":17121,
    "number":2874,
    "rate":9.9,
    "state":"IL",
    "name":"Marion County"
  },
  {
    "id":17123,
    "number":1105,
    "rate":11.7,
    "state":"IL",
    "name":"Marshall County"
  },
  {
    "id":17125,
    "number":1270,
    "rate":11.6,
    "state":"IL",
    "name":"Mason County"
  },
  {
    "id":17127,
    "number":1364,
    "rate":11.9,
    "state":"IL",
    "name":"Massac County"
  },
  {
    "id":17109,
    "number":2478,
    "rate":9.9,
    "state":"IL",
    "name":"McDonough County"
  },
  {
    "id":17111,
    "number":20803,
    "rate":9.5,
    "state":"IL",
    "name":"McHenry County"
  },
  {
    "id":17113,
    "number":9472,
    "rate":7.6,
    "state":"IL",
    "name":"Mclean County"
  },
  {
    "id":17129,
    "number":984,
    "rate":10.3,
    "state":"IL",
    "name":"Menard County"
  },
  {
    "id":17131,
    "number":1416,
    "rate":11.5,
    "state":"IL",
    "name":"Mercer County"
  },
  {
    "id":17133,
    "number":2793,
    "rate":11.3,
    "state":"IL",
    "name":"Monroe County"
  },
  {
    "id":17135,
    "number":2208,
    "rate":9.7,
    "state":"IL",
    "name":"Montgomery County"
  },
  {
    "id":17137,
    "number":3140,
    "rate":11.7,
    "state":"IL",
    "name":"Morgan County"
  },
  {
    "id":17139,
    "number":1123,
    "rate":10.3,
    "state":"IL",
    "name":"Moultrie County"
  },
  {
    "id":17141,
    "number":4421,
    "rate":11.3,
    "state":"IL",
    "name":"Ogle County"
  },
  {
    "id":17143,
    "number":12831,
    "rate":9.3,
    "state":"IL",
    "name":"Peoria County"
  },
  {
    "id":17145,
    "number":1821,
    "rate":10.7,
    "state":"IL",
    "name":"Perry County"
  },
  {
    "id":17147,
    "number":1348,
    "rate":10.9,
    "state":"IL",
    "name":"Piatt County"
  },
  {
    "id":17149,
    "number":1466,
    "rate":11.9,
    "state":"IL",
    "name":"Pike County"
  },
  {
    "id":17151,
    "number":383,
    "rate":11.3,
    "state":"IL",
    "name":"Pope County"
  },
  {
    "id":17153,
    "number":604,
    "rate":13.4,
    "state":"IL",
    "name":"Pulaski County"
  },
  {
    "id":17155,
    "number":499,
    "rate":10.9,
    "state":"IL",
    "name":"Putnam County"
  },
  {
    "id":17157,
    "number":2584,
    "rate":10,
    "state":"IL",
    "name":"Randolph County"
  },
  {
    "id":17159,
    "number":1388,
    "rate":11.3,
    "state":"IL",
    "name":"Richland County"
  },
  {
    "id":17161,
    "number":12770,
    "rate":11.5,
    "state":"IL",
    "name":"Rock Island County"
  },
  {
    "id":17165,
    "number":2374,
    "rate":12.6,
    "state":"IL",
    "name":"Saline County"
  },
  {
    "id":17167,
    "number":16703,
    "rate":11.3,
    "state":"IL",
    "name":"Sangamon County"
  },
  {
    "id":17169,
    "number":619,
    "rate":10.7,
    "state":"IL",
    "name":"Schuyler County"
  },
  {
    "id":17171,
    "number":414,
    "rate":10.5,
    "state":"IL",
    "name":"Scott County"
  },
  {
    "id":17173,
    "number":1683,
    "rate":10,
    "state":"IL",
    "name":"Shelby County"
  },
  {
    "id":17163,
    "number":24131,
    "rate":12.3,
    "state":"IL",
    "name":"St. Clair County"
  },
  {
    "id":17175,
    "number":545,
    "rate":12,
    "state":"IL",
    "name":"Stark County"
  },
  {
    "id":17177,
    "number":4165,
    "rate":11.7,
    "state":"IL",
    "name":"Stephenson County"
  },
  {
    "id":17179,
    "number":10104,
    "rate":9.9,
    "state":"IL",
    "name":"Tazewell County"
  },
  {
    "id":17181,
    "number":1601,
    "rate":11.8,
    "state":"IL",
    "name":"Union County"
  },
  {
    "id":17183,
    "number":7745,
    "rate":13.1,
    "state":"IL",
    "name":"Vermilion County"
  },
  {
    "id":17185,
    "number":1108,
    "rate":12.4,
    "state":"IL",
    "name":"Wabash County"
  },
  {
    "id":17187,
    "number":1403,
    "rate":10.7,
    "state":"IL",
    "name":"Warren County"
  },
  {
    "id":17189,
    "number":1256,
    "rate":11.2,
    "state":"IL",
    "name":"Washington County"
  },
  {
    "id":17191,
    "number":1405,
    "rate":11.2,
    "state":"IL",
    "name":"Wayne County"
  },
  {
    "id":17193,
    "number":1215,
    "rate":10.9,
    "state":"IL",
    "name":"White County"
  },
  {
    "id":17195,
    "number":4598,
    "rate":10.6,
    "state":"IL",
    "name":"Whiteside County"
  },
  {
    "id":17197,
    "number":42573,
    "rate":9,
    "state":"IL",
    "name":"Will County"
  },
  {
    "id":17201,
    "number":25561,
    "rate":12,
    "state":"IL",
    "name":"Winnebago County"
  },
  {
    "id":17203,
    "number":2627,
    "rate":9.3,
    "state":"IL",
    "name":"Woodford County"
  },
  {
    "id":17199,
    "number":5241,
    "rate":10.3,
    "state":"IL",
    "name":"Williamson County"
  },
  {
    "id":18001,
    "number":2612,
    "rate":11.4,
    "state":"IN",
    "name":"Adams County"
  },
  {
    "id":18003,
    "number":25577,
    "rate":10,
    "state":"IN",
    "name":"Allen County"
  },
  {
    "id":18005,
    "number":6292,
    "rate":10.9,
    "state":"IN",
    "name":"Bartholomew County"
  },
  {
    "id":18007,
    "number":788,
    "rate":12.3,
    "state":"IN",
    "name":"Benton County"
  },
  {
    "id":18009,
    "number":1256,
    "rate":13.3,
    "state":"IN",
    "name":"Blackford County"
  },
  {
    "id":18011,
    "number":3964,
    "rate":9.6,
    "state":"IN",
    "name":"Boone County"
  },
  {
    "id":18013,
    "number":1415,
    "rate":12.1,
    "state":"IN",
    "name":"Brown County"
  },
  {
    "id":18015,
    "number":1711,
    "rate":11.5,
    "state":"IN",
    "name":"Carroll County"
  },
  {
    "id":18017,
    "number":2737,
    "rate":9.7,
    "state":"IN",
    "name":"Cass County"
  },
  {
    "id":18019,
    "number":10179,
    "rate":12.2,
    "state":"IN",
    "name":"Clark County"
  },
  {
    "id":18021,
    "number":2241,
    "rate":11.2,
    "state":"IN",
    "name":"Clay County"
  },
  {
    "id":18023,
    "number":2889,
    "rate":12.3,
    "state":"IN",
    "name":"Clinton County"
  },
  {
    "id":18025,
    "number":1075,
    "rate":13.5,
    "state":"IN",
    "name":"Crawford County"
  },
  {
    "id":18027,
    "number":2612,
    "rate":11.9,
    "state":"IN",
    "name":"Daviess County"
  },
  {
    "id":18029,
    "number":4152,
    "rate":11.3,
    "state":"IN",
    "name":"Dearborn County"
  },
  {
    "id":18031,
    "number":2464,
    "rate":13,
    "state":"IN",
    "name":"Decatur County"
  },
  {
    "id":18033,
    "number":3102,
    "rate":10.2,
    "state":"IN",
    "name":"De Kalb County"
  },
  {
    "id":18035,
    "number":11277,
    "rate":12.8,
    "state":"IN",
    "name":"Delaware County"
  },
  {
    "id":18037,
    "number":3268,
    "rate":10.7,
    "state":"IN",
    "name":"Dubois County"
  },
  {
    "id":18039,
    "number":13406,
    "rate":9.7,
    "state":"IN",
    "name":"Elkhart County"
  },
  {
    "id":18041,
    "number":2289,
    "rate":12.8,
    "state":"IN",
    "name":"Fayette County"
  },
  {
    "id":18043,
    "number":5398,
    "rate":9.6,
    "state":"IN",
    "name":"Floyd County"
  },
  {
    "id":18045,
    "number":1697,
    "rate":13.4,
    "state":"IN",
    "name":"Fountain County"
  },
  {
    "id":18047,
    "number":1861,
    "rate":11.2,
    "state":"IN",
    "name":"Franklin County"
  },
  {
    "id":18049,
    "number":1736,
    "rate":11.4,
    "state":"IN",
    "name":"Fulton County"
  },
  {
    "id":18051,
    "number":3126,
    "rate":12.6,
    "state":"IN",
    "name":"Gibson County"
  },
  {
    "id":18053,
    "number":7232,
    "rate":14,
    "state":"IN",
    "name":"Grant County"
  },
  {
    "id":18055,
    "number":3554,
    "rate":14.4,
    "state":"IN",
    "name":"Greene County"
  },
  {
    "id":18057,
    "number":17167,
    "rate":8.7,
    "state":"IN",
    "name":"Hamilton County"
  },
  {
    "id":18059,
    "number":5664,
    "rate":11,
    "state":"IN",
    "name":"Hancock County"
  },
  {
    "id":18061,
    "number":3302,
    "rate":11.3,
    "state":"IN",
    "name":"Harrison County"
  },
  {
    "id":18063,
    "number":9418,
    "rate":8.8,
    "state":"IN",
    "name":"Hendricks County"
  },
  {
    "id":18065,
    "number":4413,
    "rate":11.7,
    "state":"IN",
    "name":"Henry County"
  },
  {
    "id":18067,
    "number":8705,
    "rate":14.1,
    "state":"IN",
    "name":"Howard County"
  },
  {
    "id":18069,
    "number":3435,
    "rate":12.5,
    "state":"IN",
    "name":"Huntington County"
  },
  {
    "id":18071,
    "number":4119,
    "rate":13,
    "state":"IN",
    "name":"Jackson County"
  },
  {
    "id":18073,
    "number":2512,
    "rate":10.4,
    "state":"IN",
    "name":"Jasper County"
  },
  {
    "id":18075,
    "number":2231,
    "rate":14.7,
    "state":"IN",
    "name":"Jay County"
  },
  {
    "id":18077,
    "number":3076,
    "rate":12.6,
    "state":"IN",
    "name":"Jefferson County"
  },
  {
    "id":18079,
    "number":2469,
    "rate":12.2,
    "state":"IN",
    "name":"Jennings County"
  },
  {
    "id":18081,
    "number":11115,
    "rate":10.8,
    "state":"IN",
    "name":"Johnson County"
  },
  {
    "id":18083,
    "number":2878,
    "rate":10.2,
    "state":"IN",
    "name":"Knox County"
  },
  {
    "id":18085,
    "number":6173,
    "rate":11,
    "state":"IN",
    "name":"Kosciusko County"
  },
  {
    "id":18087,
    "number":2923,
    "rate":12.3,
    "state":"IN",
    "name":"Lagrange County"
  },
  {
    "id":18089,
    "number":44996,
    "rate":12.6,
    "state":"IN",
    "name":"Lake County"
  },
  {
    "id":18091,
    "number":8905,
    "rate":10.6,
    "state":"IN",
    "name":"La Porte County"
  },
  {
    "id":18093,
    "number":5145,
    "rate":14.9,
    "state":"IN",
    "name":"Lawrence County"
  },
  {
    "id":18095,
    "number":12498,
    "rate":12.8,
    "state":"IN",
    "name":"Madison County"
  },
  {
    "id":18097,
    "number":70892,
    "rate":10.6,
    "state":"IN",
    "name":"Marion County"
  },
  {
    "id":18099,
    "number":3547,
    "rate":10.6,
    "state":"IN",
    "name":"Marshall County"
  },
  {
    "id":18101,
    "number":1109,
    "rate":14.5,
    "state":"IN",
    "name":"Martin County"
  },
  {
    "id":18103,
    "number":2991,
    "rate":10.9,
    "state":"IN",
    "name":"Miami County"
  },
  {
    "id":18105,
    "number":8740,
    "rate":8.1,
    "state":"IN",
    "name":"Monroe County"
  },
  {
    "id":18107,
    "number":3475,
    "rate":12.3,
    "state":"IN",
    "name":"Montgomery County"
  },
  {
    "id":18109,
    "number":6701,
    "rate":13.2,
    "state":"IN",
    "name":"Morgan County"
  },
  {
    "id":18111,
    "number":1224,
    "rate":11.5,
    "state":"IN",
    "name":"Newton County"
  },
  {
    "id":18113,
    "number":3832,
    "rate":11.3,
    "state":"IN",
    "name":"Noble County"
  },
  {
    "id":18115,
    "number":574,
    "rate":12.2,
    "state":"IN",
    "name":"Ohio County"
  },
  {
    "id":18117,
    "number":1673,
    "rate":11.6,
    "state":"IN",
    "name":"Orange County"
  },
  {
    "id":18119,
    "number":1993,
    "rate":12.4,
    "state":"IN",
    "name":"Owen County"
  },
  {
    "id":18121,
    "number":1519,
    "rate":11.6,
    "state":"IN",
    "name":"Parke County"
  },
  {
    "id":18123,
    "number":1761,
    "rate":11.7,
    "state":"IN",
    "name":"Perry County"
  },
  {
    "id":18125,
    "number":1225,
    "rate":12.7,
    "state":"IN",
    "name":"Pike County"
  },
  {
    "id":18127,
    "number":11767,
    "rate":9.6,
    "state":"IN",
    "name":"Porter County"
  },
  {
    "id":18129,
    "number":2459,
    "rate":12.9,
    "state":"IN",
    "name":"Posey County"
  },
  {
    "id":18131,
    "number":1212,
    "rate":12.5,
    "state":"IN",
    "name":"Pulaski County"
  },
  {
    "id":18133,
    "number":3046,
    "rate":10.8,
    "state":"IN",
    "name":"Putnam County"
  },
  {
    "id":18135,
    "number":2682,
    "rate":14.1,
    "state":"IN",
    "name":"Randolph County"
  },
  {
    "id":18137,
    "number":2748,
    "rate":13.3,
    "state":"IN",
    "name":"Ripley County"
  },
  {
    "id":18139,
    "number":1651,
    "rate":13,
    "state":"IN",
    "name":"Rush County"
  },
  {
    "id":18143,
    "number":2066,
    "rate":11.7,
    "state":"IN",
    "name":"Scott County"
  },
  {
    "id":18145,
    "number":3688,
    "rate":11.2,
    "state":"IN",
    "name":"Shelby County"
  },
  {
    "id":18147,
    "number":1555,
    "rate":10,
    "state":"IN",
    "name":"Spencer County"
  },
  {
    "id":18141,
    "number":19057,
    "rate":9.9,
    "state":"IN",
    "name":"St. Joseph County"
  },
  {
    "id":18149,
    "number":2140,
    "rate":12.5,
    "state":"IN",
    "name":"Starke County"
  },
  {
    "id":18151,
    "number":2803,
    "rate":11,
    "state":"IN",
    "name":"Steuben County"
  },
  {
    "id":18153,
    "number":2100,
    "rate":12.9,
    "state":"IN",
    "name":"Sullivan County"
  },
  {
    "id":18155,
    "number":998,
    "rate":13.1,
    "state":"IN",
    "name":"Switzerland County"
  },
  {
    "id":18157,
    "number":10057,
    "rate":7.7,
    "state":"IN",
    "name":"Tippecanoe County"
  },
  {
    "id":18159,
    "number":1369,
    "rate":11.5,
    "state":"IN",
    "name":"Tipton County"
  },
  {
    "id":18161,
    "number":666,
    "rate":12.3,
    "state":"IN",
    "name":"Union County"
  },
  {
    "id":18163,
    "number":16889,
    "rate":12.4,
    "state":"IN",
    "name":"Vanderburgh County"
  },
  {
    "id":18165,
    "number":1492,
    "rate":12.4,
    "state":"IN",
    "name":"Vermillion County"
  },
  {
    "id":18167,
    "number":8295,
    "rate":10.2,
    "state":"IN",
    "name":"Vigo County"
  },
  {
    "id":18169,
    "number":3357,
    "rate":13.9,
    "state":"IN",
    "name":"Wabash County"
  },
  {
    "id":18171,
    "number":724,
    "rate":11.4,
    "state":"IN",
    "name":"Warren County"
  },
  {
    "id":18173,
    "number":4916,
    "rate":11.2,
    "state":"IN",
    "name":"Warrick County"
  },
  {
    "id":18175,
    "number":2407,
    "rate":11.7,
    "state":"IN",
    "name":"Washington County"
  },
  {
    "id":18177,
    "number":6339,
    "rate":12.4,
    "state":"IN",
    "name":"Wayne County"
  },
  {
    "id":18179,
    "number":2384,
    "rate":11.7,
    "state":"IN",
    "name":"Wells County"
  },
  {
    "id":18181,
    "number":2369,
    "rate":13.1,
    "state":"IN",
    "name":"White County"
  },
  {
    "id":18183,
    "number":2705,
    "rate":11,
    "state":"IN",
    "name":"Whitley County"
  },
  {
    "id":20001,
    "number":1099,
    "rate":11.2,
    "state":"KS",
    "name":"Allen County"
  },
  {
    "id":20003,
    "number":507,
    "rate":8.8,
    "state":"KS",
    "name":"Anderson County"
  },
  {
    "id":20005,
    "number":1222,
    "rate":10.2,
    "state":"KS",
    "name":"Atchison County"
  },
  {
    "id":20007,
    "number":346,
    "rate":9.4,
    "state":"KS",
    "name":"Barber County"
  },
  {
    "id":20009,
    "number":2060,
    "rate":10.3,
    "state":"KS",
    "name":"Barton County"
  },
  {
    "id":20011,
    "number":1219,
    "rate":11.4,
    "state":"KS",
    "name":"Bourbon County"
  },
  {
    "id":20013,
    "number":849,
    "rate":11.8,
    "state":"KS",
    "name":"Brown County"
  },
  {
    "id":20015,
    "number":4622,
    "rate":9.9,
    "state":"KS",
    "name":"Butler County"
  },
  {
    "id":20017,
    "number":247,
    "rate":11.7,
    "state":"KS",
    "name":"Chase County"
  },
  {
    "id":20019,
    "number":336,
    "rate":12.1,
    "state":"KS",
    "name":"Chautauqua County"
  },
  {
    "id":20021,
    "number":1939,
    "rate":12.5,
    "state":"KS",
    "name":"Cherokee County"
  },
  {
    "id":20023,
    "number":252,
    "rate":12.3,
    "state":"KS",
    "name":"Cheyenne County"
  },
  {
    "id":20025,
    "number":192,
    "rate":12.3,
    "state":"KS",
    "name":"Clark County"
  },
  {
    "id":20027,
    "number":712,
    "rate":11.2,
    "state":"KS",
    "name":"Clay County"
  },
  {
    "id":20029,
    "number":911,
    "rate":13.2,
    "state":"KS",
    "name":"Cloud County"
  },
  {
    "id":20031,
    "number":574,
    "rate":9.1,
    "state":"KS",
    "name":"Coffey County"
  },
  {
    "id":20033,
    "number":165,
    "rate":11.7,
    "state":"KS",
    "name":"Comanche County"
  },
  {
    "id":20035,
    "number":3140,
    "rate":12,
    "state":"KS",
    "name":"Cowley County"
  },
  {
    "id":20037,
    "number":3287,
    "rate":11.4,
    "state":"KS",
    "name":"Crawford County"
  },
  {
    "id":20039,
    "number":311,
    "rate":13.5,
    "state":"KS",
    "name":"Decatur County"
  },
  {
    "id":20041,
    "number":1681,
    "rate":11.6,
    "state":"KS",
    "name":"Dickinson County"
  },
  {
    "id":20043,
    "number":588,
    "rate":10.3,
    "state":"KS",
    "name":"Doniphan County"
  },
  {
    "id":20045,
    "number":5060,
    "rate":6,
    "state":"KS",
    "name":"Douglas County"
  },
  {
    "id":20047,
    "number":232,
    "rate":10.4,
    "state":"KS",
    "name":"Edwards County"
  },
  {
    "id":20051,
    "number":1818,
    "rate":8.4,
    "state":"KS",
    "name":"Ellis County"
  },
  {
    "id":20049,
    "number":264,
    "rate":12.6,
    "state":"KS",
    "name":"Elk County"
  },
  {
    "id":20053,
    "number":555,
    "rate":10.8,
    "state":"KS",
    "name":"Ellsworth County"
  },
  {
    "id":20055,
    "number":2160,
    "rate":8.9,
    "state":"KS",
    "name":"Finney County"
  },
  {
    "id":20057,
    "number":2019,
    "rate":8.9,
    "state":"KS",
    "name":"Ford County"
  },
  {
    "id":20059,
    "number":1968,
    "rate":10.6,
    "state":"KS",
    "name":"Franklin County"
  },
  {
    "id":20061,
    "number":2006,
    "rate":7.9,
    "state":"KS",
    "name":"Geary County"
  },
  {
    "id":20063,
    "number":250,
    "rate":12.3,
    "state":"KS",
    "name":"Gove County"
  },
  {
    "id":20065,
    "number":226,
    "rate":11.1,
    "state":"KS",
    "name":"Graham County"
  },
  {
    "id":20067,
    "number":460,
    "rate":8.9,
    "state":"KS",
    "name":"Grant County"
  },
  {
    "id":20069,
    "number":379,
    "rate":9.3,
    "state":"KS",
    "name":"Gray County"
  },
  {
    "id":20071,
    "number":99,
    "rate":10.4,
    "state":"KS",
    "name":"Greeley County"
  },
  {
    "id":20073,
    "number":575,
    "rate":11.6,
    "state":"KS",
    "name":"Greenwood County"
  },
  {
    "id":20075,
    "number":159,
    "rate":8.7,
    "state":"KS",
    "name":"Hamilton County"
  },
  {
    "id":20077,
    "number":481,
    "rate":11,
    "state":"KS",
    "name":"Harper County"
  },
  {
    "id":20079,
    "number":2557,
    "rate":10.3,
    "state":"KS",
    "name":"Harvey County"
  },
  {
    "id":20081,
    "number":246,
    "rate":8.8,
    "state":"KS",
    "name":"Haskell County"
  },
  {
    "id":20083,
    "number":176,
    "rate":12.1,
    "state":"KS",
    "name":"Hodgeman County"
  },
  {
    "id":20085,
    "number":1052,
    "rate":11,
    "state":"KS",
    "name":"Jackson County"
  },
  {
    "id":20087,
    "number":1448,
    "rate":10.4,
    "state":"KS",
    "name":"Jefferson County"
  },
  {
    "id":20089,
    "number":309,
    "rate":12.8,
    "state":"KS",
    "name":"Jewell County"
  },
  {
    "id":20091,
    "number":28547,
    "rate":7.1,
    "state":"KS",
    "name":"Johnson County"
  },
  {
    "id":20093,
    "number":270,
    "rate":10.1,
    "state":"KS",
    "name":"Kearny County"
  },
  {
    "id":20095,
    "number":768,
    "rate":13.1,
    "state":"KS",
    "name":"Kingman County"
  },
  {
    "id":20097,
    "number":193,
    "rate":10.3,
    "state":"KS",
    "name":"Kiowa County"
  },
  {
    "id":20099,
    "number":1856,
    "rate":11.9,
    "state":"KS",
    "name":"Labette County"
  },
  {
    "id":20101,
    "number":145,
    "rate":11.2,
    "state":"KS",
    "name":"Lane County"
  },
  {
    "id":20103,
    "number":5289,
    "rate":9.3,
    "state":"KS",
    "name":"Leavenworth County"
  },
  {
    "id":20105,
    "number":264,
    "rate":11.3,
    "state":"KS",
    "name":"Lincoln County"
  },
  {
    "id":20107,
    "number":739,
    "rate":10.4,
    "state":"KS",
    "name":"Linn County"
  },
  {
    "id":20109,
    "number":291,
    "rate":14,
    "state":"KS",
    "name":"Logan County"
  },
  {
    "id":20111,
    "number":2447,
    "rate":10.1,
    "state":"KS",
    "name":"Lyon County"
  },
  {
    "id":20115,
    "number":902,
    "rate":9.7,
    "state":"KS",
    "name":"Marion County"
  },
  {
    "id":20117,
    "number":766,
    "rate":10.1,
    "state":"KS",
    "name":"Marshall County"
  },
  {
    "id":20113,
    "number":2091,
    "rate":9.6,
    "state":"KS",
    "name":"McPherson County"
  },
  {
    "id":20119,
    "number":329,
    "rate":10.7,
    "state":"KS",
    "name":"Meade County"
  },
  {
    "id":20121,
    "number":2270,
    "rate":9.8,
    "state":"KS",
    "name":"Miami County"
  },
  {
    "id":20123,
    "number":553,
    "rate":11.7,
    "state":"KS",
    "name":"Mitchell County"
  },
  {
    "id":20125,
    "number":3529,
    "rate":14.1,
    "state":"KS",
    "name":"Montgomery County"
  },
  {
    "id":20127,
    "number":475,
    "rate":10.5,
    "state":"KS",
    "name":"Morris County"
  },
  {
    "id":20129,
    "number":249,
    "rate":11.1,
    "state":"KS",
    "name":"Morton County"
  },
  {
    "id":20131,
    "number":744,
    "rate":10.3,
    "state":"KS",
    "name":"Nemaha County"
  },
  {
    "id":20133,
    "number":1450,
    "rate":12.2,
    "state":"KS",
    "name":"Neosho County"
  },
  {
    "id":20135,
    "number":265,
    "rate":11.4,
    "state":"KS",
    "name":"Ness County"
  },
  {
    "id":20137,
    "number":473,
    "rate":10.7,
    "state":"KS",
    "name":"Norton County"
  },
  {
    "id":20139,
    "number":1323,
    "rate":11.2,
    "state":"KS",
    "name":"Osage County"
  },
  {
    "id":20141,
    "number":353,
    "rate":12,
    "state":"KS",
    "name":"Osborne County"
  },
  {
    "id":20143,
    "number":514,
    "rate":11.6,
    "state":"KS",
    "name":"Ottawa County"
  },
  {
    "id":20145,
    "number":607,
    "rate":11.4,
    "state":"KS",
    "name":"Pawnee County"
  },
  {
    "id":20147,
    "number":476,
    "rate":11.6,
    "state":"KS",
    "name":"Phillips County"
  },
  {
    "id":20149,
    "number":1629,
    "rate":10.7,
    "state":"KS",
    "name":"Pottawatomie County"
  },
  {
    "id":20151,
    "number":791,
    "rate":11.1,
    "state":"KS",
    "name":"Pratt County"
  },
  {
    "id":20153,
    "number":264,
    "rate":13,
    "state":"KS",
    "name":"Rawlins County"
  },
  {
    "id":20155,
    "number":5641,
    "rate":11.8,
    "state":"KS",
    "name":"Reno County"
  },
  {
    "id":20157,
    "number":423,
    "rate":11.1,
    "state":"KS",
    "name":"Republic County"
  },
  {
    "id":20159,
    "number":818,
    "rate":11.3,
    "state":"KS",
    "name":"Rice County"
  },
  {
    "id":20161,
    "number":3299,
    "rate":5.8,
    "state":"KS",
    "name":"Riley County"
  },
  {
    "id":20163,
    "number":412,
    "rate":10.5,
    "state":"KS",
    "name":"Rooks County"
  },
  {
    "id":20165,
    "number":273,
    "rate":10.9,
    "state":"KS",
    "name":"Rush County"
  },
  {
    "id":20167,
    "number":717,
    "rate":13.4,
    "state":"KS",
    "name":"Russell County"
  },
  {
    "id":20169,
    "number":4706,
    "rate":11.6,
    "state":"KS",
    "name":"Saline County"
  },
  {
    "id":20171,
    "number":335,
    "rate":9.4,
    "state":"KS",
    "name":"Scott County"
  },
  {
    "id":20173,
    "number":36806,
    "rate":10.3,
    "state":"KS",
    "name":"Sedgwick County"
  },
  {
    "id":20175,
    "number":1344,
    "rate":8.9,
    "state":"KS",
    "name":"Seward County"
  },
  {
    "id":20177,
    "number":13584,
    "rate":10.4,
    "state":"KS",
    "name":"Shawnee County"
  },
  {
    "id":20179,
    "number":228,
    "rate":12,
    "state":"KS",
    "name":"Sheridan County"
  },
  {
    "id":20181,
    "number":462,
    "rate":10.1,
    "state":"KS",
    "name":"Sherman County"
  },
  {
    "id":20183,
    "number":345,
    "rate":11.7,
    "state":"KS",
    "name":"Smith County"
  },
  {
    "id":20185,
    "number":376,
    "rate":11.7,
    "state":"KS",
    "name":"Stafford County"
  },
  {
    "id":20187,
    "number":153,
    "rate":10.1,
    "state":"KS",
    "name":"Stanton County"
  },
  {
    "id":20189,
    "number":391,
    "rate":10.1,
    "state":"KS",
    "name":"Stevens County"
  },
  {
    "id":20191,
    "number":2088,
    "rate":12.2,
    "state":"KS",
    "name":"Sumner County"
  },
  {
    "id":20193,
    "number":512,
    "rate":8.9,
    "state":"KS",
    "name":"Thomas County"
  },
  {
    "id":20195,
    "number":256,
    "rate":10.9,
    "state":"KS",
    "name":"Trego County"
  },
  {
    "id":20197,
    "number":468,
    "rate":9.1,
    "state":"KS",
    "name":"Wabaunsee County"
  },
  {
    "id":20199,
    "number":129,
    "rate":11.8,
    "state":"KS",
    "name":"Wallace County"
  },
  {
    "id":20201,
    "number":488,
    "rate":11.3,
    "state":"KS",
    "name":"Washington County"
  },
  {
    "id":20203,
    "number":171,
    "rate":10.7,
    "state":"KS",
    "name":"Wichita County"
  },
  {
    "id":20205,
    "number":905,
    "rate":13.4,
    "state":"KS",
    "name":"Wilson County"
  },
  {
    "id":20207,
    "number":304,
    "rate":12.1,
    "state":"KS",
    "name":"Woodson County"
  },
  {
    "id":20209,
    "number":14149,
    "rate":12.8,
    "state":"KS",
    "name":"Wyandotte County"
  },
  {
    "id":21001,
    "number":1711,
    "rate":12.3,
    "state":"KY",
    "name":"Adair County"
  },
  {
    "id":21003,
    "number":1785,
    "rate":12,
    "state":"KY",
    "name":"Allen County"
  },
  {
    "id":21005,
    "number":1770,
    "rate":11.2,
    "state":"KY",
    "name":"Anderson County"
  },
  {
    "id":21007,
    "number":871,
    "rate":13.9,
    "state":"KY",
    "name":"Ballard County"
  },
  {
    "id":21009,
    "number":3953,
    "rate":12.5,
    "state":"KY",
    "name":"Barren County"
  },
  {
    "id":21011,
    "number":1078,
    "rate":12.5,
    "state":"KY",
    "name":"Bath County"
  },
  {
    "id":21013,
    "number":2836,
    "rate":13.2,
    "state":"KY",
    "name":"Bell County"
  },
  {
    "id":21015,
    "number":9457,
    "rate":11,
    "state":"KY",
    "name":"Boone County"
  },
  {
    "id":21017,
    "number":2083,
    "rate":14,
    "state":"KY",
    "name":"Bourbon County"
  },
  {
    "id":21019,
    "number":5625,
    "rate":14.9,
    "state":"KY",
    "name":"Boyd County"
  },
  {
    "id":21021,
    "number":2509,
    "rate":11.5,
    "state":"KY",
    "name":"Boyle County"
  },
  {
    "id":21023,
    "number":807,
    "rate":13,
    "state":"KY",
    "name":"Bracken County"
  },
  {
    "id":21025,
    "number":1469,
    "rate":14.2,
    "state":"KY",
    "name":"Breathitt County"
  },
  {
    "id":21027,
    "number":2153,
    "rate":14.5,
    "state":"KY",
    "name":"Breckinridge County"
  },
  {
    "id":21029,
    "number":6662,
    "rate":11.9,
    "state":"KY",
    "name":"Bullitt County"
  },
  {
    "id":21031,
    "number":1339,
    "rate":14,
    "state":"KY",
    "name":"Butler County"
  },
  {
    "id":21033,
    "number":1195,
    "rate":12.3,
    "state":"KY",
    "name":"Caldwell County"
  },
  {
    "id":21035,
    "number":2931,
    "rate":10.2,
    "state":"KY",
    "name":"Calloway County"
  },
  {
    "id":21037,
    "number":7184,
    "rate":10.6,
    "state":"KY",
    "name":"Campbell County"
  },
  {
    "id":21039,
    "number":468,
    "rate":12.3,
    "state":"KY",
    "name":"Carlisle County"
  },
  {
    "id":21041,
    "number":1077,
    "rate":13.6,
    "state":"KY",
    "name":"Carroll County"
  },
  {
    "id":21043,
    "number":2825,
    "rate":13.9,
    "state":"KY",
    "name":"Carter County"
  },
  {
    "id":21045,
    "number":1473,
    "rate":12.3,
    "state":"KY",
    "name":"Casey County"
  },
  {
    "id":21047,
    "number":5659,
    "rate":10.9,
    "state":"KY",
    "name":"Christian County"
  },
  {
    "id":21049,
    "number":3234,
    "rate":12.1,
    "state":"KY",
    "name":"Clark County"
  },
  {
    "id":21051,
    "number":2064,
    "rate":12.6,
    "state":"KY",
    "name":"Clay County"
  },
  {
    "id":21053,
    "number":896,
    "rate":11.7,
    "state":"KY",
    "name":"Clinton County"
  },
  {
    "id":21055,
    "number":898,
    "rate":12.8,
    "state":"KY",
    "name":"Crittenden County"
  },
  {
    "id":21057,
    "number":654,
    "rate":12.6,
    "state":"KY",
    "name":"Cumberland County"
  },
  {
    "id":21059,
    "number":7673,
    "rate":10.7,
    "state":"KY",
    "name":"Daviess County"
  },
  {
    "id":21061,
    "number":1295,
    "rate":14,
    "state":"KY",
    "name":"Edmonson County"
  },
  {
    "id":21063,
    "number":750,
    "rate":12.2,
    "state":"KY",
    "name":"Elliott County"
  },
  {
    "id":21065,
    "number":1638,
    "rate":14.9,
    "state":"KY",
    "name":"Estill County"
  },
  {
    "id":21067,
    "number":20729,
    "rate":9,
    "state":"KY",
    "name":"Fayette County"
  },
  {
    "id":21069,
    "number":1396,
    "rate":13.1,
    "state":"KY",
    "name":"Fleming County"
  },
  {
    "id":21071,
    "number":4284,
    "rate":14.4,
    "state":"KY",
    "name":"Floyd County"
  },
  {
    "id":21073,
    "number":4617,
    "rate":12.3,
    "state":"KY",
    "name":"Franklin County"
  },
  {
    "id":21075,
    "number":716,
    "rate":14.2,
    "state":"KY",
    "name":"Fulton County"
  },
  {
    "id":21077,
    "number":683,
    "rate":11.3,
    "state":"KY",
    "name":"Gallatin County"
  },
  {
    "id":21079,
    "number":1594,
    "rate":12.5,
    "state":"KY",
    "name":"Garrard County"
  },
  {
    "id":21081,
    "number":2106,
    "rate":12.3,
    "state":"KY",
    "name":"Grant County"
  },
  {
    "id":21083,
    "number":3236,
    "rate":11.8,
    "state":"KY",
    "name":"Graves County"
  },
  {
    "id":21085,
    "number":2490,
    "rate":13,
    "state":"KY",
    "name":"Grayson County"
  },
  {
    "id":21087,
    "number":1050,
    "rate":12.3,
    "state":"KY",
    "name":"Green County"
  },
  {
    "id":21089,
    "number":3829,
    "rate":13.7,
    "state":"KY",
    "name":"Greenup County"
  },
  {
    "id":21091,
    "number":807,
    "rate":12.9,
    "state":"KY",
    "name":"Hancock County"
  },
  {
    "id":21093,
    "number":8896,
    "rate":11.6,
    "state":"KY",
    "name":"Hardin County"
  },
  {
    "id":21095,
    "number":3340,
    "rate":15.4,
    "state":"KY",
    "name":"Harlan County"
  },
  {
    "id":21097,
    "number":1691,
    "rate":12.2,
    "state":"KY",
    "name":"Harrison County"
  },
  {
    "id":21099,
    "number":1812,
    "rate":13.5,
    "state":"KY",
    "name":"Hart County"
  },
  {
    "id":21101,
    "number":3840,
    "rate":11.1,
    "state":"KY",
    "name":"Henderson County"
  },
  {
    "id":21103,
    "number":1291,
    "rate":11.4,
    "state":"KY",
    "name":"Henry County"
  },
  {
    "id":21105,
    "number":516,
    "rate":13.9,
    "state":"KY",
    "name":"Hickman County"
  },
  {
    "id":21107,
    "number":4384,
    "rate":12.6,
    "state":"KY",
    "name":"Hopkins County"
  },
  {
    "id":21109,
    "number":1129,
    "rate":11.3,
    "state":"KY",
    "name":"Jackson County"
  },
  {
    "id":21111,
    "number":67071,
    "rate":11.9,
    "state":"KY",
    "name":"Jefferson County"
  },
  {
    "id":21113,
    "number":3590,
    "rate":10.1,
    "state":"KY",
    "name":"Jessamine County"
  },
  {
    "id":21115,
    "number":2712,
    "rate":15.3,
    "state":"KY",
    "name":"Johnson County"
  },
  {
    "id":21117,
    "number":11233,
    "rate":9.5,
    "state":"KY",
    "name":"Kenton County"
  },
  {
    "id":21119,
    "number":1828,
    "rate":15,
    "state":"KY",
    "name":"Knott County"
  },
  {
    "id":21121,
    "number":3476,
    "rate":14.9,
    "state":"KY",
    "name":"Knox County"
  },
  {
    "id":21123,
    "number":1384,
    "rate":13.1,
    "state":"KY",
    "name":"Larue County"
  },
  {
    "id":21125,
    "number":5560,
    "rate":12.6,
    "state":"KY",
    "name":"Laurel County"
  },
  {
    "id":21127,
    "number":1944,
    "rate":16.4,
    "state":"KY",
    "name":"Lawrence County"
  },
  {
    "id":21129,
    "number":765,
    "rate":13.5,
    "state":"KY",
    "name":"Lee County"
  },
  {
    "id":21131,
    "number":1387,
    "rate":16.2,
    "state":"KY",
    "name":"Leslie County"
  },
  {
    "id":21133,
    "number":2818,
    "rate":15.4,
    "state":"KY",
    "name":"Letcher County"
  },
  {
    "id":21135,
    "number":1330,
    "rate":12.8,
    "state":"KY",
    "name":"Lewis County"
  },
  {
    "id":21137,
    "number":2125,
    "rate":11.8,
    "state":"KY",
    "name":"Lincoln County"
  },
  {
    "id":21139,
    "number":866,
    "rate":11.8,
    "state":"KY",
    "name":"Livingston County"
  },
  {
    "id":21141,
    "number":2614,
    "rate":13.3,
    "state":"KY",
    "name":"Logan County"
  },
  {
    "id":21143,
    "number":956,
    "rate":13.6,
    "state":"KY",
    "name":"Lyon County"
  },
  {
    "id":21151,
    "number":6415,
    "rate":10.3,
    "state":"KY",
    "name":"Madison County"
  },
  {
    "id":21153,
    "number":1334,
    "rate":13.7,
    "state":"KY",
    "name":"Magoffin County"
  },
  {
    "id":21155,
    "number":1594,
    "rate":10.8,
    "state":"KY",
    "name":"Marion County"
  },
  {
    "id":21157,
    "number":2418,
    "rate":10,
    "state":"KY",
    "name":"Marshall County"
  },
  {
    "id":21159,
    "number":1330,
    "rate":13.6,
    "state":"KY",
    "name":"Martin County"
  },
  {
    "id":21161,
    "number":1891,
    "rate":14.7,
    "state":"KY",
    "name":"Mason County"
  },
  {
    "id":21145,
    "number":4864,
    "rate":9.8,
    "state":"KY",
    "name":"McCracken County"
  },
  {
    "id":21147,
    "number":2084,
    "rate":15.3,
    "state":"KY",
    "name":"McCreary County"
  },
  {
    "id":21149,
    "number":1104,
    "rate":15.6,
    "state":"KY",
    "name":"McLean County"
  },
  {
    "id":21163,
    "number":2165,
    "rate":10.3,
    "state":"KY",
    "name":"Meade County"
  },
  {
    "id":21165,
    "number":600,
    "rate":12.6,
    "state":"KY",
    "name":"Menifee County"
  },
  {
    "id":21167,
    "number":1844,
    "rate":11.6,
    "state":"KY",
    "name":"Mercer County"
  },
  {
    "id":21169,
    "number":998,
    "rate":13.5,
    "state":"KY",
    "name":"Metcalfe County"
  },
  {
    "id":21171,
    "number":946,
    "rate":11.7,
    "state":"KY",
    "name":"Monroe County"
  },
  {
    "id":21173,
    "number":2539,
    "rate":12.8,
    "state":"KY",
    "name":"Montgomery County"
  },
  {
    "id":21175,
    "number":1525,
    "rate":14.4,
    "state":"KY",
    "name":"Morgan County"
  },
  {
    "id":21177,
    "number":3076,
    "rate":12.8,
    "state":"KY",
    "name":"Muhlenberg County"
  },
  {
    "id":21179,
    "number":3315,
    "rate":10.3,
    "state":"KY",
    "name":"Nelson County"
  },
  {
    "id":21181,
    "number":651,
    "rate":12.4,
    "state":"KY",
    "name":"Nicholas County"
  },
  {
    "id":21183,
    "number":2637,
    "rate":15,
    "state":"KY",
    "name":"Ohio County"
  },
  {
    "id":21185,
    "number":4508,
    "rate":10.4,
    "state":"KY",
    "name":"Oldham County"
  },
  {
    "id":21187,
    "number":867,
    "rate":10.9,
    "state":"KY",
    "name":"Owen County"
  },
  {
    "id":21189,
    "number":503,
    "rate":14.1,
    "state":"KY",
    "name":"Owsley County"
  },
  {
    "id":21191,
    "number":1506,
    "rate":13.9,
    "state":"KY",
    "name":"Pendleton County"
  },
  {
    "id":21193,
    "number":2923,
    "rate":13.5,
    "state":"KY",
    "name":"Perry County"
  },
  {
    "id":21195,
    "number":7416,
    "rate":15.2,
    "state":"KY",
    "name":"Pike County"
  },
  {
    "id":21197,
    "number":1151,
    "rate":12.5,
    "state":"KY",
    "name":"Powell County"
  },
  {
    "id":21199,
    "number":6578,
    "rate":13.7,
    "state":"KY",
    "name":"Pulaski County"
  },
  {
    "id":21201,
    "number":245,
    "rate":14.3,
    "state":"KY",
    "name":"Robertson County"
  },
  {
    "id":21203,
    "number":1631,
    "rate":12.7,
    "state":"KY",
    "name":"Rockcastle County"
  },
  {
    "id":21205,
    "number":2072,
    "rate":11.9,
    "state":"KY",
    "name":"Rowan County"
  },
  {
    "id":21207,
    "number":1467,
    "rate":11,
    "state":"KY",
    "name":"Russell County"
  },
  {
    "id":21209,
    "number":3615,
    "rate":10.4,
    "state":"KY",
    "name":"Scott County"
  },
  {
    "id":21211,
    "number":3439,
    "rate":10.8,
    "state":"KY",
    "name":"Shelby County"
  },
  {
    "id":21213,
    "number":1529,
    "rate":11.9,
    "state":"KY",
    "name":"Simpson County"
  },
  {
    "id":21215,
    "number":1394,
    "rate":11,
    "state":"KY",
    "name":"Spencer County"
  },
  {
    "id":21217,
    "number":2434,
    "rate":13.3,
    "state":"KY",
    "name":"Taylor County"
  },
  {
    "id":21219,
    "number":987,
    "rate":11.1,
    "state":"KY",
    "name":"Todd County"
  },
  {
    "id":21221,
    "number":1398,
    "rate":12.8,
    "state":"KY",
    "name":"Trigg County"
  },
  {
    "id":21223,
    "number":769,
    "rate":11.9,
    "state":"KY",
    "name":"Trimble County"
  },
  {
    "id":21225,
    "number":1214,
    "rate":11,
    "state":"KY",
    "name":"Union County"
  },
  {
    "id":21227,
    "number":7241,
    "rate":8.5,
    "state":"KY",
    "name":"Warren County"
  },
  {
    "id":21229,
    "number":1208,
    "rate":13.8,
    "state":"KY",
    "name":"Washington County"
  },
  {
    "id":21231,
    "number":2047,
    "rate":13,
    "state":"KY",
    "name":"Wayne County"
  },
  {
    "id":21233,
    "number":1335,
    "rate":13.2,
    "state":"KY",
    "name":"Webster County"
  },
  {
    "id":21235,
    "number":3265,
    "rate":12.6,
    "state":"KY",
    "name":"Whitley County"
  },
  {
    "id":21237,
    "number":652,
    "rate":12.1,
    "state":"KY",
    "name":"Wolfe County"
  },
  {
    "id":21239,
    "number":2236,
    "rate":12,
    "state":"KY",
    "name":"Woodford County"
  },
  {
    "id":22001,
    "number":5069,
    "rate":11.6,
    "state":"LA",
    "name":"Acadia Parish"
  },
  {
    "id":22003,
    "number":2351,
    "rate":12.3,
    "state":"LA",
    "name":"Allen Parish"
  },
  {
    "id":22005,
    "number":8699,
    "rate":11.2,
    "state":"LA",
    "name":"Ascension Parish"
  },
  {
    "id":22007,
    "number":2167,
    "rate":12.7,
    "state":"LA",
    "name":"Assumption Parish"
  },
  {
    "id":22009,
    "number":4768,
    "rate":15.5,
    "state":"LA",
    "name":"Avoyelles Parish"
  },
  {
    "id":22011,
    "number":3498,
    "rate":13.4,
    "state":"LA",
    "name":"Beauregard Parish"
  },
  {
    "id":22013,
    "number":1526,
    "rate":14.5,
    "state":"LA",
    "name":"Bienville Parish"
  },
  {
    "id":22015,
    "number":9332,
    "rate":10.5,
    "state":"LA",
    "name":"Bossier Parish"
  },
  {
    "id":22017,
    "number":23441,
    "rate":12.5,
    "state":"LA",
    "name":"Caddo Parish"
  },
  {
    "id":22019,
    "number":17145,
    "rate":12.2,
    "state":"LA",
    "name":"Calcasieu Parish"
  },
  {
    "id":22021,
    "number":924,
    "rate":12.3,
    "state":"LA",
    "name":"Caldwell Parish"
  },
  {
    "id":22023,
    "number":629,
    "rate":12.8,
    "state":"LA",
    "name":"Cameron Parish"
  },
  {
    "id":22025,
    "number":926,
    "rate":12,
    "state":"LA",
    "name":"Catahoula Parish"
  },
  {
    "id":22027,
    "number":1735,
    "rate":13,
    "state":"LA",
    "name":"Claiborne Parish"
  },
  {
    "id":22029,
    "number":2263,
    "rate":15.1,
    "state":"LA",
    "name":"Concordia Parish"
  },
  {
    "id":22031,
    "number":2988,
    "rate":15.2,
    "state":"LA",
    "name":"De Soto Parish"
  },
  {
    "id":22033,
    "number":37369,
    "rate":11.5,
    "state":"LA",
    "name":"East Baton Rouge Parish"
  },
  {
    "id":22035,
    "number":921,
    "rate":16.8,
    "state":"LA",
    "name":"East Carroll Parish"
  },
  {
    "id":22037,
    "number":2594,
    "rate":16.7,
    "state":"LA",
    "name":"East Feliciana Parish"
  },
  {
    "id":22039,
    "number":3127,
    "rate":13.1,
    "state":"LA",
    "name":"Evangeline Parish"
  },
  {
    "id":22041,
    "number":2186,
    "rate":14.7,
    "state":"LA",
    "name":"Franklin Parish"
  },
  {
    "id":22043,
    "number":2236,
    "rate":13.4,
    "state":"LA",
    "name":"Grant Parish"
  },
  {
    "id":22045,
    "number":6614,
    "rate":12.7,
    "state":"LA",
    "name":"Iberia Parish"
  },
  {
    "id":22047,
    "number":3280,
    "rate":13,
    "state":"LA",
    "name":"Iberville Parish"
  },
  {
    "id":22049,
    "number":1651,
    "rate":13.5,
    "state":"LA",
    "name":"Jackson Parish"
  },
  {
    "id":22053,
    "number":2906,
    "rate":12.9,
    "state":"LA",
    "name":"Jefferson Davis Parish"
  },
  {
    "id":22051,
    "number":39352,
    "rate":12,
    "state":"LA",
    "name":"Jefferson Parish"
  },
  {
    "id":22059,
    "number":1380,
    "rate":12.4,
    "state":"LA",
    "name":"La Salle Parish"
  },
  {
    "id":22055,
    "number":15331,
    "rate":9.2,
    "state":"LA",
    "name":"Lafayette Parish"
  },
  {
    "id":22057,
    "number":7374,
    "rate":10.4,
    "state":"LA",
    "name":"Lafourche Parish"
  },
  {
    "id":22061,
    "number":3619,
    "rate":10.6,
    "state":"LA",
    "name":"Lincoln Parish"
  },
  {
    "id":22063,
    "number":11413,
    "rate":12.2,
    "state":"LA",
    "name":"Livingston Parish"
  },
  {
    "id":22065,
    "number":984,
    "rate":11,
    "state":"LA",
    "name":"Madison Parish"
  },
  {
    "id":22067,
    "number":3588,
    "rate":17.9,
    "state":"LA",
    "name":"Morehouse Parish"
  },
  {
    "id":22069,
    "number":3513,
    "rate":12.5,
    "state":"LA",
    "name":"Natchitoches Parish"
  },
  {
    "id":22071,
    "number":33632,
    "rate":11.9,
    "state":"LA",
    "name":"Orleans Parish"
  },
  {
    "id":22073,
    "number":12687,
    "rate":11.5,
    "state":"LA",
    "name":"Ouachita Parish"
  },
  {
    "id":22075,
    "number":1821,
    "rate":10.8,
    "state":"LA",
    "name":"Plaquemines Parish"
  },
  {
    "id":22077,
    "number":2380,
    "rate":14.2,
    "state":"LA",
    "name":"Pointe Coupee Parish"
  },
  {
    "id":22079,
    "number":12736,
    "rate":13.4,
    "state":"LA",
    "name":"Rapides Parish"
  },
  {
    "id":22081,
    "number":837,
    "rate":12.8,
    "state":"LA",
    "name":"Red River Parish"
  },
  {
    "id":22083,
    "number":1919,
    "rate":12.7,
    "state":"LA",
    "name":"Richland Parish"
  },
  {
    "id":22085,
    "number":2596,
    "rate":14.5,
    "state":"LA",
    "name":"Sabine Parish"
  },
  {
    "id":22087,
    "number":3546,
    "rate":11.9,
    "state":"LA",
    "name":"St Bernard Parish"
  },
  {
    "id":22091,
    "number":1301,
    "rate":15.8,
    "state":"LA",
    "name":"St Helena Parish"
  },
  {
    "id":22089,
    "number":4239,
    "rate":11.3,
    "state":"LA",
    "name":"St. Charles Parish"
  },
  {
    "id":22093,
    "number":2269,
    "rate":14.3,
    "state":"LA",
    "name":"St. James Parish"
  },
  {
    "id":22095,
    "number":4510,
    "rate":14.1,
    "state":"LA",
    "name":"St. John the Baptist Parish"
  },
  {
    "id":22097,
    "number":8894,
    "rate":15.1,
    "state":"LA",
    "name":"St. Landry Parish"
  },
  {
    "id":22099,
    "number":4739,
    "rate":12.5,
    "state":"LA",
    "name":"St Martin Parish"
  },
  {
    "id":22101,
    "number":5775,
    "rate":14.8,
    "state":"LA",
    "name":"St. Mary Parish"
  },
  {
    "id":22103,
    "number":17970,
    "rate":10.3,
    "state":"LA",
    "name":"St. Tammany Parish"
  },
  {
    "id":22105,
    "number":11065,
    "rate":12.5,
    "state":"LA",
    "name":"Tangipahoa Parish"
  },
  {
    "id":22107,
    "number":546,
    "rate":15.1,
    "state":"LA",
    "name":"Tensas Parish"
  },
  {
    "id":22109,
    "number":11092,
    "rate":13.8,
    "state":"LA",
    "name":"Terrebonne Parish"
  },
  {
    "id":22111,
    "number":2669,
    "rate":15.8,
    "state":"LA",
    "name":"Union Parish"
  },
  {
    "id":22115,
    "number":4242,
    "rate":11.2,
    "state":"LA",
    "name":"Vernon Parish"
  },
  {
    "id":22113,
    "number":5103,
    "rate":12.2,
    "state":"LA",
    "name":"Vermilion Parish"
  },
  {
    "id":22117,
    "number":5583,
    "rate":16.4,
    "state":"LA",
    "name":"Washington Parish"
  },
  {
    "id":22119,
    "number":4233,
    "rate":13.9,
    "state":"LA",
    "name":"Webster Parish"
  },
  {
    "id":22121,
    "number":2370,
    "rate":13.4,
    "state":"LA",
    "name":"West Baton Rouge Parish"
  },
  {
    "id":22123,
    "number":1418,
    "rate":16.7,
    "state":"LA",
    "name":"West Carroll Parish"
  },
  {
    "id":22125,
    "number":1684,
    "rate":13.4,
    "state":"LA",
    "name":"West Feliciana Parish"
  },
  {
    "id":22127,
    "number":1479,
    "rate":13,
    "state":"LA",
    "name":"Winn Parish"
  },
  {
    "id":25001,
    "number":15486,
    "rate":8.8,
    "state":"MA",
    "name":"Barnstable County"
  },
  {
    "id":25003,
    "number":8957,
    "rate":8.8,
    "state":"MA",
    "name":"Berkshire County"
  },
  {
    "id":25005,
    "number":42663,
    "rate":10.3,
    "state":"MA",
    "name":"Bristol County"
  },
  {
    "id":25007,
    "number":972,
    "rate":7.3,
    "state":"MA",
    "name":"Dukes County"
  },
  {
    "id":25009,
    "number":53523,
    "rate":9.5,
    "state":"MA",
    "name":"Essex County"
  },
  {
    "id":25011,
    "number":4574,
    "rate":8.1,
    "state":"MA",
    "name":"Franklin County"
  },
  {
    "id":25013,
    "number":36736,
    "rate":10.7,
    "state":"MA",
    "name":"Hampden County"
  },
  {
    "id":25015,
    "number":7927,
    "rate":6.5,
    "state":"MA",
    "name":"Hampshire County"
  },
  {
    "id":25017,
    "number":99159,
    "rate":8.5,
    "state":"MA",
    "name":"Middlesex County"
  },
  {
    "id":25019,
    "number":581,
    "rate":7.3,
    "state":"MA",
    "name":"Nantucket County"
  },
  {
    "id":25021,
    "number":41900,
    "rate":8.2,
    "state":"MA",
    "name":"Norfolk County"
  },
  {
    "id":25023,
    "number":37632,
    "rate":10.2,
    "state":"MA",
    "name":"Plymouth County"
  },
  {
    "id":25025,
    "number":44460,
    "rate":7.6,
    "state":"MA",
    "name":"Suffolk County"
  },
  {
    "id":25027,
    "number":53989,
    "rate":9,
    "state":"MA",
    "name":"Worcester County"
  },
  {
    "id":24001,
    "number":7059,
    "rate":12.1,
    "state":"MD",
    "name":"Allegany County"
  },
  {
    "id":24003,
    "number":38448,
    "rate":9.4,
    "state":"MD",
    "name":"Anne Arundel County"
  },
  {
    "id":24510,
    "number":58631,
    "rate":12.4,
    "state":"MD",
    "name":"Baltimore City"
  },
  {
    "id":24005,
    "number":61443,
    "rate":10,
    "state":"MD",
    "name":"Baltimore County"
  },
  {
    "id":24009,
    "number":5781,
    "rate":8.9,
    "state":"MD",
    "name":"Calvert County"
  },
  {
    "id":24011,
    "number":2699,
    "rate":11.3,
    "state":"MD",
    "name":"Caroline County"
  },
  {
    "id":24013,
    "number":10453,
    "rate":8.5,
    "state":"MD",
    "name":"Carroll County"
  },
  {
    "id":24015,
    "number":8012,
    "rate":10.7,
    "state":"MD",
    "name":"Cecil County"
  },
  {
    "id":24017,
    "number":11156,
    "rate":10.3,
    "state":"MD",
    "name":"Charles County"
  },
  {
    "id":24019,
    "number":3616,
    "rate":14.5,
    "state":"MD",
    "name":"Dorchester County"
  },
  {
    "id":24021,
    "number":15805,
    "rate":9.1,
    "state":"MD",
    "name":"Frederick County"
  },
  {
    "id":24023,
    "number":2811,
    "rate":12.3,
    "state":"MD",
    "name":"Garrett County"
  },
  {
    "id":24025,
    "number":17856,
    "rate":9.7,
    "state":"MD",
    "name":"Harford County"
  },
  {
    "id":24027,
    "number":17372,
    "rate":8,
    "state":"MD",
    "name":"Howard County"
  },
  {
    "id":24029,
    "number":1642,
    "rate":10.4,
    "state":"MD",
    "name":"Kent County"
  },
  {
    "id":24031,
    "number":56365,
    "rate":7.6,
    "state":"MD",
    "name":"Montgomery County"
  },
  {
    "id":24033,
    "number":74082,
    "rate":11.4,
    "state":"MD",
    "name":"Prince George's County"
  },
  {
    "id":24035,
    "number":3446,
    "rate":9.5,
    "state":"MD",
    "name":"Queen Anne's County"
  },
  {
    "id":24039,
    "number":2543,
    "rate":12.4,
    "state":"MD",
    "name":"Somerset County"
  },
  {
    "id":24037,
    "number":7553,
    "rate":9.7,
    "state":"MD",
    "name":"St. Mary's County"
  },
  {
    "id":24041,
    "number":3407,
    "rate":11.3,
    "state":"MD",
    "name":"Talbot County"
  },
  {
    "id":24043,
    "number":14004,
    "rate":12.5,
    "state":"MD",
    "name":"Washington County"
  },
  {
    "id":24045,
    "number":8126,
    "rate":11.1,
    "state":"MD",
    "name":"Wicomico County"
  },
  {
    "id":24047,
    "number":5196,
    "rate":12.6,
    "state":"MD",
    "name":"Worcester County"
  },
  {
    "id":23001,
    "number":8826,
    "rate":10.9,
    "state":"ME",
    "name":"Androscoggin County"
  },
  {
    "id":23003,
    "number":7833,
    "rate":14.2,
    "state":"ME",
    "name":"Aroostook County"
  },
  {
    "id":23005,
    "number":16519,
    "rate":7.6,
    "state":"ME",
    "name":"Cumberland County"
  },
  {
    "id":23007,
    "number":2124,
    "rate":9,
    "state":"ME",
    "name":"Franklin County"
  },
  {
    "id":23009,
    "number":3872,
    "rate":8.9,
    "state":"ME",
    "name":"Hancock County"
  },
  {
    "id":23011,
    "number":9844,
    "rate":10.5,
    "state":"ME",
    "name":"Kennebec County"
  },
  {
    "id":23013,
    "number":2690,
    "rate":8.5,
    "state":"ME",
    "name":"Knox County"
  },
  {
    "id":23015,
    "number":2559,
    "rate":9.3,
    "state":"ME",
    "name":"Lincoln County"
  },
  {
    "id":23017,
    "number":4479,
    "rate":10.1,
    "state":"ME",
    "name":"Oxford County"
  },
  {
    "id":23019,
    "number":12562,
    "rate":10.6,
    "state":"ME",
    "name":"Penobscot County"
  },
  {
    "id":23021,
    "number":1717,
    "rate":12.5,
    "state":"ME",
    "name":"Piscataquis County"
  },
  {
    "id":23023,
    "number":2584,
    "rate":9.4,
    "state":"ME",
    "name":"Sagadahoc County"
  },
  {
    "id":23025,
    "number":4757,
    "rate":11.9,
    "state":"ME",
    "name":"Somerset County"
  },
  {
    "id":23027,
    "number":2997,
    "rate":10,
    "state":"ME",
    "name":"Waldo County"
  },
  {
    "id":23029,
    "number":2779,
    "rate":11,
    "state":"ME",
    "name":"Washington County"
  },
  {
    "id":23031,
    "number":15011,
    "rate":9.8,
    "state":"ME",
    "name":"York County"
  },
  {
    "id":26001,
    "number":1261,
    "rate":14.1,
    "state":"MI",
    "name":"Alcona County"
  },
  {
    "id":26003,
    "number":870,
    "rate":11.1,
    "state":"MI",
    "name":"Alger County"
  },
  {
    "id":26005,
    "number":7605,
    "rate":9.4,
    "state":"MI",
    "name":"Allegan County"
  },
  {
    "id":26007,
    "number":2757,
    "rate":12.1,
    "state":"MI",
    "name":"Alpena County"
  },
  {
    "id":26009,
    "number":2140,
    "rate":11.7,
    "state":"MI",
    "name":"Antrim County"
  },
  {
    "id":26011,
    "number":1673,
    "rate":13.7,
    "state":"MI",
    "name":"Arenac County"
  },
  {
    "id":26013,
    "number":807,
    "rate":11.8,
    "state":"MI",
    "name":"Baraga County"
  },
  {
    "id":26015,
    "number":4217,
    "rate":9.7,
    "state":"MI",
    "name":"Barry County"
  },
  {
    "id":26017,
    "number":8586,
    "rate":10.5,
    "state":"MI",
    "name":"Bay County"
  },
  {
    "id":26019,
    "number":1682,
    "rate":12.3,
    "state":"MI",
    "name":"Benzie County"
  },
  {
    "id":26021,
    "number":15013,
    "rate":12.9,
    "state":"MI",
    "name":"Berrien County"
  },
  {
    "id":26023,
    "number":3603,
    "rate":11.2,
    "state":"MI",
    "name":"Branch County"
  },
  {
    "id":26025,
    "number":12085,
    "rate":12.2,
    "state":"MI",
    "name":"Calhoun County"
  },
  {
    "id":26027,
    "number":4588,
    "rate":11.7,
    "state":"MI",
    "name":"Cass County"
  },
  {
    "id":26029,
    "number":1981,
    "rate":9.9,
    "state":"MI",
    "name":"Charlevoix County"
  },
  {
    "id":26031,
    "number":2287,
    "rate":11.2,
    "state":"MI",
    "name":"Cheboygan County"
  },
  {
    "id":26033,
    "number":3473,
    "rate":11.6,
    "state":"MI",
    "name":"Chippewa County"
  },
  {
    "id":26035,
    "number":2803,
    "rate":11.8,
    "state":"MI",
    "name":"Clare County"
  },
  {
    "id":26037,
    "number":5204,
    "rate":9.2,
    "state":"MI",
    "name":"Clinton County"
  },
  {
    "id":26039,
    "number":1276,
    "rate":11.6,
    "state":"MI",
    "name":"Crawford County"
  },
  {
    "id":26041,
    "number":3416,
    "rate":12,
    "state":"MI",
    "name":"Delta County"
  },
  {
    "id":26043,
    "number":2617,
    "rate":12.9,
    "state":"MI",
    "name":"Dickinson County"
  },
  {
    "id":26045,
    "number":9202,
    "rate":11.4,
    "state":"MI",
    "name":"Eaton County"
  },
  {
    "id":26047,
    "number":2298,
    "rate":9.2,
    "state":"MI",
    "name":"Emmet County"
  },
  {
    "id":26049,
    "number":39947,
    "rate":13,
    "state":"MI",
    "name":"Genesee County"
  },
  {
    "id":26051,
    "number":2644,
    "rate":13.2,
    "state":"MI",
    "name":"Gladwin County"
  },
  {
    "id":26053,
    "number":1482,
    "rate":11.3,
    "state":"MI",
    "name":"Gogebic County"
  },
  {
    "id":26055,
    "number":6175,
    "rate":9.1,
    "state":"MI",
    "name":"Grand Traverse County"
  },
  {
    "id":26057,
    "number":3452,
    "rate":10.8,
    "state":"MI",
    "name":"Gratiot County"
  },
  {
    "id":26059,
    "number":3623,
    "rate":10.6,
    "state":"MI",
    "name":"Hillsdale County"
  },
  {
    "id":26061,
    "number":2703,
    "rate":10.1,
    "state":"MI",
    "name":"Houghton County"
  },
  {
    "id":26063,
    "number":2990,
    "rate":11.8,
    "state":"MI",
    "name":"Huron County"
  },
  {
    "id":26065,
    "number":18757,
    "rate":9,
    "state":"MI",
    "name":"Ingham County"
  },
  {
    "id":26067,
    "number":4561,
    "rate":9.7,
    "state":"MI",
    "name":"Ionia County"
  },
  {
    "id":26069,
    "number":2570,
    "rate":12.5,
    "state":"MI",
    "name":"Iosco County"
  },
  {
    "id":26071,
    "number":1256,
    "rate":13.3,
    "state":"MI",
    "name":"Iron County"
  },
  {
    "id":26073,
    "number":4239,
    "rate":8.1,
    "state":"MI",
    "name":"Isabella County"
  },
  {
    "id":26075,
    "number":12923,
    "rate":10.8,
    "state":"MI",
    "name":"Jackson County"
  },
  {
    "id":26077,
    "number":15333,
    "rate":8.1,
    "state":"MI",
    "name":"Kalamazoo County"
  },
  {
    "id":26081,
    "number":41776,
    "rate":9.5,
    "state":"MI",
    "name":"Kent County"
  },
  {
    "id":26079,
    "number":1652,
    "rate":12.8,
    "state":"MI",
    "name":"Kalkaska County"
  },
  {
    "id":26083,
    "number":230,
    "rate":12.8,
    "state":"MI",
    "name":"Keweenaw County"
  },
  {
    "id":26085,
    "number":1230,
    "rate":13.2,
    "state":"MI",
    "name":"Lake County"
  },
  {
    "id":26087,
    "number":6364,
    "rate":9.7,
    "state":"MI",
    "name":"Lapeer County"
  },
  {
    "id":26089,
    "number":1762,
    "rate":10.2,
    "state":"MI",
    "name":"Leelanau County"
  },
  {
    "id":26091,
    "number":9064,
    "rate":12.3,
    "state":"MI",
    "name":"Lenawee County"
  },
  {
    "id":26093,
    "number":12449,
    "rate":9.3,
    "state":"MI",
    "name":"Livingston County"
  },
  {
    "id":26095,
    "number":702,
    "rate":13.3,
    "state":"MI",
    "name":"Luce County"
  },
  {
    "id":26097,
    "number":1150,
    "rate":12.9,
    "state":"MI",
    "name":"Mackinac County"
  },
  {
    "id":26099,
    "number":63917,
    "rate":10,
    "state":"MI",
    "name":"Macomb County"
  },
  {
    "id":26101,
    "number":2391,
    "rate":12.2,
    "state":"MI",
    "name":"Manistee County"
  },
  {
    "id":26103,
    "number":5189,
    "rate":9.9,
    "state":"MI",
    "name":"Marquette County"
  },
  {
    "id":26105,
    "number":2649,
    "rate":12.1,
    "state":"MI",
    "name":"Mason County"
  },
  {
    "id":26107,
    "number":3400,
    "rate":10.6,
    "state":"MI",
    "name":"Mecosta County"
  },
  {
    "id":26109,
    "number":2183,
    "rate":11.8,
    "state":"MI",
    "name":"Menominee County"
  },
  {
    "id":26111,
    "number":6447,
    "rate":10.3,
    "state":"MI",
    "name":"Midland County"
  },
  {
    "id":26113,
    "number":1213,
    "rate":10.9,
    "state":"MI",
    "name":"Missaukee County"
  },
  {
    "id":26115,
    "number":12540,
    "rate":11.2,
    "state":"MI",
    "name":"Monroe County"
  },
  {
    "id":26117,
    "number":4838,
    "rate":10.3,
    "state":"MI",
    "name":"Montcalm County"
  },
  {
    "id":26119,
    "number":1078,
    "rate":13.8,
    "state":"MI",
    "name":"Montmorency County"
  },
  {
    "id":26121,
    "number":15930,
    "rate":12.8,
    "state":"MI",
    "name":"Muskegon County"
  },
  {
    "id":26123,
    "number":4020,
    "rate":11.4,
    "state":"MI",
    "name":"Newaygo County"
  },
  {
    "id":26125,
    "number":83225,
    "rate":9.1,
    "state":"MI",
    "name":"Oakland County"
  },
  {
    "id":26127,
    "number":2541,
    "rate":13.2,
    "state":"MI",
    "name":"Oceana County"
  },
  {
    "id":26129,
    "number":2276,
    "rate":13.5,
    "state":"MI",
    "name":"Ogemaw County"
  },
  {
    "id":26131,
    "number":722,
    "rate":13.4,
    "state":"MI",
    "name":"Ontonagon County"
  },
  {
    "id":26133,
    "number":1879,
    "rate":11,
    "state":"MI",
    "name":"Osceola County"
  },
  {
    "id":26135,
    "number":973,
    "rate":14.5,
    "state":"MI",
    "name":"Oscoda County"
  },
  {
    "id":26137,
    "number":2108,
    "rate":11.6,
    "state":"MI",
    "name":"Otsego County"
  },
  {
    "id":26139,
    "number":15177,
    "rate":8,
    "state":"MI",
    "name":"Ottawa County"
  },
  {
    "id":26141,
    "number":1530,
    "rate":14.3,
    "state":"MI",
    "name":"Presque Isle County"
  },
  {
    "id":26143,
    "number":3195,
    "rate":16,
    "state":"MI",
    "name":"Roscommon County"
  },
  {
    "id":26145,
    "number":18546,
    "rate":12.6,
    "state":"MI",
    "name":"Saginaw County"
  },
  {
    "id":26151,
    "number":3105,
    "rate":9.8,
    "state":"MI",
    "name":"Sanilac County"
  },
  {
    "id":26153,
    "number":785,
    "rate":11.9,
    "state":"MI",
    "name":"Schoolcraft County"
  },
  {
    "id":26155,
    "number":5272,
    "rate":10.3,
    "state":"MI",
    "name":"Shiawassee County"
  },
  {
    "id":26147,
    "number":12968,
    "rate":10.8,
    "state":"MI",
    "name":"St. Clair County"
  },
  {
    "id":26149,
    "number":4399,
    "rate":10,
    "state":"MI",
    "name":"St Joseph County"
  },
  {
    "id":26157,
    "number":5153,
    "rate":12.5,
    "state":"MI",
    "name":"Tuscola County"
  },
  {
    "id":26159,
    "number":6663,
    "rate":12.1,
    "state":"MI",
    "name":"Van Buren County"
  },
  {
    "id":26161,
    "number":18635,
    "rate":7.1,
    "state":"MI",
    "name":"Washtenaw County"
  },
  {
    "id":26163,
    "number":163219,
    "rate":12.5,
    "state":"MI",
    "name":"Wayne County"
  },
  {
    "id":26165,
    "number":2950,
    "rate":12.2,
    "state":"MI",
    "name":"Wexford County"
  },
  {
    "id":27001,
    "number":1249,
    "rate":9.7,
    "state":"MN",
    "name":"Aitkin County"
  },
  {
    "id":27003,
    "number":19967,
    "rate":8.2,
    "state":"MN",
    "name":"Anoka County"
  },
  {
    "id":27005,
    "number":1976,
    "rate":8.2,
    "state":"MN",
    "name":"Becker County"
  },
  {
    "id":27007,
    "number":2981,
    "rate":9.3,
    "state":"MN",
    "name":"Beltrami County"
  },
  {
    "id":27009,
    "number":2347,
    "rate":8.2,
    "state":"MN",
    "name":"Benton County"
  },
  {
    "id":27011,
    "number":367,
    "rate":9.2,
    "state":"MN",
    "name":"Big Stone County"
  },
  {
    "id":27013,
    "number":2703,
    "rate":5.6,
    "state":"MN",
    "name":"Blue Earth County"
  },
  {
    "id":27015,
    "number":1701,
    "rate":8.9,
    "state":"MN",
    "name":"Brown County"
  },
  {
    "id":27017,
    "number":2022,
    "rate":7.7,
    "state":"MN",
    "name":"Carlton County"
  },
  {
    "id":27019,
    "number":4447,
    "rate":6.9,
    "state":"MN",
    "name":"Carver County"
  },
  {
    "id":27021,
    "number":2523,
    "rate":11.6,
    "state":"MN",
    "name":"Cass County"
  },
  {
    "id":27023,
    "number":882,
    "rate":9.7,
    "state":"MN",
    "name":"Chippewa County"
  },
  {
    "id":27025,
    "number":3356,
    "rate":8.6,
    "state":"MN",
    "name":"Chisago County"
  },
  {
    "id":27027,
    "number":3243,
    "rate":7.5,
    "state":"MN",
    "name":"Clay County"
  },
  {
    "id":27029,
    "number":607,
    "rate":9.5,
    "state":"MN",
    "name":"Clearwater County"
  },
  {
    "id":27031,
    "number":400,
    "rate":9.5,
    "state":"MN",
    "name":"Cook County"
  },
  {
    "id":27033,
    "number":822,
    "rate":9.5,
    "state":"MN",
    "name":"Cottonwood County"
  },
  {
    "id":27035,
    "number":4679,
    "rate":9.9,
    "state":"MN",
    "name":"Crow Wing County"
  },
  {
    "id":27037,
    "number":19404,
    "rate":6.6,
    "state":"MN",
    "name":"Dakota County"
  },
  {
    "id":27039,
    "number":986,
    "rate":7,
    "state":"MN",
    "name":"Dodge County"
  },
  {
    "id":27041,
    "number":2110,
    "rate":7.6,
    "state":"MN",
    "name":"Douglas County"
  },
  {
    "id":27043,
    "number":921,
    "rate":8.5,
    "state":"MN",
    "name":"Faribault County"
  },
  {
    "id":27045,
    "number":1244,
    "rate":8,
    "state":"MN",
    "name":"Fillmore County"
  },
  {
    "id":27047,
    "number":2216,
    "rate":9.4,
    "state":"MN",
    "name":"Freeborn County"
  },
  {
    "id":27049,
    "number":3302,
    "rate":9.5,
    "state":"MN",
    "name":"Goodhue County"
  },
  {
    "id":27051,
    "number":382,
    "rate":8.4,
    "state":"MN",
    "name":"Grant County"
  },
  {
    "id":27053,
    "number":60307,
    "rate":6.8,
    "state":"MN",
    "name":"Hennepin County"
  },
  {
    "id":27055,
    "number":1117,
    "rate":7.8,
    "state":"MN",
    "name":"Houston County"
  },
  {
    "id":27057,
    "number":1465,
    "rate":9.4,
    "state":"MN",
    "name":"Hubbard County"
  },
  {
    "id":27059,
    "number":2325,
    "rate":8.4,
    "state":"MN",
    "name":"Isanti County"
  },
  {
    "id":27061,
    "number":3334,
    "rate":9.6,
    "state":"MN",
    "name":"Itasca County"
  },
  {
    "id":27063,
    "number":663,
    "rate":8.6,
    "state":"MN",
    "name":"Jackson County"
  },
  {
    "id":27065,
    "number":1096,
    "rate":9.1,
    "state":"MN",
    "name":"Kanabec County"
  },
  {
    "id":27067,
    "number":2638,
    "rate":8.4,
    "state":"MN",
    "name":"Kandiyohi County"
  },
  {
    "id":27069,
    "number":318,
    "rate":9.3,
    "state":"MN",
    "name":"Kittson County"
  },
  {
    "id":27071,
    "number":1078,
    "rate":10.6,
    "state":"MN",
    "name":"Koochiching County"
  },
  {
    "id":27073,
    "number":511,
    "rate":9.4,
    "state":"MN",
    "name":"Lac Qui Parle County"
  },
  {
    "id":27075,
    "number":773,
    "rate":9,
    "state":"MN",
    "name":"Lake County"
  },
  {
    "id":27077,
    "number":280,
    "rate":9,
    "state":"MN",
    "name":"Lake of the Woods County"
  },
  {
    "id":27079,
    "number":1634,
    "rate":8.1,
    "state":"MN",
    "name":"Le Sueur County"
  },
  {
    "id":27081,
    "number":399,
    "rate":9,
    "state":"MN",
    "name":"Lincoln County"
  },
  {
    "id":27083,
    "number":1474,
    "rate":8,
    "state":"MN",
    "name":"Lyon County"
  },
  {
    "id":27087,
    "number":420,
    "rate":11.2,
    "state":"MN",
    "name":"Mahnomen County"
  },
  {
    "id":27089,
    "number":685,
    "rate":9.7,
    "state":"MN",
    "name":"Marshall County"
  },
  {
    "id":27091,
    "number":1319,
    "rate":8.5,
    "state":"MN",
    "name":"Martin County"
  },
  {
    "id":27085,
    "number":2297,
    "rate":8.7,
    "state":"MN",
    "name":"McLeod County"
  },
  {
    "id":27093,
    "number":1686,
    "rate":10,
    "state":"MN",
    "name":"Meeker County"
  },
  {
    "id":27095,
    "number":1950,
    "rate":10.4,
    "state":"MN",
    "name":"Mille Lacs County"
  },
  {
    "id":27097,
    "number":2137,
    "rate":8.7,
    "state":"MN",
    "name":"Morrison County"
  },
  {
    "id":27099,
    "number":2535,
    "rate":8.9,
    "state":"MN",
    "name":"Mower County"
  },
  {
    "id":27101,
    "number":615,
    "rate":9.4,
    "state":"MN",
    "name":"Murray County"
  },
  {
    "id":27103,
    "number":1826,
    "rate":7.6,
    "state":"MN",
    "name":"Nicollet County"
  },
  {
    "id":27107,
    "number":443,
    "rate":9,
    "state":"MN",
    "name":"Norman County"
  },
  {
    "id":27105,
    "number":1277,
    "rate":8.3,
    "state":"MN",
    "name":"Nobles County"
  },
  {
    "id":27109,
    "number":7648,
    "rate":7.1,
    "state":"MN",
    "name":"Olmsted County"
  },
  {
    "id":27111,
    "number":3778,
    "rate":8.6,
    "state":"MN",
    "name":"Otter Tail County"
  },
  {
    "id":27113,
    "number":861,
    "rate":8.2,
    "state":"MN",
    "name":"Pennington County"
  },
  {
    "id":27115,
    "number":1894,
    "rate":8.5,
    "state":"MN",
    "name":"Pine County"
  },
  {
    "id":27117,
    "number":566,
    "rate":8.3,
    "state":"MN",
    "name":"Pipestone County"
  },
  {
    "id":27119,
    "number":2087,
    "rate":9,
    "state":"MN",
    "name":"Polk County"
  },
  {
    "id":27121,
    "number":772,
    "rate":9.2,
    "state":"MN",
    "name":"Pope County"
  },
  {
    "id":27123,
    "number":30698,
    "rate":8,
    "state":"MN",
    "name":"Ramsey County"
  },
  {
    "id":27125,
    "number":255,
    "rate":8.5,
    "state":"MN",
    "name":"Red Lake County"
  },
  {
    "id":27127,
    "number":1020,
    "rate":8.8,
    "state":"MN",
    "name":"Redwood County"
  },
  {
    "id":27129,
    "number":993,
    "rate":8.6,
    "state":"MN",
    "name":"Renville County"
  },
  {
    "id":27131,
    "number":3441,
    "rate":7.3,
    "state":"MN",
    "name":"Rice County"
  },
  {
    "id":27133,
    "number":672,
    "rate":9.7,
    "state":"MN",
    "name":"Rock County"
  },
  {
    "id":27135,
    "number":1014,
    "rate":9.1,
    "state":"MN",
    "name":"Roseau County"
  },
  {
    "id":27139,
    "number":5323,
    "rate":5.8,
    "state":"MN",
    "name":"Scott County"
  },
  {
    "id":27143,
    "number":986,
    "rate":9,
    "state":"MN",
    "name":"Sibley County"
  },
  {
    "id":27141,
    "number":3703,
    "rate":6,
    "state":"MN",
    "name":"Sherburne County"
  },
  {
    "id":27137,
    "number":14577,
    "rate":9.5,
    "state":"MN",
    "name":"St. Louis County"
  },
  {
    "id":27145,
    "number":7770,
    "rate":7.1,
    "state":"MN",
    "name":"Stearns County"
  },
  {
    "id":27147,
    "number":1958,
    "rate":7.5,
    "state":"MN",
    "name":"Steele County"
  },
  {
    "id":27149,
    "number":513,
    "rate":7.3,
    "state":"MN",
    "name":"Stevens County"
  },
  {
    "id":27151,
    "number":597,
    "rate":8.2,
    "state":"MN",
    "name":"Swift County"
  },
  {
    "id":27153,
    "number":1603,
    "rate":8.9,
    "state":"MN",
    "name":"Todd County"
  },
  {
    "id":27155,
    "number":261,
    "rate":9.9,
    "state":"MN",
    "name":"Traverse County"
  },
  {
    "id":27157,
    "number":1271,
    "rate":7.9,
    "state":"MN",
    "name":"Wabasha County"
  },
  {
    "id":27159,
    "number":935,
    "rate":9.2,
    "state":"MN",
    "name":"Wadena County"
  },
  {
    "id":27161,
    "number":1056,
    "rate":7.4,
    "state":"MN",
    "name":"Waseca County"
  },
  {
    "id":27163,
    "number":13524,
    "rate":7.7,
    "state":"MN",
    "name":"Washington County"
  },
  {
    "id":27165,
    "number":652,
    "rate":8,
    "state":"MN",
    "name":"Watonwan County"
  },
  {
    "id":27167,
    "number":419,
    "rate":8.6,
    "state":"MN",
    "name":"Wilkin County"
  },
  {
    "id":27169,
    "number":2932,
    "rate":7.6,
    "state":"MN",
    "name":"Winona County"
  },
  {
    "id":27171,
    "number":5968,
    "rate":6.8,
    "state":"MN",
    "name":"Wright County"
  },
  {
    "id":27173,
    "number":664,
    "rate":8.8,
    "state":"MN",
    "name":"Yellow Medicine County"
  },
  {
    "id":29001,
    "number":1709,
    "rate":9.2,
    "state":"MO",
    "name":"Adair County"
  },
  {
    "id":29003,
    "number":1280,
    "rate":9.9,
    "state":"MO",
    "name":"Andrew County"
  },
  {
    "id":29005,
    "number":517,
    "rate":12,
    "state":"MO",
    "name":"Atchison County"
  },
  {
    "id":29007,
    "number":2356,
    "rate":12.5,
    "state":"MO",
    "name":"Audrain County"
  },
  {
    "id":29009,
    "number":3074,
    "rate":11.6,
    "state":"MO",
    "name":"Barry County"
  },
  {
    "id":29011,
    "number":1190,
    "rate":13.3,
    "state":"MO",
    "name":"Barton County"
  },
  {
    "id":29013,
    "number":1313,
    "rate":10.7,
    "state":"MO",
    "name":"Bates County"
  },
  {
    "id":29015,
    "number":2245,
    "rate":14.7,
    "state":"MO",
    "name":"Benton County"
  },
  {
    "id":29017,
    "number":1110,
    "rate":12,
    "state":"MO",
    "name":"Bollinger County"
  },
  {
    "id":29019,
    "number":9379,
    "rate":7.5,
    "state":"MO",
    "name":"Boone County"
  },
  {
    "id":29021,
    "number":8018,
    "rate":12.1,
    "state":"MO",
    "name":"Buchanan County"
  },
  {
    "id":29023,
    "number":3894,
    "rate":12.1,
    "state":"MO",
    "name":"Butler County"
  },
  {
    "id":29025,
    "number":835,
    "rate":12.5,
    "state":"MO",
    "name":"Caldwell County"
  },
  {
    "id":29027,
    "number":3216,
    "rate":9.7,
    "state":"MO",
    "name":"Callaway County"
  },
  {
    "id":29029,
    "number":3862,
    "rate":11.1,
    "state":"MO",
    "name":"Camden County"
  },
  {
    "id":29031,
    "number":6539,
    "rate":11.4,
    "state":"MO",
    "name":"Cape Girardeau County"
  },
  {
    "id":29033,
    "number":828,
    "rate":12.2,
    "state":"MO",
    "name":"Carroll County"
  },
  {
    "id":29035,
    "number":563,
    "rate":12.1,
    "state":"MO",
    "name":"Carter County"
  },
  {
    "id":29037,
    "number":7129,
    "rate":9.9,
    "state":"MO",
    "name":"Cass County"
  },
  {
    "id":29039,
    "number":1289,
    "rate":12.5,
    "state":"MO",
    "name":"Cedar County"
  },
  {
    "id":29041,
    "number":685,
    "rate":11.8,
    "state":"MO",
    "name":"Chariton County"
  },
  {
    "id":29043,
    "number":6049,
    "rate":10.7,
    "state":"MO",
    "name":"Christian County"
  },
  {
    "id":29045,
    "number":595,
    "rate":11.5,
    "state":"MO",
    "name":"Clark County"
  },
  {
    "id":29047,
    "number":19251,
    "rate":11.7,
    "state":"MO",
    "name":"Clay County"
  },
  {
    "id":29049,
    "number":1745,
    "rate":11.6,
    "state":"MO",
    "name":"Clinton County"
  },
  {
    "id":29051,
    "number":5791,
    "rate":10.2,
    "state":"MO",
    "name":"Cole County"
  },
  {
    "id":29053,
    "number":1547,
    "rate":11.7,
    "state":"MO",
    "name":"Cooper County"
  },
  {
    "id":29055,
    "number":1983,
    "rate":10.8,
    "state":"MO",
    "name":"Crawford County"
  },
  {
    "id":29057,
    "number":794,
    "rate":13.8,
    "state":"MO",
    "name":"Dade County"
  },
  {
    "id":29059,
    "number":1701,
    "rate":13.7,
    "state":"MO",
    "name":"Dallas County"
  },
  {
    "id":29061,
    "number":653,
    "rate":11,
    "state":"MO",
    "name":"Daviess County"
  },
  {
    "id":29063,
    "number":1290,
    "rate":12.4,
    "state":"MO",
    "name":"Dekalb County"
  },
  {
    "id":29065,
    "number":1455,
    "rate":12.4,
    "state":"MO",
    "name":"Dent County"
  },
  {
    "id":29067,
    "number":1220,
    "rate":11.7,
    "state":"MO",
    "name":"Douglas County"
  },
  {
    "id":29069,
    "number":2688,
    "rate":11.7,
    "state":"MO",
    "name":"Dunklin County"
  },
  {
    "id":29073,
    "number":1337,
    "rate":11.6,
    "state":"MO",
    "name":"Gasconade County"
  },
  {
    "id":29071,
    "number":8009,
    "rate":10.7,
    "state":"MO",
    "name":"Franklin County"
  },
  {
    "id":29075,
    "number":585,
    "rate":11.7,
    "state":"MO",
    "name":"Gentry County"
  },
  {
    "id":29077,
    "number":17797,
    "rate":8.4,
    "state":"MO",
    "name":"Greene County"
  },
  {
    "id":29079,
    "number":767,
    "rate":10.2,
    "state":"MO",
    "name":"Grundy County"
  },
  {
    "id":29081,
    "number":783,
    "rate":12.1,
    "state":"MO",
    "name":"Harrison County"
  },
  {
    "id":29083,
    "number":1868,
    "rate":11.1,
    "state":"MO",
    "name":"Henry County"
  },
  {
    "id":29085,
    "number":1025,
    "rate":13.4,
    "state":"MO",
    "name":"Hickory County"
  },
  {
    "id":29087,
    "number":412,
    "rate":11.3,
    "state":"MO",
    "name":"Holt County"
  },
  {
    "id":29089,
    "number":868,
    "rate":11.5,
    "state":"MO",
    "name":"Howard County"
  },
  {
    "id":29091,
    "number":3478,
    "rate":11.7,
    "state":"MO",
    "name":"Howell County"
  },
  {
    "id":29093,
    "number":913,
    "rate":11.6,
    "state":"MO",
    "name":"Iron County"
  },
  {
    "id":29095,
    "number":53087,
    "rate":10.7,
    "state":"MO",
    "name":"Jackson County"
  },
  {
    "id":29097,
    "number":8757,
    "rate":10.6,
    "state":"MO",
    "name":"Jasper County"
  },
  {
    "id":29099,
    "number":15381,
    "rate":9.5,
    "state":"MO",
    "name":"Jefferson County"
  },
  {
    "id":29101,
    "number":3539,
    "rate":8.9,
    "state":"MO",
    "name":"Johnson County"
  },
  {
    "id":29103,
    "number":329,
    "rate":11.1,
    "state":"MO",
    "name":"Knox County"
  },
  {
    "id":29105,
    "number":2936,
    "rate":11.4,
    "state":"MO",
    "name":"Laclede County"
  },
  {
    "id":29107,
    "number":2723,
    "rate":11.2,
    "state":"MO",
    "name":"Lafayette County"
  },
  {
    "id":29109,
    "number":3239,
    "rate":11.7,
    "state":"MO",
    "name":"Lawrence County"
  },
  {
    "id":29111,
    "number":871,
    "rate":11.7,
    "state":"MO",
    "name":"Lewis County"
  },
  {
    "id":29113,
    "number":4736,
    "rate":12.6,
    "state":"MO",
    "name":"Lincoln County"
  },
  {
    "id":29115,
    "number":999,
    "rate":10.9,
    "state":"MO",
    "name":"Linn County"
  },
  {
    "id":29117,
    "number":1213,
    "rate":10.5,
    "state":"MO",
    "name":"Livingston County"
  },
  {
    "id":29121,
    "number":1480,
    "rate":12.9,
    "state":"MO",
    "name":"Macon County"
  },
  {
    "id":29123,
    "number":1054,
    "rate":11.4,
    "state":"MO",
    "name":"Madison County"
  },
  {
    "id":29127,
    "number":2237,
    "rate":10.5,
    "state":"MO",
    "name":"Marion County"
  },
  {
    "id":29119,
    "number":1815,
    "rate":11.3,
    "state":"MO",
    "name":"McDonald County"
  },
  {
    "id":29125,
    "number":805,
    "rate":11.9,
    "state":"MO",
    "name":"Maries County"
  },
  {
    "id":29129,
    "number":345,
    "rate":12.7,
    "state":"MO",
    "name":"Mercer County"
  },
  {
    "id":29131,
    "number":2171,
    "rate":11.9,
    "state":"MO",
    "name":"Miller County"
  },
  {
    "id":29133,
    "number":1411,
    "rate":13,
    "state":"MO",
    "name":"Mississippi County"
  },
  {
    "id":29135,
    "number":1206,
    "rate":10.6,
    "state":"MO",
    "name":"Moniteau County"
  },
  {
    "id":29137,
    "number":828,
    "rate":12.7,
    "state":"MO",
    "name":"Monroe County"
  },
  {
    "id":29139,
    "number":1088,
    "rate":12.1,
    "state":"MO",
    "name":"Montgomery County"
  },
  {
    "id":29141,
    "number":1764,
    "rate":11.5,
    "state":"MO",
    "name":"Morgan County"
  },
  {
    "id":29143,
    "number":1809,
    "rate":13.1,
    "state":"MO",
    "name":"New Madrid County"
  },
  {
    "id":29145,
    "number":4646,
    "rate":10.8,
    "state":"MO",
    "name":"Newton County"
  },
  {
    "id":29147,
    "number":1740,
    "rate":10,
    "state":"MO",
    "name":"Nodaway County"
  },
  {
    "id":29149,
    "number":1010,
    "rate":12.2,
    "state":"MO",
    "name":"Oregon County"
  },
  {
    "id":29151,
    "number":1142,
    "rate":11.3,
    "state":"MO",
    "name":"Osage County"
  },
  {
    "id":29153,
    "number":1107,
    "rate":14.7,
    "state":"MO",
    "name":"Ozark County"
  },
  {
    "id":29155,
    "number":1593,
    "rate":12.5,
    "state":"MO",
    "name":"Pemiscot County"
  },
  {
    "id":29157,
    "number":1520,
    "rate":10.9,
    "state":"MO",
    "name":"Perry County"
  },
  {
    "id":29159,
    "number":3893,
    "rate":12.8,
    "state":"MO",
    "name":"Pettis County"
  },
  {
    "id":29161,
    "number":4013,
    "rate":12.1,
    "state":"MO",
    "name":"Phelps County"
  },
  {
    "id":29163,
    "number":1592,
    "rate":11.3,
    "state":"MO",
    "name":"Pike County"
  },
  {
    "id":29165,
    "number":6918,
    "rate":10.2,
    "state":"MO",
    "name":"Platte County"
  },
  {
    "id":29167,
    "number":2582,
    "rate":11.6,
    "state":"MO",
    "name":"Polk County"
  },
  {
    "id":29169,
    "number":3459,
    "rate":9.4,
    "state":"MO",
    "name":"Pulaski County"
  },
  {
    "id":29171,
    "number":461,
    "rate":12.4,
    "state":"MO",
    "name":"Putnam County"
  },
  {
    "id":29173,
    "number":1050,
    "rate":13.5,
    "state":"MO",
    "name":"Ralls County"
  },
  {
    "id":29175,
    "number":2191,
    "rate":11.6,
    "state":"MO",
    "name":"Randolph County"
  },
  {
    "id":29177,
    "number":2140,
    "rate":12.6,
    "state":"MO",
    "name":"Ray County"
  },
  {
    "id":29179,
    "number":638,
    "rate":12.6,
    "state":"MO",
    "name":"Reynolds County"
  },
  {
    "id":29181,
    "number":1215,
    "rate":11.6,
    "state":"MO",
    "name":"Ripley County"
  },
  {
    "id":29195,
    "number":1920,
    "rate":11.1,
    "state":"MO",
    "name":"Saline County"
  },
  {
    "id":29197,
    "number":380,
    "rate":12,
    "state":"MO",
    "name":"Schuyler County"
  },
  {
    "id":29199,
    "number":385,
    "rate":11.4,
    "state":"MO",
    "name":"Scotland County"
  },
  {
    "id":29201,
    "number":3409,
    "rate":11.9,
    "state":"MO",
    "name":"Scott County"
  },
  {
    "id":29203,
    "number":827,
    "rate":13.2,
    "state":"MO",
    "name":"Shannon County"
  },
  {
    "id":29205,
    "number":510,
    "rate":11.2,
    "state":"MO",
    "name":"Shelby County"
  },
  {
    "id":29183,
    "number":22323,
    "rate":8.4,
    "state":"MO",
    "name":"St. Charles County"
  },
  {
    "id":29185,
    "number":952,
    "rate":12.8,
    "state":"MO",
    "name":"St. Clair County"
  },
  {
    "id":29187,
    "number":6052,
    "rate":12.1,
    "state":"MO",
    "name":"St Francois County"
  },
  {
    "id":29510,
    "number":30184,
    "rate":12.4,
    "state":"MO",
    "name":"St. Louis City"
  },
  {
    "id":29189,
    "number":76753,
    "rate":10.3,
    "state":"MO",
    "name":"St. Louis County"
  },
  {
    "id":29186,
    "number":1388,
    "rate":10.4,
    "state":"MO",
    "name":"Ste Genevieve County"
  },
  {
    "id":29207,
    "number":2749,
    "rate":12.2,
    "state":"MO",
    "name":"Stoddard County"
  },
  {
    "id":29209,
    "number":3165,
    "rate":12.5,
    "state":"MO",
    "name":"Stone County"
  },
  {
    "id":29211,
    "number":581,
    "rate":11.9,
    "state":"MO",
    "name":"Sullivan County"
  },
  {
    "id":29213,
    "number":4589,
    "rate":11.5,
    "state":"MO",
    "name":"Taney County"
  },
  {
    "id":29215,
    "number":2285,
    "rate":11.7,
    "state":"MO",
    "name":"Texas County"
  },
  {
    "id":29217,
    "number":1887,
    "rate":12.6,
    "state":"MO",
    "name":"Vernon County"
  },
  {
    "id":29219,
    "number":2658,
    "rate":11,
    "state":"MO",
    "name":"Warren County"
  },
  {
    "id":29221,
    "number":2785,
    "rate":14.9,
    "state":"MO",
    "name":"Washington County"
  },
  {
    "id":29223,
    "number":1396,
    "rate":13.5,
    "state":"MO",
    "name":"Wayne County"
  },
  {
    "id":29225,
    "number":2723,
    "rate":10.7,
    "state":"MO",
    "name":"Webster County"
  },
  {
    "id":29227,
    "number":199,
    "rate":12.3,
    "state":"MO",
    "name":"Worth County"
  },
  {
    "id":29229,
    "number":1765,
    "rate":13.1,
    "state":"MO",
    "name":"Wright County"
  },
  {
    "id":28001,
    "number":3566,
    "rate":14.6,
    "state":"MS",
    "name":"Adams County"
  },
  {
    "id":28003,
    "number":3934,
    "rate":14.3,
    "state":"MS",
    "name":"Alcorn County"
  },
  {
    "id":28005,
    "number":1610,
    "rate":16.4,
    "state":"MS",
    "name":"Amite County"
  },
  {
    "id":28007,
    "number":2038,
    "rate":14.9,
    "state":"MS",
    "name":"Attala County"
  },
  {
    "id":28009,
    "number":1042,
    "rate":16.2,
    "state":"MS",
    "name":"Benton County"
  },
  {
    "id":28011,
    "number":3537,
    "rate":14.5,
    "state":"MS",
    "name":"Bolivar County"
  },
  {
    "id":28013,
    "number":1617,
    "rate":14.9,
    "state":"MS",
    "name":"Calhoun County"
  },
  {
    "id":28015,
    "number":1403,
    "rate":17.3,
    "state":"MS",
    "name":"Carroll County"
  },
  {
    "id":28017,
    "number":1928,
    "rate":15.3,
    "state":"MS",
    "name":"Chickasaw County"
  },
  {
    "id":28019,
    "number":1022,
    "rate":16.5,
    "state":"MS",
    "name":"Choctaw County"
  },
  {
    "id":28021,
    "number":1130,
    "rate":17,
    "state":"MS",
    "name":"Claiborne County"
  },
  {
    "id":28023,
    "number":1850,
    "rate":15.2,
    "state":"MS",
    "name":"Clarke County"
  },
  {
    "id":28025,
    "number":2288,
    "rate":15.4,
    "state":"MS",
    "name":"Clay County"
  },
  {
    "id":28027,
    "number":2949,
    "rate":16.9,
    "state":"MS",
    "name":"Coahoma County"
  },
  {
    "id":28029,
    "number":3155,
    "rate":15.1,
    "state":"MS",
    "name":"Copiah County"
  },
  {
    "id":28031,
    "number":2187,
    "rate":15.5,
    "state":"MS",
    "name":"Covington County"
  },
  {
    "id":28033,
    "number":14686,
    "rate":12.6,
    "state":"MS",
    "name":"Desoto County"
  },
  {
    "id":28035,
    "number":5864,
    "rate":10.5,
    "state":"MS",
    "name":"Forrest County"
  },
  {
    "id":28037,
    "number":823,
    "rate":14.3,
    "state":"MS",
    "name":"Franklin County"
  },
  {
    "id":28039,
    "number":2171,
    "rate":13.3,
    "state":"MS",
    "name":"George County"
  },
  {
    "id":28041,
    "number":1489,
    "rate":13.4,
    "state":"MS",
    "name":"Greene County"
  },
  {
    "id":28043,
    "number":2374,
    "rate":15,
    "state":"MS",
    "name":"Grenada County"
  },
  {
    "id":28045,
    "number":4370,
    "rate":12.9,
    "state":"MS",
    "name":"Hancock County"
  },
  {
    "id":28047,
    "number":18800,
    "rate":13.3,
    "state":"MS",
    "name":"Harrison County"
  },
  {
    "id":28049,
    "number":22144,
    "rate":12.6,
    "state":"MS",
    "name":"Hinds County"
  },
  {
    "id":28051,
    "number":2338,
    "rate":18.3,
    "state":"MS",
    "name":"Holmes County"
  },
  {
    "id":28053,
    "number":1120,
    "rate":17.4,
    "state":"MS",
    "name":"Humphreys County"
  },
  {
    "id":28055,
    "number":176,
    "rate":15.8,
    "state":"MS",
    "name":"Issaquena County"
  },
  {
    "id":28057,
    "number":2146,
    "rate":12.5,
    "state":"MS",
    "name":"Itawamba County"
  },
  {
    "id":28059,
    "number":13858,
    "rate":13.6,
    "state":"MS",
    "name":"Jackson County"
  },
  {
    "id":28061,
    "number":2051,
    "rate":16.8,
    "state":"MS",
    "name":"Jasper County"
  },
  {
    "id":28063,
    "number":1053,
    "rate":18.4,
    "state":"MS",
    "name":"Jefferson County"
  },
  {
    "id":28065,
    "number":1358,
    "rate":14.9,
    "state":"MS",
    "name":"Jefferson Davis County"
  },
  {
    "id":28067,
    "number":7073,
    "rate":14.4,
    "state":"MS",
    "name":"Jones County"
  },
  {
    "id":28069,
    "number":1166,
    "rate":15.3,
    "state":"MS",
    "name":"Kemper County"
  },
  {
    "id":28071,
    "number":3638,
    "rate":9.8,
    "state":"MS",
    "name":"Lafayette County"
  },
  {
    "id":28073,
    "number":4374,
    "rate":10.6,
    "state":"MS",
    "name":"Lamar County"
  },
  {
    "id":28075,
    "number":8645,
    "rate":14.8,
    "state":"MS",
    "name":"Lauderdale County"
  },
  {
    "id":28077,
    "number":1504,
    "rate":16.4,
    "state":"MS",
    "name":"Lawrence County"
  },
  {
    "id":28079,
    "number":2463,
    "rate":15.4,
    "state":"MS",
    "name":"Leake County"
  },
  {
    "id":28081,
    "number":7715,
    "rate":12.7,
    "state":"MS",
    "name":"Lee County"
  },
  {
    "id":28083,
    "number":3425,
    "rate":15.6,
    "state":"MS",
    "name":"Leflore County"
  },
  {
    "id":28085,
    "number":3250,
    "rate":12.9,
    "state":"MS",
    "name":"Lincoln County"
  },
  {
    "id":28087,
    "number":5841,
    "rate":13.5,
    "state":"MS",
    "name":"Lowndes County"
  },
  {
    "id":28089,
    "number":7298,
    "rate":10.4,
    "state":"MS",
    "name":"Madison County"
  },
  {
    "id":28091,
    "number":2574,
    "rate":13.4,
    "state":"MS",
    "name":"Marion County"
  },
  {
    "id":28093,
    "number":4033,
    "rate":14.8,
    "state":"MS",
    "name":"Marshall County"
  },
  {
    "id":28095,
    "number":3864,
    "rate":14.3,
    "state":"MS",
    "name":"Monroe County"
  },
  {
    "id":28097,
    "number":1138,
    "rate":14.5,
    "state":"MS",
    "name":"Montgomery County"
  },
  {
    "id":28099,
    "number":3029,
    "rate":14.8,
    "state":"MS",
    "name":"Neshoba County"
  },
  {
    "id":28101,
    "number":2333,
    "rate":15.2,
    "state":"MS",
    "name":"Newton County"
  },
  {
    "id":28103,
    "number":1515,
    "rate":19,
    "state":"MS",
    "name":"Noxubee County"
  },
  {
    "id":28105,
    "number":3517,
    "rate":9.7,
    "state":"MS",
    "name":"Oktibbeha County"
  },
  {
    "id":28107,
    "number":3519,
    "rate":14.4,
    "state":"MS",
    "name":"Panola County"
  },
  {
    "id":28109,
    "number":5800,
    "rate":14.3,
    "state":"MS",
    "name":"Pearl River County"
  },
  {
    "id":28111,
    "number":1176,
    "rate":13.2,
    "state":"MS",
    "name":"Perry County"
  },
  {
    "id":28113,
    "number":4498,
    "rate":16,
    "state":"MS",
    "name":"Pike County"
  },
  {
    "id":28115,
    "number":2932,
    "rate":13.5,
    "state":"MS",
    "name":"Pontotoc County"
  },
  {
    "id":28117,
    "number":2852,
    "rate":15.3,
    "state":"MS",
    "name":"Prentiss County"
  },
  {
    "id":28119,
    "number":905,
    "rate":16.2,
    "state":"MS",
    "name":"Quitman County"
  },
  {
    "id":28121,
    "number":12454,
    "rate":11.7,
    "state":"MS",
    "name":"Rankin County"
  },
  {
    "id":28123,
    "number":2914,
    "rate":14.5,
    "state":"MS",
    "name":"Scott County"
  },
  {
    "id":28125,
    "number":600,
    "rate":17.3,
    "state":"MS",
    "name":"Sharkey County"
  },
  {
    "id":28127,
    "number":2780,
    "rate":14.1,
    "state":"MS",
    "name":"Simpson County"
  },
  {
    "id":28129,
    "number":1675,
    "rate":14,
    "state":"MS",
    "name":"Smith County"
  },
  {
    "id":28131,
    "number":1721,
    "rate":13.3,
    "state":"MS",
    "name":"Stone County"
  },
  {
    "id":28133,
    "number":2944,
    "rate":14.2,
    "state":"MS",
    "name":"Sunflower County"
  },
  {
    "id":28135,
    "number":1754,
    "rate":15.2,
    "state":"MS",
    "name":"Tallahatchie County"
  },
  {
    "id":28137,
    "number":3371,
    "rate":16.7,
    "state":"MS",
    "name":"Tate County"
  },
  {
    "id":28139,
    "number":1945,
    "rate":12.2,
    "state":"MS",
    "name":"Tippah County"
  },
  {
    "id":28141,
    "number":2055,
    "rate":13.9,
    "state":"MS",
    "name":"Tishomingo County"
  },
  {
    "id":28143,
    "number":1182,
    "rate":16.6,
    "state":"MS",
    "name":"Tunica County"
  },
  {
    "id":28145,
    "number":2384,
    "rate":12,
    "state":"MS",
    "name":"Union County"
  },
  {
    "id":28147,
    "number":1912,
    "rate":17.5,
    "state":"MS",
    "name":"Walthall County"
  },
  {
    "id":28149,
    "number":4910,
    "rate":14.1,
    "state":"MS",
    "name":"Warren County"
  },
  {
    "id":28151,
    "number":5305,
    "rate":15.2,
    "state":"MS",
    "name":"Washington County"
  },
  {
    "id":28153,
    "number":2359,
    "rate":15.9,
    "state":"MS",
    "name":"Wayne County"
  },
  {
    "id":28155,
    "number":1071,
    "rate":14.4,
    "state":"MS",
    "name":"Webster County"
  },
  {
    "id":28157,
    "number":1368,
    "rate":19.1,
    "state":"MS",
    "name":"Wilkinson County"
  },
  {
    "id":28159,
    "number":2179,
    "rate":15.5,
    "state":"MS",
    "name":"Winston County"
  },
  {
    "id":28161,
    "number":1536,
    "rate":16.6,
    "state":"MS",
    "name":"Yalobusha County"
  },
  {
    "id":28163,
    "number":2823,
    "rate":13.6,
    "state":"MS",
    "name":"Yazoo County"
  },
  {
    "id":30001,
    "number":562,
    "rate":7.8,
    "state":"MT",
    "name":"Beaverhead County"
  },
  {
    "id":30003,
    "number":1167,
    "rate":14.1,
    "state":"MT",
    "name":"Big Horn County"
  },
  {
    "id":30005,
    "number":493,
    "rate":11,
    "state":"MT",
    "name":"Blaine County"
  },
  {
    "id":30007,
    "number":357,
    "rate":8.2,
    "state":"MT",
    "name":"Broadwater County"
  },
  {
    "id":30009,
    "number":713,
    "rate":8.9,
    "state":"MT",
    "name":"Carbon County"
  },
  {
    "id":30011,
    "number":83,
    "rate":8.7,
    "state":"MT",
    "name":"Carter County"
  },
  {
    "id":30013,
    "number":5348,
    "rate":8.7,
    "state":"MT",
    "name":"Cascade County"
  },
  {
    "id":30015,
    "number":348,
    "rate":8.2,
    "state":"MT",
    "name":"Chouteau County"
  },
  {
    "id":30017,
    "number":867,
    "rate":9.7,
    "state":"MT",
    "name":"Custer County"
  },
  {
    "id":30019,
    "number":129,
    "rate":9.4,
    "state":"MT",
    "name":"Daniels County"
  },
  {
    "id":30021,
    "number":553,
    "rate":7.9,
    "state":"MT",
    "name":"Dawson County"
  },
  {
    "id":30023,
    "number":633,
    "rate":8.6,
    "state":"MT",
    "name":"Deer Lodge County"
  },
  {
    "id":30025,
    "number":174,
    "rate":7.8,
    "state":"MT",
    "name":"Fallon County"
  },
  {
    "id":30027,
    "number":782,
    "rate":8.7,
    "state":"MT",
    "name":"Fergus County"
  },
  {
    "id":30029,
    "number":5081,
    "rate":7.4,
    "state":"MT",
    "name":"Flathead County"
  },
  {
    "id":30031,
    "number":2891,
    "rate":4.2,
    "state":"MT",
    "name":"Gallatin County"
  },
  {
    "id":30033,
    "number":72,
    "rate":7.6,
    "state":"MT",
    "name":"Garfield County"
  },
  {
    "id":30035,
    "number":1140,
    "rate":12.7,
    "state":"MT",
    "name":"Glacier County"
  },
  {
    "id":30037,
    "number":63,
    "rate":9.7,
    "state":"MT",
    "name":"Golden Valley County"
  },
  {
    "id":30039,
    "number":229,
    "rate":8.9,
    "state":"MT",
    "name":"Granite County"
  },
  {
    "id":30041,
    "number":1120,
    "rate":9.7,
    "state":"MT",
    "name":"Hill County"
  },
  {
    "id":30043,
    "number":665,
    "rate":7.6,
    "state":"MT",
    "name":"Jefferson County"
  },
  {
    "id":30045,
    "number":141,
    "rate":8.9,
    "state":"MT",
    "name":"Judith Basin County"
  },
  {
    "id":30047,
    "number":2241,
    "rate":10.6,
    "state":"MT",
    "name":"Lake County"
  },
  {
    "id":30049,
    "number":3560,
    "rate":7.3,
    "state":"MT",
    "name":"Lewis and Clark County"
  },
  {
    "id":30051,
    "number":154,
    "rate":8.5,
    "state":"MT",
    "name":"Liberty County"
  },
  {
    "id":30053,
    "number":1705,
    "rate":11,
    "state":"MT",
    "name":"Lincoln County"
  },
  {
    "id":30057,
    "number":491,
    "rate":7.8,
    "state":"MT",
    "name":"Madison County"
  },
  {
    "id":30055,
    "number":115,
    "rate":8.8,
    "state":"MT",
    "name":"McCone County"
  },
  {
    "id":30059,
    "number":132,
    "rate":8.8,
    "state":"MT",
    "name":"Meagher County"
  },
  {
    "id":30061,
    "number":329,
    "rate":9.7,
    "state":"MT",
    "name":"Mineral County"
  },
  {
    "id":30063,
    "number":3995,
    "rate":4.7,
    "state":"MT",
    "name":"Missoula County"
  },
  {
    "id":30065,
    "number":317,
    "rate":8.8,
    "state":"MT",
    "name":"Musselshell County"
  },
  {
    "id":30067,
    "number":872,
    "rate":7.1,
    "state":"MT",
    "name":"Park County"
  },
  {
    "id":30069,
    "number":36,
    "rate":9.3,
    "state":"MT",
    "name":"Petroleum County"
  },
  {
    "id":30071,
    "number":296,
    "rate":9.5,
    "state":"MT",
    "name":"Phillips County"
  },
  {
    "id":30073,
    "number":467,
    "rate":10.4,
    "state":"MT",
    "name":"Pondera County"
  },
  {
    "id":30075,
    "number":106,
    "rate":7.6,
    "state":"MT",
    "name":"Powder River County"
  },
  {
    "id":30077,
    "number":498,
    "rate":8.6,
    "state":"MT",
    "name":"Powell County"
  },
  {
    "id":30079,
    "number":95,
    "rate":10.1,
    "state":"MT",
    "name":"Prairie County"
  },
  {
    "id":30081,
    "number":2428,
    "rate":7.8,
    "state":"MT",
    "name":"Ravalli County"
  },
  {
    "id":30083,
    "number":594,
    "rate":7.4,
    "state":"MT",
    "name":"Richland County"
  },
  {
    "id":30085,
    "number":916,
    "rate":12.9,
    "state":"MT",
    "name":"Roosevelt County"
  },
  {
    "id":30087,
    "number":704,
    "rate":11,
    "state":"MT",
    "name":"Rosebud County"
  },
  {
    "id":30089,
    "number":903,
    "rate":10.1,
    "state":"MT",
    "name":"Sanders County"
  },
  {
    "id":30091,
    "number":296,
    "rate":10.6,
    "state":"MT",
    "name":"Sheridan County"
  },
  {
    "id":30093,
    "number":2198,
    "rate":8.4,
    "state":"MT",
    "name":"Silver Bow County"
  },
  {
    "id":30095,
    "number":544,
    "rate":7.8,
    "state":"MT",
    "name":"Stillwater County"
  },
  {
    "id":30097,
    "number":229,
    "rate":8.5,
    "state":"MT",
    "name":"Sweet Grass County"
  },
  {
    "id":30099,
    "number":414,
    "rate":9.2,
    "state":"MT",
    "name":"Teton County"
  },
  {
    "id":30101,
    "number":322,
    "rate":8,
    "state":"MT",
    "name":"Toole County"
  },
  {
    "id":30103,
    "number":53,
    "rate":9.1,
    "state":"MT",
    "name":"Treasure County"
  },
  {
    "id":30105,
    "number":531,
    "rate":9.4,
    "state":"MT",
    "name":"Valley County"
  },
  {
    "id":30107,
    "number":126,
    "rate":8.2,
    "state":"MT",
    "name":"Wheatland County"
  },
  {
    "id":30109,
    "number":75,
    "rate":9.3,
    "state":"MT",
    "name":"Wibaux County"
  },
  {
    "id":30111,
    "number":9597,
    "rate":8.5,
    "state":"MT",
    "name":"Yellowstone County"
  },
  {
    "id":37001,
    "number":13657,
    "rate":12.1,
    "state":"NC",
    "name":"Alamance County"
  },
  {
    "id":37003,
    "number":3174,
    "rate":11.3,
    "state":"NC",
    "name":"Alexander County"
  },
  {
    "id":37005,
    "number":1044,
    "rate":12.1,
    "state":"NC",
    "name":"Alleghany County"
  },
  {
    "id":37007,
    "number":2826,
    "rate":14,
    "state":"NC",
    "name":"Anson County"
  },
  {
    "id":37009,
    "number":2204,
    "rate":10.2,
    "state":"NC",
    "name":"Ashe County"
  },
  {
    "id":37011,
    "number":1428,
    "rate":10,
    "state":"NC",
    "name":"Avery County"
  },
  {
    "id":37013,
    "number":5197,
    "rate":14.3,
    "state":"NC",
    "name":"Beaufort County"
  },
  {
    "id":37017,
    "number":3918,
    "rate":14.9,
    "state":"NC",
    "name":"Bladen County"
  },
  {
    "id":37015,
    "number":2267,
    "rate":14.1,
    "state":"NC",
    "name":"Bertie County"
  },
  {
    "id":37019,
    "number":10263,
    "rate":11.4,
    "state":"NC",
    "name":"Brunswick County"
  },
  {
    "id":37021,
    "number":17561,
    "rate":9.3,
    "state":"NC",
    "name":"Buncombe County"
  },
  {
    "id":37023,
    "number":8753,
    "rate":12.8,
    "state":"NC",
    "name":"Burke County"
  },
  {
    "id":37025,
    "number":12782,
    "rate":9.8,
    "state":"NC",
    "name":"Cabarrus County"
  },
  {
    "id":37027,
    "number":8692,
    "rate":13.9,
    "state":"NC",
    "name":"Caldwell County"
  },
  {
    "id":37029,
    "number":834,
    "rate":11.4,
    "state":"NC",
    "name":"Camden County"
  },
  {
    "id":37031,
    "number":5801,
    "rate":10.8,
    "state":"NC",
    "name":"Carteret County"
  },
  {
    "id":37033,
    "number":2393,
    "rate":13.2,
    "state":"NC",
    "name":"Caswell County"
  },
  {
    "id":37035,
    "number":15394,
    "rate":13.4,
    "state":"NC",
    "name":"Catawba County"
  },
  {
    "id":37037,
    "number":5717,
    "rate":11.2,
    "state":"NC",
    "name":"Chatham County"
  },
  {
    "id":37039,
    "number":3110,
    "rate":14.5,
    "state":"NC",
    "name":"Cherokee County"
  },
  {
    "id":37041,
    "number":1578,
    "rate":14.1,
    "state":"NC",
    "name":"Chowan County"
  },
  {
    "id":37043,
    "number":1054,
    "rate":12.4,
    "state":"NC",
    "name":"Clay County"
  },
  {
    "id":37045,
    "number":8860,
    "rate":12.2,
    "state":"NC",
    "name":"Cleveland County"
  },
  {
    "id":37047,
    "number":6435,
    "rate":14.9,
    "state":"NC",
    "name":"Columbus County"
  },
  {
    "id":37049,
    "number":8282,
    "rate":10.6,
    "state":"NC",
    "name":"Craven County"
  },
  {
    "id":37051,
    "number":26508,
    "rate":11.6,
    "state":"NC",
    "name":"Cumberland County"
  },
  {
    "id":37053,
    "number":1946,
    "rate":10.8,
    "state":"NC",
    "name":"Currituck County"
  },
  {
    "id":37055,
    "number":2813,
    "rate":10.4,
    "state":"NC",
    "name":"Dare County"
  },
  {
    "id":37057,
    "number":14564,
    "rate":12,
    "state":"NC",
    "name":"Davidson County"
  },
  {
    "id":37059,
    "number":3712,
    "rate":11.9,
    "state":"NC",
    "name":"Davie County"
  },
  {
    "id":37061,
    "number":5464,
    "rate":12.6,
    "state":"NC",
    "name":"Duplin County"
  },
  {
    "id":37063,
    "number":19766,
    "rate":9.4,
    "state":"NC",
    "name":"Durham County"
  },
  {
    "id":37065,
    "number":6543,
    "rate":16,
    "state":"NC",
    "name":"Edgecombe County"
  },
  {
    "id":37067,
    "number":27268,
    "rate":10.4,
    "state":"NC",
    "name":"Forsyth County"
  },
  {
    "id":37069,
    "number":6018,
    "rate":13.3,
    "state":"NC",
    "name":"Franklin County"
  },
  {
    "id":37071,
    "number":22643,
    "rate":14.7,
    "state":"NC",
    "name":"Gaston County"
  },
  {
    "id":37073,
    "number":1140,
    "rate":12.7,
    "state":"NC",
    "name":"Gates County"
  },
  {
    "id":37075,
    "number":788,
    "rate":11.8,
    "state":"NC",
    "name":"Graham County"
  },
  {
    "id":37077,
    "number":5914,
    "rate":13.6,
    "state":"NC",
    "name":"Granville County"
  },
  {
    "id":37079,
    "number":2062,
    "rate":12.7,
    "state":"NC",
    "name":"Greene County"
  },
  {
    "id":37081,
    "number":35635,
    "rate":9.7,
    "state":"NC",
    "name":"Guilford County"
  },
  {
    "id":37083,
    "number":6108,
    "rate":15,
    "state":"NC",
    "name":"Halifax County"
  },
  {
    "id":37085,
    "number":9744,
    "rate":11.5,
    "state":"NC",
    "name":"Harnett County"
  },
  {
    "id":37087,
    "number":5676,
    "rate":12.2,
    "state":"NC",
    "name":"Haywood County"
  },
  {
    "id":37089,
    "number":9089,
    "rate":10.8,
    "state":"NC",
    "name":"Henderson County"
  },
  {
    "id":37091,
    "number":2666,
    "rate":14.4,
    "state":"NC",
    "name":"Hertford County"
  },
  {
    "id":37093,
    "number":3975,
    "rate":11.5,
    "state":"NC",
    "name":"Hoke County"
  },
  {
    "id":37095,
    "number":578,
    "rate":12.6,
    "state":"NC",
    "name":"Hyde County"
  },
  {
    "id":37097,
    "number":11516,
    "rate":9.7,
    "state":"NC",
    "name":"Iredell County"
  },
  {
    "id":37099,
    "number":4123,
    "rate":13.4,
    "state":"NC",
    "name":"Jackson County"
  },
  {
    "id":37101,
    "number":15301,
    "rate":12.4,
    "state":"NC",
    "name":"Johnston County"
  },
  {
    "id":37103,
    "number":1232,
    "rate":15.3,
    "state":"NC",
    "name":"Jones County"
  },
  {
    "id":37105,
    "number":5777,
    "rate":13.6,
    "state":"NC",
    "name":"Lee County"
  },
  {
    "id":37107,
    "number":6508,
    "rate":14.9,
    "state":"NC",
    "name":"Lenoir County"
  },
  {
    "id":37109,
    "number":6779,
    "rate":11.4,
    "state":"NC",
    "name":"Lincoln County"
  },
  {
    "id":37113,
    "number":2990,
    "rate":11.2,
    "state":"NC",
    "name":"Macon County"
  },
  {
    "id":37115,
    "number":1670,
    "rate":10.4,
    "state":"NC",
    "name":"Madison County"
  },
  {
    "id":37117,
    "number":2959,
    "rate":16.2,
    "state":"NC",
    "name":"Martin County"
  },
  {
    "id":37111,
    "number":4776,
    "rate":13.9,
    "state":"NC",
    "name":"McDowell County"
  },
  {
    "id":37119,
    "number":59154,
    "rate":8.4,
    "state":"NC",
    "name":"Mecklenburg County"
  },
  {
    "id":37121,
    "number":1719,
    "rate":14.1,
    "state":"NC",
    "name":"Mitchell County"
  },
  {
    "id":37123,
    "number":2732,
    "rate":13.4,
    "state":"NC",
    "name":"Montgomery County"
  },
  {
    "id":37125,
    "number":8021,
    "rate":11.6,
    "state":"NC",
    "name":"Moore County"
  },
  {
    "id":37127,
    "number":8473,
    "rate":12,
    "state":"NC",
    "name":"Nash County"
  },
  {
    "id":37129,
    "number":13503,
    "rate":8.4,
    "state":"NC",
    "name":"New Hanover County"
  },
  {
    "id":37131,
    "number":2619,
    "rate":15.8,
    "state":"NC",
    "name":"Northampton County"
  },
  {
    "id":37133,
    "number":11485,
    "rate":8.8,
    "state":"NC",
    "name":"Onslow County"
  },
  {
    "id":37135,
    "number":7667,
    "rate":7.6,
    "state":"NC",
    "name":"Orange County"
  },
  {
    "id":37137,
    "number":1587,
    "rate":15,
    "state":"NC",
    "name":"Pamlico County"
  },
  {
    "id":37139,
    "number":4319,
    "rate":14.4,
    "state":"NC",
    "name":"Pasquotank County"
  },
  {
    "id":37141,
    "number":4985,
    "rate":12.2,
    "state":"NC",
    "name":"Pender County"
  },
  {
    "id":37143,
    "number":1555,
    "rate":14.8,
    "state":"NC",
    "name":"Perquimans County"
  },
  {
    "id":37145,
    "number":3845,
    "rate":13,
    "state":"NC",
    "name":"Person County"
  },
  {
    "id":37147,
    "number":11407,
    "rate":9,
    "state":"NC",
    "name":"Pitt County"
  },
  {
    "id":37149,
    "number":2019,
    "rate":12.5,
    "state":"NC",
    "name":"Polk County"
  },
  {
    "id":37151,
    "number":12859,
    "rate":12.2,
    "state":"NC",
    "name":"Randolph County"
  },
  {
    "id":37153,
    "number":4115,
    "rate":12.1,
    "state":"NC",
    "name":"Richmond County"
  },
  {
    "id":37155,
    "number":15346,
    "rate":16.1,
    "state":"NC",
    "name":"Robeson County"
  },
  {
    "id":37157,
    "number":9362,
    "rate":13.2,
    "state":"NC",
    "name":"Rockingham County"
  },
  {
    "id":37159,
    "number":12686,
    "rate":12.4,
    "state":"NC",
    "name":"Rowan County"
  },
  {
    "id":37161,
    "number":6605,
    "rate":12.9,
    "state":"NC",
    "name":"Rutherford County"
  },
  {
    "id":37163,
    "number":6302,
    "rate":13.6,
    "state":"NC",
    "name":"Sampson County"
  },
  {
    "id":37165,
    "number":3376,
    "rate":12.8,
    "state":"NC",
    "name":"Scotland County"
  },
  {
    "id":37167,
    "number":5318,
    "rate":11.7,
    "state":"NC",
    "name":"Stanly County"
  },
  {
    "id":37169,
    "number":4554,
    "rate":12.7,
    "state":"NC",
    "name":"Stokes County"
  },
  {
    "id":37171,
    "number":7193,
    "rate":13.1,
    "state":"NC",
    "name":"Surry County"
  },
  {
    "id":37173,
    "number":1688,
    "rate":16.1,
    "state":"NC",
    "name":"Swain County"
  },
  {
    "id":37175,
    "number":2859,
    "rate":10.9,
    "state":"NC",
    "name":"Transylvania County"
  },
  {
    "id":37177,
    "number":450,
    "rate":13.6,
    "state":"NC",
    "name":"Tyrrell County"
  },
  {
    "id":37179,
    "number":13016,
    "rate":9.2,
    "state":"NC",
    "name":"Union County"
  },
  {
    "id":37181,
    "number":4381,
    "rate":13.4,
    "state":"NC",
    "name":"Vance County"
  },
  {
    "id":37183,
    "number":57857,
    "rate":8.5,
    "state":"NC",
    "name":"Wake County"
  },
  {
    "id":37185,
    "number":2463,
    "rate":15.3,
    "state":"NC",
    "name":"Warren County"
  },
  {
    "id":37187,
    "number":1433,
    "rate":14.8,
    "state":"NC",
    "name":"Washington County"
  },
  {
    "id":37189,
    "number":3304,
    "rate":8.2,
    "state":"NC",
    "name":"Watauga County"
  },
  {
    "id":37191,
    "number":11566,
    "rate":12.8,
    "state":"NC",
    "name":"Wayne County"
  },
  {
    "id":37193,
    "number":5836,
    "rate":11.1,
    "state":"NC",
    "name":"Wilkes County"
  },
  {
    "id":37195,
    "number":8169,
    "rate":13.6,
    "state":"NC",
    "name":"Wilson County"
  },
  {
    "id":37197,
    "number":2989,
    "rate":10.4,
    "state":"NC",
    "name":"Yadkin County"
  },
  {
    "id":37199,
    "number":1629,
    "rate":11.8,
    "state":"NC",
    "name":"Yancey County"
  },
  {
    "id":38001,
    "number":201,
    "rate":11,
    "state":"ND",
    "name":"Adams County"
  },
  {
    "id":38003,
    "number":793,
    "rate":9.4,
    "state":"ND",
    "name":"Barnes County"
  },
  {
    "id":38005,
    "number":496,
    "rate":11.6,
    "state":"ND",
    "name":"Benson County"
  },
  {
    "id":38007,
    "number":64,
    "rate":8.8,
    "state":"ND",
    "name":"Billings County"
  },
  {
    "id":38009,
    "number":484,
    "rate":9.6,
    "state":"ND",
    "name":"Bottineau County"
  },
  {
    "id":38011,
    "number":245,
    "rate":10.2,
    "state":"ND",
    "name":"Bowman County"
  },
  {
    "id":38013,
    "number":157,
    "rate":9.5,
    "state":"ND",
    "name":"Burke County"
  },
  {
    "id":38015,
    "number":5128,
    "rate":8,
    "state":"ND",
    "name":"Burleigh County"
  },
  {
    "id":38017,
    "number":8533,
    "rate":7.3,
    "state":"ND",
    "name":"Cass County"
  },
  {
    "id":38019,
    "number":344,
    "rate":11.2,
    "state":"ND",
    "name":"Cavalier County"
  },
  {
    "id":38021,
    "number":442,
    "rate":11.4,
    "state":"ND",
    "name":"Dickey County"
  },
  {
    "id":38023,
    "number":178,
    "rate":10,
    "state":"ND",
    "name":"Divide County"
  },
  {
    "id":38025,
    "number":317,
    "rate":10.6,
    "state":"ND",
    "name":"Dunn County"
  },
  {
    "id":38027,
    "number":203,
    "rate":11.1,
    "state":"ND",
    "name":"Eddy County"
  },
  {
    "id":38029,
    "number":310,
    "rate":11.6,
    "state":"ND",
    "name":"Emmons County"
  },
  {
    "id":38031,
    "number":287,
    "rate":11.1,
    "state":"ND",
    "name":"Foster County"
  },
  {
    "id":38033,
    "number":123,
    "rate":9.2,
    "state":"ND",
    "name":"Golden Valley County"
  },
  {
    "id":38035,
    "number":3343,
    "rate":6.6,
    "state":"ND",
    "name":"Grand Forks County"
  },
  {
    "id":38037,
    "number":210,
    "rate":11.3,
    "state":"ND",
    "name":"Grant County"
  },
  {
    "id":38039,
    "number":219,
    "rate":11.6,
    "state":"ND",
    "name":"Griggs County"
  },
  {
    "id":38041,
    "number":193,
    "rate":9.8,
    "state":"ND",
    "name":"Hettinger County"
  },
  {
    "id":38043,
    "number":171,
    "rate":9.2,
    "state":"ND",
    "name":"Kidder County"
  },
  {
    "id":38045,
    "number":371,
    "rate":11.6,
    "state":"ND",
    "name":"Lamoure County"
  },
  {
    "id":38047,
    "number":170,
    "rate":11.4,
    "state":"ND",
    "name":"Logan County"
  },
  {
    "id":38049,
    "number":378,
    "rate":8.6,
    "state":"ND",
    "name":"McHenry County"
  },
  {
    "id":38051,
    "number":230,
    "rate":10.5,
    "state":"ND",
    "name":"McIntosh County"
  },
  {
    "id":38053,
    "number":515,
    "rate":9.2,
    "state":"ND",
    "name":"McKenzie County"
  },
  {
    "id":38055,
    "number":753,
    "rate":10.4,
    "state":"ND",
    "name":"McLean County"
  },
  {
    "id":38057,
    "number":599,
    "rate":9.3,
    "state":"ND",
    "name":"Mercer County"
  },
  {
    "id":38059,
    "number":1680,
    "rate":8.1,
    "state":"ND",
    "name":"Morton County"
  },
  {
    "id":38061,
    "number":709,
    "rate":11,
    "state":"ND",
    "name":"Mountrail County"
  },
  {
    "id":38063,
    "number":276,
    "rate":11.2,
    "state":"ND",
    "name":"Nelson County"
  },
  {
    "id":38065,
    "number":162,
    "rate":11.7,
    "state":"ND",
    "name":"Oliver County"
  },
  {
    "id":38067,
    "number":692,
    "rate":12.4,
    "state":"ND",
    "name":"Pembina County"
  },
  {
    "id":38069,
    "number":370,
    "rate":10.9,
    "state":"ND",
    "name":"Pierce County"
  },
  {
    "id":38071,
    "number":825,
    "rate":9.5,
    "state":"ND",
    "name":"Ramsey County"
  },
  {
    "id":38073,
    "number":448,
    "rate":11,
    "state":"ND",
    "name":"Ransom County"
  },
  {
    "id":38075,
    "number":208,
    "rate":10.8,
    "state":"ND",
    "name":"Renville County"
  },
  {
    "id":38077,
    "number":1068,
    "rate":9,
    "state":"ND",
    "name":"Richland County"
  },
  {
    "id":38079,
    "number":1215,
    "rate":13.3,
    "state":"ND",
    "name":"Rolette County"
  },
  {
    "id":38081,
    "number":282,
    "rate":9.6,
    "state":"ND",
    "name":"Sargent County"
  },
  {
    "id":38083,
    "number":132,
    "rate":12.7,
    "state":"ND",
    "name":"Sheridan County"
  },
  {
    "id":38085,
    "number":347,
    "rate":13.4,
    "state":"ND",
    "name":"Sioux County"
  },
  {
    "id":38087,
    "number":52,
    "rate":9,
    "state":"ND",
    "name":"Slope County"
  },
  {
    "id":38089,
    "number":1744,
    "rate":8.7,
    "state":"ND",
    "name":"Stark County"
  },
  {
    "id":38093,
    "number":1429,
    "rate":8.9,
    "state":"ND",
    "name":"Stutsman County"
  },
  {
    "id":38091,
    "number":182,
    "rate":11.8,
    "state":"ND",
    "name":"Steele County"
  },
  {
    "id":38095,
    "number":193,
    "rate":10.6,
    "state":"ND",
    "name":"Towner County"
  },
  {
    "id":38097,
    "number":603,
    "rate":10,
    "state":"ND",
    "name":"Traill County"
  },
  {
    "id":38099,
    "number":889,
    "rate":10.6,
    "state":"ND",
    "name":"Walsh County"
  },
  {
    "id":38101,
    "number":3849,
    "rate":8,
    "state":"ND",
    "name":"Ward County"
  },
  {
    "id":38103,
    "number":405,
    "rate":12,
    "state":"ND",
    "name":"Wells County"
  },
  {
    "id":38105,
    "number":1757,
    "rate":8.9,
    "state":"ND",
    "name":"Williams County"
  },
  {
    "id":31001,
    "number":2118,
    "rate":9.3,
    "state":"NE",
    "name":"Adams County"
  },
  {
    "id":31003,
    "number":517,
    "rate":10.7,
    "state":"NE",
    "name":"Antelope County"
  },
  {
    "id":31005,
    "number":29,
    "rate":8.9,
    "state":"NE",
    "name":"Arthur County"
  },
  {
    "id":31007,
    "number":70,
    "rate":11.7,
    "state":"NE",
    "name":"Banner County"
  },
  {
    "id":31009,
    "number":35,
    "rate":9.2,
    "state":"NE",
    "name":"Blaine County"
  },
  {
    "id":31011,
    "number":415,
    "rate":10.3,
    "state":"NE",
    "name":"Boone County"
  },
  {
    "id":31013,
    "number":917,
    "rate":11.2,
    "state":"NE",
    "name":"Box Butte County"
  },
  {
    "id":31015,
    "number":186,
    "rate":11.7,
    "state":"NE",
    "name":"Boyd County"
  },
  {
    "id":31017,
    "number":256,
    "rate":11.1,
    "state":"NE",
    "name":"Brown County"
  },
  {
    "id":31019,
    "number":2297,
    "rate":6.7,
    "state":"NE",
    "name":"Buffalo County"
  },
  {
    "id":31021,
    "number":523,
    "rate":10.4,
    "state":"NE",
    "name":"Burt County"
  },
  {
    "id":31023,
    "number":511,
    "rate":8.4,
    "state":"NE",
    "name":"Butler County"
  },
  {
    "id":31025,
    "number":1636,
    "rate":8.9,
    "state":"NE",
    "name":"Cass County"
  },
  {
    "id":31027,
    "number":575,
    "rate":9,
    "state":"NE",
    "name":"Cedar County"
  },
  {
    "id":31029,
    "number":285,
    "rate":9.6,
    "state":"NE",
    "name":"Chase County"
  },
  {
    "id":31031,
    "number":356,
    "rate":8.2,
    "state":"NE",
    "name":"Cherry County"
  },
  {
    "id":31033,
    "number":592,
    "rate":8,
    "state":"NE",
    "name":"Cheyenne County"
  },
  {
    "id":31035,
    "number":420,
    "rate":8.9,
    "state":"NE",
    "name":"Clay County"
  },
  {
    "id":31037,
    "number":558,
    "rate":7.8,
    "state":"NE",
    "name":"Colfax County"
  },
  {
    "id":31039,
    "number":499,
    "rate":7.5,
    "state":"NE",
    "name":"Cuming County"
  },
  {
    "id":31041,
    "number":832,
    "rate":10.4,
    "state":"NE",
    "name":"Custer County"
  },
  {
    "id":31043,
    "number":1332,
    "rate":9.4,
    "state":"NE",
    "name":"Dakota County"
  },
  {
    "id":31045,
    "number":661,
    "rate":9.8,
    "state":"NE",
    "name":"Dawes County"
  },
  {
    "id":31047,
    "number":1552,
    "rate":9.3,
    "state":"NE",
    "name":"Dawson County"
  },
  {
    "id":31049,
    "number":163,
    "rate":10.8,
    "state":"NE",
    "name":"Deuel County"
  },
  {
    "id":31051,
    "number":372,
    "rate":8.7,
    "state":"NE",
    "name":"Dixon County"
  },
  {
    "id":31053,
    "number":2506,
    "rate":9.3,
    "state":"NE",
    "name":"Dodge County"
  },
  {
    "id":31055,
    "number":33157,
    "rate":8.7,
    "state":"NE",
    "name":"Douglas County"
  },
  {
    "id":31057,
    "number":163,
    "rate":10.9,
    "state":"NE",
    "name":"Dundy County"
  },
  {
    "id":31059,
    "number":414,
    "rate":9.5,
    "state":"NE",
    "name":"Fillmore County"
  },
  {
    "id":31061,
    "number":247,
    "rate":10.1,
    "state":"NE",
    "name":"Franklin County"
  },
  {
    "id":31063,
    "number":189,
    "rate":9.3,
    "state":"NE",
    "name":"Frontier County"
  },
  {
    "id":31065,
    "number":451,
    "rate":12.2,
    "state":"NE",
    "name":"Furnas County"
  },
  {
    "id":31067,
    "number":1807,
    "rate":11,
    "state":"NE",
    "name":"Gage County"
  },
  {
    "id":31069,
    "number":165,
    "rate":10.4,
    "state":"NE",
    "name":"Garden County"
  },
  {
    "id":31071,
    "number":154,
    "rate":9.9,
    "state":"NE",
    "name":"Garfield County"
  },
  {
    "id":31073,
    "number":146,
    "rate":9.7,
    "state":"NE",
    "name":"Gosper County"
  },
  {
    "id":31075,
    "number":49,
    "rate":9.9,
    "state":"NE",
    "name":"Grant County"
  },
  {
    "id":31077,
    "number":170,
    "rate":9.2,
    "state":"NE",
    "name":"Greeley County"
  },
  {
    "id":31079,
    "number":3689,
    "rate":8.7,
    "state":"NE",
    "name":"Hall County"
  },
  {
    "id":31081,
    "number":479,
    "rate":7.3,
    "state":"NE",
    "name":"Hamilton County"
  },
  {
    "id":31083,
    "number":256,
    "rate":9.7,
    "state":"NE",
    "name":"Harlan County"
  },
  {
    "id":31085,
    "number":75,
    "rate":10.2,
    "state":"NE",
    "name":"Hayes County"
  },
  {
    "id":31087,
    "number":227,
    "rate":10.2,
    "state":"NE",
    "name":"Hitchcock County"
  },
  {
    "id":31089,
    "number":641,
    "rate":8.3,
    "state":"NE",
    "name":"Holt County"
  },
  {
    "id":31091,
    "number":58,
    "rate":10.5,
    "state":"NE",
    "name":"Hooker County"
  },
  {
    "id":31093,
    "number":486,
    "rate":10.4,
    "state":"NE",
    "name":"Howard County"
  },
  {
    "id":31095,
    "number":641,
    "rate":11.2,
    "state":"NE",
    "name":"Jefferson County"
  },
  {
    "id":31097,
    "number":365,
    "rate":9,
    "state":"NE",
    "name":"Johnson County"
  },
  {
    "id":31099,
    "number":384,
    "rate":8,
    "state":"NE",
    "name":"Kearney County"
  },
  {
    "id":31101,
    "number":564,
    "rate":8.9,
    "state":"NE",
    "name":"Keith County"
  },
  {
    "id":31103,
    "number":65,
    "rate":10.6,
    "state":"NE",
    "name":"Keya Paha County"
  },
  {
    "id":31105,
    "number":285,
    "rate":10.1,
    "state":"NE",
    "name":"Kimball County"
  },
  {
    "id":31107,
    "number":638,
    "rate":10.1,
    "state":"NE",
    "name":"Knox County"
  },
  {
    "id":31109,
    "number":15870,
    "rate":7.4,
    "state":"NE",
    "name":"Lancaster County"
  },
  {
    "id":31111,
    "number":2663,
    "rate":10.1,
    "state":"NE",
    "name":"Lincoln County"
  },
  {
    "id":31113,
    "number":50,
    "rate":8.9,
    "state":"NE",
    "name":"Logan County"
  },
  {
    "id":31115,
    "number":48,
    "rate":10.6,
    "state":"NE",
    "name":"Loup County"
  },
  {
    "id":31119,
    "number":2241,
    "rate":8.8,
    "state":"NE",
    "name":"Madison County"
  },
  {
    "id":31117,
    "number":35,
    "rate":9.9,
    "state":"NE",
    "name":"McPherson County"
  },
  {
    "id":31121,
    "number":617,
    "rate":10.8,
    "state":"NE",
    "name":"Merrick County"
  },
  {
    "id":31123,
    "number":316,
    "rate":8.9,
    "state":"NE",
    "name":"Morrill County"
  },
  {
    "id":31125,
    "number":335,
    "rate":12,
    "state":"NE",
    "name":"Nance County"
  },
  {
    "id":31127,
    "number":505,
    "rate":9.5,
    "state":"NE",
    "name":"Nemaha County"
  },
  {
    "id":31129,
    "number":355,
    "rate":10.3,
    "state":"NE",
    "name":"Nuckolls County"
  },
  {
    "id":31131,
    "number":1323,
    "rate":11.3,
    "state":"NE",
    "name":"Otoe County"
  },
  {
    "id":31133,
    "number":251,
    "rate":11.8,
    "state":"NE",
    "name":"Pawnee County"
  },
  {
    "id":31135,
    "number":199,
    "rate":9.1,
    "state":"NE",
    "name":"Perkins County"
  },
  {
    "id":31137,
    "number":685,
    "rate":10.1,
    "state":"NE",
    "name":"Phelps County"
  },
  {
    "id":31139,
    "number":554,
    "rate":10.7,
    "state":"NE",
    "name":"Pierce County"
  },
  {
    "id":31141,
    "number":1858,
    "rate":8,
    "state":"NE",
    "name":"Platte County"
  },
  {
    "id":31143,
    "number":380,
    "rate":9.7,
    "state":"NE",
    "name":"Polk County"
  },
  {
    "id":31145,
    "number":766,
    "rate":9.4,
    "state":"NE",
    "name":"Red Willow County"
  },
  {
    "id":31147,
    "number":694,
    "rate":10.9,
    "state":"NE",
    "name":"Richardson County"
  },
  {
    "id":31149,
    "number":125,
    "rate":11.6,
    "state":"NE",
    "name":"Rock County"
  },
  {
    "id":31151,
    "number":847,
    "rate":8.2,
    "state":"NE",
    "name":"Saline County"
  },
  {
    "id":31153,
    "number":9825,
    "rate":8.6,
    "state":"NE",
    "name":"Sarpy County"
  },
  {
    "id":31155,
    "number":1233,
    "rate":8.2,
    "state":"NE",
    "name":"Saunders County"
  },
  {
    "id":31157,
    "number":2854,
    "rate":10.6,
    "state":"NE",
    "name":"Scotts Bluff County"
  },
  {
    "id":31159,
    "number":957,
    "rate":7.9,
    "state":"NE",
    "name":"Seward County"
  },
  {
    "id":31161,
    "number":431,
    "rate":10.7,
    "state":"NE",
    "name":"Sheridan County"
  },
  {
    "id":31163,
    "number":252,
    "rate":10.6,
    "state":"NE",
    "name":"Sherman County"
  },
  {
    "id":31165,
    "number":85,
    "rate":8.6,
    "state":"NE",
    "name":"Sioux County"
  },
  {
    "id":31167,
    "number":416,
    "rate":9.6,
    "state":"NE",
    "name":"Stanton County"
  },
  {
    "id":31169,
    "number":422,
    "rate":10.6,
    "state":"NE",
    "name":"Thayer County"
  },
  {
    "id":31171,
    "number":49,
    "rate":9.7,
    "state":"NE",
    "name":"Thomas County"
  },
  {
    "id":31173,
    "number":692,
    "rate":16.3,
    "state":"NE",
    "name":"Thurston County"
  },
  {
    "id":31175,
    "number":361,
    "rate":11.3,
    "state":"NE",
    "name":"Valley County"
  },
  {
    "id":31177,
    "number":1243,
    "rate":8.5,
    "state":"NE",
    "name":"Washington County"
  },
  {
    "id":31179,
    "number":457,
    "rate":6.7,
    "state":"NE",
    "name":"Wayne County"
  },
  {
    "id":31181,
    "number":279,
    "rate":9.9,
    "state":"NE",
    "name":"Webster County"
  },
  {
    "id":31183,
    "number":59,
    "rate":9.9,
    "state":"NE",
    "name":"Wheeler County"
  },
  {
    "id":31185,
    "number":900,
    "rate":8.7,
    "state":"NE",
    "name":"York County"
  },
  {
    "id":33001,
    "number":4479,
    "rate":9.5,
    "state":"NH",
    "name":"Belknap County"
  },
  {
    "id":33003,
    "number":3817,
    "rate":9.9,
    "state":"NH",
    "name":"Carroll County"
  },
  {
    "id":33005,
    "number":5112,
    "rate":8.7,
    "state":"NH",
    "name":"Cheshire County"
  },
  {
    "id":33007,
    "number":2905,
    "rate":11.3,
    "state":"NH",
    "name":"Coos County"
  },
  {
    "id":33009,
    "number":6297,
    "rate":9.1,
    "state":"NH",
    "name":"Grafton County"
  },
  {
    "id":33011,
    "number":27718,
    "rate":9.2,
    "state":"NH",
    "name":"Hillsborough County"
  },
  {
    "id":33013,
    "number":10329,
    "rate":9.2,
    "state":"NH",
    "name":"Merrimack County"
  },
  {
    "id":33015,
    "number":20161,
    "rate":8.9,
    "state":"NH",
    "name":"Rockingham County"
  },
  {
    "id":33017,
    "number":9876,
    "rate":10.6,
    "state":"NH",
    "name":"Strafford County"
  },
  {
    "id":33019,
    "number":3287,
    "rate":9.8,
    "state":"NH",
    "name":"Sullivan County"
  },
  {
    "id":34001,
    "number":21761,
    "rate":10.6,
    "state":"NJ",
    "name":"Atlantic County"
  },
  {
    "id":34003,
    "number":52747,
    "rate":7.6,
    "state":"NJ",
    "name":"Bergen County"
  },
  {
    "id":34005,
    "number":32387,
    "rate":9.5,
    "state":"NJ",
    "name":"Burlington County"
  },
  {
    "id":34007,
    "number":38113,
    "rate":10,
    "state":"NJ",
    "name":"Camden County"
  },
  {
    "id":34009,
    "number":8747,
    "rate":11.4,
    "state":"NJ",
    "name":"Cape May County"
  },
  {
    "id":34011,
    "number":13525,
    "rate":11.6,
    "state":"NJ",
    "name":"Cumberland County"
  },
  {
    "id":34013,
    "number":58341,
    "rate":10.2,
    "state":"NJ",
    "name":"Essex County"
  },
  {
    "id":34015,
    "number":23225,
    "rate":10.9,
    "state":"NJ",
    "name":"Gloucester County"
  },
  {
    "id":34017,
    "number":37536,
    "rate":7.4,
    "state":"NJ",
    "name":"Hudson County"
  },
  {
    "id":34019,
    "number":6060,
    "rate":6.4,
    "state":"NJ",
    "name":"Hunterdon County"
  },
  {
    "id":34021,
    "number":26282,
    "rate":9.6,
    "state":"NJ",
    "name":"Mercer County"
  },
  {
    "id":34023,
    "number":58321,
    "rate":9.5,
    "state":"NJ",
    "name":"Middlesex County"
  },
  {
    "id":34025,
    "number":41276,
    "rate":8.8,
    "state":"NJ",
    "name":"Monmouth County"
  },
  {
    "id":34027,
    "number":27963,
    "rate":7.6,
    "state":"NJ",
    "name":"Morris County"
  },
  {
    "id":34029,
    "number":47249,
    "rate":10.9,
    "state":"NJ",
    "name":"Ocean County"
  },
  {
    "id":34031,
    "number":32922,
    "rate":9,
    "state":"NJ",
    "name":"Passaic County"
  },
  {
    "id":34033,
    "number":5701,
    "rate":11.6,
    "state":"NJ",
    "name":"Salem County"
  },
  {
    "id":34035,
    "number":20112,
    "rate":8.3,
    "state":"NJ",
    "name":"Somerset County"
  },
  {
    "id":34037,
    "number":9038,
    "rate":8.2,
    "state":"NJ",
    "name":"Sussex County"
  },
  {
    "id":34039,
    "number":31495,
    "rate":7.9,
    "state":"NJ",
    "name":"Union County"
  },
  {
    "id":34041,
    "number":7006,
    "rate":8.7,
    "state":"NJ",
    "name":"Warren County"
  },
  {
    "id":35001,
    "number":32409,
    "rate":6.5,
    "state":"NM",
    "name":"Bernalillo County"
  },
  {
    "id":35003,
    "number":312,
    "rate":10.2,
    "state":"NM",
    "name":"Catron County"
  },
  {
    "id":35005,
    "number":4834,
    "rate":10.6,
    "state":"NM",
    "name":"Chaves County"
  },
  {
    "id":35006,
    "number":2563,
    "rate":13,
    "state":"NM",
    "name":"Cibola County"
  },
  {
    "id":35007,
    "number":1006,
    "rate":9.8,
    "state":"NM",
    "name":"Colfax County"
  },
  {
    "id":35009,
    "number":2929,
    "rate":8.3,
    "state":"NM",
    "name":"Curry County"
  },
  {
    "id":35011,
    "number":134,
    "rate":9.1,
    "state":"NM",
    "name":"De Baca County"
  },
  {
    "id":35013,
    "number":9967,
    "rate":6.7,
    "state":"NM",
    "name":"Dona Ana County"
  },
  {
    "id":35015,
    "number":3617,
    "rate":9.3,
    "state":"NM",
    "name":"Eddy County"
  },
  {
    "id":35017,
    "number":2037,
    "rate":9.1,
    "state":"NM",
    "name":"Grant County"
  },
  {
    "id":35019,
    "number":308,
    "rate":8.7,
    "state":"NM",
    "name":"Guadalupe County"
  },
  {
    "id":35021,
    "number":62,
    "rate":10.7,
    "state":"NM",
    "name":"Harding County"
  },
  {
    "id":35023,
    "number":323,
    "rate":9.3,
    "state":"NM",
    "name":"Hidalgo County"
  },
  {
    "id":35025,
    "number":3528,
    "rate":7.9,
    "state":"NM",
    "name":"Lea County"
  },
  {
    "id":35027,
    "number":1297,
    "rate":8.1,
    "state":"NM",
    "name":"Lincoln County"
  },
  {
    "id":35028,
    "number":944,
    "rate":7,
    "state":"NM",
    "name":"Los Alamos County"
  },
  {
    "id":35029,
    "number":1732,
    "rate":9.8,
    "state":"NM",
    "name":"Luna County"
  },
  {
    "id":35031,
    "number":6837,
    "rate":14.2,
    "state":"NM",
    "name":"Mckinley County"
  },
  {
    "id":35033,
    "number":384,
    "rate":10.6,
    "state":"NM",
    "name":"Mora County"
  },
  {
    "id":35035,
    "number":4770,
    "rate":10,
    "state":"NM",
    "name":"Otero County"
  },
  {
    "id":35037,
    "number":700,
    "rate":10.4,
    "state":"NM",
    "name":"Quay County"
  },
  {
    "id":35039,
    "number":2626,
    "rate":8.9,
    "state":"NM",
    "name":"Rio Arriba County"
  },
  {
    "id":35041,
    "number":1336,
    "rate":9.6,
    "state":"NM",
    "name":"Roosevelt County"
  },
  {
    "id":35045,
    "number":8684,
    "rate":9.8,
    "state":"NM",
    "name":"San Juan County"
  },
  {
    "id":35047,
    "number":1952,
    "rate":8.9,
    "state":"NM",
    "name":"San Miguel County"
  },
  {
    "id":35043,
    "number":7857,
    "rate":8.1,
    "state":"NM",
    "name":"Sandoval County"
  },
  {
    "id":35049,
    "number":5611,
    "rate":4.9,
    "state":"NM",
    "name":"Santa Fe County"
  },
  {
    "id":35051,
    "number":1013,
    "rate":10.4,
    "state":"NM",
    "name":"Sierra County"
  },
  {
    "id":35053,
    "number":1248,
    "rate":9.8,
    "state":"NM",
    "name":"Socorro County"
  },
  {
    "id":35055,
    "number":1871,
    "rate":7.3,
    "state":"NM",
    "name":"Taos County"
  },
  {
    "id":35057,
    "number":1146,
    "rate":9.6,
    "state":"NM",
    "name":"Torrance County"
  },
  {
    "id":35059,
    "number":271,
    "rate":7.8,
    "state":"NM",
    "name":"Union County"
  },
  {
    "id":35061,
    "number":4979,
    "rate":9,
    "state":"NM",
    "name":"Valencia County"
  },
  {
    "id":32510,
    "number":3530,
    "rate":8.4,
    "state":"NV",
    "name":"Carson City"
  },
  {
    "id":32001,
    "number":1717,
    "rate":9.6,
    "state":"NV",
    "name":"Churchill County"
  },
  {
    "id":32003,
    "number":125100,
    "rate":8.5,
    "state":"NV",
    "name":"Clark County"
  },
  {
    "id":32005,
    "number":2845,
    "rate":7.7,
    "state":"NV",
    "name":"Douglas County"
  },
  {
    "id":32007,
    "number":2746,
    "rate":7.8,
    "state":"NV",
    "name":"Elko County"
  },
  {
    "id":32009,
    "number":68,
    "rate":10.8,
    "state":"NV",
    "name":"Esmeralda County"
  },
  {
    "id":32013,
    "number":744,
    "rate":6.2,
    "state":"NV",
    "name":"Humboldt County"
  },
  {
    "id":32015,
    "number":329,
    "rate":7.9,
    "state":"NV",
    "name":"Lander County"
  },
  {
    "id":32011,
    "number":130,
    "rate":8.7,
    "state":"NV",
    "name":"Eureka County"
  },
  {
    "id":32017,
    "number":331,
    "rate":8.5,
    "state":"NV",
    "name":"Lincoln County"
  },
  {
    "id":32019,
    "number":3615,
    "rate":9.5,
    "state":"NV",
    "name":"Lyon County"
  },
  {
    "id":32021,
    "number":391,
    "rate":10.5,
    "state":"NV",
    "name":"Mineral County"
  },
  {
    "id":32023,
    "number":3786,
    "rate":11.2,
    "state":"NV",
    "name":"Nye County"
  },
  {
    "id":32027,
    "number":442,
    "rate":8.2,
    "state":"NV",
    "name":"Pershing County"
  },
  {
    "id":32029,
    "number":330,
    "rate":10,
    "state":"NV",
    "name":"Storey County"
  },
  {
    "id":32031,
    "number":22356,
    "rate":7,
    "state":"NV",
    "name":"Washoe County"
  },
  {
    "id":32033,
    "number":634,
    "rate":8.3,
    "state":"NV",
    "name":"White Pine County"
  },
  {
    "id":36001,
    "number":22820,
    "rate":9.8,
    "state":"NY",
    "name":"Albany County"
  },
  {
    "id":36003,
    "number":3575,
    "rate":10.2,
    "state":"NY",
    "name":"Allegany County"
  },
  {
    "id":36005,
    "number":113337,
    "rate":11.4,
    "state":"NY",
    "name":"Bronx County"
  },
  {
    "id":36007,
    "number":16027,
    "rate":10.6,
    "state":"NY",
    "name":"Broome County"
  },
  {
    "id":36009,
    "number":6150,
    "rate":10.5,
    "state":"NY",
    "name":"Cattaraugus County"
  },
  {
    "id":36013,
    "number":10330,
    "rate":10.3,
    "state":"NY",
    "name":"Chautauqua County"
  },
  {
    "id":36011,
    "number":6097,
    "rate":10,
    "state":"NY",
    "name":"Cayuga County"
  },
  {
    "id":36015,
    "number":7108,
    "rate":10.6,
    "state":"NY",
    "name":"Chemung County"
  },
  {
    "id":36017,
    "number":4117,
    "rate":10.9,
    "state":"NY",
    "name":"Chenango County"
  },
  {
    "id":36021,
    "number":4928,
    "rate":10,
    "state":"NY",
    "name":"Columbia County"
  },
  {
    "id":36019,
    "number":6167,
    "rate":9.8,
    "state":"NY",
    "name":"Clinton County"
  },
  {
    "id":36023,
    "number":3256,
    "rate":9,
    "state":"NY",
    "name":"Cortland County"
  },
  {
    "id":36025,
    "number":3714,
    "rate":10.2,
    "state":"NY",
    "name":"Delaware County"
  },
  {
    "id":36027,
    "number":20457,
    "rate":9.2,
    "state":"NY",
    "name":"Dutchess County"
  },
  {
    "id":36029,
    "number":64276,
    "rate":9.2,
    "state":"NY",
    "name":"Erie County"
  },
  {
    "id":36031,
    "number":3239,
    "rate":10.4,
    "state":"NY",
    "name":"Essex County"
  },
  {
    "id":36033,
    "number":4199,
    "rate":10.5,
    "state":"NY",
    "name":"Franklin County"
  },
  {
    "id":36035,
    "number":4392,
    "rate":10.5,
    "state":"NY",
    "name":"Fulton County"
  },
  {
    "id":36037,
    "number":4589,
    "rate":10.1,
    "state":"NY",
    "name":"Genesee County"
  },
  {
    "id":36039,
    "number":3652,
    "rate":9.5,
    "state":"NY",
    "name":"Greene County"
  },
  {
    "id":36041,
    "number":457,
    "rate":11.6,
    "state":"NY",
    "name":"Hamilton County"
  },
  {
    "id":36043,
    "number":4893,
    "rate":10,
    "state":"NY",
    "name":"Herkimer County"
  },
  {
    "id":36045,
    "number":8575,
    "rate":9.8,
    "state":"NY",
    "name":"Jefferson County"
  },
  {
    "id":36047,
    "number":198412,
    "rate":10.4,
    "state":"NY",
    "name":"Kings County"
  },
  {
    "id":36049,
    "number":2197,
    "rate":11,
    "state":"NY",
    "name":"Lewis County"
  },
  {
    "id":36051,
    "number":4988,
    "rate":10.2,
    "state":"NY",
    "name":"Livingston County"
  },
  {
    "id":36053,
    "number":5207,
    "rate":9.7,
    "state":"NY",
    "name":"Madison County"
  },
  {
    "id":36055,
    "number":54680,
    "rate":9.8,
    "state":"NY",
    "name":"Monroe County"
  },
  {
    "id":36057,
    "number":3569,
    "rate":9.6,
    "state":"NY",
    "name":"Montgomery County"
  },
  {
    "id":36059,
    "number":86437,
    "rate":8.6,
    "state":"NY",
    "name":"Nassau County"
  },
  {
    "id":36061,
    "number":86062,
    "rate":6.4,
    "state":"NY",
    "name":"New York County"
  },
  {
    "id":36063,
    "number":16964,
    "rate":10.3,
    "state":"NY",
    "name":"Niagara County"
  },
  {
    "id":36065,
    "number":17418,
    "rate":9.9,
    "state":"NY",
    "name":"Oneida County"
  },
  {
    "id":36067,
    "number":36195,
    "rate":10.4,
    "state":"NY",
    "name":"Onondaga County"
  },
  {
    "id":36069,
    "number":6550,
    "rate":8,
    "state":"NY",
    "name":"Ontario County"
  },
  {
    "id":36071,
    "number":27948,
    "rate":10.6,
    "state":"NY",
    "name":"Orange County"
  },
  {
    "id":36073,
    "number":3466,
    "rate":10.7,
    "state":"NY",
    "name":"Orleans County"
  },
  {
    "id":36075,
    "number":8471,
    "rate":9.4,
    "state":"NY",
    "name":"Oswego County"
  },
  {
    "id":36077,
    "number":5188,
    "rate":11,
    "state":"NY",
    "name":"Otsego County"
  },
  {
    "id":36079,
    "number":6691,
    "rate":8.9,
    "state":"NY",
    "name":"Putnam County"
  },
  {
    "id":36081,
    "number":191472,
    "rate":10.9,
    "state":"NY",
    "name":"Queens County"
  },
  {
    "id":36083,
    "number":11437,
    "rate":9.4,
    "state":"NY",
    "name":"Rensselaer County"
  },
  {
    "id":36085,
    "number":34392,
    "rate":9.8,
    "state":"NY",
    "name":"Richmond County"
  },
  {
    "id":36087,
    "number":24283,
    "rate":11,
    "state":"NY",
    "name":"Rockland County"
  },
  {
    "id":36091,
    "number":14177,
    "rate":8.4,
    "state":"NY",
    "name":"Saratoga County"
  },
  {
    "id":36093,
    "number":12457,
    "rate":10.7,
    "state":"NY",
    "name":"Schenectady County"
  },
  {
    "id":36095,
    "number":2366,
    "rate":9.6,
    "state":"NY",
    "name":"Schoharie County"
  },
  {
    "id":36097,
    "number":1534,
    "rate":10.7,
    "state":"NY",
    "name":"Schuyler County"
  },
  {
    "id":36099,
    "number":2780,
    "rate":10.2,
    "state":"NY",
    "name":"Seneca County"
  },
  {
    "id":36089,
    "number":9264,
    "rate":11.1,
    "state":"NY",
    "name":"St. Lawrence County"
  },
  {
    "id":36101,
    "number":8019,
    "rate":10.8,
    "state":"NY",
    "name":"Steuben County"
  },
  {
    "id":36103,
    "number":91800,
    "rate":8.3,
    "state":"NY",
    "name":"Suffolk County"
  },
  {
    "id":36107,
    "number":3821,
    "rate":10.1,
    "state":"NY",
    "name":"Tioga County"
  },
  {
    "id":36105,
    "number":6332,
    "rate":10.9,
    "state":"NY",
    "name":"Sullivan County"
  },
  {
    "id":36109,
    "number":6166,
    "rate":8,
    "state":"NY",
    "name":"Tompkins County"
  },
  {
    "id":36111,
    "number":14487,
    "rate":10.2,
    "state":"NY",
    "name":"Ulster County"
  },
  {
    "id":36113,
    "number":5228,
    "rate":10.2,
    "state":"NY",
    "name":"Warren County"
  },
  {
    "id":36115,
    "number":4765,
    "rate":9.7,
    "state":"NY",
    "name":"Washington County"
  },
  {
    "id":36117,
    "number":6806,
    "rate":9.8,
    "state":"NY",
    "name":"Wayne County"
  },
  {
    "id":36119,
    "number":61590,
    "rate":8.7,
    "state":"NY",
    "name":"Westchester County"
  },
  {
    "id":36121,
    "number":2687,
    "rate":8.2,
    "state":"NY",
    "name":"Wyoming County"
  },
  {
    "id":36123,
    "number":1661,
    "rate":9,
    "state":"NY",
    "name":"Yates County"
  },
  {
    "id":39001,
    "number":2278,
    "rate":11,
    "state":"OH",
    "name":"Adams County"
  },
  {
    "id":39003,
    "number":10175,
    "rate":13.2,
    "state":"OH",
    "name":"Allen County"
  },
  {
    "id":39005,
    "number":4451,
    "rate":11.4,
    "state":"OH",
    "name":"Ashland County"
  },
  {
    "id":39007,
    "number":9849,
    "rate":13.1,
    "state":"OH",
    "name":"Ashtabula County"
  },
  {
    "id":39009,
    "number":5192,
    "rate":10.8,
    "state":"OH",
    "name":"Athens County"
  },
  {
    "id":39011,
    "number":3666,
    "rate":10.9,
    "state":"OH",
    "name":"Auglaize County"
  },
  {
    "id":39013,
    "number":8544,
    "rate":15.6,
    "state":"OH",
    "name":"Belmont County"
  },
  {
    "id":39015,
    "number":4356,
    "rate":13.3,
    "state":"OH",
    "name":"Brown County"
  },
  {
    "id":39017,
    "number":30470,
    "rate":11.4,
    "state":"OH",
    "name":"Butler County"
  },
  {
    "id":39019,
    "number":2825,
    "rate":13.1,
    "state":"OH",
    "name":"Carroll County"
  },
  {
    "id":39021,
    "number":3378,
    "rate":11.6,
    "state":"OH",
    "name":"Champaign County"
  },
  {
    "id":39023,
    "number":13333,
    "rate":13.2,
    "state":"OH",
    "name":"Clark County"
  },
  {
    "id":39025,
    "number":16530,
    "rate":11.4,
    "state":"OH",
    "name":"Clermont County"
  },
  {
    "id":39027,
    "number":3366,
    "rate":11,
    "state":"OH",
    "name":"Clinton County"
  },
  {
    "id":39029,
    "number":9005,
    "rate":11,
    "state":"OH",
    "name":"Columbiana County"
  },
  {
    "id":39031,
    "number":3796,
    "rate":13.9,
    "state":"OH",
    "name":"Coshocton County"
  },
  {
    "id":39033,
    "number":4219,
    "rate":13.1,
    "state":"OH",
    "name":"Crawford County"
  },
  {
    "id":39035,
    "number":108724,
    "rate":11.4,
    "state":"OH",
    "name":"Cuyahoga County"
  },
  {
    "id":39037,
    "number":4838,
    "rate":12.6,
    "state":"OH",
    "name":"Darke County"
  },
  {
    "id":39039,
    "number":3206,
    "rate":11.3,
    "state":"OH",
    "name":"Delaware County"
  },
  {
    "id":39041,
    "number":11244,
    "rate":9,
    "state":"",
    "name":""
  },
  {
    "id":39043,
    "number":6389,
    "rate":11,
    "state":"OH",
    "name":"Erie County"
  },
  {
    "id":39045,
    "number":11073,
    "rate":10.4,
    "state":"OH",
    "name":"Fairfield County"
  },
  {
    "id":39047,
    "number":2724,
    "rate":12.8,
    "state":"OH",
    "name":"Fayette County"
  },
  {
    "id":39049,
    "number":82651,
    "rate":9.4,
    "state":"OH",
    "name":"Franklin County"
  },
  {
    "id":39051,
    "number":3592,
    "rate":11.6,
    "state":"OH",
    "name":"Fulton County"
  },
  {
    "id":39053,
    "number":2983,
    "rate":13.1,
    "state":"OH",
    "name":"Gallia County"
  },
  {
    "id":39055,
    "number":7319,
    "rate":10.8,
    "state":"OH",
    "name":"Geauga County"
  },
  {
    "id":39057,
    "number":13204,
    "rate":10.8,
    "state":"OH",
    "name":"Greene County"
  },
  {
    "id":39059,
    "number":4054,
    "rate":13.7,
    "state":"OH",
    "name":"Guernsey County"
  },
  {
    "id":39061,
    "number":66588,
    "rate":11.2,
    "state":"OH",
    "name":"Hamilton County"
  },
  {
    "id":39063,
    "number":6326,
    "rate":11.3,
    "state":"OH",
    "name":"Hancock County"
  },
  {
    "id":39065,
    "number":2252,
    "rate":9.8,
    "state":"OH",
    "name":"Hardin County"
  },
  {
    "id":39067,
    "number":1564,
    "rate":13,
    "state":"OH",
    "name":"Harrison County"
  },
  {
    "id":39069,
    "number":2254,
    "rate":10.9,
    "state":"OH",
    "name":"Henry County"
  },
  {
    "id":39071,
    "number":3538,
    "rate":11.2,
    "state":"OH",
    "name":"Highland County"
  },
  {
    "id":39073,
    "number":2890,
    "rate":13.2,
    "state":"OH",
    "name":"Hocking County"
  },
  {
    "id":39075,
    "number":2665,
    "rate":9.7,
    "state":"OH",
    "name":"Holmes County"
  },
  {
    "id":39077,
    "number":4772,
    "rate":11.2,
    "state":"OH",
    "name":"Huron County"
  },
  {
    "id":39079,
    "number":3505,
    "rate":14.5,
    "state":"OH",
    "name":"Jackson County"
  },
  {
    "id":39081,
    "number":8296,
    "rate":15.7,
    "state":"OH",
    "name":"Jefferson County"
  },
  {
    "id":39083,
    "number":4583,
    "rate":10.4,
    "state":"OH",
    "name":"Knox County"
  },
  {
    "id":39085,
    "number":18885,
    "rate":10.8,
    "state":"OH",
    "name":"Lake County"
  },
  {
    "id":39087,
    "number":6657,
    "rate":14.3,
    "state":"OH",
    "name":"Lawrence County"
  },
  {
    "id":39089,
    "number":13525,
    "rate":11,
    "state":"OH",
    "name":"Licking County"
  },
  {
    "id":39091,
    "number":4443,
    "rate":13.4,
    "state":"OH",
    "name":"Logan County"
  },
  {
    "id":39093,
    "number":25572,
    "rate":11.5,
    "state":"OH",
    "name":"Lorain County"
  },
  {
    "id":39095,
    "number":36739,
    "rate":11.4,
    "state":"OH",
    "name":"Lucas County"
  },
  {
    "id":39097,
    "number":3155,
    "rate":9.7,
    "state":"OH",
    "name":"Madison County"
  },
  {
    "id":39099,
    "number":22292,
    "rate":12.3,
    "state":"OH",
    "name":"Mahoning County"
  },
  {
    "id":39101,
    "number":6334,
    "rate":12.5,
    "state":"OH",
    "name":"Marion County"
  },
  {
    "id":39103,
    "number":12708,
    "rate":10,
    "state":"OH",
    "name":"Medina County"
  },
  {
    "id":39105,
    "number":2839,
    "rate":15.9,
    "state":"OH",
    "name":"Meigs County"
  },
  {
    "id":39107,
    "number":3130,
    "rate":10.7,
    "state":"OH",
    "name":"Mercer County"
  },
  {
    "id":39109,
    "number":8184,
    "rate":10.7,
    "state":"OH",
    "name":"Miami County"
  },
  {
    "id":39111,
    "number":1646,
    "rate":14.6,
    "state":"OH",
    "name":"Monroe County"
  },
  {
    "id":39113,
    "number":51460,
    "rate":12.8,
    "state":"OH",
    "name":"Montgomery County"
  },
  {
    "id":39115,
    "number":1623,
    "rate":14.5,
    "state":"OH",
    "name":"Morgan County"
  },
  {
    "id":39117,
    "number":3194,
    "rate":12.6,
    "state":"OH",
    "name":"Morrow County"
  },
  {
    "id":39119,
    "number":7808,
    "rate":12.3,
    "state":"OH",
    "name":"Muskingum County"
  },
  {
    "id":39121,
    "number":1659,
    "rate":14.4,
    "state":"OH",
    "name":"Noble County"
  },
  {
    "id":39123,
    "number":3666,
    "rate":11.4,
    "state":"OH",
    "name":"Ottawa County"
  },
  {
    "id":39125,
    "number":1623,
    "rate":11.5,
    "state":"OH",
    "name":"Paulding County"
  },
  {
    "id":39127,
    "number":3124,
    "rate":12,
    "state":"OH",
    "name":"Perry County"
  },
  {
    "id":39129,
    "number":4655,
    "rate":11.1,
    "state":"OH",
    "name":"Pickaway County"
  },
  {
    "id":39131,
    "number":2934,
    "rate":14,
    "state":"OH",
    "name":"Pike County"
  },
  {
    "id":39133,
    "number":11240,
    "rate":9.2,
    "state":"OH",
    "name":"Portage County"
  },
  {
    "id":39135,
    "number":3465,
    "rate":11.2,
    "state":"OH",
    "name":"Preble County"
  },
  {
    "id":39137,
    "number":2577,
    "rate":10.5,
    "state":"OH",
    "name":"Putnam County"
  },
  {
    "id":39139,
    "number":11599,
    "rate":12.5,
    "state":"OH",
    "name":"Richland County"
  },
  {
    "id":39141,
    "number":7677,
    "rate":13.1,
    "state":"OH",
    "name":"Ross County"
  },
  {
    "id":39143,
    "number":5354,
    "rate":12,
    "state":"OH",
    "name":"Sandusky County"
  },
  {
    "id":39145,
    "number":7777,
    "rate":13.2,
    "state":"OH",
    "name":"Scioto County"
  },
  {
    "id":39147,
    "number":5425,
    "rate":13.2,
    "state":"OH",
    "name":"Seneca County"
  },
  {
    "id":39149,
    "number":3685,
    "rate":10.6,
    "state":"OH",
    "name":"Shelby County"
  },
  {
    "id":39151,
    "number":35030,
    "rate":12.4,
    "state":"OH",
    "name":"Stark County"
  },
  {
    "id":39153,
    "number":40041,
    "rate":9.8,
    "state":"OH",
    "name":"Summit County"
  },
  {
    "id":39155,
    "number":20478,
    "rate":12.9,
    "state":"OH",
    "name":"Trumbull County"
  },
  {
    "id":39157,
    "number":7293,
    "rate":10.6,
    "state":"OH",
    "name":"Tuscarawas County"
  },
  {
    "id":39159,
    "number":3890,
    "rate":10.4,
    "state":"OH",
    "name":"Union County"
  },
  {
    "id":39161,
    "number":2969,
    "rate":14.1,
    "state":"OH",
    "name":"Van Wert County"
  },
  {
    "id":39163,
    "number":1364,
    "rate":13.9,
    "state":"OH",
    "name":"Vinton County"
  },
  {
    "id":39165,
    "number":14223,
    "rate":9.2,
    "state":"OH",
    "name":"Warren County"
  },
  {
    "id":39167,
    "number":6057,
    "rate":12.8,
    "state":"OH",
    "name":"Washington County"
  },
  {
    "id":39169,
    "number":9377,
    "rate":11.3,
    "state":"OH",
    "name":"Wayne County"
  },
  {
    "id":39171,
    "number":3713,
    "rate":13.3,
    "state":"OH",
    "name":"Williams County"
  },
  {
    "id":39173,
    "number":11016,
    "rate":11.6,
    "state":"OH",
    "name":"Wood County"
  },
  {
    "id":39175,
    "number":2068,
    "rate":12.4,
    "state":"OH",
    "name":"Wyandot County"
  },
  {
    "id":40001,
    "number":2239,
    "rate":14.3,
    "state":"OK",
    "name":"Adair County"
  },
  {
    "id":40003,
    "number":603,
    "rate":13.3,
    "state":"OK",
    "name":"Alfalfa County"
  },
  {
    "id":40005,
    "number":1309,
    "rate":12.5,
    "state":"OK",
    "name":"Atoka County"
  },
  {
    "id":40007,
    "number":528,
    "rate":13,
    "state":"OK",
    "name":"Beaver County"
  },
  {
    "id":40009,
    "number":1558,
    "rate":9.2,
    "state":"OK",
    "name":"Beckham County"
  },
  {
    "id":40011,
    "number":1005,
    "rate":14.2,
    "state":"OK",
    "name":"Blaine County"
  },
  {
    "id":40013,
    "number":3798,
    "rate":11.8,
    "state":"OK",
    "name":"Bryan County"
  },
  {
    "id":40015,
    "number":2478,
    "rate":11.6,
    "state":"OK",
    "name":"Caddo County"
  },
  {
    "id":40017,
    "number":9855,
    "rate":11.3,
    "state":"OK",
    "name":"Canadian County"
  },
  {
    "id":40019,
    "number":4567,
    "rate":13.1,
    "state":"OK",
    "name":"Carter County"
  },
  {
    "id":40021,
    "number":4657,
    "rate":13.4,
    "state":"OK",
    "name":"Cherokee County"
  },
  {
    "id":40023,
    "number":1798,
    "rate":16,
    "state":"OK",
    "name":"Choctaw County"
  },
  {
    "id":40025,
    "number":222,
    "rate":12.5,
    "state":"OK",
    "name":"Cimarron County"
  },
  {
    "id":40027,
    "number":19965,
    "rate":10.2,
    "state":"OK",
    "name":"Cleveland County"
  },
  {
    "id":40029,
    "number":551,
    "rate":12.8,
    "state":"OK",
    "name":"Coal County"
  },
  {
    "id":40031,
    "number":10410,
    "rate":11.5,
    "state":"OK",
    "name":"Comanche County"
  },
  {
    "id":40033,
    "number":636,
    "rate":13.9,
    "state":"OK",
    "name":"Cotton County"
  },
  {
    "id":40035,
    "number":1506,
    "rate":13.5,
    "state":"OK",
    "name":"Craig County"
  },
  {
    "id":40037,
    "number":6589,
    "rate":12.7,
    "state":"OK",
    "name":"Creek County"
  },
  {
    "id":40039,
    "number":2291,
    "rate":11.1,
    "state":"OK",
    "name":"Custer County"
  },
  {
    "id":40041,
    "number":4885,
    "rate":15.5,
    "state":"OK",
    "name":"Delaware County"
  },
  {
    "id":40043,
    "number":478,
    "rate":13.7,
    "state":"OK",
    "name":"Dewey County"
  },
  {
    "id":40045,
    "number":381,
    "rate":12.7,
    "state":"OK",
    "name":"Ellis County"
  },
  {
    "id":40047,
    "number":4632,
    "rate":10.4,
    "state":"OK",
    "name":"Garfield County"
  },
  {
    "id":40049,
    "number":2692,
    "rate":13.5,
    "state":"OK",
    "name":"Garvin County"
  },
  {
    "id":40051,
    "number":4397,
    "rate":11.4,
    "state":"OK",
    "name":"Grady County"
  },
  {
    "id":40053,
    "number":444,
    "rate":13.2,
    "state":"OK",
    "name":"Grant County"
  },
  {
    "id":40055,
    "number":609,
    "rate":12.6,
    "state":"OK",
    "name":"Greer County"
  },
  {
    "id":40057,
    "number":277,
    "rate":13.3,
    "state":"OK",
    "name":"Harmon County"
  },
  {
    "id":40059,
    "number":316,
    "rate":11.7,
    "state":"OK",
    "name":"Harper County"
  },
  {
    "id":40061,
    "number":1537,
    "rate":16.3,
    "state":"OK",
    "name":"Haskell County"
  },
  {
    "id":40063,
    "number":1539,
    "rate":14.6,
    "state":"OK",
    "name":"Hughes County"
  },
  {
    "id":40065,
    "number":2261,
    "rate":12.1,
    "state":"OK",
    "name":"Jackson County"
  },
  {
    "id":40067,
    "number":594,
    "rate":12.4,
    "state":"OK",
    "name":"Jefferson County"
  },
  {
    "id":40069,
    "number":1027,
    "rate":12.8,
    "state":"OK",
    "name":"Johnston County"
  },
  {
    "id":40071,
    "number":4136,
    "rate":12.5,
    "state":"OK",
    "name":"Kay County"
  },
  {
    "id":40073,
    "number":1195,
    "rate":11.2,
    "state":"OK",
    "name":"Kingfisher County"
  },
  {
    "id":40075,
    "number":1031,
    "rate":14.8,
    "state":"OK",
    "name":"Kiowa County"
  },
  {
    "id":40077,
    "number":1145,
    "rate":14.2,
    "state":"OK",
    "name":"Latimer County"
  },
  {
    "id":40079,
    "number":5444,
    "rate":14.9,
    "state":"OK",
    "name":"Le Flore County"
  },
  {
    "id":40081,
    "number":3282,
    "rate":13.2,
    "state":"OK",
    "name":"Lincoln County"
  },
  {
    "id":40083,
    "number":4232,
    "rate":13.5,
    "state":"OK",
    "name":"Logan County"
  },
  {
    "id":40085,
    "number":936,
    "rate":13.4,
    "state":"OK",
    "name":"Love County"
  },
  {
    "id":40093,
    "number":675,
    "rate":12,
    "state":"OK",
    "name":"Major County"
  },
  {
    "id":40095,
    "number":1476,
    "rate":12.6,
    "state":"OK",
    "name":"Marshall County"
  },
  {
    "id":40087,
    "number":2810,
    "rate":11.1,
    "state":"OK",
    "name":"McClain County"
  },
  {
    "id":40097,
    "number":4076,
    "rate":13.7,
    "state":"OK",
    "name":"Mayes County"
  },
  {
    "id":40089,
    "number":3134,
    "rate":13.2,
    "state":"OK",
    "name":"McCurtain County"
  },
  {
    "id":40091,
    "number":2290,
    "rate":14.4,
    "state":"OK",
    "name":"McIntosh County"
  },
  {
    "id":40099,
    "number":1324,
    "rate":13,
    "state":"OK",
    "name":"Murray County"
  },
  {
    "id":40101,
    "number":7134,
    "rate":13.9,
    "state":"OK",
    "name":"Muskogee County"
  },
  {
    "id":40103,
    "number":1092,
    "rate":12.9,
    "state":"OK",
    "name":"Noble County"
  },
  {
    "id":40105,
    "number":1104,
    "rate":14,
    "state":"OK",
    "name":"Nowata County"
  },
  {
    "id":40107,
    "number":1118,
    "rate":12.3,
    "state":"OK",
    "name":"Okfuskee County"
  },
  {
    "id":40109,
    "number":55737,
    "rate":10.4,
    "state":"OK",
    "name":"Oklahoma County"
  },
  {
    "id":40111,
    "number":3538,
    "rate":12.3,
    "state":"OK",
    "name":"Okmulgee County"
  },
  {
    "id":40113,
    "number":4914,
    "rate":13.8,
    "state":"OK",
    "name":"Osage County"
  },
  {
    "id":40115,
    "number":3133,
    "rate":13.5,
    "state":"OK",
    "name":"Ottawa County"
  },
  {
    "id":40117,
    "number":1660,
    "rate":13.7,
    "state":"OK",
    "name":"Pawnee County"
  },
  {
    "id":40119,
    "number":4131,
    "rate":7.1,
    "state":"OK",
    "name":"Payne County"
  },
  {
    "id":40121,
    "number":4362,
    "rate":12.8,
    "state":"OK",
    "name":"Pittsburg County"
  },
  {
    "id":40123,
    "number":2837,
    "rate":10.3,
    "state":"OK",
    "name":"Pontotoc County"
  },
  {
    "id":40125,
    "number":7111,
    "rate":13.9,
    "state":"OK",
    "name":"Pottawatomie County"
  },
  {
    "id":40127,
    "number":1243,
    "rate":14.6,
    "state":"OK",
    "name":"Pushmataha County"
  },
  {
    "id":40129,
    "number":334,
    "rate":12.3,
    "state":"OK",
    "name":"Roger Mills County"
  },
  {
    "id":40131,
    "number":6743,
    "rate":10.6,
    "state":"OK",
    "name":"Rogers County"
  },
  {
    "id":40133,
    "number":2406,
    "rate":13.2,
    "state":"OK",
    "name":"Seminole County"
  },
  {
    "id":40135,
    "number":3939,
    "rate":13,
    "state":"OK",
    "name":"Sequoyah County"
  },
  {
    "id":40137,
    "number":4353,
    "rate":13.1,
    "state":"OK",
    "name":"Stephens County"
  },
  {
    "id":40139,
    "number":1320,
    "rate":8.9,
    "state":"OK",
    "name":"Texas County"
  },
  {
    "id":40141,
    "number":783,
    "rate":13.8,
    "state":"OK",
    "name":"Tillman County"
  },
  {
    "id":40143,
    "number":46559,
    "rate":10.5,
    "state":"OK",
    "name":"Tulsa County"
  },
  {
    "id":40145,
    "number":6687,
    "rate":12.4,
    "state":"OK",
    "name":"Wagoner County"
  },
  {
    "id":40147,
    "number":5280,
    "rate":13.9,
    "state":"OK",
    "name":"Washington County"
  },
  {
    "id":40149,
    "number":1011,
    "rate":12.1,
    "state":"OK",
    "name":"Washita County"
  },
  {
    "id":40151,
    "number":734,
    "rate":10.9,
    "state":"OK",
    "name":"Woods County"
  },
  {
    "id":40153,
    "number":1713,
    "rate":11.4,
    "state":"OK",
    "name":"Woodward County"
  },
  {
    "id":41001,
    "number":1465,
    "rate":11.8,
    "state":"OR",
    "name":"Baker County"
  },
  {
    "id":41003,
    "number":4652,
    "rate":7,
    "state":"OR",
    "name":"Benton County"
  },
  {
    "id":41005,
    "number":26705,
    "rate":9.3,
    "state":"OR",
    "name":"Clackamas County"
  },
  {
    "id":41007,
    "number":3087,
    "rate":10.6,
    "state":"OR",
    "name":"Clatsop County"
  },
  {
    "id":41009,
    "number":3806,
    "rate":10.3,
    "state":"OR",
    "name":"Columbia County"
  },
  {
    "id":41011,
    "number":5368,
    "rate":10.8,
    "state":"OR",
    "name":"Coos County"
  },
  {
    "id":41013,
    "number":1855,
    "rate":11.5,
    "state":"OR",
    "name":"Crook County"
  },
  {
    "id":41015,
    "number":2112,
    "rate":11.5,
    "state":"OR",
    "name":"Curry County"
  },
  {
    "id":41017,
    "number":10336,
    "rate":8.4,
    "state":"OR",
    "name":"Deschutes County"
  },
  {
    "id":41019,
    "number":10140,
    "rate":12.1,
    "state":"OR",
    "name":"Douglas County"
  },
  {
    "id":41021,
    "number":171,
    "rate":11.1,
    "state":"OR",
    "name":"Gilliam County"
  },
  {
    "id":41023,
    "number":666,
    "rate":11.5,
    "state":"OR",
    "name":"Grant County"
  },
  {
    "id":41025,
    "number":638,
    "rate":11.6,
    "state":"OR",
    "name":"Harney County"
  },
  {
    "id":41027,
    "number":1357,
    "rate":8.3,
    "state":"OR",
    "name":"Hood River County"
  },
  {
    "id":41029,
    "number":15490,
    "rate":9.8,
    "state":"OR",
    "name":"Jackson County"
  },
  {
    "id":41031,
    "number":1538,
    "rate":10.1,
    "state":"OR",
    "name":"Jefferson County"
  },
  {
    "id":41033,
    "number":6178,
    "rate":9.6,
    "state":"OR",
    "name":"Josephine County"
  },
  {
    "id":41035,
    "number":5240,
    "rate":10.5,
    "state":"OR",
    "name":"Klamath County"
  },
  {
    "id":41037,
    "number":661,
    "rate":10.7,
    "state":"OR",
    "name":"Lake County"
  },
  {
    "id":41039,
    "number":23029,
    "rate":8.4,
    "state":"OR",
    "name":"Lane County"
  },
  {
    "id":41041,
    "number":5204,
    "rate":13.9,
    "state":"OR",
    "name":"Lincoln County"
  },
  {
    "id":41043,
    "number":8789,
    "rate":10,
    "state":"OR",
    "name":"Linn County"
  },
  {
    "id":41045,
    "number":2057,
    "rate":9.3,
    "state":"OR",
    "name":"Malheur County"
  },
  {
    "id":41047,
    "number":22598,
    "rate":9.9,
    "state":"OR",
    "name":"Marion County"
  },
  {
    "id":41049,
    "number":758,
    "rate":9.7,
    "state":"OR",
    "name":"Morrow County"
  },
  {
    "id":41051,
    "number":44624,
    "rate":7.6,
    "state":"OR",
    "name":"Multnomah County"
  },
  {
    "id":41053,
    "number":5656,
    "rate":10.2,
    "state":"OR",
    "name":"Polk County"
  },
  {
    "id":41055,
    "number":153,
    "rate":11.2,
    "state":"OR",
    "name":"Sherman County"
  },
  {
    "id":41057,
    "number":1928,
    "rate":9.7,
    "state":"OR",
    "name":"Tillamook County"
  },
  {
    "id":41059,
    "number":5760,
    "rate":10.5,
    "state":"OR",
    "name":"Umatilla County"
  },
  {
    "id":41061,
    "number":1835,
    "rate":9.6,
    "state":"OR",
    "name":"Union County"
  },
  {
    "id":41063,
    "number":635,
    "rate":11.6,
    "state":"OR",
    "name":"Wallowa County"
  },
  {
    "id":41065,
    "number":2023,
    "rate":10.6,
    "state":"OR",
    "name":"Wasco County"
  },
  {
    "id":41067,
    "number":32645,
    "rate":8.2,
    "state":"OR",
    "name":"Washington County"
  },
  {
    "id":41069,
    "number":140,
    "rate":12.2,
    "state":"OR",
    "name":"Wheeler County"
  },
  {
    "id":41071,
    "number":6777,
    "rate":9.3,
    "state":"OR",
    "name":"Yamhill County"
  },
  {
    "id":42001,
    "number":8891,
    "rate":11.6,
    "state":"PA",
    "name":"Adams County"
  },
  {
    "id":42003,
    "number":86177,
    "rate":9,
    "state":"PA",
    "name":"Allegheny County"
  },
  {
    "id":42005,
    "number":6390,
    "rate":12,
    "state":"PA",
    "name":"Armstrong County"
  },
  {
    "id":42007,
    "number":14456,
    "rate":10.9,
    "state":"PA",
    "name":"Beaver County"
  },
  {
    "id":42009,
    "number":4789,
    "rate":12.6,
    "state":"PA",
    "name":"Bedford County"
  },
  {
    "id":42011,
    "number":31896,
    "rate":10.5,
    "state":"PA",
    "name":"Berks County"
  },
  {
    "id":42013,
    "number":10302,
    "rate":10.6,
    "state":"PA",
    "name":"Blair County"
  },
  {
    "id":42015,
    "number":5089,
    "rate":10.7,
    "state":"PA",
    "name":"Bradford County"
  },
  {
    "id":42019,
    "number":12778,
    "rate":9.2,
    "state":"PA",
    "name":"Butler County"
  },
  {
    "id":42021,
    "number":13520,
    "rate":12.3,
    "state":"PA",
    "name":"Cambria County"
  },
  {
    "id":42017,
    "number":44056,
    "rate":9.3,
    "state":"PA",
    "name":"Bucks County"
  },
  {
    "id":42023,
    "number":450,
    "rate":11.4,
    "state":"PA",
    "name":"Cameron County"
  },
  {
    "id":42025,
    "number":5076,
    "rate":10,
    "state":"PA",
    "name":"Carbon County"
  },
  {
    "id":42027,
    "number":9184,
    "rate":7.7,
    "state":"PA",
    "name":"Centre County"
  },
  {
    "id":42029,
    "number":28910,
    "rate":7.8,
    "state":"PA",
    "name":"Chester County"
  },
  {
    "id":42031,
    "number":3361,
    "rate":11.1,
    "state":"PA",
    "name":"Clarion County"
  },
  {
    "id":42033,
    "number":7866,
    "rate":12.3,
    "state":"PA",
    "name":"Clearfield County"
  },
  {
    "id":42035,
    "number":2996,
    "rate":10.1,
    "state":"PA",
    "name":"Clinton County"
  },
  {
    "id":42037,
    "number":6059,
    "rate":11.9,
    "state":"PA",
    "name":"Columbia County"
  },
  {
    "id":42039,
    "number":7680,
    "rate":11.7,
    "state":"PA",
    "name":"Crawford County"
  },
  {
    "id":42041,
    "number":16949,
    "rate":9.3,
    "state":"PA",
    "name":"Cumberland County"
  },
  {
    "id":42043,
    "number":23531,
    "rate":11.6,
    "state":"PA",
    "name":"Dauphin County"
  },
  {
    "id":42045,
    "number":35697,
    "rate":8.6,
    "state":"PA",
    "name":"Delaware County"
  },
  {
    "id":42047,
    "number":2669,
    "rate":10.9,
    "state":"PA",
    "name":"Elk County"
  },
  {
    "id":42049,
    "number":24249,
    "rate":11.6,
    "state":"PA",
    "name":"Erie County"
  },
  {
    "id":42051,
    "number":15639,
    "rate":14.8,
    "state":"PA",
    "name":"Fayette County"
  },
  {
    "id":42053,
    "number":762,
    "rate":11.2,
    "state":"PA",
    "name":"Forest County"
  },
  {
    "id":42055,
    "number":11692,
    "rate":10.4,
    "state":"PA",
    "name":"Franklin County"
  },
  {
    "id":42057,
    "number":1275,
    "rate":11.4,
    "state":"PA",
    "name":"Fulton County"
  },
  {
    "id":42059,
    "number":3295,
    "rate":11.1,
    "state":"PA",
    "name":"Greene County"
  },
  {
    "id":42061,
    "number":3849,
    "rate":10.8,
    "state":"PA",
    "name":"Huntingdon County"
  },
  {
    "id":42063,
    "number":6331,
    "rate":9.4,
    "state":"PA",
    "name":"Indiana County"
  },
  {
    "id":42065,
    "number":3967,
    "rate":11.6,
    "state":"PA",
    "name":"Jefferson County"
  },
  {
    "id":42067,
    "number":2355,
    "rate":12.6,
    "state":"PA",
    "name":"Juniata County"
  },
  {
    "id":42069,
    "number":19356,
    "rate":11.7,
    "state":"PA",
    "name":"Lackawanna County"
  },
  {
    "id":42071,
    "number":34177,
    "rate":8.9,
    "state":"PA",
    "name":"Lancaster County"
  },
  {
    "id":42073,
    "number":8121,
    "rate":11.8,
    "state":"PA",
    "name":"Lawrence County"
  },
  {
    "id":42075,
    "number":10800,
    "rate":10.7,
    "state":"PA",
    "name":"Lebanon County"
  },
  {
    "id":42077,
    "number":28014,
    "rate":10.6,
    "state":"PA",
    "name":"Lehigh County"
  },
  {
    "id":42079,
    "number":29102,
    "rate":11.7,
    "state":"PA",
    "name":"Luzerne County"
  },
  {
    "id":42081,
    "number":8921,
    "rate":9.9,
    "state":"PA",
    "name":"Lycoming County"
  },
  {
    "id":42083,
    "number":2993,
    "rate":9.1,
    "state":"PA",
    "name":"McKean County"
  },
  {
    "id":42085,
    "number":10609,
    "rate":12.1,
    "state":"PA",
    "name":"Mercer County"
  },
  {
    "id":42087,
    "number":4291,
    "rate":12.2,
    "state":"PA",
    "name":"Mifflin County"
  },
  {
    "id":42089,
    "number":12747,
    "rate":10.2,
    "state":"PA",
    "name":"Monroe County"
  },
  {
    "id":42091,
    "number":44112,
    "rate":7.3,
    "state":"PA",
    "name":"Montgomery County"
  },
  {
    "id":42093,
    "number":1718,
    "rate":12.1,
    "state":"PA",
    "name":"Montour County"
  },
  {
    "id":42095,
    "number":23351,
    "rate":10.3,
    "state":"PA",
    "name":"Northampton County"
  },
  {
    "id":42097,
    "number":9084,
    "rate":12.3,
    "state":"PA",
    "name":"Northumberland County"
  },
  {
    "id":42099,
    "number":3501,
    "rate":10.2,
    "state":"PA",
    "name":"Perry County"
  },
  {
    "id":42101,
    "number":130938,
    "rate":11.4,
    "state":"PA",
    "name":"Philadelphia County"
  },
  {
    "id":42103,
    "number":4547,
    "rate":10.5,
    "state":"PA",
    "name":"Pike County"
  },
  {
    "id":42105,
    "number":1551,
    "rate":11.6,
    "state":"PA",
    "name":"Potter County"
  },
  {
    "id":42107,
    "number":12906,
    "rate":11.2,
    "state":"PA",
    "name":"Schuylkill County"
  },
  {
    "id":42109,
    "number":2950,
    "rate":10,
    "state":"PA",
    "name":"Snyder County"
  },
  {
    "id":42113,
    "number":677,
    "rate":12.8,
    "state":"PA",
    "name":"Sullivan County"
  },
  {
    "id":42111,
    "number":7315,
    "rate":12,
    "state":"PA",
    "name":"Somerset County"
  },
  {
    "id":42115,
    "number":3459,
    "rate":10.5,
    "state":"PA",
    "name":"Susquehanna County"
  },
  {
    "id":42117,
    "number":3613,
    "rate":11.1,
    "state":"PA",
    "name":"Tioga County"
  },
  {
    "id":42119,
    "number":3482,
    "rate":10,
    "state":"PA",
    "name":"Union County"
  },
  {
    "id":42121,
    "number":5247,
    "rate":12.5,
    "state":"PA",
    "name":"Venango County"
  },
  {
    "id":42123,
    "number":3782,
    "rate":11.8,
    "state":"PA",
    "name":"Warren County"
  },
  {
    "id":42125,
    "number":19626,
    "rate":12.2,
    "state":"PA",
    "name":"Washington County"
  },
  {
    "id":42127,
    "number":4895,
    "rate":11.9,
    "state":"PA",
    "name":"Wayne County"
  },
  {
    "id":42129,
    "number":31818,
    "rate":11.2,
    "state":"PA",
    "name":"Westmoreland County"
  },
  {
    "id":42131,
    "number":2222,
    "rate":10.3,
    "state":"PA",
    "name":"Wyoming County"
  },
  {
    "id":42133,
    "number":32540,
    "rate":10,
    "state":"PA",
    "name":"York County"
  },
  {
    "id":72001,
    "number":2893,
    "rate":20.7,
    "state":"PR",
    "name":"Adjuntas"
  },
  {
    "id":72003,
    "number":4736,
    "rate":15.3,
    "state":"PR",
    "name":"Aguada Municipio"
  },
  {
    "id":72005,
    "number":6677,
    "rate":15.1,
    "state":"PR",
    "name":"Aguadilla Municipio"
  },
  {
    "id":72007,
    "number":3351,
    "rate":16.2,
    "state":"PR",
    "name":"Aguas Buenas Municipio"
  },
  {
    "id":72009,
    "number":2690,
    "rate":14.3,
    "state":"PR",
    "name":"Aibonito Municipio"
  },
  {
    "id":72011,
    "number":3689,
    "rate":17.1,
    "state":"PR",
    "name":"A�asco Municipio"
  },
  {
    "id":72013,
    "number":10980,
    "rate":15.5,
    "state":"PR",
    "name":"Arecibo Municipio"
  },
  {
    "id":72015,
    "number":2521,
    "rate":18.2,
    "state":"PR",
    "name":"Arroyo Municipio"
  },
  {
    "id":72017,
    "number":3238,
    "rate":17.7,
    "state":"PR",
    "name":"Barceloneta"
  },
  {
    "id":72019,
    "number":3031,
    "rate":14.3,
    "state":"PR",
    "name":"Barranquitas Municipio"
  },
  {
    "id":72023,
    "number":6050,
    "rate":15.9,
    "state":"PR",
    "name":"Cabo Rojo Municipio"
  },
  {
    "id":72025,
    "number":14600,
    "rate":14,
    "state":"PR",
    "name":"Caguas Municipio"
  },
  {
    "id":72027,
    "number":4179,
    "rate":16.4,
    "state":"PR",
    "name":"Camuy Municipio"
  },
  {
    "id":72029,
    "number":5580,
    "rate":16.3,
    "state":"PR",
    "name":"Canovanas"
  },
  {
    "id":72031,
    "number":20450,
    "rate":15.8,
    "state":"PR",
    "name":"Carolina"
  },
  {
    "id":72033,
    "number":3149,
    "rate":15.9,
    "state":"PR",
    "name":"Catano"
  },
  {
    "id":72035,
    "number":4925,
    "rate":13.9,
    "state":"PR",
    "name":"Cayey Municipio"
  },
  {
    "id":72037,
    "number":1749,
    "rate":18,
    "state":"PR",
    "name":"Ceiba Municipio"
  },
  {
    "id":72021,
    "number":23160,
    "rate":15.1,
    "state":"PR",
    "name":"Bayam�n Municipio"
  },
  {
    "id":72039,
    "number":2229,
    "rate":16.7,
    "state":"PR",
    "name":"Ciales Municipio"
  },
  {
    "id":72041,
    "number":4081,
    "rate":12.9,
    "state":"PR",
    "name":"Cidra Municipio"
  },
  {
    "id":72043,
    "number":4669,
    "rate":15.9,
    "state":"PR",
    "name":"Coamo Municipio"
  },
  {
    "id":72045,
    "number":2265,
    "rate":15.1,
    "state":"PR",
    "name":"Comer�o Municipio"
  },
  {
    "id":72047,
    "number":4077,
    "rate":15.4,
    "state":"PR",
    "name":"Corozal Municipio"
  },
  {
    "id":72049,
    "number":281,
    "rate":20.4,
    "state":"PR",
    "name":"Culebra Municipio"
  },
  {
    "id":72051,
    "number":4062,
    "rate":14.7,
    "state":"PR",
    "name":"Dorado Municipio"
  },
  {
    "id":72053,
    "number":4672,
    "rate":17.9,
    "state":"PR",
    "name":"Fajardo Municipio"
  },
  {
    "id":72054,
    "number":1400,
    "rate":15.3,
    "state":"PR",
    "name":"Florida Municipio"
  },
  {
    "id":72055,
    "number":2583,
    "rate":18.8,
    "state":"PR",
    "name":"Gu�nica Municipio"
  },
  {
    "id":72057,
    "number":5199,
    "rate":16.3,
    "state":"PR",
    "name":"Guayama Municipio"
  },
  {
    "id":72059,
    "number":2652,
    "rate":17.4,
    "state":"",
    "name":""
  },
  {
    "id":72061,
    "number":9274,
    "rate":12.6,
    "state":"PR",
    "name":"Guaynabo Municipio"
  },
  {
    "id":72063,
    "number":4839,
    "rate":14.3,
    "state":"PR",
    "name":"Gurabo Municipio"
  },
  {
    "id":72065,
    "number":4979,
    "rate":16,
    "state":"PR",
    "name":"Hatillo Municipio"
  },
  {
    "id":72067,
    "number":2569,
    "rate":19.5,
    "state":"PR",
    "name":"Hormigueros Municipio"
  },
  {
    "id":72069,
    "number":6710,
    "rate":15.7,
    "state":"PR",
    "name":"Humacao Municipio"
  },
  {
    "id":72071,
    "number":5538,
    "rate":16.5,
    "state":"PR",
    "name":"Isabela Municipio"
  },
  {
    "id":72073,
    "number":1794,
    "rate":15.6,
    "state":"PR",
    "name":"Jayuya Municipio"
  },
  {
    "id":72075,
    "number":5603,
    "rate":15.7,
    "state":"PR",
    "name":"Juana D�az Municipio"
  },
  {
    "id":72077,
    "number":4115,
    "rate":14.2,
    "state":"PR",
    "name":"Juncos Municipio"
  },
  {
    "id":72079,
    "number":3589,
    "rate":18.9,
    "state":"PR",
    "name":"Lajas Municipio"
  },
  {
    "id":72081,
    "number":3756,
    "rate":17.1,
    "state":"PR",
    "name":"Lares Municipio"
  },
  {
    "id":72083,
    "number":1246,
    "rate":17.8,
    "state":"PR",
    "name":"Las Mar�as Municipio"
  },
  {
    "id":72085,
    "number":4296,
    "rate":15.1,
    "state":"PR",
    "name":"Las Piedras Municipio"
  },
  {
    "id":72087,
    "number":3504,
    "rate":16.8,
    "state":"PR",
    "name":"Lo�za Municipio"
  },
  {
    "id":72089,
    "number":2477,
    "rate":17.1,
    "state":"PR",
    "name":"Luquillo Municipio"
  },
  {
    "id":72091,
    "number":6173,
    "rate":19.6,
    "state":"PR",
    "name":"Manat� Municipio"
  },
  {
    "id":72093,
    "number":816,
    "rate":18,
    "state":"PR",
    "name":"Maricao"
  },
  {
    "id":72095,
    "number":1552,
    "rate":17.5,
    "state":"PR",
    "name":"Maunabo Municipio"
  },
  {
    "id":72097,
    "number":10140,
    "rate":15.6,
    "state":"PR",
    "name":"Mayag�ez Municipio"
  },
  {
    "id":72099,
    "number":4479,
    "rate":15.6,
    "state":"PR",
    "name":"Moca Municipio"
  },
  {
    "id":72101,
    "number":3628,
    "rate":15.7,
    "state":"PR",
    "name":"Morovis Municipio"
  },
  {
    "id":72103,
    "number":3327,
    "rate":17.2,
    "state":"PR",
    "name":""
  },
  {
    "id":72105,
    "number":3481,
    "rate":15.8,
    "state":"PR",
    "name":"Naranjito Municipio"
  },
  {
    "id":72107,
    "number":2469,
    "rate":15.1,
    "state":"PR",
    "name":"Orocovis Municipio"
  },
  {
    "id":72109,
    "number":2708,
    "rate":19.4,
    "state":"PR",
    "name":"Patillas"
  },
  {
    "id":72111,
    "number":2739,
    "rate":16.6,
    "state":"PR",
    "name":"Pe�uelas Municipio"
  },
  {
    "id":72113,
    "number":18320,
    "rate":15.6,
    "state":"PR",
    "name":"Ponce Municipio"
  },
  {
    "id":72115,
    "number":3220,
    "rate":17.1,
    "state":"PR",
    "name":"Quebradillas Municipio"
  },
  {
    "id":72117,
    "number":2029,
    "rate":17.7,
    "state":"PR",
    "name":"Rinc�n Municipio"
  },
  {
    "id":72119,
    "number":5975,
    "rate":15,
    "state":"PR",
    "name":"R�o Grande Municipio"
  },
  {
    "id":72121,
    "number":3234,
    "rate":17.8,
    "state":"PR",
    "name":"Sabana Grande Municipio"
  },
  {
    "id":72123,
    "number":4007,
    "rate":18.4,
    "state":"PR",
    "name":"Salinas Municipio"
  },
  {
    "id":72125,
    "number":4381,
    "rate":16.8,
    "state":"PR",
    "name":"San Germ�n Municipio"
  },
  {
    "id":72127,
    "number":39830,
    "rate":13.7,
    "state":"PR",
    "name":"San Juan Municipio"
  },
  {
    "id":72129,
    "number":4522,
    "rate":15.1,
    "state":"PR",
    "name":"San Lorenzo Municipio"
  },
  {
    "id":72131,
    "number":5998,
    "rate":19.5,
    "state":"PR",
    "name":"San Sebasti�n Municipio"
  },
  {
    "id":72133,
    "number":2161,
    "rate":13.4,
    "state":"PR",
    "name":"Santa Isabel"
  },
  {
    "id":72135,
    "number":6995,
    "rate":13.1,
    "state":"PR",
    "name":"Toa Alta"
  },
  {
    "id":72137,
    "number":9375,
    "rate":14.6,
    "state":"PR",
    "name":"Toa Baja Municipio"
  },
  {
    "id":72139,
    "number":6958,
    "rate":12.9,
    "state":"PR",
    "name":"Trujillo Alto Municipio"
  },
  {
    "id":72141,
    "number":3691,
    "rate":15.6,
    "state":"PR",
    "name":"Utuado Municipio"
  },
  {
    "id":72143,
    "number":4583,
    "rate":16,
    "state":"PR",
    "name":"Vega Alta Municipio"
  },
  {
    "id":72145,
    "number":7107,
    "rate":16.7,
    "state":"PR",
    "name":"Vega Baja Municipio"
  },
  {
    "id":72147,
    "number":1326,
    "rate":19.2,
    "state":"PR",
    "name":"Vieques Municipio"
  },
  {
    "id":72149,
    "number":2716,
    "rate":15.2,
    "state":"PR",
    "name":"Villalba Municipio"
  },
  {
    "id":72151,
    "number":4175,
    "rate":15.4,
    "state":"PR",
    "name":"Yabucoa Municipio"
  },
  {
    "id":72153,
    "number":5159,
    "rate":17.1,
    "state":"PR",
    "name":"Yauco Municipio"
  },
  {
    "id":44001,
    "number":3239,
    "rate":8.7,
    "state":"RI",
    "name":"Bristol County"
  },
  {
    "id":44003,
    "number":12076,
    "rate":9.4,
    "state":"RI",
    "name":"Kent County"
  },
  {
    "id":44005,
    "number":5162,
    "rate":8.1,
    "state":"RI",
    "name":"Newport County"
  },
  {
    "id":44007,
    "number":44620,
    "rate":9.5,
    "state":"RI",
    "name":"Providence County"
  },
  {
    "id":44009,
    "number":8154,
    "rate":8.5,
    "state":"RI",
    "name":"Washington County"
  },
  {
    "id":45001,
    "number":2669,
    "rate":14.2,
    "state":"SC",
    "name":"Abbeville County"
  },
  {
    "id":45003,
    "number":14827,
    "rate":12.1,
    "state":"SC",
    "name":"Aiken County"
  },
  {
    "id":45005,
    "number":1325,
    "rate":17.2,
    "state":"SC",
    "name":"Allendale County"
  },
  {
    "id":45007,
    "number":17650,
    "rate":12.6,
    "state":"SC",
    "name":"Anderson County"
  },
  {
    "id":45009,
    "number":2092,
    "rate":17.9,
    "state":"SC",
    "name":"Bamberg County"
  },
  {
    "id":45011,
    "number":2501,
    "rate":15.5,
    "state":"SC",
    "name":"Barnwell County"
  },
  {
    "id":45013,
    "number":12251,
    "rate":9.5,
    "state":"SC",
    "name":"Beaufort County"
  },
  {
    "id":45015,
    "number":18513,
    "rate":13.5,
    "state":"SC",
    "name":"Berkeley County"
  },
  {
    "id":45017,
    "number":2050,
    "rate":17.8,
    "state":"SC",
    "name":"Calhoun County"
  },
  {
    "id":45019,
    "number":31090,
    "rate":11.1,
    "state":"SC",
    "name":"Charleston County"
  },
  {
    "id":45021,
    "number":5740,
    "rate":14.1,
    "state":"SC",
    "name":"Cherokee County"
  },
  {
    "id":45023,
    "number":3434,
    "rate":14.1,
    "state":"SC",
    "name":"Chester County"
  },
  {
    "id":45025,
    "number":5274,
    "rate":15.4,
    "state":"SC",
    "name":"Chesterfield County"
  },
  {
    "id":45027,
    "number":4315,
    "rate":16.5,
    "state":"SC",
    "name":"Clarendon County"
  },
  {
    "id":45029,
    "number":5102,
    "rate":18,
    "state":"SC",
    "name":"Colleton County"
  },
  {
    "id":45031,
    "number":7305,
    "rate":14.5,
    "state":"SC",
    "name":"Darlington County"
  },
  {
    "id":45033,
    "number":3584,
    "rate":16,
    "state":"SC",
    "name":"Dillon County"
  },
  {
    "id":45035,
    "number":10070,
    "rate":9.9,
    "state":"SC",
    "name":"Dorchester County"
  },
  {
    "id":45037,
    "number":2815,
    "rate":13.8,
    "state":"SC",
    "name":"Edgefield County"
  },
  {
    "id":45039,
    "number":3015,
    "rate":17,
    "state":"SC",
    "name":"Fairfield County"
  },
  {
    "id":45041,
    "number":14884,
    "rate":14.7,
    "state":"SC",
    "name":"Florence County"
  },
  {
    "id":45043,
    "number":6803,
    "rate":14.6,
    "state":"SC",
    "name":"Georgetown County"
  },
  {
    "id":45045,
    "number":36892,
    "rate":10.8,
    "state":"SC",
    "name":"Greenville County"
  },
  {
    "id":45047,
    "number":6355,
    "rate":12.4,
    "state":"SC",
    "name":"Greenwood County"
  },
  {
    "id":45049,
    "number":2634,
    "rate":17,
    "state":"SC",
    "name":"Hampton County"
  },
  {
    "id":45051,
    "number":23754,
    "rate":10.8,
    "state":"SC",
    "name":"Horry County"
  },
  {
    "id":45053,
    "number":2755,
    "rate":14.3,
    "state":"SC",
    "name":"Jasper County"
  },
  {
    "id":45055,
    "number":5853,
    "rate":12.8,
    "state":"SC",
    "name":"Kershaw County"
  },
  {
    "id":45057,
    "number":8051,
    "rate":13.5,
    "state":"SC",
    "name":"Lancaster County"
  },
  {
    "id":45059,
    "number":7325,
    "rate":14.9,
    "state":"SC",
    "name":"Laurens County"
  },
  {
    "id":45061,
    "number":2247,
    "rate":15.8,
    "state":"SC",
    "name":"Lee County"
  },
  {
    "id":45063,
    "number":20981,
    "rate":10.5,
    "state":"SC",
    "name":"Lexington County"
  },
  {
    "id":45067,
    "number":3996,
    "rate":16.7,
    "state":"SC",
    "name":"Marion County"
  },
  {
    "id":45069,
    "number":3315,
    "rate":15.4,
    "state":"SC",
    "name":"Marlboro County"
  },
  {
    "id":45065,
    "number":1384,
    "rate":16.4,
    "state":"SC",
    "name":"Mccormick County"
  },
  {
    "id":45071,
    "number":4121,
    "rate":14.7,
    "state":"SC",
    "name":"Newberry County"
  },
  {
    "id":45073,
    "number":7776,
    "rate":13.5,
    "state":"SC",
    "name":"Oconee County"
  },
  {
    "id":45075,
    "number":10819,
    "rate":16,
    "state":"SC",
    "name":"Orangeburg County"
  },
  {
    "id":45077,
    "number":10070,
    "rate":11.3,
    "state":"SC",
    "name":"Pickens County"
  },
  {
    "id":45079,
    "number":30862,
    "rate":10.7,
    "state":"SC",
    "name":"Richland County"
  },
  {
    "id":45081,
    "number":2027,
    "rate":13.5,
    "state":"SC",
    "name":"Saluda County"
  },
  {
    "id":45083,
    "number":28068,
    "rate":13.3,
    "state":"SC",
    "name":"Spartanburg County"
  },
  {
    "id":45085,
    "number":11203,
    "rate":14.3,
    "state":"SC",
    "name":"Sumter County"
  },
  {
    "id":45087,
    "number":3237,
    "rate":15.1,
    "state":"SC",
    "name":"Union County"
  },
  {
    "id":45089,
    "number":4485,
    "rate":17.8,
    "state":"SC",
    "name":"Williamsburg County"
  },
  {
    "id":45091,
    "number":17924,
    "rate":10.6,
    "state":"SC",
    "name":"York County"
  },
  {
    "id":46003,
    "number":181,
    "rate":9.2,
    "state":"SD",
    "name":"Aurora County"
  },
  {
    "id":46005,
    "number":1247,
    "rate":9.6,
    "state":"SD",
    "name":"Beadle County"
  },
  {
    "id":46007,
    "number":327,
    "rate":15.1,
    "state":"SD",
    "name":"Bennett County"
  },
  {
    "id":46009,
    "number":501,
    "rate":9.1,
    "state":"SD",
    "name":"Bon Homme County"
  },
  {
    "id":46011,
    "number":1466,
    "rate":6.2,
    "state":"SD",
    "name":"Brookings County"
  },
  {
    "id":46013,
    "number":2400,
    "rate":8.7,
    "state":"SD",
    "name":"Brown County"
  },
  {
    "id":46015,
    "number":410,
    "rate":10.8,
    "state":"SD",
    "name":"Brule County"
  },
  {
    "id":46017,
    "number":208,
    "rate":17.8,
    "state":"SD",
    "name":"Buffalo County"
  },
  {
    "id":46019,
    "number":633,
    "rate":8.4,
    "state":"SD",
    "name":"Butte County"
  },
  {
    "id":46021,
    "number":118,
    "rate":10.5,
    "state":"SD",
    "name":"Campbell County"
  },
  {
    "id":46023,
    "number":766,
    "rate":12.3,
    "state":"SD",
    "name":"Charles Mix County"
  },
  {
    "id":46025,
    "number":258,
    "rate":9.6,
    "state":"SD",
    "name":"Clark County"
  },
  {
    "id":46027,
    "number":810,
    "rate":7.8,
    "state":"SD",
    "name":"Clay County"
  },
  {
    "id":46029,
    "number":1694,
    "rate":8.4,
    "state":"SD",
    "name":"Codington County"
  },
  {
    "id":46031,
    "number":398,
    "rate":15.4,
    "state":"SD",
    "name":"Corson County"
  },
  {
    "id":46033,
    "number":723,
    "rate":10.8,
    "state":"SD",
    "name":"Custer County"
  },
  {
    "id":46035,
    "number":1381,
    "rate":9.4,
    "state":"SD",
    "name":"Davison County"
  },
  {
    "id":46037,
    "number":504,
    "rate":11.7,
    "state":"SD",
    "name":"Day County"
  },
  {
    "id":46039,
    "number":317,
    "rate":9.7,
    "state":"SD",
    "name":"Deuel County"
  },
  {
    "id":46041,
    "number":534,
    "rate":15.4,
    "state":"SD",
    "name":"Dewey County"
  },
  {
    "id":46043,
    "number":247,
    "rate":11,
    "state":"SD",
    "name":"Douglas County"
  },
  {
    "id":46045,
    "number":265,
    "rate":8.8,
    "state":"SD",
    "name":"Edmunds County"
  },
  {
    "id":46047,
    "number":627,
    "rate":11.2,
    "state":"SD",
    "name":"Fall River County"
  },
  {
    "id":46049,
    "number":185,
    "rate":10.4,
    "state":"SD",
    "name":"Faulk County"
  },
  {
    "id":46051,
    "number":504,
    "rate":9.2,
    "state":"SD",
    "name":"Grant County"
  },
  {
    "id":46053,
    "number":340,
    "rate":10.6,
    "state":"SD",
    "name":"Gregory County"
  },
  {
    "id":46055,
    "number":148,
    "rate":10.2,
    "state":"SD",
    "name":"Haakon County"
  },
  {
    "id":46057,
    "number":372,
    "rate":9.3,
    "state":"SD",
    "name":"Hamlin County"
  },
  {
    "id":46059,
    "number":295,
    "rate":11.4,
    "state":"SD",
    "name":"Hand County"
  },
  {
    "id":46061,
    "number":190,
    "rate":8.6,
    "state":"SD",
    "name":"Hanson County"
  },
  {
    "id":46063,
    "number":87,
    "rate":8.7,
    "state":"SD",
    "name":"Harding County"
  },
  {
    "id":46065,
    "number":1221,
    "rate":9.4,
    "state":"SD",
    "name":"Hughes County"
  },
  {
    "id":46067,
    "number":574,
    "rate":10.7,
    "state":"SD",
    "name":"Hutchinson County"
  },
  {
    "id":46069,
    "number":120,
    "rate":11,
    "state":"SD",
    "name":"Hyde County"
  },
  {
    "id":46071,
    "number":246,
    "rate":12.1,
    "state":"SD",
    "name":"Jackson County"
  },
  {
    "id":46073,
    "number":159,
    "rate":10.2,
    "state":"SD",
    "name":"Jerauld County"
  },
  {
    "id":46075,
    "number":82,
    "rate":10.6,
    "state":"SD",
    "name":"Jones County"
  },
  {
    "id":46077,
    "number":395,
    "rate":10.1,
    "state":"SD",
    "name":"Kingsbury County"
  },
  {
    "id":46079,
    "number":788,
    "rate":8.8,
    "state":"SD",
    "name":"Lake County"
  },
  {
    "id":46081,
    "number":1456,
    "rate":7.8,
    "state":"SD",
    "name":"Lawrence County"
  },
  {
    "id":46083,
    "number":2200,
    "rate":6.6,
    "state":"SD",
    "name":"Lincoln County"
  },
  {
    "id":46085,
    "number":308,
    "rate":11.8,
    "state":"SD",
    "name":"Lyman County"
  },
  {
    "id":46091,
    "number":351,
    "rate":9.9,
    "state":"SD",
    "name":"Marshall County"
  },
  {
    "id":46087,
    "number":376,
    "rate":9.4,
    "state":"SD",
    "name":"McCook County"
  },
  {
    "id":46089,
    "number":226,
    "rate":12.2,
    "state":"SD",
    "name":"McPherson County"
  },
  {
    "id":46093,
    "number":1562,
    "rate":8.2,
    "state":"SD",
    "name":"Meade County"
  },
  {
    "id":46095,
    "number":177,
    "rate":12.7,
    "state":"SD",
    "name":"Mellette County"
  },
  {
    "id":46097,
    "number":177,
    "rate":10.3,
    "state":"SD",
    "name":"Miner County"
  },
  {
    "id":46099,
    "number":11055,
    "rate":8.7,
    "state":"SD",
    "name":"Minnehaha County"
  },
  {
    "id":46101,
    "number":479,
    "rate":10.3,
    "state":"SD",
    "name":"Moody County"
  },
  {
    "id":46103,
    "number":6671,
    "rate":8.7,
    "state":"SD",
    "name":"Pennington County"
  },
  {
    "id":46105,
    "number":230,
    "rate":9.9,
    "state":"SD",
    "name":"Perkins County"
  },
  {
    "id":46107,
    "number":203,
    "rate":11,
    "state":"SD",
    "name":"Potter County"
  },
  {
    "id":46109,
    "number":895,
    "rate":12.7,
    "state":"SD",
    "name":"Roberts County"
  },
  {
    "id":46111,
    "number":180,
    "rate":10,
    "state":"SD",
    "name":"Sanborn County"
  },
  {
    "id":46113,
    "number":1433,
    "rate":17.6,
    "state":"SD",
    "name":"Shannon County"
  },
  {
    "id":46115,
    "number":477,
    "rate":9.8,
    "state":"SD",
    "name":"Spink County"
  },
  {
    "id":46117,
    "number":236,
    "rate":10.7,
    "state":"SD",
    "name":"Stanley County"
  },
  {
    "id":46119,
    "number":109,
    "rate":10,
    "state":"SD",
    "name":"Sully County"
  },
  {
    "id":46121,
    "number":983,
    "rate":17.5,
    "state":"SD",
    "name":"Todd County"
  },
  {
    "id":46123,
    "number":452,
    "rate":11,
    "state":"SD",
    "name":"Tripp County"
  },
  {
    "id":46125,
    "number":564,
    "rate":9.2,
    "state":"SD",
    "name":"Turner County"
  },
  {
    "id":46127,
    "number":1003,
    "rate":9.5,
    "state":"SD",
    "name":"Union County"
  },
  {
    "id":46129,
    "number":475,
    "rate":11.4,
    "state":"SD",
    "name":"Walworth County"
  },
  {
    "id":46135,
    "number":1375,
    "rate":8,
    "state":"SD",
    "name":"Yankton County"
  },
  {
    "id":46137,
    "number":272,
    "rate":16.1,
    "state":"SD",
    "name":"Ziebach County"
  },
  {
    "id":47001,
    "number":7926,
    "rate":13.7,
    "state":"TN",
    "name":"Anderson County"
  },
  {
    "id":47003,
    "number":3798,
    "rate":11.7,
    "state":"TN",
    "name":"Bedford County"
  },
  {
    "id":47005,
    "number":1870,
    "rate":14.7,
    "state":"TN",
    "name":"Benton County"
  },
  {
    "id":47007,
    "number":1203,
    "rate":12.1,
    "state":"TN",
    "name":"Bledsoe County"
  },
  {
    "id":47009,
    "number":12287,
    "rate":13,
    "state":"TN",
    "name":"Blount County"
  },
  {
    "id":47011,
    "number":10638,
    "rate":14.1,
    "state":"TN",
    "name":"Bradley County"
  },
  {
    "id":47013,
    "number":4104,
    "rate":13.2,
    "state":"TN",
    "name":"Campbell County"
  },
  {
    "id":47015,
    "number":1295,
    "rate":12.2,
    "state":"TN",
    "name":"Cannon County"
  },
  {
    "id":47017,
    "number":2935,
    "rate":13.7,
    "state":"TN",
    "name":"Carroll County"
  },
  {
    "id":47019,
    "number":6670,
    "rate":14.9,
    "state":"TN",
    "name":"Carter County"
  },
  {
    "id":47021,
    "number":3334,
    "rate":11.6,
    "state":"TN",
    "name":"Cheatham County"
  },
  {
    "id":47023,
    "number":1848,
    "rate":14.8,
    "state":"TN",
    "name":"Chester County"
  },
  {
    "id":47025,
    "number":3509,
    "rate":14.3,
    "state":"TN",
    "name":"Claiborne County"
  },
  {
    "id":47027,
    "number":835,
    "rate":13.7,
    "state":"TN",
    "name":"Clay County"
  },
  {
    "id":47029,
    "number":4167,
    "rate":15.2,
    "state":"TN",
    "name":"Cocke County"
  },
  {
    "id":47031,
    "number":5259,
    "rate":13.4,
    "state":"TN",
    "name":"Coffee County"
  },
  {
    "id":47033,
    "number":1510,
    "rate":14,
    "state":"TN",
    "name":"Crockett County"
  },
  {
    "id":47035,
    "number":7729,
    "rate":17,
    "state":"TN",
    "name":"Cumberland County"
  },
  {
    "id":47037,
    "number":50829,
    "rate":10.4,
    "state":"TN",
    "name":"Davidson County"
  },
  {
    "id":47039,
    "number":1399,
    "rate":15.6,
    "state":"TN",
    "name":"Decatur County"
  },
  {
    "id":47041,
    "number":2063,
    "rate":14.4,
    "state":"TN",
    "name":"De Kalb County"
  },
  {
    "id":47043,
    "number":4948,
    "rate":13.4,
    "state":"TN",
    "name":"Dickson County"
  },
  {
    "id":47045,
    "number":3806,
    "rate":13.6,
    "state":"TN",
    "name":"Dyer County"
  },
  {
    "id":47047,
    "number":4679,
    "rate":15.9,
    "state":"TN",
    "name":"Fayette County"
  },
  {
    "id":47049,
    "number":1825,
    "rate":13.5,
    "state":"TN",
    "name":"Fentress County"
  },
  {
    "id":47051,
    "number":3735,
    "rate":12.1,
    "state":"TN",
    "name":"Franklin County"
  },
  {
    "id":47053,
    "number":4409,
    "rate":12.1,
    "state":"TN",
    "name":"Gibson County"
  },
  {
    "id":47055,
    "number":2855,
    "rate":13,
    "state":"TN",
    "name":"Giles County"
  },
  {
    "id":47057,
    "number":2218,
    "rate":12.9,
    "state":"TN",
    "name":"Grainger County"
  },
  {
    "id":47059,
    "number":7152,
    "rate":13.6,
    "state":"TN",
    "name":"Greene County"
  },
  {
    "id":47061,
    "number":1514,
    "rate":14.7,
    "state":"TN",
    "name":"Grundy County"
  },
  {
    "id":47063,
    "number":6277,
    "rate":13.4,
    "state":"TN",
    "name":"Hamblen County"
  },
  {
    "id":47065,
    "number":33286,
    "rate":12.7,
    "state":"TN",
    "name":"Hamilton County"
  },
  {
    "id":47067,
    "number":704,
    "rate":13.6,
    "state":"TN",
    "name":"Hancock County"
  },
  {
    "id":47069,
    "number":2985,
    "rate":14.5,
    "state":"TN",
    "name":"Hardeman County"
  },
  {
    "id":47071,
    "number":2934,
    "rate":14.7,
    "state":"TN",
    "name":"Hardin County"
  },
  {
    "id":47073,
    "number":5820,
    "rate":13.5,
    "state":"TN",
    "name":"Hawkins County"
  },
  {
    "id":47075,
    "number":2287,
    "rate":17.1,
    "state":"TN",
    "name":"Haywood County"
  },
  {
    "id":47077,
    "number":3270,
    "rate":15.8,
    "state":"TN",
    "name":"Henderson County"
  },
  {
    "id":47079,
    "number":3761,
    "rate":15.2,
    "state":"TN",
    "name":"Henry County"
  },
  {
    "id":47081,
    "number":2410,
    "rate":13.1,
    "state":"TN",
    "name":"Hickman County"
  },
  {
    "id":47083,
    "number":900,
    "rate":14.3,
    "state":"TN",
    "name":"Houston County"
  },
  {
    "id":47085,
    "number":1920,
    "rate":13.9,
    "state":"TN",
    "name":"Humphreys County"
  },
  {
    "id":47087,
    "number":1095,
    "rate":12.2,
    "state":"TN",
    "name":"Jackson County"
  },
  {
    "id":47089,
    "number":4526,
    "rate":11.5,
    "state":"TN",
    "name":"Jefferson County"
  },
  {
    "id":47091,
    "number":2168,
    "rate":14.9,
    "state":"TN",
    "name":"Johnson County"
  },
  {
    "id":47093,
    "number":36387,
    "rate":11,
    "state":"TN",
    "name":"Knox County"
  },
  {
    "id":47095,
    "number":773,
    "rate":12.3,
    "state":"TN",
    "name":"Lake County"
  },
  {
    "id":47097,
    "number":2929,
    "rate":14.2,
    "state":"TN",
    "name":"Lauderdale County"
  },
  {
    "id":47099,
    "number":4140,
    "rate":13.5,
    "state":"TN",
    "name":"Lawrence County"
  },
  {
    "id":47101,
    "number":1187,
    "rate":13.3,
    "state":"TN",
    "name":"Lewis County"
  },
  {
    "id":47103,
    "number":3207,
    "rate":12.7,
    "state":"TN",
    "name":"Lincoln County"
  },
  {
    "id":47105,
    "number":5315,
    "rate":13.7,
    "state":"TN",
    "name":"Loudon County"
  },
  {
    "id":47111,
    "number":2014,
    "rate":12.3,
    "state":"TN",
    "name":"Macon County"
  },
  {
    "id":47113,
    "number":10386,
    "rate":14.5,
    "state":"TN",
    "name":"Madison County"
  },
  {
    "id":47115,
    "number":3370,
    "rate":15.6,
    "state":"TN",
    "name":"Marion County"
  },
  {
    "id":47117,
    "number":3330,
    "rate":14.6,
    "state":"TN",
    "name":"Marshall County"
  },
  {
    "id":47119,
    "number":7206,
    "rate":11.8,
    "state":"TN",
    "name":"Maury County"
  },
  {
    "id":47107,
    "number":5559,
    "rate":14,
    "state":"TN",
    "name":"McMinn County"
  },
  {
    "id":47109,
    "number":3155,
    "rate":16.1,
    "state":"TN",
    "name":"McNairy County"
  },
  {
    "id":47121,
    "number":1265,
    "rate":14,
    "state":"TN",
    "name":"Meigs County"
  },
  {
    "id":47123,
    "number":4533,
    "rate":13.2,
    "state":"TN",
    "name":"Monroe County"
  },
  {
    "id":47125,
    "number":11748,
    "rate":9.1,
    "state":"TN",
    "name":"Montgomery County"
  },
  {
    "id":47127,
    "number":650,
    "rate":13.4,
    "state":"TN",
    "name":"Moore County"
  },
  {
    "id":47129,
    "number":2127,
    "rate":12.4,
    "state":"TN",
    "name":"Morgan County"
  },
  {
    "id":47131,
    "number":3620,
    "rate":15.3,
    "state":"TN",
    "name":"Obion County"
  },
  {
    "id":47133,
    "number":2526,
    "rate":15.2,
    "state":"TN",
    "name":"Overton County"
  },
  {
    "id":47135,
    "number":937,
    "rate":15.9,
    "state":"TN",
    "name":"Perry County"
  },
  {
    "id":47137,
    "number":597,
    "rate":14.8,
    "state":"TN",
    "name":"Pickett County"
  },
  {
    "id":47139,
    "number":1630,
    "rate":12.9,
    "state":"TN",
    "name":"Polk County"
  },
  {
    "id":47141,
    "number":7441,
    "rate":13.6,
    "state":"TN",
    "name":"Putnam County"
  },
  {
    "id":47143,
    "number":3463,
    "rate":14.5,
    "state":"TN",
    "name":"Rhea County"
  },
  {
    "id":47145,
    "number":4864,
    "rate":11.7,
    "state":"TN",
    "name":"Roane County"
  },
  {
    "id":47147,
    "number":5950,
    "rate":12.3,
    "state":"TN",
    "name":"Robertson County"
  },
  {
    "id":47149,
    "number":18672,
    "rate":9.6,
    "state":"TN",
    "name":"Rutherford County"
  },
  {
    "id":47151,
    "number":2189,
    "rate":13.5,
    "state":"TN",
    "name":"Scott County"
  },
  {
    "id":47153,
    "number":1449,
    "rate":13.3,
    "state":"TN",
    "name":"Sequatchie County"
  },
  {
    "id":47155,
    "number":8757,
    "rate":12.4,
    "state":"TN",
    "name":"Sevier County"
  },
  {
    "id":47157,
    "number":83619,
    "rate":12.5,
    "state":"TN",
    "name":"Shelby County"
  },
  {
    "id":47159,
    "number":1677,
    "rate":11.9,
    "state":"TN",
    "name":"Smith County"
  },
  {
    "id":47161,
    "number":1511,
    "rate":14.9,
    "state":"TN",
    "name":"Stewart County"
  },
  {
    "id":47163,
    "number":17739,
    "rate":14.6,
    "state":"TN",
    "name":"Sullivan County"
  },
  {
    "id":47165,
    "number":13410,
    "rate":11.1,
    "state":"TN",
    "name":"Sumner County"
  },
  {
    "id":47167,
    "number":5272,
    "rate":12.1,
    "state":"TN",
    "name":"Tipton County"
  },
  {
    "id":47169,
    "number":733,
    "rate":12.7,
    "state":"TN",
    "name":"Trousdale County"
  },
  {
    "id":47171,
    "number":1964,
    "rate":13.7,
    "state":"TN",
    "name":"Unicoi County"
  },
  {
    "id":47173,
    "number":1923,
    "rate":13.5,
    "state":"TN",
    "name":"Union County"
  },
  {
    "id":47175,
    "number":610,
    "rate":13.9,
    "state":"TN",
    "name":"Van Buren County"
  },
  {
    "id":47177,
    "number":4242,
    "rate":14.4,
    "state":"TN",
    "name":"Warren County"
  },
  {
    "id":47179,
    "number":10836,
    "rate":11.3,
    "state":"TN",
    "name":"Washington County"
  },
  {
    "id":47181,
    "number":1607,
    "rate":11.9,
    "state":"TN",
    "name":"Wayne County"
  },
  {
    "id":47183,
    "number":3923,
    "rate":15,
    "state":"TN",
    "name":"Weakley County"
  },
  {
    "id":47185,
    "number":2509,
    "rate":12.7,
    "state":"TN",
    "name":"White County"
  },
  {
    "id":47187,
    "number":12468,
    "rate":9.4,
    "state":"TN",
    "name":"Williamson County"
  },
  {
    "id":47189,
    "number":10442,
    "rate":12,
    "state":"TN",
    "name":"Wilson County"
  },
  {
    "id":48001,
    "number":5397,
    "rate":11.8,
    "state":"TX",
    "name":"Anderson County"
  },
  {
    "id":48003,
    "number":1078,
    "rate":9.9,
    "state":"TX",
    "name":"Andrews County"
  },
  {
    "id":48005,
    "number":7107,
    "rate":11.4,
    "state":"TX",
    "name":"Angelina County"
  },
  {
    "id":48007,
    "number":2273,
    "rate":12,
    "state":"TX",
    "name":"Aransas County"
  },
  {
    "id":48009,
    "number":722,
    "rate":11.1,
    "state":"TX",
    "name":"Archer County"
  },
  {
    "id":48011,
    "number":165,
    "rate":11.2,
    "state":"TX",
    "name":"Armstrong County"
  },
  {
    "id":48013,
    "number":3205,
    "rate":10,
    "state":"TX",
    "name":"Atascosa County"
  },
  {
    "id":48015,
    "number":2225,
    "rate":10.6,
    "state":"TX",
    "name":"Austin County"
  },
  {
    "id":48017,
    "number":456,
    "rate":9.7,
    "state":"TX",
    "name":"Bailey County"
  },
  {
    "id":48019,
    "number":2068,
    "rate":12.6,
    "state":"TX",
    "name":"Bandera County"
  },
  {
    "id":48021,
    "number":5326,
    "rate":9.9,
    "state":"TX",
    "name":"Bastrop County"
  },
  {
    "id":48023,
    "number":330,
    "rate":11.8,
    "state":"TX",
    "name":"Baylor County"
  },
  {
    "id":48025,
    "number":2181,
    "rate":8.9,
    "state":"TX",
    "name":"Bee County"
  },
  {
    "id":48027,
    "number":20371,
    "rate":9.1,
    "state":"TX",
    "name":"Bell County"
  },
  {
    "id":48029,
    "number":112429,
    "rate":8.9,
    "state":"TX",
    "name":"Bexar County"
  },
  {
    "id":48031,
    "number":939,
    "rate":11.4,
    "state":"TX",
    "name":"Blanco County"
  },
  {
    "id":48033,
    "number":57,
    "rate":12,
    "state":"TX",
    "name":"Borden County"
  },
  {
    "id":48035,
    "number":1463,
    "rate":10.7,
    "state":"TX",
    "name":"Bosque County"
  },
  {
    "id":48037,
    "number":8539,
    "rate":12.5,
    "state":"TX",
    "name":"Bowie County"
  },
  {
    "id":48039,
    "number":21243,
    "rate":9.3,
    "state":"TX",
    "name":"Brazoria County"
  },
  {
    "id":48041,
    "number":10226,
    "rate":7,
    "state":"TX",
    "name":"Brazos County"
  },
  {
    "id":48043,
    "number":672,
    "rate":9.4,
    "state":"TX",
    "name":"Brewster County"
  },
  {
    "id":48047,
    "number":539,
    "rate":10.9,
    "state":"TX",
    "name":"Brooks County"
  },
  {
    "id":48045,
    "number":144,
    "rate":12.4,
    "state":"TX",
    "name":"Briscoe County"
  },
  {
    "id":48049,
    "number":2824,
    "rate":10.1,
    "state":"TX",
    "name":"Brown County"
  },
  {
    "id":48051,
    "number":1647,
    "rate":12.8,
    "state":"TX",
    "name":"Burleson County"
  },
  {
    "id":48053,
    "number":3582,
    "rate":10.9,
    "state":"TX",
    "name":"Burnet County"
  },
  {
    "id":48055,
    "number":2681,
    "rate":9.7,
    "state":"TX",
    "name":"Caldwell County"
  },
  {
    "id":48057,
    "number":1774,
    "rate":11.5,
    "state":"TX",
    "name":"Calhoun County"
  },
  {
    "id":48059,
    "number":1107,
    "rate":10.9,
    "state":"TX",
    "name":"Callahan County"
  },
  {
    "id":48061,
    "number":24201,
    "rate":9,
    "state":"TX",
    "name":"Cameron County"
  },
  {
    "id":48063,
    "number":1101,
    "rate":12.4,
    "state":"TX",
    "name":"Camp County"
  },
  {
    "id":48065,
    "number":503,
    "rate":11.3,
    "state":"TX",
    "name":"Carson County"
  },
  {
    "id":48067,
    "number":2936,
    "rate":13,
    "state":"TX",
    "name":"Cass County"
  },
  {
    "id":48069,
    "number":543,
    "rate":10.1,
    "state":"TX",
    "name":"Castro County"
  },
  {
    "id":48071,
    "number":2537,
    "rate":10.1,
    "state":"TX",
    "name":"Chambers County"
  },
  {
    "id":48073,
    "number":3802,
    "rate":10.4,
    "state":"TX",
    "name":"Cherokee County"
  },
  {
    "id":48075,
    "number":505,
    "rate":9.3,
    "state":"TX",
    "name":"Childress County"
  },
  {
    "id":48077,
    "number":948,
    "rate":11.9,
    "state":"TX",
    "name":"Clay County"
  },
  {
    "id":48079,
    "number":231,
    "rate":11.2,
    "state":"TX",
    "name":"Cochran County"
  },
  {
    "id":48081,
    "number":318,
    "rate":12.6,
    "state":"TX",
    "name":"Coke County"
  },
  {
    "id":48083,
    "number":816,
    "rate":12.4,
    "state":"TX",
    "name":"Coleman County"
  },
  {
    "id":48085,
    "number":51762,
    "rate":8.9,
    "state":"TX",
    "name":"Collin County"
  },
  {
    "id":48087,
    "number":232,
    "rate":11,
    "state":"TX",
    "name":"Collingsworth County"
  },
  {
    "id":48089,
    "number":1828,
    "rate":11.9,
    "state":"TX",
    "name":"Colorado County"
  },
  {
    "id":48091,
    "number":8281,
    "rate":9.7,
    "state":"TX",
    "name":"Comal County"
  },
  {
    "id":48093,
    "number":1137,
    "rate":11.1,
    "state":"TX",
    "name":"Comanche County"
  },
  {
    "id":48095,
    "number":317,
    "rate":9.2,
    "state":"TX",
    "name":"Concho County"
  },
  {
    "id":48097,
    "number":2983,
    "rate":10.6,
    "state":"TX",
    "name":"Cooke County"
  },
  {
    "id":48099,
    "number":4651,
    "rate":8.5,
    "state":"TX",
    "name":"Coryell County"
  },
  {
    "id":48101,
    "number":144,
    "rate":12.9,
    "state":"TX",
    "name":"Cottle County"
  },
  {
    "id":48103,
    "number":303,
    "rate":9.6,
    "state":"TX",
    "name":"Crane County"
  },
  {
    "id":48105,
    "number":279,
    "rate":10.5,
    "state":"TX",
    "name":"Crockett County"
  },
  {
    "id":48107,
    "number":427,
    "rate":10.1,
    "state":"TX",
    "name":"Crosby County"
  },
  {
    "id":48109,
    "number":174,
    "rate":10.6,
    "state":"TX",
    "name":"Culberson County"
  },
  {
    "id":48111,
    "number":388,
    "rate":8.4,
    "state":"TX",
    "name":"Dallam County"
  },
  {
    "id":48113,
    "number":148840,
    "rate":8.6,
    "state":"TX",
    "name":"Dallas County"
  },
  {
    "id":48115,
    "number":929,
    "rate":9.3,
    "state":"TX",
    "name":"Dawson County"
  },
  {
    "id":48117,
    "number":1171,
    "rate":9.3,
    "state":"TX",
    "name":"Deaf Smith County"
  },
  {
    "id":48119,
    "number":486,
    "rate":12.1,
    "state":"TX",
    "name":"Delta County"
  },
  {
    "id":48121,
    "number":42910,
    "rate":8.6,
    "state":"TX",
    "name":"Denton County"
  },
  {
    "id":48123,
    "number":1765,
    "rate":11.4,
    "state":"TX",
    "name":"De Witt County"
  },
  {
    "id":48125,
    "number":188,
    "rate":10.3,
    "state":"TX",
    "name":"Dickens County"
  },
  {
    "id":48127,
    "number":723,
    "rate":10.2,
    "state":"TX",
    "name":"Dimmit County"
  },
  {
    "id":48129,
    "number":309,
    "rate":11.6,
    "state":"TX",
    "name":"Donley County"
  },
  {
    "id":48131,
    "number":824,
    "rate":10,
    "state":"TX",
    "name":"Duval County"
  },
  {
    "id":48133,
    "number":1712,
    "rate":12.6,
    "state":"TX",
    "name":"Eastland County"
  },
  {
    "id":48135,
    "number":10008,
    "rate":10.2,
    "state":"TX",
    "name":"Ector County"
  },
  {
    "id":48137,
    "number":176,
    "rate":11.6,
    "state":"TX",
    "name":"Edwards County"
  },
  {
    "id":48141,
    "number":50487,
    "rate":9,
    "state":"TX",
    "name":"El Paso County"
  },
  {
    "id":48139,
    "number":10836,
    "rate":10.2,
    "state":"TX",
    "name":"Ellis County"
  },
  {
    "id":48143,
    "number":2573,
    "rate":9,
    "state":"TX",
    "name":"Erath County"
  },
  {
    "id":48145,
    "number":1577,
    "rate":11.7,
    "state":"TX",
    "name":"Falls County"
  },
  {
    "id":48147,
    "number":2741,
    "rate":10.7,
    "state":"TX",
    "name":"Fannin County"
  },
  {
    "id":48149,
    "number":2235,
    "rate":11.8,
    "state":"TX",
    "name":"Fayette County"
  },
  {
    "id":48151,
    "number":372,
    "rate":12.6,
    "state":"TX",
    "name":"Fisher County"
  },
  {
    "id":48153,
    "number":520,
    "rate":11.9,
    "state":"TX",
    "name":"Floyd County"
  },
  {
    "id":48155,
    "number":124,
    "rate":12.3,
    "state":"TX",
    "name":"Foard County"
  },
  {
    "id":48157,
    "number":32872,
    "rate":7.7,
    "state":"TX",
    "name":"Fort Bend County"
  },
  {
    "id":48159,
    "number":859,
    "rate":11,
    "state":"TX",
    "name":"Franklin County"
  },
  {
    "id":48161,
    "number":1687,
    "rate":11.6,
    "state":"TX",
    "name":"Freestone County"
  },
  {
    "id":48163,
    "number":1234,
    "rate":9.6,
    "state":"TX",
    "name":"Frio County"
  },
  {
    "id":48165,
    "number":1112,
    "rate":9.7,
    "state":"TX",
    "name":"Gaines County"
  },
  {
    "id":48167,
    "number":20324,
    "rate":9.3,
    "state":"TX",
    "name":"Galveston County"
  },
  {
    "id":48169,
    "number":444,
    "rate":9,
    "state":"TX",
    "name":"Garza County"
  },
  {
    "id":48171,
    "number":2284,
    "rate":11.6,
    "state":"TX",
    "name":"Gillespie County"
  },
  {
    "id":48173,
    "number":85,
    "rate":9.8,
    "state":"TX",
    "name":"Glasscock County"
  },
  {
    "id":48175,
    "number":650,
    "rate":11.7,
    "state":"TX",
    "name":"Goliad County"
  },
  {
    "id":48177,
    "number":1667,
    "rate":11.8,
    "state":"TX",
    "name":"Gonzales County"
  },
  {
    "id":48179,
    "number":1855,
    "rate":11.1,
    "state":"TX",
    "name":"Gray County"
  },
  {
    "id":48181,
    "number":8912,
    "rate":10,
    "state":"TX",
    "name":"Grayson County"
  },
  {
    "id":48183,
    "number":9624,
    "rate":11,
    "state":"TX",
    "name":"Gregg County"
  },
  {
    "id":48185,
    "number":2444,
    "rate":12.1,
    "state":"TX",
    "name":"Grimes County"
  },
  {
    "id":48187,
    "number":9214,
    "rate":9.4,
    "state":"TX",
    "name":"Guadalupe County"
  },
  {
    "id":48189,
    "number":2913,
    "rate":11.8,
    "state":"TX",
    "name":"Hale County"
  },
  {
    "id":48191,
    "number":305,
    "rate":12.8,
    "state":"TX",
    "name":"Hall County"
  },
  {
    "id":48193,
    "number":809,
    "rate":12.6,
    "state":"TX",
    "name":"Hamilton County"
  },
  {
    "id":48195,
    "number":381,
    "rate":10.2,
    "state":"TX",
    "name":"Hansford County"
  },
  {
    "id":48197,
    "number":361,
    "rate":12,
    "state":"TX",
    "name":"Hardeman County"
  },
  {
    "id":48199,
    "number":3898,
    "rate":9.8,
    "state":"TX",
    "name":"Hardin County"
  },
  {
    "id":48201,
    "number":241536,
    "rate":8.1,
    "state":"TX",
    "name":"Harris County"
  },
  {
    "id":48203,
    "number":5589,
    "rate":11.6,
    "state":"TX",
    "name":"Harrison County"
  },
  {
    "id":48205,
    "number":480,
    "rate":10,
    "state":"TX",
    "name":"Hartley County"
  },
  {
    "id":48207,
    "number":512,
    "rate":11.3,
    "state":"TX",
    "name":"Haskell County"
  },
  {
    "id":48209,
    "number":9104,
    "rate":7.6,
    "state":"TX",
    "name":"Hays County"
  },
  {
    "id":48211,
    "number":268,
    "rate":9.8,
    "state":"TX",
    "name":"Hemphill County"
  },
  {
    "id":48213,
    "number":6225,
    "rate":10.5,
    "state":"TX",
    "name":"Henderson County"
  },
  {
    "id":48215,
    "number":47075,
    "rate":9.3,
    "state":"TX",
    "name":"Hidalgo County"
  },
  {
    "id":48217,
    "number":2561,
    "rate":9.9,
    "state":"TX",
    "name":"Hill County"
  },
  {
    "id":48219,
    "number":1426,
    "rate":8.9,
    "state":"TX",
    "name":"Hockley County"
  },
  {
    "id":48221,
    "number":4291,
    "rate":10.7,
    "state":"TX",
    "name":"Hood County"
  },
  {
    "id":48223,
    "number":2592,
    "rate":10.1,
    "state":"TX",
    "name":"Hopkins County"
  },
  {
    "id":48225,
    "number":2207,
    "rate":12.1,
    "state":"TX",
    "name":"Houston County"
  },
  {
    "id":48227,
    "number":2710,
    "rate":10.2,
    "state":"TX",
    "name":"Howard County"
  },
  {
    "id":48229,
    "number":253,
    "rate":10.8,
    "state":"TX",
    "name":"Hudspeth County"
  },
  {
    "id":48231,
    "number":6257,
    "rate":9.9,
    "state":"TX",
    "name":"Hunt County"
  },
  {
    "id":48233,
    "number":1757,
    "rate":11.3,
    "state":"TX",
    "name":"Hutchinson County"
  },
  {
    "id":48235,
    "number":130,
    "rate":11,
    "state":"TX",
    "name":"Irion County"
  },
  {
    "id":48239,
    "number":1224,
    "rate":12,
    "state":"TX",
    "name":"Jackson County"
  },
  {
    "id":48237,
    "number":669,
    "rate":9.9,
    "state":"TX",
    "name":"Jack County"
  },
  {
    "id":48241,
    "number":3269,
    "rate":12.5,
    "state":"TX",
    "name":"Jasper County"
  },
  {
    "id":48243,
    "number":237,
    "rate":12.3,
    "state":"TX",
    "name":"Jeff Davis County"
  },
  {
    "id":48245,
    "number":22229,
    "rate":12.1,
    "state":"TX",
    "name":"Jefferson County"
  },
  {
    "id":48247,
    "number":390,
    "rate":10.8,
    "state":"TX",
    "name":"Jim Hogg County"
  },
  {
    "id":48249,
    "number":2639,
    "rate":9.2,
    "state":"TX",
    "name":"Jim Wells County"
  },
  {
    "id":48251,
    "number":12517,
    "rate":11.5,
    "state":"TX",
    "name":"Johnson County"
  },
  {
    "id":48253,
    "number":1521,
    "rate":9.6,
    "state":"TX",
    "name":"Jones County"
  },
  {
    "id":48255,
    "number":1054,
    "rate":9.2,
    "state":"TX",
    "name":"Karnes County"
  },
  {
    "id":48257,
    "number":7115,
    "rate":9.6,
    "state":"TX",
    "name":"Kaufman County"
  },
  {
    "id":48259,
    "number":2691,
    "rate":10.2,
    "state":"TX",
    "name":"Kendall County"
  },
  {
    "id":48261,
    "number":33,
    "rate":10.2,
    "state":"TX",
    "name":"Kenedy County"
  },
  {
    "id":48263,
    "number":81,
    "rate":12.8,
    "state":"TX",
    "name":"Kent County"
  },
  {
    "id":48265,
    "number":4734,
    "rate":12.2,
    "state":"TX",
    "name":"Kerr County"
  },
  {
    "id":48267,
    "number":436,
    "rate":12.2,
    "state":"TX",
    "name":"Kimble County"
  },
  {
    "id":48269,
    "number":23,
    "rate":10.8,
    "state":"TX",
    "name":"King County"
  },
  {
    "id":48271,
    "number":322,
    "rate":11.5,
    "state":"TX",
    "name":"Kinney County"
  },
  {
    "id":48273,
    "number":1871,
    "rate":8.4,
    "state":"TX",
    "name":"Kleberg County"
  },
  {
    "id":48275,
    "number":305,
    "rate":11.2,
    "state":"TX",
    "name":"Knox County"
  },
  {
    "id":48283,
    "number":486,
    "rate":9,
    "state":"TX",
    "name":"La Salle County"
  },
  {
    "id":48277,
    "number":4930,
    "rate":13.4,
    "state":"TX",
    "name":"Lamar County"
  },
  {
    "id":48279,
    "number":976,
    "rate":10.3,
    "state":"TX",
    "name":"Lamb County"
  },
  {
    "id":48281,
    "number":1605,
    "rate":10.9,
    "state":"TX",
    "name":"Lampasas County"
  },
  {
    "id":48285,
    "number":1837,
    "rate":12.7,
    "state":"TX",
    "name":"Lavaca County"
  },
  {
    "id":48287,
    "number":1325,
    "rate":11,
    "state":"TX",
    "name":"Lee County"
  },
  {
    "id":48289,
    "number":1692,
    "rate":13.3,
    "state":"TX",
    "name":"Leon County"
  },
  {
    "id":48291,
    "number":5598,
    "rate":10.1,
    "state":"TX",
    "name":"Liberty County"
  },
  {
    "id":48293,
    "number":2088,
    "rate":11.9,
    "state":"TX",
    "name":"Limestone County"
  },
  {
    "id":48295,
    "number":236,
    "rate":9.9,
    "state":"TX",
    "name":"Lipscomb County"
  },
  {
    "id":48297,
    "number":1097,
    "rate":12,
    "state":"TX",
    "name":"Live Oak County"
  },
  {
    "id":48299,
    "number":2097,
    "rate":13.3,
    "state":"TX",
    "name":"Llano County"
  },
  {
    "id":48301,
    "number":7,
    "rate":11.2,
    "state":"TX",
    "name":"Loving County"
  },
  {
    "id":48303,
    "number":17662,
    "rate":8.6,
    "state":"TX",
    "name":"Lubbock County"
  },
  {
    "id":48305,
    "number":443,
    "rate":10.9,
    "state":"TX",
    "name":"Lynn County"
  },
  {
    "id":48313,
    "number":997,
    "rate":9.6,
    "state":"TX",
    "name":"Madison County"
  },
  {
    "id":48315,
    "number":1076,
    "rate":13.2,
    "state":"TX",
    "name":"Marion County"
  },
  {
    "id":48317,
    "number":324,
    "rate":9.6,
    "state":"TX",
    "name":"Martin County"
  },
  {
    "id":48319,
    "number":399,
    "rate":12.8,
    "state":"TX",
    "name":"Mason County"
  },
  {
    "id":48321,
    "number":2925,
    "rate":11.1,
    "state":"TX",
    "name":"Matagorda County"
  },
  {
    "id":48323,
    "number":3055,
    "rate":8.7,
    "state":"TX",
    "name":"Maverick County"
  },
  {
    "id":48307,
    "number":677,
    "rate":11,
    "state":"TX",
    "name":"McCulloch County"
  },
  {
    "id":48309,
    "number":15248,
    "rate":9,
    "state":"TX",
    "name":"Mclennan County"
  },
  {
    "id":48311,
    "number":73,
    "rate":12.6,
    "state":"TX",
    "name":"McMullen County"
  },
  {
    "id":48325,
    "number":3398,
    "rate":10,
    "state":"TX",
    "name":"Medina County"
  },
  {
    "id":48327,
    "number":230,
    "rate":13,
    "state":"TX",
    "name":"Menard County"
  },
  {
    "id":48329,
    "number":8888,
    "rate":8.7,
    "state":"TX",
    "name":"Midland County"
  },
  {
    "id":48331,
    "number":2136,
    "rate":12.3,
    "state":"TX",
    "name":"Milam County"
  },
  {
    "id":48333,
    "number":450,
    "rate":12.4,
    "state":"TX",
    "name":"Mills County"
  },
  {
    "id":48335,
    "number":696,
    "rate":9.6,
    "state":"TX",
    "name":"Mitchell County"
  },
  {
    "id":48337,
    "number":1646,
    "rate":11.2,
    "state":"TX",
    "name":"Montague County"
  },
  {
    "id":48339,
    "number":35479,
    "rate":10.4,
    "state":"TX",
    "name":"Montgomery County"
  },
  {
    "id":48341,
    "number":1387,
    "rate":9.5,
    "state":"TX",
    "name":"Moore County"
  },
  {
    "id":48343,
    "number":1144,
    "rate":12,
    "state":"TX",
    "name":"Morris County"
  },
  {
    "id":48345,
    "number":122,
    "rate":13.3,
    "state":"TX",
    "name":"Motley County"
  },
  {
    "id":48347,
    "number":4835,
    "rate":10.5,
    "state":"TX",
    "name":"Nacogdoches County"
  },
  {
    "id":48349,
    "number":3937,
    "rate":11.6,
    "state":"TX",
    "name":"Navarro County"
  },
  {
    "id":48351,
    "number":1366,
    "rate":12.8,
    "state":"TX",
    "name":"Newton County"
  },
  {
    "id":48353,
    "number":1162,
    "rate":10.9,
    "state":"TX",
    "name":"Nolan County"
  },
  {
    "id":48355,
    "number":25105,
    "rate":10.1,
    "state":"TX",
    "name":"Nueces County"
  },
  {
    "id":48357,
    "number":602,
    "rate":8.7,
    "state":"TX",
    "name":"Ochiltree County"
  },
  {
    "id":48359,
    "number":136,
    "rate":10.1,
    "state":"TX",
    "name":"Oldham County"
  },
  {
    "id":48361,
    "number":5834,
    "rate":9.7,
    "state":"TX",
    "name":"Orange County"
  },
  {
    "id":48363,
    "number":2496,
    "rate":12.3,
    "state":"TX",
    "name":"Palo Pinto County"
  },
  {
    "id":48365,
    "number":1979,
    "rate":11.3,
    "state":"TX",
    "name":"Panola County"
  },
  {
    "id":48367,
    "number":9448,
    "rate":10.8,
    "state":"TX",
    "name":"Parker County"
  },
  {
    "id":48369,
    "number":591,
    "rate":8.7,
    "state":"TX",
    "name":"Parmer County"
  },
  {
    "id":48371,
    "number":1214,
    "rate":10.6,
    "state":"TX",
    "name":"Pecos County"
  },
  {
    "id":48373,
    "number":4152,
    "rate":11.8,
    "state":"TX",
    "name":"Polk County"
  },
  {
    "id":48375,
    "number":8058,
    "rate":9.4,
    "state":"TX",
    "name":"Potter County"
  },
  {
    "id":48377,
    "number":511,
    "rate":9.8,
    "state":"TX",
    "name":"Presidio County"
  },
  {
    "id":48379,
    "number":1023,
    "rate":12.1,
    "state":"TX",
    "name":"Rains County"
  },
  {
    "id":48381,
    "number":7536,
    "rate":8.3,
    "state":"TX",
    "name":"Randall County"
  },
  {
    "id":48383,
    "number":225,
    "rate":9.6,
    "state":"TX",
    "name":"Reagan County"
  },
  {
    "id":48385,
    "number":332,
    "rate":12.3,
    "state":"TX",
    "name":"Real County"
  },
  {
    "id":48387,
    "number":1216,
    "rate":12.4,
    "state":"TX",
    "name":"Red River County"
  },
  {
    "id":48389,
    "number":895,
    "rate":8.6,
    "state":"TX",
    "name":"Reeves County"
  },
  {
    "id":48391,
    "number":610,
    "rate":11.4,
    "state":"TX",
    "name":"Refugio County"
  },
  {
    "id":48393,
    "number":69,
    "rate":11.2,
    "state":"TX",
    "name":"Roberts County"
  },
  {
    "id":48395,
    "number":1415,
    "rate":11.8,
    "state":"TX",
    "name":"Robertson County"
  },
  {
    "id":48397,
    "number":5059,
    "rate":8.9,
    "state":"TX",
    "name":"Rockwall County"
  },
  {
    "id":48399,
    "number":869,
    "rate":11.4,
    "state":"TX",
    "name":"Runnels County"
  },
  {
    "id":48401,
    "number":4834,
    "rate":12,
    "state":"TX",
    "name":"Rusk County"
  },
  {
    "id":48403,
    "number":1159,
    "rate":14,
    "state":"TX",
    "name":"Sabine County"
  },
  {
    "id":48405,
    "number":953,
    "rate":13.9,
    "state":"TX",
    "name":"San Augustine County"
  },
  {
    "id":48407,
    "number":2590,
    "rate":12.9,
    "state":"TX",
    "name":"San Jacinto County"
  },
  {
    "id":48409,
    "number":5117,
    "rate":11.3,
    "state":"TX",
    "name":"San Patricio County"
  },
  {
    "id":48411,
    "number":482,
    "rate":10.4,
    "state":"TX",
    "name":"San Saba County"
  },
  {
    "id":48413,
    "number":226,
    "rate":10.3,
    "state":"TX",
    "name":"Schleicher County"
  },
  {
    "id":48415,
    "number":1096,
    "rate":8.9,
    "state":"TX",
    "name":"Scurry County"
  },
  {
    "id":48417,
    "number":270,
    "rate":10.9,
    "state":"TX",
    "name":"Shackelford County"
  },
  {
    "id":48419,
    "number":2159,
    "rate":11.7,
    "state":"TX",
    "name":"Shelby County"
  },
  {
    "id":48421,
    "number":218,
    "rate":10.5,
    "state":"TX",
    "name":"Sherman County"
  },
  {
    "id":48423,
    "number":16576,
    "rate":10.8,
    "state":"TX",
    "name":"Smith County"
  },
  {
    "id":48425,
    "number":694,
    "rate":11.1,
    "state":"TX",
    "name":"Somervell County"
  },
  {
    "id":48427,
    "number":3399,
    "rate":8.8,
    "state":"TX",
    "name":"Starr County"
  },
  {
    "id":48429,
    "number":780,
    "rate":11.1,
    "state":"TX",
    "name":"Stephens County"
  },
  {
    "id":48431,
    "number":94,
    "rate":10.8,
    "state":"TX",
    "name":"Sterling County"
  },
  {
    "id":48433,
    "number":141,
    "rate":12.6,
    "state":"TX",
    "name":"Stonewall County"
  },
  {
    "id":48435,
    "number":306,
    "rate":10.9,
    "state":"TX",
    "name":"Sutton County"
  },
  {
    "id":48437,
    "number":606,
    "rate":10.7,
    "state":"TX",
    "name":"Swisher County"
  },
  {
    "id":48439,
    "number":146809,
    "rate":11.2,
    "state":"TX",
    "name":"Tarrant County"
  },
  {
    "id":48441,
    "number":9454,
    "rate":9.9,
    "state":"TX",
    "name":"Taylor County"
  },
  {
    "id":48443,
    "number":77,
    "rate":10.8,
    "state":"TX",
    "name":"Terrell County"
  },
  {
    "id":48445,
    "number":968,
    "rate":10.8,
    "state":"TX",
    "name":"Terry County"
  },
  {
    "id":48447,
    "number":143,
    "rate":11.7,
    "state":"TX",
    "name":"Throckmorton County"
  },
  {
    "id":48449,
    "number":2131,
    "rate":9.7,
    "state":"TX",
    "name":"Titus County"
  },
  {
    "id":48451,
    "number":7976,
    "rate":9.6,
    "state":"TX",
    "name":"Tom Green County"
  },
  {
    "id":48453,
    "number":49351,
    "rate":6.1,
    "state":"TX",
    "name":"Travis County"
  },
  {
    "id":48455,
    "number":1330,
    "rate":12,
    "state":"TX",
    "name":"Trinity County"
  },
  {
    "id":48457,
    "number":1989,
    "rate":11.9,
    "state":"TX",
    "name":"Tyler County"
  },
  {
    "id":48459,
    "number":3488,
    "rate":11.9,
    "state":"TX",
    "name":"Upshur County"
  },
  {
    "id":48461,
    "number":237,
    "rate":10.3,
    "state":"TX",
    "name":"Upton County"
  },
  {
    "id":48463,
    "number":1969,
    "rate":10.8,
    "state":"TX",
    "name":"Uvalde County"
  },
  {
    "id":48465,
    "number":3052,
    "rate":9.3,
    "state":"TX",
    "name":"Val Verde County"
  },
  {
    "id":48467,
    "number":4460,
    "rate":11.5,
    "state":"TX",
    "name":"Van Zandt County"
  },
  {
    "id":48469,
    "number":7465,
    "rate":11.8,
    "state":"TX",
    "name":"Victoria County"
  },
  {
    "id":48471,
    "number":4828,
    "rate":8.9,
    "state":"TX",
    "name":"Walker County"
  },
  {
    "id":48473,
    "number":3224,
    "rate":10.6,
    "state":"TX",
    "name":"Waller County"
  },
  {
    "id":48475,
    "number":758,
    "rate":10,
    "state":"TX",
    "name":"Ward County"
  },
  {
    "id":48477,
    "number":2916,
    "rate":11.6,
    "state":"TX",
    "name":"Washington County"
  },
  {
    "id":48479,
    "number":15375,
    "rate":9.6,
    "state":"TX",
    "name":"Webb County"
  },
  {
    "id":48483,
    "number":426,
    "rate":10.6,
    "state":"TX",
    "name":"Wheeler County"
  },
  {
    "id":48481,
    "number":3166,
    "rate":10.8,
    "state":"TX",
    "name":"Wharton County"
  },
  {
    "id":48485,
    "number":9910,
    "rate":10.3,
    "state":"TX",
    "name":"Wichita County"
  },
  {
    "id":48487,
    "number":1086,
    "rate":11.3,
    "state":"TX",
    "name":"Wilbarger County"
  },
  {
    "id":48489,
    "number":1305,
    "rate":8.4,
    "state":"TX",
    "name":"Willacy County"
  },
  {
    "id":48491,
    "number":26138,
    "rate":8.2,
    "state":"TX",
    "name":"Williamson County"
  },
  {
    "id":48493,
    "number":3091,
    "rate":9.7,
    "state":"TX",
    "name":"Wilson County"
  },
  {
    "id":48495,
    "number":463,
    "rate":9.4,
    "state":"TX",
    "name":"Winkler County"
  },
  {
    "id":48497,
    "number":4345,
    "rate":10,
    "state":"TX",
    "name":"Wise County"
  },
  {
    "id":48499,
    "number":4054,
    "rate":12.4,
    "state":"TX",
    "name":"Wood County"
  },
  {
    "id":48501,
    "number":494,
    "rate":9.4,
    "state":"TX",
    "name":"Yoakum County"
  },
  {
    "id":48503,
    "number":1441,
    "rate":10.6,
    "state":"TX",
    "name":"Young County"
  },
  {
    "id":48505,
    "number":814,
    "rate":9,
    "state":"TX",
    "name":"Zapata County"
  },
  {
    "id":48507,
    "number":744,
    "rate":9.4,
    "state":"TX",
    "name":"Zavala County"
  },
  {
    "id":49001,
    "number":338,
    "rate":8.1,
    "state":"UT",
    "name":"Beaver County"
  },
  {
    "id":49003,
    "number":3069,
    "rate":9.5,
    "state":"UT",
    "name":"Box Elder County"
  },
  {
    "id":49005,
    "number":4796,
    "rate":6.4,
    "state":"UT",
    "name":"Cache County"
  },
  {
    "id":49007,
    "number":1401,
    "rate":9.4,
    "state":"UT",
    "name":"Carbon County"
  },
  {
    "id":49009,
    "number":82,
    "rate":10.2,
    "state":"UT",
    "name":"Daggett County"
  },
  {
    "id":49011,
    "number":14428,
    "rate":7.2,
    "state":"UT",
    "name":"Davis County"
  },
  {
    "id":49013,
    "number":948,
    "rate":7.7,
    "state":"UT",
    "name":"Duchesne County"
  },
  {
    "id":49015,
    "number":560,
    "rate":7.7,
    "state":"UT",
    "name":"Emery County"
  },
  {
    "id":49017,
    "number":368,
    "rate":10,
    "state":"UT",
    "name":"Garfield County"
  },
  {
    "id":49019,
    "number":548,
    "rate":7.8,
    "state":"UT",
    "name":"Grand County"
  },
  {
    "id":49021,
    "number":2131,
    "rate":6.9,
    "state":"UT",
    "name":"Iron County"
  },
  {
    "id":49023,
    "number":543,
    "rate":8.6,
    "state":"UT",
    "name":"Juab County"
  },
  {
    "id":49025,
    "number":522,
    "rate":9.7,
    "state":"UT",
    "name":"Kane County"
  },
  {
    "id":49027,
    "number":803,
    "rate":9.8,
    "state":"UT",
    "name":"Millard County"
  },
  {
    "id":49029,
    "number":475,
    "rate":7.8,
    "state":"UT",
    "name":"Morgan County"
  },
  {
    "id":49031,
    "number":109,
    "rate":10.2,
    "state":"UT",
    "name":"Piute County"
  },
  {
    "id":49033,
    "number":139,
    "rate":9.2,
    "state":"UT",
    "name":"Rich County"
  },
  {
    "id":49035,
    "number":51938,
    "rate":7.1,
    "state":"UT",
    "name":"Salt Lake County"
  },
  {
    "id":49037,
    "number":994,
    "rate":10.5,
    "state":"UT",
    "name":"San Juan County"
  },
  {
    "id":49039,
    "number":1466,
    "rate":7.9,
    "state":"UT",
    "name":"Sanpete County"
  },
  {
    "id":49041,
    "number":1382,
    "rate":10,
    "state":"UT",
    "name":"Sevier County"
  },
  {
    "id":49043,
    "number":1188,
    "rate":4.4,
    "state":"UT",
    "name":"Summit County"
  },
  {
    "id":49045,
    "number":3409,
    "rate":9.2,
    "state":"UT",
    "name":"Tooele County"
  },
  {
    "id":49047,
    "number":1903,
    "rate":8.6,
    "state":"UT",
    "name":"Uintah County"
  },
  {
    "id":49049,
    "number":18811,
    "rate":5.7,
    "state":"UT",
    "name":"Utah County"
  },
  {
    "id":49051,
    "number":1041,
    "rate":6.4,
    "state":"UT",
    "name":"Wasatch County"
  },
  {
    "id":49053,
    "number":7065,
    "rate":7.2,
    "state":"UT",
    "name":"Washington County"
  },
  {
    "id":49055,
    "number":166,
    "rate":8.8,
    "state":"UT",
    "name":"Wayne County"
  },
  {
    "id":49057,
    "number":13311,
    "rate":8.3,
    "state":"UT",
    "name":"Weber County"
  },
  {
    "id":51001,
    "number":3109,
    "rate":12.1,
    "state":"VA",
    "name":"Accomack County"
  },
  {
    "id":51510,
    "number":7360,
    "rate":6.2,
    "state":"VA",
    "name":"Alexandria city"
  },
  {
    "id":51003,
    "number":6828,
    "rate":9.1,
    "state":"VA",
    "name":"Albemarle County"
  },
  {
    "id":51005,
    "number":1410,
    "rate":11.2,
    "state":"VA",
    "name":"Alleghany County"
  },
  {
    "id":51007,
    "number":1162,
    "rate":12,
    "state":"VA",
    "name":"Amelia County"
  },
  {
    "id":51009,
    "number":3556,
    "rate":14.4,
    "state":"VA",
    "name":"Amherst County"
  },
  {
    "id":51011,
    "number":1260,
    "rate":10.9,
    "state":"VA",
    "name":"Appomattox County"
  },
  {
    "id":51013,
    "number":8891,
    "rate":4.9,
    "state":"VA",
    "name":"Arlington County"
  },
  {
    "id":51015,
    "number":6259,
    "rate":11,
    "state":"VA",
    "name":"Augusta County"
  },
  {
    "id":51017,
    "number":429,
    "rate":11.3,
    "state":"VA",
    "name":"Bath County"
  },
  {
    "id":51515,
    "number":571,
    "rate":12.4,
    "state":"",
    "name":""
  },
  {
    "id":51019,
    "number":5818,
    "rate":10.9,
    "state":"VA",
    "name":"Bedford County"
  },
  {
    "id":51021,
    "number":621,
    "rate":11.4,
    "state":"VA",
    "name":"Bland County"
  },
  {
    "id":51023,
    "number":2888,
    "rate":11.4,
    "state":"VA",
    "name":"Botetourt County"
  },
  {
    "id":51520,
    "number":1577,
    "rate":11.5,
    "state":"VA",
    "name":"Bristol City"
  },
  {
    "id":51025,
    "number":1654,
    "rate":12.3,
    "state":"VA",
    "name":"Brunswick County"
  },
  {
    "id":51027,
    "number":2360,
    "rate":12.4,
    "state":"VA",
    "name":"Buchanan County"
  },
  {
    "id":51029,
    "number":1960,
    "rate":14.5,
    "state":"VA",
    "name":"Buckingham County"
  },
  {
    "id":51530,
    "number":513,
    "rate":10.3,
    "state":"VA",
    "name":"Buena Vista City"
  },
  {
    "id":51031,
    "number":4439,
    "rate":10.5,
    "state":"VA",
    "name":"Campbell County"
  },
  {
    "id":51033,
    "number":2388,
    "rate":11.1,
    "state":"VA",
    "name":"Caroline County"
  },
  {
    "id":51035,
    "number":2640,
    "rate":11.3,
    "state":"VA",
    "name":"Carroll County"
  },
  {
    "id":51036,
    "number":875,
    "rate":15,
    "state":"VA",
    "name":"Charles City County"
  },
  {
    "id":51037,
    "number":1139,
    "rate":12.1,
    "state":"VA",
    "name":"Charlotte County"
  },
  {
    "id":51540,
    "number":2916,
    "rate":8.1,
    "state":"VA",
    "name":"Charlottesville City"
  },
  {
    "id":51550,
    "number":17920,
    "rate":10.8,
    "state":"VA",
    "name":"Chesapeake City"
  },
  {
    "id":51041,
    "number":21135,
    "rate":9.1,
    "state":"VA",
    "name":"Chesterfield County"
  },
  {
    "id":51043,
    "number":1192,
    "rate":11,
    "state":"VA",
    "name":"Clarke County"
  },
  {
    "id":51570,
    "number":1482,
    "rate":11.3,
    "state":"VA",
    "name":"Colonial Heights City"
  },
  {
    "id":51580,
    "number":500,
    "rate":11.3,
    "state":"",
    "name":""
  },
  {
    "id":51045,
    "number":448,
    "rate":11,
    "state":"VA",
    "name":"Craig County"
  },
  {
    "id":51047,
    "number":3835,
    "rate":11.2,
    "state":"VA",
    "name":"Culpeper County"
  },
  {
    "id":51049,
    "number":975,
    "rate":13,
    "state":"VA",
    "name":"Cumberland County"
  },
  {
    "id":51590,
    "number":4588,
    "rate":14.1,
    "state":"VA",
    "name":"Danville City"
  },
  {
    "id":51051,
    "number":1340,
    "rate":11,
    "state":"VA",
    "name":"Dickenson County"
  },
  {
    "id":51053,
    "number":2777,
    "rate":13,
    "state":"VA",
    "name":"Dinwiddie County"
  },
  {
    "id":51595,
    "number":561,
    "rate":13.5,
    "state":"VA",
    "name":"Emporia City"
  },
  {
    "id":51057,
    "number":1186,
    "rate":13.8,
    "state":"VA",
    "name":"Essex County"
  },
  {
    "id":51600,
    "number":1407,
    "rate":7.9,
    "state":"VA",
    "name":"Fairfax City"
  },
  {
    "id":51059,
    "number":53869,
    "rate":6.6,
    "state":"VA",
    "name":"Fairfax County"
  },
  {
    "id":51610,
    "number":1008,
    "rate":10.6,
    "state":"VA",
    "name":"Falls Church City"
  },
  {
    "id":51061,
    "number":5126,
    "rate":10.5,
    "state":"VA",
    "name":"Fauquier County"
  },
  {
    "id":51063,
    "number":1217,
    "rate":10.3,
    "state":"VA",
    "name":"Floyd County"
  },
  {
    "id":51065,
    "number":2170,
    "rate":11,
    "state":"VA",
    "name":"Fluvanna County"
  },
  {
    "id":51620,
    "number":910,
    "rate":14.7,
    "state":"VA",
    "name":"Franklin City"
  },
  {
    "id":51067,
    "number":5330,
    "rate":12.3,
    "state":"VA",
    "name":"Franklin County"
  },
  {
    "id":51069,
    "number":5560,
    "rate":9.4,
    "state":"VA",
    "name":"Frederick County"
  },
  {
    "id":51630,
    "number":1819,
    "rate":9.1,
    "state":"VA",
    "name":"Fredericksburg City"
  },
  {
    "id":51640,
    "number":595,
    "rate":11.5,
    "state":"VA",
    "name":"Galax City"
  },
  {
    "id":51071,
    "number":1480,
    "rate":11.3,
    "state":"VA",
    "name":"Giles County"
  },
  {
    "id":51073,
    "number":3630,
    "rate":12.8,
    "state":"VA",
    "name":"Gloucester County"
  },
  {
    "id":51075,
    "number":1957,
    "rate":11.7,
    "state":"VA",
    "name":"Goochland County"
  },
  {
    "id":51077,
    "number":1395,
    "rate":11.5,
    "state":"VA",
    "name":"Grayson County"
  },
  {
    "id":51079,
    "number":1352,
    "rate":9.8,
    "state":"VA",
    "name":"Greene County"
  },
  {
    "id":51081,
    "number":1335,
    "rate":13.9,
    "state":"VA",
    "name":"Greensville County"
  },
  {
    "id":51083,
    "number":4130,
    "rate":15.1,
    "state":"VA",
    "name":"Halifax County"
  },
  {
    "id":51650,
    "number":12650,
    "rate":12.4,
    "state":"VA",
    "name":"Hampton City"
  },
  {
    "id":51085,
    "number":7096,
    "rate":9.6,
    "state":"VA",
    "name":"Hanover County"
  },
  {
    "id":51660,
    "number":2596,
    "rate":7,
    "state":"VA",
    "name":"Harrisonburg City"
  },
  {
    "id":51087,
    "number":22726,
    "rate":9.7,
    "state":"VA",
    "name":"Henrico County"
  },
  {
    "id":51089,
    "number":6129,
    "rate":14.9,
    "state":"VA",
    "name":"Henry County"
  },
  {
    "id":51670,
    "number":2281,
    "rate":14,
    "state":"VA",
    "name":"Hopewell City"
  },
  {
    "id":51091,
    "number":243,
    "rate":12.8,
    "state":"VA",
    "name":"Highland County"
  },
  {
    "id":51093,
    "number":3452,
    "rate":12.8,
    "state":"VA",
    "name":"Isle of Wight County"
  },
  {
    "id":51095,
    "number":5747,
    "rate":10.9,
    "state":"VA",
    "name":"James City County"
  },
  {
    "id":51097,
    "number":696,
    "rate":12.6,
    "state":"VA",
    "name":"King and Queen County"
  },
  {
    "id":51099,
    "number":1777,
    "rate":10.3,
    "state":"VA",
    "name":"King George County"
  },
  {
    "id":51101,
    "number":1283,
    "rate":10.9,
    "state":"VA",
    "name":"King William County"
  },
  {
    "id":51103,
    "number":1277,
    "rate":13.7,
    "state":"VA",
    "name":"Lancaster County"
  },
  {
    "id":51105,
    "number":2247,
    "rate":11.2,
    "state":"VA",
    "name":"Lee County"
  },
  {
    "id":51678,
    "number":442,
    "rate":8.8,
    "state":"",
    "name":""
  },
  {
    "id":51107,
    "number":16152,
    "rate":7.1,
    "state":"VA",
    "name":"Loudoun County"
  },
  {
    "id":51109,
    "number":2710,
    "rate":10.6,
    "state":"VA",
    "name":"Louisa County"
  },
  {
    "id":51111,
    "number":1302,
    "rate":13,
    "state":"VA",
    "name":"Lunenburg County"
  },
  {
    "id":51680,
    "number":6365,
    "rate":11.3,
    "state":"VA",
    "name":"Lynchburg City"
  },
  {
    "id":51113,
    "number":1210,
    "rate":12,
    "state":"VA",
    "name":"Madison County"
  },
  {
    "id":51683,
    "number":2408,
    "rate":8.5,
    "state":"VA",
    "name":"Manassas City"
  },
  {
    "id":51685,
    "number":979,
    "rate":8.9,
    "state":"VA",
    "name":"Manassas Park City"
  },
  {
    "id":51690,
    "number":1401,
    "rate":13.5,
    "state":"VA",
    "name":"Martinsville City"
  },
  {
    "id":51115,
    "number":920,
    "rate":12.8,
    "state":"VA",
    "name":"Mathews County"
  },
  {
    "id":51117,
    "number":3291,
    "rate":13.2,
    "state":"VA",
    "name":"Mecklenburg County"
  },
  {
    "id":51119,
    "number":1145,
    "rate":12.8,
    "state":"VA",
    "name":"Middlesex County"
  },
  {
    "id":51121,
    "number":5229,
    "rate":7.2,
    "state":"VA",
    "name":"Montgomery County"
  },
  {
    "id":51125,
    "number":1517,
    "rate":12.9,
    "state":"VA",
    "name":"Nelson County"
  },
  {
    "id":51127,
    "number":1564,
    "rate":10.7,
    "state":"VA",
    "name":"New Kent County"
  },
  {
    "id":51700,
    "number":17783,
    "rate":13.5,
    "state":"VA",
    "name":"Newport News City"
  },
  {
    "id":51710,
    "number":18520,
    "rate":10,
    "state":"VA",
    "name":"Norfolk City"
  },
  {
    "id":51131,
    "number":1523,
    "rate":15.8,
    "state":"VA",
    "name":"Northampton County"
  },
  {
    "id":51133,
    "number":1425,
    "rate":14,
    "state":"VA",
    "name":"Northumberland County"
  },
  {
    "id":51720,
    "number":318,
    "rate":10.4,
    "state":"VA",
    "name":"Norton City"
  },
  {
    "id":51135,
    "number":1690,
    "rate":13.6,
    "state":"VA",
    "name":"Nottoway County"
  },
  {
    "id":51137,
    "number":2749,
    "rate":10.7,
    "state":"VA",
    "name":"Orange County"
  },
  {
    "id":51139,
    "number":2036,
    "rate":11,
    "state":"VA",
    "name":"Page County"
  },
  {
    "id":51141,
    "number":1839,
    "rate":12.5,
    "state":"VA",
    "name":"Patrick County"
  },
  {
    "id":51730,
    "number":3909,
    "rate":15.9,
    "state":"VA",
    "name":"Petersburg City"
  },
  {
    "id":51143,
    "number":6821,
    "rate":14,
    "state":"VA",
    "name":"Pittsylvania County"
  },
  {
    "id":51735,
    "number":999,
    "rate":11.1,
    "state":"VA",
    "name":"Poquoson City"
  },
  {
    "id":51740,
    "number":10402,
    "rate":14.5,
    "state":"VA",
    "name":"Portsmouth City"
  },
  {
    "id":51145,
    "number":2372,
    "rate":11,
    "state":"VA",
    "name":"Powhatan County"
  },
  {
    "id":51147,
    "number":2006,
    "rate":11.7,
    "state":"VA",
    "name":"Prince Edward County"
  },
  {
    "id":51149,
    "number":3710,
    "rate":13.2,
    "state":"VA",
    "name":"Prince George County"
  },
  {
    "id":51153,
    "number":23035,
    "rate":7.8,
    "state":"VA",
    "name":"Prince William County"
  },
  {
    "id":51155,
    "number":3303,
    "rate":12,
    "state":"VA",
    "name":"Pulaski County"
  },
  {
    "id":51750,
    "number":966,
    "rate":7.9,
    "state":"VA",
    "name":"Radford City"
  },
  {
    "id":51157,
    "number":692,
    "rate":11.7,
    "state":"VA",
    "name":"Rappahannock County"
  },
  {
    "id":51760,
    "number":17298,
    "rate":10.6,
    "state":"VA",
    "name":"Richmond City"
  },
  {
    "id":51159,
    "number":930,
    "rate":12.6,
    "state":"VA",
    "name":"Richmond County"
  },
  {
    "id":51770,
    "number":8460,
    "rate":11.4,
    "state":"VA",
    "name":"Roanoke City"
  },
  {
    "id":51161,
    "number":8627,
    "rate":12.1,
    "state":"VA",
    "name":"Roanoke County"
  },
  {
    "id":51163,
    "number":2237,
    "rate":12.5,
    "state":"VA",
    "name":"Rockbridge County"
  },
  {
    "id":51165,
    "number":6207,
    "rate":10.8,
    "state":"VA",
    "name":"Rockingham County"
  },
  {
    "id":51167,
    "number":2727,
    "rate":12.3,
    "state":"VA",
    "name":"Russell County"
  },
  {
    "id":51775,
    "number":1878,
    "rate":9.9,
    "state":"VA",
    "name":"Salem City"
  },
  {
    "id":51169,
    "number":2432,
    "rate":13.5,
    "state":"VA",
    "name":"Scott County"
  },
  {
    "id":51173,
    "number":2558,
    "rate":10.4,
    "state":"VA",
    "name":"Smyth County"
  },
  {
    "id":51171,
    "number":3934,
    "rate":12.1,
    "state":"VA",
    "name":"Shenandoah County"
  },
  {
    "id":51175,
    "number":2040,
    "rate":14.3,
    "state":"VA",
    "name":"Southampton County"
  },
  {
    "id":51177,
    "number":11106,
    "rate":12.5,
    "state":"VA",
    "name":"Spotsylvania County"
  },
  {
    "id":51179,
    "number":7410,
    "rate":7.9,
    "state":"VA",
    "name":"Stafford County"
  },
  {
    "id":51790,
    "number":2113,
    "rate":11.3,
    "state":"VA",
    "name":"Staunton City"
  },
  {
    "id":51800,
    "number":6718,
    "rate":10.9,
    "state":"VA",
    "name":"Suffolk City"
  },
  {
    "id":51181,
    "number":782,
    "rate":14.6,
    "state":"VA",
    "name":"Surry County"
  },
  {
    "id":51183,
    "number":1441,
    "rate":14.8,
    "state":"VA",
    "name":"Sussex County"
  },
  {
    "id":51185,
    "number":5044,
    "rate":14.6,
    "state":"VA",
    "name":"Tazewell County"
  },
  {
    "id":51810,
    "number":28174,
    "rate":8.5,
    "state":"VA",
    "name":"Virginia Beach City"
  },
  {
    "id":51187,
    "number":2811,
    "rate":10,
    "state":"VA",
    "name":"Warren County"
  },
  {
    "id":51191,
    "number":5601,
    "rate":13.1,
    "state":"VA",
    "name":"Washington County"
  },
  {
    "id":51820,
    "number":1677,
    "rate":10.7,
    "state":"VA",
    "name":"Waynesboro City"
  },
  {
    "id":51193,
    "number":1849,
    "rate":13.4,
    "state":"VA",
    "name":"Westmoreland County"
  },
  {
    "id":51830,
    "number":1093,
    "rate":9.6,
    "state":"VA",
    "name":"Williamsburg City"
  },
  {
    "id":51840,
    "number":1945,
    "rate":9.8,
    "state":"VA",
    "name":"Winchester City"
  },
  {
    "id":51195,
    "number":4323,
    "rate":13.8,
    "state":"VA",
    "name":"Wise County"
  },
  {
    "id":51197,
    "number":2750,
    "rate":12.1,
    "state":"VA",
    "name":"Wythe County"
  },
  {
    "id":51199,
    "number":4590,
    "rate":9.6,
    "state":"VA",
    "name":"York County"
  },
  {
    "id":50001,
    "number":2073,
    "rate":7.4,
    "state":"VT",
    "name":"Addison County"
  },
  {
    "id":50003,
    "number":2634,
    "rate":9.3,
    "state":"VT",
    "name":"Bennington County"
  },
  {
    "id":50005,
    "number":1857,
    "rate":7.9,
    "state":"VT",
    "name":"Caledonia County"
  },
  {
    "id":50007,
    "number":7497,
    "rate":6.3,
    "state":"VT",
    "name":"Chittenden County"
  },
  {
    "id":50009,
    "number":509,
    "rate":10.2,
    "state":"VT",
    "name":"Essex County"
  },
  {
    "id":50011,
    "number":2887,
    "rate":8.1,
    "state":"VT",
    "name":"Franklin County"
  },
  {
    "id":50013,
    "number":416,
    "rate":7.6,
    "state":"VT",
    "name":"Grand Isle County"
  },
  {
    "id":50015,
    "number":1357,
    "rate":7.3,
    "state":"VT",
    "name":"Lamoille County"
  },
  {
    "id":50017,
    "number":1620,
    "rate":7.3,
    "state":"VT",
    "name":"Orange County"
  },
  {
    "id":50019,
    "number":1850,
    "rate":8.8,
    "state":"VT",
    "name":"Orleans County"
  },
  {
    "id":50021,
    "number":4543,
    "rate":9.5,
    "state":"VT",
    "name":"Rutland County"
  },
  {
    "id":50023,
    "number":3761,
    "rate":8.3,
    "state":"VT",
    "name":"Washington County"
  },
  {
    "id":50025,
    "number":2671,
    "rate":7.8,
    "state":"VT",
    "name":"Windham County"
  },
  {
    "id":50027,
    "number":3569,
    "rate":8.1,
    "state":"VT",
    "name":"Windsor County"
  },
  {
    "id":53001,
    "number":1213,
    "rate":10.4,
    "state":"WA",
    "name":"Adams County"
  },
  {
    "id":53003,
    "number":2032,
    "rate":12.1,
    "state":"WA",
    "name":"Asotin County"
  },
  {
    "id":53005,
    "number":12447,
    "rate":9.7,
    "state":"WA",
    "name":"Benton County"
  },
  {
    "id":53007,
    "number":5056,
    "rate":9.4,
    "state":"WA",
    "name":"Chelan County"
  },
  {
    "id":53009,
    "number":6555,
    "rate":11.4,
    "state":"WA",
    "name":"Clallam County"
  },
  {
    "id":53011,
    "number":28236,
    "rate":9,
    "state":"WA",
    "name":"Clark County"
  },
  {
    "id":53013,
    "number":369,
    "rate":11.7,
    "state":"WA",
    "name":"Columbia County"
  },
  {
    "id":53015,
    "number":8740,
    "rate":11.5,
    "state":"WA",
    "name":"Cowlitz County"
  },
  {
    "id":53017,
    "number":2436,
    "rate":8.8,
    "state":"WA",
    "name":"Douglas County"
  },
  {
    "id":53019,
    "number":607,
    "rate":10.1,
    "state":"WA",
    "name":"Ferry County"
  },
  {
    "id":53021,
    "number":3930,
    "rate":7.2,
    "state":"WA",
    "name":"Franklin County"
  },
  {
    "id":53023,
    "number":259,
    "rate":14.8,
    "state":"WA",
    "name":"Garfield County"
  },
  {
    "id":53025,
    "number":5163,
    "rate":8.5,
    "state":"WA",
    "name":"Grant County"
  },
  {
    "id":53027,
    "number":7262,
    "rate":13.2,
    "state":"WA",
    "name":"Grays Harbor County"
  },
  {
    "id":53029,
    "number":6051,
    "rate":9.8,
    "state":"WA",
    "name":"Island County"
  },
  {
    "id":53031,
    "number":2551,
    "rate":10.1,
    "state":"WA",
    "name":"Jefferson County"
  },
  {
    "id":53033,
    "number":107296,
    "rate":7,
    "state":"WA",
    "name":"King County"
  },
  {
    "id":53035,
    "number":16486,
    "rate":8.5,
    "state":"WA",
    "name":"Kitsap County"
  },
  {
    "id":53037,
    "number":2230,
    "rate":7,
    "state":"WA",
    "name":"Kittitas County"
  },
  {
    "id":53039,
    "number":1597,
    "rate":10.1,
    "state":"WA",
    "name":"Klickitat County"
  },
  {
    "id":53041,
    "number":5827,
    "rate":10.3,
    "state":"WA",
    "name":"Lewis County"
  },
  {
    "id":53043,
    "number":855,
    "rate":10.8,
    "state":"WA",
    "name":"Lincoln County"
  },
  {
    "id":53045,
    "number":4859,
    "rate":10.2,
    "state":"WA",
    "name":"Mason County"
  },
  {
    "id":53047,
    "number":2818,
    "rate":9.2,
    "state":"WA",
    "name":"Okanogan County"
  },
  {
    "id":53049,
    "number":2103,
    "rate":12.7,
    "state":"WA",
    "name":"Pacific County"
  },
  {
    "id":53051,
    "number":1215,
    "rate":12.2,
    "state":"WA",
    "name":"Pend Oreille County"
  },
  {
    "id":53053,
    "number":58824,
    "rate":9.9,
    "state":"WA",
    "name":"Pierce County"
  },
  {
    "id":53055,
    "number":1078,
    "rate":8.2,
    "state":"WA",
    "name":"San Juan County"
  },
  {
    "id":53057,
    "number":7762,
    "rate":8.8,
    "state":"WA",
    "name":"Skagit County"
  },
  {
    "id":53059,
    "number":724,
    "rate":8.5,
    "state":"WA",
    "name":"Skamania County"
  },
  {
    "id":53061,
    "number":52523,
    "rate":9.7,
    "state":"WA",
    "name":"Snohomish County"
  },
  {
    "id":53063,
    "number":32133,
    "rate":9.1,
    "state":"WA",
    "name":"Spokane County"
  },
  {
    "id":53065,
    "number":3422,
    "rate":10.5,
    "state":"WA",
    "name":"Stevens County"
  },
  {
    "id":53067,
    "number":17905,
    "rate":9.2,
    "state":"WA",
    "name":"Thurston County"
  },
  {
    "id":53069,
    "number":377,
    "rate":11.8,
    "state":"WA",
    "name":"Wahkiakum County"
  },
  {
    "id":53071,
    "number":4108,
    "rate":9.4,
    "state":"WA",
    "name":"Walla Walla County"
  },
  {
    "id":53073,
    "number":13207,
    "rate":8.5,
    "state":"WA",
    "name":"Whatcom County"
  },
  {
    "id":53075,
    "number":2241,
    "rate":6.5,
    "state":"WA",
    "name":"Whitman County"
  },
  {
    "id":53077,
    "number":15994,
    "rate":9.7,
    "state":"WA",
    "name":"Yakima County"
  },
  {
    "id":55001,
    "number":1979,
    "rate":11.6,
    "state":"WI",
    "name":"Adams County"
  },
  {
    "id":55003,
    "number":1182,
    "rate":10,
    "state":"WI",
    "name":"Ashland County"
  },
  {
    "id":55005,
    "number":3212,
    "rate":9.2,
    "state":"WI",
    "name":"Barron County"
  },
  {
    "id":55007,
    "number":1134,
    "rate":9.5,
    "state":"WI",
    "name":"Bayfield County"
  },
  {
    "id":55009,
    "number":18034,
    "rate":9.8,
    "state":"WI",
    "name":"Brown County"
  },
  {
    "id":55011,
    "number":923,
    "rate":9.1,
    "state":"WI",
    "name":"Buffalo County"
  },
  {
    "id":55013,
    "number":1287,
    "rate":10.6,
    "state":"WI",
    "name":"Burnett County"
  },
  {
    "id":55015,
    "number":2714,
    "rate":7.6,
    "state":"WI",
    "name":"Calumet County"
  },
  {
    "id":55017,
    "number":3479,
    "rate":7.4,
    "state":"WI",
    "name":"Chippewa County"
  },
  {
    "id":55019,
    "number":2199,
    "rate":9.3,
    "state":"WI",
    "name":"Clark County"
  },
  {
    "id":55021,
    "number":3783,
    "rate":8.9,
    "state":"WI",
    "name":"Columbia County"
  },
  {
    "id":55023,
    "number":1183,
    "rate":9.4,
    "state":"WI",
    "name":"Crawford County"
  },
  {
    "id":55025,
    "number":23936,
    "rate":6.3,
    "state":"WI",
    "name":"Dane County"
  },
  {
    "id":55027,
    "number":6285,
    "rate":9.3,
    "state":"WI",
    "name":"Dodge County"
  },
  {
    "id":55029,
    "number":2185,
    "rate":9.8,
    "state":"WI",
    "name":"Door County"
  },
  {
    "id":55031,
    "number":3137,
    "rate":9.4,
    "state":"WI",
    "name":"Douglas County"
  },
  {
    "id":55033,
    "number":2716,
    "rate":8.4,
    "state":"WI",
    "name":"Dunn County"
  },
  {
    "id":55035,
    "number":5769,
    "rate":7.7,
    "state":"WI",
    "name":"Eau Claire County"
  },
  {
    "id":55037,
    "number":408,
    "rate":11.1,
    "state":"WI",
    "name":"Florence County"
  },
  {
    "id":55041,
    "number":840,
    "rate":12,
    "state":"WI",
    "name":"Forest County"
  },
  {
    "id":55043,
    "number":3167,
    "rate":8.4,
    "state":"WI",
    "name":"Grant County"
  },
  {
    "id":55045,
    "number":2754,
    "rate":10,
    "state":"WI",
    "name":"Green County"
  },
  {
    "id":55047,
    "number":1422,
    "rate":9.9,
    "state":"WI",
    "name":"Green Lake County"
  },
  {
    "id":55049,
    "number":1622,
    "rate":9.2,
    "state":"WI",
    "name":"Iowa County"
  },
  {
    "id":55051,
    "number":633,
    "rate":13,
    "state":"WI",
    "name":"Iron County"
  },
  {
    "id":55039,
    "number":6660,
    "rate":8.7,
    "state":"WI",
    "name":"Fond Du Lac County"
  },
  {
    "id":55053,
    "number":1504,
    "rate":9.8,
    "state":"WI",
    "name":"Jackson County"
  },
  {
    "id":55055,
    "number":4834,
    "rate":7.8,
    "state":"WI",
    "name":"Jefferson County"
  },
  {
    "id":55057,
    "number":2189,
    "rate":10.6,
    "state":"WI",
    "name":"Juneau County"
  },
  {
    "id":55059,
    "number":9515,
    "rate":7.9,
    "state":"WI",
    "name":"Kenosha County"
  },
  {
    "id":55061,
    "number":1370,
    "rate":8.9,
    "state":"WI",
    "name":"Kewaunee County"
  },
  {
    "id":55063,
    "number":6611,
    "rate":7.6,
    "state":"WI",
    "name":"La Crosse County"
  },
  {
    "id":55065,
    "number":1075,
    "rate":8.8,
    "state":"WI",
    "name":"Lafayette County"
  },
  {
    "id":55067,
    "number":1446,
    "rate":9.5,
    "state":"WI",
    "name":"Langlade County"
  },
  {
    "id":55069,
    "number":2099,
    "rate":9.6,
    "state":"WI",
    "name":"Lincoln County"
  },
  {
    "id":55071,
    "number":5742,
    "rate":9.3,
    "state":"WI",
    "name":"Manitowoc County"
  },
  {
    "id":55073,
    "number":9465,
    "rate":9.5,
    "state":"WI",
    "name":"Marathon County"
  },
  {
    "id":55075,
    "number":3632,
    "rate":11.2,
    "state":"WI",
    "name":"Marinette County"
  },
  {
    "id":55077,
    "number":1307,
    "rate":11,
    "state":"WI",
    "name":"Marquette County"
  },
  {
    "id":55078,
    "number":388,
    "rate":13.8,
    "state":"WI",
    "name":"Menominee County"
  },
  {
    "id":55079,
    "number":67535,
    "rate":9.8,
    "state":"WI",
    "name":"Milwaukee County"
  },
  {
    "id":55081,
    "number":2895,
    "rate":8.9,
    "state":"WI",
    "name":"Monroe County"
  },
  {
    "id":55083,
    "number":2673,
    "rate":9.3,
    "state":"WI",
    "name":"Oconto County"
  },
  {
    "id":55085,
    "number":2885,
    "rate":10.1,
    "state":"WI",
    "name":"Oneida County"
  },
  {
    "id":55087,
    "number":9968,
    "rate":7.6,
    "state":"WI",
    "name":"Outagamie County"
  },
  {
    "id":55089,
    "number":5689,
    "rate":8.8,
    "state":"WI",
    "name":"Ozaukee County"
  },
  {
    "id":55091,
    "number":559,
    "rate":10,
    "state":"WI",
    "name":"Pepin County"
  },
  {
    "id":55093,
    "number":2430,
    "rate":8.2,
    "state":"WI",
    "name":"Pierce County"
  },
  {
    "id":55095,
    "number":3497,
    "rate":10.7,
    "state":"WI",
    "name":"Polk County"
  },
  {
    "id":55097,
    "number":3854,
    "rate":7.3,
    "state":"WI",
    "name":"Portage County"
  },
  {
    "id":55099,
    "number":1327,
    "rate":12,
    "state":"WI",
    "name":"Price County"
  },
  {
    "id":55101,
    "number":14354,
    "rate":10.1,
    "state":"WI",
    "name":"Racine County"
  },
  {
    "id":55103,
    "number":1387,
    "rate":10.4,
    "state":"WI",
    "name":"Richland County"
  },
  {
    "id":55105,
    "number":11216,
    "rate":9.6,
    "state":"WI",
    "name":"Rock County"
  },
  {
    "id":55107,
    "number":970,
    "rate":8.9,
    "state":"WI",
    "name":"Rusk County"
  },
  {
    "id":55111,
    "number":5212,
    "rate":11.2,
    "state":"WI",
    "name":"Sauk County"
  },
  {
    "id":55113,
    "number":1293,
    "rate":10.1,
    "state":"WI",
    "name":"Sawyer County"
  },
  {
    "id":55115,
    "number":3057,
    "rate":9.7,
    "state":"WI",
    "name":"Shawano County"
  },
  {
    "id":55117,
    "number":8654,
    "rate":10.1,
    "state":"WI",
    "name":"Sheboygan County"
  },
  {
    "id":55109,
    "number":4812,
    "rate":7.9,
    "state":"WI",
    "name":"St Croix County"
  },
  {
    "id":55119,
    "number":1143,
    "rate":7.6,
    "state":"WI",
    "name":"Taylor County"
  },
  {
    "id":55121,
    "number":2067,
    "rate":9.6,
    "state":"WI",
    "name":"Trempealeau County"
  },
  {
    "id":55123,
    "number":1828,
    "rate":8.4,
    "state":"WI",
    "name":"Vernon County"
  },
  {
    "id":55125,
    "number":2012,
    "rate":11.7,
    "state":"WI",
    "name":"Vilas County"
  },
  {
    "id":55127,
    "number":6207,
    "rate":8.2,
    "state":"WI",
    "name":"Walworth County"
  },
  {
    "id":55129,
    "number":1207,
    "rate":9.8,
    "state":"WI",
    "name":"Washburn County"
  },
  {
    "id":55131,
    "number":8518,
    "rate":8.7,
    "state":"WI",
    "name":"Washington County"
  },
  {
    "id":55133,
    "number":21429,
    "rate":7.3,
    "state":"WI",
    "name":"Waukesha County"
  },
  {
    "id":55135,
    "number":3709,
    "rate":9.4,
    "state":"WI",
    "name":"Waupaca County"
  },
  {
    "id":55137,
    "number":1879,
    "rate":9.8,
    "state":"WI",
    "name":"Waushara County"
  },
  {
    "id":55139,
    "number":10212,
    "rate":8,
    "state":"WI",
    "name":"Winnebago County"
  },
  {
    "id":55141,
    "number":5079,
    "rate":9,
    "state":"WI",
    "name":"Wood County"
  },
  {
    "id":54001,
    "number":1721,
    "rate":13.5,
    "state":"WV",
    "name":"Barbour County"
  },
  {
    "id":54003,
    "number":9180,
    "rate":11.7,
    "state":"WV",
    "name":"Berkeley County"
  },
  {
    "id":54005,
    "number":2720,
    "rate":14.8,
    "state":"WV",
    "name":"Boone County"
  },
  {
    "id":54007,
    "number":1684,
    "rate":14.9,
    "state":"WV",
    "name":"Braxton County"
  },
  {
    "id":54009,
    "number":2691,
    "rate":14.4,
    "state":"WV",
    "name":"Brooke County"
  },
  {
    "id":54011,
    "number":10275,
    "rate":13.8,
    "state":"WV",
    "name":"Cabell County"
  },
  {
    "id":54013,
    "number":927,
    "rate":15.6,
    "state":"WV",
    "name":"Calhoun County"
  },
  {
    "id":54015,
    "number":913,
    "rate":13.2,
    "state":"WV",
    "name":"Clay County"
  },
  {
    "id":54017,
    "number":781,
    "rate":12.2,
    "state":"WV",
    "name":"Doddridge County"
  },
  {
    "id":54019,
    "number":4384,
    "rate":12.4,
    "state":"WV",
    "name":"Fayette County"
  },
  {
    "id":54021,
    "number":819,
    "rate":11.4,
    "state":"WV",
    "name":"Gilmer County"
  },
  {
    "id":54023,
    "number":1475,
    "rate":16.1,
    "state":"WV",
    "name":"Grant County"
  },
  {
    "id":54025,
    "number":3490,
    "rate":12.5,
    "state":"WV",
    "name":"Greenbrier County"
  },
  {
    "id":54027,
    "number":2195,
    "rate":12.1,
    "state":"WV",
    "name":"Hampshire County"
  },
  {
    "id":54029,
    "number":2907,
    "rate":12.3,
    "state":"WV",
    "name":"Hancock County"
  },
  {
    "id":54031,
    "number":1546,
    "rate":14.4,
    "state":"WV",
    "name":"Hardy County"
  },
  {
    "id":54033,
    "number":7080,
    "rate":13.4,
    "state":"WV",
    "name":"Harrison County"
  },
  {
    "id":54035,
    "number":2826,
    "rate":12.7,
    "state":"WV",
    "name":"Jackson County"
  },
  {
    "id":54037,
    "number":4529,
    "rate":11.3,
    "state":"WV",
    "name":"Jefferson County"
  },
  {
    "id":54039,
    "number":20569,
    "rate":13.8,
    "state":"WV",
    "name":"Kanawha County"
  },
  {
    "id":54041,
    "number":1627,
    "rate":12.8,
    "state":"WV",
    "name":"Lewis County"
  },
  {
    "id":54043,
    "number":2634,
    "rate":16.1,
    "state":"WV",
    "name":"Lincoln County"
  },
  {
    "id":54045,
    "number":4331,
    "rate":15.4,
    "state":"WV",
    "name":"Logan County"
  },
  {
    "id":54049,
    "number":5402,
    "rate":12.3,
    "state":"WV",
    "name":"Marion County"
  },
  {
    "id":54051,
    "number":3153,
    "rate":12.4,
    "state":"WV",
    "name":"Marshall County"
  },
  {
    "id":54053,
    "number":2657,
    "rate":12.7,
    "state":"WV",
    "name":"Mason County"
  },
  {
    "id":54047,
    "number":3001,
    "rate":18,
    "state":"WV",
    "name":"McDowell County"
  },
  {
    "id":54055,
    "number":7231,
    "rate":15.1,
    "state":"WV",
    "name":"Mercer County"
  },
  {
    "id":54057,
    "number":2674,
    "rate":12.6,
    "state":"WV",
    "name":"Mineral County"
  },
  {
    "id":54059,
    "number":2702,
    "rate":13.5,
    "state":"WV",
    "name":"Mingo County"
  },
  {
    "id":54061,
    "number":7312,
    "rate":9.3,
    "state":"WV",
    "name":"Monongalia County"
  },
  {
    "id":54063,
    "number":1389,
    "rate":13.3,
    "state":"WV",
    "name":"Monroe County"
  },
  {
    "id":54065,
    "number":1905,
    "rate":13.9,
    "state":"WV",
    "name":"Morgan County"
  },
  {
    "id":54067,
    "number":2883,
    "rate":14.2,
    "state":"WV",
    "name":"Nicholas County"
  },
  {
    "id":54069,
    "number":4114,
    "rate":12.1,
    "state":"WV",
    "name":"Ohio County"
  },
  {
    "id":54071,
    "number":824,
    "rate":13.7,
    "state":"WV",
    "name":"Pendleton County"
  },
  {
    "id":54073,
    "number":811,
    "rate":13.7,
    "state":"WV",
    "name":"Pleasants County"
  },
  {
    "id":54075,
    "number":969,
    "rate":13.8,
    "state":"WV",
    "name":"Pocahontas County"
  },
  {
    "id":54077,
    "number":2837,
    "rate":10.6,
    "state":"WV",
    "name":"Preston County"
  },
  {
    "id":54079,
    "number":5050,
    "rate":12,
    "state":"WV",
    "name":"Putnam County"
  },
  {
    "id":54081,
    "number":8393,
    "rate":13.8,
    "state":"WV",
    "name":"Raleigh County"
  },
  {
    "id":54083,
    "number":2690,
    "rate":11.7,
    "state":"WV",
    "name":"Randolph County"
  },
  {
    "id":54085,
    "number":1153,
    "rate":14.6,
    "state":"WV",
    "name":"Ritchie County"
  },
  {
    "id":54087,
    "number":1730,
    "rate":15.3,
    "state":"WV",
    "name":"Roane County"
  },
  {
    "id":54089,
    "number":1620,
    "rate":14.6,
    "state":"WV",
    "name":"Summers County"
  },
  {
    "id":54091,
    "number":1609,
    "rate":12.2,
    "state":"WV",
    "name":"Taylor County"
  },
  {
    "id":54093,
    "number":730,
    "rate":13.2,
    "state":"WV",
    "name":"Tucker County"
  },
  {
    "id":54095,
    "number":921,
    "rate":13.1,
    "state":"WV",
    "name":"Tyler County"
  },
  {
    "id":54097,
    "number":2341,
    "rate":12.6,
    "state":"WV",
    "name":"Upshur County"
  },
  {
    "id":54099,
    "number":5050,
    "rate":15.9,
    "state":"WV",
    "name":"Wayne County"
  },
  {
    "id":54101,
    "number":1118,
    "rate":16,
    "state":"WV",
    "name":"Webster County"
  },
  {
    "id":54103,
    "number":1614,
    "rate":12.7,
    "state":"WV",
    "name":"Wetzel County"
  },
  {
    "id":54105,
    "number":674,
    "rate":15,
    "state":"WV",
    "name":"Wirt County"
  },
  {
    "id":54107,
    "number":9082,
    "rate":13.7,
    "state":"WV",
    "name":"Wood County"
  },
  {
    "id":54109,
    "number":2489,
    "rate":14,
    "state":"WV",
    "name":"Wyoming County"
  },
  {
    "id":56001,
    "number":1668,
    "rate":5.8,
    "state":"WY",
    "name":"Albany County"
  },
  {
    "id":56003,
    "number":926,
    "rate":10.9,
    "state":"WY",
    "name":"Big Horn County"
  },
  {
    "id":56005,
    "number":2325,
    "rate":7,
    "state":"WY",
    "name":"Campbell County"
  },
  {
    "id":56007,
    "number":1023,
    "rate":8.7,
    "state":"WY",
    "name":"Carbon County"
  },
  {
    "id":56009,
    "number":976,
    "rate":9.6,
    "state":"WY",
    "name":"Converse County"
  },
  {
    "id":56011,
    "number":488,
    "rate":9.1,
    "state":"WY",
    "name":"Crook County"
  },
  {
    "id":56013,
    "number":2858,
    "rate":9.6,
    "state":"WY",
    "name":"Fremont County"
  },
  {
    "id":56015,
    "number":961,
    "rate":9.1,
    "state":"WY",
    "name":"Goshen County"
  },
  {
    "id":56017,
    "number":388,
    "rate":10.3,
    "state":"WY",
    "name":"Hot Springs County"
  },
  {
    "id":56019,
    "number":620,
    "rate":9.5,
    "state":"WY",
    "name":"Johnson County"
  },
  {
    "id":56021,
    "number":6533,
    "rate":9.3,
    "state":"WY",
    "name":"Laramie County"
  },
  {
    "id":56023,
    "number":924,
    "rate":7.3,
    "state":"WY",
    "name":"Lincoln County"
  },
  {
    "id":56025,
    "number":5174,
    "rate":8.9,
    "state":"WY",
    "name":"Natrona County"
  },
  {
    "id":56027,
    "number":173,
    "rate":8.7,
    "state":"WY",
    "name":"Niobrara County"
  },
  {
    "id":56029,
    "number":1671,
    "rate":7.6,
    "state":"WY",
    "name":"Park County"
  },
  {
    "id":56031,
    "number":587,
    "rate":8.6,
    "state":"WY",
    "name":"Platte County"
  },
  {
    "id":56033,
    "number":2010,
    "rate":9,
    "state":"WY",
    "name":"Sheridan County"
  },
  {
    "id":56035,
    "number":487,
    "rate":6.3,
    "state":"WY",
    "name":"Sublette County"
  },
  {
    "id":56037,
    "number":2549,
    "rate":8,
    "state":"WY",
    "name":"Sweetwater County"
  },
  {
    "id":56039,
    "number":820,
    "rate":4.8,
    "state":"WY",
    "name":"Teton County"
  },
  {
    "id":56041,
    "number":1235,
    "rate":8.7,
    "state":"WY",
    "name":"Uinta County"
  },
  {
    "id":56043,
    "number":681,
    "rate":11.1,
    "state":"WY",
    "name":"Washakie County"
  },
  {
    "id":56045,
    "number":526,
    "rate":9.8,
    "state":"WY",
    "name":"Weston County"
  }
]

    return diabetes;
    // return $resource('/api/unemployments/');

  });


