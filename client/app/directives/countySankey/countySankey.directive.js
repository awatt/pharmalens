'use strict';

angular.module('foglightApp')
.directive('countySankey', ['d3Service', 'sankeyService', 'sankeyData', 'statService', function(d3Service, sankeyService, sankeyData, statService) {
	return {
		restrict: 'EA',
		scope: {
			binNum: '=',
			bin: '='
		},

		link: function (scope, element, attrs) {

			var renderSankey = function(data){

				d3Service.d3().then(function(d3){

					var countLinks = function(data){
						var count = 0;
						for (var i=0, max = data.length; i<max; i++){
							if (data[i]["linkType"] === "drug_recipient" ||
							 	data[i]["linkType"] === "mfr_recipient"){
								count++;
							}
						}
						return count;
					}

					var numLinks = countLinks(data);

					var units = "$";

					var margin = {top: 10, right: 160, bottom: 10, left: 10},
					frameWidth = d3.select('#sankeyContent')[0].parentNode.clientWidth,
					width = frameWidth - margin.left - margin.right,
					height = 500 + numLinks*18 - margin.top - margin.bottom;


					var formatNumber = d3.format(",.0f"),    // zero decimal places
					format = function(d) { return units + "" +formatNumber(d); },
					color = d3.scale.category20();

					// append the svg canvas to the page
					var svg = d3.select('#chart-' + scope.binNum).append("svg")
					.attr("class", "sankey")
					.attr("width", width + margin.left + margin.right)
					.attr("height", height + margin.top + margin.bottom)
					.append("g")
					// .attr("transform", "translate(" + height + ", " + 0 + ") rotate(90)")
					.attr("transform", 
						"translate(" + margin.left + "," + margin.top + ")")

					// Set the sankey diagram properties
					var sankey = sankeyService()
					.nodeWidth(36)
					.nodePadding(40)
					.size([width, height]);

					var path = sankey.link();
					
					//set up graph in same style as original example but empty
					var graph = {"nodes" : [], "links" : []};

					var getNature = function(x){ if (x.nature) return x.nature; return "";}

					data.forEach(function (d) {
						graph.nodes.push({ "name": d.source, "nodeType": d.sourceType });
						graph.nodes.push({ "name": d.target, "nodeType": d.targetType });
						graph.links.push({ "source": d.source,
							"target": d.target,
							"value": +d.value,
							"nature": getNature(d),
							"linkType": d.linkType });
					});

					var subGraph = d3.nest()
					.key(function (d) { return d.name; })
					.map(graph.nodes)

				     // return only the distinct / unique nodes
				     var subGraphKeys = d3.keys(subGraph);
				     // graph.nodes = d3.keys(subGraph);

				     // loop through each link replacing the text with its index from node
				     graph.links.forEach(function (d, i) {
				     	graph.links[i].source = subGraphKeys.indexOf(graph.links[i].source);
				     	graph.links[i].target = subGraphKeys.indexOf(graph.links[i].target);
				     });

				     //now loop through each nodes to make nodes an array of objects
				     // rather than an array of strings
				     graph.nodes = [];
				     for (var key in subGraph){
				     	graph.nodes.push(subGraph[key][0])
				     }

				     sankey
				     .nodes(graph.nodes)
				     .links(graph.links)
				     .layout(width, 32);

					// add in the links
					var link = svg.append("g").selectAll(".link")
					.data(graph.links)
					.enter().append("path")
					.attr("class", "link")
					.attr("d", path)
					.style("stroke-width", function(d) { return Math.max(1, d.dy); })
					.sort(function(a, b) { return b.dy - a.dy; });

					// d3.select('.tooltip').remove()

			        //tooltip template
			        var tooltipSankey = d3.select('#tooltipSankey')
			        .attr("class", "tooltip")
			        .style('position', 'absolute')
			        .style("height", "90px")
			        .style("width", "260px")
			        .style('padding', '15px')
			        .style('background', '#1D2024')
			        .style('border-radius', '4px')
			        .style('color', 'white')
			        .style('opacity', '0.5')
			        .style('font-size', '1.25rem')

					// County Specific Tooltip
					d3.selectAll('.link')
					.on('mouseover', function(d) {

						console.log("d: ", d)

						// var countyState = countyFormat(dMap.get(d.id).county) + ', ' + dMap.get(d.id).state,
						// 	population = dMap.get(d.id).population,
						// 	dTotal = setNum(dMap.get(d.id)),
						// 	dRate = setRate(dMap.get(d.id)),
						// 	pTotal = setNum(pMap.get(d.id)),
						// 	pRate = setRate(pMap.get(d.id)),
						// 	gTotal = setNum(gMap.get(d.id)),
						// 	gRate = setRate(gMap.get(d.id)),
						// 	tTotal = setNum(tMap.get(d.id)),
						// 	tRate = setRate(tMap.get(d.id));

						d3.select(this).style('opacity', 0.7)
						tooltipSankey.transition()
						.style('opacity', .85)
						tooltipSankey.html(function() {


							return "<strong>" + d.source.name + " → " + d.nature + " → " + 
								d.target.name + "\n" + format(d.value) + "</strong>";
							// return "<strong style='color:  #FA3232; font-size: 1.6rem; margin-top: -5px'>" + countyState + " (" + scope.year + ")</strong>" +	
							// "<div style='margin-top: 0.4rem'><strong style='font-size: 1.3rem; margin-top: 0.8rem'>Diabetes Cases: </strong><strong style='color: #F75707; font-size: 1.2rem'> &nbsp" + numberFormat(dTotal) + "&nbsp (" + dRate + "%)</strong>*</div>" +
							// "<div style='margin-top: 0.4rem'><strong style='font-size: 1.3rem'>Payments: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + currencyFormat(pTotal) + "&nbsp (" + currencyFormat(pRate) + ")</strong>**</div>" +
							// "<div><strong style='font-size: 1.3rem; margin-top: -35px'>Grants: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + currencyFormat(gTotal) + "&nbsp (" + currencyFormat(gRate) + ")</strong>**</div>" +
							// "<div><strong style='font-size: 1.3rem; margin-top: -35px'>Totals: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + currencyFormat(tTotal) + "&nbsp (" + currencyFormat(tRate) + ")</strong>**</div>" +
							// "<div style='color: white; font-size: 1rem; margin-top: 0.4rem'>&nbsp&nbsp*2012 estimated population: <span style='color: #F75707'>" + numberFormat(population) + "</span></div>" + 
							// "<div style='color: white; font-size: 1rem'>&nbsp&nbsp**rate per 1,000 residents</div>";
						})
					})
					.on('mousemove',function(d){
						tooltipSankey
						.style('left', (d3.event.pageX - 420) + 'px')
						.style('top', (d3.event.pageY - 160) + 'px')
					})
					.on('mouseout', function(d) {
						d3.select(this)
						.style('opacity', 1)
						tooltipSankey.transition().duration(300)
						.style('opacity', 0)
					})
					// .on('click', function(d) {

					// 	var countyState = dMap.get(d.id).county + ', ' + dMap.get(d.id).state;
					// 	scope.countyinfo = countyState;
					// 	scope.bins = [];
					// 	scope.onCountyClick({FIPS: d.id, county: countyState});
					// })




					// add the link titles
					// link.append("title")
					// .text(function(d) {
					// 	return d.source.name + " → " + d.nature + " → " + 
					// 	d.target.name + "\n" + format(d.value); });

					// add in the nodes
					var node = svg.append("g").selectAll(".node")
					.data(graph.nodes)
					.enter().append("g")
					.attr("class", "node")
					.attr("transform", function(d) { 
						return "translate(" + d.x + "," + d.y + ")"; })
					.call(d3.behavior.drag()
						.origin(function(d) { return d; })
						.on("dragstart", function() { 
							this.parentNode.appendChild(this); })
						.on("drag", dragmove));

					// add the rectangles for the nodes
					node.append("rect")
					.attr("height", function(d) { return d.dy; })
					.attr("width", sankey.nodeWidth())
					.style("fill", function(d) { return d.color = color(d.name.replace(/ .*/, "")); })
					// .style("stroke", function(d) { return d3.rgb(d.color).darker(2); })
					.append("title")
					.text(function(d) { return d.name + "\n" + format(d.value); });

					// add in the title for the nodes
					node.append("text")
					.attr("x", 0)
					.attr("y", 0)
					.attr("dy", 0)
					.attr("y", function(d) { return d.dy / 2; })
					.attr("dy", ".35em")
					.attr("text-anchor", "end")
					.attr("transform", null)
					.text(function(d) { return d.name; })
					.filter(function(d) { return d.x < width / 2; })
					.attr("x", 6 + sankey.nodeWidth())
					.attr("text-anchor", "start");

					// the function for moving the nodes
					function dragmove(d) {
						d3.select(this).attr("transform", 
							"translate(" + d.x + "," + (
								d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))
								) + ")");
						sankey.relayout();
						link.attr("d", path);
					}

			})  //close d3 service CB function
	
		} //close renderSankey function

				var data = statService.dataObj[scope.bin];

					renderSankey(data);

		}  //close link function

	};  //close return object

}]);  //close main directive CB function


