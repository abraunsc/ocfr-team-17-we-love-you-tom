<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query

if (isset($_GET['personId'])){
  $stmt = $db->prepare('SELECT * FROM Person where personId = ?');
  $stmt->execute([$_GET['personId']]);
}
else {
$stmt = $db->prepare('SELECT * FROM Person');
$stmt->execute();
}
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
