<?php

// if else stetment 
$time = 14;

if ($time < 10) {
    echo "Good morning!"; 
} elseif ($time < 20) {
    echo "Good day!"; 
} else {
    echo "Good night!";
}

//you know this so dont need to explain 

$day = 3;

switch ($day) {
    case 1:
        echo "Today is Monday";
        break;
    case 2:
        echo "Today is Tuesday";
        break;
    case 3:
        echo "Today is Wednesday";
        break;
    case 4:
        echo "Today is Thursday";
        break;
    default:
        echo "It's a weekend or invalid day";
        break;
}

//you know this too 

// match in php 

$a = 10;

$result = match ($a){
    1 => "variable a = 1",
    2 => "variable a = 2",

    // for checking multiple data at once 
    1,2,10 => "variable is equal here",

    // this is an default value which will run if all are false 
    default => "none of them",
};

echo $result;
// it will check the data type too 

// when do we use them ?
// switch is used if you wanna run the condition on an specific value 
// if/else we check multiple things at once 
// match // we use them when we wanna run specific things depending on the 
// value then assigining it to the variable 