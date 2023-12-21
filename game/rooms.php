<?php
//include_once "connection.php";
$servername = "localhost";
$username = "gambetatv_gambetatv";
$password = "zz0lNb!VRrZ-";

$conn = new mysqli($servername, $username, $password);
$dato=$_GET["data"];

function validateAction($action){
	
}


// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}




?>