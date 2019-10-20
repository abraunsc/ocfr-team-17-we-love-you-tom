<?php
// 0. Validate my data

//$_GET, $_POST, $_ENV, $_SERVER
//super global variables, associative arrays
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query

$stmt = $db->prepare('INSERT INTO CertTracking (personId,certId, dateRenewed, expDate)
VALUES (?,?,?,?)');
$stmt->execute([
  $_POST['personId'],
  $_POST['certId'],
  $_POST['dateRenewed'],
  $_POST['expDate']
]);

header('HTTP/1.1 303 See Other');
header('Location: ../records/fetchCertTrack.php');






//TODO: Error checking


//303 go somewhere else
