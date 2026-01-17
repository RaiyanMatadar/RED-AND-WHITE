// Type Assertion
// Type Casting 
// Non-null assertion opertor

// type assertion ka matlab batana TypeScript ko ki perticular cheej ka type kya hain.
// ye app tab karte ho jab app typescript se jyada use value or variable ka type jante ho 

// type Assertion
let typeAssertion : any = 12;
// (a as number).toExponential // 
// (<number>a).toExponential

// Type casting 
// it means converting a value from one data type to another, like turning 
// a string "12" into a number 12.
let typeCasting = Number("12");
console.log(typeCasting);

// Non-null assertion opertor
// it means that we are telling the compiler as this value is definetly not an null & undefined

let ExampleNonNull : number | undefined | null;
ExampleNonNull = 10;

// ExampleNonNull!.toString
// this "!" means that the ExampleNonNull variable is definetly not an null or undefined