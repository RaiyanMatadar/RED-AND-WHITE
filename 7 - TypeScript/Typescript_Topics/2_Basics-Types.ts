// Basic types 
// # Primitive types (number,string,boolean)
// # Arrays
// # Tuples 
// # Enums 
// # any, Unknown, Void, null, undefined,never

// 1 - Primitive types (number,string,boolean)
// # primitive 
var a = 5;
var b = a;

b = 20;

console.log("a is : ", a);  // 5
console.log("b is : ", b);  // 20
// b will copied the value of a its wont change the original variable's value as its work on primitive    

// # refrence  
// [] {} () - when ever you see this means they run on refrence 
// whenever you see these 3 brackets means that the second property wont copy the value of the first property 
// rether it will take the refrence of the first property means which means changing the second one will change 
// the inizial property aswell 

// e.g 
let arr_a: number[] = [1, 2, 3, 4, 5];
let arr_b = arr_a;
arr_b[0] = 99;

console.log("Original Array:", arr_a); // Output: [99, 2, 3, 4, 5]
console.log("Referenced Array:", arr_b); // Output: [99, 2, 3, 4, 5]

// Explanation:
// Both `arr_a` and `arr_b` point to the same memory location.
// Changing one affects the other because they share the same reference.

// Note : when we hover over the variable or any other property it will show the type of the variable or property ' var a: number '


// # arrays

let arr = [1,2,3,4,"Raiyan"] 
// hoverover it, it will show the let "arr: (string | number)[]" 
// means its its an string  "|" (or) number 

// but if we want our arrays to be only one single data type then 

// let arrSingleDataType : number[] = [1,2,3,4,"Raiyan"];
// this way we wont be able to assign an diffrent data type in an single array 

// # Tuples

let tuples : [string, number] = ["raiyan",22];

// let tuplesWithError : [string, number] = [22,"raiyan"];

// Tuples are used when you want to group a fixed number of elements with 
// specific types in a single array-like structure.


// # Enums 

// Enumerations is like an object but it has some special powers with some syntax changes

enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}

enum StatusCodes {
    ABANDONED = "abandoned status code 500",
    NOTFOUND = "npt found status code 404",
}

StatusCodes.NOTFOUND

// its not finished yet we will conver more about enum in the upcoming topics  

// # any, Unknown, Void, null, undefined,never

// any 
// let any; means we can assign any data type to it " let any: any " hoverover it will show this any type 

let any;
any = 12;
any = "string"
 
// Unknown
let unkwn : unknown;
unkwn = 12;
unkwn = "raiyan"

// diffrence between any & unknown
// with any 
let withAny;
withAny = 12;
withAny = "checking diffrence with any"

withAny.toUpperCase()
// this will work as it wont check so it will failed for the number assignement and it will 
// work with the string assignment (technically its not good)

// with unknown

let withUnknown;
withUnknown = 12;
withUnknown = "checking diffrence with unknown"

withUnknown.toUpperCase()

// unknown is similar to any as it can take any assignment but when we work with it we have 
// to check its data type every time so than we can use the specific data type related methods and etc 

// void

// Mental Model 
// function example() : "for telling the return type" {
//     return "raiyan";
// }

function example1() : void {
    console.log("the function which isnt returning somthing then we can pass void to it");
}

function example2() : string {
    return "raiyan";
}

// ETC...

// null (you cant pass assignement to null, until its an union )
// undefined

// Never (if we pass infinite loop then we can assign never to it means the 
// next code wount run, typically we dont use it ) 

