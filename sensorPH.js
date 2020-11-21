

YUI().use('calendar', 'datatype-date', 'cssbutton',  function(Y) {

    // Create a new instance of calendar, placing it in
    // #mycalendar container, setting its width to 340px,
    // the flags for showing previous and next month's
    // dates in available empty cells to true, and setting
    // the date to today's date.
    var calendar = new Y.Calendar({
      contentBox: "#mycalendar",
      width:'340px',
      showPrevMonth: true,
      showNextMonth: true,
      date: new Date()}).render();

    // Get a reference to Y.DataType.Date
    var dtdate = Y.DataType.Date;
	
	

    // Listen to calendar's selectionChange event.
    calendar.on("selectionChange", function (ev) {

      // Get the date from the list of selected
      // dates returned with the event (since only
      // single selection is enabled by default,
      // we expect there to be only one date)
      var newDate = ev.newSelection[0];

      // Format the date and output it to a DOM
      // element.
	  
			
	 
			    var datePick = dtdate.format(newDate);
			
	
	  	fetch('https://industrial.ubidots.com/api/v1.6/variables/5e69b8170ff4c32b8041a601/values?token=BBFF-zzhIxRYm4FdJ4cTGbFhpBL96P30Jui')
  .then(response => {
    return response.json()
  })
  .then(data => {
	    
	  var dateLabel = data.results.map(function(e) {

			 var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
			 var date_arr =[];
			 
				
						  	
				var date = new Date(e.timestamp);
						
				// Year
				var year = date.getFullYear();
				
				// Month
				var month = date.getMonth();
				
				// Day
				var day = date.getDate();
				
				if((month+1) < 10){
					
					var finalMonth = '0'+(month+1)
				
				}else{
					var finalMonth = month+1
				}
				if(day < 10){
					var finalDay = '0'+day;
				}else{
					var finalDay = day
				}
			

				
				
					var convdataTime = year+'-'+finalMonth+'-'+finalDay;
					
					if(convdataTime == datePick){
						return e.timestamp;
					}
				
				
			
				});
				
				var dateFilter = dateLabel.filter(function(e) {
				
					return e !== undefined;
				
				});
				
				
	
		
		
				
				var timeLabel = data.results.map(function(e) {
					


			 
			 var date = new Date(e.timestamp);
			
			 // Year
				var year = date.getFullYear();
				
				// Month
				var month = date.getMonth();
				
				// Day
				var day = date.getDate();
				
					if((month+1) < 10){
					
					var finalMonth = '0'+(month+1)
				
				}else{
					var finalMonth = month+1
				}
				if(day < 10){
					var finalDay = '0'+day;
				}else{
					var finalDay = day
				}
			
				// Hours
				var hours = date.getHours();
				
				// Minutes
				var minutes = "0" + date.getMinutes();
				
				// Seconds
				var seconds = "0" + date.getSeconds();
				
				
					var convdataDate = year+'-'+finalMonth+'-'+finalDay;
					
					if(convdataDate == datePick){
						// Display date time in MM-dd-yyyy h:m:s format
						return convdataTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
					}
				
			
						
				});
				
		
		  	var timeFilter = timeLabel.filter(function(e) {
				
					return e !== undefined;
				
				});
				

			
		  var list = data.results.map(function(e) {

				
				if(timeFilter.length == 0){
					return 0;
				}else{
		
				return e.value;
			
				}
			
			
		});
				
			

    // Work with JSON data here
	
			
	var ctx = document.getElementById('myChart').getContext('2d');
	var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: timeFilter.reverse(),
		
        datasets: [{
            label: "pH Level: Device 1",
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
                ticks: {
                    beginAtZero:true
                }
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
	  
		 
	  
    });
	
});


  
  
  

	