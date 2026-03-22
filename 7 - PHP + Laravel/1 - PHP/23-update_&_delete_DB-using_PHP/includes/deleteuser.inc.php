<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $pwd = $_POST["pwd"];
    
    try {

        require_once "dbh.inc.php";
        
        
        // in the real world we dont use username & password to delete 
        //the account but its for demonstration only 
        $query="DELETE FROM users WHERE username=:username AND pwd=:pwd";
    
        $stmt = $pdo->prepare($query); 
    
        $stmt->bindParam(":username",$username);
        $stmt->bindParam(":pwd",$pwd);
        
        $stmt->execute();
    
        $pdo = null;
        $stmt = null;
    
        header("Location: ../23");
        die();

    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }
}
 else {
    header("Location: ../index.php");
}