$(function() {
	// init and load all functions here
	console.log("dis is a quick test to show you da wae");
	charts(); //load all defined charts
	timer();
});

function charts() {
	// public chart variables
	var fuelChart = document.getElementById("fuelChart").getContext('2d');
	var foodChart = document.getElementById("foodChart").getContext('2d');
	var distanceChart = document.getElementById("distanceChart").getContext('2d');
	//we initialize all charts in this functions
	var fuelChart = new Chart(fuelChart, {
		type: 'doughnut',
		data: {
			labels: ["Fuel", "No fuel"],
			datasets: [{
				label: 'Fuel',
				data: [60, 40],
				backgroundColor: ['#D23A61', 'rgba(255, 255, 255, 0.1)', ],
				borderColor: ['rgba(255,99,132,0)', 'rgba(255, 99, 132, 0)', ]
			}]
		}
	});
	var foodChart = new Chart(foodChart, {
		type: 'doughnut',
		data: {
			labels: ["Food", "No food"],
			datasets: [{
				label: 'Food',
				data: [85, 15],
				backgroundColor: ['#22C4A5', 'rgba(255, 255, 255, 0.1)', ],
				borderColor: ['rgba(255,99,132,0)', 'rgba(255, 99, 132, 0)', ]
			}]
		}
	});
	var distanceChart = new Chart(distanceChart, {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
			datasets: [{
				label: ["Distance"],
				data: [0, 15000, 45000, 65000, 105000, 180000],
				backgroundColor: ['rgba(52, 100, 204, 0.2)', ],
				borderColor: ['rgba(52, 100, 204, 1)', ],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
	});
}

function timer() {
	window.setInterval(function() {
		var newSpeed = getRndInteger(43135, 43140);
		$(".current-speed").html(newSpeed);
	}, 100);
}

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
