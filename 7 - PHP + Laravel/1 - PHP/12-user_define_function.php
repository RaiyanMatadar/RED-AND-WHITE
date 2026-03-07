<?php  

//we can enable strict type of PHP using 
declare(strict_types=1);

function sayHello(string $name,$paramwithdefaultvalue = "this is an default value"){
    return $name;
}

$get = sayHello("raiyan");
echo $get;

// we can assign default value to param 
// we can use strict stype of php 
// we can return the value to the the variable 

