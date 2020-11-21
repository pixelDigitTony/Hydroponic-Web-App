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
	  <li class="nav-item">
        <a class="nav-link" href="logout.php">Log out</a>
      </li>
    </ul>
   
  </div>
</nav>

 <table class="table table-striped table-dark">
<?PHP
include_once("connection.php"); 

$query = "SELECT id, name, user, orgPos, gender FROM usertbl";
echo " <thead>
    <tr>
      <th scope='col'>ID #</th>
      <th scope='col'>Name</th>
      <th scope='col'>Phone #</th>
      <th scope='col'>Position</th>
	  <th scope='col'>Gender</th>
    </tr>
  </thead>
  <tbody>";
 
if ($result = mysqli_query($conn, $query)) {
 
    while ($row = $result->fetch_assoc()) {
		
        $id = $row["id"];
        $name = $row["name"];
        $user = $row["user"];
        $orgPos = $row["orgPos"];
        $gender = $row["gender"];
		if($orgPos === "Admin"){
		}else{
        echo "<th scope='row'>".$id."</th>
      <td>".$name."</td>
      <td>".$user."</td>
      <td>".$orgPos."</td>
	  <td>".$gender."</td>
    </tr>";
		}
    }
 echo "</tbody>";
/*freeresultset*/
$result->free();

}
	
?>
 
 
  

</table>


	
	<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.8.0/firebase.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-analytics.js"></script>
<script src="home.js"></script>
	</body>
</html>