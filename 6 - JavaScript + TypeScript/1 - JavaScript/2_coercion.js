
// -Type Coercion in JavaScript--

// - Automatic Conversion: When required, the JavaScript automatically converts required data types.
//   Works with Three Types: String, Number, and Boolean coercion.
// - Can Lead to Unexpected Results: If they are not handled properly, they may cause unintended bugs.
// - Implicitly Occurs: Automatically converts the type of the value from one to another.

// --String Coercion--
// It occurs when the string is combined with the non-string using (+). JavaScript converts numbers and booleans 
// into strings before concatenation.

console.log("String Coercion"); // Output : "510" (string)

// String + Number → String
console.log("Age: " + 18);       // "Age: 18"

// String + Boolean → String
console.log("Logged in: " + true);   // "Logged in: true"

// String + null → String
console.log("Value: " + null);       // "Value: null"

// String + undefined → String
console.log("Data: " + undefined);   // "Data: undefined"

// String + Object → String
console.log("User: " + {name: "Ali"});  // "User: [object Object]"

// String + Array → String
console.log("Numbers: " + [1, 2, 3]);   // "Numbers: 1,2,3"

// Multiple concatenations
console.log("Result: " + 5 + true);     // "Result: 5true"

// --Number Coercion--
// In the number coercion, JavaScript converts the string into a number before operating.

// String → Number (with - operator)
console.log("10" - 3);      // 7

// String → Number (with * operator)
console.log("6" * "2");     // 12

// String → Number (with / operator)
console.log("20" / "5");    // 4

// Boolean → Number
console.log(true - 1);      // 0
console.log(false + 5);     // 5

// null → Number
console.log(null + 10);     // 10   (null becomes 0)

// undefined → Number
console.log(undefined + 5); // NaN  (undefined cannot convert to number)

// this all are integer cause we didnt use "+" here 

// --Boolean Coercion--
// JavaScript treats the true value as '1' and the false value as '0'.

console.log(Boolean("hello")); 
console.log(Boolean(0));    //  0 is coerced to false.
console.log(Boolean([]));  // Non-empty strings are coerced to true,

// Best Practices to Avoid Type Coercion Issues
// Use === Instead of ==

