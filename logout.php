<?PHP
session_start();
?>
<?PHP
    include_once("connection.php");
		$username = $_SESSION['user'];
		$password = $_SESSION['pass'];					
		session_start();
		session_destroy();
		header('Location: index.php');
?>