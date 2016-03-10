'use strict';

angular.module('foglightApp')
  .factory('grants', function () {



var grants2013 =
[
  {
    "state":"AL",
    "FIPS":1003,
    "county":"Baldwin County",
    "number":16545.190000000002,
    "rate":86.82358929686558,
    "population":190561
  },
  {
    "state":"AL",
    "FIPS":1033,
    "county":"Colbert County",
    "number":12276.569999999998,
    "rate":225.36981623923776,
    "population":54473
  },
  {
    "state":"AL",
    "FIPS":1045,
    "county":"Dale County",
    "number":1016,
    "rate":20.19479228781554,
    "population":50310
  },
  {
    "state":"AL",
    "FIPS":1051,
    "county":"Elmore County",
    "number":38825.3,
    "rate":482.94979599960203,
    "population":80392
  },
  {
    "state":"AL",
    "FIPS":1053,
    "county":"Escambia County",
    "number":18,
    "rate":0.4730866274179983,
    "population":38048
  },
  {
    "state":"AL",
    "FIPS":1069,
    "county":"Houston County",
    "number":28954.15,
    "rate":280.10748007120196,
    "population":103368
  },
  {
    "state":"AL",
    "FIPS":1073,
    "county":"Jefferson County",
    "number":75401.39,
    "rate":114.59996382720347,
    "population":657953
  },
  {
    "state":"AL",
    "FIPS":1083,
    "county":"Limestone County",
    "number":32764.72,
    "rate":375.0411501436535,
    "population":87363
  },
  {
    "state":"AL",
    "FIPS":1089,
    "county":"Madison County",
    "number":15068.749999999998,
    "rate":43.949129110911485,
    "population":342868
  },
  {
    "state":"AL",
    "FIPS":1097,
    "county":"Mobile County",
    "number":28587.8,
    "rate":69.06016354434661,
    "population":413955
  },
  {
    "state":"AL",
    "FIPS":1101,
    "county":"Montgomery County",
    "number":6312,
    "rate":27.512138990349833,
    "population":229426
  },
  {
    "state":"AL",
    "FIPS":1117,
    "county":"Shelby County",
    "number":27.99,
    "rate":0.1392793698342481,
    "population":200963
  },
  {
    "state":"AL",
    "FIPS":1115,
    "county":"St Clair County",
    "number":5806.4,
    "rate":68.17824223566018,
    "population":85165
  },
  {
    "state":"AL",
    "FIPS":1123,
    "county":"Tallapoosa County",
    "number":5040,
    "rate":122.46088055204588,
    "population":41156
  },
  {
    "state":"AL",
    "FIPS":1125,
    "county":"Tuscaloosa County",
    "number":920,
    "rate":4.631424213287153,
    "population":198643
  },
  {
    "state":"AR",
    "FIPS":5005,
    "county":"Baxter County",
    "number":11370,
    "rate":276.7972344621078,
    "population":41077
  },
  {
    "state":"AR",
    "FIPS":5031,
    "county":"Craighead County",
    "number":15966.18,
    "rate":159.8168223176481,
    "population":99903
  },
  {
    "state":"AR",
    "FIPS":5059,
    "county":"Hot Spring County",
    "number":1089,
    "rate":32.6184628287306,
    "population":33386
  },
  {
    "state":"AR",
    "FIPS":5119,
    "county":"Pulaski County",
    "number":309859.41000000015,
    "rate":796.4350045494506,
    "population":389058
  },
  {
    "state":"AR",
    "FIPS":5145,
    "county":"White County",
    "number":2760.9,
    "rate":35.10273101764736,
    "population":78652
  },
  {
    "state":"AZ",
    "FIPS":4005,
    "county":"Coconino County",
    "number":880,
    "rate":6.473015616150174,
    "population":135949
  },
  {
    "state":"AZ",
    "FIPS":4013,
    "county":"Maricopa County",
    "number":537562.2299999997,
    "rate":136.33787131600647,
    "population":3942868
  },
  {
    "state":"AZ",
    "FIPS":4019,
    "county":"Pima County",
    "number":46003.76,
    "rate":46.32367127381698,
    "population":993094
  },
  {
    "state":"AZ",
    "FIPS":4025,
    "county":"Yavapai County",
    "number":9701.9,
    "rate":45.654066416010615,
    "population":212509
  },
  {
    "state":"CA",
    "FIPS":6001,
    "county":"Alameda County",
    "number":312872.07,
    "rate":201.04242315979,
    "population":1556249
  },
  {
    "state":"CA",
    "FIPS":6013,
    "county":"Contra Costa County",
    "number":464958.42000000004,
    "rate":430.77312624726926,
    "population":1079358
  },
  {
    "state":"CA",
    "FIPS":6019,
    "county":"Fresno County",
    "number":396902.8600000001,
    "rate":418.5679363874126,
    "population":948240
  },
  {
    "state":"CA",
    "FIPS":6029,
    "county":"Kern County",
    "number":5040,
    "rate":5.884399569411397,
    "population":856502
  },
  {
    "state":"CA",
    "FIPS":6037,
    "county":"Los Angeles County",
    "number":2079814.7999999998,
    "rate":208.5054960125788,
    "population":9974868
  },
  {
    "state":"CA",
    "FIPS":6041,
    "county":"Marin County",
    "number":67462.75,
    "rate":263.37924518725873,
    "population":256143
  },
  {
    "state":"CA",
    "FIPS":6047,
    "county":"Merced County",
    "number":12447.250000000002,
    "rate":47.54796911946154,
    "population":261783
  },
  {
    "state":"CA",
    "FIPS":6059,
    "county":"Orange County",
    "number":465146,
    "rate":150.53789888517176,
    "population":3089893
  },
  {
    "state":"CA",
    "FIPS":6061,
    "county":"Placer County",
    "number":3000,
    "rate":8.299995020002987,
    "population":361446
  },
  {
    "state":"CA",
    "FIPS":6065,
    "county":"Riverside County",
    "number":92642.89,
    "rate":40.84749290019176,
    "population":2268019
  },
  {
    "state":"CA",
    "FIPS":6067,
    "county":"Sacramento County",
    "number":40213.530000000006,
    "rate":27.756995411973325,
    "population":1448771
  },
  {
    "state":"CA",
    "FIPS":6071,
    "county":"San Bernardino County",
    "number":99844.94,
    "rate":47.9873558804432,
    "population":2080651
  },
  {
    "state":"CA",
    "FIPS":6073,
    "county":"San Diego County",
    "number":2136312.75,
    "rate":671.076215998364,
    "population":3183413
  },
  {
    "state":"CA",
    "FIPS":6075,
    "county":"San Francisco County",
    "number":16416,
    "rate":19.78567924685214,
    "population":829691
  },
  {
    "state":"CA",
    "FIPS":6077,
    "county":"San Joaquin County",
    "number":285.45,
    "rate":0.406835462883123,
    "population":701635
  },
  {
    "state":"CA",
    "FIPS":6079,
    "county":"San Luis Obispo County",
    "number":26925.370000000003,
    "rate":98.07877520690057,
    "population":274528
  },
  {
    "state":"CA",
    "FIPS":6081,
    "county":"San Mateo County",
    "number":38329.81,
    "rate":51.745434958109335,
    "population":740738
  },
  {
    "state":"CA",
    "FIPS":6083,
    "county":"Santa Barbara County",
    "number":386,
    "rate":0.8961572036180606,
    "population":430728
  },
  {
    "state":"CA",
    "FIPS":6085,
    "county":"Santa Clara County",
    "number":285452.98000000004,
    "rate":155.0449677312126,
    "population":1841098
  },
  {
    "state":"CA",
    "FIPS":6097,
    "county":"Sonoma County",
    "number":6241.92,
    "rate":12.716863812500254,
    "population":490838
  },
  {
    "state":"CA",
    "FIPS":6099,
    "county":"Stanislaus County",
    "number":12546.739999999998,
    "rate":24.029731831292345,
    "population":522134
  },
  {
    "state":"CA",
    "FIPS":6111,
    "county":"Ventura County",
    "number":64055.85,
    "rate":76.66988638811887,
    "population":835476
  },
  {
    "state":"CO",
    "FIPS":8001,
    "county":"Adams County",
    "number":527798.01,
    "rate":1145.7604965125593,
    "population":460653
  },
  {
    "state":"CO",
    "FIPS":8005,
    "county":"Arapahoe County",
    "number":54204.83000000001,
    "rate":90.93991957064078,
    "population":596051
  },
  {
    "state":"CO",
    "FIPS":8013,
    "county":"Boulder County",
    "number":17698.75,
    "rate":57.93693920774642,
    "population":305483
  },
  {
    "state":"CO",
    "FIPS":8031,
    "county":"Denver County",
    "number":40923.96,
    "rate":64.56227479538326,
    "population":633868
  },
  {
    "state":"CO",
    "FIPS":8041,
    "county":"El Paso County",
    "number":31424.710000000003,
    "rate":48.66585414201733,
    "population":645724
  },
  {
    "state":"CO",
    "FIPS":8059,
    "county":"Jefferson County",
    "number":92699.59000000001,
    "rate":169.89740130970034,
    "population":545621
  },
  {
    "state":"CO",
    "FIPS":8069,
    "county":"Larimer County",
    "number":9336.3,
    "rate":30.036192835427155,
    "population":310835
  },
  {
    "state":"CO",
    "FIPS":8075,
    "county":"Logan County",
    "number":5040,
    "rate":222.88064387741565,
    "population":22613
  },
  {
    "state":"CO",
    "FIPS":8119,
    "county":"Teller County",
    "number":9478.33,
    "rate":405.4727070499658,
    "population":23376
  },
  {
    "state":"CT",
    "FIPS":9001,
    "county":"Fairfield County",
    "number":155088.82000000004,
    "rate":165.81896524072752,
    "population":935290
  },
  {
    "state":"CT",
    "FIPS":9003,
    "county":"Hartford County",
    "number":37854.53,
    "rate":42.168446404024515,
    "population":897698
  },
  {
    "state":"CT",
    "FIPS":9009,
    "county":"New Haven County",
    "number":549616.7400000001,
    "rate":636.1076628037653,
    "population":864031
  },
  {
    "state":"DC",
    "FIPS":11001,
    "county":"District of Columbia",
    "number":134559.54000000004,
    "rate":211.89143990929713,
    "population":635040
  },
  {
    "state":"DE",
    "FIPS":10003,
    "county":"New Castle County",
    "number":111.65,
    "rate":0.20447931489814497,
    "population":546021
  },
  {
    "state":"DE",
    "FIPS":10005,
    "county":"Sussex County",
    "number":5544,
    "rate":27.284270204828886,
    "population":203194
  },
  {
    "state":"FL",
    "FIPS":12005,
    "county":"Bay County",
    "number":37591.75,
    "rate":218.56431038292033,
    "population":171994
  },
  {
    "state":"FL",
    "FIPS":12011,
    "county":"Broward County",
    "number":574109.2899999999,
    "rate":315.48401366544067,
    "population":1819773
  },
  {
    "state":"FL",
    "FIPS":12019,
    "county":"Clay County",
    "number":145948.68,
    "rate":751.1744057973997,
    "population":194294
  },
  {
    "state":"FL",
    "FIPS":12021,
    "county":"Collier County",
    "number":22484.61,
    "rate":67.54711256244875,
    "population":332873
  },
  {
    "state":"FL",
    "FIPS":12031,
    "county":"Duval County",
    "number":788620.43,
    "rate":895.5540628779405,
    "population":880595
  },
  {
    "state":"FL",
    "FIPS":12033,
    "county":"Escambia County",
    "number":8269.7,
    "rate":27.183824544564025,
    "population":304214
  },
  {
    "state":"FL",
    "FIPS":12035,
    "county":"Flagler County",
    "number":10699.88,
    "rate":108.61719622373361,
    "population":98510
  },
  {
    "state":"FL",
    "FIPS":12057,
    "county":"Hillsborough County",
    "number":211170.16999999998,
    "rate":164.71520991675715,
    "population":1282032
  },
  {
    "state":"FL",
    "FIPS":12061,
    "county":"Indian River County",
    "number":19814.6,
    "rate":140.92085798816566,
    "population":140608
  },
  {
    "state":"FL",
    "FIPS":12069,
    "county":"Lake County",
    "number":64730.10000000001,
    "rate":213.3138902619872,
    "population":303450
  },
  {
    "state":"FL",
    "FIPS":12071,
    "county":"Lee County",
    "number":4374.38,
    "rate":6.782110674927285,
    "population":644988
  },
  {
    "state":"FL",
    "FIPS":12073,
    "county":"Leon County",
    "number":558.84,
    "rate":1.9687585871610056,
    "population":283854
  },
  {
    "state":"FL",
    "FIPS":12075,
    "county":"Levy County",
    "number":13281.53,
    "rate":332.06315473660527,
    "population":39997
  },
  {
    "state":"FL",
    "FIPS":12081,
    "county":"Manatee County",
    "number":177545.19999999995,
    "rate":531.4594801703828,
    "population":334071
  },
  {
    "state":"FL",
    "FIPS":12083,
    "county":"Marion County",
    "number":30762.889999999996,
    "rate":91.96816095905767,
    "population":334495
  },
  {
    "state":"FL",
    "FIPS":12085,
    "county":"Martin County",
    "number":2668.6,
    "rate":17.928597342219476,
    "population":148846
  },
  {
    "state":"FL",
    "FIPS":12086,
    "county":"Miami-Dade County",
    "number":1710097.3299999987,
    "rate":654.9687969176083,
    "population":2610960
  },
  {
    "state":"FL",
    "FIPS":12095,
    "county":"Orange County",
    "number":406434.22,
    "rate":338.11025259634164,
    "population":1202076
  },
  {
    "state":"FL",
    "FIPS":12097,
    "county":"Osceola County",
    "number":118099.34,
    "rate":408.6906599300965,
    "population":288970
  },
  {
    "state":"FL",
    "FIPS":12099,
    "county":"Palm Beach County",
    "number":405280.09000000014,
    "rate":298.3042926867328,
    "population":1358613
  },
  {
    "state":"FL",
    "FIPS":12101,
    "county":"Pasco County",
    "number":59302.71,
    "rate":126.01403727975114,
    "population":470604
  },
  {
    "state":"FL",
    "FIPS":12103,
    "county":"Pinellas County",
    "number":346535.24999999994,
    "rate":375.7436853832683,
    "population":922265
  },
  {
    "state":"FL",
    "FIPS":12105,
    "county":"Polk County",
    "number":31063.559999999998,
    "rate":50.447184310872345,
    "population":615764
  },
  {
    "state":"FL",
    "FIPS":12115,
    "county":"Sarasota County",
    "number":37748.270000000004,
    "rate":97.78077969174979,
    "population":386050
  },
  {
    "state":"FL",
    "FIPS":12117,
    "county":"Seminole County",
    "number":105735.93,
    "rate":245.09667250031873,
    "population":431405
  },
  {
    "state":"FL",
    "FIPS":12109,
    "county":"St Johns County",
    "number":15333.34,
    "rate":75.80854724518451,
    "population":202264
  },
  {
    "state":"FL",
    "FIPS":12127,
    "county":"Volusia County",
    "number":110234.45000000001,
    "rate":221.75864829850414,
    "population":497092
  },
  {
    "state":"GA",
    "FIPS":13051,
    "county":"Chatham County",
    "number":16537.3,
    "rate":59.76401286545481,
    "population":276710
  },
  {
    "state":"GA",
    "FIPS":13057,
    "county":"Cherokee County",
    "number":1007.95,
    "rate":4.562635233620323,
    "population":220914
  },
  {
    "state":"GA",
    "FIPS":13063,
    "county":"Clayton County",
    "number":272.34000000000003,
    "rate":1.022861714234206,
    "population":266253
  },
  {
    "state":"GA",
    "FIPS":13067,
    "county":"Cobb County",
    "number":46881.409999999996,
    "rate":66.21331401228186,
    "population":708036
  },
  {
    "state":"GA",
    "FIPS":13089,
    "county":"Dekalb County",
    "number":145677.48,
    "rate":205.67084189839395,
    "population":708304
  },
  {
    "state":"GA",
    "FIPS":13111,
    "county":"Fannin County",
    "number":6500.04,
    "rate":276.9864064430903,
    "population":23467
  },
  {
    "state":"GA",
    "FIPS":13121,
    "county":"Fulton County",
    "number":919161.9599999998,
    "rate":939.8864563627995,
    "population":977950
  },
  {
    "state":"GA",
    "FIPS":13129,
    "county":"Gordon County",
    "number":7979.93,
    "rate":143.16343738787228,
    "population":55740
  },
  {
    "state":"GA",
    "FIPS":13135,
    "county":"Gwinnett County",
    "number":53854.369999999995,
    "rate":64.09548202199183,
    "population":840221
  },
  {
    "state":"GA",
    "FIPS":13151,
    "county":"Henry County",
    "number":5828,
    "rate":27.95968202338289,
    "population":208443
  },
  {
    "state":"GA",
    "FIPS":13153,
    "county":"Houston County",
    "number":22701.36,
    "rate":155.2760601915185,
    "population":146200
  },
  {
    "state":"GA",
    "FIPS":13189,
    "county":"McDuffie County",
    "number":132,
    "rate":6.116491358139104,
    "population":21581
  },
  {
    "state":"GA",
    "FIPS":13215,
    "county":"Muscogee County",
    "number":26634.739999999998,
    "rate":133.14640498697767,
    "population":200041
  },
  {
    "state":"GA",
    "FIPS":13245,
    "county":"Richmond County",
    "number":111.65,
    "rate":0.5528158204846361,
    "population":201966
  },
  {
    "state":"GA",
    "FIPS":13247,
    "county":"Rockdale County",
    "number":19730.179999999997,
    "rate":230.26679426730774,
    "population":85684
  },
  {
    "state":"GA",
    "FIPS":13275,
    "county":"Thomas County",
    "number":6996,
    "rate":157.1075679317314,
    "population":44530
  },
  {
    "state":"GA",
    "FIPS":13299,
    "county":"Ware County",
    "number":1088.76,
    "rate":30.4004020773999,
    "population":35814
  },
  {
    "state":"HI",
    "FIPS":15003,
    "county":"Honolulu County",
    "number":245256.66,
    "rate":251.09563796524378,
    "population":976746
  },
  {
    "state":"IA",
    "FIPS":19061,
    "county":"Dubuque County",
    "number":500,
    "rate":5.255026432782957,
    "population":95147
  },
  {
    "state":"IA",
    "FIPS":19103,
    "county":"Johnson County",
    "number":29401.760000000002,
    "rate":214.74775952612242,
    "population":136913
  },
  {
    "state":"IA",
    "FIPS":19113,
    "county":"Linn County",
    "number":4982.8,
    "rate":23.15362954564464,
    "population":215206
  },
  {
    "state":"IA",
    "FIPS":19153,
    "county":"Polk County",
    "number":432766.99,
    "rate":974.7355535334607,
    "population":443984
  },
  {
    "state":"IA",
    "FIPS":19155,
    "county":"Pottawattamie County",
    "number":33729.01000000001,
    "rate":362.9975892722616,
    "population":92918
  },
  {
    "state":"ID",
    "FIPS":16001,
    "county":"Ada County",
    "number":33287.17,
    "rate":81.40841935870439,
    "population":408891
  },
  {
    "state":"ID",
    "FIPS":16011,
    "county":"Bingham County",
    "number":11247.97,
    "rate":247.2461697403996,
    "population":45493
  },
  {
    "state":"ID",
    "FIPS":16019,
    "county":"Bonneville County",
    "number":376931.94000000006,
    "rate":3526.683570359282,
    "population":106880
  },
  {
    "state":"ID",
    "FIPS":16027,
    "county":"Canyon County",
    "number":11500.32,
    "rate":59.32403433476395,
    "population":193856
  },
  {
    "state":"ID",
    "FIPS":16055,
    "county":"Kootenai County",
    "number":14442.09,
    "rate":101.49258241565177,
    "population":142297
  },
  {
    "state":"IL",
    "FIPS":17001,
    "county":"Adams County",
    "number":15224.8,
    "rate":226.56289528117978,
    "population":67199
  },
  {
    "state":"IL",
    "FIPS":17031,
    "county":"Cook County",
    "number":860644.09,
    "rate":164.48550552907494,
    "population":5232340
  },
  {
    "state":"IL",
    "FIPS":17043,
    "county":"Dupage County",
    "number":96716.28,
    "rate":104.34009793588102,
    "population":926933
  },
  {
    "state":"IL",
    "FIPS":17083,
    "county":"Jersey County",
    "number":3226,
    "rate":141.91448178778813,
    "population":22732
  },
  {
    "state":"IL",
    "FIPS":17111,
    "county":"McHenry County",
    "number":329804.28,
    "rate":1071.5759239704332,
    "population":307775
  },
  {
    "state":"IL",
    "FIPS":17143,
    "county":"Peoria County",
    "number":912.97,
    "rate":4.877158868120069,
    "population":187193
  },
  {
    "state":"IL",
    "FIPS":17167,
    "county":"Sangamon County",
    "number":95055.68,
    "rate":477.07458581559564,
    "population":199247
  },
  {
    "state":"IL",
    "FIPS":17163,
    "county":"St Clair County",
    "number":9806.71,
    "rate":36.485332142790696,
    "population":268785
  },
  {
    "state":"IN",
    "FIPS":18003,
    "county":"Allen County",
    "number":1575,
    "rate":4.364912202908833,
    "population":360832
  },
  {
    "state":"IN",
    "FIPS":18011,
    "county":"Boone County",
    "number":284.34,
    "rate":4.8131220800325,
    "population":59076
  },
  {
    "state":"IN",
    "FIPS":18035,
    "county":"Delaware County",
    "number":41074.63,
    "rate":350.14048367985407,
    "population":117309
  },
  {
    "state":"IN",
    "FIPS":18039,
    "county":"Elkhart County",
    "number":78,
    "rate":0.3914955128591219,
    "population":199236
  },
  {
    "state":"IN",
    "FIPS":18043,
    "county":"Floyd County",
    "number":3559.8,
    "rate":47.28494766484246,
    "population":75284
  },
  {
    "state":"IN",
    "FIPS":18057,
    "county":"Hamilton County",
    "number":35605.93,
    "rate":122.96139102807612,
    "population":289570
  },
  {
    "state":"IN",
    "FIPS":18059,
    "county":"Hancock County",
    "number":32448.93,
    "rate":459.34981101626533,
    "population":70641
  },
  {
    "state":"IN",
    "FIPS":18063,
    "county":"Hendricks County",
    "number":71287.29999999999,
    "rate":472.9720943193428,
    "population":150722
  },
  {
    "state":"IN",
    "FIPS":18081,
    "county":"Johnson County",
    "number":43597.009999999995,
    "rate":303.6807093799194,
    "population":143562
  },
  {
    "state":"IN",
    "FIPS":18091,
    "county":"La Porte County",
    "number":4797.84,
    "rate":43.16234549020314,
    "population":111158
  },
  {
    "state":"IN",
    "FIPS":18095,
    "county":"Madison County",
    "number":27065.08,
    "rate":207.73909305824202,
    "population":130284
  },
  {
    "state":"IN",
    "FIPS":18097,
    "county":"Marion County",
    "number":88064.54999999999,
    "rate":95.87020632910978,
    "population":918581
  },
  {
    "state":"IN",
    "FIPS":18105,
    "county":"Monroe County",
    "number":14903.36,
    "rate":105.48138920935106,
    "population":141289
  },
  {
    "state":"IN",
    "FIPS":18127,
    "county":"Porter County",
    "number":8928.12,
    "rate":53.89456654935742,
    "population":165659
  },
  {
    "state":"IN",
    "FIPS":18157,
    "county":"Tippecanoe County",
    "number":228,
    "rate":1.279604893927489,
    "population":178180
  },
  {
    "state":"IN",
    "FIPS":18163,
    "county":"Vanderburgh County",
    "number":54914.76,
    "rate":303.7640017479713,
    "population":180781
  },
  {
    "state":"IN",
    "FIPS":18173,
    "county":"Warrick County",
    "number":47026.25,
    "rate":778.077896722315,
    "population":60439
  },
  {
    "state":"KS",
    "FIPS":20035,
    "county":"Cowley County",
    "number":3532.75,
    "rate":97.4175490844915,
    "population":36264
  },
  {
    "state":"KS",
    "FIPS":20079,
    "county":"Harvey County",
    "number":25994.66,
    "rate":746.3081737532657,
    "population":34831
  },
  {
    "state":"KS",
    "FIPS":20091,
    "county":"Johnson County",
    "number":7515.3,
    "rate":13.421281033799206,
    "population":559954
  },
  {
    "state":"KS",
    "FIPS":20173,
    "county":"Sedgwick County",
    "number":35445.06,
    "rate":70.3524862996977,
    "population":503821
  },
  {
    "state":"KS",
    "FIPS":20177,
    "county":"Shawnee County",
    "number":487218.4699999999,
    "rate":2723.3514622367297,
    "population":178904
  },
  {
    "state":"KS",
    "FIPS":20209,
    "county":"Wyandotte County",
    "number":12043.2,
    "rate":75.59932957948062,
    "population":159303
  },
  {
    "state":"KY",
    "FIPS":21059,
    "county":"Daviess County",
    "number":11899.01,
    "rate":121.75765141670162,
    "population":97727
  },
  {
    "state":"KY",
    "FIPS":21067,
    "county":"Fayette County",
    "number":330094.9799999999,
    "rate":1081.388693239334,
    "population":305251
  },
  {
    "state":"KY",
    "FIPS":21093,
    "county":"Hardin County",
    "number":528.2,
    "rate":4.934050741695625,
    "population":107052
  },
  {
    "state":"KY",
    "FIPS":21107,
    "county":"Hopkins County",
    "number":3753.83,
    "rate":80.37835638730675,
    "population":46702
  },
  {
    "state":"KY",
    "FIPS":21111,
    "county":"Jefferson County",
    "number":491523.6400000002,
    "rate":654.2073424753805,
    "population":751327
  },
  {
    "state":"KY",
    "FIPS":21117,
    "county":"Kenton County",
    "number":13925.08,
    "rate":86.13220676559186,
    "population":161671
  },
  {
    "state":"KY",
    "FIPS":21145,
    "county":"McCracken County",
    "number":85246.33,
    "rate":1298.5959326681393,
    "population":65645
  },
  {
    "state":"KY",
    "FIPS":21173,
    "county":"Montgomery County",
    "number":5271,
    "rate":196.09375,
    "population":26880
  },
  {
    "state":"LA",
    "FIPS":22001,
    "county":"Acadia Parish",
    "number":1584,
    "rate":25.600827501494997,
    "population":61873
  },
  {
    "state":"LA",
    "FIPS":22017,
    "county":"Caddo Parish",
    "number":7223.2,
    "rate":28.07001181371635,
    "population":257328
  },
  {
    "state":"LA",
    "FIPS":22019,
    "county":"Calcasieu Parish",
    "number":2725,
    "rate":13.999270496730079,
    "population":194653
  },
  {
    "state":"LA",
    "FIPS":22033,
    "county":"East Baton Rouge Parish",
    "number":116.4,
    "rate":0.261987503826278,
    "population":444296
  },
  {
    "state":"LA",
    "FIPS":22051,
    "county":"Jefferson Parish",
    "number":193632.30999999985,
    "rate":445.5670712765342,
    "population":434575
  },
  {
    "state":"LA",
    "FIPS":22069,
    "county":"Natchitoches Parish",
    "number":19965.870000000003,
    "rate":505.9646232989535,
    "population":39461
  },
  {
    "state":"LA",
    "FIPS":22071,
    "county":"Orleans Parish",
    "number":350263.38,
    "rate":946.2307012780718,
    "population":370167
  },
  {
    "state":"LA",
    "FIPS":22073,
    "county":"Ouachita Parish",
    "number":8187.16,
    "rate":52.70138397167686,
    "population":155350
  },
  {
    "state":"LA",
    "FIPS":22079,
    "county":"Rapides Parish",
    "number":1622.48,
    "rate":12.281187789056174,
    "population":132111
  },
  {
    "state":"LA",
    "FIPS":22097,
    "county":"St Landry Parish",
    "number":3628,
    "rate":43.45794952265731,
    "population":83483
  },
  {
    "state":"LA",
    "FIPS":22101,
    "county":"St Mary Parish",
    "number":4624,
    "rate":86.38792362590142,
    "population":53526
  },
  {
    "state":"LA",
    "FIPS":22103,
    "county":"St Tammany Parish",
    "number":133166.82,
    "rate":556.3778797222432,
    "population":239346
  },
  {
    "state":"MA",
    "FIPS":25005,
    "county":"Bristol County",
    "number":29955.409999999996,
    "rate":54.38873203634944,
    "population":550765
  },
  {
    "state":"MA",
    "FIPS":25009,
    "county":"Essex County",
    "number":71315.39,
    "rate":94.23741646988555,
    "population":756763
  },
  {
    "state":"MA",
    "FIPS":25013,
    "county":"Hampden County",
    "number":22431.92,
    "rate":48.08155373934441,
    "population":466539
  },
  {
    "state":"MA",
    "FIPS":25017,
    "county":"Middlesex County",
    "number":37082.78,
    "rate":24.076725499158545,
    "population":1540192
  },
  {
    "state":"MA",
    "FIPS":25023,
    "county":"Plymouth County",
    "number":78,
    "rate":0.15628882174258027,
    "population":499076
  },
  {
    "state":"MA",
    "FIPS":25025,
    "county":"Suffolk County",
    "number":4811970.419999999,
    "rate":6420.206456536588,
    "population":749504
  },
  {
    "state":"MA",
    "FIPS":25027,
    "county":"Worcester County",
    "number":14398.18,
    "rate":17.860799644723638,
    "population":806133
  },
  {
    "state":"MD",
    "FIPS":24510,
    "county":"Baltimore City",
    "number":145578.91,
    "rate":233.69276827995824,
    "population":622950
  },
  {
    "state":"MD",
    "FIPS":24005,
    "county":"Baltimore County",
    "number":60720.07,
    "rate":74.19136756575129,
    "population":818425
  },
  {
    "state":"MD",
    "FIPS":24015,
    "county":"Cecil County",
    "number":6505.4,
    "rate":63.88992555636306,
    "population":101822
  },
  {
    "state":"MD",
    "FIPS":24027,
    "county":"Howard County",
    "number":32001.050000000003,
    "rate":106.78228806913927,
    "population":299685
  },
  {
    "state":"MD",
    "FIPS":24031,
    "county":"Montgomery County",
    "number":380314.56000000023,
    "rate":377.84083604640443,
    "population":1006547
  },
  {
    "state":"MD",
    "FIPS":24033,
    "county":"Prince George's County",
    "number":46158.86,
    "rate":52.229848692637404,
    "population":883764
  },
  {
    "state":"MD",
    "FIPS":24045,
    "county":"Wicomico County",
    "number":181.71,
    "rate":1.8085635799028588,
    "population":100472
  },
  {
    "state":"ME",
    "FIPS":23001,
    "county":"Androscoggin County",
    "number":52764.43,
    "rate":490.80451323647054,
    "population":107506
  },
  {
    "state":"ME",
    "FIPS":23005,
    "county":"Cumberland County",
    "number":115758.18,
    "rate":407.52747755676813,
    "population":284050
  },
  {
    "state":"ME",
    "FIPS":23013,
    "county":"Knox County",
    "number":1221.23,
    "rate":30.832912542920624,
    "population":39608
  },
  {
    "state":"ME",
    "FIPS":23019,
    "county":"Penobscot County",
    "number":36078.82,
    "rate":234.86980183839805,
    "population":153612
  },
  {
    "state":"ME",
    "FIPS":23031,
    "county":"York County",
    "number":7715.4,
    "rate":38.760141669387856,
    "population":199055
  },
  {
    "state":"MI",
    "FIPS":26007,
    "county":"Alpena County",
    "number":40304.649999999994,
    "rate":1378.408002735978,
    "population":29240
  },
  {
    "state":"MI",
    "FIPS":26021,
    "county":"Berrien County",
    "number":10508.6,
    "rate":67.33821616460654,
    "population":156057
  },
  {
    "state":"MI",
    "FIPS":26037,
    "county":"Clinton County",
    "number":198,
    "rate":2.590741370737707,
    "population":76426
  },
  {
    "state":"MI",
    "FIPS":26047,
    "county":"Emmet County",
    "number":35640.83,
    "rate":1083.4725642194862,
    "population":32895
  },
  {
    "state":"MI",
    "FIPS":26049,
    "county":"Genesee County",
    "number":86583.33999999998,
    "rate":207.10843949882548,
    "population":418058
  },
  {
    "state":"MI",
    "FIPS":26055,
    "county":"Grand Traverse County",
    "number":4114.98,
    "rate":46.23313297005786,
    "population":89005
  },
  {
    "state":"MI",
    "FIPS":26077,
    "county":"Kalamazoo County",
    "number":40213.52,
    "rate":157.6877107677829,
    "population":255020
  },
  {
    "state":"MI",
    "FIPS":26099,
    "county":"Macomb County",
    "number":10821.099999999999,
    "rate":12.764494249483926,
    "population":847750
  },
  {
    "state":"MI",
    "FIPS":26121,
    "county":"Muskegon County",
    "number":15193.8,
    "rate":89.2986023767823,
    "population":170146
  },
  {
    "state":"MI",
    "FIPS":26125,
    "county":"Oakland County",
    "number":219013.08,
    "rate":179.42611649220768,
    "population":1220631
  },
  {
    "state":"MI",
    "FIPS":26137,
    "county":"Otsego County",
    "number":2625,
    "rate":109.152147698449,
    "population":24049
  },
  {
    "state":"MI",
    "FIPS":26145,
    "county":"Saginaw County",
    "number":2893.2,
    "rate":14.592369923537836,
    "population":198268
  },
  {
    "state":"MI",
    "FIPS":26161,
    "county":"Washtenaw County",
    "number":87582.16999999998,
    "rate":249.30805776243162,
    "population":351301
  },
  {
    "state":"MI",
    "FIPS":26163,
    "county":"Wayne County",
    "number":173094.51000000027,
    "rate":96.55143158352732,
    "population":1792770
  },
  {
    "state":"MI",
    "FIPS":26165,
    "county":"Wexford County",
    "number":10000,
    "rate":306.80493342332943,
    "population":32594
  },
  {
    "state":"MN",
    "FIPS":27019,
    "county":"Carver County",
    "number":1125,
    "rate":11.982106720630526,
    "population":93890
  },
  {
    "state":"MN",
    "FIPS":27035,
    "county":"Crow Wing County",
    "number":1000,
    "rate":15.910898965791567,
    "population":62850
  },
  {
    "state":"MN",
    "FIPS":27037,
    "county":"Dakota County",
    "number":29138.75,
    "rate":71.93563040188413,
    "population":405067
  },
  {
    "state":"MN",
    "FIPS":27053,
    "county":"Hennepin County",
    "number":593356.9199999999,
    "rate":500.81315882095254,
    "population":1184787
  },
  {
    "state":"MN",
    "FIPS":27109,
    "county":"Olmsted County",
    "number":32834.14,
    "rate":223.1247111908451,
    "population":147156
  },
  {
    "state":"MN",
    "FIPS":27123,
    "county":"Ramsey County",
    "number":35708.36,
    "rate":68.54877629727463,
    "population":520919
  },
  {
    "state":"MN",
    "FIPS":27137,
    "county":"St Louis County",
    "number":49560.7,
    "rate":247.20156419119442,
    "population":200487
  },
  {
    "state":"MN",
    "FIPS":27145,
    "county":"Stearns County",
    "number":4108.41,
    "rate":27.09210925444786,
    "population":151646
  },
  {
    "state":"MO",
    "FIPS":29019,
    "county":"Boone County",
    "number":83690.21,
    "rate":496.4067690044605,
    "population":168592
  },
  {
    "state":"MO",
    "FIPS":29021,
    "county":"Buchanan County",
    "number":450,
    "rate":5.0123080007574154,
    "population":89779
  },
  {
    "state":"MO",
    "FIPS":29051,
    "county":"Cole County",
    "number":19677.04,
    "rate":257.6304384827894,
    "population":76377
  },
  {
    "state":"MO",
    "FIPS":29077,
    "county":"Greene County",
    "number":142700.68,
    "rate":508.3997064335236,
    "population":280686
  },
  {
    "state":"MO",
    "FIPS":29095,
    "county":"Jackson County",
    "number":47968.72,
    "rate":70.81403622728413,
    "population":677390
  },
  {
    "state":"MO",
    "FIPS":29183,
    "county":"St Charles County",
    "number":513.03,
    "rate":1.3911131236933656,
    "population":368791
  },
  {
    "state":"MO",
    "FIPS":29510,
    "county":"St Louis City",
    "number":302818.5200000001,
    "rate":948.4596929283314,
    "population":319274
  },
  {
    "state":"MO",
    "FIPS":29189,
    "county":"St Louis County",
    "number":106113.92000000001,
    "rate":106.02909672262192,
    "population":1000800
  },
  {
    "state":"MS",
    "FIPS":28033,
    "county":"DeSoto County",
    "number":3500,
    "rate":21.03934357248054,
    "population":166355
  },
  {
    "state":"MS",
    "FIPS":28049,
    "county":"Hinds County",
    "number":4028.74,
    "rate":16.225422677589027,
    "population":248298
  },
  {
    "state":"MS",
    "FIPS":28109,
    "county":"Pearl River County",
    "number":17578.07,
    "rate":319.07914322018513,
    "population":55090
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
    "state":"MT",
    "FIPS":30013,
    "county":"Cascade County",
    "number":24456.190000000002,
    "rate":299.1034061028558,
    "population":81765
  },
  {
    "state":"MT",
    "FIPS":30029,
    "county":"Flathead County",
    "number":25934.28,
    "rate":282.8412511451381,
    "population":91692
  },
  {
    "state":"MT",
    "FIPS":30063,
    "county":"Missoula County",
    "number":11248,
    "rate":101.28406000684352,
    "population":111054
  },
  {
    "state":"MT",
    "FIPS":30093,
    "county":"Silver Bow County",
    "number":15379.62,
    "rate":445.876554663265,
    "population":34493
  },
  {
    "state":"MT",
    "FIPS":30111,
    "county":"Yellowstone County",
    "number":49448.53,
    "rate":325.55916201411566,
    "population":151888
  },
  {
    "state":"NC",
    "FIPS":37001,
    "county":"Alamance County",
    "number":50592.05,
    "rate":329.2210031755948,
    "population":153672
  },
  {
    "state":"NC",
    "FIPS":37019,
    "county":"Brunswick County",
    "number":4003.7099999999996,
    "rate":35.70341900158733,
    "population":112138
  },
  {
    "state":"NC",
    "FIPS":37021,
    "county":"Buncombe County",
    "number":156403.3,
    "rate":640.0449331527277,
    "population":244363
  },
  {
    "state":"NC",
    "FIPS":37023,
    "county":"Burke County",
    "number":22750.91,
    "rate":252.12955061783123,
    "population":90235
  },
  {
    "state":"NC",
    "FIPS":37025,
    "county":"Cabarrus County",
    "number":3112.49,
    "rate":16.871053244944086,
    "population":184487
  },
  {
    "state":"NC",
    "FIPS":37027,
    "county":"Caldwell County",
    "number":20875,
    "rate":254.74092695189515,
    "population":81946
  },
  {
    "state":"NC",
    "FIPS":37031,
    "county":"Carteret County",
    "number":171018.73,
    "rate":2523.1816639372078,
    "population":67779
  },
  {
    "state":"NC",
    "FIPS":37035,
    "county":"Catawba County",
    "number":138905.18,
    "rate":898.9579207600409,
    "population":154518
  },
  {
    "state":"NC",
    "FIPS":37045,
    "county":"Cleveland County",
    "number":15520.36,
    "rate":159.15869353432805,
    "population":97515
  },
  {
    "state":"NC",
    "FIPS":37047,
    "county":"Columbus County",
    "number":21810.28,
    "rate":378.6244010832581,
    "population":57604
  },
  {
    "state":"NC",
    "FIPS":37063,
    "county":"Durham County",
    "number":371607.38,
    "rate":1316.3189849384362,
    "population":282308
  },
  {
    "state":"NC",
    "FIPS":37067,
    "county":"Forsyth County",
    "number":47522.72,
    "rate":132.75726533451407,
    "population":357967
  },
  {
    "state":"NC",
    "FIPS":37081,
    "county":"Guilford County",
    "number":83003.83,
    "rate":165.7113680738839,
    "population":500894
  },
  {
    "state":"NC",
    "FIPS":37097,
    "county":"Iredell County",
    "number":70484.20000000001,
    "rate":433.1518399252723,
    "population":162724
  },
  {
    "state":"NC",
    "FIPS":37101,
    "county":"Johnston County",
    "number":21021.33,
    "rate":120.19537660169361,
    "population":174893
  },
  {
    "state":"NC",
    "FIPS":37119,
    "county":"Mecklenburg County",
    "number":100557.69,
    "rate":103.79837919690662,
    "population":968779
  },
  {
    "state":"NC",
    "FIPS":37127,
    "county":"Nash County",
    "number":4318.73,
    "rate":45.3077003776752,
    "population":95320
  },
  {
    "state":"NC",
    "FIPS":37129,
    "county":"New Hanover County",
    "number":5068.1900000000005,
    "rate":24.234175217802942,
    "population":209134
  },
  {
    "state":"NC",
    "FIPS":37133,
    "county":"Onslow County",
    "number":4085,
    "rate":22.214608892369267,
    "population":183888
  },
  {
    "state":"NC",
    "FIPS":37135,
    "county":"Orange County",
    "number":106476.82,
    "rate":773.0949407527881,
    "population":137728
  },
  {
    "state":"NC",
    "FIPS":37139,
    "county":"Pasquotank County",
    "number":7152.349999999999,
    "rate":176.47922424003158,
    "population":40528
  },
  {
    "state":"NC",
    "FIPS":37147,
    "county":"Pitt County",
    "number":158236.44999999995,
    "rate":915.2170392434712,
    "population":172895
  },
  {
    "state":"NC",
    "FIPS":37151,
    "county":"Randolph County",
    "number":44963.009999999995,
    "rate":315.91564436575186,
    "population":142326
  },
  {
    "state":"NC",
    "FIPS":37159,
    "county":"Rowan County",
    "number":103764.31,
    "rate":752.3787115252148,
    "population":137915
  },
  {
    "state":"NC",
    "FIPS":37179,
    "county":"Union County",
    "number":4862.41,
    "rate":23.332885461603794,
    "population":208393
  },
  {
    "state":"NC",
    "FIPS":37183,
    "county":"Wake County",
    "number":58912.68999999998,
    "rate":61.84338623005611,
    "population":952611
  },
  {
    "state":"NC",
    "FIPS":37189,
    "county":"Watauga County",
    "number":6567.68,
    "rate":126.14628149969269,
    "population":52064
  },
  {
    "state":"ND",
    "FIPS":38015,
    "county":"Burleigh County",
    "number":21215.41,
    "rate":246.48159120746345,
    "population":86073
  },
  {
    "state":"ND",
    "FIPS":38017,
    "county":"Cass County",
    "number":87385.46,
    "rate":557.1666486014321,
    "population":156839
  },
  {
    "state":"ND",
    "FIPS":38035,
    "county":"Grand Forks County",
    "number":7350,
    "rate":108.56560464394914,
    "population":67701
  },
  {
    "state":"ND",
    "FIPS":38101,
    "county":"Ward County",
    "number":5538,
    "rate":84.57544288332315,
    "population":65480
  },
  {
    "state":"NE",
    "FIPS":31053,
    "county":"Dodge County",
    "number":12535.119999999999,
    "rate":341.8358331060812,
    "population":36670
  },
  {
    "state":"NE",
    "FIPS":31055,
    "county":"Douglas County",
    "number":746501.08,
    "rate":1405.0224633875955,
    "population":531309
  },
  {
    "state":"NE",
    "FIPS":31079,
    "county":"Hall County",
    "number":52851.77,
    "rate":875.9719897240407,
    "population":60335
  },
  {
    "state":"NE",
    "FIPS":31109,
    "county":"Lancaster County",
    "number":1347,
    "rate":4.589922615335862,
    "population":293469
  },
  {
    "state":"NE",
    "FIPS":31111,
    "county":"Lincoln County",
    "number":2685.05,
    "rate":74.52468844541896,
    "population":36029
  },
  {
    "state":"NH",
    "FIPS":33009,
    "county":"Grafton County",
    "number":24020.79,
    "rate":268.86335654003716,
    "population":89342
  },
  {
    "state":"NH",
    "FIPS":33011,
    "county":"Hillsborough County",
    "number":227349.64,
    "rate":564.7035270740189,
    "population":402600
  },
  {
    "state":"NH",
    "FIPS":33017,
    "county":"Strafford County",
    "number":18419.02,
    "rate":147.89285628256906,
    "population":124543
  },
  {
    "state":"NJ",
    "FIPS":34003,
    "county":"Bergen County",
    "number":306209.13,
    "rate":332.6769045239233,
    "population":920440
  },
  {
    "state":"NJ",
    "FIPS":34007,
    "county":"Camden County",
    "number":61552.799999999996,
    "rate":119.96164520253203,
    "population":513104
  },
  {
    "state":"NJ",
    "FIPS":34013,
    "county":"Essex County",
    "number":8513.68,
    "rate":10.798338459587153,
    "population":788425
  },
  {
    "state":"NJ",
    "FIPS":34019,
    "county":"Hunterdon County",
    "number":2254.62,
    "rate":17.809989493889866,
    "population":126593
  },
  {
    "state":"NJ",
    "FIPS":34021,
    "county":"Mercer County",
    "number":37896.55,
    "rate":102.6848156246867,
    "population":369057
  },
  {
    "state":"NJ",
    "FIPS":34023,
    "county":"Middlesex County",
    "number":10050.779999999999,
    "rate":12.19093525720877,
    "population":824447
  },
  {
    "state":"NJ",
    "FIPS":34025,
    "county":"Monmouth County",
    "number":6572.879999999999,
    "rate":10.446806616908463,
    "population":629176
  },
  {
    "state":"NJ",
    "FIPS":34027,
    "county":"Morris County",
    "number":15435.660000000002,
    "rate":31.018346964612267,
    "population":497630
  },
  {
    "state":"NJ",
    "FIPS":34029,
    "county":"Ocean County",
    "number":1963,
    "rate":3.380350571456616,
    "population":580709
  },
  {
    "state":"NJ",
    "FIPS":34031,
    "county":"Passaic County",
    "number":10639,
    "rate":21.066784419410986,
    "population":505013
  },
  {
    "state":"NJ",
    "FIPS":34035,
    "county":"Somerset County",
    "number":37156,
    "rate":113.0423406786313,
    "population":328691
  },
  {
    "state":"NJ",
    "FIPS":34039,
    "county":"Union County",
    "number":84815.73,
    "rate":155.62490711026217,
    "population":545001
  },
  {
    "state":"NM",
    "FIPS":35001,
    "county":"Bernalillo County",
    "number":122110.92,
    "rate":181.44402261532403,
    "population":672995
  },
  {
    "state":"NM",
    "FIPS":35015,
    "county":"Eddy County",
    "number":9300.59,
    "rate":171.06106308626082,
    "population":54370
  },
  {
    "state":"NV",
    "FIPS":32003,
    "county":"Clark County",
    "number":633016.4600000001,
    "rate":316.7226512348861,
    "population":1998646
  },
  {
    "state":"NV",
    "FIPS":32023,
    "county":"Nye County",
    "number":2836.6,
    "rate":66.08578151573748,
    "population":42923
  },
  {
    "state":"NV",
    "FIPS":32031,
    "county":"Washoe County",
    "number":13418.75,
    "rate":31.272868376036506,
    "population":429086
  },
  {
    "state":"NY",
    "FIPS":36001,
    "county":"Albany County",
    "number":379755.55,
    "rate":1240.2773150960527,
    "population":306186
  },
  {
    "state":"NY",
    "FIPS":36005,
    "county":"Bronx County",
    "number":41412.79,
    "rate":29.28302780674928,
    "population":1414225
  },
  {
    "state":"NY",
    "FIPS":36007,
    "county":"Broome County",
    "number":30263.5,
    "rate":152.33049781043943,
    "population":198670
  },
  {
    "state":"NY",
    "FIPS":36013,
    "county":"Chautauqua County",
    "number":17703.17,
    "rate":132.6497474861005,
    "population":133458
  },
  {
    "state":"NY",
    "FIPS":36027,
    "county":"Dutchess County",
    "number":24515.77,
    "rate":82.45029259433646,
    "population":297340
  },
  {
    "state":"NY",
    "FIPS":36029,
    "county":"Erie County",
    "number":183993.96000000002,
    "rate":199.948880955874,
    "population":920205
  },
  {
    "state":"NY",
    "FIPS":36055,
    "county":"Monroe County",
    "number":50962.38,
    "rate":68.07855385248376,
    "population":748582
  },
  {
    "state":"NY",
    "FIPS":36059,
    "county":"Nassau County",
    "number":37977.03999999999,
    "rate":28.111920516565338,
    "population":1350923
  },
  {
    "state":"NY",
    "FIPS":36061,
    "county":"New York County",
    "number":509082.88,
    "rate":313.243604779233,
    "population":1625198
  },
  {
    "state":"NY",
    "FIPS":36067,
    "county":"Onondaga County",
    "number":50574.27,
    "rate":108.25389248729616,
    "population":467182
  },
  {
    "state":"NY",
    "FIPS":36071,
    "county":"Orange County",
    "number":1579.6,
    "rate":4.224252278464764,
    "population":373936
  },
  {
    "state":"NY",
    "FIPS":36081,
    "county":"Queens County",
    "number":19336.52,
    "rate":8.478553598355548,
    "population":2280639
  },
  {
    "state":"NY",
    "FIPS":36085,
    "county":"Richmond County",
    "number":79235.06000000003,
    "rate":168.23551893192243,
    "population":470977
  },
  {
    "state":"NY",
    "FIPS":36087,
    "county":"Rockland County",
    "number":46,
    "rate":0.144733737119484,
    "population":317825
  },
  {
    "state":"NY",
    "FIPS":36091,
    "county":"Saratoga County",
    "number":64096,
    "rate":288.18459352645755,
    "population":222413
  },
  {
    "state":"NY",
    "FIPS":36103,
    "county":"Suffolk County",
    "number":75582.84999999999,
    "rate":50.37439467029942,
    "population":1500422
  },
  {
    "state":"NY",
    "FIPS":36111,
    "county":"Ulster County",
    "number":5981.2,
    "rate":32.91654742774121,
    "population":181708
  },
  {
    "state":"NY",
    "FIPS":36119,
    "county":"Westchester County",
    "number":9357.06,
    "rate":9.728200580340571,
    "population":961849
  },
  {
    "state":"OH",
    "FIPS":39009,
    "county":"Athens County",
    "number":4308.6,
    "rate":66.65738420124386,
    "population":64638
  },
  {
    "state":"OH",
    "FIPS":39023,
    "county":"Clark County",
    "number":21600.4,
    "rate":157.44420309926093,
    "population":137194
  },
  {
    "state":"OH",
    "FIPS":39025,
    "county":"Clermont County",
    "number":23975.2,
    "rate":120.34595093841452,
    "population":199219
  },
  {
    "state":"OH",
    "FIPS":39035,
    "county":"Cuyahoga County",
    "number":3172138.0100000007,
    "rate":2505.857946470821,
    "population":1265889
  },
  {
    "state":"OH",
    "FIPS":39039,
    "county":"Defiance County",
    "number":40709.51,
    "rate":1048.7276521201507,
    "population":38818
  },
  {
    "state":"OH",
    "FIPS":39043,
    "county":"Erie County",
    "number":17026.88,
    "rate":222.74247141623718,
    "population":76442
  },
  {
    "state":"OH",
    "FIPS":39049,
    "county":"Franklin County",
    "number":79083.98000000001,
    "rate":66.07202055916107,
    "population":1196936
  },
  {
    "state":"OH",
    "FIPS":39053,
    "county":"Gallia County",
    "number":67275.70999999999,
    "rate":2183.9217659470864,
    "population":30805
  },
  {
    "state":"OH",
    "FIPS":39057,
    "county":"Greene County",
    "number":6690,
    "rate":40.75664808553413,
    "population":164145
  },
  {
    "state":"OH",
    "FIPS":39061,
    "county":"Hamilton County",
    "number":175824.54,
    "rate":219.13559459341565,
    "population":802355
  },
  {
    "state":"OH",
    "FIPS":39067,
    "county":"Harrison County",
    "number":29272.799999999996,
    "rate":1865.222377978845,
    "population":15694
  },
  {
    "state":"OH",
    "FIPS":39085,
    "county":"Lake County",
    "number":79439.68,
    "rate":346.34612953153265,
    "population":229365
  },
  {
    "state":"OH",
    "FIPS":39093,
    "county":"Lorain County",
    "number":29987.43,
    "rate":99.39650972008154,
    "population":301695
  },
  {
    "state":"OH",
    "FIPS":39095,
    "county":"Lucas County",
    "number":97908.3,
    "rate":223.85384657594383,
    "population":437376
  },
  {
    "state":"OH",
    "FIPS":39099,
    "county":"Mahoning County",
    "number":257.09000000000003,
    "rate":1.0903484924953455,
    "population":235787
  },
  {
    "state":"OH",
    "FIPS":39101,
    "county":"Marion County",
    "number":34182.97,
    "rate":516.0862081980827,
    "population":66235
  },
  {
    "state":"OH",
    "FIPS":39109,
    "county":"Miami County",
    "number":1392,
    "rate":13.499098120599703,
    "population":103118
  },
  {
    "state":"OH",
    "FIPS":39113,
    "county":"Montgomery County",
    "number":12685,
    "rate":23.71156567365334,
    "population":534971
  },
  {
    "state":"OH",
    "FIPS":39119,
    "county":"Muskingum County",
    "number":13275.09,
    "rate":154.65283440900302,
    "population":85838
  },
  {
    "state":"OH",
    "FIPS":39123,
    "county":"Ottawa County",
    "number":6928.59,
    "rate":167.51505040980635,
    "population":41361
  },
  {
    "state":"OH",
    "FIPS":39151,
    "county":"Stark County",
    "number":30195.16,
    "rate":80.55393710450214,
    "population":374844
  },
  {
    "state":"OH",
    "FIPS":39153,
    "county":"Summit County",
    "number":34512.45,
    "rate":63.809494755642326,
    "population":540867
  },
  {
    "state":"OH",
    "FIPS":39165,
    "county":"Warren County",
    "number":114900.90000000002,
    "rate":527.9086435748648,
    "population":217653
  },
  {
    "state":"OH",
    "FIPS":39173,
    "county":"Wood County",
    "number":7171,
    "rate":55.736481707459255,
    "population":128659
  },
  {
    "state":"OK",
    "FIPS":40017,
    "county":"Canadian County",
    "number":10413,
    "rate":84.93128338974756,
    "population":122605
  },
  {
    "state":"OK",
    "FIPS":40027,
    "county":"Cleveland County",
    "number":58856.369999999995,
    "rate":221.16311315862646,
    "population":266122
  },
  {
    "state":"OK",
    "FIPS":40109,
    "county":"Oklahoma County",
    "number":272098.26,
    "rate":366.3956856329152,
    "population":742635
  },
  {
    "state":"OK",
    "FIPS":40143,
    "county":"Tulsa County",
    "number":1166.07,
    "rate":1.897715066887999,
    "population":614460
  },
  {
    "state":"OK",
    "FIPS":40147,
    "county":"Washington County",
    "number":8387,
    "rate":162.1929994198414,
    "population":51710
  },
  {
    "state":"OR",
    "FIPS":41003,
    "county":"Benton County",
    "number":10789.9,
    "rate":124.91201667052559,
    "population":86380
  },
  {
    "state":"OR",
    "FIPS":41017,
    "county":"Deschutes County",
    "number":23678.64,
    "rate":146.39397573974009,
    "population":161746
  },
  {
    "state":"OR",
    "FIPS":41029,
    "county":"Jackson County",
    "number":7044.48,
    "rate":34.13635196231883,
    "population":206363
  },
  {
    "state":"OR",
    "FIPS":41033,
    "county":"Josephine County",
    "number":840,
    "rate":10.147133434804669,
    "population":82782
  },
  {
    "state":"OR",
    "FIPS":41039,
    "county":"Lane County",
    "number":19628.6,
    "rate":55.37278443696559,
    "population":354481
  },
  {
    "state":"OR",
    "FIPS":41051,
    "county":"Multnomah County",
    "number":253254.58000000005,
    "rate":333.7492175320269,
    "population":758817
  },
  {
    "state":"OR",
    "FIPS":41067,
    "county":"Washington County",
    "number":30080.6,
    "rate":54.917962452782994,
    "population":547737
  },
  {
    "state":"PA",
    "FIPS":42003,
    "county":"Allegheny County",
    "number":262170.47,
    "rate":213.08037415991603,
    "population":1230383
  },
  {
    "state":"PA",
    "FIPS":42007,
    "county":"Beaver County",
    "number":27175.28,
    "rate":159.6442334805903,
    "population":170224
  },
  {
    "state":"PA",
    "FIPS":42011,
    "county":"Berks County",
    "number":14281.560000000001,
    "rate":34.55896160212171,
    "population":413252
  },
  {
    "state":"PA",
    "FIPS":42013,
    "county":"Blair County",
    "number":108672.51000000001,
    "rate":855.695792880259,
    "population":126999
  },
  {
    "state":"PA",
    "FIPS":42015,
    "county":"Bradford County",
    "number":8886.869999999999,
    "rate":141.48138124273635,
    "population":62813
  },
  {
    "state":"PA",
    "FIPS":42017,
    "county":"Bucks County",
    "number":66416.92,
    "rate":106.06529338586274,
    "population":626189
  },
  {
    "state":"PA",
    "FIPS":42021,
    "county":"Cambria County",
    "number":25658.660000000003,
    "rate":181.29356819354066,
    "population":141531
  },
  {
    "state":"PA",
    "FIPS":42039,
    "county":"Crawford County",
    "number":12675,
    "rate":144.5927446954141,
    "population":87660
  },
  {
    "state":"PA",
    "FIPS":42041,
    "county":"Cumberland County",
    "number":54647.28,
    "rate":228.46043863243003,
    "population":239198
  },
  {
    "state":"PA",
    "FIPS":42043,
    "county":"Dauphin County",
    "number":11815.78,
    "rate":43.78533816058134,
    "population":269857
  },
  {
    "state":"PA",
    "FIPS":42045,
    "county":"Delaware County",
    "number":63187.5,
    "rate":112.65055730269772,
    "population":560916
  },
  {
    "state":"PA",
    "FIPS":42049,
    "county":"Erie County",
    "number":9555.24,
    "rate":34.02851129447545,
    "population":280801
  },
  {
    "state":"PA",
    "FIPS":42051,
    "county":"Fayette County",
    "number":15765.3,
    "rate":116.36711224617835,
    "population":135479
  },
  {
    "state":"PA",
    "FIPS":42055,
    "county":"Franklin County",
    "number":5569,
    "rate":36.73749414535356,
    "population":151589
  },
  {
    "state":"PA",
    "FIPS":42063,
    "county":"Indiana County",
    "number":48896.34,
    "rate":554.3237084651225,
    "population":88209
  },
  {
    "state":"PA",
    "FIPS":42071,
    "county":"Lancaster County",
    "number":1391.62,
    "rate":2.6418181887213676,
    "population":526766
  },
  {
    "state":"PA",
    "FIPS":42077,
    "county":"Lehigh County",
    "number":13608,
    "rate":38.30337012235799,
    "population":355269
  },
  {
    "state":"PA",
    "FIPS":42081,
    "county":"Lycoming County",
    "number":9875,
    "rate":84.18871913790751,
    "population":117296
  },
  {
    "state":"PA",
    "FIPS":42091,
    "county":"Montgomery County",
    "number":81557.30000000003,
    "rate":100.73553206573968,
    "population":809618
  },
  {
    "state":"PA",
    "FIPS":42095,
    "county":"Northampton County",
    "number":2400,
    "rate":8.017022811770326,
    "population":299363
  },
  {
    "state":"PA",
    "FIPS":42101,
    "county":"Philadelphia County",
    "number":2040925.5899999999,
    "rate":1316.3898707169008,
    "population":1550396
  },
  {
    "state":"PA",
    "FIPS":42125,
    "county":"Washington County",
    "number":1681.4,
    "rate":8.066938219362763,
    "population":208431
  },
  {
    "state":"PA",
    "FIPS":42133,
    "county":"York County",
    "number":7320.3,
    "rate":16.72450702423355,
    "population":437699
  },
  {
    "state":"PR",
    "FIPS":72031,
    "county":"Carolina",
    "number":18307.28,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72127,
    "county":"San Juan",
    "number":124812.21,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72137,
    "county":"Toa Baja",
    "number":121575.34,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72139,
    "county":"Trujillo Alto",
    "number":1211.71,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72091,
    "county":"Manat� Municipio",
    "number":448186.8400000001,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72007,
    "county":"Aguas Buenas Municipio",
    "number":10875,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72113,
    "county":"",
    "number":17655.25,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72025,
    "county":"Caguas Municipio",
    "number":6328.41,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72041,
    "county":"Cidra Municipio",
    "number":22235,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72119,
    "county":"R�o Grande Municipio",
    "number":5268.700000000001,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72151,
    "county":"Yabucoa Municipio",
    "number":46952.8,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72087,
    "county":"Lo�za Municipio",
    "number":1625,
    "rate":null,
    "population":null
  },
  {
    "state":"PR",
    "FIPS":72077,
    "county":"Juncos Municipio",
    "number":3250,
    "rate":null,
    "population":null
  },
  {
    "state":"RI",
    "FIPS":44007,
    "county":"Providence County",
    "number":43750.560000000005,
    "rate":69.51506908517752,
    "population":629368
  },
  {
    "state":"SC",
    "FIPS":45007,
    "county":"Anderson County",
    "number":4261.3,
    "rate":22.503102474058036,
    "population":189365
  },
  {
    "state":"SC",
    "FIPS":45019,
    "county":"Charleston County",
    "number":81226.06,
    "rate":222.24974827072936,
    "population":365472
  },
  {
    "state":"SC",
    "FIPS":45035,
    "county":"Dorchester County",
    "number":500,
    "rate":3.509510774198077,
    "population":142470
  },
  {
    "state":"SC",
    "FIPS":45041,
    "county":"Florence County",
    "number":6540,
    "rate":47.37070838765754,
    "population":138060
  },
  {
    "state":"SC",
    "FIPS":45045,
    "county":"Greenville County",
    "number":137600.18000000002,
    "rate":294.7998320328736,
    "population":466758
  },
  {
    "state":"SC",
    "FIPS":45047,
    "county":"Greenwood County",
    "number":2362,
    "rate":33.82355047040797,
    "population":69833
  },
  {
    "state":"SC",
    "FIPS":45051,
    "county":"Horry County",
    "number":89149.77000000002,
    "rate":316.1451469910281,
    "population":281990
  },
  {
    "state":"SC",
    "FIPS":45057,
    "county":"Lancaster County",
    "number":10709.73,
    "rate":135.23581629689494,
    "population":79193
  },
  {
    "state":"SC",
    "FIPS":45059,
    "county":"Laurens County",
    "number":14625.810000000001,
    "rate":220.74028796522688,
    "population":66258
  },
  {
    "state":"SC",
    "FIPS":45063,
    "county":"Lexington County",
    "number":19488,
    "rate":72.14731557786713,
    "population":270114
  },
  {
    "state":"SC",
    "FIPS":45075,
    "county":"Orangeburg County",
    "number":1777.78,
    "rate":19.44437760447998,
    "population":91429
  },
  {
    "state":"SC",
    "FIPS":45079,
    "county":"Richland County",
    "number":122142.56,
    "rate":310.26084836045794,
    "population":393677
  },
  {
    "state":"SC",
    "FIPS":45083,
    "county":"Spartanburg County",
    "number":163082.46999999997,
    "rate":565.432024713873,
    "population":288421
  },
  {
    "state":"SC",
    "FIPS":45085,
    "county":"Sumter County",
    "number":14467.27,
    "rate":133.88182491208588,
    "population":108060
  },
  {
    "state":"SD",
    "FIPS":46099,
    "county":"Minnehaha County",
    "number":5086,
    "rate":28.978240680071334,
    "population":175511
  },
  {
    "state":"SD",
    "FIPS":46103,
    "county":"Pennington County",
    "number":104100.04000000001,
    "rate":995.6771749942612,
    "population":104552
  },
  {
    "state":"TN",
    "FIPS":47001,
    "county":"Anderson County",
    "number":156.6,
    "rate":2.078328843116697,
    "population":75349
  },
  {
    "state":"TN",
    "FIPS":47017,
    "county":"Carroll County",
    "number":3720,
    "rate":129.96541243056282,
    "population":28623
  },
  {
    "state":"TN",
    "FIPS":47031,
    "county":"Coffee County",
    "number":5034.14,
    "rate":94.73888251124453,
    "population":53137
  },
  {
    "state":"TN",
    "FIPS":47035,
    "county":"Cumberland County",
    "number":553.74,
    "rate":9.708434875607063,
    "population":57037
  },
  {
    "state":"TN",
    "FIPS":47037,
    "county":"Davidson County",
    "number":309640.31999999983,
    "rate":476.9993622350731,
    "population":649142
  },
  {
    "state":"TN",
    "FIPS":47065,
    "county":"Hamilton County",
    "number":335440.39000000013,
    "rate":970.4429246333798,
    "population":345657
  },
  {
    "state":"TN",
    "FIPS":47077,
    "county":"Henderson County",
    "number":51089,
    "rate":1823.3698561690283,
    "population":28019
  },
  {
    "state":"TN",
    "FIPS":47093,
    "county":"Knox County",
    "number":76055.51000000001,
    "rate":172.40830492183818,
    "population":441136
  },
  {
    "state":"TN",
    "FIPS":47119,
    "county":"Maury County",
    "number":11102.36,
    "rate":135.4871619642683,
    "population":81944
  },
  {
    "state":"TN",
    "FIPS":47133,
    "county":"Overton County",
    "number":1372,
    "rate":61.771194453198866,
    "population":22211
  },
  {
    "state":"TN",
    "FIPS":47157,
    "county":"Shelby County",
    "number":132488.41,
    "rate":140.9538141715127,
    "population":939942
  },
  {
    "state":"TN",
    "FIPS":47163,
    "county":"Sullivan County",
    "number":146216.44,
    "rate":933.2586980526319,
    "population":156673
  },
  {
    "state":"TN",
    "FIPS":47179,
    "county":"Washington County",
    "number":62504.08,
    "rate":500.4450066855089,
    "population":124897
  },
  {
    "state":"TX",
    "FIPS":48025,
    "county":"Bee County",
    "number":7560,
    "rate":232.9666266062679,
    "population":32451
  },
  {
    "state":"TX",
    "FIPS":48027,
    "county":"Bell County",
    "number":7673.9,
    "rate":23.747396695621497,
    "population":323147
  },
  {
    "state":"TX",
    "FIPS":48029,
    "county":"Bexar County",
    "number":660255.0999999999,
    "rate":369.09307502328295,
    "population":1788858
  },
  {
    "state":"TX",
    "FIPS":48039,
    "county":"Brazoria County",
    "number":59200.130000000005,
    "rate":182.32422843450973,
    "population":324697
  },
  {
    "state":"TX",
    "FIPS":48085,
    "county":"Collin County",
    "number":42336.75,
    "rate":50.55279196060544,
    "population":837476
  },
  {
    "state":"TX",
    "FIPS":48091,
    "county":"Comal County",
    "number":16955.51,
    "rate":147.31496042468527,
    "population":115097
  },
  {
    "state":"TX",
    "FIPS":48113,
    "county":"Dallas County",
    "number":2012605.1099999992,
    "rate":819.2334614052302,
    "population":2456693
  },
  {
    "state":"TX",
    "FIPS":48121,
    "county":"Denton County",
    "number":56910.68,
    "rate":80.38663092086864,
    "population":707962
  },
  {
    "state":"TX",
    "FIPS":48135,
    "county":"Ector County",
    "number":71614.85999999999,
    "rate":495.7967101437235,
    "population":144444
  },
  {
    "state":"TX",
    "FIPS":48141,
    "county":"El Paso County",
    "number":24093.83,
    "rate":28.988755257813327,
    "population":831144
  },
  {
    "state":"TX",
    "FIPS":48139,
    "county":"Ellis County",
    "number":2500,
    "rate":16.252129028902786,
    "population":153826
  },
  {
    "state":"TX",
    "FIPS":48157,
    "county":"Fort Bend County",
    "number":36237.7,
    "rate":57.82267226633307,
    "population":626704
  },
  {
    "state":"TX",
    "FIPS":48167,
    "county":"Galveston County",
    "number":110949.07000000004,
    "rate":368.0281222944981,
    "population":301469
  },
  {
    "state":"TX",
    "FIPS":48183,
    "county":"Gregg County",
    "number":20277.08,
    "rate":164.99381590938683,
    "population":122896
  },
  {
    "state":"TX",
    "FIPS":48187,
    "county":"Guadalupe County",
    "number":12723.350000000002,
    "rate":91.06710852169434,
    "population":139714
  },
  {
    "state":"TX",
    "FIPS":48201,
    "county":"Harris County",
    "number":1105270.3299999998,
    "rate":259.26689514104885,
    "population":4263060
  },
  {
    "state":"TX",
    "FIPS":48215,
    "county":"Hidalgo County",
    "number":106976.38000000002,
    "rate":132.44158593580738,
    "population":807725
  },
  {
    "state":"TX",
    "FIPS":48245,
    "county":"Jefferson County",
    "number":25371.739999999998,
    "rate":100.92019220060142,
    "population":251404
  },
  {
    "state":"TX",
    "FIPS":48265,
    "county":"Kerr County",
    "number":22,
    "rate":0.4417848106349652,
    "population":49798
  },
  {
    "state":"TX",
    "FIPS":48273,
    "county":"Kleberg County",
    "number":925,
    "rate":28.744561839651958,
    "population":32180
  },
  {
    "state":"TX",
    "FIPS":48303,
    "county":"Lubbock County",
    "number":41890.96000000001,
    "rate":146.42273922040155,
    "population":286096
  },
  {
    "state":"TX",
    "FIPS":48309,
    "county":"McLennan County",
    "number":848,
    "rate":3.5405471982497674,
    "population":239511
  },
  {
    "state":"TX",
    "FIPS":48329,
    "county":"Midland County",
    "number":40389.619999999995,
    "rate":274.591202665035,
    "population":147090
  },
  {
    "state":"TX",
    "FIPS":48339,
    "county":"Montgomery County",
    "number":58.18,
    "rate":0.11992933692557908,
    "population":485119
  },
  {
    "state":"TX",
    "FIPS":48355,
    "county":"Nueces County",
    "number":146205.45,
    "rate":420.21150623827003,
    "population":347933
  },
  {
    "state":"TX",
    "FIPS":48375,
    "county":"Potter County",
    "number":15722.6,
    "rate":128.0821806214054,
    "population":122754
  },
  {
    "state":"TX",
    "FIPS":48423,
    "county":"Smith County",
    "number":12701,
    "rate":59.09063417402915,
    "population":214941
  },
  {
    "state":"TX",
    "FIPS":48439,
    "county":"Tarrant County",
    "number":139419.72,
    "rate":74.0482743456365,
    "population":1882822
  },
  {
    "state":"TX",
    "FIPS":48453,
    "county":"Travis County",
    "number":333052.79,
    "rate":303.5744924820254,
    "population":1097104
  },
  {
    "state":"TX",
    "FIPS":48469,
    "county":"Victoria County",
    "number":6653,
    "rate":74.52170796182625,
    "population":89276
  },
  {
    "state":"TX",
    "FIPS":48491,
    "county":"Williamson County",
    "number":186824.74,
    "rate":409.1712750743003,
    "population":456593
  },
  {
    "state":"UT",
    "FIPS":49011,
    "county":"Davis County",
    "number":6721,
    "rate":21.2677758861837,
    "population":316018
  },
  {
    "state":"UT",
    "FIPS":49035,
    "county":"Salt Lake County",
    "number":432400.95,
    "rate":406.23838549720875,
    "population":1064402
  },
  {
    "state":"UT",
    "FIPS":49057,
    "county":"Weber County",
    "number":91439.57999999999,
    "rate":386.5713198613342,
    "population":236540
  },
  {
    "state":"VA",
    "FIPS":51003,
    "county":"Albemarle County",
    "number":125000,
    "rate":1225.129863765559,
    "population":102030
  },
  {
    "state":"VA",
    "FIPS":51510,
    "county":"Alexandria City",
    "number":746.95,
    "rate":5.083574938407721,
    "population":146934
  },
  {
    "state":"VA",
    "FIPS":51013,
    "county":"Arlington County",
    "number":151545.78,
    "rate":682.8016598557313,
    "population":221947
  },
  {
    "state":"VA",
    "FIPS":51540,
    "county":"Charlottesville City",
    "number":69399.14,
    "rate":1558.7956245367354,
    "population":44521
  },
  {
    "state":"VA",
    "FIPS":51550,
    "county":"Chesapeake City",
    "number":22749.09,
    "rate":99.6945062842919,
    "population":228188
  },
  {
    "state":"VA",
    "FIPS":51041,
    "county":"Chesterfield County",
    "number":16207.6,
    "rate":50.046626524625594,
    "population":323850
  },
  {
    "state":"VA",
    "FIPS":51590,
    "county":"Danville City",
    "number":3111,
    "rate":72.71069976160426,
    "population":42786
  },
  {
    "state":"VA",
    "FIPS":51059,
    "county":"Fairfax County",
    "number":188074.84,
    "rate":167.7666830203827,
    "population":1121050
  },
  {
    "state":"VA",
    "FIPS":51650,
    "county":"Hampton City",
    "number":11535.789999999999,
    "rate":84.29945265742494,
    "population":136843
  },
  {
    "state":"VA",
    "FIPS":51087,
    "county":"Henrico County",
    "number":25219.67,
    "rate":79.95304836873991,
    "population":315431
  },
  {
    "state":"VA",
    "FIPS":51710,
    "county":"Norfolk City",
    "number":141437.50999999998,
    "rate":574.5988624822262,
    "population":246150
  },
  {
    "state":"VA",
    "FIPS":51730,
    "county":"Petersburg City",
    "number":10415.09,
    "rate":323.7818260950664,
    "population":32167
  },
  {
    "state":"VA",
    "FIPS":51153,
    "county":"Prince William County",
    "number":47304.3,
    "rate":109.69723532440067,
    "population":431226
  },
  {
    "state":"VA",
    "FIPS":51760,
    "county":"Richmond City",
    "number":92833.18999999999,
    "rate":438.873660921116,
    "population":211526
  },
  {
    "state":"VA",
    "FIPS":51770,
    "county":"Roanoke City",
    "number":10382.7,
    "rate":106.0768908550353,
    "population":97879
  },
  {
    "state":"VA",
    "FIPS":51775,
    "county":"Salem City",
    "number":18072.33,
    "rate":721.3639085139505,
    "population":25053
  },
  {
    "state":"VA",
    "FIPS":51800,
    "county":"Suffolk City",
    "number":3623.92,
    "rate":42.54276087951821,
    "population":85183
  },
  {
    "state":"VA",
    "FIPS":51810,
    "county":"Virginia Beach City",
    "number":54042.4,
    "rate":121.23409209702784,
    "population":445769
  },
  {
    "state":"VA",
    "FIPS":51840,
    "county":"Winchester City",
    "number":10625.6,
    "rate":390.9632791228199,
    "population":27178
  },
  {
    "state":"VT",
    "FIPS":50003,
    "county":"Bennington County",
    "number":13748.9,
    "rate":374.9461397911042,
    "population":36669
  },
  {
    "state":"VT",
    "FIPS":50007,
    "county":"Chittenden County",
    "number":100346.87,
    "rate":632.5405790432486,
    "population":158641
  },
  {
    "state":"WA",
    "FIPS":53003,
    "county":"Asotin County",
    "number":2810,
    "rate":128.46888858409912,
    "population":21873
  },
  {
    "state":"WA",
    "FIPS":53007,
    "county":"Chelan County",
    "number":7783.3,
    "rate":105.6508755259943,
    "population":73670
  },
  {
    "state":"WA",
    "FIPS":53011,
    "county":"Clark County",
    "number":4682,
    "rate":10.701591981805922,
    "population":437505
  },
  {
    "state":"WA",
    "FIPS":53033,
    "county":"King County",
    "number":1448900.6099999999,
    "rate":721.3750830210811,
    "population":2008526
  },
  {
    "state":"WA",
    "FIPS":53053,
    "county":"Pierce County",
    "number":102537.32999999997,
    "rate":126.22107358409967,
    "population":812363
  },
  {
    "state":"WA",
    "FIPS":53061,
    "county":"Snohomish County",
    "number":5172.200000000001,
    "rate":7.056765746812164,
    "population":732942
  },
  {
    "state":"WA",
    "FIPS":53063,
    "county":"Spokane County",
    "number":1997790.8700000003,
    "rate":4199.651190656376,
    "population":475704
  },
  {
    "state":"WA",
    "FIPS":53067,
    "county":"Thurston County",
    "number":101846.29,
    "rate":393.66514245515293,
    "population":258713
  },
  {
    "state":"WA",
    "FIPS":53077,
    "county":"Yakima County",
    "number":7408.4,
    "rate":30.027439901751368,
    "population":246721
  },
  {
    "state":"WI",
    "FIPS":55025,
    "county":"Dane County",
    "number":239609.8,
    "rate":476.08411005120274,
    "population":503293
  },
  {
    "state":"WI",
    "FIPS":55035,
    "county":"Eau Claire County",
    "number":234.9,
    "rate":2.3294327647758823,
    "population":100840
  },
  {
    "state":"WI",
    "FIPS":55059,
    "county":"Kenosha County",
    "number":3542.4,
    "rate":21.16735981643482,
    "population":167352
  },
  {
    "state":"WI",
    "FIPS":55063,
    "county":"La Crosse County",
    "number":2671.12,
    "rate":22.86310996225317,
    "population":116831
  },
  {
    "state":"WI",
    "FIPS":55079,
    "county":"Milwaukee County",
    "number":120925.79,
    "rate":126.68740656308242,
    "population":954521
  },
  {
    "state":"WI",
    "FIPS":55083,
    "county":"Oconto County",
    "number":4141.4,
    "rate":110.67343666488507,
    "population":37420
  },
  {
    "state":"WI",
    "FIPS":55133,
    "county":"Waukesha County",
    "number":22408.98,
    "rate":57.075056733813355,
    "population":392623
  },
  {
    "state":"WV",
    "FIPS":54003,
    "county":"Berkeley County",
    "number":3400,
    "rate":31.757299508695898,
    "population":107062
  },
  {
    "state":"WV",
    "FIPS":54039,
    "county":"Kanawha County",
    "number":7452.780000000001,
    "rate":38.78585702985137,
    "population":192152
  },
  {
    "state":"WV",
    "FIPS":54107,
    "county":"Wood County",
    "number":869.1,
    "rate":10.040318388188675,
    "population":86561
  }
];

var grants2014 = [
  {
    "state":"AL",
    "FIPS":1033,
    "county":"Colbert County",
    "number":49856.43,
    "rate":915.2503075,
    "population":54473
  },
  {
    "state":"AL",
    "FIPS":1045,
    "county":"Dale County",
    "number":1140,
    "rate":22.65951103,
    "population":50310
  },
  {
    "state":"AL",
    "FIPS":1061,
    "county":"Geneva County",
    "number":910,
    "rate":33.70120732,
    "population":27002
  },
  {
    "state":"AL",
    "FIPS":1073,
    "county":"Jefferson County",
    "number":515426,
    "rate":783.378144,
    "population":657953
  },
  {
    "state":"AL",
    "FIPS":1081,
    "county":"Lee County",
    "number":5603.34,
    "rate":37.85017563,
    "population":148040
  },
  {
    "state":"AL",
    "FIPS":1083,
    "county":"Limestone County",
    "number":15679.56,
    "rate":179.4759795,
    "population":87363
  },
  {
    "state":"AL",
    "FIPS":1089,
    "county":"Madison County",
    "number":19562.64,
    "rate":57.05589323,
    "population":342868
  },
  {
    "state":"AL",
    "FIPS":1097,
    "county":"Mobile County",
    "number":66993.83,
    "rate":161.8384365,
    "population":413955
  },
  {
    "state":"AL",
    "FIPS":1101,
    "county":"Montgomery County",
    "number":15535.24,
    "rate":67.71351111,
    "population":229426
  },
  {
    "state":"AL",
    "FIPS":1115,
    "county":"St Clair County",
    "number":9979.42,
    "rate":117.177479,
    "population":85165
  },
  {
    "state":"AL",
    "FIPS":1117,
    "county":"Shelby County",
    "number":3567.92,
    "rate":17.75411394,
    "population":200963
  },
  {
    "state":"AZ",
    "FIPS":4007,
    "county":"Gila County",
    "number":44344,
    "rate":836.2532295,
    "population":53027
  },
  {
    "state":"AZ",
    "FIPS":4013,
    "county":"Maricopa County",
    "number":1210000,
    "rate":307.1403963,
    "population":3940000
  },
  {
    "state":"AZ",
    "FIPS":4019,
    "county":"Pima County",
    "number":138850.51,
    "rate":139.8160798,
    "population":993094
  },
  {
    "state":"AR",
    "FIPS":5005,
    "county":"Baxter County",
    "number":23629.72,
    "rate":575.2542786,
    "population":41077
  },
  {
    "state":"AR",
    "FIPS":5007,
    "county":"Benton County",
    "number":6.8,
    "rate":0.029217278,
    "population":232739
  },
  {
    "state":"AR",
    "FIPS":5031,
    "county":"Craighead County",
    "number":21130.92,
    "rate":211.5143689,
    "population":99903
  },
  {
    "state":"AR",
    "FIPS":5051,
    "county":"Garland County",
    "number":1384.98,
    "rate":14.30217789,
    "population":96837
  },
  {
    "state":"AR",
    "FIPS":5111,
    "county":"Poinsett County",
    "number":11135.78,
    "rate":457.7915725,
    "population":24325
  },
  {
    "state":"AR",
    "FIPS":5119,
    "county":"Pulaski County",
    "number":489359.49,
    "rate":1257.806008,
    "population":389058
  },
  {
    "state":"AR",
    "FIPS":5145,
    "county":"White County",
    "number":1384.98,
    "rate":17.60896099,
    "population":78652
  },
  {
    "state":"CA",
    "FIPS":6001,
    "county":"Alameda County",
    "number":192103.59,
    "rate":123.4401372,
    "population":1560000
  },
  {
    "state":"CA",
    "FIPS":6013,
    "county":"Contra Costa County",
    "number":1010000,
    "rate":936.820258,
    "population":1080000
  },
  {
    "state":"CA",
    "FIPS":6019,
    "county":"Fresno County",
    "number":1010000,
    "rate":1062.173922,
    "population":948240
  },
  {
    "state":"CA",
    "FIPS":6037,
    "county":"Los Angeles County",
    "number":4610000,
    "rate":462.2253177,
    "population":9970000
  },
  {
    "state":"CA",
    "FIPS":6041,
    "county":"Marin County",
    "number":300749.8,
    "rate":1174.148034,
    "population":256143
  },
  {
    "state":"CA",
    "FIPS":6047,
    "county":"Merced County",
    "number":22741.29,
    "rate":86.87076701,
    "population":261783
  },
  {
    "state":"CA",
    "FIPS":6053,
    "county":"Monterey County",
    "number":62816.09,
    "rate":147.3134839,
    "population":426411
  },
  {
    "state":"CA",
    "FIPS":6059,
    "county":"Orange County",
    "number":1040000,
    "rate":335.1043353,
    "population":3090000
  },
  {
    "state":"CA",
    "FIPS":6065,
    "county":"Riverside County",
    "number":114620.64,
    "rate":50.53777768,
    "population":2270000
  },
  {
    "state":"CA",
    "FIPS":6067,
    "county":"Sacramento County",
    "number":41589.6,
    "rate":28.70681426,
    "population":1450000
  },
  {
    "state":"CA",
    "FIPS":6071,
    "county":"San Bernardino County",
    "number":241259.39,
    "rate":115.9538,
    "population":2080000
  },
  {
    "state":"CA",
    "FIPS":6073,
    "county":"San Diego County",
    "number":2230000,
    "rate":701.8315248,
    "population":3180000
  },
  {
    "state":"CA",
    "FIPS":6075,
    "county":"San Francisco County",
    "number":23838.63,
    "rate":28.73193755,
    "population":829691
  },
  {
    "state":"CA",
    "FIPS":6079,
    "county":"San Luis Obispo County",
    "number":2272.51,
    "rate":8.27788058,
    "population":274528
  },
  {
    "state":"CA",
    "FIPS":6081,
    "county":"San Mateo County",
    "number":183817.99,
    "rate":248.1552047,
    "population":740738
  },
  {
    "state":"CA",
    "FIPS":6083,
    "county":"Santa Barbara County",
    "number":1310,
    "rate":3.04136253,
    "population":430728
  },
  {
    "state":"CA",
    "FIPS":6085,
    "county":"Santa Clara County",
    "number":642514.28,
    "rate":348.9842909,
    "population":1840000
  },
  {
    "state":"CA",
    "FIPS":6099,
    "county":"Stanislaus County",
    "number":28731.33,
    "rate":55.02673643,
    "population":522134
  },
  {
    "state":"CA",
    "FIPS":6111,
    "county":"Ventura County",
    "number":136012.3,
    "rate":162.7961785,
    "population":835476
  },
  {
    "state":"CO",
    "FIPS":8001,
    "county":"Adams County",
    "number":682694.5,
    "rate":1482.014662,
    "population":460653
  },
  {
    "state":"CO",
    "FIPS":8005,
    "county":"Arapahoe County",
    "number":205664.44,
    "rate":345.0450381,
    "population":596051
  },
  {
    "state":"CO",
    "FIPS":8013,
    "county":"Boulder County",
    "number":3086,
    "rate":10.10203514,
    "population":305483
  },
  {
    "state":"CO",
    "FIPS":8031,
    "county":"Denver County",
    "number":333659.55,
    "rate":526.3864874,
    "population":633868
  },
  {
    "state":"CO",
    "FIPS":8037,
    "county":"Eagle County",
    "number":52,
    "rate":1.000943196,
    "population":51951
  },
  {
    "state":"CO",
    "FIPS":8041,
    "county":"El Paso County",
    "number":20253.48,
    "rate":31.36553698,
    "population":645724
  },
  {
    "state":"CO",
    "FIPS":8059,
    "county":"Jefferson County",
    "number":124146.43,
    "rate":227.532353,
    "population":545621
  },
  {
    "state":"CO",
    "FIPS":8119,
    "county":"Teller County",
    "number":16413.3,
    "rate":702.1432238,
    "population":23376
  },
  {
    "state":"CT",
    "FIPS":9001,
    "county":"Fairfield County",
    "number":172534.1,
    "rate":184.4712335,
    "population":935290
  },
  {
    "state":"CT",
    "FIPS":9003,
    "county":"Hartford County",
    "number":111336.4,
    "rate":124.0243378,
    "population":897698
  },
  {
    "state":"CT",
    "FIPS":9009,
    "county":"New Haven County",
    "number":738104.48,
    "rate":854.2569422,
    "population":864031
  },
  {
    "state":"CT",
    "FIPS":9013,
    "county":"Tolland County",
    "number":55085.35,
    "rate":362.5825243,
    "population":151925
  },
  {
    "state":"DE",
    "FIPS":10003,
    "county":"New Castle County",
    "number":13359.75,
    "rate":24.46746554,
    "population":546021
  },
  {
    "state":"DC",
    "FIPS":11001,
    "county":"District of Columbia",
    "number":301041.34,
    "rate":474.0509889,
    "population":635040
  },
  {
    "state":"FL",
    "FIPS":12001,
    "county":"Alachua County",
    "number":38587.88,
    "rate":153.3011009,
    "population":251713
  },
  {
    "state":"FL",
    "FIPS":12005,
    "county":"Bay County",
    "number":70149.78,
    "rate":407.8617859,
    "population":171994
  },
  {
    "state":"FL",
    "FIPS":12011,
    "county":"Broward County",
    "number":812484.46,
    "rate":446.4757198,
    "population":1820000
  },
  {
    "state":"FL",
    "FIPS":12015,
    "county":"Charlotte County",
    "number":15659.87,
    "rate":96.19557472,
    "population":162792
  },
  {
    "state":"FL",
    "FIPS":12021,
    "county":"Collier County",
    "number":38701.2,
    "rate":116.2641608,
    "population":332873
  },
  {
    "state":"FL",
    "FIPS":12031,
    "county":"Duval County",
    "number":1040000,
    "rate":1181.62891,
    "population":880595
  },
  {
    "state":"FL",
    "FIPS":12033,
    "county":"Escambia County",
    "number":1931.94,
    "rate":6.350595305,
    "population":304214
  },
  {
    "state":"FL",
    "FIPS":12053,
    "county":"Hernando County",
    "number":22929.45,
    "rate":132.4620744,
    "population":173102
  },
  {
    "state":"FL",
    "FIPS":12057,
    "county":"Hillsborough County",
    "number":202687.49,
    "rate":158.09862,
    "population":1280000
  },
  {
    "state":"FL",
    "FIPS":12069,
    "county":"Lake County",
    "number":32870.15,
    "rate":108.3214698,
    "population":303450
  },
  {
    "state":"FL",
    "FIPS":12071,
    "county":"Lee County",
    "number":3913.82,
    "rate":6.068050878,
    "population":644988
  },
  {
    "state":"FL",
    "FIPS":12073,
    "county":"Leon County",
    "number":5970.24,
    "rate":21.03278446,
    "population":283854
  },
  {
    "state":"FL",
    "FIPS":12075,
    "county":"Levy County",
    "number":14070.78,
    "rate":351.7958847,
    "population":39997
  },
  {
    "state":"FL",
    "FIPS":12081,
    "county":"Manatee County",
    "number":282716.46,
    "rate":846.27657,
    "population":334071
  },
  {
    "state":"FL",
    "FIPS":12083,
    "county":"Marion County",
    "number":66157.06,
    "rate":197.78191,
    "population":334495
  },
  {
    "state":"FL",
    "FIPS":12086,
    "county":"Miami-Dade County",
    "number":2020000,
    "rate":772.5828776,
    "population":2610000
  },
  {
    "state":"FL",
    "FIPS":12087,
    "county":"Monroe County",
    "number":3518,
    "rate":46.91229614,
    "population":74991
  },
  {
    "state":"FL",
    "FIPS":12095,
    "county":"Orange County",
    "number":515867.79,
    "rate":429.1474,
    "population":1200000
  },
  {
    "state":"FL",
    "FIPS":12097,
    "county":"Osceola County",
    "number":56757.61,
    "rate":196.4135031,
    "population":288970
  },
  {
    "state":"FL",
    "FIPS":12099,
    "county":"Palm Beach County",
    "number":716829.3,
    "rate":527.6184609,
    "population":1360000
  },
  {
    "state":"FL",
    "FIPS":12101,
    "county":"Pasco County",
    "number":119604.28,
    "rate":254.150581,
    "population":470604
  },
  {
    "state":"FL",
    "FIPS":12103,
    "county":"Pinellas County",
    "number":653880.46,
    "rate":708.9941177,
    "population":922265
  },
  {
    "state":"FL",
    "FIPS":12105,
    "county":"Polk County",
    "number":116678,
    "rate":189.4849325,
    "population":615764
  },
  {
    "state":"FL",
    "FIPS":12109,
    "county":"St Johns County",
    "number":26449.4,
    "rate":130.7667207,
    "population":202264
  },
  {
    "state":"FL",
    "FIPS":12115,
    "county":"Sarasota County",
    "number":64658.3,
    "rate":167.486854,
    "population":386050
  },
  {
    "state":"FL",
    "FIPS":12117,
    "county":"Seminole County",
    "number":98294.11,
    "rate":227.8464784,
    "population":431405
  },
  {
    "state":"FL",
    "FIPS":12127,
    "county":"Volusia County",
    "number":197002.16,
    "rate":396.3092546,
    "population":497092
  },
  {
    "state":"GA",
    "FIPS":13051,
    "county":"Chatham County",
    "number":42093.35,
    "rate":152.1208124,
    "population":276710
  },
  {
    "state":"GA",
    "FIPS":13053,
    "county":"Chattahoochee County",
    "number":225,
    "rate":17.89976134,
    "population":12570
  },
  {
    "state":"GA",
    "FIPS":13057,
    "county":"Cherokee County",
    "number":7462.8,
    "rate":33.78147152,
    "population":220914
  },
  {
    "state":"GA",
    "FIPS":13059,
    "county":"Clarke County",
    "number":8694.1,
    "rate":72.28818492,
    "population":120270
  },
  {
    "state":"GA",
    "FIPS":13067,
    "county":"Cobb County",
    "number":226518.79,
    "rate":319.9255264,
    "population":708036
  },
  {
    "state":"GA",
    "FIPS":13077,
    "county":"Coweta County",
    "number":2628.38,
    "rate":20.08267241,
    "population":130878
  },
  {
    "state":"GA",
    "FIPS":13087,
    "county":"Decatur County",
    "number":8506.95,
    "rate":309.7604049,
    "population":27463
  },
  {
    "state":"GA",
    "FIPS":13089,
    "county":"Dekalb County",
    "number":533515.22,
    "rate":753.2291502,
    "population":708304
  },
  {
    "state":"GA",
    "FIPS":13111,
    "county":"Fannin County",
    "number":5345.06,
    "rate":227.7692078,
    "population":23467
  },
  {
    "state":"GA",
    "FIPS":13121,
    "county":"Fulton County",
    "number":1970000,
    "rate":2015.978465,
    "population":977950
  },
  {
    "state":"GA",
    "FIPS":13135,
    "county":"Gwinnett County",
    "number":145922.24,
    "rate":173.6712603,
    "population":840221
  },
  {
    "state":"GA",
    "FIPS":13153,
    "county":"Houston County",
    "number":2234.3,
    "rate":15.28248974,
    "population":146200
  },
  {
    "state":"GA",
    "FIPS":13189,
    "county":"McDuffie County",
    "number":36,
    "rate":1.668134007,
    "population":21581
  },
  {
    "state":"GA",
    "FIPS":13215,
    "county":"Muscogee County",
    "number":53640.98,
    "rate":268.1499293,
    "population":200041
  },
  {
    "state":"GA",
    "FIPS":13245,
    "county":"Richmond County",
    "number":25454.65,
    "rate":126.0343325,
    "population":201966
  },
  {
    "state":"GA",
    "FIPS":13247,
    "county":"Rockdale County",
    "number":3603.3,
    "rate":42.05335885,
    "population":85684
  },
  {
    "state":"GA",
    "FIPS":13275,
    "county":"Thomas County",
    "number":10494,
    "rate":235.6613519,
    "population":44530
  },
  {
    "state":"HI",
    "FIPS":15003,
    "county":"Honolulu County",
    "number":400071.41,
    "rate":409.5961591,
    "population":976746
  },
  {
    "state":"ID",
    "FIPS":16001,
    "county":"Ada County",
    "number":52173,
    "rate":127.5963521,
    "population":408891
  },
  {
    "state":"ID",
    "FIPS":16011,
    "county":"Bingham County",
    "number":29880.18,
    "rate":656.8083002,
    "population":45493
  },
  {
    "state":"ID",
    "FIPS":16019,
    "county":"Bonneville County",
    "number":683647.77,
    "rate":6396.405034,
    "population":106880
  },
  {
    "state":"ID",
    "FIPS":16027,
    "county":"Canyon County",
    "number":16855.57,
    "rate":86.94892085,
    "population":193856
  },
  {
    "state":"ID",
    "FIPS":16055,
    "county":"Kootenai County",
    "number":12899.23,
    "rate":90.65004884,
    "population":142297
  },
  {
    "state":"IL",
    "FIPS":17019,
    "county":"Champaign County",
    "number":33233.14,
    "rate":162.9003622,
    "population":204009
  },
  {
    "state":"IL",
    "FIPS":17031,
    "county":"Cook County",
    "number":1660000,
    "rate":317.9468804,
    "population":5230000
  },
  {
    "state":"IL",
    "FIPS":17043,
    "county":"Dupage County",
    "number":26971.04,
    "rate":29.09707606,
    "population":926933
  },
  {
    "state":"IL",
    "FIPS":17089,
    "county":"Kane County",
    "number":50106.29,
    "rate":96.01794026,
    "population":521843
  },
  {
    "state":"IL",
    "FIPS":17097,
    "county":"Lake County",
    "number":58740,
    "rate":83.73330216,
    "population":701513
  },
  {
    "state":"IL",
    "FIPS":17111,
    "county":"McHenry County",
    "number":333662.23,
    "rate":1084.110893,
    "population":307775
  },
  {
    "state":"IL",
    "FIPS":17161,
    "county":"Rock Island County",
    "number":21490,
    "rate":146.1258627,
    "population":147065
  },
  {
    "state":"IL",
    "FIPS":17163,
    "county":"St Clair County",
    "number":5365.31,
    "rate":19.96134457,
    "population":268785
  },
  {
    "state":"IL",
    "FIPS":17167,
    "county":"Sangamon County",
    "number":41979.85,
    "rate":210.6925073,
    "population":199247
  },
  {
    "state":"IL",
    "FIPS":17197,
    "county":"Will County",
    "number":7376.83,
    "rate":10.81350128,
    "population":682187
  },
  {
    "state":"IN",
    "FIPS":18003,
    "county":"Allen County",
    "number":2250,
    "rate":6.235588861,
    "population":360832
  },
  {
    "state":"IN",
    "FIPS":18011,
    "county":"Boone County",
    "number":6807.53,
    "rate":115.2334281,
    "population":59076
  },
  {
    "state":"IN",
    "FIPS":18035,
    "county":"Delaware County",
    "number":58601.33,
    "rate":499.5467526,
    "population":117309
  },
  {
    "state":"IN",
    "FIPS":18035,
    "county":"Delaware County",
    "number":58601.33,
    "rate":499.5467526,
    "population":117309
  },
  {
    "state":"IN",
    "FIPS":18043,
    "county":"Floyd County",
    "number":445.01,
    "rate":5.911083364,
    "population":75284
  },
  {
    "state":"IN",
    "FIPS":18057,
    "county":"Hamilton County",
    "number":48332.56,
    "rate":166.9114894,
    "population":289570
  },
  {
    "state":"IN",
    "FIPS":18059,
    "county":"Hancock County",
    "number":9869.8,
    "rate":139.7177277,
    "population":70641
  },
  {
    "state":"IN",
    "FIPS":18063,
    "county":"Hendricks County",
    "number":101442.13,
    "rate":673.0412946,
    "population":150722
  },
  {
    "state":"IN",
    "FIPS":18081,
    "county":"Johnson County",
    "number":31309.61,
    "rate":218.091208,
    "population":143562
  },
  {
    "state":"IN",
    "FIPS":18097,
    "county":"Marion County",
    "number":282702.19,
    "rate":307.759675,
    "population":918581
  },
  {
    "state":"IN",
    "FIPS":18105,
    "county":"Monroe County",
    "number":38503.74,
    "rate":272.5176058,
    "population":141289
  },
  {
    "state":"IN",
    "FIPS":18127,
    "county":"Porter County",
    "number":95686.65,
    "rate":577.612143,
    "population":165659
  },
  {
    "state":"IN",
    "FIPS":18141,
    "county":"St Joseph County",
    "number":10900,
    "rate":40.88966917,
    "population":266571
  },
  {
    "state":"IN",
    "FIPS":18157,
    "county":"Tippecanoe County",
    "number":5346,
    "rate":30.00336738,
    "population":178180
  },
  {
    "state":"IN",
    "FIPS":18163,
    "county":"Vanderburgh County",
    "number":132247.39,
    "rate":731.5336789,
    "population":180781
  },
  {
    "state":"IN",
    "FIPS":18173,
    "county":"Warrick County",
    "number":9560.7,
    "rate":158.1875941,
    "population":60439
  },
  {
    "state":"IN",
    "FIPS":18173,
    "county":"Warrick County",
    "number":9560.7,
    "rate":158.1875941,
    "population":60439
  },
  {
    "state":"IA",
    "FIPS":19013,
    "county":"Black Hawk County",
    "number":2593.5,
    "rate":19.69831613,
    "population":131661
  },
  {
    "state":"IA",
    "FIPS":19103,
    "county":"Johnson County",
    "number":277328.8,
    "rate":2025.58413,
    "population":136913
  },
  {
    "state":"IA",
    "FIPS":19117,
    "county":"Lucas County",
    "number":27520,
    "rate":3140.118667,
    "population":8764
  },
  {
    "state":"IA",
    "FIPS":19153,
    "county":"Polk County",
    "number":966990.44,
    "rate":2177.984882,
    "population":443984
  },
  {
    "state":"IA",
    "FIPS":19155,
    "county":"Pottawattamie County",
    "number":184151.58,
    "rate":1981.871973,
    "population":92918
  },
  {
    "state":"KS",
    "FIPS":20091,
    "county":"Johnson County",
    "number":77331.82,
    "rate":138.10388,
    "population":559954
  },
  {
    "state":"KS",
    "FIPS":20173,
    "county":"Sedgwick County",
    "number":68482,
    "rate":135.9252592,
    "population":503821
  },
  {
    "state":"KS",
    "FIPS":20177,
    "county":"Shawnee County",
    "number":592379.5,
    "rate":3311.158498,
    "population":178904
  },
  {
    "state":"KS",
    "FIPS":20209,
    "county":"Wyandotte County",
    "number":117.96,
    "rate":0.740475697,
    "population":159303
  },
  {
    "state":"KY",
    "FIPS":21059,
    "county":"Daviess County",
    "number":5851.1,
    "rate":59.87188801,
    "population":97727
  },
  {
    "state":"KY",
    "FIPS":21067,
    "county":"Fayette County",
    "number":281830.26,
    "rate":923.2738304,
    "population":305251
  },
  {
    "state":"KY",
    "FIPS":21107,
    "county":"Hopkins County",
    "number":1000,
    "rate":21.41235921,
    "population":46702
  },
  {
    "state":"KY",
    "FIPS":21111,
    "county":"Jefferson County",
    "number":1230000,
    "rate":1643.569271,
    "population":751327
  },
  {
    "state":"KY",
    "FIPS":21117,
    "county":"Kenton County",
    "number":13340,
    "rate":82.51325222,
    "population":161671
  },
  {
    "state":"KY",
    "FIPS":21145,
    "county":"McCracken County",
    "number":55488.98,
    "rate":845.2887501,
    "population":65645
  },
  {
    "state":"KY",
    "FIPS":21155,
    "county":"Marion County",
    "number":17624.75,
    "rate":881.6783392,
    "population":19990
  },
  {
    "state":"KY",
    "FIPS":21173,
    "county":"Montgomery County",
    "number":2860,
    "rate":106.3988095,
    "population":26880
  },
  {
    "state":"KY",
    "FIPS":21179,
    "county":"Nelson County",
    "number":274.6,
    "rate":6.191517666,
    "population":44351
  },
  {
    "state":"KY",
    "FIPS":21227,
    "county":"Warren County",
    "number":617.3,
    "rate":5.267739045,
    "population":117185
  },
  {
    "state":"LA",
    "FIPS":22001,
    "county":"Acadia Parish",
    "number":1734,
    "rate":28.02514829,
    "population":61873
  },
  {
    "state":"LA",
    "FIPS":22017,
    "county":"Caddo Parish",
    "number":29920.87,
    "rate":116.2752207,
    "population":257328
  },
  {
    "state":"LA",
    "FIPS":22019,
    "county":"Calcasieu Parish",
    "number":66517.61,
    "rate":341.7240423,
    "population":194653
  },
  {
    "state":"LA",
    "FIPS":22033,
    "county":"East Baton Rouge Parish",
    "number":736834.29,
    "rate":1658.431068,
    "population":444296
  },
  {
    "state":"LA",
    "FIPS":22051,
    "county":"Jefferson Parish",
    "number":292244.56,
    "rate":672.4835989,
    "population":434575
  },
  {
    "state":"LA",
    "FIPS":22055,
    "county":"Lafayette Parish",
    "number":10130.47,
    "rate":44.6168109,
    "population":227055
  },
  {
    "state":"LA",
    "FIPS":22069,
    "county":"Natchitoches Parish",
    "number":51334.97,
    "rate":1300.90393,
    "population":39461
  },
  {
    "state":"LA",
    "FIPS":22071,
    "county":"Orleans Parish",
    "number":159822.82,
    "rate":431.7586927,
    "population":370167
  },
  {
    "state":"LA",
    "FIPS":22073,
    "county":"Ouachita Parish",
    "number":52554.7,
    "rate":338.2986804,
    "population":155350
  },
  {
    "state":"LA",
    "FIPS":22079,
    "county":"Rapides Parish",
    "number":22987.21,
    "rate":173.9992128,
    "population":132111
  },
  {
    "state":"LA",
    "FIPS":22101,
    "county":"St Mary Parish",
    "number":4672,
    "rate":87.28468408,
    "population":53526
  },
  {
    "state":"LA",
    "FIPS":22105,
    "county":"Tangipahoa Parish",
    "number":11100.6,
    "rate":89.6894972,
    "population":123767
  },
  {
    "state":"ME",
    "FIPS":23001,
    "county":"Androscoggin County",
    "number":21391.72,
    "rate":198.9816382,
    "population":107506
  },
  {
    "state":"ME",
    "FIPS":23005,
    "county":"Cumberland County",
    "number":47291.11,
    "rate":166.4886816,
    "population":284050
  },
  {
    "state":"ME",
    "FIPS":23019,
    "county":"Penobscot County",
    "number":26178.98,
    "rate":170.4227534,
    "population":153612
  },
  {
    "state":"ME",
    "FIPS":23027,
    "county":"Waldo County",
    "number":14191.2,
    "rate":364.9155288,
    "population":38889
  },
  {
    "state":"ME",
    "FIPS":23031,
    "county":"York County",
    "number":12060.61,
    "rate":60.58933461,
    "population":199055
  },
  {
    "state":"MD",
    "FIPS":24003,
    "county":"Anne Arundel County",
    "number":3550.83,
    "rate":6.447672571,
    "population":550715
  },
  {
    "state":"MD",
    "FIPS":24005,
    "county":"Baltimore County",
    "number":100652.74,
    "rate":122.9834621,
    "population":818425
  },
  {
    "state":"MD",
    "FIPS":24013,
    "county":"Carroll County",
    "number":24153.74,
    "rate":144.4688079,
    "population":167190
  },
  {
    "state":"MD",
    "FIPS":24027,
    "county":"Howard County",
    "number":83285.07,
    "rate":277.9087041,
    "population":299685
  },
  {
    "state":"MD",
    "FIPS":24031,
    "county":"Montgomery County",
    "number":1190000,
    "rate":1179.029186,
    "population":1010000
  },
  {
    "state":"MD",
    "FIPS":24033,
    "county":"Prince George's County",
    "number":137880.98,
    "rate":156.0156105,
    "population":883764
  },
  {
    "state":"MD",
    "FIPS":24045,
    "county":"Wicomico County",
    "number":7368.8,
    "rate":73.34182658,
    "population":100472
  },
  {
    "state":"MD",
    "FIPS":24510,
    "county":"Baltimore City",
    "number":236942.29,
    "rate":380.3552292,
    "population":622950
  },
  {
    "state":"MA",
    "FIPS":25001,
    "county":"Barnstable County",
    "number":580,
    "rate":2.699620657,
    "population":214845
  },
  {
    "state":"MA",
    "FIPS":25005,
    "county":"Bristol County",
    "number":22604.39,
    "rate":41.04180549,
    "population":550765
  },
  {
    "state":"MA",
    "FIPS":25009,
    "county":"Essex County",
    "number":24908.87,
    "rate":32.91502095,
    "population":756763
  },
  {
    "state":"MA",
    "FIPS":25013,
    "county":"Hampden County",
    "number":74645.5,
    "rate":159.9984139,
    "population":466539
  },
  {
    "state":"MA",
    "FIPS":25017,
    "county":"Middlesex County",
    "number":54860.31,
    "rate":35.61913709,
    "population":1540000
  },
  {
    "state":"MA",
    "FIPS":25021,
    "county":"Norfolk County",
    "number":225.81,
    "rate":0.330736479,
    "population":682749
  },
  {
    "state":"MA",
    "FIPS":25025,
    "county":"Suffolk County",
    "number":8660000,
    "rate":11555.5611,
    "population":749504
  },
  {
    "state":"MA",
    "FIPS":25027,
    "county":"Worcester County",
    "number":77138.97,
    "rate":95.69012806,
    "population":806133
  },
  {
    "state":"MI",
    "FIPS":26007,
    "county":"Alpena County",
    "number":9668.85,
    "rate":330.6720246,
    "population":29240
  },
  {
    "state":"MI",
    "FIPS":26017,
    "county":"Bay County",
    "number":296.29,
    "rate":2.76689328,
    "population":107084
  },
  {
    "state":"MI",
    "FIPS":26019,
    "county":"Benzie County",
    "number":4284.37,
    "rate":246.412262,
    "population":17387
  },
  {
    "state":"MI",
    "FIPS":26025,
    "county":"Calhoun County",
    "number":975.01,
    "rate":7.235158801,
    "population":134760
  },
  {
    "state":"MI",
    "FIPS":26037,
    "county":"Clinton County",
    "number":52,
    "rate":0.680396724,
    "population":76426
  },
  {
    "state":"MI",
    "FIPS":26047,
    "county":"Emmet County",
    "number":10133.97,
    "rate":308.0702234,
    "population":32895
  },
  {
    "state":"MI",
    "FIPS":26049,
    "county":"Genesee County",
    "number":84222.51,
    "rate":201.4613044,
    "population":418058
  },
  {
    "state":"MI",
    "FIPS":26055,
    "county":"Grand Traverse County",
    "number":9174.12,
    "rate":103.0742093,
    "population":89005
  },
  {
    "state":"MI",
    "FIPS":26077,
    "county":"Kalamazoo County",
    "number":37939.4,
    "rate":148.7702925,
    "population":255020
  },
  {
    "state":"MI",
    "FIPS":26099,
    "county":"Macomb County",
    "number":63143.83,
    "rate":74.48402241,
    "population":847750
  },
  {
    "state":"MI",
    "FIPS":26125,
    "county":"Oakland County",
    "number":248878.86,
    "rate":203.8936091,
    "population":1220000
  },
  {
    "state":"MI",
    "FIPS":26145,
    "county":"Saginaw County",
    "number":3575.8,
    "rate":18.0351847,
    "population":198268
  },
  {
    "state":"MI",
    "FIPS":26147,
    "county":"St Clair County",
    "number":52,
    "rate":0.323858399,
    "population":160564
  },
  {
    "state":"MI",
    "FIPS":26161,
    "county":"Washtenaw County",
    "number":89328.92,
    "rate":254.2802896,
    "population":351301
  },
  {
    "state":"MI",
    "FIPS":26163,
    "county":"Wayne County",
    "number":551119.84,
    "rate":307.4124623,
    "population":1790000
  },
  {
    "state":"MN",
    "FIPS":27027,
    "county":"Clay County",
    "number":69915.68,
    "rate":1161.139289,
    "population":60213
  },
  {
    "state":"MN",
    "FIPS":27037,
    "county":"Dakota County",
    "number":12706.76,
    "rate":31.36952652,
    "population":405067
  },
  {
    "state":"MN",
    "FIPS":27053,
    "county":"Hennepin County",
    "number":1010000,
    "rate":851.6798547,
    "population":1180000
  },
  {
    "state":"MN",
    "FIPS":27109,
    "county":"Olmsted County",
    "number":411448.53,
    "rate":2796.002406,
    "population":147156
  },
  {
    "state":"MN",
    "FIPS":27123,
    "county":"Ramsey County",
    "number":31288.44,
    "rate":60.06392549,
    "population":520919
  },
  {
    "state":"MN",
    "FIPS":27137,
    "county":"St Louis County",
    "number":38096,
    "rate":190.0173079,
    "population":200487
  },
  {
    "state":"MN",
    "FIPS":27145,
    "county":"Stearns County",
    "number":78870.18,
    "rate":520.0940348,
    "population":151646
  },
  {
    "state":"MS",
    "FIPS":28049,
    "county":"Hinds County",
    "number":13218.05,
    "rate":53.2346213,
    "population":248298
  },
  {
    "state":"MS",
    "FIPS":28109,
    "county":"Pearl River County",
    "number":976.75,
    "rate":17.73007805,
    "population":55090
  },
  {
    "state":"MS",
    "FIPS":28113,
    "county":"Pike County",
    "number":888,
    "rate":22.13856548,
    "population":40111
  },
  {
    "state":"MS",
    "FIPS":28125,
    "county":"Sharkey County",
    "number":621.16,
    "rate":129.759766,
    "population":4787
  },
  {
    "state":"MO",
    "FIPS":29019,
    "county":"Boone County",
    "number":203186.15,
    "rate":1205.194493,
    "population":168592
  },
  {
    "state":"MO",
    "FIPS":29021,
    "county":"Buchanan County",
    "number":25,
    "rate":0.278461556,
    "population":89779
  },
  {
    "state":"MO",
    "FIPS":29051,
    "county":"Cole County",
    "number":31776.3,
    "rate":416.0454063,
    "population":76377
  },
  {
    "state":"MO",
    "FIPS":29071,
    "county":"Franklin County",
    "number":6011.8,
    "rate":59.29615529,
    "population":101386
  },
  {
    "state":"MO",
    "FIPS":29077,
    "county":"Greene County",
    "number":300593.9,
    "rate":1070.925874,
    "population":280686
  },
  {
    "state":"MO",
    "FIPS":29095,
    "county":"Jackson County",
    "number":102585.14,
    "rate":151.4417691,
    "population":677390
  },
  {
    "state":"MO",
    "FIPS":29165,
    "county":"Platte County",
    "number":17429.84,
    "rate":189.1956668,
    "population":92126
  },
  {
    "state":"MO",
    "FIPS":29189,
    "county":"St Louis County",
    "number":425152.62,
    "rate":424.8127698,
    "population":1000000
  },
  {
    "state":"MO",
    "FIPS":29510,
    "county":"St Louis City",
    "number":1520000,
    "rate":4749.697063,
    "population":319274
  },
  {
    "state":"MT",
    "FIPS":30013,
    "county":"Cascade County",
    "number":28318.66,
    "rate":346.3420779,
    "population":81765
  },
  {
    "state":"MT",
    "FIPS":30029,
    "county":"Flathead County",
    "number":121630.02,
    "rate":1326.506347,
    "population":91692
  },
  {
    "state":"MT",
    "FIPS":30063,
    "county":"Missoula County",
    "number":13640,
    "rate":122.8231311,
    "population":111054
  },
  {
    "state":"MT",
    "FIPS":30093,
    "county":"Silver Bow County",
    "number":89456.54,
    "rate":2593.4694,
    "population":34493
  },
  {
    "state":"MT",
    "FIPS":30111,
    "county":"Yellowstone County",
    "number":201126.63,
    "rate":1324.177223,
    "population":151888
  },
  {
    "state":"NE",
    "FIPS":31043,
    "county":"Dakota County",
    "number":35302.65,
    "rate":1694.229016,
    "population":20837
  },
  {
    "state":"NE",
    "FIPS":31053,
    "county":"Dodge County",
    "number":3186.5,
    "rate":86.89664576,
    "population":36670
  },
  {
    "state":"NE",
    "FIPS":31055,
    "county":"Douglas County",
    "number":1440000,
    "rate":2709.716737,
    "population":531309
  },
  {
    "state":"NE",
    "FIPS":31109,
    "county":"Lancaster County",
    "number":399748.59,
    "rate":1362.14929,
    "population":293469
  },
  {
    "state":"NE",
    "FIPS":31111,
    "county":"Lincoln County",
    "number":13203.77,
    "rate":366.476172,
    "population":36029
  },
  {
    "state":"NE",
    "FIPS":31141,
    "county":"Platte County",
    "number":9342,
    "rate":286.9340869,
    "population":32558
  },
  {
    "state":"NV",
    "FIPS":32003,
    "county":"Clark County",
    "number":1170000,
    "rate":584.5050899,
    "population":2000000
  },
  {
    "state":"NV",
    "FIPS":32031,
    "county":"Washoe County",
    "number":35088.63,
    "rate":81.77528514,
    "population":429086
  },
  {
    "state":"NH",
    "FIPS":33009,
    "county":"Grafton County",
    "number":70003.26,
    "rate":783.5425668,
    "population":89342
  },
  {
    "state":"NH",
    "FIPS":33011,
    "county":"Hillsborough County",
    "number":287445.52,
    "rate":713.9729757,
    "population":402600
  },
  {
    "state":"NH",
    "FIPS":33017,
    "county":"Strafford County",
    "number":18142.45,
    "rate":145.6721775,
    "population":124543
  },
  {
    "state":"NJ",
    "FIPS":34001,
    "county":"Atlantic County",
    "number":14621.6,
    "rate":53.06024691,
    "population":275566
  },
  {
    "state":"NJ",
    "FIPS":34003,
    "county":"Bergen County",
    "number":7103.38,
    "rate":7.717374299,
    "population":920440
  },
  {
    "state":"NJ",
    "FIPS":34005,
    "county":"Burlington County",
    "number":10660,
    "rate":23.62551999,
    "population":451207
  },
  {
    "state":"NJ",
    "FIPS":34007,
    "county":"Camden County",
    "number":87506.13,
    "rate":170.5426775,
    "population":513104
  },
  {
    "state":"NJ",
    "FIPS":34013,
    "county":"Essex County",
    "number":16463.51,
    "rate":20.88151695,
    "population":788425
  },
  {
    "state":"NJ",
    "FIPS":34015,
    "county":"Gloucester County",
    "number":33283,
    "rate":114.8993168,
    "population":289671
  },
  {
    "state":"NJ",
    "FIPS":34021,
    "county":"Mercer County",
    "number":193017.11,
    "rate":523.0008102,
    "population":369057
  },
  {
    "state":"NJ",
    "FIPS":34023,
    "county":"Middlesex County",
    "number":50103.31,
    "rate":60.77202052,
    "population":824447
  },
  {
    "state":"NJ",
    "FIPS":34025,
    "county":"Monmouth County",
    "number":42060.93,
    "rate":66.85081758,
    "population":629176
  },
  {
    "state":"NJ",
    "FIPS":34027,
    "county":"Morris County",
    "number":31534.99,
    "rate":63.37035548,
    "population":497630
  },
  {
    "state":"NJ",
    "FIPS":34029,
    "county":"Ocean County",
    "number":1765.36,
    "rate":3.04000799,
    "population":580709
  },
  {
    "state":"NJ",
    "FIPS":34031,
    "county":"Passaic County",
    "number":9160,
    "rate":18.13814694,
    "population":505013
  },
  {
    "state":"NJ",
    "FIPS":34035,
    "county":"Somerset County",
    "number":15663,
    "rate":47.65265858,
    "population":328691
  },
  {
    "state":"NJ",
    "FIPS":34039,
    "county":"Union County",
    "number":10027.32,
    "rate":18.39871853,
    "population":545001
  },
  {
    "state":"NM",
    "FIPS":35001,
    "county":"Bernalillo County",
    "number":322820.7,
    "rate":479.6777093,
    "population":672995
  },
  {
    "state":"NM",
    "FIPS":35015,
    "county":"Eddy County",
    "number":11955.51,
    "rate":219.8916682,
    "population":54370
  },
  {
    "state":"NM",
    "FIPS":35049,
    "county":"Santa Fe County",
    "number":18635.65,
    "rate":127.3057349,
    "population":146385
  },
  {
    "state":"NY",
    "FIPS":36001,
    "county":"Albany County",
    "number":875115.36,
    "rate":2858.116831,
    "population":306186
  },
  {
    "state":"NY",
    "FIPS":36005,
    "county":"Bronx County",
    "number":160796.85,
    "rate":113.6996235,
    "population":1410000
  },
  {
    "state":"NY",
    "FIPS":36007,
    "county":"Broome County",
    "number":49247,
    "rate":247.8834248,
    "population":198670
  },
  {
    "state":"NY",
    "FIPS":36013,
    "county":"Chautauqua County",
    "number":84007.35,
    "rate":629.4665738,
    "population":133458
  },
  {
    "state":"NY",
    "FIPS":36015,
    "county":"Chemung County",
    "number":51,
    "rate":0.571550246,
    "population":89231
  },
  {
    "state":"NY",
    "FIPS":36029,
    "county":"Erie County",
    "number":481492.87,
    "rate":523.2452225,
    "population":920205
  },
  {
    "state":"NY",
    "FIPS":36047,
    "county":"Kings County",
    "number":40261.91,
    "rate":15.63651905,
    "population":2570000
  },
  {
    "state":"NY",
    "FIPS":36055,
    "county":"Monroe County",
    "number":78764.87,
    "rate":105.2187603,
    "population":748582
  },
  {
    "state":"NY",
    "FIPS":36059,
    "county":"Nassau County",
    "number":406480.37,
    "rate":300.8908502,
    "population":1350000
  },
  {
    "state":"NY",
    "FIPS":36061,
    "county":"New York County",
    "number":1800000,
    "rate":1107.429427,
    "population":1630000
  },
  {
    "state":"NY",
    "FIPS":36067,
    "county":"Onondaga County",
    "number":269595.67,
    "rate":577.0677595,
    "population":467182
  },
  {
    "state":"NY",
    "FIPS":36071,
    "county":"Orange County",
    "number":13519.4,
    "rate":36.15431518,
    "population":373936
  },
  {
    "state":"NY",
    "FIPS":36081,
    "county":"Queens County",
    "number":122104.26,
    "rate":53.53949485,
    "population":2280000
  },
  {
    "state":"NY",
    "FIPS":36085,
    "county":"Richmond County",
    "number":214666.79,
    "rate":455.7903889,
    "population":470977
  },
  {
    "state":"NY",
    "FIPS":36087,
    "county":"Rockland County",
    "number":929,
    "rate":2.922992213,
    "population":317825
  },
  {
    "state":"NY",
    "FIPS":36091,
    "county":"Saratoga County",
    "number":11850.95,
    "rate":53.28353109,
    "population":222413
  },
  {
    "state":"NY",
    "FIPS":36103,
    "county":"Suffolk County",
    "number":203689.56,
    "rate":135.7548476,
    "population":1500000
  },
  {
    "state":"NY",
    "FIPS":36119,
    "county":"Westchester County",
    "number":6467.85,
    "rate":6.72439229,
    "population":961849
  },
  {
    "state":"NC",
    "FIPS":37001,
    "county":"Alamance County",
    "number":117168.1,
    "rate":762.4557499,
    "population":153672
  },
  {
    "state":"NC",
    "FIPS":37011,
    "county":"Avery County",
    "number":2160.73,
    "rate":122.3793611,
    "population":17656
  },
  {
    "state":"NC",
    "FIPS":37019,
    "county":"Brunswick County",
    "number":15067.55,
    "rate":134.3661382,
    "population":112138
  },
  {
    "state":"NC",
    "FIPS":37021,
    "county":"Buncombe County",
    "number":143321.36,
    "rate":586.510069,
    "population":244363
  },
  {
    "state":"NC",
    "FIPS":37023,
    "county":"Burke County",
    "number":45416.12,
    "rate":503.3093589,
    "population":90235
  },
  {
    "state":"NC",
    "FIPS":37031,
    "county":"Carteret County",
    "number":1210000,
    "rate":17843.50005,
    "population":67779
  },
  {
    "state":"NC",
    "FIPS":37035,
    "county":"Catawba County",
    "number":55780.58,
    "rate":360.9972948,
    "population":154518
  },
  {
    "state":"NC",
    "FIPS":37047,
    "county":"Columbus County",
    "number":64163.1,
    "rate":1113.865357,
    "population":57604
  },
  {
    "state":"NC",
    "FIPS":37063,
    "county":"Durham County",
    "number":1500000,
    "rate":5321.366274,
    "population":282308
  },
  {
    "state":"NC",
    "FIPS":37067,
    "county":"Forsyth County",
    "number":127203.51,
    "rate":355.3498227,
    "population":357967
  },
  {
    "state":"NC",
    "FIPS":37081,
    "county":"Guilford County",
    "number":197775.02,
    "rate":394.8440588,
    "population":500894
  },
  {
    "state":"NC",
    "FIPS":37083,
    "county":"Halifax County",
    "number":14028.77,
    "rate":260.1630102,
    "population":53923
  },
  {
    "state":"NC",
    "FIPS":37097,
    "county":"Iredell County",
    "number":92318.91,
    "rate":567.3343207,
    "population":162724
  },
  {
    "state":"NC",
    "FIPS":37109,
    "county":"Lincoln County",
    "number":5933.63,
    "rate":75.13491953,
    "population":78973
  },
  {
    "state":"NC",
    "FIPS":37119,
    "county":"Mecklenburg County",
    "number":333250.64,
    "rate":343.9903631,
    "population":968779
  },
  {
    "state":"NC",
    "FIPS":37127,
    "county":"Nash County",
    "number":14802,
    "rate":155.2874528,
    "population":95320
  },
  {
    "state":"NC",
    "FIPS":37129,
    "county":"New Hanover County",
    "number":85905.18,
    "rate":410.7662073,
    "population":209134
  },
  {
    "state":"NC",
    "FIPS":37133,
    "county":"Onslow County",
    "number":4050,
    "rate":22.02427565,
    "population":183888
  },
  {
    "state":"NC",
    "FIPS":37135,
    "county":"Orange County",
    "number":95750.04,
    "rate":695.2111408,
    "population":137728
  },
  {
    "state":"NC",
    "FIPS":37139,
    "county":"Pasquotank County",
    "number":18467.57,
    "rate":455.6743486,
    "population":40528
  },
  {
    "state":"NC",
    "FIPS":37147,
    "county":"Pitt County",
    "number":328985.08,
    "rate":1902.802742,
    "population":172895
  },
  {
    "state":"NC",
    "FIPS":37151,
    "county":"Randolph County",
    "number":54680.16,
    "rate":384.1895367,
    "population":142326
  },
  {
    "state":"NC",
    "FIPS":37159,
    "county":"Rowan County",
    "number":58883.51,
    "rate":426.955081,
    "population":137915
  },
  {
    "state":"NC",
    "FIPS":37183,
    "county":"Wake County",
    "number":168383.14,
    "rate":176.7596007,
    "population":952611
  },
  {
    "state":"NC",
    "FIPS":37195,
    "county":"Wilson County",
    "number":15438.35,
    "rate":188.8067459,
    "population":81768
  },
  {
    "state":"ND",
    "FIPS":38017,
    "county":"Cass County",
    "number":87534.5,
    "rate":558.1169224,
    "population":156839
  },
  {
    "state":"OH",
    "FIPS":39009,
    "county":"Athens County",
    "number":1800,
    "rate":27.84739627,
    "population":64638
  },
  {
    "state":"OH",
    "FIPS":39017,
    "county":"Butler County",
    "number":2929.65,
    "rate":7.900186877,
    "population":370833
  },
  {
    "state":"OH",
    "FIPS":39023,
    "county":"Clark County",
    "number":4763.1,
    "rate":34.71799058,
    "population":137194
  },
  {
    "state":"OH",
    "FIPS":39035,
    "county":"Cuyahoga County",
    "number":663876.03,
    "rate":524.4346305,
    "population":1270000
  },
  {
    "state":"OH",
    "FIPS":39039,
    "county":"Defiance County",
    "number":621,
    "rate":15.99773301,
    "population":38818
  },
  {
    "state":"OH",
    "FIPS":39049,
    "county":"Franklin County",
    "number":530944.47,
    "rate":443.5863488,
    "population":1200000
  },
  {
    "state":"OH",
    "FIPS":39053,
    "county":"Gallia County",
    "number":73896.98,
    "rate":2398.863172,
    "population":30805
  },
  {
    "state":"OH",
    "FIPS":39061,
    "county":"Hamilton County",
    "number":296762.56,
    "rate":369.8644116,
    "population":802355
  },
  {
    "state":"OH",
    "FIPS":39067,
    "county":"Harrison County",
    "number":125418.04,
    "rate":7991.464254,
    "population":15694
  },
  {
    "state":"OH",
    "FIPS":39085,
    "county":"Lake County",
    "number":33368,
    "rate":145.4799119,
    "population":229365
  },
  {
    "state":"OH",
    "FIPS":39095,
    "county":"Lucas County",
    "number":139267.99,
    "rate":318.4170828,
    "population":437376
  },
  {
    "state":"OH",
    "FIPS":39099,
    "county":"Mahoning County",
    "number":4030.49,
    "rate":17.09377531,
    "population":235787
  },
  {
    "state":"OH",
    "FIPS":39101,
    "county":"Marion County",
    "number":40503.2,
    "rate":611.5075111,
    "population":66235
  },
  {
    "state":"OH",
    "FIPS":39113,
    "county":"Montgomery County",
    "number":40235.69,
    "rate":75.21097405,
    "population":534971
  },
  {
    "state":"OH",
    "FIPS":39119,
    "county":"Muskingum County",
    "number":30532.07,
    "rate":355.6940982,
    "population":85838
  },
  {
    "state":"OH",
    "FIPS":39151,
    "county":"Stark County",
    "number":18259.86,
    "rate":48.7132247,
    "population":374844
  },
  {
    "state":"OH",
    "FIPS":39153,
    "county":"Summit County",
    "number":51051.1,
    "rate":94.38752965,
    "population":540867
  },
  {
    "state":"OH",
    "FIPS":39165,
    "county":"Warren County",
    "number":41764,
    "rate":191.8834108,
    "population":217653
  },
  {
    "state":"OH",
    "FIPS":39165,
    "county":"Warren County",
    "number":41764,
    "rate":191.8834108,
    "population":217653
  },
  {
    "state":"OH",
    "FIPS":39169,
    "county":"Wayne County",
    "number":9524.04,
    "rate":82.8249413,
    "population":114990
  },
  {
    "state":"OH",
    "FIPS":39173,
    "county":"Wood County",
    "number":75,
    "rate":0.582936289,
    "population":128659
  },
  {
    "state":"OK",
    "FIPS":40017,
    "county":"Canadian County",
    "number":9445.1,
    "rate":77.03682558,
    "population":122605
  },
  {
    "state":"OK",
    "FIPS":40019,
    "county":"Carter County",
    "number":2290,
    "rate":47.59529451,
    "population":48114
  },
  {
    "state":"OK",
    "FIPS":40019,
    "county":"Carter County",
    "number":2290,
    "rate":47.59529451,
    "population":48114
  },
  {
    "state":"OK",
    "FIPS":40027,
    "county":"Cleveland County",
    "number":50553.02,
    "rate":189.961822,
    "population":266122
  },
  {
    "state":"OK",
    "FIPS":40109,
    "county":"Oklahoma County",
    "number":375817.62,
    "rate":506.0596659,
    "population":742635
  },
  {
    "state":"OK",
    "FIPS":40143,
    "county":"Tulsa County",
    "number":10647.95,
    "rate":17.32895551,
    "population":614460
  },
  {
    "state":"OR",
    "FIPS":41017,
    "county":"Deschutes County",
    "number":57801.45,
    "rate":357.3593783,
    "population":161746
  },
  {
    "state":"OR",
    "FIPS":41029,
    "county":"Jackson County",
    "number":6414,
    "rate":31.08115311,
    "population":206363
  },
  {
    "state":"OR",
    "FIPS":41039,
    "county":"Lane County",
    "number":41728.17,
    "rate":117.7162387,
    "population":354481
  },
  {
    "state":"OR",
    "FIPS":41051,
    "county":"Multnomah County",
    "number":590505.18,
    "rate":778.191817,
    "population":758817
  },
  {
    "state":"OR",
    "FIPS":41067,
    "county":"Washington County",
    "number":1750,
    "rate":3.194964006,
    "population":547737
  },
  {
    "state":"PA",
    "FIPS":42003,
    "county":"Allegheny County",
    "number":465850.1,
    "rate":378.6220226,
    "population":1230000
  },
  {
    "state":"PA",
    "FIPS":42007,
    "county":"Beaver County",
    "number":78063.86,
    "rate":458.5949102,
    "population":170224
  },
  {
    "state":"PA",
    "FIPS":42011,
    "county":"Berks County",
    "number":18970.68,
    "rate":45.90583954,
    "population":413252
  },
  {
    "state":"PA",
    "FIPS":42013,
    "county":"Blair County",
    "number":177479.34,
    "rate":1397.486122,
    "population":126999
  },
  {
    "state":"PA",
    "FIPS":42015,
    "county":"Bradford County",
    "number":22083.87,
    "rate":351.5812013,
    "population":62813
  },
  {
    "state":"PA",
    "FIPS":42017,
    "county":"Bucks County",
    "number":164018.22,
    "rate":261.9308547,
    "population":626189
  },
  {
    "state":"PA",
    "FIPS":42021,
    "county":"Cambria County",
    "number":3619.4,
    "rate":25.57319598,
    "population":141531
  },
  {
    "state":"PA",
    "FIPS":42021,
    "county":"Cambria County",
    "number":3619.4,
    "rate":25.57319598,
    "population":141531
  },
  {
    "state":"PA",
    "FIPS":42039,
    "county":"Crawford County",
    "number":6775,
    "rate":77.28724618,
    "population":87660
  },
  {
    "state":"PA",
    "FIPS":42041,
    "county":"Cumberland County",
    "number":125294.12,
    "rate":523.8092292,
    "population":239198
  },
  {
    "state":"PA",
    "FIPS":42043,
    "county":"Dauphin County",
    "number":2844.85,
    "rate":10.54206487,
    "population":269857
  },
  {
    "state":"PA",
    "FIPS":42045,
    "county":"Delaware County",
    "number":8010.8,
    "rate":14.28163932,
    "population":560916
  },
  {
    "state":"PA",
    "FIPS":42051,
    "county":"Fayette County",
    "number":60746.27,
    "rate":448.3814466,
    "population":135479
  },
  {
    "state":"PA",
    "FIPS":42063,
    "county":"Indiana County",
    "number":15374.56,
    "rate":174.2969538,
    "population":88209
  },
  {
    "state":"PA",
    "FIPS":42069,
    "county":"Lackawanna County",
    "number":48424.95,
    "rate":225.7468183,
    "population":214510
  },
  {
    "state":"PA",
    "FIPS":42077,
    "county":"Lehigh County",
    "number":49.04,
    "rate":0.138036249,
    "population":355269
  },
  {
    "state":"PA",
    "FIPS":42079,
    "county":"Luzerne County",
    "number":8932.73,
    "rate":27.80391315,
    "population":321276
  },
  {
    "state":"PA",
    "FIPS":42081,
    "county":"Lycoming County",
    "number":8369.65,
    "rate":71.35494817,
    "population":117296
  },
  {
    "state":"PA",
    "FIPS":42091,
    "county":"Montgomery County",
    "number":286988.69,
    "rate":354.4741965,
    "population":809618
  },
  {
    "state":"PA",
    "FIPS":42101,
    "county":"Philadelphia County",
    "number":3710000,
    "rate":2395.509341,
    "population":1550000
  },
  {
    "state":"PA",
    "FIPS":42107,
    "county":"Schuylkill County",
    "number":14388,
    "rate":97.68616588,
    "population":147288
  },
  {
    "state":"PA",
    "FIPS":42125,
    "county":"Washington County",
    "number":837.8,
    "rate":4.019555632,
    "population":208431
  },
  {
    "state":"PA",
    "FIPS":42129,
    "county":"Westmoreland County",
    "number":13073,
    "rate":36.00385569,
    "population":363100
  },
  {
    "state":"PA",
    "FIPS":42133,
    "county":"York County",
    "number":2823.63,
    "rate":6.45107711,
    "population":437699
  },
  {
    "state":"RI",
    "FIPS":44007,
    "county":"Providence County",
    "number":79663.52,
    "rate":126.5770106,
    "population":629368
  },
  {
    "state":"RI",
    "FIPS":44009,
    "county":"Washington County",
    "number":4983.3,
    "rate":39.47262113,
    "population":126247
  },
  {
    "state":"SC",
    "FIPS":45007,
    "county":"Anderson County",
    "number":2121.6,
    "rate":11.20375993,
    "population":189365
  },
  {
    "state":"SC",
    "FIPS":45009,
    "county":"Bamberg County",
    "number":14696.77,
    "rate":930.7644079,
    "population":15790
  },
  {
    "state":"SC",
    "FIPS":45015,
    "county":"Berkeley County",
    "number":7629.06,
    "rate":40.26037901,
    "population":189493
  },
  {
    "state":"SC",
    "FIPS":45019,
    "county":"Charleston County",
    "number":209715.03,
    "rate":573.8196907,
    "population":365472
  },
  {
    "state":"SC",
    "FIPS":45021,
    "county":"Cherokee County",
    "number":12016,
    "rate":215.8394855,
    "population":55671
  },
  {
    "state":"SC",
    "FIPS":45035,
    "county":"Dorchester County",
    "number":4812.53,
    "rate":33.77925177,
    "population":142470
  },
  {
    "state":"SC",
    "FIPS":45045,
    "county":"Greenville County",
    "number":407718.83,
    "rate":873.5122483,
    "population":466758
  },
  {
    "state":"SC",
    "FIPS":45049,
    "county":"Hampton County",
    "number":1660.65,
    "rate":80.15106907,
    "population":20719
  },
  {
    "state":"SC",
    "FIPS":45051,
    "county":"Horry County",
    "number":399111.55,
    "rate":1415.339374,
    "population":281990
  },
  {
    "state":"SC",
    "FIPS":45057,
    "county":"Lancaster County",
    "number":6135.75,
    "rate":77.47843875,
    "population":79193
  },
  {
    "state":"SC",
    "FIPS":45059,
    "county":"Laurens County",
    "number":1500,
    "rate":22.6387757,
    "population":66258
  },
  {
    "state":"SC",
    "FIPS":45063,
    "county":"Lexington County",
    "number":33570,
    "rate":124.2808592,
    "population":270114
  },
  {
    "state":"SC",
    "FIPS":45075,
    "county":"Orangeburg County",
    "number":825,
    "rate":9.023395203,
    "population":91429
  },
  {
    "state":"SC",
    "FIPS":45079,
    "county":"Richland County",
    "number":176271.83,
    "rate":447.7575017,
    "population":393677
  },
  {
    "state":"SC",
    "FIPS":45083,
    "county":"Spartanburg County",
    "number":262595.51,
    "rate":910.4590512,
    "population":288421
  },
  {
    "state":"SC",
    "FIPS":45085,
    "county":"Sumter County",
    "number":64887.48,
    "rate":600.476402,
    "population":108060
  },
  {
    "state":"SC",
    "FIPS":45091,
    "county":"York County",
    "number":8479.83,
    "rate":36.15114723,
    "population":234566
  },
  {
    "state":"SD",
    "FIPS":46103,
    "county":"Pennington County",
    "number":110238.79,
    "rate":1054.391977,
    "population":104552
  },
  {
    "state":"TN",
    "FIPS":47017,
    "county":"Carroll County",
    "number":4353.6,
    "rate":152.1014569,
    "population":28623
  },
  {
    "state":"TN",
    "FIPS":47035,
    "county":"Cumberland County",
    "number":11079,
    "rate":194.2423339,
    "population":57037
  },
  {
    "state":"TN",
    "FIPS":47037,
    "county":"Davidson County",
    "number":1550000,
    "rate":2391.042499,
    "population":649142
  },
  {
    "state":"TN",
    "FIPS":47065,
    "county":"Hamilton County",
    "number":475455.04,
    "rate":1375.511099,
    "population":345657
  },
  {
    "state":"TN",
    "FIPS":47077,
    "county":"Henderson County",
    "number":39170,
    "rate":1397.979942,
    "population":28019
  },
  {
    "state":"TN",
    "FIPS":47093,
    "county":"Knox County",
    "number":39179.61,
    "rate":88.81526332,
    "population":441136
  },
  {
    "state":"TN",
    "FIPS":47113,
    "county":"Madison County",
    "number":5876.73,
    "rate":59.63135838,
    "population":98551
  },
  {
    "state":"TN",
    "FIPS":47119,
    "county":"Maury County",
    "number":3828.08,
    "rate":46.71580592,
    "population":81944
  },
  {
    "state":"TN",
    "FIPS":47125,
    "county":"Montgomery County",
    "number":3513.6,
    "rate":18.95554596,
    "population":185360
  },
  {
    "state":"TN",
    "FIPS":47133,
    "county":"Overton County",
    "number":11682,
    "rate":525.9556076,
    "population":22211
  },
  {
    "state":"TN",
    "FIPS":47133,
    "county":"Overton County",
    "number":11682,
    "rate":525.9556076,
    "population":22211
  },
  {
    "state":"TN",
    "FIPS":47157,
    "county":"Shelby County",
    "number":355451.78,
    "rate":378.163525,
    "population":939942
  },
  {
    "state":"TN",
    "FIPS":47163,
    "county":"Sullivan County",
    "number":220938.5,
    "rate":1410.188737,
    "population":156673
  },
  {
    "state":"TN",
    "FIPS":47165,
    "county":"Sumner County",
    "number":113.77,
    "rate":0.684717976,
    "population":166156
  },
  {
    "state":"TN",
    "FIPS":47179,
    "county":"Washington County",
    "number":66389.45,
    "rate":531.5536002,
    "population":124897
  },
  {
    "state":"TN",
    "FIPS":47189,
    "county":"Wilson County",
    "number":6203.38,
    "rate":52.09072283,
    "population":119088
  },
  {
    "state":"TX",
    "FIPS":48005,
    "county":"Angelina County",
    "number":31472.3,
    "rate":359.3343609,
    "population":87585
  },
  {
    "state":"TX",
    "FIPS":48007,
    "county":"Aransas County",
    "number":36143.41,
    "rate":1524.588096,
    "population":23707
  },
  {
    "state":"TX",
    "FIPS":48015,
    "county":"Austin County",
    "number":22841.76,
    "rate":798.0490532,
    "population":28622
  },
  {
    "state":"TX",
    "FIPS":48027,
    "county":"Bell County",
    "number":1013.3,
    "rate":3.135724608,
    "population":323147
  },
  {
    "state":"TX",
    "FIPS":48029,
    "county":"Bexar County",
    "number":2750000,
    "rate":1536.39764,
    "population":1790000
  },
  {
    "state":"TX",
    "FIPS":48039,
    "county":"Brazoria County",
    "number":42782.74,
    "rate":131.7620428,
    "population":324697
  },
  {
    "state":"TX",
    "FIPS":48085,
    "county":"Collin County",
    "number":49143.88,
    "rate":58.6809413,
    "population":837476
  },
  {
    "state":"TX",
    "FIPS":48091,
    "county":"Comal County",
    "number":23984.83,
    "rate":208.3879684,
    "population":115097
  },
  {
    "state":"TX",
    "FIPS":48113,
    "county":"Dallas County",
    "number":4150000,
    "rate":1687.578318,
    "population":2460000
  },
  {
    "state":"TX",
    "FIPS":48121,
    "county":"Denton County",
    "number":49357.11,
    "rate":69.71717409,
    "population":707962
  },
  {
    "state":"TX",
    "FIPS":48135,
    "county":"Ector County",
    "number":40514.07,
    "rate":280.4828861,
    "population":144444
  },
  {
    "state":"TX",
    "FIPS":48141,
    "county":"El Paso County",
    "number":86476.99,
    "rate":104.045737,
    "population":831144
  },
  {
    "state":"TX",
    "FIPS":48157,
    "county":"Fort Bend County",
    "number":83940.19,
    "rate":133.9391323,
    "population":626704
  },
  {
    "state":"TX",
    "FIPS":48167,
    "county":"Galveston County",
    "number":57938,
    "rate":192.1855979,
    "population":301469
  },
  {
    "state":"TX",
    "FIPS":48183,
    "county":"Gregg County",
    "number":75315.31,
    "rate":612.8377653,
    "population":122896
  },
  {
    "state":"TX",
    "FIPS":48187,
    "county":"Guadalupe County",
    "number":88368,
    "rate":632.492091,
    "population":139714
  },
  {
    "state":"TX",
    "FIPS":48201,
    "county":"Harris County",
    "number":1620000,
    "rate":379.2733248,
    "population":4260000
  },
  {
    "state":"TX",
    "FIPS":48215,
    "county":"Hidalgo County",
    "number":174876.96,
    "rate":216.5055681,
    "population":807725
  },
  {
    "state":"TX",
    "FIPS":48245,
    "county":"Jefferson County",
    "number":9862.33,
    "rate":39.22900988,
    "population":251404
  },
  {
    "state":"TX",
    "FIPS":48259,
    "county":"Kendall County",
    "number":14905.76,
    "rate":416.8393971,
    "population":35759
  },
  {
    "state":"TX",
    "FIPS":48265,
    "county":"Kerr County",
    "number":18,
    "rate":0.3614603,
    "population":49798
  },
  {
    "state":"TX",
    "FIPS":48303,
    "county":"Lubbock County",
    "number":109131.15,
    "rate":381.4494086,
    "population":286096
  },
  {
    "state":"TX",
    "FIPS":48329,
    "county":"Midland County",
    "number":17357.77,
    "rate":118.0078183,
    "population":147090
  },
  {
    "state":"TX",
    "FIPS":48339,
    "county":"Montgomery County",
    "number":1659.06,
    "rate":3.419903158,
    "population":485119
  },
  {
    "state":"TX",
    "FIPS":48355,
    "county":"Nueces County",
    "number":322277.74,
    "rate":926.2637922,
    "population":347933
  },
  {
    "state":"TX",
    "FIPS":48375,
    "county":"Potter County",
    "number":110516.06,
    "rate":900.3051632,
    "population":122754
  },
  {
    "state":"TX",
    "FIPS":48439,
    "county":"Tarrant County",
    "number":342088.15,
    "rate":181.689055,
    "population":1880000
  },
  {
    "state":"TX",
    "FIPS":48453,
    "county":"Travis County",
    "number":1580000,
    "rate":1443.439118,
    "population":1100000
  },
  {
    "state":"TX",
    "FIPS":48491,
    "county":"Williamson County",
    "number":183202.73,
    "rate":401.2385867,
    "population":456593
  },
  {
    "state":"UT",
    "FIPS":49011,
    "county":"Davis County",
    "number":28563.64,
    "rate":90.38611725,
    "population":316018
  },
  {
    "state":"UT",
    "FIPS":49035,
    "county":"Salt Lake County",
    "number":462615.45,
    "rate":434.624747,
    "population":1060000
  },
  {
    "state":"UT",
    "FIPS":49049,
    "county":"Utah County",
    "number":14306.7,
    "rate":26.51343027,
    "population":539602
  },
  {
    "state":"UT",
    "FIPS":49053,
    "county":"Washington County",
    "number":10861.45,
    "rate":75.09143201,
    "population":144643
  },
  {
    "state":"UT",
    "FIPS":49057,
    "county":"Weber County",
    "number":470434.11,
    "rate":1988.814196,
    "population":236540
  },
  {
    "state":"VT",
    "FIPS":50003,
    "county":"Bennington County",
    "number":102875.53,
    "rate":2805.51774,
    "population":36669
  },
  {
    "state":"VT",
    "FIPS":50007,
    "county":"Chittenden County",
    "number":114117.94,
    "rate":719.3470793,
    "population":158641
  },
  {
    "state":"VA",
    "FIPS":51003,
    "county":"Albemarle County",
    "number":32130.8,
    "rate":314.915221,
    "population":102030
  },
  {
    "state":"VA",
    "FIPS":51013,
    "county":"Arlington County",
    "number":104878.75,
    "rate":472.5396153,
    "population":221947
  },
  {
    "state":"VA",
    "FIPS":51041,
    "county":"Chesterfield County",
    "number":10376.85,
    "rate":32.04214914,
    "population":323850
  },
  {
    "state":"VA",
    "FIPS":51059,
    "county":"Fairfax County",
    "number":220210.73,
    "rate":196.4325677,
    "population":1120000
  },
  {
    "state":"VA",
    "FIPS":51075,
    "county":"Goochland County",
    "number":16344.2,
    "rate":765.5362998,
    "population":21350
  },
  {
    "state":"VA",
    "FIPS":51087,
    "county":"Henrico County",
    "number":49562.29,
    "rate":157.1256154,
    "population":315431
  },
  {
    "state":"VA",
    "FIPS":51107,
    "county":"Loudoun County",
    "number":1386.75,
    "rate":4.100808777,
    "population":338165
  },
  {
    "state":"VA",
    "FIPS":51153,
    "county":"Prince William County",
    "number":2682.17,
    "rate":6.219870787,
    "population":431226
  },
  {
    "state":"VA",
    "FIPS":51510,
    "county":"Alexandria City",
    "number":891,
    "rate":6.063947078,
    "population":146934
  },
  {
    "state":"VA",
    "FIPS":51540,
    "county":"Charlottesville City",
    "number":156183,
    "rate":3508.074841,
    "population":44521
  },
  {
    "state":"VA",
    "FIPS":51550,
    "county":"Chesapeake City",
    "number":238603.71,
    "rate":1045.645301,
    "population":228188
  },
  {
    "state":"VA",
    "FIPS":51683,
    "county":"Manassas City",
    "number":103481.5,
    "rate":2539.921948,
    "population":40742
  },
  {
    "state":"VA",
    "FIPS":51710,
    "county":"Norfolk City",
    "number":176117.59,
    "rate":715.4888889,
    "population":246150
  },
  {
    "state":"VA",
    "FIPS":51730,
    "county":"Petersburg City",
    "number":5951.46,
    "rate":185.0175646,
    "population":32167
  },
  {
    "state":"VA",
    "FIPS":51760,
    "county":"Richmond City",
    "number":103470.3,
    "rate":489.1611433,
    "population":211526
  },
  {
    "state":"VA",
    "FIPS":51770,
    "county":"Roanoke City",
    "number":22854.73,
    "rate":233.4998314,
    "population":97879
  },
  {
    "state":"VA",
    "FIPS":51775,
    "county":"Salem City",
    "number":59036.55,
    "rate":2356.466291,
    "population":25053
  },
  {
    "state":"VA",
    "FIPS":51800,
    "county":"Suffolk City",
    "number":7668.29,
    "rate":90.02136577,
    "population":85183
  },
  {
    "state":"VA",
    "FIPS":51810,
    "county":"Virginia Beach City",
    "number":59565.23,
    "rate":133.623536,
    "population":445769
  },
  {
    "state":"WA",
    "FIPS":53003,
    "county":"Asotin County",
    "number":7626,
    "rate":348.6490193,
    "population":21873
  },
  {
    "state":"WA",
    "FIPS":53011,
    "county":"Clark County",
    "number":57272.45,
    "rate":130.9069611,
    "population":437505
  },
  {
    "state":"WA",
    "FIPS":53033,
    "county":"King County",
    "number":3130000,
    "rate":1559.598273,
    "population":2010000
  },
  {
    "state":"WA",
    "FIPS":53035,
    "county":"Kitsap County",
    "number":40769.74,
    "rate":160.0954217,
    "population":254659
  },
  {
    "state":"WA",
    "FIPS":53053,
    "county":"Pierce County",
    "number":337144.14,
    "rate":415.016612,
    "population":812363
  },
  {
    "state":"WA",
    "FIPS":53061,
    "county":"Snohomish County",
    "number":107490.31,
    "rate":146.6559564,
    "population":732942
  },
  {
    "state":"WA",
    "FIPS":53063,
    "county":"Spokane County",
    "number":343897.41,
    "rate":722.9230992,
    "population":475704
  },
  {
    "state":"WA",
    "FIPS":53067,
    "county":"Thurston County",
    "number":85817.46,
    "rate":331.709114,
    "population":258713
  },
  {
    "state":"WA",
    "FIPS":53077,
    "county":"Yakima County",
    "number":75.72,
    "rate":0.306905371,
    "population":246721
  },
  {
    "state":"WV",
    "FIPS":54003,
    "county":"Berkeley County",
    "number":8634.46,
    "rate":80.64915656,
    "population":107062
  },
  {
    "state":"WV",
    "FIPS":54033,
    "county":"Harrison County",
    "number":24317.85,
    "rate":351.6782843,
    "population":69148
  },
  {
    "state":"WV",
    "FIPS":54039,
    "county":"Kanawha County",
    "number":14646.6,
    "rate":76.22403098,
    "population":192152
  },
  {
    "state":"WV",
    "FIPS":54061,
    "county":"Monongalia County",
    "number":29717.21,
    "rate":295.602451,
    "population":100531
  },
  {
    "state":"WI",
    "FIPS":55025,
    "county":"Dane County",
    "number":142070.49,
    "rate":282.2818716,
    "population":503293
  },
  {
    "state":"WI",
    "FIPS":55059,
    "county":"Kenosha County",
    "number":6463,
    "rate":38.61919786,
    "population":167352
  },
  {
    "state":"WI",
    "FIPS":55063,
    "county":"La Crosse County",
    "number":20271.98,
    "rate":173.5154197,
    "population":116831
  },
  {
    "state":"WI",
    "FIPS":55079,
    "county":"Milwaukee County",
    "number":286424.43,
    "rate":300.0713761,
    "population":954521
  },
  {
    "state":"WI",
    "FIPS":55133,
    "county":"Waukesha County",
    "number":134765.77,
    "rate":343.2447157,
    "population":392623
  }
];

function compareNum(a,b) {
    return b.number - a.number;
}

function compareRate(a,b) {
    return b.rate - a.rate;
}

var topCountiesNum2013 = (function(){
  return grants2013.sort(compareNum).slice(0);
})();

var topCountiesNum2014 = (function(){
  return grants2014.sort(compareNum).slice(0);
})();

var topCountiesRate2013 = (function(){
  return grants2013.sort(compareRate).slice(0);
})();

var topCountiesRate2014 = (function(){
  return grants2014.sort(compareRate).slice(0);
})();

    return {
      '2013': grants2013,
      '2014': grants2014,
      total2013: topCountiesNum2013,
      total2014: topCountiesNum2014,
      per_capita2013: topCountiesRate2013,
      per_capita2014: topCountiesRate2014
    };
  });
