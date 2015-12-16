'use strict';

angular.module('foglightApp')
.directive('countySankey', ['d3Service', 'sankeyService', 'sankeyData', 'paymentStats', function(d3Service, sankeyService, sankeyData, paymentStats) {
	return {
		restrict: 'EA',
		scope: {
			binNum: '=',
		},

		link: function (scope, element, attrs) {


			// scope.$watch("countyfocus", function(newValue, oldValue){

				var renderSankey = function(data){

					d3Service.d3().then(function(d3){

				// d3.select(".sankey").remove();

				console.log('this is data passed into sankey: ', data)
				console.log("this is attrs.id in sankey directive: ", attrs.id)
				//a = total number of recipients
				//b = median drug_recipient link value in $
				//c = avg # of links per recipient
				//
				//avg $ amount per recipient = b*c
				//if a is <= 3; 
				//12 recipient; median 100; height 2500px; 500-1000 bin; avg 16 links per recipient
				//13px per link, times multiplier = median link value - mid link value/100
				//each recipient should have about 200px for each 15 links, times a multiplier for difference btw
				//median and min value - multiplier is the difference divided by 100
				//range from 1000px to 10000px
				//

				var totalValue = 0;
				var totalRecipientPayments = 0;

				var countRecipients = function(){
					var count = 0;
					for (var key in paymentStats.recipientStatsMap){
						if (paymentStats.recipientStatsMap[key] === attrs.id){
							count++;
						}
					}
					return count;
				}

				var numRecipients = countRecipients();
				var linkValues = [];
				var linkMultiplier = 0;
				var linkNumber = 0;

				for (var i=0, max = data.length; i<max; i++){
					if (data[i]["linkType"] === "drug_recipient" || data[i]["linkType"] === "mfr_recipient"){
						linkValues.push(data[i].value);
					}
				}

				var numLinks = linkValues.length;
				var maxLinkValue = d3.max(linkValues);
				var medianLinkValue = d3.median(linkValues);
				var minLinkValue = d3.min(linkValues);
				var lowerScaleMultiplier = (maxLinkValue - medianLinkValue)/200;
				var upperScaleMultiplier = (medianLinkValue - minLinkValue)/50;
				var multiplier = lowerScaleMultiplier*upperScaleMultiplier*(numRecipients/18);

				// console.log("this is bin, totalRecipientPayments, numRecipients, totalValue inside countySankey: ", attrs.id + ' ' + totalRecipientPayments + ' ' + numRecipients +' ' + totalValue)

				var units = "$";
				// var parentID = "#chart_" + attrs.id;

				// var test = d3.select(parentID).select("svg")

				var margin = {top: 10, right: 10, bottom: 10, left: 10},
				width = 1200 - margin.left - margin.right,
				// height = .2*totalValue - margin.top - margin.bottom;
				height = numLinks*50*multiplier - margin.top - margin.bottom;
				

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

				// load the data (using the timelyportfolio csv method)
				// d3.csv("sankey.csv", function(error, data) {

				// var data = sankeyData;
				
				//set up graph in same style as original example but empty
				var graph = {"nodes" : [], "links" : []};

				var getNature = function(x){ if (x.nature) return x.nature; return "";}

				data.forEach(function (d) {
				  	// console.log("this is d inside initial graph build: ", d)
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

				// console.log("this is subGraph: ", subGraph)

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
			     	// console.log("this is graph.nodes inside iterator: ", graph.nodes)
			     	graph.nodes.push(subGraph[key][0])
			     }

			     // graph.nodes.forEach(function (d, i) {
			     // 	// console.log("this is d inside loop: ", d)
			     // 	graph.nodes[i] = { "name": d };
			     // });

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
					// console.log("this is d inside link title: ", d)
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
				// .attr("transform", function(d){return "rotate(-90)";})
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

			// });  //close csv load function

		})  //close d3 service CB function

	} //close renderSankey function

	console.log("this is paymentStats inside countySankey:", paymentStats)

	var data = paymentStats.dataObj[attrs.id];

	if(scope.hasdata){
		renderSankey(data);
	}



// }) //close scope.$watch function

}  //close link function

};  //close return object

}]);  //close main directive CB function


