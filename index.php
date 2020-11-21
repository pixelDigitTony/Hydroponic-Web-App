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
<div class="mx-auto" style="width: 500px; padding-top: 250px;">
<form method="POST" action="index.php" >
<div class="form-group">
	<h3>Hydrosense: Plant Water Monitoring</h3>
</div>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text" name="user" class="form-control" placeholder="Username"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="pass" class="form-control" placeholder="Password"/>
  </div>
  <div class="form-group">
  <button type="submit" class="btn btn-success btn-lg active">Login</button>
  <a href="regisHydro.php" class="btn btn-secondary" role="button" aria-pressed="true">Register</a>
  </div>
  </form>
  </div>
<script>
	<?PHP 
    include_once("connection.php"); 
    if(isset($_POST['user']) && isset($_POST['pass']) ) { 
        $username = $_POST['user'];
        $password = $_POST['pass'];
        
        $query = "SELECT user, pass FROM usertbl WHERE user = '$username' AND pass = '$password'"; 
        
        $result = mysqli_query($conn, $query);
        
        if($result->num_rows > 0){				
				
					
				
					$_SESSION["user"] = $username;
					$_SESSION["pass"] = $password;
					
					
					
				header("Location: home.php"); 
						
		}else{			
            echo "Login Failed"; 
        } 
   }
	?>
</script>
	</body>
</html>