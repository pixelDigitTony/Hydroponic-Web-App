<?PHP
session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</head>
<body>
<div class="mx-auto" style="width: 1000px; padding-top: 250px;">
<form method="post" action="regisHydro.php" >
<div class="form-group">
	<h3>Hydrosense: Plant Water Monitoring</h3>
</div>
  <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
  <a href="home.php" class="btn btn-secondary" role="button" aria-pressed="true">Back</a>
  </form>
  <script>
  <?PHP 
    include_once("connection.php"); 
    if(isset($_POST['txtUser']) && isset($_POST['txtPass']) ) { 
        $username = $_POST['txtUser'];
        $password = $_POST['txtPass'];
		$fullName = $_POST['nameUser'];
        $txtOrgPos = $_POST['orgPos'];
		$gender = $_POST['gender'];
		
        $query = "SELECT user, pass FROM usertbl WHERE user = '$username' AND pass = '$password'"; 
        
        $result = mysqli_query($conn, $query);
        
        if($result->num_rows == 0){				
				$sql = "INSERT INTO `usertbl`(`id`, `user`, `pass`, `name`, `orgPos`, `gender`) VALUES ('','$username', '$password', '$fullName', '$txtOrgPos', '$gender')";	
				} else{
					echo "Error!";
				}
			
				if ($conn->query($sql) === TRUE) {
					
					echo "complete";
					exit;
					
				}else{
				echo "Error: " . $sql . "<br>" . $conn->error;
				}
	}   
	?>
  </script>
  </div>
	</body>
</html>