<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query

if (isset($_POST['certName'])){
  $stmt = $db->prepare('SELECT firstName, lastName, certName, expDate FROM FireFighter inner join CertTracking
    on FireFighter.personId = CertTracking.personId inner join Certificate on CertTracking.certId = Certificate.certID
    where certName = ?');
  $stmt->execute([$_POST['certName']]);
} elseif (isset($_POST['firstName']) and isset($_POST['lastName']) ){
  $stmt = $db->prepare('SELECT firstName, lastName, certName, expDate FROM FireFighter inner join CertTracking
    on FireFighter.personId = CertTracking.personId inner join Certificate on CertTracking.certId = Certificate.certId
    where firstName = ? and lastName = ?');
  $stmt->execute([$_POST['firstName'], $_POST['lastName']]);
} elseif (isset($_POST['firstName'])){
  $stmt = $db->prepare('SELECT firstName, lastName, certName, expDate FROM FireFighter inner join CertTracking
    on FireFighter.personId = CertTracking.personId inner join Certificate on CertTracking.certId = Certificate.certId
    where firstName = ?');
  $stmt->execute([$_POST['firstName']]);
} elseif (isset($_POST['lastName'])){
  $stmt = $db->prepare('SELECT firstName, lastName, certName, expDate FROM FireFighter inner join CertTracking
    on FireFighter.personId = CertTracking.personId inner join Certificate on CertTracking.certId = Certificate.certId
    where lastName = ?');
  $stmt->execute([$_POST['lastName']]);
}

$persons = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($persons, JSON_PRETTY_PRINT);


// Step 4: Output
header('Content-Type: application/json');
echo $json;
