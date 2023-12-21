<?php

Class Conection{
	
	function open(){
		$servername = "localhost";
		$username = "gambetatv_gambetatv";
		$password = "zz0lNb!VRrZ-";
		$conn = new mysqli($servername, $username, $password);
		// Check connection
		var_dump('consultando');
		if ($conn->connect_error) {
		  return $conn->connect_error;
		}
		return $conn; 
	}
	
}




?>