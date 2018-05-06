<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "test_table";

// Create and check connexion
if($bdd = mysqli_connect($servername, $username, $password, $database))
{
	// If connexion is established, nothing to do
} else {
	echo 'Error'; // Error message
}

$request = mysqli_query($bdd, 'SELECT * FROM sensors');

?>