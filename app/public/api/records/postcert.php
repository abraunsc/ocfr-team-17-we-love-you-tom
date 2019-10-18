<?php
// 0. Validate my data

//$_GET, $_POST, $_ENV, $_SERVER

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('INSERT INTO Certificate
  (certAgency, certName, defaultExpPeriod)
  VALUES (?,?,?)');
$stmt->execute([
  $_POST['certAgency'],
  $_POST['certName'],
  $_POST['defaultExpPeriod']
]);

//TODO: Error checking

header('HTTP/1.1 303 See Other');
header('Location: ../records/');
//303 go somewhere else

// patientGuid VARCHAR(64) PRIMARY KEY,
// firstName VARCHAR(64),
// lastName VARCHAR(64),
// dob DATE DEFAULT NULL,
// sexAtBirth CHAR(1) DEFAULT ''




 ?>
