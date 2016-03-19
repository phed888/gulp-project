var height = 600,
	width = 600;

var svg = d3.select("body").append("svg").attr("width", width).attr("height", height);

var projection = d3.geo.mercator().scale(96).translate(width/2, height/2);

var path = d3.geo.path().projection(projection);

d3.json("us.geojson", function(json) {
	svg.selectAll("path")
		.data(json.features)
		.enter()
		.append("path")
		.attr("d", path)
});