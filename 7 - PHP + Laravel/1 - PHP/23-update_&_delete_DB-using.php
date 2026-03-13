<?php

// prepaid stetment help to prevent database injection to prevent data manupulation in php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $pwd = $_POST["pwd"];
    $email = $_POST["email"];
    
    try {
    
    // Links an external file — stops the script with a fatal error if file not found
    //require "dbh.inc.php";
    // Same as require, but skips if the file has already been included before
    require_once "dbh.inc.php";
    // Links an external file — shows a small warning if file not found, but script keeps running
    //include "dbh.inc.php";
    // Same as include, but skips if the file has already been included before
    //include_once "dbh.inc.php";
    //💡Use require_once for critical files (like DB connections). Use include for optional files (like sidebars or widgets).

    // do keep in mind that in the end of the string also include the ';' semicolen as the string semicolon belongs to mysql 
    // query and the other semocolen belongs to php for ending the stetment  
    
    // this isnt safe as we inserting data directly to the database without any security so an user can inject Sql wuery to destroy 
    // the database so for preventing that we cna use prepared statment  
    // $query = "INSERT INTO users (username,pwd,email) 
    //             VALUES ($username,$pwd,$email);";
    
    // there are 2 ways to use prepaid stetment 
    // 1 = cannot use name parameters  
    // 2 = name parameter 

    // 1 = cannot use name parameters
    $query = "INSERT INTO users (username,pwd,email)   
                VALUES (?,?,?);";
    
    // we can access the pdo from the file which we connected early on the pdo is an database connection 
    $stmt = $pdo->prepare($query);
    
    $stmt->execute([$username,$pwd,$email]);

    // 2 = name parameter (recommended way) 
    $query = "INSERT INTO users (username,pwd,email)   
    VALUES (:useranme,:pwd,:email);";

    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":username",$username);
    $stmt->bindParam(":pwd",$pwd);
    $stmt->bindParam(":email",$email);

    $stmt->execute();

    // this is for closing the database connection. php do it automatically but its 
    // best practice to do it by our own as to free the as much resources as possible 
    
    $pdo = null;
    $stml = null;

    // close the whole thing using die() or exit()
    // use die() if there isnt any database connneciton 
    // use exit() if you just wanna end the script 

    // for sending user to home page once user sign in 
    header("Location: ../index.php");
    die();

    } catch (PDOException $e) {
        die("query failed : " . $e->getMessage());
    }
} else {
    header("Location: ../index.php");
}
