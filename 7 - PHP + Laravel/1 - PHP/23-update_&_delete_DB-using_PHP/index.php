<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h4>inserting data</h4>
    <form action="includes/formhandler.inc.php" method="post">
        <input type="text" name="username" placeholder="Username">
        <input type="text" name="pwd" placeholder="password">
        <input type="text" name="email" placeholder="E-mail">
        <button type="submit">Sign Up</button>
    </form>

    <h4>modify user</h4>
    <form action="includes/modfyuser.inc.php" method="post">
        <input type="text" name="username" placeholder="Username">
        <input type="text" name="pwd" placeholder="password">
        <input type="text" name="email" placeholder="E-mail">
        <button type="submit">modify</button>
    </form>
    
    <h4>delete user</h4>
    <form action="includes/deleteuser.inc.php" method="post">
        <input type="text" name="username" placeholder="Username">
        <input type="text" name="pwd" placeholder="password">
        <button type="submit">delete</button>
    </form>
</body>
</html>

<?php 


?>