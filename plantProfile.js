

	var firebaseConfig = {
				apiKey: "AIzaSyCm6ovDVTtmv_uDuBmLEalTV663XzHNRGI",
				authDomain: "hydroponicsamcg.firebaseapp.com",
				databaseURL: "https://hydroponicsamcg.firebaseio.com",
				projectId: "hydroponicsamcg",
				storageBucket: "hydroponicsamcg.appspot.com",
				messagingSenderId: "748143125439",
				appId: "1:748143125439:web:34c89e4ef014df92d6b70a",
				measurementId: "G-KXM733Y8KX"
				};
				// Initialize Firebase
				firebase.initializeApp(firebaseConfig);
				firebase.analytics();
				
				document.getElementById('editButton').addEventListener('click', function(){
					var x = document.getElementById("blockShow");
					  if (x.style.display === "none") {
						x.style.display = "block";
					  } else {
						x.style.display = "none";
					  }
				});
	
				var database = firebase.firestore().collection("plants");
				var plantID = localStorage.getItem("plantID");
				
				window.onload = function loadList(){		
				database.doc(plantID).get().then(function(doc) {
					var storage = firebase.storage();
					var storageRef = storage.ref();
					var tangRef = storageRef.child('images/'+doc.data().PlantFile);
					
					// we get the download URL of the image
				  tangRef.getDownloadURL().then(function(url){
					
					
					document.getElementById('plantPic').src = url;
					document.getElementById('plantName').innerHTML = doc.data().PlantName;
					document.getElementById('plantDescrip').innerHTML =  doc.data().PlantDescription;
					document.getElementById('plantPlanted').innerHTML =  doc.data().PlantQuantityPlanted;
					document.getElementById('plantMaxSolTemp').innerHTML = doc.data().MaxSolutionTemperature;
					document.getElementById('plantMinSolTemp').innerHTML = doc.data().MinSolutionTemperature;
					document.getElementById('plantMaxPH').innerHTML = doc.data().MaxPHLevel;
					document.getElementById('plantMinPH').innerHTML = doc.data().MinPHLevel;
		
					document.getElementById('inputPlantName').value = doc.data().PlantName;
					document.getElementById('plantDetail').value =  doc.data().PlantDescription;
					document.getElementById('plantQuantity').value =  doc.data().PlantQuantityPlanted;
					document.getElementById('inputMaxSolTemp').value = doc.data().MaxSolutionTemperature;
					document.getElementById('inputMinSolTemp').value = doc.data().MinSolutionTemperature;
					document.getElementById('inputMaxPH').value = doc.data().MaxPHLevel;
					document.getElementById('inputMinPH').value = doc.data().MinPHLevel;
					
					
					
					var itemPHDate = [];

					
					fetch('https://industrial.ubidots.com/api/v1.6/variables/5e69b8170ff4c32b8041a601/values?token=BBFF-zzhIxRYm4FdJ4cTGbFhpBL96P30Jui')
				  .then(response => {
					return response.json()
				  })
				  .then(data => {
					// Work with JSON data here
				
					var plantComMaxPHVal = doc.data().MaxPHLevel;
					var plantComMinPHVal = doc.data().MinPHLevel;
					var arr_Dates = [];
					
					data.results.forEach(function(item) {
							
						
						var tempValues = item.value;
						
						if(tempValues <  plantComMinPHVal){
						
									
						var date = new Date(item.timestamp);
					
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
							
							arr_Dates.push(convdataDate);
					
						
						
						}else if(tempValues >  plantComMaxPHVal){
											
						var date = new Date(item.timestamp);
					
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
							
							arr_Dates.push(convdataDate);
					
						}else{
						}							
					
					});
					
					let unique = arr_Dates.filter((item, i, ar) => ar.indexOf(item) === i);
					console.log(unique);
					unique.forEach(function(item) {
								
						var node = document.createElement("span");                 // Create a <a> node
							// Create a text node
						
						itemPHDate.push(item);
						
						node.innerHTML = item + '</br>';                      // Append the text to <li>
						
						document.getElementById("pHVal").appendChild(node);
					});
	
						 })
						 .catch(err => {
							window.alert("No Connection!");
						}); 
						
						var itemSolTempDate = [];

						
						fetch('https://industrial.ubidots.com/api/v1.6/variables/5e69b8184763e77d8d549aff/values?token=BBFF-zzhIxRYm4FdJ4cTGbFhpBL96P30Jui')
						.then(response => {
					return response.json()
				  })
				  .then(data => {
					// Work with JSON data here
				
					var plantComMaxSolTempVal = doc.data().MaxSolutionTemperature;
					var plantComMinSolTempVal = doc.data().MinSolutionTemperature;
					var arr_Dates = [];
					
						data.results.forEach(function(item) {
							
						
						var tempValues = item.value;
						
						if(tempValues <  plantComMinSolTempVal){
						
									
						var date = new Date(item.timestamp);
					
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
							
							arr_Dates.push(convdataDate);
					
						
						
						}else if(tempValues >  plantComMaxSolTempVal){
							
							var date = new Date(item.timestamp);
					
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
								
								arr_Dates.push(convdataDate);
					
						
						}else{}
					
					});
					
					let unique = arr_Dates.filter((item, i, ar) => ar.indexOf(item) === i);
					console.log(unique);
					var i = 0;
					unique.forEach(function(item) {
						
										
						var node = document.createElement("span");                 // Create a <a> node
							// Create a text node
						
							itemSolTempDate.push(item);
					
						node.innerHTML = item + '</br>';                      // Append the text to <li>
						
						document.getElementById("solTempVal").appendChild(node);
					});
	
						 })
						 .catch(err => {
							window.alert("No Connection!");
						}); 
					
						console.log(itemPHDate);
						console.log(itemSolTempDate);
						
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
				
					var datePick = dtdate.format(newDate);
					
					
	
						
					fetch('https://industrial.ubidots.com/api/v1.6/variables/5e69b8170ff4c32b8041a601/values?token=BBFF-zzhIxRYm4FdJ4cTGbFhpBL96P30Jui')
				  .then(response => {
					return response.json()
				  })
				  .then(data => {
					// Work with JSON data here
				  var dateLabel = data.results.map(function(e) {

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
				
				
		  
		  var list = data.results.map(function(e) {

		
				return e.value;
						
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
										
					var plantMaxPHVal = doc.data().MaxPHLevel;
					var plantMinPHVal = doc.data().MinPHLevel;
					var marketing = [plantMaxPHVal, plantMinPHVal];
					var amount = [plantMaxPHVal, plantMinPHVal];
					var annotations = marketing.map(function(date, index) {
						return {
							type: 'line',
							id: 'vline' + index,
							mode: 'horizontal',
							scaleID: 'y-axis-0',
							value: date,
							borderColor: 'green',
							borderWidth: 1,
							label: {
								enabled: true,
								position: "center",
								content: amount[index]
							}
						}
						});
				
						
						
						var ctx1 = document.getElementById('myChartPH').getContext('2d');
						var chart1 = new Chart(ctx1, {
							
							// The type of chart we want to create
							type: 'line',
				
							// The data for our dataset
							data: {
								
								labels: timeFilter.reverse(),
								datasets: [{
									label: 'pH Level',
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
							annotation: {
								drawTime: 'afterDatasetsDraw',
								annotations: annotations	 
							}
							}
				
						});
						
				
						
						 })
						 .catch(err => {
							window.alert("No Connection!");
						})

						fetch('https://industrial.ubidots.com/api/v1.6/variables/5e69b8184763e77d8d549aff/values?token=BBFF-zzhIxRYm4FdJ4cTGbFhpBL96P30Jui')
						.then(response => {
						return response.json()
						})
						.then(data => {
						// Work with JSON data here
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
				
				
		  
					var list = data.results.map(function(e) {
			
					
							return e.value;
									
						
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
					var plantMaxSolTempVal = doc.data().MaxSolutionTemperature;
					var plantMinSolTempVal = doc.data().MinSolutionTemperature;
					var marketing = [plantMaxSolTempVal, plantMinSolTempVal];
					var amount = [plantMaxSolTempVal, plantMinSolTempVal];
					var annotations = marketing.map(function(date, index) {
					return {
						type: 'line',
						id: 'vline' + index,
						mode: 'horizontal',
						scaleID: 'y-axis-0',
						value: date,
						borderColor: 'green',
						borderWidth: 1,
						label: {
							enabled: true,
							position: "center",
							content: amount[index]
						}
					}
					});
					
			
					var ctx = document.getElementById('myChartTemp').getContext('2d');
					var chart = new Chart(ctx, {
						
						// The type of chart we want to create
						type: 'line',
			
						// The data for our dataset
						data: {
							
							labels: timeFilter.reverse(),
							datasets: [{
								label: 'Solution Temperature',
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
						annotation: {
							drawTime: 'afterDatasetsDraw',
							annotations: annotations
						
						}
						}
			
					});
					
				
					for(i=0;i < data.results.length;i++){
						
					
					if(data.results[i].value <  plantMinPHVal || data.results[i].value >  plantMaxPHVal){
						
							var timePrev = data.results.map(function(e) {
							
					
							var datePrev = new Date(e[i-1].timestamp);
						
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
						
						
							return convdataDate = year+'-'+finalMonth+'-'+finalDay;
							
			
						});
						
							var timeCurr = data.results.map(function(e) {
						
							var dateCurr = new Date(e[i].timestamp);
						
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
							
							
							return convdataDate = year+'-'+finalMonth+'-'+finalDay;
							
							
					
				
							
					});
					var dateCount = 1;
					
					if(timeCurr == timePrev){
					
						
						
					}else{
			
						var node = document.createElement("span");                 // Create a <a> node
						// Create a text node
					
						node.setAttribute('class', 'text-black');
						node.node.setAttribute('id', data.results[i].timestamp);
						node.innerHTML = convdataDate + '(' + dateCount + ')';                           // Append the text to <li>
						
						document.getElementById("valSolTempNotif").appendChild(node);
						}
					}
				}
					
						 })
						.catch(err => {
							// Do something for an error here
						})
						
					
								});


					}) ;
					
					
				  }).catch(function(error) {
					// If anything goes wrong while getting the download URL, log the error
					console.error(error);
				  });
				
					
				
				});
				}								
				 document.getElementById('plantRegis').addEventListener('submit', submitForm);
				
				function submitForm(e){
				e.preventDefault();
				
				var txtPlantName = getInputVal('inputPlantName');
				var txtPlantDetail = getInputVal('plantDetail');
				var txtPlantQuantity = getInputVal('plantQuantity');
				var file = document.querySelector('input[type=file]').files[0];
				var txtMaxSolTemp = getInputVal('inputMaxSolTemp');
				var txtMinSolTemp = getInputVal('inputMinSolTemp');
				var txtMaxPH = getInputVal('inputMaxPH');
				var txtMinPH = getInputVal('inputMinPH');
				var txtUpload = getFileVal('uploader');
				
				if(file == null){
					window.alert("Choose file!");
				}else{
				
				writeUserData(txtPlantName, txtPlantDetail, txtPlantQuantity, file, txtMaxSolTemp, txtMinSolTemp, txtMaxPH, txtMinPH);
				
				var txtUpload = getFileVal('uploader');
				
				var storageRef = firebase.storage().ref('images/' + file.name);
				
				var task = storageRef.put(file);
				
				task.on('state_changed', 
				
				function progress(snapshot){
					var percentage= (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					txtUpload.value = percentage;
				},
				
				function error(err){
					
				},
				
				function complete() {
					
					
				});
				
				}
				}
				
				function getInputVal(id){
					return document.getElementById(id).value;
				}
				
				function getFileVal(id){
					return document.getElementById(id);
				}
				
				function writeUserData(txtPlantName, txtPlantDetail, txtPlantQuantity, file, txtMaxSolTemp, txtMinSolTemp, txtMaxPH, txtMinPH) {
								
				database.doc(plantID).update({
					"PlantName": txtPlantName,
					"PlantDescription": txtPlantDetail,
					"PlantQuantityPlanted": txtPlantQuantity,
					"PlantFile": file.name,
					"MaxSolutionTemperature": txtMaxSolTemp,
					"MinSolutionTemperature": txtMinSolTemp,
					"MaxPHLevel": txtMaxPH,
					"MinPHLevel": txtMinPH
					
				}).then(function() {
					window.alert("Submitting...");
					setTimeout(location.reload.bind(location), 2000);
				});
			
						
				}
			
				document.getElementById('deleteButton').addEventListener('click', function(){
					var r = confirm("Are you sure?");
						if (r == true) {
							database.doc(plantID).update({
							"Status": "Inactive"
							}).then(function() {
								window.alert("Submitting...");
								setTimeout("location.href='plantList.html'", 2000);
							});
						} else {
						
						}
				
					});
				
		
		
			
		