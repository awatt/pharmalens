'use strict';

angular.module('foglightApp')
.directive('countyMap', ['d3Service', 'counties', 'diabetes', 'payments', 'grants', 'totals', function(d3Service, counties, diabetes, payments, grants, totals) {
	return {
		restrict: 'EA',
		scope: {
			countyinfo: '=',
			onCountyClick: '&',
			dataset: '=',
			year: '=',
			bins: '=',
			metric: '=',
			gmap: '=',
			pmap: '='
		},

		link: function (scope, element, attrs) {

			d3Service.d3().then(function(d3){

				var width = 960,
				height = 600,
				buckets = 9,
				colors = ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]
				// colors = ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"]
				 // colors = ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"]
				// colors = ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"]
				// colors = ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"]

				//link factory datasets
				var dataSets = {
					'2013': {
						'diabetes': diabetes,
						'payments': payments['2013'],
						'grants': grants['2013'],
						'totals': totals['2013']
					},
					'2014': {
						'diabetes': diabetes,
						'payments': payments['2014'],
						'grants': grants['2014'],
						'totals': totals['2014']
					}
				}

				//load datamaps for tooltips
				var dataMaps = {
					'2013': {
						'diabetes': d3.map(dataSets['2013']['diabetes'], function(d) { return d.FIPS; }),
						'payments': d3.map(dataSets['2013']['payments'], function(d) { return d.FIPS; }),
						'grants': d3.map(dataSets['2013']['grants'], function(d) { return d.FIPS; }),
						'totals': d3.map(dataSets['2013']['totals'], function(d) { return d.FIPS; })
					},
					'2014': {
						'diabetes': d3.map(dataSets['2014']['diabetes'], function(d) { return d.FIPS; }),
						'payments': d3.map(dataSets['2014']['payments'], function(d) { return d.FIPS; }),
						'grants': d3.map(dataSets['2014']['grants'], function(d) { return d.FIPS; }),
						'totals': d3.map(dataSets['2014']['totals'], function(d) { return d.FIPS; })
					}
				}

				var frameWidth = d3.select('#countyMap')[0][0].clientWidth,
				margin = (frameWidth-width/2);
		        
		        //tooltip template
		        var tooltip = d3.select('body').append('div')
		        .attr("class", "tooltip")
		        .style('position', 'absolute')
		        .style("height", "170px")
		        .style("width", "260px")
		        .style('padding', '15px')
		        .style('background', '#1D2024')
		        .style('border-radius', '4px')
		        .style('color', 'white')
		        .style('opacity', '0')
		        .style('font-size', '1.25rem')

				var projection = d3.geo.albersUsa()
				.scale(1280)
				.translate([width / 2, height / 2]);

				var path = d3.geo.path()
				.projection(projection);

				var svg = d3.select('[id="countyMap"]').append("svg")
				.attr("width", width)
				.attr("height", height + 35)
				.attr("transform", 
						"translate(" + margin + "," + 0 + ")")
				.append("g")
				.attr("class", "counties")

				var us = counties;

				//re-run on toggling datasets and metrics (total vs. per capita stats)
				var renderMap =  function(displayDataSet,newMetric){

					//var references for applicable datamaps based upon year, new dataset toggle and metric
					var dMap = dataMaps[scope.year]['diabetes'],
						pMap = dataMaps[scope.year]['payments'],
						gMap = dataMaps[scope.year]['grants'],
						tMap = dataMaps[scope.year]['totals'],
						data = dataSets[scope.year][displayDataSet],
						displayMap = dataMaps[scope.year][displayDataSet],
						metric = function(){ if(newMetric === 'total'){ return 'number';} return 'rate'; }(),
						maxDataPoint = d3.max(data, function (d){ return d[metric]; }),
						meanDataPoint = d3.mean(data, function (d){ return d[metric]; })

						//put grant and payment maps on scope for reference in sankey map build
						//in main controller
						scope.gmap = gMap;
						scope.pmap = pMap;

					//set up colorscale for map render by county
					var colorScale = d3.scale.quantile()
					.domain([0, meanDataPoint, maxDataPoint])
					.range(colors)


     				//add counties
					var counties = svg.selectAll("path")
					.data(topojson.feature(us, us.objects.counties).features)

					counties.enter().append("path")
				  	.attr("d", path)
				  	.attr("class", "county")
				  	.attr("data-toggle", "modal")
				  	.attr("data-target", "#sankeyModal")
				  	.style("fill", colors[0])
				  	.attr("transform", 
						"translate(0,35)")

				  	//transition for county color refill on data toggle
				  	counties.transition().duration(1000)
				  	.style("fill", function(d) { 
				  		var countyData = displayMap.get(d.id); 
				  		if (countyData) { 
				  			return colorScale(countyData[metric])
				  		} else {
				  			return colorScale(0)
				  		}; 
				  	});

				  	//clear counties with no new color data on toggle
				  	counties.exit().remove();


				  	svg.append("path")
					.datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
					.attr("class", "states")
					.attr("d", path)
					.attr("transform", 
						"translate(0,35)");

					//add legend
					var legendData = [],
					formatNumber = d3.format(",.0f"),
					formatPercent = d3.format(",.1f"),
					formatLegendData = function(color){
						var datum = {};
						datum['max'] = colorScale.invertExtent(color)[1];
						datum['min'] = colorScale.invertExtent(color)[0];
						datum['color'] = color;
						legendData.push(datum);
					};
					
					colors.forEach(formatLegendData);

					var legend = svg.selectAll(".legend")
					.data(legendData)

					legend.enter().append("g")
					.attr("class", "legend");

					legend.append("rect")
					.attr("x", function(d, i) { return frameWidth/28 + 98 * i} )
					.attr("y", 0)
					.attr("width", 98)
					.attr("height", 12)
					.style("fill", function(d){ return d.color});

					d3.selectAll("text").remove();


					//add legend text
					legend.append("text")
					.attr("class", "ticks")
					.text(function(d) { 
						return (scope.dataset === 'diabetes' && scope.metric === 'per_capita') 
						? "≥ " + formatPercent(d.min) + "%" 
						: (scope.dataset === 'diabetes') 
							? "≥ " + formatNumber(d.min)
							: "≥ $" + formatNumber(d.min); })
					.attr("x", function(d, i) { return frameWidth/28 + 98 * i})
					.attr("y", 27)

					//annotation
					legend.append("text")
					.attr("class", "annotation")
					.text(function(d) { return (scope.dataset === 'diabetes') 
						? "(based on 2012 census data)" 
						: (scope.metric === 'total')
							? "(total by county)"
							: "(per 1,000 residents by county)" })
					.attr("x", function() { return frameWidth/4.8 + 450})
					.attr("y", 60)
					
					//display data formatting
					var currencyFormat = d3.format("$,.2f"),
						numberFormat = d3.format(","),
						rateFormat = d3.format("%"),
						setNum = function(val){
							if (!val){ return 0};
							return val.number;
						},
						setRate = function(val){
							if (!val){ return 0};
							return val.rate;
						},
						countyFormat = function(str){
							var arr = str.split(' ');
							var lastIndex = arr.length - 1;
							var last = arr[lastIndex].toLowerCase();
							if(last === "county"){
								var subArr = arr.slice(0,lastIndex);
								subArr.push('Cty');
								var newStr = subArr.join(' ');
								return newStr;
							}
							return str;
						}

					// County Specific Tooltip
					d3.selectAll('.county')
					.on('mouseover', function(d) {

						var countyState = countyFormat(dMap.get(d.id).county) + ', ' + dMap.get(d.id).state,
							population = dMap.get(d.id).population,
							dTotal = setNum(dMap.get(d.id)),
							dRate = setRate(dMap.get(d.id)),
							pTotal = setNum(pMap.get(d.id)),
							pRate = setRate(pMap.get(d.id)),
							gTotal = setNum(gMap.get(d.id)),
							gRate = setRate(gMap.get(d.id)),
							tTotal = setNum(tMap.get(d.id)),
							tRate = setRate(tMap.get(d.id));

						d3.select(this).style('opacity', 0.7)
						tooltip.transition()
						.style('opacity', .85)
						.style('z-index', 100)
						tooltip.html(function() {
							return "<strong style='color:  #FA3232; font-size: 1.6rem; margin-top: -5px'>" + countyState + " (" + scope.year + ")</strong>" +	
							"<div style='margin-top: 0.4rem'><strong style='font-size: 1.3rem; margin-top: 0.8rem'>Diabetes Cases: </strong><strong style='color: #F75707; font-size: 1.2rem'> &nbsp" + numberFormat(dTotal) + "&nbsp (" + dRate + "%</strong>*)</div>" +
							"<div style='margin-top: 0.4rem'><strong style='font-size: 1.3rem'>Payments: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + currencyFormat(pTotal) + "&nbsp (" + currencyFormat(pRate) + "</strong>**)</div>" +
							"<div><strong style='font-size: 1.3rem; margin-top: -35px'>Grants: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + currencyFormat(gTotal) + "&nbsp (" + currencyFormat(gRate) + "</strong>**)</div>" +
							"<div><strong style='font-size: 1.3rem; margin-top: -35px'>Totals: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + currencyFormat(tTotal) + "&nbsp (" + currencyFormat(tRate) + "</strong>**)</div>" +
							"<div style='color: white; font-size: 1rem; margin-top: 0.4rem'>&nbsp&nbsp*2012 est. pop.: <span style='color: #F75707'>" + numberFormat(population) + "</span></div>" + 
							"<div style='color: white; font-size: 1rem'>&nbsp&nbsp**rate per 1,000 residents</div>";
						})
					})
					.on('mousemove',function(d){
						tooltip
						.style('left', (d3.event.pageX - 300) + 'px')
						.style('top', (d3.event.pageY - 240) + 'px')
					})
					.on('mouseout', function(d) {
						d3.select(this)
						.style('opacity', 1)
						tooltip.transition().duration(300)
						.style('opacity', 0)
						.style('z-index', -100)
					})
					.on('click', function(d) {

						//update scope for full name of queried county
						var countyState = dMap.get(d.id).county + ', ' + dMap.get(d.id).state;
						scope.countyinfo = countyState;
						scope.bins = [];
						var countyPayments = function(){ if(!pMap.get(d.id)){ return 0;} return pMap.get(d.id).number; }();
						var countyGrants = function(){ if(!gMap.get(d.id)){ return 0;} return gMap.get(d.id).number; }();
						scope.onCountyClick({FIPS: d.id, county: countyState, payments: countyPayments, grants: countyGrants});
					})
				}

				renderMap('diabetes');


			    d3.select(self.frameElement).style("height", height + "px");

			    //watch isolate scope for user data toggling and rerender
			    scope.$watch("dataset", function(newVal, oldVal){
			    	if(newVal !== oldVal){
			    		renderMap(newVal, scope.metric);
			    	}
			    })

			    scope.$watch("year", function(newVal, oldVal){
			    	if(newVal !== oldVal){
			    		renderMap(scope.dataset, scope.metric);
			    	}
			    })

			    scope.$watch("metric", function(newVal, oldVal){
			    	if(newVal !== oldVal){
			    		renderMap(scope.dataset, scope.metric);
			    	}
			    })

		//close d3 service CB function
	})

		//close link function
	}

    //close return object    
}

    //close main directive CB function
}]);
