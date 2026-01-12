"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Declare a variable that must only store a number.
let onlyNum = 10;
// console.log(onlyNum);
// Write a function that takes a string and returns its length.
function stringLength(str) {
    let length = str.length;
    return length;
}
// console.log(stringLength("raiyan"));
// Create a boolean variable that can only be true or false (no tricks).
// let checkBoolean : boolean = true
// What error do you get if you assign "10" to a number variable? Try it.
// let errorCheck : number = "10"
// Create an array that can store only numbers.
let singleDataArr = [1, 2, 45];
let num = "10";
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
class usingClass {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let hack = new usingClass("raiyan", 20);
console.log("x");
//# sourceMappingURL=test1.js.map