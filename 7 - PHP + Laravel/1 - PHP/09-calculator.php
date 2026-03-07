<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            background-color: black;
            color: white;
        }

    </style>
</head>
<body>
    <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"])?>" method="post">
        <input type="number" name="num1" placeholder="enter first number">
        <input type="number" name="num2" placeholder="enter number second">
        
        <select name="operators">
            <option value="addition">+</option>
            <option value="subtraction">-</option>
            <option value="multiplication">*</option>
            <option value="division">/</option>
        </select>

        <button type="submit">calculate</button>

    </form>

<?php 
    
    if($_SERVER["REQUEST_METHOD"] === "POST"){

        // Storing Input Data Into Variables 

        // this below code does as it takes 3 arguments 1st the post method 2nd 
        // the variable which we wanna apply the method to 3rd the condition as here its 
        // float means it will only take float  
        $num1 = filter_input(INPUT_POST,"num1",FILTER_SANITIZE_NUMBER_FLOAT);
        $num2 = filter_input(INPUT_POST,"num2",FILTER_SANITIZE_NUMBER_FLOAT);
        $operators = htmlspecialchars($_POST["operators"]);

        $error = false;

        // if user enter empty value then error should occure  
        if (empty($num1) || empty($num2) || empty($operators)){
            echo "<p class='cal-input'>please input the value</p>";
            $error = true;
        }

        // i dont know why but i have added this because the guy has said to me to add 
        if (is_numeric($num1) || is_numeric($num2)){
            echo "<p class='cal-input'>please input the numeric value</p>";
            $error = false;
        }

        if (!$error){
            $results = 0;

            switch ($operators){
                case "addition":
                    $results = $num1 + $num2;
                    echo $results;
                break;

                case "subtraction":
                    $results = $num1 - $num2;
                    echo $results;
                break;

                case "multiplication":
                    $results = $num1 * $num2;
                    echo $results;
                break;

                case "division":
                    $results = $num1 / $num2;
                    echo $results;
                break;

                default:
                echo "the value isnt right";
            }
        }
    }
?>

</body>
</html>

