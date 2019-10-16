<?php
// 0. Validate my data

//$_GET, $_POST, $_ENV, $_SERVER
//super global variables, associative arrays
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query

$stmt = $db->prepare('INSERT INTO CertTracking (personId, certId)
SELECT personId, certId FROM FireFighter, Certificate
WHERE firstName = ? and lastName = ? and certName = ?');
$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['certName']
]);

$stmt = $db->prepare('UPDATE CertTracking SET dateRenewed = ?, expDate = ?
  WHERE personId in (SELECT personId FROM FireFighter WHERE firstName = ? and lastName = ?)
  and certId in (SELECT certId FROM Certificate WHERE certName = ?)');
$stmt->execute([
  $_POST['dateRenewed'],
  $_POST['expDate'],
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['certName']
])

header('HTTP/1.1 303 See Other');
header('Location: ../records/');

// $stmt = $db->prepare('SELECT * FROM CertTacking');
// $stmt->execute();
//
// $certTrack = $stmt->fetchAll();
// // patientGuid VARCHAR(64) PRIMARY KEY,
// // firstName VARCHAR(64),
// // lastName VARCHAR(64),
// // dob DATE DEFAULT NULL,
// // sexAtBirth CHAR(1) DEFAULT ''
//
// // Step 3: Convert to JSON
// $json = json_encode($certTrack, JSON_PRETTY_PRINT);
//
//
// // Step 4: Output
// header('Content-Type: application/json');
// echo $json;
//


// $stmt = $db->prepare('INSERT INTO
//   (firstName, lastName, address, email, dob, gender, startDate, radioNumber, stationId)
//   VALUES (?,?,?,?,?,?,?,?,?)');
// $stmt->execute([
//   $_POST['firstName'],
//   $_POST['lastName'],
//   $_POST['address'],
//   $_POST['email'],
//   $_POST['dob'],
//   $_POST['gender'],
//   $_POST['startDate'],
//   $_POST['radioNumber'],
//   $_POST['stationId']
// ]);

//TODO: Error checking


//303 go somewhere else

 ?>
