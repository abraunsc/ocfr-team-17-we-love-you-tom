<?php
// 0. Validate my data

//$_GET, $_POST, $_ENV, $_SERVER
//super global variables, associative arrays
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('UPDATE FireFighter
  SET firstName = ?, lastName = ?, address = ?, email = ?, gender = ?, startDate = ?, radioNumber = ?, stationId = ?, dob = ? WHERE personId = ?');
$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['address'],
  $_POST['email'],
  $_POST['gender'],
  $_POST['startDate'],
  $_POST['radioNumber'],
  $_POST['stationId'],
  $_POST['dob'],
  $_POST['personId']
]);

//TODO: Error checking

header('HTTP/1.1 303 See Other');
header('Location: ../records/');
//303 go somewhere else
