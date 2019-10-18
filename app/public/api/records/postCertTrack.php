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

$stmt2 = $db->prepare('UPDATE CertTracking SET dateRenewed = ?, expDate = ?
  WHERE personId in (SELECT personId FROM FireFighter WHERE firstName = ? and lastName = ?)
  and certId in (SELECT certId FROM Certificate WHERE certName = ?)');
$stmt2->execute([
  $_POST['dateRenewed'],
  $_POST['expDate'],
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['certName']
]);

header('HTTP/1.1 303 See Other');
header('Location: ../records/');






//TODO: Error checking


//303 go somewhere else

 ?>
