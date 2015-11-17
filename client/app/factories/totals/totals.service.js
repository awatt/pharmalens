'use strict';

angular.module('foglightApp')
  .factory('totals', function () {

    var totals = [
  {
    "id":56043,
    "rate":43.15128539272598,
    "state":"WY",
    "name":"Washakie County"
  },
  {
    "id":56039,
    "rate":20.659786214522665,
    "state":"WY",
    "name":"Teton County"
  },
  {
    "id":56033,
    "rate":39.133049530373675,
    "state":"WY",
    "name":"Sheridan County"
  },
  {
    "id":56031,
    "rate":43.70578133943904,
    "state":"WY",
    "name":"Platte County"
  },
  {
    "id":56019,
    "rate":26.14571229374855,
    "state":"WY",
    "name":"Johnson County"
  },
  {
    "id":56015,
    "rate":2.90929041697147,
    "state":"WY",
    "name":"Goshen County"
  },
  {
    "id":56007,
    "rate":5.195484405893233,
    "state":"WY",
    "name":"Carbon County"
  },
  {
    "id":56003,
    "rate":8.211071489217185,
    "state":"WY",
    "name":"Big Horn County"
  },
  {
    "id":55139,
    "rate":173.41075939608862,
    "state":"WI",
    "name":"Winnebago County"
  },
  {
    "id":55131,
    "rate":5.75550041106946,
    "state":"WI",
    "name":"Washington County"
  },
  {
    "id":55123,
    "rate":8.172698076350033,
    "state":"WI",
    "name":"Vernon County"
  },
  {
    "id":55117,
    "rate":12.624834713619602,
    "state":"WI",
    "name":"Sheboygan County"
  },
  {
    "id":55105,
    "rate":1177.4558092231287,
    "state":"WI",
    "name":"Rock County"
  },
  {
    "id":55103,
    "rate":3.104106972301815,
    "state":"WI",
    "name":"Richland County"
  },
  {
    "id":55101,
    "rate":1102.9657443125466,
    "state":"WI",
    "name":"Racine County"
  },
  {
    "id":55097,
    "rate":9.602020402661712,
    "state":"WI",
    "name":"Portage County"
  },
  {
    "id":55095,
    "rate":1.8793796668581277,
    "state":"WI",
    "name":"Polk County"
  },
  {
    "id":55091,
    "rate":134.50385812914584,
    "state":"WI",
    "name":"Pepin County"
  },
  {
    "id":55087,
    "rate":8.826567976877966,
    "state":"WI",
    "name":"Outagamie County"
  },
  {
    "id":55085,
    "rate":17.742684496167403,
    "state":"WI",
    "name":"Oneida County"
  },
  {
    "id":55073,
    "rate":237.70879581851526,
    "state":"WI",
    "name":"Marathon County"
  },
  {
    "id":55071,
    "rate":5.4108097406454165,
    "state":"WI",
    "name":"Manitowoc County"
  },
  {
    "id":55063,
    "rate":1516.1381825029316,
    "state":"WI",
    "name":"La Crosse County"
  },
  {
    "id":55047,
    "rate":4.561467889908257,
    "state":"WI",
    "name":"Green Lake County"
  },
  {
    "id":55043,
    "rate":59.657586632935214,
    "state":"WI",
    "name":"Grant County"
  },
  {
    "id":55039,
    "rate":14.75054571198207,
    "state":"WI",
    "name":"Fond Du Lac County"
  },
  {
    "id":55037,
    "rate":4.975402504472272,
    "state":"WI",
    "name":"Florence County"
  },
  {
    "id":55035,
    "rate":365.1848472828243,
    "state":"WI",
    "name":"Eau Claire County"
  },
  {
    "id":55031,
    "rate":2.4815136023370457,
    "state":"WI",
    "name":"Douglas County"
  },
  {
    "id":55029,
    "rate":5.057380007217612,
    "state":"WI",
    "name":"Door County"
  },
  {
    "id":55025,
    "rate":318.7192152483742,
    "state":"WI",
    "name":"Dane County"
  },
  {
    "id":55021,
    "rate":42.238890561626626,
    "state":"WI",
    "name":"Columbia County"
  },
  {
    "id":55017,
    "rate":2.5158998271240742,
    "state":"WI",
    "name":"Chippewa County"
  },
  {
    "id":55015,
    "rate":0.5291324641879929,
    "state":"WI",
    "name":"Calumet County"
  },
  {
    "id":55005,
    "rate":1331.4974768988789,
    "state":"WI",
    "name":"Barron County"
  },
  {
    "id":55003,
    "rate":1.388696800150877,
    "state":"WI",
    "name":"Ashland County"
  },
  {
    "id":54105,
    "rate":3.759903548053737,
    "state":"WV",
    "name":"Wirt County"
  },
  {
    "id":54095,
    "rate":112.7853426325695,
    "state":"WV",
    "name":"Tyler County"
  },
  {
    "id":54091,
    "rate":93.6216439001413,
    "state":"WV",
    "name":"Taylor County"
  },
  {
    "id":54089,
    "rate":80.25288859821232,
    "state":"WV",
    "name":"Summers County"
  },
  {
    "id":54077,
    "rate":29.08257151282808,
    "state":"WV",
    "name":"Preston County"
  },
  {
    "id":54075,
    "rate":7.5370817523283895,
    "state":"WV",
    "name":"Pocahontas County"
  },
  {
    "id":54067,
    "rate":222.67674843821425,
    "state":"WV",
    "name":"Nicholas County"
  },
  {
    "id":54061,
    "rate":454.6176801185701,
    "state":"WV",
    "name":"Monongalia County"
  },
  {
    "id":54057,
    "rate":26.9924462105753,
    "state":"WV",
    "name":"Mineral County"
  },
  {
    "id":54053,
    "rate":139.2836676217765,
    "state":"WV",
    "name":"Mason County"
  },
  {
    "id":54041,
    "rate":137.46255935711676,
    "state":"WV",
    "name":"Lewis County"
  },
  {
    "id":54039,
    "rate":552.9539114867405,
    "state":"WV",
    "name":"Kanawha County"
  },
  {
    "id":54035,
    "rate":42.28107923497269,
    "state":"WV",
    "name":"Jackson County"
  },
  {
    "id":54029,
    "rate":2885.7418886837236,
    "state":"WV",
    "name":"Hancock County"
  },
  {
    "id":54023,
    "rate":152.6053542775104,
    "state":"WV",
    "name":"Grant County"
  },
  {
    "id":54019,
    "rate":94.04810667131467,
    "state":"WV",
    "name":"Fayette County"
  },
  {
    "id":55055,
    "rate":8.223746564306701,
    "state":"WI",
    "name":"Jefferson County"
  },
  {
    "id":54013,
    "rate":2.991700698195231,
    "state":"WV",
    "name":"Calhoun County"
  },
  {
    "id":54009,
    "rate":49.77554537430122,
    "state":"WV",
    "name":"Brooke County"
  },
  {
    "id":54003,
    "rate":603.1650819151521,
    "state":"WV",
    "name":"Berkeley County"
  },
  {
    "id":54001,
    "rate":99.5011862396204,
    "state":"WV",
    "name":"Barbour County"
  },
  {
    "id":53077,
    "rate":84.4878222769848,
    "state":"WA",
    "name":"Yakima County"
  },
  {
    "id":53075,
    "rate":33.90470057952351,
    "state":"WA",
    "name":"Whitman County"
  },
  {
    "id":53071,
    "rate":23.277271351205894,
    "state":"WA",
    "name":"Walla Walla County"
  },
  {
    "id":53065,
    "rate":33.908736528319196,
    "state":"WA",
    "name":"Stevens County"
  },
  {
    "id":53051,
    "rate":111.91490998615171,
    "state":"WA",
    "name":"Pend Oreille County"
  },
  {
    "id":53043,
    "rate":196.10520264443812,
    "state":"WA",
    "name":"Lincoln County"
  },
  {
    "id":53031,
    "rate":1.6996948663782985,
    "state":"WA",
    "name":"Jefferson County"
  },
  {
    "id":53029,
    "rate":43.913921494383445,
    "state":"WA",
    "name":"Island County"
  },
  {
    "id":53027,
    "rate":62.214071543128085,
    "state":"WA",
    "name":"Grays Harbor County"
  },
  {
    "id":53025,
    "rate":33.747164296309215,
    "state":"WA",
    "name":"Grant County"
  },
  {
    "id":53021,
    "rate":52.540923442579,
    "state":"WA",
    "name":"Franklin County"
  },
  {
    "id":53011,
    "rate":235.75255139941254,
    "state":"WA",
    "name":"Clark County"
  },
  {
    "id":53007,
    "rate":26.98452558707751,
    "state":"WA",
    "name":"Chelan County"
  },
  {
    "id":53005,
    "rate":853.0371828329572,
    "state":"WA",
    "name":"Benton County"
  },
  {
    "id":51840,
    "rate":3927.796747369198,
    "state":"VA",
    "name":"Winchester City"
  },
  {
    "id":51820,
    "rate":1.7090736792229329,
    "state":"VA",
    "name":"Waynesboro City"
  },
  {
    "id":55121,
    "rate":6.731469817166594,
    "state":"WI",
    "name":"Trempealeau County"
  },
  {
    "id":51760,
    "rate":664.4859733555213,
    "state":"VA",
    "name":"Richmond City"
  },
  {
    "id":51740,
    "rate":85.60862179686359,
    "state":"VA",
    "name":"Portsmouth City"
  },
  {
    "id":51720,
    "rate":827.9599901210175,
    "state":"VA",
    "name":"Norton City"
  },
  {
    "id":51710,
    "rate":1059.6861669713594,
    "state":"VA",
    "name":"Norfolk City"
  },
  {
    "id":51700,
    "rate":132.23655997384859,
    "state":"VA",
    "name":"Newport News City"
  },
  {
    "id":51685,
    "rate":1.2931892035280854,
    "state":"VA",
    "name":"Manassas Park City"
  },
  {
    "id":51680,
    "rate":301.5822491901065,
    "state":"VA",
    "name":"Lynchburg City"
  },
  {
    "id":53039,
    "rate":9.571629554164849,
    "state":"WA",
    "name":"Klickitat County"
  },
  {
    "id":51660,
    "rate":130.67253631110415,
    "state":"VA",
    "name":"Harrisonburg City"
  },
  {
    "id":51650,
    "rate":61.76216540122621,
    "state":"VA",
    "name":"Hampton City"
  },
  {
    "id":51640,
    "rate":55.18422193324665,
    "state":"VA",
    "name":"Galax City"
  },
  {
    "id":51600,
    "rate":6.9042240313712115,
    "state":"VA",
    "name":"Fairfax City"
  },
  {
    "id":51595,
    "rate":97.37201963534362,
    "state":"VA",
    "name":"Emporia City"
  },
  {
    "id":56001,
    "rate":7.982228407783102,
    "state":"WY",
    "name":"Albany County"
  },
  {
    "id":51590,
    "rate":625.580563735801,
    "state":"VA",
    "name":"Danville City"
  },
  {
    "id":51570,
    "rate":560.5705311250713,
    "state":"VA",
    "name":"Colonial Heights City"
  },
  {
    "id":51550,
    "rate":1321.2862639577897,
    "state":"VA",
    "name":"Chesapeake City"
  },
  {
    "id":51197,
    "rate":100.85618888623897,
    "state":"VA",
    "name":"Wythe County"
  },
  {
    "id":51195,
    "rate":71.93127265602035,
    "state":"VA",
    "name":"Wise County"
  },
  {
    "id":51175,
    "rate":32.97279687245481,
    "state":"VA",
    "name":"Southampton County"
  },
  {
    "id":51173,
    "rate":116.7903210620469,
    "state":"VA",
    "name":"Smyth County"
  },
  {
    "id":51167,
    "rate":16.668894673890094,
    "state":"VA",
    "name":"Russell County"
  },
  {
    "id":51161,
    "rate":41.66148918102568,
    "state":"VA",
    "name":"Roanoke County"
  },
  {
    "id":51159,
    "rate":19.529385771100312,
    "state":"VA",
    "name":"Richmond County"
  },
  {
    "id":51157,
    "rate":54.094212651413194,
    "state":"VA",
    "name":"Rappahannock County"
  },
  {
    "id":55045,
    "rate":34.16447493289228,
    "state":"WI",
    "name":"Green County"
  },
  {
    "id":51153,
    "rate":31.350080932040264,
    "state":"VA",
    "name":"Prince William County"
  },
  {
    "id":51149,
    "rate":50.233286532022895,
    "state":"VA",
    "name":"Prince George County"
  },
  {
    "id":54087,
    "rate":80.68388851121688,
    "state":"WV",
    "name":"Roane County"
  },
  {
    "id":51147,
    "rate":87.09189608375343,
    "state":"VA",
    "name":"Prince Edward County"
  },
  {
    "id":51145,
    "rate":94.30608905961017,
    "state":"VA",
    "name":"Powhatan County"
  },
  {
    "id":51143,
    "rate":13.89932907246653,
    "state":"VA",
    "name":"Pittsylvania County"
  },
  {
    "id":54043,
    "rate":10.736666974766614,
    "state":"WV",
    "name":"Lincoln County"
  },
  {
    "id":51139,
    "rate":85.1570878016086,
    "state":"VA",
    "name":"Page County"
  },
  {
    "id":51137,
    "rate":48.2101383566853,
    "state":"VA",
    "name":"Orange County"
  },
  {
    "id":51135,
    "rate":96.10737829614602,
    "state":"VA",
    "name":"Nottoway County"
  },
  {
    "id":51131,
    "rate":112.5128708016671,
    "state":"VA",
    "name":"Northampton County"
  },
  {
    "id":51127,
    "rate":67.54495086765627,
    "state":"VA",
    "name":"New Kent County"
  },
  {
    "id":51119,
    "rate":24.945044795418863,
    "state":"VA",
    "name":"Middlesex County"
  },
  {
    "id":51111,
    "rate":6.599730137312485,
    "state":"VA",
    "name":"Lunenburg County"
  },
  {
    "id":51087,
    "rate":426.43072494459994,
    "state":"VA",
    "name":"Henrico County"
  },
  {
    "id":51085,
    "rate":171.159092719452,
    "state":"VA",
    "name":"Hanover County"
  },
  {
    "id":51083,
    "rate":57.11997540112933,
    "state":"VA",
    "name":"Halifax County"
  },
  {
    "id":51079,
    "rate":4.830116446004148,
    "state":"VA",
    "name":"Greene County"
  },
  {
    "id":51073,
    "rate":62.178674039139146,
    "state":"VA",
    "name":"Gloucester County"
  },
  {
    "id":51071,
    "rate":31.039603960396036,
    "state":"VA",
    "name":"Giles County"
  },
  {
    "id":51069,
    "rate":2.535647010391587,
    "state":"VA",
    "name":"Frederick County"
  },
  {
    "id":51065,
    "rate":22.90174613575916,
    "state":"VA",
    "name":"Fluvanna County"
  },
  {
    "id":51061,
    "rate":132.19990090536464,
    "state":"VA",
    "name":"Fauquier County"
  },
  {
    "id":51057,
    "rate":115.62192173367963,
    "state":"VA",
    "name":"Essex County"
  },
  {
    "id":51053,
    "rate":43.913879003558726,
    "state":"VA",
    "name":"Dinwiddie County"
  },
  {
    "id":51045,
    "rate":21.223547518276256,
    "state":"VA",
    "name":"Craig County"
  },
  {
    "id":51041,
    "rate":1011.0995213833546,
    "state":"VA",
    "name":"Chesterfield County"
  },
  {
    "id":51036,
    "rate":21.572467823167322,
    "state":"VA",
    "name":"Charles City County"
  },
  {
    "id":51025,
    "rate":14.111820899021275,
    "state":"VA",
    "name":"Brunswick County"
  },
  {
    "id":51023,
    "rate":13.203546762372955,
    "state":"VA",
    "name":"Botetourt County"
  },
  {
    "id":51019,
    "rate":101.4556349511474,
    "state":"VA",
    "name":"Bedford County"
  },
  {
    "id":51017,
    "rate":11.43501611170784,
    "state":"VA",
    "name":"Bath County"
  },
  {
    "id":51015,
    "rate":35.28755621374128,
    "state":"VA",
    "name":"Augusta County"
  },
  {
    "id":51011,
    "rate":72.40161119915479,
    "state":"VA",
    "name":"Appomattox County"
  },
  {
    "id":51005,
    "rate":24.524501019588456,
    "state":"VA",
    "name":"Alleghany County"
  },
  {
    "id":51003,
    "rate":753.7458590610605,
    "state":"VA",
    "name":"Albemarle County"
  },
  {
    "id":50025,
    "rate":0.6279973634565994,
    "state":"VT",
    "name":"Windham County"
  },
  {
    "id":50023,
    "rate":5.662415123586796,
    "state":"VT",
    "name":"Washington County"
  },
  {
    "id":50021,
    "rate":19.2747433264887,
    "state":"VT",
    "name":"Rutland County"
  },
  {
    "id":50011,
    "rate":3.6721032889146787,
    "state":"VT",
    "name":"Franklin County"
  },
  {
    "id":50007,
    "rate":1443.0625122131105,
    "state":"VT",
    "name":"Chittenden County"
  },
  {
    "id":50003,
    "rate":3465.7896315689004,
    "state":"VT",
    "name":"Bennington County"
  },
  {
    "id":50001,
    "rate":2.1554415397562234,
    "state":"VT",
    "name":"Addison County"
  },
  {
    "id":49057,
    "rate":2373.24469434345,
    "state":"UT",
    "name":"Weber County"
  },
  {
    "id":49051,
    "rate":23.663592653897698,
    "state":"UT",
    "name":"Wasatch County"
  },
  {
    "id":49049,
    "rate":280.60552036501,
    "state":"UT",
    "name":"Utah County"
  },
  {
    "id":54015,
    "rate":12.186790617230569,
    "state":"WV",
    "name":"Clay County"
  },
  {
    "id":49047,
    "rate":13.604631019748242,
    "state":"UT",
    "name":"Uintah County"
  },
  {
    "id":49045,
    "rate":26.351387495820795,
    "state":"UT",
    "name":"Tooele County"
  },
  {
    "id":49043,
    "rate":9.562452167946585,
    "state":"UT",
    "name":"Summit County"
  },
  {
    "id":49041,
    "rate":30.975162768266223,
    "state":"UT",
    "name":"Sevier County"
  },
  {
    "id":54073,
    "rate":49.40200210748157,
    "state":"WV",
    "name":"Pleasants County"
  },
  {
    "id":51670,
    "rate":1436.7915061374433,
    "state":"VA",
    "name":"Hopewell City"
  },
  {
    "id":49035,
    "rate":1081.9646712426343,
    "state":"UT",
    "name":"Salt Lake County"
  },
  {
    "id":49021,
    "rate":12.150866680933017,
    "state":"UT",
    "name":"Iron County"
  },
  {
    "id":49019,
    "rate":23.923562787710093,
    "state":"UT",
    "name":"Grand County"
  },
  {
    "id":49013,
    "rate":19.926026966056344,
    "state":"UT",
    "name":"Duchesne County"
  },
  {
    "id":49007,
    "rate":49.49468335372165,
    "state":"UT",
    "name":"Carbon County"
  },
  {
    "id":48495,
    "rate":2.5503812636165577,
    "state":"TX",
    "name":"Winkler County"
  },
  {
    "id":48487,
    "rate":10.962147489066504,
    "state":"TX",
    "name":"Wilbarger County"
  },
  {
    "id":48485,
    "rate":180.50105541297768,
    "state":"TX",
    "name":"Wichita County"
  },
  {
    "id":53003,
    "rate":391.5978603758058,
    "state":"WA",
    "name":"Asotin County"
  },
  {
    "id":48479,
    "rate":72.81253605963386,
    "state":"TX",
    "name":"Webb County"
  },
  {
    "id":48475,
    "rate":11.23115115851416,
    "state":"TX",
    "name":"Ward County"
  },
  {
    "id":48473,
    "rate":7.654048204180099,
    "state":"TX",
    "name":"Waller County"
  },
  {
    "id":53055,
    "rate":17.09726443768997,
    "state":"WA",
    "name":"San Juan County"
  },
  {
    "id":48469,
    "rate":245.42038173753267,
    "state":"TX",
    "name":"Victoria County"
  },
  {
    "id":48467,
    "rate":11.876802597650652,
    "state":"TX",
    "name":"Van Zandt County"
  },
  {
    "id":48463,
    "rate":34.893124065769804,
    "state":"TX",
    "name":"Uvalde County"
  },
  {
    "id":48455,
    "rate":1.5426573426573424,
    "state":"TX",
    "name":"Trinity County"
  },
  {
    "id":48451,
    "rate":111.29456223958563,
    "state":"TX",
    "name":"Tom Green County"
  },
  {
    "id":48445,
    "rate":116.21966693100715,
    "state":"TX",
    "name":"Terry County"
  },
  {
    "id":48441,
    "rate":289.57219769730943,
    "state":"TX",
    "name":"Taylor County"
  },
  {
    "id":48427,
    "rate":21.53524559732692,
    "state":"TX",
    "name":"Starr County"
  },
  {
    "id":48425,
    "rate":88.45240865720268,
    "state":"TX",
    "name":"Somervell County"
  },
  {
    "id":48423,
    "rate":204.56213565583127,
    "state":"TX",
    "name":"Smith County"
  },
  {
    "id":51027,
    "rate":45.13697193438771,
    "state":"VA",
    "name":"Buchanan County"
  },
  {
    "id":48415,
    "rate":5.610312171168011,
    "state":"TX",
    "name":"Scurry County"
  },
  {
    "id":48411,
    "rate":3.674014696058784,
    "state":"TX",
    "name":"San Saba County"
  },
  {
    "id":48407,
    "rate":4.4585185185185185,
    "state":"TX",
    "name":"San Jacinto County"
  },
  {
    "id":48405,
    "rate":19.461294703485745,
    "state":"TX",
    "name":"San Augustine County"
  },
  {
    "id":48399,
    "rate":40.90865476875839,
    "state":"TX",
    "name":"Runnels County"
  },
  {
    "id":48391,
    "rate":1.5971262779773419,
    "state":"TX",
    "name":"Refugio County"
  },
  {
    "id":48389,
    "rate":28.478260869565215,
    "state":"TX",
    "name":"Reeves County"
  },
  {
    "id":48387,
    "rate":24.943360604153554,
    "state":"TX",
    "name":"Red River County"
  },
  {
    "id":48381,
    "rate":29.12311744877779,
    "state":"TX",
    "name":"Randall County"
  },
  {
    "id":48377,
    "rate":4.038461538461539,
    "state":"TX",
    "name":"Presidio County"
  },
  {
    "id":48375,
    "rate":2169.776870814803,
    "state":"TX",
    "name":"Potter County"
  },
  {
    "id":48373,
    "rate":54.30429555142638,
    "state":"TX",
    "name":"Polk County"
  },
  {
    "id":53053,
    "rate":604.9075721075433,
    "state":"WA",
    "name":"Pierce County"
  },
  {
    "id":51063,
    "rate":39.483988072086085,
    "state":"VA",
    "name":"Floyd County"
  },
  {
    "id":48371,
    "rate":14.347379898659485,
    "state":"TX",
    "name":"Pecos County"
  },
  {
    "id":48365,
    "rate":21.496374697891493,
    "state":"TX",
    "name":"Panola County"
  },
  {
    "id":48363,
    "rate":10.864325933364418,
    "state":"TX",
    "name":"Palo Pinto County"
  },
  {
    "id":48353,
    "rate":45.20400618404247,
    "state":"TX",
    "name":"Nolan County"
  },
  {
    "id":48349,
    "rate":30.23913901643431,
    "state":"TX",
    "name":"Navarro County"
  },
  {
    "id":48347,
    "rate":131.97718746677606,
    "state":"TX",
    "name":"Nacogdoches County"
  },
  {
    "id":48341,
    "rate":27.88517344524309,
    "state":"TX",
    "name":"Moore County"
  },
  {
    "id":48337,
    "rate":33.778995340263194,
    "state":"TX",
    "name":"Montague County"
  },
  {
    "id":48335,
    "rate":18.942225085910653,
    "state":"TX",
    "name":"Mitchell County"
  },
  {
    "id":48333,
    "rate":2.384599461809149,
    "state":"TX",
    "name":"Mills County"
  },
  {
    "id":48331,
    "rate":29.44166010852006,
    "state":"TX",
    "name":"Milam County"
  },
  {
    "id":48329,
    "rate":531.2840437827183,
    "state":"TX",
    "name":"Midland County"
  },
  {
    "id":48325,
    "rate":64.56547250730792,
    "state":"TX",
    "name":"Medina County"
  },
  {
    "id":48323,
    "rate":41.411971452139305,
    "state":"TX",
    "name":"Maverick County"
  },
  {
    "id":48321,
    "rate":67.84718044084664,
    "state":"TX",
    "name":"Matagorda County"
  },
  {
    "id":55135,
    "rate":15.168370877219962,
    "state":"WI",
    "name":"Waupaca County"
  },
  {
    "id":48317,
    "rate":101.45741703318672,
    "state":"TX",
    "name":"Martin County"
  },
  {
    "id":48305,
    "rate":18.781374415786736,
    "state":"TX",
    "name":"Lynn County"
  },
  {
    "id":48471,
    "rate":76.39201235143324,
    "state":"TX",
    "name":"Walker County"
  },
  {
    "id":48303,
    "rate":728.3590822660933,
    "state":"TX",
    "name":"Lubbock County"
  },
  {
    "id":48299,
    "rate":17.237069190941895,
    "state":"TX",
    "name":"Llano County"
  },
  {
    "id":48293,
    "rate":78.65534144692359,
    "state":"TX",
    "name":"Limestone County"
  },
  {
    "id":48291,
    "rate":56.79039615218727,
    "state":"TX",
    "name":"Liberty County"
  },
  {
    "id":48287,
    "rate":135.03565385545087,
    "state":"TX",
    "name":"Lee County"
  },
  {
    "id":48505,
    "rate":10.15106801573918,
    "state":"TX",
    "name":"Zapata County"
  },
  {
    "id":48285,
    "rate":39.25726034438448,
    "state":"TX",
    "name":"Lavaca County"
  },
  {
    "id":48279,
    "rate":49.353958796927714,
    "state":"TX",
    "name":"Lamb County"
  },
  {
    "id":54011,
    "rate":651.943054624229,
    "state":"WV",
    "name":"Cabell County"
  },
  {
    "id":48275,
    "rate":11.305732484076435,
    "state":"TX",
    "name":"Knox County"
  },
  {
    "id":48257,
    "rate":39.22075365579303,
    "state":"TX",
    "name":"Kaufman County"
  },
  {
    "id":48255,
    "rate":11.793770139634804,
    "state":"TX",
    "name":"Karnes County"
  },
  {
    "id":48245,
    "rate":1775.6624795150453,
    "state":"TX",
    "name":"Jefferson County"
  },
  {
    "id":48241,
    "rate":1.3682507809013833,
    "state":"TX",
    "name":"Jasper County"
  },
  {
    "id":48233,
    "rate":31.076635684344822,
    "state":"TX",
    "name":"Hutchinson County"
  },
  {
    "id":48227,
    "rate":31.499324628545697,
    "state":"TX",
    "name":"Howard County"
  },
  {
    "id":53041,
    "rate":50.2911348832283,
    "state":"WA",
    "name":"Lewis County"
  },
  {
    "id":48219,
    "rate":46.77579794135456,
    "state":"TX",
    "name":"Hockley County"
  },
  {
    "id":48215,
    "rate":463.29711225974177,
    "state":"TX",
    "name":"Hidalgo County"
  },
  {
    "id":51540,
    "rate":6017.169201051189,
    "state":"VA",
    "name":"Charlottesville City"
  },
  {
    "id":48209,
    "rate":68.6614550946078,
    "state":"TX",
    "name":"Hays County"
  },
  {
    "id":48195,
    "rate":54.28571428571429,
    "state":"TX",
    "name":"Hansford County"
  },
  {
    "id":48193,
    "rate":12.62605548854041,
    "state":"TX",
    "name":"Hamilton County"
  },
  {
    "id":48187,
    "rate":682.2768655968622,
    "state":"TX",
    "name":"Guadalupe County"
  },
  {
    "id":48181,
    "rate":80.1562923925644,
    "state":"TX",
    "name":"Grayson County"
  },
  {
    "id":48163,
    "rate":76.81922710191259,
    "state":"TX",
    "name":"Frio County"
  },
  {
    "id":48159,
    "rate":34.172621286197824,
    "state":"TX",
    "name":"Franklin County"
  },
  {
    "id":48151,
    "rate":3.4516044873467258,
    "state":"TX",
    "name":"Fisher County"
  },
  {
    "id":48149,
    "rate":92.10436893203881,
    "state":"TX",
    "name":"Fayette County"
  },
  {
    "id":48145,
    "rate":2.03125,
    "state":"TX",
    "name":"Falls County"
  },
  {
    "id":48141,
    "rate":377.50701442830626,
    "state":"TX",
    "name":"El Paso County"
  },
  {
    "id":48139,
    "rate":48.58567472338876,
    "state":"TX",
    "name":"Ellis County"
  },
  {
    "id":48135,
    "rate":442.67612361884187,
    "state":"TX",
    "name":"Ector County"
  },
  {
    "id":48133,
    "rate":58.45949030049451,
    "state":"TX",
    "name":"Eastland County"
  },
  {
    "id":48131,
    "rate":8.276160027650565,
    "state":"TX",
    "name":"Duval County"
  },
  {
    "id":48127,
    "rate":28.235965746907713,
    "state":"TX",
    "name":"Dimmit County"
  },
  {
    "id":48121,
    "rate":146.18174421791002,
    "state":"TX",
    "name":"Denton County"
  },
  {
    "id":48105,
    "rate":16.72497308934338,
    "state":"TX",
    "name":"Crockett County"
  },
  {
    "id":48097,
    "rate":85.51648465133091,
    "state":"TX",
    "name":"Cooke County"
  },
  {
    "id":48073,
    "rate":46.763567406944006,
    "state":"TX",
    "name":"Cherokee County"
  },
  {
    "id":48071,
    "rate":2.8960096735187424,
    "state":"TX",
    "name":"Chambers County"
  },
  {
    "id":51001,
    "rate":9.822291597874703,
    "state":"VA",
    "name":"Accomack County"
  },
  {
    "id":48069,
    "rate":19.09402127399438,
    "state":"TX",
    "name":"Castro County"
  },
  {
    "id":53009,
    "rate":11.750083509631443,
    "state":"WA",
    "name":"Clallam County"
  },
  {
    "id":48067,
    "rate":11.519528273760226,
    "state":"TX",
    "name":"Cass County"
  },
  {
    "id":48065,
    "rate":5.033557046979865,
    "state":"TX",
    "name":"Carson County"
  },
  {
    "id":48499,
    "rate":3.3679012345679014,
    "state":"TX",
    "name":"Wood County"
  },
  {
    "id":48439,
    "rate":498.1444395699673,
    "state":"TX",
    "name":"Tarrant County"
  },
  {
    "id":48063,
    "rate":45.256019261637235,
    "state":"TX",
    "name":"Camp County"
  },
  {
    "id":48061,
    "rate":192.30706553090042,
    "state":"TX",
    "name":"Cameron County"
  },
  {
    "id":48259,
    "rate":486.60337257753287,
    "state":"TX",
    "name":"Kendall County"
  },
  {
    "id":48057,
    "rate":54.797143784485556,
    "state":"TX",
    "name":"Calhoun County"
  },
  {
    "id":48051,
    "rate":63.07576807576805,
    "state":"TX",
    "name":"Burleson County"
  },
  {
    "id":48483,
    "rate":3.411806670233636,
    "state":"TX",
    "name":"Wheeler County"
  },
  {
    "id":48047,
    "rate":2.0926339285714284,
    "state":"TX",
    "name":"Brooks County"
  },
  {
    "id":48037,
    "rate":610.1550146098325,
    "state":"TX",
    "name":"Bowie County"
  },
  {
    "id":48029,
    "rate":2788.710473385815,
    "state":"TX",
    "name":"Bexar County"
  },
  {
    "id":51067,
    "rate":8.058589870903674,
    "state":"VA",
    "name":"Franklin County"
  },
  {
    "id":48025,
    "rate":52.73828233336415,
    "state":"TX",
    "name":"Bee County"
  },
  {
    "id":48021,
    "rate":73.59159255401542,
    "state":"TX",
    "name":"Bastrop County"
  },
  {
    "id":48019,
    "rate":208.31764363354029,
    "state":"TX",
    "name":"Bandera County"
  },
  {
    "id":48017,
    "rate":34.15856921560344,
    "state":"TX",
    "name":"Bailey County"
  },
  {
    "id":48013,
    "rate":32.1886036695667,
    "state":"TX",
    "name":"Atascosa County"
  },
  {
    "id":48007,
    "rate":1548.699540220188,
    "state":"TX",
    "name":"Aransas County"
  },
  {
    "id":48003,
    "rate":21.368571251318322,
    "state":"TX",
    "name":"Andrews County"
  },
  {
    "id":48001,
    "rate":109.89401302864233,
    "state":"TX",
    "name":"Anderson County"
  },
  {
    "id":47183,
    "rate":45.97660751325189,
    "state":"TN",
    "name":"Weakley County"
  },
  {
    "id":47179,
    "rate":673.8029736502879,
    "state":"TN",
    "name":"Washington County"
  },
  {
    "id":47175,
    "rate":1.8291814946619216,
    "state":"TN",
    "name":"Van Buren County"
  },
  {
    "id":47171,
    "rate":70.68379814804668,
    "state":"TN",
    "name":"Unicoi County"
  },
  {
    "id":47169,
    "rate":40.886920806058264,
    "state":"TN",
    "name":"Trousdale County"
  },
  {
    "id":47167,
    "rate":42.6005261790308,
    "state":"TN",
    "name":"Tipton County"
  },
  {
    "id":47165,
    "rate":121.25833554009499,
    "state":"TN",
    "name":"Sumner County"
  },
  {
    "id":47163,
    "rate":1827.8845748788879,
    "state":"TN",
    "name":"Sullivan County"
  },
  {
    "id":47161,
    "rate":5.730353929214156,
    "state":"TN",
    "name":"Stewart County"
  },
  {
    "id":47157,
    "rate":1163.771636973343,
    "state":"TN",
    "name":"Shelby County"
  },
  {
    "id":47155,
    "rate":62.07495785241861,
    "state":"TN",
    "name":"Sevier County"
  },
  {
    "id":47153,
    "rate":25.214677117292087,
    "state":"TN",
    "name":"Sequatchie County"
  },
  {
    "id":47151,
    "rate":31.586213119191555,
    "state":"TN",
    "name":"Scott County"
  },
  {
    "id":51031,
    "rate":11.453057047838321,
    "state":"VA",
    "name":"Campbell County"
  },
  {
    "id":47141,
    "rate":156.70074311286282,
    "state":"TN",
    "name":"Putnam County"
  },
  {
    "id":47137,
    "rate":181.00235849056608,
    "state":"TN",
    "name":"Pickett County"
  },
  {
    "id":47131,
    "rate":61.33648049504002,
    "state":"TN",
    "name":"Obion County"
  },
  {
    "id":51155,
    "rate":73.07681238668086,
    "state":"VA",
    "name":"Pulaski County"
  },
  {
    "id":47125,
    "rate":48.03425766076823,
    "state":"TN",
    "name":"Montgomery County"
  },
  {
    "id":47121,
    "rate":27.76930981332419,
    "state":"TN",
    "name":"Meigs County"
  },
  {
    "id":47117,
    "rate":9.786319260360768,
    "state":"TN",
    "name":"Marshall County"
  },
  {
    "id":47115,
    "rate":54.333085343819725,
    "state":"TN",
    "name":"Marion County"
  },
  {
    "id":47113,
    "rate":513.2403527107787,
    "state":"TN",
    "name":"Madison County"
  },
  {
    "id":47111,
    "rate":7.5750710732054,
    "state":"TN",
    "name":"Macon County"
  },
  {
    "id":47101,
    "rate":11.187494747457771,
    "state":"TN",
    "name":"Lewis County"
  },
  {
    "id":47099,
    "rate":36.77063305561491,
    "state":"TN",
    "name":"Lawrence County"
  },
  {
    "id":51095,
    "rate":346.8203129494333,
    "state":"VA",
    "name":"James City County"
  },
  {
    "id":47097,
    "rate":40.93349228712836,
    "state":"TN",
    "name":"Lauderdale County"
  },
  {
    "id":47093,
    "rate":533.6733796380241,
    "state":"TN",
    "name":"Knox County"
  },
  {
    "id":47091,
    "rate":16.20508858104752,
    "state":"TN",
    "name":"Johnson County"
  },
  {
    "id":47087,
    "rate":81.8865469685142,
    "state":"TN",
    "name":"Jackson County"
  },
  {
    "id":47083,
    "rate":49.56903716015671,
    "state":"TN",
    "name":"Houston County"
  },
  {
    "id":47081,
    "rate":6.933587280556476,
    "state":"TN",
    "name":"Hickman County"
  },
  {
    "id":47077,
    "rate":1440.4082943716764,
    "state":"TN",
    "name":"Henderson County"
  },
  {
    "id":47071,
    "rate":46.99596541786744,
    "state":"TN",
    "name":"Hardin County"
  },
  {
    "id":47069,
    "rate":20.324890698025026,
    "state":"TN",
    "name":"Hardeman County"
  },
  {
    "id":47059,
    "rate":74.68936678614098,
    "state":"TN",
    "name":"Greene County"
  },
  {
    "id":47055,
    "rate":70.01243609230345,
    "state":"TN",
    "name":"Giles County"
  },
  {
    "id":47049,
    "rate":82.38568477471945,
    "state":"TN",
    "name":"Fentress County"
  },
  {
    "id":47047,
    "rate":42.39400139863761,
    "state":"TN",
    "name":"Fayette County"
  },
  {
    "id":47043,
    "rate":133.55811589291764,
    "state":"TN",
    "name":"Dickson County"
  },
  {
    "id":47039,
    "rate":1.826923076923077,
    "state":"TN",
    "name":"Decatur County"
  },
  {
    "id":47037,
    "rate":4638.269962504354,
    "state":"TN",
    "name":"Davidson County"
  },
  {
    "id":47035,
    "rate":616.4305626172485,
    "state":"TN",
    "name":"Cumberland County"
  },
  {
    "id":48489,
    "rate":48.48871398199665,
    "state":"TX",
    "name":"Willacy County"
  },
  {
    "id":47033,
    "rate":0.7060676619641145,
    "state":"TN",
    "name":"Crockett County"
  },
  {
    "id":47031,
    "rate":144.67884901292882,
    "state":"TN",
    "name":"Coffee County"
  },
  {
    "id":47023,
    "rate":60.307111756168354,
    "state":"TN",
    "name":"Chester County"
  },
  {
    "id":47021,
    "rate":54.39312539783576,
    "state":"TN",
    "name":"Cheatham County"
  },
  {
    "id":47019,
    "rate":727.8238287785834,
    "state":"TN",
    "name":"Carter County"
  },
  {
    "id":47017,
    "rate":214.2347063550292,
    "state":"TN",
    "name":"Carroll County"
  },
  {
    "id":47015,
    "rate":20.733997977170922,
    "state":"TN",
    "name":"Cannon County"
  },
  {
    "id":47011,
    "rate":133.12143358683508,
    "state":"TN",
    "name":"Bradley County"
  },
  {
    "id":47009,
    "rate":247.42073603406,
    "state":"TN",
    "name":"Blount County"
  },
  {
    "id":47007,
    "rate":20.467882012362097,
    "state":"TN",
    "name":"Bledsoe County"
  },
  {
    "id":47045,
    "rate":324.03369698872405,
    "state":"TN",
    "name":"Dyer County"
  },
  {
    "id":47005,
    "rate":6.703524955708962,
    "state":"TN",
    "name":"Benton County"
  },
  {
    "id":47003,
    "rate":43.91740088105726,
    "state":"TN",
    "name":"Bedford County"
  },
  {
    "id":54099,
    "rate":14.08907659819543,
    "state":"WV",
    "name":"Wayne County"
  },
  {
    "id":46129,
    "rate":39.95054945054945,
    "state":"SD",
    "name":"Walworth County"
  },
  {
    "id":46125,
    "rate":28.62457993278924,
    "state":"SD",
    "name":"Turner County"
  },
  {
    "id":46105,
    "rate":5.40728476821192,
    "state":"SD",
    "name":"Perkins County"
  },
  {
    "id":46091,
    "rate":2.577319587628866,
    "state":"SD",
    "name":"Marshall County"
  },
  {
    "id":54055,
    "rate":194.44129061227116,
    "state":"WV",
    "name":"Mercer County"
  },
  {
    "id":46087,
    "rate":2.18989826878458,
    "state":"SD",
    "name":"McCook County"
  },
  {
    "id":46081,
    "rate":82.5853858784893,
    "state":"SD",
    "name":"Lawrence County"
  },
  {
    "id":46079,
    "rate":3.019776876267749,
    "state":"SD",
    "name":"Lake County"
  },
  {
    "id":46065,
    "rate":214.1150163408062,
    "state":"SD",
    "name":"Hughes County"
  },
  {
    "id":54005,
    "rate":21.132106406525395,
    "state":"WV",
    "name":"Boone County"
  },
  {
    "id":46055,
    "rate":65.99266631744369,
    "state":"SD",
    "name":"Haakon County"
  },
  {
    "id":46051,
    "rate":121.64281783159052,
    "state":"SD",
    "name":"Grant County"
  },
  {
    "id":46047,
    "rate":67.9511358765538,
    "state":"SD",
    "name":"Fall River County"
  },
  {
    "id":46035,
    "rate":131.755227800788,
    "state":"SD",
    "name":"Davison County"
  },
  {
    "id":46033,
    "rate":265.30246542393274,
    "state":"SD",
    "name":"Custer County"
  },
  {
    "id":46027,
    "rate":18.110141224895322,
    "state":"SD",
    "name":"Clay County"
  },
  {
    "id":46023,
    "rate":10.03257328990228,
    "state":"SD",
    "name":"Charles Mix County"
  },
  {
    "id":46013,
    "rate":26.900357199978686,
    "state":"SD",
    "name":"Brown County"
  },
  {
    "id":46011,
    "rate":4.079116441289848,
    "state":"SD",
    "name":"Brookings County"
  },
  {
    "id":48077,
    "rate":61.386035007610346,
    "state":"TX",
    "name":"Clay County"
  },
  {
    "id":46005,
    "rate":35.25888888888889,
    "state":"SD",
    "name":"Beadle County"
  },
  {
    "id":45077,
    "rate":99.96924516948594,
    "state":"SC",
    "name":"Pickens County"
  },
  {
    "id":45075,
    "rate":1011.9397565323909,
    "state":"SC",
    "name":"Orangeburg County"
  },
  {
    "id":45071,
    "rate":186.41695285254104,
    "state":"SC",
    "name":"Newberry County"
  },
  {
    "id":45063,
    "rate":219.41935627179652,
    "state":"SC",
    "name":"Lexington County"
  },
  {
    "id":55069,
    "rate":0.7709328463051418,
    "state":"WI",
    "name":"Lincoln County"
  },
  {
    "id":45061,
    "rate":14.652632706625958,
    "state":"SC",
    "name":"Lee County"
  },
  {
    "id":46093,
    "rate":15.654991513655299,
    "state":"SD",
    "name":"Meade County"
  },
  {
    "id":45053,
    "rate":20.66646132522235,
    "state":"SC",
    "name":"Jasper County"
  },
  {
    "id":45051,
    "rate":1911.723252597609,
    "state":"SC",
    "name":"Horry County"
  },
  {
    "id":47159,
    "rate":78.03870292887028,
    "state":"TN",
    "name":"Smith County"
  },
  {
    "id":45049,
    "rate":119.33249674212075,
    "state":"SC",
    "name":"Hampton County"
  },
  {
    "id":45035,
    "rate":395.1063381764578,
    "state":"SC",
    "name":"Dorchester County"
  },
  {
    "id":45033,
    "rate":103.64295481285976,
    "state":"SC",
    "name":"Dillon County"
  },
  {
    "id":45031,
    "rate":89.77979901709087,
    "state":"SC",
    "name":"Darlington County"
  },
  {
    "id":45029,
    "rate":4637.749149882292,
    "state":"SC",
    "name":"Colleton County"
  },
  {
    "id":45021,
    "rate":272.017028614539,
    "state":"SC",
    "name":"Cherokee County"
  },
  {
    "id":45017,
    "rate":28.530357860876563,
    "state":"SC",
    "name":"Calhoun County"
  },
  {
    "id":45013,
    "rate":107.21412308829315,
    "state":"SC",
    "name":"Beaufort County"
  },
  {
    "id":47075,
    "rate":167.11450967494378,
    "state":"TN",
    "name":"Haywood County"
  },
  {
    "id":45003,
    "rate":388.52355194399917,
    "state":"SC",
    "name":"Aiken County"
  },
  {
    "id":45001,
    "rate":103.08198683423103,
    "state":"SC",
    "name":"Abbeville County"
  },
  {
    "id":44009,
    "rate":89.22968466577424,
    "state":"RI",
    "name":"Washington County"
  },
  {
    "id":44007,
    "rate":345.75633015977996,
    "state":"RI",
    "name":"Providence County"
  },
  {
    "id":44005,
    "rate":423.3640992230105,
    "state":"RI",
    "name":"Newport County"
  },
  {
    "id":44003,
    "rate":118.81928441479685,
    "state":"RI",
    "name":"Kent County"
  },
  {
    "id":49025,
    "rate":6.818622696411252,
    "state":"UT",
    "name":"Kane County"
  },
  {
    "id":42133,
    "rate":131.29945464805726,
    "state":"PA",
    "name":"York County"
  },
  {
    "id":42131,
    "rate":103.94313531818825,
    "state":"PA",
    "name":"Wyoming County"
  },
  {
    "id":53033,
    "rate":1937.27017723445,
    "state":"WA",
    "name":"King County"
  },
  {
    "id":42129,
    "rate":439.39559350041293,
    "state":"PA",
    "name":"Westmoreland County"
  },
  {
    "id":42125,
    "rate":175.99627694536775,
    "state":"PA",
    "name":"Washington County"
  },
  {
    "id":42119,
    "rate":146.86302310640457,
    "state":"PA",
    "name":"Union County"
  },
  {
    "id":42115,
    "rate":47.817782245809276,
    "state":"PA",
    "name":"Susquehanna County"
  },
  {
    "id":42111,
    "rate":136.2240954480613,
    "state":"PA",
    "name":"Somerset County"
  },
  {
    "id":42105,
    "rate":29.779290780141846,
    "state":"PA",
    "name":"Potter County"
  },
  {
    "id":42103,
    "rate":78.84975864134455,
    "state":"PA",
    "name":"Pike County"
  },
  {
    "id":42101,
    "rate":3237.459158821357,
    "state":"PA",
    "name":"Philadelphia County"
  },
  {
    "id":48143,
    "rate":75.71395985401459,
    "state":"TX",
    "name":"Erath County"
  },
  {
    "id":42097,
    "rate":71.85022632091037,
    "state":"PA",
    "name":"Northumberland County"
  },
  {
    "id":42089,
    "rate":199.41358739203974,
    "state":"PA",
    "name":"Monroe County"
  },
  {
    "id":42081,
    "rate":211.2667951166282,
    "state":"PA",
    "name":"Lycoming County"
  },
  {
    "id":42079,
    "rate":685.9917018389159,
    "state":"PA",
    "name":"Luzerne County"
  },
  {
    "id":48355,
    "rate":1550.535649104855,
    "state":"TX",
    "name":"Nueces County"
  },
  {
    "id":45081,
    "rate":47.89210038571356,
    "state":"SC",
    "name":"Saluda County"
  },
  {
    "id":42077,
    "rate":557.270068595908,
    "state":"PA",
    "name":"Lehigh County"
  },
  {
    "id":42073,
    "rate":114.86408231900852,
    "state":"PA",
    "name":"Lawrence County"
  },
  {
    "id":42069,
    "rate":604.2383571861441,
    "state":"PA",
    "name":"Lackawanna County"
  },
  {
    "id":42063,
    "rate":395.31884501581476,
    "state":"PA",
    "name":"Indiana County"
  },
  {
    "id":42099,
    "rate":120.17849340207988,
    "state":"PA",
    "name":"Perry County"
  },
  {
    "id":42057,
    "rate":101.04849634245463,
    "state":"PA",
    "name":"Fulton County"
  },
  {
    "id":56037,
    "rate":13.468469466917874,
    "state":"WY",
    "name":"Sweetwater County"
  },
  {
    "id":42123,
    "rate":40.147044550131035,
    "state":"PA",
    "name":"Warren County"
  },
  {
    "id":42055,
    "rate":76.41431766157174,
    "state":"PA",
    "name":"Franklin County"
  },
  {
    "id":51141,
    "rate":124.69216975493123,
    "state":"VA",
    "name":"Patrick County"
  },
  {
    "id":51101,
    "rate":59.9918633034988,
    "state":"VA",
    "name":"King William County"
  },
  {
    "id":42053,
    "rate":2.970013037809648,
    "state":"PA",
    "name":"Forest County"
  },
  {
    "id":42051,
    "rate":608.1363901416454,
    "state":"PA",
    "name":"Fayette County"
  },
  {
    "id":42049,
    "rate":466.43826054750605,
    "state":"PA",
    "name":"Erie County"
  },
  {
    "id":42045,
    "rate":734.5107467071713,
    "state":"PA",
    "name":"Delaware County"
  },
  {
    "id":48123,
    "rate":57.19397731716856,
    "state":"TX",
    "name":"De Witt County"
  },
  {
    "id":42043,
    "rate":173.9261905379515,
    "state":"PA",
    "name":"Dauphin County"
  },
  {
    "id":54049,
    "rate":123.07957807244614,
    "state":"WV",
    "name":"Marion County"
  },
  {
    "id":42041,
    "rate":1095.0448582346019,
    "state":"PA",
    "name":"Cumberland County"
  },
  {
    "id":42039,
    "rate":978.1082591832082,
    "state":"PA",
    "name":"Crawford County"
  },
  {
    "id":51035,
    "rate":30.81779533357881,
    "state":"VA",
    "name":"Carroll County"
  },
  {
    "id":42037,
    "rate":37.836052836052815,
    "state":"PA",
    "name":"Columbia County"
  },
  {
    "id":42033,
    "rate":224.96411175048775,
    "state":"PA",
    "name":"Clearfield County"
  },
  {
    "id":42031,
    "rate":143.90088719898603,
    "state":"PA",
    "name":"Clarion County"
  },
  {
    "id":42027,
    "rate":25.22534740522683,
    "state":"PA",
    "name":"Centre County"
  },
  {
    "id":54047,
    "rate":97.72825372994274,
    "state":"WV",
    "name":"McDowell County"
  },
  {
    "id":42025,
    "rate":73.52026121644307,
    "state":"PA",
    "name":"Carbon County"
  },
  {
    "id":42019,
    "rate":145.91542447147043,
    "state":"PA",
    "name":"Butler County"
  },
  {
    "id":42013,
    "rate":1507.4984842400336,
    "state":"PA",
    "name":"Blair County"
  },
  {
    "id":55019,
    "rate":0.6151167851443493,
    "state":"WI",
    "name":"Clark County"
  },
  {
    "id":51117,
    "rate":53.261540399269464,
    "state":"VA",
    "name":"Mecklenburg County"
  },
  {
    "id":42009,
    "rate":297.37950160934446,
    "state":"PA",
    "name":"Bedford County"
  },
  {
    "id":42003,
    "rate":1167.6311197407613,
    "state":"PA",
    "name":"Allegheny County"
  },
  {
    "id":42001,
    "rate":218.11617325533297,
    "state":"PA",
    "name":"Adams County"
  },
  {
    "id":41067,
    "rate":154.25817500004564,
    "state":"OR",
    "name":"Washington County"
  },
  {
    "id":41061,
    "rate":1.3858548299635913,
    "state":"OR",
    "name":"Union County"
  },
  {
    "id":49029,
    "rate":17.325035706998573,
    "state":"UT",
    "name":"Morgan County"
  },
  {
    "id":41059,
    "rate":36.99271970878834,
    "state":"OR",
    "name":"Umatilla County"
  },
  {
    "id":41057,
    "rate":0.607281055042249,
    "state":"OR",
    "name":"Tillamook County"
  },
  {
    "id":41049,
    "rate":4.161032028469751,
    "state":"OR",
    "name":"Morrow County"
  },
  {
    "id":55125,
    "rate":6.4832479676706924,
    "state":"WI",
    "name":"Vilas County"
  },
  {
    "id":41047,
    "rate":39.35407782307827,
    "state":"OR",
    "name":"Marion County"
  },
  {
    "id":41045,
    "rate":61.28177481539567,
    "state":"OR",
    "name":"Malheur County"
  },
  {
    "id":41043,
    "rate":14.477019263264614,
    "state":"OR",
    "name":"Linn County"
  },
  {
    "id":41039,
    "rate":148.52643724205248,
    "state":"OR",
    "name":"Lane County"
  },
  {
    "id":41037,
    "rate":1.7984595635430038,
    "state":"OR",
    "name":"Lake County"
  },
  {
    "id":41035,
    "rate":35.13264286363223,
    "state":"OR",
    "name":"Klamath County"
  },
  {
    "id":41033,
    "rate":8.198642216907059,
    "state":"OR",
    "name":"Josephine County"
  },
  {
    "id":51103,
    "rate":139.9581478183437,
    "state":"VA",
    "name":"Lancaster County"
  },
  {
    "id":41031,
    "rate":1.2358104692311227,
    "state":"OR",
    "name":"Jefferson County"
  },
  {
    "id":41029,
    "rate":295.09175578955535,
    "state":"OR",
    "name":"Jackson County"
  },
  {
    "id":41023,
    "rate":2.7292606259395926,
    "state":"OR",
    "name":"Grant County"
  },
  {
    "id":41017,
    "rate":1276.3899570932203,
    "state":"OR",
    "name":"Deschutes County"
  },
  {
    "id":41015,
    "rate":34.37412917434492,
    "state":"OR",
    "name":"Curry County"
  },
  {
    "id":41011,
    "rate":47.635508055511245,
    "state":"OR",
    "name":"Coos County"
  },
  {
    "id":41009,
    "rate":3.368964396033166,
    "state":"OR",
    "name":"Columbia County"
  },
  {
    "id":41003,
    "rate":68.32912711275758,
    "state":"OR",
    "name":"Benton County"
  },
  {
    "id":40143,
    "rate":769.1675292126433,
    "state":"OK",
    "name":"Tulsa County"
  },
  {
    "id":48199,
    "rate":31.687609929463814,
    "state":"TX",
    "name":"Hardin County"
  },
  {
    "id":40141,
    "rate":47.76593011305243,
    "state":"OK",
    "name":"Tillman County"
  },
  {
    "id":40139,
    "rate":10.043189523057633,
    "state":"OK",
    "name":"Texas County"
  },
  {
    "id":40123,
    "rate":4623.882544861337,
    "state":"OK",
    "name":"Pontotoc County"
  },
  {
    "id":40117,
    "rate":32.065764727294784,
    "state":"OK",
    "name":"Pawnee County"
  },
  {
    "id":40113,
    "rate":24.48489897937929,
    "state":"OK",
    "name":"Osage County"
  },
  {
    "id":47053,
    "rate":25.982887054560095,
    "state":"TN",
    "name":"Gibson County"
  },
  {
    "id":40109,
    "rate":1008.5852942562657,
    "state":"OK",
    "name":"Oklahoma County"
  },
  {
    "id":54083,
    "rate":111.74405166553363,
    "state":"WV",
    "name":"Randolph County"
  },
  {
    "id":40107,
    "rate":16.30334064862229,
    "state":"OK",
    "name":"Okfuskee County"
  },
  {
    "id":40093,
    "rate":2.723593158375767,
    "state":"OK",
    "name":"Major County"
  },
  {
    "id":40091,
    "rate":17.96364876717669,
    "state":"OK",
    "name":"McIntosh County"
  },
  {
    "id":40085,
    "rate":13.259437415037121,
    "state":"OK",
    "name":"Love County"
  },
  {
    "id":40081,
    "rate":4.049101271372204,
    "state":"OK",
    "name":"Lincoln County"
  },
  {
    "id":40079,
    "rate":23.447681986582563,
    "state":"OK",
    "name":"Le Flore County"
  },
  {
    "id":40071,
    "rate":32.72072190463677,
    "state":"OK",
    "name":"Kay County"
  },
  {
    "id":40067,
    "rate":6.325177584846093,
    "state":"OK",
    "name":"Jefferson County"
  },
  {
    "id":48253,
    "rate":17.125565042692113,
    "state":"TX",
    "name":"Jones County"
  },
  {
    "id":47029,
    "rate":128.91089945897204,
    "state":"TN",
    "name":"Cocke County"
  },
  {
    "id":46083,
    "rate":49.43170055070182,
    "state":"SD",
    "name":"Lincoln County"
  },
  {
    "id":40065,
    "rate":16.246144472792352,
    "state":"OK",
    "name":"Jackson County"
  },
  {
    "id":42065,
    "rate":290.9466928151185,
    "state":"PA",
    "name":"Jefferson County"
  },
  {
    "id":42007,
    "rate":632.6254229720839,
    "state":"PA",
    "name":"Beaver County"
  },
  {
    "id":40061,
    "rate":11.527939690681587,
    "state":"OK",
    "name":"Haskell County"
  },
  {
    "id":40057,
    "rate":22.931034482758623,
    "state":"OK",
    "name":"Harmon County"
  },
  {
    "id":40051,
    "rate":28.113054623591054,
    "state":"OK",
    "name":"Grady County"
  },
  {
    "id":51059,
    "rate":499.8916105436872,
    "state":"VA",
    "name":"Fairfax County"
  },
  {
    "id":40047,
    "rate":87.41739782771779,
    "state":"OK",
    "name":"Garfield County"
  },
  {
    "id":40041,
    "rate":46.056365262369184,
    "state":"OK",
    "name":"Delaware County"
  },
  {
    "id":40037,
    "rate":60.017783046828704,
    "state":"OK",
    "name":"Creek County"
  },
  {
    "id":40031,
    "rate":160.12242222239774,
    "state":"OK",
    "name":"Comanche County"
  },
  {
    "id":40029,
    "rate":17.179790469753296,
    "state":"OK",
    "name":"Coal County"
  },
  {
    "id":42015,
    "rate":1261.0411857418048,
    "state":"PA",
    "name":"Bradford County"
  },
  {
    "id":40027,
    "rate":576.3494562644198,
    "state":"OK",
    "name":"Cleveland County"
  },
  {
    "id":40021,
    "rate":28.34813351356972,
    "state":"OK",
    "name":"Cherokee County"
  },
  {
    "id":40017,
    "rate":185.73630765466325,
    "state":"OK",
    "name":"Canadian County"
  },
  {
    "id":40013,
    "rate":76.07565229395793,
    "state":"OK",
    "name":"Bryan County"
  },
  {
    "id":40009,
    "rate":31.806462776311793,
    "state":"OK",
    "name":"Beckham County"
  },
  {
    "id":48267,
    "rate":18.041464490516102,
    "state":"TX",
    "name":"Kimble County"
  },
  {
    "id":40001,
    "rate":4.3698309960445885,
    "state":"OK",
    "name":"Adair County"
  },
  {
    "id":51013,
    "rate":632.3156879795627,
    "state":"VA",
    "name":"Arlington County"
  },
  {
    "id":39175,
    "rate":31.081356232294613,
    "state":"OH",
    "name":"Wyandot County"
  },
  {
    "id":39173,
    "rate":97.83178790446058,
    "state":"OH",
    "name":"Wood County"
  },
  {
    "id":39169,
    "rate":184.34142099312982,
    "state":"OH",
    "name":"Wayne County"
  },
  {
    "id":39159,
    "rate":51.52267348291205,
    "state":"OH",
    "name":"Union County"
  },
  {
    "id":39157,
    "rate":63.272100164345645,
    "state":"OH",
    "name":"Tuscarawas County"
  },
  {
    "id":39153,
    "rate":548.8513257418178,
    "state":"OH",
    "name":"Summit County"
  },
  {
    "id":48361,
    "rate":63.52159708743718,
    "state":"TX",
    "name":"Orange County"
  },
  {
    "id":39147,
    "rate":69.20142793395806,
    "state":"OH",
    "name":"Seneca County"
  },
  {
    "id":39145,
    "rate":145.0346179300514,
    "state":"OH",
    "name":"Scioto County"
  },
  {
    "id":39137,
    "rate":109.75220151546179,
    "state":"OH",
    "name":"Putnam County"
  },
  {
    "id":39133,
    "rate":60.957504834630825,
    "state":"OH",
    "name":"Portage County"
  },
  {
    "id":39123,
    "rate":91.41171635115204,
    "state":"OH",
    "name":"Ottawa County"
  },
  {
    "id":39121,
    "rate":10.920628387185292,
    "state":"OH",
    "name":"Noble County"
  },
  {
    "id":39117,
    "rate":12.615490100848497,
    "state":"OH",
    "name":"Morrow County"
  },
  {
    "id":39115,
    "rate":70.97691535630648,
    "state":"OH",
    "name":"Morgan County"
  },
  {
    "id":39111,
    "rate":120.88003292406884,
    "state":"OH",
    "name":"Monroe County"
  },
  {
    "id":51089,
    "rate":21.529229138270487,
    "state":"VA",
    "name":"Henry County"
  },
  {
    "id":39107,
    "rate":66.36123153795283,
    "state":"OH",
    "name":"Mercer County"
  },
  {
    "id":39105,
    "rate":51.884322033898314,
    "state":"OH",
    "name":"Meigs County"
  },
  {
    "id":39097,
    "rate":66.66798575385832,
    "state":"OH",
    "name":"Madison County"
  },
  {
    "id":39095,
    "rate":818.4651878475272,
    "state":"OH",
    "name":"Lucas County"
  },
  {
    "id":39093,
    "rate":197.68365402144548,
    "state":"OH",
    "name":"Lorain County"
  },
  {
    "id":39089,
    "rate":156.95299876579273,
    "state":"OH",
    "name":"Licking County"
  },
  {
    "id":39077,
    "rate":120.6587401973185,
    "state":"OH",
    "name":"Huron County"
  },
  {
    "id":39071,
    "rate":8.66865005578282,
    "state":"OH",
    "name":"Highland County"
  },
  {
    "id":39067,
    "rate":8023.470753154074,
    "state":"OH",
    "name":"Harrison County"
  },
  {
    "id":46109,
    "rate":9.575763432547351,
    "state":"SD",
    "name":"Roberts County"
  },
  {
    "id":39065,
    "rate":106.00733179534176,
    "state":"OH",
    "name":"Hardin County"
  },
  {
    "id":39061,
    "rate":794.4454761296427,
    "state":"OH",
    "name":"Hamilton County"
  },
  {
    "id":40135,
    "rate":15.527420054984804,
    "state":"OK",
    "name":"Sequoyah County"
  },
  {
    "id":39059,
    "rate":32.04531183281843,
    "state":"OH",
    "name":"Guernsey County"
  },
  {
    "id":39055,
    "rate":74.04793594343941,
    "state":"OH",
    "name":"Geauga County"
  },
  {
    "id":39053,
    "rate":3827.503652004545,
    "state":"OH",
    "name":"Gallia County"
  },
  {
    "id":40019,
    "rate":108.40940266866195,
    "state":"OK",
    "name":"Carter County"
  },
  {
    "id":39049,
    "rate":1541.660865743865,
    "state":"OH",
    "name":"Franklin County"
  },
  {
    "id":39039,
    "rate":641.3674068731002,
    "state":"OH",
    "name":"Delaware County"
  },
  {
    "id":39031,
    "rate":41.40357550399393,
    "state":"OH",
    "name":"Coshocton County"
  },
  {
    "id":39029,
    "rate":212.35150979913183,
    "state":"OH",
    "name":"Columbiana County"
  },
  {
    "id":44001,
    "rate":100.55404362484262,
    "state":"RI",
    "name":"Bristol County"
  },
  {
    "id":39025,
    "rate":121.22704159743817,
    "state":"OH",
    "name":"Clermont County"
  },
  {
    "id":39023,
    "rate":124.56492266425644,
    "state":"OH",
    "name":"Clark County"
  },
  {
    "id":41071,
    "rate":57.88798364608864,
    "state":"OR",
    "name":"Yamhill County"
  },
  {
    "id":39021,
    "rate":49.65821249936847,
    "state":"OH",
    "name":"Champaign County"
  },
  {
    "id":39019,
    "rate":40.169467787114854,
    "state":"OH",
    "name":"Carroll County"
  },
  {
    "id":39017,
    "rate":291.7195610962355,
    "state":"OH",
    "name":"Butler County"
  },
  {
    "id":39015,
    "rate":22.640978290244124,
    "state":"OH",
    "name":"Brown County"
  },
  {
    "id":39013,
    "rate":207.42215328047746,
    "state":"OH",
    "name":"Belmont County"
  },
  {
    "id":39009,
    "rate":232.7162040904731,
    "state":"OH",
    "name":"Athens County"
  },
  {
    "id":39005,
    "rate":28.38767843726523,
    "state":"OH",
    "name":"Ashland County"
  },
  {
    "id":39001,
    "rate":72.09053091729537,
    "state":"OH",
    "name":"Adams County"
  },
  {
    "id":41051,
    "rate":1602.2756738449452,
    "state":"OR",
    "name":"Multnomah County"
  },
  {
    "id":38097,
    "rate":27.100210578471447,
    "state":"ND",
    "name":"Traill County"
  },
  {
    "id":38093,
    "rate":54.12205363107166,
    "state":"ND",
    "name":"Stutsman County"
  },
  {
    "id":38077,
    "rate":12.41640962368908,
    "state":"ND",
    "name":"Richland County"
  },
  {
    "id":38075,
    "rate":38.132341425215344,
    "state":"ND",
    "name":"Renville County"
  },
  {
    "id":38071,
    "rate":40.58675897879706,
    "state":"ND",
    "name":"Ramsey County"
  },
  {
    "id":38063,
    "rate":4227.260629665693,
    "state":"ND",
    "name":"Nelson County"
  },
  {
    "id":38059,
    "rate":110.5141736494919,
    "state":"ND",
    "name":"Morton County"
  },
  {
    "id":38055,
    "rate":33.531106605485,
    "state":"ND",
    "name":"McLean County"
  },
  {
    "id":38037,
    "rate":32.263585793752675,
    "state":"ND",
    "name":"Grant County"
  },
  {
    "id":38073,
    "rate":6.437705516989404,
    "state":"ND",
    "name":"Ransom County"
  },
  {
    "id":38035,
    "rate":1221.5751613713242,
    "state":"ND",
    "name":"Grand Forks County"
  },
  {
    "id":38017,
    "rate":726.0912783172553,
    "state":"ND",
    "name":"Cass County"
  },
  {
    "id":48167,
    "rate":357.87550295386933,
    "state":"TX",
    "name":"Galveston County"
  },
  {
    "id":38011,
    "rate":25.493788819875775,
    "state":"ND",
    "name":"Bowman County"
  },
  {
    "id":38009,
    "rate":2.387969011089169,
    "state":"ND",
    "name":"Bottineau County"
  },
  {
    "id":51029,
    "rate":55.07187701695712,
    "state":"VA",
    "name":"Buckingham County"
  },
  {
    "id":37199,
    "rate":35.715419951227815,
    "state":"NC",
    "name":"Yancey County"
  },
  {
    "id":55053,
    "rate":51.43380377985058,
    "state":"WI",
    "name":"Jackson County"
  },
  {
    "id":37195,
    "rate":307.20110556696994,
    "state":"NC",
    "name":"Wilson County"
  },
  {
    "id":40069,
    "rate":6.536119945479328,
    "state":"OK",
    "name":"Johnston County"
  },
  {
    "id":37189,
    "rate":63.0977258758451,
    "state":"NC",
    "name":"Watauga County"
  },
  {
    "id":37187,
    "rate":45.83844098695583,
    "state":"NC",
    "name":"Washington County"
  },
  {
    "id":41041,
    "rate":3425.962688507541,
    "state":"OR",
    "name":"Lincoln County"
  },
  {
    "id":37185,
    "rate":28.466543653491307,
    "state":"NC",
    "name":"Warren County"
  },
  {
    "id":37183,
    "rate":918.4741515686898,
    "state":"NC",
    "name":"Wake County"
  },
  {
    "id":37169,
    "rate":25.45598425870476,
    "state":"NC",
    "name":"Stokes County"
  },
  {
    "id":37167,
    "rate":63.93979468698858,
    "state":"NC",
    "name":"Stanly County"
  },
  {
    "id":37165,
    "rate":75.68271703957741,
    "state":"NC",
    "name":"Scotland County"
  },
  {
    "id":37173,
    "rate":78.70951704545453,
    "state":"NC",
    "name":"Swain County"
  },
  {
    "id":37163,
    "rate":44.23131700446043,
    "state":"NC",
    "name":"Sampson County"
  },
  {
    "id":37157,
    "rate":71.2462491634825,
    "state":"NC",
    "name":"Rockingham County"
  },
  {
    "id":37151,
    "rate":516.444922220817,
    "state":"NC",
    "name":"Randolph County"
  },
  {
    "id":37147,
    "rate":3358.441308308513,
    "state":"NC",
    "name":"Pitt County"
  },
  {
    "id":53047,
    "rate":8.055218593818234,
    "state":"WA",
    "name":"Okanogan County"
  },
  {
    "id":37141,
    "rate":32.2548965108307,
    "state":"NC",
    "name":"Pender County"
  },
  {
    "id":37137,
    "rate":23.139133767727095,
    "state":"NC",
    "name":"Pamlico County"
  },
  {
    "id":37135,
    "rate":1103.0910199814125,
    "state":"NC",
    "name":"Orange County"
  },
  {
    "id":37131,
    "rate":14.419313969311627,
    "state":"NC",
    "name":"Northampton County"
  },
  {
    "id":47065,
    "rate":1744.32833705089,
    "state":"TN",
    "name":"Hamilton County"
  },
  {
    "id":37129,
    "rate":1619.235035909993,
    "state":"NC",
    "name":"New Hanover County"
  },
  {
    "id":37127,
    "rate":1085.2420268569035,
    "state":"NC",
    "name":"Nash County"
  },
  {
    "id":37119,
    "rate":612.4349413024017,
    "state":"NC",
    "name":"Mecklenburg County"
  },
  {
    "id":37117,
    "rate":27.793686678389015,
    "state":"NC",
    "name":"Martin County"
  },
  {
    "id":40105,
    "rate":21.852201852201848,
    "state":"OK",
    "name":"Nowata County"
  },
  {
    "id":39131,
    "rate":41.622750078944584,
    "state":"OH",
    "name":"Pike County"
  },
  {
    "id":37115,
    "rate":20.436260894550333,
    "state":"NC",
    "name":"Madison County"
  },
  {
    "id":37111,
    "rate":67.49193853270175,
    "state":"NC",
    "name":"McDowell County"
  },
  {
    "id":37107,
    "rate":95.18544803230766,
    "state":"NC",
    "name":"Lenoir County"
  },
  {
    "id":37105,
    "rate":80.86241746395365,
    "state":"NC",
    "name":"Lee County"
  },
  {
    "id":37103,
    "rate":125.69384974698328,
    "state":"NC",
    "name":"Jones County"
  },
  {
    "id":37099,
    "rate":99.15243360647648,
    "state":"NC",
    "name":"Jackson County"
  },
  {
    "id":37097,
    "rate":1010.3684152306977,
    "state":"NC",
    "name":"Iredell County"
  },
  {
    "id":51520,
    "rate":60.154028436018976,
    "state":"VA",
    "name":"Bristol City"
  },
  {
    "id":37093,
    "rate":27.002001307785306,
    "state":"NC",
    "name":"Hoke County"
  },
  {
    "id":37091,
    "rate":88.89366404715129,
    "state":"NC",
    "name":"Hertford County"
  },
  {
    "id":48225,
    "rate":1.1564214436908722,
    "state":"TX",
    "name":"Houston County"
  },
  {
    "id":37089,
    "rate":52.548767516070846,
    "state":"NC",
    "name":"Henderson County"
  },
  {
    "id":53073,
    "rate":42.38635531448489,
    "state":"WA",
    "name":"Whatcom County"
  },
  {
    "id":46115,
    "rate":1.6536380036079374,
    "state":"SD",
    "name":"Spink County"
  },
  {
    "id":37079,
    "rate":11.299144500023377,
    "state":"NC",
    "name":"Greene County"
  },
  {
    "id":54059,
    "rate":39.21062705765255,
    "state":"WV",
    "name":"Mingo County"
  },
  {
    "id":37077,
    "rate":51.023210764813726,
    "state":"NC",
    "name":"Granville County"
  },
  {
    "id":37071,
    "rate":875.5695855987386,
    "state":"NC",
    "name":"Gaston County"
  },
  {
    "id":37067,
    "rate":565.4696661982811,
    "state":"NC",
    "name":"Forsyth County"
  },
  {
    "id":37065,
    "rate":28.9541228416556,
    "state":"NC",
    "name":"Edgecombe County"
  },
  {
    "id":45089,
    "rate":29.272445820433422,
    "state":"SC",
    "name":"Williamsburg County"
  },
  {
    "id":37061,
    "rate":79.55285166004658,
    "state":"NC",
    "name":"Duplin County"
  },
  {
    "id":37055,
    "rate":33.67374775088514,
    "state":"NC",
    "name":"Dare County"
  },
  {
    "id":37051,
    "rate":116.77018498974016,
    "state":"NC",
    "name":"Cumberland County"
  },
  {
    "id":37049,
    "rate":120.25325470757483,
    "state":"NC",
    "name":"Craven County"
  },
  {
    "id":51193,
    "rate":18.242555866720007,
    "state":"VA",
    "name":"Westmoreland County"
  },
  {
    "id":37043,
    "rate":1.1833708708708708,
    "state":"NC",
    "name":"Clay County"
  },
  {
    "id":37039,
    "rate":63.308987097730984,
    "state":"NC",
    "name":"Cherokee County"
  },
  {
    "id":48041,
    "rate":1072.4295621911867,
    "state":"TX",
    "name":"Brazos County"
  },
  {
    "id":37035,
    "rate":597.3966787040991,
    "state":"NC",
    "name":"Catawba County"
  },
  {
    "id":37027,
    "rate":91.74212286139652,
    "state":"NC",
    "name":"Caldwell County"
  },
  {
    "id":37023,
    "rate":569.143458746606,
    "state":"NC",
    "name":"Burke County"
  },
  {
    "id":37021,
    "rate":2963.19721070702,
    "state":"NC",
    "name":"Buncombe County"
  },
  {
    "id":45011,
    "rate":17.670673723871896,
    "state":"SC",
    "name":"Barnwell County"
  },
  {
    "id":37019,
    "rate":196.8112504235852,
    "state":"NC",
    "name":"Brunswick County"
  },
  {
    "id":45009,
    "rate":1029.6516782773908,
    "state":"SC",
    "name":"Bamberg County"
  },
  {
    "id":37017,
    "rate":39.0325445482152,
    "state":"NC",
    "name":"Bladen County"
  },
  {
    "id":37015,
    "rate":58.329207320032985,
    "state":"NC",
    "name":"Bertie County"
  },
  {
    "id":37013,
    "rate":49.79301341306775,
    "state":"NC",
    "name":"Beaufort County"
  },
  {
    "id":37011,
    "rate":155.73629361123693,
    "state":"NC",
    "name":"Avery County"
  },
  {
    "id":37009,
    "rate":74.45156537753219,
    "state":"NC",
    "name":"Ashe County"
  },
  {
    "id":37005,
    "rate":28.01739130434782,
    "state":"NC",
    "name":"Alleghany County"
  },
  {
    "id":37003,
    "rate":26.908840376094243,
    "state":"NC",
    "name":"Alexander County"
  },
  {
    "id":40023,
    "rate":5.4251812788398155,
    "state":"OK",
    "name":"Choctaw County"
  },
  {
    "id":37001,
    "rate":884.2066218959862,
    "state":"NC",
    "name":"Alamance County"
  },
  {
    "id":36123,
    "rate":133.14427073025925,
    "state":"NY",
    "name":"Yates County"
  },
  {
    "id":39161,
    "rate":82.95937902467892,
    "state":"OH",
    "name":"Van Wert County"
  },
  {
    "id":36121,
    "rate":136.67784109956418,
    "state":"NY",
    "name":"Wyoming County"
  },
  {
    "id":36119,
    "rate":406.8569286863129,
    "state":"NY",
    "name":"Westchester County"
  },
  {
    "id":54079,
    "rate":84.26549329374967,
    "state":"WV",
    "name":"Putnam County"
  },
  {
    "id":36117,
    "rate":48.66314012622433,
    "state":"NY",
    "name":"Wayne County"
  },
  {
    "id":36115,
    "rate":27.527995431906866,
    "state":"NY",
    "name":"Washington County"
  },
  {
    "id":36113,
    "rate":78.16796576493965,
    "state":"NY",
    "name":"Warren County"
  },
  {
    "id":36111,
    "rate":187.28784643493987,
    "state":"NY",
    "name":"Ulster County"
  },
  {
    "id":36107,
    "rate":58.47700407271283,
    "state":"NY",
    "name":"Tioga County"
  },
  {
    "id":36105,
    "rate":62.01400891476395,
    "state":"NY",
    "name":"Sullivan County"
  },
  {
    "id":51630,
    "rate":498.70504923837325,
    "state":"VA",
    "name":"Fredericksburg City"
  },
  {
    "id":36101,
    "rate":73.32808335352556,
    "state":"NY",
    "name":"Steuben County"
  },
  {
    "id":40153,
    "rate":36.08708286918197,
    "state":"OK",
    "name":"Woodward County"
  },
  {
    "id":36099,
    "rate":96.11769028574659,
    "state":"NY",
    "name":"Seneca County"
  },
  {
    "id":37125,
    "rate":938.8726749335694,
    "state":"NC",
    "name":"Moore County"
  },
  {
    "id":36097,
    "rate":47.42627634912933,
    "state":"NY",
    "name":"Schuyler County"
  },
  {
    "id":36095,
    "rate":36.422241637543685,
    "state":"NY",
    "name":"Schoharie County"
  },
  {
    "id":36093,
    "rate":117.58988977820192,
    "state":"NY",
    "name":"Schenectady County"
  },
  {
    "id":36091,
    "rate":150.90664664385648,
    "state":"NY",
    "name":"Saratoga County"
  },
  {
    "id":40039,
    "rate":25.960095378357526,
    "state":"OK",
    "name":"Custer County"
  },
  {
    "id":36089,
    "rate":91.9608592819163,
    "state":"NY",
    "name":"St. Lawrence County"
  },
  {
    "id":36085,
    "rate":1109.7152514878637,
    "state":"NY",
    "name":"Richmond County"
  },
  {
    "id":49005,
    "rate":13.081719243174252,
    "state":"UT",
    "name":"Cache County"
  },
  {
    "id":36081,
    "rate":388.0237600076099,
    "state":"NY",
    "name":"Queens County"
  },
  {
    "id":36079,
    "rate":211.41415053633966,
    "state":"NY",
    "name":"Putnam County"
  },
  {
    "id":36073,
    "rate":47.77830044452808,
    "state":"NY",
    "name":"Orleans County"
  },
  {
    "id":36069,
    "rate":106.99478056311106,
    "state":"NY",
    "name":"Ontario County"
  },
  {
    "id":36061,
    "rate":2060.1535505212255,
    "state":"NY",
    "name":"New York County"
  },
  {
    "id":39057,
    "rate":81.26589296049224,
    "state":"OH",
    "name":"Greene County"
  },
  {
    "id":36059,
    "rate":1008.1208477463156,
    "state":"NY",
    "name":"Nassau County"
  },
  {
    "id":36049,
    "rate":40.60126930555045,
    "state":"NY",
    "name":"Lewis County"
  },
  {
    "id":36045,
    "rate":303.9563002414899,
    "state":"NY",
    "name":"Jefferson County"
  },
  {
    "id":36041,
    "rate":28.759139335700855,
    "state":"NY",
    "name":"Hamilton County"
  },
  {
    "id":36039,
    "rate":55.918694508385414,
    "state":"NY",
    "name":"Greene County"
  },
  {
    "id":36037,
    "rate":140.45428733674046,
    "state":"NY",
    "name":"Genesee County"
  },
  {
    "id":36035,
    "rate":89.12657008343481,
    "state":"NY",
    "name":"Fulton County"
  },
  {
    "id":36033,
    "rate":86.31559647192792,
    "state":"NY",
    "name":"Franklin County"
  },
  {
    "id":47067,
    "rate":75.20586914208714,
    "state":"TN",
    "name":"Hancock County"
  },
  {
    "id":36025,
    "rate":42.891489632362294,
    "state":"NY",
    "name":"Delaware County"
  },
  {
    "id":47063,
    "rate":872.5560709674344,
    "state":"TN",
    "name":"Hamblen County"
  },
  {
    "id":40083,
    "rate":36.7211688192727,
    "state":"OK",
    "name":"Logan County"
  },
  {
    "id":36023,
    "rate":47.35707172326891,
    "state":"NY",
    "name":"Cortland County"
  },
  {
    "id":36021,
    "rate":100.93327365156503,
    "state":"NY",
    "name":"Columbia County"
  },
  {
    "id":36019,
    "rate":857.7327499816681,
    "state":"NY",
    "name":"Clinton County"
  },
  {
    "id":51179,
    "rate":27.431050649679257,
    "state":"VA",
    "name":"Stafford County"
  },
  {
    "id":37083,
    "rate":325.4512916566215,
    "state":"NC",
    "name":"Halifax County"
  },
  {
    "id":36017,
    "rate":39.27240265602118,
    "state":"NY",
    "name":"Chenango County"
  },
  {
    "id":36013,
    "rate":708.3462212831002,
    "state":"NY",
    "name":"Chautauqua County"
  },
  {
    "id":36011,
    "rate":877.7277465867841,
    "state":"NY",
    "name":"Cayuga County"
  },
  {
    "id":36007,
    "rate":631.3248099864095,
    "state":"NY",
    "name":"Broome County"
  },
  {
    "id":36003,
    "rate":44.36393381515461,
    "state":"NY",
    "name":"Allegany County"
  },
  {
    "id":36001,
    "rate":6167.304122330864,
    "state":"NY",
    "name":"Albany County"
  },
  {
    "id":35061,
    "rate":29.846926791074008,
    "state":"NM",
    "name":"Valencia County"
  },
  {
    "id":35055,
    "rate":1.8146082822927143,
    "state":"NM",
    "name":"Taos County"
  },
  {
    "id":35053,
    "rate":0.947110172876134,
    "state":"NM",
    "name":"Socorro County"
  },
  {
    "id":48059,
    "rate":32.60895301516833,
    "state":"TX",
    "name":"Callahan County"
  },
  {
    "id":35051,
    "rate":1.1334398385604978,
    "state":"NM",
    "name":"Sierra County"
  },
  {
    "id":35049,
    "rate":381.0871332445264,
    "state":"NM",
    "name":"Santa Fe County"
  },
  {
    "id":35047,
    "rate":55.136255310330576,
    "state":"NM",
    "name":"San Miguel County"
  },
  {
    "id":35045,
    "rate":27.252409108259915,
    "state":"NM",
    "name":"San Juan County"
  },
  {
    "id":51610,
    "rate":247.2761875761266,
    "state":"VA",
    "name":"Falls Church City"
  },
  {
    "id":35043,
    "rate":26.829417894013414,
    "state":"NM",
    "name":"Sandoval County"
  },
  {
    "id":35041,
    "rate":0.6122147915027537,
    "state":"NM",
    "name":"Roosevelt County"
  },
  {
    "id":35039,
    "rate":18.610283159463492,
    "state":"NM",
    "name":"Rio Arriba County"
  },
  {
    "id":48031,
    "rate":15.004709871891484,
    "state":"TX",
    "name":"Blanco County"
  },
  {
    "id":42093,
    "rate":2405.5351251960415,
    "state":"PA",
    "name":"Montour County"
  },
  {
    "id":36009,
    "rate":235.67946358801137,
    "state":"NY",
    "name":"Cattaraugus County"
  },
  {
    "id":35035,
    "rate":37.78735893013826,
    "state":"NM",
    "name":"Otero County"
  },
  {
    "id":35031,
    "rate":14.102535893063429,
    "state":"NM",
    "name":"Mckinley County"
  },
  {
    "id":35029,
    "rate":33.2735121307806,
    "state":"NM",
    "name":"Luna County"
  },
  {
    "id":35028,
    "rate":85.00165180046248,
    "state":"NM",
    "name":"Los Alamos County"
  },
  {
    "id":35017,
    "rate":0.497631139438972,
    "state":"NM",
    "name":"Grant County"
  },
  {
    "id":35015,
    "rate":228.03310649255104,
    "state":"NM",
    "name":"Eddy County"
  },
  {
    "id":55027,
    "rate":14.329841040462428,
    "state":"WI",
    "name":"Dodge County"
  },
  {
    "id":35006,
    "rate":16.35844498133099,
    "state":"NM",
    "name":"Cibola County"
  },
  {
    "id":34035,
    "rate":594.3442321207448,
    "state":"NJ",
    "name":"Somerset County"
  },
  {
    "id":34033,
    "rate":71.85200414230019,
    "state":"NJ",
    "name":"Salem County"
  },
  {
    "id":34027,
    "rate":492.20422804091277,
    "state":"NJ",
    "name":"Morris County"
  },
  {
    "id":47129,
    "rate":588.2879927090455,
    "state":"TN",
    "name":"Morgan County"
  },
  {
    "id":34019,
    "rate":3041.7164456170585,
    "state":"NJ",
    "name":"Hunterdon County"
  },
  {
    "id":34017,
    "rate":323.59935391449625,
    "state":"NJ",
    "name":"Hudson County"
  },
  {
    "id":34015,
    "rate":399.90133634364446,
    "state":"NJ",
    "name":"Gloucester County"
  },
  {
    "id":34013,
    "rate":559.214788978024,
    "state":"NJ",
    "name":"Essex County"
  },
  {
    "id":53067,
    "rate":474.10686745544285,
    "state":"WA",
    "name":"Thurston County"
  },
  {
    "id":40015,
    "rate":10.614720949042868,
    "state":"OK",
    "name":"Caddo County"
  },
  {
    "id":34009,
    "rate":203.98047677337706,
    "state":"NJ",
    "name":"Cape May County"
  },
  {
    "id":34005,
    "rate":175.92207124446196,
    "state":"NJ",
    "name":"Burlington County"
  },
  {
    "id":34001,
    "rate":722.2008157755329,
    "state":"NJ",
    "name":"Atlantic County"
  },
  {
    "id":45041,
    "rate":1384.1522526437775,
    "state":"SC",
    "name":"Florence County"
  },
  {
    "id":33019,
    "rate":13.234231731036397,
    "state":"NH",
    "name":"Sullivan County"
  },
  {
    "id":33017,
    "rate":795.4985025252322,
    "state":"NH",
    "name":"Strafford County"
  },
  {
    "id":33015,
    "rate":146.05316259346426,
    "state":"NH",
    "name":"Rockingham County"
  },
  {
    "id":33013,
    "rate":19.05644716879724,
    "state":"NH",
    "name":"Merrimack County"
  },
  {
    "id":33009,
    "rate":828.7366524143182,
    "state":"NH",
    "name":"Grafton County"
  },
  {
    "id":33003,
    "rate":58.05295067866658,
    "state":"NH",
    "name":"Carroll County"
  },
  {
    "id":51185,
    "rate":257.8841981558488,
    "state":"VA",
    "name":"Tazewell County"
  },
  {
    "id":33001,
    "rate":222.89548630658675,
    "state":"NH",
    "name":"Belknap County"
  },
  {
    "id":32510,
    "rate":92.1768844589395,
    "state":"NV",
    "name":"Carson City"
  },
  {
    "id":32033,
    "rate":7.207928721593753,
    "state":"NV",
    "name":"White Pine County"
  },
  {
    "id":32031,
    "rate":616.9033480467788,
    "state":"NV",
    "name":"Washoe County"
  },
  {
    "id":39043,
    "rate":100.03689071452867,
    "state":"OH",
    "name":"Erie County"
  },
  {
    "id":32027,
    "rate":22.320768662232076,
    "state":"NV",
    "name":"Pershing County"
  },
  {
    "id":32023,
    "rate":36.948955105654306,
    "state":"NV",
    "name":"Nye County"
  },
  {
    "id":21155,
    "rate":1039.870435217609,
    "state":"KY",
    "name":"Marion County"
  },
  {
    "id":32019,
    "rate":6.219359630947261,
    "state":"NV",
    "name":"Lyon County"
  },
  {
    "id":33011,
    "rate":881.3637108792841,
    "state":"NH",
    "name":"Hillsborough County"
  },
  {
    "id":32017,
    "rate":19.884068810770383,
    "state":"NV",
    "name":"Lincoln County"
  },
  {
    "id":12041,
    "rate":35.31412991939308,
    "state":"FL",
    "name":"Gilchrist County"
  },
  {
    "id":21225,
    "rate":114.06706792777302,
    "state":"KY",
    "name":"Union County"
  },
  {
    "id":32013,
    "rate":39.215250570142096,
    "state":"NV",
    "name":"Humboldt County"
  },
  {
    "id":18057,
    "rate":599.1977760127077,
    "state":"IN",
    "name":"Hamilton County"
  },
  {
    "id":31185,
    "rate":136.6290264205573,
    "state":"NE",
    "name":"York County"
  },
  {
    "id":56041,
    "rate":27.21759016627757,
    "state":"WY",
    "name":"Uinta County"
  },
  {
    "id":37155,
    "rate":70.63907274983747,
    "state":"NC",
    "name":"Robeson County"
  },
  {
    "id":29011,
    "rate":19.620703598867774,
    "state":"MO",
    "name":"Barton County"
  },
  {
    "id":31179,
    "rate":18.300399411393734,
    "state":"NE",
    "name":"Wayne County"
  },
  {
    "id":36031,
    "rate":59.64214406389185,
    "state":"NY",
    "name":"Essex County"
  },
  {
    "id":29123,
    "rate":33.20044918585065,
    "state":"MO",
    "name":"Madison County"
  },
  {
    "id":31177,
    "rate":27.51022620866393,
    "state":"NE",
    "name":"Washington County"
  },
  {
    "id":54081,
    "rate":204.93528980561675,
    "state":"WV",
    "name":"Raleigh County"
  },
  {
    "id":6077,
    "rate":291.346611842338,
    "state":"CA",
    "name":"San Joaquin County"
  },
  {
    "id":23007,
    "rate":1.2413883174976328,
    "state":"ME",
    "name":"Franklin County"
  },
  {
    "id":31175,
    "rate":14.58264365098132,
    "state":"NE",
    "name":"Valley County"
  },
  {
    "id":51099,
    "rate":11.29185630689207,
    "state":"VA",
    "name":"King George County"
  },
  {
    "id":12127,
    "rate":605.9039171823325,
    "state":"FL",
    "name":"Volusia County"
  },
  {
    "id":17109,
    "rate":26.896604701182962,
    "state":"IL",
    "name":"McDonough County"
  },
  {
    "id":31159,
    "rate":13.490716180371352,
    "state":"NE",
    "name":"Seward County"
  },
  {
    "id":48011,
    "rate":5.36447638603696,
    "state":"TX",
    "name":"Armstrong County"
  },
  {
    "id":30087,
    "rate":34.409507567682795,
    "state":"MT",
    "name":"Rosebud County"
  },
  {
    "id":31155,
    "rate":56.419474215408286,
    "state":"NE",
    "name":"Saunders County"
  },
  {
    "id":47105,
    "rate":69.3581006372756,
    "state":"TN",
    "name":"Loudon County"
  },
  {
    "id":6073,
    "rate":1043.1794680740454,
    "state":"CA",
    "name":"San Diego County"
  },
  {
    "id":31151,
    "rate":89.8539489167301,
    "state":"NE",
    "name":"Saline County"
  },
  {
    "id":56035,
    "rate":17.724740683826354,
    "state":"WY",
    "name":"Sublette County"
  },
  {
    "id":48477,
    "rate":32.87840311817161,
    "state":"TX",
    "name":"Washington County"
  },
  {
    "id":47027,
    "rate":19.956410256410255,
    "state":"TN",
    "name":"Clay County"
  },
  {
    "id":38015,
    "rate":202.9174073170452,
    "state":"ND",
    "name":"Burleigh County"
  },
  {
    "id":28099,
    "rate":70.74834057751272,
    "state":"MS",
    "name":"Neshoba County"
  },
  {
    "id":31143,
    "rate":39.70087088224158,
    "state":"NE",
    "name":"Polk County"
  },
  {
    "id":31141,
    "rate":340.4576448184778,
    "state":"NE",
    "name":"Platte County"
  },
  {
    "id":55009,
    "rate":175.93753705328558,
    "state":"WI",
    "name":"Brown County"
  },
  {
    "id":27087,
    "rate":1.9543560949103422,
    "state":"MN",
    "name":"Mahnomen County"
  },
  {
    "id":29219,
    "rate":22.681104163489408,
    "state":"MO",
    "name":"Warren County"
  },
  {
    "id":31137,
    "rate":145.92664930555554,
    "state":"NE",
    "name":"Phelps County"
  },
  {
    "id":6001,
    "rate":200.68062373052118,
    "state":"CA",
    "name":"Alameda County"
  },
  {
    "id":31133,
    "rate":102.87562904385335,
    "state":"NE",
    "name":"Pawnee County"
  },
  {
    "id":31131,
    "rate":122.00394803871623,
    "state":"NE",
    "name":"Otoe County"
  },
  {
    "id":54017,
    "rate":3.225060827250608,
    "state":"WV",
    "name":"Doddridge County"
  },
  {
    "id":31053,
    "rate":149.7540223616035,
    "state":"NE",
    "name":"Dodge County"
  },
  {
    "id":31111,
    "rate":474.61517111215966,
    "state":"NE",
    "name":"Lincoln County"
  },
  {
    "id":5041,
    "rate":44.35104183235247,
    "state":"AR",
    "name":"Desha County"
  },
  {
    "id":30105,
    "rate":42.04963971176942,
    "state":"MT",
    "name":"Valley County"
  },
  {
    "id":32007,
    "rate":13.082931986373781,
    "state":"NV",
    "name":"Elko County"
  },
  {
    "id":31105,
    "rate":9.569352708058123,
    "state":"NE",
    "name":"Kimball County"
  },
  {
    "id":31099,
    "rate":43.75114784205694,
    "state":"NE",
    "name":"Kearney County"
  },
  {
    "id":8081,
    "rate":20.321257689678745,
    "state":"CO",
    "name":"Moffat County"
  },
  {
    "id":31095,
    "rate":5.593961064759634,
    "state":"NE",
    "name":"Jefferson County"
  },
  {
    "id":18089,
    "rate":482.77351305976947,
    "state":"IN",
    "name":"Lake County"
  },
  {
    "id":31089,
    "rate":73.98981650494763,
    "state":"NE",
    "name":"Holt County"
  },
  {
    "id":31081,
    "rate":186.393351800554,
    "state":"NE",
    "name":"Hamilton County"
  },
  {
    "id":54071,
    "rate":14.976101964949548,
    "state":"WV",
    "name":"Pendleton County"
  },
  {
    "id":31079,
    "rate":77.3564266180492,
    "state":"NE",
    "name":"Hall County"
  },
  {
    "id":13067,
    "rate":458.68163483212663,
    "state":"GA",
    "name":"Cobb County"
  },
  {
    "id":31061,
    "rate":15.056426332288401,
    "state":"NE",
    "name":"Franklin County"
  },
  {
    "id":31173,
    "rate":216.04506716741295,
    "state":"NE",
    "name":"Thurston County"
  },
  {
    "id":31055,
    "rate":3285.0671643055157,
    "state":"NE",
    "name":"Douglas County"
  },
  {
    "id":42095,
    "rate":259.93860296696676,
    "state":"PA",
    "name":"Northampton County"
  },
  {
    "id":40045,
    "rate":19.720245398773006,
    "state":"OK",
    "name":"Ellis County"
  },
  {
    "id":26059,
    "rate":58.88228428151479,
    "state":"MI",
    "name":"Hillsdale County"
  },
  {
    "id":1103,
    "rate":120.32626169236258,
    "state":"AL",
    "name":"Morgan County"
  },
  {
    "id":31051,
    "rate":97.69087523277466,
    "state":"NE",
    "name":"Dixon County"
  },
  {
    "id":49023,
    "rate":51.18125484120838,
    "state":"UT",
    "name":"Juab County"
  },
  {
    "id":45015,
    "rate":98.07992907389719,
    "state":"SC",
    "name":"Berkeley County"
  },
  {
    "id":31063,
    "rate":11.812522885389969,
    "state":"NE",
    "name":"Frontier County"
  },
  {
    "id":31049,
    "rate":60.902179422199694,
    "state":"NE",
    "name":"Deuel County"
  },
  {
    "id":48099,
    "rate":30.662336652146855,
    "state":"TX",
    "name":"Coryell County"
  },
  {
    "id":34039,
    "rate":291.5629145634604,
    "state":"NJ",
    "name":"Union County"
  },
  {
    "id":31101,
    "rate":1.417783191230207,
    "state":"NE",
    "name":"Keith County"
  },
  {
    "id":6107,
    "rate":77.55820057187275,
    "state":"CA",
    "name":"Tulare County"
  },
  {
    "id":31037,
    "rate":33.7652974101129,
    "state":"NE",
    "name":"Colfax County"
  },
  {
    "id":31035,
    "rate":48.2238176993913,
    "state":"NE",
    "name":"Clay County"
  },
  {
    "id":31027,
    "rate":12.56442417331813,
    "state":"NE",
    "name":"Cedar County"
  },
  {
    "id":54093,
    "rate":4.466215242760409,
    "state":"WV",
    "name":"Tucker County"
  },
  {
    "id":54025,
    "rate":82.27866837960119,
    "state":"WV",
    "name":"Greenbrier County"
  },
  {
    "id":47107,
    "rate":165.91150003813019,
    "state":"TN",
    "name":"McMinn County"
  },
  {
    "id":18053,
    "rate":17.584688884719196,
    "state":"IN",
    "name":"Grant County"
  },
  {
    "id":31023,
    "rate":69.3440057775638,
    "state":"NE",
    "name":"Butler County"
  },
  {
    "id":31021,
    "rate":9.472422062350121,
    "state":"NE",
    "name":"Burt County"
  },
  {
    "id":31013,
    "rate":12.393942077761048,
    "state":"NE",
    "name":"Box Butte County"
  },
  {
    "id":21037,
    "rate":169.25078146421717,
    "state":"KY",
    "name":"Campbell County"
  },
  {
    "id":28009,
    "rate":25.565187239944525,
    "state":"MS",
    "name":"Benton County"
  },
  {
    "id":31011,
    "rate":23.023857961901236,
    "state":"NE",
    "name":"Boone County"
  },
  {
    "id":30111,
    "rate":2554.1261324133557,
    "state":"MT",
    "name":"Yellowstone County"
  },
  {
    "id":38061,
    "rate":6.740571428571429,
    "state":"ND",
    "name":"Mountrail County"
  },
  {
    "id":30107,
    "rate":6.326822296331586,
    "state":"MT",
    "name":"Wheatland County"
  },
  {
    "id":51735,
    "rate":5.043678918740729,
    "state":"VA",
    "name":"Poquoson City"
  },
  {
    "id":30101,
    "rate":29.39208564328044,
    "state":"MT",
    "name":"Toole County"
  },
  {
    "id":34037,
    "rate":166.4881450488149,
    "state":"NJ",
    "name":"Sussex County"
  },
  {
    "id":17089,
    "rate":217.20942888953203,
    "state":"IL",
    "name":"Kane County"
  },
  {
    "id":30093,
    "rate":3168.592178123098,
    "state":"MT",
    "name":"Silver Bow County"
  },
  {
    "id":30065,
    "rate":2.6245989304812833,
    "state":"MT",
    "name":"Musselshell County"
  },
  {
    "id":48419,
    "rate":11.013929505925812,
    "state":"TX",
    "name":"Shelby County"
  },
  {
    "id":16031,
    "rate":37.12419424151269,
    "state":"ID",
    "name":"Cassia County"
  },
  {
    "id":30057,
    "rate":4.679611650485437,
    "state":"MT",
    "name":"Madison County"
  },
  {
    "id":30053,
    "rate":34.456828804766545,
    "state":"MT",
    "name":"Lincoln County"
  },
  {
    "id":48165,
    "rate":0.6833947539562106,
    "state":"TX",
    "name":"Gaines County"
  },
  {
    "id":13079,
    "rate":18.545051113400426,
    "state":"GA",
    "name":"Crawford County"
  },
  {
    "id":31109,
    "rate":1685.3049214738182,
    "state":"NE",
    "name":"Lancaster County"
  },
  {
    "id":30049,
    "rate":14.952425013493714,
    "state":"MT",
    "name":"Lewis and Clark County"
  },
  {
    "id":30047,
    "rate":22.07214041863513,
    "state":"MT",
    "name":"Lake County"
  },
  {
    "id":48035,
    "rate":34.48180663685053,
    "state":"TX",
    "name":"Bosque County"
  },
  {
    "id":30043,
    "rate":34.11315789473685,
    "state":"MT",
    "name":"Jefferson County"
  },
  {
    "id":54107,
    "rate":262.9827520476887,
    "state":"WV",
    "name":"Wood County"
  },
  {
    "id":2090,
    "rate":8.899198818681594,
    "state":"AK",
    "name":"Fairbanks North Star Borough"
  },
  {
    "id":26053,
    "rate":94.82616822429905,
    "state":"MI",
    "name":"Gogebic County"
  },
  {
    "id":30031,
    "rate":17.748045440801693,
    "state":"MT",
    "name":"Gallatin County"
  },
  {
    "id":30029,
    "rate":1409.529729965537,
    "state":"MT",
    "name":"Flathead County"
  },
  {
    "id":30021,
    "rate":10.558502002381209,
    "state":"MT",
    "name":"Dawson County"
  },
  {
    "id":54007,
    "rate":155.88885053503623,
    "state":"WV",
    "name":"Braxton County"
  },
  {
    "id":30091,
    "rate":7.32122905027933,
    "state":"MT",
    "name":"Sheridan County"
  },
  {
    "id":30009,
    "rate":1.2780690473835197,
    "state":"MT",
    "name":"Carbon County"
  },
  {
    "id":29221,
    "rate":30.540432824518756,
    "state":"MO",
    "name":"Washington County"
  },
  {
    "id":29207,
    "rate":27.55062357516427,
    "state":"MO",
    "name":"Stoddard County"
  },
  {
    "id":1087,
    "rate":4.518319491939424,
    "state":"AL",
    "name":"Macon County"
  },
  {
    "id":17139,
    "rate":71.33640552995392,
    "state":"IL",
    "name":"Moultrie County"
  },
  {
    "id":29205,
    "rate":37.33536781239961,
    "state":"MO",
    "name":"Shelby County"
  },
  {
    "id":29199,
    "rate":26.738505747126435,
    "state":"MO",
    "name":"Scotland County"
  },
  {
    "id":21039,
    "rate":163.71281237604126,
    "state":"KY",
    "name":"Carlisle County"
  },
  {
    "id":29186,
    "rate":350.8924574753804,
    "state":"MO",
    "name":"Ste Genevieve County"
  },
  {
    "id":29185,
    "rate":1.5435466946484786,
    "state":"MO",
    "name":"St. Clair County"
  },
  {
    "id":29175,
    "rate":90.98518079430941,
    "state":"MO",
    "name":"Randolph County"
  },
  {
    "id":29167,
    "rate":62.23854685741843,
    "state":"MO",
    "name":"Polk County"
  },
  {
    "id":51121,
    "rate":75.09926712736929,
    "state":"VA",
    "name":"Montgomery County"
  },
  {
    "id":29165,
    "rate":264.71636671515097,
    "state":"MO",
    "name":"Platte County"
  },
  {
    "id":8099,
    "rate":15.137444578798874,
    "state":"CO",
    "name":"Prowers County"
  },
  {
    "id":19185,
    "rate":2.9173878835562546,
    "state":"IA",
    "name":"Wayne County"
  },
  {
    "id":29163,
    "rate":29.952024149641524,
    "state":"MO",
    "name":"Pike County"
  },
  {
    "id":37085,
    "rate":88.68663726444815,
    "state":"NC",
    "name":"Harnett County"
  },
  {
    "id":29161,
    "rate":80.69849279596309,
    "state":"MO",
    "name":"Phelps County"
  },
  {
    "id":19165,
    "rate":282.4165354983017,
    "state":"IA",
    "name":"Shelby County"
  },
  {
    "id":30025,
    "rate":14.272517321016167,
    "state":"MT",
    "name":"Fallon County"
  },
  {
    "id":12015,
    "rate":1785.1106934001652,
    "state":"FL",
    "name":"Charlotte County"
  },
  {
    "id":29159,
    "rate":28.732231131294498,
    "state":"MO",
    "name":"Pettis County"
  },
  {
    "id":13031,
    "rate":106.11858727891905,
    "state":"GA",
    "name":"Bulloch County"
  },
  {
    "id":29157,
    "rate":56.50283851976451,
    "state":"MO",
    "name":"Perry County"
  },
  {
    "id":29155,
    "rate":190.40790417839597,
    "state":"MO",
    "name":"Pemiscot County"
  },
  {
    "id":29153,
    "rate":57.32751454696591,
    "state":"MO",
    "name":"Ozark County"
  },
  {
    "id":48449,
    "rate":46.49343896246906,
    "state":"TX",
    "name":"Titus County"
  },
  {
    "id":29147,
    "rate":4.466983352591261,
    "state":"MO",
    "name":"Nodaway County"
  },
  {
    "id":37139,
    "rate":631.6840209238059,
    "state":"NC",
    "name":"Pasquotank County"
  },
  {
    "id":29137,
    "rate":12.093023255813952,
    "state":"MO",
    "name":"Monroe County"
  },
  {
    "id":29129,
    "rate":62.72482498653742,
    "state":"MO",
    "name":"Mercer County"
  },
  {
    "id":31181,
    "rate":9.544364508393285,
    "state":"NE",
    "name":"Webster County"
  },
  {
    "id":29127,
    "rate":128.5376097747232,
    "state":"MO",
    "name":"Marion County"
  },
  {
    "id":20147,
    "rate":1.9398659663104512,
    "state":"KS",
    "name":"Phillips County"
  },
  {
    "id":29121,
    "rate":21.96708665466701,
    "state":"MO",
    "name":"Macon County"
  },
  {
    "id":18109,
    "rate":47.69200762829404,
    "state":"IN",
    "name":"Morgan County"
  },
  {
    "id":20031,
    "rate":63.792616976252084,
    "state":"KS",
    "name":"Coffey County"
  },
  {
    "id":30089,
    "rate":4.175524905560924,
    "state":"MT",
    "name":"Sanders County"
  },
  {
    "id":26069,
    "rate":104.6026803310997,
    "state":"MI",
    "name":"Iosco County"
  },
  {
    "id":29105,
    "rate":21.768044730599794,
    "state":"MO",
    "name":"Laclede County"
  },
  {
    "id":29097,
    "rate":42.60369901717772,
    "state":"MO",
    "name":"Jasper County"
  },
  {
    "id":29089,
    "rate":2.83469207347019,
    "state":"MO",
    "name":"Howard County"
  },
  {
    "id":29083,
    "rate":71.22392776523705,
    "state":"MO",
    "name":"Henry County"
  },
  {
    "id":29079,
    "rate":8.63121185701831,
    "state":"MO",
    "name":"Grundy County"
  },
  {
    "id":39045,
    "rate":110.18874706672263,
    "state":"OH",
    "name":"Fairfield County"
  },
  {
    "id":29033,
    "rate":16.826827927432653,
    "state":"MO",
    "name":"Carroll County"
  },
  {
    "id":29077,
    "rate":1933.8341064392216,
    "state":"MO",
    "name":"Greene County"
  },
  {
    "id":5017,
    "rate":15.848315587362544,
    "state":"AR",
    "name":"Chicot County"
  },
  {
    "id":13225,
    "rate":128.62195565249002,
    "state":"GA",
    "name":"Peach County"
  },
  {
    "id":17155,
    "rate":74.69787234042552,
    "state":"IL",
    "name":"Putnam County"
  },
  {
    "id":29071,
    "rate":124.36746690864616,
    "state":"MO",
    "name":"Franklin County"
  },
  {
    "id":45027,
    "rate":55.32142752925387,
    "state":"SC",
    "name":"Clarendon County"
  },
  {
    "id":29069,
    "rate":76.14740210843371,
    "state":"MO",
    "name":"Dunklin County"
  },
  {
    "id":37161,
    "rate":42.55372306411077,
    "state":"NC",
    "name":"Rutherford County"
  },
  {
    "id":36051,
    "rate":35.47362091825723,
    "state":"NY",
    "name":"Livingston County"
  },
  {
    "id":30071,
    "rate":7.984007753816333,
    "state":"MT",
    "name":"Phillips County"
  },
  {
    "id":56045,
    "rate":28.08679619912069,
    "state":"WY",
    "name":"Weston County"
  },
  {
    "id":29067,
    "rate":2.902632740108839,
    "state":"MO",
    "name":"Douglas County"
  },
  {
    "id":4025,
    "rate":62.79616392717489,
    "state":"AZ",
    "name":"Yavapai County"
  },
  {
    "id":20161,
    "rate":110.9616367616027,
    "state":"KS",
    "name":"Riley County"
  },
  {
    "id":29005,
    "rate":61.42624728850326,
    "state":"MO",
    "name":"Atchison County"
  },
  {
    "id":29063,
    "rate":27.185024079540163,
    "state":"MO",
    "name":"Dekalb County"
  },
  {
    "id":29059,
    "rate":51.809836065573776,
    "state":"MO",
    "name":"Dallas County"
  },
  {
    "id":41027,
    "rate":23.048877496906496,
    "state":"OR",
    "name":"Hood River County"
  },
  {
    "id":37197,
    "rate":59.07557284002525,
    "state":"NC",
    "name":"Yadkin County"
  },
  {
    "id":29053,
    "rate":8.19727309030749,
    "state":"MO",
    "name":"Cooper County"
  },
  {
    "id":48179,
    "rate":38.64713353479615,
    "state":"TX",
    "name":"Gray County"
  },
  {
    "id":29051,
    "rate":3301.0758474409777,
    "state":"MO",
    "name":"Cole County"
  },
  {
    "id":51033,
    "rate":8.72386744531601,
    "state":"VA",
    "name":"Caroline County"
  },
  {
    "id":9001,
    "rate":467.2401287301267,
    "state":"CT",
    "name":"Fairfield County"
  },
  {
    "id":21153,
    "rate":11.240214888718343,
    "state":"KY",
    "name":"Magoffin County"
  },
  {
    "id":29045,
    "rate":19.274366680978964,
    "state":"MO",
    "name":"Clark County"
  },
  {
    "id":2122,
    "rate":24.47698304013484,
    "state":"AK",
    "name":"Kenai Peninsula Borough"
  },
  {
    "id":29041,
    "rate":18.753091240400888,
    "state":"MO",
    "name":"Chariton County"
  },
  {
    "id":31019,
    "rate":79.22256737469566,
    "state":"NE",
    "name":"Buffalo County"
  },
  {
    "id":53019,
    "rate":2.6933540614069176,
    "state":"WA",
    "name":"Ferry County"
  },
  {
    "id":5113,
    "rate":7.019080234833661,
    "state":"AR",
    "name":"Polk County"
  },
  {
    "id":29037,
    "rate":95.49388185864055,
    "state":"MO",
    "name":"Cass County"
  },
  {
    "id":39035,
    "rate":1348.377993647147,
    "state":"OH",
    "name":"Cuyahoga County"
  },
  {
    "id":29035,
    "rate":4.637773868543099,
    "state":"MO",
    "name":"Carter County"
  },
  {
    "id":39155,
    "rate":121.87153813892265,
    "state":"OH",
    "name":"Trumbull County"
  },
  {
    "id":19163,
    "rate":175.88472223044897,
    "state":"IA",
    "name":"Scott County"
  },
  {
    "id":29031,
    "rate":390.55786196159835,
    "state":"MO",
    "name":"Cape Girardeau County"
  },
  {
    "id":17111,
    "rate":1415.481569328244,
    "state":"IL",
    "name":"McHenry County"
  },
  {
    "id":31003,
    "rate":75.79754601226993,
    "state":"NE",
    "name":"Antelope County"
  },
  {
    "id":29027,
    "rate":58.483737460074686,
    "state":"MO",
    "name":"Callaway County"
  },
  {
    "id":29025,
    "rate":29.03027643703379,
    "state":"MO",
    "name":"Caldwell County"
  },
  {
    "id":29023,
    "rate":177.62019901422852,
    "state":"MO",
    "name":"Butler County"
  },
  {
    "id":36053,
    "rate":38.434548467274226,
    "state":"NY",
    "name":"Madison County"
  },
  {
    "id":29021,
    "rate":1492.2016284431768,
    "state":"MO",
    "name":"Buchanan County"
  },
  {
    "id":21053,
    "rate":26.243525847747485,
    "state":"KY",
    "name":"Clinton County"
  },
  {
    "id":29019,
    "rate":1773.2946403150802,
    "state":"MO",
    "name":"Boone County"
  },
  {
    "id":29017,
    "rate":22.359532446594116,
    "state":"MO",
    "name":"Bollinger County"
  },
  {
    "id":29013,
    "rate":35.654437728170436,
    "state":"MO",
    "name":"Bates County"
  },
  {
    "id":8021,
    "rate":2.7076030460534266,
    "state":"CO",
    "name":"Conejos County"
  },
  {
    "id":29001,
    "rate":1266.2607611701917,
    "state":"MO",
    "name":"Adair County"
  },
  {
    "id":48009,
    "rate":32.348381212950294,
    "state":"TX",
    "name":"Archer County"
  },
  {
    "id":28163,
    "rate":10.938759635103597,
    "state":"MS",
    "name":"Yazoo County"
  },
  {
    "id":20123,
    "rate":70.35635446231473,
    "state":"KS",
    "name":"Mitchell County"
  },
  {
    "id":28161,
    "rate":28.72949163501172,
    "state":"MS",
    "name":"Yalobusha County"
  },
  {
    "id":18045,
    "rate":76.08654970760236,
    "state":"IN",
    "name":"Fountain County"
  },
  {
    "id":28159,
    "rate":124.41295759810372,
    "state":"MS",
    "name":"Winston County"
  },
  {
    "id":40125,
    "rate":41.17929932251814,
    "state":"OK",
    "name":"Pottawatomie County"
  },
  {
    "id":28151,
    "rate":95.01468502127832,
    "state":"MS",
    "name":"Washington County"
  },
  {
    "id":28149,
    "rate":126.41666666666666,
    "state":"MS",
    "name":"Warren County"
  },
  {
    "id":28143,
    "rate":7.012813157391471,
    "state":"MS",
    "name":"Tunica County"
  },
  {
    "id":28139,
    "rate":86.83405417709996,
    "state":"MS",
    "name":"Tippah County"
  },
  {
    "id":39125,
    "rate":10.696323948773786,
    "state":"OH",
    "name":"Paulding County"
  },
  {
    "id":28133,
    "rate":121.94886383591472,
    "state":"MS",
    "name":"Sunflower County"
  },
  {
    "id":48197,
    "rate":24.508399209486164,
    "state":"TX",
    "name":"Hardeman County"
  },
  {
    "id":28129,
    "rate":0.6330741443702933,
    "state":"MS",
    "name":"Smith County"
  },
  {
    "id":28127,
    "rate":62.49140264871587,
    "state":"MS",
    "name":"Simpson County"
  },
  {
    "id":18113,
    "rate":92.1514423076923,
    "state":"IN",
    "name":"Noble County"
  },
  {
    "id":28117,
    "rate":123.69814302647177,
    "state":"MS",
    "name":"Prentiss County"
  },
  {
    "id":45055,
    "rate":89.89298110296954,
    "state":"SC",
    "name":"Kershaw County"
  },
  {
    "id":39003,
    "rate":272.5440954380101,
    "state":"OH",
    "name":"Allen County"
  },
  {
    "id":28115,
    "rate":43.23150436645247,
    "state":"MS",
    "name":"Pontotoc County"
  },
  {
    "id":28113,
    "rate":58.72653386851486,
    "state":"MS",
    "name":"Pike County"
  },
  {
    "id":17117,
    "rate":15.839052702931703,
    "state":"IL",
    "name":"Macoupin County"
  },
  {
    "id":29009,
    "rate":51.203781630477465,
    "state":"MO",
    "name":"Barry County"
  },
  {
    "id":21027,
    "rate":77.939098417753,
    "state":"KY",
    "name":"Breckinridge County"
  },
  {
    "id":28101,
    "rate":31.860809248554926,
    "state":"MS",
    "name":"Newton County"
  },
  {
    "id":28097,
    "rate":17.88860471724922,
    "state":"MS",
    "name":"Montgomery County"
  },
  {
    "id":28007,
    "rate":249.19207237358154,
    "state":"MS",
    "name":"Attala County"
  },
  {
    "id":28083,
    "rate":125.48533231958439,
    "state":"MS",
    "name":"Leflore County"
  },
  {
    "id":28075,
    "rate":236.89526728208148,
    "state":"MS",
    "name":"Lauderdale County"
  },
  {
    "id":28073,
    "rate":1657.9508848333994,
    "state":"MS",
    "name":"Lamar County"
  },
  {
    "id":28071,
    "rate":2127.3278324341472,
    "state":"MS",
    "name":"Lafayette County"
  },
  {
    "id":28067,
    "rate":72.95181691891499,
    "state":"MS",
    "name":"Jones County"
  },
  {
    "id":28065,
    "rate":43.708943493009016,
    "state":"MS",
    "name":"Jefferson Davis County"
  },
  {
    "id":29065,
    "rate":17.048196616661347,
    "state":"MO",
    "name":"Dent County"
  },
  {
    "id":29029,
    "rate":146.08775928880783,
    "state":"MO",
    "name":"Camden County"
  },
  {
    "id":45023,
    "rate":47.974881298820634,
    "state":"SC",
    "name":"Chester County"
  },
  {
    "id":12103,
    "rate":990.7333250204649,
    "state":"FL",
    "name":"Pinellas County"
  },
  {
    "id":28049,
    "rate":2403.6367187814594,
    "state":"MS",
    "name":"Hinds County"
  },
  {
    "id":28045,
    "rate":44.0156698300596,
    "state":"MS",
    "name":"Hancock County"
  },
  {
    "id":54063,
    "rate":60.83753335309815,
    "state":"WV",
    "name":"Monroe County"
  },
  {
    "id":28141,
    "rate":78.81974577569045,
    "state":"MS",
    "name":"Tishomingo County"
  },
  {
    "id":28043,
    "rate":123.56911547002221,
    "state":"MS",
    "name":"Grenada County"
  },
  {
    "id":28037,
    "rate":66.52085710663117,
    "state":"MS",
    "name":"Franklin County"
  },
  {
    "id":28155,
    "rate":35.49796040195006,
    "state":"MS",
    "name":"Webster County"
  },
  {
    "id":28033,
    "rate":77.3938865678819,
    "state":"MS",
    "name":"Desoto County"
  },
  {
    "id":28029,
    "rate":170.21244204553315,
    "state":"MS",
    "name":"Copiah County"
  },
  {
    "id":35057,
    "rate":10.38887506222001,
    "state":"NM",
    "name":"Torrance County"
  },
  {
    "id":28027,
    "rate":28.18649016935955,
    "state":"MS",
    "name":"Coahoma County"
  },
  {
    "id":28021,
    "rate":34.929607508532435,
    "state":"MS",
    "name":"Claiborne County"
  },
  {
    "id":28081,
    "rate":439.72037831169564,
    "state":"MS",
    "name":"Lee County"
  },
  {
    "id":47177,
    "rate":53.64079989938373,
    "state":"TN",
    "name":"Warren County"
  },
  {
    "id":18029,
    "rate":113.39419870635973,
    "state":"IN",
    "name":"Dearborn County"
  },
  {
    "id":28011,
    "rate":600.5413816388245,
    "state":"MS",
    "name":"Bolivar County"
  },
  {
    "id":54069,
    "rate":513.3915925186127,
    "state":"WV",
    "name":"Ohio County"
  },
  {
    "id":28005,
    "rate":3.0103299414122726,
    "state":"MS",
    "name":"Amite County"
  },
  {
    "id":32001,
    "rate":14.101246041863721,
    "state":"NV",
    "name":"Churchill County"
  },
  {
    "id":18021,
    "rate":88.73096257680133,
    "state":"IN",
    "name":"Clay County"
  },
  {
    "id":28003,
    "rate":114.0349652227623,
    "state":"MS",
    "name":"Alcorn County"
  },
  {
    "id":27173,
    "rate":1.833202202989772,
    "state":"MN",
    "name":"Yellow Medicine County"
  },
  {
    "id":27171,
    "rate":0.6713217506047944,
    "state":"MN",
    "name":"Wright County"
  },
  {
    "id":12069,
    "rate":256.3139232163454,
    "state":"FL",
    "name":"Lake County"
  },
  {
    "id":31153,
    "rate":78.26066505047584,
    "state":"NE",
    "name":"Sarpy County"
  },
  {
    "id":49039,
    "rate":9.373506011630809,
    "state":"UT",
    "name":"Sanpete County"
  },
  {
    "id":22033,
    "rate":2141.0984568846015,
    "state":"LA",
    "name":"East Baton Rouge Parish"
  },
  {
    "id":27167,
    "rate":10.850484261501212,
    "state":"MN",
    "name":"Wilkin County"
  },
  {
    "id":27157,
    "rate":0.526561478853515,
    "state":"MN",
    "name":"Wabasha County"
  },
  {
    "id":40063,
    "rate":1.6735582154515778,
    "state":"OK",
    "name":"Hughes County"
  },
  {
    "id":1025,
    "rate":147.83653846153845,
    "state":"AL",
    "name":"Clarke County"
  },
  {
    "id":30083,
    "rate":22.839540485454883,
    "state":"MT",
    "name":"Richland County"
  },
  {
    "id":13221,
    "rate":44.00561759265604,
    "state":"GA",
    "name":"Oglethorpe County"
  },
  {
    "id":27155,
    "rate":3.779918272037361,
    "state":"MN",
    "name":"Traverse County"
  },
  {
    "id":19139,
    "rate":15.127607504952804,
    "state":"IA",
    "name":"Muscatine County"
  },
  {
    "id":27145,
    "rate":1006.2191551376231,
    "state":"MN",
    "name":"Stearns County"
  },
  {
    "id":39127,
    "rate":121.72236575270162,
    "state":"OH",
    "name":"Perry County"
  },
  {
    "id":37037,
    "rate":1134.5717281305556,
    "state":"NC",
    "name":"Chatham County"
  },
  {
    "id":31047,
    "rate":61.97178423236515,
    "state":"NE",
    "name":"Dawson County"
  },
  {
    "id":48039,
    "rate":259.72001589173925,
    "state":"TX",
    "name":"Brazoria County"
  },
  {
    "id":13277,
    "rate":110.85353954237205,
    "state":"GA",
    "name":"Tift County"
  },
  {
    "id":23001,
    "rate":267.8489572675013,
    "state":"ME",
    "name":"Androscoggin County"
  },
  {
    "id":28051,
    "rate":2.4548319327731094,
    "state":"MS",
    "name":"Holmes County"
  },
  {
    "id":48115,
    "rate":12.833931054673206,
    "state":"TX",
    "name":"Dawson County"
  },
  {
    "id":45079,
    "rate":619.5025363432454,
    "state":"SC",
    "name":"Richland County"
  },
  {
    "id":27141,
    "rate":0.4027355623100304,
    "state":"MN",
    "name":"Sherburne County"
  },
  {
    "id":27139,
    "rate":0.9571620802342261,
    "state":"MN",
    "name":"Scott County"
  },
  {
    "id":17019,
    "rate":378.47143998549086,
    "state":"IL",
    "name":"Champaign County"
  },
  {
    "id":27135,
    "rate":4.066636533867115,
    "state":"MN",
    "name":"Roseau County"
  },
  {
    "id":51690,
    "rate":247.3899759947625,
    "state":"VA",
    "name":"Martinsville City"
  },
  {
    "id":36067,
    "rate":1043.9319579949552,
    "state":"NY",
    "name":"Onondaga County"
  },
  {
    "id":19099,
    "rate":214.93076838879162,
    "state":"IA",
    "name":"Jasper County"
  },
  {
    "id":27123,
    "rate":208.6300941221188,
    "state":"MN",
    "name":"Ramsey County"
  },
  {
    "id":54065,
    "rate":902.375380026387,
    "state":"WV",
    "name":"Morgan County"
  },
  {
    "id":27119,
    "rate":6.2859772157522285,
    "state":"MN",
    "name":"Polk County"
  },
  {
    "id":56009,
    "rate":28.185647982863255,
    "state":"WY",
    "name":"Converse County"
  },
  {
    "id":27117,
    "rate":23.43539955190441,
    "state":"MN",
    "name":"Pipestone County"
  },
  {
    "id":21049,
    "rate":1942.1536696605947,
    "state":"KY",
    "name":"Clark County"
  },
  {
    "id":27107,
    "rate":6.591833659786048,
    "state":"MN",
    "name":"Norman County"
  },
  {
    "id":32003,
    "rate":987.6217399179243,
    "state":"NV",
    "name":"Clark County"
  },
  {
    "id":18173,
    "rate":307.57044292592536,
    "state":"IN",
    "name":"Warrick County"
  },
  {
    "id":27103,
    "rate":1.1179256740344912,
    "state":"MN",
    "name":"Nicollet County"
  },
  {
    "id":39073,
    "rate":82.40483424942815,
    "state":"OH",
    "name":"Hocking County"
  },
  {
    "id":27101,
    "rate":3.8336832283648237,
    "state":"MN",
    "name":"Murray County"
  },
  {
    "id":38081,
    "rate":14.205391527599486,
    "state":"ND",
    "name":"Sargent County"
  },
  {
    "id":27099,
    "rate":3.8621530334967114,
    "state":"MN",
    "name":"Mower County"
  },
  {
    "id":37145,
    "rate":117.77278644171622,
    "state":"NC",
    "name":"Person County"
  },
  {
    "id":13023,
    "rate":55.763355819182756,
    "state":"GA",
    "name":"Bleckley County"
  },
  {
    "id":16053,
    "rate":1.9764601376859872,
    "state":"ID",
    "name":"Jerome County"
  },
  {
    "id":27085,
    "rate":4.42059370747827,
    "state":"MN",
    "name":"McLeod County"
  },
  {
    "id":27083,
    "rate":1.379108439378562,
    "state":"MN",
    "name":"Lyon County"
  },
  {
    "id":48075,
    "rate":43.193348365276215,
    "state":"TX",
    "name":"Childress County"
  },
  {
    "id":30077,
    "rate":19.594918842625265,
    "state":"MT",
    "name":"Powell County"
  },
  {
    "id":29213,
    "rate":103.8196826354076,
    "state":"MO",
    "name":"Taney County"
  },
  {
    "id":22051,
    "rate":1952.8831617097194,
    "state":"LA",
    "name":"Jefferson Parish"
  },
  {
    "id":27077,
    "rate":5.544354838709677,
    "state":"MN",
    "name":"Lake of the Woods County"
  },
  {
    "id":26029,
    "rate":36.80671300741196,
    "state":"MI",
    "name":"Charlevoix County"
  },
  {
    "id":29145,
    "rate":1337.96336115673,
    "state":"MO",
    "name":"Newton County"
  },
  {
    "id":27063,
    "rate":4.694115362206254,
    "state":"MN",
    "name":"Jackson County"
  },
  {
    "id":17025,
    "rate":82.63525813733342,
    "state":"IL",
    "name":"Clay County"
  },
  {
    "id":27061,
    "rate":0.25391142932909044,
    "state":"MN",
    "name":"Itasca County"
  },
  {
    "id":18033,
    "rate":77.5550822387883,
    "state":"IN",
    "name":"De Kalb County"
  },
  {
    "id":27053,
    "rate":1198.3992565752321,
    "state":"MN",
    "name":"Hennepin County"
  },
  {
    "id":27049,
    "rate":0.3209535921367448,
    "state":"MN",
    "name":"Goodhue County"
  },
  {
    "id":31107,
    "rate":26.091619069821654,
    "state":"NE",
    "name":"Knox County"
  },
  {
    "id":5125,
    "rate":86.67505462621342,
    "state":"AR",
    "name":"Saline County"
  },
  {
    "id":27047,
    "rate":0.4186525827643952,
    "state":"MN",
    "name":"Freeborn County"
  },
  {
    "id":56021,
    "rate":59.43193918755074,
    "state":"WY",
    "name":"Laramie County"
  },
  {
    "id":27043,
    "rate":2.2396746371222216,
    "state":"MN",
    "name":"Faribault County"
  },
  {
    "id":36109,
    "rate":18.782267769108344,
    "state":"NY",
    "name":"Tompkins County"
  },
  {
    "id":27037,
    "rate":191.9905842737127,
    "state":"MN",
    "name":"Dakota County"
  },
  {
    "id":1107,
    "rate":85.68031430934656,
    "state":"AL",
    "name":"Pickens County"
  },
  {
    "id":27033,
    "rate":5.333104395604396,
    "state":"MN",
    "name":"Cottonwood County"
  },
  {
    "id":48401,
    "rate":20.854815851317646,
    "state":"TX",
    "name":"Rusk County"
  },
  {
    "id":28119,
    "rate":8.576006152268649,
    "state":"MS",
    "name":"Quitman County"
  },
  {
    "id":48201,
    "rate":807.825132651191,
    "state":"TX",
    "name":"Harris County"
  },
  {
    "id":48185,
    "rate":68.8575812004191,
    "state":"TX",
    "name":"Grimes County"
  },
  {
    "id":27013,
    "rate":101.37107692307693,
    "state":"MN",
    "name":"Blue Earth County"
  },
  {
    "id":48213,
    "rate":62.99460363304704,
    "state":"TX",
    "name":"Henderson County"
  },
  {
    "id":5001,
    "rate":126.68158365799722,
    "state":"AR",
    "name":"Arkansas County"
  },
  {
    "id":27011,
    "rate":14.989351403678603,
    "state":"MN",
    "name":"Big Stone County"
  },
  {
    "id":27007,
    "rate":0.8529873344974692,
    "state":"MN",
    "name":"Beltrami County"
  },
  {
    "id":51165,
    "rate":21.286074313408722,
    "state":"VA",
    "name":"Rockingham County"
  },
  {
    "id":47139,
    "rate":22.206705592006262,
    "state":"TN",
    "name":"Polk County"
  },
  {
    "id":36055,
    "rate":938.8690216970215,
    "state":"NY",
    "name":"Monroe County"
  },
  {
    "id":13081,
    "rate":1155.9724394470984,
    "state":"GA",
    "name":"Crisp County"
  },
  {
    "id":27005,
    "rate":4.540250772306015,
    "state":"MN",
    "name":"Becker County"
  },
  {
    "id":39079,
    "rate":43.7577951510358,
    "state":"OH",
    "name":"Jackson County"
  },
  {
    "id":26165,
    "rate":52.07338774007484,
    "state":"MI",
    "name":"Wexford County"
  },
  {
    "id":26161,
    "rate":789.7089105923404,
    "state":"MI",
    "name":"Washtenaw County"
  },
  {
    "id":29215,
    "rate":32.36445549168869,
    "state":"MO",
    "name":"Texas County"
  },
  {
    "id":26159,
    "rate":36.6082392026578,
    "state":"MI",
    "name":"Van Buren County"
  },
  {
    "id":45073,
    "rate":52.80425834305403,
    "state":"SC",
    "name":"Oconee County"
  },
  {
    "id":26155,
    "rate":62.535209235209244,
    "state":"MI",
    "name":"Shiawassee County"
  },
  {
    "id":37109,
    "rate":145.62521368062502,
    "state":"NC",
    "name":"Lincoln County"
  },
  {
    "id":17079,
    "rate":9.734549979261718,
    "state":"IL",
    "name":"Jasper County"
  },
  {
    "id":26147,
    "rate":373.6458359283524,
    "state":"MI",
    "name":"St. Clair County"
  },
  {
    "id":51730,
    "rate":204.80336991326513,
    "state":"VA",
    "name":"Petersburg City"
  },
  {
    "id":19035,
    "rate":78.18212169268007,
    "state":"IA",
    "name":"Cherokee County"
  },
  {
    "id":26139,
    "rate":28.477959132170984,
    "state":"MI",
    "name":"Ottawa County"
  },
  {
    "id":17075,
    "rate":83.37259722079963,
    "state":"IL",
    "name":"Iroquois County"
  },
  {
    "id":26133,
    "rate":56.42672969488614,
    "state":"MI",
    "name":"Osceola County"
  },
  {
    "id":26129,
    "rate":194.3243873978996,
    "state":"MI",
    "name":"Ogemaw County"
  },
  {
    "id":47025,
    "rate":85.65329801992688,
    "state":"TN",
    "name":"Claiborne County"
  },
  {
    "id":25025,
    "rate":13168.59688540688,
    "state":"MA",
    "name":"Suffolk County"
  },
  {
    "id":26127,
    "rate":87.7539129441334,
    "state":"MI",
    "name":"Oceana County"
  },
  {
    "id":31139,
    "rate":1911.649025069638,
    "state":"NE",
    "name":"Pierce County"
  },
  {
    "id":26125,
    "rate":1180.124206250705,
    "state":"MI",
    "name":"Oakland County"
  },
  {
    "id":26115,
    "rate":95.59606205250584,
    "state":"MI",
    "name":"Monroe County"
  },
  {
    "id":51177,
    "rate":70.17576127543859,
    "state":"VA",
    "name":"Spotsylvania County"
  },
  {
    "id":17021,
    "rate":33.753875575903336,
    "state":"IL",
    "name":"Christian County"
  },
  {
    "id":17181,
    "rate":34.724364791288565,
    "state":"IL",
    "name":"Union County"
  },
  {
    "id":21059,
    "rate":3063.8154246011854,
    "state":"KY",
    "name":"Daviess County"
  },
  {
    "id":18061,
    "rate":23.137420394383483,
    "state":"IN",
    "name":"Harrison County"
  },
  {
    "id":31121,
    "rate":59.38309606258818,
    "state":"NE",
    "name":"Merrick County"
  },
  {
    "id":26109,
    "rate":11.718039413845377,
    "state":"MI",
    "name":"Menominee County"
  },
  {
    "id":26107,
    "rate":32.01255692010487,
    "state":"MI",
    "name":"Mecosta County"
  },
  {
    "id":48171,
    "rate":104.66242544731608,
    "state":"TX",
    "name":"Gillespie County"
  },
  {
    "id":36029,
    "rate":1395.5233996772463,
    "state":"NY",
    "name":"Erie County"
  },
  {
    "id":26103,
    "rate":60.40876235432954,
    "state":"MI",
    "name":"Marquette County"
  },
  {
    "id":26093,
    "rate":39.71920027539027,
    "state":"MI",
    "name":"Livingston County"
  },
  {
    "id":26091,
    "rate":57.259304084720114,
    "state":"MI",
    "name":"Lenawee County"
  },
  {
    "id":26085,
    "rate":10.002615974886641,
    "state":"MI",
    "name":"Lake County"
  },
  {
    "id":30099,
    "rate":4.919301712779974,
    "state":"MT",
    "name":"Teton County"
  },
  {
    "id":26079,
    "rate":3210.507551808922,
    "state":"MI",
    "name":"Kalkaska County"
  },
  {
    "id":26073,
    "rate":63.43122803038892,
    "state":"MI",
    "name":"Isabella County"
  },
  {
    "id":26071,
    "rate":54.973243569825655,
    "state":"MI",
    "name":"Iron County"
  },
  {
    "id":26061,
    "rate":12.952238805970149,
    "state":"MI",
    "name":"Houghton County"
  },
  {
    "id":39165,
    "rate":503.5946667401785,
    "state":"OH",
    "name":"Warren County"
  },
  {
    "id":26057,
    "rate":58.53108419975732,
    "state":"MI",
    "name":"Gratiot County"
  },
  {
    "id":18031,
    "rate":84.22075681478358,
    "state":"IN",
    "name":"Decatur County"
  },
  {
    "id":29173,
    "rate":21.698573940222698,
    "state":"MO",
    "name":"Ralls County"
  },
  {
    "id":40073,
    "rate":88.00146705788212,
    "state":"OK",
    "name":"Kingfisher County"
  },
  {
    "id":26055,
    "rate":223.96865344643567,
    "state":"MI",
    "name":"Grand Traverse County"
  },
  {
    "id":22011,
    "rate":34.85353340321068,
    "state":"LA",
    "name":"Beauregard Parish"
  },
  {
    "id":26077,
    "rate":1388.517606462235,
    "state":"MI",
    "name":"Kalamazoo County"
  },
  {
    "id":37033,
    "rate":1.2729154984255704,
    "state":"NC",
    "name":"Caswell County"
  },
  {
    "id":26051,
    "rate":23.41108671789243,
    "state":"MI",
    "name":"Gladwin County"
  },
  {
    "id":26043,
    "rate":106.5262315083117,
    "state":"MI",
    "name":"Dickinson County"
  },
  {
    "id":39037,
    "rate":57.92252314021254,
    "state":"OH",
    "name":"Darke County"
  },
  {
    "id":26039,
    "rate":170.32534858777262,
    "state":"MI",
    "name":"Crawford County"
  },
  {
    "id":34041,
    "rate":200.42947466294729,
    "state":"NJ",
    "name":"Warren County"
  },
  {
    "id":26037,
    "rate":130.6475544971606,
    "state":"MI",
    "name":"Clinton County"
  },
  {
    "id":26035,
    "rate":49.59779077322935,
    "state":"MI",
    "name":"Clare County"
  },
  {
    "id":17141,
    "rate":50.02517080186983,
    "state":"IL",
    "name":"Ogle County"
  },
  {
    "id":26163,
    "rate":684.568600545524,
    "state":"MI",
    "name":"Wayne County"
  },
  {
    "id":26031,
    "rate":153.97765189726078,
    "state":"MI",
    "name":"Cheboygan County"
  },
  {
    "id":26025,
    "rate":68.89514692787176,
    "state":"MI",
    "name":"Calhoun County"
  },
  {
    "id":13037,
    "rate":93.1144263303599,
    "state":"GA",
    "name":"Calhoun County"
  },
  {
    "id":26017,
    "rate":239.52588622016373,
    "state":"MI",
    "name":"Bay County"
  },
  {
    "id":19097,
    "rate":76.72659860836002,
    "state":"IA",
    "name":"Jackson County"
  },
  {
    "id":26013,
    "rate":64.31771192281185,
    "state":"MI",
    "name":"Baraga County"
  },
  {
    "id":30013,
    "rate":503.20161438268195,
    "state":"MT",
    "name":"Cascade County"
  },
  {
    "id":26009,
    "rate":35.031034630366854,
    "state":"MI",
    "name":"Antrim County"
  },
  {
    "id":26005,
    "rate":67.37446287710272,
    "state":"MI",
    "name":"Allegan County"
  },
  {
    "id":36075,
    "rate":116.98850839265461,
    "state":"NY",
    "name":"Oswego County"
  },
  {
    "id":26003,
    "rate":18.40320202232989,
    "state":"MI",
    "name":"Alger County"
  },
  {
    "id":26001,
    "rate":1.1652042645532596,
    "state":"MI",
    "name":"Alcona County"
  },
  {
    "id":55079,
    "rate":830.9342277435483,
    "state":"WI",
    "name":"Milwaukee County"
  },
  {
    "id":25027,
    "rate":232.22872652527562,
    "state":"MA",
    "name":"Worcester County"
  },
  {
    "id":25023,
    "rate":50.74020790420698,
    "state":"MA",
    "name":"Plymouth County"
  },
  {
    "id":1073,
    "rate":1812.6501133059642,
    "state":"AL",
    "name":"Jefferson County"
  },
  {
    "id":19065,
    "rate":5.00192363181687,
    "state":"IA",
    "name":"Fayette County"
  },
  {
    "id":27131,
    "rate":0.7799211142610626,
    "state":"MN",
    "name":"Rice County"
  },
  {
    "id":25021,
    "rate":298.7332680091813,
    "state":"MA",
    "name":"Norfolk County"
  },
  {
    "id":6061,
    "rate":54.320451741062236,
    "state":"CA",
    "name":"Placer County"
  },
  {
    "id":25017,
    "rate":395.53721873636493,
    "state":"MA",
    "name":"Middlesex County"
  },
  {
    "id":37123,
    "rate":28.549046568006663,
    "state":"NC",
    "name":"Montgomery County"
  },
  {
    "id":25013,
    "rate":417.39646631899944,
    "state":"MA",
    "name":"Hampden County"
  },
  {
    "id":12049,
    "rate":43.63828700663893,
    "state":"FL",
    "name":"Hardee County"
  },
  {
    "id":25009,
    "rate":186.76185278614292,
    "state":"MA",
    "name":"Essex County"
  },
  {
    "id":41019,
    "rate":42.12855568629649,
    "state":"OR",
    "name":"Douglas County"
  },
  {
    "id":25005,
    "rate":629.3164779897063,
    "state":"MA",
    "name":"Bristol County"
  },
  {
    "id":48109,
    "rate":43.88189318280504,
    "state":"TX",
    "name":"Culberson County"
  },
  {
    "id":47189,
    "rate":138.538979578127,
    "state":"TN",
    "name":"Wilson County"
  },
  {
    "id":21157,
    "rate":972.9397467058973,
    "state":"KY",
    "name":"Marshall County"
  },
  {
    "id":24047,
    "rate":92.36217725052336,
    "state":"MD",
    "name":"Worcester County"
  },
  {
    "id":47051,
    "rate":34.48081402476402,
    "state":"TN",
    "name":"Franklin County"
  },
  {
    "id":24041,
    "rate":570.7288108874994,
    "state":"MD",
    "name":"Talbot County"
  },
  {
    "id":55099,
    "rate":5.339581831290555,
    "state":"WI",
    "name":"Price County"
  },
  {
    "id":24039,
    "rate":21.40481015562268,
    "state":"MD",
    "name":"Somerset County"
  },
  {
    "id":13183,
    "rate":1.6595507703731203,
    "state":"GA",
    "name":"Long County"
  },
  {
    "id":24037,
    "rate":45.9347333461775,
    "state":"MD",
    "name":"St. Mary's County"
  },
  {
    "id":28087,
    "rate":123.5619791753995,
    "state":"MS",
    "name":"Lowndes County"
  },
  {
    "id":42085,
    "rate":152.9486725357895,
    "state":"PA",
    "name":"Mercer County"
  },
  {
    "id":42047,
    "rate":110.0468013787433,
    "state":"PA",
    "name":"Elk County"
  },
  {
    "id":16071,
    "rate":7.5325597916173335,
    "state":"ID",
    "name":"Oneida County"
  },
  {
    "id":24043,
    "rate":263.02577063863447,
    "state":"MD",
    "name":"Washington County"
  },
  {
    "id":4027,
    "rate":511.5062986987306,
    "state":"AZ",
    "name":"Yuma County"
  },
  {
    "id":24031,
    "rate":1891.8416030249973,
    "state":"MD",
    "name":"Montgomery County"
  },
  {
    "id":30007,
    "rate":17.353349531412704,
    "state":"MT",
    "name":"Broadwater County"
  },
  {
    "id":40101,
    "rate":165.06564768602541,
    "state":"OK",
    "name":"Muskogee County"
  },
  {
    "id":24029,
    "rate":190.2325116255813,
    "state":"MD",
    "name":"Kent County"
  },
  {
    "id":18153,
    "rate":88.06991096245348,
    "state":"IN",
    "name":"Sullivan County"
  },
  {
    "id":24027,
    "rate":706.5213807831551,
    "state":"MD",
    "name":"Howard County"
  },
  {
    "id":16067,
    "rate":25.191398277664398,
    "state":"ID",
    "name":"Minidoka County"
  },
  {
    "id":24035,
    "rate":59.89561457689931,
    "state":"MD",
    "name":"Queen Anne's County"
  },
  {
    "id":51830,
    "rate":276.18115892454,
    "state":"VA",
    "name":"Williamsburg City"
  },
  {
    "id":22073,
    "rate":528.0842613453491,
    "state":"LA",
    "name":"Ouachita Parish"
  },
  {
    "id":24023,
    "rate":95.78074311895924,
    "state":"MD",
    "name":"Garrett County"
  },
  {
    "id":20063,
    "rate":53.20102903344358,
    "state":"KS",
    "name":"Gove County"
  },
  {
    "id":24019,
    "rate":82.87613888204878,
    "state":"MD",
    "name":"Dorchester County"
  },
  {
    "id":51183,
    "rate":20.93878234653714,
    "state":"VA",
    "name":"Sussex County"
  },
  {
    "id":24017,
    "rate":104.34409215404109,
    "state":"MD",
    "name":"Charles County"
  },
  {
    "id":20149,
    "rate":47.868104335376486,
    "state":"KS",
    "name":"Pottawatomie County"
  },
  {
    "id":24011,
    "rate":89.36802746107635,
    "state":"MD",
    "name":"Caroline County"
  },
  {
    "id":26149,
    "rate":46.381563823848154,
    "state":"MI",
    "name":"St Joseph County"
  },
  {
    "id":51047,
    "rate":37.683965917893104,
    "state":"VA",
    "name":"Culpeper County"
  },
  {
    "id":24009,
    "rate":33.57379462642622,
    "state":"MD",
    "name":"Calvert County"
  },
  {
    "id":23029,
    "rate":63.6927812836694,
    "state":"ME",
    "name":"Washington County"
  },
  {
    "id":51093,
    "rate":66.08592425098925,
    "state":"VA",
    "name":"Isle of Wight County"
  },
  {
    "id":47057,
    "rate":37.00220848056538,
    "state":"TN",
    "name":"Grainger County"
  },
  {
    "id":29101,
    "rate":70.68451615274356,
    "state":"MO",
    "name":"Johnson County"
  },
  {
    "id":35001,
    "rate":1067.7694336510697,
    "state":"NM",
    "name":"Bernalillo County"
  },
  {
    "id":28103,
    "rate":19.273378076062635,
    "state":"MS",
    "name":"Noxubee County"
  },
  {
    "id":23027,
    "rate":371.4975957211551,
    "state":"ME",
    "name":"Waldo County"
  },
  {
    "id":48289,
    "rate":2.797828550975362,
    "state":"TX",
    "name":"Leon County"
  },
  {
    "id":18107,
    "rate":97.47814250562796,
    "state":"IN",
    "name":"Montgomery County"
  },
  {
    "id":23025,
    "rate":14.87970055374404,
    "state":"ME",
    "name":"Somerset County"
  },
  {
    "id":6059,
    "rate":752.826550951766,
    "state":"CA",
    "name":"Orange County"
  },
  {
    "id":23023,
    "rate":32.83932334681324,
    "state":"ME",
    "name":"Sagadahoc County"
  },
  {
    "id":23021,
    "rate":19.17902665121668,
    "state":"ME",
    "name":"Piscataquis County"
  },
  {
    "id":23019,
    "rate":188.81207197354374,
    "state":"ME",
    "name":"Penobscot County"
  },
  {
    "id":6063,
    "rate":14.651776019854198,
    "state":"CA",
    "name":"Plumas County"
  },
  {
    "id":23017,
    "rate":79.0237581744817,
    "state":"ME",
    "name":"Oxford County"
  },
  {
    "id":23013,
    "rate":8.35412037972127,
    "state":"ME",
    "name":"Knox County"
  },
  {
    "id":42075,
    "rate":47.30745969228954,
    "state":"PA",
    "name":"Lebanon County"
  },
  {
    "id":27109,
    "rate":4111.519340020114,
    "state":"MN",
    "name":"Olmsted County"
  },
  {
    "id":47147,
    "rate":73.4514905798948,
    "state":"TN",
    "name":"Robertson County"
  },
  {
    "id":42067,
    "rate":63.35099337748344,
    "state":"PA",
    "name":"Juniata County"
  },
  {
    "id":20069,
    "rate":1.8985652318985655,
    "state":"KS",
    "name":"Gray County"
  },
  {
    "id":23011,
    "rate":76.5683549092823,
    "state":"ME",
    "name":"Kennebec County"
  },
  {
    "id":37041,
    "rate":94.63218781898604,
    "state":"NC",
    "name":"Chowan County"
  },
  {
    "id":22059,
    "rate":23.202988289137163,
    "state":"LA",
    "name":"La Salle Parish"
  },
  {
    "id":23003,
    "rate":74.53197444306231,
    "state":"ME",
    "name":"Aroostook County"
  },
  {
    "id":29135,
    "rate":12.192585029672644,
    "state":"MO",
    "name":"Moniteau County"
  },
  {
    "id":22121,
    "rate":19.038141931194946,
    "state":"LA",
    "name":"West Baton Rouge Parish"
  },
  {
    "id":13065,
    "rate":4.7535368577810875,
    "state":"GA",
    "name":"Clinch County"
  },
  {
    "id":22119,
    "rate":72.17961556309993,
    "state":"LA",
    "name":"Webster Parish"
  },
  {
    "id":22117,
    "rate":84.04123092748155,
    "state":"LA",
    "name":"Washington Parish"
  },
  {
    "id":51115,
    "rate":22.039009079699586,
    "state":"VA",
    "name":"Mathews County"
  },
  {
    "id":22115,
    "rate":54.92967365623153,
    "state":"LA",
    "name":"Vernon Parish"
  },
  {
    "id":22111,
    "rate":29.73330374972265,
    "state":"LA",
    "name":"Union Parish"
  },
  {
    "id":22109,
    "rate":222.87529870850534,
    "state":"LA",
    "name":"Terrebonne Parish"
  },
  {
    "id":39129,
    "rate":36.030064245909216,
    "state":"OH",
    "name":"Pickaway County"
  },
  {
    "id":31025,
    "rate":6.905679875988711,
    "state":"NE",
    "name":"Cass County"
  },
  {
    "id":22103,
    "rate":315.33382634345213,
    "state":"LA",
    "name":"St. Tammany Parish"
  },
  {
    "id":12005,
    "rate":591.4245264369683,
    "state":"FL",
    "name":"Bay County"
  },
  {
    "id":22101,
    "rate":189.9267645630161,
    "state":"LA",
    "name":"St. Mary Parish"
  },
  {
    "id":22097,
    "rate":101.0107447025143,
    "state":"LA",
    "name":"St. Landry Parish"
  },
  {
    "id":22089,
    "rate":22.57909491389668,
    "state":"LA",
    "name":"St. Charles Parish"
  },
  {
    "id":13139,
    "rate":518.9317282963412,
    "state":"GA",
    "name":"Hall County"
  },
  {
    "id":22087,
    "rate":46.293074365029646,
    "state":"LA",
    "name":"St Bernard Parish"
  },
  {
    "id":49053,
    "rate":111.35270977510146,
    "state":"UT",
    "name":"Washington County"
  },
  {
    "id":22021,
    "rate":45.80099999999999,
    "state":"LA",
    "name":"Caldwell Parish"
  },
  {
    "id":22085,
    "rate":7.790668970624535,
    "state":"LA",
    "name":"Sabine Parish"
  },
  {
    "id":22083,
    "rate":29.98040433972184,
    "state":"LA",
    "name":"Richland Parish"
  },
  {
    "id":22081,
    "rate":34.30486318821313,
    "state":"LA",
    "name":"Red River Parish"
  },
  {
    "id":24003,
    "rate":354.19051596560826,
    "state":"MD",
    "name":"Anne Arundel County"
  },
  {
    "id":29183,
    "rate":340.3685556317804,
    "state":"MO",
    "name":"St. Charles County"
  },
  {
    "id":22077,
    "rate":83.43622033375898,
    "state":"LA",
    "name":"Pointe Coupee Parish"
  },
  {
    "id":28125,
    "rate":188.4645916022561,
    "state":"MS",
    "name":"Sharkey County"
  },
  {
    "id":28131,
    "rate":66.69732395146545,
    "state":"MS",
    "name":"Stone County"
  },
  {
    "id":13253,
    "rate":91.73079080201909,
    "state":"GA",
    "name":"Seminole County"
  },
  {
    "id":22069,
    "rate":1370.8778287423027,
    "state":"LA",
    "name":"Natchitoches Parish"
  },
  {
    "id":42087,
    "rate":53.00070469153729,
    "state":"PA",
    "name":"Mifflin County"
  },
  {
    "id":22065,
    "rate":13.09496473675578,
    "state":"LA",
    "name":"Madison Parish"
  },
  {
    "id":51191,
    "rate":2246.484847384379,
    "state":"VA",
    "name":"Washington County"
  },
  {
    "id":12009,
    "rate":438.1791191394803,
    "state":"FL",
    "name":"Brevard County"
  },
  {
    "id":22061,
    "rate":119.0478513553642,
    "state":"LA",
    "name":"Lincoln Parish"
  },
  {
    "id":22053,
    "rate":72.25675116893032,
    "state":"LA",
    "name":"Jefferson Davis Parish"
  },
  {
    "id":39135,
    "rate":49.77252655448143,
    "state":"OH",
    "name":"Preble County"
  },
  {
    "id":22049,
    "rate":7.410692288741069,
    "state":"LA",
    "name":"Jackson Parish"
  },
  {
    "id":22043,
    "rate":9.080264569181265,
    "state":"LA",
    "name":"Grant Parish"
  },
  {
    "id":22037,
    "rate":38.46619929894843,
    "state":"LA",
    "name":"East Feliciana Parish"
  },
  {
    "id":27003,
    "rate":262.19895755239014,
    "state":"MN",
    "name":"Anoka County"
  },
  {
    "id":5011,
    "rate":154.41848114710567,
    "state":"AR",
    "name":"Bradley County"
  },
  {
    "id":22035,
    "rate":1991.328846661388,
    "state":"LA",
    "name":"East Carroll Parish"
  },
  {
    "id":22093,
    "rate":31.4909208221956,
    "state":"LA",
    "name":"St. James Parish"
  },
  {
    "id":17081,
    "rate":102.9509424218952,
    "state":"IL",
    "name":"Jefferson County"
  },
  {
    "id":17203,
    "rate":27.402183686576763,
    "state":"IL",
    "name":"Woodford County"
  },
  {
    "id":22029,
    "rate":16.744106426684926,
    "state":"LA",
    "name":"Concordia Parish"
  },
  {
    "id":22027,
    "rate":36.425478915841296,
    "state":"LA",
    "name":"Claiborne Parish"
  },
  {
    "id":22023,
    "rate":10.40163068096029,
    "state":"LA",
    "name":"Cameron Parish"
  },
  {
    "id":22017,
    "rate":460.2639821550714,
    "state":"LA",
    "name":"Caddo Parish"
  },
  {
    "id":21163,
    "rate":50.12877442273535,
    "state":"KY",
    "name":"Meade County"
  },
  {
    "id":28053,
    "rate":191.95156385751517,
    "state":"MS",
    "name":"Humphreys County"
  },
  {
    "id":4009,
    "rate":18.745161726891325,
    "state":"AZ",
    "name":"Graham County"
  },
  {
    "id":22015,
    "rate":521.018338709547,
    "state":"LA",
    "name":"Bossier Parish"
  },
  {
    "id":39109,
    "rate":38.782268857037565,
    "state":"OH",
    "name":"Miami County"
  },
  {
    "id":13289,
    "rate":40.312904364192455,
    "state":"GA",
    "name":"Twiggs County"
  },
  {
    "id":17165,
    "rate":142.0699731796165,
    "state":"IL",
    "name":"Saline County"
  },
  {
    "id":18035,
    "rate":936.7002531775049,
    "state":"IN",
    "name":"Delaware County"
  },
  {
    "id":22007,
    "rate":30.78966757682138,
    "state":"LA",
    "name":"Assumption Parish"
  },
  {
    "id":22003,
    "rate":40.490375980947185,
    "state":"LA",
    "name":"Allen Parish"
  },
  {
    "id":49011,
    "rate":169.14296021112733,
    "state":"UT",
    "name":"Davis County"
  },
  {
    "id":18099,
    "rate":38.362147793726756,
    "state":"IN",
    "name":"Marshall County"
  },
  {
    "id":22095,
    "rate":91.75653028847228,
    "state":"LA",
    "name":"St. John the Baptist Parish"
  },
  {
    "id":21237,
    "rate":216.43016138007792,
    "state":"KY",
    "name":"Wolfe County"
  },
  {
    "id":1035,
    "rate":90.62206843521722,
    "state":"AL",
    "name":"Conecuh County"
  },
  {
    "id":22125,
    "rate":34.05204220337886,
    "state":"LA",
    "name":"West Feliciana Parish"
  },
  {
    "id":21229,
    "rate":29.79969702070358,
    "state":"KY",
    "name":"Washington County"
  },
  {
    "id":55065,
    "rate":31.28378378378378,
    "state":"WI",
    "name":"Lafayette County"
  },
  {
    "id":31087,
    "rate":11.189732917100244,
    "state":"NE",
    "name":"Hitchcock County"
  },
  {
    "id":21217,
    "rate":165.22695516787098,
    "state":"KY",
    "name":"Taylor County"
  },
  {
    "id":28095,
    "rate":74.0815877728297,
    "state":"MS",
    "name":"Monroe County"
  },
  {
    "id":21213,
    "rate":33.63631186286234,
    "state":"KY",
    "name":"Simpson County"
  },
  {
    "id":21209,
    "rate":44.03952843273234,
    "state":"KY",
    "name":"Scott County"
  },
  {
    "id":42091,
    "rate":840.1832222109667,
    "state":"PA",
    "name":"Montgomery County"
  },
  {
    "id":21205,
    "rate":967.6501238575207,
    "state":"KY",
    "name":"Rowan County"
  },
  {
    "id":21203,
    "rate":1946.536996894956,
    "state":"KY",
    "name":"Rockcastle County"
  },
  {
    "id":13083,
    "rate":0.7117394719352306,
    "state":"GA",
    "name":"Dade County"
  },
  {
    "id":21197,
    "rate":65.12605042016808,
    "state":"KY",
    "name":"Powell County"
  },
  {
    "id":48217,
    "rate":29.553960522942823,
    "state":"TX",
    "name":"Hill County"
  },
  {
    "id":28017,
    "rate":87.86108238538438,
    "state":"MS",
    "name":"Chickasaw County"
  },
  {
    "id":39087,
    "rate":91.47356218200554,
    "state":"OH",
    "name":"Lawrence County"
  },
  {
    "id":21191,
    "rate":39.813019866639166,
    "state":"KY",
    "name":"Pendleton County"
  },
  {
    "id":21177,
    "rate":100.33483210561558,
    "state":"KY",
    "name":"Muhlenberg County"
  },
  {
    "id":22047,
    "rate":18.879460269865067,
    "state":"LA",
    "name":"Iberville Parish"
  },
  {
    "id":46057,
    "rate":2.612354822420468,
    "state":"SD",
    "name":"Hamlin County"
  },
  {
    "id":21171,
    "rate":106.99235657058667,
    "state":"KY",
    "name":"Monroe County"
  },
  {
    "id":48437,
    "rate":3.648820096422228,
    "state":"TX",
    "name":"Swisher County"
  },
  {
    "id":21167,
    "rate":35.67399147261397,
    "state":"KY",
    "name":"Mercer County"
  },
  {
    "id":17099,
    "rate":164.93320458531923,
    "state":"IL",
    "name":"La Salle County"
  },
  {
    "id":21165,
    "rate":145.21856192587902,
    "state":"KY",
    "name":"Menifee County"
  },
  {
    "id":13173,
    "rate":2.7613941018766752,
    "state":"GA",
    "name":"Lanier County"
  },
  {
    "id":17031,
    "rate":724.1329653653988,
    "state":"IL",
    "name":"Cook County"
  },
  {
    "id":21161,
    "rate":3258.5718375994957,
    "state":"KY",
    "name":"Mason County"
  },
  {
    "id":48183,
    "rate":773.9863787267282,
    "state":"TX",
    "name":"Gregg County"
  },
  {
    "id":8055,
    "rate":37.374013357619916,
    "state":"CO",
    "name":"Huerfano County"
  },
  {
    "id":21147,
    "rate":56.61768782922097,
    "state":"KY",
    "name":"McCreary County"
  },
  {
    "id":28111,
    "rate":27.7864238410596,
    "state":"MS",
    "name":"Perry County"
  },
  {
    "id":21143,
    "rate":17.653194263363755,
    "state":"KY",
    "name":"Lyon County"
  },
  {
    "id":21141,
    "rate":30.663221360895783,
    "state":"KY",
    "name":"Logan County"
  },
  {
    "id":1113,
    "rate":31.694956353055293,
    "state":"AL",
    "name":"Russell County"
  },
  {
    "id":21137,
    "rate":56.22951491314324,
    "state":"KY",
    "name":"Lincoln County"
  },
  {
    "id":18081,
    "rate":639.8441091653782,
    "state":"IN",
    "name":"Johnson County"
  },
  {
    "id":16063,
    "rate":5.384322678843227,
    "state":"ID",
    "name":"Lincoln County"
  },
  {
    "id":21135,
    "rate":50.23045802629677,
    "state":"KY",
    "name":"Lewis County"
  },
  {
    "id":5019,
    "rate":54.949171851722035,
    "state":"AR",
    "name":"Clark County"
  },
  {
    "id":13267,
    "rate":18.985180794309425,
    "state":"GA",
    "name":"Tattnall County"
  },
  {
    "id":21133,
    "rate":69.41493360060133,
    "state":"KY",
    "name":"Letcher County"
  },
  {
    "id":26067,
    "rate":41.45721171904344,
    "state":"MI",
    "name":"Ionia County"
  },
  {
    "id":18075,
    "rate":38.65091249415068,
    "state":"IN",
    "name":"Jay County"
  },
  {
    "id":21131,
    "rate":20.527638190954775,
    "state":"KY",
    "name":"Leslie County"
  },
  {
    "id":48481,
    "rate":40.29674095316792,
    "state":"TX",
    "name":"Wharton County"
  },
  {
    "id":37101,
    "rate":72.2448582847799,
    "state":"NC",
    "name":"Johnston County"
  },
  {
    "id":24510,
    "rate":817.8110602777092,
    "state":"MD",
    "name":"Baltimore City"
  },
  {
    "id":51187,
    "rate":49.49714195400783,
    "state":"VA",
    "name":"Warren County"
  },
  {
    "id":8103,
    "rate":60.78021492713087,
    "state":"CO",
    "name":"Rio Grande County"
  },
  {
    "id":21127,
    "rate":72.82807859986102,
    "state":"KY",
    "name":"Lawrence County"
  },
  {
    "id":19057,
    "rate":55.38973454843434,
    "state":"IA",
    "name":"Des Moines County"
  },
  {
    "id":26027,
    "rate":34.97829177392707,
    "state":"MI",
    "name":"Cass County"
  },
  {
    "id":17055,
    "rate":28.560533841754044,
    "state":"IL",
    "name":"Franklin County"
  },
  {
    "id":21125,
    "rate":105.60289996140096,
    "state":"KY",
    "name":"Laurel County"
  },
  {
    "id":37095,
    "rate":44.59393516904845,
    "state":"NC",
    "name":"Hyde County"
  },
  {
    "id":17017,
    "rate":72.51527343167935,
    "state":"IL",
    "name":"Cass County"
  },
  {
    "id":21123,
    "rate":26.484913028044016,
    "state":"KY",
    "name":"Larue County"
  },
  {
    "id":33007,
    "rate":38.99928073302686,
    "state":"NH",
    "name":"Coos County"
  },
  {
    "id":21119,
    "rate":109.61894697581899,
    "state":"KY",
    "name":"Knott County"
  },
  {
    "id":20029,
    "rate":20.416311754684838,
    "state":"KS",
    "name":"Cloud County"
  },
  {
    "id":21115,
    "rate":136.7875293615204,
    "state":"KY",
    "name":"Johnson County"
  },
  {
    "id":21175,
    "rate":8.559347181008901,
    "state":"KY",
    "name":"Morgan County"
  },
  {
    "id":18179,
    "rate":128.11619336657273,
    "state":"IN",
    "name":"Wells County"
  },
  {
    "id":21107,
    "rate":433.95464862318545,
    "state":"KY",
    "name":"Hopkins County"
  },
  {
    "id":21101,
    "rate":73.41677069433086,
    "state":"KY",
    "name":"Henderson County"
  },
  {
    "id":18077,
    "rate":50.46391435427306,
    "state":"IN",
    "name":"Jefferson County"
  },
  {
    "id":21097,
    "rate":138.9334122203098,
    "state":"KY",
    "name":"Harrison County"
  },
  {
    "id":17145,
    "rate":106.83507023108294,
    "state":"IL",
    "name":"Perry County"
  },
  {
    "id":21095,
    "rate":6.597707576181158,
    "state":"KY",
    "name":"Harlan County"
  },
  {
    "id":20061,
    "rate":35.3064231771176,
    "state":"KS",
    "name":"Geary County"
  },
  {
    "id":21093,
    "rate":151.15112281881702,
    "state":"KY",
    "name":"Hardin County"
  },
  {
    "id":21091,
    "rate":21.110598546880404,
    "state":"KY",
    "name":"Hancock County"
  },
  {
    "id":48203,
    "rate":76.33270911360799,
    "state":"TX",
    "name":"Harrison County"
  },
  {
    "id":31129,
    "rate":260.53486797562624,
    "state":"NE",
    "name":"Nuckolls County"
  },
  {
    "id":21089,
    "rate":97.77983550302305,
    "state":"KY",
    "name":"Greenup County"
  },
  {
    "id":21085,
    "rate":54.2567175720085,
    "state":"KY",
    "name":"Grayson County"
  },
  {
    "id":42005,
    "rate":73.27301717328342,
    "state":"PA",
    "name":"Armstrong County"
  },
  {
    "id":13185,
    "rate":61.23731119405589,
    "state":"GA",
    "name":"Lowndes County"
  },
  {
    "id":21083,
    "rate":39.430131876914885,
    "state":"KY",
    "name":"Graves County"
  },
  {
    "id":21207,
    "rate":94.61946297246452,
    "state":"KY",
    "name":"Russell County"
  },
  {
    "id":26097,
    "rate":47.380717045556665,
    "state":"MI",
    "name":"Mackinac County"
  },
  {
    "id":21079,
    "rate":6.302446519323957,
    "state":"KY",
    "name":"Garrard County"
  },
  {
    "id":31001,
    "rate":208.1385419321946,
    "state":"NE",
    "name":"Adams County"
  },
  {
    "id":45007,
    "rate":115.06307923850756,
    "state":"SC",
    "name":"Anderson County"
  },
  {
    "id":29109,
    "rate":30.81333229093371,
    "state":"MO",
    "name":"Lawrence County"
  },
  {
    "id":13005,
    "rate":96.06025388878956,
    "state":"GA",
    "name":"Bacon County"
  },
  {
    "id":13317,
    "rate":19.729245470834165,
    "state":"GA",
    "name":"Wilkes County"
  },
  {
    "id":21121,
    "rate":76.38517350157728,
    "state":"KY",
    "name":"Knox County"
  },
  {
    "id":21073,
    "rate":172.12519492091786,
    "state":"KY",
    "name":"Franklin County"
  },
  {
    "id":42023,
    "rate":31.570214488061513,
    "state":"PA",
    "name":"Cameron County"
  },
  {
    "id":21069,
    "rate":173.05670244976605,
    "state":"KY",
    "name":"Fleming County"
  },
  {
    "id":21067,
    "rate":1509.4193958414567,
    "state":"KY",
    "name":"Fayette County"
  },
  {
    "id":21061,
    "rate":25.8441879637263,
    "state":"KY",
    "name":"Edmonson County"
  },
  {
    "id":54085,
    "rate":16.33070406076541,
    "state":"WV",
    "name":"Ritchie County"
  },
  {
    "id":5027,
    "rate":63.905987459530344,
    "state":"AR",
    "name":"Columbia County"
  },
  {
    "id":21057,
    "rate":138.77241580405308,
    "state":"KY",
    "name":"Cumberland County"
  },
  {
    "id":49003,
    "rate":54.878155523284725,
    "state":"UT",
    "name":"Box Elder County"
  },
  {
    "id":13103,
    "rate":38.066632918986826,
    "state":"GA",
    "name":"Effingham County"
  },
  {
    "id":21055,
    "rate":8.41029523088569,
    "state":"KY",
    "name":"Crittenden County"
  },
  {
    "id":21047,
    "rate":43.49109146100041,
    "state":"KY",
    "name":"Christian County"
  },
  {
    "id":48367,
    "rate":96.07622101422047,
    "state":"TX",
    "name":"Parker County"
  },
  {
    "id":21045,
    "rate":22.947283351983092,
    "state":"KY",
    "name":"Casey County"
  },
  {
    "id":36057,
    "rate":111.58124711871879,
    "state":"NY",
    "name":"Montgomery County"
  },
  {
    "id":29113,
    "rate":11.831183924420785,
    "state":"MO",
    "name":"Lincoln County"
  },
  {
    "id":38095,
    "rate":16.95221696082652,
    "state":"ND",
    "name":"Towner County"
  },
  {
    "id":27169,
    "rate":1.9483302809492264,
    "state":"MN",
    "name":"Winona County"
  },
  {
    "id":36087,
    "rate":639.4544796664811,
    "state":"NY",
    "name":"Rockland County"
  },
  {
    "id":21043,
    "rate":908.9443413053766,
    "state":"KY",
    "name":"Carter County"
  },
  {
    "id":29047,
    "rate":285.5998752684584,
    "state":"MO",
    "name":"Clay County"
  },
  {
    "id":28025,
    "rate":38.84432458936013,
    "state":"MS",
    "name":"Clay County"
  },
  {
    "id":29085,
    "rate":6.830281090289609,
    "state":"MO",
    "name":"Hickory County"
  },
  {
    "id":26105,
    "rate":29.49352959642819,
    "state":"MI",
    "name":"Mason County"
  },
  {
    "id":34031,
    "rate":213.91667145202175,
    "state":"NJ",
    "name":"Passaic County"
  },
  {
    "id":21041,
    "rate":68.50744896082398,
    "state":"KY",
    "name":"Carroll County"
  },
  {
    "id":21031,
    "rate":56.160393565516166,
    "state":"KY",
    "name":"Butler County"
  },
  {
    "id":21129,
    "rate":39.95945592466648,
    "state":"KY",
    "name":"Lee County"
  },
  {
    "id":21029,
    "rate":150.32247441149738,
    "state":"KY",
    "name":"Bullitt County"
  },
  {
    "id":55127,
    "rate":22.758898420215036,
    "state":"WI",
    "name":"Walworth County"
  },
  {
    "id":21023,
    "rate":104.24503780718332,
    "state":"KY",
    "name":"Bracken County"
  },
  {
    "id":21019,
    "rate":4170.247139030924,
    "state":"KY",
    "name":"Boyd County"
  },
  {
    "id":21009,
    "rate":285.70882842344645,
    "state":"KY",
    "name":"Barren County"
  },
  {
    "id":30081,
    "rate":27.429190146910454,
    "state":"MT",
    "name":"Ravalli County"
  },
  {
    "id":13135,
    "rate":662.3207941720086,
    "state":"GA",
    "name":"Gwinnett County"
  },
  {
    "id":20195,
    "rate":215.00168406871003,
    "state":"KS",
    "name":"Trego County"
  },
  {
    "id":46053,
    "rate":50.353107344632775,
    "state":"SD",
    "name":"Gregory County"
  },
  {
    "id":37143,
    "rate":43.33801359739876,
    "state":"NC",
    "name":"Perquimans County"
  },
  {
    "id":22105,
    "rate":438.8053358326533,
    "state":"LA",
    "name":"Tangipahoa Parish"
  },
  {
    "id":20191,
    "rate":122.88661098456087,
    "state":"KS",
    "name":"Sumner County"
  },
  {
    "id":20189,
    "rate":6.071117308697925,
    "state":"KS",
    "name":"Stevens County"
  },
  {
    "id":51750,
    "rate":47.157938685434814,
    "state":"VA",
    "name":"Radford City"
  },
  {
    "id":20185,
    "rate":6.311437758383096,
    "state":"KS",
    "name":"Stafford County"
  },
  {
    "id":13263,
    "rate":47.94585500152952,
    "state":"GA",
    "name":"Talbot County"
  },
  {
    "id":20183,
    "rate":34.93873201917953,
    "state":"KS",
    "name":"Smith County"
  },
  {
    "id":34029,
    "rate":298.22523845850384,
    "state":"NJ",
    "name":"Ocean County"
  },
  {
    "id":5131,
    "rate":220.9334223129465,
    "state":"AR",
    "name":"Sebastian County"
  },
  {
    "id":21051,
    "rate":87.8858920198691,
    "state":"KY",
    "name":"Clay County"
  },
  {
    "id":39151,
    "rate":188.5761276691098,
    "state":"OH",
    "name":"Stark County"
  },
  {
    "id":27093,
    "rate":0.4643291095295955,
    "state":"MN",
    "name":"Meeker County"
  },
  {
    "id":20177,
    "rate":3641.0644256137357,
    "state":"KS",
    "name":"Shawnee County"
  },
  {
    "id":35009,
    "rate":24.4705371590954,
    "state":"NM",
    "name":"Curry County"
  },
  {
    "id":20175,
    "rate":10.099347631433078,
    "state":"KS",
    "name":"Seward County"
  },
  {
    "id":21193,
    "rate":307.9553732451642,
    "state":"KY",
    "name":"Perry County"
  },
  {
    "id":35025,
    "rate":12.748393325890842,
    "state":"NM",
    "name":"Lea County"
  },
  {
    "id":20167,
    "rate":28.78069797501077,
    "state":"KS",
    "name":"Russell County"
  },
  {
    "id":17023,
    "rate":38.833415112855754,
    "state":"IL",
    "name":"Clark County"
  },
  {
    "id":20157,
    "rate":337.2066694112805,
    "state":"KS",
    "name":"Republic County"
  },
  {
    "id":20141,
    "rate":25.58060288335518,
    "state":"KS",
    "name":"Osborne County"
  },
  {
    "id":20137,
    "rate":38.481712756467445,
    "state":"KS",
    "name":"Norton County"
  },
  {
    "id":37025,
    "rate":1089.600080222454,
    "state":"NC",
    "name":"Cabarrus County"
  },
  {
    "id":20133,
    "rate":11.328713834184292,
    "state":"KS",
    "name":"Neosho County"
  },
  {
    "id":22067,
    "rate":62.456345011118806,
    "state":"LA",
    "name":"Morehouse Parish"
  },
  {
    "id":20131,
    "rate":17.25059382422803,
    "state":"KS",
    "name":"Nemaha County"
  },
  {
    "id":29115,
    "rate":32.141598590421275,
    "state":"MO",
    "name":"Linn County"
  },
  {
    "id":20125,
    "rate":18.268521476490577,
    "state":"KS",
    "name":"Montgomery County"
  },
  {
    "id":21185,
    "rate":95.17949302378588,
    "state":"KY",
    "name":"Oldham County"
  },
  {
    "id":53001,
    "rate":5.865496457650417,
    "state":"WA",
    "name":"Adams County"
  },
  {
    "id":51007,
    "rate":2.7226363279717534,
    "state":"VA",
    "name":"Amelia County"
  },
  {
    "id":1083,
    "rate":202.88955278550415,
    "state":"AL",
    "name":"Limestone County"
  },
  {
    "id":29055,
    "rate":98.72083636070074,
    "state":"MO",
    "name":"Crawford County"
  },
  {
    "id":21159,
    "rate":33.971636762516646,
    "state":"KY",
    "name":"Martin County"
  },
  {
    "id":20163,
    "rate":4.9913411583605924,
    "state":"KS",
    "name":"Rooks County"
  },
  {
    "id":20121,
    "rate":4.645606502070235,
    "state":"KS",
    "name":"Miami County"
  },
  {
    "id":55049,
    "rate":37.608348060254144,
    "state":"WI",
    "name":"Iowa County"
  },
  {
    "id":51163,
    "rate":13.461504108610216,
    "state":"VA",
    "name":"Rockbridge County"
  },
  {
    "id":8071,
    "rate":45.25356999866541,
    "state":"CO",
    "name":"Las Animas County"
  },
  {
    "id":29117,
    "rate":15.440990481262064,
    "state":"MO",
    "name":"Livingston County"
  },
  {
    "id":20119,
    "rate":3.6874292185730466,
    "state":"KS",
    "name":"Meade County"
  },
  {
    "id":20115,
    "rate":8.4877141933398,
    "state":"KS",
    "name":"Marion County"
  },
  {
    "id":21189,
    "rate":2.7609714529186196,
    "state":"KY",
    "name":"Owsley County"
  },
  {
    "id":30023,
    "rate":6.473649967469096,
    "state":"MT",
    "name":"Deer Lodge County"
  },
  {
    "id":20111,
    "rate":20.25649437800113,
    "state":"KS",
    "name":"Lyon County"
  },
  {
    "id":26019,
    "rate":259.696324840398,
    "state":"MI",
    "name":"Benzie County"
  },
  {
    "id":20109,
    "rate":120.85509838998212,
    "state":"KS",
    "name":"Logan County"
  },
  {
    "id":20107,
    "rate":4.673557641598987,
    "state":"KS",
    "name":"Linn County"
  },
  {
    "id":20095,
    "rate":24.837761880429227,
    "state":"KS",
    "name":"Kingman County"
  },
  {
    "id":13131,
    "rate":20.92604273436884,
    "state":"GA",
    "name":"Grady County"
  },
  {
    "id":17037,
    "rate":137.27355219546672,
    "state":"IL",
    "name":"Dekalb County"
  },
  {
    "id":28145,
    "rate":160.4467680608365,
    "state":"MS",
    "name":"Union County"
  },
  {
    "id":51125,
    "rate":9.354359424596474,
    "state":"VA",
    "name":"Nelson County"
  },
  {
    "id":19079,
    "rate":140.18095113666055,
    "state":"IA",
    "name":"Hamilton County"
  },
  {
    "id":20093,
    "rate":12.356639839034205,
    "state":"KS",
    "name":"Kearny County"
  },
  {
    "id":22075,
    "rate":19.078281243462616,
    "state":"LA",
    "name":"Plaquemines Parish"
  },
  {
    "id":22055,
    "rate":392.85089515756175,
    "state":"LA",
    "name":"Lafayette Parish"
  },
  {
    "id":48175,
    "rate":12.699645680021804,
    "state":"TX",
    "name":"Goliad County"
  },
  {
    "id":46041,
    "rate":9.00974025974026,
    "state":"SD",
    "name":"Dewey County"
  },
  {
    "id":21179,
    "rate":45.85623773984803,
    "state":"KY",
    "name":"Nelson County"
  },
  {
    "id":20087,
    "rate":403.5125125654728,
    "state":"KS",
    "name":"Jefferson County"
  },
  {
    "id":5147,
    "rate":1.8314241267147504,
    "state":"AR",
    "name":"Woodruff County"
  },
  {
    "id":24033,
    "rate":379.4949669821359,
    "state":"MD",
    "name":"Prince George's County"
  },
  {
    "id":23005,
    "rate":817.918077803204,
    "state":"ME",
    "name":"Cumberland County"
  },
  {
    "id":55111,
    "rate":33.836744483530545,
    "state":"WI",
    "name":"Sauk County"
  },
  {
    "id":22009,
    "rate":44.63054660833614,
    "state":"LA",
    "name":"Avoyelles Parish"
  },
  {
    "id":20083,
    "rate":5.76036866359447,
    "state":"KS",
    "name":"Hodgeman County"
  },
  {
    "id":29049,
    "rate":48.21214337966351,
    "state":"MO",
    "name":"Clinton County"
  },
  {
    "id":48091,
    "rate":1260.4074823844212,
    "state":"TX",
    "name":"Comal County"
  },
  {
    "id":21235,
    "rate":105.20602732009573,
    "state":"KY",
    "name":"Whitley County"
  },
  {
    "id":21233,
    "rate":28.433860078640855,
    "state":"KY",
    "name":"Webster County"
  },
  {
    "id":20081,
    "rate":6.429755981994788,
    "state":"KS",
    "name":"Haskell County"
  },
  {
    "id":47149,
    "rate":221.45779845956332,
    "state":"TN",
    "name":"Rutherford County"
  },
  {
    "id":20079,
    "rate":830.0815365622578,
    "state":"KS",
    "name":"Harvey County"
  },
  {
    "id":47173,
    "rate":8.72001254377254,
    "state":"TN",
    "name":"Union County"
  },
  {
    "id":28137,
    "rate":21.644215252929204,
    "state":"MS",
    "name":"Tate County"
  },
  {
    "id":13315,
    "rate":38.732690816439565,
    "state":"GA",
    "name":"Wilcox County"
  },
  {
    "id":20077,
    "rate":69.1351719441607,
    "state":"KS",
    "name":"Harper County"
  },
  {
    "id":20067,
    "rate":7.315333672949566,
    "state":"KS",
    "name":"Grant County"
  },
  {
    "id":28109,
    "rate":45.82664730441097,
    "state":"MS",
    "name":"Pearl River County"
  },
  {
    "id":28059,
    "rate":66.56409633561718,
    "state":"MS",
    "name":"Jackson County"
  },
  {
    "id":19129,
    "rate":119.18285061487802,
    "state":"IA",
    "name":"Mills County"
  },
  {
    "id":26023,
    "rate":84.07189871103391,
    "state":"MI",
    "name":"Branch County"
  },
  {
    "id":20059,
    "rate":121.94412242058893,
    "state":"KS",
    "name":"Franklin County"
  },
  {
    "id":20057,
    "rate":26.13320679837805,
    "state":"KS",
    "name":"Ford County"
  },
  {
    "id":29141,
    "rate":9.007000645449581,
    "state":"MO",
    "name":"Morgan County"
  },
  {
    "id":22039,
    "rate":82.99046260807565,
    "state":"LA",
    "name":"Evangeline Parish"
  },
  {
    "id":40127,
    "rate":1.5552390278643282,
    "state":"OK",
    "name":"Pushmataha County"
  },
  {
    "id":20055,
    "rate":23.553460813358466,
    "state":"KS",
    "name":"Finney County"
  },
  {
    "id":20193,
    "rate":75.84748961872407,
    "state":"KS",
    "name":"Thomas County"
  },
  {
    "id":46097,
    "rate":5.931984502798105,
    "state":"SD",
    "name":"Miner County"
  },
  {
    "id":12073,
    "rate":466.1875118899151,
    "state":"FL",
    "name":"Leon County"
  },
  {
    "id":20053,
    "rate":81.73395204949729,
    "state":"KS",
    "name":"Ellsworth County"
  },
  {
    "id":20139,
    "rate":44.3343844679404,
    "state":"KS",
    "name":"Osage County"
  },
  {
    "id":20043,
    "rate":6.058143963437857,
    "state":"KS",
    "name":"Doniphan County"
  },
  {
    "id":26041,
    "rate":30.25413374602915,
    "state":"MI",
    "name":"Delta County"
  },
  {
    "id":20037,
    "rate":102.35995020451715,
    "state":"KS",
    "name":"Crawford County"
  },
  {
    "id":1093,
    "rate":117.41152182461661,
    "state":"AL",
    "name":"Marion County"
  },
  {
    "id":20041,
    "rate":73.55349731754228,
    "state":"KS",
    "name":"Dickinson County"
  },
  {
    "id":34025,
    "rate":557.6616081986596,
    "state":"NJ",
    "name":"Monmouth County"
  },
  {
    "id":5111,
    "rate":533.9461459403906,
    "state":"AR",
    "name":"Poinsett County"
  },
  {
    "id":20035,
    "rate":57.69992278844034,
    "state":"KS",
    "name":"Cowley County"
  },
  {
    "id":9003,
    "rate":791.6075450764046,
    "state":"CT",
    "name":"Hartford County"
  },
  {
    "id":16009,
    "rate":17.28219178082192,
    "state":"ID",
    "name":"Benewah County"
  },
  {
    "id":21075,
    "rate":33.1999389033145,
    "state":"KY",
    "name":"Fulton County"
  },
  {
    "id":21015,
    "rate":101.51965795323628,
    "state":"KY",
    "name":"Boone County"
  },
  {
    "id":6089,
    "rate":68.64573116393251,
    "state":"CA",
    "name":"Shasta County"
  },
  {
    "id":26075,
    "rate":89.4680811209071,
    "state":"MI",
    "name":"Jackson County"
  },
  {
    "id":20027,
    "rate":207.96876834566157,
    "state":"KS",
    "name":"Clay County"
  },
  {
    "id":20019,
    "rate":2.975322490185081,
    "state":"KS",
    "name":"Chautauqua County"
  },
  {
    "id":46117,
    "rate":15.613033254954653,
    "state":"SD",
    "name":"Stanley County"
  },
  {
    "id":22045,
    "rate":110.56537150278693,
    "state":"LA",
    "name":"Iberia Parish"
  },
  {
    "id":45005,
    "rate":40.53178728508597,
    "state":"SC",
    "name":"Allendale County"
  },
  {
    "id":18027,
    "rate":196.15331921783533,
    "state":"IN",
    "name":"Daviess County"
  },
  {
    "id":20011,
    "rate":20.373511003432256,
    "state":"KS",
    "name":"Bourbon County"
  },
  {
    "id":40077,
    "rate":11.527282698108033,
    "state":"OK",
    "name":"Latimer County"
  },
  {
    "id":12001,
    "rate":586.9059206318309,
    "state":"FL",
    "name":"Alachua County"
  },
  {
    "id":22013,
    "rate":31.83576925792557,
    "state":"LA",
    "name":"Bienville Parish"
  },
  {
    "id":40129,
    "rate":2.978272390037096,
    "state":"OK",
    "name":"Roger Mills County"
  },
  {
    "id":20007,
    "rate":39.66393442622951,
    "state":"KS",
    "name":"Barber County"
  },
  {
    "id":18115,
    "rate":43.4933639193839,
    "state":"IN",
    "name":"Ohio County"
  },
  {
    "id":19111,
    "rate":17.592779742855534,
    "state":"IA",
    "name":"Lee County"
  },
  {
    "id":20005,
    "rate":73.3327380952381,
    "state":"KS",
    "name":"Atchison County"
  },
  {
    "id":20003,
    "rate":5.170497600404142,
    "state":"KS",
    "name":"Anderson County"
  },
  {
    "id":54097,
    "rate":113.39631110748385,
    "state":"WV",
    "name":"Upshur County"
  },
  {
    "id":19195,
    "rate":1.4616305359755286,
    "state":"IA",
    "name":"Worth County"
  },
  {
    "id":30015,
    "rate":3.6207187447275184,
    "state":"MT",
    "name":"Chouteau County"
  },
  {
    "id":19193,
    "rate":286.22065865337635,
    "state":"IA",
    "name":"Woodbury County"
  },
  {
    "id":1123,
    "rate":82.91597822917677,
    "state":"AL",
    "name":"Tallapoosa County"
  },
  {
    "id":27041,
    "rate":0.8349338747736378,
    "state":"MN",
    "name":"Douglas County"
  },
  {
    "id":19191,
    "rate":3.0818596691386193,
    "state":"IA",
    "name":"Winneshiek County"
  },
  {
    "id":51800,
    "rate":231.93348438068622,
    "state":"VA",
    "name":"Suffolk City"
  },
  {
    "id":16083,
    "rate":378.82513521787934,
    "state":"ID",
    "name":"Twin Falls County"
  },
  {
    "id":19189,
    "rate":21.41351402220968,
    "state":"IA",
    "name":"Winnebago County"
  },
  {
    "id":18059,
    "rate":300.0917314307555,
    "state":"IN",
    "name":"Hancock County"
  },
  {
    "id":19183,
    "rate":127.52474795857849,
    "state":"IA",
    "name":"Washington County"
  },
  {
    "id":19179,
    "rate":23.167840674417945,
    "state":"IA",
    "name":"Wapello County"
  },
  {
    "id":28123,
    "rate":120.1791277258567,
    "state":"MS",
    "name":"Scott County"
  },
  {
    "id":48251,
    "rate":57.726893766690544,
    "state":"TX",
    "name":"Johnson County"
  },
  {
    "id":18043,
    "rate":1565.0500770416022,
    "state":"IN",
    "name":"Floyd County"
  },
  {
    "id":19175,
    "rate":74.29116035263283,
    "state":"IA",
    "name":"Union County"
  },
  {
    "id":31169,
    "rate":9.173457508731083,
    "state":"NE",
    "name":"Thayer County"
  },
  {
    "id":31041,
    "rate":179.92491657397105,
    "state":"NE",
    "name":"Custer County"
  },
  {
    "id":19171,
    "rate":12.25208262010727,
    "state":"IA",
    "name":"Tama County"
  },
  {
    "id":46029,
    "rate":72.90091004677133,
    "state":"SD",
    "name":"Codington County"
  },
  {
    "id":19169,
    "rate":63.49832644650627,
    "state":"IA",
    "name":"Story County"
  },
  {
    "id":2020,
    "rate":154.52398093981583,
    "state":"AK",
    "name":"Municipality of Anchorage"
  },
  {
    "id":19157,
    "rate":25.20070366224212,
    "state":"IA",
    "name":"Poweshiek County"
  },
  {
    "id":19155,
    "rate":2278.0664672076423,
    "state":"IA",
    "name":"Pottawattamie County"
  },
  {
    "id":20143,
    "rate":41.585546939448946,
    "state":"KS",
    "name":"Ottawa County"
  },
  {
    "id":19181,
    "rate":44.05197018104364,
    "state":"IA",
    "name":"Warren County"
  },
  {
    "id":19147,
    "rate":72.1700247818123,
    "state":"IA",
    "name":"Palo Alto County"
  },
  {
    "id":19145,
    "rate":673.2505872643006,
    "state":"IA",
    "name":"Page County"
  },
  {
    "id":27017,
    "rate":1.725241426184475,
    "state":"MN",
    "name":"Carlton County"
  },
  {
    "id":40097,
    "rate":19.61348544185255,
    "state":"OK",
    "name":"Mayes County"
  },
  {
    "id":19143,
    "rate":5.326332794830371,
    "state":"IA",
    "name":"Osceola County"
  },
  {
    "id":18119,
    "rate":1.357487244300894,
    "state":"IN",
    "name":"Owen County"
  },
  {
    "id":19131,
    "rate":25.24098070289922,
    "state":"IA",
    "name":"Mitchell County"
  },
  {
    "id":27055,
    "rate":3.430059523809524,
    "state":"MN",
    "name":"Houston County"
  },
  {
    "id":40075,
    "rate":9.161939419886545,
    "state":"OK",
    "name":"Kiowa County"
  },
  {
    "id":19151,
    "rate":2.5722664432341857,
    "state":"IA",
    "name":"Pocahontas County"
  },
  {
    "id":13105,
    "rate":176.32777012198235,
    "state":"GA",
    "name":"Elbert County"
  },
  {
    "id":54031,
    "rate":88.52775775054076,
    "state":"WV",
    "name":"Hardy County"
  },
  {
    "id":26095,
    "rate":65.55127810286416,
    "state":"MI",
    "name":"Luce County"
  },
  {
    "id":19127,
    "rate":756.4710896780166,
    "state":"IA",
    "name":"Marshall County"
  },
  {
    "id":40111,
    "rate":22.302776163892187,
    "state":"OK",
    "name":"Okmulgee County"
  },
  {
    "id":29209,
    "rate":65.15832094391547,
    "state":"MO",
    "name":"Stone County"
  },
  {
    "id":45091,
    "rate":78.17876418577288,
    "state":"SC",
    "name":"York County"
  },
  {
    "id":29007,
    "rate":22.598203826630233,
    "state":"MO",
    "name":"Audrain County"
  },
  {
    "id":19125,
    "rate":8.00557253280604,
    "state":"IA",
    "name":"Marion County"
  },
  {
    "id":26101,
    "rate":60.70720208096245,
    "state":"MI",
    "name":"Manistee County"
  },
  {
    "id":22127,
    "rate":7.609807960661838,
    "state":"LA",
    "name":"Winn Parish"
  },
  {
    "id":19123,
    "rate":5.399919703796226,
    "state":"IA",
    "name":"Mahaska County"
  },
  {
    "id":19121,
    "rate":1581.1934472387538,
    "state":"IA",
    "name":"Madison County"
  },
  {
    "id":19115,
    "rate":1.3587004502516113,
    "state":"IA",
    "name":"Louisa County"
  },
  {
    "id":27111,
    "rate":4.040180129861063,
    "state":"MN",
    "name":"Otter Tail County"
  },
  {
    "id":19113,
    "rate":245.89114615763495,
    "state":"IA",
    "name":"Linn County"
  },
  {
    "id":48465,
    "rate":28.760239413314807,
    "state":"TX",
    "name":"Val Verde County"
  },
  {
    "id":39149,
    "rate":71.3564771478572,
    "state":"OH",
    "name":"Shelby County"
  },
  {
    "id":29003,
    "rate":7.182548794489093,
    "state":"MO",
    "name":"Andrew County"
  },
  {
    "id":19107,
    "rate":5.801115599153683,
    "state":"IA",
    "name":"Keokuk County"
  },
  {
    "id":29073,
    "rate":17.817757009345797,
    "state":"MO",
    "name":"Gasconade County"
  },
  {
    "id":13119,
    "rate":54.08292660676001,
    "state":"GA",
    "name":"Franklin County"
  },
  {
    "id":12065,
    "rate":98.8635242725287,
    "state":"FL",
    "name":"Jefferson County"
  },
  {
    "id":8025,
    "rate":20.764966740576497,
    "state":"CO",
    "name":"Crowley County"
  },
  {
    "id":19101,
    "rate":100.3248653711075,
    "state":"IA",
    "name":"Jefferson County"
  },
  {
    "id":19075,
    "rate":12.644288819125812,
    "state":"IA",
    "name":"Grundy County"
  },
  {
    "id":46127,
    "rate":28.914493632504545,
    "state":"SD",
    "name":"Union County"
  },
  {
    "id":19069,
    "rate":48.50180505415164,
    "state":"IA",
    "name":"Franklin County"
  },
  {
    "id":19067,
    "rate":50.61105602379774,
    "state":"IA",
    "name":"Floyd County"
  },
  {
    "id":1023,
    "rate":14.287926838262406,
    "state":"AL",
    "name":"Choctaw County"
  },
  {
    "id":12117,
    "rate":449.0320000927198,
    "state":"FL",
    "name":"Seminole County"
  },
  {
    "id":19063,
    "rate":138.60358107432236,
    "state":"IA",
    "name":"Emmet County"
  },
  {
    "id":19059,
    "rate":25.154140878278806,
    "state":"IA",
    "name":"Dickinson County"
  },
  {
    "id":37181,
    "rate":122.03531969649912,
    "state":"NC",
    "name":"Vance County"
  },
  {
    "id":19051,
    "rate":76.43701917556551,
    "state":"IA",
    "name":"Davis County"
  },
  {
    "id":13235,
    "rate":33.33904109589041,
    "state":"GA",
    "name":"Pulaski County"
  },
  {
    "id":19045,
    "rate":88.84223056872523,
    "state":"IA",
    "name":"Clinton County"
  },
  {
    "id":21001,
    "rate":15.172104791523907,
    "state":"KY",
    "name":"Adair County"
  },
  {
    "id":12017,
    "rate":242.03460406346463,
    "state":"FL",
    "name":"Citrus County"
  },
  {
    "id":19037,
    "rate":12.275468622656884,
    "state":"IA",
    "name":"Chickasaw County"
  },
  {
    "id":19029,
    "rate":39.287900874635575,
    "state":"IA",
    "name":"Cass County"
  },
  {
    "id":19025,
    "rate":9.710393541876892,
    "state":"IA",
    "name":"Calhoun County"
  },
  {
    "id":5003,
    "rate":47.79829743685164,
    "state":"AR",
    "name":"Ashley County"
  },
  {
    "id":19011,
    "rate":12.382351803874558,
    "state":"IA",
    "name":"Benton County"
  },
  {
    "id":46135,
    "rate":12.494356159532556,
    "state":"SD",
    "name":"Yankton County"
  },
  {
    "id":1041,
    "rate":22.9723733180647,
    "state":"AL",
    "name":"Crenshaw County"
  },
  {
    "id":12003,
    "rate":71.78654635553418,
    "state":"FL",
    "name":"Baker County"
  },
  {
    "id":19009,
    "rate":44.394145677331515,
    "state":"IA",
    "name":"Audubon County"
  },
  {
    "id":17177,
    "rate":70.25929789453517,
    "state":"IL",
    "name":"Stephenson County"
  },
  {
    "id":18183,
    "rate":122.64322212203184,
    "state":"IN",
    "name":"Whitley County"
  },
  {
    "id":13177,
    "rate":60.10930483517249,
    "state":"GA",
    "name":"Lee County"
  },
  {
    "id":51133,
    "rate":92.77885705034808,
    "state":"VA",
    "name":"Northumberland County"
  },
  {
    "id":18181,
    "rate":3.868813503769256,
    "state":"IN",
    "name":"White County"
  },
  {
    "id":48277,
    "rate":66.98190789473684,
    "state":"TX",
    "name":"Lamar County"
  },
  {
    "id":18171,
    "rate":69.45385165752444,
    "state":"IN",
    "name":"Warren County"
  },
  {
    "id":19109,
    "rate":3.1997915445247864,
    "state":"IA",
    "name":"Kossuth County"
  },
  {
    "id":18165,
    "rate":26.411783140081482,
    "state":"IN",
    "name":"Vermillion County"
  },
  {
    "id":18161,
    "rate":60.404632152588555,
    "state":"IN",
    "name":"Union County"
  },
  {
    "id":46043,
    "rate":3.839165545087483,
    "state":"SD",
    "name":"Douglas County"
  },
  {
    "id":18159,
    "rate":36.3679155270021,
    "state":"IN",
    "name":"Tipton County"
  },
  {
    "id":18145,
    "rate":65.28480014420262,
    "state":"IN",
    "name":"Shelby County"
  },
  {
    "id":51171,
    "rate":81.28209938791304,
    "state":"VA",
    "name":"Shenandoah County"
  },
  {
    "id":13259,
    "rate":16.41871921182266,
    "state":"GA",
    "name":"Stewart County"
  },
  {
    "id":25001,
    "rate":237.4855360841536,
    "state":"MA",
    "name":"Barnstable County"
  },
  {
    "id":18139,
    "rate":21.421150927979454,
    "state":"IN",
    "name":"Rush County"
  },
  {
    "id":53045,
    "rate":15.103455087159057,
    "state":"WA",
    "name":"Mason County"
  },
  {
    "id":19061,
    "rate":231.12184304287044,
    "state":"IA",
    "name":"Dubuque County"
  },
  {
    "id":48397,
    "rate":104.893001735107,
    "state":"TX",
    "name":"Rockwall County"
  },
  {
    "id":18137,
    "rate":41.16758386203513,
    "state":"IN",
    "name":"Ripley County"
  },
  {
    "id":18129,
    "rate":39.004918800749536,
    "state":"IN",
    "name":"Posey County"
  },
  {
    "id":42109,
    "rate":122.80379937682179,
    "state":"PA",
    "name":"Snyder County"
  },
  {
    "id":1097,
    "rate":719.6454445531517,
    "state":"AL",
    "name":"Mobile County"
  },
  {
    "id":37179,
    "rate":31.81042549413848,
    "state":"NC",
    "name":"Union County"
  },
  {
    "id":18127,
    "rate":703.2680385611408,
    "state":"IN",
    "name":"Porter County"
  },
  {
    "id":36077,
    "rate":248.6533613445378,
    "state":"NY",
    "name":"Otsego County"
  },
  {
    "id":18125,
    "rate":46.958666040394554,
    "state":"IN",
    "name":"Pike County"
  },
  {
    "id":31067,
    "rate":32.47665056360709,
    "state":"NE",
    "name":"Gage County"
  },
  {
    "id":51790,
    "rate":37.07620918857907,
    "state":"VA",
    "name":"Staunton City"
  },
  {
    "id":5133,
    "rate":4.753115174100384,
    "state":"AR",
    "name":"Sevier County"
  },
  {
    "id":18117,
    "rate":35.06600324939074,
    "state":"IN",
    "name":"Orange County"
  },
  {
    "id":13039,
    "rate":71.46686899342436,
    "state":"GA",
    "name":"Camden County"
  },
  {
    "id":18141,
    "rate":147.2931789279403,
    "state":"IN",
    "name":"St. Joseph County"
  },
  {
    "id":36063,
    "rate":139.48976552391767,
    "state":"NY",
    "name":"Niagara County"
  },
  {
    "id":9007,
    "rate":278.3208071532143,
    "state":"CT",
    "name":"Middlesex County"
  },
  {
    "id":18111,
    "rate":54.11961076781022,
    "state":"IN",
    "name":"Newton County"
  },
  {
    "id":19103,
    "rate":2337.704965927268,
    "state":"IA",
    "name":"Johnson County"
  },
  {
    "id":18101,
    "rate":2.8560356520054255,
    "state":"IN",
    "name":"Martin County"
  },
  {
    "id":38101,
    "rate":40.17318265119119,
    "state":"ND",
    "name":"Ward County"
  },
  {
    "id":18083,
    "rate":284.33313184936003,
    "state":"IN",
    "name":"Knox County"
  },
  {
    "id":18073,
    "rate":81.35204615430605,
    "state":"IN",
    "name":"Jasper County"
  },
  {
    "id":54021,
    "rate":11.203007518796992,
    "state":"WV",
    "name":"Gilmer County"
  },
  {
    "id":45065,
    "rate":27.337420846316213,
    "state":"SC",
    "name":"Mccormick County"
  },
  {
    "id":41053,
    "rate":13.663676659585072,
    "state":"OR",
    "name":"Polk County"
  },
  {
    "id":16027,
    "rate":124.29298035655333,
    "state":"ID",
    "name":"Canyon County"
  },
  {
    "id":17197,
    "rate":195.5238079881326,
    "state":"IL",
    "name":"Will County"
  },
  {
    "id":18071,
    "rate":131.22330774598743,
    "state":"IN",
    "name":"Jackson County"
  },
  {
    "id":31043,
    "rate":1830.873446273456,
    "state":"NE",
    "name":"Dakota County"
  },
  {
    "id":18069,
    "rate":225.7935585061792,
    "state":"IN",
    "name":"Huntington County"
  },
  {
    "id":5105,
    "rate":13.716831299631998,
    "state":"AR",
    "name":"Perry County"
  },
  {
    "id":18037,
    "rate":82.48325176984844,
    "state":"IN",
    "name":"Dubois County"
  },
  {
    "id":48053,
    "rate":27.92640319433731,
    "state":"TX",
    "name":"Burnet County"
  },
  {
    "id":20065,
    "rate":78.71913580246913,
    "state":"KS",
    "name":"Graham County"
  },
  {
    "id":5077,
    "rate":3.145240431795878,
    "state":"AR",
    "name":"Lee County"
  },
  {
    "id":16081,
    "rate":17.047685139288195,
    "state":"ID",
    "name":"Teton County"
  },
  {
    "id":19093,
    "rate":43.95289803976871,
    "state":"IA",
    "name":"Ida County"
  },
  {
    "id":21081,
    "rate":216.76534237066681,
    "state":"KY",
    "name":"Grant County"
  },
  {
    "id":51510,
    "rate":114.93248669470657,
    "state":"VA",
    "name":"Alexandria city"
  },
  {
    "id":27089,
    "rate":1.3082039911308205,
    "state":"MN",
    "name":"Marshall County"
  },
  {
    "id":18019,
    "rate":577.0840518589341,
    "state":"IN",
    "name":"Clark County"
  },
  {
    "id":30027,
    "rate":21.849812046507562,
    "state":"MT",
    "name":"Fergus County"
  },
  {
    "id":22005,
    "rate":105.63477842261503,
    "state":"LA",
    "name":"Ascension Parish"
  },
  {
    "id":13187,
    "rate":54.67562904853357,
    "state":"GA",
    "name":"Lumpkin County"
  },
  {
    "id":18015,
    "rate":21.84464570063694,
    "state":"IN",
    "name":"Carroll County"
  },
  {
    "id":47133,
    "rate":611.0157129350323,
    "state":"TN",
    "name":"Overton County"
  },
  {
    "id":29217,
    "rate":84.13164727377634,
    "state":"MO",
    "name":"Vernon County"
  },
  {
    "id":45019,
    "rate":1557.0433302688048,
    "state":"SC",
    "name":"Charleston County"
  },
  {
    "id":26141,
    "rate":36.01052471018914,
    "state":"MI",
    "name":"Presque Isle County"
  },
  {
    "id":29197,
    "rate":66.97128532360985,
    "state":"MO",
    "name":"Schuyler County"
  },
  {
    "id":18013,
    "rate":11.047916113618264,
    "state":"IN",
    "name":"Brown County"
  },
  {
    "id":12063,
    "rate":47.20722743977133,
    "state":"FL",
    "name":"Jackson County"
  },
  {
    "id":13269,
    "rate":11.454480372270611,
    "state":"GA",
    "name":"Taylor County"
  },
  {
    "id":18005,
    "rate":95.75985703965627,
    "state":"IN",
    "name":"Bartholomew County"
  },
  {
    "id":13157,
    "rate":53.97870088636065,
    "state":"GA",
    "name":"Jackson County"
  },
  {
    "id":18001,
    "rate":45.94023429551466,
    "state":"IN",
    "name":"Adams County"
  },
  {
    "id":10003,
    "rate":513.9133659694409,
    "state":"DE",
    "name":"New Castle County"
  },
  {
    "id":18079,
    "rate":50.30196579376907,
    "state":"IN",
    "name":"Jennings County"
  },
  {
    "id":27137,
    "rate":192.91824407567572,
    "state":"MN",
    "name":"St. Louis County"
  },
  {
    "id":21013,
    "rate":120.98110258596189,
    "state":"KY",
    "name":"Bell County"
  },
  {
    "id":6111,
    "rate":317.77784161364366,
    "state":"CA",
    "name":"Ventura County"
  },
  {
    "id":13171,
    "rate":11.376462109873051,
    "state":"GA",
    "name":"Lamar County"
  },
  {
    "id":13049,
    "rate":41.581003907424105,
    "state":"GA",
    "name":"Charlton County"
  },
  {
    "id":31039,
    "rate":37.412541254125415,
    "state":"NE",
    "name":"Cuming County"
  },
  {
    "id":1055,
    "rate":155.44428894597596,
    "state":"AL",
    "name":"Etowah County"
  },
  {
    "id":20091,
    "rate":734.0361172524887,
    "state":"KS",
    "name":"Johnson County"
  },
  {
    "id":19027,
    "rate":57.02331430782626,
    "state":"IA",
    "name":"Carroll County"
  },
  {
    "id":17195,
    "rate":337.54143023235633,
    "state":"IL",
    "name":"Whiteside County"
  },
  {
    "id":46123,
    "rate":28.353691886964448,
    "state":"SD",
    "name":"Tripp County"
  },
  {
    "id":13057,
    "rate":292.3284626596775,
    "state":"GA",
    "name":"Cherokee County"
  },
  {
    "id":17189,
    "rate":6.1241530353843,
    "state":"IL",
    "name":"Washington County"
  },
  {
    "id":27027,
    "rate":1164.2193546244166,
    "state":"MN",
    "name":"Clay County"
  },
  {
    "id":17161,
    "rate":614.1143031992655,
    "state":"IL",
    "name":"Rock Island County"
  },
  {
    "id":37193,
    "rate":43.736309781823444,
    "state":"NC",
    "name":"Wilkes County"
  },
  {
    "id":5117,
    "rate":42.066066777172615,
    "state":"AR",
    "name":"Prairie County"
  },
  {
    "id":17187,
    "rate":8.933933089682316,
    "state":"IL",
    "name":"Warren County"
  },
  {
    "id":12053,
    "rate":211.9342930757588,
    "state":"FL",
    "name":"Hernando County"
  },
  {
    "id":21219,
    "rate":1.175632911392405,
    "state":"KY",
    "name":"Todd County"
  },
  {
    "id":17179,
    "rate":74.61974811527327,
    "state":"IL",
    "name":"Tazewell County"
  },
  {
    "id":54101,
    "rate":52.85936113575865,
    "state":"WV",
    "name":"Webster County"
  },
  {
    "id":16005,
    "rate":926.0347977693124,
    "state":"ID",
    "name":"Bannock County"
  },
  {
    "id":8075,
    "rate":40.46566134524388,
    "state":"CO",
    "name":"Logan County"
  },
  {
    "id":19095,
    "rate":59.42613846723435,
    "state":"IA",
    "name":"Iowa County"
  },
  {
    "id":8085,
    "rate":10.22248416089583,
    "state":"CO",
    "name":"Montrose County"
  },
  {
    "id":17175,
    "rate":26.91426646454438,
    "state":"IL",
    "name":"Stark County"
  },
  {
    "id":40099,
    "rate":18.920821114369502,
    "state":"OK",
    "name":"Murray County"
  },
  {
    "id":5079,
    "rate":4.198176549579476,
    "state":"AR",
    "name":"Lincoln County"
  },
  {
    "id":17173,
    "rate":63.66212386992308,
    "state":"IL",
    "name":"Shelby County"
  },
  {
    "id":5007,
    "rate":650.2635999982824,
    "state":"AR",
    "name":"Benton County"
  },
  {
    "id":12131,
    "rate":38.72579659537319,
    "state":"FL",
    "name":"Walton County"
  },
  {
    "id":17167,
    "rate":321.430636345842,
    "state":"IL",
    "name":"Sangamon County"
  },
  {
    "id":18131,
    "rate":32.94951352179575,
    "state":"IN",
    "name":"Pulaski County"
  },
  {
    "id":48409,
    "rate":71.76084562197885,
    "state":"TX",
    "name":"San Patricio County"
  },
  {
    "id":17159,
    "rate":89.90163934426229,
    "state":"IL",
    "name":"Richland County"
  },
  {
    "id":28147,
    "rate":18.228393425238604,
    "state":"MS",
    "name":"Walthall County"
  },
  {
    "id":17149,
    "rate":117.74310461330548,
    "state":"IL",
    "name":"Pike County"
  },
  {
    "id":29225,
    "rate":9.126713271316122,
    "state":"MO",
    "name":"Webster County"
  },
  {
    "id":6011,
    "rate":63.10837967939432,
    "state":"CA",
    "name":"Colusa County"
  },
  {
    "id":18067,
    "rate":354.3790148602561,
    "state":"IN",
    "name":"Howard County"
  },
  {
    "id":42035,
    "rate":41.73244399697961,
    "state":"PA",
    "name":"Clinton County"
  },
  {
    "id":8043,
    "rate":5.946427813388803,
    "state":"CO",
    "name":"Fremont County"
  },
  {
    "id":17143,
    "rate":788.2027105714426,
    "state":"IL",
    "name":"Peoria County"
  },
  {
    "id":13205,
    "rate":45.47856926603521,
    "state":"GA",
    "name":"Mitchell County"
  },
  {
    "id":13077,
    "rate":158.51296627393455,
    "state":"GA",
    "name":"Coweta County"
  },
  {
    "id":18085,
    "rate":84.57529554176219,
    "state":"IN",
    "name":"Kosciusko County"
  },
  {
    "id":17135,
    "rate":60.854163162321285,
    "state":"IL",
    "name":"Montgomery County"
  },
  {
    "id":29169,
    "rate":2.8698795632059038,
    "state":"MO",
    "name":"Pulaski County"
  },
  {
    "id":26089,
    "rate":83.96052874838233,
    "state":"MI",
    "name":"Leelanau County"
  },
  {
    "id":17133,
    "rate":36.18373286130027,
    "state":"IL",
    "name":"Monroe County"
  },
  {
    "id":37063,
    "rate":6391.942417501456,
    "state":"NC",
    "name":"Durham County"
  },
  {
    "id":18051,
    "rate":101.2723912849095,
    "state":"IN",
    "name":"Gibson County"
  },
  {
    "id":37113,
    "rate":97.88199786957034,
    "state":"NC",
    "name":"Macon County"
  },
  {
    "id":17127,
    "rate":158.33256290034996,
    "state":"IL",
    "name":"Massac County"
  },
  {
    "id":51683,
    "rate":2710.0520347552897,
    "state":"VA",
    "name":"Manassas City"
  },
  {
    "id":12109,
    "rate":209.06626982557458,
    "state":"FL",
    "name":"St. Johns County"
  },
  {
    "id":10005,
    "rate":258.2216994596298,
    "state":"DE",
    "name":"Sussex County"
  },
  {
    "id":17123,
    "rate":139.41061702300627,
    "state":"IL",
    "name":"Marshall County"
  },
  {
    "id":40121,
    "rate":34.67793755954888,
    "state":"OK",
    "name":"Pittsburg County"
  },
  {
    "id":34007,
    "rate":580.741506595155,
    "state":"NJ",
    "name":"Camden County"
  },
  {
    "id":20009,
    "rate":39.874786774579896,
    "state":"KS",
    "name":"Barton County"
  },
  {
    "id":39103,
    "rate":84.13346842905169,
    "state":"OH",
    "name":"Medina County"
  },
  {
    "id":17119,
    "rate":208.35777629374815,
    "state":"IL",
    "name":"Madison County"
  },
  {
    "id":25011,
    "rate":99.44984904394501,
    "state":"MA",
    "name":"Franklin County"
  },
  {
    "id":51107,
    "rate":1975.3045998255275,
    "state":"VA",
    "name":"Loudoun County"
  },
  {
    "id":12087,
    "rate":69.37912549505941,
    "state":"FL",
    "name":"Monroe County"
  },
  {
    "id":19039,
    "rate":20.50321199143469,
    "state":"IA",
    "name":"Clarke County"
  },
  {
    "id":17105,
    "rate":15.050733099779423,
    "state":"IL",
    "name":"Livingston County"
  },
  {
    "id":17103,
    "rate":83.10093622833729,
    "state":"IL",
    "name":"Lee County"
  },
  {
    "id":20071,
    "rate":52.8041074249605,
    "state":"KS",
    "name":"Greeley County"
  },
  {
    "id":29229,
    "rate":44.43363782912412,
    "state":"MO",
    "name":"Wright County"
  },
  {
    "id":17101,
    "rate":34.53587255958798,
    "state":"IL",
    "name":"Lawrence County"
  },
  {
    "id":29095,
    "rate":582.1186465699217,
    "state":"MO",
    "name":"Jackson County"
  },
  {
    "id":8045,
    "rate":43.45298272187683,
    "state":"CO",
    "name":"Garfield County"
  },
  {
    "id":17201,
    "rate":97.21556711872645,
    "state":"IL",
    "name":"Winnebago County"
  },
  {
    "id":17097,
    "rate":287.8425916554649,
    "state":"IL",
    "name":"Lake County"
  },
  {
    "id":54037,
    "rate":1090.243558259722,
    "state":"WV",
    "name":"Jefferson County"
  },
  {
    "id":48237,
    "rate":2.665186007773459,
    "state":"TX",
    "name":"Jack County"
  },
  {
    "id":18017,
    "rate":13.603726836318588,
    "state":"IN",
    "name":"Cass County"
  },
  {
    "id":13169,
    "rate":27.13387740927244,
    "state":"GA",
    "name":"Jones County"
  },
  {
    "id":19023,
    "rate":0.8760098818187887,
    "state":"IA",
    "name":"Butler County"
  },
  {
    "id":26157,
    "rate":37.278128141851745,
    "state":"MI",
    "name":"Tuscola County"
  },
  {
    "id":17085,
    "rate":14.474530831099194,
    "state":"IL",
    "name":"Jo Daviess County"
  },
  {
    "id":48429,
    "rate":11.266457680250783,
    "state":"TX",
    "name":"Stephens County"
  },
  {
    "id":8017,
    "rate":7.21250662427133,
    "state":"CO",
    "name":"Cheyenne County"
  },
  {
    "id":5083,
    "rate":2.4785276073619635,
    "state":"AR",
    "name":"Logan County"
  },
  {
    "id":17069,
    "rate":8.691566831101715,
    "state":"IL",
    "name":"Hardin County"
  },
  {
    "id":51113,
    "rate":0.889679715302491,
    "state":"VA",
    "name":"Madison County"
  },
  {
    "id":22123,
    "rate":8.473839735790023,
    "state":"LA",
    "name":"West Carroll Parish"
  },
  {
    "id":23009,
    "rate":7.298848467067625,
    "state":"ME",
    "name":"Hancock County"
  },
  {
    "id":4001,
    "rate":1.9626668129637501,
    "state":"AZ",
    "name":"Apache County"
  },
  {
    "id":17065,
    "rate":28.674079387852696,
    "state":"IL",
    "name":"Hamilton County"
  },
  {
    "id":29093,
    "rate":26.382386799693013,
    "state":"MO",
    "name":"Iron County"
  },
  {
    "id":37031,
    "rate":18835.288216114142,
    "state":"NC",
    "name":"Carteret County"
  },
  {
    "id":17063,
    "rate":78.80897308075774,
    "state":"IL",
    "name":"Grundy County"
  },
  {
    "id":26117,
    "rate":44.38398959704405,
    "state":"MI",
    "name":"Montcalm County"
  },
  {
    "id":13321,
    "rate":45.19608756404286,
    "state":"GA",
    "name":"Worth County"
  },
  {
    "id":17059,
    "rate":10.400812707794607,
    "state":"IL",
    "name":"Gallatin County"
  },
  {
    "id":17053,
    "rate":68.60122874696388,
    "state":"IL",
    "name":"Ford County"
  },
  {
    "id":48177,
    "rate":44.44544589654999,
    "state":"TX",
    "name":"Gonzales County"
  },
  {
    "id":36015,
    "rate":369.8026470621196,
    "state":"NY",
    "name":"Chemung County"
  },
  {
    "id":9009,
    "rate":1391.5932645935163,
    "state":"CT",
    "name":"New Haven County"
  },
  {
    "id":5057,
    "rate":7.9399776035834275,
    "state":"AR",
    "name":"Hempstead County"
  },
  {
    "id":17051,
    "rate":32.95840523113251,
    "state":"IL",
    "name":"Fayette County"
  },
  {
    "id":41013,
    "rate":13.583058732312464,
    "state":"OR",
    "name":"Crook County"
  },
  {
    "id":1109,
    "rate":150.27439024390245,
    "state":"AL",
    "name":"Pike County"
  },
  {
    "id":5081,
    "rate":32.86555598605193,
    "state":"AR",
    "name":"Little River County"
  },
  {
    "id":17185,
    "rate":49.848924547627185,
    "state":"IL",
    "name":"Wabash County"
  },
  {
    "id":28035,
    "rate":1082.4851176907355,
    "state":"MS",
    "name":"Forrest County"
  },
  {
    "id":48085,
    "rate":793.8157272566626,
    "state":"TX",
    "name":"Collin County"
  },
  {
    "id":17047,
    "rate":68.51285098796612,
    "state":"IL",
    "name":"Edwards County"
  },
  {
    "id":17045,
    "rate":113.90238528066988,
    "state":"IL",
    "name":"Edgar County"
  },
  {
    "id":17043,
    "rate":711.6900574259411,
    "state":"IL",
    "name":"Dupage County"
  },
  {
    "id":55089,
    "rate":382.1384580029875,
    "state":"WI",
    "name":"Ozaukee County"
  },
  {
    "id":19133,
    "rate":155.72303653467512,
    "state":"IA",
    "name":"Monona County"
  },
  {
    "id":29187,
    "rate":102.24880382775122,
    "state":"MO",
    "name":"St Francois County"
  },
  {
    "id":37159,
    "rate":511.3102998223544,
    "state":"NC",
    "name":"Rowan County"
  },
  {
    "id":17041,
    "rate":33.59570391286809,
    "state":"IL",
    "name":"Douglas County"
  },
  {
    "id":1085,
    "rate":29.810382916053012,
    "state":"AL",
    "name":"Lowndes County"
  },
  {
    "id":6019,
    "rate":1341.8030983717197,
    "state":"CA",
    "name":"Fresno County"
  },
  {
    "id":18121,
    "rate":35.205119214586254,
    "state":"IN",
    "name":"Parke County"
  },
  {
    "id":27067,
    "rate":1.4663081676454632,
    "state":"MN",
    "name":"Kandiyohi County"
  },
  {
    "id":17027,
    "rate":27.795412144940475,
    "state":"IL",
    "name":"Clinton County"
  },
  {
    "id":48309,
    "rate":170.0179532464059,
    "state":"TX",
    "name":"Mclennan County"
  },
  {
    "id":27039,
    "rate":9.970845481049562,
    "state":"MN",
    "name":"Dodge County"
  },
  {
    "id":48459,
    "rate":7.618892671205445,
    "state":"TX",
    "name":"Upshur County"
  },
  {
    "id":17033,
    "rate":19.077291486217963,
    "state":"IL",
    "name":"Crawford County"
  },
  {
    "id":19073,
    "rate":7.46097587599607,
    "state":"IA",
    "name":"Greene County"
  },
  {
    "id":28039,
    "rate":133.99090591115774,
    "state":"MS",
    "name":"George County"
  },
  {
    "id":17007,
    "rate":118.21677802524128,
    "state":"IL",
    "name":"Boone County"
  },
  {
    "id":17005,
    "rate":65.3430565802168,
    "state":"IL",
    "name":"Bond County"
  },
  {
    "id":40089,
    "rate":11.946191579644285,
    "state":"OK",
    "name":"McCurtain County"
  },
  {
    "id":24005,
    "rate":568.0528087485116,
    "state":"MD",
    "name":"Baltimore County"
  },
  {
    "id":16013,
    "rate":28.42715231788079,
    "state":"ID",
    "name":"Blaine County"
  },
  {
    "id":5067,
    "rate":92.88265306122447,
    "state":"AR",
    "name":"Jackson County"
  },
  {
    "id":16079,
    "rate":100.46066619418849,
    "state":"ID",
    "name":"Shoshone County"
  },
  {
    "id":46099,
    "rate":1035.1774532650386,
    "state":"SD",
    "name":"Minnehaha County"
  },
  {
    "id":28121,
    "rate":497.8041125243807,
    "state":"MS",
    "name":"Rankin County"
  },
  {
    "id":1007,
    "rate":6.287001855615446,
    "state":"AL",
    "name":"Bibb County"
  },
  {
    "id":18123,
    "rate":129.7637552112821,
    "state":"IN",
    "name":"Perry County"
  },
  {
    "id":39047,
    "rate":35.25545927209705,
    "state":"OH",
    "name":"Fayette County"
  },
  {
    "id":26143,
    "rate":86.54725831223278,
    "state":"MI",
    "name":"Roscommon County"
  },
  {
    "id":5129,
    "rate":4.286429018136334,
    "state":"AR",
    "name":"Searcy County"
  },
  {
    "id":8041,
    "rate":80.52968450917113,
    "state":"CO",
    "name":"El Paso County"
  },
  {
    "id":16077,
    "rate":3.6315721815143336,
    "state":"ID",
    "name":"Power County"
  },
  {
    "id":42127,
    "rate":51.67940408242236,
    "state":"PA",
    "name":"Wayne County"
  },
  {
    "id":24021,
    "rate":283.24319475274183,
    "state":"MD",
    "name":"Frederick County"
  },
  {
    "id":50027,
    "rate":0.8109982748501608,
    "state":"VT",
    "name":"Windsor County"
  },
  {
    "id":5121,
    "rate":79.31376393479358,
    "state":"AR",
    "name":"Randolph County"
  },
  {
    "id":16011,
    "rate":750.4613896643439,
    "state":"ID",
    "name":"Bingham County"
  },
  {
    "id":16075,
    "rate":69.49278877960569,
    "state":"ID",
    "name":"Payette County"
  },
  {
    "id":17131,
    "rate":70.15269535113748,
    "state":"IL",
    "name":"Mercer County"
  },
  {
    "id":37045,
    "rate":90.65446341588473,
    "state":"NC",
    "name":"Cleveland County"
  },
  {
    "id":13279,
    "rate":175.6350810155418,
    "state":"GA",
    "name":"Toombs County"
  },
  {
    "id":51620,
    "rate":236.6776548151636,
    "state":"VA",
    "name":"Franklin City"
  },
  {
    "id":12023,
    "rate":84.2132375667839,
    "state":"FL",
    "name":"Columbia County"
  },
  {
    "id":16073,
    "rate":18.78341660092909,
    "state":"ID",
    "name":"Owyhee County"
  },
  {
    "id":55083,
    "rate":29.506680919294496,
    "state":"WI",
    "name":"Oconto County"
  },
  {
    "id":17183,
    "rate":128.19634985884792,
    "state":"IL",
    "name":"Vermilion County"
  },
  {
    "id":21103,
    "rate":3874.343631860254,
    "state":"KY",
    "name":"Henry County"
  },
  {
    "id":16069,
    "rate":34.810369659145465,
    "state":"ID",
    "name":"Nez Perce County"
  },
  {
    "id":28057,
    "rate":60.19853664798254,
    "state":"MS",
    "name":"Itawamba County"
  },
  {
    "id":42059,
    "rate":59.0639113538494,
    "state":"PA",
    "name":"Greene County"
  },
  {
    "id":19033,
    "rate":2704.9474960536254,
    "state":"IA",
    "name":"Cerro Gordo County"
  },
  {
    "id":16065,
    "rate":15.641985138004243,
    "state":"ID",
    "name":"Madison County"
  },
  {
    "id":19137,
    "rate":210.7861337374503,
    "state":"IA",
    "name":"Montgomery County"
  },
  {
    "id":17073,
    "rate":31.59493519202733,
    "state":"IL",
    "name":"Henry County"
  },
  {
    "id":16055,
    "rate":154.29868514445138,
    "state":"ID",
    "name":"Kootenai County"
  },
  {
    "id":16049,
    "rate":0.6585767424842979,
    "state":"ID",
    "name":"Idaho County"
  },
  {
    "id":13199,
    "rate":17.146275098517545,
    "state":"GA",
    "name":"Meriwether County"
  },
  {
    "id":19001,
    "rate":3.7831004657351963,
    "state":"IA",
    "name":"Adair County"
  },
  {
    "id":16047,
    "rate":18.460830704521555,
    "state":"ID",
    "name":"Gooding County"
  },
  {
    "id":19085,
    "rate":158.53719008264466,
    "state":"IA",
    "name":"Harrison County"
  },
  {
    "id":16041,
    "rate":27.233627351494807,
    "state":"ID",
    "name":"Franklin County"
  },
  {
    "id":16039,
    "rate":21.867628535440286,
    "state":"ID",
    "name":"Elmore County"
  },
  {
    "id":17115,
    "rate":204.99859145970197,
    "state":"IL",
    "name":"Macon County"
  },
  {
    "id":39027,
    "rate":620.3875116540368,
    "state":"OH",
    "name":"Clinton County"
  },
  {
    "id":13297,
    "rate":24.36671497755311,
    "state":"GA",
    "name":"Walton County"
  },
  {
    "id":39063,
    "rate":74.53580446019006,
    "state":"OH",
    "name":"Hancock County"
  },
  {
    "id":15003,
    "rate":940.9762824726166,
    "state":"HI",
    "name":"Honolulu County"
  },
  {
    "id":47145,
    "rate":41.31303110844909,
    "state":"TN",
    "name":"Roane County"
  },
  {
    "id":42061,
    "rate":31.209961319483686,
    "state":"PA",
    "name":"Huntingdon County"
  },
  {
    "id":16021,
    "rate":23.80156898938625,
    "state":"ID",
    "name":"Boundary County"
  },
  {
    "id":38003,
    "rate":88.14764369381639,
    "state":"ND",
    "name":"Barnes County"
  },
  {
    "id":36005,
    "rate":510.0672240980048,
    "state":"NY",
    "name":"Bronx County"
  },
  {
    "id":13001,
    "rate":34.46596659230645,
    "state":"GA",
    "name":"Appling County"
  },
  {
    "id":16019,
    "rate":6909.446107784426,
    "state":"ID",
    "name":"Bonneville County"
  },
  {
    "id":20001,
    "rate":86.23416535492095,
    "state":"KS",
    "name":"Allen County"
  },
  {
    "id":16017,
    "rate":13.156229139367564,
    "state":"ID",
    "name":"Bonner County"
  },
  {
    "id":31125,
    "rate":17.40210640021604,
    "state":"NE",
    "name":"Nance County"
  },
  {
    "id":6083,
    "rate":629.3250961163429,
    "state":"CA",
    "name":"Santa Barbara County"
  },
  {
    "id":13109,
    "rate":59.60694183864916,
    "state":"GA",
    "name":"Evans County"
  },
  {
    "id":28093,
    "rate":16.275999672014645,
    "state":"MS",
    "name":"Marshall County"
  },
  {
    "id":13255,
    "rate":91.16569225222968,
    "state":"GA",
    "name":"Spalding County"
  },
  {
    "id":55113,
    "rate":9.052599758162033,
    "state":"WI",
    "name":"Sawyer County"
  },
  {
    "id":13301,
    "rate":75.79363652705374,
    "state":"GA",
    "name":"Warren County"
  },
  {
    "id":48281,
    "rate":20.487525521637366,
    "state":"TX",
    "name":"Lampasas County"
  },
  {
    "id":13145,
    "rate":5.696808021341183,
    "state":"GA",
    "name":"Harris County"
  },
  {
    "id":18149,
    "rate":81.27688925292064,
    "state":"IN",
    "name":"Starke County"
  },
  {
    "id":42071,
    "rate":136.57493080419033,
    "state":"PA",
    "name":"Lancaster County"
  },
  {
    "id":34011,
    "rate":89.69922810753266,
    "state":"NJ",
    "name":"Cumberland County"
  },
  {
    "id":4007,
    "rate":870.273068436834,
    "state":"AZ",
    "name":"Gila County"
  },
  {
    "id":47095,
    "rate":9.530053226015838,
    "state":"TN",
    "name":"Lake County"
  },
  {
    "id":16007,
    "rate":31.81185260655459,
    "state":"ID",
    "name":"Bear Lake County"
  },
  {
    "id":55059,
    "rate":120.13988479372816,
    "state":"WI",
    "name":"Kenosha County"
  },
  {
    "id":18047,
    "rate":15.6595318889759,
    "state":"IN",
    "name":"Franklin County"
  },
  {
    "id":12086,
    "rate":1312.6354061341408,
    "state":"FL",
    "name":"Miami-Dade County"
  },
  {
    "id":48089,
    "rate":170.27652888566593,
    "state":"TX",
    "name":"Colorado County"
  },
  {
    "id":15007,
    "rate":55.698364768864984,
    "state":"HI",
    "name":"Kauai County"
  },
  {
    "id":25003,
    "rate":62.18359824925132,
    "state":"MA",
    "name":"Berkshire County"
  },
  {
    "id":19187,
    "rate":38.181891391297334,
    "state":"IA",
    "name":"Webster County"
  },
  {
    "id":8029,
    "rate":16.23632960031528,
    "state":"CO",
    "name":"Delta County"
  },
  {
    "id":1021,
    "rate":40.83278043423552,
    "state":"AL",
    "name":"Chilton County"
  },
  {
    "id":13121,
    "rate":3257.5932920905984,
    "state":"GA",
    "name":"Fulton County"
  },
  {
    "id":13309,
    "rate":14.332321699544764,
    "state":"GA",
    "name":"Wheeler County"
  },
  {
    "id":18065,
    "rate":58.13820824620882,
    "state":"IN",
    "name":"Henry County"
  },
  {
    "id":12035,
    "rate":36.051060806009545,
    "state":"FL",
    "name":"Flagler County"
  },
  {
    "id":1081,
    "rate":1647.2211564442036,
    "state":"AL",
    "name":"Lee County"
  },
  {
    "id":54109,
    "rate":105.36062965033763,
    "state":"WV",
    "name":"Wyoming County"
  },
  {
    "id":16087,
    "rate":61.50881386316104,
    "state":"ID",
    "name":"Washington County"
  },
  {
    "id":13303,
    "rate":77.12950088699239,
    "state":"GA",
    "name":"Washington County"
  },
  {
    "id":56013,
    "rate":7.027112462006079,
    "state":"WY",
    "name":"Fremont County"
  },
  {
    "id":55033,
    "rate":5.981106305486001,
    "state":"WI",
    "name":"Dunn County"
  },
  {
    "id":13299,
    "rate":96.54492656503044,
    "state":"GA",
    "name":"Ware County"
  },
  {
    "id":39099,
    "rate":375.8198713245437,
    "state":"OH",
    "name":"Mahoning County"
  },
  {
    "id":13291,
    "rate":84.80284902937478,
    "state":"GA",
    "name":"Union County"
  },
  {
    "id":8035,
    "rate":100.15450002679383,
    "state":"CO",
    "name":"Douglas County"
  },
  {
    "id":13285,
    "rate":54.70046150251198,
    "state":"GA",
    "name":"Troup County"
  },
  {
    "id":38023,
    "rate":36.71742051052396,
    "state":"ND",
    "name":"Divide County"
  },
  {
    "id":17147,
    "rate":7.852426243411886,
    "state":"IL",
    "name":"Piatt County"
  },
  {
    "id":6013,
    "rate":1229.599141341426,
    "state":"CA",
    "name":"Contra Costa County"
  },
  {
    "id":48043,
    "rate":34.330019451048194,
    "state":"TX",
    "name":"Brewster County"
  },
  {
    "id":45047,
    "rate":120.14233958157318,
    "state":"SC",
    "name":"Greenwood County"
  },
  {
    "id":1003,
    "rate":534.5940145150382,
    "state":"AL",
    "name":"Baldwin County"
  },
  {
    "id":13281,
    "rate":32.06350719938972,
    "state":"GA",
    "name":"Towns County"
  },
  {
    "id":13293,
    "rate":71.38944204396014,
    "state":"GA",
    "name":"Upson County"
  },
  {
    "id":28085,
    "rate":88.04585497431776,
    "state":"MS",
    "name":"Lincoln County"
  },
  {
    "id":13275,
    "rate":307.9777677969908,
    "state":"GA",
    "name":"Thomas County"
  },
  {
    "id":13273,
    "rate":11.629717746296096,
    "state":"GA",
    "name":"Terrell County"
  },
  {
    "id":54033,
    "rate":2917.2827847515455,
    "state":"WV",
    "name":"Harrison County"
  },
  {
    "id":39081,
    "rate":219.74278315068693,
    "state":"OH",
    "name":"Jefferson County"
  },
  {
    "id":31045,
    "rate":26.79393476600851,
    "state":"NE",
    "name":"Dawes County"
  },
  {
    "id":22057,
    "rate":70.94424710424711,
    "state":"LA",
    "name":"Lafourche Parish"
  },
  {
    "id":16029,
    "rate":61.58142962417095,
    "state":"ID",
    "name":"Caribou County"
  },
  {
    "id":18011,
    "rate":894.2929446814277,
    "state":"IN",
    "name":"Boone County"
  },
  {
    "id":18023,
    "rate":16.64532572746306,
    "state":"IN",
    "name":"Clinton County"
  },
  {
    "id":55081,
    "rate":4.348038237185885,
    "state":"WI",
    "name":"Monroe County"
  },
  {
    "id":13133,
    "rate":63.22650632283659,
    "state":"GA",
    "name":"Greene County"
  },
  {
    "id":13261,
    "rate":167.5770604786444,
    "state":"GA",
    "name":"Sumter County"
  },
  {
    "id":55075,
    "rate":5.973293482452758,
    "state":"WI",
    "name":"Marinette County"
  },
  {
    "id":48403,
    "rate":2.7729487057025506,
    "state":"TX",
    "name":"Sabine County"
  },
  {
    "id":48273,
    "rate":4137.411124922312,
    "state":"TX",
    "name":"Kleberg County"
  },
  {
    "id":31147,
    "rate":7.696867061812025,
    "state":"NE",
    "name":"Richardson County"
  },
  {
    "id":8059,
    "rate":415.4681179793299,
    "state":"CO",
    "name":"Jefferson County"
  },
  {
    "id":21169,
    "rate":60.823399779625355,
    "state":"KY",
    "name":"Metcalfe County"
  },
  {
    "id":8013,
    "rate":911.8080547853731,
    "state":"CO",
    "name":"Boulder County"
  },
  {
    "id":18133,
    "rate":97.07518377962366,
    "state":"IN",
    "name":"Putnam County"
  },
  {
    "id":13017,
    "rate":65.63180393274435,
    "state":"GA",
    "name":"Ben Hill County"
  },
  {
    "id":18097,
    "rate":829.8064841315035,
    "state":"IN",
    "name":"Marion County"
  },
  {
    "id":29133,
    "rate":27.84620761971339,
    "state":"MO",
    "name":"Mississippi County"
  },
  {
    "id":13073,
    "rate":395.3961344639242,
    "state":"GA",
    "name":"Columbia County"
  },
  {
    "id":13251,
    "rate":38.322535211267606,
    "state":"GA",
    "name":"Screven County"
  },
  {
    "id":20207,
    "rate":8.411042944785278,
    "state":"KS",
    "name":"Woodson County"
  },
  {
    "id":17035,
    "rate":63.28273591806874,
    "state":"IL",
    "name":"Cumberland County"
  },
  {
    "id":13249,
    "rate":3.6079374624173184,
    "state":"GA",
    "name":"Schley County"
  },
  {
    "id":4023,
    "rate":9.455020766133282,
    "state":"AZ",
    "name":"Santa Cruz County"
  },
  {
    "id":13247,
    "rate":138.28299332430794,
    "state":"GA",
    "name":"Rockdale County"
  },
  {
    "id":4017,
    "rate":14.92900077589672,
    "state":"AZ",
    "name":"Navajo County"
  },
  {
    "id":13147,
    "rate":73.11440760890837,
    "state":"GA",
    "name":"Hart County"
  },
  {
    "id":13243,
    "rate":24.30623973727422,
    "state":"GA",
    "name":"Randolph County"
  },
  {
    "id":13239,
    "rate":26.73060884070058,
    "state":"GA",
    "name":"Quitman County"
  },
  {
    "id":21005,
    "rate":37.28015510317131,
    "state":"KY",
    "name":"Anderson County"
  },
  {
    "id":45025,
    "rate":40.20824295010845,
    "state":"SC",
    "name":"Chesterfield County"
  },
  {
    "id":13237,
    "rate":24.546571523084918,
    "state":"GA",
    "name":"Putnam County"
  },
  {
    "id":20145,
    "rate":56.2794734558079,
    "state":"KS",
    "name":"Pawnee County"
  },
  {
    "id":1065,
    "rate":32.08057179987004,
    "state":"AL",
    "name":"Hale County"
  },
  {
    "id":13233,
    "rate":82.37240742091569,
    "state":"GA",
    "name":"Polk County"
  },
  {
    "id":5103,
    "rate":52.46035181614261,
    "state":"AR",
    "name":"Ouachita County"
  },
  {
    "id":13229,
    "rate":38.51340589328379,
    "state":"GA",
    "name":"Pierce County"
  },
  {
    "id":51077,
    "rate":0.8195533302589103,
    "state":"VA",
    "name":"Grayson County"
  },
  {
    "id":17193,
    "rate":660.0342888492661,
    "state":"IL",
    "name":"White County"
  },
  {
    "id":13287,
    "rate":71.42430397897,
    "state":"GA",
    "name":"Turner County"
  },
  {
    "id":13219,
    "rate":154.92004773269687,
    "state":"GA",
    "name":"Oconee County"
  },
  {
    "id":1017,
    "rate":83.44178132425854,
    "state":"AL",
    "name":"Chambers County"
  },
  {
    "id":19015,
    "rate":124.55591979873445,
    "state":"IA",
    "name":"Boone County"
  },
  {
    "id":37007,
    "rate":20.989715760312702,
    "state":"NC",
    "name":"Anson County"
  },
  {
    "id":13217,
    "rate":31.116555793141682,
    "state":"GA",
    "name":"Newton County"
  },
  {
    "id":26015,
    "rate":38.695173768049706,
    "state":"MI",
    "name":"Barry County"
  },
  {
    "id":39075,
    "rate":2.999188029230948,
    "state":"OH",
    "name":"Holmes County"
  },
  {
    "id":19055,
    "rate":6.378329160027317,
    "state":"IA",
    "name":"Delaware County"
  },
  {
    "id":55133,
    "rate":551.9526619683515,
    "state":"WI",
    "name":"Waukesha County"
  },
  {
    "id":27105,
    "rate":3.520808341792009,
    "state":"MN",
    "name":"Nobles County"
  },
  {
    "id":13215,
    "rate":846.7282207147539,
    "state":"GA",
    "name":"Muscogee County"
  },
  {
    "id":13245,
    "rate":1237.6657457195781,
    "state":"GA",
    "name":"Richmond County"
  },
  {
    "id":2110,
    "rate":22.804603375397246,
    "state":"AK",
    "name":"Juneau Borough"
  },
  {
    "id":19047,
    "rate":43.990523517855074,
    "state":"IA",
    "name":"Crawford County"
  },
  {
    "id":12133,
    "rate":48.865913022488634,
    "state":"FL",
    "name":"Washington County"
  },
  {
    "id":13211,
    "rate":73.20035908657356,
    "state":"GA",
    "name":"Morgan County"
  },
  {
    "id":49015,
    "rate":11.850288964315201,
    "state":"UT",
    "name":"Emery County"
  },
  {
    "id":18003,
    "rate":171.62369191202538,
    "state":"IN",
    "name":"Allen County"
  },
  {
    "id":51021,
    "rate":35.803278688524586,
    "state":"VA",
    "name":"Bland County"
  },
  {
    "id":13209,
    "rate":16.349758671006846,
    "state":"GA",
    "name":"Montgomery County"
  },
  {
    "id":29131,
    "rate":61.00351472548781,
    "state":"MO",
    "name":"Miller County"
  },
  {
    "id":45043,
    "rate":43.41317762590406,
    "state":"SC",
    "name":"Georgetown County"
  },
  {
    "id":8115,
    "rate":70.03365586874213,
    "state":"CO",
    "name":"Sedgwick County"
  },
  {
    "id":55001,
    "rate":46.55300077942322,
    "state":"WI",
    "name":"Adams County"
  },
  {
    "id":8003,
    "rate":27.637311487618696,
    "state":"CO",
    "name":"Alamosa County"
  },
  {
    "id":13207,
    "rate":96.0794285927976,
    "state":"GA",
    "name":"Monroe County"
  },
  {
    "id":48357,
    "rate":4.627624517465398,
    "state":"TX",
    "name":"Ochiltree County"
  },
  {
    "id":39011,
    "rate":113.59351153359785,
    "state":"OH",
    "name":"Auglaize County"
  },
  {
    "id":31119,
    "rate":71.55201867775186,
    "state":"NE",
    "name":"Madison County"
  },
  {
    "id":20025,
    "rate":37.67709291628335,
    "state":"KS",
    "name":"Clark County"
  },
  {
    "id":13197,
    "rate":50.08684721746086,
    "state":"GA",
    "name":"Marion County"
  },
  {
    "id":27163,
    "rate":3.2649357671888315,
    "state":"MN",
    "name":"Washington County"
  },
  {
    "id":51775,
    "rate":2622.6372091166727,
    "state":"VA",
    "name":"Salem City"
  },
  {
    "id":37133,
    "rate":51.079080744801175,
    "state":"NC",
    "name":"Onslow County"
  },
  {
    "id":26123,
    "rate":26.267878737333724,
    "state":"MI",
    "name":"Newaygo County"
  },
  {
    "id":19077,
    "rate":9.608207223099063,
    "state":"IA",
    "name":"Guthrie County"
  },
  {
    "id":18049,
    "rate":45.436991869918685,
    "state":"IN",
    "name":"Fulton County"
  },
  {
    "id":21035,
    "rate":91.66631788218059,
    "state":"KY",
    "name":"Calloway County"
  },
  {
    "id":21011,
    "rate":51.086532757013295,
    "state":"KY",
    "name":"Bath County"
  },
  {
    "id":17199,
    "rate":228.84978283660325,
    "state":"IL",
    "name":"Williamson County"
  },
  {
    "id":18135,
    "rate":19.996129281981812,
    "state":"IN",
    "name":"Randolph County"
  },
  {
    "id":13181,
    "rate":5.148005148005148,
    "state":"GA",
    "name":"Lincoln County"
  },
  {
    "id":1051,
    "rate":32.9964424320828,
    "state":"AL",
    "name":"Elmore County"
  },
  {
    "id":17095,
    "rate":927.4918759796617,
    "state":"IL",
    "name":"Knox County"
  },
  {
    "id":6087,
    "rate":47.88281226559454,
    "state":"CA",
    "name":"Santa Cruz County"
  },
  {
    "id":13189,
    "rate":67.91251563875632,
    "state":"GA",
    "name":"McDuffie County"
  },
  {
    "id":16043,
    "rate":1.0139456044379382,
    "state":"ID",
    "name":"Fremont County"
  },
  {
    "id":13175,
    "rate":144.70773400041696,
    "state":"GA",
    "name":"Laurens County"
  },
  {
    "id":19105,
    "rate":44.5618119210437,
    "state":"IA",
    "name":"Jones County"
  },
  {
    "id":21071,
    "rate":465.4651133082955,
    "state":"KY",
    "name":"Floyd County"
  },
  {
    "id":51109,
    "rate":81.28293104991496,
    "state":"VA",
    "name":"Louisa County"
  },
  {
    "id":38057,
    "rate":38.49634692434598,
    "state":"ND",
    "name":"Mercer County"
  },
  {
    "id":34023,
    "rate":301.58610559563,
    "state":"NJ",
    "name":"Middlesex County"
  },
  {
    "id":13213,
    "rate":23.253794994161552,
    "state":"GA",
    "name":"Murray County"
  },
  {
    "id":12089,
    "rate":100.14657020364415,
    "state":"FL",
    "name":"Nassau County"
  },
  {
    "id":13167,
    "rate":54.88868650070836,
    "state":"GA",
    "name":"Johnson County"
  },
  {
    "id":29223,
    "rate":6.997832099872916,
    "state":"MO",
    "name":"Wayne County"
  },
  {
    "id":54103,
    "rate":50.37088915956151,
    "state":"WV",
    "name":"Wetzel County"
  },
  {
    "id":47073,
    "rate":89.09559901768519,
    "state":"TN",
    "name":"Hawkins County"
  },
  {
    "id":20073,
    "rate":72.64970524356191,
    "state":"KS",
    "name":"Greenwood County"
  },
  {
    "id":28047,
    "rate":151.4147792101854,
    "state":"MS",
    "name":"Harrison County"
  },
  {
    "id":53015,
    "rate":18.248228971182098,
    "state":"WA",
    "name":"Cowlitz County"
  },
  {
    "id":48249,
    "rate":102.96705407741813,
    "state":"TX",
    "name":"Jim Wells County"
  },
  {
    "id":45085,
    "rate":783.6689801961872,
    "state":"SC",
    "name":"Sumter County"
  },
  {
    "id":21239,
    "rate":28.149686489077034,
    "state":"KY",
    "name":"Woodford County"
  },
  {
    "id":53057,
    "rate":28.971314774797676,
    "state":"WA",
    "name":"Skagit County"
  },
  {
    "id":1067,
    "rate":22.973098330241186,
    "state":"AL",
    "name":"Henry County"
  },
  {
    "id":13159,
    "rate":47.08517210944397,
    "state":"GA",
    "name":"Jasper County"
  },
  {
    "id":13155,
    "rate":46.45,
    "state":"GA",
    "name":"Irwin County"
  },
  {
    "id":5107,
    "rate":22.688715578663587,
    "state":"AR",
    "name":"Phillips County"
  },
  {
    "id":13153,
    "rate":144.55287277701765,
    "state":"GA",
    "name":"Houston County"
  },
  {
    "id":39141,
    "rate":65.92979286313478,
    "state":"OH",
    "name":"Ross County"
  },
  {
    "id":18093,
    "rate":29.078510153111093,
    "state":"IN",
    "name":"Lawrence County"
  },
  {
    "id":47103,
    "rate":183.06226821390126,
    "state":"TN",
    "name":"Lincoln County"
  },
  {
    "id":17093,
    "rate":26.151931948029954,
    "state":"IL",
    "name":"Kendall County"
  },
  {
    "id":30017,
    "rate":15.835373575348246,
    "state":"MT",
    "name":"Custer County"
  },
  {
    "id":21065,
    "rate":79.85779373187907,
    "state":"KY",
    "name":"Estill County"
  },
  {
    "id":35013,
    "rate":75.88470085150873,
    "state":"NM",
    "name":"Dona Ana County"
  },
  {
    "id":8063,
    "rate":2.799950574570617,
    "state":"CO",
    "name":"Kit Carson County"
  },
  {
    "id":15001,
    "rate":73.8815322896489,
    "state":"HI",
    "name":"Hawaii County"
  },
  {
    "id":26151,
    "rate":50.984141239866695,
    "state":"MI",
    "name":"Sanilac County"
  },
  {
    "id":19149,
    "rate":18.57923716892408,
    "state":"IA",
    "name":"Plymouth County"
  },
  {
    "id":17083,
    "rate":136.93163821925037,
    "state":"IL",
    "name":"Jersey County"
  },
  {
    "id":28091,
    "rate":86.91302371391772,
    "state":"MS",
    "name":"Marion County"
  },
  {
    "id":51105,
    "rate":26.02490308939269,
    "state":"VA",
    "name":"Lee County"
  },
  {
    "id":13143,
    "rate":43.865365647456684,
    "state":"GA",
    "name":"Haralson County"
  },
  {
    "id":22071,
    "rate":1339.9801711119576,
    "state":"LA",
    "name":"Orleans Parish"
  },
  {
    "id":53061,
    "rate":203.02996690051873,
    "state":"WA",
    "name":"Snohomish County"
  },
  {
    "id":26021,
    "rate":59.77424915255327,
    "state":"MI",
    "name":"Berrien County"
  },
  {
    "id":19049,
    "rate":121.20325563982753,
    "state":"IA",
    "name":"Dallas County"
  },
  {
    "id":48211,
    "rate":140.67368936795688,
    "state":"TX",
    "name":"Hemphill County"
  },
  {
    "id":20085,
    "rate":36.04922665080309,
    "state":"KS",
    "name":"Jackson County"
  },
  {
    "id":13141,
    "rate":7.598006644518273,
    "state":"GA",
    "name":"Hancock County"
  },
  {
    "id":22079,
    "rate":431.75125462679125,
    "state":"LA",
    "name":"Rapides Parish"
  },
  {
    "id":13137,
    "rate":35.80424729079907,
    "state":"GA",
    "name":"Habersham County"
  },
  {
    "id":13195,
    "rate":15.334784781212075,
    "state":"GA",
    "name":"Madison County"
  },
  {
    "id":26135,
    "rate":37.31457800511509,
    "state":"MI",
    "name":"Oscoda County"
  },
  {
    "id":48055,
    "rate":9.28469943943582,
    "state":"TX",
    "name":"Caldwell County"
  },
  {
    "id":26087,
    "rate":40.95198675496689,
    "state":"MI",
    "name":"Lapeer County"
  },
  {
    "id":13129,
    "rate":104.4449228561177,
    "state":"GA",
    "name":"Gordon County"
  },
  {
    "id":16001,
    "rate":419.4203345145768,
    "state":"ID",
    "name":"Ada County"
  },
  {
    "id":13127,
    "rate":50.54137845849802,
    "state":"GA",
    "name":"Glynn County"
  },
  {
    "id":1053,
    "rate":53.46746215306981,
    "state":"AL",
    "name":"Escambia County"
  },
  {
    "id":42021,
    "rate":201.53535267891817,
    "state":"PA",
    "name":"Cambria County"
  },
  {
    "id":29015,
    "rate":83.78837430108662,
    "state":"MO",
    "name":"Benton County"
  },
  {
    "id":13099,
    "rate":60.63837812352664,
    "state":"GA",
    "name":"Early County"
  },
  {
    "id":1039,
    "rate":35.71318998122141,
    "state":"AL",
    "name":"Covington County"
  },
  {
    "id":32021,
    "rate":4.54954954954955,
    "state":"NV",
    "name":"Mineral County"
  },
  {
    "id":12061,
    "rate":323.70995960400444,
    "state":"FL",
    "name":"Indian River County"
  },
  {
    "id":12079,
    "rate":33.84879725085911,
    "state":"FL",
    "name":"Madison County"
  },
  {
    "id":13227,
    "rate":5091.821872015281,
    "state":"GA",
    "name":"Pickens County"
  },
  {
    "id":13095,
    "rate":378.2664847369432,
    "state":"GA",
    "name":"Dougherty County"
  },
  {
    "id":18177,
    "rate":117.18696523379795,
    "state":"IN",
    "name":"Wayne County"
  },
  {
    "id":19071,
    "rate":33.82814690215867,
    "state":"IA",
    "name":"Fremont County"
  },
  {
    "id":24025,
    "rate":362.3293096792864,
    "state":"MD",
    "name":"Harford County"
  },
  {
    "id":13093,
    "rate":31.54125366466564,
    "state":"GA",
    "name":"Dooly County"
  },
  {
    "id":37171,
    "rate":85.18717377120484,
    "state":"NC",
    "name":"Surry County"
  },
  {
    "id":12021,
    "rate":566.250371763405,
    "state":"FL",
    "name":"Collier County"
  },
  {
    "id":6103,
    "rate":55.854765028531695,
    "state":"CA",
    "name":"Tehama County"
  },
  {
    "id":13091,
    "rate":111.83018779562592,
    "state":"GA",
    "name":"Dodge County"
  },
  {
    "id":5015,
    "rate":1.3609681861004421,
    "state":"AR",
    "name":"Carroll County"
  },
  {
    "id":13075,
    "rate":56.37345038258497,
    "state":"GA",
    "name":"Cook County"
  },
  {
    "id":13071,
    "rate":241.78913114220632,
    "state":"GA",
    "name":"Colquitt County"
  },
  {
    "id":1005,
    "rate":61.18664654569547,
    "state":"AL",
    "name":"Barbour County"
  },
  {
    "id":40147,
    "rate":54.53761361438794,
    "state":"OK",
    "name":"Washington County"
  },
  {
    "id":1119,
    "rate":48.800984266646786,
    "state":"AL",
    "name":"Sumter County"
  },
  {
    "id":13055,
    "rate":13.566365477488706,
    "state":"GA",
    "name":"Chattooga County"
  },
  {
    "id":6075,
    "rate":812.5163705524113,
    "state":"CA",
    "name":"San Francisco County"
  },
  {
    "id":29510,
    "rate":6002.530303125217,
    "state":"MO",
    "name":"St. Louis City"
  },
  {
    "id":48093,
    "rate":72.16572093699983,
    "state":"TX",
    "name":"Comanche County"
  },
  {
    "id":5099,
    "rate":10.54251375940694,
    "state":"AR",
    "name":"Nevada County"
  },
  {
    "id":13113,
    "rate":2266.606039168963,
    "state":"GA",
    "name":"Fayette County"
  },
  {
    "id":18091,
    "rate":98.68322567876352,
    "state":"IN",
    "name":"La Porte County"
  },
  {
    "id":13163,
    "rate":52.32188527584946,
    "state":"GA",
    "name":"Jefferson County"
  },
  {
    "id":19083,
    "rate":81.3626424214524,
    "state":"IA",
    "name":"Hardin County"
  },
  {
    "id":40145,
    "rate":10.915769964131899,
    "state":"OK",
    "name":"Wagoner County"
  },
  {
    "id":13151,
    "rate":247.5676803730515,
    "state":"GA",
    "name":"Henry County"
  },
  {
    "id":5005,
    "rate":634.3491491588968,
    "state":"AR",
    "name":"Baxter County"
  },
  {
    "id":12123,
    "rate":59.734816834513374,
    "state":"FL",
    "name":"Taylor County"
  },
  {
    "id":19135,
    "rate":52.18684177920953,
    "state":"IA",
    "name":"Monroe County"
  },
  {
    "id":40115,
    "rate":16.775393774029514,
    "state":"OK",
    "name":"Ottawa County"
  },
  {
    "id":13033,
    "rate":72.14242476651674,
    "state":"GA",
    "name":"Burke County"
  },
  {
    "id":47185,
    "rate":101.52225633154262,
    "state":"TN",
    "name":"White County"
  },
  {
    "id":24045,
    "rate":662.7961023966878,
    "state":"MD",
    "name":"Wicomico County"
  },
  {
    "id":51810,
    "rate":416.4868351096643,
    "state":"VA",
    "name":"Virginia Beach City"
  },
  {
    "id":13027,
    "rate":43.41764819463217,
    "state":"GA",
    "name":"Brooks County"
  },
  {
    "id":42017,
    "rate":425.70565755706326,
    "state":"PA",
    "name":"Bucks County"
  },
  {
    "id":13043,
    "rate":40.12584269662921,
    "state":"GA",
    "name":"Candler County"
  },
  {
    "id":47109,
    "rate":136.4934469450919,
    "state":"TN",
    "name":"McNairy County"
  },
  {
    "id":47085,
    "rate":5.072210065645514,
    "state":"TN",
    "name":"Humphreys County"
  },
  {
    "id":29151,
    "rate":13.15800865800866,
    "state":"MO",
    "name":"Osage County"
  },
  {
    "id":45083,
    "rate":1062.0218014638324,
    "state":"SC",
    "name":"Spartanburg County"
  },
  {
    "id":18105,
    "rate":1072.567857370355,
    "state":"IN",
    "name":"Monroe County"
  },
  {
    "id":19031,
    "rate":11.99620081411126,
    "state":"IA",
    "name":"Cedar County"
  },
  {
    "id":13021,
    "rate":749.9132433539922,
    "state":"GA",
    "name":"Bibb County"
  },
  {
    "id":20197,
    "rate":8.626389284696495,
    "state":"KS",
    "name":"Wabaunsee County"
  },
  {
    "id":8073,
    "rate":12.357693720161587,
    "state":"CO",
    "name":"Lincoln County"
  },
  {
    "id":39069,
    "rate":38.12687099073415,
    "state":"OH",
    "name":"Henry County"
  },
  {
    "id":13165,
    "rate":8.549217124712582,
    "state":"GA",
    "name":"Jenkins County"
  },
  {
    "id":6035,
    "rate":9.007393331155912,
    "state":"CA",
    "name":"Lassen County"
  },
  {
    "id":13087,
    "rate":394.7893529476022,
    "state":"GA",
    "name":"Decatur County"
  },
  {
    "id":11001,
    "rate":1635.805114638455,
    "state":"DC",
    "name":"District of Columbia"
  },
  {
    "id":6027,
    "rate":1.665942658557776,
    "state":"CA",
    "name":"Inyo County"
  },
  {
    "id":6021,
    "rate":28.985968931204805,
    "state":"CA",
    "name":"Glenn County"
  },
  {
    "id":12075,
    "rate":453.0339775483161,
    "state":"FL",
    "name":"Levy County"
  },
  {
    "id":1071,
    "rate":45.6441336148394,
    "state":"AL",
    "name":"Jackson County"
  },
  {
    "id":13019,
    "rate":24.43686722971201,
    "state":"GA",
    "name":"Berrien County"
  },
  {
    "id":6105,
    "rate":23.186365320489074,
    "state":"CA",
    "name":"Trinity County"
  },
  {
    "id":13013,
    "rate":940.7052771087774,
    "state":"GA",
    "name":"Bartow County"
  },
  {
    "id":21113,
    "rate":74.1948631035248,
    "state":"KY",
    "name":"Jessamine County"
  },
  {
    "id":38053,
    "rate":8.16195856873823,
    "state":"ND",
    "name":"McKenzie County"
  },
  {
    "id":36047,
    "rate":219.90688828613872,
    "state":"NY",
    "name":"Kings County"
  },
  {
    "id":13003,
    "rate":15.719655632351156,
    "state":"GA",
    "name":"Atkinson County"
  },
  {
    "id":12129,
    "rate":42.03095091327905,
    "state":"FL",
    "name":"Wakulla County"
  },
  {
    "id":16045,
    "rate":108.62209441648695,
    "state":"ID",
    "name":"Gem County"
  },
  {
    "id":55013,
    "rate":3.004493065051768,
    "state":"WI",
    "name":"Burnett County"
  },
  {
    "id":6069,
    "rate":52.56299344129697,
    "state":"CA",
    "name":"San Benito County"
  },
  {
    "id":29043,
    "rate":48.21348441358216,
    "state":"MO",
    "name":"Christian County"
  },
  {
    "id":12125,
    "rate":135.5699192860423,
    "state":"FL",
    "name":"Union County"
  },
  {
    "id":12121,
    "rate":34.928171470534245,
    "state":"FL",
    "name":"Suwannee County"
  },
  {
    "id":28089,
    "rate":717.9656576528995,
    "state":"MS",
    "name":"Madison County"
  },
  {
    "id":17077,
    "rate":105.06709403128839,
    "state":"IL",
    "name":"Jackson County"
  },
  {
    "id":20151,
    "rate":43.20731582711761,
    "state":"KS",
    "name":"Pratt County"
  },
  {
    "id":48231,
    "rate":30.213505177099222,
    "state":"TX",
    "name":"Hunt County"
  },
  {
    "id":5021,
    "rate":25.342105263157894,
    "state":"AR",
    "name":"Clay County"
  },
  {
    "id":12097,
    "rate":285.464165830363,
    "state":"FL",
    "name":"Osceola County"
  },
  {
    "id":34021,
    "rate":1259.3250094158898,
    "state":"NJ",
    "name":"Mercer County"
  },
  {
    "id":8077,
    "rate":36.922504129322256,
    "state":"CO",
    "name":"Mesa County"
  },
  {
    "id":12119,
    "rate":45.28607412738396,
    "state":"FL",
    "name":"Sumter County"
  },
  {
    "id":38019,
    "rate":10.035505959928988,
    "state":"ND",
    "name":"Cavalier County"
  },
  {
    "id":13305,
    "rate":6.074874057489054,
    "state":"GA",
    "name":"Wayne County"
  },
  {
    "id":18157,
    "rate":700.6988438657545,
    "state":"IN",
    "name":"Tippecanoe County"
  },
  {
    "id":18143,
    "rate":86.14068281197451,
    "state":"IN",
    "name":"Scott County"
  },
  {
    "id":48189,
    "rate":62.100726952307504,
    "state":"TX",
    "name":"Hale County"
  },
  {
    "id":1009,
    "rate":35.481748285654916,
    "state":"AL",
    "name":"Blount County"
  },
  {
    "id":31097,
    "rate":59.25832687838885,
    "state":"NE",
    "name":"Johnson County"
  },
  {
    "id":10001,
    "rate":74.68598284685028,
    "state":"DE",
    "name":"Kent County"
  },
  {
    "id":13063,
    "rate":55.208842717265156,
    "state":"GA",
    "name":"Clayton County"
  },
  {
    "id":42083,
    "rate":54.97687005597445,
    "state":"PA",
    "name":"McKean County"
  },
  {
    "id":1013,
    "rate":66.77789210642364,
    "state":"AL",
    "name":"Butler County"
  },
  {
    "id":29107,
    "rate":27.53511129904256,
    "state":"MO",
    "name":"Lafayette County"
  },
  {
    "id":45059,
    "rate":83.11901959008725,
    "state":"SC",
    "name":"Laurens County"
  },
  {
    "id":40131,
    "rate":62.99881282152751,
    "state":"OK",
    "name":"Rogers County"
  },
  {
    "id":4013,
    "rate":588.1510540043457,
    "state":"AZ",
    "name":"Maricopa County"
  },
  {
    "id":26113,
    "rate":17.448294207621203,
    "state":"MI",
    "name":"Missaukee County"
  },
  {
    "id":55067,
    "rate":51.70155608495108,
    "state":"WI",
    "name":"Langlade County"
  },
  {
    "id":37191,
    "rate":763.6922508513782,
    "state":"NC",
    "name":"Wayne County"
  },
  {
    "id":35027,
    "rate":1.4197347585114806,
    "state":"NM",
    "name":"Lincoln County"
  },
  {
    "id":20117,
    "rate":16.40274190343731,
    "state":"KS",
    "name":"Marshall County"
  },
  {
    "id":12113,
    "rate":82.13184509905442,
    "state":"FL",
    "name":"Santa Rosa County"
  },
  {
    "id":30063,
    "rate":177.41504133124425,
    "state":"MT",
    "name":"Missoula County"
  },
  {
    "id":22041,
    "rate":48.25207393392518,
    "state":"LA",
    "name":"Franklin Parish"
  },
  {
    "id":12111,
    "rate":527.129204151517,
    "state":"FL",
    "name":"St. Lucie County"
  },
  {
    "id":53063,
    "rate":1394.6728217547036,
    "state":"WA",
    "name":"Spokane County"
  },
  {
    "id":30085,
    "rate":9.429490124023886,
    "state":"MT",
    "name":"Roosevelt County"
  },
  {
    "id":37087,
    "rate":32.83301010513423,
    "state":"NC",
    "name":"Haywood County"
  },
  {
    "id":21145,
    "rate":1518.183106100998,
    "state":"KY",
    "name":"McCracken County"
  },
  {
    "id":28135,
    "rate":4.362047275375753,
    "state":"MS",
    "name":"Tallahatchie County"
  },
  {
    "id":22091,
    "rate":47.47643219724437,
    "state":"LA",
    "name":"St Helena Parish"
  },
  {
    "id":5135,
    "rate":3.9494517093766497,
    "state":"AR",
    "name":"Sharp County"
  },
  {
    "id":6081,
    "rate":483.1765752533288,
    "state":"CA",
    "name":"San Mateo County"
  },
  {
    "id":12105,
    "rate":673.6018507090375,
    "state":"FL",
    "name":"Polk County"
  },
  {
    "id":5141,
    "rate":21.839113960944328,
    "state":"AR",
    "name":"Van Buren County"
  },
  {
    "id":12101,
    "rate":666.2548979609178,
    "state":"FL",
    "name":"Pasco County"
  },
  {
    "id":21187,
    "rate":99.621782362234,
    "state":"KY",
    "name":"Owen County"
  },
  {
    "id":19017,
    "rate":17.129951355107714,
    "state":"IA",
    "name":"Bremer County"
  },
  {
    "id":48049,
    "rate":108.06006815120057,
    "state":"TX",
    "name":"Brown County"
  },
  {
    "id":26063,
    "rate":99.93008069980904,
    "state":"MI",
    "name":"Huron County"
  },
  {
    "id":1115,
    "rate":159.65396583103387,
    "state":"AL",
    "name":"St. Clair County"
  },
  {
    "id":13009,
    "rate":123.61597244645354,
    "state":"GA",
    "name":"Baldwin County"
  },
  {
    "id":18175,
    "rate":37.50080572963294,
    "state":"IN",
    "name":"Washington County"
  },
  {
    "id":39007,
    "rate":86.80653075879678,
    "state":"OH",
    "name":"Ashtabula County"
  },
  {
    "id":29143,
    "rate":31.863737215217284,
    "state":"MO",
    "name":"New Madrid County"
  },
  {
    "id":17029,
    "rate":201.20359493576476,
    "state":"IL",
    "name":"Coles County"
  },
  {
    "id":30073,
    "rate":26.7188761504925,
    "state":"MT",
    "name":"Pondera County"
  },
  {
    "id":13179,
    "rate":20.643972412105644,
    "state":"GA",
    "name":"Liberty County"
  },
  {
    "id":45045,
    "rate":1090.970331520832,
    "state":"SC",
    "name":"Greenville County"
  },
  {
    "id":31059,
    "rate":65.97599164926932,
    "state":"NE",
    "name":"Fillmore County"
  },
  {
    "id":8007,
    "rate":30.41883090114602,
    "state":"CO",
    "name":"Archuleta County"
  },
  {
    "id":8107,
    "rate":7.4611108717197405,
    "state":"CO",
    "name":"Routt County"
  },
  {
    "id":29091,
    "rate":67.29530796120329,
    "state":"MO",
    "name":"Howell County"
  },
  {
    "id":39101,
    "rate":771.6171208575525,
    "state":"OH",
    "name":"Marion County"
  },
  {
    "id":20103,
    "rate":99.8604124586705,
    "state":"KS",
    "name":"Leavenworth County"
  },
  {
    "id":1077,
    "rate":129.88424277731025,
    "state":"AL",
    "name":"Lauderdale County"
  },
  {
    "id":12093,
    "rate":30.320987654320998,
    "state":"FL",
    "name":"Okeechobee County"
  },
  {
    "id":26065,
    "rate":350.8349393492794,
    "state":"MI",
    "name":"Ingham County"
  },
  {
    "id":26145,
    "rate":174.68275263784392,
    "state":"MI",
    "name":"Saginaw County"
  },
  {
    "id":12091,
    "rate":315.4446352336993,
    "state":"FL",
    "name":"Okaloosa County"
  },
  {
    "id":47041,
    "rate":183.6918604651163,
    "state":"TN",
    "name":"De Kalb County"
  },
  {
    "id":19091,
    "rate":116.28788657145789,
    "state":"IA",
    "name":"Humboldt County"
  },
  {
    "id":29177,
    "rate":99.92670656605084,
    "state":"MO",
    "name":"Ray County"
  },
  {
    "id":55115,
    "rate":3.888661875345528,
    "state":"WI",
    "name":"Shawano County"
  },
  {
    "id":12071,
    "rate":253.21933121236364,
    "state":"FL",
    "name":"Lee County"
  },
  {
    "id":29075,
    "rate":24.97279011619356,
    "state":"MO",
    "name":"Gentry County"
  },
  {
    "id":20181,
    "rate":38.372244897959185,
    "state":"KS",
    "name":"Sherman County"
  },
  {
    "id":55129,
    "rate":8.554467950742028,
    "state":"WI",
    "name":"Washburn County"
  },
  {
    "id":18163,
    "rate":1457.882465524584,
    "state":"IN",
    "name":"Vanderburgh County"
  },
  {
    "id":12067,
    "rate":12.937968643490118,
    "state":"FL",
    "name":"Lafayette County"
  },
  {
    "id":39139,
    "rate":86.62870754070546,
    "state":"OH",
    "name":"Richland County"
  },
  {
    "id":28023,
    "rate":42.8808729918157,
    "state":"MS",
    "name":"Clarke County"
  },
  {
    "id":21109,
    "rate":24.20514363062115,
    "state":"KY",
    "name":"Jackson County"
  },
  {
    "id":48103,
    "rate":9.719728486971754,
    "state":"TX",
    "name":"Crane County"
  },
  {
    "id":1033,
    "rate":1256.4971637324913,
    "state":"AL",
    "name":"Colbert County"
  },
  {
    "id":41005,
    "rate":29.742869061897057,
    "state":"OR",
    "name":"Clackamas County"
  },
  {
    "id":12051,
    "rate":79.59109483627874,
    "state":"FL",
    "name":"Hendry County"
  },
  {
    "id":47187,
    "rate":42.76620544247994,
    "state":"TN",
    "name":"Williamson County"
  },
  {
    "id":39163,
    "rate":27.68155369152875,
    "state":"OH",
    "name":"Vinton County"
  },
  {
    "id":29195,
    "rate":31.233810497614183,
    "state":"MO",
    "name":"Saline County"
  },
  {
    "id":12045,
    "rate":21.596043395022335,
    "state":"FL",
    "name":"Gulf County"
  },
  {
    "id":48395,
    "rate":28.56094602789569,
    "state":"TX",
    "name":"Robertson County"
  },
  {
    "id":37149,
    "rate":66.01837218490715,
    "state":"NC",
    "name":"Polk County"
  },
  {
    "id":5115,
    "rate":54.31653299743291,
    "state":"AR",
    "name":"Pope County"
  },
  {
    "id":40049,
    "rate":35.30619728639531,
    "state":"OK",
    "name":"Garvin County"
  },
  {
    "id":6099,
    "rate":147.83258703704385,
    "state":"CA",
    "name":"Stanislaus County"
  },
  {
    "id":17001,
    "rate":187.5651423384276,
    "state":"IL",
    "name":"Adams County"
  },
  {
    "id":51009,
    "rate":103.70134073046691,
    "state":"VA",
    "name":"Amherst County"
  },
  {
    "id":12037,
    "rate":35.94036500728301,
    "state":"FL",
    "name":"Franklin County"
  },
  {
    "id":12031,
    "rate":1937.286618706672,
    "state":"FL",
    "name":"Duval County"
  },
  {
    "id":46015,
    "rate":64.33823529411764,
    "state":"SD",
    "name":"Brule County"
  },
  {
    "id":29099,
    "rate":142.7231011076683,
    "state":"MO",
    "name":"Jefferson County"
  },
  {
    "id":37121,
    "rate":6.793778876813952,
    "state":"NC",
    "name":"Mitchell County"
  },
  {
    "id":22113,
    "rate":38.76167746334812,
    "state":"LA",
    "name":"Vermilion Parish"
  },
  {
    "id":47143,
    "rate":52.76782121521651,
    "state":"TN",
    "name":"Rhea County"
  },
  {
    "id":20205,
    "rate":391.9695142011186,
    "state":"KS",
    "name":"Wilson County"
  },
  {
    "id":12027,
    "rate":21.421787307526262,
    "state":"FL",
    "name":"Desoto County"
  },
  {
    "id":26045,
    "rate":84.0303608476586,
    "state":"MI",
    "name":"Eaton County"
  },
  {
    "id":31145,
    "rate":154.4075183873604,
    "state":"NE",
    "name":"Red Willow County"
  },
  {
    "id":6101,
    "rate":186.6677937804451,
    "state":"CA",
    "name":"Sutter County"
  },
  {
    "id":27069,
    "rate":7.043285238623752,
    "state":"MN",
    "name":"Kittson County"
  },
  {
    "id":48339,
    "rate":230.23825082093228,
    "state":"TX",
    "name":"Montgomery County"
  },
  {
    "id":20021,
    "rate":13.831511496419148,
    "state":"KS",
    "name":"Cherokee County"
  },
  {
    "id":13035,
    "rate":56.32727892896734,
    "state":"GA",
    "name":"Butts County"
  },
  {
    "id":29061,
    "rate":17.4440817313505,
    "state":"MO",
    "name":"Daviess County"
  },
  {
    "id":21111,
    "rate":2582.9346343203456,
    "state":"KY",
    "name":"Jefferson County"
  },
  {
    "id":18169,
    "rate":97.16972986308132,
    "state":"IN",
    "name":"Wabash County"
  },
  {
    "id":12019,
    "rate":90.53521982150762,
    "state":"FL",
    "name":"Clay County"
  },
  {
    "id":48157,
    "rate":253.88684291148593,
    "state":"TX",
    "name":"Fort Bend County"
  },
  {
    "id":20209,
    "rate":103.14890491704486,
    "state":"KS",
    "name":"Wyandotte County"
  },
  {
    "id":1121,
    "rate":68.46649075227835,
    "state":"AL",
    "name":"Talladega County"
  },
  {
    "id":30001,
    "rate":18.63723813595554,
    "state":"MT",
    "name":"Beaverhead County"
  },
  {
    "id":48497,
    "rate":53.87185983738223,
    "state":"TX",
    "name":"Wise County"
  },
  {
    "id":8123,
    "rate":15.905658449064875,
    "state":"CO",
    "name":"Weld County"
  },
  {
    "id":15009,
    "rate":569.1542112704504,
    "state":"HI",
    "name":"Maui County"
  },
  {
    "id":17157,
    "rate":65.37408565271498,
    "state":"IL",
    "name":"Randolph County"
  },
  {
    "id":27019,
    "rate":11.884013206944298,
    "state":"MN",
    "name":"Carver County"
  },
  {
    "id":12013,
    "rate":17.568835406893736,
    "state":"FL",
    "name":"Calhoun County"
  },
  {
    "id":1079,
    "rate":52.986736144007594,
    "state":"AL",
    "name":"Lawrence County"
  },
  {
    "id":37059,
    "rate":11.715176715176712,
    "state":"NC",
    "name":"Davie County"
  },
  {
    "id":1001,
    "rate":75.33374402087257,
    "state":"AL",
    "name":"Autauga County"
  },
  {
    "id":12107,
    "rate":84.14940029267359,
    "state":"FL",
    "name":"Putnam County"
  },
  {
    "id":51770,
    "rate":5000.259095413721,
    "state":"VA",
    "name":"Roanoke City"
  },
  {
    "id":5089,
    "rate":16.702621271467308,
    "state":"AR",
    "name":"Marion County"
  },
  {
    "id":20129,
    "rate":8.02803440586174,
    "state":"KS",
    "name":"Morton County"
  },
  {
    "id":41007,
    "rate":66.29140668933937,
    "state":"OR",
    "name":"Clatsop County"
  },
  {
    "id":13241,
    "rate":31.62690868951984,
    "state":"GA",
    "name":"Rabun County"
  },
  {
    "id":17121,
    "rate":60.89895434575957,
    "state":"IL",
    "name":"Marion County"
  },
  {
    "id":1089,
    "rate":311.41197195422177,
    "state":"AL",
    "name":"Madison County"
  },
  {
    "id":13089,
    "rate":1062.2919960920738,
    "state":"GA",
    "name":"Dekalb County"
  },
  {
    "id":51043,
    "rate":35.37231070131322,
    "state":"VA",
    "name":"Clarke County"
  },
  {
    "id":12007,
    "rate":55.68369453044375,
    "state":"FL",
    "name":"Bradford County"
  },
  {
    "id":35007,
    "rate":24.371882086167794,
    "state":"NM",
    "name":"Colfax County"
  },
  {
    "id":19167,
    "rate":39.8241527890998,
    "state":"IA",
    "name":"Sioux County"
  },
  {
    "id":45039,
    "rate":81.45308288049291,
    "state":"SC",
    "name":"Fairfield County"
  },
  {
    "id":36083,
    "rate":230.5825583435691,
    "state":"NY",
    "name":"Rensselaer County"
  },
  {
    "id":18167,
    "rate":3281.012165136429,
    "state":"IN",
    "name":"Vigo County"
  },
  {
    "id":28107,
    "rate":25.112581244196846,
    "state":"MS",
    "name":"Panola County"
  },
  {
    "id":23031,
    "rate":333.74318655647943,
    "state":"ME",
    "name":"York County"
  },
  {
    "id":1095,
    "rate":73.74176855455286,
    "state":"AL",
    "name":"Marshall County"
  },
  {
    "id":5033,
    "rate":70.18390841716047,
    "state":"AR",
    "name":"Crawford County"
  },
  {
    "id":48147,
    "rate":26.475183414025597,
    "state":"TX",
    "name":"Fannin County"
  },
  {
    "id":21003,
    "rate":15.6971973703722,
    "state":"KY",
    "name":"Allen County"
  },
  {
    "id":9015,
    "rate":83.8329984144346,
    "state":"CT",
    "name":"Windham County"
  },
  {
    "id":9013,
    "rate":940.3622181997696,
    "state":"CT",
    "name":"Tolland County"
  },
  {
    "id":21033,
    "rate":19.10068880117638,
    "state":"KY",
    "name":"Caldwell County"
  },
  {
    "id":9011,
    "rate":130.46076403053794,
    "state":"CT",
    "name":"New London County"
  },
  {
    "id":13313,
    "rate":66.99642396813553,
    "state":"GA",
    "name":"Whitfield County"
  },
  {
    "id":42117,
    "rate":351.6631855624134,
    "state":"PA",
    "name":"Tioga County"
  },
  {
    "id":21017,
    "rate":102.76105221044205,
    "state":"KY",
    "name":"Bourbon County"
  },
  {
    "id":30097,
    "rate":3.889043769166434,
    "state":"MT",
    "name":"Sweet Grass County"
  },
  {
    "id":13059,
    "rate":215.97605387877286,
    "state":"GA",
    "name":"Clarke County"
  },
  {
    "id":9005,
    "rate":554.7662673745431,
    "state":"CT",
    "name":"Litchfield County"
  },
  {
    "id":12011,
    "rate":720.097061556578,
    "state":"FL",
    "name":"Broward County"
  },
  {
    "id":17091,
    "rate":139.0692134672264,
    "state":"IL",
    "name":"Kankakee County"
  },
  {
    "id":27159,
    "rate":5.398495142084886,
    "state":"MN",
    "name":"Wadena County"
  },
  {
    "id":12099,
    "rate":863.4087116787497,
    "state":"FL",
    "name":"Palm Beach County"
  },
  {
    "id":13123,
    "rate":16.357028895585888,
    "state":"GA",
    "name":"Gilmer County"
  },
  {
    "id":13097,
    "rate":146.78120753251793,
    "state":"GA",
    "name":"Douglas County"
  },
  {
    "id":13069,
    "rate":85.48766621028938,
    "state":"GA",
    "name":"Coffee County"
  },
  {
    "id":6115,
    "rate":65.58230675418282,
    "state":"CA",
    "name":"Yuba County"
  },
  {
    "id":21149,
    "rate":3.0840336134453783,
    "state":"KY",
    "name":"McLean County"
  },
  {
    "id":22019,
    "rate":1625.7538286078322,
    "state":"LA",
    "name":"Calcasieu Parish"
  },
  {
    "id":18041,
    "rate":25.87231379094512,
    "state":"IN",
    "name":"Fayette County"
  },
  {
    "id":13047,
    "rate":716.4860454734372,
    "state":"GA",
    "name":"Catoosa County"
  },
  {
    "id":28077,
    "rate":2.4013967145464643,
    "state":"MS",
    "name":"Lawrence County"
  },
  {
    "id":39083,
    "rate":48.806090402354606,
    "state":"OH",
    "name":"Knox County"
  },
  {
    "id":19141,
    "rate":9.842547482877922,
    "state":"IA",
    "name":"Obrien County"
  },
  {
    "id":8097,
    "rate":11.756615598885796,
    "state":"CO",
    "name":"Pitkin County"
  },
  {
    "id":48223,
    "rate":35.96132128740824,
    "state":"TX",
    "name":"Hopkins County"
  },
  {
    "id":20159,
    "rate":28.53232091117994,
    "state":"KS",
    "name":"Rice County"
  },
  {
    "id":5075,
    "rate":37.77979928399554,
    "state":"AR",
    "name":"Lawrence County"
  },
  {
    "id":21231,
    "rate":13.657761732851988,
    "state":"KY",
    "name":"Wayne County"
  },
  {
    "id":33005,
    "rate":4.5957424633262995,
    "state":"NH",
    "name":"Cheshire County"
  },
  {
    "id":17057,
    "rate":53.3557925748111,
    "state":"IL",
    "name":"Fulton County"
  },
  {
    "id":29149,
    "rate":9.330726561789579,
    "state":"MO",
    "name":"Oregon County"
  },
  {
    "id":22063,
    "rate":46.14275753349907,
    "state":"LA",
    "name":"Livingston Parish"
  },
  {
    "id":6005,
    "rate":48.91859085023736,
    "state":"CA",
    "name":"Amador County"
  },
  {
    "id":42113,
    "rate":16.865024019835737,
    "state":"PA",
    "name":"Sullivan County"
  },
  {
    "id":5069,
    "rate":52.74389916867792,
    "state":"AR",
    "name":"Jefferson County"
  },
  {
    "id":20099,
    "rate":70.92935576605872,
    "state":"KS",
    "name":"Labette County"
  },
  {
    "id":17169,
    "rate":92.63692225487577,
    "state":"IL",
    "name":"Schuyler County"
  },
  {
    "id":21173,
    "rate":294.18563988095235,
    "state":"KY",
    "name":"Montgomery County"
  },
  {
    "id":1047,
    "rate":80.98811830341513,
    "state":"AL",
    "name":"Dallas County"
  },
  {
    "id":48005,
    "rate":2170.0041102928594,
    "state":"TX",
    "name":"Angelina County"
  },
  {
    "id":8067,
    "rate":34.39804989962719,
    "state":"CO",
    "name":"La Plata County"
  },
  {
    "id":5023,
    "rate":37.34812630925597,
    "state":"AR",
    "name":"Cleburne County"
  },
  {
    "id":8031,
    "rate":1018.2950235695762,
    "state":"CO",
    "name":"Denver County"
  },
  {
    "id":5043,
    "rate":220.39201065246343,
    "state":"AR",
    "name":"Drew County"
  },
  {
    "id":48027,
    "rate":65.34985625736893,
    "state":"TX",
    "name":"Bell County"
  },
  {
    "id":28105,
    "rate":212.4961189639676,
    "state":"MS",
    "name":"Oktibbeha County"
  },
  {
    "id":5143,
    "rate":96.01363030972806,
    "state":"AR",
    "name":"Washington County"
  },
  {
    "id":51097,
    "rate":162.3089983022071,
    "state":"VA",
    "name":"King and Queen County"
  },
  {
    "id":48083,
    "rate":34.72391930835734,
    "state":"TX",
    "name":"Coleman County"
  },
  {
    "id":26033,
    "rate":72.2230485177967,
    "state":"MI",
    "name":"Chippewa County"
  },
  {
    "id":5145,
    "rate":100.95255047551238,
    "state":"AR",
    "name":"White County"
  },
  {
    "id":18095,
    "rate":182.5137392158668,
    "state":"IN",
    "name":"Madison County"
  },
  {
    "id":19081,
    "rate":31.18416338230025,
    "state":"IA",
    "name":"Hancock County"
  },
  {
    "id":12033,
    "rate":691.3374466658328,
    "state":"FL",
    "name":"Escambia County"
  },
  {
    "id":51169,
    "rate":73.63405113810799,
    "state":"VA",
    "name":"Scott County"
  },
  {
    "id":39113,
    "rate":706.1503333825559,
    "state":"OH",
    "name":"Montgomery County"
  },
  {
    "id":8015,
    "rate":2.154339059824338,
    "state":"CO",
    "name":"Chaffee County"
  },
  {
    "id":17191,
    "rate":78.41405450935564,
    "state":"IL",
    "name":"Wayne County"
  },
  {
    "id":18147,
    "rate":16.868023952095808,
    "state":"IN",
    "name":"Spencer County"
  },
  {
    "id":8014,
    "rate":110.49396528342825,
    "state":"CO",
    "name":"Broomfield County"
  },
  {
    "id":51181,
    "rate":1.5394736842105263,
    "state":"VA",
    "name":"Surry County"
  },
  {
    "id":8125,
    "rate":2.261539982208164,
    "state":"CO",
    "name":"Yuma County"
  },
  {
    "id":31157,
    "rate":66.36496666847324,
    "state":"NE",
    "name":"Scotts Bluff County"
  },
  {
    "id":37081,
    "rate":1104.6833661413416,
    "state":"NC",
    "name":"Guilford County"
  },
  {
    "id":21195,
    "rate":400.3613524774251,
    "state":"KY",
    "name":"Pike County"
  },
  {
    "id":6047,
    "rate":114.78789684586089,
    "state":"CA",
    "name":"Merced County"
  },
  {
    "id":27113,
    "rate":6.929855731646651,
    "state":"MN",
    "name":"Pennington County"
  },
  {
    "id":27051,
    "rate":5.264928511354079,
    "state":"MN",
    "name":"Grant County"
  },
  {
    "id":34003,
    "rate":349.32138977011095,
    "state":"NJ",
    "name":"Bergen County"
  },
  {
    "id":8011,
    "rate":8.610297916307903,
    "state":"CO",
    "name":"Bent County"
  },
  {
    "id":36065,
    "rate":391.6479543210786,
    "state":"NY",
    "name":"Oneida County"
  },
  {
    "id":6113,
    "rate":164.95366313367438,
    "state":"CA",
    "name":"Yolo County"
  },
  {
    "id":39143,
    "rate":66.09791941875825,
    "state":"OH",
    "name":"Sandusky County"
  },
  {
    "id":19021,
    "rate":0.6574849133735644,
    "state":"IA",
    "name":"Buena Vista County"
  },
  {
    "id":21077,
    "rate":95.28088564362267,
    "state":"KY",
    "name":"Gallatin County"
  },
  {
    "id":17039,
    "rate":91.68202764976962,
    "state":"IL",
    "name":"De Witt County"
  },
  {
    "id":42121,
    "rate":47.71125656863649,
    "state":"PA",
    "name":"Venango County"
  },
  {
    "id":39033,
    "rate":70.69596471164839,
    "state":"OH",
    "name":"Crawford County"
  },
  {
    "id":21183,
    "rate":67.57277914289286,
    "state":"KY",
    "name":"Ohio County"
  },
  {
    "id":5061,
    "rate":8.281546316557256,
    "state":"AR",
    "name":"Howard County"
  },
  {
    "id":19013,
    "rate":445.21338893066286,
    "state":"IA",
    "name":"Black Hawk County"
  },
  {
    "id":28001,
    "rate":144.38256432593883,
    "state":"MS",
    "name":"Adams County"
  },
  {
    "id":39051,
    "rate":51.713942986169926,
    "state":"OH",
    "name":"Fulton County"
  },
  {
    "id":5137,
    "rate":12.904656319290465,
    "state":"AR",
    "name":"Stone County"
  },
  {
    "id":6085,
    "rate":683.3151249960629,
    "state":"CA",
    "name":"Santa Clara County"
  },
  {
    "id":27147,
    "rate":0.3206523236274483,
    "state":"MN",
    "name":"Steele County"
  },
  {
    "id":13045,
    "rate":117.97232914322618,
    "state":"GA",
    "name":"Carroll County"
  },
  {
    "id":6079,
    "rate":109.6788670008163,
    "state":"CA",
    "name":"San Luis Obispo County"
  },
  {
    "id":5029,
    "rate":73.13112745098039,
    "state":"AR",
    "name":"Conway County"
  },
  {
    "id":12115,
    "rate":544.2184432068381,
    "state":"FL",
    "name":"Sarasota County"
  },
  {
    "id":26119,
    "rate":15.204382638010955,
    "state":"MI",
    "name":"Montmorency County"
  },
  {
    "id":37153,
    "rate":108.13264052090298,
    "state":"NC",
    "name":"Richmond County"
  },
  {
    "id":6071,
    "rate":284.16752256865743,
    "state":"CA",
    "name":"San Bernardino County"
  },
  {
    "id":6065,
    "rate":176.94413935685674,
    "state":"CA",
    "name":"Riverside County"
  },
  {
    "id":12055,
    "rate":98.35431810535545,
    "state":"FL",
    "name":"Highlands County"
  },
  {
    "id":5119,
    "rate":2049.9465632373526,
    "state":"AR",
    "name":"Pulaski County"
  },
  {
    "id":5095,
    "rate":4.969387755102041,
    "state":"AR",
    "name":"Monroe County"
  },
  {
    "id":19007,
    "rate":24.945322948627176,
    "state":"IA",
    "name":"Appanoose County"
  },
  {
    "id":51075,
    "rate":837.7330210772834,
    "state":"VA",
    "name":"Goochland County"
  },
  {
    "id":6053,
    "rate":677.9603246632948,
    "state":"CA",
    "name":"Monterey County"
  },
  {
    "id":17163,
    "rate":191.26844876016168,
    "state":"IL",
    "name":"St. Clair County"
  },
  {
    "id":6043,
    "rate":7.289436817035583,
    "state":"CA",
    "name":"Mariposa County"
  },
  {
    "id":13007,
    "rate":79.49539922825764,
    "state":"GA",
    "name":"Baker County"
  },
  {
    "id":28153,
    "rate":18.866488975042405,
    "state":"MS",
    "name":"Wayne County"
  },
  {
    "id":2220,
    "rate":17.369757174392934,
    "state":"AK",
    "name":"Sitka Borough"
  },
  {
    "id":55093,
    "rate":11.399911491370403,
    "state":"WI",
    "name":"Pierce County"
  },
  {
    "id":5047,
    "rate":20.764686211124733,
    "state":"AR",
    "name":"Franklin County"
  },
  {
    "id":55109,
    "rate":4.778338418211688,
    "state":"WI",
    "name":"St Croix County"
  },
  {
    "id":6049,
    "rate":2.357479639948564,
    "state":"CA",
    "name":"Modoc County"
  },
  {
    "id":12081,
    "rate":1206.0054599172024,
    "state":"FL",
    "name":"Manatee County"
  },
  {
    "id":48015,
    "rate":844.4867584375655,
    "state":"TX",
    "name":"Austin County"
  },
  {
    "id":39091,
    "rate":38.762265147181765,
    "state":"OH",
    "name":"Logan County"
  },
  {
    "id":6041,
    "rate":1235.5283572067183,
    "state":"CA",
    "name":"Marin County"
  },
  {
    "id":6033,
    "rate":38.08764691172791,
    "state":"CA",
    "name":"Lake County"
  },
  {
    "id":48457,
    "rate":12.203990303934365,
    "state":"TX",
    "name":"Tyler County"
  },
  {
    "id":20173,
    "rate":554.6078468344914,
    "state":"KS",
    "name":"Sedgwick County"
  },
  {
    "id":8087,
    "rate":27.41491800387939,
    "state":"CO",
    "name":"Morgan County"
  },
  {
    "id":45067,
    "rate":128.89413726035013,
    "state":"SC",
    "name":"Marion County"
  },
  {
    "id":12047,
    "rate":4.909177495067691,
    "state":"FL",
    "name":"Hamilton County"
  },
  {
    "id":18025,
    "rate":24.761860028182248,
    "state":"IN",
    "name":"Crawford County"
  },
  {
    "id":55137,
    "rate":86.18335580340727,
    "state":"WI",
    "name":"Waushara County"
  },
  {
    "id":5055,
    "rate":85.03915844107698,
    "state":"AR",
    "name":"Greene County"
  },
  {
    "id":5031,
    "rate":1220.3509404121976,
    "state":"AR",
    "name":"Craighead County"
  },
  {
    "id":8009,
    "rate":23.367944621938236,
    "state":"CO",
    "name":"Baca County"
  },
  {
    "id":26007,
    "rate":392.11080711354316,
    "state":"MI",
    "name":"Alpena County"
  },
  {
    "id":13115,
    "rate":185.33143880248997,
    "state":"GA",
    "name":"Floyd County"
  },
  {
    "id":20155,
    "rate":86.10118815889876,
    "state":"KS",
    "name":"Reno County"
  },
  {
    "id":6031,
    "rate":165.757697898771,
    "state":"CA",
    "name":"Kings County"
  },
  {
    "id":6029,
    "rate":170.6897707185742,
    "state":"CA",
    "name":"Kern County"
  },
  {
    "id":6057,
    "rate":8.467757517822093,
    "state":"CA",
    "name":"Nevada County"
  },
  {
    "id":23015,
    "rate":13.808743968416433,
    "state":"ME",
    "name":"Lincoln County"
  },
  {
    "id":18087,
    "rate":36.71980868872061,
    "state":"IN",
    "name":"Lagrange County"
  },
  {
    "id":17003,
    "rate":115.27741935483876,
    "state":"IL",
    "name":"Alexander County"
  },
  {
    "id":51051,
    "rate":34.20730150625479,
    "state":"VA",
    "name":"Dickenson County"
  },
  {
    "id":28157,
    "rate":176.7188657284944,
    "state":"MS",
    "name":"Wilkinson County"
  },
  {
    "id":26047,
    "rate":2137.812129502963,
    "state":"MI",
    "name":"Emmet County"
  },
  {
    "id":6067,
    "rate":220.0711430584954,
    "state":"CA",
    "name":"Sacramento County"
  },
  {
    "id":37053,
    "rate":12.40370247385024,
    "state":"NC",
    "name":"Currituck County"
  },
  {
    "id":6017,
    "rate":221.18689958749758,
    "state":"CA",
    "name":"El Dorado County"
  },
  {
    "id":22099,
    "rate":33.16507322255103,
    "state":"LA",
    "name":"St Martin Parish"
  },
  {
    "id":17011,
    "rate":46.442321693799684,
    "state":"IL",
    "name":"Bureau County"
  },
  {
    "id":36071,
    "rate":362.72584078558805,
    "state":"NY",
    "name":"Orange County"
  },
  {
    "id":6097,
    "rate":146.94846364788378,
    "state":"CA",
    "name":"Sonoma County"
  },
  {
    "id":38085,
    "rate":5.385678102693991,
    "state":"ND",
    "name":"Sioux County"
  },
  {
    "id":1049,
    "rate":46.77428450585084,
    "state":"AL",
    "name":"Dekalb County"
  },
  {
    "id":13025,
    "rate":8.272163837240637,
    "state":"GA",
    "name":"Brantley County"
  },
  {
    "id":6015,
    "rate":10.473676751930844,
    "state":"CA",
    "name":"Del Norte County"
  },
  {
    "id":56029,
    "rate":11.70942544697101,
    "state":"WY",
    "name":"Park County"
  },
  {
    "id":48453,
    "rate":1737.421083142528,
    "state":"TX",
    "name":"Travis County"
  },
  {
    "id":1061,
    "rate":68.49085252944226,
    "state":"AL",
    "name":"Geneva County"
  },
  {
    "id":42107,
    "rate":255.65511107490096,
    "state":"PA",
    "name":"Schuylkill County"
  },
  {
    "id":18151,
    "rate":29.083296735470647,
    "state":"IN",
    "name":"Steuben County"
  },
  {
    "id":4003,
    "rate":29.92601520630084,
    "state":"AZ",
    "name":"Cochise County"
  },
  {
    "id":13271,
    "rate":9.692616714346581,
    "state":"GA",
    "name":"Telfair County"
  },
  {
    "id":12029,
    "rate":9.096059266637612,
    "state":"FL",
    "name":"Dixie County"
  },
  {
    "id":13311,
    "rate":41.42763897450773,
    "state":"GA",
    "name":"White County"
  },
  {
    "id":29125,
    "rate":1.7552014165559982,
    "state":"MO",
    "name":"Maries County"
  },
  {
    "id":2130,
    "rate":3.950689328178569,
    "state":"AK",
    "name":"Ketchikan Gateway Borough"
  },
  {
    "id":1027,
    "rate":99.5707389528407,
    "state":"AL",
    "name":"Clay County"
  },
  {
    "id":8101,
    "rate":100.50739865705056,
    "state":"CO",
    "name":"Pueblo County"
  },
  {
    "id":5039,
    "rate":17.902071563088512,
    "state":"AR",
    "name":"Dallas County"
  },
  {
    "id":28019,
    "rate":1.4422501496110114,
    "state":"MS",
    "name":"Choctaw County"
  },
  {
    "id":16051,
    "rate":55.59440297107701,
    "state":"ID",
    "name":"Jefferson County"
  },
  {
    "id":5149,
    "rate":6.567328412269039,
    "state":"AR",
    "name":"Yell County"
  },
  {
    "id":21087,
    "rate":6.912389380530973,
    "state":"KY",
    "name":"Green County"
  },
  {
    "id":19117,
    "rate":3171.5723413966225,
    "state":"IA",
    "name":"Lucas County"
  },
  {
    "id":5139,
    "rate":115.86055153530216,
    "state":"AR",
    "name":"Union County"
  },
  {
    "id":29081,
    "rate":23.348587118178695,
    "state":"MO",
    "name":"Harrison County"
  },
  {
    "id":21215,
    "rate":13.13918088345109,
    "state":"KY",
    "name":"Spencer County"
  },
  {
    "id":37047,
    "rate":1220.4848621623498,
    "state":"NC",
    "name":"Columbus County"
  },
  {
    "id":2188,
    "rate":2.0313918796212223,
    "state":"AK",
    "name":"Northwest Arctic Borough"
  },
  {
    "id":12039,
    "rate":56.22875270614966,
    "state":"FL",
    "name":"Gadsden County"
  },
  {
    "id":6055,
    "rate":89.23117835196034,
    "state":"CA",
    "name":"Napa County"
  },
  {
    "id":12043,
    "rate":3.193612774451098,
    "state":"FL",
    "name":"Glades County"
  },
  {
    "id":45087,
    "rate":75.80575437601868,
    "state":"SC",
    "name":"Union County"
  },
  {
    "id":6109,
    "rate":22.9913123844732,
    "state":"CA",
    "name":"Tuolumne County"
  },
  {
    "id":4019,
    "rate":352.63626605336583,
    "state":"AZ",
    "name":"Pima County"
  },
  {
    "id":18103,
    "rate":58.046956331159954,
    "state":"IN",
    "name":"Miami County"
  },
  {
    "id":5123,
    "rate":4.288993293404584,
    "state":"AR",
    "name":"St. Francis County"
  },
  {
    "id":53035,
    "rate":247.91925673155072,
    "state":"WA",
    "name":"Kitsap County"
  },
  {
    "id":36043,
    "rate":59.393545189865584,
    "state":"NY",
    "name":"Herkimer County"
  },
  {
    "id":19041,
    "rate":7.942401738815433,
    "state":"IA",
    "name":"Clay County"
  },
  {
    "id":18009,
    "rate":101.42572521517376,
    "state":"IN",
    "name":"Blackford County"
  },
  {
    "id":48117,
    "rate":17.152598408926547,
    "state":"TX",
    "name":"Deaf Smith County"
  },
  {
    "id":16057,
    "rate":14.16856671121944,
    "state":"ID",
    "name":"Latah County"
  },
  {
    "id":5093,
    "rate":10.255762897914378,
    "state":"AR",
    "name":"Mississippi County"
  },
  {
    "id":56025,
    "rate":55.45217700734563,
    "state":"WY",
    "name":"Natrona County"
  },
  {
    "id":12085,
    "rate":171.73669430149286,
    "state":"FL",
    "name":"Martin County"
  },
  {
    "id":17067,
    "rate":18.644013804088136,
    "state":"IL",
    "name":"Hancock County"
  },
  {
    "id":20015,
    "rate":76.31029867996837,
    "state":"KS",
    "name":"Butler County"
  },
  {
    "id":6039,
    "rate":46.57457765166444,
    "state":"CA",
    "name":"Madera County"
  },
  {
    "id":27081,
    "rate":6.83448275862069,
    "state":"MN",
    "name":"Lincoln County"
  },
  {
    "id":21099,
    "rate":945.1288450062389,
    "state":"KY",
    "name":"Hart County"
  },
  {
    "id":36103,
    "rate":693.9994748144212,
    "state":"NY",
    "name":"Suffolk County"
  },
  {
    "id":13193,
    "rate":31.511839708561027,
    "state":"GA",
    "name":"Macon County"
  },
  {
    "id":5037,
    "rate":115.16993315962387,
    "state":"AR",
    "name":"Cross County"
  },
  {
    "id":16059,
    "rate":2.5853407187942805,
    "state":"ID",
    "name":"Lemhi County"
  },
  {
    "id":26137,
    "rate":139.5613123206786,
    "state":"MI",
    "name":"Otsego County"
  },
  {
    "id":21151,
    "rate":51.13700913081237,
    "state":"KY",
    "name":"Madison County"
  },
  {
    "id":40137,
    "rate":30.948769989071522,
    "state":"OK",
    "name":"Stephens County"
  },
  {
    "id":13111,
    "rate":281.1820854817404,
    "state":"GA",
    "name":"Fannin County"
  },
  {
    "id":1125,
    "rate":333.2372145003857,
    "state":"AL",
    "name":"Tuscaloosa County"
  },
  {
    "id":51530,
    "rate":1.7331560283687943,
    "state":"VA",
    "name":"Buena Vista City"
  },
  {
    "id":19019,
    "rate":106.47263871645497,
    "state":"IA",
    "name":"Buchanan County"
  },
  {
    "id":5109,
    "rate":16.525829930765134,
    "state":"AR",
    "name":"Pike County"
  },
  {
    "id":48113,
    "rate":2617.0139044642556,
    "state":"TX",
    "name":"Dallas County"
  },
  {
    "id":8083,
    "rate":1.2236469477658904,
    "state":"CO",
    "name":"Montezuma County"
  },
  {
    "id":13117,
    "rate":36.06832919830055,
    "state":"GA",
    "name":"Forsyth County"
  },
  {
    "id":13011,
    "rate":1.7474769635805179,
    "state":"GA",
    "name":"Banks County"
  },
  {
    "id":47079,
    "rate":120.18308900847401,
    "state":"TN",
    "name":"Henry County"
  },
  {
    "id":5127,
    "rate":2.998092123194331,
    "state":"AR",
    "name":"Scott County"
  },
  {
    "id":22001,
    "rate":67.59927593619187,
    "state":"LA",
    "name":"Acadia Parish"
  },
  {
    "id":20105,
    "rate":3.8714783159227606,
    "state":"KS",
    "name":"Lincoln County"
  },
  {
    "id":5097,
    "rate":7.422436929683307,
    "state":"AR",
    "name":"Montgomery County"
  },
  {
    "id":8089,
    "rate":12.120564343736639,
    "state":"CO",
    "name":"Otero County"
  },
  {
    "id":4021,
    "rate":133.97695474947565,
    "state":"AZ",
    "name":"Pinal County"
  },
  {
    "id":38079,
    "rate":1.045993031358885,
    "state":"ND",
    "name":"Rolette County"
  },
  {
    "id":12083,
    "rate":340.8723000343805,
    "state":"FL",
    "name":"Marion County"
  },
  {
    "id":46085,
    "rate":6.32217242288426,
    "state":"SD",
    "name":"Lyman County"
  },
  {
    "id":20051,
    "rate":105.59161223788243,
    "state":"KS",
    "name":"Ellis County"
  },
  {
    "id":26011,
    "rate":95.40226921093345,
    "state":"MI",
    "name":"Arenac County"
  },
  {
    "id":6045,
    "rate":28.275826599769143,
    "state":"CA",
    "name":"Mendocino County"
  },
  {
    "id":30041,
    "rate":4.1042186643939855,
    "state":"MT",
    "name":"Hill County"
  },
  {
    "id":28031,
    "rate":51.0889719817651,
    "state":"MS",
    "name":"Covington County"
  },
  {
    "id":21117,
    "rate":1910.5357794533313,
    "state":"KY",
    "name":"Kenton County"
  },
  {
    "id":4012,
    "rate":2.943959781162206,
    "state":"AZ",
    "name":"La Paz County"
  },
  {
    "id":31033,
    "rate":90.61419200954083,
    "state":"NE",
    "name":"Cheyenne County"
  },
  {
    "id":5087,
    "rate":3.468917881811205,
    "state":"AR",
    "name":"Madison County"
  },
  {
    "id":12057,
    "rate":505.1748318294715,
    "state":"FL",
    "name":"Hillsborough County"
  },
  {
    "id":40035,
    "rate":86.55729909652877,
    "state":"OK",
    "name":"Craig County"
  },
  {
    "id":5051,
    "rate":142.19368629759276,
    "state":"AR",
    "name":"Garland County"
  },
  {
    "id":48491,
    "rate":605.9325482431836,
    "state":"TX",
    "name":"Williamson County"
  },
  {
    "id":17049,
    "rate":169.82635044577816,
    "state":"IL",
    "name":"Effingham County"
  },
  {
    "id":13191,
    "rate":1.0458267490303117,
    "state":"GA",
    "name":"McIntosh County"
  },
  {
    "id":49001,
    "rate":10.743139068763492,
    "state":"UT",
    "name":"Beaver County"
  },
  {
    "id":13107,
    "rate":40.245087312355025,
    "state":"GA",
    "name":"Emanuel County"
  },
  {
    "id":13053,
    "rate":66.44550517104217,
    "state":"GA",
    "name":"Chattahoochee County"
  },
  {
    "id":37069,
    "rate":44.03225544493351,
    "state":"NC",
    "name":"Franklin County"
  },
  {
    "id":17015,
    "rate":35.55022328867559,
    "state":"IL",
    "name":"Carroll County"
  },
  {
    "id":18063,
    "rate":778.0974243972344,
    "state":"IN",
    "name":"Hendricks County"
  },
  {
    "id":5085,
    "rate":51.560061066959626,
    "state":"AR",
    "name":"Lonoke County"
  },
  {
    "id":54045,
    "rate":255.25979744605903,
    "state":"WV",
    "name":"Logan County"
  },
  {
    "id":13029,
    "rate":86.52204924641818,
    "state":"GA",
    "name":"Bryan County"
  },
  {
    "id":55061,
    "rate":30.46609758463479,
    "state":"WI",
    "name":"Kewaunee County"
  },
  {
    "id":5063,
    "rate":166.47500338707493,
    "state":"AR",
    "name":"Independence County"
  },
  {
    "id":12059,
    "rate":10.866413181242079,
    "state":"FL",
    "name":"Holmes County"
  },
  {
    "id":45057,
    "rate":132.21661005391888,
    "state":"SC",
    "name":"Lancaster County"
  },
  {
    "id":28079,
    "rate":88.39848621683224,
    "state":"MS",
    "name":"Leake County"
  },
  {
    "id":47013,
    "rate":4775.769868163941,
    "state":"TN",
    "name":"Campbell County"
  },
  {
    "id":2170,
    "rate":33.814153819910864,
    "state":"AK",
    "name":"Matanuska-Susitna Borough"
  },
  {
    "id":19087,
    "rate":1.1570206841686557,
    "state":"IA",
    "name":"Henry County"
  },
  {
    "id":17137,
    "rate":18.235210748603983,
    "state":"IL",
    "name":"Morgan County"
  },
  {
    "id":21227,
    "rate":565.8843708665777,
    "state":"KY",
    "name":"Warren County"
  },
  {
    "id":5071,
    "rate":95.81735230436128,
    "state":"AR",
    "name":"Johnson County"
  },
  {
    "id":39119,
    "rate":600.0888883711178,
    "state":"OH",
    "name":"Muskingum County"
  },
  {
    "id":38031,
    "rate":7.971698113207547,
    "state":"ND",
    "name":"Foster County"
  },
  {
    "id":26099,
    "rate":235.69454438218833,
    "state":"MI",
    "name":"Macomb County"
  },
  {
    "id":8113,
    "rate":11.112572330352446,
    "state":"CO",
    "name":"San Miguel County"
  },
  {
    "id":40119,
    "rate":103.99520890938979,
    "state":"OK",
    "name":"Payne County"
  },
  {
    "id":32005,
    "rate":38.19305824519589,
    "state":"NV",
    "name":"Douglas County"
  },
  {
    "id":38105,
    "rate":76.916735366859,
    "state":"ND",
    "name":"Williams County"
  },
  {
    "id":26081,
    "rate":175.54444345003202,
    "state":"MI",
    "name":"Kent County"
  },
  {
    "id":21221,
    "rate":16.314619232907173,
    "state":"KY",
    "name":"Trigg County"
  },
  {
    "id":46103,
    "rate":1627.1091896855155,
    "state":"SD",
    "name":"Pennington County"
  },
  {
    "id":1069,
    "rate":331.49407940561866,
    "state":"AL",
    "name":"Houston County"
  },
  {
    "id":5091,
    "rate":22.519659765687695,
    "state":"AR",
    "name":"Miller County"
  },
  {
    "id":37175,
    "rate":13.514336153892982,
    "state":"NC",
    "name":"Transylvania County"
  },
  {
    "id":1133,
    "rate":60.24477982220383,
    "state":"AL",
    "name":"Winston County"
  },
  {
    "id":5035,
    "rate":14.775714000399434,
    "state":"AR",
    "name":"Crittenden County"
  },
  {
    "id":48503,
    "rate":55.45708037178789,
    "state":"TX",
    "name":"Young County"
  },
  {
    "id":1057,
    "rate":46.82605111294312,
    "state":"AL",
    "name":"Fayette County"
  },
  {
    "id":47001,
    "rate":374.7842705278106,
    "state":"TN",
    "name":"Anderson County"
  },
  {
    "id":1099,
    "rate":62.880711221195085,
    "state":"AL",
    "name":"Monroe County"
  },
  {
    "id":37057,
    "rate":264.1498819875016,
    "state":"NC",
    "name":"Davidson County"
  },
  {
    "id":31093,
    "rate":286.4710547184774,
    "state":"NE",
    "name":"Howard County"
  },
  {
    "id":31029,
    "rate":9.541284403669724,
    "state":"NE",
    "name":"Chase County"
  },
  {
    "id":36027,
    "rate":314.51987623595903,
    "state":"NY",
    "name":"Dutchess County"
  },
  {
    "id":22031,
    "rate":18.894396153134828,
    "state":"LA",
    "name":"De Soto Parish"
  },
  {
    "id":5059,
    "rate":76.42814353321751,
    "state":"AR",
    "name":"Hot Spring County"
  },
  {
    "id":21211,
    "rate":46.03696993326148,
    "state":"KY",
    "name":"Shelby County"
  },
  {
    "id":5053,
    "rate":30.475741613529248,
    "state":"AR",
    "name":"Grant County"
  },
  {
    "id":1129,
    "rate":21.699438202247187,
    "state":"AL",
    "name":"Washington County"
  },
  {
    "id":17061,
    "rate":23.24177438307873,
    "state":"IL",
    "name":"Greene County"
  },
  {
    "id":48265,
    "rate":47.59789549781116,
    "state":"TX",
    "name":"Kerr County"
  },
  {
    "id":24013,
    "rate":1552.5237753454148,
    "state":"MD",
    "name":"Carroll County"
  },
  {
    "id":53049,
    "rate":27.383163935223468,
    "state":"WA",
    "name":"Pacific County"
  },
  {
    "id":48161,
    "rate":32.9064216415995,
    "state":"TX",
    "name":"Freestone County"
  },
  {
    "id":13051,
    "rate":725.0153590401496,
    "state":"GA",
    "name":"Chatham County"
  },
  {
    "id":26111,
    "rate":185.1224760606821,
    "state":"MI",
    "name":"Midland County"
  },
  {
    "id":49027,
    "rate":5.702782428446145,
    "state":"UT",
    "name":"Millard County"
  },
  {
    "id":42011,
    "rate":216.33712601511894,
    "state":"PA",
    "name":"Berks County"
  },
  {
    "id":1043,
    "rate":141.35563270740775,
    "state":"AL",
    "name":"Cullman County"
  },
  {
    "id":1037,
    "rate":1.1278060996333066,
    "state":"AL",
    "name":"Coosa County"
  },
  {
    "id":55141,
    "rate":129.7082873819835,
    "state":"WI",
    "name":"Wood County"
  },
  {
    "id":18039,
    "rate":211.38458913047862,
    "state":"IN",
    "name":"Elkhart County"
  },
  {
    "id":25015,
    "rate":48.03106934163179,
    "state":"MA",
    "name":"Hampshire County"
  },
  {
    "id":20113,
    "rate":60.61109028322143,
    "state":"KS",
    "name":"McPherson County"
  },
  {
    "id":38099,
    "rate":75.95802424461733,
    "state":"ND",
    "name":"Walsh County"
  },
  {
    "id":1045,
    "rate":70.84396740210693,
    "state":"AL",
    "name":"Dale County"
  },
  {
    "id":4005,
    "rate":17.386225716996808,
    "state":"AZ",
    "name":"Coconino County"
  },
  {
    "id":31073,
    "rate":8.071638861629049,
    "state":"NE",
    "name":"Gosper County"
  },
  {
    "id":6007,
    "rate":155.55312524008147,
    "state":"CA",
    "name":"Butte County"
  },
  {
    "id":1101,
    "rate":1839.7576124763523,
    "state":"AL",
    "name":"Montgomery County"
  },
  {
    "id":20013,
    "rate":24.909991909385116,
    "state":"KS",
    "name":"Brown County"
  },
  {
    "id":45037,
    "rate":13.5650258280158,
    "state":"SC",
    "name":"Edgefield County"
  },
  {
    "id":13085,
    "rate":92.36905613156954,
    "state":"GA",
    "name":"Dawson County"
  },
  {
    "id":20127,
    "rate":60.35891300632369,
    "state":"KS",
    "name":"Morris County"
  },
  {
    "id":17113,
    "rate":56.22742405085318,
    "state":"IL",
    "name":"Mclean County"
  },
  {
    "id":48221,
    "rate":101.83999539665493,
    "state":"TX",
    "name":"Hood County"
  },
  {
    "id":29111,
    "rate":2.0866141732283467,
    "state":"MO",
    "name":"Lewis County"
  },
  {
    "id":24015,
    "rate":310.05548899059147,
    "state":"MD",
    "name":"Cecil County"
  },
  {
    "id":5013,
    "rate":29.36403094923571,
    "state":"AR",
    "name":"Calhoun County"
  },
  {
    "id":42029,
    "rate":398.8667178862251,
    "state":"PA",
    "name":"Chester County"
  },
  {
    "id":26153,
    "rate":99.12986235786954,
    "state":"MI",
    "name":"Schoolcraft County"
  },
  {
    "id":21223,
    "rate":104.56005428636053,
    "state":"KY",
    "name":"Trimble County"
  },
  {
    "id":8005,
    "rate":585.8603039001692,
    "state":"CO",
    "name":"Arapahoe County"
  },
  {
    "id":21199,
    "rate":103.34762325053588,
    "state":"KY",
    "name":"Pulaski County"
  },
  {
    "id":41025,
    "rate":7.957941339236304,
    "state":"OR",
    "name":"Harney County"
  },
  {
    "id":5045,
    "rate":144.8843742881487,
    "state":"AR",
    "name":"Faulkner County"
  },
  {
    "id":46019,
    "rate":53.72533697987889,
    "state":"SD",
    "name":"Butte County"
  },
  {
    "id":28013,
    "rate":33.7372036637931,
    "state":"MS",
    "name":"Calhoun County"
  },
  {
    "id":53037,
    "rate":6.692924732215765,
    "state":"WA",
    "name":"Kittitas County"
  },
  {
    "id":6037,
    "rate":898.8638015059471,
    "state":"CA",
    "name":"Los Angeles County"
  },
  {
    "id":13201,
    "rate":73.02908726178532,
    "state":"GA",
    "name":"Miller County"
  },
  {
    "id":45069,
    "rate":37.78065845082929,
    "state":"SC",
    "name":"Marlboro County"
  },
  {
    "id":40087,
    "rate":14.241436479613341,
    "state":"OK",
    "name":"McClain County"
  },
  {
    "id":29201,
    "rate":71.51344861937724,
    "state":"MO",
    "name":"Scott County"
  },
  {
    "id":26049,
    "rate":596.6751981782439,
    "state":"MI",
    "name":"Genesee County"
  },
  {
    "id":21021,
    "rate":231.51232442853208,
    "state":"KY",
    "name":"Boyle County"
  },
  {
    "id":4015,
    "rate":95.635760481164,
    "state":"AZ",
    "name":"Mohave County"
  },
  {
    "id":26121,
    "rate":95.73630881713358,
    "state":"MI",
    "name":"Muskegon County"
  },
  {
    "id":1059,
    "rate":56.93967150979154,
    "state":"AL",
    "name":"Franklin County"
  },
  {
    "id":56005,
    "rate":59.78787815520804,
    "state":"WY",
    "name":"Campbell County"
  },
  {
    "id":24001,
    "rate":69.00234154000246,
    "state":"MD",
    "name":"Allegany County"
  },
  {
    "id":2050,
    "rate":1.7837960083677276,
    "state":"AK",
    "name":"Bethel Census Area"
  },
  {
    "id":19159,
    "rate":171.78367748279257,
    "state":"IA",
    "name":"Ringgold County"
  },
  {
    "id":2261,
    "rate":1.6269515201314706,
    "state":"AK",
    "name":"Valdez-Cordova Census Area"
  },
  {
    "id":13161,
    "rate":29.865687442106662,
    "state":"GA",
    "name":"Jeff Davis County"
  },
  {
    "id":8037,
    "rate":16.46147331138958,
    "state":"CO",
    "name":"Eagle County"
  },
  {
    "id":48023,
    "rate":87.83125864453665,
    "state":"TX",
    "name":"Baylor County"
  },
  {
    "id":1063,
    "rate":29.670329670329668,
    "state":"AL",
    "name":"Greene County"
  },
  {
    "id":13223,
    "rate":53.46269973667158,
    "state":"GA",
    "name":"Paulding County"
  },
  {
    "id":2150,
    "rate":8.16056838365897,
    "state":"AK",
    "name":"Kodiak Island Borough"
  },
  {
    "id":19153,
    "rate":2806.956174096366,
    "state":"IA",
    "name":"Polk County"
  },
  {
    "id":8119,
    "rate":1466.7757529089663,
    "state":"CO",
    "name":"Teller County"
  },
  {
    "id":17107,
    "rate":7.623570976235709,
    "state":"IL",
    "name":"Logan County"
  },
  {
    "id":18055,
    "rate":12.577734717975114,
    "state":"IN",
    "name":"Greene County"
  },
  {
    "id":29139,
    "rate":4.523453093812376,
    "state":"MO",
    "name":"Montgomery County"
  },
  {
    "id":35005,
    "rate":41.88278544084584,
    "state":"NM",
    "name":"Chaves County"
  },
  {
    "id":20045,
    "rate":60.04579182805568,
    "state":"KS",
    "name":"Douglas County"
  },
  {
    "id":38021,
    "rate":80.60819828408005,
    "state":"ND",
    "name":"Dickey County"
  },
  {
    "id":1019,
    "rate":87.82718991428682,
    "state":"AL",
    "name":"Cherokee County"
  },
  {
    "id":1117,
    "rate":121.47629165567783,
    "state":"AL",
    "name":"Shelby County"
  },
  {
    "id":46077,
    "rate":42.2767175572519,
    "state":"SD",
    "name":"Kingsbury County"
  },
  {
    "id":6095,
    "rate":49.85180308230572,
    "state":"CA",
    "name":"Solano County"
  },
  {
    "id":54027,
    "rate":40.894501224765605,
    "state":"WV",
    "name":"Hampshire County"
  },
  {
    "id":13257,
    "rate":160.64373177842566,
    "state":"GA",
    "name":"Stephens County"
  },
  {
    "id":47089,
    "rate":84.77757173717718,
    "state":"TN",
    "name":"Jefferson County"
  },
  {
    "id":8069,
    "rate":23.86018305531874,
    "state":"CO",
    "name":"Larimer County"
  },
  {
    "id":8001,
    "rate":2181.7915437433376,
    "state":"CO",
    "name":"Adams County"
  },
  {
    "id":5049,
    "rate":3.1165754431827466,
    "state":"AR",
    "name":"Fulton County"
  },
  {
    "id":29181,
    "rate":29.73993587459922,
    "state":"MO",
    "name":"Ripley County"
  },
  {
    "id":13319,
    "rate":46.33934185705303,
    "state":"GA",
    "name":"Wilkinson County"
  },
  {
    "id":22025,
    "rate":1.404878048780488,
    "state":"LA",
    "name":"Catahoula Parish"
  },
  {
    "id":20169,
    "rate":61.58239398819109,
    "state":"KS",
    "name":"Saline County"
  },
  {
    "id":1111,
    "rate":39.99514498830384,
    "state":"AL",
    "name":"Randolph County"
  },
  {
    "id":6093,
    "rate":16.23558149002578,
    "state":"CA",
    "name":"Siskiyou County"
  },
  {
    "id":29211,
    "rate":45.0743295019157,
    "state":"MO",
    "name":"Sullivan County"
  },
  {
    "id":47181,
    "rate":49.379635079458495,
    "state":"TN",
    "name":"Wayne County"
  },
  {
    "id":30005,
    "rate":2.2690974838029234,
    "state":"MT",
    "name":"Blaine County"
  },
  {
    "id":54051,
    "rate":100.8472035246604,
    "state":"WV",
    "name":"Marshall County"
  },
  {
    "id":48493,
    "rate":23.81684371624054,
    "state":"TX",
    "name":"Wilson County"
  },
  {
    "id":41065,
    "rate":6.391955061476215,
    "state":"OR",
    "name":"Wasco County"
  },
  {
    "id":16085,
    "rate":14.774471664388605,
    "state":"ID",
    "name":"Valley County"
  },
  {
    "id":39171,
    "rate":138.15374787052812,
    "state":"OH",
    "name":"Williams County"
  },
  {
    "id":1091,
    "rate":90.88930196155162,
    "state":"AL",
    "name":"Marengo County"
  },
  {
    "id":48111,
    "rate":12.704402515723269,
    "state":"TX",
    "name":"Dallam County"
  },
  {
    "id":1127,
    "rate":202.19448015122904,
    "state":"AL",
    "name":"Walker County"
  },
  {
    "id":6023,
    "rate":20.668324918324917,
    "state":"CA",
    "name":"Humboldt County"
  },
  {
    "id":38089,
    "rate":103.1302700494038,
    "state":"ND",
    "name":"Stark County"
  },
  {
    "id":5073,
    "rate":13.564796124343964,
    "state":"AR",
    "name":"Lafayette County"
  },
  {
    "id":21025,
    "rate":207.27958959325758,
    "state":"KY",
    "name":"Breathitt County"
  },
  {
    "id":47119,
    "rate":230.36049009079377,
    "state":"TN",
    "name":"Maury County"
  },
  {
    "id":6025,
    "rate":321.15479337026534,
    "state":"CA",
    "name":"Imperial County"
  },
  {
    "id":51199,
    "rate":56.97122258388344,
    "state":"VA",
    "name":"York County"
  },
  {
    "id":13295,
    "rate":34.788220110289814,
    "state":"GA",
    "name":"Walker County"
  },
  {
    "id":12095,
    "rate":901.7245249052467,
    "state":"FL",
    "name":"Orange County"
  },
  {
    "id":47123,
    "rate":44.424270639354454,
    "state":"TN",
    "name":"Monroe County"
  },
  {
    "id":1011,
    "rate":12.48559826234772,
    "state":"AL",
    "name":"Bullock County"
  },
  {
    "id":1031,
    "rate":133.44768338637564,
    "state":"AL",
    "name":"Coffee County"
  },
  {
    "id":39085,
    "rate":730.6204521178031,
    "state":"OH",
    "name":"Lake County"
  },
  {
    "id":29189,
    "rate":1176.554596322938,
    "state":"MO",
    "name":"St. Louis County"
  },
  {
    "id":6009,
    "rate":57.13159422879348,
    "state":"CA",
    "name":"Calaveras County"
  },
  {
    "id":56023,
    "rate":9.39082896351668,
    "state":"WY",
    "name":"Lincoln County"
  },
  {
    "id":40133,
    "rate":67.8161686756449,
    "state":"OK",
    "name":"Seminole County"
  },
  {
    "id":28041,
    "rate":33.67982640347194,
    "state":"MS",
    "name":"Greene County"
  },
  {
    "id":39167,
    "rate":2507.334330493595,
    "state":"OH",
    "name":"Washington County"
  },
  {
    "id":5009,
    "rate":58.08105429512764,
    "state":"AR",
    "name":"Boone County"
  },
  {
    "id":1131,
    "rate":33.75021956789039,
    "state":"AL",
    "name":"Wilcox County"
  },
  {
    "id":1015,
    "rate":222.74380884158825,
    "state":"AL",
    "name":"Calhoun County"
  }
]
    return totals;
  });