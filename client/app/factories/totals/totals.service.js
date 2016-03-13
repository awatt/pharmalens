'use strict';

angular.module('foglightApp')
  .factory('totals', function () {

    var totals2013 = [
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
    "FIPS":1071,
    "county":"Jackson County",
    "number":2196.9800000000005,
    "rate":41.414944955512,
    "population":53048
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
    "FIPS":1099,
    "county":"Monroe County",
    "number":319.37999999999994,
    "rate":14.126232916095356,
    "population":22609
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
    "FIPS":4027,
    "county":"Yuma County",
    "number":14092.24,
    "rate":69.67250721828897,
    "population":202264
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
    "FIPS":6039,
    "county":"Madera County",
    "number":2203.92,
    "rate":14.476235516670608,
    "population":152244
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
    "FIPS":6063,
    "county":"Plumas County",
    "number":236.86999999999998,
    "rate":12.247039966909671,
    "population":19341
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
    "FIPS":8003,
    "county":"Alamosa County",
    "number":57.69,
    "rate":3.580338856823683,
    "population":16113
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
    "FIPS":8071,
    "county":"Las Animas County",
    "number":54.67,
    "rate":3.6480715334312026,
    "population":14986
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
    "state":"DE",
    "FIPS":10001,
    "county":"Kent County",
    "number":3982.2699999999986,
    "rate":23.75120775828134,
    "population":167666
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
    "FIPS":12023,
    "county":"Columbia County",
    "number":2155.9,
    "rate":31.73100981705253,
    "population":67943
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
    "FIPS":12059,
    "county":"Holmes County",
    "number":61.36,
    "rate":3.1107731305449935,
    "population":19725
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
    "FIPS":12079,
    "county":"Madison County",
    "number":145.84,
    "rate":7.710282844303463,
    "population":18915
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
    "FIPS":13055,
    "county":"Chattooga County",
    "number":177.81000000000003,
    "rate":6.925144103442905,
    "population":25676
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
    "FIPS":16021,
    "county":"Boundary County",
    "number":69.47,
    "rate":6.411628980156898,
    "population":10835
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
    "FIPS":18037,
    "county":"Dubois County",
    "number":1302.6,
    "rate":30.945027794935143,
    "population":42094
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
    "FIPS":18061,
    "county":"Harrison County",
    "number":117.31,
    "rate":3.000332489321978,
    "population":39099
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
    "FIPS":20175,
    "county":"Seward County",
    "number":12.86,
    "rate":0.5483307039611137,
    "population":23453
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
    "FIPS":21109,
    "county":"Jackson County",
    "number":14.87,
    "rate":1.1182132651526544,
    "population":13298
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
    "FIPS":22099,
    "county":"St Martin Parish",
    "number":636.7199999999999,
    "rate":12.078306396539949,
    "population":52716
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
    "FIPS":25011,
    "county":"Franklin County",
    "number":1075.34,
    "rate":15.030470759253047,
    "population":71544
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
    "FIPS":25021,
    "county":"Norfolk County",
    "number":9658.34,
    "rate":14.146252868916688,
    "population":682749
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
    "FIPS":24029,
    "county":"Kent County",
    "number":1175.88,
    "rate":58.79693984699236,
    "population":19999
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
    "FIPS":24047,
    "county":"Worcester County",
    "number":2787.7100000000005,
    "rate":54.037954563076696,
    "population":51588
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
    "FIPS":26123,
    "county":"Newaygo County",
    "number":665.9599999999999,
    "rate":13.885159084275049,
    "population":47962
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
    "FIPS":29187,
    "county":"St Francois County",
    "number":2647.4300000000003,
    "rate":40.21310852889801,
    "population":65835
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
    "FIPS":37033,
    "county":"Caswell County",
    "number":40.62,
    "rate":1.7521459690290297,
    "population":23183
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
    "FIPS":37065,
    "county":"Edgecombe County",
    "number":402.74,
    "rate":7.228703736942241,
    "population":55714
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
    "FIPS":37099,
    "county":"Jackson County",
    "number":2452.37,
    "rate":60.528433211570736,
    "population":40516
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
    "FIPS":37131,
    "county":"Northampton County",
    "number":53.1,
    "rate":2.491670968044672,
    "population":21311
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
    "FIPS":37149,
    "county":"Polk County",
    "number":386.38,
    "rate":19.08237850651916,
    "population":20248
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
    "FIPS":37181,
    "county":"Vance County",
    "number":1848.27,
    "rate":41.005235834405646,
    "population":45074
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
    "FIPS":31067,
    "county":"Gage County",
    "number":132.85999999999999,
    "rate":6.112721417069243,
    "population":21735
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
    "FIPS":34005,
    "county":"Burlington County",
    "number":30086.620000000014,
    "rate":66.68030416194787,
    "population":451207
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
    "FIPS":34033,
    "county":"Salem County",
    "number":999.9099999999999,
    "rate":15.227674220272903,
    "population":65664
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
    "FIPS":34041,
    "county":"Warren County",
    "number":4776.789999999999,
    "rate":44.414597861459775,
    "population":107550
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
    "FIPS":32027,
    "county":"Pershing County",
    "number":112.68,
    "rate":16.656319290465635,
    "population":6765
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
    "FIPS":36057,
    "county":"Montgomery County",
    "number":2026.6499999999999,
    "rate":40.621554989877936,
    "population":49891
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
    "FIPS":36069,
    "county":"Ontario County",
    "number":3388.32,
    "rate":31.135778872307583,
    "population":108824
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
    "FIPS":36083,
    "county":"Rensselaer County",
    "number":14232.959999999995,
    "rate":89.1945955430777,
    "population":159572
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
    "FIPS":39037,
    "county":"Darke County",
    "number":798.5300000000001,
    "rate":15.208357140136368,
    "population":52506
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
    "FIPS":39051,
    "county":"Fulton County",
    "number":577.35,
    "rate":13.579593564775616,
    "population":42516
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
    "FIPS":39059,
    "county":"Guernsey County",
    "number":273.34,
    "rate":6.865596664406097,
    "population":39813
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
    "FIPS":39097,
    "county":"Madison County",
    "number":1374.7999999999997,
    "rate":32.00260713703763,
    "population":42959
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
    "FIPS":39111,
    "county":"Monroe County",
    "number":302.18999999999994,
    "rate":20.72775910556279,
    "population":14579
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
    "FIPS":39121,
    "county":"Noble County",
    "number":33.72,
    "rate":2.3132331755505247,
    "population":14577
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
    "FIPS":40145,
    "county":"Wagoner County",
    "number":234.78999999999996,
    "rate":3.13065855967572,
    "population":74997
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
    "FIPS":41031,
    "county":"Jefferson County",
    "number":22.29,
    "rate":1.024403695022749,
    "population":21759
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
    "FIPS":42005,
    "county":"Armstrong County",
    "number":1286.12,
    "rate":18.813375852081567,
    "population":68362
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
    "FIPS":42019,
    "county":"Butler County",
    "number":6267.050000000002,
    "rate":33.85965670569295,
    "population":185089
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
    "FIPS":42047,
    "county":"Elk County",
    "number":1209.1800000000005,
    "rate":38.23735888435634,
    "population":31623
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
    "FIPS":42079,
    "county":"Luzerne County",
    "number":93134.43999999987,
    "rate":289.8891918475077,
    "population":321276
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
    "FIPS":42093,
    "county":"Montour County",
    "number":3925.6500000000005,
    "rate":212.30057865988863,
    "population":18491
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
    "FIPS":45043,
    "county":"Georgetown County",
    "number":817.8900000000002,
    "rate":13.567281534072062,
    "population":60284
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
    "FIPS":45061,
    "county":"Lee County",
    "number":33.11,
    "rate":1.7735283089613798,
    "population":18669
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
    "FIPS":45077,
    "county":"Pickens County",
    "number":3485.1599999999994,
    "rate":29.1264959550712,
    "population":119656
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
    "FIPS":46101,
    "county":"Moody County",
    "number":47.92,
    "rate":7.432914533891733,
    "population":6447
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
    "FIPS":48089,
    "county":"Colorado County",
    "number":1164.65,
    "rate":56.30408508581098,
    "population":20685
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
    "FIPS":48133,
    "county":"Eastland County",
    "number":416.23,
    "rate":22.617508014997558,
    "population":18403
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
    "FIPS":48185,
    "county":"Grimes County",
    "number":330.2000000000001,
    "rate":12.35593474030834,
    "population":26724
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
    "FIPS":48325,
    "county":"Medina County",
    "number":1530.8499999999997,
    "rate":32.66370793948833,
    "population":46867
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
    "state":"VA",
    "FIPS":51001,
    "county":"Accomack County",
    "number":98.49,
    "rate":2.9565034671149397,
    "population":33313
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
    "FIPS":51159,
    "county":"Richmond County",
    "number":19.69,
    "rate":2.1752098983650026,
    "population":9052
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
    "FIPS":51183,
    "county":"Sussex County",
    "number":51.8,
    "rate":4.337995142785361,
    "population":11941
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
    "FIPS":50005,
    "county":"Caledonia County",
    "number":58.43000000000001,
    "rate":1.879080237980383,
    "population":31095
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
    "FIPS":53005,
    "county":"Benton County",
    "number":64601.10999999996,
    "rate":354.1805193096338,
    "population":182396
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
    "FIPS":53065,
    "county":"Stevens County",
    "number":151.81,
    "rate":3.481082320568677,
    "population":43610
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
    "FIPS":55061,
    "county":"Kewaunee County",
    "number":176.05999999999997,
    "rate":8.539140556795033,
    "population":20618
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
  },
  {
    "state":"MS",
    "FIPS":28125,
    "county":"Sharkey County",
    "number":1537.2,
    "rate":321.11969918529354,
    "population":4787
  },
  {
    "state":"AL",
    "FIPS":1003,
    "county":"Baldwin County",
    "number":48470.000000000015,
    "rate":254.3542487707349,
    "population":190561
  },
  {
    "state":"AL",
    "FIPS":1033,
    "county":"Colbert County",
    "number":17435.98,
    "rate":320.0848126594827,
    "population":54473
  },
  {
    "state":"AL",
    "FIPS":1045,
    "county":"Dale County",
    "number":1831.95,
    "rate":36.41323792486583,
    "population":50310
  },
  {
    "state":"AL",
    "FIPS":1051,
    "county":"Elmore County",
    "number":39248.3,
    "rate":488.2115135834412,
    "population":80392
  },
  {
    "state":"AL",
    "FIPS":1053,
    "county":"Escambia County",
    "number":612.37,
    "rate":16.094669890664424,
    "population":38048
  },
  {
    "state":"AL",
    "FIPS":1069,
    "county":"Houston County",
    "number":44405.55,
    "rate":429.5870095193871,
    "population":103368
  },
  {
    "state":"AL",
    "FIPS":1073,
    "county":"Jefferson County",
    "number":489062.13000000035,
    "rate":743.3086101894822,
    "population":657953
  },
  {
    "state":"AL",
    "FIPS":1083,
    "county":"Limestone County",
    "number":33611.31,
    "rate":384.73163696301634,
    "population":87363
  },
  {
    "state":"AL",
    "FIPS":1089,
    "county":"Madison County",
    "number":48369.48999999992,
    "rate":141.07321184829124,
    "population":342868
  },
  {
    "state":"AL",
    "FIPS":1097,
    "county":"Mobile County",
    "number":120481.4100000001,
    "rate":291.04953436967816,
    "population":413955
  },
  {
    "state":"AL",
    "FIPS":1101,
    "county":"Montgomery County",
    "number":155843.03000000006,
    "rate":679.2736219957636,
    "population":229426
  },
  {
    "state":"AL",
    "FIPS":1117,
    "county":"Shelby County",
    "number":6974.489999999998,
    "rate":34.70534376974865,
    "population":200963
  },
  {
    "state":"AL",
    "FIPS":1115,
    "county":"St Clair County",
    "number":6953.599999999999,
    "rate":81.64856455116538,
    "population":85165
  },
  {
    "state":"AL",
    "FIPS":1123,
    "county":"Tallapoosa County",
    "number":6011.82,
    "rate":146.07396248420642,
    "population":41156
  },
  {
    "state":"AL",
    "FIPS":1125,
    "county":"Tuscaloosa County",
    "number":9495.069999999998,
    "rate":47.7996707661483,
    "population":198643
  },
  {
    "state":"AR",
    "FIPS":5005,
    "county":"Baxter County",
    "number":12235.4,
    "rate":297.86498527156317,
    "population":41077
  },
  {
    "state":"AR",
    "FIPS":5031,
    "county":"Craighead County",
    "number":36868.049999999996,
    "rate":369.03846731329384,
    "population":99903
  },
  {
    "state":"AR",
    "FIPS":5059,
    "county":"Hot Spring County",
    "number":1610.87,
    "rate":48.24986521296351,
    "population":33386
  },
  {
    "state":"AR",
    "FIPS":5119,
    "county":"Pulaski County",
    "number":428008.2900000002,
    "rate":1100.114353129868,
    "population":389058
  },
  {
    "state":"AR",
    "FIPS":5145,
    "county":"White County",
    "number":4452.540000000001,
    "rate":56.61063927172864,
    "population":78652
  },
  {
    "state":"AZ",
    "FIPS":4005,
    "county":"Coconino County",
    "number":1503.88,
    "rate":11.062089460018095,
    "population":135949
  },
  {
    "state":"AZ",
    "FIPS":4013,
    "county":"Maricopa County",
    "number":865286.3800000005,
    "rate":219.45608628034225,
    "population":3942868
  },
  {
    "state":"AZ",
    "FIPS":4019,
    "county":"Pima County",
    "number":134635.48000000019,
    "rate":135.57173842556713,
    "population":993094
  },
  {
    "state":"AZ",
    "FIPS":4025,
    "county":"Yavapai County",
    "number":42786.69000000001,
    "rate":201.34060204508992,
    "population":212509
  },
  {
    "state":"CA",
    "FIPS":6001,
    "county":"Alameda County",
    "number":347829.89,
    "rate":223.5052938186627,
    "population":1556249
  },
  {
    "state":"CA",
    "FIPS":6013,
    "county":"Contra Costa County",
    "number":586941.5299999999,
    "rate":543.7876311659338,
    "population":1079358
  },
  {
    "state":"CA",
    "FIPS":6019,
    "county":"Fresno County",
    "number":461398.19000000006,
    "rate":486.58376571332155,
    "population":948240
  },
  {
    "state":"CA",
    "FIPS":6029,
    "county":"Kern County",
    "number":43693.96999999994,
    "rate":51.01444012973693,
    "population":856502
  },
  {
    "state":"CA",
    "FIPS":6037,
    "county":"Los Angeles County",
    "number":3597873.4099999927,
    "rate":360.6938367505207,
    "population":9974868
  },
  {
    "state":"CA",
    "FIPS":6041,
    "county":"Marin County",
    "number":71918.47,
    "rate":280.774684453606,
    "population":256143
  },
  {
    "state":"CA",
    "FIPS":6047,
    "county":"Merced County",
    "number":15533.020000000002,
    "rate":59.33548014958955,
    "population":261783
  },
  {
    "state":"CA",
    "FIPS":6059,
    "county":"Orange County",
    "number":932379.189999999,
    "rate":301.7512871804943,
    "population":3089893
  },
  {
    "state":"CA",
    "FIPS":6061,
    "county":"Placer County",
    "number":10965.600000000002,
    "rate":30.338141797114925,
    "population":361446
  },
  {
    "state":"CA",
    "FIPS":6065,
    "county":"Riverside County",
    "number":183504.16999999975,
    "rate":80.90945005310792,
    "population":2268019
  },
  {
    "state":"CA",
    "FIPS":6067,
    "county":"Sacramento County",
    "number":140505.5000000001,
    "rate":96.98254589579726,
    "population":1448771
  },
  {
    "state":"CA",
    "FIPS":6071,
    "county":"San Bernardino County",
    "number":200080.24000000005,
    "rate":96.16232611812364,
    "population":2080651
  },
  {
    "state":"CA",
    "FIPS":6073,
    "county":"San Diego County",
    "number":2697692.330000001,
    "rate":847.4214090348946,
    "population":3183413
  },
  {
    "state":"CA",
    "FIPS":6075,
    "county":"San Francisco County",
    "number":257094.7000000003,
    "rate":309.868011102929,
    "population":829691
  },
  {
    "state":"CA",
    "FIPS":6077,
    "county":"San Joaquin County",
    "number":47587.45,
    "rate":67.82365474926422,
    "population":701635
  },
  {
    "state":"CA",
    "FIPS":6079,
    "county":"San Luis Obispo County",
    "number":36646.16,
    "rate":133.48787737498543,
    "population":274528
  },
  {
    "state":"CA",
    "FIPS":6081,
    "county":"San Mateo County",
    "number":98486.93000000007,
    "rate":132.95784744403562,
    "population":740738
  },
  {
    "state":"CA",
    "FIPS":6083,
    "county":"Santa Barbara County",
    "number":75410.63999999997,
    "rate":175.07717167214568,
    "population":430728
  },
  {
    "state":"CA",
    "FIPS":6085,
    "county":"Santa Clara County",
    "number":507708.62999999954,
    "rate":275.76404406500876,
    "population":1841098
  },
  {
    "state":"CA",
    "FIPS":6097,
    "county":"Sonoma County",
    "number":33075.419999999984,
    "rate":67.38561399076677,
    "population":490838
  },
  {
    "state":"CA",
    "FIPS":6099,
    "county":"Stanislaus County",
    "number":25033.429999999997,
    "rate":47.944454871737896,
    "population":522134
  },
  {
    "state":"CA",
    "FIPS":6111,
    "county":"Ventura County",
    "number":87040.69,
    "rate":104.18095792099355,
    "population":835476
  },
  {
    "state":"CO",
    "FIPS":8001,
    "county":"Adams County",
    "number":635244.77,
    "rate":1379.009297670915,
    "population":460653
  },
  {
    "state":"CO",
    "FIPS":8005,
    "county":"Arapahoe County",
    "number":90993.89000000001,
    "rate":152.6612487857583,
    "population":596051
  },
  {
    "state":"CO",
    "FIPS":8013,
    "county":"Boulder County",
    "number":83455.94,
    "rate":273.193401924166,
    "population":305483
  },
  {
    "state":"CO",
    "FIPS":8031,
    "county":"Denver County",
    "number":106683.87000000002,
    "rate":168.30612998289868,
    "population":633868
  },
  {
    "state":"CO",
    "FIPS":8041,
    "county":"El Paso County",
    "number":40505.030000000006,
    "rate":62.728085064207,
    "population":645724
  },
  {
    "state":"CO",
    "FIPS":8059,
    "county":"Jefferson County",
    "number":107247.77000000002,
    "rate":196.5609278235259,
    "population":545621
  },
  {
    "state":"CO",
    "FIPS":8069,
    "county":"Larimer County",
    "number":49565.01000000001,
    "rate":159.457622211141,
    "population":310835
  },
  {
    "state":"CO",
    "FIPS":8075,
    "county":"Logan County",
    "number":5246.05,
    "rate":231.99265908990404,
    "population":22613
  },
  {
    "state":"CO",
    "FIPS":8119,
    "county":"Teller County",
    "number":19958.54,
    "rate":853.8047570157427,
    "population":23376
  },
  {
    "state":"CT",
    "FIPS":9001,
    "county":"Fairfield County",
    "number":287354.82,
    "rate":307.2360658191577,
    "population":935290
  },
  {
    "state":"CT",
    "FIPS":9003,
    "county":"Hartford County",
    "number":210612.00999999986,
    "rate":234.61343347094441,
    "population":897698
  },
  {
    "state":"CT",
    "FIPS":9009,
    "county":"New Haven County",
    "number":706593.7700000001,
    "rate":817.7875215125385,
    "population":864031
  },
  {
    "state":"DC",
    "FIPS":11001,
    "county":"District of Columbia",
    "number":365662.78000000014,
    "rate":575.810626102293,
    "population":635040
  },
  {
    "state":"DE",
    "FIPS":10003,
    "county":"New Castle County",
    "number":89991.71999999996,
    "rate":164.8136610130379,
    "population":546021
  },
  {
    "state":"DE",
    "FIPS":10005,
    "county":"Sussex County",
    "number":35094.51999999999,
    "rate":172.7143518017264,
    "population":203194
  },
  {
    "state":"FL",
    "FIPS":12005,
    "county":"Bay County",
    "number":52823.4,
    "rate":307.12350430828985,
    "population":171994
  },
  {
    "state":"FL",
    "FIPS":12011,
    "county":"Broward County",
    "number":858474.3499999996,
    "rate":471.7480422008677,
    "population":1819773
  },
  {
    "state":"FL",
    "FIPS":12019,
    "county":"Clay County",
    "number":151544.46,
    "rate":779.9749863608757,
    "population":194294
  },
  {
    "state":"FL",
    "FIPS":12021,
    "county":"Collier County",
    "number":58249.19000000003,
    "rate":174.9892301268052,
    "population":332873
  },
  {
    "state":"FL",
    "FIPS":12031,
    "county":"Duval County",
    "number":1020160.3299999994,
    "rate":1158.4898051885366,
    "population":880595
  },
  {
    "state":"FL",
    "FIPS":12033,
    "county":"Escambia County",
    "number":73402.83000000006,
    "rate":241.2868244065035,
    "population":304214
  },
  {
    "state":"FL",
    "FIPS":12035,
    "county":"Flagler County",
    "number":12432.619999999999,
    "rate":126.20667952492131,
    "population":98510
  },
  {
    "state":"FL",
    "FIPS":12057,
    "county":"Hillsborough County",
    "number":369387.62000000005,
    "rate":288.12667702522253,
    "population":1282032
  },
  {
    "state":"FL",
    "FIPS":12061,
    "county":"Indian River County",
    "number":34514.380000000005,
    "rate":245.46526513427403,
    "population":140608
  },
  {
    "state":"FL",
    "FIPS":12069,
    "county":"Lake County",
    "number":83459.98000000001,
    "rate":275.0370077442742,
    "population":303450
  },
  {
    "state":"FL",
    "FIPS":12071,
    "county":"Lee County",
    "number":45520.80999999996,
    "rate":70.57621227061583,
    "population":644988
  },
  {
    "state":"FL",
    "FIPS":12073,
    "county":"Leon County",
    "number":49603.71000000005,
    "rate":174.75078737660928,
    "population":283854
  },
  {
    "state":"FL",
    "FIPS":12075,
    "county":"Levy County",
    "number":14130.140000000001,
    "rate":353.2799959997,
    "population":39997
  },
  {
    "state":"FL",
    "FIPS":12081,
    "county":"Manatee County",
    "number":193986.97999999995,
    "rate":580.6759042239522,
    "population":334071
  },
  {
    "state":"FL",
    "FIPS":12083,
    "county":"Marion County",
    "number":47083.23,
    "rate":140.75914438182934,
    "population":334495
  },
  {
    "state":"FL",
    "FIPS":12085,
    "county":"Martin County",
    "number":5715.570000000001,
    "rate":38.39921798368784,
    "population":148846
  },
  {
    "state":"FL",
    "FIPS":12086,
    "county":"Miami-Dade County",
    "number":2056012.1599999988,
    "rate":787.4544841744028,
    "population":2610960
  },
  {
    "state":"FL",
    "FIPS":12095,
    "county":"Orange County",
    "number":654837.0500000002,
    "rate":544.7551153171681,
    "population":1202076
  },
  {
    "state":"FL",
    "FIPS":12097,
    "county":"Osceola County",
    "number":124879.06,
    "rate":432.1523341523341,
    "population":288970
  },
  {
    "state":"FL",
    "FIPS":12099,
    "county":"Palm Beach County",
    "number":582818.7999999998,
    "rate":428.9807325559227,
    "population":1358613
  },
  {
    "state":"FL",
    "FIPS":12101,
    "county":"Pasco County",
    "number":125397.42999999996,
    "rate":266.4606123194872,
    "population":470604
  },
  {
    "state":"FL",
    "FIPS":12103,
    "county":"Pinellas County",
    "number":417798.57,
    "rate":453.0135806953533,
    "population":922265
  },
  {
    "state":"FL",
    "FIPS":12105,
    "county":"Polk County",
    "number":125274.07999999989,
    "rate":203.44495618451205,
    "population":615764
  },
  {
    "state":"FL",
    "FIPS":12115,
    "county":"Sarasota County",
    "number":95909.32,
    "rate":248.43755990156717,
    "population":386050
  },
  {
    "state":"FL",
    "FIPS":12117,
    "county":"Seminole County",
    "number":136585.23,
    "rate":316.6055794439101,
    "population":431405
  },
  {
    "state":"FL",
    "FIPS":12109,
    "county":"St Johns County",
    "number":19765.42,
    "rate":97.72089941858164,
    "population":202264
  },
  {
    "state":"FL",
    "FIPS":12127,
    "county":"Volusia County",
    "number":169543.63000000006,
    "rate":341.07092852027404,
    "population":497092
  },
  {
    "state":"GA",
    "FIPS":13051,
    "county":"Chatham County",
    "number":75080.90000000007,
    "rate":271.3342488525896,
    "population":276710
  },
  {
    "state":"GA",
    "FIPS":13057,
    "county":"Cherokee County",
    "number":3893.29,
    "rate":17.623554867505003,
    "population":220914
  },
  {
    "state":"GA",
    "FIPS":13063,
    "county":"Clayton County",
    "number":7285.9800000000005,
    "rate":27.364874761974516,
    "population":266253
  },
  {
    "state":"GA",
    "FIPS":13067,
    "county":"Cobb County",
    "number":104694.21999999984,
    "rate":147.86567349682764,
    "population":708036
  },
  {
    "state":"GA",
    "FIPS":13089,
    "county":"Dekalb County",
    "number":189665.60000000003,
    "rate":267.7742890058507,
    "population":708304
  },
  {
    "state":"GA",
    "FIPS":13111,
    "county":"Fannin County",
    "number":6798.47,
    "rate":289.70341330378835,
    "population":23467
  },
  {
    "state":"GA",
    "FIPS":13121,
    "county":"Fulton County",
    "number":1374350.1700000009,
    "rate":1405.3378700342562,
    "population":977950
  },
  {
    "state":"GA",
    "FIPS":13129,
    "county":"Gordon County",
    "number":12801.550000000001,
    "rate":229.66541083602442,
    "population":55740
  },
  {
    "state":"GA",
    "FIPS":13135,
    "county":"Gwinnett County",
    "number":177423.80000000016,
    "rate":211.16325347735912,
    "population":840221
  },
  {
    "state":"GA",
    "FIPS":13151,
    "county":"Henry County",
    "number":23686.489999999994,
    "rate":113.63533435999287,
    "population":208443
  },
  {
    "state":"GA",
    "FIPS":13153,
    "county":"Houston County",
    "number":29548.179999999993,
    "rate":202.1079343365253,
    "population":146200
  },
  {
    "state":"GA",
    "FIPS":13189,
    "county":"McDuffie County",
    "number":619.5600000000001,
    "rate":28.70858625642927,
    "population":21581
  },
  {
    "state":"GA",
    "FIPS":13215,
    "county":"Muscogee County",
    "number":46694.880000000005,
    "rate":233.4265475577507,
    "population":200041
  },
  {
    "state":"GA",
    "FIPS":13245,
    "county":"Richmond County",
    "number":68469.92999999992,
    "rate":339.01711179109316,
    "population":201966
  },
  {
    "state":"GA",
    "FIPS":13247,
    "county":"Rockdale County",
    "number":23263.78,
    "rate":271.50669903365855,
    "population":85684
  },
  {
    "state":"GA",
    "FIPS":13275,
    "county":"Thomas County",
    "number":7974.53,
    "rate":179.08219178082192,
    "population":44530
  },
  {
    "state":"GA",
    "FIPS":13299,
    "county":"Ware County",
    "number":2244.2299999999996,
    "rate":62.66348355391745,
    "population":35814
  },
  {
    "state":"HI",
    "FIPS":15003,
    "county":"Honolulu County",
    "number":397434.43000000005,
    "rate":406.8963988590688,
    "population":976746
  },
  {
    "state":"IA",
    "FIPS":19061,
    "county":"Dubuque County",
    "number":3668.28,
    "rate":38.55381672569813,
    "population":95147
  },
  {
    "state":"IA",
    "FIPS":19103,
    "county":"Johnson County",
    "number":46243.92,
    "rate":337.76135209950843,
    "population":136913
  },
  {
    "state":"IA",
    "FIPS":19113,
    "county":"Linn County",
    "number":42682.39000000002,
    "rate":198.33271377192096,
    "population":215206
  },
  {
    "state":"IA",
    "FIPS":19153,
    "county":"Polk County",
    "number":464129.82999999996,
    "rate":1045.3751261306713,
    "population":443984
  },
  {
    "state":"IA",
    "FIPS":19155,
    "county":"Pottawattamie County",
    "number":42277.84000000002,
    "rate":455.0016143266107,
    "population":92918
  },
  {
    "state":"ID",
    "FIPS":16001,
    "county":"Ada County",
    "number":50232.840000000004,
    "rate":122.85142006060295,
    "population":408891
  },
  {
    "state":"ID",
    "FIPS":16011,
    "county":"Bingham County",
    "number":14462.14,
    "rate":317.89813817510384,
    "population":45493
  },
  {
    "state":"ID",
    "FIPS":16019,
    "county":"Bonneville County",
    "number":385261.43000000005,
    "rate":3604.6166729041925,
    "population":106880
  },
  {
    "state":"ID",
    "FIPS":16027,
    "county":"Canyon County",
    "number":12999.86,
    "rate":67.05936365137009,
    "population":193856
  },
  {
    "state":"ID",
    "FIPS":16055,
    "county":"Kootenai County",
    "number":16881.88,
    "rate":118.63834093480538,
    "population":142297
  },
  {
    "state":"IL",
    "FIPS":17001,
    "county":"Adams County",
    "number":20007.449999999997,
    "rate":297.7343412848405,
    "population":67199
  },
  {
    "state":"IL",
    "FIPS":17031,
    "county":"Cook County",
    "number":1642454.9599999955,
    "rate":313.9044786844883,
    "population":5232340
  },
  {
    "state":"IL",
    "FIPS":17043,
    "county":"Dupage County",
    "number":295727.22000000044,
    "rate":319.03839867606445,
    "population":926933
  },
  {
    "state":"IL",
    "FIPS":17083,
    "county":"Jersey County",
    "number":3861.56,
    "rate":169.87330635227872,
    "population":22732
  },
  {
    "state":"IL",
    "FIPS":17111,
    "county":"McHenry County",
    "number":356195.18000000005,
    "rate":1157.323304361953,
    "population":307775
  },
  {
    "state":"IL",
    "FIPS":17143,
    "county":"Peoria County",
    "number":45768.490000000005,
    "rate":244.49893959710033,
    "population":187193
  },
  {
    "state":"IL",
    "FIPS":17167,
    "county":"Sangamon County",
    "number":104739.91,
    "rate":525.6787304200313,
    "population":199247
  },
  {
    "state":"IL",
    "FIPS":17163,
    "county":"St Clair County",
    "number":40645.980000000054,
    "rate":151.22116189519522,
    "population":268785
  },
  {
    "state":"IN",
    "FIPS":18003,
    "county":"Allen County",
    "number":25926.11,
    "rate":71.85091677013125,
    "population":360832
  },
  {
    "state":"IN",
    "FIPS":18011,
    "county":"Boone County",
    "number":14159.119999999997,
    "rate":239.67634910962144,
    "population":59076
  },
  {
    "state":"IN",
    "FIPS":18035,
    "county":"Delaware County",
    "number":63391.780000000006,
    "rate":540.382920321544,
    "population":117309
  },
  {
    "state":"IN",
    "FIPS":18039,
    "county":"Elkhart County",
    "number":17679.22000000001,
    "rate":88.73506795960574,
    "population":199236
  },
  {
    "state":"IN",
    "FIPS":18043,
    "county":"Floyd County",
    "number":18922.670000000002,
    "rate":251.35048615907763,
    "population":75284
  },
  {
    "state":"IN",
    "FIPS":18057,
    "county":"Hamilton County",
    "number":104828.25999999998,
    "rate":362.01353731394823,
    "population":289570
  },
  {
    "state":"IN",
    "FIPS":18059,
    "county":"Hancock County",
    "number":37810.95,
    "rate":535.2550218711513,
    "population":70641
  },
  {
    "state":"IN",
    "FIPS":18063,
    "county":"Hendricks County",
    "number":78135.81999999999,
    "rate":518.4101856397871,
    "population":150722
  },
  {
    "state":"IN",
    "FIPS":18081,
    "county":"Johnson County",
    "number":54485.819999999985,
    "rate":379.52814811718963,
    "population":143562
  },
  {
    "state":"IN",
    "FIPS":18091,
    "county":"La Porte County",
    "number":10529.990000000002,
    "rate":94.72993396786558,
    "population":111158
  },
  {
    "state":"IN",
    "FIPS":18095,
    "county":"Madison County",
    "number":36534.10999999999,
    "rate":280.4190077062417,
    "population":130284
  },
  {
    "state":"IN",
    "FIPS":18097,
    "county":"Marion County",
    "number":277109.8899999999,
    "rate":301.6716979776415,
    "population":918581
  },
  {
    "state":"IN",
    "FIPS":18105,
    "county":"Monroe County",
    "number":58144.369999999995,
    "rate":411.52793211078006,
    "population":141289
  },
  {
    "state":"IN",
    "FIPS":18127,
    "county":"Porter County",
    "number":15248.64,
    "rate":92.0483644112303,
    "population":165659
  },
  {
    "state":"IN",
    "FIPS":18157,
    "county":"Tippecanoe County",
    "number":38517.73000000002,
    "rate":216.17313952183196,
    "population":178180
  },
  {
    "state":"IN",
    "FIPS":18163,
    "county":"Vanderburgh County",
    "number":76615.31,
    "rate":423.80178226694176,
    "population":180781
  },
  {
    "state":"IN",
    "FIPS":18173,
    "county":"Warrick County",
    "number":48303.29,
    "rate":799.2072999222356,
    "population":60439
  },
  {
    "state":"KS",
    "FIPS":20035,
    "county":"Cowley County",
    "number":4374.27,
    "rate":120.62293183322303,
    "population":36264
  },
  {
    "state":"KS",
    "FIPS":20079,
    "county":"Harvey County",
    "number":41851.92999999999,
    "rate":1201.5713014268895,
    "population":34831
  },
  {
    "state":"KS",
    "FIPS":20091,
    "county":"Johnson County",
    "number":152735.38000000053,
    "rate":272.76415562707035,
    "population":559954
  },
  {
    "state":"KS",
    "FIPS":20173,
    "county":"Sedgwick County",
    "number":98769.55999999997,
    "rate":196.04097487004304,
    "population":503821
  },
  {
    "state":"KS",
    "FIPS":20177,
    "county":"Shawnee County",
    "number":516419.4199999999,
    "rate":2886.572798819478,
    "population":178904
  },
  {
    "state":"KS",
    "FIPS":20209,
    "county":"Wyandotte County",
    "number":21798.04,
    "rate":136.83383238231548,
    "population":159303
  },
  {
    "state":"KY",
    "FIPS":21059,
    "county":"Daviess County",
    "number":55117.67999999999,
    "rate":563.9964390598299,
    "population":97727
  },
  {
    "state":"KY",
    "FIPS":21067,
    "county":"Fayette County",
    "number":396106.22999999986,
    "rate":1297.641056048956,
    "population":305251
  },
  {
    "state":"KY",
    "FIPS":21093,
    "county":"Hardin County",
    "number":3114.51,
    "rate":29.09343122968277,
    "population":107052
  },
  {
    "state":"KY",
    "FIPS":21107,
    "county":"Hopkins County",
    "number":5175.719999999999,
    "rate":110.82437582972891,
    "population":46702
  },
  {
    "state":"KY",
    "FIPS":21111,
    "county":"Jefferson County",
    "number":766751.3500000006,
    "rate":1020.5294765128906,
    "population":751327
  },
  {
    "state":"KY",
    "FIPS":21117,
    "county":"Kenton County",
    "number":98141.25999999998,
    "rate":607.0430689486673,
    "population":161671
  },
  {
    "state":"KY",
    "FIPS":21145,
    "county":"McCracken County",
    "number":100065.69,
    "rate":1524.3459517099552,
    "population":65645
  },
  {
    "state":"KY",
    "FIPS":21173,
    "county":"Montgomery County",
    "number":5886.49,
    "rate":218.99144345238096,
    "population":26880
  },
  {
    "state":"LA",
    "FIPS":22001,
    "county":"Acadia Parish",
    "number":2360.78,
    "rate":38.15525350314354,
    "population":61873
  },
  {
    "state":"LA",
    "FIPS":22017,
    "county":"Caddo Parish",
    "number":64450.6,
    "rate":250.4608903811478,
    "population":257328
  },
  {
    "state":"LA",
    "FIPS":22019,
    "county":"Calcasieu Parish",
    "number":85644.61000000004,
    "rate":439.9860777897081,
    "population":194653
  },
  {
    "state":"LA",
    "FIPS":22033,
    "county":"East Baton Rouge Parish",
    "number":87925.90999999992,
    "rate":197.8993958982298,
    "population":444296
  },
  {
    "state":"LA",
    "FIPS":22051,
    "county":"Jefferson Parish",
    "number":411860.1099999997,
    "rate":947.7307944543513,
    "population":434575
  },
  {
    "state":"LA",
    "FIPS":22069,
    "county":"Natchitoches Parish",
    "number":21274.08,
    "rate":539.1165961328908,
    "population":39461
  },
  {
    "state":"LA",
    "FIPS":22071,
    "county":"Orleans Parish",
    "number":435400.24000000005,
    "rate":1176.226513978826,
    "population":370167
  },
  {
    "state":"LA",
    "FIPS":22073,
    "county":"Ouachita Parish",
    "number":16202.679999999997,
    "rate":104.29790794979078,
    "population":155350
  },
  {
    "state":"LA",
    "FIPS":22079,
    "county":"Rapides Parish",
    "number":13072.939999999999,
    "rate":98.95421274534293,
    "population":132111
  },
  {
    "state":"LA",
    "FIPS":22097,
    "county":"St Landry Parish",
    "number":7365.93,
    "rate":88.23269408142976,
    "population":83483
  },
  {
    "state":"LA",
    "FIPS":22101,
    "county":"St Mary Parish",
    "number":7589.859999999999,
    "rate":141.79763105780364,
    "population":53526
  },
  {
    "state":"LA",
    "FIPS":22103,
    "county":"St Tammany Parish",
    "number":180668.21999999994,
    "rate":754.841192248878,
    "population":239346
  },
  {
    "state":"MA",
    "FIPS":25005,
    "county":"Bristol County",
    "number":146715.87999999986,
    "rate":266.3856272638963,
    "population":550765
  },
  {
    "state":"MA",
    "FIPS":25009,
    "county":"Essex County",
    "number":101883.61,
    "rate":134.630802510165,
    "population":756763
  },
  {
    "state":"MA",
    "FIPS":25013,
    "county":"Hampden County",
    "number":97520.05000000002,
    "rate":209.02871999982858,
    "population":466539
  },
  {
    "state":"MA",
    "FIPS":25017,
    "county":"Middlesex County",
    "number":154371.0000000001,
    "rate":100.22841308096659,
    "population":1540192
  },
  {
    "state":"MA",
    "FIPS":25023,
    "county":"Plymouth County",
    "number":7737.23,
    "rate":15.503109746812108,
    "population":499076
  },
  {
    "state":"MA",
    "FIPS":25025,
    "county":"Suffolk County",
    "number":5328739.199999999,
    "rate":7109.687473315685,
    "population":749504
  },
  {
    "state":"MA",
    "FIPS":25027,
    "county":"Worcester County",
    "number":63779.17999999998,
    "rate":79.11744091855807,
    "population":806133
  },
  {
    "state":"MD",
    "FIPS":24510,
    "county":"Baltimore City",
    "number":322924.54999999976,
    "rate":518.3795649731114,
    "population":622950
  },
  {
    "state":"MD",
    "FIPS":24005,
    "county":"Baltimore County",
    "number":175779.89999999997,
    "rate":214.77826312734823,
    "population":818425
  },
  {
    "state":"MD",
    "FIPS":24015,
    "county":"Cecil County",
    "number":22333.859999999997,
    "rate":219.34218538233384,
    "population":101822
  },
  {
    "state":"MD",
    "FIPS":24027,
    "county":"Howard County",
    "number":37217.6,
    "rate":124.18906518511103,
    "population":299685
  },
  {
    "state":"MD",
    "FIPS":24031,
    "county":"Montgomery County",
    "number":628993.7700000003,
    "rate":624.9025331156918,
    "population":1006547
  },
  {
    "state":"MD",
    "FIPS":24033,
    "county":"Prince George's County",
    "number":229441.1700000001,
    "rate":259.618144663055,
    "population":883764
  },
  {
    "state":"MD",
    "FIPS":24045,
    "county":"Wicomico County",
    "number":24463.419999999987,
    "rate":243.48495103113294,
    "population":100472
  },
  {
    "state":"ME",
    "FIPS":23001,
    "county":"Androscoggin County",
    "number":56389.42,
    "rate":524.5234684575745,
    "population":107506
  },
  {
    "state":"ME",
    "FIPS":23005,
    "county":"Cumberland County",
    "number":207267.31999999995,
    "rate":729.6860411899312,
    "population":284050
  },
  {
    "state":"ME",
    "FIPS":23013,
    "county":"Knox County",
    "number":1232.25,
    "rate":31.111139163805294,
    "population":39608
  },
  {
    "state":"ME",
    "FIPS":23019,
    "county":"Penobscot County",
    "number":38100.79,
    "rate":248.03264067911363,
    "population":153612
  },
  {
    "state":"ME",
    "FIPS":23031,
    "county":"York County",
    "number":10926.24,
    "rate":54.8905578860114,
    "population":199055
  },
  {
    "state":"MI",
    "FIPS":26007,
    "county":"Alpena County",
    "number":40563.229999999996,
    "rate":1387.251367989056,
    "population":29240
  },
  {
    "state":"MI",
    "FIPS":26021,
    "county":"Berrien County",
    "number":12712.84,
    "rate":81.46279884913847,
    "population":156057
  },
  {
    "state":"MI",
    "FIPS":26037,
    "county":"Clinton County",
    "number":1111.03,
    "rate":14.537330227932902,
    "population":76426
  },
  {
    "state":"MI",
    "FIPS":26047,
    "county":"Emmet County",
    "number":61382.51999999999,
    "rate":1866.0136798905603,
    "population":32895
  },
  {
    "state":"MI",
    "FIPS":26049,
    "county":"Genesee County",
    "number":149998.84999999986,
    "rate":358.7991379186617,
    "population":418058
  },
  {
    "state":"MI",
    "FIPS":26055,
    "county":"Grand Traverse County",
    "number":10297.280000000006,
    "rate":115.69327565867094,
    "population":89005
  },
  {
    "state":"MI",
    "FIPS":26077,
    "county":"Kalamazoo County",
    "number":220854.50000000003,
    "rate":866.0281546545369,
    "population":255020
  },
  {
    "state":"MI",
    "FIPS":26099,
    "county":"Macomb County",
    "number":70208.26,
    "rate":82.81717487466824,
    "population":847750
  },
  {
    "state":"MI",
    "FIPS":26121,
    "county":"Muskegon County",
    "number":21634.68,
    "rate":127.15362100784034,
    "population":170146
  },
  {
    "state":"MI",
    "FIPS":26125,
    "county":"Oakland County",
    "number":679121.8299999997,
    "rate":556.3694761152221,
    "population":1220631
  },
  {
    "state":"MI",
    "FIPS":26137,
    "county":"Otsego County",
    "number":3772.59,
    "rate":156.8709717659778,
    "population":24049
  },
  {
    "state":"MI",
    "FIPS":26145,
    "county":"Saginaw County",
    "number":10421.459999999995,
    "rate":52.56249117356303,
    "population":198268
  },
  {
    "state":"MI",
    "FIPS":26161,
    "county":"Washtenaw County",
    "number":180738.41999999998,
    "rate":514.4830786134967,
    "population":351301
  },
  {
    "state":"MI",
    "FIPS":26163,
    "county":"Wayne County",
    "number":403655.59999999945,
    "rate":225.1574937108494,
    "population":1792770
  },
  {
    "state":"MI",
    "FIPS":26165,
    "county":"Wexford County",
    "number":11042.22,
    "rate":338.78075719457564,
    "population":32594
  },
  {
    "state":"MN",
    "FIPS":27019,
    "county":"Carver County",
    "number":1174.83,
    "rate":12.512834167642986,
    "population":93890
  },
  {
    "state":"MN",
    "FIPS":27035,
    "county":"Crow Wing County",
    "number":1036.6,
    "rate":16.493237867939538,
    "population":62850
  },
  {
    "state":"MN",
    "FIPS":27037,
    "county":"Dakota County",
    "number":50025.31,
    "rate":123.49885327612468,
    "population":405067
  },
  {
    "state":"MN",
    "FIPS":27053,
    "county":"Hennepin County",
    "number":838193.4099999999,
    "rate":707.4633752733613,
    "population":1184787
  },
  {
    "state":"MN",
    "FIPS":27109,
    "county":"Olmsted County",
    "number":166281.27999999997,
    "rate":1129.9660224523632,
    "population":147156
  },
  {
    "state":"MN",
    "FIPS":27123,
    "county":"Ramsey County",
    "number":55650.99,
    "rate":106.83232901852303,
    "population":520919
  },
  {
    "state":"MN",
    "FIPS":27137,
    "county":"St Louis County",
    "number":49722.13,
    "rate":248.00675355509335,
    "population":200487
  },
  {
    "state":"MN",
    "FIPS":27145,
    "county":"Stearns County",
    "number":29060.110000000004,
    "rate":191.63123326695072,
    "population":151646
  },
  {
    "state":"MO",
    "FIPS":29019,
    "county":"Boone County",
    "number":106248.75,
    "rate":630.2122876530321,
    "population":168592
  },
  {
    "state":"MO",
    "FIPS":29021,
    "county":"Buchanan County",
    "number":27972.07999999999,
    "rate":311.56595640405874,
    "population":89779
  },
  {
    "state":"MO",
    "FIPS":29051,
    "county":"Cole County",
    "number":118580.37000000002,
    "rate":1552.5664794375275,
    "population":76377
  },
  {
    "state":"MO",
    "FIPS":29077,
    "county":"Greene County",
    "number":264697.23999999993,
    "rate":943.0368454429503,
    "population":280686
  },
  {
    "state":"MO",
    "FIPS":29095,
    "county":"Jackson County",
    "number":92656.91999999998,
    "rate":136.7851902153855,
    "population":677390
  },
  {
    "state":"MO",
    "FIPS":29183,
    "county":"St Charles County",
    "number":56094.530000000035,
    "rate":152.10384743662408,
    "population":368791
  },
  {
    "state":"MO",
    "FIPS":29510,
    "county":"St Louis City",
    "number":448262.76,
    "rate":1404.0064646667126,
    "population":319274
  },
  {
    "state":"MO",
    "FIPS":29189,
    "county":"St Louis County",
    "number":248266.30999999965,
    "rate":248.06785571542733,
    "population":1000800
  },
  {
    "state":"MS",
    "FIPS":28033,
    "county":"DeSoto County",
    "number":6735.16,
    "rate":40.48667007303658,
    "population":166355
  },
  {
    "state":"MS",
    "FIPS":28049,
    "county":"Hinds County",
    "number":126318.85999999996,
    "rate":508.7389346672142,
    "population":248298
  },
  {
    "state":"MS",
    "FIPS":28109,
    "county":"Pearl River County",
    "number":18297.14,
    "rate":332.1317843528771,
    "population":55090
  },
  {
    "state":"MT",
    "FIPS":30013,
    "county":"Cascade County",
    "number":27123.56,
    "rate":331.72579954748363,
    "population":81765
  },
  {
    "state":"MT",
    "FIPS":30029,
    "county":"Flathead County",
    "number":27608.899999999998,
    "rate":301.1047855865288,
    "population":91692
  },
  {
    "state":"MT",
    "FIPS":30063,
    "county":"Missoula County",
    "number":17355.170000000002,
    "rate":156.27685630414035,
    "population":111054
  },
  {
    "state":"MT",
    "FIPS":30093,
    "county":"Silver Bow County",
    "number":22639.98,
    "rate":656.3644797495143,
    "population":34493
  },
  {
    "state":"MT",
    "FIPS":30111,
    "county":"Yellowstone County",
    "number":84978.06,
    "rate":559.4784314758242,
    "population":151888
  },
  {
    "state":"NC",
    "FIPS":37001,
    "county":"Alamance County",
    "number":53864.44,
    "rate":350.5156437086782,
    "population":153672
  },
  {
    "state":"NC",
    "FIPS":37019,
    "county":"Brunswick County",
    "number":6258.999999999999,
    "rate":55.8151563252421,
    "population":112138
  },
  {
    "state":"NC",
    "FIPS":37021,
    "county":"Buncombe County",
    "number":366336.89,
    "rate":1499.150403293461,
    "population":244363
  },
  {
    "state":"NC",
    "FIPS":37023,
    "county":"Burke County",
    "number":25165.12,
    "rate":278.88424668920044,
    "population":90235
  },
  {
    "state":"NC",
    "FIPS":37025,
    "county":"Cabarrus County",
    "number":76509.6799999999,
    "rate":414.71583363597387,
    "population":184487
  },
  {
    "state":"NC",
    "FIPS":37027,
    "county":"Caldwell County",
    "number":23408.949999999997,
    "rate":285.66311961535644,
    "population":81946
  },
  {
    "state":"NC",
    "FIPS":37031,
    "county":"Carteret County",
    "number":212217.7,
    "rate":3131.024358577141,
    "population":67779
  },
  {
    "state":"NC",
    "FIPS":37035,
    "county":"Catawba County",
    "number":156613.55,
    "rate":1013.5618503993062,
    "population":154518
  },
  {
    "state":"NC",
    "FIPS":37045,
    "county":"Cleveland County",
    "number":17896.56,
    "rate":183.52622673434857,
    "population":97515
  },
  {
    "state":"NC",
    "FIPS":37047,
    "county":"Columbus County",
    "number":23617.07,
    "rate":409.9901048538296,
    "population":57604
  },
  {
    "state":"NC",
    "FIPS":37063,
    "county":"Durham County",
    "number":406763.97,
    "rate":1440.8517293169161,
    "population":282308
  },
  {
    "state":"NC",
    "FIPS":37067,
    "county":"Forsyth County",
    "number":58956.35,
    "rate":164.69772353317484,
    "population":357967
  },
  {
    "state":"NC",
    "FIPS":37081,
    "county":"Guilford County",
    "number":211975.7799999999,
    "rate":423.19488754107635,
    "population":500894
  },
  {
    "state":"NC",
    "FIPS":37097,
    "county":"Iredell County",
    "number":87821.62000000004,
    "rate":539.6967871979551,
    "population":162724
  },
  {
    "state":"NC",
    "FIPS":37101,
    "county":"Johnston County",
    "number":25396.449999999997,
    "rate":145.21135780162726,
    "population":174893
  },
  {
    "state":"NC",
    "FIPS":37119,
    "county":"Mecklenburg County",
    "number":150735.02999999994,
    "rate":155.59279257704796,
    "population":968779
  },
  {
    "state":"NC",
    "FIPS":37127,
    "county":"Nash County",
    "number":45488.390000000014,
    "rate":477.2176877885021,
    "population":95320
  },
  {
    "state":"NC",
    "FIPS":37129,
    "county":"New Hanover County",
    "number":78835.11,
    "rate":376.959796111584,
    "population":209134
  },
  {
    "state":"NC",
    "FIPS":37133,
    "county":"Onslow County",
    "number":5313.45,
    "rate":28.89503393369877,
    "population":183888
  },
  {
    "state":"NC",
    "FIPS":37135,
    "county":"Orange County",
    "number":167946.98,
    "rate":1219.4105773698884,
    "population":137728
  },
  {
    "state":"NC",
    "FIPS":37139,
    "county":"Pasquotank County",
    "number":9073.67,
    "rate":223.88644887485196,
    "population":40528
  },
  {
    "state":"NC",
    "FIPS":37147,
    "county":"Pitt County",
    "number":294295.74000000005,
    "rate":1702.164550738888,
    "population":172895
  },
  {
    "state":"NC",
    "FIPS":37151,
    "county":"Randolph County",
    "number":51648.59,
    "rate":362.8893526130152,
    "population":142326
  },
  {
    "state":"NC",
    "FIPS":37159,
    "county":"Rowan County",
    "number":107286.31,
    "rate":777.9161802559548,
    "population":137915
  },
  {
    "state":"NC",
    "FIPS":37179,
    "county":"Union County",
    "number":9003.259999999998,
    "rate":43.203274582159665,
    "population":208393
  },
  {
    "state":"NC",
    "FIPS":37183,
    "county":"Wake County",
    "number":312163.49999999977,
    "rate":327.6925208715832,
    "population":952611
  },
  {
    "state":"NC",
    "FIPS":37189,
    "county":"Watauga County",
    "number":7963.200000000001,
    "rate":152.95021511985252,
    "population":52064
  },
  {
    "state":"ND",
    "FIPS":38015,
    "county":"Burleigh County",
    "number":26850.039999999997,
    "rate":311.9449769381804,
    "population":86073
  },
  {
    "state":"ND",
    "FIPS":38017,
    "county":"Cass County",
    "number":108176.49,
    "rate":689.7295315578397,
    "population":156839
  },
  {
    "state":"ND",
    "FIPS":38035,
    "county":"Grand Forks County",
    "number":58876.22000000001,
    "rate":869.6506698571662,
    "population":67701
  },
  {
    "state":"ND",
    "FIPS":38101,
    "county":"Ward County",
    "number":6441.360000000001,
    "rate":98.3714111178986,
    "population":65480
  },
  {
    "state":"NE",
    "FIPS":31053,
    "county":"Dodge County",
    "number":12928.88,
    "rate":352.5737660212707,
    "population":36670
  },
  {
    "state":"NE",
    "FIPS":31055,
    "county":"Douglas County",
    "number":810769.77,
    "rate":1525.9853870346635,
    "population":531309
  },
  {
    "state":"NE",
    "FIPS":31079,
    "county":"Hall County",
    "number":53848.42,
    "rate":892.4905941824811,
    "population":60335
  },
  {
    "state":"NE",
    "FIPS":31109,
    "county":"Lancaster County",
    "number":15679.74,
    "rate":53.4289482023655,
    "population":293469
  },
  {
    "state":"NE",
    "FIPS":31111,
    "county":"Lincoln County",
    "number":3594.25,
    "rate":99.75991562352549,
    "population":36029
  },
  {
    "state":"NH",
    "FIPS":33009,
    "county":"Grafton County",
    "number":34762.64,
    "rate":389.0962817040138,
    "population":89342
  },
  {
    "state":"NH",
    "FIPS":33011,
    "county":"Hillsborough County",
    "number":251815.23,
    "rate":625.4725037257824,
    "population":402600
  },
  {
    "state":"NH",
    "FIPS":33017,
    "county":"Strafford County",
    "number":47370.03999999999,
    "rate":380.3508828276177,
    "population":124543
  },
  {
    "state":"NJ",
    "FIPS":34003,
    "county":"Bergen County",
    "number":514074.60000000044,
    "rate":558.5096258311247,
    "population":920440
  },
  {
    "state":"NJ",
    "FIPS":34007,
    "county":"Camden County",
    "number":112456.07,
    "rate":219.1681803299136,
    "population":513104
  },
  {
    "state":"NJ",
    "FIPS":34013,
    "county":"Essex County",
    "number":171642.14000000004,
    "rate":217.702558899071,
    "population":788425
  },
  {
    "state":"NJ",
    "FIPS":34019,
    "county":"Hunterdon County",
    "number":218740.71000000028,
    "rate":1727.9052554248676,
    "population":126593
  },
  {
    "state":"NJ",
    "FIPS":34021,
    "county":"Mercer County",
    "number":105951.61999999994,
    "rate":287.0874146812008,
    "population":369057
  },
  {
    "state":"NJ",
    "FIPS":34023,
    "county":"Middlesex County",
    "number":87170.73999999993,
    "rate":105.73237576217747,
    "population":824447
  },
  {
    "state":"NJ",
    "FIPS":34025,
    "county":"Monmouth County",
    "number":122006.9700000001,
    "rate":193.91548628682608,
    "population":629176
  },
  {
    "state":"NJ",
    "FIPS":34027,
    "county":"Morris County",
    "number":73597.59000000003,
    "rate":147.8962080260435,
    "population":497630
  },
  {
    "state":"NJ",
    "FIPS":34029,
    "county":"Ocean County",
    "number":73839.07999999999,
    "rate":127.15332464280732,
    "population":580709
  },
  {
    "state":"NJ",
    "FIPS":34031,
    "county":"Passaic County",
    "number":39186.50000000006,
    "rate":77.59503220709182,
    "population":505013
  },
  {
    "state":"NJ",
    "FIPS":34035,
    "county":"Somerset County",
    "number":53493.159999999996,
    "rate":162.7460441569742,
    "population":328691
  },
  {
    "state":"NJ",
    "FIPS":34039,
    "county":"Union County",
    "number":127953.35999999993,
    "rate":234.7763765571071,
    "population":545001
  },
  {
    "state":"NM",
    "FIPS":35001,
    "county":"Bernalillo County",
    "number":231715.01,
    "rate":344.30420731209,
    "population":672995
  },
  {
    "state":"NM",
    "FIPS":35015,
    "county":"Eddy County",
    "number":9323.210000000001,
    "rate":171.47710134265222,
    "population":54370
  },
  {
    "state":"NV",
    "FIPS":32003,
    "county":"Clark County",
    "number":893895.8700000006,
    "rate":447.2507237399723,
    "population":1998646
  },
  {
    "state":"NV",
    "FIPS":32023,
    "county":"Nye County",
    "number":3182.6,
    "rate":74.14672786151947,
    "population":42923
  },
  {
    "state":"NV",
    "FIPS":32031,
    "county":"Washoe County",
    "number":69984.25000000003,
    "rate":163.10075369506353,
    "population":429086
  },
  {
    "state":"NY",
    "FIPS":36001,
    "county":"Albany County",
    "number":767909.6500000007,
    "rate":2507.984199146926,
    "population":306186
  },
  {
    "state":"NY",
    "FIPS":36005,
    "county":"Bronx County",
    "number":269704.78000000014,
    "rate":190.70853647757616,
    "population":1414225
  },
  {
    "state":"NY",
    "FIPS":36007,
    "county":"Broome County",
    "number":43004.52,
    "rate":216.46207278401369,
    "population":198670
  },
  {
    "state":"NY",
    "FIPS":36013,
    "county":"Chautauqua County",
    "number":20792.819999999996,
    "rate":155.80047655442158,
    "population":133458
  },
  {
    "state":"NY",
    "FIPS":36027,
    "county":"Dutchess County",
    "number":70683.56000000006,
    "rate":237.71964754153515,
    "population":297340
  },
  {
    "state":"NY",
    "FIPS":36029,
    "county":"Erie County",
    "number":480232.47999999975,
    "rate":521.875538602811,
    "population":920205
  },
  {
    "state":"NY",
    "FIPS":36055,
    "county":"Monroe County",
    "number":296905.2099999998,
    "rate":396.6234961567334,
    "population":748582
  },
  {
    "state":"NY",
    "FIPS":36059,
    "county":"Nassau County",
    "number":347155.14000000304,
    "rate":256.9762599348764,
    "population":1350923
  },
  {
    "state":"NY",
    "FIPS":36061,
    "county":"New York County",
    "number":1103945.42,
    "rate":679.268261467218,
    "population":1625198
  },
  {
    "state":"NY",
    "FIPS":36067,
    "county":"Onondaga County",
    "number":109209.28000000003,
    "rate":233.76174595767822,
    "population":467182
  },
  {
    "state":"NY",
    "FIPS":36071,
    "county":"Orange County",
    "number":63305.39000000003,
    "rate":169.2947188823757,
    "population":373936
  },
  {
    "state":"NY",
    "FIPS":36081,
    "county":"Queens County",
    "number":327864.81000000157,
    "rate":143.76006461347086,
    "population":2280639
  },
  {
    "state":"NY",
    "FIPS":36085,
    "county":"Richmond County",
    "number":172619.60000000027,
    "rate":366.5138637343231,
    "population":470977
  },
  {
    "state":"NY",
    "FIPS":36087,
    "county":"Rockland County",
    "number":128939.09000000011,
    "rate":405.6920947062066,
    "population":317825
  },
  {
    "state":"NY",
    "FIPS":36091,
    "county":"Saratoga County",
    "number":72314.34999999999,
    "rate":325.13544621942054,
    "population":222413
  },
  {
    "state":"NY",
    "FIPS":36103,
    "county":"Suffolk County",
    "number":366069.8800000007,
    "rate":243.97794753742662,
    "population":1500422
  },
  {
    "state":"NY",
    "FIPS":36111,
    "county":"Ulster County",
    "number":12151.950000000003,
    "rate":66.8762520087173,
    "population":181708
  },
  {
    "state":"NY",
    "FIPS":36119,
    "county":"Westchester County",
    "number":123577.2400000001,
    "rate":128.4788360751013,
    "population":961849
  },
  {
    "state":"OH",
    "FIPS":39009,
    "county":"Athens County",
    "number":19096.42,
    "rate":295.4364305826294,
    "population":64638
  },
  {
    "state":"OH",
    "FIPS":39023,
    "county":"Clark County",
    "number":27709.829999999994,
    "rate":201.97552371094943,
    "population":137194
  },
  {
    "state":"OH",
    "FIPS":39025,
    "county":"Clermont County",
    "number":29808.32,
    "rate":149.6258890969235,
    "population":199219
  },
  {
    "state":"OH",
    "FIPS":39035,
    "county":"Cuyahoga County",
    "number":3566958.970000001,
    "rate":2817.750189787573,
    "population":1265889
  },
  {
    "state":"OH",
    "FIPS":39039,
    "county":"Defiance County",
    "number":46803.600000000006,
    "rate":1205.7189963419034,
    "population":38818
  },
  {
    "state":"OH",
    "FIPS":39043,
    "county":"Erie County",
    "number":19020.81,
    "rate":248.82669213259732,
    "population":76442
  },
  {
    "state":"OH",
    "FIPS":39049,
    "county":"Franklin County",
    "number":529997.5399999993,
    "rate":442.7952204629148,
    "population":1196936
  },
  {
    "state":"OH",
    "FIPS":39053,
    "county":"Gallia County",
    "number":71042.60999999999,
    "rate":2306.203863009251,
    "population":30805
  },
  {
    "state":"OH",
    "FIPS":39057,
    "county":"Greene County",
    "number":13527.09,
    "rate":82.40939413323585,
    "population":164145
  },
  {
    "state":"OH",
    "FIPS":39061,
    "county":"Hamilton County",
    "number":367243.3199999996,
    "rate":457.70677567909416,
    "population":802355
  },
  {
    "state":"OH",
    "FIPS":39067,
    "county":"Harrison County",
    "number":29501.599999999995,
    "rate":1879.8011979100288,
    "population":15694
  },
  {
    "state":"OH",
    "FIPS":39085,
    "county":"Lake County",
    "number":186463.2699999999,
    "rate":812.9543304340239,
    "population":229365
  },
  {
    "state":"OH",
    "FIPS":39093,
    "county":"Lorain County",
    "number":43733.22999999998,
    "rate":144.95841827010716,
    "population":301695
  },
  {
    "state":"OH",
    "FIPS":39095,
    "county":"Lucas County",
    "number":172613.13,
    "rate":394.65615397278316,
    "population":437376
  },
  {
    "state":"OH",
    "FIPS":39099,
    "county":"Mahoning County",
    "number":29092.109999999997,
    "rate":123.38301093783795,
    "population":235787
  },
  {
    "state":"OH",
    "FIPS":39101,
    "county":"Marion County",
    "number":37836.58,
    "rate":571.2475277421303,
    "population":66235
  },
  {
    "state":"OH",
    "FIPS":39109,
    "county":"Miami County",
    "number":2450.54,
    "rate":23.7644252215908,
    "population":103118
  },
  {
    "state":"OH",
    "FIPS":39113,
    "county":"Montgomery County",
    "number":170753.21999999988,
    "rate":319.18219866123565,
    "population":534971
  },
  {
    "state":"OH",
    "FIPS":39119,
    "county":"Muskingum County",
    "number":32828.66,
    "rate":382.44903189729496,
    "population":85838
  },
  {
    "state":"OH",
    "FIPS":39123,
    "county":"Ottawa County",
    "number":8468.99,
    "rate":204.75786368801528,
    "population":41361
  },
  {
    "state":"OH",
    "FIPS":39151,
    "county":"Stark County",
    "number":58621.35000000008,
    "rate":156.38865768159576,
    "population":374844
  },
  {
    "state":"OH",
    "FIPS":39153,
    "county":"Summit County",
    "number":103941.04999999983,
    "rate":192.1748784821404,
    "population":540867
  },
  {
    "state":"OH",
    "FIPS":39165,
    "county":"Warren County",
    "number":136411.11000000004,
    "rate":626.7366404322479,
    "population":217653
  },
  {
    "state":"OH",
    "FIPS":39173,
    "county":"Wood County",
    "number":10720.9,
    "rate":83.32802213603401,
    "population":128659
  },
  {
    "state":"OK",
    "FIPS":40017,
    "county":"Canadian County",
    "number":13823.820000000003,
    "rate":112.75086660413525,
    "population":122605
  },
  {
    "state":"OK",
    "FIPS":40027,
    "county":"Cleveland County",
    "number":75852.19,
    "rate":285.0278819488806,
    "population":266122
  },
  {
    "state":"OK",
    "FIPS":40109,
    "county":"Oklahoma County",
    "number":410937.4899999994,
    "rate":553.3505557912022,
    "population":742635
  },
  {
    "state":"OK",
    "FIPS":40143,
    "county":"Tulsa County",
    "number":156407.22000000003,
    "rate":254.54418513817012,
    "population":614460
  },
  {
    "state":"OK",
    "FIPS":40147,
    "county":"Washington County",
    "number":9782.29,
    "rate":189.17598143492555,
    "population":51710
  },
  {
    "state":"OR",
    "FIPS":41003,
    "county":"Benton County",
    "number":12575.89,
    "rate":145.5879833294744,
    "population":86380
  },
  {
    "state":"OR",
    "FIPS":41017,
    "county":"Deschutes County",
    "number":74232.57,
    "rate":458.9453216771976,
    "population":161746
  },
  {
    "state":"OR",
    "FIPS":41029,
    "county":"Jackson County",
    "number":48363.7,
    "rate":234.3622645532387,
    "population":206363
  },
  {
    "state":"OR",
    "FIPS":41033,
    "county":"Josephine County",
    "number":1032.4099999999999,
    "rate":12.471430987412722,
    "population":82782
  },
  {
    "state":"OR",
    "FIPS":41039,
    "county":"Lane County",
    "number":22670.5,
    "rate":63.95406241801394,
    "population":354481
  },
  {
    "state":"OR",
    "FIPS":41051,
    "county":"Multnomah County",
    "number":519663.81999999995,
    "rate":684.8341826817269,
    "population":758817
  },
  {
    "state":"OR",
    "FIPS":41067,
    "county":"Washington County",
    "number":51197.59999999999,
    "rate":93.47113669516574,
    "population":547737
  },
  {
    "state":"PA",
    "FIPS":42003,
    "county":"Allegheny County",
    "number":576885.800000001,
    "rate":468.8668487779829,
    "population":1230383
  },
  {
    "state":"PA",
    "FIPS":42007,
    "county":"Beaver County",
    "number":34844.619999999995,
    "rate":204.69863239026222,
    "population":170224
  },
  {
    "state":"PA",
    "FIPS":42011,
    "county":"Berks County",
    "number":37964.92999999999,
    "rate":91.86871448898007,
    "population":413252
  },
  {
    "state":"PA",
    "FIPS":42013,
    "county":"Blair County",
    "number":113763.20000000001,
    "rate":895.780281734502,
    "population":126999
  },
  {
    "state":"PA",
    "FIPS":42015,
    "county":"Bradford County",
    "number":49028.94,
    "rate":780.5540254405935,
    "population":62813
  },
  {
    "state":"PA",
    "FIPS":42017,
    "county":"Bucks County",
    "number":110468.48999999999,
    "rate":176.4139740557563,
    "population":626189
  },
  {
    "state":"PA",
    "FIPS":42021,
    "county":"Cambria County",
    "number":29981.730000000003,
    "rate":211.83860779617189,
    "population":141531
  },
  {
    "state":"PA",
    "FIPS":42039,
    "county":"Crawford County",
    "number":39772.06,
    "rate":453.70819073693815,
    "population":87660
  },
  {
    "state":"PA",
    "FIPS":42041,
    "county":"Cumberland County",
    "number":89030.34000000001,
    "rate":372.2035301298506,
    "population":239198
  },
  {
    "state":"PA",
    "FIPS":42043,
    "county":"Dauphin County",
    "number":25680.74999999999,
    "rate":95.16429071693521,
    "population":269857
  },
  {
    "state":"PA",
    "FIPS":42045,
    "county":"Delaware County",
    "number":239751.7299999997,
    "rate":427.42893766624536,
    "population":560916
  },
  {
    "state":"PA",
    "FIPS":42049,
    "county":"Erie County",
    "number":56305.14999999997,
    "rate":200.5162018653779,
    "population":280801
  },
  {
    "state":"PA",
    "FIPS":42051,
    "county":"Fayette County",
    "number":22974.359999999997,
    "rate":169.57875390281885,
    "population":135479
  },
  {
    "state":"PA",
    "FIPS":42055,
    "county":"Franklin County",
    "number":12914.269999999999,
    "rate":85.19265909795566,
    "population":151589
  },
  {
    "state":"PA",
    "FIPS":42063,
    "county":"Indiana County",
    "number":63700.84999999999,
    "rate":722.1581698012673,
    "population":88209
  },
  {
    "state":"PA",
    "FIPS":42071,
    "county":"Lancaster County",
    "number":18126.560000000012,
    "rate":34.41102880595941,
    "population":526766
  },
  {
    "state":"PA",
    "FIPS":42077,
    "county":"Lehigh County",
    "number":90766.61999999994,
    "rate":255.48702532447226,
    "population":355269
  },
  {
    "state":"PA",
    "FIPS":42081,
    "county":"Lycoming County",
    "number":16998.61,
    "rate":144.92062815441275,
    "population":117296
  },
  {
    "state":"PA",
    "FIPS":42091,
    "county":"Montgomery County",
    "number":266407.0799999997,
    "rate":329.0528125609852,
    "population":809618
  },
  {
    "state":"PA",
    "FIPS":42095,
    "county":"Northampton County",
    "number":27374.97000000001,
    "rate":91.44406623397016,
    "population":299363
  },
  {
    "state":"PA",
    "FIPS":42101,
    "county":"Philadelphia County",
    "number":2433472.1100000003,
    "rate":1569.5810038209595,
    "population":1550396
  },
  {
    "state":"PA",
    "FIPS":42125,
    "county":"Washington County",
    "number":13717.539999999994,
    "rate":65.8133387068142,
    "population":208431
  },
  {
    "state":"PA",
    "FIPS":42133,
    "county":"York County",
    "number":26442.969999999994,
    "rate":60.41359473062537,
    "population":437699
  },
  {
    "state":"PR",
    "FIPS":72031,
    "county":"Carolina",
    "number":31094.989999999998,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72127,
    "county":"San Juan",
    "number":455214.03000000067,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72137,
    "county":"Toa Baja",
    "number":127571.29999999999,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72139,
    "county":"Trujillo Alto",
    "number":4756.27,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72091,
    "county":"Manat� Municipio",
    "number":522788.5700000001,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72007,
    "county":"Aguas Buenas Municipio",
    "number":11620.65,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72113,
    "county":"",
    "number":145090.4300000001,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72025,
    "county":"Caguas Municipio",
    "number":46697.639999999985,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72041,
    "county":"Cidra Municipio",
    "number":23082,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72119,
    "county":"R�o Grande Municipio",
    "number":8038.990000000001,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72151,
    "county":"Yabucoa Municipio",
    "number":56065.840000000004,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72087,
    "county":"Lo�za Municipio",
    "number":1752.69,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72077,
    "county":"Juncos Municipio",
    "number":4811.1,
    "rate":null,
    "population":null
  },
  {
    "state":"RI",
    "FIPS":44007,
    "county":"Providence County",
    "number":94761.24999999994,
    "rate":150.56572625236734,
    "population":629368
  },
  {
    "state":"SC",
    "FIPS":45007,
    "county":"Anderson County",
    "number":10346.429999999997,
    "rate":54.63749900984868,
    "population":189365
  },
  {
    "state":"SC",
    "FIPS":45019,
    "county":"Charleston County",
    "number":208990.7800000001,
    "rate":571.8380067419669,
    "population":365472
  },
  {
    "state":"SC",
    "FIPS":45035,
    "county":"Dorchester County",
    "number":18709.67,
    "rate":131.32357689338104,
    "population":142470
  },
  {
    "state":"SC",
    "FIPS":45041,
    "county":"Florence County",
    "number":80665.37999999987,
    "rate":584.277705345501,
    "population":138060
  },
  {
    "state":"SC",
    "FIPS":45045,
    "county":"Greenville County",
    "number":183591.67,
    "rate":393.33374039652244,
    "population":466758
  },
  {
    "state":"SC",
    "FIPS":45047,
    "county":"Greenwood County",
    "number":4330.33,
    "rate":62.00979479615655,
    "population":69833
  },
  {
    "state":"SC",
    "FIPS":45051,
    "county":"Horry County",
    "number":130925.98999999995,
    "rate":464.29302457533936,
    "population":281990
  },
  {
    "state":"SC",
    "FIPS":45057,
    "county":"Lancaster County",
    "number":12012.43,
    "rate":151.68550250653468,
    "population":79193
  },
  {
    "state":"SC",
    "FIPS":45059,
    "county":"Laurens County",
    "number":16202.590000000002,
    "rate":244.53786712547924,
    "population":66258
  },
  {
    "state":"SC",
    "FIPS":45063,
    "county":"Lexington County",
    "number":26428.62,
    "rate":97.84246651413848,
    "population":270114
  },
  {
    "state":"SC",
    "FIPS":45075,
    "county":"Orangeburg County",
    "number":14991.850000000004,
    "rate":163.9725907534809,
    "population":91429
  },
  {
    "state":"SC",
    "FIPS":45079,
    "county":"Richland County",
    "number":140066.36000000004,
    "rate":355.7900512348957,
    "population":393677
  },
  {
    "state":"SC",
    "FIPS":45083,
    "county":"Spartanburg County",
    "number":174631.47999999995,
    "rate":605.4742199770473,
    "population":288421
  },
  {
    "state":"SC",
    "FIPS":45085,
    "county":"Sumter County",
    "number":20891.07,
    "rate":193.32842865074957,
    "population":108060
  },
  {
    "state":"SD",
    "FIPS":46099,
    "county":"Minnehaha County",
    "number":66968.33000000003,
    "rate":381.5620103583253,
    "population":175511
  },
  {
    "state":"SD",
    "FIPS":46103,
    "county":"Pennington County",
    "number":105440.61000000002,
    "rate":1008.4992157012779,
    "population":104552
  },
  {
    "state":"TN",
    "FIPS":47001,
    "county":"Anderson County",
    "number":11628.449999999999,
    "rate":154.32786102005332,
    "population":75349
  },
  {
    "state":"TN",
    "FIPS":47017,
    "county":"Carroll County",
    "number":4282.51,
    "rate":149.6177898892499,
    "population":28623
  },
  {
    "state":"TN",
    "FIPS":47031,
    "county":"Coffee County",
    "number":8524.84,
    "rate":160.43133786250635,
    "population":53137
  },
  {
    "state":"TN",
    "FIPS":47035,
    "county":"Cumberland County",
    "number":5871.49,
    "rate":102.94177463751599,
    "population":57037
  },
  {
    "state":"TN",
    "FIPS":47037,
    "county":"Davidson County",
    "number":619083.8499999994,
    "rate":953.6955704606994,
    "population":649142
  },
  {
    "state":"TN",
    "FIPS":47065,
    "county":"Hamilton County",
    "number":394946.3100000001,
    "rate":1142.5960128103875,
    "population":345657
  },
  {
    "state":"TN",
    "FIPS":47077,
    "county":"Henderson County",
    "number":51477.41,
    "rate":1837.2322352689248,
    "population":28019
  },
  {
    "state":"TN",
    "FIPS":47093,
    "county":"Knox County",
    "number":166677.96000000008,
    "rate":377.838036342534,
    "population":441136
  },
  {
    "state":"TN",
    "FIPS":47119,
    "county":"Maury County",
    "number":15919.880000000003,
    "rate":194.27755540369034,
    "population":81944
  },
  {
    "state":"TN",
    "FIPS":47133,
    "county":"Overton County",
    "number":1625.92,
    "rate":73.20336770068886,
    "population":22211
  },
  {
    "state":"TN",
    "FIPS":47157,
    "county":"Shelby County",
    "number":417591.3300000003,
    "rate":444.2735083654101,
    "population":939942
  },
  {
    "state":"TN",
    "FIPS":47163,
    "county":"Sullivan County",
    "number":182827.05000000002,
    "rate":1166.9339962852566,
    "population":156673
  },
  {
    "state":"TN",
    "FIPS":47179,
    "county":"Washington County",
    "number":67365.44,
    "rate":539.3679591983795,
    "population":124897
  },
  {
    "state":"TX",
    "FIPS":48025,
    "county":"Bee County",
    "number":8341.74,
    "rate":257.0564851622446,
    "population":32451
  },
  {
    "state":"TX",
    "FIPS":48027,
    "county":"Bell County",
    "number":12865.05,
    "rate":39.81175749736188,
    "population":323147
  },
  {
    "state":"TX",
    "FIPS":48029,
    "county":"Bexar County",
    "number":2612569.549999999,
    "rate":1460.4678236058978,
    "population":1788858
  },
  {
    "state":"TX",
    "FIPS":48039,
    "county":"Brazoria County",
    "number":68554.44,
    "rate":211.1335799222044,
    "population":324697
  },
  {
    "state":"TX",
    "FIPS":48085,
    "county":"Collin County",
    "number":244629.56999999983,
    "rate":292.10337967893986,
    "population":837476
  },
  {
    "state":"TX",
    "FIPS":48091,
    "county":"Comal County",
    "number":97749.60999999999,
    "rate":849.2802592595809,
    "population":115097
  },
  {
    "state":"TX",
    "FIPS":48113,
    "county":"Dallas County",
    "number":3028600.6999999993,
    "rate":1232.7957542924569,
    "population":2456693
  },
  {
    "state":"TX",
    "FIPS":48121,
    "county":"Denton County",
    "number":72529.92000000001,
    "rate":102.44888849966526,
    "population":707962
  },
  {
    "state":"TX",
    "FIPS":48135,
    "county":"Ector County",
    "number":76144.79,
    "rate":527.1578604857245,
    "population":144444
  },
  {
    "state":"TX",
    "FIPS":48141,
    "county":"El Paso County",
    "number":120856.86999999995,
    "rate":145.41026585044222,
    "population":831144
  },
  {
    "state":"TX",
    "FIPS":48139,
    "county":"Ellis County",
    "number":5292.460000000001,
    "rate":34.405497120122746,
    "population":153826
  },
  {
    "state":"TX",
    "FIPS":48157,
    "county":"Fort Bend County",
    "number":66666.90000000001,
    "rate":106.37701370982157,
    "population":626704
  },
  {
    "state":"TX",
    "FIPS":48167,
    "county":"Galveston County",
    "number":116959.53000000004,
    "rate":387.9653629394732,
    "population":301469
  },
  {
    "state":"TX",
    "FIPS":48183,
    "county":"Gregg County",
    "number":29915.62000000001,
    "rate":243.4222431975004,
    "population":122896
  },
  {
    "state":"TX",
    "FIPS":48187,
    "county":"Guadalupe County",
    "number":17300.300000000003,
    "rate":123.8265313425999,
    "population":139714
  },
  {
    "state":"TX",
    "FIPS":48201,
    "county":"Harris County",
    "number":1709188.87,
    "rate":400.9300525913311,
    "population":4263060
  },
  {
    "state":"TX",
    "FIPS":48215,
    "county":"Hidalgo County",
    "number":165057.62,
    "rate":204.34878207310655,
    "population":807725
  },
  {
    "state":"TX",
    "FIPS":48245,
    "county":"Jefferson County",
    "number":136198.56999999992,
    "rate":541.751801880638,
    "population":251404
  },
  {
    "state":"TX",
    "FIPS":48265,
    "county":"Kerr County",
    "number":626.9999999999999,
    "rate":12.590867103096507,
    "population":49798
  },
  {
    "state":"TX",
    "FIPS":48273,
    "county":"Kleberg County",
    "number":40212.96000000001,
    "rate":1249.6258545680548,
    "population":32180
  },
  {
    "state":"TX",
    "FIPS":48303,
    "county":"Lubbock County",
    "number":68598.34000000004,
    "rate":239.77385213354972,
    "population":286096
  },
  {
    "state":"TX",
    "FIPS":48309,
    "county":"McLennan County",
    "number":14626.78000000002,
    "rate":61.0693454580375,
    "population":239511
  },
  {
    "state":"TX",
    "FIPS":48329,
    "county":"Midland County",
    "number":62817,
    "rate":427.0650622068122,
    "population":147090
  },
  {
    "state":"TX",
    "FIPS":48339,
    "county":"Montgomery County",
    "number":19714.029999999995,
    "rate":40.63751368220992,
    "population":485119
  },
  {
    "state":"TX",
    "FIPS":48355,
    "county":"Nueces County",
    "number":209377.63999999993,
    "rate":601.7757441806323,
    "population":347933
  },
  {
    "state":"TX",
    "FIPS":48375,
    "county":"Potter County",
    "number":45066.15000000002,
    "rate":367.12571484432294,
    "population":122754
  },
  {
    "state":"TX",
    "FIPS":48423,
    "county":"Smith County",
    "number":20199.54,
    "rate":93.9771379122643,
    "population":214941
  },
  {
    "state":"TX",
    "FIPS":48439,
    "county":"Tarrant County",
    "number":368306.64999999997,
    "rate":195.61416320820555,
    "population":1882822
  },
  {
    "state":"TX",
    "FIPS":48453,
    "county":"Travis County",
    "number":471604.3799999999,
    "rate":429.8629665008968,
    "population":1097104
  },
  {
    "state":"TX",
    "FIPS":48469,
    "county":"Victoria County",
    "number":13352.419999999995,
    "rate":149.56337649536263,
    "population":89276
  },
  {
    "state":"TX",
    "FIPS":48491,
    "county":"Williamson County",
    "number":206648.83000000002,
    "rate":452.5886949646622,
    "population":456593
  },
  {
    "state":"UT",
    "FIPS":49011,
    "county":"Davis County",
    "number":51368.75000000003,
    "rate":162.5500762614789,
    "population":316018
  },
  {
    "state":"UT",
    "FIPS":49035,
    "county":"Salt Lake County",
    "number":609071.7999999998,
    "rate":572.2197064642868,
    "population":1064402
  },
  {
    "state":"UT",
    "FIPS":49057,
    "county":"Weber County",
    "number":132580.28999999998,
    "rate":560.4983935063836,
    "population":236540
  },
  {
    "state":"VA",
    "FIPS":51003,
    "county":"Albemarle County",
    "number":148447.5,
    "rate":1454.9397236107027,
    "population":102030
  },
  {
    "state":"VA",
    "FIPS":51510,
    "county":"Alexandria City",
    "number":6935.920000000001,
    "rate":47.20432302938735,
    "population":146934
  },
  {
    "state":"VA",
    "FIPS":51013,
    "county":"Arlington County",
    "number":175429.16,
    "rate":790.4101429620586,
    "population":221947
  },
  {
    "state":"VA",
    "FIPS":51540,
    "county":"Charlottesville City",
    "number":79848.6,
    "rate":1793.5041890343884,
    "population":44521
  },
  {
    "state":"VA",
    "FIPS":51550,
    "county":"Chesapeake City",
    "number":38359.360000000015,
    "rate":168.10419478675485,
    "population":228188
  },
  {
    "state":"VA",
    "FIPS":51041,
    "county":"Chesterfield County",
    "number":167304.56999999998,
    "rate":516.6113015284853,
    "population":323850
  },
  {
    "state":"VA",
    "FIPS":51590,
    "county":"Danville City",
    "number":6696.170000000001,
    "rate":156.50376291310243,
    "population":42786
  },
  {
    "state":"VA",
    "FIPS":51059,
    "county":"Fairfax County",
    "number":247060.02999999994,
    "rate":220.3827037152669,
    "population":1121050
  },
  {
    "state":"VA",
    "FIPS":51650,
    "county":"Hampton City",
    "number":14803.269999999999,
    "rate":108.17703499630964,
    "population":136843
  },
  {
    "state":"VA",
    "FIPS":51087,
    "county":"Henrico County",
    "number":45984.06000000001,
    "rate":145.78167649977337,
    "population":315431
  },
  {
    "state":"VA",
    "FIPS":51710,
    "county":"Norfolk City",
    "number":170073.05,
    "rate":690.9325614462725,
    "population":246150
  },
  {
    "state":"VA",
    "FIPS":51730,
    "county":"Petersburg City",
    "number":11030.7,
    "rate":342.9197624895079,
    "population":32167
  },
  {
    "state":"VA",
    "FIPS":51153,
    "county":"Prince William County",
    "number":52862.65,
    "rate":122.5868801973907,
    "population":431226
  },
  {
    "state":"VA",
    "FIPS":51760,
    "county":"Richmond City",
    "number":144301.35999999993,
    "rate":682.1920709510883,
    "population":211526
  },
  {
    "state":"VA",
    "FIPS":51770,
    "county":"Roanoke City",
    "number":181806.9099999999,
    "rate":1857.4659528601628,
    "population":97879
  },
  {
    "state":"VA",
    "FIPS":51775,
    "county":"Salem City",
    "number":24415.65,
    "rate":974.5599329421626,
    "population":25053
  },
  {
    "state":"VA",
    "FIPS":51800,
    "county":"Suffolk City",
    "number":8625.14,
    "rate":101.25424086965708,
    "population":85183
  },
  {
    "state":"VA",
    "FIPS":51810,
    "county":"Virginia Beach City",
    "number":119114.73000000004,
    "rate":267.2117845790085,
    "population":445769
  },
  {
    "state":"VA",
    "FIPS":51840,
    "county":"Winchester City",
    "number":15413.600000000002,
    "rate":567.1351828684966,
    "population":27178
  },
  {
    "state":"VT",
    "FIPS":50003,
    "county":"Bennington County",
    "number":14555.31,
    "rate":396.93774032561566,
    "population":36669
  },
  {
    "state":"VT",
    "FIPS":50007,
    "county":"Chittenden County",
    "number":153565.33000000002,
    "rate":968.0053075812685,
    "population":158641
  },
  {
    "state":"WA",
    "FIPS":53003,
    "county":"Asotin County",
    "number":3340.37,
    "rate":152.71659123119827,
    "population":21873
  },
  {
    "state":"WA",
    "FIPS":53007,
    "county":"Chelan County",
    "number":10408.18,
    "rate":141.28111850142528,
    "population":73670
  },
  {
    "state":"WA",
    "FIPS":53011,
    "county":"Clark County",
    "number":8430.3,
    "rate":19.26903692529228,
    "population":437505
  },
  {
    "state":"WA",
    "FIPS":53033,
    "county":"King County",
    "number":1697496.2999999998,
    "rate":845.1452956048364,
    "population":2008526
  },
  {
    "state":"WA",
    "FIPS":53053,
    "county":"Pierce County",
    "number":164354.03000000003,
    "rate":202.31599666651488,
    "population":812363
  },
  {
    "state":"WA",
    "FIPS":53061,
    "county":"Snohomish County",
    "number":41403.81999999998,
    "rate":56.48989961006461,
    "population":732942
  },
  {
    "state":"WA",
    "FIPS":53063,
    "county":"Spokane County",
    "number":2149938.04,
    "rate":4519.486991910936,
    "population":475704
  },
  {
    "state":"WA",
    "FIPS":53067,
    "county":"Thurston County",
    "number":170770.03000000003,
    "rate":660.0751798324785,
    "population":258713
  },
  {
    "state":"WA",
    "FIPS":53077,
    "county":"Yakima County",
    "number":12568.759999999997,
    "rate":50.94321115754231,
    "population":246721
  },
  {
    "state":"WI",
    "FIPS":55025,
    "county":"Dane County",
    "number":240828.75999999998,
    "rate":478.5060789639434,
    "population":503293
  },
  {
    "state":"WI",
    "FIPS":55035,
    "county":"Eau Claire County",
    "number":40293.90000000001,
    "rate":399.58250694168987,
    "population":100840
  },
  {
    "state":"WI",
    "FIPS":55059,
    "county":"Kenosha County",
    "number":15696.18,
    "rate":93.79140972321812,
    "population":167352
  },
  {
    "state":"WI",
    "FIPS":55063,
    "county":"La Crosse County",
    "number":72326.98,
    "rate":619.0735335655776,
    "population":116831
  },
  {
    "state":"WI",
    "FIPS":55079,
    "county":"Milwaukee County",
    "number":325622.1400000005,
    "rate":341.1366957877307,
    "population":954521
  },
  {
    "state":"WI",
    "FIPS":55083,
    "county":"Oconto County",
    "number":4588.679999999999,
    "rate":122.62640299305183,
    "population":37420
  },
  {
    "state":"WI",
    "FIPS":55133,
    "county":"Waukesha County",
    "number":36668.94,
    "rate":93.39478329084135,
    "population":392623
  },
  {
    "state":"WV",
    "FIPS":54003,
    "county":"Berkeley County",
    "number":24301.160000000003,
    "rate":226.98212250845307,
    "population":107062
  },
  {
    "state":"WV",
    "FIPS":54039,
    "county":"Kanawha County",
    "number":44956.05000000002,
    "rate":233.9608747241768,
    "population":192152
  },
  {
    "state":"WV",
    "FIPS":54107,
    "county":"Wood County",
    "number":15626.829999999994,
    "rate":180.529684268897,
    "population":86561
  }
];

var totals2014 = [
  {
    "state":"WV",
    "FIPS":54039,
    "county":"Kanawha County",
    "number":107511.85000000014,
    "rate":559.5146030226078,
    "population":192152
  },
  {
    "state":"WV",
    "FIPS":54033,
    "county":"Harrison County",
    "number":200544.63999999984,
    "rate":2900.223289176836,
    "population":69148
  },
  {
    "state":"WV",
    "FIPS":54003,
    "county":"Berkeley County",
    "number":76467.58999999988,
    "rate":714.236517158281,
    "population":107062
  },
  {
    "state":"WI",
    "FIPS":55133,
    "county":"Waukesha County",
    "number":180112.83999999997,
    "rate":458.7424577775626,
    "population":392623
  },
  {
    "state":"WI",
    "FIPS":55079,
    "county":"Milwaukee County",
    "number":848615.2500000006,
    "rate":889.0482765701337,
    "population":954521
  },
  {
    "state":"WI",
    "FIPS":55063,
    "county":"La Crosse County",
    "number":176617.14,
    "rate":1511.7318177538496,
    "population":116831
  },
  {
    "state":"WI",
    "FIPS":55059,
    "county":"Kenosha County",
    "number":19473.03,
    "rate":116.35970887709736,
    "population":167352
  },
  {
    "state":"WA",
    "FIPS":53077,
    "county":"Yakima County",
    "number":20047.679999999986,
    "rate":81.25647999156936,
    "population":246721
  },
  {
    "state":"WA",
    "FIPS":53061,
    "county":"Snohomish County",
    "number":148754.9,
    "rate":202.95589555517353,
    "population":732942
  },
  {
    "state":"WA",
    "FIPS":53053,
    "county":"Pierce County",
    "number":490520.81000000006,
    "rate":603.8197332965682,
    "population":812363
  },
  {
    "state":"VA",
    "FIPS":51775,
    "county":"Salem City",
    "number":65759.35,
    "rate":2624.809404063386,
    "population":25053
  },
  {
    "state":"VA",
    "FIPS":51770,
    "county":"Roanoke City",
    "number":489065.4399999994,
    "rate":4996.632985625102,
    "population":97879
  },
  {
    "state":"VA",
    "FIPS":51683,
    "county":"Manassas City",
    "number":110486.05,
    "rate":2711.846497471897,
    "population":40742
  },
  {
    "state":"VA",
    "FIPS":51041,
    "county":"Chesterfield County",
    "number":322760.84999999916,
    "rate":996.636868920794,
    "population":323850
  },
  {
    "state":"VA",
    "FIPS":51013,
    "county":"Arlington County",
    "number":144111.46000000002,
    "rate":649.305735152987,
    "population":221947
  },
  {
    "state":"UT",
    "FIPS":49057,
    "county":"Weber County",
    "number":558416.0799999998,
    "rate":2360.768073053183,
    "population":236540
  },
  {
    "state":"UT",
    "FIPS":49053,
    "county":"Washington County",
    "number":17233.760000000002,
    "rate":119.1468650401333,
    "population":144643
  },
  {
    "state":"UT",
    "FIPS":49049,
    "county":"Utah County",
    "number":159319.57999999996,
    "rate":295.2538722984718,
    "population":539602
  },
  {
    "state":"TX",
    "FIPS":48265,
    "county":"Kerr County",
    "number":2319.8,
    "rate":46.58420016868148,
    "population":49798
  },
  {
    "state":"TX",
    "FIPS":48245,
    "county":"Jefferson County",
    "number":445530.85000000073,
    "rate":1772.1708882913588,
    "population":251404
  },
  {
    "state":"TX",
    "FIPS":48201,
    "county":"Harris County",
    "number":3334503.509999985,
    "rate":782.1854512955447,
    "population":4263060
  },
  {
    "state":"TX",
    "FIPS":48121,
    "county":"Denton County",
    "number":94017.25000000006,
    "rate":132.7998536644623,
    "population":707962
  },
  {
    "state":"TN",
    "FIPS":47189,
    "county":"Wilson County",
    "number":18013.659999999963,
    "rate":151.26343544269753,
    "population":119088
  },
  {
    "state":"TN",
    "FIPS":47165,
    "county":"Sumner County",
    "number":364982.03000000096,
    "rate":2196.622631743668,
    "population":166156
  },
  {
    "state":"TN",
    "FIPS":47157,
    "county":"Shelby County",
    "number":1093972.9899999993,
    "rate":1163.8728666236846,
    "population":939942
  },
  {
    "state":"TN",
    "FIPS":47133,
    "county":"Overton County",
    "number":12809.86,
    "rate":576.734951150331,
    "population":22211
  },
  {
    "state":"TN",
    "FIPS":47125,
    "county":"Montgomery County",
    "number":8822.27,
    "rate":47.59532801035822,
    "population":185360
  },
  {
    "state":"TN",
    "FIPS":47113,
    "county":"Madison County",
    "number":48068.73999999995,
    "rate":487.7549695081729,
    "population":98551
  },
  {
    "state":"TN",
    "FIPS":47093,
    "county":"Knox County",
    "number":247323.00999999972,
    "rate":560.6502529832063,
    "population":441136
  },
  {
    "state":"TN",
    "FIPS":47077,
    "county":"Henderson County",
    "number":40457.02,
    "rate":1443.9137727970306,
    "population":28019
  },
  {
    "state":"TN",
    "FIPS":47065,
    "county":"Hamilton County",
    "number":599365.9899999994,
    "rate":1733.9906034016365,
    "population":345657
  },
  {
    "state":"TN",
    "FIPS":47037,
    "county":"Davidson County",
    "number":2643727.530000002,
    "rate":4072.6490197830394,
    "population":649142
  },
  {
    "state":"SC",
    "FIPS":45085,
    "county":"Sumter County",
    "number":85173.47999999998,
    "rate":788.2054414214324,
    "population":108060
  },
  {
    "state":"SC",
    "FIPS":45057,
    "county":"Lancaster County",
    "number":11241.96,
    "rate":141.95648605306025,
    "population":79193
  },
  {
    "state":"SC",
    "FIPS":45049,
    "county":"Hampton County",
    "number":2603.84,
    "rate":125.6740190163618,
    "population":20719
  },
  {
    "state":"SC",
    "FIPS":45045,
    "county":"Greenville County",
    "number":506560.1500000005,
    "rate":1085.273632160564,
    "population":466758
  },
  {
    "state":"SC",
    "FIPS":45021,
    "county":"Cherokee County",
    "number":16016.869999999999,
    "rate":287.70580733236335,
    "population":55671
  },
  {
    "state":"SC",
    "FIPS":45009,
    "county":"Bamberg County",
    "number":16345.970000000001,
    "rate":1035.2102596580116,
    "population":15790
  },
  {
    "state":"RI",
    "FIPS":44009,
    "county":"Washington County",
    "number":10509.82,
    "rate":83.24807718203205,
    "population":126247
  },
  {
    "state":"PR",
    "FIPS":72113,
    "county":"",
    "number":446688.4899999995,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72097,
    "county":"Mayag�ez Municipio",
    "number":142392.9700000002,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72137,
    "county":"Toa Baja",
    "number":17637.399999999998,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72031,
    "county":"Carolina",
    "number":48867.82,
    "rate":null,
    "population":null
  },
  {
    "state":"PA",
    "FIPS":42125,
    "county":"Washington County",
    "number":27644.45999999996,
    "rate":132.63123047915116,
    "population":208431
  },
  {
    "state":"PA",
    "FIPS":42101,
    "county":"Philadelphia County",
    "number":5081068.53,
    "rate":3277.2714390388005,
    "population":1550396
  },
  {
    "state":"PA",
    "FIPS":42015,
    "county":"Bradford County",
    "number":106661.83999999998,
    "rate":1698.0854281756958,
    "population":62813
  },
  {
    "state":"PA",
    "FIPS":42011,
    "county":"Berks County",
    "number":91811.78999999992,
    "rate":222.16901551595618,
    "population":413252
  },
  {
    "state":"OR",
    "FIPS":41067,
    "county":"Washington County",
    "number":73150.04999999997,
    "rate":133.5495867542269,
    "population":547737
  },
  {
    "state":"OR",
    "FIPS":41051,
    "county":"Multnomah County",
    "number":1223167.6199999996,
    "rate":1611.9401911132718,
    "population":758817
  },
  {
    "state":"OR",
    "FIPS":41039,
    "county":"Lane County",
    "number":53449.09,
    "rate":150.78125484863787,
    "population":354481
  },
  {
    "state":"OR",
    "FIPS":41029,
    "county":"Jackson County",
    "number":61060.369999999995,
    "rate":295.88816793708173,
    "population":206363
  },
  {
    "state":"OK",
    "FIPS":40027,
    "county":"Cleveland County",
    "number":143936.57999999996,
    "rate":540.866895634333,
    "population":266122
  },
  {
    "state":"OK",
    "FIPS":40019,
    "county":"Carter County",
    "number":5232.23,
    "rate":108.74651868479029,
    "population":48114
  },
  {
    "state":"OK",
    "FIPS":40017,
    "county":"Canadian County",
    "number":25385.389999999985,
    "rate":207.05020186778665,
    "population":122605
  },
  {
    "state":"OH",
    "FIPS":39173,
    "county":"Wood County",
    "number":12629.479999999996,
    "rate":98.16242936755296,
    "population":128659
  },
  {
    "state":"OH",
    "FIPS":39165,
    "county":"Warren County",
    "number":134339.33999999997,
    "rate":617.2179570233352,
    "population":217653
  },
  {
    "state":"OH",
    "FIPS":39151,
    "county":"Stark County",
    "number":68885.3599999998,
    "rate":183.770741961989,
    "population":374844
  },
  {
    "state":"OH",
    "FIPS":39119,
    "county":"Muskingum County",
    "number":56876.80000000002,
    "rate":662.606304899928,
    "population":85838
  },
  {
    "state":"OH",
    "FIPS":39113,
    "county":"Montgomery County",
    "number":380370.6899999994,
    "rate":711.0117931626189,
    "population":534971
  },
  {
    "state":"OH",
    "FIPS":39099,
    "county":"Mahoning County",
    "number":97323.72000000016,
    "rate":412.7611785212932,
    "population":235787
  },
  {
    "state":"OH",
    "FIPS":39095,
    "county":"Lucas County",
    "number":357080.2100000001,
    "rate":816.4147324041559,
    "population":437376
  },
  {
    "state":"OH",
    "FIPS":39067,
    "county":"Harrison County",
    "number":126071.79000000004,
    "rate":8033.120300751882,
    "population":15694
  },
  {
    "state":"OH",
    "FIPS":39049,
    "county":"Franklin County",
    "number":1986672.2500000012,
    "rate":1659.798226471592,
    "population":1196936
  },
  {
    "state":"OH",
    "FIPS":39039,
    "county":"Defiance County",
    "number":25780.02000000003,
    "rate":664.1254057396061,
    "population":38818
  },
  {
    "state":"OH",
    "FIPS":39035,
    "county":"Cuyahoga County",
    "number":1588484.0399999968,
    "rate":1254.836751089548,
    "population":1265889
  },
  {
    "state":"OH",
    "FIPS":39023,
    "county":"Clark County",
    "number":17084.019999999997,
    "rate":124.524541889587,
    "population":137194
  },
  {
    "state":"NY",
    "FIPS":36085,
    "county":"Richmond County",
    "number":500525.28999999975,
    "rate":1062.7382865829961,
    "population":470977
  },
  {
    "state":"NY",
    "FIPS":36081,
    "county":"Queens County",
    "number":882011.0399999965,
    "rate":386.73855879865096,
    "population":2280639
  },
  {
    "state":"NY",
    "FIPS":36061,
    "county":"New York County",
    "number":3315875.589999998,
    "rate":2040.2902230989687,
    "population":1625198
  },
  {
    "state":"NY",
    "FIPS":36059,
    "county":"Nassau County",
    "number":1353226.2599999963,
    "rate":1001.7049528359472,
    "population":1350923
  },
  {
    "state":"NY",
    "FIPS":36055,
    "county":"Monroe County",
    "number":706018.1799999999,
    "rate":943.1407380888131,
    "population":748582
  },
  {
    "state":"NY",
    "FIPS":36047,
    "county":"Kings County",
    "number":552227.1199999994,
    "rate":214.46846124688506,
    "population":2574864
  },
  {
    "state":"NY",
    "FIPS":36029,
    "county":"Erie County",
    "number":1281799.850000002,
    "rate":1392.9503208524209,
    "population":920205
  },
  {
    "state":"NY",
    "FIPS":36015,
    "county":"Chemung County",
    "number":4724.279999999999,
    "rate":52.94438031625779,
    "population":89231
  },
  {
    "state":"NY",
    "FIPS":36013,
    "county":"Chautauqua County",
    "number":94992.9,
    "rate":711.7812345456997,
    "population":133458
  },
  {
    "state":"NY",
    "FIPS":36007,
    "county":"Broome County",
    "number":123461.49000000008,
    "rate":621.440026174058,
    "population":198670
  },
  {
    "state":"NY",
    "FIPS":36005,
    "county":"Bronx County",
    "number":762304.7600000019,
    "rate":539.0265056833261,
    "population":1414225
  },
  {
    "state":"NY",
    "FIPS":36001,
    "county":"Albany County",
    "number":1883444.0299999984,
    "rate":6151.306820037489,
    "population":306186
  },
  {
    "state":"NV",
    "FIPS":32031,
    "county":"Washoe County",
    "number":264753.06000000006,
    "rate":617.0163090848922,
    "population":429086
  },
  {
    "state":"NM",
    "FIPS":35049,
    "county":"Santa Fe County",
    "number":56313.83000000002,
    "rate":384.6967243911605,
    "population":146385
  },
  {
    "state":"NM",
    "FIPS":35015,
    "county":"Eddy County",
    "number":12105.4,
    "rate":222.64851940408315,
    "population":54370
  },
  {
    "state":"NJ",
    "FIPS":34035,
    "county":"Somerset County",
    "number":149043.10000000024,
    "rate":453.44442044351763,
    "population":328691
  },
  {
    "state":"NJ",
    "FIPS":34029,
    "county":"Ocean County",
    "number":186273.93999999916,
    "rate":320.769852025712,
    "population":580709
  },
  {
    "state":"NJ",
    "FIPS":34027,
    "county":"Morris County",
    "number":242501.83999999965,
    "rate":487.3135462090301,
    "population":497630
  },
  {
    "state":"NJ",
    "FIPS":34025,
    "county":"Monmouth County",
    "number":348006.3899999989,
    "rate":553.1145339300909,
    "population":629176
  },
  {
    "state":"NJ",
    "FIPS":34021,
    "county":"Mercer County",
    "number":388215.6800000004,
    "rate":1051.9125229978035,
    "population":369057
  },
  {
    "state":"NJ",
    "FIPS":34005,
    "county":"Burlington County",
    "number":79602.63000000006,
    "rate":176.42153158084884,
    "population":451207
  },
  {
    "state":"NJ",
    "FIPS":34003,
    "county":"Bergen County",
    "number":499334.45000000176,
    "rate":542.4953826430856,
    "population":920440
  },
  {
    "state":"NJ",
    "FIPS":34001,
    "county":"Atlantic County",
    "number":197830.87000000017,
    "rate":717.907397864759,
    "population":275566
  },
  {
    "state":"NH",
    "FIPS":33011,
    "county":"Hillsborough County",
    "number":357078.20999999985,
    "rate":886.9304769001486,
    "population":402600
  },
  {
    "state":"NE",
    "FIPS":31055,
    "county":"Douglas County",
    "number":1739179.7899999993,
    "rate":3273.3866544703733,
    "population":531309
  },
  {
    "state":"NE",
    "FIPS":31053,
    "county":"Dodge County",
    "number":5334.33,
    "rate":145.46850286337605,
    "population":36670
  },
  {
    "state":"NE",
    "FIPS":31043,
    "county":"Dakota County",
    "number":38041.16,
    "rate":1825.6543648317897,
    "population":20837
  },
  {
    "state":"ND",
    "FIPS":38017,
    "county":"Cass County",
    "number":113005.63,
    "rate":720.5199599589388,
    "population":156839
  },
  {
    "state":"VT",
    "FIPS":50007,
    "county":"Chittenden County",
    "number":199783.20000000004,
    "rate":1259.3415321386026,
    "population":158641
  },
  {
    "state":"NC",
    "FIPS":37195,
    "county":"Wilson County",
    "number":25016.17,
    "rate":305.94083259954994,
    "population":81768
  },
  {
    "state":"NC",
    "FIPS":37183,
    "county":"Wake County",
    "number":957257.6700000034,
    "rate":1004.8778252613117,
    "population":952611
  },
  {
    "state":"NC",
    "FIPS":37159,
    "county":"Rowan County",
    "number":71082.85,
    "rate":515.4105789798065,
    "population":137915
  },
  {
    "state":"NC",
    "FIPS":37151,
    "county":"Randolph County",
    "number":73622.75,
    "rate":517.2825063586414,
    "population":142326
  },
  {
    "state":"NC",
    "FIPS":37147,
    "county":"Pitt County",
    "number":578296.6100000005,
    "rate":3344.7850429451423,
    "population":172895
  },
  {
    "state":"NC",
    "FIPS":37139,
    "county":"Pasquotank County",
    "number":25459.03,
    "rate":628.1837248322148,
    "population":40528
  },
  {
    "state":"NC",
    "FIPS":37135,
    "county":"Orange County",
    "number":161605.66,
    "rate":1173.3682330390334,
    "population":137728
  },
  {
    "state":"NC",
    "FIPS":37133,
    "county":"Onslow County",
    "number":8874.919999999998,
    "rate":48.262638127555896,
    "population":183888
  },
  {
    "state":"NC",
    "FIPS":37127,
    "county":"Nash County",
    "number":103409.95999999999,
    "rate":1084.8715904322282,
    "population":95320
  },
  {
    "state":"NC",
    "FIPS":37119,
    "county":"Mecklenburg County",
    "number":535296.0500000003,
    "rate":552.5471237506183,
    "population":968779
  },
  {
    "state":"NC",
    "FIPS":37109,
    "county":"Lincoln County",
    "number":12346.869999999999,
    "rate":156.34292732959364,
    "population":78973
  },
  {
    "state":"NC",
    "FIPS":37063,
    "county":"Durham County",
    "number":1760033.1700000006,
    "rate":6234.443125947549,
    "population":282308
  },
  {
    "state":"NC",
    "FIPS":37047,
    "county":"Columbus County",
    "number":70819.23000000001,
    "rate":1229.4151447816125,
    "population":57604
  },
  {
    "state":"NC",
    "FIPS":37031,
    "county":"Carteret County",
    "number":1277748.9500000007,
    "rate":18851.69373994896,
    "population":67779
  },
  {
    "state":"NC",
    "FIPS":37023,
    "county":"Burke County",
    "number":51354.74999999999,
    "rate":569.1222917936499,
    "population":90235
  },
  {
    "state":"NC",
    "FIPS":37011,
    "county":"Avery County",
    "number":2721.99,
    "rate":154.16798821930223,
    "population":17656
  },
  {
    "state":"MT",
    "FIPS":30093,
    "county":"Silver Bow County",
    "number":109021.90000000002,
    "rate":3160.696373177167,
    "population":34493
  },
  {
    "state":"MT",
    "FIPS":30029,
    "county":"Flathead County",
    "number":131072.53,
    "rate":1429.4870872049908,
    "population":91692
  },
  {
    "state":"MS",
    "FIPS":28125,
    "county":"Sharkey County",
    "number":902.1799999999998,
    "rate":188.4645916022561,
    "population":4787
  },
  {
    "state":"MS",
    "FIPS":28113,
    "county":"Pike County",
    "number":2579.99,
    "rate":64.32125850764129,
    "population":40111
  },
  {
    "state":"MS",
    "FIPS":28109,
    "county":"Pearl River County",
    "number":2658.2,
    "rate":48.25195135233254,
    "population":55090
  },
  {
    "state":"MS",
    "FIPS":28049,
    "county":"Hinds County",
    "number":647515.9599999995,
    "rate":2607.817864018234,
    "population":248298
  },
  {
    "state":"MO",
    "FIPS":29189,
    "county":"St Louis County",
    "number":1141135.4699999972,
    "rate":1140.2232913669036,
    "population":1000800
  },
  {
    "state":"MO",
    "FIPS":29095,
    "county":"Jackson County",
    "number":356521.18999999977,
    "rate":526.3159922644263,
    "population":677390
  },
  {
    "state":"MO",
    "FIPS":29077,
    "county":"Greene County",
    "number":590661.2199999995,
    "rate":2104.3487028209443,
    "population":280686
  },
  {
    "state":"MO",
    "FIPS":29071,
    "county":"Franklin County",
    "number":12782.010000000002,
    "rate":126.07273193537571,
    "population":101386
  },
  {
    "state":"MN",
    "FIPS":27145,
    "county":"Stearns County",
    "number":152649.3,
    "rate":1006.6160663650871,
    "population":151646
  },
  {
    "state":"MN",
    "FIPS":27137,
    "county":"St Louis County",
    "number":38662.31,
    "rate":192.84197977923756,
    "population":200487
  },
  {
    "state":"MN",
    "FIPS":27123,
    "county":"Ramsey County",
    "number":110273.92000000001,
    "rate":211.6911074466472,
    "population":520919
  },
  {
    "state":"MN",
    "FIPS":27109,
    "county":"Olmsted County",
    "number":597735.23,
    "rate":4061.915450270461,
    "population":147156
  },
  {
    "state":"MN",
    "FIPS":27053,
    "county":"Hennepin County",
    "number":1419792.169999999,
    "rate":1198.3522523457793,
    "population":1184787
  },
  {
    "state":"MN",
    "FIPS":27037,
    "county":"Dakota County",
    "number":77649.10999999999,
    "rate":191.69448510987067,
    "population":405067
  },
  {
    "state":"MN",
    "FIPS":27027,
    "county":"Clay County",
    "number":70128.37,
    "rate":1164.671582548619,
    "population":60213
  },
  {
    "state":"TX",
    "FIPS":48355,
    "county":"Nueces County",
    "number":525039.8199999998,
    "rate":1509.0256457421397,
    "population":347933
  },
  {
    "state":"MI",
    "FIPS":26147,
    "county":"St Clair County",
    "number":61988.34999999999,
    "rate":386.0663037791784,
    "population":160564
  },
  {
    "state":"TX",
    "FIPS":48259,
    "county":"Kendall County",
    "number":17310.91,
    "rate":484.0993875667664,
    "population":35759
  },
  {
    "state":"MI",
    "FIPS":26099,
    "county":"Macomb County",
    "number":216289.0900000002,
    "rate":255.1331052786791,
    "population":847750
  },
  {
    "state":"MD",
    "FIPS":24045,
    "county":"Wicomico County",
    "number":65584.54000000005,
    "rate":652.7643522573459,
    "population":100472
  },
  {
    "state":"MD",
    "FIPS":24033,
    "county":"Prince George's County",
    "number":486917.8500000002,
    "rate":550.95913614947,
    "population":883764
  },
  {
    "state":"MD",
    "FIPS":24031,
    "county":"Montgomery County",
    "number":1894174.5500000003,
    "rate":1881.8540515246682,
    "population":1006547
  },
  {
    "state":"MD",
    "FIPS":24027,
    "county":"Howard County",
    "number":102651.98,
    "rate":342.53292623921783,
    "population":299685
  },
  {
    "state":"MD",
    "FIPS":24013,
    "county":"Carroll County",
    "number":254620.1499999999,
    "rate":1522.9388719421013,
    "population":167190
  },
  {
    "state":"MD",
    "FIPS":24005,
    "county":"Baltimore County",
    "number":506880.2000000001,
    "rate":619.3361639734859,
    "population":818425
  },
  {
    "state":"MD",
    "FIPS":24003,
    "county":"Anne Arundel County",
    "number":200812.8599999999,
    "rate":364.64025857294587,
    "population":550715
  },
  {
    "state":"MA",
    "FIPS":25025,
    "county":"Suffolk County",
    "number":10050368.499999998,
    "rate":13409.35938967637,
    "population":749504
  },
  {
    "state":"SD",
    "FIPS":46103,
    "county":"Pennington County",
    "number":138257.86000000002,
    "rate":1322.3836942382738,
    "population":104552
  },
  {
    "state":"MA",
    "FIPS":25021,
    "county":"Norfolk County",
    "number":104534.36999999998,
    "rate":153.10805288619972,
    "population":682749
  },
  {
    "state":"MA",
    "FIPS":25017,
    "county":"Middlesex County",
    "number":534006.9899999994,
    "rate":346.71455896407684,
    "population":1540192
  },
  {
    "state":"MA",
    "FIPS":25005,
    "county":"Bristol County",
    "number":349798.1700000007,
    "rate":635.1132878814026,
    "population":550765
  },
  {
    "state":"MA",
    "FIPS":25001,
    "county":"Barnstable County",
    "number":52652.17000000001,
    "rate":245.07049268076992,
    "population":214845
  },
  {
    "state":"WA",
    "FIPS":53011,
    "county":"Clark County",
    "number":97227.07000000005,
    "rate":222.23076307699353,
    "population":437505
  },
  {
    "state":"LA",
    "FIPS":22069,
    "county":"Natchitoches Parish",
    "number":54086.630000000005,
    "rate":1370.6350573984441,
    "population":39461
  },
  {
    "state":"LA",
    "FIPS":22055,
    "county":"Lafayette Parish",
    "number":94911.13000000022,
    "rate":418.00942502917894,
    "population":227055
  },
  {
    "state":"LA",
    "FIPS":22051,
    "county":"Jefferson Parish",
    "number":859662.5100000012,
    "rate":1978.1683483863571,
    "population":434575
  },
  {
    "state":"KY",
    "FIPS":21227,
    "county":"Warren County",
    "number":66574.64999999988,
    "rate":568.1157998037281,
    "population":117185
  },
  {
    "state":"KY",
    "FIPS":21179,
    "county":"Nelson County",
    "number":2033.77,
    "rate":45.856237739848034,
    "population":44351
  },
  {
    "state":"VA",
    "FIPS":51107,
    "county":"Loudoun County",
    "number":731069.7799999996,
    "rate":2161.8729909955186,
    "population":338165
  },
  {
    "state":"KY",
    "FIPS":21117,
    "county":"Kenton County",
    "number":304967.27999999985,
    "rate":1886.3449845674231,
    "population":161671
  },
  {
    "state":"VA",
    "FIPS":51087,
    "county":"Henrico County",
    "number":131448.46000000014,
    "rate":416.7265107107423,
    "population":315431
  },
  {
    "state":"KY",
    "FIPS":21107,
    "county":"Hopkins County",
    "number":18471.5,
    "rate":395.5183932165646,
    "population":46702
  },
  {
    "state":"KY",
    "FIPS":21059,
    "county":"Daviess County",
    "number":299014.5799999999,
    "rate":3059.692613095663,
    "population":97727
  },
  {
    "state":"KS",
    "FIPS":20209,
    "county":"Wyandotte County",
    "number":15154.619999999999,
    "rate":95.13078849739176,
    "population":159303
  },
  {
    "state":"KS",
    "FIPS":20177,
    "county":"Shawnee County",
    "number":653207.2599999998,
    "rate":3651.1607342485345,
    "population":178904
  },
  {
    "state":"KS",
    "FIPS":20173,
    "county":"Sedgwick County",
    "number":263878.7800000004,
    "rate":523.7550241057843,
    "population":503821
  },
  {
    "state":"KS",
    "FIPS":20091,
    "county":"Johnson County",
    "number":409976.7999999996,
    "rate":732.161570414712,
    "population":559954
  },
  {
    "state":"IN",
    "FIPS":18173,
    "county":"Warrick County",
    "number":16091.52,
    "rate":266.2439815351015,
    "population":60439
  },
  {
    "state":"IN",
    "FIPS":18163,
    "county":"Vanderburgh County",
    "number":265064.9299999997,
    "rate":1466.221173685286,
    "population":180781
  },
  {
    "state":"IN",
    "FIPS":18157,
    "county":"Tippecanoe County",
    "number":124680.96000000018,
    "rate":699.7472219104286,
    "population":178180
  },
  {
    "state":"IN",
    "FIPS":18141,
    "county":"St Joseph County",
    "number":41281.789999999935,
    "rate":154.86226933912516,
    "population":266571
  },
  {
    "state":"SC",
    "FIPS":45035,
    "county":"Dorchester County",
    "number":62065.929999999884,
    "rate":435.64210009124645,
    "population":142470
  },
  {
    "state":"IN",
    "FIPS":18081,
    "county":"Johnson County",
    "number":111232.31000000003,
    "rate":774.8032905643556,
    "population":143562
  },
  {
    "state":"IN",
    "FIPS":18063,
    "county":"Hendricks County",
    "number":119190.62999999993,
    "rate":790.7978264619626,
    "population":150722
  },
  {
    "state":"IN",
    "FIPS":18059,
    "county":"Hancock County",
    "number":22808.17,
    "rate":322.87439305785585,
    "population":70641
  },
  {
    "state":"IN",
    "FIPS":18057,
    "county":"Hamilton County",
    "number":171671.8799999998,
    "rate":592.8510550126042,
    "population":289570
  },
  {
    "state":"IN",
    "FIPS":18043,
    "county":"Floyd County",
    "number":121798.62999999998,
    "rate":1617.8554540141326,
    "population":75284
  },
  {
    "state":"IN",
    "FIPS":18035,
    "county":"Delaware County",
    "number":108849.06999999989,
    "rate":927.8833678575377,
    "population":117309
  },
  {
    "state":"IN",
    "FIPS":18011,
    "county":"Boone County",
    "number":69112.44000000003,
    "rate":1169.8903107861065,
    "population":59076
  },
  {
    "state":"IN",
    "FIPS":18003,
    "county":"Allen County",
    "number":60333.83999999993,
    "rate":167.20756473926906,
    "population":360832
  },
  {
    "state":"IL",
    "FIPS":17163,
    "county":"St Clair County",
    "number":56213.630000000005,
    "rate":209.13975854307347,
    "population":268785
  },
  {
    "state":"IL",
    "FIPS":17111,
    "county":"McHenry County",
    "number":450585.2800000004,
    "rate":1464.0087076598177,
    "population":307775
  },
  {
    "state":"IL",
    "FIPS":17097,
    "county":"Lake County",
    "number":161300.8899999999,
    "rate":229.9328594053138,
    "population":701513
  },
  {
    "state":"IL",
    "FIPS":17089,
    "county":"Kane County",
    "number":105716.20999999998,
    "rate":202.5824050528607,
    "population":521843
  },
  {
    "state":"IL",
    "FIPS":17043,
    "county":"Dupage County",
    "number":626415.3499999983,
    "rate":675.7935578946897,
    "population":926933
  },
  {
    "state":"IL",
    "FIPS":17031,
    "county":"Cook County",
    "number":3804111.0099999895,
    "rate":727.0381913254853,
    "population":5232340
  },
  {
    "state":"IL",
    "FIPS":17019,
    "county":"Champaign County",
    "number":82521.23000000001,
    "rate":404.4979878338701,
    "population":204009
  },
  {
    "state":"ID",
    "FIPS":16055,
    "county":"Kootenai County",
    "number":21852.37,
    "rate":153.56873300210123,
    "population":142297
  },
  {
    "state":"ID",
    "FIPS":16019,
    "county":"Bonneville County",
    "number":738838.5999999996,
    "rate":6912.786302395207,
    "population":106880
  },
  {
    "state":"OK",
    "FIPS":40109,
    "county":"Oklahoma County",
    "number":750198.8700000015,
    "rate":1010.1851784524047,
    "population":742635
  },
  {
    "state":"ID",
    "FIPS":16001,
    "county":"Ada County",
    "number":170096.9899999998,
    "rate":415.9959255645142,
    "population":408891
  },
  {
    "state":"TN",
    "FIPS":47179,
    "county":"Washington County",
    "number":86353.85999999999,
    "rate":691.4005940895296,
    "population":124897
  },
  {
    "state":"IA",
    "FIPS":19153,
    "county":"Polk County",
    "number":1131868.8800000006,
    "rate":2549.346102562256,
    "population":443984
  },
  {
    "state":"IA",
    "FIPS":19013,
    "county":"Black Hawk County",
    "number":47901.169999999984,
    "rate":363.8220125929469,
    "population":131661
  },
  {
    "state":"MI",
    "FIPS":26125,
    "county":"Oakland County",
    "number":1389866.7600000051,
    "rate":1138.6461264706575,
    "population":1220631
  },
  {
    "state":"GA",
    "FIPS":13247,
    "county":"Rockdale County",
    "number":12210.04,
    "rate":142.50081695532424,
    "population":85684
  },
  {
    "state":"GA",
    "FIPS":13153,
    "county":"Houston County",
    "number":21785.91999999999,
    "rate":149.01450068399447,
    "population":146200
  },
  {
    "state":"GA",
    "FIPS":13121,
    "county":"Fulton County",
    "number":3172140.380000001,
    "rate":3243.6631525129105,
    "population":977950
  },
  {
    "state":"GA",
    "FIPS":13111,
    "county":"Fannin County",
    "number":6482.150000000001,
    "rate":276.22405931733925,
    "population":23467
  },
  {
    "state":"GA",
    "FIPS":13067,
    "county":"Cobb County",
    "number":324366.5099999996,
    "rate":458.1214938223475,
    "population":708036
  },
  {
    "state":"GA",
    "FIPS":13057,
    "county":"Cherokee County",
    "number":16012.47,
    "rate":72.48282136940166,
    "population":220914
  },
  {
    "state":"GA",
    "FIPS":13053,
    "county":"Chattahoochee County",
    "number":649.3699999999999,
    "rate":51.66030230708034,
    "population":12570
  },
  {
    "state":"GA",
    "FIPS":13051,
    "county":"Chatham County",
    "number":200288.42999999996,
    "rate":723.8207148277979,
    "population":276710
  },
  {
    "state":"FL",
    "FIPS":12127,
    "county":"Volusia County",
    "number":358455.75000000006,
    "rate":721.1054492930888,
    "population":497092
  },
  {
    "state":"FL",
    "FIPS":12109,
    "county":"St Johns County",
    "number":41793.43000000001,
    "rate":206.62811968516397,
    "population":202264
  },
  {
    "state":"FL",
    "FIPS":12117,
    "county":"Seminole County",
    "number":176244.2899999998,
    "rate":408.5355756191973,
    "population":431405
  },
  {
    "state":"FL",
    "FIPS":12115,
    "county":"Sarasota County",
    "number":219075.00999999983,
    "rate":567.4783318223024,
    "population":386050
  },
  {
    "state":"FL",
    "FIPS":12105,
    "county":"Polk County",
    "number":428588.72999999975,
    "rate":696.0275852436969,
    "population":615764
  },
  {
    "state":"FL",
    "FIPS":12103,
    "county":"Pinellas County",
    "number":885312.5599999996,
    "rate":959.9329476885706,
    "population":922265
  },
  {
    "state":"FL",
    "FIPS":12101,
    "county":"Pasco County",
    "number":318556.54999999964,
    "rate":676.9099922652583,
    "population":470604
  },
  {
    "state":"FL",
    "FIPS":12099,
    "county":"Palm Beach County",
    "number":1177877.6200000013,
    "rate":866.9706678796693,
    "population":1358613
  },
  {
    "state":"FL",
    "FIPS":12097,
    "county":"Osceola County",
    "number":77911.17000000001,
    "rate":269.6168114337129,
    "population":288970
  },
  {
    "state":"FL",
    "FIPS":12095,
    "county":"Orange County",
    "number":1142257.29,
    "rate":950.2371647050603,
    "population":1202076
  },
  {
    "state":"FL",
    "FIPS":12087,
    "county":"Monroe County",
    "number":4734.92,
    "rate":63.139843447880416,
    "population":74991
  },
  {
    "state":"FL",
    "FIPS":12086,
    "county":"Miami-Dade County",
    "number":3334600.2500000005,
    "rate":1277.1548587492725,
    "population":2610960
  },
  {
    "state":"FL",
    "FIPS":12083,
    "county":"Marion County",
    "number":116741.47000000012,
    "rate":349.00811671325465,
    "population":334495
  },
  {
    "state":"FL",
    "FIPS":12081,
    "county":"Manatee County",
    "number":404310.44999999995,
    "rate":1210.2530599782679,
    "population":334071
  },
  {
    "state":"FL",
    "FIPS":12071,
    "county":"Lee County",
    "number":145755.0100000003,
    "rate":225.98096398692732,
    "population":644988
  },
  {
    "state":"NC",
    "FIPS":37129,
    "county":"New Hanover County",
    "number":314968.1200000006,
    "rate":1506.0588904721403,
    "population":209134
  },
  {
    "state":"FL",
    "FIPS":12053,
    "county":"Hernando County",
    "number":37862.41,
    "rate":218.72889972386224,
    "population":173102
  },
  {
    "state":"NC",
    "FIPS":37001,
    "county":"Alamance County",
    "number":135996.88,
    "rate":884.9815190795981,
    "population":153672
  },
  {
    "state":"FL",
    "FIPS":12021,
    "county":"Collier County",
    "number":196780.17999999976,
    "rate":591.1569277171767,
    "population":332873
  },
  {
    "state":"FL",
    "FIPS":12015,
    "county":"Charlotte County",
    "number":305654.3699999997,
    "rate":1877.576109391123,
    "population":162792
  },
  {
    "state":"FL",
    "FIPS":12011,
    "county":"Broward County",
    "number":1399690.7199999993,
    "rate":769.156768454087,
    "population":1819773
  },
  {
    "state":"FL",
    "FIPS":12001,
    "county":"Alachua County",
    "number":140029.68,
    "rate":556.3069050863484,
    "population":251713
  },
  {
    "state":"CT",
    "FIPS":9013,
    "county":"Tolland County",
    "number":157398.95999999993,
    "rate":1036.0306730294549,
    "population":151925
  },
  {
    "state":"CT",
    "FIPS":9009,
    "county":"New Haven County",
    "number":1217146.54,
    "rate":1408.68387824048,
    "population":864031
  },
  {
    "state":"CO",
    "FIPS":8119,
    "county":"Teller County",
    "number":34350.990000000005,
    "rate":1469.4982032854211,
    "population":23376
  },
  {
    "state":"CO",
    "FIPS":8059,
    "county":"Jefferson County",
    "number":219770.1999999998,
    "rate":402.7891155215797,
    "population":545621
  },
  {
    "state":"CO",
    "FIPS":8041,
    "county":"El Paso County",
    "number":54176.92,
    "rate":83.90104750636495,
    "population":645724
  },
  {
    "state":"CO",
    "FIPS":8037,
    "county":"Eagle County",
    "number":585.69,
    "rate":11.273892706588901,
    "population":51951
  },
  {
    "state":"CO",
    "FIPS":8031,
    "county":"Denver County",
    "number":631381.8800000001,
    "rate":996.0778584815768,
    "population":633868
  },
  {
    "state":"CO",
    "FIPS":8001,
    "county":"Adams County",
    "number":1017073.6900000002,
    "rate":2207.895509201069,
    "population":460653
  },
  {
    "state":"NC",
    "FIPS":37067,
    "county":"Forsyth County",
    "number":208035.05,
    "rate":581.1570619638123,
    "population":357967
  },
  {
    "state":"CA",
    "FIPS":6111,
    "county":"Ventura County",
    "number":259796.67000000042,
    "rate":310.95647271734964,
    "population":835476
  },
  {
    "state":"CA",
    "FIPS":6099,
    "county":"Stanislaus County",
    "number":75993.9299999999,
    "rate":145.5448792838618,
    "population":522134
  },
  {
    "state":"CA",
    "FIPS":6085,
    "county":"Santa Clara County",
    "number":1262546.9500000007,
    "rate":685.7576022569144,
    "population":1841098
  },
  {
    "state":"CA",
    "FIPS":6083,
    "county":"Santa Barbara County",
    "number":273269.50000000023,
    "rate":634.4363496220358,
    "population":430728
  },
  {
    "state":"CA",
    "FIPS":6075,
    "county":"San Francisco County",
    "number":556872.7500000007,
    "rate":671.180897466648,
    "population":829691
  },
  {
    "state":"CA",
    "FIPS":6073,
    "county":"San Diego County",
    "number":3337774.9299999997,
    "rate":1048.4894451332577,
    "population":3183413
  },
  {
    "state":"CA",
    "FIPS":6071,
    "county":"San Bernardino County",
    "number":572593.9199999995,
    "rate":275.1994063396502,
    "population":2080651
  },
  {
    "state":"CA",
    "FIPS":6067,
    "county":"Sacramento County",
    "number":289682.23999999923,
    "rate":199.9503303144522,
    "population":1448771
  },
  {
    "state":"CA",
    "FIPS":6065,
    "county":"Riverside County",
    "number":431104.2699999985,
    "rate":190.07965541734816,
    "population":2268019
  },
  {
    "state":"CA",
    "FIPS":6059,
    "county":"Orange County",
    "number":2275476.8300000033,
    "rate":736.4257694360301,
    "population":3089893
  },
  {
    "state":"CA",
    "FIPS":6053,
    "county":"Monterey County",
    "number":290462.06000000023,
    "rate":681.1786281310759,
    "population":426411
  },
  {
    "state":"CA",
    "FIPS":6047,
    "county":"Merced County",
    "number":30123.55,
    "rate":115.0706883181872,
    "population":261783
  },
  {
    "state":"CA",
    "FIPS":6041,
    "county":"Marin County",
    "number":317826.1500000005,
    "rate":1240.815286773406,
    "population":256143
  },
  {
    "state":"CA",
    "FIPS":6019,
    "county":"Fresno County",
    "number":1275031.1399999997,
    "rate":1344.6291445203742,
    "population":948240
  },
  {
    "state":"AZ",
    "FIPS":4013,
    "county":"Maricopa County",
    "number":2356990.520000007,
    "rate":597.7858046477861,
    "population":3942868
  },
  {
    "state":"AR",
    "FIPS":5145,
    "county":"White County",
    "number":9356.850000000004,
    "rate":118.96518842496063,
    "population":78652
  },
  {
    "state":"GA",
    "FIPS":13059,
    "county":"Clarke County",
    "number":26155.52000000001,
    "rate":217.47335162550937,
    "population":120270
  },
  {
    "state":"AL",
    "FIPS":1101,
    "county":"Montgomery County",
    "number":432491.7499999997,
    "rate":1885.1034756304853,
    "population":229426
  },
  {
    "state":"AL",
    "FIPS":1073,
    "county":"Jefferson County",
    "number":1174503.1299999985,
    "rate":1785.0866703244737,
    "population":657953
  },
  {
    "state":"AL",
    "FIPS":1061,
    "county":"Geneva County",
    "number":2400.66,
    "rate":88.90674764832235,
    "population":27002
  },
  {
    "state":"AL",
    "FIPS":1045,
    "county":"Dale County",
    "number":3495.5799999999995,
    "rate":69.48081892267938,
    "population":50310
  },
  {
    "state":"CA",
    "FIPS":6081,
    "county":"San Mateo County",
    "number":356007.4600000002,
    "rate":480.6118492638425,
    "population":740738
  },
  {
    "state":"WY",
    "FIPS":56045,
    "county":"Weston County",
    "number":198.04,
    "rate":28.08679619912069,
    "population":7051
  },
  {
    "state":"WY",
    "FIPS":56041,
    "county":"Uinta County",
    "number":392.07,
    "rate":18.679784649101908,
    "population":20989
  },
  {
    "state":"WY",
    "FIPS":56037,
    "county":"Sweetwater County",
    "number":682.8100000000001,
    "rate":15.134877535187854,
    "population":45115
  },
  {
    "state":"WY",
    "FIPS":56033,
    "county":"Sheridan County",
    "number":1135.08,
    "rate":38.34988850598013,
    "population":29598
  },
  {
    "state":"CA",
    "FIPS":6079,
    "county":"San Luis Obispo County",
    "number":29844.17000000008,
    "rate":108.71084188133842,
    "population":274528
  },
  {
    "state":"WY",
    "FIPS":56029,
    "county":"Park County",
    "number":370.96,
    "rate":12.878319736156916,
    "population":28805
  },
  {
    "state":"WY",
    "FIPS":56025,
    "county":"Natrona County",
    "number":3963.0199999999995,
    "rate":50.36499504359097,
    "population":78686
  },
  {
    "state":"WY",
    "FIPS":56021,
    "county":"Laramie County",
    "number":5707.880000000001,
    "rate":60.17859966894749,
    "population":94849
  },
  {
    "state":"IL",
    "FIPS":17167,
    "county":"Sangamon County",
    "number":61442.18999999998,
    "rate":308.371970468815,
    "population":199247
  },
  {
    "state":"WY",
    "FIPS":56019,
    "county":"Johnson County",
    "number":238.82,
    "rate":27.75040669300488,
    "population":8606
  },
  {
    "state":"WY",
    "FIPS":56009,
    "county":"Converse County",
    "number":578.0199999999999,
    "rate":41.27240271331666,
    "population":14005
  },
  {
    "state":"IL",
    "FIPS":17161,
    "county":"Rock Island County",
    "number":114578.23999999983,
    "rate":779.0993098289861,
    "population":147065
  },
  {
    "state":"WY",
    "FIPS":56007,
    "county":"Carbon County",
    "number":81.46000000000001,
    "rate":5.195484405893233,
    "population":15679
  },
  {
    "state":"WY",
    "FIPS":56005,
    "county":"Campbell County",
    "number":2931.9299999999994,
    "rate":61.21322838591142,
    "population":47897
  },
  {
    "state":"WY",
    "FIPS":56001,
    "county":"Albany County",
    "number":236.32,
    "rate":6.324973904665043,
    "population":37363
  },
  {
    "state":"WV",
    "FIPS":54105,
    "county":"Wirt County",
    "number":116.6,
    "rate":20.082673096796416,
    "population":5806
  },
  {
    "state":"MO",
    "FIPS":29021,
    "county":"Buchanan County",
    "number":143152.66999999995,
    "rate":1594.5006070461907,
    "population":89779
  },
  {
    "state":"WV",
    "FIPS":54103,
    "county":"Wetzel County",
    "number":811.12,
    "rate":49.39829476248477,
    "population":16420
  },
  {
    "state":"WV",
    "FIPS":54097,
    "county":"Upshur County",
    "number":2594.8199999999997,
    "rate":105.88508936586958,
    "population":24506
  },
  {
    "state":"WV",
    "FIPS":54089,
    "county":"Summers County",
    "number":1220.31,
    "rate":88.67887508175278,
    "population":13761
  },
  {
    "state":"GA",
    "FIPS":13089,
    "county":"Dekalb County",
    "number":609245.2699999998,
    "rate":860.1465895999455,
    "population":708304
  },
  {
    "state":"WV",
    "FIPS":54085,
    "county":"Ritchie County",
    "number":123.19,
    "rate":11.996299542311812,
    "population":10269
  },
  {
    "state":"WV",
    "FIPS":54081,
    "county":"Raleigh County",
    "number":16030.770000000004,
    "rate":202.60825054978392,
    "population":79122
  },
  {
    "state":"GA",
    "FIPS":13087,
    "county":"Decatur County",
    "number":10567.68,
    "rate":384.7969995994611,
    "population":27463
  },
  {
    "state":"WV",
    "FIPS":54077,
    "county":"Preston County",
    "number":862.71,
    "rate":25.44116779711,
    "population":33910
  },
  {
    "state":"WV",
    "FIPS":54073,
    "county":"Pleasants County",
    "number":375.06,
    "rate":49.402002107481565,
    "population":7592
  },
  {
    "state":"WV",
    "FIPS":54065,
    "county":"Morgan County",
    "number":16015.440000000002,
    "rate":918.685252108071,
    "population":17433
  },
  {
    "state":"WV",
    "FIPS":54057,
    "county":"Mineral County",
    "number":681.7399999999997,
    "rate":24.406257831239024,
    "population":27933
  },
  {
    "state":"WV",
    "FIPS":54055,
    "county":"Mercer County",
    "number":12631.680000000002,
    "rate":202.5671124795536,
    "population":62358
  },
  {
    "state":"WV",
    "FIPS":54047,
    "county":"McDowell County",
    "number":2239.27,
    "rate":105.06099277470207,
    "population":21314
  },
  {
    "state":"WV",
    "FIPS":54059,
    "county":"Mingo County",
    "number":1002.34,
    "rate":38.371487634943726,
    "population":26122
  },
  {
    "state":"AR",
    "FIPS":5031,
    "county":"Craighead County",
    "number":118130.67999999985,
    "rate":1182.4537801667602,
    "population":99903
  },
  {
    "state":"WV",
    "FIPS":54051,
    "county":"Marshall County",
    "number":3703.0699999999993,
    "rate":113.29916778852036,
    "population":32684
  },
  {
    "state":"WV",
    "FIPS":54049,
    "county":"Marion County",
    "number":6709.239999999999,
    "rate":118.14746332787432,
    "population":56787
  },
  {
    "state":"WV",
    "FIPS":54043,
    "county":"Lincoln County",
    "number":342.43,
    "rate":15.82539975968204,
    "population":21638
  },
  {
    "state":"WV",
    "FIPS":54041,
    "county":"Lewis County",
    "number":2487.369999999999,
    "rate":151.42883233897476,
    "population":16426
  },
  {
    "state":"GA",
    "FIPS":13077,
    "county":"Coweta County",
    "number":21454.590000000004,
    "rate":163.92816210516668,
    "population":130878
  },
  {
    "state":"WV",
    "FIPS":54037,
    "county":"Jefferson County",
    "number":62820.7,
    "rate":1151.2791848403767,
    "population":54566
  },
  {
    "state":"WV",
    "FIPS":54031,
    "county":"Hardy County",
    "number":760.0099999999999,
    "rate":54.795241528478726,
    "population":13870
  },
  {
    "state":"WV",
    "FIPS":54027,
    "county":"Hampshire County",
    "number":951.1199999999999,
    "rate":40.16893318692456,
    "population":23678
  },
  {
    "state":"WV",
    "FIPS":54025,
    "county":"Greenbrier County",
    "number":2131.03,
    "rate":59.516002904541146,
    "population":35806
  },
  {
    "state":"WV",
    "FIPS":54023,
    "county":"Grant County",
    "number":2278.58,
    "rate":192.43138248458746,
    "population":11841
  },
  {
    "state":"WV",
    "FIPS":54017,
    "county":"Doddridge County",
    "number":71.02000000000001,
    "rate":8.639902676399027,
    "population":8220
  },
  {
    "state":"WV",
    "FIPS":54015,
    "county":"Clay County",
    "number":112.74,
    "rate":12.186790617230569,
    "population":9251
  },
  {
    "state":"WV",
    "FIPS":54011,
    "county":"Cabell County",
    "number":66256.14999999953,
    "rate":683.5111156960801,
    "population":96935
  },
  {
    "state":"WV",
    "FIPS":54009,
    "county":"Brooke County",
    "number":1043.97,
    "rate":43.88087932411416,
    "population":23791
  },
  {
    "state":"WV",
    "FIPS":54007,
    "county":"Braxton County",
    "number":2286.24,
    "rate":157.83500172592335,
    "population":14485
  },
  {
    "state":"WV",
    "FIPS":54001,
    "county":"Barbour County",
    "number":2125.3499999999995,
    "rate":126.05871886120994,
    "population":16860
  },
  {
    "state":"WI",
    "FIPS":55141,
    "county":"Wood County",
    "number":1249.3099999999997,
    "rate":16.802189525782065,
    "population":74354
  },
  {
    "state":"WI",
    "FIPS":55139,
    "county":"Winnebago County",
    "number":36691.91999999999,
    "rate":217.58316828160392,
    "population":168634
  },
  {
    "state":"WI",
    "FIPS":55137,
    "county":"Waushara County",
    "number":2301.51,
    "rate":94.02745434489522,
    "population":24477
  },
  {
    "state":"WI",
    "FIPS":55135,
    "county":"Waupaca County",
    "number":977.3200000000002,
    "rate":18.784500653494277,
    "population":52028
  },
  {
    "state":"WI",
    "FIPS":55131,
    "county":"Washington County",
    "number":884.6899999999999,
    "rate":6.672826423092299,
    "population":132581
  },
  {
    "state":"WI",
    "FIPS":55129,
    "county":"Washburn County",
    "number":221.06999999999996,
    "rate":13.960846226712974,
    "population":15835
  },
  {
    "state":"WI",
    "FIPS":55127,
    "county":"Walworth County",
    "number":3287.62,
    "rate":31.90253464270465,
    "population":103052
  },
  {
    "state":"WI",
    "FIPS":55125,
    "county":"Vilas County",
    "number":64.03,
    "rate":3.0087871810535223,
    "population":21281
  },
  {
    "state":"WI",
    "FIPS":55123,
    "county":"Vernon County",
    "number":193.76,
    "rate":6.415256762573254,
    "population":30203
  },
  {
    "state":"WI",
    "FIPS":55121,
    "county":"Trempealeau County",
    "number":197.71,
    "rate":6.731469817166594,
    "population":29371
  },
  {
    "state":"WI",
    "FIPS":55109,
    "county":"St Croix County",
    "number":4820.749999999998,
    "rate":56.56829382773995,
    "population":85220
  },
  {
    "state":"WI",
    "FIPS":55117,
    "county":"Sheboygan County",
    "number":1672.2100000000003,
    "rate":14.547028324866034,
    "population":114952
  },
  {
    "state":"WI",
    "FIPS":55115,
    "county":"Shawano County",
    "number":23.02,
    "rate":0.5533254813354805,
    "population":41603
  },
  {
    "state":"WI",
    "FIPS":55113,
    "county":"Sawyer County",
    "number":126.25999999999999,
    "rate":7.633615477629988,
    "population":16540
  },
  {
    "state":"WI",
    "FIPS":55111,
    "county":"Sauk County",
    "number":2113.98,
    "rate":33.802046690118324,
    "population":62540
  },
  {
    "state":"WI",
    "FIPS":55105,
    "county":"Rock County",
    "number":190280.39999999997,
    "rate":1187.2416095238689,
    "population":160271
  },
  {
    "state":"WI",
    "FIPS":55103,
    "county":"Richland County",
    "number":55.25,
    "rate":3.104106972301815,
    "population":17799
  },
  {
    "state":"WI",
    "FIPS":55101,
    "county":"Racine County",
    "number":259549.2299999996,
    "rate":1333.1889790068965,
    "population":194683
  },
  {
    "state":"WI",
    "FIPS":55099,
    "county":"Price County",
    "number":74.06,
    "rate":5.339581831290555,
    "population":13870
  },
  {
    "state":"WI",
    "FIPS":55097,
    "county":"Portage County",
    "number":645.04,
    "rate":9.151970034477378,
    "population":70481
  },
  {
    "state":"WI",
    "FIPS":55095,
    "county":"Polk County",
    "number":44.339999999999996,
    "rate":1.0187248707639287,
    "population":43525
  },
  {
    "state":"WI",
    "FIPS":55093,
    "county":"Pierce County",
    "number":442.4999999999998,
    "rate":10.879185720607754,
    "population":40674
  },
  {
    "state":"WI",
    "FIPS":55091,
    "county":"Pepin County",
    "number":1047.8200000000002,
    "rate":141.84648707188308,
    "population":7387
  },
  {
    "state":"WI",
    "FIPS":55089,
    "county":"Ozaukee County",
    "number":1946.1799999999998,
    "rate":22.36217396300126,
    "population":87030
  },
  {
    "state":"WI",
    "FIPS":55087,
    "county":"Outagamie County",
    "number":1473.2000000000005,
    "rate":8.235826853088996,
    "population":178877
  },
  {
    "state":"WI",
    "FIPS":55085,
    "county":"Oneida County",
    "number":650.18,
    "rate":18.188888267218708,
    "population":35746
  },
  {
    "state":"WI",
    "FIPS":55083,
    "county":"Oconto County",
    "number":1239.7,
    "rate":33.129342597541424,
    "population":37420
  },
  {
    "state":"MO",
    "FIPS":29510,
    "county":"St Louis City",
    "number":1894433.2900000012,
    "rate":5933.565808678443,
    "population":319274
  },
  {
    "state":"WI",
    "FIPS":55081,
    "county":"Monroe County",
    "number":125,
    "rate":2.7724177700889387,
    "population":45087
  },
  {
    "state":"WI",
    "FIPS":55077,
    "county":"Marquette County",
    "number":21.78,
    "rate":1.4342157250098777,
    "population":15186
  },
  {
    "state":"WI",
    "FIPS":55075,
    "county":"Marinette County",
    "number":538.86,
    "rate":12.988333976089471,
    "population":41488
  },
  {
    "state":"WI",
    "FIPS":55073,
    "county":"Marathon County",
    "number":31118.91,
    "rate":231.0426983643802,
    "population":134689
  },
  {
    "state":"WI",
    "FIPS":55071,
    "county":"Manitowoc County",
    "number":266.47,
    "rate":3.297243120174223,
    "population":80816
  },
  {
    "state":"WI",
    "FIPS":55069,
    "county":"Lincoln County",
    "number":21.95,
    "rate":0.7709328463051418,
    "population":28472
  },
  {
    "state":"WI",
    "FIPS":55067,
    "county":"Langlade County",
    "number":1186.4399999999996,
    "rate":60.1368543768057,
    "population":19729
  },
  {
    "state":"WI",
    "FIPS":55065,
    "county":"Lafayette County",
    "number":527.8199999999999,
    "rate":31.28378378378378,
    "population":16872
  },
  {
    "state":"WI",
    "FIPS":55061,
    "county":"Kewaunee County",
    "number":908.3400000000003,
    "rate":44.0556795033466,
    "population":20618
  },
  {
    "state":"WI",
    "FIPS":55055,
    "county":"Jefferson County",
    "number":820.9800000000001,
    "rate":9.72632925789025,
    "population":84408
  },
  {
    "state":"WI",
    "FIPS":55053,
    "county":"Jackson County",
    "number":799.4700000000004,
    "rate":39.04234018655078,
    "population":20477
  },
  {
    "state":"WI",
    "FIPS":55049,
    "county":"Iowa County",
    "number":863.94,
    "rate":36.351931330472105,
    "population":23766
  },
  {
    "state":"WI",
    "FIPS":55047,
    "county":"Green Lake County",
    "number":14.48,
    "rate":0.7591087811271298,
    "population":19075
  },
  {
    "state":"WI",
    "FIPS":55043,
    "county":"Grant County",
    "number":3033.58,
    "rate":59.492459453629074,
    "population":50991
  },
  {
    "state":"WI",
    "FIPS":55039,
    "county":"Fond Du Lac County",
    "number":1306.0800000000004,
    "rate":12.84222532496903,
    "population":101702
  },
  {
    "state":"WI",
    "FIPS":55037,
    "county":"Florence County",
    "number":22.25,
    "rate":4.975402504472272,
    "population":4472
  },
  {
    "state":"WI",
    "FIPS":55033,
    "county":"Dunn County",
    "number":256.58,
    "rate":5.840655588436148,
    "population":43930
  },
  {
    "state":"WI",
    "FIPS":55031,
    "county":"Douglas County",
    "number":15.55,
    "rate":0.3548931897023918,
    "population":43816
  },
  {
    "state":"WI",
    "FIPS":55029,
    "county":"Door County",
    "number":42.03,
    "rate":1.5167809455070371,
    "population":27710
  },
  {
    "state":"WI",
    "FIPS":55027,
    "county":"Dodge County",
    "number":1216,
    "rate":13.728323699421967,
    "population":88576
  },
  {
    "state":"WI",
    "FIPS":55021,
    "county":"Columbia County",
    "number":2389.38,
    "rate":42.31912293441491,
    "population":56461
  },
  {
    "state":"WI",
    "FIPS":55019,
    "county":"Clark County",
    "number":21.2,
    "rate":0.6151167851443493,
    "population":34465
  },
  {
    "state":"WI",
    "FIPS":55017,
    "county":"Chippewa County",
    "number":257.97,
    "rate":4.091449778750536,
    "population":63051
  },
  {
    "state":"VA",
    "FIPS":51810,
    "county":"Virginia Beach City",
    "number":185798.74,
    "rate":416.8049819525359,
    "population":445769
  },
  {
    "state":"WI",
    "FIPS":55015,
    "county":"Calumet County",
    "number":26.299999999999997,
    "rate":0.5291324641879929,
    "population":49704
  },
  {
    "state":"WI",
    "FIPS":55009,
    "county":"Brown County",
    "number":44525.83999999996,
    "rate":175.98172433145976,
    "population":253014
  },
  {
    "state":"WI",
    "FIPS":55003,
    "county":"Ashland County",
    "number":22.09,
    "rate":1.388696800150877,
    "population":15907
  },
  {
    "state":"WI",
    "FIPS":55001,
    "county":"Adams County",
    "number":991.8199999999999,
    "rate":48.31547155105222,
    "population":20528
  },
  {
    "state":"LA",
    "FIPS":22101,
    "county":"St Mary Parish",
    "number":11447.19,
    "rate":213.86223517542876,
    "population":53526
  },
  {
    "state":"WA",
    "FIPS":53075,
    "county":"Whitman County",
    "number":1579.6200000000006,
    "rate":33.904700579523514,
    "population":46590
  },
  {
    "state":"WA",
    "FIPS":53065,
    "county":"Stevens County",
    "number":862.3300000000002,
    "rate":19.77367576243981,
    "population":43610
  },
  {
    "state":"WA",
    "FIPS":53057,
    "county":"Skagit County",
    "number":3143.4899999999993,
    "rate":26.638617007753904,
    "population":118005
  },
  {
    "state":"WA",
    "FIPS":53049,
    "county":"Pacific County",
    "number":541.3700000000001,
    "rate":26.327384136555956,
    "population":20563
  },
  {
    "state":"WA",
    "FIPS":53045,
    "county":"Mason County",
    "number":650.3999999999997,
    "rate":10.705996609109311,
    "population":60751
  },
  {
    "state":"WA",
    "FIPS":53037,
    "county":"Kittitas County",
    "number":297.13,
    "rate":7.13602958835679,
    "population":41638
  },
  {
    "state":"LA",
    "FIPS":22079,
    "county":"Rapides Parish",
    "number":55483.58000000002,
    "rate":419.9769890470894,
    "population":132111
  },
  {
    "state":"WA",
    "FIPS":53031,
    "county":"Jefferson County",
    "number":50.69,
    "rate":1.6996948663782985,
    "population":29823
  },
  {
    "state":"WA",
    "FIPS":53029,
    "county":"Island County",
    "number":3327.0499999999997,
    "rate":41.9923008961252,
    "population":79230
  },
  {
    "state":"ID",
    "FIPS":16027,
    "county":"Canyon County",
    "number":24671.790000000005,
    "rate":127.26864270386268,
    "population":193856
  },
  {
    "state":"WA",
    "FIPS":53025,
    "county":"Grant County",
    "number":2930.14,
    "rate":31.9577262019021,
    "population":91688
  },
  {
    "state":"WA",
    "FIPS":53021,
    "county":"Franklin County",
    "number":5017.76,
    "rate":58.46092903496406,
    "population":85831
  },
  {
    "state":"LA",
    "FIPS":22073,
    "county":"Ouachita Parish",
    "number":83043.05999999998,
    "rate":534.554618603154,
    "population":155350
  },
  {
    "state":"WA",
    "FIPS":53019,
    "county":"Ferry County",
    "number":20.79,
    "rate":2.6933540614069176,
    "population":7719
  },
  {
    "state":"LA",
    "FIPS":22071,
    "county":"Orleans Parish",
    "number":318597.5299999997,
    "rate":860.6859336461644,
    "population":370167
  },
  {
    "state":"WA",
    "FIPS":53015,
    "county":"Cowlitz County",
    "number":1860.9200000000003,
    "rate":18.284288198708946,
    "population":101777
  },
  {
    "state":"WA",
    "FIPS":53009,
    "county":"Clallam County",
    "number":866.0500000000001,
    "rate":12.053919385369113,
    "population":71848
  },
  {
    "state":"VT",
    "FIPS":50027,
    "county":"Windsor County",
    "number":45.599999999999994,
    "rate":0.8109982748501608,
    "population":56227
  },
  {
    "state":"VT",
    "FIPS":50025,
    "county":"Windham County",
    "number":25.18,
    "rate":0.5723117485283088,
    "population":43997
  },
  {
    "state":"VT",
    "FIPS":50023,
    "county":"Washington County",
    "number":324.6699999999999,
    "rate":5.470337483782917,
    "population":59351
  },
  {
    "state":"FL",
    "FIPS":12073,
    "county":"Leon County",
    "number":132122.17999999993,
    "rate":465.45822852593216,
    "population":283854
  },
  {
    "state":"VT",
    "FIPS":50021,
    "county":"Rutland County",
    "number":1367.7199999999991,
    "rate":22.46767967145789,
    "population":60875
  },
  {
    "state":"VT",
    "FIPS":50017,
    "county":"Orange County",
    "number":30.4,
    "rate":1.0507033491169253,
    "population":28933
  },
  {
    "state":"WI",
    "FIPS":55045,
    "county":"Green County",
    "number":892.3300000000002,
    "rate":24.194842873024054,
    "population":36881
  },
  {
    "state":"VA",
    "FIPS":51840,
    "county":"Winchester City",
    "number":106391.82999999996,
    "rate":3914.6305835602307,
    "population":27178
  },
  {
    "state":"WI",
    "FIPS":55035,
    "county":"Eau Claire County",
    "number":97355.6,
    "rate":965.446251487505,
    "population":100840
  },
  {
    "state":"VA",
    "FIPS":51830,
    "county":"Williamsburg City",
    "number":4807.02,
    "rate":328.8650201819799,
    "population":14617
  },
  {
    "state":"WI",
    "FIPS":55025,
    "county":"Dane County",
    "number":157170.08,
    "rate":312.2834611250305,
    "population":503293
  },
  {
    "state":"VA",
    "FIPS":51820,
    "county":"Waynesboro City",
    "number":36.07,
    "rate":1.7090736792229329,
    "population":21105
  },
  {
    "state":"VA",
    "FIPS":51177,
    "county":"Spotsylvania County",
    "number":10424.919999999998,
    "rate":82.64759745356238,
    "population":126137
  },
  {
    "state":"PR",
    "FIPS":72025,
    "county":"Caguas Municipio",
    "number":146753.15999999992,
    "rate":null,
    "population":null
  },
  {
    "state":"VA",
    "FIPS":51165,
    "county":"Rockingham County",
    "number":1676.4500000000003,
    "rate":21.666558966074316,
    "population":77375
  },
  {
    "state":"PR",
    "FIPS":72021,
    "county":"Bayamon",
    "number":199509.36999999953,
    "rate":null,
    "population":null
  },
  {
    "state":"KY",
    "FIPS":21145,
    "county":"McCracken County",
    "number":104817.14999999998,
    "rate":1596.7270926955591,
    "population":65645
  },
  {
    "state":"VA",
    "FIPS":51163,
    "county":"Rockbridge County",
    "number":231.93,
    "rate":10.357717041800644,
    "population":22392
  },
  {
    "state":"VA",
    "FIPS":51750,
    "county":"Radford City",
    "number":814.0099999999998,
    "rate":48.55123464153643,
    "population":16766
  },
  {
    "state":"VA",
    "FIPS":51149,
    "county":"Prince George County",
    "number":2593.2599999999984,
    "rate":70.01998055945562,
    "population":37036
  },
  {
    "state":"VA",
    "FIPS":51145,
    "county":"Powhatan County",
    "number":3046.1699999999996,
    "rate":108.34293640631668,
    "population":28116
  },
  {
    "state":"PA",
    "FIPS":42133,
    "county":"York County",
    "number":50130.020000000004,
    "rate":114.53080770118278,
    "population":437699
  },
  {
    "state":"VA",
    "FIPS":51740,
    "county":"Portsmouth City",
    "number":7836.609999999999,
    "rate":81.16970148944543,
    "population":96546
  },
  {
    "state":"VA",
    "FIPS":51735,
    "county":"Poquoson City",
    "number":61.2,
    "rate":5.043678918740729,
    "population":12134
  },
  {
    "state":"VA",
    "FIPS":51141,
    "county":"Patrick County",
    "number":2431.579999999999,
    "rate":132.12954409607124,
    "population":18403
  },
  {
    "state":"VA",
    "FIPS":51137,
    "county":"Orange County",
    "number":2797.6900000000005,
    "rate":81.83490800596721,
    "population":34187
  },
  {
    "state":"VA",
    "FIPS":51133,
    "county":"Northumberland County",
    "number":1393.2600000000004,
    "rate":112.7780475959204,
    "population":12354
  },
  {
    "state":"VA",
    "FIPS":51125,
    "county":"Nelson County",
    "number":66.36,
    "rate":4.48166407780104,
    "population":14807
  },
  {
    "state":"VA",
    "FIPS":51121,
    "county":"Montgomery County",
    "number":5466.4800000000005,
    "rate":57.15026502597987,
    "population":95651
  },
  {
    "state":"VA",
    "FIPS":51117,
    "county":"Mecklenburg County",
    "number":1799.8299999999995,
    "rate":56.67327917375148,
    "population":31758
  },
  {
    "state":"VA",
    "FIPS":51685,
    "county":"Manassas Park City",
    "number":19.5,
    "rate":1.2931892035280854,
    "population":15079
  },
  {
    "state":"VA",
    "FIPS":51113,
    "county":"Madison County",
    "number":112.51,
    "rate":8.518967214356023,
    "population":13207
  },
  {
    "state":"VA",
    "FIPS":51109,
    "county":"Louisa County",
    "number":3073.1500000000005,
    "rate":91.6892920010741,
    "population":33517
  },
  {
    "state":"VA",
    "FIPS":51105,
    "county":"Lee County",
    "number":740.76,
    "rate":29.005051098320212,
    "population":25539
  },
  {
    "state":"VA",
    "FIPS":51101,
    "county":"King William County",
    "number":970.5800000000003,
    "rate":60.7485760781123,
    "population":15977
  },
  {
    "state":"VA",
    "FIPS":51097,
    "county":"King and Queen County",
    "number":1147.1999999999998,
    "rate":162.3089983022071,
    "population":7068
  },
  {
    "state":"KY",
    "FIPS":21111,
    "county":"Jefferson County",
    "number":2021553.8200000068,
    "rate":2690.6444464261326,
    "population":751327
  },
  {
    "state":"VA",
    "FIPS":51095,
    "county":"James City",
    "number":24081.650000000005,
    "rate":346.33909566818164,
    "population":69532
  },
  {
    "state":"VA",
    "FIPS":51093,
    "county":"Isle of Wight County",
    "number":2603.780000000001,
    "rate":73.59468626342569,
    "population":35380
  },
  {
    "state":"VA",
    "FIPS":51089,
    "county":"Henry County",
    "number":1075.16,
    "rate":20.353627139179164,
    "population":52824
  },
  {
    "state":"VA",
    "FIPS":51085,
    "county":"Hanover County",
    "number":19339.339999999982,
    "rate":192.56153417237516,
    "population":100432
  },
  {
    "state":"VA",
    "FIPS":51077,
    "county":"Grayson County",
    "number":23.07,
    "rate":1.519862968575005,
    "population":15179
  },
  {
    "state":"VA",
    "FIPS":51073,
    "county":"Gloucester County",
    "number":2399.7699999999995,
    "rate":65.04499376592399,
    "population":36894
  },
  {
    "state":"VA",
    "FIPS":51069,
    "county":"Frederick County",
    "number":203.26000000000002,
    "rate":2.535647010391587,
    "population":80161
  },
  {
    "state":"VA",
    "FIPS":51065,
    "county":"Fluvanna County",
    "number":882.5400000000001,
    "rate":34.018425008672864,
    "population":25943
  },
  {
    "state":"VA",
    "FIPS":51061,
    "county":"Fauquier County",
    "number":8880.249999999998,
    "rate":133.3310811825293,
    "population":66603
  },
  {
    "state":"VA",
    "FIPS":51057,
    "county":"Essex County",
    "number":1336.6100000000006,
    "rate":119.69284498970185,
    "population":11167
  },
  {
    "state":"VA",
    "FIPS":51595,
    "county":"Emporia City",
    "number":726.93,
    "rate":127.4421458625526,
    "population":5704
  },
  {
    "state":"VA",
    "FIPS":51570,
    "county":"Colonial Heights City",
    "number":8959.039999999999,
    "rate":511.6527698458023,
    "population":17510
  },
  {
    "state":"VA",
    "FIPS":51036,
    "county":"Charles City",
    "number":154.20000000000002,
    "rate":21.572467823167322,
    "population":7148
  },
  {
    "state":"VA",
    "FIPS":51033,
    "county":"Caroline County",
    "number":146.61,
    "rate":5.0661736756626015,
    "population":28939
  },
  {
    "state":"TX",
    "FIPS":48329,
    "county":"Midland County",
    "number":77997.30000000002,
    "rate":530.26922292474,
    "population":147090
  },
  {
    "state":"VA",
    "FIPS":51530,
    "county":"Buena Vista City",
    "number":11.73,
    "rate":1.7331560283687943,
    "population":6768
  },
  {
    "state":"VA",
    "FIPS":51029,
    "county":"Buckingham County",
    "number":1195.7099999999998,
    "rate":70.15842281288505,
    "population":17043
  },
  {
    "state":"VA",
    "FIPS":51025,
    "county":"Brunswick County",
    "number":81.14999999999999,
    "rate":4.755904588876517,
    "population":17063
  },
  {
    "state":"VA",
    "FIPS":51021,
    "county":"Bland County",
    "number":275.78000000000003,
    "rate":41.099850968703436,
    "population":6710
  },
  {
    "state":"VA",
    "FIPS":51017,
    "county":"Bath County",
    "number":53.23,
    "rate":11.43501611170784,
    "population":4655
  },
  {
    "state":"VA",
    "FIPS":51009,
    "county":"Amherst County",
    "number":4180.08,
    "rate":128.83587609801202,
    "population":32445
  },
  {
    "state":"KY",
    "FIPS":21067,
    "county":"Fayette County",
    "number":458661.83000000054,
    "rate":1502.5727352244564,
    "population":305251
  },
  {
    "state":"VA",
    "FIPS":51007,
    "county":"Amelia County",
    "number":34.699999999999996,
    "rate":2.7226363279717534,
    "population":12745
  },
  {
    "state":"VA",
    "FIPS":51005,
    "county":"Alleghany County",
    "number":271.86,
    "rate":16.7991101773466,
    "population":16183
  },
  {
    "state":"VA",
    "FIPS":51001,
    "county":"Accomack County",
    "number":525.3,
    "rate":15.768618857503075,
    "population":33313
  },
  {
    "state":"UT",
    "FIPS":49051,
    "county":"Wasatch County",
    "number":615.2400000000002,
    "rate":24.24686687160086,
    "population":25374
  },
  {
    "state":"UT",
    "FIPS":49045,
    "county":"Tooele County",
    "number":1544.3500000000001,
    "rate":25.816616516215316,
    "population":59820
  },
  {
    "state":"UT",
    "FIPS":49041,
    "county":"Sevier County",
    "number":627.3000000000001,
    "rate":30.253195080781293,
    "population":20735
  },
  {
    "state":"UT",
    "FIPS":49037,
    "county":"San Juan County",
    "number":11.47,
    "rate":0.7698503255252032,
    "population":14899
  },
  {
    "state":"UT",
    "FIPS":49029,
    "county":"Morgan County",
    "number":169.82000000000002,
    "rate":17.325035706998573,
    "population":9802
  },
  {
    "state":"UT",
    "FIPS":49025,
    "county":"Kane County",
    "number":49.21,
    "rate":6.818622696411252,
    "population":7217
  },
  {
    "state":"UT",
    "FIPS":49023,
    "county":"Juab County",
    "number":648.9599999999999,
    "rate":62.835011618900076,
    "population":10328
  },
  {
    "state":"UT",
    "FIPS":49021,
    "county":"Iron County",
    "number":541.9999999999999,
    "rate":11.598544832013694,
    "population":46730
  },
  {
    "state":"UT",
    "FIPS":49013,
    "county":"Duchesne County",
    "number":369.28,
    "rate":19.373590052987776,
    "population":19061
  },
  {
    "state":"UT",
    "FIPS":49005,
    "county":"Cache County",
    "number":1524.8100000000002,
    "rate":13.149674882284966,
    "population":115958
  },
  {
    "state":"UT",
    "FIPS":49001,
    "county":"Beaver County",
    "number":123.46000000000001,
    "rate":19.034844279987666,
    "population":6486
  },
  {
    "state":"PA",
    "FIPS":42077,
    "county":"Lehigh County",
    "number":175814.40999999986,
    "rate":494.87686795076365,
    "population":355269
  },
  {
    "state":"TX",
    "FIPS":48483,
    "county":"Wheeler County",
    "number":19.13,
    "rate":3.411806670233636,
    "population":5607
  },
  {
    "state":"PA",
    "FIPS":42069,
    "county":"Lackawanna County",
    "number":129897.32999999973,
    "rate":605.5537270989685,
    "population":214510
  },
  {
    "state":"TX",
    "FIPS":48475,
    "county":"Ward County",
    "number":39.22,
    "rate":3.6061051857300477,
    "population":10876
  },
  {
    "state":"PA",
    "FIPS":42063,
    "county":"Indiana County",
    "number":47595.469999999994,
    "rate":539.576120350531,
    "population":88209
  },
  {
    "state":"ME",
    "FIPS":23001,
    "county":"Androscoggin County",
    "number":29693.03,
    "rate":276.1988168102245,
    "population":107506
  },
  {
    "state":"VA",
    "FIPS":51670,
    "county":"Hopewell City",
    "number":34441.11000000001,
    "rate":1542.9222291909332,
    "population":22322
  },
  {
    "state":"TX",
    "FIPS":48469,
    "county":"Victoria County",
    "number":22890.51000000001,
    "rate":256.4016084950044,
    "population":89276
  },
  {
    "state":"PA",
    "FIPS":42051,
    "county":"Fayette County",
    "number":83869.44999999998,
    "rate":619.0586732999209,
    "population":135479
  },
  {
    "state":"TX",
    "FIPS":48457,
    "county":"Tyler County",
    "number":289.97,
    "rate":13.517154577661756,
    "population":21452
  },
  {
    "state":"PA",
    "FIPS":42045,
    "county":"Delaware County",
    "number":447302.11999999994,
    "rate":797.4493863608809,
    "population":560916
  },
  {
    "state":"TX",
    "FIPS":48451,
    "county":"Tom Green County",
    "number":12414.33,
    "rate":109.35712335162657,
    "population":113521
  },
  {
    "state":"PA",
    "FIPS":42043,
    "county":"Dauphin County",
    "number":37825.05999999999,
    "rate":140.16705143835435,
    "population":269857
  },
  {
    "state":"VA",
    "FIPS":51650,
    "county":"Hampton City",
    "number":8220.740000000002,
    "rate":60.07424566839372,
    "population":136843
  },
  {
    "state":"TX",
    "FIPS":48449,
    "county":"Titus County",
    "number":1636.93,
    "rate":50.06973969962989,
    "population":32693
  },
  {
    "state":"PA",
    "FIPS":42021,
    "county":"Cambria County",
    "number":27397.24,
    "rate":193.57766143106457,
    "population":141531
  },
  {
    "state":"TX",
    "FIPS":48427,
    "county":"Starr County",
    "number":951.7400000000004,
    "rate":15.362786718535622,
    "population":61951
  },
  {
    "state":"PA",
    "FIPS":42017,
    "county":"Bucks County",
    "number":263065.08999999997,
    "rate":420.1049363690515,
    "population":626189
  },
  {
    "state":"GA",
    "FIPS":13275,
    "county":"Thomas County",
    "number":14271.51,
    "rate":320.4920278463957,
    "population":44530
  },
  {
    "state":"TX",
    "FIPS":48423,
    "county":"Smith County",
    "number":43202.24000000002,
    "rate":200.9958081520046,
    "population":214941
  },
  {
    "state":"PA",
    "FIPS":42013,
    "county":"Blair County",
    "number":191870.64000000004,
    "rate":1510.8043370420244,
    "population":126999
  },
  {
    "state":"VA",
    "FIPS":51620,
    "county":"Franklin City",
    "number":2047.39,
    "rate":241.03955733458915,
    "population":8494
  },
  {
    "state":"TX",
    "FIPS":48419,
    "county":"Shelby County",
    "number":247.34000000000003,
    "rate":9.517469601354472,
    "population":25988
  },
  {
    "state":"PA",
    "FIPS":42003,
    "county":"Allegheny County",
    "number":1414013.2099999967,
    "rate":1149.2463810049364,
    "population":1230383
  },
  {
    "state":"VA",
    "FIPS":51610,
    "county":"Falls Church City",
    "number":3329.959999999999,
    "rate":253.49878197320336,
    "population":13136
  },
  {
    "state":"TX",
    "FIPS":48409,
    "county":"San Patricio County",
    "number":4979.92,
    "rate":76.17818026066206,
    "population":65372
  },
  {
    "state":"TX",
    "FIPS":48405,
    "county":"San Augustine County",
    "number":171.96000000000004,
    "rate":19.461294703485745,
    "population":8836
  },
  {
    "state":"TX",
    "FIPS":48403,
    "county":"Sabine County",
    "number":29.03,
    "rate":2.7729487057025506,
    "population":10469
  },
  {
    "state":"TX",
    "FIPS":48401,
    "county":"Rusk County",
    "number":1246.2999999999997,
    "rate":22.357964228692385,
    "population":55743
  },
  {
    "state":"TX",
    "FIPS":48395,
    "county":"Robertson County",
    "number":682.1199999999999,
    "rate":41.36567616737416,
    "population":16490
  },
  {
    "state":"VA",
    "FIPS":51590,
    "county":"Danville City",
    "number":26653.09,
    "rate":622.9395129247885,
    "population":42786
  },
  {
    "state":"TX",
    "FIPS":48389,
    "county":"Reeves County",
    "number":409.1999999999999,
    "rate":29.455801900374308,
    "population":13892
  },
  {
    "state":"MI",
    "FIPS":26163,
    "county":"Wayne County",
    "number":1254508.609999998,
    "rate":699.7599301639351,
    "population":1792770
  },
  {
    "state":"TX",
    "FIPS":48387,
    "county":"Red River County",
    "number":306.74,
    "rate":24.129955947136565,
    "population":12712
  },
  {
    "state":"TX",
    "FIPS":48377,
    "county":"Presidio County",
    "number":30.450000000000003,
    "rate":4.038461538461539,
    "population":7540
  },
  {
    "state":"TX",
    "FIPS":48373,
    "county":"Polk County",
    "number":2969.5899999999997,
    "rate":64.91616570116952,
    "population":45745
  },
  {
    "state":"TX",
    "FIPS":48361,
    "county":"Orange County",
    "number":5808.22,
    "rate":70.01989126110597,
    "population":82951
  },
  {
    "state":"TX",
    "FIPS":48357,
    "county":"Ochiltree County",
    "number":49.14999999999999,
    "rate":4.627624517465398,
    "population":10621
  },
  {
    "state":"TX",
    "FIPS":48353,
    "county":"Nolan County",
    "number":695.4,
    "rate":46.74329501915708,
    "population":14877
  },
  {
    "state":"VA",
    "FIPS":51550,
    "county":"Chesapeake City",
    "number":287337.79000000004,
    "rate":1259.2151646887655,
    "population":228188
  },
  {
    "state":"AR",
    "FIPS":5119,
    "county":"Pulaski County",
    "number":785473.8899999985,
    "rate":2018.9120645250798,
    "population":389058
  },
  {
    "state":"TX",
    "FIPS":48349,
    "county":"Navarro County",
    "number":1498.3199999999995,
    "rate":31.130040929961968,
    "population":48131
  },
  {
    "state":"TX",
    "FIPS":48341,
    "county":"Moore County",
    "number":624.6,
    "rate":27.88517344524309,
    "population":22399
  },
  {
    "state":"TX",
    "FIPS":48337,
    "county":"Montague County",
    "number":659.67,
    "rate":33.778995340263194,
    "population":19529
  },
  {
    "state":"TX",
    "FIPS":48325,
    "county":"Medina County",
    "number":2783.4399999999996,
    "rate":59.390189258966856,
    "population":46867
  },
  {
    "state":"VA",
    "FIPS":51510,
    "county":"Alexandria City",
    "number":15273.609999999999,
    "rate":103.94877972422992,
    "population":146934
  },
  {
    "state":"TX",
    "FIPS":48309,
    "county":"McLennan County",
    "number":40556.939999999886,
    "rate":169.33226448889565,
    "population":239511
  },
  {
    "state":"TX",
    "FIPS":48321,
    "county":"Matagorda County",
    "number":2798.8499999999985,
    "rate":76.54241645244211,
    "population":36566
  },
  {
    "state":"TX",
    "FIPS":48305,
    "county":"Lynn County",
    "number":108.49999999999999,
    "rate":18.781374415786736,
    "population":5777
  },
  {
    "state":"TX",
    "FIPS":48297,
    "county":"Live Oak County",
    "number":61.29,
    "rate":5.252828248200206,
    "population":11668
  },
  {
    "state":"TX",
    "FIPS":48293,
    "county":"Limestone County",
    "number":2271.2799999999993,
    "rate":95.9803921568627,
    "population":23664
  },
  {
    "state":"TX",
    "FIPS":48289,
    "county":"Leon County",
    "number":35.18,
    "rate":2.0986696891964445,
    "population":16763
  },
  {
    "state":"AR",
    "FIPS":5111,
    "county":"Poinsett County",
    "number":13051.669999999998,
    "rate":536.5537512846864,
    "population":24325
  },
  {
    "state":"TX",
    "FIPS":48285,
    "county":"Lavaca County",
    "number":827.5899999999999,
    "rate":42.53867900282704,
    "population":19455
  },
  {
    "state":"TX",
    "FIPS":48281,
    "county":"Lampasas County",
    "number":522.64,
    "rate":26.02659230118022,
    "population":20081
  },
  {
    "state":"TX",
    "FIPS":48277,
    "county":"Lamar County",
    "number":3457.1299999999997,
    "rate":69.34230584082155,
    "population":49856
  },
  {
    "state":"TX",
    "FIPS":48273,
    "county":"Kleberg County",
    "number":145346.99,
    "rate":4516.687072715972,
    "population":32180
  },
  {
    "state":"TX",
    "FIPS":48257,
    "county":"Kaufman County",
    "number":3461.1699999999996,
    "rate":32.4444131983502,
    "population":106680
  },
  {
    "state":"TX",
    "FIPS":48249,
    "county":"Jim Wells County",
    "number":5525.379999999999,
    "rate":132.6812986264528,
    "population":41644
  },
  {
    "state":"TX",
    "FIPS":48241,
    "county":"Jasper County",
    "number":49.06,
    "rate":1.3682507809013833,
    "population":35856
  },
  {
    "state":"TX",
    "FIPS":48233,
    "county":"Hutchinson County",
    "number":780.2900000000001,
    "rate":35.55175870238747,
    "population":21948
  },
  {
    "state":"TX",
    "FIPS":48227,
    "county":"Howard County",
    "number":1490.5799999999997,
    "rate":41.94563259792885,
    "population":35536
  },
  {
    "state":"TX",
    "FIPS":48225,
    "county":"Houston County",
    "number":26.85,
    "rate":1.1598773165147522,
    "population":23149
  },
  {
    "state":"TX",
    "FIPS":48217,
    "county":"Hill County",
    "number":993.96,
    "rate":28.31068956677775,
    "population":35109
  },
  {
    "state":"TX",
    "FIPS":48213,
    "county":"Henderson County",
    "number":5698.680000000001,
    "rate":72.1881887968382,
    "population":78942
  },
  {
    "state":"TX",
    "FIPS":48209,
    "county":"Hays County",
    "number":11280.10000000001,
    "rate":66.80347043321198,
    "population":168855
  },
  {
    "state":"TX",
    "FIPS":48197,
    "county":"Hardeman County",
    "number":304.44,
    "rate":75.20750988142292,
    "population":4048
  },
  {
    "state":"TX",
    "FIPS":48193,
    "county":"Hamilton County",
    "number":104.67,
    "rate":12.62605548854041,
    "population":8290
  },
  {
    "state":"TX",
    "FIPS":48185,
    "county":"Grimes County",
    "number":2080.09,
    "rate":77.83602754078731,
    "population":26724
  },
  {
    "state":"TX",
    "FIPS":48181,
    "county":"Grayson County",
    "number":10175.699999999997,
    "rate":83.66041551906994,
    "population":121631
  },
  {
    "state":"TX",
    "FIPS":48177,
    "county":"Gonzales County",
    "number":653.2099999999999,
    "rate":32.70792649341545,
    "population":19971
  },
  {
    "state":"MI",
    "FIPS":26055,
    "county":"Grand Traverse County",
    "number":19686.960000000003,
    "rate":221.18937138363017,
    "population":89005
  },
  {
    "state":"TX",
    "FIPS":48171,
    "county":"Gillespie County",
    "number":2709.0299999999993,
    "rate":107.7149105367793,
    "population":25150
  },
  {
    "state":"TX",
    "FIPS":48165,
    "county":"Gaines County",
    "number":12.61,
    "rate":0.6833947539562106,
    "population":18452
  },
  {
    "state":"TX",
    "FIPS":48161,
    "county":"Freestone County",
    "number":557.31,
    "rate":28.60787433909963,
    "population":19481
  },
  {
    "state":"TX",
    "FIPS":48149,
    "county":"Fayette County",
    "number":3616.6,
    "rate":146.30258899676375,
    "population":24720
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
    "FIPS":48133,
    "county":"Eastland County",
    "number":907.1500000000002,
    "rate":49.29359343585286,
    "population":18403
  },
  {
    "state":"TX",
    "FIPS":48117,
    "county":"Deaf Smith County",
    "number":280.47,
    "rate":14.488583531356547,
    "population":19358
  },
  {
    "state":"MI",
    "FIPS":26019,
    "county":"Benzie County",
    "number":4644.95,
    "rate":267.15074480934027,
    "population":17387
  },
  {
    "state":"TX",
    "FIPS":48099,
    "county":"Coryell County",
    "number":1688.4000000000005,
    "rate":21.888612321095216,
    "population":77136
  },
  {
    "state":"MI",
    "FIPS":26007,
    "county":"Alpena County",
    "number":11421.77,
    "rate":390.6214090287278,
    "population":29240
  },
  {
    "state":"TX",
    "FIPS":48075,
    "county":"Childress County",
    "number":160.39000000000001,
    "rate":22.602874859075538,
    "population":7096
  },
  {
    "state":"TX",
    "FIPS":48059,
    "county":"Callahan County",
    "number":185.01,
    "rate":13.689234184239732,
    "population":13515
  },
  {
    "state":"TX",
    "FIPS":48051,
    "county":"Burleson County",
    "number":1474.4400000000003,
    "rate":85.14899514899517,
    "population":17316
  },
  {
    "state":"TX",
    "FIPS":48043,
    "county":"Brewster County",
    "number":41.07,
    "rate":4.43808082991139,
    "population":9254
  },
  {
    "state":"TX",
    "FIPS":48041,
    "county":"Brazos County",
    "number":216467.3199999998,
    "rate":1079.2768501298808,
    "population":200567
  },
  {
    "state":"TX",
    "FIPS":48037,
    "county":"Bowie County",
    "number":57027.69000000009,
    "rate":612.6212830869724,
    "population":93088
  },
  {
    "state":"TX",
    "FIPS":48035,
    "county":"Bosque County",
    "number":623.18,
    "rate":34.408922754127325,
    "population":18111
  },
  {
    "state":"PR",
    "FIPS":72127,
    "county":"San Juan",
    "number":868185.2199999997,
    "rate":null,
    "population":null
  },
  {
    "state":"TX",
    "FIPS":48011,
    "county":"Armstrong County",
    "number":10.45,
    "rate":5.36447638603696,
    "population":1948
  },
  {
    "state":"TN",
    "FIPS":47185,
    "county":"White County",
    "number":2719.8700000000013,
    "rate":104.36953184957795,
    "population":26060
  },
  {
    "state":"IA",
    "FIPS":19155,
    "county":"Pottawattamie County",
    "number":216012.18999999977,
    "rate":2324.761510148731,
    "population":92918
  },
  {
    "state":"TN",
    "FIPS":47183,
    "county":"Weakley County",
    "number":1439.0200000000007,
    "rate":41.45598064070064,
    "population":34712
  },
  {
    "state":"TN",
    "FIPS":47181,
    "county":"Wayne County",
    "number":838.9599999999997,
    "rate":49.37963507945849,
    "population":16990
  },
  {
    "state":"TN",
    "FIPS":47177,
    "county":"Warren County",
    "number":2092.630000000001,
    "rate":52.63815872217334,
    "population":39755
  },
  {
    "state":"TN",
    "FIPS":47173,
    "county":"Union County",
    "number":513.5,
    "rate":26.83844666283385,
    "population":19133
  },
  {
    "state":"TN",
    "FIPS":47169,
    "county":"Trousdale County",
    "number":318.54999999999995,
    "rate":40.886920806058264,
    "population":7791
  },
  {
    "state":"TN",
    "FIPS":47161,
    "county":"Stewart County",
    "number":93.24999999999999,
    "rate":6.99235152969406,
    "population":13336
  },
  {
    "state":"TN",
    "FIPS":47153,
    "county":"Sequatchie County",
    "number":363.52,
    "rate":25.214677117292084,
    "population":14417
  },
  {
    "state":"TN",
    "FIPS":47149,
    "county":"Rutherford County",
    "number":63810.17000000001,
    "rate":232.70717849223948,
    "population":274208
  },
  {
    "state":"TN",
    "FIPS":47141,
    "county":"Putnam County",
    "number":12031.789999999999,
    "rate":164.6588934050444,
    "population":73071
  },
  {
    "state":"TN",
    "FIPS":47137,
    "county":"Pickett County",
    "number":1755.6899999999991,
    "rate":345.0648584905659,
    "population":5088
  },
  {
    "state":"TN",
    "FIPS":47129,
    "county":"Morgan County",
    "number":550.0499999999998,
    "rate":25.064935064935057,
    "population":21945
  },
  {
    "state":"TN",
    "FIPS":47121,
    "county":"Meigs County",
    "number":233.78999999999996,
    "rate":20.019695153279667,
    "population":11678
  },
  {
    "state":"TN",
    "FIPS":47109,
    "county":"McNairy County",
    "number":4300.68,
    "rate":164.32998356959996,
    "population":26171
  },
  {
    "state":"IA",
    "FIPS":19117,
    "county":"Lucas County",
    "number":27858.74,
    "rate":3178.7699680511187,
    "population":8764
  },
  {
    "state":"TN",
    "FIPS":47107,
    "county":"McMinn County",
    "number":8594.89,
    "rate":163.86200716845877,
    "population":52452
  },
  {
    "state":"TN",
    "FIPS":47117,
    "county":"Marshall County",
    "number":144.32000000000002,
    "rate":4.665416693605742,
    "population":30934
  },
  {
    "state":"TN",
    "FIPS":47105,
    "county":"Loudon County",
    "number":3503.3799999999997,
    "rate":70.42960818607642,
    "population":49743
  },
  {
    "state":"TN",
    "FIPS":47101,
    "county":"Lewis County",
    "number":146.17,
    "rate":12.284225565173545,
    "population":11899
  },
  {
    "state":"TN",
    "FIPS":47097,
    "county":"Lauderdale County",
    "number":1151.6899999999998,
    "rate":41.60579458834579,
    "population":27681
  },
  {
    "state":"TN",
    "FIPS":47089,
    "county":"Jefferson County",
    "number":5423.45,
    "rate":103.68101091590357,
    "population":52309
  },
  {
    "state":"TN",
    "FIPS":47085,
    "county":"Humphreys County",
    "number":92.72,
    "rate":5.072210065645514,
    "population":18280
  },
  {
    "state":"TN",
    "FIPS":47081,
    "county":"Hickman County",
    "number":65.64,
    "rate":2.7177873468035774,
    "population":24152
  },
  {
    "state":"IA",
    "FIPS":19103,
    "county":"Johnson County",
    "number":410929.04999999993,
    "rate":3001.3881077764704,
    "population":136913
  },
  {
    "state":"TN",
    "FIPS":47079,
    "county":"Henry County",
    "number":4417.129999999998,
    "rate":136.60945135151846,
    "population":32334
  },
  {
    "state":"TN",
    "FIPS":47073,
    "county":"Hawkins County",
    "number":5669.41,
    "rate":100.16448472641827,
    "population":56601
  },
  {
    "state":"TN",
    "FIPS":47069,
    "county":"Hardeman County",
    "number":636.74,
    "rate":23.99894467058646,
    "population":26532
  },
  {
    "state":"TN",
    "FIPS":47057,
    "county":"Grainger County",
    "number":753.2400000000004,
    "rate":33.270318021201426,
    "population":22640
  },
  {
    "state":"TN",
    "FIPS":47053,
    "county":"Gibson County",
    "number":1320.68,
    "rate":26.58908798067244,
    "population":49670
  },
  {
    "state":"TN",
    "FIPS":47051,
    "county":"Franklin County",
    "number":1414.1700000000005,
    "rate":34.67377712394264,
    "population":40785
  },
  {
    "state":"TN",
    "FIPS":47049,
    "county":"Fentress County",
    "number":1590.2399999999998,
    "rate":88.78566244207468,
    "population":17911
  },
  {
    "state":"TN",
    "FIPS":47045,
    "county":"Dyer County",
    "number":13004.720000000003,
    "rate":340.23284409910275,
    "population":38223
  },
  {
    "state":"TN",
    "FIPS":47041,
    "county":"De Kalb County",
    "number":3498.3700000000003,
    "rate":184.90327695560254,
    "population":18920
  },
  {
    "state":"TN",
    "FIPS":47033,
    "county":"Crockett County",
    "number":10.31,
    "rate":0.7060676619641145,
    "population":14602
  },
  {
    "state":"TN",
    "FIPS":47029,
    "county":"Cocke County",
    "number":4886.56,
    "rate":137.69612263300272,
    "population":35488
  },
  {
    "state":"TN",
    "FIPS":47025,
    "county":"Claiborne County",
    "number":2329.050000000001,
    "rate":73.43454407869848,
    "population":31716
  },
  {
    "state":"TN",
    "FIPS":47021,
    "county":"Cheatham County",
    "number":2143.9500000000003,
    "rate":54.58816040738384,
    "population":39275
  },
  {
    "state":"TN",
    "FIPS":47013,
    "county":"Campbell County",
    "number":234821.87999999983,
    "rate":5808.2534814118535,
    "population":40429
  },
  {
    "state":"TN",
    "FIPS":47009,
    "county":"Blount County",
    "number":9121.329999999993,
    "rate":73.54962262933809,
    "population":124016
  },
  {
    "state":"TN",
    "FIPS":47005,
    "county":"Benton County",
    "number":109.72999999999999,
    "rate":6.703524955708962,
    "population":16369
  },
  {
    "state":"TN",
    "FIPS":47001,
    "county":"Anderson County",
    "number":28882.96999999999,
    "rate":383.3225391179709,
    "population":75349
  },
  {
    "state":"SD",
    "FIPS":46135,
    "county":"Yankton County",
    "number":180.12,
    "rate":7.973086627417998,
    "population":22591
  },
  {
    "state":"SD",
    "FIPS":46129,
    "county":"Walworth County",
    "number":218.13,
    "rate":39.95054945054945,
    "population":5460
  },
  {
    "state":"SD",
    "FIPS":46127,
    "county":"Union County",
    "number":463.27,
    "rate":31.2155515127013,
    "population":14841
  },
  {
    "state":"SD",
    "FIPS":46125,
    "county":"Turner County",
    "number":238.49999999999994,
    "rate":28.62457993278924,
    "population":8332
  },
  {
    "state":"SD",
    "FIPS":46123,
    "county":"Tripp County",
    "number":117.64000000000001,
    "rate":21.447584320875116,
    "population":5485
  },
  {
    "state":"SD",
    "FIPS":46121,
    "county":"Todd County",
    "number":13.48,
    "rate":1.3568193256165073,
    "population":9935
  },
  {
    "state":"MA",
    "FIPS":25027,
    "county":"Worcester County",
    "number":193989.35999999984,
    "rate":240.6418791936316,
    "population":806133
  },
  {
    "state":"SD",
    "FIPS":46115,
    "county":"Spink County",
    "number":11,
    "rate":1.6536380036079374,
    "population":6652
  },
  {
    "state":"SD",
    "FIPS":46109,
    "county":"Roberts County",
    "number":72.78,
    "rate":7.033243138770777,
    "population":10348
  },
  {
    "state":"SD",
    "FIPS":46105,
    "county":"Perkins County",
    "number":16.33,
    "rate":5.40728476821192,
    "population":3020
  },
  {
    "state":"SD",
    "FIPS":46099,
    "county":"Minnehaha County",
    "number":210886.5900000002,
    "rate":1201.5576801454051,
    "population":175511
  },
  {
    "state":"SD",
    "FIPS":46097,
    "county":"Miner County",
    "number":13.78,
    "rate":5.931984502798105,
    "population":2323
  },
  {
    "state":"SD",
    "FIPS":46093,
    "county":"Meade County",
    "number":374.57,
    "rate":14.448773337447925,
    "population":25924
  },
  {
    "state":"SD",
    "FIPS":46085,
    "county":"Lyman County",
    "number":23.98,
    "rate":6.32217242288426,
    "population":3793
  },
  {
    "state":"SD",
    "FIPS":46081,
    "county":"Lawrence County",
    "number":2491.2300000000005,
    "rate":102.26724137931036,
    "population":24360
  },
  {
    "state":"MA",
    "FIPS":25009,
    "county":"Essex County",
    "number":103776.83999999997,
    "rate":137.1325500850332,
    "population":756763
  },
  {
    "state":"SD",
    "FIPS":46079,
    "county":"Lake County",
    "number":35.730000000000004,
    "rate":3.019776876267749,
    "population":11832
  },
  {
    "state":"SD",
    "FIPS":46077,
    "county":"Kingsbury County",
    "number":221.52999999999997,
    "rate":42.2767175572519,
    "population":5240
  },
  {
    "state":"SD",
    "FIPS":46065,
    "county":"Hughes County",
    "number":3870.420000000001,
    "rate":221.9150278080386,
    "population":17441
  },
  {
    "state":"SD",
    "FIPS":46057,
    "county":"Hamlin County",
    "number":15.52,
    "rate":2.612354822420468,
    "population":5941
  },
  {
    "state":"SD",
    "FIPS":46055,
    "county":"Haakon County",
    "number":125.98,
    "rate":65.99266631744369,
    "population":1909
  },
  {
    "state":"SD",
    "FIPS":46051,
    "county":"Grant County",
    "number":796.2199999999999,
    "rate":109.55145844799118,
    "population":7268
  },
  {
    "state":"SD",
    "FIPS":46047,
    "county":"Fall River County",
    "number":345.8,
    "rate":49.407058151164456,
    "population":6999
  },
  {
    "state":"SD",
    "FIPS":46043,
    "county":"Douglas County",
    "number":11.41,
    "rate":3.839165545087483,
    "population":2972
  },
  {
    "state":"SD",
    "FIPS":46041,
    "county":"Dewey County",
    "number":155.63,
    "rate":28.07178932178932,
    "population":5544
  },
  {
    "state":"SD",
    "FIPS":46039,
    "county":"Deuel County",
    "number":15.04,
    "rate":3.443223443223443,
    "population":4368
  },
  {
    "state":"SD",
    "FIPS":46035,
    "county":"Davison County",
    "number":2608.4900000000002,
    "rate":131.755227800788,
    "population":19798
  },
  {
    "state":"SD",
    "FIPS":46033,
    "county":"Custer County",
    "number":2824.8199999999993,
    "rate":339.72579675285624,
    "population":8315
  },
  {
    "state":"SD",
    "FIPS":46029,
    "county":"Codington County",
    "number":2067.8499999999995,
    "rate":74.97371378847755,
    "population":27581
  },
  {
    "state":"SD",
    "FIPS":46027,
    "county":"Clay County",
    "number":255.19,
    "rate":18.110141224895322,
    "population":14091
  },
  {
    "state":"SD",
    "FIPS":46019,
    "county":"Butte County",
    "number":826.44,
    "rate":80.72279742137137,
    "population":10238
  },
  {
    "state":"SD",
    "FIPS":46015,
    "county":"Brule County",
    "number":379.04,
    "rate":71.4630467571644,
    "population":5304
  },
  {
    "state":"SD",
    "FIPS":46013,
    "county":"Brown County",
    "number":1070.4800000000002,
    "rate":28.535480087434028,
    "population":37514
  },
  {
    "state":"SD",
    "FIPS":46011,
    "county":"Brookings County",
    "number":131.6,
    "rate":4.026188582267637,
    "population":32686
  },
  {
    "state":"SC",
    "FIPS":45089,
    "county":"Williamsburg County",
    "number":838.9599999999999,
    "rate":24.974994046201473,
    "population":33592
  },
  {
    "state":"MD",
    "FIPS":24510,
    "county":"Baltimore City",
    "number":510191.4699999995,
    "rate":818.9926478850622,
    "population":622950
  },
  {
    "state":"SC",
    "FIPS":45081,
    "county":"Saluda County",
    "number":1043.77,
    "rate":52.2852276711917,
    "population":19963
  },
  {
    "state":"SC",
    "FIPS":45077,
    "county":"Pickens County",
    "number":13191.010000000018,
    "rate":110.24110784248192,
    "population":119656
  },
  {
    "state":"SC",
    "FIPS":45073,
    "county":"Oconee County",
    "number":3924.149999999999,
    "rate":52.61453682474558,
    "population":74583
  },
  {
    "state":"SC",
    "FIPS":45065,
    "county":"McCormick County",
    "number":314.47999999999996,
    "rate":31.60920695547291,
    "population":9949
  },
  {
    "state":"SC",
    "FIPS":45069,
    "county":"Marlboro County",
    "number":1162.0600000000002,
    "rate":41.27073196718401,
    "population":28157
  },
  {
    "state":"IN",
    "FIPS":18097,
    "county":"Marion County",
    "number":715741.9900000012,
    "rate":779.1822278057147,
    "population":918581
  },
  {
    "state":"SC",
    "FIPS":45067,
    "county":"Marion County",
    "number":4443.91,
    "rate":137.19582600104968,
    "population":32391
  },
  {
    "state":"SC",
    "FIPS":45061,
    "county":"Lee County",
    "number":227.13,
    "rate":12.166157801703358,
    "population":18669
  },
  {
    "state":"SC",
    "FIPS":45053,
    "county":"Jasper County",
    "number":427.97,
    "rate":16.477495861086513,
    "population":25973
  },
  {
    "state":"SC",
    "FIPS":45041,
    "county":"Florence County",
    "number":179405.5099999999,
    "rate":1299.4749384325648,
    "population":138060
  },
  {
    "state":"SC",
    "FIPS":45037,
    "county":"Edgefield County",
    "number":323.03999999999996,
    "rate":12.26982680036463,
    "population":26328
  },
  {
    "state":"SC",
    "FIPS":45033,
    "county":"Dillon County",
    "number":2956.8700000000013,
    "rate":94.02709320443925,
    "population":31447
  },
  {
    "state":"SC",
    "FIPS":45029,
    "county":"Colleton County",
    "number":177364.53000000003,
    "rate":4639.407010201414,
    "population":38230
  },
  {
    "state":"SC",
    "FIPS":45025,
    "county":"Chesterfield County",
    "number":1955.8300000000002,
    "rate":42.42581344902386,
    "population":46100
  },
  {
    "state":"SC",
    "FIPS":45017,
    "county":"Calhoun County",
    "number":425.7300000000001,
    "rate":28.530357860876563,
    "population":14922
  },
  {
    "state":"SC",
    "FIPS":45013,
    "county":"Beaufort County",
    "number":19432.46999999999,
    "rate":115.819754204861,
    "population":167782
  },
  {
    "state":"SC",
    "FIPS":45005,
    "county":"Allendale County",
    "number":492.9100000000001,
    "rate":49.27129148340665,
    "population":10004
  },
  {
    "state":"SC",
    "FIPS":45001,
    "county":"Abbeville County",
    "number":2703.6100000000006,
    "rate":107.86395372032716,
    "population":25065
  },
  {
    "state":"RI",
    "FIPS":44005,
    "county":"Newport County",
    "number":34818.61,
    "rate":420.08843685150333,
    "population":82884
  },
  {
    "state":"RI",
    "FIPS":44003,
    "county":"Kent County",
    "number":19013.710000000014,
    "rate":115.30448756822325,
    "population":164900
  },
  {
    "state":"MO",
    "FIPS":29165,
    "county":"Platte County",
    "number":24543.07,
    "rate":266.4076373662158,
    "population":92126
  },
  {
    "state":"PR",
    "FIPS":72075,
    "county":"Juana D�az Municipio",
    "number":3957.9599999999987,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72047,
    "county":"Corozal Municipio",
    "number":3314.6400000000012,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72063,
    "county":"Gurabo Municipio",
    "number":3944.7599999999993,
    "rate":null,
    "population":null
  },
  {
    "state":"VA",
    "FIPS":51197,
    "county":"Wythe County",
    "number":2935.350000000001,
    "rate":100.00851759735617,
    "population":29351
  },
  {
    "state":"PR",
    "FIPS":72089,
    "county":"Luquillo Municipio",
    "number":1089.6399999999999,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72129,
    "county":"San Lorenzo Municipio",
    "number":1511.6599999999999,
    "rate":null,
    "population":null
  },
  {
    "state":"VA",
    "FIPS":51173,
    "county":"Smyth County",
    "number":3672.7000000000003,
    "rate":115.26535480023853,
    "population":31863
  },
  {
    "state":"PR",
    "FIPS":72041,
    "county":"Cidra Municipio",
    "number":2136.38,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72105,
    "county":"Naranjito Municipio",
    "number":1176.15,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72015,
    "county":"Arroyo Municipio",
    "number":492.05,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72095,
    "county":"Maunabo Municipio",
    "number":113.31,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72153,
    "county":"Yauco Municipio",
    "number":2844.66,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72145,
    "county":"Vega Baja Municipio",
    "number":3386.09,
    "rate":null,
    "population":null
  },
  {
    "state":"TX",
    "FIPS":48019,
    "county":"Bandera County",
    "number":3881.09,
    "rate":188.3292895962733,
    "population":20608
  },
  {
    "state":"PR",
    "FIPS":72143,
    "county":"Vega Alta Municipio",
    "number":3231.91,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72079,
    "county":"Lajas Municipio",
    "number":5204.920000000003,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72073,
    "county":"Jayuya Municipio",
    "number":307.37,
    "rate":null,
    "population":null
  },
  {
    "state":"VA",
    "FIPS":51185,
    "county":"Tazewell County",
    "number":11247.020000000002,
    "rate":254.1814319291268,
    "population":44248
  },
  {
    "state":"PR",
    "FIPS":72065,
    "county":"Hatillo Municipio",
    "number":2655.0999999999995,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72121,
    "county":"Sabana Grande Municipio",
    "number":3212.5300000000007,
    "rate":null,
    "population":null
  },
  {
    "state":"VA",
    "FIPS":51193,
    "county":"Westmoreland County",
    "number":329.5,
    "rate":18.83179973709779,
    "population":17497
  },
  {
    "state":"PR",
    "FIPS":72081,
    "county":"",
    "number":1231.76,
    "rate":null,
    "population":null
  },
  {
    "state":"TX",
    "FIPS":48003,
    "county":"Andrews County",
    "number":455.72999999999996,
    "rate":28.27284571003164,
    "population":16119
  },
  {
    "state":"PR",
    "FIPS":72111,
    "county":"Pe�uelas Municipio",
    "number":608.57,
    "rate":null,
    "population":null
  },
  {
    "state":"KY",
    "FIPS":21173,
    "county":"Montgomery County",
    "number":5661.560000000001,
    "rate":210.62351190476195,
    "population":26880
  },
  {
    "state":"PR",
    "FIPS":72133,
    "county":"Santa Isabel",
    "number":435.47999999999996,
    "rate":null,
    "population":null
  },
  {
    "state":"KY",
    "FIPS":21155,
    "county":"Marion County",
    "number":21125.17,
    "rate":1056.7868934467233,
    "population":19990
  },
  {
    "state":"VA",
    "FIPS":51183,
    "county":"Sussex County",
    "number":137.02,
    "rate":11.47475085838707,
    "population":11941
  },
  {
    "state":"PR",
    "FIPS":72061,
    "county":"Guaynabo",
    "number":11901.679999999998,
    "rate":null,
    "population":null
  },
  {
    "state":"VA",
    "FIPS":51169,
    "county":"Scott County",
    "number":2083.43,
    "rate":91.374501118372,
    "population":22801
  },
  {
    "state":"PR",
    "FIPS":72033,
    "county":"Catano",
    "number":2724.2599999999998,
    "rate":null,
    "population":null
  },
  {
    "state":"VA",
    "FIPS":51161,
    "county":"Roanoke County",
    "number":4348.279999999999,
    "rate":46.7401188851028,
    "population":93031
  },
  {
    "state":"PR",
    "FIPS":72017,
    "county":"Barceloneta",
    "number":2250.76,
    "rate":null,
    "population":null
  },
  {
    "state":"VA",
    "FIPS":51157,
    "county":"Rappahannock County",
    "number":415.90999999999997,
    "rate":55.97711978465679,
    "population":7430
  },
  {
    "state":"PR",
    "FIPS":72009,
    "county":"Aibonito",
    "number":5102.93,
    "rate":null,
    "population":null
  },
  {
    "state":"VA",
    "FIPS":51153,
    "county":"Prince William County",
    "number":14704.699999999992,
    "rate":34.09975279783684,
    "population":431226
  },
  {
    "state":"PR",
    "FIPS":72001,
    "county":"Adjuntas",
    "number":1255.91,
    "rate":null,
    "population":null
  },
  {
    "state":"PA",
    "FIPS":42131,
    "county":"Wyoming County",
    "number":3078.9499999999994,
    "rate":108.61260053619301,
    "population":28348
  },
  {
    "state":"PA",
    "FIPS":42127,
    "county":"Wayne County",
    "number":1628.0300000000004,
    "rate":31.499080971268267,
    "population":51685
  },
  {
    "state":"VA",
    "FIPS":51730,
    "county":"Petersburg City",
    "number":6567.91,
    "rate":204.18161469829326,
    "population":32167
  },
  {
    "state":"ME",
    "FIPS":23031,
    "county":"York County",
    "number":46979.26999999999,
    "rate":236.0115043580919,
    "population":199055
  },
  {
    "state":"PA",
    "FIPS":42123,
    "county":"Warren County",
    "number":1437.4700000000003,
    "rate":34.87988935261575,
    "population":41212
  },
  {
    "state":"PA",
    "FIPS":42117,
    "county":"Tioga County",
    "number":15220.370000000003,
    "rate":357.1934477012979,
    "population":42611
  },
  {
    "state":"ME",
    "FIPS":23027,
    "county":"Waldo County",
    "number":14423.25,
    "rate":370.88251176425206,
    "population":38889
  },
  {
    "state":"PA",
    "FIPS":42115,
    "county":"Susquehanna County",
    "number":2747.9600000000005,
    "rate":64.24520141210577,
    "population":42773
  },
  {
    "state":"PA",
    "FIPS":42109,
    "county":"Snyder County",
    "number":5758.900000000001,
    "rate":144.7105236707207,
    "population":39796
  },
  {
    "state":"ME",
    "FIPS":23019,
    "county":"Penobscot County",
    "number":29518.95,
    "rate":192.1656511210062,
    "population":153612
  },
  {
    "state":"TX",
    "FIPS":48505,
    "county":"Zapata County",
    "number":144.47,
    "rate":10.15106801573918,
    "population":14232
  },
  {
    "state":"PA",
    "FIPS":42099,
    "county":"Perry County",
    "number":6711.28,
    "rate":146.6241370270034,
    "population":45772
  },
  {
    "state":"VA",
    "FIPS":51700,
    "county":"Newport News City",
    "number":43943.12000000005,
    "rate":243.46972358120007,
    "population":180487
  },
  {
    "state":"TX",
    "FIPS":48499,
    "county":"Wood County",
    "number":131.04999999999998,
    "rate":3.0817166372721925,
    "population":42525
  },
  {
    "state":"PA",
    "FIPS":42093,
    "county":"Montour County",
    "number":51532.660000000025,
    "rate":2786.9049808014724,
    "population":18491
  },
  {
    "state":"TX",
    "FIPS":48491,
    "county":"Williamson County",
    "number":279826.01999999984,
    "rate":612.8565702934558,
    "population":456593
  },
  {
    "state":"PA",
    "FIPS":42085,
    "county":"Mercer County",
    "number":15243.640000000007,
    "rate":131.69792737608756,
    "population":115747
  },
  {
    "state":"TX",
    "FIPS":48467,
    "county":"Van Zandt County",
    "number":1143.1499999999996,
    "rate":21.834590774520098,
    "population":52355
  },
  {
    "state":"PA",
    "FIPS":42061,
    "county":"Huntingdon County",
    "number":1558.6,
    "rate":33.86935546959885,
    "population":46018
  },
  {
    "state":"TX",
    "FIPS":48465,
    "county":"Val Verde County",
    "number":1272.1,
    "rate":25.986149980593627,
    "population":48953
  },
  {
    "state":"PA",
    "FIPS":42059,
    "county":"Greene County",
    "number":2710.0400000000004,
    "rate":71.15954206490915,
    "population":38084
  },
  {
    "state":"VA",
    "FIPS":51660,
    "county":"Harrisonburg City",
    "number":7537.080000000002,
    "rate":147.1396220521631,
    "population":51224
  },
  {
    "state":"TX",
    "FIPS":48459,
    "county":"Upshur County",
    "number":303.34,
    "rate":7.592611133360032,
    "population":39952
  },
  {
    "state":"PA",
    "FIPS":42053,
    "county":"Forest County",
    "number":22.78,
    "rate":2.970013037809648,
    "population":7670
  },
  {
    "state":"TX",
    "FIPS":48453,
    "county":"Travis County",
    "number":1904873.579999999,
    "rate":1736.2743914888642,
    "population":1097104
  },
  {
    "state":"PA",
    "FIPS":42047,
    "county":"Elk County",
    "number":4232.740000000001,
    "rate":133.85004585270215,
    "population":31623
  },
  {
    "state":"PA",
    "FIPS":42037,
    "county":"Columbia County",
    "number":1990.75,
    "rate":29.74642878489032,
    "population":66924
  },
  {
    "state":"TX",
    "FIPS":48441,
    "county":"Taylor County",
    "number":16786.84999999999,
    "rate":125.17784704408511,
    "population":134104
  },
  {
    "state":"PA",
    "FIPS":42035,
    "county":"Clinton County",
    "number":1533.3299999999997,
    "rate":38.59375786559275,
    "population":39730
  },
  {
    "state":"TX",
    "FIPS":48437,
    "county":"Swisher County",
    "number":28.76,
    "rate":3.648820096422228,
    "population":7882
  },
  {
    "state":"PA",
    "FIPS":42031,
    "county":"Clarion County",
    "number":5915.529999999999,
    "rate":149.9500633713561,
    "population":39450
  },
  {
    "state":"PA",
    "FIPS":42029,
    "county":"Chester County",
    "number":179625.97999999963,
    "rate":354.7697983674252,
    "population":506317
  },
  {
    "state":"PA",
    "FIPS":42027,
    "county":"Centre County",
    "number":3473.64,
    "rate":22.32674731010014,
    "population":155582
  },
  {
    "state":"TX",
    "FIPS":48425,
    "county":"Somervell County",
    "number":749.8,
    "rate":87.24691645333954,
    "population":8594
  },
  {
    "state":"PA",
    "FIPS":42019,
    "county":"Butler County",
    "number":24183.429999999986,
    "rate":130.6583859656705,
    "population":185089
  },
  {
    "state":"TX",
    "FIPS":48411,
    "county":"San Saba County",
    "number":22,
    "rate":3.674014696058784,
    "population":5988
  },
  {
    "state":"PA",
    "FIPS":42005,
    "county":"Armstrong County",
    "number":5772.419999999999,
    "rate":84.43901582750651,
    "population":68362
  },
  {
    "state":"OR",
    "FIPS":41071,
    "county":"Yamhill County",
    "number":5955.839999999999,
    "rate":59.102718043881666,
    "population":100771
  },
  {
    "state":"OR",
    "FIPS":41061,
    "county":"Union County",
    "number":35.78,
    "rate":1.3858548299635913,
    "population":25818
  },
  {
    "state":"OR",
    "FIPS":41053,
    "county":"Polk County",
    "number":938.96,
    "rate":12.313583549715425,
    "population":76254
  },
  {
    "state":"AR",
    "FIPS":5007,
    "county":"Benton County",
    "number":152742.3300000004,
    "rate":656.2816287773015,
    "population":232739
  },
  {
    "state":"OR",
    "FIPS":41047,
    "county":"Marion County",
    "number":13316.740000000002,
    "rate":41.60376150085134,
    "population":320085
  },
  {
    "state":"OR",
    "FIPS":41045,
    "county":"Malheur County",
    "number":1824.68,
    "rate":59.61837548193164,
    "population":30606
  },
  {
    "state":"OR",
    "FIPS":41043,
    "county":"Linn County",
    "number":1686.06,
    "rate":14.245184183845893,
    "population":118360
  },
  {
    "state":"OR",
    "FIPS":41037,
    "county":"Lake County",
    "number":14.01,
    "rate":1.7984595635430038,
    "population":7790
  },
  {
    "state":"OR",
    "FIPS":41035,
    "county":"Klamath County",
    "number":2622.45,
    "rate":39.7088216589443,
    "population":66042
  },
  {
    "state":"AR",
    "FIPS":5005,
    "county":"Baxter County",
    "number":26040.670000000002,
    "rate":633.9477079630938,
    "population":41077
  },
  {
    "state":"OR",
    "FIPS":41031,
    "county":"Jefferson County",
    "number":10.26,
    "rate":0.47152902247345924,
    "population":21759
  },
  {
    "state":"OR",
    "FIPS":41027,
    "county":"Hood River County",
    "number":501.55000000000007,
    "rate":22.16501679335337,
    "population":22628
  },
  {
    "state":"OR",
    "FIPS":41023,
    "county":"Grant County",
    "number":19.97,
    "rate":2.7292606259395926,
    "population":7317
  },
  {
    "state":"OR",
    "FIPS":41019,
    "county":"Douglas County",
    "number":4705.91,
    "rate":43.94678844250201,
    "population":107082
  },
  {
    "state":"OR",
    "FIPS":41013,
    "county":"Crook County",
    "number":172.74,
    "rate":8.370808296181432,
    "population":20636
  },
  {
    "state":"OR",
    "FIPS":41011,
    "county":"Coos County",
    "number":3071.0299999999997,
    "rate":48.987557824214385,
    "population":62690
  },
  {
    "state":"OR",
    "FIPS":41007,
    "county":"Clatsop County",
    "number":2296.320000000001,
    "rate":61.49264922475433,
    "population":37343
  },
  {
    "state":"OR",
    "FIPS":41005,
    "county":"Clackamas County",
    "number":5826.12,
    "rate":15.190384314543463,
    "population":383540
  },
  {
    "state":"OR",
    "FIPS":41003,
    "county":"Benton County",
    "number":6784.109999999998,
    "rate":78.53797175272052,
    "population":86380
  },
  {
    "state":"OK",
    "FIPS":40153,
    "county":"Woodward County",
    "number":470.81,
    "rate":22.802828498086892,
    "population":20647
  },
  {
    "state":"ID",
    "FIPS":16011,
    "county":"Bingham County",
    "number":34570.63,
    "rate":759.9109753148836,
    "population":45493
  },
  {
    "state":"OK",
    "FIPS":40149,
    "county":"Washita County",
    "number":11.83,
    "rate":1.0164976800137482,
    "population":11638
  },
  {
    "state":"OK",
    "FIPS":40145,
    "county":"Wagoner County",
    "number":690.1600000000002,
    "rate":9.20250143339067,
    "population":74997
  },
  {
    "state":"OK",
    "FIPS":40137,
    "county":"Stephens County",
    "number":1639.5400000000002,
    "rate":36.56667484443651,
    "population":44837
  },
  {
    "state":"LA",
    "FIPS":22033,
    "county":"East Baton Rouge Parish",
    "number":1109816.5200000005,
    "rate":2497.921475772909,
    "population":444296
  },
  {
    "state":"OK",
    "FIPS":40127,
    "county":"Pushmataha County",
    "number":17.47,
    "rate":1.5552390278643282,
    "population":11233
  },
  {
    "state":"OK",
    "FIPS":40121,
    "county":"Pittsburg County",
    "number":1429.6600000000003,
    "rate":31.6780040327048,
    "population":45131
  },
  {
    "state":"OK",
    "FIPS":40117,
    "county":"Pawnee County",
    "number":438.75000000000006,
    "rate":26.61833404113329,
    "population":16483
  },
  {
    "state":"OK",
    "FIPS":40113,
    "county":"Osage County",
    "number":629.96,
    "rate":13.12143303478442,
    "population":48010
  },
  {
    "state":"OK",
    "FIPS":40105,
    "county":"Nowata County",
    "number":251.23999999999998,
    "rate":23.74220374220374,
    "population":10582
  },
  {
    "state":"OK",
    "FIPS":40101,
    "county":"Muskogee County",
    "number":12402.62,
    "rate":175.85384528130672,
    "population":70528
  },
  {
    "state":"OK",
    "FIPS":40089,
    "county":"McCurtain County",
    "number":379.47999999999996,
    "rate":11.420145054019079,
    "population":33229
  },
  {
    "state":"OK",
    "FIPS":40097,
    "county":"Mayes County",
    "number":1112.6799999999998,
    "rate":27.06526233854686,
    "population":41111
  },
  {
    "state":"OK",
    "FIPS":40093,
    "county":"Major County",
    "number":20.86,
    "rate":2.723593158375767,
    "population":7659
  },
  {
    "state":"OK",
    "FIPS":40085,
    "county":"Love County",
    "number":126.8,
    "rate":13.259437415037121,
    "population":9563
  },
  {
    "state":"OK",
    "FIPS":40081,
    "county":"Lincoln County",
    "number":103.28999999999999,
    "rate":3.0188513809732567,
    "population":34215
  },
  {
    "state":"OK",
    "FIPS":40077,
    "county":"Latimer County",
    "number":188.84,
    "rate":17.25984827712275,
    "population":10941
  },
  {
    "state":"OK",
    "FIPS":40073,
    "county":"Kingfisher County",
    "number":1378.3000000000006,
    "rate":91.91117631368368,
    "population":14996
  },
  {
    "state":"OK",
    "FIPS":40069,
    "county":"Johnston County",
    "number":71.93,
    "rate":6.536119945479328,
    "population":11005
  },
  {
    "state":"OK",
    "FIPS":40061,
    "county":"Haskell County",
    "number":267.91,
    "rate":20.821481308774384,
    "population":12867
  },
  {
    "state":"OK",
    "FIPS":40057,
    "county":"Harmon County",
    "number":66.5,
    "rate":22.931034482758623,
    "population":2900
  },
  {
    "state":"OK",
    "FIPS":40051,
    "county":"Grady County",
    "number":1681.8699999999994,
    "rate":31.701096995513993,
    "population":53054
  },
  {
    "state":"OK",
    "FIPS":40049,
    "county":"Garvin County",
    "number":561.9099999999999,
    "rate":20.6054272093876,
    "population":27270
  },
  {
    "state":"OH",
    "FIPS":39175,
    "county":"Wyandot County",
    "number":621.6700000000001,
    "rate":27.51726274787536,
    "population":22592
  },
  {
    "state":"OH",
    "FIPS":39167,
    "county":"Washington County",
    "number":154099.03000000003,
    "rate":2505.349385445796,
    "population":61508
  },
  {
    "state":"OH",
    "FIPS":39163,
    "county":"Vinton County",
    "number":92.5,
    "rate":6.990100506309982,
    "population":13233
  },
  {
    "state":"OH",
    "FIPS":39159,
    "county":"Union County",
    "number":2790.919999999999,
    "rate":52.8433210262236,
    "population":52815
  },
  {
    "state":"OH",
    "FIPS":39155,
    "county":"Trumbull County",
    "number":21946.200000000004,
    "rate":105.79592072850335,
    "population":207439
  },
  {
    "state":"OH",
    "FIPS":39131,
    "county":"Pike County",
    "number":1174.3499999999995,
    "rate":41.20381740991542,
    "population":28501
  },
  {
    "state":"NE",
    "FIPS":31141,
    "county":"Platte County",
    "number":11068.060000000001,
    "rate":339.94901406720317,
    "population":32558
  },
  {
    "state":"OH",
    "FIPS":39125,
    "county":"Paulding County",
    "number":206.3,
    "rate":10.696323948773786,
    "population":19287
  },
  {
    "state":"NE",
    "FIPS":31137,
    "county":"Phelps County",
    "number":1344.8600000000001,
    "rate":145.92664930555557,
    "population":9216
  },
  {
    "state":"OH",
    "FIPS":39117,
    "county":"Morrow County",
    "number":441.5799999999999,
    "rate":12.615490100848497,
    "population":35003
  },
  {
    "state":"OH",
    "FIPS":39107,
    "county":"Mercer County",
    "number":3530.8600000000006,
    "rate":86.48345457662823,
    "population":40827
  },
  {
    "state":"OH",
    "FIPS":39103,
    "county":"Medina County",
    "number":15298.479999999996,
    "rate":88.07212269147513,
    "population":173704
  },
  {
    "state":"NE",
    "FIPS":31125,
    "county":"Nance County",
    "number":64.44,
    "rate":17.40210640021604,
    "population":3703
  },
  {
    "state":"OH",
    "FIPS":39093,
    "county":"Lorain County",
    "number":58404.8,
    "rate":193.5888894413232,
    "population":301695
  },
  {
    "state":"OH",
    "FIPS":39091,
    "county":"Logan County",
    "number":1513.3599999999997,
    "rate":33.294319531834375,
    "population":45454
  },
  {
    "state":"OH",
    "FIPS":39087,
    "county":"Lawrence County",
    "number":6972.01,
    "rate":112.2562310813422,
    "population":62108
  },
  {
    "state":"NE",
    "FIPS":31119,
    "county":"Madison County",
    "number":2849.2699999999995,
    "rate":81.12493593758896,
    "population":35122
  },
  {
    "state":"OH",
    "FIPS":39081,
    "county":"Jefferson County",
    "number":14615.240000000002,
    "rate":213.8387932169664,
    "population":68347
  },
  {
    "state":"OH",
    "FIPS":39077,
    "county":"Huron County",
    "number":7502.010000000002,
    "rate":126.52011130786747,
    "population":59295
  },
  {
    "state":"OH",
    "FIPS":39059,
    "county":"Guernsey County",
    "number":1080.7799999999997,
    "rate":27.146409464245338,
    "population":39813
  },
  {
    "state":"OH",
    "FIPS":39055,
    "county":"Geauga County",
    "number":6989.139999999998,
    "rate":74.41826293429303,
    "population":93917
  },
  {
    "state":"OH",
    "FIPS":39051,
    "county":"Fulton County",
    "number":2229.21,
    "rate":52.43226079593565,
    "population":42516
  },
  {
    "state":"OH",
    "FIPS":39047,
    "county":"Fayette County",
    "number":827.31,
    "rate":28.676256499133444,
    "population":28850
  },
  {
    "state":"OH",
    "FIPS":39043,
    "county":"Erie County",
    "number":6232.830000000001,
    "rate":81.53672065095107,
    "population":76442
  },
  {
    "state":"OH",
    "FIPS":39031,
    "county":"Coshocton County",
    "number":1031.38,
    "rate":28.022061620387984,
    "population":36806
  },
  {
    "state":"OH",
    "FIPS":39019,
    "county":"Carroll County",
    "number":1243.5600000000004,
    "rate":43.54201680672271,
    "population":28560
  },
  {
    "state":"NE",
    "FIPS":31081,
    "county":"Hamilton County",
    "number":1845.5500000000002,
    "rate":204.4930747922438,
    "population":9025
  },
  {
    "state":"OH",
    "FIPS":39005,
    "county":"Ashland County",
    "number":1455.3400000000006,
    "rate":27.335462058602566,
    "population":53240
  },
  {
    "state":"KS",
    "FIPS":20031,
    "county":"Coffey County",
    "number":554.0100000000002,
    "rate":65.13167176110983,
    "population":8506
  },
  {
    "state":"NY",
    "FIPS":36123,
    "county":"Yates County",
    "number":4438.6100000000015,
    "rate":175.68216900850985,
    "population":25265
  },
  {
    "state":"HI",
    "FIPS":15003,
    "county":"Honolulu County",
    "number":918219.3399999985,
    "rate":940.079959375312,
    "population":976746
  },
  {
    "state":"NY",
    "FIPS":36117,
    "county":"Wayne County",
    "number":4287.52,
    "rate":46.09790450386522,
    "population":93009
  },
  {
    "state":"KS",
    "FIPS":20027,
    "county":"Clay County",
    "number":1842.3200000000002,
    "rate":216.31090759657158,
    "population":8517
  },
  {
    "state":"NY",
    "FIPS":36115,
    "county":"Washington County",
    "number":2573.57,
    "rate":40.820512007105926,
    "population":63046
  },
  {
    "state":"KS",
    "FIPS":20025,
    "county":"Clark County",
    "number":81.91,
    "rate":37.67709291628335,
    "population":2174
  },
  {
    "state":"NY",
    "FIPS":36111,
    "county":"Ulster County",
    "number":35590.12999999999,
    "rate":195.864408831752,
    "population":181708
  },
  {
    "state":"HI",
    "FIPS":15001,
    "county":"Hawaii County",
    "number":14813.820000000003,
    "rate":78.40240068591028,
    "population":188946
  },
  {
    "state":"NY",
    "FIPS":36109,
    "county":"Tompkins County",
    "number":1939.3100000000004,
    "rate":18.820212724661314,
    "population":103044
  },
  {
    "state":"NY",
    "FIPS":36107,
    "county":"Tioga County",
    "number":2578.0199999999995,
    "rate":51.21724446210389,
    "population":50335
  },
  {
    "state":"NY",
    "FIPS":36101,
    "county":"Steuben County",
    "number":7477.42,
    "rate":75.49289233502948,
    "population":99048
  },
  {
    "state":"KS",
    "FIPS":20019,
    "county":"Chautauqua County",
    "number":10.61,
    "rate":2.975322490185081,
    "population":3566
  },
  {
    "state":"NY",
    "FIPS":36099,
    "county":"Seneca County",
    "number":3147.3500000000004,
    "rate":88.9559368022385,
    "population":35381
  },
  {
    "state":"NY",
    "FIPS":36095,
    "county":"Schoharie County",
    "number":825.99,
    "rate":25.77352720918622,
    "population":32048
  },
  {
    "state":"NY",
    "FIPS":36093,
    "county":"Schenectady County",
    "number":17242.39,
    "rate":111.20463589399617,
    "population":155051
  },
  {
    "state":"KS",
    "FIPS":20011,
    "county":"Bourbon County",
    "number":457.52999999999986,
    "rate":30.791439531597003,
    "population":14859
  },
  {
    "state":"NY",
    "FIPS":36083,
    "county":"Rensselaer County",
    "number":31305.489999999987,
    "rate":196.1841049808236,
    "population":159572
  },
  {
    "state":"KS",
    "FIPS":20007,
    "county":"Barber County",
    "number":143.10999999999999,
    "rate":29.325819672131146,
    "population":4880
  },
  {
    "state":"NY",
    "FIPS":36075,
    "county":"Oswego County",
    "number":7911.449999999998,
    "rate":65.03238693343415,
    "population":121654
  },
  {
    "state":"NY",
    "FIPS":36043,
    "county":"Herkimer County",
    "number":1786.5800000000004,
    "rate":27.668029486464725,
    "population":64572
  },
  {
    "state":"NY",
    "FIPS":36031,
    "county":"Essex County",
    "number":2271.6400000000003,
    "rate":58.148773869861266,
    "population":39066
  },
  {
    "state":"NY",
    "FIPS":36023,
    "county":"Cortland County",
    "number":2786.9100000000008,
    "rate":56.6410584720444,
    "population":49203
  },
  {
    "state":"NY",
    "FIPS":36021,
    "county":"Columbia County",
    "number":5282.829999999999,
    "rate":84.45231320139398,
    "population":62554
  },
  {
    "state":"NY",
    "FIPS":36019,
    "county":"Clinton County",
    "number":78537.19999999991,
    "rate":959.8073961821416,
    "population":81826
  },
  {
    "state":"NY",
    "FIPS":36011,
    "county":"Cayuga County",
    "number":106630.71999999999,
    "rate":1339.295879020812,
    "population":79617
  },
  {
    "state":"NV",
    "FIPS":32033,
    "county":"White Pine County",
    "number":72,
    "rate":7.207928721593753,
    "population":9989
  },
  {
    "state":"KS",
    "FIPS":20009,
    "county":"Barton County",
    "number":1071.5899999999997,
    "rate":38.89195368925343,
    "population":27553
  },
  {
    "state":"NY",
    "FIPS":36079,
    "county":"Putnam County",
    "number":9718.069999999998,
    "rate":97.51517705730654,
    "population":99657
  },
  {
    "state":"AL",
    "FIPS":1093,
    "county":"Marion County",
    "number":4439.8099999999995,
    "rate":145.49121772185083,
    "population":30516
  },
  {
    "state":"NV",
    "FIPS":32027,
    "county":"Pershing County",
    "number":14.09,
    "rate":2.082779009608278,
    "population":6765
  },
  {
    "state":"NV",
    "FIPS":32023,
    "county":"Nye County",
    "number":1982.0599999999997,
    "rate":46.177107844279284,
    "population":42923
  },
  {
    "state":"NV",
    "FIPS":32021,
    "county":"Mineral County",
    "number":21.21,
    "rate":4.54954954954955,
    "population":4662
  },
  {
    "state":"KS",
    "FIPS":20001,
    "county":"Allen County",
    "number":1134.75,
    "rate":85.05734202833371,
    "population":13341
  },
  {
    "state":"NY",
    "FIPS":36063,
    "county":"Niagara County",
    "number":33689.51000000005,
    "rate":156.7960365257703,
    "population":214862
  },
  {
    "state":"NV",
    "FIPS":32019,
    "county":"Lyon County",
    "number":330.88,
    "rate":6.4678056217991315,
    "population":51158
  },
  {
    "state":"NV",
    "FIPS":32017,
    "county":"Lincoln County",
    "number":106.34,
    "rate":19.884068810770383,
    "population":5348
  },
  {
    "state":"NY",
    "FIPS":36051,
    "county":"Livingston County",
    "number":3663.1,
    "rate":56.475285991797975,
    "population":64862
  },
  {
    "state":"NV",
    "FIPS":32013,
    "county":"Humboldt County",
    "number":978.19,
    "rate":57.20074849424011,
    "population":17101
  },
  {
    "state":"NY",
    "FIPS":36035,
    "county":"Fulton County",
    "number":5289.799999999999,
    "rate":96.15545416537908,
    "population":55013
  },
  {
    "state":"IA",
    "FIPS":19193,
    "county":"Woodbury County",
    "number":29323.589999999993,
    "rate":286.55907358545875,
    "population":102330
  },
  {
    "state":"NV",
    "FIPS":32005,
    "county":"Douglas County",
    "number":2200.26,
    "rate":46.823008661233004,
    "population":46991
  },
  {
    "state":"NY",
    "FIPS":36027,
    "county":"Dutchess County",
    "number":116299.1400000002,
    "rate":391.13183560906776,
    "population":297340
  },
  {
    "state":"IA",
    "FIPS":19189,
    "county":"Winnebago County",
    "number":241.83,
    "rate":22.758328627893846,
    "population":10626
  },
  {
    "state":"NV",
    "FIPS":32001,
    "county":"Churchill County",
    "number":507.07000000000016,
    "rate":20.852490027552747,
    "population":24317
  },
  {
    "state":"NM",
    "FIPS":35055,
    "county":"Taos County",
    "number":71.50999999999999,
    "rate":2.1790535393241304,
    "population":32817
  },
  {
    "state":"GA",
    "FIPS":13133,
    "county":"Greene County",
    "number":1088.1700000000005,
    "rate":67.454128440367,
    "population":16132
  },
  {
    "state":"NM",
    "FIPS":35043,
    "county":"Sandoval County",
    "number":3308.17,
    "rate":24.447195146283967,
    "population":135319
  },
  {
    "state":"NM",
    "FIPS":35047,
    "county":"San Miguel County",
    "number":2590.800000000001,
    "rate":89.48295513418303,
    "population":28953
  },
  {
    "state":"NM",
    "FIPS":35039,
    "county":"Rio Arriba County",
    "number":810.0899999999999,
    "rate":20.121460506706406,
    "population":40260
  },
  {
    "state":"NM",
    "FIPS":35031,
    "county":"McKinley County",
    "number":1082.97,
    "rate":14.893145937620332,
    "population":72716
  },
  {
    "state":"MO",
    "FIPS":29093,
    "county":"Iron County",
    "number":143.23999999999998,
    "rate":13.741366078280889,
    "population":10424
  },
  {
    "state":"NM",
    "FIPS":35029,
    "county":"Luna County",
    "number":561.0500000000001,
    "rate":22.424957032655186,
    "population":25019
  },
  {
    "state":"GA",
    "FIPS":13129,
    "county":"Gordon County",
    "number":7276.879999999999,
    "rate":130.55041263006817,
    "population":55740
  },
  {
    "state":"NM",
    "FIPS":35027,
    "county":"Lincoln County",
    "number":79.11,
    "rate":3.91478622327791,
    "population":20208
  },
  {
    "state":"NM",
    "FIPS":35007,
    "county":"Colfax County",
    "number":78.1,
    "rate":5.903250188964474,
    "population":13230
  },
  {
    "state":"VA",
    "FIPS":51023,
    "county":"Botetourt County",
    "number":437.7900000000001,
    "rate":13.203546762372957,
    "population":33157
  },
  {
    "state":"KY",
    "FIPS":21075,
    "county":"Fulton County",
    "number":217.36,
    "rate":33.1999389033145,
    "population":6547
  },
  {
    "state":"NM",
    "FIPS":35006,
    "county":"Cibola County",
    "number":54.89,
    "rate":2.00929789882129,
    "population":27318
  },
  {
    "state":"NJ",
    "FIPS":34033,
    "county":"Salem County",
    "number":4090.359999999999,
    "rate":62.29227582846003,
    "population":65664
  },
  {
    "state":"NJ",
    "FIPS":34019,
    "county":"Hunterdon County",
    "number":453040.92000000004,
    "rate":3578.720150403261,
    "population":126593
  },
  {
    "state":"NJ",
    "FIPS":34011,
    "county":"Cumberland County",
    "number":16007.429999999998,
    "rate":101.44511198144414,
    "population":157794
  },
  {
    "state":"AL",
    "FIPS":1047,
    "county":"Dallas County",
    "number":2951.01,
    "rate":68.88606176614768,
    "population":42839
  },
  {
    "state":"NH",
    "FIPS":33019,
    "county":"Sullivan County",
    "number":452.43999999999994,
    "rate":10.476058164304897,
    "population":43188
  },
  {
    "state":"NH",
    "FIPS":33015,
    "county":"Rockingham County",
    "number":27912.46,
    "rate":93.7159759737578,
    "population":297841
  },
  {
    "state":"MS",
    "FIPS":28085,
    "county":"Lincoln County",
    "number":3152.4,
    "rate":90.45883669545756,
    "population":34849
  },
  {
    "state":"NH",
    "FIPS":33013,
    "county":"Merrimack County",
    "number":2666.7400000000002,
    "rate":18.142692891208068,
    "population":146987
  },
  {
    "state":"MS",
    "FIPS":28081,
    "county":"Lee County",
    "number":36173.939999999944,
    "rate":425.0007636726775,
    "population":85115
  },
  {
    "state":"NH",
    "FIPS":33005,
    "county":"Cheshire County",
    "number":306.46000000000004,
    "rate":3.992548008025223,
    "population":76758
  },
  {
    "state":"NH",
    "FIPS":33003,
    "county":"Carroll County",
    "number":3054.8100000000004,
    "rate":64.08647491975582,
    "population":47667
  },
  {
    "state":"CO",
    "FIPS":8005,
    "county":"Arapahoe County",
    "number":341658.73,
    "rate":573.2038533615412,
    "population":596051
  },
  {
    "state":"MS",
    "FIPS":28079,
    "county":"Leake County",
    "number":2043.1099999999997,
    "rate":87.8643615877521,
    "population":23253
  },
  {
    "state":"NH",
    "FIPS":33001,
    "county":"Belknap County",
    "number":13350.93,
    "rate":221.06384740205982,
    "population":60394
  },
  {
    "state":"NE",
    "FIPS":31181,
    "county":"Webster County",
    "number":14.27,
    "rate":3.8022915001332267,
    "population":3753
  },
  {
    "state":"NE",
    "FIPS":31179,
    "county":"Wayne County",
    "number":225.26999999999998,
    "rate":23.677738070212317,
    "population":9514
  },
  {
    "state":"NE",
    "FIPS":31175,
    "county":"Valley County",
    "number":40.33,
    "rate":9.536533459446677,
    "population":4229
  },
  {
    "state":"NE",
    "FIPS":31173,
    "county":"Thurston County",
    "number":1702.32,
    "rate":245.89339881554238,
    "population":6923
  },
  {
    "state":"NE",
    "FIPS":31169,
    "county":"Thayer County",
    "number":62.68,
    "rate":12.161428017074117,
    "population":5154
  },
  {
    "state":"OH",
    "FIPS":39161,
    "county":"Van Wert County",
    "number":2523.0200000000004,
    "rate":87.82136517108151,
    "population":28729
  },
  {
    "state":"NE",
    "FIPS":31159,
    "county":"Seward County",
    "number":228.87,
    "rate":13.490716180371352,
    "population":16965
  },
  {
    "state":"OH",
    "FIPS":39157,
    "county":"Tuscarawas County",
    "number":6634.860000000002,
    "rate":71.73752270564833,
    "population":92488
  },
  {
    "state":"NE",
    "FIPS":31157,
    "county":"Scotts Bluff County",
    "number":2272.67,
    "rate":61.58663487073871,
    "population":36902
  },
  {
    "state":"OH",
    "FIPS":39153,
    "county":"Summit County",
    "number":274256.65999999986,
    "rate":507.0685769329611,
    "population":540867
  },
  {
    "state":"NE",
    "FIPS":31155,
    "county":"Saunders County",
    "number":1627.5099999999993,
    "rate":78.2193492574614,
    "population":20807
  },
  {
    "state":"OH",
    "FIPS":39149,
    "county":"Shelby County",
    "number":4414.550000000001,
    "rate":89.8325261487119,
    "population":49142
  },
  {
    "state":"NE",
    "FIPS":31153,
    "county":"Sarpy County",
    "number":13175.36,
    "rate":79.45483711449627,
    "population":165822
  },
  {
    "state":"OH",
    "FIPS":39145,
    "county":"Scioto County",
    "number":11646.029999999999,
    "rate":148.2211220282034,
    "population":78572
  },
  {
    "state":"NE",
    "FIPS":31151,
    "county":"Saline County",
    "number":1298.1199999999997,
    "rate":89.8539489167301,
    "population":14447
  },
  {
    "state":"OH",
    "FIPS":39137,
    "county":"Putnam County",
    "number":4693.589999999999,
    "rate":137.31576021766477,
    "population":34181
  },
  {
    "state":"NE",
    "FIPS":31147,
    "county":"Richardson County",
    "number":63.63000000000001,
    "rate":7.696867061812025,
    "population":8267
  },
  {
    "state":"OH",
    "FIPS":39133,
    "county":"Portage County",
    "number":10906.739999999989,
    "rate":67.60264293152171,
    "population":161336
  },
  {
    "state":"NE",
    "FIPS":31145,
    "county":"Red Willow County",
    "number":1865.9599999999998,
    "rate":169.43248887678197,
    "population":11013
  },
  {
    "state":"OH",
    "FIPS":39129,
    "county":"Pickaway County",
    "number":2023.63,
    "rate":35.91435061938736,
    "population":56346
  },
  {
    "state":"NE",
    "FIPS":31143,
    "county":"Polk County",
    "number":67.28,
    "rate":12.737599394168875,
    "population":5282
  },
  {
    "state":"OH",
    "FIPS":39121,
    "county":"Noble County",
    "number":129.90999999999997,
    "rate":8.91198463332647,
    "population":14577
  },
  {
    "state":"NE",
    "FIPS":31139,
    "county":"Pierce County",
    "number":13590.089999999998,
    "rate":1892.7701949860723,
    "population":7180
  },
  {
    "state":"OH",
    "FIPS":39109,
    "county":"Miami County",
    "number":3426.1500000000005,
    "rate":33.22552803584244,
    "population":103118
  },
  {
    "state":"NE",
    "FIPS":31133,
    "county":"Pawnee County",
    "number":286.20000000000005,
    "rate":102.87562904385335,
    "population":2782
  },
  {
    "state":"AL",
    "FIPS":1037,
    "county":"Coosa County",
    "number":12.61,
    "rate":1.1278060996333066,
    "population":11181
  },
  {
    "state":"OH",
    "FIPS":39105,
    "county":"Meigs County",
    "number":1182.31,
    "rate":50.097881355932195,
    "population":23600
  },
  {
    "state":"NE",
    "FIPS":31131,
    "county":"Otoe County",
    "number":2323.8099999999995,
    "rate":147.97567498726434,
    "population":15704
  },
  {
    "state":"OH",
    "FIPS":39101,
    "county":"Marion County",
    "number":51124.86,
    "rate":771.870763191666,
    "population":66235
  },
  {
    "state":"NE",
    "FIPS":31129,
    "county":"Nuckolls County",
    "number":1154.4299999999998,
    "rate":260.53486797562624,
    "population":4431
  },
  {
    "state":"OH",
    "FIPS":39085,
    "county":"Lake County",
    "number":272340.9500000004,
    "rate":1187.3692586052816,
    "population":229365
  },
  {
    "state":"NE",
    "FIPS":31121,
    "county":"Merrick County",
    "number":543.22,
    "rate":69.67038604591511,
    "population":7797
  },
  {
    "state":"OH",
    "FIPS":39057,
    "county":"Greene County",
    "number":15293.789999999997,
    "rate":93.17243900210178,
    "population":164145
  },
  {
    "state":"NE",
    "FIPS":31107,
    "county":"Knox County",
    "number":223.83999999999997,
    "rate":26.091619069821654,
    "population":8579
  },
  {
    "state":"OH",
    "FIPS":39053,
    "county":"Gallia County",
    "number":117321.00000000003,
    "rate":3808.5051128063637,
    "population":30805
  },
  {
    "state":"NE",
    "FIPS":31105,
    "county":"Kimball County",
    "number":53.449999999999996,
    "rate":14.121532364597092,
    "population":3785
  },
  {
    "state":"OH",
    "FIPS":39045,
    "county":"Fairfield County",
    "number":15913.899999999992,
    "rate":107.9303609457021,
    "population":147446
  },
  {
    "state":"NE",
    "FIPS":31101,
    "county":"Keith County",
    "number":11.64,
    "rate":1.417783191230207,
    "population":8210
  },
  {
    "state":"AL",
    "FIPS":1035,
    "county":"Conecuh County",
    "number":2080.76,
    "rate":159.99692425990006,
    "population":13005
  },
  {
    "state":"NE",
    "FIPS":31099,
    "county":"Kearney County",
    "number":301.78000000000003,
    "rate":46.186103458830736,
    "population":6534
  },
  {
    "state":"OH",
    "FIPS":39037,
    "county":"Darke County",
    "number":3179.8099999999995,
    "rate":60.56088827943472,
    "population":52506
  },
  {
    "state":"NE",
    "FIPS":31097,
    "county":"Johnson County",
    "number":392.53000000000003,
    "rate":76.01278079008522,
    "population":5164
  },
  {
    "state":"OH",
    "FIPS":39033,
    "county":"Crawford County",
    "number":3926.44,
    "rate":91.63862114033654,
    "population":42847
  },
  {
    "state":"NE",
    "FIPS":31095,
    "county":"Jefferson County",
    "number":42.24,
    "rate":5.593961064759634,
    "population":7551
  },
  {
    "state":"AZ",
    "FIPS":4025,
    "county":"Yavapai County",
    "number":28070.620000000035,
    "rate":132.0914408330943,
    "population":212509
  },
  {
    "state":"OH",
    "FIPS":39029,
    "county":"Columbiana County",
    "number":11828.239999999998,
    "rate":111.1279806084293,
    "population":106438
  },
  {
    "state":"NE",
    "FIPS":31093,
    "county":"Howard County",
    "number":1806.2000000000003,
    "rate":286.47105471847743,
    "population":6305
  },
  {
    "state":"OH",
    "FIPS":39021,
    "county":"Champaign County",
    "number":1466.17,
    "rate":37.037589046632654,
    "population":39586
  },
  {
    "state":"NE",
    "FIPS":31089,
    "county":"Holt County",
    "number":564.8199999999999,
    "rate":54.26265731578441,
    "population":10409
  },
  {
    "state":"OH",
    "FIPS":39017,
    "county":"Butler County",
    "number":111044.10000000017,
    "rate":299.445033209019,
    "population":370833
  },
  {
    "state":"NE",
    "FIPS":31087,
    "county":"Hitchcock County",
    "number":32.260000000000005,
    "rate":11.189732917100244,
    "population":2883
  },
  {
    "state":"OH",
    "FIPS":39009,
    "county":"Athens County",
    "number":14434.620000000003,
    "rate":223.31476840248772,
    "population":64638
  },
  {
    "state":"NE",
    "FIPS":31083,
    "county":"Harlan County",
    "number":10.71,
    "rate":3.1260945709281964,
    "population":3426
  },
  {
    "state":"OH",
    "FIPS":39001,
    "county":"Adams County",
    "number":2454.9200000000005,
    "rate":86.54445462878095,
    "population":28366
  },
  {
    "state":"NE",
    "FIPS":31079,
    "county":"Hall County",
    "number":5071.579999999998,
    "rate":84.05701499958562,
    "population":60335
  },
  {
    "state":"NE",
    "FIPS":31073,
    "county":"Gosper County",
    "number":16.45,
    "rate":8.071638861629049,
    "population":2038
  },
  {
    "state":"AL",
    "FIPS":1033,
    "county":"Colbert County",
    "number":68866.01,
    "rate":1264.2228259871863,
    "population":54473
  },
  {
    "state":"NE",
    "FIPS":31067,
    "county":"Gage County",
    "number":799.76,
    "rate":36.79595123073384,
    "population":21735
  },
  {
    "state":"NE",
    "FIPS":31063,
    "county":"Frontier County",
    "number":32.260000000000005,
    "rate":11.812522885389969,
    "population":2731
  },
  {
    "state":"AZ",
    "FIPS":4021,
    "county":"Pinal County",
    "number":52136.32,
    "rate":134.33525892410836,
    "population":388106
  },
  {
    "state":"NE",
    "FIPS":31061,
    "county":"Franklin County",
    "number":48.03,
    "rate":15.056426332288401,
    "population":3190
  },
  {
    "state":"NE",
    "FIPS":31059,
    "county":"Fillmore County",
    "number":166.34,
    "rate":28.93876130828114,
    "population":5748
  },
  {
    "state":"NE",
    "FIPS":31051,
    "county":"Dixon County",
    "number":591.2999999999998,
    "rate":100.10157440325035,
    "population":5907
  },
  {
    "state":"NE",
    "FIPS":31049,
    "county":"Deuel County",
    "number":120.16,
    "rate":60.902179422199694,
    "population":1973
  },
  {
    "state":"NE",
    "FIPS":31047,
    "county":"Dawson County",
    "number":1530.8799999999999,
    "rate":63.52199170124481,
    "population":24100
  },
  {
    "state":"AZ",
    "FIPS":4019,
    "county":"Pima County",
    "number":349998.75000000105,
    "rate":352.4326498800728,
    "population":993094
  },
  {
    "state":"NE",
    "FIPS":31045,
    "county":"Dawes County",
    "number":245.62,
    "rate":26.79393476600851,
    "population":9167
  },
  {
    "state":"NE",
    "FIPS":31041,
    "county":"Custer County",
    "number":2053.7099999999996,
    "rate":190.36985539488316,
    "population":10788
  },
  {
    "state":"NE",
    "FIPS":31039,
    "county":"Cuming County",
    "number":105.82000000000001,
    "rate":11.641364136413642,
    "population":9090
  },
  {
    "state":"NE",
    "FIPS":31037,
    "county":"Colfax County",
    "number":216.26999999999998,
    "rate":20.517028744900863,
    "population":10541
  },
  {
    "state":"AL",
    "FIPS":1031,
    "county":"Coffee County",
    "number":7659.830000000002,
    "rate":149.55639728996235,
    "population":51217
  },
  {
    "state":"NE",
    "FIPS":31035,
    "county":"Clay County",
    "number":308.97,
    "rate":48.2238176993913,
    "population":6407
  },
  {
    "state":"NE",
    "FIPS":31033,
    "county":"Cheyenne County",
    "number":831.75,
    "rate":82.66249254621349,
    "population":10062
  },
  {
    "state":"AZ",
    "FIPS":4017,
    "county":"Navajo County",
    "number":1344.9699999999998,
    "rate":12.572985706673645,
    "population":106973
  },
  {
    "state":"NE",
    "FIPS":31029,
    "county":"Chase County",
    "number":38.480000000000004,
    "rate":9.541284403669724,
    "population":4033
  },
  {
    "state":"NE",
    "FIPS":31027,
    "county":"Cedar County",
    "number":10.85,
    "rate":1.2371721778791334,
    "population":8770
  },
  {
    "state":"NE",
    "FIPS":31025,
    "county":"Cass County",
    "number":304.25999999999993,
    "rate":12.093485432648354,
    "population":25159
  },
  {
    "state":"NE",
    "FIPS":31023,
    "county":"Butler County",
    "number":718.5300000000001,
    "rate":86.48651901781416,
    "population":8308
  },
  {
    "state":"NE",
    "FIPS":31021,
    "county":"Burt County",
    "number":63.2,
    "rate":9.472422062350121,
    "population":6672
  },
  {
    "state":"AZ",
    "FIPS":4015,
    "county":"Mohave County",
    "number":6686.31,
    "rate":32.9092797306742,
    "population":203174
  },
  {
    "state":"NE",
    "FIPS":31013,
    "county":"Box Butte County",
    "number":69.53999999999999,
    "rate":6.158887609600566,
    "population":11291
  },
  {
    "state":"NE",
    "FIPS":31001,
    "county":"Adams County",
    "number":6443.590000000001,
    "rate":205.3144914606169,
    "population":31384
  },
  {
    "state":"ND",
    "FIPS":38105,
    "county":"Williams County",
    "number":2096.56,
    "rate":78.56404107022408,
    "population":26686
  },
  {
    "state":"ND",
    "FIPS":38101,
    "county":"Ward County",
    "number":2906.159999999999,
    "rate":44.382406841783734,
    "population":65480
  },
  {
    "state":"ND",
    "FIPS":38097,
    "county":"Traill County",
    "number":263.36,
    "rate":32.622321317973494,
    "population":8073
  },
  {
    "state":"ND",
    "FIPS":38093,
    "county":"Stutsman County",
    "number":1056.6399999999999,
    "rate":50.417024525240954,
    "population":20958
  },
  {
    "state":"ND",
    "FIPS":38089,
    "county":"Stark County",
    "number":2882.13,
    "rate":107.05880167898667,
    "population":26921
  },
  {
    "state":"ND",
    "FIPS":38081,
    "county":"Sargent County",
    "number":55.33,
    "rate":14.205391527599486,
    "population":3895
  },
  {
    "state":"ND",
    "FIPS":38077,
    "county":"Richland County",
    "number":194.57000000000002,
    "rate":12.00308451573103,
    "population":16210
  },
  {
    "state":"ND",
    "FIPS":38073,
    "county":"Ransom County",
    "number":24.509999999999998,
    "rate":4.477530142491779,
    "population":5474
  },
  {
    "state":"ND",
    "FIPS":38061,
    "county":"Mountrail County",
    "number":58.980000000000004,
    "rate":6.740571428571429,
    "population":8750
  },
  {
    "state":"ND",
    "FIPS":38057,
    "county":"Mercer County",
    "number":365.1499999999999,
    "rate":43.02969596983265,
    "population":8486
  },
  {
    "state":"ND",
    "FIPS":38053,
    "county":"McKenzie County",
    "number":65.00999999999999,
    "rate":8.161958568738228,
    "population":7965
  },
  {
    "state":"ND",
    "FIPS":38051,
    "county":"McIntosh County",
    "number":37.21,
    "rate":13.413842826243691,
    "population":2774
  },
  {
    "state":"ND",
    "FIPS":38009,
    "county":"Bottineau County",
    "number":15.72,
    "rate":2.387969011089169,
    "population":6583
  },
  {
    "state":"VT",
    "FIPS":50011,
    "county":"Franklin County",
    "number":177.19000000000003,
    "rate":3.6721032889146796,
    "population":48253
  },
  {
    "state":"NC",
    "FIPS":37199,
    "county":"Yancey County",
    "number":818.6100000000002,
    "rate":46.42488515850963,
    "population":17633
  },
  {
    "state":"NC",
    "FIPS":37197,
    "county":"Yadkin County",
    "number":2249.510000000001,
    "rate":59.11052133697712,
    "population":38056
  },
  {
    "state":"VT",
    "FIPS":50003,
    "county":"Bennington County",
    "number":127087.04000000001,
    "rate":3465.789631568901,
    "population":36669
  },
  {
    "state":"NC",
    "FIPS":37191,
    "county":"Wayne County",
    "number":94678.89000000006,
    "rate":760.4485799653028,
    "population":124504
  },
  {
    "state":"VT",
    "FIPS":50001,
    "county":"Addison County",
    "number":79.4,
    "rate":2.1554415397562234,
    "population":36837
  },
  {
    "state":"NC",
    "FIPS":37189,
    "county":"Watauga County",
    "number":3376.030000000001,
    "rate":64.84384603564845,
    "population":52064
  },
  {
    "state":"NC",
    "FIPS":37187,
    "county":"Washington County",
    "number":708.11,
    "rate":55.64277856357064,
    "population":12726
  },
  {
    "state":"NC",
    "FIPS":37181,
    "county":"Vance County",
    "number":5981.28,
    "rate":132.69911700758752,
    "population":45074
  },
  {
    "state":"NC",
    "FIPS":37179,
    "county":"Union County",
    "number":7498.040000000001,
    "rate":35.980287245732825,
    "population":208393
  },
  {
    "state":"NC",
    "FIPS":37175,
    "county":"Transylvania County",
    "number":479.63999999999993,
    "rate":14.599135569489254,
    "population":32854
  },
  {
    "state":"NC",
    "FIPS":37173,
    "county":"Swain County",
    "number":604.1400000000001,
    "rate":42.90767045454546,
    "population":14080
  },
  {
    "state":"NC",
    "FIPS":37171,
    "county":"Surry County",
    "number":6672.539999999999,
    "rate":90.69894519356241,
    "population":73568
  },
  {
    "state":"NC",
    "FIPS":37165,
    "county":"Scotland County",
    "number":2988.679999999999,
    "rate":82.65840639433578,
    "population":36157
  },
  {
    "state":"NC",
    "FIPS":37163,
    "county":"Sampson County",
    "number":2562.1299999999997,
    "rate":40.099068784724935,
    "population":63895
  },
  {
    "state":"NC",
    "FIPS":37157,
    "county":"Rockingham County",
    "number":7959.9,
    "rate":85.9173628650994,
    "population":92646
  },
  {
    "state":"NC",
    "FIPS":37155,
    "county":"Robeson County",
    "number":9227.380000000001,
    "rate":68.1651498138408,
    "population":135368
  },
  {
    "state":"NC",
    "FIPS":37149,
    "county":"Polk County",
    "number":1711.8500000000001,
    "rate":84.54415250888977,
    "population":20248
  },
  {
    "state":"NC",
    "FIPS":37143,
    "county":"Perquimans County",
    "number":756.53,
    "rate":55.90673958025421,
    "population":13532
  },
  {
    "state":"NC",
    "FIPS":37141,
    "county":"Pender County",
    "number":2002.8599999999997,
    "rate":37.11267997109344,
    "population":53967
  },
  {
    "state":"NC",
    "FIPS":37123,
    "county":"Montgomery County",
    "number":865.3800000000001,
    "rate":31.31237109671817,
    "population":27637
  },
  {
    "state":"NC",
    "FIPS":37117,
    "county":"Martin County",
    "number":590.9,
    "rate":24.738340450473082,
    "population":23886
  },
  {
    "state":"NC",
    "FIPS":37091,
    "county":"Hertford County",
    "number":1891.1899999999998,
    "rate":77.40627046496398,
    "population":24432
  },
  {
    "state":"NC",
    "FIPS":37085,
    "county":"Harnett County",
    "number":11867.040000000005,
    "rate":97.1012903700916,
    "population":122213
  },
  {
    "state":"MT",
    "FIPS":30105,
    "county":"Valley County",
    "number":288.8,
    "rate":38.53749666399787,
    "population":7494
  },
  {
    "state":"NC",
    "FIPS":37053,
    "county":"Currituck County",
    "number":162.89,
    "rate":6.761165532126847,
    "population":24092
  },
  {
    "state":"CA",
    "FIPS":6109,
    "county":"Tuolumne County",
    "number":1184.84,
    "rate":21.900924214417742,
    "population":54100
  },
  {
    "state":"NC",
    "FIPS":37051,
    "county":"Cumberland County",
    "number":47920.11000000003,
    "rate":148.31401520896083,
    "population":323099
  },
  {
    "state":"NC",
    "FIPS":37045,
    "county":"Cleveland County",
    "number":9647.130000000001,
    "rate":98.92970312259654,
    "population":97515
  },
  {
    "state":"MT",
    "FIPS":30101,
    "county":"Toole County",
    "number":214.88999999999996,
    "rate":41.08009940737908,
    "population":5231
  },
  {
    "state":"FL",
    "FIPS":12031,
    "county":"Duval County",
    "number":1709521.5200000012,
    "rate":1941.3254901515465,
    "population":880595
  },
  {
    "state":"NC",
    "FIPS":37041,
    "county":"Chowan County",
    "number":1426.1999999999998,
    "rate":97.05341953045252,
    "population":14695
  },
  {
    "state":"MT",
    "FIPS":30099,
    "county":"Teton County",
    "number":17.66,
    "rate":2.9084321475625825,
    "population":6072
  },
  {
    "state":"NC",
    "FIPS":37037,
    "county":"Chatham County",
    "number":3243.3999999999996,
    "rate":49.28355442099344,
    "population":65811
  },
  {
    "state":"MT",
    "FIPS":30097,
    "county":"Sweet Grass County",
    "number":13.95,
    "rate":3.889043769166434,
    "population":3587
  },
  {
    "state":"NC",
    "FIPS":37021,
    "county":"Buncombe County",
    "number":734536.8999999998,
    "rate":3005.925201442116,
    "population":244363
  },
  {
    "state":"MT",
    "FIPS":30089,
    "county":"Sanders County",
    "number":47.53,
    "rate":4.175524905560924,
    "population":11383
  },
  {
    "state":"NC",
    "FIPS":37013,
    "county":"Beaufort County",
    "number":2867.5000000000005,
    "rate":60.379861447432155,
    "population":47491
  },
  {
    "state":"MT",
    "FIPS":30085,
    "county":"Roosevelt County",
    "number":49.28,
    "rate":4.527331189710611,
    "population":10885
  },
  {
    "state":"NC",
    "FIPS":37005,
    "county":"Alleghany County",
    "number":206.02000000000004,
    "rate":18.85766590389016,
    "population":10925
  },
  {
    "state":"MT",
    "FIPS":30081,
    "county":"Ravalli County",
    "number":1233.55,
    "rate":30.355341191524964,
    "population":40637
  },
  {
    "state":"MT",
    "FIPS":30073,
    "county":"Pondera County",
    "number":259.11,
    "rate":41.83917326013241,
    "population":6193
  },
  {
    "state":"MT",
    "FIPS":30065,
    "county":"Musselshell County",
    "number":12.27,
    "rate":2.6245989304812833,
    "population":4675
  },
  {
    "state":"MT",
    "FIPS":30057,
    "county":"Madison County",
    "number":36.15,
    "rate":4.679611650485437,
    "population":7725
  },
  {
    "state":"MT",
    "FIPS":30053,
    "county":"Lincoln County",
    "number":70.45,
    "rate":3.6185731162360675,
    "population":19469
  },
  {
    "state":"MT",
    "FIPS":30049,
    "county":"Lewis and Clark County",
    "number":1033.4999999999998,
    "rate":15.93800601434189,
    "population":64845
  },
  {
    "state":"MT",
    "FIPS":30041,
    "county":"Hill County",
    "number":67.42,
    "rate":4.1042186643939855,
    "population":16427
  },
  {
    "state":"MT",
    "FIPS":30025,
    "county":"Fallon County",
    "number":43.260000000000005,
    "rate":14.272517321016167,
    "population":3031
  },
  {
    "state":"MT",
    "FIPS":30021,
    "county":"Dawson County",
    "number":81.89,
    "rate":8.863513367247537,
    "population":9239
  },
  {
    "state":"MT",
    "FIPS":30017,
    "county":"Custer County",
    "number":220.51000000000005,
    "rate":18.61629379485015,
    "population":11845
  },
  {
    "state":"IL",
    "FIPS":17197,
    "county":"Will County",
    "number":136951.17000000033,
    "rate":200.75312194456993,
    "population":682187
  },
  {
    "state":"MT",
    "FIPS":30009,
    "county":"Carbon County",
    "number":12.92,
    "rate":1.2780690473835197,
    "population":10109
  },
  {
    "state":"IL",
    "FIPS":17193,
    "county":"White County",
    "number":9624.619999999999,
    "rate":660.0342888492661,
    "population":14582
  },
  {
    "state":"MT",
    "FIPS":30005,
    "county":"Blaine County",
    "number":29.07,
    "rate":4.379990959770981,
    "population":6637
  },
  {
    "state":"IL",
    "FIPS":17189,
    "county":"Washington County",
    "number":147.1,
    "rate":10.067757169256039,
    "population":14611
  },
  {
    "state":"MT",
    "FIPS":30001,
    "county":"Beaverhead County",
    "number":174.37,
    "rate":18.63723813595554,
    "population":9356
  },
  {
    "state":"MS",
    "FIPS":28163,
    "county":"Yazoo County",
    "number":284.19,
    "rate":10.048440704334913,
    "population":28282
  },
  {
    "state":"MS",
    "FIPS":28161,
    "county":"Yalobusha County",
    "number":676.6099999999999,
    "rate":54.6843934373232,
    "population":12373
  },
  {
    "state":"MS",
    "FIPS":28157,
    "county":"Wilkinson County",
    "number":1764.1299999999999,
    "rate":186.66067082848375,
    "population":9451
  },
  {
    "state":"MS",
    "FIPS":28155,
    "county":"Webster County",
    "number":502.88,
    "rate":50.03283255397473,
    "population":10051
  },
  {
    "state":"MS",
    "FIPS":28153,
    "county":"Wayne County",
    "number":429.0700000000001,
    "rate":20.793312333414107,
    "population":20635
  },
  {
    "state":"MS",
    "FIPS":28151,
    "county":"Washington County",
    "number":5337.64,
    "rate":106.64402309644163,
    "population":50051
  },
  {
    "state":"MS",
    "FIPS":28149,
    "county":"Warren County",
    "number":6626.700000000003,
    "rate":137.71197007481302,
    "population":48120
  },
  {
    "state":"MS",
    "FIPS":28147,
    "county":"Walthall County",
    "number":401.74,
    "rate":26.626458112407214,
    "population":15088
  },
  {
    "state":"MS",
    "FIPS":28145,
    "county":"Union County",
    "number":5090.129999999999,
    "rate":186.09717753729157,
    "population":27352
  },
  {
    "state":"MS",
    "FIPS":28141,
    "county":"Tishomingo County",
    "number":1735.2099999999998,
    "rate":88.58083618357242,
    "population":19589
  },
  {
    "state":"MS",
    "FIPS":28139,
    "county":"Tippah County",
    "number":2024.9100000000008,
    "rate":92.18802640564537,
    "population":21965
  },
  {
    "state":"MS",
    "FIPS":28137,
    "county":"Tate County",
    "number":655.3399999999999,
    "rate":22.989546060478492,
    "population":28506
  },
  {
    "state":"MS",
    "FIPS":28133,
    "county":"Sunflower County",
    "number":3894.7999999999993,
    "rate":136.7892389281073,
    "population":28473
  },
  {
    "state":"MS",
    "FIPS":28131,
    "county":"Stone County",
    "number":1458.6299999999999,
    "rate":80.81500360130755,
    "population":18049
  },
  {
    "state":"MS",
    "FIPS":28129,
    "county":"Smith County",
    "number":10.34,
    "rate":0.6330741443702933,
    "population":16333
  },
  {
    "state":"CO",
    "FIPS":8017,
    "county":"Cheyenne County",
    "number":13.61,
    "rate":7.21250662427133,
    "population":1887
  },
  {
    "state":"MS",
    "FIPS":28127,
    "county":"Simpson County",
    "number":1595.84,
    "rate":58.382966269115386,
    "population":27334
  },
  {
    "state":"MS",
    "FIPS":28123,
    "county":"Scott County",
    "number":3787.7000000000003,
    "rate":134.08736901727556,
    "population":28248
  },
  {
    "state":"MS",
    "FIPS":28121,
    "county":"Rankin County",
    "number":73885.14999999994,
    "rate":507.43901266448677,
    "population":145604
  },
  {
    "state":"MS",
    "FIPS":28117,
    "county":"Prentiss County",
    "number":3600.61,
    "rate":142.26037139470566,
    "population":25310
  },
  {
    "state":"CO",
    "FIPS":8014,
    "county":"Broomfield County",
    "number":8160.460000000001,
    "rate":138.33163818822894,
    "population":58992
  },
  {
    "state":"MS",
    "FIPS":28115,
    "county":"Pontotoc County",
    "number":1461.0700000000004,
    "rate":48.14862415554459,
    "population":30345
  },
  {
    "state":"CO",
    "FIPS":8013,
    "county":"Boulder County",
    "number":278398.0000000001,
    "rate":911.3371284163115,
    "population":305483
  },
  {
    "state":"MS",
    "FIPS":28111,
    "county":"Perry County",
    "number":12.38,
    "rate":1.0248344370860927,
    "population":12080
  },
  {
    "state":"MS",
    "FIPS":28107,
    "county":"Panola County",
    "number":868.24,
    "rate":25.192664809656453,
    "population":34464
  },
  {
    "state":"AK",
    "FIPS":2050,
    "county":"Bethel Census Area",
    "number":31.55,
    "rate":1.7837960083677276,
    "population":17687
  },
  {
    "state":"MS",
    "FIPS":28105,
    "county":"Oktibbeha County",
    "number":10633.18,
    "rate":217.1987090448566,
    "population":48956
  },
  {
    "state":"MS",
    "FIPS":28101,
    "county":"Newton County",
    "number":579.87,
    "rate":26.814797687861272,
    "population":21625
  },
  {
    "state":"MS",
    "FIPS":28099,
    "county":"Neshoba County",
    "number":2802.9500000000003,
    "rate":94.44219818727048,
    "population":29679
  },
  {
    "state":"MS",
    "FIPS":28097,
    "county":"Montgomery County",
    "number":188.85,
    "rate":17.88860471724922,
    "population":10557
  },
  {
    "state":"MS",
    "FIPS":28093,
    "county":"Marshall County",
    "number":678.6800000000002,
    "rate":18.549758110804387,
    "population":36587
  },
  {
    "state":"MS",
    "FIPS":28091,
    "county":"Marion County",
    "number":2747.0699999999993,
    "rate":104.06356542162283,
    "population":26398
  },
  {
    "state":"MS",
    "FIPS":28089,
    "county":"Madison County",
    "number":9245.860000000011,
    "rate":93.88661542054663,
    "population":98479
  },
  {
    "state":"NH",
    "FIPS":33009,
    "county":"Grafton County",
    "number":73689.05000000002,
    "rate":824.7974077141772,
    "population":89342
  },
  {
    "state":"MS",
    "FIPS":28083,
    "county":"Leflore County",
    "number":4147.53,
    "rate":131.39232085154913,
    "population":31566
  },
  {
    "state":"MS",
    "FIPS":28077,
    "county":"Lawrence County",
    "number":30.26,
    "rate":2.4013967145464643,
    "population":12601
  },
  {
    "state":"MS",
    "FIPS":28075,
    "county":"Lauderdale County",
    "number":19646.57999999996,
    "rate":244.75314870874863,
    "population":80271
  },
  {
    "state":"MS",
    "FIPS":28073,
    "county":"Lamar County",
    "number":29278.89000000004,
    "rate":505.9949191206975,
    "population":57864
  },
  {
    "state":"MS",
    "FIPS":28067,
    "county":"Jones County",
    "number":5136.83,
    "rate":75.11632667982744,
    "population":68385
  },
  {
    "state":"MS",
    "FIPS":28065,
    "county":"Jefferson Davis County",
    "number":555.7499999999999,
    "rate":45.97915115413253,
    "population":12087
  },
  {
    "state":"MS",
    "FIPS":28059,
    "county":"Jackson County",
    "number":9808.039999999999,
    "rate":70.07294472347448,
    "population":139969
  },
  {
    "state":"MS",
    "FIPS":28057,
    "county":"Itawamba County",
    "number":1443.7499999999998,
    "rate":61.77527705275769,
    "population":23371
  },
  {
    "state":"MS",
    "FIPS":28053,
    "county":"Humphreys County",
    "number":1752.5999999999997,
    "rate":190.33449174630752,
    "population":9208
  },
  {
    "state":"MS",
    "FIPS":28051,
    "county":"Holmes County",
    "number":76.78999999999999,
    "rate":4.033088235294118,
    "population":19040
  },
  {
    "state":"MS",
    "FIPS":28045,
    "county":"Hancock County",
    "number":2359.7900000000004,
    "rate":52.080997572279855,
    "population":45310
  },
  {
    "state":"MS",
    "FIPS":28043,
    "county":"Grenada County",
    "number":3513.2799999999997,
    "rate":162.53145817912656,
    "population":21616
  },
  {
    "state":"MS",
    "FIPS":28041,
    "county":"Greene County",
    "number":481.15000000000015,
    "rate":33.67982640347194,
    "population":14286
  },
  {
    "state":"DC",
    "FIPS":11001,
    "county":"District of Columbia",
    "number":997576.6200000024,
    "rate":1570.887849584282,
    "population":635040
  },
  {
    "state":"MS",
    "FIPS":28039,
    "county":"George County",
    "number":3405.8000000000006,
    "rate":148.90696047569082,
    "population":22872
  },
  {
    "state":"MS",
    "FIPS":28037,
    "county":"Franklin County",
    "number":445.03000000000003,
    "rate":56.42576391530367,
    "population":7887
  },
  {
    "state":"MS",
    "FIPS":28035,
    "county":"Forrest County",
    "number":149776.91999999993,
    "rate":1951.0078286808466,
    "population":76769
  },
  {
    "state":"MS",
    "FIPS":28033,
    "county":"DeSoto County",
    "number":10554.759999999998,
    "rate":63.44720627573562,
    "population":166355
  },
  {
    "state":"MS",
    "FIPS":28029,
    "county":"Copiah County",
    "number":4864.879999999998,
    "rate":168.32329942564522,
    "population":28902
  },
  {
    "state":"MS",
    "FIPS":28027,
    "county":"Coahoma County",
    "number":612.6799999999998,
    "rate":23.853611057037178,
    "population":25685
  },
  {
    "state":"MS",
    "FIPS":28021,
    "county":"Claiborne County",
    "number":86.03,
    "rate":9.175554607508532,
    "population":9376
  },
  {
    "state":"MS",
    "FIPS":28019,
    "county":"Choctaw County",
    "number":12.05,
    "rate":1.4422501496110114,
    "population":8355
  },
  {
    "state":"MS",
    "FIPS":28017,
    "county":"Chickasaw County",
    "number":1820.5300000000002,
    "rate":104.59209467999543,
    "population":17406
  },
  {
    "state":"MS",
    "FIPS":28013,
    "county":"Calhoun County",
    "number":517.97,
    "rate":34.88483297413793,
    "population":14848
  },
  {
    "state":"MS",
    "FIPS":28011,
    "county":"Bolivar County",
    "number":20861.66,
    "rate":612.4793752385426,
    "population":34061
  },
  {
    "state":"MS",
    "FIPS":28009,
    "county":"Benton County",
    "number":152.28,
    "rate":17.600554785020805,
    "population":8652
  },
  {
    "state":"MS",
    "FIPS":28005,
    "county":"Amite County",
    "number":39.05,
    "rate":3.0103299414122726,
    "population":12972
  },
  {
    "state":"MS",
    "FIPS":28001,
    "county":"Adams County",
    "number":4975.449999999999,
    "rate":154.80072181948287,
    "population":32141
  },
  {
    "state":"OK",
    "FIPS":40045,
    "county":"Ellis County",
    "number":50.1,
    "rate":12.294478527607362,
    "population":4075
  },
  {
    "state":"TX",
    "FIPS":48093,
    "county":"Comanche County",
    "number":1048.7199999999998,
    "rate":76.2927397060963,
    "population":13746
  },
  {
    "state":"AR",
    "FIPS":5087,
    "county":"Madison County",
    "number":23.52,
    "rate":1.5042210283960094,
    "population":15636
  },
  {
    "state":"MO",
    "FIPS":29219,
    "county":"Warren County",
    "number":770.43,
    "rate":23.49946621930761,
    "population":32785
  },
  {
    "state":"OK",
    "FIPS":40029,
    "county":"Coal County",
    "number":101.66999999999999,
    "rate":17.179790469753293,
    "population":5918
  },
  {
    "state":"TX",
    "FIPS":48077,
    "county":"Clay County",
    "number":1091.44,
    "rate":103.82800608828006,
    "population":10512
  },
  {
    "state":"AR",
    "FIPS":5085,
    "county":"Lonoke County",
    "number":3492.3299999999995,
    "rate":49.82849886569548,
    "population":70087
  },
  {
    "state":"MO",
    "FIPS":29211,
    "county":"Sullivan County",
    "number":308.21999999999997,
    "rate":47.2367816091954,
    "population":6525
  },
  {
    "state":"TX",
    "FIPS":48029,
    "county":"Bexar County",
    "number":4975767.889999997,
    "rate":2781.5331848587184,
    "population":1788858
  },
  {
    "state":"AR",
    "FIPS":5079,
    "county":"Lincoln County",
    "number":44,
    "rate":3.109760407095908,
    "population":14149
  },
  {
    "state":"MO",
    "FIPS":29187,
    "county":"St Francois County",
    "number":6702.830000000002,
    "rate":101.81256170729858,
    "population":65835
  },
  {
    "state":"TX",
    "FIPS":48021,
    "county":"Bastrop County",
    "number":5642.719999999999,
    "rate":75.35079988248805,
    "population":74886
  },
  {
    "state":"PR",
    "FIPS":72147,
    "county":"Vieques Municipio",
    "number":191.7,
    "rate":null,
    "population":null
  },
  {
    "state":"MO",
    "FIPS":29183,
    "county":"St Charles County",
    "number":168436.61000000007,
    "rate":456.72646566754634,
    "population":368791
  },
  {
    "state":"TX",
    "FIPS":48009,
    "county":"Archer County",
    "number":283.76,
    "rate":32.348381212950294,
    "population":8772
  },
  {
    "state":"PR",
    "FIPS":72123,
    "county":"Salinas Municipio",
    "number":1215,
    "rate":null,
    "population":null
  },
  {
    "state":"MO",
    "FIPS":29177,
    "county":"Ray County",
    "number":2150.9399999999996,
    "rate":93.2838927920895,
    "population":23058
  },
  {
    "state":"TX",
    "FIPS":48005,
    "county":"Angelina County",
    "number":190275.02000000008,
    "rate":2172.461266198551,
    "population":87585
  },
  {
    "state":"PR",
    "FIPS":72115,
    "county":"Quebradillas Municipio",
    "number":2228.919999999999,
    "rate":null,
    "population":null
  },
  {
    "state":"MO",
    "FIPS":29175,
    "county":"Randolph County",
    "number":2622.7199999999993,
    "rate":103.64433906342617,
    "population":25305
  },
  {
    "state":"TX",
    "FIPS":48001,
    "county":"Anderson County",
    "number":6730.799999999999,
    "rate":115.99627753076206,
    "population":58026
  },
  {
    "state":"PR",
    "FIPS":72107,
    "county":"Orocovis Municipio",
    "number":35.17,
    "rate":null,
    "population":null
  },
  {
    "state":"MO",
    "FIPS":29173,
    "county":"Ralls County",
    "number":384.76,
    "rate":37.58155889822231,
    "population":10238
  },
  {
    "state":"PR",
    "FIPS":72083,
    "county":"Las Mar�as Municipio",
    "number":618.13,
    "rate":null,
    "population":null
  },
  {
    "state":"MO",
    "FIPS":29167,
    "county":"Polk County",
    "number":1808.7099999999998,
    "rate":58.148529175373724,
    "population":31105
  },
  {
    "state":"PR",
    "FIPS":72067,
    "county":"Hormigueros Municipio",
    "number":817.3699999999999,
    "rate":null,
    "population":null
  },
  {
    "state":"AR",
    "FIPS":5073,
    "county":"Lafayette County",
    "number":79.51,
    "rate":10.699771228636793,
    "population":7431
  },
  {
    "state":"MO",
    "FIPS":29163,
    "county":"Pike County",
    "number":555.6399999999999,
    "rate":29.952024149641524,
    "population":18551
  },
  {
    "state":"MO",
    "FIPS":29161,
    "county":"Phelps County",
    "number":3501.5200000000004,
    "rate":77.49640351459621,
    "population":45183
  },
  {
    "state":"PR",
    "FIPS":72051,
    "county":"Dorado Municipio",
    "number":3281.689999999999,
    "rate":null,
    "population":null
  },
  {
    "state":"MO",
    "FIPS":29159,
    "county":"Pettis County",
    "number":1117.7199999999998,
    "rate":26.43676529719245,
    "population":42279
  },
  {
    "state":"PR",
    "FIPS":72043,
    "county":"Coamo Municipio",
    "number":1028.68,
    "rate":null,
    "population":null
  },
  {
    "state":"MO",
    "FIPS":29157,
    "county":"Perry County",
    "number":1112.9099999999999,
    "rate":58.50031539108493,
    "population":19024
  },
  {
    "state":"PR",
    "FIPS":72035,
    "county":"Cayey Municipio",
    "number":36040.229999999996,
    "rate":null,
    "population":null
  },
  {
    "state":"AR",
    "FIPS":5071,
    "county":"Johnson County",
    "number":2451.8300000000004,
    "rate":94.79701515620168,
    "population":25864
  },
  {
    "state":"MO",
    "FIPS":29155,
    "county":"Pemiscot County",
    "number":3638.0899999999992,
    "rate":200.81084064690617,
    "population":18117
  },
  {
    "state":"PR",
    "FIPS":72027,
    "county":"Camuy Municipio",
    "number":978.88,
    "rate":null,
    "population":null
  },
  {
    "state":"MO",
    "FIPS":29153,
    "county":"Ozark County",
    "number":551.7199999999999,
    "rate":57.32751454696591,
    "population":9624
  },
  {
    "state":"PR",
    "FIPS":72019,
    "county":"Barranquitas Municipio",
    "number":96.42000000000002,
    "rate":null,
    "population":null
  },
  {
    "state":"MO",
    "FIPS":29151,
    "county":"Osage County",
    "number":182.37,
    "rate":13.15800865800866,
    "population":13860
  },
  {
    "state":"PR",
    "FIPS":72003,
    "county":"Aguada Municipio",
    "number":3783.52,
    "rate":null,
    "population":null
  },
  {
    "state":"AR",
    "FIPS":5069,
    "county":"Jefferson County",
    "number":3420.789999999999,
    "rate":45.86739072137301,
    "population":74580
  },
  {
    "state":"MO",
    "FIPS":29147,
    "county":"Nodaway County",
    "number":104.38,
    "rate":4.466983352591261,
    "population":23367
  },
  {
    "state":"MO",
    "FIPS":29145,
    "county":"Newton County",
    "number":78852.08999999992,
    "rate":1335.0505392546927,
    "population":59063
  },
  {
    "state":"MO",
    "FIPS":29143,
    "county":"New Madrid County",
    "number":208.27,
    "rate":11.27063152768007,
    "population":18479
  },
  {
    "state":"MO",
    "FIPS":29141,
    "county":"Morgan County",
    "number":278.58000000000004,
    "rate":13.831488009532798,
    "population":20141
  },
  {
    "state":"AR",
    "FIPS":5067,
    "county":"Jackson County",
    "number":1740.4700000000003,
    "rate":98.66609977324264,
    "population":17640
  },
  {
    "state":"MO",
    "FIPS":29139,
    "county":"Montgomery County",
    "number":92.95,
    "rate":7.73037258815702,
    "population":12024
  },
  {
    "state":"MO",
    "FIPS":29137,
    "county":"Monroe County",
    "number":105.03999999999999,
    "rate":12.093023255813952,
    "population":8686
  },
  {
    "state":"MO",
    "FIPS":29135,
    "county":"Moniteau County",
    "number":251.35,
    "rate":16.03918065216004,
    "population":15671
  },
  {
    "state":"MO",
    "FIPS":29133,
    "county":"Mississippi County",
    "number":597.2299999999998,
    "rate":41.74973785389722,
    "population":14305
  },
  {
    "state":"MO",
    "FIPS":29131,
    "county":"Miller County",
    "number":1705.1299999999997,
    "rate":68.88579162121762,
    "population":24753
  },
  {
    "state":"MO",
    "FIPS":29129,
    "county":"Mercer County",
    "number":232.95999999999998,
    "rate":62.72482498653742,
    "population":3714
  },
  {
    "state":"MO",
    "FIPS":29127,
    "county":"Marion County",
    "number":3275.7400000000002,
    "rate":113.70543927244958,
    "population":28809
  },
  {
    "state":"MO",
    "FIPS":29125,
    "county":"Maries County",
    "number":15.86,
    "rate":1.7552014165559982,
    "population":9036
  },
  {
    "state":"AR",
    "FIPS":5063,
    "county":"Independence County",
    "number":7063.720000000001,
    "rate":191.40279094973585,
    "population":36905
  },
  {
    "state":"MO",
    "FIPS":29123,
    "county":"Madison County",
    "number":635.25,
    "rate":50.95451993262212,
    "population":12467
  },
  {
    "state":"MO",
    "FIPS":29121,
    "county":"Macon County",
    "number":387.99,
    "rate":24.94150167138082,
    "population":15556
  },
  {
    "state":"AR",
    "FIPS":5061,
    "county":"Howard County",
    "number":113.53999999999999,
    "rate":8.281546316557256,
    "population":13710
  },
  {
    "state":"MO",
    "FIPS":29115,
    "county":"Linn County",
    "number":120.23,
    "rate":9.629184686849271,
    "population":12486
  },
  {
    "state":"MO",
    "FIPS":29113,
    "county":"Lincoln County",
    "number":616.6800000000001,
    "rate":11.559571117942568,
    "population":53348
  },
  {
    "state":"MO",
    "FIPS":29111,
    "county":"Lewis County",
    "number":10.22,
    "rate":1.0059055118110236,
    "population":10160
  },
  {
    "state":"NM",
    "FIPS":35061,
    "county":"Valencia County",
    "number":2261.020000000001,
    "rate":29.50567662795251,
    "population":76630
  },
  {
    "state":"MO",
    "FIPS":29109,
    "county":"Lawrence County",
    "number":1211.1199999999994,
    "rate":31.561775206525407,
    "population":38373
  },
  {
    "state":"VA",
    "FIPS":51045,
    "county":"Craig County",
    "number":13.12,
    "rate":2.524047710657945,
    "population":5198
  },
  {
    "state":"NM",
    "FIPS":35028,
    "county":"Los Alamos County",
    "number":1520.9800000000002,
    "rate":83.74518224865105,
    "population":18162
  },
  {
    "state":"NM",
    "FIPS":35057,
    "county":"Torrance County",
    "number":207.94999999999996,
    "rate":12.93865107018417,
    "population":16072
  },
  {
    "state":"AR",
    "FIPS":5059,
    "county":"Hot Spring County",
    "number":3156.4200000000005,
    "rate":94.54322170969868,
    "population":33386
  },
  {
    "state":"MO",
    "FIPS":29107,
    "county":"Lafayette County",
    "number":1447.0999999999997,
    "rate":43.70714911353407,
    "population":33109
  },
  {
    "state":"NM",
    "FIPS":35053,
    "county":"Socorro County",
    "number":16.6,
    "rate":0.947110172876134,
    "population":17527
  },
  {
    "state":"MO",
    "FIPS":29105,
    "county":"Laclede County",
    "number":566.6199999999999,
    "rate":16.000790692420647,
    "population":35412
  },
  {
    "state":"NM",
    "FIPS":35045,
    "county":"San Juan County",
    "number":3620.280000000001,
    "rate":28.202575428264286,
    "population":128367
  },
  {
    "state":"MO",
    "FIPS":29101,
    "county":"Johnson County",
    "number":3896.5700000000006,
    "rate":71.60443235694073,
    "population":54418
  },
  {
    "state":"AR",
    "FIPS":5057,
    "county":"Hempstead County",
    "number":177.26000000000002,
    "rate":7.9399776035834275,
    "population":22325
  },
  {
    "state":"NM",
    "FIPS":35041,
    "county":"Roosevelt County",
    "number":12.45,
    "rate":0.6122147915027537,
    "population":20336
  },
  {
    "state":"MO",
    "FIPS":29099,
    "county":"Jefferson County",
    "number":37645.67999999993,
    "rate":171.03742810151624,
    "population":220102
  },
  {
    "state":"MO",
    "FIPS":29097,
    "county":"Jasper County",
    "number":3766.56,
    "rate":32.64425993655856,
    "population":115382
  },
  {
    "state":"AR",
    "FIPS":5055,
    "county":"Greene County",
    "number":3896.3900000000003,
    "rate":90.28198711710459,
    "population":43158
  },
  {
    "state":"NM",
    "FIPS":35025,
    "county":"Lea County",
    "number":743.11,
    "rate":11.210662885073772,
    "population":66286
  },
  {
    "state":"MO",
    "FIPS":29091,
    "county":"Howell County",
    "number":2992.810000000001,
    "rate":73.67460981734038,
    "population":40622
  },
  {
    "state":"MO",
    "FIPS":29089,
    "county":"Howard County",
    "number":28.86,
    "rate":2.83469207347019,
    "population":10181
  },
  {
    "state":"NM",
    "FIPS":35017,
    "county":"Grant County",
    "number":31.8,
    "rate":1.083881522887624,
    "population":29339
  },
  {
    "state":"MO",
    "FIPS":29087,
    "county":"Holt County",
    "number":12.06,
    "rate":2.5902061855670104,
    "population":4656
  },
  {
    "state":"NM",
    "FIPS":35013,
    "county":"Dona Ana County",
    "number":17452.539999999997,
    "rate":81.4747348371676,
    "population":214208
  },
  {
    "state":"MO",
    "FIPS":29085,
    "county":"Hickory County",
    "number":64.15,
    "rate":6.830281090289609,
    "population":9392
  },
  {
    "state":"AR",
    "FIPS":5053,
    "county":"Grant County",
    "number":500.75000000000006,
    "rate":27.765456057665652,
    "population":18035
  },
  {
    "state":"NM",
    "FIPS":35009,
    "county":"Curry County",
    "number":1585.9500000000003,
    "rate":31.297114891265743,
    "population":50674
  },
  {
    "state":"MO",
    "FIPS":29083,
    "county":"Henry County",
    "number":1309.4400000000005,
    "rate":59.11693002257339,
    "population":22150
  },
  {
    "state":"NM",
    "FIPS":35005,
    "county":"Chaves County",
    "number":2594.7000000000003,
    "rate":39.416357780883516,
    "population":65828
  },
  {
    "state":"MO",
    "FIPS":29081,
    "county":"Harrison County",
    "number":169.69,
    "rate":19.41311062807459,
    "population":8741
  },
  {
    "state":"NM",
    "FIPS":35001,
    "county":"Bernalillo County",
    "number":664698.7500000007,
    "rate":987.6726424416239,
    "population":672995
  },
  {
    "state":"MO",
    "FIPS":29079,
    "county":"Grundy County",
    "number":110.57000000000001,
    "rate":10.71103361425942,
    "population":10323
  },
  {
    "state":"AR",
    "FIPS":5051,
    "county":"Garland County",
    "number":14176.69000000001,
    "rate":146.39745138738303,
    "population":96837
  },
  {
    "state":"MO",
    "FIPS":29075,
    "county":"Gentry County",
    "number":127.66,
    "rate":18.776290630975144,
    "population":6799
  },
  {
    "state":"MO",
    "FIPS":29073,
    "county":"Gasconade County",
    "number":100.44000000000001,
    "rate":6.704939919893191,
    "population":14980
  },
  {
    "state":"AK",
    "FIPS":2170,
    "county":"Matanuska-Susitna Borough",
    "number":3055.93,
    "rate":32.57990575492015,
    "population":93798
  },
  {
    "state":"MO",
    "FIPS":29065,
    "county":"Dent County",
    "number":267.06,
    "rate":17.048196616661347,
    "population":15665
  },
  {
    "state":"MO",
    "FIPS":29063,
    "county":"Dekalb County",
    "number":510.20000000000005,
    "rate":39.630262544663665,
    "population":12874
  },
  {
    "state":"MO",
    "FIPS":29061,
    "county":"Daviess County",
    "number":47.89,
    "rate":5.790110022971829,
    "population":8271
  },
  {
    "state":"AR",
    "FIPS":5047,
    "county":"Franklin County",
    "number":579.11,
    "rate":32.27678073793334,
    "population":17942
  },
  {
    "state":"MO",
    "FIPS":29059,
    "county":"Dallas County",
    "number":412.98,
    "rate":24.618777943368112,
    "population":16775
  },
  {
    "state":"MO",
    "FIPS":29055,
    "county":"Crawford County",
    "number":2877.57,
    "rate":116.15282150641802,
    "population":24774
  },
  {
    "state":"MO",
    "FIPS":29053,
    "county":"Cooper County",
    "number":103.35,
    "rate":5.895943864453192,
    "population":17529
  },
  {
    "state":"MO",
    "FIPS":29049,
    "county":"Clinton County",
    "number":1020.66,
    "rate":49.77615215801024,
    "population":20505
  },
  {
    "state":"MO",
    "FIPS":29047,
    "county":"Clay County",
    "number":102486.44999999997,
    "rate":450.1159476303202,
    "population":227689
  },
  {
    "state":"MO",
    "FIPS":29045,
    "county":"Clark County",
    "number":165.61,
    "rate":23.7025905252612,
    "population":6987
  },
  {
    "state":"AR",
    "FIPS":5043,
    "county":"Drew County",
    "number":4328.3099999999995,
    "rate":230.5358189081225,
    "population":18775
  },
  {
    "state":"MO",
    "FIPS":29043,
    "county":"Christian County",
    "number":4064.5999999999995,
    "rate":50.94696732304683,
    "population":79781
  },
  {
    "state":"MO",
    "FIPS":29041,
    "county":"Chariton County",
    "number":132.01,
    "rate":17.18209032929845,
    "population":7683
  },
  {
    "state":"MO",
    "FIPS":29037,
    "county":"Cass County",
    "number":9878.16,
    "rate":98.34984418403211,
    "population":100439
  },
  {
    "state":"AR",
    "FIPS":5041,
    "county":"Desha County",
    "number":557.67,
    "rate":44.35104183235247,
    "population":12574
  },
  {
    "state":"MO",
    "FIPS":29035,
    "county":"Carter County",
    "number":29,
    "rate":4.637773868543099,
    "population":6253
  },
  {
    "state":"MO",
    "FIPS":29033,
    "county":"Carroll County",
    "number":384.8399999999999,
    "rate":42.313358988455185,
    "population":9095
  },
  {
    "state":"MO",
    "FIPS":29031,
    "county":"Cape Girardeau County",
    "number":28418.29999999999,
    "rate":368.6857810067461,
    "population":77080
  },
  {
    "state":"MO",
    "FIPS":29029,
    "county":"Camden County",
    "number":6334.7,
    "rate":144.3970822885799,
    "population":43870
  },
  {
    "state":"AR",
    "FIPS":5039,
    "county":"Dallas County",
    "number":208.05,
    "rate":26.120527306967986,
    "population":7965
  },
  {
    "state":"MO",
    "FIPS":29027,
    "county":"Callaway County",
    "number":2971.7799999999997,
    "rate":66.84466237797471,
    "population":44458
  },
  {
    "state":"MO",
    "FIPS":29025,
    "county":"Caldwell County",
    "number":389.5900000000001,
    "rate":42.736946028960084,
    "population":9116
  },
  {
    "state":"WV",
    "FIPS":54107,
    "county":"Wood County",
    "number":24801.290000000008,
    "rate":286.51806240685767,
    "population":86561
  },
  {
    "state":"MO",
    "FIPS":29023,
    "county":"Butler County",
    "number":7475.390000000001,
    "rate":173.79777736445646,
    "population":43012
  },
  {
    "state":"WV",
    "FIPS":54095,
    "county":"Tyler County",
    "number":890.3,
    "rate":98.5608325030444,
    "population":9033
  },
  {
    "state":"MO",
    "FIPS":29017,
    "county":"Bollinger County",
    "number":277.37,
    "rate":22.359532446594116,
    "population":12405
  },
  {
    "state":"WV",
    "FIPS":54091,
    "county":"Taylor County",
    "number":1504.4600000000003,
    "rate":88.5810174281677,
    "population":16984
  },
  {
    "state":"MO",
    "FIPS":29015,
    "county":"Benton County",
    "number":1717.1499999999999,
    "rate":90.57653760945247,
    "population":18958
  },
  {
    "state":"WV",
    "FIPS":54087,
    "county":"Roane County",
    "number":1360.9199999999998,
    "rate":92.51665533650576,
    "population":14710
  },
  {
    "state":"MO",
    "FIPS":29013,
    "county":"Bates County",
    "number":595.7499999999998,
    "rate":35.654437728170436,
    "population":16709
  },
  {
    "state":"WV",
    "FIPS":54083,
    "county":"Randolph County",
    "number":3462.8100000000004,
    "rate":117.70258327668253,
    "population":29420
  },
  {
    "state":"AR",
    "FIPS":5035,
    "county":"Crittenden County",
    "number":656.9399999999999,
    "rate":13.120431396045536,
    "population":50070
  },
  {
    "state":"MO",
    "FIPS":29011,
    "county":"Barton County",
    "number":273.65000000000003,
    "rate":22.131014961585123,
    "population":12365
  },
  {
    "state":"WV",
    "FIPS":54079,
    "county":"Putnam County",
    "number":4273.8,
    "rate":75.52351163653714,
    "population":56589
  },
  {
    "state":"MO",
    "FIPS":29009,
    "county":"Barry County",
    "number":1341.7199999999998,
    "rate":37.640127924591816,
    "population":35646
  },
  {
    "state":"WV",
    "FIPS":54075,
    "county":"Pocahontas County",
    "number":381.67,
    "rate":43.885247786593084,
    "population":8697
  },
  {
    "state":"MO",
    "FIPS":29007,
    "county":"Audrain County",
    "number":490.2199999999999,
    "rate":19.14174150722374,
    "population":25610
  },
  {
    "state":"WV",
    "FIPS":54067,
    "county":"Nicholas County",
    "number":5983.500000000001,
    "rate":227.92549139113214,
    "population":26252
  },
  {
    "state":"AR",
    "FIPS":5033,
    "county":"Crawford County",
    "number":3911.11,
    "rate":63.1506628130399,
    "population":61933
  },
  {
    "state":"MO",
    "FIPS":29003,
    "county":"Andrew County",
    "number":125.12,
    "rate":7.182548794489093,
    "population":17420
  },
  {
    "state":"WV",
    "FIPS":54063,
    "county":"Monroe County",
    "number":910.48,
    "rate":67.48295286095464,
    "population":13492
  },
  {
    "state":"MO",
    "FIPS":29001,
    "county":"Adair County",
    "number":32001.739999999987,
    "rate":1246.6105722410498,
    "population":25671
  },
  {
    "state":"OH",
    "FIPS":39147,
    "county":"Seneca County",
    "number":3905.4400000000005,
    "rate":69.70887996430166,
    "population":56025
  },
  {
    "state":"RI",
    "FIPS":44001,
    "county":"Bristol County",
    "number":6286.610000000001,
    "rate":127.67801291685285,
    "population":49238
  },
  {
    "state":"MN",
    "FIPS":27173,
    "county":"Yellow Medicine County",
    "number":37.28,
    "rate":3.666404405979544,
    "population":10168
  },
  {
    "state":"OH",
    "FIPS":39135,
    "county":"Preble County",
    "number":2113.5899999999997,
    "rate":50.44969566774077,
    "population":41895
  },
  {
    "state":"MN",
    "FIPS":27167,
    "county":"Wilkin County",
    "number":71.7,
    "rate":10.850484261501212,
    "population":6608
  },
  {
    "state":"OH",
    "FIPS":39127,
    "county":"Perry County",
    "number":4859.849999999999,
    "rate":135.0070839236603,
    "population":35997
  },
  {
    "state":"MN",
    "FIPS":27163,
    "county":"Washington County",
    "number":927.8200000000002,
    "rate":3.8007963557711224,
    "population":244112
  },
  {
    "state":"MN",
    "FIPS":27159,
    "county":"Wadena County",
    "number":73.9,
    "rate":5.398495142084886,
    "population":13689
  },
  {
    "state":"OH",
    "FIPS":39115,
    "county":"Morgan County",
    "number":968.5799999999999,
    "rate":64.80963532954165,
    "population":14945
  },
  {
    "state":"MN",
    "FIPS":27157,
    "county":"Wabasha County",
    "number":11.28,
    "rate":0.526561478853515,
    "population":21422
  },
  {
    "state":"OH",
    "FIPS":39111,
    "county":"Monroe County",
    "number":1486.87,
    "rate":101.98710473969408,
    "population":14579
  },
  {
    "state":"MN",
    "FIPS":27155,
    "county":"Traverse County",
    "number":12.95,
    "rate":3.779918272037361,
    "population":3426
  },
  {
    "state":"MN",
    "FIPS":27147,
    "county":"Steele County",
    "number":11.64,
    "rate":0.3206523236274483,
    "population":36301
  },
  {
    "state":"OH",
    "FIPS":39083,
    "county":"Knox County",
    "number":2984.4299999999985,
    "rate":49.072298863804505,
    "population":60817
  },
  {
    "state":"MN",
    "FIPS":27141,
    "county":"Sherburne County",
    "number":36.04,
    "rate":0.4027355623100304,
    "population":89488
  },
  {
    "state":"OH",
    "FIPS":39079,
    "county":"Jackson County",
    "number":2286.24,
    "rate":69.54765308916132,
    "population":32873
  },
  {
    "state":"MN",
    "FIPS":27139,
    "county":"Scott County",
    "number":129.64,
    "rate":0.9584929096366835,
    "population":135254
  },
  {
    "state":"OH",
    "FIPS":39071,
    "county":"Highland County",
    "number":385.93,
    "rate":8.970109706210486,
    "population":43024
  },
  {
    "state":"MN",
    "FIPS":27135,
    "county":"Roseau County",
    "number":52.24,
    "rate":3.3731516755988893,
    "population":15487
  },
  {
    "state":"OH",
    "FIPS":39063,
    "county":"Hancock County",
    "number":5346.82,
    "rate":70.68119026531124,
    "population":75647
  },
  {
    "state":"MN",
    "FIPS":27131,
    "county":"Rice County",
    "number":10.26,
    "rate":0.15807962529274006,
    "population":64904
  },
  {
    "state":"MN",
    "FIPS":27119,
    "county":"Polk County",
    "number":197.09,
    "rate":6.254244280138355,
    "population":31513
  },
  {
    "state":"MN",
    "FIPS":27117,
    "county":"Pipestone County",
    "number":207.25,
    "rate":22.1113837618692,
    "population":9373
  },
  {
    "state":"OH",
    "FIPS":39027,
    "county":"Clinton County",
    "number":26457.97,
    "rate":632.4967129640697,
    "population":41831
  },
  {
    "state":"MN",
    "FIPS":27113,
    "county":"Pennington County",
    "number":70.30000000000001,
    "rate":4.996091251510199,
    "population":14071
  },
  {
    "state":"MN",
    "FIPS":27111,
    "county":"Otter Tail County",
    "number":162.18000000000004,
    "rate":2.830761711931858,
    "population":57292
  },
  {
    "state":"OH",
    "FIPS":39011,
    "county":"Auglaize County",
    "number":5399.89,
    "rate":117.73187110277766,
    "population":45866
  },
  {
    "state":"MN",
    "FIPS":27105,
    "county":"Nobles County",
    "number":64.58,
    "rate":2.9796069022792286,
    "population":21674
  },
  {
    "state":"OH",
    "FIPS":39007,
    "county":"Ashtabula County",
    "number":9959.090000000002,
    "rate":99.32867230511452,
    "population":100264
  },
  {
    "state":"MN",
    "FIPS":27103,
    "county":"Nicollet County",
    "number":36.82,
    "rate":1.1179256740344912,
    "population":32936
  },
  {
    "state":"OH",
    "FIPS":39003,
    "county":"Allen County",
    "number":28500.83000000002,
    "rate":270.7068567575014,
    "population":105283
  },
  {
    "state":"MN",
    "FIPS":27101,
    "county":"Murray County",
    "number":32.87,
    "rate":3.8336832283648237,
    "population":8574
  },
  {
    "state":"MN",
    "FIPS":27099,
    "county":"Mower County",
    "number":113.21,
    "rate":2.8750285699773976,
    "population":39377
  },
  {
    "state":"MN",
    "FIPS":27093,
    "county":"Meeker County",
    "number":10.7,
    "rate":0.4643291095295955,
    "population":23044
  },
  {
    "state":"MN",
    "FIPS":27085,
    "county":"McLeod County",
    "number":159.19,
    "rate":4.42059370747827,
    "population":36011
  },
  {
    "state":"MN",
    "FIPS":27089,
    "county":"Marshall County",
    "number":12.39,
    "rate":1.3082039911308205,
    "population":9471
  },
  {
    "state":"MN",
    "FIPS":27087,
    "county":"Mahnomen County",
    "number":10.79,
    "rate":1.9543560949103422,
    "population":5521
  },
  {
    "state":"MN",
    "FIPS":27083,
    "county":"Lyon County",
    "number":35.33,
    "rate":1.379108439378562,
    "population":25618
  },
  {
    "state":"MN",
    "FIPS":27081,
    "county":"Lincoln County",
    "number":14.07,
    "rate":2.4258620689655173,
    "population":5800
  },
  {
    "state":"MN",
    "FIPS":27077,
    "county":"Lake of the Woods County",
    "number":33.34,
    "rate":8.402217741935484,
    "population":3968
  },
  {
    "state":"MN",
    "FIPS":27069,
    "county":"Kittson County",
    "number":53.2,
    "rate":11.809100998890123,
    "population":4505
  },
  {
    "state":"MN",
    "FIPS":27067,
    "county":"Kandiyohi County",
    "number":39.989999999999995,
    "rate":0.9431826222316563,
    "population":42399
  },
  {
    "state":"MN",
    "FIPS":27063,
    "county":"Jackson County",
    "number":48.34,
    "rate":4.694115362206254,
    "population":10298
  },
  {
    "state":"MN",
    "FIPS":27061,
    "county":"Itasca County",
    "number":11.49,
    "rate":0.25391142932909044,
    "population":45252
  },
  {
    "state":"MN",
    "FIPS":27055,
    "county":"Houston County",
    "number":64.54,
    "rate":3.430059523809524,
    "population":18816
  },
  {
    "state":"MN",
    "FIPS":27051,
    "county":"Grant County",
    "number":31.3,
    "rate":5.264928511354079,
    "population":5945
  },
  {
    "state":"MN",
    "FIPS":27049,
    "county":"Goodhue County",
    "number":10.7,
    "rate":0.2306382428383592,
    "population":46393
  },
  {
    "state":"MN",
    "FIPS":27047,
    "county":"Freeborn County",
    "number":13,
    "rate":0.4186525827643952,
    "population":31052
  },
  {
    "state":"MN",
    "FIPS":27041,
    "county":"Douglas County",
    "number":117.17000000000002,
    "rate":3.21489326675081,
    "population":36446
  },
  {
    "state":"MN",
    "FIPS":27039,
    "county":"Dodge County",
    "number":201.77999999999997,
    "rate":9.970845481049562,
    "population":20237
  },
  {
    "state":"MN",
    "FIPS":27035,
    "county":"Crow Wing County",
    "number":50.93000000000001,
    "rate":0.8103420843277646,
    "population":62850
  },
  {
    "state":"MN",
    "FIPS":27033,
    "county":"Cottonwood County",
    "number":62.120000000000005,
    "rate":5.333104395604396,
    "population":11648
  },
  {
    "state":"MN",
    "FIPS":27019,
    "county":"Carver County",
    "number":34.34,
    "rate":0.3657471509212909,
    "population":93890
  },
  {
    "state":"MN",
    "FIPS":27017,
    "county":"Carlton County",
    "number":60.92,
    "rate":1.725241426184475,
    "population":35311
  },
  {
    "state":"MN",
    "FIPS":27013,
    "county":"Blue Earth County",
    "number":6549.110000000002,
    "rate":100.75553846153849,
    "population":65000
  },
  {
    "state":"MN",
    "FIPS":27007,
    "county":"Beltrami County",
    "number":56.36,
    "rate":1.245772639862072,
    "population":45241
  },
  {
    "state":"MN",
    "FIPS":27005,
    "county":"Becker County",
    "number":146.70999999999998,
    "rate":4.443333939063541,
    "population":33018
  },
  {
    "state":"MN",
    "FIPS":27003,
    "county":"Anoka County",
    "number":87709.37999999999,
    "rate":260.9373103423655,
    "population":336132
  },
  {
    "state":"NC",
    "FIPS":37131,
    "county":"Northampton County",
    "number":180.84999999999997,
    "rate":8.486227769696399,
    "population":21311
  },
  {
    "state":"TX",
    "FIPS":48391,
    "county":"Refugio County",
    "number":11.56,
    "rate":1.5971262779773419,
    "population":7238
  },
  {
    "state":"AL",
    "FIPS":1127,
    "county":"Walker County",
    "number":12739.01000000002,
    "rate":192.650434782609,
    "population":66125
  },
  {
    "state":"GA",
    "FIPS":13267,
    "county":"Tattnall County",
    "number":734.27,
    "rate":29.01679509978265,
    "population":25305
  },
  {
    "state":"MI",
    "FIPS":26165,
    "county":"Wexford County",
    "number":1758.1900000000003,
    "rate":53.94213658955637,
    "population":32594
  },
  {
    "state":"MI",
    "FIPS":26159,
    "county":"Van Buren County",
    "number":2823.1000000000004,
    "rate":37.51627906976745,
    "population":75250
  },
  {
    "state":"NC",
    "FIPS":37115,
    "county":"Madison County",
    "number":431.85,
    "rate":20.680490374485203,
    "population":20882
  },
  {
    "state":"TX",
    "FIPS":48375,
    "county":"Potter County",
    "number":266279.8100000003,
    "rate":2169.214933932909,
    "population":122754
  },
  {
    "state":"GA",
    "FIPS":13263,
    "county":"Talbot County",
    "number":20,
    "rate":3.059039461609055,
    "population":6538
  },
  {
    "state":"MI",
    "FIPS":26157,
    "county":"Tuscola County",
    "number":1886.2000000000005,
    "rate":34.47948085184171,
    "population":54705
  },
  {
    "state":"CA",
    "FIPS":6115,
    "county":"Yuba County",
    "number":4534.449999999999,
    "rate":62.135330309549566,
    "population":72977
  },
  {
    "state":"NC",
    "FIPS":37099,
    "county":"Jackson County",
    "number":4468.889999999999,
    "rate":110.29938789613979,
    "population":40516
  },
  {
    "state":"GA",
    "FIPS":13259,
    "county":"Stewart County",
    "number":111.33,
    "rate":18.2807881773399,
    "population":6090
  },
  {
    "state":"MI",
    "FIPS":26149,
    "county":"St Joseph County",
    "number":3093.6500000000015,
    "rate":50.79718235854325,
    "population":60902
  },
  {
    "state":"NC",
    "FIPS":37111,
    "county":"McDowell County",
    "number":3217.2799999999997,
    "rate":71.54757933595748,
    "population":44967
  },
  {
    "state":"TX",
    "FIPS":48371,
    "county":"Pecos County",
    "number":330.06999999999994,
    "rate":21.170547110512473,
    "population":15591
  },
  {
    "state":"MI",
    "FIPS":26155,
    "county":"Shiawassee County",
    "number":4579.48,
    "rate":66.08196248196248,
    "population":69300
  },
  {
    "state":"NC",
    "FIPS":37107,
    "county":"Lenoir County",
    "number":5706.3099999999995,
    "rate":96.42131765262499,
    "population":59181
  },
  {
    "state":"TX",
    "FIPS":48367,
    "county":"Parker County",
    "number":12473.96,
    "rate":104.16059186519367,
    "population":119757
  },
  {
    "state":"GA",
    "FIPS":13261,
    "county":"Sumter County",
    "number":5656.36,
    "rate":178.8233062501976,
    "population":31631
  },
  {
    "state":"MI",
    "FIPS":26153,
    "county":"Schoolcraft County",
    "number":927.2599999999998,
    "rate":110.98264512268099,
    "population":8355
  },
  {
    "state":"NC",
    "FIPS":37087,
    "county":"Haywood County",
    "number":2081.55,
    "rate":35.41135041339186,
    "population":58782
  },
  {
    "state":"TX",
    "FIPS":48347,
    "county":"Nacogdoches County",
    "number":8876.429999999998,
    "rate":134.81614799289196,
    "population":65841
  },
  {
    "state":"MI",
    "FIPS":26143,
    "county":"Roscommon County",
    "number":2283.1800000000003,
    "rate":94.77315179942718,
    "population":24091
  },
  {
    "state":"GA",
    "FIPS":13255,
    "county":"Spalding County",
    "number":6423.86,
    "rate":100.68903901315068,
    "population":63799
  },
  {
    "state":"MI",
    "FIPS":26141,
    "county":"Presque Isle County",
    "number":320.01,
    "rate":24.40588773642465,
    "population":13112
  },
  {
    "state":"NC",
    "FIPS":37079,
    "county":"Greene County",
    "number":685.09,
    "rate":32.02702070964425,
    "population":21391
  },
  {
    "state":"VA",
    "FIPS":51540,
    "county":"Charlottesville City",
    "number":285163.9,
    "rate":6405.154870735159,
    "population":44521
  },
  {
    "state":"TX",
    "FIPS":48339,
    "county":"Montgomery County",
    "number":50918.30999999998,
    "rate":104.96045300225302,
    "population":485119
  },
  {
    "state":"MI",
    "FIPS":26139,
    "county":"Ottawa County",
    "number":30437.660000000007,
    "rate":112.96050531816194,
    "population":269454
  },
  {
    "state":"TX",
    "FIPS":48335,
    "county":"Mitchell County",
    "number":96.54999999999998,
    "rate":10.368341924398624,
    "population":9312
  },
  {
    "state":"GA",
    "FIPS":13253,
    "county":"Seminole County",
    "number":817.7800000000002,
    "rate":91.7307908020191,
    "population":8915
  },
  {
    "state":"MI",
    "FIPS":26137,
    "county":"Otsego County",
    "number":3540.46,
    "rate":147.21859536779075,
    "population":24049
  },
  {
    "state":"AL",
    "FIPS":1125,
    "county":"Tuscaloosa County",
    "number":65767.94000000016,
    "rate":331.0861193195842,
    "population":198643
  },
  {
    "state":"GA",
    "FIPS":13251,
    "county":"Screven County",
    "number":625.9299999999998,
    "rate":44.07957746478872,
    "population":14200
  },
  {
    "state":"MI",
    "FIPS":26133,
    "county":"Osceola County",
    "number":496.14,
    "rate":21.321014181349376,
    "population":23270
  },
  {
    "state":"TX",
    "FIPS":48323,
    "county":"Maverick County",
    "number":2560.42,
    "rate":45.91363913495679,
    "population":55766
  },
  {
    "state":"MI",
    "FIPS":26131,
    "county":"Ontonagon County",
    "number":29.490000000000002,
    "rate":4.604934415990007,
    "population":6404
  },
  {
    "state":"NC",
    "FIPS":37059,
    "county":"Davie County",
    "number":976.12,
    "rate":23.59715708552918,
    "population":41366
  },
  {
    "state":"VA",
    "FIPS":51520,
    "county":"Bristol City",
    "number":1168.0100000000002,
    "rate":65.89990972692395,
    "population":17724
  },
  {
    "state":"GA",
    "FIPS":13249,
    "county":"Schley County",
    "number":18,
    "rate":3.6079374624173184,
    "population":4989
  },
  {
    "state":"MI",
    "FIPS":26129,
    "county":"Ogemaw County",
    "number":4632.319999999999,
    "rate":216.21096849474907,
    "population":21425
  },
  {
    "state":"NC",
    "FIPS":37055,
    "county":"Dare County",
    "number":1175.9500000000003,
    "rate":34.127053224215,
    "population":34458
  },
  {
    "state":"MI",
    "FIPS":26127,
    "county":"Oceana County",
    "number":2517.58,
    "rate":95.87493811645531,
    "population":26259
  },
  {
    "state":"MI",
    "FIPS":26123,
    "county":"Newaygo County",
    "number":1216.15,
    "rate":25.356532254701637,
    "population":47962
  },
  {
    "state":"NC",
    "FIPS":37043,
    "county":"Clay County",
    "number":12.61,
    "rate":1.1833708708708708,
    "population":10656
  },
  {
    "state":"TX",
    "FIPS":48303,
    "county":"Lubbock County",
    "number":215340.36000000028,
    "rate":752.685671942286,
    "population":286096
  },
  {
    "state":"GA",
    "FIPS":13245,
    "county":"Richmond County",
    "number":256962.2900000004,
    "rate":1272.30469484963,
    "population":201966
  },
  {
    "state":"MI",
    "FIPS":26121,
    "county":"Muskegon County",
    "number":16779.96000000001,
    "rate":98.62094906727171,
    "population":170146
  },
  {
    "state":"NC",
    "FIPS":37039,
    "county":"Cherokee County",
    "number":1695.9100000000005,
    "rate":62.87668693459886,
    "population":26972
  },
  {
    "state":"TX",
    "FIPS":48299,
    "county":"Llano County",
    "number":390.25000000000006,
    "rate":20.409497411223267,
    "population":19121
  },
  {
    "state":"MI",
    "FIPS":26119,
    "county":"Montmorency County",
    "number":293.83,
    "rate":30.95554150863885,
    "population":9492
  },
  {
    "state":"GA",
    "FIPS":13243,
    "county":"Randolph County",
    "number":177.63,
    "rate":24.30623973727422,
    "population":7308
  },
  {
    "state":"MI",
    "FIPS":26117,
    "county":"Montcalm County",
    "number":2325.9999999999995,
    "rate":36.88609080385036,
    "population":63059
  },
  {
    "state":"NC",
    "FIPS":37027,
    "county":"Caldwell County",
    "number":7622.57,
    "rate":93.01942742781831,
    "population":81946
  },
  {
    "state":"TX",
    "FIPS":48287,
    "county":"Lee County",
    "number":1294.8700000000001,
    "rate":78.24933526710178,
    "population":16548
  },
  {
    "state":"GA",
    "FIPS":13241,
    "county":"Rabun County",
    "number":696.7499999999999,
    "rate":42.72704973324339,
    "population":16307
  },
  {
    "state":"MI",
    "FIPS":26113,
    "county":"Missaukee County",
    "number":337.63000000000005,
    "rate":22.453281904635237,
    "population":15037
  },
  {
    "state":"TX",
    "FIPS":48283,
    "county":"La Salle County",
    "number":120.63,
    "rate":16.928150435026662,
    "population":7126
  },
  {
    "state":"MI",
    "FIPS":26111,
    "county":"Midland County",
    "number":14980.570000000007,
    "rate":179.08845294026236,
    "population":83649
  },
  {
    "state":"TX",
    "FIPS":48279,
    "county":"Lamb County",
    "number":812.3599999999999,
    "rate":58.31311463642236,
    "population":13931
  },
  {
    "state":"GA",
    "FIPS":13239,
    "county":"Quitman County",
    "number":78.08,
    "rate":32.5604670558799,
    "population":2398
  },
  {
    "state":"MI",
    "FIPS":26109,
    "county":"Menominee County",
    "number":266.39000000000004,
    "rate":11.217365672898772,
    "population":23748
  },
  {
    "state":"NC",
    "FIPS":37015,
    "county":"Bertie County",
    "number":1880.7599999999998,
    "rate":91.29459734964321,
    "population":20601
  },
  {
    "state":"TX",
    "FIPS":48275,
    "county":"Knox County",
    "number":42.6,
    "rate":11.305732484076435,
    "population":3768
  },
  {
    "state":"MI",
    "FIPS":26107,
    "county":"Mecosta County",
    "number":1291.95,
    "rate":29.712294742652134,
    "population":43482
  },
  {
    "state":"GA",
    "FIPS":13237,
    "county":"Putnam County",
    "number":586.07,
    "rate":27.69576106989273,
    "population":21161
  },
  {
    "state":"MI",
    "FIPS":26105,
    "county":"Mason County",
    "number":987.0599999999997,
    "rate":34.42952317834594,
    "population":28669
  },
  {
    "state":"CA",
    "FIPS":6103,
    "county":"Tehama County",
    "number":3598.6399999999994,
    "rate":56.883802538608656,
    "population":63263
  },
  {
    "state":"NC",
    "FIPS":37003,
    "county":"Alexander County",
    "number":1204.2200000000003,
    "rate":32.535934291581114,
    "population":37012
  },
  {
    "state":"AL",
    "FIPS":1123,
    "county":"Tallapoosa County",
    "number":4113.78,
    "rate":99.9557780153562,
    "population":41156
  },
  {
    "state":"GA",
    "FIPS":13235,
    "county":"Pulaski County",
    "number":345.76,
    "rate":29.602739726027398,
    "population":11680
  },
  {
    "state":"MI",
    "FIPS":26101,
    "county":"Manistee County",
    "number":1509.2099999999996,
    "rate":61.34002601203055,
    "population":24604
  },
  {
    "state":"TX",
    "FIPS":48255,
    "county":"Karnes County",
    "number":124.04999999999998,
    "rate":8.327738990332973,
    "population":14896
  },
  {
    "state":"GA",
    "FIPS":13233,
    "county":"Polk County",
    "number":4275.42,
    "rate":103.95652491064264,
    "population":41127
  },
  {
    "state":"MI",
    "FIPS":26097,
    "county":"Mackinac County",
    "number":481.52,
    "rate":43.26713990475335,
    "population":11129
  },
  {
    "state":"TX",
    "FIPS":48251,
    "county":"Johnson County",
    "number":7652.82,
    "rate":49.84576304305347,
    "population":153530
  },
  {
    "state":"MI",
    "FIPS":26095,
    "county":"Luce County",
    "number":386.39999999999986,
    "rate":59.50107791807821,
    "population":6494
  },
  {
    "state":"MI",
    "FIPS":26093,
    "county":"Livingston County",
    "number":8386.55,
    "rate":45.82488675667848,
    "population":183013
  },
  {
    "state":"MI",
    "FIPS":26091,
    "county":"Lenawee County",
    "number":5392.07,
    "rate":54.382955118507304,
    "population":99150
  },
  {
    "state":"GA",
    "FIPS":13229,
    "county":"Pierce County",
    "number":802.4500000000002,
    "rate":42.604194319086815,
    "population":18835
  },
  {
    "state":"MI",
    "FIPS":26089,
    "county":"Leelanau County",
    "number":1828.82,
    "rate":84.52671473470143,
    "population":21636
  },
  {
    "state":"TX",
    "FIPS":48231,
    "county":"Hunt County",
    "number":2516.1999999999994,
    "rate":28.851865017027663,
    "population":87211
  },
  {
    "state":"GA",
    "FIPS":13227,
    "county":"Pickens County",
    "number":203073.76999999993,
    "rate":6927.062696138625,
    "population":29316
  },
  {
    "state":"MI",
    "FIPS":26085,
    "county":"Lake County",
    "number":46.97,
    "rate":4.095744680851063,
    "population":11468
  },
  {
    "state":"TX",
    "FIPS":48223,
    "county":"Hopkins County",
    "number":1409.11,
    "rate":39.78289102202145,
    "population":35420
  },
  {
    "state":"GA",
    "FIPS":13225,
    "county":"Peach County",
    "number":4245.589999999999,
    "rate":154.32897128316972,
    "population":27510
  },
  {
    "state":"MI",
    "FIPS":26081,
    "county":"Kent County",
    "number":82942.44999999987,
    "rate":134.96562497457447,
    "population":614545
  },
  {
    "state":"TX",
    "FIPS":48219,
    "county":"Hockley County",
    "number":525.3500000000001,
    "rate":22.720785399186926,
    "population":23122
  },
  {
    "state":"MI",
    "FIPS":26079,
    "county":"Kalkaska County",
    "number":55160.93000000002,
    "rate":3229.1845217187692,
    "population":17082
  },
  {
    "state":"TX",
    "FIPS":48211,
    "county":"Hemphill County",
    "number":792.7799999999997,
    "rate":194.21362077413028,
    "population":4082
  },
  {
    "state":"MI",
    "FIPS":26075,
    "county":"Jackson County",
    "number":15165.91,
    "rate":94.69461025500136,
    "population":160156
  },
  {
    "state":"GA",
    "FIPS":13221,
    "county":"Oglethorpe County",
    "number":150.81,
    "rate":10.331574981160513,
    "population":14597
  },
  {
    "state":"MI",
    "FIPS":26073,
    "county":"Isabella County",
    "number":4087.91,
    "rate":57.94180179158634,
    "population":70552
  },
  {
    "state":"TX",
    "FIPS":48203,
    "county":"Harrison County",
    "number":5655.8499999999985,
    "rate":84.05936032340524,
    "population":67284
  },
  {
    "state":"MI",
    "FIPS":26071,
    "county":"Iron County",
    "number":759.83,
    "rate":65.58173657862939,
    "population":11586
  },
  {
    "state":"TX",
    "FIPS":48199,
    "county":"Hardin County",
    "number":1461.4999999999995,
    "rate":26.50093383379571,
    "population":55149
  },
  {
    "state":"GA",
    "FIPS":13219,
    "county":"Oconee County",
    "number":5687.760000000001,
    "rate":169.68257756563247,
    "population":33520
  },
  {
    "state":"AL",
    "FIPS":1121,
    "county":"Talladega County",
    "number":6310.219999999999,
    "rate":77.08739524542499,
    "population":81858
  },
  {
    "state":"MI",
    "FIPS":26069,
    "county":"Iosco County",
    "number":2559.2,
    "rate":100.87504927079226,
    "population":25370
  },
  {
    "state":"TX",
    "FIPS":48195,
    "county":"Hansford County",
    "number":647.4200000000001,
    "rate":117.66993820428937,
    "population":5502
  },
  {
    "state":"MI",
    "FIPS":26067,
    "county":"Ionia County",
    "number":3067.95,
    "rate":48.01474270689871,
    "population":63896
  },
  {
    "state":"GA",
    "FIPS":13217,
    "county":"Newton County",
    "number":3238.21,
    "rate":32.056406905836695,
    "population":101016
  },
  {
    "state":"MI",
    "FIPS":26065,
    "county":"Ingham County",
    "number":83144.07999999987,
    "rate":294.55305520915954,
    "population":282272
  },
  {
    "state":"TX",
    "FIPS":48183,
    "county":"Gregg County",
    "number":94940.50999999998,
    "rate":772.5272588204659,
    "population":122896
  },
  {
    "state":"GA",
    "FIPS":13215,
    "county":"Muscogee County",
    "number":157155.08000000007,
    "rate":785.6143490584434,
    "population":200041
  },
  {
    "state":"MI",
    "FIPS":26061,
    "county":"Houghton County",
    "number":466.21,
    "rate":12.651560379918587,
    "population":36850
  },
  {
    "state":"TX",
    "FIPS":48179,
    "county":"Gray County",
    "number":763.7300000000002,
    "rate":33.4485174966058,
    "population":22833
  },
  {
    "state":"MI",
    "FIPS":26059,
    "county":"Hillsdale County",
    "number":3132.52,
    "rate":67.7096662631852,
    "population":46264
  },
  {
    "state":"TX",
    "FIPS":48175,
    "county":"Goliad County",
    "number":82.97,
    "rate":11.306895611883347,
    "population":7338
  },
  {
    "state":"GA",
    "FIPS":13213,
    "county":"Murray County",
    "number":799.8900000000001,
    "rate":20.30486876174037,
    "population":39394
  },
  {
    "state":"MI",
    "FIPS":26057,
    "county":"Gratiot County",
    "number":2672.3600000000006,
    "rate":63.58069044276845,
    "population":42031
  },
  {
    "state":"TX",
    "FIPS":48167,
    "county":"Galveston County",
    "number":74897.76999999999,
    "rate":248.442692283452,
    "population":301469
  },
  {
    "state":"GA",
    "FIPS":13211,
    "county":"Morgan County",
    "number":1304.6500000000003,
    "rate":73.20035908657354,
    "population":17823
  },
  {
    "state":"MI",
    "FIPS":26053,
    "county":"Gogebic County",
    "number":1650.54,
    "rate":102.83738317757009,
    "population":16050
  },
  {
    "state":"TX",
    "FIPS":48163,
    "county":"Frio County",
    "number":1082.6599999999996,
    "rate":60.72466206741823,
    "population":17829
  },
  {
    "state":"MI",
    "FIPS":26051,
    "county":"Gladwin County",
    "number":353.74999999999994,
    "rate":13.868198212325543,
    "population":25508
  },
  {
    "state":"TX",
    "FIPS":48151,
    "county":"Fisher County",
    "number":13.23,
    "rate":3.4516044873467258,
    "population":3833
  },
  {
    "state":"GA",
    "FIPS":13207,
    "county":"Monroe County",
    "number":2594.2,
    "rate":97.01207883026065,
    "population":26741
  },
  {
    "state":"MI",
    "FIPS":26045,
    "county":"Eaton County",
    "number":9822.800000000003,
    "rate":90.9788085358625,
    "population":107968
  },
  {
    "state":"DE",
    "FIPS":10003,
    "county":"New Castle County",
    "number":263948.97999999975,
    "rate":483.4044478142778,
    "population":546021
  },
  {
    "state":"TX",
    "FIPS":48147,
    "county":"Fannin County",
    "number":938.3999999999997,
    "rate":27.872991356521215,
    "population":33667
  },
  {
    "state":"MI",
    "FIPS":26043,
    "county":"Dickinson County",
    "number":2825.9599999999996,
    "rate":107.74592039042243,
    "population":26228
  },
  {
    "state":"TX",
    "FIPS":48143,
    "county":"Erath County",
    "number":2896.3999999999996,
    "rate":73.40835360908352,
    "population":39456
  },
  {
    "state":"GA",
    "FIPS":13205,
    "county":"Mitchell County",
    "number":1208.0400000000002,
    "rate":52.248605164136514,
    "population":23121
  },
  {
    "state":"MI",
    "FIPS":26041,
    "county":"Delta County",
    "number":1248.2900000000002,
    "rate":33.892373272515,
    "population":36831
  },
  {
    "state":"TX",
    "FIPS":48113,
    "county":"Dallas County",
    "number":6474928.640000002,
    "rate":2635.6279111797858,
    "population":2456693
  },
  {
    "state":"MO",
    "FIPS":29229,
    "county":"Wright County",
    "number":890.8499999999999,
    "rate":47.86942504030091,
    "population":18610
  },
  {
    "state":"TX",
    "FIPS":48131,
    "county":"Duval County",
    "number":95.78,
    "rate":8.276160027650565,
    "population":11573
  },
  {
    "state":"MI",
    "FIPS":26035,
    "county":"Clare County",
    "number":1447.5399999999997,
    "rate":47.028589993502266,
    "population":30780
  },
  {
    "state":"TX",
    "FIPS":48109,
    "county":"Culberson County",
    "number":101.06,
    "rate":43.88189318280504,
    "population":2303
  },
  {
    "state":"AR",
    "FIPS":5089,
    "county":"Marion County",
    "number":228.26999999999995,
    "rate":13.755347996384451,
    "population":16595
  },
  {
    "state":"MO",
    "FIPS":29227,
    "county":"Worth County",
    "number":14.95,
    "rate":7.1944177093359,
    "population":2078
  },
  {
    "state":"TX",
    "FIPS":48127,
    "county":"Dimmit County",
    "number":296.76,
    "rate":28.235965746907706,
    "population":10510
  },
  {
    "state":"GA",
    "FIPS":13201,
    "county":"Miller County",
    "number":465.19000000000005,
    "rate":77.76496155132064,
    "population":5982
  },
  {
    "state":"MI",
    "FIPS":26033,
    "county":"Chippewa County",
    "number":3204.2099999999996,
    "rate":82.16765822135602,
    "population":38996
  },
  {
    "state":"TX",
    "FIPS":48105,
    "county":"Crockett County",
    "number":62.150000000000006,
    "rate":16.72497308934338,
    "population":3716
  },
  {
    "state":"MO",
    "FIPS":29225,
    "county":"Webster County",
    "number":352.4200000000001,
    "rate":9.699455055870535,
    "population":36334
  },
  {
    "state":"TX",
    "FIPS":48123,
    "county":"De Witt County",
    "number":1464.29,
    "rate":71.5824208056316,
    "population":20456
  },
  {
    "state":"MI",
    "FIPS":26031,
    "county":"Cheboygan County",
    "number":3605.519999999999,
    "rate":139.8898114378831,
    "population":25774
  },
  {
    "state":"MO",
    "FIPS":29223,
    "county":"Wayne County",
    "number":93.61,
    "rate":6.997832099872916,
    "population":13377
  },
  {
    "state":"GA",
    "FIPS":13199,
    "county":"Meriwether County",
    "number":365.49,
    "rate":17.146275098517545,
    "population":21316
  },
  {
    "state":"MI",
    "FIPS":26029,
    "county":"Charlevoix County",
    "number":1029.0900000000001,
    "rate":39.5211029609432,
    "population":26039
  },
  {
    "state":"TX",
    "FIPS":48097,
    "county":"Cooke County",
    "number":3222.35,
    "rate":83.19391733147445,
    "population":38733
  },
  {
    "state":"MO",
    "FIPS":29221,
    "county":"Washington County",
    "number":684.2300000000001,
    "rate":27.269937427762947,
    "population":25091
  },
  {
    "state":"TX",
    "FIPS":48115,
    "county":"Dawson County",
    "number":220.26,
    "rate":16.120910488179753,
    "population":13663
  },
  {
    "state":"MI",
    "FIPS":26027,
    "county":"Cass County",
    "number":1850.0799999999997,
    "rate":35.541553002651085,
    "population":52054
  },
  {
    "state":"OK",
    "FIPS":40041,
    "county":"Delaware County",
    "number":1671.6099999999997,
    "rate":40.40340318565247,
    "population":41373
  },
  {
    "state":"TX",
    "FIPS":48089,
    "county":"Colorado County",
    "number":3560.0299999999997,
    "rate":172.10684070582548,
    "population":20685
  },
  {
    "state":"MO",
    "FIPS":29217,
    "county":"Vernon County",
    "number":2147.41,
    "rate":103.250793345514,
    "population":20798
  },
  {
    "state":"MI",
    "FIPS":26023,
    "county":"Branch County",
    "number":3440.0499999999993,
    "rate":78.61893226071851,
    "population":43756
  },
  {
    "state":"OK",
    "FIPS":40037,
    "county":"Creek County",
    "number":4580.89,
    "rate":64.6525249103791,
    "population":70854
  },
  {
    "state":"TX",
    "FIPS":48085,
    "county":"Collin County",
    "number":684718.5100000004,
    "rate":817.5977699659458,
    "population":837476
  },
  {
    "state":"MO",
    "FIPS":29215,
    "county":"Texas County",
    "number":716.5400000000001,
    "rate":27.828957588938948,
    "population":25748
  },
  {
    "state":"TX",
    "FIPS":48103,
    "county":"Crane County",
    "number":44.39,
    "rate":9.719728486971754,
    "population":4567
  },
  {
    "state":"GA",
    "FIPS":13195,
    "county":"Madison County",
    "number":872.8800000000001,
    "rate":31.15425797701478,
    "population":28018
  },
  {
    "state":"MI",
    "FIPS":26021,
    "county":"Berrien County",
    "number":8135.560000000003,
    "rate":52.13197741850736,
    "population":156057
  },
  {
    "state":"TX",
    "FIPS":48073,
    "county":"Cherokee County",
    "number":3137.2799999999993,
    "rate":61.33249921801688,
    "population":51152
  },
  {
    "state":"AK",
    "FIPS":2188,
    "county":"Northwest Arctic Borough",
    "number":15.66,
    "rate":2.0313918796212223,
    "population":7709
  },
  {
    "state":"MO",
    "FIPS":29209,
    "county":"Stone County",
    "number":2212.9000000000015,
    "rate":69.99968367443778,
    "population":31613
  },
  {
    "state":"TX",
    "FIPS":48091,
    "county":"Comal County",
    "number":146643.1299999996,
    "rate":1274.0829908685682,
    "population":115097
  },
  {
    "state":"MI",
    "FIPS":26015,
    "county":"Barry County",
    "number":1827.1399999999999,
    "rate":30.930205000592483,
    "population":59073
  },
  {
    "state":"OK",
    "FIPS":40021,
    "county":"Cherokee County",
    "number":1354.0500000000002,
    "rate":28.15950920245399,
    "population":48085
  },
  {
    "state":"TX",
    "FIPS":48069,
    "county":"Castro County",
    "number":68.05000000000001,
    "rate":8.320088030321557,
    "population":8179
  },
  {
    "state":"MO",
    "FIPS":29207,
    "county":"Stoddard County",
    "number":721.1800000000001,
    "rate":24.177953600643693,
    "population":29828
  },
  {
    "state":"GA",
    "FIPS":13191,
    "county":"McIntosh County",
    "number":77.31,
    "rate":5.553081453814107,
    "population":13922
  },
  {
    "state":"MI",
    "FIPS":26013,
    "county":"Baraga County",
    "number":559.9499999999999,
    "rate":64.31771192281185,
    "population":8706
  },
  {
    "state":"TX",
    "FIPS":48065,
    "county":"Carson County",
    "number":30.75,
    "rate":5.033557046979865,
    "population":6109
  },
  {
    "state":"MO",
    "FIPS":29205,
    "county":"Shelby County",
    "number":232.45,
    "rate":37.33536781239961,
    "population":6226
  },
  {
    "state":"TX",
    "FIPS":48083,
    "county":"Coleman County",
    "number":160.06,
    "rate":18.4507204610951,
    "population":8675
  },
  {
    "state":"MI",
    "FIPS":26011,
    "county":"Arenac County",
    "number":1989.18,
    "rate":128.23491490459,
    "population":15512
  },
  {
    "state":"OK",
    "FIPS":40013,
    "county":"Bryan County",
    "number":3078.2099999999996,
    "rate":70.82531866918227,
    "population":43462
  },
  {
    "state":"GA",
    "FIPS":13189,
    "county":"McDuffie County",
    "number":1643.9400000000003,
    "rate":76.17533941893333,
    "population":21581
  },
  {
    "state":"MI",
    "FIPS":26009,
    "county":"Antrim County",
    "number":751.36,
    "rate":32.163006720602716,
    "population":23361
  },
  {
    "state":"TX",
    "FIPS":48053,
    "county":"Burnet County",
    "number":2182.3299999999995,
    "rate":49.510640228685496,
    "population":44078
  },
  {
    "state":"MO",
    "FIPS":29199,
    "county":"Scotland County",
    "number":145.41,
    "rate":29.84605911330049,
    "population":4872
  },
  {
    "state":"AL",
    "FIPS":1117,
    "county":"Shelby County",
    "number":23500.569999999992,
    "rate":116.93978493553536,
    "population":200963
  },
  {
    "state":"TX",
    "FIPS":48071,
    "county":"Chambers County",
    "number":105.38,
    "rate":2.8960096735187424,
    "population":36388
  },
  {
    "state":"GA",
    "FIPS":13187,
    "county":"Lumpkin County",
    "number":1667.09,
    "rate":54.2654861495394,
    "population":30721
  },
  {
    "state":"MI",
    "FIPS":26005,
    "county":"Allegan County",
    "number":8972.670000000002,
    "rate":80.15678181866912,
    "population":111939
  },
  {
    "state":"AL",
    "FIPS":1065,
    "county":"Hale County",
    "number":430.24,
    "rate":27.955815464587396,
    "population":15390
  },
  {
    "state":"OK",
    "FIPS":40001,
    "county":"Adair County",
    "number":98.93,
    "rate":4.446691837468537,
    "population":22248
  },
  {
    "state":"TX",
    "FIPS":48049,
    "county":"Brown County",
    "number":4263.49,
    "rate":112.62091555062472,
    "population":37857
  },
  {
    "state":"MO",
    "FIPS":29197,
    "county":"Schuyler County",
    "number":336.27,
    "rate":76.63400182315405,
    "population":4388
  },
  {
    "state":"TX",
    "FIPS":48067,
    "county":"Cass County",
    "number":347.73999999999995,
    "rate":11.519528273760226,
    "population":30187
  },
  {
    "state":"MI",
    "FIPS":26003,
    "county":"Alger County",
    "number":576.68,
    "rate":60.74152096060669,
    "population":9494
  },
  {
    "state":"AR",
    "FIPS":5081,
    "county":"Little River County",
    "number":474.9400000000001,
    "rate":36.80278961642775,
    "population":12905
  },
  {
    "state":"MO",
    "FIPS":29195,
    "county":"Saline County",
    "number":678.3399999999999,
    "rate":28.89996591683708,
    "population":23472
  },
  {
    "state":"TX",
    "FIPS":48063,
    "county":"Camp County",
    "number":563.89,
    "rate":45.256019261637235,
    "population":12460
  },
  {
    "state":"GA",
    "FIPS":13185,
    "county":"Lowndes County",
    "number":7395.739999999999,
    "rate":64.49698259322565,
    "population":114668
  },
  {
    "state":"MI",
    "FIPS":26001,
    "county":"Alcona County",
    "number":38.14,
    "rate":3.598452684215492,
    "population":10599
  },
  {
    "state":"PA",
    "FIPS":42119,
    "county":"Union County",
    "number":6330.040000000001,
    "rate":140.2343871153548,
    "population":45139
  },
  {
    "state":"AR",
    "FIPS":5141,
    "county":"Van Buren County",
    "number":365.73999999999995,
    "rate":21.31973185660157,
    "population":17155
  },
  {
    "state":"ME",
    "FIPS":23029,
    "county":"Washington County",
    "number":1828.8000000000006,
    "rate":56.29675234723721,
    "population":32485
  },
  {
    "state":"PA",
    "FIPS":42111,
    "county":"Somerset County",
    "number":11745.32999999999,
    "rate":152.31915445467502,
    "population":77110
  },
  {
    "state":"ME",
    "FIPS":23025,
    "county":"Somerset County",
    "number":791.4499999999998,
    "rate":15.270408458584958,
    "population":51829
  },
  {
    "state":"NJ",
    "FIPS":34041,
    "county":"Warren County",
    "number":20802.249999999993,
    "rate":193.41933984193392,
    "population":107550
  },
  {
    "state":"PA",
    "FIPS":42107,
    "county":"Schuylkill County",
    "number":39045.66000000003,
    "rate":265.0973602737496,
    "population":147288
  },
  {
    "state":"ME",
    "FIPS":23023,
    "county":"Sagadahoc County",
    "number":838.7700000000001,
    "rate":23.88705359685596,
    "population":35114
  },
  {
    "state":"NJ",
    "FIPS":34037,
    "county":"Sussex County",
    "number":24700.95000000006,
    "rate":168.0508215123996,
    "population":146985
  },
  {
    "state":"VA",
    "FIPS":51710,
    "county":"Norfolk City",
    "number":266364.2100000002,
    "rate":1082.1215112736145,
    "population":246150
  },
  {
    "state":"PA",
    "FIPS":42103,
    "county":"Pike County",
    "number":5527.45,
    "rate":97.37940875938128,
    "population":56762
  },
  {
    "state":"AR",
    "FIPS":5139,
    "county":"Union County",
    "number":4843.120000000001,
    "rate":118.40211226285939,
    "population":40904
  },
  {
    "state":"ME",
    "FIPS":23021,
    "county":"Piscataquis County",
    "number":340.83,
    "rate":19.746813441483194,
    "population":17260
  },
  {
    "state":"PA",
    "FIPS":42091,
    "county":"Montgomery County",
    "number":704808.8099999987,
    "rate":870.5448866008396,
    "population":809618
  },
  {
    "state":"TX",
    "FIPS":48497,
    "county":"Wise County",
    "number":3680.410000000002,
    "rate":60.94705814165304,
    "population":60387
  },
  {
    "state":"ME",
    "FIPS":23015,
    "county":"Lincoln County",
    "number":472.18999999999994,
    "rate":13.808743968416433,
    "population":34195
  },
  {
    "state":"TX",
    "FIPS":48493,
    "county":"Wilson County",
    "number":976.5500000000001,
    "rate":21.978528988116672,
    "population":44432
  },
  {
    "state":"PA",
    "FIPS":42087,
    "county":"Mifflin County",
    "number":2385.56,
    "rate":50.94193768818467,
    "population":46829
  },
  {
    "state":"AR",
    "FIPS":5137,
    "county":"Stone County",
    "number":162.96,
    "rate":12.904656319290465,
    "population":12628
  },
  {
    "state":"ME",
    "FIPS":23013,
    "county":"Knox County",
    "number":37740.689999999995,
    "rate":952.8552312664108,
    "population":39608
  },
  {
    "state":"NJ",
    "FIPS":34017,
    "county":"Hudson County",
    "number":219226.87000000017,
    "rate":333.74011043129735,
    "population":656879
  },
  {
    "state":"VA",
    "FIPS":51690,
    "county":"Martinsville City",
    "number":3889.11,
    "rate":282.90608860114935,
    "population":13747
  },
  {
    "state":"TX",
    "FIPS":48489,
    "county":"Willacy County",
    "number":1226.85,
    "rate":55.49599674311304,
    "population":22107
  },
  {
    "state":"PA",
    "FIPS":42083,
    "county":"McKean County",
    "number":2148.0400000000004,
    "rate":49.684044964611196,
    "population":43234
  },
  {
    "state":"ME",
    "FIPS":23011,
    "county":"Kennebec County",
    "number":9240.36,
    "rate":75.99855246492196,
    "population":121586
  },
  {
    "state":"PA",
    "FIPS":42079,
    "county":"Luzerne County",
    "number":234152.8499999996,
    "rate":728.8214805961217,
    "population":321276
  },
  {
    "state":"TX",
    "FIPS":48485,
    "county":"Wichita County",
    "number":27095.27999999998,
    "rate":205.73172768826578,
    "population":131702
  },
  {
    "state":"ME",
    "FIPS":23009,
    "county":"Hancock County",
    "number":398.05,
    "rate":7.298848467067625,
    "population":54536
  },
  {
    "state":"NJ",
    "FIPS":34009,
    "county":"Cape May County",
    "number":20647.96999999997,
    "rate":214.19500404572676,
    "population":96398
  },
  {
    "state":"TX",
    "FIPS":48481,
    "county":"Wharton County",
    "number":1638.99,
    "rate":39.83255158334751,
    "population":41147
  },
  {
    "state":"PA",
    "FIPS":42075,
    "county":"Lebanon County",
    "number":6593.700000000001,
    "rate":48.63256184449264,
    "population":135582
  },
  {
    "state":"ME",
    "FIPS":23007,
    "county":"Franklin County",
    "number":38.019999999999996,
    "rate":1.2413883174976328,
    "population":30627
  },
  {
    "state":"TX",
    "FIPS":48473,
    "county":"Waller County",
    "number":370.0699999999999,
    "rate":8.34374224967871,
    "population":44353
  },
  {
    "state":"PA",
    "FIPS":42067,
    "county":"Juniata County",
    "number":1839.6899999999994,
    "rate":73.83865141481033,
    "population":24915
  },
  {
    "state":"ME",
    "FIPS":23003,
    "county":"Aroostook County",
    "number":4841.01,
    "rate":68.42997285988918,
    "population":70744
  },
  {
    "state":"NY",
    "FIPS":36069,
    "county":"Ontario County",
    "number":10312.610000000002,
    "rate":94.7641145335588,
    "population":108824
  },
  {
    "state":"AL",
    "FIPS":1009,
    "county":"Blount County",
    "number":2630.58,
    "rate":45.55274641546028,
    "population":57748
  },
  {
    "state":"MD",
    "FIPS":24037,
    "county":"St Mary's County",
    "number":5445.870000000001,
    "rate":49.96256846393087,
    "population":108999
  },
  {
    "state":"NY",
    "FIPS":36053,
    "county":"Madison County",
    "number":2547.1400000000003,
    "rate":35.171775752554545,
    "population":72420
  },
  {
    "state":"MD",
    "FIPS":24029,
    "county":"Kent County",
    "number":3356.4000000000005,
    "rate":167.828391419571,
    "population":19999
  },
  {
    "state":"NY",
    "FIPS":36045,
    "county":"Jefferson County",
    "number":37077.020000000004,
    "rate":306.63452314003115,
    "population":120916
  },
  {
    "state":"MD",
    "FIPS":24025,
    "county":"Harford County",
    "number":99646.01999999979,
    "rate":400.6739955608445,
    "population":248696
  },
  {
    "state":"NY",
    "FIPS":36037,
    "county":"Genesee County",
    "number":9444.089999999997,
    "rate":157.73273875137784,
    "population":59874
  },
  {
    "state":"MD",
    "FIPS":24021,
    "county":"Frederick County",
    "number":68095.19000000012,
    "rate":284.122995143282,
    "population":239668
  },
  {
    "state":"NY",
    "FIPS":36033,
    "county":"Franklin County",
    "number":4398.170000000001,
    "rate":84.88545345762648,
    "population":51813
  },
  {
    "state":"MD",
    "FIPS":24019,
    "county":"Dorchester County",
    "number":2777.13,
    "rate":85.48171632602808,
    "population":32488
  },
  {
    "state":"MD",
    "FIPS":24017,
    "county":"Charles County",
    "number":15664.600000000013,
    "rate":103.88285773023598,
    "population":150791
  },
  {
    "state":"MD",
    "FIPS":24009,
    "county":"Calvert County",
    "number":2323.77,
    "rate":25.91728845317362,
    "population":89661
  },
  {
    "state":"MD",
    "FIPS":24001,
    "county":"Allegany County",
    "number":5541.37,
    "rate":75.0019625624298,
    "population":73883
  },
  {
    "state":"MA",
    "FIPS":25023,
    "county":"Plymouth County",
    "number":25661.060000000005,
    "rate":51.41713887263664,
    "population":499076
  },
  {
    "state":"SD",
    "FIPS":46091,
    "county":"Marshall County",
    "number":12,
    "rate":2.577319587628866,
    "population":4656
  },
  {
    "state":"MA",
    "FIPS":25015,
    "county":"Hampshire County",
    "number":8406.670000000002,
    "rate":52.42667647847536,
    "population":160351
  },
  {
    "state":"SD",
    "FIPS":46083,
    "county":"Lincoln County",
    "number":2502.97,
    "rate":51.81917933004844,
    "population":48302
  },
  {
    "state":"MA",
    "FIPS":25011,
    "county":"Franklin County",
    "number":1479.5500000000002,
    "rate":20.680280666443032,
    "population":71544
  },
  {
    "state":"ND",
    "FIPS":38001,
    "county":"Adams County",
    "number":16.33,
    "rate":7.0938314509122495,
    "population":2302
  },
  {
    "state":"MA",
    "FIPS":25003,
    "county":"Berkshire County",
    "number":7272.860000000001,
    "rate":55.84627198034248,
    "population":130230
  },
  {
    "state":"LA",
    "FIPS":22127,
    "county":"Winn Parish",
    "number":159.38,
    "rate":10.590736926041597,
    "population":15049
  },
  {
    "state":"LA",
    "FIPS":22125,
    "county":"West Feliciana Parish",
    "number":542.09,
    "rate":35.089002524435244,
    "population":15449
  },
  {
    "state":"CO",
    "FIPS":8117,
    "county":"Summit County",
    "number":23.659999999999997,
    "rate":0.8381748618393083,
    "population":28228
  },
  {
    "state":"LA",
    "FIPS":22121,
    "county":"West Baton Rouge Parish",
    "number":572.71,
    "rate":23.7954960943992,
    "population":24068
  },
  {
    "state":"LA",
    "FIPS":22117,
    "county":"Washington Parish",
    "number":4096.87,
    "rate":87.79508829075947,
    "population":46664
  },
  {
    "state":"CO",
    "FIPS":8115,
    "county":"Sedgwick County",
    "number":202.64,
    "rate":85.25031552376946,
    "population":2377
  },
  {
    "state":"LA",
    "FIPS":22113,
    "county":"Vermilion Parish",
    "number":2575.7600000000007,
    "rate":43.909989771564966,
    "population":58660
  },
  {
    "state":"LA",
    "FIPS":22109,
    "county":"Terrebonne Parish",
    "number":24678.289999999997,
    "rate":220.8723630863413,
    "population":111731
  },
  {
    "state":"LA",
    "FIPS":22103,
    "county":"St Tammany Parish",
    "number":74150.06999999989,
    "rate":309.8028377328215,
    "population":239346
  },
  {
    "state":"WA",
    "FIPS":53067,
    "county":"Thurston County",
    "number":236908.74999999997,
    "rate":915.7203155620318,
    "population":258713
  },
  {
    "state":"LA",
    "FIPS":22097,
    "county":"St Landry Parish",
    "number":8513.940000000004,
    "rate":101.98411652671805,
    "population":83483
  },
  {
    "state":"WA",
    "FIPS":53063,
    "county":"Spokane County",
    "number":665472.3199999996,
    "rate":1398.9210097035123,
    "population":475704
  },
  {
    "state":"LA",
    "FIPS":22095,
    "county":"St John the Baptist Parish",
    "number":3344.1899999999996,
    "rate":74.72549326302146,
    "population":44753
  },
  {
    "state":"LA",
    "FIPS":22093,
    "county":"St James Parish",
    "number":830.54,
    "rate":38.2772605770117,
    "population":21698
  },
  {
    "state":"WA",
    "FIPS":53051,
    "county":"Pend Oreille County",
    "number":1536.43,
    "rate":118.20510847822743,
    "population":12998
  },
  {
    "state":"LA",
    "FIPS":22089,
    "county":"St Charles Parish",
    "number":1922.1900000000007,
    "rate":36.657131414840684,
    "population":52437
  },
  {
    "state":"WA",
    "FIPS":53043,
    "county":"Lincoln County",
    "number":2180.77,
    "rate":208.9460572961579,
    "population":10437
  },
  {
    "state":"LA",
    "FIPS":22085,
    "county":"Sabine Parish",
    "number":74.8,
    "rate":3.0774294412902163,
    "population":24306
  },
  {
    "state":"WA",
    "FIPS":53035,
    "county":"Kitsap County",
    "number":53865.56999999997,
    "rate":211.52038608492128,
    "population":254659
  },
  {
    "state":"CO",
    "FIPS":8107,
    "county":"Routt County",
    "number":189.86,
    "rate":8.181152238548714,
    "population":23207
  },
  {
    "state":"LA",
    "FIPS":22081,
    "county":"Red River Parish",
    "number":224.42999999999998,
    "rate":24.862080425390495,
    "population":9027
  },
  {
    "state":"WA",
    "FIPS":53027,
    "county":"Grays Harbor County",
    "number":4628.749999999999,
    "rate":64.55268112404991,
    "population":71705
  },
  {
    "state":"LA",
    "FIPS":22077,
    "county":"Pointe Coupee Parish",
    "number":2420.2299999999996,
    "rate":106.5664215578354,
    "population":22711
  },
  {
    "state":"WA",
    "FIPS":53003,
    "county":"Asotin County",
    "number":8516.36,
    "rate":389.3549124491382,
    "population":21873
  },
  {
    "state":"CO",
    "FIPS":8103,
    "county":"Rio Blanco County",
    "number":486.7900000000001,
    "rate":71.66053290151628,
    "population":6793
  },
  {
    "state":"LA",
    "FIPS":22065,
    "county":"Madison Parish",
    "number":159.68,
    "rate":13.09496473675578,
    "population":12194
  },
  {
    "state":"LA",
    "FIPS":22061,
    "county":"Lincoln Parish",
    "number":6092.29,
    "rate":129.221779154117,
    "population":47146
  },
  {
    "state":"CO",
    "FIPS":8101,
    "county":"Pueblo County",
    "number":17620.48,
    "rate":109.5528475503606,
    "population":160840
  },
  {
    "state":"LA",
    "FIPS":22057,
    "county":"Lafourche Parish",
    "number":7927.659999999999,
    "rate":81.62326898326897,
    "population":97125
  },
  {
    "state":"LA",
    "FIPS":22053,
    "county":"Jefferson Davis Parish",
    "number":2301.2499999999995,
    "rate":73.19730271319061,
    "population":31439
  },
  {
    "state":"CO",
    "FIPS":8099,
    "county":"Prowers County",
    "number":187.78,
    "rate":15.137444578798872,
    "population":12405
  },
  {
    "state":"LA",
    "FIPS":22049,
    "county":"Jackson Parish",
    "number":148.55,
    "rate":9.149421039664942,
    "population":16236
  },
  {
    "state":"LA",
    "FIPS":22045,
    "county":"Iberia Parish",
    "number":8940.52,
    "rate":120.95513826505764,
    "population":73916
  },
  {
    "state":"OK",
    "FIPS":40139,
    "county":"Texas County",
    "number":195.16000000000003,
    "rate":9.063298193470487,
    "population":21533
  },
  {
    "state":"LA",
    "FIPS":22039,
    "county":"Evangeline Parish",
    "number":2868.3000000000006,
    "rate":85.22149924235674,
    "population":33657
  },
  {
    "state":"OK",
    "FIPS":40135,
    "county":"Sequoyah County",
    "number":579.65,
    "rate":13.978922490715284,
    "population":41466
  },
  {
    "state":"LA",
    "FIPS":22037,
    "county":"East Feliciana Parish",
    "number":818.5,
    "rate":40.98647971957937,
    "population":19970
  },
  {
    "state":"OK",
    "FIPS":40123,
    "county":"Pontotoc County",
    "number":175782.41999999998,
    "rate":4625.122875335473,
    "population":38006
  },
  {
    "state":"LA",
    "FIPS":22031,
    "county":"De Soto Parish",
    "number":464.08000000000004,
    "rate":17.165896060662106,
    "population":27035
  },
  {
    "state":"OK",
    "FIPS":40119,
    "county":"Payne County",
    "number":6894.93,
    "rate":87.85700633290435,
    "population":78479
  },
  {
    "state":"LA",
    "FIPS":22029,
    "county":"Concordia Parish",
    "number":207.04000000000002,
    "rate":10.126186051061332,
    "population":20446
  },
  {
    "state":"OK",
    "FIPS":40111,
    "county":"Okmulgee County",
    "number":884.0800000000002,
    "rate":22.332583929067624,
    "population":39587
  },
  {
    "state":"LA",
    "FIPS":22025,
    "county":"Catahoula Parish",
    "number":14.4,
    "rate":1.404878048780488,
    "population":10250
  },
  {
    "state":"OK",
    "FIPS":40103,
    "county":"Noble County",
    "number":21.42,
    "rate":1.861799217731421,
    "population":11505
  },
  {
    "state":"LA",
    "FIPS":22021,
    "county":"Caldwell Parish",
    "number":163.16000000000003,
    "rate":16.316000000000003,
    "population":10000
  },
  {
    "state":"OK",
    "FIPS":40087,
    "county":"McClain County",
    "number":457.26000000000005,
    "rate":12.84907410009273,
    "population":35587
  },
  {
    "state":"LA",
    "FIPS":22013,
    "county":"Bienville Parish",
    "number":450.8899999999999,
    "rate":31.83576925792557,
    "population":14163
  },
  {
    "state":"OK",
    "FIPS":40079,
    "county":"Le Flore County",
    "number":825.3100000000002,
    "rate":16.52768599178933,
    "population":49935
  },
  {
    "state":"CO",
    "FIPS":8089,
    "county":"Otero County",
    "number":364.40999999999997,
    "rate":19.47466866182129,
    "population":18712
  },
  {
    "state":"LA",
    "FIPS":22009,
    "county":"Avoyelles Parish",
    "number":1855.9800000000002,
    "rate":44.61275900197107,
    "population":41602
  },
  {
    "state":"OK",
    "FIPS":40071,
    "county":"Kay County",
    "number":1571.8600000000001,
    "rate":34.42757956063693,
    "population":45657
  },
  {
    "state":"LA",
    "FIPS":22005,
    "county":"Ascension Parish",
    "number":13432.850000000002,
    "rate":119.75118789726585,
    "population":112173
  },
  {
    "state":"KY",
    "FIPS":21191,
    "county":"Pendleton County",
    "number":703.09,
    "rate":48.33230219289201,
    "population":14547
  },
  {
    "state":"KY",
    "FIPS":21187,
    "county":"Owen County",
    "number":1146.1599999999999,
    "rate":106.51054734690084,
    "population":10761
  },
  {
    "state":"KY",
    "FIPS":21183,
    "county":"Ohio County",
    "number":1322.5200000000002,
    "rate":55.079755112240235,
    "population":24011
  },
  {
    "state":"PR",
    "FIPS":72141,
    "county":"Utuado Municipio",
    "number":1482.17,
    "rate":null,
    "population":null
  },
  {
    "state":"KY",
    "FIPS":21175,
    "county":"Morgan County",
    "number":115.38,
    "rate":8.559347181008901,
    "population":13480
  },
  {
    "state":"PR",
    "FIPS":72125,
    "county":"San Germ�n Municipio",
    "number":9277.960000000001,
    "rate":null,
    "population":null
  },
  {
    "state":"KY",
    "FIPS":21171,
    "county":"Monroe County",
    "number":1125.9500000000003,
    "rate":103.68818491573812,
    "population":10859
  },
  {
    "state":"VA",
    "FIPS":51199,
    "county":"York County",
    "number":5125.199999999999,
    "rate":77.9545523682049,
    "population":65746
  },
  {
    "state":"KY",
    "FIPS":21163,
    "county":"Meade County",
    "number":1851.6399999999999,
    "rate":63.24771143598852,
    "population":29276
  },
  {
    "state":"VA",
    "FIPS":51167,
    "county":"Russell County",
    "number":566.91,
    "rate":19.94336171110955,
    "population":28426
  },
  {
    "state":"PR",
    "FIPS":72029,
    "county":"Canovanas",
    "number":4049.47,
    "rate":null,
    "population":null
  },
  {
    "state":"KY",
    "FIPS":21147,
    "county":"McCreary County",
    "number":1323.3600000000001,
    "rate":73.37732187413364,
    "population":18035
  },
  {
    "state":"VA",
    "FIPS":51191,
    "county":"Washington County",
    "number":125312.76999999993,
    "rate":2275.393931690664,
    "population":55073
  },
  {
    "state":"PR",
    "FIPS":72077,
    "county":"Juncos Municipio",
    "number":3331.0299999999993,
    "rate":null,
    "population":null
  },
  {
    "state":"KY",
    "FIPS":21159,
    "county":"Martin County",
    "number":433.58,
    "rate":33.971636762516646,
    "population":12763
  },
  {
    "state":"VA",
    "FIPS":51175,
    "county":"Southampton County",
    "number":507.84000000000003,
    "rate":27.57452353803551,
    "population":18417
  },
  {
    "state":"PR",
    "FIPS":72045,
    "county":"Comer�o Municipio",
    "number":140.66,
    "rate":null,
    "population":null
  },
  {
    "state":"KY",
    "FIPS":21151,
    "county":"Madison County",
    "number":5272.390000000001,
    "rate":61.87815412060185,
    "population":85206
  },
  {
    "state":"VA",
    "FIPS":51159,
    "county":"Richmond County",
    "number":199.40000000000003,
    "rate":22.028281042863462,
    "population":9052
  },
  {
    "state":"PR",
    "FIPS":72013,
    "county":"Arecibo",
    "number":18556.289999999997,
    "rate":null,
    "population":null
  },
  {
    "state":"KY",
    "FIPS":21143,
    "county":"Lyon County",
    "number":378.25,
    "rate":44.83228635771009,
    "population":8437
  },
  {
    "state":"VA",
    "FIPS":51135,
    "county":"Nottoway County",
    "number":1465.21,
    "rate":92.8758874239351,
    "population":15776
  },
  {
    "state":"KY",
    "FIPS":21131,
    "county":"Leslie County",
    "number":228.76000000000002,
    "rate":20.527638190954775,
    "population":11144
  },
  {
    "state":"VA",
    "FIPS":51127,
    "county":"New Kent County",
    "number":958.76,
    "rate":50.11289985364834,
    "population":19132
  },
  {
    "state":"KY",
    "FIPS":21127,
    "county":"Lawrence County",
    "number":893.8299999999999,
    "rate":56.475011057054395,
    "population":15827
  },
  {
    "state":"VA",
    "FIPS":51119,
    "county":"Middlesex County",
    "number":270.08000000000004,
    "rate":24.945044795418863,
    "population":10827
  },
  {
    "state":"KY",
    "FIPS":21123,
    "county":"Larue County",
    "number":324.94999999999993,
    "rate":23.07064252751153,
    "population":14085
  },
  {
    "state":"VA",
    "FIPS":51111,
    "county":"Lunenburg County",
    "number":83.15,
    "rate":6.599730137312485,
    "population":12599
  },
  {
    "state":"KY",
    "FIPS":21119,
    "county":"Knott County",
    "number":1614.04,
    "rate":100.33194504879717,
    "population":16087
  },
  {
    "state":"VA",
    "FIPS":51103,
    "county":"Lancaster County",
    "number":108.56,
    "rate":9.666963490650044,
    "population":11230
  },
  {
    "state":"KY",
    "FIPS":21115,
    "county":"Johnson County",
    "number":3482.1699999999996,
    "rate":148.71535340593636,
    "population":23415
  },
  {
    "state":"VA",
    "FIPS":51071,
    "county":"Giles County",
    "number":339.5,
    "rate":20.00825082508251,
    "population":16968
  },
  {
    "state":"KY",
    "FIPS":21099,
    "county":"Hart County",
    "number":17545.050000000003,
    "rate":951.8282428253677,
    "population":18433
  },
  {
    "state":"VA",
    "FIPS":51063,
    "county":"Floyd County",
    "number":734.8799999999999,
    "rate":47.63905095293659,
    "population":15426
  },
  {
    "state":"KY",
    "FIPS":21095,
    "county":"Harlan County",
    "number":188.8,
    "rate":6.597707576181158,
    "population":28616
  },
  {
    "state":"KY",
    "FIPS":21091,
    "county":"Hancock County",
    "number":183.04999999999995,
    "rate":21.110598546880404,
    "population":8671
  },
  {
    "state":"GA",
    "FIPS":13147,
    "county":"Hart County",
    "number":2000.03,
    "rate":78.28212454499197,
    "population":25549
  },
  {
    "state":"VA",
    "FIPS":51051,
    "county":"Dickenson County",
    "number":436.11,
    "rate":27.834439622159817,
    "population":15668
  },
  {
    "state":"KY",
    "FIPS":21089,
    "county":"Greenup County",
    "number":4306.469999999999,
    "rate":117.28498284220271,
    "population":36718
  },
  {
    "state":"VA",
    "FIPS":51047,
    "county":"Culpeper County",
    "number":1967.7099999999998,
    "rate":41.19392048904054,
    "population":47767
  },
  {
    "state":"KY",
    "FIPS":21087,
    "county":"Green County",
    "number":77.06,
    "rate":6.819469026548672,
    "population":11300
  },
  {
    "state":"GA",
    "FIPS":13145,
    "county":"Harris County",
    "number":185.79,
    "rate":5.696808021341183,
    "population":32613
  },
  {
    "state":"VA",
    "FIPS":51043,
    "county":"Clarke County",
    "number":425.7300000000001,
    "rate":29.738055322715844,
    "population":14316
  },
  {
    "state":"KY",
    "FIPS":21085,
    "county":"Grayson County",
    "number":1385.0999999999997,
    "rate":53.551130871834516,
    "population":25865
  },
  {
    "state":"GA",
    "FIPS":13143,
    "county":"Haralson County",
    "number":1274.02,
    "rate":44.878822037480624,
    "population":28388
  },
  {
    "state":"VA",
    "FIPS":51035,
    "county":"Carroll County",
    "number":1282.0900000000001,
    "rate":42.91801961637599,
    "population":29873
  },
  {
    "state":"KY",
    "FIPS":21081,
    "county":"Grant County",
    "number":6044.269999999998,
    "rate":246.7955575517536,
    "population":24491
  },
  {
    "state":"VA",
    "FIPS":51031,
    "county":"Campbell County",
    "number":601.29,
    "rate":10.987282096261374,
    "population":54726
  },
  {
    "state":"KY",
    "FIPS":21079,
    "county":"Garrard County",
    "number":106.65,
    "rate":6.302446519323957,
    "population":16922
  },
  {
    "state":"AL",
    "FIPS":1111,
    "county":"Randolph County",
    "number":1200.01,
    "rate":52.96420532285828,
    "population":22657
  },
  {
    "state":"GA",
    "FIPS":13139,
    "county":"Hall County",
    "number":97609.91000000003,
    "rate":527.38167534741,
    "population":185084
  },
  {
    "state":"VA",
    "FIPS":51019,
    "county":"Bedford City",
    "number":6860.269999999997,
    "rate":90.94762100462671,
    "population":75431
  },
  {
    "state":"KY",
    "FIPS":21073,
    "county":"Franklin County",
    "number":8077.31,
    "rate":163.5778367322141,
    "population":49379
  },
  {
    "state":"VA",
    "FIPS":51015,
    "county":"Augusta County",
    "number":3134.1300000000006,
    "rate":42.581552382375726,
    "population":73603
  },
  {
    "state":"KY",
    "FIPS":21071,
    "county":"Floyd County",
    "number":18021.169999999976,
    "rate":460.4166986024879,
    "population":39141
  },
  {
    "state":"VA",
    "FIPS":51003,
    "county":"Albemarle County",
    "number":50879.97000000001,
    "rate":498.676565715966,
    "population":102030
  },
  {
    "state":"KY",
    "FIPS":21065,
    "county":"Estill County",
    "number":1328.2200000000003,
    "rate":91.68990749689357,
    "population":14486
  },
  {
    "state":"KY",
    "FIPS":21061,
    "county":"Edmonson County",
    "number":364.82000000000005,
    "rate":30.075845012366038,
    "population":12130
  },
  {
    "state":"NM",
    "FIPS":35035,
    "county":"Otero County",
    "number":2629.2699999999995,
    "rate":39.775952316117504,
    "population":66102
  },
  {
    "state":"GA",
    "FIPS":13131,
    "county":"Grady County",
    "number":441.88,
    "rate":17.42016872979579,
    "population":25366
  },
  {
    "state":"KY",
    "FIPS":21057,
    "county":"Cumberland County",
    "number":951.8399999999999,
    "rate":138.77241580405305,
    "population":6859
  },
  {
    "state":"KY",
    "FIPS":21055,
    "county":"Crittenden County",
    "number":77.76999999999998,
    "rate":8.41029523088569,
    "population":9247
  },
  {
    "state":"KY",
    "FIPS":21053,
    "county":"Clinton County",
    "number":268.55,
    "rate":26.243525847747485,
    "population":10233
  },
  {
    "state":"GA",
    "FIPS":13127,
    "county":"Glynn County",
    "number":3718.1600000000003,
    "rate":45.92588932806325,
    "population":80960
  },
  {
    "state":"KY",
    "FIPS":21049,
    "county":"Clark County",
    "number":2530.7300000000005,
    "rate":70.8114384845687,
    "population":35739
  },
  {
    "state":"KY",
    "FIPS":21047,
    "county":"Christian County",
    "number":3338.6300000000006,
    "rate":44.06268971888611,
    "population":75770
  },
  {
    "state":"AL",
    "FIPS":1109,
    "county":"Pike County",
    "number":5527.6399999999985,
    "rate":166.8570393624728,
    "population":33128
  },
  {
    "state":"GA",
    "FIPS":13123,
    "county":"Gilmer County",
    "number":551.81,
    "rate":19.564261655734796,
    "population":28205
  },
  {
    "state":"KY",
    "FIPS":21041,
    "county":"Carroll County",
    "number":1242.8600000000001,
    "rate":114.29648703329042,
    "population":10874
  },
  {
    "state":"TX",
    "FIPS":48135,
    "county":"Ector County",
    "number":57583.009999999995,
    "rate":398.6528343164133,
    "population":144444
  },
  {
    "state":"MI",
    "FIPS":26037,
    "county":"Clinton County",
    "number":3981.9000000000005,
    "rate":52.10137911182059,
    "population":76426
  },
  {
    "state":"AL",
    "FIPS":1119,
    "county":"Sumter County",
    "number":697.0400000000001,
    "rate":51.97524420252033,
    "population":13411
  },
  {
    "state":"KY",
    "FIPS":21039,
    "county":"Carlisle County",
    "number":892.9499999999998,
    "rate":177.10234034113444,
    "population":5042
  },
  {
    "state":"KY",
    "FIPS":21037,
    "county":"Campbell County",
    "number":5572.960000000001,
    "rate":61.123772964080075,
    "population":91175
  },
  {
    "state":"GA",
    "FIPS":13119,
    "county":"Franklin County",
    "number":1374.51,
    "rate":62.69716735848196,
    "population":21923
  },
  {
    "state":"KY",
    "FIPS":21033,
    "county":"Caldwell County",
    "number":171.79000000000002,
    "rate":13.29541057193716,
    "population":12921
  },
  {
    "state":"KY",
    "FIPS":21031,
    "county":"Butler County",
    "number":1038.2399999999998,
    "rate":81.07449632984537,
    "population":12806
  },
  {
    "state":"GA",
    "FIPS":13115,
    "county":"Floyd County",
    "number":15405.429999999984,
    "rate":160.362979618179,
    "population":96066
  },
  {
    "state":"KY",
    "FIPS":21025,
    "county":"Breathitt County",
    "number":3215.2499999999995,
    "rate":235.6357640161231,
    "population":13645
  },
  {
    "state":"KY",
    "FIPS":21023,
    "county":"Bracken County",
    "number":1021.4099999999999,
    "rate":120.67698487712663,
    "population":8464
  },
  {
    "state":"GA",
    "FIPS":13113,
    "county":"Fayette County",
    "number":367242.31000000006,
    "rate":3418.3698525578975,
    "population":107432
  },
  {
    "state":"KY",
    "FIPS":21021,
    "county":"Boyle County",
    "number":7209.100000000003,
    "rate":248.17887634260546,
    "population":29048
  },
  {
    "state":"ND",
    "FIPS":38095,
    "county":"Towner County",
    "number":39.38,
    "rate":16.95221696082652,
    "population":2323
  },
  {
    "state":"KY",
    "FIPS":21017,
    "county":"Bourbon County",
    "number":2111.479999999999,
    "rate":105.59511902380473,
    "population":19996
  },
  {
    "state":"KY",
    "FIPS":21015,
    "county":"Boone County",
    "number":15589.699999999997,
    "rate":126.4802284638725,
    "population":123258
  },
  {
    "state":"GA",
    "FIPS":13109,
    "county":"Evans County",
    "number":576.3699999999999,
    "rate":54.06848030018761,
    "population":10660
  },
  {
    "state":"KY",
    "FIPS":21013,
    "county":"Bell County",
    "number":3318.8699999999994,
    "rate":117.89109121909631,
    "population":28152
  },
  {
    "state":"KY",
    "FIPS":21011,
    "county":"Bath County",
    "number":602.7699999999999,
    "rate":51.086532757013295,
    "population":11799
  },
  {
    "state":"AL",
    "FIPS":1107,
    "county":"Pickens County",
    "number":1537.5399999999997,
    "rate":79.48407775020677,
    "population":19344
  },
  {
    "state":"GA",
    "FIPS":13107,
    "county":"Emanuel County",
    "number":774.8199999999998,
    "rate":33.91045559980742,
    "population":22849
  },
  {
    "state":"ND",
    "FIPS":38079,
    "county":"Rolette County",
    "number":15.01,
    "rate":1.045993031358885,
    "population":14350
  },
  {
    "state":"KY",
    "FIPS":21009,
    "county":"Barren County",
    "number":12361.56000000004,
    "rate":289.7082190817699,
    "population":42669
  },
  {
    "state":"GA",
    "FIPS":13105,
    "county":"Elbert County",
    "number":3482.3799999999997,
    "rate":177.7359260960547,
    "population":19593
  },
  {
    "state":"ND",
    "FIPS":38071,
    "county":"Ramsey County",
    "number":174.32999999999998,
    "rate":15.08697533535266,
    "population":11555
  },
  {
    "state":"KY",
    "FIPS":21005,
    "county":"Anderson County",
    "number":1210.4499999999996,
    "rate":55.87637907953652,
    "population":21663
  },
  {
    "state":"GA",
    "FIPS":13103,
    "county":"Effingham County",
    "number":2010.0100000000004,
    "rate":37.68509664960535,
    "population":53337
  },
  {
    "state":"ND",
    "FIPS":38063,
    "county":"Nelson County",
    "number":13024.19,
    "rate":4227.260629665693,
    "population":3081
  },
  {
    "state":"KY",
    "FIPS":21001,
    "county":"Adair County",
    "number":285.48,
    "rate":15.04823151125402,
    "population":18971
  },
  {
    "state":"IL",
    "FIPS":17003,
    "county":"Alexander County",
    "number":988.0400000000002,
    "rate":127.48903225806454,
    "population":7750
  },
  {
    "state":"KS",
    "FIPS":20197,
    "county":"Wabaunsee County",
    "number":60.540000000000006,
    "rate":8.626389284696495,
    "population":7018
  },
  {
    "state":"KS",
    "FIPS":20181,
    "county":"Sherman County",
    "number":122.95000000000002,
    "rate":20.073469387755104,
    "population":6125
  },
  {
    "state":"KS",
    "FIPS":20169,
    "county":"Saline County",
    "number":3545.05,
    "rate":63.42905707640008,
    "population":55890
  },
  {
    "state":"CA",
    "FIPS":6023,
    "county":"Humboldt County",
    "number":2795.940000000001,
    "rate":20.759875259875265,
    "population":134680
  },
  {
    "state":"KS",
    "FIPS":20151,
    "county":"Pratt County",
    "number":507.08000000000004,
    "rate":51.81158679881475,
    "population":9787
  },
  {
    "state":"KS",
    "FIPS":20149,
    "county":"Pottawatomie County",
    "number":1300.7499999999998,
    "rate":58.19650127511073,
    "population":22351
  },
  {
    "state":"KS",
    "FIPS":20141,
    "county":"Osborne County",
    "number":97.59,
    "rate":25.58060288335518,
    "population":3815
  },
  {
    "state":"SD",
    "FIPS":46053,
    "county":"Gregory County",
    "number":262.22,
    "rate":61.72787193973635,
    "population":4248
  },
  {
    "state":"CO",
    "FIPS":8035,
    "county":"Douglas County",
    "number":41009.85999999996,
    "rate":137.35149509672564,
    "population":298576
  },
  {
    "state":"KS",
    "FIPS":20133,
    "county":"Neosho County",
    "number":186.38,
    "rate":11.328713834184292,
    "population":16452
  },
  {
    "state":"KS",
    "FIPS":20131,
    "county":"Nemaha County",
    "number":88.92,
    "rate":8.800475059382423,
    "population":10104
  },
  {
    "state":"KS",
    "FIPS":20125,
    "county":"Montgomery County",
    "number":568.14,
    "rate":16.499869311416372,
    "population":34433
  },
  {
    "state":"KS",
    "FIPS":20117,
    "county":"Marshall County",
    "number":58.25,
    "rate":5.786807073316114,
    "population":10066
  },
  {
    "state":"CA",
    "FIPS":6013,
    "county":"Contra Costa County",
    "number":1390594.6299999994,
    "rate":1288.3534749360263,
    "population":1079358
  },
  {
    "state":"KS",
    "FIPS":20111,
    "county":"Lyon County",
    "number":645.7900000000001,
    "rate":19.260640042947895,
    "population":33529
  },
  {
    "state":"SD",
    "FIPS":46005,
    "county":"Beadle County",
    "number":565,
    "rate":31.38888888888889,
    "population":18000
  },
  {
    "state":"CO",
    "FIPS":8029,
    "county":"Delta County",
    "number":722.4200000000001,
    "rate":23.72557391047325,
    "population":30449
  },
  {
    "state":"AK",
    "FIPS":2070,
    "county":"Dillingham Census Area",
    "number":53.57999999999999,
    "rate":10.78502415458937,
    "population":4968
  },
  {
    "state":"KS",
    "FIPS":20109,
    "county":"Logan County",
    "number":337.79,
    "rate":120.85509838998212,
    "population":2795
  },
  {
    "state":"KS",
    "FIPS":20099,
    "county":"Labette County",
    "number":1742.65,
    "rate":82.12686743013337,
    "population":21219
  },
  {
    "state":"CA",
    "FIPS":6009,
    "county":"Calaveras County",
    "number":2628.5799999999995,
    "rate":58.70773216598918,
    "population":44774
  },
  {
    "state":"KS",
    "FIPS":20095,
    "county":"Kingman County",
    "number":169.45,
    "rate":21.64665304036791,
    "population":7828
  },
  {
    "state":"MS",
    "FIPS":28159,
    "county":"Winston County",
    "number":2135.0799999999995,
    "rate":112.46141690808531,
    "population":18985
  },
  {
    "state":"CO",
    "FIPS":8025,
    "county":"Crowley County",
    "number":112.38,
    "rate":20.764966740576497,
    "population":5412
  },
  {
    "state":"KS",
    "FIPS":20093,
    "county":"Kearny County",
    "number":37.86,
    "rate":9.522132796780683,
    "population":3976
  },
  {
    "state":"UT",
    "FIPS":49043,
    "county":"Summit County",
    "number":318.71,
    "rate":8.410788272240255,
    "population":37893
  },
  {
    "state":"KS",
    "FIPS":20085,
    "county":"Jackson County",
    "number":382.6,
    "rate":28.45032718619869,
    "population":13448
  },
  {
    "state":"UT",
    "FIPS":49039,
    "county":"Sanpete County",
    "number":328.64,
    "rate":11.724999108066644,
    "population":28029
  },
  {
    "state":"KS",
    "FIPS":20083,
    "county":"Hodgeman County",
    "number":11.25,
    "rate":5.76036866359447,
    "population":1953
  },
  {
    "state":"AL",
    "FIPS":1059,
    "county":"Franklin County",
    "number":1568.0399999999995,
    "rate":49.52747946936196,
    "population":31660
  },
  {
    "state":"CA",
    "FIPS":6005,
    "county":"Amador County",
    "number":1875.8499999999997,
    "rate":50.60018342684505,
    "population":37072
  },
  {
    "state":"KS",
    "FIPS":20079,
    "county":"Harvey County",
    "number":43671.99999999999,
    "rate":1253.8256151129738,
    "population":34831
  },
  {
    "state":"MS",
    "FIPS":28143,
    "county":"Tunica County",
    "number":34.79,
    "rate":3.326639892904953,
    "population":10458
  },
  {
    "state":"CO",
    "FIPS":8021,
    "county":"Conejos County",
    "number":22.4,
    "rate":2.7076030460534266,
    "population":8273
  },
  {
    "state":"UT",
    "FIPS":49027,
    "county":"Millard County",
    "number":58.370000000000005,
    "rate":4.653591644742088,
    "population":12543
  },
  {
    "state":"KS",
    "FIPS":20077,
    "county":"Harper County",
    "number":370.77,
    "rate":63.12053115423902,
    "population":5874
  },
  {
    "state":"UT",
    "FIPS":49011,
    "county":"Davis County",
    "number":54924.22000000004,
    "rate":173.80092273224957,
    "population":316018
  },
  {
    "state":"KS",
    "FIPS":20069,
    "county":"Gray County",
    "number":11.38,
    "rate":1.8985652318985655,
    "population":5994
  },
  {
    "state":"KS",
    "FIPS":20061,
    "county":"Geary County",
    "number":1204.41,
    "rate":31.692497960687316,
    "population":38003
  },
  {
    "state":"KS",
    "FIPS":20059,
    "county":"Franklin County",
    "number":3313.28,
    "rate":128.0346240049463,
    "population":25878
  },
  {
    "state":"MS",
    "FIPS":28119,
    "county":"Quitman County",
    "number":66.91,
    "rate":8.576006152268649,
    "population":7802
  },
  {
    "state":"CO",
    "FIPS":8015,
    "county":"Chaffee County",
    "number":39,
    "rate":2.154339059824338,
    "population":18103
  },
  {
    "state":"KS",
    "FIPS":20053,
    "county":"Ellsworth County",
    "number":684.89,
    "rate":105.93812838360402,
    "population":6465
  },
  {
    "state":"KS",
    "FIPS":20045,
    "county":"Douglas County",
    "number":6507.070000000002,
    "rate":57.41245290676645,
    "population":113339
  },
  {
    "state":"MS",
    "FIPS":28103,
    "county":"Noxubee County",
    "number":204.46999999999997,
    "rate":18.297091722595074,
    "population":11175
  },
  {
    "state":"CO",
    "FIPS":8011,
    "county":"Bent County",
    "number":50,
    "rate":8.610297916307903,
    "population":5807
  },
  {
    "state":"KS",
    "FIPS":20037,
    "county":"Crawford County",
    "number":4114.65,
    "rate":104.53621605142146,
    "population":39361
  },
  {
    "state":"MS",
    "FIPS":28095,
    "county":"Monroe County",
    "number":2816.6400000000003,
    "rate":77.42701632855024,
    "population":36378
  },
  {
    "state":"CO",
    "FIPS":8009,
    "county":"Baca County",
    "number":87.77000000000001,
    "rate":23.367944621938236,
    "population":3756
  },
  {
    "state":"NY",
    "FIPS":36119,
    "county":"Westchester County",
    "number":250095.65999999893,
    "rate":260.01551179031105,
    "population":961849
  },
  {
    "state":"KS",
    "FIPS":20029,
    "county":"Cloud County",
    "number":152.59,
    "rate":16.246805792163546,
    "population":9392
  },
  {
    "state":"NH",
    "FIPS":33017,
    "county":"Strafford County",
    "number":100526.12999999999,
    "rate":807.1600170222332,
    "population":124543
  },
  {
    "state":"MS",
    "FIPS":28087,
    "county":"Lowndes County",
    "number":3586.6200000000017,
    "rate":60.13681863147838,
    "population":59641
  },
  {
    "state":"CO",
    "FIPS":8007,
    "county":"Archuleta County",
    "number":368.95000000000005,
    "rate":30.41883090114602,
    "population":12129
  },
  {
    "state":"NY",
    "FIPS":36103,
    "county":"Suffolk County",
    "number":1046060.550000002,
    "rate":697.1775607129208,
    "population":1500422
  },
  {
    "state":"KS",
    "FIPS":20021,
    "county":"Cherokee County",
    "number":152.07,
    "rate":7.165001884658876,
    "population":21224
  },
  {
    "state":"MS",
    "FIPS":28071,
    "county":"Lafayette County",
    "number":126420.86,
    "rate":2507.554347826087,
    "population":50416
  },
  {
    "state":"CO",
    "FIPS":8003,
    "county":"Alamosa County",
    "number":508.83000000000004,
    "rate":31.578849376280026,
    "population":16113
  },
  {
    "state":"NY",
    "FIPS":36071,
    "county":"Orange County",
    "number":135266.26999999967,
    "rate":361.7364201360652,
    "population":373936
  },
  {
    "state":"KS",
    "FIPS":20005,
    "county":"Atchison County",
    "number":985.9000000000003,
    "rate":58.684523809523824,
    "population":16800
  },
  {
    "state":"FL",
    "FIPS":12055,
    "county":"Highlands County",
    "number":10283.35,
    "rate":104.8390714365818,
    "population":98087
  },
  {
    "state":"NC",
    "FIPS":37137,
    "county":"Pamlico County",
    "number":362.21,
    "rate":27.76619394403986,
    "population":13045
  },
  {
    "state":"PA",
    "FIPS":42081,
    "county":"Lycoming County",
    "number":24610.97000000002,
    "rate":209.81934592825004,
    "population":117296
  },
  {
    "state":"TX",
    "FIPS":48487,
    "county":"Wilbarger County",
    "number":145.38,
    "rate":10.962147489066504,
    "population":13262
  },
  {
    "state":"GA",
    "FIPS":13291,
    "county":"Union County",
    "number":1591.25,
    "rate":74.07709138308272,
    "population":21481
  },
  {
    "state":"IN",
    "FIPS":18183,
    "county":"Whitley County",
    "number":4349.859999999999,
    "rate":130.7442140066125,
    "population":33270
  },
  {
    "state":"VA",
    "FIPS":51680,
    "county":"Lynchburg City",
    "number":23746.999999999993,
    "rate":305.2784491181158,
    "population":77788
  },
  {
    "state":"TX",
    "FIPS":48479,
    "county":"Webb County",
    "number":19315.049999999956,
    "rate":74.29265421984243,
    "population":259986
  },
  {
    "state":"PA",
    "FIPS":42073,
    "county":"Lawrence County",
    "number":15014.779999999997,
    "rate":167.20803590320386,
    "population":89797
  },
  {
    "state":"GA",
    "FIPS":13289,
    "county":"Twiggs County",
    "number":342.70000000000005,
    "rate":40.312904364192455,
    "population":8501
  },
  {
    "state":"IN",
    "FIPS":18179,
    "county":"Wells County",
    "number":3198.16,
    "rate":115.54881133029842,
    "population":27678
  },
  {
    "state":"FL",
    "FIPS":12051,
    "county":"Hendry County",
    "number":2990.7500000000005,
    "rate":79.35970917582127,
    "population":37686
  },
  {
    "state":"NC",
    "FIPS":37121,
    "county":"Mitchell County",
    "number":157.04,
    "rate":10.219301099759223,
    "population":15367
  },
  {
    "state":"TX",
    "FIPS":48471,
    "county":"Walker County",
    "number":5353.340000000001,
    "rate":77.97337450477745,
    "population":68656
  },
  {
    "state":"PA",
    "FIPS":42065,
    "county":"Jefferson County",
    "number":13905.029999999999,
    "rate":309.88210911035833,
    "population":44872
  },
  {
    "state":"GA",
    "FIPS":13287,
    "county":"Turner County",
    "number":632.1200000000001,
    "rate":75.53112677739277,
    "population":8369
  },
  {
    "state":"IN",
    "FIPS":18175,
    "county":"Washington County",
    "number":985.2599999999998,
    "rate":35.28236347358996,
    "population":27925
  },
  {
    "state":"FL",
    "FIPS":12049,
    "county":"Hardee County",
    "number":586.9300000000001,
    "rate":21.40986357335668,
    "population":27414
  },
  {
    "state":"NC",
    "FIPS":37113,
    "county":"Macon County",
    "number":3252.68,
    "rate":96.24452597940585,
    "population":33796
  },
  {
    "state":"VA",
    "FIPS":51790,
    "county":"Staunton City",
    "number":746.2899999999998,
    "rate":31.198110446887668,
    "population":23921
  },
  {
    "state":"AR",
    "FIPS":5149,
    "county":"Yell County",
    "number":143.24,
    "rate":6.567328412269039,
    "population":21811
  },
  {
    "state":"TX",
    "FIPS":48463,
    "county":"Uvalde County",
    "number":1038.3900000000003,
    "rate":38.80381165919284,
    "population":26760
  },
  {
    "state":"PA",
    "FIPS":42057,
    "county":"Fulton County",
    "number":1697.4900000000005,
    "rate":114.97493904091036,
    "population":14764
  },
  {
    "state":"GA",
    "FIPS":13285,
    "county":"Troup County",
    "number":3585.6,
    "rate":52.36593059936909,
    "population":68472
  },
  {
    "state":"IN",
    "FIPS":18171,
    "county":"Warren County",
    "number":604.18,
    "rate":72.04626758883855,
    "population":8386
  },
  {
    "state":"FL",
    "FIPS":12047,
    "county":"Hamilton County",
    "number":72.16,
    "rate":4.909177495067691,
    "population":14699
  },
  {
    "state":"NC",
    "FIPS":37105,
    "county":"Lee County",
    "number":4382.8,
    "rate":73.82428244171945,
    "population":59368
  },
  {
    "state":"IN",
    "FIPS":18167,
    "county":"Vigo County",
    "number":356787.49999999953,
    "rate":3285.66889832303,
    "population":108589
  },
  {
    "state":"IN",
    "FIPS":18151,
    "county":"Steuben County",
    "number":1321.42,
    "rate":38.68891816717904,
    "population":34155
  },
  {
    "state":"FL",
    "FIPS":12035,
    "county":"Flagler County",
    "number":4120.990000000001,
    "rate":41.83321490204041,
    "population":98510
  },
  {
    "state":"MT",
    "FIPS":30107,
    "county":"Wheatland County",
    "number":13.28,
    "rate":6.326822296331586,
    "population":2099
  },
  {
    "state":"NC",
    "FIPS":37057,
    "county":"Davidson County",
    "number":43617.270000000004,
    "rate":266.70378251458345,
    "population":163542
  },
  {
    "state":"TX",
    "FIPS":48407,
    "county":"San Jacinto County",
    "number":50.58,
    "rate":1.8733333333333333,
    "population":27000
  },
  {
    "state":"PA",
    "FIPS":42001,
    "county":"Adams County",
    "number":29188.130000000005,
    "rate":287.4601626977093,
    "population":101538
  },
  {
    "state":"GA",
    "FIPS":13271,
    "county":"Telfair County",
    "number":93.37,
    "rate":5.683243045833588,
    "population":16429
  },
  {
    "state":"IN",
    "FIPS":18143,
    "county":"Scott County",
    "number":2207.3600000000015,
    "rate":92.8086108308107,
    "population":23784
  },
  {
    "state":"FL",
    "FIPS":12033,
    "county":"Escambia County",
    "number":212166.0799999998,
    "rate":697.4237872024293,
    "population":304214
  },
  {
    "state":"NC",
    "FIPS":37049,
    "county":"Craven County",
    "number":13599.269999999986,
    "rate":129.13682591231506,
    "population":105309
  },
  {
    "state":"VA",
    "FIPS":51600,
    "county":"Fairfax City",
    "number":161.98,
    "rate":6.9042240313712115,
    "population":23461
  },
  {
    "state":"TX",
    "FIPS":48399,
    "county":"Runnels County",
    "number":385.85999999999996,
    "rate":37.023603914795615,
    "population":10422
  },
  {
    "state":"GA",
    "FIPS":13269,
    "county":"Taylor County",
    "number":96,
    "rate":11.454480372270611,
    "population":8381
  },
  {
    "state":"IN",
    "FIPS":18139,
    "county":"Rush County",
    "number":574.25,
    "rate":33.51523287031633,
    "population":17134
  },
  {
    "state":"FL",
    "FIPS":12029,
    "county":"Dixie County",
    "number":146.10999999999996,
    "rate":9.096059266637612,
    "population":16063
  },
  {
    "state":"NC",
    "FIPS":37033,
    "county":"Caswell County",
    "number":167.84,
    "rate":7.239787775525169,
    "population":23183
  },
  {
    "state":"MI",
    "FIPS":26161,
    "county":"Washtenaw County",
    "number":275281.45999999996,
    "rate":783.6056828759382,
    "population":351301
  },
  {
    "state":"GA",
    "FIPS":13265,
    "county":"Taliaferro County",
    "number":12.21,
    "rate":7.263533610945866,
    "population":1681
  },
  {
    "state":"IN",
    "FIPS":18131,
    "county":"Pulaski County",
    "number":453.25,
    "rate":34.72381827932276,
    "population":13053
  },
  {
    "state":"IN",
    "FIPS":18129,
    "county":"Posey County",
    "number":1234.0999999999997,
    "rate":48.176920674578376,
    "population":25616
  },
  {
    "state":"MT",
    "FIPS":30087,
    "county":"Rosebud County",
    "number":322.83000000000004,
    "rate":34.4095075676828,
    "population":9382
  },
  {
    "state":"NC",
    "FIPS":37017,
    "county":"Bladen County",
    "number":1224.53,
    "rate":35.08078840313986,
    "population":34906
  },
  {
    "state":"IN",
    "FIPS":18123,
    "county":"Perry County",
    "number":2646.47,
    "rate":136.21236296258172,
    "population":19429
  },
  {
    "state":"FL",
    "FIPS":12023,
    "county":"Columbia County",
    "number":5814.6,
    "rate":85.58056017544119,
    "population":67943
  },
  {
    "state":"MT",
    "FIPS":30083,
    "county":"Richland County",
    "number":246.53,
    "rate":22.839540485454883,
    "population":10794
  },
  {
    "state":"NC",
    "FIPS":37009,
    "county":"Ashe County",
    "number":2252.9100000000003,
    "rate":82.98011049723759,
    "population":27150
  },
  {
    "state":"IN",
    "FIPS":18119,
    "county":"Owen County",
    "number":69.43,
    "rate":3.2500117024762445,
    "population":21363
  },
  {
    "state":"IN",
    "FIPS":18117,
    "county":"Orange County",
    "number":636.6900000000003,
    "rate":32.32585296506906,
    "population":19696
  },
  {
    "state":"AK",
    "FIPS":2220,
    "county":"Sitka Borough",
    "number":116.4,
    "rate":12.847682119205299,
    "population":9060
  },
  {
    "state":"ME",
    "FIPS":23005,
    "county":"Cumberland County",
    "number":231514.7400000001,
    "rate":815.0492518922729,
    "population":284050
  },
  {
    "state":"TX",
    "FIPS":48477,
    "county":"Washington County",
    "number":807.27,
    "rate":23.837181834288078,
    "population":33866
  },
  {
    "state":"PA",
    "FIPS":42071,
    "county":"Lancaster County",
    "number":72151.97000000002,
    "rate":136.97157751259576,
    "population":526766
  },
  {
    "state":"AR",
    "FIPS":5135,
    "county":"Sharp County",
    "number":67.35000000000001,
    "rate":3.9494517093766497,
    "population":17053
  },
  {
    "state":"MI",
    "FIPS":26145,
    "county":"Saginaw County",
    "number":36255.57000000002,
    "rate":182.86142998365858,
    "population":198268
  },
  {
    "state":"GA",
    "FIPS":13257,
    "county":"Stephens County",
    "number":4200.73,
    "rate":163.2936831875607,
    "population":25725
  },
  {
    "state":"IN",
    "FIPS":18115,
    "county":"Ohio County",
    "number":302.5,
    "rate":49.565787317712605,
    "population":6103
  },
  {
    "state":"VA",
    "FIPS":51630,
    "county":"Fredericksburg City",
    "number":14317.280000000015,
    "rate":528.0596024047511,
    "population":27113
  },
  {
    "state":"TX",
    "FIPS":48429,
    "county":"Stephens County",
    "number":86.06,
    "rate":8.992685475444096,
    "population":9570
  },
  {
    "state":"PA",
    "FIPS":42023,
    "county":"Cameron County",
    "number":145.5,
    "rate":29.44152165115338,
    "population":4942
  },
  {
    "state":"AR",
    "FIPS":5129,
    "county":"Searcy County",
    "number":51.83,
    "rate":6.482801751094434,
    "population":7995
  },
  {
    "state":"SC",
    "FIPS":45055,
    "county":"Kershaw County",
    "number":5038.66,
    "rate":80.96574109782749,
    "population":62232
  },
  {
    "state":"IN",
    "FIPS":18091,
    "county":"La Porte County",
    "number":11743.309999999974,
    "rate":105.64520772234094,
    "population":111158
  },
  {
    "state":"PA",
    "FIPS":42007,
    "county":"Beaver County",
    "number":108123.31000000001,
    "rate":635.1825242034026,
    "population":170224
  },
  {
    "state":"AR",
    "FIPS":5127,
    "county":"Scott County",
    "number":33,
    "rate":2.998092123194331,
    "population":11007
  },
  {
    "state":"SC",
    "FIPS":45039,
    "county":"Fairfield County",
    "number":2619.0199999999995,
    "rate":112.06281288776688,
    "population":23371
  },
  {
    "state":"IN",
    "FIPS":18083,
    "county":"Knox County",
    "number":11555.810000000001,
    "rate":303.69267561956326,
    "population":38051
  },
  {
    "state":"SC",
    "FIPS":45027,
    "county":"Clarendon County",
    "number":1486.5500000000006,
    "rate":43.37885552540199,
    "population":34269
  },
  {
    "state":"IN",
    "FIPS":18077,
    "county":"Jefferson County",
    "number":1723.2399999999998,
    "rate":53.01298221866732,
    "population":32506
  },
  {
    "state":"SC",
    "FIPS":45019,
    "county":"Charleston County",
    "number":571975.9600000002,
    "rate":1565.0336003852558,
    "population":365472
  },
  {
    "state":"IN",
    "FIPS":18073,
    "county":"Jasper County",
    "number":2573.51,
    "rate":76.92912444324874,
    "population":33453
  },
  {
    "state":"IN",
    "FIPS":18061,
    "county":"Harrison County",
    "number":1112.63,
    "rate":28.45673802399039,
    "population":39099
  },
  {
    "state":"IN",
    "FIPS":18053,
    "county":"Grant County",
    "number":739.2000000000003,
    "rate":10.669283951330057,
    "population":69283
  },
  {
    "state":"KY",
    "FIPS":21239,
    "county":"Woodford County",
    "number":716.29,
    "rate":28.606973121929787,
    "population":25039
  },
  {
    "state":"IN",
    "FIPS":18045,
    "county":"Fountain County",
    "number":937.5,
    "rate":54.82456140350877,
    "population":17100
  },
  {
    "state":"KY",
    "FIPS":21233,
    "county":"Webster County",
    "number":334.82000000000005,
    "rate":24.84012167074709,
    "population":13479
  },
  {
    "state":"IN",
    "FIPS":18039,
    "county":"Elkhart County",
    "number":43175.72000000002,
    "rate":216.7064185187417,
    "population":199236
  },
  {
    "state":"OK",
    "FIPS":40039,
    "county":"Custer County",
    "number":814.1,
    "rate":28.546882670594012,
    "population":28518
  },
  {
    "state":"KY",
    "FIPS":21231,
    "county":"Wayne County",
    "number":321.58,
    "rate":15.479181708784598,
    "population":20775
  },
  {
    "state":"VA",
    "FIPS":51720,
    "county":"Norton City",
    "number":3528.9,
    "rate":871.5485305013583,
    "population":4049
  },
  {
    "state":"PA",
    "FIPS":42113,
    "county":"Sullivan County",
    "number":254.41,
    "rate":39.42507360917403,
    "population":6453
  },
  {
    "state":"GA",
    "FIPS":13299,
    "county":"Ware County",
    "number":3542.690000000001,
    "rate":98.91913776735358,
    "population":35814
  },
  {
    "state":"AL",
    "FIPS":1131,
    "county":"Wilcox County",
    "number":384.28,
    "rate":33.75021956789039,
    "population":11386
  },
  {
    "state":"IN",
    "FIPS":18037,
    "county":"Dubois County",
    "number":3603.19,
    "rate":85.59866014158787,
    "population":42094
  },
  {
    "state":"OK",
    "FIPS":40023,
    "county":"Choctaw County",
    "number":61.27,
    "rate":4.038892551087673,
    "population":15170
  },
  {
    "state":"KY",
    "FIPS":21223,
    "county":"Trimble County",
    "number":924.5199999999999,
    "rate":104.56005428636053,
    "population":8842
  },
  {
    "state":"IN",
    "FIPS":18029,
    "county":"Dearborn County",
    "number":5962.1,
    "rate":119.76417178900006,
    "population":49782
  },
  {
    "state":"KY",
    "FIPS":21221,
    "county":"Trigg County",
    "number":203.97,
    "rate":14.172456920511395,
    "population":14392
  },
  {
    "state":"AR",
    "FIPS":5113,
    "county":"Polk County",
    "number":143.47000000000003,
    "rate":7.019080234833661,
    "population":20440
  },
  {
    "state":"IN",
    "FIPS":18027,
    "county":"Daviess County",
    "number":696.5500000000001,
    "rate":21.688566446630965,
    "population":32116
  },
  {
    "state":"KY",
    "FIPS":21213,
    "county":"Simpson County",
    "number":429.4,
    "rate":24.45469559769918,
    "population":17559
  },
  {
    "state":"MI",
    "FIPS":26049,
    "county":"Genesee County",
    "number":246028.77000000014,
    "rate":588.5039157246127,
    "population":418058
  },
  {
    "state":"TX",
    "FIPS":48159,
    "county":"Franklin County",
    "number":363.46000000000004,
    "rate":34.172621286197824,
    "population":10636
  },
  {
    "state":"GA",
    "FIPS":13209,
    "county":"Montgomery County",
    "number":80.71000000000001,
    "rate":9.05937815691997,
    "population":8909
  },
  {
    "state":"IN",
    "FIPS":18019,
    "county":"Clark County",
    "number":13333.170000000011,
    "rate":119.13231890921122,
    "population":111919
  },
  {
    "state":"KY",
    "FIPS":21207,
    "county":"Russell County",
    "number":2044.2199999999998,
    "rate":116.53953594435892,
    "population":17541
  },
  {
    "state":"IN",
    "FIPS":18013,
    "county":"Brown County",
    "number":166.47,
    "rate":11.047916113618264,
    "population":15068
  },
  {
    "state":"KY",
    "FIPS":21203,
    "county":"Rockcastle County",
    "number":1881.0500000000004,
    "rate":110.20270666119869,
    "population":17069
  },
  {
    "state":"IN",
    "FIPS":18009,
    "county":"Blackford County",
    "number":1731.0900000000008,
    "rate":137.95744341727772,
    "population":12548
  },
  {
    "state":"KY",
    "FIPS":21199,
    "county":"Pulaski County",
    "number":6068.9400000000005,
    "rate":95.65218761820704,
    "population":63448
  },
  {
    "state":"TX",
    "FIPS":48455,
    "county":"Trinity County",
    "number":22.06,
    "rate":1.5426573426573424,
    "population":14300
  },
  {
    "state":"PA",
    "FIPS":42049,
    "county":"Erie County",
    "number":130327.70000000026,
    "rate":464.1283328763084,
    "population":280801
  },
  {
    "state":"AL",
    "FIPS":1129,
    "county":"Washington County",
    "number":357.02,
    "rate":20.893024344569287,
    "population":17088
  },
  {
    "state":"IN",
    "FIPS":18005,
    "county":"Bartholomew County",
    "number":7468.290000000002,
    "rate":94.65153416219917,
    "population":78903
  },
  {
    "state":"KY",
    "FIPS":21195,
    "county":"Pike County",
    "number":26201.230000000003,
    "rate":405.82423369422116,
    "population":64563
  },
  {
    "state":"IN",
    "FIPS":18001,
    "county":"Adams County",
    "number":1442.9200000000003,
    "rate":41.944129531118286,
    "population":34401
  },
  {
    "state":"MT",
    "FIPS":30013,
    "county":"Cascade County",
    "number":39532.78999999999,
    "rate":483.4928147740475,
    "population":81765
  },
  {
    "state":"IL",
    "FIPS":17201,
    "county":"Winnebago County",
    "number":25212.50999999999,
    "rate":86.36698718497684,
    "population":291923
  },
  {
    "state":"MT",
    "FIPS":30007,
    "county":"Broadwater County",
    "number":99.99,
    "rate":17.353349531412704,
    "population":5762
  },
  {
    "state":"IL",
    "FIPS":17195,
    "county":"Whiteside County",
    "number":19465,
    "rate":337.77569542054937,
    "population":57627
  },
  {
    "state":"IL",
    "FIPS":17185,
    "county":"Wabash County",
    "number":842.3099999999998,
    "rate":71.89399112325025,
    "population":11716
  },
  {
    "state":"WY",
    "FIPS":56039,
    "county":"Teton County",
    "number":81.84,
    "rate":3.770733505344637,
    "population":21704
  },
  {
    "state":"IL",
    "FIPS":17177,
    "county":"Stephenson County",
    "number":3049.2299999999996,
    "rate":64.91452536563557,
    "population":46973
  },
  {
    "state":"WY",
    "FIPS":56023,
    "county":"Lincoln County",
    "number":179.35,
    "rate":10.005020640410578,
    "population":17926
  },
  {
    "state":"IL",
    "FIPS":17169,
    "county":"Schuyler County",
    "number":651.9500000000002,
    "rate":87.08923323537272,
    "population":7486
  },
  {
    "state":"WY",
    "FIPS":56015,
    "county":"Goshen County",
    "number":39.769999999999996,
    "rate":2.90929041697147,
    "population":13670
  },
  {
    "state":"IL",
    "FIPS":17165,
    "county":"Saline County",
    "number":3716.8,
    "rate":148.78507665826027,
    "population":24981
  },
  {
    "state":"IL",
    "FIPS":17145,
    "county":"Perry County",
    "number":2183.310000000001,
    "rate":98.92659719075672,
    "population":22070
  },
  {
    "state":"IL",
    "FIPS":17137,
    "county":"Morgan County",
    "number":762.3699999999999,
    "rate":21.609739505088008,
    "population":35279
  },
  {
    "state":"IL",
    "FIPS":17113,
    "county":"McLean County",
    "number":10366.469999999992,
    "rate":60.12405897296101,
    "population":172418
  },
  {
    "state":"IL",
    "FIPS":17121,
    "county":"Marion County",
    "number":2485.969999999999,
    "rate":63.86892068956655,
    "population":38923
  },
  {
    "state":"IL",
    "FIPS":17105,
    "county":"Livingston County",
    "number":892.3400000000003,
    "rate":23.156610873232136,
    "population":38535
  },
  {
    "state":"IL",
    "FIPS":17095,
    "county":"Knox County",
    "number":48645.39999999998,
    "rate":929.8734564361353,
    "population":52314
  },
  {
    "state":"IL",
    "FIPS":17081,
    "county":"Jefferson County",
    "number":3919.57,
    "rate":101.2024270591273,
    "population":38730
  },
  {
    "state":"IL",
    "FIPS":17073,
    "county":"Henry County",
    "number":1373.1400000000006,
    "rate":27.42385812146753,
    "population":50071
  },
  {
    "state":"IL",
    "FIPS":17065,
    "county":"Hamilton County",
    "number":381.68000000000006,
    "rate":45.6336681013869,
    "population":8364
  },
  {
    "state":"IL",
    "FIPS":17059,
    "county":"Gallatin County",
    "number":56.31,
    "rate":10.400812707794607,
    "population":5414
  },
  {
    "state":"IL",
    "FIPS":17057,
    "county":"Fulton County",
    "number":1742.2000000000003,
    "rate":47.524482391772835,
    "population":36659
  },
  {
    "state":"IL",
    "FIPS":17049,
    "county":"Effingham County",
    "number":6441.38,
    "rate":187.6749606666278,
    "population":34322
  },
  {
    "state":"IL",
    "FIPS":17041,
    "county":"Douglas County",
    "number":455.51,
    "rate":22.96843485276321,
    "population":19832
  },
  {
    "state":"IL",
    "FIPS":17039,
    "county":"De Witt County",
    "number":2055.4700000000003,
    "rate":124.6343681785108,
    "population":16492
  },
  {
    "state":"ND",
    "FIPS":38031,
    "county":"Foster County",
    "number":27.04,
    "rate":7.971698113207547,
    "population":3392
  },
  {
    "state":"IL",
    "FIPS":17033,
    "county":"Crawford County",
    "number":239.48999999999998,
    "rate":12.202068578998318,
    "population":19627
  },
  {
    "state":"ND",
    "FIPS":38015,
    "county":"Burleigh County",
    "number":17563.680000000026,
    "rate":204.0556272001676,
    "population":86073
  },
  {
    "state":"IL",
    "FIPS":17025,
    "county":"Clay County",
    "number":117.43,
    "rate":8.550935702322873,
    "population":13733
  },
  {
    "state":"IL",
    "FIPS":17011,
    "county":"Bureau County",
    "number":1635.9199999999996,
    "rate":47.64306724524564,
    "population":34337
  },
  {
    "state":"KS",
    "FIPS":20205,
    "county":"Wilson County",
    "number":3946.4100000000003,
    "rate":432.7678473516833,
    "population":9119
  },
  {
    "state":"IL",
    "FIPS":17017,
    "county":"Cass County",
    "number":787.2800000000003,
    "rate":58.65593801221877,
    "population":13422
  },
  {
    "state":"CO",
    "FIPS":8049,
    "county":"Grand County",
    "number":12.93,
    "rate":0.9117190805246086,
    "population":14182
  },
  {
    "state":"KS",
    "FIPS":20189,
    "county":"Stevens County",
    "number":34.83,
    "rate":6.071117308697925,
    "population":5737
  },
  {
    "state":"KS",
    "FIPS":20195,
    "county":"Trego County",
    "number":651.8899999999999,
    "rate":219.5655102728191,
    "population":2969
  },
  {
    "state":"IL",
    "FIPS":17001,
    "county":"Adams County",
    "number":12552.659999999998,
    "rate":186.79831545112276,
    "population":67199
  },
  {
    "state":"IN",
    "FIPS":18181,
    "county":"White County",
    "number":71.6,
    "rate":2.9334644378892163,
    "population":24408
  },
  {
    "state":"ID",
    "FIPS":16087,
    "county":"Washington County",
    "number":604.58,
    "rate":60.21113434916841,
    "population":10041
  },
  {
    "state":"NJ",
    "FIPS":34031,
    "county":"Passaic County",
    "number":88959.38999999991,
    "rate":176.1526732975189,
    "population":505013
  },
  {
    "state":"ID",
    "FIPS":16083,
    "county":"Twin Falls County",
    "number":11004.439999999999,
    "rate":140.37707929380548,
    "population":78392
  },
  {
    "state":"IN",
    "FIPS":18169,
    "county":"Wabash County",
    "number":3423.7999999999993,
    "rate":105.58159615147402,
    "population":32428
  },
  {
    "state":"NJ",
    "FIPS":34023,
    "county":"Middlesex County",
    "number":264453.4400000002,
    "rate":320.7646337484401,
    "population":824447
  },
  {
    "state":"ID",
    "FIPS":16081,
    "county":"Teton County",
    "number":41.599999999999994,
    "rate":4.124120154654506,
    "population":10087
  },
  {
    "state":"NC",
    "FIPS":37101,
    "county":"Johnston County",
    "number":14199.33000000001,
    "rate":81.18866964372508,
    "population":174893
  },
  {
    "state":"IN",
    "FIPS":18165,
    "county":"Vermillion County",
    "number":64.75,
    "rate":4.058288937637104,
    "population":15955
  },
  {
    "state":"NJ",
    "FIPS":34015,
    "county":"Gloucester County",
    "number":121776.27999999987,
    "rate":420.3951379323435,
    "population":289671
  },
  {
    "state":"ID",
    "FIPS":16079,
    "county":"Shoshone County",
    "number":1411.9199999999994,
    "rate":111.18355776045354,
    "population":12699
  },
  {
    "state":"NC",
    "FIPS":37093,
    "county":"Hoke County",
    "number":1718.2600000000004,
    "rate":34.04719915984704,
    "population":50467
  },
  {
    "state":"IN",
    "FIPS":18161,
    "county":"Union County",
    "number":421.73,
    "rate":57.45640326975477,
    "population":7340
  },
  {
    "state":"NJ",
    "FIPS":34007,
    "county":"Camden County",
    "number":284630.44000000064,
    "rate":554.7227072874127,
    "population":513104
  },
  {
    "state":"ID",
    "FIPS":16077,
    "county":"Power County",
    "number":28.25,
    "rate":3.6315721815143336,
    "population":7779
  },
  {
    "state":"ID",
    "FIPS":16075,
    "county":"Payette County",
    "number":1647.0800000000004,
    "rate":72.64499625104753,
    "population":22673
  },
  {
    "state":"NC",
    "FIPS":37077,
    "county":"Granville County",
    "number":1635.3999999999996,
    "rate":28.28530907329897,
    "population":57818
  },
  {
    "state":"AZ",
    "FIPS":4009,
    "county":"Graham County",
    "number":886.0599999999998,
    "rate":23.983218297469207,
    "population":36945
  },
  {
    "state":"IN",
    "FIPS":18153,
    "county":"Sullivan County",
    "number":1963.6299999999997,
    "rate":92.50624205021904,
    "population":21227
  },
  {
    "state":"ID",
    "FIPS":16073,
    "county":"Owyhee County",
    "number":214.3,
    "rate":18.78341660092909,
    "population":11409
  },
  {
    "state":"NC",
    "FIPS":37069,
    "county":"Franklin County",
    "number":2028.8600000000006,
    "rate":32.95155186695036,
    "population":61571
  },
  {
    "state":"IN",
    "FIPS":18149,
    "county":"Starke County",
    "number":2207.7599999999998,
    "rate":95.17437599689615,
    "population":23197
  },
  {
    "state":"ID",
    "FIPS":16071,
    "county":"Oneida County",
    "number":25.78,
    "rate":6.104664930144447,
    "population":4223
  },
  {
    "state":"NC",
    "FIPS":37061,
    "county":"Duplin County",
    "number":5537.249999999998,
    "rate":92.80255417567497,
    "population":59667
  },
  {
    "state":"IN",
    "FIPS":18145,
    "county":"Shelby County",
    "number":2725.8700000000003,
    "rate":61.41836780676852,
    "population":44382
  },
  {
    "state":"ID",
    "FIPS":16069,
    "county":"Nez Perce County",
    "number":1431.4100000000005,
    "rate":36.16772367789374,
    "population":39577
  },
  {
    "state":"ID",
    "FIPS":16067,
    "county":"Minidoka County",
    "number":556.62,
    "rate":27.707700731743742,
    "population":20089
  },
  {
    "state":"AR",
    "FIPS":5109,
    "county":"Pike County",
    "number":134.72,
    "rate":11.95810402982425,
    "population":11266
  },
  {
    "state":"NV",
    "FIPS":32510,
    "county":"Carson City",
    "number":5301.139999999998,
    "rate":97.1296126644435,
    "population":54578
  },
  {
    "state":"AZ",
    "FIPS":4007,
    "county":"Gila County",
    "number":46135.5,
    "rate":870.0379052180964,
    "population":53027
  },
  {
    "state":"IN",
    "FIPS":18137,
    "county":"Ripley County",
    "number":1394.3899999999996,
    "rate":48.87623120333694,
    "population":28529
  },
  {
    "state":"ID",
    "FIPS":16065,
    "county":"Madison County",
    "number":591.72,
    "rate":15.703821656050955,
    "population":37680
  },
  {
    "state":"IN",
    "FIPS":18133,
    "county":"Putnam County",
    "number":3381.7100000000005,
    "rate":89.74576046283275,
    "population":37681
  },
  {
    "state":"ID",
    "FIPS":16063,
    "county":"Lincoln County",
    "number":28.3,
    "rate":5.384322678843227,
    "population":5256
  },
  {
    "state":"IN",
    "FIPS":18125,
    "county":"Pike County",
    "number":803.21,
    "rate":62.8785032096446,
    "population":12774
  },
  {
    "state":"TN",
    "FIPS":47017,
    "county":"Carroll County",
    "number":6203.980000000001,
    "rate":216.74806973412993,
    "population":28623
  },
  {
    "state":"AK",
    "FIPS":2122,
    "county":"Kenai Peninsula Borough",
    "number":1347.39,
    "rate":23.655851680185403,
    "population":56958
  },
  {
    "state":"ID",
    "FIPS":16059,
    "county":"Lemhi County",
    "number":20.07,
    "rate":2.5853407187942805,
    "population":7763
  },
  {
    "state":"AZ",
    "FIPS":4005,
    "county":"Coconino County",
    "number":2231.8599999999997,
    "rate":16.41689162847832,
    "population":135949
  },
  {
    "state":"IN",
    "FIPS":18121,
    "county":"Parke County",
    "number":699.6399999999998,
    "rate":40.885928003740055,
    "population":17112
  },
  {
    "state":"ID",
    "FIPS":16057,
    "county":"Latah County",
    "number":321.07000000000005,
    "rate":8.41444558010326,
    "population":38157
  },
  {
    "state":"SC",
    "FIPS":45091,
    "county":"York County",
    "number":19402.38,
    "rate":82.71607990927927,
    "population":234566
  },
  {
    "state":"IN",
    "FIPS":18109,
    "county":"Morgan County",
    "number":3456.010000000001,
    "rate":49.9307963476653,
    "population":69216
  },
  {
    "state":"FL",
    "FIPS":12027,
    "county":"Desoto County",
    "number":756.54,
    "rate":21.774068211253418,
    "population":34745
  },
  {
    "state":"NC",
    "FIPS":37025,
    "county":"Cabarrus County",
    "number":241585.68999999994,
    "rate":1309.499802154081,
    "population":184487
  },
  {
    "state":"MT",
    "FIPS":30091,
    "county":"Sheridan County",
    "number":26.21,
    "rate":7.32122905027933,
    "population":3580
  },
  {
    "state":"ID",
    "FIPS":16051,
    "county":"Jefferson County",
    "number":1201.18,
    "rate":45.06058446186743,
    "population":26657
  },
  {
    "state":"ID",
    "FIPS":16049,
    "county":"Idaho County",
    "number":10.8,
    "rate":0.6585767424842979,
    "population":16399
  },
  {
    "state":"SC",
    "FIPS":45075,
    "county":"Orangeburg County",
    "number":93044.66,
    "rate":1017.6711984162574,
    "population":91429
  },
  {
    "state":"IN",
    "FIPS":18101,
    "county":"Martin County",
    "number":54.56999999999999,
    "rate":5.286766130594846,
    "population":10322
  },
  {
    "state":"ID",
    "FIPS":16047,
    "county":"Gooding County",
    "number":298.04,
    "rate":19.58727655099895,
    "population":15216
  },
  {
    "state":"ID",
    "FIPS":16045,
    "county":"Gem County",
    "number":1638.4899999999998,
    "rate":98.16019650131798,
    "population":16692
  },
  {
    "state":"SC",
    "FIPS":45059,
    "county":"Laurens County",
    "number":5928.139999999999,
    "rate":89.47055449907936,
    "population":66258
  },
  {
    "state":"IN",
    "FIPS":18093,
    "county":"Lawrence County",
    "number":1058.21,
    "rate":22.982082745140623,
    "population":46045
  },
  {
    "state":"CO",
    "FIPS":8125,
    "county":"Yuma County",
    "number":32.23,
    "rate":3.185726994168231,
    "population":10117
  },
  {
    "state":"ID",
    "FIPS":16043,
    "county":"Fremont County",
    "number":13.16,
    "rate":1.0139456044379382,
    "population":12979
  },
  {
    "state":"SC",
    "FIPS":45051,
    "county":"Horry County",
    "number":557830.5499999998,
    "rate":1978.1926664066095,
    "population":281990
  },
  {
    "state":"AZ",
    "FIPS":4001,
    "county":"Apache County",
    "number":127.8,
    "rate":1.7528219335902675,
    "population":72911
  },
  {
    "state":"IN",
    "FIPS":18089,
    "county":"Lake County",
    "number":246473.96999999988,
    "rate":499.7505444105157,
    "population":493194
  },
  {
    "state":"FL",
    "FIPS":12017,
    "county":"Citrus County",
    "number":32853.45999999999,
    "rate":235.8637375260248,
    "population":139290
  },
  {
    "state":"MT",
    "FIPS":30071,
    "county":"Phillips County",
    "number":32.95,
    "rate":7.984007753816333,
    "population":4127
  },
  {
    "state":"ID",
    "FIPS":16041,
    "county":"Franklin County",
    "number":322.28,
    "rate":25.15650612754664,
    "population":12811
  },
  {
    "state":"SC",
    "FIPS":45043,
    "county":"Georgetown County",
    "number":2835.2300000000005,
    "rate":47.03121889721984,
    "population":60284
  },
  {
    "state":"IN",
    "FIPS":18085,
    "county":"Kosciusko County",
    "number":6812.250000000002,
    "rate":87.72568058309942,
    "population":77654
  },
  {
    "state":"CO",
    "FIPS":8123,
    "county":"Weld County",
    "number":4331.7300000000005,
    "rate":16.396329900185094,
    "population":264189
  },
  {
    "state":"WA",
    "FIPS":53073,
    "county":"Whatcom County",
    "number":10135.679999999995,
    "rate":49.48410121712467,
    "population":204827
  },
  {
    "state":"ID",
    "FIPS":16039,
    "county":"Elmore County",
    "number":647.8000000000001,
    "rate":24.726134585289515,
    "population":26199
  },
  {
    "state":"GA",
    "FIPS":13315,
    "county":"Wilcox County",
    "number":40.33,
    "rate":4.467707987149662,
    "population":9027
  },
  {
    "state":"AL",
    "FIPS":1133,
    "county":"Winston County",
    "number":1437.6399999999999,
    "rate":59.44345668802977,
    "population":24185
  },
  {
    "state":"SC",
    "FIPS":45011,
    "county":"Barnwell County",
    "number":59.63,
    "rate":2.6747106844891,
    "population":22294
  },
  {
    "state":"IN",
    "FIPS":18069,
    "county":"Huntington County",
    "number":9389.709999999997,
    "rate":253.92006273831086,
    "population":36979
  },
  {
    "state":"WA",
    "FIPS":53041,
    "county":"Lewis County",
    "number":4033.65,
    "rate":53.40319334851454,
    "population":75532
  },
  {
    "state":"ID",
    "FIPS":16031,
    "county":"Cassia County",
    "number":866.4200000000002,
    "rate":37.233347657928675,
    "population":23270
  },
  {
    "state":"SC",
    "FIPS":45003,
    "county":"Aiken County",
    "number":63917.170000000006,
    "rate":391.10771847808803,
    "population":163426
  },
  {
    "state":"IN",
    "FIPS":18065,
    "county":"Henry County",
    "number":3329.38,
    "rate":67.58927302624902,
    "population":49259
  },
  {
    "state":"FL",
    "FIPS":12005,
    "county":"Bay County",
    "number":101389.99999999994,
    "rate":589.4973080456292,
    "population":171994
  },
  {
    "state":"MT",
    "FIPS":30047,
    "county":"Lake County",
    "number":640.07,
    "rate":22.07214041863513,
    "population":28999
  },
  {
    "state":"WA",
    "FIPS":53033,
    "county":"King County",
    "number":3826318.8900000006,
    "rate":1905.0382668683405,
    "population":2008526
  },
  {
    "state":"ID",
    "FIPS":16029,
    "county":"Caribou County",
    "number":479.1400000000001,
    "rate":70.61753868828299,
    "population":6785
  },
  {
    "state":"CO",
    "FIPS":8085,
    "county":"Montrose County",
    "number":412.46000000000004,
    "rate":10.128677373409952,
    "population":40722
  },
  {
    "state":"OK",
    "FIPS":40047,
    "county":"Garfield County",
    "number":5026.74,
    "rate":81.97821194429042,
    "population":61318
  },
  {
    "state":"AK",
    "FIPS":2020,
    "county":"Anchorage Borough",
    "number":45741.13999999993,
    "rate":153.1684040276859,
    "population":298633
  },
  {
    "state":"KY",
    "FIPS":21235,
    "county":"Whitley County",
    "number":3653.4399999999996,
    "rate":102.89930995634415,
    "population":35505
  },
  {
    "state":"IN",
    "FIPS":18041,
    "county":"Fayette County",
    "number":718.2700000000002,
    "rate":29.971625286876705,
    "population":23965
  },
  {
    "state":"MT",
    "FIPS":30023,
    "county":"Deer Lodge County",
    "number":49.00000000000001,
    "rate":5.313381045326395,
    "population":9222
  },
  {
    "state":"ID",
    "FIPS":16017,
    "county":"Bonner County",
    "number":469.34999999999985,
    "rate":11.604074467822084,
    "population":40447
  },
  {
    "state":"CO",
    "FIPS":8083,
    "county":"Montezuma County",
    "number":42.55,
    "rate":1.6736154814348647,
    "population":25424
  },
  {
    "state":"OK",
    "FIPS":40031,
    "county":"Comanche County",
    "number":19909.030000000006,
    "rate":157.24565796020886,
    "population":126611
  },
  {
    "state":"IN",
    "FIPS":18033,
    "county":"De Kalb County",
    "number":3284.63,
    "rate":77.73352266004024,
    "population":42255
  },
  {
    "state":"IL",
    "FIPS":17203,
    "county":"Woodford County",
    "number":893.54,
    "rate":22.955427103403984,
    "population":38925
  },
  {
    "state":"MT",
    "FIPS":30015,
    "county":"Chouteau County",
    "number":21.46,
    "rate":3.6207187447275184,
    "population":5927
  },
  {
    "state":"ID",
    "FIPS":16013,
    "county":"Blaine County",
    "number":1014.6299999999999,
    "rate":47.99574266792809,
    "population":21140
  },
  {
    "state":"CO",
    "FIPS":8081,
    "county":"Moffat County",
    "number":250.86,
    "rate":19.05217589428116,
    "population":13167
  },
  {
    "state":"OK",
    "FIPS":40015,
    "county":"Caddo County",
    "number":127.78999999999999,
    "rate":4.306753842005931,
    "population":29672
  },
  {
    "state":"KY",
    "FIPS":21219,
    "county":"Todd County",
    "number":12.45,
    "rate":0.9849683544303797,
    "population":12640
  },
  {
    "state":"IN",
    "FIPS":18025,
    "county":"Crawford County",
    "number":128.37,
    "rate":12.059182714889621,
    "population":10645
  },
  {
    "state":"OK",
    "FIPS":40141,
    "county":"Tillman County",
    "number":323.22,
    "rate":41.52363823227133,
    "population":7784
  },
  {
    "state":"ID",
    "FIPS":16009,
    "county":"Benewah County",
    "number":92.61,
    "rate":10.14904109589041,
    "population":9125
  },
  {
    "state":"KY",
    "FIPS":21215,
    "county":"Spencer County",
    "number":278.27000000000004,
    "rate":15.984261014417832,
    "population":17409
  },
  {
    "state":"IN",
    "FIPS":18021,
    "county":"Clay County",
    "number":1979.0399999999997,
    "rate":73.69353937814186,
    "population":26855
  },
  {
    "state":"OK",
    "FIPS":40133,
    "county":"Seminole County",
    "number":2152.9299999999994,
    "rate":84.5313911029094,
    "population":25469
  },
  {
    "state":"ID",
    "FIPS":16007,
    "county":"Bear Lake County",
    "number":187.34,
    "rate":31.81185260655459,
    "population":5889
  },
  {
    "state":"KY",
    "FIPS":21211,
    "county":"Shelby County",
    "number":2208.8600000000006,
    "rate":50.65844093296334,
    "population":43603
  },
  {
    "state":"IN",
    "FIPS":18017,
    "county":"Cass County",
    "number":829.8699999999998,
    "rate":21.418210912094146,
    "population":38746
  },
  {
    "state":"OK",
    "FIPS":40125,
    "county":"Pottawatomie County",
    "number":2276.77,
    "rate":32.20188676576666,
    "population":70703
  },
  {
    "state":"ID",
    "FIPS":16005,
    "county":"Bannock County",
    "number":77331.73000000001,
    "rate":923.4631781325755,
    "population":83741
  },
  {
    "state":"NV",
    "FIPS":32003,
    "county":"Clark County",
    "number":2015329.1499999985,
    "rate":1008.34722607205,
    "population":1998646
  },
  {
    "state":"IA",
    "FIPS":19191,
    "county":"Winneshiek County",
    "number":81.38000000000001,
    "rate":3.8686061988971288,
    "population":21036
  },
  {
    "state":"AL",
    "FIPS":1091,
    "county":"Marengo County",
    "number":1657.9899999999998,
    "rate":81.10306706452084,
    "population":20443
  },
  {
    "state":"IA",
    "FIPS":19183,
    "county":"Washington County",
    "number":3074.3399999999992,
    "rate":140.24633912686463,
    "population":21921
  },
  {
    "state":"IA",
    "FIPS":19181,
    "county":"Warren County",
    "number":1678.6899999999998,
    "rate":35.75484558040468,
    "population":46950
  },
  {
    "state":"IA",
    "FIPS":19179,
    "county":"Wapello County",
    "number":575.88,
    "rate":16.29126707969108,
    "population":35349
  },
  {
    "state":"IA",
    "FIPS":19175,
    "county":"Union County",
    "number":671.5,
    "rate":53.33174489714876,
    "population":12591
  },
  {
    "state":"AL",
    "FIPS":1013,
    "county":"Butler County",
    "number":1327.2000000000005,
    "rate":65.03013376451568,
    "population":20409
  },
  {
    "state":"IA",
    "FIPS":19167,
    "county":"Sioux County",
    "number":1044.3600000000001,
    "rate":30.405263770816354,
    "population":34348
  },
  {
    "state":"IA",
    "FIPS":19165,
    "county":"Shelby County",
    "number":3315.4899999999993,
    "rate":274.6657277773175,
    "population":12071
  },
  {
    "state":"OH",
    "FIPS":39089,
    "county":"Licking County",
    "number":29472.009999999995,
    "rate":175.7225478329825,
    "population":167719
  },
  {
    "state":"IA",
    "FIPS":19159,
    "county":"Ringgold County",
    "number":1045.1699999999998,
    "rate":205.53982300884954,
    "population":5085
  },
  {
    "state":"TN",
    "FIPS":47187,
    "county":"Williamson County",
    "number":6822.129999999999,
    "rate":35.34104860726182,
    "population":193037
  },
  {
    "state":"IA",
    "FIPS":19157,
    "county":"Poweshiek County",
    "number":245.09,
    "rate":13.06519537288768,
    "population":18759
  },
  {
    "state":"OH",
    "FIPS":39073,
    "county":"Hocking County",
    "number":2454.8799999999997,
    "rate":83.81004404083164,
    "population":29291
  },
  {
    "state":"AL",
    "FIPS":1089,
    "county":"Madison County",
    "number":106086.92000000004,
    "rate":309.4103853377978,
    "population":342868
  },
  {
    "state":"TN",
    "FIPS":47175,
    "county":"Van Buren County",
    "number":30.28,
    "rate":5.387900355871886,
    "population":5620
  },
  {
    "state":"IA",
    "FIPS":19151,
    "county":"Pocahontas County",
    "number":18.42,
    "rate":2.5722664432341857,
    "population":7161
  },
  {
    "state":"OH",
    "FIPS":39069,
    "county":"Henry County",
    "number":1035.4900000000005,
    "rate":36.90270848182468,
    "population":28060
  },
  {
    "state":"TN",
    "FIPS":47171,
    "county":"Unicoi County",
    "number":1135.2900000000002,
    "rate":62.204262780121645,
    "population":18251
  },
  {
    "state":"IA",
    "FIPS":19149,
    "county":"Plymouth County",
    "number":481.13,
    "rate":19.337245287568827,
    "population":24881
  },
  {
    "state":"TN",
    "FIPS":47163,
    "county":"Sullivan County",
    "number":282983.44,
    "rate":1806.2042598277942,
    "population":156673
  },
  {
    "state":"IA",
    "FIPS":19145,
    "county":"Page County",
    "number":1252.37,
    "rate":79.51050726937972,
    "population":15751
  },
  {
    "state":"TN",
    "FIPS":47159,
    "county":"Smith County",
    "number":1492.0999999999997,
    "rate":78.03870292887028,
    "population":19120
  },
  {
    "state":"IA",
    "FIPS":19143,
    "county":"Osceola County",
    "number":32.97,
    "rate":5.326332794830371,
    "population":6190
  },
  {
    "state":"TN",
    "FIPS":47155,
    "county":"Sevier County",
    "number":6814.04,
    "rate":73.63982189945101,
    "population":92532
  },
  {
    "state":"IA",
    "FIPS":19141,
    "county":"Obrien County",
    "number":152.63,
    "rate":10.77667160912236,
    "population":14163
  },
  {
    "state":"TN",
    "FIPS":47151,
    "county":"Scott County",
    "number":637.2399999999999,
    "rate":28.748533790489933,
    "population":22166
  },
  {
    "state":"IA",
    "FIPS":19139,
    "county":"Muscatine County",
    "number":672.32,
    "rate":15.669968535135766,
    "population":42905
  },
  {
    "state":"TN",
    "FIPS":47147,
    "county":"Robertson County",
    "number":4784.75,
    "rate":71.7149537612974,
    "population":66719
  },
  {
    "state":"IA",
    "FIPS":19137,
    "county":"Montgomery County",
    "number":2122.399999999999,
    "rate":201.02292100776654,
    "population":10558
  },
  {
    "state":"TN",
    "FIPS":47143,
    "county":"Rhea County",
    "number":1288.02,
    "rate":39.8681400315721,
    "population":32307
  },
  {
    "state":"IA",
    "FIPS":19135,
    "county":"Monroe County",
    "number":461.2200000000001,
    "rate":57.145335150538976,
    "population":8071
  },
  {
    "state":"TN",
    "FIPS":47139,
    "county":"Polk County",
    "number":459.22,
    "rate":27.642207909468492,
    "population":16613
  },
  {
    "state":"IA",
    "FIPS":19133,
    "county":"Monona County",
    "number":1655.1399999999999,
    "rate":181.04791074163202,
    "population":9142
  },
  {
    "state":"IA",
    "FIPS":19131,
    "county":"Mitchell County",
    "number":295.59999999999997,
    "rate":27.556632795749042,
    "population":10727
  },
  {
    "state":"TN",
    "FIPS":47131,
    "county":"Obion County",
    "number":2260.6399999999994,
    "rate":72.10742879015022,
    "population":31351
  },
  {
    "state":"IA",
    "FIPS":19129,
    "county":"Mills County",
    "number":2116.2999999999997,
    "rate":142.21490491230426,
    "population":14881
  },
  {
    "state":"OH",
    "FIPS":39025,
    "county":"Clermont County",
    "number":12860.54999999999,
    "rate":64.55483663706771,
    "population":199219
  },
  {
    "state":"IA",
    "FIPS":19127,
    "county":"Marshall County",
    "number":1000.0899999999997,
    "rate":24.357981392176914,
    "population":41058
  },
  {
    "state":"TN",
    "FIPS":47123,
    "county":"Monroe County",
    "number":2264.72,
    "rate":50.206615234548195,
    "population":45108
  },
  {
    "state":"IA",
    "FIPS":19125,
    "county":"Marion County",
    "number":316.84,
    "rate":9.492480076697225,
    "population":33378
  },
  {
    "state":"TN",
    "FIPS":47119,
    "county":"Maury County",
    "number":18221.73999999999,
    "rate":222.36820267499743,
    "population":81944
  },
  {
    "state":"IA",
    "FIPS":19123,
    "county":"Mahaska County",
    "number":121.05000000000001,
    "rate":5.399919703796226,
    "population":22417
  },
  {
    "state":"TN",
    "FIPS":47103,
    "county":"Lincoln County",
    "number":5899.32,
    "rate":176.43617657614547,
    "population":33436
  },
  {
    "state":"IA",
    "FIPS":19115,
    "county":"Louisa County",
    "number":51.3,
    "rate":4.529001500838704,
    "population":11327
  },
  {
    "state":"TN",
    "FIPS":47099,
    "county":"Lawrence County",
    "number":1382.6800000000003,
    "rate":32.820147641766965,
    "population":42129
  },
  {
    "state":"IA",
    "FIPS":19113,
    "county":"Linn County",
    "number":52665.869999999995,
    "rate":244.72305604862316,
    "population":215206
  },
  {
    "state":"TN",
    "FIPS":47095,
    "county":"Lake County",
    "number":73.41,
    "rate":9.530053226015838,
    "population":7703
  },
  {
    "state":"IA",
    "FIPS":19111,
    "county":"Lee County",
    "number":616.7800000000001,
    "rate":17.314580876986135,
    "population":35622
  },
  {
    "state":"TN",
    "FIPS":47091,
    "county":"Johnson County",
    "number":14.48,
    "rate":0.7991611016060489,
    "population":18119
  },
  {
    "state":"IA",
    "FIPS":19109,
    "county":"Kossuth County",
    "number":49.12,
    "rate":3.1997915445247864,
    "population":15351
  },
  {
    "state":"TN",
    "FIPS":47087,
    "county":"Jackson County",
    "number":896.58,
    "rate":77.76736924277908,
    "population":11529
  },
  {
    "state":"IA",
    "FIPS":19107,
    "county":"Keokuk County",
    "number":76.99,
    "rate":7.404308520869398,
    "population":10398
  },
  {
    "state":"TN",
    "FIPS":47083,
    "county":"Houston County",
    "number":347.0699999999999,
    "rate":41.20503383592543,
    "population":8423
  },
  {
    "state":"IA",
    "FIPS":19105,
    "county":"Jones County",
    "number":976.3900000000001,
    "rate":47.35389689121684,
    "population":20619
  },
  {
    "state":"TN",
    "FIPS":47075,
    "county":"Haywood County",
    "number":3408.5300000000007,
    "rate":186.84043194650008,
    "population":18243
  },
  {
    "state":"IA",
    "FIPS":19101,
    "county":"Jefferson County",
    "number":1707.1700000000005,
    "rate":99.92800280964649,
    "population":17084
  },
  {
    "state":"TN",
    "FIPS":47071,
    "county":"Hardin County",
    "number":1223.0700000000002,
    "rate":46.995965417867446,
    "population":26025
  },
  {
    "state":"IA",
    "FIPS":19099,
    "county":"Jasper County",
    "number":8088.429999999996,
    "rate":221.33400831873897,
    "population":36544
  },
  {
    "state":"TN",
    "FIPS":47067,
    "county":"Hancock County",
    "number":502.3,
    "rate":75.20586914208714,
    "population":6679
  },
  {
    "state":"IA",
    "FIPS":19097,
    "county":"Jackson County",
    "number":1573.9800000000005,
    "rate":79.94209964955053,
    "population":19689
  },
  {
    "state":"TN",
    "FIPS":47063,
    "county":"Hamblen County",
    "number":54649.82000000009,
    "rate":871.1494747581032,
    "population":62733
  },
  {
    "state":"IA",
    "FIPS":19095,
    "county":"Iowa County",
    "number":1090.4900000000002,
    "rate":67.28927557694682,
    "population":16206
  },
  {
    "state":"TN",
    "FIPS":47059,
    "county":"Greene County",
    "number":5702.78,
    "rate":83.0897222950724,
    "population":68634
  },
  {
    "state":"IA",
    "FIPS":19093,
    "county":"Ida County",
    "number":373.87999999999994,
    "rate":52.72599069242701,
    "population":7091
  },
  {
    "state":"TN",
    "FIPS":47055,
    "county":"Giles County",
    "number":2233.5300000000007,
    "rate":77.15662567362169,
    "population":28948
  },
  {
    "state":"IA",
    "FIPS":19091,
    "county":"Humboldt County",
    "number":1060.5699999999997,
    "rate":108.9664029590054,
    "population":9733
  },
  {
    "state":"TN",
    "FIPS":47047,
    "county":"Fayette County",
    "number":2053.63,
    "rate":53.19044782304644,
    "population":38609
  },
  {
    "state":"AL",
    "FIPS":1085,
    "county":"Lowndes County",
    "number":323.85999999999996,
    "rate":29.810382916053012,
    "population":10864
  },
  {
    "state":"IA",
    "FIPS":19087,
    "county":"Henry County",
    "number":23.27,
    "rate":1.1570206841686557,
    "population":20112
  },
  {
    "state":"TN",
    "FIPS":47043,
    "county":"Dickson County",
    "number":7551.62,
    "rate":150.52963103235194,
    "population":50167
  },
  {
    "state":"IA",
    "FIPS":19085,
    "county":"Harrison County",
    "number":2387.7200000000003,
    "rate":164.44352617079892,
    "population":14520
  },
  {
    "state":"TN",
    "FIPS":47039,
    "county":"Decatur County",
    "number":21.28,
    "rate":1.826923076923077,
    "population":11648
  },
  {
    "state":"IA",
    "FIPS":19083,
    "county":"Hardin County",
    "number":1428.4599999999994,
    "rate":82.19933248935432,
    "population":17378
  },
  {
    "state":"TN",
    "FIPS":47035,
    "county":"Cumberland County",
    "number":34896.72,
    "rate":611.8260076792258,
    "population":57037
  },
  {
    "state":"IA",
    "FIPS":19081,
    "county":"Hancock County",
    "number":537.17,
    "rate":48.11626657112146,
    "population":11164
  },
  {
    "state":"TN",
    "FIPS":47031,
    "county":"Coffee County",
    "number":7434.480000000001,
    "rate":139.91154939119636,
    "population":53137
  },
  {
    "state":"IA",
    "FIPS":19079,
    "county":"Hamilton County",
    "number":2428.42,
    "rate":158.63731382283774,
    "population":15308
  },
  {
    "state":"TN",
    "FIPS":47027,
    "county":"Clay County",
    "number":192.33,
    "rate":24.65769230769231,
    "population":7800
  },
  {
    "state":"IA",
    "FIPS":19077,
    "county":"Guthrie County",
    "number":103.49000000000001,
    "rate":9.608207223099063,
    "population":10771
  },
  {
    "state":"TN",
    "FIPS":47023,
    "county":"Chester County",
    "number":1779.5499999999988,
    "rate":103.31204644412183,
    "population":17225
  },
  {
    "state":"IA",
    "FIPS":19075,
    "county":"Grundy County",
    "number":167.88999999999996,
    "rate":13.514449005876195,
    "population":12423
  },
  {
    "state":"TN",
    "FIPS":47019,
    "county":"Carter County",
    "number":40404.62,
    "rate":704.2076826547686,
    "population":57376
  },
  {
    "state":"IA",
    "FIPS":19073,
    "county":"Greene County",
    "number":56.82,
    "rate":6.202379652876324,
    "population":9161
  },
  {
    "state":"TN",
    "FIPS":47015,
    "county":"Cannon County",
    "number":318.36,
    "rate":22.999566536627654,
    "population":13842
  },
  {
    "state":"IA",
    "FIPS":19071,
    "county":"Fremont County",
    "number":241.32999999999998,
    "rate":33.82814690215867,
    "population":7134
  },
  {
    "state":"TN",
    "FIPS":47011,
    "county":"Bradley County",
    "number":10040.83,
    "rate":99.29912873206285,
    "population":101117
  },
  {
    "state":"IA",
    "FIPS":19069,
    "county":"Franklin County",
    "number":724.0599999999997,
    "rate":68.78776363290896,
    "population":10526
  },
  {
    "state":"TN",
    "FIPS":47007,
    "county":"Bledsoe County",
    "number":261.59999999999997,
    "rate":20.467882012362097,
    "population":12781
  },
  {
    "state":"IA",
    "FIPS":19067,
    "county":"Floyd County",
    "number":926.5800000000003,
    "rate":57.423153197818564,
    "population":16136
  },
  {
    "state":"TN",
    "FIPS":47003,
    "county":"Bedford County",
    "number":1993.8499999999997,
    "rate":43.91740088105726,
    "population":45400
  },
  {
    "state":"IA",
    "FIPS":19065,
    "county":"Fayette County",
    "number":119.25999999999999,
    "rate":5.735308261998653,
    "population":20794
  },
  {
    "state":"IA",
    "FIPS":19063,
    "county":"Emmet County",
    "number":1488.7400000000005,
    "rate":148.91867560268085,
    "population":9997
  },
  {
    "state":"FL",
    "FIPS":12133,
    "county":"Washington County",
    "number":1621.7399999999996,
    "rate":65.24278875165948,
    "population":24857
  },
  {
    "state":"IA",
    "FIPS":19061,
    "county":"Dubuque County",
    "number":32036.019999999993,
    "rate":336.70026380232684,
    "population":95147
  },
  {
    "state":"IA",
    "FIPS":19059,
    "county":"Dickinson County",
    "number":426.73999999999995,
    "rate":25.154140878278806,
    "population":16965
  },
  {
    "state":"AL",
    "FIPS":1083,
    "county":"Limestone County",
    "number":17499.42,
    "rate":200.3069949520964,
    "population":87363
  },
  {
    "state":"IA",
    "FIPS":19055,
    "county":"Delaware County",
    "number":112.08,
    "rate":6.378329160027317,
    "population":17572
  },
  {
    "state":"IA",
    "FIPS":19051,
    "county":"Davis County",
    "number":665.69,
    "rate":76.43701917556551,
    "population":8709
  },
  {
    "state":"IA",
    "FIPS":19049,
    "county":"Dallas County",
    "number":10350.68,
    "rate":143.51825404528503,
    "population":72121
  },
  {
    "state":"IA",
    "FIPS":19047,
    "county":"Crawford County",
    "number":667.0799999999999,
    "rate":38.546168958742626,
    "population":17306
  },
  {
    "state":"FL",
    "FIPS":12125,
    "county":"Union County",
    "number":1981.1799999999994,
    "rate":130.00721832141213,
    "population":15239
  },
  {
    "state":"IA",
    "FIPS":19045,
    "county":"Clinton County",
    "number":4346.49,
    "rate":89.20817683640169,
    "population":48723
  },
  {
    "state":"IA",
    "FIPS":19043,
    "county":"Clayton County",
    "number":19.1,
    "rate":1.0650161704025873,
    "population":17934
  },
  {
    "state":"FL",
    "FIPS":12123,
    "county":"Taylor County",
    "number":1476.7499999999998,
    "rate":64.94348915959364,
    "population":22739
  },
  {
    "state":"IA",
    "FIPS":19041,
    "county":"Clay County",
    "number":131.55,
    "rate":7.942401738815433,
    "population":16563
  },
  {
    "state":"IA",
    "FIPS":19039,
    "county":"Clarke County",
    "number":32.62,
    "rate":3.4925053533190575,
    "population":9340
  },
  {
    "state":"FL",
    "FIPS":12121,
    "county":"Suwannee County",
    "number":1604.4299999999998,
    "rate":36.81912061685331,
    "population":43576
  },
  {
    "state":"IA",
    "FIPS":19037,
    "county":"Chickasaw County",
    "number":150.61999999999998,
    "rate":12.275468622656884,
    "population":12270
  },
  {
    "state":"IA",
    "FIPS":19035,
    "county":"Cherokee County",
    "number":937.4599999999999,
    "rate":78.24555546281611,
    "population":11981
  },
  {
    "state":"FL",
    "FIPS":12119,
    "county":"Sumter County",
    "number":4612.66,
    "rate":44.86019664860975,
    "population":102823
  },
  {
    "state":"IA",
    "FIPS":19033,
    "county":"Cerro Gordo County",
    "number":117938.19,
    "rate":2698.135251996065,
    "population":43711
  },
  {
    "state":"IA",
    "FIPS":19031,
    "county":"Cedar County",
    "number":221.03,
    "rate":11.996200814111262,
    "population":18425
  },
  {
    "state":"IA",
    "FIPS":19029,
    "county":"Cass County",
    "number":539.0300000000001,
    "rate":39.287900874635575,
    "population":13720
  },
  {
    "state":"IA",
    "FIPS":19027,
    "county":"Carroll County",
    "number":1059.67,
    "rate":51.25616716648931,
    "population":20674
  },
  {
    "state":"AL",
    "FIPS":1081,
    "county":"Lee County",
    "number":256193.90999999986,
    "rate":1730.572210213455,
    "population":148040
  },
  {
    "state":"IA",
    "FIPS":19023,
    "county":"Butler County",
    "number":13.12,
    "rate":0.8760098818187887,
    "population":14977
  },
  {
    "state":"IA",
    "FIPS":19019,
    "county":"Buchanan County",
    "number":2476.5599999999995,
    "rate":118.25804603189759,
    "population":20942
  },
  {
    "state":"IA",
    "FIPS":19015,
    "county":"Boone County",
    "number":3319.9600000000005,
    "rate":126.55180300373561,
    "population":26234
  },
  {
    "state":"IA",
    "FIPS":19011,
    "county":"Benton County",
    "number":273.4,
    "rate":10.57190363868373,
    "population":25861
  },
  {
    "state":"IA",
    "FIPS":19007,
    "county":"Appanoose County",
    "number":297.02,
    "rate":23.367162300369756,
    "population":12711
  },
  {
    "state":"NE",
    "FIPS":31185,
    "county":"York County",
    "number":2123.4899999999993,
    "rate":153.7090119435396,
    "population":13815
  },
  {
    "state":"UT",
    "FIPS":49047,
    "county":"Uintah County",
    "number":477.0800000000001,
    "rate":13.7741078646495,
    "population":34636
  },
  {
    "state":"KS",
    "FIPS":20087,
    "county":"Jefferson County",
    "number":7652.69,
    "rate":404.8828104333104,
    "population":18901
  },
  {
    "state":"CA",
    "FIPS":6007,
    "county":"Butte County",
    "number":34891.27999999998,
    "rate":157.68003289964244,
    "population":221279
  },
  {
    "state":"IA",
    "FIPS":19025,
    "county":"Calhoun County",
    "number":14.19,
    "rate":1.4318869828456104,
    "population":9910
  },
  {
    "state":"AL",
    "FIPS":1051,
    "county":"Elmore County",
    "number":2795.870000000001,
    "rate":34.7779629813912,
    "population":80392
  },
  {
    "state":"NE",
    "FIPS":31019,
    "county":"Buffalo County",
    "number":3589.660000000001,
    "rate":75.34338006884396,
    "population":47644
  },
  {
    "state":"WI",
    "FIPS":55013,
    "county":"Burnett County",
    "number":69.21000000000001,
    "rate":4.506739597577653,
    "population":15357
  },
  {
    "state":"GA",
    "FIPS":13321,
    "county":"Worth County",
    "number":693.47,
    "rate":32.29948765719609,
    "population":21470
  },
  {
    "state":"FL",
    "FIPS":12113,
    "county":"Santa Rosa County",
    "number":12559.68000000001,
    "rate":79.29191025139212,
    "population":158398
  },
  {
    "state":"IA",
    "FIPS":19021,
    "county":"Buena Vista County",
    "number":13.51,
    "rate":0.6574849133735644,
    "population":20548
  },
  {
    "state":"VA",
    "FIPS":51800,
    "county":"Suffolk City",
    "number":19934.329999999998,
    "rate":234.01770306281765,
    "population":85183
  },
  {
    "state":"WI",
    "FIPS":55005,
    "county":"Barron County",
    "number":995.5100000000002,
    "rate":21.746947156869176,
    "population":45777
  },
  {
    "state":"GA",
    "FIPS":13319,
    "county":"Wilkinson County",
    "number":455.15000000000003,
    "rate":47.69964368057011,
    "population":9542
  },
  {
    "state":"FL",
    "FIPS":12111,
    "county":"St Lucie County",
    "number":159202.14999999988,
    "rate":561.442768524363,
    "population":283559
  },
  {
    "state":"IA",
    "FIPS":19017,
    "county":"Bremer County",
    "number":263.58,
    "rate":10.774639251113927,
    "population":24463
  },
  {
    "state":"NE",
    "FIPS":31011,
    "county":"Boone County",
    "number":105.91,
    "rate":19.587571666358425,
    "population":5407
  },
  {
    "state":"GA",
    "FIPS":13317,
    "county":"Wilkes County",
    "number":177.69,
    "rate":17.68763687039618,
    "population":10046
  },
  {
    "state":"AL",
    "FIPS":1003,
    "county":"Baldwin County",
    "number":58764.82999999998,
    "rate":308.3780521722702,
    "population":190561
  },
  {
    "state":"FL",
    "FIPS":12107,
    "county":"Putnam County",
    "number":6474.610000000001,
    "rate":88.5489407677895,
    "population":73119
  },
  {
    "state":"IA",
    "FIPS":19009,
    "county":"Audubon County",
    "number":260.86,
    "rate":44.394145677331515,
    "population":5876
  },
  {
    "state":"AL",
    "FIPS":1029,
    "county":"Cleburne County",
    "number":39.44,
    "rate":2.6437860302989677,
    "population":14918
  },
  {
    "state":"NE",
    "FIPS":31003,
    "county":"Antelope County",
    "number":466.92999999999995,
    "rate":71.61503067484662,
    "population":6520
  },
  {
    "state":"GA",
    "FIPS":13313,
    "county":"Whitfield County",
    "number":6939.209999999999,
    "rate":67.24887825016717,
    "population":103187
  },
  {
    "state":"AL",
    "FIPS":1049,
    "county":"Dekalb County",
    "number":2746.59,
    "rate":38.72254335260116,
    "population":70930
  },
  {
    "state":"FL",
    "FIPS":12069,
    "county":"Lake County",
    "number":74452.88000000005,
    "rate":245.3546877574561,
    "population":303450
  },
  {
    "state":"VT",
    "FIPS":50005,
    "county":"Caledonia County",
    "number":34.120000000000005,
    "rate":1.0972825213056763,
    "population":31095
  },
  {
    "state":"NC",
    "FIPS":37193,
    "county":"Wilkes County",
    "number":3617.5400000000004,
    "rate":52.2690362664355,
    "population":69210
  },
  {
    "state":"GA",
    "FIPS":13305,
    "county":"Wayne County",
    "number":197.19000000000005,
    "rate":6.49270685851635,
    "population":30371
  },
  {
    "state":"FL",
    "FIPS":12067,
    "county":"Lafayette County",
    "number":48.589999999999996,
    "rate":5.520336287207453,
    "population":8802
  },
  {
    "state":"NC",
    "FIPS":37185,
    "county":"Warren County",
    "number":549.48,
    "rate":26.681557735262697,
    "population":20594
  },
  {
    "state":"PA",
    "FIPS":42129,
    "county":"Westmoreland County",
    "number":170298.11999999968,
    "rate":469.0116221426595,
    "population":363100
  },
  {
    "state":"GA",
    "FIPS":13303,
    "county":"Washington County",
    "number":2469.2200000000003,
    "rate":118.38807115117228,
    "population":20857
  },
  {
    "state":"PA",
    "FIPS":42121,
    "county":"Venango County",
    "number":2441.0799999999995,
    "rate":45.00931133032174,
    "population":54235
  },
  {
    "state":"GA",
    "FIPS":13301,
    "county":"Warren County",
    "number":628.77,
    "rate":113.0271436275391,
    "population":5563
  },
  {
    "state":"FL",
    "FIPS":12063,
    "county":"Jackson County",
    "number":2052.1399999999994,
    "rate":41.89750918742343,
    "population":48980
  },
  {
    "state":"NC",
    "FIPS":37169,
    "county":"Stokes County",
    "number":1207.25,
    "rate":25.820215587304304,
    "population":46756
  },
  {
    "state":"FL",
    "FIPS":12061,
    "county":"Indian River County",
    "number":52105.84999999987,
    "rate":370.57528732362215,
    "population":140608
  },
  {
    "state":"NC",
    "FIPS":37161,
    "county":"Rutherford County",
    "number":3292.2199999999993,
    "rate":48.96004045030709,
    "population":67243
  },
  {
    "state":"PA",
    "FIPS":42105,
    "county":"Potter County",
    "number":563.14,
    "rate":31.951205673758864,
    "population":17625
  },
  {
    "state":"GA",
    "FIPS":13297,
    "county":"Walton County",
    "number":2189.11,
    "rate":25.794596250603885,
    "population":84867
  },
  {
    "state":"FL",
    "FIPS":12059,
    "county":"Holmes County",
    "number":224.67,
    "rate":11.390114068441063,
    "population":19725
  },
  {
    "state":"NC",
    "FIPS":37153,
    "county":"Richmond County",
    "number":4781.839999999999,
    "rate":103.09911386127939,
    "population":46381
  },
  {
    "state":"TX",
    "FIPS":48503,
    "county":"Young County",
    "number":1279.8199999999997,
    "rate":69.97375615090212,
    "population":18290
  },
  {
    "state":"PA",
    "FIPS":42097,
    "county":"Northumberland County",
    "number":6111.720000000001,
    "rate":64.63598290959855,
    "population":94556
  },
  {
    "state":"GA",
    "FIPS":13295,
    "county":"Walker County",
    "number":2355.1699999999996,
    "rate":34.541388008917046,
    "population":68184
  },
  {
    "state":"AR",
    "FIPS":5147,
    "county":"Woodruff County",
    "number":12.95,
    "rate":1.8314241267147504,
    "population":7071
  },
  {
    "state":"PA",
    "FIPS":42041,
    "county":"Cumberland County",
    "number":266545.29000000015,
    "rate":1114.3290913803633,
    "population":239198
  },
  {
    "state":"GA",
    "FIPS":13281,
    "county":"Towns County",
    "number":199.42,
    "rate":19.015924477925047,
    "population":10487
  },
  {
    "state":"NC",
    "FIPS":37167,
    "county":"Stanly County",
    "number":4610.050000000001,
    "rate":76.207991007224,
    "population":60493
  },
  {
    "state":"OH",
    "FIPS":39061,
    "county":"Hamilton County",
    "number":629731.8500000003,
    "rate":784.8543973677491,
    "population":802355
  },
  {
    "state":"NE",
    "FIPS":31109,
    "county":"Lancaster County",
    "number":494174.54999999993,
    "rate":1683.9071588481233,
    "population":293469
  },
  {
    "state":"AZ",
    "FIPS":4027,
    "county":"Yuma County",
    "number":103801.16000000003,
    "rate":513.1964165644902,
    "population":202264
  },
  {
    "state":"MT",
    "FIPS":30111,
    "county":"Yellowstone County",
    "number":387704.70999999985,
    "rate":2552.5697224270502,
    "population":151888
  },
  {
    "state":"FL",
    "FIPS":12037,
    "county":"Franklin County",
    "number":653.18,
    "rate":55.96606974552309,
    "population":11671
  },
  {
    "state":"NC",
    "FIPS":37065,
    "county":"Edgecombe County",
    "number":2080.62,
    "rate":37.34465304950282,
    "population":55714
  },
  {
    "state":"AR",
    "FIPS":5143,
    "county":"Washington County",
    "number":20250.989999999965,
    "rate":95.64354331378033,
    "population":211734
  },
  {
    "state":"IN",
    "FIPS":18147,
    "county":"Spencer County",
    "number":176.13,
    "rate":8.437365269461077,
    "population":20875
  },
  {
    "state":"TX",
    "FIPS":48415,
    "county":"Scurry County",
    "number":118.68,
    "rate":6.937916520519116,
    "population":17106
  },
  {
    "state":"PA",
    "FIPS":42009,
    "county":"Bedford County",
    "number":14807.640000000003,
    "rate":299.7558655033503,
    "population":49399
  },
  {
    "state":"GA",
    "FIPS":13273,
    "county":"Terrell County",
    "number":192.74999999999997,
    "rate":20.844598248080455,
    "population":9247
  },
  {
    "state":"IN",
    "FIPS":18135,
    "county":"Randolph County",
    "number":417.49000000000007,
    "rate":16.15986065415135,
    "population":25835
  },
  {
    "state":"IN",
    "FIPS":18111,
    "county":"Newton County",
    "number":765.2800000000001,
    "rate":54.35613324810001,
    "population":14079
  },
  {
    "state":"PA",
    "FIPS":42055,
    "county":"Franklin County",
    "number":12229.109999999995,
    "rate":80.67280607431934,
    "population":151589
  },
  {
    "state":"AR",
    "FIPS":5133,
    "county":"Sevier County",
    "number":81.63,
    "rate":4.753115174100384,
    "population":17174
  },
  {
    "state":"SC",
    "FIPS":45087,
    "county":"Union County",
    "number":2536.7999999999997,
    "rate":89.8873219474169,
    "population":28222
  },
  {
    "state":"IN",
    "FIPS":18107,
    "county":"Montgomery County",
    "number":4624.45,
    "rate":121.05256269305272,
    "population":38202
  },
  {
    "state":"SC",
    "FIPS":45079,
    "county":"Richland County",
    "number":244390.70999999985,
    "rate":620.789911526454,
    "population":393677
  },
  {
    "state":"IN",
    "FIPS":18103,
    "county":"Miami County",
    "number":2114.9600000000005,
    "rate":57.940934743301746,
    "population":36502
  },
  {
    "state":"NC",
    "FIPS":37071,
    "county":"Gaston County",
    "number":182707.9399999998,
    "rate":877.5428906264999,
    "population":208204
  },
  {
    "state":"TX",
    "FIPS":48331,
    "county":"Milam County",
    "number":292.52,
    "rate":12.116141324607545,
    "population":24143
  },
  {
    "state":"MI",
    "FIPS":26135,
    "county":"Oscoda County",
    "number":258.31,
    "rate":30.029063008602648,
    "population":8602
  },
  {
    "state":"PA",
    "FIPS":42039,
    "county":"Crawford County",
    "number":98843.58000000002,
    "rate":1127.5790554414787,
    "population":87660
  },
  {
    "state":"TX",
    "FIPS":48445,
    "county":"Terry County",
    "number":1448.7700000000004,
    "rate":114.89056304520226,
    "population":12610
  },
  {
    "state":"AR",
    "FIPS":5131,
    "county":"Sebastian County",
    "number":28176.370000000014,
    "rate":221.2166915286175,
    "population":127370
  },
  {
    "state":"SC",
    "FIPS":45071,
    "county":"Newberry County",
    "number":7468.679999999999,
    "rate":198.83076431594918,
    "population":37563
  },
  {
    "state":"IN",
    "FIPS":18099,
    "county":"Marshall County",
    "number":2592.149999999999,
    "rate":55.12280701754384,
    "population":47025
  },
  {
    "state":"SC",
    "FIPS":45047,
    "county":"Greenwood County",
    "number":8471.54,
    "rate":121.31141437429297,
    "population":69833
  },
  {
    "state":"IN",
    "FIPS":18087,
    "county":"Lagrange County",
    "number":1455.1899999999994,
    "rate":38.66586953633584,
    "population":37635
  },
  {
    "state":"AL",
    "FIPS":1041,
    "county":"Crenshaw County",
    "number":320.96999999999997,
    "rate":22.9723733180647,
    "population":13972
  },
  {
    "state":"SC",
    "FIPS":45031,
    "county":"Darlington County",
    "number":6690.25,
    "rate":98.14787647619745,
    "population":68165
  },
  {
    "state":"AL",
    "FIPS":1023,
    "county":"Choctaw County",
    "number":193.35999999999999,
    "rate":14.260638690168891,
    "population":13559
  },
  {
    "state":"IN",
    "FIPS":18079,
    "county":"Jennings County",
    "number":1076.78,
    "rate":38.208076076928535,
    "population":28182
  },
  {
    "state":"TX",
    "FIPS":48397,
    "county":"Rockwall County",
    "number":5363.03,
    "rate":64.62104781183727,
    "population":82992
  },
  {
    "state":"AR",
    "FIPS":5125,
    "county":"Saline County",
    "number":10010.749999999998,
    "rate":89.6474370455278,
    "population":111668
  },
  {
    "state":"SC",
    "FIPS":45023,
    "county":"Chester County",
    "number":1725.19,
    "rate":52.846990350742836,
    "population":32645
  },
  {
    "state":"IN",
    "FIPS":18075,
    "county":"Jay County",
    "number":650.02,
    "rate":30.417407580720635,
    "population":21370
  },
  {
    "state":"SC",
    "FIPS":45015,
    "county":"Berkeley County",
    "number":15631.41,
    "rate":82.49069886486572,
    "population":189493
  },
  {
    "state":"IN",
    "FIPS":18071,
    "county":"Jackson County",
    "number":5221.29,
    "rate":121.45359385903699,
    "population":42990
  },
  {
    "state":"IN",
    "FIPS":18055,
    "county":"Greene County",
    "number":462.83000000000004,
    "rate":14.012837203669502,
    "population":33029
  },
  {
    "state":"NC",
    "FIPS":37095,
    "county":"Hyde County",
    "number":55.33,
    "rate":9.642732659463226,
    "population":5738
  },
  {
    "state":"OH",
    "FIPS":39169,
    "county":"Wayne County",
    "number":22759.849999999984,
    "rate":197.928950343508,
    "population":114990
  },
  {
    "state":"AL",
    "FIPS":1039,
    "county":"Covington County",
    "number":394.19,
    "rate":10.425824539130895,
    "population":37809
  },
  {
    "state":"MI",
    "FIPS":26087,
    "county":"Lapeer County",
    "number":3957.7,
    "rate":44.880023587045265,
    "population":88184
  },
  {
    "state":"IN",
    "FIPS":18051,
    "county":"Gibson County",
    "number":3467.8000000000006,
    "rate":103.35906530356772,
    "population":33551
  },
  {
    "state":"IN",
    "FIPS":18047,
    "county":"Franklin County",
    "number":264.04,
    "rate":11.486992082136954,
    "population":22986
  },
  {
    "state":"TX",
    "FIPS":48215,
    "county":"Hidalgo County",
    "number":374853.38,
    "rate":464.08540035284284,
    "population":807725
  },
  {
    "state":"MI",
    "FIPS":26077,
    "county":"Kalamazoo County",
    "number":353340.5999999996,
    "rate":1385.5407419025944,
    "population":255020
  },
  {
    "state":"GA",
    "FIPS":13223,
    "county":"Paulding County",
    "number":4104.849999999999,
    "rate":28.296430590214104,
    "population":145066
  },
  {
    "state":"KY",
    "FIPS":21237,
    "county":"Wolfe County",
    "number":1560.27,
    "rate":217.06594323873122,
    "population":7188
  },
  {
    "state":"TX",
    "FIPS":48333,
    "county":"Mills County",
    "number":11.52,
    "rate":2.384599461809149,
    "population":4831
  },
  {
    "state":"AR",
    "FIPS":5117,
    "county":"Prairie County",
    "number":30.55,
    "rate":3.6170968505801566,
    "population":8446
  },
  {
    "state":"OK",
    "FIPS":40035,
    "county":"Craig County",
    "number":1760.9299999999996,
    "rate":119.62027036206777,
    "population":14721
  },
  {
    "state":"KY",
    "FIPS":21229,
    "county":"Washington County",
    "number":261.01,
    "rate":21.96684059922572,
    "population":11882
  },
  {
    "state":"TX",
    "FIPS":48317,
    "county":"Martin County",
    "number":496.91999999999996,
    "rate":99.34426229508196,
    "population":5002
  },
  {
    "state":"AR",
    "FIPS":5115,
    "county":"Pope County",
    "number":3458.71,
    "rate":55.14788653794027,
    "population":62717
  },
  {
    "state":"TX",
    "FIPS":48187,
    "county":"Guadalupe County",
    "number":98797.31,
    "rate":707.1396567273143,
    "population":139714
  },
  {
    "state":"MI",
    "FIPS":26063,
    "county":"Huron County",
    "number":2780.65,
    "rate":85.64806258855418,
    "population":32466
  },
  {
    "state":"IN",
    "FIPS":18177,
    "county":"Wayne County",
    "number":8869.939999999999,
    "rate":129.73248892074125,
    "population":68371
  },
  {
    "state":"AZ",
    "FIPS":4012,
    "county":"La Paz County",
    "number":109.92,
    "rate":5.417714032234215,
    "population":20289
  },
  {
    "state":"KY",
    "FIPS":21217,
    "county":"Taylor County",
    "number":4150.9800000000005,
    "rate":165.7143997764382,
    "population":25049
  },
  {
    "state":"IN",
    "FIPS":18023,
    "county":"Clinton County",
    "number":599.19,
    "rate":18.180963073095246,
    "population":32957
  },
  {
    "state":"TX",
    "FIPS":48291,
    "county":"Liberty County",
    "number":22078.6,
    "rate":288.567656938218,
    "population":76511
  },
  {
    "state":"MI",
    "FIPS":26115,
    "county":"Monroe County",
    "number":14434.749999999995,
    "rate":95.69577035269155,
    "population":150840
  },
  {
    "state":"KY",
    "FIPS":21209,
    "county":"Scott County",
    "number":2290.6200000000017,
    "rate":46.720649424818504,
    "population":49028
  },
  {
    "state":"AL",
    "FIPS":1021,
    "county":"Chilton County",
    "number":2828.5199999999995,
    "rate":64.71253060010523,
    "population":43709
  },
  {
    "state":"IN",
    "FIPS":18015,
    "county":"Carroll County",
    "number":438.98999999999995,
    "rate":21.84464570063694,
    "population":20096
  },
  {
    "state":"IL",
    "FIPS":17199,
    "county":"Williamson County",
    "number":15932.64,
    "rate":238.61973940392392,
    "population":66770
  },
  {
    "state":"KY",
    "FIPS":21205,
    "county":"Rowan County",
    "number":32682.00999999999,
    "rate":1395.831980866148,
    "population":23414
  },
  {
    "state":"IL",
    "FIPS":17191,
    "county":"Wayne County",
    "number":1433.4199999999998,
    "rate":86.24150171469827,
    "population":16621
  },
  {
    "state":"TX",
    "FIPS":48139,
    "county":"Ellis County",
    "number":8676.099999999997,
    "rate":56.40203866706537,
    "population":153826
  },
  {
    "state":"DE",
    "FIPS":10001,
    "county":"Kent County",
    "number":13045.109999999997,
    "rate":77.80414633855402,
    "population":167666
  },
  {
    "state":"MI",
    "FIPS":26039,
    "county":"Crawford County",
    "number":2925.63,
    "rate":209.197711834108,
    "population":13985
  },
  {
    "state":"KY",
    "FIPS":21197,
    "county":"Powell County",
    "number":864.8299999999999,
    "rate":69.2140856342537,
    "population":12495
  },
  {
    "state":"TX",
    "FIPS":48253,
    "county":"Jones County",
    "number":85.42,
    "rate":4.290306378704169,
    "population":19910
  },
  {
    "state":"AR",
    "FIPS":5107,
    "county":"Phillips County",
    "number":556.59,
    "rate":26.79520508376661,
    "population":20772
  },
  {
    "state":"PR",
    "FIPS":72149,
    "county":"Villalba Municipio",
    "number":2520.9299999999994,
    "rate":null,
    "population":null
  },
  {
    "state":"KY",
    "FIPS":21177,
    "county":"Muhlenberg County",
    "number":2579.69,
    "rate":82.26314614624191,
    "population":31359
  },
  {
    "state":"WY",
    "FIPS":56035,
    "county":"Sublette County",
    "number":197.25,
    "rate":18.944487130234343,
    "population":10412
  },
  {
    "state":"IL",
    "FIPS":17175,
    "county":"Stark County",
    "number":326.82000000000005,
    "rate":55.04800404244568,
    "population":5937
  },
  {
    "state":"KY",
    "FIPS":21193,
    "county":"Perry County",
    "number":9152.179999999997,
    "rate":323.6387425297923,
    "population":28279
  },
  {
    "state":"MI",
    "FIPS":26047,
    "county":"Emmet County",
    "number":70435.63999999998,
    "rate":2141.22632618939,
    "population":32895
  },
  {
    "state":"DE",
    "FIPS":10005,
    "county":"Sussex County",
    "number":55008.209999999985,
    "rate":270.7176885144246,
    "population":203194
  },
  {
    "state":"TX",
    "FIPS":48221,
    "county":"Hood County",
    "number":5504.509999999999,
    "rate":105.57982967623137,
    "population":52136
  },
  {
    "state":"AR",
    "FIPS":5103,
    "county":"Ouachita County",
    "number":1264.81,
    "rate":49.77411357286214,
    "population":25411
  },
  {
    "state":"MI",
    "FIPS":26017,
    "county":"Bay County",
    "number":25457.97,
    "rate":237.73831758245862,
    "population":107084
  },
  {
    "state":"GA",
    "FIPS":13193,
    "county":"Macon County",
    "number":419.63,
    "rate":29.398206529354074,
    "population":14274
  },
  {
    "state":"PR",
    "FIPS":72117,
    "county":"Rinc�n Municipio",
    "number":329.58000000000004,
    "rate":null,
    "population":null
  },
  {
    "state":"KY",
    "FIPS":21169,
    "county":"Metcalfe County",
    "number":607.1999999999999,
    "rate":60.823399779625355,
    "population":9983
  },
  {
    "state":"WY",
    "FIPS":56003,
    "county":"Big Horn County",
    "number":79.48,
    "rate":6.748174562744099,
    "population":11778
  },
  {
    "state":"IL",
    "FIPS":17159,
    "county":"Richland County",
    "number":1409.7100000000003,
    "rate":87.20754716981133,
    "population":16165
  },
  {
    "state":"OK",
    "FIPS":40009,
    "county":"Beckham County",
    "number":724.3999999999997,
    "rate":31.336246052688487,
    "population":23117
  },
  {
    "state":"TX",
    "FIPS":48057,
    "county":"Calhoun County",
    "number":1167.1900000000003,
    "rate":54.11925627115502,
    "population":21567
  },
  {
    "state":"MO",
    "FIPS":29201,
    "county":"Scott County",
    "number":3316.28,
    "rate":84.70918797415004,
    "population":39149
  },
  {
    "state":"PR",
    "FIPS":72101,
    "county":"Morovis Municipio",
    "number":2175.5399999999995,
    "rate":null,
    "population":null
  },
  {
    "state":"KY",
    "FIPS":21165,
    "county":"Menifee County",
    "number":960.9800000000001,
    "rate":152.19828951536272,
    "population":6314
  },
  {
    "state":"TX",
    "FIPS":48189,
    "county":"Hale County",
    "number":2559.3099999999995,
    "rate":70.47334508205748,
    "population":36316
  },
  {
    "state":"AR",
    "FIPS":5099,
    "county":"Nevada County",
    "number":93.86,
    "rate":10.54251375940694,
    "population":8903
  },
  {
    "state":"LA",
    "FIPS":22001,
    "county":"Acadia Parish",
    "number":4646.09,
    "rate":75.09075040809401,
    "population":61873
  },
  {
    "state":"OK",
    "FIPS":40063,
    "county":"Hughes County",
    "number":23.07,
    "rate":1.6735582154515778,
    "population":13785
  },
  {
    "state":"CO",
    "FIPS":8087,
    "county":"Morgan County",
    "number":930.3399999999999,
    "rate":32.810439076000705,
    "population":28355
  },
  {
    "state":"IL",
    "FIPS":17147,
    "county":"Piatt County",
    "number":129.62,
    "rate":7.852426243411886,
    "population":16507
  },
  {
    "state":"PR",
    "FIPS":72053,
    "county":"Fajardo Municipio",
    "number":14457.490000000002,
    "rate":null,
    "population":null
  },
  {
    "state":"VA",
    "FIPS":51179,
    "county":"Stafford County",
    "number":3475.7299999999996,
    "rate":25.8660901662524,
    "population":134374
  },
  {
    "state":"KY",
    "FIPS":21153,
    "county":"Magoffin County",
    "number":156.84,
    "rate":12.036838066001536,
    "population":13030
  },
  {
    "state":"TX",
    "FIPS":48039,
    "county":"Brazoria County",
    "number":84181.21000000005,
    "rate":259.2608185477539,
    "population":324697
  },
  {
    "state":"GA",
    "FIPS":13179,
    "county":"Liberty County",
    "number":1434,
    "rate":21.92962334266183,
    "population":65391
  },
  {
    "state":"IL",
    "FIPS":17135,
    "county":"Montgomery County",
    "number":1500.6800000000003,
    "rate":50.485449957947864,
    "population":29725
  },
  {
    "state":"VA",
    "FIPS":51155,
    "county":"Pulaski County",
    "number":2533.62,
    "rate":72.91622298327913,
    "population":34747
  },
  {
    "state":"PR",
    "FIPS":72005,
    "county":"Aguadilla",
    "number":11669.860000000002,
    "rate":null,
    "population":null
  },
  {
    "state":"KY",
    "FIPS":21141,
    "county":"Logan County",
    "number":805.0100000000001,
    "rate":30.146799985020415,
    "population":26703
  },
  {
    "state":"TX",
    "FIPS":48141,
    "county":"El Paso County",
    "number":314639.82000000024,
    "rate":378.56234298749706,
    "population":831144
  },
  {
    "state":"AR",
    "FIPS":5093,
    "county":"Mississippi County",
    "number":699.65,
    "rate":15.360043907793633,
    "population":45550
  },
  {
    "state":"TX",
    "FIPS":48015,
    "county":"Austin County",
    "number":24202.750000000004,
    "rate":845.5995388162953,
    "population":28622
  },
  {
    "state":"PR",
    "FIPS":72135,
    "county":"Toa Alta",
    "number":3109.07,
    "rate":null,
    "population":null
  },
  {
    "state":"GA",
    "FIPS":13173,
    "county":"Lanier County",
    "number":28.84,
    "rate":2.7613941018766752,
    "population":10444
  },
  {
    "state":"MO",
    "FIPS":29213,
    "county":"Taney County",
    "number":32696.43000000001,
    "rate":616.1929441031249,
    "population":53062
  },
  {
    "state":"PR",
    "FIPS":72039,
    "county":"Ciales Municipio",
    "number":2051.8399999999992,
    "rate":null,
    "population":null
  },
  {
    "state":"GA",
    "FIPS":13161,
    "county":"Jeff Davis County",
    "number":445.49000000000007,
    "rate":29.47532089453487,
    "population":15114
  },
  {
    "state":"CO",
    "FIPS":8077,
    "county":"Mesa County",
    "number":5577.75,
    "rate":37.75791340608161,
    "population":147724
  },
  {
    "state":"IL",
    "FIPS":17107,
    "county":"Logan County",
    "number":228.73,
    "rate":7.623570976235709,
    "population":30003
  },
  {
    "state":"VA",
    "FIPS":51099,
    "county":"King George County",
    "number":180.2,
    "rate":7.322821846553966,
    "population":24608
  },
  {
    "state":"KY",
    "FIPS":21113,
    "county":"Jessamine County",
    "number":2477.959999999999,
    "rate":49.99616649516775,
    "population":49563
  },
  {
    "state":"PR",
    "FIPS":72023,
    "county":"",
    "number":8134.479999999999,
    "rate":null,
    "population":null
  },
  {
    "state":"GA",
    "FIPS":13159,
    "county":"Jasper County",
    "number":569.6000000000001,
    "rate":41.89467490438365,
    "population":13596
  },
  {
    "state":"CO",
    "FIPS":8075,
    "county":"Logan County",
    "number":1024.3699999999997,
    "rate":45.30004864458496,
    "population":22613
  },
  {
    "state":"IL",
    "FIPS":17099,
    "county":"La Salle County",
    "number":18606.240000000005,
    "rate":164.82911358764022,
    "population":112882
  },
  {
    "state":"VA",
    "FIPS":51083,
    "county":"Halifax County",
    "number":2076.9200000000005,
    "rate":58.05668921563148,
    "population":35774
  },
  {
    "state":"KY",
    "FIPS":21105,
    "county":"Hickman County",
    "number":15.12,
    "rate":3.1738035264483626,
    "population":4764
  },
  {
    "state":"AL",
    "FIPS":1113,
    "county":"Russell County",
    "number":1728.4899999999998,
    "rate":29.93782042399889,
    "population":57736
  },
  {
    "state":"GA",
    "FIPS":13155,
    "county":"Irwin County",
    "number":188.50999999999996,
    "rate":19.63645833333333,
    "population":9600
  },
  {
    "state":"IL",
    "FIPS":17063,
    "county":"Grundy County",
    "number":6207.5,
    "rate":123.77866400797608,
    "population":50150
  },
  {
    "state":"PR",
    "FIPS":72099,
    "county":"Moca Municipio",
    "number":1489.92,
    "rate":null,
    "population":null
  },
  {
    "state":"AR",
    "FIPS":5075,
    "county":"Lawrence County",
    "number":527.73,
    "rate":30.97188802159751,
    "population":17039
  },
  {
    "state":"VA",
    "FIPS":51011,
    "county":"Appomattox County",
    "number":1528.3399999999997,
    "rate":100.92049656629686,
    "population":15144
  },
  {
    "state":"KY",
    "FIPS":21069,
    "county":"Fleming County",
    "number":2485.5599999999986,
    "rate":171.04046242774558,
    "population":14532
  },
  {
    "state":"GA",
    "FIPS":13137,
    "county":"Habersham County",
    "number":1571.8700000000003,
    "rate":36.16570416216093,
    "population":43463
  },
  {
    "state":"IL",
    "FIPS":17007,
    "county":"Boone County",
    "number":6881.42,
    "rate":127.71752041573868,
    "population":53880
  },
  {
    "state":"CA",
    "FIPS":6029,
    "county":"Kern County",
    "number":148344.70000000016,
    "rate":173.19831127072695,
    "population":856502
  },
  {
    "state":"KS",
    "FIPS":20175,
    "county":"Seward County",
    "number":211.45,
    "rate":9.015904148722978,
    "population":23453
  },
  {
    "state":"GA",
    "FIPS":13099,
    "county":"Early County",
    "number":736.0100000000001,
    "rate":69.4021687883074,
    "population":10605
  },
  {
    "state":"CA",
    "FIPS":6025,
    "county":"Imperial County",
    "number":57936.279999999984,
    "rate":326.5064274161279,
    "population":177443
  },
  {
    "state":"KS",
    "FIPS":20159,
    "county":"Rice County",
    "number":149.01,
    "rate":14.887601158956937,
    "population":10009
  },
  {
    "state":"WV",
    "FIPS":54093,
    "county":"Tucker County",
    "number":31,
    "rate":4.466215242760409,
    "population":6941
  },
  {
    "state":"GA",
    "FIPS":13091,
    "county":"Dodge County",
    "number":2725.78,
    "rate":127.65325715356155,
    "population":21353
  },
  {
    "state":"AL",
    "FIPS":1063,
    "county":"Greene County",
    "number":359.40999999999997,
    "rate":40.717117933612776,
    "population":8827
  },
  {
    "state":"CA",
    "FIPS":6021,
    "county":"Glenn County",
    "number":843.4800000000001,
    "rate":30.191137518791617,
    "population":27938
  },
  {
    "state":"KS",
    "FIPS":20143,
    "county":"Ottawa County",
    "number":264.20000000000005,
    "rate":43.59016663916846,
    "population":6061
  },
  {
    "state":"WV",
    "FIPS":54061,
    "county":"Monongalia County",
    "number":44835.679999999986,
    "rate":445.98860053117926,
    "population":100531
  },
  {
    "state":"GA",
    "FIPS":13083,
    "county":"Dade County",
    "number":137.4,
    "rate":8.301613195577307,
    "population":16551
  },
  {
    "state":"KS",
    "FIPS":20139,
    "county":"Osage County",
    "number":636.9300000000001,
    "rate":39.3823038397329,
    "population":16173
  },
  {
    "state":"WV",
    "FIPS":54053,
    "county":"Mason County",
    "number":4031.08,
    "rate":148.08169862611123,
    "population":27222
  },
  {
    "state":"GA",
    "FIPS":13081,
    "county":"Crisp County",
    "number":27724.390000000014,
    "rate":1171.9317749503325,
    "population":23657
  },
  {
    "state":"CA",
    "FIPS":6017,
    "county":"El Dorado County",
    "number":40562.95999999999,
    "rate":224.59488939951825,
    "population":180605
  },
  {
    "state":"KS",
    "FIPS":20127,
    "county":"Morris County",
    "number":330.4699999999999,
    "rate":56.48094342847375,
    "population":5851
  },
  {
    "state":"WV",
    "FIPS":54029,
    "county":"Hancock County",
    "number":88327.83999999998,
    "rate":2912.4188868372457,
    "population":30328
  },
  {
    "state":"AL",
    "FIPS":1103,
    "county":"Morgan County",
    "number":15208.619999999966,
    "rate":126.67832779429743,
    "population":120057
  },
  {
    "state":"GA",
    "FIPS":13075,
    "county":"Cook County",
    "number":1099,
    "rate":65.18773355477785,
    "population":16859
  },
  {
    "state":"KS",
    "FIPS":20123,
    "county":"Mitchell County",
    "number":257.07,
    "rate":40.53453169347209,
    "population":6342
  },
  {
    "state":"WV",
    "FIPS":54021,
    "county":"Gilmer County",
    "number":63.56,
    "rate":7.240829346092504,
    "population":8778
  },
  {
    "state":"GA",
    "FIPS":13073,
    "county":"Columbia County",
    "number":28384.619999999984,
    "rate":214.13304565617537,
    "population":132556
  },
  {
    "state":"CA",
    "FIPS":6015,
    "county":"Del Norte County",
    "number":96.97999999999999,
    "rate":3.4358392971019627,
    "population":28226
  },
  {
    "state":"KS",
    "FIPS":20119,
    "county":"Meade County",
    "number":16.28,
    "rate":3.6874292185730466,
    "population":4415
  },
  {
    "state":"WV",
    "FIPS":54013,
    "county":"Calhoun County",
    "number":22.71,
    "rate":2.991700698195231,
    "population":7591
  },
  {
    "state":"GA",
    "FIPS":13071,
    "county":"Colquitt County",
    "number":11812.900000000001,
    "rate":256.27291463282353,
    "population":46095
  },
  {
    "state":"KS",
    "FIPS":20115,
    "county":"Marion County",
    "number":107.98,
    "rate":8.727772389266086,
    "population":12372
  },
  {
    "state":"WV",
    "FIPS":54005,
    "county":"Boone County",
    "number":423.41,
    "rate":17.355002664262003,
    "population":24397
  },
  {
    "state":"GA",
    "FIPS":13069,
    "county":"Coffee County",
    "number":3401.1399999999994,
    "rate":78.92557956048545,
    "population":43093
  },
  {
    "state":"NC",
    "FIPS":37007,
    "county":"Anson County",
    "number":741.5400000000001,
    "rate":28.140867519259235,
    "population":26351
  },
  {
    "state":"TX",
    "FIPS":48267,
    "county":"Kimble County",
    "number":64.26,
    "rate":14.172915747684165,
    "population":4534
  },
  {
    "state":"MI",
    "FIPS":26103,
    "county":"Marquette County",
    "number":3800.42,
    "rate":56.06166101194866,
    "population":67790
  },
  {
    "state":"TX",
    "FIPS":48381,
    "county":"Randall County",
    "number":3660.6499999999996,
    "rate":29.309350905145838,
    "population":124897
  },
  {
    "state":"AR",
    "FIPS":5123,
    "county":"St Francis County",
    "number":143.21,
    "rate":5.136104436394937,
    "population":27883
  },
  {
    "state":"SC",
    "FIPS":45007,
    "county":"Anderson County",
    "number":20133.95,
    "rate":106.32350223114092,
    "population":189365
  },
  {
    "state":"IN",
    "FIPS":18067,
    "county":"Howard County",
    "number":30196.400000000023,
    "rate":363.93043520181294,
    "population":82973
  },
  {
    "state":"CA",
    "FIPS":6011,
    "county":"Colusa County",
    "number":1933.0400000000004,
    "rate":90.34163667803901,
    "population":21397
  },
  {
    "state":"KS",
    "FIPS":20103,
    "county":"Leavenworth County",
    "number":2495.3199999999993,
    "rate":32.10281876777007,
    "population":77729
  },
  {
    "state":"GA",
    "FIPS":13063,
    "county":"Clayton County",
    "number":12471.539999999997,
    "rate":46.84093700352671,
    "population":266253
  },
  {
    "state":"UT",
    "FIPS":49015,
    "county":"Emery County",
    "number":302.08,
    "rate":27.711219154206034,
    "population":10901
  },
  {
    "state":"KS",
    "FIPS":20071,
    "county":"Greeley County",
    "number":66.85,
    "rate":52.8041074249605,
    "population":1266
  },
  {
    "state":"GA",
    "FIPS":13047,
    "county":"Catoosa County",
    "number":50870.109999999884,
    "rate":783.0869290805234,
    "population":64961
  },
  {
    "state":"UT",
    "FIPS":49007,
    "county":"Carbon County",
    "number":974.1599999999997,
    "rate":45.834195916062846,
    "population":21254
  },
  {
    "state":"KS",
    "FIPS":20067,
    "county":"Grant County",
    "number":57.44,
    "rate":7.315333672949566,
    "population":7852
  },
  {
    "state":"WV",
    "FIPS":54035,
    "county":"Jackson County",
    "number":1230.5900000000001,
    "rate":42.028346994535525,
    "population":29280
  },
  {
    "state":"AR",
    "FIPS":5029,
    "county":"Conway County",
    "number":948.89,
    "rate":44.72520739064856,
    "population":21216
  },
  {
    "state":"GA",
    "FIPS":13045,
    "county":"Carroll County",
    "number":14130.62999999999,
    "rate":126.78555086000368,
    "population":111453
  },
  {
    "state":"CA",
    "FIPS":6001,
    "county":"Alameda County",
    "number":312876.9899999999,
    "rate":201.0455846076045,
    "population":1556249
  },
  {
    "state":"KS",
    "FIPS":20063,
    "county":"Gove County",
    "number":170.57999999999998,
    "rate":62.6901874310915,
    "population":2721
  },
  {
    "state":"AL",
    "FIPS":1099,
    "county":"Monroe County",
    "number":1239.9399999999991,
    "rate":54.84276173205357,
    "population":22609
  },
  {
    "state":"GA",
    "FIPS":13043,
    "county":"Candler County",
    "number":718.6100000000001,
    "rate":64.59415730337079,
    "population":11125
  },
  {
    "state":"NY",
    "FIPS":36113,
    "county":"Warren County",
    "number":5387.450000000001,
    "rate":82.33914106678894,
    "population":65430
  },
  {
    "state":"OR",
    "FIPS":41057,
    "county":"Tillamook County",
    "number":43.46,
    "rate":1.7160230593066415,
    "population":25326
  },
  {
    "state":"GA",
    "FIPS":13035,
    "county":"Butts County",
    "number":1356.2200000000003,
    "rate":57.824678093289,
    "population":23454
  },
  {
    "state":"KS",
    "FIPS":20043,
    "county":"Doniphan County",
    "number":80.13000000000001,
    "rate":10.172654563920275,
    "population":7877
  },
  {
    "state":"NY",
    "FIPS":36105,
    "county":"Sullivan County",
    "number":5039.850000000001,
    "rate":65.49427557796523,
    "population":76951
  },
  {
    "state":"AR",
    "FIPS":5023,
    "county":"Cleburne County",
    "number":1078.45,
    "rate":41.8360617580883,
    "population":25778
  },
  {
    "state":"OR",
    "FIPS":41049,
    "county":"Morrow County",
    "number":30.61,
    "rate":2.723309608540925,
    "population":11240
  },
  {
    "state":"GA",
    "FIPS":13033,
    "county":"Burke County",
    "number":1458.8600000000001,
    "rate":63.07765479072986,
    "population":23128
  },
  {
    "state":"NY",
    "FIPS":36097,
    "county":"Schuyler County",
    "number":1049.9899999999998,
    "rate":56.606286053156495,
    "population":18549
  },
  {
    "state":"OR",
    "FIPS":41041,
    "county":"Lincoln County",
    "number":209699.62999999995,
    "rate":4543.673730282543,
    "population":46152
  },
  {
    "state":"GA",
    "FIPS":13031,
    "county":"Bulloch County",
    "number":8252.07,
    "rate":113.31525321322641,
    "population":72824
  },
  {
    "state":"NY",
    "FIPS":36067,
    "county":"Onondaga County",
    "number":445192.6799999991,
    "rate":952.9320050858105,
    "population":467182
  },
  {
    "state":"KS",
    "FIPS":20003,
    "county":"Anderson County",
    "number":40.94,
    "rate":5.170497600404142,
    "population":7918
  },
  {
    "state":"NY",
    "FIPS":36025,
    "county":"Delaware County",
    "number":2345.849999999999,
    "rate":49.736038671924675,
    "population":47166
  },
  {
    "state":"MD",
    "FIPS":24015,
    "county":"Cecil County",
    "number":49536.54,
    "rate":486.5013454852586,
    "population":101822
  },
  {
    "state":"AR",
    "FIPS":5013,
    "county":"Calhoun County",
    "number":127.60000000000002,
    "rate":24.080015097188152,
    "population":5299
  },
  {
    "state":"GA",
    "FIPS":13013,
    "county":"Barrow County",
    "number":65663.13,
    "rate":935.7587892434196,
    "population":70171
  },
  {
    "state":"GA",
    "FIPS":13007,
    "county":"Baker County",
    "number":210.31,
    "rate":62.42505194419709,
    "population":3369
  },
  {
    "state":"FL",
    "FIPS":12129,
    "county":"Wakulla County",
    "number":1550.7900000000002,
    "rate":50.31275346332285,
    "population":30823
  },
  {
    "state":"OH",
    "FIPS":39015,
    "county":"Brown County",
    "number":780.3699999999999,
    "rate":17.574317629042426,
    "population":44404
  },
  {
    "state":"MN",
    "FIPS":27107,
    "county":"Norman County",
    "number":13,
    "rate":1.958716287479283,
    "population":6637
  },
  {
    "state":"FL",
    "FIPS":12093,
    "county":"Okeechobee County",
    "number":1240.44,
    "rate":31.575410462008403,
    "population":39285
  },
  {
    "state":"FL",
    "FIPS":12043,
    "county":"Glades County",
    "number":188.57000000000002,
    "rate":14.476431751880856,
    "population":13026
  },
  {
    "state":"NC",
    "FIPS":37089,
    "county":"Henderson County",
    "number":6013.609999999999,
    "rate":55.62234657540581,
    "population":108115
  },
  {
    "state":"TX",
    "FIPS":48439,
    "county":"Tarrant County",
    "number":965532.7600000033,
    "rate":512.8114925362054,
    "population":1882822
  },
  {
    "state":"VA",
    "FIPS":51640,
    "county":"Galax City",
    "number":286.83,
    "rate":41.44343302990897,
    "population":6921
  },
  {
    "state":"PA",
    "FIPS":42033,
    "county":"Clearfield County",
    "number":9698.309999999996,
    "rate":118.99328859060398,
    "population":81503
  },
  {
    "state":"GA",
    "FIPS":13279,
    "county":"Toombs County",
    "number":5315.490000000002,
    "rate":195.30036374324877,
    "population":27217
  },
  {
    "state":"AL",
    "FIPS":1027,
    "county":"Clay County",
    "number":1017.23,
    "rate":75.54623096917936,
    "population":13465
  },
  {
    "state":"IN",
    "FIPS":18159,
    "county":"Tipton County",
    "number":1111.3999999999996,
    "rate":70.69524839386806,
    "population":15721
  },
  {
    "state":"FL",
    "FIPS":12091,
    "county":"Okaloosa County",
    "number":61296.34999999997,
    "rate":321.8720626768956,
    "population":190437
  },
  {
    "state":"FL",
    "FIPS":12089,
    "county":"Nassau County",
    "number":4889.34,
    "rate":65.5056270096463,
    "population":74640
  },
  {
    "state":"FL",
    "FIPS":12085,
    "county":"Martin County",
    "number":11596.440000000002,
    "rate":77.90897975088347,
    "population":148846
  },
  {
    "state":"MN",
    "FIPS":27043,
    "county":"Faribault County",
    "number":31.939999999999998,
    "rate":2.2396746371222216,
    "population":14261
  },
  {
    "state":"GA",
    "FIPS":13011,
    "county":"Banks County",
    "number":14.31,
    "rate":0.7848837209302326,
    "population":18232
  },
  {
    "state":"AL",
    "FIPS":1095,
    "county":"Marshall County",
    "number":8222.849999999995,
    "rate":87.19605951030185,
    "population":94303
  },
  {
    "state":"FL",
    "FIPS":12079,
    "county":"Madison County",
    "number":799.67,
    "rate":42.277028813111286,
    "population":18915
  },
  {
    "state":"LA",
    "FIPS":22119,
    "county":"Webster Parish",
    "number":3027.8100000000013,
    "rate":73.95183547859223,
    "population":40943
  },
  {
    "state":"FL",
    "FIPS":12065,
    "county":"Jefferson County",
    "number":1424.7699999999998,
    "rate":100.38540125413935,
    "population":14193
  },
  {
    "state":"TN",
    "FIPS":47145,
    "county":"Roane County",
    "number":2740.3,
    "rate":51.29150600831056,
    "population":53426
  },
  {
    "state":"AK",
    "FIPS":2130,
    "county":"Ketchikan Gateway Borough",
    "number":54.16,
    "rate":3.950689328178569,
    "population":13709
  },
  {
    "state":"LA",
    "FIPS":22111,
    "county":"Union Parish",
    "number":825.68,
    "rate":36.63989349900155,
    "population":22535
  },
  {
    "state":"SC",
    "FIPS":45063,
    "county":"Lexington County",
    "number":58704.870000000024,
    "rate":217.33368133454775,
    "population":270114
  },
  {
    "state":"IN",
    "FIPS":18095,
    "county":"Madison County",
    "number":26460.05999999998,
    "rate":203.09523809523796,
    "population":130284
  },
  {
    "state":"WA",
    "FIPS":53071,
    "county":"Walla Walla County",
    "number":1011.5500000000001,
    "rate":17.012849406303612,
    "population":59458
  },
  {
    "state":"LA",
    "FIPS":22099,
    "county":"St Martin Parish",
    "number":1934.2800000000009,
    "rate":36.692465285681784,
    "population":52716
  },
  {
    "state":"WA",
    "FIPS":53047,
    "county":"Okanogan County",
    "number":353.52,
    "rate":8.576835363190838,
    "population":41218
  },
  {
    "state":"LA",
    "FIPS":22087,
    "county":"St Bernard Parish",
    "number":1174.1299999999999,
    "rate":28.29365270615451,
    "population":41498
  },
  {
    "state":"WA",
    "FIPS":53039,
    "county":"Klickitat County",
    "number":197.3,
    "rate":9.571629554164849,
    "population":20613
  },
  {
    "state":"LA",
    "FIPS":22083,
    "county":"Richland Parish",
    "number":407.62,
    "rate":19.481909859962723,
    "population":20923
  },
  {
    "state":"NC",
    "FIPS":37097,
    "county":"Iredell County",
    "number":193349.48999999996,
    "rate":1188.205120326442,
    "population":162724
  },
  {
    "state":"FL",
    "FIPS":12045,
    "county":"Gulf County",
    "number":366.0999999999999,
    "rate":23.363114231014674,
    "population":15670
  },
  {
    "state":"LA",
    "FIPS":22075,
    "county":"Plaquemines Parish",
    "number":364.14,
    "rate":15.235345801430903,
    "population":23901
  },
  {
    "state":"NC",
    "FIPS":37081,
    "county":"Guilford County",
    "number":552032.380000001,
    "rate":1102.094215542612,
    "population":500894
  },
  {
    "state":"FL",
    "FIPS":12041,
    "county":"Gilchrist County",
    "number":675.9999999999999,
    "rate":40.06638217164532,
    "population":16872
  },
  {
    "state":"WA",
    "FIPS":53007,
    "county":"Chelan County",
    "number":2858.8600000000006,
    "rate":38.80629835754039,
    "population":73670
  },
  {
    "state":"LA",
    "FIPS":22067,
    "county":"Morehouse Parish",
    "number":2373.43,
    "rate":86.52364113594108,
    "population":27431
  },
  {
    "state":"FL",
    "FIPS":12039,
    "county":"Gadsden County",
    "number":2859.21,
    "rate":61.28673397209183,
    "population":46653
  },
  {
    "state":"LA",
    "FIPS":22063,
    "county":"Livingston Parish",
    "number":7188.250000000001,
    "rate":54.47955193112231,
    "population":131944
  },
  {
    "state":"LA",
    "FIPS":22047,
    "county":"Iberville Parish",
    "number":637.15,
    "rate":19.10494752623688,
    "population":33350
  },
  {
    "state":"OK",
    "FIPS":40107,
    "county":"Okfuskee County",
    "number":21.1,
    "rate":1.7150288547508739,
    "population":12303
  },
  {
    "state":"LA",
    "FIPS":22023,
    "county":"Cameron Parish",
    "number":68.89,
    "rate":10.40163068096029,
    "population":6623
  },
  {
    "state":"OK",
    "FIPS":40091,
    "county":"McIntosh County",
    "number":642.5500000000002,
    "rate":31.310301140239755,
    "population":20522
  },
  {
    "state":"LA",
    "FIPS":22015,
    "county":"Bossier Parish",
    "number":82230.6800000002,
    "rate":668.1455721401136,
    "population":123073
  },
  {
    "state":"MT",
    "FIPS":30063,
    "county":"Missoula County",
    "number":19702.68,
    "rate":177.41531147009562,
    "population":111054
  },
  {
    "state":"FL",
    "FIPS":12013,
    "county":"Calhoun County",
    "number":258.41999999999996,
    "rate":17.568835406893736,
    "population":14709
  },
  {
    "state":"OK",
    "FIPS":40075,
    "county":"Kiowa County",
    "number":85.6,
    "rate":9.161939419886545,
    "population":9343
  },
  {
    "state":"LA",
    "FIPS":22007,
    "county":"Assumption Parish",
    "number":485.12,
    "rate":21.025440991635243,
    "population":23073
  },
  {
    "state":"FL",
    "FIPS":12009,
    "county":"Brevard County",
    "number":274840.17000000033,
    "rate":501.83627336949934,
    "population":547669
  },
  {
    "state":"VA",
    "FIPS":51187,
    "county":"Warren County",
    "number":1773.0499999999993,
    "rate":46.7046861417696,
    "population":37963
  },
  {
    "state":"PR",
    "FIPS":72069,
    "county":"Humacao Municipio",
    "number":26657.010000000002,
    "rate":null,
    "population":null
  },
  {
    "state":"KY",
    "FIPS":21157,
    "county":"Marshall County",
    "number":30497.489999999998,
    "rate":975.3578738646539,
    "population":31268
  },
  {
    "state":"AR",
    "FIPS":5097,
    "county":"Montgomery County",
    "number":69.14,
    "rate":7.422436929683307,
    "population":9315
  },
  {
    "state":"TX",
    "FIPS":48047,
    "county":"Brooks County",
    "number":32.5,
    "rate":4.534040178571429,
    "population":7168
  },
  {
    "state":"GA",
    "FIPS":13181,
    "county":"Lincoln County",
    "number":40,
    "rate":5.148005148005148,
    "population":7770
  },
  {
    "state":"CT",
    "FIPS":9007,
    "county":"Middlesex County",
    "number":10127.750000000002,
    "rate":61.18746979217014,
    "population":165520
  },
  {
    "state":"KY",
    "FIPS":21225,
    "county":"Union County",
    "number":2249.9700000000007,
    "rate":148.81738210199092,
    "population":15119
  },
  {
    "state":"IN",
    "FIPS":18031,
    "county":"Decatur County",
    "number":1745.6599999999999,
    "rate":66.92711727945405,
    "population":26083
  },
  {
    "state":"OK",
    "FIPS":40147,
    "county":"Washington County",
    "number":2384.5,
    "rate":46.11293753625991,
    "population":51710
  },
  {
    "state":"LA",
    "FIPS":22043,
    "county":"Grant Parish",
    "number":203.18,
    "rate":9.080264569181265,
    "population":22376
  },
  {
    "state":"FL",
    "FIPS":12003,
    "county":"Baker County",
    "number":2193.520000000001,
    "rate":81.11830183794982,
    "population":27041
  },
  {
    "state":"MT",
    "FIPS":30043,
    "county":"Jefferson County",
    "number":321.57000000000005,
    "rate":28.20789473684211,
    "population":11400
  },
  {
    "state":"OK",
    "FIPS":40143,
    "county":"Tulsa County",
    "number":451039.9600000011,
    "rate":734.0428343586257,
    "population":614460
  },
  {
    "state":"LA",
    "FIPS":22041,
    "county":"Franklin Parish",
    "number":1024.51,
    "rate":49.70212972396061,
    "population":20613
  },
  {
    "state":"CO",
    "FIPS":8097,
    "county":"Pitkin County",
    "number":202.59000000000003,
    "rate":11.756615598885796,
    "population":17232
  },
  {
    "state":"IL",
    "FIPS":17187,
    "county":"Warren County",
    "number":276.26000000000005,
    "rate":15.53331459094743,
    "population":17785
  },
  {
    "state":"OK",
    "FIPS":40131,
    "county":"Rogers County",
    "number":4992.59,
    "rate":56.448527333371025,
    "population":88445
  },
  {
    "state":"LA",
    "FIPS":22035,
    "county":"East Carroll Parish",
    "number":15176.729999999998,
    "rate":2002.7355502771177,
    "population":7578
  },
  {
    "state":"WY",
    "FIPS":56043,
    "county":"Washakie County",
    "number":364.24000000000007,
    "rate":43.15128539272598,
    "population":8441
  },
  {
    "state":"IL",
    "FIPS":17179,
    "county":"Tazewell County",
    "number":10988.460000000001,
    "rate":80.74169324143608,
    "population":136094
  },
  {
    "state":"KY",
    "FIPS":21185,
    "county":"Oldham County",
    "number":6249.6900000000005,
    "rate":101.7483678752259,
    "population":61423
  },
  {
    "state":"OK",
    "FIPS":40115,
    "county":"Ottawa County",
    "number":388.02999999999986,
    "rate":12.03119186407044,
    "population":32252
  },
  {
    "state":"LA",
    "FIPS":22027,
    "county":"Claiborne Parish",
    "number":614.1700000000001,
    "rate":36.425478915841296,
    "population":16861
  },
  {
    "state":"NC",
    "FIPS":37083,
    "county":"Halifax County",
    "number":17164.81,
    "rate":318.3207536672663,
    "population":53923
  },
  {
    "state":"CA",
    "FIPS":6113,
    "county":"Yolo County",
    "number":49197.99999999999,
    "rate":240.8537928671089,
    "population":204265
  },
  {
    "state":"FL",
    "FIPS":12019,
    "county":"Clay County",
    "number":17996.770000000004,
    "rate":92.62648357643573,
    "population":194294
  },
  {
    "state":"MT",
    "FIPS":30027,
    "county":"Fergus County",
    "number":37.42,
    "rate":3.2712649707142236,
    "population":11439
  },
  {
    "state":"LA",
    "FIPS":22105,
    "county":"Tangipahoa Parish",
    "number":55500.13999999999,
    "rate":448.42437806523543,
    "population":123767
  },
  {
    "state":"CO",
    "FIPS":8113,
    "county":"San Miguel County",
    "number":84.5,
    "rate":11.112572330352446,
    "population":7604
  },
  {
    "state":"IL",
    "FIPS":17139,
    "county":"Moultrie County",
    "number":1090.3800000000003,
    "rate":72.82308154678422,
    "population":14973
  },
  {
    "state":"PR",
    "FIPS":72151,
    "county":"Yabucoa Municipio",
    "number":41470.70000000001,
    "rate":null,
    "population":null
  },
  {
    "state":"TX",
    "FIPS":48023,
    "county":"Baylor County",
    "number":372.19,
    "rate":102.95712309820193,
    "population":3615
  },
  {
    "state":"GA",
    "FIPS":13175,
    "county":"Laurens County",
    "number":7448.949999999999,
    "rate":155.28351052741294,
    "population":47970
  },
  {
    "state":"MT",
    "FIPS":30077,
    "county":"Powell County",
    "number":138.83,
    "rate":19.594918842625265,
    "population":7085
  },
  {
    "state":"IL",
    "FIPS":17131,
    "county":"Mercer County",
    "number":1161.5099999999998,
    "rate":71.80452522255192,
    "population":16176
  },
  {
    "state":"VA",
    "FIPS":51147,
    "county":"Prince Edward County",
    "number":1737.93,
    "rate":74.87527465425876,
    "population":23211
  },
  {
    "state":"KY",
    "FIPS":21137,
    "county":"Lincoln County",
    "number":1067.88,
    "rate":43.75122910521141,
    "population":24408
  },
  {
    "state":"TX",
    "FIPS":48007,
    "county":"Aransas County",
    "number":36485.1,
    "rate":1539.001138904121,
    "population":23707
  },
  {
    "state":"PR",
    "FIPS":72119,
    "county":"R�o Grande Municipio",
    "number":28039.9,
    "rate":null,
    "population":null
  },
  {
    "state":"AL",
    "FIPS":1115,
    "county":"St Clair County",
    "number":13768.830000000002,
    "rate":161.6724006340633,
    "population":85165
  },
  {
    "state":"GA",
    "FIPS":13171,
    "county":"Lamar County",
    "number":205.21999999999997,
    "rate":11.37646210987305,
    "population":18039
  },
  {
    "state":"IL",
    "FIPS":17123,
    "county":"Marshall County",
    "number":802.8599999999999,
    "rate":65.26786440126818,
    "population":12301
  },
  {
    "state":"VA",
    "FIPS":51131,
    "county":"Northampton County",
    "number":1580.1700000000008,
    "rate":129.13050584293543,
    "population":12237
  },
  {
    "state":"KY",
    "FIPS":21129,
    "county":"Lee County",
    "number":121.98,
    "rate":15.95343970703636,
    "population":7646
  },
  {
    "state":"PR",
    "FIPS":72087,
    "county":"Lo�za Municipio",
    "number":19000.63,
    "rate":null,
    "population":null
  },
  {
    "state":"GA",
    "FIPS":13167,
    "county":"Johnson County",
    "number":338.2,
    "rate":34.22384132766646,
    "population":9882
  },
  {
    "state":"IL",
    "FIPS":17115,
    "county":"Macon County",
    "number":15648.47999999998,
    "rate":142.2033205201601,
    "population":110043
  },
  {
    "state":"VA",
    "FIPS":51115,
    "county":"Mathews County",
    "number":207.14,
    "rate":23.219370025781863,
    "population":8921
  },
  {
    "state":"KY",
    "FIPS":21121,
    "county":"Knox County",
    "number":2577.689999999999,
    "rate":81.31514195583594,
    "population":31700
  },
  {
    "state":"PR",
    "FIPS":72055,
    "county":"",
    "number":813.8499999999999,
    "rate":null,
    "population":null
  },
  {
    "state":"GA",
    "FIPS":13163,
    "county":"Jefferson County",
    "number":710.13,
    "rate":43.24260138838144,
    "population":16422
  },
  {
    "state":"CO",
    "FIPS":8071,
    "county":"Las Animas County",
    "number":539.56,
    "rate":36.004270652609094,
    "population":14986
  },
  {
    "state":"IL",
    "FIPS":17083,
    "county":"Jersey County",
    "number":3132.8900000000003,
    "rate":137.81849375329932,
    "population":22732
  },
  {
    "state":"IL",
    "FIPS":17155,
    "county":"Putnam County",
    "number":787.01,
    "rate":133.9591489361702,
    "population":5875
  },
  {
    "state":"LA",
    "FIPS":22019,
    "county":"Calcasieu Parish",
    "number":318436.8400000002,
    "rate":1635.9205355170493,
    "population":194653
  },
  {
    "state":"OK",
    "FIPS":40099,
    "county":"Murray County",
    "number":271.74,
    "rate":19.922287390029325,
    "population":13640
  },
  {
    "state":"AK",
    "FIPS":2090,
    "county":"Fairbanks North Star Borough",
    "number":882.1999999999999,
    "rate":8.802019415925848,
    "population":100227
  },
  {
    "state":"CO",
    "FIPS":8069,
    "county":"Larimer County",
    "number":7569.620000000002,
    "rate":24.35253430276514,
    "population":310835
  },
  {
    "state":"IL",
    "FIPS":17075,
    "county":"Iroquois County",
    "number":1953.8,
    "rate":66.70763767967496,
    "population":29289
  },
  {
    "state":"KY",
    "FIPS":21019,
    "county":"Boyd County",
    "number":203312.7000000001,
    "rate":4125.328707085466,
    "population":49284
  },
  {
    "state":"ND",
    "FIPS":38099,
    "county":"Walsh County",
    "number":910.7,
    "rate":82.38646643748869,
    "population":11054
  },
  {
    "state":"CO",
    "FIPS":8067,
    "county":"La Plata County",
    "number":1879.9900000000002,
    "rate":35.942835292993024,
    "population":52305
  },
  {
    "state":"IL",
    "FIPS":17067,
    "county":"Hancock County",
    "number":345.37,
    "rate":18.336607379877886,
    "population":18835
  },
  {
    "state":"KY",
    "FIPS":21083,
    "county":"Graves County",
    "number":1390.0800000000004,
    "rate":37.034234714266695,
    "population":37535
  },
  {
    "state":"CO",
    "FIPS":8063,
    "county":"Kit Carson County",
    "number":22.66,
    "rate":2.799950574570617,
    "population":8093
  },
  {
    "state":"IL",
    "FIPS":17051,
    "county":"Fayette County",
    "number":495.7999999999999,
    "rate":22.513849786577055,
    "population":22022
  },
  {
    "state":"ND",
    "FIPS":38035,
    "county":"Grand Forks County",
    "number":82667.63,
    "rate":1221.069555841125,
    "population":67701
  },
  {
    "state":"IL",
    "FIPS":17035,
    "county":"Cumberland County",
    "number":692.0599999999997,
    "rate":63.28273591806874,
    "population":10936
  },
  {
    "state":"OK",
    "FIPS":40065,
    "county":"Jackson County",
    "number":426.64,
    "rate":16.246144472792352,
    "population":26261
  },
  {
    "state":"AL",
    "FIPS":1067,
    "county":"Henry County",
    "number":364.53000000000003,
    "rate":21.134624304267163,
    "population":17248
  },
  {
    "state":"IL",
    "FIPS":17013,
    "county":"Calhoun County",
    "number":33.41,
    "rate":6.652727996814018,
    "population":5022
  },
  {
    "state":"CA",
    "FIPS":6037,
    "county":"Los Angeles County",
    "number":9002339.210000021,
    "rate":902.502089250707,
    "population":9974868
  },
  {
    "state":"KS",
    "FIPS":20207,
    "county":"Woodson County",
    "number":11.8,
    "rate":3.619631901840491,
    "population":3260
  },
  {
    "state":"KY",
    "FIPS":21043,
    "county":"Carter County",
    "number":25090.499999999996,
    "rate":913.344981980998,
    "population":27471
  },
  {
    "state":"IL",
    "FIPS":17091,
    "county":"Kankakee County",
    "number":16337.040000000014,
    "rate":144.67031507358814,
    "population":112926
  },
  {
    "state":"CO",
    "FIPS":8073,
    "county":"Lincoln County",
    "number":30.34,
    "rate":5.571061329416086,
    "population":5446
  },
  {
    "state":"CA",
    "FIPS":6033,
    "county":"Lake County",
    "number":2665.199999999999,
    "rate":41.6541635408852,
    "population":63984
  },
  {
    "state":"KS",
    "FIPS":20191,
    "county":"Sumner County",
    "number":3062.600000000001,
    "rate":129.19092212941874,
    "population":23706
  },
  {
    "state":"KY",
    "FIPS":21027,
    "county":"Breckinridge County",
    "number":2125.7000000000003,
    "rate":105.76674295949847,
    "population":20098
  },
  {
    "state":"WV",
    "FIPS":54045,
    "county":"Logan County",
    "number":9012.66,
    "rate":248.0366578599736,
    "population":36336
  },
  {
    "state":"GA",
    "FIPS":13079,
    "county":"Crawford County",
    "number":479.36,
    "rate":37.987162215706476,
    "population":12619
  },
  {
    "state":"ND",
    "FIPS":38003,
    "county":"Barnes County",
    "number":1000.6800000000003,
    "rate":90.86352492508856,
    "population":11013
  },
  {
    "state":"CO",
    "FIPS":8055,
    "county":"Huerfano County",
    "number":143.10999999999999,
    "rate":21.72282938676381,
    "population":6588
  },
  {
    "state":"KS",
    "FIPS":20055,
    "county":"Finney County",
    "number":926.8300000000002,
    "rate":24.96175599245893,
    "population":37130
  },
  {
    "state":"GA",
    "FIPS":13039,
    "county":"Camden County",
    "number":4116.200000000001,
    "rate":80.07859616357341,
    "population":51402
  },
  {
    "state":"GA",
    "FIPS":13003,
    "county":"Atkinson County",
    "number":119.01,
    "rate":14.430702073481267,
    "population":8247
  },
  {
    "state":"OH",
    "FIPS":39141,
    "county":"Ross County",
    "number":5557.829999999999,
    "rate":71.72781828741046,
    "population":77485
  },
  {
    "state":"IA",
    "FIPS":19185,
    "county":"Wayne County",
    "number":18.54,
    "rate":2.9173878835562546,
    "population":6355
  },
  {
    "state":"IL",
    "FIPS":17103,
    "county":"Lee County",
    "number":2572.2900000000004,
    "rate":73.19911214820297,
    "population":35141
  },
  {
    "state":"KY",
    "FIPS":21109,
    "county":"Jackson County",
    "number":113.02,
    "rate":8.49902240938487,
    "population":13298
  },
  {
    "state":"PR",
    "FIPS":72007,
    "county":"Aguas Buenas Municipio",
    "number":1670.8100000000004,
    "rate":null,
    "population":null
  },
  {
    "state":"GA",
    "FIPS":13157,
    "county":"Jackson County",
    "number":2940.410000000001,
    "rate":48.624322000264605,
    "population":60472
  },
  {
    "state":"OK",
    "FIPS":40083,
    "county":"Logan County",
    "number":1670.2500000000002,
    "rate":38.24883209672988,
    "population":43668
  },
  {
    "state":"LA",
    "FIPS":22011,
    "county":"Beauregard Parish",
    "number":1518.49,
    "rate":41.88475754399515,
    "population":36254
  },
  {
    "state":"IL",
    "FIPS":17079,
    "county":"Jasper County",
    "number":93.88000000000001,
    "rate":9.734549979261718,
    "population":9644
  },
  {
    "state":"TX",
    "FIPS":48017,
    "county":"Bailey County",
    "number":470.03999999999996,
    "rate":66.19349387410223,
    "population":7101
  },
  {
    "state":"PR",
    "FIPS":72139,
    "county":"Trujillo Alto",
    "number":4855.02,
    "rate":null,
    "population":null
  },
  {
    "state":"MO",
    "FIPS":29181,
    "county":"Ripley County",
    "number":421.12000000000006,
    "rate":30.004987531172073,
    "population":14035
  },
  {
    "state":"CA",
    "FIPS":6031,
    "county":"Kings County",
    "number":25595.360000000004,
    "rate":169.1248843663275,
    "population":151340
  },
  {
    "state":"KS",
    "FIPS":20183,
    "county":"Smith County",
    "number":86.52,
    "rate":23.047416089504527,
    "population":3754
  },
  {
    "state":"AR",
    "FIPS":5049,
    "county":"Fulton County",
    "number":194.23,
    "rate":15.86716771505596,
    "population":12241
  },
  {
    "state":"MO",
    "FIPS":29067,
    "county":"Douglas County",
    "number":39.47,
    "rate":2.902632740108839,
    "population":13598
  },
  {
    "state":"ND",
    "FIPS":38075,
    "county":"Renville County",
    "number":97.38999999999999,
    "rate":38.132341425215344,
    "population":2554
  },
  {
    "state":"IL",
    "FIPS":17055,
    "county":"Franklin County",
    "number":799.6600000000001,
    "rate":20.060709447594203,
    "population":39862
  },
  {
    "state":"CA",
    "FIPS":6097,
    "county":"Sonoma County",
    "number":74714.40000000008,
    "rate":152.21804342777062,
    "population":490838
  },
  {
    "state":"CA",
    "FIPS":6027,
    "county":"Inyo County",
    "number":30.68,
    "rate":1.665942658557776,
    "population":18416
  },
  {
    "state":"KS",
    "FIPS":20167,
    "county":"Russell County",
    "number":175.75,
    "rate":25.240557231078558,
    "population":6963
  },
  {
    "state":"WV",
    "FIPS":54109,
    "county":"Wyoming County",
    "number":2919.95,
    "rate":125.5838458560922,
    "population":23251
  },
  {
    "state":"GA",
    "FIPS":13095,
    "county":"Dougherty County",
    "number":33667.94000000012,
    "rate":356.1162234773975,
    "population":94542
  },
  {
    "state":"KY",
    "FIPS":21003,
    "county":"Allen County",
    "number":426.83,
    "rate":21.097820176956155,
    "population":20231
  },
  {
    "state":"CA",
    "FIPS":6093,
    "county":"Siskiyou County",
    "number":753.3299999999997,
    "rate":17.038268421766855,
    "population":44214
  },
  {
    "state":"IL",
    "FIPS":17015,
    "county":"Carroll County",
    "number":576.1299999999998,
    "rate":38.400986469372775,
    "population":15003
  },
  {
    "state":"MO",
    "FIPS":29117,
    "county":"Livingston County",
    "number":231.97,
    "rate":15.440990481262064,
    "population":15023
  },
  {
    "state":"IN",
    "FIPS":18127,
    "county":"Porter County",
    "number":109999.84999999999,
    "rate":664.0137269934021,
    "population":165659
  },
  {
    "state":"AL",
    "FIPS":1025,
    "county":"Clarke County",
    "number":3486.5999999999995,
    "rate":138.53305785123965,
    "population":25168
  },
  {
    "state":"CA",
    "FIPS":6087,
    "county":"Santa Cruz County",
    "number":13015.669999999993,
    "rate":48.815108464100305,
    "population":266632
  },
  {
    "state":"ND",
    "FIPS":38085,
    "county":"Sioux County",
    "number":23.39,
    "rate":5.385678102693991,
    "population":4343
  },
  {
    "state":"CA",
    "FIPS":6069,
    "county":"San Benito County",
    "number":2989.31,
    "rate":52.56299344129697,
    "population":56871
  },
  {
    "state":"KS",
    "FIPS":20107,
    "county":"Linn County",
    "number":12.12,
    "rate":1.278346166016243,
    "population":9481
  },
  {
    "state":"GA",
    "FIPS":13065,
    "county":"Clinch County",
    "number":21.39,
    "rate":3.1854058078927774,
    "population":6715
  },
  {
    "state":"ND",
    "FIPS":38037,
    "county":"Grant County",
    "number":15.17,
    "rate":6.491228070175438,
    "population":2337
  },
  {
    "state":"CA",
    "FIPS":6063,
    "county":"Plumas County",
    "number":161.9,
    "rate":8.370818468538339,
    "population":19341
  },
  {
    "state":"ND",
    "FIPS":38021,
    "county":"Dickey County",
    "number":593.5700000000002,
    "rate":113.16873212583415,
    "population":5245
  },
  {
    "state":"CA",
    "FIPS":6061,
    "county":"Placer County",
    "number":21874.6,
    "rate":60.51969035485244,
    "population":361446
  },
  {
    "state":"MA",
    "FIPS":25013,
    "county":"Hampden County",
    "number":192849.55999999982,
    "rate":413.36214121434614,
    "population":466539
  },
  {
    "state":"SD",
    "FIPS":46087,
    "county":"McCook County",
    "number":13.91,
    "rate":2.4825986078886313,
    "population":5603
  },
  {
    "state":"AL",
    "FIPS":1055,
    "county":"Etowah County",
    "number":15330.069999999996,
    "rate":146.94672366857097,
    "population":104324
  },
  {
    "state":"NY",
    "FIPS":36091,
    "county":"Saratoga County",
    "number":36314.14000000006,
    "rate":163.27345973481792,
    "population":222413
  },
  {
    "state":"KS",
    "FIPS":20015,
    "county":"Butler County",
    "number":4610.61,
    "rate":70.11694750288946,
    "population":65756
  },
  {
    "state":"NY",
    "FIPS":36049,
    "county":"Lewis County",
    "number":1120.0499999999995,
    "rate":41.08918155471586,
    "population":27259
  },
  {
    "state":"GA",
    "FIPS":13019,
    "county":"Berrien County",
    "number":528.12,
    "rate":27.703929077270107,
    "population":19063
  },
  {
    "state":"GA",
    "FIPS":13049,
    "county":"Charlton County",
    "number":475.64000000000004,
    "rate":35.74090772467689,
    "population":13308
  },
  {
    "state":"CA",
    "FIPS":6055,
    "county":"Napa County",
    "number":12528.740000000003,
    "rate":90.04736407086645,
    "population":139135
  },
  {
    "state":"KS",
    "FIPS":20051,
    "county":"Ellis County",
    "number":2766.259999999999,
    "rate":95.09315916122375,
    "population":29090
  },
  {
    "state":"NY",
    "FIPS":36121,
    "county":"Wyoming County",
    "number":5770.520000000001,
    "rate":138.17633255112307,
    "population":41762
  },
  {
    "state":"OR",
    "FIPS":41065,
    "county":"Wasco County",
    "number":175.6,
    "rate":6.897906273323644,
    "population":25457
  },
  {
    "state":"GA",
    "FIPS":13037,
    "county":"Calhoun County",
    "number":644.3300000000002,
    "rate":99.09720086127348,
    "population":6502
  },
  {
    "state":"AL",
    "FIPS":1079,
    "county":"Lawrence County",
    "number":1668.7500000000002,
    "rate":49.406383230696356,
    "population":33776
  },
  {
    "state":"CA",
    "FIPS":6049,
    "county":"Modoc County",
    "number":22,
    "rate":2.357479639948564,
    "population":9332
  },
  {
    "state":"KS",
    "FIPS":20035,
    "county":"Cowley County",
    "number":2069.2699999999995,
    "rate":57.06127288771231,
    "population":36264
  },
  {
    "state":"NY",
    "FIPS":36089,
    "county":"St Lawrence County",
    "number":11250.549999999997,
    "rate":100.03512172567707,
    "population":112466
  },
  {
    "state":"CT",
    "FIPS":9005,
    "county":"Litchfield County",
    "number":104150.19,
    "rate":555.7196062214871,
    "population":187415
  },
  {
    "state":"MD",
    "FIPS":24047,
    "county":"Worcester County",
    "number":5478.3099999999995,
    "rate":106.19349461114987,
    "population":51588
  },
  {
    "state":"AR",
    "FIPS":5021,
    "county":"Clay County",
    "number":298.94999999999993,
    "rate":19.188061617458274,
    "population":15580
  },
  {
    "state":"OR",
    "FIPS":41033,
    "county":"Josephine County",
    "number":808.66,
    "rate":9.768548718320408,
    "population":82782
  },
  {
    "state":"GA",
    "FIPS":13029,
    "county":"Bryan County",
    "number":3052.0300000000007,
    "rate":94.6483284748496,
    "population":32246
  },
  {
    "state":"CA",
    "FIPS":6045,
    "county":"Mendocino County",
    "number":2730.92,
    "rate":31.211584397179333,
    "population":87497
  },
  {
    "state":"NY",
    "FIPS":36041,
    "county":"Hamilton County",
    "number":137.67,
    "rate":28.759139335700855,
    "population":4787
  },
  {
    "state":"MD",
    "FIPS":24023,
    "county":"Garrett County",
    "number":2695.739999999999,
    "rate":90.15551319353864,
    "population":29901
  },
  {
    "state":"AR",
    "FIPS":5015,
    "county":"Carroll County",
    "number":52.66,
    "rate":1.908109283281397,
    "population":27598
  },
  {
    "state":"GA",
    "FIPS":13017,
    "county":"Ben Hill County",
    "number":978.0400000000001,
    "rate":55.744656597321175,
    "population":17545
  },
  {
    "state":"CA",
    "FIPS":6039,
    "county":"Madera County",
    "number":7121.78,
    "rate":46.778723627860536,
    "population":152244
  },
  {
    "state":"NY",
    "FIPS":36009,
    "county":"Cattaraugus County",
    "number":18947.19,
    "rate":238.8040382143127,
    "population":79342
  },
  {
    "state":"AR",
    "FIPS":5011,
    "county":"Bradley County",
    "number":1751.7000000000003,
    "rate":155.0451407328731,
    "population":11298
  },
  {
    "state":"GA",
    "FIPS":13009,
    "county":"Baldwin County",
    "number":5628.3099999999995,
    "rate":121.15617264018942,
    "population":46455
  },
  {
    "state":"CA",
    "FIPS":6035,
    "county":"Lassen County",
    "number":417.9999999999999,
    "rate":12.411294872175535,
    "population":33679
  },
  {
    "state":"IA",
    "FIPS":19169,
    "county":"Story County",
    "number":5791.070000000001,
    "rate":63.137885544204714,
    "population":91721
  },
  {
    "state":"AR",
    "FIPS":5009,
    "county":"Boone County",
    "number":2496.12,
    "rate":66.86095411566174,
    "population":37333
  },
  {
    "state":"GA",
    "FIPS":13005,
    "county":"Bacon County",
    "number":1074.5299999999997,
    "rate":96.06025388878953,
    "population":11186
  },
  {
    "state":"OH",
    "FIPS":39171,
    "county":"Williams County",
    "number":5681.37,
    "rate":151.22897146507665,
    "population":37568
  },
  {
    "state":"GA",
    "FIPS":13001,
    "county":"Appling County",
    "number":681.7600000000001,
    "rate":37.09451003863105,
    "population":18379
  },
  {
    "state":"MS",
    "FIPS":28007,
    "county":"Attala County",
    "number":5847.0999999999985,
    "rate":305.762694137949,
    "population":19123
  },
  {
    "state":"HI",
    "FIPS":15009,
    "county":"Maui County",
    "number":90653.72000000002,
    "rate":572.1932437891337,
    "population":158432
  },
  {
    "state":"NY",
    "FIPS":36057,
    "county":"Montgomery County",
    "number":6373.32,
    "rate":127.744883846786,
    "population":49891
  },
  {
    "state":"GA",
    "FIPS":13021,
    "county":"Bibb County",
    "number":117026.09999999989,
    "rate":749.2835373661828,
    "population":156184
  },
  {
    "state":"AR",
    "FIPS":5017,
    "county":"Chicot County",
    "number":269.14,
    "rate":23.48926514225868,
    "population":11458
  },
  {
    "state":"NY",
    "FIPS":36003,
    "county":"Allegany County",
    "number":1892.470000000001,
    "rate":39.190498871378594,
    "population":48289
  },
  {
    "state":"CT",
    "FIPS":9015,
    "county":"Windham County",
    "number":10274.48,
    "rate":87.1168994141039,
    "population":117939
  },
  {
    "state":"CT",
    "FIPS":9011,
    "county":"New London County",
    "number":37469.53999999999,
    "rate":136.4791800221458,
    "population":274544
  },
  {
    "state":"MS",
    "FIPS":28047,
    "county":"Harrison County",
    "number":29712.530000000013,
    "rate":153.40170684234172,
    "population":193691
  },
  {
    "state":"IL",
    "FIPS":17077,
    "county":"Jackson County",
    "number":6779.080000000002,
    "rate":112.58312020460362,
    "population":60214
  },
  {
    "state":"WA",
    "FIPS":53005,
    "county":"Benton County",
    "number":155529.94000000003,
    "rate":852.7047742275053,
    "population":182396
  },
  {
    "state":"AL",
    "FIPS":1071,
    "county":"Jackson County",
    "number":2804.11,
    "rate":52.85986276579701,
    "population":53048
  },
  {
    "state":"NV",
    "FIPS":32007,
    "county":"Elko County",
    "number":580.4300000000001,
    "rate":11.363600767453699,
    "population":51078
  },
  {
    "state":"IA",
    "FIPS":19195,
    "county":"Worth County",
    "number":10.99,
    "rate":1.4616305359755286,
    "population":7519
  },
  {
    "state":"MS",
    "FIPS":28031,
    "county":"Covington County",
    "number":1279.8899999999994,
    "rate":65.55805972442757,
    "population":19523
  },
  {
    "state":"IA",
    "FIPS":19187,
    "county":"Webster County",
    "number":1487.8499999999992,
    "rate":39.93906531017634,
    "population":37253
  },
  {
    "state":"MS",
    "FIPS":28023,
    "county":"Clarke County",
    "number":875.51,
    "rate":53.07729615034859,
    "population":16495
  },
  {
    "state":"ND",
    "FIPS":38055,
    "county":"McLean County",
    "number":314.21999999999997,
    "rate":33.531106605485,
    "population":9371
  },
  {
    "state":"IL",
    "FIPS":17045,
    "county":"Edgar County",
    "number":2339.49,
    "rate":128.8762188068088,
    "population":18153
  },
  {
    "state":"OK",
    "FIPS":40129,
    "county":"Roger Mills County",
    "number":11.24,
    "rate":2.978272390037096,
    "population":3774
  },
  {
    "state":"AL",
    "FIPS":1069,
    "county":"Houston County",
    "number":36138.779999999955,
    "rate":349.61283956350087,
    "population":103368
  },
  {
    "state":"OH",
    "FIPS":39097,
    "county":"Madison County",
    "number":3047.3499999999995,
    "rate":70.93624153262411,
    "population":42959
  },
  {
    "state":"IA",
    "FIPS":19163,
    "county":"Scott County",
    "number":9545.589999999998,
    "rate":56.540659965526835,
    "population":168827
  },
  {
    "state":"NE",
    "FIPS":31111,
    "county":"Lincoln County",
    "number":17075.61,
    "rate":473.9407144244914,
    "population":36029
  },
  {
    "state":"OH",
    "FIPS":39065,
    "county":"Hardin County",
    "number":3354.389999999999,
    "rate":106.00733179534174,
    "population":31643
  },
  {
    "state":"TN",
    "FIPS":47167,
    "county":"Tipton County",
    "number":3455.109999999999,
    "rate":56.11130960114329,
    "population":61576
  },
  {
    "state":"IA",
    "FIPS":19147,
    "county":"Palo Alto County",
    "number":687.37,
    "rate":74.06206227777179,
    "population":9281
  },
  {
    "state":"MS",
    "FIPS":28025,
    "county":"Clay County",
    "number":807.3999999999996,
    "rate":39.588134346653575,
    "population":20395
  },
  {
    "state":"AK",
    "FIPS":2261,
    "county":"Valdez-Cordova Census Area",
    "number":15.84,
    "rate":1.6269515201314706,
    "population":9736
  },
  {
    "state":"NE",
    "FIPS":31177,
    "county":"Washington County",
    "number":524.7499999999999,
    "rate":25.861219259770337,
    "population":20291
  },
  {
    "state":"PA",
    "FIPS":42095,
    "county":"Northampton County",
    "number":67125.89000000003,
    "rate":224.22907974599408,
    "population":299363
  },
  {
    "state":"ME",
    "FIPS":23017,
    "county":"Oxford County",
    "number":4611.76,
    "rate":80.21010157228329,
    "population":57496
  },
  {
    "state":"AL",
    "FIPS":1043,
    "county":"Cullman County",
    "number":13412.730000000001,
    "rate":166.9059618471647,
    "population":80361
  },
  {
    "state":"NC",
    "FIPS":37103,
    "county":"Jones County",
    "number":1007.0900000000003,
    "rate":98.00408719346052,
    "population":10276
  },
  {
    "state":"TX",
    "FIPS":48363,
    "county":"Palo Pinto County",
    "number":315.50000000000006,
    "rate":11.315138256285193,
    "population":27883
  },
  {
    "state":"MI",
    "FIPS":26151,
    "county":"Sanilac County",
    "number":2824.15,
    "rate":66.74741792914372,
    "population":42311
  },
  {
    "state":"AZ",
    "FIPS":4023,
    "county":"Santa Cruz County",
    "number":194.90999999999997,
    "rate":4.109164505723863,
    "population":47433
  },
  {
    "state":"IL",
    "FIPS":17119,
    "county":"Madison County",
    "number":51041.379999999976,
    "rate":190.42519931800962,
    "population":268039
  },
  {
    "state":"KY",
    "FIPS":21125,
    "county":"Laurel County",
    "number":6651.18,
    "rate":111.62132679946968,
    "population":59587
  },
  {
    "state":"PR",
    "FIPS":72071,
    "county":"Isabela Municipio",
    "number":2610.3799999999997,
    "rate":null,
    "population":null
  },
  {
    "state":"GA",
    "FIPS":13165,
    "county":"Jenkins County",
    "number":183.05,
    "rate":20.04270228840469,
    "population":9133
  },
  {
    "state":"AL",
    "FIPS":1005,
    "county":"Barbour County",
    "number":1733.4100000000005,
    "rate":63.8010232249991,
    "population":27169
  },
  {
    "state":"OK",
    "FIPS":40067,
    "county":"Jefferson County",
    "number":40.07,
    "rate":6.325177584846093,
    "population":6335
  },
  {
    "state":"LA",
    "FIPS":22003,
    "county":"Allen Parish",
    "number":1128.1999999999998,
    "rate":44.04794440323273,
    "population":25613
  },
  {
    "state":"NC",
    "FIPS":37035,
    "county":"Catawba County",
    "number":98234.22999999992,
    "rate":635.7461913822333,
    "population":154518
  },
  {
    "state":"CA",
    "FIPS":6107,
    "county":"Tulare County",
    "number":36030.319999999956,
    "rate":79.8015499480618,
    "population":451499
  },
  {
    "state":"FL",
    "FIPS":12007,
    "county":"Bradford County",
    "number":2079.5,
    "rate":76.6438154209052,
    "population":27132
  },
  {
    "state":"LA",
    "FIPS":22115,
    "county":"Vernon Parish",
    "number":2927.66,
    "rate":54.03979621972829,
    "population":54176
  },
  {
    "state":"MN",
    "FIPS":27011,
    "county":"Big Stone County",
    "number":89.74000000000001,
    "rate":17.374636979670864,
    "population":5165
  },
  {
    "state":"NC",
    "FIPS":37019,
    "county":"Brunswick County",
    "number":24897.579999999998,
    "rate":222.0262533663878,
    "population":112138
  },
  {
    "state":"CA",
    "FIPS":6105,
    "county":"Trinity County",
    "number":357.2800000000001,
    "rate":26.474990737310122,
    "population":13495
  },
  {
    "state":"KY",
    "FIPS":21035,
    "county":"Calloway County",
    "number":3682.470000000001,
    "rate":96.32913048027626,
    "population":38228
  },
  {
    "state":"WY",
    "FIPS":56031,
    "county":"Platte County",
    "number":363.34999999999997,
    "rate":41.59702346880366,
    "population":8735
  },
  {
    "state":"IL",
    "FIPS":17173,
    "county":"Shelby County",
    "number":1534.5600000000004,
    "rate":69.02172446363515,
    "population":22233
  },
  {
    "state":"AL",
    "FIPS":1077,
    "county":"Lauderdale County",
    "number":11414.729999999981,
    "rate":123.14421645413923,
    "population":92694
  },
  {
    "state":"TX",
    "FIPS":48013,
    "county":"Atascosa County",
    "number":957.0300000000002,
    "rate":20.609656301145666,
    "population":46436
  },
  {
    "state":"PR",
    "FIPS":72131,
    "county":"San Sebasti�n Municipio",
    "number":6469.769999999998,
    "rate":null,
    "population":null
  },
  {
    "state":"AR",
    "FIPS":5077,
    "county":"Lee County",
    "number":32.05,
    "rate":3.145240431795878,
    "population":10190
  },
  {
    "state":"VA",
    "FIPS":51027,
    "county":"Buchanan County",
    "number":423.09,
    "rate":17.749297310903216,
    "population":23837
  },
  {
    "state":"KY",
    "FIPS":21077,
    "county":"Gallatin County",
    "number":809.0300000000001,
    "rate":95.28088564362267,
    "population":8491
  },
  {
    "state":"GA",
    "FIPS":13141,
    "county":"Hancock County",
    "number":56.4,
    "rate":6.245847176079734,
    "population":9030
  },
  {
    "state":"CA",
    "FIPS":6101,
    "county":"Sutter County",
    "number":18274.58999999999,
    "rate":193.10195800796717,
    "population":94637
  },
  {
    "state":"ND",
    "FIPS":38059,
    "county":"Morton County",
    "number":3216.9700000000007,
    "rate":114.70743448029954,
    "population":28045
  },
  {
    "state":"IL",
    "FIPS":17047,
    "county":"Edwards County",
    "number":493.14,
    "rate":73.26400237706136,
    "population":6731
  },
  {
    "state":"PR",
    "FIPS":72011,
    "county":"A�asco Municipio",
    "number":796.27,
    "rate":null,
    "population":null
  },
  {
    "state":"MO",
    "FIPS":29149,
    "county":"Oregon County",
    "number":102.61,
    "rate":9.330726561789579,
    "population":10997
  },
  {
    "state":"CA",
    "FIPS":6095,
    "county":"Solano County",
    "number":21502.560000000005,
    "rate":51.10847016096064,
    "population":420724
  },
  {
    "state":"ND",
    "FIPS":38011,
    "county":"Bowman County",
    "number":82.09,
    "rate":25.493788819875775,
    "population":3220
  },
  {
    "state":"IL",
    "FIPS":17023,
    "county":"Clark County",
    "number":571.65,
    "rate":35.06194798822375,
    "population":16304
  },
  {
    "state":"KY",
    "FIPS":21029,
    "county":"Bullitt County",
    "number":4352.04,
    "rate":57.3293111851725,
    "population":75913
  },
  {
    "state":"GA",
    "FIPS":13117,
    "county":"Forsyth County",
    "number":7286.080000000001,
    "rate":38.791647588725745,
    "population":187826
  },
  {
    "state":"GA",
    "FIPS":13135,
    "county":"Gwinnett County",
    "number":554135.1499999994,
    "rate":659.5111881278847,
    "population":840221
  },
  {
    "state":"NM",
    "FIPS":35051,
    "county":"Sierra County",
    "number":13.48,
    "rate":1.1334398385604978,
    "population":11893
  },
  {
    "state":"CA",
    "FIPS":6089,
    "county":"Shasta County",
    "number":12126.490000000009,
    "rate":67.96559821994053,
    "population":178421
  },
  {
    "state":"IL",
    "FIPS":17141,
    "county":"Ogle County",
    "number":2956.12,
    "rate":55.94579761161263,
    "population":52839
  },
  {
    "state":"KY",
    "FIPS":21189,
    "county":"Owsley County",
    "number":12.96,
    "rate":2.7609714529186196,
    "population":4694
  },
  {
    "state":"MI",
    "FIPS":26025,
    "county":"Calhoun County",
    "number":9587.719999999998,
    "rate":71.14663104778865,
    "population":134760
  },
  {
    "state":"TX",
    "FIPS":48111,
    "county":"Dallam County",
    "number":88.88,
    "rate":12.704402515723269,
    "population":6996
  },
  {
    "state":"GA",
    "FIPS":13197,
    "county":"Marion County",
    "number":222.6,
    "rate":25.43709290366815,
    "population":8751
  },
  {
    "state":"TX",
    "FIPS":48237,
    "county":"Jack County",
    "number":24,
    "rate":2.665186007773459,
    "population":9005
  },
  {
    "state":"AR",
    "FIPS":5105,
    "county":"Perry County",
    "number":141.64000000000001,
    "rate":13.716831299631998,
    "population":10326
  },
  {
    "state":"KS",
    "FIPS":20163,
    "county":"Rooks County",
    "number":25.94,
    "rate":4.9913411583605924,
    "population":5197
  },
  {
    "state":"WV",
    "FIPS":54101,
    "county":"Webster County",
    "number":325.8,
    "rate":36.1357586512866,
    "population":9016
  },
  {
    "state":"GA",
    "FIPS":13093,
    "county":"Dooly County",
    "number":7.14,
    "rate":0.4983945274326399,
    "population":14326
  },
  {
    "state":"WY",
    "FIPS":56013,
    "county":"Fremont County",
    "number":341.25,
    "rate":8.297872340425531,
    "population":41125
  },
  {
    "state":"CA",
    "FIPS":6077,
    "county":"San Joaquin County",
    "number":207797.8299999989,
    "rate":296.16229235998617,
    "population":701635
  },
  {
    "state":"IL",
    "FIPS":17143,
    "county":"Peoria County",
    "number":147071.71,
    "rate":785.6688551388139,
    "population":187193
  },
  {
    "state":"VA",
    "FIPS":51171,
    "county":"Shenandoah County",
    "number":3576.4399999999996,
    "rate":83.87326751248797,
    "population":42641
  },
  {
    "state":"PR",
    "FIPS":72037,
    "county":"Ceiba Municipio",
    "number":347.59,
    "rate":null,
    "population":null
  },
  {
    "state":"KY",
    "FIPS":21149,
    "county":"McLean County",
    "number":29.36,
    "rate":3.0840336134453783,
    "population":9520
  },
  {
    "state":"TX",
    "FIPS":48157,
    "county":"Fort Bend County",
    "number":156114.07000000007,
    "rate":249.10335660854258,
    "population":626704
  },
  {
    "state":"AR",
    "FIPS":5095,
    "county":"Monroe County",
    "number":38.96,
    "rate":4.969387755102041,
    "population":7840
  },
  {
    "state":"TX",
    "FIPS":48031,
    "county":"Blanco County",
    "number":159.29,
    "rate":15.004709871891484,
    "population":10616
  },
  {
    "state":"GA",
    "FIPS":13177,
    "county":"Lee County",
    "number":2089.4700000000007,
    "rate":72.73540571587708,
    "population":28727
  },
  {
    "state":"TX",
    "FIPS":48025,
    "county":"Bee County",
    "number":2128,
    "rate":65.57579119287541,
    "population":32451
  },
  {
    "state":"MO",
    "FIPS":29185,
    "county":"St Clair County",
    "number":14.71,
    "rate":1.5435466946484786,
    "population":9530
  },
  {
    "state":"SC",
    "FIPS":45083,
    "county":"Spartanburg County",
    "number":305806.01,
    "rate":1060.27650552491,
    "population":288421
  },
  {
    "state":"IN",
    "FIPS":18105,
    "county":"Monroe County",
    "number":151760.81000000006,
    "rate":1074.1162440105038,
    "population":141289
  },
  {
    "state":"AZ",
    "FIPS":4003,
    "county":"Cochise County",
    "number":3872.4000000000005,
    "rate":29.35437654924613,
    "population":131919
  },
  {
    "state":"GA",
    "FIPS":13055,
    "county":"Chattooga County",
    "number":534.3300000000002,
    "rate":20.810484499143175,
    "population":25676
  },
  {
    "state":"SD",
    "FIPS":46117,
    "county":"Stanley County",
    "number":46.48,
    "rate":15.613033254954653,
    "population":2977
  },
  {
    "state":"CO",
    "FIPS":8043,
    "county":"Fremont County",
    "number":181.14000000000001,
    "rate":3.844717069236321,
    "population":47114
  },
  {
    "state":"IL",
    "FIPS":17109,
    "county":"McDonough County",
    "number":928.2799999999997,
    "rate":28.522968197879848,
    "population":32545
  },
  {
    "state":"IL",
    "FIPS":17127,
    "county":"Massac County",
    "number":2708.0700000000006,
    "rate":178.8331242158093,
    "population":15143
  },
  {
    "state":"VA",
    "FIPS":51139,
    "county":"Page County",
    "number":2486.57,
    "rate":104.1626172922252,
    "population":23872
  },
  {
    "state":"KY",
    "FIPS":21133,
    "county":"Letcher County",
    "number":1839.0699999999995,
    "rate":76.80071828280295,
    "population":23946
  },
  {
    "state":"AR",
    "FIPS":5091,
    "county":"Miller County",
    "number":595.6999999999999,
    "rate":13.657518857326272,
    "population":43617
  },
  {
    "state":"PR",
    "FIPS":72103,
    "county":"Naguabo Municipio",
    "number":965.9900000000002,
    "rate":null,
    "population":null
  },
  {
    "state":"GA",
    "FIPS":13169,
    "county":"Jones County",
    "number":654.03,
    "rate":22.71331828442438,
    "population":28795
  },
  {
    "state":"PR",
    "FIPS":72091,
    "county":"Manat� Municipio",
    "number":845784.58,
    "rate":null,
    "population":null
  },
  {
    "state":"MO",
    "FIPS":29169,
    "county":"Pulaski County",
    "number":134.28,
    "rate":2.515124838449868,
    "population":53389
  },
  {
    "state":"TX",
    "FIPS":48365,
    "county":"Panola County",
    "number":522.97,
    "rate":21.792232686057172,
    "population":23998
  },
  {
    "state":"AR",
    "FIPS":5121,
    "county":"Randolph County",
    "number":1662.6799999999998,
    "rate":93.14212088958601,
    "population":17851
  },
  {
    "state":"IL",
    "FIPS":17181,
    "county":"Union County",
    "number":548.1800000000001,
    "rate":31.090063520871144,
    "population":17632
  },
  {
    "state":"IL",
    "FIPS":17133,
    "county":"Monroe County",
    "number":824.98,
    "rate":24.751132579280547,
    "population":33331
  },
  {
    "state":"IL",
    "FIPS":17117,
    "county":"Macoupin County",
    "number":900.95,
    "rate":19.084689035756654,
    "population":47208
  },
  {
    "state":"IL",
    "FIPS":17101,
    "county":"Lawrence County",
    "number":599.57,
    "rate":35.906695412624266,
    "population":16698
  },
  {
    "state":"IL",
    "FIPS":17093,
    "county":"Kendall County",
    "number":5480.39,
    "rate":46.38698209826908,
    "population":118145
  },
  {
    "state":"IL",
    "FIPS":17069,
    "county":"Hardin County",
    "number":37,
    "rate":8.691566831101715,
    "population":4257
  },
  {
    "state":"IL",
    "FIPS":17053,
    "county":"Ford County",
    "number":949.1300000000002,
    "rate":67.80468638376912,
    "population":13998
  },
  {
    "state":"PR",
    "FIPS":72109,
    "county":"Patillas",
    "number":258.72999999999996,
    "rate":null,
    "population":null
  },
  {
    "state":"KY",
    "FIPS":21167,
    "county":"Mercer County",
    "number":725.0000000000001,
    "rate":33.96898280466664,
    "population":21343
  },
  {
    "state":"VA",
    "FIPS":51075,
    "county":"Goochland County",
    "number":17746.440000000002,
    "rate":831.2149882903982,
    "population":21350
  },
  {
    "state":"KY",
    "FIPS":21101,
    "county":"Henderson County",
    "number":2995.97,
    "rate":64.48215746201195,
    "population":46462
  },
  {
    "state":"TX",
    "FIPS":48061,
    "county":"Cameron County",
    "number":79874.85000000005,
    "rate":191.98469888089846,
    "population":416048
  },
  {
    "state":"AR",
    "FIPS":5083,
    "county":"Logan County",
    "number":19.5,
    "rate":0.8861622358554875,
    "population":22005
  },
  {
    "state":"VA",
    "FIPS":51059,
    "county":"Fairfax County",
    "number":421950.9500000004,
    "rate":376.38905490388515,
    "population":1121050
  },
  {
    "state":"KY",
    "FIPS":21093,
    "county":"Hardin County",
    "number":8869.14,
    "rate":82.8488958636924,
    "population":107052
  },
  {
    "state":"IL",
    "FIPS":17037,
    "county":"Dekalb County",
    "number":17042.580000000005,
    "rate":162.7862416780492,
    "population":104693
  },
  {
    "state":"ND",
    "FIPS":38023,
    "county":"Divide County",
    "number":81.99,
    "rate":36.71742051052396,
    "population":2233
  },
  {
    "state":"IL",
    "FIPS":17029,
    "county":"Coles County",
    "number":10186.38,
    "rate":189.9345527773116,
    "population":53631
  },
  {
    "state":"IL",
    "FIPS":17183,
    "county":"Vermilion County",
    "number":13068.339999999995,
    "rate":161.80897429547812,
    "population":80764
  },
  {
    "state":"KS",
    "FIPS":20185,
    "county":"Stafford County",
    "number":14.75,
    "rate":3.3876894809370692,
    "population":4354
  },
  {
    "state":"KY",
    "FIPS":21045,
    "county":"Casey County",
    "number":418.81000000000006,
    "rate":26.035683202785037,
    "population":16086
  },
  {
    "state":"VA",
    "FIPS":51079,
    "county":"Greene County",
    "number":90.84,
    "rate":4.830116446004148,
    "population":18807
  },
  {
    "state":"KY",
    "FIPS":21103,
    "county":"Henry County",
    "number":59363.100000000006,
    "rate":3869.319515056707,
    "population":15342
  },
  {
    "state":"VA",
    "FIPS":51195,
    "county":"Wise County",
    "number":2721.6699999999996,
    "rate":66.66184971098265,
    "population":40828
  },
  {
    "state":"PR",
    "FIPS":72085,
    "county":"Las Piedras Municipio",
    "number":2933.6099999999997,
    "rate":null,
    "population":null
  },
  {
    "state":"KY",
    "FIPS":21161,
    "county":"Mason County",
    "number":116292.32999999996,
    "rate":6659.355780793675,
    "population":17463
  },
  {
    "state":"TX",
    "FIPS":48055,
    "county":"Caldwell County",
    "number":423.5900000000001,
    "rate":10.94236780243342,
    "population":38711
  },
  {
    "state":"GA",
    "FIPS":13183,
    "county":"Long County",
    "number":26.82,
    "rate":1.6595507703731203,
    "population":16161
  },
  {
    "state":"NC",
    "FIPS":37125,
    "county":"Moore County",
    "number":130430.40999999997,
    "rate":1444.092227635075,
    "population":90320
  },
  {
    "state":"NJ",
    "FIPS":34039,
    "county":"Union County",
    "number":146065.0100000003,
    "rate":268.0087009014668,
    "population":545001
  },
  {
    "state":"ID",
    "FIPS":16085,
    "county":"Valley County",
    "number":140.52,
    "rate":14.774471664388605,
    "population":9511
  },
  {
    "state":"AL",
    "FIPS":1011,
    "county":"Bullock County",
    "number":21.439999999999998,
    "rate":2.0247426574747376,
    "population":10589
  },
  {
    "state":"KS",
    "FIPS":20145,
    "county":"Pawnee County",
    "number":374.48,
    "rate":54.17040358744395,
    "population":6913
  },
  {
    "state":"KS",
    "FIPS":20129,
    "county":"Morton County",
    "number":7.5,
    "rate":2.389295954125518,
    "population":3139
  },
  {
    "state":"GA",
    "FIPS":13097,
    "county":"Douglas County",
    "number":25244.030000000006,
    "rate":188.49237638696002,
    "population":133926
  },
  {
    "state":"KS",
    "FIPS":20121,
    "county":"Miami County",
    "number":93.45,
    "rate":2.8661248274804483,
    "population":32605
  },
  {
    "state":"MO",
    "FIPS":29051,
    "county":"Cole County",
    "number":252327.98999999982,
    "rate":3303.716956675437,
    "population":76377
  },
  {
    "state":"AR",
    "FIPS":5045,
    "county":"Faulkner County",
    "number":17987.569999999963,
    "rate":151.75670089176458,
    "population":118529
  },
  {
    "state":"VA",
    "FIPS":51067,
    "county":"Franklin County",
    "number":653.46,
    "rate":11.587813874308413,
    "population":56392
  },
  {
    "state":"KY",
    "FIPS":21097,
    "county":"Harrison County",
    "number":2700.3199999999997,
    "rate":145.24096385542168,
    "population":18592
  },
  {
    "state":"GA",
    "FIPS":13151,
    "county":"Henry County",
    "number":55280.27999999991,
    "rate":265.2057396986222,
    "population":208443
  },
  {
    "state":"LA",
    "FIPS":22017,
    "county":"Caddo Parish",
    "number":92149.68000000005,
    "rate":358.10203320276094,
    "population":257328
  },
  {
    "state":"OK",
    "FIPS":40095,
    "county":"Marshall County",
    "number":12.05,
    "rate":0.757242506127066,
    "population":15913
  },
  {
    "state":"CO",
    "FIPS":8091,
    "county":"Ouray County",
    "number":12.43,
    "rate":2.734873487348735,
    "population":4545
  },
  {
    "state":"IN",
    "FIPS":18113,
    "county":"Noble County",
    "number":5238.839999999999,
    "rate":110.46811740890686,
    "population":47424
  },
  {
    "state":"ID",
    "FIPS":16053,
    "county":"Jerome County",
    "number":44.5,
    "rate":1.9764601376859872,
    "population":22515
  },
  {
    "state":"UT",
    "FIPS":49035,
    "county":"Salt Lake County",
    "number":1148732.930000002,
    "rate":1079.2284587965844,
    "population":1064402
  },
  {
    "state":"KS",
    "FIPS":20081,
    "county":"Haskell County",
    "number":126.87,
    "rate":30.056858564321253,
    "population":4221
  },
  {
    "state":"UT",
    "FIPS":49003,
    "county":"Box Elder County",
    "number":3201.9499999999994,
    "rate":63.69631383158605,
    "population":50269
  },
  {
    "state":"KS",
    "FIPS":20065,
    "county":"Graham County",
    "number":336.43,
    "rate":129.79552469135803,
    "population":2592
  },
  {
    "state":"KS",
    "FIPS":20057,
    "county":"Ford County",
    "number":856.14,
    "rate":24.62082650332154,
    "population":34773
  },
  {
    "state":"MO",
    "FIPS":29019,
    "county":"Boone County",
    "number":298503.1200000001,
    "rate":1770.5651513713585,
    "population":168592
  },
  {
    "state":"WV",
    "FIPS":54099,
    "county":"Wayne County",
    "number":867.0699999999999,
    "rate":20.80701670186216,
    "population":41672
  },
  {
    "state":"AR",
    "FIPS":5037,
    "county":"Cross County",
    "number":2067.829999999999,
    "rate":117.13096182168341,
    "population":17654
  },
  {
    "state":"NH",
    "FIPS":33007,
    "county":"Coos County",
    "number":1217.8299999999997,
    "rate":38.08456077805922,
    "population":31977
  },
  {
    "state":"ND",
    "FIPS":38019,
    "county":"Cavalier County",
    "number":27.24,
    "rate":6.908445346183109,
    "population":3943
  },
  {
    "state":"IL",
    "FIPS":17027,
    "county":"Clinton County",
    "number":1054.24,
    "rate":27.70160548650708,
    "population":38057
  },
  {
    "state":"KY",
    "FIPS":21051,
    "county":"Clay County",
    "number":1915.5399999999995,
    "rate":88.92530523188336,
    "population":21541
  },
  {
    "state":"IN",
    "FIPS":18049,
    "county":"Fulton County",
    "number":774.6199999999999,
    "rate":37.48644986449864,
    "population":20664
  },
  {
    "state":"MT",
    "FIPS":30031,
    "county":"Gallatin County",
    "number":1653.6200000000001,
    "rate":17.856896030409054,
    "population":92604
  },
  {
    "state":"WA",
    "FIPS":53001,
    "county":"Adams County",
    "number":110.94,
    "rate":5.865496457650417,
    "population":18914
  },
  {
    "state":"ID",
    "FIPS":16021,
    "county":"Boundary County",
    "number":242.54000000000002,
    "rate":22.38486386709737,
    "population":10835
  },
  {
    "state":"RI",
    "FIPS":44007,
    "county":"Providence County",
    "number":215736.82000000036,
    "rate":342.78326829454363,
    "population":629368
  },
  {
    "state":"AL",
    "FIPS":1007,
    "county":"Bibb County",
    "number":111.47000000000001,
    "rate":4.924891755765663,
    "population":22634
  },
  {
    "state":"KS",
    "FIPS":20155,
    "county":"Reno County",
    "number":6272.1100000000015,
    "rate":97.6705545260601,
    "population":64217
  },
  {
    "state":"MO",
    "FIPS":29069,
    "county":"Dunklin County",
    "number":2245.540000000001,
    "rate":70.45494477911649,
    "population":31872
  },
  {
    "state":"WV",
    "FIPS":54019,
    "county":"Fayette County",
    "number":3660.4500000000003,
    "rate":79.75184103882522,
    "population":45898
  },
  {
    "state":"AR",
    "FIPS":5027,
    "county":"Columbia County",
    "number":1746.9699999999993,
    "rate":71.59419695914099,
    "population":24401
  },
  {
    "state":"TX",
    "FIPS":48027,
    "county":"Bell County",
    "number":21972.540000000005,
    "rate":67.99549431063883,
    "population":323147
  },
  {
    "state":"MO",
    "FIPS":29186,
    "county":"Ste Genevieve County",
    "number":2239.42,
    "rate":125.30326768128917,
    "population":17872
  },
  {
    "state":"IN",
    "FIPS":18007,
    "county":"Benton County",
    "number":153.47,
    "rate":17.372651120670138,
    "population":8834
  },
  {
    "state":"TN",
    "FIPS":47111,
    "county":"Macon County",
    "number":170.52999999999997,
    "rate":7.5750710732054,
    "population":22512
  },
  {
    "state":"AL",
    "FIPS":1087,
    "county":"Macon County",
    "number":147.94,
    "rate":7.227161700048852,
    "population":20470
  },
  {
    "state":"NY",
    "FIPS":36073,
    "county":"Orleans County",
    "number":4497.31,
    "rate":105.7767481242797,
    "population":42517
  },
  {
    "state":"CT",
    "FIPS":9001,
    "county":"Fairfield County",
    "number":431737.53,
    "rate":461.60819638828605,
    "population":935290
  },
  {
    "state":"MD",
    "FIPS":24039,
    "county":"Somerset County",
    "number":817.6900000000002,
    "rate":31.265629182120605,
    "population":26153
  },
  {
    "state":"OR",
    "FIPS":41017,
    "county":"Deschutes County",
    "number":207220.21000000005,
    "rate":1281.1458088608067,
    "population":161746
  },
  {
    "state":"GA",
    "FIPS":13025,
    "county":"Brantley County",
    "number":85.71000000000001,
    "rate":4.619240097008893,
    "population":18555
  },
  {
    "state":"AR",
    "FIPS":5019,
    "county":"Clark County",
    "number":1406.2600000000002,
    "rate":61.61861361843836,
    "population":22822
  },
  {
    "state":"KS",
    "FIPS":20147,
    "county":"Phillips County",
    "number":10.71,
    "rate":1.9398659663104512,
    "population":5521
  },
  {
    "state":"WV",
    "FIPS":54069,
    "county":"Ohio County",
    "number":21773.699999999968,
    "rate":494.2278009805695,
    "population":44056
  },
  {
    "state":"GA",
    "FIPS":13085,
    "county":"Dawson County",
    "number":2131.78,
    "rate":95.27082588487666,
    "population":22376
  },
  {
    "state":"WV",
    "FIPS":54071,
    "county":"Pendleton County",
    "number":112.8,
    "rate":14.976101964949548,
    "population":7532
  },
  {
    "state":"MO",
    "FIPS":29005,
    "county":"Atchison County",
    "number":309.53999999999996,
    "rate":55.954446854663765,
    "population":5532
  },
  {
    "state":"NY",
    "FIPS":36077,
    "county":"Otsego County",
    "number":15767.179999999997,
    "rate":254.8025210084033,
    "population":61880
  },
  {
    "state":"MD",
    "FIPS":24041,
    "county":"Talbot County",
    "number":21655.699999999997,
    "rate":568.958541327308,
    "population":38062
  },
  {
    "state":"OH",
    "FIPS":39139,
    "county":"Richland County",
    "number":10565.219999999988,
    "rate":86.18478154468617,
    "population":122588
  },
  {
    "state":"MN",
    "FIPS":27169,
    "county":"Winona County",
    "number":100,
    "rate":1.9483302809492264,
    "population":51326
  },
  {
    "state":"OR",
    "FIPS":41015,
    "county":"Curry County",
    "number":780.73,
    "rate":35.090565868128905,
    "population":22249
  },
  {
    "state":"AR",
    "FIPS":5003,
    "county":"Ashley County",
    "number":1028.67,
    "rate":47.85179327348003,
    "population":21497
  },
  {
    "state":"KS",
    "FIPS":20157,
    "county":"Republic County",
    "number":1658.9500000000007,
    "rate":341.4882667764514,
    "population":4858
  },
  {
    "state":"PR",
    "FIPS":72054,
    "county":"Florida Municipio",
    "number":93.45,
    "rate":null,
    "population":null
  },
  {
    "state":"IL",
    "FIPS":17149,
    "county":"Pike County",
    "number":2090.889999999999,
    "rate":128.4409361754407,
    "population":16279
  },
  {
    "state":"IL",
    "FIPS":17021,
    "county":"Christian County",
    "number":844.3100000000003,
    "rate":24.46495320332648,
    "population":34511
  },
  {
    "state":"VA",
    "FIPS":51143,
    "county":"Pittsylvania County",
    "number":684.9899999999999,
    "rate":10.890489363731755,
    "population":62898
  },
  {
    "state":"KY",
    "FIPS":21135,
    "county":"Lewis County",
    "number":241.21000000000004,
    "rate":17.42595000722439,
    "population":13842
  },
  {
    "state":"IA",
    "FIPS":19001,
    "county":"Adair County",
    "number":51.65,
    "rate":6.872920825016633,
    "population":7515
  },
  {
    "state":"VA",
    "FIPS":51760,
    "county":"Richmond City",
    "number":141312.93,
    "rate":668.0641150496865,
    "population":211526
  },
  {
    "state":"GA",
    "FIPS":13309,
    "county":"Wheeler County",
    "number":113.34,
    "rate":14.332321699544764,
    "population":7908
  },
  {
    "state":"CA",
    "FIPS":6057,
    "county":"Nevada County",
    "number":812.0000000000001,
    "rate":8.257655110695291,
    "population":98333
  },
  {
    "state":"VA",
    "FIPS":51181,
    "county":"Surry County",
    "number":10.53,
    "rate":1.5394736842105263,
    "population":6840
  },
  {
    "state":"PR",
    "FIPS":72057,
    "county":"Guayama Municipio",
    "number":3849.52,
    "rate":null,
    "population":null
  },
  {
    "state":"AL",
    "FIPS":1019,
    "county":"Cherokee County",
    "number":2687.950000000001,
    "rate":103.31514010070343,
    "population":26017
  },
  {
    "state":"MS",
    "FIPS":28135,
    "county":"Tallahatchie County",
    "number":40.04,
    "rate":2.6511289147851422,
    "population":15103
  },
  {
    "state":"CA",
    "FIPS":6043,
    "county":"Mariposa County",
    "number":130.07999999999998,
    "rate":7.289436817035583,
    "population":17845
  },
  {
    "state":"OH",
    "FIPS":39123,
    "county":"Ottawa County",
    "number":3832.829999999999,
    "rate":92.66773047073328,
    "population":41361
  },
  {
    "state":"AR",
    "FIPS":5001,
    "county":"Arkansas County",
    "number":2979.0499999999997,
    "rate":156.84163420027375,
    "population":18994
  },
  {
    "state":"IA",
    "FIPS":19171,
    "county":"Tama County",
    "number":126.41,
    "rate":7.212712541367112,
    "population":17526
  },
  {
    "state":"KS",
    "FIPS":20161,
    "county":"Riley County",
    "number":8788.730000000005,
    "rate":115.19102979147287,
    "population":76297
  },
  {
    "state":"KS",
    "FIPS":20113,
    "county":"McPherson County",
    "number":1754.3800000000003,
    "rate":59.7927814321257,
    "population":29341
  },
  {
    "state":"KS",
    "FIPS":20137,
    "county":"Norton County",
    "number":215.69000000000005,
    "rate":38.481712756467445,
    "population":5605
  },
  {
    "state":"LA",
    "FIPS":22123,
    "county":"West Carroll Parish",
    "number":128.20999999999998,
    "rate":11.142881974621934,
    "population":11506
  },
  {
    "state":"OH",
    "FIPS":39013,
    "county":"Belmont County",
    "number":14134.379999999992,
    "rate":203.01016890727325,
    "population":69624
  },
  {
    "state":"TN",
    "FIPS":47115,
    "county":"Marion County",
    "number":1762.9599999999996,
    "rate":62.456513267438964,
    "population":28227
  },
  {
    "state":"IA",
    "FIPS":19121,
    "county":"Madison County",
    "number":24692.809999999998,
    "rate":1580.1375823894539,
    "population":15627
  },
  {
    "state":"AL",
    "FIPS":1057,
    "county":"Fayette County",
    "number":795.2,
    "rate":46.82605111294312,
    "population":16982
  },
  {
    "state":"VA",
    "FIPS":51053,
    "county":"Dinwiddie County",
    "number":1233.9800000000002,
    "rate":43.913879003558726,
    "population":28100
  },
  {
    "state":"AL",
    "FIPS":1017,
    "county":"Chambers County",
    "number":2194.11,
    "rate":64.36794085721829,
    "population":34087
  },
  {
    "state":"UT",
    "FIPS":49019,
    "county":"Grand County",
    "number":265,
    "rate":28.36955358098705,
    "population":9341
  },
  {
    "state":"KS",
    "FIPS":20073,
    "county":"Greenwood County",
    "number":33.55,
    "rate":5.2047781569965865,
    "population":6446
  },
  {
    "state":"LA",
    "FIPS":22059,
    "county":"La Salle Parish",
    "number":331.3500000000001,
    "rate":22.30111724323597,
    "population":14858
  },
  {
    "state":"FL",
    "FIPS":12131,
    "county":"Walton County",
    "number":1731.6599999999999,
    "rate":30.234133566128328,
    "population":57275
  },
  {
    "state":"IA",
    "FIPS":19057,
    "county":"Des Moines County",
    "number":2303.0899999999992,
    "rate":57.189789178316886,
    "population":40271
  },
  {
    "state":"SD",
    "FIPS":46023,
    "county":"Charles Mix County",
    "number":169.78,
    "rate":18.434310532030402,
    "population":9210
  },
  {
    "state":"AL",
    "FIPS":1053,
    "county":"Escambia County",
    "number":2809.789999999999,
    "rate":73.8485597140454,
    "population":38048
  },
  {
    "state":"IL",
    "FIPS":17061,
    "county":"Greene County",
    "number":316.46,
    "rate":23.24177438307873,
    "population":13616
  },
  {
    "state":"OH",
    "FIPS":39143,
    "county":"Sandusky County",
    "number":5401.1500000000015,
    "rate":89.18675693527082,
    "population":60560
  },
  {
    "state":"MN",
    "FIPS":27171,
    "county":"Wright County",
    "number":136.57000000000002,
    "rate":1.0726852870024193,
    "population":127316
  },
  {
    "state":"IL",
    "FIPS":17085,
    "county":"Jo Daviess County",
    "number":532.14,
    "rate":23.777479892761395,
    "population":22380
  },
  {
    "state":"NY",
    "FIPS":36039,
    "county":"Greene County",
    "number":3290.5500000000006,
    "rate":67.6288638605722,
    "population":48656
  },
  {
    "state":"AL",
    "FIPS":1015,
    "county":"Calhoun County",
    "number":25832.64,
    "rate":220.29471960704052,
    "population":117264
  },
  {
    "state":"NY",
    "FIPS":36017,
    "county":"Chenango County",
    "number":3286.9299999999994,
    "rate":65.93773195049047,
    "population":49849
  },
  {
    "state":"MD",
    "FIPS":24011,
    "county":"Caroline County",
    "number":2873.8299999999995,
    "rate":88.07864410935392,
    "population":32628
  },
  {
    "state":"KS",
    "FIPS":20041,
    "county":"Dickinson County",
    "number":954.33,
    "rate":48.30094139082904,
    "population":19758
  },
  {
    "state":"CT",
    "FIPS":9003,
    "county":"Hartford County",
    "number":641039.5800000014,
    "rate":714.0926904148181,
    "population":897698
  },
  {
    "state":"MD",
    "FIPS":24043,
    "county":"Washington County",
    "number":49121.83999999998,
    "rate":329.31872728979215,
    "population":149162
  },
  {
    "state":"AL",
    "FIPS":1097,
    "county":"Mobile County",
    "number":326133.51999999955,
    "rate":787.8477612300843,
    "population":413955
  },
  {
    "state":"OR",
    "FIPS":41025,
    "county":"Harney County",
    "number":86.10999999999999,
    "rate":11.91339236303265,
    "population":7228
  },
  {
    "state":"GA",
    "FIPS":13027,
    "county":"Brooks County",
    "number":707.4299999999998,
    "rate":45.53195597605714,
    "population":15537
  },
  {
    "state":"MS",
    "FIPS":28003,
    "county":"Alcorn County",
    "number":4387.9,
    "rate":117.83709751054057,
    "population":37237
  },
  {
    "state":"HI",
    "FIPS":15007,
    "county":"Kauai County",
    "number":3952.490000000001,
    "rate":57.655974209735554,
    "population":68553
  },
  {
    "state":"KS",
    "FIPS":20105,
    "county":"Lincoln County",
    "number":12.23,
    "rate":3.8714783159227606,
    "population":3159
  },
  {
    "state":"NY",
    "FIPS":36087,
    "county":"Rockland County",
    "number":201819.2699999998,
    "rate":635.0012428223072,
    "population":317825
  },
  {
    "state":"KS",
    "FIPS":20013,
    "county":"Brown County",
    "number":226.69000000000003,
    "rate":22.92576860841424,
    "population":9888
  },
  {
    "state":"OH",
    "FIPS":39075,
    "county":"Holmes County",
    "number":129.28,
    "rate":2.999188029230948,
    "population":43105
  },
  {
    "state":"OR",
    "FIPS":41059,
    "county":"Umatilla County",
    "number":3669.7100000000005,
    "rate":47.70813832553303,
    "population":76920
  },
  {
    "state":"AK",
    "FIPS":2150,
    "county":"Kodiak Island Borough",
    "number":114.86,
    "rate":8.16056838365897,
    "population":14075
  },
  {
    "state":"NJ",
    "FIPS":34013,
    "county":"Essex County",
    "number":385986.50999999937,
    "rate":489.566553571994,
    "population":788425
  },
  {
    "state":"AK",
    "FIPS":2110,
    "county":"City and Borough of Juneau",
    "number":795.2000000000002,
    "rate":24.534880133288084,
    "population":32411
  },
  {
    "state":"CO",
    "FIPS":8045,
    "county":"Garfield County",
    "number":2731.4300000000007,
    "rate":48.1080367050038,
    "population":56777
  },
  {
    "state":"WA",
    "FIPS":53055,
    "county":"San Juan County",
    "number":270,
    "rate":17.09726443768997,
    "population":15792
  },
  {
    "state":"LA",
    "FIPS":22091,
    "county":"St Helena Parish",
    "number":540.28,
    "rate":48.973894126178386,
    "population":11032
  },
  {
    "state":"FL",
    "FIPS":12057,
    "county":"Hillsborough County",
    "number":673813.5500000011,
    "rate":525.5824737604063,
    "population":1282032
  },
  {
    "state":"NC",
    "FIPS":37145,
    "county":"Person County",
    "number":4419.62,
    "rate":112.805839863192,
    "population":39179
  },
  {
    "state":"TX",
    "FIPS":48495,
    "county":"Winkler County",
    "number":18.73,
    "rate":2.5503812636165577,
    "population":7344
  },
  {
    "state":"PA",
    "FIPS":42089,
    "county":"Monroe County",
    "number":33532.00999999996,
    "rate":199.04437123438078,
    "population":168465
  },
  {
    "state":"GA",
    "FIPS":13293,
    "county":"Upson County",
    "number":1826.7899999999997,
    "rate":68.63761037009205,
    "population":26615
  },
  {
    "state":"GA",
    "FIPS":13311,
    "county":"White County",
    "number":906.5599999999998,
    "rate":32.87377162127859,
    "population":27577
  },
  {
    "state":"NY",
    "FIPS":36065,
    "county":"Oneida County",
    "number":94884.24000000033,
    "rate":405.5211320577326,
    "population":233981
  },
  {
    "state":"MD",
    "FIPS":24035,
    "county":"Queen Anne's County",
    "number":3167.6099999999997,
    "rate":65.21741815935762,
    "population":48570
  },
  {
    "state":"OR",
    "FIPS":41009,
    "county":"Columbia County",
    "number":188.27,
    "rate":3.826003901804585,
    "population":49208
  },
  {
    "state":"GA",
    "FIPS":13023,
    "county":"Bleckley County",
    "number":769.41,
    "rate":59.65806001395673,
    "population":12897
  },
  {
    "state":"FL",
    "FIPS":12075,
    "county":"Levy County",
    "number":18031.84,
    "rate":450.8298122359177,
    "population":39997
  },
  {
    "state":"AL",
    "FIPS":1001,
    "county":"Autauga County",
    "number":4658.509999999999,
    "rate":84.40552978692563,
    "population":55192
  },
  {
    "state":"KS",
    "FIPS":20193,
    "county":"Thomas County",
    "number":679.16,
    "rate":85.46118031961745,
    "population":7947
  },
  {
    "state":"IL",
    "FIPS":17005,
    "county":"Bond County",
    "number":1073.9200000000003,
    "rate":60.94546280006812,
    "population":17621
  },
  {
    "state":"IL",
    "FIPS":17157,
    "county":"Randolph County",
    "number":2177.380000000001,
    "rate":66.08735241448389,
    "population":32947
  },
  {
    "state":"PA",
    "FIPS":42025,
    "county":"Carbon County",
    "number":4834.35,
    "rate":74.45823771312396,
    "population":64927
  },
  {
    "state":"GA",
    "FIPS":13277,
    "county":"Tift County",
    "number":4814.86,
    "rate":117.45279797043469,
    "population":40994
  }
];


function compareNum(a,b) {
    return b.number - a.number;
}

function compareRate(a,b) {
    return b.rate - a.rate;
}


var topCountiesNum2013 = (function(){
  return totals2013.sort(compareNum).slice(0);
})();

var topCountiesNum2014 = (function(){
  return totals2014.sort(compareNum).slice(0);
})();

var topCountiesRate2013 = (function(){
  return totals2013.sort(compareRate).slice(0);
})();

var topCountiesRate2014 = (function(){
  return totals2014.sort(compareRate).slice(0);
})();

//DASHBOARD STATE
var dashStats = { 
    grants: {
      '2013': {
        top: 11234105.090000004,
        topPC: 2933.02419148287,
        total: 57244553.18000001,
        num: 476
      },
      '2014': {
        top: 15350263.669999998,
        topPC: 6667.5462612,
        total: 100467944.38999994,
        num: 460
      }
    },
    payments: {
      '2013': {
        top: 1170724.880000001,
        topPC: 1650.9673420819188,
        total: 42151131.11000026,
        num: 2558
      },
      '2014': {
        top: 1947497.8299999998,
        topPC: 5088.382967899999,
        total: 118611712.15,
        num: 2774
      }
    },
    totals: {
      '2013': {
        top: 13149874.49,
        topPC: 3361.343699393508,
        total: 99395684.28999971,
        num: 2559
      },
      '2014': {
        top: 18335468.33,
        topPC: 8551.784883510334,
        total: 217014309.10000032,
        num: 2849
      }
    }
  }

    return {
      '2013': totals2013,
      '2014': totals2014,
      total2013: topCountiesNum2013,
      total2014: topCountiesNum2014,
      per_capita2013: topCountiesRate2013,
      per_capita2014: topCountiesRate2014,
      dashStats: dashStats
    };
  });


