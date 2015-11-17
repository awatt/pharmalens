'use strict';

angular.module('foglightApp')
.directive('countyMap', ['d3Service', 'counties', 'diabetes', 'payments', 'grants', 'totals', function(d3Service, counties, diabetes, payments, grants, totals) {
	return {
		restrict: 'EA',
		scope: {
			analysisResults: '='
		},

		link: function (scope, element, attrs) {

			d3Service.d3().then(function(d3){

				var width = 960,
				height = 600,
				buckets = 9,
				colors = ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],
				// colors = ["#fcd6d6","#f5c5c5","#eea9a9","#e48686","#db5e5e","#d13737","#c91919","#a70000"],
				dataSets = [diabetes, payments, grants, totals]

				var projection = d3.geo.albersUsa()
				.scale(1280)
				.translate([width / 2, height / 2]);

				var path = d3.geo.path()
				.projection(projection);

				var svg = d3.select('[id="countyMap"]').append("svg")
				.attr("width", width)
				.attr("height", height)
				.append("g")
				.attr("class", "counties")

				var us = counties;

				// queue()
				// .defer(d3.csv, unemployments, function(d) { console.log(d); rateById.set(d.id, +d.rate); })
				// .await(ready);

				// d3.csv(unemployments, function(d) { console.log(d); rateById.set(d.id, +d.rate); });


				// function ready(error, us) {
				// 	if (error) throw error;

				var renderMap =  function(data){

				var rateById = d3.map();
				var nameById = d3.map();

				for (var i = 0, max = data.length; i < max; i++){
					var d = data[i];
					rateById.set(d.id, +d.rate)
					nameById.set(d.id, d.name + ', ' + d.state)
				}

				console.log(rateById)
				console.log(nameById)


				var colorScale = d3.scale.quantile()
				// .domain([d3.min(data, function (d){ if(d.rate) return d.rate; }), buckets-1, d3.max(data, function (d){ return d.rate; })])
				.domain([0, buckets - 1, d3.max(data, function (d){ return d.rate; })])
				.range(colors)

				var counties = svg.selectAll("path")
				.data(topojson.feature(us, us.objects.counties).features)

				counties.enter().append("path")
			  	.attr("d", path)
			  	.style("fill", colors[0]);

			  	counties.transition().duration(1000)
			  	.style("fill", function(d) { if (rateById.get(d.id) === undefined){return 0}; return colorScale(rateById.get(d.id)); });

			  	// .attr("class", function(d) { var quantized = colorScale(rateById.get(d.id)); return quantized })

			  	counties.exit().remove();

			  	svg.append("path")
				.datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
				.attr("class", "states")
				.attr("d", path);
				
				
			}

				            //HeatMap Specific Tooltip
            // d3.selectAll('.counties')
            //     .on('mouseover', function(d) {
            //         var stateId = d.id.slice(d.id.length - 2);
            //         var funding = formatMoney(stateHeat[stateId]);

            //         d3.select(this).style('opacity', 0.7)
            //         tooltip.transition()
            //             .style('opacity', .9)
            //         tooltip.html([stateId, funding].join(': '))
            //     })
            //     .on('mousemove',function(d){
            //         tooltip
            //             .style('left', (d3.event.pageX - 40) + 'px')
            //             .style('top', (d3.event.pageY - 30) + 'px')
            //     })
            //     .on('mouseout', function(d) {
            //         d3.select(this)
            //             .style('opacity', .8)
            //         tooltip.transition().duration(500)
            //             .style('opacity', 0)
            //     })
            //     .on('click', function(d) {
            //         var stateAbbrev = d.id.split('-')[1];
            //         window.location.replace('/state/' + stateAbbrev);
            //     })


				renderMap(dataSets[0]);



			      d3.select(self.frameElement).style("height", height + "px");

			      var datasetpicker = d3.select("#dataset-picker").selectAll(".dataset-button")
			      .data(dataSets);

			      datasetpicker.enter()
			      .append("input")
			      .attr("value", function(d){ return "" + d })
			      .attr("type", "button")
			      .attr("class", "dataset-button")
			      .on("click", function(d) {
			      	renderMap(d);
			      });

		//close d3 service CB function
	})

		//close link function
	}

    //close return object    
}

    //close main directive CB function
}]);
