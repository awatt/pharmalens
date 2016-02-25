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

					var testSelection = d3.select('.sankeyDialog')[0][0].clientWidth;

					console.log("testSelection: ", testSelection)

					var margin = {top: 10, right: 15, bottom: 10, left: 10},
					frameWidth = d3.select('.sankeyDialog')[0][0].clientWidth,
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
							"linkType": d.linkType,
							"drugs": d.drugs,
							"mfrs": d.mfrs,
							"natures": d.natures});
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
			        .style("z-index", 10000)

					// County Specific Tooltip
					d3.selectAll('.link')
					.on('mouseover', function(d) {

						var currencyFormat = d3.format("$,.2f");

						var sizeToolTip = function() {
							if(d.linkType === 'mfr_drug'){
								return '90px'
							};
							if(d.linkType === 'misc_recipient'){
								console.log("misc d: ", d)
								var rows = Math.ceil((d.natures.toString().length + d.drugs.toString().length + d.mfrs.toString().length - 20)/22);
								return 115 + rows*16 + 'px';
							}; 
							if (d.linkType === 'mfr_recipient'){
								var rows = Math.ceil((d.nature.length - 10)/22);
								return 110 + rows*16 + 'px';
							}
							if (d.linkType === 'drug_recipient'){
								var rows = Math.ceil((d.nature.length - 10)/22);
								return 125 + rows*16 + 'px';
							}
							return 140 + 'px';
						}


						var linkMarkup = '',
							drug = '',
							mfr = '',
							target = '',
							value = 0,
							source = '',
							nature = ''

						if (d.linkType === 'mfr_drug'){
							linkMarkup = "<strong style='color:  #FA3232; font-size: 1.6rem; margin-top: -5px'>" + d.source.name + "</strong>" +	
							"<div><strong style='font-size: 1.3rem, margin-top: 0.8rem'>Total Amount: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + currencyFormat(d.value) + "</strong></div>" +
							"<div><strong style='font-size: 1.3rem'>Related Drug: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + d.target.name + "</strong></div>";
						}

						if (d.linkType === 'mfr_recipient'){
							linkMarkup = "<strong style='color:  #FA3232; font-size: 1.6rem; margin-top: -5px'>" + d.source.name + "</strong>" +	
							"<div><strong style='font-size: 1.3rem, margin-top: 0.8rem'>Payment Amount: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + currencyFormat(d.value) + "</strong></div>" +
							"<div><strong style='font-size: 1.3rem'>Recipient: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + d.target.name + "</strong></div>" +
							"<div><strong style='font-size: 1.3rem'>Nature of Payment: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + d.nature + "</strong></div>";							
						}

						if (d.linkType === 'drug_recipient'){
							linkMarkup = "<strong style='color:  #FA3232; font-size: 1.6rem; margin-top: -5px'>" + d.source.name + "</strong>" +	
							"<div><strong style='font-size: 1.3rem; margin-top: 0.8rem'>Manufacturer: </strong><strong style='color: #F75707; font-size: 1.2rem'> &nbsp" + d.source.targetLinks[0].source.name + "</strong></div>" +
							"<div><strong style='font-size: 1.3rem'>Payment Amount: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + currencyFormat(d.value) + "</strong></div>" +
							"<div><strong style='font-size: 1.3rem'>Recipient: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + d.target.name + "</strong></div>" +
							"<div><strong style='font-size: 1.3rem'>Nature of Payment: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + d.nature + "</strong></div>";
						}

						if (d.linkType === 'misc_recipient'){
							linkMarkup = "<strong style='color:  #FA3232; font-size: 1.6rem; margin-top: -5px'>Miscellaneous Payments</strong>" +	
							"<div><strong style='font-size: 1.3rem, margin-top: 0.8rem'>Total Payments: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + currencyFormat(d.value) + "</strong></div>" +
							"<div><strong style='font-size: 1.3rem'>Recipient: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + d.target.name + "</strong></div>" +
							"<div><strong style='font-size: 1.3rem'>Natures of Payments: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + d.natures.join(", ") + "</strong></div>" +
							"<div><strong style='font-size: 1.3rem'>Manufacturers: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + d.mfrs.join(", ") + "</strong></div>" +
							"<div><strong style='font-size: 1.3rem'>Related Drugs: </strong><strong style='color: #EBF70A; font-size: 1.2rem'> &nbsp" + d.drugs.join(", ") + "</strong></div>";
						}

						d3.select(this).style('opacity', 0.7)
						tooltipSankey.transition().duration(100)
						.style('opacity', .85)
						.style("height", sizeToolTip)
						tooltipSankey.html(function() {

							return linkMarkup;
						})
					})
					.on('mousemove',function(d){
						tooltipSankey
						.style('left', function(){if (d.linkType === 'mfr_drug') {return (d3.event.pageX + 35) + 'px'}; return (d3.event.pageX - 420) + 'px';  })
						.style('top', function (){if (d.linkType === 'misc_recipient'){return (d3.event.pageY - 450) + 'px'}; return (d3.event.pageY - 160) + 'px'})
					})
					.on('mouseout', function(d) {
						d3.select(this)
						.style('opacity', 1)
						tooltipSankey.transition().duration(300)
						.style('opacity', 0)
					})

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


