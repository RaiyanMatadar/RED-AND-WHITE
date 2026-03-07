<?php 

// for loop 
for ($i = 0; $i <= 10;$i++){
    echo "this is iteration ". $i ."<br>"; 
}

// while loop 
$test = 0;

while ($test < 10) {
    echo $test;
    $test++;
}

// do while loop 

$num = 1;

do {
  echo $num . "\\n"; // Output the current number
  $num++;             // Increment the counter
} while ($num <= 5);  // Check the condition after the loop body executes

// foreach loop 
$fruits = array("Apple", "Banana", "Cherry");

// $fruits (select the aray here) as $fruit means an singular fruit  
foreach($fruits as $fruit){
    echo "this is an " . $fruit . "<br>";
}

// for associaltive array 
$fruits = array("Apple" => "red", "Banana" => "yellow", "Cherry" => "red");

foreach ($fruits as $fruit => $color) {
    echo "this is an " . $fruit . "which its color is " . $color . "<br>";
}

