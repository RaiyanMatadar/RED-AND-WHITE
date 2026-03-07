<?php 

// Database connection
$host = "localhost";
$user = "root";
$password = "";
$database = "mydb";

$conn = mysqli_connect($host, $user, $password, $database);

// 2. Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// 3. Get form data & sanitize
if (isset(($_POST['submit']))) {

    $name  = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);

    $sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
    
    if (mysqli_query($conn, $sql)) {
        echo "✅ Data saved successfully!";
    } else {
        echo "❌ Error: " . mysqli_error($conn);
    }
}

?>