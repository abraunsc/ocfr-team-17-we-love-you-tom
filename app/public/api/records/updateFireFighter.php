<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('UPDATE FireFighter
  SET firstName = ?, lastName = ?, address = ?, email = ?, workPhone = ?, personalPhone = ?, gender = ?, startDate = ?, radioNumber = ?, stationId = ?, dob = ? WHERE personId = ?');
$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['address'],
  $_POST['email'],
  $_POST['workPhone'],
  $_POST['personalPhone'],
  $_POST['gender'],
  $_POST['startDate'],
  $_POST['radioNumber'],
  $_POST['stationId'],
  $_POST['dob'],
  $_POST['personId']
]);


header('HTTP/1.1 303 See Other');
header('Location: ../records/');
//303 go somewhere else
