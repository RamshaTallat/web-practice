// Initial data
let currentData = {
    labels: ['China', 'India', 'United States', 'Indonesia', 'Pakistan'],
    datasets: [{
      label: 'Population 2020',
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      data: [1439, 1380, 331, 273, 225] // Population in millions for 2020
    }]
  };
  
  const populationCanvas = document.getElementById('populationChart');
  const chart = new Chart(populationCanvas, {
    type: 'bar',
    data: currentData,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  // Update chart data
  function updateChartData(data, label) {
    chart.data.datasets[0].data = data;
    chart.data.datasets[0].label = label;
    chart.update();
  }
  
  // Button click events
  document.getElementById('data2010').addEventListener('click', function() {
    updateChartData([1330, 1234, 309, 240, 192], 'Population 2010');
  });
  
  document.getElementById('data2000').addEventListener('click', function() {
    updateChartData([1267, 1053, 282, 211, 174], 'Population 2000');
  });
  