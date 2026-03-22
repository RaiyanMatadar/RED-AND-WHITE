<?php

$dsn = "mysql:host=localhost;dbname=myfirstdatabase";
$dbUsername = "root";
$dbPassword = "";
    
try {
    $pdo = new PDO($dsn, $dbUsername, $dbPassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "Connection successful!";
    
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}   
