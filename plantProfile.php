<?PHP
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.0/Chart.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-annotation/0.5.5/chartjs-plugin-annotation.min.js"></script>
	<script src="http://yui.yahooapis.com/3.18.1/build/yui/yui-min.js"></script>
	
	<style>
.yui3-skin-sam .redtext {
	color:#ff0000;
}
</style>
	
	</head>
<body>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">AMCG</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="home.php">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="plantList.php">Plant List</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sensors
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="sensorPH.php">pH Level</a>
		  <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="sensorSolTemp.php">Solution Temperature</a>
        </div>
      </li>
	    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Data Calendar
        </a>
        <div class="dropdown-menu px-4 py-3" aria-labelledby="navbarDropdown">
		<form>
	  <div id="demo" class="yui3-skin-sam yui3-g"> <!-- You need this skin class -->
  <div id="leftcolumn" class="yui3-u">
     <!-- Container for the calendar -->
     <div id="mycalendar"></div>
  </div>
 
</div>
</form>
</div>
</li>
 <li class="nav-item dropdown">
		<a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Exceeded PH Values Dates
        </a>
		<div id="pHVal" class="dropdown-menu px-4 py-3" aria-labelledby="navbarDropdown">
        
		</div>
</li>
 <li class="nav-item dropdown">
		<a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Exceeded Solution Temperature Dates
        </a>
		 <div id="solTempVal" class="dropdown-menu px-4 py-3" aria-labelledby="navbarDropdown">

		</div>
</li>
    </ul>
  </div>
</nav>
<div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
	<div class="form-row">
	<div class="form-group col-md-3">
	<img id="plantPic" src="" alt='...' class="img-thumbnail rounded float-left" style="width:250px;height:250px;">
	</div>
	<div class="form-group col-md-9">
      <h5 id="plantName" class="text-white h4">Collapsed content</h5>
	  <span id="plantDescrip" class="text-white h6">Toggleable via the navbar brand.</span>
	  <div class="form-group col-md-4">
	   <label class="text-white h7">Planted: </label>
		 <span id="plantPlanted" class="text-white h7">Toggleable via the navbar brand.</span>
		 </div>
		 <div class="form-group col-md-4">
	   <label class="text-white h7">Maximum Solution Temperature: </label>
		 <span id="plantMaxSolTemp" class="text-white h7">Toggleable via the navbar brand.</span>
		 </div>
	   <div class="form-group col-md-4">
	   <label class="text-white h7">Minimum Solution Temperature: </label>
		 <span id="plantMinSolTemp" class="text-white h7">Toggleable via the navbar brand.</span>
		 </div>
		 <div class="form-group col-md-4">
		  <label class="text-white h7">Maximum pH Level: </label>
		  <span id="plantMaxPH" class="text-white h7">Toggleable via the navbar brand.</span>
		   </div>
		  <div class="form-group col-md-4">
		  		<label class="text-white h7">Minimum pH Level: </label>
		   <span id="plantMinPH" class="text-white h7">Toggleable via the navbar brand.</span>
	  </div>
	  	 </div>  
	
   </div>
  </div>
		    </div>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
	  <button class="btn btn-outline-success my-2 my-sm-0" id="editButton">Edit</button>
	  <button class="btn btn-outline-danger my-2 my-sm-0" id="deleteButton">Delete</button>
    </button>
	</nav>
	<div id="blockShow" style="display: none">
	<form id="plantRegis" method="post" action="plantProfile.php" class="mx-auto" style="margin-top: 50px; width: 1000px;">
	<div class="form-row" >
		<div class="form-group col-md-6">
		<label for="inputEmail4">Plant Name</label>
		<input type="text" class="form-control" id="inputPlantName">
		</div>
	</div>
	<div class="form-group">
		<label for="exampleFormControlTextarea1">Plant Description</label>
		<textarea class="form-control" id="plantDetail" rows="3"></textarea>
	</div>
	<div class="form-group">
		<label for="inputAddress">Plant Quantity</label>
		<input type="text" class="form-control" id="plantQuantity" placeholder="# of planted plants">
	</div>
	<div class="form-group">
		<label for="inputAddress2">Plant Picture</label>
		<input type="file" class="form-control-file" id="plantUploadPic">
		<progress value="0" max="100" id="uploader">0%</progress>
	</div>
		<div class="form-group">
		<label for="inputState">Maximum Solution Temperature</label>
		<input type="text" class="form-control" id="inputMaxSolTemp">
		</div>
		<div class="form-group">
		<label for="inputZip">Minimum Solution Temperature</label>
		<input type="text" class="form-control" id="inputMinSolTemp">
		</div>
		<div class="form-group">
		<label for="inputCity">Maximum pH Level</label>
		<input type="text" class="form-control" id="inputMaxPH">
		</div>
		<div class="form-group">
		<label for="inputCity">Minimum pH Level</label>
		<input type="text" class="form-control" id="inputMinPH">
		</div>
	<div class="form-group">
	<button type="submit" class="btn btn-success btn-lg">Add</button>
	</div>
	</form>
	</div>

	<canvas id="myChartPH" style="height:40vh; width:80vw"></canvas>
	<canvas id="myChartTemp" style="height:40vh; width:80vw"></canvas>
	<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.8.0/firebase.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-analytics.js"></script>
<script src="plantProfile.js"></script>
	</body>
</html>