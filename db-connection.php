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

// Query to get data
$sql = "SELECT * FROM products";
$result = $conn->query($sql);

$data = array();

// Fetch all rows as associative array
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Output data as JSON
header('Content-Type: application/json');
echo json_encode($data);

$conn->close();
?>
