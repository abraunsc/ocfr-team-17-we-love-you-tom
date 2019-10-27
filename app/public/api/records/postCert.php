<?php


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
header('Location: ../records/fetchCerts.php');
//303 go somewhere else
