<?php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $search = $_POST["search"];

    try {
        
        require_once "includes/dbh.inc.php";

        $query = "SELECT * FROM comments 
                  WHERE username = :username";

        $stmt = $pdo->prepare($query);

        $stmt->bindParam("username",$search);
        $stmt->execute();

        $data_array = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        if (empty($data_array)) {
            echo "No data Founded";
        } else {

            foreach ($data_array as $row) {
                echo '<div>';
                echo '<p><strong>Name:</strong> ' . htmlspecialchars($row['username']) . '</p>';
                echo '<p><strong>Comment:</strong> ' . htmlspecialchars($row['comment_text']) . '</p>';
                echo '<p><strong>Created At:</strong> ' . htmlspecialchars($row['created_at']) . '</p>';
                echo '</div>';
            }
        }


    } catch (PDOException $e) {
        echo $e->getMessage();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search results</title>
</head>
<body>
    
</body>
</html>