<?php
require_once "db_config.php";

$username = $_POST['username'];
$password = $_POST['password'];
// Get other user information

// Prepare and bind the statement
$stmt = $conn->prepare("UPDATE user SET password = ? WHERE username = ?");
$stmt->bind_param("ss", $password, $username);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "User updated successfully.";
} else {
    echo "Error updating user.";
}

$stmt->close();
$conn->close();
?>
