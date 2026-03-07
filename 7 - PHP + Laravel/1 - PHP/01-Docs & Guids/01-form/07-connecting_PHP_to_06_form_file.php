<?php

// var_dump($_SERVER['REQUEST_METHOD']);

if ($_SERVER['REQUEST_METHOD'] == "POST"){

    //htmlspecialchars (MUST USE IN EVERY INPUT) 
    // help to prevent users to enter 
    //any kind of code so the form remain secure 
    $firstname = htmlspecialchars($_POST['firstname']);
    $lastname =  htmlspecialchars($_POST['lastname']);
    $pets = htmlspecialchars($_POST['favorite-pet']);

    
    // if the user click submit without adding any data 
    // then this will work so for preventing that we can make 
    //an condition as if the user enter any empty data then we 
    //will exit the whole code (script) even tough there is an required in html but 
    // the clien can open dev tool and remove the required from the frontend so it would break 
    if (empty($firstname)) {
        header("Location: 06-form.php");
        exit();
    }
    
    echo "this is the data user submitted\n";
    echo $firstname,$lastname,$pets;

    // after user submit we dont want the users to see the file
    // after the submission happen so once the user submit the data its 
    //remain on the same page instead of going to the submitted data file 
    header("Location: 06-form.php");
} else {
    
    // if the user try to enter this page by manupulating the URL 
    // and try to enter this file then we wont let hacker get in here as the 
    // condition is else and in else we are directing the user to the form page so 
    //this make it secure even furture  
   header("Location: 06-form.php");
}