'use strict';

angular.module('foglightApp')
  .factory('locator', function () {

    var countiesByState = {
  "AK": [
    {
      "FIPS": 2230,
      "county": "Skagway Borough"
    },
    {
      "FIPS": 2198,
      "county": "Prince of Wales-Outer Ketchikan Borough"
    },
    {
      "FIPS": 2090,
      "county": "Fairbanks North Star Borough"
    },
    {
      "FIPS": 2195,
      "county": "Petersburg Borough"
    },
    {
      "FIPS": 2060,
      "county": "Bristol Bay Borough"
    },
    {
      "FIPS": 2150,
      "county": "Kodiak Island Borough"
    },
    {
      "FIPS": 2220,
      "county": "Sitka Borough"
    },
    {
      "FIPS": 2188,
      "county": "Northwest Arctic Borough"
    },
    {
      "FIPS": 2130,
      "county": "Ketchikan Gateway Borough"
    },
    {
      "FIPS": 2122,
      "county": "Kenai Peninsula Borough"
    },
    {
      "FIPS": 2110,
      "county": "City and Borough of Juneau"
    },
    {
      "FIPS": 2105,
      "county": "Hoonah-Angoon Borough"
    },
    {
      "FIPS": 2100,
      "county": "Haines Borough"
    },
    {
      "FIPS": 2020,
      "county": "Anchorage Borough"
    },
    {
      "FIPS": 2068,
      "county": "Denali Borough"
    },
    {
      "FIPS": 2013,
      "county": "Aleutians East Borough"
    },
    {
      "FIPS": 2290,
      "county": "Yukon-Koyukuk Census Area"
    },
    {
      "FIPS": 2275,
      "county": "Wrangell Borough"
    },
    {
      "FIPS": 2270,
      "county": "Wade Hampton Census Area"
    },
    {
      "FIPS": 2170,
      "county": "Matanuska-Susitna Borough"
    },
    {
      "FIPS": 2050,
      "county": "Bethel Census Area"
    },
    {
      "FIPS": 2164,
      "county": "Lake and Peninsula Borough"
    },
    {
      "FIPS": 2282,
      "county": "Yakutat Borough"
    },
    {
      "FIPS": 2180,
      "county": "Nome Census Area"
    },
    {
      "FIPS": 2016,
      "county": "Aleutians West Census Area"
    },
    {
      "FIPS": 2070,
      "county": "Dillingham Census Area"
    },
    {
      "FIPS": 2261,
      "county": "Valdez-Cordova Census Area"
    },
    {
      "FIPS": 2185,
      "county": "North Slope Borough"
    },
    {
      "FIPS": 2240,
      "county": "Southeast Fairbanks Census Area"
    }
  ],
  "AL": [
    {
      "FIPS": 1049,
      "county": "Dekalb County"
    },
    {
      "FIPS": 1001,
      "county": "Autauga County"
    },
    {
      "FIPS": 1093,
      "county": "Marion County"
    },
    {
      "FIPS": 1035,
      "county": "Conecuh County"
    },
    {
      "FIPS": 1121,
      "county": "Talladega County"
    },
    {
      "FIPS": 1077,
      "county": "Lauderdale County"
    },
    {
      "FIPS": 1113,
      "county": "Russell County"
    },
    {
      "FIPS": 1083,
      "county": "Limestone County"
    },
    {
      "FIPS": 1089,
      "county": "Madison County"
    },
    {
      "FIPS": 1023,
      "county": "Choctaw County"
    },
    {
      "FIPS": 1069,
      "county": "Houston County"
    },
    {
      "FIPS": 1017,
      "county": "Chambers County"
    },
    {
      "FIPS": 1123,
      "county": "Tallapoosa County"
    },
    {
      "FIPS": 1041,
      "county": "Crenshaw County"
    },
    {
      "FIPS": 1085,
      "county": "Lowndes County"
    },
    {
      "FIPS": 1051,
      "county": "Elmore County"
    },
    {
      "FIPS": 1021,
      "county": "Chilton County"
    },
    {
      "FIPS": 1131,
      "county": "Wilcox County"
    },
    {
      "FIPS": 1125,
      "county": "Tuscaloosa County"
    },
    {
      "FIPS": 1119,
      "county": "Sumter County"
    },
    {
      "FIPS": 1011,
      "county": "Bullock County"
    },
    {
      "FIPS": 1107,
      "county": "Pickens County"
    },
    {
      "FIPS": 1099,
      "county": "Monroe County"
    },
    {
      "FIPS": 1071,
      "county": "Jackson County"
    },
    {
      "FIPS": 1055,
      "county": "Etowah County"
    },
    {
      "FIPS": 1043,
      "county": "Cullman County"
    },
    {
      "FIPS": 1013,
      "county": "Butler County"
    },
    {
      "FIPS": 1009,
      "county": "Blount County"
    },
    {
      "FIPS": 1005,
      "county": "Barbour County"
    },
    {
      "FIPS": 1061,
      "county": "Geneva County"
    },
    {
      "FIPS": 1111,
      "county": "Randolph County"
    },
    {
      "FIPS": 1057,
      "county": "Fayette County"
    },
    {
      "FIPS": 1019,
      "county": "Cherokee County"
    },
    {
      "FIPS": 1097,
      "county": "Mobile County"
    },
    {
      "FIPS": 1091,
      "county": "Marengo County"
    },
    {
      "FIPS": 1115,
      "county": "St Clair County"
    },
    {
      "FIPS": 1079,
      "county": "Lawrence County"
    },
    {
      "FIPS": 1117,
      "county": "Shelby County"
    },
    {
      "FIPS": 1073,
      "county": "Jefferson County"
    },
    {
      "FIPS": 1033,
      "county": "Colbert County"
    },
    {
      "FIPS": 1003,
      "county": "Baldwin County"
    },
    {
      "FIPS": 1025,
      "county": "Clarke County"
    },
    {
      "FIPS": 1029,
      "county": "Cleburne County"
    },
    {
      "FIPS": 1059,
      "county": "Franklin County"
    },
    {
      "FIPS": 1031,
      "county": "Coffee County"
    },
    {
      "FIPS": 1103,
      "county": "Morgan County"
    },
    {
      "FIPS": 1133,
      "county": "Winston County"
    },
    {
      "FIPS": 1039,
      "county": "Covington County"
    },
    {
      "FIPS": 1015,
      "county": "Calhoun County"
    },
    {
      "FIPS": 1053,
      "county": "Escambia County"
    },
    {
      "FIPS": 1101,
      "county": "Montgomery County"
    },
    {
      "FIPS": 1129,
      "county": "Washington County"
    },
    {
      "FIPS": 1095,
      "county": "Marshall County"
    },
    {
      "FIPS": 1063,
      "county": "Greene County"
    },
    {
      "FIPS": 1047,
      "county": "Dallas County"
    },
    {
      "FIPS": 1127,
      "county": "Walker County"
    },
    {
      "FIPS": 1037,
      "county": "Coosa County"
    },
    {
      "FIPS": 1067,
      "county": "Henry County"
    },
    {
      "FIPS": 1065,
      "county": "Hale County"
    },
    {
      "FIPS": 1109,
      "county": "Pike County"
    },
    {
      "FIPS": 1087,
      "county": "Macon County"
    },
    {
      "FIPS": 1075,
      "county": "Lamar County"
    },
    {
      "FIPS": 1007,
      "county": "Bibb County"
    },
    {
      "FIPS": 1081,
      "county": "Lee County"
    },
    {
      "FIPS": 1045,
      "county": "Dale County"
    },
    {
      "FIPS": 1027,
      "county": "Clay County"
    },
    {
      "FIPS": 1105,
      "county": "Perry County"
    }
  ],
  "AR": [
    {
      "FIPS": 5071,
      "county": "Johnson County"
    },
    {
      "FIPS": 5091,
      "county": "Miller County"
    },
    {
      "FIPS": 5027,
      "county": "Columbia County"
    },
    {
      "FIPS": 5081,
      "county": "Little River County"
    },
    {
      "FIPS": 5003,
      "county": "Ashley County"
    },
    {
      "FIPS": 5025,
      "county": "Cleveland County"
    },
    {
      "FIPS": 5129,
      "county": "Searcy County"
    },
    {
      "FIPS": 5147,
      "county": "Woodruff County"
    },
    {
      "FIPS": 5063,
      "county": "Independence County"
    },
    {
      "FIPS": 5007,
      "county": "Benton County"
    },
    {
      "FIPS": 5055,
      "county": "Greene County"
    },
    {
      "FIPS": 5039,
      "county": "Dallas County"
    },
    {
      "FIPS": 5015,
      "county": "Carroll County"
    },
    {
      "FIPS": 5017,
      "county": "Chicot County"
    },
    {
      "FIPS": 5123,
      "county": "St Francis County"
    },
    {
      "FIPS": 5131,
      "county": "Sebastian County"
    },
    {
      "FIPS": 5143,
      "county": "Washington County"
    },
    {
      "FIPS": 5125,
      "county": "Saline County"
    },
    {
      "FIPS": 5121,
      "county": "Randolph County"
    },
    {
      "FIPS": 5117,
      "county": "Prairie County"
    },
    {
      "FIPS": 5103,
      "county": "Ouachita County"
    },
    {
      "FIPS": 5097,
      "county": "Montgomery County"
    },
    {
      "FIPS": 5093,
      "county": "Mississippi County"
    },
    {
      "FIPS": 5089,
      "county": "Marion County"
    },
    {
      "FIPS": 5075,
      "county": "Lawrence County"
    },
    {
      "FIPS": 5069,
      "county": "Jefferson County"
    },
    {
      "FIPS": 5067,
      "county": "Jackson County"
    },
    {
      "FIPS": 5057,
      "county": "Hempstead County"
    },
    {
      "FIPS": 5045,
      "county": "Faulkner County"
    },
    {
      "FIPS": 5035,
      "county": "Crittenden County"
    },
    {
      "FIPS": 5029,
      "county": "Conway County"
    },
    {
      "FIPS": 5023,
      "county": "Cleburne County"
    },
    {
      "FIPS": 5001,
      "county": "Arkansas County"
    },
    {
      "FIPS": 5079,
      "county": "Lincoln County"
    },
    {
      "FIPS": 5087,
      "county": "Madison County"
    },
    {
      "FIPS": 5049,
      "county": "Fulton County"
    },
    {
      "FIPS": 5099,
      "county": "Nevada County"
    },
    {
      "FIPS": 5141,
      "county": "Van Buren County"
    },
    {
      "FIPS": 5061,
      "county": "Howard County"
    },
    {
      "FIPS": 5013,
      "county": "Calhoun County"
    },
    {
      "FIPS": 5107,
      "county": "Phillips County"
    },
    {
      "FIPS": 5111,
      "county": "Poinsett County"
    },
    {
      "FIPS": 5031,
      "county": "Craighead County"
    },
    {
      "FIPS": 5005,
      "county": "Baxter County"
    },
    {
      "FIPS": 5095,
      "county": "Monroe County"
    },
    {
      "FIPS": 5119,
      "county": "Pulaski County"
    },
    {
      "FIPS": 5059,
      "county": "Hot Spring County"
    },
    {
      "FIPS": 5085,
      "county": "Lonoke County"
    },
    {
      "FIPS": 5011,
      "county": "Bradley County"
    },
    {
      "FIPS": 5073,
      "county": "Lafayette County"
    },
    {
      "FIPS": 5051,
      "county": "Garland County"
    },
    {
      "FIPS": 5047,
      "county": "Franklin County"
    },
    {
      "FIPS": 5133,
      "county": "Sevier County"
    },
    {
      "FIPS": 5101,
      "county": "Newton County"
    },
    {
      "FIPS": 5033,
      "county": "Crawford County"
    },
    {
      "FIPS": 5139,
      "county": "Union County"
    },
    {
      "FIPS": 5077,
      "county": "Lee County"
    },
    {
      "FIPS": 5109,
      "county": "Pike County"
    },
    {
      "FIPS": 5019,
      "county": "Clark County"
    },
    {
      "FIPS": 5037,
      "county": "Cross County"
    },
    {
      "FIPS": 5083,
      "county": "Logan County"
    },
    {
      "FIPS": 5149,
      "county": "Yell County"
    },
    {
      "FIPS": 5127,
      "county": "Scott County"
    },
    {
      "FIPS": 5053,
      "county": "Grant County"
    },
    {
      "FIPS": 5043,
      "county": "Drew County"
    },
    {
      "FIPS": 5113,
      "county": "Polk County"
    },
    {
      "FIPS": 5135,
      "county": "Sharp County"
    },
    {
      "FIPS": 5065,
      "county": "Izard County"
    },
    {
      "FIPS": 5145,
      "county": "White County"
    },
    {
      "FIPS": 5021,
      "county": "Clay County"
    },
    {
      "FIPS": 5105,
      "county": "Perry County"
    },
    {
      "FIPS": 5137,
      "county": "Stone County"
    },
    {
      "FIPS": 5115,
      "county": "Pope County"
    },
    {
      "FIPS": 5009,
      "county": "Boone County"
    },
    {
      "FIPS": 5041,
      "county": "Desha County"
    }
  ],
  "AZ": [
    {
      "FIPS": 4013,
      "county": "Maricopa County"
    },
    {
      "FIPS": 4011,
      "county": "Greenlee County"
    },
    {
      "FIPS": 4003,
      "county": "Cochise County"
    },
    {
      "FIPS": 4017,
      "county": "Navajo County"
    },
    {
      "FIPS": 4025,
      "county": "Yavapai County"
    },
    {
      "FIPS": 4015,
      "county": "Mohave County"
    },
    {
      "FIPS": 4005,
      "county": "Coconino County"
    },
    {
      "FIPS": 4001,
      "county": "Apache County"
    },
    {
      "FIPS": 4009,
      "county": "Graham County"
    },
    {
      "FIPS": 4012,
      "county": "La Paz County"
    },
    {
      "FIPS": 4023,
      "county": "Santa Cruz County"
    },
    {
      "FIPS": 4027,
      "county": "Yuma County"
    },
    {
      "FIPS": 4021,
      "county": "Pinal County"
    },
    {
      "FIPS": 4019,
      "county": "Pima County"
    },
    {
      "FIPS": 4007,
      "county": "Gila County"
    }
  ],
  "CA": [
    {
      "FIPS": 6061,
      "county": "Placer County"
    },
    {
      "FIPS": 6089,
      "county": "Shasta County"
    },
    {
      "FIPS": 6091,
      "county": "Sierra County"
    },
    {
      "FIPS": 6009,
      "county": "Calaveras County"
    },
    {
      "FIPS": 6035,
      "county": "Lassen County"
    },
    {
      "FIPS": 6023,
      "county": "Humboldt County"
    },
    {
      "FIPS": 6109,
      "county": "Tuolumne County"
    },
    {
      "FIPS": 6107,
      "county": "Tulare County"
    },
    {
      "FIPS": 6103,
      "county": "Tehama County"
    },
    {
      "FIPS": 6101,
      "county": "Sutter County"
    },
    {
      "FIPS": 6097,
      "county": "Sonoma County"
    },
    {
      "FIPS": 6093,
      "county": "Siskiyou County"
    },
    {
      "FIPS": 6013,
      "county": "Contra Costa County"
    },
    {
      "FIPS": 6063,
      "county": "Plumas County"
    },
    {
      "FIPS": 6057,
      "county": "Nevada County"
    },
    {
      "FIPS": 6025,
      "county": "Imperial County"
    },
    {
      "FIPS": 6017,
      "county": "El Dorado County"
    },
    {
      "FIPS": 6015,
      "county": "Del Norte County"
    },
    {
      "FIPS": 6011,
      "county": "Colusa County"
    },
    {
      "FIPS": 6005,
      "county": "Amador County"
    },
    {
      "FIPS": 6019,
      "county": "Fresno County"
    },
    {
      "FIPS": 6077,
      "county": "San Joaquin County"
    },
    {
      "FIPS": 6053,
      "county": "Monterey County"
    },
    {
      "FIPS": 6081,
      "county": "San Mateo County"
    },
    {
      "FIPS": 6111,
      "county": "Ventura County"
    },
    {
      "FIPS": 6045,
      "county": "Mendocino County"
    },
    {
      "FIPS": 6067,
      "county": "Sacramento County"
    },
    {
      "FIPS": 6047,
      "county": "Merced County"
    },
    {
      "FIPS": 6099,
      "county": "Stanislaus County"
    },
    {
      "FIPS": 6083,
      "county": "Santa Barbara County"
    },
    {
      "FIPS": 6079,
      "county": "San Luis Obispo County"
    },
    {
      "FIPS": 6073,
      "county": "San Diego County"
    },
    {
      "FIPS": 6059,
      "county": "Orange County"
    },
    {
      "FIPS": 6001,
      "county": "Alameda County"
    },
    {
      "FIPS": 6071,
      "county": "San Bernardino County"
    },
    {
      "FIPS": 6065,
      "county": "Riverside County"
    },
    {
      "FIPS": 6043,
      "county": "Mariposa County"
    },
    {
      "FIPS": 6087,
      "county": "Santa Cruz County"
    },
    {
      "FIPS": 6037,
      "county": "Los Angeles County"
    },
    {
      "FIPS": 6075,
      "county": "San Francisco County"
    },
    {
      "FIPS": 6003,
      "county": "Alpine County"
    },
    {
      "FIPS": 6069,
      "county": "San Benito County"
    },
    {
      "FIPS": 6095,
      "county": "Solano County"
    },
    {
      "FIPS": 6039,
      "county": "Madera County"
    },
    {
      "FIPS": 6085,
      "county": "Santa Clara County"
    },
    {
      "FIPS": 6105,
      "county": "Trinity County"
    },
    {
      "FIPS": 6113,
      "county": "Yolo County"
    },
    {
      "FIPS": 6041,
      "county": "Marin County"
    },
    {
      "FIPS": 6055,
      "county": "Napa County"
    },
    {
      "FIPS": 6115,
      "county": "Yuba County"
    },
    {
      "FIPS": 6033,
      "county": "Lake County"
    },
    {
      "FIPS": 6029,
      "county": "Kern County"
    },
    {
      "FIPS": 6007,
      "county": "Butte County"
    },
    {
      "FIPS": 6049,
      "county": "Modoc County"
    },
    {
      "FIPS": 6031,
      "county": "Kings County"
    },
    {
      "FIPS": 6021,
      "county": "Glenn County"
    },
    {
      "FIPS": 6027,
      "county": "Inyo County"
    },
    {
      "FIPS": 6051,
      "county": "Mono County"
    }
  ],
  "CO": [
    {
      "FIPS": 8047,
      "county": "Gilpin County"
    },
    {
      "FIPS": 8057,
      "county": "Jackson County"
    },
    {
      "FIPS": 8055,
      "county": "Huerfano County"
    },
    {
      "FIPS": 8017,
      "county": "Cheyenne County"
    },
    {
      "FIPS": 8019,
      "county": "Clear Creek County"
    },
    {
      "FIPS": 8027,
      "county": "Custer County"
    },
    {
      "FIPS": 8083,
      "county": "Montezuma County"
    },
    {
      "FIPS": 8085,
      "county": "Montrose County"
    },
    {
      "FIPS": 8043,
      "county": "Fremont County"
    },
    {
      "FIPS": 8063,
      "county": "Kit Carson County"
    },
    {
      "FIPS": 8111,
      "county": "San Juan County"
    },
    {
      "FIPS": 8014,
      "county": "Broomfield County"
    },
    {
      "FIPS": 8007,
      "county": "Archuleta County"
    },
    {
      "FIPS": 8103,
      "county": "Rio Blanco County"
    },
    {
      "FIPS": 8097,
      "county": "Pitkin County"
    },
    {
      "FIPS": 8081,
      "county": "Moffat County"
    },
    {
      "FIPS": 8073,
      "county": "Lincoln County"
    },
    {
      "FIPS": 8069,
      "county": "Larimer County"
    },
    {
      "FIPS": 8067,
      "county": "La Plata County"
    },
    {
      "FIPS": 8015,
      "county": "Chaffee County"
    },
    {
      "FIPS": 8003,
      "county": "Alamosa County"
    },
    {
      "FIPS": 8115,
      "county": "Sedgwick County"
    },
    {
      "FIPS": 8041,
      "county": "El Paso County"
    },
    {
      "FIPS": 8121,
      "county": "Washington County"
    },
    {
      "FIPS": 8071,
      "county": "Las Animas County"
    },
    {
      "FIPS": 8113,
      "county": "San Miguel County"
    },
    {
      "FIPS": 8095,
      "county": "Phillips County"
    },
    {
      "FIPS": 8045,
      "county": "Garfield County"
    },
    {
      "FIPS": 8039,
      "county": "Elbert County"
    },
    {
      "FIPS": 8079,
      "county": "Mineral County"
    },
    {
      "FIPS": 8033,
      "county": "Dolores County"
    },
    {
      "FIPS": 8013,
      "county": "Boulder County"
    },
    {
      "FIPS": 8021,
      "county": "Conejos County"
    },
    {
      "FIPS": 8119,
      "county": "Teller County"
    },
    {
      "FIPS": 8035,
      "county": "Douglas County"
    },
    {
      "FIPS": 8031,
      "county": "Denver County"
    },
    {
      "FIPS": 8059,
      "county": "Jefferson County"
    },
    {
      "FIPS": 8005,
      "county": "Arapahoe County"
    },
    {
      "FIPS": 8051,
      "county": "Gunnison County"
    },
    {
      "FIPS": 8053,
      "county": "Hinsdale County"
    },
    {
      "FIPS": 8087,
      "county": "Morgan County"
    },
    {
      "FIPS": 8025,
      "county": "Crowley County"
    },
    {
      "FIPS": 8117,
      "county": "Summit County"
    },
    {
      "FIPS": 8109,
      "county": "Saguache County"
    },
    {
      "FIPS": 8023,
      "county": "Costilla County"
    },
    {
      "FIPS": 8077,
      "county": "Mesa County"
    },
    {
      "FIPS": 8123,
      "county": "Weld County"
    },
    {
      "FIPS": 8107,
      "county": "Routt County"
    },
    {
      "FIPS": 8089,
      "county": "Otero County"
    },
    {
      "FIPS": 8075,
      "county": "Logan County"
    },
    {
      "FIPS": 8011,
      "county": "Bent County"
    },
    {
      "FIPS": 8009,
      "county": "Baca County"
    },
    {
      "FIPS": 8029,
      "county": "Delta County"
    },
    {
      "FIPS": 8037,
      "county": "Eagle County"
    },
    {
      "FIPS": 8049,
      "county": "Grand County"
    },
    {
      "FIPS": 8093,
      "county": "Park County"
    },
    {
      "FIPS": 8091,
      "county": "Ouray County"
    },
    {
      "FIPS": 8061,
      "county": "Kiowa County"
    },
    {
      "FIPS": 8125,
      "county": "Yuma County"
    },
    {
      "FIPS": 8001,
      "county": "Adams County"
    },
    {
      "FIPS": 8065,
      "county": "Lake County"
    },
    {
      "FIPS": 8101,
      "county": "Pueblo County"
    },
    {
      "FIPS": 8099,
      "county": "Prowers County"
    }
  ],
  "CT": [
    {
      "FIPS": 9011,
      "county": "New London County"
    },
    {
      "FIPS": 9007,
      "county": "Middlesex County"
    },
    {
      "FIPS": 9009,
      "county": "New Haven County"
    },
    {
      "FIPS": 9003,
      "county": "Hartford County"
    },
    {
      "FIPS": 9001,
      "county": "Fairfield County"
    },
    {
      "FIPS": 9005,
      "county": "Litchfield County"
    },
    {
      "FIPS": 9015,
      "county": "Windham County"
    },
    {
      "FIPS": 9013,
      "county": "Tolland County"
    }
  ],
  "DC": [
    {
      "FIPS": 11001,
      "county": "District of Columbia"
    }
  ],
  "DE": [
    {
      "FIPS": 10005,
      "county": "Sussex County"
    },
    {
      "FIPS": 10003,
      "county": "New Castle County"
    },
    {
      "FIPS": 10001,
      "county": "Kent County"
    }
  ],
  "FL": [
    {
      "FIPS": 12015,
      "county": "Charlotte County"
    },
    {
      "FIPS": 12039,
      "county": "Gadsden County"
    },
    {
      "FIPS": 12065,
      "county": "Jefferson County"
    },
    {
      "FIPS": 12037,
      "county": "Franklin County"
    },
    {
      "FIPS": 12063,
      "county": "Jackson County"
    },
    {
      "FIPS": 12117,
      "county": "Seminole County"
    },
    {
      "FIPS": 12097,
      "county": "Osceola County"
    },
    {
      "FIPS": 12087,
      "county": "Monroe County"
    },
    {
      "FIPS": 12023,
      "county": "Columbia County"
    },
    {
      "FIPS": 12095,
      "county": "Orange County"
    },
    {
      "FIPS": 12131,
      "county": "Walton County"
    },
    {
      "FIPS": 12129,
      "county": "Wakulla County"
    },
    {
      "FIPS": 12119,
      "county": "Sumter County"
    },
    {
      "FIPS": 12111,
      "county": "St Lucie County"
    },
    {
      "FIPS": 12113,
      "county": "Santa Rosa County"
    },
    {
      "FIPS": 12107,
      "county": "Putnam County"
    },
    {
      "FIPS": 12093,
      "county": "Okeechobee County"
    },
    {
      "FIPS": 12085,
      "county": "Martin County"
    },
    {
      "FIPS": 12067,
      "county": "Lafayette County"
    },
    {
      "FIPS": 12079,
      "county": "Madison County"
    },
    {
      "FIPS": 12061,
      "county": "Indian River County"
    },
    {
      "FIPS": 12059,
      "county": "Holmes County"
    },
    {
      "FIPS": 12055,
      "county": "Highlands County"
    },
    {
      "FIPS": 12047,
      "county": "Hamilton County"
    },
    {
      "FIPS": 12049,
      "county": "Hardee County"
    },
    {
      "FIPS": 12017,
      "county": "Citrus County"
    },
    {
      "FIPS": 12013,
      "county": "Calhoun County"
    },
    {
      "FIPS": 12007,
      "county": "Bradford County"
    },
    {
      "FIPS": 12083,
      "county": "Marion County"
    },
    {
      "FIPS": 12133,
      "county": "Washington County"
    },
    {
      "FIPS": 12127,
      "county": "Volusia County"
    },
    {
      "FIPS": 12041,
      "county": "Gilchrist County"
    },
    {
      "FIPS": 12043,
      "county": "Glades County"
    },
    {
      "FIPS": 12109,
      "county": "St Johns County"
    },
    {
      "FIPS": 12027,
      "county": "Desoto County"
    },
    {
      "FIPS": 12011,
      "county": "Broward County"
    },
    {
      "FIPS": 12089,
      "county": "Nassau County"
    },
    {
      "FIPS": 12086,
      "county": "Miami-Dade County"
    },
    {
      "FIPS": 12103,
      "county": "Pinellas County"
    },
    {
      "FIPS": 12035,
      "county": "Flagler County"
    },
    {
      "FIPS": 12115,
      "county": "Sarasota County"
    },
    {
      "FIPS": 12099,
      "county": "Palm Beach County"
    },
    {
      "FIPS": 12053,
      "county": "Hernando County"
    },
    {
      "FIPS": 12033,
      "county": "Escambia County"
    },
    {
      "FIPS": 12021,
      "county": "Collier County"
    },
    {
      "FIPS": 12001,
      "county": "Alachua County"
    },
    {
      "FIPS": 12123,
      "county": "Taylor County"
    },
    {
      "FIPS": 12051,
      "county": "Hendry County"
    },
    {
      "FIPS": 12057,
      "county": "Hillsborough County"
    },
    {
      "FIPS": 12009,
      "county": "Brevard County"
    },
    {
      "FIPS": 12091,
      "county": "Okaloosa County"
    },
    {
      "FIPS": 12121,
      "county": "Suwannee County"
    },
    {
      "FIPS": 12077,
      "county": "Liberty County"
    },
    {
      "FIPS": 12081,
      "county": "Manatee County"
    },
    {
      "FIPS": 12071,
      "county": "Lee County"
    },
    {
      "FIPS": 12029,
      "county": "Dixie County"
    },
    {
      "FIPS": 12031,
      "county": "Duval County"
    },
    {
      "FIPS": 12125,
      "county": "Union County"
    },
    {
      "FIPS": 12045,
      "county": "Gulf County"
    },
    {
      "FIPS": 12019,
      "county": "Clay County"
    },
    {
      "FIPS": 12075,
      "county": "Levy County"
    },
    {
      "FIPS": 12105,
      "county": "Polk County"
    },
    {
      "FIPS": 12005,
      "county": "Bay County"
    },
    {
      "FIPS": 12003,
      "county": "Baker County"
    },
    {
      "FIPS": 12069,
      "county": "Lake County"
    },
    {
      "FIPS": 12073,
      "county": "Leon County"
    },
    {
      "FIPS": 12101,
      "county": "Pasco County"
    }
  ],
  "GA": [
    {
      "FIPS": 13261,
      "county": "Sumter County"
    },
    {
      "FIPS": 13071,
      "county": "Colquitt County"
    },
    {
      "FIPS": 13117,
      "county": "Forsyth County"
    },
    {
      "FIPS": 13085,
      "county": "Dawson County"
    },
    {
      "FIPS": 13207,
      "county": "Monroe County"
    },
    {
      "FIPS": 13037,
      "county": "Calhoun County"
    },
    {
      "FIPS": 13157,
      "county": "Jackson County"
    },
    {
      "FIPS": 13239,
      "county": "Quitman County"
    },
    {
      "FIPS": 13245,
      "county": "Richmond County"
    },
    {
      "FIPS": 13307,
      "county": "Webster County"
    },
    {
      "FIPS": 13209,
      "county": "Montgomery County"
    },
    {
      "FIPS": 13101,
      "county": "Echols County"
    },
    {
      "FIPS": 13195,
      "county": "Madison County"
    },
    {
      "FIPS": 13259,
      "county": "Stewart County"
    },
    {
      "FIPS": 13125,
      "county": "Glascock County"
    },
    {
      "FIPS": 13287,
      "county": "Turner County"
    },
    {
      "FIPS": 13119,
      "county": "Franklin County"
    },
    {
      "FIPS": 13027,
      "county": "Brooks County"
    },
    {
      "FIPS": 13023,
      "county": "Bleckley County"
    },
    {
      "FIPS": 13047,
      "county": "Catoosa County"
    },
    {
      "FIPS": 13161,
      "county": "Jeff Davis County"
    },
    {
      "FIPS": 13191,
      "county": "McIntosh County"
    },
    {
      "FIPS": 13315,
      "county": "Wilcox County"
    },
    {
      "FIPS": 13105,
      "county": "Elbert County"
    },
    {
      "FIPS": 13255,
      "county": "Spalding County"
    },
    {
      "FIPS": 13235,
      "county": "Pulaski County"
    },
    {
      "FIPS": 13199,
      "county": "Meriwether County"
    },
    {
      "FIPS": 13317,
      "county": "Wilkes County"
    },
    {
      "FIPS": 13313,
      "county": "Whitfield County"
    },
    {
      "FIPS": 13309,
      "county": "Wheeler County"
    },
    {
      "FIPS": 13297,
      "county": "Walton County"
    },
    {
      "FIPS": 13295,
      "county": "Walker County"
    },
    {
      "FIPS": 13289,
      "county": "Twiggs County"
    },
    {
      "FIPS": 13279,
      "county": "Toombs County"
    },
    {
      "FIPS": 13273,
      "county": "Terrell County"
    },
    {
      "FIPS": 13271,
      "county": "Telfair County"
    },
    {
      "FIPS": 13267,
      "county": "Tattnall County"
    },
    {
      "FIPS": 13301,
      "county": "Warren County"
    },
    {
      "FIPS": 13253,
      "county": "Seminole County"
    },
    {
      "FIPS": 13237,
      "county": "Putnam County"
    },
    {
      "FIPS": 13219,
      "county": "Oconee County"
    },
    {
      "FIPS": 13213,
      "county": "Murray County"
    },
    {
      "FIPS": 13201,
      "county": "Miller County"
    },
    {
      "FIPS": 13197,
      "county": "Marion County"
    },
    {
      "FIPS": 13181,
      "county": "Lincoln County"
    },
    {
      "FIPS": 13049,
      "county": "Charlton County"
    },
    {
      "FIPS": 13165,
      "county": "Jenkins County"
    },
    {
      "FIPS": 13163,
      "county": "Jefferson County"
    },
    {
      "FIPS": 13243,
      "county": "Randolph County"
    },
    {
      "FIPS": 13145,
      "county": "Harris County"
    },
    {
      "FIPS": 13283,
      "county": "Treutlen County"
    },
    {
      "FIPS": 13143,
      "county": "Haralson County"
    },
    {
      "FIPS": 13137,
      "county": "Habersham County"
    },
    {
      "FIPS": 13133,
      "county": "Greene County"
    },
    {
      "FIPS": 13129,
      "county": "Gordon County"
    },
    {
      "FIPS": 13097,
      "county": "Douglas County"
    },
    {
      "FIPS": 13123,
      "county": "Gilmer County"
    },
    {
      "FIPS": 13107,
      "county": "Emanuel County"
    },
    {
      "FIPS": 13103,
      "county": "Effingham County"
    },
    {
      "FIPS": 13095,
      "county": "Dougherty County"
    },
    {
      "FIPS": 13079,
      "county": "Crawford County"
    },
    {
      "FIPS": 13251,
      "county": "Screven County"
    },
    {
      "FIPS": 13073,
      "county": "Columbia County"
    },
    {
      "FIPS": 13043,
      "county": "Candler County"
    },
    {
      "FIPS": 13039,
      "county": "Camden County"
    },
    {
      "FIPS": 13211,
      "county": "Morgan County"
    },
    {
      "FIPS": 13025,
      "county": "Brantley County"
    },
    {
      "FIPS": 13229,
      "county": "Pierce County"
    },
    {
      "FIPS": 13173,
      "county": "Lanier County"
    },
    {
      "FIPS": 13055,
      "county": "Chattooga County"
    },
    {
      "FIPS": 13077,
      "county": "Coweta County"
    },
    {
      "FIPS": 13019,
      "county": "Berrien County"
    },
    {
      "FIPS": 13159,
      "county": "Jasper County"
    },
    {
      "FIPS": 13269,
      "county": "Taylor County"
    },
    {
      "FIPS": 13257,
      "county": "Stephens County"
    },
    {
      "FIPS": 13059,
      "county": "Clarke County"
    },
    {
      "FIPS": 13167,
      "county": "Johnson County"
    },
    {
      "FIPS": 13319,
      "county": "Wilkinson County"
    },
    {
      "FIPS": 13205,
      "county": "Mitchell County"
    },
    {
      "FIPS": 13187,
      "county": "Lumpkin County"
    },
    {
      "FIPS": 13265,
      "county": "Taliaferro County"
    },
    {
      "FIPS": 13001,
      "county": "Appling County"
    },
    {
      "FIPS": 13051,
      "county": "Chatham County"
    },
    {
      "FIPS": 13141,
      "county": "Hancock County"
    },
    {
      "FIPS": 13009,
      "county": "Baldwin County"
    },
    {
      "FIPS": 13017,
      "county": "Ben Hill County"
    },
    {
      "FIPS": 13221,
      "county": "Oglethorpe County"
    },
    {
      "FIPS": 13215,
      "county": "Muscogee County"
    },
    {
      "FIPS": 13153,
      "county": "Houston County"
    },
    {
      "FIPS": 13135,
      "county": "Gwinnett County"
    },
    {
      "FIPS": 13057,
      "county": "Cherokee County"
    },
    {
      "FIPS": 13053,
      "county": "Chattahoochee County"
    },
    {
      "FIPS": 13185,
      "county": "Lowndes County"
    },
    {
      "FIPS": 13179,
      "county": "Liberty County"
    },
    {
      "FIPS": 13247,
      "county": "Rockdale County"
    },
    {
      "FIPS": 13217,
      "county": "Newton County"
    },
    {
      "FIPS": 13249,
      "county": "Schley County"
    },
    {
      "FIPS": 13003,
      "county": "Atkinson County"
    },
    {
      "FIPS": 13031,
      "county": "Bulloch County"
    },
    {
      "FIPS": 13263,
      "county": "Talbot County"
    },
    {
      "FIPS": 13189,
      "county": "McDuffie County"
    },
    {
      "FIPS": 13063,
      "county": "Clayton County"
    },
    {
      "FIPS": 13113,
      "county": "Fayette County"
    },
    {
      "FIPS": 13175,
      "county": "Laurens County"
    },
    {
      "FIPS": 13065,
      "county": "Clinch County"
    },
    {
      "FIPS": 13227,
      "county": "Pickens County"
    },
    {
      "FIPS": 13069,
      "county": "Coffee County"
    },
    {
      "FIPS": 13045,
      "county": "Carroll County"
    },
    {
      "FIPS": 13223,
      "county": "Paulding County"
    },
    {
      "FIPS": 13111,
      "county": "Fannin County"
    },
    {
      "FIPS": 13303,
      "county": "Washington County"
    },
    {
      "FIPS": 13089,
      "county": "Dekalb County"
    },
    {
      "FIPS": 13275,
      "county": "Thomas County"
    },
    {
      "FIPS": 13121,
      "county": "Fulton County"
    },
    {
      "FIPS": 13087,
      "county": "Decatur County"
    },
    {
      "FIPS": 13013,
      "county": "Barrow County"
    },
    {
      "FIPS": 13193,
      "county": "Macon County"
    },
    {
      "FIPS": 13127,
      "county": "Glynn County"
    },
    {
      "FIPS": 13131,
      "county": "Grady County"
    },
    {
      "FIPS": 13029,
      "county": "Bryan County"
    },
    {
      "FIPS": 13171,
      "county": "Lamar County"
    },
    {
      "FIPS": 13081,
      "county": "Crisp County"
    },
    {
      "FIPS": 13093,
      "county": "Dooly County"
    },
    {
      "FIPS": 13099,
      "county": "Early County"
    },
    {
      "FIPS": 13021,
      "county": "Bibb County"
    },
    {
      "FIPS": 13169,
      "county": "Jones County"
    },
    {
      "FIPS": 13005,
      "county": "Bacon County"
    },
    {
      "FIPS": 13305,
      "county": "Wayne County"
    },
    {
      "FIPS": 13299,
      "county": "Ware County"
    },
    {
      "FIPS": 13291,
      "county": "Union County"
    },
    {
      "FIPS": 13183,
      "county": "Long County"
    },
    {
      "FIPS": 13155,
      "county": "Irwin County"
    },
    {
      "FIPS": 13147,
      "county": "Hart County"
    },
    {
      "FIPS": 13139,
      "county": "Hall County"
    },
    {
      "FIPS": 13075,
      "county": "Cook County"
    },
    {
      "FIPS": 13233,
      "county": "Polk County"
    },
    {
      "FIPS": 13035,
      "county": "Butts County"
    },
    {
      "FIPS": 13033,
      "county": "Burke County"
    },
    {
      "FIPS": 13225,
      "county": "Peach County"
    },
    {
      "FIPS": 13311,
      "county": "White County"
    },
    {
      "FIPS": 13321,
      "county": "Worth County"
    },
    {
      "FIPS": 13277,
      "county": "Tift County"
    },
    {
      "FIPS": 13151,
      "county": "Henry County"
    },
    {
      "FIPS": 13083,
      "county": "Dade County"
    },
    {
      "FIPS": 13115,
      "county": "Floyd County"
    },
    {
      "FIPS": 13109,
      "county": "Evans County"
    },
    {
      "FIPS": 13011,
      "county": "Banks County"
    },
    {
      "FIPS": 13281,
      "county": "Towns County"
    },
    {
      "FIPS": 13007,
      "county": "Baker County"
    },
    {
      "FIPS": 13149,
      "county": "Heard County"
    },
    {
      "FIPS": 13061,
      "county": "Clay County"
    },
    {
      "FIPS": 13293,
      "county": "Upson County"
    },
    {
      "FIPS": 13177,
      "county": "Lee County"
    },
    {
      "FIPS": 13091,
      "county": "Dodge County"
    },
    {
      "FIPS": 13285,
      "county": "Troup County"
    },
    {
      "FIPS": 13241,
      "county": "Rabun County"
    },
    {
      "FIPS": 13231,
      "county": "Pike County"
    },
    {
      "FIPS": 13067,
      "county": "Cobb County"
    }
  ],
  "HI": [
    {
      "FIPS": 15001,
      "county": "Hawaii County"
    },
    {
      "FIPS": 15003,
      "county": "Honolulu County"
    },
    {
      "FIPS": 15005,
      "county": "Kalawao County"
    },
    {
      "FIPS": 15009,
      "county": "Maui County"
    },
    {
      "FIPS": 15007,
      "county": "Kauai County"
    }
  ],
  "IA": [
    {
      "FIPS": 19193,
      "county": "Woodbury County"
    },
    {
      "FIPS": 19079,
      "county": "Hamilton County"
    },
    {
      "FIPS": 19035,
      "county": "Cherokee County"
    },
    {
      "FIPS": 19183,
      "county": "Washington County"
    },
    {
      "FIPS": 19147,
      "county": "Palo Alto County"
    },
    {
      "FIPS": 19089,
      "county": "Howard County"
    },
    {
      "FIPS": 19115,
      "county": "Louisa County"
    },
    {
      "FIPS": 19033,
      "county": "Cerro Gordo County"
    },
    {
      "FIPS": 19121,
      "county": "Madison County"
    },
    {
      "FIPS": 19191,
      "county": "Winneshiek County"
    },
    {
      "FIPS": 19037,
      "county": "Chickasaw County"
    },
    {
      "FIPS": 19099,
      "county": "Jasper County"
    },
    {
      "FIPS": 19025,
      "county": "Calhoun County"
    },
    {
      "FIPS": 19139,
      "county": "Muscatine County"
    },
    {
      "FIPS": 19189,
      "county": "Winnebago County"
    },
    {
      "FIPS": 19179,
      "county": "Wapello County"
    },
    {
      "FIPS": 19165,
      "county": "Shelby County"
    },
    {
      "FIPS": 19181,
      "county": "Warren County"
    },
    {
      "FIPS": 19137,
      "county": "Montgomery County"
    },
    {
      "FIPS": 19133,
      "county": "Monona County"
    },
    {
      "FIPS": 19131,
      "county": "Mitchell County"
    },
    {
      "FIPS": 19123,
      "county": "Mahaska County"
    },
    {
      "FIPS": 19109,
      "county": "Kossuth County"
    },
    {
      "FIPS": 19107,
      "county": "Keokuk County"
    },
    {
      "FIPS": 19097,
      "county": "Jackson County"
    },
    {
      "FIPS": 19091,
      "county": "Humboldt County"
    },
    {
      "FIPS": 19083,
      "county": "Hardin County"
    },
    {
      "FIPS": 19077,
      "county": "Guthrie County"
    },
    {
      "FIPS": 19075,
      "county": "Grundy County"
    },
    {
      "FIPS": 19073,
      "county": "Greene County"
    },
    {
      "FIPS": 19069,
      "county": "Franklin County"
    },
    {
      "FIPS": 19151,
      "county": "Pocahontas County"
    },
    {
      "FIPS": 19061,
      "county": "Dubuque County"
    },
    {
      "FIPS": 19059,
      "county": "Dickinson County"
    },
    {
      "FIPS": 19057,
      "county": "Des Moines County"
    },
    {
      "FIPS": 19045,
      "county": "Clinton County"
    },
    {
      "FIPS": 19039,
      "county": "Clarke County"
    },
    {
      "FIPS": 19023,
      "county": "Butler County"
    },
    {
      "FIPS": 19021,
      "county": "Buena Vista County"
    },
    {
      "FIPS": 19019,
      "county": "Buchanan County"
    },
    {
      "FIPS": 19149,
      "county": "Plymouth County"
    },
    {
      "FIPS": 19127,
      "county": "Marshall County"
    },
    {
      "FIPS": 19135,
      "county": "Monroe County"
    },
    {
      "FIPS": 19143,
      "county": "Osceola County"
    },
    {
      "FIPS": 19141,
      "county": "Obrien County"
    },
    {
      "FIPS": 19085,
      "county": "Harrison County"
    },
    {
      "FIPS": 19187,
      "county": "Webster County"
    },
    {
      "FIPS": 19177,
      "county": "Van Buren County"
    },
    {
      "FIPS": 19047,
      "county": "Crawford County"
    },
    {
      "FIPS": 19101,
      "county": "Jefferson County"
    },
    {
      "FIPS": 19049,
      "county": "Dallas County"
    },
    {
      "FIPS": 19009,
      "county": "Audubon County"
    },
    {
      "FIPS": 19157,
      "county": "Poweshiek County"
    },
    {
      "FIPS": 19103,
      "county": "Johnson County"
    },
    {
      "FIPS": 19005,
      "county": "Allamakee County"
    },
    {
      "FIPS": 19013,
      "county": "Black Hawk County"
    },
    {
      "FIPS": 19065,
      "county": "Fayette County"
    },
    {
      "FIPS": 19007,
      "county": "Appanoose County"
    },
    {
      "FIPS": 19055,
      "county": "Delaware County"
    },
    {
      "FIPS": 19017,
      "county": "Bremer County"
    },
    {
      "FIPS": 19011,
      "county": "Benton County"
    },
    {
      "FIPS": 19125,
      "county": "Marion County"
    },
    {
      "FIPS": 19155,
      "county": "Pottawattamie County"
    },
    {
      "FIPS": 19173,
      "county": "Taylor County"
    },
    {
      "FIPS": 19071,
      "county": "Fremont County"
    },
    {
      "FIPS": 19053,
      "county": "Decatur County"
    },
    {
      "FIPS": 19197,
      "county": "Wright County"
    },
    {
      "FIPS": 19081,
      "county": "Hancock County"
    },
    {
      "FIPS": 19159,
      "county": "Ringgold County"
    },
    {
      "FIPS": 19027,
      "county": "Carroll County"
    },
    {
      "FIPS": 19043,
      "county": "Clayton County"
    },
    {
      "FIPS": 19129,
      "county": "Mills County"
    },
    {
      "FIPS": 19041,
      "county": "Clay County"
    },
    {
      "FIPS": 19093,
      "county": "Ida County"
    },
    {
      "FIPS": 19195,
      "county": "Worth County"
    },
    {
      "FIPS": 19113,
      "county": "Linn County"
    },
    {
      "FIPS": 19111,
      "county": "Lee County"
    },
    {
      "FIPS": 19119,
      "county": "Lyon County"
    },
    {
      "FIPS": 19087,
      "county": "Henry County"
    },
    {
      "FIPS": 19051,
      "county": "Davis County"
    },
    {
      "FIPS": 19169,
      "county": "Story County"
    },
    {
      "FIPS": 19031,
      "county": "Cedar County"
    },
    {
      "FIPS": 19029,
      "county": "Cass County"
    },
    {
      "FIPS": 19015,
      "county": "Boone County"
    },
    {
      "FIPS": 19001,
      "county": "Adair County"
    },
    {
      "FIPS": 19095,
      "county": "Iowa County"
    },
    {
      "FIPS": 19153,
      "county": "Polk County"
    },
    {
      "FIPS": 19145,
      "county": "Page County"
    },
    {
      "FIPS": 19067,
      "county": "Floyd County"
    },
    {
      "FIPS": 19171,
      "county": "Tama County"
    },
    {
      "FIPS": 19063,
      "county": "Emmet County"
    },
    {
      "FIPS": 19185,
      "county": "Wayne County"
    },
    {
      "FIPS": 19163,
      "county": "Scott County"
    },
    {
      "FIPS": 19167,
      "county": "Sioux County"
    },
    {
      "FIPS": 19175,
      "county": "Union County"
    },
    {
      "FIPS": 19161,
      "county": "Sac County"
    },
    {
      "FIPS": 19117,
      "county": "Lucas County"
    },
    {
      "FIPS": 19105,
      "county": "Jones County"
    },
    {
      "FIPS": 19003,
      "county": "Adams County"
    }
  ],
  "ID": [
    {
      "FIPS": 16085,
      "county": "Valley County"
    },
    {
      "FIPS": 16039,
      "county": "Elmore County"
    },
    {
      "FIPS": 16069,
      "county": "Nez Perce County"
    },
    {
      "FIPS": 16065,
      "county": "Madison County"
    },
    {
      "FIPS": 16053,
      "county": "Jerome County"
    },
    {
      "FIPS": 16051,
      "county": "Jefferson County"
    },
    {
      "FIPS": 16041,
      "county": "Franklin County"
    },
    {
      "FIPS": 16029,
      "county": "Caribou County"
    },
    {
      "FIPS": 16083,
      "county": "Twin Falls County"
    },
    {
      "FIPS": 16047,
      "county": "Gooding County"
    },
    {
      "FIPS": 16031,
      "county": "Cassia County"
    },
    {
      "FIPS": 16073,
      "county": "Owyhee County"
    },
    {
      "FIPS": 16011,
      "county": "Bingham County"
    },
    {
      "FIPS": 16075,
      "county": "Payette County"
    },
    {
      "FIPS": 16079,
      "county": "Shoshone County"
    },
    {
      "FIPS": 16013,
      "county": "Blaine County"
    },
    {
      "FIPS": 16017,
      "county": "Bonner County"
    },
    {
      "FIPS": 16063,
      "county": "Lincoln County"
    },
    {
      "FIPS": 16037,
      "county": "Custer County"
    },
    {
      "FIPS": 16071,
      "county": "Oneida County"
    },
    {
      "FIPS": 16019,
      "county": "Bonneville County"
    },
    {
      "FIPS": 16027,
      "county": "Canyon County"
    },
    {
      "FIPS": 16035,
      "county": "Clearwater County"
    },
    {
      "FIPS": 16055,
      "county": "Kootenai County"
    },
    {
      "FIPS": 16009,
      "county": "Benewah County"
    },
    {
      "FIPS": 16021,
      "county": "Boundary County"
    },
    {
      "FIPS": 16043,
      "county": "Fremont County"
    },
    {
      "FIPS": 16067,
      "county": "Minidoka County"
    },
    {
      "FIPS": 16005,
      "county": "Bannock County"
    },
    {
      "FIPS": 16087,
      "county": "Washington County"
    },
    {
      "FIPS": 16007,
      "county": "Bear Lake County"
    },
    {
      "FIPS": 16059,
      "county": "Lemhi County"
    },
    {
      "FIPS": 16057,
      "county": "Latah County"
    },
    {
      "FIPS": 16045,
      "county": "Gem County"
    },
    {
      "FIPS": 16081,
      "county": "Teton County"
    },
    {
      "FIPS": 16077,
      "county": "Power County"
    },
    {
      "FIPS": 16003,
      "county": "Adams County"
    },
    {
      "FIPS": 16025,
      "county": "Camas County"
    },
    {
      "FIPS": 16033,
      "county": "Clark County"
    },
    {
      "FIPS": 16001,
      "county": "Ada County"
    },
    {
      "FIPS": 16049,
      "county": "Idaho County"
    },
    {
      "FIPS": 16015,
      "county": "Boise County"
    },
    {
      "FIPS": 16061,
      "county": "Lewis County"
    },
    {
      "FIPS": 16023,
      "county": "Butte County"
    }
  ],
  "IL": [
    {
      "FIPS": 17083,
      "county": "Jersey County"
    },
    {
      "FIPS": 17155,
      "county": "Putnam County"
    },
    {
      "FIPS": 17037,
      "county": "Dekalb County"
    },
    {
      "FIPS": 17153,
      "county": "Pulaski County"
    },
    {
      "FIPS": 17043,
      "county": "Dupage County"
    },
    {
      "FIPS": 17057,
      "county": "Fulton County"
    },
    {
      "FIPS": 17051,
      "county": "Fayette County"
    },
    {
      "FIPS": 17055,
      "county": "Franklin County"
    },
    {
      "FIPS": 17081,
      "county": "Jefferson County"
    },
    {
      "FIPS": 17041,
      "county": "Douglas County"
    },
    {
      "FIPS": 17135,
      "county": "Montgomery County"
    },
    {
      "FIPS": 17133,
      "county": "Monroe County"
    },
    {
      "FIPS": 17203,
      "county": "Woodford County"
    },
    {
      "FIPS": 17201,
      "county": "Winnebago County"
    },
    {
      "FIPS": 17199,
      "county": "Williamson County"
    },
    {
      "FIPS": 17183,
      "county": "Vermilion County"
    },
    {
      "FIPS": 17157,
      "county": "Randolph County"
    },
    {
      "FIPS": 17143,
      "county": "Peoria County"
    },
    {
      "FIPS": 17137,
      "county": "Morgan County"
    },
    {
      "FIPS": 17113,
      "county": "McLean County"
    },
    {
      "FIPS": 17127,
      "county": "Massac County"
    },
    {
      "FIPS": 17117,
      "county": "Macoupin County"
    },
    {
      "FIPS": 17091,
      "county": "Kankakee County"
    },
    {
      "FIPS": 17075,
      "county": "Iroquois County"
    },
    {
      "FIPS": 17063,
      "county": "Grundy County"
    },
    {
      "FIPS": 17049,
      "county": "Effingham County"
    },
    {
      "FIPS": 17047,
      "county": "Edwards County"
    },
    {
      "FIPS": 17027,
      "county": "Clinton County"
    },
    {
      "FIPS": 17021,
      "county": "Christian County"
    },
    {
      "FIPS": 17033,
      "county": "Crawford County"
    },
    {
      "FIPS": 17011,
      "county": "Bureau County"
    },
    {
      "FIPS": 17003,
      "county": "Alexander County"
    },
    {
      "FIPS": 17105,
      "county": "Livingston County"
    },
    {
      "FIPS": 17165,
      "county": "Saline County"
    },
    {
      "FIPS": 17065,
      "county": "Hamilton County"
    },
    {
      "FIPS": 17167,
      "county": "Sangamon County"
    },
    {
      "FIPS": 17067,
      "county": "Hancock County"
    },
    {
      "FIPS": 17177,
      "county": "Stephenson County"
    },
    {
      "FIPS": 17187,
      "county": "Warren County"
    },
    {
      "FIPS": 17185,
      "county": "Wabash County"
    },
    {
      "FIPS": 17159,
      "county": "Richland County"
    },
    {
      "FIPS": 17079,
      "county": "Jasper County"
    },
    {
      "FIPS": 17173,
      "county": "Shelby County"
    },
    {
      "FIPS": 17109,
      "county": "McDonough County"
    },
    {
      "FIPS": 17139,
      "county": "Moultrie County"
    },
    {
      "FIPS": 17123,
      "county": "Marshall County"
    },
    {
      "FIPS": 17059,
      "county": "Gallatin County"
    },
    {
      "FIPS": 17039,
      "county": "De Witt County"
    },
    {
      "FIPS": 17099,
      "county": "La Salle County"
    },
    {
      "FIPS": 17077,
      "county": "Jackson County"
    },
    {
      "FIPS": 17161,
      "county": "Rock Island County"
    },
    {
      "FIPS": 17111,
      "county": "McHenry County"
    },
    {
      "FIPS": 17131,
      "county": "Mercer County"
    },
    {
      "FIPS": 17101,
      "county": "Lawrence County"
    },
    {
      "FIPS": 17087,
      "county": "Johnson County"
    },
    {
      "FIPS": 17119,
      "county": "Madison County"
    },
    {
      "FIPS": 17163,
      "county": "St Clair County"
    },
    {
      "FIPS": 17169,
      "county": "Schuyler County"
    },
    {
      "FIPS": 17019,
      "county": "Champaign County"
    },
    {
      "FIPS": 17121,
      "county": "Marion County"
    },
    {
      "FIPS": 17085,
      "county": "Jo Daviess County"
    },
    {
      "FIPS": 17093,
      "county": "Kendall County"
    },
    {
      "FIPS": 17069,
      "county": "Hardin County"
    },
    {
      "FIPS": 17189,
      "county": "Washington County"
    },
    {
      "FIPS": 17071,
      "county": "Henderson County"
    },
    {
      "FIPS": 17013,
      "county": "Calhoun County"
    },
    {
      "FIPS": 17129,
      "county": "Menard County"
    },
    {
      "FIPS": 17179,
      "county": "Tazewell County"
    },
    {
      "FIPS": 17061,
      "county": "Greene County"
    },
    {
      "FIPS": 17035,
      "county": "Cumberland County"
    },
    {
      "FIPS": 17195,
      "county": "Whiteside County"
    },
    {
      "FIPS": 17015,
      "county": "Carroll County"
    },
    {
      "FIPS": 17191,
      "county": "Wayne County"
    },
    {
      "FIPS": 17193,
      "county": "White County"
    },
    {
      "FIPS": 17103,
      "county": "Lee County"
    },
    {
      "FIPS": 17197,
      "county": "Will County"
    },
    {
      "FIPS": 17097,
      "county": "Lake County"
    },
    {
      "FIPS": 17175,
      "county": "Stark County"
    },
    {
      "FIPS": 17149,
      "county": "Pike County"
    },
    {
      "FIPS": 17141,
      "county": "Ogle County"
    },
    {
      "FIPS": 17053,
      "county": "Ford County"
    },
    {
      "FIPS": 17045,
      "county": "Edgar County"
    },
    {
      "FIPS": 17029,
      "county": "Coles County"
    },
    {
      "FIPS": 17025,
      "county": "Clay County"
    },
    {
      "FIPS": 17023,
      "county": "Clark County"
    },
    {
      "FIPS": 17181,
      "county": "Union County"
    },
    {
      "FIPS": 17017,
      "county": "Cass County"
    },
    {
      "FIPS": 17073,
      "county": "Henry County"
    },
    {
      "FIPS": 17005,
      "county": "Bond County"
    },
    {
      "FIPS": 17009,
      "county": "Brown County"
    },
    {
      "FIPS": 17001,
      "county": "Adams County"
    },
    {
      "FIPS": 17147,
      "county": "Piatt County"
    },
    {
      "FIPS": 17145,
      "county": "Perry County"
    },
    {
      "FIPS": 17031,
      "county": "Cook County"
    },
    {
      "FIPS": 17125,
      "county": "Mason County"
    },
    {
      "FIPS": 17095,
      "county": "Knox County"
    },
    {
      "FIPS": 17171,
      "county": "Scott County"
    },
    {
      "FIPS": 17089,
      "county": "Kane County"
    },
    {
      "FIPS": 17007,
      "county": "Boone County"
    },
    {
      "FIPS": 17115,
      "county": "Macon County"
    },
    {
      "FIPS": 17151,
      "county": "Pope County"
    },
    {
      "FIPS": 17107,
      "county": "Logan County"
    },
    {
      "FIPS": 17083,
      "county": "Jersey County"
    }
  ],
  "IN": [
    {
      "FIPS": 18169,
      "county": "Wabash County"
    },
    {
      "FIPS": 18055,
      "county": "Greene County"
    },
    {
      "FIPS": 18029,
      "county": "Dearborn County"
    },
    {
      "FIPS": 18183,
      "county": "Whitley County"
    },
    {
      "FIPS": 18049,
      "county": "Fulton County"
    },
    {
      "FIPS": 18099,
      "county": "Marshall County"
    },
    {
      "FIPS": 18175,
      "county": "Washington County"
    },
    {
      "FIPS": 18171,
      "county": "Warren County"
    },
    {
      "FIPS": 18165,
      "county": "Vermillion County"
    },
    {
      "FIPS": 18159,
      "county": "Tipton County"
    },
    {
      "FIPS": 18145,
      "county": "Shelby County"
    },
    {
      "FIPS": 18005,
      "county": "Bartholomew County"
    },
    {
      "FIPS": 18137,
      "county": "Ripley County"
    },
    {
      "FIPS": 18131,
      "county": "Pulaski County"
    },
    {
      "FIPS": 18109,
      "county": "Morgan County"
    },
    {
      "FIPS": 18101,
      "county": "Martin County"
    },
    {
      "FIPS": 18095,
      "county": "Madison County"
    },
    {
      "FIPS": 18093,
      "county": "Lawrence County"
    },
    {
      "FIPS": 18087,
      "county": "Lagrange County"
    },
    {
      "FIPS": 18085,
      "county": "Kosciusko County"
    },
    {
      "FIPS": 18073,
      "county": "Jasper County"
    },
    {
      "FIPS": 18041,
      "county": "Fayette County"
    },
    {
      "FIPS": 18097,
      "county": "Marion County"
    },
    {
      "FIPS": 18033,
      "county": "De Kalb County"
    },
    {
      "FIPS": 18027,
      "county": "Daviess County"
    },
    {
      "FIPS": 18025,
      "county": "Crawford County"
    },
    {
      "FIPS": 18135,
      "county": "Randolph County"
    },
    {
      "FIPS": 18067,
      "county": "Howard County"
    },
    {
      "FIPS": 18051,
      "county": "Gibson County"
    },
    {
      "FIPS": 18061,
      "county": "Harrison County"
    },
    {
      "FIPS": 18059,
      "county": "Hancock County"
    },
    {
      "FIPS": 18105,
      "county": "Monroe County"
    },
    {
      "FIPS": 18157,
      "county": "Tippecanoe County"
    },
    {
      "FIPS": 18035,
      "county": "Delaware County"
    },
    {
      "FIPS": 18081,
      "county": "Johnson County"
    },
    {
      "FIPS": 18077,
      "county": "Jefferson County"
    },
    {
      "FIPS": 18149,
      "county": "Starke County"
    },
    {
      "FIPS": 18141,
      "county": "St Joseph County"
    },
    {
      "FIPS": 18111,
      "county": "Newton County"
    },
    {
      "FIPS": 18039,
      "county": "Elkhart County"
    },
    {
      "FIPS": 18155,
      "county": "Switzerland County"
    },
    {
      "FIPS": 18091,
      "county": "La Porte County"
    },
    {
      "FIPS": 18151,
      "county": "Steuben County"
    },
    {
      "FIPS": 18015,
      "county": "Carroll County"
    },
    {
      "FIPS": 18069,
      "county": "Huntington County"
    },
    {
      "FIPS": 18071,
      "county": "Jackson County"
    },
    {
      "FIPS": 18047,
      "county": "Franklin County"
    },
    {
      "FIPS": 18031,
      "county": "Decatur County"
    },
    {
      "FIPS": 18079,
      "county": "Jennings County"
    },
    {
      "FIPS": 18153,
      "county": "Sullivan County"
    },
    {
      "FIPS": 18147,
      "county": "Spencer County"
    },
    {
      "FIPS": 18173,
      "county": "Warrick County"
    },
    {
      "FIPS": 18163,
      "county": "Vanderburgh County"
    },
    {
      "FIPS": 18127,
      "county": "Porter County"
    },
    {
      "FIPS": 18023,
      "county": "Clinton County"
    },
    {
      "FIPS": 18057,
      "county": "Hamilton County"
    },
    {
      "FIPS": 18063,
      "county": "Hendricks County"
    },
    {
      "FIPS": 18133,
      "county": "Putnam County"
    },
    {
      "FIPS": 18037,
      "county": "Dubois County"
    },
    {
      "FIPS": 18117,
      "county": "Orange County"
    },
    {
      "FIPS": 18045,
      "county": "Fountain County"
    },
    {
      "FIPS": 18107,
      "county": "Montgomery County"
    },
    {
      "FIPS": 18007,
      "county": "Benton County"
    },
    {
      "FIPS": 18009,
      "county": "Blackford County"
    },
    {
      "FIPS": 18003,
      "county": "Allen County"
    },
    {
      "FIPS": 18075,
      "county": "Jay County"
    },
    {
      "FIPS": 18181,
      "county": "White County"
    },
    {
      "FIPS": 18167,
      "county": "Vigo County"
    },
    {
      "FIPS": 18161,
      "county": "Union County"
    },
    {
      "FIPS": 18143,
      "county": "Scott County"
    },
    {
      "FIPS": 18139,
      "county": "Rush County"
    },
    {
      "FIPS": 18129,
      "county": "Posey County"
    },
    {
      "FIPS": 18125,
      "county": "Pike County"
    },
    {
      "FIPS": 18123,
      "county": "Perry County"
    },
    {
      "FIPS": 18121,
      "county": "Parke County"
    },
    {
      "FIPS": 18113,
      "county": "Noble County"
    },
    {
      "FIPS": 18103,
      "county": "Miami County"
    },
    {
      "FIPS": 18089,
      "county": "Lake County"
    },
    {
      "FIPS": 18083,
      "county": "Knox County"
    },
    {
      "FIPS": 18021,
      "county": "Clay County"
    },
    {
      "FIPS": 18019,
      "county": "Clark County"
    },
    {
      "FIPS": 18119,
      "county": "Owen County"
    },
    {
      "FIPS": 18115,
      "county": "Ohio County"
    },
    {
      "FIPS": 18017,
      "county": "Cass County"
    },
    {
      "FIPS": 18053,
      "county": "Grant County"
    },
    {
      "FIPS": 18065,
      "county": "Henry County"
    },
    {
      "FIPS": 18001,
      "county": "Adams County"
    },
    {
      "FIPS": 18179,
      "county": "Wells County"
    },
    {
      "FIPS": 18011,
      "county": "Boone County"
    },
    {
      "FIPS": 18043,
      "county": "Floyd County"
    },
    {
      "FIPS": 18013,
      "county": "Brown County"
    },
    {
      "FIPS": 18177,
      "county": "Wayne County"
    }
  ],
  "KS": [
    {
      "FIPS": 20103,
      "county": "Leavenworth County"
    },
    {
      "FIPS": 20053,
      "county": "Ellsworth County"
    },
    {
      "FIPS": 20039,
      "county": "Decatur County"
    },
    {
      "FIPS": 20209,
      "county": "Wyandotte County"
    },
    {
      "FIPS": 20003,
      "county": "Anderson County"
    },
    {
      "FIPS": 20207,
      "county": "Woodson County"
    },
    {
      "FIPS": 20185,
      "county": "Stafford County"
    },
    {
      "FIPS": 20181,
      "county": "Sherman County"
    },
    {
      "FIPS": 20145,
      "county": "Pawnee County"
    },
    {
      "FIPS": 20023,
      "county": "Cheyenne County"
    },
    {
      "FIPS": 20205,
      "county": "Wilson County"
    },
    {
      "FIPS": 20197,
      "county": "Wabaunsee County"
    },
    {
      "FIPS": 20189,
      "county": "Stevens County"
    },
    {
      "FIPS": 20175,
      "county": "Seward County"
    },
    {
      "FIPS": 20169,
      "county": "Saline County"
    },
    {
      "FIPS": 20167,
      "county": "Russell County"
    },
    {
      "FIPS": 20095,
      "county": "Kingman County"
    },
    {
      "FIPS": 20149,
      "county": "Pottawatomie County"
    },
    {
      "FIPS": 20141,
      "county": "Osborne County"
    },
    {
      "FIPS": 20137,
      "county": "Norton County"
    },
    {
      "FIPS": 20133,
      "county": "Neosho County"
    },
    {
      "FIPS": 20131,
      "county": "Nemaha County"
    },
    {
      "FIPS": 20127,
      "county": "Morris County"
    },
    {
      "FIPS": 20125,
      "county": "Montgomery County"
    },
    {
      "FIPS": 20123,
      "county": "Mitchell County"
    },
    {
      "FIPS": 20113,
      "county": "McPherson County"
    },
    {
      "FIPS": 20117,
      "county": "Marshall County"
    },
    {
      "FIPS": 20115,
      "county": "Marion County"
    },
    {
      "FIPS": 20099,
      "county": "Labette County"
    },
    {
      "FIPS": 20087,
      "county": "Jefferson County"
    },
    {
      "FIPS": 20083,
      "county": "Hodgeman County"
    },
    {
      "FIPS": 20081,
      "county": "Haskell County"
    },
    {
      "FIPS": 20079,
      "county": "Harvey County"
    },
    {
      "FIPS": 20073,
      "county": "Greenwood County"
    },
    {
      "FIPS": 20071,
      "county": "Greeley County"
    },
    {
      "FIPS": 20179,
      "county": "Sheridan County"
    },
    {
      "FIPS": 20065,
      "county": "Graham County"
    },
    {
      "FIPS": 20059,
      "county": "Franklin County"
    },
    {
      "FIPS": 20045,
      "county": "Douglas County"
    },
    {
      "FIPS": 20043,
      "county": "Doniphan County"
    },
    {
      "FIPS": 20019,
      "county": "Chautauqua County"
    },
    {
      "FIPS": 20015,
      "county": "Butler County"
    },
    {
      "FIPS": 20007,
      "county": "Barber County"
    },
    {
      "FIPS": 20031,
      "county": "Coffey County"
    },
    {
      "FIPS": 20011,
      "county": "Bourbon County"
    },
    {
      "FIPS": 20157,
      "county": "Republic County"
    },
    {
      "FIPS": 20005,
      "county": "Atchison County"
    },
    {
      "FIPS": 20047,
      "county": "Edwards County"
    },
    {
      "FIPS": 20199,
      "county": "Wallace County"
    },
    {
      "FIPS": 20129,
      "county": "Morton County"
    },
    {
      "FIPS": 20041,
      "county": "Dickinson County"
    },
    {
      "FIPS": 20037,
      "county": "Crawford County"
    },
    {
      "FIPS": 20091,
      "county": "Johnson County"
    },
    {
      "FIPS": 20077,
      "county": "Harper County"
    },
    {
      "FIPS": 20021,
      "county": "Cherokee County"
    },
    {
      "FIPS": 20177,
      "county": "Shawnee County"
    },
    {
      "FIPS": 20191,
      "county": "Sumner County"
    },
    {
      "FIPS": 20143,
      "county": "Ottawa County"
    },
    {
      "FIPS": 20201,
      "county": "Washington County"
    },
    {
      "FIPS": 20085,
      "county": "Jackson County"
    },
    {
      "FIPS": 20089,
      "county": "Jewell County"
    },
    {
      "FIPS": 20035,
      "county": "Cowley County"
    },
    {
      "FIPS": 20055,
      "county": "Finney County"
    },
    {
      "FIPS": 20093,
      "county": "Kearny County"
    },
    {
      "FIPS": 20193,
      "county": "Thomas County"
    },
    {
      "FIPS": 20147,
      "county": "Phillips County"
    },
    {
      "FIPS": 20203,
      "county": "Wichita County"
    },
    {
      "FIPS": 20009,
      "county": "Barton County"
    },
    {
      "FIPS": 20105,
      "county": "Lincoln County"
    },
    {
      "FIPS": 20153,
      "county": "Rawlins County"
    },
    {
      "FIPS": 20173,
      "county": "Sedgwick County"
    },
    {
      "FIPS": 20075,
      "county": "Hamilton County"
    },
    {
      "FIPS": 20187,
      "county": "Stanton County"
    },
    {
      "FIPS": 20033,
      "county": "Comanche County"
    },
    {
      "FIPS": 20109,
      "county": "Logan County"
    },
    {
      "FIPS": 20161,
      "county": "Riley County"
    },
    {
      "FIPS": 20051,
      "county": "Ellis County"
    },
    {
      "FIPS": 20163,
      "county": "Rooks County"
    },
    {
      "FIPS": 20159,
      "county": "Rice County"
    },
    {
      "FIPS": 20121,
      "county": "Miami County"
    },
    {
      "FIPS": 20119,
      "county": "Meade County"
    },
    {
      "FIPS": 20107,
      "county": "Linn County"
    },
    {
      "FIPS": 20069,
      "county": "Gray County"
    },
    {
      "FIPS": 20067,
      "county": "Grant County"
    },
    {
      "FIPS": 20063,
      "county": "Gove County"
    },
    {
      "FIPS": 20061,
      "county": "Geary County"
    },
    {
      "FIPS": 20057,
      "county": "Ford County"
    },
    {
      "FIPS": 20029,
      "county": "Cloud County"
    },
    {
      "FIPS": 20013,
      "county": "Brown County"
    },
    {
      "FIPS": 20001,
      "county": "Allen County"
    },
    {
      "FIPS": 20171,
      "county": "Scott County"
    },
    {
      "FIPS": 20165,
      "county": "Rush County"
    },
    {
      "FIPS": 20027,
      "county": "Clay County"
    },
    {
      "FIPS": 20101,
      "county": "Lane County"
    },
    {
      "FIPS": 20155,
      "county": "Reno County"
    },
    {
      "FIPS": 20135,
      "county": "Ness County"
    },
    {
      "FIPS": 20151,
      "county": "Pratt County"
    },
    {
      "FIPS": 20195,
      "county": "Trego County"
    },
    {
      "FIPS": 20017,
      "county": "Chase County"
    },
    {
      "FIPS": 20183,
      "county": "Smith County"
    },
    {
      "FIPS": 20025,
      "county": "Clark County"
    },
    {
      "FIPS": 20049,
      "county": "Elk County"
    },
    {
      "FIPS": 20097,
      "county": "Kiowa County"
    },
    {
      "FIPS": 20111,
      "county": "Lyon County"
    },
    {
      "FIPS": 20139,
      "county": "Osage County"
    },
    {
      "FIPS": 20103,
      "county": "Leavenworth County"
    }
  ],
  "KY": [
    {
      "FIPS": 21085,
      "county": "Grayson County"
    },
    {
      "FIPS": 21083,
      "county": "Graves County"
    },
    {
      "FIPS": 21175,
      "county": "Morgan County"
    },
    {
      "FIPS": 21035,
      "county": "Calloway County"
    },
    {
      "FIPS": 21053,
      "county": "Clinton County"
    },
    {
      "FIPS": 21095,
      "county": "Harlan County"
    },
    {
      "FIPS": 21153,
      "county": "Magoffin County"
    },
    {
      "FIPS": 21059,
      "county": "Daviess County"
    },
    {
      "FIPS": 21063,
      "county": "Elliott County"
    },
    {
      "FIPS": 21057,
      "county": "Cumberland County"
    },
    {
      "FIPS": 21229,
      "county": "Washington County"
    },
    {
      "FIPS": 21223,
      "county": "Trimble County"
    },
    {
      "FIPS": 21217,
      "county": "Taylor County"
    },
    {
      "FIPS": 21215,
      "county": "Spencer County"
    },
    {
      "FIPS": 21213,
      "county": "Simpson County"
    },
    {
      "FIPS": 21211,
      "county": "Shelby County"
    },
    {
      "FIPS": 21207,
      "county": "Russell County"
    },
    {
      "FIPS": 21203,
      "county": "Rockcastle County"
    },
    {
      "FIPS": 21199,
      "county": "Pulaski County"
    },
    {
      "FIPS": 21191,
      "county": "Pendleton County"
    },
    {
      "FIPS": 21189,
      "county": "Owsley County"
    },
    {
      "FIPS": 21185,
      "county": "Oldham County"
    },
    {
      "FIPS": 21177,
      "county": "Muhlenberg County"
    },
    {
      "FIPS": 21171,
      "county": "Monroe County"
    },
    {
      "FIPS": 21167,
      "county": "Mercer County"
    },
    {
      "FIPS": 21151,
      "county": "Madison County"
    },
    {
      "FIPS": 21109,
      "county": "Jackson County"
    },
    {
      "FIPS": 21101,
      "county": "Henderson County"
    },
    {
      "FIPS": 21089,
      "county": "Greenup County"
    },
    {
      "FIPS": 21179,
      "county": "Nelson County"
    },
    {
      "FIPS": 21079,
      "county": "Garrard County"
    },
    {
      "FIPS": 21073,
      "county": "Franklin County"
    },
    {
      "FIPS": 21069,
      "county": "Fleming County"
    },
    {
      "FIPS": 21065,
      "county": "Estill County"
    },
    {
      "FIPS": 21061,
      "county": "Edmonson County"
    },
    {
      "FIPS": 21047,
      "county": "Christian County"
    },
    {
      "FIPS": 21017,
      "county": "Bourbon County"
    },
    {
      "FIPS": 21039,
      "county": "Carlisle County"
    },
    {
      "FIPS": 21037,
      "county": "Campbell County"
    },
    {
      "FIPS": 21029,
      "county": "Bullitt County"
    },
    {
      "FIPS": 21027,
      "county": "Breckinridge County"
    },
    {
      "FIPS": 21025,
      "county": "Breathitt County"
    },
    {
      "FIPS": 21023,
      "county": "Bracken County"
    },
    {
      "FIPS": 21009,
      "county": "Barren County"
    },
    {
      "FIPS": 21159,
      "county": "Martin County"
    },
    {
      "FIPS": 21233,
      "county": "Webster County"
    },
    {
      "FIPS": 21093,
      "county": "Hardin County"
    },
    {
      "FIPS": 21115,
      "county": "Johnson County"
    },
    {
      "FIPS": 21145,
      "county": "McCracken County"
    },
    {
      "FIPS": 21125,
      "county": "Laurel County"
    },
    {
      "FIPS": 21105,
      "county": "Hickman County"
    },
    {
      "FIPS": 21055,
      "county": "Crittenden County"
    },
    {
      "FIPS": 21133,
      "county": "Letcher County"
    },
    {
      "FIPS": 21155,
      "county": "Marion County"
    },
    {
      "FIPS": 21033,
      "county": "Caldwell County"
    },
    {
      "FIPS": 21127,
      "county": "Lawrence County"
    },
    {
      "FIPS": 21147,
      "county": "McCreary County"
    },
    {
      "FIPS": 21137,
      "county": "Lincoln County"
    },
    {
      "FIPS": 21131,
      "county": "Leslie County"
    },
    {
      "FIPS": 21041,
      "county": "Carroll County"
    },
    {
      "FIPS": 21235,
      "county": "Whitley County"
    },
    {
      "FIPS": 21157,
      "county": "Marshall County"
    },
    {
      "FIPS": 21077,
      "county": "Gallatin County"
    },
    {
      "FIPS": 21165,
      "county": "Menifee County"
    },
    {
      "FIPS": 21043,
      "county": "Carter County"
    },
    {
      "FIPS": 21169,
      "county": "Metcalfe County"
    },
    {
      "FIPS": 21107,
      "county": "Hopkins County"
    },
    {
      "FIPS": 21227,
      "county": "Warren County"
    },
    {
      "FIPS": 21117,
      "county": "Kenton County"
    },
    {
      "FIPS": 21067,
      "county": "Fayette County"
    },
    {
      "FIPS": 21111,
      "county": "Jefferson County"
    },
    {
      "FIPS": 21075,
      "county": "Fulton County"
    },
    {
      "FIPS": 21201,
      "county": "Robertson County"
    },
    {
      "FIPS": 21239,
      "county": "Woodford County"
    },
    {
      "FIPS": 21149,
      "county": "McLean County"
    },
    {
      "FIPS": 21031,
      "county": "Butler County"
    },
    {
      "FIPS": 21005,
      "county": "Anderson County"
    },
    {
      "FIPS": 21197,
      "county": "Powell County"
    },
    {
      "FIPS": 21139,
      "county": "Livingston County"
    },
    {
      "FIPS": 21091,
      "county": "Hancock County"
    },
    {
      "FIPS": 21097,
      "county": "Harrison County"
    },
    {
      "FIPS": 21173,
      "county": "Montgomery County"
    },
    {
      "FIPS": 21113,
      "county": "Jessamine County"
    },
    {
      "FIPS": 21007,
      "county": "Ballard County"
    },
    {
      "FIPS": 21181,
      "county": "Nicholas County"
    },
    {
      "FIPS": 21141,
      "county": "Logan County"
    },
    {
      "FIPS": 21051,
      "county": "Clay County"
    },
    {
      "FIPS": 21219,
      "county": "Todd County"
    },
    {
      "FIPS": 21013,
      "county": "Bell County"
    },
    {
      "FIPS": 21001,
      "county": "Adair County"
    },
    {
      "FIPS": 21237,
      "county": "Wolfe County"
    },
    {
      "FIPS": 21121,
      "county": "Knox County"
    },
    {
      "FIPS": 21231,
      "county": "Wayne County"
    },
    {
      "FIPS": 21221,
      "county": "Trigg County"
    },
    {
      "FIPS": 21209,
      "county": "Scott County"
    },
    {
      "FIPS": 21193,
      "county": "Perry County"
    },
    {
      "FIPS": 21187,
      "county": "Owen County"
    },
    {
      "FIPS": 21183,
      "county": "Ohio County"
    },
    {
      "FIPS": 21143,
      "county": "Lyon County"
    },
    {
      "FIPS": 21129,
      "county": "Lee County"
    },
    {
      "FIPS": 21103,
      "county": "Henry County"
    },
    {
      "FIPS": 21087,
      "county": "Green County"
    },
    {
      "FIPS": 21081,
      "county": "Grant County"
    },
    {
      "FIPS": 21049,
      "county": "Clark County"
    },
    {
      "FIPS": 21045,
      "county": "Casey County"
    },
    {
      "FIPS": 21019,
      "county": "Boyd County"
    },
    {
      "FIPS": 21015,
      "county": "Boone County"
    },
    {
      "FIPS": 21011,
      "county": "Bath County"
    },
    {
      "FIPS": 21123,
      "county": "Larue County"
    },
    {
      "FIPS": 21161,
      "county": "Mason County"
    },
    {
      "FIPS": 21135,
      "county": "Lewis County"
    },
    {
      "FIPS": 21205,
      "county": "Rowan County"
    },
    {
      "FIPS": 21119,
      "county": "Knott County"
    },
    {
      "FIPS": 21163,
      "county": "Meade County"
    },
    {
      "FIPS": 21195,
      "county": "Pike County"
    },
    {
      "FIPS": 21225,
      "county": "Union County"
    },
    {
      "FIPS": 21003,
      "county": "Allen County"
    },
    {
      "FIPS": 21071,
      "county": "Floyd County"
    },
    {
      "FIPS": 21099,
      "county": "Hart County"
    },
    {
      "FIPS": 21021,
      "county": "Boyle County"
    },
    {
      "FIPS": 21085,
      "county": "Grayson County"
    }
  ],
  "LA": [
    {
      "FIPS": 22055,
      "county": "Lafayette Parish"
    },
    {
      "FIPS": 22001,
      "county": "Acadia Parish"
    },
    {
      "FIPS": 22035,
      "county": "East Carroll Parish"
    },
    {
      "FIPS": 22103,
      "county": "St Tammany Parish"
    },
    {
      "FIPS": 22101,
      "county": "St Mary Parish"
    },
    {
      "FIPS": 22085,
      "county": "Sabine Parish"
    },
    {
      "FIPS": 22089,
      "county": "St Charles Parish"
    },
    {
      "FIPS": 22107,
      "county": "Tensas Parish"
    },
    {
      "FIPS": 22121,
      "county": "West Baton Rouge Parish"
    },
    {
      "FIPS": 22117,
      "county": "Washington Parish"
    },
    {
      "FIPS": 22115,
      "county": "Vernon Parish"
    },
    {
      "FIPS": 22113,
      "county": "Vermilion Parish"
    },
    {
      "FIPS": 22109,
      "county": "Terrebonne Parish"
    },
    {
      "FIPS": 22099,
      "county": "St Martin Parish"
    },
    {
      "FIPS": 22097,
      "county": "St Landry Parish"
    },
    {
      "FIPS": 22091,
      "county": "St Helena Parish"
    },
    {
      "FIPS": 22083,
      "county": "Richland Parish"
    },
    {
      "FIPS": 22081,
      "county": "Red River Parish"
    },
    {
      "FIPS": 22077,
      "county": "Pointe Coupee Parish"
    },
    {
      "FIPS": 22065,
      "county": "Madison Parish"
    },
    {
      "FIPS": 22063,
      "county": "Livingston Parish"
    },
    {
      "FIPS": 22057,
      "county": "Lafourche Parish"
    },
    {
      "FIPS": 22053,
      "county": "Jefferson Davis Parish"
    },
    {
      "FIPS": 22049,
      "county": "Jackson Parish"
    },
    {
      "FIPS": 22047,
      "county": "Iberville Parish"
    },
    {
      "FIPS": 22045,
      "county": "Iberia Parish"
    },
    {
      "FIPS": 22041,
      "county": "Franklin Parish"
    },
    {
      "FIPS": 22039,
      "county": "Evangeline Parish"
    },
    {
      "FIPS": 22037,
      "county": "East Feliciana Parish"
    },
    {
      "FIPS": 22031,
      "county": "De Soto Parish"
    },
    {
      "FIPS": 22027,
      "county": "Claiborne Parish"
    },
    {
      "FIPS": 22123,
      "county": "West Carroll Parish"
    },
    {
      "FIPS": 22025,
      "county": "Catahoula Parish"
    },
    {
      "FIPS": 22009,
      "county": "Avoyelles Parish"
    },
    {
      "FIPS": 22005,
      "county": "Ascension Parish"
    },
    {
      "FIPS": 22067,
      "county": "Morehouse Parish"
    },
    {
      "FIPS": 22013,
      "county": "Bienville Parish"
    },
    {
      "FIPS": 22093,
      "county": "St James Parish"
    },
    {
      "FIPS": 22029,
      "county": "Concordia Parish"
    },
    {
      "FIPS": 22007,
      "county": "Assumption Parish"
    },
    {
      "FIPS": 22069,
      "county": "Natchitoches Parish"
    },
    {
      "FIPS": 22087,
      "county": "St Bernard Parish"
    },
    {
      "FIPS": 22079,
      "county": "Rapides Parish"
    },
    {
      "FIPS": 22075,
      "county": "Plaquemines Parish"
    },
    {
      "FIPS": 22125,
      "county": "West Feliciana Parish"
    },
    {
      "FIPS": 22119,
      "county": "Webster Parish"
    },
    {
      "FIPS": 22021,
      "county": "Caldwell Parish"
    },
    {
      "FIPS": 22095,
      "county": "St John the Baptist Parish"
    },
    {
      "FIPS": 22015,
      "county": "Bossier Parish"
    },
    {
      "FIPS": 22105,
      "county": "Tangipahoa Parish"
    },
    {
      "FIPS": 22073,
      "county": "Ouachita Parish"
    },
    {
      "FIPS": 22071,
      "county": "Orleans Parish"
    },
    {
      "FIPS": 22051,
      "county": "Jefferson Parish"
    },
    {
      "FIPS": 22033,
      "county": "East Baton Rouge Parish"
    },
    {
      "FIPS": 22059,
      "county": "La Salle Parish"
    },
    {
      "FIPS": 22019,
      "county": "Calcasieu Parish"
    },
    {
      "FIPS": 22061,
      "county": "Lincoln Parish"
    },
    {
      "FIPS": 22011,
      "county": "Beauregard Parish"
    },
    {
      "FIPS": 22023,
      "county": "Cameron Parish"
    },
    {
      "FIPS": 22017,
      "county": "Caddo Parish"
    },
    {
      "FIPS": 22127,
      "county": "Winn Parish"
    },
    {
      "FIPS": 22111,
      "county": "Union Parish"
    },
    {
      "FIPS": 22043,
      "county": "Grant Parish"
    },
    {
      "FIPS": 22003,
      "county": "Allen Parish"
    },
    {
      "FIPS": 22055,
      "county": "Lafayette Parish"
    },
    {
      "FIPS": 22001,
      "county": "Acadia Parish"
    }
  ],
  "MA": [
    {
      "FIPS": 25005,
      "county": "Bristol County"
    },
    {
      "FIPS": 25027,
      "county": "Worcester County"
    },
    {
      "FIPS": 25003,
      "county": "Berkshire County"
    },
    {
      "FIPS": 25023,
      "county": "Plymouth County"
    },
    {
      "FIPS": 25015,
      "county": "Hampshire County"
    },
    {
      "FIPS": 25001,
      "county": "Barnstable County"
    },
    {
      "FIPS": 25019,
      "county": "Nantucket County"
    },
    {
      "FIPS": 25013,
      "county": "Hampden County"
    },
    {
      "FIPS": 25021,
      "county": "Norfolk County"
    },
    {
      "FIPS": 25017,
      "county": "Middlesex County"
    },
    {
      "FIPS": 25025,
      "county": "Suffolk County"
    },
    {
      "FIPS": 25011,
      "county": "Franklin County"
    },
    {
      "FIPS": 25009,
      "county": "Essex County"
    },
    {
      "FIPS": 25007,
      "county": "Dukes County"
    }
  ],
  "MD": [
    {
      "FIPS": 24047,
      "county": "Worcester County"
    },
    {
      "FIPS": 24041,
      "county": "Talbot County"
    },
    {
      "FIPS": 24025,
      "county": "Harford County"
    },
    {
      "FIPS": 24017,
      "county": "Charles County"
    },
    {
      "FIPS": 24011,
      "county": "Caroline County"
    },
    {
      "FIPS": 24019,
      "county": "Dorchester County"
    },
    {
      "FIPS": 24035,
      "county": "Queen Anne's County"
    },
    {
      "FIPS": 24005,
      "county": "Baltimore County"
    },
    {
      "FIPS": 24037,
      "county": "St Mary's County"
    },
    {
      "FIPS": 24003,
      "county": "Anne Arundel County"
    },
    {
      "FIPS": 24031,
      "county": "Montgomery County"
    },
    {
      "FIPS": 24013,
      "county": "Carroll County"
    },
    {
      "FIPS": 24043,
      "county": "Washington County"
    },
    {
      "FIPS": 24033,
      "county": "Prince George's County"
    },
    {
      "FIPS": 24027,
      "county": "Howard County"
    },
    {
      "FIPS": 24510,
      "county": "Baltimore City"
    },
    {
      "FIPS": 24023,
      "county": "Garrett County"
    },
    {
      "FIPS": 24021,
      "county": "Frederick County"
    },
    {
      "FIPS": 24001,
      "county": "Allegany County"
    },
    {
      "FIPS": 24039,
      "county": "Somerset County"
    },
    {
      "FIPS": 24009,
      "county": "Calvert County"
    },
    {
      "FIPS": 24045,
      "county": "Wicomico County"
    },
    {
      "FIPS": 24015,
      "county": "Cecil County"
    },
    {
      "FIPS": 24029,
      "county": "Kent County"
    }
  ],
  "ME": [
    {
      "FIPS": 23025,
      "county": "Somerset County"
    },
    {
      "FIPS": 23029,
      "county": "Washington County"
    },
    {
      "FIPS": 23021,
      "county": "Piscataquis County"
    },
    {
      "FIPS": 23011,
      "county": "Kennebec County"
    },
    {
      "FIPS": 23017,
      "county": "Oxford County"
    },
    {
      "FIPS": 23015,
      "county": "Lincoln County"
    },
    {
      "FIPS": 23009,
      "county": "Hancock County"
    },
    {
      "FIPS": 23007,
      "county": "Franklin County"
    },
    {
      "FIPS": 23001,
      "county": "Androscoggin County"
    },
    {
      "FIPS": 23019,
      "county": "Penobscot County"
    },
    {
      "FIPS": 23005,
      "county": "Cumberland County"
    },
    {
      "FIPS": 23023,
      "county": "Sagadahoc County"
    },
    {
      "FIPS": 23003,
      "county": "Aroostook County"
    },
    {
      "FIPS": 23013,
      "county": "Knox County"
    },
    {
      "FIPS": 23031,
      "county": "York County"
    },
    {
      "FIPS": 23027,
      "county": "Waldo County"
    }
  ],
  "MI": [
    {
      "FIPS": 26019,
      "county": "Benzie County"
    },
    {
      "FIPS": 26157,
      "county": "Tuscola County"
    },
    {
      "FIPS": 26131,
      "county": "Ontonagon County"
    },
    {
      "FIPS": 26099,
      "county": "Macomb County"
    },
    {
      "FIPS": 26119,
      "county": "Montmorency County"
    },
    {
      "FIPS": 26039,
      "county": "Crawford County"
    },
    {
      "FIPS": 26005,
      "county": "Allegan County"
    },
    {
      "FIPS": 26065,
      "county": "Ingham County"
    },
    {
      "FIPS": 26165,
      "county": "Wexford County"
    },
    {
      "FIPS": 26159,
      "county": "Van Buren County"
    },
    {
      "FIPS": 26149,
      "county": "St Joseph County"
    },
    {
      "FIPS": 26153,
      "county": "Schoolcraft County"
    },
    {
      "FIPS": 26151,
      "county": "Sanilac County"
    },
    {
      "FIPS": 26143,
      "county": "Roscommon County"
    },
    {
      "FIPS": 26137,
      "county": "Otsego County"
    },
    {
      "FIPS": 26135,
      "county": "Oscoda County"
    },
    {
      "FIPS": 26129,
      "county": "Ogemaw County"
    },
    {
      "FIPS": 26121,
      "county": "Muskegon County"
    },
    {
      "FIPS": 26115,
      "county": "Monroe County"
    },
    {
      "FIPS": 26111,
      "county": "Midland County"
    },
    {
      "FIPS": 26109,
      "county": "Menominee County"
    },
    {
      "FIPS": 26107,
      "county": "Mecosta County"
    },
    {
      "FIPS": 26093,
      "county": "Livingston County"
    },
    {
      "FIPS": 26091,
      "county": "Lenawee County"
    },
    {
      "FIPS": 26089,
      "county": "Leelanau County"
    },
    {
      "FIPS": 26087,
      "county": "Lapeer County"
    },
    {
      "FIPS": 26079,
      "county": "Kalkaska County"
    },
    {
      "FIPS": 26061,
      "county": "Houghton County"
    },
    {
      "FIPS": 26051,
      "county": "Gladwin County"
    },
    {
      "FIPS": 26043,
      "county": "Dickinson County"
    },
    {
      "FIPS": 26031,
      "county": "Cheboygan County"
    },
    {
      "FIPS": 26029,
      "county": "Charlevoix County"
    },
    {
      "FIPS": 26011,
      "county": "Arenac County"
    },
    {
      "FIPS": 26009,
      "county": "Antrim County"
    },
    {
      "FIPS": 26097,
      "county": "Mackinac County"
    },
    {
      "FIPS": 26103,
      "county": "Marquette County"
    },
    {
      "FIPS": 26133,
      "county": "Osceola County"
    },
    {
      "FIPS": 26161,
      "county": "Washtenaw County"
    },
    {
      "FIPS": 26023,
      "county": "Branch County"
    },
    {
      "FIPS": 26013,
      "county": "Baraga County"
    },
    {
      "FIPS": 26127,
      "county": "Oceana County"
    },
    {
      "FIPS": 26075,
      "county": "Jackson County"
    },
    {
      "FIPS": 26147,
      "county": "St Clair County"
    },
    {
      "FIPS": 26117,
      "county": "Montcalm County"
    },
    {
      "FIPS": 26021,
      "county": "Berrien County"
    },
    {
      "FIPS": 26033,
      "county": "Chippewa County"
    },
    {
      "FIPS": 26113,
      "county": "Missaukee County"
    },
    {
      "FIPS": 26141,
      "county": "Presque Isle County"
    },
    {
      "FIPS": 26057,
      "county": "Gratiot County"
    },
    {
      "FIPS": 26053,
      "county": "Gogebic County"
    },
    {
      "FIPS": 26139,
      "county": "Ottawa County"
    },
    {
      "FIPS": 26025,
      "county": "Calhoun County"
    },
    {
      "FIPS": 26007,
      "county": "Alpena County"
    },
    {
      "FIPS": 26145,
      "county": "Saginaw County"
    },
    {
      "FIPS": 26073,
      "county": "Isabella County"
    },
    {
      "FIPS": 26049,
      "county": "Genesee County"
    },
    {
      "FIPS": 26055,
      "county": "Grand Traverse County"
    },
    {
      "FIPS": 26125,
      "county": "Oakland County"
    },
    {
      "FIPS": 26123,
      "county": "Newaygo County"
    },
    {
      "FIPS": 26077,
      "county": "Kalamazoo County"
    },
    {
      "FIPS": 26059,
      "county": "Hillsdale County"
    },
    {
      "FIPS": 26037,
      "county": "Clinton County"
    },
    {
      "FIPS": 26155,
      "county": "Shiawassee County"
    },
    {
      "FIPS": 26001,
      "county": "Alcona County"
    },
    {
      "FIPS": 26083,
      "county": "Keweenaw County"
    },
    {
      "FIPS": 26101,
      "county": "Manistee County"
    },
    {
      "FIPS": 26085,
      "county": "Lake County"
    },
    {
      "FIPS": 26081,
      "county": "Kent County"
    },
    {
      "FIPS": 26071,
      "county": "Iron County"
    },
    {
      "FIPS": 26069,
      "county": "Iosco County"
    },
    {
      "FIPS": 26067,
      "county": "Ionia County"
    },
    {
      "FIPS": 26063,
      "county": "Huron County"
    },
    {
      "FIPS": 26045,
      "county": "Eaton County"
    },
    {
      "FIPS": 26035,
      "county": "Clare County"
    },
    {
      "FIPS": 26015,
      "county": "Barry County"
    },
    {
      "FIPS": 26003,
      "county": "Alger County"
    },
    {
      "FIPS": 26017,
      "county": "Bay County"
    },
    {
      "FIPS": 26163,
      "county": "Wayne County"
    },
    {
      "FIPS": 26027,
      "county": "Cass County"
    },
    {
      "FIPS": 26095,
      "county": "Luce County"
    },
    {
      "FIPS": 26047,
      "county": "Emmet County"
    },
    {
      "FIPS": 26041,
      "county": "Delta County"
    },
    {
      "FIPS": 26105,
      "county": "Mason County"
    }
  ],
  "MN": [
    {
      "FIPS": 27097,
      "county": "Morrison County"
    },
    {
      "FIPS": 27095,
      "county": "Mille Lacs County"
    },
    {
      "FIPS": 27011,
      "county": "Big Stone County"
    },
    {
      "FIPS": 27001,
      "county": "Aitkin County"
    },
    {
      "FIPS": 27017,
      "county": "Carlton County"
    },
    {
      "FIPS": 27079,
      "county": "Le Sueur County"
    },
    {
      "FIPS": 27089,
      "county": "Marshall County"
    },
    {
      "FIPS": 27173,
      "county": "Yellow Medicine County"
    },
    {
      "FIPS": 27171,
      "county": "Wright County"
    },
    {
      "FIPS": 27169,
      "county": "Winona County"
    },
    {
      "FIPS": 27159,
      "county": "Wadena County"
    },
    {
      "FIPS": 27147,
      "county": "Steele County"
    },
    {
      "FIPS": 27117,
      "county": "Pipestone County"
    },
    {
      "FIPS": 27113,
      "county": "Pennington County"
    },
    {
      "FIPS": 27111,
      "county": "Otter Tail County"
    },
    {
      "FIPS": 27101,
      "county": "Murray County"
    },
    {
      "FIPS": 27087,
      "county": "Mahnomen County"
    },
    {
      "FIPS": 27081,
      "county": "Lincoln County"
    },
    {
      "FIPS": 27069,
      "county": "Kittson County"
    },
    {
      "FIPS": 27067,
      "county": "Kandiyohi County"
    },
    {
      "FIPS": 27055,
      "county": "Houston County"
    },
    {
      "FIPS": 27049,
      "county": "Goodhue County"
    },
    {
      "FIPS": 27043,
      "county": "Faribault County"
    },
    {
      "FIPS": 27007,
      "county": "Beltrami County"
    },
    {
      "FIPS": 27053,
      "county": "Hennepin County"
    },
    {
      "FIPS": 27129,
      "county": "Renville County"
    },
    {
      "FIPS": 27107,
      "county": "Norman County"
    },
    {
      "FIPS": 27161,
      "county": "Waseca County"
    },
    {
      "FIPS": 27025,
      "county": "Chisago County"
    },
    {
      "FIPS": 27061,
      "county": "Itasca County"
    },
    {
      "FIPS": 27085,
      "county": "McLeod County"
    },
    {
      "FIPS": 27145,
      "county": "Stearns County"
    },
    {
      "FIPS": 27019,
      "county": "Carver County"
    },
    {
      "FIPS": 27047,
      "county": "Freeborn County"
    },
    {
      "FIPS": 27041,
      "county": "Douglas County"
    },
    {
      "FIPS": 27033,
      "county": "Cottonwood County"
    },
    {
      "FIPS": 27023,
      "county": "Chippewa County"
    },
    {
      "FIPS": 27013,
      "county": "Blue Earth County"
    },
    {
      "FIPS": 27149,
      "county": "Stevens County"
    },
    {
      "FIPS": 27005,
      "county": "Becker County"
    },
    {
      "FIPS": 27163,
      "county": "Washington County"
    },
    {
      "FIPS": 27093,
      "county": "Meeker County"
    },
    {
      "FIPS": 27137,
      "county": "St Louis County"
    },
    {
      "FIPS": 27123,
      "county": "Ramsey County"
    },
    {
      "FIPS": 27109,
      "county": "Olmsted County"
    },
    {
      "FIPS": 27127,
      "county": "Redwood County"
    },
    {
      "FIPS": 27037,
      "county": "Dakota County"
    },
    {
      "FIPS": 27077,
      "county": "Lake of the Woods County"
    },
    {
      "FIPS": 27167,
      "county": "Wilkin County"
    },
    {
      "FIPS": 27103,
      "county": "Nicollet County"
    },
    {
      "FIPS": 27155,
      "county": "Traverse County"
    },
    {
      "FIPS": 27105,
      "county": "Nobles County"
    },
    {
      "FIPS": 27165,
      "county": "Watonwan County"
    },
    {
      "FIPS": 27029,
      "county": "Clearwater County"
    },
    {
      "FIPS": 27045,
      "county": "Fillmore County"
    },
    {
      "FIPS": 27065,
      "county": "Kanabec County"
    },
    {
      "FIPS": 27141,
      "county": "Sherburne County"
    },
    {
      "FIPS": 27057,
      "county": "Hubbard County"
    },
    {
      "FIPS": 27063,
      "county": "Jackson County"
    },
    {
      "FIPS": 27091,
      "county": "Martin County"
    },
    {
      "FIPS": 27125,
      "county": "Red Lake County"
    },
    {
      "FIPS": 27157,
      "county": "Wabasha County"
    },
    {
      "FIPS": 27009,
      "county": "Benton County"
    },
    {
      "FIPS": 27143,
      "county": "Sibley County"
    },
    {
      "FIPS": 27073,
      "county": "Lac Qui Parle County"
    },
    {
      "FIPS": 27059,
      "county": "Isanti County"
    },
    {
      "FIPS": 27071,
      "county": "Koochiching County"
    },
    {
      "FIPS": 27035,
      "county": "Crow Wing County"
    },
    {
      "FIPS": 27135,
      "county": "Roseau County"
    },
    {
      "FIPS": 27139,
      "county": "Scott County"
    },
    {
      "FIPS": 27119,
      "county": "Polk County"
    },
    {
      "FIPS": 27099,
      "county": "Mower County"
    },
    {
      "FIPS": 27083,
      "county": "Lyon County"
    },
    {
      "FIPS": 27051,
      "county": "Grant County"
    },
    {
      "FIPS": 27039,
      "county": "Dodge County"
    },
    {
      "FIPS": 27003,
      "county": "Anoka County"
    },
    {
      "FIPS": 27031,
      "county": "Cook County"
    },
    {
      "FIPS": 27131,
      "county": "Rice County"
    },
    {
      "FIPS": 27153,
      "county": "Todd County"
    },
    {
      "FIPS": 27133,
      "county": "Rock County"
    },
    {
      "FIPS": 27015,
      "county": "Brown County"
    },
    {
      "FIPS": 27027,
      "county": "Clay County"
    },
    {
      "FIPS": 27151,
      "county": "Swift County"
    },
    {
      "FIPS": 27021,
      "county": "Cass County"
    },
    {
      "FIPS": 27121,
      "county": "Pope County"
    },
    {
      "FIPS": 27115,
      "county": "Pine County"
    },
    {
      "FIPS": 27075,
      "county": "Lake County"
    },
    {
      "FIPS": 27097,
      "county": "Morrison County"
    }
  ],
  "MO": [
    {
      "FIPS": 29067,
      "county": "Douglas County"
    },
    {
      "FIPS": 29186,
      "county": "Ste Genevieve County"
    },
    {
      "FIPS": 29119,
      "county": "McDonald County"
    },
    {
      "FIPS": 29003,
      "county": "Andrew County"
    },
    {
      "FIPS": 29225,
      "county": "Webster County"
    },
    {
      "FIPS": 29221,
      "county": "Washington County"
    },
    {
      "FIPS": 29211,
      "county": "Sullivan County"
    },
    {
      "FIPS": 29207,
      "county": "Stoddard County"
    },
    {
      "FIPS": 29199,
      "county": "Scotland County"
    },
    {
      "FIPS": 29195,
      "county": "Saline County"
    },
    {
      "FIPS": 29181,
      "county": "Ripley County"
    },
    {
      "FIPS": 29185,
      "county": "St Clair County"
    },
    {
      "FIPS": 29175,
      "county": "Randolph County"
    },
    {
      "FIPS": 29161,
      "county": "Phelps County"
    },
    {
      "FIPS": 29143,
      "county": "New Madrid County"
    },
    {
      "FIPS": 29149,
      "county": "Oregon County"
    },
    {
      "FIPS": 29147,
      "county": "Nodaway County"
    },
    {
      "FIPS": 29141,
      "county": "Morgan County"
    },
    {
      "FIPS": 29127,
      "county": "Marion County"
    },
    {
      "FIPS": 29133,
      "county": "Mississippi County"
    },
    {
      "FIPS": 29131,
      "county": "Miller County"
    },
    {
      "FIPS": 29129,
      "county": "Mercer County"
    },
    {
      "FIPS": 29123,
      "county": "Madison County"
    },
    {
      "FIPS": 29113,
      "county": "Lincoln County"
    },
    {
      "FIPS": 29101,
      "county": "Johnson County"
    },
    {
      "FIPS": 29099,
      "county": "Jefferson County"
    },
    {
      "FIPS": 29097,
      "county": "Jasper County"
    },
    {
      "FIPS": 29091,
      "county": "Howell County"
    },
    {
      "FIPS": 29081,
      "county": "Harrison County"
    },
    {
      "FIPS": 29085,
      "county": "Hickory County"
    },
    {
      "FIPS": 29079,
      "county": "Grundy County"
    },
    {
      "FIPS": 29075,
      "county": "Gentry County"
    },
    {
      "FIPS": 29073,
      "county": "Gasconade County"
    },
    {
      "FIPS": 29069,
      "county": "Dunklin County"
    },
    {
      "FIPS": 29061,
      "county": "Daviess County"
    },
    {
      "FIPS": 29053,
      "county": "Cooper County"
    },
    {
      "FIPS": 29049,
      "county": "Clinton County"
    },
    {
      "FIPS": 29043,
      "county": "Christian County"
    },
    {
      "FIPS": 29029,
      "county": "Camden County"
    },
    {
      "FIPS": 29025,
      "county": "Caldwell County"
    },
    {
      "FIPS": 29059,
      "county": "Dallas County"
    },
    {
      "FIPS": 29023,
      "county": "Butler County"
    },
    {
      "FIPS": 29017,
      "county": "Bollinger County"
    },
    {
      "FIPS": 29011,
      "county": "Barton County"
    },
    {
      "FIPS": 29095,
      "county": "Jackson County"
    },
    {
      "FIPS": 29219,
      "county": "Warren County"
    },
    {
      "FIPS": 29105,
      "county": "Laclede County"
    },
    {
      "FIPS": 29145,
      "county": "Newton County"
    },
    {
      "FIPS": 29055,
      "county": "Crawford County"
    },
    {
      "FIPS": 29183,
      "county": "St Charles County"
    },
    {
      "FIPS": 29027,
      "county": "Callaway County"
    },
    {
      "FIPS": 29229,
      "county": "Wright County"
    },
    {
      "FIPS": 29187,
      "county": "St Francois County"
    },
    {
      "FIPS": 29071,
      "county": "Franklin County"
    },
    {
      "FIPS": 29033,
      "county": "Carroll County"
    },
    {
      "FIPS": 29063,
      "county": "Dekalb County"
    },
    {
      "FIPS": 29005,
      "county": "Atchison County"
    },
    {
      "FIPS": 29171,
      "county": "Putnam County"
    },
    {
      "FIPS": 29205,
      "county": "Shelby County"
    },
    {
      "FIPS": 29107,
      "county": "Lafayette County"
    },
    {
      "FIPS": 29041,
      "county": "Chariton County"
    },
    {
      "FIPS": 29139,
      "county": "Montgomery County"
    },
    {
      "FIPS": 29117,
      "county": "Livingston County"
    },
    {
      "FIPS": 29007,
      "county": "Audrain County"
    },
    {
      "FIPS": 29197,
      "county": "Schuyler County"
    },
    {
      "FIPS": 29109,
      "county": "Lawrence County"
    },
    {
      "FIPS": 29015,
      "county": "Benton County"
    },
    {
      "FIPS": 29031,
      "county": "Cape Girardeau County"
    },
    {
      "FIPS": 29137,
      "county": "Monroe County"
    },
    {
      "FIPS": 29510,
      "county": "St Louis City"
    },
    {
      "FIPS": 29021,
      "county": "Buchanan County"
    },
    {
      "FIPS": 29189,
      "county": "St Louis County"
    },
    {
      "FIPS": 29165,
      "county": "Platte County"
    },
    {
      "FIPS": 29169,
      "county": "Pulaski County"
    },
    {
      "FIPS": 29159,
      "county": "Pettis County"
    },
    {
      "FIPS": 29089,
      "county": "Howard County"
    },
    {
      "FIPS": 29217,
      "county": "Vernon County"
    },
    {
      "FIPS": 29179,
      "county": "Reynolds County"
    },
    {
      "FIPS": 29077,
      "county": "Greene County"
    },
    {
      "FIPS": 29135,
      "county": "Moniteau County"
    },
    {
      "FIPS": 29155,
      "county": "Pemiscot County"
    },
    {
      "FIPS": 29203,
      "county": "Shannon County"
    },
    {
      "FIPS": 29035,
      "county": "Carter County"
    },
    {
      "FIPS": 29125,
      "county": "Maries County"
    },
    {
      "FIPS": 29057,
      "county": "Dade County"
    },
    {
      "FIPS": 29153,
      "county": "Ozark County"
    },
    {
      "FIPS": 29167,
      "county": "Polk County"
    },
    {
      "FIPS": 29065,
      "county": "Dent County"
    },
    {
      "FIPS": 29115,
      "county": "Linn County"
    },
    {
      "FIPS": 29223,
      "county": "Wayne County"
    },
    {
      "FIPS": 29213,
      "county": "Taney County"
    },
    {
      "FIPS": 29209,
      "county": "Stone County"
    },
    {
      "FIPS": 29201,
      "county": "Scott County"
    },
    {
      "FIPS": 29111,
      "county": "Lewis County"
    },
    {
      "FIPS": 29093,
      "county": "Iron County"
    },
    {
      "FIPS": 29083,
      "county": "Henry County"
    },
    {
      "FIPS": 29047,
      "county": "Clay County"
    },
    {
      "FIPS": 29013,
      "county": "Bates County"
    },
    {
      "FIPS": 29215,
      "county": "Texas County"
    },
    {
      "FIPS": 29045,
      "county": "Clark County"
    },
    {
      "FIPS": 29009,
      "county": "Barry County"
    },
    {
      "FIPS": 29177,
      "county": "Ray County"
    },
    {
      "FIPS": 29103,
      "county": "Knox County"
    },
    {
      "FIPS": 29037,
      "county": "Cass County"
    },
    {
      "FIPS": 29151,
      "county": "Osage County"
    },
    {
      "FIPS": 29039,
      "county": "Cedar County"
    },
    {
      "FIPS": 29173,
      "county": "Ralls County"
    },
    {
      "FIPS": 29001,
      "county": "Adair County"
    },
    {
      "FIPS": 29163,
      "county": "Pike County"
    },
    {
      "FIPS": 29157,
      "county": "Perry County"
    },
    {
      "FIPS": 29121,
      "county": "Macon County"
    },
    {
      "FIPS": 29019,
      "county": "Boone County"
    },
    {
      "FIPS": 29051,
      "county": "Cole County"
    },
    {
      "FIPS": 29227,
      "county": "Worth County"
    },
    {
      "FIPS": 29087,
      "county": "Holt County"
    }
  ],
  "MS": [
    {
      "FIPS": 28133,
      "county": "Sunflower County"
    },
    {
      "FIPS": 28135,
      "county": "Tallahatchie County"
    },
    {
      "FIPS": 28117,
      "county": "Prentiss County"
    },
    {
      "FIPS": 28089,
      "county": "Madison County"
    },
    {
      "FIPS": 28155,
      "county": "Webster County"
    },
    {
      "FIPS": 28139,
      "county": "Tippah County"
    },
    {
      "FIPS": 28127,
      "county": "Simpson County"
    },
    {
      "FIPS": 28121,
      "county": "Rankin County"
    },
    {
      "FIPS": 28119,
      "county": "Quitman County"
    },
    {
      "FIPS": 28115,
      "county": "Pontotoc County"
    },
    {
      "FIPS": 28107,
      "county": "Panola County"
    },
    {
      "FIPS": 28105,
      "county": "Oktibbeha County"
    },
    {
      "FIPS": 28099,
      "county": "Neshoba County"
    },
    {
      "FIPS": 28097,
      "county": "Montgomery County"
    },
    {
      "FIPS": 28095,
      "county": "Monroe County"
    },
    {
      "FIPS": 28093,
      "county": "Marshall County"
    },
    {
      "FIPS": 28087,
      "county": "Lowndes County"
    },
    {
      "FIPS": 28085,
      "county": "Lincoln County"
    },
    {
      "FIPS": 28077,
      "county": "Lawrence County"
    },
    {
      "FIPS": 28051,
      "county": "Holmes County"
    },
    {
      "FIPS": 28075,
      "county": "Lauderdale County"
    },
    {
      "FIPS": 28071,
      "county": "Lafayette County"
    },
    {
      "FIPS": 28057,
      "county": "Itawamba County"
    },
    {
      "FIPS": 28141,
      "county": "Tishomingo County"
    },
    {
      "FIPS": 28043,
      "county": "Grenada County"
    },
    {
      "FIPS": 28041,
      "county": "Greene County"
    },
    {
      "FIPS": 28037,
      "county": "Franklin County"
    },
    {
      "FIPS": 28035,
      "county": "Forrest County"
    },
    {
      "FIPS": 28033,
      "county": "DeSoto County"
    },
    {
      "FIPS": 28027,
      "county": "Coahoma County"
    },
    {
      "FIPS": 28021,
      "county": "Claiborne County"
    },
    {
      "FIPS": 28017,
      "county": "Chickasaw County"
    },
    {
      "FIPS": 28101,
      "county": "Newton County"
    },
    {
      "FIPS": 28055,
      "county": "Issaquena County"
    },
    {
      "FIPS": 28023,
      "county": "Clarke County"
    },
    {
      "FIPS": 28009,
      "county": "Benton County"
    },
    {
      "FIPS": 28161,
      "county": "Yalobusha County"
    },
    {
      "FIPS": 28047,
      "county": "Harrison County"
    },
    {
      "FIPS": 28059,
      "county": "Jackson County"
    },
    {
      "FIPS": 28003,
      "county": "Alcorn County"
    },
    {
      "FIPS": 28039,
      "county": "George County"
    },
    {
      "FIPS": 28103,
      "county": "Noxubee County"
    },
    {
      "FIPS": 28109,
      "county": "Pearl River County"
    },
    {
      "FIPS": 28157,
      "county": "Wilkinson County"
    },
    {
      "FIPS": 28031,
      "county": "Covington County"
    },
    {
      "FIPS": 28065,
      "county": "Jefferson Davis County"
    },
    {
      "FIPS": 28063,
      "county": "Jefferson County"
    },
    {
      "FIPS": 28061,
      "county": "Jasper County"
    },
    {
      "FIPS": 28091,
      "county": "Marion County"
    },
    {
      "FIPS": 28053,
      "county": "Humphreys County"
    },
    {
      "FIPS": 28147,
      "county": "Walthall County"
    },
    {
      "FIPS": 28159,
      "county": "Winston County"
    },
    {
      "FIPS": 28011,
      "county": "Bolivar County"
    },
    {
      "FIPS": 28143,
      "county": "Tunica County"
    },
    {
      "FIPS": 28151,
      "county": "Washington County"
    },
    {
      "FIPS": 28045,
      "county": "Hancock County"
    },
    {
      "FIPS": 28029,
      "county": "Copiah County"
    },
    {
      "FIPS": 28019,
      "county": "Choctaw County"
    },
    {
      "FIPS": 28069,
      "county": "Kemper County"
    },
    {
      "FIPS": 28013,
      "county": "Calhoun County"
    },
    {
      "FIPS": 28015,
      "county": "Carroll County"
    },
    {
      "FIPS": 28149,
      "county": "Warren County"
    },
    {
      "FIPS": 28125,
      "county": "Sharkey County"
    },
    {
      "FIPS": 28083,
      "county": "Leflore County"
    },
    {
      "FIPS": 28007,
      "county": "Attala County"
    },
    {
      "FIPS": 28005,
      "county": "Amite County"
    },
    {
      "FIPS": 28067,
      "county": "Jones County"
    },
    {
      "FIPS": 28163,
      "county": "Yazoo County"
    },
    {
      "FIPS": 28153,
      "county": "Wayne County"
    },
    {
      "FIPS": 28137,
      "county": "Tate County"
    },
    {
      "FIPS": 28129,
      "county": "Smith County"
    },
    {
      "FIPS": 28123,
      "county": "Scott County"
    },
    {
      "FIPS": 28081,
      "county": "Lee County"
    },
    {
      "FIPS": 28073,
      "county": "Lamar County"
    },
    {
      "FIPS": 28001,
      "county": "Adams County"
    },
    {
      "FIPS": 28113,
      "county": "Pike County"
    },
    {
      "FIPS": 28049,
      "county": "Hinds County"
    },
    {
      "FIPS": 28145,
      "county": "Union County"
    },
    {
      "FIPS": 28111,
      "county": "Perry County"
    },
    {
      "FIPS": 28079,
      "county": "Leake County"
    },
    {
      "FIPS": 28025,
      "county": "Clay County"
    },
    {
      "FIPS": 28131,
      "county": "Stone County"
    }
  ],
  "MT": [
    {
      "FIPS": 30019,
      "county": "Daniels County"
    },
    {
      "FIPS": 30057,
      "county": "Madison County"
    },
    {
      "FIPS": 30107,
      "county": "Wheatland County"
    },
    {
      "FIPS": 30105,
      "county": "Valley County"
    },
    {
      "FIPS": 30097,
      "county": "Sweet Grass County"
    },
    {
      "FIPS": 30087,
      "county": "Rosebud County"
    },
    {
      "FIPS": 30073,
      "county": "Pondera County"
    },
    {
      "FIPS": 30071,
      "county": "Phillips County"
    },
    {
      "FIPS": 30065,
      "county": "Musselshell County"
    },
    {
      "FIPS": 30049,
      "county": "Lewis and Clark County"
    },
    {
      "FIPS": 30043,
      "county": "Jefferson County"
    },
    {
      "FIPS": 30027,
      "county": "Fergus County"
    },
    {
      "FIPS": 30021,
      "county": "Dawson County"
    },
    {
      "FIPS": 30017,
      "county": "Custer County"
    },
    {
      "FIPS": 30015,
      "county": "Chouteau County"
    },
    {
      "FIPS": 30091,
      "county": "Sheridan County"
    },
    {
      "FIPS": 30009,
      "county": "Carbon County"
    },
    {
      "FIPS": 30007,
      "county": "Broadwater County"
    },
    {
      "FIPS": 30005,
      "county": "Blaine County"
    },
    {
      "FIPS": 30001,
      "county": "Beaverhead County"
    },
    {
      "FIPS": 30013,
      "county": "Cascade County"
    },
    {
      "FIPS": 30077,
      "county": "Powell County"
    },
    {
      "FIPS": 30025,
      "county": "Fallon County"
    },
    {
      "FIPS": 30089,
      "county": "Sanders County"
    },
    {
      "FIPS": 30103,
      "county": "Treasure County"
    },
    {
      "FIPS": 30109,
      "county": "Wibaux County"
    },
    {
      "FIPS": 30095,
      "county": "Stillwater County"
    },
    {
      "FIPS": 30033,
      "county": "Garfield County"
    },
    {
      "FIPS": 30039,
      "county": "Granite County"
    },
    {
      "FIPS": 30037,
      "county": "Golden Valley County"
    },
    {
      "FIPS": 30081,
      "county": "Ravalli County"
    },
    {
      "FIPS": 30069,
      "county": "Petroleum County"
    },
    {
      "FIPS": 30085,
      "county": "Roosevelt County"
    },
    {
      "FIPS": 30031,
      "county": "Gallatin County"
    },
    {
      "FIPS": 30063,
      "county": "Missoula County"
    },
    {
      "FIPS": 30093,
      "county": "Silver Bow County"
    },
    {
      "FIPS": 30055,
      "county": "McCone County"
    },
    {
      "FIPS": 30011,
      "county": "Carter County"
    },
    {
      "FIPS": 30051,
      "county": "Liberty County"
    },
    {
      "FIPS": 30029,
      "county": "Flathead County"
    },
    {
      "FIPS": 30111,
      "county": "Yellowstone County"
    },
    {
      "FIPS": 30083,
      "county": "Richland County"
    },
    {
      "FIPS": 30075,
      "county": "Powder River County"
    },
    {
      "FIPS": 30079,
      "county": "Prairie County"
    },
    {
      "FIPS": 30045,
      "county": "Judith Basin County"
    },
    {
      "FIPS": 30035,
      "county": "Glacier County"
    },
    {
      "FIPS": 30023,
      "county": "Deer Lodge County"
    },
    {
      "FIPS": 30061,
      "county": "Mineral County"
    },
    {
      "FIPS": 30053,
      "county": "Lincoln County"
    },
    {
      "FIPS": 30003,
      "county": "Big Horn County"
    },
    {
      "FIPS": 30059,
      "county": "Meagher County"
    },
    {
      "FIPS": 30067,
      "county": "Park County"
    },
    {
      "FIPS": 30101,
      "county": "Toole County"
    },
    {
      "FIPS": 30099,
      "county": "Teton County"
    },
    {
      "FIPS": 30047,
      "county": "Lake County"
    },
    {
      "FIPS": 30041,
      "county": "Hill County"
    }
  ],
  "NC": [
    {
      "FIPS": 37063,
      "county": "Durham County"
    },
    {
      "FIPS": 37065,
      "county": "Edgecombe County"
    },
    {
      "FIPS": 37025,
      "county": "Cabarrus County"
    },
    {
      "FIPS": 37071,
      "county": "Gaston County"
    },
    {
      "FIPS": 37155,
      "county": "Robeson County"
    },
    {
      "FIPS": 37193,
      "county": "Wilkes County"
    },
    {
      "FIPS": 37199,
      "county": "Yancey County"
    },
    {
      "FIPS": 37189,
      "county": "Watauga County"
    },
    {
      "FIPS": 37187,
      "county": "Washington County"
    },
    {
      "FIPS": 37037,
      "county": "Chatham County"
    },
    {
      "FIPS": 37185,
      "county": "Warren County"
    },
    {
      "FIPS": 37169,
      "county": "Stokes County"
    },
    {
      "FIPS": 37167,
      "county": "Stanly County"
    },
    {
      "FIPS": 37163,
      "county": "Sampson County"
    },
    {
      "FIPS": 37157,
      "county": "Rockingham County"
    },
    {
      "FIPS": 37141,
      "county": "Pender County"
    },
    {
      "FIPS": 37137,
      "county": "Pamlico County"
    },
    {
      "FIPS": 37131,
      "county": "Northampton County"
    },
    {
      "FIPS": 37081,
      "county": "Guilford County"
    },
    {
      "FIPS": 37111,
      "county": "McDowell County"
    },
    {
      "FIPS": 37117,
      "county": "Martin County"
    },
    {
      "FIPS": 37115,
      "county": "Madison County"
    },
    {
      "FIPS": 37107,
      "county": "Lenoir County"
    },
    {
      "FIPS": 37099,
      "county": "Jackson County"
    },
    {
      "FIPS": 37091,
      "county": "Hertford County"
    },
    {
      "FIPS": 37089,
      "county": "Henderson County"
    },
    {
      "FIPS": 37079,
      "county": "Greene County"
    },
    {
      "FIPS": 37077,
      "county": "Granville County"
    },
    {
      "FIPS": 37061,
      "county": "Duplin County"
    },
    {
      "FIPS": 37057,
      "county": "Davidson County"
    },
    {
      "FIPS": 37051,
      "county": "Cumberland County"
    },
    {
      "FIPS": 37049,
      "county": "Craven County"
    },
    {
      "FIPS": 37039,
      "county": "Cherokee County"
    },
    {
      "FIPS": 37027,
      "county": "Caldwell County"
    },
    {
      "FIPS": 37015,
      "county": "Bertie County"
    },
    {
      "FIPS": 37013,
      "county": "Beaufort County"
    },
    {
      "FIPS": 37005,
      "county": "Alleghany County"
    },
    {
      "FIPS": 37003,
      "county": "Alexander County"
    },
    {
      "FIPS": 37161,
      "county": "Rutherford County"
    },
    {
      "FIPS": 37165,
      "county": "Scotland County"
    },
    {
      "FIPS": 37085,
      "county": "Harnett County"
    },
    {
      "FIPS": 37197,
      "county": "Yadkin County"
    },
    {
      "FIPS": 37021,
      "county": "Buncombe County"
    },
    {
      "FIPS": 37033,
      "county": "Caswell County"
    },
    {
      "FIPS": 37121,
      "county": "Mitchell County"
    },
    {
      "FIPS": 37101,
      "county": "Johnston County"
    },
    {
      "FIPS": 37129,
      "county": "New Hanover County"
    },
    {
      "FIPS": 37175,
      "county": "Transylvania County"
    },
    {
      "FIPS": 37031,
      "county": "Carteret County"
    },
    {
      "FIPS": 37177,
      "county": "Tyrrell County"
    },
    {
      "FIPS": 37145,
      "county": "Person County"
    },
    {
      "FIPS": 37045,
      "county": "Cleveland County"
    },
    {
      "FIPS": 37075,
      "county": "Graham County"
    },
    {
      "FIPS": 37053,
      "county": "Currituck County"
    },
    {
      "FIPS": 37109,
      "county": "Lincoln County"
    },
    {
      "FIPS": 37047,
      "county": "Columbus County"
    },
    {
      "FIPS": 37139,
      "county": "Pasquotank County"
    },
    {
      "FIPS": 37001,
      "county": "Alamance County"
    },
    {
      "FIPS": 37151,
      "county": "Randolph County"
    },
    {
      "FIPS": 37097,
      "county": "Iredell County"
    },
    {
      "FIPS": 37143,
      "county": "Perquimans County"
    },
    {
      "FIPS": 37067,
      "county": "Forsyth County"
    },
    {
      "FIPS": 37087,
      "county": "Haywood County"
    },
    {
      "FIPS": 37119,
      "county": "Mecklenburg County"
    },
    {
      "FIPS": 37123,
      "county": "Montgomery County"
    },
    {
      "FIPS": 37195,
      "county": "Wilson County"
    },
    {
      "FIPS": 37153,
      "county": "Richmond County"
    },
    {
      "FIPS": 37041,
      "county": "Chowan County"
    },
    {
      "FIPS": 37133,
      "county": "Onslow County"
    },
    {
      "FIPS": 37017,
      "county": "Bladen County"
    },
    {
      "FIPS": 37029,
      "county": "Camden County"
    },
    {
      "FIPS": 37035,
      "county": "Catawba County"
    },
    {
      "FIPS": 37019,
      "county": "Brunswick County"
    },
    {
      "FIPS": 37083,
      "county": "Halifax County"
    },
    {
      "FIPS": 37135,
      "county": "Orange County"
    },
    {
      "FIPS": 37069,
      "county": "Franklin County"
    },
    {
      "FIPS": 37149,
      "county": "Polk County"
    },
    {
      "FIPS": 37173,
      "county": "Swain County"
    },
    {
      "FIPS": 37125,
      "county": "Moore County"
    },
    {
      "FIPS": 37105,
      "county": "Lee County"
    },
    {
      "FIPS": 37103,
      "county": "Jones County"
    },
    {
      "FIPS": 37055,
      "county": "Dare County"
    },
    {
      "FIPS": 37043,
      "county": "Clay County"
    },
    {
      "FIPS": 37009,
      "county": "Ashe County"
    },
    {
      "FIPS": 37171,
      "county": "Surry County"
    },
    {
      "FIPS": 37191,
      "county": "Wayne County"
    },
    {
      "FIPS": 37113,
      "county": "Macon County"
    },
    {
      "FIPS": 37095,
      "county": "Hyde County"
    },
    {
      "FIPS": 37159,
      "county": "Rowan County"
    },
    {
      "FIPS": 37181,
      "county": "Vance County"
    },
    {
      "FIPS": 37183,
      "county": "Wake County"
    },
    {
      "FIPS": 37023,
      "county": "Burke County"
    },
    {
      "FIPS": 37059,
      "county": "Davie County"
    },
    {
      "FIPS": 37147,
      "county": "Pitt County"
    },
    {
      "FIPS": 37127,
      "county": "Nash County"
    },
    {
      "FIPS": 37179,
      "county": "Union County"
    },
    {
      "FIPS": 37011,
      "county": "Avery County"
    },
    {
      "FIPS": 37093,
      "county": "Hoke County"
    },
    {
      "FIPS": 37007,
      "county": "Anson County"
    },
    {
      "FIPS": 37073,
      "county": "Gates County"
    }
  ],
  "ND": [
    {
      "FIPS": 38095,
      "county": "Towner County"
    },
    {
      "FIPS": 38077,
      "county": "Richland County"
    },
    {
      "FIPS": 38093,
      "county": "Stutsman County"
    },
    {
      "FIPS": 38075,
      "county": "Renville County"
    },
    {
      "FIPS": 38063,
      "county": "Nelson County"
    },
    {
      "FIPS": 38059,
      "county": "Morton County"
    },
    {
      "FIPS": 38073,
      "county": "Ransom County"
    },
    {
      "FIPS": 38035,
      "county": "Grand Forks County"
    },
    {
      "FIPS": 38009,
      "county": "Bottineau County"
    },
    {
      "FIPS": 38061,
      "county": "Mountrail County"
    },
    {
      "FIPS": 38015,
      "county": "Burleigh County"
    },
    {
      "FIPS": 38083,
      "county": "Sheridan County"
    },
    {
      "FIPS": 38065,
      "county": "Oliver County"
    },
    {
      "FIPS": 38081,
      "county": "Sargent County"
    },
    {
      "FIPS": 38105,
      "county": "Williams County"
    },
    {
      "FIPS": 38041,
      "county": "Hettinger County"
    },
    {
      "FIPS": 38007,
      "county": "Billings County"
    },
    {
      "FIPS": 38033,
      "county": "Golden Valley County"
    },
    {
      "FIPS": 38019,
      "county": "Cavalier County"
    },
    {
      "FIPS": 38057,
      "county": "Mercer County"
    },
    {
      "FIPS": 38023,
      "county": "Divide County"
    },
    {
      "FIPS": 38021,
      "county": "Dickey County"
    },
    {
      "FIPS": 38097,
      "county": "Traill County"
    },
    {
      "FIPS": 38031,
      "county": "Foster County"
    },
    {
      "FIPS": 38003,
      "county": "Barnes County"
    },
    {
      "FIPS": 38079,
      "county": "Rolette County"
    },
    {
      "FIPS": 38067,
      "county": "Pembina County"
    },
    {
      "FIPS": 38051,
      "county": "McIntosh County"
    },
    {
      "FIPS": 38053,
      "county": "McKenzie County"
    },
    {
      "FIPS": 38069,
      "county": "Pierce County"
    },
    {
      "FIPS": 38071,
      "county": "Ramsey County"
    },
    {
      "FIPS": 38091,
      "county": "Steele County"
    },
    {
      "FIPS": 38029,
      "county": "Emmons County"
    },
    {
      "FIPS": 38005,
      "county": "Benson County"
    },
    {
      "FIPS": 38045,
      "county": "Lamoure County"
    },
    {
      "FIPS": 38011,
      "county": "Bowman County"
    },
    {
      "FIPS": 38039,
      "county": "Griggs County"
    },
    {
      "FIPS": 38043,
      "county": "Kidder County"
    },
    {
      "FIPS": 38049,
      "county": "McHenry County"
    },
    {
      "FIPS": 38055,
      "county": "McLean County"
    },
    {
      "FIPS": 38037,
      "county": "Grant County"
    },
    {
      "FIPS": 38101,
      "county": "Ward County"
    },
    {
      "FIPS": 38013,
      "county": "Burke County"
    },
    {
      "FIPS": 38001,
      "county": "Adams County"
    },
    {
      "FIPS": 38085,
      "county": "Sioux County"
    },
    {
      "FIPS": 38047,
      "county": "Logan County"
    },
    {
      "FIPS": 38017,
      "county": "Cass County"
    },
    {
      "FIPS": 38099,
      "county": "Walsh County"
    },
    {
      "FIPS": 38103,
      "county": "Wells County"
    },
    {
      "FIPS": 38089,
      "county": "Stark County"
    },
    {
      "FIPS": 38027,
      "county": "Eddy County"
    },
    {
      "FIPS": 38025,
      "county": "Dunn County"
    },
    {
      "FIPS": 38087,
      "county": "Slope County"
    }
  ],
  "NE": [
    {
      "FIPS": 31177,
      "county": "Washington County"
    },
    {
      "FIPS": 31091,
      "county": "Hooker County"
    },
    {
      "FIPS": 31175,
      "county": "Valley County"
    },
    {
      "FIPS": 31137,
      "county": "Phelps County"
    },
    {
      "FIPS": 31163,
      "county": "Sherman County"
    },
    {
      "FIPS": 31157,
      "county": "Scotts Bluff County"
    },
    {
      "FIPS": 31129,
      "county": "Nuckolls County"
    },
    {
      "FIPS": 31105,
      "county": "Kimball County"
    },
    {
      "FIPS": 31081,
      "county": "Hamilton County"
    },
    {
      "FIPS": 31169,
      "county": "Thayer County"
    },
    {
      "FIPS": 31041,
      "county": "Custer County"
    },
    {
      "FIPS": 31033,
      "county": "Cheyenne County"
    },
    {
      "FIPS": 31019,
      "county": "Buffalo County"
    },
    {
      "FIPS": 31013,
      "county": "Box Butte County"
    },
    {
      "FIPS": 31093,
      "county": "Howard County"
    },
    {
      "FIPS": 31155,
      "county": "Saunders County"
    },
    {
      "FIPS": 31073,
      "county": "Gosper County"
    },
    {
      "FIPS": 31007,
      "county": "Banner County"
    },
    {
      "FIPS": 31071,
      "county": "Garfield County"
    },
    {
      "FIPS": 31181,
      "county": "Webster County"
    },
    {
      "FIPS": 31087,
      "county": "Hitchcock County"
    },
    {
      "FIPS": 31121,
      "county": "Merrick County"
    },
    {
      "FIPS": 31039,
      "county": "Cuming County"
    },
    {
      "FIPS": 31109,
      "county": "Lancaster County"
    },
    {
      "FIPS": 31123,
      "county": "Morrill County"
    },
    {
      "FIPS": 31059,
      "county": "Fillmore County"
    },
    {
      "FIPS": 31095,
      "county": "Jefferson County"
    },
    {
      "FIPS": 31065,
      "county": "Furnas County"
    },
    {
      "FIPS": 31037,
      "county": "Colfax County"
    },
    {
      "FIPS": 31145,
      "county": "Red Willow County"
    },
    {
      "FIPS": 31117,
      "county": "McPherson County"
    },
    {
      "FIPS": 31183,
      "county": "Wheeler County"
    },
    {
      "FIPS": 31159,
      "county": "Seward County"
    },
    {
      "FIPS": 31077,
      "county": "Greeley County"
    },
    {
      "FIPS": 31097,
      "county": "Johnson County"
    },
    {
      "FIPS": 31063,
      "county": "Frontier County"
    },
    {
      "FIPS": 31127,
      "county": "Nemaha County"
    },
    {
      "FIPS": 31005,
      "county": "Arthur County"
    },
    {
      "FIPS": 31069,
      "county": "Garden County"
    },
    {
      "FIPS": 31111,
      "county": "Lincoln County"
    },
    {
      "FIPS": 31173,
      "county": "Thurston County"
    },
    {
      "FIPS": 31055,
      "county": "Douglas County"
    },
    {
      "FIPS": 31043,
      "county": "Dakota County"
    },
    {
      "FIPS": 31151,
      "county": "Saline County"
    },
    {
      "FIPS": 31141,
      "county": "Platte County"
    },
    {
      "FIPS": 31135,
      "county": "Perkins County"
    },
    {
      "FIPS": 31003,
      "county": "Antelope County"
    },
    {
      "FIPS": 31161,
      "county": "Sheridan County"
    },
    {
      "FIPS": 31133,
      "county": "Pawnee County"
    },
    {
      "FIPS": 31139,
      "county": "Pierce County"
    },
    {
      "FIPS": 31023,
      "county": "Butler County"
    },
    {
      "FIPS": 31147,
      "county": "Richardson County"
    },
    {
      "FIPS": 31167,
      "county": "Stanton County"
    },
    {
      "FIPS": 31103,
      "county": "Keya Paha County"
    },
    {
      "FIPS": 31119,
      "county": "Madison County"
    },
    {
      "FIPS": 31009,
      "county": "Blaine County"
    },
    {
      "FIPS": 31031,
      "county": "Cherry County"
    },
    {
      "FIPS": 31099,
      "county": "Kearney County"
    },
    {
      "FIPS": 31171,
      "county": "Thomas County"
    },
    {
      "FIPS": 31047,
      "county": "Dawson County"
    },
    {
      "FIPS": 31083,
      "county": "Harlan County"
    },
    {
      "FIPS": 31061,
      "county": "Franklin County"
    },
    {
      "FIPS": 31131,
      "county": "Otoe County"
    },
    {
      "FIPS": 31125,
      "county": "Nance County"
    },
    {
      "FIPS": 31107,
      "county": "Knox County"
    },
    {
      "FIPS": 31079,
      "county": "Hall County"
    },
    {
      "FIPS": 31067,
      "county": "Gage County"
    },
    {
      "FIPS": 31035,
      "county": "Clay County"
    },
    {
      "FIPS": 31029,
      "county": "Chase County"
    },
    {
      "FIPS": 31027,
      "county": "Cedar County"
    },
    {
      "FIPS": 31025,
      "county": "Cass County"
    },
    {
      "FIPS": 31021,
      "county": "Burt County"
    },
    {
      "FIPS": 31001,
      "county": "Adams County"
    },
    {
      "FIPS": 31143,
      "county": "Polk County"
    },
    {
      "FIPS": 31179,
      "county": "Wayne County"
    },
    {
      "FIPS": 31089,
      "county": "Holt County"
    },
    {
      "FIPS": 31011,
      "county": "Boone County"
    },
    {
      "FIPS": 31017,
      "county": "Brown County"
    },
    {
      "FIPS": 31045,
      "county": "Dawes County"
    },
    {
      "FIPS": 31165,
      "county": "Sioux County"
    },
    {
      "FIPS": 31015,
      "county": "Boyd County"
    },
    {
      "FIPS": 31053,
      "county": "Dodge County"
    },
    {
      "FIPS": 31101,
      "county": "Keith County"
    },
    {
      "FIPS": 31185,
      "county": "York County"
    },
    {
      "FIPS": 31057,
      "county": "Dundy County"
    },
    {
      "FIPS": 31153,
      "county": "Sarpy County"
    },
    {
      "FIPS": 31149,
      "county": "Rock County"
    },
    {
      "FIPS": 31085,
      "county": "Hayes County"
    },
    {
      "FIPS": 31113,
      "county": "Logan County"
    },
    {
      "FIPS": 31051,
      "county": "Dixon County"
    },
    {
      "FIPS": 31049,
      "county": "Deuel County"
    },
    {
      "FIPS": 31075,
      "county": "Grant County"
    },
    {
      "FIPS": 31115,
      "county": "Loup County"
    }
  ],
  "NH": [
    {
      "FIPS": 33015,
      "county": "Rockingham County"
    },
    {
      "FIPS": 33019,
      "county": "Sullivan County"
    },
    {
      "FIPS": 33013,
      "county": "Merrimack County"
    },
    {
      "FIPS": 33001,
      "county": "Belknap County"
    },
    {
      "FIPS": 33003,
      "county": "Carroll County"
    },
    {
      "FIPS": 33005,
      "county": "Cheshire County"
    },
    {
      "FIPS": 33011,
      "county": "Hillsborough County"
    },
    {
      "FIPS": 33009,
      "county": "Grafton County"
    },
    {
      "FIPS": 33017,
      "county": "Strafford County"
    },
    {
      "FIPS": 33007,
      "county": "Coos County"
    }
  ],
  "NJ": [
    {
      "FIPS": 34017,
      "county": "Hudson County"
    },
    {
      "FIPS": 34019,
      "county": "Hunterdon County"
    },
    {
      "FIPS": 34031,
      "county": "Passaic County"
    },
    {
      "FIPS": 34011,
      "county": "Cumberland County"
    },
    {
      "FIPS": 34023,
      "county": "Middlesex County"
    },
    {
      "FIPS": 34003,
      "county": "Bergen County"
    },
    {
      "FIPS": 34009,
      "county": "Cape May County"
    },
    {
      "FIPS": 34035,
      "county": "Somerset County"
    },
    {
      "FIPS": 34021,
      "county": "Mercer County"
    },
    {
      "FIPS": 34001,
      "county": "Atlantic County"
    },
    {
      "FIPS": 34037,
      "county": "Sussex County"
    },
    {
      "FIPS": 34005,
      "county": "Burlington County"
    },
    {
      "FIPS": 34015,
      "county": "Gloucester County"
    },
    {
      "FIPS": 34027,
      "county": "Morris County"
    },
    {
      "FIPS": 34025,
      "county": "Monmouth County"
    },
    {
      "FIPS": 34007,
      "county": "Camden County"
    },
    {
      "FIPS": 34041,
      "county": "Warren County"
    },
    {
      "FIPS": 34029,
      "county": "Ocean County"
    },
    {
      "FIPS": 34033,
      "county": "Salem County"
    },
    {
      "FIPS": 34013,
      "county": "Essex County"
    },
    {
      "FIPS": 34039,
      "county": "Union County"
    }
  ],
  "NM": [
    {
      "FIPS": 35005,
      "county": "Chaves County"
    },
    {
      "FIPS": 35061,
      "county": "Valencia County"
    },
    {
      "FIPS": 35053,
      "county": "Socorro County"
    },
    {
      "FIPS": 35051,
      "county": "Sierra County"
    },
    {
      "FIPS": 35043,
      "county": "Sandoval County"
    },
    {
      "FIPS": 35047,
      "county": "San Miguel County"
    },
    {
      "FIPS": 35045,
      "county": "San Juan County"
    },
    {
      "FIPS": 35041,
      "county": "Roosevelt County"
    },
    {
      "FIPS": 35039,
      "county": "Rio Arriba County"
    },
    {
      "FIPS": 35031,
      "county": "McKinley County"
    },
    {
      "FIPS": 35028,
      "county": "Los Alamos County"
    },
    {
      "FIPS": 35006,
      "county": "Cibola County"
    },
    {
      "FIPS": 35057,
      "county": "Torrance County"
    },
    {
      "FIPS": 35027,
      "county": "Lincoln County"
    },
    {
      "FIPS": 35013,
      "county": "Dona Ana County"
    },
    {
      "FIPS": 35007,
      "county": "Colfax County"
    },
    {
      "FIPS": 35019,
      "county": "Guadalupe County"
    },
    {
      "FIPS": 35021,
      "county": "Harding County"
    },
    {
      "FIPS": 35001,
      "county": "Bernalillo County"
    },
    {
      "FIPS": 35049,
      "county": "Santa Fe County"
    },
    {
      "FIPS": 35011,
      "county": "De Baca County"
    },
    {
      "FIPS": 35003,
      "county": "Catron County"
    },
    {
      "FIPS": 35023,
      "county": "Hidalgo County"
    },
    {
      "FIPS": 35055,
      "county": "Taos County"
    },
    {
      "FIPS": 35029,
      "county": "Luna County"
    },
    {
      "FIPS": 35009,
      "county": "Curry County"
    },
    {
      "FIPS": 35025,
      "county": "Lea County"
    },
    {
      "FIPS": 35059,
      "county": "Union County"
    },
    {
      "FIPS": 35017,
      "county": "Grant County"
    },
    {
      "FIPS": 35033,
      "county": "Mora County"
    },
    {
      "FIPS": 35015,
      "county": "Eddy County"
    },
    {
      "FIPS": 35035,
      "county": "Otero County"
    },
    {
      "FIPS": 35037,
      "county": "Quay County"
    }
  ],
  "NV": [
    {
      "FIPS": 32033,
      "county": "White Pine County"
    },
    {
      "FIPS": 32027,
      "county": "Pershing County"
    },
    {
      "FIPS": 32005,
      "county": "Douglas County"
    },
    {
      "FIPS": 32001,
      "county": "Churchill County"
    },
    {
      "FIPS": 32021,
      "county": "Mineral County"
    },
    {
      "FIPS": 32017,
      "county": "Lincoln County"
    },
    {
      "FIPS": 32009,
      "county": "Esmeralda County"
    },
    {
      "FIPS": 32011,
      "county": "Eureka County"
    },
    {
      "FIPS": 32031,
      "county": "Washoe County"
    },
    {
      "FIPS": 32013,
      "county": "Humboldt County"
    },
    {
      "FIPS": 32029,
      "county": "Storey County"
    },
    {
      "FIPS": 32015,
      "county": "Lander County"
    },
    {
      "FIPS": 32023,
      "county": "Nye County"
    },
    {
      "FIPS": 32510,
      "county": "Carson City"
    },
    {
      "FIPS": 32003,
      "county": "Clark County"
    },
    {
      "FIPS": 32019,
      "county": "Lyon County"
    },
    {
      "FIPS": 32007,
      "county": "Elko County"
    }
  ],
  "NY": [
    {
      "FIPS": 36091,
      "county": "Saratoga County"
    },
    {
      "FIPS": 36121,
      "county": "Wyoming County"
    },
    {
      "FIPS": 36115,
      "county": "Washington County"
    },
    {
      "FIPS": 36113,
      "county": "Warren County"
    },
    {
      "FIPS": 36111,
      "county": "Ulster County"
    },
    {
      "FIPS": 36105,
      "county": "Sullivan County"
    },
    {
      "FIPS": 36101,
      "county": "Steuben County"
    },
    {
      "FIPS": 36089,
      "county": "St Lawrence County"
    },
    {
      "FIPS": 36099,
      "county": "Seneca County"
    },
    {
      "FIPS": 36093,
      "county": "Schenectady County"
    },
    {
      "FIPS": 36079,
      "county": "Putnam County"
    },
    {
      "FIPS": 36069,
      "county": "Ontario County"
    },
    {
      "FIPS": 36045,
      "county": "Jefferson County"
    },
    {
      "FIPS": 36041,
      "county": "Hamilton County"
    },
    {
      "FIPS": 36039,
      "county": "Greene County"
    },
    {
      "FIPS": 36037,
      "county": "Genesee County"
    },
    {
      "FIPS": 36035,
      "county": "Fulton County"
    },
    {
      "FIPS": 36025,
      "county": "Delaware County"
    },
    {
      "FIPS": 36023,
      "county": "Cortland County"
    },
    {
      "FIPS": 36021,
      "county": "Columbia County"
    },
    {
      "FIPS": 36019,
      "county": "Clinton County"
    },
    {
      "FIPS": 36011,
      "county": "Cayuga County"
    },
    {
      "FIPS": 36003,
      "county": "Allegany County"
    },
    {
      "FIPS": 36097,
      "county": "Schuyler County"
    },
    {
      "FIPS": 36051,
      "county": "Livingston County"
    },
    {
      "FIPS": 36057,
      "county": "Montgomery County"
    },
    {
      "FIPS": 36075,
      "county": "Oswego County"
    },
    {
      "FIPS": 36027,
      "county": "Dutchess County"
    },
    {
      "FIPS": 36083,
      "county": "Rensselaer County"
    },
    {
      "FIPS": 36077,
      "county": "Otsego County"
    },
    {
      "FIPS": 36059,
      "county": "Nassau County"
    },
    {
      "FIPS": 36067,
      "county": "Onondaga County"
    },
    {
      "FIPS": 36063,
      "county": "Niagara County"
    },
    {
      "FIPS": 36065,
      "county": "Oneida County"
    },
    {
      "FIPS": 36071,
      "county": "Orange County"
    },
    {
      "FIPS": 36009,
      "county": "Cattaraugus County"
    },
    {
      "FIPS": 36015,
      "county": "Chemung County"
    },
    {
      "FIPS": 36103,
      "county": "Suffolk County"
    },
    {
      "FIPS": 36043,
      "county": "Herkimer County"
    },
    {
      "FIPS": 36055,
      "county": "Monroe County"
    },
    {
      "FIPS": 36087,
      "county": "Rockland County"
    },
    {
      "FIPS": 36061,
      "county": "New York County"
    },
    {
      "FIPS": 36081,
      "county": "Queens County"
    },
    {
      "FIPS": 36013,
      "county": "Chautauqua County"
    },
    {
      "FIPS": 36007,
      "county": "Broome County"
    },
    {
      "FIPS": 36085,
      "county": "Richmond County"
    },
    {
      "FIPS": 36109,
      "county": "Tompkins County"
    },
    {
      "FIPS": 36053,
      "county": "Madison County"
    },
    {
      "FIPS": 36073,
      "county": "Orleans County"
    },
    {
      "FIPS": 36001,
      "county": "Albany County"
    },
    {
      "FIPS": 36033,
      "county": "Franklin County"
    },
    {
      "FIPS": 36095,
      "county": "Schoharie County"
    },
    {
      "FIPS": 36017,
      "county": "Chenango County"
    },
    {
      "FIPS": 36119,
      "county": "Westchester County"
    },
    {
      "FIPS": 36031,
      "county": "Essex County"
    },
    {
      "FIPS": 36123,
      "county": "Yates County"
    },
    {
      "FIPS": 36117,
      "county": "Wayne County"
    },
    {
      "FIPS": 36107,
      "county": "Tioga County"
    },
    {
      "FIPS": 36049,
      "county": "Lewis County"
    },
    {
      "FIPS": 36005,
      "county": "Bronx County"
    },
    {
      "FIPS": 36047,
      "county": "Kings County"
    },
    {
      "FIPS": 36029,
      "county": "Erie County"
    }
  ],
  "OH": [
    {
      "FIPS": 39065,
      "county": "Hardin County"
    },
    {
      "FIPS": 39157,
      "county": "Tuscarawas County"
    },
    {
      "FIPS": 39147,
      "county": "Seneca County"
    },
    {
      "FIPS": 39137,
      "county": "Putnam County"
    },
    {
      "FIPS": 39133,
      "county": "Portage County"
    },
    {
      "FIPS": 39123,
      "county": "Ottawa County"
    },
    {
      "FIPS": 39117,
      "county": "Morrow County"
    },
    {
      "FIPS": 39115,
      "county": "Morgan County"
    },
    {
      "FIPS": 39111,
      "county": "Monroe County"
    },
    {
      "FIPS": 39107,
      "county": "Mercer County"
    },
    {
      "FIPS": 39093,
      "county": "Lorain County"
    },
    {
      "FIPS": 39089,
      "county": "Licking County"
    },
    {
      "FIPS": 39071,
      "county": "Highland County"
    },
    {
      "FIPS": 39055,
      "county": "Geauga County"
    },
    {
      "FIPS": 39031,
      "county": "Coshocton County"
    },
    {
      "FIPS": 39029,
      "county": "Columbiana County"
    },
    {
      "FIPS": 39025,
      "county": "Clermont County"
    },
    {
      "FIPS": 39021,
      "county": "Champaign County"
    },
    {
      "FIPS": 39019,
      "county": "Carroll County"
    },
    {
      "FIPS": 39013,
      "county": "Belmont County"
    },
    {
      "FIPS": 39005,
      "county": "Ashland County"
    },
    {
      "FIPS": 39161,
      "county": "Van Wert County"
    },
    {
      "FIPS": 39129,
      "county": "Pickaway County"
    },
    {
      "FIPS": 39125,
      "county": "Paulding County"
    },
    {
      "FIPS": 39163,
      "county": "Vinton County"
    },
    {
      "FIPS": 39007,
      "county": "Ashtabula County"
    },
    {
      "FIPS": 39075,
      "county": "Holmes County"
    },
    {
      "FIPS": 39073,
      "county": "Hocking County"
    },
    {
      "FIPS": 39079,
      "county": "Jackson County"
    },
    {
      "FIPS": 39047,
      "county": "Fayette County"
    },
    {
      "FIPS": 39061,
      "county": "Hamilton County"
    },
    {
      "FIPS": 39135,
      "county": "Preble County"
    },
    {
      "FIPS": 39087,
      "county": "Lawrence County"
    },
    {
      "FIPS": 39033,
      "county": "Crawford County"
    },
    {
      "FIPS": 39139,
      "county": "Richland County"
    },
    {
      "FIPS": 39149,
      "county": "Shelby County"
    },
    {
      "FIPS": 39143,
      "county": "Sandusky County"
    },
    {
      "FIPS": 39027,
      "county": "Clinton County"
    },
    {
      "FIPS": 39099,
      "county": "Mahoning County"
    },
    {
      "FIPS": 39113,
      "county": "Montgomery County"
    },
    {
      "FIPS": 39063,
      "county": "Hancock County"
    },
    {
      "FIPS": 39017,
      "county": "Butler County"
    },
    {
      "FIPS": 39081,
      "county": "Jefferson County"
    },
    {
      "FIPS": 39175,
      "county": "Wyandot County"
    },
    {
      "FIPS": 39049,
      "county": "Franklin County"
    },
    {
      "FIPS": 39165,
      "county": "Warren County"
    },
    {
      "FIPS": 39153,
      "county": "Summit County"
    },
    {
      "FIPS": 39119,
      "county": "Muskingum County"
    },
    {
      "FIPS": 39053,
      "county": "Gallia County"
    },
    {
      "FIPS": 39171,
      "county": "Williams County"
    },
    {
      "FIPS": 39057,
      "county": "Greene County"
    },
    {
      "FIPS": 39009,
      "county": "Athens County"
    },
    {
      "FIPS": 39101,
      "county": "Marion County"
    },
    {
      "FIPS": 39155,
      "county": "Trumbull County"
    },
    {
      "FIPS": 39011,
      "county": "Auglaize County"
    },
    {
      "FIPS": 39097,
      "county": "Madison County"
    },
    {
      "FIPS": 39103,
      "county": "Medina County"
    },
    {
      "FIPS": 39059,
      "county": "Guernsey County"
    },
    {
      "FIPS": 39039,
      "county": "Defiance County"
    },
    {
      "FIPS": 39051,
      "county": "Fulton County"
    },
    {
      "FIPS": 39045,
      "county": "Fairfield County"
    },
    {
      "FIPS": 39167,
      "county": "Washington County"
    },
    {
      "FIPS": 39035,
      "county": "Cuyahoga County"
    },
    {
      "FIPS": 39145,
      "county": "Scioto County"
    },
    {
      "FIPS": 39067,
      "county": "Harrison County"
    },
    {
      "FIPS": 39001,
      "county": "Adams County"
    },
    {
      "FIPS": 39159,
      "county": "Union County"
    },
    {
      "FIPS": 39121,
      "county": "Noble County"
    },
    {
      "FIPS": 39105,
      "county": "Meigs County"
    },
    {
      "FIPS": 39077,
      "county": "Huron County"
    },
    {
      "FIPS": 39043,
      "county": "Erie County"
    },
    {
      "FIPS": 39131,
      "county": "Pike County"
    },
    {
      "FIPS": 39003,
      "county": "Allen County"
    },
    {
      "FIPS": 39091,
      "county": "Logan County"
    },
    {
      "FIPS": 39037,
      "county": "Darke County"
    },
    {
      "FIPS": 39141,
      "county": "Ross County"
    },
    {
      "FIPS": 39109,
      "county": "Miami County"
    },
    {
      "FIPS": 39069,
      "county": "Henry County"
    },
    {
      "FIPS": 39173,
      "county": "Wood County"
    },
    {
      "FIPS": 39083,
      "county": "Knox County"
    },
    {
      "FIPS": 39169,
      "county": "Wayne County"
    },
    {
      "FIPS": 39151,
      "county": "Stark County"
    },
    {
      "FIPS": 39085,
      "county": "Lake County"
    },
    {
      "FIPS": 39023,
      "county": "Clark County"
    },
    {
      "FIPS": 39095,
      "county": "Lucas County"
    },
    {
      "FIPS": 39015,
      "county": "Brown County"
    },
    {
      "FIPS": 39127,
      "county": "Perry County"
    }
  ],
  "OK": [
    {
      "FIPS": 40141,
      "county": "Tillman County"
    },
    {
      "FIPS": 40123,
      "county": "Pontotoc County"
    },
    {
      "FIPS": 40117,
      "county": "Pawnee County"
    },
    {
      "FIPS": 40107,
      "county": "Okfuskee County"
    },
    {
      "FIPS": 40091,
      "county": "McIntosh County"
    },
    {
      "FIPS": 40079,
      "county": "Le Flore County"
    },
    {
      "FIPS": 40065,
      "county": "Jackson County"
    },
    {
      "FIPS": 40057,
      "county": "Harmon County"
    },
    {
      "FIPS": 40041,
      "county": "Delaware County"
    },
    {
      "FIPS": 40021,
      "county": "Cherokee County"
    },
    {
      "FIPS": 40009,
      "county": "Beckham County"
    },
    {
      "FIPS": 40039,
      "county": "Custer County"
    },
    {
      "FIPS": 40153,
      "county": "Woodward County"
    },
    {
      "FIPS": 40069,
      "county": "Johnston County"
    },
    {
      "FIPS": 40105,
      "county": "Nowata County"
    },
    {
      "FIPS": 40129,
      "county": "Roger Mills County"
    },
    {
      "FIPS": 40133,
      "county": "Seminole County"
    },
    {
      "FIPS": 40111,
      "county": "Okmulgee County"
    },
    {
      "FIPS": 40087,
      "county": "McClain County"
    },
    {
      "FIPS": 40089,
      "county": "McCurtain County"
    },
    {
      "FIPS": 40147,
      "county": "Washington County"
    },
    {
      "FIPS": 40131,
      "county": "Rogers County"
    },
    {
      "FIPS": 40145,
      "county": "Wagoner County"
    },
    {
      "FIPS": 40059,
      "county": "Harper County"
    },
    {
      "FIPS": 40095,
      "county": "Marshall County"
    },
    {
      "FIPS": 40101,
      "county": "Muskogee County"
    },
    {
      "FIPS": 40115,
      "county": "Ottawa County"
    },
    {
      "FIPS": 40049,
      "county": "Garvin County"
    },
    {
      "FIPS": 40099,
      "county": "Murray County"
    },
    {
      "FIPS": 40027,
      "county": "Cleveland County"
    },
    {
      "FIPS": 40061,
      "county": "Haskell County"
    },
    {
      "FIPS": 40109,
      "county": "Oklahoma County"
    },
    {
      "FIPS": 40019,
      "county": "Carter County"
    },
    {
      "FIPS": 40149,
      "county": "Washita County"
    },
    {
      "FIPS": 40067,
      "county": "Jefferson County"
    },
    {
      "FIPS": 40125,
      "county": "Pottawatomie County"
    },
    {
      "FIPS": 40023,
      "county": "Choctaw County"
    },
    {
      "FIPS": 40077,
      "county": "Latimer County"
    },
    {
      "FIPS": 40127,
      "county": "Pushmataha County"
    },
    {
      "FIPS": 40073,
      "county": "Kingfisher County"
    },
    {
      "FIPS": 40007,
      "county": "Beaver County"
    },
    {
      "FIPS": 40047,
      "county": "Garfield County"
    },
    {
      "FIPS": 40063,
      "county": "Hughes County"
    },
    {
      "FIPS": 40135,
      "county": "Sequoyah County"
    },
    {
      "FIPS": 40033,
      "county": "Cotton County"
    },
    {
      "FIPS": 40011,
      "county": "Blaine County"
    },
    {
      "FIPS": 40025,
      "county": "Cimarron County"
    },
    {
      "FIPS": 40121,
      "county": "Pittsburg County"
    },
    {
      "FIPS": 40031,
      "county": "Comanche County"
    },
    {
      "FIPS": 40003,
      "county": "Alfalfa County"
    },
    {
      "FIPS": 40137,
      "county": "Stephens County"
    },
    {
      "FIPS": 40081,
      "county": "Lincoln County"
    },
    {
      "FIPS": 40017,
      "county": "Canadian County"
    },
    {
      "FIPS": 40053,
      "county": "Grant County"
    },
    {
      "FIPS": 40013,
      "county": "Bryan County"
    },
    {
      "FIPS": 40139,
      "county": "Texas County"
    },
    {
      "FIPS": 40113,
      "county": "Osage County"
    },
    {
      "FIPS": 40093,
      "county": "Major County"
    },
    {
      "FIPS": 40085,
      "county": "Love County"
    },
    {
      "FIPS": 40051,
      "county": "Grady County"
    },
    {
      "FIPS": 40037,
      "county": "Creek County"
    },
    {
      "FIPS": 40001,
      "county": "Adair County"
    },
    {
      "FIPS": 40083,
      "county": "Logan County"
    },
    {
      "FIPS": 40119,
      "county": "Payne County"
    },
    {
      "FIPS": 40075,
      "county": "Kiowa County"
    },
    {
      "FIPS": 40015,
      "county": "Caddo County"
    },
    {
      "FIPS": 40143,
      "county": "Tulsa County"
    },
    {
      "FIPS": 40005,
      "county": "Atoka County"
    },
    {
      "FIPS": 40035,
      "county": "Craig County"
    },
    {
      "FIPS": 40043,
      "county": "Dewey County"
    },
    {
      "FIPS": 40055,
      "county": "Greer County"
    },
    {
      "FIPS": 40071,
      "county": "Kay County"
    },
    {
      "FIPS": 40103,
      "county": "Noble County"
    },
    {
      "FIPS": 40151,
      "county": "Woods County"
    },
    {
      "FIPS": 40045,
      "county": "Ellis County"
    },
    {
      "FIPS": 40029,
      "county": "Coal County"
    },
    {
      "FIPS": 40097,
      "county": "Mayes County"
    }
  ],
  "OR": [
    {
      "FIPS": 41049,
      "county": "Morrow County"
    },
    {
      "FIPS": 41059,
      "county": "Umatilla County"
    },
    {
      "FIPS": 41047,
      "county": "Marion County"
    },
    {
      "FIPS": 41045,
      "county": "Malheur County"
    },
    {
      "FIPS": 41035,
      "county": "Klamath County"
    },
    {
      "FIPS": 41033,
      "county": "Josephine County"
    },
    {
      "FIPS": 41031,
      "county": "Jefferson County"
    },
    {
      "FIPS": 41009,
      "county": "Columbia County"
    },
    {
      "FIPS": 41003,
      "county": "Benton County"
    },
    {
      "FIPS": 41071,
      "county": "Yamhill County"
    },
    {
      "FIPS": 41055,
      "county": "Sherman County"
    },
    {
      "FIPS": 41041,
      "county": "Lincoln County"
    },
    {
      "FIPS": 41027,
      "county": "Hood River County"
    },
    {
      "FIPS": 41019,
      "county": "Douglas County"
    },
    {
      "FIPS": 41057,
      "county": "Tillamook County"
    },
    {
      "FIPS": 41025,
      "county": "Harney County"
    },
    {
      "FIPS": 41069,
      "county": "Wheeler County"
    },
    {
      "FIPS": 41067,
      "county": "Washington County"
    },
    {
      "FIPS": 41051,
      "county": "Multnomah County"
    },
    {
      "FIPS": 41029,
      "county": "Jackson County"
    },
    {
      "FIPS": 41017,
      "county": "Deschutes County"
    },
    {
      "FIPS": 41005,
      "county": "Clackamas County"
    },
    {
      "FIPS": 41063,
      "county": "Wallowa County"
    },
    {
      "FIPS": 41021,
      "county": "Gilliam County"
    },
    {
      "FIPS": 41007,
      "county": "Clatsop County"
    },
    {
      "FIPS": 41061,
      "county": "Union County"
    },
    {
      "FIPS": 41043,
      "county": "Linn County"
    },
    {
      "FIPS": 41037,
      "county": "Lake County"
    },
    {
      "FIPS": 41023,
      "county": "Grant County"
    },
    {
      "FIPS": 41015,
      "county": "Curry County"
    },
    {
      "FIPS": 41011,
      "county": "Coos County"
    },
    {
      "FIPS": 41053,
      "county": "Polk County"
    },
    {
      "FIPS": 41065,
      "county": "Wasco County"
    },
    {
      "FIPS": 41013,
      "county": "Crook County"
    },
    {
      "FIPS": 41039,
      "county": "Lane County"
    },
    {
      "FIPS": 41001,
      "county": "Baker County"
    }
  ],
  "PA": [
    {
      "FIPS": 42015,
      "county": "Bradford County"
    },
    {
      "FIPS": 42107,
      "county": "Schuylkill County"
    },
    {
      "FIPS": 42123,
      "county": "Warren County"
    },
    {
      "FIPS": 42105,
      "county": "Potter County"
    },
    {
      "FIPS": 42005,
      "county": "Armstrong County"
    },
    {
      "FIPS": 42131,
      "county": "Wyoming County"
    },
    {
      "FIPS": 42115,
      "county": "Susquehanna County"
    },
    {
      "FIPS": 42097,
      "county": "Northumberland County"
    },
    {
      "FIPS": 42089,
      "county": "Monroe County"
    },
    {
      "FIPS": 42073,
      "county": "Lawrence County"
    },
    {
      "FIPS": 42057,
      "county": "Fulton County"
    },
    {
      "FIPS": 42055,
      "county": "Franklin County"
    },
    {
      "FIPS": 42037,
      "county": "Columbia County"
    },
    {
      "FIPS": 42033,
      "county": "Clearfield County"
    },
    {
      "FIPS": 42027,
      "county": "Centre County"
    },
    {
      "FIPS": 42025,
      "county": "Carbon County"
    },
    {
      "FIPS": 42019,
      "county": "Butler County"
    },
    {
      "FIPS": 42009,
      "county": "Bedford County"
    },
    {
      "FIPS": 42085,
      "county": "Mercer County"
    },
    {
      "FIPS": 42083,
      "county": "McKean County"
    },
    {
      "FIPS": 42053,
      "county": "Forest County"
    },
    {
      "FIPS": 42029,
      "county": "Chester County"
    },
    {
      "FIPS": 42087,
      "county": "Mifflin County"
    },
    {
      "FIPS": 42121,
      "county": "Venango County"
    },
    {
      "FIPS": 42059,
      "county": "Greene County"
    },
    {
      "FIPS": 42023,
      "county": "Cameron County"
    },
    {
      "FIPS": 42065,
      "county": "Jefferson County"
    },
    {
      "FIPS": 42067,
      "county": "Juniata County"
    },
    {
      "FIPS": 42061,
      "county": "Huntingdon County"
    },
    {
      "FIPS": 42035,
      "county": "Clinton County"
    },
    {
      "FIPS": 42071,
      "county": "Lancaster County"
    },
    {
      "FIPS": 42007,
      "county": "Beaver County"
    },
    {
      "FIPS": 42069,
      "county": "Lackawanna County"
    },
    {
      "FIPS": 42113,
      "county": "Sullivan County"
    },
    {
      "FIPS": 42077,
      "county": "Lehigh County"
    },
    {
      "FIPS": 42125,
      "county": "Washington County"
    },
    {
      "FIPS": 42091,
      "county": "Montgomery County"
    },
    {
      "FIPS": 42081,
      "county": "Lycoming County"
    },
    {
      "FIPS": 42079,
      "county": "Luzerne County"
    },
    {
      "FIPS": 42021,
      "county": "Cambria County"
    },
    {
      "FIPS": 42045,
      "county": "Delaware County"
    },
    {
      "FIPS": 42043,
      "county": "Dauphin County"
    },
    {
      "FIPS": 42075,
      "county": "Lebanon County"
    },
    {
      "FIPS": 42111,
      "county": "Somerset County"
    },
    {
      "FIPS": 42109,
      "county": "Snyder County"
    },
    {
      "FIPS": 42093,
      "county": "Montour County"
    },
    {
      "FIPS": 42041,
      "county": "Cumberland County"
    },
    {
      "FIPS": 42101,
      "county": "Philadelphia County"
    },
    {
      "FIPS": 42003,
      "county": "Allegheny County"
    },
    {
      "FIPS": 42039,
      "county": "Crawford County"
    },
    {
      "FIPS": 42129,
      "county": "Westmoreland County"
    },
    {
      "FIPS": 42095,
      "county": "Northampton County"
    },
    {
      "FIPS": 42063,
      "county": "Indiana County"
    },
    {
      "FIPS": 42031,
      "county": "Clarion County"
    },
    {
      "FIPS": 42051,
      "county": "Fayette County"
    },
    {
      "FIPS": 42117,
      "county": "Tioga County"
    },
    {
      "FIPS": 42119,
      "county": "Union County"
    },
    {
      "FIPS": 42103,
      "county": "Pike County"
    },
    {
      "FIPS": 42099,
      "county": "Perry County"
    },
    {
      "FIPS": 42001,
      "county": "Adams County"
    },
    {
      "FIPS": 42049,
      "county": "Erie County"
    },
    {
      "FIPS": 42017,
      "county": "Bucks County"
    },
    {
      "FIPS": 42011,
      "county": "Berks County"
    },
    {
      "FIPS": 42133,
      "county": "York County"
    },
    {
      "FIPS": 42047,
      "county": "Elk County"
    },
    {
      "FIPS": 42127,
      "county": "Wayne County"
    },
    {
      "FIPS": 42013,
      "county": "Blair County"
    },
    {
      "FIPS": 42015,
      "county": "Bradford County"
    }
  ],
  "PR": [
    {
      "FIPS": 72081,
      "county": ""
    },
    {
      "FIPS": 72055,
      "county": ""
    },
    {
      "FIPS": 72023,
      "county": ""
    },
    {
      "FIPS": 72113,
      "county": ""
    },
    {
      "FIPS": NaN,
      "county": ""
    },
    {
      "FIPS": 72081,
      "county": ""
    },
    {
      "FIPS": 72033,
      "county": "Catano"
    },
    {
      "FIPS": 72119,
      "county": "R\ufffdo Grande Municipio"
    },
    {
      "FIPS": 72131,
      "county": "San Sebasti\ufffdn Municipio"
    },
    {
      "FIPS": 72125,
      "county": "San Germ\ufffdn Municipio"
    },
    {
      "FIPS": 72075,
      "county": "Juana D\ufffdaz Municipio"
    },
    {
      "FIPS": 72019,
      "county": "Barranquitas Municipio"
    },
    {
      "FIPS": 72067,
      "county": "Hormigueros Municipio"
    },
    {
      "FIPS": 72085,
      "county": "Las Piedras Municipio"
    },
    {
      "FIPS": 72115,
      "county": "Quebradillas Municipio"
    },
    {
      "FIPS": 72055,
      "county": ""
    },
    {
      "FIPS": 72023,
      "county": ""
    },
    {
      "FIPS": 72007,
      "county": "Aguas Buenas Municipio"
    },
    {
      "FIPS": 72113,
      "county": ""
    },
    {
      "FIPS": 72121,
      "county": "Sabana Grande Municipio"
    },
    {
      "FIPS": NaN,
      "county": ""
    },
    {
      "FIPS": 72129,
      "county": "San Lorenzo Municipio"
    },
    {
      "FIPS": 72083,
      "county": "Las Mar\ufffdas Municipio"
    },
    {
      "FIPS": 72095,
      "county": "Maunabo Municipio"
    },
    {
      "FIPS": 72089,
      "county": "Luquillo Municipio"
    },
    {
      "FIPS": 72127,
      "county": "San Juan"
    },
    {
      "FIPS": 72053,
      "county": "Fajardo Municipio"
    },
    {
      "FIPS": 72025,
      "county": "Caguas Municipio"
    },
    {
      "FIPS": 72097,
      "county": "Mayag\ufffdez Municipio"
    },
    {
      "FIPS": 72091,
      "county": "Manat\ufffd Municipio"
    },
    {
      "FIPS": 72137,
      "county": "Toa Baja"
    },
    {
      "FIPS": 72151,
      "county": "Yabucoa Municipio"
    },
    {
      "FIPS": 72031,
      "county": "Carolina"
    },
    {
      "FIPS": 72087,
      "county": "Lo\ufffdza Municipio"
    },
    {
      "FIPS": 72153,
      "county": "Yauco Municipio"
    },
    {
      "FIPS": 72139,
      "county": "Trujillo Alto"
    },
    {
      "FIPS": 72107,
      "county": "Orocovis Municipio"
    },
    {
      "FIPS": 72093,
      "county": "Maricao"
    },
    {
      "FIPS": 72051,
      "county": "Dorado Municipio"
    },
    {
      "FIPS": 72147,
      "county": "Vieques Municipio"
    },
    {
      "FIPS": 72015,
      "county": "Arroyo Municipio"
    },
    {
      "FIPS": 72029,
      "county": "Canovanas"
    },
    {
      "FIPS": 72079,
      "county": "Lajas Municipio"
    },
    {
      "FIPS": 72021,
      "county": "Bayamon"
    },
    {
      "FIPS": 72054,
      "county": "Florida Municipio"
    },
    {
      "FIPS": 72117,
      "county": "Rinc\ufffdn Municipio"
    },
    {
      "FIPS": 72141,
      "county": "Utuado Municipio"
    },
    {
      "FIPS": 72071,
      "county": "Isabela Municipio"
    },
    {
      "FIPS": 72077,
      "county": "Juncos Municipio"
    },
    {
      "FIPS": 72109,
      "county": "Patillas"
    },
    {
      "FIPS": 72105,
      "county": "Naranjito Municipio"
    },
    {
      "FIPS": 72027,
      "county": "Camuy Municipio"
    },
    {
      "FIPS": 72013,
      "county": "Arecibo"
    },
    {
      "FIPS": 72145,
      "county": "Vega Baja Municipio"
    },
    {
      "FIPS": 72135,
      "county": "Toa Alta"
    },
    {
      "FIPS": 72101,
      "county": "Morovis Municipio"
    },
    {
      "FIPS": 72045,
      "county": "Comer\ufffdo Municipio"
    },
    {
      "FIPS": 72041,
      "county": "Cidra Municipio"
    },
    {
      "FIPS": 72035,
      "county": "Cayey Municipio"
    },
    {
      "FIPS": 72069,
      "county": "Humacao Municipio"
    },
    {
      "FIPS": 72049,
      "county": "Culebra Municipio"
    },
    {
      "FIPS": 72061,
      "county": "Guaynabo"
    },
    {
      "FIPS": 72149,
      "county": "Villalba Municipio"
    },
    {
      "FIPS": 72143,
      "county": "Vega Alta Municipio"
    },
    {
      "FIPS": 72099,
      "county": "Moca Municipio"
    },
    {
      "FIPS": 72073,
      "county": "Jayuya Municipio"
    },
    {
      "FIPS": 72039,
      "county": "Ciales Municipio"
    },
    {
      "FIPS": 72037,
      "county": "Ceiba Municipio"
    },
    {
      "FIPS": 72111,
      "county": "Pe\ufffduelas Municipio"
    },
    {
      "FIPS": 72011,
      "county": "A\ufffdasco Municipio"
    },
    {
      "FIPS": 72133,
      "county": "Santa Isabel"
    },
    {
      "FIPS": 72123,
      "county": "Salinas Municipio"
    },
    {
      "FIPS": 72017,
      "county": "Barceloneta"
    },
    {
      "FIPS": 72009,
      "county": "Aibonito"
    },
    {
      "FIPS": 72001,
      "county": "Adjuntas"
    },
    {
      "FIPS": 72063,
      "county": "Gurabo Municipio"
    },
    {
      "FIPS": 72005,
      "county": "Aguadilla"
    },
    {
      "FIPS": 72065,
      "county": "Hatillo Municipio"
    },
    {
      "FIPS": 72043,
      "county": "Coamo Municipio"
    },
    {
      "FIPS": 72103,
      "county": "Naguabo Municipio"
    },
    {
      "FIPS": 72047,
      "county": "Corozal Municipio"
    },
    {
      "FIPS": 72003,
      "county": "Aguada Municipio"
    },
    {
      "FIPS": 72057,
      "county": "Guayama Municipio"
    },
    {
      "FIPS": 72033,
      "county": "Catano"
    }
  ],
  "RI": [
    {
      "FIPS": 44005,
      "county": "Newport County"
    },
    {
      "FIPS": 44001,
      "county": "Bristol County"
    },
    {
      "FIPS": 44009,
      "county": "Washington County"
    },
    {
      "FIPS": 44007,
      "county": "Providence County"
    },
    {
      "FIPS": 44003,
      "county": "Kent County"
    }
  ],
  "SC": [
    {
      "FIPS": 45045,
      "county": "Greenville County"
    },
    {
      "FIPS": 45077,
      "county": "Pickens County"
    },
    {
      "FIPS": 45071,
      "county": "Newberry County"
    },
    {
      "FIPS": 45053,
      "county": "Jasper County"
    },
    {
      "FIPS": 45033,
      "county": "Dillon County"
    },
    {
      "FIPS": 45031,
      "county": "Darlington County"
    },
    {
      "FIPS": 45029,
      "county": "Colleton County"
    },
    {
      "FIPS": 45017,
      "county": "Calhoun County"
    },
    {
      "FIPS": 45013,
      "county": "Beaufort County"
    },
    {
      "FIPS": 45001,
      "county": "Abbeville County"
    },
    {
      "FIPS": 45043,
      "county": "Georgetown County"
    },
    {
      "FIPS": 45041,
      "county": "Florence County"
    },
    {
      "FIPS": 45089,
      "county": "Williamsburg County"
    },
    {
      "FIPS": 45055,
      "county": "Kershaw County"
    },
    {
      "FIPS": 45069,
      "county": "Marlboro County"
    },
    {
      "FIPS": 45027,
      "county": "Clarendon County"
    },
    {
      "FIPS": 45005,
      "county": "Allendale County"
    },
    {
      "FIPS": 45019,
      "county": "Charleston County"
    },
    {
      "FIPS": 45015,
      "county": "Berkeley County"
    },
    {
      "FIPS": 45039,
      "county": "Fairfield County"
    },
    {
      "FIPS": 45083,
      "county": "Spartanburg County"
    },
    {
      "FIPS": 45025,
      "county": "Chesterfield County"
    },
    {
      "FIPS": 45009,
      "county": "Bamberg County"
    },
    {
      "FIPS": 45067,
      "county": "Marion County"
    },
    {
      "FIPS": 45023,
      "county": "Chester County"
    },
    {
      "FIPS": 45081,
      "county": "Saluda County"
    },
    {
      "FIPS": 45037,
      "county": "Edgefield County"
    },
    {
      "FIPS": 45063,
      "county": "Lexington County"
    },
    {
      "FIPS": 45059,
      "county": "Laurens County"
    },
    {
      "FIPS": 45057,
      "county": "Lancaster County"
    },
    {
      "FIPS": 45049,
      "county": "Hampton County"
    },
    {
      "FIPS": 45021,
      "county": "Cherokee County"
    },
    {
      "FIPS": 45007,
      "county": "Anderson County"
    },
    {
      "FIPS": 45065,
      "county": "McCormick County"
    },
    {
      "FIPS": 45085,
      "county": "Sumter County"
    },
    {
      "FIPS": 45047,
      "county": "Greenwood County"
    },
    {
      "FIPS": 45035,
      "county": "Dorchester County"
    },
    {
      "FIPS": 45079,
      "county": "Richland County"
    },
    {
      "FIPS": 45073,
      "county": "Oconee County"
    },
    {
      "FIPS": 45011,
      "county": "Barnwell County"
    },
    {
      "FIPS": 45075,
      "county": "Orangeburg County"
    },
    {
      "FIPS": 45061,
      "county": "Lee County"
    },
    {
      "FIPS": 45003,
      "county": "Aiken County"
    },
    {
      "FIPS": 45051,
      "county": "Horry County"
    },
    {
      "FIPS": 45087,
      "county": "Union County"
    },
    {
      "FIPS": 45091,
      "county": "York County"
    },
    {
      "FIPS": 45045,
      "county": "Greenville County"
    }
  ],
  "SD": [
    {
      "FIPS": 46095,
      "county": "Mellette County"
    },
    {
      "FIPS": 46129,
      "county": "Walworth County"
    },
    {
      "FIPS": 46125,
      "county": "Turner County"
    },
    {
      "FIPS": 46105,
      "county": "Perkins County"
    },
    {
      "FIPS": 46087,
      "county": "McCook County"
    },
    {
      "FIPS": 46081,
      "county": "Lawrence County"
    },
    {
      "FIPS": 46065,
      "county": "Hughes County"
    },
    {
      "FIPS": 46055,
      "county": "Haakon County"
    },
    {
      "FIPS": 46047,
      "county": "Fall River County"
    },
    {
      "FIPS": 46035,
      "county": "Davison County"
    },
    {
      "FIPS": 46033,
      "county": "Custer County"
    },
    {
      "FIPS": 46023,
      "county": "Charles Mix County"
    },
    {
      "FIPS": 46005,
      "county": "Beadle County"
    },
    {
      "FIPS": 46011,
      "county": "Brookings County"
    },
    {
      "FIPS": 46091,
      "county": "Marshall County"
    },
    {
      "FIPS": 46099,
      "county": "Minnehaha County"
    },
    {
      "FIPS": 46103,
      "county": "Pennington County"
    },
    {
      "FIPS": 46083,
      "county": "Lincoln County"
    },
    {
      "FIPS": 46109,
      "county": "Roberts County"
    },
    {
      "FIPS": 46113,
      "county": "Shannon County"
    },
    {
      "FIPS": 46137,
      "county": "Ziebach County"
    },
    {
      "FIPS": 46007,
      "county": "Bennett County"
    },
    {
      "FIPS": 46117,
      "county": "Stanley County"
    },
    {
      "FIPS": 46057,
      "county": "Hamlin County"
    },
    {
      "FIPS": 46077,
      "county": "Kingsbury County"
    },
    {
      "FIPS": 46043,
      "county": "Douglas County"
    },
    {
      "FIPS": 46107,
      "county": "Potter County"
    },
    {
      "FIPS": 46053,
      "county": "Gregory County"
    },
    {
      "FIPS": 46071,
      "county": "Jackson County"
    },
    {
      "FIPS": 46063,
      "county": "Harding County"
    },
    {
      "FIPS": 46029,
      "county": "Codington County"
    },
    {
      "FIPS": 46021,
      "county": "Campbell County"
    },
    {
      "FIPS": 46067,
      "county": "Hutchinson County"
    },
    {
      "FIPS": 46135,
      "county": "Yankton County"
    },
    {
      "FIPS": 46031,
      "county": "Corson County"
    },
    {
      "FIPS": 46061,
      "county": "Hanson County"
    },
    {
      "FIPS": 46003,
      "county": "Aurora County"
    },
    {
      "FIPS": 46045,
      "county": "Edmunds County"
    },
    {
      "FIPS": 46111,
      "county": "Sanborn County"
    },
    {
      "FIPS": 46009,
      "county": "Bon Homme County"
    },
    {
      "FIPS": 46089,
      "county": "McPherson County"
    },
    {
      "FIPS": 46073,
      "county": "Jerauld County"
    },
    {
      "FIPS": 46017,
      "county": "Buffalo County"
    },
    {
      "FIPS": 46079,
      "county": "Lake County"
    },
    {
      "FIPS": 46051,
      "county": "Grant County"
    },
    {
      "FIPS": 46027,
      "county": "Clay County"
    },
    {
      "FIPS": 46093,
      "county": "Meade County"
    },
    {
      "FIPS": 46037,
      "county": "Day County"
    },
    {
      "FIPS": 46039,
      "county": "Deuel County"
    },
    {
      "FIPS": 46115,
      "county": "Spink County"
    },
    {
      "FIPS": 46069,
      "county": "Hyde County"
    },
    {
      "FIPS": 46015,
      "county": "Brule County"
    },
    {
      "FIPS": 46085,
      "county": "Lyman County"
    },
    {
      "FIPS": 46127,
      "county": "Union County"
    },
    {
      "FIPS": 46049,
      "county": "Faulk County"
    },
    {
      "FIPS": 46121,
      "county": "Todd County"
    },
    {
      "FIPS": 46059,
      "county": "Hand County"
    },
    {
      "FIPS": 46041,
      "county": "Dewey County"
    },
    {
      "FIPS": 46101,
      "county": "Moody County"
    },
    {
      "FIPS": 46019,
      "county": "Butte County"
    },
    {
      "FIPS": 46025,
      "county": "Clark County"
    },
    {
      "FIPS": 46097,
      "county": "Miner County"
    },
    {
      "FIPS": 46123,
      "county": "Tripp County"
    },
    {
      "FIPS": 46013,
      "county": "Brown County"
    },
    {
      "FIPS": 46119,
      "county": "Sully County"
    },
    {
      "FIPS": 46075,
      "county": "Jones County"
    }
  ],
  "TN": [
    {
      "FIPS": 47123,
      "county": "Monroe County"
    },
    {
      "FIPS": 47003,
      "county": "Bedford County"
    },
    {
      "FIPS": 47107,
      "county": "McMinn County"
    },
    {
      "FIPS": 47175,
      "county": "Van Buren County"
    },
    {
      "FIPS": 47171,
      "county": "Unicoi County"
    },
    {
      "FIPS": 47169,
      "county": "Trousdale County"
    },
    {
      "FIPS": 47167,
      "county": "Tipton County"
    },
    {
      "FIPS": 47117,
      "county": "Marshall County"
    },
    {
      "FIPS": 47161,
      "county": "Stewart County"
    },
    {
      "FIPS": 47155,
      "county": "Sevier County"
    },
    {
      "FIPS": 47085,
      "county": "Humphreys County"
    },
    {
      "FIPS": 47153,
      "county": "Sequatchie County"
    },
    {
      "FIPS": 47141,
      "county": "Putnam County"
    },
    {
      "FIPS": 47137,
      "county": "Pickett County"
    },
    {
      "FIPS": 47115,
      "county": "Marion County"
    },
    {
      "FIPS": 47099,
      "county": "Lawrence County"
    },
    {
      "FIPS": 47097,
      "county": "Lauderdale County"
    },
    {
      "FIPS": 47091,
      "county": "Johnson County"
    },
    {
      "FIPS": 47087,
      "county": "Jackson County"
    },
    {
      "FIPS": 47083,
      "county": "Houston County"
    },
    {
      "FIPS": 47071,
      "county": "Hardin County"
    },
    {
      "FIPS": 47059,
      "county": "Greene County"
    },
    {
      "FIPS": 47049,
      "county": "Fentress County"
    },
    {
      "FIPS": 47047,
      "county": "Fayette County"
    },
    {
      "FIPS": 47043,
      "county": "Dickson County"
    },
    {
      "FIPS": 47039,
      "county": "Decatur County"
    },
    {
      "FIPS": 47033,
      "county": "Crockett County"
    },
    {
      "FIPS": 47023,
      "county": "Chester County"
    },
    {
      "FIPS": 47021,
      "county": "Cheatham County"
    },
    {
      "FIPS": 47019,
      "county": "Carter County"
    },
    {
      "FIPS": 47015,
      "county": "Cannon County"
    },
    {
      "FIPS": 47011,
      "county": "Bradley County"
    },
    {
      "FIPS": 47009,
      "county": "Blount County"
    },
    {
      "FIPS": 47005,
      "county": "Benton County"
    },
    {
      "FIPS": 47075,
      "county": "Haywood County"
    },
    {
      "FIPS": 47067,
      "county": "Hancock County"
    },
    {
      "FIPS": 47063,
      "county": "Hamblen County"
    },
    {
      "FIPS": 47129,
      "county": "Morgan County"
    },
    {
      "FIPS": 47187,
      "county": "Williamson County"
    },
    {
      "FIPS": 47113,
      "county": "Madison County"
    },
    {
      "FIPS": 47057,
      "county": "Grainger County"
    },
    {
      "FIPS": 47051,
      "county": "Franklin County"
    },
    {
      "FIPS": 47149,
      "county": "Rutherford County"
    },
    {
      "FIPS": 47073,
      "county": "Hawkins County"
    },
    {
      "FIPS": 47065,
      "county": "Hamilton County"
    },
    {
      "FIPS": 47147,
      "county": "Robertson County"
    },
    {
      "FIPS": 47041,
      "county": "De Kalb County"
    },
    {
      "FIPS": 47177,
      "county": "Warren County"
    },
    {
      "FIPS": 47001,
      "county": "Anderson County"
    },
    {
      "FIPS": 47089,
      "county": "Jefferson County"
    },
    {
      "FIPS": 47189,
      "county": "Wilson County"
    },
    {
      "FIPS": 47125,
      "county": "Montgomery County"
    },
    {
      "FIPS": 47077,
      "county": "Henderson County"
    },
    {
      "FIPS": 47035,
      "county": "Cumberland County"
    },
    {
      "FIPS": 47037,
      "county": "Davidson County"
    },
    {
      "FIPS": 47017,
      "county": "Carroll County"
    },
    {
      "FIPS": 47103,
      "county": "Lincoln County"
    },
    {
      "FIPS": 47165,
      "county": "Sumner County"
    },
    {
      "FIPS": 47053,
      "county": "Gibson County"
    },
    {
      "FIPS": 47109,
      "county": "McNairy County"
    },
    {
      "FIPS": 47163,
      "county": "Sullivan County"
    },
    {
      "FIPS": 47157,
      "county": "Shelby County"
    },
    {
      "FIPS": 47105,
      "county": "Loudon County"
    },
    {
      "FIPS": 47013,
      "county": "Campbell County"
    },
    {
      "FIPS": 47025,
      "county": "Claiborne County"
    },
    {
      "FIPS": 47031,
      "county": "Coffee County"
    },
    {
      "FIPS": 47179,
      "county": "Washington County"
    },
    {
      "FIPS": 47133,
      "county": "Overton County"
    },
    {
      "FIPS": 47183,
      "county": "Weakley County"
    },
    {
      "FIPS": 47081,
      "county": "Hickman County"
    },
    {
      "FIPS": 47007,
      "county": "Bledsoe County"
    },
    {
      "FIPS": 47061,
      "county": "Grundy County"
    },
    {
      "FIPS": 47069,
      "county": "Hardeman County"
    },
    {
      "FIPS": 47045,
      "county": "Dyer County"
    },
    {
      "FIPS": 47151,
      "county": "Scott County"
    },
    {
      "FIPS": 47131,
      "county": "Obion County"
    },
    {
      "FIPS": 47121,
      "county": "Meigs County"
    },
    {
      "FIPS": 47111,
      "county": "Macon County"
    },
    {
      "FIPS": 47101,
      "county": "Lewis County"
    },
    {
      "FIPS": 47055,
      "county": "Giles County"
    },
    {
      "FIPS": 47029,
      "county": "Cocke County"
    },
    {
      "FIPS": 47181,
      "county": "Wayne County"
    },
    {
      "FIPS": 47173,
      "county": "Union County"
    },
    {
      "FIPS": 47027,
      "county": "Clay County"
    },
    {
      "FIPS": 47185,
      "county": "White County"
    },
    {
      "FIPS": 47143,
      "county": "Rhea County"
    },
    {
      "FIPS": 47139,
      "county": "Polk County"
    },
    {
      "FIPS": 47119,
      "county": "Maury County"
    },
    {
      "FIPS": 47079,
      "county": "Henry County"
    },
    {
      "FIPS": 47093,
      "county": "Knox County"
    },
    {
      "FIPS": 47159,
      "county": "Smith County"
    },
    {
      "FIPS": 47135,
      "county": "Perry County"
    },
    {
      "FIPS": 47145,
      "county": "Roane County"
    },
    {
      "FIPS": 47127,
      "county": "Moore County"
    },
    {
      "FIPS": 47095,
      "county": "Lake County"
    }
  ],
  "TX": [
    {
      "FIPS": 48357,
      "county": "Ochiltree County"
    },
    {
      "FIPS": 48455,
      "county": "Trinity County"
    },
    {
      "FIPS": 48495,
      "county": "Winkler County"
    },
    {
      "FIPS": 48487,
      "county": "Wilbarger County"
    },
    {
      "FIPS": 48467,
      "county": "Van Zandt County"
    },
    {
      "FIPS": 48463,
      "county": "Uvalde County"
    },
    {
      "FIPS": 48245,
      "county": "Jefferson County"
    },
    {
      "FIPS": 48491,
      "county": "Williamson County"
    },
    {
      "FIPS": 48387,
      "county": "Red River County"
    },
    {
      "FIPS": 48451,
      "county": "Tom Green County"
    },
    {
      "FIPS": 48441,
      "county": "Taylor County"
    },
    {
      "FIPS": 48425,
      "county": "Somervell County"
    },
    {
      "FIPS": 48415,
      "county": "Scurry County"
    },
    {
      "FIPS": 48411,
      "county": "San Saba County"
    },
    {
      "FIPS": 48407,
      "county": "San Jacinto County"
    },
    {
      "FIPS": 48405,
      "county": "San Augustine County"
    },
    {
      "FIPS": 48399,
      "county": "Runnels County"
    },
    {
      "FIPS": 48391,
      "county": "Refugio County"
    },
    {
      "FIPS": 48389,
      "county": "Reeves County"
    },
    {
      "FIPS": 48381,
      "county": "Randall County"
    },
    {
      "FIPS": 48377,
      "county": "Presidio County"
    },
    {
      "FIPS": 48363,
      "county": "Palo Pinto County"
    },
    {
      "FIPS": 48127,
      "county": "Dimmit County"
    },
    {
      "FIPS": 48349,
      "county": "Navarro County"
    },
    {
      "FIPS": 48347,
      "county": "Nacogdoches County"
    },
    {
      "FIPS": 48337,
      "county": "Montague County"
    },
    {
      "FIPS": 48335,
      "county": "Mitchell County"
    },
    {
      "FIPS": 48315,
      "county": "Marion County"
    },
    {
      "FIPS": 48325,
      "county": "Medina County"
    },
    {
      "FIPS": 48323,
      "county": "Maverick County"
    },
    {
      "FIPS": 48321,
      "county": "Matagorda County"
    },
    {
      "FIPS": 48317,
      "county": "Martin County"
    },
    {
      "FIPS": 48293,
      "county": "Limestone County"
    },
    {
      "FIPS": 48291,
      "county": "Liberty County"
    },
    {
      "FIPS": 48505,
      "county": "Zapata County"
    },
    {
      "FIPS": 48285,
      "county": "Lavaca County"
    },
    {
      "FIPS": 48257,
      "county": "Kaufman County"
    },
    {
      "FIPS": 48255,
      "county": "Karnes County"
    },
    {
      "FIPS": 48241,
      "county": "Jasper County"
    },
    {
      "FIPS": 48233,
      "county": "Hutchinson County"
    },
    {
      "FIPS": 48227,
      "county": "Howard County"
    },
    {
      "FIPS": 48219,
      "county": "Hockley County"
    },
    {
      "FIPS": 48195,
      "county": "Hansford County"
    },
    {
      "FIPS": 48193,
      "county": "Hamilton County"
    },
    {
      "FIPS": 48181,
      "county": "Grayson County"
    },
    {
      "FIPS": 48151,
      "county": "Fisher County"
    },
    {
      "FIPS": 48149,
      "county": "Fayette County"
    },
    {
      "FIPS": 48133,
      "county": "Eastland County"
    },
    {
      "FIPS": 48105,
      "county": "Crockett County"
    },
    {
      "FIPS": 48073,
      "county": "Cherokee County"
    },
    {
      "FIPS": 48071,
      "county": "Chambers County"
    },
    {
      "FIPS": 48069,
      "county": "Castro County"
    },
    {
      "FIPS": 48065,
      "county": "Carson County"
    },
    {
      "FIPS": 48061,
      "county": "Cameron County"
    },
    {
      "FIPS": 48051,
      "county": "Burleson County"
    },
    {
      "FIPS": 48483,
      "county": "Wheeler County"
    },
    {
      "FIPS": 48047,
      "county": "Brooks County"
    },
    {
      "FIPS": 48019,
      "county": "Bandera County"
    },
    {
      "FIPS": 48017,
      "county": "Bailey County"
    },
    {
      "FIPS": 48013,
      "county": "Atascosa County"
    },
    {
      "FIPS": 48003,
      "county": "Andrews County"
    },
    {
      "FIPS": 48001,
      "county": "Anderson County"
    },
    {
      "FIPS": 48121,
      "county": "Denton County"
    },
    {
      "FIPS": 48489,
      "county": "Willacy County"
    },
    {
      "FIPS": 48157,
      "county": "Fort Bend County"
    },
    {
      "FIPS": 48199,
      "county": "Hardin County"
    },
    {
      "FIPS": 48267,
      "county": "Kimble County"
    },
    {
      "FIPS": 48361,
      "county": "Orange County"
    },
    {
      "FIPS": 48059,
      "county": "Callahan County"
    },
    {
      "FIPS": 48203,
      "county": "Harrison County"
    },
    {
      "FIPS": 48083,
      "county": "Coleman County"
    },
    {
      "FIPS": 48229,
      "county": "Hudspeth County"
    },
    {
      "FIPS": 48225,
      "county": "Houston County"
    },
    {
      "FIPS": 48115,
      "county": "Dawson County"
    },
    {
      "FIPS": 48011,
      "county": "Armstrong County"
    },
    {
      "FIPS": 48099,
      "county": "Coryell County"
    },
    {
      "FIPS": 48035,
      "county": "Bosque County"
    },
    {
      "FIPS": 48009,
      "county": "Archer County"
    },
    {
      "FIPS": 48197,
      "county": "Hardeman County"
    },
    {
      "FIPS": 48477,
      "county": "Washington County"
    },
    {
      "FIPS": 48075,
      "county": "Childress County"
    },
    {
      "FIPS": 48309,
      "county": "McLennan County"
    },
    {
      "FIPS": 48055,
      "county": "Caldwell County"
    },
    {
      "FIPS": 48433,
      "county": "Stonewall County"
    },
    {
      "FIPS": 48297,
      "county": "Live Oak County"
    },
    {
      "FIPS": 48437,
      "county": "Swisher County"
    },
    {
      "FIPS": 48367,
      "county": "Parker County"
    },
    {
      "FIPS": 48223,
      "county": "Hopkins County"
    },
    {
      "FIPS": 48125,
      "county": "Dickens County"
    },
    {
      "FIPS": 48249,
      "county": "Jim Wells County"
    },
    {
      "FIPS": 48053,
      "county": "Burnet County"
    },
    {
      "FIPS": 48429,
      "county": "Stephens County"
    },
    {
      "FIPS": 48397,
      "county": "Rockwall County"
    },
    {
      "FIPS": 48375,
      "county": "Potter County"
    },
    {
      "FIPS": 48417,
      "county": "Shackelford County"
    },
    {
      "FIPS": 48329,
      "county": "Midland County"
    },
    {
      "FIPS": 48085,
      "county": "Collin County"
    },
    {
      "FIPS": 48459,
      "county": "Upshur County"
    },
    {
      "FIPS": 48493,
      "county": "Wilson County"
    },
    {
      "FIPS": 48251,
      "county": "Johnson County"
    },
    {
      "FIPS": 48465,
      "county": "Val Verde County"
    },
    {
      "FIPS": 48369,
      "county": "Parmer County"
    },
    {
      "FIPS": 48343,
      "county": "Morris County"
    },
    {
      "FIPS": 48419,
      "county": "Shelby County"
    },
    {
      "FIPS": 48129,
      "county": "Donley County"
    },
    {
      "FIPS": 48281,
      "county": "Lampasas County"
    },
    {
      "FIPS": 48117,
      "county": "Deaf Smith County"
    },
    {
      "FIPS": 48165,
      "county": "Gaines County"
    },
    {
      "FIPS": 48421,
      "county": "Sherman County"
    },
    {
      "FIPS": 48005,
      "county": "Angelina County"
    },
    {
      "FIPS": 48213,
      "county": "Henderson County"
    },
    {
      "FIPS": 48177,
      "county": "Gonzales County"
    },
    {
      "FIPS": 48295,
      "county": "Lipscomb County"
    },
    {
      "FIPS": 48409,
      "county": "San Patricio County"
    },
    {
      "FIPS": 48141,
      "county": "El Paso County"
    },
    {
      "FIPS": 48453,
      "county": "Travis County"
    },
    {
      "FIPS": 48439,
      "county": "Tarrant County"
    },
    {
      "FIPS": 48355,
      "county": "Nueces County"
    },
    {
      "FIPS": 48339,
      "county": "Montgomery County"
    },
    {
      "FIPS": 48215,
      "county": "Hidalgo County"
    },
    {
      "FIPS": 48185,
      "county": "Grimes County"
    },
    {
      "FIPS": 48201,
      "county": "Harris County"
    },
    {
      "FIPS": 48113,
      "county": "Dallas County"
    },
    {
      "FIPS": 48435,
      "county": "Sutton County"
    },
    {
      "FIPS": 48039,
      "county": "Brazoria County"
    },
    {
      "FIPS": 48007,
      "county": "Aransas County"
    },
    {
      "FIPS": 48109,
      "county": "Culberson County"
    },
    {
      "FIPS": 48247,
      "county": "Jim Hogg County"
    },
    {
      "FIPS": 48123,
      "county": "De Witt County"
    },
    {
      "FIPS": 48207,
      "county": "Haskell County"
    },
    {
      "FIPS": 48471,
      "county": "Walker County"
    },
    {
      "FIPS": 48303,
      "county": "Lubbock County"
    },
    {
      "FIPS": 48365,
      "county": "Panola County"
    },
    {
      "FIPS": 48093,
      "county": "Comanche County"
    },
    {
      "FIPS": 48187,
      "county": "Guadalupe County"
    },
    {
      "FIPS": 48383,
      "county": "Reagan County"
    },
    {
      "FIPS": 48089,
      "county": "Colorado County"
    },
    {
      "FIPS": 48015,
      "county": "Austin County"
    },
    {
      "FIPS": 48261,
      "county": "Kenedy County"
    },
    {
      "FIPS": 48161,
      "county": "Freestone County"
    },
    {
      "FIPS": 48045,
      "county": "Briscoe County"
    },
    {
      "FIPS": 48481,
      "county": "Wharton County"
    },
    {
      "FIPS": 48211,
      "county": "Hemphill County"
    },
    {
      "FIPS": 48175,
      "county": "Goliad County"
    },
    {
      "FIPS": 48345,
      "county": "Motley County"
    },
    {
      "FIPS": 48431,
      "county": "Sterling County"
    },
    {
      "FIPS": 48031,
      "county": "Blanco County"
    },
    {
      "FIPS": 48327,
      "county": "Menard County"
    },
    {
      "FIPS": 48101,
      "county": "Cottle County"
    },
    {
      "FIPS": 48507,
      "county": "Zavala County"
    },
    {
      "FIPS": 48403,
      "county": "Sabine County"
    },
    {
      "FIPS": 48273,
      "county": "Kleberg County"
    },
    {
      "FIPS": 48043,
      "county": "Brewster County"
    },
    {
      "FIPS": 48501,
      "county": "Yoakum County"
    },
    {
      "FIPS": 48443,
      "county": "Terrell County"
    },
    {
      "FIPS": 48413,
      "county": "Schleicher County"
    },
    {
      "FIPS": 48393,
      "county": "Roberts County"
    },
    {
      "FIPS": 48359,
      "county": "Oldham County"
    },
    {
      "FIPS": 48351,
      "county": "Newton County"
    },
    {
      "FIPS": 48313,
      "county": "Madison County"
    },
    {
      "FIPS": 48301,
      "county": "Loving County"
    },
    {
      "FIPS": 48137,
      "county": "Edwards County"
    },
    {
      "FIPS": 48271,
      "county": "Kinney County"
    },
    {
      "FIPS": 48205,
      "county": "Hartley County"
    },
    {
      "FIPS": 48173,
      "county": "Glasscock County"
    },
    {
      "FIPS": 48171,
      "county": "Gillespie County"
    },
    {
      "FIPS": 48079,
      "county": "Cochran County"
    },
    {
      "FIPS": 48473,
      "county": "Waller County"
    },
    {
      "FIPS": 48283,
      "county": "La Salle County"
    },
    {
      "FIPS": 48447,
      "county": "Throckmorton County"
    },
    {
      "FIPS": 48469,
      "county": "Victoria County"
    },
    {
      "FIPS": 48147,
      "county": "Fannin County"
    },
    {
      "FIPS": 48095,
      "county": "Concho County"
    },
    {
      "FIPS": 48087,
      "county": "Collingsworth County"
    },
    {
      "FIPS": 48041,
      "county": "Brazos County"
    },
    {
      "FIPS": 48395,
      "county": "Robertson County"
    },
    {
      "FIPS": 48259,
      "county": "Kendall County"
    },
    {
      "FIPS": 48239,
      "county": "Jackson County"
    },
    {
      "FIPS": 48485,
      "county": "Wichita County"
    },
    {
      "FIPS": 48159,
      "county": "Franklin County"
    },
    {
      "FIPS": 48167,
      "county": "Galveston County"
    },
    {
      "FIPS": 48243,
      "county": "Jeff Davis County"
    },
    {
      "FIPS": 48307,
      "county": "McCulloch County"
    },
    {
      "FIPS": 48311,
      "county": "McMullen County"
    },
    {
      "FIPS": 48023,
      "county": "Baylor County"
    },
    {
      "FIPS": 48033,
      "county": "Borden County"
    },
    {
      "FIPS": 48111,
      "county": "Dallam County"
    },
    {
      "FIPS": 48057,
      "county": "Calhoun County"
    },
    {
      "FIPS": 48021,
      "county": "Bastrop County"
    },
    {
      "FIPS": 48107,
      "county": "Crosby County"
    },
    {
      "FIPS": 48319,
      "county": "Mason County"
    },
    {
      "FIPS": 48445,
      "county": "Terry County"
    },
    {
      "FIPS": 48423,
      "county": "Smith County"
    },
    {
      "FIPS": 48353,
      "county": "Nolan County"
    },
    {
      "FIPS": 48341,
      "county": "Moore County"
    },
    {
      "FIPS": 48333,
      "county": "Mills County"
    },
    {
      "FIPS": 48331,
      "county": "Milam County"
    },
    {
      "FIPS": 48305,
      "county": "Lynn County"
    },
    {
      "FIPS": 48299,
      "county": "Llano County"
    },
    {
      "FIPS": 48265,
      "county": "Kerr County"
    },
    {
      "FIPS": 48279,
      "county": "Lamb County"
    },
    {
      "FIPS": 48275,
      "county": "Knox County"
    },
    {
      "FIPS": 48385,
      "county": "Real County"
    },
    {
      "FIPS": 48097,
      "county": "Cooke County"
    },
    {
      "FIPS": 48145,
      "county": "Falls County"
    },
    {
      "FIPS": 48139,
      "county": "Ellis County"
    },
    {
      "FIPS": 48131,
      "county": "Duval County"
    },
    {
      "FIPS": 48067,
      "county": "Cass County"
    },
    {
      "FIPS": 48037,
      "county": "Bowie County"
    },
    {
      "FIPS": 48025,
      "county": "Bee County"
    },
    {
      "FIPS": 48077,
      "county": "Clay County"
    },
    {
      "FIPS": 48427,
      "county": "Starr County"
    },
    {
      "FIPS": 48143,
      "county": "Erath County"
    },
    {
      "FIPS": 48179,
      "county": "Gray County"
    },
    {
      "FIPS": 48253,
      "county": "Jones County"
    },
    {
      "FIPS": 48235,
      "county": "Irion County"
    },
    {
      "FIPS": 48029,
      "county": "Bexar County"
    },
    {
      "FIPS": 48155,
      "county": "Foard County"
    },
    {
      "FIPS": 48371,
      "county": "Pecos County"
    },
    {
      "FIPS": 48401,
      "county": "Rusk County"
    },
    {
      "FIPS": 48217,
      "county": "Hill County"
    },
    {
      "FIPS": 48449,
      "county": "Titus County"
    },
    {
      "FIPS": 48221,
      "county": "Hood County"
    },
    {
      "FIPS": 48049,
      "county": "Brown County"
    },
    {
      "FIPS": 48277,
      "county": "Lamar County"
    },
    {
      "FIPS": 48237,
      "county": "Jack County"
    },
    {
      "FIPS": 48209,
      "county": "Hays County"
    },
    {
      "FIPS": 48497,
      "county": "Wise County"
    },
    {
      "FIPS": 48183,
      "county": "Gregg County"
    },
    {
      "FIPS": 48027,
      "county": "Bell County"
    },
    {
      "FIPS": 48189,
      "county": "Hale County"
    },
    {
      "FIPS": 48103,
      "county": "Crane County"
    },
    {
      "FIPS": 48499,
      "county": "Wood County"
    },
    {
      "FIPS": 48063,
      "county": "Camp County"
    },
    {
      "FIPS": 48091,
      "county": "Comal County"
    },
    {
      "FIPS": 48135,
      "county": "Ector County"
    },
    {
      "FIPS": 48503,
      "county": "Young County"
    },
    {
      "FIPS": 48289,
      "county": "Leon County"
    },
    {
      "FIPS": 48169,
      "county": "Garza County"
    },
    {
      "FIPS": 48461,
      "county": "Upton County"
    },
    {
      "FIPS": 48081,
      "county": "Coke County"
    },
    {
      "FIPS": 48287,
      "county": "Lee County"
    },
    {
      "FIPS": 48263,
      "county": "Kent County"
    },
    {
      "FIPS": 48231,
      "county": "Hunt County"
    },
    {
      "FIPS": 48479,
      "county": "Webb County"
    },
    {
      "FIPS": 48373,
      "county": "Polk County"
    },
    {
      "FIPS": 48153,
      "county": "Floyd County"
    },
    {
      "FIPS": 48379,
      "county": "Rains County"
    },
    {
      "FIPS": 48191,
      "county": "Hall County"
    },
    {
      "FIPS": 48457,
      "county": "Tyler County"
    },
    {
      "FIPS": 48119,
      "county": "Delta County"
    },
    {
      "FIPS": 48475,
      "county": "Ward County"
    },
    {
      "FIPS": 48163,
      "county": "Frio County"
    },
    {
      "FIPS": 48269,
      "county": "King County"
    }
  ],
  "UT": [
    {
      "FIPS": 49037,
      "county": "San Juan County"
    },
    {
      "FIPS": 49051,
      "county": "Wasatch County"
    },
    {
      "FIPS": 49047,
      "county": "Uintah County"
    },
    {
      "FIPS": 49045,
      "county": "Tooele County"
    },
    {
      "FIPS": 49043,
      "county": "Summit County"
    },
    {
      "FIPS": 49041,
      "county": "Sevier County"
    },
    {
      "FIPS": 49013,
      "county": "Duchesne County"
    },
    {
      "FIPS": 49007,
      "county": "Carbon County"
    },
    {
      "FIPS": 49009,
      "county": "Daggett County"
    },
    {
      "FIPS": 49029,
      "county": "Morgan County"
    },
    {
      "FIPS": 49039,
      "county": "Sanpete County"
    },
    {
      "FIPS": 49027,
      "county": "Millard County"
    },
    {
      "FIPS": 49001,
      "county": "Beaver County"
    },
    {
      "FIPS": 49003,
      "county": "Box Elder County"
    },
    {
      "FIPS": 49053,
      "county": "Washington County"
    },
    {
      "FIPS": 49035,
      "county": "Salt Lake County"
    },
    {
      "FIPS": 49017,
      "county": "Garfield County"
    },
    {
      "FIPS": 49005,
      "county": "Cache County"
    },
    {
      "FIPS": 49019,
      "county": "Grand County"
    },
    {
      "FIPS": 49021,
      "county": "Iron County"
    },
    {
      "FIPS": 49015,
      "county": "Emery County"
    },
    {
      "FIPS": 49023,
      "county": "Juab County"
    },
    {
      "FIPS": 49011,
      "county": "Davis County"
    },
    {
      "FIPS": 49025,
      "county": "Kane County"
    },
    {
      "FIPS": 49057,
      "county": "Weber County"
    },
    {
      "FIPS": 49033,
      "county": "Rich County"
    },
    {
      "FIPS": 49049,
      "county": "Utah County"
    },
    {
      "FIPS": 49055,
      "county": "Wayne County"
    },
    {
      "FIPS": 49031,
      "county": "Piute County"
    },
    {
      "FIPS": 49037,
      "county": "San Juan County"
    }
  ],
  "VA": [
    {
      "FIPS": 51840,
      "county": "Winchester City"
    },
    {
      "FIPS": 51820,
      "county": "Waynesboro City"
    },
    {
      "FIPS": 51175,
      "county": "Southampton County"
    },
    {
      "FIPS": 51167,
      "county": "Russell County"
    },
    {
      "FIPS": 51157,
      "county": "Rappahannock County"
    },
    {
      "FIPS": 51149,
      "county": "Prince George County"
    },
    {
      "FIPS": 51147,
      "county": "Prince Edward County"
    },
    {
      "FIPS": 51145,
      "county": "Powhatan County"
    },
    {
      "FIPS": 51740,
      "county": "Portsmouth City"
    },
    {
      "FIPS": 51143,
      "county": "Pittsylvania County"
    },
    {
      "FIPS": 51137,
      "county": "Orange County"
    },
    {
      "FIPS": 51135,
      "county": "Nottoway County"
    },
    {
      "FIPS": 51131,
      "county": "Northampton County"
    },
    {
      "FIPS": 51700,
      "county": "Newport News City"
    },
    {
      "FIPS": 51127,
      "county": "New Kent County"
    },
    {
      "FIPS": 51685,
      "county": "Manassas Park City"
    },
    {
      "FIPS": 51680,
      "county": "Lynchburg City"
    },
    {
      "FIPS": 51111,
      "county": "Lunenburg County"
    },
    {
      "FIPS": 51660,
      "county": "Harrisonburg City"
    },
    {
      "FIPS": 51083,
      "county": "Halifax County"
    },
    {
      "FIPS": 51073,
      "county": "Gloucester County"
    },
    {
      "FIPS": 51069,
      "county": "Frederick County"
    },
    {
      "FIPS": 51065,
      "county": "Fluvanna County"
    },
    {
      "FIPS": 51061,
      "county": "Fauquier County"
    },
    {
      "FIPS": 51033,
      "county": "Caroline County"
    },
    {
      "FIPS": 51590,
      "county": "Danville City"
    },
    {
      "FIPS": 51570,
      "county": "Colonial Heights City"
    },
    {
      "FIPS": 51023,
      "county": "Botetourt County"
    },
    {
      "FIPS": 51015,
      "county": "Augusta County"
    },
    {
      "FIPS": 51011,
      "county": "Appomattox County"
    },
    {
      "FIPS": 51005,
      "county": "Alleghany County"
    },
    {
      "FIPS": 51027,
      "county": "Buchanan County"
    },
    {
      "FIPS": 51001,
      "county": "Accomack County"
    },
    {
      "FIPS": 51067,
      "county": "Franklin County"
    },
    {
      "FIPS": 51031,
      "county": "Campbell County"
    },
    {
      "FIPS": 51035,
      "county": "Carroll County"
    },
    {
      "FIPS": 51117,
      "county": "Mecklenburg County"
    },
    {
      "FIPS": 51103,
      "county": "Lancaster County"
    },
    {
      "FIPS": 51630,
      "county": "Fredericksburg City"
    },
    {
      "FIPS": 51159,
      "county": "Richmond County"
    },
    {
      "FIPS": 51610,
      "county": "Falls Church City"
    },
    {
      "FIPS": 51185,
      "county": "Tazewell County"
    },
    {
      "FIPS": 51113,
      "county": "Madison County"
    },
    {
      "FIPS": 51029,
      "county": "Buckingham County"
    },
    {
      "FIPS": 51193,
      "county": "Westmoreland County"
    },
    {
      "FIPS": 51735,
      "county": "Poquoson City"
    },
    {
      "FIPS": 51093,
      "county": "Isle of Wight County"
    },
    {
      "FIPS": 51183,
      "county": "Sussex County"
    },
    {
      "FIPS": 51115,
      "county": "Mathews County"
    },
    {
      "FIPS": 51091,
      "county": "Highland County"
    },
    {
      "FIPS": 51133,
      "county": "Northumberland County"
    },
    {
      "FIPS": 51025,
      "county": "Brunswick County"
    },
    {
      "FIPS": 51177,
      "county": "Spotsylvania County"
    },
    {
      "FIPS": 51620,
      "county": "Franklin City"
    },
    {
      "FIPS": 51107,
      "county": "Loudoun County"
    },
    {
      "FIPS": 51530,
      "county": "Buena Vista City"
    },
    {
      "FIPS": 51171,
      "county": "Shenandoah County"
    },
    {
      "FIPS": 51101,
      "county": "King William County"
    },
    {
      "FIPS": 51109,
      "county": "Louisa County"
    },
    {
      "FIPS": 51119,
      "county": "Middlesex County"
    },
    {
      "FIPS": 51059,
      "county": "Fairfax County"
    },
    {
      "FIPS": 51009,
      "county": "Amherst County"
    },
    {
      "FIPS": 51043,
      "county": "Clarke County"
    },
    {
      "FIPS": 51187,
      "county": "Warren County"
    },
    {
      "FIPS": 51683,
      "county": "Manassas City"
    },
    {
      "FIPS": 51099,
      "county": "King George County"
    },
    {
      "FIPS": 51153,
      "county": "Prince William County"
    },
    {
      "FIPS": 51087,
      "county": "Henrico County"
    },
    {
      "FIPS": 51075,
      "county": "Goochland County"
    },
    {
      "FIPS": 51041,
      "county": "Chesterfield County"
    },
    {
      "FIPS": 51550,
      "county": "Chesapeake City"
    },
    {
      "FIPS": 51540,
      "county": "Charlottesville City"
    },
    {
      "FIPS": 51013,
      "county": "Arlington County"
    },
    {
      "FIPS": 51003,
      "county": "Albemarle County"
    },
    {
      "FIPS": 51163,
      "county": "Rockbridge County"
    },
    {
      "FIPS": 51155,
      "county": "Pulaski County"
    },
    {
      "FIPS": 51007,
      "county": "Amelia County"
    },
    {
      "FIPS": 51165,
      "county": "Rockingham County"
    },
    {
      "FIPS": 51730,
      "county": "Petersburg City"
    },
    {
      "FIPS": 51690,
      "county": "Martinsville City"
    },
    {
      "FIPS": 51079,
      "county": "Greene County"
    },
    {
      "FIPS": 51051,
      "county": "Dickenson County"
    },
    {
      "FIPS": 51790,
      "county": "Staunton City"
    },
    {
      "FIPS": 51760,
      "county": "Richmond City"
    },
    {
      "FIPS": 51830,
      "county": "Williamsburg City"
    },
    {
      "FIPS": 51191,
      "county": "Washington County"
    },
    {
      "FIPS": 51097,
      "county": "King and Queen County"
    },
    {
      "FIPS": 51077,
      "county": "Grayson County"
    },
    {
      "FIPS": 51121,
      "county": "Montgomery County"
    },
    {
      "FIPS": 51053,
      "county": "Dinwiddie County"
    },
    {
      "FIPS": 51085,
      "county": "Hanover County"
    },
    {
      "FIPS": 51141,
      "county": "Patrick County"
    },
    {
      "FIPS": 51037,
      "county": "Charlotte County"
    },
    {
      "FIPS": 51810,
      "county": "Virginia Beach City"
    },
    {
      "FIPS": 51670,
      "county": "Hopewell City"
    },
    {
      "FIPS": 51081,
      "county": "Greensville County"
    },
    {
      "FIPS": 51047,
      "county": "Culpeper County"
    },
    {
      "FIPS": 51161,
      "county": "Roanoke County"
    },
    {
      "FIPS": 51179,
      "county": "Stafford County"
    },
    {
      "FIPS": 51125,
      "county": "Nelson County"
    },
    {
      "FIPS": 51510,
      "county": "Alexandria City"
    },
    {
      "FIPS": 51049,
      "county": "Cumberland County"
    },
    {
      "FIPS": 51197,
      "county": "Wythe County"
    },
    {
      "FIPS": 51195,
      "county": "Wise County"
    },
    {
      "FIPS": 51173,
      "county": "Smyth County"
    },
    {
      "FIPS": 51071,
      "county": "Giles County"
    },
    {
      "FIPS": 51139,
      "county": "Page County"
    },
    {
      "FIPS": 51720,
      "county": "Norton City"
    },
    {
      "FIPS": 51650,
      "county": "Hampton City"
    },
    {
      "FIPS": 51640,
      "county": "Galax City"
    },
    {
      "FIPS": 51600,
      "county": "Fairfax City"
    },
    {
      "FIPS": 51057,
      "county": "Essex County"
    },
    {
      "FIPS": 51595,
      "county": "Emporia City"
    },
    {
      "FIPS": 51045,
      "county": "Craig County"
    },
    {
      "FIPS": 51036,
      "county": "Charles City"
    },
    {
      "FIPS": 51019,
      "county": "Bedford City"
    },
    {
      "FIPS": 51017,
      "county": "Bath County"
    },
    {
      "FIPS": 51095,
      "county": "James City"
    },
    {
      "FIPS": 51089,
      "county": "Henry County"
    },
    {
      "FIPS": 51770,
      "county": "Roanoke City"
    },
    {
      "FIPS": 51750,
      "county": "Radford City"
    },
    {
      "FIPS": 51800,
      "county": "Suffolk City"
    },
    {
      "FIPS": 51199,
      "county": "York County"
    },
    {
      "FIPS": 51105,
      "county": "Lee County"
    },
    {
      "FIPS": 51169,
      "county": "Scott County"
    },
    {
      "FIPS": 51710,
      "county": "Norfolk City"
    },
    {
      "FIPS": 51021,
      "county": "Bland County"
    },
    {
      "FIPS": 51063,
      "county": "Floyd County"
    },
    {
      "FIPS": 51520,
      "county": "Bristol City"
    },
    {
      "FIPS": 51775,
      "county": "Salem City"
    },
    {
      "FIPS": 51181,
      "county": "Surry County"
    },
    {
      "FIPS": 51840,
      "county": "Winchester City"
    },
    {
      "FIPS": 51820,
      "county": "Waynesboro City"
    },
    {
      "FIPS": 51175,
      "county": "Southampton County"
    },
    {
      "FIPS": 51167,
      "county": "Russell County"
    },
    {
      "FIPS": 51157,
      "county": "Rappahannock County"
    },
    {
      "FIPS": 51149,
      "county": "Prince George County"
    },
    {
      "FIPS": 51147,
      "county": "Prince Edward County"
    },
    {
      "FIPS": 51145,
      "county": "Powhatan County"
    },
    {
      "FIPS": 51740,
      "county": "Portsmouth City"
    },
    {
      "FIPS": 51143,
      "county": "Pittsylvania County"
    },
    {
      "FIPS": 51137,
      "county": "Orange County"
    },
    {
      "FIPS": 51135,
      "county": "Nottoway County"
    },
    {
      "FIPS": 51131,
      "county": "Northampton County"
    },
    {
      "FIPS": 51700,
      "county": "Newport News City"
    },
    {
      "FIPS": 51127,
      "county": "New Kent County"
    },
    {
      "FIPS": 51685,
      "county": "Manassas Park City"
    },
    {
      "FIPS": 51680,
      "county": "Lynchburg City"
    }
  ],
  "VT": [
    {
      "FIPS": 50025,
      "county": "Windham County"
    },
    {
      "FIPS": 50023,
      "county": "Washington County"
    },
    {
      "FIPS": 50021,
      "county": "Rutland County"
    },
    {
      "FIPS": 50011,
      "county": "Franklin County"
    },
    {
      "FIPS": 50001,
      "county": "Addison County"
    },
    {
      "FIPS": 50007,
      "county": "Chittenden County"
    },
    {
      "FIPS": 50017,
      "county": "Orange County"
    },
    {
      "FIPS": 50027,
      "county": "Windsor County"
    },
    {
      "FIPS": 50003,
      "county": "Bennington County"
    },
    {
      "FIPS": 50019,
      "county": "Orleans County"
    },
    {
      "FIPS": 50015,
      "county": "Lamoille County"
    },
    {
      "FIPS": 50013,
      "county": "Grand Isle County"
    },
    {
      "FIPS": 50005,
      "county": "Caledonia County"
    },
    {
      "FIPS": 50009,
      "county": "Essex County"
    },
    {
      "FIPS": 50025,
      "county": "Windham County"
    },
    {
      "FIPS": 50023,
      "county": "Washington County"
    },
    {
      "FIPS": 50021,
      "county": "Rutland County"
    },
    {
      "FIPS": 50011,
      "county": "Franklin County"
    },
    {
      "FIPS": 50001,
      "county": "Addison County"
    }
  ],
  "WA": [
    {
      "FIPS": 53075,
      "county": "Whitman County"
    },
    {
      "FIPS": 53073,
      "county": "Whatcom County"
    },
    {
      "FIPS": 53071,
      "county": "Walla Walla County"
    },
    {
      "FIPS": 53049,
      "county": "Pacific County"
    },
    {
      "FIPS": 53031,
      "county": "Jefferson County"
    },
    {
      "FIPS": 53027,
      "county": "Grays Harbor County"
    },
    {
      "FIPS": 53021,
      "county": "Franklin County"
    },
    {
      "FIPS": 53007,
      "county": "Chelan County"
    },
    {
      "FIPS": 53039,
      "county": "Klickitat County"
    },
    {
      "FIPS": 53009,
      "county": "Clallam County"
    },
    {
      "FIPS": 53047,
      "county": "Okanogan County"
    },
    {
      "FIPS": 53051,
      "county": "Pend Oreille County"
    },
    {
      "FIPS": 53017,
      "county": "Douglas County"
    },
    {
      "FIPS": 53013,
      "county": "Columbia County"
    },
    {
      "FIPS": 53057,
      "county": "Skagit County"
    },
    {
      "FIPS": 53065,
      "county": "Stevens County"
    },
    {
      "FIPS": 53063,
      "county": "Spokane County"
    },
    {
      "FIPS": 53067,
      "county": "Thurston County"
    },
    {
      "FIPS": 53035,
      "county": "Kitsap County"
    },
    {
      "FIPS": 53043,
      "county": "Lincoln County"
    },
    {
      "FIPS": 53061,
      "county": "Snohomish County"
    },
    {
      "FIPS": 53053,
      "county": "Pierce County"
    },
    {
      "FIPS": 53015,
      "county": "Cowlitz County"
    },
    {
      "FIPS": 53023,
      "county": "Garfield County"
    },
    {
      "FIPS": 53003,
      "county": "Asotin County"
    },
    {
      "FIPS": 53077,
      "county": "Yakima County"
    },
    {
      "FIPS": 53059,
      "county": "Skamania County"
    },
    {
      "FIPS": 53037,
      "county": "Kittitas County"
    },
    {
      "FIPS": 53069,
      "county": "Wahkiakum County"
    },
    {
      "FIPS": 53029,
      "county": "Island County"
    },
    {
      "FIPS": 53055,
      "county": "San Juan County"
    },
    {
      "FIPS": 53005,
      "county": "Benton County"
    },
    {
      "FIPS": 53045,
      "county": "Mason County"
    },
    {
      "FIPS": 53025,
      "county": "Grant County"
    },
    {
      "FIPS": 53041,
      "county": "Lewis County"
    },
    {
      "FIPS": 53011,
      "county": "Clark County"
    },
    {
      "FIPS": 53019,
      "county": "Ferry County"
    },
    {
      "FIPS": 53001,
      "county": "Adams County"
    },
    {
      "FIPS": 53033,
      "county": "King County"
    },
    {
      "FIPS": 53075,
      "county": "Whitman County"
    },
    {
      "FIPS": 53073,
      "county": "Whatcom County"
    },
    {
      "FIPS": 53071,
      "county": "Walla Walla County"
    },
    {
      "FIPS": 53049,
      "county": "Pacific County"
    },
    {
      "FIPS": 53031,
      "county": "Jefferson County"
    },
    {
      "FIPS": 53027,
      "county": "Grays Harbor County"
    },
    {
      "FIPS": 53021,
      "county": "Franklin County"
    },
    {
      "FIPS": 53007,
      "county": "Chelan County"
    }
  ],
  "WI": [
    {
      "FIPS": 55139,
      "county": "Winnebago County"
    },
    {
      "FIPS": 55131,
      "county": "Washington County"
    },
    {
      "FIPS": 55127,
      "county": "Walworth County"
    },
    {
      "FIPS": 55123,
      "county": "Vernon County"
    },
    {
      "FIPS": 55117,
      "county": "Sheboygan County"
    },
    {
      "FIPS": 55115,
      "county": "Shawano County"
    },
    {
      "FIPS": 55103,
      "county": "Richland County"
    },
    {
      "FIPS": 55101,
      "county": "Racine County"
    },
    {
      "FIPS": 55097,
      "county": "Portage County"
    },
    {
      "FIPS": 55089,
      "county": "Ozaukee County"
    },
    {
      "FIPS": 55085,
      "county": "Oneida County"
    },
    {
      "FIPS": 55129,
      "county": "Washburn County"
    },
    {
      "FIPS": 55081,
      "county": "Monroe County"
    },
    {
      "FIPS": 55061,
      "county": "Kewaunee County"
    },
    {
      "FIPS": 55055,
      "county": "Jefferson County"
    },
    {
      "FIPS": 55053,
      "county": "Jackson County"
    },
    {
      "FIPS": 55047,
      "county": "Green Lake County"
    },
    {
      "FIPS": 55039,
      "county": "Fond Du Lac County"
    },
    {
      "FIPS": 55037,
      "county": "Florence County"
    },
    {
      "FIPS": 55035,
      "county": "Eau Claire County"
    },
    {
      "FIPS": 55031,
      "county": "Douglas County"
    },
    {
      "FIPS": 55021,
      "county": "Columbia County"
    },
    {
      "FIPS": 55015,
      "county": "Calumet County"
    },
    {
      "FIPS": 55013,
      "county": "Burnett County"
    },
    {
      "FIPS": 55003,
      "county": "Ashland County"
    },
    {
      "FIPS": 55007,
      "county": "Bayfield County"
    },
    {
      "FIPS": 55041,
      "county": "Forest County"
    },
    {
      "FIPS": 55087,
      "county": "Outagamie County"
    },
    {
      "FIPS": 55063,
      "county": "La Crosse County"
    },
    {
      "FIPS": 55017,
      "county": "Chippewa County"
    },
    {
      "FIPS": 55119,
      "county": "Taylor County"
    },
    {
      "FIPS": 55137,
      "county": "Waushara County"
    },
    {
      "FIPS": 55113,
      "county": "Sawyer County"
    },
    {
      "FIPS": 55093,
      "county": "Pierce County"
    },
    {
      "FIPS": 55073,
      "county": "Marathon County"
    },
    {
      "FIPS": 55067,
      "county": "Langlade County"
    },
    {
      "FIPS": 55011,
      "county": "Buffalo County"
    },
    {
      "FIPS": 55069,
      "county": "Lincoln County"
    },
    {
      "FIPS": 55135,
      "county": "Waupaca County"
    },
    {
      "FIPS": 55077,
      "county": "Marquette County"
    },
    {
      "FIPS": 55071,
      "county": "Manitowoc County"
    },
    {
      "FIPS": 55109,
      "county": "St Croix County"
    },
    {
      "FIPS": 55023,
      "county": "Crawford County"
    },
    {
      "FIPS": 55065,
      "county": "Lafayette County"
    },
    {
      "FIPS": 55059,
      "county": "Kenosha County"
    },
    {
      "FIPS": 55005,
      "county": "Barron County"
    },
    {
      "FIPS": 55133,
      "county": "Waukesha County"
    },
    {
      "FIPS": 55083,
      "county": "Oconto County"
    },
    {
      "FIPS": 55078,
      "county": "Menominee County"
    },
    {
      "FIPS": 55057,
      "county": "Juneau County"
    },
    {
      "FIPS": 55075,
      "county": "Marinette County"
    },
    {
      "FIPS": 55079,
      "county": "Milwaukee County"
    },
    {
      "FIPS": 55121,
      "county": "Trempealeau County"
    },
    {
      "FIPS": 55141,
      "county": "Wood County"
    },
    {
      "FIPS": 55111,
      "county": "Sauk County"
    },
    {
      "FIPS": 55105,
      "county": "Rock County"
    },
    {
      "FIPS": 55099,
      "county": "Price County"
    },
    {
      "FIPS": 55095,
      "county": "Polk County"
    },
    {
      "FIPS": 55049,
      "county": "Iowa County"
    },
    {
      "FIPS": 55045,
      "county": "Green County"
    },
    {
      "FIPS": 55043,
      "county": "Grant County"
    },
    {
      "FIPS": 55033,
      "county": "Dunn County"
    },
    {
      "FIPS": 55027,
      "county": "Dodge County"
    },
    {
      "FIPS": 55009,
      "county": "Brown County"
    },
    {
      "FIPS": 55091,
      "county": "Pepin County"
    },
    {
      "FIPS": 55107,
      "county": "Rusk County"
    },
    {
      "FIPS": 55125,
      "county": "Vilas County"
    },
    {
      "FIPS": 55029,
      "county": "Door County"
    },
    {
      "FIPS": 55025,
      "county": "Dane County"
    },
    {
      "FIPS": 55051,
      "county": "Iron County"
    },
    {
      "FIPS": 55019,
      "county": "Clark County"
    },
    {
      "FIPS": 55001,
      "county": "Adams County"
    },
    {
      "FIPS": 55139,
      "county": "Winnebago County"
    },
    {
      "FIPS": 55131,
      "county": "Washington County"
    },
    {
      "FIPS": 55127,
      "county": "Walworth County"
    },
    {
      "FIPS": 55123,
      "county": "Vernon County"
    },
    {
      "FIPS": 55117,
      "county": "Sheboygan County"
    },
    {
      "FIPS": 55115,
      "county": "Shawano County"
    },
    {
      "FIPS": 55103,
      "county": "Richland County"
    },
    {
      "FIPS": 55101,
      "county": "Racine County"
    },
    {
      "FIPS": 55097,
      "county": "Portage County"
    },
    {
      "FIPS": 55089,
      "county": "Ozaukee County"
    },
    {
      "FIPS": 55085,
      "county": "Oneida County"
    },
    {
      "FIPS": 55129,
      "county": "Washburn County"
    },
    {
      "FIPS": 55081,
      "county": "Monroe County"
    },
    {
      "FIPS": 55061,
      "county": "Kewaunee County"
    },
    {
      "FIPS": 55055,
      "county": "Jefferson County"
    },
    {
      "FIPS": 55053,
      "county": "Jackson County"
    },
    {
      "FIPS": 55047,
      "county": "Green Lake County"
    },
    {
      "FIPS": 55039,
      "county": "Fond Du Lac County"
    },
    {
      "FIPS": 55037,
      "county": "Florence County"
    },
    {
      "FIPS": 55035,
      "county": "Eau Claire County"
    },
    {
      "FIPS": 55031,
      "county": "Douglas County"
    },
    {
      "FIPS": 55021,
      "county": "Columbia County"
    },
    {
      "FIPS": 55015,
      "county": "Calumet County"
    },
    {
      "FIPS": 55013,
      "county": "Burnett County"
    },
    {
      "FIPS": 55003,
      "county": "Ashland County"
    },
    {
      "FIPS": 55007,
      "county": "Bayfield County"
    }
  ],
  "WV": [
    {
      "FIPS": 54109,
      "county": "Wyoming County"
    },
    {
      "FIPS": 54103,
      "county": "Wetzel County"
    },
    {
      "FIPS": 54097,
      "county": "Upshur County"
    },
    {
      "FIPS": 54091,
      "county": "Taylor County"
    },
    {
      "FIPS": 54089,
      "county": "Summers County"
    },
    {
      "FIPS": 54083,
      "county": "Randolph County"
    },
    {
      "FIPS": 54081,
      "county": "Raleigh County"
    },
    {
      "FIPS": 54075,
      "county": "Pocahontas County"
    },
    {
      "FIPS": 54071,
      "county": "Pendleton County"
    },
    {
      "FIPS": 54063,
      "county": "Monroe County"
    },
    {
      "FIPS": 54057,
      "county": "Mineral County"
    },
    {
      "FIPS": 54055,
      "county": "Mercer County"
    },
    {
      "FIPS": 54051,
      "county": "Marshall County"
    },
    {
      "FIPS": 54049,
      "county": "Marion County"
    },
    {
      "FIPS": 54043,
      "county": "Lincoln County"
    },
    {
      "FIPS": 54029,
      "county": "Hancock County"
    },
    {
      "FIPS": 54027,
      "county": "Hampshire County"
    },
    {
      "FIPS": 54013,
      "county": "Calhoun County"
    },
    {
      "FIPS": 54011,
      "county": "Cabell County"
    },
    {
      "FIPS": 54085,
      "county": "Ritchie County"
    },
    {
      "FIPS": 54021,
      "county": "Gilmer County"
    },
    {
      "FIPS": 54065,
      "county": "Morgan County"
    },
    {
      "FIPS": 54093,
      "county": "Tucker County"
    },
    {
      "FIPS": 54003,
      "county": "Berkeley County"
    },
    {
      "FIPS": 54035,
      "county": "Jackson County"
    },
    {
      "FIPS": 54009,
      "county": "Brooke County"
    },
    {
      "FIPS": 54079,
      "county": "Putnam County"
    },
    {
      "FIPS": 54017,
      "county": "Doddridge County"
    },
    {
      "FIPS": 54037,
      "county": "Jefferson County"
    },
    {
      "FIPS": 54039,
      "county": "Kanawha County"
    },
    {
      "FIPS": 54033,
      "county": "Harrison County"
    },
    {
      "FIPS": 54061,
      "county": "Monongalia County"
    },
    {
      "FIPS": 54101,
      "county": "Webster County"
    },
    {
      "FIPS": 54047,
      "county": "McDowell County"
    },
    {
      "FIPS": 54025,
      "county": "Greenbrier County"
    },
    {
      "FIPS": 54077,
      "county": "Preston County"
    },
    {
      "FIPS": 54067,
      "county": "Nicholas County"
    },
    {
      "FIPS": 54001,
      "county": "Barbour County"
    },
    {
      "FIPS": 54019,
      "county": "Fayette County"
    },
    {
      "FIPS": 54007,
      "county": "Braxton County"
    },
    {
      "FIPS": 54073,
      "county": "Pleasants County"
    },
    {
      "FIPS": 54099,
      "county": "Wayne County"
    },
    {
      "FIPS": 54095,
      "county": "Tyler County"
    },
    {
      "FIPS": 54087,
      "county": "Roane County"
    },
    {
      "FIPS": 54069,
      "county": "Ohio County"
    },
    {
      "FIPS": 54059,
      "county": "Mingo County"
    },
    {
      "FIPS": 54045,
      "county": "Logan County"
    },
    {
      "FIPS": 54041,
      "county": "Lewis County"
    },
    {
      "FIPS": 54005,
      "county": "Boone County"
    },
    {
      "FIPS": 54023,
      "county": "Grant County"
    },
    {
      "FIPS": 54053,
      "county": "Mason County"
    },
    {
      "FIPS": 54015,
      "county": "Clay County"
    },
    {
      "FIPS": 54105,
      "county": "Wirt County"
    },
    {
      "FIPS": 54107,
      "county": "Wood County"
    },
    {
      "FIPS": 54031,
      "county": "Hardy County"
    },
    {
      "FIPS": 54109,
      "county": "Wyoming County"
    },
    {
      "FIPS": 54103,
      "county": "Wetzel County"
    },
    {
      "FIPS": 54097,
      "county": "Upshur County"
    },
    {
      "FIPS": 54091,
      "county": "Taylor County"
    },
    {
      "FIPS": 54089,
      "county": "Summers County"
    },
    {
      "FIPS": 54083,
      "county": "Randolph County"
    },
    {
      "FIPS": 54081,
      "county": "Raleigh County"
    },
    {
      "FIPS": 54075,
      "county": "Pocahontas County"
    },
    {
      "FIPS": 54071,
      "county": "Pendleton County"
    },
    {
      "FIPS": 54063,
      "county": "Monroe County"
    },
    {
      "FIPS": 54057,
      "county": "Mineral County"
    },
    {
      "FIPS": 54055,
      "county": "Mercer County"
    },
    {
      "FIPS": 54051,
      "county": "Marshall County"
    },
    {
      "FIPS": 54049,
      "county": "Marion County"
    },
    {
      "FIPS": 54043,
      "county": "Lincoln County"
    },
    {
      "FIPS": 54029,
      "county": "Hancock County"
    },
    {
      "FIPS": 54027,
      "county": "Hampshire County"
    },
    {
      "FIPS": 54013,
      "county": "Calhoun County"
    },
    {
      "FIPS": 54011,
      "county": "Cabell County"
    }
  ],
  "WY": [
    {
      "FIPS": 56045,
      "county": "Weston County"
    },
    {
      "FIPS": 56037,
      "county": "Sweetwater County"
    },
    {
      "FIPS": 56035,
      "county": "Sublette County"
    },
    {
      "FIPS": 56031,
      "county": "Platte County"
    },
    {
      "FIPS": 56025,
      "county": "Natrona County"
    },
    {
      "FIPS": 56023,
      "county": "Lincoln County"
    },
    {
      "FIPS": 56021,
      "county": "Laramie County"
    },
    {
      "FIPS": 56019,
      "county": "Johnson County"
    },
    {
      "FIPS": 56015,
      "county": "Goshen County"
    },
    {
      "FIPS": 56013,
      "county": "Fremont County"
    },
    {
      "FIPS": 56009,
      "county": "Converse County"
    },
    {
      "FIPS": 56007,
      "county": "Carbon County"
    },
    {
      "FIPS": 56005,
      "county": "Campbell County"
    },
    {
      "FIPS": 56001,
      "county": "Albany County"
    },
    {
      "FIPS": 56003,
      "county": "Big Horn County"
    },
    {
      "FIPS": 56027,
      "county": "Niobrara County"
    },
    {
      "FIPS": 56033,
      "county": "Sheridan County"
    },
    {
      "FIPS": 56017,
      "county": "Hot Springs County"
    },
    {
      "FIPS": 56043,
      "county": "Washakie County"
    },
    {
      "FIPS": 56041,
      "county": "Uinta County"
    },
    {
      "FIPS": 56039,
      "county": "Teton County"
    },
    {
      "FIPS": 56029,
      "county": "Park County"
    },
    {
      "FIPS": 56011,
      "county": "Crook County"
    },
    {
      "FIPS": 56045,
      "county": "Weston County"
    },
    {
      "FIPS": 56037,
      "county": "Sweetwater County"
    },
    {
      "FIPS": 56035,
      "county": "Sublette County"
    },
    {
      "FIPS": 56031,
      "county": "Platte County"
    },
    {
      "FIPS": 56025,
      "county": "Natrona County"
    },
    {
      "FIPS": 56023,
      "county": "Lincoln County"
    },
    {
      "FIPS": 56021,
      "county": "Laramie County"
    },
    {
      "FIPS": 56019,
      "county": "Johnson County"
    },
    {
      "FIPS": 56015,
      "county": "Goshen County"
    },
    {
      "FIPS": 56013,
      "county": "Fremont County"
    },
    {
      "FIPS": 56009,
      "county": "Converse County"
    },
    {
      "FIPS": 56007,
      "county": "Carbon County"
    },
    {
      "FIPS": 56005,
      "county": "Campbell County"
    }
  ]
};

    // Public API here
    return countiesByState;
  });
