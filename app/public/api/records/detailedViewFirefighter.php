<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query


$stmt = $db->prepare('SELECT firstName, lastName, certName, expDate FROM FireFighter inner join CertTracking 
  on FireFighter.personId = CertTracking.personId inner join Certificate on CertTracking.certId = Certificate.certID
  where firstName = ? and lastName = ?');
$stmt->execute([$_POST['firstName'], $_POST['lastName']]);
// else {
// $stmt = $db->prepare('SELECT * FROM FireFighter');
// $stmt->execute();
// }
$persons = $stmt->fetchAll();
// patientGuid VARCHAR(64) PRIMARY KEY,
// firstName VARCHAR(64),
// lastName VARCHAR(64),
// dob DATE DEFAULT NULL,
// sexAtBirth CHAR(1) DEFAULT ''

// Step 3: Convert to JSON
$json = json_encode($persons, JSON_PRETTY_PRINT);


// Step 4: Output
header('Content-Type: application/json');
echo $json;
