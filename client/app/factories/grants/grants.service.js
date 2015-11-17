'use strict';

angular.module('foglightApp')
  .factory('grants', function () {
    
    var grants = [
  {
    "id":55063,
    "rate":173.51541970881016,
    "state":"WI",
    "name":"La Crosse County"
  },
  {
    "id":55059,
    "rate":38.61919785840623,
    "state":"WI",
    "name":"Kenosha County"
  },
  {
    "id":55025,
    "rate":282.281871593684,
    "state":"WI",
    "name":"Dane County"
  },
  {
    "id":54039,
    "rate":76.22403097547776,
    "state":"WV",
    "name":"Kanawha County"
  },
  {
    "id":54033,
    "rate":351.67828425984845,
    "state":"WV",
    "name":"Harrison County"
  },
  {
    "id":54003,
    "rate":80.64915656348657,
    "state":"WV",
    "name":"Berkeley County"
  },
  {
    "id":53063,
    "rate":722.9230992381816,
    "state":"WA",
    "name":"Spokane County"
  },
  {
    "id":53077,
    "rate":0.3069053708439898,
    "state":"WA",
    "name":"Yakima County"
  },
  {
    "id":53053,
    "rate":415.01661203181345,
    "state":"WA",
    "name":"Pierce County"
  },
  {
    "id":53035,
    "rate":160.095421720811,
    "state":"WA",
    "name":"Kitsap County"
  },
  {
    "id":53011,
    "rate":130.9069610633021,
    "state":"WA",
    "name":"Clark County"
  },
  {
    "id":51810,
    "rate":133.62353595696428,
    "state":"VA",
    "name":"Virginia Beach City"
  },
  {
    "id":51775,
    "rate":2356.4662914621003,
    "state":"VA",
    "name":"Salem City"
  },
  {
    "id":51730,
    "rate":185.01756458482294,
    "state":"VA",
    "name":"Petersburg City"
  },
  {
    "id":51683,
    "rate":2539.921947867066,
    "state":"VA",
    "name":"Manassas City"
  },
  {
    "id":51153,
    "rate":6.219870787011915,
    "state":"VA",
    "name":"Prince William County"
  },
  {
    "id":51107,
    "rate":4.100808776780566,
    "state":"VA",
    "name":"Loudoun County"
  },
  {
    "id":51059,
    "rate":196.43256768208377,
    "state":"VA",
    "name":"Fairfax County"
  },
  {
    "id":51013,
    "rate":472.53961531356583,
    "state":"VA",
    "name":"Arlington County"
  },
  {
    "id":51003,
    "rate":314.9152210134274,
    "state":"VA",
    "name":"Albemarle County"
  },
  {
    "id":49057,
    "rate":1988.8141963304292,
    "state":"UT",
    "name":"Weber County"
  },
  {
    "id":49049,
    "rate":26.513430268976027,
    "state":"UT",
    "name":"Utah County"
  },
  {
    "id":48491,
    "rate":401.23858666252,
    "state":"TX",
    "name":"Williamson County"
  },
  {
    "id":48439,
    "rate":181.68905504609555,
    "state":"TX",
    "name":"Tarrant County"
  },
  {
    "id":48339,
    "rate":3.4199031577819046,
    "state":"TX",
    "name":"Montgomery County"
  },
  {
    "id":48329,
    "rate":118.00781834251138,
    "state":"TX",
    "name":"Midland County"
  },
  {
    "id":48303,
    "rate":381.4494085901236,
    "state":"TX",
    "name":"Lubbock County"
  },
  {
    "id":48265,
    "rate":0.3614602996104261,
    "state":"TX",
    "name":"Kerr County"
  },
  {
    "id":48245,
    "rate":39.22900988051105,
    "state":"TX",
    "name":"Jefferson County"
  },
  {
    "id":48187,
    "rate":632.4920909858712,
    "state":"TX",
    "name":"Guadalupe County"
  },
  {
    "id":48183,
    "rate":612.8377652649395,
    "state":"TX",
    "name":"Gregg County"
  },
  {
    "id":48157,
    "rate":133.9391323495622,
    "state":"TX",
    "name":"Fort Bend County"
  },
  {
    "id":48141,
    "rate":104.04573696014171,
    "state":"TX",
    "name":"El Paso County"
  },
  {
    "id":48135,
    "rate":280.482886101188,
    "state":"TX",
    "name":"Ector County"
  },
  {
    "id":48121,
    "rate":69.71717408561477,
    "state":"TX",
    "name":"Denton County"
  },
  {
    "id":48113,
    "rate":1687.5783176815353,
    "state":"TX",
    "name":"Dallas County"
  },
  {
    "id":48085,
    "rate":58.680941304586646,
    "state":"TX",
    "name":"Collin County"
  },
  {
    "id":17197,
    "rate":10.813501283372448,
    "state":"IL",
    "name":"Will County"
  },
  {
    "id":48029,
    "rate":1536.3976402822366,
    "state":"TX",
    "name":"Bexar County"
  },
  {
    "id":48007,
    "rate":1524.5880963428522,
    "state":"TX",
    "name":"Aransas County"
  },
  {
    "id":47165,
    "rate":0.6847179758780905,
    "state":"TN",
    "name":"Sumner County"
  },
  {
    "id":47163,
    "rate":1410.1887370510556,
    "state":"TN",
    "name":"Sullivan County"
  },
  {
    "id":47133,
    "rate":525.9556075818289,
    "state":"TN",
    "name":"Overton County"
  },
  {
    "id":47125,
    "rate":18.955545964609406,
    "state":"TN",
    "name":"Montgomery County"
  },
  {
    "id":47119,
    "rate":46.715805916235475,
    "state":"TN",
    "name":"Maury County"
  },
  {
    "id":47065,
    "rate":1375.5110991532051,
    "state":"TN",
    "name":"Hamilton County"
  },
  {
    "id":47037,
    "rate":2391.0424991758364,
    "state":"TN",
    "name":"Davidson County"
  },
  {
    "id":55133,
    "rate":343.24471566872046,
    "state":"WI",
    "name":"Waukesha County"
  },
  {
    "id":18057,
    "rate":166.91148944987395,
    "state":"IN",
    "name":"Hamilton County"
  },
  {
    "id":47035,
    "rate":194.24233392359346,
    "state":"TN",
    "name":"Cumberland County"
  },
  {
    "id":47017,
    "rate":152.10145687034904,
    "state":"TN",
    "name":"Carroll County"
  },
  {
    "id":26025,
    "rate":7.235158800831107,
    "state":"MI",
    "name":"Calhoun County"
  },
  {
    "id":45083,
    "rate":910.4590511786587,
    "state":"SC",
    "name":"Spartanburg County"
  },
  {
    "id":22071,
    "rate":431.7586926981606,
    "state":"LA",
    "name":"Orleans Parish"
  },
  {
    "id":45075,
    "rate":9.023395202834987,
    "state":"SC",
    "name":"Orangeburg County"
  },
  {
    "id":45063,
    "rate":124.28085919278529,
    "state":"SC",
    "name":"Lexington County"
  },
  {
    "id":45051,
    "rate":1415.339373736656,
    "state":"SC",
    "name":"Horry County"
  },
  {
    "id":31111,
    "rate":366.4761719725777,
    "state":"NE",
    "name":"Lincoln County"
  },
  {
    "id":45021,
    "rate":215.83948554902912,
    "state":"SC",
    "name":"Cherokee County"
  },
  {
    "id":45009,
    "rate":930.7644078530716,
    "state":"SC",
    "name":"Bamberg County"
  },
  {
    "id":48355,
    "rate":926.263792166882,
    "state":"TX",
    "name":"Nueces County"
  },
  {
    "id":45007,
    "rate":11.203759934517993,
    "state":"SC",
    "name":"Anderson County"
  },
  {
    "id":42125,
    "rate":4.019555632319568,
    "state":"PA",
    "name":"Washington County"
  },
  {
    "id":48027,
    "rate":3.1357246083051984,
    "state":"TX",
    "name":"Bell County"
  },
  {
    "id":5119,
    "rate":1257.806008358649,
    "state":"AR",
    "name":"Pulaski County"
  },
  {
    "id":42107,
    "rate":97.68616587909402,
    "state":"PA",
    "name":"Schuylkill County"
  },
  {
    "id":51540,
    "rate":3508.074841086229,
    "state":"VA",
    "name":"Charlottesville City"
  },
  {
    "id":42101,
    "rate":2395.5093408393723,
    "state":"PA",
    "name":"Philadelphia County"
  },
  {
    "id":47157,
    "rate":378.16352498345634,
    "state":"TN",
    "name":"Shelby County"
  },
  {
    "id":47189,
    "rate":52.09072282681715,
    "state":"TN",
    "name":"Wilson County"
  },
  {
    "id":42077,
    "rate":0.13803624858909727,
    "state":"PA",
    "name":"Lehigh County"
  },
  {
    "id":12011,
    "rate":446.4757197738398,
    "state":"FL",
    "name":"Broward County"
  },
  {
    "id":42039,
    "rate":77.28724617841661,
    "state":"PA",
    "name":"Crawford County"
  },
  {
    "id":28049,
    "rate":53.23462130182281,
    "state":"MS",
    "name":"Hinds County"
  },
  {
    "id":45019,
    "rate":573.8196907013394,
    "state":"SC",
    "name":"Charleston County"
  },
  {
    "id":27123,
    "rate":60.06392548553613,
    "state":"MN",
    "name":"Ramsey County"
  },
  {
    "id":41051,
    "rate":778.1918169993555,
    "state":"OR",
    "name":"Multnomah County"
  },
  {
    "id":16027,
    "rate":86.94892084846484,
    "state":"ID",
    "name":"Canyon County"
  },
  {
    "id":30013,
    "rate":346.3420779061946,
    "state":"MT",
    "name":"Cascade County"
  },
  {
    "id":41017,
    "rate":357.3593782844706,
    "state":"OR",
    "name":"Deschutes County"
  },
  {
    "id":40109,
    "rate":506.059665919328,
    "state":"OK",
    "name":"Oklahoma County"
  },
  {
    "id":40019,
    "rate":47.59529450887476,
    "state":"OK",
    "name":"Carter County"
  },
  {
    "id":6019,
    "rate":1062.1739222137849,
    "state":"CA",
    "name":"Fresno County"
  },
  {
    "id":34025,
    "rate":66.85081757727566,
    "state":"NJ",
    "name":"Monmouth County"
  },
  {
    "id":39169,
    "rate":82.8249412992434,
    "state":"OH",
    "name":"Wayne County"
  },
  {
    "id":12075,
    "rate":351.79588469135183,
    "state":"FL",
    "name":"Levy County"
  },
  {
    "id":39165,
    "rate":191.88341075013898,
    "state":"OH",
    "name":"Warren County"
  },
  {
    "id":49053,
    "rate":75.09143200846222,
    "state":"UT",
    "name":"Washington County"
  },
  {
    "id":13051,
    "rate":152.12081240287668,
    "state":"GA",
    "name":"Chatham County"
  },
  {
    "id":22069,
    "rate":1300.903930462989,
    "state":"LA",
    "name":"Natchitoches Parish"
  },
  {
    "id":42017,
    "rate":261.93085474193896,
    "state":"PA",
    "name":"Bucks County"
  },
  {
    "id":39101,
    "rate":611.5075111345965,
    "state":"OH",
    "name":"Marion County"
  },
  {
    "id":39153,
    "rate":94.387529651467,
    "state":"OH",
    "name":"Summit County"
  },
  {
    "id":39099,
    "rate":17.093775314160663,
    "state":"OH",
    "name":"Mahoning County"
  },
  {
    "id":12097,
    "rate":196.41350313181294,
    "state":"FL",
    "name":"Osceola County"
  },
  {
    "id":46103,
    "rate":1054.3919771979492,
    "state":"SD",
    "name":"Pennington County"
  },
  {
    "id":39095,
    "rate":318.41708278460635,
    "state":"OH",
    "name":"Lucas County"
  },
  {
    "id":53003,
    "rate":348.649019338911,
    "state":"WA",
    "name":"Asotin County"
  },
  {
    "id":39085,
    "rate":145.47991193076535,
    "state":"OH",
    "name":"Lake County"
  },
  {
    "id":39061,
    "rate":369.86441163824,
    "state":"OH",
    "name":"Hamilton County"
  },
  {
    "id":27145,
    "rate":520.094034791554,
    "state":"MN",
    "name":"Stearns County"
  },
  {
    "id":39049,
    "rate":443.58634881062983,
    "state":"OH",
    "name":"Franklin County"
  },
  {
    "id":37147,
    "rate":1902.8027415483393,
    "state":"NC",
    "name":"Pitt County"
  },
  {
    "id":20209,
    "rate":0.7404756972561721,
    "state":"KS",
    "name":"Wyandotte County"
  },
  {
    "id":37135,
    "rate":695.2111407992564,
    "state":"NC",
    "name":"Orange County"
  },
  {
    "id":51550,
    "rate":1045.645301242835,
    "state":"VA",
    "name":"Chesapeake City"
  },
  {
    "id":37133,
    "rate":22.024275646045417,
    "state":"NC",
    "name":"Onslow County"
  },
  {
    "id":50003,
    "rate":2805.5177397801963,
    "state":"VT",
    "name":"Bennington County"
  },
  {
    "id":21155,
    "rate":881.6783391695849,
    "state":"KY",
    "name":"Marion County"
  },
  {
    "id":45015,
    "rate":40.2603790113619,
    "state":"SC",
    "name":"Berkeley County"
  },
  {
    "id":37129,
    "rate":410.7662073120582,
    "state":"NC",
    "name":"New Hanover County"
  },
  {
    "id":37127,
    "rate":155.2874527906001,
    "state":"NC",
    "name":"Nash County"
  },
  {
    "id":48005,
    "rate":359.33436090654794,
    "state":"TX",
    "name":"Angelina County"
  },
  {
    "id":37097,
    "rate":567.3343206902485,
    "state":"NC",
    "name":"Iredell County"
  },
  {
    "id":37081,
    "rate":394.8440588228246,
    "state":"NC",
    "name":"Guilford County"
  },
  {
    "id":36085,
    "rate":455.7903889149573,
    "state":"NY",
    "name":"Richmond County"
  },
  {
    "id":37067,
    "rate":355.3498227490243,
    "state":"NC",
    "name":"Forsyth County"
  },
  {
    "id":45079,
    "rate":447.75750170825324,
    "state":"SC",
    "name":"Richland County"
  },
  {
    "id":37159,
    "rate":426.95508102816956,
    "state":"NC",
    "name":"Rowan County"
  },
  {
    "id":37031,
    "rate":17843.50005163842,
    "state":"NC",
    "name":"Carteret County"
  },
  {
    "id":54061,
    "rate":295.6024509852682,
    "state":"WV",
    "name":"Monongalia County"
  },
  {
    "id":41029,
    "rate":31.081153113688014,
    "state":"OR",
    "name":"Jackson County"
  },
  {
    "id":37021,
    "rate":586.5100690366381,
    "state":"NC",
    "name":"Buncombe County"
  },
  {
    "id":51800,
    "rate":90.02136576546962,
    "state":"VA",
    "name":"Suffolk City"
  },
  {
    "id":49011,
    "rate":90.38611724648597,
    "state":"UT",
    "name":"Davis County"
  },
  {
    "id":12073,
    "rate":21.032784459616565,
    "state":"FL",
    "name":"Leon County"
  },
  {
    "id":40027,
    "rate":189.96182202147884,
    "state":"OK",
    "name":"Cleveland County"
  },
  {
    "id":13153,
    "rate":15.282489740082081,
    "state":"GA",
    "name":"Houston County"
  },
  {
    "id":37001,
    "rate":762.4557499088969,
    "state":"NC",
    "name":"Alamance County"
  },
  {
    "id":36091,
    "rate":53.28353108856047,
    "state":"NY",
    "name":"Saratoga County"
  },
  {
    "id":36087,
    "rate":2.922992212695666,
    "state":"NY",
    "name":"Rockland County"
  },
  {
    "id":31053,
    "rate":86.89664575947641,
    "state":"NE",
    "name":"Dodge County"
  },
  {
    "id":36071,
    "rate":36.15431517692868,
    "state":"NY",
    "name":"Orange County"
  },
  {
    "id":17111,
    "rate":1084.1108926975878,
    "state":"IL",
    "name":"McHenry County"
  },
  {
    "id":36061,
    "rate":1107.4294270605794,
    "state":"NY",
    "name":"New York County"
  },
  {
    "id":34015,
    "rate":114.89931681114092,
    "state":"NJ",
    "name":"Gloucester County"
  },
  {
    "id":36067,
    "rate":577.0677594599102,
    "state":"NY",
    "name":"Onondaga County"
  },
  {
    "id":42063,
    "rate":174.29695382557335,
    "state":"PA",
    "name":"Indiana County"
  },
  {
    "id":36015,
    "rate":0.5715502459907431,
    "state":"NY",
    "name":"Chemung County"
  },
  {
    "id":45035,
    "rate":33.77925177230294,
    "state":"SC",
    "name":"Dorchester County"
  },
  {
    "id":39023,
    "rate":34.717990582678546,
    "state":"OH",
    "name":"Clark County"
  },
  {
    "id":42051,
    "rate":448.3814465710553,
    "state":"PA",
    "name":"Fayette County"
  },
  {
    "id":49035,
    "rate":434.62474704106114,
    "state":"UT",
    "name":"Salt Lake County"
  },
  {
    "id":18043,
    "rate":5.911083364327081,
    "state":"IN",
    "name":"Floyd County"
  },
  {
    "id":39009,
    "rate":27.847396268448897,
    "state":"OH",
    "name":"Athens County"
  },
  {
    "id":12095,
    "rate":429.1473999980033,
    "state":"FL",
    "name":"Orange County"
  },
  {
    "id":35015,
    "rate":219.89166819937466,
    "state":"NM",
    "name":"Eddy County"
  },
  {
    "id":34035,
    "rate":47.652658575987786,
    "state":"NJ",
    "name":"Somerset County"
  },
  {
    "id":34031,
    "rate":18.138146938791675,
    "state":"NJ",
    "name":"Passaic County"
  },
  {
    "id":51041,
    "rate":32.04214914312181,
    "state":"VA",
    "name":"Chesterfield County"
  },
  {
    "id":23027,
    "rate":364.9155288127748,
    "state":"ME",
    "name":"Waldo County"
  },
  {
    "id":34029,
    "rate":3.04000799023263,
    "state":"NJ",
    "name":"Ocean County"
  },
  {
    "id":17163,
    "rate":19.961344569079376,
    "state":"IL",
    "name":"St. Clair County"
  },
  {
    "id":39173,
    "rate":0.5829362889498597,
    "state":"OH",
    "name":"Wood County"
  },
  {
    "id":34021,
    "rate":523.0008101729542,
    "state":"NJ",
    "name":"Mercer County"
  },
  {
    "id":34013,
    "rate":20.881516948346388,
    "state":"NJ",
    "name":"Essex County"
  },
  {
    "id":51770,
    "rate":233.49983142451393,
    "state":"VA",
    "name":"Roanoke City"
  },
  {
    "id":45057,
    "rate":77.4784387508997,
    "state":"SC",
    "name":"Lancaster County"
  },
  {
    "id":21107,
    "rate":21.41235921373817,
    "state":"KY",
    "name":"Hopkins County"
  },
  {
    "id":34003,
    "rate":7.717374299248186,
    "state":"NJ",
    "name":"Bergen County"
  },
  {
    "id":6047,
    "rate":86.87076700931688,
    "state":"CA",
    "name":"Merced County"
  },
  {
    "id":34001,
    "rate":53.06024690999616,
    "state":"NJ",
    "name":"Atlantic County"
  },
  {
    "id":5005,
    "rate":575.2542785500402,
    "state":"AR",
    "name":"Baxter County"
  },
  {
    "id":33011,
    "rate":713.9729756582211,
    "state":"NH",
    "name":"Hillsborough County"
  },
  {
    "id":48201,
    "rate":379.27332479486563,
    "state":"TX",
    "name":"Harris County"
  },
  {
    "id":39119,
    "rate":355.6940981849531,
    "state":"OH",
    "name":"Muskingum County"
  },
  {
    "id":33009,
    "rate":783.5425667659109,
    "state":"NH",
    "name":"Grafton County"
  },
  {
    "id":31043,
    "rate":1694.2290156932381,
    "state":"NE",
    "name":"Dakota County"
  },
  {
    "id":30093,
    "rate":2593.4693995883226,
    "state":"MT",
    "name":"Silver Bow County"
  },
  {
    "id":48015,
    "rate":798.0490531758787,
    "state":"TX",
    "name":"Austin County"
  },
  {
    "id":18097,
    "rate":307.7596749769481,
    "state":"IN",
    "name":"Marion County"
  },
  {
    "id":25013,
    "rate":159.99841385178945,
    "state":"MA",
    "name":"Hampden County"
  },
  {
    "id":12086,
    "rate":772.5828775622765,
    "state":"FL",
    "name":"Miami-Dade County"
  },
  {
    "id":1117,
    "rate":17.754113941372292,
    "state":"AL",
    "name":"Shelby County"
  },
  {
    "id":29189,
    "rate":424.8127697841723,
    "state":"MO",
    "name":"St. Louis County"
  },
  {
    "id":6073,
    "rate":701.8315248445618,
    "state":"CA",
    "name":"San Diego County"
  },
  {
    "id":29165,
    "rate":189.19566680415952,
    "state":"MO",
    "name":"Platte County"
  },
  {
    "id":42069,
    "rate":225.74681833014776,
    "state":"PA",
    "name":"Lackawanna County"
  },
  {
    "id":42045,
    "rate":14.281639318543238,
    "state":"PA",
    "name":"Delaware County"
  },
  {
    "id":29095,
    "rate":151.44176914332954,
    "state":"MO",
    "name":"Jackson County"
  },
  {
    "id":26145,
    "rate":18.035184699497652,
    "state":"MI",
    "name":"Saginaw County"
  },
  {
    "id":36029,
    "rate":523.2452225319358,
    "state":"NY",
    "name":"Erie County"
  },
  {
    "id":29077,
    "rate":1070.9258744647038,
    "state":"MO",
    "name":"Greene County"
  },
  {
    "id":47077,
    "rate":1397.9799421820908,
    "state":"TN",
    "name":"Henderson County"
  },
  {
    "id":26037,
    "rate":0.6803967236280847,
    "state":"MI",
    "name":"Clinton County"
  },
  {
    "id":29071,
    "rate":59.29615528771231,
    "state":"MO",
    "name":"Franklin County"
  },
  {
    "id":29051,
    "rate":416.0454063396048,
    "state":"MO",
    "name":"Cole County"
  },
  {
    "id":29021,
    "rate":0.2784615555976342,
    "state":"MO",
    "name":"Buchanan County"
  },
  {
    "id":22055,
    "rate":44.61681090484684,
    "state":"LA",
    "name":"Lafayette Parish"
  },
  {
    "id":42129,
    "rate":36.003855687138525,
    "state":"PA",
    "name":"Westmoreland County"
  },
  {
    "id":4019,
    "rate":139.81607984742632,
    "state":"AZ",
    "name":"Pima County"
  },
  {
    "id":34027,
    "rate":63.370355484998896,
    "state":"NJ",
    "name":"Morris County"
  },
  {
    "id":51760,
    "rate":489.1611433109877,
    "state":"VA",
    "name":"Richmond City"
  },
  {
    "id":1033,
    "rate":915.2503074917851,
    "state":"AL",
    "name":"Colbert County"
  },
  {
    "id":18063,
    "rate":673.0412945688087,
    "state":"IN",
    "name":"Hendricks County"
  },
  {
    "id":29019,
    "rate":1205.1944932143872,
    "state":"MO",
    "name":"Boone County"
  },
  {
    "id":51075,
    "rate":765.5362997658079,
    "state":"VA",
    "name":"Goochland County"
  },
  {
    "id":1083,
    "rate":179.47597953366986,
    "state":"AL",
    "name":"Limestone County"
  },
  {
    "id":42013,
    "rate":1397.4861219379682,
    "state":"PA",
    "name":"Blair County"
  },
  {
    "id":40017,
    "rate":77.03682557807593,
    "state":"OK",
    "name":"Canadian County"
  },
  {
    "id":37019,
    "rate":134.36613815120654,
    "state":"NC",
    "name":"Brunswick County"
  },
  {
    "id":34023,
    "rate":60.7720205179957,
    "state":"NJ",
    "name":"Middlesex County"
  },
  {
    "id":10003,
    "rate":24.467465537039786,
    "state":"DE",
    "name":"New Castle County"
  },
  {
    "id":28125,
    "rate":129.75976603300606,
    "state":"MS",
    "name":"Sharkey County"
  },
  {
    "id":44007,
    "rate":126.57701058839979,
    "state":"RI",
    "name":"Providence County"
  },
  {
    "id":28109,
    "rate":17.7300780540933,
    "state":"MS",
    "name":"Pearl River County"
  },
  {
    "id":53033,
    "rate":1559.59827256406,
    "state":"WA",
    "name":"King County"
  },
  {
    "id":18011,
    "rate":115.23342812648114,
    "state":"IN",
    "name":"Boone County"
  },
  {
    "id":31109,
    "rate":1362.1492900442638,
    "state":"NE",
    "name":"Lancaster County"
  },
  {
    "id":36059,
    "rate":300.8908501816906,
    "state":"NY",
    "name":"Nassau County"
  },
  {
    "id":19103,
    "rate":2025.5841300679995,
    "state":"IA",
    "name":"Johnson County"
  },
  {
    "id":27137,
    "rate":190.01730785537217,
    "state":"MN",
    "name":"St. Louis County"
  },
  {
    "id":37047,
    "rate":1113.8653565724603,
    "state":"NC",
    "name":"Columbus County"
  },
  {
    "id":27109,
    "rate":2796.0024056103725,
    "state":"MN",
    "name":"Olmsted County"
  },
  {
    "id":27053,
    "rate":851.6798546911805,
    "state":"MN",
    "name":"Hennepin County"
  },
  {
    "id":27037,
    "rate":31.369526522772777,
    "state":"MN",
    "name":"Dakota County"
  },
  {
    "id":11001,
    "rate":474.05098891408403,
    "state":"DC",
    "name":"District of Columbia"
  },
  {
    "id":31141,
    "rate":286.93408686037225,
    "state":"NE",
    "name":"Platte County"
  },
  {
    "id":26007,
    "rate":330.67202462380305,
    "state":"MI",
    "name":"Alpena County"
  },
  {
    "id":13059,
    "rate":72.28818491726948,
    "state":"GA",
    "name":"Clarke County"
  },
  {
    "id":15003,
    "rate":409.5961590833235,
    "state":"HI",
    "name":"Honolulu County"
  },
  {
    "id":26055,
    "rate":103.07420931408349,
    "state":"MI",
    "name":"Grand Traverse County"
  },
  {
    "id":26019,
    "rate":246.41226203485363,
    "state":"MI",
    "name":"Benzie County"
  },
  {
    "id":25021,
    "rate":0.3307364785594706,
    "state":"MA",
    "name":"Norfolk County"
  },
  {
    "id":25017,
    "rate":35.619137094596,
    "state":"MA",
    "name":"Middlesex County"
  },
  {
    "id":13245,
    "rate":126.03433251141281,
    "state":"GA",
    "name":"Richmond County"
  },
  {
    "id":35049,
    "rate":127.30573487720739,
    "state":"NM",
    "name":"Santa Fe County"
  },
  {
    "id":25009,
    "rate":32.91502095107715,
    "state":"MA",
    "name":"Essex County"
  },
  {
    "id":51087,
    "rate":157.1256154277798,
    "state":"VA",
    "name":"Henrico County"
  },
  {
    "id":22073,
    "rate":338.2986803990988,
    "state":"LA",
    "name":"Ouachita Parish"
  },
  {
    "id":42043,
    "rate":10.542064871394848,
    "state":"PA",
    "name":"Dauphin County"
  },
  {
    "id":26163,
    "rate":307.4124622790431,
    "state":"MI",
    "name":"Wayne County"
  },
  {
    "id":25005,
    "rate":41.04180548872931,
    "state":"MA",
    "name":"Bristol County"
  },
  {
    "id":26147,
    "rate":0.3238583991430209,
    "state":"MI",
    "name":"St. Clair County"
  },
  {
    "id":18163,
    "rate":731.5336788711202,
    "state":"IN",
    "name":"Vanderburgh County"
  },
  {
    "id":25001,
    "rate":2.6996206567525425,
    "state":"MA",
    "name":"Barnstable County"
  },
  {
    "id":24033,
    "rate":156.0156105023513,
    "state":"MD",
    "name":"Prince George's County"
  },
  {
    "id":24510,
    "rate":380.3552291516173,
    "state":"MD",
    "name":"Baltimore City"
  },
  {
    "id":37035,
    "rate":360.9972948135492,
    "state":"NC",
    "name":"Catawba County"
  },
  {
    "id":24027,
    "rate":277.9087041393463,
    "state":"MD",
    "name":"Howard County"
  },
  {
    "id":24005,
    "rate":122.98346213764242,
    "state":"MD",
    "name":"Baltimore County"
  },
  {
    "id":40143,
    "rate":17.328955505647237,
    "state":"OK",
    "name":"Tulsa County"
  },
  {
    "id":6065,
    "rate":50.53777768175665,
    "state":"CA",
    "name":"Riverside County"
  },
  {
    "id":24003,
    "rate":6.447672571112099,
    "state":"MD",
    "name":"Anne Arundel County"
  },
  {
    "id":45091,
    "rate":36.15114722508803,
    "state":"SC",
    "name":"York County"
  },
  {
    "id":23001,
    "rate":198.98163823414504,
    "state":"ME",
    "name":"Androscoggin County"
  },
  {
    "id":32003,
    "rate":584.505089945894,
    "state":"NV",
    "name":"Clark County"
  },
  {
    "id":4007,
    "rate":836.2532294868652,
    "state":"AZ",
    "name":"Gila County"
  },
  {
    "id":21059,
    "rate":59.8718880145712,
    "state":"KY",
    "name":"Daviess County"
  },
  {
    "id":26077,
    "rate":148.7702925260764,
    "state":"MI",
    "name":"Kalamazoo County"
  },
  {
    "id":12103,
    "rate":708.9941177427305,
    "state":"FL",
    "name":"Pinellas County"
  },
  {
    "id":22105,
    "rate":89.68949720038458,
    "state":"LA",
    "name":"Tangipahoa Parish"
  },
  {
    "id":1115,
    "rate":117.17747901133095,
    "state":"AL",
    "name":"St. Clair County"
  },
  {
    "id":42041,
    "rate":523.809229174157,
    "state":"PA",
    "name":"Cumberland County"
  },
  {
    "id":22001,
    "rate":28.02514828762142,
    "state":"LA",
    "name":"Acadia Parish"
  },
  {
    "id":22101,
    "rate":87.28468407876545,
    "state":"LA",
    "name":"St. Mary Parish"
  },
  {
    "id":45049,
    "rate":80.15106906703991,
    "state":"SC",
    "name":"Hampton County"
  },
  {
    "id":34039,
    "rate":18.398718534461405,
    "state":"NJ",
    "name":"Union County"
  },
  {
    "id":29510,
    "rate":4749.697062711027,
    "state":"MO",
    "name":"St. Louis City"
  },
  {
    "id":22079,
    "rate":173.9992127831899,
    "state":"LA",
    "name":"Rapides Parish"
  },
  {
    "id":1097,
    "rate":161.8384365450351,
    "state":"AL",
    "name":"Mobile County"
  },
  {
    "id":26017,
    "rate":2.7668932800418364,
    "state":"MI",
    "name":"Bay County"
  },
  {
    "id":22051,
    "rate":672.4835989184835,
    "state":"LA",
    "name":"Jefferson Parish"
  },
  {
    "id":36047,
    "rate":15.63651905498698,
    "state":"NY",
    "name":"Kings County"
  },
  {
    "id":39151,
    "rate":48.713224701475816,
    "state":"OH",
    "name":"Stark County"
  },
  {
    "id":22033,
    "rate":1658.4310684768711,
    "state":"LA",
    "name":"East Baton Rouge Parish"
  },
  {
    "id":24013,
    "rate":144.4688079430588,
    "state":"MD",
    "name":"Carroll County"
  },
  {
    "id":8119,
    "rate":702.1432238193017,
    "state":"CO",
    "name":"Teller County"
  },
  {
    "id":21227,
    "rate":5.267739045099629,
    "state":"KY",
    "name":"Warren County"
  },
  {
    "id":42003,
    "rate":378.6220225734589,
    "state":"PA",
    "name":"Allegheny County"
  },
  {
    "id":37139,
    "rate":455.6743485984998,
    "state":"NC",
    "name":"Pasquotank County"
  },
  {
    "id":12057,
    "rate":158.0986200032448,
    "state":"FL",
    "name":"Hillsborough County"
  },
  {
    "id":42011,
    "rate":45.905839536166795,
    "state":"PA",
    "name":"Berks County"
  },
  {
    "id":21179,
    "rate":6.1915176658925395,
    "state":"KY",
    "name":"Nelson County"
  },
  {
    "id":36103,
    "rate":135.75484763619838,
    "state":"NY",
    "name":"Suffolk County"
  },
  {
    "id":8059,
    "rate":227.53235304359617,
    "state":"CO",
    "name":"Jefferson County"
  },
  {
    "id":12031,
    "rate":1181.6289099983528,
    "state":"FL",
    "name":"Duval County"
  },
  {
    "id":21173,
    "rate":106.39880952380953,
    "state":"KY",
    "name":"Montgomery County"
  },
  {
    "id":50007,
    "rate":719.3470792544174,
    "state":"VT",
    "name":"Chittenden County"
  },
  {
    "id":19153,
    "rate":2177.9848823381035,
    "state":"IA",
    "name":"Polk County"
  },
  {
    "id":21117,
    "rate":82.5132522221054,
    "state":"KY",
    "name":"Kenton County"
  },
  {
    "id":21067,
    "rate":923.2738303887625,
    "state":"KY",
    "name":"Fayette County"
  },
  {
    "id":45085,
    "rate":600.4764019988895,
    "state":"SC",
    "name":"Sumter County"
  },
  {
    "id":53067,
    "rate":331.70911396025707,
    "state":"WA",
    "name":"Thurston County"
  },
  {
    "id":36001,
    "rate":2858.1168309458935,
    "state":"NY",
    "name":"Albany County"
  },
  {
    "id":20177,
    "rate":3311.158498412555,
    "state":"KS",
    "name":"Shawnee County"
  },
  {
    "id":8037,
    "rate":1.0009431964736002,
    "state":"CO",
    "name":"Eagle County"
  },
  {
    "id":19155,
    "rate":1981.8719731376025,
    "state":"IA",
    "name":"Pottawattamie County"
  },
  {
    "id":48091,
    "rate":208.38796840925482,
    "state":"TX",
    "name":"Comal County"
  },
  {
    "id":19117,
    "rate":3140.118667275217,
    "state":"IA",
    "name":"Lucas County"
  },
  {
    "id":8013,
    "rate":10.102035137798175,
    "state":"CO",
    "name":"Boulder County"
  },
  {
    "id":17161,
    "rate":146.12586271376603,
    "state":"IL",
    "name":"Rock Island County"
  },
  {
    "id":48039,
    "rate":131.76204276602496,
    "state":"TX",
    "name":"Brazoria County"
  },
  {
    "id":18173,
    "rate":158.18759410314533,
    "state":"IN",
    "name":"Warrick County"
  },
  {
    "id":27027,
    "rate":1161.1392888578878,
    "state":"MN",
    "name":"Clay County"
  },
  {
    "id":5031,
    "rate":211.5143689378697,
    "state":"AR",
    "name":"Craighead County"
  },
  {
    "id":16001,
    "rate":127.59635208405173,
    "state":"ID",
    "name":"Ada County"
  },
  {
    "id":18105,
    "rate":272.51760575841007,
    "state":"IN",
    "name":"Monroe County"
  },
  {
    "id":48453,
    "rate":1443.439117895842,
    "state":"TX",
    "name":"Travis County"
  },
  {
    "id":17167,
    "rate":210.69250728994666,
    "state":"IL",
    "name":"Sangamon County"
  },
  {
    "id":34005,
    "rate":23.625519994149027,
    "state":"NJ",
    "name":"Burlington County"
  },
  {
    "id":36005,
    "rate":113.69962346868428,
    "state":"NY",
    "name":"Bronx County"
  },
  {
    "id":13121,
    "rate":2015.978465156705,
    "state":"GA",
    "name":"Fulton County"
  },
  {
    "id":8001,
    "rate":1482.01466179532,
    "state":"CO",
    "name":"Adams County"
  },
  {
    "id":18081,
    "rate":218.09120797982752,
    "state":"IN",
    "name":"Johnson County"
  },
  {
    "id":13247,
    "rate":42.05335885346156,
    "state":"GA",
    "name":"Rockdale County"
  },
  {
    "id":36081,
    "rate":53.53949485210066,
    "state":"NY",
    "name":"Queens County"
  },
  {
    "id":21111,
    "rate":1643.5692714357415,
    "state":"KY",
    "name":"Jefferson County"
  },
  {
    "id":18035,
    "rate":499.54675259357765,
    "state":"IN",
    "name":"Delaware County"
  },
  {
    "id":39067,
    "rate":7991.464253854979,
    "state":"OH",
    "name":"Harrison County"
  },
  {
    "id":1045,
    "rate":22.659511031604055,
    "state":"AL",
    "name":"Dale County"
  },
  {
    "id":45045,
    "rate":873.5122483171152,
    "state":"SC",
    "name":"Greenville County"
  },
  {
    "id":42091,
    "rate":354.4741964729044,
    "state":"PA",
    "name":"Montgomery County"
  },
  {
    "id":37023,
    "rate":503.3093588962154,
    "state":"NC",
    "name":"Burke County"
  },
  {
    "id":35001,
    "rate":479.6777093440519,
    "state":"NM",
    "name":"Bernalillo County"
  },
  {
    "id":39039,
    "rate":15.997733010459067,
    "state":"OH",
    "name":"Delaware County"
  },
  {
    "id":1061,
    "rate":33.70120731797645,
    "state":"AL",
    "name":"Geneva County"
  },
  {
    "id":13089,
    "rate":753.2291501953962,
    "state":"GA",
    "name":"Dekalb County"
  },
  {
    "id":1089,
    "rate":57.055893230047715,
    "state":"AL",
    "name":"Madison County"
  },
  {
    "id":9001,
    "rate":184.4712335211539,
    "state":"CT",
    "name":"Fairfield County"
  },
  {
    "id":20091,
    "rate":138.10387996156828,
    "state":"KS",
    "name":"Johnson County"
  },
  {
    "id":17097,
    "rate":83.73330216261138,
    "state":"IL",
    "name":"Lake County"
  },
  {
    "id":6081,
    "rate":248.15520467425722,
    "state":"CA",
    "name":"San Mateo County"
  },
  {
    "id":17089,
    "rate":96.01794026172624,
    "state":"IL",
    "name":"Kane County"
  },
  {
    "id":12005,
    "rate":407.8617858762515,
    "state":"FL",
    "name":"Bay County"
  },
  {
    "id":41067,
    "rate":3.1949640064483504,
    "state":"OR",
    "name":"Washington County"
  },
  {
    "id":26161,
    "rate":254.28028955226435,
    "state":"MI",
    "name":"Washtenaw County"
  },
  {
    "id":17043,
    "rate":29.097076056198237,
    "state":"IL",
    "name":"Dupage County"
  },
  {
    "id":19013,
    "rate":19.698316130061293,
    "state":"IA",
    "name":"Black Hawk County"
  },
  {
    "id":6083,
    "rate":3.0413625304136254,
    "state":"CA",
    "name":"Santa Barbara County"
  },
  {
    "id":42081,
    "rate":71.35494816532533,
    "state":"PA",
    "name":"Lycoming County"
  },
  {
    "id":17031,
    "rate":317.94688036327904,
    "state":"IL",
    "name":"Cook County"
  },
  {
    "id":16019,
    "rate":6396.405033682629,
    "state":"ID",
    "name":"Bonneville County"
  },
  {
    "id":30111,
    "rate":1324.177222690402,
    "state":"MT",
    "name":"Yellowstone County"
  },
  {
    "id":44009,
    "rate":39.47262113159125,
    "state":"RI",
    "name":"Washington County"
  },
  {
    "id":13275,
    "rate":235.66135189759711,
    "state":"GA",
    "name":"Thomas County"
  },
  {
    "id":31055,
    "rate":2709.7167373411694,
    "state":"NE",
    "name":"Douglas County"
  },
  {
    "id":39035,
    "rate":524.4346305244774,
    "state":"OH",
    "name":"Cuyahoga County"
  },
  {
    "id":13215,
    "rate":268.1499292645008,
    "state":"GA",
    "name":"Muscogee County"
  },
  {
    "id":39053,
    "rate":2398.863171563058,
    "state":"OH",
    "name":"Gallia County"
  },
  {
    "id":23019,
    "rate":170.42275343072157,
    "state":"ME",
    "name":"Penobscot County"
  },
  {
    "id":24045,
    "rate":73.34182657854926,
    "state":"MD",
    "name":"Wicomico County"
  },
  {
    "id":37151,
    "rate":384.18953669744116,
    "state":"NC",
    "name":"Randolph County"
  },
  {
    "id":13189,
    "rate":1.6681340067652102,
    "state":"GA",
    "name":"McDuffie County"
  },
  {
    "id":12021,
    "rate":116.26416080607318,
    "state":"FL",
    "name":"Collier County"
  },
  {
    "id":12083,
    "rate":197.78191004349839,
    "state":"FL",
    "name":"Marion County"
  },
  {
    "id":13135,
    "rate":173.67126029937364,
    "state":"GA",
    "name":"Gwinnett County"
  },
  {
    "id":13077,
    "rate":20.082672412475745,
    "state":"GA",
    "name":"Coweta County"
  },
  {
    "id":47179,
    "rate":531.5536001665372,
    "state":"TN",
    "name":"Washington County"
  },
  {
    "id":13067,
    "rate":319.9255263856638,
    "state":"GA",
    "name":"Cobb County"
  },
  {
    "id":42021,
    "rate":25.573195978266245,
    "state":"PA",
    "name":"Cambria County"
  },
  {
    "id":53061,
    "rate":146.65595640582748,
    "state":"WA",
    "name":"Snohomish County"
  },
  {
    "id":36055,
    "rate":105.21876026941604,
    "state":"NY",
    "name":"Monroe County"
  },
  {
    "id":30029,
    "rate":1326.506347336736,
    "state":"MT",
    "name":"Flathead County"
  },
  {
    "id":47093,
    "rate":88.81526332015524,
    "state":"TN",
    "name":"Knox County"
  },
  {
    "id":28113,
    "rate":22.138565480790806,
    "state":"MS",
    "name":"Pike County"
  },
  {
    "id":42015,
    "rate":351.58120134367084,
    "state":"PA",
    "name":"Bradford County"
  },
  {
    "id":12099,
    "rate":527.6184608862127,
    "state":"FL",
    "name":"Palm Beach County"
  },
  {
    "id":45059,
    "rate":22.638775695010416,
    "state":"SC",
    "name":"Laurens County"
  },
  {
    "id":36007,
    "rate":247.88342477475211,
    "state":"NY",
    "name":"Broome County"
  },
  {
    "id":34007,
    "rate":170.54267750787363,
    "state":"NJ",
    "name":"Camden County"
  },
  {
    "id":5145,
    "rate":17.608960992727457,
    "state":"AR",
    "name":"White County"
  },
  {
    "id":13057,
    "rate":33.78147152285505,
    "state":"GA",
    "name":"Cherokee County"
  },
  {
    "id":24031,
    "rate":1179.0291859197841,
    "state":"MD",
    "name":"Montgomery County"
  },
  {
    "id":12115,
    "rate":167.48685403445145,
    "state":"FL",
    "name":"Sarasota County"
  },
  {
    "id":12117,
    "rate":227.84647836719557,
    "state":"FL",
    "name":"Seminole County"
  },
  {
    "id":37011,
    "rate":122.37936112369731,
    "state":"NC",
    "name":"Avery County"
  },
  {
    "id":48167,
    "rate":192.1855978558326,
    "state":"TX",
    "name":"Galveston County"
  },
  {
    "id":12105,
    "rate":189.48493253908964,
    "state":"FL",
    "name":"Polk County"
  },
  {
    "id":37195,
    "rate":188.80674591527247,
    "state":"NC",
    "name":"Wilson County"
  },
  {
    "id":12069,
    "rate":108.32146976437635,
    "state":"FL",
    "name":"Lake County"
  },
  {
    "id":48259,
    "rate":416.83939707486223,
    "state":"TX",
    "name":"Kendall County"
  },
  {
    "id":26099,
    "rate":74.48402241226776,
    "state":"MI",
    "name":"Macomb County"
  },
  {
    "id":18141,
    "rate":40.88966916881431,
    "state":"IN",
    "name":"St. Joseph County"
  },
  {
    "id":12101,
    "rate":254.15058095553798,
    "state":"FL",
    "name":"Pasco County"
  },
  {
    "id":41039,
    "rate":117.71623867005566,
    "state":"OR",
    "name":"Lane County"
  },
  {
    "id":26047,
    "rate":308.07022343821245,
    "state":"MI",
    "name":"Emmet County"
  },
  {
    "id":12127,
    "rate":396.3092546248984,
    "state":"FL",
    "name":"Volusia County"
  },
  {
    "id":20173,
    "rate":135.92525916942722,
    "state":"KS",
    "name":"Sedgwick County"
  },
  {
    "id":6079,
    "rate":8.277880580487237,
    "state":"CA",
    "name":"San Luis Obispo County"
  },
  {
    "id":12109,
    "rate":130.7667207214334,
    "state":"FL",
    "name":"St. Johns County"
  },
  {
    "id":12071,
    "rate":6.068050878465955,
    "state":"FL",
    "name":"Lee County"
  },
  {
    "id":26049,
    "rate":201.46130441230642,
    "state":"MI",
    "name":"Genesee County"
  },
  {
    "id":22019,
    "rate":341.7240422700909,
    "state":"LA",
    "name":"Calcasieu Parish"
  },
  {
    "id":4013,
    "rate":307.1403962800683,
    "state":"AZ",
    "name":"Maricopa County"
  },
  {
    "id":39017,
    "rate":7.900186876572473,
    "state":"OH",
    "name":"Butler County"
  },
  {
    "id":12015,
    "rate":96.19557472111651,
    "state":"FL",
    "name":"Charlotte County"
  },
  {
    "id":6037,
    "rate":462.22531766836426,
    "state":"CA",
    "name":"Los Angeles County"
  },
  {
    "id":1073,
    "rate":783.3781440315643,
    "state":"AL",
    "name":"Jefferson County"
  },
  {
    "id":37183,
    "rate":176.75960071844648,
    "state":"NC",
    "name":"Wake County"
  },
  {
    "id":32031,
    "rate":81.77528514097408,
    "state":"NV",
    "name":"Washoe County"
  },
  {
    "id":8005,
    "rate":345.0450380923779,
    "state":"CO",
    "name":"Arapahoe County"
  },
  {
    "id":18059,
    "rate":139.71772766523688,
    "state":"IN",
    "name":"Hancock County"
  },
  {
    "id":18127,
    "rate":577.6121430166789,
    "state":"IN",
    "name":"Porter County"
  },
  {
    "id":37063,
    "rate":5321.366273715235,
    "state":"NC",
    "name":"Durham County"
  },
  {
    "id":25027,
    "rate":95.69012805579229,
    "state":"MA",
    "name":"Worcester County"
  },
  {
    "id":6085,
    "rate":348.9842908959764,
    "state":"CA",
    "name":"Santa Clara County"
  },
  {
    "id":23031,
    "rate":60.589334606013416,
    "state":"ME",
    "name":"York County"
  },
  {
    "id":48215,
    "rate":216.50556810795746,
    "state":"TX",
    "name":"Hidalgo County"
  },
  {
    "id":42079,
    "rate":27.803913146329013,
    "state":"PA",
    "name":"Luzerne County"
  },
  {
    "id":12033,
    "rate":6.3505953046210895,
    "state":"FL",
    "name":"Escambia County"
  },
  {
    "id":26125,
    "rate":203.89360912511634,
    "state":"MI",
    "name":"Oakland County"
  },
  {
    "id":9003,
    "rate":124.02433780625556,
    "state":"CT",
    "name":"Hartford County"
  },
  {
    "id":17019,
    "rate":162.90036223892085,
    "state":"IL",
    "name":"Champaign County"
  },
  {
    "id":8031,
    "rate":526.3864874074727,
    "state":"CO",
    "name":"Denver County"
  },
  {
    "id":9009,
    "rate":854.2569421698992,
    "state":"CT",
    "name":"New Haven County"
  },
  {
    "id":6099,
    "rate":55.02673643164398,
    "state":"CA",
    "name":"Stanislaus County"
  },
  {
    "id":18157,
    "rate":30.003367381299807,
    "state":"IN",
    "name":"Tippecanoe County"
  },
  {
    "id":6001,
    "rate":123.44013715028895,
    "state":"CA",
    "name":"Alameda County"
  },
  {
    "id":47113,
    "rate":59.63135838296922,
    "state":"TN",
    "name":"Madison County"
  },
  {
    "id":8041,
    "rate":31.36553697864722,
    "state":"CO",
    "name":"El Paso County"
  },
  {
    "id":39113,
    "rate":75.21097405279913,
    "state":"OH",
    "name":"Montgomery County"
  },
  {
    "id":36013,
    "rate":629.4665737535404,
    "state":"NY",
    "name":"Chautauqua County"
  },
  {
    "id":12087,
    "rate":46.91229614220373,
    "state":"FL",
    "name":"Monroe County"
  },
  {
    "id":12001,
    "rate":153.30110085692834,
    "state":"FL",
    "name":"Alachua County"
  },
  {
    "id":6041,
    "rate":1174.1480344963572,
    "state":"CA",
    "name":"Marin County"
  },
  {
    "id":12081,
    "rate":846.2765699506989,
    "state":"FL",
    "name":"Manatee County"
  },
  {
    "id":9013,
    "rate":362.5825242718446,
    "state":"CT",
    "name":"Tolland County"
  },
  {
    "id":30063,
    "rate":122.82313108937994,
    "state":"MT",
    "name":"Missoula County"
  },
  {
    "id":42007,
    "rate":458.5949102359244,
    "state":"PA",
    "name":"Beaver County"
  },
  {
    "id":25025,
    "rate":11555.56110441038,
    "state":"MA",
    "name":"Suffolk County"
  },
  {
    "id":55079,
    "rate":300.0713761143021,
    "state":"WI",
    "name":"Milwaukee County"
  },
  {
    "id":48375,
    "rate":900.3051631718721,
    "state":"TX",
    "name":"Potter County"
  },
  {
    "id":37119,
    "rate":343.990363127194,
    "state":"NC",
    "name":"Mecklenburg County"
  },
  {
    "id":6013,
    "rate":936.820257968162,
    "state":"CA",
    "name":"Contra Costa County"
  },
  {
    "id":51710,
    "rate":715.4888888888889,
    "state":"VA",
    "name":"Norfolk City"
  },
  {
    "id":6075,
    "rate":28.731937552655147,
    "state":"CA",
    "name":"San Francisco County"
  },
  {
    "id":6071,
    "rate":115.95380003662316,
    "state":"CA",
    "name":"San Bernardino County"
  },
  {
    "id":36119,
    "rate":6.724392290265936,
    "state":"NY",
    "name":"Westchester County"
  },
  {
    "id":42133,
    "rate":6.451077110068792,
    "state":"PA",
    "name":"York County"
  },
  {
    "id":16011,
    "rate":656.8083001780493,
    "state":"ID",
    "name":"Bingham County"
  },
  {
    "id":1081,
    "rate":37.850175628208596,
    "state":"AL",
    "name":"Lee County"
  },
  {
    "id":13111,
    "rate":227.76920782375254,
    "state":"GA",
    "name":"Fannin County"
  },
  {
    "id":6111,
    "rate":162.7961784659284,
    "state":"CA",
    "name":"Ventura County"
  },
  {
    "id":21145,
    "rate":845.288750095209,
    "state":"KY",
    "name":"McCracken County"
  },
  {
    "id":6067,
    "rate":28.706814258430086,
    "state":"CA",
    "name":"Sacramento County"
  },
  {
    "id":6059,
    "rate":335.1043353281163,
    "state":"CA",
    "name":"Orange County"
  },
  {
    "id":37083,
    "rate":260.1630102182742,
    "state":"NC",
    "name":"Halifax County"
  },
  {
    "id":33017,
    "rate":145.67217748087006,
    "state":"NH",
    "name":"Strafford County"
  },
  {
    "id":22017,
    "rate":116.27522072996335,
    "state":"LA",
    "name":"Caddo Parish"
  },
  {
    "id":16055,
    "rate":90.65004884150754,
    "state":"ID",
    "name":"Kootenai County"
  },
  {
    "id":5051,
    "rate":14.302177886551627,
    "state":"AR",
    "name":"Garland County"
  },
  {
    "id":13087,
    "rate":309.76040490842223,
    "state":"GA",
    "name":"Decatur County"
  },
  {
    "id":5111,
    "rate":457.79157245632064,
    "state":"AR",
    "name":"Poinsett County"
  },
  {
    "id":37109,
    "rate":75.13491952945944,
    "state":"NC",
    "name":"Lincoln County"
  },
  {
    "id":1101,
    "rate":67.71351111033623,
    "state":"AL",
    "name":"Montgomery County"
  },
  {
    "id":18003,
    "rate":6.235588861298333,
    "state":"IN",
    "name":"Allen County"
  },
  {
    "id":38017,
    "rate":558.1169224491357,
    "state":"ND",
    "name":"Cass County"
  },
  {
    "id":12053,
    "rate":132.46207438388927,
    "state":"FL",
    "name":"Hernando County"
  },
  {
    "id":51510,
    "rate":6.063947078280044,
    "state":"VA",
    "name":"Alexandria city"
  },
  {
    "id":23005,
    "rate":166.4886815701461,
    "state":"ME",
    "name":"Cumberland County"
  },
  {
    "id":6053,
    "rate":147.31348393920422,
    "state":"CA",
    "name":"Monterey County"
  },
  {
    "id":5007,
    "rate":0.02921727772311473,
    "state":"AR",
    "name":"Benton County"
  },
  {
    "id":13053,
    "rate":17.899761336515514,
    "state":"GA",
    "name":"Chattahoochee County"
  }
]
    return grants;
  });
