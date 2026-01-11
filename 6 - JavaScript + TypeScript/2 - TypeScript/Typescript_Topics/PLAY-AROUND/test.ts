// Declare a variable that must only store a number.
let onlyNum : number = 10;
// console.log(onlyNum);

// Write a function that takes a string and returns its length.
function stringLength(str : string) : number{
    let length : number = str.length
    return length
}

// console.log(stringLength("raiyan"));

// Create a boolean variable that can only be true or false (no tricks).
// let checkBoolean : boolean = true

// What error do you get if you assign "10" to a number variable? Try it.
// let errorCheck : number = "10"

// Create an array that can store only numbers.
let singleDataArr : number[] = [1,2,45]
// console.log(singleDataArr);

// Create an array that can store strings OR numbers.
// type dataType =  number | string
// let doubleArr : (number | string)[] = [1,5,7,44,12,"raiyan"];
// let doubleArr : dataType[] = [1,5,7,44,12,"raiyan"];

// Write a function that takes an array of numbers and returns the sum.
// let array: number[] = [1, 4, 5, 7, 96, 22];

// function arrSum(...arr: number[]): number {
//     let sum: number = 0; 

//     arr.forEach(element => {
//         sum += element;
//     });
//     return sum;
// }

// console.log(arrSum(...array));


// Try pushing a string into a number[]. Observe the error.
// let demoStr = "raiyan"
// let normArr : number[] = [1,25,54,16,32];
// normArr.push(demoStr)

// 3️⃣ Tuples
// Create a tuple that stores:
// first: string
// second: number

// let tuple : [string,number] = [198,"raiyan",true];
// console.log(tuple);

// 4️⃣ Enums
// Create an enum for UserRole: Admin, Editor, Viewer.
// Write a function that accepts only these roles.
// Pass a random string like "Boss" and see what happens.
// Log the numeric value of Admin.

// enum UserRole {
//     Admin = 100,
//     Editor = 90,
//     Viewer = 21
// }

// function enumAccess(){
//     UserRole.Admin = "boss"
//     console.log(UserRole.Admin);
// }

// any
// Declare a variable with any.
// Assign a number, then a string, then an object.
// Ask yourself: what safety did I just lose?

// let any : any = 10;
// let any : any = "10";
// let any : any = {
//     name : "raiyan",
//     age : 20,
// };

// console.log(any);

// The safety which i have loose is that i wont be making any safty if i 
// use any cause it can assign any data type then there is no meaning of 
// using typescript 

// unknown
// Declare a variable with unknown.
// Try to call .toUpperCase() on it.
// Fix the error using a type check.

// let unkwn : unknown;
// unkwn = 12;
// unkwn = "raiyan"

// if (typeof unkwn === "string"){
//     let uppper = unkwn.toUpperCase()
//     console.log(uppper);
// } else {
//     console.log("object");
// }

// void
// Write a function that only logs something.
// Give it a return type of void.
// Try returning a value and see what happens.

// function logSomthing () : void {
//     return undefined
// }
// logSomthing()

// null & undefined
// Create a variable that can be string | null.
// Try using it without checking for null.
// Fix it properly.

// never
// Write a function that always throws an error.
// Give it the return type never.
// Why does this make sense?

// 6️⃣ Type Inference
// Declare a variable: let x = 10;
// What type does TS infer?
// Try assigning "hello" to it later.
// Declare let y; and assign later.
// What type does TS give now?
// Why is this dangerous?

// let x = 10;
// x = "hello"

// let y;
// y = 10;


// 7️⃣ Type Annotations
// Rewrite this with explicit types:

// let age : number = 20;
// let name : string = "Raiyan";


// Write a function with full annotations:
// params
// return type

// function fullAnnotation(a:number,b:number):number{
//     return a + b 
// }

// fullAnnotation(10,20)

// Interfaces
// Create an interface User with:
// id: number
// name: string
// isActive: boolean

// Create an object using that interface.
// Miss one property and watch the error.
// Add an extra property and see what happens.

// interface User {
//     id: number
//     name: string
//     isActive: boolean
// } 

// let obj : User = {
//     id : 10,
//     name : "raiayn",
//     isActive : true,
// }

// 9️⃣ Extending Interfaces
// Create Person with:
// name
// age
// Create Employee that extends Person and adds:
// salary
// Create an object of Employee.
// Try removing name and see why TS stops you.

// interface Person {
//     name : string
//     age : number
// }

// interface Employee extends Person {
//     salary : number
// }

// let Employee : Employee =  {
//     salary : 5000
// }

// 🔟 Type Aliases
// Create a type alias for:
// string | number

type StringOrNumber =  string | number;

let num : StringOrNumber = "10"

// type aliases means using an type keyword and assigning to it an data 
// type we wanna give to an specific thing as it here is an variable.
// so after that we can use : notation and assign the type name which is here stringOrNumber 
// then we can use the same type into many other things 

// Use it in:
// a variable
// a function parameter

// type NewAliases = null | boolean

// let typeAliasesChecking : NewAliases  = true;

// function typeAliasesCheckingOnFunc(check : NewAliases) : undefined{
//     console.log(check);
// } 

// typeAliasesCheckingOnFunc(10)

// 1️⃣1️⃣ Intersection Types
// type A = { name: string };
// type B = { age: number };

// Create type C = A & B.

// type C = A & B

// let object : C = {
//     name : "raiyan",
// }

