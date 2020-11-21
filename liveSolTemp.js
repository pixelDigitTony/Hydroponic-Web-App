
	
			
			setInterval(function() {
	
fetch('https://industrial.ubidots.com/api/v1.6/variables/5e69b8184763e77d8d549aff/values?token=BBFF-zzhIxRYm4FdJ4cTGbFhpBL96P30Jui')
  .then(response => {
    return response.json()
  })
  .then(data => {
	    
			
				var timeLabel = data.results.map(function(e) {
					
		 
			 var date = new Date(e.timestamp);
	
			
				// Hours
				var hours = date.getHours();
				
				// Minutes
				var minutes = "0" + date.getMinutes();
				
				// Seconds
				var seconds = "0" + date.getSeconds();
				

						// Display date time in h:m:s format
						return convdataTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
				
				
				});
				
		
		  	
				
	
				
			
		  var list = data.results.map(function(e) {

				
			
		
				return e.value;
			
				
			
			
		});
				
			

    // Work with JSON data here
	
			
	var ctx = document.getElementById('myChart').getContext('2d');
	var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: timeLabel.reverse(),
        datasets: [{
            label: "Solution Temperature Level: Device 1",
			fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
			 data: list.reverse()
			  
        }]
    },

    // Configuration options go here
    options: {
		scales: {
            yAxes: [{
				position: 'right',
               
            }],
            xAxes: [{
            		ticks: {
					position: 'right',
					mirror: true
                }
            }]
        },
	}
});


	
  })
  .catch(err => {
    console.log("No Connection!");
  })
	  
			}, 10000 ); 
	
 
  
  