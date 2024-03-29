<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('DELETE FROM CertTracking WHERE personId = ? and certId = ?');
$stmt->execute([
  $_POST['personId'],
  $_POST['certId']
]);

header('HTTP/1.1 303 See Other');
header('Location: ../records/fetchCertTrack.php');
//303 go somewhere else
