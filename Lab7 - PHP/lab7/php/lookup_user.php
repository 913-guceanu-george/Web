<?php
require_once "db_config.php";

$name = $_GET['name'];

// Prepare the query
$sql = "SELECT * FROM user WHERE name = '$name'";

// Execute the query
$result = $conn->query($sql);

// Fetch and return the user
$user = $result->fetch_assoc();

echo json_encode($user);

$conn->close();
?>
