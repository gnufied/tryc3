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
    config.data.json.push({"x": i, "data1": _.random(0,500)});
    this.counter = this.counter + 1;
  }
  // config.data.json.push({"x": (new Date()).getTime(), "data1": _.random(0,500)});
  config.axis = {};
  // config.axis.x = {"type":"timeseries","tick":{"format":"%H:%M:%S"}};
  config.axis.y = {"label":{"text":"Number of items","position":"outer-middle"}};
  config.data.types={"data1":"line"};
  this.chart = c3.generate(config);
  window.setTimeout(this.updateChart, 1000);
};

PlotChart.prototype.updateChart = function() {
  var value = _.random(0, 500);
  var data = {};
  data.keys = {"x":"x","value":["data1", "data2"]};
  data.json = [{"x": this.counter, "data1": value, "data2": _.random(0,400)}];
  this.counter = this.counter + 1;
  //data.length = 2;
  this.chart.flow(data);
  window.setTimeout(this.updateChart, _.random(500, 1000));
};


var charter = new PlotChart();
charter.plotChart();
