var PlotChart = function() {
  var that = this;
};

PlotChart.prototype.plotChart = function() {
  this.chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]
    }
  });
};

PlotChart.prototype.updateChart = function() {

};

var charter = new PlotChart();
charter.plotChart();
