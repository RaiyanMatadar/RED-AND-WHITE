<?php 
// global scope 
$test = "global scope";
echo "$test";
// this is in an global scope  


// function scope 
// you can access the global scope variables in funciton scope but the way we do is kind of diffrent 

//we can pass param
function myfunction($test){
    return $test;
}

// then pass the global variable here but this way work but isnt good 
myfunction($test);


// we have to tell the scope as below for accesing globa variables 
function accessGlobal(){
    global $test;
    return $test;

    //or 

    return $GLOBALS["test"];
}

echo accessGlobal();

// static scope 

// A static variable is a type of variable that remains in memory for the entire duration of a 
// program's execution, rather than being created and destroyed within a specific scope.

function staticVariable(){
    static $staticVar = 0;
    $staticVar++;
    
    return $staticVar;
}

echo staticVariable();
echo staticVariable();
echo staticVariable();
echo staticVariable();