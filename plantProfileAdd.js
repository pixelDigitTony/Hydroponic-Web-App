
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

			document.getElementById('plantRegis').addEventListener('submit', submitForm);
	
			
			var database = firebase.firestore().collection('plants').doc();
			
			function submitForm(e){
				e.preventDefault();
				
				var txtPlantName = getInputVal('inputPlantName');
				var txtPlantDetail = getInputVal('plantDetail');
				var txtPlantQuantity = getInputVal('plantQuantity');
				var file = document.querySelector('input[type=file]').files[0];
				var txtUpload = getFileVal('uploader');
				var txtMaxSolTemp = getInputVal('inputMaxSolTemp');
				var txtMinSolTemp = getInputVal('inputMinSolTemp');
				var txtMaxPH = getInputVal('inputMaxPH');
				var txtMinPH = getInputVal('inputMinPH');
				
				
				writeUserData(txtPlantName, txtPlantDetail, txtPlantQuantity, file, txtMaxSolTemp, txtMinSolTemp, txtMaxPH, txtMinPH);
				
				var file = document.querySelector('input[type=file]').files[0];
				
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
			
			function getInputVal(id){
				return document.getElementById(id).value;
			}
			
			function getFileVal(id){
				return document.getElementById(id);
			}
			
			function writeUserData(txtPlantName, txtPlantDetail, txtPlantQuantity, file, txtMaxSolTemp, txtMinSolTemp, txtMaxPH, txtMinPH) {
				
			
			  database.set({
				PlantName: txtPlantName,
				PlantDescription: txtPlantDetail,
				PlantQuantityPlanted: txtPlantQuantity,
				PlantFile: file.name,
				MaxSolutionTemperature: txtMaxSolTemp,
				MinSolutionTemperature: txtMinSolTemp,
				MaxPHLevel: txtMaxPH,
				MinPHLevel: txtMinPH,
				Status: "Active"
				
			});
			
			
				window.alert("Submitting...");
				setTimeout(location.reload.bind(location), 3000);
				
			}