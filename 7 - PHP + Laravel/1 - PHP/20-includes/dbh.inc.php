<?php

// =============================================================
// DATABASE CONNECTION USING PDO
// =============================================================
    
// --- What is a DSN? ---
// A Data Source Name (DSN) is a string that tells PHP how to reach your database.
// It specifies the database driver (e.g. mysql), the host, and the database name.
// Format: "driver:host=hostname;dbname=your_database_name"
    
$dsn = "mysql:host=localhost;dbname=myfirstdatabase";
$dbUsername = "root";
$dbPassword = "";
    
// "localhost" is used here because XAMPP runs a local server on your machine.
// On a live/hosted server, replace "localhost" with the host address your
// hosting provider gives you, and update the credentials accordingly.
    
    
// --- The 3 Ways to Connect PHP to MySQL ---
//
// 1. mysql_*     — The original extension. REMOVED in PHP 7. Never use it.
// 2. MySQLi      — "MySQL Improved". Works great, but only for MySQL databases.
// 3. PDO         — "PHP Data Objects". Works with MySQL, PostgreSQL, SQLite, and more.
//                  Supports prepared statements, which protect against SQL injection.
//                  This is the recommended approach for new projects.
    
    
// --- Establishing the PDO Connection ---

// We wrap the connection in try/catch to gracefully handle errors.
// Without it, a failed connection would crash the script with a raw, ugly error.
    
try {
    $pdo = new PDO($dsn, $dbUsername, $dbPassword);
    
    // Tell PDO to throw exceptions on errors (instead of silently failing).
    // This is critical — without it, errors can go unnoticed.
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "Connection successful!";
    
} catch (PDOException $e) {
    // In production, avoid echoing raw error messages to the browser —
    // they can expose sensitive info. Log them instead.
    echo "Connection failed: " . $e->getMessage();
}   
    
// --- What's Next? ---
// Once connected, you use $pdo to run queries safely using prepared statements:
    
//$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
    
//$stmt->execute([$userId]);
//$results = $stmt->fetchAll();

// Prepared statements separate your SQL from user input,
// which is the #1 defense against SQL injection attacks.
