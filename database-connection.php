<?php
$servername = "198.12.234.14";
$username = "wkrr0jo9k4e9";
$password = "Gonzalez2213!";
$dbname = "DesignElite";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
