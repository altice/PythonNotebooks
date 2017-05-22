function drawHorizontalBars (selector, dispatch, dimension, group) {
  var margin = {top: 20, right: 20, bottom: 0, left: 100},
    width = 940 - margin.left - margin.right,
    height = 900 - margin.top - margin.bottom;

  var leftSpacing = 200;

  var color = d3.scale.category20();

  var t = d3.transition()
        .duration(750);
  var x = d3.scale.linear()
      .range([0, width - leftSpacing]);

  var y = d3.scale.ordinal()
      .rangeRoundBands([0, height], 0.1);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .ticks(7)

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .tickSize(0)

  var svg = d3.select(selector).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var xAxisSvg = d3.select('#xaxis').append('svg')
      .attr("width", width + margin.left + margin.right)
      .attr("height", 20)
    .append("g")
      // .attr("transform", "translate(" + margin.left + "," + margin.top + ")");