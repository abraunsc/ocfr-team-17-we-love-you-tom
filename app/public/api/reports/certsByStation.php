<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query

$stmt = $db->prepare('SELECT s.stationId, c.certName, f.firstName, f.lastName, ct.expDate  FROM Station s inner join FireFighter f
  on s.stationId = f.StationId inner join CertTracking ct on f.personId = ct.personId
  inner join Certificate c on ct.certId = c.certId
  order by s.stationID, ct.certId');
$stmt->execute();

$certsbystation = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($certsbystation, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
