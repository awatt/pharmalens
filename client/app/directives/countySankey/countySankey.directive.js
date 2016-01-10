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

					var margin = {top: 10, right: 10, bottom: 10, left: 10},
					width = 1070 - margin.left - margin.right,
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

					// add the link titles
					link.append("title")
					.text(function(d) {
						return d.source.name + " → " + d.nature + " → " + 
						d.target.name + "\n" + format(d.value); });

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

	// console.log("this is statService inside countySankey:", statService)

				var data = statService.dataObj[scope.bin];
				console.log("this is statService.dataObj: ", statService.dataObj)

					renderSankey(data);

		}  //close link function

	};  //close return object

}]);  //close main directive CB function


