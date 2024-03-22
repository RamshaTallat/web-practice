
// Data for the bar chart
const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
      label: 'Sales',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      data: [20, 30, 25, 40, 35]
    }]
  };
  
  // Options for the bar chart
  const barOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  
  // Get the canvas element for the bar chart
  const barCanvas = document.getElementById('barChart');
  
  // Create the bar chart
  const barChart = new Chart(barCanvas, {
    type: 'bar',
    data: barData,
    options: barOptions
  });
  
  // Data for the pie chart
  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [{
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  };
  
  // Get the canvas element for the pie chart
  const pieCanvas = document.getElementById('pieChart');
  
  // Create the pie chart
  const pieChart = new Chart(pieCanvas, {
    type: 'pie',
    data: pieData
  });
  