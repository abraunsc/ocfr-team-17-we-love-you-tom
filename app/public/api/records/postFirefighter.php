<?php
// 0. Validate my data

//$_GET, $_POST, $_ENV, $_SERVER
//super global variables, associative arrays
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('INSERT INTO FireFighter
  (firstName, lastName, address, email, dob, gender, startDate, radioNumber, stationId)
  VALUES (?,?,?,?,?,?,?,?,?)');
$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['address'],
  $_POST['email'],
  $_POST['dob'],
  $_POST['gender'],
  $_POST['startDate'],
  $_POST['radioNumber'],
  $_POST['stationId']
]);

//TODO: Error checking

header('HTTP/1.1 303 See Other');
header('Location: ../records/');
//303 go somewhere else
