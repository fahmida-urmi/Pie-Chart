 // Data for the pie chart
 const data = [
    { label: 'Category A', value: 30, color: '#f87171' },
    { label: 'Category B', value: 50, color: '#60a5fa' },
    { label: 'Category C', value: 20, color: '#34d399' },
  ];
  
  // Calculate total value
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  // Get canvas context
  const canvas = document.getElementById('pieChart');
  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY);
  
  // Draw the pie chart slices
  let startAngle = 0;
  data.forEach(item => {
    const sliceAngle = (item.value / total) * 2 * Math.PI;
    const endAngle = startAngle + sliceAngle;
    
    // Draw slice
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = item.color;
    ctx.fill();
    
    // Update start angle for next slice
    startAngle = endAngle;
  });
  
  // Generate legend items
  const legendContainer = document.getElementById('legend');
  data.forEach(item => {
    const legendItem = document.createElement('div');
    legendItem.className = 'flex items-center mt-2';
    legendItem.innerHTML = `
      <div class="w-4 h-4 mr-2" style="background-color: ${item.color};"></div>
      <span class="text-gray-700">${item.label} (${item.value})</span>
    `;
    legendContainer.appendChild(legendItem);
  });