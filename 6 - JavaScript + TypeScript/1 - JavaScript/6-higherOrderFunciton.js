//---------------------------------- Higher Order function ----------------------------------
// what is higher order funciton ?
// a function which takes another function as an argument or return a function from it is known as higher 
// order function


// this function is called callback function
function x() {
    console.log("called x");
}

// this function is higher order function(HOF)
function y(x) {
    x();
}

// here the y function takes x as an argument & return x in it so function y is called higher order function

// this code doesnt follow the DRY rule (Dont repeat yourself)
const radius = [3, 5, 6, 8]

const calculateArea = function(radius) {
    const Output = [];

    for (let i = 0; i < radius.length; i++) {
        Output.push(Math.PI * radius[i] * radius[i])
    }
    return Output;
}
console.log(calculateArea(radius));


const calculateCircumference = function(radius) {
    const Output = [];

    for (let i = 0; i < radius.length; i++) {
        Output.push(2 * Math.PI * radius[i])
    }
    return Output;
}
console.log(calculateCircumference(radius));


const calculateDiameter = function(radius) {
    const Output = [];

    for (let i = 0; i < radius.length; i++) {
        Output.push(2 * radius[i])
    }
    return Output;
}
console.log(calculateDiameter(radius));

// ---------------------------------------------------------------------------------------------------------------------------

// This code follows the DRY rule
const Area = function(radius) {
    return Math.PI * radius * radius
}

const Circumference = function(radius) {
    return 2 * radius;
}

const Diameter = function(radius) {
    return 2 * Math.PI * radius
}

const calculate = function(radius, logic) {
    const Output = [];

    for (let i = 0; i < radius.length; i++) {
        Output.push(logic(radius[i]))
    }
    return Output;
}

console.log(calculate(radius, Area));
console.log(calculate(radius, Diameter));
console.log(calculate(radius, Circumference));