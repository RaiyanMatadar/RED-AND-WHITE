// Functions 
// # Funciton types 
// # Optional and Default parameters
// # Rest parameter 
// # overloads 

// # Funciton types


function funcType(name : string,callback: (value : string)=>void){
    callback("callback Funciton called");
}

funcType("raiyan",(value:string)=>{
    console.log(value);
})

// # Optional and Default parameters

function identity(name : string, age : number , gender: string = "not to be disclosed"){
    console.log(name,age,gender);
}

identity("harsh",20,"male");
identity("zishan",22);

// # Rest/spread parameter 

// function ke parameter me agar ... lagaya to aap waha per sare diye 
// gaye argument ko ek hi variable me as an array rakh rahe ho 

function restParameter(...arg : number[]){
    console.log(arg);
}

restParameter(1,2,4,6,8,9,12,5,7,12,67)

// ...rest will take all the element from the argument & it will store it as 
// an array in an paramameter property

// ...spread means copying one arr to another 
let arrSpreat1 = [1,2,5,78,9,5,2,2,22,56];
let arrSpreat2 = [...arrSpreat1];

// just like this arrSpread2 will have the all elements in the arrSpreat2

// # function overloads 

function funcOverloads(a: string): void;                 // overload 1
function funcOverloads(a: string, b: number): number;    // overload 2

function funcOverloads(a: string, b?: number) {
    if (typeof b === "number") {
        console.log("funcOverloads 2");
        return b;
    } 
    
    if (b === undefined) {
        console.log("funcOverloads 1");
        return;
    }

    throw new Error("Invalid arguments");
}

funcOverloads("raiyan");
