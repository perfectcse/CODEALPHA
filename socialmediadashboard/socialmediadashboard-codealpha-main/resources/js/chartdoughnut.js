const ctx = document.getElementById('doughnut');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Tiktok', 'Youtube', 'Instagram'],
    datasets: [{
      label: '# of Votes',
      data: [25000, 23000, 31000],
      backgroundColor: ['#9077E8', '#FF9292', '#F68876'],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      x: { 
        display: false
      },
      y: { 
        display: false
      }
    }
  }
});
