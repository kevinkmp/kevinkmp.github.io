var data, oosData;

data = {
  columns: [
    ['data1', 30, 40, 50, 100, 125],
    ['data2', 225, 140, 150, 100, 75]
  ]
};

oosData = {
  columns: [
    ['Overnight', 44.56, 22.98, 9.55, 0, 0],
    ['Breakfast', 177.32, 140, 150, 100, 75],
    ['Lunch', 225, 140, 150, 100, 75],
    ['Rush Hour', 225, 140, 150, 100, 75],
    ['Evening', 225, 140, 150, 100, 75],
  ],
  type: 'bar',
  groups: [
    ['Overnight','Breakfast','Lunch','Rush Hour','Evening']
  ]
};

function drawChart(domNodeId, data) {
  var chart = c3.generate({
    bindto: domNodeId,
    data: data
  });
}


drawChart('#chart1', data);

drawChart('#chart2', oosData);