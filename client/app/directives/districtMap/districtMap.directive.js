'use strict';

angular.module('foglightApp')
.directive('districtMap', ['d3Service', 'districts', 'unemployments', function(d3Service, districts, unemployments) {
	return {
		restrict: 'EA',
		scope: {
			analysisResults: '='
		},

		link: function (scope, element, attrs) {

			d3Service.d3().then(function(d3){

				var width = 960,
				height = 600;

				var rateById = d3.map();

				var quantize = d3.scale.quantize()
				// .domain([0, .15])
				.domain([3, 15.8])
				.range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));

				var projection = d3.geo.albersUsa()
				.scale(1280)
				.translate([width / 2, height / 2]);

				var path = d3.geo.path()
				.projection(projection);

				// console.log(path)

				var svg = d3.select('[id="countyMap"]').append("svg")
				.attr("width", width)
				.attr("height", height);

				var us = districts;

				console.log(unemployments)

				for (var i = 0, max = unemployments.length; i < max; i++){
					var d = unemployments[i];
					rateById.set(d.id, +d.rate)

				}

				// queue()
				// .defer(d3.csv, unemployments, function(d) { console.log(d); rateById.set(d.id, +d.rate); })
				// .await(ready);

				// console.log(unemployments)

			// d3.csv(unemployments, function(d) { console.log(d); rateById.set(d.id, +d.rate); });


			// function ready(error, us) {
			// 	if (error) throw error;

				svg.append("g")
				.attr("class", "counties")
				.selectAll("path")
				.data(topojson.feature(us, us.objects.counties).features)
				.enter().append("path")
			  // .attr("class", function(d) { console.log(rateById.get(d.id)) })
			  .attr("class", function(d) { var quantized = quantize(rateById.get(d.id)); console.log(quantized); return quantized })
			  .attr("d", path);

			  svg.append("path")
			  .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
			  .attr("class", "states")
			  .attr("d", path);
			// }

			d3.select(self.frameElement).style("height", height + "px");


		//close d3 service CB function
	})

		//close link function
	}

    //close return object    
}

    //close main directive CB function
}]);