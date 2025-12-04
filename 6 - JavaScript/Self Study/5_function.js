//---Function Statement (aka function declaration) ---
function a() {
    console.log("a called")
}





//--- Function Declaration ---
//function statment & function declaration are both same





//--- function expression ---

a()
b()

function a() {
    console.log("a called")
}

// function expression
var b = function() {
    console.log("b called")
}

//diffrence between funtion stetment & function expression is hoisting

//here the var b function call will throw an error cause during the hoisting-time/memory 
// creation-time the a has assigned function cuase of hoisting but b has assigned undefined 
// (its treated as var) so when the js engine read code line by line and then its reaches to the 
// var b = function... line then only its assigned the function to var b before that it undefined 





//---anonymous function---
//a function without an name is called anonymous function (its doesn't have its own identity)

function() {
    console.log("Anonymous function")
        //this will not be valid according to js(Echmasript specification) 
        // dosent allowed and function without an name then what is the use of anonymous


    //the use cases of anonymous fucntion 
    //anonymous function are use in the place where its uses as values means we use it to assign it 
    // to the variable so its act like an value 
}

// instead of using  function(){} we use method as below
// for anonymous function 
var b = function() {
    console.log("b called")
}




//--- named function expression ---
// its just like anonymous function but anonymous had only named on variable which here is b
// just in named function we also give the name to the function as here xyz() its wierd but its 
// possible here 
var b = function xyz() {
    console.log("b called")
}

a()
b()
xyz() // if we call this it would say its not defined
    // cause xyz will only get defined in the var b scope it wont 
    // get defined in the global scope (we can only call it inside the var b scope)





//--- Diffrence between Parameter & Arguments ---
function func1(param1, param2) {} // this param1 & param2 is an parameter 
func1(10, 20) // this values are called Arguments





//--- FIrst Class Funciton ---