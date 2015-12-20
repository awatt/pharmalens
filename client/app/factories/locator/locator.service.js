'use strict';

angular.module('foglightApp')
  .factory('locator', function () {
    
    var countiesByState = {
  "AK": [
    {
      "FIPS": 2230.0,
      "county": "Skagway Borough"
    },
    {
      "FIPS": 2198.0,
      "county": "Prince of Wales-Outer Ketchikan Borough"
    },
    {
      "FIPS": 2090.0,
      "county": "Fairbanks North Star Borough"
    },
    {
      "FIPS": 2195.0,
      "county": "Petersburg Borough"
    },
    {
      "FIPS": 2060.0,
      "county": "Bristol Bay Borough"
    },
    {
      "FIPS": 2150.0,
      "county": "Kodiak Island Borough"
    },
    {
      "FIPS": 2220.0,
      "county": "Sitka Borough"
    },
    {
      "FIPS": 2188.0,
      "county": "Northwest Arctic Borough"
    },
    {
      "FIPS": 2130.0,
      "county": "Ketchikan Gateway Borough"
    },
    {
      "FIPS": 2122.0,
      "county": "Kenai Peninsula Borough"
    },
    {
      "FIPS": 2110.0,
      "county": "City and Borough of Juneau"
    },
    {
      "FIPS": 2105.0,
      "county": "Hoonah-Angoon Borough"
    },
    {
      "FIPS": 2100.0,
      "county": "Haines Borough"
    },
    {
      "FIPS": 2020.0,
      "county": "Anchorage Borough"
    },
    {
      "FIPS": 2068.0,
      "county": "Denali Borough"
    },
    {
      "FIPS": 2013.0,
      "county": "Aleutians East Borough"
    },
    {
      "FIPS": 2290.0,
      "county": "Yukon-Koyukuk Census Area"
    },
    {
      "FIPS": 2275.0,
      "county": "Wrangell Borough"
    },
    {
      "FIPS": 2270.0,
      "county": "Wade Hampton Census Area"
    },
    {
      "FIPS": 2170.0,
      "county": "Matanuska-Susitna Borough"
    },
    {
      "FIPS": 2050.0,
      "county": "Bethel Census Area"
    },
    {
      "FIPS": 2164.0,
      "county": "Lake and Peninsula Borough"
    },
    {
      "FIPS": 2282.0,
      "county": "Yakutat Borough"
    },
    {
      "FIPS": 2180.0,
      "county": "Nome Census Area"
    },
    {
      "FIPS": 2016.0,
      "county": "Aleutians West Census Area"
    },
    {
      "FIPS": 2070.0,
      "county": "Dillingham Census Area"
    },
    {
      "FIPS": 2261.0,
      "county": "Valdez-Cordova Census Area"
    },
    {
      "FIPS": 2185.0,
      "county": "North Slope Borough"
    },
    {
      "FIPS": 2240.0,
      "county": "Southeast Fairbanks Census Area"
    }
  ],
  "AL": [
    {
      "FIPS": 1049.0,
      "county": "Dekalb County"
    },
    {
      "FIPS": 1001.0,
      "county": "Autauga County"
    },
    {
      "FIPS": 1093.0,
      "county": "Marion County"
    },
    {
      "FIPS": 1035.0,
      "county": "Conecuh County"
    },
    {
      "FIPS": 1121.0,
      "county": "Talladega County"
    },
    {
      "FIPS": 1077.0,
      "county": "Lauderdale County"
    },
    {
      "FIPS": 1113.0,
      "county": "Russell County"
    },
    {
      "FIPS": 1083.0,
      "county": "Limestone County"
    },
    {
      "FIPS": 1089.0,
      "county": "Madison County"
    },
    {
      "FIPS": 1023.0,
      "county": "Choctaw County"
    },
    {
      "FIPS": 1069.0,
      "county": "Houston County"
    },
    {
      "FIPS": 1017.0,
      "county": "Chambers County"
    },
    {
      "FIPS": 1123.0,
      "county": "Tallapoosa County"
    },
    {
      "FIPS": 1041.0,
      "county": "Crenshaw County"
    },
    {
      "FIPS": 1085.0,
      "county": "Lowndes County"
    },
    {
      "FIPS": 1051.0,
      "county": "Elmore County"
    },
    {
      "FIPS": 1021.0,
      "county": "Chilton County"
    },
    {
      "FIPS": 1131.0,
      "county": "Wilcox County"
    },
    {
      "FIPS": 1125.0,
      "county": "Tuscaloosa County"
    },
    {
      "FIPS": 1119.0,
      "county": "Sumter County"
    },
    {
      "FIPS": 1011.0,
      "county": "Bullock County"
    },
    {
      "FIPS": 1107.0,
      "county": "Pickens County"
    },
    {
      "FIPS": 1099.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 1071.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 1055.0,
      "county": "Etowah County"
    },
    {
      "FIPS": 1043.0,
      "county": "Cullman County"
    },
    {
      "FIPS": 1013.0,
      "county": "Butler County"
    },
    {
      "FIPS": 1009.0,
      "county": "Blount County"
    },
    {
      "FIPS": 1005.0,
      "county": "Barbour County"
    },
    {
      "FIPS": 1061.0,
      "county": "Geneva County"
    },
    {
      "FIPS": 1111.0,
      "county": "Randolph County"
    },
    {
      "FIPS": 1057.0,
      "county": "Fayette County"
    },
    {
      "FIPS": 1019.0,
      "county": "Cherokee County"
    },
    {
      "FIPS": 1097.0,
      "county": "Mobile County"
    },
    {
      "FIPS": 1091.0,
      "county": "Marengo County"
    },
    {
      "FIPS": 1115.0,
      "county": "St Clair County"
    },
    {
      "FIPS": 1079.0,
      "county": "Lawrence County"
    },
    {
      "FIPS": 1117.0,
      "county": "Shelby County"
    },
    {
      "FIPS": 1073.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 1033.0,
      "county": "Colbert County"
    },
    {
      "FIPS": 1003.0,
      "county": "Baldwin County"
    },
    {
      "FIPS": 1025.0,
      "county": "Clarke County"
    },
    {
      "FIPS": 1029.0,
      "county": "Cleburne County"
    },
    {
      "FIPS": 1059.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 1031.0,
      "county": "Coffee County"
    },
    {
      "FIPS": 1103.0,
      "county": "Morgan County"
    },
    {
      "FIPS": 1133.0,
      "county": "Winston County"
    },
    {
      "FIPS": 1039.0,
      "county": "Covington County"
    },
    {
      "FIPS": 1015.0,
      "county": "Calhoun County"
    },
    {
      "FIPS": 1053.0,
      "county": "Escambia County"
    },
    {
      "FIPS": 1101.0,
      "county": "Montgomery County"
    },
    {
      "FIPS": 1129.0,
      "county": "Washington County"
    },
    {
      "FIPS": 1095.0,
      "county": "Marshall County"
    },
    {
      "FIPS": 1063.0,
      "county": "Greene County"
    },
    {
      "FIPS": 1047.0,
      "county": "Dallas County"
    },
    {
      "FIPS": 1127.0,
      "county": "Walker County"
    },
    {
      "FIPS": 1037.0,
      "county": "Coosa County"
    },
    {
      "FIPS": 1067.0,
      "county": "Henry County"
    },
    {
      "FIPS": 1065.0,
      "county": "Hale County"
    },
    {
      "FIPS": 1109.0,
      "county": "Pike County"
    },
    {
      "FIPS": 1087.0,
      "county": "Macon County"
    },
    {
      "FIPS": 1075.0,
      "county": "Lamar County"
    },
    {
      "FIPS": 1007.0,
      "county": "Bibb County"
    },
    {
      "FIPS": 1081.0,
      "county": "Lee County"
    },
    {
      "FIPS": 1045.0,
      "county": "Dale County"
    },
    {
      "FIPS": 1027.0,
      "county": "Clay County"
    },
    {
      "FIPS": 1105.0,
      "county": "Perry County"
    }
  ],
  "AR": [
    {
      "FIPS": 5071.0,
      "county": "Johnson County"
    },
    {
      "FIPS": 5091.0,
      "county": "Miller County"
    },
    {
      "FIPS": 5027.0,
      "county": "Columbia County"
    },
    {
      "FIPS": 5081.0,
      "county": "Little River County"
    },
    {
      "FIPS": 5003.0,
      "county": "Ashley County"
    },
    {
      "FIPS": 5025.0,
      "county": "Cleveland County"
    },
    {
      "FIPS": 5129.0,
      "county": "Searcy County"
    },
    {
      "FIPS": 5147.0,
      "county": "Woodruff County"
    },
    {
      "FIPS": 5063.0,
      "county": "Independence County"
    },
    {
      "FIPS": 5007.0,
      "county": "Benton County"
    },
    {
      "FIPS": 5055.0,
      "county": "Greene County"
    },
    {
      "FIPS": 5039.0,
      "county": "Dallas County"
    },
    {
      "FIPS": 5015.0,
      "county": "Carroll County"
    },
    {
      "FIPS": 5017.0,
      "county": "Chicot County"
    },
    {
      "FIPS": 5123.0,
      "county": "St Francis County"
    },
    {
      "FIPS": 5131.0,
      "county": "Sebastian County"
    },
    {
      "FIPS": 5143.0,
      "county": "Washington County"
    },
    {
      "FIPS": 5125.0,
      "county": "Saline County"
    },
    {
      "FIPS": 5121.0,
      "county": "Randolph County"
    },
    {
      "FIPS": 5117.0,
      "county": "Prairie County"
    },
    {
      "FIPS": 5103.0,
      "county": "Ouachita County"
    },
    {
      "FIPS": 5097.0,
      "county": "Montgomery County"
    },
    {
      "FIPS": 5093.0,
      "county": "Mississippi County"
    },
    {
      "FIPS": 5089.0,
      "county": "Marion County"
    },
    {
      "FIPS": 5075.0,
      "county": "Lawrence County"
    },
    {
      "FIPS": 5069.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 5067.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 5057.0,
      "county": "Hempstead County"
    },
    {
      "FIPS": 5045.0,
      "county": "Faulkner County"
    },
    {
      "FIPS": 5035.0,
      "county": "Crittenden County"
    },
    {
      "FIPS": 5029.0,
      "county": "Conway County"
    },
    {
      "FIPS": 5023.0,
      "county": "Cleburne County"
    },
    {
      "FIPS": 5001.0,
      "county": "Arkansas County"
    },
    {
      "FIPS": 5079.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 5087.0,
      "county": "Madison County"
    },
    {
      "FIPS": 5049.0,
      "county": "Fulton County"
    },
    {
      "FIPS": 5099.0,
      "county": "Nevada County"
    },
    {
      "FIPS": 5141.0,
      "county": "Van Buren County"
    },
    {
      "FIPS": 5061.0,
      "county": "Howard County"
    },
    {
      "FIPS": 5013.0,
      "county": "Calhoun County"
    },
    {
      "FIPS": 5107.0,
      "county": "Phillips County"
    },
    {
      "FIPS": 5111.0,
      "county": "Poinsett County"
    },
    {
      "FIPS": 5031.0,
      "county": "Craighead County"
    },
    {
      "FIPS": 5005.0,
      "county": "Baxter County"
    },
    {
      "FIPS": 5095.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 5119.0,
      "county": "Pulaski County"
    },
    {
      "FIPS": 5059.0,
      "county": "Hot Spring County"
    },
    {
      "FIPS": 5085.0,
      "county": "Lonoke County"
    },
    {
      "FIPS": 5011.0,
      "county": "Bradley County"
    },
    {
      "FIPS": 5073.0,
      "county": "Lafayette County"
    },
    {
      "FIPS": 5051.0,
      "county": "Garland County"
    },
    {
      "FIPS": 5047.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 5133.0,
      "county": "Sevier County"
    },
    {
      "FIPS": 5101.0,
      "county": "Newton County"
    },
    {
      "FIPS": 5033.0,
      "county": "Crawford County"
    },
    {
      "FIPS": 5139.0,
      "county": "Union County"
    },
    {
      "FIPS": 5077.0,
      "county": "Lee County"
    },
    {
      "FIPS": 5109.0,
      "county": "Pike County"
    },
    {
      "FIPS": 5019.0,
      "county": "Clark County"
    },
    {
      "FIPS": 5037.0,
      "county": "Cross County"
    },
    {
      "FIPS": 5083.0,
      "county": "Logan County"
    },
    {
      "FIPS": 5149.0,
      "county": "Yell County"
    },
    {
      "FIPS": 5127.0,
      "county": "Scott County"
    },
    {
      "FIPS": 5053.0,
      "county": "Grant County"
    },
    {
      "FIPS": 5043.0,
      "county": "Drew County"
    },
    {
      "FIPS": 5113.0,
      "county": "Polk County"
    },
    {
      "FIPS": 5135.0,
      "county": "Sharp County"
    },
    {
      "FIPS": 5065.0,
      "county": "Izard County"
    },
    {
      "FIPS": 5145.0,
      "county": "White County"
    },
    {
      "FIPS": 5021.0,
      "county": "Clay County"
    },
    {
      "FIPS": 5105.0,
      "county": "Perry County"
    },
    {
      "FIPS": 5137.0,
      "county": "Stone County"
    },
    {
      "FIPS": 5115.0,
      "county": "Pope County"
    },
    {
      "FIPS": 5009.0,
      "county": "Boone County"
    },
    {
      "FIPS": 5041.0,
      "county": "Desha County"
    }
  ],
  "AZ": [
    {
      "FIPS": 4013.0,
      "county": "Maricopa County"
    },
    {
      "FIPS": 4011.0,
      "county": "Greenlee County"
    },
    {
      "FIPS": 4003.0,
      "county": "Cochise County"
    },
    {
      "FIPS": 4017.0,
      "county": "Navajo County"
    },
    {
      "FIPS": 4025.0,
      "county": "Yavapai County"
    },
    {
      "FIPS": 4015.0,
      "county": "Mohave County"
    },
    {
      "FIPS": 4005.0,
      "county": "Coconino County"
    },
    {
      "FIPS": 4001.0,
      "county": "Apache County"
    },
    {
      "FIPS": 4009.0,
      "county": "Graham County"
    },
    {
      "FIPS": 4012.0,
      "county": "La Paz County"
    },
    {
      "FIPS": 4023.0,
      "county": "Santa Cruz County"
    },
    {
      "FIPS": 4027.0,
      "county": "Yuma County"
    },
    {
      "FIPS": 4021.0,
      "county": "Pinal County"
    },
    {
      "FIPS": 4019.0,
      "county": "Pima County"
    },
    {
      "FIPS": 4007.0,
      "county": "Gila County"
    }
  ],
  "CA": [
    {
      "FIPS": 6061.0,
      "county": "Placer County"
    },
    {
      "FIPS": 6089.0,
      "county": "Shasta County"
    },
    {
      "FIPS": 6091.0,
      "county": "Sierra County"
    },
    {
      "FIPS": 6009.0,
      "county": "Calaveras County"
    },
    {
      "FIPS": 6035.0,
      "county": "Lassen County"
    },
    {
      "FIPS": 6023.0,
      "county": "Humboldt County"
    },
    {
      "FIPS": 6109.0,
      "county": "Tuolumne County"
    },
    {
      "FIPS": 6107.0,
      "county": "Tulare County"
    },
    {
      "FIPS": 6103.0,
      "county": "Tehama County"
    },
    {
      "FIPS": 6101.0,
      "county": "Sutter County"
    },
    {
      "FIPS": 6097.0,
      "county": "Sonoma County"
    },
    {
      "FIPS": 6093.0,
      "county": "Siskiyou County"
    },
    {
      "FIPS": 6013.0,
      "county": "Contra Costa County"
    },
    {
      "FIPS": 6063.0,
      "county": "Plumas County"
    },
    {
      "FIPS": 6057.0,
      "county": "Nevada County"
    },
    {
      "FIPS": 6025.0,
      "county": "Imperial County"
    },
    {
      "FIPS": 6017.0,
      "county": "El Dorado County"
    },
    {
      "FIPS": 6015.0,
      "county": "Del Norte County"
    },
    {
      "FIPS": 6011.0,
      "county": "Colusa County"
    },
    {
      "FIPS": 6005.0,
      "county": "Amador County"
    },
    {
      "FIPS": 6019.0,
      "county": "Fresno County"
    },
    {
      "FIPS": 6077.0,
      "county": "San Joaquin County"
    },
    {
      "FIPS": 6053.0,
      "county": "Monterey County"
    },
    {
      "FIPS": 6081.0,
      "county": "San Mateo County"
    },
    {
      "FIPS": 6111.0,
      "county": "Ventura County"
    },
    {
      "FIPS": 6045.0,
      "county": "Mendocino County"
    },
    {
      "FIPS": 6067.0,
      "county": "Sacramento County"
    },
    {
      "FIPS": 6047.0,
      "county": "Merced County"
    },
    {
      "FIPS": 6099.0,
      "county": "Stanislaus County"
    },
    {
      "FIPS": 6083.0,
      "county": "Santa Barbara County"
    },
    {
      "FIPS": 6079.0,
      "county": "San Luis Obispo County"
    },
    {
      "FIPS": 6073.0,
      "county": "San Diego County"
    },
    {
      "FIPS": 6059.0,
      "county": "Orange County"
    },
    {
      "FIPS": 6001.0,
      "county": "Alameda County"
    },
    {
      "FIPS": 6071.0,
      "county": "San Bernardino County"
    },
    {
      "FIPS": 6065.0,
      "county": "Riverside County"
    },
    {
      "FIPS": 6043.0,
      "county": "Mariposa County"
    },
    {
      "FIPS": 6087.0,
      "county": "Santa Cruz County"
    },
    {
      "FIPS": 6037.0,
      "county": "Los Angeles County"
    },
    {
      "FIPS": 6075.0,
      "county": "San Francisco County"
    },
    {
      "FIPS": 6003.0,
      "county": "Alpine County"
    },
    {
      "FIPS": 6069.0,
      "county": "San Benito County"
    },
    {
      "FIPS": 6095.0,
      "county": "Solano County"
    },
    {
      "FIPS": 6039.0,
      "county": "Madera County"
    },
    {
      "FIPS": 6085.0,
      "county": "Santa Clara County"
    },
    {
      "FIPS": 6105.0,
      "county": "Trinity County"
    },
    {
      "FIPS": 6113.0,
      "county": "Yolo County"
    },
    {
      "FIPS": 6041.0,
      "county": "Marin County"
    },
    {
      "FIPS": 6055.0,
      "county": "Napa County"
    },
    {
      "FIPS": 6115.0,
      "county": "Yuba County"
    },
    {
      "FIPS": 6033.0,
      "county": "Lake County"
    },
    {
      "FIPS": 6029.0,
      "county": "Kern County"
    },
    {
      "FIPS": 6007.0,
      "county": "Butte County"
    },
    {
      "FIPS": 6049.0,
      "county": "Modoc County"
    },
    {
      "FIPS": 6031.0,
      "county": "Kings County"
    },
    {
      "FIPS": 6021.0,
      "county": "Glenn County"
    },
    {
      "FIPS": 6027.0,
      "county": "Inyo County"
    },
    {
      "FIPS": 6051.0,
      "county": "Mono County"
    }
  ],
  "CO": [
    {
      "FIPS": 8101.0,
      "county": "Pueblo County"
    },
    {
      "FIPS": 8099.0,
      "county": "Prowers County"
    },
    {
      "FIPS": 8047.0,
      "county": "Gilpin County"
    },
    {
      "FIPS": 8057.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 8055.0,
      "county": "Huerfano County"
    },
    {
      "FIPS": 8017.0,
      "county": "Cheyenne County"
    },
    {
      "FIPS": 8019.0,
      "county": "Clear Creek County"
    },
    {
      "FIPS": 8027.0,
      "county": "Custer County"
    },
    {
      "FIPS": 8083.0,
      "county": "Montezuma County"
    },
    {
      "FIPS": 8085.0,
      "county": "Montrose County"
    },
    {
      "FIPS": 8043.0,
      "county": "Fremont County"
    },
    {
      "FIPS": 8063.0,
      "county": "Kit Carson County"
    },
    {
      "FIPS": 8111.0,
      "county": "San Juan County"
    },
    {
      "FIPS": 8014.0,
      "county": "Broomfield County"
    },
    {
      "FIPS": 8007.0,
      "county": "Archuleta County"
    },
    {
      "FIPS": 8103.0,
      "county": "Rio Blanco County"
    },
    {
      "FIPS": 8097.0,
      "county": "Pitkin County"
    },
    {
      "FIPS": 8081.0,
      "county": "Moffat County"
    },
    {
      "FIPS": 8073.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 8069.0,
      "county": "Larimer County"
    },
    {
      "FIPS": 8067.0,
      "county": "La Plata County"
    },
    {
      "FIPS": 8015.0,
      "county": "Chaffee County"
    },
    {
      "FIPS": 8003.0,
      "county": "Alamosa County"
    },
    {
      "FIPS": 8115.0,
      "county": "Sedgwick County"
    },
    {
      "FIPS": 8041.0,
      "county": "El Paso County"
    },
    {
      "FIPS": 8121.0,
      "county": "Washington County"
    },
    {
      "FIPS": 8071.0,
      "county": "Las Animas County"
    },
    {
      "FIPS": 8113.0,
      "county": "San Miguel County"
    },
    {
      "FIPS": 8095.0,
      "county": "Phillips County"
    },
    {
      "FIPS": 8045.0,
      "county": "Garfield County"
    },
    {
      "FIPS": 8039.0,
      "county": "Elbert County"
    },
    {
      "FIPS": 8079.0,
      "county": "Mineral County"
    },
    {
      "FIPS": 8033.0,
      "county": "Dolores County"
    },
    {
      "FIPS": 8013.0,
      "county": "Boulder County"
    },
    {
      "FIPS": 8021.0,
      "county": "Conejos County"
    },
    {
      "FIPS": 8119.0,
      "county": "Teller County"
    },
    {
      "FIPS": 8035.0,
      "county": "Douglas County"
    },
    {
      "FIPS": 8031.0,
      "county": "Denver County"
    },
    {
      "FIPS": 8059.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 8005.0,
      "county": "Arapahoe County"
    },
    {
      "FIPS": 8051.0,
      "county": "Gunnison County"
    },
    {
      "FIPS": 8053.0,
      "county": "Hinsdale County"
    },
    {
      "FIPS": 8087.0,
      "county": "Morgan County"
    },
    {
      "FIPS": 8025.0,
      "county": "Crowley County"
    },
    {
      "FIPS": 8117.0,
      "county": "Summit County"
    },
    {
      "FIPS": 8109.0,
      "county": "Saguache County"
    },
    {
      "FIPS": 8023.0,
      "county": "Costilla County"
    },
    {
      "FIPS": 8077.0,
      "county": "Mesa County"
    },
    {
      "FIPS": 8123.0,
      "county": "Weld County"
    },
    {
      "FIPS": 8107.0,
      "county": "Routt County"
    },
    {
      "FIPS": 8089.0,
      "county": "Otero County"
    },
    {
      "FIPS": 8075.0,
      "county": "Logan County"
    },
    {
      "FIPS": 8011.0,
      "county": "Bent County"
    },
    {
      "FIPS": 8009.0,
      "county": "Baca County"
    },
    {
      "FIPS": 8029.0,
      "county": "Delta County"
    },
    {
      "FIPS": 8037.0,
      "county": "Eagle County"
    },
    {
      "FIPS": 8049.0,
      "county": "Grand County"
    },
    {
      "FIPS": 8093.0,
      "county": "Park County"
    },
    {
      "FIPS": 8091.0,
      "county": "Ouray County"
    },
    {
      "FIPS": 8061.0,
      "county": "Kiowa County"
    },
    {
      "FIPS": 8125.0,
      "county": "Yuma County"
    },
    {
      "FIPS": 8001.0,
      "county": "Adams County"
    },
    {
      "FIPS": 8065.0,
      "county": "Lake County"
    },
    {
      "FIPS": 8101.0,
      "county": "Pueblo County"
    },
    {
      "FIPS": 8099.0,
      "county": "Prowers County"
    }
  ],
  "CT": [
    {
      "FIPS": 9011.0,
      "county": "New London County"
    },
    {
      "FIPS": 9007.0,
      "county": "Middlesex County"
    },
    {
      "FIPS": 9009.0,
      "county": "New Haven County"
    },
    {
      "FIPS": 9003.0,
      "county": "Hartford County"
    },
    {
      "FIPS": 9001.0,
      "county": "Fairfield County"
    },
    {
      "FIPS": 9005.0,
      "county": "Litchfield County"
    },
    {
      "FIPS": 9015.0,
      "county": "Windham County"
    },
    {
      "FIPS": 9013.0,
      "county": "Tolland County"
    }
  ],
  "DC": [
    {
      "FIPS": 11001.0,
      "county": "District of Columbia"
    }
  ],
  "DE": [
    {
      "FIPS": 10005.0,
      "county": "Sussex County"
    },
    {
      "FIPS": 10003.0,
      "county": "New Castle County"
    },
    {
      "FIPS": 10001.0,
      "county": "Kent County"
    }
  ],
  "FL": [
    {
      "FIPS": 12015.0,
      "county": "Charlotte County"
    },
    {
      "FIPS": 12039.0,
      "county": "Gadsden County"
    },
    {
      "FIPS": 12065.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 12037.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 12063.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 12117.0,
      "county": "Seminole County"
    },
    {
      "FIPS": 12097.0,
      "county": "Osceola County"
    },
    {
      "FIPS": 12087.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 12023.0,
      "county": "Columbia County"
    },
    {
      "FIPS": 12095.0,
      "county": "Orange County"
    },
    {
      "FIPS": 12131.0,
      "county": "Walton County"
    },
    {
      "FIPS": 12129.0,
      "county": "Wakulla County"
    },
    {
      "FIPS": 12119.0,
      "county": "Sumter County"
    },
    {
      "FIPS": 12111.0,
      "county": "St Lucie County"
    },
    {
      "FIPS": 12113.0,
      "county": "Santa Rosa County"
    },
    {
      "FIPS": 12107.0,
      "county": "Putnam County"
    },
    {
      "FIPS": 12093.0,
      "county": "Okeechobee County"
    },
    {
      "FIPS": 12085.0,
      "county": "Martin County"
    },
    {
      "FIPS": 12067.0,
      "county": "Lafayette County"
    },
    {
      "FIPS": 12079.0,
      "county": "Madison County"
    },
    {
      "FIPS": 12061.0,
      "county": "Indian River County"
    },
    {
      "FIPS": 12059.0,
      "county": "Holmes County"
    },
    {
      "FIPS": 12055.0,
      "county": "Highlands County"
    },
    {
      "FIPS": 12047.0,
      "county": "Hamilton County"
    },
    {
      "FIPS": 12049.0,
      "county": "Hardee County"
    },
    {
      "FIPS": 12017.0,
      "county": "Citrus County"
    },
    {
      "FIPS": 12013.0,
      "county": "Calhoun County"
    },
    {
      "FIPS": 12007.0,
      "county": "Bradford County"
    },
    {
      "FIPS": 12083.0,
      "county": "Marion County"
    },
    {
      "FIPS": 12133.0,
      "county": "Washington County"
    },
    {
      "FIPS": 12127.0,
      "county": "Volusia County"
    },
    {
      "FIPS": 12041.0,
      "county": "Gilchrist County"
    },
    {
      "FIPS": 12043.0,
      "county": "Glades County"
    },
    {
      "FIPS": 12109.0,
      "county": "St Johns County"
    },
    {
      "FIPS": 12027.0,
      "county": "Desoto County"
    },
    {
      "FIPS": 12011.0,
      "county": "Broward County"
    },
    {
      "FIPS": 12089.0,
      "county": "Nassau County"
    },
    {
      "FIPS": 12086.0,
      "county": "Miami-Dade County"
    },
    {
      "FIPS": 12103.0,
      "county": "Pinellas County"
    },
    {
      "FIPS": 12035.0,
      "county": "Flagler County"
    },
    {
      "FIPS": 12115.0,
      "county": "Sarasota County"
    },
    {
      "FIPS": 12099.0,
      "county": "Palm Beach County"
    },
    {
      "FIPS": 12053.0,
      "county": "Hernando County"
    },
    {
      "FIPS": 12033.0,
      "county": "Escambia County"
    },
    {
      "FIPS": 12021.0,
      "county": "Collier County"
    },
    {
      "FIPS": 12001.0,
      "county": "Alachua County"
    },
    {
      "FIPS": 12123.0,
      "county": "Taylor County"
    },
    {
      "FIPS": 12051.0,
      "county": "Hendry County"
    },
    {
      "FIPS": 12057.0,
      "county": "Hillsborough County"
    },
    {
      "FIPS": 12009.0,
      "county": "Brevard County"
    },
    {
      "FIPS": 12091.0,
      "county": "Okaloosa County"
    },
    {
      "FIPS": 12121.0,
      "county": "Suwannee County"
    },
    {
      "FIPS": 12077.0,
      "county": "Liberty County"
    },
    {
      "FIPS": 12081.0,
      "county": "Manatee County"
    },
    {
      "FIPS": 12071.0,
      "county": "Lee County"
    },
    {
      "FIPS": 12029.0,
      "county": "Dixie County"
    },
    {
      "FIPS": 12031.0,
      "county": "Duval County"
    },
    {
      "FIPS": 12125.0,
      "county": "Union County"
    },
    {
      "FIPS": 12045.0,
      "county": "Gulf County"
    },
    {
      "FIPS": 12019.0,
      "county": "Clay County"
    },
    {
      "FIPS": 12075.0,
      "county": "Levy County"
    },
    {
      "FIPS": 12105.0,
      "county": "Polk County"
    },
    {
      "FIPS": 12005.0,
      "county": "Bay County"
    },
    {
      "FIPS": 12003.0,
      "county": "Baker County"
    },
    {
      "FIPS": 12069.0,
      "county": "Lake County"
    },
    {
      "FIPS": 12073.0,
      "county": "Leon County"
    },
    {
      "FIPS": 12101.0,
      "county": "Pasco County"
    }
  ],
  "GA": [
    {
      "FIPS": 13261.0,
      "county": "Sumter County"
    },
    {
      "FIPS": 13071.0,
      "county": "Colquitt County"
    },
    {
      "FIPS": 13117.0,
      "county": "Forsyth County"
    },
    {
      "FIPS": 13085.0,
      "county": "Dawson County"
    },
    {
      "FIPS": 13207.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 13037.0,
      "county": "Calhoun County"
    },
    {
      "FIPS": 13157.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 13239.0,
      "county": "Quitman County"
    },
    {
      "FIPS": 13245.0,
      "county": "Richmond County"
    },
    {
      "FIPS": 13307.0,
      "county": "Webster County"
    },
    {
      "FIPS": 13209.0,
      "county": "Montgomery County"
    },
    {
      "FIPS": 13101.0,
      "county": "Echols County"
    },
    {
      "FIPS": 13195.0,
      "county": "Madison County"
    },
    {
      "FIPS": 13259.0,
      "county": "Stewart County"
    },
    {
      "FIPS": 13125.0,
      "county": "Glascock County"
    },
    {
      "FIPS": 13287.0,
      "county": "Turner County"
    },
    {
      "FIPS": 13119.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 13027.0,
      "county": "Brooks County"
    },
    {
      "FIPS": 13023.0,
      "county": "Bleckley County"
    },
    {
      "FIPS": 13047.0,
      "county": "Catoosa County"
    },
    {
      "FIPS": 13161.0,
      "county": "Jeff Davis County"
    },
    {
      "FIPS": 13191.0,
      "county": "McIntosh County"
    },
    {
      "FIPS": 13315.0,
      "county": "Wilcox County"
    },
    {
      "FIPS": 13105.0,
      "county": "Elbert County"
    },
    {
      "FIPS": 13255.0,
      "county": "Spalding County"
    },
    {
      "FIPS": 13235.0,
      "county": "Pulaski County"
    },
    {
      "FIPS": 13199.0,
      "county": "Meriwether County"
    },
    {
      "FIPS": 13317.0,
      "county": "Wilkes County"
    },
    {
      "FIPS": 13313.0,
      "county": "Whitfield County"
    },
    {
      "FIPS": 13309.0,
      "county": "Wheeler County"
    },
    {
      "FIPS": 13297.0,
      "county": "Walton County"
    },
    {
      "FIPS": 13295.0,
      "county": "Walker County"
    },
    {
      "FIPS": 13289.0,
      "county": "Twiggs County"
    },
    {
      "FIPS": 13279.0,
      "county": "Toombs County"
    },
    {
      "FIPS": 13273.0,
      "county": "Terrell County"
    },
    {
      "FIPS": 13271.0,
      "county": "Telfair County"
    },
    {
      "FIPS": 13267.0,
      "county": "Tattnall County"
    },
    {
      "FIPS": 13301.0,
      "county": "Warren County"
    },
    {
      "FIPS": 13253.0,
      "county": "Seminole County"
    },
    {
      "FIPS": 13237.0,
      "county": "Putnam County"
    },
    {
      "FIPS": 13219.0,
      "county": "Oconee County"
    },
    {
      "FIPS": 13213.0,
      "county": "Murray County"
    },
    {
      "FIPS": 13201.0,
      "county": "Miller County"
    },
    {
      "FIPS": 13197.0,
      "county": "Marion County"
    },
    {
      "FIPS": 13181.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 13049.0,
      "county": "Charlton County"
    },
    {
      "FIPS": 13165.0,
      "county": "Jenkins County"
    },
    {
      "FIPS": 13163.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 13243.0,
      "county": "Randolph County"
    },
    {
      "FIPS": 13145.0,
      "county": "Harris County"
    },
    {
      "FIPS": 13283.0,
      "county": "Treutlen County"
    },
    {
      "FIPS": 13143.0,
      "county": "Haralson County"
    },
    {
      "FIPS": 13137.0,
      "county": "Habersham County"
    },
    {
      "FIPS": 13133.0,
      "county": "Greene County"
    },
    {
      "FIPS": 13129.0,
      "county": "Gordon County"
    },
    {
      "FIPS": 13097.0,
      "county": "Douglas County"
    },
    {
      "FIPS": 13123.0,
      "county": "Gilmer County"
    },
    {
      "FIPS": 13107.0,
      "county": "Emanuel County"
    },
    {
      "FIPS": 13103.0,
      "county": "Effingham County"
    },
    {
      "FIPS": 13095.0,
      "county": "Dougherty County"
    },
    {
      "FIPS": 13079.0,
      "county": "Crawford County"
    },
    {
      "FIPS": 13251.0,
      "county": "Screven County"
    },
    {
      "FIPS": 13073.0,
      "county": "Columbia County"
    },
    {
      "FIPS": 13043.0,
      "county": "Candler County"
    },
    {
      "FIPS": 13039.0,
      "county": "Camden County"
    },
    {
      "FIPS": 13211.0,
      "county": "Morgan County"
    },
    {
      "FIPS": 13025.0,
      "county": "Brantley County"
    },
    {
      "FIPS": 13229.0,
      "county": "Pierce County"
    },
    {
      "FIPS": 13173.0,
      "county": "Lanier County"
    },
    {
      "FIPS": 13055.0,
      "county": "Chattooga County"
    },
    {
      "FIPS": 13077.0,
      "county": "Coweta County"
    },
    {
      "FIPS": 13019.0,
      "county": "Berrien County"
    },
    {
      "FIPS": 13159.0,
      "county": "Jasper County"
    },
    {
      "FIPS": 13269.0,
      "county": "Taylor County"
    },
    {
      "FIPS": 13257.0,
      "county": "Stephens County"
    },
    {
      "FIPS": 13059.0,
      "county": "Clarke County"
    },
    {
      "FIPS": 13167.0,
      "county": "Johnson County"
    },
    {
      "FIPS": 13319.0,
      "county": "Wilkinson County"
    },
    {
      "FIPS": 13205.0,
      "county": "Mitchell County"
    },
    {
      "FIPS": 13187.0,
      "county": "Lumpkin County"
    },
    {
      "FIPS": 13265.0,
      "county": "Taliaferro County"
    },
    {
      "FIPS": 13001.0,
      "county": "Appling County"
    },
    {
      "FIPS": 13051.0,
      "county": "Chatham County"
    },
    {
      "FIPS": 13141.0,
      "county": "Hancock County"
    },
    {
      "FIPS": 13009.0,
      "county": "Baldwin County"
    },
    {
      "FIPS": 13017.0,
      "county": "Ben Hill County"
    },
    {
      "FIPS": 13221.0,
      "county": "Oglethorpe County"
    },
    {
      "FIPS": 13215.0,
      "county": "Muscogee County"
    },
    {
      "FIPS": 13153.0,
      "county": "Houston County"
    },
    {
      "FIPS": 13135.0,
      "county": "Gwinnett County"
    },
    {
      "FIPS": 13057.0,
      "county": "Cherokee County"
    },
    {
      "FIPS": 13053.0,
      "county": "Chattahoochee County"
    },
    {
      "FIPS": 13185.0,
      "county": "Lowndes County"
    },
    {
      "FIPS": 13179.0,
      "county": "Liberty County"
    },
    {
      "FIPS": 13247.0,
      "county": "Rockdale County"
    },
    {
      "FIPS": 13217.0,
      "county": "Newton County"
    },
    {
      "FIPS": 13249.0,
      "county": "Schley County"
    },
    {
      "FIPS": 13003.0,
      "county": "Atkinson County"
    },
    {
      "FIPS": 13031.0,
      "county": "Bulloch County"
    },
    {
      "FIPS": 13263.0,
      "county": "Talbot County"
    },
    {
      "FIPS": 13189.0,
      "county": "McDuffie County"
    },
    {
      "FIPS": 13063.0,
      "county": "Clayton County"
    },
    {
      "FIPS": 13113.0,
      "county": "Fayette County"
    },
    {
      "FIPS": 13175.0,
      "county": "Laurens County"
    },
    {
      "FIPS": 13065.0,
      "county": "Clinch County"
    },
    {
      "FIPS": 13227.0,
      "county": "Pickens County"
    },
    {
      "FIPS": 13069.0,
      "county": "Coffee County"
    },
    {
      "FIPS": 13045.0,
      "county": "Carroll County"
    },
    {
      "FIPS": 13223.0,
      "county": "Paulding County"
    },
    {
      "FIPS": 13111.0,
      "county": "Fannin County"
    },
    {
      "FIPS": 13303.0,
      "county": "Washington County"
    },
    {
      "FIPS": 13089.0,
      "county": "Dekalb County"
    },
    {
      "FIPS": 13275.0,
      "county": "Thomas County"
    },
    {
      "FIPS": 13121.0,
      "county": "Fulton County"
    },
    {
      "FIPS": 13087.0,
      "county": "Decatur County"
    },
    {
      "FIPS": 13013.0,
      "county": "Barrow County"
    },
    {
      "FIPS": 13193.0,
      "county": "Macon County"
    },
    {
      "FIPS": 13127.0,
      "county": "Glynn County"
    },
    {
      "FIPS": 13131.0,
      "county": "Grady County"
    },
    {
      "FIPS": 13029.0,
      "county": "Bryan County"
    },
    {
      "FIPS": 13171.0,
      "county": "Lamar County"
    },
    {
      "FIPS": 13081.0,
      "county": "Crisp County"
    },
    {
      "FIPS": 13093.0,
      "county": "Dooly County"
    },
    {
      "FIPS": 13099.0,
      "county": "Early County"
    },
    {
      "FIPS": 13021.0,
      "county": "Bibb County"
    },
    {
      "FIPS": 13169.0,
      "county": "Jones County"
    },
    {
      "FIPS": 13005.0,
      "county": "Bacon County"
    },
    {
      "FIPS": 13305.0,
      "county": "Wayne County"
    },
    {
      "FIPS": 13299.0,
      "county": "Ware County"
    },
    {
      "FIPS": 13291.0,
      "county": "Union County"
    },
    {
      "FIPS": 13183.0,
      "county": "Long County"
    },
    {
      "FIPS": 13155.0,
      "county": "Irwin County"
    },
    {
      "FIPS": 13147.0,
      "county": "Hart County"
    },
    {
      "FIPS": 13139.0,
      "county": "Hall County"
    },
    {
      "FIPS": 13075.0,
      "county": "Cook County"
    },
    {
      "FIPS": 13233.0,
      "county": "Polk County"
    },
    {
      "FIPS": 13035.0,
      "county": "Butts County"
    },
    {
      "FIPS": 13033.0,
      "county": "Burke County"
    },
    {
      "FIPS": 13225.0,
      "county": "Peach County"
    },
    {
      "FIPS": 13311.0,
      "county": "White County"
    },
    {
      "FIPS": 13321.0,
      "county": "Worth County"
    },
    {
      "FIPS": 13277.0,
      "county": "Tift County"
    },
    {
      "FIPS": 13151.0,
      "county": "Henry County"
    },
    {
      "FIPS": 13083.0,
      "county": "Dade County"
    },
    {
      "FIPS": 13115.0,
      "county": "Floyd County"
    },
    {
      "FIPS": 13109.0,
      "county": "Evans County"
    },
    {
      "FIPS": 13011.0,
      "county": "Banks County"
    },
    {
      "FIPS": 13281.0,
      "county": "Towns County"
    },
    {
      "FIPS": 13007.0,
      "county": "Baker County"
    },
    {
      "FIPS": 13149.0,
      "county": "Heard County"
    },
    {
      "FIPS": 13061.0,
      "county": "Clay County"
    },
    {
      "FIPS": 13293.0,
      "county": "Upson County"
    },
    {
      "FIPS": 13177.0,
      "county": "Lee County"
    },
    {
      "FIPS": 13091.0,
      "county": "Dodge County"
    },
    {
      "FIPS": 13285.0,
      "county": "Troup County"
    },
    {
      "FIPS": 13241.0,
      "county": "Rabun County"
    },
    {
      "FIPS": 13231.0,
      "county": "Pike County"
    },
    {
      "FIPS": 13067.0,
      "county": "Cobb County"
    }
  ],
  "HI": [
    {
      "FIPS": 15001.0,
      "county": "Hawaii County"
    },
    {
      "FIPS": 15003.0,
      "county": "Honolulu County"
    },
    {
      "FIPS": 15005.0,
      "county": "Kalawao County"
    },
    {
      "FIPS": 15009.0,
      "county": "Maui County"
    },
    {
      "FIPS": 15007.0,
      "county": "Kauai County"
    }
  ],
  "IA": [
    {
      "FIPS": 19193.0,
      "county": "Woodbury County"
    },
    {
      "FIPS": 19079.0,
      "county": "Hamilton County"
    },
    {
      "FIPS": 19035.0,
      "county": "Cherokee County"
    },
    {
      "FIPS": 19183.0,
      "county": "Washington County"
    },
    {
      "FIPS": 19147.0,
      "county": "Palo Alto County"
    },
    {
      "FIPS": 19089.0,
      "county": "Howard County"
    },
    {
      "FIPS": 19115.0,
      "county": "Louisa County"
    },
    {
      "FIPS": 19033.0,
      "county": "Cerro Gordo County"
    },
    {
      "FIPS": 19121.0,
      "county": "Madison County"
    },
    {
      "FIPS": 19191.0,
      "county": "Winneshiek County"
    },
    {
      "FIPS": 19037.0,
      "county": "Chickasaw County"
    },
    {
      "FIPS": 19099.0,
      "county": "Jasper County"
    },
    {
      "FIPS": 19025.0,
      "county": "Calhoun County"
    },
    {
      "FIPS": 19139.0,
      "county": "Muscatine County"
    },
    {
      "FIPS": 19189.0,
      "county": "Winnebago County"
    },
    {
      "FIPS": 19179.0,
      "county": "Wapello County"
    },
    {
      "FIPS": 19165.0,
      "county": "Shelby County"
    },
    {
      "FIPS": 19181.0,
      "county": "Warren County"
    },
    {
      "FIPS": 19137.0,
      "county": "Montgomery County"
    },
    {
      "FIPS": 19133.0,
      "county": "Monona County"
    },
    {
      "FIPS": 19131.0,
      "county": "Mitchell County"
    },
    {
      "FIPS": 19123.0,
      "county": "Mahaska County"
    },
    {
      "FIPS": 19109.0,
      "county": "Kossuth County"
    },
    {
      "FIPS": 19107.0,
      "county": "Keokuk County"
    },
    {
      "FIPS": 19097.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 19091.0,
      "county": "Humboldt County"
    },
    {
      "FIPS": 19083.0,
      "county": "Hardin County"
    },
    {
      "FIPS": 19077.0,
      "county": "Guthrie County"
    },
    {
      "FIPS": 19075.0,
      "county": "Grundy County"
    },
    {
      "FIPS": 19073.0,
      "county": "Greene County"
    },
    {
      "FIPS": 19069.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 19151.0,
      "county": "Pocahontas County"
    },
    {
      "FIPS": 19061.0,
      "county": "Dubuque County"
    },
    {
      "FIPS": 19059.0,
      "county": "Dickinson County"
    },
    {
      "FIPS": 19057.0,
      "county": "Des Moines County"
    },
    {
      "FIPS": 19045.0,
      "county": "Clinton County"
    },
    {
      "FIPS": 19039.0,
      "county": "Clarke County"
    },
    {
      "FIPS": 19023.0,
      "county": "Butler County"
    },
    {
      "FIPS": 19021.0,
      "county": "Buena Vista County"
    },
    {
      "FIPS": 19019.0,
      "county": "Buchanan County"
    },
    {
      "FIPS": 19149.0,
      "county": "Plymouth County"
    },
    {
      "FIPS": 19127.0,
      "county": "Marshall County"
    },
    {
      "FIPS": 19135.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 19143.0,
      "county": "Osceola County"
    },
    {
      "FIPS": 19141.0,
      "county": "Obrien County"
    },
    {
      "FIPS": 19085.0,
      "county": "Harrison County"
    },
    {
      "FIPS": 19187.0,
      "county": "Webster County"
    },
    {
      "FIPS": 19177.0,
      "county": "Van Buren County"
    },
    {
      "FIPS": 19047.0,
      "county": "Crawford County"
    },
    {
      "FIPS": 19101.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 19049.0,
      "county": "Dallas County"
    },
    {
      "FIPS": 19009.0,
      "county": "Audubon County"
    },
    {
      "FIPS": 19157.0,
      "county": "Poweshiek County"
    },
    {
      "FIPS": 19103.0,
      "county": "Johnson County"
    },
    {
      "FIPS": 19005.0,
      "county": "Allamakee County"
    },
    {
      "FIPS": 19013.0,
      "county": "Black Hawk County"
    },
    {
      "FIPS": 19065.0,
      "county": "Fayette County"
    },
    {
      "FIPS": 19007.0,
      "county": "Appanoose County"
    },
    {
      "FIPS": 19055.0,
      "county": "Delaware County"
    },
    {
      "FIPS": 19017.0,
      "county": "Bremer County"
    },
    {
      "FIPS": 19011.0,
      "county": "Benton County"
    },
    {
      "FIPS": 19125.0,
      "county": "Marion County"
    },
    {
      "FIPS": 19155.0,
      "county": "Pottawattamie County"
    },
    {
      "FIPS": 19173.0,
      "county": "Taylor County"
    },
    {
      "FIPS": 19071.0,
      "county": "Fremont County"
    },
    {
      "FIPS": 19053.0,
      "county": "Decatur County"
    },
    {
      "FIPS": 19197.0,
      "county": "Wright County"
    },
    {
      "FIPS": 19081.0,
      "county": "Hancock County"
    },
    {
      "FIPS": 19159.0,
      "county": "Ringgold County"
    },
    {
      "FIPS": 19027.0,
      "county": "Carroll County"
    },
    {
      "FIPS": 19043.0,
      "county": "Clayton County"
    },
    {
      "FIPS": 19129.0,
      "county": "Mills County"
    },
    {
      "FIPS": 19041.0,
      "county": "Clay County"
    },
    {
      "FIPS": 19093.0,
      "county": "Ida County"
    },
    {
      "FIPS": 19195.0,
      "county": "Worth County"
    },
    {
      "FIPS": 19113.0,
      "county": "Linn County"
    },
    {
      "FIPS": 19111.0,
      "county": "Lee County"
    },
    {
      "FIPS": 19119.0,
      "county": "Lyon County"
    },
    {
      "FIPS": 19087.0,
      "county": "Henry County"
    },
    {
      "FIPS": 19051.0,
      "county": "Davis County"
    },
    {
      "FIPS": 19169.0,
      "county": "Story County"
    },
    {
      "FIPS": 19031.0,
      "county": "Cedar County"
    },
    {
      "FIPS": 19029.0,
      "county": "Cass County"
    },
    {
      "FIPS": 19015.0,
      "county": "Boone County"
    },
    {
      "FIPS": 19001.0,
      "county": "Adair County"
    },
    {
      "FIPS": 19095.0,
      "county": "Iowa County"
    },
    {
      "FIPS": 19153.0,
      "county": "Polk County"
    },
    {
      "FIPS": 19145.0,
      "county": "Page County"
    },
    {
      "FIPS": 19067.0,
      "county": "Floyd County"
    },
    {
      "FIPS": 19171.0,
      "county": "Tama County"
    },
    {
      "FIPS": 19063.0,
      "county": "Emmet County"
    },
    {
      "FIPS": 19185.0,
      "county": "Wayne County"
    },
    {
      "FIPS": 19163.0,
      "county": "Scott County"
    },
    {
      "FIPS": 19167.0,
      "county": "Sioux County"
    },
    {
      "FIPS": 19175.0,
      "county": "Union County"
    },
    {
      "FIPS": 19161.0,
      "county": "Sac County"
    },
    {
      "FIPS": 19117.0,
      "county": "Lucas County"
    },
    {
      "FIPS": 19105.0,
      "county": "Jones County"
    },
    {
      "FIPS": 19003.0,
      "county": "Adams County"
    }
  ],
  "ID": [
    {
      "FIPS": 16085.0,
      "county": "Valley County"
    },
    {
      "FIPS": 16039.0,
      "county": "Elmore County"
    },
    {
      "FIPS": 16069.0,
      "county": "Nez Perce County"
    },
    {
      "FIPS": 16065.0,
      "county": "Madison County"
    },
    {
      "FIPS": 16053.0,
      "county": "Jerome County"
    },
    {
      "FIPS": 16051.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 16041.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 16029.0,
      "county": "Caribou County"
    },
    {
      "FIPS": 16083.0,
      "county": "Twin Falls County"
    },
    {
      "FIPS": 16047.0,
      "county": "Gooding County"
    },
    {
      "FIPS": 16031.0,
      "county": "Cassia County"
    },
    {
      "FIPS": 16073.0,
      "county": "Owyhee County"
    },
    {
      "FIPS": 16011.0,
      "county": "Bingham County"
    },
    {
      "FIPS": 16075.0,
      "county": "Payette County"
    },
    {
      "FIPS": 16079.0,
      "county": "Shoshone County"
    },
    {
      "FIPS": 16013.0,
      "county": "Blaine County"
    },
    {
      "FIPS": 16017.0,
      "county": "Bonner County"
    },
    {
      "FIPS": 16063.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 16037.0,
      "county": "Custer County"
    },
    {
      "FIPS": 16071.0,
      "county": "Oneida County"
    },
    {
      "FIPS": 16019.0,
      "county": "Bonneville County"
    },
    {
      "FIPS": 16027.0,
      "county": "Canyon County"
    },
    {
      "FIPS": 16035.0,
      "county": "Clearwater County"
    },
    {
      "FIPS": 16055.0,
      "county": "Kootenai County"
    },
    {
      "FIPS": 16009.0,
      "county": "Benewah County"
    },
    {
      "FIPS": 16021.0,
      "county": "Boundary County"
    },
    {
      "FIPS": 16043.0,
      "county": "Fremont County"
    },
    {
      "FIPS": 16067.0,
      "county": "Minidoka County"
    },
    {
      "FIPS": 16005.0,
      "county": "Bannock County"
    },
    {
      "FIPS": 16087.0,
      "county": "Washington County"
    },
    {
      "FIPS": 16007.0,
      "county": "Bear Lake County"
    },
    {
      "FIPS": 16059.0,
      "county": "Lemhi County"
    },
    {
      "FIPS": 16057.0,
      "county": "Latah County"
    },
    {
      "FIPS": 16045.0,
      "county": "Gem County"
    },
    {
      "FIPS": 16081.0,
      "county": "Teton County"
    },
    {
      "FIPS": 16077.0,
      "county": "Power County"
    },
    {
      "FIPS": 16003.0,
      "county": "Adams County"
    },
    {
      "FIPS": 16025.0,
      "county": "Camas County"
    },
    {
      "FIPS": 16033.0,
      "county": "Clark County"
    },
    {
      "FIPS": 16001.0,
      "county": "Ada County"
    },
    {
      "FIPS": 16049.0,
      "county": "Idaho County"
    },
    {
      "FIPS": 16015.0,
      "county": "Boise County"
    },
    {
      "FIPS": 16061.0,
      "county": "Lewis County"
    },
    {
      "FIPS": 16023.0,
      "county": "Butte County"
    }
  ],
  "IL": [
    {
      "FIPS": 17083.0,
      "county": "Jersey County"
    },
    {
      "FIPS": 17155.0,
      "county": "Putnam County"
    },
    {
      "FIPS": 17037.0,
      "county": "Dekalb County"
    },
    {
      "FIPS": 17153.0,
      "county": "Pulaski County"
    },
    {
      "FIPS": 17043.0,
      "county": "Dupage County"
    },
    {
      "FIPS": 17057.0,
      "county": "Fulton County"
    },
    {
      "FIPS": 17051.0,
      "county": "Fayette County"
    },
    {
      "FIPS": 17055.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 17081.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 17041.0,
      "county": "Douglas County"
    },
    {
      "FIPS": 17135.0,
      "county": "Montgomery County"
    },
    {
      "FIPS": 17133.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 17203.0,
      "county": "Woodford County"
    },
    {
      "FIPS": 17201.0,
      "county": "Winnebago County"
    },
    {
      "FIPS": 17199.0,
      "county": "Williamson County"
    },
    {
      "FIPS": 17183.0,
      "county": "Vermilion County"
    },
    {
      "FIPS": 17157.0,
      "county": "Randolph County"
    },
    {
      "FIPS": 17143.0,
      "county": "Peoria County"
    },
    {
      "FIPS": 17137.0,
      "county": "Morgan County"
    },
    {
      "FIPS": 17113.0,
      "county": "McLean County"
    },
    {
      "FIPS": 17127.0,
      "county": "Massac County"
    },
    {
      "FIPS": 17117.0,
      "county": "Macoupin County"
    },
    {
      "FIPS": 17091.0,
      "county": "Kankakee County"
    },
    {
      "FIPS": 17075.0,
      "county": "Iroquois County"
    },
    {
      "FIPS": 17063.0,
      "county": "Grundy County"
    },
    {
      "FIPS": 17049.0,
      "county": "Effingham County"
    },
    {
      "FIPS": 17047.0,
      "county": "Edwards County"
    },
    {
      "FIPS": 17027.0,
      "county": "Clinton County"
    },
    {
      "FIPS": 17021.0,
      "county": "Christian County"
    },
    {
      "FIPS": 17033.0,
      "county": "Crawford County"
    },
    {
      "FIPS": 17011.0,
      "county": "Bureau County"
    },
    {
      "FIPS": 17003.0,
      "county": "Alexander County"
    },
    {
      "FIPS": 17105.0,
      "county": "Livingston County"
    },
    {
      "FIPS": 17165.0,
      "county": "Saline County"
    },
    {
      "FIPS": 17065.0,
      "county": "Hamilton County"
    },
    {
      "FIPS": 17167.0,
      "county": "Sangamon County"
    },
    {
      "FIPS": 17067.0,
      "county": "Hancock County"
    },
    {
      "FIPS": 17177.0,
      "county": "Stephenson County"
    },
    {
      "FIPS": 17187.0,
      "county": "Warren County"
    },
    {
      "FIPS": 17185.0,
      "county": "Wabash County"
    },
    {
      "FIPS": 17159.0,
      "county": "Richland County"
    },
    {
      "FIPS": 17079.0,
      "county": "Jasper County"
    },
    {
      "FIPS": 17173.0,
      "county": "Shelby County"
    },
    {
      "FIPS": 17109.0,
      "county": "McDonough County"
    },
    {
      "FIPS": 17139.0,
      "county": "Moultrie County"
    },
    {
      "FIPS": 17123.0,
      "county": "Marshall County"
    },
    {
      "FIPS": 17059.0,
      "county": "Gallatin County"
    },
    {
      "FIPS": 17039.0,
      "county": "De Witt County"
    },
    {
      "FIPS": 17099.0,
      "county": "La Salle County"
    },
    {
      "FIPS": 17077.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 17161.0,
      "county": "Rock Island County"
    },
    {
      "FIPS": 17111.0,
      "county": "McHenry County"
    },
    {
      "FIPS": 17131.0,
      "county": "Mercer County"
    },
    {
      "FIPS": 17101.0,
      "county": "Lawrence County"
    },
    {
      "FIPS": 17087.0,
      "county": "Johnson County"
    },
    {
      "FIPS": 17119.0,
      "county": "Madison County"
    },
    {
      "FIPS": 17163.0,
      "county": "St Clair County"
    },
    {
      "FIPS": 17169.0,
      "county": "Schuyler County"
    },
    {
      "FIPS": 17019.0,
      "county": "Champaign County"
    },
    {
      "FIPS": 17121.0,
      "county": "Marion County"
    },
    {
      "FIPS": 17085.0,
      "county": "Jo Daviess County"
    },
    {
      "FIPS": 17093.0,
      "county": "Kendall County"
    },
    {
      "FIPS": 17069.0,
      "county": "Hardin County"
    },
    {
      "FIPS": 17189.0,
      "county": "Washington County"
    },
    {
      "FIPS": 17071.0,
      "county": "Henderson County"
    },
    {
      "FIPS": 17013.0,
      "county": "Calhoun County"
    },
    {
      "FIPS": 17129.0,
      "county": "Menard County"
    },
    {
      "FIPS": 17179.0,
      "county": "Tazewell County"
    },
    {
      "FIPS": 17061.0,
      "county": "Greene County"
    },
    {
      "FIPS": 17035.0,
      "county": "Cumberland County"
    },
    {
      "FIPS": 17195.0,
      "county": "Whiteside County"
    },
    {
      "FIPS": 17015.0,
      "county": "Carroll County"
    },
    {
      "FIPS": 17191.0,
      "county": "Wayne County"
    },
    {
      "FIPS": 17193.0,
      "county": "White County"
    },
    {
      "FIPS": 17103.0,
      "county": "Lee County"
    },
    {
      "FIPS": 17197.0,
      "county": "Will County"
    },
    {
      "FIPS": 17097.0,
      "county": "Lake County"
    },
    {
      "FIPS": 17175.0,
      "county": "Stark County"
    },
    {
      "FIPS": 17149.0,
      "county": "Pike County"
    },
    {
      "FIPS": 17141.0,
      "county": "Ogle County"
    },
    {
      "FIPS": 17053.0,
      "county": "Ford County"
    },
    {
      "FIPS": 17045.0,
      "county": "Edgar County"
    },
    {
      "FIPS": 17029.0,
      "county": "Coles County"
    },
    {
      "FIPS": 17025.0,
      "county": "Clay County"
    },
    {
      "FIPS": 17023.0,
      "county": "Clark County"
    },
    {
      "FIPS": 17181.0,
      "county": "Union County"
    },
    {
      "FIPS": 17017.0,
      "county": "Cass County"
    },
    {
      "FIPS": 17073.0,
      "county": "Henry County"
    },
    {
      "FIPS": 17005.0,
      "county": "Bond County"
    },
    {
      "FIPS": 17009.0,
      "county": "Brown County"
    },
    {
      "FIPS": 17001.0,
      "county": "Adams County"
    },
    {
      "FIPS": 17147.0,
      "county": "Piatt County"
    },
    {
      "FIPS": 17145.0,
      "county": "Perry County"
    },
    {
      "FIPS": 17031.0,
      "county": "Cook County"
    },
    {
      "FIPS": 17125.0,
      "county": "Mason County"
    },
    {
      "FIPS": 17095.0,
      "county": "Knox County"
    },
    {
      "FIPS": 17171.0,
      "county": "Scott County"
    },
    {
      "FIPS": 17089.0,
      "county": "Kane County"
    },
    {
      "FIPS": 17007.0,
      "county": "Boone County"
    },
    {
      "FIPS": 17115.0,
      "county": "Macon County"
    },
    {
      "FIPS": 17151.0,
      "county": "Pope County"
    },
    {
      "FIPS": 17107.0,
      "county": "Logan County"
    },
    {
      "FIPS": 17083.0,
      "county": "Jersey County"
    }
  ],
  "IN": [
    {
      "FIPS": 18169.0,
      "county": "Wabash County"
    },
    {
      "FIPS": 18055.0,
      "county": "Greene County"
    },
    {
      "FIPS": 18029.0,
      "county": "Dearborn County"
    },
    {
      "FIPS": 18183.0,
      "county": "Whitley County"
    },
    {
      "FIPS": 18049.0,
      "county": "Fulton County"
    },
    {
      "FIPS": 18099.0,
      "county": "Marshall County"
    },
    {
      "FIPS": 18175.0,
      "county": "Washington County"
    },
    {
      "FIPS": 18171.0,
      "county": "Warren County"
    },
    {
      "FIPS": 18165.0,
      "county": "Vermillion County"
    },
    {
      "FIPS": 18159.0,
      "county": "Tipton County"
    },
    {
      "FIPS": 18145.0,
      "county": "Shelby County"
    },
    {
      "FIPS": 18005.0,
      "county": "Bartholomew County"
    },
    {
      "FIPS": 18137.0,
      "county": "Ripley County"
    },
    {
      "FIPS": 18131.0,
      "county": "Pulaski County"
    },
    {
      "FIPS": 18109.0,
      "county": "Morgan County"
    },
    {
      "FIPS": 18101.0,
      "county": "Martin County"
    },
    {
      "FIPS": 18095.0,
      "county": "Madison County"
    },
    {
      "FIPS": 18093.0,
      "county": "Lawrence County"
    },
    {
      "FIPS": 18087.0,
      "county": "Lagrange County"
    },
    {
      "FIPS": 18085.0,
      "county": "Kosciusko County"
    },
    {
      "FIPS": 18073.0,
      "county": "Jasper County"
    },
    {
      "FIPS": 18041.0,
      "county": "Fayette County"
    },
    {
      "FIPS": 18097.0,
      "county": "Marion County"
    },
    {
      "FIPS": 18033.0,
      "county": "De Kalb County"
    },
    {
      "FIPS": 18027.0,
      "county": "Daviess County"
    },
    {
      "FIPS": 18025.0,
      "county": "Crawford County"
    },
    {
      "FIPS": 18135.0,
      "county": "Randolph County"
    },
    {
      "FIPS": 18067.0,
      "county": "Howard County"
    },
    {
      "FIPS": 18051.0,
      "county": "Gibson County"
    },
    {
      "FIPS": 18061.0,
      "county": "Harrison County"
    },
    {
      "FIPS": 18059.0,
      "county": "Hancock County"
    },
    {
      "FIPS": 18105.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 18157.0,
      "county": "Tippecanoe County"
    },
    {
      "FIPS": 18035.0,
      "county": "Delaware County"
    },
    {
      "FIPS": 18081.0,
      "county": "Johnson County"
    },
    {
      "FIPS": 18077.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 18149.0,
      "county": "Starke County"
    },
    {
      "FIPS": 18141.0,
      "county": "St Joseph County"
    },
    {
      "FIPS": 18111.0,
      "county": "Newton County"
    },
    {
      "FIPS": 18039.0,
      "county": "Elkhart County"
    },
    {
      "FIPS": 18155.0,
      "county": "Switzerland County"
    },
    {
      "FIPS": 18091.0,
      "county": "La Porte County"
    },
    {
      "FIPS": 18151.0,
      "county": "Steuben County"
    },
    {
      "FIPS": 18015.0,
      "county": "Carroll County"
    },
    {
      "FIPS": 18069.0,
      "county": "Huntington County"
    },
    {
      "FIPS": 18071.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 18047.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 18031.0,
      "county": "Decatur County"
    },
    {
      "FIPS": 18079.0,
      "county": "Jennings County"
    },
    {
      "FIPS": 18153.0,
      "county": "Sullivan County"
    },
    {
      "FIPS": 18147.0,
      "county": "Spencer County"
    },
    {
      "FIPS": 18173.0,
      "county": "Warrick County"
    },
    {
      "FIPS": 18163.0,
      "county": "Vanderburgh County"
    },
    {
      "FIPS": 18127.0,
      "county": "Porter County"
    },
    {
      "FIPS": 18023.0,
      "county": "Clinton County"
    },
    {
      "FIPS": 18057.0,
      "county": "Hamilton County"
    },
    {
      "FIPS": 18063.0,
      "county": "Hendricks County"
    },
    {
      "FIPS": 18133.0,
      "county": "Putnam County"
    },
    {
      "FIPS": 18037.0,
      "county": "Dubois County"
    },
    {
      "FIPS": 18117.0,
      "county": "Orange County"
    },
    {
      "FIPS": 18045.0,
      "county": "Fountain County"
    },
    {
      "FIPS": 18107.0,
      "county": "Montgomery County"
    },
    {
      "FIPS": 18007.0,
      "county": "Benton County"
    },
    {
      "FIPS": 18009.0,
      "county": "Blackford County"
    },
    {
      "FIPS": 18003.0,
      "county": "Allen County"
    },
    {
      "FIPS": 18075.0,
      "county": "Jay County"
    },
    {
      "FIPS": 18181.0,
      "county": "White County"
    },
    {
      "FIPS": 18167.0,
      "county": "Vigo County"
    },
    {
      "FIPS": 18161.0,
      "county": "Union County"
    },
    {
      "FIPS": 18143.0,
      "county": "Scott County"
    },
    {
      "FIPS": 18139.0,
      "county": "Rush County"
    },
    {
      "FIPS": 18129.0,
      "county": "Posey County"
    },
    {
      "FIPS": 18125.0,
      "county": "Pike County"
    },
    {
      "FIPS": 18123.0,
      "county": "Perry County"
    },
    {
      "FIPS": 18121.0,
      "county": "Parke County"
    },
    {
      "FIPS": 18113.0,
      "county": "Noble County"
    },
    {
      "FIPS": 18103.0,
      "county": "Miami County"
    },
    {
      "FIPS": 18089.0,
      "county": "Lake County"
    },
    {
      "FIPS": 18083.0,
      "county": "Knox County"
    },
    {
      "FIPS": 18021.0,
      "county": "Clay County"
    },
    {
      "FIPS": 18019.0,
      "county": "Clark County"
    },
    {
      "FIPS": 18119.0,
      "county": "Owen County"
    },
    {
      "FIPS": 18115.0,
      "county": "Ohio County"
    },
    {
      "FIPS": 18017.0,
      "county": "Cass County"
    },
    {
      "FIPS": 18053.0,
      "county": "Grant County"
    },
    {
      "FIPS": 18065.0,
      "county": "Henry County"
    },
    {
      "FIPS": 18001.0,
      "county": "Adams County"
    },
    {
      "FIPS": 18179.0,
      "county": "Wells County"
    },
    {
      "FIPS": 18011.0,
      "county": "Boone County"
    },
    {
      "FIPS": 18043.0,
      "county": "Floyd County"
    },
    {
      "FIPS": 18013.0,
      "county": "Brown County"
    },
    {
      "FIPS": 18177.0,
      "county": "Wayne County"
    }
  ],
  "KS": [
    {
      "FIPS": 20103.0,
      "county": "Leavenworth County"
    },
    {
      "FIPS": 20053.0,
      "county": "Ellsworth County"
    },
    {
      "FIPS": 20039.0,
      "county": "Decatur County"
    },
    {
      "FIPS": 20209.0,
      "county": "Wyandotte County"
    },
    {
      "FIPS": 20003.0,
      "county": "Anderson County"
    },
    {
      "FIPS": 20207.0,
      "county": "Woodson County"
    },
    {
      "FIPS": 20185.0,
      "county": "Stafford County"
    },
    {
      "FIPS": 20181.0,
      "county": "Sherman County"
    },
    {
      "FIPS": 20145.0,
      "county": "Pawnee County"
    },
    {
      "FIPS": 20023.0,
      "county": "Cheyenne County"
    },
    {
      "FIPS": 20205.0,
      "county": "Wilson County"
    },
    {
      "FIPS": 20197.0,
      "county": "Wabaunsee County"
    },
    {
      "FIPS": 20189.0,
      "county": "Stevens County"
    },
    {
      "FIPS": 20175.0,
      "county": "Seward County"
    },
    {
      "FIPS": 20169.0,
      "county": "Saline County"
    },
    {
      "FIPS": 20167.0,
      "county": "Russell County"
    },
    {
      "FIPS": 20095.0,
      "county": "Kingman County"
    },
    {
      "FIPS": 20149.0,
      "county": "Pottawatomie County"
    },
    {
      "FIPS": 20141.0,
      "county": "Osborne County"
    },
    {
      "FIPS": 20137.0,
      "county": "Norton County"
    },
    {
      "FIPS": 20133.0,
      "county": "Neosho County"
    },
    {
      "FIPS": 20131.0,
      "county": "Nemaha County"
    },
    {
      "FIPS": 20127.0,
      "county": "Morris County"
    },
    {
      "FIPS": 20125.0,
      "county": "Montgomery County"
    },
    {
      "FIPS": 20123.0,
      "county": "Mitchell County"
    },
    {
      "FIPS": 20113.0,
      "county": "McPherson County"
    },
    {
      "FIPS": 20117.0,
      "county": "Marshall County"
    },
    {
      "FIPS": 20115.0,
      "county": "Marion County"
    },
    {
      "FIPS": 20099.0,
      "county": "Labette County"
    },
    {
      "FIPS": 20087.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 20083.0,
      "county": "Hodgeman County"
    },
    {
      "FIPS": 20081.0,
      "county": "Haskell County"
    },
    {
      "FIPS": 20079.0,
      "county": "Harvey County"
    },
    {
      "FIPS": 20073.0,
      "county": "Greenwood County"
    },
    {
      "FIPS": 20071.0,
      "county": "Greeley County"
    },
    {
      "FIPS": 20179.0,
      "county": "Sheridan County"
    },
    {
      "FIPS": 20065.0,
      "county": "Graham County"
    },
    {
      "FIPS": 20059.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 20045.0,
      "county": "Douglas County"
    },
    {
      "FIPS": 20043.0,
      "county": "Doniphan County"
    },
    {
      "FIPS": 20019.0,
      "county": "Chautauqua County"
    },
    {
      "FIPS": 20015.0,
      "county": "Butler County"
    },
    {
      "FIPS": 20007.0,
      "county": "Barber County"
    },
    {
      "FIPS": 20031.0,
      "county": "Coffey County"
    },
    {
      "FIPS": 20011.0,
      "county": "Bourbon County"
    },
    {
      "FIPS": 20157.0,
      "county": "Republic County"
    },
    {
      "FIPS": 20005.0,
      "county": "Atchison County"
    },
    {
      "FIPS": 20047.0,
      "county": "Edwards County"
    },
    {
      "FIPS": 20199.0,
      "county": "Wallace County"
    },
    {
      "FIPS": 20129.0,
      "county": "Morton County"
    },
    {
      "FIPS": 20041.0,
      "county": "Dickinson County"
    },
    {
      "FIPS": 20037.0,
      "county": "Crawford County"
    },
    {
      "FIPS": 20091.0,
      "county": "Johnson County"
    },
    {
      "FIPS": 20077.0,
      "county": "Harper County"
    },
    {
      "FIPS": 20021.0,
      "county": "Cherokee County"
    },
    {
      "FIPS": 20177.0,
      "county": "Shawnee County"
    },
    {
      "FIPS": 20191.0,
      "county": "Sumner County"
    },
    {
      "FIPS": 20143.0,
      "county": "Ottawa County"
    },
    {
      "FIPS": 20201.0,
      "county": "Washington County"
    },
    {
      "FIPS": 20085.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 20089.0,
      "county": "Jewell County"
    },
    {
      "FIPS": 20035.0,
      "county": "Cowley County"
    },
    {
      "FIPS": 20055.0,
      "county": "Finney County"
    },
    {
      "FIPS": 20093.0,
      "county": "Kearny County"
    },
    {
      "FIPS": 20193.0,
      "county": "Thomas County"
    },
    {
      "FIPS": 20147.0,
      "county": "Phillips County"
    },
    {
      "FIPS": 20203.0,
      "county": "Wichita County"
    },
    {
      "FIPS": 20009.0,
      "county": "Barton County"
    },
    {
      "FIPS": 20105.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 20153.0,
      "county": "Rawlins County"
    },
    {
      "FIPS": 20173.0,
      "county": "Sedgwick County"
    },
    {
      "FIPS": 20075.0,
      "county": "Hamilton County"
    },
    {
      "FIPS": 20187.0,
      "county": "Stanton County"
    },
    {
      "FIPS": 20033.0,
      "county": "Comanche County"
    },
    {
      "FIPS": 20109.0,
      "county": "Logan County"
    },
    {
      "FIPS": 20161.0,
      "county": "Riley County"
    },
    {
      "FIPS": 20051.0,
      "county": "Ellis County"
    },
    {
      "FIPS": 20163.0,
      "county": "Rooks County"
    },
    {
      "FIPS": 20159.0,
      "county": "Rice County"
    },
    {
      "FIPS": 20121.0,
      "county": "Miami County"
    },
    {
      "FIPS": 20119.0,
      "county": "Meade County"
    },
    {
      "FIPS": 20107.0,
      "county": "Linn County"
    },
    {
      "FIPS": 20069.0,
      "county": "Gray County"
    },
    {
      "FIPS": 20067.0,
      "county": "Grant County"
    },
    {
      "FIPS": 20063.0,
      "county": "Gove County"
    },
    {
      "FIPS": 20061.0,
      "county": "Geary County"
    },
    {
      "FIPS": 20057.0,
      "county": "Ford County"
    },
    {
      "FIPS": 20029.0,
      "county": "Cloud County"
    },
    {
      "FIPS": 20013.0,
      "county": "Brown County"
    },
    {
      "FIPS": 20001.0,
      "county": "Allen County"
    },
    {
      "FIPS": 20171.0,
      "county": "Scott County"
    },
    {
      "FIPS": 20165.0,
      "county": "Rush County"
    },
    {
      "FIPS": 20027.0,
      "county": "Clay County"
    },
    {
      "FIPS": 20101.0,
      "county": "Lane County"
    },
    {
      "FIPS": 20155.0,
      "county": "Reno County"
    },
    {
      "FIPS": 20135.0,
      "county": "Ness County"
    },
    {
      "FIPS": 20151.0,
      "county": "Pratt County"
    },
    {
      "FIPS": 20195.0,
      "county": "Trego County"
    },
    {
      "FIPS": 20017.0,
      "county": "Chase County"
    },
    {
      "FIPS": 20183.0,
      "county": "Smith County"
    },
    {
      "FIPS": 20025.0,
      "county": "Clark County"
    },
    {
      "FIPS": 20049.0,
      "county": "Elk County"
    },
    {
      "FIPS": 20097.0,
      "county": "Kiowa County"
    },
    {
      "FIPS": 20111.0,
      "county": "Lyon County"
    },
    {
      "FIPS": 20139.0,
      "county": "Osage County"
    },
    {
      "FIPS": 20103.0,
      "county": "Leavenworth County"
    }
  ],
  "KY": [
    {
      "FIPS": 21085.0,
      "county": "Grayson County"
    },
    {
      "FIPS": 21083.0,
      "county": "Graves County"
    },
    {
      "FIPS": 21175.0,
      "county": "Morgan County"
    },
    {
      "FIPS": 21035.0,
      "county": "Calloway County"
    },
    {
      "FIPS": 21053.0,
      "county": "Clinton County"
    },
    {
      "FIPS": 21095.0,
      "county": "Harlan County"
    },
    {
      "FIPS": 21153.0,
      "county": "Magoffin County"
    },
    {
      "FIPS": 21059.0,
      "county": "Daviess County"
    },
    {
      "FIPS": 21063.0,
      "county": "Elliott County"
    },
    {
      "FIPS": 21057.0,
      "county": "Cumberland County"
    },
    {
      "FIPS": 21229.0,
      "county": "Washington County"
    },
    {
      "FIPS": 21223.0,
      "county": "Trimble County"
    },
    {
      "FIPS": 21217.0,
      "county": "Taylor County"
    },
    {
      "FIPS": 21215.0,
      "county": "Spencer County"
    },
    {
      "FIPS": 21213.0,
      "county": "Simpson County"
    },
    {
      "FIPS": 21211.0,
      "county": "Shelby County"
    },
    {
      "FIPS": 21207.0,
      "county": "Russell County"
    },
    {
      "FIPS": 21203.0,
      "county": "Rockcastle County"
    },
    {
      "FIPS": 21199.0,
      "county": "Pulaski County"
    },
    {
      "FIPS": 21191.0,
      "county": "Pendleton County"
    },
    {
      "FIPS": 21189.0,
      "county": "Owsley County"
    },
    {
      "FIPS": 21185.0,
      "county": "Oldham County"
    },
    {
      "FIPS": 21177.0,
      "county": "Muhlenberg County"
    },
    {
      "FIPS": 21171.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 21167.0,
      "county": "Mercer County"
    },
    {
      "FIPS": 21151.0,
      "county": "Madison County"
    },
    {
      "FIPS": 21109.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 21101.0,
      "county": "Henderson County"
    },
    {
      "FIPS": 21089.0,
      "county": "Greenup County"
    },
    {
      "FIPS": 21179.0,
      "county": "Nelson County"
    },
    {
      "FIPS": 21079.0,
      "county": "Garrard County"
    },
    {
      "FIPS": 21073.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 21069.0,
      "county": "Fleming County"
    },
    {
      "FIPS": 21065.0,
      "county": "Estill County"
    },
    {
      "FIPS": 21061.0,
      "county": "Edmonson County"
    },
    {
      "FIPS": 21047.0,
      "county": "Christian County"
    },
    {
      "FIPS": 21017.0,
      "county": "Bourbon County"
    },
    {
      "FIPS": 21039.0,
      "county": "Carlisle County"
    },
    {
      "FIPS": 21037.0,
      "county": "Campbell County"
    },
    {
      "FIPS": 21029.0,
      "county": "Bullitt County"
    },
    {
      "FIPS": 21027.0,
      "county": "Breckinridge County"
    },
    {
      "FIPS": 21025.0,
      "county": "Breathitt County"
    },
    {
      "FIPS": 21023.0,
      "county": "Bracken County"
    },
    {
      "FIPS": 21009.0,
      "county": "Barren County"
    },
    {
      "FIPS": 21159.0,
      "county": "Martin County"
    },
    {
      "FIPS": 21233.0,
      "county": "Webster County"
    },
    {
      "FIPS": 21093.0,
      "county": "Hardin County"
    },
    {
      "FIPS": 21115.0,
      "county": "Johnson County"
    },
    {
      "FIPS": 21145.0,
      "county": "McCracken County"
    },
    {
      "FIPS": 21125.0,
      "county": "Laurel County"
    },
    {
      "FIPS": 21105.0,
      "county": "Hickman County"
    },
    {
      "FIPS": 21055.0,
      "county": "Crittenden County"
    },
    {
      "FIPS": 21133.0,
      "county": "Letcher County"
    },
    {
      "FIPS": 21155.0,
      "county": "Marion County"
    },
    {
      "FIPS": 21033.0,
      "county": "Caldwell County"
    },
    {
      "FIPS": 21127.0,
      "county": "Lawrence County"
    },
    {
      "FIPS": 21147.0,
      "county": "McCreary County"
    },
    {
      "FIPS": 21137.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 21131.0,
      "county": "Leslie County"
    },
    {
      "FIPS": 21041.0,
      "county": "Carroll County"
    },
    {
      "FIPS": 21235.0,
      "county": "Whitley County"
    },
    {
      "FIPS": 21157.0,
      "county": "Marshall County"
    },
    {
      "FIPS": 21077.0,
      "county": "Gallatin County"
    },
    {
      "FIPS": 21165.0,
      "county": "Menifee County"
    },
    {
      "FIPS": 21043.0,
      "county": "Carter County"
    },
    {
      "FIPS": 21169.0,
      "county": "Metcalfe County"
    },
    {
      "FIPS": 21107.0,
      "county": "Hopkins County"
    },
    {
      "FIPS": 21227.0,
      "county": "Warren County"
    },
    {
      "FIPS": 21117.0,
      "county": "Kenton County"
    },
    {
      "FIPS": 21067.0,
      "county": "Fayette County"
    },
    {
      "FIPS": 21111.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 21075.0,
      "county": "Fulton County"
    },
    {
      "FIPS": 21201.0,
      "county": "Robertson County"
    },
    {
      "FIPS": 21239.0,
      "county": "Woodford County"
    },
    {
      "FIPS": 21149.0,
      "county": "McLean County"
    },
    {
      "FIPS": 21031.0,
      "county": "Butler County"
    },
    {
      "FIPS": 21005.0,
      "county": "Anderson County"
    },
    {
      "FIPS": 21197.0,
      "county": "Powell County"
    },
    {
      "FIPS": 21139.0,
      "county": "Livingston County"
    },
    {
      "FIPS": 21091.0,
      "county": "Hancock County"
    },
    {
      "FIPS": 21097.0,
      "county": "Harrison County"
    },
    {
      "FIPS": 21173.0,
      "county": "Montgomery County"
    },
    {
      "FIPS": 21113.0,
      "county": "Jessamine County"
    },
    {
      "FIPS": 21007.0,
      "county": "Ballard County"
    },
    {
      "FIPS": 21181.0,
      "county": "Nicholas County"
    },
    {
      "FIPS": 21141.0,
      "county": "Logan County"
    },
    {
      "FIPS": 21051.0,
      "county": "Clay County"
    },
    {
      "FIPS": 21219.0,
      "county": "Todd County"
    },
    {
      "FIPS": 21013.0,
      "county": "Bell County"
    },
    {
      "FIPS": 21001.0,
      "county": "Adair County"
    },
    {
      "FIPS": 21237.0,
      "county": "Wolfe County"
    },
    {
      "FIPS": 21121.0,
      "county": "Knox County"
    },
    {
      "FIPS": 21231.0,
      "county": "Wayne County"
    },
    {
      "FIPS": 21221.0,
      "county": "Trigg County"
    },
    {
      "FIPS": 21209.0,
      "county": "Scott County"
    },
    {
      "FIPS": 21193.0,
      "county": "Perry County"
    },
    {
      "FIPS": 21187.0,
      "county": "Owen County"
    },
    {
      "FIPS": 21183.0,
      "county": "Ohio County"
    },
    {
      "FIPS": 21143.0,
      "county": "Lyon County"
    },
    {
      "FIPS": 21129.0,
      "county": "Lee County"
    },
    {
      "FIPS": 21103.0,
      "county": "Henry County"
    },
    {
      "FIPS": 21087.0,
      "county": "Green County"
    },
    {
      "FIPS": 21081.0,
      "county": "Grant County"
    },
    {
      "FIPS": 21049.0,
      "county": "Clark County"
    },
    {
      "FIPS": 21045.0,
      "county": "Casey County"
    },
    {
      "FIPS": 21019.0,
      "county": "Boyd County"
    },
    {
      "FIPS": 21015.0,
      "county": "Boone County"
    },
    {
      "FIPS": 21011.0,
      "county": "Bath County"
    },
    {
      "FIPS": 21123.0,
      "county": "Larue County"
    },
    {
      "FIPS": 21161.0,
      "county": "Mason County"
    },
    {
      "FIPS": 21135.0,
      "county": "Lewis County"
    },
    {
      "FIPS": 21205.0,
      "county": "Rowan County"
    },
    {
      "FIPS": 21119.0,
      "county": "Knott County"
    },
    {
      "FIPS": 21163.0,
      "county": "Meade County"
    },
    {
      "FIPS": 21195.0,
      "county": "Pike County"
    },
    {
      "FIPS": 21225.0,
      "county": "Union County"
    },
    {
      "FIPS": 21003.0,
      "county": "Allen County"
    },
    {
      "FIPS": 21071.0,
      "county": "Floyd County"
    },
    {
      "FIPS": 21099.0,
      "county": "Hart County"
    },
    {
      "FIPS": 21021.0,
      "county": "Boyle County"
    },
    {
      "FIPS": 21085.0,
      "county": "Grayson County"
    }
  ],
  "LA": [
    {
      "FIPS": 22055.0,
      "county": "Lafayette Parish"
    },
    {
      "FIPS": 22001.0,
      "county": "Acadia Parish"
    },
    {
      "FIPS": 22035.0,
      "county": "East Carroll Parish"
    },
    {
      "FIPS": 22103.0,
      "county": "St Tammany Parish"
    },
    {
      "FIPS": 22101.0,
      "county": "St Mary Parish"
    },
    {
      "FIPS": 22085.0,
      "county": "Sabine Parish"
    },
    {
      "FIPS": 22089.0,
      "county": "St Charles Parish"
    },
    {
      "FIPS": 22107.0,
      "county": "Tensas Parish"
    },
    {
      "FIPS": 22121.0,
      "county": "West Baton Rouge Parish"
    },
    {
      "FIPS": 22117.0,
      "county": "Washington Parish"
    },
    {
      "FIPS": 22115.0,
      "county": "Vernon Parish"
    },
    {
      "FIPS": 22113.0,
      "county": "Vermilion Parish"
    },
    {
      "FIPS": 22109.0,
      "county": "Terrebonne Parish"
    },
    {
      "FIPS": 22099.0,
      "county": "St Martin Parish"
    },
    {
      "FIPS": 22097.0,
      "county": "St Landry Parish"
    },
    {
      "FIPS": 22091.0,
      "county": "St Helena Parish"
    },
    {
      "FIPS": 22083.0,
      "county": "Richland Parish"
    },
    {
      "FIPS": 22081.0,
      "county": "Red River Parish"
    },
    {
      "FIPS": 22077.0,
      "county": "Pointe Coupee Parish"
    },
    {
      "FIPS": 22065.0,
      "county": "Madison Parish"
    },
    {
      "FIPS": 22063.0,
      "county": "Livingston Parish"
    },
    {
      "FIPS": 22057.0,
      "county": "Lafourche Parish"
    },
    {
      "FIPS": 22053.0,
      "county": "Jefferson Davis Parish"
    },
    {
      "FIPS": 22049.0,
      "county": "Jackson Parish"
    },
    {
      "FIPS": 22047.0,
      "county": "Iberville Parish"
    },
    {
      "FIPS": 22045.0,
      "county": "Iberia Parish"
    },
    {
      "FIPS": 22041.0,
      "county": "Franklin Parish"
    },
    {
      "FIPS": 22039.0,
      "county": "Evangeline Parish"
    },
    {
      "FIPS": 22037.0,
      "county": "East Feliciana Parish"
    },
    {
      "FIPS": 22031.0,
      "county": "De Soto Parish"
    },
    {
      "FIPS": 22027.0,
      "county": "Claiborne Parish"
    },
    {
      "FIPS": 22123.0,
      "county": "West Carroll Parish"
    },
    {
      "FIPS": 22025.0,
      "county": "Catahoula Parish"
    },
    {
      "FIPS": 22009.0,
      "county": "Avoyelles Parish"
    },
    {
      "FIPS": 22005.0,
      "county": "Ascension Parish"
    },
    {
      "FIPS": 22067.0,
      "county": "Morehouse Parish"
    },
    {
      "FIPS": 22013.0,
      "county": "Bienville Parish"
    },
    {
      "FIPS": 22093.0,
      "county": "St James Parish"
    },
    {
      "FIPS": 22029.0,
      "county": "Concordia Parish"
    },
    {
      "FIPS": 22007.0,
      "county": "Assumption Parish"
    },
    {
      "FIPS": 22069.0,
      "county": "Natchitoches Parish"
    },
    {
      "FIPS": 22087.0,
      "county": "St Bernard Parish"
    },
    {
      "FIPS": 22079.0,
      "county": "Rapides Parish"
    },
    {
      "FIPS": 22075.0,
      "county": "Plaquemines Parish"
    },
    {
      "FIPS": 22125.0,
      "county": "West Feliciana Parish"
    },
    {
      "FIPS": 22119.0,
      "county": "Webster Parish"
    },
    {
      "FIPS": 22021.0,
      "county": "Caldwell Parish"
    },
    {
      "FIPS": 22095.0,
      "county": "St John the Baptist Parish"
    },
    {
      "FIPS": 22015.0,
      "county": "Bossier Parish"
    },
    {
      "FIPS": 22105.0,
      "county": "Tangipahoa Parish"
    },
    {
      "FIPS": 22073.0,
      "county": "Ouachita Parish"
    },
    {
      "FIPS": 22071.0,
      "county": "Orleans Parish"
    },
    {
      "FIPS": 22051.0,
      "county": "Jefferson Parish"
    },
    {
      "FIPS": 22033.0,
      "county": "East Baton Rouge Parish"
    },
    {
      "FIPS": 22059.0,
      "county": "La Salle Parish"
    },
    {
      "FIPS": 22019.0,
      "county": "Calcasieu Parish"
    },
    {
      "FIPS": 22061.0,
      "county": "Lincoln Parish"
    },
    {
      "FIPS": 22011.0,
      "county": "Beauregard Parish"
    },
    {
      "FIPS": 22023.0,
      "county": "Cameron Parish"
    },
    {
      "FIPS": 22017.0,
      "county": "Caddo Parish"
    },
    {
      "FIPS": 22127.0,
      "county": "Winn Parish"
    },
    {
      "FIPS": 22111.0,
      "county": "Union Parish"
    },
    {
      "FIPS": 22043.0,
      "county": "Grant Parish"
    },
    {
      "FIPS": 22003.0,
      "county": "Allen Parish"
    },
    {
      "FIPS": 22055.0,
      "county": "Lafayette Parish"
    },
    {
      "FIPS": 22001.0,
      "county": "Acadia Parish"
    }
  ],
  "MA": [
    {
      "FIPS": 25005.0,
      "county": "Bristol County"
    },
    {
      "FIPS": 25027.0,
      "county": "Worcester County"
    },
    {
      "FIPS": 25003.0,
      "county": "Berkshire County"
    },
    {
      "FIPS": 25023.0,
      "county": "Plymouth County"
    },
    {
      "FIPS": 25015.0,
      "county": "Hampshire County"
    },
    {
      "FIPS": 25001.0,
      "county": "Barnstable County"
    },
    {
      "FIPS": 25019.0,
      "county": "Nantucket County"
    },
    {
      "FIPS": 25013.0,
      "county": "Hampden County"
    },
    {
      "FIPS": 25021.0,
      "county": "Norfolk County"
    },
    {
      "FIPS": 25017.0,
      "county": "Middlesex County"
    },
    {
      "FIPS": 25025.0,
      "county": "Suffolk County"
    },
    {
      "FIPS": 25011.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 25009.0,
      "county": "Essex County"
    },
    {
      "FIPS": 25007.0,
      "county": "Dukes County"
    }
  ],
  "MD": [
    {
      "FIPS": 24047.0,
      "county": "Worcester County"
    },
    {
      "FIPS": 24041.0,
      "county": "Talbot County"
    },
    {
      "FIPS": 24025.0,
      "county": "Harford County"
    },
    {
      "FIPS": 24017.0,
      "county": "Charles County"
    },
    {
      "FIPS": 24011.0,
      "county": "Caroline County"
    },
    {
      "FIPS": 24019.0,
      "county": "Dorchester County"
    },
    {
      "FIPS": 24035.0,
      "county": "Queen Anne's County"
    },
    {
      "FIPS": 24005.0,
      "county": "Baltimore County"
    },
    {
      "FIPS": 24037.0,
      "county": "St Mary's County"
    },
    {
      "FIPS": 24003.0,
      "county": "Anne Arundel County"
    },
    {
      "FIPS": 24031.0,
      "county": "Montgomery County"
    },
    {
      "FIPS": 24013.0,
      "county": "Carroll County"
    },
    {
      "FIPS": 24043.0,
      "county": "Washington County"
    },
    {
      "FIPS": 24033.0,
      "county": "Prince George's County"
    },
    {
      "FIPS": 24027.0,
      "county": "Howard County"
    },
    {
      "FIPS": 24510.0,
      "county": "Baltimore City"
    },
    {
      "FIPS": 24023.0,
      "county": "Garrett County"
    },
    {
      "FIPS": 24021.0,
      "county": "Frederick County"
    },
    {
      "FIPS": 24001.0,
      "county": "Allegany County"
    },
    {
      "FIPS": 24039.0,
      "county": "Somerset County"
    },
    {
      "FIPS": 24009.0,
      "county": "Calvert County"
    },
    {
      "FIPS": 24045.0,
      "county": "Wicomico County"
    },
    {
      "FIPS": 24015.0,
      "county": "Cecil County"
    },
    {
      "FIPS": 24029.0,
      "county": "Kent County"
    }
  ],
  "ME": [
    {
      "FIPS": 23025.0,
      "county": "Somerset County"
    },
    {
      "FIPS": 23029.0,
      "county": "Washington County"
    },
    {
      "FIPS": 23021.0,
      "county": "Piscataquis County"
    },
    {
      "FIPS": 23011.0,
      "county": "Kennebec County"
    },
    {
      "FIPS": 23017.0,
      "county": "Oxford County"
    },
    {
      "FIPS": 23015.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 23009.0,
      "county": "Hancock County"
    },
    {
      "FIPS": 23007.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 23001.0,
      "county": "Androscoggin County"
    },
    {
      "FIPS": 23019.0,
      "county": "Penobscot County"
    },
    {
      "FIPS": 23005.0,
      "county": "Cumberland County"
    },
    {
      "FIPS": 23023.0,
      "county": "Sagadahoc County"
    },
    {
      "FIPS": 23003.0,
      "county": "Aroostook County"
    },
    {
      "FIPS": 23013.0,
      "county": "Knox County"
    },
    {
      "FIPS": 23031.0,
      "county": "York County"
    },
    {
      "FIPS": 23027.0,
      "county": "Waldo County"
    }
  ],
  "MI": [
    {
      "FIPS": 26019.0,
      "county": "Benzie County"
    },
    {
      "FIPS": 26157.0,
      "county": "Tuscola County"
    },
    {
      "FIPS": 26131.0,
      "county": "Ontonagon County"
    },
    {
      "FIPS": 26099.0,
      "county": "Macomb County"
    },
    {
      "FIPS": 26119.0,
      "county": "Montmorency County"
    },
    {
      "FIPS": 26039.0,
      "county": "Crawford County"
    },
    {
      "FIPS": 26005.0,
      "county": "Allegan County"
    },
    {
      "FIPS": 26065.0,
      "county": "Ingham County"
    },
    {
      "FIPS": 26165.0,
      "county": "Wexford County"
    },
    {
      "FIPS": 26159.0,
      "county": "Van Buren County"
    },
    {
      "FIPS": 26149.0,
      "county": "St Joseph County"
    },
    {
      "FIPS": 26153.0,
      "county": "Schoolcraft County"
    },
    {
      "FIPS": 26151.0,
      "county": "Sanilac County"
    },
    {
      "FIPS": 26143.0,
      "county": "Roscommon County"
    },
    {
      "FIPS": 26137.0,
      "county": "Otsego County"
    },
    {
      "FIPS": 26135.0,
      "county": "Oscoda County"
    },
    {
      "FIPS": 26129.0,
      "county": "Ogemaw County"
    },
    {
      "FIPS": 26121.0,
      "county": "Muskegon County"
    },
    {
      "FIPS": 26115.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 26111.0,
      "county": "Midland County"
    },
    {
      "FIPS": 26109.0,
      "county": "Menominee County"
    },
    {
      "FIPS": 26107.0,
      "county": "Mecosta County"
    },
    {
      "FIPS": 26093.0,
      "county": "Livingston County"
    },
    {
      "FIPS": 26091.0,
      "county": "Lenawee County"
    },
    {
      "FIPS": 26089.0,
      "county": "Leelanau County"
    },
    {
      "FIPS": 26087.0,
      "county": "Lapeer County"
    },
    {
      "FIPS": 26079.0,
      "county": "Kalkaska County"
    },
    {
      "FIPS": 26061.0,
      "county": "Houghton County"
    },
    {
      "FIPS": 26051.0,
      "county": "Gladwin County"
    },
    {
      "FIPS": 26043.0,
      "county": "Dickinson County"
    },
    {
      "FIPS": 26031.0,
      "county": "Cheboygan County"
    },
    {
      "FIPS": 26029.0,
      "county": "Charlevoix County"
    },
    {
      "FIPS": 26011.0,
      "county": "Arenac County"
    },
    {
      "FIPS": 26009.0,
      "county": "Antrim County"
    },
    {
      "FIPS": 26097.0,
      "county": "Mackinac County"
    },
    {
      "FIPS": 26103.0,
      "county": "Marquette County"
    },
    {
      "FIPS": 26133.0,
      "county": "Osceola County"
    },
    {
      "FIPS": 26161.0,
      "county": "Washtenaw County"
    },
    {
      "FIPS": 26023.0,
      "county": "Branch County"
    },
    {
      "FIPS": 26013.0,
      "county": "Baraga County"
    },
    {
      "FIPS": 26127.0,
      "county": "Oceana County"
    },
    {
      "FIPS": 26075.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 26147.0,
      "county": "St Clair County"
    },
    {
      "FIPS": 26117.0,
      "county": "Montcalm County"
    },
    {
      "FIPS": 26021.0,
      "county": "Berrien County"
    },
    {
      "FIPS": 26033.0,
      "county": "Chippewa County"
    },
    {
      "FIPS": 26113.0,
      "county": "Missaukee County"
    },
    {
      "FIPS": 26141.0,
      "county": "Presque Isle County"
    },
    {
      "FIPS": 26057.0,
      "county": "Gratiot County"
    },
    {
      "FIPS": 26053.0,
      "county": "Gogebic County"
    },
    {
      "FIPS": 26139.0,
      "county": "Ottawa County"
    },
    {
      "FIPS": 26025.0,
      "county": "Calhoun County"
    },
    {
      "FIPS": 26007.0,
      "county": "Alpena County"
    },
    {
      "FIPS": 26145.0,
      "county": "Saginaw County"
    },
    {
      "FIPS": 26073.0,
      "county": "Isabella County"
    },
    {
      "FIPS": 26049.0,
      "county": "Genesee County"
    },
    {
      "FIPS": 26055.0,
      "county": "Grand Traverse County"
    },
    {
      "FIPS": 26125.0,
      "county": "Oakland County"
    },
    {
      "FIPS": 26123.0,
      "county": "Newaygo County"
    },
    {
      "FIPS": 26077.0,
      "county": "Kalamazoo County"
    },
    {
      "FIPS": 26059.0,
      "county": "Hillsdale County"
    },
    {
      "FIPS": 26037.0,
      "county": "Clinton County"
    },
    {
      "FIPS": 26155.0,
      "county": "Shiawassee County"
    },
    {
      "FIPS": 26001.0,
      "county": "Alcona County"
    },
    {
      "FIPS": 26083.0,
      "county": "Keweenaw County"
    },
    {
      "FIPS": 26101.0,
      "county": "Manistee County"
    },
    {
      "FIPS": 26085.0,
      "county": "Lake County"
    },
    {
      "FIPS": 26081.0,
      "county": "Kent County"
    },
    {
      "FIPS": 26071.0,
      "county": "Iron County"
    },
    {
      "FIPS": 26069.0,
      "county": "Iosco County"
    },
    {
      "FIPS": 26067.0,
      "county": "Ionia County"
    },
    {
      "FIPS": 26063.0,
      "county": "Huron County"
    },
    {
      "FIPS": 26045.0,
      "county": "Eaton County"
    },
    {
      "FIPS": 26035.0,
      "county": "Clare County"
    },
    {
      "FIPS": 26015.0,
      "county": "Barry County"
    },
    {
      "FIPS": 26003.0,
      "county": "Alger County"
    },
    {
      "FIPS": 26017.0,
      "county": "Bay County"
    },
    {
      "FIPS": 26163.0,
      "county": "Wayne County"
    },
    {
      "FIPS": 26027.0,
      "county": "Cass County"
    },
    {
      "FIPS": 26095.0,
      "county": "Luce County"
    },
    {
      "FIPS": 26047.0,
      "county": "Emmet County"
    },
    {
      "FIPS": 26041.0,
      "county": "Delta County"
    },
    {
      "FIPS": 26105.0,
      "county": "Mason County"
    }
  ],
  "MN": [
    {
      "FIPS": 27097.0,
      "county": "Morrison County"
    },
    {
      "FIPS": 27095.0,
      "county": "Mille Lacs County"
    },
    {
      "FIPS": 27011.0,
      "county": "Big Stone County"
    },
    {
      "FIPS": 27001.0,
      "county": "Aitkin County"
    },
    {
      "FIPS": 27017.0,
      "county": "Carlton County"
    },
    {
      "FIPS": 27079.0,
      "county": "Le Sueur County"
    },
    {
      "FIPS": 27089.0,
      "county": "Marshall County"
    },
    {
      "FIPS": 27173.0,
      "county": "Yellow Medicine County"
    },
    {
      "FIPS": 27171.0,
      "county": "Wright County"
    },
    {
      "FIPS": 27169.0,
      "county": "Winona County"
    },
    {
      "FIPS": 27159.0,
      "county": "Wadena County"
    },
    {
      "FIPS": 27147.0,
      "county": "Steele County"
    },
    {
      "FIPS": 27117.0,
      "county": "Pipestone County"
    },
    {
      "FIPS": 27113.0,
      "county": "Pennington County"
    },
    {
      "FIPS": 27111.0,
      "county": "Otter Tail County"
    },
    {
      "FIPS": 27101.0,
      "county": "Murray County"
    },
    {
      "FIPS": 27087.0,
      "county": "Mahnomen County"
    },
    {
      "FIPS": 27081.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 27069.0,
      "county": "Kittson County"
    },
    {
      "FIPS": 27067.0,
      "county": "Kandiyohi County"
    },
    {
      "FIPS": 27055.0,
      "county": "Houston County"
    },
    {
      "FIPS": 27049.0,
      "county": "Goodhue County"
    },
    {
      "FIPS": 27043.0,
      "county": "Faribault County"
    },
    {
      "FIPS": 27007.0,
      "county": "Beltrami County"
    },
    {
      "FIPS": 27053.0,
      "county": "Hennepin County"
    },
    {
      "FIPS": 27129.0,
      "county": "Renville County"
    },
    {
      "FIPS": 27107.0,
      "county": "Norman County"
    },
    {
      "FIPS": 27161.0,
      "county": "Waseca County"
    },
    {
      "FIPS": 27025.0,
      "county": "Chisago County"
    },
    {
      "FIPS": 27061.0,
      "county": "Itasca County"
    },
    {
      "FIPS": 27085.0,
      "county": "McLeod County"
    },
    {
      "FIPS": 27145.0,
      "county": "Stearns County"
    },
    {
      "FIPS": 27019.0,
      "county": "Carver County"
    },
    {
      "FIPS": 27047.0,
      "county": "Freeborn County"
    },
    {
      "FIPS": 27041.0,
      "county": "Douglas County"
    },
    {
      "FIPS": 27033.0,
      "county": "Cottonwood County"
    },
    {
      "FIPS": 27023.0,
      "county": "Chippewa County"
    },
    {
      "FIPS": 27013.0,
      "county": "Blue Earth County"
    },
    {
      "FIPS": 27149.0,
      "county": "Stevens County"
    },
    {
      "FIPS": 27005.0,
      "county": "Becker County"
    },
    {
      "FIPS": 27163.0,
      "county": "Washington County"
    },
    {
      "FIPS": 27093.0,
      "county": "Meeker County"
    },
    {
      "FIPS": 27137.0,
      "county": "St Louis County"
    },
    {
      "FIPS": 27123.0,
      "county": "Ramsey County"
    },
    {
      "FIPS": 27109.0,
      "county": "Olmsted County"
    },
    {
      "FIPS": 27127.0,
      "county": "Redwood County"
    },
    {
      "FIPS": 27037.0,
      "county": "Dakota County"
    },
    {
      "FIPS": 27077.0,
      "county": "Lake of the Woods County"
    },
    {
      "FIPS": 27167.0,
      "county": "Wilkin County"
    },
    {
      "FIPS": 27103.0,
      "county": "Nicollet County"
    },
    {
      "FIPS": 27155.0,
      "county": "Traverse County"
    },
    {
      "FIPS": 27105.0,
      "county": "Nobles County"
    },
    {
      "FIPS": 27165.0,
      "county": "Watonwan County"
    },
    {
      "FIPS": 27029.0,
      "county": "Clearwater County"
    },
    {
      "FIPS": 27045.0,
      "county": "Fillmore County"
    },
    {
      "FIPS": 27065.0,
      "county": "Kanabec County"
    },
    {
      "FIPS": 27141.0,
      "county": "Sherburne County"
    },
    {
      "FIPS": 27057.0,
      "county": "Hubbard County"
    },
    {
      "FIPS": 27063.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 27091.0,
      "county": "Martin County"
    },
    {
      "FIPS": 27125.0,
      "county": "Red Lake County"
    },
    {
      "FIPS": 27157.0,
      "county": "Wabasha County"
    },
    {
      "FIPS": 27009.0,
      "county": "Benton County"
    },
    {
      "FIPS": 27143.0,
      "county": "Sibley County"
    },
    {
      "FIPS": 27073.0,
      "county": "Lac Qui Parle County"
    },
    {
      "FIPS": 27059.0,
      "county": "Isanti County"
    },
    {
      "FIPS": 27071.0,
      "county": "Koochiching County"
    },
    {
      "FIPS": 27035.0,
      "county": "Crow Wing County"
    },
    {
      "FIPS": 27135.0,
      "county": "Roseau County"
    },
    {
      "FIPS": 27139.0,
      "county": "Scott County"
    },
    {
      "FIPS": 27119.0,
      "county": "Polk County"
    },
    {
      "FIPS": 27099.0,
      "county": "Mower County"
    },
    {
      "FIPS": 27083.0,
      "county": "Lyon County"
    },
    {
      "FIPS": 27051.0,
      "county": "Grant County"
    },
    {
      "FIPS": 27039.0,
      "county": "Dodge County"
    },
    {
      "FIPS": 27003.0,
      "county": "Anoka County"
    },
    {
      "FIPS": 27031.0,
      "county": "Cook County"
    },
    {
      "FIPS": 27131.0,
      "county": "Rice County"
    },
    {
      "FIPS": 27153.0,
      "county": "Todd County"
    },
    {
      "FIPS": 27133.0,
      "county": "Rock County"
    },
    {
      "FIPS": 27015.0,
      "county": "Brown County"
    },
    {
      "FIPS": 27027.0,
      "county": "Clay County"
    },
    {
      "FIPS": 27151.0,
      "county": "Swift County"
    },
    {
      "FIPS": 27021.0,
      "county": "Cass County"
    },
    {
      "FIPS": 27121.0,
      "county": "Pope County"
    },
    {
      "FIPS": 27115.0,
      "county": "Pine County"
    },
    {
      "FIPS": 27075.0,
      "county": "Lake County"
    },
    {
      "FIPS": 27097.0,
      "county": "Morrison County"
    }
  ],
  "MO": [
    {
      "FIPS": 29067.0,
      "county": "Douglas County"
    },
    {
      "FIPS": 29186.0,
      "county": "Ste Genevieve County"
    },
    {
      "FIPS": 29119.0,
      "county": "McDonald County"
    },
    {
      "FIPS": 29003.0,
      "county": "Andrew County"
    },
    {
      "FIPS": 29225.0,
      "county": "Webster County"
    },
    {
      "FIPS": 29221.0,
      "county": "Washington County"
    },
    {
      "FIPS": 29211.0,
      "county": "Sullivan County"
    },
    {
      "FIPS": 29207.0,
      "county": "Stoddard County"
    },
    {
      "FIPS": 29199.0,
      "county": "Scotland County"
    },
    {
      "FIPS": 29195.0,
      "county": "Saline County"
    },
    {
      "FIPS": 29181.0,
      "county": "Ripley County"
    },
    {
      "FIPS": 29185.0,
      "county": "St Clair County"
    },
    {
      "FIPS": 29175.0,
      "county": "Randolph County"
    },
    {
      "FIPS": 29161.0,
      "county": "Phelps County"
    },
    {
      "FIPS": 29143.0,
      "county": "New Madrid County"
    },
    {
      "FIPS": 29149.0,
      "county": "Oregon County"
    },
    {
      "FIPS": 29147.0,
      "county": "Nodaway County"
    },
    {
      "FIPS": 29141.0,
      "county": "Morgan County"
    },
    {
      "FIPS": 29127.0,
      "county": "Marion County"
    },
    {
      "FIPS": 29133.0,
      "county": "Mississippi County"
    },
    {
      "FIPS": 29131.0,
      "county": "Miller County"
    },
    {
      "FIPS": 29129.0,
      "county": "Mercer County"
    },
    {
      "FIPS": 29123.0,
      "county": "Madison County"
    },
    {
      "FIPS": 29113.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 29101.0,
      "county": "Johnson County"
    },
    {
      "FIPS": 29099.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 29097.0,
      "county": "Jasper County"
    },
    {
      "FIPS": 29091.0,
      "county": "Howell County"
    },
    {
      "FIPS": 29081.0,
      "county": "Harrison County"
    },
    {
      "FIPS": 29085.0,
      "county": "Hickory County"
    },
    {
      "FIPS": 29079.0,
      "county": "Grundy County"
    },
    {
      "FIPS": 29075.0,
      "county": "Gentry County"
    },
    {
      "FIPS": 29073.0,
      "county": "Gasconade County"
    },
    {
      "FIPS": 29069.0,
      "county": "Dunklin County"
    },
    {
      "FIPS": 29061.0,
      "county": "Daviess County"
    },
    {
      "FIPS": 29053.0,
      "county": "Cooper County"
    },
    {
      "FIPS": 29049.0,
      "county": "Clinton County"
    },
    {
      "FIPS": 29043.0,
      "county": "Christian County"
    },
    {
      "FIPS": 29029.0,
      "county": "Camden County"
    },
    {
      "FIPS": 29025.0,
      "county": "Caldwell County"
    },
    {
      "FIPS": 29059.0,
      "county": "Dallas County"
    },
    {
      "FIPS": 29023.0,
      "county": "Butler County"
    },
    {
      "FIPS": 29017.0,
      "county": "Bollinger County"
    },
    {
      "FIPS": 29011.0,
      "county": "Barton County"
    },
    {
      "FIPS": 29095.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 29219.0,
      "county": "Warren County"
    },
    {
      "FIPS": 29105.0,
      "county": "Laclede County"
    },
    {
      "FIPS": 29145.0,
      "county": "Newton County"
    },
    {
      "FIPS": 29055.0,
      "county": "Crawford County"
    },
    {
      "FIPS": 29183.0,
      "county": "St Charles County"
    },
    {
      "FIPS": 29027.0,
      "county": "Callaway County"
    },
    {
      "FIPS": 29229.0,
      "county": "Wright County"
    },
    {
      "FIPS": 29187.0,
      "county": "St Francois County"
    },
    {
      "FIPS": 29071.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 29033.0,
      "county": "Carroll County"
    },
    {
      "FIPS": 29063.0,
      "county": "Dekalb County"
    },
    {
      "FIPS": 29005.0,
      "county": "Atchison County"
    },
    {
      "FIPS": 29171.0,
      "county": "Putnam County"
    },
    {
      "FIPS": 29205.0,
      "county": "Shelby County"
    },
    {
      "FIPS": 29107.0,
      "county": "Lafayette County"
    },
    {
      "FIPS": 29041.0,
      "county": "Chariton County"
    },
    {
      "FIPS": 29139.0,
      "county": "Montgomery County"
    },
    {
      "FIPS": 29117.0,
      "county": "Livingston County"
    },
    {
      "FIPS": 29007.0,
      "county": "Audrain County"
    },
    {
      "FIPS": 29197.0,
      "county": "Schuyler County"
    },
    {
      "FIPS": 29109.0,
      "county": "Lawrence County"
    },
    {
      "FIPS": 29015.0,
      "county": "Benton County"
    },
    {
      "FIPS": 29031.0,
      "county": "Cape Girardeau County"
    },
    {
      "FIPS": 29137.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 29510.0,
      "county": "St Louis City"
    },
    {
      "FIPS": 29021.0,
      "county": "Buchanan County"
    },
    {
      "FIPS": 29189.0,
      "county": "St Louis County"
    },
    {
      "FIPS": 29165.0,
      "county": "Platte County"
    },
    {
      "FIPS": 29169.0,
      "county": "Pulaski County"
    },
    {
      "FIPS": 29159.0,
      "county": "Pettis County"
    },
    {
      "FIPS": 29089.0,
      "county": "Howard County"
    },
    {
      "FIPS": 29217.0,
      "county": "Vernon County"
    },
    {
      "FIPS": 29179.0,
      "county": "Reynolds County"
    },
    {
      "FIPS": 29077.0,
      "county": "Greene County"
    },
    {
      "FIPS": 29135.0,
      "county": "Moniteau County"
    },
    {
      "FIPS": 29155.0,
      "county": "Pemiscot County"
    },
    {
      "FIPS": 29203.0,
      "county": "Shannon County"
    },
    {
      "FIPS": 29035.0,
      "county": "Carter County"
    },
    {
      "FIPS": 29125.0,
      "county": "Maries County"
    },
    {
      "FIPS": 29057.0,
      "county": "Dade County"
    },
    {
      "FIPS": 29153.0,
      "county": "Ozark County"
    },
    {
      "FIPS": 29167.0,
      "county": "Polk County"
    },
    {
      "FIPS": 29065.0,
      "county": "Dent County"
    },
    {
      "FIPS": 29115.0,
      "county": "Linn County"
    },
    {
      "FIPS": 29223.0,
      "county": "Wayne County"
    },
    {
      "FIPS": 29213.0,
      "county": "Taney County"
    },
    {
      "FIPS": 29209.0,
      "county": "Stone County"
    },
    {
      "FIPS": 29201.0,
      "county": "Scott County"
    },
    {
      "FIPS": 29111.0,
      "county": "Lewis County"
    },
    {
      "FIPS": 29093.0,
      "county": "Iron County"
    },
    {
      "FIPS": 29083.0,
      "county": "Henry County"
    },
    {
      "FIPS": 29047.0,
      "county": "Clay County"
    },
    {
      "FIPS": 29013.0,
      "county": "Bates County"
    },
    {
      "FIPS": 29215.0,
      "county": "Texas County"
    },
    {
      "FIPS": 29045.0,
      "county": "Clark County"
    },
    {
      "FIPS": 29009.0,
      "county": "Barry County"
    },
    {
      "FIPS": 29177.0,
      "county": "Ray County"
    },
    {
      "FIPS": 29103.0,
      "county": "Knox County"
    },
    {
      "FIPS": 29037.0,
      "county": "Cass County"
    },
    {
      "FIPS": 29151.0,
      "county": "Osage County"
    },
    {
      "FIPS": 29039.0,
      "county": "Cedar County"
    },
    {
      "FIPS": 29173.0,
      "county": "Ralls County"
    },
    {
      "FIPS": 29001.0,
      "county": "Adair County"
    },
    {
      "FIPS": 29163.0,
      "county": "Pike County"
    },
    {
      "FIPS": 29157.0,
      "county": "Perry County"
    },
    {
      "FIPS": 29121.0,
      "county": "Macon County"
    },
    {
      "FIPS": 29019.0,
      "county": "Boone County"
    },
    {
      "FIPS": 29051.0,
      "county": "Cole County"
    },
    {
      "FIPS": 29227.0,
      "county": "Worth County"
    },
    {
      "FIPS": 29087.0,
      "county": "Holt County"
    }
  ],
  "MS": [
    {
      "FIPS": 28133.0,
      "county": "Sunflower County"
    },
    {
      "FIPS": 28135.0,
      "county": "Tallahatchie County"
    },
    {
      "FIPS": 28117.0,
      "county": "Prentiss County"
    },
    {
      "FIPS": 28089.0,
      "county": "Madison County"
    },
    {
      "FIPS": 28155.0,
      "county": "Webster County"
    },
    {
      "FIPS": 28139.0,
      "county": "Tippah County"
    },
    {
      "FIPS": 28127.0,
      "county": "Simpson County"
    },
    {
      "FIPS": 28121.0,
      "county": "Rankin County"
    },
    {
      "FIPS": 28119.0,
      "county": "Quitman County"
    },
    {
      "FIPS": 28115.0,
      "county": "Pontotoc County"
    },
    {
      "FIPS": 28107.0,
      "county": "Panola County"
    },
    {
      "FIPS": 28105.0,
      "county": "Oktibbeha County"
    },
    {
      "FIPS": 28099.0,
      "county": "Neshoba County"
    },
    {
      "FIPS": 28097.0,
      "county": "Montgomery County"
    },
    {
      "FIPS": 28095.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 28093.0,
      "county": "Marshall County"
    },
    {
      "FIPS": 28087.0,
      "county": "Lowndes County"
    },
    {
      "FIPS": 28085.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 28077.0,
      "county": "Lawrence County"
    },
    {
      "FIPS": 28051.0,
      "county": "Holmes County"
    },
    {
      "FIPS": 28075.0,
      "county": "Lauderdale County"
    },
    {
      "FIPS": 28071.0,
      "county": "Lafayette County"
    },
    {
      "FIPS": 28057.0,
      "county": "Itawamba County"
    },
    {
      "FIPS": 28141.0,
      "county": "Tishomingo County"
    },
    {
      "FIPS": 28043.0,
      "county": "Grenada County"
    },
    {
      "FIPS": 28041.0,
      "county": "Greene County"
    },
    {
      "FIPS": 28037.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 28035.0,
      "county": "Forrest County"
    },
    {
      "FIPS": 28033.0,
      "county": "DeSoto County"
    },
    {
      "FIPS": 28027.0,
      "county": "Coahoma County"
    },
    {
      "FIPS": 28021.0,
      "county": "Claiborne County"
    },
    {
      "FIPS": 28017.0,
      "county": "Chickasaw County"
    },
    {
      "FIPS": 28101.0,
      "county": "Newton County"
    },
    {
      "FIPS": 28055.0,
      "county": "Issaquena County"
    },
    {
      "FIPS": 28023.0,
      "county": "Clarke County"
    },
    {
      "FIPS": 28009.0,
      "county": "Benton County"
    },
    {
      "FIPS": 28161.0,
      "county": "Yalobusha County"
    },
    {
      "FIPS": 28047.0,
      "county": "Harrison County"
    },
    {
      "FIPS": 28059.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 28003.0,
      "county": "Alcorn County"
    },
    {
      "FIPS": 28039.0,
      "county": "George County"
    },
    {
      "FIPS": 28103.0,
      "county": "Noxubee County"
    },
    {
      "FIPS": 28109.0,
      "county": "Pearl River County"
    },
    {
      "FIPS": 28157.0,
      "county": "Wilkinson County"
    },
    {
      "FIPS": 28031.0,
      "county": "Covington County"
    },
    {
      "FIPS": 28065.0,
      "county": "Jefferson Davis County"
    },
    {
      "FIPS": 28063.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 28061.0,
      "county": "Jasper County"
    },
    {
      "FIPS": 28091.0,
      "county": "Marion County"
    },
    {
      "FIPS": 28053.0,
      "county": "Humphreys County"
    },
    {
      "FIPS": 28147.0,
      "county": "Walthall County"
    },
    {
      "FIPS": 28159.0,
      "county": "Winston County"
    },
    {
      "FIPS": 28011.0,
      "county": "Bolivar County"
    },
    {
      "FIPS": 28143.0,
      "county": "Tunica County"
    },
    {
      "FIPS": 28151.0,
      "county": "Washington County"
    },
    {
      "FIPS": 28045.0,
      "county": "Hancock County"
    },
    {
      "FIPS": 28029.0,
      "county": "Copiah County"
    },
    {
      "FIPS": 28019.0,
      "county": "Choctaw County"
    },
    {
      "FIPS": 28069.0,
      "county": "Kemper County"
    },
    {
      "FIPS": 28013.0,
      "county": "Calhoun County"
    },
    {
      "FIPS": 28015.0,
      "county": "Carroll County"
    },
    {
      "FIPS": 28149.0,
      "county": "Warren County"
    },
    {
      "FIPS": 28125.0,
      "county": "Sharkey County"
    },
    {
      "FIPS": 28083.0,
      "county": "Leflore County"
    },
    {
      "FIPS": 28007.0,
      "county": "Attala County"
    },
    {
      "FIPS": 28005.0,
      "county": "Amite County"
    },
    {
      "FIPS": 28067.0,
      "county": "Jones County"
    },
    {
      "FIPS": 28163.0,
      "county": "Yazoo County"
    },
    {
      "FIPS": 28153.0,
      "county": "Wayne County"
    },
    {
      "FIPS": 28137.0,
      "county": "Tate County"
    },
    {
      "FIPS": 28129.0,
      "county": "Smith County"
    },
    {
      "FIPS": 28123.0,
      "county": "Scott County"
    },
    {
      "FIPS": 28081.0,
      "county": "Lee County"
    },
    {
      "FIPS": 28073.0,
      "county": "Lamar County"
    },
    {
      "FIPS": 28001.0,
      "county": "Adams County"
    },
    {
      "FIPS": 28113.0,
      "county": "Pike County"
    },
    {
      "FIPS": 28049.0,
      "county": "Hinds County"
    },
    {
      "FIPS": 28145.0,
      "county": "Union County"
    },
    {
      "FIPS": 28111.0,
      "county": "Perry County"
    },
    {
      "FIPS": 28079.0,
      "county": "Leake County"
    },
    {
      "FIPS": 28025.0,
      "county": "Clay County"
    },
    {
      "FIPS": 28131.0,
      "county": "Stone County"
    }
  ],
  "MT": [
    {
      "FIPS": 30019.0,
      "county": "Daniels County"
    },
    {
      "FIPS": 30057.0,
      "county": "Madison County"
    },
    {
      "FIPS": 30107.0,
      "county": "Wheatland County"
    },
    {
      "FIPS": 30105.0,
      "county": "Valley County"
    },
    {
      "FIPS": 30097.0,
      "county": "Sweet Grass County"
    },
    {
      "FIPS": 30087.0,
      "county": "Rosebud County"
    },
    {
      "FIPS": 30073.0,
      "county": "Pondera County"
    },
    {
      "FIPS": 30071.0,
      "county": "Phillips County"
    },
    {
      "FIPS": 30065.0,
      "county": "Musselshell County"
    },
    {
      "FIPS": 30049.0,
      "county": "Lewis and Clark County"
    },
    {
      "FIPS": 30043.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 30027.0,
      "county": "Fergus County"
    },
    {
      "FIPS": 30021.0,
      "county": "Dawson County"
    },
    {
      "FIPS": 30017.0,
      "county": "Custer County"
    },
    {
      "FIPS": 30015.0,
      "county": "Chouteau County"
    },
    {
      "FIPS": 30091.0,
      "county": "Sheridan County"
    },
    {
      "FIPS": 30009.0,
      "county": "Carbon County"
    },
    {
      "FIPS": 30007.0,
      "county": "Broadwater County"
    },
    {
      "FIPS": 30005.0,
      "county": "Blaine County"
    },
    {
      "FIPS": 30001.0,
      "county": "Beaverhead County"
    },
    {
      "FIPS": 30013.0,
      "county": "Cascade County"
    },
    {
      "FIPS": 30077.0,
      "county": "Powell County"
    },
    {
      "FIPS": 30025.0,
      "county": "Fallon County"
    },
    {
      "FIPS": 30089.0,
      "county": "Sanders County"
    },
    {
      "FIPS": 30103.0,
      "county": "Treasure County"
    },
    {
      "FIPS": 30109.0,
      "county": "Wibaux County"
    },
    {
      "FIPS": 30095.0,
      "county": "Stillwater County"
    },
    {
      "FIPS": 30033.0,
      "county": "Garfield County"
    },
    {
      "FIPS": 30039.0,
      "county": "Granite County"
    },
    {
      "FIPS": 30037.0,
      "county": "Golden Valley County"
    },
    {
      "FIPS": 30081.0,
      "county": "Ravalli County"
    },
    {
      "FIPS": 30069.0,
      "county": "Petroleum County"
    },
    {
      "FIPS": 30085.0,
      "county": "Roosevelt County"
    },
    {
      "FIPS": 30031.0,
      "county": "Gallatin County"
    },
    {
      "FIPS": 30063.0,
      "county": "Missoula County"
    },
    {
      "FIPS": 30093.0,
      "county": "Silver Bow County"
    },
    {
      "FIPS": 30055.0,
      "county": "McCone County"
    },
    {
      "FIPS": 30011.0,
      "county": "Carter County"
    },
    {
      "FIPS": 30051.0,
      "county": "Liberty County"
    },
    {
      "FIPS": 30029.0,
      "county": "Flathead County"
    },
    {
      "FIPS": 30111.0,
      "county": "Yellowstone County"
    },
    {
      "FIPS": 30083.0,
      "county": "Richland County"
    },
    {
      "FIPS": 30075.0,
      "county": "Powder River County"
    },
    {
      "FIPS": 30079.0,
      "county": "Prairie County"
    },
    {
      "FIPS": 30045.0,
      "county": "Judith Basin County"
    },
    {
      "FIPS": 30035.0,
      "county": "Glacier County"
    },
    {
      "FIPS": 30023.0,
      "county": "Deer Lodge County"
    },
    {
      "FIPS": 30061.0,
      "county": "Mineral County"
    },
    {
      "FIPS": 30053.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 30003.0,
      "county": "Big Horn County"
    },
    {
      "FIPS": 30059.0,
      "county": "Meagher County"
    },
    {
      "FIPS": 30067.0,
      "county": "Park County"
    },
    {
      "FIPS": 30101.0,
      "county": "Toole County"
    },
    {
      "FIPS": 30099.0,
      "county": "Teton County"
    },
    {
      "FIPS": 30047.0,
      "county": "Lake County"
    },
    {
      "FIPS": 30041.0,
      "county": "Hill County"
    }
  ],
  "NC": [
    {
      "FIPS": 37063.0,
      "county": "Durham County"
    },
    {
      "FIPS": 37065.0,
      "county": "Edgecombe County"
    },
    {
      "FIPS": 37025.0,
      "county": "Cabarrus County"
    },
    {
      "FIPS": 37071.0,
      "county": "Gaston County"
    },
    {
      "FIPS": 37155.0,
      "county": "Robeson County"
    },
    {
      "FIPS": 37193.0,
      "county": "Wilkes County"
    },
    {
      "FIPS": 37199.0,
      "county": "Yancey County"
    },
    {
      "FIPS": 37189.0,
      "county": "Watauga County"
    },
    {
      "FIPS": 37187.0,
      "county": "Washington County"
    },
    {
      "FIPS": 37037.0,
      "county": "Chatham County"
    },
    {
      "FIPS": 37185.0,
      "county": "Warren County"
    },
    {
      "FIPS": 37169.0,
      "county": "Stokes County"
    },
    {
      "FIPS": 37167.0,
      "county": "Stanly County"
    },
    {
      "FIPS": 37163.0,
      "county": "Sampson County"
    },
    {
      "FIPS": 37157.0,
      "county": "Rockingham County"
    },
    {
      "FIPS": 37141.0,
      "county": "Pender County"
    },
    {
      "FIPS": 37137.0,
      "county": "Pamlico County"
    },
    {
      "FIPS": 37131.0,
      "county": "Northampton County"
    },
    {
      "FIPS": 37081.0,
      "county": "Guilford County"
    },
    {
      "FIPS": 37111.0,
      "county": "McDowell County"
    },
    {
      "FIPS": 37117.0,
      "county": "Martin County"
    },
    {
      "FIPS": 37115.0,
      "county": "Madison County"
    },
    {
      "FIPS": 37107.0,
      "county": "Lenoir County"
    },
    {
      "FIPS": 37099.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 37091.0,
      "county": "Hertford County"
    },
    {
      "FIPS": 37089.0,
      "county": "Henderson County"
    },
    {
      "FIPS": 37079.0,
      "county": "Greene County"
    },
    {
      "FIPS": 37077.0,
      "county": "Granville County"
    },
    {
      "FIPS": 37061.0,
      "county": "Duplin County"
    },
    {
      "FIPS": 37057.0,
      "county": "Davidson County"
    },
    {
      "FIPS": 37051.0,
      "county": "Cumberland County"
    },
    {
      "FIPS": 37049.0,
      "county": "Craven County"
    },
    {
      "FIPS": 37039.0,
      "county": "Cherokee County"
    },
    {
      "FIPS": 37027.0,
      "county": "Caldwell County"
    },
    {
      "FIPS": 37015.0,
      "county": "Bertie County"
    },
    {
      "FIPS": 37013.0,
      "county": "Beaufort County"
    },
    {
      "FIPS": 37005.0,
      "county": "Alleghany County"
    },
    {
      "FIPS": 37003.0,
      "county": "Alexander County"
    },
    {
      "FIPS": 37161.0,
      "county": "Rutherford County"
    },
    {
      "FIPS": 37165.0,
      "county": "Scotland County"
    },
    {
      "FIPS": 37085.0,
      "county": "Harnett County"
    },
    {
      "FIPS": 37197.0,
      "county": "Yadkin County"
    },
    {
      "FIPS": 37021.0,
      "county": "Buncombe County"
    },
    {
      "FIPS": 37033.0,
      "county": "Caswell County"
    },
    {
      "FIPS": 37121.0,
      "county": "Mitchell County"
    },
    {
      "FIPS": 37101.0,
      "county": "Johnston County"
    },
    {
      "FIPS": 37129.0,
      "county": "New Hanover County"
    },
    {
      "FIPS": 37175.0,
      "county": "Transylvania County"
    },
    {
      "FIPS": 37031.0,
      "county": "Carteret County"
    },
    {
      "FIPS": 37177.0,
      "county": "Tyrrell County"
    },
    {
      "FIPS": 37145.0,
      "county": "Person County"
    },
    {
      "FIPS": 37045.0,
      "county": "Cleveland County"
    },
    {
      "FIPS": 37075.0,
      "county": "Graham County"
    },
    {
      "FIPS": 37053.0,
      "county": "Currituck County"
    },
    {
      "FIPS": 37109.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 37047.0,
      "county": "Columbus County"
    },
    {
      "FIPS": 37139.0,
      "county": "Pasquotank County"
    },
    {
      "FIPS": 37001.0,
      "county": "Alamance County"
    },
    {
      "FIPS": 37151.0,
      "county": "Randolph County"
    },
    {
      "FIPS": 37097.0,
      "county": "Iredell County"
    },
    {
      "FIPS": 37143.0,
      "county": "Perquimans County"
    },
    {
      "FIPS": 37067.0,
      "county": "Forsyth County"
    },
    {
      "FIPS": 37087.0,
      "county": "Haywood County"
    },
    {
      "FIPS": 37119.0,
      "county": "Mecklenburg County"
    },
    {
      "FIPS": 37123.0,
      "county": "Montgomery County"
    },
    {
      "FIPS": 37195.0,
      "county": "Wilson County"
    },
    {
      "FIPS": 37153.0,
      "county": "Richmond County"
    },
    {
      "FIPS": 37041.0,
      "county": "Chowan County"
    },
    {
      "FIPS": 37133.0,
      "county": "Onslow County"
    },
    {
      "FIPS": 37017.0,
      "county": "Bladen County"
    },
    {
      "FIPS": 37029.0,
      "county": "Camden County"
    },
    {
      "FIPS": 37035.0,
      "county": "Catawba County"
    },
    {
      "FIPS": 37019.0,
      "county": "Brunswick County"
    },
    {
      "FIPS": 37083.0,
      "county": "Halifax County"
    },
    {
      "FIPS": 37135.0,
      "county": "Orange County"
    },
    {
      "FIPS": 37069.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 37149.0,
      "county": "Polk County"
    },
    {
      "FIPS": 37173.0,
      "county": "Swain County"
    },
    {
      "FIPS": 37125.0,
      "county": "Moore County"
    },
    {
      "FIPS": 37105.0,
      "county": "Lee County"
    },
    {
      "FIPS": 37103.0,
      "county": "Jones County"
    },
    {
      "FIPS": 37055.0,
      "county": "Dare County"
    },
    {
      "FIPS": 37043.0,
      "county": "Clay County"
    },
    {
      "FIPS": 37009.0,
      "county": "Ashe County"
    },
    {
      "FIPS": 37171.0,
      "county": "Surry County"
    },
    {
      "FIPS": 37191.0,
      "county": "Wayne County"
    },
    {
      "FIPS": 37113.0,
      "county": "Macon County"
    },
    {
      "FIPS": 37095.0,
      "county": "Hyde County"
    },
    {
      "FIPS": 37159.0,
      "county": "Rowan County"
    },
    {
      "FIPS": 37181.0,
      "county": "Vance County"
    },
    {
      "FIPS": 37183.0,
      "county": "Wake County"
    },
    {
      "FIPS": 37023.0,
      "county": "Burke County"
    },
    {
      "FIPS": 37059.0,
      "county": "Davie County"
    },
    {
      "FIPS": 37147.0,
      "county": "Pitt County"
    },
    {
      "FIPS": 37127.0,
      "county": "Nash County"
    },
    {
      "FIPS": 37179.0,
      "county": "Union County"
    },
    {
      "FIPS": 37011.0,
      "county": "Avery County"
    },
    {
      "FIPS": 37093.0,
      "county": "Hoke County"
    },
    {
      "FIPS": 37007.0,
      "county": "Anson County"
    },
    {
      "FIPS": 37073.0,
      "county": "Gates County"
    }
  ],
  "ND": [
    {
      "FIPS": 38095.0,
      "county": "Towner County"
    },
    {
      "FIPS": 38077.0,
      "county": "Richland County"
    },
    {
      "FIPS": 38093.0,
      "county": "Stutsman County"
    },
    {
      "FIPS": 38075.0,
      "county": "Renville County"
    },
    {
      "FIPS": 38063.0,
      "county": "Nelson County"
    },
    {
      "FIPS": 38059.0,
      "county": "Morton County"
    },
    {
      "FIPS": 38073.0,
      "county": "Ransom County"
    },
    {
      "FIPS": 38035.0,
      "county": "Grand Forks County"
    },
    {
      "FIPS": 38009.0,
      "county": "Bottineau County"
    },
    {
      "FIPS": 38061.0,
      "county": "Mountrail County"
    },
    {
      "FIPS": 38015.0,
      "county": "Burleigh County"
    },
    {
      "FIPS": 38083.0,
      "county": "Sheridan County"
    },
    {
      "FIPS": 38065.0,
      "county": "Oliver County"
    },
    {
      "FIPS": 38081.0,
      "county": "Sargent County"
    },
    {
      "FIPS": 38105.0,
      "county": "Williams County"
    },
    {
      "FIPS": 38041.0,
      "county": "Hettinger County"
    },
    {
      "FIPS": 38007.0,
      "county": "Billings County"
    },
    {
      "FIPS": 38033.0,
      "county": "Golden Valley County"
    },
    {
      "FIPS": 38019.0,
      "county": "Cavalier County"
    },
    {
      "FIPS": 38057.0,
      "county": "Mercer County"
    },
    {
      "FIPS": 38023.0,
      "county": "Divide County"
    },
    {
      "FIPS": 38021.0,
      "county": "Dickey County"
    },
    {
      "FIPS": 38097.0,
      "county": "Traill County"
    },
    {
      "FIPS": 38031.0,
      "county": "Foster County"
    },
    {
      "FIPS": 38003.0,
      "county": "Barnes County"
    },
    {
      "FIPS": 38079.0,
      "county": "Rolette County"
    },
    {
      "FIPS": 38067.0,
      "county": "Pembina County"
    },
    {
      "FIPS": 38051.0,
      "county": "McIntosh County"
    },
    {
      "FIPS": 38053.0,
      "county": "McKenzie County"
    },
    {
      "FIPS": 38069.0,
      "county": "Pierce County"
    },
    {
      "FIPS": 38071.0,
      "county": "Ramsey County"
    },
    {
      "FIPS": 38091.0,
      "county": "Steele County"
    },
    {
      "FIPS": 38029.0,
      "county": "Emmons County"
    },
    {
      "FIPS": 38005.0,
      "county": "Benson County"
    },
    {
      "FIPS": 38045.0,
      "county": "Lamoure County"
    },
    {
      "FIPS": 38011.0,
      "county": "Bowman County"
    },
    {
      "FIPS": 38039.0,
      "county": "Griggs County"
    },
    {
      "FIPS": 38043.0,
      "county": "Kidder County"
    },
    {
      "FIPS": 38049.0,
      "county": "McHenry County"
    },
    {
      "FIPS": 38055.0,
      "county": "McLean County"
    },
    {
      "FIPS": 38037.0,
      "county": "Grant County"
    },
    {
      "FIPS": 38101.0,
      "county": "Ward County"
    },
    {
      "FIPS": 38013.0,
      "county": "Burke County"
    },
    {
      "FIPS": 38001.0,
      "county": "Adams County"
    },
    {
      "FIPS": 38085.0,
      "county": "Sioux County"
    },
    {
      "FIPS": 38047.0,
      "county": "Logan County"
    },
    {
      "FIPS": 38017.0,
      "county": "Cass County"
    },
    {
      "FIPS": 38099.0,
      "county": "Walsh County"
    },
    {
      "FIPS": 38103.0,
      "county": "Wells County"
    },
    {
      "FIPS": 38089.0,
      "county": "Stark County"
    },
    {
      "FIPS": 38027.0,
      "county": "Eddy County"
    },
    {
      "FIPS": 38025.0,
      "county": "Dunn County"
    },
    {
      "FIPS": 38087.0,
      "county": "Slope County"
    }
  ],
  "NE": [
    {
      "FIPS": 31177.0,
      "county": "Washington County"
    },
    {
      "FIPS": 31091.0,
      "county": "Hooker County"
    },
    {
      "FIPS": 31175.0,
      "county": "Valley County"
    },
    {
      "FIPS": 31137.0,
      "county": "Phelps County"
    },
    {
      "FIPS": 31163.0,
      "county": "Sherman County"
    },
    {
      "FIPS": 31157.0,
      "county": "Scotts Bluff County"
    },
    {
      "FIPS": 31129.0,
      "county": "Nuckolls County"
    },
    {
      "FIPS": 31105.0,
      "county": "Kimball County"
    },
    {
      "FIPS": 31081.0,
      "county": "Hamilton County"
    },
    {
      "FIPS": 31169.0,
      "county": "Thayer County"
    },
    {
      "FIPS": 31041.0,
      "county": "Custer County"
    },
    {
      "FIPS": 31033.0,
      "county": "Cheyenne County"
    },
    {
      "FIPS": 31019.0,
      "county": "Buffalo County"
    },
    {
      "FIPS": 31013.0,
      "county": "Box Butte County"
    },
    {
      "FIPS": 31093.0,
      "county": "Howard County"
    },
    {
      "FIPS": 31155.0,
      "county": "Saunders County"
    },
    {
      "FIPS": 31073.0,
      "county": "Gosper County"
    },
    {
      "FIPS": 31007.0,
      "county": "Banner County"
    },
    {
      "FIPS": 31071.0,
      "county": "Garfield County"
    },
    {
      "FIPS": 31181.0,
      "county": "Webster County"
    },
    {
      "FIPS": 31087.0,
      "county": "Hitchcock County"
    },
    {
      "FIPS": 31121.0,
      "county": "Merrick County"
    },
    {
      "FIPS": 31039.0,
      "county": "Cuming County"
    },
    {
      "FIPS": 31109.0,
      "county": "Lancaster County"
    },
    {
      "FIPS": 31123.0,
      "county": "Morrill County"
    },
    {
      "FIPS": 31059.0,
      "county": "Fillmore County"
    },
    {
      "FIPS": 31095.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 31065.0,
      "county": "Furnas County"
    },
    {
      "FIPS": 31037.0,
      "county": "Colfax County"
    },
    {
      "FIPS": 31145.0,
      "county": "Red Willow County"
    },
    {
      "FIPS": 31117.0,
      "county": "McPherson County"
    },
    {
      "FIPS": 31183.0,
      "county": "Wheeler County"
    },
    {
      "FIPS": 31159.0,
      "county": "Seward County"
    },
    {
      "FIPS": 31077.0,
      "county": "Greeley County"
    },
    {
      "FIPS": 31097.0,
      "county": "Johnson County"
    },
    {
      "FIPS": 31063.0,
      "county": "Frontier County"
    },
    {
      "FIPS": 31127.0,
      "county": "Nemaha County"
    },
    {
      "FIPS": 31005.0,
      "county": "Arthur County"
    },
    {
      "FIPS": 31069.0,
      "county": "Garden County"
    },
    {
      "FIPS": 31111.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 31173.0,
      "county": "Thurston County"
    },
    {
      "FIPS": 31055.0,
      "county": "Douglas County"
    },
    {
      "FIPS": 31043.0,
      "county": "Dakota County"
    },
    {
      "FIPS": 31151.0,
      "county": "Saline County"
    },
    {
      "FIPS": 31141.0,
      "county": "Platte County"
    },
    {
      "FIPS": 31135.0,
      "county": "Perkins County"
    },
    {
      "FIPS": 31003.0,
      "county": "Antelope County"
    },
    {
      "FIPS": 31161.0,
      "county": "Sheridan County"
    },
    {
      "FIPS": 31133.0,
      "county": "Pawnee County"
    },
    {
      "FIPS": 31139.0,
      "county": "Pierce County"
    },
    {
      "FIPS": 31023.0,
      "county": "Butler County"
    },
    {
      "FIPS": 31147.0,
      "county": "Richardson County"
    },
    {
      "FIPS": 31167.0,
      "county": "Stanton County"
    },
    {
      "FIPS": 31103.0,
      "county": "Keya Paha County"
    },
    {
      "FIPS": 31119.0,
      "county": "Madison County"
    },
    {
      "FIPS": 31009.0,
      "county": "Blaine County"
    },
    {
      "FIPS": 31031.0,
      "county": "Cherry County"
    },
    {
      "FIPS": 31099.0,
      "county": "Kearney County"
    },
    {
      "FIPS": 31171.0,
      "county": "Thomas County"
    },
    {
      "FIPS": 31047.0,
      "county": "Dawson County"
    },
    {
      "FIPS": 31083.0,
      "county": "Harlan County"
    },
    {
      "FIPS": 31061.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 31131.0,
      "county": "Otoe County"
    },
    {
      "FIPS": 31125.0,
      "county": "Nance County"
    },
    {
      "FIPS": 31107.0,
      "county": "Knox County"
    },
    {
      "FIPS": 31079.0,
      "county": "Hall County"
    },
    {
      "FIPS": 31067.0,
      "county": "Gage County"
    },
    {
      "FIPS": 31035.0,
      "county": "Clay County"
    },
    {
      "FIPS": 31029.0,
      "county": "Chase County"
    },
    {
      "FIPS": 31027.0,
      "county": "Cedar County"
    },
    {
      "FIPS": 31025.0,
      "county": "Cass County"
    },
    {
      "FIPS": 31021.0,
      "county": "Burt County"
    },
    {
      "FIPS": 31001.0,
      "county": "Adams County"
    },
    {
      "FIPS": 31143.0,
      "county": "Polk County"
    },
    {
      "FIPS": 31179.0,
      "county": "Wayne County"
    },
    {
      "FIPS": 31089.0,
      "county": "Holt County"
    },
    {
      "FIPS": 31011.0,
      "county": "Boone County"
    },
    {
      "FIPS": 31017.0,
      "county": "Brown County"
    },
    {
      "FIPS": 31045.0,
      "county": "Dawes County"
    },
    {
      "FIPS": 31165.0,
      "county": "Sioux County"
    },
    {
      "FIPS": 31015.0,
      "county": "Boyd County"
    },
    {
      "FIPS": 31053.0,
      "county": "Dodge County"
    },
    {
      "FIPS": 31101.0,
      "county": "Keith County"
    },
    {
      "FIPS": 31185.0,
      "county": "York County"
    },
    {
      "FIPS": 31057.0,
      "county": "Dundy County"
    },
    {
      "FIPS": 31153.0,
      "county": "Sarpy County"
    },
    {
      "FIPS": 31149.0,
      "county": "Rock County"
    },
    {
      "FIPS": 31085.0,
      "county": "Hayes County"
    },
    {
      "FIPS": 31113.0,
      "county": "Logan County"
    },
    {
      "FIPS": 31051.0,
      "county": "Dixon County"
    },
    {
      "FIPS": 31049.0,
      "county": "Deuel County"
    },
    {
      "FIPS": 31075.0,
      "county": "Grant County"
    },
    {
      "FIPS": 31115.0,
      "county": "Loup County"
    }
  ],
  "NH": [
    {
      "FIPS": 33015.0,
      "county": "Rockingham County"
    },
    {
      "FIPS": 33019.0,
      "county": "Sullivan County"
    },
    {
      "FIPS": 33013.0,
      "county": "Merrimack County"
    },
    {
      "FIPS": 33001.0,
      "county": "Belknap County"
    },
    {
      "FIPS": 33003.0,
      "county": "Carroll County"
    },
    {
      "FIPS": 33005.0,
      "county": "Cheshire County"
    },
    {
      "FIPS": 33011.0,
      "county": "Hillsborough County"
    },
    {
      "FIPS": 33009.0,
      "county": "Grafton County"
    },
    {
      "FIPS": 33017.0,
      "county": "Strafford County"
    },
    {
      "FIPS": 33007.0,
      "county": "Coos County"
    }
  ],
  "NJ": [
    {
      "FIPS": 34017.0,
      "county": "Hudson County"
    },
    {
      "FIPS": 34019.0,
      "county": "Hunterdon County"
    },
    {
      "FIPS": 34031.0,
      "county": "Passaic County"
    },
    {
      "FIPS": 34011.0,
      "county": "Cumberland County"
    },
    {
      "FIPS": 34023.0,
      "county": "Middlesex County"
    },
    {
      "FIPS": 34003.0,
      "county": "Bergen County"
    },
    {
      "FIPS": 34009.0,
      "county": "Cape May County"
    },
    {
      "FIPS": 34035.0,
      "county": "Somerset County"
    },
    {
      "FIPS": 34021.0,
      "county": "Mercer County"
    },
    {
      "FIPS": 34001.0,
      "county": "Atlantic County"
    },
    {
      "FIPS": 34037.0,
      "county": "Sussex County"
    },
    {
      "FIPS": 34005.0,
      "county": "Burlington County"
    },
    {
      "FIPS": 34015.0,
      "county": "Gloucester County"
    },
    {
      "FIPS": 34027.0,
      "county": "Morris County"
    },
    {
      "FIPS": 34025.0,
      "county": "Monmouth County"
    },
    {
      "FIPS": 34007.0,
      "county": "Camden County"
    },
    {
      "FIPS": 34041.0,
      "county": "Warren County"
    },
    {
      "FIPS": 34029.0,
      "county": "Ocean County"
    },
    {
      "FIPS": 34033.0,
      "county": "Salem County"
    },
    {
      "FIPS": 34013.0,
      "county": "Essex County"
    },
    {
      "FIPS": 34039.0,
      "county": "Union County"
    }
  ],
  "NM": [
    {
      "FIPS": 35005.0,
      "county": "Chaves County"
    },
    {
      "FIPS": 35061.0,
      "county": "Valencia County"
    },
    {
      "FIPS": 35053.0,
      "county": "Socorro County"
    },
    {
      "FIPS": 35051.0,
      "county": "Sierra County"
    },
    {
      "FIPS": 35043.0,
      "county": "Sandoval County"
    },
    {
      "FIPS": 35047.0,
      "county": "San Miguel County"
    },
    {
      "FIPS": 35045.0,
      "county": "San Juan County"
    },
    {
      "FIPS": 35041.0,
      "county": "Roosevelt County"
    },
    {
      "FIPS": 35039.0,
      "county": "Rio Arriba County"
    },
    {
      "FIPS": 35031.0,
      "county": "McKinley County"
    },
    {
      "FIPS": 35028.0,
      "county": "Los Alamos County"
    },
    {
      "FIPS": 35006.0,
      "county": "Cibola County"
    },
    {
      "FIPS": 35057.0,
      "county": "Torrance County"
    },
    {
      "FIPS": 35027.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 35013.0,
      "county": "Dona Ana County"
    },
    {
      "FIPS": 35007.0,
      "county": "Colfax County"
    },
    {
      "FIPS": 35019.0,
      "county": "Guadalupe County"
    },
    {
      "FIPS": 35021.0,
      "county": "Harding County"
    },
    {
      "FIPS": 35001.0,
      "county": "Bernalillo County"
    },
    {
      "FIPS": 35049.0,
      "county": "Santa Fe County"
    },
    {
      "FIPS": 35011.0,
      "county": "De Baca County"
    },
    {
      "FIPS": 35003.0,
      "county": "Catron County"
    },
    {
      "FIPS": 35023.0,
      "county": "Hidalgo County"
    },
    {
      "FIPS": 35055.0,
      "county": "Taos County"
    },
    {
      "FIPS": 35029.0,
      "county": "Luna County"
    },
    {
      "FIPS": 35009.0,
      "county": "Curry County"
    },
    {
      "FIPS": 35025.0,
      "county": "Lea County"
    },
    {
      "FIPS": 35059.0,
      "county": "Union County"
    },
    {
      "FIPS": 35017.0,
      "county": "Grant County"
    },
    {
      "FIPS": 35033.0,
      "county": "Mora County"
    },
    {
      "FIPS": 35015.0,
      "county": "Eddy County"
    },
    {
      "FIPS": 35035.0,
      "county": "Otero County"
    },
    {
      "FIPS": 35037.0,
      "county": "Quay County"
    }
  ],
  "NV": [
    {
      "FIPS": 32033.0,
      "county": "White Pine County"
    },
    {
      "FIPS": 32027.0,
      "county": "Pershing County"
    },
    {
      "FIPS": 32005.0,
      "county": "Douglas County"
    },
    {
      "FIPS": 32001.0,
      "county": "Churchill County"
    },
    {
      "FIPS": 32021.0,
      "county": "Mineral County"
    },
    {
      "FIPS": 32017.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 32009.0,
      "county": "Esmeralda County"
    },
    {
      "FIPS": 32011.0,
      "county": "Eureka County"
    },
    {
      "FIPS": 32031.0,
      "county": "Washoe County"
    },
    {
      "FIPS": 32013.0,
      "county": "Humboldt County"
    },
    {
      "FIPS": 32029.0,
      "county": "Storey County"
    },
    {
      "FIPS": 32015.0,
      "county": "Lander County"
    },
    {
      "FIPS": 32023.0,
      "county": "Nye County"
    },
    {
      "FIPS": 32510.0,
      "county": "Carson City"
    },
    {
      "FIPS": 32003.0,
      "county": "Clark County"
    },
    {
      "FIPS": 32019.0,
      "county": "Lyon County"
    },
    {
      "FIPS": 32007.0,
      "county": "Elko County"
    }
  ],
  "NY": [
    {
      "FIPS": 36091.0,
      "county": "Saratoga County"
    },
    {
      "FIPS": 36121.0,
      "county": "Wyoming County"
    },
    {
      "FIPS": 36115.0,
      "county": "Washington County"
    },
    {
      "FIPS": 36113.0,
      "county": "Warren County"
    },
    {
      "FIPS": 36111.0,
      "county": "Ulster County"
    },
    {
      "FIPS": 36105.0,
      "county": "Sullivan County"
    },
    {
      "FIPS": 36101.0,
      "county": "Steuben County"
    },
    {
      "FIPS": 36089.0,
      "county": "St Lawrence County"
    },
    {
      "FIPS": 36099.0,
      "county": "Seneca County"
    },
    {
      "FIPS": 36093.0,
      "county": "Schenectady County"
    },
    {
      "FIPS": 36079.0,
      "county": "Putnam County"
    },
    {
      "FIPS": 36069.0,
      "county": "Ontario County"
    },
    {
      "FIPS": 36045.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 36041.0,
      "county": "Hamilton County"
    },
    {
      "FIPS": 36039.0,
      "county": "Greene County"
    },
    {
      "FIPS": 36037.0,
      "county": "Genesee County"
    },
    {
      "FIPS": 36035.0,
      "county": "Fulton County"
    },
    {
      "FIPS": 36025.0,
      "county": "Delaware County"
    },
    {
      "FIPS": 36023.0,
      "county": "Cortland County"
    },
    {
      "FIPS": 36021.0,
      "county": "Columbia County"
    },
    {
      "FIPS": 36019.0,
      "county": "Clinton County"
    },
    {
      "FIPS": 36011.0,
      "county": "Cayuga County"
    },
    {
      "FIPS": 36003.0,
      "county": "Allegany County"
    },
    {
      "FIPS": 36097.0,
      "county": "Schuyler County"
    },
    {
      "FIPS": 36051.0,
      "county": "Livingston County"
    },
    {
      "FIPS": 36057.0,
      "county": "Montgomery County"
    },
    {
      "FIPS": 36075.0,
      "county": "Oswego County"
    },
    {
      "FIPS": 36027.0,
      "county": "Dutchess County"
    },
    {
      "FIPS": 36083.0,
      "county": "Rensselaer County"
    },
    {
      "FIPS": 36077.0,
      "county": "Otsego County"
    },
    {
      "FIPS": 36059.0,
      "county": "Nassau County"
    },
    {
      "FIPS": 36067.0,
      "county": "Onondaga County"
    },
    {
      "FIPS": 36063.0,
      "county": "Niagara County"
    },
    {
      "FIPS": 36065.0,
      "county": "Oneida County"
    },
    {
      "FIPS": 36071.0,
      "county": "Orange County"
    },
    {
      "FIPS": 36009.0,
      "county": "Cattaraugus County"
    },
    {
      "FIPS": 36015.0,
      "county": "Chemung County"
    },
    {
      "FIPS": 36103.0,
      "county": "Suffolk County"
    },
    {
      "FIPS": 36043.0,
      "county": "Herkimer County"
    },
    {
      "FIPS": 36055.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 36087.0,
      "county": "Rockland County"
    },
    {
      "FIPS": 36061.0,
      "county": "New York County"
    },
    {
      "FIPS": 36081.0,
      "county": "Queens County"
    },
    {
      "FIPS": 36013.0,
      "county": "Chautauqua County"
    },
    {
      "FIPS": 36007.0,
      "county": "Broome County"
    },
    {
      "FIPS": 36085.0,
      "county": "Richmond County"
    },
    {
      "FIPS": 36109.0,
      "county": "Tompkins County"
    },
    {
      "FIPS": 36053.0,
      "county": "Madison County"
    },
    {
      "FIPS": 36073.0,
      "county": "Orleans County"
    },
    {
      "FIPS": 36001.0,
      "county": "Albany County"
    },
    {
      "FIPS": 36033.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 36095.0,
      "county": "Schoharie County"
    },
    {
      "FIPS": 36017.0,
      "county": "Chenango County"
    },
    {
      "FIPS": 36119.0,
      "county": "Westchester County"
    },
    {
      "FIPS": 36031.0,
      "county": "Essex County"
    },
    {
      "FIPS": 36123.0,
      "county": "Yates County"
    },
    {
      "FIPS": 36117.0,
      "county": "Wayne County"
    },
    {
      "FIPS": 36107.0,
      "county": "Tioga County"
    },
    {
      "FIPS": 36049.0,
      "county": "Lewis County"
    },
    {
      "FIPS": 36005.0,
      "county": "Bronx County"
    },
    {
      "FIPS": 36047.0,
      "county": "Kings County"
    },
    {
      "FIPS": 36029.0,
      "county": "Erie County"
    },
    {
      "FIPS": 36091.0,
      "county": "Saratoga County"
    }
  ],
  "OH": [
    {
      "FIPS": 39065.0,
      "county": "Hardin County"
    },
    {
      "FIPS": 39157.0,
      "county": "Tuscarawas County"
    },
    {
      "FIPS": 39147.0,
      "county": "Seneca County"
    },
    {
      "FIPS": 39137.0,
      "county": "Putnam County"
    },
    {
      "FIPS": 39133.0,
      "county": "Portage County"
    },
    {
      "FIPS": 39123.0,
      "county": "Ottawa County"
    },
    {
      "FIPS": 39117.0,
      "county": "Morrow County"
    },
    {
      "FIPS": 39115.0,
      "county": "Morgan County"
    },
    {
      "FIPS": 39111.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 39107.0,
      "county": "Mercer County"
    },
    {
      "FIPS": 39093.0,
      "county": "Lorain County"
    },
    {
      "FIPS": 39089.0,
      "county": "Licking County"
    },
    {
      "FIPS": 39071.0,
      "county": "Highland County"
    },
    {
      "FIPS": 39055.0,
      "county": "Geauga County"
    },
    {
      "FIPS": 39031.0,
      "county": "Coshocton County"
    },
    {
      "FIPS": 39029.0,
      "county": "Columbiana County"
    },
    {
      "FIPS": 39025.0,
      "county": "Clermont County"
    },
    {
      "FIPS": 39021.0,
      "county": "Champaign County"
    },
    {
      "FIPS": 39019.0,
      "county": "Carroll County"
    },
    {
      "FIPS": 39013.0,
      "county": "Belmont County"
    },
    {
      "FIPS": 39005.0,
      "county": "Ashland County"
    },
    {
      "FIPS": 39161.0,
      "county": "Van Wert County"
    },
    {
      "FIPS": 39129.0,
      "county": "Pickaway County"
    },
    {
      "FIPS": 39125.0,
      "county": "Paulding County"
    },
    {
      "FIPS": 39163.0,
      "county": "Vinton County"
    },
    {
      "FIPS": 39007.0,
      "county": "Ashtabula County"
    },
    {
      "FIPS": 39075.0,
      "county": "Holmes County"
    },
    {
      "FIPS": 39073.0,
      "county": "Hocking County"
    },
    {
      "FIPS": 39079.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 39047.0,
      "county": "Fayette County"
    },
    {
      "FIPS": 39061.0,
      "county": "Hamilton County"
    },
    {
      "FIPS": 39135.0,
      "county": "Preble County"
    },
    {
      "FIPS": 39087.0,
      "county": "Lawrence County"
    },
    {
      "FIPS": 39033.0,
      "county": "Crawford County"
    },
    {
      "FIPS": 39139.0,
      "county": "Richland County"
    },
    {
      "FIPS": 39149.0,
      "county": "Shelby County"
    },
    {
      "FIPS": 39143.0,
      "county": "Sandusky County"
    },
    {
      "FIPS": 39027.0,
      "county": "Clinton County"
    },
    {
      "FIPS": 39099.0,
      "county": "Mahoning County"
    },
    {
      "FIPS": 39113.0,
      "county": "Montgomery County"
    },
    {
      "FIPS": 39063.0,
      "county": "Hancock County"
    },
    {
      "FIPS": 39017.0,
      "county": "Butler County"
    },
    {
      "FIPS": 39081.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 39175.0,
      "county": "Wyandot County"
    },
    {
      "FIPS": 39049.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 39165.0,
      "county": "Warren County"
    },
    {
      "FIPS": 39153.0,
      "county": "Summit County"
    },
    {
      "FIPS": 39119.0,
      "county": "Muskingum County"
    },
    {
      "FIPS": 39053.0,
      "county": "Gallia County"
    },
    {
      "FIPS": 39171.0,
      "county": "Williams County"
    },
    {
      "FIPS": 39057.0,
      "county": "Greene County"
    },
    {
      "FIPS": 39009.0,
      "county": "Athens County"
    },
    {
      "FIPS": 39101.0,
      "county": "Marion County"
    },
    {
      "FIPS": 39155.0,
      "county": "Trumbull County"
    },
    {
      "FIPS": 39011.0,
      "county": "Auglaize County"
    },
    {
      "FIPS": 39097.0,
      "county": "Madison County"
    },
    {
      "FIPS": 39103.0,
      "county": "Medina County"
    },
    {
      "FIPS": 39059.0,
      "county": "Guernsey County"
    },
    {
      "FIPS": 39039.0,
      "county": "Defiance County"
    },
    {
      "FIPS": 39051.0,
      "county": "Fulton County"
    },
    {
      "FIPS": 39045.0,
      "county": "Fairfield County"
    },
    {
      "FIPS": 39167.0,
      "county": "Washington County"
    },
    {
      "FIPS": 39035.0,
      "county": "Cuyahoga County"
    },
    {
      "FIPS": 39145.0,
      "county": "Scioto County"
    },
    {
      "FIPS": 39067.0,
      "county": "Harrison County"
    },
    {
      "FIPS": 39001.0,
      "county": "Adams County"
    },
    {
      "FIPS": 39159.0,
      "county": "Union County"
    },
    {
      "FIPS": 39121.0,
      "county": "Noble County"
    },
    {
      "FIPS": 39105.0,
      "county": "Meigs County"
    },
    {
      "FIPS": 39077.0,
      "county": "Huron County"
    },
    {
      "FIPS": 39043.0,
      "county": "Erie County"
    },
    {
      "FIPS": 39131.0,
      "county": "Pike County"
    },
    {
      "FIPS": 39003.0,
      "county": "Allen County"
    },
    {
      "FIPS": 39091.0,
      "county": "Logan County"
    },
    {
      "FIPS": 39037.0,
      "county": "Darke County"
    },
    {
      "FIPS": 39141.0,
      "county": "Ross County"
    },
    {
      "FIPS": 39109.0,
      "county": "Miami County"
    },
    {
      "FIPS": 39069.0,
      "county": "Henry County"
    },
    {
      "FIPS": 39173.0,
      "county": "Wood County"
    },
    {
      "FIPS": 39083.0,
      "county": "Knox County"
    },
    {
      "FIPS": 39169.0,
      "county": "Wayne County"
    },
    {
      "FIPS": 39151.0,
      "county": "Stark County"
    },
    {
      "FIPS": 39085.0,
      "county": "Lake County"
    },
    {
      "FIPS": 39023.0,
      "county": "Clark County"
    },
    {
      "FIPS": 39095.0,
      "county": "Lucas County"
    },
    {
      "FIPS": 39015.0,
      "county": "Brown County"
    },
    {
      "FIPS": 39127.0,
      "county": "Perry County"
    }
  ],
  "OK": [
    {
      "FIPS": 40141.0,
      "county": "Tillman County"
    },
    {
      "FIPS": 40123.0,
      "county": "Pontotoc County"
    },
    {
      "FIPS": 40117.0,
      "county": "Pawnee County"
    },
    {
      "FIPS": 40107.0,
      "county": "Okfuskee County"
    },
    {
      "FIPS": 40091.0,
      "county": "McIntosh County"
    },
    {
      "FIPS": 40079.0,
      "county": "Le Flore County"
    },
    {
      "FIPS": 40065.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 40057.0,
      "county": "Harmon County"
    },
    {
      "FIPS": 40041.0,
      "county": "Delaware County"
    },
    {
      "FIPS": 40021.0,
      "county": "Cherokee County"
    },
    {
      "FIPS": 40009.0,
      "county": "Beckham County"
    },
    {
      "FIPS": 40039.0,
      "county": "Custer County"
    },
    {
      "FIPS": 40153.0,
      "county": "Woodward County"
    },
    {
      "FIPS": 40069.0,
      "county": "Johnston County"
    },
    {
      "FIPS": 40105.0,
      "county": "Nowata County"
    },
    {
      "FIPS": 40129.0,
      "county": "Roger Mills County"
    },
    {
      "FIPS": 40133.0,
      "county": "Seminole County"
    },
    {
      "FIPS": 40111.0,
      "county": "Okmulgee County"
    },
    {
      "FIPS": 40087.0,
      "county": "McClain County"
    },
    {
      "FIPS": 40089.0,
      "county": "McCurtain County"
    },
    {
      "FIPS": 40147.0,
      "county": "Washington County"
    },
    {
      "FIPS": 40131.0,
      "county": "Rogers County"
    },
    {
      "FIPS": 40145.0,
      "county": "Wagoner County"
    },
    {
      "FIPS": 40059.0,
      "county": "Harper County"
    },
    {
      "FIPS": 40095.0,
      "county": "Marshall County"
    },
    {
      "FIPS": 40101.0,
      "county": "Muskogee County"
    },
    {
      "FIPS": 40115.0,
      "county": "Ottawa County"
    },
    {
      "FIPS": 40049.0,
      "county": "Garvin County"
    },
    {
      "FIPS": 40099.0,
      "county": "Murray County"
    },
    {
      "FIPS": 40027.0,
      "county": "Cleveland County"
    },
    {
      "FIPS": 40061.0,
      "county": "Haskell County"
    },
    {
      "FIPS": 40109.0,
      "county": "Oklahoma County"
    },
    {
      "FIPS": 40019.0,
      "county": "Carter County"
    },
    {
      "FIPS": 40149.0,
      "county": "Washita County"
    },
    {
      "FIPS": 40067.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 40125.0,
      "county": "Pottawatomie County"
    },
    {
      "FIPS": 40023.0,
      "county": "Choctaw County"
    },
    {
      "FIPS": 40077.0,
      "county": "Latimer County"
    },
    {
      "FIPS": 40127.0,
      "county": "Pushmataha County"
    },
    {
      "FIPS": 40073.0,
      "county": "Kingfisher County"
    },
    {
      "FIPS": 40007.0,
      "county": "Beaver County"
    },
    {
      "FIPS": 40047.0,
      "county": "Garfield County"
    },
    {
      "FIPS": 40063.0,
      "county": "Hughes County"
    },
    {
      "FIPS": 40135.0,
      "county": "Sequoyah County"
    },
    {
      "FIPS": 40033.0,
      "county": "Cotton County"
    },
    {
      "FIPS": 40011.0,
      "county": "Blaine County"
    },
    {
      "FIPS": 40025.0,
      "county": "Cimarron County"
    },
    {
      "FIPS": 40121.0,
      "county": "Pittsburg County"
    },
    {
      "FIPS": 40031.0,
      "county": "Comanche County"
    },
    {
      "FIPS": 40003.0,
      "county": "Alfalfa County"
    },
    {
      "FIPS": 40137.0,
      "county": "Stephens County"
    },
    {
      "FIPS": 40081.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 40017.0,
      "county": "Canadian County"
    },
    {
      "FIPS": 40053.0,
      "county": "Grant County"
    },
    {
      "FIPS": 40013.0,
      "county": "Bryan County"
    },
    {
      "FIPS": 40139.0,
      "county": "Texas County"
    },
    {
      "FIPS": 40113.0,
      "county": "Osage County"
    },
    {
      "FIPS": 40093.0,
      "county": "Major County"
    },
    {
      "FIPS": 40085.0,
      "county": "Love County"
    },
    {
      "FIPS": 40051.0,
      "county": "Grady County"
    },
    {
      "FIPS": 40037.0,
      "county": "Creek County"
    },
    {
      "FIPS": 40001.0,
      "county": "Adair County"
    },
    {
      "FIPS": 40083.0,
      "county": "Logan County"
    },
    {
      "FIPS": 40119.0,
      "county": "Payne County"
    },
    {
      "FIPS": 40075.0,
      "county": "Kiowa County"
    },
    {
      "FIPS": 40015.0,
      "county": "Caddo County"
    },
    {
      "FIPS": 40143.0,
      "county": "Tulsa County"
    },
    {
      "FIPS": 40005.0,
      "county": "Atoka County"
    },
    {
      "FIPS": 40035.0,
      "county": "Craig County"
    },
    {
      "FIPS": 40043.0,
      "county": "Dewey County"
    },
    {
      "FIPS": 40055.0,
      "county": "Greer County"
    },
    {
      "FIPS": 40071.0,
      "county": "Kay County"
    },
    {
      "FIPS": 40103.0,
      "county": "Noble County"
    },
    {
      "FIPS": 40151.0,
      "county": "Woods County"
    },
    {
      "FIPS": 40045.0,
      "county": "Ellis County"
    },
    {
      "FIPS": 40029.0,
      "county": "Coal County"
    },
    {
      "FIPS": 40097.0,
      "county": "Mayes County"
    }
  ],
  "OR": [
    {
      "FIPS": 41049.0,
      "county": "Morrow County"
    },
    {
      "FIPS": 41059.0,
      "county": "Umatilla County"
    },
    {
      "FIPS": 41047.0,
      "county": "Marion County"
    },
    {
      "FIPS": 41045.0,
      "county": "Malheur County"
    },
    {
      "FIPS": 41035.0,
      "county": "Klamath County"
    },
    {
      "FIPS": 41033.0,
      "county": "Josephine County"
    },
    {
      "FIPS": 41031.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 41009.0,
      "county": "Columbia County"
    },
    {
      "FIPS": 41003.0,
      "county": "Benton County"
    },
    {
      "FIPS": 41071.0,
      "county": "Yamhill County"
    },
    {
      "FIPS": 41055.0,
      "county": "Sherman County"
    },
    {
      "FIPS": 41041.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 41027.0,
      "county": "Hood River County"
    },
    {
      "FIPS": 41019.0,
      "county": "Douglas County"
    },
    {
      "FIPS": 41057.0,
      "county": "Tillamook County"
    },
    {
      "FIPS": 41025.0,
      "county": "Harney County"
    },
    {
      "FIPS": 41069.0,
      "county": "Wheeler County"
    },
    {
      "FIPS": 41067.0,
      "county": "Washington County"
    },
    {
      "FIPS": 41051.0,
      "county": "Multnomah County"
    },
    {
      "FIPS": 41029.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 41017.0,
      "county": "Deschutes County"
    },
    {
      "FIPS": 41005.0,
      "county": "Clackamas County"
    },
    {
      "FIPS": 41063.0,
      "county": "Wallowa County"
    },
    {
      "FIPS": 41021.0,
      "county": "Gilliam County"
    },
    {
      "FIPS": 41007.0,
      "county": "Clatsop County"
    },
    {
      "FIPS": 41061.0,
      "county": "Union County"
    },
    {
      "FIPS": 41043.0,
      "county": "Linn County"
    },
    {
      "FIPS": 41037.0,
      "county": "Lake County"
    },
    {
      "FIPS": 41023.0,
      "county": "Grant County"
    },
    {
      "FIPS": 41015.0,
      "county": "Curry County"
    },
    {
      "FIPS": 41011.0,
      "county": "Coos County"
    },
    {
      "FIPS": 41053.0,
      "county": "Polk County"
    },
    {
      "FIPS": 41065.0,
      "county": "Wasco County"
    },
    {
      "FIPS": 41013.0,
      "county": "Crook County"
    },
    {
      "FIPS": 41039.0,
      "county": "Lane County"
    },
    {
      "FIPS": 41001.0,
      "county": "Baker County"
    }
  ],
  "PA": [
    {
      "FIPS": 42015.0,
      "county": "Bradford County"
    },
    {
      "FIPS": 42107.0,
      "county": "Schuylkill County"
    },
    {
      "FIPS": 42123.0,
      "county": "Warren County"
    },
    {
      "FIPS": 42105.0,
      "county": "Potter County"
    },
    {
      "FIPS": 42005.0,
      "county": "Armstrong County"
    },
    {
      "FIPS": 42131.0,
      "county": "Wyoming County"
    },
    {
      "FIPS": 42115.0,
      "county": "Susquehanna County"
    },
    {
      "FIPS": 42097.0,
      "county": "Northumberland County"
    },
    {
      "FIPS": 42089.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 42073.0,
      "county": "Lawrence County"
    },
    {
      "FIPS": 42057.0,
      "county": "Fulton County"
    },
    {
      "FIPS": 42055.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 42037.0,
      "county": "Columbia County"
    },
    {
      "FIPS": 42033.0,
      "county": "Clearfield County"
    },
    {
      "FIPS": 42027.0,
      "county": "Centre County"
    },
    {
      "FIPS": 42025.0,
      "county": "Carbon County"
    },
    {
      "FIPS": 42019.0,
      "county": "Butler County"
    },
    {
      "FIPS": 42009.0,
      "county": "Bedford County"
    },
    {
      "FIPS": 42085.0,
      "county": "Mercer County"
    },
    {
      "FIPS": 42083.0,
      "county": "McKean County"
    },
    {
      "FIPS": 42053.0,
      "county": "Forest County"
    },
    {
      "FIPS": 42029.0,
      "county": "Chester County"
    },
    {
      "FIPS": 42087.0,
      "county": "Mifflin County"
    },
    {
      "FIPS": 42121.0,
      "county": "Venango County"
    },
    {
      "FIPS": 42059.0,
      "county": "Greene County"
    },
    {
      "FIPS": 42023.0,
      "county": "Cameron County"
    },
    {
      "FIPS": 42065.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 42067.0,
      "county": "Juniata County"
    },
    {
      "FIPS": 42061.0,
      "county": "Huntingdon County"
    },
    {
      "FIPS": 42035.0,
      "county": "Clinton County"
    },
    {
      "FIPS": 42071.0,
      "county": "Lancaster County"
    },
    {
      "FIPS": 42007.0,
      "county": "Beaver County"
    },
    {
      "FIPS": 42069.0,
      "county": "Lackawanna County"
    },
    {
      "FIPS": 42113.0,
      "county": "Sullivan County"
    },
    {
      "FIPS": 42077.0,
      "county": "Lehigh County"
    },
    {
      "FIPS": 42125.0,
      "county": "Washington County"
    },
    {
      "FIPS": 42091.0,
      "county": "Montgomery County"
    },
    {
      "FIPS": 42081.0,
      "county": "Lycoming County"
    },
    {
      "FIPS": 42079.0,
      "county": "Luzerne County"
    },
    {
      "FIPS": 42021.0,
      "county": "Cambria County"
    },
    {
      "FIPS": 42045.0,
      "county": "Delaware County"
    },
    {
      "FIPS": 42043.0,
      "county": "Dauphin County"
    },
    {
      "FIPS": 42075.0,
      "county": "Lebanon County"
    },
    {
      "FIPS": 42111.0,
      "county": "Somerset County"
    },
    {
      "FIPS": 42109.0,
      "county": "Snyder County"
    },
    {
      "FIPS": 42093.0,
      "county": "Montour County"
    },
    {
      "FIPS": 42041.0,
      "county": "Cumberland County"
    },
    {
      "FIPS": 42101.0,
      "county": "Philadelphia County"
    },
    {
      "FIPS": 42003.0,
      "county": "Allegheny County"
    },
    {
      "FIPS": 42039.0,
      "county": "Crawford County"
    },
    {
      "FIPS": 42129.0,
      "county": "Westmoreland County"
    },
    {
      "FIPS": 42095.0,
      "county": "Northampton County"
    },
    {
      "FIPS": 42063.0,
      "county": "Indiana County"
    },
    {
      "FIPS": 42031.0,
      "county": "Clarion County"
    },
    {
      "FIPS": 42051.0,
      "county": "Fayette County"
    },
    {
      "FIPS": 42117.0,
      "county": "Tioga County"
    },
    {
      "FIPS": 42119.0,
      "county": "Union County"
    },
    {
      "FIPS": 42103.0,
      "county": "Pike County"
    },
    {
      "FIPS": 42099.0,
      "county": "Perry County"
    },
    {
      "FIPS": 42001.0,
      "county": "Adams County"
    },
    {
      "FIPS": 42049.0,
      "county": "Erie County"
    },
    {
      "FIPS": 42017.0,
      "county": "Bucks County"
    },
    {
      "FIPS": 42011.0,
      "county": "Berks County"
    },
    {
      "FIPS": 42133.0,
      "county": "York County"
    },
    {
      "FIPS": 42047.0,
      "county": "Elk County"
    },
    {
      "FIPS": 42127.0,
      "county": "Wayne County"
    },
    {
      "FIPS": 42013.0,
      "county": "Blair County"
    },
    {
      "FIPS": 42015.0,
      "county": "Bradford County"
    }
  ],
  "PR": [
    {
      "FIPS": 72081.0,
      "county": ""
    },
    {
      "FIPS": 72055.0,
      "county": ""
    },
    {
      "FIPS": 72023.0,
      "county": ""
    },
    {
      "FIPS": 72113.0,
      "county": ""
    },
    {
      "FIPS": NaN,
      "county": ""
    },
    {
      "FIPS": 72081.0,
      "county": ""
    },
    {
      "FIPS": 72033.0,
      "county": "Catano"
    },
    {
      "FIPS": 72119.0,
      "county": "R\ufffdo Grande Municipio"
    },
    {
      "FIPS": 72131.0,
      "county": "San Sebasti\ufffdn Municipio"
    },
    {
      "FIPS": 72125.0,
      "county": "San Germ\ufffdn Municipio"
    },
    {
      "FIPS": 72075.0,
      "county": "Juana D\ufffdaz Municipio"
    },
    {
      "FIPS": 72019.0,
      "county": "Barranquitas Municipio"
    },
    {
      "FIPS": 72067.0,
      "county": "Hormigueros Municipio"
    },
    {
      "FIPS": 72085.0,
      "county": "Las Piedras Municipio"
    },
    {
      "FIPS": 72115.0,
      "county": "Quebradillas Municipio"
    },
    {
      "FIPS": 72055.0,
      "county": ""
    },
    {
      "FIPS": 72023.0,
      "county": ""
    },
    {
      "FIPS": 72007.0,
      "county": "Aguas Buenas Municipio"
    },
    {
      "FIPS": 72113.0,
      "county": ""
    },
    {
      "FIPS": 72121.0,
      "county": "Sabana Grande Municipio"
    },
    {
      "FIPS": NaN,
      "county": ""
    },
    {
      "FIPS": 72129.0,
      "county": "San Lorenzo Municipio"
    },
    {
      "FIPS": 72083.0,
      "county": "Las Mar\ufffdas Municipio"
    },
    {
      "FIPS": 72095.0,
      "county": "Maunabo Municipio"
    },
    {
      "FIPS": 72089.0,
      "county": "Luquillo Municipio"
    },
    {
      "FIPS": 72127.0,
      "county": "San Juan"
    },
    {
      "FIPS": 72053.0,
      "county": "Fajardo Municipio"
    },
    {
      "FIPS": 72025.0,
      "county": "Caguas Municipio"
    },
    {
      "FIPS": 72097.0,
      "county": "Mayag\ufffdez Municipio"
    },
    {
      "FIPS": 72091.0,
      "county": "Manat\ufffd Municipio"
    },
    {
      "FIPS": 72137.0,
      "county": "Toa Baja"
    },
    {
      "FIPS": 72151.0,
      "county": "Yabucoa Municipio"
    },
    {
      "FIPS": 72031.0,
      "county": "Carolina"
    },
    {
      "FIPS": 72087.0,
      "county": "Lo\ufffdza Municipio"
    },
    {
      "FIPS": 72153.0,
      "county": "Yauco Municipio"
    },
    {
      "FIPS": 72139.0,
      "county": "Trujillo Alto"
    },
    {
      "FIPS": 72107.0,
      "county": "Orocovis Municipio"
    },
    {
      "FIPS": 72093.0,
      "county": "Maricao"
    },
    {
      "FIPS": 72051.0,
      "county": "Dorado Municipio"
    },
    {
      "FIPS": 72147.0,
      "county": "Vieques Municipio"
    },
    {
      "FIPS": 72015.0,
      "county": "Arroyo Municipio"
    },
    {
      "FIPS": 72029.0,
      "county": "Canovanas"
    },
    {
      "FIPS": 72079.0,
      "county": "Lajas Municipio"
    },
    {
      "FIPS": 72021.0,
      "county": "Bayamon"
    },
    {
      "FIPS": 72054.0,
      "county": "Florida Municipio"
    },
    {
      "FIPS": 72117.0,
      "county": "Rinc\ufffdn Municipio"
    },
    {
      "FIPS": 72141.0,
      "county": "Utuado Municipio"
    },
    {
      "FIPS": 72071.0,
      "county": "Isabela Municipio"
    },
    {
      "FIPS": 72077.0,
      "county": "Juncos Municipio"
    },
    {
      "FIPS": 72109.0,
      "county": "Patillas"
    },
    {
      "FIPS": 72105.0,
      "county": "Naranjito Municipio"
    },
    {
      "FIPS": 72027.0,
      "county": "Camuy Municipio"
    },
    {
      "FIPS": 72013.0,
      "county": "Arecibo"
    },
    {
      "FIPS": 72145.0,
      "county": "Vega Baja Municipio"
    },
    {
      "FIPS": 72135.0,
      "county": "Toa Alta"
    },
    {
      "FIPS": 72101.0,
      "county": "Morovis Municipio"
    },
    {
      "FIPS": 72045.0,
      "county": "Comer\ufffdo Municipio"
    },
    {
      "FIPS": 72041.0,
      "county": "Cidra Municipio"
    },
    {
      "FIPS": 72035.0,
      "county": "Cayey Municipio"
    },
    {
      "FIPS": 72069.0,
      "county": "Humacao Municipio"
    },
    {
      "FIPS": 72049.0,
      "county": "Culebra Municipio"
    },
    {
      "FIPS": 72061.0,
      "county": "Guaynabo"
    },
    {
      "FIPS": 72149.0,
      "county": "Villalba Municipio"
    },
    {
      "FIPS": 72143.0,
      "county": "Vega Alta Municipio"
    },
    {
      "FIPS": 72099.0,
      "county": "Moca Municipio"
    },
    {
      "FIPS": 72073.0,
      "county": "Jayuya Municipio"
    },
    {
      "FIPS": 72039.0,
      "county": "Ciales Municipio"
    },
    {
      "FIPS": 72037.0,
      "county": "Ceiba Municipio"
    },
    {
      "FIPS": 72111.0,
      "county": "Pe\ufffduelas Municipio"
    },
    {
      "FIPS": 72011.0,
      "county": "A\ufffdasco Municipio"
    },
    {
      "FIPS": 72133.0,
      "county": "Santa Isabel"
    },
    {
      "FIPS": 72123.0,
      "county": "Salinas Municipio"
    },
    {
      "FIPS": 72017.0,
      "county": "Barceloneta"
    },
    {
      "FIPS": 72009.0,
      "county": "Aibonito"
    },
    {
      "FIPS": 72001.0,
      "county": "Adjuntas"
    },
    {
      "FIPS": 72063.0,
      "county": "Gurabo Municipio"
    },
    {
      "FIPS": 72005.0,
      "county": "Aguadilla"
    },
    {
      "FIPS": 72065.0,
      "county": "Hatillo Municipio"
    },
    {
      "FIPS": 72043.0,
      "county": "Coamo Municipio"
    },
    {
      "FIPS": 72103.0,
      "county": "Naguabo Municipio"
    },
    {
      "FIPS": 72047.0,
      "county": "Corozal Municipio"
    },
    {
      "FIPS": 72003.0,
      "county": "Aguada Municipio"
    },
    {
      "FIPS": 72057.0,
      "county": "Guayama Municipio"
    },
    {
      "FIPS": 72033.0,
      "county": "Catano"
    }
  ],
  "RI": [
    {
      "FIPS": 44005.0,
      "county": "Newport County"
    },
    {
      "FIPS": 44001.0,
      "county": "Bristol County"
    },
    {
      "FIPS": 44009.0,
      "county": "Washington County"
    },
    {
      "FIPS": 44007.0,
      "county": "Providence County"
    },
    {
      "FIPS": 44003.0,
      "county": "Kent County"
    }
  ],
  "SC": [
    {
      "FIPS": 45045.0,
      "county": "Greenville County"
    },
    {
      "FIPS": 45077.0,
      "county": "Pickens County"
    },
    {
      "FIPS": 45071.0,
      "county": "Newberry County"
    },
    {
      "FIPS": 45053.0,
      "county": "Jasper County"
    },
    {
      "FIPS": 45033.0,
      "county": "Dillon County"
    },
    {
      "FIPS": 45031.0,
      "county": "Darlington County"
    },
    {
      "FIPS": 45029.0,
      "county": "Colleton County"
    },
    {
      "FIPS": 45017.0,
      "county": "Calhoun County"
    },
    {
      "FIPS": 45013.0,
      "county": "Beaufort County"
    },
    {
      "FIPS": 45001.0,
      "county": "Abbeville County"
    },
    {
      "FIPS": 45043.0,
      "county": "Georgetown County"
    },
    {
      "FIPS": 45041.0,
      "county": "Florence County"
    },
    {
      "FIPS": 45089.0,
      "county": "Williamsburg County"
    },
    {
      "FIPS": 45055.0,
      "county": "Kershaw County"
    },
    {
      "FIPS": 45069.0,
      "county": "Marlboro County"
    },
    {
      "FIPS": 45027.0,
      "county": "Clarendon County"
    },
    {
      "FIPS": 45005.0,
      "county": "Allendale County"
    },
    {
      "FIPS": 45019.0,
      "county": "Charleston County"
    },
    {
      "FIPS": 45015.0,
      "county": "Berkeley County"
    },
    {
      "FIPS": 45039.0,
      "county": "Fairfield County"
    },
    {
      "FIPS": 45083.0,
      "county": "Spartanburg County"
    },
    {
      "FIPS": 45025.0,
      "county": "Chesterfield County"
    },
    {
      "FIPS": 45009.0,
      "county": "Bamberg County"
    },
    {
      "FIPS": 45067.0,
      "county": "Marion County"
    },
    {
      "FIPS": 45023.0,
      "county": "Chester County"
    },
    {
      "FIPS": 45081.0,
      "county": "Saluda County"
    },
    {
      "FIPS": 45037.0,
      "county": "Edgefield County"
    },
    {
      "FIPS": 45063.0,
      "county": "Lexington County"
    },
    {
      "FIPS": 45059.0,
      "county": "Laurens County"
    },
    {
      "FIPS": 45057.0,
      "county": "Lancaster County"
    },
    {
      "FIPS": 45049.0,
      "county": "Hampton County"
    },
    {
      "FIPS": 45021.0,
      "county": "Cherokee County"
    },
    {
      "FIPS": 45007.0,
      "county": "Anderson County"
    },
    {
      "FIPS": 45065.0,
      "county": "McCormick County"
    },
    {
      "FIPS": 45085.0,
      "county": "Sumter County"
    },
    {
      "FIPS": 45047.0,
      "county": "Greenwood County"
    },
    {
      "FIPS": 45035.0,
      "county": "Dorchester County"
    },
    {
      "FIPS": 45079.0,
      "county": "Richland County"
    },
    {
      "FIPS": 45073.0,
      "county": "Oconee County"
    },
    {
      "FIPS": 45011.0,
      "county": "Barnwell County"
    },
    {
      "FIPS": 45075.0,
      "county": "Orangeburg County"
    },
    {
      "FIPS": 45061.0,
      "county": "Lee County"
    },
    {
      "FIPS": 45003.0,
      "county": "Aiken County"
    },
    {
      "FIPS": 45051.0,
      "county": "Horry County"
    },
    {
      "FIPS": 45087.0,
      "county": "Union County"
    },
    {
      "FIPS": 45091.0,
      "county": "York County"
    },
    {
      "FIPS": 45045.0,
      "county": "Greenville County"
    }
  ],
  "SD": [
    {
      "FIPS": 46095.0,
      "county": "Mellette County"
    },
    {
      "FIPS": 46129.0,
      "county": "Walworth County"
    },
    {
      "FIPS": 46125.0,
      "county": "Turner County"
    },
    {
      "FIPS": 46105.0,
      "county": "Perkins County"
    },
    {
      "FIPS": 46087.0,
      "county": "McCook County"
    },
    {
      "FIPS": 46081.0,
      "county": "Lawrence County"
    },
    {
      "FIPS": 46065.0,
      "county": "Hughes County"
    },
    {
      "FIPS": 46055.0,
      "county": "Haakon County"
    },
    {
      "FIPS": 46047.0,
      "county": "Fall River County"
    },
    {
      "FIPS": 46035.0,
      "county": "Davison County"
    },
    {
      "FIPS": 46033.0,
      "county": "Custer County"
    },
    {
      "FIPS": 46023.0,
      "county": "Charles Mix County"
    },
    {
      "FIPS": 46005.0,
      "county": "Beadle County"
    },
    {
      "FIPS": 46011.0,
      "county": "Brookings County"
    },
    {
      "FIPS": 46091.0,
      "county": "Marshall County"
    },
    {
      "FIPS": 46099.0,
      "county": "Minnehaha County"
    },
    {
      "FIPS": 46103.0,
      "county": "Pennington County"
    },
    {
      "FIPS": 46083.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 46109.0,
      "county": "Roberts County"
    },
    {
      "FIPS": 46113.0,
      "county": "Shannon County"
    },
    {
      "FIPS": 46137.0,
      "county": "Ziebach County"
    },
    {
      "FIPS": 46007.0,
      "county": "Bennett County"
    },
    {
      "FIPS": 46117.0,
      "county": "Stanley County"
    },
    {
      "FIPS": 46057.0,
      "county": "Hamlin County"
    },
    {
      "FIPS": 46077.0,
      "county": "Kingsbury County"
    },
    {
      "FIPS": 46043.0,
      "county": "Douglas County"
    },
    {
      "FIPS": 46107.0,
      "county": "Potter County"
    },
    {
      "FIPS": 46053.0,
      "county": "Gregory County"
    },
    {
      "FIPS": 46071.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 46063.0,
      "county": "Harding County"
    },
    {
      "FIPS": 46029.0,
      "county": "Codington County"
    },
    {
      "FIPS": 46021.0,
      "county": "Campbell County"
    },
    {
      "FIPS": 46067.0,
      "county": "Hutchinson County"
    },
    {
      "FIPS": 46135.0,
      "county": "Yankton County"
    },
    {
      "FIPS": 46031.0,
      "county": "Corson County"
    },
    {
      "FIPS": 46061.0,
      "county": "Hanson County"
    },
    {
      "FIPS": 46003.0,
      "county": "Aurora County"
    },
    {
      "FIPS": 46045.0,
      "county": "Edmunds County"
    },
    {
      "FIPS": 46111.0,
      "county": "Sanborn County"
    },
    {
      "FIPS": 46009.0,
      "county": "Bon Homme County"
    },
    {
      "FIPS": 46089.0,
      "county": "McPherson County"
    },
    {
      "FIPS": 46073.0,
      "county": "Jerauld County"
    },
    {
      "FIPS": 46017.0,
      "county": "Buffalo County"
    },
    {
      "FIPS": 46079.0,
      "county": "Lake County"
    },
    {
      "FIPS": 46051.0,
      "county": "Grant County"
    },
    {
      "FIPS": 46027.0,
      "county": "Clay County"
    },
    {
      "FIPS": 46093.0,
      "county": "Meade County"
    },
    {
      "FIPS": 46037.0,
      "county": "Day County"
    },
    {
      "FIPS": 46039.0,
      "county": "Deuel County"
    },
    {
      "FIPS": 46115.0,
      "county": "Spink County"
    },
    {
      "FIPS": 46069.0,
      "county": "Hyde County"
    },
    {
      "FIPS": 46015.0,
      "county": "Brule County"
    },
    {
      "FIPS": 46085.0,
      "county": "Lyman County"
    },
    {
      "FIPS": 46127.0,
      "county": "Union County"
    },
    {
      "FIPS": 46049.0,
      "county": "Faulk County"
    },
    {
      "FIPS": 46121.0,
      "county": "Todd County"
    },
    {
      "FIPS": 46059.0,
      "county": "Hand County"
    },
    {
      "FIPS": 46041.0,
      "county": "Dewey County"
    },
    {
      "FIPS": 46101.0,
      "county": "Moody County"
    },
    {
      "FIPS": 46019.0,
      "county": "Butte County"
    },
    {
      "FIPS": 46025.0,
      "county": "Clark County"
    },
    {
      "FIPS": 46097.0,
      "county": "Miner County"
    },
    {
      "FIPS": 46123.0,
      "county": "Tripp County"
    },
    {
      "FIPS": 46013.0,
      "county": "Brown County"
    },
    {
      "FIPS": 46119.0,
      "county": "Sully County"
    },
    {
      "FIPS": 46075.0,
      "county": "Jones County"
    }
  ],
  "TN": [
    {
      "FIPS": 47123.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 47003.0,
      "county": "Bedford County"
    },
    {
      "FIPS": 47107.0,
      "county": "McMinn County"
    },
    {
      "FIPS": 47175.0,
      "county": "Van Buren County"
    },
    {
      "FIPS": 47171.0,
      "county": "Unicoi County"
    },
    {
      "FIPS": 47169.0,
      "county": "Trousdale County"
    },
    {
      "FIPS": 47167.0,
      "county": "Tipton County"
    },
    {
      "FIPS": 47117.0,
      "county": "Marshall County"
    },
    {
      "FIPS": 47161.0,
      "county": "Stewart County"
    },
    {
      "FIPS": 47155.0,
      "county": "Sevier County"
    },
    {
      "FIPS": 47085.0,
      "county": "Humphreys County"
    },
    {
      "FIPS": 47153.0,
      "county": "Sequatchie County"
    },
    {
      "FIPS": 47141.0,
      "county": "Putnam County"
    },
    {
      "FIPS": 47137.0,
      "county": "Pickett County"
    },
    {
      "FIPS": 47115.0,
      "county": "Marion County"
    },
    {
      "FIPS": 47099.0,
      "county": "Lawrence County"
    },
    {
      "FIPS": 47097.0,
      "county": "Lauderdale County"
    },
    {
      "FIPS": 47091.0,
      "county": "Johnson County"
    },
    {
      "FIPS": 47087.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 47083.0,
      "county": "Houston County"
    },
    {
      "FIPS": 47071.0,
      "county": "Hardin County"
    },
    {
      "FIPS": 47059.0,
      "county": "Greene County"
    },
    {
      "FIPS": 47049.0,
      "county": "Fentress County"
    },
    {
      "FIPS": 47047.0,
      "county": "Fayette County"
    },
    {
      "FIPS": 47043.0,
      "county": "Dickson County"
    },
    {
      "FIPS": 47039.0,
      "county": "Decatur County"
    },
    {
      "FIPS": 47033.0,
      "county": "Crockett County"
    },
    {
      "FIPS": 47023.0,
      "county": "Chester County"
    },
    {
      "FIPS": 47021.0,
      "county": "Cheatham County"
    },
    {
      "FIPS": 47019.0,
      "county": "Carter County"
    },
    {
      "FIPS": 47015.0,
      "county": "Cannon County"
    },
    {
      "FIPS": 47011.0,
      "county": "Bradley County"
    },
    {
      "FIPS": 47009.0,
      "county": "Blount County"
    },
    {
      "FIPS": 47005.0,
      "county": "Benton County"
    },
    {
      "FIPS": 47075.0,
      "county": "Haywood County"
    },
    {
      "FIPS": 47067.0,
      "county": "Hancock County"
    },
    {
      "FIPS": 47063.0,
      "county": "Hamblen County"
    },
    {
      "FIPS": 47129.0,
      "county": "Morgan County"
    },
    {
      "FIPS": 47187.0,
      "county": "Williamson County"
    },
    {
      "FIPS": 47113.0,
      "county": "Madison County"
    },
    {
      "FIPS": 47057.0,
      "county": "Grainger County"
    },
    {
      "FIPS": 47051.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 47149.0,
      "county": "Rutherford County"
    },
    {
      "FIPS": 47073.0,
      "county": "Hawkins County"
    },
    {
      "FIPS": 47065.0,
      "county": "Hamilton County"
    },
    {
      "FIPS": 47147.0,
      "county": "Robertson County"
    },
    {
      "FIPS": 47041.0,
      "county": "De Kalb County"
    },
    {
      "FIPS": 47177.0,
      "county": "Warren County"
    },
    {
      "FIPS": 47001.0,
      "county": "Anderson County"
    },
    {
      "FIPS": 47089.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 47189.0,
      "county": "Wilson County"
    },
    {
      "FIPS": 47125.0,
      "county": "Montgomery County"
    },
    {
      "FIPS": 47077.0,
      "county": "Henderson County"
    },
    {
      "FIPS": 47035.0,
      "county": "Cumberland County"
    },
    {
      "FIPS": 47037.0,
      "county": "Davidson County"
    },
    {
      "FIPS": 47017.0,
      "county": "Carroll County"
    },
    {
      "FIPS": 47103.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 47165.0,
      "county": "Sumner County"
    },
    {
      "FIPS": 47053.0,
      "county": "Gibson County"
    },
    {
      "FIPS": 47109.0,
      "county": "McNairy County"
    },
    {
      "FIPS": 47163.0,
      "county": "Sullivan County"
    },
    {
      "FIPS": 47157.0,
      "county": "Shelby County"
    },
    {
      "FIPS": 47105.0,
      "county": "Loudon County"
    },
    {
      "FIPS": 47013.0,
      "county": "Campbell County"
    },
    {
      "FIPS": 47025.0,
      "county": "Claiborne County"
    },
    {
      "FIPS": 47031.0,
      "county": "Coffee County"
    },
    {
      "FIPS": 47179.0,
      "county": "Washington County"
    },
    {
      "FIPS": 47133.0,
      "county": "Overton County"
    },
    {
      "FIPS": 47183.0,
      "county": "Weakley County"
    },
    {
      "FIPS": 47081.0,
      "county": "Hickman County"
    },
    {
      "FIPS": 47007.0,
      "county": "Bledsoe County"
    },
    {
      "FIPS": 47061.0,
      "county": "Grundy County"
    },
    {
      "FIPS": 47069.0,
      "county": "Hardeman County"
    },
    {
      "FIPS": 47045.0,
      "county": "Dyer County"
    },
    {
      "FIPS": 47151.0,
      "county": "Scott County"
    },
    {
      "FIPS": 47131.0,
      "county": "Obion County"
    },
    {
      "FIPS": 47121.0,
      "county": "Meigs County"
    },
    {
      "FIPS": 47111.0,
      "county": "Macon County"
    },
    {
      "FIPS": 47101.0,
      "county": "Lewis County"
    },
    {
      "FIPS": 47055.0,
      "county": "Giles County"
    },
    {
      "FIPS": 47029.0,
      "county": "Cocke County"
    },
    {
      "FIPS": 47181.0,
      "county": "Wayne County"
    },
    {
      "FIPS": 47173.0,
      "county": "Union County"
    },
    {
      "FIPS": 47027.0,
      "county": "Clay County"
    },
    {
      "FIPS": 47185.0,
      "county": "White County"
    },
    {
      "FIPS": 47143.0,
      "county": "Rhea County"
    },
    {
      "FIPS": 47139.0,
      "county": "Polk County"
    },
    {
      "FIPS": 47119.0,
      "county": "Maury County"
    },
    {
      "FIPS": 47079.0,
      "county": "Henry County"
    },
    {
      "FIPS": 47093.0,
      "county": "Knox County"
    },
    {
      "FIPS": 47159.0,
      "county": "Smith County"
    },
    {
      "FIPS": 47135.0,
      "county": "Perry County"
    },
    {
      "FIPS": 47145.0,
      "county": "Roane County"
    },
    {
      "FIPS": 47127.0,
      "county": "Moore County"
    },
    {
      "FIPS": 47095.0,
      "county": "Lake County"
    }
  ],
  "TX": [
    {
      "FIPS": 48357.0,
      "county": "Ochiltree County"
    },
    {
      "FIPS": 48455.0,
      "county": "Trinity County"
    },
    {
      "FIPS": 48495.0,
      "county": "Winkler County"
    },
    {
      "FIPS": 48487.0,
      "county": "Wilbarger County"
    },
    {
      "FIPS": 48467.0,
      "county": "Van Zandt County"
    },
    {
      "FIPS": 48463.0,
      "county": "Uvalde County"
    },
    {
      "FIPS": 48245.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 48491.0,
      "county": "Williamson County"
    },
    {
      "FIPS": 48387.0,
      "county": "Red River County"
    },
    {
      "FIPS": 48451.0,
      "county": "Tom Green County"
    },
    {
      "FIPS": 48441.0,
      "county": "Taylor County"
    },
    {
      "FIPS": 48425.0,
      "county": "Somervell County"
    },
    {
      "FIPS": 48415.0,
      "county": "Scurry County"
    },
    {
      "FIPS": 48411.0,
      "county": "San Saba County"
    },
    {
      "FIPS": 48407.0,
      "county": "San Jacinto County"
    },
    {
      "FIPS": 48405.0,
      "county": "San Augustine County"
    },
    {
      "FIPS": 48399.0,
      "county": "Runnels County"
    },
    {
      "FIPS": 48391.0,
      "county": "Refugio County"
    },
    {
      "FIPS": 48389.0,
      "county": "Reeves County"
    },
    {
      "FIPS": 48381.0,
      "county": "Randall County"
    },
    {
      "FIPS": 48377.0,
      "county": "Presidio County"
    },
    {
      "FIPS": 48363.0,
      "county": "Palo Pinto County"
    },
    {
      "FIPS": 48127.0,
      "county": "Dimmit County"
    },
    {
      "FIPS": 48349.0,
      "county": "Navarro County"
    },
    {
      "FIPS": 48347.0,
      "county": "Nacogdoches County"
    },
    {
      "FIPS": 48337.0,
      "county": "Montague County"
    },
    {
      "FIPS": 48335.0,
      "county": "Mitchell County"
    },
    {
      "FIPS": 48315.0,
      "county": "Marion County"
    },
    {
      "FIPS": 48325.0,
      "county": "Medina County"
    },
    {
      "FIPS": 48323.0,
      "county": "Maverick County"
    },
    {
      "FIPS": 48321.0,
      "county": "Matagorda County"
    },
    {
      "FIPS": 48317.0,
      "county": "Martin County"
    },
    {
      "FIPS": 48293.0,
      "county": "Limestone County"
    },
    {
      "FIPS": 48291.0,
      "county": "Liberty County"
    },
    {
      "FIPS": 48505.0,
      "county": "Zapata County"
    },
    {
      "FIPS": 48285.0,
      "county": "Lavaca County"
    },
    {
      "FIPS": 48257.0,
      "county": "Kaufman County"
    },
    {
      "FIPS": 48255.0,
      "county": "Karnes County"
    },
    {
      "FIPS": 48241.0,
      "county": "Jasper County"
    },
    {
      "FIPS": 48233.0,
      "county": "Hutchinson County"
    },
    {
      "FIPS": 48227.0,
      "county": "Howard County"
    },
    {
      "FIPS": 48219.0,
      "county": "Hockley County"
    },
    {
      "FIPS": 48195.0,
      "county": "Hansford County"
    },
    {
      "FIPS": 48193.0,
      "county": "Hamilton County"
    },
    {
      "FIPS": 48181.0,
      "county": "Grayson County"
    },
    {
      "FIPS": 48151.0,
      "county": "Fisher County"
    },
    {
      "FIPS": 48149.0,
      "county": "Fayette County"
    },
    {
      "FIPS": 48133.0,
      "county": "Eastland County"
    },
    {
      "FIPS": 48105.0,
      "county": "Crockett County"
    },
    {
      "FIPS": 48073.0,
      "county": "Cherokee County"
    },
    {
      "FIPS": 48071.0,
      "county": "Chambers County"
    },
    {
      "FIPS": 48069.0,
      "county": "Castro County"
    },
    {
      "FIPS": 48065.0,
      "county": "Carson County"
    },
    {
      "FIPS": 48061.0,
      "county": "Cameron County"
    },
    {
      "FIPS": 48051.0,
      "county": "Burleson County"
    },
    {
      "FIPS": 48483.0,
      "county": "Wheeler County"
    },
    {
      "FIPS": 48047.0,
      "county": "Brooks County"
    },
    {
      "FIPS": 48019.0,
      "county": "Bandera County"
    },
    {
      "FIPS": 48017.0,
      "county": "Bailey County"
    },
    {
      "FIPS": 48013.0,
      "county": "Atascosa County"
    },
    {
      "FIPS": 48003.0,
      "county": "Andrews County"
    },
    {
      "FIPS": 48001.0,
      "county": "Anderson County"
    },
    {
      "FIPS": 48121.0,
      "county": "Denton County"
    },
    {
      "FIPS": 48489.0,
      "county": "Willacy County"
    },
    {
      "FIPS": 48157.0,
      "county": "Fort Bend County"
    },
    {
      "FIPS": 48199.0,
      "county": "Hardin County"
    },
    {
      "FIPS": 48267.0,
      "county": "Kimble County"
    },
    {
      "FIPS": 48361.0,
      "county": "Orange County"
    },
    {
      "FIPS": 48059.0,
      "county": "Callahan County"
    },
    {
      "FIPS": 48203.0,
      "county": "Harrison County"
    },
    {
      "FIPS": 48083.0,
      "county": "Coleman County"
    },
    {
      "FIPS": 48229.0,
      "county": "Hudspeth County"
    },
    {
      "FIPS": 48225.0,
      "county": "Houston County"
    },
    {
      "FIPS": 48115.0,
      "county": "Dawson County"
    },
    {
      "FIPS": 48011.0,
      "county": "Armstrong County"
    },
    {
      "FIPS": 48099.0,
      "county": "Coryell County"
    },
    {
      "FIPS": 48035.0,
      "county": "Bosque County"
    },
    {
      "FIPS": 48009.0,
      "county": "Archer County"
    },
    {
      "FIPS": 48197.0,
      "county": "Hardeman County"
    },
    {
      "FIPS": 48477.0,
      "county": "Washington County"
    },
    {
      "FIPS": 48075.0,
      "county": "Childress County"
    },
    {
      "FIPS": 48309.0,
      "county": "McLennan County"
    },
    {
      "FIPS": 48055.0,
      "county": "Caldwell County"
    },
    {
      "FIPS": 48433.0,
      "county": "Stonewall County"
    },
    {
      "FIPS": 48297.0,
      "county": "Live Oak County"
    },
    {
      "FIPS": 48437.0,
      "county": "Swisher County"
    },
    {
      "FIPS": 48367.0,
      "county": "Parker County"
    },
    {
      "FIPS": 48223.0,
      "county": "Hopkins County"
    },
    {
      "FIPS": 48125.0,
      "county": "Dickens County"
    },
    {
      "FIPS": 48249.0,
      "county": "Jim Wells County"
    },
    {
      "FIPS": 48053.0,
      "county": "Burnet County"
    },
    {
      "FIPS": 48429.0,
      "county": "Stephens County"
    },
    {
      "FIPS": 48397.0,
      "county": "Rockwall County"
    },
    {
      "FIPS": 48375.0,
      "county": "Potter County"
    },
    {
      "FIPS": 48417.0,
      "county": "Shackelford County"
    },
    {
      "FIPS": 48329.0,
      "county": "Midland County"
    },
    {
      "FIPS": 48085.0,
      "county": "Collin County"
    },
    {
      "FIPS": 48459.0,
      "county": "Upshur County"
    },
    {
      "FIPS": 48493.0,
      "county": "Wilson County"
    },
    {
      "FIPS": 48251.0,
      "county": "Johnson County"
    },
    {
      "FIPS": 48465.0,
      "county": "Val Verde County"
    },
    {
      "FIPS": 48369.0,
      "county": "Parmer County"
    },
    {
      "FIPS": 48343.0,
      "county": "Morris County"
    },
    {
      "FIPS": 48419.0,
      "county": "Shelby County"
    },
    {
      "FIPS": 48129.0,
      "county": "Donley County"
    },
    {
      "FIPS": 48281.0,
      "county": "Lampasas County"
    },
    {
      "FIPS": 48117.0,
      "county": "Deaf Smith County"
    },
    {
      "FIPS": 48165.0,
      "county": "Gaines County"
    },
    {
      "FIPS": 48421.0,
      "county": "Sherman County"
    },
    {
      "FIPS": 48005.0,
      "county": "Angelina County"
    },
    {
      "FIPS": 48213.0,
      "county": "Henderson County"
    },
    {
      "FIPS": 48177.0,
      "county": "Gonzales County"
    },
    {
      "FIPS": 48295.0,
      "county": "Lipscomb County"
    },
    {
      "FIPS": 48409.0,
      "county": "San Patricio County"
    },
    {
      "FIPS": 48141.0,
      "county": "El Paso County"
    },
    {
      "FIPS": 48453.0,
      "county": "Travis County"
    },
    {
      "FIPS": 48439.0,
      "county": "Tarrant County"
    },
    {
      "FIPS": 48355.0,
      "county": "Nueces County"
    },
    {
      "FIPS": 48339.0,
      "county": "Montgomery County"
    },
    {
      "FIPS": 48215.0,
      "county": "Hidalgo County"
    },
    {
      "FIPS": 48185.0,
      "county": "Grimes County"
    },
    {
      "FIPS": 48201.0,
      "county": "Harris County"
    },
    {
      "FIPS": 48113.0,
      "county": "Dallas County"
    },
    {
      "FIPS": 48435.0,
      "county": "Sutton County"
    },
    {
      "FIPS": 48039.0,
      "county": "Brazoria County"
    },
    {
      "FIPS": 48007.0,
      "county": "Aransas County"
    },
    {
      "FIPS": 48109.0,
      "county": "Culberson County"
    },
    {
      "FIPS": 48247.0,
      "county": "Jim Hogg County"
    },
    {
      "FIPS": 48123.0,
      "county": "De Witt County"
    },
    {
      "FIPS": 48207.0,
      "county": "Haskell County"
    },
    {
      "FIPS": 48471.0,
      "county": "Walker County"
    },
    {
      "FIPS": 48303.0,
      "county": "Lubbock County"
    },
    {
      "FIPS": 48365.0,
      "county": "Panola County"
    },
    {
      "FIPS": 48093.0,
      "county": "Comanche County"
    },
    {
      "FIPS": 48187.0,
      "county": "Guadalupe County"
    },
    {
      "FIPS": 48383.0,
      "county": "Reagan County"
    },
    {
      "FIPS": 48089.0,
      "county": "Colorado County"
    },
    {
      "FIPS": 48015.0,
      "county": "Austin County"
    },
    {
      "FIPS": 48261.0,
      "county": "Kenedy County"
    },
    {
      "FIPS": 48161.0,
      "county": "Freestone County"
    },
    {
      "FIPS": 48045.0,
      "county": "Briscoe County"
    },
    {
      "FIPS": 48481.0,
      "county": "Wharton County"
    },
    {
      "FIPS": 48211.0,
      "county": "Hemphill County"
    },
    {
      "FIPS": 48175.0,
      "county": "Goliad County"
    },
    {
      "FIPS": 48345.0,
      "county": "Motley County"
    },
    {
      "FIPS": 48431.0,
      "county": "Sterling County"
    },
    {
      "FIPS": 48031.0,
      "county": "Blanco County"
    },
    {
      "FIPS": 48327.0,
      "county": "Menard County"
    },
    {
      "FIPS": 48101.0,
      "county": "Cottle County"
    },
    {
      "FIPS": 48507.0,
      "county": "Zavala County"
    },
    {
      "FIPS": 48403.0,
      "county": "Sabine County"
    },
    {
      "FIPS": 48273.0,
      "county": "Kleberg County"
    },
    {
      "FIPS": 48043.0,
      "county": "Brewster County"
    },
    {
      "FIPS": 48501.0,
      "county": "Yoakum County"
    },
    {
      "FIPS": 48443.0,
      "county": "Terrell County"
    },
    {
      "FIPS": 48413.0,
      "county": "Schleicher County"
    },
    {
      "FIPS": 48393.0,
      "county": "Roberts County"
    },
    {
      "FIPS": 48359.0,
      "county": "Oldham County"
    },
    {
      "FIPS": 48351.0,
      "county": "Newton County"
    },
    {
      "FIPS": 48313.0,
      "county": "Madison County"
    },
    {
      "FIPS": 48301.0,
      "county": "Loving County"
    },
    {
      "FIPS": 48137.0,
      "county": "Edwards County"
    },
    {
      "FIPS": 48271.0,
      "county": "Kinney County"
    },
    {
      "FIPS": 48205.0,
      "county": "Hartley County"
    },
    {
      "FIPS": 48173.0,
      "county": "Glasscock County"
    },
    {
      "FIPS": 48171.0,
      "county": "Gillespie County"
    },
    {
      "FIPS": 48079.0,
      "county": "Cochran County"
    },
    {
      "FIPS": 48473.0,
      "county": "Waller County"
    },
    {
      "FIPS": 48283.0,
      "county": "La Salle County"
    },
    {
      "FIPS": 48447.0,
      "county": "Throckmorton County"
    },
    {
      "FIPS": 48469.0,
      "county": "Victoria County"
    },
    {
      "FIPS": 48147.0,
      "county": "Fannin County"
    },
    {
      "FIPS": 48095.0,
      "county": "Concho County"
    },
    {
      "FIPS": 48087.0,
      "county": "Collingsworth County"
    },
    {
      "FIPS": 48041.0,
      "county": "Brazos County"
    },
    {
      "FIPS": 48395.0,
      "county": "Robertson County"
    },
    {
      "FIPS": 48259.0,
      "county": "Kendall County"
    },
    {
      "FIPS": 48239.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 48485.0,
      "county": "Wichita County"
    },
    {
      "FIPS": 48159.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 48167.0,
      "county": "Galveston County"
    },
    {
      "FIPS": 48243.0,
      "county": "Jeff Davis County"
    },
    {
      "FIPS": 48307.0,
      "county": "McCulloch County"
    },
    {
      "FIPS": 48311.0,
      "county": "McMullen County"
    },
    {
      "FIPS": 48023.0,
      "county": "Baylor County"
    },
    {
      "FIPS": 48033.0,
      "county": "Borden County"
    },
    {
      "FIPS": 48111.0,
      "county": "Dallam County"
    },
    {
      "FIPS": 48057.0,
      "county": "Calhoun County"
    },
    {
      "FIPS": 48021.0,
      "county": "Bastrop County"
    },
    {
      "FIPS": 48107.0,
      "county": "Crosby County"
    },
    {
      "FIPS": 48319.0,
      "county": "Mason County"
    },
    {
      "FIPS": 48445.0,
      "county": "Terry County"
    },
    {
      "FIPS": 48423.0,
      "county": "Smith County"
    },
    {
      "FIPS": 48353.0,
      "county": "Nolan County"
    },
    {
      "FIPS": 48341.0,
      "county": "Moore County"
    },
    {
      "FIPS": 48333.0,
      "county": "Mills County"
    },
    {
      "FIPS": 48331.0,
      "county": "Milam County"
    },
    {
      "FIPS": 48305.0,
      "county": "Lynn County"
    },
    {
      "FIPS": 48299.0,
      "county": "Llano County"
    },
    {
      "FIPS": 48265.0,
      "county": "Kerr County"
    },
    {
      "FIPS": 48279.0,
      "county": "Lamb County"
    },
    {
      "FIPS": 48275.0,
      "county": "Knox County"
    },
    {
      "FIPS": 48385.0,
      "county": "Real County"
    },
    {
      "FIPS": 48097.0,
      "county": "Cooke County"
    },
    {
      "FIPS": 48145.0,
      "county": "Falls County"
    },
    {
      "FIPS": 48139.0,
      "county": "Ellis County"
    },
    {
      "FIPS": 48131.0,
      "county": "Duval County"
    },
    {
      "FIPS": 48067.0,
      "county": "Cass County"
    },
    {
      "FIPS": 48037.0,
      "county": "Bowie County"
    },
    {
      "FIPS": 48025.0,
      "county": "Bee County"
    },
    {
      "FIPS": 48077.0,
      "county": "Clay County"
    },
    {
      "FIPS": 48427.0,
      "county": "Starr County"
    },
    {
      "FIPS": 48143.0,
      "county": "Erath County"
    },
    {
      "FIPS": 48179.0,
      "county": "Gray County"
    },
    {
      "FIPS": 48253.0,
      "county": "Jones County"
    },
    {
      "FIPS": 48235.0,
      "county": "Irion County"
    },
    {
      "FIPS": 48029.0,
      "county": "Bexar County"
    },
    {
      "FIPS": 48155.0,
      "county": "Foard County"
    },
    {
      "FIPS": 48371.0,
      "county": "Pecos County"
    },
    {
      "FIPS": 48401.0,
      "county": "Rusk County"
    },
    {
      "FIPS": 48217.0,
      "county": "Hill County"
    },
    {
      "FIPS": 48449.0,
      "county": "Titus County"
    },
    {
      "FIPS": 48221.0,
      "county": "Hood County"
    },
    {
      "FIPS": 48049.0,
      "county": "Brown County"
    },
    {
      "FIPS": 48277.0,
      "county": "Lamar County"
    },
    {
      "FIPS": 48237.0,
      "county": "Jack County"
    },
    {
      "FIPS": 48209.0,
      "county": "Hays County"
    },
    {
      "FIPS": 48497.0,
      "county": "Wise County"
    },
    {
      "FIPS": 48183.0,
      "county": "Gregg County"
    },
    {
      "FIPS": 48027.0,
      "county": "Bell County"
    },
    {
      "FIPS": 48189.0,
      "county": "Hale County"
    },
    {
      "FIPS": 48103.0,
      "county": "Crane County"
    },
    {
      "FIPS": 48499.0,
      "county": "Wood County"
    },
    {
      "FIPS": 48063.0,
      "county": "Camp County"
    },
    {
      "FIPS": 48091.0,
      "county": "Comal County"
    },
    {
      "FIPS": 48135.0,
      "county": "Ector County"
    },
    {
      "FIPS": 48503.0,
      "county": "Young County"
    },
    {
      "FIPS": 48289.0,
      "county": "Leon County"
    },
    {
      "FIPS": 48169.0,
      "county": "Garza County"
    },
    {
      "FIPS": 48461.0,
      "county": "Upton County"
    },
    {
      "FIPS": 48081.0,
      "county": "Coke County"
    },
    {
      "FIPS": 48287.0,
      "county": "Lee County"
    },
    {
      "FIPS": 48263.0,
      "county": "Kent County"
    },
    {
      "FIPS": 48231.0,
      "county": "Hunt County"
    },
    {
      "FIPS": 48479.0,
      "county": "Webb County"
    },
    {
      "FIPS": 48373.0,
      "county": "Polk County"
    },
    {
      "FIPS": 48153.0,
      "county": "Floyd County"
    },
    {
      "FIPS": 48379.0,
      "county": "Rains County"
    },
    {
      "FIPS": 48191.0,
      "county": "Hall County"
    },
    {
      "FIPS": 48457.0,
      "county": "Tyler County"
    },
    {
      "FIPS": 48119.0,
      "county": "Delta County"
    },
    {
      "FIPS": 48475.0,
      "county": "Ward County"
    },
    {
      "FIPS": 48163.0,
      "county": "Frio County"
    },
    {
      "FIPS": 48269.0,
      "county": "King County"
    }
  ],
  "UT": [
    {
      "FIPS": 49037.0,
      "county": "San Juan County"
    },
    {
      "FIPS": 49051.0,
      "county": "Wasatch County"
    },
    {
      "FIPS": 49047.0,
      "county": "Uintah County"
    },
    {
      "FIPS": 49045.0,
      "county": "Tooele County"
    },
    {
      "FIPS": 49043.0,
      "county": "Summit County"
    },
    {
      "FIPS": 49041.0,
      "county": "Sevier County"
    },
    {
      "FIPS": 49013.0,
      "county": "Duchesne County"
    },
    {
      "FIPS": 49007.0,
      "county": "Carbon County"
    },
    {
      "FIPS": 49009.0,
      "county": "Daggett County"
    },
    {
      "FIPS": 49029.0,
      "county": "Morgan County"
    },
    {
      "FIPS": 49039.0,
      "county": "Sanpete County"
    },
    {
      "FIPS": 49027.0,
      "county": "Millard County"
    },
    {
      "FIPS": 49001.0,
      "county": "Beaver County"
    },
    {
      "FIPS": 49003.0,
      "county": "Box Elder County"
    },
    {
      "FIPS": 49053.0,
      "county": "Washington County"
    },
    {
      "FIPS": 49035.0,
      "county": "Salt Lake County"
    },
    {
      "FIPS": 49017.0,
      "county": "Garfield County"
    },
    {
      "FIPS": 49005.0,
      "county": "Cache County"
    },
    {
      "FIPS": 49019.0,
      "county": "Grand County"
    },
    {
      "FIPS": 49021.0,
      "county": "Iron County"
    },
    {
      "FIPS": 49015.0,
      "county": "Emery County"
    },
    {
      "FIPS": 49023.0,
      "county": "Juab County"
    },
    {
      "FIPS": 49011.0,
      "county": "Davis County"
    },
    {
      "FIPS": 49025.0,
      "county": "Kane County"
    },
    {
      "FIPS": 49057.0,
      "county": "Weber County"
    },
    {
      "FIPS": 49033.0,
      "county": "Rich County"
    },
    {
      "FIPS": 49049.0,
      "county": "Utah County"
    },
    {
      "FIPS": 49055.0,
      "county": "Wayne County"
    },
    {
      "FIPS": 49031.0,
      "county": "Piute County"
    },
    {
      "FIPS": 49037.0,
      "county": "San Juan County"
    }
  ],
  "VA": [
    {
      "FIPS": 51840.0,
      "county": "Winchester City"
    },
    {
      "FIPS": 51820.0,
      "county": "Waynesboro City"
    },
    {
      "FIPS": 51175.0,
      "county": "Southampton County"
    },
    {
      "FIPS": 51167.0,
      "county": "Russell County"
    },
    {
      "FIPS": 51157.0,
      "county": "Rappahannock County"
    },
    {
      "FIPS": 51149.0,
      "county": "Prince George County"
    },
    {
      "FIPS": 51147.0,
      "county": "Prince Edward County"
    },
    {
      "FIPS": 51145.0,
      "county": "Powhatan County"
    },
    {
      "FIPS": 51740.0,
      "county": "Portsmouth City"
    },
    {
      "FIPS": 51143.0,
      "county": "Pittsylvania County"
    },
    {
      "FIPS": 51137.0,
      "county": "Orange County"
    },
    {
      "FIPS": 51135.0,
      "county": "Nottoway County"
    },
    {
      "FIPS": 51131.0,
      "county": "Northampton County"
    },
    {
      "FIPS": 51700.0,
      "county": "Newport News City"
    },
    {
      "FIPS": 51127.0,
      "county": "New Kent County"
    },
    {
      "FIPS": 51685.0,
      "county": "Manassas Park City"
    },
    {
      "FIPS": 51680.0,
      "county": "Lynchburg City"
    },
    {
      "FIPS": 51111.0,
      "county": "Lunenburg County"
    },
    {
      "FIPS": 51660.0,
      "county": "Harrisonburg City"
    },
    {
      "FIPS": 51083.0,
      "county": "Halifax County"
    },
    {
      "FIPS": 51073.0,
      "county": "Gloucester County"
    },
    {
      "FIPS": 51069.0,
      "county": "Frederick County"
    },
    {
      "FIPS": 51065.0,
      "county": "Fluvanna County"
    },
    {
      "FIPS": 51061.0,
      "county": "Fauquier County"
    },
    {
      "FIPS": 51033.0,
      "county": "Caroline County"
    },
    {
      "FIPS": 51590.0,
      "county": "Danville City"
    },
    {
      "FIPS": 51570.0,
      "county": "Colonial Heights City"
    },
    {
      "FIPS": 51023.0,
      "county": "Botetourt County"
    },
    {
      "FIPS": 51015.0,
      "county": "Augusta County"
    },
    {
      "FIPS": 51011.0,
      "county": "Appomattox County"
    },
    {
      "FIPS": 51005.0,
      "county": "Alleghany County"
    },
    {
      "FIPS": 51027.0,
      "county": "Buchanan County"
    },
    {
      "FIPS": 51001.0,
      "county": "Accomack County"
    },
    {
      "FIPS": 51067.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 51031.0,
      "county": "Campbell County"
    },
    {
      "FIPS": 51035.0,
      "county": "Carroll County"
    },
    {
      "FIPS": 51117.0,
      "county": "Mecklenburg County"
    },
    {
      "FIPS": 51103.0,
      "county": "Lancaster County"
    },
    {
      "FIPS": 51630.0,
      "county": "Fredericksburg City"
    },
    {
      "FIPS": 51159.0,
      "county": "Richmond County"
    },
    {
      "FIPS": 51610.0,
      "county": "Falls Church City"
    },
    {
      "FIPS": 51185.0,
      "county": "Tazewell County"
    },
    {
      "FIPS": 51113.0,
      "county": "Madison County"
    },
    {
      "FIPS": 51029.0,
      "county": "Buckingham County"
    },
    {
      "FIPS": 51193.0,
      "county": "Westmoreland County"
    },
    {
      "FIPS": 51735.0,
      "county": "Poquoson City"
    },
    {
      "FIPS": 51093.0,
      "county": "Isle of Wight County"
    },
    {
      "FIPS": 51183.0,
      "county": "Sussex County"
    },
    {
      "FIPS": 51115.0,
      "county": "Mathews County"
    },
    {
      "FIPS": 51091.0,
      "county": "Highland County"
    },
    {
      "FIPS": 51133.0,
      "county": "Northumberland County"
    },
    {
      "FIPS": 51025.0,
      "county": "Brunswick County"
    },
    {
      "FIPS": 51177.0,
      "county": "Spotsylvania County"
    },
    {
      "FIPS": 51620.0,
      "county": "Franklin City"
    },
    {
      "FIPS": 51107.0,
      "county": "Loudoun County"
    },
    {
      "FIPS": 51530.0,
      "county": "Buena Vista City"
    },
    {
      "FIPS": 51171.0,
      "county": "Shenandoah County"
    },
    {
      "FIPS": 51101.0,
      "county": "King William County"
    },
    {
      "FIPS": 51109.0,
      "county": "Louisa County"
    },
    {
      "FIPS": 51119.0,
      "county": "Middlesex County"
    },
    {
      "FIPS": 51059.0,
      "county": "Fairfax County"
    },
    {
      "FIPS": 51009.0,
      "county": "Amherst County"
    },
    {
      "FIPS": 51043.0,
      "county": "Clarke County"
    },
    {
      "FIPS": 51187.0,
      "county": "Warren County"
    },
    {
      "FIPS": 51683.0,
      "county": "Manassas City"
    },
    {
      "FIPS": 51099.0,
      "county": "King George County"
    },
    {
      "FIPS": 51153.0,
      "county": "Prince William County"
    },
    {
      "FIPS": 51087.0,
      "county": "Henrico County"
    },
    {
      "FIPS": 51075.0,
      "county": "Goochland County"
    },
    {
      "FIPS": 51041.0,
      "county": "Chesterfield County"
    },
    {
      "FIPS": 51550.0,
      "county": "Chesapeake City"
    },
    {
      "FIPS": 51540.0,
      "county": "Charlottesville City"
    },
    {
      "FIPS": 51013.0,
      "county": "Arlington County"
    },
    {
      "FIPS": 51003.0,
      "county": "Albemarle County"
    },
    {
      "FIPS": 51163.0,
      "county": "Rockbridge County"
    },
    {
      "FIPS": 51155.0,
      "county": "Pulaski County"
    },
    {
      "FIPS": 51007.0,
      "county": "Amelia County"
    },
    {
      "FIPS": 51165.0,
      "county": "Rockingham County"
    },
    {
      "FIPS": 51730.0,
      "county": "Petersburg City"
    },
    {
      "FIPS": 51690.0,
      "county": "Martinsville City"
    },
    {
      "FIPS": 51079.0,
      "county": "Greene County"
    },
    {
      "FIPS": 51051.0,
      "county": "Dickenson County"
    },
    {
      "FIPS": 51790.0,
      "county": "Staunton City"
    },
    {
      "FIPS": 51760.0,
      "county": "Richmond City"
    },
    {
      "FIPS": 51830.0,
      "county": "Williamsburg City"
    },
    {
      "FIPS": 51191.0,
      "county": "Washington County"
    },
    {
      "FIPS": 51097.0,
      "county": "King and Queen County"
    },
    {
      "FIPS": 51077.0,
      "county": "Grayson County"
    },
    {
      "FIPS": 51121.0,
      "county": "Montgomery County"
    },
    {
      "FIPS": 51053.0,
      "county": "Dinwiddie County"
    },
    {
      "FIPS": 51085.0,
      "county": "Hanover County"
    },
    {
      "FIPS": 51141.0,
      "county": "Patrick County"
    },
    {
      "FIPS": 51037.0,
      "county": "Charlotte County"
    },
    {
      "FIPS": 51810.0,
      "county": "Virginia Beach City"
    },
    {
      "FIPS": 51670.0,
      "county": "Hopewell City"
    },
    {
      "FIPS": 51081.0,
      "county": "Greensville County"
    },
    {
      "FIPS": 51047.0,
      "county": "Culpeper County"
    },
    {
      "FIPS": 51161.0,
      "county": "Roanoke County"
    },
    {
      "FIPS": 51179.0,
      "county": "Stafford County"
    },
    {
      "FIPS": 51125.0,
      "county": "Nelson County"
    },
    {
      "FIPS": 51510.0,
      "county": "Alexandria City"
    },
    {
      "FIPS": 51049.0,
      "county": "Cumberland County"
    },
    {
      "FIPS": 51197.0,
      "county": "Wythe County"
    },
    {
      "FIPS": 51195.0,
      "county": "Wise County"
    },
    {
      "FIPS": 51173.0,
      "county": "Smyth County"
    },
    {
      "FIPS": 51071.0,
      "county": "Giles County"
    },
    {
      "FIPS": 51139.0,
      "county": "Page County"
    },
    {
      "FIPS": 51720.0,
      "county": "Norton City"
    },
    {
      "FIPS": 51650.0,
      "county": "Hampton City"
    },
    {
      "FIPS": 51640.0,
      "county": "Galax City"
    },
    {
      "FIPS": 51600.0,
      "county": "Fairfax City"
    },
    {
      "FIPS": 51057.0,
      "county": "Essex County"
    },
    {
      "FIPS": 51595.0,
      "county": "Emporia City"
    },
    {
      "FIPS": 51045.0,
      "county": "Craig County"
    },
    {
      "FIPS": 51036.0,
      "county": "Charles City"
    },
    {
      "FIPS": 51019.0,
      "county": "Bedford City"
    },
    {
      "FIPS": 51017.0,
      "county": "Bath County"
    },
    {
      "FIPS": 51095.0,
      "county": "James City"
    },
    {
      "FIPS": 51089.0,
      "county": "Henry County"
    },
    {
      "FIPS": 51770.0,
      "county": "Roanoke City"
    },
    {
      "FIPS": 51750.0,
      "county": "Radford City"
    },
    {
      "FIPS": 51800.0,
      "county": "Suffolk City"
    },
    {
      "FIPS": 51199.0,
      "county": "York County"
    },
    {
      "FIPS": 51105.0,
      "county": "Lee County"
    },
    {
      "FIPS": 51169.0,
      "county": "Scott County"
    },
    {
      "FIPS": 51710.0,
      "county": "Norfolk City"
    },
    {
      "FIPS": 51021.0,
      "county": "Bland County"
    },
    {
      "FIPS": 51063.0,
      "county": "Floyd County"
    },
    {
      "FIPS": 51520.0,
      "county": "Bristol City"
    },
    {
      "FIPS": 51775.0,
      "county": "Salem City"
    },
    {
      "FIPS": 51181.0,
      "county": "Surry County"
    },
    {
      "FIPS": 51840.0,
      "county": "Winchester City"
    },
    {
      "FIPS": 51820.0,
      "county": "Waynesboro City"
    },
    {
      "FIPS": 51175.0,
      "county": "Southampton County"
    },
    {
      "FIPS": 51167.0,
      "county": "Russell County"
    },
    {
      "FIPS": 51157.0,
      "county": "Rappahannock County"
    },
    {
      "FIPS": 51149.0,
      "county": "Prince George County"
    },
    {
      "FIPS": 51147.0,
      "county": "Prince Edward County"
    },
    {
      "FIPS": 51145.0,
      "county": "Powhatan County"
    },
    {
      "FIPS": 51740.0,
      "county": "Portsmouth City"
    },
    {
      "FIPS": 51143.0,
      "county": "Pittsylvania County"
    },
    {
      "FIPS": 51137.0,
      "county": "Orange County"
    },
    {
      "FIPS": 51135.0,
      "county": "Nottoway County"
    },
    {
      "FIPS": 51131.0,
      "county": "Northampton County"
    },
    {
      "FIPS": 51700.0,
      "county": "Newport News City"
    },
    {
      "FIPS": 51127.0,
      "county": "New Kent County"
    },
    {
      "FIPS": 51685.0,
      "county": "Manassas Park City"
    },
    {
      "FIPS": 51680.0,
      "county": "Lynchburg City"
    }
  ],
  "VT": [
    {
      "FIPS": 50025.0,
      "county": "Windham County"
    },
    {
      "FIPS": 50023.0,
      "county": "Washington County"
    },
    {
      "FIPS": 50021.0,
      "county": "Rutland County"
    },
    {
      "FIPS": 50011.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 50001.0,
      "county": "Addison County"
    },
    {
      "FIPS": 50007.0,
      "county": "Chittenden County"
    },
    {
      "FIPS": 50017.0,
      "county": "Orange County"
    },
    {
      "FIPS": 50027.0,
      "county": "Windsor County"
    },
    {
      "FIPS": 50003.0,
      "county": "Bennington County"
    },
    {
      "FIPS": 50019.0,
      "county": "Orleans County"
    },
    {
      "FIPS": 50015.0,
      "county": "Lamoille County"
    },
    {
      "FIPS": 50013.0,
      "county": "Grand Isle County"
    },
    {
      "FIPS": 50005.0,
      "county": "Caledonia County"
    },
    {
      "FIPS": 50009.0,
      "county": "Essex County"
    },
    {
      "FIPS": 50025.0,
      "county": "Windham County"
    },
    {
      "FIPS": 50023.0,
      "county": "Washington County"
    },
    {
      "FIPS": 50021.0,
      "county": "Rutland County"
    },
    {
      "FIPS": 50011.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 50001.0,
      "county": "Addison County"
    }
  ],
  "WA": [
    {
      "FIPS": 53075.0,
      "county": "Whitman County"
    },
    {
      "FIPS": 53073.0,
      "county": "Whatcom County"
    },
    {
      "FIPS": 53071.0,
      "county": "Walla Walla County"
    },
    {
      "FIPS": 53049.0,
      "county": "Pacific County"
    },
    {
      "FIPS": 53031.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 53027.0,
      "county": "Grays Harbor County"
    },
    {
      "FIPS": 53021.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 53007.0,
      "county": "Chelan County"
    },
    {
      "FIPS": 53039.0,
      "county": "Klickitat County"
    },
    {
      "FIPS": 53009.0,
      "county": "Clallam County"
    },
    {
      "FIPS": 53047.0,
      "county": "Okanogan County"
    },
    {
      "FIPS": 53051.0,
      "county": "Pend Oreille County"
    },
    {
      "FIPS": 53017.0,
      "county": "Douglas County"
    },
    {
      "FIPS": 53013.0,
      "county": "Columbia County"
    },
    {
      "FIPS": 53057.0,
      "county": "Skagit County"
    },
    {
      "FIPS": 53065.0,
      "county": "Stevens County"
    },
    {
      "FIPS": 53063.0,
      "county": "Spokane County"
    },
    {
      "FIPS": 53067.0,
      "county": "Thurston County"
    },
    {
      "FIPS": 53035.0,
      "county": "Kitsap County"
    },
    {
      "FIPS": 53043.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 53061.0,
      "county": "Snohomish County"
    },
    {
      "FIPS": 53053.0,
      "county": "Pierce County"
    },
    {
      "FIPS": 53015.0,
      "county": "Cowlitz County"
    },
    {
      "FIPS": 53023.0,
      "county": "Garfield County"
    },
    {
      "FIPS": 53003.0,
      "county": "Asotin County"
    },
    {
      "FIPS": 53077.0,
      "county": "Yakima County"
    },
    {
      "FIPS": 53059.0,
      "county": "Skamania County"
    },
    {
      "FIPS": 53037.0,
      "county": "Kittitas County"
    },
    {
      "FIPS": 53069.0,
      "county": "Wahkiakum County"
    },
    {
      "FIPS": 53029.0,
      "county": "Island County"
    },
    {
      "FIPS": 53055.0,
      "county": "San Juan County"
    },
    {
      "FIPS": 53005.0,
      "county": "Benton County"
    },
    {
      "FIPS": 53045.0,
      "county": "Mason County"
    },
    {
      "FIPS": 53025.0,
      "county": "Grant County"
    },
    {
      "FIPS": 53041.0,
      "county": "Lewis County"
    },
    {
      "FIPS": 53011.0,
      "county": "Clark County"
    },
    {
      "FIPS": 53019.0,
      "county": "Ferry County"
    },
    {
      "FIPS": 53001.0,
      "county": "Adams County"
    },
    {
      "FIPS": 53033.0,
      "county": "King County"
    },
    {
      "FIPS": 53075.0,
      "county": "Whitman County"
    },
    {
      "FIPS": 53073.0,
      "county": "Whatcom County"
    },
    {
      "FIPS": 53071.0,
      "county": "Walla Walla County"
    },
    {
      "FIPS": 53049.0,
      "county": "Pacific County"
    },
    {
      "FIPS": 53031.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 53027.0,
      "county": "Grays Harbor County"
    },
    {
      "FIPS": 53021.0,
      "county": "Franklin County"
    },
    {
      "FIPS": 53007.0,
      "county": "Chelan County"
    }
  ],
  "WI": [
    {
      "FIPS": 55139.0,
      "county": "Winnebago County"
    },
    {
      "FIPS": 55131.0,
      "county": "Washington County"
    },
    {
      "FIPS": 55127.0,
      "county": "Walworth County"
    },
    {
      "FIPS": 55123.0,
      "county": "Vernon County"
    },
    {
      "FIPS": 55117.0,
      "county": "Sheboygan County"
    },
    {
      "FIPS": 55115.0,
      "county": "Shawano County"
    },
    {
      "FIPS": 55103.0,
      "county": "Richland County"
    },
    {
      "FIPS": 55101.0,
      "county": "Racine County"
    },
    {
      "FIPS": 55097.0,
      "county": "Portage County"
    },
    {
      "FIPS": 55089.0,
      "county": "Ozaukee County"
    },
    {
      "FIPS": 55085.0,
      "county": "Oneida County"
    },
    {
      "FIPS": 55129.0,
      "county": "Washburn County"
    },
    {
      "FIPS": 55081.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 55061.0,
      "county": "Kewaunee County"
    },
    {
      "FIPS": 55055.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 55053.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 55047.0,
      "county": "Green Lake County"
    },
    {
      "FIPS": 55039.0,
      "county": "Fond Du Lac County"
    },
    {
      "FIPS": 55037.0,
      "county": "Florence County"
    },
    {
      "FIPS": 55035.0,
      "county": "Eau Claire County"
    },
    {
      "FIPS": 55031.0,
      "county": "Douglas County"
    },
    {
      "FIPS": 55021.0,
      "county": "Columbia County"
    },
    {
      "FIPS": 55015.0,
      "county": "Calumet County"
    },
    {
      "FIPS": 55013.0,
      "county": "Burnett County"
    },
    {
      "FIPS": 55003.0,
      "county": "Ashland County"
    },
    {
      "FIPS": 55007.0,
      "county": "Bayfield County"
    },
    {
      "FIPS": 55041.0,
      "county": "Forest County"
    },
    {
      "FIPS": 55087.0,
      "county": "Outagamie County"
    },
    {
      "FIPS": 55063.0,
      "county": "La Crosse County"
    },
    {
      "FIPS": 55017.0,
      "county": "Chippewa County"
    },
    {
      "FIPS": 55119.0,
      "county": "Taylor County"
    },
    {
      "FIPS": 55137.0,
      "county": "Waushara County"
    },
    {
      "FIPS": 55113.0,
      "county": "Sawyer County"
    },
    {
      "FIPS": 55093.0,
      "county": "Pierce County"
    },
    {
      "FIPS": 55073.0,
      "county": "Marathon County"
    },
    {
      "FIPS": 55067.0,
      "county": "Langlade County"
    },
    {
      "FIPS": 55011.0,
      "county": "Buffalo County"
    },
    {
      "FIPS": 55069.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 55135.0,
      "county": "Waupaca County"
    },
    {
      "FIPS": 55077.0,
      "county": "Marquette County"
    },
    {
      "FIPS": 55071.0,
      "county": "Manitowoc County"
    },
    {
      "FIPS": 55109.0,
      "county": "St Croix County"
    },
    {
      "FIPS": 55023.0,
      "county": "Crawford County"
    },
    {
      "FIPS": 55065.0,
      "county": "Lafayette County"
    },
    {
      "FIPS": 55059.0,
      "county": "Kenosha County"
    },
    {
      "FIPS": 55005.0,
      "county": "Barron County"
    },
    {
      "FIPS": 55133.0,
      "county": "Waukesha County"
    },
    {
      "FIPS": 55083.0,
      "county": "Oconto County"
    },
    {
      "FIPS": 55078.0,
      "county": "Menominee County"
    },
    {
      "FIPS": 55057.0,
      "county": "Juneau County"
    },
    {
      "FIPS": 55075.0,
      "county": "Marinette County"
    },
    {
      "FIPS": 55079.0,
      "county": "Milwaukee County"
    },
    {
      "FIPS": 55121.0,
      "county": "Trempealeau County"
    },
    {
      "FIPS": 55141.0,
      "county": "Wood County"
    },
    {
      "FIPS": 55111.0,
      "county": "Sauk County"
    },
    {
      "FIPS": 55105.0,
      "county": "Rock County"
    },
    {
      "FIPS": 55099.0,
      "county": "Price County"
    },
    {
      "FIPS": 55095.0,
      "county": "Polk County"
    },
    {
      "FIPS": 55049.0,
      "county": "Iowa County"
    },
    {
      "FIPS": 55045.0,
      "county": "Green County"
    },
    {
      "FIPS": 55043.0,
      "county": "Grant County"
    },
    {
      "FIPS": 55033.0,
      "county": "Dunn County"
    },
    {
      "FIPS": 55027.0,
      "county": "Dodge County"
    },
    {
      "FIPS": 55009.0,
      "county": "Brown County"
    },
    {
      "FIPS": 55091.0,
      "county": "Pepin County"
    },
    {
      "FIPS": 55107.0,
      "county": "Rusk County"
    },
    {
      "FIPS": 55125.0,
      "county": "Vilas County"
    },
    {
      "FIPS": 55029.0,
      "county": "Door County"
    },
    {
      "FIPS": 55025.0,
      "county": "Dane County"
    },
    {
      "FIPS": 55051.0,
      "county": "Iron County"
    },
    {
      "FIPS": 55019.0,
      "county": "Clark County"
    },
    {
      "FIPS": 55001.0,
      "county": "Adams County"
    },
    {
      "FIPS": 55139.0,
      "county": "Winnebago County"
    },
    {
      "FIPS": 55131.0,
      "county": "Washington County"
    },
    {
      "FIPS": 55127.0,
      "county": "Walworth County"
    },
    {
      "FIPS": 55123.0,
      "county": "Vernon County"
    },
    {
      "FIPS": 55117.0,
      "county": "Sheboygan County"
    },
    {
      "FIPS": 55115.0,
      "county": "Shawano County"
    },
    {
      "FIPS": 55103.0,
      "county": "Richland County"
    },
    {
      "FIPS": 55101.0,
      "county": "Racine County"
    },
    {
      "FIPS": 55097.0,
      "county": "Portage County"
    },
    {
      "FIPS": 55089.0,
      "county": "Ozaukee County"
    },
    {
      "FIPS": 55085.0,
      "county": "Oneida County"
    },
    {
      "FIPS": 55129.0,
      "county": "Washburn County"
    },
    {
      "FIPS": 55081.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 55061.0,
      "county": "Kewaunee County"
    },
    {
      "FIPS": 55055.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 55053.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 55047.0,
      "county": "Green Lake County"
    },
    {
      "FIPS": 55039.0,
      "county": "Fond Du Lac County"
    },
    {
      "FIPS": 55037.0,
      "county": "Florence County"
    },
    {
      "FIPS": 55035.0,
      "county": "Eau Claire County"
    },
    {
      "FIPS": 55031.0,
      "county": "Douglas County"
    },
    {
      "FIPS": 55021.0,
      "county": "Columbia County"
    },
    {
      "FIPS": 55015.0,
      "county": "Calumet County"
    },
    {
      "FIPS": 55013.0,
      "county": "Burnett County"
    },
    {
      "FIPS": 55003.0,
      "county": "Ashland County"
    },
    {
      "FIPS": 55007.0,
      "county": "Bayfield County"
    }
  ],
  "WV": [
    {
      "FIPS": 54109.0,
      "county": "Wyoming County"
    },
    {
      "FIPS": 54103.0,
      "county": "Wetzel County"
    },
    {
      "FIPS": 54097.0,
      "county": "Upshur County"
    },
    {
      "FIPS": 54091.0,
      "county": "Taylor County"
    },
    {
      "FIPS": 54089.0,
      "county": "Summers County"
    },
    {
      "FIPS": 54083.0,
      "county": "Randolph County"
    },
    {
      "FIPS": 54081.0,
      "county": "Raleigh County"
    },
    {
      "FIPS": 54075.0,
      "county": "Pocahontas County"
    },
    {
      "FIPS": 54071.0,
      "county": "Pendleton County"
    },
    {
      "FIPS": 54063.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 54057.0,
      "county": "Mineral County"
    },
    {
      "FIPS": 54055.0,
      "county": "Mercer County"
    },
    {
      "FIPS": 54051.0,
      "county": "Marshall County"
    },
    {
      "FIPS": 54049.0,
      "county": "Marion County"
    },
    {
      "FIPS": 54043.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 54029.0,
      "county": "Hancock County"
    },
    {
      "FIPS": 54027.0,
      "county": "Hampshire County"
    },
    {
      "FIPS": 54013.0,
      "county": "Calhoun County"
    },
    {
      "FIPS": 54011.0,
      "county": "Cabell County"
    },
    {
      "FIPS": 54085.0,
      "county": "Ritchie County"
    },
    {
      "FIPS": 54021.0,
      "county": "Gilmer County"
    },
    {
      "FIPS": 54065.0,
      "county": "Morgan County"
    },
    {
      "FIPS": 54093.0,
      "county": "Tucker County"
    },
    {
      "FIPS": 54003.0,
      "county": "Berkeley County"
    },
    {
      "FIPS": 54035.0,
      "county": "Jackson County"
    },
    {
      "FIPS": 54009.0,
      "county": "Brooke County"
    },
    {
      "FIPS": 54079.0,
      "county": "Putnam County"
    },
    {
      "FIPS": 54017.0,
      "county": "Doddridge County"
    },
    {
      "FIPS": 54037.0,
      "county": "Jefferson County"
    },
    {
      "FIPS": 54039.0,
      "county": "Kanawha County"
    },
    {
      "FIPS": 54033.0,
      "county": "Harrison County"
    },
    {
      "FIPS": 54061.0,
      "county": "Monongalia County"
    },
    {
      "FIPS": 54101.0,
      "county": "Webster County"
    },
    {
      "FIPS": 54047.0,
      "county": "McDowell County"
    },
    {
      "FIPS": 54025.0,
      "county": "Greenbrier County"
    },
    {
      "FIPS": 54077.0,
      "county": "Preston County"
    },
    {
      "FIPS": 54067.0,
      "county": "Nicholas County"
    },
    {
      "FIPS": 54001.0,
      "county": "Barbour County"
    },
    {
      "FIPS": 54019.0,
      "county": "Fayette County"
    },
    {
      "FIPS": 54007.0,
      "county": "Braxton County"
    },
    {
      "FIPS": 54073.0,
      "county": "Pleasants County"
    },
    {
      "FIPS": 54099.0,
      "county": "Wayne County"
    },
    {
      "FIPS": 54095.0,
      "county": "Tyler County"
    },
    {
      "FIPS": 54087.0,
      "county": "Roane County"
    },
    {
      "FIPS": 54069.0,
      "county": "Ohio County"
    },
    {
      "FIPS": 54059.0,
      "county": "Mingo County"
    },
    {
      "FIPS": 54045.0,
      "county": "Logan County"
    },
    {
      "FIPS": 54041.0,
      "county": "Lewis County"
    },
    {
      "FIPS": 54005.0,
      "county": "Boone County"
    },
    {
      "FIPS": 54023.0,
      "county": "Grant County"
    },
    {
      "FIPS": 54053.0,
      "county": "Mason County"
    },
    {
      "FIPS": 54015.0,
      "county": "Clay County"
    },
    {
      "FIPS": 54105.0,
      "county": "Wirt County"
    },
    {
      "FIPS": 54107.0,
      "county": "Wood County"
    },
    {
      "FIPS": 54031.0,
      "county": "Hardy County"
    },
    {
      "FIPS": 54109.0,
      "county": "Wyoming County"
    },
    {
      "FIPS": 54103.0,
      "county": "Wetzel County"
    },
    {
      "FIPS": 54097.0,
      "county": "Upshur County"
    },
    {
      "FIPS": 54091.0,
      "county": "Taylor County"
    },
    {
      "FIPS": 54089.0,
      "county": "Summers County"
    },
    {
      "FIPS": 54083.0,
      "county": "Randolph County"
    },
    {
      "FIPS": 54081.0,
      "county": "Raleigh County"
    },
    {
      "FIPS": 54075.0,
      "county": "Pocahontas County"
    },
    {
      "FIPS": 54071.0,
      "county": "Pendleton County"
    },
    {
      "FIPS": 54063.0,
      "county": "Monroe County"
    },
    {
      "FIPS": 54057.0,
      "county": "Mineral County"
    },
    {
      "FIPS": 54055.0,
      "county": "Mercer County"
    },
    {
      "FIPS": 54051.0,
      "county": "Marshall County"
    },
    {
      "FIPS": 54049.0,
      "county": "Marion County"
    },
    {
      "FIPS": 54043.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 54029.0,
      "county": "Hancock County"
    },
    {
      "FIPS": 54027.0,
      "county": "Hampshire County"
    },
    {
      "FIPS": 54013.0,
      "county": "Calhoun County"
    },
    {
      "FIPS": 54011.0,
      "county": "Cabell County"
    }
  ],
  "WY": [
    {
      "FIPS": 56045.0,
      "county": "Weston County"
    },
    {
      "FIPS": 56037.0,
      "county": "Sweetwater County"
    },
    {
      "FIPS": 56035.0,
      "county": "Sublette County"
    },
    {
      "FIPS": 56031.0,
      "county": "Platte County"
    },
    {
      "FIPS": 56025.0,
      "county": "Natrona County"
    },
    {
      "FIPS": 56023.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 56021.0,
      "county": "Laramie County"
    },
    {
      "FIPS": 56019.0,
      "county": "Johnson County"
    },
    {
      "FIPS": 56015.0,
      "county": "Goshen County"
    },
    {
      "FIPS": 56013.0,
      "county": "Fremont County"
    },
    {
      "FIPS": 56009.0,
      "county": "Converse County"
    },
    {
      "FIPS": 56007.0,
      "county": "Carbon County"
    },
    {
      "FIPS": 56005.0,
      "county": "Campbell County"
    },
    {
      "FIPS": 56001.0,
      "county": "Albany County"
    },
    {
      "FIPS": 56003.0,
      "county": "Big Horn County"
    },
    {
      "FIPS": 56027.0,
      "county": "Niobrara County"
    },
    {
      "FIPS": 56033.0,
      "county": "Sheridan County"
    },
    {
      "FIPS": 56017.0,
      "county": "Hot Springs County"
    },
    {
      "FIPS": 56043.0,
      "county": "Washakie County"
    },
    {
      "FIPS": 56041.0,
      "county": "Uinta County"
    },
    {
      "FIPS": 56039.0,
      "county": "Teton County"
    },
    {
      "FIPS": 56029.0,
      "county": "Park County"
    },
    {
      "FIPS": 56011.0,
      "county": "Crook County"
    },
    {
      "FIPS": 56045.0,
      "county": "Weston County"
    },
    {
      "FIPS": 56037.0,
      "county": "Sweetwater County"
    },
    {
      "FIPS": 56035.0,
      "county": "Sublette County"
    },
    {
      "FIPS": 56031.0,
      "county": "Platte County"
    },
    {
      "FIPS": 56025.0,
      "county": "Natrona County"
    },
    {
      "FIPS": 56023.0,
      "county": "Lincoln County"
    },
    {
      "FIPS": 56021.0,
      "county": "Laramie County"
    },
    {
      "FIPS": 56019.0,
      "county": "Johnson County"
    },
    {
      "FIPS": 56015.0,
      "county": "Goshen County"
    },
    {
      "FIPS": 56013.0,
      "county": "Fremont County"
    },
    {
      "FIPS": 56009.0,
      "county": "Converse County"
    },
    {
      "FIPS": 56007.0,
      "county": "Carbon County"
    },
    {
      "FIPS": 56005.0,
      "county": "Campbell County"
    }
  ]
};

    // Public API here
    return countiesByState;
  });
