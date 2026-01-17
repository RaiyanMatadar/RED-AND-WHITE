// Generics 
// # Generics functions 
// # Generics interfaces 
// # Generics Classes 
// some of topics by me (Same Type function, type Narrowing)




// # Generics functions 

// Generic function ka use hota hai jab hum chahte hain
// ki same function alag-alag data types ke saath kaam kare
// bina type safety lose kiye.

// <T> ek placeholder type hota hai
// jo function call ke time decide hota hai.

function funcGeneric<T>(a: T): T {
    return a;
}

// yahan hum manually bata rahe hain T = string
funcGeneric<string>("hey");

// yahan hum nahi batate, TypeScript khud samajh leta hai
// kyunki value number hai, to T = number ho jaata hai
funcGeneric(12);

// 1) Generic with constraint
// yahan hum rule laga rahe hain ki
// T ke paas 'length' property honi chahiye

function printLength<T extends { length: number }>(a: T) {
    console.log(a.length);
}

printLength("hello");   // works
printLength([1,2,3]);   // works
// printLength(10);     // error, kyunki number ke paas length nahi hoti

// 2) Multiple generics
// jab ek se zyada type chahiye ho

function pair<T, U>(a: T, b: U) {
    return [a, b];
}

console.log(pair("hey", 10)); // T = string, U = number

// # Same Type function 
function sameType<T>(a: T, b: T): T {
    return a;   // sirf T type ka value hi return kar sakte hain

    // return "hey" // this will cause an trouble 
    
    // return "hey" as T  | both are same 
    // return <T> "hey"   |

    // here the "hey" as T means “Trust me bro, this is T.” means 
    // the data type is same as T but this is lying to the type system. 
    // its called type assertion
    // Use type assertion only when you really know what you’re doing.
}

sameType("one", "two");   // T = string
sameType(10, 20);        // T = number

//# type Narrowing
function typeNarrowing<T>(value: T) {
    if (typeof value === "string") {
        console.log("It's a string");
    } 
    else if (typeof value === "number") {
        console.log("It's a number");
    }
     else {
        console.log("It's something else");
    }
}

typeNarrowing("string"); // Output: It's a string
typeNarrowing(42);       // Output: It's a number
typeNarrowing(true);     // Output: It's something else


// # Generics interfaces 

interface Halua<T> {
    name: string;
    age: number;
    key: T;
}

function interfaceGeneric(obj: Halua<string>) {}

interfaceGeneric({name : "raiyan",age : 20,key : "learningNewConcepts"})

// # Generics Classes 

class GenericWithClass<T>{
    constructor(public key : T){}
}

let b1 = new GenericWithClass<string>("hey"); 