// Data for Population of Countries
const countriesData = {
    labels: ['China', 'India', 'United States', 'Indonesia', 'Pakistan'],
    datasets: [{
      label: 'Population',
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      data: [1439, 1380, 331, 273, 225] // Population in millions
    }]
  };
  
  // Data for Ages of Family/Friends
  const agesData = {
    labels: ['John', 'Emily', 'Michael', 'Sophia', 'David'],
    datasets: [{
      label: 'Age',
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      data: [30, 25, 40, 28, 35] // Ages
    }]
  };
  
  // Get the canvas elements
  const populationCanvas = document.getElementById('populationChart');
  const agesCanvas = document.getElementById('agesChart');
  
  // Create Population Chart
  new Chart(populationCanvas, {
    type: 'bar',
    data: countriesData,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  // Create Ages Chart
  new Chart(agesCanvas, {
    type: 'pie',
    data: agesData,
    options: {
      responsive: true
    }
  });
  