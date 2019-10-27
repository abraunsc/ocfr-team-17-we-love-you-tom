<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query

$stmt = $db->prepare('SELECT * FROM FireFighter ORDER BY stationId, radioNumber');
$stmt->execute();

$personsbystationradio = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($personsbystationradio, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
