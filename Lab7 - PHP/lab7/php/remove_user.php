<?php
require_once "db_config.php";

$username = $_POST['username'];

// Prepare and bind the statement
$stmt = $conn->prepare("DELETE FROM user WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "User removed successfully.";
} else {
    echo "Error removing user.";
}

$stmt->close();
$conn->close();
?>
