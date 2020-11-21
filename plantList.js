
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

			
				var database = firebase.firestore().collection("plants");

				window.onload = function loadList(){		
				database.where("Status", "==", "Active").get().then(function(querySnapshot) {
				querySnapshot.forEach(function(doc) {
					
					var storage = firebase.storage();
					var storageRef = storage.ref();
					var tangRef = storageRef.child('images/'+doc.data().PlantFile);
					
					
				// we get the download URL of the image
				  tangRef.getDownloadURL().then(function(url){
					// Once we have the download URL, we set it to our img element
					
					// doc.data() is never undefined for query doc snapshots
					var node = document.createElement("a");                 // Create a <a> node
			       // Create a text node
				   
				   
					node.setAttribute('class', 'list-group-item list-group-item-action');
					node.setAttribute('id', doc.id);
					node.setAttribute('href', 'plantProfile.php');
					node.innerHTML =  "<div class='form-row'>"+
					  "<div class='form-group col-md-2'>"+
					  "<img src="+url+" alt='...' class='img-thumbnail rounded float-left'>"+
					  "</div>"+
					  "<div class='form-group col-md-10'>"
						+"<div class='d-flex w-100 justify-content-between'>"+
						  "<h5 class='mb-1'>"+doc.data().PlantName+"</h5>"+
						"</div>"+
						"<p class='mb-1'>"+doc.data().PlantDescription+"</p>"+
						"</div>"+
						"</div>";                           // Append the text to <li>
					
					document.getElementById("plantItems").appendChild(node);  
					
					
					document.getElementById(doc.id).addEventListener('click', function(){
						localStorage.setItem('plantID', doc.id);
						
						
					});
					
					
				  }).catch(function(error) {
					// If anything goes wrong while getting the download URL, log the error
					console.error(error);
				  });
				
					
				
				});
			});
			
				}
				
			
		
		