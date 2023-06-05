<?php
require_once "db_config.php";

$name = $_POST['name'];
$username = $_POST['username'];
$password = $_POST['password'];
$role = $_POST['role'];
// Get other user information

// Prepare and bind the statement
$stmt = $conn->prepare("INSERT INTO user (name, username, password, role) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $username, $password, $role);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "User added successfully.";
} else {
    echo "Error adding user.";
}

$stmt->close();
$conn->close();
?>
