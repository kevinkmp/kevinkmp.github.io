var data = {
  columns: [
    ['data1': 30, 40, 50, 100, 125],
    ['data2': 225, 140, 150, 100, 75]
  ]
};

function drawChart() {
  c3.generate(
    bindto: '#chart',
    data: data
  );
}