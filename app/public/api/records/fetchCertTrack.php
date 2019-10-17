<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query


$stmt = $db->prepare('SELECT f.personId, f.firstName, f.lastName, c.certId, c.certName, ct.dateRenewed, ct.expDate FROM FireFighter f inner join CertTracking ct on f.personId = ct.personId inner join Certificate c on ct.certId = c.certId');
$stmt->execute();

$persons = $stmt->fetchAll();


// Step 3: Convert to JSON
$json = json_encode($persons, JSON_PRETTY_PRINT);


// Step 4: Output
header('Content-Type: application/json');
echo $json;
