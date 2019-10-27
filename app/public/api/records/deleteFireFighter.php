<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('DELETE FROM FireFighter WHERE personId = ?');
$stmt->execute([
  $_POST['personId']
]);


header('HTTP/1.1 303 See Other');
header('Location: ../records/');
//303 go somewhere else
