<?php
require_once "db_config.php";

$roleFilter = $_GET['roleFilter'];

// Prepare the query
$sql = "SELECT * FROM user";
if (!empty($roleFilter)) {
    $sql .= " WHERE role = '$roleFilter'";
}

// Execute the query
$result = $conn->query($sql);

// Fetch and return users
$users = array();
while ($row = $result->fetch_assoc()) {
    $users[] = $row;
}

echo json_encode($users);

$conn->close();
?>
