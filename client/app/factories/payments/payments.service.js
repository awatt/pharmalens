'use strict';

angular.module('foglightApp')
  .factory('payments', function () {

    var payments = [
  {
    "id":56043,
    "rate":43.15128539272598,
    "name":"Washakie County",
    "state":"WY"
  },
  {
    "id":56039,
    "rate":20.659786214522665,
    "name":"Teton County",
    "state":"WY"
  },
  {
    "id":56033,
    "rate":39.133049530373675,
    "name":"Sheridan County",
    "state":"WY"
  },
  {
    "id":56031,
    "rate":43.70578133943904,
    "name":"Platte County",
    "state":"WY"
  },
  {
    "id":56019,
    "rate":26.14571229374855,
    "name":"Johnson County",
    "state":"WY"
  },
  {
    "id":56015,
    "rate":2.90929041697147,
    "name":"Goshen County",
    "state":"WY"
  },
  {
    "id":56007,
    "rate":5.195484405893233,
    "name":"Carbon County",
    "state":"WY"
  },
  {
    "id":56003,
    "rate":8.211071489217185,
    "name":"Big Horn County",
    "state":"WY"
  },
  {
    "id":55139,
    "rate":173.41075939608862,
    "name":"Winnebago County",
    "state":"WI"
  },
  {
    "id":55131,
    "rate":5.75550041106946,
    "name":"Washington County",
    "state":"WI"
  },
  {
    "id":55123,
    "rate":8.172698076350033,
    "name":"Vernon County",
    "state":"WI"
  },
  {
    "id":55117,
    "rate":12.624834713619602,
    "name":"Sheboygan County",
    "state":"WI"
  },
  {
    "id":55105,
    "rate":1177.4558092231287,
    "name":"Rock County",
    "state":"WI"
  },
  {
    "id":55103,
    "rate":3.104106972301815,
    "name":"Richland County",
    "state":"WI"
  },
  {
    "id":55101,
    "rate":1102.9657443125466,
    "name":"Racine County",
    "state":"WI"
  },
  {
    "id":55097,
    "rate":9.602020402661712,
    "name":"Portage County",
    "state":"WI"
  },
  {
    "id":55095,
    "rate":1.8793796668581277,
    "name":"Polk County",
    "state":"WI"
  },
  {
    "id":55091,
    "rate":134.50385812914584,
    "name":"Pepin County",
    "state":"WI"
  },
  {
    "id":55087,
    "rate":8.826567976877966,
    "name":"Outagamie County",
    "state":"WI"
  },
  {
    "id":55085,
    "rate":17.742684496167403,
    "name":"Oneida County",
    "state":"WI"
  },
  {
    "id":55073,
    "rate":237.70879581851526,
    "name":"Marathon County",
    "state":"WI"
  },
  {
    "id":55071,
    "rate":5.4108097406454165,
    "name":"Manitowoc County",
    "state":"WI"
  },
  {
    "id":55063,
    "rate":1342.6227627941214,
    "name":"La Crosse County",
    "state":"WI"
  },
  {
    "id":55047,
    "rate":4.561467889908257,
    "name":"Green Lake County",
    "state":"WI"
  },
  {
    "id":55043,
    "rate":59.657586632935214,
    "name":"Grant County",
    "state":"WI"
  },
  {
    "id":55039,
    "rate":14.75054571198207,
    "name":"Fond Du Lac County",
    "state":"WI"
  },
  {
    "id":55037,
    "rate":4.975402504472272,
    "name":"Florence County",
    "state":"WI"
  },
  {
    "id":55035,
    "rate":365.1848472828243,
    "name":"Eau Claire County",
    "state":"WI"
  },
  {
    "id":55031,
    "rate":2.4815136023370457,
    "name":"Douglas County",
    "state":"WI"
  },
  {
    "id":55029,
    "rate":5.057380007217612,
    "name":"Door County",
    "state":"WI"
  },
  {
    "id":55025,
    "rate":36.437343654690196,
    "name":"Dane County",
    "state":"WI"
  },
  {
    "id":55021,
    "rate":42.238890561626626,
    "name":"Columbia County",
    "state":"WI"
  },
  {
    "id":55017,
    "rate":2.5158998271240742,
    "name":"Chippewa County",
    "state":"WI"
  },
  {
    "id":55015,
    "rate":0.5291324641879929,
    "name":"Calumet County",
    "state":"WI"
  },
  {
    "id":55005,
    "rate":1331.4974768988789,
    "name":"Barron County",
    "state":"WI"
  },
  {
    "id":55003,
    "rate":1.388696800150877,
    "name":"Ashland County",
    "state":"WI"
  },
  {
    "id":54105,
    "rate":3.759903548053737,
    "name":"Wirt County",
    "state":"WV"
  },
  {
    "id":54095,
    "rate":112.7853426325695,
    "name":"Tyler County",
    "state":"WV"
  },
  {
    "id":54091,
    "rate":93.6216439001413,
    "name":"Taylor County",
    "state":"WV"
  },
  {
    "id":54089,
    "rate":80.25288859821232,
    "name":"Summers County",
    "state":"WV"
  },
  {
    "id":54077,
    "rate":29.08257151282808,
    "name":"Preston County",
    "state":"WV"
  },
  {
    "id":54075,
    "rate":7.5370817523283895,
    "name":"Pocahontas County",
    "state":"WV"
  },
  {
    "id":54067,
    "rate":222.67674843821425,
    "name":"Nicholas County",
    "state":"WV"
  },
  {
    "id":54061,
    "rate":159.01522913330191,
    "name":"Monongalia County",
    "state":"WV"
  },
  {
    "id":54057,
    "rate":26.9924462105753,
    "name":"Mineral County",
    "state":"WV"
  },
  {
    "id":54053,
    "rate":139.2836676217765,
    "name":"Mason County",
    "state":"WV"
  },
  {
    "id":54041,
    "rate":137.46255935711676,
    "name":"Lewis County",
    "state":"WV"
  },
  {
    "id":54039,
    "rate":476.72988051126276,
    "name":"Kanawha County",
    "state":"WV"
  },
  {
    "id":54035,
    "rate":42.28107923497269,
    "name":"Jackson County",
    "state":"WV"
  },
  {
    "id":54029,
    "rate":2885.7418886837236,
    "name":"Hancock County",
    "state":"WV"
  },
  {
    "id":54023,
    "rate":152.6053542775104,
    "name":"Grant County",
    "state":"WV"
  },
  {
    "id":54019,
    "rate":94.04810667131467,
    "name":"Fayette County",
    "state":"WV"
  },
  {
    "id":55055,
    "rate":8.223746564306701,
    "name":"Jefferson County",
    "state":"WI"
  },
  {
    "id":54013,
    "rate":2.991700698195231,
    "name":"Calhoun County",
    "state":"WV"
  },
  {
    "id":54009,
    "rate":49.77554537430122,
    "name":"Brooke County",
    "state":"WV"
  },
  {
    "id":54003,
    "rate":522.5159253516655,
    "name":"Berkeley County",
    "state":"WV"
  },
  {
    "id":54001,
    "rate":99.5011862396204,
    "name":"Barbour County",
    "state":"WV"
  },
  {
    "id":53077,
    "rate":84.18091690614081,
    "name":"Yakima County",
    "state":"WA"
  },
  {
    "id":53075,
    "rate":33.90470057952351,
    "name":"Whitman County",
    "state":"WA"
  },
  {
    "id":53071,
    "rate":23.277271351205894,
    "name":"Walla Walla County",
    "state":"WA"
  },
  {
    "id":53065,
    "rate":33.908736528319196,
    "name":"Stevens County",
    "state":"WA"
  },
  {
    "id":53051,
    "rate":111.91490998615171,
    "name":"Pend Oreille County",
    "state":"WA"
  },
  {
    "id":53043,
    "rate":196.10520264443812,
    "name":"Lincoln County",
    "state":"WA"
  },
  {
    "id":53031,
    "rate":1.6996948663782985,
    "name":"Jefferson County",
    "state":"WA"
  },
  {
    "id":53029,
    "rate":43.913921494383445,
    "name":"Island County",
    "state":"WA"
  },
  {
    "id":53027,
    "rate":62.214071543128085,
    "name":"Grays Harbor County",
    "state":"WA"
  },
  {
    "id":53025,
    "rate":33.747164296309215,
    "name":"Grant County",
    "state":"WA"
  },
  {
    "id":53021,
    "rate":52.540923442579,
    "name":"Franklin County",
    "state":"WA"
  },
  {
    "id":53011,
    "rate":104.84559033611045,
    "name":"Clark County",
    "state":"WA"
  },
  {
    "id":53007,
    "rate":26.98452558707751,
    "name":"Chelan County",
    "state":"WA"
  },
  {
    "id":53005,
    "rate":853.0371828329572,
    "name":"Benton County",
    "state":"WA"
  },
  {
    "id":51840,
    "rate":3927.796747369198,
    "name":"Winchester City",
    "state":"VA"
  },
  {
    "id":51820,
    "rate":1.7090736792229329,
    "name":"Waynesboro City",
    "state":"VA"
  },
  {
    "id":55121,
    "rate":6.731469817166594,
    "name":"Trempealeau County",
    "state":"WI"
  },
  {
    "id":51760,
    "rate":175.32483004453363,
    "name":"Richmond City",
    "state":"VA"
  },
  {
    "id":51740,
    "rate":85.60862179686359,
    "name":"Portsmouth City",
    "state":"VA"
  },
  {
    "id":51720,
    "rate":827.9599901210175,
    "name":"Norton City",
    "state":"VA"
  },
  {
    "id":51710,
    "rate":344.1972780824705,
    "name":"Norfolk City",
    "state":"VA"
  },
  {
    "id":51700,
    "rate":132.23655997384859,
    "name":"Newport News City",
    "state":"VA"
  },
  {
    "id":51685,
    "rate":1.2931892035280854,
    "name":"Manassas Park City",
    "state":"VA"
  },
  {
    "id":51680,
    "rate":301.5822491901065,
    "name":"Lynchburg City",
    "state":"VA"
  },
  {
    "id":53039,
    "rate":9.571629554164849,
    "name":"Klickitat County",
    "state":"WA"
  },
  {
    "id":51660,
    "rate":130.67253631110415,
    "name":"Harrisonburg City",
    "state":"VA"
  },
  {
    "id":51650,
    "rate":61.76216540122621,
    "name":"Hampton City",
    "state":"VA"
  },
  {
    "id":51640,
    "rate":55.18422193324665,
    "name":"Galax City",
    "state":"VA"
  },
  {
    "id":51600,
    "rate":6.9042240313712115,
    "name":"Fairfax City",
    "state":"VA"
  },
  {
    "id":51595,
    "rate":97.37201963534362,
    "name":"Emporia City",
    "state":"VA"
  },
  {
    "id":56001,
    "rate":7.982228407783102,
    "name":"Albany County",
    "state":"WY"
  },
  {
    "id":51590,
    "rate":625.580563735801,
    "name":"Danville City",
    "state":"VA"
  },
  {
    "id":51570,
    "rate":560.5705311250713,
    "name":"Colonial Heights City",
    "state":"VA"
  },
  {
    "id":51550,
    "rate":275.6409627149545,
    "name":"Chesapeake City",
    "state":"VA"
  },
  {
    "id":51197,
    "rate":100.85618888623897,
    "name":"Wythe County",
    "state":"VA"
  },
  {
    "id":51195,
    "rate":71.93127265602035,
    "name":"Wise County",
    "state":"VA"
  },
  {
    "id":51175,
    "rate":32.97279687245481,
    "name":"Southampton County",
    "state":"VA"
  },
  {
    "id":51173,
    "rate":116.7903210620469,
    "name":"Smyth County",
    "state":"VA"
  },
  {
    "id":51167,
    "rate":16.668894673890094,
    "name":"Russell County",
    "state":"VA"
  },
  {
    "id":51161,
    "rate":41.66148918102568,
    "name":"Roanoke County",
    "state":"VA"
  },
  {
    "id":51159,
    "rate":19.529385771100312,
    "name":"Richmond County",
    "state":"VA"
  },
  {
    "id":51157,
    "rate":54.094212651413194,
    "name":"Rappahannock County",
    "state":"VA"
  },
  {
    "id":55045,
    "rate":34.16447493289228,
    "name":"Green County",
    "state":"WI"
  },
  {
    "id":51153,
    "rate":25.130210145028347,
    "name":"Prince William County",
    "state":"VA"
  },
  {
    "id":51149,
    "rate":50.233286532022895,
    "name":"Prince George County",
    "state":"VA"
  },
  {
    "id":54087,
    "rate":80.68388851121688,
    "name":"Roane County",
    "state":"WV"
  },
  {
    "id":51147,
    "rate":87.09189608375343,
    "name":"Prince Edward County",
    "state":"VA"
  },
  {
    "id":51145,
    "rate":94.30608905961017,
    "name":"Powhatan County",
    "state":"VA"
  },
  {
    "id":51143,
    "rate":13.89932907246653,
    "name":"Pittsylvania County",
    "state":"VA"
  },
  {
    "id":54043,
    "rate":10.736666974766614,
    "name":"Lincoln County",
    "state":"WV"
  },
  {
    "id":51139,
    "rate":85.1570878016086,
    "name":"Page County",
    "state":"VA"
  },
  {
    "id":51137,
    "rate":48.2101383566853,
    "name":"Orange County",
    "state":"VA"
  },
  {
    "id":51135,
    "rate":96.10737829614602,
    "name":"Nottoway County",
    "state":"VA"
  },
  {
    "id":51131,
    "rate":112.5128708016671,
    "name":"Northampton County",
    "state":"VA"
  },
  {
    "id":51127,
    "rate":67.54495086765627,
    "name":"New Kent County",
    "state":"VA"
  },
  {
    "id":51119,
    "rate":24.945044795418863,
    "name":"Middlesex County",
    "state":"VA"
  },
  {
    "id":51111,
    "rate":6.599730137312485,
    "name":"Lunenburg County",
    "state":"VA"
  },
  {
    "id":51087,
    "rate":269.30510951682015,
    "name":"Henrico County",
    "state":"VA"
  },
  {
    "id":51085,
    "rate":171.159092719452,
    "name":"Hanover County",
    "state":"VA"
  },
  {
    "id":51083,
    "rate":57.11997540112933,
    "name":"Halifax County",
    "state":"VA"
  },
  {
    "id":51079,
    "rate":4.830116446004148,
    "name":"Greene County",
    "state":"VA"
  },
  {
    "id":51073,
    "rate":62.178674039139146,
    "name":"Gloucester County",
    "state":"VA"
  },
  {
    "id":51071,
    "rate":31.039603960396036,
    "name":"Giles County",
    "state":"VA"
  },
  {
    "id":51069,
    "rate":2.535647010391587,
    "name":"Frederick County",
    "state":"VA"
  },
  {
    "id":51065,
    "rate":22.90174613575916,
    "name":"Fluvanna County",
    "state":"VA"
  },
  {
    "id":51061,
    "rate":132.19990090536464,
    "name":"Fauquier County",
    "state":"VA"
  },
  {
    "id":51057,
    "rate":115.62192173367963,
    "name":"Essex County",
    "state":"VA"
  },
  {
    "id":51053,
    "rate":43.913879003558726,
    "name":"Dinwiddie County",
    "state":"VA"
  },
  {
    "id":51045,
    "rate":21.223547518276256,
    "name":"Craig County",
    "state":"VA"
  },
  {
    "id":51041,
    "rate":979.0573722402328,
    "name":"Chesterfield County",
    "state":"VA"
  },
  {
    "id":51036,
    "rate":21.572467823167322,
    "name":"Charles City County",
    "state":"VA"
  },
  {
    "id":51025,
    "rate":14.111820899021275,
    "name":"Brunswick County",
    "state":"VA"
  },
  {
    "id":51023,
    "rate":13.203546762372955,
    "name":"Botetourt County",
    "state":"VA"
  },
  {
    "id":51019,
    "rate":101.4556349511474,
    "name":"Bedford County",
    "state":"VA"
  },
  {
    "id":51017,
    "rate":11.43501611170784,
    "name":"Bath County",
    "state":"VA"
  },
  {
    "id":51015,
    "rate":35.28755621374128,
    "name":"Augusta County",
    "state":"VA"
  },
  {
    "id":51011,
    "rate":72.40161119915479,
    "name":"Appomattox County",
    "state":"VA"
  },
  {
    "id":51005,
    "rate":24.524501019588456,
    "name":"Alleghany County",
    "state":"VA"
  },
  {
    "id":51003,
    "rate":438.8306380476331,
    "name":"Albemarle County",
    "state":"VA"
  },
  {
    "id":50025,
    "rate":0.6279973634565994,
    "name":"Windham County",
    "state":"VT"
  },
  {
    "id":50023,
    "rate":5.662415123586796,
    "name":"Washington County",
    "state":"VT"
  },
  {
    "id":50021,
    "rate":19.2747433264887,
    "name":"Rutland County",
    "state":"VT"
  },
  {
    "id":50011,
    "rate":3.6721032889146787,
    "name":"Franklin County",
    "state":"VT"
  },
  {
    "id":50007,
    "rate":723.715432958693,
    "name":"Chittenden County",
    "state":"VT"
  },
  {
    "id":50003,
    "rate":660.2718917887044,
    "name":"Bennington County",
    "state":"VT"
  },
  {
    "id":50001,
    "rate":2.1554415397562234,
    "name":"Addison County",
    "state":"VT"
  },
  {
    "id":49057,
    "rate":384.43049801302107,
    "name":"Weber County",
    "state":"UT"
  },
  {
    "id":49051,
    "rate":23.663592653897698,
    "name":"Wasatch County",
    "state":"UT"
  },
  {
    "id":49049,
    "rate":254.09209009603398,
    "name":"Utah County",
    "state":"UT"
  },
  {
    "id":54015,
    "rate":12.186790617230569,
    "name":"Clay County",
    "state":"WV"
  },
  {
    "id":49047,
    "rate":13.604631019748242,
    "name":"Uintah County",
    "state":"UT"
  },
  {
    "id":49045,
    "rate":26.351387495820795,
    "name":"Tooele County",
    "state":"UT"
  },
  {
    "id":49043,
    "rate":9.562452167946585,
    "name":"Summit County",
    "state":"UT"
  },
  {
    "id":49041,
    "rate":30.975162768266223,
    "name":"Sevier County",
    "state":"UT"
  },
  {
    "id":54073,
    "rate":49.40200210748157,
    "name":"Pleasants County",
    "state":"WV"
  },
  {
    "id":51670,
    "rate":1436.7915061374433,
    "name":"Hopewell City",
    "state":"VA"
  },
  {
    "id":49035,
    "rate":647.339924201573,
    "name":"Salt Lake County",
    "state":"UT"
  },
  {
    "id":49021,
    "rate":12.150866680933017,
    "name":"Iron County",
    "state":"UT"
  },
  {
    "id":49019,
    "rate":23.923562787710093,
    "name":"Grand County",
    "state":"UT"
  },
  {
    "id":49013,
    "rate":19.926026966056344,
    "name":"Duchesne County",
    "state":"UT"
  },
  {
    "id":49007,
    "rate":49.49468335372165,
    "name":"Carbon County",
    "state":"UT"
  },
  {
    "id":48495,
    "rate":2.5503812636165577,
    "name":"Winkler County",
    "state":"TX"
  },
  {
    "id":48487,
    "rate":10.962147489066504,
    "name":"Wilbarger County",
    "state":"TX"
  },
  {
    "id":48485,
    "rate":180.50105541297768,
    "name":"Wichita County",
    "state":"TX"
  },
  {
    "id":53003,
    "rate":42.948841036894805,
    "name":"Asotin County",
    "state":"WA"
  },
  {
    "id":48479,
    "rate":72.81253605963386,
    "name":"Webb County",
    "state":"TX"
  },
  {
    "id":48475,
    "rate":11.23115115851416,
    "name":"Ward County",
    "state":"TX"
  },
  {
    "id":48473,
    "rate":7.654048204180099,
    "name":"Waller County",
    "state":"TX"
  },
  {
    "id":53055,
    "rate":17.09726443768997,
    "name":"San Juan County",
    "state":"WA"
  },
  {
    "id":48469,
    "rate":245.42038173753267,
    "name":"Victoria County",
    "state":"TX"
  },
  {
    "id":48467,
    "rate":11.876802597650652,
    "name":"Van Zandt County",
    "state":"TX"
  },
  {
    "id":48463,
    "rate":34.893124065769804,
    "name":"Uvalde County",
    "state":"TX"
  },
  {
    "id":48455,
    "rate":1.5426573426573424,
    "name":"Trinity County",
    "state":"TX"
  },
  {
    "id":48451,
    "rate":111.29456223958563,
    "name":"Tom Green County",
    "state":"TX"
  },
  {
    "id":48445,
    "rate":116.21966693100715,
    "name":"Terry County",
    "state":"TX"
  },
  {
    "id":48441,
    "rate":289.57219769730943,
    "name":"Taylor County",
    "state":"TX"
  },
  {
    "id":48427,
    "rate":21.53524559732692,
    "name":"Starr County",
    "state":"TX"
  },
  {
    "id":48425,
    "rate":88.45240865720268,
    "name":"Somervell County",
    "state":"TX"
  },
  {
    "id":48423,
    "rate":204.56213565583127,
    "name":"Smith County",
    "state":"TX"
  },
  {
    "id":51027,
    "rate":45.13697193438771,
    "name":"Buchanan County",
    "state":"VA"
  },
  {
    "id":48415,
    "rate":5.610312171168011,
    "name":"Scurry County",
    "state":"TX"
  },
  {
    "id":48411,
    "rate":3.674014696058784,
    "name":"San Saba County",
    "state":"TX"
  },
  {
    "id":48407,
    "rate":4.4585185185185185,
    "name":"San Jacinto County",
    "state":"TX"
  },
  {
    "id":48405,
    "rate":19.461294703485745,
    "name":"San Augustine County",
    "state":"TX"
  },
  {
    "id":48399,
    "rate":40.90865476875839,
    "name":"Runnels County",
    "state":"TX"
  },
  {
    "id":48391,
    "rate":1.5971262779773419,
    "name":"Refugio County",
    "state":"TX"
  },
  {
    "id":48389,
    "rate":28.478260869565215,
    "name":"Reeves County",
    "state":"TX"
  },
  {
    "id":48387,
    "rate":24.943360604153554,
    "name":"Red River County",
    "state":"TX"
  },
  {
    "id":48381,
    "rate":29.12311744877779,
    "name":"Randall County",
    "state":"TX"
  },
  {
    "id":48377,
    "rate":4.038461538461539,
    "name":"Presidio County",
    "state":"TX"
  },
  {
    "id":48375,
    "rate":1269.4717076429306,
    "name":"Potter County",
    "state":"TX"
  },
  {
    "id":48373,
    "rate":54.30429555142638,
    "name":"Polk County",
    "state":"TX"
  },
  {
    "id":53053,
    "rate":189.89096007572988,
    "name":"Pierce County",
    "state":"WA"
  },
  {
    "id":51063,
    "rate":39.483988072086085,
    "name":"Floyd County",
    "state":"VA"
  },
  {
    "id":48371,
    "rate":14.347379898659485,
    "name":"Pecos County",
    "state":"TX"
  },
  {
    "id":48365,
    "rate":21.496374697891493,
    "name":"Panola County",
    "state":"TX"
  },
  {
    "id":48363,
    "rate":10.864325933364418,
    "name":"Palo Pinto County",
    "state":"TX"
  },
  {
    "id":48353,
    "rate":45.20400618404247,
    "name":"Nolan County",
    "state":"TX"
  },
  {
    "id":48349,
    "rate":30.23913901643431,
    "name":"Navarro County",
    "state":"TX"
  },
  {
    "id":48347,
    "rate":131.97718746677606,
    "name":"Nacogdoches County",
    "state":"TX"
  },
  {
    "id":48341,
    "rate":27.88517344524309,
    "name":"Moore County",
    "state":"TX"
  },
  {
    "id":48337,
    "rate":33.778995340263194,
    "name":"Montague County",
    "state":"TX"
  },
  {
    "id":48335,
    "rate":18.942225085910653,
    "name":"Mitchell County",
    "state":"TX"
  },
  {
    "id":48333,
    "rate":2.384599461809149,
    "name":"Mills County",
    "state":"TX"
  },
  {
    "id":48331,
    "rate":29.44166010852006,
    "name":"Milam County",
    "state":"TX"
  },
  {
    "id":48329,
    "rate":413.2762254402069,
    "name":"Midland County",
    "state":"TX"
  },
  {
    "id":48325,
    "rate":64.56547250730792,
    "name":"Medina County",
    "state":"TX"
  },
  {
    "id":48323,
    "rate":41.411971452139305,
    "name":"Maverick County",
    "state":"TX"
  },
  {
    "id":48321,
    "rate":67.84718044084664,
    "name":"Matagorda County",
    "state":"TX"
  },
  {
    "id":55135,
    "rate":15.168370877219962,
    "name":"Waupaca County",
    "state":"WI"
  },
  {
    "id":48317,
    "rate":101.45741703318672,
    "name":"Martin County",
    "state":"TX"
  },
  {
    "id":48305,
    "rate":18.781374415786736,
    "name":"Lynn County",
    "state":"TX"
  },
  {
    "id":48471,
    "rate":76.39201235143324,
    "name":"Walker County",
    "state":"TX"
  },
  {
    "id":48303,
    "rate":346.9096736759697,
    "name":"Lubbock County",
    "state":"TX"
  },
  {
    "id":48299,
    "rate":17.237069190941895,
    "name":"Llano County",
    "state":"TX"
  },
  {
    "id":48293,
    "rate":78.65534144692359,
    "name":"Limestone County",
    "state":"TX"
  },
  {
    "id":48291,
    "rate":56.79039615218727,
    "name":"Liberty County",
    "state":"TX"
  },
  {
    "id":48287,
    "rate":135.03565385545087,
    "name":"Lee County",
    "state":"TX"
  },
  {
    "id":48505,
    "rate":10.15106801573918,
    "name":"Zapata County",
    "state":"TX"
  },
  {
    "id":48285,
    "rate":39.25726034438448,
    "name":"Lavaca County",
    "state":"TX"
  },
  {
    "id":48279,
    "rate":49.353958796927714,
    "name":"Lamb County",
    "state":"TX"
  },
  {
    "id":54011,
    "rate":651.943054624229,
    "name":"Cabell County",
    "state":"WV"
  },
  {
    "id":48275,
    "rate":11.305732484076435,
    "name":"Knox County",
    "state":"TX"
  },
  {
    "id":48257,
    "rate":39.22075365579303,
    "name":"Kaufman County",
    "state":"TX"
  },
  {
    "id":48255,
    "rate":11.793770139634804,
    "name":"Karnes County",
    "state":"TX"
  },
  {
    "id":48245,
    "rate":1736.4334696345343,
    "name":"Jefferson County",
    "state":"TX"
  },
  {
    "id":48241,
    "rate":1.3682507809013833,
    "name":"Jasper County",
    "state":"TX"
  },
  {
    "id":48233,
    "rate":31.076635684344822,
    "name":"Hutchinson County",
    "state":"TX"
  },
  {
    "id":48227,
    "rate":31.499324628545697,
    "name":"Howard County",
    "state":"TX"
  },
  {
    "id":53041,
    "rate":50.2911348832283,
    "name":"Lewis County",
    "state":"WA"
  },
  {
    "id":48219,
    "rate":46.77579794135456,
    "name":"Hockley County",
    "state":"TX"
  },
  {
    "id":48215,
    "rate":246.79154415178434,
    "name":"Hidalgo County",
    "state":"TX"
  },
  {
    "id":51540,
    "rate":2509.0943599649604,
    "name":"Charlottesville City",
    "state":"VA"
  },
  {
    "id":48209,
    "rate":68.6614550946078,
    "name":"Hays County",
    "state":"TX"
  },
  {
    "id":48195,
    "rate":54.28571428571429,
    "name":"Hansford County",
    "state":"TX"
  },
  {
    "id":48193,
    "rate":12.62605548854041,
    "name":"Hamilton County",
    "state":"TX"
  },
  {
    "id":48187,
    "rate":49.78477461099103,
    "name":"Guadalupe County",
    "state":"TX"
  },
  {
    "id":48181,
    "rate":80.1562923925644,
    "name":"Grayson County",
    "state":"TX"
  },
  {
    "id":48163,
    "rate":76.81922710191259,
    "name":"Frio County",
    "state":"TX"
  },
  {
    "id":48159,
    "rate":34.172621286197824,
    "name":"Franklin County",
    "state":"TX"
  },
  {
    "id":48151,
    "rate":3.4516044873467258,
    "name":"Fisher County",
    "state":"TX"
  },
  {
    "id":48149,
    "rate":92.10436893203881,
    "name":"Fayette County",
    "state":"TX"
  },
  {
    "id":48145,
    "rate":2.03125,
    "name":"Falls County",
    "state":"TX"
  },
  {
    "id":48141,
    "rate":273.46127746816455,
    "name":"El Paso County",
    "state":"TX"
  },
  {
    "id":48139,
    "rate":48.58567472338876,
    "name":"Ellis County",
    "state":"TX"
  },
  {
    "id":48135,
    "rate":162.19323751765387,
    "name":"Ector County",
    "state":"TX"
  },
  {
    "id":48133,
    "rate":58.45949030049451,
    "name":"Eastland County",
    "state":"TX"
  },
  {
    "id":48131,
    "rate":8.276160027650565,
    "name":"Duval County",
    "state":"TX"
  },
  {
    "id":48127,
    "rate":28.235965746907713,
    "name":"Dimmit County",
    "state":"TX"
  },
  {
    "id":48121,
    "rate":76.46457013229524,
    "name":"Denton County",
    "state":"TX"
  },
  {
    "id":48105,
    "rate":16.72497308934338,
    "name":"Crockett County",
    "state":"TX"
  },
  {
    "id":48097,
    "rate":85.51648465133091,
    "name":"Cooke County",
    "state":"TX"
  },
  {
    "id":48073,
    "rate":46.763567406944006,
    "name":"Cherokee County",
    "state":"TX"
  },
  {
    "id":48071,
    "rate":2.8960096735187424,
    "name":"Chambers County",
    "state":"TX"
  },
  {
    "id":51001,
    "rate":9.822291597874703,
    "name":"Accomack County",
    "state":"VA"
  },
  {
    "id":48069,
    "rate":19.09402127399438,
    "name":"Castro County",
    "state":"TX"
  },
  {
    "id":53009,
    "rate":11.750083509631443,
    "name":"Clallam County",
    "state":"WA"
  },
  {
    "id":48067,
    "rate":11.519528273760226,
    "name":"Cass County",
    "state":"TX"
  },
  {
    "id":48065,
    "rate":5.033557046979865,
    "name":"Carson County",
    "state":"TX"
  },
  {
    "id":48499,
    "rate":3.3679012345679014,
    "name":"Wood County",
    "state":"TX"
  },
  {
    "id":48439,
    "rate":316.45538452387177,
    "name":"Tarrant County",
    "state":"TX"
  },
  {
    "id":48063,
    "rate":45.256019261637235,
    "name":"Camp County",
    "state":"TX"
  },
  {
    "id":48061,
    "rate":192.30706553090042,
    "name":"Cameron County",
    "state":"TX"
  },
  {
    "id":48259,
    "rate":69.76397550267063,
    "name":"Kendall County",
    "state":"TX"
  },
  {
    "id":48057,
    "rate":54.797143784485556,
    "name":"Calhoun County",
    "state":"TX"
  },
  {
    "id":48051,
    "rate":63.07576807576805,
    "name":"Burleson County",
    "state":"TX"
  },
  {
    "id":48483,
    "rate":3.411806670233636,
    "name":"Wheeler County",
    "state":"TX"
  },
  {
    "id":48047,
    "rate":2.0926339285714284,
    "name":"Brooks County",
    "state":"TX"
  },
  {
    "id":48037,
    "rate":610.1550146098325,
    "name":"Bowie County",
    "state":"TX"
  },
  {
    "id":48029,
    "rate":1252.3128331035784,
    "name":"Bexar County",
    "state":"TX"
  },
  {
    "id":51067,
    "rate":8.058589870903674,
    "name":"Franklin County",
    "state":"VA"
  },
  {
    "id":48025,
    "rate":52.73828233336415,
    "name":"Bee County",
    "state":"TX"
  },
  {
    "id":48021,
    "rate":73.59159255401542,
    "name":"Bastrop County",
    "state":"TX"
  },
  {
    "id":48019,
    "rate":208.31764363354029,
    "name":"Bandera County",
    "state":"TX"
  },
  {
    "id":48017,
    "rate":34.15856921560344,
    "name":"Bailey County",
    "state":"TX"
  },
  {
    "id":48013,
    "rate":32.1886036695667,
    "name":"Atascosa County",
    "state":"TX"
  },
  {
    "id":48007,
    "rate":24.111443877335812,
    "name":"Aransas County",
    "state":"TX"
  },
  {
    "id":48003,
    "rate":21.368571251318322,
    "name":"Andrews County",
    "state":"TX"
  },
  {
    "id":48001,
    "rate":109.89401302864233,
    "name":"Anderson County",
    "state":"TX"
  },
  {
    "id":47183,
    "rate":45.97660751325189,
    "name":"Weakley County",
    "state":"TN"
  },
  {
    "id":47179,
    "rate":142.24937348375073,
    "name":"Washington County",
    "state":"TN"
  },
  {
    "id":47175,
    "rate":1.8291814946619216,
    "name":"Van Buren County",
    "state":"TN"
  },
  {
    "id":47171,
    "rate":70.68379814804668,
    "name":"Unicoi County",
    "state":"TN"
  },
  {
    "id":47169,
    "rate":40.886920806058264,
    "name":"Trousdale County",
    "state":"TN"
  },
  {
    "id":47167,
    "rate":42.6005261790308,
    "name":"Tipton County",
    "state":"TN"
  },
  {
    "id":47165,
    "rate":120.5736175642169,
    "name":"Sumner County",
    "state":"TN"
  },
  {
    "id":47163,
    "rate":417.6958378278323,
    "name":"Sullivan County",
    "state":"TN"
  },
  {
    "id":47161,
    "rate":5.730353929214156,
    "name":"Stewart County",
    "state":"TN"
  },
  {
    "id":47157,
    "rate":785.6081119898868,
    "name":"Shelby County",
    "state":"TN"
  },
  {
    "id":47155,
    "rate":62.07495785241861,
    "name":"Sevier County",
    "state":"TN"
  },
  {
    "id":47153,
    "rate":25.214677117292087,
    "name":"Sequatchie County",
    "state":"TN"
  },
  {
    "id":47151,
    "rate":31.586213119191555,
    "name":"Scott County",
    "state":"TN"
  },
  {
    "id":51031,
    "rate":11.453057047838321,
    "name":"Campbell County",
    "state":"VA"
  },
  {
    "id":47141,
    "rate":156.70074311286282,
    "name":"Putnam County",
    "state":"TN"
  },
  {
    "id":47137,
    "rate":181.00235849056608,
    "name":"Pickett County",
    "state":"TN"
  },
  {
    "id":47131,
    "rate":61.33648049504002,
    "name":"Obion County",
    "state":"TN"
  },
  {
    "id":51155,
    "rate":73.07681238668086,
    "name":"Pulaski County",
    "state":"VA"
  },
  {
    "id":47125,
    "rate":29.078711696158827,
    "name":"Montgomery County",
    "state":"TN"
  },
  {
    "id":47121,
    "rate":27.76930981332419,
    "name":"Meigs County",
    "state":"TN"
  },
  {
    "id":47117,
    "rate":9.786319260360768,
    "name":"Marshall County",
    "state":"TN"
  },
  {
    "id":47115,
    "rate":54.333085343819725,
    "name":"Marion County",
    "state":"TN"
  },
  {
    "id":47113,
    "rate":453.60899432780946,
    "name":"Madison County",
    "state":"TN"
  },
  {
    "id":47111,
    "rate":7.5750710732054,
    "name":"Macon County",
    "state":"TN"
  },
  {
    "id":47101,
    "rate":11.187494747457771,
    "name":"Lewis County",
    "state":"TN"
  },
  {
    "id":47099,
    "rate":36.77063305561491,
    "name":"Lawrence County",
    "state":"TN"
  },
  {
    "id":51095,
    "rate":346.8203129494333,
    "name":"James City County",
    "state":"VA"
  },
  {
    "id":47097,
    "rate":40.93349228712836,
    "name":"Lauderdale County",
    "state":"TN"
  },
  {
    "id":47093,
    "rate":444.8581163178689,
    "name":"Knox County",
    "state":"TN"
  },
  {
    "id":47091,
    "rate":16.20508858104752,
    "name":"Johnson County",
    "state":"TN"
  },
  {
    "id":47087,
    "rate":81.8865469685142,
    "name":"Jackson County",
    "state":"TN"
  },
  {
    "id":47083,
    "rate":49.56903716015671,
    "name":"Houston County",
    "state":"TN"
  },
  {
    "id":47081,
    "rate":6.933587280556476,
    "name":"Hickman County",
    "state":"TN"
  },
  {
    "id":47077,
    "rate":42.428352189585645,
    "name":"Henderson County",
    "state":"TN"
  },
  {
    "id":47071,
    "rate":46.99596541786744,
    "name":"Hardin County",
    "state":"TN"
  },
  {
    "id":47069,
    "rate":20.324890698025026,
    "name":"Hardeman County",
    "state":"TN"
  },
  {
    "id":47059,
    "rate":74.68936678614098,
    "name":"Greene County",
    "state":"TN"
  },
  {
    "id":47055,
    "rate":70.01243609230345,
    "name":"Giles County",
    "state":"TN"
  },
  {
    "id":47049,
    "rate":82.38568477471945,
    "name":"Fentress County",
    "state":"TN"
  },
  {
    "id":47047,
    "rate":42.39400139863761,
    "name":"Fayette County",
    "state":"TN"
  },
  {
    "id":47043,
    "rate":133.55811589291764,
    "name":"Dickson County",
    "state":"TN"
  },
  {
    "id":47039,
    "rate":1.826923076923077,
    "name":"Decatur County",
    "state":"TN"
  },
  {
    "id":47037,
    "rate":2247.227463328518,
    "name":"Davidson County",
    "state":"TN"
  },
  {
    "id":47035,
    "rate":422.188228693655,
    "name":"Cumberland County",
    "state":"TN"
  },
  {
    "id":48489,
    "rate":48.48871398199665,
    "name":"Willacy County",
    "state":"TX"
  },
  {
    "id":47033,
    "rate":0.7060676619641145,
    "name":"Crockett County",
    "state":"TN"
  },
  {
    "id":47031,
    "rate":144.67884901292882,
    "name":"Coffee County",
    "state":"TN"
  },
  {
    "id":47023,
    "rate":60.307111756168354,
    "name":"Chester County",
    "state":"TN"
  },
  {
    "id":47021,
    "rate":54.39312539783576,
    "name":"Cheatham County",
    "state":"TN"
  },
  {
    "id":47019,
    "rate":727.8238287785834,
    "name":"Carter County",
    "state":"TN"
  },
  {
    "id":47017,
    "rate":62.13324948468017,
    "name":"Carroll County",
    "state":"TN"
  },
  {
    "id":47015,
    "rate":20.733997977170922,
    "name":"Cannon County",
    "state":"TN"
  },
  {
    "id":47011,
    "rate":133.12143358683508,
    "name":"Bradley County",
    "state":"TN"
  },
  {
    "id":47009,
    "rate":247.42073603406,
    "name":"Blount County",
    "state":"TN"
  },
  {
    "id":47007,
    "rate":20.467882012362097,
    "name":"Bledsoe County",
    "state":"TN"
  },
  {
    "id":47045,
    "rate":324.03369698872405,
    "name":"Dyer County",
    "state":"TN"
  },
  {
    "id":47005,
    "rate":6.703524955708962,
    "name":"Benton County",
    "state":"TN"
  },
  {
    "id":47003,
    "rate":43.91740088105726,
    "name":"Bedford County",
    "state":"TN"
  },
  {
    "id":54099,
    "rate":14.08907659819543,
    "name":"Wayne County",
    "state":"WV"
  },
  {
    "id":46129,
    "rate":39.95054945054945,
    "name":"Walworth County",
    "state":"SD"
  },
  {
    "id":46125,
    "rate":28.62457993278924,
    "name":"Turner County",
    "state":"SD"
  },
  {
    "id":46105,
    "rate":5.40728476821192,
    "name":"Perkins County",
    "state":"SD"
  },
  {
    "id":46091,
    "rate":2.577319587628866,
    "name":"Marshall County",
    "state":"SD"
  },
  {
    "id":54055,
    "rate":194.44129061227116,
    "name":"Mercer County",
    "state":"WV"
  },
  {
    "id":46087,
    "rate":2.18989826878458,
    "name":"McCook County",
    "state":"SD"
  },
  {
    "id":46081,
    "rate":82.5853858784893,
    "name":"Lawrence County",
    "state":"SD"
  },
  {
    "id":46079,
    "rate":3.019776876267749,
    "name":"Lake County",
    "state":"SD"
  },
  {
    "id":46065,
    "rate":214.1150163408062,
    "name":"Hughes County",
    "state":"SD"
  },
  {
    "id":54005,
    "rate":21.132106406525395,
    "name":"Boone County",
    "state":"WV"
  },
  {
    "id":46055,
    "rate":65.99266631744369,
    "name":"Haakon County",
    "state":"SD"
  },
  {
    "id":46051,
    "rate":121.64281783159052,
    "name":"Grant County",
    "state":"SD"
  },
  {
    "id":46047,
    "rate":67.9511358765538,
    "name":"Fall River County",
    "state":"SD"
  },
  {
    "id":46035,
    "rate":131.755227800788,
    "name":"Davison County",
    "state":"SD"
  },
  {
    "id":46033,
    "rate":265.30246542393274,
    "name":"Custer County",
    "state":"SD"
  },
  {
    "id":46027,
    "rate":18.110141224895322,
    "name":"Clay County",
    "state":"SD"
  },
  {
    "id":46023,
    "rate":10.03257328990228,
    "name":"Charles Mix County",
    "state":"SD"
  },
  {
    "id":46013,
    "rate":26.900357199978686,
    "name":"Brown County",
    "state":"SD"
  },
  {
    "id":46011,
    "rate":4.079116441289848,
    "name":"Brookings County",
    "state":"SD"
  },
  {
    "id":48077,
    "rate":61.386035007610346,
    "name":"Clay County",
    "state":"TX"
  },
  {
    "id":46005,
    "rate":35.25888888888889,
    "name":"Beadle County",
    "state":"SD"
  },
  {
    "id":45077,
    "rate":99.96924516948594,
    "name":"Pickens County",
    "state":"SC"
  },
  {
    "id":45075,
    "rate":1002.9163613295559,
    "name":"Orangeburg County",
    "state":"SC"
  },
  {
    "id":45071,
    "rate":186.41695285254104,
    "name":"Newberry County",
    "state":"SC"
  },
  {
    "id":45063,
    "rate":95.13849707901122,
    "name":"Lexington County",
    "state":"SC"
  },
  {
    "id":55069,
    "rate":0.7709328463051418,
    "name":"Lincoln County",
    "state":"WI"
  },
  {
    "id":45061,
    "rate":14.652632706625958,
    "name":"Lee County",
    "state":"SC"
  },
  {
    "id":46093,
    "rate":15.654991513655299,
    "name":"Meade County",
    "state":"SD"
  },
  {
    "id":45053,
    "rate":20.66646132522235,
    "name":"Jasper County",
    "state":"SC"
  },
  {
    "id":45051,
    "rate":496.383878860953,
    "name":"Horry County",
    "state":"SC"
  },
  {
    "id":47159,
    "rate":78.03870292887028,
    "name":"Smith County",
    "state":"TN"
  },
  {
    "id":45049,
    "rate":39.18142767508085,
    "name":"Hampton County",
    "state":"SC"
  },
  {
    "id":45035,
    "rate":361.3270864041549,
    "name":"Dorchester County",
    "state":"SC"
  },
  {
    "id":45033,
    "rate":103.64295481285976,
    "name":"Dillon County",
    "state":"SC"
  },
  {
    "id":45031,
    "rate":89.77979901709087,
    "name":"Darlington County",
    "state":"SC"
  },
  {
    "id":45029,
    "rate":4637.749149882292,
    "name":"Colleton County",
    "state":"SC"
  },
  {
    "id":45021,
    "rate":56.17754306550987,
    "name":"Cherokee County",
    "state":"SC"
  },
  {
    "id":45017,
    "rate":28.530357860876563,
    "name":"Calhoun County",
    "state":"SC"
  },
  {
    "id":45013,
    "rate":107.21412308829315,
    "name":"Beaufort County",
    "state":"SC"
  },
  {
    "id":47075,
    "rate":167.11450967494378,
    "name":"Haywood County",
    "state":"TN"
  },
  {
    "id":45003,
    "rate":388.52355194399917,
    "name":"Aiken County",
    "state":"SC"
  },
  {
    "id":45001,
    "rate":103.08198683423103,
    "name":"Abbeville County",
    "state":"SC"
  },
  {
    "id":44009,
    "rate":49.75706353418299,
    "name":"Washington County",
    "state":"RI"
  },
  {
    "id":44007,
    "rate":219.17931957138018,
    "name":"Providence County",
    "state":"RI"
  },
  {
    "id":44005,
    "rate":423.3640992230105,
    "name":"Newport County",
    "state":"RI"
  },
  {
    "id":44003,
    "rate":118.81928441479685,
    "name":"Kent County",
    "state":"RI"
  },
  {
    "id":49025,
    "rate":6.818622696411252,
    "name":"Kane County",
    "state":"UT"
  },
  {
    "id":42133,
    "rate":124.84837753798848,
    "name":"York County",
    "state":"PA"
  },
  {
    "id":42131,
    "rate":103.94313531818825,
    "name":"Wyoming County",
    "state":"PA"
  },
  {
    "id":53033,
    "rate":377.6719046703902,
    "name":"King County",
    "state":"WA"
  },
  {
    "id":42129,
    "rate":403.3917378132744,
    "name":"Westmoreland County",
    "state":"PA"
  },
  {
    "id":42125,
    "rate":171.9767213130482,
    "name":"Washington County",
    "state":"PA"
  },
  {
    "id":42119,
    "rate":146.86302310640457,
    "name":"Union County",
    "state":"PA"
  },
  {
    "id":42115,
    "rate":47.817782245809276,
    "name":"Susquehanna County",
    "state":"PA"
  },
  {
    "id":42111,
    "rate":136.2240954480613,
    "name":"Somerset County",
    "state":"PA"
  },
  {
    "id":42105,
    "rate":29.779290780141846,
    "name":"Potter County",
    "state":"PA"
  },
  {
    "id":42103,
    "rate":78.84975864134455,
    "name":"Pike County",
    "state":"PA"
  },
  {
    "id":42101,
    "rate":841.949817981985,
    "name":"Philadelphia County",
    "state":"PA"
  },
  {
    "id":48143,
    "rate":75.71395985401459,
    "name":"Erath County",
    "state":"TX"
  },
  {
    "id":42097,
    "rate":71.85022632091037,
    "name":"Northumberland County",
    "state":"PA"
  },
  {
    "id":42089,
    "rate":199.41358739203974,
    "name":"Monroe County",
    "state":"PA"
  },
  {
    "id":42081,
    "rate":139.9118469513029,
    "name":"Lycoming County",
    "state":"PA"
  },
  {
    "id":42079,
    "rate":658.1877886925869,
    "name":"Luzerne County",
    "state":"PA"
  },
  {
    "id":48355,
    "rate":624.271856937973,
    "name":"Nueces County",
    "state":"TX"
  },
  {
    "id":45081,
    "rate":47.89210038571356,
    "name":"Saluda County",
    "state":"SC"
  },
  {
    "id":42077,
    "rate":557.132032347319,
    "name":"Lehigh County",
    "state":"PA"
  },
  {
    "id":42073,
    "rate":114.86408231900852,
    "name":"Lawrence County",
    "state":"PA"
  },
  {
    "id":42069,
    "rate":378.4915388559963,
    "name":"Lackawanna County",
    "state":"PA"
  },
  {
    "id":42063,
    "rate":221.02189119024143,
    "name":"Indiana County",
    "state":"PA"
  },
  {
    "id":42099,
    "rate":120.17849340207988,
    "name":"Perry County",
    "state":"PA"
  },
  {
    "id":42057,
    "rate":101.04849634245463,
    "name":"Fulton County",
    "state":"PA"
  },
  {
    "id":56037,
    "rate":13.468469466917874,
    "name":"Sweetwater County",
    "state":"WY"
  },
  {
    "id":42123,
    "rate":40.147044550131035,
    "name":"Warren County",
    "state":"PA"
  },
  {
    "id":42055,
    "rate":76.41431766157174,
    "name":"Franklin County",
    "state":"PA"
  },
  {
    "id":51141,
    "rate":124.69216975493123,
    "name":"Patrick County",
    "state":"VA"
  },
  {
    "id":51101,
    "rate":59.9918633034988,
    "name":"King William County",
    "state":"VA"
  },
  {
    "id":42053,
    "rate":2.970013037809648,
    "name":"Forest County",
    "state":"PA"
  },
  {
    "id":42051,
    "rate":159.75494357059014,
    "name":"Fayette County",
    "state":"PA"
  },
  {
    "id":42049,
    "rate":466.43826054750605,
    "name":"Erie County",
    "state":"PA"
  },
  {
    "id":42045,
    "rate":720.229107388628,
    "name":"Delaware County",
    "state":"PA"
  },
  {
    "id":48123,
    "rate":57.19397731716856,
    "name":"De Witt County",
    "state":"TX"
  },
  {
    "id":42043,
    "rate":163.38412566655666,
    "name":"Dauphin County",
    "state":"PA"
  },
  {
    "id":54049,
    "rate":123.07957807244614,
    "name":"Marion County",
    "state":"WV"
  },
  {
    "id":42041,
    "rate":571.2356290604448,
    "name":"Cumberland County",
    "state":"PA"
  },
  {
    "id":42039,
    "rate":900.8210130047917,
    "name":"Crawford County",
    "state":"PA"
  },
  {
    "id":51035,
    "rate":30.81779533357881,
    "name":"Carroll County",
    "state":"VA"
  },
  {
    "id":42037,
    "rate":37.836052836052815,
    "name":"Columbia County",
    "state":"PA"
  },
  {
    "id":42033,
    "rate":224.96411175048775,
    "name":"Clearfield County",
    "state":"PA"
  },
  {
    "id":42031,
    "rate":143.90088719898603,
    "name":"Clarion County",
    "state":"PA"
  },
  {
    "id":42027,
    "rate":25.22534740522683,
    "name":"Centre County",
    "state":"PA"
  },
  {
    "id":54047,
    "rate":97.72825372994274,
    "name":"McDowell County",
    "state":"WV"
  },
  {
    "id":42025,
    "rate":73.52026121644307,
    "name":"Carbon County",
    "state":"PA"
  },
  {
    "id":42019,
    "rate":145.91542447147043,
    "name":"Butler County",
    "state":"PA"
  },
  {
    "id":42013,
    "rate":110.01236230206545,
    "name":"Blair County",
    "state":"PA"
  },
  {
    "id":55019,
    "rate":0.6151167851443493,
    "name":"Clark County",
    "state":"WI"
  },
  {
    "id":51117,
    "rate":53.261540399269464,
    "name":"Mecklenburg County",
    "state":"VA"
  },
  {
    "id":42009,
    "rate":297.37950160934446,
    "name":"Bedford County",
    "state":"PA"
  },
  {
    "id":42003,
    "rate":789.0090971673025,
    "name":"Allegheny County",
    "state":"PA"
  },
  {
    "id":42001,
    "rate":218.11617325533297,
    "name":"Adams County",
    "state":"PA"
  },
  {
    "id":41067,
    "rate":151.0632109935973,
    "name":"Washington County",
    "state":"OR"
  },
  {
    "id":41061,
    "rate":1.3858548299635913,
    "name":"Union County",
    "state":"OR"
  },
  {
    "id":49029,
    "rate":17.325035706998573,
    "name":"Morgan County",
    "state":"UT"
  },
  {
    "id":41059,
    "rate":36.99271970878834,
    "name":"Umatilla County",
    "state":"OR"
  },
  {
    "id":41057,
    "rate":0.607281055042249,
    "name":"Tillamook County",
    "state":"OR"
  },
  {
    "id":41049,
    "rate":4.161032028469751,
    "name":"Morrow County",
    "state":"OR"
  },
  {
    "id":55125,
    "rate":6.4832479676706924,
    "name":"Vilas County",
    "state":"WI"
  },
  {
    "id":41047,
    "rate":39.35407782307827,
    "name":"Marion County",
    "state":"OR"
  },
  {
    "id":41045,
    "rate":61.28177481539567,
    "name":"Malheur County",
    "state":"OR"
  },
  {
    "id":41043,
    "rate":14.477019263264614,
    "name":"Linn County",
    "state":"OR"
  },
  {
    "id":41039,
    "rate":30.810198571996814,
    "name":"Lane County",
    "state":"OR"
  },
  {
    "id":41037,
    "rate":1.7984595635430038,
    "name":"Lake County",
    "state":"OR"
  },
  {
    "id":41035,
    "rate":35.13264286363223,
    "name":"Klamath County",
    "state":"OR"
  },
  {
    "id":41033,
    "rate":8.198642216907059,
    "name":"Josephine County",
    "state":"OR"
  },
  {
    "id":51103,
    "rate":139.9581478183437,
    "name":"Lancaster County",
    "state":"VA"
  },
  {
    "id":41031,
    "rate":1.2358104692311227,
    "name":"Jefferson County",
    "state":"OR"
  },
  {
    "id":41029,
    "rate":264.01060267586735,
    "name":"Jackson County",
    "state":"OR"
  },
  {
    "id":41023,
    "rate":2.7292606259395926,
    "name":"Grant County",
    "state":"OR"
  },
  {
    "id":41017,
    "rate":919.0305788087496,
    "name":"Deschutes County",
    "state":"OR"
  },
  {
    "id":41015,
    "rate":34.37412917434492,
    "name":"Curry County",
    "state":"OR"
  },
  {
    "id":41011,
    "rate":47.635508055511245,
    "name":"Coos County",
    "state":"OR"
  },
  {
    "id":41009,
    "rate":3.368964396033166,
    "name":"Columbia County",
    "state":"OR"
  },
  {
    "id":41003,
    "rate":68.32912711275758,
    "name":"Benton County",
    "state":"OR"
  },
  {
    "id":40143,
    "rate":751.838573706996,
    "name":"Tulsa County",
    "state":"OK"
  },
  {
    "id":48199,
    "rate":31.687609929463814,
    "name":"Hardin County",
    "state":"TX"
  },
  {
    "id":40141,
    "rate":47.76593011305243,
    "name":"Tillman County",
    "state":"OK"
  },
  {
    "id":40139,
    "rate":10.043189523057633,
    "name":"Texas County",
    "state":"OK"
  },
  {
    "id":40123,
    "rate":4623.882544861337,
    "name":"Pontotoc County",
    "state":"OK"
  },
  {
    "id":40117,
    "rate":32.065764727294784,
    "name":"Pawnee County",
    "state":"OK"
  },
  {
    "id":40113,
    "rate":24.48489897937929,
    "name":"Osage County",
    "state":"OK"
  },
  {
    "id":47053,
    "rate":25.982887054560095,
    "name":"Gibson County",
    "state":"TN"
  },
  {
    "id":40109,
    "rate":502.5256283369377,
    "name":"Oklahoma County",
    "state":"OK"
  },
  {
    "id":54083,
    "rate":111.74405166553363,
    "name":"Randolph County",
    "state":"WV"
  },
  {
    "id":40107,
    "rate":16.30334064862229,
    "name":"Okfuskee County",
    "state":"OK"
  },
  {
    "id":40093,
    "rate":2.723593158375767,
    "name":"Major County",
    "state":"OK"
  },
  {
    "id":40091,
    "rate":17.96364876717669,
    "name":"McIntosh County",
    "state":"OK"
  },
  {
    "id":40085,
    "rate":13.259437415037121,
    "name":"Love County",
    "state":"OK"
  },
  {
    "id":40081,
    "rate":4.049101271372204,
    "name":"Lincoln County",
    "state":"OK"
  },
  {
    "id":40079,
    "rate":23.447681986582563,
    "name":"Le Flore County",
    "state":"OK"
  },
  {
    "id":40071,
    "rate":32.72072190463677,
    "name":"Kay County",
    "state":"OK"
  },
  {
    "id":40067,
    "rate":6.325177584846093,
    "name":"Jefferson County",
    "state":"OK"
  },
  {
    "id":48253,
    "rate":17.125565042692113,
    "name":"Jones County",
    "state":"TX"
  },
  {
    "id":47029,
    "rate":128.91089945897204,
    "name":"Cocke County",
    "state":"TN"
  },
  {
    "id":46083,
    "rate":49.43170055070182,
    "name":"Lincoln County",
    "state":"SD"
  },
  {
    "id":40065,
    "rate":16.246144472792352,
    "name":"Jackson County",
    "state":"OK"
  },
  {
    "id":42065,
    "rate":290.9466928151185,
    "name":"Jefferson County",
    "state":"PA"
  },
  {
    "id":42007,
    "rate":174.03051273615958,
    "name":"Beaver County",
    "state":"PA"
  },
  {
    "id":40061,
    "rate":11.527939690681587,
    "name":"Haskell County",
    "state":"OK"
  },
  {
    "id":40057,
    "rate":22.931034482758623,
    "name":"Harmon County",
    "state":"OK"
  },
  {
    "id":40051,
    "rate":28.113054623591054,
    "name":"Grady County",
    "state":"OK"
  },
  {
    "id":51059,
    "rate":303.4590428616034,
    "name":"Fairfax County",
    "state":"VA"
  },
  {
    "id":40047,
    "rate":87.41739782771779,
    "name":"Garfield County",
    "state":"OK"
  },
  {
    "id":40041,
    "rate":46.056365262369184,
    "name":"Delaware County",
    "state":"OK"
  },
  {
    "id":40037,
    "rate":60.017783046828704,
    "name":"Creek County",
    "state":"OK"
  },
  {
    "id":40031,
    "rate":160.12242222239774,
    "name":"Comanche County",
    "state":"OK"
  },
  {
    "id":40029,
    "rate":17.179790469753296,
    "name":"Coal County",
    "state":"OK"
  },
  {
    "id":42015,
    "rate":909.459984398134,
    "name":"Bradford County",
    "state":"PA"
  },
  {
    "id":40027,
    "rate":386.3876342429409,
    "name":"Cleveland County",
    "state":"OK"
  },
  {
    "id":40021,
    "rate":28.34813351356972,
    "name":"Cherokee County",
    "state":"OK"
  },
  {
    "id":40017,
    "rate":108.69948207658732,
    "name":"Canadian County",
    "state":"OK"
  },
  {
    "id":40013,
    "rate":76.07565229395793,
    "name":"Bryan County",
    "state":"OK"
  },
  {
    "id":40009,
    "rate":31.806462776311793,
    "name":"Beckham County",
    "state":"OK"
  },
  {
    "id":48267,
    "rate":18.041464490516102,
    "name":"Kimble County",
    "state":"TX"
  },
  {
    "id":40001,
    "rate":4.3698309960445885,
    "name":"Adair County",
    "state":"OK"
  },
  {
    "id":51013,
    "rate":159.77607266599682,
    "name":"Arlington County",
    "state":"VA"
  },
  {
    "id":39175,
    "rate":31.081356232294613,
    "name":"Wyandot County",
    "state":"OH"
  },
  {
    "id":39173,
    "rate":97.24885161551073,
    "name":"Wood County",
    "state":"OH"
  },
  {
    "id":39169,
    "rate":101.51647969388642,
    "name":"Wayne County",
    "state":"OH"
  },
  {
    "id":39159,
    "rate":51.52267348291205,
    "name":"Union County",
    "state":"OH"
  },
  {
    "id":39157,
    "rate":63.272100164345645,
    "name":"Tuscarawas County",
    "state":"OH"
  },
  {
    "id":39153,
    "rate":454.4637960903508,
    "name":"Summit County",
    "state":"OH"
  },
  {
    "id":48361,
    "rate":63.52159708743718,
    "name":"Orange County",
    "state":"TX"
  },
  {
    "id":39147,
    "rate":69.20142793395806,
    "name":"Seneca County",
    "state":"OH"
  },
  {
    "id":39145,
    "rate":145.0346179300514,
    "name":"Scioto County",
    "state":"OH"
  },
  {
    "id":39137,
    "rate":109.75220151546179,
    "name":"Putnam County",
    "state":"OH"
  },
  {
    "id":39133,
    "rate":60.957504834630825,
    "name":"Portage County",
    "state":"OH"
  },
  {
    "id":39123,
    "rate":91.41171635115204,
    "name":"Ottawa County",
    "state":"OH"
  },
  {
    "id":39121,
    "rate":10.920628387185292,
    "name":"Noble County",
    "state":"OH"
  },
  {
    "id":39117,
    "rate":12.615490100848497,
    "name":"Morrow County",
    "state":"OH"
  },
  {
    "id":39115,
    "rate":70.97691535630648,
    "name":"Morgan County",
    "state":"OH"
  },
  {
    "id":39111,
    "rate":120.88003292406884,
    "name":"Monroe County",
    "state":"OH"
  },
  {
    "id":51089,
    "rate":21.529229138270487,
    "name":"Henry County",
    "state":"VA"
  },
  {
    "id":39107,
    "rate":66.36123153795283,
    "name":"Mercer County",
    "state":"OH"
  },
  {
    "id":39105,
    "rate":51.884322033898314,
    "name":"Meigs County",
    "state":"OH"
  },
  {
    "id":39097,
    "rate":66.66798575385832,
    "name":"Madison County",
    "state":"OH"
  },
  {
    "id":39095,
    "rate":500.0481050629209,
    "name":"Lucas County",
    "state":"OH"
  },
  {
    "id":39093,
    "rate":197.68365402144548,
    "name":"Lorain County",
    "state":"OH"
  },
  {
    "id":39089,
    "rate":156.95299876579273,
    "name":"Licking County",
    "state":"OH"
  },
  {
    "id":39077,
    "rate":120.6587401973185,
    "name":"Huron County",
    "state":"OH"
  },
  {
    "id":39071,
    "rate":8.66865005578282,
    "name":"Highland County",
    "state":"OH"
  },
  {
    "id":39067,
    "rate":32.006499299095196,
    "name":"Harrison County",
    "state":"OH"
  },
  {
    "id":46109,
    "rate":9.575763432547351,
    "name":"Roberts County",
    "state":"SD"
  },
  {
    "id":39065,
    "rate":106.00733179534176,
    "name":"Hardin County",
    "state":"OH"
  },
  {
    "id":39061,
    "rate":424.58106449140274,
    "name":"Hamilton County",
    "state":"OH"
  },
  {
    "id":40135,
    "rate":15.527420054984804,
    "name":"Sequoyah County",
    "state":"OK"
  },
  {
    "id":39059,
    "rate":32.04531183281843,
    "name":"Guernsey County",
    "state":"OH"
  },
  {
    "id":39055,
    "rate":74.04793594343941,
    "name":"Geauga County",
    "state":"OH"
  },
  {
    "id":39053,
    "rate":1428.6404804414872,
    "name":"Gallia County",
    "state":"OH"
  },
  {
    "id":40019,
    "rate":60.81410815978719,
    "name":"Carter County",
    "state":"OK"
  },
  {
    "id":39049,
    "rate":1098.0745169332351,
    "name":"Franklin County",
    "state":"OH"
  },
  {
    "id":39039,
    "rate":625.3696738626411,
    "name":"Delaware County",
    "state":"OH"
  },
  {
    "id":39031,
    "rate":41.40357550399393,
    "name":"Coshocton County",
    "state":"OH"
  },
  {
    "id":39029,
    "rate":212.35150979913183,
    "name":"Columbiana County",
    "state":"OH"
  },
  {
    "id":44001,
    "rate":100.55404362484262,
    "name":"Bristol County",
    "state":"RI"
  },
  {
    "id":39025,
    "rate":121.22704159743817,
    "name":"Clermont County",
    "state":"OH"
  },
  {
    "id":39023,
    "rate":89.84693208157789,
    "name":"Clark County",
    "state":"OH"
  },
  {
    "id":41071,
    "rate":57.88798364608864,
    "name":"Yamhill County",
    "state":"OR"
  },
  {
    "id":39021,
    "rate":49.65821249936847,
    "name":"Champaign County",
    "state":"OH"
  },
  {
    "id":39019,
    "rate":40.169467787114854,
    "name":"Carroll County",
    "state":"OH"
  },
  {
    "id":39017,
    "rate":283.819374219663,
    "name":"Butler County",
    "state":"OH"
  },
  {
    "id":39015,
    "rate":22.640978290244124,
    "name":"Brown County",
    "state":"OH"
  },
  {
    "id":39013,
    "rate":207.42215328047746,
    "name":"Belmont County",
    "state":"OH"
  },
  {
    "id":39009,
    "rate":204.8688078220242,
    "name":"Athens County",
    "state":"OH"
  },
  {
    "id":39005,
    "rate":28.38767843726523,
    "name":"Ashland County",
    "state":"OH"
  },
  {
    "id":39001,
    "rate":72.09053091729537,
    "name":"Adams County",
    "state":"OH"
  },
  {
    "id":41051,
    "rate":824.0838568455897,
    "name":"Multnomah County",
    "state":"OR"
  },
  {
    "id":38097,
    "rate":27.100210578471447,
    "name":"Traill County",
    "state":"ND"
  },
  {
    "id":38093,
    "rate":54.12205363107166,
    "name":"Stutsman County",
    "state":"ND"
  },
  {
    "id":38077,
    "rate":12.41640962368908,
    "name":"Richland County",
    "state":"ND"
  },
  {
    "id":38075,
    "rate":38.132341425215344,
    "name":"Renville County",
    "state":"ND"
  },
  {
    "id":38071,
    "rate":40.58675897879706,
    "name":"Ramsey County",
    "state":"ND"
  },
  {
    "id":38063,
    "rate":4227.260629665693,
    "name":"Nelson County",
    "state":"ND"
  },
  {
    "id":38059,
    "rate":110.5141736494919,
    "name":"Morton County",
    "state":"ND"
  },
  {
    "id":38055,
    "rate":33.531106605485,
    "name":"McLean County",
    "state":"ND"
  },
  {
    "id":38037,
    "rate":32.263585793752675,
    "name":"Grant County",
    "state":"ND"
  },
  {
    "id":38073,
    "rate":6.437705516989404,
    "name":"Ransom County",
    "state":"ND"
  },
  {
    "id":38035,
    "rate":1221.5751613713242,
    "name":"Grand Forks County",
    "state":"ND"
  },
  {
    "id":38017,
    "rate":167.97435586811957,
    "name":"Cass County",
    "state":"ND"
  },
  {
    "id":48167,
    "rate":165.68990509803672,
    "name":"Galveston County",
    "state":"TX"
  },
  {
    "id":38011,
    "rate":25.493788819875775,
    "name":"Bowman County",
    "state":"ND"
  },
  {
    "id":38009,
    "rate":2.387969011089169,
    "name":"Bottineau County",
    "state":"ND"
  },
  {
    "id":51029,
    "rate":55.07187701695712,
    "name":"Buckingham County",
    "state":"VA"
  },
  {
    "id":37199,
    "rate":35.715419951227815,
    "name":"Yancey County",
    "state":"NC"
  },
  {
    "id":55053,
    "rate":51.43380377985058,
    "name":"Jackson County",
    "state":"WI"
  },
  {
    "id":37195,
    "rate":118.39435965169747,
    "name":"Wilson County",
    "state":"NC"
  },
  {
    "id":40069,
    "rate":6.536119945479328,
    "name":"Johnston County",
    "state":"OK"
  },
  {
    "id":37189,
    "rate":63.0977258758451,
    "name":"Watauga County",
    "state":"NC"
  },
  {
    "id":37187,
    "rate":45.83844098695583,
    "name":"Washington County",
    "state":"NC"
  },
  {
    "id":41041,
    "rate":3425.962688507541,
    "name":"Lincoln County",
    "state":"OR"
  },
  {
    "id":37185,
    "rate":28.466543653491307,
    "name":"Warren County",
    "state":"NC"
  },
  {
    "id":37183,
    "rate":741.7145508502433,
    "name":"Wake County",
    "state":"NC"
  },
  {
    "id":37169,
    "rate":25.45598425870476,
    "name":"Stokes County",
    "state":"NC"
  },
  {
    "id":37167,
    "rate":63.93979468698858,
    "name":"Stanly County",
    "state":"NC"
  },
  {
    "id":37165,
    "rate":75.68271703957741,
    "name":"Scotland County",
    "state":"NC"
  },
  {
    "id":37173,
    "rate":78.70951704545453,
    "name":"Swain County",
    "state":"NC"
  },
  {
    "id":37163,
    "rate":44.23131700446043,
    "name":"Sampson County",
    "state":"NC"
  },
  {
    "id":37157,
    "rate":71.2462491634825,
    "name":"Rockingham County",
    "state":"NC"
  },
  {
    "id":37151,
    "rate":132.2553855233759,
    "name":"Randolph County",
    "state":"NC"
  },
  {
    "id":37147,
    "rate":1455.6385667601737,
    "name":"Pitt County",
    "state":"NC"
  },
  {
    "id":53047,
    "rate":8.055218593818234,
    "name":"Okanogan County",
    "state":"WA"
  },
  {
    "id":37141,
    "rate":32.2548965108307,
    "name":"Pender County",
    "state":"NC"
  },
  {
    "id":37137,
    "rate":23.139133767727095,
    "name":"Pamlico County",
    "state":"NC"
  },
  {
    "id":37135,
    "rate":407.8798791821561,
    "name":"Orange County",
    "state":"NC"
  },
  {
    "id":37131,
    "rate":14.419313969311627,
    "name":"Northampton County",
    "state":"NC"
  },
  {
    "id":47065,
    "rate":368.81723789768495,
    "name":"Hamilton County",
    "state":"TN"
  },
  {
    "id":37129,
    "rate":1208.4688285979348,
    "name":"New Hanover County",
    "state":"NC"
  },
  {
    "id":37127,
    "rate":929.9545740663035,
    "name":"Nash County",
    "state":"NC"
  },
  {
    "id":37119,
    "rate":268.4445781752078,
    "name":"Mecklenburg County",
    "state":"NC"
  },
  {
    "id":37117,
    "rate":27.793686678389015,
    "name":"Martin County",
    "state":"NC"
  },
  {
    "id":40105,
    "rate":21.852201852201848,
    "name":"Nowata County",
    "state":"OK"
  },
  {
    "id":39131,
    "rate":41.622750078944584,
    "name":"Pike County",
    "state":"OH"
  },
  {
    "id":37115,
    "rate":20.436260894550333,
    "name":"Madison County",
    "state":"NC"
  },
  {
    "id":37111,
    "rate":67.49193853270175,
    "name":"McDowell County",
    "state":"NC"
  },
  {
    "id":37107,
    "rate":95.18544803230766,
    "name":"Lenoir County",
    "state":"NC"
  },
  {
    "id":37105,
    "rate":80.86241746395365,
    "name":"Lee County",
    "state":"NC"
  },
  {
    "id":37103,
    "rate":125.69384974698328,
    "name":"Jones County",
    "state":"NC"
  },
  {
    "id":37099,
    "rate":99.15243360647648,
    "name":"Jackson County",
    "state":"NC"
  },
  {
    "id":37097,
    "rate":443.03409454044913,
    "name":"Iredell County",
    "state":"NC"
  },
  {
    "id":51520,
    "rate":60.154028436018976,
    "name":"Bristol City",
    "state":"VA"
  },
  {
    "id":37093,
    "rate":27.002001307785306,
    "name":"Hoke County",
    "state":"NC"
  },
  {
    "id":37091,
    "rate":88.89366404715129,
    "name":"Hertford County",
    "state":"NC"
  },
  {
    "id":48225,
    "rate":1.1564214436908722,
    "name":"Houston County",
    "state":"TX"
  },
  {
    "id":37089,
    "rate":52.548767516070846,
    "name":"Henderson County",
    "state":"NC"
  },
  {
    "id":53073,
    "rate":42.38635531448489,
    "name":"Whatcom County",
    "state":"WA"
  },
  {
    "id":46115,
    "rate":1.6536380036079374,
    "name":"Spink County",
    "state":"SD"
  },
  {
    "id":37079,
    "rate":11.299144500023377,
    "name":"Greene County",
    "state":"NC"
  },
  {
    "id":54059,
    "rate":39.21062705765255,
    "name":"Mingo County",
    "state":"WV"
  },
  {
    "id":37077,
    "rate":51.023210764813726,
    "name":"Granville County",
    "state":"NC"
  },
  {
    "id":37071,
    "rate":875.5695855987386,
    "name":"Gaston County",
    "state":"NC"
  },
  {
    "id":37067,
    "rate":210.11984344925676,
    "name":"Forsyth County",
    "state":"NC"
  },
  {
    "id":37065,
    "rate":28.9541228416556,
    "name":"Edgecombe County",
    "state":"NC"
  },
  {
    "id":45089,
    "rate":29.272445820433422,
    "name":"Williamsburg County",
    "state":"SC"
  },
  {
    "id":37061,
    "rate":79.55285166004658,
    "name":"Duplin County",
    "state":"NC"
  },
  {
    "id":37055,
    "rate":33.67374775088514,
    "name":"Dare County",
    "state":"NC"
  },
  {
    "id":37051,
    "rate":116.77018498974016,
    "name":"Cumberland County",
    "state":"NC"
  },
  {
    "id":37049,
    "rate":120.25325470757483,
    "name":"Craven County",
    "state":"NC"
  },
  {
    "id":51193,
    "rate":18.242555866720007,
    "name":"Westmoreland County",
    "state":"VA"
  },
  {
    "id":37043,
    "rate":1.1833708708708708,
    "name":"Clay County",
    "state":"NC"
  },
  {
    "id":37039,
    "rate":63.308987097730984,
    "name":"Cherokee County",
    "state":"NC"
  },
  {
    "id":48041,
    "rate":1072.4295621911867,
    "name":"Brazos County",
    "state":"TX"
  },
  {
    "id":37035,
    "rate":236.39938389054996,
    "name":"Catawba County",
    "state":"NC"
  },
  {
    "id":37027,
    "rate":91.74212286139652,
    "name":"Caldwell County",
    "state":"NC"
  },
  {
    "id":37023,
    "rate":65.83409985039066,
    "name":"Burke County",
    "state":"NC"
  },
  {
    "id":37021,
    "rate":2376.687141670382,
    "name":"Buncombe County",
    "state":"NC"
  },
  {
    "id":45011,
    "rate":17.670673723871896,
    "name":"Barnwell County",
    "state":"SC"
  },
  {
    "id":37019,
    "rate":62.445112272378665,
    "name":"Brunswick County",
    "state":"NC"
  },
  {
    "id":45009,
    "rate":98.8872704243192,
    "name":"Bamberg County",
    "state":"SC"
  },
  {
    "id":37017,
    "rate":39.0325445482152,
    "name":"Bladen County",
    "state":"NC"
  },
  {
    "id":37015,
    "rate":58.329207320032985,
    "name":"Bertie County",
    "state":"NC"
  },
  {
    "id":37013,
    "rate":49.79301341306775,
    "name":"Beaufort County",
    "state":"NC"
  },
  {
    "id":37011,
    "rate":33.35693248753964,
    "name":"Avery County",
    "state":"NC"
  },
  {
    "id":37009,
    "rate":74.45156537753219,
    "name":"Ashe County",
    "state":"NC"
  },
  {
    "id":37005,
    "rate":28.01739130434782,
    "name":"Alleghany County",
    "state":"NC"
  },
  {
    "id":37003,
    "rate":26.908840376094243,
    "name":"Alexander County",
    "state":"NC"
  },
  {
    "id":40023,
    "rate":5.4251812788398155,
    "name":"Choctaw County",
    "state":"OK"
  },
  {
    "id":37001,
    "rate":121.7508719870894,
    "name":"Alamance County",
    "state":"NC"
  },
  {
    "id":36123,
    "rate":133.14427073025925,
    "name":"Yates County",
    "state":"NY"
  },
  {
    "id":39161,
    "rate":82.95937902467892,
    "name":"Van Wert County",
    "state":"OH"
  },
  {
    "id":36121,
    "rate":136.67784109956418,
    "name":"Wyoming County",
    "state":"NY"
  },
  {
    "id":36119,
    "rate":400.132536396047,
    "name":"Westchester County",
    "state":"NY"
  },
  {
    "id":54079,
    "rate":84.26549329374967,
    "name":"Putnam County",
    "state":"WV"
  },
  {
    "id":36117,
    "rate":48.66314012622433,
    "name":"Wayne County",
    "state":"NY"
  },
  {
    "id":36115,
    "rate":27.527995431906866,
    "name":"Washington County",
    "state":"NY"
  },
  {
    "id":36113,
    "rate":78.16796576493965,
    "name":"Warren County",
    "state":"NY"
  },
  {
    "id":36111,
    "rate":187.28784643493987,
    "name":"Ulster County",
    "state":"NY"
  },
  {
    "id":36107,
    "rate":58.47700407271283,
    "name":"Tioga County",
    "state":"NY"
  },
  {
    "id":36105,
    "rate":62.01400891476395,
    "name":"Sullivan County",
    "state":"NY"
  },
  {
    "id":51630,
    "rate":498.70504923837325,
    "name":"Fredericksburg City",
    "state":"VA"
  },
  {
    "id":36101,
    "rate":73.32808335352556,
    "name":"Steuben County",
    "state":"NY"
  },
  {
    "id":40153,
    "rate":36.08708286918197,
    "name":"Woodward County",
    "state":"OK"
  },
  {
    "id":36099,
    "rate":96.11769028574659,
    "name":"Seneca County",
    "state":"NY"
  },
  {
    "id":37125,
    "rate":938.8726749335694,
    "name":"Moore County",
    "state":"NC"
  },
  {
    "id":36097,
    "rate":47.42627634912933,
    "name":"Schuyler County",
    "state":"NY"
  },
  {
    "id":36095,
    "rate":36.422241637543685,
    "name":"Schoharie County",
    "state":"NY"
  },
  {
    "id":36093,
    "rate":117.58988977820192,
    "name":"Schenectady County",
    "state":"NY"
  },
  {
    "id":36091,
    "rate":97.623115555296,
    "name":"Saratoga County",
    "state":"NY"
  },
  {
    "id":40039,
    "rate":25.960095378357526,
    "name":"Custer County",
    "state":"OK"
  },
  {
    "id":36089,
    "rate":91.9608592819163,
    "name":"St. Lawrence County",
    "state":"NY"
  },
  {
    "id":36085,
    "rate":653.9248625729064,
    "name":"Richmond County",
    "state":"NY"
  },
  {
    "id":49005,
    "rate":13.081719243174252,
    "name":"Cache County",
    "state":"UT"
  },
  {
    "id":36081,
    "rate":334.4842651555092,
    "name":"Queens County",
    "state":"NY"
  },
  {
    "id":36079,
    "rate":211.41415053633966,
    "name":"Putnam County",
    "state":"NY"
  },
  {
    "id":36073,
    "rate":47.77830044452808,
    "name":"Orleans County",
    "state":"NY"
  },
  {
    "id":36069,
    "rate":106.99478056311106,
    "name":"Ontario County",
    "state":"NY"
  },
  {
    "id":36061,
    "rate":952.7241234606461,
    "name":"New York County",
    "state":"NY"
  },
  {
    "id":39057,
    "rate":81.26589296049224,
    "name":"Greene County",
    "state":"OH"
  },
  {
    "id":36059,
    "rate":707.2299975646249,
    "name":"Nassau County",
    "state":"NY"
  },
  {
    "id":36049,
    "rate":40.60126930555045,
    "name":"Lewis County",
    "state":"NY"
  },
  {
    "id":36045,
    "rate":303.9563002414899,
    "name":"Jefferson County",
    "state":"NY"
  },
  {
    "id":36041,
    "rate":28.759139335700855,
    "name":"Hamilton County",
    "state":"NY"
  },
  {
    "id":36039,
    "rate":55.918694508385414,
    "name":"Greene County",
    "state":"NY"
  },
  {
    "id":36037,
    "rate":140.45428733674046,
    "name":"Genesee County",
    "state":"NY"
  },
  {
    "id":36035,
    "rate":89.12657008343481,
    "name":"Fulton County",
    "state":"NY"
  },
  {
    "id":36033,
    "rate":86.31559647192792,
    "name":"Franklin County",
    "state":"NY"
  },
  {
    "id":47067,
    "rate":75.20586914208714,
    "name":"Hancock County",
    "state":"TN"
  },
  {
    "id":36025,
    "rate":42.891489632362294,
    "name":"Delaware County",
    "state":"NY"
  },
  {
    "id":47063,
    "rate":872.5560709674344,
    "name":"Hamblen County",
    "state":"TN"
  },
  {
    "id":40083,
    "rate":36.7211688192727,
    "name":"Logan County",
    "state":"OK"
  },
  {
    "id":36023,
    "rate":47.35707172326891,
    "name":"Cortland County",
    "state":"NY"
  },
  {
    "id":36021,
    "rate":100.93327365156503,
    "name":"Columbia County",
    "state":"NY"
  },
  {
    "id":36019,
    "rate":857.7327499816681,
    "name":"Clinton County",
    "state":"NY"
  },
  {
    "id":51179,
    "rate":27.431050649679257,
    "name":"Stafford County",
    "state":"VA"
  },
  {
    "id":37083,
    "rate":65.28828143834728,
    "name":"Halifax County",
    "state":"NC"
  },
  {
    "id":36017,
    "rate":39.27240265602118,
    "name":"Chenango County",
    "state":"NY"
  },
  {
    "id":36013,
    "rate":78.87964752955988,
    "name":"Chautauqua County",
    "state":"NY"
  },
  {
    "id":36011,
    "rate":877.7277465867841,
    "name":"Cayuga County",
    "state":"NY"
  },
  {
    "id":36007,
    "rate":383.44138521165735,
    "name":"Broome County",
    "state":"NY"
  },
  {
    "id":36003,
    "rate":44.36393381515461,
    "name":"Allegany County",
    "state":"NY"
  },
  {
    "id":36001,
    "rate":3309.18729138497,
    "name":"Albany County",
    "state":"NY"
  },
  {
    "id":35061,
    "rate":29.846926791074008,
    "name":"Valencia County",
    "state":"NM"
  },
  {
    "id":35055,
    "rate":1.8146082822927143,
    "name":"Taos County",
    "state":"NM"
  },
  {
    "id":35053,
    "rate":0.947110172876134,
    "name":"Socorro County",
    "state":"NM"
  },
  {
    "id":48059,
    "rate":32.60895301516833,
    "name":"Callahan County",
    "state":"TX"
  },
  {
    "id":35051,
    "rate":1.1334398385604978,
    "name":"Sierra County",
    "state":"NM"
  },
  {
    "id":35049,
    "rate":253.78139836731904,
    "name":"Santa Fe County",
    "state":"NM"
  },
  {
    "id":35047,
    "rate":55.136255310330576,
    "name":"San Miguel County",
    "state":"NM"
  },
  {
    "id":35045,
    "rate":27.252409108259915,
    "name":"San Juan County",
    "state":"NM"
  },
  {
    "id":51610,
    "rate":247.2761875761266,
    "name":"Falls Church City",
    "state":"VA"
  },
  {
    "id":35043,
    "rate":26.829417894013414,
    "name":"Sandoval County",
    "state":"NM"
  },
  {
    "id":35041,
    "rate":0.6122147915027537,
    "name":"Roosevelt County",
    "state":"NM"
  },
  {
    "id":35039,
    "rate":18.610283159463492,
    "name":"Rio Arriba County",
    "state":"NM"
  },
  {
    "id":48031,
    "rate":15.004709871891484,
    "name":"Blanco County",
    "state":"TX"
  },
  {
    "id":42093,
    "rate":2405.5351251960415,
    "name":"Montour County",
    "state":"PA"
  },
  {
    "id":36009,
    "rate":235.67946358801137,
    "name":"Cattaraugus County",
    "state":"NY"
  },
  {
    "id":35035,
    "rate":37.78735893013826,
    "name":"Otero County",
    "state":"NM"
  },
  {
    "id":35031,
    "rate":14.102535893063429,
    "name":"Mckinley County",
    "state":"NM"
  },
  {
    "id":35029,
    "rate":33.2735121307806,
    "name":"Luna County",
    "state":"NM"
  },
  {
    "id":35028,
    "rate":85.00165180046248,
    "name":"Los Alamos County",
    "state":"NM"
  },
  {
    "id":35017,
    "rate":0.497631139438972,
    "name":"Grant County",
    "state":"NM"
  },
  {
    "id":35015,
    "rate":8.141438293176385,
    "name":"Eddy County",
    "state":"NM"
  },
  {
    "id":55027,
    "rate":14.329841040462428,
    "name":"Dodge County",
    "state":"WI"
  },
  {
    "id":35006,
    "rate":16.35844498133099,
    "name":"Cibola County",
    "state":"NM"
  },
  {
    "id":34035,
    "rate":546.691573544757,
    "name":"Somerset County",
    "state":"NJ"
  },
  {
    "id":34033,
    "rate":71.85200414230019,
    "name":"Salem County",
    "state":"NJ"
  },
  {
    "id":34027,
    "rate":428.83387255591384,
    "name":"Morris County",
    "state":"NJ"
  },
  {
    "id":47129,
    "rate":588.2879927090455,
    "name":"Morgan County",
    "state":"TN"
  },
  {
    "id":34019,
    "rate":3041.7164456170585,
    "name":"Hunterdon County",
    "state":"NJ"
  },
  {
    "id":34017,
    "rate":323.59935391449625,
    "name":"Hudson County",
    "state":"NJ"
  },
  {
    "id":34015,
    "rate":285.00201953250354,
    "name":"Gloucester County",
    "state":"NJ"
  },
  {
    "id":34013,
    "rate":538.3332720296776,
    "name":"Essex County",
    "state":"NJ"
  },
  {
    "id":53067,
    "rate":142.39775349518575,
    "name":"Thurston County",
    "state":"WA"
  },
  {
    "id":40015,
    "rate":10.614720949042868,
    "name":"Caddo County",
    "state":"OK"
  },
  {
    "id":34009,
    "rate":203.98047677337706,
    "name":"Cape May County",
    "state":"NJ"
  },
  {
    "id":34005,
    "rate":152.29655125031294,
    "name":"Burlington County",
    "state":"NJ"
  },
  {
    "id":34001,
    "rate":669.1405688655367,
    "name":"Atlantic County",
    "state":"NJ"
  },
  {
    "id":45041,
    "rate":1384.1522526437775,
    "name":"Florence County",
    "state":"SC"
  },
  {
    "id":33019,
    "rate":13.234231731036397,
    "name":"Sullivan County",
    "state":"NH"
  },
  {
    "id":33017,
    "rate":649.8263250443622,
    "name":"Strafford County",
    "state":"NH"
  },
  {
    "id":33015,
    "rate":146.05316259346426,
    "name":"Rockingham County",
    "state":"NH"
  },
  {
    "id":33013,
    "rate":19.05644716879724,
    "name":"Merrimack County",
    "state":"NH"
  },
  {
    "id":33009,
    "rate":45.194085648407246,
    "name":"Grafton County",
    "state":"NH"
  },
  {
    "id":33003,
    "rate":58.05295067866658,
    "name":"Carroll County",
    "state":"NH"
  },
  {
    "id":51185,
    "rate":257.8841981558488,
    "name":"Tazewell County",
    "state":"VA"
  },
  {
    "id":33001,
    "rate":222.89548630658675,
    "name":"Belknap County",
    "state":"NH"
  },
  {
    "id":32510,
    "rate":92.1768844589395,
    "name":"Carson City",
    "state":"NV"
  },
  {
    "id":32033,
    "rate":7.207928721593753,
    "name":"White Pine County",
    "state":"NV"
  },
  {
    "id":32031,
    "rate":535.1280629058047,
    "name":"Washoe County",
    "state":"NV"
  },
  {
    "id":39043,
    "rate":100.03689071452867,
    "name":"Erie County",
    "state":"OH"
  },
  {
    "id":32027,
    "rate":22.320768662232076,
    "name":"Pershing County",
    "state":"NV"
  },
  {
    "id":32023,
    "rate":36.948955105654306,
    "name":"Nye County",
    "state":"NV"
  },
  {
    "id":21155,
    "rate":158.19209604802404,
    "name":"Marion County",
    "state":"KY"
  },
  {
    "id":32019,
    "rate":6.219359630947261,
    "name":"Lyon County",
    "state":"NV"
  },
  {
    "id":33011,
    "rate":167.39073522106298,
    "name":"Hillsborough County",
    "state":"NH"
  },
  {
    "id":32017,
    "rate":19.884068810770383,
    "name":"Lincoln County",
    "state":"NV"
  },
  {
    "id":12041,
    "rate":35.31412991939308,
    "name":"Gilchrist County",
    "state":"FL"
  },
  {
    "id":21225,
    "rate":114.06706792777302,
    "name":"Union County",
    "state":"KY"
  },
  {
    "id":32013,
    "rate":39.215250570142096,
    "name":"Humboldt County",
    "state":"NV"
  },
  {
    "id":18057,
    "rate":432.28628656283365,
    "name":"Hamilton County",
    "state":"IN"
  },
  {
    "id":31185,
    "rate":136.6290264205573,
    "name":"York County",
    "state":"NE"
  },
  {
    "id":56041,
    "rate":27.21759016627757,
    "name":"Uinta County",
    "state":"WY"
  },
  {
    "id":37155,
    "rate":70.63907274983747,
    "name":"Robeson County",
    "state":"NC"
  },
  {
    "id":29011,
    "rate":19.620703598867774,
    "name":"Barton County",
    "state":"MO"
  },
  {
    "id":31179,
    "rate":18.300399411393734,
    "name":"Wayne County",
    "state":"NE"
  },
  {
    "id":36031,
    "rate":59.64214406389185,
    "name":"Essex County",
    "state":"NY"
  },
  {
    "id":29123,
    "rate":33.20044918585065,
    "name":"Madison County",
    "state":"MO"
  },
  {
    "id":31177,
    "rate":27.51022620866393,
    "name":"Washington County",
    "state":"NE"
  },
  {
    "id":54081,
    "rate":204.93528980561675,
    "name":"Raleigh County",
    "state":"WV"
  },
  {
    "id":6077,
    "rate":291.346611842338,
    "name":"San Joaquin County",
    "state":"CA"
  },
  {
    "id":23007,
    "rate":1.2413883174976328,
    "name":"Franklin County",
    "state":"ME"
  },
  {
    "id":31175,
    "rate":14.58264365098132,
    "name":"Valley County",
    "state":"NE"
  },
  {
    "id":51099,
    "rate":11.29185630689207,
    "name":"King George County",
    "state":"VA"
  },
  {
    "id":12127,
    "rate":209.5946625574341,
    "name":"Volusia County",
    "state":"FL"
  },
  {
    "id":17109,
    "rate":26.896604701182962,
    "name":"McDonough County",
    "state":"IL"
  },
  {
    "id":31159,
    "rate":13.490716180371352,
    "name":"Seward County",
    "state":"NE"
  },
  {
    "id":48011,
    "rate":5.36447638603696,
    "name":"Armstrong County",
    "state":"TX"
  },
  {
    "id":30087,
    "rate":34.409507567682795,
    "name":"Rosebud County",
    "state":"MT"
  },
  {
    "id":31155,
    "rate":56.419474215408286,
    "name":"Saunders County",
    "state":"NE"
  },
  {
    "id":47105,
    "rate":69.3581006372756,
    "name":"Loudon County",
    "state":"TN"
  },
  {
    "id":6073,
    "rate":341.3479432294837,
    "name":"San Diego County",
    "state":"CA"
  },
  {
    "id":31151,
    "rate":89.8539489167301,
    "name":"Saline County",
    "state":"NE"
  },
  {
    "id":56035,
    "rate":17.724740683826354,
    "name":"Sublette County",
    "state":"WY"
  },
  {
    "id":48477,
    "rate":32.87840311817161,
    "name":"Washington County",
    "state":"TX"
  },
  {
    "id":47027,
    "rate":19.956410256410255,
    "name":"Clay County",
    "state":"TN"
  },
  {
    "id":38015,
    "rate":202.9174073170452,
    "name":"Burleigh County",
    "state":"ND"
  },
  {
    "id":28099,
    "rate":70.74834057751272,
    "name":"Neshoba County",
    "state":"MS"
  },
  {
    "id":31143,
    "rate":39.70087088224158,
    "name":"Polk County",
    "state":"NE"
  },
  {
    "id":31141,
    "rate":53.523557958105556,
    "name":"Platte County",
    "state":"NE"
  },
  {
    "id":55009,
    "rate":175.93753705328558,
    "name":"Brown County",
    "state":"WI"
  },
  {
    "id":27087,
    "rate":1.9543560949103422,
    "name":"Mahnomen County",
    "state":"MN"
  },
  {
    "id":29219,
    "rate":22.681104163489408,
    "name":"Warren County",
    "state":"MO"
  },
  {
    "id":31137,
    "rate":145.92664930555554,
    "name":"Phelps County",
    "state":"NE"
  },
  {
    "id":6001,
    "rate":77.24048658023223,
    "name":"Alameda County",
    "state":"CA"
  },
  {
    "id":31133,
    "rate":102.87562904385335,
    "name":"Pawnee County",
    "state":"NE"
  },
  {
    "id":31131,
    "rate":122.00394803871623,
    "name":"Otoe County",
    "state":"NE"
  },
  {
    "id":54017,
    "rate":3.225060827250608,
    "name":"Doddridge County",
    "state":"WV"
  },
  {
    "id":31053,
    "rate":62.857376602127076,
    "name":"Dodge County",
    "state":"NE"
  },
  {
    "id":31111,
    "rate":108.138999139582,
    "name":"Lincoln County",
    "state":"NE"
  },
  {
    "id":5041,
    "rate":44.35104183235247,
    "name":"Desha County",
    "state":"AR"
  },
  {
    "id":30105,
    "rate":42.04963971176942,
    "name":"Valley County",
    "state":"MT"
  },
  {
    "id":32007,
    "rate":13.082931986373781,
    "name":"Elko County",
    "state":"NV"
  },
  {
    "id":31105,
    "rate":9.569352708058123,
    "name":"Kimball County",
    "state":"NE"
  },
  {
    "id":31099,
    "rate":43.75114784205694,
    "name":"Kearney County",
    "state":"NE"
  },
  {
    "id":8081,
    "rate":20.321257689678745,
    "name":"Moffat County",
    "state":"CO"
  },
  {
    "id":31095,
    "rate":5.593961064759634,
    "name":"Jefferson County",
    "state":"NE"
  },
  {
    "id":18089,
    "rate":482.77351305976947,
    "name":"Lake County",
    "state":"IN"
  },
  {
    "id":31089,
    "rate":73.98981650494763,
    "name":"Holt County",
    "state":"NE"
  },
  {
    "id":31081,
    "rate":186.393351800554,
    "name":"Hamilton County",
    "state":"NE"
  },
  {
    "id":54071,
    "rate":14.976101964949548,
    "name":"Pendleton County",
    "state":"WV"
  },
  {
    "id":31079,
    "rate":77.3564266180492,
    "name":"Hall County",
    "state":"NE"
  },
  {
    "id":13067,
    "rate":138.7561084464629,
    "name":"Cobb County",
    "state":"GA"
  },
  {
    "id":31061,
    "rate":15.056426332288401,
    "name":"Franklin County",
    "state":"NE"
  },
  {
    "id":31173,
    "rate":216.04506716741295,
    "name":"Thurston County",
    "state":"NE"
  },
  {
    "id":31055,
    "rate":575.3504269643461,
    "name":"Douglas County",
    "state":"NE"
  },
  {
    "id":42095,
    "rate":259.93860296696676,
    "name":"Northampton County",
    "state":"PA"
  },
  {
    "id":40045,
    "rate":19.720245398773006,
    "name":"Ellis County",
    "state":"OK"
  },
  {
    "id":26059,
    "rate":58.88228428151479,
    "name":"Hillsdale County",
    "state":"MI"
  },
  {
    "id":1103,
    "rate":120.32626169236258,
    "name":"Morgan County",
    "state":"AL"
  },
  {
    "id":31051,
    "rate":97.69087523277466,
    "name":"Dixon County",
    "state":"NE"
  },
  {
    "id":49023,
    "rate":51.18125484120838,
    "name":"Juab County",
    "state":"UT"
  },
  {
    "id":45015,
    "rate":57.81955006253529,
    "name":"Berkeley County",
    "state":"SC"
  },
  {
    "id":31063,
    "rate":11.812522885389969,
    "name":"Frontier County",
    "state":"NE"
  },
  {
    "id":31049,
    "rate":60.902179422199694,
    "name":"Deuel County",
    "state":"NE"
  },
  {
    "id":48099,
    "rate":30.662336652146855,
    "name":"Coryell County",
    "state":"TX"
  },
  {
    "id":34039,
    "rate":273.164196028999,
    "name":"Union County",
    "state":"NJ"
  },
  {
    "id":31101,
    "rate":1.417783191230207,
    "name":"Keith County",
    "state":"NE"
  },
  {
    "id":6107,
    "rate":77.55820057187275,
    "name":"Tulare County",
    "state":"CA"
  },
  {
    "id":31037,
    "rate":33.7652974101129,
    "name":"Colfax County",
    "state":"NE"
  },
  {
    "id":31035,
    "rate":48.2238176993913,
    "name":"Clay County",
    "state":"NE"
  },
  {
    "id":31027,
    "rate":12.56442417331813,
    "name":"Cedar County",
    "state":"NE"
  },
  {
    "id":54093,
    "rate":4.466215242760409,
    "name":"Tucker County",
    "state":"WV"
  },
  {
    "id":54025,
    "rate":82.27866837960119,
    "name":"Greenbrier County",
    "state":"WV"
  },
  {
    "id":47107,
    "rate":165.91150003813019,
    "name":"McMinn County",
    "state":"TN"
  },
  {
    "id":18053,
    "rate":17.584688884719196,
    "name":"Grant County",
    "state":"IN"
  },
  {
    "id":31023,
    "rate":69.3440057775638,
    "name":"Butler County",
    "state":"NE"
  },
  {
    "id":31021,
    "rate":9.472422062350121,
    "name":"Burt County",
    "state":"NE"
  },
  {
    "id":31013,
    "rate":12.393942077761048,
    "name":"Box Butte County",
    "state":"NE"
  },
  {
    "id":21037,
    "rate":169.25078146421717,
    "name":"Campbell County",
    "state":"KY"
  },
  {
    "id":28009,
    "rate":25.565187239944525,
    "name":"Benton County",
    "state":"MS"
  },
  {
    "id":31011,
    "rate":23.023857961901236,
    "name":"Boone County",
    "state":"NE"
  },
  {
    "id":30111,
    "rate":1229.9489097229539,
    "name":"Yellowstone County",
    "state":"MT"
  },
  {
    "id":38061,
    "rate":6.740571428571429,
    "name":"Mountrail County",
    "state":"ND"
  },
  {
    "id":30107,
    "rate":6.326822296331586,
    "name":"Wheatland County",
    "state":"MT"
  },
  {
    "id":51735,
    "rate":5.043678918740729,
    "name":"Poquoson City",
    "state":"VA"
  },
  {
    "id":30101,
    "rate":29.39208564328044,
    "name":"Toole County",
    "state":"MT"
  },
  {
    "id":34037,
    "rate":166.4881450488149,
    "name":"Sussex County",
    "state":"NJ"
  },
  {
    "id":17089,
    "rate":121.19148862780578,
    "name":"Kane County",
    "state":"IL"
  },
  {
    "id":30093,
    "rate":575.1227785347754,
    "name":"Silver Bow County",
    "state":"MT"
  },
  {
    "id":30065,
    "rate":2.6245989304812833,
    "name":"Musselshell County",
    "state":"MT"
  },
  {
    "id":48419,
    "rate":11.013929505925812,
    "name":"Shelby County",
    "state":"TX"
  },
  {
    "id":16031,
    "rate":37.12419424151269,
    "name":"Cassia County",
    "state":"ID"
  },
  {
    "id":30057,
    "rate":4.679611650485437,
    "name":"Madison County",
    "state":"MT"
  },
  {
    "id":30053,
    "rate":34.456828804766545,
    "name":"Lincoln County",
    "state":"MT"
  },
  {
    "id":48165,
    "rate":0.6833947539562106,
    "name":"Gaines County",
    "state":"TX"
  },
  {
    "id":13079,
    "rate":18.545051113400426,
    "name":"Crawford County",
    "state":"GA"
  },
  {
    "id":31109,
    "rate":323.1556314295544,
    "name":"Lancaster County",
    "state":"NE"
  },
  {
    "id":30049,
    "rate":14.952425013493714,
    "name":"Lewis and Clark County",
    "state":"MT"
  },
  {
    "id":30047,
    "rate":22.07214041863513,
    "name":"Lake County",
    "state":"MT"
  },
  {
    "id":48035,
    "rate":34.48180663685053,
    "name":"Bosque County",
    "state":"TX"
  },
  {
    "id":30043,
    "rate":34.11315789473685,
    "name":"Jefferson County",
    "state":"MT"
  },
  {
    "id":54107,
    "rate":262.9827520476887,
    "name":"Wood County",
    "state":"WV"
  },
  {
    "id":2090,
    "rate":8.899198818681594,
    "name":"Fairbanks North Star Borough",
    "state":"AK"
  },
  {
    "id":26053,
    "rate":94.82616822429905,
    "name":"Gogebic County",
    "state":"MI"
  },
  {
    "id":30031,
    "rate":17.748045440801693,
    "name":"Gallatin County",
    "state":"MT"
  },
  {
    "id":30029,
    "rate":83.02338262880076,
    "name":"Flathead County",
    "state":"MT"
  },
  {
    "id":30021,
    "rate":10.558502002381209,
    "name":"Dawson County",
    "state":"MT"
  },
  {
    "id":54007,
    "rate":155.88885053503623,
    "name":"Braxton County",
    "state":"WV"
  },
  {
    "id":30091,
    "rate":7.32122905027933,
    "name":"Sheridan County",
    "state":"MT"
  },
  {
    "id":30009,
    "rate":1.2780690473835197,
    "name":"Carbon County",
    "state":"MT"
  },
  {
    "id":29221,
    "rate":30.540432824518756,
    "name":"Washington County",
    "state":"MO"
  },
  {
    "id":29207,
    "rate":27.55062357516427,
    "name":"Stoddard County",
    "state":"MO"
  },
  {
    "id":1087,
    "rate":4.518319491939424,
    "name":"Macon County",
    "state":"AL"
  },
  {
    "id":17139,
    "rate":71.33640552995392,
    "name":"Moultrie County",
    "state":"IL"
  },
  {
    "id":29205,
    "rate":37.33536781239961,
    "name":"Shelby County",
    "state":"MO"
  },
  {
    "id":29199,
    "rate":26.738505747126435,
    "name":"Scotland County",
    "state":"MO"
  },
  {
    "id":21039,
    "rate":163.71281237604126,
    "name":"Carlisle County",
    "state":"KY"
  },
  {
    "id":29186,
    "rate":350.8924574753804,
    "name":"Ste Genevieve County",
    "state":"MO"
  },
  {
    "id":29185,
    "rate":1.5435466946484786,
    "name":"St. Clair County",
    "state":"MO"
  },
  {
    "id":29175,
    "rate":90.98518079430941,
    "name":"Randolph County",
    "state":"MO"
  },
  {
    "id":29167,
    "rate":62.23854685741843,
    "name":"Polk County",
    "state":"MO"
  },
  {
    "id":51121,
    "rate":75.09926712736929,
    "name":"Montgomery County",
    "state":"VA"
  },
  {
    "id":29165,
    "rate":75.52069991099147,
    "name":"Platte County",
    "state":"MO"
  },
  {
    "id":8099,
    "rate":15.137444578798874,
    "name":"Prowers County",
    "state":"CO"
  },
  {
    "id":19185,
    "rate":2.9173878835562546,
    "name":"Wayne County",
    "state":"IA"
  },
  {
    "id":29163,
    "rate":29.952024149641524,
    "name":"Pike County",
    "state":"MO"
  },
  {
    "id":37085,
    "rate":88.68663726444815,
    "name":"Harnett County",
    "state":"NC"
  },
  {
    "id":29161,
    "rate":80.69849279596309,
    "name":"Phelps County",
    "state":"MO"
  },
  {
    "id":19165,
    "rate":282.4165354983017,
    "name":"Shelby County",
    "state":"IA"
  },
  {
    "id":30025,
    "rate":14.272517321016167,
    "name":"Fallon County",
    "state":"MT"
  },
  {
    "id":12015,
    "rate":1688.9151186790486,
    "name":"Charlotte County",
    "state":"FL"
  },
  {
    "id":29159,
    "rate":28.732231131294498,
    "name":"Pettis County",
    "state":"MO"
  },
  {
    "id":13031,
    "rate":106.11858727891905,
    "name":"Bulloch County",
    "state":"GA"
  },
  {
    "id":29157,
    "rate":56.50283851976451,
    "name":"Perry County",
    "state":"MO"
  },
  {
    "id":29155,
    "rate":190.40790417839597,
    "name":"Pemiscot County",
    "state":"MO"
  },
  {
    "id":29153,
    "rate":57.32751454696591,
    "name":"Ozark County",
    "state":"MO"
  },
  {
    "id":48449,
    "rate":46.49343896246906,
    "name":"Titus County",
    "state":"TX"
  },
  {
    "id":29147,
    "rate":4.466983352591261,
    "name":"Nodaway County",
    "state":"MO"
  },
  {
    "id":37139,
    "rate":176.009672325306,
    "name":"Pasquotank County",
    "state":"NC"
  },
  {
    "id":29137,
    "rate":12.093023255813952,
    "name":"Monroe County",
    "state":"MO"
  },
  {
    "id":29129,
    "rate":62.72482498653742,
    "name":"Mercer County",
    "state":"MO"
  },
  {
    "id":31181,
    "rate":9.544364508393285,
    "name":"Webster County",
    "state":"NE"
  },
  {
    "id":29127,
    "rate":128.5376097747232,
    "name":"Marion County",
    "state":"MO"
  },
  {
    "id":20147,
    "rate":1.9398659663104512,
    "name":"Phillips County",
    "state":"KS"
  },
  {
    "id":29121,
    "rate":21.96708665466701,
    "name":"Macon County",
    "state":"MO"
  },
  {
    "id":18109,
    "rate":47.69200762829404,
    "name":"Morgan County",
    "state":"IN"
  },
  {
    "id":20031,
    "rate":63.792616976252084,
    "name":"Coffey County",
    "state":"KS"
  },
  {
    "id":30089,
    "rate":4.175524905560924,
    "name":"Sanders County",
    "state":"MT"
  },
  {
    "id":26069,
    "rate":104.6026803310997,
    "name":"Iosco County",
    "state":"MI"
  },
  {
    "id":29105,
    "rate":21.768044730599794,
    "name":"Laclede County",
    "state":"MO"
  },
  {
    "id":29097,
    "rate":42.60369901717772,
    "name":"Jasper County",
    "state":"MO"
  },
  {
    "id":29089,
    "rate":2.83469207347019,
    "name":"Howard County",
    "state":"MO"
  },
  {
    "id":29083,
    "rate":71.22392776523705,
    "name":"Henry County",
    "state":"MO"
  },
  {
    "id":29079,
    "rate":8.63121185701831,
    "name":"Grundy County",
    "state":"MO"
  },
  {
    "id":39045,
    "rate":110.18874706672263,
    "name":"Fairfield County",
    "state":"OH"
  },
  {
    "id":29033,
    "rate":16.826827927432653,
    "name":"Carroll County",
    "state":"MO"
  },
  {
    "id":29077,
    "rate":862.9082319745178,
    "name":"Greene County",
    "state":"MO"
  },
  {
    "id":5017,
    "rate":15.848315587362544,
    "name":"Chicot County",
    "state":"AR"
  },
  {
    "id":13225,
    "rate":128.62195565249002,
    "name":"Peach County",
    "state":"GA"
  },
  {
    "id":17155,
    "rate":74.69787234042552,
    "name":"Putnam County",
    "state":"IL"
  },
  {
    "id":29071,
    "rate":65.07131162093386,
    "name":"Franklin County",
    "state":"MO"
  },
  {
    "id":45027,
    "rate":55.32142752925387,
    "name":"Clarendon County",
    "state":"SC"
  },
  {
    "id":29069,
    "rate":76.14740210843371,
    "name":"Dunklin County",
    "state":"MO"
  },
  {
    "id":37161,
    "rate":42.55372306411077,
    "name":"Rutherford County",
    "state":"NC"
  },
  {
    "id":36051,
    "rate":35.47362091825723,
    "name":"Livingston County",
    "state":"NY"
  },
  {
    "id":30071,
    "rate":7.984007753816333,
    "name":"Phillips County",
    "state":"MT"
  },
  {
    "id":56045,
    "rate":28.08679619912069,
    "name":"Weston County",
    "state":"WY"
  },
  {
    "id":29067,
    "rate":2.902632740108839,
    "name":"Douglas County",
    "state":"MO"
  },
  {
    "id":4025,
    "rate":62.79616392717489,
    "name":"Yavapai County",
    "state":"AZ"
  },
  {
    "id":20161,
    "rate":110.9616367616027,
    "name":"Riley County",
    "state":"KS"
  },
  {
    "id":29005,
    "rate":61.42624728850326,
    "name":"Atchison County",
    "state":"MO"
  },
  {
    "id":29063,
    "rate":27.185024079540163,
    "name":"Dekalb County",
    "state":"MO"
  },
  {
    "id":29059,
    "rate":51.809836065573776,
    "name":"Dallas County",
    "state":"MO"
  },
  {
    "id":41027,
    "rate":23.048877496906496,
    "name":"Hood River County",
    "state":"OR"
  },
  {
    "id":37197,
    "rate":59.07557284002525,
    "name":"Yadkin County",
    "state":"NC"
  },
  {
    "id":29053,
    "rate":8.19727309030749,
    "name":"Cooper County",
    "state":"MO"
  },
  {
    "id":48179,
    "rate":38.64713353479615,
    "name":"Gray County",
    "state":"TX"
  },
  {
    "id":29051,
    "rate":2885.0304411013726,
    "name":"Cole County",
    "state":"MO"
  },
  {
    "id":51033,
    "rate":8.72386744531601,
    "name":"Caroline County",
    "state":"VA"
  },
  {
    "id":9001,
    "rate":282.7688952089728,
    "name":"Fairfield County",
    "state":"CT"
  },
  {
    "id":21153,
    "rate":11.240214888718343,
    "name":"Magoffin County",
    "state":"KY"
  },
  {
    "id":29045,
    "rate":19.274366680978964,
    "name":"Clark County",
    "state":"MO"
  },
  {
    "id":2122,
    "rate":24.47698304013484,
    "name":"Kenai Peninsula Borough",
    "state":"AK"
  },
  {
    "id":29041,
    "rate":18.753091240400888,
    "name":"Chariton County",
    "state":"MO"
  },
  {
    "id":31019,
    "rate":79.22256737469566,
    "name":"Buffalo County",
    "state":"NE"
  },
  {
    "id":53019,
    "rate":2.6933540614069176,
    "name":"Ferry County",
    "state":"WA"
  },
  {
    "id":5113,
    "rate":7.019080234833661,
    "name":"Polk County",
    "state":"AR"
  },
  {
    "id":29037,
    "rate":95.49388185864055,
    "name":"Cass County",
    "state":"MO"
  },
  {
    "id":39035,
    "rate":823.9433631226694,
    "name":"Cuyahoga County",
    "state":"OH"
  },
  {
    "id":29035,
    "rate":4.637773868543099,
    "name":"Carter County",
    "state":"MO"
  },
  {
    "id":39155,
    "rate":121.87153813892265,
    "name":"Trumbull County",
    "state":"OH"
  },
  {
    "id":19163,
    "rate":175.88472223044897,
    "name":"Scott County",
    "state":"IA"
  },
  {
    "id":29031,
    "rate":390.55786196159835,
    "name":"Cape Girardeau County",
    "state":"MO"
  },
  {
    "id":17111,
    "rate":331.37067663065613,
    "name":"McHenry County",
    "state":"IL"
  },
  {
    "id":31003,
    "rate":75.79754601226993,
    "name":"Antelope County",
    "state":"NE"
  },
  {
    "id":29027,
    "rate":58.483737460074686,
    "name":"Callaway County",
    "state":"MO"
  },
  {
    "id":29025,
    "rate":29.03027643703379,
    "name":"Caldwell County",
    "state":"MO"
  },
  {
    "id":29023,
    "rate":177.62019901422852,
    "name":"Butler County",
    "state":"MO"
  },
  {
    "id":36053,
    "rate":38.434548467274226,
    "name":"Madison County",
    "state":"NY"
  },
  {
    "id":29021,
    "rate":1491.923166887579,
    "name":"Buchanan County",
    "state":"MO"
  },
  {
    "id":21053,
    "rate":26.243525847747485,
    "name":"Clinton County",
    "state":"KY"
  },
  {
    "id":29019,
    "rate":568.100147100693,
    "name":"Boone County",
    "state":"MO"
  },
  {
    "id":29017,
    "rate":22.359532446594116,
    "name":"Bollinger County",
    "state":"MO"
  },
  {
    "id":29013,
    "rate":35.654437728170436,
    "name":"Bates County",
    "state":"MO"
  },
  {
    "id":8021,
    "rate":2.7076030460534266,
    "name":"Conejos County",
    "state":"CO"
  },
  {
    "id":29001,
    "rate":1266.2607611701917,
    "name":"Adair County",
    "state":"MO"
  },
  {
    "id":48009,
    "rate":32.348381212950294,
    "name":"Archer County",
    "state":"TX"
  },
  {
    "id":28163,
    "rate":10.938759635103597,
    "name":"Yazoo County",
    "state":"MS"
  },
  {
    "id":20123,
    "rate":70.35635446231473,
    "name":"Mitchell County",
    "state":"KS"
  },
  {
    "id":28161,
    "rate":28.72949163501172,
    "name":"Yalobusha County",
    "state":"MS"
  },
  {
    "id":18045,
    "rate":76.08654970760236,
    "name":"Fountain County",
    "state":"IN"
  },
  {
    "id":28159,
    "rate":124.41295759810372,
    "name":"Winston County",
    "state":"MS"
  },
  {
    "id":40125,
    "rate":41.17929932251814,
    "name":"Pottawatomie County",
    "state":"OK"
  },
  {
    "id":28151,
    "rate":95.01468502127832,
    "name":"Washington County",
    "state":"MS"
  },
  {
    "id":28149,
    "rate":126.41666666666666,
    "name":"Warren County",
    "state":"MS"
  },
  {
    "id":28143,
    "rate":7.012813157391471,
    "name":"Tunica County",
    "state":"MS"
  },
  {
    "id":28139,
    "rate":86.83405417709996,
    "name":"Tippah County",
    "state":"MS"
  },
  {
    "id":39125,
    "rate":10.696323948773786,
    "name":"Paulding County",
    "state":"OH"
  },
  {
    "id":28133,
    "rate":121.94886383591472,
    "name":"Sunflower County",
    "state":"MS"
  },
  {
    "id":48197,
    "rate":24.508399209486164,
    "name":"Hardeman County",
    "state":"TX"
  },
  {
    "id":28129,
    "rate":0.6330741443702933,
    "name":"Smith County",
    "state":"MS"
  },
  {
    "id":28127,
    "rate":62.49140264871587,
    "name":"Simpson County",
    "state":"MS"
  },
  {
    "id":18113,
    "rate":92.1514423076923,
    "name":"Noble County",
    "state":"IN"
  },
  {
    "id":28117,
    "rate":123.69814302647177,
    "name":"Prentiss County",
    "state":"MS"
  },
  {
    "id":45055,
    "rate":89.89298110296954,
    "name":"Kershaw County",
    "state":"SC"
  },
  {
    "id":39003,
    "rate":272.5440954380101,
    "name":"Allen County",
    "state":"OH"
  },
  {
    "id":28115,
    "rate":43.23150436645247,
    "name":"Pontotoc County",
    "state":"MS"
  },
  {
    "id":28113,
    "rate":36.58796838772406,
    "name":"Pike County",
    "state":"MS"
  },
  {
    "id":17117,
    "rate":15.839052702931703,
    "name":"Macoupin County",
    "state":"IL"
  },
  {
    "id":29009,
    "rate":51.203781630477465,
    "name":"Barry County",
    "state":"MO"
  },
  {
    "id":21027,
    "rate":77.939098417753,
    "name":"Breckinridge County",
    "state":"KY"
  },
  {
    "id":28101,
    "rate":31.860809248554926,
    "name":"Newton County",
    "state":"MS"
  },
  {
    "id":28097,
    "rate":17.88860471724922,
    "name":"Montgomery County",
    "state":"MS"
  },
  {
    "id":28007,
    "rate":249.19207237358154,
    "name":"Attala County",
    "state":"MS"
  },
  {
    "id":28083,
    "rate":125.48533231958439,
    "name":"Leflore County",
    "state":"MS"
  },
  {
    "id":28075,
    "rate":236.89526728208148,
    "name":"Lauderdale County",
    "state":"MS"
  },
  {
    "id":28073,
    "rate":1657.9508848333994,
    "name":"Lamar County",
    "state":"MS"
  },
  {
    "id":28071,
    "rate":2127.3278324341472,
    "name":"Lafayette County",
    "state":"MS"
  },
  {
    "id":28067,
    "rate":72.95181691891499,
    "name":"Jones County",
    "state":"MS"
  },
  {
    "id":28065,
    "rate":43.708943493009016,
    "name":"Jefferson Davis County",
    "state":"MS"
  },
  {
    "id":29065,
    "rate":17.048196616661347,
    "name":"Dent County",
    "state":"MO"
  },
  {
    "id":29029,
    "rate":146.08775928880783,
    "name":"Camden County",
    "state":"MO"
  },
  {
    "id":45023,
    "rate":47.974881298820634,
    "name":"Chester County",
    "state":"SC"
  },
  {
    "id":12103,
    "rate":281.73920727773435,
    "name":"Pinellas County",
    "state":"FL"
  },
  {
    "id":28049,
    "rate":2350.4020974796367,
    "name":"Hinds County",
    "state":"MS"
  },
  {
    "id":28045,
    "rate":44.0156698300596,
    "name":"Hancock County",
    "state":"MS"
  },
  {
    "id":54063,
    "rate":60.83753335309815,
    "name":"Monroe County",
    "state":"WV"
  },
  {
    "id":28141,
    "rate":78.81974577569045,
    "name":"Tishomingo County",
    "state":"MS"
  },
  {
    "id":28043,
    "rate":123.56911547002221,
    "name":"Grenada County",
    "state":"MS"
  },
  {
    "id":28037,
    "rate":66.52085710663117,
    "name":"Franklin County",
    "state":"MS"
  },
  {
    "id":28155,
    "rate":35.49796040195006,
    "name":"Webster County",
    "state":"MS"
  },
  {
    "id":28033,
    "rate":77.3938865678819,
    "name":"Desoto County",
    "state":"MS"
  },
  {
    "id":28029,
    "rate":170.21244204553315,
    "name":"Copiah County",
    "state":"MS"
  },
  {
    "id":35057,
    "rate":10.38887506222001,
    "name":"Torrance County",
    "state":"NM"
  },
  {
    "id":28027,
    "rate":28.18649016935955,
    "name":"Coahoma County",
    "state":"MS"
  },
  {
    "id":28021,
    "rate":34.929607508532435,
    "name":"Claiborne County",
    "state":"MS"
  },
  {
    "id":28081,
    "rate":439.72037831169564,
    "name":"Lee County",
    "state":"MS"
  },
  {
    "id":47177,
    "rate":53.64079989938373,
    "name":"Warren County",
    "state":"TN"
  },
  {
    "id":18029,
    "rate":113.39419870635973,
    "name":"Dearborn County",
    "state":"IN"
  },
  {
    "id":28011,
    "rate":600.5413816388245,
    "name":"Bolivar County",
    "state":"MS"
  },
  {
    "id":54069,
    "rate":513.3915925186127,
    "name":"Ohio County",
    "state":"WV"
  },
  {
    "id":28005,
    "rate":3.0103299414122726,
    "name":"Amite County",
    "state":"MS"
  },
  {
    "id":32001,
    "rate":14.101246041863721,
    "name":"Churchill County",
    "state":"NV"
  },
  {
    "id":18021,
    "rate":88.73096257680133,
    "name":"Clay County",
    "state":"IN"
  },
  {
    "id":28003,
    "rate":114.0349652227623,
    "name":"Alcorn County",
    "state":"MS"
  },
  {
    "id":27173,
    "rate":1.833202202989772,
    "name":"Yellow Medicine County",
    "state":"MN"
  },
  {
    "id":27171,
    "rate":0.6713217506047944,
    "name":"Wright County",
    "state":"MN"
  },
  {
    "id":12069,
    "rate":147.99245345196906,
    "name":"Lake County",
    "state":"FL"
  },
  {
    "id":31153,
    "rate":78.26066505047584,
    "name":"Sarpy County",
    "state":"NE"
  },
  {
    "id":49039,
    "rate":9.373506011630809,
    "name":"Sanpete County",
    "state":"UT"
  },
  {
    "id":22033,
    "rate":482.6673884077305,
    "name":"East Baton Rouge Parish",
    "state":"LA"
  },
  {
    "id":27167,
    "rate":10.850484261501212,
    "name":"Wilkin County",
    "state":"MN"
  },
  {
    "id":27157,
    "rate":0.526561478853515,
    "name":"Wabasha County",
    "state":"MN"
  },
  {
    "id":40063,
    "rate":1.6735582154515778,
    "name":"Hughes County",
    "state":"OK"
  },
  {
    "id":1025,
    "rate":147.83653846153845,
    "name":"Clarke County",
    "state":"AL"
  },
  {
    "id":30083,
    "rate":22.839540485454883,
    "name":"Richland County",
    "state":"MT"
  },
  {
    "id":13221,
    "rate":44.00561759265604,
    "name":"Oglethorpe County",
    "state":"GA"
  },
  {
    "id":27155,
    "rate":3.779918272037361,
    "name":"Traverse County",
    "state":"MN"
  },
  {
    "id":19139,
    "rate":15.127607504952804,
    "name":"Muscatine County",
    "state":"IA"
  },
  {
    "id":27145,
    "rate":486.12512034606914,
    "name":"Stearns County",
    "state":"MN"
  },
  {
    "id":39127,
    "rate":121.72236575270162,
    "name":"Perry County",
    "state":"OH"
  },
  {
    "id":37037,
    "rate":1134.5717281305556,
    "name":"Chatham County",
    "state":"NC"
  },
  {
    "id":31047,
    "rate":61.97178423236515,
    "name":"Dawson County",
    "state":"NE"
  },
  {
    "id":48039,
    "rate":127.95797312571428,
    "name":"Brazoria County",
    "state":"TX"
  },
  {
    "id":13277,
    "rate":110.85353954237205,
    "name":"Tift County",
    "state":"GA"
  },
  {
    "id":23001,
    "rate":68.86731903335628,
    "name":"Androscoggin County",
    "state":"ME"
  },
  {
    "id":28051,
    "rate":2.4548319327731094,
    "name":"Holmes County",
    "state":"MS"
  },
  {
    "id":48115,
    "rate":12.833931054673206,
    "name":"Dawson County",
    "state":"TX"
  },
  {
    "id":45079,
    "rate":171.74503463499218,
    "name":"Richland County",
    "state":"SC"
  },
  {
    "id":27141,
    "rate":0.4027355623100304,
    "name":"Sherburne County",
    "state":"MN"
  },
  {
    "id":27139,
    "rate":0.9571620802342261,
    "name":"Scott County",
    "state":"MN"
  },
  {
    "id":17019,
    "rate":215.57107774657004,
    "name":"Champaign County",
    "state":"IL"
  },
  {
    "id":27135,
    "rate":4.066636533867115,
    "name":"Roseau County",
    "state":"MN"
  },
  {
    "id":51690,
    "rate":247.3899759947625,
    "name":"Martinsville City",
    "state":"VA"
  },
  {
    "id":36067,
    "rate":466.86419853504486,
    "name":"Onondaga County",
    "state":"NY"
  },
  {
    "id":19099,
    "rate":214.93076838879162,
    "name":"Jasper County",
    "state":"IA"
  },
  {
    "id":27123,
    "rate":148.56616863658266,
    "name":"Ramsey County",
    "state":"MN"
  },
  {
    "id":54065,
    "rate":902.375380026387,
    "name":"Morgan County",
    "state":"WV"
  },
  {
    "id":27119,
    "rate":6.2859772157522285,
    "name":"Polk County",
    "state":"MN"
  },
  {
    "id":56009,
    "rate":28.185647982863255,
    "name":"Converse County",
    "state":"WY"
  },
  {
    "id":27117,
    "rate":23.43539955190441,
    "name":"Pipestone County",
    "state":"MN"
  },
  {
    "id":21049,
    "rate":1942.1536696605947,
    "name":"Clark County",
    "state":"KY"
  },
  {
    "id":27107,
    "rate":6.591833659786048,
    "name":"Norman County",
    "state":"MN"
  },
  {
    "id":32003,
    "rate":403.1166499720303,
    "name":"Clark County",
    "state":"NV"
  },
  {
    "id":18173,
    "rate":149.38284882278,
    "name":"Warrick County",
    "state":"IN"
  },
  {
    "id":27103,
    "rate":1.1179256740344912,
    "name":"Nicollet County",
    "state":"MN"
  },
  {
    "id":39073,
    "rate":82.40483424942815,
    "name":"Hocking County",
    "state":"OH"
  },
  {
    "id":27101,
    "rate":3.8336832283648237,
    "name":"Murray County",
    "state":"MN"
  },
  {
    "id":38081,
    "rate":14.205391527599486,
    "name":"Sargent County",
    "state":"ND"
  },
  {
    "id":27099,
    "rate":3.8621530334967114,
    "name":"Mower County",
    "state":"MN"
  },
  {
    "id":37145,
    "rate":117.77278644171622,
    "name":"Person County",
    "state":"NC"
  },
  {
    "id":13023,
    "rate":55.763355819182756,
    "name":"Bleckley County",
    "state":"GA"
  },
  {
    "id":16053,
    "rate":1.9764601376859872,
    "name":"Jerome County",
    "state":"ID"
  },
  {
    "id":27085,
    "rate":4.42059370747827,
    "name":"McLeod County",
    "state":"MN"
  },
  {
    "id":27083,
    "rate":1.379108439378562,
    "name":"Lyon County",
    "state":"MN"
  },
  {
    "id":48075,
    "rate":43.193348365276215,
    "name":"Childress County",
    "state":"TX"
  },
  {
    "id":30077,
    "rate":19.594918842625265,
    "name":"Powell County",
    "state":"MT"
  },
  {
    "id":29213,
    "rate":103.8196826354076,
    "name":"Taney County",
    "state":"MO"
  },
  {
    "id":22051,
    "rate":1280.399562791236,
    "name":"Jefferson Parish",
    "state":"LA"
  },
  {
    "id":27077,
    "rate":5.544354838709677,
    "name":"Lake of the Woods County",
    "state":"MN"
  },
  {
    "id":26029,
    "rate":36.80671300741196,
    "name":"Charlevoix County",
    "state":"MI"
  },
  {
    "id":29145,
    "rate":1337.96336115673,
    "name":"Newton County",
    "state":"MO"
  },
  {
    "id":27063,
    "rate":4.694115362206254,
    "name":"Jackson County",
    "state":"MN"
  },
  {
    "id":17025,
    "rate":82.63525813733342,
    "name":"Clay County",
    "state":"IL"
  },
  {
    "id":27061,
    "rate":0.25391142932909044,
    "name":"Itasca County",
    "state":"MN"
  },
  {
    "id":18033,
    "rate":77.5550822387883,
    "name":"De Kalb County",
    "state":"IN"
  },
  {
    "id":27053,
    "rate":346.7194018840517,
    "name":"Hennepin County",
    "state":"MN"
  },
  {
    "id":27049,
    "rate":0.3209535921367448,
    "name":"Goodhue County",
    "state":"MN"
  },
  {
    "id":31107,
    "rate":26.091619069821654,
    "name":"Knox County",
    "state":"NE"
  },
  {
    "id":5125,
    "rate":86.67505462621342,
    "name":"Saline County",
    "state":"AR"
  },
  {
    "id":27047,
    "rate":0.4186525827643952,
    "name":"Freeborn County",
    "state":"MN"
  },
  {
    "id":56021,
    "rate":59.43193918755074,
    "name":"Laramie County",
    "state":"WY"
  },
  {
    "id":27043,
    "rate":2.2396746371222216,
    "name":"Faribault County",
    "state":"MN"
  },
  {
    "id":36109,
    "rate":18.782267769108344,
    "name":"Tompkins County",
    "state":"NY"
  },
  {
    "id":27037,
    "rate":160.6210577509399,
    "name":"Dakota County",
    "state":"MN"
  },
  {
    "id":1107,
    "rate":85.68031430934656,
    "name":"Pickens County",
    "state":"AL"
  },
  {
    "id":27033,
    "rate":5.333104395604396,
    "name":"Cottonwood County",
    "state":"MN"
  },
  {
    "id":48401,
    "rate":20.854815851317646,
    "name":"Rusk County",
    "state":"TX"
  },
  {
    "id":28119,
    "rate":8.576006152268649,
    "name":"Quitman County",
    "state":"MS"
  },
  {
    "id":48201,
    "rate":428.55180785632535,
    "name":"Harris County",
    "state":"TX"
  },
  {
    "id":48185,
    "rate":68.8575812004191,
    "name":"Grimes County",
    "state":"TX"
  },
  {
    "id":27013,
    "rate":101.37107692307693,
    "name":"Blue Earth County",
    "state":"MN"
  },
  {
    "id":48213,
    "rate":62.99460363304704,
    "name":"Henderson County",
    "state":"TX"
  },
  {
    "id":5001,
    "rate":126.68158365799722,
    "name":"Arkansas County",
    "state":"AR"
  },
  {
    "id":27011,
    "rate":14.989351403678603,
    "name":"Big Stone County",
    "state":"MN"
  },
  {
    "id":27007,
    "rate":0.8529873344974692,
    "name":"Beltrami County",
    "state":"MN"
  },
  {
    "id":51165,
    "rate":21.286074313408722,
    "name":"Rockingham County",
    "state":"VA"
  },
  {
    "id":47139,
    "rate":22.206705592006262,
    "name":"Polk County",
    "state":"TN"
  },
  {
    "id":36055,
    "rate":833.6502614276054,
    "name":"Monroe County",
    "state":"NY"
  },
  {
    "id":13081,
    "rate":1155.9724394470984,
    "name":"Crisp County",
    "state":"GA"
  },
  {
    "id":27005,
    "rate":4.540250772306015,
    "name":"Becker County",
    "state":"MN"
  },
  {
    "id":39079,
    "rate":43.7577951510358,
    "name":"Jackson County",
    "state":"OH"
  },
  {
    "id":26165,
    "rate":52.07338774007484,
    "name":"Wexford County",
    "state":"MI"
  },
  {
    "id":26161,
    "rate":535.4286210400761,
    "name":"Washtenaw County",
    "state":"MI"
  },
  {
    "id":29215,
    "rate":32.36445549168869,
    "name":"Texas County",
    "state":"MO"
  },
  {
    "id":26159,
    "rate":36.6082392026578,
    "name":"Van Buren County",
    "state":"MI"
  },
  {
    "id":45073,
    "rate":52.80425834305403,
    "name":"Oconee County",
    "state":"SC"
  },
  {
    "id":26155,
    "rate":62.535209235209244,
    "name":"Shiawassee County",
    "state":"MI"
  },
  {
    "id":37109,
    "rate":70.49029415116559,
    "name":"Lincoln County",
    "state":"NC"
  },
  {
    "id":17079,
    "rate":9.734549979261718,
    "name":"Jasper County",
    "state":"IL"
  },
  {
    "id":26147,
    "rate":373.3219775292094,
    "name":"St. Clair County",
    "state":"MI"
  },
  {
    "id":51730,
    "rate":19.78580532844219,
    "name":"Petersburg City",
    "state":"VA"
  },
  {
    "id":19035,
    "rate":78.18212169268007,
    "name":"Cherokee County",
    "state":"IA"
  },
  {
    "id":26139,
    "rate":28.477959132170984,
    "name":"Ottawa County",
    "state":"MI"
  },
  {
    "id":17075,
    "rate":83.37259722079963,
    "name":"Iroquois County",
    "state":"IL"
  },
  {
    "id":26133,
    "rate":56.42672969488614,
    "name":"Osceola County",
    "state":"MI"
  },
  {
    "id":26129,
    "rate":194.3243873978996,
    "name":"Ogemaw County",
    "state":"MI"
  },
  {
    "id":47025,
    "rate":85.65329801992688,
    "name":"Claiborne County",
    "state":"TN"
  },
  {
    "id":25025,
    "rate":1613.035780996499,
    "name":"Suffolk County",
    "state":"MA"
  },
  {
    "id":26127,
    "rate":87.7539129441334,
    "name":"Oceana County",
    "state":"MI"
  },
  {
    "id":31139,
    "rate":1911.649025069638,
    "name":"Pierce County",
    "state":"NE"
  },
  {
    "id":26125,
    "rate":976.2305971255885,
    "name":"Oakland County",
    "state":"MI"
  },
  {
    "id":26115,
    "rate":95.59606205250584,
    "name":"Monroe County",
    "state":"MI"
  },
  {
    "id":51177,
    "rate":70.17576127543859,
    "name":"Spotsylvania County",
    "state":"VA"
  },
  {
    "id":17021,
    "rate":33.753875575903336,
    "name":"Christian County",
    "state":"IL"
  },
  {
    "id":17181,
    "rate":34.724364791288565,
    "name":"Union County",
    "state":"IL"
  },
  {
    "id":21059,
    "rate":3003.9435365866143,
    "name":"Daviess County",
    "state":"KY"
  },
  {
    "id":18061,
    "rate":23.137420394383483,
    "name":"Harrison County",
    "state":"IN"
  },
  {
    "id":31121,
    "rate":59.38309606258818,
    "name":"Merrick County",
    "state":"NE"
  },
  {
    "id":26109,
    "rate":11.718039413845377,
    "name":"Menominee County",
    "state":"MI"
  },
  {
    "id":26107,
    "rate":32.01255692010487,
    "name":"Mecosta County",
    "state":"MI"
  },
  {
    "id":48171,
    "rate":104.66242544731608,
    "name":"Gillespie County",
    "state":"TX"
  },
  {
    "id":36029,
    "rate":872.2781771453106,
    "name":"Erie County",
    "state":"NY"
  },
  {
    "id":26103,
    "rate":60.40876235432954,
    "name":"Marquette County",
    "state":"MI"
  },
  {
    "id":26093,
    "rate":39.71920027539027,
    "name":"Livingston County",
    "state":"MI"
  },
  {
    "id":26091,
    "rate":57.259304084720114,
    "name":"Lenawee County",
    "state":"MI"
  },
  {
    "id":26085,
    "rate":10.002615974886641,
    "name":"Lake County",
    "state":"MI"
  },
  {
    "id":30099,
    "rate":4.919301712779974,
    "name":"Teton County",
    "state":"MT"
  },
  {
    "id":26079,
    "rate":3210.507551808922,
    "name":"Kalkaska County",
    "state":"MI"
  },
  {
    "id":26073,
    "rate":63.43122803038892,
    "name":"Isabella County",
    "state":"MI"
  },
  {
    "id":26071,
    "rate":54.973243569825655,
    "name":"Iron County",
    "state":"MI"
  },
  {
    "id":26061,
    "rate":12.952238805970149,
    "name":"Houghton County",
    "state":"MI"
  },
  {
    "id":39165,
    "rate":311.71125599003955,
    "name":"Warren County",
    "state":"OH"
  },
  {
    "id":26057,
    "rate":58.53108419975732,
    "name":"Gratiot County",
    "state":"MI"
  },
  {
    "id":18031,
    "rate":84.22075681478358,
    "name":"Decatur County",
    "state":"IN"
  },
  {
    "id":29173,
    "rate":21.698573940222698,
    "name":"Ralls County",
    "state":"MO"
  },
  {
    "id":40073,
    "rate":88.00146705788212,
    "name":"Kingfisher County",
    "state":"OK"
  },
  {
    "id":26055,
    "rate":120.89444413235219,
    "name":"Grand Traverse County",
    "state":"MI"
  },
  {
    "id":22011,
    "rate":34.85353340321068,
    "name":"Beauregard Parish",
    "state":"LA"
  },
  {
    "id":26077,
    "rate":1239.7473139361587,
    "name":"Kalamazoo County",
    "state":"MI"
  },
  {
    "id":37033,
    "rate":1.2729154984255704,
    "name":"Caswell County",
    "state":"NC"
  },
  {
    "id":26051,
    "rate":23.41108671789243,
    "name":"Gladwin County",
    "state":"MI"
  },
  {
    "id":26043,
    "rate":106.5262315083117,
    "name":"Dickinson County",
    "state":"MI"
  },
  {
    "id":39037,
    "rate":57.92252314021254,
    "name":"Darke County",
    "state":"OH"
  },
  {
    "id":26039,
    "rate":170.32534858777262,
    "name":"Crawford County",
    "state":"MI"
  },
  {
    "id":34041,
    "rate":200.42947466294729,
    "name":"Warren County",
    "state":"NJ"
  },
  {
    "id":26037,
    "rate":129.9671577735325,
    "name":"Clinton County",
    "state":"MI"
  },
  {
    "id":26035,
    "rate":49.59779077322935,
    "name":"Clare County",
    "state":"MI"
  },
  {
    "id":17141,
    "rate":50.02517080186983,
    "name":"Ogle County",
    "state":"IL"
  },
  {
    "id":26163,
    "rate":377.15613826648087,
    "name":"Wayne County",
    "state":"MI"
  },
  {
    "id":26031,
    "rate":153.97765189726078,
    "name":"Cheboygan County",
    "state":"MI"
  },
  {
    "id":26025,
    "rate":61.65998812704066,
    "name":"Calhoun County",
    "state":"MI"
  },
  {
    "id":13037,
    "rate":93.1144263303599,
    "name":"Calhoun County",
    "state":"GA"
  },
  {
    "id":26017,
    "rate":236.75899294012189,
    "name":"Bay County",
    "state":"MI"
  },
  {
    "id":19097,
    "rate":76.72659860836002,
    "name":"Jackson County",
    "state":"IA"
  },
  {
    "id":26013,
    "rate":64.31771192281185,
    "name":"Baraga County",
    "state":"MI"
  },
  {
    "id":30013,
    "rate":156.85953647648734,
    "name":"Cascade County",
    "state":"MT"
  },
  {
    "id":26009,
    "rate":35.031034630366854,
    "name":"Antrim County",
    "state":"MI"
  },
  {
    "id":26005,
    "rate":67.37446287710272,
    "name":"Allegan County",
    "state":"MI"
  },
  {
    "id":36075,
    "rate":116.98850839265461,
    "name":"Oswego County",
    "state":"NY"
  },
  {
    "id":26003,
    "rate":18.40320202232989,
    "name":"Alger County",
    "state":"MI"
  },
  {
    "id":26001,
    "rate":1.1652042645532596,
    "name":"Alcona County",
    "state":"MI"
  },
  {
    "id":55079,
    "rate":530.8628516292462,
    "name":"Milwaukee County",
    "state":"WI"
  },
  {
    "id":25027,
    "rate":136.53859846948333,
    "name":"Worcester County",
    "state":"MA"
  },
  {
    "id":25023,
    "rate":50.74020790420698,
    "name":"Plymouth County",
    "state":"MA"
  },
  {
    "id":1073,
    "rate":1029.2719692744,
    "name":"Jefferson County",
    "state":"AL"
  },
  {
    "id":19065,
    "rate":5.00192363181687,
    "name":"Fayette County",
    "state":"IA"
  },
  {
    "id":27131,
    "rate":0.7799211142610626,
    "name":"Rice County",
    "state":"MN"
  },
  {
    "id":25021,
    "rate":298.40253153062184,
    "name":"Norfolk County",
    "state":"MA"
  },
  {
    "id":6061,
    "rate":54.320451741062236,
    "name":"Placer County",
    "state":"CA"
  },
  {
    "id":25017,
    "rate":359.91808164176894,
    "name":"Middlesex County",
    "state":"MA"
  },
  {
    "id":37123,
    "rate":28.549046568006663,
    "name":"Montgomery County",
    "state":"NC"
  },
  {
    "id":25013,
    "rate":257.39805246721,
    "name":"Hampden County",
    "state":"MA"
  },
  {
    "id":12049,
    "rate":43.63828700663893,
    "name":"Hardee County",
    "state":"FL"
  },
  {
    "id":25009,
    "rate":153.84683183506576,
    "name":"Essex County",
    "state":"MA"
  },
  {
    "id":41019,
    "rate":42.12855568629649,
    "name":"Douglas County",
    "state":"OR"
  },
  {
    "id":25005,
    "rate":588.274672500977,
    "name":"Bristol County",
    "state":"MA"
  },
  {
    "id":48109,
    "rate":43.88189318280504,
    "name":"Culberson County",
    "state":"TX"
  },
  {
    "id":47189,
    "rate":86.44825675130984,
    "name":"Wilson County",
    "state":"TN"
  },
  {
    "id":21157,
    "rate":972.9397467058973,
    "name":"Marshall County",
    "state":"KY"
  },
  {
    "id":24047,
    "rate":92.36217725052336,
    "name":"Worcester County",
    "state":"MD"
  },
  {
    "id":47051,
    "rate":34.48081402476402,
    "name":"Franklin County",
    "state":"TN"
  },
  {
    "id":24041,
    "rate":570.7288108874994,
    "name":"Talbot County",
    "state":"MD"
  },
  {
    "id":55099,
    "rate":5.339581831290555,
    "name":"Price County",
    "state":"WI"
  },
  {
    "id":24039,
    "rate":21.40481015562268,
    "name":"Somerset County",
    "state":"MD"
  },
  {
    "id":13183,
    "rate":1.6595507703731203,
    "name":"Long County",
    "state":"GA"
  },
  {
    "id":24037,
    "rate":45.9347333461775,
    "name":"St. Mary's County",
    "state":"MD"
  },
  {
    "id":28087,
    "rate":123.5619791753995,
    "name":"Lowndes County",
    "state":"MS"
  },
  {
    "id":42085,
    "rate":152.9486725357895,
    "name":"Mercer County",
    "state":"PA"
  },
  {
    "id":42047,
    "rate":110.0468013787433,
    "name":"Elk County",
    "state":"PA"
  },
  {
    "id":16071,
    "rate":7.5325597916173335,
    "name":"Oneida County",
    "state":"ID"
  },
  {
    "id":24043,
    "rate":263.02577063863447,
    "name":"Washington County",
    "state":"MD"
  },
  {
    "id":4027,
    "rate":511.5062986987306,
    "name":"Yuma County",
    "state":"AZ"
  },
  {
    "id":24031,
    "rate":712.8124171052132,
    "name":"Montgomery County",
    "state":"MD"
  },
  {
    "id":30007,
    "rate":17.353349531412704,
    "name":"Broadwater County",
    "state":"MT"
  },
  {
    "id":40101,
    "rate":165.06564768602541,
    "name":"Muskogee County",
    "state":"OK"
  },
  {
    "id":24029,
    "rate":190.2325116255813,
    "name":"Kent County",
    "state":"MD"
  },
  {
    "id":18153,
    "rate":88.06991096245348,
    "name":"Sullivan County",
    "state":"IN"
  },
  {
    "id":24027,
    "rate":428.61267664380875,
    "name":"Howard County",
    "state":"MD"
  },
  {
    "id":16067,
    "rate":25.191398277664398,
    "name":"Minidoka County",
    "state":"ID"
  },
  {
    "id":24035,
    "rate":59.89561457689931,
    "name":"Queen Anne's County",
    "state":"MD"
  },
  {
    "id":51830,
    "rate":276.18115892454,
    "name":"Williamsburg City",
    "state":"VA"
  },
  {
    "id":22073,
    "rate":189.78558094625026,
    "name":"Ouachita Parish",
    "state":"LA"
  },
  {
    "id":24023,
    "rate":95.78074311895924,
    "name":"Garrett County",
    "state":"MD"
  },
  {
    "id":20063,
    "rate":53.20102903344358,
    "name":"Gove County",
    "state":"KS"
  },
  {
    "id":24019,
    "rate":82.87613888204878,
    "name":"Dorchester County",
    "state":"MD"
  },
  {
    "id":51183,
    "rate":20.93878234653714,
    "name":"Sussex County",
    "state":"VA"
  },
  {
    "id":24017,
    "rate":104.34409215404109,
    "name":"Charles County",
    "state":"MD"
  },
  {
    "id":20149,
    "rate":47.868104335376486,
    "name":"Pottawatomie County",
    "state":"KS"
  },
  {
    "id":24011,
    "rate":89.36802746107635,
    "name":"Caroline County",
    "state":"MD"
  },
  {
    "id":26149,
    "rate":46.381563823848154,
    "name":"St Joseph County",
    "state":"MI"
  },
  {
    "id":51047,
    "rate":37.683965917893104,
    "name":"Culpeper County",
    "state":"VA"
  },
  {
    "id":24009,
    "rate":33.57379462642622,
    "name":"Calvert County",
    "state":"MD"
  },
  {
    "id":23029,
    "rate":63.6927812836694,
    "name":"Washington County",
    "state":"ME"
  },
  {
    "id":51093,
    "rate":66.08592425098925,
    "name":"Isle of Wight County",
    "state":"VA"
  },
  {
    "id":47057,
    "rate":37.00220848056538,
    "name":"Grainger County",
    "state":"TN"
  },
  {
    "id":29101,
    "rate":70.68451615274356,
    "name":"Johnson County",
    "state":"MO"
  },
  {
    "id":35001,
    "rate":588.0917243070178,
    "name":"Bernalillo County",
    "state":"NM"
  },
  {
    "id":28103,
    "rate":19.273378076062635,
    "name":"Noxubee County",
    "state":"MS"
  },
  {
    "id":23027,
    "rate":6.582066908380262,
    "name":"Waldo County",
    "state":"ME"
  },
  {
    "id":48289,
    "rate":2.797828550975362,
    "name":"Leon County",
    "state":"TX"
  },
  {
    "id":18107,
    "rate":97.47814250562796,
    "name":"Montgomery County",
    "state":"IN"
  },
  {
    "id":23025,
    "rate":14.87970055374404,
    "name":"Somerset County",
    "state":"ME"
  },
  {
    "id":6059,
    "rate":417.7222156236497,
    "name":"Orange County",
    "state":"CA"
  },
  {
    "id":23023,
    "rate":32.83932334681324,
    "name":"Sagadahoc County",
    "state":"ME"
  },
  {
    "id":23021,
    "rate":19.17902665121668,
    "name":"Piscataquis County",
    "state":"ME"
  },
  {
    "id":23019,
    "rate":18.38931854282217,
    "name":"Penobscot County",
    "state":"ME"
  },
  {
    "id":6063,
    "rate":14.651776019854198,
    "name":"Plumas County",
    "state":"CA"
  },
  {
    "id":23017,
    "rate":79.0237581744817,
    "name":"Oxford County",
    "state":"ME"
  },
  {
    "id":23013,
    "rate":8.35412037972127,
    "name":"Knox County",
    "state":"ME"
  },
  {
    "id":42075,
    "rate":47.30745969228954,
    "name":"Lebanon County",
    "state":"PA"
  },
  {
    "id":27109,
    "rate":1315.516934409742,
    "name":"Olmsted County",
    "state":"MN"
  },
  {
    "id":47147,
    "rate":73.4514905798948,
    "name":"Robertson County",
    "state":"TN"
  },
  {
    "id":42067,
    "rate":63.35099337748344,
    "name":"Juniata County",
    "state":"PA"
  },
  {
    "id":20069,
    "rate":1.8985652318985655,
    "name":"Gray County",
    "state":"KS"
  },
  {
    "id":23011,
    "rate":76.5683549092823,
    "name":"Kennebec County",
    "state":"ME"
  },
  {
    "id":37041,
    "rate":94.63218781898604,
    "name":"Chowan County",
    "state":"NC"
  },
  {
    "id":22059,
    "rate":23.202988289137163,
    "name":"La Salle Parish",
    "state":"LA"
  },
  {
    "id":23003,
    "rate":74.53197444306231,
    "name":"Aroostook County",
    "state":"ME"
  },
  {
    "id":29135,
    "rate":12.192585029672644,
    "name":"Moniteau County",
    "state":"MO"
  },
  {
    "id":22121,
    "rate":19.038141931194946,
    "name":"West Baton Rouge Parish",
    "state":"LA"
  },
  {
    "id":13065,
    "rate":4.7535368577810875,
    "name":"Clinch County",
    "state":"GA"
  },
  {
    "id":22119,
    "rate":72.17961556309993,
    "name":"Webster Parish",
    "state":"LA"
  },
  {
    "id":22117,
    "rate":84.04123092748155,
    "name":"Washington Parish",
    "state":"LA"
  },
  {
    "id":51115,
    "rate":22.039009079699586,
    "name":"Mathews County",
    "state":"VA"
  },
  {
    "id":22115,
    "rate":54.92967365623153,
    "name":"Vernon Parish",
    "state":"LA"
  },
  {
    "id":22111,
    "rate":29.73330374972265,
    "name":"Union Parish",
    "state":"LA"
  },
  {
    "id":22109,
    "rate":222.87529870850534,
    "name":"Terrebonne Parish",
    "state":"LA"
  },
  {
    "id":39129,
    "rate":36.030064245909216,
    "name":"Pickaway County",
    "state":"OH"
  },
  {
    "id":31025,
    "rate":6.905679875988711,
    "name":"Cass County",
    "state":"NE"
  },
  {
    "id":22103,
    "rate":315.33382634345213,
    "name":"St. Tammany Parish",
    "state":"LA"
  },
  {
    "id":12005,
    "rate":183.56274056071692,
    "name":"Bay County",
    "state":"FL"
  },
  {
    "id":22101,
    "rate":102.64208048425063,
    "name":"St. Mary Parish",
    "state":"LA"
  },
  {
    "id":22097,
    "rate":101.0107447025143,
    "name":"St. Landry Parish",
    "state":"LA"
  },
  {
    "id":22089,
    "rate":22.57909491389668,
    "name":"St. Charles Parish",
    "state":"LA"
  },
  {
    "id":13139,
    "rate":518.9317282963412,
    "name":"Hall County",
    "state":"GA"
  },
  {
    "id":22087,
    "rate":46.293074365029646,
    "name":"St Bernard Parish",
    "state":"LA"
  },
  {
    "id":49053,
    "rate":36.26127776663924,
    "name":"Washington County",
    "state":"UT"
  },
  {
    "id":22021,
    "rate":45.80099999999999,
    "name":"Caldwell Parish",
    "state":"LA"
  },
  {
    "id":22085,
    "rate":7.790668970624535,
    "name":"Sabine Parish",
    "state":"LA"
  },
  {
    "id":22083,
    "rate":29.98040433972184,
    "name":"Richland Parish",
    "state":"LA"
  },
  {
    "id":22081,
    "rate":34.30486318821313,
    "name":"Red River Parish",
    "state":"LA"
  },
  {
    "id":24003,
    "rate":347.74284339449616,
    "name":"Anne Arundel County",
    "state":"MD"
  },
  {
    "id":29183,
    "rate":340.3685556317804,
    "name":"St. Charles County",
    "state":"MO"
  },
  {
    "id":22077,
    "rate":83.43622033375898,
    "name":"Pointe Coupee Parish",
    "state":"LA"
  },
  {
    "id":28125,
    "rate":58.70482556925004,
    "name":"Sharkey County",
    "state":"MS"
  },
  {
    "id":28131,
    "rate":66.69732395146545,
    "name":"Stone County",
    "state":"MS"
  },
  {
    "id":13253,
    "rate":91.73079080201909,
    "name":"Seminole County",
    "state":"GA"
  },
  {
    "id":22069,
    "rate":69.97389827931376,
    "name":"Natchitoches Parish",
    "state":"LA"
  },
  {
    "id":42087,
    "rate":53.00070469153729,
    "name":"Mifflin County",
    "state":"PA"
  },
  {
    "id":22065,
    "rate":13.09496473675578,
    "name":"Madison Parish",
    "state":"LA"
  },
  {
    "id":51191,
    "rate":2246.484847384379,
    "name":"Washington County",
    "state":"VA"
  },
  {
    "id":12009,
    "rate":438.1791191394803,
    "name":"Brevard County",
    "state":"FL"
  },
  {
    "id":22061,
    "rate":119.0478513553642,
    "name":"Lincoln Parish",
    "state":"LA"
  },
  {
    "id":22053,
    "rate":72.25675116893032,
    "name":"Jefferson Davis Parish",
    "state":"LA"
  },
  {
    "id":39135,
    "rate":49.77252655448143,
    "name":"Preble County",
    "state":"OH"
  },
  {
    "id":22049,
    "rate":7.410692288741069,
    "name":"Jackson Parish",
    "state":"LA"
  },
  {
    "id":22043,
    "rate":9.080264569181265,
    "name":"Grant Parish",
    "state":"LA"
  },
  {
    "id":22037,
    "rate":38.46619929894843,
    "name":"East Feliciana Parish",
    "state":"LA"
  },
  {
    "id":27003,
    "rate":262.19895755239014,
    "name":"Anoka County",
    "state":"MN"
  },
  {
    "id":5011,
    "rate":154.41848114710567,
    "name":"Bradley County",
    "state":"AR"
  },
  {
    "id":22035,
    "rate":1991.328846661388,
    "name":"East Carroll Parish",
    "state":"LA"
  },
  {
    "id":22093,
    "rate":31.4909208221956,
    "name":"St. James Parish",
    "state":"LA"
  },
  {
    "id":17081,
    "rate":102.9509424218952,
    "name":"Jefferson County",
    "state":"IL"
  },
  {
    "id":17203,
    "rate":27.402183686576763,
    "name":"Woodford County",
    "state":"IL"
  },
  {
    "id":22029,
    "rate":16.744106426684926,
    "name":"Concordia Parish",
    "state":"LA"
  },
  {
    "id":22027,
    "rate":36.425478915841296,
    "name":"Claiborne Parish",
    "state":"LA"
  },
  {
    "id":22023,
    "rate":10.40163068096029,
    "name":"Cameron Parish",
    "state":"LA"
  },
  {
    "id":22017,
    "rate":343.98876142510807,
    "name":"Caddo Parish",
    "state":"LA"
  },
  {
    "id":21163,
    "rate":50.12877442273535,
    "name":"Meade County",
    "state":"KY"
  },
  {
    "id":28053,
    "rate":191.95156385751517,
    "name":"Humphreys County",
    "state":"MS"
  },
  {
    "id":4009,
    "rate":18.745161726891325,
    "name":"Graham County",
    "state":"AZ"
  },
  {
    "id":22015,
    "rate":521.018338709547,
    "name":"Bossier Parish",
    "state":"LA"
  },
  {
    "id":39109,
    "rate":38.782268857037565,
    "name":"Miami County",
    "state":"OH"
  },
  {
    "id":13289,
    "rate":40.312904364192455,
    "name":"Twiggs County",
    "state":"GA"
  },
  {
    "id":17165,
    "rate":142.0699731796165,
    "name":"Saline County",
    "state":"IL"
  },
  {
    "id":18035,
    "rate":437.1535005839272,
    "name":"Delaware County",
    "state":"IN"
  },
  {
    "id":22007,
    "rate":30.78966757682138,
    "name":"Assumption Parish",
    "state":"LA"
  },
  {
    "id":22003,
    "rate":40.490375980947185,
    "name":"Allen Parish",
    "state":"LA"
  },
  {
    "id":49011,
    "rate":78.75684296464136,
    "name":"Davis County",
    "state":"UT"
  },
  {
    "id":18099,
    "rate":38.362147793726756,
    "name":"Marshall County",
    "state":"IN"
  },
  {
    "id":22095,
    "rate":91.75653028847228,
    "name":"St. John the Baptist Parish",
    "state":"LA"
  },
  {
    "id":21237,
    "rate":216.43016138007792,
    "name":"Wolfe County",
    "state":"KY"
  },
  {
    "id":1035,
    "rate":90.62206843521722,
    "name":"Conecuh County",
    "state":"AL"
  },
  {
    "id":22125,
    "rate":34.05204220337886,
    "name":"West Feliciana Parish",
    "state":"LA"
  },
  {
    "id":21229,
    "rate":29.79969702070358,
    "name":"Washington County",
    "state":"KY"
  },
  {
    "id":55065,
    "rate":31.28378378378378,
    "name":"Lafayette County",
    "state":"WI"
  },
  {
    "id":31087,
    "rate":11.189732917100244,
    "name":"Hitchcock County",
    "state":"NE"
  },
  {
    "id":21217,
    "rate":165.22695516787098,
    "name":"Taylor County",
    "state":"KY"
  },
  {
    "id":28095,
    "rate":74.0815877728297,
    "name":"Monroe County",
    "state":"MS"
  },
  {
    "id":21213,
    "rate":33.63631186286234,
    "name":"Simpson County",
    "state":"KY"
  },
  {
    "id":21209,
    "rate":44.03952843273234,
    "name":"Scott County",
    "state":"KY"
  },
  {
    "id":42091,
    "rate":485.7090257380624,
    "name":"Montgomery County",
    "state":"PA"
  },
  {
    "id":21205,
    "rate":967.6501238575207,
    "name":"Rowan County",
    "state":"KY"
  },
  {
    "id":21203,
    "rate":1946.536996894956,
    "name":"Rockcastle County",
    "state":"KY"
  },
  {
    "id":13083,
    "rate":0.7117394719352306,
    "name":"Dade County",
    "state":"GA"
  },
  {
    "id":21197,
    "rate":65.12605042016808,
    "name":"Powell County",
    "state":"KY"
  },
  {
    "id":48217,
    "rate":29.553960522942823,
    "name":"Hill County",
    "state":"TX"
  },
  {
    "id":28017,
    "rate":87.86108238538438,
    "name":"Chickasaw County",
    "state":"MS"
  },
  {
    "id":39087,
    "rate":91.47356218200554,
    "name":"Lawrence County",
    "state":"OH"
  },
  {
    "id":21191,
    "rate":39.813019866639166,
    "name":"Pendleton County",
    "state":"KY"
  },
  {
    "id":21177,
    "rate":100.33483210561558,
    "name":"Muhlenberg County",
    "state":"KY"
  },
  {
    "id":22047,
    "rate":18.879460269865067,
    "name":"Iberville Parish",
    "state":"LA"
  },
  {
    "id":46057,
    "rate":2.612354822420468,
    "name":"Hamlin County",
    "state":"SD"
  },
  {
    "id":21171,
    "rate":106.99235657058667,
    "name":"Monroe County",
    "state":"KY"
  },
  {
    "id":48437,
    "rate":3.648820096422228,
    "name":"Swisher County",
    "state":"TX"
  },
  {
    "id":21167,
    "rate":35.67399147261397,
    "name":"Mercer County",
    "state":"KY"
  },
  {
    "id":17099,
    "rate":164.93320458531923,
    "name":"La Salle County",
    "state":"IL"
  },
  {
    "id":21165,
    "rate":145.21856192587902,
    "name":"Menifee County",
    "state":"KY"
  },
  {
    "id":13173,
    "rate":2.7613941018766752,
    "name":"Lanier County",
    "state":"GA"
  },
  {
    "id":17031,
    "rate":406.18608500211974,
    "name":"Cook County",
    "state":"IL"
  },
  {
    "id":21161,
    "rate":3258.5718375994957,
    "name":"Mason County",
    "state":"KY"
  },
  {
    "id":48183,
    "rate":161.14861346178856,
    "name":"Gregg County",
    "state":"TX"
  },
  {
    "id":8055,
    "rate":37.374013357619916,
    "name":"Huerfano County",
    "state":"CO"
  },
  {
    "id":21147,
    "rate":56.61768782922097,
    "name":"McCreary County",
    "state":"KY"
  },
  {
    "id":28111,
    "rate":27.7864238410596,
    "name":"Perry County",
    "state":"MS"
  },
  {
    "id":21143,
    "rate":17.653194263363755,
    "name":"Lyon County",
    "state":"KY"
  },
  {
    "id":21141,
    "rate":30.663221360895783,
    "name":"Logan County",
    "state":"KY"
  },
  {
    "id":1113,
    "rate":31.694956353055293,
    "name":"Russell County",
    "state":"AL"
  },
  {
    "id":21137,
    "rate":56.22951491314324,
    "name":"Lincoln County",
    "state":"KY"
  },
  {
    "id":18081,
    "rate":421.7529011855507,
    "name":"Johnson County",
    "state":"IN"
  },
  {
    "id":16063,
    "rate":5.384322678843227,
    "name":"Lincoln County",
    "state":"ID"
  },
  {
    "id":21135,
    "rate":50.23045802629677,
    "name":"Lewis County",
    "state":"KY"
  },
  {
    "id":5019,
    "rate":54.949171851722035,
    "name":"Clark County",
    "state":"AR"
  },
  {
    "id":13267,
    "rate":18.985180794309425,
    "name":"Tattnall County",
    "state":"GA"
  },
  {
    "id":21133,
    "rate":69.41493360060133,
    "name":"Letcher County",
    "state":"KY"
  },
  {
    "id":26067,
    "rate":41.45721171904344,
    "name":"Ionia County",
    "state":"MI"
  },
  {
    "id":18075,
    "rate":38.65091249415068,
    "name":"Jay County",
    "state":"IN"
  },
  {
    "id":21131,
    "rate":20.527638190954775,
    "name":"Leslie County",
    "state":"KY"
  },
  {
    "id":48481,
    "rate":40.29674095316792,
    "name":"Wharton County",
    "state":"TX"
  },
  {
    "id":37101,
    "rate":72.2448582847799,
    "name":"Johnston County",
    "state":"NC"
  },
  {
    "id":24510,
    "rate":437.45583112609194,
    "name":"Baltimore City",
    "state":"MD"
  },
  {
    "id":51187,
    "rate":49.49714195400783,
    "name":"Warren County",
    "state":"VA"
  },
  {
    "id":8103,
    "rate":60.78021492713087,
    "name":"Rio Grande County",
    "state":"CO"
  },
  {
    "id":21127,
    "rate":72.82807859986102,
    "name":"Lawrence County",
    "state":"KY"
  },
  {
    "id":19057,
    "rate":55.38973454843434,
    "name":"Des Moines County",
    "state":"IA"
  },
  {
    "id":26027,
    "rate":34.97829177392707,
    "name":"Cass County",
    "state":"MI"
  },
  {
    "id":17055,
    "rate":28.560533841754044,
    "name":"Franklin County",
    "state":"IL"
  },
  {
    "id":21125,
    "rate":105.60289996140096,
    "name":"Laurel County",
    "state":"KY"
  },
  {
    "id":37095,
    "rate":44.59393516904845,
    "name":"Hyde County",
    "state":"NC"
  },
  {
    "id":17017,
    "rate":72.51527343167935,
    "name":"Cass County",
    "state":"IL"
  },
  {
    "id":21123,
    "rate":26.484913028044016,
    "name":"Larue County",
    "state":"KY"
  },
  {
    "id":33007,
    "rate":38.99928073302686,
    "name":"Coos County",
    "state":"NH"
  },
  {
    "id":21119,
    "rate":109.61894697581899,
    "name":"Knott County",
    "state":"KY"
  },
  {
    "id":20029,
    "rate":20.416311754684838,
    "name":"Cloud County",
    "state":"KS"
  },
  {
    "id":21115,
    "rate":136.7875293615204,
    "name":"Johnson County",
    "state":"KY"
  },
  {
    "id":21175,
    "rate":8.559347181008901,
    "name":"Morgan County",
    "state":"KY"
  },
  {
    "id":18179,
    "rate":128.11619336657273,
    "name":"Wells County",
    "state":"IN"
  },
  {
    "id":21107,
    "rate":412.5422894094473,
    "name":"Hopkins County",
    "state":"KY"
  },
  {
    "id":21101,
    "rate":73.41677069433086,
    "name":"Henderson County",
    "state":"KY"
  },
  {
    "id":18077,
    "rate":50.46391435427306,
    "name":"Jefferson County",
    "state":"IN"
  },
  {
    "id":21097,
    "rate":138.9334122203098,
    "name":"Harrison County",
    "state":"KY"
  },
  {
    "id":17145,
    "rate":106.83507023108294,
    "name":"Perry County",
    "state":"IL"
  },
  {
    "id":21095,
    "rate":6.597707576181158,
    "name":"Harlan County",
    "state":"KY"
  },
  {
    "id":20061,
    "rate":35.3064231771176,
    "name":"Geary County",
    "state":"KS"
  },
  {
    "id":21093,
    "rate":151.15112281881702,
    "name":"Hardin County",
    "state":"KY"
  },
  {
    "id":21091,
    "rate":21.110598546880404,
    "name":"Hancock County",
    "state":"KY"
  },
  {
    "id":48203,
    "rate":76.33270911360799,
    "name":"Harrison County",
    "state":"TX"
  },
  {
    "id":31129,
    "rate":260.53486797562624,
    "name":"Nuckolls County",
    "state":"NE"
  },
  {
    "id":21089,
    "rate":97.77983550302305,
    "name":"Greenup County",
    "state":"KY"
  },
  {
    "id":21085,
    "rate":54.2567175720085,
    "name":"Grayson County",
    "state":"KY"
  },
  {
    "id":42005,
    "rate":73.27301717328342,
    "name":"Armstrong County",
    "state":"PA"
  },
  {
    "id":13185,
    "rate":61.23731119405589,
    "name":"Lowndes County",
    "state":"GA"
  },
  {
    "id":21083,
    "rate":39.430131876914885,
    "name":"Graves County",
    "state":"KY"
  },
  {
    "id":21207,
    "rate":94.61946297246452,
    "name":"Russell County",
    "state":"KY"
  },
  {
    "id":26097,
    "rate":47.380717045556665,
    "name":"Mackinac County",
    "state":"MI"
  },
  {
    "id":21079,
    "rate":6.302446519323957,
    "name":"Garrard County",
    "state":"KY"
  },
  {
    "id":31001,
    "rate":208.1385419321946,
    "name":"Adams County",
    "state":"NE"
  },
  {
    "id":45007,
    "rate":103.85931930398957,
    "name":"Anderson County",
    "state":"SC"
  },
  {
    "id":29109,
    "rate":30.81333229093371,
    "name":"Lawrence County",
    "state":"MO"
  },
  {
    "id":13005,
    "rate":96.06025388878956,
    "name":"Bacon County",
    "state":"GA"
  },
  {
    "id":13317,
    "rate":19.729245470834165,
    "name":"Wilkes County",
    "state":"GA"
  },
  {
    "id":21121,
    "rate":76.38517350157728,
    "name":"Knox County",
    "state":"KY"
  },
  {
    "id":21073,
    "rate":172.12519492091786,
    "name":"Franklin County",
    "state":"KY"
  },
  {
    "id":42023,
    "rate":31.570214488061513,
    "name":"Cameron County",
    "state":"PA"
  },
  {
    "id":21069,
    "rate":173.05670244976605,
    "name":"Fleming County",
    "state":"KY"
  },
  {
    "id":21067,
    "rate":586.1455654526941,
    "name":"Fayette County",
    "state":"KY"
  },
  {
    "id":21061,
    "rate":25.8441879637263,
    "name":"Edmonson County",
    "state":"KY"
  },
  {
    "id":54085,
    "rate":16.33070406076541,
    "name":"Ritchie County",
    "state":"WV"
  },
  {
    "id":5027,
    "rate":63.905987459530344,
    "name":"Columbia County",
    "state":"AR"
  },
  {
    "id":21057,
    "rate":138.77241580405308,
    "name":"Cumberland County",
    "state":"KY"
  },
  {
    "id":49003,
    "rate":54.878155523284725,
    "name":"Box Elder County",
    "state":"UT"
  },
  {
    "id":13103,
    "rate":38.066632918986826,
    "name":"Effingham County",
    "state":"GA"
  },
  {
    "id":21055,
    "rate":8.41029523088569,
    "name":"Crittenden County",
    "state":"KY"
  },
  {
    "id":21047,
    "rate":43.49109146100041,
    "name":"Christian County",
    "state":"KY"
  },
  {
    "id":48367,
    "rate":96.07622101422047,
    "name":"Parker County",
    "state":"TX"
  },
  {
    "id":21045,
    "rate":22.947283351983092,
    "name":"Casey County",
    "state":"KY"
  },
  {
    "id":36057,
    "rate":111.58124711871879,
    "name":"Montgomery County",
    "state":"NY"
  },
  {
    "id":29113,
    "rate":11.831183924420785,
    "name":"Lincoln County",
    "state":"MO"
  },
  {
    "id":38095,
    "rate":16.95221696082652,
    "name":"Towner County",
    "state":"ND"
  },
  {
    "id":27169,
    "rate":1.9483302809492264,
    "name":"Winona County",
    "state":"MN"
  },
  {
    "id":36087,
    "rate":636.5314874537854,
    "name":"Rockland County",
    "state":"NY"
  },
  {
    "id":21043,
    "rate":908.9443413053766,
    "name":"Carter County",
    "state":"KY"
  },
  {
    "id":29047,
    "rate":285.5998752684584,
    "name":"Clay County",
    "state":"MO"
  },
  {
    "id":28025,
    "rate":38.84432458936013,
    "name":"Clay County",
    "state":"MS"
  },
  {
    "id":29085,
    "rate":6.830281090289609,
    "name":"Hickory County",
    "state":"MO"
  },
  {
    "id":26105,
    "rate":29.49352959642819,
    "name":"Mason County",
    "state":"MI"
  },
  {
    "id":34031,
    "rate":195.77852451323008,
    "name":"Passaic County",
    "state":"NJ"
  },
  {
    "id":21041,
    "rate":68.50744896082398,
    "name":"Carroll County",
    "state":"KY"
  },
  {
    "id":21031,
    "rate":56.160393565516166,
    "name":"Butler County",
    "state":"KY"
  },
  {
    "id":21129,
    "rate":39.95945592466648,
    "name":"Lee County",
    "state":"KY"
  },
  {
    "id":21029,
    "rate":150.32247441149738,
    "name":"Bullitt County",
    "state":"KY"
  },
  {
    "id":55127,
    "rate":22.758898420215036,
    "name":"Walworth County",
    "state":"WI"
  },
  {
    "id":21023,
    "rate":104.24503780718332,
    "name":"Bracken County",
    "state":"KY"
  },
  {
    "id":21019,
    "rate":4170.247139030924,
    "name":"Boyd County",
    "state":"KY"
  },
  {
    "id":21009,
    "rate":285.70882842344645,
    "name":"Barren County",
    "state":"KY"
  },
  {
    "id":30081,
    "rate":27.429190146910454,
    "name":"Ravalli County",
    "state":"MT"
  },
  {
    "id":13135,
    "rate":488.649533872635,
    "name":"Gwinnett County",
    "state":"GA"
  },
  {
    "id":20195,
    "rate":215.00168406871003,
    "name":"Trego County",
    "state":"KS"
  },
  {
    "id":46053,
    "rate":50.353107344632775,
    "name":"Gregory County",
    "state":"SD"
  },
  {
    "id":37143,
    "rate":43.33801359739876,
    "name":"Perquimans County",
    "state":"NC"
  },
  {
    "id":22105,
    "rate":349.1158386322687,
    "name":"Tangipahoa Parish",
    "state":"LA"
  },
  {
    "id":20191,
    "rate":122.88661098456087,
    "name":"Sumner County",
    "state":"KS"
  },
  {
    "id":20189,
    "rate":6.071117308697925,
    "name":"Stevens County",
    "state":"KS"
  },
  {
    "id":51750,
    "rate":47.157938685434814,
    "name":"Radford City",
    "state":"VA"
  },
  {
    "id":20185,
    "rate":6.311437758383096,
    "name":"Stafford County",
    "state":"KS"
  },
  {
    "id":13263,
    "rate":47.94585500152952,
    "name":"Talbot County",
    "state":"GA"
  },
  {
    "id":20183,
    "rate":34.93873201917953,
    "name":"Smith County",
    "state":"KS"
  },
  {
    "id":34029,
    "rate":295.1852304682712,
    "name":"Ocean County",
    "state":"NJ"
  },
  {
    "id":5131,
    "rate":220.9334223129465,
    "name":"Sebastian County",
    "state":"AR"
  },
  {
    "id":21051,
    "rate":87.8858920198691,
    "name":"Clay County",
    "state":"KY"
  },
  {
    "id":39151,
    "rate":139.862902967634,
    "name":"Stark County",
    "state":"OH"
  },
  {
    "id":27093,
    "rate":0.4643291095295955,
    "name":"Meeker County",
    "state":"MN"
  },
  {
    "id":20177,
    "rate":329.9059272011807,
    "name":"Shawnee County",
    "state":"KS"
  },
  {
    "id":35009,
    "rate":24.4705371590954,
    "name":"Curry County",
    "state":"NM"
  },
  {
    "id":20175,
    "rate":10.099347631433078,
    "name":"Seward County",
    "state":"KS"
  },
  {
    "id":21193,
    "rate":307.9553732451642,
    "name":"Perry County",
    "state":"KY"
  },
  {
    "id":35025,
    "rate":12.748393325890842,
    "name":"Lea County",
    "state":"NM"
  },
  {
    "id":20167,
    "rate":28.78069797501077,
    "name":"Russell County",
    "state":"KS"
  },
  {
    "id":17023,
    "rate":38.833415112855754,
    "name":"Clark County",
    "state":"IL"
  },
  {
    "id":20157,
    "rate":337.2066694112805,
    "name":"Republic County",
    "state":"KS"
  },
  {
    "id":20141,
    "rate":25.58060288335518,
    "name":"Osborne County",
    "state":"KS"
  },
  {
    "id":20137,
    "rate":38.481712756467445,
    "name":"Norton County",
    "state":"KS"
  },
  {
    "id":37025,
    "rate":1089.600080222454,
    "name":"Cabarrus County",
    "state":"NC"
  },
  {
    "id":20133,
    "rate":11.328713834184292,
    "name":"Neosho County",
    "state":"KS"
  },
  {
    "id":22067,
    "rate":62.456345011118806,
    "name":"Morehouse Parish",
    "state":"LA"
  },
  {
    "id":20131,
    "rate":17.25059382422803,
    "name":"Nemaha County",
    "state":"KS"
  },
  {
    "id":29115,
    "rate":32.141598590421275,
    "name":"Linn County",
    "state":"MO"
  },
  {
    "id":20125,
    "rate":18.268521476490577,
    "name":"Montgomery County",
    "state":"KS"
  },
  {
    "id":21185,
    "rate":95.17949302378588,
    "name":"Oldham County",
    "state":"KY"
  },
  {
    "id":53001,
    "rate":5.865496457650417,
    "name":"Adams County",
    "state":"WA"
  },
  {
    "id":51007,
    "rate":2.7226363279717534,
    "name":"Amelia County",
    "state":"VA"
  },
  {
    "id":1083,
    "rate":23.413573251834304,
    "name":"Limestone County",
    "state":"AL"
  },
  {
    "id":29055,
    "rate":98.72083636070074,
    "name":"Crawford County",
    "state":"MO"
  },
  {
    "id":21159,
    "rate":33.971636762516646,
    "name":"Martin County",
    "state":"KY"
  },
  {
    "id":20163,
    "rate":4.9913411583605924,
    "name":"Rooks County",
    "state":"KS"
  },
  {
    "id":20121,
    "rate":4.645606502070235,
    "name":"Miami County",
    "state":"KS"
  },
  {
    "id":55049,
    "rate":37.608348060254144,
    "name":"Iowa County",
    "state":"WI"
  },
  {
    "id":51163,
    "rate":13.461504108610216,
    "name":"Rockbridge County",
    "state":"VA"
  },
  {
    "id":8071,
    "rate":45.25356999866541,
    "name":"Las Animas County",
    "state":"CO"
  },
  {
    "id":29117,
    "rate":15.440990481262064,
    "name":"Livingston County",
    "state":"MO"
  },
  {
    "id":20119,
    "rate":3.6874292185730466,
    "name":"Meade County",
    "state":"KS"
  },
  {
    "id":20115,
    "rate":8.4877141933398,
    "name":"Marion County",
    "state":"KS"
  },
  {
    "id":21189,
    "rate":2.7609714529186196,
    "name":"Owsley County",
    "state":"KY"
  },
  {
    "id":30023,
    "rate":6.473649967469096,
    "name":"Deer Lodge County",
    "state":"MT"
  },
  {
    "id":20111,
    "rate":20.25649437800113,
    "name":"Lyon County",
    "state":"KS"
  },
  {
    "id":26019,
    "rate":13.284062805544371,
    "name":"Benzie County",
    "state":"MI"
  },
  {
    "id":20109,
    "rate":120.85509838998212,
    "name":"Logan County",
    "state":"KS"
  },
  {
    "id":20107,
    "rate":4.673557641598987,
    "name":"Linn County",
    "state":"KS"
  },
  {
    "id":20095,
    "rate":24.837761880429227,
    "name":"Kingman County",
    "state":"KS"
  },
  {
    "id":13131,
    "rate":20.92604273436884,
    "name":"Grady County",
    "state":"GA"
  },
  {
    "id":17037,
    "rate":137.27355219546672,
    "name":"Dekalb County",
    "state":"IL"
  },
  {
    "id":28145,
    "rate":160.4467680608365,
    "name":"Union County",
    "state":"MS"
  },
  {
    "id":51125,
    "rate":9.354359424596474,
    "name":"Nelson County",
    "state":"VA"
  },
  {
    "id":19079,
    "rate":140.18095113666055,
    "name":"Hamilton County",
    "state":"IA"
  },
  {
    "id":20093,
    "rate":12.356639839034205,
    "name":"Kearny County",
    "state":"KS"
  },
  {
    "id":22075,
    "rate":19.078281243462616,
    "name":"Plaquemines Parish",
    "state":"LA"
  },
  {
    "id":22055,
    "rate":348.2340842527149,
    "name":"Lafayette Parish",
    "state":"LA"
  },
  {
    "id":48175,
    "rate":12.699645680021804,
    "name":"Goliad County",
    "state":"TX"
  },
  {
    "id":46041,
    "rate":9.00974025974026,
    "name":"Dewey County",
    "state":"SD"
  },
  {
    "id":21179,
    "rate":39.664720073955486,
    "name":"Nelson County",
    "state":"KY"
  },
  {
    "id":20087,
    "rate":403.5125125654728,
    "name":"Jefferson County",
    "state":"KS"
  },
  {
    "id":5147,
    "rate":1.8314241267147504,
    "name":"Woodruff County",
    "state":"AR"
  },
  {
    "id":24033,
    "rate":223.47935647978463,
    "name":"Prince George's County",
    "state":"MD"
  },
  {
    "id":23005,
    "rate":651.4293962330579,
    "name":"Cumberland County",
    "state":"ME"
  },
  {
    "id":55111,
    "rate":33.836744483530545,
    "name":"Sauk County",
    "state":"WI"
  },
  {
    "id":22009,
    "rate":44.63054660833614,
    "name":"Avoyelles Parish",
    "state":"LA"
  },
  {
    "id":20083,
    "rate":5.76036866359447,
    "name":"Hodgeman County",
    "state":"KS"
  },
  {
    "id":29049,
    "rate":48.21214337966351,
    "name":"Clinton County",
    "state":"MO"
  },
  {
    "id":48091,
    "rate":1052.0195139751663,
    "name":"Comal County",
    "state":"TX"
  },
  {
    "id":21235,
    "rate":105.20602732009573,
    "name":"Whitley County",
    "state":"KY"
  },
  {
    "id":21233,
    "rate":28.433860078640855,
    "name":"Webster County",
    "state":"KY"
  },
  {
    "id":20081,
    "rate":6.429755981994788,
    "name":"Haskell County",
    "state":"KS"
  },
  {
    "id":47149,
    "rate":221.45779845956332,
    "name":"Rutherford County",
    "state":"TN"
  },
  {
    "id":20079,
    "rate":830.0815365622578,
    "name":"Harvey County",
    "state":"KS"
  },
  {
    "id":47173,
    "rate":8.72001254377254,
    "name":"Union County",
    "state":"TN"
  },
  {
    "id":28137,
    "rate":21.644215252929204,
    "name":"Tate County",
    "state":"MS"
  },
  {
    "id":13315,
    "rate":38.732690816439565,
    "name":"Wilcox County",
    "state":"GA"
  },
  {
    "id":20077,
    "rate":69.1351719441607,
    "name":"Harper County",
    "state":"KS"
  },
  {
    "id":20067,
    "rate":7.315333672949566,
    "name":"Grant County",
    "state":"KS"
  },
  {
    "id":28109,
    "rate":28.096569250317668,
    "name":"Pearl River County",
    "state":"MS"
  },
  {
    "id":28059,
    "rate":66.56409633561718,
    "name":"Jackson County",
    "state":"MS"
  },
  {
    "id":19129,
    "rate":119.18285061487802,
    "name":"Mills County",
    "state":"IA"
  },
  {
    "id":26023,
    "rate":84.07189871103391,
    "name":"Branch County",
    "state":"MI"
  },
  {
    "id":20059,
    "rate":121.94412242058893,
    "name":"Franklin County",
    "state":"KS"
  },
  {
    "id":20057,
    "rate":26.13320679837805,
    "name":"Ford County",
    "state":"KS"
  },
  {
    "id":29141,
    "rate":9.007000645449581,
    "name":"Morgan County",
    "state":"MO"
  },
  {
    "id":22039,
    "rate":82.99046260807565,
    "name":"Evangeline Parish",
    "state":"LA"
  },
  {
    "id":40127,
    "rate":1.5552390278643282,
    "name":"Pushmataha County",
    "state":"OK"
  },
  {
    "id":20055,
    "rate":23.553460813358466,
    "name":"Finney County",
    "state":"KS"
  },
  {
    "id":20193,
    "rate":75.84748961872407,
    "name":"Thomas County",
    "state":"KS"
  },
  {
    "id":46097,
    "rate":5.931984502798105,
    "name":"Miner County",
    "state":"SD"
  },
  {
    "id":12073,
    "rate":445.1547274302985,
    "name":"Leon County",
    "state":"FL"
  },
  {
    "id":20053,
    "rate":81.73395204949729,
    "name":"Ellsworth County",
    "state":"KS"
  },
  {
    "id":20139,
    "rate":44.3343844679404,
    "name":"Osage County",
    "state":"KS"
  },
  {
    "id":20043,
    "rate":6.058143963437857,
    "name":"Doniphan County",
    "state":"KS"
  },
  {
    "id":26041,
    "rate":30.25413374602915,
    "name":"Delta County",
    "state":"MI"
  },
  {
    "id":20037,
    "rate":102.35995020451715,
    "name":"Crawford County",
    "state":"KS"
  },
  {
    "id":1093,
    "rate":117.41152182461661,
    "name":"Marion County",
    "state":"AL"
  },
  {
    "id":20041,
    "rate":73.55349731754228,
    "name":"Dickinson County",
    "state":"KS"
  },
  {
    "id":34025,
    "rate":490.81079062138394,
    "name":"Monmouth County",
    "state":"NJ"
  },
  {
    "id":5111,
    "rate":76.15457348406991,
    "name":"Poinsett County",
    "state":"AR"
  },
  {
    "id":20035,
    "rate":57.69992278844034,
    "name":"Cowley County",
    "state":"KS"
  },
  {
    "id":9003,
    "rate":667.583207270149,
    "name":"Hartford County",
    "state":"CT"
  },
  {
    "id":16009,
    "rate":17.28219178082192,
    "name":"Benewah County",
    "state":"ID"
  },
  {
    "id":21075,
    "rate":33.1999389033145,
    "name":"Fulton County",
    "state":"KY"
  },
  {
    "id":21015,
    "rate":101.51965795323628,
    "name":"Boone County",
    "state":"KY"
  },
  {
    "id":6089,
    "rate":68.64573116393251,
    "name":"Shasta County",
    "state":"CA"
  },
  {
    "id":26075,
    "rate":89.4680811209071,
    "name":"Jackson County",
    "state":"MI"
  },
  {
    "id":20027,
    "rate":207.96876834566157,
    "name":"Clay County",
    "state":"KS"
  },
  {
    "id":20019,
    "rate":2.975322490185081,
    "name":"Chautauqua County",
    "state":"KS"
  },
  {
    "id":46117,
    "rate":15.613033254954653,
    "name":"Stanley County",
    "state":"SD"
  },
  {
    "id":22045,
    "rate":110.56537150278693,
    "name":"Iberia Parish",
    "state":"LA"
  },
  {
    "id":45005,
    "rate":40.53178728508597,
    "name":"Allendale County",
    "state":"SC"
  },
  {
    "id":18027,
    "rate":196.15331921783533,
    "name":"Daviess County",
    "state":"IN"
  },
  {
    "id":20011,
    "rate":20.373511003432256,
    "name":"Bourbon County",
    "state":"KS"
  },
  {
    "id":40077,
    "rate":11.527282698108033,
    "name":"Latimer County",
    "state":"OK"
  },
  {
    "id":12001,
    "rate":433.6048197749026,
    "name":"Alachua County",
    "state":"FL"
  },
  {
    "id":22013,
    "rate":31.83576925792557,
    "name":"Bienville Parish",
    "state":"LA"
  },
  {
    "id":40129,
    "rate":2.978272390037096,
    "name":"Roger Mills County",
    "state":"OK"
  },
  {
    "id":20007,
    "rate":39.66393442622951,
    "name":"Barber County",
    "state":"KS"
  },
  {
    "id":18115,
    "rate":43.4933639193839,
    "name":"Ohio County",
    "state":"IN"
  },
  {
    "id":19111,
    "rate":17.592779742855534,
    "name":"Lee County",
    "state":"IA"
  },
  {
    "id":20005,
    "rate":73.3327380952381,
    "name":"Atchison County",
    "state":"KS"
  },
  {
    "id":20003,
    "rate":5.170497600404142,
    "name":"Anderson County",
    "state":"KS"
  },
  {
    "id":54097,
    "rate":113.39631110748385,
    "name":"Upshur County",
    "state":"WV"
  },
  {
    "id":19195,
    "rate":1.4616305359755286,
    "name":"Worth County",
    "state":"IA"
  },
  {
    "id":30015,
    "rate":3.6207187447275184,
    "name":"Chouteau County",
    "state":"MT"
  },
  {
    "id":19193,
    "rate":286.22065865337635,
    "name":"Woodbury County",
    "state":"IA"
  },
  {
    "id":1123,
    "rate":82.91597822917677,
    "name":"Tallapoosa County",
    "state":"AL"
  },
  {
    "id":27041,
    "rate":0.8349338747736378,
    "name":"Douglas County",
    "state":"MN"
  },
  {
    "id":19191,
    "rate":3.0818596691386193,
    "name":"Winneshiek County",
    "state":"IA"
  },
  {
    "id":51800,
    "rate":141.9121186152166,
    "name":"Suffolk City",
    "state":"VA"
  },
  {
    "id":16083,
    "rate":378.82513521787934,
    "name":"Twin Falls County",
    "state":"ID"
  },
  {
    "id":19189,
    "rate":21.41351402220968,
    "name":"Winnebago County",
    "state":"IA"
  },
  {
    "id":18059,
    "rate":160.3740037655186,
    "name":"Hancock County",
    "state":"IN"
  },
  {
    "id":19183,
    "rate":127.52474795857849,
    "name":"Washington County",
    "state":"IA"
  },
  {
    "id":19179,
    "rate":23.167840674417945,
    "name":"Wapello County",
    "state":"IA"
  },
  {
    "id":28123,
    "rate":120.1791277258567,
    "name":"Scott County",
    "state":"MS"
  },
  {
    "id":48251,
    "rate":57.726893766690544,
    "name":"Johnson County",
    "state":"TX"
  },
  {
    "id":18043,
    "rate":1559.138993677275,
    "name":"Floyd County",
    "state":"IN"
  },
  {
    "id":19175,
    "rate":74.29116035263283,
    "name":"Union County",
    "state":"IA"
  },
  {
    "id":31169,
    "rate":9.173457508731083,
    "name":"Thayer County",
    "state":"NE"
  },
  {
    "id":31041,
    "rate":179.92491657397105,
    "name":"Custer County",
    "state":"NE"
  },
  {
    "id":19171,
    "rate":12.25208262010727,
    "name":"Tama County",
    "state":"IA"
  },
  {
    "id":46029,
    "rate":72.90091004677133,
    "name":"Codington County",
    "state":"SD"
  },
  {
    "id":19169,
    "rate":63.49832644650627,
    "name":"Story County",
    "state":"IA"
  },
  {
    "id":2020,
    "rate":154.52398093981583,
    "name":"Municipality of Anchorage",
    "state":"AK"
  },
  {
    "id":19157,
    "rate":25.20070366224212,
    "name":"Poweshiek County",
    "state":"IA"
  },
  {
    "id":19155,
    "rate":296.1944940700399,
    "name":"Pottawattamie County",
    "state":"IA"
  },
  {
    "id":20143,
    "rate":41.585546939448946,
    "name":"Ottawa County",
    "state":"KS"
  },
  {
    "id":19181,
    "rate":44.05197018104364,
    "name":"Warren County",
    "state":"IA"
  },
  {
    "id":19147,
    "rate":72.1700247818123,
    "name":"Palo Alto County",
    "state":"IA"
  },
  {
    "id":19145,
    "rate":673.2505872643006,
    "name":"Page County",
    "state":"IA"
  },
  {
    "id":27017,
    "rate":1.725241426184475,
    "name":"Carlton County",
    "state":"MN"
  },
  {
    "id":40097,
    "rate":19.61348544185255,
    "name":"Mayes County",
    "state":"OK"
  },
  {
    "id":19143,
    "rate":5.326332794830371,
    "name":"Osceola County",
    "state":"IA"
  },
  {
    "id":18119,
    "rate":1.357487244300894,
    "name":"Owen County",
    "state":"IN"
  },
  {
    "id":19131,
    "rate":25.24098070289922,
    "name":"Mitchell County",
    "state":"IA"
  },
  {
    "id":27055,
    "rate":3.430059523809524,
    "name":"Houston County",
    "state":"MN"
  },
  {
    "id":40075,
    "rate":9.161939419886545,
    "name":"Kiowa County",
    "state":"OK"
  },
  {
    "id":19151,
    "rate":2.5722664432341857,
    "name":"Pocahontas County",
    "state":"IA"
  },
  {
    "id":13105,
    "rate":176.32777012198235,
    "name":"Elbert County",
    "state":"GA"
  },
  {
    "id":54031,
    "rate":88.52775775054076,
    "name":"Hardy County",
    "state":"WV"
  },
  {
    "id":26095,
    "rate":65.55127810286416,
    "name":"Luce County",
    "state":"MI"
  },
  {
    "id":19127,
    "rate":756.4710896780166,
    "name":"Marshall County",
    "state":"IA"
  },
  {
    "id":40111,
    "rate":22.302776163892187,
    "name":"Okmulgee County",
    "state":"OK"
  },
  {
    "id":29209,
    "rate":65.15832094391547,
    "name":"Stone County",
    "state":"MO"
  },
  {
    "id":45091,
    "rate":42.02761696068484,
    "name":"York County",
    "state":"SC"
  },
  {
    "id":29007,
    "rate":22.598203826630233,
    "name":"Audrain County",
    "state":"MO"
  },
  {
    "id":19125,
    "rate":8.00557253280604,
    "name":"Marion County",
    "state":"IA"
  },
  {
    "id":26101,
    "rate":60.70720208096245,
    "name":"Manistee County",
    "state":"MI"
  },
  {
    "id":22127,
    "rate":7.609807960661838,
    "name":"Winn Parish",
    "state":"LA"
  },
  {
    "id":19123,
    "rate":5.399919703796226,
    "name":"Mahaska County",
    "state":"IA"
  },
  {
    "id":19121,
    "rate":1581.1934472387538,
    "name":"Madison County",
    "state":"IA"
  },
  {
    "id":19115,
    "rate":1.3587004502516113,
    "name":"Louisa County",
    "state":"IA"
  },
  {
    "id":27111,
    "rate":4.040180129861063,
    "name":"Otter Tail County",
    "state":"MN"
  },
  {
    "id":19113,
    "rate":245.89114615763495,
    "name":"Linn County",
    "state":"IA"
  },
  {
    "id":48465,
    "rate":28.760239413314807,
    "name":"Val Verde County",
    "state":"TX"
  },
  {
    "id":39149,
    "rate":71.3564771478572,
    "name":"Shelby County",
    "state":"OH"
  },
  {
    "id":29003,
    "rate":7.182548794489093,
    "name":"Andrew County",
    "state":"MO"
  },
  {
    "id":19107,
    "rate":5.801115599153683,
    "name":"Keokuk County",
    "state":"IA"
  },
  {
    "id":29073,
    "rate":17.817757009345797,
    "name":"Gasconade County",
    "state":"MO"
  },
  {
    "id":13119,
    "rate":54.08292660676001,
    "name":"Franklin County",
    "state":"GA"
  },
  {
    "id":12065,
    "rate":98.8635242725287,
    "name":"Jefferson County",
    "state":"FL"
  },
  {
    "id":8025,
    "rate":20.764966740576497,
    "name":"Crowley County",
    "state":"CO"
  },
  {
    "id":19101,
    "rate":100.3248653711075,
    "name":"Jefferson County",
    "state":"IA"
  },
  {
    "id":19075,
    "rate":12.644288819125812,
    "name":"Grundy County",
    "state":"IA"
  },
  {
    "id":46127,
    "rate":28.914493632504545,
    "name":"Union County",
    "state":"SD"
  },
  {
    "id":19069,
    "rate":48.50180505415164,
    "name":"Franklin County",
    "state":"IA"
  },
  {
    "id":19067,
    "rate":50.61105602379774,
    "name":"Floyd County",
    "state":"IA"
  },
  {
    "id":1023,
    "rate":14.287926838262406,
    "name":"Choctaw County",
    "state":"AL"
  },
  {
    "id":12117,
    "rate":221.1855217255242,
    "name":"Seminole County",
    "state":"FL"
  },
  {
    "id":19063,
    "rate":138.60358107432236,
    "name":"Emmet County",
    "state":"IA"
  },
  {
    "id":19059,
    "rate":25.154140878278806,
    "name":"Dickinson County",
    "state":"IA"
  },
  {
    "id":37181,
    "rate":122.03531969649912,
    "name":"Vance County",
    "state":"NC"
  },
  {
    "id":19051,
    "rate":76.43701917556551,
    "name":"Davis County",
    "state":"IA"
  },
  {
    "id":13235,
    "rate":33.33904109589041,
    "name":"Pulaski County",
    "state":"GA"
  },
  {
    "id":19045,
    "rate":88.84223056872523,
    "name":"Clinton County",
    "state":"IA"
  },
  {
    "id":21001,
    "rate":15.172104791523907,
    "name":"Adair County",
    "state":"KY"
  },
  {
    "id":12017,
    "rate":242.03460406346463,
    "name":"Citrus County",
    "state":"FL"
  },
  {
    "id":19037,
    "rate":12.275468622656884,
    "name":"Chickasaw County",
    "state":"IA"
  },
  {
    "id":19029,
    "rate":39.287900874635575,
    "name":"Cass County",
    "state":"IA"
  },
  {
    "id":19025,
    "rate":9.710393541876892,
    "name":"Calhoun County",
    "state":"IA"
  },
  {
    "id":5003,
    "rate":47.79829743685164,
    "name":"Ashley County",
    "state":"AR"
  },
  {
    "id":19011,
    "rate":12.382351803874558,
    "name":"Benton County",
    "state":"IA"
  },
  {
    "id":46135,
    "rate":12.494356159532556,
    "name":"Yankton County",
    "state":"SD"
  },
  {
    "id":1041,
    "rate":22.9723733180647,
    "name":"Crenshaw County",
    "state":"AL"
  },
  {
    "id":12003,
    "rate":71.78654635553418,
    "name":"Baker County",
    "state":"FL"
  },
  {
    "id":19009,
    "rate":44.394145677331515,
    "name":"Audubon County",
    "state":"IA"
  },
  {
    "id":17177,
    "rate":70.25929789453517,
    "name":"Stephenson County",
    "state":"IL"
  },
  {
    "id":18183,
    "rate":122.64322212203184,
    "name":"Whitley County",
    "state":"IN"
  },
  {
    "id":13177,
    "rate":60.10930483517249,
    "name":"Lee County",
    "state":"GA"
  },
  {
    "id":51133,
    "rate":92.77885705034808,
    "name":"Northumberland County",
    "state":"VA"
  },
  {
    "id":18181,
    "rate":3.868813503769256,
    "name":"White County",
    "state":"IN"
  },
  {
    "id":48277,
    "rate":66.98190789473684,
    "name":"Lamar County",
    "state":"TX"
  },
  {
    "id":18171,
    "rate":69.45385165752444,
    "name":"Warren County",
    "state":"IN"
  },
  {
    "id":19109,
    "rate":3.1997915445247864,
    "name":"Kossuth County",
    "state":"IA"
  },
  {
    "id":18165,
    "rate":26.411783140081482,
    "name":"Vermillion County",
    "state":"IN"
  },
  {
    "id":18161,
    "rate":60.404632152588555,
    "name":"Union County",
    "state":"IN"
  },
  {
    "id":46043,
    "rate":3.839165545087483,
    "name":"Douglas County",
    "state":"SD"
  },
  {
    "id":18159,
    "rate":36.3679155270021,
    "name":"Tipton County",
    "state":"IN"
  },
  {
    "id":18145,
    "rate":65.28480014420262,
    "name":"Shelby County",
    "state":"IN"
  },
  {
    "id":51171,
    "rate":81.28209938791304,
    "name":"Shenandoah County",
    "state":"VA"
  },
  {
    "id":13259,
    "rate":16.41871921182266,
    "name":"Stewart County",
    "state":"GA"
  },
  {
    "id":25001,
    "rate":234.78591542740108,
    "name":"Barnstable County",
    "state":"MA"
  },
  {
    "id":18139,
    "rate":21.421150927979454,
    "name":"Rush County",
    "state":"IN"
  },
  {
    "id":53045,
    "rate":15.103455087159057,
    "name":"Mason County",
    "state":"WA"
  },
  {
    "id":19061,
    "rate":231.12184304287044,
    "name":"Dubuque County",
    "state":"IA"
  },
  {
    "id":48397,
    "rate":104.893001735107,
    "name":"Rockwall County",
    "state":"TX"
  },
  {
    "id":18137,
    "rate":41.16758386203513,
    "name":"Ripley County",
    "state":"IN"
  },
  {
    "id":18129,
    "rate":39.004918800749536,
    "name":"Posey County",
    "state":"IN"
  },
  {
    "id":42109,
    "rate":122.80379937682179,
    "name":"Snyder County",
    "state":"PA"
  },
  {
    "id":1097,
    "rate":557.8070080081166,
    "name":"Mobile County",
    "state":"AL"
  },
  {
    "id":37179,
    "rate":31.81042549413848,
    "name":"Union County",
    "state":"NC"
  },
  {
    "id":18127,
    "rate":125.65589554446184,
    "name":"Porter County",
    "state":"IN"
  },
  {
    "id":36077,
    "rate":248.6533613445378,
    "name":"Otsego County",
    "state":"NY"
  },
  {
    "id":18125,
    "rate":46.958666040394554,
    "name":"Pike County",
    "state":"IN"
  },
  {
    "id":31067,
    "rate":32.47665056360709,
    "name":"Gage County",
    "state":"NE"
  },
  {
    "id":51790,
    "rate":37.07620918857907,
    "name":"Staunton City",
    "state":"VA"
  },
  {
    "id":5133,
    "rate":4.753115174100384,
    "name":"Sevier County",
    "state":"AR"
  },
  {
    "id":18117,
    "rate":35.06600324939074,
    "name":"Orange County",
    "state":"IN"
  },
  {
    "id":13039,
    "rate":71.46686899342436,
    "name":"Camden County",
    "state":"GA"
  },
  {
    "id":18141,
    "rate":106.40350975912598,
    "name":"St. Joseph County",
    "state":"IN"
  },
  {
    "id":36063,
    "rate":139.48976552391767,
    "name":"Niagara County",
    "state":"NY"
  },
  {
    "id":9007,
    "rate":278.3208071532143,
    "name":"Middlesex County",
    "state":"CT"
  },
  {
    "id":18111,
    "rate":54.11961076781022,
    "name":"Newton County",
    "state":"IN"
  },
  {
    "id":19103,
    "rate":312.12083585926837,
    "name":"Johnson County",
    "state":"IA"
  },
  {
    "id":18101,
    "rate":2.8560356520054255,
    "name":"Martin County",
    "state":"IN"
  },
  {
    "id":38101,
    "rate":40.17318265119119,
    "name":"Ward County",
    "state":"ND"
  },
  {
    "id":18083,
    "rate":284.33313184936003,
    "name":"Knox County",
    "state":"IN"
  },
  {
    "id":18073,
    "rate":81.35204615430605,
    "name":"Jasper County",
    "state":"IN"
  },
  {
    "id":54021,
    "rate":11.203007518796992,
    "name":"Gilmer County",
    "state":"WV"
  },
  {
    "id":45065,
    "rate":27.337420846316213,
    "name":"Mccormick County",
    "state":"SC"
  },
  {
    "id":41053,
    "rate":13.663676659585072,
    "name":"Polk County",
    "state":"OR"
  },
  {
    "id":16027,
    "rate":37.34405950808849,
    "name":"Canyon County",
    "state":"ID"
  },
  {
    "id":17197,
    "rate":184.71030670476014,
    "name":"Will County",
    "state":"IL"
  },
  {
    "id":18071,
    "rate":131.22330774598743,
    "name":"Jackson County",
    "state":"IN"
  },
  {
    "id":31043,
    "rate":136.64443058021786,
    "name":"Dakota County",
    "state":"NE"
  },
  {
    "id":18069,
    "rate":225.7935585061792,
    "name":"Huntington County",
    "state":"IN"
  },
  {
    "id":5105,
    "rate":13.716831299631998,
    "name":"Perry County",
    "state":"AR"
  },
  {
    "id":18037,
    "rate":82.48325176984844,
    "name":"Dubois County",
    "state":"IN"
  },
  {
    "id":48053,
    "rate":27.92640319433731,
    "name":"Burnet County",
    "state":"TX"
  },
  {
    "id":20065,
    "rate":78.71913580246913,
    "name":"Graham County",
    "state":"KS"
  },
  {
    "id":5077,
    "rate":3.145240431795878,
    "name":"Lee County",
    "state":"AR"
  },
  {
    "id":16081,
    "rate":17.047685139288195,
    "name":"Teton County",
    "state":"ID"
  },
  {
    "id":19093,
    "rate":43.95289803976871,
    "name":"Ida County",
    "state":"IA"
  },
  {
    "id":21081,
    "rate":216.76534237066681,
    "name":"Grant County",
    "state":"KY"
  },
  {
    "id":51510,
    "rate":108.86853961642652,
    "name":"Alexandria city",
    "state":"VA"
  },
  {
    "id":27089,
    "rate":1.3082039911308205,
    "name":"Marshall County",
    "state":"MN"
  },
  {
    "id":18019,
    "rate":577.0840518589341,
    "name":"Clark County",
    "state":"IN"
  },
  {
    "id":30027,
    "rate":21.849812046507562,
    "name":"Fergus County",
    "state":"MT"
  },
  {
    "id":22005,
    "rate":105.63477842261503,
    "name":"Ascension Parish",
    "state":"LA"
  },
  {
    "id":13187,
    "rate":54.67562904853357,
    "name":"Lumpkin County",
    "state":"GA"
  },
  {
    "id":18015,
    "rate":21.84464570063694,
    "name":"Carroll County",
    "state":"IN"
  },
  {
    "id":47133,
    "rate":85.06010535320338,
    "name":"Overton County",
    "state":"TN"
  },
  {
    "id":29217,
    "rate":84.13164727377634,
    "name":"Vernon County",
    "state":"MO"
  },
  {
    "id":45019,
    "rate":983.2236395674655,
    "name":"Charleston County",
    "state":"SC"
  },
  {
    "id":26141,
    "rate":36.01052471018914,
    "name":"Presque Isle County",
    "state":"MI"
  },
  {
    "id":29197,
    "rate":66.97128532360985,
    "name":"Schuyler County",
    "state":"MO"
  },
  {
    "id":18013,
    "rate":11.047916113618264,
    "name":"Brown County",
    "state":"IN"
  },
  {
    "id":12063,
    "rate":47.20722743977133,
    "name":"Jackson County",
    "state":"FL"
  },
  {
    "id":13269,
    "rate":11.454480372270611,
    "name":"Taylor County",
    "state":"GA"
  },
  {
    "id":18005,
    "rate":95.75985703965627,
    "name":"Bartholomew County",
    "state":"IN"
  },
  {
    "id":13157,
    "rate":53.97870088636065,
    "name":"Jackson County",
    "state":"GA"
  },
  {
    "id":18001,
    "rate":45.94023429551466,
    "name":"Adams County",
    "state":"IN"
  },
  {
    "id":10003,
    "rate":489.44590043240106,
    "name":"New Castle County",
    "state":"DE"
  },
  {
    "id":18079,
    "rate":50.30196579376907,
    "name":"Jennings County",
    "state":"IN"
  },
  {
    "id":27137,
    "rate":2.9009362203035622,
    "name":"St. Louis County",
    "state":"MN"
  },
  {
    "id":21013,
    "rate":120.98110258596189,
    "name":"Bell County",
    "state":"KY"
  },
  {
    "id":6111,
    "rate":154.98166314771524,
    "name":"Ventura County",
    "state":"CA"
  },
  {
    "id":13171,
    "rate":11.376462109873051,
    "name":"Lamar County",
    "state":"GA"
  },
  {
    "id":13049,
    "rate":41.581003907424105,
    "name":"Charlton County",
    "state":"GA"
  },
  {
    "id":31039,
    "rate":37.412541254125415,
    "name":"Cuming County",
    "state":"NE"
  },
  {
    "id":1055,
    "rate":155.44428894597596,
    "name":"Etowah County",
    "state":"AL"
  },
  {
    "id":20091,
    "rate":595.9322372909204,
    "name":"Johnson County",
    "state":"KS"
  },
  {
    "id":19027,
    "rate":57.02331430782626,
    "name":"Carroll County",
    "state":"IA"
  },
  {
    "id":17195,
    "rate":337.54143023235633,
    "name":"Whiteside County",
    "state":"IL"
  },
  {
    "id":46123,
    "rate":28.353691886964448,
    "name":"Tripp County",
    "state":"SD"
  },
  {
    "id":13057,
    "rate":258.54699113682244,
    "name":"Cherokee County",
    "state":"GA"
  },
  {
    "id":17189,
    "rate":6.1241530353843,
    "name":"Washington County",
    "state":"IL"
  },
  {
    "id":27027,
    "rate":3.080065766528823,
    "name":"Clay County",
    "state":"MN"
  },
  {
    "id":17161,
    "rate":467.98844048549944,
    "name":"Rock Island County",
    "state":"IL"
  },
  {
    "id":37193,
    "rate":43.736309781823444,
    "name":"Wilkes County",
    "state":"NC"
  },
  {
    "id":5117,
    "rate":42.066066777172615,
    "name":"Prairie County",
    "state":"AR"
  },
  {
    "id":17187,
    "rate":8.933933089682316,
    "name":"Warren County",
    "state":"IL"
  },
  {
    "id":12053,
    "rate":79.47221869186953,
    "name":"Hernando County",
    "state":"FL"
  },
  {
    "id":21219,
    "rate":1.175632911392405,
    "name":"Todd County",
    "state":"KY"
  },
  {
    "id":17179,
    "rate":74.61974811527327,
    "name":"Tazewell County",
    "state":"IL"
  },
  {
    "id":54101,
    "rate":52.85936113575865,
    "name":"Webster County",
    "state":"WV"
  },
  {
    "id":16005,
    "rate":926.0347977693124,
    "name":"Bannock County",
    "state":"ID"
  },
  {
    "id":8075,
    "rate":40.46566134524388,
    "name":"Logan County",
    "state":"CO"
  },
  {
    "id":19095,
    "rate":59.42613846723435,
    "name":"Iowa County",
    "state":"IA"
  },
  {
    "id":8085,
    "rate":10.22248416089583,
    "name":"Montrose County",
    "state":"CO"
  },
  {
    "id":17175,
    "rate":26.91426646454438,
    "name":"Stark County",
    "state":"IL"
  },
  {
    "id":40099,
    "rate":18.920821114369502,
    "name":"Murray County",
    "state":"OK"
  },
  {
    "id":5079,
    "rate":4.198176549579476,
    "name":"Lincoln County",
    "state":"AR"
  },
  {
    "id":17173,
    "rate":63.66212386992308,
    "name":"Shelby County",
    "state":"IL"
  },
  {
    "id":5007,
    "rate":650.2343827205593,
    "name":"Benton County",
    "state":"AR"
  },
  {
    "id":12131,
    "rate":38.72579659537319,
    "name":"Walton County",
    "state":"FL"
  },
  {
    "id":17167,
    "rate":110.73812905589537,
    "name":"Sangamon County",
    "state":"IL"
  },
  {
    "id":18131,
    "rate":32.94951352179575,
    "name":"Pulaski County",
    "state":"IN"
  },
  {
    "id":48409,
    "rate":71.76084562197885,
    "name":"San Patricio County",
    "state":"TX"
  },
  {
    "id":17159,
    "rate":89.90163934426229,
    "name":"Richland County",
    "state":"IL"
  },
  {
    "id":28147,
    "rate":18.228393425238604,
    "name":"Walthall County",
    "state":"MS"
  },
  {
    "id":17149,
    "rate":117.74310461330548,
    "name":"Pike County",
    "state":"IL"
  },
  {
    "id":29225,
    "rate":9.126713271316122,
    "name":"Webster County",
    "state":"MO"
  },
  {
    "id":6011,
    "rate":63.10837967939432,
    "name":"Colusa County",
    "state":"CA"
  },
  {
    "id":18067,
    "rate":354.3790148602561,
    "name":"Howard County",
    "state":"IN"
  },
  {
    "id":42035,
    "rate":41.73244399697961,
    "name":"Clinton County",
    "state":"PA"
  },
  {
    "id":8043,
    "rate":5.946427813388803,
    "name":"Fremont County",
    "state":"CO"
  },
  {
    "id":17143,
    "rate":788.2027105714426,
    "name":"Peoria County",
    "state":"IL"
  },
  {
    "id":13205,
    "rate":45.47856926603521,
    "name":"Mitchell County",
    "state":"GA"
  },
  {
    "id":13077,
    "rate":138.4302938614588,
    "name":"Coweta County",
    "state":"GA"
  },
  {
    "id":18085,
    "rate":84.57529554176219,
    "name":"Kosciusko County",
    "state":"IN"
  },
  {
    "id":17135,
    "rate":60.854163162321285,
    "name":"Montgomery County",
    "state":"IL"
  },
  {
    "id":29169,
    "rate":2.8698795632059038,
    "name":"Pulaski County",
    "state":"MO"
  },
  {
    "id":26089,
    "rate":83.96052874838233,
    "name":"Leelanau County",
    "state":"MI"
  },
  {
    "id":17133,
    "rate":36.18373286130027,
    "name":"Monroe County",
    "state":"IL"
  },
  {
    "id":37063,
    "rate":1070.5761437862202,
    "name":"Durham County",
    "state":"NC"
  },
  {
    "id":18051,
    "rate":101.2723912849095,
    "name":"Gibson County",
    "state":"IN"
  },
  {
    "id":37113,
    "rate":97.88199786957034,
    "name":"Macon County",
    "state":"NC"
  },
  {
    "id":17127,
    "rate":158.33256290034996,
    "name":"Massac County",
    "state":"IL"
  },
  {
    "id":51683,
    "rate":170.13008688822347,
    "name":"Manassas City",
    "state":"VA"
  },
  {
    "id":12109,
    "rate":78.29954910414118,
    "name":"St. Johns County",
    "state":"FL"
  },
  {
    "id":10005,
    "rate":258.2216994596298,
    "name":"Sussex County",
    "state":"DE"
  },
  {
    "id":17123,
    "rate":139.41061702300627,
    "name":"Marshall County",
    "state":"IL"
  },
  {
    "id":40121,
    "rate":34.67793755954888,
    "name":"Pittsburg County",
    "state":"OK"
  },
  {
    "id":34007,
    "rate":410.1988290872813,
    "name":"Camden County",
    "state":"NJ"
  },
  {
    "id":20009,
    "rate":39.874786774579896,
    "name":"Barton County",
    "state":"KS"
  },
  {
    "id":39103,
    "rate":84.13346842905169,
    "name":"Medina County",
    "state":"OH"
  },
  {
    "id":17119,
    "rate":208.35777629374815,
    "name":"Madison County",
    "state":"IL"
  },
  {
    "id":25011,
    "rate":99.44984904394501,
    "name":"Franklin County",
    "state":"MA"
  },
  {
    "id":51107,
    "rate":1971.203791048747,
    "name":"Loudoun County",
    "state":"VA"
  },
  {
    "id":12087,
    "rate":22.466829352855676,
    "name":"Monroe County",
    "state":"FL"
  },
  {
    "id":19039,
    "rate":20.50321199143469,
    "name":"Clarke County",
    "state":"IA"
  },
  {
    "id":17105,
    "rate":15.050733099779423,
    "name":"Livingston County",
    "state":"IL"
  },
  {
    "id":17103,
    "rate":83.10093622833729,
    "name":"Lee County",
    "state":"IL"
  },
  {
    "id":20071,
    "rate":52.8041074249605,
    "name":"Greeley County",
    "state":"KS"
  },
  {
    "id":29229,
    "rate":44.43363782912412,
    "name":"Wright County",
    "state":"MO"
  },
  {
    "id":17101,
    "rate":34.53587255958798,
    "name":"Lawrence County",
    "state":"IL"
  },
  {
    "id":29095,
    "rate":430.67687742659217,
    "name":"Jackson County",
    "state":"MO"
  },
  {
    "id":8045,
    "rate":43.45298272187683,
    "name":"Garfield County",
    "state":"CO"
  },
  {
    "id":17201,
    "rate":97.21556711872645,
    "name":"Winnebago County",
    "state":"IL"
  },
  {
    "id":17097,
    "rate":204.10928949285352,
    "name":"Lake County",
    "state":"IL"
  },
  {
    "id":54037,
    "rate":1090.243558259722,
    "name":"Jefferson County",
    "state":"WV"
  },
  {
    "id":48237,
    "rate":2.665186007773459,
    "name":"Jack County",
    "state":"TX"
  },
  {
    "id":18017,
    "rate":13.603726836318588,
    "name":"Cass County",
    "state":"IN"
  },
  {
    "id":13169,
    "rate":27.13387740927244,
    "name":"Jones County",
    "state":"GA"
  },
  {
    "id":19023,
    "rate":0.8760098818187887,
    "name":"Butler County",
    "state":"IA"
  },
  {
    "id":26157,
    "rate":37.278128141851745,
    "name":"Tuscola County",
    "state":"MI"
  },
  {
    "id":17085,
    "rate":14.474530831099194,
    "name":"Jo Daviess County",
    "state":"IL"
  },
  {
    "id":48429,
    "rate":11.266457680250783,
    "name":"Stephens County",
    "state":"TX"
  },
  {
    "id":8017,
    "rate":7.21250662427133,
    "name":"Cheyenne County",
    "state":"CO"
  },
  {
    "id":5083,
    "rate":2.4785276073619635,
    "name":"Logan County",
    "state":"AR"
  },
  {
    "id":17069,
    "rate":8.691566831101715,
    "name":"Hardin County",
    "state":"IL"
  },
  {
    "id":51113,
    "rate":0.889679715302491,
    "name":"Madison County",
    "state":"VA"
  },
  {
    "id":22123,
    "rate":8.473839735790023,
    "name":"West Carroll Parish",
    "state":"LA"
  },
  {
    "id":23009,
    "rate":7.298848467067625,
    "name":"Hancock County",
    "state":"ME"
  },
  {
    "id":4001,
    "rate":1.9626668129637501,
    "name":"Apache County",
    "state":"AZ"
  },
  {
    "id":17065,
    "rate":28.674079387852696,
    "name":"Hamilton County",
    "state":"IL"
  },
  {
    "id":29093,
    "rate":26.382386799693013,
    "name":"Iron County",
    "state":"MO"
  },
  {
    "id":37031,
    "rate":991.7881644757226,
    "name":"Carteret County",
    "state":"NC"
  },
  {
    "id":17063,
    "rate":78.80897308075774,
    "name":"Grundy County",
    "state":"IL"
  },
  {
    "id":26117,
    "rate":44.38398959704405,
    "name":"Montcalm County",
    "state":"MI"
  },
  {
    "id":13321,
    "rate":45.19608756404286,
    "name":"Worth County",
    "state":"GA"
  },
  {
    "id":17059,
    "rate":10.400812707794607,
    "name":"Gallatin County",
    "state":"IL"
  },
  {
    "id":17053,
    "rate":68.60122874696388,
    "name":"Ford County",
    "state":"IL"
  },
  {
    "id":48177,
    "rate":44.44544589654999,
    "name":"Gonzales County",
    "state":"TX"
  },
  {
    "id":36015,
    "rate":369.23109681612885,
    "name":"Chemung County",
    "state":"NY"
  },
  {
    "id":9009,
    "rate":537.3363224236173,
    "name":"New Haven County",
    "state":"CT"
  },
  {
    "id":5057,
    "rate":7.9399776035834275,
    "name":"Hempstead County",
    "state":"AR"
  },
  {
    "id":17051,
    "rate":32.95840523113251,
    "name":"Fayette County",
    "state":"IL"
  },
  {
    "id":41013,
    "rate":13.583058732312464,
    "name":"Crook County",
    "state":"OR"
  },
  {
    "id":1109,
    "rate":150.27439024390245,
    "name":"Pike County",
    "state":"AL"
  },
  {
    "id":5081,
    "rate":32.86555598605193,
    "name":"Little River County",
    "state":"AR"
  },
  {
    "id":17185,
    "rate":49.848924547627185,
    "name":"Wabash County",
    "state":"IL"
  },
  {
    "id":28035,
    "rate":1082.4851176907355,
    "name":"Forrest County",
    "state":"MS"
  },
  {
    "id":48085,
    "rate":735.134785952076,
    "name":"Collin County",
    "state":"TX"
  },
  {
    "id":17047,
    "rate":68.51285098796612,
    "name":"Edwards County",
    "state":"IL"
  },
  {
    "id":17045,
    "rate":113.90238528066988,
    "name":"Edgar County",
    "state":"IL"
  },
  {
    "id":17043,
    "rate":682.5929813697428,
    "name":"Dupage County",
    "state":"IL"
  },
  {
    "id":55089,
    "rate":382.1384580029875,
    "name":"Ozaukee County",
    "state":"WI"
  },
  {
    "id":19133,
    "rate":155.72303653467512,
    "name":"Monona County",
    "state":"IA"
  },
  {
    "id":29187,
    "rate":102.24880382775122,
    "name":"St Francois County",
    "state":"MO"
  },
  {
    "id":37159,
    "rate":84.35521879418485,
    "name":"Rowan County",
    "state":"NC"
  },
  {
    "id":17041,
    "rate":33.59570391286809,
    "name":"Douglas County",
    "state":"IL"
  },
  {
    "id":1085,
    "rate":29.810382916053012,
    "name":"Lowndes County",
    "state":"AL"
  },
  {
    "id":6019,
    "rate":279.62917615793475,
    "name":"Fresno County",
    "state":"CA"
  },
  {
    "id":18121,
    "rate":35.205119214586254,
    "name":"Parke County",
    "state":"IN"
  },
  {
    "id":27067,
    "rate":1.4663081676454632,
    "name":"Kandiyohi County",
    "state":"MN"
  },
  {
    "id":17027,
    "rate":27.795412144940475,
    "name":"Clinton County",
    "state":"IL"
  },
  {
    "id":48309,
    "rate":170.0179532464059,
    "name":"Mclennan County",
    "state":"TX"
  },
  {
    "id":27039,
    "rate":9.970845481049562,
    "name":"Dodge County",
    "state":"MN"
  },
  {
    "id":48459,
    "rate":7.618892671205445,
    "name":"Upshur County",
    "state":"TX"
  },
  {
    "id":17033,
    "rate":19.077291486217963,
    "name":"Crawford County",
    "state":"IL"
  },
  {
    "id":19073,
    "rate":7.46097587599607,
    "name":"Greene County",
    "state":"IA"
  },
  {
    "id":28039,
    "rate":133.99090591115774,
    "name":"George County",
    "state":"MS"
  },
  {
    "id":17007,
    "rate":118.21677802524128,
    "name":"Boone County",
    "state":"IL"
  },
  {
    "id":17005,
    "rate":65.3430565802168,
    "name":"Bond County",
    "state":"IL"
  },
  {
    "id":40089,
    "rate":11.946191579644285,
    "name":"McCurtain County",
    "state":"OK"
  },
  {
    "id":24005,
    "rate":445.0693466108691,
    "name":"Baltimore County",
    "state":"MD"
  },
  {
    "id":16013,
    "rate":28.42715231788079,
    "name":"Blaine County",
    "state":"ID"
  },
  {
    "id":5067,
    "rate":92.88265306122447,
    "name":"Jackson County",
    "state":"AR"
  },
  {
    "id":16079,
    "rate":100.46066619418849,
    "name":"Shoshone County",
    "state":"ID"
  },
  {
    "id":46099,
    "rate":1035.1774532650386,
    "name":"Minnehaha County",
    "state":"SD"
  },
  {
    "id":28121,
    "rate":497.8041125243807,
    "name":"Rankin County",
    "state":"MS"
  },
  {
    "id":1007,
    "rate":6.287001855615446,
    "name":"Bibb County",
    "state":"AL"
  },
  {
    "id":18123,
    "rate":129.7637552112821,
    "name":"Perry County",
    "state":"IN"
  },
  {
    "id":39047,
    "rate":35.25545927209705,
    "name":"Fayette County",
    "state":"OH"
  },
  {
    "id":26143,
    "rate":86.54725831223278,
    "name":"Roscommon County",
    "state":"MI"
  },
  {
    "id":5129,
    "rate":4.286429018136334,
    "name":"Searcy County",
    "state":"AR"
  },
  {
    "id":8041,
    "rate":49.16414753052391,
    "name":"El Paso County",
    "state":"CO"
  },
  {
    "id":16077,
    "rate":3.6315721815143336,
    "name":"Power County",
    "state":"ID"
  },
  {
    "id":42127,
    "rate":51.67940408242236,
    "name":"Wayne County",
    "state":"PA"
  },
  {
    "id":24021,
    "rate":283.24319475274183,
    "name":"Frederick County",
    "state":"MD"
  },
  {
    "id":50027,
    "rate":0.8109982748501608,
    "name":"Windsor County",
    "state":"VT"
  },
  {
    "id":5121,
    "rate":79.31376393479358,
    "name":"Randolph County",
    "state":"AR"
  },
  {
    "id":16011,
    "rate":93.65308948629458,
    "name":"Bingham County",
    "state":"ID"
  },
  {
    "id":16075,
    "rate":69.49278877960569,
    "name":"Payette County",
    "state":"ID"
  },
  {
    "id":17131,
    "rate":70.15269535113748,
    "name":"Mercer County",
    "state":"IL"
  },
  {
    "id":37045,
    "rate":90.65446341588473,
    "name":"Cleveland County",
    "state":"NC"
  },
  {
    "id":13279,
    "rate":175.6350810155418,
    "name":"Toombs County",
    "state":"GA"
  },
  {
    "id":51620,
    "rate":236.6776548151636,
    "name":"Franklin City",
    "state":"VA"
  },
  {
    "id":12023,
    "rate":84.2132375667839,
    "name":"Columbia County",
    "state":"FL"
  },
  {
    "id":16073,
    "rate":18.78341660092909,
    "name":"Owyhee County",
    "state":"ID"
  },
  {
    "id":55083,
    "rate":29.506680919294496,
    "name":"Oconto County",
    "state":"WI"
  },
  {
    "id":17183,
    "rate":128.19634985884792,
    "name":"Vermilion County",
    "state":"IL"
  },
  {
    "id":21103,
    "rate":3874.343631860254,
    "name":"Henry County",
    "state":"KY"
  },
  {
    "id":16069,
    "rate":34.810369659145465,
    "name":"Nez Perce County",
    "state":"ID"
  },
  {
    "id":28057,
    "rate":60.19853664798254,
    "name":"Itawamba County",
    "state":"MS"
  },
  {
    "id":42059,
    "rate":59.0639113538494,
    "name":"Greene County",
    "state":"PA"
  },
  {
    "id":19033,
    "rate":2704.9474960536254,
    "name":"Cerro Gordo County",
    "state":"IA"
  },
  {
    "id":16065,
    "rate":15.641985138004243,
    "name":"Madison County",
    "state":"ID"
  },
  {
    "id":19137,
    "rate":210.7861337374503,
    "name":"Montgomery County",
    "state":"IA"
  },
  {
    "id":17073,
    "rate":31.59493519202733,
    "name":"Henry County",
    "state":"IL"
  },
  {
    "id":16055,
    "rate":63.64863630294384,
    "name":"Kootenai County",
    "state":"ID"
  },
  {
    "id":16049,
    "rate":0.6585767424842979,
    "name":"Idaho County",
    "state":"ID"
  },
  {
    "id":13199,
    "rate":17.146275098517545,
    "name":"Meriwether County",
    "state":"GA"
  },
  {
    "id":19001,
    "rate":3.7831004657351963,
    "name":"Adair County",
    "state":"IA"
  },
  {
    "id":16047,
    "rate":18.460830704521555,
    "name":"Gooding County",
    "state":"ID"
  },
  {
    "id":19085,
    "rate":158.53719008264466,
    "name":"Harrison County",
    "state":"IA"
  },
  {
    "id":16041,
    "rate":27.233627351494807,
    "name":"Franklin County",
    "state":"ID"
  },
  {
    "id":16039,
    "rate":21.867628535440286,
    "name":"Elmore County",
    "state":"ID"
  },
  {
    "id":17115,
    "rate":204.99859145970197,
    "name":"Macon County",
    "state":"IL"
  },
  {
    "id":39027,
    "rate":620.3875116540368,
    "name":"Clinton County",
    "state":"OH"
  },
  {
    "id":13297,
    "rate":24.36671497755311,
    "name":"Walton County",
    "state":"GA"
  },
  {
    "id":39063,
    "rate":74.53580446019006,
    "name":"Hancock County",
    "state":"OH"
  },
  {
    "id":15003,
    "rate":531.3801233892931,
    "name":"Honolulu County",
    "state":"HI"
  },
  {
    "id":47145,
    "rate":41.31303110844909,
    "name":"Roane County",
    "state":"TN"
  },
  {
    "id":42061,
    "rate":31.209961319483686,
    "name":"Huntingdon County",
    "state":"PA"
  },
  {
    "id":16021,
    "rate":23.80156898938625,
    "name":"Boundary County",
    "state":"ID"
  },
  {
    "id":38003,
    "rate":88.14764369381639,
    "name":"Barnes County",
    "state":"ND"
  },
  {
    "id":36005,
    "rate":396.3676006293205,
    "name":"Bronx County",
    "state":"NY"
  },
  {
    "id":13001,
    "rate":34.46596659230645,
    "name":"Appling County",
    "state":"GA"
  },
  {
    "id":16019,
    "rate":513.0410741017963,
    "name":"Bonneville County",
    "state":"ID"
  },
  {
    "id":20001,
    "rate":86.23416535492095,
    "name":"Allen County",
    "state":"KS"
  },
  {
    "id":16017,
    "rate":13.156229139367564,
    "name":"Bonner County",
    "state":"ID"
  },
  {
    "id":31125,
    "rate":17.40210640021604,
    "name":"Nance County",
    "state":"NE"
  },
  {
    "id":6083,
    "rate":626.2837335859293,
    "name":"Santa Barbara County",
    "state":"CA"
  },
  {
    "id":13109,
    "rate":59.60694183864916,
    "name":"Evans County",
    "state":"GA"
  },
  {
    "id":28093,
    "rate":16.275999672014645,
    "name":"Marshall County",
    "state":"MS"
  },
  {
    "id":13255,
    "rate":91.16569225222968,
    "name":"Spalding County",
    "state":"GA"
  },
  {
    "id":55113,
    "rate":9.052599758162033,
    "name":"Sawyer County",
    "state":"WI"
  },
  {
    "id":13301,
    "rate":75.79363652705374,
    "name":"Warren County",
    "state":"GA"
  },
  {
    "id":48281,
    "rate":20.487525521637366,
    "name":"Lampasas County",
    "state":"TX"
  },
  {
    "id":13145,
    "rate":5.696808021341183,
    "name":"Harris County",
    "state":"GA"
  },
  {
    "id":18149,
    "rate":81.27688925292064,
    "name":"Starke County",
    "state":"IN"
  },
  {
    "id":42071,
    "rate":136.57493080419033,
    "name":"Lancaster County",
    "state":"PA"
  },
  {
    "id":34011,
    "rate":89.69922810753266,
    "name":"Cumberland County",
    "state":"NJ"
  },
  {
    "id":4007,
    "rate":34.019838949968886,
    "name":"Gila County",
    "state":"AZ"
  },
  {
    "id":47095,
    "rate":9.530053226015838,
    "name":"Lake County",
    "state":"TN"
  },
  {
    "id":16007,
    "rate":31.81185260655459,
    "name":"Bear Lake County",
    "state":"ID"
  },
  {
    "id":55059,
    "rate":81.52068693532193,
    "name":"Kenosha County",
    "state":"WI"
  },
  {
    "id":18047,
    "rate":15.6595318889759,
    "name":"Franklin County",
    "state":"IN"
  },
  {
    "id":12086,
    "rate":540.0525285718643,
    "name":"Miami-Dade County",
    "state":"FL"
  },
  {
    "id":48089,
    "rate":170.27652888566593,
    "name":"Colorado County",
    "state":"TX"
  },
  {
    "id":15007,
    "rate":55.698364768864984,
    "name":"Kauai County",
    "state":"HI"
  },
  {
    "id":25003,
    "rate":62.18359824925132,
    "name":"Berkshire County",
    "state":"MA"
  },
  {
    "id":19187,
    "rate":38.181891391297334,
    "name":"Webster County",
    "state":"IA"
  },
  {
    "id":8029,
    "rate":16.23632960031528,
    "name":"Delta County",
    "state":"CO"
  },
  {
    "id":1021,
    "rate":40.83278043423552,
    "name":"Chilton County",
    "state":"AL"
  },
  {
    "id":13121,
    "rate":1241.6148269338935,
    "name":"Fulton County",
    "state":"GA"
  },
  {
    "id":13309,
    "rate":14.332321699544764,
    "name":"Wheeler County",
    "state":"GA"
  },
  {
    "id":18065,
    "rate":58.13820824620882,
    "name":"Henry County",
    "state":"IN"
  },
  {
    "id":12035,
    "rate":36.051060806009545,
    "name":"Flagler County",
    "state":"FL"
  },
  {
    "id":1081,
    "rate":1609.3709808159952,
    "name":"Lee County",
    "state":"AL"
  },
  {
    "id":54109,
    "rate":105.36062965033763,
    "name":"Wyoming County",
    "state":"WV"
  },
  {
    "id":16087,
    "rate":61.50881386316104,
    "name":"Washington County",
    "state":"ID"
  },
  {
    "id":13303,
    "rate":77.12950088699239,
    "name":"Washington County",
    "state":"GA"
  },
  {
    "id":56013,
    "rate":7.027112462006079,
    "name":"Fremont County",
    "state":"WY"
  },
  {
    "id":55033,
    "rate":5.981106305486001,
    "name":"Dunn County",
    "state":"WI"
  },
  {
    "id":13299,
    "rate":96.54492656503044,
    "name":"Ware County",
    "state":"GA"
  },
  {
    "id":39099,
    "rate":358.72609601038306,
    "name":"Mahoning County",
    "state":"OH"
  },
  {
    "id":13291,
    "rate":84.80284902937478,
    "name":"Union County",
    "state":"GA"
  },
  {
    "id":8035,
    "rate":100.15450002679383,
    "name":"Douglas County",
    "state":"CO"
  },
  {
    "id":13285,
    "rate":54.70046150251198,
    "name":"Troup County",
    "state":"GA"
  },
  {
    "id":38023,
    "rate":36.71742051052396,
    "name":"Divide County",
    "state":"ND"
  },
  {
    "id":17147,
    "rate":7.852426243411886,
    "name":"Piatt County",
    "state":"IL"
  },
  {
    "id":6013,
    "rate":292.77888337326414,
    "name":"Contra Costa County",
    "state":"CA"
  },
  {
    "id":48043,
    "rate":34.330019451048194,
    "name":"Brewster County",
    "state":"TX"
  },
  {
    "id":45047,
    "rate":120.14233958157318,
    "name":"Greenwood County",
    "state":"SC"
  },
  {
    "id":1003,
    "rate":534.5940145150382,
    "name":"Baldwin County",
    "state":"AL"
  },
  {
    "id":13281,
    "rate":32.06350719938972,
    "name":"Towns County",
    "state":"GA"
  },
  {
    "id":13293,
    "rate":71.38944204396014,
    "name":"Upson County",
    "state":"GA"
  },
  {
    "id":28085,
    "rate":88.04585497431776,
    "name":"Lincoln County",
    "state":"MS"
  },
  {
    "id":13275,
    "rate":72.31641589939369,
    "name":"Thomas County",
    "state":"GA"
  },
  {
    "id":13273,
    "rate":11.629717746296096,
    "name":"Terrell County",
    "state":"GA"
  },
  {
    "id":54033,
    "rate":2565.604500491697,
    "name":"Harrison County",
    "state":"WV"
  },
  {
    "id":39081,
    "rate":219.74278315068693,
    "name":"Jefferson County",
    "state":"OH"
  },
  {
    "id":31045,
    "rate":26.79393476600851,
    "name":"Dawes County",
    "state":"NE"
  },
  {
    "id":22057,
    "rate":70.94424710424711,
    "name":"Lafourche Parish",
    "state":"LA"
  },
  {
    "id":16029,
    "rate":61.58142962417095,
    "name":"Caribou County",
    "state":"ID"
  },
  {
    "id":18011,
    "rate":779.0595165549465,
    "name":"Boone County",
    "state":"IN"
  },
  {
    "id":18023,
    "rate":16.64532572746306,
    "name":"Clinton County",
    "state":"IN"
  },
  {
    "id":55081,
    "rate":4.348038237185885,
    "name":"Monroe County",
    "state":"WI"
  },
  {
    "id":13133,
    "rate":63.22650632283659,
    "name":"Greene County",
    "state":"GA"
  },
  {
    "id":13261,
    "rate":167.5770604786444,
    "name":"Sumter County",
    "state":"GA"
  },
  {
    "id":55075,
    "rate":5.973293482452758,
    "name":"Marinette County",
    "state":"WI"
  },
  {
    "id":48403,
    "rate":2.7729487057025506,
    "name":"Sabine County",
    "state":"TX"
  },
  {
    "id":48273,
    "rate":4137.411124922312,
    "name":"Kleberg County",
    "state":"TX"
  },
  {
    "id":31147,
    "rate":7.696867061812025,
    "name":"Richardson County",
    "state":"NE"
  },
  {
    "id":8059,
    "rate":187.93576493573372,
    "name":"Jefferson County",
    "state":"CO"
  },
  {
    "id":21169,
    "rate":60.823399779625355,
    "name":"Metcalfe County",
    "state":"KY"
  },
  {
    "id":8013,
    "rate":901.7060196475749,
    "name":"Boulder County",
    "state":"CO"
  },
  {
    "id":18133,
    "rate":97.07518377962366,
    "name":"Putnam County",
    "state":"IN"
  },
  {
    "id":13017,
    "rate":65.63180393274435,
    "name":"Ben Hill County",
    "state":"GA"
  },
  {
    "id":18097,
    "rate":522.0468091545554,
    "name":"Marion County",
    "state":"IN"
  },
  {
    "id":29133,
    "rate":27.84620761971339,
    "name":"Mississippi County",
    "state":"MO"
  },
  {
    "id":13073,
    "rate":395.3961344639242,
    "name":"Columbia County",
    "state":"GA"
  },
  {
    "id":13251,
    "rate":38.322535211267606,
    "name":"Screven County",
    "state":"GA"
  },
  {
    "id":20207,
    "rate":8.411042944785278,
    "name":"Woodson County",
    "state":"KS"
  },
  {
    "id":17035,
    "rate":63.28273591806874,
    "name":"Cumberland County",
    "state":"IL"
  },
  {
    "id":13249,
    "rate":3.6079374624173184,
    "name":"Schley County",
    "state":"GA"
  },
  {
    "id":4023,
    "rate":9.455020766133282,
    "name":"Santa Cruz County",
    "state":"AZ"
  },
  {
    "id":13247,
    "rate":96.22963447084636,
    "name":"Rockdale County",
    "state":"GA"
  },
  {
    "id":4017,
    "rate":14.92900077589672,
    "name":"Navajo County",
    "state":"AZ"
  },
  {
    "id":13147,
    "rate":73.11440760890837,
    "name":"Hart County",
    "state":"GA"
  },
  {
    "id":13243,
    "rate":24.30623973727422,
    "name":"Randolph County",
    "state":"GA"
  },
  {
    "id":13239,
    "rate":26.73060884070058,
    "name":"Quitman County",
    "state":"GA"
  },
  {
    "id":21005,
    "rate":37.28015510317131,
    "name":"Anderson County",
    "state":"KY"
  },
  {
    "id":45025,
    "rate":40.20824295010845,
    "name":"Chesterfield County",
    "state":"SC"
  },
  {
    "id":13237,
    "rate":24.546571523084918,
    "name":"Putnam County",
    "state":"GA"
  },
  {
    "id":20145,
    "rate":56.2794734558079,
    "name":"Pawnee County",
    "state":"KS"
  },
  {
    "id":1065,
    "rate":32.08057179987004,
    "name":"Hale County",
    "state":"AL"
  },
  {
    "id":13233,
    "rate":82.37240742091569,
    "name":"Polk County",
    "state":"GA"
  },
  {
    "id":5103,
    "rate":52.46035181614261,
    "name":"Ouachita County",
    "state":"AR"
  },
  {
    "id":13229,
    "rate":38.51340589328379,
    "name":"Pierce County",
    "state":"GA"
  },
  {
    "id":51077,
    "rate":0.8195533302589103,
    "name":"Grayson County",
    "state":"VA"
  },
  {
    "id":17193,
    "rate":660.0342888492661,
    "name":"White County",
    "state":"IL"
  },
  {
    "id":13287,
    "rate":71.42430397897,
    "name":"Turner County",
    "state":"GA"
  },
  {
    "id":13219,
    "rate":154.92004773269687,
    "name":"Oconee County",
    "state":"GA"
  },
  {
    "id":1017,
    "rate":83.44178132425854,
    "name":"Chambers County",
    "state":"AL"
  },
  {
    "id":19015,
    "rate":124.55591979873445,
    "name":"Boone County",
    "state":"IA"
  },
  {
    "id":37007,
    "rate":20.989715760312702,
    "name":"Anson County",
    "state":"NC"
  },
  {
    "id":13217,
    "rate":31.116555793141682,
    "name":"Newton County",
    "state":"GA"
  },
  {
    "id":26015,
    "rate":38.695173768049706,
    "name":"Barry County",
    "state":"MI"
  },
  {
    "id":39075,
    "rate":2.999188029230948,
    "name":"Holmes County",
    "state":"OH"
  },
  {
    "id":19055,
    "rate":6.378329160027317,
    "name":"Delaware County",
    "state":"IA"
  },
  {
    "id":55133,
    "rate":208.70794629963115,
    "name":"Waukesha County",
    "state":"WI"
  },
  {
    "id":27105,
    "rate":3.520808341792009,
    "name":"Nobles County",
    "state":"MN"
  },
  {
    "id":13215,
    "rate":578.5782914502531,
    "name":"Muscogee County",
    "state":"GA"
  },
  {
    "id":13245,
    "rate":1111.6314132081652,
    "name":"Richmond County",
    "state":"GA"
  },
  {
    "id":2110,
    "rate":22.804603375397246,
    "name":"Juneau Borough",
    "state":"AK"
  },
  {
    "id":19047,
    "rate":43.990523517855074,
    "name":"Crawford County",
    "state":"IA"
  },
  {
    "id":12133,
    "rate":48.865913022488634,
    "name":"Washington County",
    "state":"FL"
  },
  {
    "id":13211,
    "rate":73.20035908657356,
    "name":"Morgan County",
    "state":"GA"
  },
  {
    "id":49015,
    "rate":11.850288964315201,
    "name":"Emery County",
    "state":"UT"
  },
  {
    "id":18003,
    "rate":165.38810305072704,
    "name":"Allen County",
    "state":"IN"
  },
  {
    "id":51021,
    "rate":35.803278688524586,
    "name":"Bland County",
    "state":"VA"
  },
  {
    "id":13209,
    "rate":16.349758671006846,
    "name":"Montgomery County",
    "state":"GA"
  },
  {
    "id":29131,
    "rate":61.00351472548781,
    "name":"Miller County",
    "state":"MO"
  },
  {
    "id":45043,
    "rate":43.41317762590406,
    "name":"Georgetown County",
    "state":"SC"
  },
  {
    "id":8115,
    "rate":70.03365586874213,
    "name":"Sedgwick County",
    "state":"CO"
  },
  {
    "id":55001,
    "rate":46.55300077942322,
    "name":"Adams County",
    "state":"WI"
  },
  {
    "id":8003,
    "rate":27.637311487618696,
    "name":"Alamosa County",
    "state":"CO"
  },
  {
    "id":13207,
    "rate":96.0794285927976,
    "name":"Monroe County",
    "state":"GA"
  },
  {
    "id":48357,
    "rate":4.627624517465398,
    "name":"Ochiltree County",
    "state":"TX"
  },
  {
    "id":39011,
    "rate":113.59351153359785,
    "name":"Auglaize County",
    "state":"OH"
  },
  {
    "id":31119,
    "rate":71.55201867775186,
    "name":"Madison County",
    "state":"NE"
  },
  {
    "id":20025,
    "rate":37.67709291628335,
    "name":"Clark County",
    "state":"KS"
  },
  {
    "id":13197,
    "rate":50.08684721746086,
    "name":"Marion County",
    "state":"GA"
  },
  {
    "id":27163,
    "rate":3.2649357671888315,
    "name":"Washington County",
    "state":"MN"
  },
  {
    "id":51775,
    "rate":266.1709176545722,
    "name":"Salem City",
    "state":"VA"
  },
  {
    "id":37133,
    "rate":29.054805098755754,
    "name":"Onslow County",
    "state":"NC"
  },
  {
    "id":26123,
    "rate":26.267878737333724,
    "name":"Newaygo County",
    "state":"MI"
  },
  {
    "id":19077,
    "rate":9.608207223099063,
    "name":"Guthrie County",
    "state":"IA"
  },
  {
    "id":18049,
    "rate":45.436991869918685,
    "name":"Fulton County",
    "state":"IN"
  },
  {
    "id":21035,
    "rate":91.66631788218059,
    "name":"Calloway County",
    "state":"KY"
  },
  {
    "id":21011,
    "rate":51.086532757013295,
    "name":"Bath County",
    "state":"KY"
  },
  {
    "id":17199,
    "rate":228.84978283660325,
    "name":"Williamson County",
    "state":"IL"
  },
  {
    "id":18135,
    "rate":19.996129281981812,
    "name":"Randolph County",
    "state":"IN"
  },
  {
    "id":13181,
    "rate":5.148005148005148,
    "name":"Lincoln County",
    "state":"GA"
  },
  {
    "id":1051,
    "rate":32.9964424320828,
    "name":"Elmore County",
    "state":"AL"
  },
  {
    "id":17095,
    "rate":927.4918759796617,
    "name":"Knox County",
    "state":"IL"
  },
  {
    "id":6087,
    "rate":47.88281226559454,
    "name":"Santa Cruz County",
    "state":"CA"
  },
  {
    "id":13189,
    "rate":66.2443816319911,
    "name":"McDuffie County",
    "state":"GA"
  },
  {
    "id":16043,
    "rate":1.0139456044379382,
    "name":"Fremont County",
    "state":"ID"
  },
  {
    "id":13175,
    "rate":144.70773400041696,
    "name":"Laurens County",
    "state":"GA"
  },
  {
    "id":19105,
    "rate":44.5618119210437,
    "name":"Jones County",
    "state":"IA"
  },
  {
    "id":21071,
    "rate":465.4651133082955,
    "name":"Floyd County",
    "state":"KY"
  },
  {
    "id":51109,
    "rate":81.28293104991496,
    "name":"Louisa County",
    "state":"VA"
  },
  {
    "id":38057,
    "rate":38.49634692434598,
    "name":"Mercer County",
    "state":"ND"
  },
  {
    "id":34023,
    "rate":240.8140850776343,
    "name":"Middlesex County",
    "state":"NJ"
  },
  {
    "id":13213,
    "rate":23.253794994161552,
    "name":"Murray County",
    "state":"GA"
  },
  {
    "id":12089,
    "rate":100.14657020364415,
    "name":"Nassau County",
    "state":"FL"
  },
  {
    "id":13167,
    "rate":54.88868650070836,
    "name":"Johnson County",
    "state":"GA"
  },
  {
    "id":29223,
    "rate":6.997832099872916,
    "name":"Wayne County",
    "state":"MO"
  },
  {
    "id":54103,
    "rate":50.37088915956151,
    "name":"Wetzel County",
    "state":"WV"
  },
  {
    "id":47073,
    "rate":89.09559901768519,
    "name":"Hawkins County",
    "state":"TN"
  },
  {
    "id":20073,
    "rate":72.64970524356191,
    "name":"Greenwood County",
    "state":"KS"
  },
  {
    "id":28047,
    "rate":151.4147792101854,
    "name":"Harrison County",
    "state":"MS"
  },
  {
    "id":53015,
    "rate":18.248228971182098,
    "name":"Cowlitz County",
    "state":"WA"
  },
  {
    "id":48249,
    "rate":102.96705407741813,
    "name":"Jim Wells County",
    "state":"TX"
  },
  {
    "id":45085,
    "rate":183.19257819729768,
    "name":"Sumter County",
    "state":"SC"
  },
  {
    "id":21239,
    "rate":28.149686489077034,
    "name":"Woodford County",
    "state":"KY"
  },
  {
    "id":53057,
    "rate":28.971314774797676,
    "name":"Skagit County",
    "state":"WA"
  },
  {
    "id":1067,
    "rate":22.973098330241186,
    "name":"Henry County",
    "state":"AL"
  },
  {
    "id":13159,
    "rate":47.08517210944397,
    "name":"Jasper County",
    "state":"GA"
  },
  {
    "id":13155,
    "rate":46.45,
    "name":"Irwin County",
    "state":"GA"
  },
  {
    "id":5107,
    "rate":22.688715578663587,
    "name":"Phillips County",
    "state":"AR"
  },
  {
    "id":13153,
    "rate":129.27038303693558,
    "name":"Houston County",
    "state":"GA"
  },
  {
    "id":39141,
    "rate":65.92979286313478,
    "name":"Ross County",
    "state":"OH"
  },
  {
    "id":18093,
    "rate":29.078510153111093,
    "name":"Lawrence County",
    "state":"IN"
  },
  {
    "id":47103,
    "rate":183.06226821390126,
    "name":"Lincoln County",
    "state":"TN"
  },
  {
    "id":17093,
    "rate":26.151931948029954,
    "name":"Kendall County",
    "state":"IL"
  },
  {
    "id":30017,
    "rate":15.835373575348246,
    "name":"Custer County",
    "state":"MT"
  },
  {
    "id":21065,
    "rate":79.85779373187907,
    "name":"Estill County",
    "state":"KY"
  },
  {
    "id":35013,
    "rate":75.88470085150873,
    "name":"Dona Ana County",
    "state":"NM"
  },
  {
    "id":8063,
    "rate":2.799950574570617,
    "name":"Kit Carson County",
    "state":"CO"
  },
  {
    "id":15001,
    "rate":73.8815322896489,
    "name":"Hawaii County",
    "state":"HI"
  },
  {
    "id":26151,
    "rate":50.984141239866695,
    "name":"Sanilac County",
    "state":"MI"
  },
  {
    "id":19149,
    "rate":18.57923716892408,
    "name":"Plymouth County",
    "state":"IA"
  },
  {
    "id":17083,
    "rate":136.93163821925037,
    "name":"Jersey County",
    "state":"IL"
  },
  {
    "id":28091,
    "rate":86.91302371391772,
    "name":"Marion County",
    "state":"MS"
  },
  {
    "id":51105,
    "rate":26.02490308939269,
    "name":"Lee County",
    "state":"VA"
  },
  {
    "id":13143,
    "rate":43.865365647456684,
    "name":"Haralson County",
    "state":"GA"
  },
  {
    "id":22071,
    "rate":908.221478413797,
    "name":"Orleans Parish",
    "state":"LA"
  },
  {
    "id":53061,
    "rate":56.374010494691234,
    "name":"Snohomish County",
    "state":"WA"
  },
  {
    "id":26021,
    "rate":59.77424915255327,
    "name":"Berrien County",
    "state":"MI"
  },
  {
    "id":19049,
    "rate":121.20325563982753,
    "name":"Dallas County",
    "state":"IA"
  },
  {
    "id":48211,
    "rate":140.67368936795688,
    "name":"Hemphill County",
    "state":"TX"
  },
  {
    "id":20085,
    "rate":36.04922665080309,
    "name":"Jackson County",
    "state":"KS"
  },
  {
    "id":13141,
    "rate":7.598006644518273,
    "name":"Hancock County",
    "state":"GA"
  },
  {
    "id":22079,
    "rate":257.7520418436013,
    "name":"Rapides Parish",
    "state":"LA"
  },
  {
    "id":13137,
    "rate":35.80424729079907,
    "name":"Habersham County",
    "state":"GA"
  },
  {
    "id":13195,
    "rate":15.334784781212075,
    "name":"Madison County",
    "state":"GA"
  },
  {
    "id":26135,
    "rate":37.31457800511509,
    "name":"Oscoda County",
    "state":"MI"
  },
  {
    "id":48055,
    "rate":9.28469943943582,
    "name":"Caldwell County",
    "state":"TX"
  },
  {
    "id":26087,
    "rate":40.95198675496689,
    "name":"Lapeer County",
    "state":"MI"
  },
  {
    "id":13129,
    "rate":104.4449228561177,
    "name":"Gordon County",
    "state":"GA"
  },
  {
    "id":16001,
    "rate":291.82398243052506,
    "name":"Ada County",
    "state":"ID"
  },
  {
    "id":13127,
    "rate":50.54137845849802,
    "name":"Glynn County",
    "state":"GA"
  },
  {
    "id":1053,
    "rate":53.46746215306981,
    "name":"Escambia County",
    "state":"AL"
  },
  {
    "id":42021,
    "rate":175.96215670065192,
    "name":"Cambria County",
    "state":"PA"
  },
  {
    "id":29015,
    "rate":83.78837430108662,
    "name":"Benton County",
    "state":"MO"
  },
  {
    "id":13099,
    "rate":60.63837812352664,
    "name":"Early County",
    "state":"GA"
  },
  {
    "id":1039,
    "rate":35.71318998122141,
    "name":"Covington County",
    "state":"AL"
  },
  {
    "id":32021,
    "rate":4.54954954954955,
    "name":"Mineral County",
    "state":"NV"
  },
  {
    "id":12061,
    "rate":323.70995960400444,
    "name":"Indian River County",
    "state":"FL"
  },
  {
    "id":12079,
    "rate":33.84879725085911,
    "name":"Madison County",
    "state":"FL"
  },
  {
    "id":13227,
    "rate":5091.821872015281,
    "name":"Pickens County",
    "state":"GA"
  },
  {
    "id":13095,
    "rate":378.2664847369432,
    "name":"Dougherty County",
    "state":"GA"
  },
  {
    "id":18177,
    "rate":117.18696523379795,
    "name":"Wayne County",
    "state":"IN"
  },
  {
    "id":19071,
    "rate":33.82814690215867,
    "name":"Fremont County",
    "state":"IA"
  },
  {
    "id":24025,
    "rate":362.3293096792864,
    "name":"Harford County",
    "state":"MD"
  },
  {
    "id":13093,
    "rate":31.54125366466564,
    "name":"Dooly County",
    "state":"GA"
  },
  {
    "id":37171,
    "rate":85.18717377120484,
    "name":"Surry County",
    "state":"NC"
  },
  {
    "id":12021,
    "rate":449.9862109573319,
    "name":"Collier County",
    "state":"FL"
  },
  {
    "id":6103,
    "rate":55.854765028531695,
    "name":"Tehama County",
    "state":"CA"
  },
  {
    "id":13091,
    "rate":111.83018779562592,
    "name":"Dodge County",
    "state":"GA"
  },
  {
    "id":5015,
    "rate":1.3609681861004421,
    "name":"Carroll County",
    "state":"AR"
  },
  {
    "id":13075,
    "rate":56.37345038258497,
    "name":"Cook County",
    "state":"GA"
  },
  {
    "id":13071,
    "rate":241.78913114220632,
    "name":"Colquitt County",
    "state":"GA"
  },
  {
    "id":1005,
    "rate":61.18664654569547,
    "name":"Barbour County",
    "state":"AL"
  },
  {
    "id":40147,
    "rate":54.53761361438794,
    "name":"Washington County",
    "state":"OK"
  },
  {
    "id":1119,
    "rate":48.800984266646786,
    "name":"Sumter County",
    "state":"AL"
  },
  {
    "id":13055,
    "rate":13.566365477488706,
    "name":"Chattooga County",
    "state":"GA"
  },
  {
    "id":6075,
    "rate":783.7844329997562,
    "name":"San Francisco County",
    "state":"CA"
  },
  {
    "id":29510,
    "rate":1252.83324041419,
    "name":"St. Louis City",
    "state":"MO"
  },
  {
    "id":48093,
    "rate":72.16572093699983,
    "name":"Comanche County",
    "state":"TX"
  },
  {
    "id":5099,
    "rate":10.54251375940694,
    "name":"Nevada County",
    "state":"AR"
  },
  {
    "id":13113,
    "rate":2266.606039168963,
    "name":"Fayette County",
    "state":"GA"
  },
  {
    "id":18091,
    "rate":98.68322567876352,
    "name":"La Porte County",
    "state":"IN"
  },
  {
    "id":13163,
    "rate":52.32188527584946,
    "name":"Jefferson County",
    "state":"GA"
  },
  {
    "id":19083,
    "rate":81.3626424214524,
    "name":"Hardin County",
    "state":"IA"
  },
  {
    "id":40145,
    "rate":10.915769964131899,
    "name":"Wagoner County",
    "state":"OK"
  },
  {
    "id":13151,
    "rate":247.5676803730515,
    "name":"Henry County",
    "state":"GA"
  },
  {
    "id":5005,
    "rate":59.09487060885654,
    "name":"Baxter County",
    "state":"AR"
  },
  {
    "id":12123,
    "rate":59.734816834513374,
    "name":"Taylor County",
    "state":"FL"
  },
  {
    "id":19135,
    "rate":52.18684177920953,
    "name":"Monroe County",
    "state":"IA"
  },
  {
    "id":40115,
    "rate":16.775393774029514,
    "name":"Ottawa County",
    "state":"OK"
  },
  {
    "id":13033,
    "rate":72.14242476651674,
    "name":"Burke County",
    "state":"GA"
  },
  {
    "id":47185,
    "rate":101.52225633154262,
    "name":"White County",
    "state":"TN"
  },
  {
    "id":24045,
    "rate":589.4542758181386,
    "name":"Wicomico County",
    "state":"MD"
  },
  {
    "id":51810,
    "rate":282.86329915270005,
    "name":"Virginia Beach City",
    "state":"VA"
  },
  {
    "id":13027,
    "rate":43.41764819463217,
    "name":"Brooks County",
    "state":"GA"
  },
  {
    "id":42017,
    "rate":163.7748028151243,
    "name":"Bucks County",
    "state":"PA"
  },
  {
    "id":13043,
    "rate":40.12584269662921,
    "name":"Candler County",
    "state":"GA"
  },
  {
    "id":47109,
    "rate":136.4934469450919,
    "name":"McNairy County",
    "state":"TN"
  },
  {
    "id":47085,
    "rate":5.072210065645514,
    "name":"Humphreys County",
    "state":"TN"
  },
  {
    "id":29151,
    "rate":13.15800865800866,
    "name":"Osage County",
    "state":"MO"
  },
  {
    "id":45083,
    "rate":151.56275028517365,
    "name":"Spartanburg County",
    "state":"SC"
  },
  {
    "id":18105,
    "rate":800.0502516119448,
    "name":"Monroe County",
    "state":"IN"
  },
  {
    "id":19031,
    "rate":11.99620081411126,
    "name":"Cedar County",
    "state":"IA"
  },
  {
    "id":13021,
    "rate":749.9132433539922,
    "name":"Bibb County",
    "state":"GA"
  },
  {
    "id":20197,
    "rate":8.626389284696495,
    "name":"Wabaunsee County",
    "state":"KS"
  },
  {
    "id":8073,
    "rate":12.357693720161587,
    "name":"Lincoln County",
    "state":"CO"
  },
  {
    "id":39069,
    "rate":38.12687099073415,
    "name":"Henry County",
    "state":"OH"
  },
  {
    "id":13165,
    "rate":8.549217124712582,
    "name":"Jenkins County",
    "state":"GA"
  },
  {
    "id":6035,
    "rate":9.007393331155912,
    "name":"Lassen County",
    "state":"CA"
  },
  {
    "id":13087,
    "rate":85.02894803918,
    "name":"Decatur County",
    "state":"GA"
  },
  {
    "id":11001,
    "rate":1161.754125724371,
    "name":"District of Columbia",
    "state":"DC"
  },
  {
    "id":6027,
    "rate":1.665942658557776,
    "name":"Inyo County",
    "state":"CA"
  },
  {
    "id":6021,
    "rate":28.985968931204805,
    "name":"Glenn County",
    "state":"CA"
  },
  {
    "id":12075,
    "rate":101.23809285696429,
    "name":"Levy County",
    "state":"FL"
  },
  {
    "id":1071,
    "rate":45.6441336148394,
    "name":"Jackson County",
    "state":"AL"
  },
  {
    "id":13019,
    "rate":24.43686722971201,
    "name":"Berrien County",
    "state":"GA"
  },
  {
    "id":6105,
    "rate":23.186365320489074,
    "name":"Trinity County",
    "state":"CA"
  },
  {
    "id":13013,
    "rate":940.7052771087774,
    "name":"Bartow County",
    "state":"GA"
  },
  {
    "id":21113,
    "rate":74.1948631035248,
    "name":"Jessamine County",
    "state":"KY"
  },
  {
    "id":38053,
    "rate":8.16195856873823,
    "name":"McKenzie County",
    "state":"ND"
  },
  {
    "id":36047,
    "rate":204.27036923115173,
    "name":"Kings County",
    "state":"NY"
  },
  {
    "id":13003,
    "rate":15.719655632351156,
    "name":"Atkinson County",
    "state":"GA"
  },
  {
    "id":12129,
    "rate":42.03095091327905,
    "name":"Wakulla County",
    "state":"FL"
  },
  {
    "id":16045,
    "rate":108.62209441648695,
    "name":"Gem County",
    "state":"ID"
  },
  {
    "id":55013,
    "rate":3.004493065051768,
    "name":"Burnett County",
    "state":"WI"
  },
  {
    "id":6069,
    "rate":52.56299344129697,
    "name":"San Benito County",
    "state":"CA"
  },
  {
    "id":29043,
    "rate":48.21348441358216,
    "name":"Christian County",
    "state":"MO"
  },
  {
    "id":12125,
    "rate":135.5699192860423,
    "name":"Union County",
    "state":"FL"
  },
  {
    "id":12121,
    "rate":34.928171470534245,
    "name":"Suwannee County",
    "state":"FL"
  },
  {
    "id":28089,
    "rate":717.9656576528995,
    "name":"Madison County",
    "state":"MS"
  },
  {
    "id":17077,
    "rate":105.06709403128839,
    "name":"Jackson County",
    "state":"IL"
  },
  {
    "id":20151,
    "rate":43.20731582711761,
    "name":"Pratt County",
    "state":"KS"
  },
  {
    "id":48231,
    "rate":30.213505177099222,
    "name":"Hunt County",
    "state":"TX"
  },
  {
    "id":5021,
    "rate":25.342105263157894,
    "name":"Clay County",
    "state":"AR"
  },
  {
    "id":12097,
    "rate":89.05066269855006,
    "name":"Osceola County",
    "state":"FL"
  },
  {
    "id":34021,
    "rate":736.3241992429356,
    "name":"Mercer County",
    "state":"NJ"
  },
  {
    "id":8077,
    "rate":36.922504129322256,
    "name":"Mesa County",
    "state":"CO"
  },
  {
    "id":12119,
    "rate":45.28607412738396,
    "name":"Sumter County",
    "state":"FL"
  },
  {
    "id":38019,
    "rate":10.035505959928988,
    "name":"Cavalier County",
    "state":"ND"
  },
  {
    "id":13305,
    "rate":6.074874057489054,
    "name":"Wayne County",
    "state":"GA"
  },
  {
    "id":18157,
    "rate":670.6954764844547,
    "name":"Tippecanoe County",
    "state":"IN"
  },
  {
    "id":18143,
    "rate":86.14068281197451,
    "name":"Scott County",
    "state":"IN"
  },
  {
    "id":48189,
    "rate":62.100726952307504,
    "name":"Hale County",
    "state":"TX"
  },
  {
    "id":1009,
    "rate":35.481748285654916,
    "name":"Blount County",
    "state":"AL"
  },
  {
    "id":31097,
    "rate":59.25832687838885,
    "name":"Johnson County",
    "state":"NE"
  },
  {
    "id":10001,
    "rate":74.68598284685028,
    "name":"Kent County",
    "state":"DE"
  },
  {
    "id":13063,
    "rate":55.208842717265156,
    "name":"Clayton County",
    "state":"GA"
  },
  {
    "id":42083,
    "rate":54.97687005597445,
    "name":"McKean County",
    "state":"PA"
  },
  {
    "id":1013,
    "rate":66.77789210642364,
    "name":"Butler County",
    "state":"AL"
  },
  {
    "id":29107,
    "rate":27.53511129904256,
    "name":"Lafayette County",
    "state":"MO"
  },
  {
    "id":45059,
    "rate":60.48024389507683,
    "name":"Laurens County",
    "state":"SC"
  },
  {
    "id":40131,
    "rate":62.99881282152751,
    "name":"Rogers County",
    "state":"OK"
  },
  {
    "id":4013,
    "rate":281.0106577242774,
    "name":"Maricopa County",
    "state":"AZ"
  },
  {
    "id":26113,
    "rate":17.448294207621203,
    "name":"Missaukee County",
    "state":"MI"
  },
  {
    "id":55067,
    "rate":51.70155608495108,
    "name":"Langlade County",
    "state":"WI"
  },
  {
    "id":37191,
    "rate":763.6922508513782,
    "name":"Wayne County",
    "state":"NC"
  },
  {
    "id":35027,
    "rate":1.4197347585114806,
    "name":"Lincoln County",
    "state":"NM"
  },
  {
    "id":20117,
    "rate":16.40274190343731,
    "name":"Marshall County",
    "state":"KS"
  },
  {
    "id":12113,
    "rate":82.13184509905442,
    "name":"Santa Rosa County",
    "state":"FL"
  },
  {
    "id":30063,
    "rate":54.59191024186431,
    "name":"Missoula County",
    "state":"MT"
  },
  {
    "id":22041,
    "rate":48.25207393392518,
    "name":"Franklin Parish",
    "state":"LA"
  },
  {
    "id":12111,
    "rate":527.129204151517,
    "name":"St. Lucie County",
    "state":"FL"
  },
  {
    "id":53063,
    "rate":671.749722516522,
    "name":"Spokane County",
    "state":"WA"
  },
  {
    "id":30085,
    "rate":9.429490124023886,
    "name":"Roosevelt County",
    "state":"MT"
  },
  {
    "id":37087,
    "rate":32.83301010513423,
    "name":"Haywood County",
    "state":"NC"
  },
  {
    "id":21145,
    "rate":672.894356005789,
    "name":"McCracken County",
    "state":"KY"
  },
  {
    "id":28135,
    "rate":4.362047275375753,
    "name":"Tallahatchie County",
    "state":"MS"
  },
  {
    "id":22091,
    "rate":47.47643219724437,
    "name":"St Helena Parish",
    "state":"LA"
  },
  {
    "id":5135,
    "rate":3.9494517093766497,
    "name":"Sharp County",
    "state":"AR"
  },
  {
    "id":6081,
    "rate":235.02137057907154,
    "name":"San Mateo County",
    "state":"CA"
  },
  {
    "id":12105,
    "rate":484.11691816994795,
    "name":"Polk County",
    "state":"FL"
  },
  {
    "id":5141,
    "rate":21.839113960944328,
    "name":"Van Buren County",
    "state":"AR"
  },
  {
    "id":12101,
    "rate":412.10431700537987,
    "name":"Pasco County",
    "state":"FL"
  },
  {
    "id":21187,
    "rate":99.621782362234,
    "name":"Owen County",
    "state":"KY"
  },
  {
    "id":19017,
    "rate":17.129951355107714,
    "name":"Bremer County",
    "state":"IA"
  },
  {
    "id":48049,
    "rate":108.06006815120057,
    "name":"Brown County",
    "state":"TX"
  },
  {
    "id":26063,
    "rate":99.93008069980904,
    "name":"Huron County",
    "state":"MI"
  },
  {
    "id":1115,
    "rate":42.476486819702934,
    "name":"St. Clair County",
    "state":"AL"
  },
  {
    "id":13009,
    "rate":123.61597244645354,
    "name":"Baldwin County",
    "state":"GA"
  },
  {
    "id":18175,
    "rate":37.50080572963294,
    "name":"Washington County",
    "state":"IN"
  },
  {
    "id":39007,
    "rate":86.80653075879678,
    "name":"Ashtabula County",
    "state":"OH"
  },
  {
    "id":29143,
    "rate":31.863737215217284,
    "name":"New Madrid County",
    "state":"MO"
  },
  {
    "id":17029,
    "rate":201.20359493576476,
    "name":"Coles County",
    "state":"IL"
  },
  {
    "id":30073,
    "rate":26.7188761504925,
    "name":"Pondera County",
    "state":"MT"
  },
  {
    "id":13179,
    "rate":20.643972412105644,
    "name":"Liberty County",
    "state":"GA"
  },
  {
    "id":45045,
    "rate":217.45808320371677,
    "name":"Greenville County",
    "state":"SC"
  },
  {
    "id":31059,
    "rate":65.97599164926932,
    "name":"Fillmore County",
    "state":"NE"
  },
  {
    "id":8007,
    "rate":30.41883090114602,
    "name":"Archuleta County",
    "state":"CO"
  },
  {
    "id":8107,
    "rate":7.4611108717197405,
    "name":"Routt County",
    "state":"CO"
  },
  {
    "id":29091,
    "rate":67.29530796120329,
    "name":"Howell County",
    "state":"MO"
  },
  {
    "id":39101,
    "rate":160.1096097229561,
    "name":"Marion County",
    "state":"OH"
  },
  {
    "id":20103,
    "rate":99.8604124586705,
    "name":"Leavenworth County",
    "state":"KS"
  },
  {
    "id":1077,
    "rate":129.88424277731025,
    "name":"Lauderdale County",
    "state":"AL"
  },
  {
    "id":12093,
    "rate":30.320987654320998,
    "name":"Okeechobee County",
    "state":"FL"
  },
  {
    "id":26065,
    "rate":350.8349393492794,
    "name":"Ingham County",
    "state":"MI"
  },
  {
    "id":26145,
    "rate":156.64756793834627,
    "name":"Saginaw County",
    "state":"MI"
  },
  {
    "id":12091,
    "rate":315.4446352336993,
    "name":"Okaloosa County",
    "state":"FL"
  },
  {
    "id":47041,
    "rate":183.6918604651163,
    "name":"De Kalb County",
    "state":"TN"
  },
  {
    "id":19091,
    "rate":116.28788657145789,
    "name":"Humboldt County",
    "state":"IA"
  },
  {
    "id":29177,
    "rate":99.92670656605084,
    "name":"Ray County",
    "state":"MO"
  },
  {
    "id":55115,
    "rate":3.888661875345528,
    "name":"Shawano County",
    "state":"WI"
  },
  {
    "id":12071,
    "rate":247.1512803338977,
    "name":"Lee County",
    "state":"FL"
  },
  {
    "id":29075,
    "rate":24.97279011619356,
    "name":"Gentry County",
    "state":"MO"
  },
  {
    "id":20181,
    "rate":38.372244897959185,
    "name":"Sherman County",
    "state":"KS"
  },
  {
    "id":55129,
    "rate":8.554467950742028,
    "name":"Washburn County",
    "state":"WI"
  },
  {
    "id":18163,
    "rate":726.3487866534637,
    "name":"Vanderburgh County",
    "state":"IN"
  },
  {
    "id":12067,
    "rate":12.937968643490118,
    "name":"Lafayette County",
    "state":"FL"
  },
  {
    "id":39139,
    "rate":86.62870754070546,
    "name":"Richland County",
    "state":"OH"
  },
  {
    "id":28023,
    "rate":42.8808729918157,
    "name":"Clarke County",
    "state":"MS"
  },
  {
    "id":21109,
    "rate":24.20514363062115,
    "name":"Jackson County",
    "state":"KY"
  },
  {
    "id":48103,
    "rate":9.719728486971754,
    "name":"Crane County",
    "state":"TX"
  },
  {
    "id":1033,
    "rate":341.2468562407062,
    "name":"Colbert County",
    "state":"AL"
  },
  {
    "id":41005,
    "rate":29.742869061897057,
    "name":"Clackamas County",
    "state":"OR"
  },
  {
    "id":12051,
    "rate":79.59109483627874,
    "name":"Hendry County",
    "state":"FL"
  },
  {
    "id":47187,
    "rate":42.76620544247994,
    "name":"Williamson County",
    "state":"TN"
  },
  {
    "id":39163,
    "rate":27.68155369152875,
    "name":"Vinton County",
    "state":"OH"
  },
  {
    "id":29195,
    "rate":31.233810497614183,
    "name":"Saline County",
    "state":"MO"
  },
  {
    "id":12045,
    "rate":21.596043395022335,
    "name":"Gulf County",
    "state":"FL"
  },
  {
    "id":48395,
    "rate":28.56094602789569,
    "name":"Robertson County",
    "state":"TX"
  },
  {
    "id":37149,
    "rate":66.01837218490715,
    "name":"Polk County",
    "state":"NC"
  },
  {
    "id":5115,
    "rate":54.31653299743291,
    "name":"Pope County",
    "state":"AR"
  },
  {
    "id":40049,
    "rate":35.30619728639531,
    "name":"Garvin County",
    "state":"OK"
  },
  {
    "id":6099,
    "rate":92.80585060539987,
    "name":"Stanislaus County",
    "state":"CA"
  },
  {
    "id":17001,
    "rate":187.5651423384276,
    "name":"Adams County",
    "state":"IL"
  },
  {
    "id":51009,
    "rate":103.70134073046691,
    "name":"Amherst County",
    "state":"VA"
  },
  {
    "id":12037,
    "rate":35.94036500728301,
    "name":"Franklin County",
    "state":"FL"
  },
  {
    "id":12031,
    "rate":755.6577087083191,
    "name":"Duval County",
    "state":"FL"
  },
  {
    "id":46015,
    "rate":64.33823529411764,
    "name":"Brule County",
    "state":"SD"
  },
  {
    "id":29099,
    "rate":142.7231011076683,
    "name":"Jefferson County",
    "state":"MO"
  },
  {
    "id":37121,
    "rate":6.793778876813952,
    "name":"Mitchell County",
    "state":"NC"
  },
  {
    "id":22113,
    "rate":38.76167746334812,
    "name":"Vermilion Parish",
    "state":"LA"
  },
  {
    "id":47143,
    "rate":52.76782121521651,
    "name":"Rhea County",
    "state":"TN"
  },
  {
    "id":20205,
    "rate":391.9695142011186,
    "name":"Wilson County",
    "state":"KS"
  },
  {
    "id":12027,
    "rate":21.421787307526262,
    "name":"Desoto County",
    "state":"FL"
  },
  {
    "id":26045,
    "rate":84.0303608476586,
    "name":"Eaton County",
    "state":"MI"
  },
  {
    "id":31145,
    "rate":154.4075183873604,
    "name":"Red Willow County",
    "state":"NE"
  },
  {
    "id":6101,
    "rate":186.6677937804451,
    "name":"Sutter County",
    "state":"CA"
  },
  {
    "id":27069,
    "rate":7.043285238623752,
    "name":"Kittson County",
    "state":"MN"
  },
  {
    "id":48339,
    "rate":226.81834766315038,
    "name":"Montgomery County",
    "state":"TX"
  },
  {
    "id":20021,
    "rate":13.831511496419148,
    "name":"Cherokee County",
    "state":"KS"
  },
  {
    "id":13035,
    "rate":56.32727892896734,
    "name":"Butts County",
    "state":"GA"
  },
  {
    "id":29061,
    "rate":17.4440817313505,
    "name":"Daviess County",
    "state":"MO"
  },
  {
    "id":21111,
    "rate":939.3653628846041,
    "name":"Jefferson County",
    "state":"KY"
  },
  {
    "id":18169,
    "rate":97.16972986308132,
    "name":"Wabash County",
    "state":"IN"
  },
  {
    "id":12019,
    "rate":90.53521982150762,
    "name":"Clay County",
    "state":"FL"
  },
  {
    "id":48157,
    "rate":119.94771056192373,
    "name":"Fort Bend County",
    "state":"TX"
  },
  {
    "id":20209,
    "rate":102.40842921978869,
    "name":"Wyandotte County",
    "state":"KS"
  },
  {
    "id":1121,
    "rate":68.46649075227835,
    "name":"Talladega County",
    "state":"AL"
  },
  {
    "id":30001,
    "rate":18.63723813595554,
    "name":"Beaverhead County",
    "state":"MT"
  },
  {
    "id":48497,
    "rate":53.87185983738223,
    "name":"Wise County",
    "state":"TX"
  },
  {
    "id":8123,
    "rate":15.905658449064875,
    "name":"Weld County",
    "state":"CO"
  },
  {
    "id":15009,
    "rate":569.1542112704504,
    "name":"Maui County",
    "state":"HI"
  },
  {
    "id":17157,
    "rate":65.37408565271498,
    "name":"Randolph County",
    "state":"IL"
  },
  {
    "id":27019,
    "rate":11.884013206944298,
    "name":"Carver County",
    "state":"MN"
  },
  {
    "id":12013,
    "rate":17.568835406893736,
    "name":"Calhoun County",
    "state":"FL"
  },
  {
    "id":1079,
    "rate":52.986736144007594,
    "name":"Lawrence County",
    "state":"AL"
  },
  {
    "id":37059,
    "rate":11.715176715176712,
    "name":"Davie County",
    "state":"NC"
  },
  {
    "id":1001,
    "rate":75.33374402087257,
    "name":"Autauga County",
    "state":"AL"
  },
  {
    "id":12107,
    "rate":84.14940029267359,
    "name":"Putnam County",
    "state":"FL"
  },
  {
    "id":51770,
    "rate":4766.759263989207,
    "name":"Roanoke City",
    "state":"VA"
  },
  {
    "id":5089,
    "rate":16.702621271467308,
    "name":"Marion County",
    "state":"AR"
  },
  {
    "id":20129,
    "rate":8.02803440586174,
    "name":"Morton County",
    "state":"KS"
  },
  {
    "id":41007,
    "rate":66.29140668933937,
    "name":"Clatsop County",
    "state":"OR"
  },
  {
    "id":13241,
    "rate":31.62690868951984,
    "name":"Rabun County",
    "state":"GA"
  },
  {
    "id":17121,
    "rate":60.89895434575957,
    "name":"Marion County",
    "state":"IL"
  },
  {
    "id":1089,
    "rate":254.35607872417404,
    "name":"Madison County",
    "state":"AL"
  },
  {
    "id":13089,
    "rate":309.0628458966775,
    "name":"Dekalb County",
    "state":"GA"
  },
  {
    "id":51043,
    "rate":35.37231070131322,
    "name":"Clarke County",
    "state":"VA"
  },
  {
    "id":12007,
    "rate":55.68369453044375,
    "name":"Bradford County",
    "state":"FL"
  },
  {
    "id":35007,
    "rate":24.371882086167794,
    "name":"Colfax County",
    "state":"NM"
  },
  {
    "id":19167,
    "rate":39.8241527890998,
    "name":"Sioux County",
    "state":"IA"
  },
  {
    "id":45039,
    "rate":81.45308288049291,
    "name":"Fairfield County",
    "state":"SC"
  },
  {
    "id":36083,
    "rate":230.5825583435691,
    "name":"Rensselaer County",
    "state":"NY"
  },
  {
    "id":18167,
    "rate":3281.012165136429,
    "name":"Vigo County",
    "state":"IN"
  },
  {
    "id":28107,
    "rate":25.112581244196846,
    "name":"Panola County",
    "state":"MS"
  },
  {
    "id":23031,
    "rate":273.153851950466,
    "name":"York County",
    "state":"ME"
  },
  {
    "id":1095,
    "rate":73.74176855455286,
    "name":"Marshall County",
    "state":"AL"
  },
  {
    "id":5033,
    "rate":70.18390841716047,
    "name":"Crawford County",
    "state":"AR"
  },
  {
    "id":48147,
    "rate":26.475183414025597,
    "name":"Fannin County",
    "state":"TX"
  },
  {
    "id":21003,
    "rate":15.6971973703722,
    "name":"Allen County",
    "state":"KY"
  },
  {
    "id":9015,
    "rate":83.8329984144346,
    "name":"Windham County",
    "state":"CT"
  },
  {
    "id":9013,
    "rate":577.779693927925,
    "name":"Tolland County",
    "state":"CT"
  },
  {
    "id":21033,
    "rate":19.10068880117638,
    "name":"Caldwell County",
    "state":"KY"
  },
  {
    "id":9011,
    "rate":130.46076403053794,
    "name":"New London County",
    "state":"CT"
  },
  {
    "id":13313,
    "rate":66.99642396813553,
    "name":"Whitfield County",
    "state":"GA"
  },
  {
    "id":42117,
    "rate":351.6631855624134,
    "name":"Tioga County",
    "state":"PA"
  },
  {
    "id":21017,
    "rate":102.76105221044205,
    "name":"Bourbon County",
    "state":"KY"
  },
  {
    "id":30097,
    "rate":3.889043769166434,
    "name":"Sweet Grass County",
    "state":"MT"
  },
  {
    "id":13059,
    "rate":143.68786896150337,
    "name":"Clarke County",
    "state":"GA"
  },
  {
    "id":9005,
    "rate":554.7662673745431,
    "name":"Litchfield County",
    "state":"CT"
  },
  {
    "id":12011,
    "rate":273.6213417827382,
    "name":"Broward County",
    "state":"FL"
  },
  {
    "id":17091,
    "rate":139.0692134672264,
    "name":"Kankakee County",
    "state":"IL"
  },
  {
    "id":27159,
    "rate":5.398495142084886,
    "name":"Wadena County",
    "state":"MN"
  },
  {
    "id":12099,
    "rate":335.790250792537,
    "name":"Palm Beach County",
    "state":"FL"
  },
  {
    "id":13123,
    "rate":16.357028895585888,
    "name":"Gilmer County",
    "state":"GA"
  },
  {
    "id":13097,
    "rate":146.78120753251793,
    "name":"Douglas County",
    "state":"GA"
  },
  {
    "id":13069,
    "rate":85.48766621028938,
    "name":"Coffee County",
    "state":"GA"
  },
  {
    "id":6115,
    "rate":65.58230675418282,
    "name":"Yuba County",
    "state":"CA"
  },
  {
    "id":21149,
    "rate":3.0840336134453783,
    "name":"McLean County",
    "state":"KY"
  },
  {
    "id":22019,
    "rate":1284.0297863377414,
    "name":"Calcasieu Parish",
    "state":"LA"
  },
  {
    "id":18041,
    "rate":25.87231379094512,
    "name":"Fayette County",
    "state":"IN"
  },
  {
    "id":13047,
    "rate":716.4860454734372,
    "name":"Catoosa County",
    "state":"GA"
  },
  {
    "id":28077,
    "rate":2.4013967145464643,
    "name":"Lawrence County",
    "state":"MS"
  },
  {
    "id":39083,
    "rate":48.806090402354606,
    "name":"Knox County",
    "state":"OH"
  },
  {
    "id":19141,
    "rate":9.842547482877922,
    "name":"Obrien County",
    "state":"IA"
  },
  {
    "id":8097,
    "rate":11.756615598885796,
    "name":"Pitkin County",
    "state":"CO"
  },
  {
    "id":48223,
    "rate":35.96132128740824,
    "name":"Hopkins County",
    "state":"TX"
  },
  {
    "id":20159,
    "rate":28.53232091117994,
    "name":"Rice County",
    "state":"KS"
  },
  {
    "id":5075,
    "rate":37.77979928399554,
    "name":"Lawrence County",
    "state":"AR"
  },
  {
    "id":21231,
    "rate":13.657761732851988,
    "name":"Wayne County",
    "state":"KY"
  },
  {
    "id":33005,
    "rate":4.5957424633262995,
    "name":"Cheshire County",
    "state":"NH"
  },
  {
    "id":17057,
    "rate":53.3557925748111,
    "name":"Fulton County",
    "state":"IL"
  },
  {
    "id":29149,
    "rate":9.330726561789579,
    "name":"Oregon County",
    "state":"MO"
  },
  {
    "id":22063,
    "rate":46.14275753349907,
    "name":"Livingston Parish",
    "state":"LA"
  },
  {
    "id":6005,
    "rate":48.91859085023736,
    "name":"Amador County",
    "state":"CA"
  },
  {
    "id":42113,
    "rate":16.865024019835737,
    "name":"Sullivan County",
    "state":"PA"
  },
  {
    "id":5069,
    "rate":52.74389916867792,
    "name":"Jefferson County",
    "state":"AR"
  },
  {
    "id":20099,
    "rate":70.92935576605872,
    "name":"Labette County",
    "state":"KS"
  },
  {
    "id":17169,
    "rate":92.63692225487577,
    "name":"Schuyler County",
    "state":"IL"
  },
  {
    "id":21173,
    "rate":187.78683035714283,
    "name":"Montgomery County",
    "state":"KY"
  },
  {
    "id":1047,
    "rate":80.98811830341513,
    "name":"Dallas County",
    "state":"AL"
  },
  {
    "id":48005,
    "rate":1810.6697493863114,
    "name":"Angelina County",
    "state":"TX"
  },
  {
    "id":8067,
    "rate":34.39804989962719,
    "name":"La Plata County",
    "state":"CO"
  },
  {
    "id":5023,
    "rate":37.34812630925597,
    "name":"Cleburne County",
    "state":"AR"
  },
  {
    "id":8031,
    "rate":491.90853616210353,
    "name":"Denver County",
    "state":"CO"
  },
  {
    "id":5043,
    "rate":220.39201065246343,
    "name":"Drew County",
    "state":"AR"
  },
  {
    "id":48027,
    "rate":62.21413164906373,
    "name":"Bell County",
    "state":"TX"
  },
  {
    "id":28105,
    "rate":212.4961189639676,
    "name":"Oktibbeha County",
    "state":"MS"
  },
  {
    "id":5143,
    "rate":96.01363030972806,
    "name":"Washington County",
    "state":"AR"
  },
  {
    "id":51097,
    "rate":162.3089983022071,
    "name":"King and Queen County",
    "state":"VA"
  },
  {
    "id":48083,
    "rate":34.72391930835734,
    "name":"Coleman County",
    "state":"TX"
  },
  {
    "id":26033,
    "rate":72.2230485177967,
    "name":"Chippewa County",
    "state":"MI"
  },
  {
    "id":5145,
    "rate":83.34358948278492,
    "name":"White County",
    "state":"AR"
  },
  {
    "id":18095,
    "rate":182.5137392158668,
    "name":"Madison County",
    "state":"IN"
  },
  {
    "id":19081,
    "rate":31.18416338230025,
    "name":"Hancock County",
    "state":"IA"
  },
  {
    "id":12033,
    "rate":684.9868513612117,
    "name":"Escambia County",
    "state":"FL"
  },
  {
    "id":51169,
    "rate":73.63405113810799,
    "name":"Scott County",
    "state":"VA"
  },
  {
    "id":39113,
    "rate":630.9393593297568,
    "name":"Montgomery County",
    "state":"OH"
  },
  {
    "id":8015,
    "rate":2.154339059824338,
    "name":"Chaffee County",
    "state":"CO"
  },
  {
    "id":17191,
    "rate":78.41405450935564,
    "name":"Wayne County",
    "state":"IL"
  },
  {
    "id":18147,
    "rate":16.868023952095808,
    "name":"Spencer County",
    "state":"IN"
  },
  {
    "id":8014,
    "rate":110.49396528342825,
    "name":"Broomfield County",
    "state":"CO"
  },
  {
    "id":51181,
    "rate":1.5394736842105263,
    "name":"Surry County",
    "state":"VA"
  },
  {
    "id":8125,
    "rate":2.261539982208164,
    "name":"Yuma County",
    "state":"CO"
  },
  {
    "id":31157,
    "rate":66.36496666847324,
    "name":"Scotts Bluff County",
    "state":"NE"
  },
  {
    "id":37081,
    "rate":709.839307318517,
    "name":"Guilford County",
    "state":"NC"
  },
  {
    "id":21195,
    "rate":400.3613524774251,
    "name":"Pike County",
    "state":"KY"
  },
  {
    "id":6047,
    "rate":27.917129836544003,
    "name":"Merced County",
    "state":"CA"
  },
  {
    "id":27113,
    "rate":6.929855731646651,
    "name":"Pennington County",
    "state":"MN"
  },
  {
    "id":27051,
    "rate":5.264928511354079,
    "name":"Grant County",
    "state":"MN"
  },
  {
    "id":34003,
    "rate":341.60401547086275,
    "name":"Bergen County",
    "state":"NJ"
  },
  {
    "id":8011,
    "rate":8.610297916307903,
    "name":"Bent County",
    "state":"CO"
  },
  {
    "id":36065,
    "rate":391.6479543210786,
    "name":"Oneida County",
    "state":"NY"
  },
  {
    "id":6113,
    "rate":164.95366313367438,
    "name":"Yolo County",
    "state":"CA"
  },
  {
    "id":39143,
    "rate":66.09791941875825,
    "name":"Sandusky County",
    "state":"OH"
  },
  {
    "id":19021,
    "rate":0.6574849133735644,
    "name":"Buena Vista County",
    "state":"IA"
  },
  {
    "id":21077,
    "rate":95.28088564362267,
    "name":"Gallatin County",
    "state":"KY"
  },
  {
    "id":17039,
    "rate":91.68202764976962,
    "name":"De Witt County",
    "state":"IL"
  },
  {
    "id":42121,
    "rate":47.71125656863649,
    "name":"Venango County",
    "state":"PA"
  },
  {
    "id":39033,
    "rate":70.69596471164839,
    "name":"Crawford County",
    "state":"OH"
  },
  {
    "id":21183,
    "rate":67.57277914289286,
    "name":"Ohio County",
    "state":"KY"
  },
  {
    "id":5061,
    "rate":8.281546316557256,
    "name":"Howard County",
    "state":"AR"
  },
  {
    "id":19013,
    "rate":425.51507280060156,
    "name":"Black Hawk County",
    "state":"IA"
  },
  {
    "id":28001,
    "rate":144.38256432593883,
    "name":"Adams County",
    "state":"MS"
  },
  {
    "id":39051,
    "rate":51.713942986169926,
    "name":"Fulton County",
    "state":"OH"
  },
  {
    "id":5137,
    "rate":12.904656319290465,
    "name":"Stone County",
    "state":"AR"
  },
  {
    "id":6085,
    "rate":334.3308341000865,
    "name":"Santa Clara County",
    "state":"CA"
  },
  {
    "id":27147,
    "rate":0.3206523236274483,
    "name":"Steele County",
    "state":"MN"
  },
  {
    "id":13045,
    "rate":117.97232914322618,
    "name":"Carroll County",
    "state":"GA"
  },
  {
    "id":6079,
    "rate":101.40098642032906,
    "name":"San Luis Obispo County",
    "state":"CA"
  },
  {
    "id":5029,
    "rate":73.13112745098039,
    "name":"Conway County",
    "state":"AR"
  },
  {
    "id":12115,
    "rate":376.7315891723866,
    "name":"Sarasota County",
    "state":"FL"
  },
  {
    "id":26119,
    "rate":15.204382638010955,
    "name":"Montmorency County",
    "state":"MI"
  },
  {
    "id":37153,
    "rate":108.13264052090298,
    "name":"Richmond County",
    "state":"NC"
  },
  {
    "id":6071,
    "rate":168.21372253203427,
    "name":"San Bernardino County",
    "state":"CA"
  },
  {
    "id":6065,
    "rate":126.40636167510009,
    "name":"Riverside County",
    "state":"CA"
  },
  {
    "id":12055,
    "rate":98.35431810535545,
    "name":"Highlands County",
    "state":"FL"
  },
  {
    "id":5119,
    "rate":792.1405548787037,
    "name":"Pulaski County",
    "state":"AR"
  },
  {
    "id":5095,
    "rate":4.969387755102041,
    "name":"Monroe County",
    "state":"AR"
  },
  {
    "id":19007,
    "rate":24.945322948627176,
    "name":"Appanoose County",
    "state":"IA"
  },
  {
    "id":51075,
    "rate":72.19672131147541,
    "name":"Goochland County",
    "state":"VA"
  },
  {
    "id":6053,
    "rate":530.6468407240906,
    "name":"Monterey County",
    "state":"CA"
  },
  {
    "id":17163,
    "rate":171.3071041910823,
    "name":"St. Clair County",
    "state":"IL"
  },
  {
    "id":6043,
    "rate":7.289436817035583,
    "name":"Mariposa County",
    "state":"CA"
  },
  {
    "id":13007,
    "rate":79.49539922825764,
    "name":"Baker County",
    "state":"GA"
  },
  {
    "id":28153,
    "rate":18.866488975042405,
    "name":"Wayne County",
    "state":"MS"
  },
  {
    "id":2220,
    "rate":17.369757174392934,
    "name":"Sitka Borough",
    "state":"AK"
  },
  {
    "id":55093,
    "rate":11.399911491370403,
    "name":"Pierce County",
    "state":"WI"
  },
  {
    "id":5047,
    "rate":20.764686211124733,
    "name":"Franklin County",
    "state":"AR"
  },
  {
    "id":55109,
    "rate":4.778338418211688,
    "name":"St Croix County",
    "state":"WI"
  },
  {
    "id":6049,
    "rate":2.357479639948564,
    "name":"Modoc County",
    "state":"CA"
  },
  {
    "id":12081,
    "rate":359.7288899665036,
    "name":"Manatee County",
    "state":"FL"
  },
  {
    "id":48015,
    "rate":46.43770526168681,
    "name":"Austin County",
    "state":"TX"
  },
  {
    "id":39091,
    "rate":38.762265147181765,
    "name":"Logan County",
    "state":"OH"
  },
  {
    "id":6041,
    "rate":61.38032271036097,
    "name":"Marin County",
    "state":"CA"
  },
  {
    "id":6033,
    "rate":38.08764691172791,
    "name":"Lake County",
    "state":"CA"
  },
  {
    "id":48457,
    "rate":12.203990303934365,
    "name":"Tyler County",
    "state":"TX"
  },
  {
    "id":20173,
    "rate":418.68258766506415,
    "name":"Sedgwick County",
    "state":"KS"
  },
  {
    "id":8087,
    "rate":27.41491800387939,
    "name":"Morgan County",
    "state":"CO"
  },
  {
    "id":45067,
    "rate":128.89413726035013,
    "name":"Marion County",
    "state":"SC"
  },
  {
    "id":12047,
    "rate":4.909177495067691,
    "name":"Hamilton County",
    "state":"FL"
  },
  {
    "id":18025,
    "rate":24.761860028182248,
    "name":"Crawford County",
    "state":"IN"
  },
  {
    "id":55137,
    "rate":86.18335580340727,
    "name":"Waushara County",
    "state":"WI"
  },
  {
    "id":5055,
    "rate":85.03915844107698,
    "name":"Greene County",
    "state":"AR"
  },
  {
    "id":5031,
    "rate":1008.8365714743279,
    "name":"Craighead County",
    "state":"AR"
  },
  {
    "id":8009,
    "rate":23.367944621938236,
    "name":"Baca County",
    "state":"CO"
  },
  {
    "id":26007,
    "rate":61.43878248974008,
    "name":"Alpena County",
    "state":"MI"
  },
  {
    "id":13115,
    "rate":185.33143880248997,
    "name":"Floyd County",
    "state":"GA"
  },
  {
    "id":20155,
    "rate":86.10118815889876,
    "name":"Reno County",
    "state":"KS"
  },
  {
    "id":6031,
    "rate":165.757697898771,
    "name":"Kings County",
    "state":"CA"
  },
  {
    "id":6029,
    "rate":170.6897707185742,
    "name":"Kern County",
    "state":"CA"
  },
  {
    "id":6057,
    "rate":8.467757517822093,
    "name":"Nevada County",
    "state":"CA"
  },
  {
    "id":23015,
    "rate":13.808743968416433,
    "name":"Lincoln County",
    "state":"ME"
  },
  {
    "id":18087,
    "rate":36.71980868872061,
    "name":"Lagrange County",
    "state":"IN"
  },
  {
    "id":17003,
    "rate":115.27741935483876,
    "name":"Alexander County",
    "state":"IL"
  },
  {
    "id":51051,
    "rate":34.20730150625479,
    "name":"Dickenson County",
    "state":"VA"
  },
  {
    "id":28157,
    "rate":176.7188657284944,
    "name":"Wilkinson County",
    "state":"MS"
  },
  {
    "id":26047,
    "rate":1829.741906064751,
    "name":"Emmet County",
    "state":"MI"
  },
  {
    "id":6067,
    "rate":191.36432880006532,
    "name":"Sacramento County",
    "state":"CA"
  },
  {
    "id":37053,
    "rate":12.40370247385024,
    "name":"Currituck County",
    "state":"NC"
  },
  {
    "id":6017,
    "rate":221.18689958749758,
    "name":"El Dorado County",
    "state":"CA"
  },
  {
    "id":22099,
    "rate":33.16507322255103,
    "name":"St Martin Parish",
    "state":"LA"
  },
  {
    "id":17011,
    "rate":46.442321693799684,
    "name":"Bureau County",
    "state":"IL"
  },
  {
    "id":36071,
    "rate":326.5715256086594,
    "name":"Orange County",
    "state":"NY"
  },
  {
    "id":6097,
    "rate":146.94846364788378,
    "name":"Sonoma County",
    "state":"CA"
  },
  {
    "id":38085,
    "rate":5.385678102693991,
    "name":"Sioux County",
    "state":"ND"
  },
  {
    "id":1049,
    "rate":46.77428450585084,
    "name":"Dekalb County",
    "state":"AL"
  },
  {
    "id":13025,
    "rate":8.272163837240637,
    "name":"Brantley County",
    "state":"GA"
  },
  {
    "id":6015,
    "rate":10.473676751930844,
    "name":"Del Norte County",
    "state":"CA"
  },
  {
    "id":56029,
    "rate":11.70942544697101,
    "name":"Park County",
    "state":"WY"
  },
  {
    "id":48453,
    "rate":293.9819652466861,
    "name":"Travis County",
    "state":"TX"
  },
  {
    "id":1061,
    "rate":34.78964521146582,
    "name":"Geneva County",
    "state":"AL"
  },
  {
    "id":42107,
    "rate":157.96894519580695,
    "name":"Schuylkill County",
    "state":"PA"
  },
  {
    "id":18151,
    "rate":29.083296735470647,
    "name":"Steuben County",
    "state":"IN"
  },
  {
    "id":4003,
    "rate":29.92601520630084,
    "name":"Cochise County",
    "state":"AZ"
  },
  {
    "id":13271,
    "rate":9.692616714346581,
    "name":"Telfair County",
    "state":"GA"
  },
  {
    "id":12029,
    "rate":9.096059266637612,
    "name":"Dixie County",
    "state":"FL"
  },
  {
    "id":13311,
    "rate":41.42763897450773,
    "name":"White County",
    "state":"GA"
  },
  {
    "id":29125,
    "rate":1.7552014165559982,
    "name":"Maries County",
    "state":"MO"
  },
  {
    "id":2130,
    "rate":3.950689328178569,
    "name":"Ketchikan Gateway Borough",
    "state":"AK"
  },
  {
    "id":1027,
    "rate":99.5707389528407,
    "name":"Clay County",
    "state":"AL"
  },
  {
    "id":8101,
    "rate":100.50739865705056,
    "name":"Pueblo County",
    "state":"CO"
  },
  {
    "id":5039,
    "rate":17.902071563088512,
    "name":"Dallas County",
    "state":"AR"
  },
  {
    "id":28019,
    "rate":1.4422501496110114,
    "name":"Choctaw County",
    "state":"MS"
  },
  {
    "id":16051,
    "rate":55.59440297107701,
    "name":"Jefferson County",
    "state":"ID"
  },
  {
    "id":5149,
    "rate":6.567328412269039,
    "name":"Yell County",
    "state":"AR"
  },
  {
    "id":21087,
    "rate":6.912389380530973,
    "name":"Green County",
    "state":"KY"
  },
  {
    "id":19117,
    "rate":31.45367412140576,
    "name":"Lucas County",
    "state":"IA"
  },
  {
    "id":5139,
    "rate":115.86055153530216,
    "name":"Union County",
    "state":"AR"
  },
  {
    "id":29081,
    "rate":23.348587118178695,
    "name":"Harrison County",
    "state":"MO"
  },
  {
    "id":21215,
    "rate":13.13918088345109,
    "name":"Spencer County",
    "state":"KY"
  },
  {
    "id":37047,
    "rate":106.61950558988957,
    "name":"Columbus County",
    "state":"NC"
  },
  {
    "id":2188,
    "rate":2.0313918796212223,
    "name":"Northwest Arctic Borough",
    "state":"AK"
  },
  {
    "id":12039,
    "rate":56.22875270614966,
    "name":"Gadsden County",
    "state":"FL"
  },
  {
    "id":6055,
    "rate":89.23117835196034,
    "name":"Napa County",
    "state":"CA"
  },
  {
    "id":12043,
    "rate":3.193612774451098,
    "name":"Glades County",
    "state":"FL"
  },
  {
    "id":45087,
    "rate":75.80575437601868,
    "name":"Union County",
    "state":"SC"
  },
  {
    "id":6109,
    "rate":22.9913123844732,
    "name":"Tuolumne County",
    "state":"CA"
  },
  {
    "id":4019,
    "rate":212.82018620593948,
    "name":"Pima County",
    "state":"AZ"
  },
  {
    "id":18103,
    "rate":58.046956331159954,
    "name":"Miami County",
    "state":"IN"
  },
  {
    "id":5123,
    "rate":4.288993293404584,
    "name":"St. Francis County",
    "state":"AR"
  },
  {
    "id":53035,
    "rate":87.8238350107397,
    "name":"Kitsap County",
    "state":"WA"
  },
  {
    "id":36043,
    "rate":59.393545189865584,
    "name":"Herkimer County",
    "state":"NY"
  },
  {
    "id":19041,
    "rate":7.942401738815433,
    "name":"Clay County",
    "state":"IA"
  },
  {
    "id":18009,
    "rate":101.42572521517376,
    "name":"Blackford County",
    "state":"IN"
  },
  {
    "id":48117,
    "rate":17.152598408926547,
    "name":"Deaf Smith County",
    "state":"TX"
  },
  {
    "id":16057,
    "rate":14.16856671121944,
    "name":"Latah County",
    "state":"ID"
  },
  {
    "id":5093,
    "rate":10.255762897914378,
    "name":"Mississippi County",
    "state":"AR"
  },
  {
    "id":56025,
    "rate":55.45217700734563,
    "name":"Natrona County",
    "state":"WY"
  },
  {
    "id":12085,
    "rate":171.73669430149286,
    "name":"Martin County",
    "state":"FL"
  },
  {
    "id":17067,
    "rate":18.644013804088136,
    "name":"Hancock County",
    "state":"IL"
  },
  {
    "id":20015,
    "rate":76.31029867996837,
    "name":"Butler County",
    "state":"KS"
  },
  {
    "id":6039,
    "rate":46.57457765166444,
    "name":"Madera County",
    "state":"CA"
  },
  {
    "id":27081,
    "rate":6.83448275862069,
    "name":"Lincoln County",
    "state":"MN"
  },
  {
    "id":21099,
    "rate":945.1288450062389,
    "name":"Hart County",
    "state":"KY"
  },
  {
    "id":36103,
    "rate":558.2446271782228,
    "name":"Suffolk County",
    "state":"NY"
  },
  {
    "id":13193,
    "rate":31.511839708561027,
    "name":"Macon County",
    "state":"GA"
  },
  {
    "id":5037,
    "rate":115.16993315962387,
    "name":"Cross County",
    "state":"AR"
  },
  {
    "id":16059,
    "rate":2.5853407187942805,
    "name":"Lemhi County",
    "state":"ID"
  },
  {
    "id":26137,
    "rate":139.5613123206786,
    "name":"Otsego County",
    "state":"MI"
  },
  {
    "id":21151,
    "rate":51.13700913081237,
    "name":"Madison County",
    "state":"KY"
  },
  {
    "id":40137,
    "rate":30.948769989071522,
    "name":"Stephens County",
    "state":"OK"
  },
  {
    "id":13111,
    "rate":53.41287765798782,
    "name":"Fannin County",
    "state":"GA"
  },
  {
    "id":1125,
    "rate":333.2372145003857,
    "name":"Tuscaloosa County",
    "state":"AL"
  },
  {
    "id":51530,
    "rate":1.7331560283687943,
    "name":"Buena Vista City",
    "state":"VA"
  },
  {
    "id":19019,
    "rate":106.47263871645497,
    "name":"Buchanan County",
    "state":"IA"
  },
  {
    "id":5109,
    "rate":16.525829930765134,
    "name":"Pike County",
    "state":"AR"
  },
  {
    "id":48113,
    "rate":929.4355867827205,
    "name":"Dallas County",
    "state":"TX"
  },
  {
    "id":8083,
    "rate":1.2236469477658904,
    "name":"Montezuma County",
    "state":"CO"
  },
  {
    "id":13117,
    "rate":36.06832919830055,
    "name":"Forsyth County",
    "state":"GA"
  },
  {
    "id":13011,
    "rate":1.7474769635805179,
    "name":"Banks County",
    "state":"GA"
  },
  {
    "id":47079,
    "rate":120.18308900847401,
    "name":"Henry County",
    "state":"TN"
  },
  {
    "id":5127,
    "rate":2.998092123194331,
    "name":"Scott County",
    "state":"AR"
  },
  {
    "id":22001,
    "rate":39.574127648570446,
    "name":"Acadia Parish",
    "state":"LA"
  },
  {
    "id":20105,
    "rate":3.8714783159227606,
    "name":"Lincoln County",
    "state":"KS"
  },
  {
    "id":5097,
    "rate":7.422436929683307,
    "name":"Montgomery County",
    "state":"AR"
  },
  {
    "id":8089,
    "rate":12.120564343736639,
    "name":"Otero County",
    "state":"CO"
  },
  {
    "id":4021,
    "rate":133.97695474947565,
    "name":"Pinal County",
    "state":"AZ"
  },
  {
    "id":38079,
    "rate":1.045993031358885,
    "name":"Rolette County",
    "state":"ND"
  },
  {
    "id":12083,
    "rate":143.09038999088213,
    "name":"Marion County",
    "state":"FL"
  },
  {
    "id":46085,
    "rate":6.32217242288426,
    "name":"Lyman County",
    "state":"SD"
  },
  {
    "id":20051,
    "rate":105.59161223788243,
    "name":"Ellis County",
    "state":"KS"
  },
  {
    "id":26011,
    "rate":95.40226921093345,
    "name":"Arenac County",
    "state":"MI"
  },
  {
    "id":6045,
    "rate":28.275826599769143,
    "name":"Mendocino County",
    "state":"CA"
  },
  {
    "id":30041,
    "rate":4.1042186643939855,
    "name":"Hill County",
    "state":"MT"
  },
  {
    "id":28031,
    "rate":51.0889719817651,
    "name":"Covington County",
    "state":"MS"
  },
  {
    "id":21117,
    "rate":1828.022527231226,
    "name":"Kenton County",
    "state":"KY"
  },
  {
    "id":4012,
    "rate":2.943959781162206,
    "name":"La Paz County",
    "state":"AZ"
  },
  {
    "id":31033,
    "rate":90.61419200954083,
    "name":"Cheyenne County",
    "state":"NE"
  },
  {
    "id":5087,
    "rate":3.468917881811205,
    "name":"Madison County",
    "state":"AR"
  },
  {
    "id":12057,
    "rate":347.07621182622665,
    "name":"Hillsborough County",
    "state":"FL"
  },
  {
    "id":40035,
    "rate":86.55729909652877,
    "name":"Craig County",
    "state":"OK"
  },
  {
    "id":5051,
    "rate":127.89150841104113,
    "name":"Garland County",
    "state":"AR"
  },
  {
    "id":48491,
    "rate":204.6939615806637,
    "name":"Williamson County",
    "state":"TX"
  },
  {
    "id":17049,
    "rate":169.82635044577816,
    "name":"Effingham County",
    "state":"IL"
  },
  {
    "id":13191,
    "rate":1.0458267490303117,
    "name":"McIntosh County",
    "state":"GA"
  },
  {
    "id":49001,
    "rate":10.743139068763492,
    "name":"Beaver County",
    "state":"UT"
  },
  {
    "id":13107,
    "rate":40.245087312355025,
    "name":"Emanuel County",
    "state":"GA"
  },
  {
    "id":13053,
    "rate":48.54574383452666,
    "name":"Chattahoochee County",
    "state":"GA"
  },
  {
    "id":37069,
    "rate":44.03225544493351,
    "name":"Franklin County",
    "state":"NC"
  },
  {
    "id":17015,
    "rate":35.55022328867559,
    "name":"Carroll County",
    "state":"IL"
  },
  {
    "id":18063,
    "rate":105.05612982842568,
    "name":"Hendricks County",
    "state":"IN"
  },
  {
    "id":5085,
    "rate":51.560061066959626,
    "name":"Lonoke County",
    "state":"AR"
  },
  {
    "id":54045,
    "rate":255.25979744605903,
    "name":"Logan County",
    "state":"WV"
  },
  {
    "id":13029,
    "rate":86.52204924641818,
    "name":"Bryan County",
    "state":"GA"
  },
  {
    "id":55061,
    "rate":30.46609758463479,
    "name":"Kewaunee County",
    "state":"WI"
  },
  {
    "id":5063,
    "rate":166.47500338707493,
    "name":"Independence County",
    "state":"AR"
  },
  {
    "id":12059,
    "rate":10.866413181242079,
    "name":"Holmes County",
    "state":"FL"
  },
  {
    "id":45057,
    "rate":54.7381713030192,
    "name":"Lancaster County",
    "state":"SC"
  },
  {
    "id":28079,
    "rate":88.39848621683224,
    "name":"Leake County",
    "state":"MS"
  },
  {
    "id":47013,
    "rate":4775.769868163941,
    "name":"Campbell County",
    "state":"TN"
  },
  {
    "id":2170,
    "rate":33.814153819910864,
    "name":"Matanuska-Susitna Borough",
    "state":"AK"
  },
  {
    "id":19087,
    "rate":1.1570206841686557,
    "name":"Henry County",
    "state":"IA"
  },
  {
    "id":17137,
    "rate":18.235210748603983,
    "name":"Morgan County",
    "state":"IL"
  },
  {
    "id":21227,
    "rate":560.6166318214781,
    "name":"Warren County",
    "state":"KY"
  },
  {
    "id":5071,
    "rate":95.81735230436128,
    "name":"Johnson County",
    "state":"AR"
  },
  {
    "id":39119,
    "rate":244.39479018616476,
    "name":"Muskingum County",
    "state":"OH"
  },
  {
    "id":38031,
    "rate":7.971698113207547,
    "name":"Foster County",
    "state":"ND"
  },
  {
    "id":26099,
    "rate":161.21052196992056,
    "name":"Macomb County",
    "state":"MI"
  },
  {
    "id":8113,
    "rate":11.112572330352446,
    "name":"San Miguel County",
    "state":"CO"
  },
  {
    "id":40119,
    "rate":103.99520890938979,
    "name":"Payne County",
    "state":"OK"
  },
  {
    "id":32005,
    "rate":38.19305824519589,
    "name":"Douglas County",
    "state":"NV"
  },
  {
    "id":38105,
    "rate":76.916735366859,
    "name":"Williams County",
    "state":"ND"
  },
  {
    "id":26081,
    "rate":175.54444345003202,
    "name":"Kent County",
    "state":"MI"
  },
  {
    "id":21221,
    "rate":16.314619232907173,
    "name":"Trigg County",
    "state":"KY"
  },
  {
    "id":46103,
    "rate":572.7172124875664,
    "name":"Pennington County",
    "state":"SD"
  },
  {
    "id":1069,
    "rate":331.49407940561866,
    "name":"Houston County",
    "state":"AL"
  },
  {
    "id":5091,
    "rate":22.519659765687695,
    "name":"Miller County",
    "state":"AR"
  },
  {
    "id":37175,
    "rate":13.514336153892982,
    "name":"Transylvania County",
    "state":"NC"
  },
  {
    "id":1133,
    "rate":60.24477982220383,
    "name":"Winston County",
    "state":"AL"
  },
  {
    "id":5035,
    "rate":14.775714000399434,
    "name":"Crittenden County",
    "state":"AR"
  },
  {
    "id":48503,
    "rate":55.45708037178789,
    "name":"Young County",
    "state":"TX"
  },
  {
    "id":1057,
    "rate":46.82605111294312,
    "name":"Fayette County",
    "state":"AL"
  },
  {
    "id":47001,
    "rate":374.7842705278106,
    "name":"Anderson County",
    "state":"TN"
  },
  {
    "id":1099,
    "rate":62.880711221195085,
    "name":"Monroe County",
    "state":"AL"
  },
  {
    "id":37057,
    "rate":264.1498819875016,
    "name":"Davidson County",
    "state":"NC"
  },
  {
    "id":31093,
    "rate":286.4710547184774,
    "name":"Howard County",
    "state":"NE"
  },
  {
    "id":31029,
    "rate":9.541284403669724,
    "name":"Chase County",
    "state":"NE"
  },
  {
    "id":36027,
    "rate":314.51987623595903,
    "name":"Dutchess County",
    "state":"NY"
  },
  {
    "id":22031,
    "rate":18.894396153134828,
    "name":"De Soto Parish",
    "state":"LA"
  },
  {
    "id":5059,
    "rate":76.42814353321751,
    "name":"Hot Spring County",
    "state":"AR"
  },
  {
    "id":21211,
    "rate":46.03696993326148,
    "name":"Shelby County",
    "state":"KY"
  },
  {
    "id":5053,
    "rate":30.475741613529248,
    "name":"Grant County",
    "state":"AR"
  },
  {
    "id":1129,
    "rate":21.699438202247187,
    "name":"Washington County",
    "state":"AL"
  },
  {
    "id":17061,
    "rate":23.24177438307873,
    "name":"Greene County",
    "state":"IL"
  },
  {
    "id":48265,
    "rate":47.23643519820073,
    "name":"Kerr County",
    "state":"TX"
  },
  {
    "id":24013,
    "rate":1408.054967402356,
    "name":"Carroll County",
    "state":"MD"
  },
  {
    "id":53049,
    "rate":27.383163935223468,
    "name":"Pacific County",
    "state":"WA"
  },
  {
    "id":48161,
    "rate":32.9064216415995,
    "name":"Freestone County",
    "state":"TX"
  },
  {
    "id":13051,
    "rate":572.8945466372729,
    "name":"Chatham County",
    "state":"GA"
  },
  {
    "id":26111,
    "rate":185.1224760606821,
    "name":"Midland County",
    "state":"MI"
  },
  {
    "id":49027,
    "rate":5.702782428446145,
    "name":"Millard County",
    "state":"UT"
  },
  {
    "id":42011,
    "rate":170.43128647895216,
    "name":"Berks County",
    "state":"PA"
  },
  {
    "id":1043,
    "rate":141.35563270740775,
    "name":"Cullman County",
    "state":"AL"
  },
  {
    "id":1037,
    "rate":1.1278060996333066,
    "name":"Coosa County",
    "state":"AL"
  },
  {
    "id":55141,
    "rate":129.7082873819835,
    "name":"Wood County",
    "state":"WI"
  },
  {
    "id":18039,
    "rate":211.38458913047862,
    "name":"Elkhart County",
    "state":"IN"
  },
  {
    "id":25015,
    "rate":48.03106934163179,
    "name":"Hampshire County",
    "state":"MA"
  },
  {
    "id":20113,
    "rate":60.61109028322143,
    "name":"McPherson County",
    "state":"KS"
  },
  {
    "id":38099,
    "rate":75.95802424461733,
    "name":"Walsh County",
    "state":"ND"
  },
  {
    "id":1045,
    "rate":48.18445637050288,
    "name":"Dale County",
    "state":"AL"
  },
  {
    "id":4005,
    "rate":17.386225716996808,
    "name":"Coconino County",
    "state":"AZ"
  },
  {
    "id":31073,
    "rate":8.071638861629049,
    "name":"Gosper County",
    "state":"NE"
  },
  {
    "id":6007,
    "rate":155.55312524008147,
    "name":"Butte County",
    "state":"CA"
  },
  {
    "id":1101,
    "rate":1772.044101366016,
    "name":"Montgomery County",
    "state":"AL"
  },
  {
    "id":20013,
    "rate":24.909991909385116,
    "name":"Brown County",
    "state":"KS"
  },
  {
    "id":45037,
    "rate":13.5650258280158,
    "name":"Edgefield County",
    "state":"SC"
  },
  {
    "id":13085,
    "rate":92.36905613156954,
    "name":"Dawson County",
    "state":"GA"
  },
  {
    "id":20127,
    "rate":60.35891300632369,
    "name":"Morris County",
    "state":"KS"
  },
  {
    "id":17113,
    "rate":56.22742405085318,
    "name":"Mclean County",
    "state":"IL"
  },
  {
    "id":48221,
    "rate":101.83999539665493,
    "name":"Hood County",
    "state":"TX"
  },
  {
    "id":29111,
    "rate":2.0866141732283467,
    "name":"Lewis County",
    "state":"MO"
  },
  {
    "id":24015,
    "rate":310.05548899059147,
    "name":"Cecil County",
    "state":"MD"
  },
  {
    "id":5013,
    "rate":29.36403094923571,
    "name":"Calhoun County",
    "state":"AR"
  },
  {
    "id":42029,
    "rate":398.8667178862251,
    "name":"Chester County",
    "state":"PA"
  },
  {
    "id":26153,
    "rate":99.12986235786954,
    "name":"Schoolcraft County",
    "state":"MI"
  },
  {
    "id":21223,
    "rate":104.56005428636053,
    "name":"Trimble County",
    "state":"KY"
  },
  {
    "id":8005,
    "rate":240.8152658077913,
    "name":"Arapahoe County",
    "state":"CO"
  },
  {
    "id":21199,
    "rate":103.34762325053588,
    "name":"Pulaski County",
    "state":"KY"
  },
  {
    "id":41025,
    "rate":7.957941339236304,
    "name":"Harney County",
    "state":"OR"
  },
  {
    "id":5045,
    "rate":144.8843742881487,
    "name":"Faulkner County",
    "state":"AR"
  },
  {
    "id":46019,
    "rate":53.72533697987889,
    "name":"Butte County",
    "state":"SD"
  },
  {
    "id":28013,
    "rate":33.7372036637931,
    "name":"Calhoun County",
    "state":"MS"
  },
  {
    "id":53037,
    "rate":6.692924732215765,
    "name":"Kittitas County",
    "state":"WA"
  },
  {
    "id":6037,
    "rate":436.63848383758284,
    "name":"Los Angeles County",
    "state":"CA"
  },
  {
    "id":13201,
    "rate":73.02908726178532,
    "name":"Miller County",
    "state":"GA"
  },
  {
    "id":45069,
    "rate":37.78065845082929,
    "name":"Marlboro County",
    "state":"SC"
  },
  {
    "id":40087,
    "rate":14.241436479613341,
    "name":"McClain County",
    "state":"OK"
  },
  {
    "id":29201,
    "rate":71.51344861937724,
    "name":"Scott County",
    "state":"MO"
  },
  {
    "id":26049,
    "rate":395.2138937659375,
    "name":"Genesee County",
    "state":"MI"
  },
  {
    "id":21021,
    "rate":231.51232442853208,
    "name":"Boyle County",
    "state":"KY"
  },
  {
    "id":4015,
    "rate":95.635760481164,
    "name":"Mohave County",
    "state":"AZ"
  },
  {
    "id":26121,
    "rate":95.73630881713358,
    "name":"Muskegon County",
    "state":"MI"
  },
  {
    "id":1059,
    "rate":56.93967150979154,
    "name":"Franklin County",
    "state":"AL"
  },
  {
    "id":56005,
    "rate":59.78787815520804,
    "name":"Campbell County",
    "state":"WY"
  },
  {
    "id":24001,
    "rate":69.00234154000246,
    "name":"Allegany County",
    "state":"MD"
  },
  {
    "id":2050,
    "rate":1.7837960083677276,
    "name":"Bethel Census Area",
    "state":"AK"
  },
  {
    "id":19159,
    "rate":171.78367748279257,
    "name":"Ringgold County",
    "state":"IA"
  },
  {
    "id":2261,
    "rate":1.6269515201314706,
    "name":"Valdez-Cordova Census Area",
    "state":"AK"
  },
  {
    "id":13161,
    "rate":29.865687442106662,
    "name":"Jeff Davis County",
    "state":"GA"
  },
  {
    "id":8037,
    "rate":15.46053011491598,
    "name":"Eagle County",
    "state":"CO"
  },
  {
    "id":48023,
    "rate":87.83125864453665,
    "name":"Baylor County",
    "state":"TX"
  },
  {
    "id":1063,
    "rate":29.670329670329668,
    "name":"Greene County",
    "state":"AL"
  },
  {
    "id":13223,
    "rate":53.46269973667158,
    "name":"Paulding County",
    "state":"GA"
  },
  {
    "id":2150,
    "rate":8.16056838365897,
    "name":"Kodiak Island Borough",
    "state":"AK"
  },
  {
    "id":19153,
    "rate":628.9712917582623,
    "name":"Polk County",
    "state":"IA"
  },
  {
    "id":8119,
    "rate":764.6325290896646,
    "name":"Teller County",
    "state":"CO"
  },
  {
    "id":17107,
    "rate":7.623570976235709,
    "name":"Logan County",
    "state":"IL"
  },
  {
    "id":18055,
    "rate":12.577734717975114,
    "name":"Greene County",
    "state":"IN"
  },
  {
    "id":29139,
    "rate":4.523453093812376,
    "name":"Montgomery County",
    "state":"MO"
  },
  {
    "id":35005,
    "rate":41.88278544084584,
    "name":"Chaves County",
    "state":"NM"
  },
  {
    "id":20045,
    "rate":60.04579182805568,
    "name":"Douglas County",
    "state":"KS"
  },
  {
    "id":38021,
    "rate":80.60819828408005,
    "name":"Dickey County",
    "state":"ND"
  },
  {
    "id":1019,
    "rate":87.82718991428682,
    "name":"Cherokee County",
    "state":"AL"
  },
  {
    "id":1117,
    "rate":103.72217771430553,
    "name":"Shelby County",
    "state":"AL"
  },
  {
    "id":46077,
    "rate":42.2767175572519,
    "name":"Kingsbury County",
    "state":"SD"
  },
  {
    "id":6095,
    "rate":49.85180308230572,
    "name":"Solano County",
    "state":"CA"
  },
  {
    "id":54027,
    "rate":40.894501224765605,
    "name":"Hampshire County",
    "state":"WV"
  },
  {
    "id":13257,
    "rate":160.64373177842566,
    "name":"Stephens County",
    "state":"GA"
  },
  {
    "id":47089,
    "rate":84.77757173717718,
    "name":"Jefferson County",
    "state":"TN"
  },
  {
    "id":8069,
    "rate":23.86018305531874,
    "name":"Larimer County",
    "state":"CO"
  },
  {
    "id":8001,
    "rate":699.7768819480173,
    "name":"Adams County",
    "state":"CO"
  },
  {
    "id":5049,
    "rate":3.1165754431827466,
    "name":"Fulton County",
    "state":"AR"
  },
  {
    "id":29181,
    "rate":29.73993587459922,
    "name":"Ripley County",
    "state":"MO"
  },
  {
    "id":13319,
    "rate":46.33934185705303,
    "name":"Wilkinson County",
    "state":"GA"
  },
  {
    "id":22025,
    "rate":1.404878048780488,
    "name":"Catahoula Parish",
    "state":"LA"
  },
  {
    "id":20169,
    "rate":61.58239398819109,
    "name":"Saline County",
    "state":"KS"
  },
  {
    "id":1111,
    "rate":39.99514498830384,
    "name":"Randolph County",
    "state":"AL"
  },
  {
    "id":6093,
    "rate":16.23558149002578,
    "name":"Siskiyou County",
    "state":"CA"
  },
  {
    "id":29211,
    "rate":45.0743295019157,
    "name":"Sullivan County",
    "state":"MO"
  },
  {
    "id":47181,
    "rate":49.379635079458495,
    "name":"Wayne County",
    "state":"TN"
  },
  {
    "id":30005,
    "rate":2.2690974838029234,
    "name":"Blaine County",
    "state":"MT"
  },
  {
    "id":54051,
    "rate":100.8472035246604,
    "name":"Marshall County",
    "state":"WV"
  },
  {
    "id":48493,
    "rate":23.81684371624054,
    "name":"Wilson County",
    "state":"TX"
  },
  {
    "id":41065,
    "rate":6.391955061476215,
    "name":"Wasco County",
    "state":"OR"
  },
  {
    "id":16085,
    "rate":14.774471664388605,
    "name":"Valley County",
    "state":"ID"
  },
  {
    "id":39171,
    "rate":138.15374787052812,
    "name":"Williams County",
    "state":"OH"
  },
  {
    "id":1091,
    "rate":90.88930196155162,
    "name":"Marengo County",
    "state":"AL"
  },
  {
    "id":48111,
    "rate":12.704402515723269,
    "name":"Dallam County",
    "state":"TX"
  },
  {
    "id":1127,
    "rate":202.19448015122904,
    "name":"Walker County",
    "state":"AL"
  },
  {
    "id":6023,
    "rate":20.668324918324917,
    "name":"Humboldt County",
    "state":"CA"
  },
  {
    "id":38089,
    "rate":103.1302700494038,
    "name":"Stark County",
    "state":"ND"
  },
  {
    "id":5073,
    "rate":13.564796124343964,
    "name":"Lafayette County",
    "state":"AR"
  },
  {
    "id":21025,
    "rate":207.27958959325758,
    "name":"Breathitt County",
    "state":"KY"
  },
  {
    "id":47119,
    "rate":183.6446841745583,
    "name":"Maury County",
    "state":"TN"
  },
  {
    "id":6025,
    "rate":321.15479337026534,
    "name":"Imperial County",
    "state":"CA"
  },
  {
    "id":51199,
    "rate":56.97122258388344,
    "name":"York County",
    "state":"VA"
  },
  {
    "id":13295,
    "rate":34.788220110289814,
    "name":"Walker County",
    "state":"GA"
  },
  {
    "id":12095,
    "rate":472.5771249072434,
    "name":"Orange County",
    "state":"FL"
  },
  {
    "id":47123,
    "rate":44.424270639354454,
    "name":"Monroe County",
    "state":"TN"
  },
  {
    "id":1011,
    "rate":12.48559826234772,
    "name":"Bullock County",
    "state":"AL"
  },
  {
    "id":1031,
    "rate":133.44768338637564,
    "name":"Coffee County",
    "state":"AL"
  },
  {
    "id":39085,
    "rate":585.1405401870378,
    "name":"Lake County",
    "state":"OH"
  },
  {
    "id":29189,
    "rate":751.7418265387658,
    "name":"St. Louis County",
    "state":"MO"
  },
  {
    "id":6009,
    "rate":57.13159422879348,
    "name":"Calaveras County",
    "state":"CA"
  },
  {
    "id":56023,
    "rate":9.39082896351668,
    "name":"Lincoln County",
    "state":"WY"
  },
  {
    "id":40133,
    "rate":67.8161686756449,
    "name":"Seminole County",
    "state":"OK"
  },
  {
    "id":28041,
    "rate":33.67982640347194,
    "name":"Greene County",
    "state":"MS"
  },
  {
    "id":39167,
    "rate":2507.334330493595,
    "name":"Washington County",
    "state":"OH"
  },
  {
    "id":5009,
    "rate":58.08105429512764,
    "name":"Boone County",
    "state":"AR"
  },
  {
    "id":1131,
    "rate":33.75021956789039,
    "name":"Wilcox County",
    "state":"AL"
  },
  {
    "id":1015,
    "rate":222.74380884158825,
    "name":"Calhoun County",
    "state":"AL"
  }
]

    return payments;
    // return $resource('/api/unemployments/');

  });


