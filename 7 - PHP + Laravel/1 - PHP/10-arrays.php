<?php 

$fruits = ["orange","banana","cherry"];

//unset($fruits[1]);
//echo $fruits;

// this will delete the 1st indexed string but wont move
// the after that string to the current 1s index so for that we have array splice

// array splice 
// $fruits = (selecting the item ),0 = (from where we wanna start deleating), 1 = (1 length ahead for deleation )
array_splice($fruits,0,1);
echo $fruits[1];
// now it has deleated the data and removed the length for that deleated index

// assosiative array 
$tasks = [
    "laundry" => "deniel",
    "trash" => "frieda",
    "vacume" => "basse",
    "dishes" => "bella"
];

echo $tasks["laundry"];

// for checking the whole array we can use the print_r() function 
print_r($tasks);

// for getting the length of the array 
// count($tasks);

// sorting array by Alphabetically 
// sort($tasks);


// array push only work with array not to the assotiative 
//array as it has key so we cant use it there 

$fruits = ["orange","banana","cherry"];
array_push($fruits,"mango");

print_r($fruits);

// we can use this way to push in the associative array 

$tasks["dusting"] = "tara";
print_r($tasks);

// if we dont wanna deleate the thing but we want to insert data to 
// the certain indexed to certain then we can use this way
$fruits = ["orange","banana","cherry"];
array_splice($fruits,1,0,"mangobhai");
print_r($fruits);

// we can also add other arrays this way 
$test = ["an New data","to insert","into other array"];
array_splice($fruits,1,0,$test);
print_r($fruits);

// multidimensional array 
$multidimensionalArray = [
    array("apple","mango"),
    "banana",
    "cherry"
];

echo $multidimensionalArray[0][1];

$assosiativeArray = [
    // both are valid just syntax diffrence 
    "meant" => array("beef","chicken"), 
    // this become an assosiative inside an associative array 
    "vegtable" => ["vegies" => "cucumber","perl"]
];

echo $assosiativeArray["vegtable"][0];

?>