var PlotChart = function() {
  var that = this;
  this.counter = 0;
  _.bindAll(this, 'updateChart');
};

PlotChart.prototype.plotChart = function() {
  var config = {};
  config.bindto = '#chart';
  config.data = {};
  config.data.keys = {"x":"x","value":["data1"]};
  config.data.json = [];
  for(i = 0; i < 10; i++) {
    config.data.json.push({"x": (new Date()).getTime() - i*1000, "data1": _.random(0,500)});
  }
  // config.data.json.push({"x": (new Date()).getTime(), "data1": _.random(0,500)});
  config.axis = {};
  config.axis.x = {"type":"timeseries","tick":{"format":"%H:%M:%S"}};
  config.axis.y = {"label":{"text":"Number of items","position":"outer-middle"}};
  config.data.types={"data1":"line"};
  this.chart = c3.generate(config);
  window.setInterval(this.updateChart, 1000);
};

PlotChart.prototype.updateChart = function() {
  var value = _.random(0, 500);
  var data = {};
  data.keys = {"x":"x","value":["data1"]};
  data.json = [{"x": new Date(), "data1": value}];
  //data.length = 2;
  this.chart.flow(data);
};


var charter = new PlotChart();
charter.plotChart();
