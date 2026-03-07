<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>form</title>
    <style>
        main{
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        form {
            background: linear-gradient(grey);
            height: auto;
            width: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            padding: 20px;
        }

        form div {
            display: flex;
            flex-direction: column;
            width: auto;
            width: 100%;
            margin: 0 10px;
            color: black;
        }

        form input {
            margin: 10px;
            padding: 10px;
            border-radius: 5px;
            border: none;
        }

        form select {
            width: 100%;
            
            margin: 10px;
            padding: 10px;
            border-radius: 5px;
            border: none;
        }

        button {
            margin: 10px;
            padding: 10px;
            border-radius: 10px;
            width: 200px;
        }
    </style>
</head>
<body>
    <main>
        <form action="07-connecting_PHP_to_06_form_file.php" method="post">    
            <div>
                <label for="">firstname</label>
                <input type="text" name="firstname" id="name">
            </div>
            <div>
                <label for="">lastname</label>
                <input type="text" name="lastname" id="lastname">
            </div>
            <select name="favorite-pet" id="">
                <option value="cat">cat</option>
                <option value="dog">dog</option>
                <option value="fish">fish</option>
                <option value="caterpiler">caterpiler</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    </main>
</body>
</html>