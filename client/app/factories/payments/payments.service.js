'use strict';

angular.module('foglightApp')
  .factory('payments', function () {

var payments2013 = [
  {
    "state":"AK",
    "FIPS":2020,
    "county":"Anchorage Borough",
    "number":8563.949999999999,
    "rate":28.677172315182847,
    "population":298633
  },
  {
    "state":"AK",
    "FIPS":2110,
    "county":"City and Borough of Juneau",
    "number":498.24,
    "rate":15.372558699207058,
    "population":32411
  },
  {
    "state":"AK",
    "FIPS":2090,
    "county":"Fairbanks North Star Borough",
    "number":4347.6,
    "rate":43.3775330000898,
    "population":100227
  },
  {
    "state":"AK",
    "FIPS":2122,
    "county":"Kenai Peninsula Borough",
    "number":123.34000000000002,
    "rate":2.165455247726395,
    "population":56958
  },
  {
    "state":"AK",
    "FIPS":2130,
    "county":"Ketchikan Gateway Borough",
    "number":14.31,
    "rate":1.043839813261361,
    "population":13709
  },
  {
    "state":"AK",
    "FIPS":2150,
    "county":"Kodiak Island Borough",
    "number":15.8,
    "rate":1.1225577264653643,
    "population":14075
  },
  {
    "state":"AK",
    "FIPS":2170,
    "county":"Matanuska-Susitna Borough",
    "number":1039.68,
    "rate":11.084244866628287,
    "population":93798
  },
  {
    "state":"AK",
    "FIPS":2240,
    "county":"Southeast Fairbanks Census Area",
    "number":22.5,
    "rate":3.1472933277381454,
    "population":7149
  },
  {
    "state":"AK",
    "FIPS":2261,
    "county":"Valdez-Cordova Census Area",
    "number":32.22,
    "rate":3.3093672966310597,
    "population":9736
  },
  {
    "state":"AL",
    "FIPS":1001,
    "county":"Autauga County",
    "number":1183.16,
    "rate":21.437164806493698,
    "population":55192
  },
  {
    "state":"AL",
    "FIPS":1003,
    "county":"Baldwin County",
    "number":31924.810000000016,
    "rate":167.53065947386935,
    "population":190561
  },
  {
    "state":"AL",
    "FIPS":1005,
    "county":"Barbour County",
    "number":322.3499999999999,
    "rate":11.864625124222457,
    "population":27169
  },
  {
    "state":"AL",
    "FIPS":1009,
    "county":"Blount County",
    "number":841.35,
    "rate":14.569335734570895,
    "population":57748
  },
  {
    "state":"AL",
    "FIPS":1011,
    "county":"Bullock County",
    "number":18.04,
    "rate":1.7036547360468408,
    "population":10589
  },
  {
    "state":"AL",
    "FIPS":1013,
    "county":"Butler County",
    "number":118.34,
    "rate":5.798422264687148,
    "population":20409
  },
  {
    "state":"AL",
    "FIPS":1015,
    "county":"Calhoun County",
    "number":3259.710000000001,
    "rate":27.79804543593943,
    "population":117264
  },
  {
    "state":"AL",
    "FIPS":1017,
    "county":"Chambers County",
    "number":399.06,
    "rate":11.707102414410185,
    "population":34087
  },
  {
    "state":"AL",
    "FIPS":1019,
    "county":"Cherokee County",
    "number":506.5,
    "rate":19.468040127608873,
    "population":26017
  },
  {
    "state":"AL",
    "FIPS":1021,
    "county":"Chilton County",
    "number":1020.3300000000002,
    "rate":23.343704957789015,
    "population":43709
  },
  {
    "state":"AL",
    "FIPS":1023,
    "county":"Choctaw County",
    "number":119.09,
    "rate":8.78309609853234,
    "population":13559
  },
  {
    "state":"AL",
    "FIPS":1025,
    "county":"Clarke County",
    "number":1086.41,
    "rate":43.166322314049594,
    "population":25168
  },
  {
    "state":"AL",
    "FIPS":1027,
    "county":"Clay County",
    "number":325.7,
    "rate":24.188637207575194,
    "population":13465
  },
  {
    "state":"AL",
    "FIPS":1029,
    "county":"Cleburne County",
    "number":74.63000000000001,
    "rate":5.002681324574341,
    "population":14918
  },
  {
    "state":"AL",
    "FIPS":1031,
    "county":"Coffee County",
    "number":2733.3099999999995,
    "rate":53.367241345646946,
    "population":51217
  },
  {
    "state":"AL",
    "FIPS":1033,
    "county":"Colbert County",
    "number":5159.410000000001,
    "rate":94.7149964202449,
    "population":54473
  },
  {
    "state":"AL",
    "FIPS":1035,
    "county":"Conecuh County",
    "number":571.76,
    "rate":43.964628988850436,
    "population":13005
  },
  {
    "state":"AL",
    "FIPS":1039,
    "county":"Covington County",
    "number":158.05,
    "rate":4.180221640350182,
    "population":37809
  },
  {
    "state":"AL",
    "FIPS":1041,
    "county":"Crenshaw County",
    "number":23.91,
    "rate":1.7112797022616661,
    "population":13972
  },
  {
    "state":"AL",
    "FIPS":1043,
    "county":"Cullman County",
    "number":3950.8300000000017,
    "rate":49.163524595263894,
    "population":80361
  },
  {
    "state":"AL",
    "FIPS":1045,
    "county":"Dale County",
    "number":815.95,
    "rate":16.218445637050287,
    "population":50310
  },
  {
    "state":"AL",
    "FIPS":1047,
    "county":"Dallas County",
    "number":1109.95,
    "rate":25.909801816102153,
    "population":42839
  },
  {
    "state":"AL",
    "FIPS":1049,
    "county":"Dekalb County",
    "number":1095.3599999999997,
    "rate":15.442830960101503,
    "population":70930
  },
  {
    "state":"AL",
    "FIPS":1051,
    "county":"Elmore County",
    "number":423.00000000000006,
    "rate":5.2617175838391885,
    "population":80392
  },
  {
    "state":"AL",
    "FIPS":1053,
    "county":"Escambia County",
    "number":594.37,
    "rate":15.621583263246425,
    "population":38048
  },
  {
    "state":"AL",
    "FIPS":1055,
    "county":"Etowah County",
    "number":3022.1600000000003,
    "rate":28.96898125071892,
    "population":104324
  },
  {
    "state":"AL",
    "FIPS":1057,
    "county":"Fayette County",
    "number":94.62,
    "rate":5.571781886703569,
    "population":16982
  },
  {
    "state":"AL",
    "FIPS":1059,
    "county":"Franklin County",
    "number":297.41,
    "rate":9.39387239418825,
    "population":31660
  },
  {
    "state":"AL",
    "FIPS":1061,
    "county":"Geneva County",
    "number":243.31000000000003,
    "rate":9.01081401377676,
    "population":27002
  },
  {
    "state":"AL",
    "FIPS":1063,
    "county":"Greene County",
    "number":213.39000000000004,
    "rate":24.174691288093356,
    "population":8827
  },
  {
    "state":"AL",
    "FIPS":1065,
    "county":"Hale County",
    "number":103.69000000000001,
    "rate":6.737491877842755,
    "population":15390
  },
  {
    "state":"AL",
    "FIPS":1067,
    "county":"Henry County",
    "number":274.95,
    "rate":15.940978664192949,
    "population":17248
  },
  {
    "state":"AL",
    "FIPS":1069,
    "county":"Houston County",
    "number":15451.4,
    "rate":149.47952944818513,
    "population":103368
  },
  {
    "state":"AL",
    "FIPS":1071,
    "county":"Jackson County",
    "number":2196.9800000000005,
    "rate":41.414944955512,
    "population":53048
  },
  {
    "state":"AL",
    "FIPS":1073,
    "county":"Jefferson County",
    "number":413660.74000000034,
    "rate":628.7086463622787,
    "population":657953
  },
  {
    "state":"AL",
    "FIPS":1077,
    "county":"Lauderdale County",
    "number":4229.019999999999,
    "rate":45.623449198437854,
    "population":92694
  },
  {
    "state":"AL",
    "FIPS":1079,
    "county":"Lawrence County",
    "number":1066.69,
    "rate":31.5813003315964,
    "population":33776
  },
  {
    "state":"AL",
    "FIPS":1081,
    "county":"Lee County",
    "number":91857.31000000001,
    "rate":620.4898000540396,
    "population":148040
  },
  {
    "state":"AL",
    "FIPS":1083,
    "county":"Limestone County",
    "number":846.59,
    "rate":9.690486819362889,
    "population":87363
  },
  {
    "state":"AL",
    "FIPS":1085,
    "county":"Lowndes County",
    "number":30.44,
    "rate":2.8019145802650955,
    "population":10864
  },
  {
    "state":"AL",
    "FIPS":1087,
    "county":"Macon County",
    "number":102.2,
    "rate":4.992672203224231,
    "population":20470
  },
  {
    "state":"AL",
    "FIPS":1089,
    "county":"Madison County",
    "number":33300.73999999992,
    "rate":97.12408273737975,
    "population":342868
  },
  {
    "state":"AL",
    "FIPS":1091,
    "county":"Marengo County",
    "number":511.87999999999994,
    "rate":25.039377782125907,
    "population":20443
  },
  {
    "state":"AL",
    "FIPS":1093,
    "county":"Marion County",
    "number":1815.4,
    "rate":59.4901035522349,
    "population":30516
  },
  {
    "state":"AL",
    "FIPS":1095,
    "county":"Marshall County",
    "number":3388.5299999999993,
    "rate":35.932366944847985,
    "population":94303
  },
  {
    "state":"AL",
    "FIPS":1097,
    "county":"Mobile County",
    "number":91893.6100000001,
    "rate":221.98937082533152,
    "population":413955
  },
  {
    "state":"AL",
    "FIPS":1099,
    "county":"Monroe County",
    "number":319.37999999999994,
    "rate":14.126232916095356,
    "population":22609
  },
  {
    "state":"AL",
    "FIPS":1101,
    "county":"Montgomery County",
    "number":149531.03000000006,
    "rate":651.7614830054138,
    "population":229426
  },
  {
    "state":"AL",
    "FIPS":1103,
    "county":"Morgan County",
    "number":6181.190000000002,
    "rate":51.48546107265717,
    "population":120057
  },
  {
    "state":"AL",
    "FIPS":1107,
    "county":"Pickens County",
    "number":287.02,
    "rate":14.837675765095119,
    "population":19344
  },
  {
    "state":"AL",
    "FIPS":1109,
    "county":"Pike County",
    "number":1203.78,
    "rate":36.337237382274814,
    "population":33128
  },
  {
    "state":"AL",
    "FIPS":1111,
    "county":"Randolph County",
    "number":266.57,
    "rate":11.765458798605287,
    "population":22657
  },
  {
    "state":"AL",
    "FIPS":1113,
    "county":"Russell County",
    "number":407.6600000000001,
    "rate":7.060759318276294,
    "population":57736
  },
  {
    "state":"AL",
    "FIPS":1117,
    "county":"Shelby County",
    "number":6946.499999999998,
    "rate":34.5660643999144,
    "population":200963
  },
  {
    "state":"AL",
    "FIPS":1115,
    "county":"St Clair County",
    "number":1147.2,
    "rate":13.470322315505195,
    "population":85165
  },
  {
    "state":"AL",
    "FIPS":1119,
    "county":"Sumter County",
    "number":307.29999999999995,
    "rate":22.914025799716647,
    "population":13411
  },
  {
    "state":"AL",
    "FIPS":1121,
    "county":"Talladega County",
    "number":2298.7400000000002,
    "rate":28.08204451611327,
    "population":81858
  },
  {
    "state":"AL",
    "FIPS":1123,
    "county":"Tallapoosa County",
    "number":971.8199999999999,
    "rate":23.613081932160558,
    "population":41156
  },
  {
    "state":"AL",
    "FIPS":1125,
    "county":"Tuscaloosa County",
    "number":8575.069999999998,
    "rate":43.16824655286115,
    "population":198643
  },
  {
    "state":"AL",
    "FIPS":1127,
    "county":"Walker County",
    "number":4556.960000000001,
    "rate":68.91432892249529,
    "population":66125
  },
  {
    "state":"AL",
    "FIPS":1129,
    "county":"Washington County",
    "number":30.5,
    "rate":1.7848782771535578,
    "population":17088
  },
  {
    "state":"AL",
    "FIPS":1131,
    "county":"Wilcox County",
    "number":139.57,
    "rate":12.258036184788336,
    "population":11386
  },
  {
    "state":"AL",
    "FIPS":1133,
    "county":"Winston County",
    "number":363.21,
    "rate":15.017986355178829,
    "population":24185
  },
  {
    "state":"AR",
    "FIPS":5001,
    "county":"Arkansas County",
    "number":516.43,
    "rate":27.189112351268818,
    "population":18994
  },
  {
    "state":"AR",
    "FIPS":5003,
    "county":"Ashley County",
    "number":188.26,
    "rate":8.757501046657673,
    "population":21497
  },
  {
    "state":"AR",
    "FIPS":5005,
    "county":"Baxter County",
    "number":865.3999999999999,
    "rate":21.06775080945541,
    "population":41077
  },
  {
    "state":"AR",
    "FIPS":5007,
    "county":"Benton County",
    "number":66224.80999999998,
    "rate":284.54539204860373,
    "population":232739
  },
  {
    "state":"AR",
    "FIPS":5009,
    "county":"Boone County",
    "number":463.7800000000001,
    "rate":12.42278948919187,
    "population":37333
  },
  {
    "state":"AR",
    "FIPS":5011,
    "county":"Bradley County",
    "number":428.88000000000005,
    "rate":37.96070100902815,
    "population":11298
  },
  {
    "state":"AR",
    "FIPS":5015,
    "county":"Carroll County",
    "number":203.54999999999998,
    "rate":7.375534459018769,
    "population":27598
  },
  {
    "state":"AR",
    "FIPS":5017,
    "county":"Chicot County",
    "number":37.73,
    "rate":3.2928957933321694,
    "population":11458
  },
  {
    "state":"AR",
    "FIPS":5019,
    "county":"Clark County",
    "number":505.78,
    "rate":22.161948996582243,
    "population":22822
  },
  {
    "state":"AR",
    "FIPS":5021,
    "county":"Clay County",
    "number":58.41,
    "rate":3.749037227214377,
    "population":15580
  },
  {
    "state":"AR",
    "FIPS":5023,
    "county":"Cleburne County",
    "number":300.99,
    "rate":11.676235549693539,
    "population":25778
  },
  {
    "state":"AR",
    "FIPS":5027,
    "county":"Columbia County",
    "number":1103.1299999999999,
    "rate":45.20839309864349,
    "population":24401
  },
  {
    "state":"AR",
    "FIPS":5029,
    "county":"Conway County",
    "number":452.36,
    "rate":21.321644042232275,
    "population":21216
  },
  {
    "state":"AR",
    "FIPS":5031,
    "county":"Craighead County",
    "number":20901.869999999995,
    "rate":209.2216449956457,
    "population":99903
  },
  {
    "state":"AR",
    "FIPS":5033,
    "county":"Crawford County",
    "number":1183.35,
    "rate":19.10693814283177,
    "population":61933
  },
  {
    "state":"AR",
    "FIPS":5035,
    "county":"Crittenden County",
    "number":324.22999999999996,
    "rate":6.475534252047133,
    "population":50070
  },
  {
    "state":"AR",
    "FIPS":5037,
    "county":"Cross County",
    "number":1037.71,
    "rate":58.780446357765946,
    "population":17654
  },
  {
    "state":"AR",
    "FIPS":5041,
    "county":"Desha County",
    "number":74.23,
    "rate":5.903451566724988,
    "population":12574
  },
  {
    "state":"AR",
    "FIPS":5043,
    "county":"Drew County",
    "number":1044.8,
    "rate":55.64846870838882,
    "population":18775
  },
  {
    "state":"AR",
    "FIPS":5045,
    "county":"Faulkner County",
    "number":5294.940000000001,
    "rate":44.67210556066449,
    "population":118529
  },
  {
    "state":"AR",
    "FIPS":5047,
    "county":"Franklin County",
    "number":273.13,
    "rate":15.222940586333742,
    "population":17942
  },
  {
    "state":"AR",
    "FIPS":5049,
    "county":"Fulton County",
    "number":190.62999999999997,
    "rate":15.573074095253654,
    "population":12241
  },
  {
    "state":"AR",
    "FIPS":5051,
    "county":"Garland County",
    "number":3714.669999999999,
    "rate":38.36002767537201,
    "population":96837
  },
  {
    "state":"AR",
    "FIPS":5053,
    "county":"Grant County",
    "number":43.580000000000005,
    "rate":2.4164125311893545,
    "population":18035
  },
  {
    "state":"AR",
    "FIPS":5055,
    "county":"Greene County",
    "number":1068.9499999999998,
    "rate":24.768293248065245,
    "population":43158
  },
  {
    "state":"AR",
    "FIPS":5057,
    "county":"Hempstead County",
    "number":11.92,
    "rate":0.5339305711086226,
    "population":22325
  },
  {
    "state":"AR",
    "FIPS":5059,
    "county":"Hot Spring County",
    "number":521.87,
    "rate":15.63140238423291,
    "population":33386
  },
  {
    "state":"AR",
    "FIPS":5063,
    "county":"Independence County",
    "number":2089.1800000000003,
    "rate":56.60967348597752,
    "population":36905
  },
  {
    "state":"AR",
    "FIPS":5067,
    "county":"Jackson County",
    "number":469.85999999999996,
    "rate":26.636054421768705,
    "population":17640
  },
  {
    "state":"AR",
    "FIPS":5069,
    "county":"Jefferson County",
    "number":1564.5300000000002,
    "rate":20.977876106194692,
    "population":74580
  },
  {
    "state":"AR",
    "FIPS":5071,
    "county":"Johnson County",
    "number":181.70999999999998,
    "rate":7.025595422208474,
    "population":25864
  },
  {
    "state":"AR",
    "FIPS":5073,
    "county":"Lafayette County",
    "number":12.01,
    "rate":1.616202395370744,
    "population":7431
  },
  {
    "state":"AR",
    "FIPS":5075,
    "county":"Lawrence County",
    "number":61.31,
    "rate":3.59821585773813,
    "population":17039
  },
  {
    "state":"AR",
    "FIPS":5077,
    "county":"Lee County",
    "number":36.93,
    "rate":3.6241413150147204,
    "population":10190
  },
  {
    "state":"AR",
    "FIPS":5079,
    "county":"Lincoln County",
    "number":128.60999999999999,
    "rate":9.089688317195561,
    "population":14149
  },
  {
    "state":"AR",
    "FIPS":5081,
    "county":"Little River County",
    "number":66.96,
    "rate":5.188686555598605,
    "population":12905
  },
  {
    "state":"AR",
    "FIPS":5085,
    "county":"Lonoke County",
    "number":818.5500000000001,
    "rate":11.679056030362265,
    "population":70087
  },
  {
    "state":"AR",
    "FIPS":5087,
    "county":"Madison County",
    "number":10.69,
    "rate":0.6836786902020977,
    "population":15636
  },
  {
    "state":"AR",
    "FIPS":5091,
    "county":"Miller County",
    "number":208.57,
    "rate":4.781851113098104,
    "population":43617
  },
  {
    "state":"AR",
    "FIPS":5093,
    "county":"Mississippi County",
    "number":957.1600000000001,
    "rate":21.01339187705818,
    "population":45550
  },
  {
    "state":"AR",
    "FIPS":5097,
    "county":"Montgomery County",
    "number":57.07,
    "rate":6.126677402039721,
    "population":9315
  },
  {
    "state":"AR",
    "FIPS":5099,
    "county":"Nevada County",
    "number":22,
    "rate":2.4710771650005614,
    "population":8903
  },
  {
    "state":"AR",
    "FIPS":5103,
    "county":"Ouachita County",
    "number":557.3500000000001,
    "rate":21.93341466294125,
    "population":25411
  },
  {
    "state":"AR",
    "FIPS":5105,
    "county":"Perry County",
    "number":20.35,
    "rate":1.9707534379236877,
    "population":10326
  },
  {
    "state":"AR",
    "FIPS":5107,
    "county":"Phillips County",
    "number":506.39000000000004,
    "rate":24.378490275370694,
    "population":20772
  },
  {
    "state":"AR",
    "FIPS":5109,
    "county":"Pike County",
    "number":15.96,
    "rate":1.416651872891887,
    "population":11266
  },
  {
    "state":"AR",
    "FIPS":5111,
    "county":"Poinsett County",
    "number":697.05,
    "rate":28.655704008221992,
    "population":24325
  },
  {
    "state":"AR",
    "FIPS":5113,
    "county":"Polk County",
    "number":25,
    "rate":1.223091976516634,
    "population":20440
  },
  {
    "state":"AR",
    "FIPS":5115,
    "county":"Pope County",
    "number":941.2700000000002,
    "rate":15.008211489707739,
    "population":62717
  },
  {
    "state":"AR",
    "FIPS":5119,
    "county":"Pulaski County",
    "number":118148.88000000006,
    "rate":303.67934858041747,
    "population":389058
  },
  {
    "state":"AR",
    "FIPS":5121,
    "county":"Randolph County",
    "number":559.88,
    "rate":31.364069239818498,
    "population":17851
  },
  {
    "state":"AR",
    "FIPS":5125,
    "county":"Saline County",
    "number":2859.1099999999997,
    "rate":25.603664433857503,
    "population":111668
  },
  {
    "state":"AR",
    "FIPS":5127,
    "county":"Scott County",
    "number":86.8,
    "rate":7.885890796765694,
    "population":11007
  },
  {
    "state":"AR",
    "FIPS":5131,
    "county":"Sebastian County",
    "number":17878.949999999997,
    "rate":140.37018136138806,
    "population":127370
  },
  {
    "state":"AR",
    "FIPS":5123,
    "county":"St Francis County",
    "number":396.16999999999996,
    "rate":14.208298963526161,
    "population":27883
  },
  {
    "state":"AR",
    "FIPS":5137,
    "county":"Stone County",
    "number":72.5,
    "rate":5.741210009502693,
    "population":12628
  },
  {
    "state":"AR",
    "FIPS":5139,
    "county":"Union County",
    "number":1124.42,
    "rate":27.489243105808722,
    "population":40904
  },
  {
    "state":"AR",
    "FIPS":5143,
    "county":"Washington County",
    "number":7292.91,
    "rate":34.44373600838788,
    "population":211734
  },
  {
    "state":"AR",
    "FIPS":5145,
    "county":"White County",
    "number":1691.6400000000003,
    "rate":21.507908254081272,
    "population":78652
  },
  {
    "state":"AR",
    "FIPS":5149,
    "county":"Yell County",
    "number":46.18,
    "rate":2.117280271422677,
    "population":21811
  },
  {
    "state":"AZ",
    "FIPS":4001,
    "county":"Apache County",
    "number":11.62,
    "rate":0.15937238551110255,
    "population":72911
  },
  {
    "state":"AZ",
    "FIPS":4003,
    "county":"Cochise County",
    "number":1478.4100000000003,
    "rate":11.206952751309517,
    "population":131919
  },
  {
    "state":"AZ",
    "FIPS":4005,
    "county":"Coconino County",
    "number":623.88,
    "rate":4.58907384386792,
    "population":135949
  },
  {
    "state":"AZ",
    "FIPS":4007,
    "county":"Gila County",
    "number":343.93,
    "rate":6.485941124332887,
    "population":53027
  },
  {
    "state":"AZ",
    "FIPS":4009,
    "county":"Graham County",
    "number":363.35,
    "rate":9.834889700906754,
    "population":36945
  },
  {
    "state":"AZ",
    "FIPS":4012,
    "county":"La Paz County",
    "number":34.38,
    "rate":1.6945142688156143,
    "population":20289
  },
  {
    "state":"AZ",
    "FIPS":4013,
    "county":"Maricopa County",
    "number":327724.1500000007,
    "rate":83.11821496433579,
    "population":3942868
  },
  {
    "state":"AZ",
    "FIPS":4015,
    "county":"Mohave County",
    "number":2828.9699999999993,
    "rate":13.923878055262973,
    "population":203174
  },
  {
    "state":"AZ",
    "FIPS":4017,
    "county":"Navajo County",
    "number":282.58,
    "rate":2.641601151692483,
    "population":106973
  },
  {
    "state":"AZ",
    "FIPS":4019,
    "county":"Pima County",
    "number":88631.72000000019,
    "rate":89.24806715175018,
    "population":993094
  },
  {
    "state":"AZ",
    "FIPS":4021,
    "county":"Pinal County",
    "number":1792.42,
    "rate":4.618377453582269,
    "population":388106
  },
  {
    "state":"AZ",
    "FIPS":4023,
    "county":"Santa Cruz County",
    "number":24.16,
    "rate":0.5093500305694348,
    "population":47433
  },
  {
    "state":"AZ",
    "FIPS":4025,
    "county":"Yavapai County",
    "number":33084.79000000001,
    "rate":155.6865356290793,
    "population":212509
  },
  {
    "state":"AZ",
    "FIPS":4027,
    "county":"Yuma County",
    "number":14092.24,
    "rate":69.67250721828897,
    "population":202264
  },
  {
    "state":"CA",
    "FIPS":6001,
    "county":"Alameda County",
    "number":34957.82,
    "rate":22.462870658872713,
    "population":1556249
  },
  {
    "state":"CA",
    "FIPS":6005,
    "county":"Amador County",
    "number":264.09,
    "rate":7.123705222270176,
    "population":37072
  },
  {
    "state":"CA",
    "FIPS":6007,
    "county":"Butte County",
    "number":12785.640000000021,
    "rate":57.78062988354078,
    "population":221279
  },
  {
    "state":"CA",
    "FIPS":6009,
    "county":"Calaveras County",
    "number":853.47,
    "rate":19.061732255326753,
    "population":44774
  },
  {
    "state":"CA",
    "FIPS":6011,
    "county":"Colusa County",
    "number":583.7300000000001,
    "rate":27.28092723278965,
    "population":21397
  },
  {
    "state":"CA",
    "FIPS":6013,
    "county":"Contra Costa County",
    "number":121983.10999999983,
    "rate":113.01450491866446,
    "population":1079358
  },
  {
    "state":"CA",
    "FIPS":6015,
    "county":"Del Norte County",
    "number":107.92000000000002,
    "rate":3.8234252107985554,
    "population":28226
  },
  {
    "state":"CA",
    "FIPS":6017,
    "county":"El Dorado County",
    "number":6745.8,
    "rate":37.35112538412558,
    "population":180605
  },
  {
    "state":"CA",
    "FIPS":6019,
    "county":"Fresno County",
    "number":64495.32999999995,
    "rate":68.015829325909,
    "population":948240
  },
  {
    "state":"CA",
    "FIPS":6021,
    "county":"Glenn County",
    "number":176.21,
    "rate":6.307180184694682,
    "population":27938
  },
  {
    "state":"CA",
    "FIPS":6023,
    "county":"Humboldt County",
    "number":1626.5199999999998,
    "rate":12.076923076923075,
    "population":134680
  },
  {
    "state":"CA",
    "FIPS":6025,
    "county":"Imperial County",
    "number":13010.139999999996,
    "rate":73.32010842918568,
    "population":177443
  },
  {
    "state":"CA",
    "FIPS":6029,
    "county":"Kern County",
    "number":38653.96999999994,
    "rate":45.13004056032554,
    "population":856502
  },
  {
    "state":"CA",
    "FIPS":6031,
    "county":"Kings County",
    "number":8231.149999999998,
    "rate":54.38846306330116,
    "population":151340
  },
  {
    "state":"CA",
    "FIPS":6033,
    "county":"Lake County",
    "number":519.22,
    "rate":8.114841210302576,
    "population":63984
  },
  {
    "state":"CA",
    "FIPS":6035,
    "county":"Lassen County",
    "number":219.15,
    "rate":6.507022179993467,
    "population":33679
  },
  {
    "state":"CA",
    "FIPS":6037,
    "county":"Los Angeles County",
    "number":1518058.6099999931,
    "rate":152.1883407379419,
    "population":9974868
  },
  {
    "state":"CA",
    "FIPS":6039,
    "county":"Madera County",
    "number":2203.92,
    "rate":14.476235516670608,
    "population":152244
  },
  {
    "state":"CA",
    "FIPS":6041,
    "county":"Marin County",
    "number":4455.72,
    "rate":17.395439266347317,
    "population":256143
  },
  {
    "state":"CA",
    "FIPS":6043,
    "county":"Mariposa County",
    "number":14.05,
    "rate":0.7873353880638835,
    "population":17845
  },
  {
    "state":"CA",
    "FIPS":6045,
    "county":"Mendocino County",
    "number":511.74000000000007,
    "rate":5.848657668262913,
    "population":87497
  },
  {
    "state":"CA",
    "FIPS":6047,
    "county":"Merced County",
    "number":3085.77,
    "rate":11.787511030128005,
    "population":261783
  },
  {
    "state":"CA",
    "FIPS":6053,
    "county":"Monterey County",
    "number":82122.93999999999,
    "rate":192.5910447901203,
    "population":426411
  },
  {
    "state":"CA",
    "FIPS":6055,
    "county":"Napa County",
    "number":1922.22,
    "rate":13.81550292881015,
    "population":139135
  },
  {
    "state":"CA",
    "FIPS":6057,
    "county":"Nevada County",
    "number":320.75,
    "rate":3.261875463984624,
    "population":98333
  },
  {
    "state":"CA",
    "FIPS":6059,
    "county":"Orange County",
    "number":467233.1899999991,
    "rate":151.21338829532255,
    "population":3089893
  },
  {
    "state":"CA",
    "FIPS":6061,
    "county":"Placer County",
    "number":7965.600000000002,
    "rate":22.038146777111937,
    "population":361446
  },
  {
    "state":"CA",
    "FIPS":6063,
    "county":"Plumas County",
    "number":236.86999999999998,
    "rate":12.247039966909671,
    "population":19341
  },
  {
    "state":"CA",
    "FIPS":6065,
    "county":"Riverside County",
    "number":90861.27999999974,
    "rate":40.06195715291616,
    "population":2268019
  },
  {
    "state":"CA",
    "FIPS":6067,
    "county":"Sacramento County",
    "number":100291.97000000009,
    "rate":69.22555048382394,
    "population":1448771
  },
  {
    "state":"CA",
    "FIPS":6069,
    "county":"San Benito County",
    "number":752.78,
    "rate":13.236623235040705,
    "population":56871
  },
  {
    "state":"CA",
    "FIPS":6071,
    "county":"San Bernardino County",
    "number":100235.30000000006,
    "rate":48.17497023768045,
    "population":2080651
  },
  {
    "state":"CA",
    "FIPS":6073,
    "county":"San Diego County",
    "number":561379.5800000008,
    "rate":176.34519303653053,
    "population":3183413
  },
  {
    "state":"CA",
    "FIPS":6075,
    "county":"San Francisco County",
    "number":240678.7000000003,
    "rate":290.0823318560769,
    "population":829691
  },
  {
    "state":"CA",
    "FIPS":6077,
    "county":"San Joaquin County",
    "number":47302,
    "rate":67.4168192863811,
    "population":701635
  },
  {
    "state":"CA",
    "FIPS":6079,
    "county":"San Luis Obispo County",
    "number":9720.789999999999,
    "rate":35.40910216808485,
    "population":274528
  },
  {
    "state":"CA",
    "FIPS":6081,
    "county":"San Mateo County",
    "number":60157.12000000007,
    "rate":81.21241248592628,
    "population":740738
  },
  {
    "state":"CA",
    "FIPS":6083,
    "county":"Santa Barbara County",
    "number":75024.63999999997,
    "rate":174.18101446852762,
    "population":430728
  },
  {
    "state":"CA",
    "FIPS":6085,
    "county":"Santa Clara County",
    "number":222255.6499999995,
    "rate":120.7190763337962,
    "population":1841098
  },
  {
    "state":"CA",
    "FIPS":6087,
    "county":"Santa Cruz County",
    "number":5048.409999999999,
    "rate":18.933998919859576,
    "population":266632
  },
  {
    "state":"CA",
    "FIPS":6089,
    "county":"Shasta County",
    "number":4023.400000000002,
    "rate":22.550036150453153,
    "population":178421
  },
  {
    "state":"CA",
    "FIPS":6093,
    "county":"Siskiyou County",
    "number":452.56,
    "rate":10.235671959107975,
    "population":44214
  },
  {
    "state":"CA",
    "FIPS":6095,
    "county":"Solano County",
    "number":5702.969999999999,
    "rate":13.555133531721507,
    "population":420724
  },
  {
    "state":"CA",
    "FIPS":6097,
    "county":"Sonoma County",
    "number":26833.499999999985,
    "rate":54.66875017826652,
    "population":490838
  },
  {
    "state":"CA",
    "FIPS":6099,
    "county":"Stanislaus County",
    "number":12486.689999999999,
    "rate":23.91472304044555,
    "population":522134
  },
  {
    "state":"CA",
    "FIPS":6101,
    "county":"Sutter County",
    "number":4191.349999999999,
    "rate":44.28870314993078,
    "population":94637
  },
  {
    "state":"CA",
    "FIPS":6103,
    "county":"Tehama County",
    "number":916.9799999999999,
    "rate":14.494728356227178,
    "population":63263
  },
  {
    "state":"CA",
    "FIPS":6105,
    "county":"Trinity County",
    "number":36.129999999999995,
    "rate":2.67728788440163,
    "population":13495
  },
  {
    "state":"CA",
    "FIPS":6107,
    "county":"Tulare County",
    "number":16738.52,
    "rate":37.07321610900578,
    "population":451499
  },
  {
    "state":"CA",
    "FIPS":6109,
    "county":"Tuolumne County",
    "number":513.29,
    "rate":9.487800369685766,
    "population":54100
  },
  {
    "state":"CA",
    "FIPS":6111,
    "county":"Ventura County",
    "number":22984.840000000007,
    "rate":27.51107153287468,
    "population":835476
  },
  {
    "state":"CA",
    "FIPS":6113,
    "county":"Yolo County",
    "number":43658.11,
    "rate":213.73270016889828,
    "population":204265
  },
  {
    "state":"CA",
    "FIPS":6115,
    "county":"Yuba County",
    "number":789.5799999999998,
    "rate":10.819573290214722,
    "population":72977
  },
  {
    "state":"CO",
    "FIPS":8001,
    "county":"Adams County",
    "number":107446.76,
    "rate":233.2488011583556,
    "population":460653
  },
  {
    "state":"CO",
    "FIPS":8003,
    "county":"Alamosa County",
    "number":57.69,
    "rate":3.580338856823683,
    "population":16113
  },
  {
    "state":"CO",
    "FIPS":8005,
    "county":"Arapahoe County",
    "number":36789.06000000001,
    "rate":61.721329215117514,
    "population":596051
  },
  {
    "state":"CO",
    "FIPS":8007,
    "county":"Archuleta County",
    "number":78.75,
    "rate":6.492703438041059,
    "population":12129
  },
  {
    "state":"CO",
    "FIPS":8013,
    "county":"Boulder County",
    "number":65757.19,
    "rate":215.25646271641958,
    "population":305483
  },
  {
    "state":"CO",
    "FIPS":8014,
    "county":"Broomfield County",
    "number":1656.83,
    "rate":28.085672633577435,
    "population":58992
  },
  {
    "state":"CO",
    "FIPS":8015,
    "county":"Chaffee County",
    "number":21.47,
    "rate":1.1859912721648345,
    "population":18103
  },
  {
    "state":"CO",
    "FIPS":8017,
    "county":"Cheyenne County",
    "number":10.76,
    "rate":5.70217276099629,
    "population":1887
  },
  {
    "state":"CO",
    "FIPS":8029,
    "county":"Delta County",
    "number":531.98,
    "rate":17.471181319583565,
    "population":30449
  },
  {
    "state":"CO",
    "FIPS":8031,
    "county":"Denver County",
    "number":65759.91000000002,
    "rate":103.74385518751541,
    "population":633868
  },
  {
    "state":"CO",
    "FIPS":8035,
    "county":"Douglas County",
    "number":8908.779999999999,
    "rate":29.8375622956969,
    "population":298576
  },
  {
    "state":"CO",
    "FIPS":8037,
    "county":"Eagle County",
    "number":141.73000000000002,
    "rate":2.728147677619295,
    "population":51951
  },
  {
    "state":"CO",
    "FIPS":8041,
    "county":"El Paso County",
    "number":9080.320000000002,
    "rate":14.062230922189668,
    "population":645724
  },
  {
    "state":"CO",
    "FIPS":8043,
    "county":"Fremont County",
    "number":39.86,
    "rate":0.8460330262766906,
    "population":47114
  },
  {
    "state":"CO",
    "FIPS":8045,
    "county":"Garfield County",
    "number":468.0100000000001,
    "rate":8.242950490515527,
    "population":56777
  },
  {
    "state":"CO",
    "FIPS":8055,
    "county":"Huerfano County",
    "number":22.06,
    "rate":3.3485124468731025,
    "population":6588
  },
  {
    "state":"CO",
    "FIPS":8059,
    "county":"Jefferson County",
    "number":14548.18,
    "rate":26.66352651382553,
    "population":545621
  },
  {
    "state":"CO",
    "FIPS":8067,
    "county":"La Plata County",
    "number":839.1300000000001,
    "rate":16.04301691998853,
    "population":52305
  },
  {
    "state":"CO",
    "FIPS":8065,
    "county":"Lake County",
    "number":11.37,
    "rate":1.563101457244982,
    "population":7274
  },
  {
    "state":"CO",
    "FIPS":8069,
    "county":"Larimer County",
    "number":40228.71000000001,
    "rate":129.42142937571384,
    "population":310835
  },
  {
    "state":"CO",
    "FIPS":8071,
    "county":"Las Animas County",
    "number":54.67,
    "rate":3.6480715334312026,
    "population":14986
  },
  {
    "state":"CO",
    "FIPS":8075,
    "county":"Logan County",
    "number":206.05,
    "rate":9.112015212488393,
    "population":22613
  },
  {
    "state":"CO",
    "FIPS":8077,
    "county":"Mesa County",
    "number":8687.21,
    "rate":58.80703203270964,
    "population":147724
  },
  {
    "state":"CO",
    "FIPS":8083,
    "county":"Montezuma County",
    "number":53.06,
    "rate":2.087004405286344,
    "population":25424
  },
  {
    "state":"CO",
    "FIPS":8085,
    "county":"Montrose County",
    "number":110.39999999999999,
    "rate":2.7110652718432293,
    "population":40722
  },
  {
    "state":"CO",
    "FIPS":8087,
    "county":"Morgan County",
    "number":124.81,
    "rate":4.4016928231352495,
    "population":28355
  },
  {
    "state":"CO",
    "FIPS":8089,
    "county":"Otero County",
    "number":125.11999999999999,
    "rate":6.6866182129115,
    "population":18712
  },
  {
    "state":"CO",
    "FIPS":8091,
    "county":"Ouray County",
    "number":29.99,
    "rate":6.598459845984598,
    "population":4545
  },
  {
    "state":"CO",
    "FIPS":8099,
    "county":"Prowers County",
    "number":13.19,
    "rate":1.0632809351068118,
    "population":12405
  },
  {
    "state":"CO",
    "FIPS":8101,
    "county":"Pueblo County",
    "number":3464.2000000000003,
    "rate":21.53817458343696,
    "population":160840
  },
  {
    "state":"CO",
    "FIPS":8103,
    "county":"Rio Blanco County",
    "number":168.90999999999997,
    "rate":24.865302517297213,
    "population":6793
  },
  {
    "state":"CO",
    "FIPS":8107,
    "county":"Routt County",
    "number":38.88,
    "rate":1.6753565734476668,
    "population":23207
  },
  {
    "state":"CO",
    "FIPS":8115,
    "county":"Sedgwick County",
    "number":38.03,
    "rate":15.99915860328145,
    "population":2377
  },
  {
    "state":"CO",
    "FIPS":8119,
    "county":"Teller County",
    "number":10480.21,
    "rate":448.33204996577683,
    "population":23376
  },
  {
    "state":"CO",
    "FIPS":8123,
    "county":"Weld County",
    "number":11538.38,
    "rate":43.67471772102547,
    "population":264189
  },
  {
    "state":"CO",
    "FIPS":8125,
    "county":"Yuma County",
    "number":158.5,
    "rate":15.666699614510229,
    "population":10117
  },
  {
    "state":"CT",
    "FIPS":9001,
    "county":"Fairfield County",
    "number":132265.99999999997,
    "rate":141.4171005784302,
    "population":935290
  },
  {
    "state":"CT",
    "FIPS":9003,
    "county":"Hartford County",
    "number":172757.47999999986,
    "rate":192.4449870669199,
    "population":897698
  },
  {
    "state":"CT",
    "FIPS":9005,
    "county":"Litchfield County",
    "number":42349.04000000002,
    "rate":225.96398367259837,
    "population":187415
  },
  {
    "state":"CT",
    "FIPS":9007,
    "county":"Middlesex County",
    "number":2820.1100000000006,
    "rate":17.03788061865636,
    "population":165520
  },
  {
    "state":"CT",
    "FIPS":9009,
    "county":"New Haven County",
    "number":156977.03,
    "rate":181.6798587087732,
    "population":864031
  },
  {
    "state":"CT",
    "FIPS":9011,
    "county":"New London County",
    "number":10000.41999999999,
    "rate":36.42556384404682,
    "population":274544
  },
  {
    "state":"CT",
    "FIPS":9013,
    "county":"Tolland County",
    "number":46216.70999999999,
    "rate":304.2074049695573,
    "population":151925
  },
  {
    "state":"CT",
    "FIPS":9015,
    "county":"Windham County",
    "number":4352.889999999999,
    "rate":36.907977852957885,
    "population":117939
  },
  {
    "state":"DC",
    "FIPS":11001,
    "county":"District of Columbia",
    "number":231103.2400000001,
    "rate":363.9191861929959,
    "population":635040
  },
  {
    "state":"DE",
    "FIPS":10001,
    "county":"Kent County",
    "number":3982.2699999999986,
    "rate":23.75120775828134,
    "population":167666
  },
  {
    "state":"DE",
    "FIPS":10003,
    "county":"New Castle County",
    "number":89880.06999999996,
    "rate":164.60918169813976,
    "population":546021
  },
  {
    "state":"DE",
    "FIPS":10005,
    "county":"Sussex County",
    "number":29550.519999999986,
    "rate":145.43008159689748,
    "population":203194
  },
  {
    "state":"FL",
    "FIPS":12001,
    "county":"Alachua County",
    "number":77644.20999999998,
    "rate":308.4632498122861,
    "population":251713
  },
  {
    "state":"FL",
    "FIPS":12003,
    "county":"Baker County",
    "number":375.84,
    "rate":13.89889427166155,
    "population":27041
  },
  {
    "state":"FL",
    "FIPS":12005,
    "county":"Bay County",
    "number":15231.650000000001,
    "rate":88.5591939253695,
    "population":171994
  },
  {
    "state":"FL",
    "FIPS":12007,
    "county":"Bradford County",
    "number":1499.27,
    "rate":55.25836650449653,
    "population":27132
  },
  {
    "state":"FL",
    "FIPS":12009,
    "county":"Brevard County",
    "number":106931.89999999978,
    "rate":195.24913770909032,
    "population":547669
  },
  {
    "state":"FL",
    "FIPS":12011,
    "county":"Broward County",
    "number":284365.05999999965,
    "rate":156.26402853542703,
    "population":1819773
  },
  {
    "state":"FL",
    "FIPS":12013,
    "county":"Calhoun County",
    "number":190.63000000000002,
    "rate":12.960092460398398,
    "population":14709
  },
  {
    "state":"FL",
    "FIPS":12015,
    "county":"Charlotte County",
    "number":85282.34999999989,
    "rate":523.8731018723272,
    "population":162792
  },
  {
    "state":"FL",
    "FIPS":12017,
    "county":"Citrus County",
    "number":10925.689999999997,
    "rate":78.43843779165768,
    "population":139290
  },
  {
    "state":"FL",
    "FIPS":12019,
    "county":"Clay County",
    "number":5595.780000000001,
    "rate":28.80058056347597,
    "population":194294
  },
  {
    "state":"FL",
    "FIPS":12021,
    "county":"Collier County",
    "number":35764.58000000003,
    "rate":107.44211756435647,
    "population":332873
  },
  {
    "state":"FL",
    "FIPS":12023,
    "county":"Columbia County",
    "number":2155.9,
    "rate":31.73100981705253,
    "population":67943
  },
  {
    "state":"FL",
    "FIPS":12031,
    "county":"Duval County",
    "number":231539.89999999932,
    "rate":262.935742310596,
    "population":880595
  },
  {
    "state":"FL",
    "FIPS":12033,
    "county":"Escambia County",
    "number":65133.130000000056,
    "rate":214.10299986193948,
    "population":304214
  },
  {
    "state":"FL",
    "FIPS":12035,
    "county":"Flagler County",
    "number":1732.7399999999996,
    "rate":17.58948330118769,
    "population":98510
  },
  {
    "state":"FL",
    "FIPS":12037,
    "county":"Franklin County",
    "number":421.34999999999997,
    "rate":36.102304858195524,
    "population":11671
  },
  {
    "state":"FL",
    "FIPS":12039,
    "county":"Gadsden County",
    "number":1907.9200000000003,
    "rate":40.89597667888454,
    "population":46653
  },
  {
    "state":"FL",
    "FIPS":12041,
    "county":"Gilchrist County",
    "number":76.1,
    "rate":4.510431484115695,
    "population":16872
  },
  {
    "state":"FL",
    "FIPS":12045,
    "county":"Gulf County",
    "number":11.79,
    "rate":0.7523931078493937,
    "population":15670
  },
  {
    "state":"FL",
    "FIPS":12049,
    "county":"Hardee County",
    "number":66.19,
    "rate":2.4144597650835338,
    "population":27414
  },
  {
    "state":"FL",
    "FIPS":12051,
    "county":"Hendry County",
    "number":913.1799999999998,
    "rate":24.23127952024624,
    "population":37686
  },
  {
    "state":"FL",
    "FIPS":12053,
    "county":"Hernando County",
    "number":4986.629999999999,
    "rate":28.807466118242417,
    "population":173102
  },
  {
    "state":"FL",
    "FIPS":12055,
    "county":"Highlands County",
    "number":3032.1499999999996,
    "rate":30.912863070539416,
    "population":98087
  },
  {
    "state":"FL",
    "FIPS":12057,
    "county":"Hillsborough County",
    "number":158217.45000000007,
    "rate":123.41146710846537,
    "population":1282032
  },
  {
    "state":"FL",
    "FIPS":12059,
    "county":"Holmes County",
    "number":61.36,
    "rate":3.1107731305449935,
    "population":19725
  },
  {
    "state":"FL",
    "FIPS":12061,
    "county":"Indian River County",
    "number":14699.780000000004,
    "rate":104.54440714610836,
    "population":140608
  },
  {
    "state":"FL",
    "FIPS":12063,
    "county":"Jackson County",
    "number":505.99,
    "rate":10.330543078807677,
    "population":48980
  },
  {
    "state":"FL",
    "FIPS":12065,
    "county":"Jefferson County",
    "number":446.0400000000001,
    "rate":31.426759670259994,
    "population":14193
  },
  {
    "state":"FL",
    "FIPS":12069,
    "county":"Lake County",
    "number":18729.879999999997,
    "rate":61.72311748228702,
    "population":303450
  },
  {
    "state":"FL",
    "FIPS":12071,
    "county":"Lee County",
    "number":41146.429999999964,
    "rate":63.79410159568854,
    "population":644988
  },
  {
    "state":"FL",
    "FIPS":12073,
    "county":"Leon County",
    "number":49044.87000000005,
    "rate":172.7820287894483,
    "population":283854
  },
  {
    "state":"FL",
    "FIPS":12075,
    "county":"Levy County",
    "number":848.6100000000001,
    "rate":21.216841263094736,
    "population":39997
  },
  {
    "state":"FL",
    "FIPS":12079,
    "county":"Madison County",
    "number":145.84,
    "rate":7.710282844303463,
    "population":18915
  },
  {
    "state":"FL",
    "FIPS":12081,
    "county":"Manatee County",
    "number":16441.78000000001,
    "rate":49.216424053569476,
    "population":334071
  },
  {
    "state":"FL",
    "FIPS":12083,
    "county":"Marion County",
    "number":16320.34000000001,
    "rate":48.79098342277167,
    "population":334495
  },
  {
    "state":"FL",
    "FIPS":12085,
    "county":"Martin County",
    "number":3046.9700000000007,
    "rate":20.47062064146837,
    "population":148846
  },
  {
    "state":"FL",
    "FIPS":12086,
    "county":"Miami-Dade County",
    "number":345914.83000000013,
    "rate":132.48568725679448,
    "population":2610960
  },
  {
    "state":"FL",
    "FIPS":12087,
    "county":"Monroe County",
    "number":609.91,
    "rate":8.133109306450107,
    "population":74991
  },
  {
    "state":"FL",
    "FIPS":12089,
    "county":"Nassau County",
    "number":1314.8399999999997,
    "rate":17.61575562700964,
    "population":74640
  },
  {
    "state":"FL",
    "FIPS":12091,
    "county":"Okaloosa County",
    "number":26349.11999999999,
    "rate":138.36134784731954,
    "population":190437
  },
  {
    "state":"FL",
    "FIPS":12093,
    "county":"Okeechobee County",
    "number":454.7300000000001,
    "rate":11.575155911925675,
    "population":39285
  },
  {
    "state":"FL",
    "FIPS":12095,
    "county":"Orange County",
    "number":248402.83000000022,
    "rate":206.6448627208265,
    "population":1202076
  },
  {
    "state":"FL",
    "FIPS":12097,
    "county":"Osceola County",
    "number":6779.720000000003,
    "rate":23.461674222237612,
    "population":288970
  },
  {
    "state":"FL",
    "FIPS":12099,
    "county":"Palm Beach County",
    "number":177538.70999999973,
    "rate":130.67643986918992,
    "population":1358613
  },
  {
    "state":"FL",
    "FIPS":12101,
    "county":"Pasco County",
    "number":66094.71999999997,
    "rate":140.4465750397361,
    "population":470604
  },
  {
    "state":"FL",
    "FIPS":12103,
    "county":"Pinellas County",
    "number":71263.32000000007,
    "rate":77.269895312085,
    "population":922265
  },
  {
    "state":"FL",
    "FIPS":12105,
    "county":"Polk County",
    "number":94210.51999999989,
    "rate":152.99777187363972,
    "population":615764
  },
  {
    "state":"FL",
    "FIPS":12107,
    "county":"Putnam County",
    "number":2963.85,
    "rate":40.53460796783326,
    "population":73119
  },
  {
    "state":"FL",
    "FIPS":12113,
    "county":"Santa Rosa County",
    "number":3875.04,
    "rate":24.463945251833987,
    "population":158398
  },
  {
    "state":"FL",
    "FIPS":12115,
    "county":"Sarasota County",
    "number":58161.05000000001,
    "rate":150.6567802098174,
    "population":386050
  },
  {
    "state":"FL",
    "FIPS":12117,
    "county":"Seminole County",
    "number":30849.300000000017,
    "rate":71.50890694359133,
    "population":431405
  },
  {
    "state":"FL",
    "FIPS":12109,
    "county":"St Johns County",
    "number":4432.08,
    "rate":21.912352173397142,
    "population":202264
  },
  {
    "state":"FL",
    "FIPS":12111,
    "county":"St Lucie County",
    "number":29699.350000000017,
    "rate":104.73781470522894,
    "population":283559
  },
  {
    "state":"FL",
    "FIPS":12119,
    "county":"Sumter County",
    "number":1874.9699999999996,
    "rate":18.234927983038812,
    "population":102823
  },
  {
    "state":"FL",
    "FIPS":12121,
    "county":"Suwannee County",
    "number":820.82,
    "rate":18.836515513126493,
    "population":43576
  },
  {
    "state":"FL",
    "FIPS":12123,
    "county":"Taylor County",
    "number":436.46999999999997,
    "rate":19.19477549584414,
    "population":22739
  },
  {
    "state":"FL",
    "FIPS":12125,
    "county":"Union County",
    "number":939.5699999999999,
    "rate":61.655620447535924,
    "population":15239
  },
  {
    "state":"FL",
    "FIPS":12127,
    "county":"Volusia County",
    "number":59309.18000000004,
    "rate":119.3122802217699,
    "population":497092
  },
  {
    "state":"FL",
    "FIPS":12129,
    "county":"Wakulla County",
    "number":487.73,
    "rate":15.82357330564838,
    "population":30823
  },
  {
    "state":"FL",
    "FIPS":12131,
    "county":"Walton County",
    "number":574.8600000000001,
    "rate":10.036839807944132,
    "population":57275
  },
  {
    "state":"FL",
    "FIPS":12133,
    "county":"Washington County",
    "number":222.19,
    "rate":8.93872953292835,
    "population":24857
  },
  {
    "state":"GA",
    "FIPS":13001,
    "county":"Appling County",
    "number":451.2500000000001,
    "rate":24.552478372055067,
    "population":18379
  },
  {
    "state":"GA",
    "FIPS":13005,
    "county":"Bacon County",
    "number":336.23999999999995,
    "rate":30.059002324333985,
    "population":11186
  },
  {
    "state":"GA",
    "FIPS":13009,
    "county":"Baldwin County",
    "number":1803.2700000000002,
    "rate":38.817565385857286,
    "population":46455
  },
  {
    "state":"GA",
    "FIPS":13011,
    "county":"Banks County",
    "number":30.96,
    "rate":1.6981132075471699,
    "population":18232
  },
  {
    "state":"GA",
    "FIPS":13013,
    "county":"Barrow County",
    "number":9899.240000000002,
    "rate":141.07309287312424,
    "population":70171
  },
  {
    "state":"GA",
    "FIPS":13017,
    "county":"Ben Hill County",
    "number":140.73,
    "rate":8.021088629239099,
    "population":17545
  },
  {
    "state":"GA",
    "FIPS":13019,
    "county":"Berrien County",
    "number":209.89000000000001,
    "rate":11.010334155169701,
    "population":19063
  },
  {
    "state":"GA",
    "FIPS":13021,
    "county":"Bibb County",
    "number":49018.04000000002,
    "rate":313.8480254059316,
    "population":156184
  },
  {
    "state":"GA",
    "FIPS":13023,
    "county":"Bleckley County",
    "number":446.08,
    "rate":34.587888656276654,
    "population":12897
  },
  {
    "state":"GA",
    "FIPS":13027,
    "county":"Brooks County",
    "number":232.48,
    "rate":14.96299156851387,
    "population":15537
  },
  {
    "state":"GA",
    "FIPS":13029,
    "county":"Bryan County",
    "number":1068.9,
    "rate":33.148297463251254,
    "population":32246
  },
  {
    "state":"GA",
    "FIPS":13031,
    "county":"Bulloch County",
    "number":2590.9600000000005,
    "rate":35.57838075359772,
    "population":72824
  },
  {
    "state":"GA",
    "FIPS":13033,
    "county":"Burke County",
    "number":332.96999999999997,
    "rate":14.396835005188514,
    "population":23128
  },
  {
    "state":"GA",
    "FIPS":13035,
    "county":"Butts County",
    "number":861.9100000000001,
    "rate":36.748955402063615,
    "population":23454
  },
  {
    "state":"GA",
    "FIPS":13037,
    "county":"Calhoun County",
    "number":71.41,
    "rate":10.982774530913565,
    "population":6502
  },
  {
    "state":"GA",
    "FIPS":13039,
    "county":"Camden County",
    "number":772.8499999999998,
    "rate":15.035407182599895,
    "population":51402
  },
  {
    "state":"GA",
    "FIPS":13043,
    "county":"Candler County",
    "number":112.13,
    "rate":10.079101123595505,
    "population":11125
  },
  {
    "state":"GA",
    "FIPS":13045,
    "county":"Carroll County",
    "number":5508.830000000002,
    "rate":49.427381945752934,
    "population":111453
  },
  {
    "state":"GA",
    "FIPS":13047,
    "county":"Catoosa County",
    "number":23426.420000000002,
    "rate":360.62283523960537,
    "population":64961
  },
  {
    "state":"GA",
    "FIPS":13049,
    "county":"Charlton County",
    "number":230.45999999999998,
    "rate":17.317403065825065,
    "population":13308
  },
  {
    "state":"GA",
    "FIPS":13051,
    "county":"Chatham County",
    "number":58543.600000000064,
    "rate":211.5702359871348,
    "population":276710
  },
  {
    "state":"GA",
    "FIPS":13055,
    "county":"Chattooga County",
    "number":177.81000000000003,
    "rate":6.925144103442905,
    "population":25676
  },
  {
    "state":"GA",
    "FIPS":13057,
    "county":"Cherokee County",
    "number":2885.34,
    "rate":13.06091963388468,
    "population":220914
  },
  {
    "state":"GA",
    "FIPS":13059,
    "county":"Clarke County",
    "number":6596.510000000006,
    "rate":54.847509769684926,
    "population":120270
  },
  {
    "state":"GA",
    "FIPS":13061,
    "county":"Clay County",
    "number":68.31,
    "rate":22.021276595744684,
    "population":3102
  },
  {
    "state":"GA",
    "FIPS":13063,
    "county":"Clayton County",
    "number":7013.64,
    "rate":26.34201304774031,
    "population":266253
  },
  {
    "state":"GA",
    "FIPS":13233,
    "county":"Polk County",
    "number":779.8399999999999,
    "rate":18.961752619933375,
    "population":41127
  },
  {
    "state":"GA",
    "FIPS":13065,
    "county":"Clinch County",
    "number":12.71,
    "rate":1.8927773641102013,
    "population":6715
  },
  {
    "state":"GA",
    "FIPS":13067,
    "county":"Cobb County",
    "number":57812.809999999845,
    "rate":81.65235948454577,
    "population":708036
  },
  {
    "state":"GA",
    "FIPS":13069,
    "county":"Coffee County",
    "number":1339.02,
    "rate":31.07279604576149,
    "population":43093
  },
  {
    "state":"GA",
    "FIPS":13071,
    "county":"Colquitt County",
    "number":2683.0999999999995,
    "rate":58.20804859529232,
    "population":46095
  },
  {
    "state":"GA",
    "FIPS":13073,
    "county":"Columbia County",
    "number":7588.2899999999945,
    "rate":57.24591870605626,
    "population":132556
  },
  {
    "state":"GA",
    "FIPS":13075,
    "county":"Cook County",
    "number":97.69,
    "rate":5.794531110979298,
    "population":16859
  },
  {
    "state":"GA",
    "FIPS":13077,
    "county":"Coweta County",
    "number":4281.68,
    "rate":32.71504760158316,
    "population":130878
  },
  {
    "state":"GA",
    "FIPS":13079,
    "county":"Crawford County",
    "number":69.60000000000001,
    "rate":5.515492511292496,
    "population":12619
  },
  {
    "state":"GA",
    "FIPS":13081,
    "county":"Crisp County",
    "number":14595.11,
    "rate":616.9467810795959,
    "population":23657
  },
  {
    "state":"GA",
    "FIPS":13085,
    "county":"Dawson County",
    "number":470.73999999999995,
    "rate":21.037718984626384,
    "population":22376
  },
  {
    "state":"GA",
    "FIPS":13087,
    "county":"Decatur County",
    "number":648.45,
    "rate":23.611768561337072,
    "population":27463
  },
  {
    "state":"GA",
    "FIPS":13089,
    "county":"Dekalb County",
    "number":43988.12000000004,
    "rate":62.103447107456745,
    "population":708304
  },
  {
    "state":"GA",
    "FIPS":13091,
    "county":"Dodge County",
    "number":1107.35,
    "rate":51.85922352830983,
    "population":21353
  },
  {
    "state":"GA",
    "FIPS":13095,
    "county":"Dougherty County",
    "number":9530.050000000005,
    "rate":100.80228892978786,
    "population":94542
  },
  {
    "state":"GA",
    "FIPS":13097,
    "county":"Douglas County",
    "number":11715.650000000009,
    "rate":87.4785329211655,
    "population":133926
  },
  {
    "state":"GA",
    "FIPS":13099,
    "county":"Early County",
    "number":128.84,
    "rate":12.148986327204149,
    "population":10605
  },
  {
    "state":"GA",
    "FIPS":13103,
    "county":"Effingham County",
    "number":912.4399999999999,
    "rate":17.10707388867015,
    "population":53337
  },
  {
    "state":"GA",
    "FIPS":13105,
    "county":"Elbert County",
    "number":937.0299999999997,
    "rate":47.82473332312559,
    "population":19593
  },
  {
    "state":"GA",
    "FIPS":13107,
    "county":"Emanuel County",
    "number":131.03,
    "rate":5.7346054531926995,
    "population":22849
  },
  {
    "state":"GA",
    "FIPS":13109,
    "county":"Evans County",
    "number":174.64000000000001,
    "rate":16.382739212007507,
    "population":10660
  },
  {
    "state":"GA",
    "FIPS":13111,
    "county":"Fannin County",
    "number":298.43,
    "rate":12.717006860698003,
    "population":23467
  },
  {
    "state":"GA",
    "FIPS":13113,
    "county":"Fayette County",
    "number":89471.43999999996,
    "rate":832.8192717253701,
    "population":107432
  },
  {
    "state":"GA",
    "FIPS":13115,
    "county":"Floyd County",
    "number":4850.309999999997,
    "rate":50.48935107113856,
    "population":96066
  },
  {
    "state":"GA",
    "FIPS":13117,
    "county":"Forsyth County",
    "number":2035.7900000000002,
    "rate":10.83870177717675,
    "population":187826
  },
  {
    "state":"GA",
    "FIPS":13119,
    "county":"Franklin County",
    "number":439.68,
    "rate":20.055649318067786,
    "population":21923
  },
  {
    "state":"GA",
    "FIPS":13121,
    "county":"Fulton County",
    "number":455188.21000000095,
    "rate":465.4514136714565,
    "population":977950
  },
  {
    "state":"GA",
    "FIPS":13123,
    "county":"Gilmer County",
    "number":105,
    "rate":3.7227441942917925,
    "population":28205
  },
  {
    "state":"GA",
    "FIPS":13127,
    "county":"Glynn County",
    "number":717.6700000000001,
    "rate":8.864500988142295,
    "population":80960
  },
  {
    "state":"GA",
    "FIPS":13129,
    "county":"Gordon County",
    "number":4821.620000000001,
    "rate":86.50197344815214,
    "population":55740
  },
  {
    "state":"GA",
    "FIPS":13131,
    "county":"Grady County",
    "number":65.34,
    "rate":2.5758889852558546,
    "population":25366
  },
  {
    "state":"GA",
    "FIPS":13133,
    "county":"Greene County",
    "number":184.95,
    "rate":11.464790478551945,
    "population":16132
  },
  {
    "state":"GA",
    "FIPS":13135,
    "county":"Gwinnett County",
    "number":123569.43000000018,
    "rate":147.0677714553673,
    "population":840221
  },
  {
    "state":"GA",
    "FIPS":13137,
    "county":"Habersham County",
    "number":684.38,
    "rate":15.746266939695833,
    "population":43463
  },
  {
    "state":"GA",
    "FIPS":13139,
    "county":"Hall County",
    "number":26079.529999999977,
    "rate":140.9064532860754,
    "population":185084
  },
  {
    "state":"GA",
    "FIPS":13143,
    "county":"Haralson County",
    "number":376.35,
    "rate":13.25736226574609,
    "population":28388
  },
  {
    "state":"GA",
    "FIPS":13147,
    "county":"Hart County",
    "number":417.5199999999999,
    "rate":16.341931191044658,
    "population":25549
  },
  {
    "state":"GA",
    "FIPS":13151,
    "county":"Henry County",
    "number":17858.489999999994,
    "rate":85.67565233660997,
    "population":208443
  },
  {
    "state":"GA",
    "FIPS":13153,
    "county":"Houston County",
    "number":6846.819999999991,
    "rate":46.83187414500678,
    "population":146200
  },
  {
    "state":"GA",
    "FIPS":13155,
    "county":"Irwin County",
    "number":45.739999999999995,
    "rate":4.764583333333333,
    "population":9600
  },
  {
    "state":"GA",
    "FIPS":13157,
    "county":"Jackson County",
    "number":1021.0600000000002,
    "rate":16.88483926445297,
    "population":60472
  },
  {
    "state":"GA",
    "FIPS":13159,
    "county":"Jasper County",
    "number":199.57,
    "rate":14.67858193586349,
    "population":13596
  },
  {
    "state":"GA",
    "FIPS":13161,
    "county":"Jeff Davis County",
    "number":201.16,
    "rate":13.309514357549292,
    "population":15114
  },
  {
    "state":"GA",
    "FIPS":13163,
    "county":"Jefferson County",
    "number":153.94,
    "rate":9.37401047375472,
    "population":16422
  },
  {
    "state":"GA",
    "FIPS":13165,
    "county":"Jenkins County",
    "number":26.1,
    "rate":2.8577685316982375,
    "population":9133
  },
  {
    "state":"GA",
    "FIPS":13167,
    "county":"Johnson County",
    "number":132.68,
    "rate":13.426431896377252,
    "population":9882
  },
  {
    "state":"GA",
    "FIPS":13169,
    "county":"Jones County",
    "number":184.63,
    "rate":6.411877061989928,
    "population":28795
  },
  {
    "state":"GA",
    "FIPS":13171,
    "county":"Lamar County",
    "number":60.650000000000006,
    "rate":3.3621597649537116,
    "population":18039
  },
  {
    "state":"GA",
    "FIPS":13173,
    "county":"Lanier County",
    "number":13.48,
    "rate":1.290693220988127,
    "population":10444
  },
  {
    "state":"GA",
    "FIPS":13175,
    "county":"Laurens County",
    "number":1558.2800000000002,
    "rate":32.48446946007922,
    "population":47970
  },
  {
    "state":"GA",
    "FIPS":13177,
    "county":"Lee County",
    "number":335.24,
    "rate":11.66985762523062,
    "population":28727
  },
  {
    "state":"GA",
    "FIPS":13179,
    "county":"Liberty County",
    "number":311.96000000000004,
    "rate":4.7706870976128215,
    "population":65391
  },
  {
    "state":"GA",
    "FIPS":13185,
    "county":"Lowndes County",
    "number":1630.59,
    "rate":14.220096277950255,
    "population":114668
  },
  {
    "state":"GA",
    "FIPS":13187,
    "county":"Lumpkin County",
    "number":593.6,
    "rate":19.322287685947725,
    "population":30721
  },
  {
    "state":"GA",
    "FIPS":13193,
    "county":"Macon County",
    "number":69.46000000000001,
    "rate":4.866190276026343,
    "population":14274
  },
  {
    "state":"GA",
    "FIPS":13195,
    "county":"Madison County",
    "number":361.11,
    "rate":12.888500249839389,
    "population":28018
  },
  {
    "state":"GA",
    "FIPS":13189,
    "county":"McDuffie County",
    "number":487.56000000000006,
    "rate":22.592094898290167,
    "population":21581
  },
  {
    "state":"GA",
    "FIPS":13191,
    "county":"McIntosh County",
    "number":13.67,
    "rate":0.9818991524206292,
    "population":13922
  },
  {
    "state":"GA",
    "FIPS":13199,
    "county":"Meriwether County",
    "number":55.230000000000004,
    "rate":2.591011446800526,
    "population":21316
  },
  {
    "state":"GA",
    "FIPS":13201,
    "county":"Miller County",
    "number":53.34,
    "rate":8.916750250752257,
    "population":5982
  },
  {
    "state":"GA",
    "FIPS":13205,
    "county":"Mitchell County",
    "number":286.24,
    "rate":12.380087366463389,
    "population":23121
  },
  {
    "state":"GA",
    "FIPS":13207,
    "county":"Monroe County",
    "number":578.71,
    "rate":21.641299876593997,
    "population":26741
  },
  {
    "state":"GA",
    "FIPS":13209,
    "county":"Montgomery County",
    "number":10.72,
    "rate":1.2032775844651475,
    "population":8909
  },
  {
    "state":"GA",
    "FIPS":13211,
    "county":"Morgan County",
    "number":225.92,
    "rate":12.675756045559108,
    "population":17823
  },
  {
    "state":"GA",
    "FIPS":13213,
    "county":"Murray County",
    "number":278.11,
    "rate":7.059704523531503,
    "population":39394
  },
  {
    "state":"GA",
    "FIPS":13215,
    "county":"Muscogee County",
    "number":20060.140000000003,
    "rate":100.28014257077301,
    "population":200041
  },
  {
    "state":"GA",
    "FIPS":13217,
    "county":"Newton County",
    "number":774.2500000000002,
    "rate":7.6646273857606735,
    "population":101016
  },
  {
    "state":"GA",
    "FIPS":13219,
    "county":"Oconee County",
    "number":1461.38,
    "rate":43.5972553699284,
    "population":33520
  },
  {
    "state":"GA",
    "FIPS":13221,
    "county":"Oglethorpe County",
    "number":34.58,
    "rate":2.368979927382339,
    "population":14597
  },
  {
    "state":"GA",
    "FIPS":13223,
    "county":"Paulding County",
    "number":949.8399999999999,
    "rate":6.547640384376765,
    "population":145066
  },
  {
    "state":"GA",
    "FIPS":13225,
    "county":"Peach County",
    "number":4682.920000000001,
    "rate":170.22609960014543,
    "population":27510
  },
  {
    "state":"GA",
    "FIPS":13227,
    "county":"Pickens County",
    "number":54164.150000000016,
    "rate":1847.596875426389,
    "population":29316
  },
  {
    "state":"GA",
    "FIPS":13229,
    "county":"Pierce County",
    "number":212.00999999999996,
    "rate":11.256172020175203,
    "population":18835
  },
  {
    "state":"GA",
    "FIPS":13235,
    "county":"Pulaski County",
    "number":110.79,
    "rate":9.485445205479452,
    "population":11680
  },
  {
    "state":"GA",
    "FIPS":13237,
    "county":"Putnam County",
    "number":146.91,
    "rate":6.942488540239118,
    "population":21161
  },
  {
    "state":"GA",
    "FIPS":13241,
    "county":"Rabun County",
    "number":292.63,
    "rate":17.94505427117189,
    "population":16307
  },
  {
    "state":"GA",
    "FIPS":13245,
    "county":"Richmond County",
    "number":68358.27999999993,
    "rate":338.46429597060853,
    "population":201966
  },
  {
    "state":"GA",
    "FIPS":13247,
    "county":"Rockdale County",
    "number":3533.6000000000017,
    "rate":41.2399047663508,
    "population":85684
  },
  {
    "state":"GA",
    "FIPS":13251,
    "county":"Screven County",
    "number":36.239999999999995,
    "rate":2.5521126760563377,
    "population":14200
  },
  {
    "state":"GA",
    "FIPS":13253,
    "county":"Seminole County",
    "number":16.15,
    "rate":1.8115535614133482,
    "population":8915
  },
  {
    "state":"GA",
    "FIPS":13255,
    "county":"Spalding County",
    "number":2528.37,
    "rate":39.630244988165956,
    "population":63799
  },
  {
    "state":"GA",
    "FIPS":13257,
    "county":"Stephens County",
    "number":956.7,
    "rate":37.18950437317784,
    "population":25725
  },
  {
    "state":"GA",
    "FIPS":13261,
    "county":"Sumter County",
    "number":938.5699999999999,
    "rate":29.672473206664346,
    "population":31631
  },
  {
    "state":"GA",
    "FIPS":13267,
    "county":"Tattnall County",
    "number":108.28999999999999,
    "rate":4.27939142461964,
    "population":25305
  },
  {
    "state":"GA",
    "FIPS":13271,
    "county":"Telfair County",
    "number":79.54,
    "rate":4.841438918984723,
    "population":16429
  },
  {
    "state":"GA",
    "FIPS":13273,
    "county":"Terrell County",
    "number":128.95999999999998,
    "rate":13.946144695576942,
    "population":9247
  },
  {
    "state":"GA",
    "FIPS":13275,
    "county":"Thomas County",
    "number":978.53,
    "rate":21.9746238490905,
    "population":44530
  },
  {
    "state":"GA",
    "FIPS":13277,
    "county":"Tift County",
    "number":1941.5899999999995,
    "rate":47.36278479777527,
    "population":40994
  },
  {
    "state":"GA",
    "FIPS":13279,
    "county":"Toombs County",
    "number":689.38,
    "rate":25.329022302237572,
    "population":27217
  },
  {
    "state":"GA",
    "FIPS":13281,
    "county":"Towns County",
    "number":38.489999999999995,
    "rate":3.670258415180699,
    "population":10487
  },
  {
    "state":"GA",
    "FIPS":13285,
    "county":"Troup County",
    "number":950.22,
    "rate":13.877497371188225,
    "population":68472
  },
  {
    "state":"GA",
    "FIPS":13287,
    "county":"Turner County",
    "number":68.75999999999999,
    "rate":8.216035368622295,
    "population":8369
  },
  {
    "state":"GA",
    "FIPS":13291,
    "county":"Union County",
    "number":501.25000000000006,
    "rate":23.334574740468323,
    "population":21481
  },
  {
    "state":"GA",
    "FIPS":13293,
    "county":"Upson County",
    "number":395.93,
    "rate":14.876197632913772,
    "population":26615
  },
  {
    "state":"GA",
    "FIPS":13295,
    "county":"Walker County",
    "number":380.43999999999994,
    "rate":5.579608119206851,
    "population":68184
  },
  {
    "state":"GA",
    "FIPS":13297,
    "county":"Walton County",
    "number":701.5999999999999,
    "rate":8.267053153758232,
    "population":84867
  },
  {
    "state":"GA",
    "FIPS":13299,
    "county":"Ware County",
    "number":1155.4699999999998,
    "rate":32.263081476517556,
    "population":35814
  },
  {
    "state":"GA",
    "FIPS":13301,
    "county":"Warren County",
    "number":257.98999999999995,
    "rate":46.3760560848463,
    "population":5563
  },
  {
    "state":"GA",
    "FIPS":13303,
    "county":"Washington County",
    "number":1085.5999999999997,
    "rate":52.04967157309295,
    "population":20857
  },
  {
    "state":"GA",
    "FIPS":13305,
    "county":"Wayne County",
    "number":183.03000000000003,
    "rate":6.026472621909059,
    "population":30371
  },
  {
    "state":"GA",
    "FIPS":13311,
    "county":"White County",
    "number":86.72,
    "rate":3.1446495267795624,
    "population":27577
  },
  {
    "state":"GA",
    "FIPS":13313,
    "county":"Whitfield County",
    "number":2658.1099999999997,
    "rate":25.76012482192524,
    "population":103187
  },
  {
    "state":"GA",
    "FIPS":13317,
    "county":"Wilkes County",
    "number":46.04,
    "rate":4.582918574557038,
    "population":10046
  },
  {
    "state":"GA",
    "FIPS":13319,
    "county":"Wilkinson County",
    "number":22.62,
    "rate":2.370572207084469,
    "population":9542
  },
  {
    "state":"GA",
    "FIPS":13321,
    "county":"Worth County",
    "number":118.80000000000001,
    "rate":5.533302282254309,
    "population":21470
  },
  {
    "state":"HI",
    "FIPS":15001,
    "county":"Hawaii County",
    "number":5729.080000000002,
    "rate":30.3212558085379,
    "population":188946
  },
  {
    "state":"HI",
    "FIPS":15003,
    "county":"Honolulu County",
    "number":152177.77000000008,
    "rate":155.8007608938251,
    "population":976746
  },
  {
    "state":"HI",
    "FIPS":15007,
    "county":"Kauai County",
    "number":1579.3700000000001,
    "rate":23.038670809446707,
    "population":68553
  },
  {
    "state":"HI",
    "FIPS":15009,
    "county":"Maui County",
    "number":21614.79,
    "rate":136.42944607150073,
    "population":158432
  },
  {
    "state":"IA",
    "FIPS":19001,
    "county":"Adair County",
    "number":24.41,
    "rate":3.2481703260146375,
    "population":7515
  },
  {
    "state":"IA",
    "FIPS":19005,
    "county":"Allamakee County",
    "number":84.74,
    "rate":5.996744745594791,
    "population":14131
  },
  {
    "state":"IA",
    "FIPS":19007,
    "county":"Appanoose County",
    "number":88.96,
    "rate":6.9986625757218155,
    "population":12711
  },
  {
    "state":"IA",
    "FIPS":19009,
    "county":"Audubon County",
    "number":31.18,
    "rate":5.306330837304288,
    "population":5876
  },
  {
    "state":"IA",
    "FIPS":19011,
    "county":"Benton County",
    "number":75.05,
    "rate":2.902053284869108,
    "population":25861
  },
  {
    "state":"IA",
    "FIPS":19013,
    "county":"Black Hawk County",
    "number":2736.0300000000007,
    "rate":20.78086905006039,
    "population":131661
  },
  {
    "state":"IA",
    "FIPS":19015,
    "county":"Boone County",
    "number":645.49,
    "rate":24.605092627887473,
    "population":26234
  },
  {
    "state":"IA",
    "FIPS":19017,
    "county":"Bremer County",
    "number":245.87,
    "rate":10.05068879532355,
    "population":24463
  },
  {
    "state":"IA",
    "FIPS":19019,
    "county":"Buchanan County",
    "number":707.62,
    "rate":33.78951389552096,
    "population":20942
  },
  {
    "state":"IA",
    "FIPS":19021,
    "county":"Buena Vista County",
    "number":89.4,
    "rate":4.350788397897606,
    "population":20548
  },
  {
    "state":"IA",
    "FIPS":19027,
    "county":"Carroll County",
    "number":440.34,
    "rate":21.299216407081357,
    "population":20674
  },
  {
    "state":"IA",
    "FIPS":19029,
    "county":"Cass County",
    "number":287.03000000000003,
    "rate":20.92055393586006,
    "population":13720
  },
  {
    "state":"IA",
    "FIPS":19031,
    "county":"Cedar County",
    "number":141.05999999999997,
    "rate":7.655902306648573,
    "population":18425
  },
  {
    "state":"IA",
    "FIPS":19033,
    "county":"Cerro Gordo County",
    "number":39466.909999999996,
    "rate":902.9056759168172,
    "population":43711
  },
  {
    "state":"IA",
    "FIPS":19035,
    "county":"Cherokee County",
    "number":308.55999999999995,
    "rate":25.754110675235786,
    "population":11981
  },
  {
    "state":"IA",
    "FIPS":19045,
    "county":"Clinton County",
    "number":1259.05,
    "rate":25.840978593272173,
    "population":48723
  },
  {
    "state":"IA",
    "FIPS":19047,
    "county":"Crawford County",
    "number":142.31,
    "rate":8.223159597827342,
    "population":17306
  },
  {
    "state":"IA",
    "FIPS":19049,
    "county":"Dallas County",
    "number":2815.1499999999996,
    "rate":39.03370724199609,
    "population":72121
  },
  {
    "state":"IA",
    "FIPS":19051,
    "county":"Davis County",
    "number":234.49999999999997,
    "rate":26.926168331610974,
    "population":8709
  },
  {
    "state":"IA",
    "FIPS":19055,
    "county":"Delaware County",
    "number":46.349999999999994,
    "rate":2.6377190985659,
    "population":17572
  },
  {
    "state":"IA",
    "FIPS":19057,
    "county":"Des Moines County",
    "number":452.32,
    "rate":11.231903851406718,
    "population":40271
  },
  {
    "state":"IA",
    "FIPS":19059,
    "county":"Dickinson County",
    "number":17.91,
    "rate":1.0557029177718833,
    "population":16965
  },
  {
    "state":"IA",
    "FIPS":19061,
    "county":"Dubuque County",
    "number":3168.28,
    "rate":33.29879029291517,
    "population":95147
  },
  {
    "state":"IA",
    "FIPS":19063,
    "county":"Emmet County",
    "number":216.61999999999998,
    "rate":21.668500550165046,
    "population":9997
  },
  {
    "state":"IA",
    "FIPS":19065,
    "county":"Fayette County",
    "number":35.53,
    "rate":1.7086659613350006,
    "population":20794
  },
  {
    "state":"IA",
    "FIPS":19067,
    "county":"Floyd County",
    "number":165.42,
    "rate":10.251611303916707,
    "population":16136
  },
  {
    "state":"IA",
    "FIPS":19069,
    "county":"Franklin County",
    "number":161.85000000000002,
    "rate":15.376211286338593,
    "population":10526
  },
  {
    "state":"IA",
    "FIPS":19071,
    "county":"Fremont County",
    "number":120.38,
    "rate":16.874123913652927,
    "population":7134
  },
  {
    "state":"IA",
    "FIPS":19073,
    "county":"Greene County",
    "number":40.64,
    "rate":4.436196921733435,
    "population":9161
  },
  {
    "state":"IA",
    "FIPS":19075,
    "county":"Grundy County",
    "number":11.22,
    "rate":0.9031634870804154,
    "population":12423
  },
  {
    "state":"IA",
    "FIPS":19077,
    "county":"Guthrie County",
    "number":15.06,
    "rate":1.3981988673289387,
    "population":10771
  },
  {
    "state":"IA",
    "FIPS":19079,
    "county":"Hamilton County",
    "number":505.28,
    "rate":33.00757773713091,
    "population":15308
  },
  {
    "state":"IA",
    "FIPS":19081,
    "county":"Hancock County",
    "number":184.8,
    "rate":16.553206735936943,
    "population":11164
  },
  {
    "state":"IA",
    "FIPS":19083,
    "county":"Hardin County",
    "number":706.13,
    "rate":40.63355967314996,
    "population":17378
  },
  {
    "state":"IA",
    "FIPS":19085,
    "county":"Harrison County",
    "number":586.96,
    "rate":40.42424242424243,
    "population":14520
  },
  {
    "state":"IA",
    "FIPS":19087,
    "county":"Henry County",
    "number":100.46000000000001,
    "rate":4.995027844073191,
    "population":20112
  },
  {
    "state":"IA",
    "FIPS":19091,
    "county":"Humboldt County",
    "number":189.91,
    "rate":19.511969587999587,
    "population":9733
  },
  {
    "state":"IA",
    "FIPS":19093,
    "county":"Ida County",
    "number":196.57999999999998,
    "rate":27.722465096601322,
    "population":7091
  },
  {
    "state":"IA",
    "FIPS":19095,
    "county":"Iowa County",
    "number":462.56,
    "rate":28.542515117857583,
    "population":16206
  },
  {
    "state":"IA",
    "FIPS":19097,
    "county":"Jackson County",
    "number":99.02,
    "rate":5.029204124130225,
    "population":19689
  },
  {
    "state":"IA",
    "FIPS":19099,
    "county":"Jasper County",
    "number":2489.5199999999995,
    "rate":68.1239054290718,
    "population":36544
  },
  {
    "state":"IA",
    "FIPS":19101,
    "county":"Jefferson County",
    "number":670.4500000000002,
    "rate":39.24432217279327,
    "population":17084
  },
  {
    "state":"IA",
    "FIPS":19103,
    "county":"Johnson County",
    "number":16842.16,
    "rate":123.013592573386,
    "population":136913
  },
  {
    "state":"IA",
    "FIPS":19105,
    "county":"Jones County",
    "number":200.69000000000003,
    "rate":9.733255735001698,
    "population":20619
  },
  {
    "state":"IA",
    "FIPS":19107,
    "county":"Keokuk County",
    "number":27.4,
    "rate":2.6351221388728603,
    "population":10398
  },
  {
    "state":"IA",
    "FIPS":19109,
    "county":"Kossuth County",
    "number":10.71,
    "rate":0.6976744186046512,
    "population":15351
  },
  {
    "state":"IA",
    "FIPS":19111,
    "county":"Lee County",
    "number":171,
    "rate":4.8004042445679636,
    "population":35622
  },
  {
    "state":"IA",
    "FIPS":19113,
    "county":"Linn County",
    "number":37699.59000000002,
    "rate":175.1790842262763,
    "population":215206
  },
  {
    "state":"IA",
    "FIPS":19117,
    "county":"Lucas County",
    "number":68.42999999999999,
    "rate":7.808078502966682,
    "population":8764
  },
  {
    "state":"IA",
    "FIPS":19121,
    "county":"Madison County",
    "number":5735.3899999999985,
    "rate":367.0179816983425,
    "population":15627
  },
  {
    "state":"IA",
    "FIPS":19123,
    "county":"Mahaska County",
    "number":11.52,
    "rate":0.513895704153098,
    "population":22417
  },
  {
    "state":"IA",
    "FIPS":19125,
    "county":"Marion County",
    "number":283.96000000000004,
    "rate":8.507400083887593,
    "population":33378
  },
  {
    "state":"IA",
    "FIPS":19127,
    "county":"Marshall County",
    "number":109.34,
    "rate":2.663062009839739,
    "population":41058
  },
  {
    "state":"IA",
    "FIPS":19129,
    "county":"Mills County",
    "number":529.53,
    "rate":35.58430213023318,
    "population":14881
  },
  {
    "state":"IA",
    "FIPS":19131,
    "county":"Mitchell County",
    "number":44.64,
    "rate":4.161461732077934,
    "population":10727
  },
  {
    "state":"IA",
    "FIPS":19133,
    "county":"Monona County",
    "number":510.18999999999994,
    "rate":55.80726318092321,
    "population":9142
  },
  {
    "state":"IA",
    "FIPS":19135,
    "county":"Monroe County",
    "number":135.77,
    "rate":16.82195514806096,
    "population":8071
  },
  {
    "state":"IA",
    "FIPS":19137,
    "county":"Montgomery County",
    "number":834.2500000000002,
    "rate":79.01591210456529,
    "population":10558
  },
  {
    "state":"IA",
    "FIPS":19139,
    "county":"Muscatine County",
    "number":242.68,
    "rate":5.6562172240997555,
    "population":42905
  },
  {
    "state":"IA",
    "FIPS":19145,
    "county":"Page County",
    "number":355.49,
    "rate":22.569360675512666,
    "population":15751
  },
  {
    "state":"IA",
    "FIPS":19147,
    "county":"Palo Alto County",
    "number":98.23999999999998,
    "rate":10.585066264411159,
    "population":9281
  },
  {
    "state":"IA",
    "FIPS":19149,
    "county":"Plymouth County",
    "number":230.14000000000001,
    "rate":9.249628230376594,
    "population":24881
  },
  {
    "state":"IA",
    "FIPS":19153,
    "county":"Polk County",
    "number":31362.839999999997,
    "rate":70.6395725972107,
    "population":443984
  },
  {
    "state":"IA",
    "FIPS":19155,
    "county":"Pottawattamie County",
    "number":8548.830000000007,
    "rate":92.00402505434907,
    "population":92918
  },
  {
    "state":"IA",
    "FIPS":19157,
    "county":"Poweshiek County",
    "number":71.58,
    "rate":3.8157684311530464,
    "population":18759
  },
  {
    "state":"IA",
    "FIPS":19159,
    "county":"Ringgold County",
    "number":112.31,
    "rate":22.08652900688299,
    "population":5085
  },
  {
    "state":"IA",
    "FIPS":19163,
    "county":"Scott County",
    "number":2734.9200000000005,
    "rate":16.199541542525782,
    "population":168827
  },
  {
    "state":"IA",
    "FIPS":19165,
    "county":"Shelby County",
    "number":1311.7600000000002,
    "rate":108.67036699527796,
    "population":12071
  },
  {
    "state":"IA",
    "FIPS":19167,
    "county":"Sioux County",
    "number":243.36999999999998,
    "rate":7.085419820659135,
    "population":34348
  },
  {
    "state":"IA",
    "FIPS":19169,
    "county":"Story County",
    "number":640.9599999999999,
    "rate":6.988148842685971,
    "population":91721
  },
  {
    "state":"IA",
    "FIPS":19171,
    "county":"Tama County",
    "number":13.17,
    "rate":0.7514549811708319,
    "population":17526
  },
  {
    "state":"IA",
    "FIPS":19173,
    "county":"Taylor County",
    "number":14.44,
    "rate":2.3204242326852,
    "population":6223
  },
  {
    "state":"IA",
    "FIPS":19175,
    "county":"Union County",
    "number":195.23999999999998,
    "rate":15.50631403383369,
    "population":12591
  },
  {
    "state":"IA",
    "FIPS":19179,
    "county":"Wapello County",
    "number":182.01000000000002,
    "rate":5.148943393023849,
    "population":35349
  },
  {
    "state":"IA",
    "FIPS":19181,
    "county":"Warren County",
    "number":17.12,
    "rate":0.364643237486688,
    "population":46950
  },
  {
    "state":"IA",
    "FIPS":19183,
    "county":"Washington County",
    "number":1182.29,
    "rate":53.934127092742116,
    "population":21921
  },
  {
    "state":"IA",
    "FIPS":19187,
    "county":"Webster County",
    "number":390.54999999999995,
    "rate":10.483719431992053,
    "population":37253
  },
  {
    "state":"IA",
    "FIPS":19189,
    "county":"Winnebago County",
    "number":83.81,
    "rate":7.887257669866366,
    "population":10626
  },
  {
    "state":"IA",
    "FIPS":19191,
    "county":"Winneshiek County",
    "number":306.66999999999996,
    "rate":14.57834189009317,
    "population":21036
  },
  {
    "state":"IA",
    "FIPS":19193,
    "county":"Woodbury County",
    "number":7095.580000000004,
    "rate":69.34017394703415,
    "population":102330
  },
  {
    "state":"IA",
    "FIPS":19197,
    "county":"Wright County",
    "number":13.25,
    "rate":1.0186039360393604,
    "population":13008
  },
  {
    "state":"ID",
    "FIPS":16001,
    "county":"Ada County",
    "number":16945.670000000006,
    "rate":41.44300070189856,
    "population":408891
  },
  {
    "state":"ID",
    "FIPS":16005,
    "county":"Bannock County",
    "number":47100.810000000005,
    "rate":562.4581746098089,
    "population":83741
  },
  {
    "state":"ID",
    "FIPS":16007,
    "county":"Bear Lake County",
    "number":128.95,
    "rate":21.89675666496858,
    "population":5889
  },
  {
    "state":"ID",
    "FIPS":16009,
    "county":"Benewah County",
    "number":92.35,
    "rate":10.120547945205479,
    "population":9125
  },
  {
    "state":"ID",
    "FIPS":16011,
    "county":"Bingham County",
    "number":3214.1700000000005,
    "rate":70.65196843470424,
    "population":45493
  },
  {
    "state":"ID",
    "FIPS":16013,
    "county":"Blaine County",
    "number":101.31,
    "rate":4.792336802270577,
    "population":21140
  },
  {
    "state":"ID",
    "FIPS":16017,
    "county":"Bonner County",
    "number":297.06,
    "rate":7.344426039014018,
    "population":40447
  },
  {
    "state":"ID",
    "FIPS":16019,
    "county":"Bonneville County",
    "number":8329.49,
    "rate":77.93310254491018,
    "population":106880
  },
  {
    "state":"ID",
    "FIPS":16021,
    "county":"Boundary County",
    "number":69.47,
    "rate":6.411628980156898,
    "population":10835
  },
  {
    "state":"ID",
    "FIPS":16027,
    "county":"Canyon County",
    "number":1499.54,
    "rate":7.7353293166061405,
    "population":193856
  },
  {
    "state":"ID",
    "FIPS":16029,
    "county":"Caribou County",
    "number":176.04000000000002,
    "rate":25.945467943994107,
    "population":6785
  },
  {
    "state":"ID",
    "FIPS":16031,
    "county":"Cassia County",
    "number":579.92,
    "rate":24.9213579716373,
    "population":23270
  },
  {
    "state":"ID",
    "FIPS":16039,
    "county":"Elmore County",
    "number":405.81,
    "rate":15.489522500858811,
    "population":26199
  },
  {
    "state":"ID",
    "FIPS":16041,
    "county":"Franklin County",
    "number":174.70999999999995,
    "rate":13.637499024276009,
    "population":12811
  },
  {
    "state":"ID",
    "FIPS":16043,
    "county":"Fremont County",
    "number":11.96,
    "rate":0.921488558440558,
    "population":12979
  },
  {
    "state":"ID",
    "FIPS":16045,
    "county":"Gem County",
    "number":480.07000000000016,
    "rate":28.760484064222393,
    "population":16692
  },
  {
    "state":"ID",
    "FIPS":16047,
    "county":"Gooding County",
    "number":29.95,
    "rate":1.9683228180862251,
    "population":15216
  },
  {
    "state":"ID",
    "FIPS":16049,
    "county":"Idaho County",
    "number":103.67,
    "rate":6.321726934569181,
    "population":16399
  },
  {
    "state":"ID",
    "FIPS":16051,
    "county":"Jefferson County",
    "number":560.72,
    "rate":21.034625051581198,
    "population":26657
  },
  {
    "state":"ID",
    "FIPS":16053,
    "county":"Jerome County",
    "number":10.02,
    "rate":0.44503664223850764,
    "population":22515
  },
  {
    "state":"ID",
    "FIPS":16055,
    "county":"Kootenai County",
    "number":2439.79,
    "rate":17.145758519153603,
    "population":142297
  },
  {
    "state":"ID",
    "FIPS":16057,
    "county":"Latah County",
    "number":223.99,
    "rate":5.870220405168122,
    "population":38157
  },
  {
    "state":"ID",
    "FIPS":16063,
    "county":"Lincoln County",
    "number":10.02,
    "rate":1.9063926940639269,
    "population":5256
  },
  {
    "state":"ID",
    "FIPS":16065,
    "county":"Madison County",
    "number":705.6000000000001,
    "rate":18.72611464968153,
    "population":37680
  },
  {
    "state":"ID",
    "FIPS":16067,
    "county":"Minidoka County",
    "number":346.46999999999997,
    "rate":17.246751953805564,
    "population":20089
  },
  {
    "state":"ID",
    "FIPS":16069,
    "county":"Nez Perce County",
    "number":567.86,
    "rate":14.348232559314754,
    "population":39577
  },
  {
    "state":"ID",
    "FIPS":16071,
    "county":"Oneida County",
    "number":22.5,
    "rate":5.327965901018234,
    "population":4223
  },
  {
    "state":"ID",
    "FIPS":16075,
    "county":"Payette County",
    "number":337.24999999999994,
    "rate":14.8745203546068,
    "population":22673
  },
  {
    "state":"ID",
    "FIPS":16077,
    "county":"Power County",
    "number":65.95,
    "rate":8.477953464455586,
    "population":7779
  },
  {
    "state":"ID",
    "FIPS":16079,
    "county":"Shoshone County",
    "number":447.93000000000006,
    "rate":35.27285613040397,
    "population":12699
  },
  {
    "state":"ID",
    "FIPS":16081,
    "county":"Teton County",
    "number":62.96999999999999,
    "rate":6.2426886091008225,
    "population":10087
  },
  {
    "state":"ID",
    "FIPS":16083,
    "county":"Twin Falls County",
    "number":9004.52,
    "rate":114.86529237677316,
    "population":78392
  },
  {
    "state":"ID",
    "FIPS":16087,
    "county":"Washington County",
    "number":50.24,
    "rate":5.003485708594761,
    "population":10041
  },
  {
    "state":"IL",
    "FIPS":17001,
    "county":"Adams County",
    "number":4782.649999999996,
    "rate":71.1714460036607,
    "population":67199
  },
  {
    "state":"IL",
    "FIPS":17003,
    "county":"Alexander County",
    "number":161.4,
    "rate":20.825806451612905,
    "population":7750
  },
  {
    "state":"IL",
    "FIPS":17005,
    "county":"Bond County",
    "number":191.65,
    "rate":10.87622722887464,
    "population":17621
  },
  {
    "state":"IL",
    "FIPS":17007,
    "county":"Boone County",
    "number":3015.27,
    "rate":55.96269487750556,
    "population":53880
  },
  {
    "state":"IL",
    "FIPS":17009,
    "county":"Brown County",
    "number":22.59,
    "rate":3.2682291666666665,
    "population":6912
  },
  {
    "state":"IL",
    "FIPS":17011,
    "county":"Bureau County",
    "number":598.23,
    "rate":17.422314121792816,
    "population":34337
  },
  {
    "state":"IL",
    "FIPS":17013,
    "county":"Calhoun County",
    "number":85.78999999999999,
    "rate":17.082835523695735,
    "population":5022
  },
  {
    "state":"IL",
    "FIPS":17015,
    "county":"Carroll County",
    "number":157.13,
    "rate":10.473238685596213,
    "population":15003
  },
  {
    "state":"IL",
    "FIPS":17017,
    "county":"Cass County",
    "number":75.6,
    "rate":5.632543585158694,
    "population":13422
  },
  {
    "state":"IL",
    "FIPS":17019,
    "county":"Champaign County",
    "number":9873.619999999999,
    "rate":48.397962834972965,
    "population":204009
  },
  {
    "state":"IL",
    "FIPS":17021,
    "county":"Christian County",
    "number":444.04999999999995,
    "rate":12.866911999072757,
    "population":34511
  },
  {
    "state":"IL",
    "FIPS":17023,
    "county":"Clark County",
    "number":272.17,
    "rate":16.693449460255156,
    "population":16304
  },
  {
    "state":"IL",
    "FIPS":17025,
    "county":"Clay County",
    "number":139.61,
    "rate":10.166023447171048,
    "population":13733
  },
  {
    "state":"IL",
    "FIPS":17027,
    "county":"Clinton County",
    "number":231.71999999999997,
    "rate":6.088761594450428,
    "population":38057
  },
  {
    "state":"IL",
    "FIPS":17029,
    "county":"Coles County",
    "number":3772.629999999999,
    "rate":70.3442039119166,
    "population":53631
  },
  {
    "state":"IL",
    "FIPS":17031,
    "county":"Cook County",
    "number":781810.8699999956,
    "rate":149.41897315541337,
    "population":5232340
  },
  {
    "state":"IL",
    "FIPS":17033,
    "county":"Crawford County",
    "number":44.86,
    "rate":2.2856269424772,
    "population":19627
  },
  {
    "state":"IL",
    "FIPS":17039,
    "county":"De Witt County",
    "number":518.58,
    "rate":31.444336648071793,
    "population":16492
  },
  {
    "state":"IL",
    "FIPS":17037,
    "county":"Dekalb County",
    "number":3884.94,
    "rate":37.10792507617511,
    "population":104693
  },
  {
    "state":"IL",
    "FIPS":17041,
    "county":"Douglas County",
    "number":119.94,
    "rate":6.047801532876159,
    "population":19832
  },
  {
    "state":"IL",
    "FIPS":17043,
    "county":"Dupage County",
    "number":199010.94000000044,
    "rate":214.6983007401834,
    "population":926933
  },
  {
    "state":"IL",
    "FIPS":17045,
    "county":"Edgar County",
    "number":1589.9599999999996,
    "rate":87.58662480030847,
    "population":18153
  },
  {
    "state":"IL",
    "FIPS":17047,
    "county":"Edwards County",
    "number":223.41000000000003,
    "rate":33.19120487297579,
    "population":6731
  },
  {
    "state":"IL",
    "FIPS":17049,
    "county":"Effingham County",
    "number":2369.0099999999998,
    "rate":69.02307557834624,
    "population":34322
  },
  {
    "state":"IL",
    "FIPS":17051,
    "county":"Fayette County",
    "number":191.61,
    "rate":8.70084460993552,
    "population":22022
  },
  {
    "state":"IL",
    "FIPS":17053,
    "county":"Ford County",
    "number":1022.4199999999998,
    "rate":73.04043434776396,
    "population":13998
  },
  {
    "state":"IL",
    "FIPS":17055,
    "county":"Franklin County",
    "number":230.23000000000002,
    "rate":5.775676082484572,
    "population":39862
  },
  {
    "state":"IL",
    "FIPS":17057,
    "county":"Fulton County",
    "number":283.05999999999995,
    "rate":7.7214326631932115,
    "population":36659
  },
  {
    "state":"IL",
    "FIPS":17061,
    "county":"Greene County",
    "number":193.65,
    "rate":14.222238542890718,
    "population":13616
  },
  {
    "state":"IL",
    "FIPS":17063,
    "county":"Grundy County",
    "number":1118.3400000000004,
    "rate":22.2999002991027,
    "population":50150
  },
  {
    "state":"IL",
    "FIPS":17065,
    "county":"Hamilton County",
    "number":11.06,
    "rate":1.3223338115734098,
    "population":8364
  },
  {
    "state":"IL",
    "FIPS":17067,
    "county":"Hancock County",
    "number":106.9,
    "rate":5.675603928855853,
    "population":18835
  },
  {
    "state":"IL",
    "FIPS":17069,
    "county":"Hardin County",
    "number":20.56,
    "rate":4.829692271552736,
    "population":4257
  },
  {
    "state":"IL",
    "FIPS":17073,
    "county":"Henry County",
    "number":332.7,
    "rate":6.644564718100297,
    "population":50071
  },
  {
    "state":"IL",
    "FIPS":17075,
    "county":"Iroquois County",
    "number":506.31000000000006,
    "rate":17.286694663525555,
    "population":29289
  },
  {
    "state":"IL",
    "FIPS":17077,
    "county":"Jackson County",
    "number":2320.37,
    "rate":38.53539044076128,
    "population":60214
  },
  {
    "state":"IL",
    "FIPS":17081,
    "county":"Jefferson County",
    "number":3001.62,
    "rate":77.50116189000775,
    "population":38730
  },
  {
    "state":"IL",
    "FIPS":17083,
    "county":"Jersey County",
    "number":635.56,
    "rate":27.958824564490584,
    "population":22732
  },
  {
    "state":"IL",
    "FIPS":17085,
    "county":"Jo Daviess County",
    "number":120.75,
    "rate":5.39544235924933,
    "population":22380
  },
  {
    "state":"IL",
    "FIPS":17089,
    "county":"Kane County",
    "number":25347.660000000014,
    "rate":48.57334485659483,
    "population":521843
  },
  {
    "state":"IL",
    "FIPS":17091,
    "county":"Kankakee County",
    "number":5632.720000000005,
    "rate":49.87974425730128,
    "population":112926
  },
  {
    "state":"IL",
    "FIPS":17093,
    "county":"Kendall County",
    "number":2126.36,
    "rate":17.997883956155572,
    "population":118145
  },
  {
    "state":"IL",
    "FIPS":17095,
    "county":"Knox County",
    "number":22704.190000000002,
    "rate":433.9983560805903,
    "population":52314
  },
  {
    "state":"IL",
    "FIPS":17099,
    "county":"La Salle County",
    "number":9244.6,
    "rate":81.89613933133715,
    "population":112882
  },
  {
    "state":"IL",
    "FIPS":17097,
    "county":"Lake County",
    "number":28720.610000000048,
    "rate":40.94095191393466,
    "population":701513
  },
  {
    "state":"IL",
    "FIPS":17101,
    "county":"Lawrence County",
    "number":180.31,
    "rate":10.798299197508683,
    "population":16698
  },
  {
    "state":"IL",
    "FIPS":17103,
    "county":"Lee County",
    "number":811.6500000000002,
    "rate":23.096952277965915,
    "population":35141
  },
  {
    "state":"IL",
    "FIPS":17105,
    "county":"Livingston County",
    "number":263.08,
    "rate":6.827040352925912,
    "population":38535
  },
  {
    "state":"IL",
    "FIPS":17115,
    "county":"Macon County",
    "number":7606.599999999997,
    "rate":69.1238879347164,
    "population":110043
  },
  {
    "state":"IL",
    "FIPS":17117,
    "county":"Macoupin County",
    "number":444.6000000000001,
    "rate":9.4178952719878,
    "population":47208
  },
  {
    "state":"IL",
    "FIPS":17119,
    "county":"Madison County",
    "number":10345.529999999995,
    "rate":38.59710713739417,
    "population":268039
  },
  {
    "state":"IL",
    "FIPS":17121,
    "county":"Marion County",
    "number":1036.75,
    "rate":26.635922205379853,
    "population":38923
  },
  {
    "state":"IL",
    "FIPS":17123,
    "county":"Marshall County",
    "number":838.9100000000001,
    "rate":68.19852044549224,
    "population":12301
  },
  {
    "state":"IL",
    "FIPS":17127,
    "county":"Massac County",
    "number":695.34,
    "rate":45.918246054282505,
    "population":15143
  },
  {
    "state":"IL",
    "FIPS":17109,
    "county":"McDonough County",
    "number":288.5,
    "rate":8.864648947611,
    "population":32545
  },
  {
    "state":"IL",
    "FIPS":17111,
    "county":"McHenry County",
    "number":26390.90000000002,
    "rate":85.74738039151985,
    "population":307775
  },
  {
    "state":"IL",
    "FIPS":17113,
    "county":"McLean County",
    "number":2429.3399999999997,
    "rate":14.089828208191717,
    "population":172418
  },
  {
    "state":"IL",
    "FIPS":17131,
    "county":"Mercer County",
    "number":356.16999999999996,
    "rate":22.018422354104846,
    "population":16176
  },
  {
    "state":"IL",
    "FIPS":17133,
    "county":"Monroe County",
    "number":312.59000000000003,
    "rate":9.378356484953947,
    "population":33331
  },
  {
    "state":"IL",
    "FIPS":17135,
    "county":"Montgomery County",
    "number":263.18,
    "rate":8.853826745164003,
    "population":29725
  },
  {
    "state":"IL",
    "FIPS":17137,
    "county":"Morgan County",
    "number":462.80000000000007,
    "rate":13.118285665693472,
    "population":35279
  },
  {
    "state":"IL",
    "FIPS":17139,
    "county":"Moultrie County",
    "number":411.86000000000007,
    "rate":27.50684565551326,
    "population":14973
  },
  {
    "state":"IL",
    "FIPS":17141,
    "county":"Ogle County",
    "number":956.1100000000001,
    "rate":18.094778478018135,
    "population":52839
  },
  {
    "state":"IL",
    "FIPS":17143,
    "county":"Peoria County",
    "number":44855.520000000004,
    "rate":239.62178072898027,
    "population":187193
  },
  {
    "state":"IL",
    "FIPS":17145,
    "county":"Perry County",
    "number":988.3000000000002,
    "rate":44.78024467603082,
    "population":22070
  },
  {
    "state":"IL",
    "FIPS":17149,
    "county":"Pike County",
    "number":3731.0900000000006,
    "rate":229.19651084218935,
    "population":16279
  },
  {
    "state":"IL",
    "FIPS":17155,
    "county":"Putnam County",
    "number":250.10999999999999,
    "rate":42.57191489361702,
    "population":5875
  },
  {
    "state":"IL",
    "FIPS":17157,
    "county":"Randolph County",
    "number":617.97,
    "rate":18.756487692354387,
    "population":32947
  },
  {
    "state":"IL",
    "FIPS":17159,
    "county":"Richland County",
    "number":2111.1,
    "rate":130.59696875966594,
    "population":16165
  },
  {
    "state":"IL",
    "FIPS":17161,
    "county":"Rock Island County",
    "number":33646.61,
    "rate":228.78733893176488,
    "population":147065
  },
  {
    "state":"IL",
    "FIPS":17165,
    "county":"Saline County",
    "number":1953.5100000000002,
    "rate":78.19983187222289,
    "population":24981
  },
  {
    "state":"IL",
    "FIPS":17167,
    "county":"Sangamon County",
    "number":9684.230000000003,
    "rate":48.60414460443571,
    "population":199247
  },
  {
    "state":"IL",
    "FIPS":17169,
    "county":"Schuyler County",
    "number":47.06,
    "rate":6.286401282393802,
    "population":7486
  },
  {
    "state":"IL",
    "FIPS":17173,
    "county":"Shelby County",
    "number":391.33999999999986,
    "rate":17.601763144874727,
    "population":22233
  },
  {
    "state":"IL",
    "FIPS":17163,
    "county":"St Clair County",
    "number":30839.27000000005,
    "rate":114.73582975240451,
    "population":268785
  },
  {
    "state":"IL",
    "FIPS":17175,
    "county":"Stark County",
    "number":55.150000000000006,
    "rate":9.28920330133064,
    "population":5937
  },
  {
    "state":"IL",
    "FIPS":17177,
    "county":"Stephenson County",
    "number":863.7799999999999,
    "rate":18.388861686500753,
    "population":46973
  },
  {
    "state":"IL",
    "FIPS":17179,
    "county":"Tazewell County",
    "number":3026.07,
    "rate":22.235146295942513,
    "population":136094
  },
  {
    "state":"IL",
    "FIPS":17181,
    "county":"Union County",
    "number":79.4,
    "rate":4.503176043557168,
    "population":17632
  },
  {
    "state":"IL",
    "FIPS":17183,
    "county":"Vermilion County",
    "number":4691.099999999999,
    "rate":58.08404734782824,
    "population":80764
  },
  {
    "state":"IL",
    "FIPS":17185,
    "county":"Wabash County",
    "number":308.7,
    "rate":26.348583134175488,
    "population":11716
  },
  {
    "state":"IL",
    "FIPS":17187,
    "county":"Warren County",
    "number":165,
    "rate":9.27748102333427,
    "population":17785
  },
  {
    "state":"IL",
    "FIPS":17189,
    "county":"Washington County",
    "number":84.25,
    "rate":5.7662035452741085,
    "population":14611
  },
  {
    "state":"IL",
    "FIPS":17191,
    "county":"Wayne County",
    "number":589.35,
    "rate":35.45815534564708,
    "population":16621
  },
  {
    "state":"IL",
    "FIPS":17193,
    "county":"White County",
    "number":41.54,
    "rate":2.848717597037443,
    "population":14582
  },
  {
    "state":"IL",
    "FIPS":17195,
    "county":"Whiteside County",
    "number":1935.130000000001,
    "rate":33.58026619466571,
    "population":57627
  },
  {
    "state":"IL",
    "FIPS":17197,
    "county":"Will County",
    "number":22898.199999999986,
    "rate":33.56586976884635,
    "population":682187
  },
  {
    "state":"IL",
    "FIPS":17199,
    "county":"Williamson County",
    "number":5855.369999999999,
    "rate":87.69462333383255,
    "population":66770
  },
  {
    "state":"IL",
    "FIPS":17201,
    "county":"Winnebago County",
    "number":8112.46,
    "rate":27.78972537278666,
    "population":291923
  },
  {
    "state":"IL",
    "FIPS":17203,
    "county":"Woodford County",
    "number":238.88,
    "rate":6.136929993577393,
    "population":38925
  },
  {
    "state":"IN",
    "FIPS":18001,
    "county":"Adams County",
    "number":619.27,
    "rate":18.00151158396558,
    "population":34401
  },
  {
    "state":"IN",
    "FIPS":18003,
    "county":"Allen County",
    "number":24351.11,
    "rate":67.48600456722242,
    "population":360832
  },
  {
    "state":"IN",
    "FIPS":18005,
    "county":"Bartholomew County",
    "number":2555.4099999999994,
    "rate":32.386728007807044,
    "population":78903
  },
  {
    "state":"IN",
    "FIPS":18009,
    "county":"Blackford County",
    "number":556.26,
    "rate":44.33057060886197,
    "population":12548
  },
  {
    "state":"IN",
    "FIPS":18011,
    "county":"Boone County",
    "number":13874.779999999997,
    "rate":234.86322702958896,
    "population":59076
  },
  {
    "state":"IN",
    "FIPS":18013,
    "county":"Brown County",
    "number":10.02,
    "rate":0.6649853995221662,
    "population":15068
  },
  {
    "state":"IN",
    "FIPS":18015,
    "county":"Carroll County",
    "number":12.74,
    "rate":0.6339570063694268,
    "population":20096
  },
  {
    "state":"IN",
    "FIPS":18017,
    "county":"Cass County",
    "number":333.88,
    "rate":8.617147576524028,
    "population":38746
  },
  {
    "state":"IN",
    "FIPS":18019,
    "county":"Clark County",
    "number":4448.05,
    "rate":39.743475191879845,
    "population":111919
  },
  {
    "state":"IN",
    "FIPS":18021,
    "county":"Clay County",
    "number":636.1999999999999,
    "rate":23.690188046918635,
    "population":26855
  },
  {
    "state":"IN",
    "FIPS":18023,
    "county":"Clinton County",
    "number":207.57999999999998,
    "rate":6.298510179931426,
    "population":32957
  },
  {
    "state":"IN",
    "FIPS":18025,
    "county":"Crawford County",
    "number":12.2,
    "rate":1.1460779708783466,
    "population":10645
  },
  {
    "state":"IN",
    "FIPS":18027,
    "county":"Daviess County",
    "number":225.5,
    "rate":7.021422344002989,
    "population":32116
  },
  {
    "state":"IN",
    "FIPS":18033,
    "county":"De Kalb County",
    "number":1254.48,
    "rate":29.68832090876819,
    "population":42255
  },
  {
    "state":"IN",
    "FIPS":18029,
    "county":"Dearborn County",
    "number":1661.4499999999998,
    "rate":33.37451287613997,
    "population":49782
  },
  {
    "state":"IN",
    "FIPS":18031,
    "county":"Decatur County",
    "number":427.28000000000003,
    "rate":16.381551201932297,
    "population":26083
  },
  {
    "state":"IN",
    "FIPS":18035,
    "county":"Delaware County",
    "number":22317.15000000001,
    "rate":190.24243664168998,
    "population":117309
  },
  {
    "state":"IN",
    "FIPS":18037,
    "county":"Dubois County",
    "number":1302.6,
    "rate":30.945027794935143,
    "population":42094
  },
  {
    "state":"IN",
    "FIPS":18039,
    "county":"Elkhart County",
    "number":17601.22000000001,
    "rate":88.34357244674662,
    "population":199236
  },
  {
    "state":"IN",
    "FIPS":18041,
    "county":"Fayette County",
    "number":331.77,
    "rate":13.843939077821823,
    "population":23965
  },
  {
    "state":"IN",
    "FIPS":18043,
    "county":"Floyd County",
    "number":15362.87,
    "rate":204.06553849423517,
    "population":75284
  },
  {
    "state":"IN",
    "FIPS":18045,
    "county":"Fountain County",
    "number":73.88,
    "rate":4.3204678362573095,
    "population":17100
  },
  {
    "state":"IN",
    "FIPS":18047,
    "county":"Franklin County",
    "number":106.35,
    "rate":4.62672931349517,
    "population":22986
  },
  {
    "state":"IN",
    "FIPS":18049,
    "county":"Fulton County",
    "number":695.94,
    "rate":33.67886178861789,
    "population":20664
  },
  {
    "state":"IN",
    "FIPS":18051,
    "county":"Gibson County",
    "number":943.8900000000001,
    "rate":28.13299156508003,
    "population":33551
  },
  {
    "state":"IN",
    "FIPS":18053,
    "county":"Grant County",
    "number":512.49,
    "rate":7.397052668042665,
    "population":69283
  },
  {
    "state":"IN",
    "FIPS":18055,
    "county":"Greene County",
    "number":146.56,
    "rate":4.437312664628053,
    "population":33029
  },
  {
    "state":"IN",
    "FIPS":18057,
    "county":"Hamilton County",
    "number":69222.32999999997,
    "rate":239.05214628587206,
    "population":289570
  },
  {
    "state":"IN",
    "FIPS":18059,
    "county":"Hancock County",
    "number":5362.019999999999,
    "rate":75.90521085488595,
    "population":70641
  },
  {
    "state":"IN",
    "FIPS":18061,
    "county":"Harrison County",
    "number":117.31,
    "rate":3.000332489321978,
    "population":39099
  },
  {
    "state":"IN",
    "FIPS":18063,
    "county":"Hendricks County",
    "number":6848.520000000001,
    "rate":45.438091320444265,
    "population":150722
  },
  {
    "state":"IN",
    "FIPS":18065,
    "county":"Henry County",
    "number":1049.82,
    "rate":21.31224750806959,
    "population":49259
  },
  {
    "state":"IN",
    "FIPS":18067,
    "county":"Howard County",
    "number":8458.860000000002,
    "rate":101.94713943089924,
    "population":82973
  },
  {
    "state":"IN",
    "FIPS":18069,
    "county":"Huntington County",
    "number":3261.4200000000005,
    "rate":88.19654398442361,
    "population":36979
  },
  {
    "state":"IN",
    "FIPS":18071,
    "county":"Jackson County",
    "number":1428.44,
    "rate":33.2272621539893,
    "population":42990
  },
  {
    "state":"IN",
    "FIPS":18073,
    "county":"Jasper County",
    "number":1405.94,
    "rate":42.027321914327565,
    "population":33453
  },
  {
    "state":"IN",
    "FIPS":18075,
    "county":"Jay County",
    "number":179.04999999999998,
    "rate":8.37856808610201,
    "population":21370
  },
  {
    "state":"IN",
    "FIPS":18077,
    "county":"Jefferson County",
    "number":1067.7700000000002,
    "rate":32.84839721897497,
    "population":32506
  },
  {
    "state":"IN",
    "FIPS":18079,
    "county":"Jennings County",
    "number":245.62,
    "rate":8.71549215811511,
    "population":28182
  },
  {
    "state":"IN",
    "FIPS":18081,
    "county":"Johnson County",
    "number":10888.80999999999,
    "rate":75.84743873727024,
    "population":143562
  },
  {
    "state":"IN",
    "FIPS":18083,
    "county":"Knox County",
    "number":9195.06,
    "rate":241.6509421565793,
    "population":38051
  },
  {
    "state":"IN",
    "FIPS":18085,
    "county":"Kosciusko County",
    "number":2773.36,
    "rate":35.714322507533424,
    "population":77654
  },
  {
    "state":"IN",
    "FIPS":18091,
    "county":"La Porte County",
    "number":5732.150000000001,
    "rate":51.56758847766243,
    "population":111158
  },
  {
    "state":"IN",
    "FIPS":18087,
    "county":"Lagrange County",
    "number":571.5,
    "rate":15.185332801913114,
    "population":37635
  },
  {
    "state":"IN",
    "FIPS":18089,
    "county":"Lake County",
    "number":65216.880000000034,
    "rate":132.23372547111285,
    "population":493194
  },
  {
    "state":"IN",
    "FIPS":18093,
    "county":"Lawrence County",
    "number":24.83,
    "rate":0.5392550765555434,
    "population":46045
  },
  {
    "state":"IN",
    "FIPS":18095,
    "county":"Madison County",
    "number":9469.029999999992,
    "rate":72.6799146479997,
    "population":130284
  },
  {
    "state":"IN",
    "FIPS":18097,
    "county":"Marion County",
    "number":189045.3399999999,
    "rate":205.8014916485317,
    "population":918581
  },
  {
    "state":"IN",
    "FIPS":18099,
    "county":"Marshall County",
    "number":1324.24,
    "rate":28.16034024455077,
    "population":47025
  },
  {
    "state":"IN",
    "FIPS":18101,
    "county":"Martin County",
    "number":75.11,
    "rate":7.276690563844217,
    "population":10322
  },
  {
    "state":"IN",
    "FIPS":18103,
    "county":"Miami County",
    "number":1070.6100000000001,
    "rate":29.330173689112925,
    "population":36502
  },
  {
    "state":"IN",
    "FIPS":18105,
    "county":"Monroe County",
    "number":43241.009999999995,
    "rate":306.04654290142895,
    "population":141289
  },
  {
    "state":"IN",
    "FIPS":18107,
    "county":"Montgomery County",
    "number":1590.6,
    "rate":41.636563530705196,
    "population":38202
  },
  {
    "state":"IN",
    "FIPS":18109,
    "county":"Morgan County",
    "number":987.2900000000002,
    "rate":14.263898520573282,
    "population":69216
  },
  {
    "state":"IN",
    "FIPS":18111,
    "county":"Newton County",
    "number":181.47000000000003,
    "rate":12.889409759215855,
    "population":14079
  },
  {
    "state":"IN",
    "FIPS":18113,
    "county":"Noble County",
    "number":1770.8,
    "rate":37.33974358974359,
    "population":47424
  },
  {
    "state":"IN",
    "FIPS":18115,
    "county":"Ohio County",
    "number":63.370000000000005,
    "rate":10.383417991151894,
    "population":6103
  },
  {
    "state":"IN",
    "FIPS":18117,
    "county":"Orange County",
    "number":107.87,
    "rate":5.47674654752234,
    "population":19696
  },
  {
    "state":"IN",
    "FIPS":18119,
    "county":"Owen County",
    "number":43.27,
    "rate":2.025464588306886,
    "population":21363
  },
  {
    "state":"IN",
    "FIPS":18121,
    "county":"Parke County",
    "number":316.96999999999997,
    "rate":18.52325853202431,
    "population":17112
  },
  {
    "state":"IN",
    "FIPS":18123,
    "county":"Perry County",
    "number":750.8599999999999,
    "rate":38.64635338926347,
    "population":19429
  },
  {
    "state":"IN",
    "FIPS":18125,
    "county":"Pike County",
    "number":397.12,
    "rate":31.088147800219197,
    "population":12774
  },
  {
    "state":"IN",
    "FIPS":18127,
    "county":"Porter County",
    "number":6320.5199999999995,
    "rate":38.15379786187288,
    "population":165659
  },
  {
    "state":"IN",
    "FIPS":18129,
    "county":"Posey County",
    "number":379.63000000000005,
    "rate":14.820034353529046,
    "population":25616
  },
  {
    "state":"IN",
    "FIPS":18131,
    "county":"Pulaski County",
    "number":117.71,
    "rate":9.017850302612425,
    "population":13053
  },
  {
    "state":"IN",
    "FIPS":18133,
    "county":"Putnam County",
    "number":1155.5199999999998,
    "rate":30.665852817069606,
    "population":37681
  },
  {
    "state":"IN",
    "FIPS":18135,
    "county":"Randolph County",
    "number":83.96000000000001,
    "rate":3.249854848074318,
    "population":25835
  },
  {
    "state":"IN",
    "FIPS":18137,
    "county":"Ripley County",
    "number":561.34,
    "rate":19.676119036769602,
    "population":28529
  },
  {
    "state":"IN",
    "FIPS":18139,
    "county":"Rush County",
    "number":90.75999999999999,
    "rate":5.297070152912338,
    "population":17134
  },
  {
    "state":"IN",
    "FIPS":18143,
    "county":"Scott County",
    "number":495.28,
    "rate":20.824083417423477,
    "population":23784
  },
  {
    "state":"IN",
    "FIPS":18145,
    "county":"Shelby County",
    "number":892.96,
    "rate":20.11986841512325,
    "population":44382
  },
  {
    "state":"IN",
    "FIPS":18147,
    "county":"Spencer County",
    "number":87.05000000000001,
    "rate":4.1700598802395215,
    "population":20875
  },
  {
    "state":"IN",
    "FIPS":18141,
    "county":"St Joseph County",
    "number":12683.310000000029,
    "rate":47.57948163903811,
    "population":266571
  },
  {
    "state":"IN",
    "FIPS":18149,
    "county":"Starke County",
    "number":415.86,
    "rate":17.927318187696685,
    "population":23197
  },
  {
    "state":"IN",
    "FIPS":18151,
    "county":"Steuben County",
    "number":469.6499999999999,
    "rate":13.75054896794027,
    "population":34155
  },
  {
    "state":"IN",
    "FIPS":18153,
    "county":"Sullivan County",
    "number":377.37,
    "rate":17.777830122014414,
    "population":21227
  },
  {
    "state":"IN",
    "FIPS":18157,
    "county":"Tippecanoe County",
    "number":38289.73000000002,
    "rate":214.89353462790444,
    "population":178180
  },
  {
    "state":"IN",
    "FIPS":18159,
    "county":"Tipton County",
    "number":1196.1,
    "rate":76.08294637745689,
    "population":15721
  },
  {
    "state":"IN",
    "FIPS":18161,
    "county":"Union County",
    "number":213.06,
    "rate":29.027247956403272,
    "population":7340
  },
  {
    "state":"IN",
    "FIPS":18163,
    "county":"Vanderburgh County",
    "number":21700.55,
    "rate":120.03778051897046,
    "population":180781
  },
  {
    "state":"IN",
    "FIPS":18167,
    "county":"Vigo County",
    "number":106256.27999999984,
    "rate":978.5178977612819,
    "population":108589
  },
  {
    "state":"IN",
    "FIPS":18169,
    "county":"Wabash County",
    "number":1242.22,
    "rate":38.307018625878875,
    "population":32428
  },
  {
    "state":"IN",
    "FIPS":18171,
    "county":"Warren County",
    "number":226.76999999999998,
    "rate":27.041497734319105,
    "population":8386
  },
  {
    "state":"IN",
    "FIPS":18173,
    "county":"Warrick County",
    "number":1277.04,
    "rate":21.12940319992058,
    "population":60439
  },
  {
    "state":"IN",
    "FIPS":18175,
    "county":"Washington County",
    "number":290.93000000000006,
    "rate":10.418263205013432,
    "population":27925
  },
  {
    "state":"IN",
    "FIPS":18177,
    "county":"Wayne County",
    "number":2197.3500000000004,
    "rate":32.13862602565416,
    "population":68371
  },
  {
    "state":"IN",
    "FIPS":18179,
    "county":"Wells County",
    "number":1132.5599999999997,
    "rate":40.919141556470834,
    "population":27678
  },
  {
    "state":"IN",
    "FIPS":18181,
    "county":"White County",
    "number":285.83,
    "rate":11.71050475254015,
    "population":24408
  },
  {
    "state":"IN",
    "FIPS":18183,
    "county":"Whitley County",
    "number":1880.14,
    "rate":56.51157198677487,
    "population":33270
  },
  {
    "state":"KS",
    "FIPS":20001,
    "county":"Allen County",
    "number":332.76,
    "rate":24.942657971666293,
    "population":13341
  },
  {
    "state":"KS",
    "FIPS":20005,
    "county":"Atchison County",
    "number":193.47,
    "rate":11.516071428571427,
    "population":16800
  },
  {
    "state":"KS",
    "FIPS":20009,
    "county":"Barton County",
    "number":627.9200000000001,
    "rate":22.789532900228654,
    "population":27553
  },
  {
    "state":"KS",
    "FIPS":20011,
    "county":"Bourbon County",
    "number":199.96999999999997,
    "rate":13.457837001144085,
    "population":14859
  },
  {
    "state":"KS",
    "FIPS":20013,
    "county":"Brown County",
    "number":16.84,
    "rate":1.7030744336569579,
    "population":9888
  },
  {
    "state":"KS",
    "FIPS":20015,
    "county":"Butler County",
    "number":1297.9900000000002,
    "rate":19.739491453251418,
    "population":65756
  },
  {
    "state":"KS",
    "FIPS":20021,
    "county":"Cherokee County",
    "number":79.13,
    "rate":3.7283264229174518,
    "population":21224
  },
  {
    "state":"KS",
    "FIPS":20025,
    "county":"Clark County",
    "number":49.95,
    "rate":22.97608095676173,
    "population":2174
  },
  {
    "state":"KS",
    "FIPS":20027,
    "county":"Clay County",
    "number":363.09000000000003,
    "rate":42.631208171891515,
    "population":8517
  },
  {
    "state":"KS",
    "FIPS":20029,
    "county":"Cloud County",
    "number":131,
    "rate":13.948040885860307,
    "population":9392
  },
  {
    "state":"KS",
    "FIPS":20031,
    "county":"Coffey County",
    "number":79.38,
    "rate":9.332236068657418,
    "population":8506
  },
  {
    "state":"KS",
    "FIPS":20035,
    "county":"Cowley County",
    "number":841.5200000000001,
    "rate":23.205382748731527,
    "population":36264
  },
  {
    "state":"KS",
    "FIPS":20037,
    "county":"Crawford County",
    "number":1823.21,
    "rate":46.32021544168086,
    "population":39361
  },
  {
    "state":"KS",
    "FIPS":20041,
    "county":"Dickinson County",
    "number":380.50999999999993,
    "rate":19.258528191112458,
    "population":19758
  },
  {
    "state":"KS",
    "FIPS":20045,
    "county":"Douglas County",
    "number":2096.9699999999993,
    "rate":18.50175138301908,
    "population":113339
  },
  {
    "state":"KS",
    "FIPS":20051,
    "county":"Ellis County",
    "number":983.79,
    "rate":33.81883808869027,
    "population":29090
  },
  {
    "state":"KS",
    "FIPS":20053,
    "county":"Ellsworth County",
    "number":342.46999999999997,
    "rate":52.97293116782676,
    "population":6465
  },
  {
    "state":"KS",
    "FIPS":20055,
    "county":"Finney County",
    "number":761.11,
    "rate":20.498518718017774,
    "population":37130
  },
  {
    "state":"KS",
    "FIPS":20057,
    "county":"Ford County",
    "number":283.09000000000003,
    "rate":8.141086475138756,
    "population":34773
  },
  {
    "state":"KS",
    "FIPS":20059,
    "county":"Franklin County",
    "number":920.36,
    "rate":35.565345080763585,
    "population":25878
  },
  {
    "state":"KS",
    "FIPS":20061,
    "county":"Geary County",
    "number":430.68999999999994,
    "rate":11.33305265373786,
    "population":38003
  },
  {
    "state":"KS",
    "FIPS":20063,
    "county":"Gove County",
    "number":44.97,
    "rate":16.527012127894157,
    "population":2721
  },
  {
    "state":"KS",
    "FIPS":20065,
    "county":"Graham County",
    "number":319.21,
    "rate":123.15200617283949,
    "population":2592
  },
  {
    "state":"KS",
    "FIPS":20079,
    "county":"Harvey County",
    "number":15857.269999999993,
    "rate":455.26312767362384,
    "population":34831
  },
  {
    "state":"KS",
    "FIPS":20081,
    "county":"Haskell County",
    "number":13.16,
    "rate":3.1177446102819237,
    "population":4221
  },
  {
    "state":"KS",
    "FIPS":20085,
    "county":"Jackson County",
    "number":69.94,
    "rate":5.200773349196906,
    "population":13448
  },
  {
    "state":"KS",
    "FIPS":20087,
    "county":"Jefferson County",
    "number":128.19,
    "rate":6.782180836992752,
    "population":18901
  },
  {
    "state":"KS",
    "FIPS":20091,
    "county":"Johnson County",
    "number":145220.08000000054,
    "rate":259.3428745932712,
    "population":559954
  },
  {
    "state":"KS",
    "FIPS":20093,
    "county":"Kearny County",
    "number":35.45,
    "rate":8.915995975855132,
    "population":3976
  },
  {
    "state":"KS",
    "FIPS":20095,
    "county":"Kingman County",
    "number":235.03999999999996,
    "rate":30.02554931016862,
    "population":7828
  },
  {
    "state":"KS",
    "FIPS":20099,
    "county":"Labette County",
    "number":453.48999999999995,
    "rate":21.371883689146514,
    "population":21219
  },
  {
    "state":"KS",
    "FIPS":20103,
    "county":"Leavenworth County",
    "number":622.16,
    "rate":8.004219789267841,
    "population":77729
  },
  {
    "state":"KS",
    "FIPS":20105,
    "county":"Lincoln County",
    "number":12.14,
    "rate":3.8429882874327324,
    "population":3159
  },
  {
    "state":"KS",
    "FIPS":20109,
    "county":"Logan County",
    "number":52.93000000000001,
    "rate":18.93738819320215,
    "population":2795
  },
  {
    "state":"KS",
    "FIPS":20111,
    "county":"Lyon County",
    "number":335.34,
    "rate":10.001491246383726,
    "population":33529
  },
  {
    "state":"KS",
    "FIPS":20115,
    "county":"Marion County",
    "number":72.9,
    "rate":5.892337536372454,
    "population":12372
  },
  {
    "state":"KS",
    "FIPS":20117,
    "county":"Marshall County",
    "number":15.649999999999999,
    "rate":1.5547387244188355,
    "population":10066
  },
  {
    "state":"KS",
    "FIPS":20113,
    "county":"McPherson County",
    "number":295.01,
    "rate":10.054531202072186,
    "population":29341
  },
  {
    "state":"KS",
    "FIPS":20123,
    "county":"Mitchell County",
    "number":32.9,
    "rate":5.187637969094923,
    "population":6342
  },
  {
    "state":"KS",
    "FIPS":20125,
    "county":"Montgomery County",
    "number":265.7,
    "rate":7.716434815438678,
    "population":34433
  },
  {
    "state":"KS",
    "FIPS":20127,
    "county":"Morris County",
    "number":60.95,
    "rate":10.417022731157068,
    "population":5851
  },
  {
    "state":"KS",
    "FIPS":20131,
    "county":"Nemaha County",
    "number":40.78,
    "rate":4.036025336500396,
    "population":10104
  },
  {
    "state":"KS",
    "FIPS":20133,
    "county":"Neosho County",
    "number":43.76,
    "rate":2.659858983710187,
    "population":16452
  },
  {
    "state":"KS",
    "FIPS":20137,
    "county":"Norton County",
    "number":169.56,
    "rate":30.251561106155215,
    "population":5605
  },
  {
    "state":"KS",
    "FIPS":20139,
    "county":"Osage County",
    "number":67.63000000000001,
    "rate":4.181660792679158,
    "population":16173
  },
  {
    "state":"KS",
    "FIPS":20141,
    "county":"Osborne County",
    "number":10.09,
    "rate":2.6448230668414157,
    "population":3815
  },
  {
    "state":"KS",
    "FIPS":20143,
    "county":"Ottawa County",
    "number":183.64999999999998,
    "rate":30.30028048176868,
    "population":6061
  },
  {
    "state":"KS",
    "FIPS":20145,
    "county":"Pawnee County",
    "number":30.200000000000003,
    "rate":4.368580934471286,
    "population":6913
  },
  {
    "state":"KS",
    "FIPS":20149,
    "county":"Pottawatomie County",
    "number":260.1,
    "rate":11.637063218647937,
    "population":22351
  },
  {
    "state":"KS",
    "FIPS":20151,
    "county":"Pratt County",
    "number":164.94,
    "rate":16.852968223153162,
    "population":9787
  },
  {
    "state":"KS",
    "FIPS":20155,
    "county":"Reno County",
    "number":2291.21,
    "rate":35.67918152514132,
    "population":64217
  },
  {
    "state":"KS",
    "FIPS":20157,
    "county":"Republic County",
    "number":277.13,
    "rate":57.04610951008646,
    "population":4858
  },
  {
    "state":"KS",
    "FIPS":20161,
    "county":"Riley County",
    "number":1844.3500000000001,
    "rate":24.173296459887023,
    "population":76297
  },
  {
    "state":"KS",
    "FIPS":20163,
    "county":"Rooks County",
    "number":49.870000000000005,
    "rate":9.595920723494324,
    "population":5197
  },
  {
    "state":"KS",
    "FIPS":20167,
    "county":"Russell County",
    "number":137.78,
    "rate":19.787447939106706,
    "population":6963
  },
  {
    "state":"KS",
    "FIPS":20169,
    "county":"Saline County",
    "number":1865.97,
    "rate":33.38647342995169,
    "population":55890
  },
  {
    "state":"KS",
    "FIPS":20173,
    "county":"Sedgwick County",
    "number":63324.49999999998,
    "rate":125.68848857034537,
    "population":503821
  },
  {
    "state":"KS",
    "FIPS":20175,
    "county":"Seward County",
    "number":12.86,
    "rate":0.5483307039611137,
    "population":23453
  },
  {
    "state":"KS",
    "FIPS":20177,
    "county":"Shawnee County",
    "number":29200.949999999993,
    "rate":163.22133658274825,
    "population":178904
  },
  {
    "state":"KS",
    "FIPS":20181,
    "county":"Sherman County",
    "number":221.10000000000002,
    "rate":36.097959183673474,
    "population":6125
  },
  {
    "state":"KS",
    "FIPS":20183,
    "county":"Smith County",
    "number":85.24999999999999,
    "rate":22.709110282365472,
    "population":3754
  },
  {
    "state":"KS",
    "FIPS":20189,
    "county":"Stevens County",
    "number":11.63,
    "rate":2.027191912149207,
    "population":5737
  },
  {
    "state":"KS",
    "FIPS":20191,
    "county":"Sumner County",
    "number":941.8099999999998,
    "rate":39.728760651311894,
    "population":23706
  },
  {
    "state":"KS",
    "FIPS":20193,
    "county":"Thomas County",
    "number":169.17000000000002,
    "rate":21.287278218195546,
    "population":7947
  },
  {
    "state":"KS",
    "FIPS":20195,
    "county":"Trego County",
    "number":259.76,
    "rate":87.49073762209498,
    "population":2969
  },
  {
    "state":"KS",
    "FIPS":20201,
    "county":"Washington County",
    "number":24.22,
    "rate":4.226138544756587,
    "population":5731
  },
  {
    "state":"KS",
    "FIPS":20205,
    "county":"Wilson County",
    "number":1694.8299999999997,
    "rate":185.85700186423946,
    "population":9119
  },
  {
    "state":"KS",
    "FIPS":20207,
    "county":"Woodson County",
    "number":89.23,
    "rate":27.371165644171782,
    "population":3260
  },
  {
    "state":"KS",
    "FIPS":20209,
    "county":"Wyandotte County",
    "number":9754.84,
    "rate":61.234502802834854,
    "population":159303
  },
  {
    "state":"KY",
    "FIPS":21001,
    "county":"Adair County",
    "number":20.91,
    "rate":1.102208634231195,
    "population":18971
  },
  {
    "state":"KY",
    "FIPS":21003,
    "county":"Allen County",
    "number":78.58,
    "rate":3.884138203746725,
    "population":20231
  },
  {
    "state":"KY",
    "FIPS":21005,
    "county":"Anderson County",
    "number":571.73,
    "rate":26.392004800812447,
    "population":21663
  },
  {
    "state":"KY",
    "FIPS":21009,
    "county":"Barren County",
    "number":3445.9699999999993,
    "rate":80.76050528486722,
    "population":42669
  },
  {
    "state":"KY",
    "FIPS":21013,
    "county":"Bell County",
    "number":1280.17,
    "rate":45.47350099460074,
    "population":28152
  },
  {
    "state":"KY",
    "FIPS":21015,
    "county":"Boone County",
    "number":3045.1399999999994,
    "rate":24.70541465868341,
    "population":123258
  },
  {
    "state":"KY",
    "FIPS":21017,
    "county":"Bourbon County",
    "number":560.27,
    "rate":28.019103820764155,
    "population":19996
  },
  {
    "state":"KY",
    "FIPS":21019,
    "county":"Boyd County",
    "number":34834.05000000006,
    "rate":706.802410518628,
    "population":49284
  },
  {
    "state":"KY",
    "FIPS":21021,
    "county":"Boyle County",
    "number":2557.000000000001,
    "rate":88.02671440374556,
    "population":29048
  },
  {
    "state":"KY",
    "FIPS":21023,
    "county":"Bracken County",
    "number":121.19,
    "rate":14.318289224952741,
    "population":8464
  },
  {
    "state":"KY",
    "FIPS":21025,
    "county":"Breathitt County",
    "number":522.3800000000001,
    "rate":38.28362037376329,
    "population":13645
  },
  {
    "state":"KY",
    "FIPS":21027,
    "county":"Breckinridge County",
    "number":493.0300000000001,
    "rate":24.531296646432487,
    "population":20098
  },
  {
    "state":"KY",
    "FIPS":21029,
    "county":"Bullitt County",
    "number":1307.93,
    "rate":17.229328310039126,
    "population":75913
  },
  {
    "state":"KY",
    "FIPS":21031,
    "county":"Butler County",
    "number":143.00000000000003,
    "rate":11.166640637201315,
    "population":12806
  },
  {
    "state":"KY",
    "FIPS":21033,
    "county":"Caldwell County",
    "number":144.58,
    "rate":11.18953641359028,
    "population":12921
  },
  {
    "state":"KY",
    "FIPS":21035,
    "county":"Calloway County",
    "number":899.33,
    "rate":23.525426389034216,
    "population":38228
  },
  {
    "state":"KY",
    "FIPS":21037,
    "county":"Campbell County",
    "number":1376.8900000000003,
    "rate":15.10161776802852,
    "population":91175
  },
  {
    "state":"KY",
    "FIPS":21039,
    "county":"Carlisle County",
    "number":176,
    "rate":34.90678302261008,
    "population":5042
  },
  {
    "state":"KY",
    "FIPS":21041,
    "county":"Carroll County",
    "number":447.43999999999994,
    "rate":41.14769174176935,
    "population":10874
  },
  {
    "state":"KY",
    "FIPS":21043,
    "county":"Carter County",
    "number":8987.899999999998,
    "rate":327.1777510829601,
    "population":27471
  },
  {
    "state":"KY",
    "FIPS":21045,
    "county":"Casey County",
    "number":304.53000000000003,
    "rate":18.931368892204404,
    "population":16086
  },
  {
    "state":"KY",
    "FIPS":21047,
    "county":"Christian County",
    "number":875.1399999999999,
    "rate":11.549953807575557,
    "population":75770
  },
  {
    "state":"KY",
    "FIPS":21049,
    "county":"Clark County",
    "number":612.87,
    "rate":17.148493242676068,
    "population":35739
  },
  {
    "state":"KY",
    "FIPS":21051,
    "county":"Clay County",
    "number":418.34999999999997,
    "rate":19.4211039413212,
    "population":21541
  },
  {
    "state":"KY",
    "FIPS":21053,
    "county":"Clinton County",
    "number":19.82,
    "rate":1.936870907847161,
    "population":10233
  },
  {
    "state":"KY",
    "FIPS":21055,
    "county":"Crittenden County",
    "number":86.7,
    "rate":9.376013842327241,
    "population":9247
  },
  {
    "state":"KY",
    "FIPS":21057,
    "county":"Cumberland County",
    "number":172.14000000000001,
    "rate":25.09695290858726,
    "population":6859
  },
  {
    "state":"KY",
    "FIPS":21059,
    "county":"Daviess County",
    "number":43218.66999999999,
    "rate":442.2387876431282,
    "population":97727
  },
  {
    "state":"KY",
    "FIPS":21061,
    "county":"Edmonson County",
    "number":101.05,
    "rate":8.33058532563891,
    "population":12130
  },
  {
    "state":"KY",
    "FIPS":21065,
    "county":"Estill County",
    "number":463.10999999999996,
    "rate":31.969487781306086,
    "population":14486
  },
  {
    "state":"KY",
    "FIPS":21067,
    "county":"Fayette County",
    "number":66011.24999999997,
    "rate":216.25236280962216,
    "population":305251
  },
  {
    "state":"KY",
    "FIPS":21069,
    "county":"Fleming County",
    "number":964.8100000000002,
    "rate":66.39210019267824,
    "population":14532
  },
  {
    "state":"KY",
    "FIPS":21071,
    "county":"Floyd County",
    "number":3382.2800000000007,
    "rate":86.41271301193125,
    "population":39141
  },
  {
    "state":"KY",
    "FIPS":21073,
    "county":"Franklin County",
    "number":1894.26,
    "rate":38.361651714291504,
    "population":49379
  },
  {
    "state":"KY",
    "FIPS":21075,
    "county":"Fulton County",
    "number":19.1,
    "rate":2.917366732854743,
    "population":6547
  },
  {
    "state":"KY",
    "FIPS":21077,
    "county":"Gallatin County",
    "number":112.5,
    "rate":13.24932281238959,
    "population":8491
  },
  {
    "state":"KY",
    "FIPS":21079,
    "county":"Garrard County",
    "number":59.9,
    "rate":3.5397707126817157,
    "population":16922
  },
  {
    "state":"KY",
    "FIPS":21081,
    "county":"Grant County",
    "number":932.8800000000001,
    "rate":38.09072720591238,
    "population":24491
  },
  {
    "state":"KY",
    "FIPS":21083,
    "county":"Graves County",
    "number":451.14,
    "rate":12.019182096709738,
    "population":37535
  },
  {
    "state":"KY",
    "FIPS":21085,
    "county":"Grayson County",
    "number":893.5900000000001,
    "rate":34.54823120046395,
    "population":25865
  },
  {
    "state":"KY",
    "FIPS":21089,
    "county":"Greenup County",
    "number":1271.67,
    "rate":34.63342229968952,
    "population":36718
  },
  {
    "state":"KY",
    "FIPS":21093,
    "county":"Hardin County",
    "number":2586.31,
    "rate":24.159380487987143,
    "population":107052
  },
  {
    "state":"KY",
    "FIPS":21095,
    "county":"Harlan County",
    "number":14.9,
    "rate":0.5206877271456528,
    "population":28616
  },
  {
    "state":"KY",
    "FIPS":21097,
    "county":"Harrison County",
    "number":507.96,
    "rate":27.321428571428573,
    "population":18592
  },
  {
    "state":"KY",
    "FIPS":21099,
    "county":"Hart County",
    "number":6667.870000000001,
    "rate":361.7354744208757,
    "population":18433
  },
  {
    "state":"KY",
    "FIPS":21101,
    "county":"Henderson County",
    "number":900.9399999999997,
    "rate":19.390900090396446,
    "population":46462
  },
  {
    "state":"KY",
    "FIPS":21103,
    "county":"Henry County",
    "number":22797.949999999997,
    "rate":1485.9829226958673,
    "population":15342
  },
  {
    "state":"KY",
    "FIPS":21105,
    "county":"Hickman County",
    "number":151.26,
    "rate":31.75062972292191,
    "population":4764
  },
  {
    "state":"KY",
    "FIPS":21107,
    "county":"Hopkins County",
    "number":1421.8899999999999,
    "rate":30.446019442422166,
    "population":46702
  },
  {
    "state":"KY",
    "FIPS":21109,
    "county":"Jackson County",
    "number":14.87,
    "rate":1.1182132651526544,
    "population":13298
  },
  {
    "state":"KY",
    "FIPS":21111,
    "county":"Jefferson County",
    "number":275227.7100000004,
    "rate":366.3221340375102,
    "population":751327
  },
  {
    "state":"KY",
    "FIPS":21113,
    "county":"Jessamine County",
    "number":208.56,
    "rate":4.2079777253192905,
    "population":49563
  },
  {
    "state":"KY",
    "FIPS":21115,
    "county":"Johnson County",
    "number":1459.23,
    "rate":62.320307495195394,
    "population":23415
  },
  {
    "state":"KY",
    "FIPS":21117,
    "county":"Kenton County",
    "number":84216.17999999998,
    "rate":520.9108621830754,
    "population":161671
  },
  {
    "state":"KY",
    "FIPS":21119,
    "county":"Knott County",
    "number":320.07,
    "rate":19.89618946975819,
    "population":16087
  },
  {
    "state":"KY",
    "FIPS":21121,
    "county":"Knox County",
    "number":1118.75,
    "rate":35.291798107255524,
    "population":31700
  },
  {
    "state":"KY",
    "FIPS":21123,
    "county":"Larue County",
    "number":174.60000000000002,
    "rate":12.396166134185304,
    "population":14085
  },
  {
    "state":"KY",
    "FIPS":21125,
    "county":"Laurel County",
    "number":1713.3,
    "rate":28.752915904475806,
    "population":59587
  },
  {
    "state":"KY",
    "FIPS":21127,
    "county":"Lawrence County",
    "number":236.15999999999997,
    "rate":14.921336955834963,
    "population":15827
  },
  {
    "state":"KY",
    "FIPS":21129,
    "county":"Lee County",
    "number":12.37,
    "rate":1.6178393931467434,
    "population":7646
  },
  {
    "state":"KY",
    "FIPS":21131,
    "county":"Leslie County",
    "number":24.6,
    "rate":2.207465900933238,
    "population":11144
  },
  {
    "state":"KY",
    "FIPS":21133,
    "county":"Letcher County",
    "number":640.29,
    "rate":26.7389125532448,
    "population":23946
  },
  {
    "state":"KY",
    "FIPS":21135,
    "county":"Lewis County",
    "number":10.07,
    "rate":0.7274960265857535,
    "population":13842
  },
  {
    "state":"KY",
    "FIPS":21137,
    "county":"Lincoln County",
    "number":130.82,
    "rate":5.35971812520485,
    "population":24408
  },
  {
    "state":"KY",
    "FIPS":21141,
    "county":"Logan County",
    "number":277.57,
    "rate":10.394712204621204,
    "population":26703
  },
  {
    "state":"KY",
    "FIPS":21143,
    "county":"Lyon County",
    "number":103.65,
    "rate":12.285172454663982,
    "population":8437
  },
  {
    "state":"KY",
    "FIPS":21151,
    "county":"Madison County",
    "number":1536.81,
    "rate":18.03640588690937,
    "population":85206
  },
  {
    "state":"KY",
    "FIPS":21153,
    "county":"Magoffin County",
    "number":10.77,
    "rate":0.8265541059094398,
    "population":13030
  },
  {
    "state":"KY",
    "FIPS":21155,
    "county":"Marion County",
    "number":847.6700000000001,
    "rate":42.404702351175594,
    "population":19990
  },
  {
    "state":"KY",
    "FIPS":21157,
    "county":"Marshall County",
    "number":8168.43,
    "rate":261.2392861711654,
    "population":31268
  },
  {
    "state":"KY",
    "FIPS":21159,
    "county":"Martin County",
    "number":97.74000000000001,
    "rate":7.658074120504584,
    "population":12763
  },
  {
    "state":"KY",
    "FIPS":21161,
    "county":"Mason County",
    "number":40732.14000000001,
    "rate":2332.482391341694,
    "population":17463
  },
  {
    "state":"KY",
    "FIPS":21145,
    "county":"McCracken County",
    "number":14819.36,
    "rate":225.75001904181585,
    "population":65645
  },
  {
    "state":"KY",
    "FIPS":21147,
    "county":"McCreary County",
    "number":293.2600000000001,
    "rate":16.260604380371504,
    "population":18035
  },
  {
    "state":"KY",
    "FIPS":21163,
    "county":"Meade County",
    "number":629.01,
    "rate":21.48551714715125,
    "population":29276
  },
  {
    "state":"KY",
    "FIPS":21165,
    "county":"Menifee County",
    "number":119.17,
    "rate":18.87393094710168,
    "population":6314
  },
  {
    "state":"KY",
    "FIPS":21167,
    "county":"Mercer County",
    "number":255.74999999999997,
    "rate":11.982851520404814,
    "population":21343
  },
  {
    "state":"KY",
    "FIPS":21169,
    "county":"Metcalfe County",
    "number":95.05,
    "rate":9.521186016227587,
    "population":9983
  },
  {
    "state":"KY",
    "FIPS":21171,
    "county":"Monroe County",
    "number":174.49,
    "rate":16.068698775209505,
    "population":10859
  },
  {
    "state":"KY",
    "FIPS":21173,
    "county":"Montgomery County",
    "number":615.49,
    "rate":22.897693452380953,
    "population":26880
  },
  {
    "state":"KY",
    "FIPS":21177,
    "county":"Muhlenberg County",
    "number":398.48999999999995,
    "rate":12.707356739691953,
    "population":31359
  },
  {
    "state":"KY",
    "FIPS":21179,
    "county":"Nelson County",
    "number":861.6099999999999,
    "rate":19.427070415548688,
    "population":44351
  },
  {
    "state":"KY",
    "FIPS":21183,
    "county":"Ohio County",
    "number":387.21999999999997,
    "rate":16.126775228020488,
    "population":24011
  },
  {
    "state":"KY",
    "FIPS":21185,
    "county":"Oldham County",
    "number":1109.14,
    "rate":18.05740520651873,
    "population":61423
  },
  {
    "state":"KY",
    "FIPS":21187,
    "county":"Owen County",
    "number":108.73,
    "rate":10.10407954651055,
    "population":10761
  },
  {
    "state":"KY",
    "FIPS":21189,
    "county":"Owsley County",
    "number":13.72,
    "rate":2.9228802726885386,
    "population":4694
  },
  {
    "state":"KY",
    "FIPS":21191,
    "county":"Pendleton County",
    "number":119.92,
    "rate":8.243624114937788,
    "population":14547
  },
  {
    "state":"KY",
    "FIPS":21193,
    "county":"Perry County",
    "number":2522.4099999999994,
    "rate":89.19728420382614,
    "population":28279
  },
  {
    "state":"KY",
    "FIPS":21195,
    "county":"Pike County",
    "number":12611.140000000007,
    "rate":195.33076220126088,
    "population":64563
  },
  {
    "state":"KY",
    "FIPS":21197,
    "county":"Powell County",
    "number":247.99000000000004,
    "rate":19.84713885554222,
    "population":12495
  },
  {
    "state":"KY",
    "FIPS":21199,
    "county":"Pulaski County",
    "number":1256.86,
    "rate":19.809292649098474,
    "population":63448
  },
  {
    "state":"KY",
    "FIPS":21203,
    "county":"Rockcastle County",
    "number":531.39,
    "rate":31.131876501259594,
    "population":17069
  },
  {
    "state":"KY",
    "FIPS":21205,
    "county":"Rowan County",
    "number":28119.620000000003,
    "rate":1200.9746305629112,
    "population":23414
  },
  {
    "state":"KY",
    "FIPS":21207,
    "county":"Russell County",
    "number":636.3100000000002,
    "rate":36.27558292001597,
    "population":17541
  },
  {
    "state":"KY",
    "FIPS":21209,
    "county":"Scott County",
    "number":600.33,
    "rate":12.244635718365018,
    "population":49028
  },
  {
    "state":"KY",
    "FIPS":21211,
    "county":"Shelby County",
    "number":1455.88,
    "rate":33.389445680343094,
    "population":43603
  },
  {
    "state":"KY",
    "FIPS":21213,
    "county":"Simpson County",
    "number":90.84,
    "rate":5.173415342559371,
    "population":17559
  },
  {
    "state":"KY",
    "FIPS":21215,
    "county":"Spencer County",
    "number":146.16000000000003,
    "rate":8.3956574185766,
    "population":17409
  },
  {
    "state":"KY",
    "FIPS":21217,
    "county":"Taylor County",
    "number":1113.6100000000001,
    "rate":44.45726376302448,
    "population":25049
  },
  {
    "state":"KY",
    "FIPS":21221,
    "county":"Trigg County",
    "number":99.55,
    "rate":6.91703724291273,
    "population":14392
  },
  {
    "state":"KY",
    "FIPS":21223,
    "county":"Trimble County",
    "number":23.17,
    "rate":2.6204478624745535,
    "population":8842
  },
  {
    "state":"KY",
    "FIPS":21225,
    "county":"Union County",
    "number":734.9000000000001,
    "rate":48.607712150274494,
    "population":15119
  },
  {
    "state":"KY",
    "FIPS":21227,
    "county":"Warren County",
    "number":20353.690000000002,
    "rate":173.68852668856937,
    "population":117185
  },
  {
    "state":"KY",
    "FIPS":21229,
    "county":"Washington County",
    "number":193.1,
    "rate":16.25147281602424,
    "population":11882
  },
  {
    "state":"KY",
    "FIPS":21231,
    "county":"Wayne County",
    "number":156.41000000000003,
    "rate":7.528760529482553,
    "population":20775
  },
  {
    "state":"KY",
    "FIPS":21233,
    "county":"Webster County",
    "number":87.66,
    "rate":6.503449810816826,
    "population":13479
  },
  {
    "state":"KY",
    "FIPS":21235,
    "county":"Whitley County",
    "number":838.8,
    "rate":23.62484157160963,
    "population":35505
  },
  {
    "state":"KY",
    "FIPS":21237,
    "county":"Wolfe County",
    "number":293.14,
    "rate":40.781858653311076,
    "population":7188
  },
  {
    "state":"KY",
    "FIPS":21239,
    "county":"Woodford County",
    "number":12.97,
    "rate":0.5179919325851672,
    "population":25039
  },
  {
    "state":"LA",
    "FIPS":22001,
    "county":"Acadia Parish",
    "number":776.7800000000001,
    "rate":12.55442600164854,
    "population":61873
  },
  {
    "state":"LA",
    "FIPS":22003,
    "county":"Allen Parish",
    "number":414.22000000000014,
    "rate":16.172256276109795,
    "population":25613
  },
  {
    "state":"LA",
    "FIPS":22005,
    "county":"Ascension Parish",
    "number":5022.039999999999,
    "rate":44.770488441960175,
    "population":112173
  },
  {
    "state":"LA",
    "FIPS":22007,
    "county":"Assumption Parish",
    "number":24.21,
    "rate":1.0492783773241452,
    "population":23073
  },
  {
    "state":"LA",
    "FIPS":22009,
    "county":"Avoyelles Parish",
    "number":584.7299999999998,
    "rate":14.05533387817893,
    "population":41602
  },
  {
    "state":"LA",
    "FIPS":22011,
    "county":"Beauregard Parish",
    "number":650.05,
    "rate":17.930435262315882,
    "population":36254
  },
  {
    "state":"LA",
    "FIPS":22015,
    "county":"Bossier Parish",
    "number":48595.330000000016,
    "rate":394.8496420823415,
    "population":123073
  },
  {
    "state":"LA",
    "FIPS":22017,
    "county":"Caddo Parish",
    "number":57227.4,
    "rate":222.39087856743149,
    "population":257328
  },
  {
    "state":"LA",
    "FIPS":22019,
    "county":"Calcasieu Parish",
    "number":82919.61000000004,
    "rate":425.986807292978,
    "population":194653
  },
  {
    "state":"LA",
    "FIPS":22021,
    "county":"Caldwell Parish",
    "number":67.07,
    "rate":6.706999999999999,
    "population":10000
  },
  {
    "state":"LA",
    "FIPS":22123,
    "county":"West Carroll Parish",
    "number":121.34,
    "rate":10.545802190161655,
    "population":11506
  },
  {
    "state":"LA",
    "FIPS":22027,
    "county":"Claiborne Parish",
    "number":225.44,
    "rate":13.370499970345767,
    "population":16861
  },
  {
    "state":"LA",
    "FIPS":22029,
    "county":"Concordia Parish",
    "number":132.32999999999998,
    "rate":6.472170595715542,
    "population":20446
  },
  {
    "state":"LA",
    "FIPS":22031,
    "county":"De Soto Parish",
    "number":239.40000000000003,
    "rate":8.855187719622712,
    "population":27035
  },
  {
    "state":"LA",
    "FIPS":22033,
    "county":"East Baton Rouge Parish",
    "number":87809.50999999992,
    "rate":197.63740839440356,
    "population":444296
  },
  {
    "state":"LA",
    "FIPS":22035,
    "county":"East Carroll Parish",
    "number":267.8,
    "rate":35.33913961467405,
    "population":7578
  },
  {
    "state":"LA",
    "FIPS":22037,
    "county":"East Feliciana Parish",
    "number":286.38,
    "rate":14.340510766149224,
    "population":19970
  },
  {
    "state":"LA",
    "FIPS":22039,
    "county":"Evangeline Parish",
    "number":1888.07,
    "rate":56.09739430133405,
    "population":33657
  },
  {
    "state":"LA",
    "FIPS":22041,
    "county":"Franklin Parish",
    "number":228.83999999999997,
    "rate":11.101731916751564,
    "population":20613
  },
  {
    "state":"LA",
    "FIPS":22043,
    "county":"Grant Parish",
    "number":34.58,
    "rate":1.545405791919914,
    "population":22376
  },
  {
    "state":"LA",
    "FIPS":22045,
    "county":"Iberia Parish",
    "number":2448.8100000000004,
    "rate":33.12963363818389,
    "population":73916
  },
  {
    "state":"LA",
    "FIPS":22047,
    "county":"Iberville Parish",
    "number":525.1400000000001,
    "rate":15.746326836581712,
    "population":33350
  },
  {
    "state":"LA",
    "FIPS":22049,
    "county":"Jackson Parish",
    "number":31.509999999999998,
    "rate":1.9407489529440747,
    "population":16236
  },
  {
    "state":"LA",
    "FIPS":22053,
    "county":"Jefferson Davis Parish",
    "number":887.85,
    "rate":28.24040204841121,
    "population":31439
  },
  {
    "state":"LA",
    "FIPS":22051,
    "county":"Jefferson Parish",
    "number":218227.79999999984,
    "rate":502.1637231778171,
    "population":434575
  },
  {
    "state":"LA",
    "FIPS":22059,
    "county":"La Salle Parish",
    "number":52.61000000000001,
    "rate":3.5408534123031368,
    "population":14858
  },
  {
    "state":"LA",
    "FIPS":22055,
    "county":"Lafayette Parish",
    "number":31226.52000000003,
    "rate":137.52844024575555,
    "population":227055
  },
  {
    "state":"LA",
    "FIPS":22057,
    "county":"Lafourche Parish",
    "number":2204.21,
    "rate":22.694568854568853,
    "population":97125
  },
  {
    "state":"LA",
    "FIPS":22061,
    "county":"Lincoln Parish",
    "number":1246.4099999999999,
    "rate":26.43723751749883,
    "population":47146
  },
  {
    "state":"LA",
    "FIPS":22063,
    "county":"Livingston Parish",
    "number":1889.7700000000002,
    "rate":14.322515612684171,
    "population":131944
  },
  {
    "state":"LA",
    "FIPS":22067,
    "county":"Morehouse Parish",
    "number":902.46,
    "rate":32.899274543399805,
    "population":27431
  },
  {
    "state":"LA",
    "FIPS":22069,
    "county":"Natchitoches Parish",
    "number":1308.21,
    "rate":33.15197283393731,
    "population":39461
  },
  {
    "state":"LA",
    "FIPS":22071,
    "county":"Orleans Parish",
    "number":85136.86000000003,
    "rate":229.99581270075407,
    "population":370167
  },
  {
    "state":"LA",
    "FIPS":22073,
    "county":"Ouachita Parish",
    "number":8015.519999999997,
    "rate":51.596523978113915,
    "population":155350
  },
  {
    "state":"LA",
    "FIPS":22075,
    "county":"Plaquemines Parish",
    "number":254.91000000000003,
    "rate":10.665244132044686,
    "population":23901
  },
  {
    "state":"LA",
    "FIPS":22077,
    "county":"Pointe Coupee Parish",
    "number":836.3400000000001,
    "rate":36.82532693408481,
    "population":22711
  },
  {
    "state":"LA",
    "FIPS":22079,
    "county":"Rapides Parish",
    "number":11450.46,
    "rate":86.67302495628675,
    "population":132111
  },
  {
    "state":"LA",
    "FIPS":22081,
    "county":"Red River Parish",
    "number":183.48,
    "rate":20.325689597873048,
    "population":9027
  },
  {
    "state":"LA",
    "FIPS":22083,
    "county":"Richland Parish",
    "number":174.95999999999998,
    "rate":8.362089566505759,
    "population":20923
  },
  {
    "state":"LA",
    "FIPS":22085,
    "county":"Sabine Parish",
    "number":48.959999999999994,
    "rate":2.0143174524808685,
    "population":24306
  },
  {
    "state":"LA",
    "FIPS":22087,
    "county":"St Bernard Parish",
    "number":564.9100000000001,
    "rate":13.612945202178421,
    "population":41498
  },
  {
    "state":"LA",
    "FIPS":22089,
    "county":"St Charles Parish",
    "number":1013.3900000000001,
    "rate":19.325857695901753,
    "population":52437
  },
  {
    "state":"LA",
    "FIPS":22091,
    "county":"St Helena Parish",
    "number":384.13999999999993,
    "rate":34.82052211747643,
    "population":11032
  },
  {
    "state":"LA",
    "FIPS":22093,
    "county":"St James Parish",
    "number":34.95,
    "rate":1.6107475343349618,
    "population":21698
  },
  {
    "state":"LA",
    "FIPS":22095,
    "county":"St John the Baptist Parish",
    "number":862.97,
    "rate":19.282953098116327,
    "population":44753
  },
  {
    "state":"LA",
    "FIPS":22097,
    "county":"St Landry Parish",
    "number":3737.93,
    "rate":44.77474455877244,
    "population":83483
  },
  {
    "state":"LA",
    "FIPS":22099,
    "county":"St Martin Parish",
    "number":636.7199999999999,
    "rate":12.078306396539949,
    "population":52716
  },
  {
    "state":"LA",
    "FIPS":22101,
    "county":"St Mary Parish",
    "number":2965.859999999999,
    "rate":55.409707431902234,
    "population":53526
  },
  {
    "state":"LA",
    "FIPS":22103,
    "county":"St Tammany Parish",
    "number":47501.39999999994,
    "rate":198.46331252663484,
    "population":239346
  },
  {
    "state":"LA",
    "FIPS":22105,
    "county":"Tangipahoa Parish",
    "number":8989.689999999999,
    "rate":72.63398159444762,
    "population":123767
  },
  {
    "state":"LA",
    "FIPS":22107,
    "county":"Tensas Parish",
    "number":13.15,
    "rate":2.6453429893381615,
    "population":4971
  },
  {
    "state":"LA",
    "FIPS":22109,
    "county":"Terrebonne Parish",
    "number":13831.100000000006,
    "rate":123.78927960906111,
    "population":111731
  },
  {
    "state":"LA",
    "FIPS":22111,
    "county":"Union Parish",
    "number":2824.48,
    "rate":125.33747503882849,
    "population":22535
  },
  {
    "state":"LA",
    "FIPS":22113,
    "county":"Vermilion Parish",
    "number":1044.7899999999997,
    "rate":17.810944425502896,
    "population":58660
  },
  {
    "state":"LA",
    "FIPS":22115,
    "county":"Vernon Parish",
    "number":751.5000000000001,
    "rate":13.871455995274662,
    "population":54176
  },
  {
    "state":"LA",
    "FIPS":22117,
    "county":"Washington Parish",
    "number":1453.8099999999997,
    "rate":31.154851705811755,
    "population":46664
  },
  {
    "state":"LA",
    "FIPS":22119,
    "county":"Webster Parish",
    "number":685.57,
    "rate":16.744498449063332,
    "population":40943
  },
  {
    "state":"LA",
    "FIPS":22121,
    "county":"West Baton Rouge Parish",
    "number":321.33,
    "rate":13.35092238657138,
    "population":24068
  },
  {
    "state":"LA",
    "FIPS":22125,
    "county":"West Feliciana Parish",
    "number":364.1799999999999,
    "rate":23.57304679914557,
    "population":15449
  },
  {
    "state":"LA",
    "FIPS":22127,
    "county":"Winn Parish",
    "number":10.22,
    "rate":0.6791148913549073,
    "population":15049
  },
  {
    "state":"MA",
    "FIPS":25001,
    "county":"Barnstable County",
    "number":20267.290000000015,
    "rate":94.33447369033496,
    "population":214845
  },
  {
    "state":"MA",
    "FIPS":25003,
    "county":"Berkshire County",
    "number":1187.29,
    "rate":9.116870152806573,
    "population":130230
  },
  {
    "state":"MA",
    "FIPS":25005,
    "county":"Bristol County",
    "number":116760.46999999987,
    "rate":211.9968952275469,
    "population":550765
  },
  {
    "state":"MA",
    "FIPS":25009,
    "county":"Essex County",
    "number":30568.22,
    "rate":40.39338604027945,
    "population":756763
  },
  {
    "state":"MA",
    "FIPS":25011,
    "county":"Franklin County",
    "number":1075.34,
    "rate":15.030470759253047,
    "population":71544
  },
  {
    "state":"MA",
    "FIPS":25013,
    "county":"Hampden County",
    "number":75088.13000000002,
    "rate":160.94716626048415,
    "population":466539
  },
  {
    "state":"MA",
    "FIPS":25015,
    "county":"Hampshire County",
    "number":13170.960000000001,
    "rate":82.138309084446,
    "population":160351
  },
  {
    "state":"MA",
    "FIPS":25017,
    "county":"Middlesex County",
    "number":117288.22000000009,
    "rate":76.15168758180803,
    "population":1540192
  },
  {
    "state":"MA",
    "FIPS":25021,
    "county":"Norfolk County",
    "number":9658.34,
    "rate":14.146252868916688,
    "population":682749
  },
  {
    "state":"MA",
    "FIPS":25023,
    "county":"Plymouth County",
    "number":7659.23,
    "rate":15.346820925069528,
    "population":499076
  },
  {
    "state":"MA",
    "FIPS":25025,
    "county":"Suffolk County",
    "number":516768.77999999985,
    "rate":689.4810167790963,
    "population":749504
  },
  {
    "state":"MA",
    "FIPS":25027,
    "county":"Worcester County",
    "number":49380.99999999998,
    "rate":61.25664127383444,
    "population":806133
  },
  {
    "state":"MD",
    "FIPS":24001,
    "county":"Allegany County",
    "number":2512.7100000000005,
    "rate":34.00931202035652,
    "population":73883
  },
  {
    "state":"MD",
    "FIPS":24003,
    "county":"Anne Arundel County",
    "number":61980.500000000015,
    "rate":112.54550902009208,
    "population":550715
  },
  {
    "state":"MD",
    "FIPS":24510,
    "county":"Baltimore City",
    "number":177345.63999999975,
    "rate":284.6867966931531,
    "population":622950
  },
  {
    "state":"MD",
    "FIPS":24005,
    "county":"Baltimore County",
    "number":115059.82999999996,
    "rate":140.58689556159692,
    "population":818425
  },
  {
    "state":"MD",
    "FIPS":24009,
    "county":"Calvert County",
    "number":1253.6499999999999,
    "rate":13.982110393593645,
    "population":89661
  },
  {
    "state":"MD",
    "FIPS":24011,
    "county":"Caroline County",
    "number":876.7600000000001,
    "rate":26.87139879857791,
    "population":32628
  },
  {
    "state":"MD",
    "FIPS":24013,
    "county":"Carroll County",
    "number":62047.779999999984,
    "rate":371.12135893295044,
    "population":167190
  },
  {
    "state":"MD",
    "FIPS":24015,
    "county":"Cecil County",
    "number":15828.459999999997,
    "rate":155.45225982597077,
    "population":101822
  },
  {
    "state":"MD",
    "FIPS":24017,
    "county":"Charles County",
    "number":7854.840000000002,
    "rate":52.09090728226487,
    "population":150791
  },
  {
    "state":"MD",
    "FIPS":24019,
    "county":"Dorchester County",
    "number":1019.23,
    "rate":31.372506771731103,
    "population":32488
  },
  {
    "state":"MD",
    "FIPS":24021,
    "county":"Frederick County",
    "number":32027.360000000015,
    "rate":133.63219119782372,
    "population":239668
  },
  {
    "state":"MD",
    "FIPS":24023,
    "county":"Garrett County",
    "number":836.8000000000003,
    "rate":27.985686097454945,
    "population":29901
  },
  {
    "state":"MD",
    "FIPS":24025,
    "county":"Harford County",
    "number":41653.05999999998,
    "rate":167.48584617364165,
    "population":248696
  },
  {
    "state":"MD",
    "FIPS":24027,
    "county":"Howard County",
    "number":5216.549999999996,
    "rate":17.406777115971757,
    "population":299685
  },
  {
    "state":"MD",
    "FIPS":24029,
    "county":"Kent County",
    "number":1175.88,
    "rate":58.79693984699236,
    "population":19999
  },
  {
    "state":"MD",
    "FIPS":24031,
    "county":"Montgomery County",
    "number":248679.21000000008,
    "rate":247.06169706928745,
    "population":1006547
  },
  {
    "state":"MD",
    "FIPS":24033,
    "county":"Prince George's County",
    "number":183282.3100000001,
    "rate":207.38829597041757,
    "population":883764
  },
  {
    "state":"MD",
    "FIPS":24035,
    "county":"Queen Anne's County",
    "number":1485.01,
    "rate":30.574634548074943,
    "population":48570
  },
  {
    "state":"MD",
    "FIPS":24039,
    "county":"Somerset County",
    "number":205.08,
    "rate":7.841547814782244,
    "population":26153
  },
  {
    "state":"MD",
    "FIPS":24037,
    "county":"St Mary's County",
    "number":2862.2,
    "rate":26.258956504188113,
    "population":108999
  },
  {
    "state":"MD",
    "FIPS":24041,
    "county":"Talbot County",
    "number":1330.21,
    "rate":34.948505070674166,
    "population":38062
  },
  {
    "state":"MD",
    "FIPS":24043,
    "county":"Washington County",
    "number":12767.580000000004,
    "rate":85.59539292849388,
    "population":149162
  },
  {
    "state":"MD",
    "FIPS":24045,
    "county":"Wicomico County",
    "number":24281.70999999999,
    "rate":241.67638745123008,
    "population":100472
  },
  {
    "state":"MD",
    "FIPS":24047,
    "county":"Worcester County",
    "number":2787.7100000000005,
    "rate":54.037954563076696,
    "population":51588
  },
  {
    "state":"ME",
    "FIPS":23001,
    "county":"Androscoggin County",
    "number":3624.9900000000002,
    "rate":33.71895522110394,
    "population":107506
  },
  {
    "state":"ME",
    "FIPS":23003,
    "county":"Aroostook County",
    "number":2042.98,
    "rate":28.87849146217347,
    "population":70744
  },
  {
    "state":"ME",
    "FIPS":23005,
    "county":"Cumberland County",
    "number":91509.13999999994,
    "rate":322.15856363316294,
    "population":284050
  },
  {
    "state":"ME",
    "FIPS":23009,
    "county":"Hancock County",
    "number":288.70000000000005,
    "rate":5.293750916825584,
    "population":54536
  },
  {
    "state":"ME",
    "FIPS":23011,
    "county":"Kennebec County",
    "number":2756.62,
    "rate":22.67218265260803,
    "population":121586
  },
  {
    "state":"ME",
    "FIPS":23013,
    "county":"Knox County",
    "number":11.02,
    "rate":0.27822662088466976,
    "population":39608
  },
  {
    "state":"ME",
    "FIPS":23015,
    "county":"Lincoln County",
    "number":307.68,
    "rate":8.99780669688551,
    "population":34195
  },
  {
    "state":"ME",
    "FIPS":23017,
    "county":"Oxford County",
    "number":1625.1799999999998,
    "rate":28.265966328092386,
    "population":57496
  },
  {
    "state":"ME",
    "FIPS":23019,
    "county":"Penobscot County",
    "number":2021.97,
    "rate":13.162838840715569,
    "population":153612
  },
  {
    "state":"ME",
    "FIPS":23021,
    "county":"Piscataquis County",
    "number":77.03999999999999,
    "rate":4.463499420625723,
    "population":17260
  },
  {
    "state":"ME",
    "FIPS":23023,
    "county":"Sagadahoc County",
    "number":125.27000000000001,
    "rate":3.5675229253289293,
    "population":35114
  },
  {
    "state":"ME",
    "FIPS":23025,
    "county":"Somerset County",
    "number":261.11,
    "rate":5.037913137432712,
    "population":51829
  },
  {
    "state":"ME",
    "FIPS":23027,
    "county":"Waldo County",
    "number":224.84,
    "rate":5.7815834811900535,
    "population":38889
  },
  {
    "state":"ME",
    "FIPS":23029,
    "county":"Washington County",
    "number":409.86000000000007,
    "rate":12.616900107742037,
    "population":32485
  },
  {
    "state":"ME",
    "FIPS":23031,
    "county":"York County",
    "number":3210.8400000000006,
    "rate":16.130416216623548,
    "population":199055
  },
  {
    "state":"MI",
    "FIPS":26001,
    "county":"Alcona County",
    "number":77.76,
    "rate":7.3365411831304845,
    "population":10599
  },
  {
    "state":"MI",
    "FIPS":26003,
    "county":"Alger County",
    "number":340.48,
    "rate":35.86265009479671,
    "population":9494
  },
  {
    "state":"MI",
    "FIPS":26005,
    "county":"Allegan County",
    "number":2132.44,
    "rate":19.050018313545774,
    "population":111939
  },
  {
    "state":"MI",
    "FIPS":26007,
    "county":"Alpena County",
    "number":258.58,
    "rate":8.843365253077975,
    "population":29240
  },
  {
    "state":"MI",
    "FIPS":26009,
    "county":"Antrim County",
    "number":228.20999999999998,
    "rate":9.768845511750351,
    "population":23361
  },
  {
    "state":"MI",
    "FIPS":26011,
    "county":"Arenac County",
    "number":376.45000000000005,
    "rate":24.26830840639505,
    "population":15512
  },
  {
    "state":"MI",
    "FIPS":26013,
    "county":"Baraga County",
    "number":246.39999999999998,
    "rate":28.30232023891569,
    "population":8706
  },
  {
    "state":"MI",
    "FIPS":26015,
    "county":"Barry County",
    "number":671.7199999999999,
    "rate":11.37101552316625,
    "population":59073
  },
  {
    "state":"MI",
    "FIPS":26017,
    "county":"Bay County",
    "number":4989.649999999999,
    "rate":46.595663217660885,
    "population":107084
  },
  {
    "state":"MI",
    "FIPS":26019,
    "county":"Benzie County",
    "number":99.56,
    "rate":5.7261172140104675,
    "population":17387
  },
  {
    "state":"MI",
    "FIPS":26021,
    "county":"Berrien County",
    "number":2204.24,
    "rate":14.124582684531934,
    "population":156057
  },
  {
    "state":"MI",
    "FIPS":26023,
    "county":"Branch County",
    "number":699.6800000000002,
    "rate":15.990492732425272,
    "population":43756
  },
  {
    "state":"MI",
    "FIPS":26025,
    "county":"Calhoun County",
    "number":3144.079999999999,
    "rate":23.330958741466304,
    "population":134760
  },
  {
    "state":"MI",
    "FIPS":26027,
    "county":"Cass County",
    "number":260.72999999999996,
    "rate":5.008836976985437,
    "population":52054
  },
  {
    "state":"MI",
    "FIPS":26029,
    "county":"Charlevoix County",
    "number":312.98,
    "rate":12.019662813472099,
    "population":26039
  },
  {
    "state":"MI",
    "FIPS":26031,
    "county":"Cheboygan County",
    "number":776.99,
    "rate":30.146271436331187,
    "population":25774
  },
  {
    "state":"MI",
    "FIPS":26033,
    "county":"Chippewa County",
    "number":1736.9499999999998,
    "rate":44.54174787157657,
    "population":38996
  },
  {
    "state":"MI",
    "FIPS":26035,
    "county":"Clare County",
    "number":355.6000000000001,
    "rate":11.55295646523717,
    "population":30780
  },
  {
    "state":"MI",
    "FIPS":26037,
    "county":"Clinton County",
    "number":913.03,
    "rate":11.946588857195195,
    "population":76426
  },
  {
    "state":"MI",
    "FIPS":26039,
    "county":"Crawford County",
    "number":976.7099999999999,
    "rate":69.8398283875581,
    "population":13985
  },
  {
    "state":"MI",
    "FIPS":26041,
    "county":"Delta County",
    "number":348.65,
    "rate":9.466210529173793,
    "population":36831
  },
  {
    "state":"MI",
    "FIPS":26043,
    "county":"Dickinson County",
    "number":871.3100000000001,
    "rate":33.22060393472625,
    "population":26228
  },
  {
    "state":"MI",
    "FIPS":26045,
    "county":"Eaton County",
    "number":11925.320000000003,
    "rate":110.45235625370483,
    "population":107968
  },
  {
    "state":"MI",
    "FIPS":26047,
    "county":"Emmet County",
    "number":25741.68999999999,
    "rate":782.5411156710743,
    "population":32895
  },
  {
    "state":"MI",
    "FIPS":26049,
    "county":"Genesee County",
    "number":63415.50999999989,
    "rate":151.69069841983622,
    "population":418058
  },
  {
    "state":"MI",
    "FIPS":26051,
    "county":"Gladwin County",
    "number":117.82000000000001,
    "rate":4.618943076681826,
    "population":25508
  },
  {
    "state":"MI",
    "FIPS":26053,
    "county":"Gogebic County",
    "number":159.82,
    "rate":9.957632398753892,
    "population":16050
  },
  {
    "state":"MI",
    "FIPS":26055,
    "county":"Grand Traverse County",
    "number":6182.300000000007,
    "rate":69.46014268861308,
    "population":89005
  },
  {
    "state":"MI",
    "FIPS":26057,
    "county":"Gratiot County",
    "number":589.5600000000001,
    "rate":14.02678975042231,
    "population":42031
  },
  {
    "state":"MI",
    "FIPS":26059,
    "county":"Hillsdale County",
    "number":706.2900000000001,
    "rate":15.26651392011067,
    "population":46264
  },
  {
    "state":"MI",
    "FIPS":26061,
    "county":"Houghton County",
    "number":141.21,
    "rate":3.83202170963365,
    "population":36850
  },
  {
    "state":"MI",
    "FIPS":26063,
    "county":"Huron County",
    "number":899.5099999999999,
    "rate":27.70621573338261,
    "population":32466
  },
  {
    "state":"MI",
    "FIPS":26065,
    "county":"Ingham County",
    "number":21194.579999999994,
    "rate":75.08566205645617,
    "population":282272
  },
  {
    "state":"MI",
    "FIPS":26067,
    "county":"Ionia County",
    "number":902.3200000000002,
    "rate":14.121697758858147,
    "population":63896
  },
  {
    "state":"MI",
    "FIPS":26069,
    "county":"Iosco County",
    "number":752.2699999999999,
    "rate":29.651951123374058,
    "population":25370
  },
  {
    "state":"MI",
    "FIPS":26071,
    "county":"Iron County",
    "number":138.04999999999998,
    "rate":11.915242534092869,
    "population":11586
  },
  {
    "state":"MI",
    "FIPS":26073,
    "county":"Isabella County",
    "number":1039.0900000000001,
    "rate":14.728002041047738,
    "population":70552
  },
  {
    "state":"MI",
    "FIPS":26075,
    "county":"Jackson County",
    "number":3645.6099999999988,
    "rate":22.76286870301455,
    "population":160156
  },
  {
    "state":"MI",
    "FIPS":26077,
    "county":"Kalamazoo County",
    "number":180640.98000000004,
    "rate":708.3404438867541,
    "population":255020
  },
  {
    "state":"MI",
    "FIPS":26079,
    "county":"Kalkaska County",
    "number":7119.959999999999,
    "rate":416.81067790656823,
    "population":17082
  },
  {
    "state":"MI",
    "FIPS":26081,
    "county":"Kent County",
    "number":20480.620000000024,
    "rate":33.32647731248326,
    "population":614545
  },
  {
    "state":"MI",
    "FIPS":26087,
    "county":"Lapeer County",
    "number":1219.63,
    "rate":13.830513471831626,
    "population":88184
  },
  {
    "state":"MI",
    "FIPS":26089,
    "county":"Leelanau County",
    "number":543.42,
    "rate":25.11647254575707,
    "population":21636
  },
  {
    "state":"MI",
    "FIPS":26091,
    "county":"Lenawee County",
    "number":1340.81,
    "rate":13.523045890065555,
    "population":99150
  },
  {
    "state":"MI",
    "FIPS":26093,
    "county":"Livingston County",
    "number":2224.4,
    "rate":12.154327834634698,
    "population":183013
  },
  {
    "state":"MI",
    "FIPS":26095,
    "county":"Luce County",
    "number":75.21000000000001,
    "rate":11.581459809054513,
    "population":6494
  },
  {
    "state":"MI",
    "FIPS":26097,
    "county":"Mackinac County",
    "number":165.25,
    "rate":14.848593764039896,
    "population":11129
  },
  {
    "state":"MI",
    "FIPS":26099,
    "county":"Macomb County",
    "number":59387.159999999996,
    "rate":70.05268062518431,
    "population":847750
  },
  {
    "state":"MI",
    "FIPS":26101,
    "county":"Manistee County",
    "number":707.8,
    "rate":28.767680052024062,
    "population":24604
  },
  {
    "state":"MI",
    "FIPS":26103,
    "county":"Marquette County",
    "number":1414.04,
    "rate":20.85912376456704,
    "population":67790
  },
  {
    "state":"MI",
    "FIPS":26105,
    "county":"Mason County",
    "number":423.7700000000001,
    "rate":14.78147127559385,
    "population":28669
  },
  {
    "state":"MI",
    "FIPS":26107,
    "county":"Mecosta County",
    "number":320.81,
    "rate":7.3779954923876545,
    "population":43482
  },
  {
    "state":"MI",
    "FIPS":26109,
    "county":"Menominee County",
    "number":110.54000000000002,
    "rate":4.65470776486441,
    "population":23748
  },
  {
    "state":"MI",
    "FIPS":26111,
    "county":"Midland County",
    "number":2857.28,
    "rate":34.1579696111131,
    "population":83649
  },
  {
    "state":"MI",
    "FIPS":26113,
    "county":"Missaukee County",
    "number":180.62,
    "rate":12.01170446232626,
    "population":15037
  },
  {
    "state":"MI",
    "FIPS":26115,
    "county":"Monroe County",
    "number":4689.449999999998,
    "rate":31.088902147971346,
    "population":150840
  },
  {
    "state":"MI",
    "FIPS":26117,
    "county":"Montcalm County",
    "number":986.1400000000001,
    "rate":15.638370415008168,
    "population":63059
  },
  {
    "state":"MI",
    "FIPS":26119,
    "county":"Montmorency County",
    "number":38.989999999999995,
    "rate":4.107669616519173,
    "population":9492
  },
  {
    "state":"MI",
    "FIPS":26121,
    "county":"Muskegon County",
    "number":6440.880000000002,
    "rate":37.855018631058044,
    "population":170146
  },
  {
    "state":"MI",
    "FIPS":26123,
    "county":"Newaygo County",
    "number":665.9599999999999,
    "rate":13.885159084275049,
    "population":47962
  },
  {
    "state":"MI",
    "FIPS":26125,
    "county":"Oakland County",
    "number":460108.7499999997,
    "rate":376.9433596230144,
    "population":1220631
  },
  {
    "state":"MI",
    "FIPS":26127,
    "county":"Oceana County",
    "number":714.7199999999999,
    "rate":27.218096652576257,
    "population":26259
  },
  {
    "state":"MI",
    "FIPS":26129,
    "county":"Ogemaw County",
    "number":1176.3700000000001,
    "rate":54.906417736289384,
    "population":21425
  },
  {
    "state":"MI",
    "FIPS":26131,
    "county":"Ontonagon County",
    "number":44.120000000000005,
    "rate":6.889444097439101,
    "population":6404
  },
  {
    "state":"MI",
    "FIPS":26133,
    "county":"Osceola County",
    "number":255.87,
    "rate":10.995702621400946,
    "population":23270
  },
  {
    "state":"MI",
    "FIPS":26135,
    "county":"Oscoda County",
    "number":96.95,
    "rate":11.270634736107882,
    "population":8602
  },
  {
    "state":"MI",
    "FIPS":26137,
    "county":"Otsego County",
    "number":1147.59,
    "rate":47.71882406752879,
    "population":24049
  },
  {
    "state":"MI",
    "FIPS":26139,
    "county":"Ottawa County",
    "number":33589.619999999995,
    "rate":124.6580863524015,
    "population":269454
  },
  {
    "state":"MI",
    "FIPS":26141,
    "county":"Presque Isle County",
    "number":196.51000000000002,
    "rate":14.987034777303235,
    "population":13112
  },
  {
    "state":"MI",
    "FIPS":26143,
    "county":"Roscommon County",
    "number":577.95,
    "rate":23.990286829106306,
    "population":24091
  },
  {
    "state":"MI",
    "FIPS":26145,
    "county":"Saginaw County",
    "number":7528.259999999995,
    "rate":37.970121250025194,
    "population":198268
  },
  {
    "state":"MI",
    "FIPS":26151,
    "county":"Sanilac County",
    "number":662.0600000000001,
    "rate":15.647467561627002,
    "population":42311
  },
  {
    "state":"MI",
    "FIPS":26153,
    "county":"Schoolcraft County",
    "number":226.99999999999997,
    "rate":27.16935966487133,
    "population":8355
  },
  {
    "state":"MI",
    "FIPS":26155,
    "county":"Shiawassee County",
    "number":1069.5700000000002,
    "rate":15.433910533910536,
    "population":69300
  },
  {
    "state":"MI",
    "FIPS":26147,
    "county":"St Clair County",
    "number":27136.09999999997,
    "rate":169.0048827881715,
    "population":160564
  },
  {
    "state":"MI",
    "FIPS":26149,
    "county":"St Joseph County",
    "number":340.62000000000006,
    "rate":5.5929197727496645,
    "population":60902
  },
  {
    "state":"MI",
    "FIPS":26157,
    "county":"Tuscola County",
    "number":845.9,
    "rate":15.46293757426195,
    "population":54705
  },
  {
    "state":"MI",
    "FIPS":26159,
    "county":"Van Buren County",
    "number":1138.93,
    "rate":15.135282392026578,
    "population":75250
  },
  {
    "state":"MI",
    "FIPS":26161,
    "county":"Washtenaw County",
    "number":93156.25,
    "rate":265.175020851065,
    "population":351301
  },
  {
    "state":"MI",
    "FIPS":26163,
    "county":"Wayne County",
    "number":230561.08999999918,
    "rate":128.60606212732208,
    "population":1792770
  },
  {
    "state":"MI",
    "FIPS":26165,
    "county":"Wexford County",
    "number":1042.22,
    "rate":31.97582377124624,
    "population":32594
  },
  {
    "state":"MN",
    "FIPS":27003,
    "county":"Anoka County",
    "number":15450.69,
    "rate":45.96613830280961,
    "population":336132
  },
  {
    "state":"MN",
    "FIPS":27005,
    "county":"Becker County",
    "number":35.06,
    "rate":1.0618450542128537,
    "population":33018
  },
  {
    "state":"MN",
    "FIPS":27007,
    "county":"Beltrami County",
    "number":47.76,
    "rate":1.0556795826794279,
    "population":45241
  },
  {
    "state":"MN",
    "FIPS":27013,
    "county":"Blue Earth County",
    "number":4520.509999999999,
    "rate":69.54630769230768,
    "population":65000
  },
  {
    "state":"MN",
    "FIPS":27015,
    "county":"Brown County",
    "number":10.15,
    "rate":0.39924477835031275,
    "population":25423
  },
  {
    "state":"MN",
    "FIPS":27017,
    "county":"Carlton County",
    "number":12.11,
    "rate":0.3429526209962901,
    "population":35311
  },
  {
    "state":"MN",
    "FIPS":27019,
    "county":"Carver County",
    "number":49.830000000000005,
    "rate":0.5307274470124614,
    "population":93890
  },
  {
    "state":"MN",
    "FIPS":27023,
    "county":"Chippewa County",
    "number":55.53,
    "rate":4.570746563503169,
    "population":12149
  },
  {
    "state":"MN",
    "FIPS":27027,
    "county":"Clay County",
    "number":71.02,
    "rate":1.17947951439058,
    "population":60213
  },
  {
    "state":"MN",
    "FIPS":27033,
    "county":"Cottonwood County",
    "number":39.28,
    "rate":3.3722527472527473,
    "population":11648
  },
  {
    "state":"MN",
    "FIPS":27035,
    "county":"Crow Wing County",
    "number":36.6,
    "rate":0.5823389021479713,
    "population":62850
  },
  {
    "state":"MN",
    "FIPS":27037,
    "county":"Dakota County",
    "number":20886.559999999998,
    "rate":51.56322287424055,
    "population":405067
  },
  {
    "state":"MN",
    "FIPS":27045,
    "county":"Fillmore County",
    "number":11.21,
    "rate":0.5365176605724132,
    "population":20894
  },
  {
    "state":"MN",
    "FIPS":27049,
    "county":"Goodhue County",
    "number":21.8,
    "rate":0.4698984760631992,
    "population":46393
  },
  {
    "state":"MN",
    "FIPS":27053,
    "county":"Hennepin County",
    "number":244836.48999999996,
    "rate":206.6502164524087,
    "population":1184787
  },
  {
    "state":"MN",
    "FIPS":27069,
    "county":"Kittson County",
    "number":11.1,
    "rate":2.4639289678135405,
    "population":4505
  },
  {
    "state":"MN",
    "FIPS":27077,
    "county":"Lake of the Woods County",
    "number":10.95,
    "rate":2.7595766129032255,
    "population":3968
  },
  {
    "state":"MN",
    "FIPS":27085,
    "county":"McLeod County",
    "number":40.04,
    "rate":1.1118824803532252,
    "population":36011
  },
  {
    "state":"MN",
    "FIPS":27095,
    "county":"Mille Lacs County",
    "number":40.61,
    "rate":1.5784359452736316,
    "population":25728
  },
  {
    "state":"MN",
    "FIPS":27099,
    "county":"Mower County",
    "number":10.31,
    "rate":0.261827970642761,
    "population":39377
  },
  {
    "state":"MN",
    "FIPS":27103,
    "county":"Nicollet County",
    "number":10.63,
    "rate":0.3227471459800826,
    "population":32936
  },
  {
    "state":"MN",
    "FIPS":27105,
    "county":"Nobles County",
    "number":12.6,
    "rate":0.5813416997323982,
    "population":21674
  },
  {
    "state":"MN",
    "FIPS":27109,
    "county":"Olmsted County",
    "number":133447.13999999998,
    "rate":906.8413112615183,
    "population":147156
  },
  {
    "state":"MN",
    "FIPS":27111,
    "county":"Otter Tail County",
    "number":55.22999999999999,
    "rate":0.9640089366752773,
    "population":57292
  },
  {
    "state":"MN",
    "FIPS":27113,
    "county":"Pennington County",
    "number":67.00999999999999,
    "rate":4.762277023665695,
    "population":14071
  },
  {
    "state":"MN",
    "FIPS":27119,
    "county":"Polk County",
    "number":57.11,
    "rate":1.8122679529083234,
    "population":31513
  },
  {
    "state":"MN",
    "FIPS":27121,
    "county":"Pope County",
    "number":10.84,
    "rate":0.9928558344019052,
    "population":10918
  },
  {
    "state":"MN",
    "FIPS":27123,
    "county":"Ramsey County",
    "number":19942.629999999997,
    "rate":38.283552721248405,
    "population":520919
  },
  {
    "state":"MN",
    "FIPS":27135,
    "county":"Roseau County",
    "number":60,
    "rate":3.8742170852973463,
    "population":15487
  },
  {
    "state":"MN",
    "FIPS":27139,
    "county":"Scott County",
    "number":13.26,
    "rate":0.09803776598104308,
    "population":135254
  },
  {
    "state":"MN",
    "FIPS":27137,
    "county":"St Louis County",
    "number":161.42999999999998,
    "rate":0.805189363898906,
    "population":200487
  },
  {
    "state":"MN",
    "FIPS":27145,
    "county":"Stearns County",
    "number":24951.700000000004,
    "rate":164.53912401250284,
    "population":151646
  },
  {
    "state":"MN",
    "FIPS":27149,
    "county":"Stevens County",
    "number":25.14,
    "rate":2.579784504874295,
    "population":9745
  },
  {
    "state":"MN",
    "FIPS":27151,
    "county":"Swift County",
    "number":39.95,
    "rate":4.158859046429315,
    "population":9606
  },
  {
    "state":"MN",
    "FIPS":27157,
    "county":"Wabasha County",
    "number":22.5,
    "rate":1.0503220987769581,
    "population":21422
  },
  {
    "state":"MN",
    "FIPS":27159,
    "county":"Wadena County",
    "number":51.25000000000001,
    "rate":3.7438819490101545,
    "population":13689
  },
  {
    "state":"MN",
    "FIPS":27161,
    "county":"Waseca County",
    "number":10.63,
    "rate":0.5538189017401272,
    "population":19194
  },
  {
    "state":"MN",
    "FIPS":27163,
    "county":"Washington County",
    "number":313.01,
    "rate":1.2822392999934455,
    "population":244112
  },
  {
    "state":"MN",
    "FIPS":27169,
    "county":"Winona County",
    "number":39.39,
    "rate":0.7674472976659004,
    "population":51326
  },
  {
    "state":"MN",
    "FIPS":27171,
    "county":"Wright County",
    "number":13.25,
    "rate":0.10407175845926671,
    "population":127316
  },
  {
    "state":"MO",
    "FIPS":29001,
    "county":"Adair County",
    "number":716.9099999999999,
    "rate":27.926843519925203,
    "population":25671
  },
  {
    "state":"MO",
    "FIPS":29003,
    "county":"Andrew County",
    "number":39.96,
    "rate":2.2939150401836965,
    "population":17420
  },
  {
    "state":"MO",
    "FIPS":29005,
    "county":"Atchison County",
    "number":25.37,
    "rate":4.586044830079538,
    "population":5532
  },
  {
    "state":"MO",
    "FIPS":29007,
    "county":"Audrain County",
    "number":702.92,
    "rate":27.447090980085903,
    "population":25610
  },
  {
    "state":"MO",
    "FIPS":29009,
    "county":"Barry County",
    "number":500.26000000000005,
    "rate":14.034113224485218,
    "population":35646
  },
  {
    "state":"MO",
    "FIPS":29011,
    "county":"Barton County",
    "number":15.07,
    "rate":1.2187626364739184,
    "population":12365
  },
  {
    "state":"MO",
    "FIPS":29013,
    "county":"Bates County",
    "number":76.56,
    "rate":4.581961816984859,
    "population":16709
  },
  {
    "state":"MO",
    "FIPS":29015,
    "county":"Benton County",
    "number":414.3999999999999,
    "rate":21.85884586981749,
    "population":18958
  },
  {
    "state":"MO",
    "FIPS":29019,
    "county":"Boone County",
    "number":22558.539999999997,
    "rate":133.80551864857168,
    "population":168592
  },
  {
    "state":"MO",
    "FIPS":29021,
    "county":"Buchanan County",
    "number":27522.07999999999,
    "rate":306.55364840330134,
    "population":89779
  },
  {
    "state":"MO",
    "FIPS":29023,
    "county":"Butler County",
    "number":2601.8,
    "rate":60.490095787222174,
    "population":43012
  },
  {
    "state":"MO",
    "FIPS":29025,
    "county":"Caldwell County",
    "number":12.3,
    "rate":1.3492759982448443,
    "population":9116
  },
  {
    "state":"MO",
    "FIPS":29027,
    "county":"Callaway County",
    "number":780.8199999999999,
    "rate":17.563093256556748,
    "population":44458
  },
  {
    "state":"MO",
    "FIPS":29029,
    "county":"Camden County",
    "number":1889.91,
    "rate":43.079781171643496,
    "population":43870
  },
  {
    "state":"MO",
    "FIPS":29031,
    "county":"Cape Girardeau County",
    "number":8842.54,
    "rate":114.71899325376233,
    "population":77080
  },
  {
    "state":"MO",
    "FIPS":29033,
    "county":"Carroll County",
    "number":178.87,
    "rate":19.666849917537107,
    "population":9095
  },
  {
    "state":"MO",
    "FIPS":29037,
    "county":"Cass County",
    "number":1750.3099999999995,
    "rate":17.42659723812463,
    "population":100439
  },
  {
    "state":"MO",
    "FIPS":29039,
    "county":"Cedar County",
    "number":30.1,
    "rate":2.175798756686425,
    "population":13834
  },
  {
    "state":"MO",
    "FIPS":29043,
    "county":"Christian County",
    "number":2449.57,
    "rate":30.703676313909327,
    "population":79781
  },
  {
    "state":"MO",
    "FIPS":29045,
    "county":"Clark County",
    "number":104.17999999999999,
    "rate":14.910548160870187,
    "population":6987
  },
  {
    "state":"MO",
    "FIPS":29047,
    "county":"Clay County",
    "number":36259.99000000002,
    "rate":159.25226954310494,
    "population":227689
  },
  {
    "state":"MO",
    "FIPS":29049,
    "county":"Clinton County",
    "number":360.74,
    "rate":17.59278224823214,
    "population":20505
  },
  {
    "state":"MO",
    "FIPS":29051,
    "county":"Cole County",
    "number":98903.33000000003,
    "rate":1294.9360409547382,
    "population":76377
  },
  {
    "state":"MO",
    "FIPS":29055,
    "county":"Crawford County",
    "number":493.25,
    "rate":19.909986275934447,
    "population":24774
  },
  {
    "state":"MO",
    "FIPS":29057,
    "county":"Dade County",
    "number":19.75,
    "rate":2.6103621464446207,
    "population":7566
  },
  {
    "state":"MO",
    "FIPS":29059,
    "county":"Dallas County",
    "number":72.08,
    "rate":4.2968703427719825,
    "population":16775
  },
  {
    "state":"MO",
    "FIPS":29063,
    "county":"Dekalb County",
    "number":11.87,
    "rate":0.922013360260991,
    "population":12874
  },
  {
    "state":"MO",
    "FIPS":29065,
    "county":"Dent County",
    "number":195.94000000000003,
    "rate":12.508139163740825,
    "population":15665
  },
  {
    "state":"MO",
    "FIPS":29069,
    "county":"Dunklin County",
    "number":779.9000000000001,
    "rate":24.46975401606426,
    "population":31872
  },
  {
    "state":"MO",
    "FIPS":29071,
    "county":"Franklin County",
    "number":1675.1999999999996,
    "rate":16.522991340027218,
    "population":101386
  },
  {
    "state":"MO",
    "FIPS":29073,
    "county":"Gasconade County",
    "number":365.72,
    "rate":24.41388518024032,
    "population":14980
  },
  {
    "state":"MO",
    "FIPS":29075,
    "county":"Gentry County",
    "number":13.5,
    "rate":1.985586115605236,
    "population":6799
  },
  {
    "state":"MO",
    "FIPS":29077,
    "county":"Greene County",
    "number":121996.55999999995,
    "rate":434.6371390094268,
    "population":280686
  },
  {
    "state":"MO",
    "FIPS":29079,
    "county":"Grundy County",
    "number":68.83,
    "rate":6.667635377312796,
    "population":10323
  },
  {
    "state":"MO",
    "FIPS":29081,
    "county":"Harrison County",
    "number":42.89,
    "rate":4.906761240132708,
    "population":8741
  },
  {
    "state":"MO",
    "FIPS":29083,
    "county":"Henry County",
    "number":318.56,
    "rate":14.38194130925508,
    "population":22150
  },
  {
    "state":"MO",
    "FIPS":29087,
    "county":"Holt County",
    "number":10.06,
    "rate":2.1606529209621996,
    "population":4656
  },
  {
    "state":"MO",
    "FIPS":29091,
    "county":"Howell County",
    "number":501.9899999999999,
    "rate":12.35758948353109,
    "population":40622
  },
  {
    "state":"MO",
    "FIPS":29093,
    "county":"Iron County",
    "number":46.09,
    "rate":4.421527244819647,
    "population":10424
  },
  {
    "state":"MO",
    "FIPS":29095,
    "county":"Jackson County",
    "number":44688.19999999999,
    "rate":65.97115398810138,
    "population":677390
  },
  {
    "state":"MO",
    "FIPS":29097,
    "county":"Jasper County",
    "number":1184.5700000000002,
    "rate":10.266506040803593,
    "population":115382
  },
  {
    "state":"MO",
    "FIPS":29099,
    "county":"Jefferson County",
    "number":6156.969999999997,
    "rate":27.97325785317715,
    "population":220102
  },
  {
    "state":"MO",
    "FIPS":29101,
    "county":"Johnson County",
    "number":1028.3,
    "rate":18.896321070234112,
    "population":54418
  },
  {
    "state":"MO",
    "FIPS":29105,
    "county":"Laclede County",
    "number":197.75,
    "rate":5.5842652208290975,
    "population":35412
  },
  {
    "state":"MO",
    "FIPS":29107,
    "county":"Lafayette County",
    "number":479.8700000000002,
    "rate":14.493642212087352,
    "population":33109
  },
  {
    "state":"MO",
    "FIPS":29109,
    "county":"Lawrence County",
    "number":393.15000000000003,
    "rate":10.24548510671566,
    "population":38373
  },
  {
    "state":"MO",
    "FIPS":29113,
    "county":"Lincoln County",
    "number":295.27000000000004,
    "rate":5.534790432631027,
    "population":53348
  },
  {
    "state":"MO",
    "FIPS":29115,
    "county":"Linn County",
    "number":20.77,
    "rate":1.6634630786480857,
    "population":12486
  },
  {
    "state":"MO",
    "FIPS":29117,
    "county":"Livingston County",
    "number":98.76,
    "rate":6.5739199893496645,
    "population":15023
  },
  {
    "state":"MO",
    "FIPS":29121,
    "county":"Macon County",
    "number":77.14999999999999,
    "rate":4.959501157109797,
    "population":15556
  },
  {
    "state":"MO",
    "FIPS":29123,
    "county":"Madison County",
    "number":228.35,
    "rate":18.316355177669045,
    "population":12467
  },
  {
    "state":"MO",
    "FIPS":29127,
    "county":"Marion County",
    "number":2194.090000000001,
    "rate":76.15988059287032,
    "population":28809
  },
  {
    "state":"MO",
    "FIPS":29129,
    "county":"Mercer County",
    "number":19.71,
    "rate":5.306946688206786,
    "population":3714
  },
  {
    "state":"MO",
    "FIPS":29131,
    "county":"Miller County",
    "number":511.63000000000005,
    "rate":20.66941380842726,
    "population":24753
  },
  {
    "state":"MO",
    "FIPS":29133,
    "county":"Mississippi County",
    "number":180.88000000000002,
    "rate":12.644529884655716,
    "population":14305
  },
  {
    "state":"MO",
    "FIPS":29135,
    "county":"Moniteau County",
    "number":189.9,
    "rate":12.117924829302535,
    "population":15671
  },
  {
    "state":"MO",
    "FIPS":29139,
    "county":"Montgomery County",
    "number":132.88,
    "rate":11.051230871590153,
    "population":12024
  },
  {
    "state":"MO",
    "FIPS":29141,
    "county":"Morgan County",
    "number":17.91,
    "rate":0.8892309219999008,
    "population":20141
  },
  {
    "state":"MO",
    "FIPS":29143,
    "county":"New Madrid County",
    "number":206.52,
    "rate":11.1759294334109,
    "population":18479
  },
  {
    "state":"MO",
    "FIPS":29145,
    "county":"Newton County",
    "number":13690.350000000004,
    "rate":231.7923234512301,
    "population":59063
  },
  {
    "state":"MO",
    "FIPS":29147,
    "county":"Nodaway County",
    "number":10.71,
    "rate":0.45833868275773526,
    "population":23367
  },
  {
    "state":"MO",
    "FIPS":29153,
    "county":"Ozark County",
    "number":174.76000000000002,
    "rate":18.15876974231089,
    "population":9624
  },
  {
    "state":"MO",
    "FIPS":29155,
    "county":"Pemiscot County",
    "number":963.06,
    "rate":53.15780758403709,
    "population":18117
  },
  {
    "state":"MO",
    "FIPS":29157,
    "county":"Perry County",
    "number":317.64000000000004,
    "rate":16.69680403700589,
    "population":19024
  },
  {
    "state":"MO",
    "FIPS":29159,
    "county":"Pettis County",
    "number":522.46,
    "rate":12.357435133281298,
    "population":42279
  },
  {
    "state":"MO",
    "FIPS":29161,
    "county":"Phelps County",
    "number":885.3999999999999,
    "rate":19.595865701701964,
    "population":45183
  },
  {
    "state":"MO",
    "FIPS":29163,
    "county":"Pike County",
    "number":379.7500000000001,
    "rate":20.470594577111754,
    "population":18551
  },
  {
    "state":"MO",
    "FIPS":29165,
    "county":"Platte County",
    "number":2464.9100000000017,
    "rate":26.755856110110084,
    "population":92126
  },
  {
    "state":"MO",
    "FIPS":29167,
    "county":"Polk County",
    "number":902.28,
    "rate":29.00755505545732,
    "population":31105
  },
  {
    "state":"MO",
    "FIPS":29169,
    "county":"Pulaski County",
    "number":702.5100000000001,
    "rate":13.158328494633727,
    "population":53389
  },
  {
    "state":"MO",
    "FIPS":29173,
    "county":"Ralls County",
    "number":37.18,
    "rate":3.6315686657550303,
    "population":10238
  },
  {
    "state":"MO",
    "FIPS":29175,
    "county":"Randolph County",
    "number":1229.3200000000002,
    "rate":48.580122505433714,
    "population":25305
  },
  {
    "state":"MO",
    "FIPS":29177,
    "county":"Ray County",
    "number":374.59000000000003,
    "rate":16.24555468817764,
    "population":23058
  },
  {
    "state":"MO",
    "FIPS":29179,
    "county":"Reynolds County",
    "number":36.51,
    "rate":5.472942587318243,
    "population":6671
  },
  {
    "state":"MO",
    "FIPS":29181,
    "county":"Ripley County",
    "number":60.47,
    "rate":4.308514428215176,
    "population":14035
  },
  {
    "state":"MO",
    "FIPS":29195,
    "county":"Saline County",
    "number":36.99,
    "rate":1.575920245398773,
    "population":23472
  },
  {
    "state":"MO",
    "FIPS":29197,
    "county":"Schuyler County",
    "number":107.97999999999999,
    "rate":24.608021877848678,
    "population":4388
  },
  {
    "state":"MO",
    "FIPS":29201,
    "county":"Scott County",
    "number":1065.43,
    "rate":27.21474367161358,
    "population":39149
  },
  {
    "state":"MO",
    "FIPS":29203,
    "county":"Shannon County",
    "number":127.01,
    "rate":15.260122551964436,
    "population":8323
  },
  {
    "state":"MO",
    "FIPS":29183,
    "county":"St Charles County",
    "number":55581.50000000004,
    "rate":150.71273431293073,
    "population":368791
  },
  {
    "state":"MO",
    "FIPS":29187,
    "county":"St Francois County",
    "number":2647.4300000000003,
    "rate":40.21310852889801,
    "population":65835
  },
  {
    "state":"MO",
    "FIPS":29510,
    "county":"St Louis City",
    "number":145444.23999999996,
    "rate":455.5467717383813,
    "population":319274
  },
  {
    "state":"MO",
    "FIPS":29189,
    "county":"St Louis County",
    "number":142152.38999999964,
    "rate":142.03875899280538,
    "population":1000800
  },
  {
    "state":"MO",
    "FIPS":29186,
    "county":"Ste Genevieve County",
    "number":870.8499999999999,
    "rate":48.727059086839745,
    "population":17872
  },
  {
    "state":"MO",
    "FIPS":29207,
    "county":"Stoddard County",
    "number":252.90999999999997,
    "rate":8.478945956819095,
    "population":29828
  },
  {
    "state":"MO",
    "FIPS":29209,
    "county":"Stone County",
    "number":223.21999999999997,
    "rate":7.061019200961629,
    "population":31613
  },
  {
    "state":"MO",
    "FIPS":29211,
    "county":"Sullivan County",
    "number":86.46,
    "rate":13.250574712643676,
    "population":6525
  },
  {
    "state":"MO",
    "FIPS":29213,
    "county":"Taney County",
    "number":3997.16,
    "rate":75.32999133089594,
    "population":53062
  },
  {
    "state":"MO",
    "FIPS":29215,
    "county":"Texas County",
    "number":331.63,
    "rate":12.87983532701569,
    "population":25748
  },
  {
    "state":"MO",
    "FIPS":29217,
    "county":"Vernon County",
    "number":354.06,
    "rate":17.02375228387345,
    "population":20798
  },
  {
    "state":"MO",
    "FIPS":29219,
    "county":"Warren County",
    "number":213.84999999999997,
    "rate":6.522800061003507,
    "population":32785
  },
  {
    "state":"MO",
    "FIPS":29221,
    "county":"Washington County",
    "number":141.04,
    "rate":5.621139053844007,
    "population":25091
  },
  {
    "state":"MO",
    "FIPS":29225,
    "county":"Webster County",
    "number":105.38000000000001,
    "rate":2.900313755710904,
    "population":36334
  },
  {
    "state":"MO",
    "FIPS":29229,
    "county":"Wright County",
    "number":511.83000000000004,
    "rate":27.50295540032241,
    "population":18610
  },
  {
    "state":"MS",
    "FIPS":28001,
    "county":"Adams County",
    "number":1760.8700000000001,
    "rate":54.78578762328491,
    "population":32141
  },
  {
    "state":"MS",
    "FIPS":28003,
    "county":"Alcorn County",
    "number":1221.16,
    "rate":32.79426376990628,
    "population":37237
  },
  {
    "state":"MS",
    "FIPS":28007,
    "county":"Attala County",
    "number":1750.61,
    "rate":91.54473670449197,
    "population":19123
  },
  {
    "state":"MS",
    "FIPS":28011,
    "county":"Bolivar County",
    "number":3702.3699999999994,
    "rate":108.6982179031737,
    "population":34061
  },
  {
    "state":"MS",
    "FIPS":28013,
    "county":"Calhoun County",
    "number":52.3,
    "rate":3.522359913793103,
    "population":14848
  },
  {
    "state":"MS",
    "FIPS":28017,
    "county":"Chickasaw County",
    "number":385.88999999999993,
    "rate":22.169941399517406,
    "population":17406
  },
  {
    "state":"MS",
    "FIPS":28021,
    "county":"Claiborne County",
    "number":87.75,
    "rate":9.359001706484642,
    "population":9376
  },
  {
    "state":"MS",
    "FIPS":28023,
    "county":"Clarke County",
    "number":371.5699999999999,
    "rate":22.526220066686864,
    "population":16495
  },
  {
    "state":"MS",
    "FIPS":28025,
    "county":"Clay County",
    "number":308.44,
    "rate":15.123314537876931,
    "population":20395
  },
  {
    "state":"MS",
    "FIPS":28027,
    "county":"Coahoma County",
    "number":57.79,
    "rate":2.2499513334631107,
    "population":25685
  },
  {
    "state":"MS",
    "FIPS":28029,
    "county":"Copiah County",
    "number":1466.3600000000001,
    "rate":50.735589232579066,
    "population":28902
  },
  {
    "state":"MS",
    "FIPS":28031,
    "county":"Covington County",
    "number":386.9500000000001,
    "rate":19.820212057573123,
    "population":19523
  },
  {
    "state":"MS",
    "FIPS":28033,
    "county":"DeSoto County",
    "number":3235.1599999999994,
    "rate":19.447326500556038,
    "population":166355
  },
  {
    "state":"MS",
    "FIPS":28035,
    "county":"Forrest County",
    "number":44741.38999999999,
    "rate":582.8054292748374,
    "population":76769
  },
  {
    "state":"MS",
    "FIPS":28037,
    "county":"Franklin County",
    "number":109.65,
    "rate":13.90262457208064,
    "population":7887
  },
  {
    "state":"MS",
    "FIPS":28039,
    "county":"George County",
    "number":1405.05,
    "rate":61.4310073452256,
    "population":22872
  },
  {
    "state":"MS",
    "FIPS":28043,
    "county":"Grenada County",
    "number":662.5199999999999,
    "rate":30.64951887490747,
    "population":21616
  },
  {
    "state":"MS",
    "FIPS":28045,
    "county":"Hancock County",
    "number":493.43999999999994,
    "rate":10.89031118958287,
    "population":45310
  },
  {
    "state":"MS",
    "FIPS":28047,
    "county":"Harrison County",
    "number":14604.939999999999,
    "rate":75.40329700399089,
    "population":193691
  },
  {
    "state":"MS",
    "FIPS":28049,
    "county":"Hinds County",
    "number":122290.11999999995,
    "rate":492.51351198962516,
    "population":248298
  },
  {
    "state":"MS",
    "FIPS":28051,
    "county":"Holmes County",
    "number":45.50000000000001,
    "rate":2.3897058823529416,
    "population":19040
  },
  {
    "state":"MS",
    "FIPS":28053,
    "county":"Humphreys County",
    "number":687.75,
    "rate":74.69048653344917,
    "population":9208
  },
  {
    "state":"MS",
    "FIPS":28057,
    "county":"Itawamba County",
    "number":401.0199999999999,
    "rate":17.158872106456716,
    "population":23371
  },
  {
    "state":"MS",
    "FIPS":28059,
    "county":"Jackson County",
    "number":3494.3099999999995,
    "rate":24.964885081696657,
    "population":139969
  },
  {
    "state":"MS",
    "FIPS":28065,
    "county":"Jefferson Davis County",
    "number":154.18,
    "rate":12.755853396210806,
    "population":12087
  },
  {
    "state":"MS",
    "FIPS":28067,
    "county":"Jones County",
    "number":608,
    "rate":8.890838634203407,
    "population":68385
  },
  {
    "state":"MS",
    "FIPS":28071,
    "county":"Lafayette County",
    "number":37302.990000000005,
    "rate":739.9038003808316,
    "population":50416
  },
  {
    "state":"MS",
    "FIPS":28073,
    "county":"Lamar County",
    "number":4573.34,
    "rate":79.03601548458455,
    "population":57864
  },
  {
    "state":"MS",
    "FIPS":28075,
    "county":"Lauderdale County",
    "number":5042.560000000002,
    "rate":62.81919996013507,
    "population":80271
  },
  {
    "state":"MS",
    "FIPS":28077,
    "county":"Lawrence County",
    "number":14.16,
    "rate":1.1237203396555828,
    "population":12601
  },
  {
    "state":"MS",
    "FIPS":28079,
    "county":"Leake County",
    "number":523.42,
    "rate":22.50978368382574,
    "population":23253
  },
  {
    "state":"MS",
    "FIPS":28081,
    "county":"Lee County",
    "number":10770.179999999995,
    "rate":126.53680314868114,
    "population":85115
  },
  {
    "state":"MS",
    "FIPS":28083,
    "county":"Leflore County",
    "number":846.3099999999997,
    "rate":26.810809098397,
    "population":31566
  },
  {
    "state":"MS",
    "FIPS":28085,
    "county":"Lincoln County",
    "number":1040.28,
    "rate":29.851071766765187,
    "population":34849
  },
  {
    "state":"MS",
    "FIPS":28087,
    "county":"Lowndes County",
    "number":1553.3600000000001,
    "rate":26.04517026877484,
    "population":59641
  },
  {
    "state":"MS",
    "FIPS":28089,
    "county":"Madison County",
    "number":2536.8199999999997,
    "rate":25.7600097482712,
    "population":98479
  },
  {
    "state":"MS",
    "FIPS":28091,
    "county":"Marion County",
    "number":1166.5,
    "rate":44.18895370861429,
    "population":26398
  },
  {
    "state":"MS",
    "FIPS":28093,
    "county":"Marshall County",
    "number":203.67000000000002,
    "rate":5.566731352666247,
    "population":36587
  },
  {
    "state":"MS",
    "FIPS":28095,
    "county":"Monroe County",
    "number":1273.65,
    "rate":35.01154543955138,
    "population":36378
  },
  {
    "state":"MS",
    "FIPS":28097,
    "county":"Montgomery County",
    "number":45.19,
    "rate":4.280572132234536,
    "population":10557
  },
  {
    "state":"MS",
    "FIPS":28099,
    "county":"Neshoba County",
    "number":1438.4899999999998,
    "rate":48.468277233060405,
    "population":29679
  },
  {
    "state":"MS",
    "FIPS":28101,
    "county":"Newton County",
    "number":170.31,
    "rate":7.875606936416185,
    "population":21625
  },
  {
    "state":"MS",
    "FIPS":28103,
    "county":"Noxubee County",
    "number":60.129999999999995,
    "rate":5.380760626398209,
    "population":11175
  },
  {
    "state":"MS",
    "FIPS":28105,
    "county":"Oktibbeha County",
    "number":2405.7,
    "rate":49.14004412125173,
    "population":48956
  },
  {
    "state":"MS",
    "FIPS":28107,
    "county":"Panola County",
    "number":146.32,
    "rate":4.245589600742804,
    "population":34464
  },
  {
    "state":"MS",
    "FIPS":28109,
    "county":"Pearl River County",
    "number":719.07,
    "rate":13.052641132691958,
    "population":55090
  },
  {
    "state":"MS",
    "FIPS":28113,
    "county":"Pike County",
    "number":757.03,
    "rate":18.87337638054399,
    "population":40111
  },
  {
    "state":"MS",
    "FIPS":28115,
    "county":"Pontotoc County",
    "number":589.09,
    "rate":19.41308288021091,
    "population":30345
  },
  {
    "state":"MS",
    "FIPS":28117,
    "county":"Prentiss County",
    "number":1115.9,
    "rate":44.08929276965627,
    "population":25310
  },
  {
    "state":"MS",
    "FIPS":28121,
    "county":"Rankin County",
    "number":28060.06000000001,
    "rate":192.71489794236427,
    "population":145604
  },
  {
    "state":"MS",
    "FIPS":28123,
    "county":"Scott County",
    "number":1342.69,
    "rate":47.53221467006514,
    "population":28248
  },
  {
    "state":"MS",
    "FIPS":28127,
    "county":"Simpson County",
    "number":332.94000000000005,
    "rate":12.18043462354577,
    "population":27334
  },
  {
    "state":"MS",
    "FIPS":28131,
    "county":"Stone County",
    "number":359.0599999999999,
    "rate":19.893622915396968,
    "population":18049
  },
  {
    "state":"MS",
    "FIPS":28133,
    "county":"Sunflower County",
    "number":817.21,
    "rate":28.70122572261441,
    "population":28473
  },
  {
    "state":"MS",
    "FIPS":28135,
    "county":"Tallahatchie County",
    "number":205.35999999999999,
    "rate":13.597298549956962,
    "population":15103
  },
  {
    "state":"MS",
    "FIPS":28137,
    "county":"Tate County",
    "number":300.99,
    "rate":10.558829720058934,
    "population":28506
  },
  {
    "state":"MS",
    "FIPS":28139,
    "county":"Tippah County",
    "number":476.86999999999995,
    "rate":21.710448440701114,
    "population":21965
  },
  {
    "state":"MS",
    "FIPS":28141,
    "county":"Tishomingo County",
    "number":450.61000000000007,
    "rate":23.003216090663134,
    "population":19589
  },
  {
    "state":"MS",
    "FIPS":28145,
    "county":"Union County",
    "number":1865.94,
    "rate":68.21950862825388,
    "population":27352
  },
  {
    "state":"MS",
    "FIPS":28147,
    "county":"Walthall County",
    "number":77.42,
    "rate":5.131230116648993,
    "population":15088
  },
  {
    "state":"MS",
    "FIPS":28149,
    "county":"Warren County",
    "number":1606.2399999999998,
    "rate":33.37988362427265,
    "population":48120
  },
  {
    "state":"MS",
    "FIPS":28151,
    "county":"Washington County",
    "number":290.1,
    "rate":5.796087990249945,
    "population":50051
  },
  {
    "state":"MS",
    "FIPS":28153,
    "county":"Wayne County",
    "number":214.11,
    "rate":10.37606009207657,
    "population":20635
  },
  {
    "state":"MS",
    "FIPS":28155,
    "county":"Webster County",
    "number":269.28,
    "rate":26.791364043378763,
    "population":10051
  },
  {
    "state":"MS",
    "FIPS":28157,
    "county":"Wilkinson County",
    "number":226.95000000000002,
    "rate":24.01333192254788,
    "population":9451
  },
  {
    "state":"MS",
    "FIPS":28159,
    "county":"Winston County",
    "number":564.8900000000001,
    "rate":29.754543060310777,
    "population":18985
  },
  {
    "state":"MS",
    "FIPS":28161,
    "county":"Yalobusha County",
    "number":147.49999999999997,
    "rate":11.921118564616503,
    "population":12373
  },
  {
    "state":"MS",
    "FIPS":28163,
    "county":"Yazoo County",
    "number":151.38,
    "rate":5.352521038116116,
    "population":28282
  },
  {
    "state":"MT",
    "FIPS":30001,
    "county":"Beaverhead County",
    "number":102.19999999999999,
    "rate":10.9234715690466,
    "population":9356
  },
  {
    "state":"MT",
    "FIPS":30007,
    "county":"Broadwater County",
    "number":10.04,
    "rate":1.7424505380076363,
    "population":5762
  },
  {
    "state":"MT",
    "FIPS":30013,
    "county":"Cascade County",
    "number":2667.3700000000003,
    "rate":32.6223934446279,
    "population":81765
  },
  {
    "state":"MT",
    "FIPS":30017,
    "county":"Custer County",
    "number":203.32999999999998,
    "rate":17.165892781764455,
    "population":11845
  },
  {
    "state":"MT",
    "FIPS":30021,
    "county":"Dawson County",
    "number":27.619999999999997,
    "rate":2.9895010282498102,
    "population":9239
  },
  {
    "state":"MT",
    "FIPS":30023,
    "county":"Deer Lodge County",
    "number":13.42,
    "rate":1.455215788332249,
    "population":9222
  },
  {
    "state":"MT",
    "FIPS":30025,
    "county":"Fallon County",
    "number":60.16000000000001,
    "rate":19.84823490597163,
    "population":3031
  },
  {
    "state":"MT",
    "FIPS":30027,
    "county":"Fergus County",
    "number":428.83,
    "rate":37.488416819652066,
    "population":11439
  },
  {
    "state":"MT",
    "FIPS":30029,
    "county":"Flathead County",
    "number":1674.6200000000001,
    "rate":18.263534441390746,
    "population":91692
  },
  {
    "state":"MT",
    "FIPS":30031,
    "county":"Gallatin County",
    "number":553.05,
    "rate":5.972204224439548,
    "population":92604
  },
  {
    "state":"MT",
    "FIPS":30041,
    "county":"Hill County",
    "number":10.19,
    "rate":0.620320204541304,
    "population":16427
  },
  {
    "state":"MT",
    "FIPS":30043,
    "county":"Jefferson County",
    "number":118.91000000000001,
    "rate":10.430701754385966,
    "population":11400
  },
  {
    "state":"MT",
    "FIPS":30047,
    "county":"Lake County",
    "number":560.82,
    "rate":19.33928756164006,
    "population":28999
  },
  {
    "state":"MT",
    "FIPS":30049,
    "county":"Lewis and Clark County",
    "number":293.1700000000001,
    "rate":4.521088750096385,
    "population":64845
  },
  {
    "state":"MT",
    "FIPS":30053,
    "county":"Lincoln County",
    "number":215.37,
    "rate":11.06220144845652,
    "population":19469
  },
  {
    "state":"MT",
    "FIPS":30063,
    "county":"Missoula County",
    "number":6107.170000000001,
    "rate":54.99279629729682,
    "population":111054
  },
  {
    "state":"MT",
    "FIPS":30065,
    "county":"Musselshell County",
    "number":122.48000000000002,
    "rate":26.198930481283426,
    "population":4675
  },
  {
    "state":"MT",
    "FIPS":30073,
    "county":"Pondera County",
    "number":49.59,
    "rate":8.007427740997901,
    "population":6193
  },
  {
    "state":"MT",
    "FIPS":30077,
    "county":"Powell County",
    "number":142.12,
    "rate":20.059280169371913,
    "population":7085
  },
  {
    "state":"MT",
    "FIPS":30081,
    "county":"Ravalli County",
    "number":696.6900000000002,
    "rate":17.1442281664493,
    "population":40637
  },
  {
    "state":"MT",
    "FIPS":30083,
    "county":"Richland County",
    "number":24.94,
    "rate":2.310542894200482,
    "population":10794
  },
  {
    "state":"MT",
    "FIPS":30087,
    "county":"Rosebud County",
    "number":76.86,
    "rate":8.19228309528885,
    "population":9382
  },
  {
    "state":"MT",
    "FIPS":30089,
    "county":"Sanders County",
    "number":18.03,
    "rate":1.583940964596328,
    "population":11383
  },
  {
    "state":"MT",
    "FIPS":30091,
    "county":"Sheridan County",
    "number":32.13,
    "rate":8.974860335195531,
    "population":3580
  },
  {
    "state":"MT",
    "FIPS":30093,
    "county":"Silver Bow County",
    "number":7260.359999999999,
    "rate":210.48792508624933,
    "population":34493
  },
  {
    "state":"MT",
    "FIPS":30101,
    "county":"Toole County",
    "number":64.92,
    "rate":12.410628942840757,
    "population":5231
  },
  {
    "state":"MT",
    "FIPS":30105,
    "county":"Valley County",
    "number":76.5,
    "rate":10.208166533226581,
    "population":7494
  },
  {
    "state":"MT",
    "FIPS":30111,
    "county":"Yellowstone County",
    "number":35529.53,
    "rate":233.9192694617086,
    "population":151888
  },
  {
    "state":"NC",
    "FIPS":37001,
    "county":"Alamance County",
    "number":3272.3899999999985,
    "rate":21.29464053308344,
    "population":153672
  },
  {
    "state":"NC",
    "FIPS":37003,
    "county":"Alexander County",
    "number":229.80999999999997,
    "rate":6.209067329514752,
    "population":37012
  },
  {
    "state":"NC",
    "FIPS":37005,
    "county":"Alleghany County",
    "number":53.239999999999995,
    "rate":4.873226544622425,
    "population":10925
  },
  {
    "state":"NC",
    "FIPS":37007,
    "county":"Anson County",
    "number":215.59000000000003,
    "rate":8.181473188873289,
    "population":26351
  },
  {
    "state":"NC",
    "FIPS":37009,
    "county":"Ashe County",
    "number":805.22,
    "rate":29.658195211786374,
    "population":27150
  },
  {
    "state":"NC",
    "FIPS":37011,
    "county":"Avery County",
    "number":329.03999999999996,
    "rate":18.636157680108745,
    "population":17656
  },
  {
    "state":"NC",
    "FIPS":37013,
    "county":"Beaufort County",
    "number":766.44,
    "rate":16.13863679433998,
    "population":47491
  },
  {
    "state":"NC",
    "FIPS":37015,
    "county":"Bertie County",
    "number":483.89,
    "rate":23.488665598757343,
    "population":20601
  },
  {
    "state":"NC",
    "FIPS":37017,
    "county":"Bladen County",
    "number":301.34,
    "rate":8.632899788002062,
    "population":34906
  },
  {
    "state":"NC",
    "FIPS":37019,
    "county":"Brunswick County",
    "number":2255.2899999999995,
    "rate":20.111737323654776,
    "population":112138
  },
  {
    "state":"NC",
    "FIPS":37021,
    "county":"Buncombe County",
    "number":209933.59000000003,
    "rate":859.1054701407334,
    "population":244363
  },
  {
    "state":"NC",
    "FIPS":37023,
    "county":"Burke County",
    "number":2414.21,
    "rate":26.754696071369203,
    "population":90235
  },
  {
    "state":"NC",
    "FIPS":37025,
    "county":"Cabarrus County",
    "number":73397.1899999999,
    "rate":397.84478039102976,
    "population":184487
  },
  {
    "state":"NC",
    "FIPS":37027,
    "county":"Caldwell County",
    "number":2533.949999999999,
    "rate":30.922192663461292,
    "population":81946
  },
  {
    "state":"NC",
    "FIPS":37031,
    "county":"Carteret County",
    "number":41198.97,
    "rate":607.8426946399328,
    "population":67779
  },
  {
    "state":"NC",
    "FIPS":37033,
    "county":"Caswell County",
    "number":40.62,
    "rate":1.7521459690290297,
    "population":23183
  },
  {
    "state":"NC",
    "FIPS":37035,
    "county":"Catawba County",
    "number":17708.37,
    "rate":114.60392963926532,
    "population":154518
  },
  {
    "state":"NC",
    "FIPS":37037,
    "county":"Chatham County",
    "number":1349.65,
    "rate":20.507969792283962,
    "population":65811
  },
  {
    "state":"NC",
    "FIPS":37039,
    "county":"Cherokee County",
    "number":665.4499999999998,
    "rate":24.67188195165356,
    "population":26972
  },
  {
    "state":"NC",
    "FIPS":37041,
    "county":"Chowan County",
    "number":459.22,
    "rate":31.25008506294658,
    "population":14695
  },
  {
    "state":"NC",
    "FIPS":37045,
    "county":"Cleveland County",
    "number":2376.2,
    "rate":24.367533200020507,
    "population":97515
  },
  {
    "state":"NC",
    "FIPS":37047,
    "county":"Columbus County",
    "number":1806.79,
    "rate":31.36570377057149,
    "population":57604
  },
  {
    "state":"NC",
    "FIPS":37049,
    "county":"Craven County",
    "number":5167.660000000002,
    "rate":49.07139940555889,
    "population":105309
  },
  {
    "state":"NC",
    "FIPS":37051,
    "county":"Cumberland County",
    "number":9631.769999999995,
    "rate":29.810584371972663,
    "population":323099
  },
  {
    "state":"NC",
    "FIPS":37053,
    "county":"Currituck County",
    "number":21.590000000000003,
    "rate":0.8961480989540098,
    "population":24092
  },
  {
    "state":"NC",
    "FIPS":37055,
    "county":"Dare County",
    "number":621.94,
    "rate":18.049219339485752,
    "population":34458
  },
  {
    "state":"NC",
    "FIPS":37057,
    "county":"Davidson County",
    "number":18642.860000000008,
    "rate":113.99432561666121,
    "population":163542
  },
  {
    "state":"NC",
    "FIPS":37059,
    "county":"Davie County",
    "number":124.81,
    "rate":3.017212203258715,
    "population":41366
  },
  {
    "state":"NC",
    "FIPS":37061,
    "county":"Duplin County",
    "number":2339.769999999999,
    "rate":39.21380327484202,
    "population":59667
  },
  {
    "state":"NC",
    "FIPS":37063,
    "county":"Durham County",
    "number":35156.59,
    "rate":124.53274437848023,
    "population":282308
  },
  {
    "state":"NC",
    "FIPS":37065,
    "county":"Edgecombe County",
    "number":402.74,
    "rate":7.228703736942241,
    "population":55714
  },
  {
    "state":"NC",
    "FIPS":37067,
    "county":"Forsyth County",
    "number":11433.629999999997,
    "rate":31.940458198660764,
    "population":357967
  },
  {
    "state":"NC",
    "FIPS":37069,
    "county":"Franklin County",
    "number":730.13,
    "rate":11.85834240145523,
    "population":61571
  },
  {
    "state":"NC",
    "FIPS":37071,
    "county":"Gaston County",
    "number":100141.14,
    "rate":480.97606193925185,
    "population":208204
  },
  {
    "state":"NC",
    "FIPS":37077,
    "county":"Granville County",
    "number":894.69,
    "rate":15.474246774360926,
    "population":57818
  },
  {
    "state":"NC",
    "FIPS":37079,
    "county":"Greene County",
    "number":154.09,
    "rate":7.2034967977186675,
    "population":21391
  },
  {
    "state":"NC",
    "FIPS":37081,
    "county":"Guilford County",
    "number":128971.94999999991,
    "rate":257.4835194671925,
    "population":500894
  },
  {
    "state":"NC",
    "FIPS":37083,
    "county":"Halifax County",
    "number":2207.33,
    "rate":40.9348515475771,
    "population":53923
  },
  {
    "state":"NC",
    "FIPS":37085,
    "county":"Harnett County",
    "number":7467.2999999999965,
    "rate":61.100701234729506,
    "population":122213
  },
  {
    "state":"NC",
    "FIPS":37087,
    "county":"Haywood County",
    "number":1298.3299999999997,
    "rate":22.08720356571739,
    "population":58782
  },
  {
    "state":"NC",
    "FIPS":37089,
    "county":"Henderson County",
    "number":2456.9899999999993,
    "rate":22.72570873606807,
    "population":108115
  },
  {
    "state":"NC",
    "FIPS":37091,
    "county":"Hertford County",
    "number":687.5600000000002,
    "rate":28.14178127046497,
    "population":24432
  },
  {
    "state":"NC",
    "FIPS":37093,
    "county":"Hoke County",
    "number":472.87,
    "rate":9.369885271563597,
    "population":50467
  },
  {
    "state":"NC",
    "FIPS":37097,
    "county":"Iredell County",
    "number":17337.420000000024,
    "rate":106.54494727268273,
    "population":162724
  },
  {
    "state":"NC",
    "FIPS":37099,
    "county":"Jackson County",
    "number":2452.37,
    "rate":60.528433211570736,
    "population":40516
  },
  {
    "state":"NC",
    "FIPS":37101,
    "county":"Johnston County",
    "number":4375.119999999997,
    "rate":25.01598119993366,
    "population":174893
  },
  {
    "state":"NC",
    "FIPS":37103,
    "county":"Jones County",
    "number":236.23000000000002,
    "rate":22.988516932658623,
    "population":10276
  },
  {
    "state":"NC",
    "FIPS":37105,
    "county":"Lee County",
    "number":1082.28,
    "rate":18.230022907963885,
    "population":59368
  },
  {
    "state":"NC",
    "FIPS":37107,
    "county":"Lenoir County",
    "number":2366.4,
    "rate":39.985806255386024,
    "population":59181
  },
  {
    "state":"NC",
    "FIPS":37109,
    "county":"Lincoln County",
    "number":1692.2599999999998,
    "rate":21.42833626682537,
    "population":78973
  },
  {
    "state":"NC",
    "FIPS":37113,
    "county":"Macon County",
    "number":2326.8,
    "rate":68.84838442419222,
    "population":33796
  },
  {
    "state":"NC",
    "FIPS":37115,
    "county":"Madison County",
    "number":160.06,
    "rate":7.66497461928934,
    "population":20882
  },
  {
    "state":"NC",
    "FIPS":37117,
    "county":"Martin County",
    "number":52.489999999999995,
    "rate":2.197521560746881,
    "population":23886
  },
  {
    "state":"NC",
    "FIPS":37111,
    "county":"McDowell County",
    "number":760.22,
    "rate":16.906175639913716,
    "population":44967
  },
  {
    "state":"NC",
    "FIPS":37119,
    "county":"Mecklenburg County",
    "number":50177.33999999994,
    "rate":51.79441338014133,
    "population":968779
  },
  {
    "state":"NC",
    "FIPS":37123,
    "county":"Montgomery County",
    "number":593.3000000000001,
    "rate":21.467597785577308,
    "population":27637
  },
  {
    "state":"NC",
    "FIPS":37125,
    "county":"Moore County",
    "number":48196.32999999997,
    "rate":533.617471213463,
    "population":90320
  },
  {
    "state":"NC",
    "FIPS":37127,
    "county":"Nash County",
    "number":41169.66000000002,
    "rate":431.9099874108269,
    "population":95320
  },
  {
    "state":"NC",
    "FIPS":37129,
    "county":"New Hanover County",
    "number":73766.92,
    "rate":352.725620893781,
    "population":209134
  },
  {
    "state":"NC",
    "FIPS":37131,
    "county":"Northampton County",
    "number":53.1,
    "rate":2.491670968044672,
    "population":21311
  },
  {
    "state":"NC",
    "FIPS":37133,
    "county":"Onslow County",
    "number":1228.4499999999998,
    "rate":6.680425041329504,
    "population":183888
  },
  {
    "state":"NC",
    "FIPS":37135,
    "county":"Orange County",
    "number":61470.16000000001,
    "rate":446.31563661710044,
    "population":137728
  },
  {
    "state":"NC",
    "FIPS":37137,
    "county":"Pamlico County",
    "number":112.59,
    "rate":8.630893062476044,
    "population":13045
  },
  {
    "state":"NC",
    "FIPS":37139,
    "county":"Pasquotank County",
    "number":1921.32,
    "rate":47.40722463482037,
    "population":40528
  },
  {
    "state":"NC",
    "FIPS":37141,
    "county":"Pender County",
    "number":424.60999999999996,
    "rate":7.867956343691515,
    "population":53967
  },
  {
    "state":"NC",
    "FIPS":37143,
    "county":"Perquimans County",
    "number":129.11,
    "rate":9.541087791900681,
    "population":13532
  },
  {
    "state":"NC",
    "FIPS":37145,
    "county":"Person County",
    "number":1638.7700000000002,
    "rate":41.827764874039666,
    "population":39179
  },
  {
    "state":"NC",
    "FIPS":37147,
    "county":"Pitt County",
    "number":136059.2900000001,
    "rate":786.9475114954168,
    "population":172895
  },
  {
    "state":"NC",
    "FIPS":37149,
    "county":"Polk County",
    "number":386.38,
    "rate":19.08237850651916,
    "population":20248
  },
  {
    "state":"NC",
    "FIPS":37151,
    "county":"Randolph County",
    "number":6685.579999999998,
    "rate":46.97370824726331,
    "population":142326
  },
  {
    "state":"NC",
    "FIPS":37153,
    "county":"Richmond County",
    "number":769.47,
    "rate":16.590198572691403,
    "population":46381
  },
  {
    "state":"NC",
    "FIPS":37155,
    "county":"Robeson County",
    "number":2542.06,
    "rate":18.77888422670055,
    "population":135368
  },
  {
    "state":"NC",
    "FIPS":37157,
    "county":"Rockingham County",
    "number":1983.7100000000003,
    "rate":21.411717721218405,
    "population":92646
  },
  {
    "state":"NC",
    "FIPS":37159,
    "county":"Rowan County",
    "number":3521.9999999999986,
    "rate":25.53746873073994,
    "population":137915
  },
  {
    "state":"NC",
    "FIPS":37161,
    "county":"Rutherford County",
    "number":1354.46,
    "rate":20.142765789747635,
    "population":67243
  },
  {
    "state":"NC",
    "FIPS":37163,
    "county":"Sampson County",
    "number":873.3200000000002,
    "rate":13.668049143125442,
    "population":63895
  },
  {
    "state":"NC",
    "FIPS":37165,
    "county":"Scotland County",
    "number":437.41,
    "rate":12.097519152584564,
    "population":36157
  },
  {
    "state":"NC",
    "FIPS":37167,
    "county":"Stanly County",
    "number":1861.34,
    "rate":30.769510521878562,
    "population":60493
  },
  {
    "state":"NC",
    "FIPS":37169,
    "county":"Stokes County",
    "number":247.51999999999998,
    "rate":5.293866027889468,
    "population":46756
  },
  {
    "state":"NC",
    "FIPS":37171,
    "county":"Surry County",
    "number":1465.75,
    "rate":19.923744019138756,
    "population":73568
  },
  {
    "state":"NC",
    "FIPS":37173,
    "county":"Swain County",
    "number":182.98,
    "rate":12.995738636363635,
    "population":14080
  },
  {
    "state":"NC",
    "FIPS":37175,
    "county":"Transylvania County",
    "number":874.1400000000001,
    "rate":26.606805868387415,
    "population":32854
  },
  {
    "state":"NC",
    "FIPS":37179,
    "county":"Union County",
    "number":4140.849999999999,
    "rate":19.87038912055587,
    "population":208393
  },
  {
    "state":"NC",
    "FIPS":37181,
    "county":"Vance County",
    "number":1848.27,
    "rate":41.005235834405646,
    "population":45074
  },
  {
    "state":"NC",
    "FIPS":37183,
    "county":"Wake County",
    "number":253250.80999999976,
    "rate":265.8491346415271,
    "population":952611
  },
  {
    "state":"NC",
    "FIPS":37185,
    "county":"Warren County",
    "number":89.64,
    "rate":4.352724094396426,
    "population":20594
  },
  {
    "state":"NC",
    "FIPS":37187,
    "county":"Washington County",
    "number":222.02999999999997,
    "rate":17.446958981612443,
    "population":12726
  },
  {
    "state":"NC",
    "FIPS":37189,
    "county":"Watauga County",
    "number":1395.52,
    "rate":26.803933620159803,
    "population":52064
  },
  {
    "state":"NC",
    "FIPS":37191,
    "county":"Wayne County",
    "number":24109.43,
    "rate":193.64381867249244,
    "population":124504
  },
  {
    "state":"NC",
    "FIPS":37193,
    "county":"Wilkes County",
    "number":910.1800000000003,
    "rate":13.15098974136686,
    "population":69210
  },
  {
    "state":"NC",
    "FIPS":37195,
    "county":"Wilson County",
    "number":2740.1599999999994,
    "rate":33.511398101946966,
    "population":81768
  },
  {
    "state":"NC",
    "FIPS":37197,
    "county":"Yadkin County",
    "number":650.6,
    "rate":17.095858734496534,
    "population":38056
  },
  {
    "state":"NC",
    "FIPS":37199,
    "county":"Yancey County",
    "number":157.7,
    "rate":8.943458288436455,
    "population":17633
  },
  {
    "state":"ND",
    "FIPS":38001,
    "county":"Adams County",
    "number":40.61,
    "rate":17.64118158123371,
    "population":2302
  },
  {
    "state":"ND",
    "FIPS":38003,
    "county":"Barnes County",
    "number":280.27000000000004,
    "rate":25.449014800690097,
    "population":11013
  },
  {
    "state":"ND",
    "FIPS":38011,
    "county":"Bowman County",
    "number":81.24000000000001,
    "rate":25.229813664596275,
    "population":3220
  },
  {
    "state":"ND",
    "FIPS":38015,
    "county":"Burleigh County",
    "number":5634.6299999999965,
    "rate":65.46338573071691,
    "population":86073
  },
  {
    "state":"ND",
    "FIPS":38017,
    "county":"Cass County",
    "number":20791.03,
    "rate":132.56288295640752,
    "population":156839
  },
  {
    "state":"ND",
    "FIPS":38021,
    "county":"Dickey County",
    "number":228.23000000000005,
    "rate":43.51382268827456,
    "population":5245
  },
  {
    "state":"ND",
    "FIPS":38029,
    "county":"Emmons County",
    "number":16.64,
    "rate":4.777490668963537,
    "population":3483
  },
  {
    "state":"ND",
    "FIPS":38035,
    "county":"Grand Forks County",
    "number":51526.22000000001,
    "rate":761.0850652132171,
    "population":67701
  },
  {
    "state":"ND",
    "FIPS":38051,
    "county":"McIntosh County",
    "number":10.27,
    "rate":3.702235039653929,
    "population":2774
  },
  {
    "state":"ND",
    "FIPS":38055,
    "county":"McLean County",
    "number":135.19,
    "rate":14.426421940027744,
    "population":9371
  },
  {
    "state":"ND",
    "FIPS":38057,
    "county":"Mercer County",
    "number":76.27000000000001,
    "rate":8.987744520386519,
    "population":8486
  },
  {
    "state":"ND",
    "FIPS":38059,
    "county":"Morton County",
    "number":744.8600000000001,
    "rate":26.559458013906227,
    "population":28045
  },
  {
    "state":"ND",
    "FIPS":38061,
    "county":"Mountrail County",
    "number":40,
    "rate":4.571428571428571,
    "population":8750
  },
  {
    "state":"ND",
    "FIPS":38071,
    "county":"Ramsey County",
    "number":81.64,
    "rate":7.065339679792298,
    "population":11555
  },
  {
    "state":"ND",
    "FIPS":38073,
    "county":"Ransom County",
    "number":35.67,
    "rate":6.5162586773839974,
    "population":5474
  },
  {
    "state":"ND",
    "FIPS":38077,
    "county":"Richland County",
    "number":292.83,
    "rate":18.064774830351634,
    "population":16210
  },
  {
    "state":"ND",
    "FIPS":38089,
    "county":"Stark County",
    "number":718.5299999999999,
    "rate":26.690316110099918,
    "population":26921
  },
  {
    "state":"ND",
    "FIPS":38093,
    "county":"Stutsman County",
    "number":189.75,
    "rate":9.053821929573433,
    "population":20958
  },
  {
    "state":"ND",
    "FIPS":38097,
    "county":"Traill County",
    "number":159.88,
    "rate":19.80428589124241,
    "population":8073
  },
  {
    "state":"ND",
    "FIPS":38099,
    "county":"Walsh County",
    "number":397.56,
    "rate":35.96526144382124,
    "population":11054
  },
  {
    "state":"ND",
    "FIPS":38101,
    "county":"Ward County",
    "number":903.3600000000001,
    "rate":13.795968234575444,
    "population":65480
  },
  {
    "state":"ND",
    "FIPS":38105,
    "county":"Williams County",
    "number":462,
    "rate":17.312448474855728,
    "population":26686
  },
  {
    "state":"NE",
    "FIPS":31001,
    "county":"Adams County",
    "number":1118.8499999999997,
    "rate":35.65033137904664,
    "population":31384
  },
  {
    "state":"NE",
    "FIPS":31003,
    "county":"Antelope County",
    "number":147.01,
    "rate":22.54754601226994,
    "population":6520
  },
  {
    "state":"NE",
    "FIPS":31011,
    "county":"Boone County",
    "number":84.62,
    "rate":15.650083225448494,
    "population":5407
  },
  {
    "state":"NE",
    "FIPS":31013,
    "county":"Box Butte County",
    "number":22.060000000000002,
    "rate":1.953768488176424,
    "population":11291
  },
  {
    "state":"NE",
    "FIPS":31019,
    "county":"Buffalo County",
    "number":736.1099999999998,
    "rate":15.45021408781798,
    "population":47644
  },
  {
    "state":"NE",
    "FIPS":31021,
    "county":"Burt County",
    "number":11.51,
    "rate":1.7251199040767387,
    "population":6672
  },
  {
    "state":"NE",
    "FIPS":31023,
    "county":"Butler County",
    "number":370.12,
    "rate":44.54983148772268,
    "population":8308
  },
  {
    "state":"NE",
    "FIPS":31025,
    "county":"Cass County",
    "number":120.69,
    "rate":4.797090504392067,
    "population":25159
  },
  {
    "state":"NE",
    "FIPS":31027,
    "county":"Cedar County",
    "number":20.92,
    "rate":2.385404789053592,
    "population":8770
  },
  {
    "state":"NE",
    "FIPS":31029,
    "county":"Chase County",
    "number":95.78,
    "rate":23.74907017108852,
    "population":4033
  },
  {
    "state":"NE",
    "FIPS":31033,
    "county":"Cheyenne County",
    "number":37.57,
    "rate":3.7338501291989665,
    "population":10062
  },
  {
    "state":"NE",
    "FIPS":31037,
    "county":"Colfax County",
    "number":121.57,
    "rate":11.53306137937577,
    "population":10541
  },
  {
    "state":"NE",
    "FIPS":31039,
    "county":"Cuming County",
    "number":74.15,
    "rate":8.157315731573158,
    "population":9090
  },
  {
    "state":"NE",
    "FIPS":31041,
    "county":"Custer County",
    "number":323.78999999999996,
    "rate":30.0139043381535,
    "population":10788
  },
  {
    "state":"NE",
    "FIPS":31043,
    "county":"Dakota County",
    "number":340.99,
    "rate":16.364639823391084,
    "population":20837
  },
  {
    "state":"NE",
    "FIPS":31047,
    "county":"Dawson County",
    "number":379.7,
    "rate":15.7551867219917,
    "population":24100
  },
  {
    "state":"NE",
    "FIPS":31051,
    "county":"Dixon County",
    "number":75.14,
    "rate":12.720501100389368,
    "population":5907
  },
  {
    "state":"NE",
    "FIPS":31053,
    "county":"Dodge County",
    "number":393.76,
    "rate":10.737932915189527,
    "population":36670
  },
  {
    "state":"NE",
    "FIPS":31055,
    "county":"Douglas County",
    "number":64268.690000000024,
    "rate":120.96292364706795,
    "population":531309
  },
  {
    "state":"NE",
    "FIPS":31067,
    "county":"Gage County",
    "number":132.85999999999999,
    "rate":6.112721417069243,
    "population":21735
  },
  {
    "state":"NE",
    "FIPS":31079,
    "county":"Hall County",
    "number":996.65,
    "rate":16.518604458440375,
    "population":60335
  },
  {
    "state":"NE",
    "FIPS":31081,
    "county":"Hamilton County",
    "number":591.74,
    "rate":65.56675900277008,
    "population":9025
  },
  {
    "state":"NE",
    "FIPS":31089,
    "county":"Holt County",
    "number":90.13,
    "rate":8.658852915745989,
    "population":10409
  },
  {
    "state":"NE",
    "FIPS":31093,
    "county":"Howard County",
    "number":504.53999999999996,
    "rate":80.02220459952419,
    "population":6305
  },
  {
    "state":"NE",
    "FIPS":31097,
    "county":"Johnson County",
    "number":65.29,
    "rate":12.643299767622,
    "population":5164
  },
  {
    "state":"NE",
    "FIPS":31099,
    "county":"Kearney County",
    "number":29.46,
    "rate":4.508723599632691,
    "population":6534
  },
  {
    "state":"NE",
    "FIPS":31107,
    "county":"Knox County",
    "number":29.95,
    "rate":3.4910828767921664,
    "population":8579
  },
  {
    "state":"NE",
    "FIPS":31109,
    "county":"Lancaster County",
    "number":14332.74,
    "rate":48.83902558702964,
    "population":293469
  },
  {
    "state":"NE",
    "FIPS":31111,
    "county":"Lincoln County",
    "number":909.2,
    "rate":25.235227178106523,
    "population":36029
  },
  {
    "state":"NE",
    "FIPS":31119,
    "county":"Madison County",
    "number":635.9200000000001,
    "rate":18.1060304082911,
    "population":35122
  },
  {
    "state":"NE",
    "FIPS":31121,
    "county":"Merrick County",
    "number":105.16999999999999,
    "rate":13.488521226112606,
    "population":7797
  },
  {
    "state":"NE",
    "FIPS":31129,
    "county":"Nuckolls County",
    "number":167.67,
    "rate":37.84021665538253,
    "population":4431
  },
  {
    "state":"NE",
    "FIPS":31131,
    "county":"Otoe County",
    "number":547.08,
    "rate":34.836984207845134,
    "population":15704
  },
  {
    "state":"NE",
    "FIPS":31133,
    "county":"Pawnee County",
    "number":311.86999999999995,
    "rate":112.10280373831773,
    "population":2782
  },
  {
    "state":"NE",
    "FIPS":31137,
    "county":"Phelps County",
    "number":417.11,
    "rate":45.25933159722223,
    "population":9216
  },
  {
    "state":"NE",
    "FIPS":31139,
    "county":"Pierce County",
    "number":4671.28,
    "rate":650.5961002785515,
    "population":7180
  },
  {
    "state":"NE",
    "FIPS":31141,
    "county":"Platte County",
    "number":546.73,
    "rate":16.79249339640027,
    "population":32558
  },
  {
    "state":"NE",
    "FIPS":31143,
    "county":"Polk County",
    "number":22.25,
    "rate":4.2124195380537675,
    "population":5282
  },
  {
    "state":"NE",
    "FIPS":31145,
    "county":"Red Willow County",
    "number":368.13,
    "rate":33.42685916643966,
    "population":11013
  },
  {
    "state":"NE",
    "FIPS":31151,
    "county":"Saline County",
    "number":170.65,
    "rate":11.812140928912578,
    "population":14447
  },
  {
    "state":"NE",
    "FIPS":31153,
    "county":"Sarpy County",
    "number":3007.17,
    "rate":18.134927814162175,
    "population":165822
  },
  {
    "state":"NE",
    "FIPS":31155,
    "county":"Saunders County",
    "number":97.48,
    "rate":4.6849617917047155,
    "population":20807
  },
  {
    "state":"NE",
    "FIPS":31157,
    "county":"Scotts Bluff County",
    "number":1162.4299999999998,
    "rate":31.500460679637953,
    "population":36902
  },
  {
    "state":"NE",
    "FIPS":31159,
    "county":"Seward County",
    "number":52.519999999999996,
    "rate":3.0957854406130267,
    "population":16965
  },
  {
    "state":"NE",
    "FIPS":31169,
    "county":"Thayer County",
    "number":11.15,
    "rate":2.1633682576639504,
    "population":5154
  },
  {
    "state":"NE",
    "FIPS":31173,
    "county":"Thurston County",
    "number":316.04,
    "rate":45.65072945254948,
    "population":6923
  },
  {
    "state":"NE",
    "FIPS":31177,
    "county":"Washington County",
    "number":411.14000000000004,
    "rate":20.262185205263417,
    "population":20291
  },
  {
    "state":"NE",
    "FIPS":31185,
    "county":"York County",
    "number":243.50000000000006,
    "rate":17.625769091567143,
    "population":13815
  },
  {
    "state":"NH",
    "FIPS":33001,
    "county":"Belknap County",
    "number":8736.4,
    "rate":144.65675398218366,
    "population":60394
  },
  {
    "state":"NH",
    "FIPS":33003,
    "county":"Carroll County",
    "number":542.0699999999999,
    "rate":11.372018377493863,
    "population":47667
  },
  {
    "state":"NH",
    "FIPS":33005,
    "county":"Cheshire County",
    "number":60.25,
    "rate":0.7849344693712708,
    "population":76758
  },
  {
    "state":"NH",
    "FIPS":33007,
    "county":"Coos County",
    "number":802.05,
    "rate":25.08209025236889,
    "population":31977
  },
  {
    "state":"NH",
    "FIPS":33009,
    "county":"Grafton County",
    "number":10741.85,
    "rate":120.23292516397663,
    "population":89342
  },
  {
    "state":"NH",
    "FIPS":33011,
    "county":"Hillsborough County",
    "number":24465.590000000007,
    "rate":60.76897665176355,
    "population":402600
  },
  {
    "state":"NH",
    "FIPS":33013,
    "county":"Merrimack County",
    "number":1032.86,
    "rate":7.026879928156911,
    "population":146987
  },
  {
    "state":"NH",
    "FIPS":33015,
    "county":"Rockingham County",
    "number":12246.810000000001,
    "rate":41.11861698020085,
    "population":297841
  },
  {
    "state":"NH",
    "FIPS":33017,
    "county":"Strafford County",
    "number":28951.019999999997,
    "rate":232.45802654504865,
    "population":124543
  },
  {
    "state":"NH",
    "FIPS":33019,
    "county":"Sullivan County",
    "number":605.5,
    "rate":14.020098175419097,
    "population":43188
  },
  {
    "state":"NJ",
    "FIPS":34001,
    "county":"Atlantic County",
    "number":46026.45000000001,
    "rate":167.02514098255958,
    "population":275566
  },
  {
    "state":"NJ",
    "FIPS":34003,
    "county":"Bergen County",
    "number":207865.47000000047,
    "rate":225.8327213072014,
    "population":920440
  },
  {
    "state":"NJ",
    "FIPS":34005,
    "county":"Burlington County",
    "number":30086.620000000014,
    "rate":66.68030416194787,
    "population":451207
  },
  {
    "state":"NJ",
    "FIPS":34007,
    "county":"Camden County",
    "number":50903.27000000002,
    "rate":99.20653512738161,
    "population":513104
  },
  {
    "state":"NJ",
    "FIPS":34009,
    "county":"Cape May County",
    "number":8028.66,
    "rate":83.28658270918484,
    "population":96398
  },
  {
    "state":"NJ",
    "FIPS":34011,
    "county":"Cumberland County",
    "number":3942.0399999999986,
    "rate":24.98219197181134,
    "population":157794
  },
  {
    "state":"NJ",
    "FIPS":34013,
    "county":"Essex County",
    "number":163128.46000000005,
    "rate":206.90422043948385,
    "population":788425
  },
  {
    "state":"NJ",
    "FIPS":34015,
    "county":"Gloucester County",
    "number":42829.850000000006,
    "rate":147.85687901101596,
    "population":289671
  },
  {
    "state":"NJ",
    "FIPS":34017,
    "county":"Hudson County",
    "number":79951.98999999998,
    "rate":121.7149429346957,
    "population":656879
  },
  {
    "state":"NJ",
    "FIPS":34019,
    "county":"Hunterdon County",
    "number":216486.0900000003,
    "rate":1710.0952659309778,
    "population":126593
  },
  {
    "state":"NJ",
    "FIPS":34021,
    "county":"Mercer County",
    "number":68055.06999999993,
    "rate":184.4025990565141,
    "population":369057
  },
  {
    "state":"NJ",
    "FIPS":34023,
    "county":"Middlesex County",
    "number":77119.95999999993,
    "rate":93.5414405049687,
    "population":824447
  },
  {
    "state":"NJ",
    "FIPS":34025,
    "county":"Monmouth County",
    "number":115434.0900000001,
    "rate":183.46867966991763,
    "population":629176
  },
  {
    "state":"NJ",
    "FIPS":34027,
    "county":"Morris County",
    "number":58161.93000000003,
    "rate":116.87786106143125,
    "population":497630
  },
  {
    "state":"NJ",
    "FIPS":34029,
    "county":"Ocean County",
    "number":71876.07999999999,
    "rate":123.7729740713507,
    "population":580709
  },
  {
    "state":"NJ",
    "FIPS":34031,
    "county":"Passaic County",
    "number":28547.500000000062,
    "rate":56.52824778768084,
    "population":505013
  },
  {
    "state":"NJ",
    "FIPS":34033,
    "county":"Salem County",
    "number":999.9099999999999,
    "rate":15.227674220272903,
    "population":65664
  },
  {
    "state":"NJ",
    "FIPS":34035,
    "county":"Somerset County",
    "number":16337.159999999998,
    "rate":49.70370347834288,
    "population":328691
  },
  {
    "state":"NJ",
    "FIPS":34037,
    "county":"Sussex County",
    "number":6599.570000000001,
    "rate":44.89961560703473,
    "population":146985
  },
  {
    "state":"NJ",
    "FIPS":34039,
    "county":"Union County",
    "number":43137.62999999994,
    "rate":79.15146944684494,
    "population":545001
  },
  {
    "state":"NJ",
    "FIPS":34041,
    "county":"Warren County",
    "number":4776.789999999999,
    "rate":44.414597861459775,
    "population":107550
  },
  {
    "state":"NM",
    "FIPS":35001,
    "county":"Bernalillo County",
    "number":109604.09000000001,
    "rate":162.86018469676597,
    "population":672995
  },
  {
    "state":"NM",
    "FIPS":35005,
    "county":"Chaves County",
    "number":603.0199999999999,
    "rate":9.160539588017254,
    "population":65828
  },
  {
    "state":"NM",
    "FIPS":35006,
    "county":"Cibola County",
    "number":65.37,
    "rate":2.39292773995168,
    "population":27318
  },
  {
    "state":"NM",
    "FIPS":35009,
    "county":"Curry County",
    "number":575.3799999999999,
    "rate":11.354540790148793,
    "population":50674
  },
  {
    "state":"NM",
    "FIPS":35013,
    "county":"Dona Ana County",
    "number":5093.2100000000055,
    "rate":23.776936435614008,
    "population":214208
  },
  {
    "state":"NM",
    "FIPS":35015,
    "county":"Eddy County",
    "number":22.619999999999997,
    "rate":0.4160382563913923,
    "population":54370
  },
  {
    "state":"NM",
    "FIPS":35025,
    "county":"Lea County",
    "number":393.26,
    "rate":5.932776151826932,
    "population":66286
  },
  {
    "state":"NM",
    "FIPS":35027,
    "county":"Lincoln County",
    "number":91.17999999999999,
    "rate":4.512074425969913,
    "population":20208
  },
  {
    "state":"NM",
    "FIPS":35028,
    "county":"Los Alamos County",
    "number":730.8500000000001,
    "rate":40.240612267371446,
    "population":18162
  },
  {
    "state":"NM",
    "FIPS":35029,
    "county":"Luna County",
    "number":10.83,
    "rate":0.43287101802630007,
    "population":25019
  },
  {
    "state":"NM",
    "FIPS":35031,
    "county":"McKinley County",
    "number":252.41000000000003,
    "rate":3.471175532207493,
    "population":72716
  },
  {
    "state":"NM",
    "FIPS":35035,
    "county":"Otero County",
    "number":564.6899999999999,
    "rate":8.542706725968955,
    "population":66102
  },
  {
    "state":"NM",
    "FIPS":35039,
    "county":"Rio Arriba County",
    "number":158.35000000000002,
    "rate":3.9331843020367616,
    "population":40260
  },
  {
    "state":"NM",
    "FIPS":35045,
    "county":"San Juan County",
    "number":1028.33,
    "rate":8.010859488809428,
    "population":128367
  },
  {
    "state":"NM",
    "FIPS":35047,
    "county":"San Miguel County",
    "number":676.06,
    "rate":23.350257313577174,
    "population":28953
  },
  {
    "state":"NM",
    "FIPS":35043,
    "county":"Sandoval County",
    "number":924.9399999999999,
    "rate":6.835255950753405,
    "population":135319
  },
  {
    "state":"NM",
    "FIPS":35049,
    "county":"Santa Fe County",
    "number":3007.0299999999993,
    "rate":20.5419271100181,
    "population":146385
  },
  {
    "state":"NM",
    "FIPS":35051,
    "county":"Sierra County",
    "number":34.25,
    "rate":2.8798452871436977,
    "population":11893
  },
  {
    "state":"NM",
    "FIPS":35055,
    "county":"Taos County",
    "number":152.79000000000002,
    "rate":4.655818630587806,
    "population":32817
  },
  {
    "state":"NM",
    "FIPS":35057,
    "county":"Torrance County",
    "number":35.66,
    "rate":2.2187655550024887,
    "population":16072
  },
  {
    "state":"NM",
    "FIPS":35059,
    "county":"Union County",
    "number":40.57,
    "rate":9.18081013804028,
    "population":4419
  },
  {
    "state":"NM",
    "FIPS":35061,
    "county":"Valencia County",
    "number":882.6599999999999,
    "rate":11.518465352994909,
    "population":76630
  },
  {
    "state":"NV",
    "FIPS":32510,
    "county":"Carson City",
    "number":1662.21,
    "rate":30.455678112059804,
    "population":54578
  },
  {
    "state":"NV",
    "FIPS":32001,
    "county":"Churchill County",
    "number":405.24,
    "rate":16.664884648599745,
    "population":24317
  },
  {
    "state":"NV",
    "FIPS":32003,
    "county":"Clark County",
    "number":260879.41000000044,
    "rate":130.52807250508616,
    "population":1998646
  },
  {
    "state":"NV",
    "FIPS":32005,
    "county":"Douglas County",
    "number":629.5500000000001,
    "rate":13.397246281202785,
    "population":46991
  },
  {
    "state":"NV",
    "FIPS":32007,
    "county":"Elko County",
    "number":136.3,
    "rate":2.6684678335095344,
    "population":51078
  },
  {
    "state":"NV",
    "FIPS":32017,
    "county":"Lincoln County",
    "number":29.04,
    "rate":5.430067314884068,
    "population":5348
  },
  {
    "state":"NV",
    "FIPS":32023,
    "county":"Nye County",
    "number":346,
    "rate":8.060946345781982,
    "population":42923
  },
  {
    "state":"NV",
    "FIPS":32027,
    "county":"Pershing County",
    "number":112.68,
    "rate":16.656319290465635,
    "population":6765
  },
  {
    "state":"NV",
    "FIPS":32031,
    "county":"Washoe County",
    "number":56565.50000000004,
    "rate":131.82788531902705,
    "population":429086
  },
  {
    "state":"NY",
    "FIPS":36001,
    "county":"Albany County",
    "number":388154.10000000073,
    "rate":1267.7068840508734,
    "population":306186
  },
  {
    "state":"NY",
    "FIPS":36003,
    "county":"Allegany County",
    "number":683.6399999999999,
    "rate":14.157261488123586,
    "population":48289
  },
  {
    "state":"NY",
    "FIPS":36005,
    "county":"Bronx County",
    "number":228291.99000000014,
    "rate":161.42550867082687,
    "population":1414225
  },
  {
    "state":"NY",
    "FIPS":36007,
    "county":"Broome County",
    "number":12741.019999999997,
    "rate":64.13157497357426,
    "population":198670
  },
  {
    "state":"NY",
    "FIPS":36009,
    "county":"Cattaraugus County",
    "number":5320.129999999999,
    "rate":67.05313705225478,
    "population":79342
  },
  {
    "state":"NY",
    "FIPS":36011,
    "county":"Cayuga County",
    "number":66455.04000000001,
    "rate":834.6840498888429,
    "population":79617
  },
  {
    "state":"NY",
    "FIPS":36013,
    "county":"Chautauqua County",
    "number":3089.6499999999983,
    "rate":23.150729068321105,
    "population":133458
  },
  {
    "state":"NY",
    "FIPS":36015,
    "county":"Chemung County",
    "number":1574.6499999999994,
    "rate":17.6468940166534,
    "population":89231
  },
  {
    "state":"NY",
    "FIPS":36017,
    "county":"Chenango County",
    "number":914.14,
    "rate":18.338181307548798,
    "population":49849
  },
  {
    "state":"NY",
    "FIPS":36019,
    "county":"Clinton County",
    "number":40216.859999999986,
    "rate":491.4924351673061,
    "population":81826
  },
  {
    "state":"NY",
    "FIPS":36021,
    "county":"Columbia County",
    "number":1808.1899999999998,
    "rate":28.906065159702013,
    "population":62554
  },
  {
    "state":"NY",
    "FIPS":36023,
    "county":"Cortland County",
    "number":538.55,
    "rate":10.945470804625733,
    "population":49203
  },
  {
    "state":"NY",
    "FIPS":36025,
    "county":"Delaware County",
    "number":475.89,
    "rate":10.08968324640631,
    "population":47166
  },
  {
    "state":"NY",
    "FIPS":36027,
    "county":"Dutchess County",
    "number":46167.79000000005,
    "rate":155.26935494719868,
    "population":297340
  },
  {
    "state":"NY",
    "FIPS":36029,
    "county":"Erie County",
    "number":296238.5199999997,
    "rate":321.92665764693703,
    "population":920205
  },
  {
    "state":"NY",
    "FIPS":36031,
    "county":"Essex County",
    "number":1014.4000000000001,
    "rate":25.966313418317718,
    "population":39066
  },
  {
    "state":"NY",
    "FIPS":36033,
    "county":"Franklin County",
    "number":1639.8799999999997,
    "rate":31.649972014745327,
    "population":51813
  },
  {
    "state":"NY",
    "FIPS":36035,
    "county":"Fulton County",
    "number":1395.8299999999997,
    "rate":25.372730081980617,
    "population":55013
  },
  {
    "state":"NY",
    "FIPS":36037,
    "county":"Genesee County",
    "number":3052.879999999999,
    "rate":50.988408992216975,
    "population":59874
  },
  {
    "state":"NY",
    "FIPS":36039,
    "county":"Greene County",
    "number":863.5799999999999,
    "rate":17.74868464320947,
    "population":48656
  },
  {
    "state":"NY",
    "FIPS":36041,
    "county":"Hamilton County",
    "number":16.51,
    "rate":3.448924169626071,
    "population":4787
  },
  {
    "state":"NY",
    "FIPS":36043,
    "county":"Herkimer County",
    "number":1075.59,
    "rate":16.657219847611966,
    "population":64572
  },
  {
    "state":"NY",
    "FIPS":36045,
    "county":"Jefferson County",
    "number":3777.8699999999994,
    "rate":31.243755995897974,
    "population":120916
  },
  {
    "state":"NY",
    "FIPS":36047,
    "county":"Kings County",
    "number":178763.6100000004,
    "rate":69.4264279589137,
    "population":2574864
  },
  {
    "state":"NY",
    "FIPS":36049,
    "county":"Lewis County",
    "number":482.87000000000006,
    "rate":17.714149455225797,
    "population":27259
  },
  {
    "state":"NY",
    "FIPS":36051,
    "county":"Livingston County",
    "number":1444.87,
    "rate":22.276063026116987,
    "population":64862
  },
  {
    "state":"NY",
    "FIPS":36053,
    "county":"Madison County",
    "number":1348.4499999999998,
    "rate":18.61985639326153,
    "population":72420
  },
  {
    "state":"NY",
    "FIPS":36055,
    "county":"Monroe County",
    "number":245942.82999999978,
    "rate":328.5449423042496,
    "population":748582
  },
  {
    "state":"NY",
    "FIPS":36057,
    "county":"Montgomery County",
    "number":2026.6499999999999,
    "rate":40.621554989877936,
    "population":49891
  },
  {
    "state":"NY",
    "FIPS":36059,
    "county":"Nassau County",
    "number":309178.10000000306,
    "rate":228.8643394183111,
    "population":1350923
  },
  {
    "state":"NY",
    "FIPS":36061,
    "county":"New York County",
    "number":594862.54,
    "rate":366.0246566879851,
    "population":1625198
  },
  {
    "state":"NY",
    "FIPS":36063,
    "county":"Niagara County",
    "number":10534.659999999993,
    "rate":49.02988895197844,
    "population":214862
  },
  {
    "state":"NY",
    "FIPS":36065,
    "county":"Oneida County",
    "number":43457.32999999999,
    "rate":185.7301661245998,
    "population":233981
  },
  {
    "state":"NY",
    "FIPS":36067,
    "county":"Onondaga County",
    "number":58635.010000000024,
    "rate":125.50785347038205,
    "population":467182
  },
  {
    "state":"NY",
    "FIPS":36069,
    "county":"Ontario County",
    "number":3388.32,
    "rate":31.135778872307583,
    "population":108824
  },
  {
    "state":"NY",
    "FIPS":36071,
    "county":"Orange County",
    "number":61725.79000000003,
    "rate":165.07046660391092,
    "population":373936
  },
  {
    "state":"NY",
    "FIPS":36073,
    "county":"Orleans County",
    "number":1064.88,
    "rate":25.045981607357056,
    "population":42517
  },
  {
    "state":"NY",
    "FIPS":36075,
    "county":"Oswego County",
    "number":2251.84,
    "rate":18.510201062028376,
    "population":121654
  },
  {
    "state":"NY",
    "FIPS":36077,
    "county":"Otsego County",
    "number":1344.7700000000002,
    "rate":21.73190045248869,
    "population":61880
  },
  {
    "state":"NY",
    "FIPS":36079,
    "county":"Putnam County",
    "number":3824.2600000000007,
    "rate":38.374223586903085,
    "population":99657
  },
  {
    "state":"NY",
    "FIPS":36081,
    "county":"Queens County",
    "number":308528.29000000155,
    "rate":135.28151101511529,
    "population":2280639
  },
  {
    "state":"NY",
    "FIPS":36083,
    "county":"Rensselaer County",
    "number":14232.959999999995,
    "rate":89.1945955430777,
    "population":159572
  },
  {
    "state":"NY",
    "FIPS":36085,
    "county":"Richmond County",
    "number":93384.54000000023,
    "rate":198.2783448024006,
    "population":470977
  },
  {
    "state":"NY",
    "FIPS":36087,
    "county":"Rockland County",
    "number":128893.09000000011,
    "rate":405.54736096908715,
    "population":317825
  },
  {
    "state":"NY",
    "FIPS":36091,
    "county":"Saratoga County",
    "number":8218.349999999995,
    "rate":36.95085269296307,
    "population":222413
  },
  {
    "state":"NY",
    "FIPS":36093,
    "county":"Schenectady County",
    "number":7041.590000000002,
    "rate":45.414670011802585,
    "population":155051
  },
  {
    "state":"NY",
    "FIPS":36095,
    "county":"Schoharie County",
    "number":135.01999999999998,
    "rate":4.213055416874687,
    "population":32048
  },
  {
    "state":"NY",
    "FIPS":36097,
    "county":"Schuyler County",
    "number":235.31,
    "rate":12.685859075960968,
    "population":18549
  },
  {
    "state":"NY",
    "FIPS":36099,
    "county":"Seneca County",
    "number":1202.77,
    "rate":33.99479946864136,
    "population":35381
  },
  {
    "state":"NY",
    "FIPS":36089,
    "county":"St Lawrence County",
    "number":2366.1200000000003,
    "rate":21.038536090907478,
    "population":112466
  },
  {
    "state":"NY",
    "FIPS":36101,
    "county":"Steuben County",
    "number":2504.84,
    "rate":25.289152734027947,
    "population":99048
  },
  {
    "state":"NY",
    "FIPS":36103,
    "county":"Suffolk County",
    "number":290487.0300000007,
    "rate":193.6035528671272,
    "population":1500422
  },
  {
    "state":"NY",
    "FIPS":36105,
    "county":"Sullivan County",
    "number":2761.8799999999997,
    "rate":35.89141141765539,
    "population":76951
  },
  {
    "state":"NY",
    "FIPS":36107,
    "county":"Tioga County",
    "number":914.94,
    "rate":18.177014006158736,
    "population":50335
  },
  {
    "state":"NY",
    "FIPS":36109,
    "county":"Tompkins County",
    "number":650.8099999999998,
    "rate":6.3158456581654425,
    "population":103044
  },
  {
    "state":"NY",
    "FIPS":36111,
    "county":"Ulster County",
    "number":6170.750000000003,
    "rate":33.95970458097609,
    "population":181708
  },
  {
    "state":"NY",
    "FIPS":36113,
    "county":"Warren County",
    "number":1935.11,
    "rate":29.57527128228641,
    "population":65430
  },
  {
    "state":"NY",
    "FIPS":36115,
    "county":"Washington County",
    "number":888.64,
    "rate":14.095105161310789,
    "population":63046
  },
  {
    "state":"NY",
    "FIPS":36117,
    "county":"Wayne County",
    "number":2069.6,
    "rate":22.251610059241578,
    "population":93009
  },
  {
    "state":"NY",
    "FIPS":36119,
    "county":"Westchester County",
    "number":114220.18000000011,
    "rate":118.75063549476072,
    "population":961849
  },
  {
    "state":"NY",
    "FIPS":36121,
    "county":"Wyoming County",
    "number":2387.4100000000003,
    "rate":57.16704180834252,
    "population":41762
  },
  {
    "state":"NY",
    "FIPS":36123,
    "county":"Yates County",
    "number":1114.19,
    "rate":44.100138531565406,
    "population":25265
  },
  {
    "state":"OH",
    "FIPS":39001,
    "county":"Adams County",
    "number":536.9699999999999,
    "rate":18.930057110625395,
    "population":28366
  },
  {
    "state":"OH",
    "FIPS":39003,
    "county":"Allen County",
    "number":8724.899999999998,
    "rate":82.87092882991554,
    "population":105283
  },
  {
    "state":"OH",
    "FIPS":39005,
    "county":"Ashland County",
    "number":548.43,
    "rate":10.301089406461307,
    "population":53240
  },
  {
    "state":"OH",
    "FIPS":39007,
    "county":"Ashtabula County",
    "number":3359.2999999999997,
    "rate":33.50454799329769,
    "population":100264
  },
  {
    "state":"OH",
    "FIPS":39009,
    "county":"Athens County",
    "number":14787.82,
    "rate":228.77904638138554,
    "population":64638
  },
  {
    "state":"OH",
    "FIPS":39011,
    "county":"Auglaize County",
    "number":1678.45,
    "rate":36.59464527100685,
    "population":45866
  },
  {
    "state":"OH",
    "FIPS":39013,
    "county":"Belmont County",
    "number":5098.690000000002,
    "rate":73.23178788923363,
    "population":69624
  },
  {
    "state":"OH",
    "FIPS":39015,
    "county":"Brown County",
    "number":189.55999999999997,
    "rate":4.268984776146292,
    "population":44404
  },
  {
    "state":"OH",
    "FIPS":39017,
    "county":"Butler County",
    "number":43796.26999999999,
    "rate":118.10240728306269,
    "population":370833
  },
  {
    "state":"OH",
    "FIPS":39019,
    "county":"Carroll County",
    "number":263.01,
    "rate":9.209033613445378,
    "population":28560
  },
  {
    "state":"OH",
    "FIPS":39021,
    "county":"Champaign County",
    "number":332.1099999999999,
    "rate":8.389582175516594,
    "population":39586
  },
  {
    "state":"OH",
    "FIPS":39023,
    "county":"Clark County",
    "number":6109.429999999995,
    "rate":44.53132061168852,
    "population":137194
  },
  {
    "state":"OH",
    "FIPS":39025,
    "county":"Clermont County",
    "number":5833.119999999997,
    "rate":29.279938158508966,
    "population":199219
  },
  {
    "state":"OH",
    "FIPS":39027,
    "county":"Clinton County",
    "number":13305.209999999995,
    "rate":318.07056967320875,
    "population":41831
  },
  {
    "state":"OH",
    "FIPS":39029,
    "county":"Columbiana County",
    "number":3192.46,
    "rate":29.99361130423345,
    "population":106438
  },
  {
    "state":"OH",
    "FIPS":39031,
    "county":"Coshocton County",
    "number":610.2,
    "rate":16.578818670868884,
    "population":36806
  },
  {
    "state":"OH",
    "FIPS":39033,
    "county":"Crawford County",
    "number":1553.6499999999996,
    "rate":36.26041496487501,
    "population":42847
  },
  {
    "state":"OH",
    "FIPS":39035,
    "county":"Cuyahoga County",
    "number":394820.9600000004,
    "rate":311.89224331675246,
    "population":1265889
  },
  {
    "state":"OH",
    "FIPS":39037,
    "county":"Darke County",
    "number":798.5300000000001,
    "rate":15.208357140136368,
    "population":52506
  },
  {
    "state":"OH",
    "FIPS":39039,
    "county":"Defiance County",
    "number":6094.090000000003,
    "rate":156.99134422175288,
    "population":38818
  },
  {
    "state":"OH",
    "FIPS":39043,
    "county":"Erie County",
    "number":1993.9300000000007,
    "rate":26.08422071636013,
    "population":76442
  },
  {
    "state":"OH",
    "FIPS":39045,
    "county":"Fairfield County",
    "number":5018.020000000005,
    "rate":34.03293409112492,
    "population":147446
  },
  {
    "state":"OH",
    "FIPS":39047,
    "county":"Fayette County",
    "number":271.96000000000004,
    "rate":9.426689774696708,
    "population":28850
  },
  {
    "state":"OH",
    "FIPS":39049,
    "county":"Franklin County",
    "number":450913.55999999936,
    "rate":376.72319990375377,
    "population":1196936
  },
  {
    "state":"OH",
    "FIPS":39051,
    "county":"Fulton County",
    "number":577.35,
    "rate":13.579593564775616,
    "population":42516
  },
  {
    "state":"OH",
    "FIPS":39053,
    "county":"Gallia County",
    "number":3766.9000000000005,
    "rate":122.28209706216525,
    "population":30805
  },
  {
    "state":"OH",
    "FIPS":39055,
    "county":"Geauga County",
    "number":1460.87,
    "rate":15.55490486280439,
    "population":93917
  },
  {
    "state":"OH",
    "FIPS":39057,
    "county":"Greene County",
    "number":6837.089999999999,
    "rate":41.65274604770172,
    "population":164145
  },
  {
    "state":"OH",
    "FIPS":39059,
    "county":"Guernsey County",
    "number":273.34,
    "rate":6.865596664406097,
    "population":39813
  },
  {
    "state":"OH",
    "FIPS":39061,
    "county":"Hamilton County",
    "number":191418.7799999996,
    "rate":238.57118108567852,
    "population":802355
  },
  {
    "state":"OH",
    "FIPS":39063,
    "county":"Hancock County",
    "number":2639.9900000000002,
    "rate":34.89880629767208,
    "population":75647
  },
  {
    "state":"OH",
    "FIPS":39065,
    "county":"Hardin County",
    "number":1087.4400000000003,
    "rate":34.36589451063427,
    "population":31643
  },
  {
    "state":"OH",
    "FIPS":39067,
    "county":"Harrison County",
    "number":228.79999999999998,
    "rate":14.57881993118389,
    "population":15694
  },
  {
    "state":"OH",
    "FIPS":39069,
    "county":"Henry County",
    "number":274.33,
    "rate":9.776550249465432,
    "population":28060
  },
  {
    "state":"OH",
    "FIPS":39071,
    "county":"Highland County",
    "number":151.61,
    "rate":3.5238471550762367,
    "population":43024
  },
  {
    "state":"OH",
    "FIPS":39073,
    "county":"Hocking County",
    "number":934.29,
    "rate":31.896828377317263,
    "population":29291
  },
  {
    "state":"OH",
    "FIPS":39075,
    "county":"Holmes County",
    "number":10.34,
    "rate":0.23987936434288368,
    "population":43105
  },
  {
    "state":"OH",
    "FIPS":39077,
    "county":"Huron County",
    "number":1599.9400000000003,
    "rate":26.982713550889624,
    "population":59295
  },
  {
    "state":"OH",
    "FIPS":39079,
    "county":"Jackson County",
    "number":964.26,
    "rate":29.332887171843154,
    "population":32873
  },
  {
    "state":"OH",
    "FIPS":39081,
    "county":"Jefferson County",
    "number":8518.580000000005,
    "rate":124.63721889768397,
    "population":68347
  },
  {
    "state":"OH",
    "FIPS":39083,
    "county":"Knox County",
    "number":649.8799999999999,
    "rate":10.685827975730469,
    "population":60817
  },
  {
    "state":"OH",
    "FIPS":39085,
    "county":"Lake County",
    "number":107023.58999999992,
    "rate":466.6082009024913,
    "population":229365
  },
  {
    "state":"OH",
    "FIPS":39087,
    "county":"Lawrence County",
    "number":3456.58,
    "rate":55.65434404585561,
    "population":62108
  },
  {
    "state":"OH",
    "FIPS":39089,
    "county":"Licking County",
    "number":4338.699999999999,
    "rate":25.868863992749773,
    "population":167719
  },
  {
    "state":"OH",
    "FIPS":39091,
    "county":"Logan County",
    "number":483.19999999999993,
    "rate":10.630527566330795,
    "population":45454
  },
  {
    "state":"OH",
    "FIPS":39093,
    "county":"Lorain County",
    "number":13745.79999999998,
    "rate":45.56190855002562,
    "population":301695
  },
  {
    "state":"OH",
    "FIPS":39095,
    "county":"Lucas County",
    "number":74704.83,
    "rate":170.80230739683935,
    "population":437376
  },
  {
    "state":"OH",
    "FIPS":39097,
    "county":"Madison County",
    "number":1374.7999999999997,
    "rate":32.00260713703763,
    "population":42959
  },
  {
    "state":"OH",
    "FIPS":39099,
    "county":"Mahoning County",
    "number":28835.019999999997,
    "rate":122.2926624453426,
    "population":235787
  },
  {
    "state":"OH",
    "FIPS":39101,
    "county":"Marion County",
    "number":3653.6099999999983,
    "rate":55.161319544047686,
    "population":66235
  },
  {
    "state":"OH",
    "FIPS":39103,
    "county":"Medina County",
    "number":3117.479999999998,
    "rate":17.947082393036418,
    "population":173704
  },
  {
    "state":"OH",
    "FIPS":39105,
    "county":"Meigs County",
    "number":521.0399999999998,
    "rate":22.07796610169491,
    "population":23600
  },
  {
    "state":"OH",
    "FIPS":39107,
    "county":"Mercer County",
    "number":1245.7000000000003,
    "rate":30.511671197981737,
    "population":40827
  },
  {
    "state":"OH",
    "FIPS":39109,
    "county":"Miami County",
    "number":1058.5400000000002,
    "rate":10.2653271009911,
    "population":103118
  },
  {
    "state":"OH",
    "FIPS":39111,
    "county":"Monroe County",
    "number":302.18999999999994,
    "rate":20.72775910556279,
    "population":14579
  },
  {
    "state":"OH",
    "FIPS":39113,
    "county":"Montgomery County",
    "number":158068.21999999988,
    "rate":295.4706329875823,
    "population":534971
  },
  {
    "state":"OH",
    "FIPS":39115,
    "county":"Morgan County",
    "number":180.33999999999997,
    "rate":12.06691201070592,
    "population":14945
  },
  {
    "state":"OH",
    "FIPS":39117,
    "county":"Morrow County",
    "number":315.3399999999999,
    "rate":9.00894209067794,
    "population":35003
  },
  {
    "state":"OH",
    "FIPS":39119,
    "county":"Muskingum County",
    "number":19553.57,
    "rate":227.7961974882919,
    "population":85838
  },
  {
    "state":"OH",
    "FIPS":39121,
    "county":"Noble County",
    "number":33.72,
    "rate":2.3132331755505247,
    "population":14577
  },
  {
    "state":"OH",
    "FIPS":39123,
    "county":"Ottawa County",
    "number":1540.4000000000003,
    "rate":37.24281327820895,
    "population":41361
  },
  {
    "state":"OH",
    "FIPS":39125,
    "county":"Paulding County",
    "number":99,
    "rate":5.132991133924405,
    "population":19287
  },
  {
    "state":"OH",
    "FIPS":39127,
    "county":"Perry County",
    "number":1665.1799999999998,
    "rate":46.25885490457538,
    "population":35997
  },
  {
    "state":"OH",
    "FIPS":39129,
    "county":"Pickaway County",
    "number":608.84,
    "rate":10.805381038583041,
    "population":56346
  },
  {
    "state":"OH",
    "FIPS":39131,
    "county":"Pike County",
    "number":421.31999999999994,
    "rate":14.782639205641905,
    "population":28501
  },
  {
    "state":"OH",
    "FIPS":39133,
    "county":"Portage County",
    "number":3991.869999999996,
    "rate":24.742586899390066,
    "population":161336
  },
  {
    "state":"OH",
    "FIPS":39135,
    "county":"Preble County",
    "number":517.9,
    "rate":12.361857023511158,
    "population":41895
  },
  {
    "state":"OH",
    "FIPS":39137,
    "county":"Putnam County",
    "number":1483.2200000000003,
    "rate":43.39311313302713,
    "population":34181
  },
  {
    "state":"OH",
    "FIPS":39139,
    "county":"Richland County",
    "number":2947.589999999998,
    "rate":24.044686266192432,
    "population":122588
  },
  {
    "state":"OH",
    "FIPS":39141,
    "county":"Ross County",
    "number":2885.0299999999997,
    "rate":37.23340001290572,
    "population":77485
  },
  {
    "state":"OH",
    "FIPS":39143,
    "county":"Sandusky County",
    "number":1407.4399999999998,
    "rate":23.24042272126816,
    "population":60560
  },
  {
    "state":"OH",
    "FIPS":39145,
    "county":"Scioto County",
    "number":4197.090000000002,
    "rate":53.417120602759276,
    "population":78572
  },
  {
    "state":"OH",
    "FIPS":39147,
    "county":"Seneca County",
    "number":1204.48,
    "rate":21.49897367246765,
    "population":56025
  },
  {
    "state":"OH",
    "FIPS":39149,
    "county":"Shelby County",
    "number":765.1199999999998,
    "rate":15.569573887916643,
    "population":49142
  },
  {
    "state":"OH",
    "FIPS":39151,
    "county":"Stark County",
    "number":28426.190000000075,
    "rate":75.8347205770936,
    "population":374844
  },
  {
    "state":"OH",
    "FIPS":39153,
    "county":"Summit County",
    "number":69428.59999999983,
    "rate":128.36538372649807,
    "population":540867
  },
  {
    "state":"OH",
    "FIPS":39155,
    "county":"Trumbull County",
    "number":6958.909999999994,
    "rate":33.54677760691092,
    "population":207439
  },
  {
    "state":"OH",
    "FIPS":39157,
    "county":"Tuscarawas County",
    "number":2248.9800000000005,
    "rate":24.31645186402561,
    "population":92488
  },
  {
    "state":"OH",
    "FIPS":39159,
    "county":"Union County",
    "number":963.9599999999999,
    "rate":18.251633058790116,
    "population":52815
  },
  {
    "state":"OH",
    "FIPS":39161,
    "county":"Van Wert County",
    "number":472.66999999999996,
    "rate":16.45271328622646,
    "population":28729
  },
  {
    "state":"OH",
    "FIPS":39163,
    "county":"Vinton County",
    "number":57.56999999999999,
    "rate":4.350487417819088,
    "population":13233
  },
  {
    "state":"OH",
    "FIPS":39165,
    "county":"Warren County",
    "number":21510.210000000017,
    "rate":98.82799685738317,
    "population":217653
  },
  {
    "state":"OH",
    "FIPS":39167,
    "county":"Washington County",
    "number":24319.03,
    "rate":395.37995057553485,
    "population":61508
  },
  {
    "state":"OH",
    "FIPS":39169,
    "county":"Wayne County",
    "number":3741.120000000001,
    "rate":32.53430733107228,
    "population":114990
  },
  {
    "state":"OH",
    "FIPS":39171,
    "county":"Williams County",
    "number":1921.8599999999997,
    "rate":51.15683560477001,
    "population":37568
  },
  {
    "state":"OH",
    "FIPS":39173,
    "county":"Wood County",
    "number":3549.8999999999996,
    "rate":27.59154042857476,
    "population":128659
  },
  {
    "state":"OH",
    "FIPS":39175,
    "county":"Wyandot County",
    "number":130.47,
    "rate":5.775053116147309,
    "population":22592
  },
  {
    "state":"OK",
    "FIPS":40013,
    "county":"Bryan County",
    "number":1367.6999999999998,
    "rate":31.468869357139564,
    "population":43462
  },
  {
    "state":"OK",
    "FIPS":40017,
    "county":"Canadian County",
    "number":3410.820000000004,
    "rate":27.8195832143877,
    "population":122605
  },
  {
    "state":"OK",
    "FIPS":40019,
    "county":"Carter County",
    "number":931.4000000000003,
    "rate":19.358190963129243,
    "population":48114
  },
  {
    "state":"OK",
    "FIPS":40021,
    "county":"Cherokee County",
    "number":403.3999999999999,
    "rate":8.3893105958199,
    "population":48085
  },
  {
    "state":"OK",
    "FIPS":40027,
    "county":"Cleveland County",
    "number":16995.820000000003,
    "rate":63.864768790254104,
    "population":266122
  },
  {
    "state":"OK",
    "FIPS":40031,
    "county":"Comanche County",
    "number":23583.509999999995,
    "rate":186.26746491221138,
    "population":126611
  },
  {
    "state":"OK",
    "FIPS":40035,
    "county":"Craig County",
    "number":374.15000000000003,
    "rate":25.41607227769853,
    "population":14721
  },
  {
    "state":"OK",
    "FIPS":40037,
    "county":"Creek County",
    "number":792.3999999999999,
    "rate":11.18356056115392,
    "population":70854
  },
  {
    "state":"OK",
    "FIPS":40039,
    "county":"Custer County",
    "number":316.84000000000003,
    "rate":11.110176029174557,
    "population":28518
  },
  {
    "state":"OK",
    "FIPS":40041,
    "county":"Delaware County",
    "number":540.97,
    "rate":13.075435670606435,
    "population":41373
  },
  {
    "state":"OK",
    "FIPS":40045,
    "county":"Ellis County",
    "number":71.5,
    "rate":17.54601226993865,
    "population":4075
  },
  {
    "state":"OK",
    "FIPS":40047,
    "county":"Garfield County",
    "number":1155.1899999999998,
    "rate":18.839329397566782,
    "population":61318
  },
  {
    "state":"OK",
    "FIPS":40049,
    "county":"Garvin County",
    "number":208.64,
    "rate":7.650898423175651,
    "population":27270
  },
  {
    "state":"OK",
    "FIPS":40051,
    "county":"Grady County",
    "number":549.4599999999999,
    "rate":10.356617785652352,
    "population":53054
  },
  {
    "state":"OK",
    "FIPS":40065,
    "county":"Jackson County",
    "number":119.71000000000001,
    "rate":4.558470736072503,
    "population":26261
  },
  {
    "state":"OK",
    "FIPS":40069,
    "county":"Johnston County",
    "number":20.48,
    "rate":1.8609722853248523,
    "population":11005
  },
  {
    "state":"OK",
    "FIPS":40071,
    "county":"Kay County",
    "number":463.09000000000003,
    "rate":10.142803951201351,
    "population":45657
  },
  {
    "state":"OK",
    "FIPS":40073,
    "county":"Kingfisher County",
    "number":354.44999999999993,
    "rate":23.6363030141371,
    "population":14996
  },
  {
    "state":"OK",
    "FIPS":40077,
    "county":"Latimer County",
    "number":39.11,
    "rate":3.574627547756146,
    "population":10941
  },
  {
    "state":"OK",
    "FIPS":40079,
    "county":"Le Flore County",
    "number":425.1000000000001,
    "rate":8.51306698708321,
    "population":49935
  },
  {
    "state":"OK",
    "FIPS":40083,
    "county":"Logan County",
    "number":369.87,
    "rate":8.470046716130806,
    "population":43668
  },
  {
    "state":"OK",
    "FIPS":40085,
    "county":"Love County",
    "number":96.91,
    "rate":10.133849210498797,
    "population":9563
  },
  {
    "state":"OK",
    "FIPS":40097,
    "county":"Mayes County",
    "number":57.9,
    "rate":1.4083821848167157,
    "population":41111
  },
  {
    "state":"OK",
    "FIPS":40087,
    "county":"McClain County",
    "number":249.37999999999994,
    "rate":7.007615140360241,
    "population":35587
  },
  {
    "state":"OK",
    "FIPS":40089,
    "county":"McCurtain County",
    "number":54.290000000000006,
    "rate":1.633813837310783,
    "population":33229
  },
  {
    "state":"OK",
    "FIPS":40091,
    "county":"McIntosh County",
    "number":157.6,
    "rate":7.679563395380567,
    "population":20522
  },
  {
    "state":"OK",
    "FIPS":40099,
    "county":"Murray County",
    "number":171.95,
    "rate":12.606304985337243,
    "population":13640
  },
  {
    "state":"OK",
    "FIPS":40101,
    "county":"Muskogee County",
    "number":2875.63,
    "rate":40.77288452813067,
    "population":70528
  },
  {
    "state":"OK",
    "FIPS":40103,
    "county":"Noble County",
    "number":25.72,
    "rate":2.2355497609734893,
    "population":11505
  },
  {
    "state":"OK",
    "FIPS":40105,
    "county":"Nowata County",
    "number":91.99,
    "rate":8.693063693063692,
    "population":10582
  },
  {
    "state":"OK",
    "FIPS":40109,
    "county":"Oklahoma County",
    "number":138839.22999999943,
    "rate":186.95487015828695,
    "population":742635
  },
  {
    "state":"OK",
    "FIPS":40111,
    "county":"Okmulgee County",
    "number":101.85999999999999,
    "rate":2.5730669159067365,
    "population":39587
  },
  {
    "state":"OK",
    "FIPS":40113,
    "county":"Osage County",
    "number":176.42,
    "rate":3.674651114351177,
    "population":48010
  },
  {
    "state":"OK",
    "FIPS":40115,
    "county":"Ottawa County",
    "number":188.70999999999998,
    "rate":5.851110008681631,
    "population":32252
  },
  {
    "state":"OK",
    "FIPS":40117,
    "county":"Pawnee County",
    "number":24.689999999999998,
    "rate":1.4979069344172782,
    "population":16483
  },
  {
    "state":"OK",
    "FIPS":40119,
    "county":"Payne County",
    "number":1695.44,
    "rate":21.6037411281999,
    "population":78479
  },
  {
    "state":"OK",
    "FIPS":40121,
    "county":"Pittsburg County",
    "number":929.7099999999999,
    "rate":20.600252597992508,
    "population":45131
  },
  {
    "state":"OK",
    "FIPS":40123,
    "county":"Pontotoc County",
    "number":11832.839999999998,
    "rate":311.3413671525548,
    "population":38006
  },
  {
    "state":"OK",
    "FIPS":40125,
    "county":"Pottawatomie County",
    "number":247.28000000000003,
    "rate":3.4974470673097326,
    "population":70703
  },
  {
    "state":"OK",
    "FIPS":40131,
    "county":"Rogers County",
    "number":1596.21,
    "rate":18.047487138899882,
    "population":88445
  },
  {
    "state":"OK",
    "FIPS":40133,
    "county":"Seminole County",
    "number":436.31,
    "rate":17.13102202677765,
    "population":25469
  },
  {
    "state":"OK",
    "FIPS":40135,
    "county":"Sequoyah County",
    "number":200.35999999999999,
    "rate":4.831910480875898,
    "population":41466
  },
  {
    "state":"OK",
    "FIPS":40137,
    "county":"Stephens County",
    "number":366.92,
    "rate":8.183419943350358,
    "population":44837
  },
  {
    "state":"OK",
    "FIPS":40141,
    "county":"Tillman County",
    "number":25.27,
    "rate":3.2464028776978417,
    "population":7784
  },
  {
    "state":"OK",
    "FIPS":40143,
    "county":"Tulsa County",
    "number":155241.15000000002,
    "rate":252.64647007128212,
    "population":614460
  },
  {
    "state":"OK",
    "FIPS":40145,
    "county":"Wagoner County",
    "number":234.78999999999996,
    "rate":3.13065855967572,
    "population":74997
  },
  {
    "state":"OK",
    "FIPS":40147,
    "county":"Washington County",
    "number":1395.29,
    "rate":26.982982015084122,
    "population":51710
  },
  {
    "state":"OK",
    "FIPS":40153,
    "county":"Woodward County",
    "number":144.28,
    "rate":6.987940136581586,
    "population":20647
  },
  {
    "state":"OR",
    "FIPS":41003,
    "county":"Benton County",
    "number":1785.9899999999998,
    "rate":20.67596665894883,
    "population":86380
  },
  {
    "state":"OR",
    "FIPS":41005,
    "county":"Clackamas County",
    "number":1234.5600000000002,
    "rate":3.2188559211555514,
    "population":383540
  },
  {
    "state":"OR",
    "FIPS":41007,
    "county":"Clatsop County",
    "number":831.5299999999999,
    "rate":22.267359344455446,
    "population":37343
  },
  {
    "state":"OR",
    "FIPS":41009,
    "county":"Columbia County",
    "number":84.52000000000001,
    "rate":1.7176068931880997,
    "population":49208
  },
  {
    "state":"OR",
    "FIPS":41011,
    "county":"Coos County",
    "number":645.1599999999999,
    "rate":10.291274525442653,
    "population":62690
  },
  {
    "state":"OR",
    "FIPS":41013,
    "county":"Crook County",
    "number":49.86,
    "rate":2.4161659236286104,
    "population":20636
  },
  {
    "state":"OR",
    "FIPS":41015,
    "county":"Curry County",
    "number":157.92000000000002,
    "rate":7.097847094251428,
    "population":22249
  },
  {
    "state":"OR",
    "FIPS":41017,
    "county":"Deschutes County",
    "number":50553.93,
    "rate":312.5513459374575,
    "population":161746
  },
  {
    "state":"OR",
    "FIPS":41019,
    "county":"Douglas County",
    "number":1557.9400000000003,
    "rate":14.549037186455243,
    "population":107082
  },
  {
    "state":"OR",
    "FIPS":41025,
    "county":"Harney County",
    "number":64.93,
    "rate":8.983121195351412,
    "population":7228
  },
  {
    "state":"OR",
    "FIPS":41027,
    "county":"Hood River County",
    "number":125.43,
    "rate":5.543132402333392,
    "population":22628
  },
  {
    "state":"OR",
    "FIPS":41029,
    "county":"Jackson County",
    "number":41319.219999999994,
    "rate":200.22591259091985,
    "population":206363
  },
  {
    "state":"OR",
    "FIPS":41031,
    "county":"Jefferson County",
    "number":22.29,
    "rate":1.024403695022749,
    "population":21759
  },
  {
    "state":"OR",
    "FIPS":41033,
    "county":"Josephine County",
    "number":192.40999999999997,
    "rate":2.3242975526080545,
    "population":82782
  },
  {
    "state":"OR",
    "FIPS":41035,
    "county":"Klamath County",
    "number":977.8300000000002,
    "rate":14.806183943551076,
    "population":66042
  },
  {
    "state":"OR",
    "FIPS":41039,
    "county":"Lane County",
    "number":3041.9,
    "rate":8.58127798104835,
    "population":354481
  },
  {
    "state":"OR",
    "FIPS":41041,
    "county":"Lincoln County",
    "number":110655.32999999999,
    "rate":2397.6280551222044,
    "population":46152
  },
  {
    "state":"OR",
    "FIPS":41043,
    "county":"Linn County",
    "number":534.27,
    "rate":4.513940520446097,
    "population":118360
  },
  {
    "state":"OR",
    "FIPS":41045,
    "county":"Malheur County",
    "number":306.05,
    "rate":9.999673266679736,
    "population":30606
  },
  {
    "state":"OR",
    "FIPS":41047,
    "county":"Marion County",
    "number":4637.400000000001,
    "rate":14.488026617929615,
    "population":320085
  },
  {
    "state":"OR",
    "FIPS":41051,
    "county":"Multnomah County",
    "number":266409.23999999993,
    "rate":351.08496514970005,
    "population":758817
  },
  {
    "state":"OR",
    "FIPS":41053,
    "county":"Polk County",
    "number":195.08,
    "rate":2.5582920240249694,
    "population":76254
  },
  {
    "state":"OR",
    "FIPS":41057,
    "county":"Tillamook County",
    "number":112.69,
    "rate":4.449577509279002,
    "population":25326
  },
  {
    "state":"OR",
    "FIPS":41059,
    "county":"Umatilla County",
    "number":625.31,
    "rate":8.129355174206967,
    "population":76920
  },
  {
    "state":"OR",
    "FIPS":41061,
    "county":"Union County",
    "number":170.59,
    "rate":6.607405685955535,
    "population":25818
  },
  {
    "state":"OR",
    "FIPS":41065,
    "county":"Wasco County",
    "number":12.75,
    "rate":0.500844561417292,
    "population":25457
  },
  {
    "state":"OR",
    "FIPS":41067,
    "county":"Washington County",
    "number":21116.99999999999,
    "rate":38.55317424238273,
    "population":547737
  },
  {
    "state":"OR",
    "FIPS":41071,
    "county":"Yamhill County",
    "number":1560.06,
    "rate":15.481239642357423,
    "population":100771
  },
  {
    "state":"PA",
    "FIPS":42001,
    "county":"Adams County",
    "number":11171.470000000003,
    "rate":110.02255313281731,
    "population":101538
  },
  {
    "state":"PA",
    "FIPS":42003,
    "county":"Allegheny County",
    "number":314715.330000001,
    "rate":255.7864746180669,
    "population":1230383
  },
  {
    "state":"PA",
    "FIPS":42005,
    "county":"Armstrong County",
    "number":1286.12,
    "rate":18.813375852081567,
    "population":68362
  },
  {
    "state":"PA",
    "FIPS":42007,
    "county":"Beaver County",
    "number":7669.339999999999,
    "rate":45.05439890967196,
    "population":170224
  },
  {
    "state":"PA",
    "FIPS":42009,
    "county":"Bedford County",
    "number":670.01,
    "rate":13.563230024899289,
    "population":49399
  },
  {
    "state":"PA",
    "FIPS":42011,
    "county":"Berks County",
    "number":23683.369999999988,
    "rate":57.30975288685835,
    "population":413252
  },
  {
    "state":"PA",
    "FIPS":42013,
    "county":"Blair County",
    "number":5090.6900000000005,
    "rate":40.084488854242956,
    "population":126999
  },
  {
    "state":"PA",
    "FIPS":42015,
    "county":"Bradford County",
    "number":40142.07000000001,
    "rate":639.0726441978572,
    "population":62813
  },
  {
    "state":"PA",
    "FIPS":42017,
    "county":"Bucks County",
    "number":44051.57,
    "rate":70.3486806698936,
    "population":626189
  },
  {
    "state":"PA",
    "FIPS":42019,
    "county":"Butler County",
    "number":6267.050000000002,
    "rate":33.85965670569295,
    "population":185089
  },
  {
    "state":"PA",
    "FIPS":42021,
    "county":"Cambria County",
    "number":4323.069999999998,
    "rate":30.54503960263121,
    "population":141531
  },
  {
    "state":"PA",
    "FIPS":42023,
    "county":"Cameron County",
    "number":13.45,
    "rate":2.7215702144880614,
    "population":4942
  },
  {
    "state":"PA",
    "FIPS":42025,
    "county":"Carbon County",
    "number":2354.1500000000005,
    "rate":36.25841329493124,
    "population":64927
  },
  {
    "state":"PA",
    "FIPS":42027,
    "county":"Centre County",
    "number":787.9,
    "rate":5.064210512784255,
    "population":155582
  },
  {
    "state":"PA",
    "FIPS":42029,
    "county":"Chester County",
    "number":58301.84000000004,
    "rate":115.1488889371679,
    "population":506317
  },
  {
    "state":"PA",
    "FIPS":42031,
    "county":"Clarion County",
    "number":2084.43,
    "rate":52.83726235741444,
    "population":39450
  },
  {
    "state":"PA",
    "FIPS":42033,
    "county":"Clearfield County",
    "number":4124.74,
    "rate":50.60844386096217,
    "population":81503
  },
  {
    "state":"PA",
    "FIPS":42035,
    "county":"Clinton County",
    "number":563.2500000000001,
    "rate":14.176944374528068,
    "population":39730
  },
  {
    "state":"PA",
    "FIPS":42037,
    "county":"Columbia County",
    "number":1026.44,
    "rate":15.337397645089952,
    "population":66924
  },
  {
    "state":"PA",
    "FIPS":42039,
    "county":"Crawford County",
    "number":27097.059999999994,
    "rate":309.115446041524,
    "population":87660
  },
  {
    "state":"PA",
    "FIPS":42041,
    "county":"Cumberland County",
    "number":34383.06000000001,
    "rate":143.7430914974206,
    "population":239198
  },
  {
    "state":"PA",
    "FIPS":42043,
    "county":"Dauphin County",
    "number":13864.969999999988,
    "rate":51.37895255635387,
    "population":269857
  },
  {
    "state":"PA",
    "FIPS":42045,
    "county":"Delaware County",
    "number":176564.2299999997,
    "rate":314.7783803635476,
    "population":560916
  },
  {
    "state":"PA",
    "FIPS":42047,
    "county":"Elk County",
    "number":1209.1800000000005,
    "rate":38.23735888435634,
    "population":31623
  },
  {
    "state":"PA",
    "FIPS":42049,
    "county":"Erie County",
    "number":46749.909999999974,
    "rate":166.48769057090243,
    "population":280801
  },
  {
    "state":"PA",
    "FIPS":42051,
    "county":"Fayette County",
    "number":7209.059999999997,
    "rate":53.21164165664048,
    "population":135479
  },
  {
    "state":"PA",
    "FIPS":42055,
    "county":"Franklin County",
    "number":7345.269999999999,
    "rate":48.45516495260209,
    "population":151589
  },
  {
    "state":"PA",
    "FIPS":42057,
    "county":"Fulton County",
    "number":355.56999999999994,
    "rate":24.083581685180164,
    "population":14764
  },
  {
    "state":"PA",
    "FIPS":42059,
    "county":"Greene County",
    "number":454.79,
    "rate":11.941760319294191,
    "population":38084
  },
  {
    "state":"PA",
    "FIPS":42061,
    "county":"Huntingdon County",
    "number":361.87,
    "rate":7.863662045286627,
    "population":46018
  },
  {
    "state":"PA",
    "FIPS":42063,
    "county":"Indiana County",
    "number":14804.509999999997,
    "rate":167.83446133614478,
    "population":88209
  },
  {
    "state":"PA",
    "FIPS":42065,
    "county":"Jefferson County",
    "number":2349.6899999999996,
    "rate":52.364280620431444,
    "population":44872
  },
  {
    "state":"PA",
    "FIPS":42067,
    "county":"Juniata County",
    "number":500.1999999999998,
    "rate":20.076259281557288,
    "population":24915
  },
  {
    "state":"PA",
    "FIPS":42069,
    "county":"Lackawanna County",
    "number":33935.880000000005,
    "rate":158.20185539135707,
    "population":214510
  },
  {
    "state":"PA",
    "FIPS":42071,
    "county":"Lancaster County",
    "number":16734.940000000013,
    "rate":31.76921061723804,
    "population":526766
  },
  {
    "state":"PA",
    "FIPS":42073,
    "county":"Lawrence County",
    "number":8685.210000000003,
    "rate":96.72049177589456,
    "population":89797
  },
  {
    "state":"PA",
    "FIPS":42075,
    "county":"Lebanon County",
    "number":1955,
    "rate":14.419318198580934,
    "population":135582
  },
  {
    "state":"PA",
    "FIPS":42077,
    "county":"Lehigh County",
    "number":77158.61999999994,
    "rate":217.18365520211427,
    "population":355269
  },
  {
    "state":"PA",
    "FIPS":42079,
    "county":"Luzerne County",
    "number":93134.43999999987,
    "rate":289.8891918475077,
    "population":321276
  },
  {
    "state":"PA",
    "FIPS":42081,
    "county":"Lycoming County",
    "number":7123.609999999999,
    "rate":60.731909016505234,
    "population":117296
  },
  {
    "state":"PA",
    "FIPS":42083,
    "county":"McKean County",
    "number":1768.6100000000001,
    "rate":40.90785030300227,
    "population":43234
  },
  {
    "state":"PA",
    "FIPS":42085,
    "county":"Mercer County",
    "number":4375.320000000002,
    "rate":37.80072053703338,
    "population":115747
  },
  {
    "state":"PA",
    "FIPS":42087,
    "county":"Mifflin County",
    "number":740.7199999999999,
    "rate":15.81754895470755,
    "population":46829
  },
  {
    "state":"PA",
    "FIPS":42089,
    "county":"Monroe County",
    "number":10447.540000000008,
    "rate":62.01608642744789,
    "population":168465
  },
  {
    "state":"PA",
    "FIPS":42091,
    "county":"Montgomery County",
    "number":184849.7799999997,
    "rate":228.31728049524554,
    "population":809618
  },
  {
    "state":"PA",
    "FIPS":42093,
    "county":"Montour County",
    "number":3925.6500000000005,
    "rate":212.30057865988863,
    "population":18491
  },
  {
    "state":"PA",
    "FIPS":42095,
    "county":"Northampton County",
    "number":24974.97000000001,
    "rate":83.42704342219983,
    "population":299363
  },
  {
    "state":"PA",
    "FIPS":42097,
    "county":"Northumberland County",
    "number":1939.6099999999997,
    "rate":20.512817801091416,
    "population":94556
  },
  {
    "state":"PA",
    "FIPS":42099,
    "county":"Perry County",
    "number":1714.1299999999997,
    "rate":37.44931399108625,
    "population":45772
  },
  {
    "state":"PA",
    "FIPS":42101,
    "county":"Philadelphia County",
    "number":392546.52000000037,
    "rate":253.19113310405882,
    "population":1550396
  },
  {
    "state":"PA",
    "FIPS":42103,
    "county":"Pike County",
    "number":1478.8199999999997,
    "rate":26.052993199675836,
    "population":56762
  },
  {
    "state":"PA",
    "FIPS":42105,
    "county":"Potter County",
    "number":65.99,
    "rate":3.7441134751773046,
    "population":17625
  },
  {
    "state":"PA",
    "FIPS":42107,
    "county":"Schuylkill County",
    "number":11094.58,
    "rate":75.32575634131769,
    "population":147288
  },
  {
    "state":"PA",
    "FIPS":42109,
    "county":"Snyder County",
    "number":1849.13,
    "rate":46.46522263544075,
    "population":39796
  },
  {
    "state":"PA",
    "FIPS":42111,
    "county":"Somerset County",
    "number":3455.109999999999,
    "rate":44.80754765918816,
    "population":77110
  },
  {
    "state":"PA",
    "FIPS":42113,
    "county":"Sullivan County",
    "number":91.02,
    "rate":14.10506741050674,
    "population":6453
  },
  {
    "state":"PA",
    "FIPS":42115,
    "county":"Susquehanna County",
    "number":899.73,
    "rate":21.034998714142098,
    "population":42773
  },
  {
    "state":"PA",
    "FIPS":42117,
    "county":"Tioga County",
    "number":4676.27,
    "rate":109.74325878294339,
    "population":42611
  },
  {
    "state":"PA",
    "FIPS":42119,
    "county":"Union County",
    "number":1626.2000000000003,
    "rate":36.02649593477924,
    "population":45139
  },
  {
    "state":"PA",
    "FIPS":42121,
    "county":"Venango County",
    "number":871.35,
    "rate":16.0661934175348,
    "population":54235
  },
  {
    "state":"PA",
    "FIPS":42123,
    "county":"Warren County",
    "number":525.6999999999999,
    "rate":12.755993399980586,
    "population":41212
  },
  {
    "state":"PA",
    "FIPS":42125,
    "county":"Washington County",
    "number":12036.139999999994,
    "rate":57.74640048745145,
    "population":208431
  },
  {
    "state":"PA",
    "FIPS":42127,
    "county":"Wayne County",
    "number":632.51,
    "rate":12.237786591854503,
    "population":51685
  },
  {
    "state":"PA",
    "FIPS":42129,
    "county":"Westmoreland County",
    "number":56905.41999999998,
    "rate":156.72106857614975,
    "population":363100
  },
  {
    "state":"PA",
    "FIPS":42131,
    "county":"Wyoming County",
    "number":1303.6,
    "rate":45.98560745026104,
    "population":28348
  },
  {
    "state":"PA",
    "FIPS":42133,
    "county":"York County",
    "number":19122.669999999995,
    "rate":43.689087706391824,
    "population":437699
  },
  {
    "state":"PR",
    "FIPS":72001,
    "county":"Adjuntas",
    "number":797.19,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72005,
    "county":"Aguadilla",
    "number":5635.81,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72009,
    "county":"Aibonito",
    "number":3491.7299999999996,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72013,
    "county":"Arecibo",
    "number":7542.820000000002,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72017,
    "county":"Barceloneta",
    "number":1085.89,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72021,
    "county":"Bayamon",
    "number":82361.29999999994,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72029,
    "county":"Canovanas",
    "number":2562.8299999999995,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72031,
    "county":"Carolina",
    "number":12787.71,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72033,
    "county":"Catano",
    "number":1097.6000000000001,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72061,
    "county":"Guaynabo",
    "number":7468.5599999999995,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72109,
    "county":"Patillas",
    "number":208.76999999999998,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72127,
    "county":"San Juan",
    "number":330401.82000000065,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72133,
    "county":"Santa Isabel",
    "number":501.41,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72135,
    "county":"Toa Alta",
    "number":1959.8300000000006,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72137,
    "county":"Toa Baja",
    "number":5995.959999999999,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72139,
    "county":"Trujillo Alto",
    "number":3544.5600000000004,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72003,
    "county":"Aguada Municipio",
    "number":2691.91,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72011,
    "county":"A�asco Municipio",
    "number":316.53999999999996,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72023,
    "county":"",
    "number":3069.38,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72111,
    "county":"Pe�uelas Municipio",
    "number":915.9100000000001,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72027,
    "county":"Camuy Municipio",
    "number":293.93,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72081,
    "county":"",
    "number":525.1899999999999,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72121,
    "county":"Sabana Grande Municipio",
    "number":1652.78,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72039,
    "county":"Ciales Municipio",
    "number":859.25,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72141,
    "county":"Utuado Municipio",
    "number":527.8199999999999,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72051,
    "county":"Dorado Municipio",
    "number":1519.4699999999998,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72055,
    "county":"",
    "number":684.71,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72057,
    "county":"Guayama Municipio",
    "number":3839.1400000000003,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72065,
    "county":"Hatillo Municipio",
    "number":959.82,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72067,
    "county":"Hormigueros Municipio",
    "number":362.79999999999995,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72071,
    "county":"Isabela Municipio",
    "number":1643.65,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72073,
    "county":"Jayuya Municipio",
    "number":176.07999999999998,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72079,
    "county":"Lajas Municipio",
    "number":1227.5400000000002,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72083,
    "county":"Las Mar�as Municipio",
    "number":387.81,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72091,
    "county":"Manat� Municipio",
    "number":74601.73000000003,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72099,
    "county":"Moca Municipio",
    "number":1411.11,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72117,
    "county":"Rinc�n Municipio",
    "number":29.73,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72115,
    "county":"Quebradillas Municipio",
    "number":686.5,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72097,
    "county":"Mayag�ez Municipio",
    "number":37535.430000000015,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72125,
    "county":"San Germ�n Municipio",
    "number":2013,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72131,
    "county":"San Sebasti�n Municipio",
    "number":2581.2599999999998,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72101,
    "county":"Morovis Municipio",
    "number":715.24,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72143,
    "county":"Vega Alta Municipio",
    "number":1583,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72145,
    "county":"Vega Baja Municipio",
    "number":1891.2500000000002,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72153,
    "county":"Yauco Municipio",
    "number":2779.96,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72007,
    "county":"Aguas Buenas Municipio",
    "number":745.65,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72095,
    "county":"Maunabo Municipio",
    "number":334.22,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72015,
    "county":"Arroyo Municipio",
    "number":735.0700000000002,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72113,
    "county":"",
    "number":127435.1800000001,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72103,
    "county":"Naguabo Municipio",
    "number":813.66,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72105,
    "county":"Naranjito Municipio",
    "number":929.4800000000001,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72107,
    "county":"Orocovis Municipio",
    "number":381.81,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72025,
    "county":"Caguas Municipio",
    "number":40369.22999999998,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72037,
    "county":"Ceiba Municipio",
    "number":557.3,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72035,
    "county":"Cayey Municipio",
    "number":26325.689999999995,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72053,
    "county":"Fajardo Municipio",
    "number":6558.82,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72041,
    "county":"Cidra Municipio",
    "number":846.9999999999999,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72119,
    "county":"R�o Grande Municipio",
    "number":2770.29,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72123,
    "county":"Salinas Municipio",
    "number":516.8800000000001,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72129,
    "county":"San Lorenzo Municipio",
    "number":641.4499999999999,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72147,
    "county":"Vieques Municipio",
    "number":45,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72149,
    "county":"Villalba Municipio",
    "number":1862.9599999999998,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72151,
    "county":"Yabucoa Municipio",
    "number":9113.039999999999,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72043,
    "county":"Coamo Municipio",
    "number":1025.56,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72085,
    "county":"Las Piedras Municipio",
    "number":1580.5500000000002,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72087,
    "county":"Lo�za Municipio",
    "number":127.69,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72089,
    "county":"Luquillo Municipio",
    "number":489.58,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72049,
    "county":"Culebra Municipio",
    "number":100,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72077,
    "county":"Juncos Municipio",
    "number":1561.1000000000004,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72063,
    "county":"Gurabo Municipio",
    "number":2608.96,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72045,
    "county":"Comer�o Municipio",
    "number":40.5,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72047,
    "county":"Corozal Municipio",
    "number":4629.259999999999,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72069,
    "county":"Humacao Municipio",
    "number":33093.26,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72019,
    "county":"Barranquitas Municipio",
    "number":480.21000000000004,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72075,
    "county":"Juana D�az Municipio",
    "number":1917.3800000000003,
    "rate":null,
    "population":null
  },
  {
    "state":"RI",
    "FIPS":44001,
    "county":"Bristol County",
    "number":2144.89,
    "rate":43.56168000324952,
    "population":49238
  },
  {
    "state":"RI",
    "FIPS":44003,
    "county":"Kent County",
    "number":10286.6,
    "rate":62.380836870830805,
    "population":164900
  },
  {
    "state":"RI",
    "FIPS":44005,
    "county":"Newport County",
    "number":9319.279999999995,
    "rate":112.43762366681139,
    "population":82884
  },
  {
    "state":"RI",
    "FIPS":44007,
    "county":"Providence County",
    "number":51010.689999999944,
    "rate":81.05065716718985,
    "population":629368
  },
  {
    "state":"RI",
    "FIPS":44009,
    "county":"Washington County",
    "number":2398.5099999999998,
    "rate":18.998550460605003,
    "population":126247
  },
  {
    "state":"SC",
    "FIPS":45001,
    "county":"Abbeville County",
    "number":793.7200000000003,
    "rate":31.666467185318183,
    "population":25065
  },
  {
    "state":"SC",
    "FIPS":45003,
    "county":"Aiken County",
    "number":7750.579999999999,
    "rate":47.42562382974557,
    "population":163426
  },
  {
    "state":"SC",
    "FIPS":45005,
    "county":"Allendale County",
    "number":418.6999999999999,
    "rate":41.85325869652138,
    "population":10004
  },
  {
    "state":"SC",
    "FIPS":45007,
    "county":"Anderson County",
    "number":6085.1299999999965,
    "rate":32.13439653579065,
    "population":189365
  },
  {
    "state":"SC",
    "FIPS":45009,
    "county":"Bamberg County",
    "number":682.62,
    "rate":43.23115896136796,
    "population":15790
  },
  {
    "state":"SC",
    "FIPS":45011,
    "county":"Barnwell County",
    "number":789.6,
    "rate":35.41760114829102,
    "population":22294
  },
  {
    "state":"SC",
    "FIPS":45013,
    "county":"Beaufort County",
    "number":3120.7999999999997,
    "rate":18.60032661429712,
    "population":167782
  },
  {
    "state":"SC",
    "FIPS":45015,
    "county":"Berkeley County",
    "number":3580.95,
    "rate":18.89753183494905,
    "population":189493
  },
  {
    "state":"SC",
    "FIPS":45019,
    "county":"Charleston County",
    "number":127764.7200000001,
    "rate":349.5882584712375,
    "population":365472
  },
  {
    "state":"SC",
    "FIPS":45021,
    "county":"Cherokee County",
    "number":1196.97,
    "rate":21.50078137630005,
    "population":55671
  },
  {
    "state":"SC",
    "FIPS":45023,
    "county":"Chester County",
    "number":514.7400000000001,
    "rate":15.76780517690305,
    "population":32645
  },
  {
    "state":"SC",
    "FIPS":45025,
    "county":"Chesterfield County",
    "number":561.9699999999999,
    "rate":12.190238611713664,
    "population":46100
  },
  {
    "state":"SC",
    "FIPS":45027,
    "county":"Clarendon County",
    "number":834.5900000000001,
    "rate":24.35408094779539,
    "population":34269
  },
  {
    "state":"SC",
    "FIPS":45029,
    "county":"Colleton County",
    "number":30980.609999999997,
    "rate":810.3743133664661,
    "population":38230
  },
  {
    "state":"SC",
    "FIPS":45031,
    "county":"Darlington County",
    "number":2565.12,
    "rate":37.631042323773194,
    "population":68165
  },
  {
    "state":"SC",
    "FIPS":45033,
    "county":"Dillon County",
    "number":992.4,
    "rate":31.557859255254872,
    "population":31447
  },
  {
    "state":"SC",
    "FIPS":45035,
    "county":"Dorchester County",
    "number":18209.67,
    "rate":127.81406611918297,
    "population":142470
  },
  {
    "state":"SC",
    "FIPS":45037,
    "county":"Edgefield County",
    "number":380.73,
    "rate":14.461030082041933,
    "population":26328
  },
  {
    "state":"SC",
    "FIPS":45039,
    "county":"Fairfield County",
    "number":1115.07,
    "rate":47.711693979718454,
    "population":23371
  },
  {
    "state":"SC",
    "FIPS":45041,
    "county":"Florence County",
    "number":74125.37999999987,
    "rate":536.9069969578435,
    "population":138060
  },
  {
    "state":"SC",
    "FIPS":45043,
    "county":"Georgetown County",
    "number":817.8900000000002,
    "rate":13.567281534072062,
    "population":60284
  },
  {
    "state":"SC",
    "FIPS":45045,
    "county":"Greenville County",
    "number":45991.48999999998,
    "rate":98.53390836364879,
    "population":466758
  },
  {
    "state":"SC",
    "FIPS":45047,
    "county":"Greenwood County",
    "number":1968.33,
    "rate":28.18624432574857,
    "population":69833
  },
  {
    "state":"SC",
    "FIPS":45049,
    "county":"Hampton County",
    "number":231.55,
    "rate":11.175732419518317,
    "population":20719
  },
  {
    "state":"SC",
    "FIPS":45051,
    "county":"Horry County",
    "number":41776.21999999993,
    "rate":148.14787758431123,
    "population":281990
  },
  {
    "state":"SC",
    "FIPS":45053,
    "county":"Jasper County",
    "number":30.61,
    "rate":1.1785315519963038,
    "population":25973
  },
  {
    "state":"SC",
    "FIPS":45055,
    "county":"Kershaw County",
    "number":2374.71,
    "rate":38.15898573081373,
    "population":62232
  },
  {
    "state":"SC",
    "FIPS":45057,
    "county":"Lancaster County",
    "number":1302.7000000000003,
    "rate":16.449686209639744,
    "population":79193
  },
  {
    "state":"SC",
    "FIPS":45059,
    "county":"Laurens County",
    "number":1576.7800000000002,
    "rate":23.79757916025235,
    "population":66258
  },
  {
    "state":"SC",
    "FIPS":45061,
    "county":"Lee County",
    "number":33.11,
    "rate":1.7735283089613798,
    "population":18669
  },
  {
    "state":"SC",
    "FIPS":45063,
    "county":"Lexington County",
    "number":6940.619999999998,
    "rate":25.695150936271347,
    "population":270114
  },
  {
    "state":"SC",
    "FIPS":45067,
    "county":"Marion County",
    "number":1454.92,
    "rate":44.91741533141923,
    "population":32391
  },
  {
    "state":"SC",
    "FIPS":45069,
    "county":"Marlboro County",
    "number":414.39,
    "rate":14.717121852470077,
    "population":28157
  },
  {
    "state":"SC",
    "FIPS":45071,
    "county":"Newberry County",
    "number":2021.9499999999998,
    "rate":53.82823523147778,
    "population":37563
  },
  {
    "state":"SC",
    "FIPS":45073,
    "county":"Oconee County",
    "number":1153.0199999999998,
    "rate":15.459555126503355,
    "population":74583
  },
  {
    "state":"SC",
    "FIPS":45075,
    "county":"Orangeburg County",
    "number":13214.070000000003,
    "rate":144.5282131490009,
    "population":91429
  },
  {
    "state":"SC",
    "FIPS":45077,
    "county":"Pickens County",
    "number":3485.1599999999994,
    "rate":29.1264959550712,
    "population":119656
  },
  {
    "state":"SC",
    "FIPS":45079,
    "county":"Richland County",
    "number":17923.800000000032,
    "rate":45.52920287443775,
    "population":393677
  },
  {
    "state":"SC",
    "FIPS":45081,
    "county":"Saluda County",
    "number":465.34999999999997,
    "rate":23.31062465561288,
    "population":19963
  },
  {
    "state":"SC",
    "FIPS":45083,
    "county":"Spartanburg County",
    "number":11549.00999999998,
    "rate":40.04219526317425,
    "population":288421
  },
  {
    "state":"SC",
    "FIPS":45085,
    "county":"Sumter County",
    "number":6423.799999999998,
    "rate":59.44660373866369,
    "population":108060
  },
  {
    "state":"SC",
    "FIPS":45087,
    "county":"Union County",
    "number":639.48,
    "rate":22.658918574162,
    "population":28222
  },
  {
    "state":"SC",
    "FIPS":45089,
    "county":"Williamsburg County",
    "number":210.48999999999998,
    "rate":6.266075256013337,
    "population":33592
  },
  {
    "state":"SC",
    "FIPS":45091,
    "county":"York County",
    "number":5422.779999999999,
    "rate":23.118354748770063,
    "population":234566
  },
  {
    "state":"SD",
    "FIPS":46005,
    "county":"Beadle County",
    "number":226.94,
    "rate":12.607777777777777,
    "population":18000
  },
  {
    "state":"SD",
    "FIPS":46011,
    "county":"Brookings County",
    "number":12.63,
    "rate":0.386403965000306,
    "population":32686
  },
  {
    "state":"SD",
    "FIPS":46013,
    "county":"Brown County",
    "number":678.42,
    "rate":18.084448472570237,
    "population":37514
  },
  {
    "state":"SD",
    "FIPS":46015,
    "county":"Brule County",
    "number":219.17000000000002,
    "rate":41.32164404223228,
    "population":5304
  },
  {
    "state":"SD",
    "FIPS":46019,
    "county":"Butte County",
    "number":144.37,
    "rate":14.101386989646416,
    "population":10238
  },
  {
    "state":"SD",
    "FIPS":46023,
    "county":"Charles Mix County",
    "number":219.48,
    "rate":23.83061889250814,
    "population":9210
  },
  {
    "state":"SD",
    "FIPS":46027,
    "county":"Clay County",
    "number":28.42,
    "rate":2.0168902136115254,
    "population":14091
  },
  {
    "state":"SD",
    "FIPS":46029,
    "county":"Codington County",
    "number":695.8400000000001,
    "rate":25.228961966571195,
    "population":27581
  },
  {
    "state":"SD",
    "FIPS":46033,
    "county":"Custer County",
    "number":656.76,
    "rate":78.98496692723994,
    "population":8315
  },
  {
    "state":"SD",
    "FIPS":46035,
    "county":"Davison County",
    "number":511.98999999999995,
    "rate":25.86069299929286,
    "population":19798
  },
  {
    "state":"SD",
    "FIPS":46047,
    "county":"Fall River County",
    "number":77.6,
    "rate":11.087298185455065,
    "population":6999
  },
  {
    "state":"SD",
    "FIPS":46051,
    "county":"Grant County",
    "number":86.34,
    "rate":11.879471656576776,
    "population":7268
  },
  {
    "state":"SD",
    "FIPS":46053,
    "county":"Gregory County",
    "number":41.03,
    "rate":9.658662900188324,
    "population":4248
  },
  {
    "state":"SD",
    "FIPS":46065,
    "county":"Hughes County",
    "number":1540.8999999999999,
    "rate":88.34929189840032,
    "population":17441
  },
  {
    "state":"SD",
    "FIPS":46081,
    "county":"Lawrence County",
    "number":93.31,
    "rate":3.8304597701149428,
    "population":24360
  },
  {
    "state":"SD",
    "FIPS":46083,
    "county":"Lincoln County",
    "number":465.72,
    "rate":9.641836776945055,
    "population":48302
  },
  {
    "state":"SD",
    "FIPS":46093,
    "county":"Meade County",
    "number":140.35000000000002,
    "rate":5.413902175590188,
    "population":25924
  },
  {
    "state":"SD",
    "FIPS":46099,
    "county":"Minnehaha County",
    "number":61882.33000000003,
    "rate":352.583769678254,
    "population":175511
  },
  {
    "state":"SD",
    "FIPS":46101,
    "county":"Moody County",
    "number":47.92,
    "rate":7.432914533891733,
    "population":6447
  },
  {
    "state":"SD",
    "FIPS":46103,
    "county":"Pennington County",
    "number":1340.5700000000004,
    "rate":12.822040707016606,
    "population":104552
  },
  {
    "state":"SD",
    "FIPS":46109,
    "county":"Roberts County",
    "number":38.22,
    "rate":3.6934673366834168,
    "population":10348
  },
  {
    "state":"SD",
    "FIPS":46123,
    "county":"Tripp County",
    "number":33.849999999999994,
    "rate":6.171376481312669,
    "population":5485
  },
  {
    "state":"SD",
    "FIPS":46125,
    "county":"Turner County",
    "number":44.39,
    "rate":5.327652424387901,
    "population":8332
  },
  {
    "state":"SD",
    "FIPS":46127,
    "county":"Union County",
    "number":326.1600000000001,
    "rate":21.976955730745914,
    "population":14841
  },
  {
    "state":"SD",
    "FIPS":46129,
    "county":"Walworth County",
    "number":37.89,
    "rate":6.93956043956044,
    "population":5460
  },
  {
    "state":"SD",
    "FIPS":46135,
    "county":"Yankton County",
    "number":69.83000000000001,
    "rate":3.091053959541411,
    "population":22591
  },
  {
    "state":"TN",
    "FIPS":47001,
    "county":"Anderson County",
    "number":11471.849999999999,
    "rate":152.24953217693664,
    "population":75349
  },
  {
    "state":"TN",
    "FIPS":47003,
    "county":"Bedford County",
    "number":202.02999999999997,
    "rate":4.449999999999999,
    "population":45400
  },
  {
    "state":"TN",
    "FIPS":47007,
    "county":"Bledsoe County",
    "number":49.96,
    "rate":3.9089273139816916,
    "population":12781
  },
  {
    "state":"TN",
    "FIPS":47009,
    "county":"Blount County",
    "number":3022.2200000000003,
    "rate":24.36959747129403,
    "population":124016
  },
  {
    "state":"TN",
    "FIPS":47011,
    "county":"Bradley County",
    "number":2790.5,
    "rate":27.596744365438056,
    "population":101117
  },
  {
    "state":"TN",
    "FIPS":47013,
    "county":"Campbell County",
    "number":20922.390000000003,
    "rate":517.5094610304485,
    "population":40429
  },
  {
    "state":"TN",
    "FIPS":47015,
    "county":"Cannon County",
    "number":11.53,
    "rate":0.832972113856379,
    "population":13842
  },
  {
    "state":"TN",
    "FIPS":47017,
    "county":"Carroll County",
    "number":562.5100000000001,
    "rate":19.652377458687074,
    "population":28623
  },
  {
    "state":"TN",
    "FIPS":47019,
    "county":"Carter County",
    "number":33282.780000000006,
    "rate":580.081915783603,
    "population":57376
  },
  {
    "state":"TN",
    "FIPS":47021,
    "county":"Cheatham County",
    "number":374.46000000000004,
    "rate":9.534309357097392,
    "population":39275
  },
  {
    "state":"TN",
    "FIPS":47023,
    "county":"Chester County",
    "number":579.6499999999999,
    "rate":33.65166908563134,
    "population":17225
  },
  {
    "state":"TN",
    "FIPS":47025,
    "county":"Claiborne County",
    "number":1037.4099999999999,
    "rate":32.70935805271787,
    "population":31716
  },
  {
    "state":"TN",
    "FIPS":47027,
    "county":"Clay County",
    "number":75.07000000000001,
    "rate":9.624358974358975,
    "population":7800
  },
  {
    "state":"TN",
    "FIPS":47029,
    "county":"Cocke County",
    "number":2530.9000000000005,
    "rate":71.3170649233544,
    "population":35488
  },
  {
    "state":"TN",
    "FIPS":47031,
    "county":"Coffee County",
    "number":3490.7000000000007,
    "rate":65.69245535126184,
    "population":53137
  },
  {
    "state":"TN",
    "FIPS":47035,
    "county":"Cumberland County",
    "number":5317.75,
    "rate":93.23333976190894,
    "population":57037
  },
  {
    "state":"TN",
    "FIPS":47037,
    "county":"Davidson County",
    "number":309443.5299999996,
    "rate":476.69620822562644,
    "population":649142
  },
  {
    "state":"TN",
    "FIPS":47041,
    "county":"De Kalb County",
    "number":1318.06,
    "rate":69.66490486257928,
    "population":18920
  },
  {
    "state":"TN",
    "FIPS":47039,
    "county":"Decatur County",
    "number":10.24,
    "rate":0.8791208791208792,
    "population":11648
  },
  {
    "state":"TN",
    "FIPS":47043,
    "county":"Dickson County",
    "number":2619.580000000001,
    "rate":52.21719457013576,
    "population":50167
  },
  {
    "state":"TN",
    "FIPS":47045,
    "county":"Dyer County",
    "number":2436.540000000001,
    "rate":63.745388901970045,
    "population":38223
  },
  {
    "state":"TN",
    "FIPS":47047,
    "county":"Fayette County",
    "number":459.46999999999997,
    "rate":11.900593125955087,
    "population":38609
  },
  {
    "state":"TN",
    "FIPS":47049,
    "county":"Fentress County",
    "number":538.57,
    "rate":30.069231198704706,
    "population":17911
  },
  {
    "state":"TN",
    "FIPS":47051,
    "county":"Franklin County",
    "number":682.8199999999999,
    "rate":16.741939438519065,
    "population":40785
  },
  {
    "state":"TN",
    "FIPS":47053,
    "county":"Gibson County",
    "number":450.24999999999994,
    "rate":9.06482786390175,
    "population":49670
  },
  {
    "state":"TN",
    "FIPS":47055,
    "county":"Giles County",
    "number":824.0999999999999,
    "rate":28.468287964626224,
    "population":28948
  },
  {
    "state":"TN",
    "FIPS":47057,
    "county":"Grainger County",
    "number":410.03000000000003,
    "rate":18.110865724381625,
    "population":22640
  },
  {
    "state":"TN",
    "FIPS":47059,
    "county":"Greene County",
    "number":3011.28,
    "rate":43.87446455109713,
    "population":68634
  },
  {
    "state":"TN",
    "FIPS":47063,
    "county":"Hamblen County",
    "number":14946.009999999993,
    "rate":238.2479715620167,
    "population":62733
  },
  {
    "state":"TN",
    "FIPS":47065,
    "county":"Hamilton County",
    "number":59505.91999999999,
    "rate":172.15308817700782,
    "population":345657
  },
  {
    "state":"TN",
    "FIPS":47069,
    "county":"Hardeman County",
    "number":239.14999999999998,
    "rate":9.013643901703603,
    "population":26532
  },
  {
    "state":"TN",
    "FIPS":47071,
    "county":"Hardin County",
    "number":434.34000000000003,
    "rate":16.68933717579251,
    "population":26025
  },
  {
    "state":"TN",
    "FIPS":47073,
    "county":"Hawkins County",
    "number":1101.1899999999998,
    "rate":19.45530997685553,
    "population":56601
  },
  {
    "state":"TN",
    "FIPS":47075,
    "county":"Haywood County",
    "number":2090.13,
    "rate":114.57161651044238,
    "population":18243
  },
  {
    "state":"TN",
    "FIPS":47077,
    "county":"Henderson County",
    "number":388.41,
    "rate":13.8623790998965,
    "population":28019
  },
  {
    "state":"TN",
    "FIPS":47079,
    "county":"Henry County",
    "number":1694.2099999999994,
    "rate":52.39716706872021,
    "population":32334
  },
  {
    "state":"TN",
    "FIPS":47081,
    "county":"Hickman County",
    "number":93.4,
    "rate":3.8671745611129515,
    "population":24152
  },
  {
    "state":"TN",
    "FIPS":47083,
    "county":"Houston County",
    "number":189.8,
    "rate":22.533539119078714,
    "population":8423
  },
  {
    "state":"TN",
    "FIPS":47085,
    "county":"Humphreys County",
    "number":50.58,
    "rate":2.766958424507658,
    "population":18280
  },
  {
    "state":"TN",
    "FIPS":47087,
    "county":"Jackson County",
    "number":157.19,
    "rate":13.634313470379045,
    "population":11529
  },
  {
    "state":"TN",
    "FIPS":47089,
    "county":"Jefferson County",
    "number":2068.7400000000002,
    "rate":39.54845246515897,
    "population":52309
  },
  {
    "state":"TN",
    "FIPS":47093,
    "county":"Knox County",
    "number":90622.45000000006,
    "rate":205.42973142069576,
    "population":441136
  },
  {
    "state":"TN",
    "FIPS":47097,
    "county":"Lauderdale County",
    "number":217.19,
    "rate":7.8461760774538485,
    "population":27681
  },
  {
    "state":"TN",
    "FIPS":47099,
    "county":"Lawrence County",
    "number":434.25999999999993,
    "rate":10.307863941702864,
    "population":42129
  },
  {
    "state":"TN",
    "FIPS":47103,
    "county":"Lincoln County",
    "number":1920.77,
    "rate":57.44616580930733,
    "population":33436
  },
  {
    "state":"TN",
    "FIPS":47105,
    "county":"Loudon County",
    "number":692.1099999999999,
    "rate":13.913716502824515,
    "population":49743
  },
  {
    "state":"TN",
    "FIPS":47111,
    "county":"Macon County",
    "number":163.95999999999998,
    "rate":7.28322672352523,
    "population":22512
  },
  {
    "state":"TN",
    "FIPS":47113,
    "county":"Madison County",
    "number":13973.419999999998,
    "rate":141.78871853152174,
    "population":98551
  },
  {
    "state":"TN",
    "FIPS":47115,
    "county":"Marion County",
    "number":456.7,
    "rate":16.179544407836467,
    "population":28227
  },
  {
    "state":"TN",
    "FIPS":47117,
    "county":"Marshall County",
    "number":89.07,
    "rate":2.8793560483610263,
    "population":30934
  },
  {
    "state":"TN",
    "FIPS":47119,
    "county":"Maury County",
    "number":4817.520000000002,
    "rate":58.79039343942207,
    "population":81944
  },
  {
    "state":"TN",
    "FIPS":47107,
    "county":"McMinn County",
    "number":2189.2300000000005,
    "rate":41.737779302981785,
    "population":52452
  },
  {
    "state":"TN",
    "FIPS":47109,
    "county":"McNairy County",
    "number":1296.2799999999997,
    "rate":49.5311604447671,
    "population":26171
  },
  {
    "state":"TN",
    "FIPS":47121,
    "county":"Meigs County",
    "number":74,
    "rate":6.336701489981161,
    "population":11678
  },
  {
    "state":"TN",
    "FIPS":47123,
    "county":"Monroe County",
    "number":874.9000000000001,
    "rate":19.395672607963114,
    "population":45108
  },
  {
    "state":"TN",
    "FIPS":47125,
    "county":"Montgomery County",
    "number":1370.4399999999998,
    "rate":7.393396633577901,
    "population":185360
  },
  {
    "state":"TN",
    "FIPS":47129,
    "county":"Morgan County",
    "number":61.36,
    "rate":2.7960811118705853,
    "population":21945
  },
  {
    "state":"TN",
    "FIPS":47131,
    "county":"Obion County",
    "number":423.03,
    "rate":13.49334949443399,
    "population":31351
  },
  {
    "state":"TN",
    "FIPS":47133,
    "county":"Overton County",
    "number":253.92000000000002,
    "rate":11.432173247489985,
    "population":22211
  },
  {
    "state":"TN",
    "FIPS":47137,
    "county":"Pickett County",
    "number":305.2300000000001,
    "rate":59.990172955974856,
    "population":5088
  },
  {
    "state":"TN",
    "FIPS":47139,
    "county":"Polk County",
    "number":517.7700000000001,
    "rate":31.166556311322466,
    "population":16613
  },
  {
    "state":"TN",
    "FIPS":47141,
    "county":"Putnam County",
    "number":10000.859999999999,
    "rate":136.86496694995276,
    "population":73071
  },
  {
    "state":"TN",
    "FIPS":47143,
    "county":"Rhea County",
    "number":158.24,
    "rate":4.898009719255889,
    "population":32307
  },
  {
    "state":"TN",
    "FIPS":47145,
    "county":"Roane County",
    "number":4521.53,
    "rate":84.63164002545577,
    "population":53426
  },
  {
    "state":"TN",
    "FIPS":47147,
    "county":"Robertson County",
    "number":1222.06,
    "rate":18.316521530598482,
    "population":66719
  },
  {
    "state":"TN",
    "FIPS":47149,
    "county":"Rutherford County",
    "number":18954.480000000007,
    "rate":69.12446026374141,
    "population":274208
  },
  {
    "state":"TN",
    "FIPS":47151,
    "county":"Scott County",
    "number":349.62999999999994,
    "rate":15.773256338536495,
    "population":22166
  },
  {
    "state":"TN",
    "FIPS":47153,
    "county":"Sequatchie County",
    "number":97.92000000000002,
    "rate":6.7919816882846655,
    "population":14417
  },
  {
    "state":"TN",
    "FIPS":47155,
    "county":"Sevier County",
    "number":3434.3999999999996,
    "rate":37.11580858513811,
    "population":92532
  },
  {
    "state":"TN",
    "FIPS":47157,
    "county":"Shelby County",
    "number":285102.92000000033,
    "rate":303.3196941938974,
    "population":939942
  },
  {
    "state":"TN",
    "FIPS":47159,
    "county":"Smith County",
    "number":306.52,
    "rate":16.031380753138073,
    "population":19120
  },
  {
    "state":"TN",
    "FIPS":47161,
    "county":"Stewart County",
    "number":42.68,
    "rate":3.200359928014397,
    "population":13336
  },
  {
    "state":"TN",
    "FIPS":47163,
    "county":"Sullivan County",
    "number":36610.610000000015,
    "rate":233.67529823262473,
    "population":156673
  },
  {
    "state":"TN",
    "FIPS":47165,
    "county":"Sumner County",
    "number":86597.15000000001,
    "rate":521.1797948915478,
    "population":166156
  },
  {
    "state":"TN",
    "FIPS":47167,
    "county":"Tipton County",
    "number":1483.6400000000003,
    "rate":24.094452384045738,
    "population":61576
  },
  {
    "state":"TN",
    "FIPS":47169,
    "county":"Trousdale County",
    "number":92.78999999999999,
    "rate":11.90989603388525,
    "population":7791
  },
  {
    "state":"TN",
    "FIPS":47171,
    "county":"Unicoi County",
    "number":197.16999999999996,
    "rate":10.803243657881756,
    "population":18251
  },
  {
    "state":"TN",
    "FIPS":47173,
    "county":"Union County",
    "number":34.68,
    "rate":1.8125751319709402,
    "population":19133
  },
  {
    "state":"TN",
    "FIPS":47175,
    "county":"Van Buren County",
    "number":42.739999999999995,
    "rate":7.604982206405693,
    "population":5620
  },
  {
    "state":"TN",
    "FIPS":47177,
    "county":"Warren County",
    "number":891.77,
    "rate":22.431643818387624,
    "population":39755
  },
  {
    "state":"TN",
    "FIPS":47179,
    "county":"Washington County",
    "number":4861.359999999998,
    "rate":38.92295251287059,
    "population":124897
  },
  {
    "state":"TN",
    "FIPS":47181,
    "county":"Wayne County",
    "number":281.14,
    "rate":16.547380812242498,
    "population":16990
  },
  {
    "state":"TN",
    "FIPS":47183,
    "county":"Weakley County",
    "number":425.1,
    "rate":12.24648536529154,
    "population":34712
  },
  {
    "state":"TN",
    "FIPS":47185,
    "county":"White County",
    "number":423.53,
    "rate":16.252110514198005,
    "population":26060
  },
  {
    "state":"TN",
    "FIPS":47187,
    "county":"Williamson County",
    "number":2117.93,
    "rate":10.971627201002915,
    "population":193037
  },
  {
    "state":"TN",
    "FIPS":47189,
    "county":"Wilson County",
    "number":3246.930000000001,
    "rate":27.264963724304728,
    "population":119088
  },
  {
    "state":"TX",
    "FIPS":48001,
    "county":"Anderson County",
    "number":1024.75,
    "rate":17.66018681280805,
    "population":58026
  },
  {
    "state":"TX",
    "FIPS":48003,
    "county":"Andrews County",
    "number":114.34,
    "rate":7.0934921521186185,
    "population":16119
  },
  {
    "state":"TX",
    "FIPS":48005,
    "county":"Angelina County",
    "number":12457.449999999999,
    "rate":142.23268824570417,
    "population":87585
  },
  {
    "state":"TX",
    "FIPS":48007,
    "county":"Aransas County",
    "number":274.47999999999996,
    "rate":11.578014932298474,
    "population":23707
  },
  {
    "state":"TX",
    "FIPS":48013,
    "county":"Atascosa County",
    "number":91.92,
    "rate":1.979498664829012,
    "population":46436
  },
  {
    "state":"TX",
    "FIPS":48015,
    "county":"Austin County",
    "number":258.69,
    "rate":9.038152470127873,
    "population":28622
  },
  {
    "state":"TX",
    "FIPS":48021,
    "county":"Bastrop County",
    "number":1067.39,
    "rate":14.253532035360417,
    "population":74886
  },
  {
    "state":"TX",
    "FIPS":48023,
    "county":"Baylor County",
    "number":74.67,
    "rate":20.655601659751035,
    "population":3615
  },
  {
    "state":"TX",
    "FIPS":48025,
    "county":"Bee County",
    "number":781.74,
    "rate":24.089858555976704,
    "population":32451
  },
  {
    "state":"TX",
    "FIPS":48027,
    "county":"Bell County",
    "number":5191.150000000001,
    "rate":16.064360801740385,
    "population":323147
  },
  {
    "state":"TX",
    "FIPS":48029,
    "county":"Bexar County",
    "number":1952314.4499999988,
    "rate":1091.3747485826145,
    "population":1788858
  },
  {
    "state":"TX",
    "FIPS":48031,
    "county":"Blanco County",
    "number":103.02,
    "rate":9.70422004521477,
    "population":10616
  },
  {
    "state":"TX",
    "FIPS":48035,
    "county":"Bosque County",
    "number":98.73,
    "rate":5.451383137319861,
    "population":18111
  },
  {
    "state":"TX",
    "FIPS":48037,
    "county":"Bowie County",
    "number":19460.72999999999,
    "rate":209.05734358886204,
    "population":93088
  },
  {
    "state":"TX",
    "FIPS":48039,
    "county":"Brazoria County",
    "number":9354.309999999998,
    "rate":28.809351487694673,
    "population":324697
  },
  {
    "state":"TX",
    "FIPS":48041,
    "county":"Brazos County",
    "number":36006.65000000004,
    "rate":179.5242986134311,
    "population":200567
  },
  {
    "state":"TX",
    "FIPS":48043,
    "county":"Brewster County",
    "number":17.36,
    "rate":1.875945537065053,
    "population":9254
  },
  {
    "state":"TX",
    "FIPS":48049,
    "county":"Brown County",
    "number":1270.09,
    "rate":33.549673772353856,
    "population":37857
  },
  {
    "state":"TX",
    "FIPS":48051,
    "county":"Burleson County",
    "number":465.19,
    "rate":26.864749364749365,
    "population":17316
  },
  {
    "state":"TX",
    "FIPS":48053,
    "county":"Burnet County",
    "number":445.86,
    "rate":10.115250238214074,
    "population":44078
  },
  {
    "state":"TX",
    "FIPS":48055,
    "county":"Caldwell County",
    "number":62.150000000000006,
    "rate":1.6054868125339052,
    "population":38711
  },
  {
    "state":"TX",
    "FIPS":48057,
    "county":"Calhoun County",
    "number":557.02,
    "rate":25.827421523624054,
    "population":21567
  },
  {
    "state":"TX",
    "FIPS":48059,
    "county":"Callahan County",
    "number":56.72,
    "rate":4.196818349981502,
    "population":13515
  },
  {
    "state":"TX",
    "FIPS":48061,
    "county":"Cameron County",
    "number":14479.48,
    "rate":34.80242664307964,
    "population":416048
  },
  {
    "state":"TX",
    "FIPS":48063,
    "county":"Camp County",
    "number":17.62,
    "rate":1.4141252006420546,
    "population":12460
  },
  {
    "state":"TX",
    "FIPS":48067,
    "county":"Cass County",
    "number":81.46,
    "rate":2.6985126047636396,
    "population":30187
  },
  {
    "state":"TX",
    "FIPS":48071,
    "county":"Chambers County",
    "number":41,
    "rate":1.1267450807958668,
    "population":36388
  },
  {
    "state":"TX",
    "FIPS":48073,
    "county":"Cherokee County",
    "number":754.04,
    "rate":14.741163590866437,
    "population":51152
  },
  {
    "state":"TX",
    "FIPS":48075,
    "county":"Childress County",
    "number":18.93,
    "rate":2.6677001127395714,
    "population":7096
  },
  {
    "state":"TX",
    "FIPS":48077,
    "county":"Clay County",
    "number":383.02000000000004,
    "rate":36.43645357686454,
    "population":10512
  },
  {
    "state":"TX",
    "FIPS":48085,
    "county":"Collin County",
    "number":202292.81999999983,
    "rate":241.5505877183344,
    "population":837476
  },
  {
    "state":"TX",
    "FIPS":48089,
    "county":"Colorado County",
    "number":1164.65,
    "rate":56.30408508581098,
    "population":20685
  },
  {
    "state":"TX",
    "FIPS":48091,
    "county":"Comal County",
    "number":80794.09999999999,
    "rate":701.9652988348957,
    "population":115097
  },
  {
    "state":"TX",
    "FIPS":48093,
    "county":"Comanche County",
    "number":473.43999999999994,
    "rate":34.44201949658082,
    "population":13746
  },
  {
    "state":"TX",
    "FIPS":48097,
    "county":"Cooke County",
    "number":1400.38,
    "rate":36.154700126507116,
    "population":38733
  },
  {
    "state":"TX",
    "FIPS":48099,
    "county":"Coryell County",
    "number":209.06,
    "rate":2.710277950632649,
    "population":77136
  },
  {
    "state":"TX",
    "FIPS":48113,
    "county":"Dallas County",
    "number":1015995.5900000002,
    "rate":413.5622928872269,
    "population":2456693
  },
  {
    "state":"TX",
    "FIPS":48115,
    "county":"Dawson County",
    "number":85.50000000000001,
    "rate":6.257776476615678,
    "population":13663
  },
  {
    "state":"TX",
    "FIPS":48123,
    "county":"De Witt County",
    "number":829.2999999999998,
    "rate":40.54067266327727,
    "population":20456
  },
  {
    "state":"TX",
    "FIPS":48117,
    "county":"Deaf Smith County",
    "number":34.58,
    "rate":1.7863415642111786,
    "population":19358
  },
  {
    "state":"TX",
    "FIPS":48121,
    "county":"Denton County",
    "number":15619.240000000014,
    "rate":22.062257578796622,
    "population":707962
  },
  {
    "state":"TX",
    "FIPS":48133,
    "county":"Eastland County",
    "number":416.23,
    "rate":22.617508014997558,
    "population":18403
  },
  {
    "state":"TX",
    "FIPS":48135,
    "county":"Ector County",
    "number":4529.930000000001,
    "rate":31.361150342001064,
    "population":144444
  },
  {
    "state":"TX",
    "FIPS":48141,
    "county":"El Paso County",
    "number":96763.03999999995,
    "rate":116.42151059262889,
    "population":831144
  },
  {
    "state":"TX",
    "FIPS":48139,
    "county":"Ellis County",
    "number":2792.4600000000005,
    "rate":18.153368091219953,
    "population":153826
  },
  {
    "state":"TX",
    "FIPS":48143,
    "county":"Erath County",
    "number":1237.9400000000003,
    "rate":31.37520275750203,
    "population":39456
  },
  {
    "state":"TX",
    "FIPS":48145,
    "county":"Falls County",
    "number":27.130000000000003,
    "rate":1.5414772727272728,
    "population":17600
  },
  {
    "state":"TX",
    "FIPS":48147,
    "county":"Fannin County",
    "number":560.3000000000002,
    "rate":16.64240948109425,
    "population":33667
  },
  {
    "state":"TX",
    "FIPS":48149,
    "county":"Fayette County",
    "number":693.72,
    "rate":28.063106796116507,
    "population":24720
  },
  {
    "state":"TX",
    "FIPS":48157,
    "county":"Fort Bend County",
    "number":30429.200000000015,
    "rate":48.554341443488504,
    "population":626704
  },
  {
    "state":"TX",
    "FIPS":48159,
    "county":"Franklin County",
    "number":42.43,
    "rate":3.9892816848439265,
    "population":10636
  },
  {
    "state":"TX",
    "FIPS":48161,
    "county":"Freestone County",
    "number":92.24000000000001,
    "rate":4.734869873209794,
    "population":19481
  },
  {
    "state":"TX",
    "FIPS":48163,
    "county":"Frio County",
    "number":23.84,
    "rate":1.337147344214482,
    "population":17829
  },
  {
    "state":"TX",
    "FIPS":48165,
    "county":"Gaines County",
    "number":15,
    "rate":0.8129200086711467,
    "population":18452
  },
  {
    "state":"TX",
    "FIPS":48167,
    "county":"Galveston County",
    "number":6010.46,
    "rate":19.937240644975105,
    "population":301469
  },
  {
    "state":"TX",
    "FIPS":48171,
    "county":"Gillespie County",
    "number":1396.3799999999999,
    "rate":55.522067594433395,
    "population":25150
  },
  {
    "state":"TX",
    "FIPS":48175,
    "county":"Goliad County",
    "number":19.62,
    "rate":2.6737530662305806,
    "population":7338
  },
  {
    "state":"TX",
    "FIPS":48177,
    "county":"Gonzales County",
    "number":188.69,
    "rate":9.448199889840268,
    "population":19971
  },
  {
    "state":"TX",
    "FIPS":48179,
    "county":"Gray County",
    "number":16.14,
    "rate":0.706871633162528,
    "population":22833
  },
  {
    "state":"TX",
    "FIPS":48181,
    "county":"Grayson County",
    "number":3864.1799999999994,
    "rate":31.76969687004135,
    "population":121631
  },
  {
    "state":"TX",
    "FIPS":48183,
    "county":"Gregg County",
    "number":9638.540000000008,
    "rate":78.4284272881136,
    "population":122896
  },
  {
    "state":"TX",
    "FIPS":48185,
    "county":"Grimes County",
    "number":330.2000000000001,
    "rate":12.35593474030834,
    "population":26724
  },
  {
    "state":"TX",
    "FIPS":48187,
    "county":"Guadalupe County",
    "number":4576.95,
    "rate":32.75942282090556,
    "population":139714
  },
  {
    "state":"TX",
    "FIPS":48189,
    "county":"Hale County",
    "number":445.23999999999995,
    "rate":12.260160810661965,
    "population":36316
  },
  {
    "state":"TX",
    "FIPS":48195,
    "county":"Hansford County",
    "number":174.27,
    "rate":31.67393675027263,
    "population":5502
  },
  {
    "state":"TX",
    "FIPS":48197,
    "county":"Hardeman County",
    "number":105.45,
    "rate":26.04990118577075,
    "population":4048
  },
  {
    "state":"TX",
    "FIPS":48199,
    "county":"Hardin County",
    "number":676.01,
    "rate":12.257883189178408,
    "population":55149
  },
  {
    "state":"TX",
    "FIPS":48201,
    "county":"Harris County",
    "number":603918.5400000003,
    "rate":141.66315745028226,
    "population":4263060
  },
  {
    "state":"TX",
    "FIPS":48203,
    "county":"Harrison County",
    "number":1848.9500000000003,
    "rate":27.47978717079841,
    "population":67284
  },
  {
    "state":"TX",
    "FIPS":48209,
    "county":"Hays County",
    "number":8143.609999999998,
    "rate":48.228420834443746,
    "population":168855
  },
  {
    "state":"TX",
    "FIPS":48211,
    "county":"Hemphill County",
    "number":119.54,
    "rate":29.284664380205783,
    "population":4082
  },
  {
    "state":"TX",
    "FIPS":48213,
    "county":"Henderson County",
    "number":1636,
    "rate":20.72407590382813,
    "population":78942
  },
  {
    "state":"TX",
    "FIPS":48215,
    "county":"Hidalgo County",
    "number":58081.23999999997,
    "rate":71.90719613729917,
    "population":807725
  },
  {
    "state":"TX",
    "FIPS":48217,
    "county":"Hill County",
    "number":433.96000000000004,
    "rate":12.360363439573899,
    "population":35109
  },
  {
    "state":"TX",
    "FIPS":48219,
    "county":"Hockley County",
    "number":29.11,
    "rate":1.2589741371853647,
    "population":23122
  },
  {
    "state":"TX",
    "FIPS":48221,
    "county":"Hood County",
    "number":2268.58,
    "rate":43.51273592143624,
    "population":52136
  },
  {
    "state":"TX",
    "FIPS":48223,
    "county":"Hopkins County",
    "number":442.65000000000003,
    "rate":12.497176736307171,
    "population":35420
  },
  {
    "state":"TX",
    "FIPS":48225,
    "county":"Houston County",
    "number":14.7,
    "rate":0.6350166313879648,
    "population":23149
  },
  {
    "state":"TX",
    "FIPS":48227,
    "county":"Howard County",
    "number":415.10999999999996,
    "rate":11.681393516434037,
    "population":35536
  },
  {
    "state":"TX",
    "FIPS":48231,
    "county":"Hunt County",
    "number":696.79,
    "rate":7.989703133778995,
    "population":87211
  },
  {
    "state":"TX",
    "FIPS":48233,
    "county":"Hutchinson County",
    "number":177.54000000000002,
    "rate":8.089119737561509,
    "population":21948
  },
  {
    "state":"TX",
    "FIPS":48241,
    "county":"Jasper County",
    "number":194.77999999999997,
    "rate":5.432284694332886,
    "population":35856
  },
  {
    "state":"TX",
    "FIPS":48245,
    "county":"Jefferson County",
    "number":110826.82999999991,
    "rate":440.8316096800366,
    "population":251404
  },
  {
    "state":"TX",
    "FIPS":48249,
    "county":"Jim Wells County",
    "number":2149.84,
    "rate":51.62424358851216,
    "population":41644
  },
  {
    "state":"TX",
    "FIPS":48251,
    "county":"Johnson County",
    "number":2904.1500000000005,
    "rate":18.915847065720058,
    "population":153530
  },
  {
    "state":"TX",
    "FIPS":48253,
    "county":"Jones County",
    "number":95.57,
    "rate":4.800100452034154,
    "population":19910
  },
  {
    "state":"TX",
    "FIPS":48257,
    "county":"Kaufman County",
    "number":1072.12,
    "rate":10.049868766404197,
    "population":106680
  },
  {
    "state":"TX",
    "FIPS":48259,
    "county":"Kendall County",
    "number":1520.6799999999998,
    "rate":42.525797701277995,
    "population":35759
  },
  {
    "state":"TX",
    "FIPS":48265,
    "county":"Kerr County",
    "number":604.9999999999999,
    "rate":12.149082292461541,
    "population":49798
  },
  {
    "state":"TX",
    "FIPS":48273,
    "county":"Kleberg County",
    "number":39287.96000000001,
    "rate":1220.881292728403,
    "population":32180
  },
  {
    "state":"TX",
    "FIPS":48277,
    "county":"Lamar County",
    "number":761.4499999999999,
    "rate":15.272986200256737,
    "population":49856
  },
  {
    "state":"TX",
    "FIPS":48279,
    "county":"Lamb County",
    "number":205.42,
    "rate":14.745531548345417,
    "population":13931
  },
  {
    "state":"TX",
    "FIPS":48281,
    "county":"Lampasas County",
    "number":47.24,
    "rate":2.3524724864299587,
    "population":20081
  },
  {
    "state":"TX",
    "FIPS":48285,
    "county":"Lavaca County",
    "number":357.60999999999996,
    "rate":18.381392958108457,
    "population":19455
  },
  {
    "state":"TX",
    "FIPS":48287,
    "county":"Lee County",
    "number":77.21000000000001,
    "rate":4.665820642978004,
    "population":16548
  },
  {
    "state":"TX",
    "FIPS":48291,
    "county":"Liberty County",
    "number":5766.23,
    "rate":75.36471879860412,
    "population":76511
  },
  {
    "state":"TX",
    "FIPS":48293,
    "county":"Limestone County",
    "number":402.10999999999996,
    "rate":16.992478025693032,
    "population":23664
  },
  {
    "state":"TX",
    "FIPS":48297,
    "county":"Live Oak County",
    "number":107.04999999999998,
    "rate":9.17466575248543,
    "population":11668
  },
  {
    "state":"TX",
    "FIPS":48299,
    "county":"Llano County",
    "number":43.35,
    "rate":2.2671408399142305,
    "population":19121
  },
  {
    "state":"TX",
    "FIPS":48303,
    "county":"Lubbock County",
    "number":26707.38000000003,
    "rate":93.35111291314814,
    "population":286096
  },
  {
    "state":"TX",
    "FIPS":48305,
    "county":"Lynn County",
    "number":46.269999999999996,
    "rate":8.009347412151635,
    "population":5777
  },
  {
    "state":"TX",
    "FIPS":48317,
    "county":"Martin County",
    "number":89.6,
    "rate":17.91283486605358,
    "population":5002
  },
  {
    "state":"TX",
    "FIPS":48321,
    "county":"Matagorda County",
    "number":1289.81,
    "rate":35.27347809440464,
    "population":36566
  },
  {
    "state":"TX",
    "FIPS":48323,
    "county":"Maverick County",
    "number":723.2199999999999,
    "rate":12.968834056593622,
    "population":55766
  },
  {
    "state":"TX",
    "FIPS":48309,
    "county":"McLennan County",
    "number":13778.78000000002,
    "rate":57.528798259787735,
    "population":239511
  },
  {
    "state":"TX",
    "FIPS":48325,
    "county":"Medina County",
    "number":1530.8499999999997,
    "rate":32.66370793948833,
    "population":46867
  },
  {
    "state":"TX",
    "FIPS":48329,
    "county":"Midland County",
    "number":22427.380000000005,
    "rate":152.47385954177716,
    "population":147090
  },
  {
    "state":"TX",
    "FIPS":48331,
    "county":"Milam County",
    "number":92.03,
    "rate":3.811870935674937,
    "population":24143
  },
  {
    "state":"TX",
    "FIPS":48337,
    "county":"Montague County",
    "number":321.00000000000006,
    "rate":16.43709355317733,
    "population":19529
  },
  {
    "state":"TX",
    "FIPS":48339,
    "county":"Montgomery County",
    "number":19655.849999999995,
    "rate":40.51758434528434,
    "population":485119
  },
  {
    "state":"TX",
    "FIPS":48347,
    "county":"Nacogdoches County",
    "number":3782.3200000000006,
    "rate":57.446272079707185,
    "population":65841
  },
  {
    "state":"TX",
    "FIPS":48349,
    "county":"Navarro County",
    "number":450.12,
    "rate":9.351976896386944,
    "population":48131
  },
  {
    "state":"TX",
    "FIPS":48353,
    "county":"Nolan County",
    "number":164.32999999999998,
    "rate":11.04590979364119,
    "population":14877
  },
  {
    "state":"TX",
    "FIPS":48355,
    "county":"Nueces County",
    "number":63172.18999999992,
    "rate":181.56423794236224,
    "population":347933
  },
  {
    "state":"TX",
    "FIPS":48357,
    "county":"Ochiltree County",
    "number":12.12,
    "rate":1.1411354863007248,
    "population":10621
  },
  {
    "state":"TX",
    "FIPS":48361,
    "county":"Orange County",
    "number":1441.8,
    "rate":17.381345613675546,
    "population":82951
  },
  {
    "state":"TX",
    "FIPS":48363,
    "county":"Palo Pinto County",
    "number":135.47,
    "rate":4.858515941613169,
    "population":27883
  },
  {
    "state":"TX",
    "FIPS":48365,
    "county":"Panola County",
    "number":147.14,
    "rate":6.13134427868989,
    "population":23998
  },
  {
    "state":"TX",
    "FIPS":48367,
    "county":"Parker County",
    "number":3829.4500000000007,
    "rate":31.976836427098213,
    "population":119757
  },
  {
    "state":"TX",
    "FIPS":48371,
    "county":"Pecos County",
    "number":39.06,
    "rate":2.5052915143351937,
    "population":15591
  },
  {
    "state":"TX",
    "FIPS":48373,
    "county":"Polk County",
    "number":1442.02,
    "rate":31.5230079790141,
    "population":45745
  },
  {
    "state":"TX",
    "FIPS":48375,
    "county":"Potter County",
    "number":29343.55000000002,
    "rate":239.04353422291754,
    "population":122754
  },
  {
    "state":"TX",
    "FIPS":48381,
    "county":"Randall County",
    "number":656.56,
    "rate":5.256811612768921,
    "population":124897
  },
  {
    "state":"TX",
    "FIPS":48387,
    "county":"Red River County",
    "number":14.29,
    "rate":1.1241346758967903,
    "population":12712
  },
  {
    "state":"TX",
    "FIPS":48389,
    "county":"Reeves County",
    "number":13.06,
    "rate":0.9401094154909301,
    "population":13892
  },
  {
    "state":"TX",
    "FIPS":48395,
    "county":"Robertson County",
    "number":246.17999999999998,
    "rate":14.929047907822923,
    "population":16490
  },
  {
    "state":"TX",
    "FIPS":48397,
    "county":"Rockwall County",
    "number":1907.6299999999997,
    "rate":22.98570946597262,
    "population":82992
  },
  {
    "state":"TX",
    "FIPS":48401,
    "county":"Rusk County",
    "number":493.51000000000005,
    "rate":8.853308935651114,
    "population":55743
  },
  {
    "state":"TX",
    "FIPS":48403,
    "county":"Sabine County",
    "number":135.1,
    "rate":12.904766453338429,
    "population":10469
  },
  {
    "state":"TX",
    "FIPS":48405,
    "county":"San Augustine County",
    "number":85.22,
    "rate":9.644635581711182,
    "population":8836
  },
  {
    "state":"TX",
    "FIPS":48407,
    "county":"San Jacinto County",
    "number":64.34,
    "rate":2.382962962962963,
    "population":27000
  },
  {
    "state":"TX",
    "FIPS":48409,
    "county":"San Patricio County",
    "number":1367.7899999999997,
    "rate":20.923178119072382,
    "population":65372
  },
  {
    "state":"TX",
    "FIPS":48419,
    "county":"Shelby County",
    "number":121.69000000000001,
    "rate":4.6825457903647845,
    "population":25988
  },
  {
    "state":"TX",
    "FIPS":48423,
    "county":"Smith County",
    "number":7498.540000000001,
    "rate":34.88650373823515,
    "population":214941
  },
  {
    "state":"TX",
    "FIPS":48425,
    "county":"Somervell County",
    "number":530.2900000000001,
    "rate":61.70467768210381,
    "population":8594
  },
  {
    "state":"TX",
    "FIPS":48427,
    "county":"Starr County",
    "number":900.8900000000001,
    "rate":14.541976723539573,
    "population":61951
  },
  {
    "state":"TX",
    "FIPS":48429,
    "county":"Stephens County",
    "number":79.71000000000001,
    "rate":8.329153605015675,
    "population":9570
  },
  {
    "state":"TX",
    "FIPS":48439,
    "county":"Tarrant County",
    "number":228886.92999999996,
    "rate":121.56588886256904,
    "population":1882822
  },
  {
    "state":"TX",
    "FIPS":48441,
    "county":"Taylor County",
    "number":2797.6600000000003,
    "rate":20.861868400644276,
    "population":134104
  },
  {
    "state":"TX",
    "FIPS":48445,
    "county":"Terry County",
    "number":518.24,
    "rate":41.09754163362411,
    "population":12610
  },
  {
    "state":"TX",
    "FIPS":48449,
    "county":"Titus County",
    "number":380.85,
    "rate":11.64928272107179,
    "population":32693
  },
  {
    "state":"TX",
    "FIPS":48451,
    "county":"Tom Green County",
    "number":2971.8399999999992,
    "rate":26.178768685969988,
    "population":113521
  },
  {
    "state":"TX",
    "FIPS":48453,
    "county":"Travis County",
    "number":138551.5899999999,
    "rate":126.28847401887141,
    "population":1097104
  },
  {
    "state":"TX",
    "FIPS":48455,
    "county":"Trinity County",
    "number":17.64,
    "rate":1.2335664335664336,
    "population":14300
  },
  {
    "state":"TX",
    "FIPS":48457,
    "county":"Tyler County",
    "number":226.10999999999999,
    "rate":10.540275964944993,
    "population":21452
  },
  {
    "state":"TX",
    "FIPS":48459,
    "county":"Upshur County",
    "number":23.13,
    "rate":0.5789447336804165,
    "population":39952
  },
  {
    "state":"TX",
    "FIPS":48463,
    "county":"Uvalde County",
    "number":288.27000000000004,
    "rate":10.772421524663677,
    "population":26760
  },
  {
    "state":"TX",
    "FIPS":48465,
    "county":"Val Verde County",
    "number":809.3299999999999,
    "rate":16.53279676424325,
    "population":48953
  },
  {
    "state":"TX",
    "FIPS":48467,
    "county":"Van Zandt County",
    "number":454.2200000000001,
    "rate":8.675771177537964,
    "population":52355
  },
  {
    "state":"TX",
    "FIPS":48469,
    "county":"Victoria County",
    "number":6699.419999999995,
    "rate":75.0416685335364,
    "population":89276
  },
  {
    "state":"TX",
    "FIPS":48471,
    "county":"Walker County",
    "number":1686.3399999999997,
    "rate":24.562164996504304,
    "population":68656
  },
  {
    "state":"TX",
    "FIPS":48473,
    "county":"Waller County",
    "number":173.08,
    "rate":3.9023290420039234,
    "population":44353
  },
  {
    "state":"TX",
    "FIPS":48477,
    "county":"Washington County",
    "number":48.02,
    "rate":1.4179412980570485,
    "population":33866
  },
  {
    "state":"TX",
    "FIPS":48479,
    "county":"Webb County",
    "number":8279.229999999998,
    "rate":31.84490703345564,
    "population":259986
  },
  {
    "state":"TX",
    "FIPS":48481,
    "county":"Wharton County",
    "number":576.98,
    "rate":14.022407465914892,
    "population":41147
  },
  {
    "state":"TX",
    "FIPS":48483,
    "county":"Wheeler County",
    "number":18.05,
    "rate":3.2191902978419833,
    "population":5607
  },
  {
    "state":"TX",
    "FIPS":48485,
    "county":"Wichita County",
    "number":7302.849999999994,
    "rate":55.44980334391273,
    "population":131702
  },
  {
    "state":"TX",
    "FIPS":48487,
    "county":"Wilbarger County",
    "number":63.08,
    "rate":4.756446991404011,
    "population":13262
  },
  {
    "state":"TX",
    "FIPS":48489,
    "county":"Willacy County",
    "number":290.74999999999994,
    "rate":13.151942823540052,
    "population":22107
  },
  {
    "state":"TX",
    "FIPS":48491,
    "county":"Williamson County",
    "number":19824.090000000015,
    "rate":43.417419890361906,
    "population":456593
  },
  {
    "state":"TX",
    "FIPS":48493,
    "county":"Wilson County",
    "number":509.19000000000005,
    "rate":11.45998379546273,
    "population":44432
  },
  {
    "state":"TX",
    "FIPS":48497,
    "county":"Wise County",
    "number":661.0100000000001,
    "rate":10.946230148873104,
    "population":60387
  },
  {
    "state":"TX",
    "FIPS":48499,
    "county":"Wood County",
    "number":116.31,
    "rate":2.7350970017636684,
    "population":42525
  },
  {
    "state":"TX",
    "FIPS":48501,
    "county":"Yoakum County",
    "number":114.22,
    "rate":14.245447742579195,
    "population":8018
  },
  {
    "state":"TX",
    "FIPS":48503,
    "county":"Young County",
    "number":399.36000000000007,
    "rate":21.83488244942592,
    "population":18290
  },
  {
    "state":"UT",
    "FIPS":49001,
    "county":"Beaver County",
    "number":41.03,
    "rate":6.325932778291706,
    "population":6486
  },
  {
    "state":"UT",
    "FIPS":49003,
    "county":"Box Elder County",
    "number":723.7999999999997,
    "rate":14.398535876981832,
    "population":50269
  },
  {
    "state":"UT",
    "FIPS":49005,
    "county":"Cache County",
    "number":336.42999999999995,
    "rate":2.9013090946722087,
    "population":115958
  },
  {
    "state":"UT",
    "FIPS":49007,
    "county":"Carbon County",
    "number":112.61,
    "rate":5.298296791192246,
    "population":21254
  },
  {
    "state":"UT",
    "FIPS":49011,
    "county":"Davis County",
    "number":44647.75000000003,
    "rate":141.2823003752952,
    "population":316018
  },
  {
    "state":"UT",
    "FIPS":49013,
    "county":"Duchesne County",
    "number":69.28,
    "rate":3.634646660720844,
    "population":19061
  },
  {
    "state":"UT",
    "FIPS":49015,
    "county":"Emery County",
    "number":70.33,
    "rate":6.451701678745069,
    "population":10901
  },
  {
    "state":"UT",
    "FIPS":49019,
    "county":"Grand County",
    "number":49.6,
    "rate":5.309923991007388,
    "population":9341
  },
  {
    "state":"UT",
    "FIPS":49021,
    "county":"Iron County",
    "number":173.49,
    "rate":3.712604322704901,
    "population":46730
  },
  {
    "state":"UT",
    "FIPS":49023,
    "county":"Juab County",
    "number":314.61,
    "rate":30.46185127807901,
    "population":10328
  },
  {
    "state":"UT",
    "FIPS":49025,
    "county":"Kane County",
    "number":25.66,
    "rate":3.555493972564778,
    "population":7217
  },
  {
    "state":"UT",
    "FIPS":49035,
    "county":"Salt Lake County",
    "number":176670.84999999983,
    "rate":165.98132096707806,
    "population":1064402
  },
  {
    "state":"UT",
    "FIPS":49037,
    "county":"San Juan County",
    "number":11.26,
    "rate":0.755755419826834,
    "population":14899
  },
  {
    "state":"UT",
    "FIPS":49039,
    "county":"Sanpete County",
    "number":54.879999999999995,
    "rate":1.9579721003246635,
    "population":28029
  },
  {
    "state":"UT",
    "FIPS":49041,
    "county":"Sevier County",
    "number":44.51,
    "rate":2.1466120086809743,
    "population":20735
  },
  {
    "state":"UT",
    "FIPS":49043,
    "county":"Summit County",
    "number":52.31,
    "rate":1.3804660491383633,
    "population":37893
  },
  {
    "state":"UT",
    "FIPS":49045,
    "county":"Tooele County",
    "number":657.01,
    "rate":10.983116014710799,
    "population":59820
  },
  {
    "state":"UT",
    "FIPS":49047,
    "county":"Uintah County",
    "number":199.03,
    "rate":5.746333294837741,
    "population":34636
  },
  {
    "state":"UT",
    "FIPS":49049,
    "county":"Utah County",
    "number":44251.65000000001,
    "rate":82.00794289124208,
    "population":539602
  },
  {
    "state":"UT",
    "FIPS":49051,
    "county":"Wasatch County",
    "number":52.82,
    "rate":2.0816583904784425,
    "population":25374
  },
  {
    "state":"UT",
    "FIPS":49053,
    "county":"Washington County",
    "number":2850.74,
    "rate":19.708800287604653,
    "population":144643
  },
  {
    "state":"UT",
    "FIPS":49057,
    "county":"Weber County",
    "number":41140.71,
    "rate":173.92707364504946,
    "population":236540
  },
  {
    "state":"VA",
    "FIPS":51001,
    "county":"Accomack County",
    "number":98.49,
    "rate":2.9565034671149397,
    "population":33313
  },
  {
    "state":"VA",
    "FIPS":51003,
    "county":"Albemarle County",
    "number":23447.5,
    "rate":229.8098598451436,
    "population":102030
  },
  {
    "state":"VA",
    "FIPS":51510,
    "county":"Alexandria City",
    "number":6188.970000000001,
    "rate":42.12074809097963,
    "population":146934
  },
  {
    "state":"VA",
    "FIPS":51005,
    "county":"Alleghany County",
    "number":159.77999999999997,
    "rate":9.873323858369893,
    "population":16183
  },
  {
    "state":"VA",
    "FIPS":51007,
    "county":"Amelia County",
    "number":10.74,
    "rate":0.8426834052569636,
    "population":12745
  },
  {
    "state":"VA",
    "FIPS":51009,
    "county":"Amherst County",
    "number":1104.6299999999999,
    "rate":34.04623208506703,
    "population":32445
  },
  {
    "state":"VA",
    "FIPS":51011,
    "county":"Appomattox County",
    "number":275.59,
    "rate":18.197966191230847,
    "population":15144
  },
  {
    "state":"VA",
    "FIPS":51013,
    "county":"Arlington County",
    "number":23883.379999999997,
    "rate":107.60848310632717,
    "population":221947
  },
  {
    "state":"VA",
    "FIPS":51015,
    "county":"Augusta County",
    "number":926.85,
    "rate":12.59255736858552,
    "population":73603
  },
  {
    "state":"VA",
    "FIPS":51019,
    "county":"Bedford City",
    "number":1784.6999999999998,
    "rate":23.66003367315825,
    "population":75431
  },
  {
    "state":"VA",
    "FIPS":51021,
    "county":"Bland County",
    "number":138.58999999999997,
    "rate":20.654247391952307,
    "population":6710
  },
  {
    "state":"VA",
    "FIPS":51023,
    "county":"Botetourt County",
    "number":15.22,
    "rate":0.45902825949271653,
    "population":33157
  },
  {
    "state":"VA",
    "FIPS":51520,
    "county":"Bristol City",
    "number":430.52000000000004,
    "rate":24.29022793951704,
    "population":17724
  },
  {
    "state":"VA",
    "FIPS":51027,
    "county":"Buchanan County",
    "number":426.3299999999999,
    "rate":17.88522045559424,
    "population":23837
  },
  {
    "state":"VA",
    "FIPS":51029,
    "county":"Buckingham County",
    "number":327.16999999999996,
    "rate":19.196737663556885,
    "population":17043
  },
  {
    "state":"VA",
    "FIPS":51031,
    "county":"Campbell County",
    "number":431.79,
    "rate":7.890033987501371,
    "population":54726
  },
  {
    "state":"VA",
    "FIPS":51033,
    "county":"Caroline County",
    "number":56.35,
    "rate":1.9471992812467604,
    "population":28939
  },
  {
    "state":"VA",
    "FIPS":51035,
    "county":"Carroll County",
    "number":372.04,
    "rate":12.45405550162354,
    "population":29873
  },
  {
    "state":"VA",
    "FIPS":51037,
    "county":"Charlotte County",
    "number":49.95,
    "rate":4.024655547498187,
    "population":12411
  },
  {
    "state":"VA",
    "FIPS":51540,
    "county":"Charlottesville City",
    "number":10449.460000000001,
    "rate":234.70856449765282,
    "population":44521
  },
  {
    "state":"VA",
    "FIPS":51550,
    "county":"Chesapeake City",
    "number":15610.270000000011,
    "rate":68.40968850246294,
    "population":228188
  },
  {
    "state":"VA",
    "FIPS":51041,
    "county":"Chesterfield County",
    "number":151096.96999999997,
    "rate":466.5646750038597,
    "population":323850
  },
  {
    "state":"VA",
    "FIPS":51570,
    "county":"Colonial Heights City",
    "number":3530.8099999999986,
    "rate":201.6453455168474,
    "population":17510
  },
  {
    "state":"VA",
    "FIPS":51047,
    "county":"Culpeper County",
    "number":5054.549999999999,
    "rate":105.81677727301273,
    "population":47767
  },
  {
    "state":"VA",
    "FIPS":51049,
    "county":"Cumberland County",
    "number":26.740000000000002,
    "rate":2.7144452339863974,
    "population":9851
  },
  {
    "state":"VA",
    "FIPS":51590,
    "county":"Danville City",
    "number":3585.170000000001,
    "rate":83.79306315149817,
    "population":42786
  },
  {
    "state":"VA",
    "FIPS":51051,
    "county":"Dickenson County",
    "number":102.29,
    "rate":6.528593311207557,
    "population":15668
  },
  {
    "state":"VA",
    "FIPS":51053,
    "county":"Dinwiddie County",
    "number":266.48999999999995,
    "rate":9.483629893238431,
    "population":28100
  },
  {
    "state":"VA",
    "FIPS":51595,
    "county":"Emporia City",
    "number":294.91,
    "rate":51.7023141654979,
    "population":5704
  },
  {
    "state":"VA",
    "FIPS":51057,
    "county":"Essex County",
    "number":191.07999999999998,
    "rate":17.111131011014596,
    "population":11167
  },
  {
    "state":"VA",
    "FIPS":51059,
    "county":"Fairfax County",
    "number":58985.18999999995,
    "rate":52.61602069488422,
    "population":1121050
  },
  {
    "state":"VA",
    "FIPS":51610,
    "county":"Falls Church City",
    "number":1444.6099999999997,
    "rate":109.97335566382459,
    "population":13136
  },
  {
    "state":"VA",
    "FIPS":51061,
    "county":"Fauquier County",
    "number":2749.6399999999994,
    "rate":41.284026245064034,
    "population":66603
  },
  {
    "state":"VA",
    "FIPS":51063,
    "county":"Floyd County",
    "number":267.19,
    "rate":17.32075716323091,
    "population":15426
  },
  {
    "state":"VA",
    "FIPS":51065,
    "county":"Fluvanna County",
    "number":252.95,
    "rate":9.750221639748679,
    "population":25943
  },
  {
    "state":"VA",
    "FIPS":51620,
    "county":"Franklin City",
    "number":506.00999999999993,
    "rate":59.57263951024252,
    "population":8494
  },
  {
    "state":"VA",
    "FIPS":51067,
    "county":"Franklin County",
    "number":397.0400000000001,
    "rate":7.040714995034758,
    "population":56392
  },
  {
    "state":"VA",
    "FIPS":51630,
    "county":"Fredericksburg City",
    "number":6070.970000000001,
    "rate":223.9136207723233,
    "population":27113
  },
  {
    "state":"VA",
    "FIPS":51640,
    "county":"Galax City",
    "number":278.31,
    "rate":40.21239705244907,
    "population":6921
  },
  {
    "state":"VA",
    "FIPS":51073,
    "county":"Gloucester County",
    "number":1040.1499999999999,
    "rate":28.19293109990784,
    "population":36894
  },
  {
    "state":"VA",
    "FIPS":51075,
    "county":"Goochland County",
    "number":437.7700000000001,
    "rate":20.504449648711947,
    "population":21350
  },
  {
    "state":"VA",
    "FIPS":51077,
    "county":"Grayson County",
    "number":14.95,
    "rate":0.9849133671519862,
    "population":15179
  },
  {
    "state":"VA",
    "FIPS":51083,
    "county":"Halifax County",
    "number":1524.47,
    "rate":42.61390954324369,
    "population":35774
  },
  {
    "state":"VA",
    "FIPS":51650,
    "county":"Hampton City",
    "number":3267.4799999999996,
    "rate":23.877582338884707,
    "population":136843
  },
  {
    "state":"VA",
    "FIPS":51085,
    "county":"Hanover County",
    "number":11045.91,
    "rate":109.98396925282778,
    "population":100432
  },
  {
    "state":"VA",
    "FIPS":51660,
    "county":"Harrisonburg City",
    "number":1923.53,
    "rate":37.551343120412305,
    "population":51224
  },
  {
    "state":"VA",
    "FIPS":51087,
    "county":"Henrico County",
    "number":20764.39000000001,
    "rate":65.82862813103345,
    "population":315431
  },
  {
    "state":"VA",
    "FIPS":51089,
    "county":"Henry County",
    "number":216.5,
    "rate":4.098515826139634,
    "population":52824
  },
  {
    "state":"VA",
    "FIPS":51670,
    "county":"Hopewell City",
    "number":5557.35,
    "rate":248.96290654959236,
    "population":22322
  },
  {
    "state":"VA",
    "FIPS":51093,
    "county":"Isle of Wight County",
    "number":394.56000000000006,
    "rate":11.152063312605993,
    "population":35380
  },
  {
    "state":"VA",
    "FIPS":51095,
    "county":"James City",
    "number":12892.919999999998,
    "rate":185.42426508657883,
    "population":69532
  },
  {
    "state":"VA",
    "FIPS":51097,
    "county":"King and Queen County",
    "number":30.58,
    "rate":4.326542161856254,
    "population":7068
  },
  {
    "state":"VA",
    "FIPS":51101,
    "county":"King William County",
    "number":514.6500000000001,
    "rate":32.21192964887025,
    "population":15977
  },
  {
    "state":"VA",
    "FIPS":51103,
    "county":"Lancaster County",
    "number":18.46,
    "rate":1.6438112199465718,
    "population":11230
  },
  {
    "state":"VA",
    "FIPS":51105,
    "county":"Lee County",
    "number":167.72,
    "rate":6.56721093229962,
    "population":25539
  },
  {
    "state":"VA",
    "FIPS":51107,
    "county":"Loudoun County",
    "number":238757.68000000005,
    "rate":706.0390046279184,
    "population":338165
  },
  {
    "state":"VA",
    "FIPS":51109,
    "county":"Louisa County",
    "number":832.75,
    "rate":24.84560073992302,
    "population":33517
  },
  {
    "state":"VA",
    "FIPS":51680,
    "county":"Lynchburg City",
    "number":18044.710000000003,
    "rate":231.97292641538544,
    "population":77788
  },
  {
    "state":"VA",
    "FIPS":51113,
    "county":"Madison County",
    "number":24.58,
    "rate":1.861134246990232,
    "population":13207
  },
  {
    "state":"VA",
    "FIPS":51683,
    "county":"Manassas City",
    "number":3132.55,
    "rate":76.88748711403467,
    "population":40742
  },
  {
    "state":"VA",
    "FIPS":51685,
    "county":"Manassas Park City",
    "number":21.49,
    "rate":1.4251608196830028,
    "population":15079
  },
  {
    "state":"VA",
    "FIPS":51690,
    "county":"Martinsville City",
    "number":1276.3399999999997,
    "rate":92.84498436022403,
    "population":13747
  },
  {
    "state":"VA",
    "FIPS":51115,
    "county":"Mathews County",
    "number":10.02,
    "rate":1.123192467212196,
    "population":8921
  },
  {
    "state":"VA",
    "FIPS":51185,
    "county":"Tazewell County",
    "number":4215.54,
    "rate":95.27074670041584,
    "population":44248
  },
  {
    "state":"VA",
    "FIPS":51117,
    "county":"Mecklenburg County",
    "number":589.6600000000002,
    "rate":18.567290131620386,
    "population":31758
  },
  {
    "state":"VA",
    "FIPS":51119,
    "county":"Middlesex County",
    "number":38.66,
    "rate":3.570702872448508,
    "population":10827
  },
  {
    "state":"VA",
    "FIPS":51121,
    "county":"Montgomery County",
    "number":2090.5299999999997,
    "rate":21.855809139475802,
    "population":95651
  },
  {
    "state":"VA",
    "FIPS":51127,
    "county":"New Kent County",
    "number":532.23,
    "rate":27.818837549655026,
    "population":19132
  },
  {
    "state":"VA",
    "FIPS":51700,
    "county":"Newport News City",
    "number":20947.239999999998,
    "rate":116.05954999529051,
    "population":180487
  },
  {
    "state":"VA",
    "FIPS":51710,
    "county":"Norfolk City",
    "number":28635.54000000001,
    "rate":116.33369896404636,
    "population":246150
  },
  {
    "state":"VA",
    "FIPS":51131,
    "county":"Northampton County",
    "number":508.57000000000005,
    "rate":41.56002288142519,
    "population":12237
  },
  {
    "state":"VA",
    "FIPS":51133,
    "county":"Northumberland County",
    "number":726.4499999999999,
    "rate":58.80281690140845,
    "population":12354
  },
  {
    "state":"VA",
    "FIPS":51720,
    "county":"Norton City",
    "number":1025.03,
    "rate":253.15633489750553,
    "population":4049
  },
  {
    "state":"VA",
    "FIPS":51135,
    "county":"Nottoway County",
    "number":660.5999999999999,
    "rate":41.87373225152129,
    "population":15776
  },
  {
    "state":"VA",
    "FIPS":51137,
    "county":"Orange County",
    "number":1282.91,
    "rate":37.52625266914325,
    "population":34187
  },
  {
    "state":"VA",
    "FIPS":51139,
    "county":"Page County",
    "number":1228.56,
    "rate":51.46447721179624,
    "population":23872
  },
  {
    "state":"VA",
    "FIPS":51141,
    "county":"Patrick County",
    "number":734.6899999999998,
    "rate":39.92229527794381,
    "population":18403
  },
  {
    "state":"VA",
    "FIPS":51730,
    "county":"Petersburg City",
    "number":615.6099999999999,
    "rate":19.137936394441503,
    "population":32167
  },
  {
    "state":"VA",
    "FIPS":51143,
    "county":"Pittsylvania County",
    "number":224.63999999999996,
    "rate":3.571496708957359,
    "population":62898
  },
  {
    "state":"VA",
    "FIPS":51740,
    "county":"Portsmouth City",
    "number":2510.57,
    "rate":26.003873801089636,
    "population":96546
  },
  {
    "state":"VA",
    "FIPS":51145,
    "county":"Powhatan County",
    "number":715.6699999999998,
    "rate":25.454189785175696,
    "population":28116
  },
  {
    "state":"VA",
    "FIPS":51147,
    "county":"Prince Edward County",
    "number":593.8199999999999,
    "rate":25.583559519193486,
    "population":23211
  },
  {
    "state":"VA",
    "FIPS":51149,
    "county":"Prince George County",
    "number":580.7700000000001,
    "rate":15.681229074414086,
    "population":37036
  },
  {
    "state":"VA",
    "FIPS":51153,
    "county":"Prince William County",
    "number":5558.3499999999985,
    "rate":12.88964487299003,
    "population":431226
  },
  {
    "state":"VA",
    "FIPS":51155,
    "county":"Pulaski County",
    "number":687.6800000000001,
    "rate":19.791061098799897,
    "population":34747
  },
  {
    "state":"VA",
    "FIPS":51750,
    "county":"Radford City",
    "number":353.04,
    "rate":21.056900870809976,
    "population":16766
  },
  {
    "state":"VA",
    "FIPS":51157,
    "county":"Rappahannock County",
    "number":113.64,
    "rate":15.294751009421265,
    "population":7430
  },
  {
    "state":"VA",
    "FIPS":51760,
    "county":"Richmond City",
    "number":51468.16999999995,
    "rate":243.31841002997243,
    "population":211526
  },
  {
    "state":"VA",
    "FIPS":51159,
    "county":"Richmond County",
    "number":19.69,
    "rate":2.1752098983650026,
    "population":9052
  },
  {
    "state":"VA",
    "FIPS":51770,
    "county":"Roanoke City",
    "number":171424.20999999988,
    "rate":1751.3890620051275,
    "population":97879
  },
  {
    "state":"VA",
    "FIPS":51161,
    "county":"Roanoke County",
    "number":1457.8200000000002,
    "rate":15.67026045081747,
    "population":93031
  },
  {
    "state":"VA",
    "FIPS":51163,
    "county":"Rockbridge County",
    "number":197.45999999999998,
    "rate":8.818327974276526,
    "population":22392
  },
  {
    "state":"VA",
    "FIPS":51165,
    "county":"Rockingham County",
    "number":1031.05,
    "rate":13.32536348949919,
    "population":77375
  },
  {
    "state":"VA",
    "FIPS":51167,
    "county":"Russell County",
    "number":349.94000000000005,
    "rate":12.310560754239079,
    "population":28426
  },
  {
    "state":"VA",
    "FIPS":51775,
    "county":"Salem City",
    "number":6343.32,
    "rate":253.19602442821218,
    "population":25053
  },
  {
    "state":"VA",
    "FIPS":51169,
    "county":"Scott County",
    "number":443.91,
    "rate":19.46888294373054,
    "population":22801
  },
  {
    "state":"VA",
    "FIPS":51171,
    "county":"Shenandoah County",
    "number":1458.38,
    "rate":34.20135550291973,
    "population":42641
  },
  {
    "state":"VA",
    "FIPS":51173,
    "county":"Smyth County",
    "number":1347.8899999999999,
    "rate":42.302670809402755,
    "population":31863
  },
  {
    "state":"VA",
    "FIPS":51175,
    "county":"Southampton County",
    "number":151.40999999999997,
    "rate":8.221208665906497,
    "population":18417
  },
  {
    "state":"VA",
    "FIPS":51177,
    "county":"Spotsylvania County",
    "number":11252.910000000003,
    "rate":89.21180938186261,
    "population":126137
  },
  {
    "state":"VA",
    "FIPS":51179,
    "county":"Stafford County",
    "number":1029.6699999999998,
    "rate":7.662717489990622,
    "population":134374
  },
  {
    "state":"VA",
    "FIPS":51790,
    "county":"Staunton City",
    "number":193.14,
    "rate":8.074077170686843,
    "population":23921
  },
  {
    "state":"VA",
    "FIPS":51800,
    "county":"Suffolk City",
    "number":5001.219999999999,
    "rate":58.71147999013886,
    "population":85183
  },
  {
    "state":"VA",
    "FIPS":51183,
    "county":"Sussex County",
    "number":51.8,
    "rate":4.337995142785361,
    "population":11941
  },
  {
    "state":"VA",
    "FIPS":51810,
    "county":"Virginia Beach City",
    "number":65072.33000000003,
    "rate":145.97769248198065,
    "population":445769
  },
  {
    "state":"VA",
    "FIPS":51187,
    "county":"Warren County",
    "number":293.82,
    "rate":7.739641229618313,
    "population":37963
  },
  {
    "state":"VA",
    "FIPS":51191,
    "county":"Washington County",
    "number":44330.439999999995,
    "rate":804.939625587856,
    "population":55073
  },
  {
    "state":"VA",
    "FIPS":51820,
    "county":"Waynesboro City",
    "number":12,
    "rate":0.5685856432125088,
    "population":21105
  },
  {
    "state":"VA",
    "FIPS":51193,
    "county":"Westmoreland County",
    "number":128.32,
    "rate":7.333828656341087,
    "population":17497
  },
  {
    "state":"VA",
    "FIPS":51830,
    "county":"Williamsburg City",
    "number":1082.01,
    "rate":74.02408154888144,
    "population":14617
  },
  {
    "state":"VA",
    "FIPS":51840,
    "county":"Winchester City",
    "number":4788.000000000002,
    "rate":176.1719037456767,
    "population":27178
  },
  {
    "state":"VA",
    "FIPS":51195,
    "county":"Wise County",
    "number":971.6400000000001,
    "rate":23.798373665131773,
    "population":40828
  },
  {
    "state":"VA",
    "FIPS":51197,
    "county":"Wythe County",
    "number":1275.59,
    "rate":43.459848046063165,
    "population":29351
  },
  {
    "state":"VA",
    "FIPS":51199,
    "county":"York County",
    "number":1575.9099999999999,
    "rate":23.96967115870167,
    "population":65746
  },
  {
    "state":"VT",
    "FIPS":50003,
    "county":"Bennington County",
    "number":806.4100000000001,
    "rate":21.991600534511445,
    "population":36669
  },
  {
    "state":"VT",
    "FIPS":50005,
    "county":"Caledonia County",
    "number":58.43000000000001,
    "rate":1.879080237980383,
    "population":31095
  },
  {
    "state":"VT",
    "FIPS":50007,
    "county":"Chittenden County",
    "number":53218.46000000001,
    "rate":335.46472853801987,
    "population":158641
  },
  {
    "state":"VT",
    "FIPS":50015,
    "county":"Lamoille County",
    "number":49.66,
    "rate":1.9939771130295119,
    "population":24905
  },
  {
    "state":"VT",
    "FIPS":50017,
    "county":"Orange County",
    "number":19,
    "rate":0.6566895931980783,
    "population":28933
  },
  {
    "state":"VT",
    "FIPS":50019,
    "county":"Orleans County",
    "number":10.9,
    "rate":0.4013402555322361,
    "population":27159
  },
  {
    "state":"VT",
    "FIPS":50021,
    "county":"Rutland County",
    "number":416.5899999999999,
    "rate":6.843367556468171,
    "population":60875
  },
  {
    "state":"VT",
    "FIPS":50023,
    "county":"Washington County",
    "number":84.94,
    "rate":1.4311469056966184,
    "population":59351
  },
  {
    "state":"VT",
    "FIPS":50025,
    "county":"Windham County",
    "number":19,
    "rate":0.4318476259744983,
    "population":43997
  },
  {
    "state":"WA",
    "FIPS":53003,
    "county":"Asotin County",
    "number":530.37,
    "rate":24.247702647099164,
    "population":21873
  },
  {
    "state":"WA",
    "FIPS":53005,
    "county":"Benton County",
    "number":64601.10999999996,
    "rate":354.1805193096338,
    "population":182396
  },
  {
    "state":"WA",
    "FIPS":53007,
    "county":"Chelan County",
    "number":2624.8799999999997,
    "rate":35.63024297543097,
    "population":73670
  },
  {
    "state":"WA",
    "FIPS":53009,
    "county":"Clallam County",
    "number":1052.1799999999998,
    "rate":14.644527335486025,
    "population":71848
  },
  {
    "state":"WA",
    "FIPS":53011,
    "county":"Clark County",
    "number":3748.2999999999997,
    "rate":8.56744494348636,
    "population":437505
  },
  {
    "state":"WA",
    "FIPS":53015,
    "county":"Cowlitz County",
    "number":722.81,
    "rate":7.1018992503217815,
    "population":101777
  },
  {
    "state":"WA",
    "FIPS":53017,
    "county":"Douglas County",
    "number":38.27,
    "rate":0.9731722822631914,
    "population":39325
  },
  {
    "state":"WA",
    "FIPS":53019,
    "county":"Ferry County",
    "number":89.7,
    "rate":11.620676253400699,
    "population":7719
  },
  {
    "state":"WA",
    "FIPS":53021,
    "county":"Franklin County",
    "number":1332.5300000000002,
    "rate":15.52504339923804,
    "population":85831
  },
  {
    "state":"WA",
    "FIPS":53025,
    "county":"Grant County",
    "number":484.44,
    "rate":5.283570369077742,
    "population":91688
  },
  {
    "state":"WA",
    "FIPS":53027,
    "county":"Grays Harbor County",
    "number":1009.53,
    "rate":14.078934523394464,
    "population":71705
  },
  {
    "state":"WA",
    "FIPS":53029,
    "county":"Island County",
    "number":764.54,
    "rate":9.649627666288021,
    "population":79230
  },
  {
    "state":"WA",
    "FIPS":53033,
    "county":"King County",
    "number":248595.68999999983,
    "rate":123.77021258375537,
    "population":2008526
  },
  {
    "state":"WA",
    "FIPS":53035,
    "county":"Kitsap County",
    "number":7999.179999999995,
    "rate":31.411338299451405,
    "population":254659
  },
  {
    "state":"WA",
    "FIPS":53037,
    "county":"Kittitas County",
    "number":261.64000000000004,
    "rate":6.28368317402373,
    "population":41638
  },
  {
    "state":"WA",
    "FIPS":53039,
    "county":"Klickitat County",
    "number":260.40000000000003,
    "rate":12.632804540823754,
    "population":20613
  },
  {
    "state":"WA",
    "FIPS":53041,
    "county":"Lewis County",
    "number":2017.7199999999996,
    "rate":26.71344595668061,
    "population":75532
  },
  {
    "state":"WA",
    "FIPS":53043,
    "county":"Lincoln County",
    "number":430.9200000000001,
    "rate":41.2877263581489,
    "population":10437
  },
  {
    "state":"WA",
    "FIPS":53045,
    "county":"Mason County",
    "number":211.17,
    "rate":3.4759921647380287,
    "population":60751
  },
  {
    "state":"WA",
    "FIPS":53047,
    "county":"Okanogan County",
    "number":48.809999999999995,
    "rate":1.1841913727012467,
    "population":41218
  },
  {
    "state":"WA",
    "FIPS":53049,
    "county":"Pacific County",
    "number":107.17999999999999,
    "rate":5.212274473569032,
    "population":20563
  },
  {
    "state":"WA",
    "FIPS":53051,
    "county":"Pend Oreille County",
    "number":543.46,
    "rate":41.81104785351593,
    "population":12998
  },
  {
    "state":"WA",
    "FIPS":53053,
    "county":"Pierce County",
    "number":61816.70000000004,
    "rate":76.09492308241518,
    "population":812363
  },
  {
    "state":"WA",
    "FIPS":53055,
    "county":"San Juan County",
    "number":47.809999999999995,
    "rate":3.0274822695035457,
    "population":15792
  },
  {
    "state":"WA",
    "FIPS":53057,
    "county":"Skagit County",
    "number":1256.93,
    "rate":10.651497817889073,
    "population":118005
  },
  {
    "state":"WA",
    "FIPS":53061,
    "county":"Snohomish County",
    "number":36231.61999999998,
    "rate":49.43313386325246,
    "population":732942
  },
  {
    "state":"WA",
    "FIPS":53063,
    "county":"Spokane County",
    "number":152147.1699999998,
    "rate":319.83580125456126,
    "population":475704
  },
  {
    "state":"WA",
    "FIPS":53065,
    "county":"Stevens County",
    "number":151.81,
    "rate":3.481082320568677,
    "population":43610
  },
  {
    "state":"WA",
    "FIPS":53067,
    "county":"Thurston County",
    "number":68923.74000000002,
    "rate":266.4100373773255,
    "population":258713
  },
  {
    "state":"WA",
    "FIPS":53071,
    "county":"Walla Walla County",
    "number":395.49,
    "rate":6.651585993474385,
    "population":59458
  },
  {
    "state":"WA",
    "FIPS":53073,
    "county":"Whatcom County",
    "number":3631.86,
    "rate":17.73135377660172,
    "population":204827
  },
  {
    "state":"WA",
    "FIPS":53075,
    "county":"Whitman County",
    "number":675.3599999999999,
    "rate":14.49581455247907,
    "population":46590
  },
  {
    "state":"WA",
    "FIPS":53077,
    "county":"Yakima County",
    "number":5160.359999999997,
    "rate":20.91577125579094,
    "population":246721
  },
  {
    "state":"WI",
    "FIPS":55001,
    "county":"Adams County",
    "number":485.75,
    "rate":23.66280202650039,
    "population":20528
  },
  {
    "state":"WI",
    "FIPS":55003,
    "county":"Ashland County",
    "number":10.33,
    "rate":0.64939963538065,
    "population":15907
  },
  {
    "state":"WI",
    "FIPS":55005,
    "county":"Barron County",
    "number":127.89999999999999,
    "rate":2.7939795093605957,
    "population":45777
  },
  {
    "state":"WI",
    "FIPS":55009,
    "county":"Brown County",
    "number":5322.560000000001,
    "rate":21.036622479388498,
    "population":253014
  },
  {
    "state":"WI",
    "FIPS":55015,
    "county":"Calumet County",
    "number":14.81,
    "rate":0.2979639465636569,
    "population":49704
  },
  {
    "state":"WI",
    "FIPS":55017,
    "county":"Chippewa County",
    "number":149.23000000000002,
    "rate":2.366814166309813,
    "population":63051
  },
  {
    "state":"WI",
    "FIPS":55019,
    "county":"Clark County",
    "number":24.52,
    "rate":0.71144639489337,
    "population":34465
  },
  {
    "state":"WI",
    "FIPS":55021,
    "county":"Columbia County",
    "number":729.94,
    "rate":12.928215936664248,
    "population":56461
  },
  {
    "state":"WI",
    "FIPS":55025,
    "county":"Dane County",
    "number":1218.9599999999998,
    "rate":2.4219689127406894,
    "population":503293
  },
  {
    "state":"WI",
    "FIPS":55027,
    "county":"Dodge County",
    "number":318.37999999999994,
    "rate":3.594427384393063,
    "population":88576
  },
  {
    "state":"WI",
    "FIPS":55029,
    "county":"Door County",
    "number":38.59,
    "rate":1.3926380368098161,
    "population":27710
  },
  {
    "state":"WI",
    "FIPS":55031,
    "county":"Douglas County",
    "number":10.39,
    "rate":0.2371279897754245,
    "population":43816
  },
  {
    "state":"WI",
    "FIPS":55033,
    "county":"Dunn County",
    "number":152.85,
    "rate":3.4793990439335305,
    "population":43930
  },
  {
    "state":"WI",
    "FIPS":55035,
    "county":"Eau Claire County",
    "number":40059.00000000001,
    "rate":397.25307417691397,
    "population":100840
  },
  {
    "state":"WI",
    "FIPS":55037,
    "county":"Florence County",
    "number":40.84,
    "rate":9.132379248658319,
    "population":4472
  },
  {
    "state":"WI",
    "FIPS":55039,
    "county":"Fond Du Lac County",
    "number":243.44000000000003,
    "rate":2.393659908359718,
    "population":101702
  },
  {
    "state":"WI",
    "FIPS":55043,
    "county":"Grant County",
    "number":1192.7000000000003,
    "rate":23.390402227844135,
    "population":50991
  },
  {
    "state":"WI",
    "FIPS":55045,
    "county":"Green County",
    "number":218.71999999999997,
    "rate":5.930424880019522,
    "population":36881
  },
  {
    "state":"WI",
    "FIPS":55049,
    "county":"Iowa County",
    "number":77.17999999999999,
    "rate":3.2474964234620884,
    "population":23766
  },
  {
    "state":"WI",
    "FIPS":55051,
    "county":"Iron County",
    "number":54,
    "rate":9.093971034018189,
    "population":5938
  },
  {
    "state":"WI",
    "FIPS":55053,
    "county":"Jackson County",
    "number":490.21,
    "rate":23.939541925086683,
    "population":20477
  },
  {
    "state":"WI",
    "FIPS":55055,
    "county":"Jefferson County",
    "number":93.32999999999998,
    "rate":1.1057008814330394,
    "population":84408
  },
  {
    "state":"WI",
    "FIPS":55057,
    "county":"Juneau County",
    "number":66,
    "rate":2.4676587153219174,
    "population":26746
  },
  {
    "state":"WI",
    "FIPS":55059,
    "county":"Kenosha County",
    "number":12153.78,
    "rate":72.62404990678331,
    "population":167352
  },
  {
    "state":"WI",
    "FIPS":55061,
    "county":"Kewaunee County",
    "number":176.05999999999997,
    "rate":8.539140556795033,
    "population":20618
  },
  {
    "state":"WI",
    "FIPS":55063,
    "county":"La Crosse County",
    "number":69655.86,
    "rate":596.2104236033244,
    "population":116831
  },
  {
    "state":"WI",
    "FIPS":55065,
    "county":"Lafayette County",
    "number":158.13,
    "rate":9.372332859174964,
    "population":16872
  },
  {
    "state":"WI",
    "FIPS":55067,
    "county":"Langlade County",
    "number":486.2699999999999,
    "rate":24.647473262709713,
    "population":19729
  },
  {
    "state":"WI",
    "FIPS":55069,
    "county":"Lincoln County",
    "number":12.39,
    "rate":0.43516437201461083,
    "population":28472
  },
  {
    "state":"WI",
    "FIPS":55073,
    "county":"Marathon County",
    "number":1677.9,
    "rate":12.457587479304177,
    "population":134689
  },
  {
    "state":"WI",
    "FIPS":55075,
    "county":"Marinette County",
    "number":261.99,
    "rate":6.3148380254531435,
    "population":41488
  },
  {
    "state":"WI",
    "FIPS":55079,
    "county":"Milwaukee County",
    "number":204696.35000000047,
    "rate":214.44928922464825,
    "population":954521
  },
  {
    "state":"WI",
    "FIPS":55083,
    "county":"Oconto County",
    "number":447.28,
    "rate":11.952966328166754,
    "population":37420
  },
  {
    "state":"WI",
    "FIPS":55085,
    "county":"Oneida County",
    "number":134.45,
    "rate":3.761260001119006,
    "population":35746
  },
  {
    "state":"WI",
    "FIPS":55087,
    "county":"Outagamie County",
    "number":412.56000000000006,
    "rate":2.306389306618515,
    "population":178877
  },
  {
    "state":"WI",
    "FIPS":55089,
    "county":"Ozaukee County",
    "number":388.26000000000005,
    "rate":4.461220268872803,
    "population":87030
  },
  {
    "state":"WI",
    "FIPS":55091,
    "county":"Pepin County",
    "number":423.6,
    "rate":57.34398267226209,
    "population":7387
  },
  {
    "state":"WI",
    "FIPS":55093,
    "county":"Pierce County",
    "number":380.88,
    "rate":9.36421301076855,
    "population":40674
  },
  {
    "state":"WI",
    "FIPS":55097,
    "county":"Portage County",
    "number":52.59,
    "rate":0.7461585391807722,
    "population":70481
  },
  {
    "state":"WI",
    "FIPS":55099,
    "county":"Price County",
    "number":68.67,
    "rate":4.95097332372026,
    "population":13870
  },
  {
    "state":"WI",
    "FIPS":55101,
    "county":"Racine County",
    "number":41396.27,
    "rate":212.6342310319853,
    "population":194683
  },
  {
    "state":"WI",
    "FIPS":55105,
    "county":"Rock County",
    "number":69797.32,
    "rate":435.4956292779106,
    "population":160271
  },
  {
    "state":"WI",
    "FIPS":55111,
    "county":"Sauk County",
    "number":872.4300000000001,
    "rate":13.949952030700352,
    "population":62540
  },
  {
    "state":"WI",
    "FIPS":55113,
    "county":"Sawyer County",
    "number":125.3,
    "rate":7.575574365175333,
    "population":16540
  },
  {
    "state":"WI",
    "FIPS":55117,
    "county":"Sheboygan County",
    "number":2135.05,
    "rate":18.57340455146496,
    "population":114952
  },
  {
    "state":"WI",
    "FIPS":55109,
    "county":"St Croix County",
    "number":5579.35,
    "rate":65.46996010326215,
    "population":85220
  },
  {
    "state":"WI",
    "FIPS":55123,
    "county":"Vernon County",
    "number":101.57,
    "rate":3.362910969109029,
    "population":30203
  },
  {
    "state":"WI",
    "FIPS":55125,
    "county":"Vilas County",
    "number":20.84,
    "rate":0.9792772896010526,
    "population":21281
  },
  {
    "state":"WI",
    "FIPS":55127,
    "county":"Walworth County",
    "number":1034.03,
    "rate":10.034060474323642,
    "population":103052
  },
  {
    "state":"WI",
    "FIPS":55129,
    "county":"Washburn County",
    "number":138.86,
    "rate":8.76918219134828,
    "population":15835
  },
  {
    "state":"WI",
    "FIPS":55131,
    "county":"Washington County",
    "number":631.06,
    "rate":4.75980721219481,
    "population":132581
  },
  {
    "state":"WI",
    "FIPS":55133,
    "county":"Waukesha County",
    "number":14259.960000000003,
    "rate":36.319726557028,
    "population":392623
  },
  {
    "state":"WI",
    "FIPS":55135,
    "county":"Waupaca County",
    "number":155.26,
    "rate":2.9841623741062504,
    "population":52028
  },
  {
    "state":"WI",
    "FIPS":55137,
    "county":"Waushara County",
    "number":1207.03,
    "rate":49.31282428402173,
    "population":24477
  },
  {
    "state":"WI",
    "FIPS":55139,
    "county":"Winnebago County",
    "number":5465.66,
    "rate":32.41137611632293,
    "population":168634
  },
  {
    "state":"WI",
    "FIPS":55141,
    "county":"Wood County",
    "number":159.3,
    "rate":2.142453667590177,
    "population":74354
  },
  {
    "state":"WV",
    "FIPS":54001,
    "county":"Barbour County",
    "number":679.5400000000001,
    "rate":40.30486358244366,
    "population":16860
  },
  {
    "state":"WV",
    "FIPS":54003,
    "county":"Berkeley County",
    "number":20901.160000000003,
    "rate":195.22482299975718,
    "population":107062
  },
  {
    "state":"WV",
    "FIPS":54005,
    "county":"Boone County",
    "number":90.93,
    "rate":3.7270975939664717,
    "population":24397
  },
  {
    "state":"WV",
    "FIPS":54007,
    "county":"Braxton County",
    "number":903.84,
    "rate":62.398343113565765,
    "population":14485
  },
  {
    "state":"WV",
    "FIPS":54009,
    "county":"Brooke County",
    "number":411.6,
    "rate":17.300659913412634,
    "population":23791
  },
  {
    "state":"WV",
    "FIPS":54011,
    "county":"Cabell County",
    "number":37190.189999999995,
    "rate":383.66111311703713,
    "population":96935
  },
  {
    "state":"WV",
    "FIPS":54015,
    "county":"Clay County",
    "number":10.95,
    "rate":1.1836558209923251,
    "population":9251
  },
  {
    "state":"WV",
    "FIPS":54017,
    "county":"Doddridge County",
    "number":30.89,
    "rate":3.7579075425790753,
    "population":8220
  },
  {
    "state":"WV",
    "FIPS":54019,
    "county":"Fayette County",
    "number":1245.8500000000004,
    "rate":27.143884265109598,
    "population":45898
  },
  {
    "state":"WV",
    "FIPS":54021,
    "county":"Gilmer County",
    "number":15.25,
    "rate":1.7372977899293687,
    "population":8778
  },
  {
    "state":"WV",
    "FIPS":54023,
    "county":"Grant County",
    "number":953.63,
    "rate":80.53627227430115,
    "population":11841
  },
  {
    "state":"WV",
    "FIPS":54025,
    "county":"Greenbrier County",
    "number":775.63,
    "rate":21.662011953303917,
    "population":35806
  },
  {
    "state":"WV",
    "FIPS":54027,
    "county":"Hampshire County",
    "number":461.44,
    "rate":19.488132443618547,
    "population":23678
  },
  {
    "state":"WV",
    "FIPS":54029,
    "county":"Hancock County",
    "number":32029.65,
    "rate":1056.1082168293326,
    "population":30328
  },
  {
    "state":"WV",
    "FIPS":54031,
    "county":"Hardy County",
    "number":172.60999999999999,
    "rate":12.444844989185292,
    "population":13870
  },
  {
    "state":"WV",
    "FIPS":54033,
    "county":"Harrison County",
    "number":42703.43000000001,
    "rate":617.5656562735005,
    "population":69148
  },
  {
    "state":"WV",
    "FIPS":54035,
    "county":"Jackson County",
    "number":215.11999999999998,
    "rate":7.346994535519125,
    "population":29280
  },
  {
    "state":"WV",
    "FIPS":54037,
    "county":"Jefferson County",
    "number":1706.72,
    "rate":31.278085254554117,
    "population":54566
  },
  {
    "state":"WV",
    "FIPS":54039,
    "county":"Kanawha County",
    "number":37503.27000000002,
    "rate":195.17501769432545,
    "population":192152
  },
  {
    "state":"WV",
    "FIPS":54041,
    "county":"Lewis County",
    "number":834.5300000000001,
    "rate":50.80543041519543,
    "population":16426
  },
  {
    "state":"WV",
    "FIPS":54043,
    "county":"Lincoln County",
    "number":99.88999999999999,
    "rate":4.616415565209353,
    "population":21638
  },
  {
    "state":"WV",
    "FIPS":54045,
    "county":"Logan County",
    "number":11192.59,
    "rate":308.0303280493175,
    "population":36336
  },
  {
    "state":"WV",
    "FIPS":54049,
    "county":"Marion County",
    "number":1522.3399999999997,
    "rate":26.80789617341997,
    "population":56787
  },
  {
    "state":"WV",
    "FIPS":54051,
    "county":"Marshall County",
    "number":1002.5800000000002,
    "rate":30.67494798678253,
    "population":32684
  },
  {
    "state":"WV",
    "FIPS":54059,
    "county":"Mingo County",
    "number":418.0300000000001,
    "rate":16.002985988821685,
    "population":26122
  },
  {
    "state":"WV",
    "FIPS":54053,
    "county":"Mason County",
    "number":1547.79,
    "rate":56.85805598413048,
    "population":27222
  },
  {
    "state":"WV",
    "FIPS":54047,
    "county":"McDowell County",
    "number":808.3100000000001,
    "rate":37.92389978417942,
    "population":21314
  },
  {
    "state":"WV",
    "FIPS":54055,
    "county":"Mercer County",
    "number":4751.490000000001,
    "rate":76.19695949196576,
    "population":62358
  },
  {
    "state":"WV",
    "FIPS":54057,
    "county":"Mineral County",
    "number":354.09,
    "rate":12.676404253034045,
    "population":27933
  },
  {
    "state":"WV",
    "FIPS":54061,
    "county":"Monongalia County",
    "number":14059.17000000001,
    "rate":139.84910127224447,
    "population":100531
  },
  {
    "state":"WV",
    "FIPS":54063,
    "county":"Monroe County",
    "number":266.66999999999996,
    "rate":19.765045953157422,
    "population":13492
  },
  {
    "state":"WV",
    "FIPS":54065,
    "county":"Morgan County",
    "number":4933.94,
    "rate":283.0230023518614,
    "population":17433
  },
  {
    "state":"WV",
    "FIPS":54067,
    "county":"Nicholas County",
    "number":903.5399999999998,
    "rate":34.417949108639334,
    "population":26252
  },
  {
    "state":"WV",
    "FIPS":54069,
    "county":"Ohio County",
    "number":6336.439999999992,
    "rate":143.8269475213363,
    "population":44056
  },
  {
    "state":"WV",
    "FIPS":54071,
    "county":"Pendleton County",
    "number":11.67,
    "rate":1.5493892724375995,
    "population":7532
  },
  {
    "state":"WV",
    "FIPS":54073,
    "county":"Pleasants County",
    "number":278.98,
    "rate":36.74657534246576,
    "population":7592
  },
  {
    "state":"WV",
    "FIPS":54075,
    "county":"Pocahontas County",
    "number":144.31,
    "rate":16.593078072898702,
    "population":8697
  },
  {
    "state":"WV",
    "FIPS":54077,
    "county":"Preston County",
    "number":276.6,
    "rate":8.156885874373343,
    "population":33910
  },
  {
    "state":"WV",
    "FIPS":54079,
    "county":"Putnam County",
    "number":798.36,
    "rate":14.108042199013942,
    "population":56589
  },
  {
    "state":"WV",
    "FIPS":54081,
    "county":"Raleigh County",
    "number":7979.170000000001,
    "rate":100.84641439801827,
    "population":79122
  },
  {
    "state":"WV",
    "FIPS":54083,
    "county":"Randolph County",
    "number":1890.27,
    "rate":64.25118966689327,
    "population":29420
  },
  {
    "state":"WV",
    "FIPS":54085,
    "county":"Ritchie County",
    "number":176.72,
    "rate":17.209075859382608,
    "population":10269
  },
  {
    "state":"WV",
    "FIPS":54087,
    "county":"Roane County",
    "number":407.24000000000007,
    "rate":27.68456832087016,
    "population":14710
  },
  {
    "state":"WV",
    "FIPS":54089,
    "county":"Summers County",
    "number":288.83,
    "rate":20.989026960249983,
    "population":13761
  },
  {
    "state":"WV",
    "FIPS":54091,
    "county":"Taylor County",
    "number":555.0500000000001,
    "rate":32.680758360810174,
    "population":16984
  },
  {
    "state":"WV",
    "FIPS":54093,
    "county":"Tucker County",
    "number":10.28,
    "rate":1.481054603083129,
    "population":6941
  },
  {
    "state":"WV",
    "FIPS":54095,
    "county":"Tyler County",
    "number":94.91999999999999,
    "rate":10.508136831617403,
    "population":9033
  },
  {
    "state":"WV",
    "FIPS":54097,
    "county":"Upshur County",
    "number":1034.0199999999998,
    "rate":42.19456459642535,
    "population":24506
  },
  {
    "state":"WV",
    "FIPS":54099,
    "county":"Wayne County",
    "number":226.64000000000001,
    "rate":5.438663851027069,
    "population":41672
  },
  {
    "state":"WV",
    "FIPS":54101,
    "county":"Webster County",
    "number":88.97000000000001,
    "rate":9.86801242236025,
    "population":9016
  },
  {
    "state":"WV",
    "FIPS":54103,
    "county":"Wetzel County",
    "number":139.5,
    "rate":8.495736906211937,
    "population":16420
  },
  {
    "state":"WV",
    "FIPS":54105,
    "county":"Wirt County",
    "number":74.49000000000001,
    "rate":12.829831209094042,
    "population":5806
  },
  {
    "state":"WV",
    "FIPS":54107,
    "county":"Wood County",
    "number":14757.729999999994,
    "rate":170.48936588070833,
    "population":86561
  },
  {
    "state":"WV",
    "FIPS":54109,
    "county":"Wyoming County",
    "number":1565.1599999999999,
    "rate":67.31581437357532,
    "population":23251
  },
  {
    "state":"WY",
    "FIPS":56001,
    "county":"Albany County",
    "number":29.1,
    "rate":0.7788453817948238,
    "population":37363
  },
  {
    "state":"WY",
    "FIPS":56003,
    "county":"Big Horn County",
    "number":16.8,
    "rate":1.4263881813550687,
    "population":11778
  },
  {
    "state":"WY",
    "FIPS":56005,
    "county":"Campbell County",
    "number":1135.19,
    "rate":23.700649309977663,
    "population":47897
  },
  {
    "state":"WY",
    "FIPS":56007,
    "county":"Carbon County",
    "number":11.05,
    "rate":0.7047643344601059,
    "population":15679
  },
  {
    "state":"WY",
    "FIPS":56009,
    "county":"Converse County",
    "number":25.26,
    "rate":1.8036415565869333,
    "population":14005
  },
  {
    "state":"WY",
    "FIPS":56013,
    "county":"Fremont County",
    "number":84.36999999999999,
    "rate":2.051550151975684,
    "population":41125
  },
  {
    "state":"WY",
    "FIPS":56021,
    "county":"Laramie County",
    "number":835.0900000000001,
    "rate":8.804415439277168,
    "population":94849
  },
  {
    "state":"WY",
    "FIPS":56025,
    "county":"Natrona County",
    "number":505.99,
    "rate":6.430495895076633,
    "population":78686
  },
  {
    "state":"WY",
    "FIPS":56029,
    "county":"Park County",
    "number":116.9,
    "rate":4.058323207776428,
    "population":28805
  },
  {
    "state":"WY",
    "FIPS":56031,
    "county":"Platte County",
    "number":78.57000000000001,
    "rate":8.994848311390957,
    "population":8735
  },
  {
    "state":"WY",
    "FIPS":56033,
    "county":"Sheridan County",
    "number":421.2,
    "rate":14.230691262923171,
    "population":29598
  },
  {
    "state":"WY",
    "FIPS":56035,
    "county":"Sublette County",
    "number":22.66,
    "rate":2.176334998079139,
    "population":10412
  },
  {
    "state":"WY",
    "FIPS":56037,
    "county":"Sweetwater County",
    "number":84.75,
    "rate":1.878532638811925,
    "population":45115
  },
  {
    "state":"WY",
    "FIPS":56039,
    "county":"Teton County",
    "number":35.08,
    "rate":1.6162919277552523,
    "population":21704
  },
  {
    "state":"WY",
    "FIPS":56041,
    "county":"Uinta County",
    "number":248.64,
    "rate":11.846205155081233,
    "population":20989
  },
  {
    "state":"WY",
    "FIPS":56043,
    "county":"Washakie County",
    "number":81.33999999999999,
    "rate":9.63629901670418,
    "population":8441
  },
  {
    "state":"WY",
    "FIPS":56045,
    "county":"Weston County",
    "number":67.38,
    "rate":9.556091334562472,
    "population":7051
  }
]

var payments2014 = [
  {
    "state":"AL",
    "FIPS":1001,
    "county":"Autauga County",
    "number":4658.51,
    "rate":84.40552979,
    "population":55192
  },
  {
    "state":"AL",
    "FIPS":1003,
    "county":"Baldwin County",
    "number":101872.77,
    "rate":534.5940145,
    "population":190561
  },
  {
    "state":"AL",
    "FIPS":1005,
    "county":"Barbour County",
    "number":1733.41,
    "rate":63.80102322,
    "population":27169
  },
  {
    "state":"AL",
    "FIPS":1007,
    "county":"Bibb County",
    "number":142.3,
    "rate":6.287001856,
    "population":22634
  },
  {
    "state":"AL",
    "FIPS":1009,
    "county":"Blount County",
    "number":2630.58,
    "rate":45.55274642,
    "population":57748
  },
  {
    "state":"AL",
    "FIPS":1011,
    "county":"Bullock County",
    "number":132.21,
    "rate":12.48559826,
    "population":10589
  },
  {
    "state":"AL",
    "FIPS":1013,
    "county":"Butler County",
    "number":1362.87,
    "rate":66.77789211,
    "population":20409
  },
  {
    "state":"AL",
    "FIPS":1015,
    "county":"Calhoun County",
    "number":26119.83,
    "rate":222.7438088,
    "population":117264
  },
  {
    "state":"AL",
    "FIPS":1017,
    "county":"Chambers County",
    "number":2844.28,
    "rate":83.44178132,
    "population":34087
  },
  {
    "state":"AL",
    "FIPS":1019,
    "county":"Cherokee County",
    "number":2687.95,
    "rate":103.3151401,
    "population":26017
  },
  {
    "state":"AL",
    "FIPS":1021,
    "county":"Chilton County",
    "number":2828.52,
    "rate":64.7125306,
    "population":43709
  },
  {
    "state":"AL",
    "FIPS":1023,
    "county":"Choctaw County",
    "number":193.73,
    "rate":14.28792684,
    "population":13559
  },
  {
    "state":"AL",
    "FIPS":1025,
    "county":"Clarke County",
    "number":3720.75,
    "rate":147.8365385,
    "population":25168
  },
  {
    "state":"AL",
    "FIPS":1027,
    "county":"Clay County",
    "number":1340.72,
    "rate":99.57073895,
    "population":13465
  },
  {
    "state":"AL",
    "FIPS":1029,
    "county":"Cleburne County",
    "number":39.44,
    "rate":2.64378603,
    "population":14918
  },
  {
    "state":"AL",
    "FIPS":1031,
    "county":"Coffee County",
    "number":7659.83,
    "rate":149.5563973,
    "population":51217
  },
  {
    "state":"AL",
    "FIPS":1033,
    "county":"Colbert County",
    "number":19009.58,
    "rate":348.9725185,
    "population":54473
  },
  {
    "state":"AL",
    "FIPS":1035,
    "county":"Conecuh County",
    "number":2080.76,
    "rate":159.9969243,
    "population":13005
  },
  {
    "state":"AL",
    "FIPS":1037,
    "county":"Coosa County",
    "number":12.61,
    "rate":1.1278061,
    "population":11181
  },
  {
    "state":"AL",
    "FIPS":1039,
    "county":"Covington County",
    "number":1350.28,
    "rate":35.71318998,
    "population":37809
  },
  {
    "state":"AL",
    "FIPS":1041,
    "county":"Crenshaw County",
    "number":320.97,
    "rate":22.97237332,
    "population":13972
  },
  {
    "state":"AL",
    "FIPS":1043,
    "county":"Cullman County",
    "number":13412.73,
    "rate":166.9059618,
    "population":80361
  },
  {
    "state":"AL",
    "FIPS":1045,
    "county":"Dale County",
    "number":2424.16,
    "rate":48.18445637,
    "population":50310
  },
  {
    "state":"AL",
    "FIPS":1047,
    "county":"Dallas County",
    "number":3469.45,
    "rate":80.9881183,
    "population":42839
  },
  {
    "state":"AL",
    "FIPS":1049,
    "county":"Dekalb County",
    "number":3317.7,
    "rate":46.77428451,
    "population":70930
  },
  {
    "state":"AL",
    "FIPS":1051,
    "county":"Elmore County",
    "number":2795.87,
    "rate":34.77796298,
    "population":80392
  },
  {
    "state":"AL",
    "FIPS":1053,
    "county":"Escambia County",
    "number":2809.79,
    "rate":73.84855971,
    "population":38048
  },
  {
    "state":"AL",
    "FIPS":1055,
    "county":"Etowah County",
    "number":16216.57,
    "rate":155.4442889,
    "population":104324
  },
  {
    "state":"AL",
    "FIPS":1057,
    "county":"Fayette County",
    "number":795.2,
    "rate":46.82605111,
    "population":16982
  },
  {
    "state":"AL",
    "FIPS":1059,
    "county":"Franklin County",
    "number":1802.71,
    "rate":56.93967151,
    "population":31660
  },
  {
    "state":"AL",
    "FIPS":1061,
    "county":"Geneva County",
    "number":1490.66,
    "rate":55.20554033,
    "population":27002
  },
  {
    "state":"AL",
    "FIPS":1063,
    "county":"Greene County",
    "number":359.41,
    "rate":40.71711793,
    "population":8827
  },
  {
    "state":"AL",
    "FIPS":1065,
    "county":"Hale County",
    "number":493.72,
    "rate":32.0805718,
    "population":15390
  },
  {
    "state":"AL",
    "FIPS":1067,
    "county":"Henry County",
    "number":396.24,
    "rate":22.97309833,
    "population":17248
  },
  {
    "state":"AL",
    "FIPS":1069,
    "county":"Houston County",
    "number":36138.78,
    "rate":349.6128396,
    "population":103368
  },
  {
    "state":"AL",
    "FIPS":1071,
    "county":"Jackson County",
    "number":2804.11,
    "rate":52.85986277,
    "population":53048
  },
  {
    "state":"AL",
    "FIPS":1073,
    "county":"Jefferson County",
    "number":677212.58,
    "rate":1029.271969,
    "population":657953
  },
  {
    "state":"AL",
    "FIPS":1077,
    "county":"Lauderdale County",
    "number":12039.49,
    "rate":129.8842428,
    "population":92694
  },
  {
    "state":"AL",
    "FIPS":1079,
    "county":"Lawrence County",
    "number":1789.68,
    "rate":52.98673614,
    "population":33776
  },
  {
    "state":"AL",
    "FIPS":1081,
    "county":"Lee County",
    "number":250590.57,
    "rate":1692.722035,
    "population":148040
  },
  {
    "state":"AL",
    "FIPS":1083,
    "county":"Limestone County",
    "number":2045.48,
    "rate":23.41357325,
    "population":87363
  },
  {
    "state":"AL",
    "FIPS":1085,
    "county":"Lowndes County",
    "number":323.86,
    "rate":29.81038292,
    "population":10864
  },
  {
    "state":"AL",
    "FIPS":1087,
    "county":"Macon County",
    "number":147.94,
    "rate":7.2271617,
    "population":20470
  },
  {
    "state":"AL",
    "FIPS":1089,
    "county":"Madison County",
    "number":87210.56,
    "rate":254.3560787,
    "population":342868
  },
  {
    "state":"AL",
    "FIPS":1091,
    "county":"Marengo County",
    "number":1858.05,
    "rate":90.88930196,
    "population":20443
  },
  {
    "state":"AL",
    "FIPS":1093,
    "county":"Marion County",
    "number":4439.81,
    "rate":145.4912177,
    "population":30516
  },
  {
    "state":"AL",
    "FIPS":1095,
    "county":"Marshall County",
    "number":8222.85,
    "rate":87.19605951,
    "population":94303
  },
  {
    "state":"AL",
    "FIPS":1097,
    "county":"Mobile County",
    "number":259139.69,
    "rate":626.0093247,
    "population":413955
  },
  {
    "state":"AL",
    "FIPS":1099,
    "county":"Monroe County",
    "number":1421.67,
    "rate":62.88071122,
    "population":22609
  },
  {
    "state":"AL",
    "FIPS":1101,
    "county":"Montgomery County",
    "number":416956.51,
    "rate":1817.389965,
    "population":229426
  },
  {
    "state":"AL",
    "FIPS":1103,
    "county":"Morgan County",
    "number":15208.62,
    "rate":126.6783278,
    "population":120057
  },
  {
    "state":"AL",
    "FIPS":1107,
    "county":"Pickens County",
    "number":1657.4,
    "rate":85.68031431,
    "population":19344
  },
  {
    "state":"AL",
    "FIPS":1109,
    "county":"Pike County",
    "number":5527.64,
    "rate":166.8570394,
    "population":33128
  },
  {
    "state":"AL",
    "FIPS":1111,
    "county":"Randolph County",
    "number":1200.01,
    "rate":52.96420532,
    "population":22657
  },
  {
    "state":"AL",
    "FIPS":1113,
    "county":"Russell County",
    "number":1829.94,
    "rate":31.69495635,
    "population":57736
  },
  {
    "state":"AL",
    "FIPS":1115,
    "county":"St Clair County",
    "number":3789.41,
    "rate":44.49492162,
    "population":85165
  },
  {
    "state":"AL",
    "FIPS":1117,
    "county":"Shelby County",
    "number":20844.32,
    "rate":103.7221777,
    "population":200963
  },
  {
    "state":"AL",
    "FIPS":1119,
    "county":"Sumter County",
    "number":697.04,
    "rate":51.9752442,
    "population":13411
  },
  {
    "state":"AL",
    "FIPS":1121,
    "county":"Talladega County",
    "number":6310.22,
    "rate":77.08739525,
    "population":81858
  },
  {
    "state":"AL",
    "FIPS":1123,
    "county":"Tallapoosa County",
    "number":4113.78,
    "rate":99.95577802,
    "population":41156
  },
  {
    "state":"AL",
    "FIPS":1125,
    "county":"Tuscaloosa County",
    "number":66195.24,
    "rate":333.2372145,
    "population":198643
  },
  {
    "state":"AL",
    "FIPS":1127,
    "county":"Walker County",
    "number":13370.11,
    "rate":202.1944802,
    "population":66125
  },
  {
    "state":"AL",
    "FIPS":1129,
    "county":"Washington County",
    "number":370.8,
    "rate":21.6994382,
    "population":17088
  },
  {
    "state":"AL",
    "FIPS":1131,
    "county":"Wilcox County",
    "number":384.28,
    "rate":33.75021957,
    "population":11386
  },
  {
    "state":"AL",
    "FIPS":1133,
    "county":"Winston County",
    "number":1457.02,
    "rate":60.24477982,
    "population":24185
  },
  {
    "state":"AK",
    "FIPS":2020,
    "county":"Anchorage Borough",
    "number":46145.96,
    "rate":154.5239809,
    "population":298633
  },
  {
    "state":"AK",
    "FIPS":2050,
    "county":"Bethel Census Area",
    "number":31.55,
    "rate":1.783796008,
    "population":17687
  },
  {
    "state":"AK",
    "FIPS":2070,
    "county":"Dillingham Census Area",
    "number":53.58,
    "rate":10.78502415,
    "population":4968
  },
  {
    "state":"AK",
    "FIPS":2090,
    "county":"Fairbanks North Star Borough",
    "number":891.94,
    "rate":8.899198819,
    "population":100227
  },
  {
    "state":"AK",
    "FIPS":2110,
    "county":"City and Borough of Juneau",
    "number":795.2,
    "rate":24.53488013,
    "population":32411
  },
  {
    "state":"AK",
    "FIPS":2122,
    "county":"Kenai Peninsula Borough",
    "number":1394.16,
    "rate":24.47698304,
    "population":56958
  },
  {
    "state":"AK",
    "FIPS":2130,
    "county":"Ketchikan Gateway Borough",
    "number":54.16,
    "rate":3.950689328,
    "population":13709
  },
  {
    "state":"AK",
    "FIPS":2150,
    "county":"Kodiak Island Borough",
    "number":114.86,
    "rate":8.160568384,
    "population":14075
  },
  {
    "state":"AK",
    "FIPS":2170,
    "county":"Matanuska-Susitna Borough",
    "number":3171.7,
    "rate":33.81415382,
    "population":93798
  },
  {
    "state":"AK",
    "FIPS":2188,
    "county":"Northwest Arctic Borough",
    "number":15.66,
    "rate":2.03139188,
    "population":7709
  },
  {
    "state":"AK",
    "FIPS":2220,
    "county":"Sitka Borough",
    "number":116.4,
    "rate":12.84768212,
    "population":9060
  },
  {
    "state":"AK",
    "FIPS":2261,
    "county":"Valdez-Cordova Census Area",
    "number":15.84,
    "rate":1.62695152,
    "population":9736
  },
  {
    "state":"AZ",
    "FIPS":4001,
    "county":"Apache County",
    "number":143.1,
    "rate":1.962666813,
    "population":72911
  },
  {
    "state":"AZ",
    "FIPS":4003,
    "county":"Cochise County",
    "number":3947.81,
    "rate":29.92601521,
    "population":131919
  },
  {
    "state":"AZ",
    "FIPS":4005,
    "county":"Coconino County",
    "number":2363.64,
    "rate":17.38622572,
    "population":135949
  },
  {
    "state":"AZ",
    "FIPS":4007,
    "county":"Gila County",
    "number":1803.97,
    "rate":34.01983895,
    "population":53027
  },
  {
    "state":"AZ",
    "FIPS":4009,
    "county":"Graham County",
    "number":886.06,
    "rate":23.9832183,
    "population":36945
  },
  {
    "state":"AZ",
    "FIPS":4012,
    "county":"La Paz County",
    "number":109.92,
    "rate":5.417714032,
    "population":20289
  },
  {
    "state":"AZ",
    "FIPS":4013,
    "county":"Maricopa County",
    "number":1150000,
    "rate":290.6454084,
    "population":3940000
  },
  {
    "state":"AZ",
    "FIPS":4015,
    "county":"Mohave County",
    "number":19430.7,
    "rate":95.63576048,
    "population":203174
  },
  {
    "state":"AZ",
    "FIPS":4017,
    "county":"Navajo County",
    "number":1597,
    "rate":14.92900078,
    "population":106973
  },
  {
    "state":"AZ",
    "FIPS":4019,
    "county":"Pima County",
    "number":211350.45,
    "rate":212.8201862,
    "population":993094
  },
  {
    "state":"AZ",
    "FIPS":4021,
    "county":"Pinal County",
    "number":52136.32,
    "rate":134.3352589,
    "population":388106
  },
  {
    "state":"AZ",
    "FIPS":4023,
    "county":"Santa Cruz County",
    "number":448.48,
    "rate":9.455020766,
    "population":47433
  },
  {
    "state":"AZ",
    "FIPS":4025,
    "county":"Yavapai County",
    "number":28070.62,
    "rate":132.0914408,
    "population":212509
  },
  {
    "state":"AZ",
    "FIPS":4027,
    "county":"Yuma County",
    "number":103801.16,
    "rate":513.1964166,
    "population":202264
  },
  {
    "state":"AR",
    "FIPS":5001,
    "county":"Arkansas County",
    "number":2979.05,
    "rate":156.8416342,
    "population":18994
  },
  {
    "state":"AR",
    "FIPS":5003,
    "county":"Ashley County",
    "number":1028.67,
    "rate":47.85179327,
    "population":21497
  },
  {
    "state":"AR",
    "FIPS":5005,
    "county":"Baxter County",
    "number":2427.44,
    "rate":59.09487061,
    "population":41077
  },
  {
    "state":"AR",
    "FIPS":5007,
    "county":"Benton County",
    "number":152735.53,
    "rate":656.2524115,
    "population":232739
  },
  {
    "state":"AR",
    "FIPS":5009,
    "county":"Boone County",
    "number":2496.12,
    "rate":66.86095412,
    "population":37333
  },
  {
    "state":"AR",
    "FIPS":5011,
    "county":"Bradley County",
    "number":1751.7,
    "rate":155.0451407,
    "population":11298
  },
  {
    "state":"AR",
    "FIPS":5013,
    "county":"Calhoun County",
    "number":155.6,
    "rate":29.36403095,
    "population":5299
  },
  {
    "state":"AR",
    "FIPS":5015,
    "county":"Carroll County",
    "number":52.66,
    "rate":1.908109283,
    "population":27598
  },
  {
    "state":"AR",
    "FIPS":5017,
    "county":"Chicot County",
    "number":269.14,
    "rate":23.48926514,
    "population":11458
  },
  {
    "state":"AR",
    "FIPS":5019,
    "county":"Clark County",
    "number":1406.26,
    "rate":61.61861362,
    "population":22822
  },
  {
    "state":"AR",
    "FIPS":5021,
    "county":"Clay County",
    "number":394.83,
    "rate":25.34210526,
    "population":15580
  },
  {
    "state":"AR",
    "FIPS":5023,
    "county":"Cleburne County",
    "number":1078.45,
    "rate":41.83606176,
    "population":25778
  },
  {
    "state":"AR",
    "FIPS":5027,
    "county":"Columbia County",
    "number":1746.97,
    "rate":71.59419696,
    "population":24401
  },
  {
    "state":"AR",
    "FIPS":5029,
    "county":"Conway County",
    "number":1551.55,
    "rate":73.13112745,
    "population":21216
  },
  {
    "state":"AR",
    "FIPS":5031,
    "county":"Craighead County",
    "number":100785.8,
    "rate":1008.836571,
    "population":99903
  },
  {
    "state":"AR",
    "FIPS":5033,
    "county":"Crawford County",
    "number":4346.7,
    "rate":70.18390842,
    "population":61933
  },
  {
    "state":"AR",
    "FIPS":5035,
    "county":"Crittenden County",
    "number":739.82,
    "rate":14.775714,
    "population":50070
  },
  {
    "state":"AR",
    "FIPS":5037,
    "county":"Cross County",
    "number":2067.83,
    "rate":117.1309618,
    "population":17654
  },
  {
    "state":"AR",
    "FIPS":5039,
    "county":"Dallas County",
    "number":208.05,
    "rate":26.12052731,
    "population":7965
  },
  {
    "state":"AR",
    "FIPS":5041,
    "county":"Desha County",
    "number":557.67,
    "rate":44.35104183,
    "population":12574
  },
  {
    "state":"AR",
    "FIPS":5043,
    "county":"Drew County",
    "number":4328.31,
    "rate":230.5358189,
    "population":18775
  },
  {
    "state":"AR",
    "FIPS":5045,
    "county":"Faulkner County",
    "number":17987.57,
    "rate":151.7567009,
    "population":118529
  },
  {
    "state":"AR",
    "FIPS":5047,
    "county":"Franklin County",
    "number":579.11,
    "rate":32.27678074,
    "population":17942
  },
  {
    "state":"AR",
    "FIPS":5049,
    "county":"Fulton County",
    "number":194.23,
    "rate":15.86716772,
    "population":12241
  },
  {
    "state":"AR",
    "FIPS":5051,
    "county":"Garland County",
    "number":12791.71,
    "rate":132.0952735,
    "population":96837
  },
  {
    "state":"AR",
    "FIPS":5053,
    "county":"Grant County",
    "number":549.63,
    "rate":30.47574161,
    "population":18035
  },
  {
    "state":"AR",
    "FIPS":5055,
    "county":"Greene County",
    "number":3896.39,
    "rate":90.28198712,
    "population":43158
  },
  {
    "state":"AR",
    "FIPS":5057,
    "county":"Hempstead County",
    "number":177.26,
    "rate":7.939977604,
    "population":22325
  },
  {
    "state":"AR",
    "FIPS":5059,
    "county":"Hot Spring County",
    "number":3156.42,
    "rate":94.54322171,
    "population":33386
  },
  {
    "state":"AR",
    "FIPS":5061,
    "county":"Howard County",
    "number":113.54,
    "rate":8.281546317,
    "population":13710
  },
  {
    "state":"AR",
    "FIPS":5063,
    "county":"Independence County",
    "number":7063.72,
    "rate":191.4027909,
    "population":36905
  },
  {
    "state":"AR",
    "FIPS":5067,
    "county":"Jackson County",
    "number":1740.47,
    "rate":98.66609977,
    "population":17640
  },
  {
    "state":"AR",
    "FIPS":5069,
    "county":"Jefferson County",
    "number":3933.64,
    "rate":52.74389917,
    "population":74580
  },
  {
    "state":"AR",
    "FIPS":5071,
    "county":"Johnson County",
    "number":2478.22,
    "rate":95.8173523,
    "population":25864
  },
  {
    "state":"AR",
    "FIPS":5073,
    "county":"Lafayette County",
    "number":100.8,
    "rate":13.56479612,
    "population":7431
  },
  {
    "state":"AR",
    "FIPS":5075,
    "county":"Lawrence County",
    "number":643.73,
    "rate":37.77979928,
    "population":17039
  },
  {
    "state":"AR",
    "FIPS":5077,
    "county":"Lee County",
    "number":32.05,
    "rate":3.145240432,
    "population":10190
  },
  {
    "state":"AR",
    "FIPS":5079,
    "county":"Lincoln County",
    "number":59.4,
    "rate":4.19817655,
    "population":14149
  },
  {
    "state":"AR",
    "FIPS":5081,
    "county":"Little River County",
    "number":474.94,
    "rate":36.80278962,
    "population":12905
  },
  {
    "state":"AR",
    "FIPS":5083,
    "county":"Logan County",
    "number":54.54,
    "rate":2.478527607,
    "population":22005
  },
  {
    "state":"AR",
    "FIPS":5085,
    "county":"Lonoke County",
    "number":3613.69,
    "rate":51.56006107,
    "population":70087
  },
  {
    "state":"AR",
    "FIPS":5087,
    "county":"Madison County",
    "number":54.24,
    "rate":3.468917882,
    "population":15636
  },
  {
    "state":"AR",
    "FIPS":5089,
    "county":"Marion County",
    "number":277.18,
    "rate":16.70262127,
    "population":16595
  },
  {
    "state":"AR",
    "FIPS":5091,
    "county":"Miller County",
    "number":982.24,
    "rate":22.51965977,
    "population":43617
  },
  {
    "state":"AR",
    "FIPS":5093,
    "county":"Mississippi County",
    "number":699.65,
    "rate":15.36004391,
    "population":45550
  },
  {
    "state":"AR",
    "FIPS":5095,
    "county":"Monroe County",
    "number":38.96,
    "rate":4.969387755,
    "population":7840
  },
  {
    "state":"AR",
    "FIPS":5097,
    "county":"Montgomery County",
    "number":69.14,
    "rate":7.42243693,
    "population":9315
  },
  {
    "state":"AR",
    "FIPS":5099,
    "county":"Nevada County",
    "number":93.86,
    "rate":10.54251376,
    "population":8903
  },
  {
    "state":"AR",
    "FIPS":5103,
    "county":"Ouachita County",
    "number":1333.07,
    "rate":52.46035182,
    "population":25411
  },
  {
    "state":"AR",
    "FIPS":5105,
    "county":"Perry County",
    "number":141.64,
    "rate":13.7168313,
    "population":10326
  },
  {
    "state":"AR",
    "FIPS":5107,
    "county":"Phillips County",
    "number":556.59,
    "rate":26.79520508,
    "population":20772
  },
  {
    "state":"AR",
    "FIPS":5109,
    "county":"Pike County",
    "number":186.18,
    "rate":16.52582993,
    "population":11266
  },
  {
    "state":"AR",
    "FIPS":5111,
    "county":"Poinsett County",
    "number":1915.89,
    "rate":78.76217883,
    "population":24325
  },
  {
    "state":"AR",
    "FIPS":5113,
    "county":"Polk County",
    "number":143.47,
    "rate":7.019080235,
    "population":20440
  },
  {
    "state":"AR",
    "FIPS":5115,
    "county":"Pope County",
    "number":3458.71,
    "rate":55.14788654,
    "population":62717
  },
  {
    "state":"AR",
    "FIPS":5117,
    "county":"Prairie County",
    "number":355.29,
    "rate":42.06606678,
    "population":8446
  },
  {
    "state":"AR",
    "FIPS":5119,
    "county":"Pulaski County",
    "number":308188.62,
    "rate":792.1405549,
    "population":389058
  },
  {
    "state":"AR",
    "FIPS":5121,
    "county":"Randolph County",
    "number":1662.68,
    "rate":93.14212089,
    "population":17851
  },
  {
    "state":"AR",
    "FIPS":5123,
    "county":"St Francis County",
    "number":143.21,
    "rate":5.136104436,
    "population":27883
  },
  {
    "state":"AR",
    "FIPS":5125,
    "county":"Saline County",
    "number":10010.75,
    "rate":89.64743705,
    "population":111668
  },
  {
    "state":"AR",
    "FIPS":5127,
    "county":"Scott County",
    "number":33,
    "rate":2.998092123,
    "population":11007
  },
  {
    "state":"AR",
    "FIPS":5129,
    "county":"Searcy County",
    "number":51.83,
    "rate":6.482801751,
    "population":7995
  },
  {
    "state":"AR",
    "FIPS":5131,
    "county":"Sebastian County",
    "number":28176.37,
    "rate":221.2166915,
    "population":127370
  },
  {
    "state":"AR",
    "FIPS":5133,
    "county":"Sevier County",
    "number":81.63,
    "rate":4.753115174,
    "population":17174
  },
  {
    "state":"AR",
    "FIPS":5135,
    "county":"Sharp County",
    "number":67.35,
    "rate":3.949451709,
    "population":17053
  },
  {
    "state":"AR",
    "FIPS":5137,
    "county":"Stone County",
    "number":162.96,
    "rate":12.90465632,
    "population":12628
  },
  {
    "state":"AR",
    "FIPS":5139,
    "county":"Union County",
    "number":4843.12,
    "rate":118.4021123,
    "population":40904
  },
  {
    "state":"AR",
    "FIPS":5141,
    "county":"Van Buren County",
    "number":374.65,
    "rate":21.83911396,
    "population":17155
  },
  {
    "state":"AR",
    "FIPS":5143,
    "county":"Washington County",
    "number":20329.35,
    "rate":96.01363031,
    "population":211734
  },
  {
    "state":"AR",
    "FIPS":5145,
    "county":"White County",
    "number":7971.87,
    "rate":101.3562274,
    "population":78652
  },
  {
    "state":"AR",
    "FIPS":5147,
    "county":"Woodruff County",
    "number":12.95,
    "rate":1.831424127,
    "population":7071
  },
  {
    "state":"AR",
    "FIPS":5149,
    "county":"Yell County",
    "number":143.24,
    "rate":6.567328412,
    "population":21811
  },
  {
    "state":"CA",
    "FIPS":6001,
    "county":"Alameda County",
    "number":120773.4,
    "rate":77.60544746,
    "population":1560000
  },
  {
    "state":"CA",
    "FIPS":6005,
    "county":"Amador County",
    "number":1875.85,
    "rate":50.60018343,
    "population":37072
  },
  {
    "state":"CA",
    "FIPS":6007,
    "county":"Butte County",
    "number":34891.28,
    "rate":157.6800329,
    "population":221279
  },
  {
    "state":"CA",
    "FIPS":6009,
    "county":"Calaveras County",
    "number":2628.58,
    "rate":58.70773217,
    "population":44774
  },
  {
    "state":"CA",
    "FIPS":6011,
    "county":"Colusa County",
    "number":1933.04,
    "rate":90.34163668,
    "population":21397
  },
  {
    "state":"CA",
    "FIPS":6013,
    "county":"Contra Costa County",
    "number":379430.19,
    "rate":351.533217,
    "population":1080000
  },
  {
    "state":"CA",
    "FIPS":6015,
    "county":"Del Norte County",
    "number":295.63,
    "rate":10.47367675,
    "population":28226
  },
  {
    "state":"CA",
    "FIPS":6017,
    "county":"El Dorado County",
    "number":40562.96,
    "rate":224.5948894,
    "population":180605
  },
  {
    "state":"CA",
    "FIPS":6019,
    "county":"Fresno County",
    "number":267835.34,
    "rate":282.4552223,
    "population":948240
  },
  {
    "state":"CA",
    "FIPS":6021,
    "county":"Glenn County",
    "number":843.48,
    "rate":30.19113752,
    "population":27938
  },
  {
    "state":"CA",
    "FIPS":6023,
    "county":"Humboldt County",
    "number":2795.94,
    "rate":20.75987526,
    "population":134680
  },
  {
    "state":"CA",
    "FIPS":6025,
    "county":"Imperial County",
    "number":57936.28,
    "rate":326.5064274,
    "population":177443
  },
  {
    "state":"CA",
    "FIPS":6027,
    "county":"Inyo County",
    "number":30.68,
    "rate":1.665942659,
    "population":18416
  },
  {
    "state":"CA",
    "FIPS":6029,
    "county":"Kern County",
    "number":148344.7,
    "rate":173.1983113,
    "population":856502
  },
  {
    "state":"CA",
    "FIPS":6031,
    "county":"Kings County",
    "number":25595.36,
    "rate":169.1248844,
    "population":151340
  },
  {
    "state":"CA",
    "FIPS":6033,
    "county":"Lake County",
    "number":2665.2,
    "rate":41.65416354,
    "population":63984
  },
  {
    "state":"CA",
    "FIPS":6035,
    "county":"Lassen County",
    "number":418,
    "rate":12.41129487,
    "population":33679
  },
  {
    "state":"CA",
    "FIPS":6037,
    "county":"Los Angeles County",
    "number":4390000,
    "rate":440.2767716,
    "population":9970000
  },
  {
    "state":"CA",
    "FIPS":6039,
    "county":"Madera County",
    "number":7121.78,
    "rate":46.77872363,
    "population":152244
  },
  {
    "state":"CA",
    "FIPS":6041,
    "county":"Marin County",
    "number":17076.35,
    "rate":66.66725228,
    "population":256143
  },
  {
    "state":"CA",
    "FIPS":6043,
    "county":"Mariposa County",
    "number":130.08,
    "rate":7.289436817,
    "population":17845
  },
  {
    "state":"CA",
    "FIPS":6045,
    "county":"Mendocino County",
    "number":2730.92,
    "rate":31.2115844,
    "population":87497
  },
  {
    "state":"CA",
    "FIPS":6047,
    "county":"Merced County",
    "number":7382.26,
    "rate":28.19992131,
    "population":261783
  },
  {
    "state":"CA",
    "FIPS":6049,
    "county":"Modoc County",
    "number":22,
    "rate":2.35747964,
    "population":9332
  },
  {
    "state":"CA",
    "FIPS":6053,
    "county":"Monterey County",
    "number":227645.97,
    "rate":533.8651442,
    "population":426411
  },
  {
    "state":"CA",
    "FIPS":6055,
    "county":"Napa County",
    "number":12528.74,
    "rate":90.04736407,
    "population":139135
  },
  {
    "state":"CA",
    "FIPS":6057,
    "county":"Nevada County",
    "number":832.66,
    "rate":8.467757518,
    "population":98333
  },
  {
    "state":"CA",
    "FIPS":6059,
    "county":"Orange County",
    "number":1290000,
    "rate":417.7222156,
    "population":3090000
  },
  {
    "state":"CA",
    "FIPS":6061,
    "county":"Placer County",
    "number":21874.6,
    "rate":60.51969035,
    "population":361446
  },
  {
    "state":"CA",
    "FIPS":6063,
    "county":"Plumas County",
    "number":283.38,
    "rate":14.65177602,
    "population":19341
  },
  {
    "state":"CA",
    "FIPS":6065,
    "county":"Riverside County",
    "number":316483.63,
    "rate":139.5418777,
    "population":2270000
  },
  {
    "state":"CA",
    "FIPS":6067,
    "county":"Sacramento County",
    "number":277243.09,
    "rate":191.3643288,
    "population":1450000
  },
  {
    "state":"CA",
    "FIPS":6069,
    "county":"San Benito County",
    "number":2989.31,
    "rate":52.56299344,
    "population":56871
  },
  {
    "state":"CA",
    "FIPS":6071,
    "county":"San Bernardino County",
    "number":349994.05,
    "rate":168.2137225,
    "population":2080000
  },
  {
    "state":"CA",
    "FIPS":6073,
    "county":"San Diego County",
    "number":1100000,
    "rate":346.6579203,
    "population":3180000
  },
  {
    "state":"CA",
    "FIPS":6075,
    "county":"San Francisco County",
    "number":650298.89,
    "rate":783.784433,
    "population":829691
  },
  {
    "state":"CA",
    "FIPS":6077,
    "county":"San Joaquin County",
    "number":207797.83,
    "rate":296.1622924,
    "population":701635
  },
  {
    "state":"CA",
    "FIPS":6079,
    "county":"San Luis Obispo County",
    "number":27837.41,
    "rate":101.4009864,
    "population":274528
  },
  {
    "state":"CA",
    "FIPS":6081,
    "county":"San Mateo County",
    "number":174089.26,
    "rate":235.0213706,
    "population":740738
  },
  {
    "state":"CA",
    "FIPS":6083,
    "county":"Santa Barbara County",
    "number":271959.5,
    "rate":631.3949871,
    "population":430728
  },
  {
    "state":"CA",
    "FIPS":6085,
    "county":"Santa Clara County",
    "number":620032.67,
    "rate":336.7733114,
    "population":1840000
  },
  {
    "state":"CA",
    "FIPS":6087,
    "county":"Santa Cruz County",
    "number":13015.67,
    "rate":48.81510846,
    "population":266632
  },
  {
    "state":"CA",
    "FIPS":6089,
    "county":"Shasta County",
    "number":12247.84,
    "rate":68.64573116,
    "population":178421
  },
  {
    "state":"CA",
    "FIPS":6093,
    "county":"Siskiyou County",
    "number":753.33,
    "rate":17.03826842,
    "population":44214
  },
  {
    "state":"CA",
    "FIPS":6095,
    "county":"Solano County",
    "number":21502.56,
    "rate":51.10847016,
    "population":420724
  },
  {
    "state":"CA",
    "FIPS":6097,
    "county":"Sonoma County",
    "number":74714.4,
    "rate":152.2180434,
    "population":490838
  },
  {
    "state":"CA",
    "FIPS":6099,
    "county":"Stanislaus County",
    "number":48457.09,
    "rate":92.80585061,
    "population":522134
  },
  {
    "state":"CA",
    "FIPS":6101,
    "county":"Sutter County",
    "number":18274.59,
    "rate":193.101958,
    "population":94637
  },
  {
    "state":"CA",
    "FIPS":6103,
    "county":"Tehama County",
    "number":3598.64,
    "rate":56.88380254,
    "population":63263
  },
  {
    "state":"CA",
    "FIPS":6105,
    "county":"Trinity County",
    "number":357.28,
    "rate":26.47499074,
    "population":13495
  },
  {
    "state":"CA",
    "FIPS":6107,
    "county":"Tulare County",
    "number":36030.32,
    "rate":79.80154995,
    "population":451499
  },
  {
    "state":"CA",
    "FIPS":6109,
    "county":"Tuolumne County",
    "number":1243.83,
    "rate":22.99131238,
    "population":54100
  },
  {
    "state":"CA",
    "FIPS":6111,
    "county":"Ventura County",
    "number":129483.46,
    "rate":154.9816631,
    "population":835476
  },
  {
    "state":"CA",
    "FIPS":6113,
    "county":"Yolo County",
    "number":49198,
    "rate":240.8537929,
    "population":204265
  },
  {
    "state":"CA",
    "FIPS":6115,
    "county":"Yuba County",
    "number":4786,
    "rate":65.58230675,
    "population":72977
  },
  {
    "state":"CO",
    "FIPS":8001,
    "county":"Adams County",
    "number":334379.19,
    "rate":725.8808474,
    "population":460653
  },
  {
    "state":"CO",
    "FIPS":8003,
    "county":"Alamosa County",
    "number":508.83,
    "rate":31.57884938,
    "population":16113
  },
  {
    "state":"CO",
    "FIPS":8005,
    "county":"Arapahoe County",
    "number":143538.18,
    "rate":240.8152658,
    "population":596051
  },
  {
    "state":"CO",
    "FIPS":8007,
    "county":"Archuleta County",
    "number":368.95,
    "rate":30.4188309,
    "population":12129
  },
  {
    "state":"CO",
    "FIPS":8009,
    "county":"Baca County",
    "number":87.77,
    "rate":23.36794462,
    "population":3756
  },
  {
    "state":"CO",
    "FIPS":8011,
    "county":"Bent County",
    "number":50,
    "rate":8.610297916,
    "population":5807
  },
  {
    "state":"CO",
    "FIPS":8013,
    "county":"Boulder County",
    "number":275455.86,
    "rate":901.7060196,
    "population":305483
  },
  {
    "state":"CO",
    "FIPS":8014,
    "county":"Broomfield County",
    "number":8160.46,
    "rate":138.3316382,
    "population":58992
  },
  {
    "state":"CO",
    "FIPS":8015,
    "county":"Chaffee County",
    "number":39,
    "rate":2.15433906,
    "population":18103
  },
  {
    "state":"CO",
    "FIPS":8017,
    "county":"Cheyenne County",
    "number":13.61,
    "rate":7.212506624,
    "population":1887
  },
  {
    "state":"CO",
    "FIPS":8021,
    "county":"Conejos County",
    "number":22.4,
    "rate":2.707603046,
    "population":8273
  },
  {
    "state":"CO",
    "FIPS":8025,
    "county":"Crowley County",
    "number":112.38,
    "rate":20.76496674,
    "population":5412
  },
  {
    "state":"CO",
    "FIPS":8029,
    "county":"Delta County",
    "number":722.42,
    "rate":23.72557391,
    "population":30449
  },
  {
    "state":"CO",
    "FIPS":8031,
    "county":"Denver County",
    "number":311805.08,
    "rate":491.9085362,
    "population":633868
  },
  {
    "state":"CO",
    "FIPS":8035,
    "county":"Douglas County",
    "number":41009.86,
    "rate":137.3514951,
    "population":298576
  },
  {
    "state":"CO",
    "FIPS":8037,
    "county":"Eagle County",
    "number":803.19,
    "rate":15.46053011,
    "population":51951
  },
  {
    "state":"CO",
    "FIPS":8041,
    "county":"El Paso County",
    "number":33923.44,
    "rate":52.53551053,
    "population":645724
  },
  {
    "state":"CO",
    "FIPS":8043,
    "county":"Fremont County",
    "number":280.16,
    "rate":5.946427813,
    "population":47114
  },
  {
    "state":"CO",
    "FIPS":8045,
    "county":"Garfield County",
    "number":2731.43,
    "rate":48.10803671,
    "population":56777
  },
  {
    "state":"CO",
    "FIPS":8049,
    "county":"Grand County",
    "number":12.93,
    "rate":0.911719081,
    "population":14182
  },
  {
    "state":"CO",
    "FIPS":8055,
    "county":"Huerfano County",
    "number":246.22,
    "rate":37.37401336,
    "population":6588
  },
  {
    "state":"CO",
    "FIPS":8059,
    "county":"Jefferson County",
    "number":102541.7,
    "rate":187.9357649,
    "population":545621
  },
  {
    "state":"CO",
    "FIPS":8063,
    "county":"Kit Carson County",
    "number":22.66,
    "rate":2.799950575,
    "population":8093
  },
  {
    "state":"CO",
    "FIPS":8067,
    "county":"La Plata County",
    "number":1879.99,
    "rate":35.94283529,
    "population":52305
  },
  {
    "state":"CO",
    "FIPS":8069,
    "county":"Larimer County",
    "number":7569.62,
    "rate":24.3525343,
    "population":310835
  },
  {
    "state":"CO",
    "FIPS":8071,
    "county":"Las Animas County",
    "number":678.17,
    "rate":45.25357,
    "population":14986
  },
  {
    "state":"CO",
    "FIPS":8073,
    "county":"Lincoln County",
    "number":67.3,
    "rate":12.35769372,
    "population":5446
  },
  {
    "state":"CO",
    "FIPS":8075,
    "county":"Logan County",
    "number":1024.37,
    "rate":45.30004864,
    "population":22613
  },
  {
    "state":"CO",
    "FIPS":8077,
    "county":"Mesa County",
    "number":5577.75,
    "rate":37.75791341,
    "population":147724
  },
  {
    "state":"CO",
    "FIPS":8081,
    "county":"Moffat County",
    "number":267.57,
    "rate":20.32125769,
    "population":13167
  },
  {
    "state":"CO",
    "FIPS":8083,
    "county":"Montezuma County",
    "number":42.55,
    "rate":1.673615481,
    "population":25424
  },
  {
    "state":"CO",
    "FIPS":8085,
    "county":"Montrose County",
    "number":416.28,
    "rate":10.22248416,
    "population":40722
  },
  {
    "state":"CO",
    "FIPS":8087,
    "county":"Morgan County",
    "number":930.34,
    "rate":32.81043908,
    "population":28355
  },
  {
    "state":"CO",
    "FIPS":8089,
    "county":"Otero County",
    "number":364.41,
    "rate":19.47466866,
    "population":18712
  },
  {
    "state":"CO",
    "FIPS":8091,
    "county":"Ouray County",
    "number":12.43,
    "rate":2.734873487,
    "population":4545
  },
  {
    "state":"CO",
    "FIPS":8097,
    "county":"Pitkin County",
    "number":202.59,
    "rate":11.7566156,
    "population":17232
  },
  {
    "state":"CO",
    "FIPS":8099,
    "county":"Prowers County",
    "number":187.78,
    "rate":15.13744458,
    "population":12405
  },
  {
    "state":"CO",
    "FIPS":8101,
    "county":"Pueblo County",
    "number":17620.48,
    "rate":109.5528476,
    "population":160840
  },
  {
    "state":"CO",
    "FIPS":8103,
    "county":"Rio Blanco County",
    "number":486.79,
    "rate":71.6605329,
    "population":6793
  },
  {
    "state":"CO",
    "FIPS":8107,
    "county":"Routt County",
    "number":189.86,
    "rate":8.181152239,
    "population":23207
  },
  {
    "state":"CO",
    "FIPS":8113,
    "county":"San Miguel County",
    "number":84.5,
    "rate":11.11257233,
    "population":7604
  },
  {
    "state":"CO",
    "FIPS":8115,
    "county":"Sedgwick County",
    "number":202.64,
    "rate":85.25031552,
    "population":2377
  },
  {
    "state":"CO",
    "FIPS":8117,
    "county":"Summit County",
    "number":23.66,
    "rate":0.838174862,
    "population":28228
  },
  {
    "state":"CO",
    "FIPS":8119,
    "county":"Teller County",
    "number":17937.69,
    "rate":767.3549795,
    "population":23376
  },
  {
    "state":"CO",
    "FIPS":8123,
    "county":"Weld County",
    "number":4331.73,
    "rate":16.3963299,
    "population":264189
  },
  {
    "state":"CO",
    "FIPS":8125,
    "county":"Yuma County",
    "number":32.23,
    "rate":3.185726994,
    "population":10117
  },
  {
    "state":"CT",
    "FIPS":9001,
    "county":"Fairfield County",
    "number":264470.92,
    "rate":282.7688952,
    "population":935290
  },
  {
    "state":"CT",
    "FIPS":9003,
    "county":"Hartford County",
    "number":599288.11,
    "rate":667.5832073,
    "population":897698
  },
  {
    "state":"CT",
    "FIPS":9005,
    "county":"Litchfield County",
    "number":104150.19,
    "rate":555.7196062,
    "population":187415
  },
  {
    "state":"CT",
    "FIPS":9007,
    "county":"Middlesex County",
    "number":46067.66,
    "rate":278.3208072,
    "population":165520
  },
  {
    "state":"CT",
    "FIPS":9009,
    "county":"New Haven County",
    "number":479042.06,
    "rate":554.4269361,
    "population":864031
  },
  {
    "state":"CT",
    "FIPS":9011,
    "county":"New London County",
    "number":37469.54,
    "rate":136.47918,
    "population":274544
  },
  {
    "state":"CT",
    "FIPS":9013,
    "county":"Tolland County",
    "number":102313.61,
    "rate":673.4481488,
    "population":151925
  },
  {
    "state":"CT",
    "FIPS":9015,
    "county":"Windham County",
    "number":10274.48,
    "rate":87.11689941,
    "population":117939
  },
  {
    "state":"DE",
    "FIPS":10001,
    "county":"Kent County",
    "number":13045.11,
    "rate":77.80414634,
    "population":167666
  },
  {
    "state":"DE",
    "FIPS":10003,
    "county":"New Castle County",
    "number":267247.74,
    "rate":489.4459004,
    "population":546021
  },
  {
    "state":"DE",
    "FIPS":10005,
    "county":"Sussex County",
    "number":55008.21,
    "rate":270.7176885,
    "population":203194
  },
  {
    "state":"DC",
    "FIPS":11001,
    "county":"District of Columbia",
    "number":737760.34,
    "rate":1161.754126,
    "population":635040
  },
  {
    "state":"FL",
    "FIPS":12001,
    "county":"Alachua County",
    "number":109143.97,
    "rate":433.6048198,
    "population":251713
  },
  {
    "state":"FL",
    "FIPS":12003,
    "county":"Baker County",
    "number":2193.52,
    "rate":81.11830184,
    "population":27041
  },
  {
    "state":"FL",
    "FIPS":12005,
    "county":"Bay County",
    "number":31571.69,
    "rate":183.5627406,
    "population":171994
  },
  {
    "state":"FL",
    "FIPS":12007,
    "county":"Bradford County",
    "number":2079.5,
    "rate":76.64381542,
    "population":27132
  },
  {
    "state":"FL",
    "FIPS":12009,
    "county":"Brevard County",
    "number":274840.17,
    "rate":501.8362734,
    "population":547669
  },
  {
    "state":"FL",
    "FIPS":12011,
    "county":"Broward County",
    "number":587206.26,
    "rate":322.6810487,
    "population":1820000
  },
  {
    "state":"FL",
    "FIPS":12013,
    "county":"Calhoun County",
    "number":258.42,
    "rate":17.56883541,
    "population":14709
  },
  {
    "state":"FL",
    "FIPS":12015,
    "county":"Charlotte County",
    "number":289994.5,
    "rate":1781.380535,
    "population":162792
  },
  {
    "state":"FL",
    "FIPS":12017,
    "county":"Citrus County",
    "number":33713,
    "rate":242.0346041,
    "population":139290
  },
  {
    "state":"FL",
    "FIPS":12019,
    "county":"Clay County",
    "number":17996.77,
    "rate":92.62648358,
    "population":194294
  },
  {
    "state":"FL",
    "FIPS":12021,
    "county":"Collier County",
    "number":158078.98,
    "rate":474.8927669,
    "population":332873
  },
  {
    "state":"FL",
    "FIPS":12023,
    "county":"Columbia County",
    "number":5814.6,
    "rate":85.58056018,
    "population":67943
  },
  {
    "state":"FL",
    "FIPS":12027,
    "county":"Desoto County",
    "number":756.54,
    "rate":21.77406821,
    "population":34745
  },
  {
    "state":"FL",
    "FIPS":12029,
    "county":"Dixie County",
    "number":146.11,
    "rate":9.096059267,
    "population":16063
  },
  {
    "state":"FL",
    "FIPS":12031,
    "county":"Duval County",
    "number":668985.01,
    "rate":759.6965802,
    "population":880595
  },
  {
    "state":"FL",
    "FIPS":12033,
    "county":"Escambia County",
    "number":210234.14,
    "rate":691.0731919,
    "population":304214
  },
  {
    "state":"FL",
    "FIPS":12035,
    "county":"Flagler County",
    "number":4120.99,
    "rate":41.8332149,
    "population":98510
  },
  {
    "state":"FL",
    "FIPS":12037,
    "county":"Franklin County",
    "number":653.18,
    "rate":55.96606975,
    "population":11671
  },
  {
    "state":"FL",
    "FIPS":12039,
    "county":"Gadsden County",
    "number":2859.21,
    "rate":61.28673397,
    "population":46653
  },
  {
    "state":"FL",
    "FIPS":12041,
    "county":"Gilchrist County",
    "number":676,
    "rate":40.06638217,
    "population":16872
  },
  {
    "state":"FL",
    "FIPS":12043,
    "county":"Glades County",
    "number":188.57,
    "rate":14.47643175,
    "population":13026
  },
  {
    "state":"FL",
    "FIPS":12045,
    "county":"Gulf County",
    "number":366.1,
    "rate":23.36311423,
    "population":15670
  },
  {
    "state":"FL",
    "FIPS":12047,
    "county":"Hamilton County",
    "number":72.16,
    "rate":4.909177495,
    "population":14699
  },
  {
    "state":"FL",
    "FIPS":12049,
    "county":"Hardee County",
    "number":1196.3,
    "rate":43.63828701,
    "population":27414
  },
  {
    "state":"FL",
    "FIPS":12051,
    "county":"Hendry County",
    "number":2999.47,
    "rate":79.59109484,
    "population":37686
  },
  {
    "state":"FL",
    "FIPS":12053,
    "county":"Hernando County",
    "number":14932.96,
    "rate":86.26682534,
    "population":173102
  },
  {
    "state":"FL",
    "FIPS":12055,
    "county":"Highlands County",
    "number":10283.35,
    "rate":104.8390714,
    "population":98087
  },
  {
    "state":"FL",
    "FIPS":12057,
    "county":"Hillsborough County",
    "number":471126.06,
    "rate":367.4838538,
    "population":1280000
  },
  {
    "state":"FL",
    "FIPS":12059,
    "county":"Holmes County",
    "number":224.67,
    "rate":11.39011407,
    "population":19725
  },
  {
    "state":"FL",
    "FIPS":12061,
    "county":"Indian River County",
    "number":52105.85,
    "rate":370.5752873,
    "population":140608
  },
  {
    "state":"FL",
    "FIPS":12063,
    "county":"Jackson County",
    "number":2312.21,
    "rate":47.20722744,
    "population":48980
  },
  {
    "state":"FL",
    "FIPS":12065,
    "county":"Jefferson County",
    "number":1424.77,
    "rate":100.3854013,
    "population":14193
  },
  {
    "state":"FL",
    "FIPS":12067,
    "county":"Lafayette County",
    "number":113.88,
    "rate":12.93796864,
    "population":8802
  },
  {
    "state":"FL",
    "FIPS":12069,
    "county":"Lake County",
    "number":44908.31,
    "rate":147.9924535,
    "population":303450
  },
  {
    "state":"FL",
    "FIPS":12071,
    "county":"Lee County",
    "number":159409.61,
    "rate":247.1512803,
    "population":644988
  },
  {
    "state":"FL",
    "FIPS":12073,
    "county":"Leon County",
    "number":126358.95,
    "rate":445.1547274,
    "population":283854
  },
  {
    "state":"FL",
    "FIPS":12075,
    "county":"Levy County",
    "number":4049.22,
    "rate":101.2380929,
    "population":39997
  },
  {
    "state":"FL",
    "FIPS":12079,
    "county":"Madison County",
    "number":799.67,
    "rate":42.27702881,
    "population":18915
  },
  {
    "state":"FL",
    "FIPS":12081,
    "county":"Manatee County",
    "number":121593.99,
    "rate":363.97649,
    "population":334071
  },
  {
    "state":"FL",
    "FIPS":12083,
    "county":"Marion County",
    "number":50584.41,
    "rate":151.2262067,
    "population":334495
  },
  {
    "state":"FL",
    "FIPS":12085,
    "county":"Martin County",
    "number":25562.32,
    "rate":171.7366943,
    "population":148846
  },
  {
    "state":"FL",
    "FIPS":12086,
    "county":"Miami-Dade County",
    "number":1410000,
    "rate":540.0525286,
    "population":2610000
  },
  {
    "state":"FL",
    "FIPS":12087,
    "county":"Monroe County",
    "number":1684.81,
    "rate":22.46682935,
    "population":74991
  },
  {
    "state":"FL",
    "FIPS":12089,
    "county":"Nassau County",
    "number":7474.94,
    "rate":100.1465702,
    "population":74640
  },
  {
    "state":"FL",
    "FIPS":12091,
    "county":"Okaloosa County",
    "number":61296.35,
    "rate":321.8720627,
    "population":190437
  },
  {
    "state":"FL",
    "FIPS":12093,
    "county":"Okeechobee County",
    "number":1240.44,
    "rate":31.57541046,
    "population":39285
  },
  {
    "state":"FL",
    "FIPS":12095,
    "county":"Orange County",
    "number":626389.5,
    "rate":521.0897647,
    "population":1200000
  },
  {
    "state":"FL",
    "FIPS":12097,
    "county":"Osceola County",
    "number":25732.97,
    "rate":89.0506627,
    "population":288970
  },
  {
    "state":"FL",
    "FIPS":12099,
    "county":"Palm Beach County",
    "number":461048.32,
    "rate":339.352207,
    "population":1360000
  },
  {
    "state":"FL",
    "FIPS":12101,
    "county":"Pasco County",
    "number":198952.27,
    "rate":422.7594113,
    "population":470604
  },
  {
    "state":"FL",
    "FIPS":12103,
    "county":"Pinellas County",
    "number":259838.21,
    "rate":281.7392073,
    "population":922265
  },
  {
    "state":"FL",
    "FIPS":12105,
    "county":"Polk County",
    "number":311910.73,
    "rate":506.5426527,
    "population":615764
  },
  {
    "state":"FL",
    "FIPS":12107,
    "county":"Putnam County",
    "number":6474.61,
    "rate":88.54894077,
    "population":73119
  },
  {
    "state":"FL",
    "FIPS":12109,
    "county":"St Johns County",
    "number":15837.18,
    "rate":78.2995491,
    "population":202264
  },
  {
    "state":"FL",
    "FIPS":12111,
    "county":"St Lucie County",
    "number":159202.15,
    "rate":561.4427685,
    "population":283559
  },
  {
    "state":"FL",
    "FIPS":12113,
    "county":"Santa Rosa County",
    "number":13009.52,
    "rate":82.1318451,
    "population":158398
  },
  {
    "state":"FL",
    "FIPS":12115,
    "county":"Sarasota County",
    "number":154416.71,
    "rate":399.9914778,
    "population":386050
  },
  {
    "state":"FL",
    "FIPS":12117,
    "county":"Seminole County",
    "number":95420.54,
    "rate":221.1855217,
    "population":431405
  },
  {
    "state":"FL",
    "FIPS":12119,
    "county":"Sumter County",
    "number":4656.45,
    "rate":45.28607413,
    "population":102823
  },
  {
    "state":"FL",
    "FIPS":12121,
    "county":"Suwannee County",
    "number":1604.43,
    "rate":36.81912062,
    "population":43576
  },
  {
    "state":"FL",
    "FIPS":12123,
    "county":"Taylor County",
    "number":1476.75,
    "rate":64.94348916,
    "population":22739
  },
  {
    "state":"FL",
    "FIPS":12125,
    "county":"Union County",
    "number":2065.95,
    "rate":135.5699193,
    "population":15239
  },
  {
    "state":"FL",
    "FIPS":12127,
    "county":"Volusia County",
    "number":161453.59,
    "rate":324.7961947,
    "population":497092
  },
  {
    "state":"FL",
    "FIPS":12129,
    "county":"Wakulla County",
    "number":1550.79,
    "rate":50.31275346,
    "population":30823
  },
  {
    "state":"FL",
    "FIPS":12131,
    "county":"Walton County",
    "number":2218.02,
    "rate":38.7257966,
    "population":57275
  },
  {
    "state":"FL",
    "FIPS":12133,
    "county":"Washington County",
    "number":1621.74,
    "rate":65.24278875,
    "population":24857
  },
  {
    "state":"GA",
    "FIPS":13001,
    "county":"Appling County",
    "number":681.76,
    "rate":37.09451004,
    "population":18379
  },
  {
    "state":"GA",
    "FIPS":13003,
    "county":"Atkinson County",
    "number":129.64,
    "rate":15.71965563,
    "population":8247
  },
  {
    "state":"GA",
    "FIPS":13005,
    "county":"Bacon County",
    "number":1074.53,
    "rate":96.06025389,
    "population":11186
  },
  {
    "state":"GA",
    "FIPS":13007,
    "county":"Baker County",
    "number":210.31,
    "rate":62.42505194,
    "population":3369
  },
  {
    "state":"GA",
    "FIPS":13009,
    "county":"Baldwin County",
    "number":5742.58,
    "rate":123.6159724,
    "population":46455
  },
  {
    "state":"GA",
    "FIPS":13011,
    "county":"Banks County",
    "number":31.86,
    "rate":1.747476964,
    "population":18232
  },
  {
    "state":"GA",
    "FIPS":13013,
    "county":"Barrow County",
    "number":66010.23,
    "rate":940.7052771,
    "population":70171
  },
  {
    "state":"GA",
    "FIPS":13017,
    "county":"Ben Hill County",
    "number":978.04,
    "rate":55.7446566,
    "population":17545
  },
  {
    "state":"GA",
    "FIPS":13019,
    "county":"Berrien County",
    "number":528.12,
    "rate":27.70392908,
    "population":19063
  },
  {
    "state":"GA",
    "FIPS":13021,
    "county":"Bibb County",
    "number":117124.45,
    "rate":749.9132434,
    "population":156184
  },
  {
    "state":"GA",
    "FIPS":13023,
    "county":"Bleckley County",
    "number":769.41,
    "rate":59.65806001,
    "population":12897
  },
  {
    "state":"GA",
    "FIPS":13025,
    "county":"Brantley County",
    "number":153.49,
    "rate":8.272163837,
    "population":18555
  },
  {
    "state":"GA",
    "FIPS":13027,
    "county":"Brooks County",
    "number":707.43,
    "rate":45.53195598,
    "population":15537
  },
  {
    "state":"GA",
    "FIPS":13029,
    "county":"Bryan County",
    "number":3052.03,
    "rate":94.64832847,
    "population":32246
  },
  {
    "state":"GA",
    "FIPS":13031,
    "county":"Bulloch County",
    "number":8252.07,
    "rate":113.3152532,
    "population":72824
  },
  {
    "state":"GA",
    "FIPS":13033,
    "county":"Burke County",
    "number":1668.51,
    "rate":72.14242477,
    "population":23128
  },
  {
    "state":"GA",
    "FIPS":13035,
    "county":"Butts County",
    "number":1356.22,
    "rate":57.82467809,
    "population":23454
  },
  {
    "state":"GA",
    "FIPS":13037,
    "county":"Calhoun County",
    "number":644.33,
    "rate":99.09720086,
    "population":6502
  },
  {
    "state":"GA",
    "FIPS":13039,
    "county":"Camden County",
    "number":4116.2,
    "rate":80.07859616,
    "population":51402
  },
  {
    "state":"GA",
    "FIPS":13043,
    "county":"Candler County",
    "number":718.61,
    "rate":64.5941573,
    "population":11125
  },
  {
    "state":"GA",
    "FIPS":13045,
    "county":"Carroll County",
    "number":14130.63,
    "rate":126.7855509,
    "population":111453
  },
  {
    "state":"GA",
    "FIPS":13047,
    "county":"Catoosa County",
    "number":50870.11,
    "rate":783.0869291,
    "population":64961
  },
  {
    "state":"GA",
    "FIPS":13049,
    "county":"Charlton County",
    "number":553.36,
    "rate":41.58100391,
    "population":13308
  },
  {
    "state":"GA",
    "FIPS":13051,
    "county":"Chatham County",
    "number":158525.65,
    "rate":572.8945466,
    "population":276710
  },
  {
    "state":"GA",
    "FIPS":13053,
    "county":"Chattahoochee County",
    "number":610.22,
    "rate":48.54574383,
    "population":12570
  },
  {
    "state":"GA",
    "FIPS":13055,
    "county":"Chattooga County",
    "number":534.33,
    "rate":20.8104845,
    "population":25676
  },
  {
    "state":"GA",
    "FIPS":13057,
    "county":"Cherokee County",
    "number":57116.65,
    "rate":258.5469911,
    "population":220914
  },
  {
    "state":"GA",
    "FIPS":13059,
    "county":"Clarke County",
    "number":17461.42,
    "rate":145.1851667,
    "population":120270
  },
  {
    "state":"GA",
    "FIPS":13063,
    "county":"Clayton County",
    "number":14699.52,
    "rate":55.20884272,
    "population":266253
  },
  {
    "state":"GA",
    "FIPS":13065,
    "county":"Clinch County",
    "number":31.92,
    "rate":4.753536858,
    "population":6715
  },
  {
    "state":"GA",
    "FIPS":13067,
    "county":"Cobb County",
    "number":98244.32,
    "rate":138.7561084,
    "population":708036
  },
  {
    "state":"GA",
    "FIPS":13069,
    "county":"Coffee County",
    "number":3683.92,
    "rate":85.48766621,
    "population":43093
  },
  {
    "state":"GA",
    "FIPS":13071,
    "county":"Colquitt County",
    "number":11812.9,
    "rate":256.2729146,
    "population":46095
  },
  {
    "state":"GA",
    "FIPS":13073,
    "county":"Columbia County",
    "number":52412.13,
    "rate":395.3961345,
    "population":132556
  },
  {
    "state":"GA",
    "FIPS":13075,
    "county":"Cook County",
    "number":1099,
    "rate":65.18773355,
    "population":16859
  },
  {
    "state":"GA",
    "FIPS":13077,
    "county":"Coweta County",
    "number":18826.21,
    "rate":143.8454897,
    "population":130878
  },
  {
    "state":"GA",
    "FIPS":13079,
    "county":"Crawford County",
    "number":479.36,
    "rate":37.98716222,
    "population":12619
  },
  {
    "state":"GA",
    "FIPS":13081,
    "county":"Crisp County",
    "number":27724.39,
    "rate":1171.931775,
    "population":23657
  },
  {
    "state":"GA",
    "FIPS":13083,
    "county":"Dade County",
    "number":137.4,
    "rate":8.301613196,
    "population":16551
  },
  {
    "state":"GA",
    "FIPS":13085,
    "county":"Dawson County",
    "number":2131.78,
    "rate":95.27082588,
    "population":22376
  },
  {
    "state":"GA",
    "FIPS":13087,
    "county":"Decatur County",
    "number":2335.15,
    "rate":85.02894804,
    "population":27463
  },
  {
    "state":"GA",
    "FIPS":13089,
    "county":"Dekalb County",
    "number":218910.45,
    "rate":309.0628459,
    "population":708304
  },
  {
    "state":"GA",
    "FIPS":13091,
    "county":"Dodge County",
    "number":2725.78,
    "rate":127.6532572,
    "population":21353
  },
  {
    "state":"GA",
    "FIPS":13093,
    "county":"Dooly County",
    "number":451.86,
    "rate":31.54125366,
    "population":14326
  },
  {
    "state":"GA",
    "FIPS":13095,
    "county":"Dougherty County",
    "number":35762.07,
    "rate":378.2664847,
    "population":94542
  },
  {
    "state":"GA",
    "FIPS":13097,
    "county":"Douglas County",
    "number":25244.03,
    "rate":188.4923764,
    "population":133926
  },
  {
    "state":"GA",
    "FIPS":13099,
    "county":"Early County",
    "number":736.01,
    "rate":69.40216879,
    "population":10605
  },
  {
    "state":"GA",
    "FIPS":13103,
    "county":"Effingham County",
    "number":2030.36,
    "rate":38.06663292,
    "population":53337
  },
  {
    "state":"GA",
    "FIPS":13105,
    "county":"Elbert County",
    "number":3482.38,
    "rate":177.7359261,
    "population":19593
  },
  {
    "state":"GA",
    "FIPS":13107,
    "county":"Emanuel County",
    "number":919.56,
    "rate":40.24508731,
    "population":22849
  },
  {
    "state":"GA",
    "FIPS":13109,
    "county":"Evans County",
    "number":635.41,
    "rate":59.60694184,
    "population":10660
  },
  {
    "state":"GA",
    "FIPS":13111,
    "county":"Fannin County",
    "number":1253.44,
    "rate":53.41287766,
    "population":23467
  },
  {
    "state":"GA",
    "FIPS":13113,
    "county":"Fayette County",
    "number":367242.31,
    "rate":3418.369853,
    "population":107432
  },
  {
    "state":"GA",
    "FIPS":13115,
    "county":"Floyd County",
    "number":17804.05,
    "rate":185.3314388,
    "population":96066
  },
  {
    "state":"GA",
    "FIPS":13117,
    "county":"Forsyth County",
    "number":7286.08,
    "rate":38.79164759,
    "population":187826
  },
  {
    "state":"GA",
    "FIPS":13119,
    "county":"Franklin County",
    "number":1374.51,
    "rate":62.69716736,
    "population":21923
  },
  {
    "state":"GA",
    "FIPS":13121,
    "county":"Fulton County",
    "number":1210000,
    "rate":1241.614827,
    "population":977950
  },
  {
    "state":"GA",
    "FIPS":13123,
    "county":"Gilmer County",
    "number":551.81,
    "rate":19.56426166,
    "population":28205
  },
  {
    "state":"GA",
    "FIPS":13127,
    "county":"Glynn County",
    "number":4091.83,
    "rate":50.54137846,
    "population":80960
  },
  {
    "state":"GA",
    "FIPS":13129,
    "county":"Gordon County",
    "number":7276.88,
    "rate":130.5504126,
    "population":55740
  },
  {
    "state":"GA",
    "FIPS":13131,
    "county":"Grady County",
    "number":530.81,
    "rate":20.92604273,
    "population":25366
  },
  {
    "state":"GA",
    "FIPS":13133,
    "county":"Greene County",
    "number":1088.17,
    "rate":67.45412844,
    "population":16132
  },
  {
    "state":"GA",
    "FIPS":13135,
    "county":"Gwinnett County",
    "number":410573.6,
    "rate":488.6495339,
    "population":840221
  },
  {
    "state":"GA",
    "FIPS":13137,
    "county":"Habersham County",
    "number":1571.87,
    "rate":36.16570416,
    "population":43463
  },
  {
    "state":"GA",
    "FIPS":13139,
    "county":"Hall County",
    "number":97609.91,
    "rate":527.3816753,
    "population":185084
  },
  {
    "state":"GA",
    "FIPS":13141,
    "county":"Hancock County",
    "number":56.4,
    "rate":6.245847176,
    "population":9030
  },
  {
    "state":"GA",
    "FIPS":13143,
    "county":"Haralson County",
    "number":1274.02,
    "rate":44.87882204,
    "population":28388
  },
  {
    "state":"GA",
    "FIPS":13145,
    "county":"Harris County",
    "number":185.79,
    "rate":5.696808021,
    "population":32613
  },
  {
    "state":"GA",
    "FIPS":13147,
    "county":"Hart County",
    "number":2000.03,
    "rate":78.28212454,
    "population":25549
  },
  {
    "state":"GA",
    "FIPS":13151,
    "county":"Henry County",
    "number":55280.28,
    "rate":265.2057397,
    "population":208443
  },
  {
    "state":"GA",
    "FIPS":13153,
    "county":"Houston County",
    "number":19551.62,
    "rate":133.7320109,
    "population":146200
  },
  {
    "state":"GA",
    "FIPS":13155,
    "county":"Irwin County",
    "number":445.92,
    "rate":46.45,
    "population":9600
  },
  {
    "state":"GA",
    "FIPS":13157,
    "county":"Jackson County",
    "number":3264.2,
    "rate":53.97870089,
    "population":60472
  },
  {
    "state":"GA",
    "FIPS":13159,
    "county":"Jasper County",
    "number":640.17,
    "rate":47.08517211,
    "population":13596
  },
  {
    "state":"GA",
    "FIPS":13161,
    "county":"Jeff Davis County",
    "number":451.39,
    "rate":29.86568744,
    "population":15114
  },
  {
    "state":"GA",
    "FIPS":13163,
    "county":"Jefferson County",
    "number":859.23,
    "rate":52.32188528,
    "population":16422
  },
  {
    "state":"GA",
    "FIPS":13165,
    "county":"Jenkins County",
    "number":183.05,
    "rate":20.04270229,
    "population":9133
  },
  {
    "state":"GA",
    "FIPS":13167,
    "county":"Johnson County",
    "number":542.41,
    "rate":54.8886865,
    "population":9882
  },
  {
    "state":"GA",
    "FIPS":13169,
    "county":"Jones County",
    "number":781.32,
    "rate":27.13387741,
    "population":28795
  },
  {
    "state":"GA",
    "FIPS":13171,
    "county":"Lamar County",
    "number":205.22,
    "rate":11.37646211,
    "population":18039
  },
  {
    "state":"GA",
    "FIPS":13173,
    "county":"Lanier County",
    "number":28.84,
    "rate":2.761394102,
    "population":10444
  },
  {
    "state":"GA",
    "FIPS":13175,
    "county":"Laurens County",
    "number":7448.95,
    "rate":155.2835105,
    "population":47970
  },
  {
    "state":"GA",
    "FIPS":13177,
    "county":"Lee County",
    "number":2089.47,
    "rate":72.73540572,
    "population":28727
  },
  {
    "state":"GA",
    "FIPS":13179,
    "county":"Liberty County",
    "number":1434,
    "rate":21.92962334,
    "population":65391
  },
  {
    "state":"GA",
    "FIPS":13181,
    "county":"Lincoln County",
    "number":40,
    "rate":5.148005148,
    "population":7770
  },
  {
    "state":"GA",
    "FIPS":13183,
    "county":"Long County",
    "number":26.82,
    "rate":1.65955077,
    "population":16161
  },
  {
    "state":"GA",
    "FIPS":13185,
    "county":"Lowndes County",
    "number":7395.74,
    "rate":64.49698259,
    "population":114668
  },
  {
    "state":"GA",
    "FIPS":13187,
    "county":"Lumpkin County",
    "number":1679.69,
    "rate":54.67562905,
    "population":30721
  },
  {
    "state":"GA",
    "FIPS":13189,
    "county":"McDuffie County",
    "number":1607.94,
    "rate":74.50720541,
    "population":21581
  },
  {
    "state":"GA",
    "FIPS":13191,
    "county":"McIntosh County",
    "number":77.31,
    "rate":5.553081454,
    "population":13922
  },
  {
    "state":"GA",
    "FIPS":13193,
    "county":"Macon County",
    "number":449.8,
    "rate":31.51183971,
    "population":14274
  },
  {
    "state":"GA",
    "FIPS":13195,
    "county":"Madison County",
    "number":872.88,
    "rate":31.15425798,
    "population":28018
  },
  {
    "state":"GA",
    "FIPS":13197,
    "county":"Marion County",
    "number":438.31,
    "rate":50.08684722,
    "population":8751
  },
  {
    "state":"GA",
    "FIPS":13199,
    "county":"Meriwether County",
    "number":365.49,
    "rate":17.1462751,
    "population":21316
  },
  {
    "state":"GA",
    "FIPS":13201,
    "county":"Miller County",
    "number":465.19,
    "rate":77.76496155,
    "population":5982
  },
  {
    "state":"GA",
    "FIPS":13205,
    "county":"Mitchell County",
    "number":1208.04,
    "rate":52.24860516,
    "population":23121
  },
  {
    "state":"GA",
    "FIPS":13207,
    "county":"Monroe County",
    "number":2594.2,
    "rate":97.01207883,
    "population":26741
  },
  {
    "state":"GA",
    "FIPS":13209,
    "county":"Montgomery County",
    "number":145.66,
    "rate":16.34975867,
    "population":8909
  },
  {
    "state":"GA",
    "FIPS":13211,
    "county":"Morgan County",
    "number":1304.65,
    "rate":73.20035909,
    "population":17823
  },
  {
    "state":"GA",
    "FIPS":13213,
    "county":"Murray County",
    "number":916.06,
    "rate":23.25379499,
    "population":39394
  },
  {
    "state":"GA",
    "FIPS":13215,
    "county":"Muscogee County",
    "number":115739.38,
    "rate":578.5782915,
    "population":200041
  },
  {
    "state":"GA",
    "FIPS":13217,
    "county":"Newton County",
    "number":3238.21,
    "rate":32.05640691,
    "population":101016
  },
  {
    "state":"GA",
    "FIPS":13219,
    "county":"Oconee County",
    "number":5687.76,
    "rate":169.6825776,
    "population":33520
  },
  {
    "state":"GA",
    "FIPS":13221,
    "county":"Oglethorpe County",
    "number":642.35,
    "rate":44.00561759,
    "population":14597
  },
  {
    "state":"GA",
    "FIPS":13223,
    "county":"Paulding County",
    "number":7755.62,
    "rate":53.46269974,
    "population":145066
  },
  {
    "state":"GA",
    "FIPS":13225,
    "county":"Peach County",
    "number":4245.59,
    "rate":154.3289713,
    "population":27510
  },
  {
    "state":"GA",
    "FIPS":13227,
    "county":"Pickens County",
    "number":203073.77,
    "rate":6927.062696,
    "population":29316
  },
  {
    "state":"GA",
    "FIPS":13229,
    "county":"Pierce County",
    "number":802.45,
    "rate":42.60419432,
    "population":18835
  },
  {
    "state":"GA",
    "FIPS":13233,
    "county":"Polk County",
    "number":4275.42,
    "rate":103.9565249,
    "population":41127
  },
  {
    "state":"GA",
    "FIPS":13235,
    "county":"Pulaski County",
    "number":345.76,
    "rate":29.60273973,
    "population":11680
  },
  {
    "state":"GA",
    "FIPS":13237,
    "county":"Putnam County",
    "number":586.07,
    "rate":27.69576107,
    "population":21161
  },
  {
    "state":"GA",
    "FIPS":13239,
    "county":"Quitman County",
    "number":78.08,
    "rate":32.56046706,
    "population":2398
  },
  {
    "state":"GA",
    "FIPS":13241,
    "county":"Rabun County",
    "number":696.75,
    "rate":42.72704973,
    "population":16307
  },
  {
    "state":"GA",
    "FIPS":13243,
    "county":"Randolph County",
    "number":177.63,
    "rate":24.30623974,
    "population":7308
  },
  {
    "state":"GA",
    "FIPS":13245,
    "county":"Richmond County",
    "number":231507.64,
    "rate":1146.270362,
    "population":201966
  },
  {
    "state":"GA",
    "FIPS":13247,
    "county":"Rockdale County",
    "number":8606.74,
    "rate":100.4474581,
    "population":85684
  },
  {
    "state":"GA",
    "FIPS":13249,
    "county":"Schley County",
    "number":18,
    "rate":3.607937462,
    "population":4989
  },
  {
    "state":"GA",
    "FIPS":13251,
    "county":"Screven County",
    "number":625.93,
    "rate":44.07957746,
    "population":14200
  },
  {
    "state":"GA",
    "FIPS":13253,
    "county":"Seminole County",
    "number":817.78,
    "rate":91.7307908,
    "population":8915
  },
  {
    "state":"GA",
    "FIPS":13255,
    "county":"Spalding County",
    "number":6423.86,
    "rate":100.689039,
    "population":63799
  },
  {
    "state":"GA",
    "FIPS":13257,
    "county":"Stephens County",
    "number":4200.73,
    "rate":163.2936832,
    "population":25725
  },
  {
    "state":"GA",
    "FIPS":13259,
    "county":"Stewart County",
    "number":111.33,
    "rate":18.28078818,
    "population":6090
  },
  {
    "state":"GA",
    "FIPS":13261,
    "county":"Sumter County",
    "number":5656.36,
    "rate":178.8233063,
    "population":31631
  },
  {
    "state":"GA",
    "FIPS":13263,
    "county":"Talbot County",
    "number":313.47,
    "rate":47.945855,
    "population":6538
  },
  {
    "state":"GA",
    "FIPS":13265,
    "county":"Taliaferro County",
    "number":12.21,
    "rate":7.263533611,
    "population":1681
  },
  {
    "state":"GA",
    "FIPS":13267,
    "county":"Tattnall County",
    "number":734.27,
    "rate":29.0167951,
    "population":25305
  },
  {
    "state":"GA",
    "FIPS":13269,
    "county":"Taylor County",
    "number":96,
    "rate":11.45448037,
    "population":8381
  },
  {
    "state":"GA",
    "FIPS":13271,
    "county":"Telfair County",
    "number":159.24,
    "rate":9.692616714,
    "population":16429
  },
  {
    "state":"GA",
    "FIPS":13273,
    "county":"Terrell County",
    "number":192.75,
    "rate":20.84459825,
    "population":9247
  },
  {
    "state":"GA",
    "FIPS":13275,
    "county":"Thomas County",
    "number":3777.51,
    "rate":84.83067595,
    "population":44530
  },
  {
    "state":"GA",
    "FIPS":13277,
    "county":"Tift County",
    "number":4814.86,
    "rate":117.452798,
    "population":40994
  },
  {
    "state":"GA",
    "FIPS":13279,
    "county":"Toombs County",
    "number":5315.49,
    "rate":195.3003637,
    "population":27217
  },
  {
    "state":"GA",
    "FIPS":13281,
    "county":"Towns County",
    "number":336.25,
    "rate":32.0635072,
    "population":10487
  },
  {
    "state":"GA",
    "FIPS":13285,
    "county":"Troup County",
    "number":3745.45,
    "rate":54.7004615,
    "population":68472
  },
  {
    "state":"GA",
    "FIPS":13287,
    "county":"Turner County",
    "number":632.12,
    "rate":75.53112678,
    "population":8369
  },
  {
    "state":"GA",
    "FIPS":13289,
    "county":"Twiggs County",
    "number":342.7,
    "rate":40.31290436,
    "population":8501
  },
  {
    "state":"GA",
    "FIPS":13291,
    "county":"Union County",
    "number":1821.65,
    "rate":84.80284903,
    "population":21481
  },
  {
    "state":"GA",
    "FIPS":13293,
    "county":"Upson County",
    "number":1900.03,
    "rate":71.38944204,
    "population":26615
  },
  {
    "state":"GA",
    "FIPS":13295,
    "county":"Walker County",
    "number":2372,
    "rate":34.78822011,
    "population":68184
  },
  {
    "state":"GA",
    "FIPS":13297,
    "county":"Walton County",
    "number":2189.11,
    "rate":25.79459625,
    "population":84867
  },
  {
    "state":"GA",
    "FIPS":13299,
    "county":"Ware County",
    "number":3542.69,
    "rate":98.91913777,
    "population":35814
  },
  {
    "state":"GA",
    "FIPS":13301,
    "county":"Warren County",
    "number":628.77,
    "rate":113.0271436,
    "population":5563
  },
  {
    "state":"GA",
    "FIPS":13303,
    "county":"Washington County",
    "number":2469.22,
    "rate":118.3880712,
    "population":20857
  },
  {
    "state":"GA",
    "FIPS":13305,
    "county":"Wayne County",
    "number":197.19,
    "rate":6.492706859,
    "population":30371
  },
  {
    "state":"GA",
    "FIPS":13309,
    "county":"Wheeler County",
    "number":113.34,
    "rate":14.3323217,
    "population":7908
  },
  {
    "state":"GA",
    "FIPS":13311,
    "county":"White County",
    "number":1142.45,
    "rate":41.42763897,
    "population":27577
  },
  {
    "state":"GA",
    "FIPS":13313,
    "county":"Whitfield County",
    "number":6939.21,
    "rate":67.24887825,
    "population":103187
  },
  {
    "state":"GA",
    "FIPS":13315,
    "county":"Wilcox County",
    "number":349.64,
    "rate":38.73269082,
    "population":9027
  },
  {
    "state":"GA",
    "FIPS":13317,
    "county":"Wilkes County",
    "number":198.2,
    "rate":19.72924547,
    "population":10046
  },
  {
    "state":"GA",
    "FIPS":13319,
    "county":"Wilkinson County",
    "number":455.15,
    "rate":47.69964368,
    "population":9542
  },
  {
    "state":"GA",
    "FIPS":13321,
    "county":"Worth County",
    "number":970.36,
    "rate":45.19608756,
    "population":21470
  },
  {
    "state":"HI",
    "FIPS":15001,
    "county":"Hawaii County",
    "number":14813.82,
    "rate":78.40240069,
    "population":188946
  },
  {
    "state":"HI",
    "FIPS":15003,
    "county":"Honolulu County",
    "number":519023.41,
    "rate":531.3801234,
    "population":976746
  },
  {
    "state":"HI",
    "FIPS":15007,
    "county":"Kauai County",
    "number":3952.49,
    "rate":57.65597421,
    "population":68553
  },
  {
    "state":"HI",
    "FIPS":15009,
    "county":"Maui County",
    "number":90653.72,
    "rate":572.1932438,
    "population":158432
  },
  {
    "state":"ID",
    "FIPS":16001,
    "county":"Ada County",
    "number":119324.2,
    "rate":291.8239824,
    "population":408891
  },
  {
    "state":"ID",
    "FIPS":16005,
    "county":"Bannock County",
    "number":77547.08,
    "rate":926.0347978,
    "population":83741
  },
  {
    "state":"ID",
    "FIPS":16007,
    "county":"Bear Lake County",
    "number":187.34,
    "rate":31.81185261,
    "population":5889
  },
  {
    "state":"ID",
    "FIPS":16009,
    "county":"Benewah County",
    "number":157.7,
    "rate":17.28219178,
    "population":9125
  },
  {
    "state":"ID",
    "FIPS":16011,
    "county":"Bingham County",
    "number":4690.45,
    "rate":103.1026751,
    "population":45493
  },
  {
    "state":"ID",
    "FIPS":16013,
    "county":"Blaine County",
    "number":1014.63,
    "rate":47.99574267,
    "population":21140
  },
  {
    "state":"ID",
    "FIPS":16017,
    "county":"Bonner County",
    "number":532.13,
    "rate":13.15622914,
    "population":40447
  },
  {
    "state":"ID",
    "FIPS":16019,
    "county":"Bonneville County",
    "number":55190.83,
    "rate":516.3812687,
    "population":106880
  },
  {
    "state":"ID",
    "FIPS":16021,
    "county":"Boundary County",
    "number":257.89,
    "rate":23.80156899,
    "population":10835
  },
  {
    "state":"ID",
    "FIPS":16027,
    "county":"Canyon County",
    "number":7816.22,
    "rate":40.31972186,
    "population":193856
  },
  {
    "state":"ID",
    "FIPS":16029,
    "county":"Caribou County",
    "number":479.14,
    "rate":70.61753869,
    "population":6785
  },
  {
    "state":"ID",
    "FIPS":16031,
    "county":"Cassia County",
    "number":866.42,
    "rate":37.23334766,
    "population":23270
  },
  {
    "state":"ID",
    "FIPS":16039,
    "county":"Elmore County",
    "number":647.8,
    "rate":24.72613459,
    "population":26199
  },
  {
    "state":"ID",
    "FIPS":16041,
    "county":"Franklin County",
    "number":348.89,
    "rate":27.23362735,
    "population":12811
  },
  {
    "state":"ID",
    "FIPS":16043,
    "county":"Fremont County",
    "number":13.16,
    "rate":1.013945604,
    "population":12979
  },
  {
    "state":"ID",
    "FIPS":16045,
    "county":"Gem County",
    "number":1813.12,
    "rate":108.6220944,
    "population":16692
  },
  {
    "state":"ID",
    "FIPS":16047,
    "county":"Gooding County",
    "number":298.04,
    "rate":19.58727655,
    "population":15216
  },
  {
    "state":"ID",
    "FIPS":16049,
    "county":"Idaho County",
    "number":10.8,
    "rate":0.658576742,
    "population":16399
  },
  {
    "state":"ID",
    "FIPS":16051,
    "county":"Jefferson County",
    "number":1481.98,
    "rate":55.59440297,
    "population":26657
  },
  {
    "state":"ID",
    "FIPS":16053,
    "county":"Jerome County",
    "number":44.5,
    "rate":1.976460138,
    "population":22515
  },
  {
    "state":"ID",
    "FIPS":16055,
    "county":"Kootenai County",
    "number":9057.01,
    "rate":63.6486363,
    "population":142297
  },
  {
    "state":"ID",
    "FIPS":16057,
    "county":"Latah County",
    "number":540.63,
    "rate":14.16856671,
    "population":38157
  },
  {
    "state":"ID",
    "FIPS":16059,
    "county":"Lemhi County",
    "number":20.07,
    "rate":2.585340719,
    "population":7763
  },
  {
    "state":"ID",
    "FIPS":16063,
    "county":"Lincoln County",
    "number":28.3,
    "rate":5.384322679,
    "population":5256
  },
  {
    "state":"ID",
    "FIPS":16065,
    "county":"Madison County",
    "number":591.72,
    "rate":15.70382166,
    "population":37680
  },
  {
    "state":"ID",
    "FIPS":16067,
    "county":"Minidoka County",
    "number":556.62,
    "rate":27.70770073,
    "population":20089
  },
  {
    "state":"ID",
    "FIPS":16069,
    "county":"Nez Perce County",
    "number":1431.41,
    "rate":36.16772368,
    "population":39577
  },
  {
    "state":"ID",
    "FIPS":16071,
    "county":"Oneida County",
    "number":31.81,
    "rate":7.532559792,
    "population":4223
  },
  {
    "state":"ID",
    "FIPS":16073,
    "county":"Owyhee County",
    "number":214.3,
    "rate":18.7834166,
    "population":11409
  },
  {
    "state":"ID",
    "FIPS":16075,
    "county":"Payette County",
    "number":1647.08,
    "rate":72.64499625,
    "population":22673
  },
  {
    "state":"ID",
    "FIPS":16077,
    "county":"Power County",
    "number":28.25,
    "rate":3.631572182,
    "population":7779
  },
  {
    "state":"ID",
    "FIPS":16079,
    "county":"Shoshone County",
    "number":1411.92,
    "rate":111.1835578,
    "population":12699
  },
  {
    "state":"ID",
    "FIPS":16081,
    "county":"Teton County",
    "number":171.96,
    "rate":17.04768514,
    "population":10087
  },
  {
    "state":"ID",
    "FIPS":16083,
    "county":"Twin Falls County",
    "number":29696.86,
    "rate":378.8251352,
    "population":78392
  },
  {
    "state":"ID",
    "FIPS":16085,
    "county":"Valley County",
    "number":140.52,
    "rate":14.77447166,
    "population":9511
  },
  {
    "state":"ID",
    "FIPS":16087,
    "county":"Washington County",
    "number":617.61,
    "rate":61.50881386,
    "population":10041
  },
  {
    "state":"IL",
    "FIPS":17001,
    "county":"Adams County",
    "number":12604.19,
    "rate":187.5651423,
    "population":67199
  },
  {
    "state":"IL",
    "FIPS":17003,
    "county":"Alexander County",
    "number":988.04,
    "rate":127.4890323,
    "population":7750
  },
  {
    "state":"IL",
    "FIPS":17005,
    "county":"Bond County",
    "number":1151.41,
    "rate":65.34305658,
    "population":17621
  },
  {
    "state":"IL",
    "FIPS":17007,
    "county":"Boone County",
    "number":6881.42,
    "rate":127.7175204,
    "population":53880
  },
  {
    "state":"IL",
    "FIPS":17011,
    "county":"Bureau County",
    "number":1635.92,
    "rate":47.64306725,
    "population":34337
  },
  {
    "state":"IL",
    "FIPS":17013,
    "county":"Calhoun County",
    "number":33.41,
    "rate":6.652727997,
    "population":5022
  },
  {
    "state":"IL",
    "FIPS":17015,
    "county":"Carroll County",
    "number":576.13,
    "rate":38.40098647,
    "population":15003
  },
  {
    "state":"IL",
    "FIPS":17017,
    "county":"Cass County",
    "number":973.3,
    "rate":72.51527343,
    "population":13422
  },
  {
    "state":"IL",
    "FIPS":17019,
    "county":"Champaign County",
    "number":49288.09,
    "rate":241.5976256,
    "population":204009
  },
  {
    "state":"IL",
    "FIPS":17021,
    "county":"Christian County",
    "number":1164.88,
    "rate":33.75387558,
    "population":34511
  },
  {
    "state":"IL",
    "FIPS":17023,
    "county":"Clark County",
    "number":633.14,
    "rate":38.83341511,
    "population":16304
  },
  {
    "state":"IL",
    "FIPS":17025,
    "county":"Clay County",
    "number":1134.83,
    "rate":82.63525814,
    "population":13733
  },
  {
    "state":"IL",
    "FIPS":17027,
    "county":"Clinton County",
    "number":1057.81,
    "rate":27.79541214,
    "population":38057
  },
  {
    "state":"IL",
    "FIPS":17029,
    "county":"Coles County",
    "number":10790.75,
    "rate":201.2035949,
    "population":53631
  },
  {
    "state":"IL",
    "FIPS":17031,
    "county":"Cook County",
    "number":2140000,
    "rate":409.091311,
    "population":5230000
  },
  {
    "state":"IL",
    "FIPS":17033,
    "county":"Crawford County",
    "number":374.43,
    "rate":19.07729149,
    "population":19627
  },
  {
    "state":"IL",
    "FIPS":17035,
    "county":"Cumberland County",
    "number":692.06,
    "rate":63.28273592,
    "population":10936
  },
  {
    "state":"IL",
    "FIPS":17037,
    "county":"Dekalb County",
    "number":17042.58,
    "rate":162.7862417,
    "population":104693
  },
  {
    "state":"IL",
    "FIPS":17039,
    "county":"De Witt County",
    "number":2055.47,
    "rate":124.6343682,
    "population":16492
  },
  {
    "state":"IL",
    "FIPS":17041,
    "county":"Douglas County",
    "number":666.27,
    "rate":33.59570391,
    "population":19832
  },
  {
    "state":"IL",
    "FIPS":17043,
    "county":"Dupage County",
    "number":632717.96,
    "rate":682.5929814,
    "population":926933
  },
  {
    "state":"IL",
    "FIPS":17045,
    "county":"Edgar County",
    "number":2339.49,
    "rate":128.8762188,
    "population":18153
  },
  {
    "state":"IL",
    "FIPS":17047,
    "county":"Edwards County",
    "number":493.14,
    "rate":73.26400238,
    "population":6731
  },
  {
    "state":"IL",
    "FIPS":17049,
    "county":"Effingham County",
    "number":6441.38,
    "rate":187.6749607,
    "population":34322
  },
  {
    "state":"IL",
    "FIPS":17051,
    "county":"Fayette County",
    "number":725.81,
    "rate":32.95840523,
    "population":22022
  },
  {
    "state":"IL",
    "FIPS":17053,
    "county":"Ford County",
    "number":960.28,
    "rate":68.60122875,
    "population":13998
  },
  {
    "state":"IL",
    "FIPS":17055,
    "county":"Franklin County",
    "number":1138.48,
    "rate":28.56053384,
    "population":39862
  },
  {
    "state":"IL",
    "FIPS":17057,
    "county":"Fulton County",
    "number":1955.97,
    "rate":53.35579257,
    "population":36659
  },
  {
    "state":"IL",
    "FIPS":17059,
    "county":"Gallatin County",
    "number":56.31,
    "rate":10.40081271,
    "population":5414
  },
  {
    "state":"IL",
    "FIPS":17061,
    "county":"Greene County",
    "number":316.46,
    "rate":23.24177438,
    "population":13616
  },
  {
    "state":"IL",
    "FIPS":17063,
    "county":"Grundy County",
    "number":6207.5,
    "rate":123.778664,
    "population":50150
  },
  {
    "state":"IL",
    "FIPS":17065,
    "county":"Hamilton County",
    "number":381.68,
    "rate":45.6336681,
    "population":8364
  },
  {
    "state":"IL",
    "FIPS":17067,
    "county":"Hancock County",
    "number":351.16,
    "rate":18.6440138,
    "population":18835
  },
  {
    "state":"IL",
    "FIPS":17069,
    "county":"Hardin County",
    "number":37,
    "rate":8.691566831,
    "population":4257
  },
  {
    "state":"IL",
    "FIPS":17073,
    "county":"Henry County",
    "number":1581.99,
    "rate":31.59493519,
    "population":50071
  },
  {
    "state":"IL",
    "FIPS":17075,
    "county":"Iroquois County",
    "number":2441.9,
    "rate":83.37259722,
    "population":29289
  },
  {
    "state":"IL",
    "FIPS":17077,
    "county":"Jackson County",
    "number":6779.08,
    "rate":112.5831202,
    "population":60214
  },
  {
    "state":"IL",
    "FIPS":17079,
    "county":"Jasper County",
    "number":93.88,
    "rate":9.734549979,
    "population":9644
  },
  {
    "state":"IL",
    "FIPS":17081,
    "county":"Jefferson County",
    "number":3987.29,
    "rate":102.9509424,
    "population":38730
  },
  {
    "state":"IL",
    "FIPS":17083,
    "county":"Jersey County",
    "number":3132.89,
    "rate":137.8184938,
    "population":22732
  },
  {
    "state":"IL",
    "FIPS":17085,
    "county":"Jo Daviess County",
    "number":532.14,
    "rate":23.77747989,
    "population":22380
  },
  {
    "state":"IL",
    "FIPS":17089,
    "county":"Kane County",
    "number":63242.93,
    "rate":121.1914886,
    "population":521843
  },
  {
    "state":"IL",
    "FIPS":17091,
    "county":"Kankakee County",
    "number":16337.04,
    "rate":144.6703151,
    "population":112926
  },
  {
    "state":"IL",
    "FIPS":17093,
    "county":"Kendall County",
    "number":5480.39,
    "rate":46.3869821,
    "population":118145
  },
  {
    "state":"IL",
    "FIPS":17095,
    "county":"Knox County",
    "number":48645.4,
    "rate":929.8734564,
    "population":52314
  },
  {
    "state":"IL",
    "FIPS":17097,
    "county":"Lake County",
    "number":143185.32,
    "rate":204.1092895,
    "population":701513
  },
  {
    "state":"IL",
    "FIPS":17099,
    "county":"La Salle County",
    "number":18617.99,
    "rate":164.9332046,
    "population":112882
  },
  {
    "state":"IL",
    "FIPS":17101,
    "county":"Lawrence County",
    "number":599.57,
    "rate":35.90669541,
    "population":16698
  },
  {
    "state":"IL",
    "FIPS":17103,
    "county":"Lee County",
    "number":2920.25,
    "rate":83.10093623,
    "population":35141
  },
  {
    "state":"IL",
    "FIPS":17105,
    "county":"Livingston County",
    "number":892.34,
    "rate":23.15661087,
    "population":38535
  },
  {
    "state":"IL",
    "FIPS":17107,
    "county":"Logan County",
    "number":228.73,
    "rate":7.623570976,
    "population":30003
  },
  {
    "state":"IL",
    "FIPS":17109,
    "county":"McDonough County",
    "number":928.28,
    "rate":28.5229682,
    "population":32545
  },
  {
    "state":"IL",
    "FIPS":17111,
    "county":"McHenry County",
    "number":116923.05,
    "rate":379.897815,
    "population":307775
  },
  {
    "state":"IL",
    "FIPS":17113,
    "county":"McLean County",
    "number":10366.47,
    "rate":60.12405897,
    "population":172418
  },
  {
    "state":"IL",
    "FIPS":17115,
    "county":"Macon County",
    "number":22558.66,
    "rate":204.9985915,
    "population":110043
  },
  {
    "state":"IL",
    "FIPS":17117,
    "county":"Macoupin County",
    "number":900.95,
    "rate":19.08468904,
    "population":47208
  },
  {
    "state":"IL",
    "FIPS":17119,
    "county":"Madison County",
    "number":55848.01,
    "rate":208.3577763,
    "population":268039
  },
  {
    "state":"IL",
    "FIPS":17121,
    "county":"Marion County",
    "number":2485.97,
    "rate":63.86892069,
    "population":38923
  },
  {
    "state":"IL",
    "FIPS":17123,
    "county":"Marshall County",
    "number":1714.89,
    "rate":139.410617,
    "population":12301
  },
  {
    "state":"IL",
    "FIPS":17127,
    "county":"Massac County",
    "number":2708.07,
    "rate":178.8331242,
    "population":15143
  },
  {
    "state":"IL",
    "FIPS":17131,
    "county":"Mercer County",
    "number":1161.51,
    "rate":71.80452522,
    "population":16176
  },
  {
    "state":"IL",
    "FIPS":17133,
    "county":"Monroe County",
    "number":1206.04,
    "rate":36.18373286,
    "population":33331
  },
  {
    "state":"IL",
    "FIPS":17135,
    "county":"Montgomery County",
    "number":1808.89,
    "rate":60.85416316,
    "population":29725
  },
  {
    "state":"IL",
    "FIPS":17137,
    "county":"Morgan County",
    "number":762.37,
    "rate":21.60973951,
    "population":35279
  },
  {
    "state":"IL",
    "FIPS":17139,
    "county":"Moultrie County",
    "number":1090.38,
    "rate":72.82308155,
    "population":14973
  },
  {
    "state":"IL",
    "FIPS":17141,
    "county":"Ogle County",
    "number":2956.12,
    "rate":55.94579761,
    "population":52839
  },
  {
    "state":"IL",
    "FIPS":17143,
    "county":"Peoria County",
    "number":147546.03,
    "rate":788.2027106,
    "population":187193
  },
  {
    "state":"IL",
    "FIPS":17145,
    "county":"Perry County",
    "number":2357.85,
    "rate":106.8350702,
    "population":22070
  },
  {
    "state":"IL",
    "FIPS":17147,
    "county":"Piatt County",
    "number":129.62,
    "rate":7.852426243,
    "population":16507
  },
  {
    "state":"IL",
    "FIPS":17149,
    "county":"Pike County",
    "number":2090.89,
    "rate":128.4409362,
    "population":16279
  },
  {
    "state":"IL",
    "FIPS":17155,
    "county":"Putnam County",
    "number":787.01,
    "rate":133.9591489,
    "population":5875
  },
  {
    "state":"IL",
    "FIPS":17157,
    "county":"Randolph County",
    "number":2177.38,
    "rate":66.08735241,
    "population":32947
  },
  {
    "state":"IL",
    "FIPS":17159,
    "county":"Richland County",
    "number":1453.26,
    "rate":89.90163934,
    "population":16165
  },
  {
    "state":"IL",
    "FIPS":17161,
    "county":"Rock Island County",
    "number":93088.24,
    "rate":632.9734471,
    "population":147065
  },
  {
    "state":"IL",
    "FIPS":17163,
    "county":"St Clair County",
    "number":50848.32,
    "rate":189.178414,
    "population":268785
  },
  {
    "state":"IL",
    "FIPS":17165,
    "county":"Saline County",
    "number":3716.8,
    "rate":148.7850767,
    "population":24981
  },
  {
    "state":"IL",
    "FIPS":17167,
    "county":"Sangamon County",
    "number":22064.24,
    "rate":110.7381291,
    "population":199247
  },
  {
    "state":"IL",
    "FIPS":17169,
    "county":"Schuyler County",
    "number":693.48,
    "rate":92.63692225,
    "population":7486
  },
  {
    "state":"IL",
    "FIPS":17173,
    "county":"Shelby County",
    "number":1534.56,
    "rate":69.02172446,
    "population":22233
  },
  {
    "state":"IL",
    "FIPS":17175,
    "county":"Stark County",
    "number":326.82,
    "rate":55.04800404,
    "population":5937
  },
  {
    "state":"IL",
    "FIPS":17177,
    "county":"Stephenson County",
    "number":3300.29,
    "rate":70.25929789,
    "population":46973
  },
  {
    "state":"IL",
    "FIPS":17179,
    "county":"Tazewell County",
    "number":10988.46,
    "rate":80.74169324,
    "population":136094
  },
  {
    "state":"IL",
    "FIPS":17181,
    "county":"Union County",
    "number":612.26,
    "rate":34.72436479,
    "population":17632
  },
  {
    "state":"IL",
    "FIPS":17183,
    "county":"Vermilion County",
    "number":13068.34,
    "rate":161.8089743,
    "population":80764
  },
  {
    "state":"IL",
    "FIPS":17185,
    "county":"Wabash County",
    "number":842.31,
    "rate":71.89399112,
    "population":11716
  },
  {
    "state":"IL",
    "FIPS":17187,
    "county":"Warren County",
    "number":276.26,
    "rate":15.53331459,
    "population":17785
  },
  {
    "state":"IL",
    "FIPS":17189,
    "county":"Washington County",
    "number":147.1,
    "rate":10.06775717,
    "population":14611
  },
  {
    "state":"IL",
    "FIPS":17191,
    "county":"Wayne County",
    "number":1433.42,
    "rate":86.24150171,
    "population":16621
  },
  {
    "state":"IL",
    "FIPS":17193,
    "county":"White County",
    "number":9624.62,
    "rate":660.0342888,
    "population":14582
  },
  {
    "state":"IL",
    "FIPS":17195,
    "county":"Whiteside County",
    "number":19465,
    "rate":337.7756954,
    "population":57627
  },
  {
    "state":"IL",
    "FIPS":17197,
    "county":"Will County",
    "number":129574.34,
    "rate":189.9396207,
    "population":682187
  },
  {
    "state":"IL",
    "FIPS":17199,
    "county":"Williamson County",
    "number":15932.64,
    "rate":238.6197394,
    "population":66770
  },
  {
    "state":"IL",
    "FIPS":17201,
    "county":"Winnebago County",
    "number":28379.46,
    "rate":97.21556712,
    "population":291923
  },
  {
    "state":"IL",
    "FIPS":17203,
    "county":"Woodford County",
    "number":1066.63,
    "rate":27.40218369,
    "population":38925
  },
  {
    "state":"IN",
    "FIPS":18001,
    "county":"Adams County",
    "number":1580.39,
    "rate":45.9402343,
    "population":34401
  },
  {
    "state":"IN",
    "FIPS":18003,
    "county":"Allen County",
    "number":59677.32,
    "rate":165.3881031,
    "population":360832
  },
  {
    "state":"IN",
    "FIPS":18005,
    "county":"Bartholomew County",
    "number":7555.74,
    "rate":95.75985704,
    "population":78903
  },
  {
    "state":"IN",
    "FIPS":18007,
    "county":"Benton County",
    "number":153.47,
    "rate":17.37265112,
    "population":8834
  },
  {
    "state":"IN",
    "FIPS":18009,
    "county":"Blackford County",
    "number":1731.09,
    "rate":137.9574434,
    "population":12548
  },
  {
    "state":"IN",
    "FIPS":18011,
    "county":"Boone County",
    "number":62304.91,
    "rate":1054.656883,
    "population":59076
  },
  {
    "state":"IN",
    "FIPS":18013,
    "county":"Brown County",
    "number":166.47,
    "rate":11.04791611,
    "population":15068
  },
  {
    "state":"IN",
    "FIPS":18015,
    "county":"Carroll County",
    "number":438.99,
    "rate":21.8446457,
    "population":20096
  },
  {
    "state":"IN",
    "FIPS":18017,
    "county":"Cass County",
    "number":829.87,
    "rate":21.41821091,
    "population":38746
  },
  {
    "state":"IN",
    "FIPS":18019,
    "county":"Clark County",
    "number":64586.67,
    "rate":577.0840519,
    "population":111919
  },
  {
    "state":"IN",
    "FIPS":18021,
    "county":"Clay County",
    "number":2382.87,
    "rate":88.73096258,
    "population":26855
  },
  {
    "state":"IN",
    "FIPS":18023,
    "county":"Clinton County",
    "number":599.19,
    "rate":18.18096307,
    "population":32957
  },
  {
    "state":"IN",
    "FIPS":18025,
    "county":"Crawford County",
    "number":263.59,
    "rate":24.76186003,
    "population":10645
  },
  {
    "state":"IN",
    "FIPS":18027,
    "county":"Daviess County",
    "number":6299.66,
    "rate":196.1533192,
    "population":32116
  },
  {
    "state":"IN",
    "FIPS":18029,
    "county":"Dearborn County",
    "number":5962.1,
    "rate":119.7641718,
    "population":49782
  },
  {
    "state":"IN",
    "FIPS":18031,
    "county":"Decatur County",
    "number":2196.73,
    "rate":84.22075681,
    "population":26083
  },
  {
    "state":"IN",
    "FIPS":18033,
    "county":"De Kalb County",
    "number":3284.63,
    "rate":77.73352266,
    "population":42255
  },
  {
    "state":"IN",
    "FIPS":18035,
    "county":"Delaware County",
    "number":51282.04,
    "rate":437.1535006,
    "population":117309
  },
  {
    "state":"IN",
    "FIPS":18037,
    "county":"Dubois County",
    "number":3603.19,
    "rate":85.59866014,
    "population":42094
  },
  {
    "state":"IN",
    "FIPS":18039,
    "county":"Elkhart County",
    "number":43175.72,
    "rate":216.7064185,
    "population":199236
  },
  {
    "state":"IN",
    "FIPS":18041,
    "county":"Fayette County",
    "number":718.27,
    "rate":29.97162529,
    "population":23965
  },
  {
    "state":"IN",
    "FIPS":18043,
    "county":"Floyd County",
    "number":121353.62,
    "rate":1611.944371,
    "population":75284
  },
  {
    "state":"IN",
    "FIPS":18045,
    "county":"Fountain County",
    "number":1301.08,
    "rate":76.08654971,
    "population":17100
  },
  {
    "state":"IN",
    "FIPS":18047,
    "county":"Franklin County",
    "number":359.95,
    "rate":15.65953189,
    "population":22986
  },
  {
    "state":"IN",
    "FIPS":18049,
    "county":"Fulton County",
    "number":938.91,
    "rate":45.43699187,
    "population":20664
  },
  {
    "state":"IN",
    "FIPS":18051,
    "county":"Gibson County",
    "number":3467.8,
    "rate":103.3590653,
    "population":33551
  },
  {
    "state":"IN",
    "FIPS":18053,
    "county":"Grant County",
    "number":1218.32,
    "rate":17.58468888,
    "population":69283
  },
  {
    "state":"IN",
    "FIPS":18055,
    "county":"Greene County",
    "number":462.83,
    "rate":14.0128372,
    "population":33029
  },
  {
    "state":"IN",
    "FIPS":18057,
    "county":"Hamilton County",
    "number":125177.14,
    "rate":432.2862866,
    "population":289570
  },
  {
    "state":"IN",
    "FIPS":18059,
    "county":"Hancock County",
    "number":12938.37,
    "rate":183.1566654,
    "population":70641
  },
  {
    "state":"IN",
    "FIPS":18061,
    "county":"Harrison County",
    "number":1112.63,
    "rate":28.45673802,
    "population":39099
  },
  {
    "state":"IN",
    "FIPS":18063,
    "county":"Hendricks County",
    "number":17748.5,
    "rate":117.7565319,
    "population":150722
  },
  {
    "state":"IN",
    "FIPS":18065,
    "county":"Henry County",
    "number":3329.38,
    "rate":67.58927303,
    "population":49259
  },
  {
    "state":"IN",
    "FIPS":18067,
    "county":"Howard County",
    "number":30196.4,
    "rate":363.9304352,
    "population":82973
  },
  {
    "state":"IN",
    "FIPS":18069,
    "county":"Huntington County",
    "number":9389.71,
    "rate":253.9200627,
    "population":36979
  },
  {
    "state":"IN",
    "FIPS":18071,
    "county":"Jackson County",
    "number":5641.29,
    "rate":131.2233077,
    "population":42990
  },
  {
    "state":"IN",
    "FIPS":18073,
    "county":"Jasper County",
    "number":2721.47,
    "rate":81.35204615,
    "population":33453
  },
  {
    "state":"IN",
    "FIPS":18075,
    "county":"Jay County",
    "number":825.97,
    "rate":38.65091249,
    "population":21370
  },
  {
    "state":"IN",
    "FIPS":18077,
    "county":"Jefferson County",
    "number":1723.24,
    "rate":53.01298222,
    "population":32506
  },
  {
    "state":"IN",
    "FIPS":18079,
    "county":"Jennings County",
    "number":1417.61,
    "rate":50.30196579,
    "population":28182
  },
  {
    "state":"IN",
    "FIPS":18081,
    "county":"Johnson County",
    "number":79922.7,
    "rate":556.7120826,
    "population":143562
  },
  {
    "state":"IN",
    "FIPS":18083,
    "county":"Knox County",
    "number":11555.81,
    "rate":303.6926756,
    "population":38051
  },
  {
    "state":"IN",
    "FIPS":18085,
    "county":"Kosciusko County",
    "number":6812.25,
    "rate":87.72568058,
    "population":77654
  },
  {
    "state":"IN",
    "FIPS":18087,
    "county":"Lagrange County",
    "number":1455.19,
    "rate":38.66586954,
    "population":37635
  },
  {
    "state":"IN",
    "FIPS":18089,
    "county":"Lake County",
    "number":246473.97,
    "rate":499.7505444,
    "population":493194
  },
  {
    "state":"IN",
    "FIPS":18091,
    "county":"La Porte County",
    "number":11743.31,
    "rate":105.6452077,
    "population":111158
  },
  {
    "state":"IN",
    "FIPS":18093,
    "county":"Lawrence County",
    "number":1338.92,
    "rate":29.07851015,
    "population":46045
  },
  {
    "state":"IN",
    "FIPS":18095,
    "county":"Madison County",
    "number":26460.06,
    "rate":203.0952381,
    "population":130284
  },
  {
    "state":"IN",
    "FIPS":18097,
    "county":"Marion County",
    "number":479542.28,
    "rate":522.0468092,
    "population":918581
  },
  {
    "state":"IN",
    "FIPS":18099,
    "county":"Marshall County",
    "number":2592.15,
    "rate":55.12280702,
    "population":47025
  },
  {
    "state":"IN",
    "FIPS":18101,
    "county":"Martin County",
    "number":54.57,
    "rate":5.286766131,
    "population":10322
  },
  {
    "state":"IN",
    "FIPS":18103,
    "county":"Miami County",
    "number":2118.83,
    "rate":58.04695633,
    "population":36502
  },
  {
    "state":"IN",
    "FIPS":18105,
    "county":"Monroe County",
    "number":113257.07,
    "rate":801.5986383,
    "population":141289
  },
  {
    "state":"IN",
    "FIPS":18107,
    "county":"Montgomery County",
    "number":4624.45,
    "rate":121.0525627,
    "population":38202
  },
  {
    "state":"IN",
    "FIPS":18109,
    "county":"Morgan County",
    "number":3456.01,
    "rate":49.93079635,
    "population":69216
  },
  {
    "state":"IN",
    "FIPS":18111,
    "county":"Newton County",
    "number":765.28,
    "rate":54.35613325,
    "population":14079
  },
  {
    "state":"IN",
    "FIPS":18113,
    "county":"Noble County",
    "number":5238.84,
    "rate":110.4681174,
    "population":47424
  },
  {
    "state":"IN",
    "FIPS":18115,
    "county":"Ohio County",
    "number":302.5,
    "rate":49.56578732,
    "population":6103
  },
  {
    "state":"IN",
    "FIPS":18117,
    "county":"Orange County",
    "number":690.66,
    "rate":35.06600325,
    "population":19696
  },
  {
    "state":"IN",
    "FIPS":18119,
    "county":"Owen County",
    "number":69.43,
    "rate":3.250011702,
    "population":21363
  },
  {
    "state":"IN",
    "FIPS":18121,
    "county":"Parke County",
    "number":699.64,
    "rate":40.885928,
    "population":17112
  },
  {
    "state":"IN",
    "FIPS":18123,
    "county":"Perry County",
    "number":2646.47,
    "rate":136.212363,
    "population":19429
  },
  {
    "state":"IN",
    "FIPS":18125,
    "county":"Pike County",
    "number":803.21,
    "rate":62.87850321,
    "population":12774
  },
  {
    "state":"IN",
    "FIPS":18127,
    "county":"Porter County",
    "number":20816.03,
    "rate":125.6558955,
    "population":165659
  },
  {
    "state":"IN",
    "FIPS":18129,
    "county":"Posey County",
    "number":1234.1,
    "rate":48.17692067,
    "population":25616
  },
  {
    "state":"IN",
    "FIPS":18131,
    "county":"Pulaski County",
    "number":453.25,
    "rate":34.72381828,
    "population":13053
  },
  {
    "state":"IN",
    "FIPS":18133,
    "county":"Putnam County",
    "number":3657.89,
    "rate":97.07518378,
    "population":37681
  },
  {
    "state":"IN",
    "FIPS":18135,
    "county":"Randolph County",
    "number":516.6,
    "rate":19.99612928,
    "population":25835
  },
  {
    "state":"IN",
    "FIPS":18137,
    "county":"Ripley County",
    "number":1394.39,
    "rate":48.8762312,
    "population":28529
  },
  {
    "state":"IN",
    "FIPS":18139,
    "county":"Rush County",
    "number":574.25,
    "rate":33.51523287,
    "population":17134
  },
  {
    "state":"IN",
    "FIPS":18141,
    "county":"St Joseph County",
    "number":30381.79,
    "rate":113.9726002,
    "population":266571
  },
  {
    "state":"IN",
    "FIPS":18143,
    "county":"Scott County",
    "number":2207.36,
    "rate":92.80861083,
    "population":23784
  },
  {
    "state":"IN",
    "FIPS":18145,
    "county":"Shelby County",
    "number":2897.47,
    "rate":65.28480014,
    "population":44382
  },
  {
    "state":"IN",
    "FIPS":18147,
    "county":"Spencer County",
    "number":352.12,
    "rate":16.86802395,
    "population":20875
  },
  {
    "state":"IN",
    "FIPS":18149,
    "county":"Starke County",
    "number":2207.76,
    "rate":95.174376,
    "population":23197
  },
  {
    "state":"IN",
    "FIPS":18151,
    "county":"Steuben County",
    "number":1321.42,
    "rate":38.68891817,
    "population":34155
  },
  {
    "state":"IN",
    "FIPS":18153,
    "county":"Sullivan County",
    "number":1963.63,
    "rate":92.50624205,
    "population":21227
  },
  {
    "state":"IN",
    "FIPS":18157,
    "county":"Tippecanoe County",
    "number":119504.52,
    "rate":670.6954765,
    "population":178180
  },
  {
    "state":"IN",
    "FIPS":18159,
    "county":"Tipton County",
    "number":1111.4,
    "rate":70.69524839,
    "population":15721
  },
  {
    "state":"IN",
    "FIPS":18161,
    "county":"Union County",
    "number":443.37,
    "rate":60.40463215,
    "population":7340
  },
  {
    "state":"IN",
    "FIPS":18163,
    "county":"Vanderburgh County",
    "number":132817.54,
    "rate":734.6874948,
    "population":180781
  },
  {
    "state":"IN",
    "FIPS":18165,
    "county":"Vermillion County",
    "number":421.4,
    "rate":26.41178314,
    "population":15955
  },
  {
    "state":"IN",
    "FIPS":18167,
    "county":"Vigo County",
    "number":356787.5,
    "rate":3285.668898,
    "population":108589
  },
  {
    "state":"IN",
    "FIPS":18169,
    "county":"Wabash County",
    "number":3423.8,
    "rate":105.5815962,
    "population":32428
  },
  {
    "state":"IN",
    "FIPS":18171,
    "county":"Warren County",
    "number":604.18,
    "rate":72.04626759,
    "population":8386
  },
  {
    "state":"IN",
    "FIPS":18173,
    "county":"Warrick County",
    "number":9028.55,
    "rate":149.3828488,
    "population":60439
  },
  {
    "state":"IN",
    "FIPS":18175,
    "county":"Washington County",
    "number":1047.21,
    "rate":37.50080573,
    "population":27925
  },
  {
    "state":"IN",
    "FIPS":18177,
    "county":"Wayne County",
    "number":8869.94,
    "rate":129.7324889,
    "population":68371
  },
  {
    "state":"IN",
    "FIPS":18179,
    "county":"Wells County",
    "number":3546,
    "rate":128.1161934,
    "population":27678
  },
  {
    "state":"IN",
    "FIPS":18181,
    "county":"White County",
    "number":94.43,
    "rate":3.868813504,
    "population":24408
  },
  {
    "state":"IN",
    "FIPS":18183,
    "county":"Whitley County",
    "number":4349.86,
    "rate":130.744214,
    "population":33270
  },
  {
    "state":"IA",
    "FIPS":19001,
    "county":"Adair County",
    "number":51.65,
    "rate":6.872920825,
    "population":7515
  },
  {
    "state":"IA",
    "FIPS":19007,
    "county":"Appanoose County",
    "number":317.08,
    "rate":24.94532295,
    "population":12711
  },
  {
    "state":"IA",
    "FIPS":19009,
    "county":"Audubon County",
    "number":260.86,
    "rate":44.39414568,
    "population":5876
  },
  {
    "state":"IA",
    "FIPS":19011,
    "county":"Benton County",
    "number":320.22,
    "rate":12.3823518,
    "population":25861
  },
  {
    "state":"IA",
    "FIPS":19013,
    "county":"Black Hawk County",
    "number":56023.74,
    "rate":425.5150728,
    "population":131661
  },
  {
    "state":"IA",
    "FIPS":19015,
    "county":"Boone County",
    "number":3319.96,
    "rate":126.551803,
    "population":26234
  },
  {
    "state":"IA",
    "FIPS":19017,
    "county":"Bremer County",
    "number":419.05,
    "rate":17.12995136,
    "population":24463
  },
  {
    "state":"IA",
    "FIPS":19019,
    "county":"Buchanan County",
    "number":2476.56,
    "rate":118.258046,
    "population":20942
  },
  {
    "state":"IA",
    "FIPS":19021,
    "county":"Buena Vista County",
    "number":13.51,
    "rate":0.657484913,
    "population":20548
  },
  {
    "state":"IA",
    "FIPS":19023,
    "county":"Butler County",
    "number":13.12,
    "rate":0.876009882,
    "population":14977
  },
  {
    "state":"IA",
    "FIPS":19025,
    "county":"Calhoun County",
    "number":96.23,
    "rate":9.710393542,
    "population":9910
  },
  {
    "state":"IA",
    "FIPS":19027,
    "county":"Carroll County",
    "number":1178.9,
    "rate":57.02331431,
    "population":20674
  },
  {
    "state":"IA",
    "FIPS":19029,
    "county":"Cass County",
    "number":539.03,
    "rate":39.28790087,
    "population":13720
  },
  {
    "state":"IA",
    "FIPS":19031,
    "county":"Cedar County",
    "number":221.03,
    "rate":11.99620081,
    "population":18425
  },
  {
    "state":"IA",
    "FIPS":19033,
    "county":"Cerro Gordo County",
    "number":118235.96,
    "rate":2704.947496,
    "population":43711
  },
  {
    "state":"IA",
    "FIPS":19035,
    "county":"Cherokee County",
    "number":937.46,
    "rate":78.24555546,
    "population":11981
  },
  {
    "state":"IA",
    "FIPS":19037,
    "county":"Chickasaw County",
    "number":150.62,
    "rate":12.27546862,
    "population":12270
  },
  {
    "state":"IA",
    "FIPS":19039,
    "county":"Clarke County",
    "number":191.5,
    "rate":20.50321199,
    "population":9340
  },
  {
    "state":"IA",
    "FIPS":19041,
    "county":"Clay County",
    "number":131.55,
    "rate":7.942401739,
    "population":16563
  },
  {
    "state":"IA",
    "FIPS":19043,
    "county":"Clayton County",
    "number":19.1,
    "rate":1.06501617,
    "population":17934
  },
  {
    "state":"IA",
    "FIPS":19045,
    "county":"Clinton County",
    "number":4346.49,
    "rate":89.20817684,
    "population":48723
  },
  {
    "state":"IA",
    "FIPS":19047,
    "county":"Crawford County",
    "number":761.3,
    "rate":43.99052352,
    "population":17306
  },
  {
    "state":"IA",
    "FIPS":19049,
    "county":"Dallas County",
    "number":10350.68,
    "rate":143.518254,
    "population":72121
  },
  {
    "state":"IA",
    "FIPS":19051,
    "county":"Davis County",
    "number":665.69,
    "rate":76.43701918,
    "population":8709
  },
  {
    "state":"IA",
    "FIPS":19055,
    "county":"Delaware County",
    "number":112.08,
    "rate":6.37832916,
    "population":17572
  },
  {
    "state":"IA",
    "FIPS":19057,
    "county":"Des Moines County",
    "number":2303.09,
    "rate":57.18978918,
    "population":40271
  },
  {
    "state":"IA",
    "FIPS":19059,
    "county":"Dickinson County",
    "number":426.74,
    "rate":25.15414088,
    "population":16965
  },
  {
    "state":"IA",
    "FIPS":19061,
    "county":"Dubuque County",
    "number":32036.02,
    "rate":336.7002638,
    "population":95147
  },
  {
    "state":"IA",
    "FIPS":19063,
    "county":"Emmet County",
    "number":1488.74,
    "rate":148.9186756,
    "population":9997
  },
  {
    "state":"IA",
    "FIPS":19065,
    "county":"Fayette County",
    "number":119.26,
    "rate":5.735308262,
    "population":20794
  },
  {
    "state":"IA",
    "FIPS":19067,
    "county":"Floyd County",
    "number":926.58,
    "rate":57.4231532,
    "population":16136
  },
  {
    "state":"IA",
    "FIPS":19069,
    "county":"Franklin County",
    "number":724.06,
    "rate":68.78776363,
    "population":10526
  },
  {
    "state":"IA",
    "FIPS":19071,
    "county":"Fremont County",
    "number":241.33,
    "rate":33.8281469,
    "population":7134
  },
  {
    "state":"IA",
    "FIPS":19073,
    "county":"Greene County",
    "number":68.35,
    "rate":7.460975876,
    "population":9161
  },
  {
    "state":"IA",
    "FIPS":19075,
    "county":"Grundy County",
    "number":167.89,
    "rate":13.51444901,
    "population":12423
  },
  {
    "state":"IA",
    "FIPS":19077,
    "county":"Guthrie County",
    "number":103.49,
    "rate":9.608207223,
    "population":10771
  },
  {
    "state":"IA",
    "FIPS":19079,
    "county":"Hamilton County",
    "number":2428.42,
    "rate":158.6373138,
    "population":15308
  },
  {
    "state":"IA",
    "FIPS":19081,
    "county":"Hancock County",
    "number":537.17,
    "rate":48.11626657,
    "population":11164
  },
  {
    "state":"IA",
    "FIPS":19083,
    "county":"Hardin County",
    "number":1428.46,
    "rate":82.19933249,
    "population":17378
  },
  {
    "state":"IA",
    "FIPS":19085,
    "county":"Harrison County",
    "number":2387.72,
    "rate":164.4435262,
    "population":14520
  },
  {
    "state":"IA",
    "FIPS":19087,
    "county":"Henry County",
    "number":23.27,
    "rate":1.157020684,
    "population":20112
  },
  {
    "state":"IA",
    "FIPS":19091,
    "county":"Humboldt County",
    "number":1131.83,
    "rate":116.2878866,
    "population":9733
  },
  {
    "state":"IA",
    "FIPS":19093,
    "county":"Ida County",
    "number":373.88,
    "rate":52.72599069,
    "population":7091
  },
  {
    "state":"IA",
    "FIPS":19095,
    "county":"Iowa County",
    "number":1090.49,
    "rate":67.28927558,
    "population":16206
  },
  {
    "state":"IA",
    "FIPS":19097,
    "county":"Jackson County",
    "number":1573.98,
    "rate":79.94209965,
    "population":19689
  },
  {
    "state":"IA",
    "FIPS":19099,
    "county":"Jasper County",
    "number":8088.43,
    "rate":221.3340083,
    "population":36544
  },
  {
    "state":"IA",
    "FIPS":19101,
    "county":"Jefferson County",
    "number":1713.95,
    "rate":100.3248654,
    "population":17084
  },
  {
    "state":"IA",
    "FIPS":19103,
    "county":"Johnson County",
    "number":133600.25,
    "rate":975.8039777,
    "population":136913
  },
  {
    "state":"IA",
    "FIPS":19105,
    "county":"Jones County",
    "number":976.39,
    "rate":47.35389689,
    "population":20619
  },
  {
    "state":"IA",
    "FIPS":19107,
    "county":"Keokuk County",
    "number":76.99,
    "rate":7.404308521,
    "population":10398
  },
  {
    "state":"IA",
    "FIPS":19109,
    "county":"Kossuth County",
    "number":49.12,
    "rate":3.199791545,
    "population":15351
  },
  {
    "state":"IA",
    "FIPS":19111,
    "county":"Lee County",
    "number":626.69,
    "rate":17.59277974,
    "population":35622
  },
  {
    "state":"IA",
    "FIPS":19113,
    "county":"Linn County",
    "number":52917.25,
    "rate":245.8911462,
    "population":215206
  },
  {
    "state":"IA",
    "FIPS":19115,
    "county":"Louisa County",
    "number":51.3,
    "rate":4.529001501,
    "population":11327
  },
  {
    "state":"IA",
    "FIPS":19117,
    "county":"Lucas County",
    "number":338.74,
    "rate":38.65130078,
    "population":8764
  },
  {
    "state":"IA",
    "FIPS":19121,
    "county":"Madison County",
    "number":24709.31,
    "rate":1581.193447,
    "population":15627
  },
  {
    "state":"IA",
    "FIPS":19123,
    "county":"Mahaska County",
    "number":121.05,
    "rate":5.399919704,
    "population":22417
  },
  {
    "state":"IA",
    "FIPS":19125,
    "county":"Marion County",
    "number":316.84,
    "rate":9.492480077,
    "population":33378
  },
  {
    "state":"IA",
    "FIPS":19127,
    "county":"Marshall County",
    "number":31059.19,
    "rate":756.4710897,
    "population":41058
  },
  {
    "state":"IA",
    "FIPS":19129,
    "county":"Mills County",
    "number":2116.3,
    "rate":142.2149049,
    "population":14881
  },
  {
    "state":"IA",
    "FIPS":19131,
    "county":"Mitchell County",
    "number":295.6,
    "rate":27.5566328,
    "population":10727
  },
  {
    "state":"IA",
    "FIPS":19133,
    "county":"Monona County",
    "number":1655.14,
    "rate":181.0479107,
    "population":9142
  },
  {
    "state":"IA",
    "FIPS":19135,
    "county":"Monroe County",
    "number":461.22,
    "rate":57.14533515,
    "population":8071
  },
  {
    "state":"IA",
    "FIPS":19137,
    "county":"Montgomery County",
    "number":2225.48,
    "rate":210.7861337,
    "population":10558
  },
  {
    "state":"IA",
    "FIPS":19139,
    "county":"Muscatine County",
    "number":672.32,
    "rate":15.66996854,
    "population":42905
  },
  {
    "state":"IA",
    "FIPS":19141,
    "county":"Obrien County",
    "number":152.63,
    "rate":10.77667161,
    "population":14163
  },
  {
    "state":"IA",
    "FIPS":19143,
    "county":"Osceola County",
    "number":32.97,
    "rate":5.326332795,
    "population":6190
  },
  {
    "state":"IA",
    "FIPS":19145,
    "county":"Page County",
    "number":10604.37,
    "rate":673.2505873,
    "population":15751
  },
  {
    "state":"IA",
    "FIPS":19147,
    "county":"Palo Alto County",
    "number":687.37,
    "rate":74.06206228,
    "population":9281
  },
  {
    "state":"IA",
    "FIPS":19149,
    "county":"Plymouth County",
    "number":481.13,
    "rate":19.33724529,
    "population":24881
  },
  {
    "state":"IA",
    "FIPS":19151,
    "county":"Pocahontas County",
    "number":18.42,
    "rate":2.572266443,
    "population":7161
  },
  {
    "state":"IA",
    "FIPS":19153,
    "county":"Polk County",
    "number":279253.19,
    "rate":628.9712918,
    "population":443984
  },
  {
    "state":"IA",
    "FIPS":19155,
    "county":"Pottawattamie County",
    "number":31860.61,
    "rate":342.889537,
    "population":92918
  },
  {
    "state":"IA",
    "FIPS":19157,
    "county":"Poweshiek County",
    "number":472.74,
    "rate":25.20070366,
    "population":18759
  },
  {
    "state":"IA",
    "FIPS":19159,
    "county":"Ringgold County",
    "number":1045.17,
    "rate":205.539823,
    "population":5085
  },
  {
    "state":"IA",
    "FIPS":19163,
    "county":"Scott County",
    "number":29694.09,
    "rate":175.8847222,
    "population":168827
  },
  {
    "state":"IA",
    "FIPS":19165,
    "county":"Shelby County",
    "number":3409.05,
    "rate":282.4165355,
    "population":12071
  },
  {
    "state":"IA",
    "FIPS":19167,
    "county":"Sioux County",
    "number":1367.88,
    "rate":39.82415279,
    "population":34348
  },
  {
    "state":"IA",
    "FIPS":19169,
    "county":"Story County",
    "number":5824.13,
    "rate":63.49832645,
    "population":91721
  },
  {
    "state":"IA",
    "FIPS":19171,
    "county":"Tama County",
    "number":214.73,
    "rate":12.25208262,
    "population":17526
  },
  {
    "state":"IA",
    "FIPS":19175,
    "county":"Union County",
    "number":935.4,
    "rate":74.29116035,
    "population":12591
  },
  {
    "state":"IA",
    "FIPS":19179,
    "county":"Wapello County",
    "number":818.96,
    "rate":23.16784067,
    "population":35349
  },
  {
    "state":"IA",
    "FIPS":19181,
    "county":"Warren County",
    "number":2068.24,
    "rate":44.05197018,
    "population":46950
  },
  {
    "state":"IA",
    "FIPS":19183,
    "county":"Washington County",
    "number":3074.34,
    "rate":140.2463391,
    "population":21921
  },
  {
    "state":"IA",
    "FIPS":19185,
    "county":"Wayne County",
    "number":18.54,
    "rate":2.917387884,
    "population":6355
  },
  {
    "state":"IA",
    "FIPS":19187,
    "county":"Webster County",
    "number":1487.85,
    "rate":39.93906531,
    "population":37253
  },
  {
    "state":"IA",
    "FIPS":19189,
    "county":"Winnebago County",
    "number":241.83,
    "rate":22.75832863,
    "population":10626
  },
  {
    "state":"IA",
    "FIPS":19191,
    "county":"Winneshiek County",
    "number":81.38,
    "rate":3.868606199,
    "population":21036
  },
  {
    "state":"IA",
    "FIPS":19193,
    "county":"Woodbury County",
    "number":29323.59,
    "rate":286.5590736,
    "population":102330
  },
  {
    "state":"IA",
    "FIPS":19195,
    "county":"Worth County",
    "number":10.99,
    "rate":1.461630536,
    "population":7519
  },
  {
    "state":"KS",
    "FIPS":20001,
    "county":"Allen County",
    "number":1150.45,
    "rate":86.23416535,
    "population":13341
  },
  {
    "state":"KS",
    "FIPS":20003,
    "county":"Anderson County",
    "number":40.94,
    "rate":5.1704976,
    "population":7918
  },
  {
    "state":"KS",
    "FIPS":20005,
    "county":"Atchison County",
    "number":1231.99,
    "rate":73.3327381,
    "population":16800
  },
  {
    "state":"KS",
    "FIPS":20007,
    "county":"Barber County",
    "number":193.56,
    "rate":39.66393443,
    "population":4880
  },
  {
    "state":"KS",
    "FIPS":20009,
    "county":"Barton County",
    "number":1098.67,
    "rate":39.87478677,
    "population":27553
  },
  {
    "state":"KS",
    "FIPS":20011,
    "county":"Bourbon County",
    "number":457.53,
    "rate":30.79143953,
    "population":14859
  },
  {
    "state":"KS",
    "FIPS":20013,
    "county":"Brown County",
    "number":246.31,
    "rate":24.90999191,
    "population":9888
  },
  {
    "state":"KS",
    "FIPS":20015,
    "county":"Butler County",
    "number":5017.86,
    "rate":76.31029868,
    "population":65756
  },
  {
    "state":"KS",
    "FIPS":20019,
    "county":"Chautauqua County",
    "number":10.61,
    "rate":2.97532249,
    "population":3566
  },
  {
    "state":"KS",
    "FIPS":20021,
    "county":"Cherokee County",
    "number":293.56,
    "rate":13.8315115,
    "population":21224
  },
  {
    "state":"KS",
    "FIPS":20025,
    "county":"Clark County",
    "number":81.91,
    "rate":37.67709292,
    "population":2174
  },
  {
    "state":"KS",
    "FIPS":20027,
    "county":"Clay County",
    "number":1842.32,
    "rate":216.3109076,
    "population":8517
  },
  {
    "state":"KS",
    "FIPS":20029,
    "county":"Cloud County",
    "number":191.75,
    "rate":20.41631175,
    "population":9392
  },
  {
    "state":"KS",
    "FIPS":20031,
    "county":"Coffey County",
    "number":554.01,
    "rate":65.13167176,
    "population":8506
  },
  {
    "state":"KS",
    "FIPS":20035,
    "county":"Cowley County",
    "number":2092.43,
    "rate":57.69992279,
    "population":36264
  },
  {
    "state":"KS",
    "FIPS":20037,
    "county":"Crawford County",
    "number":4114.65,
    "rate":104.5362161,
    "population":39361
  },
  {
    "state":"KS",
    "FIPS":20041,
    "county":"Dickinson County",
    "number":1453.27,
    "rate":73.55349732,
    "population":19758
  },
  {
    "state":"KS",
    "FIPS":20043,
    "county":"Doniphan County",
    "number":80.13,
    "rate":10.17265456,
    "population":7877
  },
  {
    "state":"KS",
    "FIPS":20045,
    "county":"Douglas County",
    "number":6805.53,
    "rate":60.04579183,
    "population":113339
  },
  {
    "state":"KS",
    "FIPS":20051,
    "county":"Ellis County",
    "number":3071.66,
    "rate":105.5916122,
    "population":29090
  },
  {
    "state":"KS",
    "FIPS":20053,
    "county":"Ellsworth County",
    "number":684.89,
    "rate":105.9381284,
    "population":6465
  },
  {
    "state":"KS",
    "FIPS":20055,
    "county":"Finney County",
    "number":926.83,
    "rate":24.96175599,
    "population":37130
  },
  {
    "state":"KS",
    "FIPS":20057,
    "county":"Ford County",
    "number":908.73,
    "rate":26.1332068,
    "population":34773
  },
  {
    "state":"KS",
    "FIPS":20059,
    "county":"Franklin County",
    "number":3313.28,
    "rate":128.034624,
    "population":25878
  },
  {
    "state":"KS",
    "FIPS":20061,
    "county":"Geary County",
    "number":1341.75,
    "rate":35.30642318,
    "population":38003
  },
  {
    "state":"KS",
    "FIPS":20063,
    "county":"Gove County",
    "number":170.58,
    "rate":62.69018743,
    "population":2721
  },
  {
    "state":"KS",
    "FIPS":20065,
    "county":"Graham County",
    "number":336.43,
    "rate":129.7955247,
    "population":2592
  },
  {
    "state":"KS",
    "FIPS":20067,
    "county":"Grant County",
    "number":57.44,
    "rate":7.315333673,
    "population":7852
  },
  {
    "state":"KS",
    "FIPS":20069,
    "county":"Gray County",
    "number":11.38,
    "rate":1.898565232,
    "population":5994
  },
  {
    "state":"KS",
    "FIPS":20071,
    "county":"Greeley County",
    "number":66.85,
    "rate":52.80410742,
    "population":1266
  },
  {
    "state":"KS",
    "FIPS":20073,
    "county":"Greenwood County",
    "number":468.3,
    "rate":72.64970524,
    "population":6446
  },
  {
    "state":"KS",
    "FIPS":20077,
    "county":"Harper County",
    "number":406.1,
    "rate":69.13517194,
    "population":5874
  },
  {
    "state":"KS",
    "FIPS":20079,
    "county":"Harvey County",
    "number":43672,
    "rate":1253.825615,
    "population":34831
  },
  {
    "state":"KS",
    "FIPS":20081,
    "county":"Haskell County",
    "number":126.87,
    "rate":30.05685856,
    "population":4221
  },
  {
    "state":"KS",
    "FIPS":20083,
    "county":"Hodgeman County",
    "number":11.25,
    "rate":5.760368664,
    "population":1953
  },
  {
    "state":"KS",
    "FIPS":20085,
    "county":"Jackson County",
    "number":484.79,
    "rate":36.04922665,
    "population":13448
  },
  {
    "state":"KS",
    "FIPS":20087,
    "county":"Jefferson County",
    "number":7652.69,
    "rate":404.8828104,
    "population":18901
  },
  {
    "state":"KS",
    "FIPS":20091,
    "county":"Johnson County",
    "number":333694.64,
    "rate":595.9322373,
    "population":559954
  },
  {
    "state":"KS",
    "FIPS":20093,
    "county":"Kearny County",
    "number":49.13,
    "rate":12.35663984,
    "population":3976
  },
  {
    "state":"KS",
    "FIPS":20095,
    "county":"Kingman County",
    "number":194.43,
    "rate":24.83776188,
    "population":7828
  },
  {
    "state":"KS",
    "FIPS":20099,
    "county":"Labette County",
    "number":1742.65,
    "rate":82.12686743,
    "population":21219
  },
  {
    "state":"KS",
    "FIPS":20103,
    "county":"Leavenworth County",
    "number":7762.05,
    "rate":99.86041246,
    "population":77729
  },
  {
    "state":"KS",
    "FIPS":20105,
    "county":"Lincoln County",
    "number":12.23,
    "rate":3.871478316,
    "population":3159
  },
  {
    "state":"KS",
    "FIPS":20107,
    "county":"Linn County",
    "number":44.31,
    "rate":4.673557642,
    "population":9481
  },
  {
    "state":"KS",
    "FIPS":20109,
    "county":"Logan County",
    "number":337.79,
    "rate":120.8550984,
    "population":2795
  },
  {
    "state":"KS",
    "FIPS":20111,
    "county":"Lyon County",
    "number":679.18,
    "rate":20.25649438,
    "population":33529
  },
  {
    "state":"KS",
    "FIPS":20113,
    "county":"McPherson County",
    "number":1778.39,
    "rate":60.61109028,
    "population":29341
  },
  {
    "state":"KS",
    "FIPS":20115,
    "county":"Marion County",
    "number":107.98,
    "rate":8.727772389,
    "population":12372
  },
  {
    "state":"KS",
    "FIPS":20117,
    "county":"Marshall County",
    "number":165.11,
    "rate":16.4027419,
    "population":10066
  },
  {
    "state":"KS",
    "FIPS":20119,
    "county":"Meade County",
    "number":16.28,
    "rate":3.687429219,
    "population":4415
  },
  {
    "state":"KS",
    "FIPS":20121,
    "county":"Miami County",
    "number":151.47,
    "rate":4.645606502,
    "population":32605
  },
  {
    "state":"KS",
    "FIPS":20123,
    "county":"Mitchell County",
    "number":446.2,
    "rate":70.35635446,
    "population":6342
  },
  {
    "state":"KS",
    "FIPS":20125,
    "county":"Montgomery County",
    "number":629.04,
    "rate":18.26852148,
    "population":34433
  },
  {
    "state":"KS",
    "FIPS":20127,
    "county":"Morris County",
    "number":353.16,
    "rate":60.35891301,
    "population":5851
  },
  {
    "state":"KS",
    "FIPS":20129,
    "county":"Morton County",
    "number":25.2,
    "rate":8.028034406,
    "population":3139
  },
  {
    "state":"KS",
    "FIPS":20131,
    "county":"Nemaha County",
    "number":174.3,
    "rate":17.25059382,
    "population":10104
  },
  {
    "state":"KS",
    "FIPS":20133,
    "county":"Neosho County",
    "number":186.38,
    "rate":11.32871383,
    "population":16452
  },
  {
    "state":"KS",
    "FIPS":20137,
    "county":"Norton County",
    "number":215.69,
    "rate":38.48171276,
    "population":5605
  },
  {
    "state":"KS",
    "FIPS":20139,
    "county":"Osage County",
    "number":717.02,
    "rate":44.33438447,
    "population":16173
  },
  {
    "state":"KS",
    "FIPS":20141,
    "county":"Osborne County",
    "number":97.59,
    "rate":25.58060288,
    "population":3815
  },
  {
    "state":"KS",
    "FIPS":20143,
    "county":"Ottawa County",
    "number":264.2,
    "rate":43.59016664,
    "population":6061
  },
  {
    "state":"KS",
    "FIPS":20145,
    "county":"Pawnee County",
    "number":389.06,
    "rate":56.27947346,
    "population":6913
  },
  {
    "state":"KS",
    "FIPS":20147,
    "county":"Phillips County",
    "number":10.71,
    "rate":1.939865966,
    "population":5521
  },
  {
    "state":"KS",
    "FIPS":20149,
    "county":"Pottawatomie County",
    "number":1300.75,
    "rate":58.19650128,
    "population":22351
  },
  {
    "state":"KS",
    "FIPS":20151,
    "county":"Pratt County",
    "number":507.08,
    "rate":51.8115868,
    "population":9787
  },
  {
    "state":"KS",
    "FIPS":20155,
    "county":"Reno County",
    "number":6272.11,
    "rate":97.67055453,
    "population":64217
  },
  {
    "state":"KS",
    "FIPS":20157,
    "county":"Republic County",
    "number":1658.95,
    "rate":341.4882668,
    "population":4858
  },
  {
    "state":"KS",
    "FIPS":20159,
    "county":"Rice County",
    "number":285.58,
    "rate":28.53232091,
    "population":10009
  },
  {
    "state":"KS",
    "FIPS":20161,
    "county":"Riley County",
    "number":8788.73,
    "rate":115.1910298,
    "population":76297
  },
  {
    "state":"KS",
    "FIPS":20163,
    "county":"Rooks County",
    "number":25.94,
    "rate":4.991341158,
    "population":5197
  },
  {
    "state":"KS",
    "FIPS":20167,
    "county":"Russell County",
    "number":200.4,
    "rate":28.78069798,
    "population":6963
  },
  {
    "state":"KS",
    "FIPS":20169,
    "county":"Saline County",
    "number":3545.05,
    "rate":63.42905708,
    "population":55890
  },
  {
    "state":"KS",
    "FIPS":20173,
    "county":"Sedgwick County",
    "number":210941.08,
    "rate":418.6825877,
    "population":503821
  },
  {
    "state":"KS",
    "FIPS":20175,
    "county":"Seward County",
    "number":236.86,
    "rate":10.09934763,
    "population":23453
  },
  {
    "state":"KS",
    "FIPS":20177,
    "county":"Shawnee County",
    "number":60827.76,
    "rate":340.0022358,
    "population":178904
  },
  {
    "state":"KS",
    "FIPS":20181,
    "county":"Sherman County",
    "number":235.03,
    "rate":38.3722449,
    "population":6125
  },
  {
    "state":"KS",
    "FIPS":20183,
    "county":"Smith County",
    "number":131.16,
    "rate":34.93873202,
    "population":3754
  },
  {
    "state":"KS",
    "FIPS":20185,
    "county":"Stafford County",
    "number":27.48,
    "rate":6.311437758,
    "population":4354
  },
  {
    "state":"KS",
    "FIPS":20189,
    "county":"Stevens County",
    "number":34.83,
    "rate":6.071117309,
    "population":5737
  },
  {
    "state":"KS",
    "FIPS":20191,
    "county":"Sumner County",
    "number":3062.6,
    "rate":129.1909221,
    "population":23706
  },
  {
    "state":"KS",
    "FIPS":20193,
    "county":"Thomas County",
    "number":679.16,
    "rate":85.46118032,
    "population":7947
  },
  {
    "state":"KS",
    "FIPS":20195,
    "county":"Trego County",
    "number":651.89,
    "rate":219.5655103,
    "population":2969
  },
  {
    "state":"KS",
    "FIPS":20197,
    "county":"Wabaunsee County",
    "number":60.54,
    "rate":8.626389285,
    "population":7018
  },
  {
    "state":"KS",
    "FIPS":20205,
    "county":"Wilson County",
    "number":3946.41,
    "rate":432.7678474,
    "population":9119
  },
  {
    "state":"KS",
    "FIPS":20207,
    "county":"Woodson County",
    "number":27.42,
    "rate":8.411042945,
    "population":3260
  },
  {
    "state":"KS",
    "FIPS":20209,
    "county":"Wyandotte County",
    "number":16313.97,
    "rate":102.4084292,
    "population":159303
  },
  {
    "state":"KY",
    "FIPS":21001,
    "county":"Adair County",
    "number":287.83,
    "rate":15.17210479,
    "population":18971
  },
  {
    "state":"KY",
    "FIPS":21003,
    "county":"Allen County",
    "number":426.83,
    "rate":21.09782018,
    "population":20231
  },
  {
    "state":"KY",
    "FIPS":21005,
    "county":"Anderson County",
    "number":1210.45,
    "rate":55.87637908,
    "population":21663
  },
  {
    "state":"KY",
    "FIPS":21009,
    "county":"Barren County",
    "number":12361.56,
    "rate":289.7082191,
    "population":42669
  },
  {
    "state":"KY",
    "FIPS":21011,
    "county":"Bath County",
    "number":602.77,
    "rate":51.08653276,
    "population":11799
  },
  {
    "state":"KY",
    "FIPS":21013,
    "county":"Bell County",
    "number":3405.86,
    "rate":120.9811026,
    "population":28152
  },
  {
    "state":"KY",
    "FIPS":21015,
    "county":"Boone County",
    "number":15589.7,
    "rate":126.4802285,
    "population":123258
  },
  {
    "state":"KY",
    "FIPS":21017,
    "county":"Bourbon County",
    "number":2111.48,
    "rate":105.595119,
    "population":19996
  },
  {
    "state":"KY",
    "FIPS":21019,
    "county":"Boyd County",
    "number":205526.46,
    "rate":4170.247139,
    "population":49284
  },
  {
    "state":"KY",
    "FIPS":21021,
    "county":"Boyle County",
    "number":7209.1,
    "rate":248.1788763,
    "population":29048
  },
  {
    "state":"KY",
    "FIPS":21023,
    "county":"Bracken County",
    "number":1021.41,
    "rate":120.6769849,
    "population":8464
  },
  {
    "state":"KY",
    "FIPS":21025,
    "county":"Breathitt County",
    "number":3215.25,
    "rate":235.635764,
    "population":13645
  },
  {
    "state":"KY",
    "FIPS":21027,
    "county":"Breckinridge County",
    "number":2125.7,
    "rate":105.766743,
    "population":20098
  },
  {
    "state":"KY",
    "FIPS":21029,
    "county":"Bullitt County",
    "number":11411.43,
    "rate":150.3224744,
    "population":75913
  },
  {
    "state":"KY",
    "FIPS":21031,
    "county":"Butler County",
    "number":1038.24,
    "rate":81.07449633,
    "population":12806
  },
  {
    "state":"KY",
    "FIPS":21033,
    "county":"Caldwell County",
    "number":246.8,
    "rate":19.1006888,
    "population":12921
  },
  {
    "state":"KY",
    "FIPS":21035,
    "county":"Calloway County",
    "number":3682.47,
    "rate":96.32913048,
    "population":38228
  },
  {
    "state":"KY",
    "FIPS":21037,
    "county":"Campbell County",
    "number":15431.44,
    "rate":169.2507815,
    "population":91175
  },
  {
    "state":"KY",
    "FIPS":21039,
    "county":"Carlisle County",
    "number":892.95,
    "rate":177.1023403,
    "population":5042
  },
  {
    "state":"KY",
    "FIPS":21041,
    "county":"Carroll County",
    "number":1242.86,
    "rate":114.296487,
    "population":10874
  },
  {
    "state":"KY",
    "FIPS":21043,
    "county":"Carter County",
    "number":25090.5,
    "rate":913.344982,
    "population":27471
  },
  {
    "state":"KY",
    "FIPS":21045,
    "county":"Casey County",
    "number":418.81,
    "rate":26.0356832,
    "population":16086
  },
  {
    "state":"KY",
    "FIPS":21047,
    "county":"Christian County",
    "number":3338.63,
    "rate":44.06268972,
    "population":75770
  },
  {
    "state":"KY",
    "FIPS":21049,
    "county":"Clark County",
    "number":69410.63,
    "rate":1942.15367,
    "population":35739
  },
  {
    "state":"KY",
    "FIPS":21051,
    "county":"Clay County",
    "number":1915.54,
    "rate":88.92530523,
    "population":21541
  },
  {
    "state":"KY",
    "FIPS":21053,
    "county":"Clinton County",
    "number":268.55,
    "rate":26.24352585,
    "population":10233
  },
  {
    "state":"KY",
    "FIPS":21055,
    "county":"Crittenden County",
    "number":77.77,
    "rate":8.410295231,
    "population":9247
  },
  {
    "state":"KY",
    "FIPS":21057,
    "county":"Cumberland County",
    "number":951.84,
    "rate":138.7724158,
    "population":6859
  },
  {
    "state":"KY",
    "FIPS":21059,
    "county":"Daviess County",
    "number":293566.39,
    "rate":3003.943537,
    "population":97727
  },
  {
    "state":"KY",
    "FIPS":21061,
    "county":"Edmonson County",
    "number":364.82,
    "rate":30.07584501,
    "population":12130
  },
  {
    "state":"KY",
    "FIPS":21065,
    "county":"Estill County",
    "number":1328.22,
    "rate":91.6899075,
    "population":14486
  },
  {
    "state":"KY",
    "FIPS":21067,
    "county":"Fayette County",
    "number":178921.52,
    "rate":586.1455655,
    "population":305251
  },
  {
    "state":"KY",
    "FIPS":21069,
    "county":"Fleming County",
    "number":2514.86,
    "rate":173.0567024,
    "population":14532
  },
  {
    "state":"KY",
    "FIPS":21071,
    "county":"Floyd County",
    "number":18218.77,
    "rate":465.4651133,
    "population":39141
  },
  {
    "state":"KY",
    "FIPS":21073,
    "county":"Franklin County",
    "number":8499.37,
    "rate":172.1251949,
    "population":49379
  },
  {
    "state":"KY",
    "FIPS":21075,
    "county":"Fulton County",
    "number":217.36,
    "rate":33.1999389,
    "population":6547
  },
  {
    "state":"KY",
    "FIPS":21077,
    "county":"Gallatin County",
    "number":809.03,
    "rate":95.28088564,
    "population":8491
  },
  {
    "state":"KY",
    "FIPS":21079,
    "county":"Garrard County",
    "number":106.65,
    "rate":6.302446519,
    "population":16922
  },
  {
    "state":"KY",
    "FIPS":21081,
    "county":"Grant County",
    "number":6044.27,
    "rate":246.7955576,
    "population":24491
  },
  {
    "state":"KY",
    "FIPS":21083,
    "county":"Graves County",
    "number":1480.01,
    "rate":39.43013188,
    "population":37535
  },
  {
    "state":"KY",
    "FIPS":21085,
    "county":"Grayson County",
    "number":1403.35,
    "rate":54.25671757,
    "population":25865
  },
  {
    "state":"KY",
    "FIPS":21087,
    "county":"Green County",
    "number":78.11,
    "rate":6.912389381,
    "population":11300
  },
  {
    "state":"KY",
    "FIPS":21089,
    "county":"Greenup County",
    "number":4306.47,
    "rate":117.2849828,
    "population":36718
  },
  {
    "state":"KY",
    "FIPS":21091,
    "county":"Hancock County",
    "number":183.05,
    "rate":21.11059855,
    "population":8671
  },
  {
    "state":"KY",
    "FIPS":21093,
    "county":"Hardin County",
    "number":16181.03,
    "rate":151.1511228,
    "population":107052
  },
  {
    "state":"KY",
    "FIPS":21095,
    "county":"Harlan County",
    "number":188.8,
    "rate":6.597707576,
    "population":28616
  },
  {
    "state":"KY",
    "FIPS":21097,
    "county":"Harrison County",
    "number":2700.32,
    "rate":145.2409639,
    "population":18592
  },
  {
    "state":"KY",
    "FIPS":21099,
    "county":"Hart County",
    "number":17545.05,
    "rate":951.8282428,
    "population":18433
  },
  {
    "state":"KY",
    "FIPS":21101,
    "county":"Henderson County",
    "number":3411.09,
    "rate":73.41677069,
    "population":46462
  },
  {
    "state":"KY",
    "FIPS":21103,
    "county":"Henry County",
    "number":59440.18,
    "rate":3874.343632,
    "population":15342
  },
  {
    "state":"KY",
    "FIPS":21105,
    "county":"Hickman County",
    "number":15.12,
    "rate":3.173803526,
    "population":4764
  },
  {
    "state":"KY",
    "FIPS":21107,
    "county":"Hopkins County",
    "number":19266.55,
    "rate":412.5422894,
    "population":46702
  },
  {
    "state":"KY",
    "FIPS":21109,
    "county":"Jackson County",
    "number":321.88,
    "rate":24.20514363,
    "population":13298
  },
  {
    "state":"KY",
    "FIPS":21111,
    "county":"Jefferson County",
    "number":786695.85,
    "rate":1047.075175,
    "population":751327
  },
  {
    "state":"KY",
    "FIPS":21113,
    "county":"Jessamine County",
    "number":3677.32,
    "rate":74.1948631,
    "population":49563
  },
  {
    "state":"KY",
    "FIPS":21115,
    "county":"Johnson County",
    "number":3482.17,
    "rate":148.7153534,
    "population":23415
  },
  {
    "state":"KY",
    "FIPS":21117,
    "county":"Kenton County",
    "number":295538.23,
    "rate":1828.022527,
    "population":161671
  },
  {
    "state":"KY",
    "FIPS":21119,
    "county":"Knott County",
    "number":1763.44,
    "rate":109.618947,
    "population":16087
  },
  {
    "state":"KY",
    "FIPS":21121,
    "county":"Knox County",
    "number":2577.69,
    "rate":81.31514196,
    "population":31700
  },
  {
    "state":"KY",
    "FIPS":21123,
    "county":"Larue County",
    "number":373.04,
    "rate":26.48491303,
    "population":14085
  },
  {
    "state":"KY",
    "FIPS":21125,
    "county":"Laurel County",
    "number":6651.18,
    "rate":111.6213268,
    "population":59587
  },
  {
    "state":"KY",
    "FIPS":21127,
    "county":"Lawrence County",
    "number":1152.65,
    "rate":72.8280786,
    "population":15827
  },
  {
    "state":"KY",
    "FIPS":21129,
    "county":"Lee County",
    "number":305.53,
    "rate":39.95945592,
    "population":7646
  },
  {
    "state":"KY",
    "FIPS":21131,
    "county":"Leslie County",
    "number":228.76,
    "rate":20.52763819,
    "population":11144
  },
  {
    "state":"KY",
    "FIPS":21133,
    "county":"Letcher County",
    "number":1839.07,
    "rate":76.80071828,
    "population":23946
  },
  {
    "state":"KY",
    "FIPS":21135,
    "county":"Lewis County",
    "number":695.29,
    "rate":50.23045803,
    "population":13842
  },
  {
    "state":"KY",
    "FIPS":21137,
    "county":"Lincoln County",
    "number":1372.45,
    "rate":56.22951491,
    "population":24408
  },
  {
    "state":"KY",
    "FIPS":21141,
    "county":"Logan County",
    "number":818.8,
    "rate":30.66322136,
    "population":26703
  },
  {
    "state":"KY",
    "FIPS":21143,
    "county":"Lyon County",
    "number":378.25,
    "rate":44.83228636,
    "population":8437
  },
  {
    "state":"KY",
    "FIPS":21145,
    "county":"McCracken County",
    "number":49328.17,
    "rate":751.4383426,
    "population":65645
  },
  {
    "state":"KY",
    "FIPS":21147,
    "county":"McCreary County",
    "number":1323.36,
    "rate":73.37732187,
    "population":18035
  },
  {
    "state":"KY",
    "FIPS":21149,
    "county":"McLean County",
    "number":29.36,
    "rate":3.084033613,
    "population":9520
  },
  {
    "state":"KY",
    "FIPS":21151,
    "county":"Madison County",
    "number":5272.39,
    "rate":61.87815412,
    "population":85206
  },
  {
    "state":"KY",
    "FIPS":21153,
    "county":"Magoffin County",
    "number":156.84,
    "rate":12.03683807,
    "population":13030
  },
  {
    "state":"KY",
    "FIPS":21155,
    "county":"Marion County",
    "number":3500.42,
    "rate":175.1085543,
    "population":19990
  },
  {
    "state":"KY",
    "FIPS":21157,
    "county":"Marshall County",
    "number":30497.49,
    "rate":975.3578739,
    "population":31268
  },
  {
    "state":"KY",
    "FIPS":21159,
    "county":"Martin County",
    "number":433.58,
    "rate":33.97163676,
    "population":12763
  },
  {
    "state":"KY",
    "FIPS":21161,
    "county":"Mason County",
    "number":116292.33,
    "rate":6659.355781,
    "population":17463
  },
  {
    "state":"KY",
    "FIPS":21163,
    "county":"Meade County",
    "number":1851.64,
    "rate":63.24771144,
    "population":29276
  },
  {
    "state":"KY",
    "FIPS":21165,
    "county":"Menifee County",
    "number":960.98,
    "rate":152.1982895,
    "population":6314
  },
  {
    "state":"KY",
    "FIPS":21167,
    "county":"Mercer County",
    "number":761.39,
    "rate":35.67399147,
    "population":21343
  },
  {
    "state":"KY",
    "FIPS":21169,
    "county":"Metcalfe County",
    "number":607.2,
    "rate":60.82339978,
    "population":9983
  },
  {
    "state":"KY",
    "FIPS":21171,
    "county":"Monroe County",
    "number":1161.83,
    "rate":106.9923566,
    "population":10859
  },
  {
    "state":"KY",
    "FIPS":21173,
    "county":"Montgomery County",
    "number":5047.71,
    "rate":187.7868304,
    "population":26880
  },
  {
    "state":"KY",
    "FIPS":21175,
    "county":"Morgan County",
    "number":115.38,
    "rate":8.559347181,
    "population":13480
  },
  {
    "state":"KY",
    "FIPS":21177,
    "county":"Muhlenberg County",
    "number":3146.4,
    "rate":100.3348321,
    "population":31359
  },
  {
    "state":"KY",
    "FIPS":21179,
    "county":"Nelson County",
    "number":1759.17,
    "rate":39.66472007,
    "population":44351
  },
  {
    "state":"KY",
    "FIPS":21183,
    "county":"Ohio County",
    "number":1622.49,
    "rate":67.57277914,
    "population":24011
  },
  {
    "state":"KY",
    "FIPS":21185,
    "county":"Oldham County",
    "number":6249.69,
    "rate":101.7483679,
    "population":61423
  },
  {
    "state":"KY",
    "FIPS":21187,
    "county":"Owen County",
    "number":1146.16,
    "rate":106.5105473,
    "population":10761
  },
  {
    "state":"KY",
    "FIPS":21189,
    "county":"Owsley County",
    "number":12.96,
    "rate":2.760971453,
    "population":4694
  },
  {
    "state":"KY",
    "FIPS":21191,
    "county":"Pendleton County",
    "number":703.09,
    "rate":48.33230219,
    "population":14547
  },
  {
    "state":"KY",
    "FIPS":21193,
    "county":"Perry County",
    "number":9152.18,
    "rate":323.6387425,
    "population":28279
  },
  {
    "state":"KY",
    "FIPS":21195,
    "county":"Pike County",
    "number":26201.23,
    "rate":405.8242337,
    "population":64563
  },
  {
    "state":"KY",
    "FIPS":21197,
    "county":"Powell County",
    "number":864.83,
    "rate":69.21408563,
    "population":12495
  },
  {
    "state":"KY",
    "FIPS":21199,
    "county":"Pulaski County",
    "number":6557.2,
    "rate":103.3476233,
    "population":63448
  },
  {
    "state":"KY",
    "FIPS":21203,
    "county":"Rockcastle County",
    "number":33225.44,
    "rate":1946.536997,
    "population":17069
  },
  {
    "state":"KY",
    "FIPS":21205,
    "county":"Rowan County",
    "number":32682.01,
    "rate":1395.831981,
    "population":23414
  },
  {
    "state":"KY",
    "FIPS":21207,
    "county":"Russell County",
    "number":2044.22,
    "rate":116.5395359,
    "population":17541
  },
  {
    "state":"KY",
    "FIPS":21209,
    "county":"Scott County",
    "number":2290.62,
    "rate":46.72064942,
    "population":49028
  },
  {
    "state":"KY",
    "FIPS":21211,
    "county":"Shelby County",
    "number":2208.86,
    "rate":50.65844093,
    "population":43603
  },
  {
    "state":"KY",
    "FIPS":21213,
    "county":"Simpson County",
    "number":590.62,
    "rate":33.63631186,
    "population":17559
  },
  {
    "state":"KY",
    "FIPS":21215,
    "county":"Spencer County",
    "number":278.27,
    "rate":15.98426101,
    "population":17409
  },
  {
    "state":"KY",
    "FIPS":21217,
    "county":"Taylor County",
    "number":4150.98,
    "rate":165.7143998,
    "population":25049
  },
  {
    "state":"KY",
    "FIPS":21219,
    "county":"Todd County",
    "number":14.86,
    "rate":1.175632911,
    "population":12640
  },
  {
    "state":"KY",
    "FIPS":21221,
    "county":"Trigg County",
    "number":203.97,
    "rate":14.17245692,
    "population":14392
  },
  {
    "state":"KY",
    "FIPS":21223,
    "county":"Trimble County",
    "number":924.52,
    "rate":104.5600543,
    "population":8842
  },
  {
    "state":"KY",
    "FIPS":21225,
    "county":"Union County",
    "number":2249.97,
    "rate":148.8173821,
    "population":15119
  },
  {
    "state":"KY",
    "FIPS":21227,
    "county":"Warren County",
    "number":65957.35,
    "rate":562.8480608,
    "population":117185
  },
  {
    "state":"KY",
    "FIPS":21229,
    "county":"Washington County",
    "number":354.08,
    "rate":29.79969702,
    "population":11882
  },
  {
    "state":"KY",
    "FIPS":21231,
    "county":"Wayne County",
    "number":321.58,
    "rate":15.47918171,
    "population":20775
  },
  {
    "state":"KY",
    "FIPS":21233,
    "county":"Webster County",
    "number":383.26,
    "rate":28.43386008,
    "population":13479
  },
  {
    "state":"KY",
    "FIPS":21235,
    "county":"Whitley County",
    "number":3735.34,
    "rate":105.2060273,
    "population":35505
  },
  {
    "state":"KY",
    "FIPS":21237,
    "county":"Wolfe County",
    "number":1560.27,
    "rate":217.0659432,
    "population":7188
  },
  {
    "state":"KY",
    "FIPS":21239,
    "county":"Woodford County",
    "number":716.29,
    "rate":28.60697312,
    "population":25039
  },
  {
    "state":"LA",
    "FIPS":22001,
    "county":"Acadia Parish",
    "number":2912.09,
    "rate":47.06560212,
    "population":61873
  },
  {
    "state":"LA",
    "FIPS":22003,
    "county":"Allen Parish",
    "number":1128.2,
    "rate":44.0479444,
    "population":25613
  },
  {
    "state":"LA",
    "FIPS":22005,
    "county":"Ascension Parish",
    "number":13432.85,
    "rate":119.7511879,
    "population":112173
  },
  {
    "state":"LA",
    "FIPS":22007,
    "county":"Assumption Parish",
    "number":710.41,
    "rate":30.78966758,
    "population":23073
  },
  {
    "state":"LA",
    "FIPS":22009,
    "county":"Avoyelles Parish",
    "number":1856.72,
    "rate":44.63054661,
    "population":41602
  },
  {
    "state":"LA",
    "FIPS":22011,
    "county":"Beauregard Parish",
    "number":1518.49,
    "rate":41.88475754,
    "population":36254
  },
  {
    "state":"LA",
    "FIPS":22013,
    "county":"Bienville Parish",
    "number":450.89,
    "rate":31.83576926,
    "population":14163
  },
  {
    "state":"LA",
    "FIPS":22015,
    "county":"Bossier Parish",
    "number":82230.68,
    "rate":668.1455721,
    "population":123073
  },
  {
    "state":"LA",
    "FIPS":22017,
    "county":"Caddo Parish",
    "number":88517.94,
    "rate":343.9887614,
    "population":257328
  },
  {
    "state":"LA",
    "FIPS":22019,
    "county":"Calcasieu Parish",
    "number":251919.23,
    "rate":1294.196493,
    "population":194653
  },
  {
    "state":"LA",
    "FIPS":22021,
    "county":"Caldwell Parish",
    "number":458.01,
    "rate":45.801,
    "population":10000
  },
  {
    "state":"LA",
    "FIPS":22023,
    "county":"Cameron Parish",
    "number":68.89,
    "rate":10.40163068,
    "population":6623
  },
  {
    "state":"LA",
    "FIPS":22025,
    "county":"Catahoula Parish",
    "number":14.4,
    "rate":1.404878049,
    "population":10250
  },
  {
    "state":"LA",
    "FIPS":22027,
    "county":"Claiborne Parish",
    "number":614.17,
    "rate":36.42547892,
    "population":16861
  },
  {
    "state":"LA",
    "FIPS":22029,
    "county":"Concordia Parish",
    "number":342.35,
    "rate":16.74410643,
    "population":20446
  },
  {
    "state":"LA",
    "FIPS":22031,
    "county":"De Soto Parish",
    "number":510.81,
    "rate":18.89439615,
    "population":27035
  },
  {
    "state":"LA",
    "FIPS":22033,
    "county":"East Baton Rouge Parish",
    "number":372982.23,
    "rate":839.4904073,
    "population":444296
  },
  {
    "state":"LA",
    "FIPS":22035,
    "county":"East Carroll Parish",
    "number":15176.73,
    "rate":2002.73555,
    "population":7578
  },
  {
    "state":"LA",
    "FIPS":22037,
    "county":"East Feliciana Parish",
    "number":818.5,
    "rate":40.98647972,
    "population":19970
  },
  {
    "state":"LA",
    "FIPS":22039,
    "county":"Evangeline Parish",
    "number":2868.3,
    "rate":85.22149924,
    "population":33657
  },
  {
    "state":"LA",
    "FIPS":22041,
    "county":"Franklin Parish",
    "number":1024.51,
    "rate":49.70212972,
    "population":20613
  },
  {
    "state":"LA",
    "FIPS":22043,
    "county":"Grant Parish",
    "number":203.18,
    "rate":9.080264569,
    "population":22376
  },
  {
    "state":"LA",
    "FIPS":22045,
    "county":"Iberia Parish",
    "number":8940.52,
    "rate":120.9551383,
    "population":73916
  },
  {
    "state":"LA",
    "FIPS":22047,
    "county":"Iberville Parish",
    "number":637.15,
    "rate":19.10494753,
    "population":33350
  },
  {
    "state":"LA",
    "FIPS":22049,
    "county":"Jackson Parish",
    "number":148.55,
    "rate":9.14942104,
    "population":16236
  },
  {
    "state":"LA",
    "FIPS":22051,
    "county":"Jefferson Parish",
    "number":567417.95,
    "rate":1305.684749,
    "population":434575
  },
  {
    "state":"LA",
    "FIPS":22053,
    "county":"Jefferson Davis Parish",
    "number":2301.25,
    "rate":73.19730271,
    "population":31439
  },
  {
    "state":"LA",
    "FIPS":22055,
    "county":"Lafayette Parish",
    "number":84780.66,
    "rate":373.3926141,
    "population":227055
  },
  {
    "state":"LA",
    "FIPS":22057,
    "county":"Lafourche Parish",
    "number":7927.66,
    "rate":81.62326898,
    "population":97125
  },
  {
    "state":"LA",
    "FIPS":22059,
    "county":"La Salle Parish",
    "number":344.75,
    "rate":23.20298829,
    "population":14858
  },
  {
    "state":"LA",
    "FIPS":22061,
    "county":"Lincoln Parish",
    "number":6092.29,
    "rate":129.2217792,
    "population":47146
  },
  {
    "state":"LA",
    "FIPS":22063,
    "county":"Livingston Parish",
    "number":7188.25,
    "rate":54.47955193,
    "population":131944
  },
  {
    "state":"LA",
    "FIPS":22065,
    "county":"Madison Parish",
    "number":159.68,
    "rate":13.09496474,
    "population":12194
  },
  {
    "state":"LA",
    "FIPS":22067,
    "county":"Morehouse Parish",
    "number":2373.43,
    "rate":86.52364114,
    "population":27431
  },
  {
    "state":"LA",
    "FIPS":22069,
    "county":"Natchitoches Parish",
    "number":2761.24,
    "rate":69.97389828,
    "population":39461
  },
  {
    "state":"LA",
    "FIPS":22071,
    "county":"Orleans Parish",
    "number":336193.62,
    "rate":908.2214784,
    "population":370167
  },
  {
    "state":"LA",
    "FIPS":22073,
    "county":"Ouachita Parish",
    "number":30488.36,
    "rate":196.2559382,
    "population":155350
  },
  {
    "state":"LA",
    "FIPS":22075,
    "county":"Plaquemines Parish",
    "number":455.99,
    "rate":19.07828124,
    "population":23901
  },
  {
    "state":"LA",
    "FIPS":22077,
    "county":"Pointe Coupee Parish",
    "number":2420.23,
    "rate":106.5664216,
    "population":22711
  },
  {
    "state":"LA",
    "FIPS":22079,
    "county":"Rapides Parish",
    "number":34051.88,
    "rate":257.7520418,
    "population":132111
  },
  {
    "state":"LA",
    "FIPS":22081,
    "county":"Red River Parish",
    "number":309.67,
    "rate":34.30486319,
    "population":9027
  },
  {
    "state":"LA",
    "FIPS":22083,
    "county":"Richland Parish",
    "number":627.28,
    "rate":29.98040434,
    "population":20923
  },
  {
    "state":"LA",
    "FIPS":22085,
    "county":"Sabine Parish",
    "number":189.36,
    "rate":7.790668971,
    "population":24306
  },
  {
    "state":"LA",
    "FIPS":22087,
    "county":"St Bernard Parish",
    "number":1921.07,
    "rate":46.29307437,
    "population":41498
  },
  {
    "state":"LA",
    "FIPS":22089,
    "county":"St Charles Parish",
    "number":1922.19,
    "rate":36.65713141,
    "population":52437
  },
  {
    "state":"LA",
    "FIPS":22091,
    "county":"St Helena Parish",
    "number":540.28,
    "rate":48.97389413,
    "population":11032
  },
  {
    "state":"LA",
    "FIPS":22093,
    "county":"St James Parish",
    "number":830.54,
    "rate":38.27726058,
    "population":21698
  },
  {
    "state":"LA",
    "FIPS":22095,
    "county":"St John the Baptist Parish",
    "number":4106.38,
    "rate":91.75653029,
    "population":44753
  },
  {
    "state":"LA",
    "FIPS":22097,
    "county":"St Landry Parish",
    "number":8513.94,
    "rate":101.9841165,
    "population":83483
  },
  {
    "state":"LA",
    "FIPS":22099,
    "county":"St Martin Parish",
    "number":1934.28,
    "rate":36.69246529,
    "population":52716
  },
  {
    "state":"LA",
    "FIPS":22101,
    "county":"St Mary Parish",
    "number":6775.19,
    "rate":126.5775511,
    "population":53526
  },
  {
    "state":"LA",
    "FIPS":22103,
    "county":"St Tammany Parish",
    "number":75473.89,
    "rate":315.3338263,
    "population":239346
  },
  {
    "state":"LA",
    "FIPS":22105,
    "county":"Tangipahoa Parish",
    "number":44399.54,
    "rate":358.7348809,
    "population":123767
  },
  {
    "state":"LA",
    "FIPS":22109,
    "county":"Terrebonne Parish",
    "number":24902.08,
    "rate":222.8752987,
    "population":111731
  },
  {
    "state":"LA",
    "FIPS":22111,
    "county":"Union Parish",
    "number":825.68,
    "rate":36.6398935,
    "population":22535
  },
  {
    "state":"LA",
    "FIPS":22113,
    "county":"Vermilion Parish",
    "number":2575.76,
    "rate":43.90998977,
    "population":58660
  },
  {
    "state":"LA",
    "FIPS":22115,
    "county":"Vernon Parish",
    "number":2975.87,
    "rate":54.92967366,
    "population":54176
  },
  {
    "state":"LA",
    "FIPS":22117,
    "county":"Washington Parish",
    "number":4096.87,
    "rate":87.79508829,
    "population":46664
  },
  {
    "state":"LA",
    "FIPS":22119,
    "county":"Webster Parish",
    "number":3027.81,
    "rate":73.95183548,
    "population":40943
  },
  {
    "state":"LA",
    "FIPS":22121,
    "county":"West Baton Rouge Parish",
    "number":572.71,
    "rate":23.79549609,
    "population":24068
  },
  {
    "state":"LA",
    "FIPS":22123,
    "county":"West Carroll Parish",
    "number":128.21,
    "rate":11.14288197,
    "population":11506
  },
  {
    "state":"LA",
    "FIPS":22125,
    "county":"West Feliciana Parish",
    "number":542.09,
    "rate":35.08900252,
    "population":15449
  },
  {
    "state":"LA",
    "FIPS":22127,
    "county":"Winn Parish",
    "number":159.38,
    "rate":10.59073693,
    "population":15049
  },
  {
    "state":"ME",
    "FIPS":23001,
    "county":"Androscoggin County",
    "number":8301.31,
    "rate":77.21717858,
    "population":107506
  },
  {
    "state":"ME",
    "FIPS":23003,
    "county":"Aroostook County",
    "number":5272.69,
    "rate":74.53197444,
    "population":70744
  },
  {
    "state":"ME",
    "FIPS":23005,
    "county":"Cumberland County",
    "number":185038.52,
    "rate":651.4293962,
    "population":284050
  },
  {
    "state":"ME",
    "FIPS":23007,
    "county":"Franklin County",
    "number":38.02,
    "rate":1.241388317,
    "population":30627
  },
  {
    "state":"ME",
    "FIPS":23009,
    "county":"Hancock County",
    "number":398.05,
    "rate":7.298848467,
    "population":54536
  },
  {
    "state":"ME",
    "FIPS":23011,
    "county":"Kennebec County",
    "number":9309.64,
    "rate":76.56835491,
    "population":121586
  },
  {
    "state":"ME",
    "FIPS":23013,
    "county":"Knox County",
    "number":37740.69,
    "rate":952.8552313,
    "population":39608
  },
  {
    "state":"ME",
    "FIPS":23015,
    "county":"Lincoln County",
    "number":472.19,
    "rate":13.80874397,
    "population":34195
  },
  {
    "state":"ME",
    "FIPS":23017,
    "county":"Oxford County",
    "number":4611.76,
    "rate":80.21010157,
    "population":57496
  },
  {
    "state":"ME",
    "FIPS":23019,
    "county":"Penobscot County",
    "number":3339.97,
    "rate":21.74289769,
    "population":153612
  },
  {
    "state":"ME",
    "FIPS":23021,
    "county":"Piscataquis County",
    "number":340.83,
    "rate":19.74681344,
    "population":17260
  },
  {
    "state":"ME",
    "FIPS":23023,
    "county":"Sagadahoc County",
    "number":1153.12,
    "rate":32.83932335,
    "population":35114
  },
  {
    "state":"ME",
    "FIPS":23025,
    "county":"Somerset County",
    "number":791.45,
    "rate":15.27040846,
    "population":51829
  },
  {
    "state":"ME",
    "FIPS":23027,
    "county":"Waldo County",
    "number":255.97,
    "rate":6.582066908,
    "population":38889
  },
  {
    "state":"ME",
    "FIPS":23029,
    "county":"Washington County",
    "number":2069.06,
    "rate":63.69278128,
    "population":32485
  },
  {
    "state":"ME",
    "FIPS":23031,
    "county":"York County",
    "number":54372.64,
    "rate":273.153852,
    "population":199055
  },
  {
    "state":"MD",
    "FIPS":24001,
    "county":"Allegany County",
    "number":5541.37,
    "rate":75.00196256,
    "population":73883
  },
  {
    "state":"MD",
    "FIPS":24003,
    "county":"Anne Arundel County",
    "number":197262.03,
    "rate":358.192586,
    "population":550715
  },
  {
    "state":"MD",
    "FIPS":24005,
    "county":"Baltimore County",
    "number":406227.46,
    "rate":496.3527018,
    "population":818425
  },
  {
    "state":"MD",
    "FIPS":24009,
    "county":"Calvert County",
    "number":3010.26,
    "rate":33.57379463,
    "population":89661
  },
  {
    "state":"MD",
    "FIPS":24011,
    "county":"Caroline County",
    "number":2915.9,
    "rate":89.36802746,
    "population":32628
  },
  {
    "state":"MD",
    "FIPS":24013,
    "county":"Carroll County",
    "number":235412.71,
    "rate":1408.054967,
    "population":167190
  },
  {
    "state":"MD",
    "FIPS":24015,
    "county":"Cecil County",
    "number":49536.54,
    "rate":486.5013455,
    "population":101822
  },
  {
    "state":"MD",
    "FIPS":24017,
    "county":"Charles County",
    "number":15734.15,
    "rate":104.3440922,
    "population":150791
  },
  {
    "state":"MD",
    "FIPS":24019,
    "county":"Dorchester County",
    "number":2777.13,
    "rate":85.48171633,
    "population":32488
  },
  {
    "state":"MD",
    "FIPS":24021,
    "county":"Frederick County",
    "number":68095.19,
    "rate":284.1229951,
    "population":239668
  },
  {
    "state":"MD",
    "FIPS":24023,
    "county":"Garrett County",
    "number":2863.94,
    "rate":95.78074312,
    "population":29901
  },
  {
    "state":"MD",
    "FIPS":24025,
    "county":"Harford County",
    "number":99646.02,
    "rate":400.6739956,
    "population":248696
  },
  {
    "state":"MD",
    "FIPS":24027,
    "county":"Howard County",
    "number":128448.79,
    "rate":428.6126766,
    "population":299685
  },
  {
    "state":"MD",
    "FIPS":24029,
    "county":"Kent County",
    "number":3804.46,
    "rate":190.2325116,
    "population":19999
  },
  {
    "state":"MD",
    "FIPS":24031,
    "county":"Montgomery County",
    "number":717479.2,
    "rate":712.8124171,
    "population":1010000
  },
  {
    "state":"MD",
    "FIPS":24033,
    "county":"Prince George's County",
    "number":349036.87,
    "rate":394.9435256,
    "population":883764
  },
  {
    "state":"MD",
    "FIPS":24035,
    "county":"Queen Anne's County",
    "number":3167.61,
    "rate":65.21741816,
    "population":48570
  },
  {
    "state":"MD",
    "FIPS":24037,
    "county":"St Mary's County",
    "number":5445.87,
    "rate":49.96256846,
    "population":108999
  },
  {
    "state":"MD",
    "FIPS":24039,
    "county":"Somerset County",
    "number":817.69,
    "rate":31.26562918,
    "population":26153
  },
  {
    "state":"MD",
    "FIPS":24041,
    "county":"Talbot County",
    "number":21723.08,
    "rate":570.7288109,
    "population":38062
  },
  {
    "state":"MD",
    "FIPS":24043,
    "county":"Washington County",
    "number":49121.84,
    "rate":329.3187273,
    "population":149162
  },
  {
    "state":"MD",
    "FIPS":24045,
    "county":"Wicomico County",
    "number":59223.65,
    "rate":589.4542758,
    "population":100472
  },
  {
    "state":"MD",
    "FIPS":24047,
    "county":"Worcester County",
    "number":5478.31,
    "rate":106.1934946,
    "population":51588
  },
  {
    "state":"MD",
    "FIPS":24510,
    "county":"Baltimore City",
    "number":273249.18,
    "rate":438.6374187,
    "population":622950
  },
  {
    "state":"MA",
    "FIPS":25001,
    "county":"Barnstable County",
    "number":52072.17,
    "rate":242.370872,
    "population":214845
  },
  {
    "state":"MA",
    "FIPS":25003,
    "county":"Berkshire County",
    "number":8098.17,
    "rate":62.18359825,
    "population":130230
  },
  {
    "state":"MA",
    "FIPS":25005,
    "county":"Bristol County",
    "number":327193.78,
    "rate":594.0714824,
    "population":550765
  },
  {
    "state":"MA",
    "FIPS":25009,
    "county":"Essex County",
    "number":116425.59,
    "rate":153.8468318,
    "population":756763
  },
  {
    "state":"MA",
    "FIPS":25011,
    "county":"Franklin County",
    "number":7115.04,
    "rate":99.44984904,
    "population":71544
  },
  {
    "state":"MA",
    "FIPS":25013,
    "county":"Hampden County",
    "number":120086.23,
    "rate":257.3980525,
    "population":466539
  },
  {
    "state":"MA",
    "FIPS":25015,
    "county":"Hampshire County",
    "number":8406.67,
    "rate":52.42667648,
    "population":160351
  },
  {
    "state":"MA",
    "FIPS":25017,
    "county":"Middlesex County",
    "number":554342.95,
    "rate":359.9180816,
    "population":1540000
  },
  {
    "state":"MA",
    "FIPS":25021,
    "county":"Norfolk County",
    "number":203734.03,
    "rate":298.4025315,
    "population":682749
  },
  {
    "state":"MA",
    "FIPS":25023,
    "county":"Plymouth County",
    "number":25661.06,
    "rate":51.41713887,
    "population":499076
  },
  {
    "state":"MA",
    "FIPS":25025,
    "county":"Suffolk County",
    "number":1390000,
    "rate":1853.798285,
    "population":749504
  },
  {
    "state":"MA",
    "FIPS":25027,
    "county":"Worcester County",
    "number":116850.39,
    "rate":144.9517511,
    "population":806133
  },
  {
    "state":"MI",
    "FIPS":26001,
    "county":"Alcona County",
    "number":38.14,
    "rate":3.598452684,
    "population":10599
  },
  {
    "state":"MI",
    "FIPS":26003,
    "county":"Alger County",
    "number":576.68,
    "rate":60.74152096,
    "population":9494
  },
  {
    "state":"MI",
    "FIPS":26005,
    "county":"Allegan County",
    "number":8972.67,
    "rate":80.15678182,
    "population":111939
  },
  {
    "state":"MI",
    "FIPS":26007,
    "county":"Alpena County",
    "number":1796.47,
    "rate":61.43878249,
    "population":29240
  },
  {
    "state":"MI",
    "FIPS":26009,
    "county":"Antrim County",
    "number":818.36,
    "rate":35.03103463,
    "population":23361
  },
  {
    "state":"MI",
    "FIPS":26011,
    "county":"Arenac County",
    "number":1989.18,
    "rate":128.2349149,
    "population":15512
  },
  {
    "state":"MI",
    "FIPS":26013,
    "county":"Baraga County",
    "number":559.95,
    "rate":64.31771192,
    "population":8706
  },
  {
    "state":"MI",
    "FIPS":26015,
    "county":"Barry County",
    "number":2285.84,
    "rate":38.69517377,
    "population":59073
  },
  {
    "state":"MI",
    "FIPS":26017,
    "county":"Bay County",
    "number":25353.1,
    "rate":236.7589929,
    "population":107084
  },
  {
    "state":"MI",
    "FIPS":26019,
    "county":"Benzie County",
    "number":360.58,
    "rate":20.73848277,
    "population":17387
  },
  {
    "state":"MI",
    "FIPS":26021,
    "county":"Berrien County",
    "number":9328.19,
    "rate":59.77424915,
    "population":156057
  },
  {
    "state":"MI",
    "FIPS":26023,
    "county":"Branch County",
    "number":3678.65,
    "rate":84.07189871,
    "population":43756
  },
  {
    "state":"MI",
    "FIPS":26025,
    "county":"Calhoun County",
    "number":8612.71,
    "rate":63.91147225,
    "population":134760
  },
  {
    "state":"MI",
    "FIPS":26027,
    "county":"Cass County",
    "number":1850.08,
    "rate":35.541553,
    "population":52054
  },
  {
    "state":"MI",
    "FIPS":26029,
    "county":"Charlevoix County",
    "number":1029.09,
    "rate":39.52110296,
    "population":26039
  },
  {
    "state":"MI",
    "FIPS":26031,
    "county":"Cheboygan County",
    "number":3968.62,
    "rate":153.9776519,
    "population":25774
  },
  {
    "state":"MI",
    "FIPS":26033,
    "county":"Chippewa County",
    "number":3204.21,
    "rate":82.16765822,
    "population":38996
  },
  {
    "state":"MI",
    "FIPS":26035,
    "county":"Clare County",
    "number":1526.62,
    "rate":49.59779077,
    "population":30780
  },
  {
    "state":"MI",
    "FIPS":26037,
    "county":"Clinton County",
    "number":9932.87,
    "rate":129.9671578,
    "population":76426
  },
  {
    "state":"MI",
    "FIPS":26039,
    "county":"Crawford County",
    "number":2925.63,
    "rate":209.1977118,
    "population":13985
  },
  {
    "state":"MI",
    "FIPS":26041,
    "county":"Delta County",
    "number":1248.29,
    "rate":33.89237327,
    "population":36831
  },
  {
    "state":"MI",
    "FIPS":26043,
    "county":"Dickinson County",
    "number":2825.96,
    "rate":107.7459204,
    "population":26228
  },
  {
    "state":"MI",
    "FIPS":26045,
    "county":"Eaton County",
    "number":9822.8,
    "rate":90.97880854,
    "population":107968
  },
  {
    "state":"MI",
    "FIPS":26047,
    "county":"Emmet County",
    "number":60301.67,
    "rate":1833.156103,
    "population":32895
  },
  {
    "state":"MI",
    "FIPS":26049,
    "county":"Genesee County",
    "number":165222.33,
    "rate":395.2138938,
    "population":418058
  },
  {
    "state":"MI",
    "FIPS":26051,
    "county":"Gladwin County",
    "number":597.17,
    "rate":23.41108672,
    "population":25508
  },
  {
    "state":"MI",
    "FIPS":26053,
    "county":"Gogebic County",
    "number":1650.54,
    "rate":102.8373832,
    "population":16050
  },
  {
    "state":"MI",
    "FIPS":26055,
    "county":"Grand Traverse County",
    "number":10760.21,
    "rate":120.8944441,
    "population":89005
  },
  {
    "state":"MI",
    "FIPS":26057,
    "county":"Gratiot County",
    "number":2672.36,
    "rate":63.58069044,
    "population":42031
  },
  {
    "state":"MI",
    "FIPS":26059,
    "county":"Hillsdale County",
    "number":3132.52,
    "rate":67.70966626,
    "population":46264
  },
  {
    "state":"MI",
    "FIPS":26061,
    "county":"Houghton County",
    "number":477.29,
    "rate":12.95223881,
    "population":36850
  },
  {
    "state":"MI",
    "FIPS":26063,
    "county":"Huron County",
    "number":3244.33,
    "rate":99.9300807,
    "population":32466
  },
  {
    "state":"MI",
    "FIPS":26065,
    "county":"Ingham County",
    "number":99030.88,
    "rate":350.8349393,
    "population":282272
  },
  {
    "state":"MI",
    "FIPS":26067,
    "county":"Ionia County",
    "number":3067.95,
    "rate":48.01474271,
    "population":63896
  },
  {
    "state":"MI",
    "FIPS":26069,
    "county":"Iosco County",
    "number":2653.77,
    "rate":104.6026803,
    "population":25370
  },
  {
    "state":"MI",
    "FIPS":26071,
    "county":"Iron County",
    "number":759.83,
    "rate":65.58173658,
    "population":11586
  },
  {
    "state":"MI",
    "FIPS":26073,
    "county":"Isabella County",
    "number":4475.2,
    "rate":63.43122803,
    "population":70552
  },
  {
    "state":"MI",
    "FIPS":26075,
    "county":"Jackson County",
    "number":15165.91,
    "rate":94.69461026,
    "population":160156
  },
  {
    "state":"MI",
    "FIPS":26077,
    "county":"Kalamazoo County",
    "number":316160.36,
    "rate":1239.747314,
    "population":255020
  },
  {
    "state":"MI",
    "FIPS":26079,
    "county":"Kalkaska County",
    "number":55160.93,
    "rate":3229.184522,
    "population":17082
  },
  {
    "state":"MI",
    "FIPS":26081,
    "county":"Kent County",
    "number":107879.96,
    "rate":175.5444435,
    "population":614545
  },
  {
    "state":"MI",
    "FIPS":26085,
    "county":"Lake County",
    "number":114.71,
    "rate":10.00261597,
    "population":11468
  },
  {
    "state":"MI",
    "FIPS":26087,
    "county":"Lapeer County",
    "number":3957.7,
    "rate":44.88002359,
    "population":88184
  },
  {
    "state":"MI",
    "FIPS":26089,
    "county":"Leelanau County",
    "number":1828.82,
    "rate":84.52671473,
    "population":21636
  },
  {
    "state":"MI",
    "FIPS":26091,
    "county":"Lenawee County",
    "number":5677.26,
    "rate":57.25930408,
    "population":99150
  },
  {
    "state":"MI",
    "FIPS":26093,
    "county":"Livingston County",
    "number":8386.55,
    "rate":45.82488676,
    "population":183013
  },
  {
    "state":"MI",
    "FIPS":26095,
    "county":"Luce County",
    "number":425.69,
    "rate":65.5512781,
    "population":6494
  },
  {
    "state":"MI",
    "FIPS":26097,
    "county":"Mackinac County",
    "number":527.3,
    "rate":47.38071705,
    "population":11129
  },
  {
    "state":"MI",
    "FIPS":26099,
    "county":"Macomb County",
    "number":153145.26,
    "rate":180.6490829,
    "population":847750
  },
  {
    "state":"MI",
    "FIPS":26101,
    "county":"Manistee County",
    "number":1509.21,
    "rate":61.34002601,
    "population":24604
  },
  {
    "state":"MI",
    "FIPS":26103,
    "county":"Marquette County",
    "number":4095.11,
    "rate":60.40876235,
    "population":67790
  },
  {
    "state":"MI",
    "FIPS":26105,
    "county":"Mason County",
    "number":987.06,
    "rate":34.42952318,
    "population":28669
  },
  {
    "state":"MI",
    "FIPS":26107,
    "county":"Mecosta County",
    "number":1391.97,
    "rate":32.01255692,
    "population":43482
  },
  {
    "state":"MI",
    "FIPS":26109,
    "county":"Menominee County",
    "number":278.28,
    "rate":11.71803941,
    "population":23748
  },
  {
    "state":"MI",
    "FIPS":26111,
    "county":"Midland County",
    "number":15485.31,
    "rate":185.1224761,
    "population":83649
  },
  {
    "state":"MI",
    "FIPS":26113,
    "county":"Missaukee County",
    "number":337.63,
    "rate":22.4532819,
    "population":15037
  },
  {
    "state":"MI",
    "FIPS":26115,
    "county":"Monroe County",
    "number":14434.75,
    "rate":95.69577035,
    "population":150840
  },
  {
    "state":"MI",
    "FIPS":26117,
    "county":"Montcalm County",
    "number":2798.81,
    "rate":44.3839896,
    "population":63059
  },
  {
    "state":"MI",
    "FIPS":26119,
    "county":"Montmorency County",
    "number":293.83,
    "rate":30.95554151,
    "population":9492
  },
  {
    "state":"MI",
    "FIPS":26121,
    "county":"Muskegon County",
    "number":16779.96,
    "rate":98.62094907,
    "population":170146
  },
  {
    "state":"MI",
    "FIPS":26123,
    "county":"Newaygo County",
    "number":1259.86,
    "rate":26.26787874,
    "population":47962
  },
  {
    "state":"MI",
    "FIPS":26125,
    "county":"Oakland County",
    "number":1190000,
    "rate":976.2305971,
    "population":1220000
  },
  {
    "state":"MI",
    "FIPS":26127,
    "county":"Oceana County",
    "number":2517.58,
    "rate":95.87493812,
    "population":26259
  },
  {
    "state":"MI",
    "FIPS":26129,
    "county":"Ogemaw County",
    "number":4632.32,
    "rate":216.2109685,
    "population":21425
  },
  {
    "state":"MI",
    "FIPS":26131,
    "county":"Ontonagon County",
    "number":29.49,
    "rate":4.604934416,
    "population":6404
  },
  {
    "state":"MI",
    "FIPS":26133,
    "county":"Osceola County",
    "number":1313.05,
    "rate":56.42672969,
    "population":23270
  },
  {
    "state":"MI",
    "FIPS":26135,
    "county":"Oscoda County",
    "number":320.98,
    "rate":37.31457801,
    "population":8602
  },
  {
    "state":"MI",
    "FIPS":26137,
    "county":"Otsego County",
    "number":3540.46,
    "rate":147.2185954,
    "population":24049
  },
  {
    "state":"MI",
    "FIPS":26139,
    "county":"Ottawa County",
    "number":30437.66,
    "rate":112.9605053,
    "population":269454
  },
  {
    "state":"MI",
    "FIPS":26141,
    "county":"Presque Isle County",
    "number":472.17,
    "rate":36.01052471,
    "population":13112
  },
  {
    "state":"MI",
    "FIPS":26143,
    "county":"Roscommon County",
    "number":2283.18,
    "rate":94.7731518,
    "population":24091
  },
  {
    "state":"MI",
    "FIPS":26145,
    "county":"Saginaw County",
    "number":32679.77,
    "rate":164.8262453,
    "population":198268
  },
  {
    "state":"MI",
    "FIPS":26147,
    "county":"St Clair County",
    "number":61936.35,
    "rate":385.7424454,
    "population":160564
  },
  {
    "state":"MI",
    "FIPS":26149,
    "county":"St Joseph County",
    "number":3093.65,
    "rate":50.79718236,
    "population":60902
  },
  {
    "state":"MI",
    "FIPS":26151,
    "county":"Sanilac County",
    "number":2824.15,
    "rate":66.74741793,
    "population":42311
  },
  {
    "state":"MI",
    "FIPS":26153,
    "county":"Schoolcraft County",
    "number":927.26,
    "rate":110.9826451,
    "population":8355
  },
  {
    "state":"MI",
    "FIPS":26155,
    "county":"Shiawassee County",
    "number":4579.48,
    "rate":66.08196248,
    "population":69300
  },
  {
    "state":"MI",
    "FIPS":26157,
    "county":"Tuscola County",
    "number":2039.3,
    "rate":37.27812814,
    "population":54705
  },
  {
    "state":"MI",
    "FIPS":26159,
    "county":"Van Buren County",
    "number":2823.1,
    "rate":37.51627907,
    "population":75250
  },
  {
    "state":"MI",
    "FIPS":26161,
    "county":"Washtenaw County",
    "number":188096.61,
    "rate":535.428621,
    "population":351301
  },
  {
    "state":"MI",
    "FIPS":26163,
    "county":"Wayne County",
    "number":703388.77,
    "rate":392.3474679,
    "population":1790000
  },
  {
    "state":"MI",
    "FIPS":26165,
    "county":"Wexford County",
    "number":1758.19,
    "rate":53.94213659,
    "population":32594
  },
  {
    "state":"MN",
    "FIPS":27003,
    "county":"Anoka County",
    "number":88133.46,
    "rate":262.1989576,
    "population":336132
  },
  {
    "state":"MN",
    "FIPS":27005,
    "county":"Becker County",
    "number":149.91,
    "rate":4.540250772,
    "population":33018
  },
  {
    "state":"MN",
    "FIPS":27007,
    "county":"Beltrami County",
    "number":56.36,
    "rate":1.24577264,
    "population":45241
  },
  {
    "state":"MN",
    "FIPS":27011,
    "county":"Big Stone County",
    "number":89.74,
    "rate":17.37463698,
    "population":5165
  },
  {
    "state":"MN",
    "FIPS":27013,
    "county":"Blue Earth County",
    "number":6589.12,
    "rate":101.3710769,
    "population":65000
  },
  {
    "state":"MN",
    "FIPS":27017,
    "county":"Carlton County",
    "number":60.92,
    "rate":1.725241426,
    "population":35311
  },
  {
    "state":"MN",
    "FIPS":27019,
    "county":"Carver County",
    "number":1115.79,
    "rate":11.88401321,
    "population":93890
  },
  {
    "state":"MN",
    "FIPS":27027,
    "county":"Clay County",
    "number":212.69,
    "rate":3.532293691,
    "population":60213
  },
  {
    "state":"MN",
    "FIPS":27033,
    "county":"Cottonwood County",
    "number":62.12,
    "rate":5.333104396,
    "population":11648
  },
  {
    "state":"MN",
    "FIPS":27035,
    "county":"Crow Wing County",
    "number":50.93,
    "rate":0.810342084,
    "population":62850
  },
  {
    "state":"MN",
    "FIPS":27037,
    "county":"Dakota County",
    "number":65062.29,
    "rate":160.6210578,
    "population":405067
  },
  {
    "state":"MN",
    "FIPS":27039,
    "county":"Dodge County",
    "number":201.78,
    "rate":9.970845481,
    "population":20237
  },
  {
    "state":"MN",
    "FIPS":27041,
    "county":"Douglas County",
    "number":117.17,
    "rate":3.214893267,
    "population":36446
  },
  {
    "state":"MN",
    "FIPS":27043,
    "county":"Faribault County",
    "number":31.94,
    "rate":2.239674637,
    "population":14261
  },
  {
    "state":"MN",
    "FIPS":27047,
    "county":"Freeborn County",
    "number":13,
    "rate":0.418652583,
    "population":31052
  },
  {
    "state":"MN",
    "FIPS":27049,
    "county":"Goodhue County",
    "number":14.89,
    "rate":0.320953592,
    "population":46393
  },
  {
    "state":"MN",
    "FIPS":27051,
    "county":"Grant County",
    "number":31.3,
    "rate":5.264928511,
    "population":5945
  },
  {
    "state":"MN",
    "FIPS":27053,
    "county":"Hennepin County",
    "number":410788.64,
    "rate":346.7194019,
    "population":1180000
  },
  {
    "state":"MN",
    "FIPS":27055,
    "county":"Houston County",
    "number":64.54,
    "rate":3.430059524,
    "population":18816
  },
  {
    "state":"MN",
    "FIPS":27061,
    "county":"Itasca County",
    "number":11.49,
    "rate":0.253911429,
    "population":45252
  },
  {
    "state":"MN",
    "FIPS":27063,
    "county":"Jackson County",
    "number":48.34,
    "rate":4.694115362,
    "population":10298
  },
  {
    "state":"MN",
    "FIPS":27067,
    "county":"Kandiyohi County",
    "number":62.17,
    "rate":1.466308168,
    "population":42399
  },
  {
    "state":"MN",
    "FIPS":27069,
    "county":"Kittson County",
    "number":53.2,
    "rate":11.809101,
    "population":4505
  },
  {
    "state":"MN",
    "FIPS":27077,
    "county":"Lake of the Woods County",
    "number":33.34,
    "rate":8.402217742,
    "population":3968
  },
  {
    "state":"MN",
    "FIPS":27081,
    "county":"Lincoln County",
    "number":39.64,
    "rate":6.834482759,
    "population":5800
  },
  {
    "state":"MN",
    "FIPS":27083,
    "county":"Lyon County",
    "number":35.33,
    "rate":1.379108439,
    "population":25618
  },
  {
    "state":"MN",
    "FIPS":27085,
    "county":"McLeod County",
    "number":159.19,
    "rate":4.420593707,
    "population":36011
  },
  {
    "state":"MN",
    "FIPS":27087,
    "county":"Mahnomen County",
    "number":10.79,
    "rate":1.954356095,
    "population":5521
  },
  {
    "state":"MN",
    "FIPS":27089,
    "county":"Marshall County",
    "number":12.39,
    "rate":1.308203991,
    "population":9471
  },
  {
    "state":"MN",
    "FIPS":27093,
    "county":"Meeker County",
    "number":10.7,
    "rate":0.46432911,
    "population":23044
  },
  {
    "state":"MN",
    "FIPS":27099,
    "county":"Mower County",
    "number":152.08,
    "rate":3.862153033,
    "population":39377
  },
  {
    "state":"MN",
    "FIPS":27101,
    "county":"Murray County",
    "number":32.87,
    "rate":3.833683228,
    "population":8574
  },
  {
    "state":"MN",
    "FIPS":27103,
    "county":"Nicollet County",
    "number":36.82,
    "rate":1.117925674,
    "population":32936
  },
  {
    "state":"MN",
    "FIPS":27105,
    "county":"Nobles County",
    "number":76.31,
    "rate":3.520808342,
    "population":21674
  },
  {
    "state":"MN",
    "FIPS":27107,
    "county":"Norman County",
    "number":43.75,
    "rate":6.59183366,
    "population":6637
  },
  {
    "state":"MN",
    "FIPS":27109,
    "county":"Olmsted County",
    "number":193586.21,
    "rate":1315.516934,
    "population":147156
  },
  {
    "state":"MN",
    "FIPS":27111,
    "county":"Otter Tail County",
    "number":231.47,
    "rate":4.04018013,
    "population":57292
  },
  {
    "state":"MN",
    "FIPS":27113,
    "county":"Pennington County",
    "number":97.51,
    "rate":6.929855732,
    "population":14071
  },
  {
    "state":"MN",
    "FIPS":27117,
    "county":"Pipestone County",
    "number":219.66,
    "rate":23.43539955,
    "population":9373
  },
  {
    "state":"MN",
    "FIPS":27119,
    "county":"Polk County",
    "number":198.09,
    "rate":6.285977216,
    "population":31513
  },
  {
    "state":"MN",
    "FIPS":27123,
    "county":"Ramsey County",
    "number":78985.48,
    "rate":151.627182,
    "population":520919
  },
  {
    "state":"MN",
    "FIPS":27131,
    "county":"Rice County",
    "number":50.62,
    "rate":0.779921114,
    "population":64904
  },
  {
    "state":"MN",
    "FIPS":27135,
    "county":"Roseau County",
    "number":62.98,
    "rate":4.066636534,
    "population":15487
  },
  {
    "state":"MN",
    "FIPS":27137,
    "county":"St Louis County",
    "number":581.6,
    "rate":2.90093622,
    "population":200487
  },
  {
    "state":"MN",
    "FIPS":27139,
    "county":"Scott County",
    "number":129.64,
    "rate":0.95849291,
    "population":135254
  },
  {
    "state":"MN",
    "FIPS":27141,
    "county":"Sherburne County",
    "number":36.04,
    "rate":0.402735562,
    "population":89488
  },
  {
    "state":"MN",
    "FIPS":27145,
    "county":"Stearns County",
    "number":73779.12,
    "rate":486.5220316,
    "population":151646
  },
  {
    "state":"MN",
    "FIPS":27147,
    "county":"Steele County",
    "number":11.64,
    "rate":0.320652324,
    "population":36301
  },
  {
    "state":"MN",
    "FIPS":27155,
    "county":"Traverse County",
    "number":12.95,
    "rate":3.779918272,
    "population":3426
  },
  {
    "state":"MN",
    "FIPS":27157,
    "county":"Wabasha County",
    "number":11.28,
    "rate":0.526561479,
    "population":21422
  },
  {
    "state":"MN",
    "FIPS":27159,
    "county":"Wadena County",
    "number":73.9,
    "rate":5.398495142,
    "population":13689
  },
  {
    "state":"MN",
    "FIPS":27163,
    "county":"Washington County",
    "number":927.82,
    "rate":3.800796356,
    "population":244112
  },
  {
    "state":"MN",
    "FIPS":27167,
    "county":"Wilkin County",
    "number":71.7,
    "rate":10.85048426,
    "population":6608
  },
  {
    "state":"MN",
    "FIPS":27169,
    "county":"Winona County",
    "number":100,
    "rate":1.948330281,
    "population":51326
  },
  {
    "state":"MN",
    "FIPS":27171,
    "county":"Wright County",
    "number":136.57,
    "rate":1.072685287,
    "population":127316
  },
  {
    "state":"MN",
    "FIPS":27173,
    "county":"Yellow Medicine County",
    "number":37.28,
    "rate":3.666404406,
    "population":10168
  },
  {
    "state":"MS",
    "FIPS":28001,
    "county":"Adams County",
    "number":4975.45,
    "rate":154.8007218,
    "population":32141
  },
  {
    "state":"MS",
    "FIPS":28003,
    "county":"Alcorn County",
    "number":4387.9,
    "rate":117.8370975,
    "population":37237
  },
  {
    "state":"MS",
    "FIPS":28005,
    "county":"Amite County",
    "number":39.05,
    "rate":3.010329941,
    "population":12972
  },
  {
    "state":"MS",
    "FIPS":28007,
    "county":"Attala County",
    "number":5847.1,
    "rate":305.7626941,
    "population":19123
  },
  {
    "state":"MS",
    "FIPS":28009,
    "county":"Benton County",
    "number":221.19,
    "rate":25.56518724,
    "population":8652
  },
  {
    "state":"MS",
    "FIPS":28011,
    "county":"Bolivar County",
    "number":20861.66,
    "rate":612.4793752,
    "population":34061
  },
  {
    "state":"MS",
    "FIPS":28013,
    "county":"Calhoun County",
    "number":517.97,
    "rate":34.88483297,
    "population":14848
  },
  {
    "state":"MS",
    "FIPS":28017,
    "county":"Chickasaw County",
    "number":1820.53,
    "rate":104.5920947,
    "population":17406
  },
  {
    "state":"MS",
    "FIPS":28019,
    "county":"Choctaw County",
    "number":12.05,
    "rate":1.44225015,
    "population":8355
  },
  {
    "state":"MS",
    "FIPS":28021,
    "county":"Claiborne County",
    "number":327.5,
    "rate":34.92960751,
    "population":9376
  },
  {
    "state":"MS",
    "FIPS":28023,
    "county":"Clarke County",
    "number":875.51,
    "rate":53.07729615,
    "population":16495
  },
  {
    "state":"MS",
    "FIPS":28025,
    "county":"Clay County",
    "number":807.4,
    "rate":39.58813435,
    "population":20395
  },
  {
    "state":"MS",
    "FIPS":28027,
    "county":"Coahoma County",
    "number":723.97,
    "rate":28.18649017,
    "population":25685
  },
  {
    "state":"MS",
    "FIPS":28029,
    "county":"Copiah County",
    "number":4919.48,
    "rate":170.212442,
    "population":28902
  },
  {
    "state":"MS",
    "FIPS":28031,
    "county":"Covington County",
    "number":1279.89,
    "rate":65.55805972,
    "population":19523
  },
  {
    "state":"MS",
    "FIPS":28033,
    "county":"DeSoto County",
    "number":12874.86,
    "rate":77.39388657,
    "population":166355
  },
  {
    "state":"MS",
    "FIPS":28035,
    "county":"Forrest County",
    "number":149776.92,
    "rate":1951.007829,
    "population":76769
  },
  {
    "state":"MS",
    "FIPS":28037,
    "county":"Franklin County",
    "number":524.65,
    "rate":66.52085711,
    "population":7887
  },
  {
    "state":"MS",
    "FIPS":28039,
    "county":"George County",
    "number":3405.8,
    "rate":148.9069605,
    "population":22872
  },
  {
    "state":"MS",
    "FIPS":28041,
    "county":"Greene County",
    "number":481.15,
    "rate":33.6798264,
    "population":14286
  },
  {
    "state":"MS",
    "FIPS":28043,
    "county":"Grenada County",
    "number":3513.28,
    "rate":162.5314582,
    "population":21616
  },
  {
    "state":"MS",
    "FIPS":28045,
    "county":"Hancock County",
    "number":2359.79,
    "rate":52.08099757,
    "population":45310
  },
  {
    "state":"MS",
    "FIPS":28047,
    "county":"Harrison County",
    "number":29712.53,
    "rate":153.4017068,
    "population":193691
  },
  {
    "state":"MS",
    "FIPS":28049,
    "county":"Hinds County",
    "number":634297.91,
    "rate":2554.583243,
    "population":248298
  },
  {
    "state":"MS",
    "FIPS":28051,
    "county":"Holmes County",
    "number":76.79,
    "rate":4.033088235,
    "population":19040
  },
  {
    "state":"MS",
    "FIPS":28053,
    "county":"Humphreys County",
    "number":1767.49,
    "rate":191.9515639,
    "population":9208
  },
  {
    "state":"MS",
    "FIPS":28057,
    "county":"Itawamba County",
    "number":1443.75,
    "rate":61.77527705,
    "population":23371
  },
  {
    "state":"MS",
    "FIPS":28059,
    "county":"Jackson County",
    "number":9808.04,
    "rate":70.07294472,
    "population":139969
  },
  {
    "state":"MS",
    "FIPS":28065,
    "county":"Jefferson Davis County",
    "number":555.75,
    "rate":45.97915115,
    "population":12087
  },
  {
    "state":"MS",
    "FIPS":28067,
    "county":"Jones County",
    "number":5136.83,
    "rate":75.11632668,
    "population":68385
  },
  {
    "state":"MS",
    "FIPS":28071,
    "county":"Lafayette County",
    "number":126420.86,
    "rate":2507.554348,
    "population":50416
  },
  {
    "state":"MS",
    "FIPS":28073,
    "county":"Lamar County",
    "number":95935.67,
    "rate":1657.950885,
    "population":57864
  },
  {
    "state":"MS",
    "FIPS":28075,
    "county":"Lauderdale County",
    "number":19646.58,
    "rate":244.7531487,
    "population":80271
  },
  {
    "state":"MS",
    "FIPS":28077,
    "county":"Lawrence County",
    "number":30.26,
    "rate":2.401396715,
    "population":12601
  },
  {
    "state":"MS",
    "FIPS":28079,
    "county":"Leake County",
    "number":2055.53,
    "rate":88.39848622,
    "population":23253
  },
  {
    "state":"MS",
    "FIPS":28081,
    "county":"Lee County",
    "number":37426.8,
    "rate":439.7203783,
    "population":85115
  },
  {
    "state":"MS",
    "FIPS":28083,
    "county":"Leflore County",
    "number":4147.53,
    "rate":131.3923209,
    "population":31566
  },
  {
    "state":"MS",
    "FIPS":28085,
    "county":"Lincoln County",
    "number":3152.4,
    "rate":90.4588367,
    "population":34849
  },
  {
    "state":"MS",
    "FIPS":28087,
    "county":"Lowndes County",
    "number":7369.36,
    "rate":123.5619792,
    "population":59641
  },
  {
    "state":"MS",
    "FIPS":28089,
    "county":"Madison County",
    "number":70704.54,
    "rate":717.9656577,
    "population":98479
  },
  {
    "state":"MS",
    "FIPS":28091,
    "county":"Marion County",
    "number":2747.07,
    "rate":104.0635654,
    "population":26398
  },
  {
    "state":"MS",
    "FIPS":28093,
    "county":"Marshall County",
    "number":678.68,
    "rate":18.54975811,
    "population":36587
  },
  {
    "state":"MS",
    "FIPS":28095,
    "county":"Monroe County",
    "number":2816.64,
    "rate":77.42701633,
    "population":36378
  },
  {
    "state":"MS",
    "FIPS":28097,
    "county":"Montgomery County",
    "number":188.85,
    "rate":17.88860472,
    "population":10557
  },
  {
    "state":"MS",
    "FIPS":28099,
    "county":"Neshoba County",
    "number":2802.95,
    "rate":94.44219819,
    "population":29679
  },
  {
    "state":"MS",
    "FIPS":28101,
    "county":"Newton County",
    "number":688.99,
    "rate":31.86080925,
    "population":21625
  },
  {
    "state":"MS",
    "FIPS":28103,
    "county":"Noxubee County",
    "number":215.38,
    "rate":19.27337808,
    "population":11175
  },
  {
    "state":"MS",
    "FIPS":28105,
    "county":"Oktibbeha County",
    "number":10633.18,
    "rate":217.198709,
    "population":48956
  },
  {
    "state":"MS",
    "FIPS":28107,
    "county":"Panola County",
    "number":868.24,
    "rate":25.19266481,
    "population":34464
  },
  {
    "state":"MS",
    "FIPS":28109,
    "county":"Pearl River County",
    "number":1681.45,
    "rate":30.5218733,
    "population":55090
  },
  {
    "state":"MS",
    "FIPS":28111,
    "county":"Perry County",
    "number":335.66,
    "rate":27.78642384,
    "population":12080
  },
  {
    "state":"MS",
    "FIPS":28113,
    "county":"Pike County",
    "number":1691.99,
    "rate":42.18269303,
    "population":40111
  },
  {
    "state":"MS",
    "FIPS":28115,
    "county":"Pontotoc County",
    "number":1461.07,
    "rate":48.14862416,
    "population":30345
  },
  {
    "state":"MS",
    "FIPS":28117,
    "county":"Prentiss County",
    "number":3600.61,
    "rate":142.2603714,
    "population":25310
  },
  {
    "state":"MS",
    "FIPS":28119,
    "county":"Quitman County",
    "number":66.91,
    "rate":8.576006152,
    "population":7802
  },
  {
    "state":"MS",
    "FIPS":28121,
    "county":"Rankin County",
    "number":73885.15,
    "rate":507.4390127,
    "population":145604
  },
  {
    "state":"MS",
    "FIPS":28123,
    "county":"Scott County",
    "number":3787.7,
    "rate":134.087369,
    "population":28248
  },
  {
    "state":"MS",
    "FIPS":28125,
    "county":"Sharkey County",
    "number":281.02,
    "rate":58.70482557,
    "population":4787
  },
  {
    "state":"MS",
    "FIPS":28127,
    "county":"Simpson County",
    "number":1708.14,
    "rate":62.49140265,
    "population":27334
  },
  {
    "state":"MS",
    "FIPS":28129,
    "county":"Smith County",
    "number":10.34,
    "rate":0.633074144,
    "population":16333
  },
  {
    "state":"MS",
    "FIPS":28131,
    "county":"Stone County",
    "number":1458.63,
    "rate":80.8150036,
    "population":18049
  },
  {
    "state":"MS",
    "FIPS":28133,
    "county":"Sunflower County",
    "number":3894.8,
    "rate":136.7892389,
    "population":28473
  },
  {
    "state":"MS",
    "FIPS":28135,
    "county":"Tallahatchie County",
    "number":65.88,
    "rate":4.362047275,
    "population":15103
  },
  {
    "state":"MS",
    "FIPS":28137,
    "county":"Tate County",
    "number":655.34,
    "rate":22.98954606,
    "population":28506
  },
  {
    "state":"MS",
    "FIPS":28139,
    "county":"Tippah County",
    "number":2024.91,
    "rate":92.18802641,
    "population":21965
  },
  {
    "state":"MS",
    "FIPS":28141,
    "county":"Tishomingo County",
    "number":1735.21,
    "rate":88.58083618,
    "population":19589
  },
  {
    "state":"MS",
    "FIPS":28143,
    "county":"Tunica County",
    "number":73.34,
    "rate":7.012813157,
    "population":10458
  },
  {
    "state":"MS",
    "FIPS":28145,
    "county":"Union County",
    "number":5090.13,
    "rate":186.0971775,
    "population":27352
  },
  {
    "state":"MS",
    "FIPS":28147,
    "county":"Walthall County",
    "number":401.74,
    "rate":26.62645811,
    "population":15088
  },
  {
    "state":"MS",
    "FIPS":28149,
    "county":"Warren County",
    "number":6626.7,
    "rate":137.7119701,
    "population":48120
  },
  {
    "state":"MS",
    "FIPS":28151,
    "county":"Washington County",
    "number":5337.64,
    "rate":106.6440231,
    "population":50051
  },
  {
    "state":"MS",
    "FIPS":28153,
    "county":"Wayne County",
    "number":429.07,
    "rate":20.79331233,
    "population":20635
  },
  {
    "state":"MS",
    "FIPS":28155,
    "county":"Webster County",
    "number":502.88,
    "rate":50.03283255,
    "population":10051
  },
  {
    "state":"MS",
    "FIPS":28157,
    "county":"Wilkinson County",
    "number":1764.13,
    "rate":186.6606708,
    "population":9451
  },
  {
    "state":"MS",
    "FIPS":28159,
    "county":"Winston County",
    "number":2361.98,
    "rate":124.4129576,
    "population":18985
  },
  {
    "state":"MS",
    "FIPS":28161,
    "county":"Yalobusha County",
    "number":676.61,
    "rate":54.68439344,
    "population":12373
  },
  {
    "state":"MS",
    "FIPS":28163,
    "county":"Yazoo County",
    "number":309.37,
    "rate":10.93875964,
    "population":28282
  },
  {
    "state":"MO",
    "FIPS":29001,
    "county":"Adair County",
    "number":32506.18,
    "rate":1266.260761,
    "population":25671
  },
  {
    "state":"MO",
    "FIPS":29003,
    "county":"Andrew County",
    "number":125.12,
    "rate":7.182548794,
    "population":17420
  },
  {
    "state":"MO",
    "FIPS":29005,
    "county":"Atchison County",
    "number":339.81,
    "rate":61.42624729,
    "population":5532
  },
  {
    "state":"MO",
    "FIPS":29007,
    "county":"Audrain County",
    "number":578.74,
    "rate":22.59820383,
    "population":25610
  },
  {
    "state":"MO",
    "FIPS":29009,
    "county":"Barry County",
    "number":1825.21,
    "rate":51.20378163,
    "population":35646
  },
  {
    "state":"MO",
    "FIPS":29011,
    "county":"Barton County",
    "number":273.65,
    "rate":22.13101496,
    "population":12365
  },
  {
    "state":"MO",
    "FIPS":29013,
    "county":"Bates County",
    "number":595.75,
    "rate":35.65443773,
    "population":16709
  },
  {
    "state":"MO",
    "FIPS":29015,
    "county":"Benton County",
    "number":1717.15,
    "rate":90.57653761,
    "population":18958
  },
  {
    "state":"MO",
    "FIPS":29017,
    "county":"Bollinger County",
    "number":277.37,
    "rate":22.35953245,
    "population":12405
  },
  {
    "state":"MO",
    "FIPS":29019,
    "county":"Boone County",
    "number":95777.14,
    "rate":568.1001471,
    "population":168592
  },
  {
    "state":"MO",
    "FIPS":29021,
    "county":"Buchanan County",
    "number":143127.67,
    "rate":1594.222145,
    "population":89779
  },
  {
    "state":"MO",
    "FIPS":29023,
    "county":"Butler County",
    "number":7639.8,
    "rate":177.620199,
    "population":43012
  },
  {
    "state":"MO",
    "FIPS":29025,
    "county":"Caldwell County",
    "number":389.59,
    "rate":42.73694603,
    "population":9116
  },
  {
    "state":"MO",
    "FIPS":29027,
    "county":"Callaway County",
    "number":2971.78,
    "rate":66.84466238,
    "population":44458
  },
  {
    "state":"MO",
    "FIPS":29029,
    "county":"Camden County",
    "number":6408.87,
    "rate":146.0877593,
    "population":43870
  },
  {
    "state":"MO",
    "FIPS":29031,
    "county":"Cape Girardeau County",
    "number":30104.2,
    "rate":390.557862,
    "population":77080
  },
  {
    "state":"MO",
    "FIPS":29033,
    "county":"Carroll County",
    "number":384.84,
    "rate":42.31335899,
    "population":9095
  },
  {
    "state":"MO",
    "FIPS":29035,
    "county":"Carter County",
    "number":29,
    "rate":4.637773869,
    "population":6253
  },
  {
    "state":"MO",
    "FIPS":29037,
    "county":"Cass County",
    "number":9878.16,
    "rate":98.34984418,
    "population":100439
  },
  {
    "state":"MO",
    "FIPS":29041,
    "county":"Chariton County",
    "number":144.08,
    "rate":18.75309124,
    "population":7683
  },
  {
    "state":"MO",
    "FIPS":29043,
    "county":"Christian County",
    "number":4064.6,
    "rate":50.94696732,
    "population":79781
  },
  {
    "state":"MO",
    "FIPS":29045,
    "county":"Clark County",
    "number":165.61,
    "rate":23.70259053,
    "population":6987
  },
  {
    "state":"MO",
    "FIPS":29047,
    "county":"Clay County",
    "number":102486.45,
    "rate":450.1159476,
    "population":227689
  },
  {
    "state":"MO",
    "FIPS":29049,
    "county":"Clinton County",
    "number":1020.66,
    "rate":49.77615216,
    "population":20505
  },
  {
    "state":"MO",
    "FIPS":29051,
    "county":"Cole County",
    "number":220551.69,
    "rate":2887.67155,
    "population":76377
  },
  {
    "state":"MO",
    "FIPS":29053,
    "county":"Cooper County",
    "number":143.69,
    "rate":8.19727309,
    "population":17529
  },
  {
    "state":"MO",
    "FIPS":29055,
    "county":"Crawford County",
    "number":2877.57,
    "rate":116.1528215,
    "population":24774
  },
  {
    "state":"MO",
    "FIPS":29059,
    "county":"Dallas County",
    "number":869.11,
    "rate":51.80983607,
    "population":16775
  },
  {
    "state":"MO",
    "FIPS":29061,
    "county":"Daviess County",
    "number":144.28,
    "rate":17.44408173,
    "population":8271
  },
  {
    "state":"MO",
    "FIPS":29063,
    "county":"Dekalb County",
    "number":510.2,
    "rate":39.63026254,
    "population":12874
  },
  {
    "state":"MO",
    "FIPS":29065,
    "county":"Dent County",
    "number":267.06,
    "rate":17.04819662,
    "population":15665
  },
  {
    "state":"MO",
    "FIPS":29067,
    "county":"Douglas County",
    "number":39.47,
    "rate":2.90263274,
    "population":13598
  },
  {
    "state":"MO",
    "FIPS":29069,
    "county":"Dunklin County",
    "number":2426.97,
    "rate":76.14740211,
    "population":31872
  },
  {
    "state":"MO",
    "FIPS":29071,
    "county":"Franklin County",
    "number":6770.21,
    "rate":66.77657665,
    "population":101386
  },
  {
    "state":"MO",
    "FIPS":29073,
    "county":"Gasconade County",
    "number":266.91,
    "rate":17.81775701,
    "population":14980
  },
  {
    "state":"MO",
    "FIPS":29075,
    "county":"Gentry County",
    "number":169.79,
    "rate":24.97279012,
    "population":6799
  },
  {
    "state":"MO",
    "FIPS":29077,
    "county":"Greene County",
    "number":290067.32,
    "rate":1033.422828,
    "population":280686
  },
  {
    "state":"MO",
    "FIPS":29079,
    "county":"Grundy County",
    "number":110.57,
    "rate":10.71103361,
    "population":10323
  },
  {
    "state":"MO",
    "FIPS":29081,
    "county":"Harrison County",
    "number":204.09,
    "rate":23.34858712,
    "population":8741
  },
  {
    "state":"MO",
    "FIPS":29083,
    "county":"Henry County",
    "number":1577.61,
    "rate":71.22392777,
    "population":22150
  },
  {
    "state":"MO",
    "FIPS":29085,
    "county":"Hickory County",
    "number":64.15,
    "rate":6.83028109,
    "population":9392
  },
  {
    "state":"MO",
    "FIPS":29087,
    "county":"Holt County",
    "number":12.06,
    "rate":2.590206186,
    "population":4656
  },
  {
    "state":"MO",
    "FIPS":29089,
    "county":"Howard County",
    "number":28.86,
    "rate":2.834692073,
    "population":10181
  },
  {
    "state":"MO",
    "FIPS":29091,
    "county":"Howell County",
    "number":2992.81,
    "rate":73.67460982,
    "population":40622
  },
  {
    "state":"MO",
    "FIPS":29093,
    "county":"Iron County",
    "number":275.01,
    "rate":26.3823868,
    "population":10424
  },
  {
    "state":"MO",
    "FIPS":29095,
    "county":"Jackson County",
    "number":291736.21,
    "rate":430.6768774,
    "population":677390
  },
  {
    "state":"MO",
    "FIPS":29097,
    "county":"Jasper County",
    "number":4915.7,
    "rate":42.60369902,
    "population":115382
  },
  {
    "state":"MO",
    "FIPS":29099,
    "county":"Jefferson County",
    "number":37645.68,
    "rate":171.0374281,
    "population":220102
  },
  {
    "state":"MO",
    "FIPS":29101,
    "county":"Johnson County",
    "number":3896.57,
    "rate":71.60443236,
    "population":54418
  },
  {
    "state":"MO",
    "FIPS":29105,
    "county":"Laclede County",
    "number":770.85,
    "rate":21.76804473,
    "population":35412
  },
  {
    "state":"MO",
    "FIPS":29107,
    "county":"Lafayette County",
    "number":1447.1,
    "rate":43.70714911,
    "population":33109
  },
  {
    "state":"MO",
    "FIPS":29109,
    "county":"Lawrence County",
    "number":1211.12,
    "rate":31.56177521,
    "population":38373
  },
  {
    "state":"MO",
    "FIPS":29111,
    "county":"Lewis County",
    "number":21.2,
    "rate":2.086614173,
    "population":10160
  },
  {
    "state":"MO",
    "FIPS":29113,
    "county":"Lincoln County",
    "number":631.17,
    "rate":11.83118392,
    "population":53348
  },
  {
    "state":"MO",
    "FIPS":29115,
    "county":"Linn County",
    "number":401.32,
    "rate":32.14159859,
    "population":12486
  },
  {
    "state":"MO",
    "FIPS":29117,
    "county":"Livingston County",
    "number":231.97,
    "rate":15.44099048,
    "population":15023
  },
  {
    "state":"MO",
    "FIPS":29121,
    "county":"Macon County",
    "number":387.99,
    "rate":24.94150167,
    "population":15556
  },
  {
    "state":"MO",
    "FIPS":29123,
    "county":"Madison County",
    "number":635.25,
    "rate":50.95451993,
    "population":12467
  },
  {
    "state":"MO",
    "FIPS":29125,
    "county":"Maries County",
    "number":15.86,
    "rate":1.755201417,
    "population":9036
  },
  {
    "state":"MO",
    "FIPS":29127,
    "county":"Marion County",
    "number":3703.04,
    "rate":128.5376098,
    "population":28809
  },
  {
    "state":"MO",
    "FIPS":29129,
    "county":"Mercer County",
    "number":232.96,
    "rate":62.72482499,
    "population":3714
  },
  {
    "state":"MO",
    "FIPS":29131,
    "county":"Miller County",
    "number":1705.13,
    "rate":68.88579162,
    "population":24753
  },
  {
    "state":"MO",
    "FIPS":29133,
    "county":"Mississippi County",
    "number":597.23,
    "rate":41.74973785,
    "population":14305
  },
  {
    "state":"MO",
    "FIPS":29135,
    "county":"Moniteau County",
    "number":251.35,
    "rate":16.03918065,
    "population":15671
  },
  {
    "state":"MO",
    "FIPS":29137,
    "county":"Monroe County",
    "number":105.04,
    "rate":12.09302326,
    "population":8686
  },
  {
    "state":"MO",
    "FIPS":29139,
    "county":"Montgomery County",
    "number":92.95,
    "rate":7.730372588,
    "population":12024
  },
  {
    "state":"MO",
    "FIPS":29141,
    "county":"Morgan County",
    "number":278.58,
    "rate":13.83148801,
    "population":20141
  },
  {
    "state":"MO",
    "FIPS":29143,
    "county":"New Madrid County",
    "number":588.81,
    "rate":31.86373722,
    "population":18479
  },
  {
    "state":"MO",
    "FIPS":29145,
    "county":"Newton County",
    "number":79024.13,
    "rate":1337.963361,
    "population":59063
  },
  {
    "state":"MO",
    "FIPS":29147,
    "county":"Nodaway County",
    "number":104.38,
    "rate":4.466983353,
    "population":23367
  },
  {
    "state":"MO",
    "FIPS":29149,
    "county":"Oregon County",
    "number":102.61,
    "rate":9.330726562,
    "population":10997
  },
  {
    "state":"MO",
    "FIPS":29151,
    "county":"Osage County",
    "number":182.37,
    "rate":13.15800866,
    "population":13860
  },
  {
    "state":"MO",
    "FIPS":29153,
    "county":"Ozark County",
    "number":551.72,
    "rate":57.32751455,
    "population":9624
  },
  {
    "state":"MO",
    "FIPS":29155,
    "county":"Pemiscot County",
    "number":3638.09,
    "rate":200.8108406,
    "population":18117
  },
  {
    "state":"MO",
    "FIPS":29157,
    "county":"Perry County",
    "number":1112.91,
    "rate":58.50031539,
    "population":19024
  },
  {
    "state":"MO",
    "FIPS":29159,
    "county":"Pettis County",
    "number":1214.77,
    "rate":28.73223113,
    "population":42279
  },
  {
    "state":"MO",
    "FIPS":29161,
    "county":"Phelps County",
    "number":3646.2,
    "rate":80.6984928,
    "population":45183
  },
  {
    "state":"MO",
    "FIPS":29163,
    "county":"Pike County",
    "number":555.64,
    "rate":29.95202415,
    "population":18551
  },
  {
    "state":"MO",
    "FIPS":29165,
    "county":"Platte County",
    "number":7113.23,
    "rate":77.21197056,
    "population":92126
  },
  {
    "state":"MO",
    "FIPS":29167,
    "county":"Polk County",
    "number":1935.93,
    "rate":62.23854686,
    "population":31105
  },
  {
    "state":"MO",
    "FIPS":29169,
    "county":"Pulaski County",
    "number":153.22,
    "rate":2.869879563,
    "population":53389
  },
  {
    "state":"MO",
    "FIPS":29173,
    "county":"Ralls County",
    "number":384.76,
    "rate":37.5815589,
    "population":10238
  },
  {
    "state":"MO",
    "FIPS":29175,
    "county":"Randolph County",
    "number":2622.72,
    "rate":103.6443391,
    "population":25305
  },
  {
    "state":"MO",
    "FIPS":29177,
    "county":"Ray County",
    "number":2304.11,
    "rate":99.92670657,
    "population":23058
  },
  {
    "state":"MO",
    "FIPS":29181,
    "county":"Ripley County",
    "number":421.12,
    "rate":30.00498753,
    "population":14035
  },
  {
    "state":"MO",
    "FIPS":29183,
    "county":"St Charles County",
    "number":168436.61,
    "rate":456.7264657,
    "population":368791
  },
  {
    "state":"MO",
    "FIPS":29185,
    "county":"St Clair County",
    "number":14.71,
    "rate":1.543546695,
    "population":9530
  },
  {
    "state":"MO",
    "FIPS":29186,
    "county":"Ste Genevieve County",
    "number":6271.15,
    "rate":350.8924575,
    "population":17872
  },
  {
    "state":"MO",
    "FIPS":29187,
    "county":"St Francois County",
    "number":6731.55,
    "rate":102.2488038,
    "population":65835
  },
  {
    "state":"MO",
    "FIPS":29189,
    "county":"St Louis County",
    "number":752343.22,
    "rate":751.7418265,
    "population":1000000
  },
  {
    "state":"MO",
    "FIPS":29195,
    "county":"Saline County",
    "number":733.12,
    "rate":31.2338105,
    "population":23472
  },
  {
    "state":"MO",
    "FIPS":29197,
    "county":"Schuyler County",
    "number":336.27,
    "rate":76.63400182,
    "population":4388
  },
  {
    "state":"MO",
    "FIPS":29199,
    "county":"Scotland County",
    "number":145.41,
    "rate":29.84605911,
    "population":4872
  },
  {
    "state":"MO",
    "FIPS":29201,
    "county":"Scott County",
    "number":3316.28,
    "rate":84.70918797,
    "population":39149
  },
  {
    "state":"MO",
    "FIPS":29205,
    "county":"Shelby County",
    "number":232.45,
    "rate":37.33536781,
    "population":6226
  },
  {
    "state":"MO",
    "FIPS":29207,
    "county":"Stoddard County",
    "number":821.78,
    "rate":27.55062358,
    "population":29828
  },
  {
    "state":"MO",
    "FIPS":29209,
    "county":"Stone County",
    "number":2212.9,
    "rate":69.99968367,
    "population":31613
  },
  {
    "state":"MO",
    "FIPS":29211,
    "county":"Sullivan County",
    "number":308.22,
    "rate":47.23678161,
    "population":6525
  },
  {
    "state":"MO",
    "FIPS":29213,
    "county":"Taney County",
    "number":32696.43,
    "rate":616.1929441,
    "population":53062
  },
  {
    "state":"MO",
    "FIPS":29215,
    "county":"Texas County",
    "number":833.32,
    "rate":32.36445549,
    "population":25748
  },
  {
    "state":"MO",
    "FIPS":29217,
    "county":"Vernon County",
    "number":2147.41,
    "rate":103.2507933,
    "population":20798
  },
  {
    "state":"MO",
    "FIPS":29219,
    "county":"Warren County",
    "number":770.43,
    "rate":23.49946622,
    "population":32785
  },
  {
    "state":"MO",
    "FIPS":29221,
    "county":"Washington County",
    "number":766.29,
    "rate":30.54043282,
    "population":25091
  },
  {
    "state":"MO",
    "FIPS":29223,
    "county":"Wayne County",
    "number":93.61,
    "rate":6.9978321,
    "population":13377
  },
  {
    "state":"MO",
    "FIPS":29225,
    "county":"Webster County",
    "number":352.42,
    "rate":9.699455056,
    "population":36334
  },
  {
    "state":"MO",
    "FIPS":29227,
    "county":"Worth County",
    "number":14.95,
    "rate":7.194417709,
    "population":2078
  },
  {
    "state":"MO",
    "FIPS":29229,
    "county":"Wright County",
    "number":890.85,
    "rate":47.86942504,
    "population":18610
  },
  {
    "state":"MO",
    "FIPS":29510,
    "county":"St Louis City",
    "number":399997.08,
    "rate":1252.83324,
    "population":319274
  },
  {
    "state":"MT",
    "FIPS":30001,
    "county":"Beaverhead County",
    "number":174.37,
    "rate":18.63723814,
    "population":9356
  },
  {
    "state":"MT",
    "FIPS":30005,
    "county":"Blaine County",
    "number":29.07,
    "rate":4.37999096,
    "population":6637
  },
  {
    "state":"MT",
    "FIPS":30007,
    "county":"Broadwater County",
    "number":99.99,
    "rate":17.35334953,
    "population":5762
  },
  {
    "state":"MT",
    "FIPS":30009,
    "county":"Carbon County",
    "number":12.92,
    "rate":1.278069047,
    "population":10109
  },
  {
    "state":"MT",
    "FIPS":30013,
    "county":"Cascade County",
    "number":12825.62,
    "rate":156.8595365,
    "population":81765
  },
  {
    "state":"MT",
    "FIPS":30015,
    "county":"Chouteau County",
    "number":21.46,
    "rate":3.620718745,
    "population":5927
  },
  {
    "state":"MT",
    "FIPS":30017,
    "county":"Custer County",
    "number":220.51,
    "rate":18.61629379,
    "population":11845
  },
  {
    "state":"MT",
    "FIPS":30021,
    "county":"Dawson County",
    "number":97.55,
    "rate":10.558502,
    "population":9239
  },
  {
    "state":"MT",
    "FIPS":30023,
    "county":"Deer Lodge County",
    "number":59.7,
    "rate":6.473649967,
    "population":9222
  },
  {
    "state":"MT",
    "FIPS":30025,
    "county":"Fallon County",
    "number":43.26,
    "rate":14.27251732,
    "population":3031
  },
  {
    "state":"MT",
    "FIPS":30027,
    "county":"Fergus County",
    "number":249.94,
    "rate":21.84981205,
    "population":11439
  },
  {
    "state":"MT",
    "FIPS":30029,
    "county":"Flathead County",
    "number":9442.51,
    "rate":102.9807399,
    "population":91692
  },
  {
    "state":"MT",
    "FIPS":30031,
    "county":"Gallatin County",
    "number":1653.62,
    "rate":17.85689603,
    "population":92604
  },
  {
    "state":"MT",
    "FIPS":30041,
    "county":"Hill County",
    "number":67.42,
    "rate":4.104218664,
    "population":16427
  },
  {
    "state":"MT",
    "FIPS":30043,
    "county":"Jefferson County",
    "number":388.89,
    "rate":34.11315789,
    "population":11400
  },
  {
    "state":"MT",
    "FIPS":30047,
    "county":"Lake County",
    "number":640.07,
    "rate":22.07214042,
    "population":28999
  },
  {
    "state":"MT",
    "FIPS":30049,
    "county":"Lewis and Clark County",
    "number":1033.5,
    "rate":15.93800601,
    "population":64845
  },
  {
    "state":"MT",
    "FIPS":30053,
    "county":"Lincoln County",
    "number":670.84,
    "rate":34.4568288,
    "population":19469
  },
  {
    "state":"MT",
    "FIPS":30057,
    "county":"Madison County",
    "number":36.15,
    "rate":4.67961165,
    "population":7725
  },
  {
    "state":"MT",
    "FIPS":30063,
    "county":"Missoula County",
    "number":6062.68,
    "rate":54.59218038,
    "population":111054
  },
  {
    "state":"MT",
    "FIPS":30065,
    "county":"Musselshell County",
    "number":12.27,
    "rate":2.62459893,
    "population":4675
  },
  {
    "state":"MT",
    "FIPS":30071,
    "county":"Phillips County",
    "number":32.95,
    "rate":7.984007754,
    "population":4127
  },
  {
    "state":"MT",
    "FIPS":30073,
    "county":"Pondera County",
    "number":259.11,
    "rate":41.83917326,
    "population":6193
  },
  {
    "state":"MT",
    "FIPS":30077,
    "county":"Powell County",
    "number":138.83,
    "rate":19.59491884,
    "population":7085
  },
  {
    "state":"MT",
    "FIPS":30081,
    "county":"Ravalli County",
    "number":1233.55,
    "rate":30.35534119,
    "population":40637
  },
  {
    "state":"MT",
    "FIPS":30083,
    "county":"Richland County",
    "number":246.53,
    "rate":22.83954049,
    "population":10794
  },
  {
    "state":"MT",
    "FIPS":30085,
    "county":"Roosevelt County",
    "number":102.64,
    "rate":9.429490124,
    "population":10885
  },
  {
    "state":"MT",
    "FIPS":30087,
    "county":"Rosebud County",
    "number":322.83,
    "rate":34.40950757,
    "population":9382
  },
  {
    "state":"MT",
    "FIPS":30089,
    "county":"Sanders County",
    "number":47.53,
    "rate":4.175524906,
    "population":11383
  },
  {
    "state":"MT",
    "FIPS":30091,
    "county":"Sheridan County",
    "number":26.21,
    "rate":7.32122905,
    "population":3580
  },
  {
    "state":"MT",
    "FIPS":30093,
    "county":"Silver Bow County",
    "number":19837.71,
    "rate":575.1227785,
    "population":34493
  },
  {
    "state":"MT",
    "FIPS":30097,
    "county":"Sweet Grass County",
    "number":13.95,
    "rate":3.889043769,
    "population":3587
  },
  {
    "state":"MT",
    "FIPS":30099,
    "county":"Teton County",
    "number":29.87,
    "rate":4.919301713,
    "population":6072
  },
  {
    "state":"MT",
    "FIPS":30101,
    "county":"Toole County",
    "number":214.89,
    "rate":41.08009941,
    "population":5231
  },
  {
    "state":"MT",
    "FIPS":30105,
    "county":"Valley County",
    "number":315.12,
    "rate":42.04963971,
    "population":7494
  },
  {
    "state":"MT",
    "FIPS":30107,
    "county":"Wheatland County",
    "number":13.28,
    "rate":6.326822296,
    "population":2099
  },
  {
    "state":"MT",
    "FIPS":30111,
    "county":"Yellowstone County",
    "number":186814.48,
    "rate":1229.94891,
    "population":151888
  },
  {
    "state":"NE",
    "FIPS":31001,
    "county":"Adams County",
    "number":6532.22,
    "rate":208.1385419,
    "population":31384
  },
  {
    "state":"NE",
    "FIPS":31003,
    "county":"Antelope County",
    "number":494.2,
    "rate":75.79754601,
    "population":6520
  },
  {
    "state":"NE",
    "FIPS":31011,
    "county":"Boone County",
    "number":124.49,
    "rate":23.02385796,
    "population":5407
  },
  {
    "state":"NE",
    "FIPS":31013,
    "county":"Box Butte County",
    "number":139.94,
    "rate":12.39394208,
    "population":11291
  },
  {
    "state":"NE",
    "FIPS":31019,
    "county":"Buffalo County",
    "number":3774.48,
    "rate":79.22256737,
    "population":47644
  },
  {
    "state":"NE",
    "FIPS":31021,
    "county":"Burt County",
    "number":63.2,
    "rate":9.472422062,
    "population":6672
  },
  {
    "state":"NE",
    "FIPS":31023,
    "county":"Butler County",
    "number":718.53,
    "rate":86.48651902,
    "population":8308
  },
  {
    "state":"NE",
    "FIPS":31025,
    "county":"Cass County",
    "number":304.26,
    "rate":12.09348543,
    "population":25159
  },
  {
    "state":"NE",
    "FIPS":31027,
    "county":"Cedar County",
    "number":110.19,
    "rate":12.56442417,
    "population":8770
  },
  {
    "state":"NE",
    "FIPS":31029,
    "county":"Chase County",
    "number":38.48,
    "rate":9.541284404,
    "population":4033
  },
  {
    "state":"NE",
    "FIPS":31033,
    "county":"Cheyenne County",
    "number":911.76,
    "rate":90.61419201,
    "population":10062
  },
  {
    "state":"NE",
    "FIPS":31035,
    "county":"Clay County",
    "number":308.97,
    "rate":48.2238177,
    "population":6407
  },
  {
    "state":"NE",
    "FIPS":31037,
    "county":"Colfax County",
    "number":355.92,
    "rate":33.76529741,
    "population":10541
  },
  {
    "state":"NE",
    "FIPS":31039,
    "county":"Cuming County",
    "number":340.08,
    "rate":37.41254125,
    "population":9090
  },
  {
    "state":"NE",
    "FIPS":31041,
    "county":"Custer County",
    "number":2053.71,
    "rate":190.3698554,
    "population":10788
  },
  {
    "state":"NE",
    "FIPS":31043,
    "county":"Dakota County",
    "number":2847.26,
    "rate":136.6444306,
    "population":20837
  },
  {
    "state":"NE",
    "FIPS":31045,
    "county":"Dawes County",
    "number":245.62,
    "rate":26.79393477,
    "population":9167
  },
  {
    "state":"NE",
    "FIPS":31047,
    "county":"Dawson County",
    "number":1530.88,
    "rate":63.5219917,
    "population":24100
  },
  {
    "state":"NE",
    "FIPS":31049,
    "county":"Deuel County",
    "number":120.16,
    "rate":60.90217942,
    "population":1973
  },
  {
    "state":"NE",
    "FIPS":31051,
    "county":"Dixon County",
    "number":591.3,
    "rate":100.1015744,
    "population":5907
  },
  {
    "state":"NE",
    "FIPS":31053,
    "county":"Dodge County",
    "number":2304.98,
    "rate":62.8573766,
    "population":36670
  },
  {
    "state":"NE",
    "FIPS":31055,
    "county":"Douglas County",
    "number":305688.86,
    "rate":575.350427,
    "population":531309
  },
  {
    "state":"NE",
    "FIPS":31059,
    "county":"Fillmore County",
    "number":379.23,
    "rate":65.97599165,
    "population":5748
  },
  {
    "state":"NE",
    "FIPS":31061,
    "county":"Franklin County",
    "number":48.03,
    "rate":15.05642633,
    "population":3190
  },
  {
    "state":"NE",
    "FIPS":31063,
    "county":"Frontier County",
    "number":32.26,
    "rate":11.81252289,
    "population":2731
  },
  {
    "state":"NE",
    "FIPS":31067,
    "county":"Gage County",
    "number":799.76,
    "rate":36.79595123,
    "population":21735
  },
  {
    "state":"NE",
    "FIPS":31073,
    "county":"Gosper County",
    "number":16.45,
    "rate":8.071638862,
    "population":2038
  },
  {
    "state":"NE",
    "FIPS":31079,
    "county":"Hall County",
    "number":5071.58,
    "rate":84.057015,
    "population":60335
  },
  {
    "state":"NE",
    "FIPS":31081,
    "county":"Hamilton County",
    "number":1845.55,
    "rate":204.4930748,
    "population":9025
  },
  {
    "state":"NE",
    "FIPS":31083,
    "county":"Harlan County",
    "number":10.71,
    "rate":3.126094571,
    "population":3426
  },
  {
    "state":"NE",
    "FIPS":31087,
    "county":"Hitchcock County",
    "number":32.26,
    "rate":11.18973292,
    "population":2883
  },
  {
    "state":"NE",
    "FIPS":31089,
    "county":"Holt County",
    "number":770.16,
    "rate":73.9898165,
    "population":10409
  },
  {
    "state":"NE",
    "FIPS":31093,
    "county":"Howard County",
    "number":1806.2,
    "rate":286.4710547,
    "population":6305
  },
  {
    "state":"NE",
    "FIPS":31095,
    "county":"Jefferson County",
    "number":42.24,
    "rate":5.593961065,
    "population":7551
  },
  {
    "state":"NE",
    "FIPS":31097,
    "county":"Johnson County",
    "number":392.53,
    "rate":76.01278079,
    "population":5164
  },
  {
    "state":"NE",
    "FIPS":31099,
    "county":"Kearney County",
    "number":301.78,
    "rate":46.18610346,
    "population":6534
  },
  {
    "state":"NE",
    "FIPS":31101,
    "county":"Keith County",
    "number":11.64,
    "rate":1.417783191,
    "population":8210
  },
  {
    "state":"NE",
    "FIPS":31105,
    "county":"Kimball County",
    "number":53.45,
    "rate":14.12153236,
    "population":3785
  },
  {
    "state":"NE",
    "FIPS":31107,
    "county":"Knox County",
    "number":223.84,
    "rate":26.09161907,
    "population":8579
  },
  {
    "state":"NE",
    "FIPS":31109,
    "county":"Lancaster County",
    "number":94836.16,
    "rate":323.1556314,
    "population":293469
  },
  {
    "state":"NE",
    "FIPS":31111,
    "county":"Lincoln County",
    "number":3896.14,
    "rate":108.1389991,
    "population":36029
  },
  {
    "state":"NE",
    "FIPS":31119,
    "county":"Madison County",
    "number":2849.27,
    "rate":81.12493594,
    "population":35122
  },
  {
    "state":"NE",
    "FIPS":31121,
    "county":"Merrick County",
    "number":543.22,
    "rate":69.67038605,
    "population":7797
  },
  {
    "state":"NE",
    "FIPS":31125,
    "county":"Nance County",
    "number":64.44,
    "rate":17.4021064,
    "population":3703
  },
  {
    "state":"NE",
    "FIPS":31129,
    "county":"Nuckolls County",
    "number":1154.43,
    "rate":260.534868,
    "population":4431
  },
  {
    "state":"NE",
    "FIPS":31131,
    "county":"Otoe County",
    "number":2323.81,
    "rate":147.975675,
    "population":15704
  },
  {
    "state":"NE",
    "FIPS":31133,
    "county":"Pawnee County",
    "number":286.2,
    "rate":102.875629,
    "population":2782
  },
  {
    "state":"NE",
    "FIPS":31137,
    "county":"Phelps County",
    "number":1344.86,
    "rate":145.9266493,
    "population":9216
  },
  {
    "state":"NE",
    "FIPS":31139,
    "county":"Pierce County",
    "number":13725.64,
    "rate":1911.649025,
    "population":7180
  },
  {
    "state":"NE",
    "FIPS":31141,
    "county":"Platte County",
    "number":1742.62,
    "rate":53.52355796,
    "population":32558
  },
  {
    "state":"NE",
    "FIPS":31143,
    "county":"Polk County",
    "number":209.7,
    "rate":39.70087088,
    "population":5282
  },
  {
    "state":"NE",
    "FIPS":31145,
    "county":"Red Willow County",
    "number":1865.96,
    "rate":169.4324889,
    "population":11013
  },
  {
    "state":"NE",
    "FIPS":31147,
    "county":"Richardson County",
    "number":63.63,
    "rate":7.696867062,
    "population":8267
  },
  {
    "state":"NE",
    "FIPS":31151,
    "county":"Saline County",
    "number":1298.12,
    "rate":89.85394892,
    "population":14447
  },
  {
    "state":"NE",
    "FIPS":31153,
    "county":"Sarpy County",
    "number":13175.36,
    "rate":79.45483711,
    "population":165822
  },
  {
    "state":"NE",
    "FIPS":31155,
    "county":"Saunders County",
    "number":1627.51,
    "rate":78.21934926,
    "population":20807
  },
  {
    "state":"NE",
    "FIPS":31157,
    "county":"Scotts Bluff County",
    "number":2449,
    "rate":66.36496667,
    "population":36902
  },
  {
    "state":"NE",
    "FIPS":31159,
    "county":"Seward County",
    "number":228.87,
    "rate":13.49071618,
    "population":16965
  },
  {
    "state":"NE",
    "FIPS":31169,
    "county":"Thayer County",
    "number":62.68,
    "rate":12.16142802,
    "population":5154
  },
  {
    "state":"NE",
    "FIPS":31173,
    "county":"Thurston County",
    "number":1702.32,
    "rate":245.8933988,
    "population":6923
  },
  {
    "state":"NE",
    "FIPS":31175,
    "county":"Valley County",
    "number":61.67,
    "rate":14.58264365,
    "population":4229
  },
  {
    "state":"NE",
    "FIPS":31177,
    "county":"Washington County",
    "number":558.21,
    "rate":27.51022621,
    "population":20291
  },
  {
    "state":"NE",
    "FIPS":31179,
    "county":"Wayne County",
    "number":225.27,
    "rate":23.67773807,
    "population":9514
  },
  {
    "state":"NE",
    "FIPS":31181,
    "county":"Webster County",
    "number":35.82,
    "rate":9.544364508,
    "population":3753
  },
  {
    "state":"NE",
    "FIPS":31185,
    "county":"York County",
    "number":2123.49,
    "rate":153.7090119,
    "population":13815
  },
  {
    "state":"NV",
    "FIPS":32001,
    "county":"Churchill County",
    "number":507.07,
    "rate":20.85249003,
    "population":24317
  },
  {
    "state":"NV",
    "FIPS":32003,
    "county":"Clark County",
    "number":847110.39,
    "rate":423.8421361,
    "population":2000000
  },
  {
    "state":"NV",
    "FIPS":32005,
    "county":"Douglas County",
    "number":2200.26,
    "rate":46.82300866,
    "population":46991
  },
  {
    "state":"NV",
    "FIPS":32007,
    "county":"Elko County",
    "number":668.25,
    "rate":13.08293199,
    "population":51078
  },
  {
    "state":"NV",
    "FIPS":32013,
    "county":"Humboldt County",
    "number":978.19,
    "rate":57.20074849,
    "population":17101
  },
  {
    "state":"NV",
    "FIPS":32017,
    "county":"Lincoln County",
    "number":106.34,
    "rate":19.88406881,
    "population":5348
  },
  {
    "state":"NV",
    "FIPS":32019,
    "county":"Lyon County",
    "number":330.88,
    "rate":6.467805622,
    "population":51158
  },
  {
    "state":"NV",
    "FIPS":32021,
    "county":"Mineral County",
    "number":21.21,
    "rate":4.54954955,
    "population":4662
  },
  {
    "state":"NV",
    "FIPS":32023,
    "county":"Nye County",
    "number":1982.06,
    "rate":46.17710784,
    "population":42923
  },
  {
    "state":"NV",
    "FIPS":32027,
    "county":"Pershing County",
    "number":151,
    "rate":22.32076866,
    "population":6765
  },
  {
    "state":"NV",
    "FIPS":32031,
    "county":"Washoe County",
    "number":229664.43,
    "rate":535.2410239,
    "population":429086
  },
  {
    "state":"NV",
    "FIPS":32033,
    "county":"White Pine County",
    "number":72,
    "rate":7.207928722,
    "population":9989
  },
  {
    "state":"NV",
    "FIPS":32510,
    "county":"Carson City",
    "number":5301.14,
    "rate":97.12961266,
    "population":54578
  },
  {
    "state":"NH",
    "FIPS":33001,
    "county":"Belknap County",
    "number":13461.55,
    "rate":222.8954863,
    "population":60394
  },
  {
    "state":"NH",
    "FIPS":33003,
    "county":"Carroll County",
    "number":3054.81,
    "rate":64.08647492,
    "population":47667
  },
  {
    "state":"NH",
    "FIPS":33005,
    "county":"Cheshire County",
    "number":352.76,
    "rate":4.595742463,
    "population":76758
  },
  {
    "state":"NH",
    "FIPS":33007,
    "county":"Coos County",
    "number":1247.08,
    "rate":38.99928073,
    "population":31977
  },
  {
    "state":"NH",
    "FIPS":33009,
    "county":"Grafton County",
    "number":4037.73,
    "rate":45.19408565,
    "population":89342
  },
  {
    "state":"NH",
    "FIPS":33011,
    "county":"Hillsborough County",
    "number":69632.69,
    "rate":172.9575012,
    "population":402600
  },
  {
    "state":"NH",
    "FIPS":33013,
    "county":"Merrimack County",
    "number":2801.05,
    "rate":19.05644717,
    "population":146987
  },
  {
    "state":"NH",
    "FIPS":33015,
    "county":"Rockingham County",
    "number":43500.62,
    "rate":146.0531626,
    "population":297841
  },
  {
    "state":"NH",
    "FIPS":33017,
    "county":"Strafford County",
    "number":82383.68,
    "rate":661.4878395,
    "population":124543
  },
  {
    "state":"NH",
    "FIPS":33019,
    "county":"Sullivan County",
    "number":571.56,
    "rate":13.23423173,
    "population":43188
  },
  {
    "state":"NJ",
    "FIPS":34001,
    "county":"Atlantic County",
    "number":184392.39,
    "rate":669.1405689,
    "population":275566
  },
  {
    "state":"NJ",
    "FIPS":34003,
    "county":"Bergen County",
    "number":492231.07,
    "rate":534.7780083,
    "population":920440
  },
  {
    "state":"NJ",
    "FIPS":34005,
    "county":"Burlington County",
    "number":68942.63,
    "rate":152.7960116,
    "population":451207
  },
  {
    "state":"NJ",
    "FIPS":34007,
    "county":"Camden County",
    "number":210474.66,
    "rate":410.1988291,
    "population":513104
  },
  {
    "state":"NJ",
    "FIPS":34009,
    "county":"Cape May County",
    "number":20647.97,
    "rate":214.195004,
    "population":96398
  },
  {
    "state":"NJ",
    "FIPS":34011,
    "county":"Cumberland County",
    "number":16007.43,
    "rate":101.445112,
    "population":157794
  },
  {
    "state":"NJ",
    "FIPS":34013,
    "county":"Essex County",
    "number":424435.41,
    "rate":538.333272,
    "population":788425
  },
  {
    "state":"NJ",
    "FIPS":34015,
    "county":"Gloucester County",
    "number":88493.28,
    "rate":305.4958211,
    "population":289671
  },
  {
    "state":"NJ",
    "FIPS":34017,
    "county":"Hudson County",
    "number":219226.87,
    "rate":333.7401104,
    "population":656879
  },
  {
    "state":"NJ",
    "FIPS":34019,
    "county":"Hunterdon County",
    "number":453040.92,
    "rate":3578.72015,
    "population":126593
  },
  {
    "state":"NJ",
    "FIPS":34021,
    "county":"Mercer County",
    "number":271745.6,
    "rate":736.3241992,
    "population":369057
  },
  {
    "state":"NJ",
    "FIPS":34023,
    "county":"Middlesex County",
    "number":214350.13,
    "rate":259.9926132,
    "population":824447
  },
  {
    "state":"NJ",
    "FIPS":34025,
    "county":"Monmouth County",
    "number":308806.37,
    "rate":490.8107906,
    "population":629176
  },
  {
    "state":"NJ",
    "FIPS":34027,
    "county":"Morris County",
    "number":213400.6,
    "rate":428.8338726,
    "population":497630
  },
  {
    "state":"NJ",
    "FIPS":34029,
    "county":"Ocean County",
    "number":184508.58,
    "rate":317.729844,
    "population":580709
  },
  {
    "state":"NJ",
    "FIPS":34031,
    "county":"Passaic County",
    "number":98870.7,
    "rate":195.7785245,
    "population":505013
  },
  {
    "state":"NJ",
    "FIPS":34033,
    "county":"Salem County",
    "number":4718.09,
    "rate":71.85200414,
    "population":65664
  },
  {
    "state":"NJ",
    "FIPS":34035,
    "county":"Somerset County",
    "number":179692.6,
    "rate":546.6915735,
    "population":328691
  },
  {
    "state":"NJ",
    "FIPS":34037,
    "county":"Sussex County",
    "number":24700.95,
    "rate":168.0508215,
    "population":146985
  },
  {
    "state":"NJ",
    "FIPS":34039,
    "county":"Union County",
    "number":148874.76,
    "rate":273.164196,
    "population":545001
  },
  {
    "state":"NJ",
    "FIPS":34041,
    "county":"Warren County",
    "number":21556.19,
    "rate":200.4294747,
    "population":107550
  },
  {
    "state":"NM",
    "FIPS":35001,
    "county":"Bernalillo County",
    "number":395782.79,
    "rate":588.0917243,
    "population":672995
  },
  {
    "state":"NM",
    "FIPS":35005,
    "county":"Chaves County",
    "number":2757.06,
    "rate":41.88278544,
    "population":65828
  },
  {
    "state":"NM",
    "FIPS":35006,
    "county":"Cibola County",
    "number":446.88,
    "rate":16.35844498,
    "population":27318
  },
  {
    "state":"NM",
    "FIPS":35007,
    "county":"Colfax County",
    "number":322.44,
    "rate":24.37188209,
    "population":13230
  },
  {
    "state":"NM",
    "FIPS":35009,
    "county":"Curry County",
    "number":1585.95,
    "rate":31.29711489,
    "population":50674
  },
  {
    "state":"NM",
    "FIPS":35013,
    "county":"Dona Ana County",
    "number":17452.54,
    "rate":81.47473484,
    "population":214208
  },
  {
    "state":"NM",
    "FIPS":35015,
    "county":"Eddy County",
    "number":442.65,
    "rate":8.141438293,
    "population":54370
  },
  {
    "state":"NM",
    "FIPS":35017,
    "county":"Grant County",
    "number":31.8,
    "rate":1.083881523,
    "population":29339
  },
  {
    "state":"NM",
    "FIPS":35025,
    "county":"Lea County",
    "number":845.04,
    "rate":12.74839333,
    "population":66286
  },
  {
    "state":"NM",
    "FIPS":35027,
    "county":"Lincoln County",
    "number":79.11,
    "rate":3.914786223,
    "population":20208
  },
  {
    "state":"NM",
    "FIPS":35028,
    "county":"Los Alamos County",
    "number":1543.8,
    "rate":85.0016518,
    "population":18162
  },
  {
    "state":"NM",
    "FIPS":35029,
    "county":"Luna County",
    "number":832.47,
    "rate":33.27351213,
    "population":25019
  },
  {
    "state":"NM",
    "FIPS":35031,
    "county":"McKinley County",
    "number":1082.97,
    "rate":14.89314594,
    "population":72716
  },
  {
    "state":"NM",
    "FIPS":35035,
    "county":"Otero County",
    "number":2629.27,
    "rate":39.77595232,
    "population":66102
  },
  {
    "state":"NM",
    "FIPS":35039,
    "county":"Rio Arriba County",
    "number":810.09,
    "rate":20.12146051,
    "population":40260
  },
  {
    "state":"NM",
    "FIPS":35041,
    "county":"Roosevelt County",
    "number":12.45,
    "rate":0.612214792,
    "population":20336
  },
  {
    "state":"NM",
    "FIPS":35043,
    "county":"Sandoval County",
    "number":3630.53,
    "rate":26.82941789,
    "population":135319
  },
  {
    "state":"NM",
    "FIPS":35045,
    "county":"San Juan County",
    "number":3620.28,
    "rate":28.20257543,
    "population":128367
  },
  {
    "state":"NM",
    "FIPS":35047,
    "county":"San Miguel County",
    "number":2590.8,
    "rate":89.48295513,
    "population":28953
  },
  {
    "state":"NM",
    "FIPS":35049,
    "county":"Santa Fe County",
    "number":37678.18,
    "rate":257.3909895,
    "population":146385
  },
  {
    "state":"NM",
    "FIPS":35051,
    "county":"Sierra County",
    "number":13.48,
    "rate":1.133439839,
    "population":11893
  },
  {
    "state":"NM",
    "FIPS":35053,
    "county":"Socorro County",
    "number":16.6,
    "rate":0.947110173,
    "population":17527
  },
  {
    "state":"NM",
    "FIPS":35055,
    "county":"Taos County",
    "number":71.51,
    "rate":2.179053539,
    "population":32817
  },
  {
    "state":"NM",
    "FIPS":35057,
    "county":"Torrance County",
    "number":207.95,
    "rate":12.93865107,
    "population":16072
  },
  {
    "state":"NM",
    "FIPS":35061,
    "county":"Valencia County",
    "number":2287.17,
    "rate":29.84692679,
    "population":76630
  },
  {
    "state":"NY",
    "FIPS":36001,
    "county":"Albany County",
    "number":1010000,
    "rate":3309.187291,
    "population":306186
  },
  {
    "state":"NY",
    "FIPS":36003,
    "county":"Allegany County",
    "number":2142.29,
    "rate":44.36393382,
    "population":48289
  },
  {
    "state":"NY",
    "FIPS":36005,
    "county":"Bronx County",
    "number":601507.91,
    "rate":425.3268822,
    "population":1410000
  },
  {
    "state":"NY",
    "FIPS":36007,
    "county":"Broome County",
    "number":76178.3,
    "rate":383.4413852,
    "population":198670
  },
  {
    "state":"NY",
    "FIPS":36009,
    "county":"Cattaraugus County",
    "number":18947.19,
    "rate":238.8040382,
    "population":79342
  },
  {
    "state":"NY",
    "FIPS":36011,
    "county":"Cayuga County",
    "number":106630.72,
    "rate":1339.295879,
    "population":79617
  },
  {
    "state":"NY",
    "FIPS":36013,
    "county":"Chautauqua County",
    "number":10985.55,
    "rate":82.31466079,
    "population":133458
  },
  {
    "state":"NY",
    "FIPS":36015,
    "county":"Chemung County",
    "number":32946.86,
    "rate":369.2310968,
    "population":89231
  },
  {
    "state":"NY",
    "FIPS":36017,
    "county":"Chenango County",
    "number":3286.93,
    "rate":65.93773195,
    "population":49849
  },
  {
    "state":"NY",
    "FIPS":36019,
    "county":"Clinton County",
    "number":78537.2,
    "rate":959.8073962,
    "population":81826
  },
  {
    "state":"NY",
    "FIPS":36021,
    "county":"Columbia County",
    "number":6313.78,
    "rate":100.9332737,
    "population":62554
  },
  {
    "state":"NY",
    "FIPS":36023,
    "county":"Cortland County",
    "number":2786.91,
    "rate":56.64105847,
    "population":49203
  },
  {
    "state":"NY",
    "FIPS":36025,
    "county":"Delaware County",
    "number":2345.85,
    "rate":49.73603867,
    "population":47166
  },
  {
    "state":"NY",
    "FIPS":36027,
    "county":"Dutchess County",
    "number":116299.14,
    "rate":391.1318356,
    "population":297340
  },
  {
    "state":"NY",
    "FIPS":36029,
    "county":"Erie County",
    "number":802674.74,
    "rate":872.2781771,
    "population":920205
  },
  {
    "state":"NY",
    "FIPS":36031,
    "county":"Essex County",
    "number":2329.98,
    "rate":59.64214406,
    "population":39066
  },
  {
    "state":"NY",
    "FIPS":36033,
    "county":"Franklin County",
    "number":4472.27,
    "rate":86.31559647,
    "population":51813
  },
  {
    "state":"NY",
    "FIPS":36035,
    "county":"Fulton County",
    "number":5289.8,
    "rate":96.15545417,
    "population":55013
  },
  {
    "state":"NY",
    "FIPS":36037,
    "county":"Genesee County",
    "number":9444.09,
    "rate":157.7327388,
    "population":59874
  },
  {
    "state":"NY",
    "FIPS":36039,
    "county":"Greene County",
    "number":3290.55,
    "rate":67.62886386,
    "population":48656
  },
  {
    "state":"NY",
    "FIPS":36041,
    "county":"Hamilton County",
    "number":137.67,
    "rate":28.75913934,
    "population":4787
  },
  {
    "state":"NY",
    "FIPS":36043,
    "county":"Herkimer County",
    "number":3835.16,
    "rate":59.39354519,
    "population":64572
  },
  {
    "state":"NY",
    "FIPS":36045,
    "county":"Jefferson County",
    "number":37077.02,
    "rate":306.6345231,
    "population":120916
  },
  {
    "state":"NY",
    "FIPS":36047,
    "county":"Kings County",
    "number":525968.42,
    "rate":204.2703692,
    "population":2570000
  },
  {
    "state":"NY",
    "FIPS":36049,
    "county":"Lewis County",
    "number":1120.05,
    "rate":41.08918155,
    "population":27259
  },
  {
    "state":"NY",
    "FIPS":36051,
    "county":"Livingston County",
    "number":3663.1,
    "rate":56.47528599,
    "population":64862
  },
  {
    "state":"NY",
    "FIPS":36053,
    "county":"Madison County",
    "number":2783.43,
    "rate":38.43454847,
    "population":72420
  },
  {
    "state":"NY",
    "FIPS":36055,
    "county":"Monroe County",
    "number":627253.31,
    "rate":837.9219778,
    "population":748582
  },
  {
    "state":"NY",
    "FIPS":36057,
    "county":"Montgomery County",
    "number":6373.32,
    "rate":127.7448838,
    "population":49891
  },
  {
    "state":"NY",
    "FIPS":36059,
    "county":"Nassau County",
    "number":955413.27,
    "rate":707.2299976,
    "population":1350000
  },
  {
    "state":"NY",
    "FIPS":36061,
    "county":"New York County",
    "number":1550000,
    "rate":952.7241235,
    "population":1630000
  },
  {
    "state":"NY",
    "FIPS":36063,
    "county":"Niagara County",
    "number":33689.51,
    "rate":156.7960365,
    "population":214862
  },
  {
    "state":"NY",
    "FIPS":36065,
    "county":"Oneida County",
    "number":94884.24,
    "rate":405.5211321,
    "population":233981
  },
  {
    "state":"NY",
    "FIPS":36067,
    "county":"Onondaga County",
    "number":218110.55,
    "rate":466.8641985,
    "population":467182
  },
  {
    "state":"NY",
    "FIPS":36069,
    "county":"Ontario County",
    "number":11643.6,
    "rate":106.9947806,
    "population":108824
  },
  {
    "state":"NY",
    "FIPS":36071,
    "county":"Orange County",
    "number":122116.85,
    "rate":326.5715256,
    "population":373936
  },
  {
    "state":"NY",
    "FIPS":36073,
    "county":"Orleans County",
    "number":4497.31,
    "rate":105.7767481,
    "population":42517
  },
  {
    "state":"NY",
    "FIPS":36075,
    "county":"Oswego County",
    "number":14232.12,
    "rate":116.9885084,
    "population":121654
  },
  {
    "state":"NY",
    "FIPS":36077,
    "county":"Otsego County",
    "number":15767.18,
    "rate":254.802521,
    "population":61880
  },
  {
    "state":"NY",
    "FIPS":36079,
    "county":"Putnam County",
    "number":21068.9,
    "rate":211.4141505,
    "population":99657
  },
  {
    "state":"NY",
    "FIPS":36081,
    "county":"Queens County",
    "number":762837.86,
    "rate":334.4842652,
    "population":2280000
  },
  {
    "state":"NY",
    "FIPS":36083,
    "county":"Rensselaer County",
    "number":36794.52,
    "rate":230.5825583,
    "population":159572
  },
  {
    "state":"NY",
    "FIPS":36085,
    "county":"Richmond County",
    "number":307983.57,
    "rate":653.9248626,
    "population":470977
  },
  {
    "state":"NY",
    "FIPS":36087,
    "county":"Rockland County",
    "number":202305.62,
    "rate":636.5314875,
    "population":317825
  },
  {
    "state":"NY",
    "FIPS":36089,
    "county":"St Lawrence County",
    "number":11250.55,
    "rate":100.0351217,
    "population":112466
  },
  {
    "state":"NY",
    "FIPS":36091,
    "county":"Saratoga County",
    "number":24463.19,
    "rate":109.9899286,
    "population":222413
  },
  {
    "state":"NY",
    "FIPS":36093,
    "county":"Schenectady County",
    "number":18232.43,
    "rate":117.5898898,
    "population":155051
  },
  {
    "state":"NY",
    "FIPS":36095,
    "county":"Schoharie County",
    "number":1167.26,
    "rate":36.42224164,
    "population":32048
  },
  {
    "state":"NY",
    "FIPS":36097,
    "county":"Schuyler County",
    "number":1049.99,
    "rate":56.60628605,
    "population":18549
  },
  {
    "state":"NY",
    "FIPS":36099,
    "county":"Seneca County",
    "number":3400.74,
    "rate":96.11769029,
    "population":35381
  },
  {
    "state":"NY",
    "FIPS":36101,
    "county":"Steuben County",
    "number":7477.42,
    "rate":75.49289234,
    "population":99048
  },
  {
    "state":"NY",
    "FIPS":36103,
    "county":"Suffolk County",
    "number":842370.99,
    "rate":561.4227131,
    "population":1500000
  },
  {
    "state":"NY",
    "FIPS":36105,
    "county":"Sullivan County",
    "number":5039.85,
    "rate":65.49427558,
    "population":76951
  },
  {
    "state":"NY",
    "FIPS":36107,
    "county":"Tioga County",
    "number":2943.44,
    "rate":58.47700407,
    "population":50335
  },
  {
    "state":"NY",
    "FIPS":36109,
    "county":"Tompkins County",
    "number":1939.31,
    "rate":18.82021272,
    "population":103044
  },
  {
    "state":"NY",
    "FIPS":36111,
    "county":"Ulster County",
    "number":35590.13,
    "rate":195.8644088,
    "population":181708
  },
  {
    "state":"NY",
    "FIPS":36113,
    "county":"Warren County",
    "number":5387.45,
    "rate":82.33914107,
    "population":65430
  },
  {
    "state":"NY",
    "FIPS":36115,
    "county":"Washington County",
    "number":2573.57,
    "rate":40.82051201,
    "population":63046
  },
  {
    "state":"NY",
    "FIPS":36117,
    "county":"Wayne County",
    "number":4526.11,
    "rate":48.66314013,
    "population":93009
  },
  {
    "state":"NY",
    "FIPS":36119,
    "county":"Westchester County",
    "number":384867.08,
    "rate":400.1325364,
    "population":961849
  },
  {
    "state":"NY",
    "FIPS":36121,
    "county":"Wyoming County",
    "number":5770.52,
    "rate":138.1763326,
    "population":41762
  },
  {
    "state":"NY",
    "FIPS":36123,
    "county":"Yates County",
    "number":4438.61,
    "rate":175.682169,
    "population":25265
  },
  {
    "state":"NC",
    "FIPS":37001,
    "county":"Alamance County",
    "number":18828.78,
    "rate":122.5257692,
    "population":153672
  },
  {
    "state":"NC",
    "FIPS":37003,
    "county":"Alexander County",
    "number":1204.22,
    "rate":32.53593429,
    "population":37012
  },
  {
    "state":"NC",
    "FIPS":37005,
    "county":"Alleghany County",
    "number":306.09,
    "rate":28.0173913,
    "population":10925
  },
  {
    "state":"NC",
    "FIPS":37007,
    "county":"Anson County",
    "number":741.54,
    "rate":28.14086752,
    "population":26351
  },
  {
    "state":"NC",
    "FIPS":37009,
    "county":"Ashe County",
    "number":2252.91,
    "rate":82.9801105,
    "population":27150
  },
  {
    "state":"NC",
    "FIPS":37011,
    "county":"Avery County",
    "number":588.95,
    "rate":33.35693249,
    "population":17656
  },
  {
    "state":"NC",
    "FIPS":37013,
    "county":"Beaufort County",
    "number":2867.5,
    "rate":60.37986145,
    "population":47491
  },
  {
    "state":"NC",
    "FIPS":37015,
    "county":"Bertie County",
    "number":1880.76,
    "rate":91.29459735,
    "population":20601
  },
  {
    "state":"NC",
    "FIPS":37017,
    "county":"Bladen County",
    "number":1362.47,
    "rate":39.03254455,
    "population":34906
  },
  {
    "state":"NC",
    "FIPS":37019,
    "county":"Brunswick County",
    "number":9830.03,
    "rate":87.66011522,
    "population":112138
  },
  {
    "state":"NC",
    "FIPS":37021,
    "county":"Buncombe County",
    "number":591215.54,
    "rate":2419.415132,
    "population":244363
  },
  {
    "state":"NC",
    "FIPS":37023,
    "county":"Burke County",
    "number":5940.54,
    "rate":65.83409985,
    "population":90235
  },
  {
    "state":"NC",
    "FIPS":37025,
    "county":"Cabarrus County",
    "number":241585.69,
    "rate":1309.499802,
    "population":184487
  },
  {
    "state":"NC",
    "FIPS":37027,
    "county":"Caldwell County",
    "number":7622.57,
    "rate":93.01942743,
    "population":81946
  },
  {
    "state":"NC",
    "FIPS":37031,
    "county":"Carteret County",
    "number":68334.36,
    "rate":1008.193688,
    "population":67779
  },
  {
    "state":"NC",
    "FIPS":37033,
    "county":"Caswell County",
    "number":167.84,
    "rate":7.239787776,
    "population":23183
  },
  {
    "state":"NC",
    "FIPS":37035,
    "county":"Catawba County",
    "number":42453.65,
    "rate":274.7488966,
    "population":154518
  },
  {
    "state":"NC",
    "FIPS":37037,
    "county":"Chatham County",
    "number":74667.3,
    "rate":1134.571728,
    "population":65811
  },
  {
    "state":"NC",
    "FIPS":37039,
    "county":"Cherokee County",
    "number":1707.57,
    "rate":63.3089871,
    "population":26972
  },
  {
    "state":"NC",
    "FIPS":37041,
    "county":"Chowan County",
    "number":1426.2,
    "rate":97.05341953,
    "population":14695
  },
  {
    "state":"NC",
    "FIPS":37043,
    "county":"Clay County",
    "number":12.61,
    "rate":1.183370871,
    "population":10656
  },
  {
    "state":"NC",
    "FIPS":37045,
    "county":"Cleveland County",
    "number":9647.13,
    "rate":98.92970312,
    "population":97515
  },
  {
    "state":"NC",
    "FIPS":37047,
    "county":"Columbus County",
    "number":6656.13,
    "rate":115.5497882,
    "population":57604
  },
  {
    "state":"NC",
    "FIPS":37049,
    "county":"Craven County",
    "number":13599.27,
    "rate":129.1368259,
    "population":105309
  },
  {
    "state":"NC",
    "FIPS":37051,
    "county":"Cumberland County",
    "number":47920.11,
    "rate":148.3140152,
    "population":323099
  },
  {
    "state":"NC",
    "FIPS":37053,
    "county":"Currituck County",
    "number":298.83,
    "rate":12.40370247,
    "population":24092
  },
  {
    "state":"NC",
    "FIPS":37055,
    "county":"Dare County",
    "number":1175.95,
    "rate":34.12705322,
    "population":34458
  },
  {
    "state":"NC",
    "FIPS":37057,
    "county":"Davidson County",
    "number":43617.27,
    "rate":266.7037825,
    "population":163542
  },
  {
    "state":"NC",
    "FIPS":37059,
    "county":"Davie County",
    "number":976.12,
    "rate":23.59715709,
    "population":41366
  },
  {
    "state":"NC",
    "FIPS":37061,
    "county":"Duplin County",
    "number":5537.25,
    "rate":92.80255418,
    "population":59667
  },
  {
    "state":"NC",
    "FIPS":37063,
    "county":"Durham County",
    "number":302232.21,
    "rate":1070.576144,
    "population":282308
  },
  {
    "state":"NC",
    "FIPS":37065,
    "county":"Edgecombe County",
    "number":2080.62,
    "rate":37.34465305,
    "population":55714
  },
  {
    "state":"NC",
    "FIPS":37067,
    "county":"Forsyth County",
    "number":80831.54,
    "rate":225.8072392,
    "population":357967
  },
  {
    "state":"NC",
    "FIPS":37069,
    "county":"Franklin County",
    "number":2711.11,
    "rate":44.03225544,
    "population":61571
  },
  {
    "state":"NC",
    "FIPS":37071,
    "county":"Gaston County",
    "number":182707.94,
    "rate":877.5428906,
    "population":208204
  },
  {
    "state":"NC",
    "FIPS":37077,
    "county":"Granville County",
    "number":2950.06,
    "rate":51.02321076,
    "population":57818
  },
  {
    "state":"NC",
    "FIPS":37079,
    "county":"Greene County",
    "number":685.09,
    "rate":32.02702071,
    "population":21391
  },
  {
    "state":"NC",
    "FIPS":37081,
    "county":"Guilford County",
    "number":355554.25,
    "rate":709.8393073,
    "population":500894
  },
  {
    "state":"NC",
    "FIPS":37083,
    "county":"Halifax County",
    "number":3520.54,
    "rate":65.28828144,
    "population":53923
  },
  {
    "state":"NC",
    "FIPS":37085,
    "county":"Harnett County",
    "number":11867.04,
    "rate":97.10129037,
    "population":122213
  },
  {
    "state":"NC",
    "FIPS":37087,
    "county":"Haywood County",
    "number":2081.55,
    "rate":35.41135041,
    "population":58782
  },
  {
    "state":"NC",
    "FIPS":37089,
    "county":"Henderson County",
    "number":6013.61,
    "rate":55.62234658,
    "population":108115
  },
  {
    "state":"NC",
    "FIPS":37091,
    "county":"Hertford County",
    "number":2171.85,
    "rate":88.89366405,
    "population":24432
  },
  {
    "state":"NC",
    "FIPS":37093,
    "county":"Hoke County",
    "number":1718.26,
    "rate":34.04719916,
    "population":50467
  },
  {
    "state":"NC",
    "FIPS":37095,
    "county":"Hyde County",
    "number":255.88,
    "rate":44.59393517,
    "population":5738
  },
  {
    "state":"NC",
    "FIPS":37097,
    "county":"Iredell County",
    "number":101030.58,
    "rate":620.8707996,
    "population":162724
  },
  {
    "state":"NC",
    "FIPS":37099,
    "county":"Jackson County",
    "number":4468.89,
    "rate":110.2993879,
    "population":40516
  },
  {
    "state":"NC",
    "FIPS":37101,
    "county":"Johnston County",
    "number":14199.33,
    "rate":81.18866964,
    "population":174893
  },
  {
    "state":"NC",
    "FIPS":37103,
    "county":"Jones County",
    "number":1291.63,
    "rate":125.6938497,
    "population":10276
  },
  {
    "state":"NC",
    "FIPS":37105,
    "county":"Lee County",
    "number":4800.64,
    "rate":80.86241746,
    "population":59368
  },
  {
    "state":"NC",
    "FIPS":37107,
    "county":"Lenoir County",
    "number":5706.31,
    "rate":96.42131765,
    "population":59181
  },
  {
    "state":"NC",
    "FIPS":37109,
    "county":"Lincoln County",
    "number":6413.24,
    "rate":81.2080078,
    "population":78973
  },
  {
    "state":"NC",
    "FIPS":37111,
    "county":"McDowell County",
    "number":3217.28,
    "rate":71.54757934,
    "population":44967
  },
  {
    "state":"NC",
    "FIPS":37113,
    "county":"Macon County",
    "number":3308.02,
    "rate":97.88199787,
    "population":33796
  },
  {
    "state":"NC",
    "FIPS":37115,
    "county":"Madison County",
    "number":431.85,
    "rate":20.68049037,
    "population":20882
  },
  {
    "state":"NC",
    "FIPS":37117,
    "county":"Martin County",
    "number":663.88,
    "rate":27.79368668,
    "population":23886
  },
  {
    "state":"NC",
    "FIPS":37119,
    "county":"Mecklenburg County",
    "number":260063.47,
    "rate":268.4445782,
    "population":968779
  },
  {
    "state":"NC",
    "FIPS":37121,
    "county":"Mitchell County",
    "number":157.04,
    "rate":10.2193011,
    "population":15367
  },
  {
    "state":"NC",
    "FIPS":37123,
    "county":"Montgomery County",
    "number":865.38,
    "rate":31.3123711,
    "population":27637
  },
  {
    "state":"NC",
    "FIPS":37125,
    "county":"Moore County",
    "number":130430.41,
    "rate":1444.092228,
    "population":90320
  },
  {
    "state":"NC",
    "FIPS":37127,
    "county":"Nash County",
    "number":88643.27,
    "rate":929.9545741,
    "population":95320
  },
  {
    "state":"NC",
    "FIPS":37129,
    "county":"New Hanover County",
    "number":252731.92,
    "rate":1208.468829,
    "population":209134
  },
  {
    "state":"NC",
    "FIPS":37131,
    "county":"Northampton County",
    "number":307.29,
    "rate":14.41931397,
    "population":21311
  },
  {
    "state":"NC",
    "FIPS":37133,
    "county":"Onslow County",
    "number":5342.83,
    "rate":29.0548051,
    "population":183888
  },
  {
    "state":"NC",
    "FIPS":37135,
    "county":"Orange County",
    "number":65855.62,
    "rate":478.1570922,
    "population":137728
  },
  {
    "state":"NC",
    "FIPS":37137,
    "county":"Pamlico County",
    "number":362.21,
    "rate":27.76619394,
    "population":13045
  },
  {
    "state":"NC",
    "FIPS":37139,
    "county":"Pasquotank County",
    "number":7133.32,
    "rate":176.0096723,
    "population":40528
  },
  {
    "state":"NC",
    "FIPS":37141,
    "county":"Pender County",
    "number":2002.86,
    "rate":37.11267997,
    "population":53967
  },
  {
    "state":"NC",
    "FIPS":37143,
    "county":"Perquimans County",
    "number":756.53,
    "rate":55.90673958,
    "population":13532
  },
  {
    "state":"NC",
    "FIPS":37145,
    "county":"Person County",
    "number":4614.22,
    "rate":117.7727864,
    "population":39179
  },
  {
    "state":"NC",
    "FIPS":37147,
    "county":"Pitt County",
    "number":251672.63,
    "rate":1455.638567,
    "population":172895
  },
  {
    "state":"NC",
    "FIPS":37149,
    "county":"Polk County",
    "number":1711.85,
    "rate":84.54415251,
    "population":20248
  },
  {
    "state":"NC",
    "FIPS":37151,
    "county":"Randolph County",
    "number":18942.59,
    "rate":133.0929697,
    "population":142326
  },
  {
    "state":"NC",
    "FIPS":37153,
    "county":"Richmond County",
    "number":5015.3,
    "rate":108.1326405,
    "population":46381
  },
  {
    "state":"NC",
    "FIPS":37155,
    "county":"Robeson County",
    "number":9562.27,
    "rate":70.63907275,
    "population":135368
  },
  {
    "state":"NC",
    "FIPS":37157,
    "county":"Rockingham County",
    "number":7959.9,
    "rate":85.91736287,
    "population":92646
  },
  {
    "state":"NC",
    "FIPS":37159,
    "county":"Rowan County",
    "number":12199.34,
    "rate":88.45549795,
    "population":137915
  },
  {
    "state":"NC",
    "FIPS":37161,
    "county":"Rutherford County",
    "number":3292.22,
    "rate":48.96004045,
    "population":67243
  },
  {
    "state":"NC",
    "FIPS":37163,
    "county":"Sampson County",
    "number":2826.16,
    "rate":44.231317,
    "population":63895
  },
  {
    "state":"NC",
    "FIPS":37165,
    "county":"Scotland County",
    "number":2988.68,
    "rate":82.65840639,
    "population":36157
  },
  {
    "state":"NC",
    "FIPS":37167,
    "county":"Stanly County",
    "number":4610.05,
    "rate":76.20799101,
    "population":60493
  },
  {
    "state":"NC",
    "FIPS":37169,
    "county":"Stokes County",
    "number":1207.25,
    "rate":25.82021559,
    "population":46756
  },
  {
    "state":"NC",
    "FIPS":37171,
    "county":"Surry County",
    "number":6672.54,
    "rate":90.69894519,
    "population":73568
  },
  {
    "state":"NC",
    "FIPS":37173,
    "county":"Swain County",
    "number":1108.23,
    "rate":78.70951705,
    "population":14080
  },
  {
    "state":"NC",
    "FIPS":37175,
    "county":"Transylvania County",
    "number":479.64,
    "rate":14.59913557,
    "population":32854
  },
  {
    "state":"NC",
    "FIPS":37179,
    "county":"Union County",
    "number":7498.04,
    "rate":35.98028725,
    "population":208393
  },
  {
    "state":"NC",
    "FIPS":37181,
    "county":"Vance County",
    "number":5981.28,
    "rate":132.699117,
    "population":45074
  },
  {
    "state":"NC",
    "FIPS":37183,
    "county":"Wake County",
    "number":788874.53,
    "rate":828.1182245,
    "population":952611
  },
  {
    "state":"NC",
    "FIPS":37185,
    "county":"Warren County",
    "number":586.24,
    "rate":28.46654365,
    "population":20594
  },
  {
    "state":"NC",
    "FIPS":37187,
    "county":"Washington County",
    "number":708.11,
    "rate":55.64277856,
    "population":12726
  },
  {
    "state":"NC",
    "FIPS":37189,
    "county":"Watauga County",
    "number":3376.03,
    "rate":64.84384604,
    "population":52064
  },
  {
    "state":"NC",
    "FIPS":37191,
    "county":"Wayne County",
    "number":95082.74,
    "rate":763.6922509,
    "population":124504
  },
  {
    "state":"NC",
    "FIPS":37193,
    "county":"Wilkes County",
    "number":3617.54,
    "rate":52.26903627,
    "population":69210
  },
  {
    "state":"NC",
    "FIPS":37195,
    "county":"Wilson County",
    "number":9680.87,
    "rate":118.3943597,
    "population":81768
  },
  {
    "state":"NC",
    "FIPS":37197,
    "county":"Yadkin County",
    "number":2249.51,
    "rate":59.11052134,
    "population":38056
  },
  {
    "state":"NC",
    "FIPS":37199,
    "county":"Yancey County",
    "number":818.61,
    "rate":46.42488516,
    "population":17633
  },
  {
    "state":"ND",
    "FIPS":38001,
    "county":"Adams County",
    "number":16.33,
    "rate":7.093831451,
    "population":2302
  },
  {
    "state":"ND",
    "FIPS":38003,
    "county":"Barnes County",
    "number":1000.68,
    "rate":90.86352493,
    "population":11013
  },
  {
    "state":"ND",
    "FIPS":38009,
    "county":"Bottineau County",
    "number":15.72,
    "rate":2.387969011,
    "population":6583
  },
  {
    "state":"ND",
    "FIPS":38011,
    "county":"Bowman County",
    "number":82.09,
    "rate":25.49378882,
    "population":3220
  },
  {
    "state":"ND",
    "FIPS":38015,
    "county":"Burleigh County",
    "number":17563.68,
    "rate":204.0556272,
    "population":86073
  },
  {
    "state":"ND",
    "FIPS":38017,
    "county":"Cass County",
    "number":26344.93,
    "rate":167.9743559,
    "population":156839
  },
  {
    "state":"ND",
    "FIPS":38019,
    "county":"Cavalier County",
    "number":39.57,
    "rate":10.03550596,
    "population":3943
  },
  {
    "state":"ND",
    "FIPS":38021,
    "county":"Dickey County",
    "number":593.57,
    "rate":113.1687321,
    "population":5245
  },
  {
    "state":"ND",
    "FIPS":38023,
    "county":"Divide County",
    "number":81.99,
    "rate":36.71742051,
    "population":2233
  },
  {
    "state":"ND",
    "FIPS":38031,
    "county":"Foster County",
    "number":27.04,
    "rate":7.971698113,
    "population":3392
  },
  {
    "state":"ND",
    "FIPS":38035,
    "county":"Grand Forks County",
    "number":82701.86,
    "rate":1221.575161,
    "population":67701
  },
  {
    "state":"ND",
    "FIPS":38037,
    "county":"Grant County",
    "number":75.4,
    "rate":32.26358579,
    "population":2337
  },
  {
    "state":"ND",
    "FIPS":38051,
    "county":"McIntosh County",
    "number":37.21,
    "rate":13.41384283,
    "population":2774
  },
  {
    "state":"ND",
    "FIPS":38053,
    "county":"McKenzie County",
    "number":65.01,
    "rate":8.161958569,
    "population":7965
  },
  {
    "state":"ND",
    "FIPS":38055,
    "county":"McLean County",
    "number":314.22,
    "rate":33.53110661,
    "population":9371
  },
  {
    "state":"ND",
    "FIPS":38057,
    "county":"Mercer County",
    "number":365.15,
    "rate":43.02969597,
    "population":8486
  },
  {
    "state":"ND",
    "FIPS":38059,
    "county":"Morton County",
    "number":3216.97,
    "rate":114.7074345,
    "population":28045
  },
  {
    "state":"ND",
    "FIPS":38061,
    "county":"Mountrail County",
    "number":58.98,
    "rate":6.740571429,
    "population":8750
  },
  {
    "state":"ND",
    "FIPS":38063,
    "county":"Nelson County",
    "number":13024.19,
    "rate":4227.26063,
    "population":3081
  },
  {
    "state":"ND",
    "FIPS":38071,
    "county":"Ramsey County",
    "number":468.98,
    "rate":40.58675898,
    "population":11555
  },
  {
    "state":"ND",
    "FIPS":38073,
    "county":"Ransom County",
    "number":35.24,
    "rate":6.437705517,
    "population":5474
  },
  {
    "state":"ND",
    "FIPS":38075,
    "county":"Renville County",
    "number":97.39,
    "rate":38.13234143,
    "population":2554
  },
  {
    "state":"ND",
    "FIPS":38077,
    "county":"Richland County",
    "number":201.27,
    "rate":12.41640962,
    "population":16210
  },
  {
    "state":"ND",
    "FIPS":38079,
    "county":"Rolette County",
    "number":15.01,
    "rate":1.045993031,
    "population":14350
  },
  {
    "state":"ND",
    "FIPS":38081,
    "county":"Sargent County",
    "number":55.33,
    "rate":14.20539153,
    "population":3895
  },
  {
    "state":"ND",
    "FIPS":38085,
    "county":"Sioux County",
    "number":23.39,
    "rate":5.385678103,
    "population":4343
  },
  {
    "state":"ND",
    "FIPS":38089,
    "county":"Stark County",
    "number":2882.13,
    "rate":107.0588017,
    "population":26921
  },
  {
    "state":"ND",
    "FIPS":38093,
    "county":"Stutsman County",
    "number":1134.29,
    "rate":54.12205363,
    "population":20958
  },
  {
    "state":"ND",
    "FIPS":38095,
    "county":"Towner County",
    "number":39.38,
    "rate":16.95221696,
    "population":2323
  },
  {
    "state":"ND",
    "FIPS":38097,
    "county":"Traill County",
    "number":263.36,
    "rate":32.62232132,
    "population":8073
  },
  {
    "state":"ND",
    "FIPS":38099,
    "county":"Walsh County",
    "number":910.7,
    "rate":82.38646644,
    "population":11054
  },
  {
    "state":"ND",
    "FIPS":38101,
    "county":"Ward County",
    "number":2906.16,
    "rate":44.38240684,
    "population":65480
  },
  {
    "state":"ND",
    "FIPS":38105,
    "county":"Williams County",
    "number":2096.56,
    "rate":78.56404107,
    "population":26686
  },
  {
    "state":"OH",
    "FIPS":39001,
    "county":"Adams County",
    "number":2454.92,
    "rate":86.54445463,
    "population":28366
  },
  {
    "state":"OH",
    "FIPS":39003,
    "county":"Allen County",
    "number":28694.26,
    "rate":272.5440954,
    "population":105283
  },
  {
    "state":"OH",
    "FIPS":39005,
    "county":"Ashland County",
    "number":1511.36,
    "rate":28.38767844,
    "population":53240
  },
  {
    "state":"OH",
    "FIPS":39007,
    "county":"Ashtabula County",
    "number":9959.09,
    "rate":99.32867231,
    "population":100264
  },
  {
    "state":"OH",
    "FIPS":39009,
    "county":"Athens County",
    "number":13242.31,
    "rate":204.8688078,
    "population":64638
  },
  {
    "state":"OH",
    "FIPS":39011,
    "county":"Auglaize County",
    "number":5399.89,
    "rate":117.7318711,
    "population":45866
  },
  {
    "state":"OH",
    "FIPS":39013,
    "county":"Belmont County",
    "number":14441.56,
    "rate":207.4221533,
    "population":69624
  },
  {
    "state":"OH",
    "FIPS":39015,
    "county":"Brown County",
    "number":1005.35,
    "rate":22.64097829,
    "population":44404
  },
  {
    "state":"OH",
    "FIPS":39017,
    "county":"Butler County",
    "number":108114.45,
    "rate":291.5448463,
    "population":370833
  },
  {
    "state":"OH",
    "FIPS":39019,
    "county":"Carroll County",
    "number":1243.56,
    "rate":43.54201681,
    "population":28560
  },
  {
    "state":"OH",
    "FIPS":39021,
    "county":"Champaign County",
    "number":1965.77,
    "rate":49.6582125,
    "population":39586
  },
  {
    "state":"OH",
    "FIPS":39023,
    "county":"Clark County",
    "number":12326.46,
    "rate":89.84693208,
    "population":137194
  },
  {
    "state":"OH",
    "FIPS":39025,
    "county":"Clermont County",
    "number":24150.73,
    "rate":121.2270416,
    "population":199219
  },
  {
    "state":"OH",
    "FIPS":39027,
    "county":"Clinton County",
    "number":26457.97,
    "rate":632.496713,
    "population":41831
  },
  {
    "state":"OH",
    "FIPS":39029,
    "county":"Columbiana County",
    "number":22602.27,
    "rate":212.3515098,
    "population":106438
  },
  {
    "state":"OH",
    "FIPS":39031,
    "county":"Coshocton County",
    "number":1523.9,
    "rate":41.4035755,
    "population":36806
  },
  {
    "state":"OH",
    "FIPS":39033,
    "county":"Crawford County",
    "number":3926.44,
    "rate":91.63862114,
    "population":42847
  },
  {
    "state":"OH",
    "FIPS":39035,
    "county":"Cuyahoga County",
    "number":1040000,
    "rate":823.9433631,
    "population":1270000
  },
  {
    "state":"OH",
    "FIPS":39037,
    "county":"Darke County",
    "number":3179.81,
    "rate":60.56088828,
    "population":52506
  },
  {
    "state":"OH",
    "FIPS":39039,
    "county":"Defiance County",
    "number":25159.02,
    "rate":648.1276727,
    "population":38818
  },
  {
    "state":"OH",
    "FIPS":39043,
    "county":"Erie County",
    "number":7647.02,
    "rate":100.0368907,
    "population":76442
  },
  {
    "state":"OH",
    "FIPS":39045,
    "county":"Fairfield County",
    "number":16246.89,
    "rate":110.1887471,
    "population":147446
  },
  {
    "state":"OH",
    "FIPS":39047,
    "county":"Fayette County",
    "number":1017.12,
    "rate":35.25545927,
    "population":28850
  },
  {
    "state":"OH",
    "FIPS":39049,
    "county":"Franklin County",
    "number":1460000,
    "rate":1216.211878,
    "population":1200000
  },
  {
    "state":"OH",
    "FIPS":39051,
    "county":"Fulton County",
    "number":2229.21,
    "rate":52.4322608,
    "population":42516
  },
  {
    "state":"OH",
    "FIPS":39053,
    "county":"Gallia County",
    "number":44009.27,
    "rate":1428.64048,
    "population":30805
  },
  {
    "state":"OH",
    "FIPS":39055,
    "county":"Geauga County",
    "number":6989.14,
    "rate":74.41826293,
    "population":93917
  },
  {
    "state":"OH",
    "FIPS":39057,
    "county":"Greene County",
    "number":15293.79,
    "rate":93.172439,
    "population":164145
  },
  {
    "state":"OH",
    "FIPS":39059,
    "county":"Guernsey County",
    "number":1275.82,
    "rate":32.04531183,
    "population":39813
  },
  {
    "state":"OH",
    "FIPS":39061,
    "county":"Hamilton County",
    "number":340664.74,
    "rate":424.5810645,
    "population":802355
  },
  {
    "state":"OH",
    "FIPS":39063,
    "county":"Hancock County",
    "number":5638.41,
    "rate":74.53580446,
    "population":75647
  },
  {
    "state":"OH",
    "FIPS":39065,
    "county":"Hardin County",
    "number":3354.39,
    "rate":106.0073318,
    "population":31643
  },
  {
    "state":"OH",
    "FIPS":39067,
    "county":"Harrison County",
    "number":653.75,
    "rate":41.6560469,
    "population":15694
  },
  {
    "state":"OH",
    "FIPS":39069,
    "county":"Henry County",
    "number":1069.84,
    "rate":38.12687099,
    "population":28060
  },
  {
    "state":"OH",
    "FIPS":39071,
    "county":"Highland County",
    "number":385.93,
    "rate":8.970109706,
    "population":43024
  },
  {
    "state":"OH",
    "FIPS":39073,
    "county":"Hocking County",
    "number":2454.88,
    "rate":83.81004404,
    "population":29291
  },
  {
    "state":"OH",
    "FIPS":39075,
    "county":"Holmes County",
    "number":129.28,
    "rate":2.999188029,
    "population":43105
  },
  {
    "state":"OH",
    "FIPS":39077,
    "county":"Huron County",
    "number":7502.01,
    "rate":126.5201113,
    "population":59295
  },
  {
    "state":"OH",
    "FIPS":39079,
    "county":"Jackson County",
    "number":2286.24,
    "rate":69.54765309,
    "population":32873
  },
  {
    "state":"OH",
    "FIPS":39081,
    "county":"Jefferson County",
    "number":15018.76,
    "rate":219.7427832,
    "population":68347
  },
  {
    "state":"OH",
    "FIPS":39083,
    "county":"Knox County",
    "number":2984.43,
    "rate":49.07229886,
    "population":60817
  },
  {
    "state":"OH",
    "FIPS":39085,
    "county":"Lake County",
    "number":238972.95,
    "rate":1041.889347,
    "population":229365
  },
  {
    "state":"OH",
    "FIPS":39087,
    "county":"Lawrence County",
    "number":6972.01,
    "rate":112.2562311,
    "population":62108
  },
  {
    "state":"OH",
    "FIPS":39089,
    "county":"Licking County",
    "number":29472.01,
    "rate":175.7225478,
    "population":167719
  },
  {
    "state":"OH",
    "FIPS":39091,
    "county":"Logan County",
    "number":1761.9,
    "rate":38.76226515,
    "population":45454
  },
  {
    "state":"OH",
    "FIPS":39093,
    "county":"Lorain County",
    "number":59640.17,
    "rate":197.683654,
    "population":301695
  },
  {
    "state":"OH",
    "FIPS":39095,
    "county":"Lucas County",
    "number":218709.04,
    "rate":500.0481051,
    "population":437376
  },
  {
    "state":"OH",
    "FIPS":39097,
    "county":"Madison County",
    "number":3047.35,
    "rate":70.93624153,
    "population":42959
  },
  {
    "state":"OH",
    "FIPS":39099,
    "county":"Mahoning County",
    "number":93293.23,
    "rate":395.6674032,
    "population":235787
  },
  {
    "state":"OH",
    "FIPS":39101,
    "county":"Marion County",
    "number":10621.66,
    "rate":160.3632521,
    "population":66235
  },
  {
    "state":"OH",
    "FIPS":39103,
    "county":"Medina County",
    "number":15298.48,
    "rate":88.07212269,
    "population":173704
  },
  {
    "state":"OH",
    "FIPS":39105,
    "county":"Meigs County",
    "number":1224.47,
    "rate":51.88432203,
    "population":23600
  },
  {
    "state":"OH",
    "FIPS":39107,
    "county":"Mercer County",
    "number":3530.86,
    "rate":86.48345458,
    "population":40827
  },
  {
    "state":"OH",
    "FIPS":39109,
    "county":"Miami County",
    "number":3999.15,
    "rate":38.78226886,
    "population":103118
  },
  {
    "state":"OH",
    "FIPS":39111,
    "county":"Monroe County",
    "number":1762.31,
    "rate":120.8800329,
    "population":14579
  },
  {
    "state":"OH",
    "FIPS":39113,
    "county":"Montgomery County",
    "number":340135,
    "rate":635.8008191,
    "population":534971
  },
  {
    "state":"OH",
    "FIPS":39115,
    "county":"Morgan County",
    "number":1060.75,
    "rate":70.97691536,
    "population":14945
  },
  {
    "state":"OH",
    "FIPS":39117,
    "county":"Morrow County",
    "number":441.58,
    "rate":12.6154901,
    "population":35003
  },
  {
    "state":"OH",
    "FIPS":39119,
    "county":"Muskingum County",
    "number":26344.73,
    "rate":306.9122067,
    "population":85838
  },
  {
    "state":"OH",
    "FIPS":39121,
    "county":"Noble County",
    "number":159.19,
    "rate":10.92062839,
    "population":14577
  },
  {
    "state":"OH",
    "FIPS":39123,
    "county":"Ottawa County",
    "number":3832.83,
    "rate":92.66773047,
    "population":41361
  },
  {
    "state":"OH",
    "FIPS":39125,
    "county":"Paulding County",
    "number":206.3,
    "rate":10.69632395,
    "population":19287
  },
  {
    "state":"OH",
    "FIPS":39127,
    "county":"Perry County",
    "number":4859.85,
    "rate":135.0070839,
    "population":35997
  },
  {
    "state":"OH",
    "FIPS":39129,
    "county":"Pickaway County",
    "number":2030.15,
    "rate":36.03006425,
    "population":56346
  },
  {
    "state":"OH",
    "FIPS":39131,
    "county":"Pike County",
    "number":1186.29,
    "rate":41.62275008,
    "population":28501
  },
  {
    "state":"OH",
    "FIPS":39133,
    "county":"Portage County",
    "number":10906.74,
    "rate":67.60264293,
    "population":161336
  },
  {
    "state":"OH",
    "FIPS":39135,
    "county":"Preble County",
    "number":2113.59,
    "rate":50.44969567,
    "population":41895
  },
  {
    "state":"OH",
    "FIPS":39137,
    "county":"Putnam County",
    "number":4693.59,
    "rate":137.3157602,
    "population":34181
  },
  {
    "state":"OH",
    "FIPS":39139,
    "county":"Richland County",
    "number":10619.64,
    "rate":86.62870754,
    "population":122588
  },
  {
    "state":"OH",
    "FIPS":39141,
    "county":"Ross County",
    "number":5557.83,
    "rate":71.72781829,
    "population":77485
  },
  {
    "state":"OH",
    "FIPS":39143,
    "county":"Sandusky County",
    "number":5401.15,
    "rate":89.18675694,
    "population":60560
  },
  {
    "state":"OH",
    "FIPS":39145,
    "county":"Scioto County",
    "number":11646.03,
    "rate":148.221122,
    "population":78572
  },
  {
    "state":"OH",
    "FIPS":39147,
    "county":"Seneca County",
    "number":3905.44,
    "rate":69.70887996,
    "population":56025
  },
  {
    "state":"OH",
    "FIPS":39149,
    "county":"Shelby County",
    "number":4414.55,
    "rate":89.83252615,
    "population":49142
  },
  {
    "state":"OH",
    "FIPS":39151,
    "county":"Stark County",
    "number":52426.77,
    "rate":139.862903,
    "population":374844
  },
  {
    "state":"OH",
    "FIPS":39153,
    "county":"Summit County",
    "number":245804.47,
    "rate":454.4637961,
    "population":540867
  },
  {
    "state":"OH",
    "FIPS":39155,
    "county":"Trumbull County",
    "number":25280.91,
    "rate":121.8715381,
    "population":207439
  },
  {
    "state":"OH",
    "FIPS":39157,
    "county":"Tuscarawas County",
    "number":6634.86,
    "rate":71.73752271,
    "population":92488
  },
  {
    "state":"OH",
    "FIPS":39159,
    "county":"Union County",
    "number":2790.92,
    "rate":52.84332103,
    "population":52815
  },
  {
    "state":"OH",
    "FIPS":39161,
    "county":"Van Wert County",
    "number":2523.02,
    "rate":87.82136517,
    "population":28729
  },
  {
    "state":"OH",
    "FIPS":39163,
    "county":"Vinton County",
    "number":366.31,
    "rate":27.68155369,
    "population":13233
  },
  {
    "state":"OH",
    "FIPS":39165,
    "county":"Warren County",
    "number":92575.34,
    "rate":425.3345463,
    "population":217653
  },
  {
    "state":"OH",
    "FIPS":39167,
    "county":"Washington County",
    "number":154221.12,
    "rate":2507.33433,
    "population":61508
  },
  {
    "state":"OH",
    "FIPS":39169,
    "county":"Wayne County",
    "number":13235.81,
    "rate":115.104009,
    "population":114990
  },
  {
    "state":"OH",
    "FIPS":39171,
    "county":"Williams County",
    "number":5681.37,
    "rate":151.2289715,
    "population":37568
  },
  {
    "state":"OH",
    "FIPS":39173,
    "county":"Wood County",
    "number":12554.48,
    "rate":97.57949308,
    "population":128659
  },
  {
    "state":"OH",
    "FIPS":39175,
    "county":"Wyandot County",
    "number":702.19,
    "rate":31.08135623,
    "population":22592
  },
  {
    "state":"OK",
    "FIPS":40001,
    "county":"Adair County",
    "number":98.93,
    "rate":4.446691837,
    "population":22248
  },
  {
    "state":"OK",
    "FIPS":40009,
    "county":"Beckham County",
    "number":735.27,
    "rate":31.80646278,
    "population":23117
  },
  {
    "state":"OK",
    "FIPS":40013,
    "county":"Bryan County",
    "number":3306.4,
    "rate":76.07565229,
    "population":43462
  },
  {
    "state":"OK",
    "FIPS":40015,
    "county":"Caddo County",
    "number":314.96,
    "rate":10.61472095,
    "population":29672
  },
  {
    "state":"OK",
    "FIPS":40017,
    "county":"Canadian County",
    "number":15940.29,
    "rate":130.0133763,
    "population":122605
  },
  {
    "state":"OK",
    "FIPS":40019,
    "county":"Carter County",
    "number":2942.23,
    "rate":61.15122418,
    "population":48114
  },
  {
    "state":"OK",
    "FIPS":40021,
    "county":"Cherokee County",
    "number":1363.12,
    "rate":28.34813351,
    "population":48085
  },
  {
    "state":"OK",
    "FIPS":40023,
    "county":"Choctaw County",
    "number":82.3,
    "rate":5.425181279,
    "population":15170
  },
  {
    "state":"OK",
    "FIPS":40027,
    "county":"Cleveland County",
    "number":102826.25,
    "rate":386.3876342,
    "population":266122
  },
  {
    "state":"OK",
    "FIPS":40029,
    "county":"Coal County",
    "number":101.67,
    "rate":17.17979047,
    "population":5918
  },
  {
    "state":"OK",
    "FIPS":40031,
    "county":"Comanche County",
    "number":20273.26,
    "rate":160.1224222,
    "population":126611
  },
  {
    "state":"OK",
    "FIPS":40035,
    "county":"Craig County",
    "number":1760.93,
    "rate":119.6202704,
    "population":14721
  },
  {
    "state":"OK",
    "FIPS":40037,
    "county":"Creek County",
    "number":4580.89,
    "rate":64.65252491,
    "population":70854
  },
  {
    "state":"OK",
    "FIPS":40039,
    "county":"Custer County",
    "number":814.1,
    "rate":28.54688267,
    "population":28518
  },
  {
    "state":"OK",
    "FIPS":40041,
    "county":"Delaware County",
    "number":1905.49,
    "rate":46.05636526,
    "population":41373
  },
  {
    "state":"OK",
    "FIPS":40045,
    "county":"Ellis County",
    "number":80.36,
    "rate":19.7202454,
    "population":4075
  },
  {
    "state":"OK",
    "FIPS":40047,
    "county":"Garfield County",
    "number":5360.26,
    "rate":87.41739783,
    "population":61318
  },
  {
    "state":"OK",
    "FIPS":40049,
    "county":"Garvin County",
    "number":962.8,
    "rate":35.30619729,
    "population":27270
  },
  {
    "state":"OK",
    "FIPS":40051,
    "county":"Grady County",
    "number":1681.87,
    "rate":31.701097,
    "population":53054
  },
  {
    "state":"OK",
    "FIPS":40057,
    "county":"Harmon County",
    "number":66.5,
    "rate":22.93103448,
    "population":2900
  },
  {
    "state":"OK",
    "FIPS":40061,
    "county":"Haskell County",
    "number":267.91,
    "rate":20.82148131,
    "population":12867
  },
  {
    "state":"OK",
    "FIPS":40063,
    "county":"Hughes County",
    "number":23.07,
    "rate":1.673558215,
    "population":13785
  },
  {
    "state":"OK",
    "FIPS":40065,
    "county":"Jackson County",
    "number":426.64,
    "rate":16.24614447,
    "population":26261
  },
  {
    "state":"OK",
    "FIPS":40067,
    "county":"Jefferson County",
    "number":40.07,
    "rate":6.325177585,
    "population":6335
  },
  {
    "state":"OK",
    "FIPS":40069,
    "county":"Johnston County",
    "number":71.93,
    "rate":6.536119945,
    "population":11005
  },
  {
    "state":"OK",
    "FIPS":40071,
    "county":"Kay County",
    "number":1571.86,
    "rate":34.42757956,
    "population":45657
  },
  {
    "state":"OK",
    "FIPS":40073,
    "county":"Kingfisher County",
    "number":1378.3,
    "rate":91.91117631,
    "population":14996
  },
  {
    "state":"OK",
    "FIPS":40075,
    "county":"Kiowa County",
    "number":85.6,
    "rate":9.16193942,
    "population":9343
  },
  {
    "state":"OK",
    "FIPS":40077,
    "county":"Latimer County",
    "number":188.84,
    "rate":17.25984828,
    "population":10941
  },
  {
    "state":"OK",
    "FIPS":40079,
    "county":"Le Flore County",
    "number":1170.86,
    "rate":23.44768199,
    "population":49935
  },
  {
    "state":"OK",
    "FIPS":40081,
    "county":"Lincoln County",
    "number":138.54,
    "rate":4.049101271,
    "population":34215
  },
  {
    "state":"OK",
    "FIPS":40083,
    "county":"Logan County",
    "number":1670.25,
    "rate":38.2488321,
    "population":43668
  },
  {
    "state":"OK",
    "FIPS":40085,
    "county":"Love County",
    "number":126.8,
    "rate":13.25943742,
    "population":9563
  },
  {
    "state":"OK",
    "FIPS":40087,
    "county":"McClain County",
    "number":506.81,
    "rate":14.24143648,
    "population":35587
  },
  {
    "state":"OK",
    "FIPS":40089,
    "county":"McCurtain County",
    "number":396.96,
    "rate":11.94619158,
    "population":33229
  },
  {
    "state":"OK",
    "FIPS":40091,
    "county":"McIntosh County",
    "number":642.55,
    "rate":31.31030114,
    "population":20522
  },
  {
    "state":"OK",
    "FIPS":40093,
    "county":"Major County",
    "number":20.86,
    "rate":2.723593158,
    "population":7659
  },
  {
    "state":"OK",
    "FIPS":40095,
    "county":"Marshall County",
    "number":12.05,
    "rate":0.757242506,
    "population":15913
  },
  {
    "state":"OK",
    "FIPS":40097,
    "county":"Mayes County",
    "number":1112.68,
    "rate":27.06526234,
    "population":41111
  },
  {
    "state":"OK",
    "FIPS":40099,
    "county":"Murray County",
    "number":271.74,
    "rate":19.92228739,
    "population":13640
  },
  {
    "state":"OK",
    "FIPS":40101,
    "county":"Muskogee County",
    "number":12402.62,
    "rate":175.8538453,
    "population":70528
  },
  {
    "state":"OK",
    "FIPS":40103,
    "county":"Noble County",
    "number":21.42,
    "rate":1.861799218,
    "population":11505
  },
  {
    "state":"OK",
    "FIPS":40105,
    "county":"Nowata County",
    "number":251.24,
    "rate":23.74220374,
    "population":10582
  },
  {
    "state":"OK",
    "FIPS":40107,
    "county":"Okfuskee County",
    "number":200.58,
    "rate":16.30334065,
    "population":12303
  },
  {
    "state":"OK",
    "FIPS":40109,
    "county":"Oklahoma County",
    "number":374381.25,
    "rate":504.1255125,
    "population":742635
  },
  {
    "state":"OK",
    "FIPS":40111,
    "county":"Okmulgee County",
    "number":884.08,
    "rate":22.33258393,
    "population":39587
  },
  {
    "state":"OK",
    "FIPS":40113,
    "county":"Osage County",
    "number":1175.52,
    "rate":24.48489898,
    "population":48010
  },
  {
    "state":"OK",
    "FIPS":40115,
    "county":"Ottawa County",
    "number":541.04,
    "rate":16.77539377,
    "population":32252
  },
  {
    "state":"OK",
    "FIPS":40117,
    "county":"Pawnee County",
    "number":528.54,
    "rate":32.06576473,
    "population":16483
  },
  {
    "state":"OK",
    "FIPS":40119,
    "county":"Payne County",
    "number":8161.44,
    "rate":103.9952089,
    "population":78479
  },
  {
    "state":"OK",
    "FIPS":40121,
    "county":"Pittsburg County",
    "number":1565.05,
    "rate":34.67793756,
    "population":45131
  },
  {
    "state":"OK",
    "FIPS":40123,
    "county":"Pontotoc County",
    "number":175782.42,
    "rate":4625.122875,
    "population":38006
  },
  {
    "state":"OK",
    "FIPS":40125,
    "county":"Pottawatomie County",
    "number":2911.5,
    "rate":41.17929932,
    "population":70703
  },
  {
    "state":"OK",
    "FIPS":40127,
    "county":"Pushmataha County",
    "number":17.47,
    "rate":1.555239028,
    "population":11233
  },
  {
    "state":"OK",
    "FIPS":40129,
    "county":"Roger Mills County",
    "number":11.24,
    "rate":2.97827239,
    "population":3774
  },
  {
    "state":"OK",
    "FIPS":40131,
    "county":"Rogers County",
    "number":5571.93,
    "rate":62.99881282,
    "population":88445
  },
  {
    "state":"OK",
    "FIPS":40133,
    "county":"Seminole County",
    "number":2152.93,
    "rate":84.5313911,
    "population":25469
  },
  {
    "state":"OK",
    "FIPS":40135,
    "county":"Sequoyah County",
    "number":643.86,
    "rate":15.52742005,
    "population":41466
  },
  {
    "state":"OK",
    "FIPS":40137,
    "county":"Stephens County",
    "number":1639.54,
    "rate":36.56667484,
    "population":44837
  },
  {
    "state":"OK",
    "FIPS":40139,
    "county":"Texas County",
    "number":216.26,
    "rate":10.04318952,
    "population":21533
  },
  {
    "state":"OK",
    "FIPS":40141,
    "county":"Tillman County",
    "number":371.81,
    "rate":47.76593011,
    "population":7784
  },
  {
    "state":"OK",
    "FIPS":40143,
    "county":"Tulsa County",
    "number":461974.73,
    "rate":751.8385737,
    "population":614460
  },
  {
    "state":"OK",
    "FIPS":40145,
    "county":"Wagoner County",
    "number":818.65,
    "rate":10.91576996,
    "population":74997
  },
  {
    "state":"OK",
    "FIPS":40147,
    "county":"Washington County",
    "number":2820.14,
    "rate":54.53761361,
    "population":51710
  },
  {
    "state":"OK",
    "FIPS":40149,
    "county":"Washita County",
    "number":11.83,
    "rate":1.01649768,
    "population":11638
  },
  {
    "state":"OK",
    "FIPS":40153,
    "county":"Woodward County",
    "number":745.09,
    "rate":36.08708287,
    "population":20647
  },
  {
    "state":"OR",
    "FIPS":41003,
    "county":"Benton County",
    "number":6784.11,
    "rate":78.53797175,
    "population":86380
  },
  {
    "state":"OR",
    "FIPS":41005,
    "county":"Clackamas County",
    "number":11407.58,
    "rate":29.74286906,
    "population":383540
  },
  {
    "state":"OR",
    "FIPS":41007,
    "county":"Clatsop County",
    "number":2475.52,
    "rate":66.29140669,
    "population":37343
  },
  {
    "state":"OR",
    "FIPS":41009,
    "county":"Columbia County",
    "number":188.27,
    "rate":3.826003902,
    "population":49208
  },
  {
    "state":"OR",
    "FIPS":41011,
    "county":"Coos County",
    "number":3071.03,
    "rate":48.98755782,
    "population":62690
  },
  {
    "state":"OR",
    "FIPS":41013,
    "county":"Crook County",
    "number":280.3,
    "rate":13.58305873,
    "population":20636
  },
  {
    "state":"OR",
    "FIPS":41015,
    "county":"Curry County",
    "number":780.73,
    "rate":35.09056587,
    "population":22249
  },
  {
    "state":"OR",
    "FIPS":41017,
    "county":"Deschutes County",
    "number":149418.76,
    "rate":923.7864306,
    "population":161746
  },
  {
    "state":"OR",
    "FIPS":41019,
    "county":"Douglas County",
    "number":4705.91,
    "rate":43.94678844,
    "population":107082
  },
  {
    "state":"OR",
    "FIPS":41023,
    "county":"Grant County",
    "number":19.97,
    "rate":2.729260626,
    "population":7317
  },
  {
    "state":"OR",
    "FIPS":41025,
    "county":"Harney County",
    "number":86.11,
    "rate":11.91339236,
    "population":7228
  },
  {
    "state":"OR",
    "FIPS":41027,
    "county":"Hood River County",
    "number":521.55,
    "rate":23.0488775,
    "population":22628
  },
  {
    "state":"OR",
    "FIPS":41029,
    "county":"Jackson County",
    "number":54646.37,
    "rate":264.8070148,
    "population":206363
  },
  {
    "state":"OR",
    "FIPS":41031,
    "county":"Jefferson County",
    "number":26.89,
    "rate":1.235810469,
    "population":21759
  },
  {
    "state":"OR",
    "FIPS":41033,
    "county":"Josephine County",
    "number":808.66,
    "rate":9.768548718,
    "population":82782
  },
  {
    "state":"OR",
    "FIPS":41035,
    "county":"Klamath County",
    "number":2622.45,
    "rate":39.70882166,
    "population":66042
  },
  {
    "state":"OR",
    "FIPS":41037,
    "county":"Lake County",
    "number":14.01,
    "rate":1.798459564,
    "population":7790
  },
  {
    "state":"OR",
    "FIPS":41039,
    "county":"Lane County",
    "number":11720.92,
    "rate":33.06501618,
    "population":354481
  },
  {
    "state":"OR",
    "FIPS":41041,
    "county":"Lincoln County",
    "number":209699.63,
    "rate":4543.67373,
    "population":46152
  },
  {
    "state":"OR",
    "FIPS":41043,
    "county":"Linn County",
    "number":1713.5,
    "rate":14.47701926,
    "population":118360
  },
  {
    "state":"OR",
    "FIPS":41045,
    "county":"Malheur County",
    "number":1875.59,
    "rate":61.28177482,
    "population":30606
  },
  {
    "state":"OR",
    "FIPS":41047,
    "county":"Marion County",
    "number":13316.74,
    "rate":41.6037615,
    "population":320085
  },
  {
    "state":"OR",
    "FIPS":41049,
    "county":"Morrow County",
    "number":46.77,
    "rate":4.161032028,
    "population":11240
  },
  {
    "state":"OR",
    "FIPS":41051,
    "county":"Multnomah County",
    "number":632662.44,
    "rate":833.7483741,
    "population":758817
  },
  {
    "state":"OR",
    "FIPS":41053,
    "county":"Polk County",
    "number":1041.91,
    "rate":13.66367666,
    "population":76254
  },
  {
    "state":"OR",
    "FIPS":41057,
    "county":"Tillamook County",
    "number":43.46,
    "rate":1.716023059,
    "population":25326
  },
  {
    "state":"OR",
    "FIPS":41059,
    "county":"Umatilla County",
    "number":3669.71,
    "rate":47.70813833,
    "population":76920
  },
  {
    "state":"OR",
    "FIPS":41061,
    "county":"Union County",
    "number":35.78,
    "rate":1.38585483,
    "population":25818
  },
  {
    "state":"OR",
    "FIPS":41065,
    "county":"Wasco County",
    "number":175.6,
    "rate":6.897906273,
    "population":25457
  },
  {
    "state":"OR",
    "FIPS":41067,
    "county":"Washington County",
    "number":82742.91,
    "rate":151.063211,
    "population":547737
  },
  {
    "state":"OR",
    "FIPS":41071,
    "county":"Yamhill County",
    "number":5955.84,
    "rate":59.10271804,
    "population":100771
  },
  {
    "state":"PA",
    "FIPS":42001,
    "county":"Adams County",
    "number":29188.13,
    "rate":287.4601627,
    "population":101538
  },
  {
    "state":"PA",
    "FIPS":42003,
    "county":"Allegheny County",
    "number":970783.38,
    "rate":789.0090972,
    "population":1230000
  },
  {
    "state":"PA",
    "FIPS":42005,
    "county":"Armstrong County",
    "number":5772.42,
    "rate":84.43901583,
    "population":68362
  },
  {
    "state":"PA",
    "FIPS":42007,
    "county":"Beaver County",
    "number":30059.45,
    "rate":176.587614,
    "population":170224
  },
  {
    "state":"PA",
    "FIPS":42009,
    "county":"Bedford County",
    "number":14807.64,
    "rate":299.7558655,
    "population":49399
  },
  {
    "state":"PA",
    "FIPS":42011,
    "county":"Berks County",
    "number":72841.11,
    "rate":176.263176,
    "population":413252
  },
  {
    "state":"PA",
    "FIPS":42013,
    "county":"Blair County",
    "number":14391.3,
    "rate":113.3182151,
    "population":126999
  },
  {
    "state":"PA",
    "FIPS":42015,
    "county":"Bradford County",
    "number":84577.97,
    "rate":1346.504227,
    "population":62813
  },
  {
    "state":"PA",
    "FIPS":42017,
    "county":"Bucks County",
    "number":102553.98,
    "rate":163.7748028,
    "population":626189
  },
  {
    "state":"PA",
    "FIPS":42019,
    "county":"Butler County",
    "number":27007.34,
    "rate":145.9154245,
    "population":185089
  },
  {
    "state":"PA",
    "FIPS":42021,
    "county":"Cambria County",
    "number":24904.1,
    "rate":175.9621567,
    "population":141531
  },
  {
    "state":"PA",
    "FIPS":42023,
    "county":"Cameron County",
    "number":156.02,
    "rate":31.57021449,
    "population":4942
  },
  {
    "state":"PA",
    "FIPS":42025,
    "county":"Carbon County",
    "number":4834.35,
    "rate":74.45823771,
    "population":64927
  },
  {
    "state":"PA",
    "FIPS":42027,
    "county":"Centre County",
    "number":3924.61,
    "rate":25.22534741,
    "population":155582
  },
  {
    "state":"PA",
    "FIPS":42029,
    "county":"Chester County",
    "number":201953,
    "rate":398.8667179,
    "population":506317
  },
  {
    "state":"PA",
    "FIPS":42031,
    "county":"Clarion County",
    "number":5915.53,
    "rate":149.9500634,
    "population":39450
  },
  {
    "state":"PA",
    "FIPS":42033,
    "county":"Clearfield County",
    "number":18335.25,
    "rate":224.9641118,
    "population":81503
  },
  {
    "state":"PA",
    "FIPS":42035,
    "county":"Clinton County",
    "number":1658.03,
    "rate":41.732444,
    "population":39730
  },
  {
    "state":"PA",
    "FIPS":42037,
    "county":"Columbia County",
    "number":2532.14,
    "rate":37.83605284,
    "population":66924
  },
  {
    "state":"PA",
    "FIPS":42039,
    "county":"Crawford County",
    "number":92068.58,
    "rate":1050.291809,
    "population":87660
  },
  {
    "state":"PA",
    "FIPS":42041,
    "county":"Cumberland County",
    "number":141251.17,
    "rate":590.5198622,
    "population":239198
  },
  {
    "state":"PA",
    "FIPS":42043,
    "county":"Dauphin County",
    "number":44090.35,
    "rate":163.3841257,
    "population":269857
  },
  {
    "state":"PA",
    "FIPS":42045,
    "county":"Delaware County",
    "number":439291.32,
    "rate":783.167747,
    "population":560916
  },
  {
    "state":"PA",
    "FIPS":42047,
    "county":"Elk County",
    "number":4232.74,
    "rate":133.8500459,
    "population":31623
  },
  {
    "state":"PA",
    "FIPS":42049,
    "county":"Erie County",
    "number":130976.33,
    "rate":466.4382605,
    "population":280801
  },
  {
    "state":"PA",
    "FIPS":42051,
    "county":"Fayette County",
    "number":23123.18,
    "rate":170.6772267,
    "population":135479
  },
  {
    "state":"PA",
    "FIPS":42053,
    "county":"Forest County",
    "number":22.78,
    "rate":2.970013038,
    "population":7670
  },
  {
    "state":"PA",
    "FIPS":42055,
    "county":"Franklin County",
    "number":12229.11,
    "rate":80.67280607,
    "population":151589
  },
  {
    "state":"PA",
    "FIPS":42057,
    "county":"Fulton County",
    "number":1697.49,
    "rate":114.974939,
    "population":14764
  },
  {
    "state":"PA",
    "FIPS":42059,
    "county":"Greene County",
    "number":2710.04,
    "rate":71.15954206,
    "population":38084
  },
  {
    "state":"PA",
    "FIPS":42061,
    "county":"Huntingdon County",
    "number":1558.6,
    "rate":33.86935547,
    "population":46018
  },
  {
    "state":"PA",
    "FIPS":42063,
    "county":"Indiana County",
    "number":32220.91,
    "rate":365.2791665,
    "population":88209
  },
  {
    "state":"PA",
    "FIPS":42065,
    "county":"Jefferson County",
    "number":13905.03,
    "rate":309.8821091,
    "population":44872
  },
  {
    "state":"PA",
    "FIPS":42067,
    "county":"Juniata County",
    "number":1839.69,
    "rate":73.83865141,
    "population":24915
  },
  {
    "state":"PA",
    "FIPS":42069,
    "county":"Lackawanna County",
    "number":81472.38,
    "rate":379.8069088,
    "population":214510
  },
  {
    "state":"PA",
    "FIPS":42071,
    "county":"Lancaster County",
    "number":72151.97,
    "rate":136.9715775,
    "population":526766
  },
  {
    "state":"PA",
    "FIPS":42073,
    "county":"Lawrence County",
    "number":15014.78,
    "rate":167.2080359,
    "population":89797
  },
  {
    "state":"PA",
    "FIPS":42075,
    "county":"Lebanon County",
    "number":6593.7,
    "rate":48.63256184,
    "population":135582
  },
  {
    "state":"PA",
    "FIPS":42077,
    "county":"Lehigh County",
    "number":197931.74,
    "rate":557.1320323,
    "population":355269
  },
  {
    "state":"PA",
    "FIPS":42079,
    "county":"Luzerne County",
    "number":225220.12,
    "rate":701.0175674,
    "population":321276
  },
  {
    "state":"PA",
    "FIPS":42081,
    "county":"Lycoming County",
    "number":16411.1,
    "rate":139.911847,
    "population":117296
  },
  {
    "state":"PA",
    "FIPS":42083,
    "county":"McKean County",
    "number":2376.87,
    "rate":54.97687006,
    "population":43234
  },
  {
    "state":"PA",
    "FIPS":42085,
    "county":"Mercer County",
    "number":17703.35,
    "rate":152.9486725,
    "population":115747
  },
  {
    "state":"PA",
    "FIPS":42087,
    "county":"Mifflin County",
    "number":2481.97,
    "rate":53.00070469,
    "population":46829
  },
  {
    "state":"PA",
    "FIPS":42089,
    "county":"Monroe County",
    "number":33594.21,
    "rate":199.4135874,
    "population":168465
  },
  {
    "state":"PA",
    "FIPS":42091,
    "county":"Montgomery County",
    "number":417820.12,
    "rate":516.0706901,
    "population":809618
  },
  {
    "state":"PA",
    "FIPS":42093,
    "county":"Montour County",
    "number":51532.66,
    "rate":2786.904981,
    "population":18491
  },
  {
    "state":"PA",
    "FIPS":42095,
    "county":"Northampton County",
    "number":77816,
    "rate":259.938603,
    "population":299363
  },
  {
    "state":"PA",
    "FIPS":42097,
    "county":"Northumberland County",
    "number":6793.87,
    "rate":71.85022632,
    "population":94556
  },
  {
    "state":"PA",
    "FIPS":42099,
    "county":"Perry County",
    "number":6711.28,
    "rate":146.624137,
    "population":45772
  },
  {
    "state":"PA",
    "FIPS":42101,
    "county":"Philadelphia County",
    "number":1370000,
    "rate":881.7620982,
    "population":1550000
  },
  {
    "state":"PA",
    "FIPS":42103,
    "county":"Pike County",
    "number":5527.45,
    "rate":97.37940876,
    "population":56762
  },
  {
    "state":"PA",
    "FIPS":42105,
    "county":"Potter County",
    "number":563.14,
    "rate":31.95120567,
    "population":17625
  },
  {
    "state":"PA",
    "FIPS":42107,
    "county":"Schuylkill County",
    "number":24657.66,
    "rate":167.4111944,
    "population":147288
  },
  {
    "state":"PA",
    "FIPS":42109,
    "county":"Snyder County",
    "number":5758.9,
    "rate":144.7105237,
    "population":39796
  },
  {
    "state":"PA",
    "FIPS":42111,
    "county":"Somerset County",
    "number":11745.33,
    "rate":152.3191545,
    "population":77110
  },
  {
    "state":"PA",
    "FIPS":42113,
    "county":"Sullivan County",
    "number":254.41,
    "rate":39.42507361,
    "population":6453
  },
  {
    "state":"PA",
    "FIPS":42115,
    "county":"Susquehanna County",
    "number":2747.96,
    "rate":64.24520141,
    "population":42773
  },
  {
    "state":"PA",
    "FIPS":42117,
    "county":"Tioga County",
    "number":15220.37,
    "rate":357.1934477,
    "population":42611
  },
  {
    "state":"PA",
    "FIPS":42119,
    "county":"Union County",
    "number":6629.25,
    "rate":146.8630231,
    "population":45139
  },
  {
    "state":"PA",
    "FIPS":42121,
    "county":"Venango County",
    "number":2587.62,
    "rate":47.71125657,
    "population":54235
  },
  {
    "state":"PA",
    "FIPS":42123,
    "county":"Warren County",
    "number":1654.54,
    "rate":40.14704455,
    "population":41212
  },
  {
    "state":"PA",
    "FIPS":42125,
    "county":"Washington County",
    "number":35845.28,
    "rate":171.9767213,
    "population":208431
  },
  {
    "state":"PA",
    "FIPS":42127,
    "county":"Wayne County",
    "number":2671.05,
    "rate":51.67940408,
    "population":51685
  },
  {
    "state":"PA",
    "FIPS":42129,
    "county":"Westmoreland County",
    "number":157225.12,
    "rate":433.0077665,
    "population":363100
  },
  {
    "state":"PA",
    "FIPS":42131,
    "county":"Wyoming County",
    "number":3078.95,
    "rate":108.6126005,
    "population":28348
  },
  {
    "state":"PA",
    "FIPS":42133,
    "county":"York County",
    "number":54646.01,
    "rate":124.8483775,
    "population":437699
  },
  {
    "state":"RI",
    "FIPS":44001,
    "county":"Bristol County",
    "number":6286.61,
    "rate":127.6780129,
    "population":49238
  },
  {
    "state":"RI",
    "FIPS":44003,
    "county":"Kent County",
    "number":19593.3,
    "rate":118.8192844,
    "population":164900
  },
  {
    "state":"RI",
    "FIPS":44005,
    "county":"Newport County",
    "number":35090.11,
    "rate":423.3640992,
    "population":82884
  },
  {
    "state":"RI",
    "FIPS":44007,
    "county":"Providence County",
    "number":137944.45,
    "rate":219.1793196,
    "population":629368
  },
  {
    "state":"RI",
    "FIPS":44009,
    "county":"Washington County",
    "number":6281.68,
    "rate":49.75706353,
    "population":126247
  },
  {
    "state":"SC",
    "FIPS":45001,
    "county":"Abbeville County",
    "number":2703.61,
    "rate":107.8639537,
    "population":25065
  },
  {
    "state":"SC",
    "FIPS":45003,
    "county":"Aiken County",
    "number":63917.17,
    "rate":391.1077185,
    "population":163426
  },
  {
    "state":"SC",
    "FIPS":45005,
    "county":"Allendale County",
    "number":492.91,
    "rate":49.27129148,
    "population":10004
  },
  {
    "state":"SC",
    "FIPS":45007,
    "county":"Anderson County",
    "number":19667.32,
    "rate":103.8593193,
    "population":189365
  },
  {
    "state":"SC",
    "FIPS":45009,
    "county":"Bamberg County",
    "number":1649.2,
    "rate":104.4458518,
    "population":15790
  },
  {
    "state":"SC",
    "FIPS":45011,
    "county":"Barnwell County",
    "number":393.95,
    "rate":17.67067372,
    "population":22294
  },
  {
    "state":"SC",
    "FIPS":45013,
    "county":"Beaufort County",
    "number":19432.47,
    "rate":115.8197542,
    "population":167782
  },
  {
    "state":"SC",
    "FIPS":45015,
    "county":"Berkeley County",
    "number":10956.4,
    "rate":57.81955006,
    "population":189493
  },
  {
    "state":"SC",
    "FIPS":45017,
    "county":"Calhoun County",
    "number":425.73,
    "rate":28.53035786,
    "population":14922
  },
  {
    "state":"SC",
    "FIPS":45019,
    "county":"Charleston County",
    "number":362260.93,
    "rate":991.2139097,
    "population":365472
  },
  {
    "state":"SC",
    "FIPS":45021,
    "county":"Cherokee County",
    "number":4000.87,
    "rate":71.86632178,
    "population":55671
  },
  {
    "state":"SC",
    "FIPS":45023,
    "county":"Chester County",
    "number":1725.19,
    "rate":52.84699035,
    "population":32645
  },
  {
    "state":"SC",
    "FIPS":45025,
    "county":"Chesterfield County",
    "number":1955.83,
    "rate":42.42581345,
    "population":46100
  },
  {
    "state":"SC",
    "FIPS":45027,
    "county":"Clarendon County",
    "number":1895.81,
    "rate":55.32142753,
    "population":34269
  },
  {
    "state":"SC",
    "FIPS":45029,
    "county":"Colleton County",
    "number":177364.53,
    "rate":4639.40701,
    "population":38230
  },
  {
    "state":"SC",
    "FIPS":45031,
    "county":"Darlington County",
    "number":6690.25,
    "rate":98.14787648,
    "population":68165
  },
  {
    "state":"SC",
    "FIPS":45033,
    "county":"Dillon County",
    "number":3259.26,
    "rate":103.6429548,
    "population":31447
  },
  {
    "state":"SC",
    "FIPS":45035,
    "county":"Dorchester County",
    "number":57253.4,
    "rate":401.8628483,
    "population":142470
  },
  {
    "state":"SC",
    "FIPS":45037,
    "county":"Edgefield County",
    "number":357.14,
    "rate":13.56502583,
    "population":26328
  },
  {
    "state":"SC",
    "FIPS":45039,
    "county":"Fairfield County",
    "number":2619.02,
    "rate":112.0628129,
    "population":23371
  },
  {
    "state":"SC",
    "FIPS":45041,
    "county":"Florence County",
    "number":191096.06,
    "rate":1384.152253,
    "population":138060
  },
  {
    "state":"SC",
    "FIPS":45043,
    "county":"Georgetown County",
    "number":2835.23,
    "rate":47.0312189,
    "population":60284
  },
  {
    "state":"SC",
    "FIPS":45045,
    "county":"Greenville County",
    "number":101500.3,
    "rate":217.4580832,
    "population":466758
  },
  {
    "state":"SC",
    "FIPS":45047,
    "county":"Greenwood County",
    "number":8471.54,
    "rate":121.3114144,
    "population":69833
  },
  {
    "state":"SC",
    "FIPS":45049,
    "county":"Hampton County",
    "number":943.19,
    "rate":45.52294995,
    "population":20719
  },
  {
    "state":"SC",
    "FIPS":45051,
    "county":"Horry County",
    "number":158719,
    "rate":562.8532927,
    "population":281990
  },
  {
    "state":"SC",
    "FIPS":45053,
    "county":"Jasper County",
    "number":536.77,
    "rate":20.66646133,
    "population":25973
  },
  {
    "state":"SC",
    "FIPS":45055,
    "county":"Kershaw County",
    "number":5594.22,
    "rate":89.8929811,
    "population":62232
  },
  {
    "state":"SC",
    "FIPS":45057,
    "county":"Lancaster County",
    "number":5106.21,
    "rate":64.4780473,
    "population":79193
  },
  {
    "state":"SC",
    "FIPS":45059,
    "county":"Laurens County",
    "number":4428.14,
    "rate":66.8317788,
    "population":66258
  },
  {
    "state":"SC",
    "FIPS":45061,
    "county":"Lee County",
    "number":273.55,
    "rate":14.65263271,
    "population":18669
  },
  {
    "state":"SC",
    "FIPS":45063,
    "county":"Lexington County",
    "number":25698.24,
    "rate":95.13849708,
    "population":270114
  },
  {
    "state":"SC",
    "FIPS":45065,
    "county":"McCormick County",
    "number":314.48,
    "rate":31.60920696,
    "population":9949
  },
  {
    "state":"SC",
    "FIPS":45067,
    "county":"Marion County",
    "number":4443.91,
    "rate":137.195826,
    "population":32391
  },
  {
    "state":"SC",
    "FIPS":45069,
    "county":"Marlboro County",
    "number":1162.06,
    "rate":41.27073197,
    "population":28157
  },
  {
    "state":"SC",
    "FIPS":45071,
    "county":"Newberry County",
    "number":7468.68,
    "rate":198.8307643,
    "population":37563
  },
  {
    "state":"SC",
    "FIPS":45073,
    "county":"Oconee County",
    "number":3938.3,
    "rate":52.80425834,
    "population":74583
  },
  {
    "state":"SC",
    "FIPS":45075,
    "county":"Orangeburg County",
    "number":92219.66,
    "rate":1008.647803,
    "population":91429
  },
  {
    "state":"SC",
    "FIPS":45077,
    "county":"Pickens County",
    "number":13191.01,
    "rate":110.2411078,
    "population":119656
  },
  {
    "state":"SC",
    "FIPS":45079,
    "county":"Richland County",
    "number":68118.88,
    "rate":173.0324098,
    "population":393677
  },
  {
    "state":"SC",
    "FIPS":45081,
    "county":"Saluda County",
    "number":1043.77,
    "rate":52.28522767,
    "population":19963
  },
  {
    "state":"SC",
    "FIPS":45083,
    "county":"Spartanburg County",
    "number":43713.88,
    "rate":151.5627503,
    "population":288421
  },
  {
    "state":"SC",
    "FIPS":45085,
    "county":"Sumter County",
    "number":20286,
    "rate":187.7290394,
    "population":108060
  },
  {
    "state":"SC",
    "FIPS":45087,
    "county":"Union County",
    "number":2536.8,
    "rate":89.88732195,
    "population":28222
  },
  {
    "state":"SC",
    "FIPS":45089,
    "county":"Williamsburg County",
    "number":983.32,
    "rate":29.27244582,
    "population":33592
  },
  {
    "state":"SC",
    "FIPS":45091,
    "county":"York County",
    "number":10922.55,
    "rate":46.56493268,
    "population":234566
  },
  {
    "state":"SD",
    "FIPS":46005,
    "county":"Beadle County",
    "number":634.66,
    "rate":35.25888889,
    "population":18000
  },
  {
    "state":"SD",
    "FIPS":46011,
    "county":"Brookings County",
    "number":133.33,
    "rate":4.079116441,
    "population":32686
  },
  {
    "state":"SD",
    "FIPS":46013,
    "county":"Brown County",
    "number":1070.48,
    "rate":28.53548009,
    "population":37514
  },
  {
    "state":"SD",
    "FIPS":46015,
    "county":"Brule County",
    "number":379.04,
    "rate":71.46304676,
    "population":5304
  },
  {
    "state":"SD",
    "FIPS":46019,
    "county":"Butte County",
    "number":826.44,
    "rate":80.72279742,
    "population":10238
  },
  {
    "state":"SD",
    "FIPS":46023,
    "county":"Charles Mix County",
    "number":169.78,
    "rate":18.43431053,
    "population":9210
  },
  {
    "state":"SD",
    "FIPS":46027,
    "county":"Clay County",
    "number":255.19,
    "rate":18.11014122,
    "population":14091
  },
  {
    "state":"SD",
    "FIPS":46029,
    "county":"Codington County",
    "number":2067.85,
    "rate":74.97371379,
    "population":27581
  },
  {
    "state":"SD",
    "FIPS":46033,
    "county":"Custer County",
    "number":2824.82,
    "rate":339.7257968,
    "population":8315
  },
  {
    "state":"SD",
    "FIPS":46035,
    "county":"Davison County",
    "number":2608.49,
    "rate":131.7552278,
    "population":19798
  },
  {
    "state":"SD",
    "FIPS":46039,
    "county":"Deuel County",
    "number":15.04,
    "rate":3.443223443,
    "population":4368
  },
  {
    "state":"SD",
    "FIPS":46041,
    "county":"Dewey County",
    "number":155.63,
    "rate":28.07178932,
    "population":5544
  },
  {
    "state":"SD",
    "FIPS":46043,
    "county":"Douglas County",
    "number":11.41,
    "rate":3.839165545,
    "population":2972
  },
  {
    "state":"SD",
    "FIPS":46047,
    "county":"Fall River County",
    "number":475.59,
    "rate":67.95113588,
    "population":6999
  },
  {
    "state":"SD",
    "FIPS":46051,
    "county":"Grant County",
    "number":884.1,
    "rate":121.6428178,
    "population":7268
  },
  {
    "state":"SD",
    "FIPS":46053,
    "county":"Gregory County",
    "number":262.22,
    "rate":61.72787194,
    "population":4248
  },
  {
    "state":"SD",
    "FIPS":46055,
    "county":"Haakon County",
    "number":125.98,
    "rate":65.99266632,
    "population":1909
  },
  {
    "state":"SD",
    "FIPS":46057,
    "county":"Hamlin County",
    "number":15.52,
    "rate":2.612354822,
    "population":5941
  },
  {
    "state":"SD",
    "FIPS":46065,
    "county":"Hughes County",
    "number":3870.42,
    "rate":221.9150278,
    "population":17441
  },
  {
    "state":"SD",
    "FIPS":46077,
    "county":"Kingsbury County",
    "number":221.53,
    "rate":42.27671756,
    "population":5240
  },
  {
    "state":"SD",
    "FIPS":46079,
    "county":"Lake County",
    "number":35.73,
    "rate":3.019776876,
    "population":11832
  },
  {
    "state":"SD",
    "FIPS":46081,
    "county":"Lawrence County",
    "number":2491.23,
    "rate":102.2672414,
    "population":24360
  },
  {
    "state":"SD",
    "FIPS":46083,
    "county":"Lincoln County",
    "number":2502.97,
    "rate":51.81917933,
    "population":48302
  },
  {
    "state":"SD",
    "FIPS":46085,
    "county":"Lyman County",
    "number":23.98,
    "rate":6.322172423,
    "population":3793
  },
  {
    "state":"SD",
    "FIPS":46087,
    "county":"McCook County",
    "number":13.91,
    "rate":2.482598608,
    "population":5603
  },
  {
    "state":"SD",
    "FIPS":46091,
    "county":"Marshall County",
    "number":12,
    "rate":2.577319588,
    "population":4656
  },
  {
    "state":"SD",
    "FIPS":46093,
    "county":"Meade County",
    "number":405.84,
    "rate":15.65499151,
    "population":25924
  },
  {
    "state":"SD",
    "FIPS":46097,
    "county":"Miner County",
    "number":13.78,
    "rate":5.931984503,
    "population":2323
  },
  {
    "state":"SD",
    "FIPS":46099,
    "county":"Minnehaha County",
    "number":210886.59,
    "rate":1201.55768,
    "population":175511
  },
  {
    "state":"SD",
    "FIPS":46103,
    "county":"Pennington County",
    "number":59878.73,
    "rate":572.7172125,
    "population":104552
  },
  {
    "state":"SD",
    "FIPS":46105,
    "county":"Perkins County",
    "number":16.33,
    "rate":5.407284768,
    "population":3020
  },
  {
    "state":"SD",
    "FIPS":46109,
    "county":"Roberts County",
    "number":99.09,
    "rate":9.575763433,
    "population":10348
  },
  {
    "state":"SD",
    "FIPS":46115,
    "county":"Spink County",
    "number":11,
    "rate":1.653638004,
    "population":6652
  },
  {
    "state":"SD",
    "FIPS":46117,
    "county":"Stanley County",
    "number":46.48,
    "rate":15.61303325,
    "population":2977
  },
  {
    "state":"SD",
    "FIPS":46121,
    "county":"Todd County",
    "number":13.48,
    "rate":1.356819326,
    "population":9935
  },
  {
    "state":"SD",
    "FIPS":46123,
    "county":"Tripp County",
    "number":155.52,
    "rate":28.35369189,
    "population":5485
  },
  {
    "state":"SD",
    "FIPS":46125,
    "county":"Turner County",
    "number":238.5,
    "rate":28.62457993,
    "population":8332
  },
  {
    "state":"SD",
    "FIPS":46127,
    "county":"Union County",
    "number":463.27,
    "rate":31.21555151,
    "population":14841
  },
  {
    "state":"SD",
    "FIPS":46129,
    "county":"Walworth County",
    "number":218.13,
    "rate":39.95054945,
    "population":5460
  },
  {
    "state":"SD",
    "FIPS":46135,
    "county":"Yankton County",
    "number":282.26,
    "rate":12.49435616,
    "population":22591
  },
  {
    "state":"TN",
    "FIPS":47001,
    "county":"Anderson County",
    "number":28882.97,
    "rate":383.3225391,
    "population":75349
  },
  {
    "state":"TN",
    "FIPS":47003,
    "county":"Bedford County",
    "number":1993.85,
    "rate":43.91740088,
    "population":45400
  },
  {
    "state":"TN",
    "FIPS":47005,
    "county":"Benton County",
    "number":109.73,
    "rate":6.703524956,
    "population":16369
  },
  {
    "state":"TN",
    "FIPS":47007,
    "county":"Bledsoe County",
    "number":261.6,
    "rate":20.46788201,
    "population":12781
  },
  {
    "state":"TN",
    "FIPS":47009,
    "county":"Blount County",
    "number":30684.13,
    "rate":247.420736,
    "population":124016
  },
  {
    "state":"TN",
    "FIPS":47011,
    "county":"Bradley County",
    "number":13460.84,
    "rate":133.1214336,
    "population":101117
  },
  {
    "state":"TN",
    "FIPS":47013,
    "county":"Campbell County",
    "number":234821.88,
    "rate":5808.253481,
    "population":40429
  },
  {
    "state":"TN",
    "FIPS":47015,
    "county":"Cannon County",
    "number":318.36,
    "rate":22.99956654,
    "population":13842
  },
  {
    "state":"TN",
    "FIPS":47017,
    "county":"Carroll County",
    "number":1850.38,
    "rate":64.64661286,
    "population":28623
  },
  {
    "state":"TN",
    "FIPS":47019,
    "county":"Carter County",
    "number":41759.62,
    "rate":727.8238288,
    "population":57376
  },
  {
    "state":"TN",
    "FIPS":47021,
    "county":"Cheatham County",
    "number":2143.95,
    "rate":54.58816041,
    "population":39275
  },
  {
    "state":"TN",
    "FIPS":47023,
    "county":"Chester County",
    "number":1779.55,
    "rate":103.3120464,
    "population":17225
  },
  {
    "state":"TN",
    "FIPS":47025,
    "county":"Claiborne County",
    "number":2716.58,
    "rate":85.65329802,
    "population":31716
  },
  {
    "state":"TN",
    "FIPS":47027,
    "county":"Clay County",
    "number":192.33,
    "rate":24.65769231,
    "population":7800
  },
  {
    "state":"TN",
    "FIPS":47029,
    "county":"Cocke County",
    "number":4886.56,
    "rate":137.6961226,
    "population":35488
  },
  {
    "state":"TN",
    "FIPS":47031,
    "county":"Coffee County",
    "number":7687.8,
    "rate":144.678849,
    "population":53137
  },
  {
    "state":"TN",
    "FIPS":47033,
    "county":"Crockett County",
    "number":10.31,
    "rate":0.706067662,
    "population":14602
  },
  {
    "state":"TN",
    "FIPS":47035,
    "county":"Cumberland County",
    "number":24080.35,
    "rate":422.1882287,
    "population":57037
  },
  {
    "state":"TN",
    "FIPS":47037,
    "county":"Davidson County",
    "number":1460000,
    "rate":2247.227463,
    "population":649142
  },
  {
    "state":"TN",
    "FIPS":47039,
    "county":"Decatur County",
    "number":21.28,
    "rate":1.826923077,
    "population":11648
  },
  {
    "state":"TN",
    "FIPS":47041,
    "county":"De Kalb County",
    "number":3498.37,
    "rate":184.903277,
    "population":18920
  },
  {
    "state":"TN",
    "FIPS":47043,
    "county":"Dickson County",
    "number":7551.62,
    "rate":150.529631,
    "population":50167
  },
  {
    "state":"TN",
    "FIPS":47045,
    "county":"Dyer County",
    "number":13004.72,
    "rate":340.2328441,
    "population":38223
  },
  {
    "state":"TN",
    "FIPS":47047,
    "county":"Fayette County",
    "number":2053.63,
    "rate":53.19044782,
    "population":38609
  },
  {
    "state":"TN",
    "FIPS":47049,
    "county":"Fentress County",
    "number":1590.24,
    "rate":88.78566244,
    "population":17911
  },
  {
    "state":"TN",
    "FIPS":47051,
    "county":"Franklin County",
    "number":1414.17,
    "rate":34.67377712,
    "population":40785
  },
  {
    "state":"TN",
    "FIPS":47053,
    "county":"Gibson County",
    "number":1320.68,
    "rate":26.58908798,
    "population":49670
  },
  {
    "state":"TN",
    "FIPS":47055,
    "county":"Giles County",
    "number":2233.53,
    "rate":77.15662567,
    "population":28948
  },
  {
    "state":"TN",
    "FIPS":47057,
    "county":"Grainger County",
    "number":837.73,
    "rate":37.00220848,
    "population":22640
  },
  {
    "state":"TN",
    "FIPS":47059,
    "county":"Greene County",
    "number":5702.78,
    "rate":83.0897223,
    "population":68634
  },
  {
    "state":"TN",
    "FIPS":47063,
    "county":"Hamblen County",
    "number":54738.06,
    "rate":872.556071,
    "population":62733
  },
  {
    "state":"TN",
    "FIPS":47065,
    "county":"Hamilton County",
    "number":127484.26,
    "rate":368.8172379,
    "population":345657
  },
  {
    "state":"TN",
    "FIPS":47067,
    "county":"Hancock County",
    "number":502.3,
    "rate":75.20586914,
    "population":6679
  },
  {
    "state":"TN",
    "FIPS":47069,
    "county":"Hardeman County",
    "number":636.74,
    "rate":23.99894467,
    "population":26532
  },
  {
    "state":"TN",
    "FIPS":47071,
    "county":"Hardin County",
    "number":1223.07,
    "rate":46.99596542,
    "population":26025
  },
  {
    "state":"TN",
    "FIPS":47073,
    "county":"Hawkins County",
    "number":5669.41,
    "rate":100.1644847,
    "population":56601
  },
  {
    "state":"TN",
    "FIPS":47075,
    "county":"Haywood County",
    "number":3408.53,
    "rate":186.8404319,
    "population":18243
  },
  {
    "state":"TN",
    "FIPS":47077,
    "county":"Henderson County",
    "number":1287.02,
    "rate":45.93383061,
    "population":28019
  },
  {
    "state":"TN",
    "FIPS":47079,
    "county":"Henry County",
    "number":4417.13,
    "rate":136.6094514,
    "population":32334
  },
  {
    "state":"TN",
    "FIPS":47081,
    "county":"Hickman County",
    "number":167.46,
    "rate":6.933587281,
    "population":24152
  },
  {
    "state":"TN",
    "FIPS":47083,
    "county":"Houston County",
    "number":417.52,
    "rate":49.56903716,
    "population":8423
  },
  {
    "state":"TN",
    "FIPS":47085,
    "county":"Humphreys County",
    "number":92.72,
    "rate":5.072210066,
    "population":18280
  },
  {
    "state":"TN",
    "FIPS":47087,
    "county":"Jackson County",
    "number":944.07,
    "rate":81.88654697,
    "population":11529
  },
  {
    "state":"TN",
    "FIPS":47089,
    "county":"Jefferson County",
    "number":5423.45,
    "rate":103.6810109,
    "population":52309
  },
  {
    "state":"TN",
    "FIPS":47091,
    "county":"Johnson County",
    "number":293.62,
    "rate":16.20508858,
    "population":18119
  },
  {
    "state":"TN",
    "FIPS":47093,
    "county":"Knox County",
    "number":208143.4,
    "rate":471.8349897,
    "population":441136
  },
  {
    "state":"TN",
    "FIPS":47095,
    "county":"Lake County",
    "number":73.41,
    "rate":9.530053226,
    "population":7703
  },
  {
    "state":"TN",
    "FIPS":47097,
    "county":"Lauderdale County",
    "number":1151.69,
    "rate":41.60579459,
    "population":27681
  },
  {
    "state":"TN",
    "FIPS":47099,
    "county":"Lawrence County",
    "number":1549.11,
    "rate":36.77063306,
    "population":42129
  },
  {
    "state":"TN",
    "FIPS":47101,
    "county":"Lewis County",
    "number":146.17,
    "rate":12.28422557,
    "population":11899
  },
  {
    "state":"TN",
    "FIPS":47103,
    "county":"Lincoln County",
    "number":6120.87,
    "rate":183.0622682,
    "population":33436
  },
  {
    "state":"TN",
    "FIPS":47105,
    "county":"Loudon County",
    "number":3503.38,
    "rate":70.42960819,
    "population":49743
  },
  {
    "state":"TN",
    "FIPS":47107,
    "county":"McMinn County",
    "number":8702.39,
    "rate":165.9115,
    "population":52452
  },
  {
    "state":"TN",
    "FIPS":47109,
    "county":"McNairy County",
    "number":4300.68,
    "rate":164.3299836,
    "population":26171
  },
  {
    "state":"TN",
    "FIPS":47111,
    "county":"Macon County",
    "number":170.53,
    "rate":7.575071073,
    "population":22512
  },
  {
    "state":"TN",
    "FIPS":47113,
    "county":"Madison County",
    "number":44703.62,
    "rate":453.6089943,
    "population":98551
  },
  {
    "state":"TN",
    "FIPS":47115,
    "county":"Marion County",
    "number":1762.96,
    "rate":62.45651327,
    "population":28227
  },
  {
    "state":"TN",
    "FIPS":47117,
    "county":"Marshall County",
    "number":302.73,
    "rate":9.78631926,
    "population":30934
  },
  {
    "state":"TN",
    "FIPS":47119,
    "county":"Maury County",
    "number":15048.58,
    "rate":183.6446842,
    "population":81944
  },
  {
    "state":"TN",
    "FIPS":47121,
    "county":"Meigs County",
    "number":324.29,
    "rate":27.76930981,
    "population":11678
  },
  {
    "state":"TN",
    "FIPS":47123,
    "county":"Monroe County",
    "number":2264.72,
    "rate":50.20661523,
    "population":45108
  },
  {
    "state":"TN",
    "FIPS":47125,
    "county":"Montgomery County",
    "number":5390.03,
    "rate":29.0787117,
    "population":185360
  },
  {
    "state":"TN",
    "FIPS":47129,
    "county":"Morgan County",
    "number":12909.98,
    "rate":588.2879927,
    "population":21945
  },
  {
    "state":"TN",
    "FIPS":47131,
    "county":"Obion County",
    "number":2260.64,
    "rate":72.10742879,
    "population":31351
  },
  {
    "state":"TN",
    "FIPS":47133,
    "county":"Overton County",
    "number":1889.27,
    "rate":85.06010535,
    "population":22211
  },
  {
    "state":"TN",
    "FIPS":47137,
    "county":"Pickett County",
    "number":1755.69,
    "rate":345.0648585,
    "population":5088
  },
  {
    "state":"TN",
    "FIPS":47139,
    "county":"Polk County",
    "number":459.22,
    "rate":27.64220791,
    "population":16613
  },
  {
    "state":"TN",
    "FIPS":47141,
    "county":"Putnam County",
    "number":12031.79,
    "rate":164.6588934,
    "population":73071
  },
  {
    "state":"TN",
    "FIPS":47143,
    "county":"Rhea County",
    "number":1704.77,
    "rate":52.76782122,
    "population":32307
  },
  {
    "state":"TN",
    "FIPS":47145,
    "county":"Roane County",
    "number":2740.3,
    "rate":51.29150601,
    "population":53426
  },
  {
    "state":"TN",
    "FIPS":47147,
    "county":"Robertson County",
    "number":4900.61,
    "rate":73.45149058,
    "population":66719
  },
  {
    "state":"TN",
    "FIPS":47149,
    "county":"Rutherford County",
    "number":63810.17,
    "rate":232.7071785,
    "population":274208
  },
  {
    "state":"TN",
    "FIPS":47151,
    "county":"Scott County",
    "number":700.14,
    "rate":31.58621312,
    "population":22166
  },
  {
    "state":"TN",
    "FIPS":47153,
    "county":"Sequatchie County",
    "number":363.52,
    "rate":25.21467712,
    "population":14417
  },
  {
    "state":"TN",
    "FIPS":47155,
    "county":"Sevier County",
    "number":6814.04,
    "rate":73.6398219,
    "population":92532
  },
  {
    "state":"TN",
    "FIPS":47157,
    "county":"Shelby County",
    "number":738521.21,
    "rate":785.7093416,
    "population":939942
  },
  {
    "state":"TN",
    "FIPS":47159,
    "county":"Smith County",
    "number":1492.1,
    "rate":78.03870293,
    "population":19120
  },
  {
    "state":"TN",
    "FIPS":47161,
    "county":"Stewart County",
    "number":93.25,
    "rate":6.99235153,
    "population":13336
  },
  {
    "state":"TN",
    "FIPS":47163,
    "county":"Sullivan County",
    "number":65441.66,
    "rate":417.6958378,
    "population":156673
  },
  {
    "state":"TN",
    "FIPS":47165,
    "county":"Sumner County",
    "number":364868.26,
    "rate":2195.937914,
    "population":166156
  },
  {
    "state":"TN",
    "FIPS":47167,
    "county":"Tipton County",
    "number":3455.11,
    "rate":56.1113096,
    "population":61576
  },
  {
    "state":"TN",
    "FIPS":47169,
    "county":"Trousdale County",
    "number":318.55,
    "rate":40.88692081,
    "population":7791
  },
  {
    "state":"TN",
    "FIPS":47171,
    "county":"Unicoi County",
    "number":1290.05,
    "rate":70.68379815,
    "population":18251
  },
  {
    "state":"TN",
    "FIPS":47173,
    "county":"Union County",
    "number":513.5,
    "rate":26.83844666,
    "population":19133
  },
  {
    "state":"TN",
    "FIPS":47175,
    "county":"Van Buren County",
    "number":30.28,
    "rate":5.387900356,
    "population":5620
  },
  {
    "state":"TN",
    "FIPS":47177,
    "county":"Warren County",
    "number":2132.49,
    "rate":53.6407999,
    "population":39755
  },
  {
    "state":"TN",
    "FIPS":47179,
    "county":"Washington County",
    "number":19964.41,
    "rate":159.8469939,
    "population":124897
  },
  {
    "state":"TN",
    "FIPS":47181,
    "county":"Wayne County",
    "number":838.96,
    "rate":49.37963508,
    "population":16990
  },
  {
    "state":"TN",
    "FIPS":47183,
    "county":"Weakley County",
    "number":1595.94,
    "rate":45.97660751,
    "population":34712
  },
  {
    "state":"TN",
    "FIPS":47185,
    "county":"White County",
    "number":2719.87,
    "rate":104.3695318,
    "population":26060
  },
  {
    "state":"TN",
    "FIPS":47187,
    "county":"Williamson County",
    "number":8255.46,
    "rate":42.76620544,
    "population":193037
  },
  {
    "state":"TN",
    "FIPS":47189,
    "county":"Wilson County",
    "number":11810.28,
    "rate":99.17271262,
    "population":119088
  },
  {
    "state":"TX",
    "FIPS":48001,
    "county":"Anderson County",
    "number":6730.8,
    "rate":115.9962775,
    "population":58026
  },
  {
    "state":"TX",
    "FIPS":48003,
    "county":"Andrews County",
    "number":455.73,
    "rate":28.27284571,
    "population":16119
  },
  {
    "state":"TX",
    "FIPS":48005,
    "county":"Angelina County",
    "number":158802.72,
    "rate":1813.126905,
    "population":87585
  },
  {
    "state":"TX",
    "FIPS":48007,
    "county":"Aransas County",
    "number":571.61,
    "rate":24.11144388,
    "population":23707
  },
  {
    "state":"TX",
    "FIPS":48009,
    "county":"Archer County",
    "number":283.76,
    "rate":32.34838121,
    "population":8772
  },
  {
    "state":"TX",
    "FIPS":48011,
    "county":"Armstrong County",
    "number":10.45,
    "rate":5.364476386,
    "population":1948
  },
  {
    "state":"TX",
    "FIPS":48013,
    "county":"Atascosa County",
    "number":1494.71,
    "rate":32.18860367,
    "population":46436
  },
  {
    "state":"TX",
    "FIPS":48015,
    "county":"Austin County",
    "number":1360.99,
    "rate":47.55048564,
    "population":28622
  },
  {
    "state":"TX",
    "FIPS":48017,
    "county":"Bailey County",
    "number":470.04,
    "rate":66.19349387,
    "population":7101
  },
  {
    "state":"TX",
    "FIPS":48019,
    "county":"Bandera County",
    "number":4293.01,
    "rate":208.3176436,
    "population":20608
  },
  {
    "state":"TX",
    "FIPS":48021,
    "county":"Bastrop County",
    "number":5642.72,
    "rate":75.35079988,
    "population":74886
  },
  {
    "state":"TX",
    "FIPS":48023,
    "county":"Baylor County",
    "number":372.19,
    "rate":102.9571231,
    "population":3615
  },
  {
    "state":"TX",
    "FIPS":48025,
    "county":"Bee County",
    "number":2128,
    "rate":65.57579119,
    "population":32451
  },
  {
    "state":"TX",
    "FIPS":48027,
    "county":"Bell County",
    "number":20959.24,
    "rate":64.8597697,
    "population":323147
  },
  {
    "state":"TX",
    "FIPS":48029,
    "county":"Bexar County",
    "number":2240000,
    "rate":1252.312833,
    "population":1790000
  },
  {
    "state":"TX",
    "FIPS":48031,
    "county":"Blanco County",
    "number":159.29,
    "rate":15.00470987,
    "population":10616
  },
  {
    "state":"TX",
    "FIPS":48035,
    "county":"Bosque County",
    "number":624.5,
    "rate":34.48180664,
    "population":18111
  },
  {
    "state":"TX",
    "FIPS":48037,
    "county":"Bowie County",
    "number":57027.69,
    "rate":612.6212831,
    "population":93088
  },
  {
    "state":"TX",
    "FIPS":48039,
    "county":"Brazoria County",
    "number":41547.57,
    "rate":127.9579731,
    "population":324697
  },
  {
    "state":"TX",
    "FIPS":48041,
    "county":"Brazos County",
    "number":216467.32,
    "rate":1079.27685,
    "population":200567
  },
  {
    "state":"TX",
    "FIPS":48043,
    "county":"Brewster County",
    "number":317.69,
    "rate":34.33001945,
    "population":9254
  },
  {
    "state":"TX",
    "FIPS":48047,
    "county":"Brooks County",
    "number":32.5,
    "rate":4.534040179,
    "population":7168
  },
  {
    "state":"TX",
    "FIPS":48049,
    "county":"Brown County",
    "number":4263.49,
    "rate":112.6209156,
    "population":37857
  },
  {
    "state":"TX",
    "FIPS":48051,
    "county":"Burleson County",
    "number":1474.44,
    "rate":85.14899515,
    "population":17316
  },
  {
    "state":"TX",
    "FIPS":48053,
    "county":"Burnet County",
    "number":2182.33,
    "rate":49.51064023,
    "population":44078
  },
  {
    "state":"TX",
    "FIPS":48055,
    "county":"Caldwell County",
    "number":423.59,
    "rate":10.9423678,
    "population":38711
  },
  {
    "state":"TX",
    "FIPS":48057,
    "county":"Calhoun County",
    "number":1181.81,
    "rate":54.79714378,
    "population":21567
  },
  {
    "state":"TX",
    "FIPS":48059,
    "county":"Callahan County",
    "number":440.71,
    "rate":32.60895302,
    "population":13515
  },
  {
    "state":"TX",
    "FIPS":48061,
    "county":"Cameron County",
    "number":80008.97,
    "rate":192.3070655,
    "population":416048
  },
  {
    "state":"TX",
    "FIPS":48063,
    "county":"Camp County",
    "number":563.89,
    "rate":45.25601926,
    "population":12460
  },
  {
    "state":"TX",
    "FIPS":48065,
    "county":"Carson County",
    "number":30.75,
    "rate":5.033557047,
    "population":6109
  },
  {
    "state":"TX",
    "FIPS":48067,
    "county":"Cass County",
    "number":347.74,
    "rate":11.51952827,
    "population":30187
  },
  {
    "state":"TX",
    "FIPS":48069,
    "county":"Castro County",
    "number":156.17,
    "rate":19.09402127,
    "population":8179
  },
  {
    "state":"TX",
    "FIPS":48071,
    "county":"Chambers County",
    "number":105.38,
    "rate":2.896009674,
    "population":36388
  },
  {
    "state":"TX",
    "FIPS":48073,
    "county":"Cherokee County",
    "number":3137.28,
    "rate":61.33249922,
    "population":51152
  },
  {
    "state":"TX",
    "FIPS":48075,
    "county":"Childress County",
    "number":306.5,
    "rate":43.19334837,
    "population":7096
  },
  {
    "state":"TX",
    "FIPS":48077,
    "county":"Clay County",
    "number":1091.44,
    "rate":103.8280061,
    "population":10512
  },
  {
    "state":"TX",
    "FIPS":48083,
    "county":"Coleman County",
    "number":301.23,
    "rate":34.72391931,
    "population":8675
  },
  {
    "state":"TX",
    "FIPS":48085,
    "county":"Collin County",
    "number":635574.63,
    "rate":758.9168287,
    "population":837476
  },
  {
    "state":"TX",
    "FIPS":48089,
    "county":"Colorado County",
    "number":3560.03,
    "rate":172.1068407,
    "population":20685
  },
  {
    "state":"TX",
    "FIPS":48091,
    "county":"Comal County",
    "number":122658.3,
    "rate":1065.695022,
    "population":115097
  },
  {
    "state":"TX",
    "FIPS":48093,
    "county":"Comanche County",
    "number":1048.72,
    "rate":76.29273971,
    "population":13746
  },
  {
    "state":"TX",
    "FIPS":48097,
    "county":"Cooke County",
    "number":3312.31,
    "rate":85.51648465,
    "population":38733
  },
  {
    "state":"TX",
    "FIPS":48099,
    "county":"Coryell County",
    "number":2365.17,
    "rate":30.66233665,
    "population":77136
  },
  {
    "state":"TX",
    "FIPS":48103,
    "county":"Crane County",
    "number":44.39,
    "rate":9.719728487,
    "population":4567
  },
  {
    "state":"TX",
    "FIPS":48105,
    "county":"Crockett County",
    "number":62.15,
    "rate":16.72497309,
    "population":3716
  },
  {
    "state":"TX",
    "FIPS":48109,
    "county":"Culberson County",
    "number":101.06,
    "rate":43.88189318,
    "population":2303
  },
  {
    "state":"TX",
    "FIPS":48111,
    "county":"Dallam County",
    "number":88.88,
    "rate":12.70440252,
    "population":6996
  },
  {
    "state":"TX",
    "FIPS":48113,
    "county":"Dallas County",
    "number":2330000,
    "rate":948.0495935,
    "population":2460000
  },
  {
    "state":"TX",
    "FIPS":48115,
    "county":"Dawson County",
    "number":220.26,
    "rate":16.12091049,
    "population":13663
  },
  {
    "state":"TX",
    "FIPS":48117,
    "county":"Deaf Smith County",
    "number":332.04,
    "rate":17.15259841,
    "population":19358
  },
  {
    "state":"TX",
    "FIPS":48121,
    "county":"Denton County",
    "number":54134.01,
    "rate":76.46457013,
    "population":707962
  },
  {
    "state":"TX",
    "FIPS":48123,
    "county":"De Witt County",
    "number":1464.29,
    "rate":71.58242081,
    "population":20456
  },
  {
    "state":"TX",
    "FIPS":48127,
    "county":"Dimmit County",
    "number":296.76,
    "rate":28.23596575,
    "population":10510
  },
  {
    "state":"TX",
    "FIPS":48131,
    "county":"Duval County",
    "number":95.78,
    "rate":8.276160028,
    "population":11573
  },
  {
    "state":"TX",
    "FIPS":48133,
    "county":"Eastland County",
    "number":1075.83,
    "rate":58.4594903,
    "population":18403
  },
  {
    "state":"TX",
    "FIPS":48135,
    "county":"Ector County",
    "number":23427.84,
    "rate":162.1932375,
    "population":144444
  },
  {
    "state":"TX",
    "FIPS":48139,
    "county":"Ellis County",
    "number":8676.1,
    "rate":56.40203867,
    "population":153826
  },
  {
    "state":"TX",
    "FIPS":48141,
    "county":"El Paso County",
    "number":228162.83,
    "rate":274.516606,
    "population":831144
  },
  {
    "state":"TX",
    "FIPS":48143,
    "county":"Erath County",
    "number":2987.37,
    "rate":75.71395985,
    "population":39456
  },
  {
    "state":"TX",
    "FIPS":48145,
    "county":"Falls County",
    "number":35.75,
    "rate":2.03125,
    "population":17600
  },
  {
    "state":"TX",
    "FIPS":48147,
    "county":"Fannin County",
    "number":938.4,
    "rate":27.87299136,
    "population":33667
  },
  {
    "state":"TX",
    "FIPS":48149,
    "county":"Fayette County",
    "number":3616.6,
    "rate":146.302589,
    "population":24720
  },
  {
    "state":"TX",
    "FIPS":48151,
    "county":"Fisher County",
    "number":13.23,
    "rate":3.451604487,
    "population":3833
  },
  {
    "state":"TX",
    "FIPS":48157,
    "county":"Fort Bend County",
    "number":75171.71,
    "rate":119.9477106,
    "population":626704
  },
  {
    "state":"TX",
    "FIPS":48159,
    "county":"Franklin County",
    "number":363.46,
    "rate":34.17262129,
    "population":10636
  },
  {
    "state":"TX",
    "FIPS":48161,
    "county":"Freestone County",
    "number":641.05,
    "rate":32.90642164,
    "population":19481
  },
  {
    "state":"TX",
    "FIPS":48163,
    "county":"Frio County",
    "number":1369.61,
    "rate":76.8192271,
    "population":17829
  },
  {
    "state":"TX",
    "FIPS":48165,
    "county":"Gaines County",
    "number":12.61,
    "rate":0.683394754,
    "population":18452
  },
  {
    "state":"TX",
    "FIPS":48167,
    "county":"Galveston County",
    "number":49950.37,
    "rate":165.6899051,
    "population":301469
  },
  {
    "state":"TX",
    "FIPS":48171,
    "county":"Gillespie County",
    "number":2709.03,
    "rate":107.7149105,
    "population":25150
  },
  {
    "state":"TX",
    "FIPS":48175,
    "county":"Goliad County",
    "number":93.19,
    "rate":12.69964568,
    "population":7338
  },
  {
    "state":"TX",
    "FIPS":48177,
    "county":"Gonzales County",
    "number":887.62,
    "rate":44.4454459,
    "population":19971
  },
  {
    "state":"TX",
    "FIPS":48179,
    "county":"Gray County",
    "number":882.43,
    "rate":38.64713353,
    "population":22833
  },
  {
    "state":"TX",
    "FIPS":48181,
    "county":"Grayson County",
    "number":10175.7,
    "rate":83.66041552,
    "population":121631
  },
  {
    "state":"TX",
    "FIPS":48183,
    "county":"Gregg County",
    "number":19804.52,
    "rate":161.1486135,
    "population":122896
  },
  {
    "state":"TX",
    "FIPS":48185,
    "county":"Grimes County",
    "number":2080.09,
    "rate":77.83602754,
    "population":26724
  },
  {
    "state":"TX",
    "FIPS":48187,
    "county":"Guadalupe County",
    "number":10429.31,
    "rate":74.64756574,
    "population":139714
  },
  {
    "state":"TX",
    "FIPS":48189,
    "county":"Hale County",
    "number":2559.31,
    "rate":70.47334508,
    "population":36316
  },
  {
    "state":"TX",
    "FIPS":48193,
    "county":"Hamilton County",
    "number":104.67,
    "rate":12.62605549,
    "population":8290
  },
  {
    "state":"TX",
    "FIPS":48195,
    "county":"Hansford County",
    "number":647.42,
    "rate":117.6699382,
    "population":5502
  },
  {
    "state":"TX",
    "FIPS":48197,
    "county":"Hardeman County",
    "number":304.44,
    "rate":75.20750988,
    "population":4048
  },
  {
    "state":"TX",
    "FIPS":48199,
    "county":"Hardin County",
    "number":1747.54,
    "rate":31.68760993,
    "population":55149
  },
  {
    "state":"TX",
    "FIPS":48201,
    "county":"Harris County",
    "number":1830000,
    "rate":428.5518079,
    "population":4260000
  },
  {
    "state":"TX",
    "FIPS":48203,
    "county":"Harrison County",
    "number":5655.85,
    "rate":84.05936032,
    "population":67284
  },
  {
    "state":"TX",
    "FIPS":48209,
    "county":"Hays County",
    "number":11593.83,
    "rate":68.66145509,
    "population":168855
  },
  {
    "state":"TX",
    "FIPS":48211,
    "county":"Hemphill County",
    "number":792.78,
    "rate":194.2136208,
    "population":4082
  },
  {
    "state":"TX",
    "FIPS":48213,
    "county":"Henderson County",
    "number":5698.68,
    "rate":72.1881888,
    "population":78942
  },
  {
    "state":"TX",
    "FIPS":48215,
    "county":"Hidalgo County",
    "number":199976.42,
    "rate":247.5798322,
    "population":807725
  },
  {
    "state":"TX",
    "FIPS":48217,
    "county":"Hill County",
    "number":1037.61,
    "rate":29.55396052,
    "population":35109
  },
  {
    "state":"TX",
    "FIPS":48219,
    "county":"Hockley County",
    "number":1081.55,
    "rate":46.77579794,
    "population":23122
  },
  {
    "state":"TX",
    "FIPS":48221,
    "county":"Hood County",
    "number":5504.51,
    "rate":105.5798297,
    "population":52136
  },
  {
    "state":"TX",
    "FIPS":48223,
    "county":"Hopkins County",
    "number":1409.11,
    "rate":39.78289102,
    "population":35420
  },
  {
    "state":"TX",
    "FIPS":48225,
    "county":"Houston County",
    "number":26.85,
    "rate":1.159877317,
    "population":23149
  },
  {
    "state":"TX",
    "FIPS":48227,
    "county":"Howard County",
    "number":1490.58,
    "rate":41.9456326,
    "population":35536
  },
  {
    "state":"TX",
    "FIPS":48231,
    "county":"Hunt County",
    "number":2634.95,
    "rate":30.21350518,
    "population":87211
  },
  {
    "state":"TX",
    "FIPS":48233,
    "county":"Hutchinson County",
    "number":780.29,
    "rate":35.5517587,
    "population":21948
  },
  {
    "state":"TX",
    "FIPS":48237,
    "county":"Jack County",
    "number":24,
    "rate":2.665186008,
    "population":9005
  },
  {
    "state":"TX",
    "FIPS":48241,
    "county":"Jasper County",
    "number":49.06,
    "rate":1.368250781,
    "population":35856
  },
  {
    "state":"TX",
    "FIPS":48245,
    "county":"Jefferson County",
    "number":436546.32,
    "rate":1736.43347,
    "population":251404
  },
  {
    "state":"TX",
    "FIPS":48249,
    "county":"Jim Wells County",
    "number":5525.38,
    "rate":132.6812986,
    "population":41644
  },
  {
    "state":"TX",
    "FIPS":48251,
    "county":"Johnson County",
    "number":8862.81,
    "rate":57.72689377,
    "population":153530
  },
  {
    "state":"TX",
    "FIPS":48253,
    "county":"Jones County",
    "number":340.97,
    "rate":17.12556504,
    "population":19910
  },
  {
    "state":"TX",
    "FIPS":48255,
    "county":"Karnes County",
    "number":175.68,
    "rate":11.79377014,
    "population":14896
  },
  {
    "state":"TX",
    "FIPS":48257,
    "county":"Kaufman County",
    "number":4184.07,
    "rate":39.22075366,
    "population":106680
  },
  {
    "state":"TX",
    "FIPS":48259,
    "county":"Kendall County",
    "number":2494.69,
    "rate":69.7639755,
    "population":35759
  },
  {
    "state":"TX",
    "FIPS":48265,
    "county":"Kerr County",
    "number":2352.28,
    "rate":47.2364352,
    "population":49798
  },
  {
    "state":"TX",
    "FIPS":48267,
    "county":"Kimble County",
    "number":81.8,
    "rate":18.04146449,
    "population":4534
  },
  {
    "state":"TX",
    "FIPS":48273,
    "county":"Kleberg County",
    "number":145346.99,
    "rate":4516.687073,
    "population":32180
  },
  {
    "state":"TX",
    "FIPS":48275,
    "county":"Knox County",
    "number":42.6,
    "rate":11.30573248,
    "population":3768
  },
  {
    "state":"TX",
    "FIPS":48277,
    "county":"Lamar County",
    "number":3457.13,
    "rate":69.34230584,
    "population":49856
  },
  {
    "state":"TX",
    "FIPS":48279,
    "county":"Lamb County",
    "number":812.36,
    "rate":58.31311464,
    "population":13931
  },
  {
    "state":"TX",
    "FIPS":48281,
    "county":"Lampasas County",
    "number":522.64,
    "rate":26.0265923,
    "population":20081
  },
  {
    "state":"TX",
    "FIPS":48283,
    "county":"La Salle County",
    "number":120.63,
    "rate":16.92815044,
    "population":7126
  },
  {
    "state":"TX",
    "FIPS":48285,
    "county":"Lavaca County",
    "number":827.59,
    "rate":42.538679,
    "population":19455
  },
  {
    "state":"TX",
    "FIPS":48287,
    "county":"Lee County",
    "number":2234.57,
    "rate":135.0356539,
    "population":16548
  },
  {
    "state":"TX",
    "FIPS":48289,
    "county":"Leon County",
    "number":46.9,
    "rate":2.797828551,
    "population":16763
  },
  {
    "state":"TX",
    "FIPS":48291,
    "county":"Liberty County",
    "number":22078.6,
    "rate":288.5676569,
    "population":76511
  },
  {
    "state":"TX",
    "FIPS":48293,
    "county":"Limestone County",
    "number":2271.28,
    "rate":95.98039216,
    "population":23664
  },
  {
    "state":"TX",
    "FIPS":48297,
    "county":"Live Oak County",
    "number":61.29,
    "rate":5.252828248,
    "population":11668
  },
  {
    "state":"TX",
    "FIPS":48299,
    "county":"Llano County",
    "number":390.25,
    "rate":20.40949741,
    "population":19121
  },
  {
    "state":"TX",
    "FIPS":48303,
    "county":"Lubbock County",
    "number":106209.21,
    "rate":371.2362634,
    "population":286096
  },
  {
    "state":"TX",
    "FIPS":48305,
    "county":"Lynn County",
    "number":108.5,
    "rate":18.78137442,
    "population":5777
  },
  {
    "state":"TX",
    "FIPS":48309,
    "county":"McLennan County",
    "number":40721.17,
    "rate":170.0179532,
    "population":239511
  },
  {
    "state":"TX",
    "FIPS":48317,
    "county":"Martin County",
    "number":507.49,
    "rate":101.457417,
    "population":5002
  },
  {
    "state":"TX",
    "FIPS":48321,
    "county":"Matagorda County",
    "number":2798.85,
    "rate":76.54241645,
    "population":36566
  },
  {
    "state":"TX",
    "FIPS":48323,
    "county":"Maverick County",
    "number":2560.42,
    "rate":45.91363913,
    "population":55766
  },
  {
    "state":"TX",
    "FIPS":48325,
    "county":"Medina County",
    "number":3025.99,
    "rate":64.56547251,
    "population":46867
  },
  {
    "state":"TX",
    "FIPS":48329,
    "county":"Midland County",
    "number":60788.8,
    "rate":413.2762254,
    "population":147090
  },
  {
    "state":"TX",
    "FIPS":48331,
    "county":"Milam County",
    "number":710.81,
    "rate":29.44166011,
    "population":24143
  },
  {
    "state":"TX",
    "FIPS":48333,
    "county":"Mills County",
    "number":11.52,
    "rate":2.384599462,
    "population":4831
  },
  {
    "state":"TX",
    "FIPS":48335,
    "county":"Mitchell County",
    "number":176.39,
    "rate":18.94222509,
    "population":9312
  },
  {
    "state":"TX",
    "FIPS":48337,
    "county":"Montague County",
    "number":659.67,
    "rate":33.77899534,
    "population":19529
  },
  {
    "state":"TX",
    "FIPS":48339,
    "county":"Montgomery County",
    "number":110033.89,
    "rate":226.8183477,
    "population":485119
  },
  {
    "state":"TX",
    "FIPS":48341,
    "county":"Moore County",
    "number":624.6,
    "rate":27.88517345,
    "population":22399
  },
  {
    "state":"TX",
    "FIPS":48347,
    "county":"Nacogdoches County",
    "number":8876.43,
    "rate":134.816148,
    "population":65841
  },
  {
    "state":"TX",
    "FIPS":48349,
    "county":"Navarro County",
    "number":1498.32,
    "rate":31.13004093,
    "population":48131
  },
  {
    "state":"TX",
    "FIPS":48353,
    "county":"Nolan County",
    "number":695.4,
    "rate":46.74329502,
    "population":14877
  },
  {
    "state":"TX",
    "FIPS":48355,
    "county":"Nueces County",
    "number":217204.78,
    "rate":624.2718569,
    "population":347933
  },
  {
    "state":"TX",
    "FIPS":48357,
    "county":"Ochiltree County",
    "number":49.15,
    "rate":4.627624517,
    "population":10621
  },
  {
    "state":"TX",
    "FIPS":48361,
    "county":"Orange County",
    "number":5808.22,
    "rate":70.01989126,
    "population":82951
  },
  {
    "state":"TX",
    "FIPS":48363,
    "county":"Palo Pinto County",
    "number":315.5,
    "rate":11.31513826,
    "population":27883
  },
  {
    "state":"TX",
    "FIPS":48365,
    "county":"Panola County",
    "number":522.97,
    "rate":21.79223269,
    "population":23998
  },
  {
    "state":"TX",
    "FIPS":48367,
    "county":"Parker County",
    "number":12473.96,
    "rate":104.1605919,
    "population":119757
  },
  {
    "state":"TX",
    "FIPS":48371,
    "county":"Pecos County",
    "number":330.07,
    "rate":21.17054711,
    "population":15591
  },
  {
    "state":"TX",
    "FIPS":48373,
    "county":"Polk County",
    "number":2969.59,
    "rate":64.9161657,
    "population":45745
  },
  {
    "state":"TX",
    "FIPS":48375,
    "county":"Potter County",
    "number":155832.73,
    "rate":1269.471708,
    "population":122754
  },
  {
    "state":"TX",
    "FIPS":48377,
    "county":"Presidio County",
    "number":30.45,
    "rate":4.038461538,
    "population":7540
  },
  {
    "state":"TX",
    "FIPS":48381,
    "county":"Randall County",
    "number":3660.65,
    "rate":29.30935091,
    "population":124897
  },
  {
    "state":"TX",
    "FIPS":48387,
    "county":"Red River County",
    "number":317.08,
    "rate":24.9433606,
    "population":12712
  },
  {
    "state":"TX",
    "FIPS":48389,
    "county":"Reeves County",
    "number":409.2,
    "rate":29.4558019,
    "population":13892
  },
  {
    "state":"TX",
    "FIPS":48391,
    "county":"Refugio County",
    "number":11.56,
    "rate":1.597126278,
    "population":7238
  },
  {
    "state":"TX",
    "FIPS":48395,
    "county":"Robertson County",
    "number":682.12,
    "rate":41.36567617,
    "population":16490
  },
  {
    "state":"TX",
    "FIPS":48397,
    "county":"Rockwall County",
    "number":8705.28,
    "rate":104.8930017,
    "population":82992
  },
  {
    "state":"TX",
    "FIPS":48399,
    "county":"Runnels County",
    "number":426.35,
    "rate":40.90865477,
    "population":10422
  },
  {
    "state":"TX",
    "FIPS":48401,
    "county":"Rusk County",
    "number":1246.3,
    "rate":22.35796423,
    "population":55743
  },
  {
    "state":"TX",
    "FIPS":48403,
    "county":"Sabine County",
    "number":29.03,
    "rate":2.772948706,
    "population":10469
  },
  {
    "state":"TX",
    "FIPS":48405,
    "county":"San Augustine County",
    "number":171.96,
    "rate":19.4612947,
    "population":8836
  },
  {
    "state":"TX",
    "FIPS":48407,
    "county":"San Jacinto County",
    "number":120.38,
    "rate":4.458518519,
    "population":27000
  },
  {
    "state":"TX",
    "FIPS":48409,
    "county":"San Patricio County",
    "number":4979.92,
    "rate":76.17818026,
    "population":65372
  },
  {
    "state":"TX",
    "FIPS":48411,
    "county":"San Saba County",
    "number":22,
    "rate":3.674014696,
    "population":5988
  },
  {
    "state":"TX",
    "FIPS":48415,
    "county":"Scurry County",
    "number":118.68,
    "rate":6.937916521,
    "population":17106
  },
  {
    "state":"TX",
    "FIPS":48419,
    "county":"Shelby County",
    "number":286.23,
    "rate":11.01392951,
    "population":25988
  },
  {
    "state":"TX",
    "FIPS":48423,
    "county":"Smith County",
    "number":43968.79,
    "rate":204.5621357,
    "population":214941
  },
  {
    "state":"TX",
    "FIPS":48425,
    "county":"Somervell County",
    "number":760.16,
    "rate":88.45240866,
    "population":8594
  },
  {
    "state":"TX",
    "FIPS":48427,
    "county":"Starr County",
    "number":1334.13,
    "rate":21.5352456,
    "population":61951
  },
  {
    "state":"TX",
    "FIPS":48429,
    "county":"Stephens County",
    "number":107.82,
    "rate":11.26645768,
    "population":9570
  },
  {
    "state":"TX",
    "FIPS":48437,
    "county":"Swisher County",
    "number":28.76,
    "rate":3.648820096,
    "population":7882
  },
  {
    "state":"TX",
    "FIPS":48439,
    "county":"Tarrant County",
    "number":623444.61,
    "rate":331.1224375,
    "population":1880000
  },
  {
    "state":"TX",
    "FIPS":48441,
    "county":"Taylor County",
    "number":38832.79,
    "rate":289.5721977,
    "population":134104
  },
  {
    "state":"TX",
    "FIPS":48445,
    "county":"Terry County",
    "number":1465.53,
    "rate":116.2196669,
    "population":12610
  },
  {
    "state":"TX",
    "FIPS":48449,
    "county":"Titus County",
    "number":1636.93,
    "rate":50.0697397,
    "population":32693
  },
  {
    "state":"TX",
    "FIPS":48451,
    "county":"Tom Green County",
    "number":12634.27,
    "rate":111.2945622,
    "population":113521
  },
  {
    "state":"TX",
    "FIPS":48453,
    "county":"Travis County",
    "number":322528.79,
    "rate":293.9819652,
    "population":1100000
  },
  {
    "state":"TX",
    "FIPS":48455,
    "county":"Trinity County",
    "number":22.06,
    "rate":1.542657343,
    "population":14300
  },
  {
    "state":"TX",
    "FIPS":48457,
    "county":"Tyler County",
    "number":289.97,
    "rate":13.51715458,
    "population":21452
  },
  {
    "state":"TX",
    "FIPS":48459,
    "county":"Upshur County",
    "number":304.39,
    "rate":7.618892671,
    "population":39952
  },
  {
    "state":"TX",
    "FIPS":48463,
    "county":"Uvalde County",
    "number":1038.39,
    "rate":38.80381166,
    "population":26760
  },
  {
    "state":"TX",
    "FIPS":48465,
    "county":"Val Verde County",
    "number":1407.9,
    "rate":28.76023941,
    "population":48953
  },
  {
    "state":"TX",
    "FIPS":48467,
    "county":"Van Zandt County",
    "number":1143.15,
    "rate":21.83459077,
    "population":52355
  },
  {
    "state":"TX",
    "FIPS":48469,
    "county":"Victoria County",
    "number":22890.51,
    "rate":256.4016085,
    "population":89276
  },
  {
    "state":"TX",
    "FIPS":48471,
    "county":"Walker County",
    "number":5353.34,
    "rate":77.9733745,
    "population":68656
  },
  {
    "state":"TX",
    "FIPS":48473,
    "county":"Waller County",
    "number":370.07,
    "rate":8.34374225,
    "population":44353
  },
  {
    "state":"TX",
    "FIPS":48475,
    "county":"Ward County",
    "number":122.15,
    "rate":11.23115116,
    "population":10876
  },
  {
    "state":"TX",
    "FIPS":48477,
    "county":"Washington County",
    "number":1113.46,
    "rate":32.87840312,
    "population":33866
  },
  {
    "state":"TX",
    "FIPS":48479,
    "county":"Webb County",
    "number":19315.05,
    "rate":74.29265422,
    "population":259986
  },
  {
    "state":"TX",
    "FIPS":48481,
    "county":"Wharton County",
    "number":1658.09,
    "rate":40.29674095,
    "population":41147
  },
  {
    "state":"TX",
    "FIPS":48483,
    "county":"Wheeler County",
    "number":19.13,
    "rate":3.41180667,
    "population":5607
  },
  {
    "state":"TX",
    "FIPS":48485,
    "county":"Wichita County",
    "number":27095.28,
    "rate":205.7317277,
    "population":131702
  },
  {
    "state":"TX",
    "FIPS":48487,
    "county":"Wilbarger County",
    "number":145.38,
    "rate":10.96214749,
    "population":13262
  },
  {
    "state":"TX",
    "FIPS":48489,
    "county":"Willacy County",
    "number":1226.85,
    "rate":55.49599674,
    "population":22107
  },
  {
    "state":"TX",
    "FIPS":48491,
    "county":"Williamson County",
    "number":96623.29,
    "rate":211.6179836,
    "population":456593
  },
  {
    "state":"TX",
    "FIPS":48493,
    "county":"Wilson County",
    "number":1058.23,
    "rate":23.81684372,
    "population":44432
  },
  {
    "state":"TX",
    "FIPS":48495,
    "county":"Winkler County",
    "number":18.73,
    "rate":2.550381264,
    "population":7344
  },
  {
    "state":"TX",
    "FIPS":48497,
    "county":"Wise County",
    "number":3680.41,
    "rate":60.94705814,
    "population":60387
  },
  {
    "state":"TX",
    "FIPS":48499,
    "county":"Wood County",
    "number":143.22,
    "rate":3.367901235,
    "population":42525
  },
  {
    "state":"TX",
    "FIPS":48503,
    "county":"Young County",
    "number":1279.82,
    "rate":69.97375615,
    "population":18290
  },
  {
    "state":"TX",
    "FIPS":48505,
    "county":"Zapata County",
    "number":144.47,
    "rate":10.15106802,
    "population":14232
  },
  {
    "state":"UT",
    "FIPS":49001,
    "county":"Beaver County",
    "number":123.46,
    "rate":19.03484428,
    "population":6486
  },
  {
    "state":"UT",
    "FIPS":49003,
    "county":"Box Elder County",
    "number":3201.95,
    "rate":63.69631383,
    "population":50269
  },
  {
    "state":"UT",
    "FIPS":49005,
    "county":"Cache County",
    "number":1524.81,
    "rate":13.14967488,
    "population":115958
  },
  {
    "state":"UT",
    "FIPS":49007,
    "county":"Carbon County",
    "number":1051.96,
    "rate":49.49468335,
    "population":21254
  },
  {
    "state":"UT",
    "FIPS":49011,
    "county":"Davis County",
    "number":26360.58,
    "rate":83.41480549,
    "population":316018
  },
  {
    "state":"UT",
    "FIPS":49013,
    "county":"Duchesne County",
    "number":379.81,
    "rate":19.92602697,
    "population":19061
  },
  {
    "state":"UT",
    "FIPS":49015,
    "county":"Emery County",
    "number":302.08,
    "rate":27.71121915,
    "population":10901
  },
  {
    "state":"UT",
    "FIPS":49019,
    "county":"Grand County",
    "number":265,
    "rate":28.36955358,
    "population":9341
  },
  {
    "state":"UT",
    "FIPS":49021,
    "county":"Iron County",
    "number":567.81,
    "rate":12.15086668,
    "population":46730
  },
  {
    "state":"UT",
    "FIPS":49023,
    "county":"Juab County",
    "number":648.96,
    "rate":62.83501162,
    "population":10328
  },
  {
    "state":"UT",
    "FIPS":49025,
    "county":"Kane County",
    "number":49.21,
    "rate":6.818622696,
    "population":7217
  },
  {
    "state":"UT",
    "FIPS":49027,
    "county":"Millard County",
    "number":71.53,
    "rate":5.702782428,
    "population":12543
  },
  {
    "state":"UT",
    "FIPS":49029,
    "county":"Morgan County",
    "number":169.82,
    "rate":17.32503571,
    "population":9802
  },
  {
    "state":"UT",
    "FIPS":49035,
    "county":"Salt Lake County",
    "number":689029.91,
    "rate":647.3399242,
    "population":1060000
  },
  {
    "state":"UT",
    "FIPS":49037,
    "county":"San Juan County",
    "number":11.47,
    "rate":0.769850326,
    "population":14899
  },
  {
    "state":"UT",
    "FIPS":49039,
    "county":"Sanpete County",
    "number":328.64,
    "rate":11.72499911,
    "population":28029
  },
  {
    "state":"UT",
    "FIPS":49041,
    "county":"Sevier County",
    "number":642.27,
    "rate":30.97516277,
    "population":20735
  },
  {
    "state":"UT",
    "FIPS":49043,
    "county":"Summit County",
    "number":362.35,
    "rate":9.562452168,
    "population":37893
  },
  {
    "state":"UT",
    "FIPS":49045,
    "county":"Tooele County",
    "number":1576.34,
    "rate":26.3513875,
    "population":59820
  },
  {
    "state":"UT",
    "FIPS":49047,
    "county":"Uintah County",
    "number":477.08,
    "rate":13.77410786,
    "population":34636
  },
  {
    "state":"UT",
    "FIPS":49049,
    "county":"Utah County",
    "number":145012.88,
    "rate":268.740442,
    "population":539602
  },
  {
    "state":"UT",
    "FIPS":49051,
    "county":"Wasatch County",
    "number":615.24,
    "rate":24.24686687,
    "population":25374
  },
  {
    "state":"UT",
    "FIPS":49053,
    "county":"Washington County",
    "number":6372.31,
    "rate":44.05543303,
    "population":144643
  },
  {
    "state":"UT",
    "FIPS":49057,
    "county":"Weber County",
    "number":90933.19,
    "rate":384.430498,
    "population":236540
  },
  {
    "state":"VT",
    "FIPS":50001,
    "county":"Addison County",
    "number":79.4,
    "rate":2.15544154,
    "population":36837
  },
  {
    "state":"VT",
    "FIPS":50003,
    "county":"Bennington County",
    "number":24211.51,
    "rate":660.2718918,
    "population":36669
  },
  {
    "state":"VT",
    "FIPS":50005,
    "county":"Caledonia County",
    "number":34.12,
    "rate":1.097282521,
    "population":31095
  },
  {
    "state":"VT",
    "FIPS":50007,
    "county":"Chittenden County",
    "number":114810.94,
    "rate":723.715433,
    "population":158641
  },
  {
    "state":"VT",
    "FIPS":50011,
    "county":"Franklin County",
    "number":177.19,
    "rate":3.672103289,
    "population":48253
  },
  {
    "state":"VT",
    "FIPS":50017,
    "county":"Orange County",
    "number":30.4,
    "rate":1.050703349,
    "population":28933
  },
  {
    "state":"VT",
    "FIPS":50021,
    "county":"Rutland County",
    "number":1367.72,
    "rate":22.46767967,
    "population":60875
  },
  {
    "state":"VT",
    "FIPS":50023,
    "county":"Washington County",
    "number":336.07,
    "rate":5.662415124,
    "population":59351
  },
  {
    "state":"VT",
    "FIPS":50025,
    "county":"Windham County",
    "number":27.63,
    "rate":0.627997363,
    "population":43997
  },
  {
    "state":"VT",
    "FIPS":50027,
    "county":"Windsor County",
    "number":45.6,
    "rate":0.810998275,
    "population":56227
  },
  {
    "state":"VA",
    "FIPS":51001,
    "county":"Accomack County",
    "number":525.3,
    "rate":15.76861886,
    "population":33313
  },
  {
    "state":"VA",
    "FIPS":51003,
    "county":"Albemarle County",
    "number":44773.89,
    "rate":438.830638,
    "population":102030
  },
  {
    "state":"VA",
    "FIPS":51005,
    "county":"Alleghany County",
    "number":396.88,
    "rate":24.52450102,
    "population":16183
  },
  {
    "state":"VA",
    "FIPS":51007,
    "county":"Amelia County",
    "number":34.7,
    "rate":2.722636328,
    "population":12745
  },
  {
    "state":"VA",
    "FIPS":51009,
    "county":"Amherst County",
    "number":4180.08,
    "rate":128.8358761,
    "population":32445
  },
  {
    "state":"VA",
    "FIPS":51011,
    "county":"Appomattox County",
    "number":1528.34,
    "rate":100.9204966,
    "population":15144
  },
  {
    "state":"VA",
    "FIPS":51013,
    "county":"Arlington County",
    "number":39232.71,
    "rate":176.7661198,
    "population":221947
  },
  {
    "state":"VA",
    "FIPS":51015,
    "county":"Augusta County",
    "number":3134.13,
    "rate":42.58155238,
    "population":73603
  },
  {
    "state":"VA",
    "FIPS":51017,
    "county":"Bath County",
    "number":53.23,
    "rate":11.43501611,
    "population":4655
  },
  {
    "state":"VA",
    "FIPS":51019,
    "county":"Bedford County",
    "number":7652.9,
    "rate":101.455635,
    "population":75431
  },
  {
    "state":"VA",
    "FIPS":51021,
    "county":"Bland County",
    "number":275.78,
    "rate":41.09985097,
    "population":6710
  },
  {
    "state":"VA",
    "FIPS":51023,
    "county":"Botetourt County",
    "number":437.79,
    "rate":13.20354676,
    "population":33157
  },
  {
    "state":"VA",
    "FIPS":51025,
    "county":"Brunswick County",
    "number":240.79,
    "rate":14.1118209,
    "population":17063
  },
  {
    "state":"VA",
    "FIPS":51027,
    "county":"Buchanan County",
    "number":1075.93,
    "rate":45.13697193,
    "population":23837
  },
  {
    "state":"VA",
    "FIPS":51029,
    "county":"Buckingham County",
    "number":1195.71,
    "rate":70.15842281,
    "population":17043
  },
  {
    "state":"VA",
    "FIPS":51031,
    "county":"Campbell County",
    "number":626.78,
    "rate":11.45305705,
    "population":54726
  },
  {
    "state":"VA",
    "FIPS":51033,
    "county":"Caroline County",
    "number":252.46,
    "rate":8.723867445,
    "population":28939
  },
  {
    "state":"VA",
    "FIPS":51035,
    "county":"Carroll County",
    "number":1282.09,
    "rate":42.91801962,
    "population":29873
  },
  {
    "state":"VA",
    "FIPS":51036,
    "county":"Charles City",
    "number":154.2,
    "rate":21.57246782,
    "population":7148
  },
  {
    "state":"VA",
    "FIPS":51041,
    "county":"Chesterfield County",
    "number":317067.73,
    "rate":979.0573722,
    "population":323850
  },
  {
    "state":"VA",
    "FIPS":51043,
    "county":"Clarke County",
    "number":506.39,
    "rate":35.3723107,
    "population":14316
  },
  {
    "state":"VA",
    "FIPS":51045,
    "county":"Craig County",
    "number":110.32,
    "rate":21.22354752,
    "population":5198
  },
  {
    "state":"VA",
    "FIPS":51047,
    "county":"Culpeper County",
    "number":1967.71,
    "rate":41.19392049,
    "population":47767
  },
  {
    "state":"VA",
    "FIPS":51051,
    "county":"Dickenson County",
    "number":535.96,
    "rate":34.20730151,
    "population":15668
  },
  {
    "state":"VA",
    "FIPS":51053,
    "county":"Dinwiddie County",
    "number":1233.98,
    "rate":43.913879,
    "population":28100
  },
  {
    "state":"VA",
    "FIPS":51057,
    "county":"Essex County",
    "number":1336.61,
    "rate":119.692845,
    "population":11167
  },
  {
    "state":"VA",
    "FIPS":51059,
    "county":"Fairfax County",
    "number":340192.76,
    "rate":303.4590429,
    "population":1120000
  },
  {
    "state":"VA",
    "FIPS":51061,
    "county":"Fauquier County",
    "number":8880.25,
    "rate":133.3310812,
    "population":66603
  },
  {
    "state":"VA",
    "FIPS":51063,
    "county":"Floyd County",
    "number":734.88,
    "rate":47.63905095,
    "population":15426
  },
  {
    "state":"VA",
    "FIPS":51065,
    "county":"Fluvanna County",
    "number":882.54,
    "rate":34.01842501,
    "population":25943
  },
  {
    "state":"VA",
    "FIPS":51067,
    "county":"Franklin County",
    "number":653.46,
    "rate":11.58781387,
    "population":56392
  },
  {
    "state":"VA",
    "FIPS":51069,
    "county":"Frederick County",
    "number":203.26,
    "rate":2.53564701,
    "population":80161
  },
  {
    "state":"VA",
    "FIPS":51071,
    "county":"Giles County",
    "number":526.68,
    "rate":31.03960396,
    "population":16968
  },
  {
    "state":"VA",
    "FIPS":51073,
    "county":"Gloucester County",
    "number":2399.77,
    "rate":65.04499377,
    "population":36894
  },
  {
    "state":"VA",
    "FIPS":51075,
    "county":"Goochland County",
    "number":1541.4,
    "rate":72.19672131,
    "population":21350
  },
  {
    "state":"VA",
    "FIPS":51077,
    "county":"Grayson County",
    "number":23.07,
    "rate":1.519862969,
    "population":15179
  },
  {
    "state":"VA",
    "FIPS":51079,
    "county":"Greene County",
    "number":90.84,
    "rate":4.830116446,
    "population":18807
  },
  {
    "state":"VA",
    "FIPS":51083,
    "county":"Halifax County",
    "number":2076.92,
    "rate":58.05668922,
    "population":35774
  },
  {
    "state":"VA",
    "FIPS":51085,
    "county":"Hanover County",
    "number":19339.34,
    "rate":192.5615342,
    "population":100432
  },
  {
    "state":"VA",
    "FIPS":51087,
    "county":"Henrico County",
    "number":84947.18,
    "rate":269.3051095,
    "population":315431
  },
  {
    "state":"VA",
    "FIPS":51089,
    "county":"Henry County",
    "number":1137.26,
    "rate":21.52922914,
    "population":52824
  },
  {
    "state":"VA",
    "FIPS":51093,
    "county":"Isle of Wight County",
    "number":2603.78,
    "rate":73.59468626,
    "population":35380
  },
  {
    "state":"VA",
    "FIPS":51095,
    "county":"James City County",
    "number":24115.11,
    "rate":346.8203129,
    "population":69532
  },
  {
    "state":"VA",
    "FIPS":51097,
    "county":"King and Queen County",
    "number":1147.2,
    "rate":162.3089983,
    "population":7068
  },
  {
    "state":"VA",
    "FIPS":51099,
    "county":"King George County",
    "number":277.87,
    "rate":11.29185631,
    "population":24608
  },
  {
    "state":"VA",
    "FIPS":51101,
    "county":"King William County",
    "number":970.58,
    "rate":60.74857608,
    "population":15977
  },
  {
    "state":"VA",
    "FIPS":51103,
    "county":"Lancaster County",
    "number":1571.73,
    "rate":139.9581478,
    "population":11230
  },
  {
    "state":"VA",
    "FIPS":51105,
    "county":"Lee County",
    "number":740.76,
    "rate":29.0050511,
    "population":25539
  },
  {
    "state":"VA",
    "FIPS":51107,
    "county":"Loudoun County",
    "number":729683.03,
    "rate":2157.772182,
    "population":338165
  },
  {
    "state":"VA",
    "FIPS":51109,
    "county":"Louisa County",
    "number":3073.15,
    "rate":91.689292,
    "population":33517
  },
  {
    "state":"VA",
    "FIPS":51111,
    "county":"Lunenburg County",
    "number":83.15,
    "rate":6.599730137,
    "population":12599
  },
  {
    "state":"VA",
    "FIPS":51113,
    "county":"Madison County",
    "number":112.51,
    "rate":8.518967214,
    "population":13207
  },
  {
    "state":"VA",
    "FIPS":51115,
    "county":"Mathews County",
    "number":207.14,
    "rate":23.21937003,
    "population":8921
  },
  {
    "state":"VA",
    "FIPS":51117,
    "county":"Mecklenburg County",
    "number":1799.83,
    "rate":56.67327917,
    "population":31758
  },
  {
    "state":"VA",
    "FIPS":51119,
    "county":"Middlesex County",
    "number":270.08,
    "rate":24.9450448,
    "population":10827
  },
  {
    "state":"VA",
    "FIPS":51121,
    "county":"Montgomery County",
    "number":7183.32,
    "rate":75.09926713,
    "population":95651
  },
  {
    "state":"VA",
    "FIPS":51125,
    "county":"Nelson County",
    "number":138.51,
    "rate":9.354359425,
    "population":14807
  },
  {
    "state":"VA",
    "FIPS":51127,
    "county":"New Kent County",
    "number":1292.27,
    "rate":67.54495087,
    "population":19132
  },
  {
    "state":"VA",
    "FIPS":51131,
    "county":"Northampton County",
    "number":1580.17,
    "rate":129.1305058,
    "population":12237
  },
  {
    "state":"VA",
    "FIPS":51133,
    "county":"Northumberland County",
    "number":1393.26,
    "rate":112.7780476,
    "population":12354
  },
  {
    "state":"VA",
    "FIPS":51135,
    "county":"Nottoway County",
    "number":1516.19,
    "rate":96.1073783,
    "population":15776
  },
  {
    "state":"VA",
    "FIPS":51137,
    "county":"Orange County",
    "number":2797.69,
    "rate":81.83490801,
    "population":34187
  },
  {
    "state":"VA",
    "FIPS":51139,
    "county":"Page County",
    "number":2486.57,
    "rate":104.1626173,
    "population":23872
  },
  {
    "state":"VA",
    "FIPS":51141,
    "county":"Patrick County",
    "number":2431.58,
    "rate":132.1295441,
    "population":18403
  },
  {
    "state":"VA",
    "FIPS":51143,
    "county":"Pittsylvania County",
    "number":874.24,
    "rate":13.89932907,
    "population":62898
  },
  {
    "state":"VA",
    "FIPS":51145,
    "county":"Powhatan County",
    "number":3046.17,
    "rate":108.3429364,
    "population":28116
  },
  {
    "state":"VA",
    "FIPS":51147,
    "county":"Prince Edward County",
    "number":2021.49,
    "rate":87.09189608,
    "population":23211
  },
  {
    "state":"VA",
    "FIPS":51149,
    "county":"Prince George County",
    "number":2593.26,
    "rate":70.01998056,
    "population":37036
  },
  {
    "state":"VA",
    "FIPS":51153,
    "county":"Prince William County",
    "number":12022.53,
    "rate":27.87988201,
    "population":431226
  },
  {
    "state":"VA",
    "FIPS":51155,
    "county":"Pulaski County",
    "number":2539.2,
    "rate":73.07681239,
    "population":34747
  },
  {
    "state":"VA",
    "FIPS":51157,
    "county":"Rappahannock County",
    "number":415.91,
    "rate":55.97711978,
    "population":7430
  },
  {
    "state":"VA",
    "FIPS":51159,
    "county":"Richmond County",
    "number":199.4,
    "rate":22.02828104,
    "population":9052
  },
  {
    "state":"VA",
    "FIPS":51161,
    "county":"Roanoke County",
    "number":4348.28,
    "rate":46.74011889,
    "population":93031
  },
  {
    "state":"VA",
    "FIPS":51163,
    "county":"Rockbridge County",
    "number":301.43,
    "rate":13.46150411,
    "population":22392
  },
  {
    "state":"VA",
    "FIPS":51165,
    "county":"Rockingham County",
    "number":1676.45,
    "rate":21.66655897,
    "population":77375
  },
  {
    "state":"VA",
    "FIPS":51167,
    "county":"Russell County",
    "number":566.91,
    "rate":19.94336171,
    "population":28426
  },
  {
    "state":"VA",
    "FIPS":51169,
    "county":"Scott County",
    "number":2083.43,
    "rate":91.37450112,
    "population":22801
  },
  {
    "state":"VA",
    "FIPS":51171,
    "county":"Shenandoah County",
    "number":3576.44,
    "rate":83.87326751,
    "population":42641
  },
  {
    "state":"VA",
    "FIPS":51173,
    "county":"Smyth County",
    "number":3721.29,
    "rate":116.7903211,
    "population":31863
  },
  {
    "state":"VA",
    "FIPS":51175,
    "county":"Southampton County",
    "number":607.26,
    "rate":32.97279687,
    "population":18417
  },
  {
    "state":"VA",
    "FIPS":51177,
    "county":"Spotsylvania County",
    "number":10424.92,
    "rate":82.64759745,
    "population":126137
  },
  {
    "state":"VA",
    "FIPS":51179,
    "county":"Stafford County",
    "number":3686.02,
    "rate":27.43105065,
    "population":134374
  },
  {
    "state":"VA",
    "FIPS":51181,
    "county":"Surry County",
    "number":10.53,
    "rate":1.539473684,
    "population":6840
  },
  {
    "state":"VA",
    "FIPS":51183,
    "county":"Sussex County",
    "number":250.03,
    "rate":20.93878235,
    "population":11941
  },
  {
    "state":"VA",
    "FIPS":51185,
    "county":"Tazewell County",
    "number":11410.86,
    "rate":257.8841982,
    "population":44248
  },
  {
    "state":"VA",
    "FIPS":51187,
    "county":"Warren County",
    "number":1879.06,
    "rate":49.49714195,
    "population":37963
  },
  {
    "state":"VA",
    "FIPS":51191,
    "county":"Washington County",
    "number":125312.77,
    "rate":2275.393932,
    "population":55073
  },
  {
    "state":"VA",
    "FIPS":51193,
    "county":"Westmoreland County",
    "number":329.5,
    "rate":18.83179974,
    "population":17497
  },
  {
    "state":"VA",
    "FIPS":51195,
    "county":"Wise County",
    "number":2936.81,
    "rate":71.93127266,
    "population":40828
  },
  {
    "state":"VA",
    "FIPS":51197,
    "county":"Wythe County",
    "number":2960.23,
    "rate":100.8561889,
    "population":29351
  },
  {
    "state":"VA",
    "FIPS":51199,
    "county":"York County",
    "number":5125.2,
    "rate":77.95455237,
    "population":65746
  },
  {
    "state":"VA",
    "FIPS":51510,
    "county":"Alexandria City",
    "number":15996.49,
    "rate":108.8685396,
    "population":146934
  },
  {
    "state":"VA",
    "FIPS":51520,
    "county":"Bristol City",
    "number":1168.01,
    "rate":65.89990973,
    "population":17724
  },
  {
    "state":"VA",
    "FIPS":51530,
    "county":"Buena Vista City",
    "number":11.73,
    "rate":1.733156028,
    "population":6768
  },
  {
    "state":"VA",
    "FIPS":51540,
    "county":"Charlottesville City",
    "number":128980.9,
    "rate":2897.08003,
    "population":44521
  },
  {
    "state":"VA",
    "FIPS":51550,
    "county":"Chesapeake City",
    "number":62897.96,
    "rate":275.6409627,
    "population":228188
  },
  {
    "state":"VA",
    "FIPS":51570,
    "county":"Colonial Heights City",
    "number":8959.04,
    "rate":511.6527698,
    "population":17510
  },
  {
    "state":"VA",
    "FIPS":51590,
    "county":"Danville City",
    "number":26766.09,
    "rate":625.5805637,
    "population":42786
  },
  {
    "state":"VA",
    "FIPS":51595,
    "county":"Emporia City",
    "number":726.93,
    "rate":127.4421459,
    "population":5704
  },
  {
    "state":"VA",
    "FIPS":51600,
    "county":"Fairfax City",
    "number":161.98,
    "rate":6.904224031,
    "population":23461
  },
  {
    "state":"VA",
    "FIPS":51610,
    "county":"Falls Church City",
    "number":3329.96,
    "rate":253.498782,
    "population":13136
  },
  {
    "state":"VA",
    "FIPS":51620,
    "county":"Franklin City",
    "number":2047.39,
    "rate":241.0395573,
    "population":8494
  },
  {
    "state":"VA",
    "FIPS":51630,
    "county":"Fredericksburg City",
    "number":14317.28,
    "rate":528.0596024,
    "population":27113
  },
  {
    "state":"VA",
    "FIPS":51640,
    "county":"Galax City",
    "number":286.83,
    "rate":41.44343303,
    "population":6921
  },
  {
    "state":"VA",
    "FIPS":51650,
    "county":"Hampton City",
    "number":8451.72,
    "rate":61.7621654,
    "population":136843
  },
  {
    "state":"VA",
    "FIPS":51660,
    "county":"Harrisonburg City",
    "number":7537.08,
    "rate":147.1396221,
    "population":51224
  },
  {
    "state":"VA",
    "FIPS":51670,
    "county":"Hopewell City",
    "number":34441.11,
    "rate":1542.922229,
    "population":22322
  },
  {
    "state":"VA",
    "FIPS":51680,
    "county":"Lynchburg City",
    "number":23747,
    "rate":305.2784491,
    "population":77788
  },
  {
    "state":"VA",
    "FIPS":51683,
    "county":"Manassas City",
    "number":7004.55,
    "rate":171.9245496,
    "population":40742
  },
  {
    "state":"VA",
    "FIPS":51685,
    "county":"Manassas Park City",
    "number":19.5,
    "rate":1.293189204,
    "population":15079
  },
  {
    "state":"VA",
    "FIPS":51690,
    "county":"Martinsville City",
    "number":3889.11,
    "rate":282.9060886,
    "population":13747
  },
  {
    "state":"VA",
    "FIPS":51700,
    "county":"Newport News City",
    "number":43943.12,
    "rate":243.4697236,
    "population":180487
  },
  {
    "state":"VA",
    "FIPS":51710,
    "county":"Norfolk City",
    "number":90246.62,
    "rate":366.6326224,
    "population":246150
  },
  {
    "state":"VA",
    "FIPS":51720,
    "county":"Norton City",
    "number":3528.9,
    "rate":871.5485305,
    "population":4049
  },
  {
    "state":"VA",
    "FIPS":51730,
    "county":"Petersburg City",
    "number":636.45,
    "rate":19.78580533,
    "population":32167
  },
  {
    "state":"VA",
    "FIPS":51735,
    "county":"Poquoson City",
    "number":61.2,
    "rate":5.043678919,
    "population":12134
  },
  {
    "state":"VA",
    "FIPS":51740,
    "county":"Portsmouth City",
    "number":8265.17,
    "rate":85.6086218,
    "population":96546
  },
  {
    "state":"VA",
    "FIPS":51750,
    "county":"Radford City",
    "number":814.01,
    "rate":48.55123464,
    "population":16766
  },
  {
    "state":"VA",
    "FIPS":51760,
    "county":"Richmond City",
    "number":37842.63,
    "rate":178.9029717,
    "population":211526
  },
  {
    "state":"VA",
    "FIPS":51770,
    "county":"Roanoke City",
    "number":466565.63,
    "rate":4766.759264,
    "population":97879
  },
  {
    "state":"VA",
    "FIPS":51775,
    "county":"Salem City",
    "number":6722.8,
    "rate":268.3431126,
    "population":25053
  },
  {
    "state":"VA",
    "FIPS":51790,
    "county":"Staunton City",
    "number":886.9,
    "rate":37.07620919,
    "population":23921
  },
  {
    "state":"VA",
    "FIPS":51800,
    "county":"Suffolk City",
    "number":12266.04,
    "rate":143.9963373,
    "population":85183
  },
  {
    "state":"VA",
    "FIPS":51810,
    "county":"Virginia Beach City",
    "number":126233.51,
    "rate":283.181446,
    "population":445769
  },
  {
    "state":"VA",
    "FIPS":51820,
    "county":"Waynesboro City",
    "number":36.07,
    "rate":1.709073679,
    "population":21105
  },
  {
    "state":"VA",
    "FIPS":51830,
    "county":"Williamsburg City",
    "number":4807.02,
    "rate":328.8650202,
    "population":14617
  },
  {
    "state":"VA",
    "FIPS":51840,
    "county":"Winchester City",
    "number":106749.66,
    "rate":3927.796747,
    "population":27178
  },
  {
    "state":"WA",
    "FIPS":53001,
    "county":"Adams County",
    "number":110.94,
    "rate":5.865496458,
    "population":18914
  },
  {
    "state":"WA",
    "FIPS":53003,
    "county":"Asotin County",
    "number":939.42,
    "rate":42.94884104,
    "population":21873
  },
  {
    "state":"WA",
    "FIPS":53005,
    "county":"Benton County",
    "number":155590.57,
    "rate":853.0371828,
    "population":182396
  },
  {
    "state":"WA",
    "FIPS":53007,
    "county":"Chelan County",
    "number":2858.86,
    "rate":38.80629836,
    "population":73670
  },
  {
    "state":"WA",
    "FIPS":53009,
    "county":"Clallam County",
    "number":866.05,
    "rate":12.05391939,
    "population":71848
  },
  {
    "state":"WA",
    "FIPS":53011,
    "county":"Clark County",
    "number":45870.47,
    "rate":104.8455903,
    "population":437505
  },
  {
    "state":"WA",
    "FIPS":53015,
    "county":"Cowlitz County",
    "number":1860.92,
    "rate":18.2842882,
    "population":101777
  },
  {
    "state":"WA",
    "FIPS":53019,
    "county":"Ferry County",
    "number":20.79,
    "rate":2.693354061,
    "population":7719
  },
  {
    "state":"WA",
    "FIPS":53021,
    "county":"Franklin County",
    "number":5017.76,
    "rate":58.46092903,
    "population":85831
  },
  {
    "state":"WA",
    "FIPS":53025,
    "county":"Grant County",
    "number":3094.21,
    "rate":33.7471643,
    "population":91688
  },
  {
    "state":"WA",
    "FIPS":53027,
    "county":"Grays Harbor County",
    "number":4628.75,
    "rate":64.55268112,
    "population":71705
  },
  {
    "state":"WA",
    "FIPS":53029,
    "county":"Island County",
    "number":3479.3,
    "rate":43.91392149,
    "population":79230
  },
  {
    "state":"WA",
    "FIPS":53031,
    "county":"Jefferson County",
    "number":50.69,
    "rate":1.699694866,
    "population":29823
  },
  {
    "state":"WA",
    "FIPS":53033,
    "county":"King County",
    "number":758563.84,
    "rate":377.6719047,
    "population":2010000
  },
  {
    "state":"WA",
    "FIPS":53035,
    "county":"Kitsap County",
    "number":22365.13,
    "rate":87.82383501,
    "population":254659
  },
  {
    "state":"WA",
    "FIPS":53037,
    "county":"Kittitas County",
    "number":297.13,
    "rate":7.136029588,
    "population":41638
  },
  {
    "state":"WA",
    "FIPS":53039,
    "county":"Klickitat County",
    "number":197.3,
    "rate":9.571629554,
    "population":20613
  },
  {
    "state":"WA",
    "FIPS":53041,
    "county":"Lewis County",
    "number":4033.65,
    "rate":53.40319335,
    "population":75532
  },
  {
    "state":"WA",
    "FIPS":53043,
    "county":"Lincoln County",
    "number":2180.77,
    "rate":208.9460573,
    "population":10437
  },
  {
    "state":"WA",
    "FIPS":53045,
    "county":"Mason County",
    "number":917.55,
    "rate":15.10345509,
    "population":60751
  },
  {
    "state":"WA",
    "FIPS":53047,
    "county":"Okanogan County",
    "number":353.52,
    "rate":8.576835363,
    "population":41218
  },
  {
    "state":"WA",
    "FIPS":53049,
    "county":"Pacific County",
    "number":563.08,
    "rate":27.38316394,
    "population":20563
  },
  {
    "state":"WA",
    "FIPS":53051,
    "county":"Pend Oreille County",
    "number":1536.43,
    "rate":118.2051085,
    "population":12998
  },
  {
    "state":"WA",
    "FIPS":53053,
    "county":"Pierce County",
    "number":154260.39,
    "rate":189.8909601,
    "population":812363
  },
  {
    "state":"WA",
    "FIPS":53055,
    "county":"San Juan County",
    "number":270,
    "rate":17.09726444,
    "population":15792
  },
  {
    "state":"WA",
    "FIPS":53057,
    "county":"Skagit County",
    "number":3418.76,
    "rate":28.97131477,
    "population":118005
  },
  {
    "state":"WA",
    "FIPS":53061,
    "county":"Snohomish County",
    "number":41318.88,
    "rate":56.37401049,
    "population":732942
  },
  {
    "state":"WA",
    "FIPS":53063,
    "county":"Spokane County",
    "number":321574.91,
    "rate":675.9979105,
    "population":475704
  },
  {
    "state":"WA",
    "FIPS":53065,
    "county":"Stevens County",
    "number":1478.76,
    "rate":33.90873653,
    "population":43610
  },
  {
    "state":"WA",
    "FIPS":53067,
    "county":"Thurston County",
    "number":151091.29,
    "rate":584.0112016,
    "population":258713
  },
  {
    "state":"WA",
    "FIPS":53071,
    "county":"Walla Walla County",
    "number":1384.02,
    "rate":23.27727135,
    "population":59458
  },
  {
    "state":"WA",
    "FIPS":53073,
    "county":"Whatcom County",
    "number":10135.68,
    "rate":49.48410122,
    "population":204827
  },
  {
    "state":"WA",
    "FIPS":53075,
    "county":"Whitman County",
    "number":1579.62,
    "rate":33.90470058,
    "population":46590
  },
  {
    "state":"WA",
    "FIPS":53077,
    "county":"Yakima County",
    "number":20769.2,
    "rate":84.18091691,
    "population":246721
  },
  {
    "state":"WV",
    "FIPS":54001,
    "county":"Barbour County",
    "number":2125.35,
    "rate":126.0587189,
    "population":16860
  },
  {
    "state":"WV",
    "FIPS":54003,
    "county":"Berkeley County",
    "number":67833.13,
    "rate":633.5873606,
    "population":107062
  },
  {
    "state":"WV",
    "FIPS":54005,
    "county":"Boone County",
    "number":515.56,
    "rate":21.13210641,
    "population":24397
  },
  {
    "state":"WV",
    "FIPS":54007,
    "county":"Braxton County",
    "number":2286.24,
    "rate":157.8350017,
    "population":14485
  },
  {
    "state":"WV",
    "FIPS":54009,
    "county":"Brooke County",
    "number":1184.21,
    "rate":49.77554537,
    "population":23791
  },
  {
    "state":"WV",
    "FIPS":54011,
    "county":"Cabell County",
    "number":66256.15,
    "rate":683.5111157,
    "population":96935
  },
  {
    "state":"WV",
    "FIPS":54013,
    "county":"Calhoun County",
    "number":22.71,
    "rate":2.991700698,
    "population":7591
  },
  {
    "state":"WV",
    "FIPS":54015,
    "county":"Clay County",
    "number":112.74,
    "rate":12.18679062,
    "population":9251
  },
  {
    "state":"WV",
    "FIPS":54017,
    "county":"Doddridge County",
    "number":71.02,
    "rate":8.639902676,
    "population":8220
  },
  {
    "state":"WV",
    "FIPS":54019,
    "county":"Fayette County",
    "number":4316.62,
    "rate":94.04810667,
    "population":45898
  },
  {
    "state":"WV",
    "FIPS":54021,
    "county":"Gilmer County",
    "number":98.34,
    "rate":11.20300752,
    "population":8778
  },
  {
    "state":"WV",
    "FIPS":54023,
    "county":"Grant County",
    "number":2278.58,
    "rate":192.4313825,
    "population":11841
  },
  {
    "state":"WV",
    "FIPS":54025,
    "county":"Greenbrier County",
    "number":2946.07,
    "rate":82.27866838,
    "population":35806
  },
  {
    "state":"WV",
    "FIPS":54027,
    "county":"Hampshire County",
    "number":968.3,
    "rate":40.89450122,
    "population":23678
  },
  {
    "state":"WV",
    "FIPS":54029,
    "county":"Hancock County",
    "number":88327.84,
    "rate":2912.418887,
    "population":30328
  },
  {
    "state":"WV",
    "FIPS":54031,
    "county":"Hardy County",
    "number":1227.88,
    "rate":88.52775775,
    "population":13870
  },
  {
    "state":"WV",
    "FIPS":54033,
    "county":"Harrison County",
    "number":177406.42,
    "rate":2565.6045,
    "population":69148
  },
  {
    "state":"WV",
    "FIPS":54035,
    "county":"Jackson County",
    "number":1237.99,
    "rate":42.28107923,
    "population":29280
  },
  {
    "state":"WV",
    "FIPS":54037,
    "county":"Jefferson County",
    "number":62820.7,
    "rate":1151.279185,
    "population":54566
  },
  {
    "state":"WV",
    "FIPS":54039,
    "county":"Kanawha County",
    "number":92865.25,
    "rate":483.290572,
    "population":192152
  },
  {
    "state":"WV",
    "FIPS":54041,
    "county":"Lewis County",
    "number":2487.37,
    "rate":151.4288323,
    "population":16426
  },
  {
    "state":"WV",
    "FIPS":54043,
    "county":"Lincoln County",
    "number":342.43,
    "rate":15.82539976,
    "population":21638
  },
  {
    "state":"WV",
    "FIPS":54045,
    "county":"Logan County",
    "number":9275.12,
    "rate":255.2597974,
    "population":36336
  },
  {
    "state":"WV",
    "FIPS":54047,
    "county":"McDowell County",
    "number":2239.27,
    "rate":105.0609928,
    "population":21314
  },
  {
    "state":"WV",
    "FIPS":54049,
    "county":"Marion County",
    "number":6989.32,
    "rate":123.0795781,
    "population":56787
  },
  {
    "state":"WV",
    "FIPS":54051,
    "county":"Marshall County",
    "number":3703.07,
    "rate":113.2991678,
    "population":32684
  },
  {
    "state":"WV",
    "FIPS":54053,
    "county":"Mason County",
    "number":4031.08,
    "rate":148.0816986,
    "population":27222
  },
  {
    "state":"WV",
    "FIPS":54055,
    "county":"Mercer County",
    "number":12631.68,
    "rate":202.5671125,
    "population":62358
  },
  {
    "state":"WV",
    "FIPS":54057,
    "county":"Mineral County",
    "number":753.98,
    "rate":26.99244621,
    "population":27933
  },
  {
    "state":"WV",
    "FIPS":54059,
    "county":"Mingo County",
    "number":1024.26,
    "rate":39.21062706,
    "population":26122
  },
  {
    "state":"WV",
    "FIPS":54061,
    "county":"Monongalia County",
    "number":15985.96,
    "rate":159.0152291,
    "population":100531
  },
  {
    "state":"WV",
    "FIPS":54063,
    "county":"Monroe County",
    "number":910.48,
    "rate":67.48295286,
    "population":13492
  },
  {
    "state":"WV",
    "FIPS":54065,
    "county":"Morgan County",
    "number":16015.44,
    "rate":918.6852521,
    "population":17433
  },
  {
    "state":"WV",
    "FIPS":54067,
    "county":"Nicholas County",
    "number":5983.5,
    "rate":227.9254914,
    "population":26252
  },
  {
    "state":"WV",
    "FIPS":54069,
    "county":"Ohio County",
    "number":22617.98,
    "rate":513.3915925,
    "population":44056
  },
  {
    "state":"WV",
    "FIPS":54071,
    "county":"Pendleton County",
    "number":112.8,
    "rate":14.97610196,
    "population":7532
  },
  {
    "state":"WV",
    "FIPS":54073,
    "county":"Pleasants County",
    "number":375.06,
    "rate":49.40200211,
    "population":7592
  },
  {
    "state":"WV",
    "FIPS":54075,
    "county":"Pocahontas County",
    "number":381.67,
    "rate":43.88524779,
    "population":8697
  },
  {
    "state":"WV",
    "FIPS":54077,
    "county":"Preston County",
    "number":986.19,
    "rate":29.08257151,
    "population":33910
  },
  {
    "state":"WV",
    "FIPS":54079,
    "county":"Putnam County",
    "number":4768.5,
    "rate":84.26549329,
    "population":56589
  },
  {
    "state":"WV",
    "FIPS":54081,
    "county":"Raleigh County",
    "number":16214.89,
    "rate":204.9352898,
    "population":79122
  },
  {
    "state":"WV",
    "FIPS":54083,
    "county":"Randolph County",
    "number":3462.81,
    "rate":117.7025833,
    "population":29420
  },
  {
    "state":"WV",
    "FIPS":54085,
    "county":"Ritchie County",
    "number":167.7,
    "rate":16.33070406,
    "population":10269
  },
  {
    "state":"WV",
    "FIPS":54087,
    "county":"Roane County",
    "number":1360.92,
    "rate":92.51665534,
    "population":14710
  },
  {
    "state":"WV",
    "FIPS":54089,
    "county":"Summers County",
    "number":1220.31,
    "rate":88.67887508,
    "population":13761
  },
  {
    "state":"WV",
    "FIPS":54091,
    "county":"Taylor County",
    "number":1590.07,
    "rate":93.6216439,
    "population":16984
  },
  {
    "state":"WV",
    "FIPS":54093,
    "county":"Tucker County",
    "number":31,
    "rate":4.466215243,
    "population":6941
  },
  {
    "state":"WV",
    "FIPS":54095,
    "county":"Tyler County",
    "number":1018.79,
    "rate":112.7853426,
    "population":9033
  },
  {
    "state":"WV",
    "FIPS":54097,
    "county":"Upshur County",
    "number":2778.89,
    "rate":113.3963111,
    "population":24506
  },
  {
    "state":"WV",
    "FIPS":54099,
    "county":"Wayne County",
    "number":867.07,
    "rate":20.8070167,
    "population":41672
  },
  {
    "state":"WV",
    "FIPS":54101,
    "county":"Webster County",
    "number":476.58,
    "rate":52.85936114,
    "population":9016
  },
  {
    "state":"WV",
    "FIPS":54103,
    "county":"Wetzel County",
    "number":827.09,
    "rate":50.37088916,
    "population":16420
  },
  {
    "state":"WV",
    "FIPS":54105,
    "county":"Wirt County",
    "number":116.6,
    "rate":20.0826731,
    "population":5806
  },
  {
    "state":"WV",
    "FIPS":54107,
    "county":"Wood County",
    "number":24801.29,
    "rate":286.5180624,
    "population":86561
  },
  {
    "state":"WV",
    "FIPS":54109,
    "county":"Wyoming County",
    "number":2919.95,
    "rate":125.5838459,
    "population":23251
  },
  {
    "state":"WI",
    "FIPS":55001,
    "county":"Adams County",
    "number":991.82,
    "rate":48.31547155,
    "population":20528
  },
  {
    "state":"WI",
    "FIPS":55003,
    "county":"Ashland County",
    "number":22.09,
    "rate":1.3886968,
    "population":15907
  },
  {
    "state":"WI",
    "FIPS":55005,
    "county":"Barron County",
    "number":60951.96,
    "rate":1331.497477,
    "population":45777
  },
  {
    "state":"WI",
    "FIPS":55009,
    "county":"Brown County",
    "number":44525.84,
    "rate":175.9817243,
    "population":253014
  },
  {
    "state":"WI",
    "FIPS":55013,
    "county":"Burnett County",
    "number":69.21,
    "rate":4.506739598,
    "population":15357
  },
  {
    "state":"WI",
    "FIPS":55015,
    "county":"Calumet County",
    "number":26.3,
    "rate":0.529132464,
    "population":49704
  },
  {
    "state":"WI",
    "FIPS":55017,
    "county":"Chippewa County",
    "number":257.97,
    "rate":4.091449779,
    "population":63051
  },
  {
    "state":"WI",
    "FIPS":55019,
    "county":"Clark County",
    "number":21.2,
    "rate":0.615116785,
    "population":34465
  },
  {
    "state":"WI",
    "FIPS":55021,
    "county":"Columbia County",
    "number":2389.38,
    "rate":42.31912293,
    "population":56461
  },
  {
    "state":"WI",
    "FIPS":55025,
    "county":"Dane County",
    "number":18338.66,
    "rate":36.43734365,
    "population":503293
  },
  {
    "state":"WI",
    "FIPS":55027,
    "county":"Dodge County",
    "number":1269.28,
    "rate":14.32984104,
    "population":88576
  },
  {
    "state":"WI",
    "FIPS":55029,
    "county":"Door County",
    "number":140.14,
    "rate":5.057380007,
    "population":27710
  },
  {
    "state":"WI",
    "FIPS":55031,
    "county":"Douglas County",
    "number":108.73,
    "rate":2.481513602,
    "population":43816
  },
  {
    "state":"WI",
    "FIPS":55033,
    "county":"Dunn County",
    "number":262.75,
    "rate":5.981106305,
    "population":43930
  },
  {
    "state":"WI",
    "FIPS":55035,
    "county":"Eau Claire County",
    "number":97355.6,
    "rate":965.4462515,
    "population":100840
  },
  {
    "state":"WI",
    "FIPS":55037,
    "county":"Florence County",
    "number":22.25,
    "rate":4.975402504,
    "population":4472
  },
  {
    "state":"WI",
    "FIPS":55039,
    "county":"Fond Du Lac County",
    "number":1500.16,
    "rate":14.75054571,
    "population":101702
  },
  {
    "state":"WI",
    "FIPS":55043,
    "county":"Grant County",
    "number":3042,
    "rate":59.65758663,
    "population":50991
  },
  {
    "state":"WI",
    "FIPS":55045,
    "county":"Green County",
    "number":1260.02,
    "rate":34.16447493,
    "population":36881
  },
  {
    "state":"WI",
    "FIPS":55047,
    "county":"Green Lake County",
    "number":87.01,
    "rate":4.56146789,
    "population":19075
  },
  {
    "state":"WI",
    "FIPS":55049,
    "county":"Iowa County",
    "number":893.8,
    "rate":37.60834806,
    "population":23766
  },
  {
    "state":"WI",
    "FIPS":55053,
    "county":"Jackson County",
    "number":1053.21,
    "rate":51.43380378,
    "population":20477
  },
  {
    "state":"WI",
    "FIPS":55055,
    "county":"Jefferson County",
    "number":820.98,
    "rate":9.726329258,
    "population":84408
  },
  {
    "state":"WI",
    "FIPS":55059,
    "county":"Kenosha County",
    "number":13642.65,
    "rate":81.52068694,
    "population":167352
  },
  {
    "state":"WI",
    "FIPS":55061,
    "county":"Kewaunee County",
    "number":908.34,
    "rate":44.0556795,
    "population":20618
  },
  {
    "state":"WI",
    "FIPS":55063,
    "county":"La Crosse County",
    "number":156859.96,
    "rate":1342.622763,
    "population":116831
  },
  {
    "state":"WI",
    "FIPS":55065,
    "county":"Lafayette County",
    "number":527.82,
    "rate":31.28378378,
    "population":16872
  },
  {
    "state":"WI",
    "FIPS":55067,
    "county":"Langlade County",
    "number":1186.44,
    "rate":60.13685438,
    "population":19729
  },
  {
    "state":"WI",
    "FIPS":55069,
    "county":"Lincoln County",
    "number":21.95,
    "rate":0.770932846,
    "population":28472
  },
  {
    "state":"WI",
    "FIPS":55071,
    "county":"Manitowoc County",
    "number":437.28,
    "rate":5.410809741,
    "population":80816
  },
  {
    "state":"WI",
    "FIPS":55073,
    "county":"Marathon County",
    "number":32016.76,
    "rate":237.7087958,
    "population":134689
  },
  {
    "state":"WI",
    "FIPS":55075,
    "county":"Marinette County",
    "number":538.86,
    "rate":12.98833398,
    "population":41488
  },
  {
    "state":"WI",
    "FIPS":55077,
    "county":"Marquette County",
    "number":21.78,
    "rate":1.434215725,
    "population":15186
  },
  {
    "state":"WI",
    "FIPS":55079,
    "county":"Milwaukee County",
    "number":562190.82,
    "rate":588.9769005,
    "population":954521
  },
  {
    "state":"WI",
    "FIPS":55081,
    "county":"Monroe County",
    "number":196.04,
    "rate":4.348038237,
    "population":45087
  },
  {
    "state":"WI",
    "FIPS":55083,
    "county":"Oconto County",
    "number":1239.7,
    "rate":33.1293426,
    "population":37420
  },
  {
    "state":"WI",
    "FIPS":55085,
    "county":"Oneida County",
    "number":650.18,
    "rate":18.18888827,
    "population":35746
  },
  {
    "state":"WI",
    "FIPS":55087,
    "county":"Outagamie County",
    "number":1578.87,
    "rate":8.826567977,
    "population":178877
  },
  {
    "state":"WI",
    "FIPS":55089,
    "county":"Ozaukee County",
    "number":33257.51,
    "rate":382.138458,
    "population":87030
  },
  {
    "state":"WI",
    "FIPS":55091,
    "county":"Pepin County",
    "number":1047.82,
    "rate":141.8464871,
    "population":7387
  },
  {
    "state":"WI",
    "FIPS":55093,
    "county":"Pierce County",
    "number":463.68,
    "rate":11.39991149,
    "population":40674
  },
  {
    "state":"WI",
    "FIPS":55095,
    "county":"Polk County",
    "number":81.8,
    "rate":1.879379667,
    "population":43525
  },
  {
    "state":"WI",
    "FIPS":55097,
    "county":"Portage County",
    "number":676.76,
    "rate":9.602020403,
    "population":70481
  },
  {
    "state":"WI",
    "FIPS":55099,
    "county":"Price County",
    "number":74.06,
    "rate":5.339581831,
    "population":13870
  },
  {
    "state":"WI",
    "FIPS":55101,
    "county":"Racine County",
    "number":259549.23,
    "rate":1333.188979,
    "population":194683
  },
  {
    "state":"WI",
    "FIPS":55103,
    "county":"Richland County",
    "number":55.25,
    "rate":3.104106972,
    "population":17799
  },
  {
    "state":"WI",
    "FIPS":55105,
    "county":"Rock County",
    "number":190280.4,
    "rate":1187.24161,
    "population":160271
  },
  {
    "state":"WI",
    "FIPS":55109,
    "county":"St Croix County",
    "number":4820.75,
    "rate":56.56829383,
    "population":85220
  },
  {
    "state":"WI",
    "FIPS":55111,
    "county":"Sauk County",
    "number":2116.15,
    "rate":33.83674448,
    "population":62540
  },
  {
    "state":"WI",
    "FIPS":55113,
    "county":"Sawyer County",
    "number":149.73,
    "rate":9.052599758,
    "population":16540
  },
  {
    "state":"WI",
    "FIPS":55115,
    "county":"Shawano County",
    "number":161.78,
    "rate":3.888661875,
    "population":41603
  },
  {
    "state":"WI",
    "FIPS":55117,
    "county":"Sheboygan County",
    "number":1672.21,
    "rate":14.54702832,
    "population":114952
  },
  {
    "state":"WI",
    "FIPS":55121,
    "county":"Trempealeau County",
    "number":197.71,
    "rate":6.731469817,
    "population":29371
  },
  {
    "state":"WI",
    "FIPS":55123,
    "county":"Vernon County",
    "number":246.84,
    "rate":8.172698076,
    "population":30203
  },
  {
    "state":"WI",
    "FIPS":55125,
    "county":"Vilas County",
    "number":137.97,
    "rate":6.483247968,
    "population":21281
  },
  {
    "state":"WI",
    "FIPS":55127,
    "county":"Walworth County",
    "number":3287.62,
    "rate":31.90253464,
    "population":103052
  },
  {
    "state":"WI",
    "FIPS":55129,
    "county":"Washburn County",
    "number":221.07,
    "rate":13.96084623,
    "population":15835
  },
  {
    "state":"WI",
    "FIPS":55131,
    "county":"Washington County",
    "number":884.69,
    "rate":6.672826423,
    "population":132581
  },
  {
    "state":"WI",
    "FIPS":55133,
    "county":"Waukesha County",
    "number":81943.54,
    "rate":208.7079463,
    "population":392623
  },
  {
    "state":"WI",
    "FIPS":55135,
    "county":"Waupaca County",
    "number":977.32,
    "rate":18.78450065,
    "population":52028
  },
  {
    "state":"WI",
    "FIPS":55137,
    "county":"Waushara County",
    "number":2301.51,
    "rate":94.02745434,
    "population":24477
  },
  {
    "state":"WI",
    "FIPS":55139,
    "county":"Winnebago County",
    "number":36691.92,
    "rate":217.5831683,
    "population":168634
  },
  {
    "state":"WI",
    "FIPS":55141,
    "county":"Wood County",
    "number":9644.33,
    "rate":129.7082874,
    "population":74354
  },
  {
    "state":"WY",
    "FIPS":56001,
    "county":"Albany County",
    "number":298.24,
    "rate":7.982228408,
    "population":37363
  },
  {
    "state":"WY",
    "FIPS":56003,
    "county":"Big Horn County",
    "number":96.71,
    "rate":8.211071489,
    "population":11778
  },
  {
    "state":"WY",
    "FIPS":56005,
    "county":"Campbell County",
    "number":2931.93,
    "rate":61.21322839,
    "population":47897
  },
  {
    "state":"WY",
    "FIPS":56007,
    "county":"Carbon County",
    "number":81.46,
    "rate":5.195484406,
    "population":15679
  },
  {
    "state":"WY",
    "FIPS":56009,
    "county":"Converse County",
    "number":578.02,
    "rate":41.27240271,
    "population":14005
  },
  {
    "state":"WY",
    "FIPS":56013,
    "county":"Fremont County",
    "number":341.25,
    "rate":8.29787234,
    "population":41125
  },
  {
    "state":"WY",
    "FIPS":56015,
    "county":"Goshen County",
    "number":39.77,
    "rate":2.909290417,
    "population":13670
  },
  {
    "state":"WY",
    "FIPS":56019,
    "county":"Johnson County",
    "number":238.82,
    "rate":27.75040669,
    "population":8606
  },
  {
    "state":"WY",
    "FIPS":56021,
    "county":"Laramie County",
    "number":5707.88,
    "rate":60.17859967,
    "population":94849
  },
  {
    "state":"WY",
    "FIPS":56023,
    "county":"Lincoln County",
    "number":179.35,
    "rate":10.00502064,
    "population":17926
  },
  {
    "state":"WY",
    "FIPS":56025,
    "county":"Natrona County",
    "number":4363.31,
    "rate":55.45217701,
    "population":78686
  },
  {
    "state":"WY",
    "FIPS":56029,
    "county":"Park County",
    "number":370.96,
    "rate":12.87831974,
    "population":28805
  },
  {
    "state":"WY",
    "FIPS":56031,
    "county":"Platte County",
    "number":381.77,
    "rate":43.70578134,
    "population":8735
  },
  {
    "state":"WY",
    "FIPS":56033,
    "county":"Sheridan County",
    "number":1158.26,
    "rate":39.13304953,
    "population":29598
  },
  {
    "state":"WY",
    "FIPS":56035,
    "county":"Sublette County",
    "number":197.25,
    "rate":18.94448713,
    "population":10412
  },
  {
    "state":"WY",
    "FIPS":56037,
    "county":"Sweetwater County",
    "number":682.81,
    "rate":15.13487754,
    "population":45115
  },
  {
    "state":"WY",
    "FIPS":56039,
    "county":"Teton County",
    "number":448.4,
    "rate":20.65978621,
    "population":21704
  },
  {
    "state":"WY",
    "FIPS":56041,
    "county":"Uinta County",
    "number":571.27,
    "rate":27.21759017,
    "population":20989
  },
  {
    "state":"WY",
    "FIPS":56043,
    "county":"Washakie County",
    "number":364.24,
    "rate":43.15128539,
    "population":8441
  },
  {
    "state":"WY",
    "FIPS":56045,
    "county":"Weston County",
    "number":198.04,
    "rate":28.0867962,
    "population":7051
  }
];

function compareNum(a,b) {
  if (a.number > b.number)
    return -1;
  else if (a.number < b.number)
    return 1;
  else 
    return 0;
}

function compareRate(a,b) {
  if (a.rate > b.rate)
    return -1;
  else if (a.rate < b.rate)
    return 1;
  else 
    return 0;
}

var topCountiesNum2013 = (function(){
  return payments2013.sort(compareNum).slice(0,100);
})();

var topCountiesNum2014 = (function(){
  return payments2014.sort(compareNum).slice(0,100);
})();

var topCountiesRate2013 = (function(){
  return payments2013.sort(compareRate).slice(0,100);
})();

var topCountiesRate2014 = (function(){
  return payments2014.sort(compareRate).slice(0,100);
})();

    return {
      '2013': payments2013,
      '2014': payments2014,
      total2013: topCountiesNum2013,
      total2014: topCountiesNum2014,
      per_capita2013: topCountiesRate2013,
      per_capita2014: topCountiesRate2014
    };
  });


