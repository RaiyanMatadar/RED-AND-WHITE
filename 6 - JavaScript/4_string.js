// A JavaScript String is a sequence of characters, typically used to represent text.

// In JavaScript, there is no character type (Similar to Python and different from C, C++ and Java), 
// so a single character string is used when we need a character.
// Like Java and Python, strings in JavaScript are immutable.

// Using Single Quote
let s1 = 'abcd';

// Using Double Quote
let s2 = "abcd";

// The new String() constructor string object (NOT RECOMENDED)
let s = new String('abcd');

// Template Literals (String Interpolation)
let s3 = 'gfg';
let s4 = `You are learning from ${s3}`;
console.log(s4);

// Basic Operations on JavaScript Strings
// 1. Finding the length of a String
let s5 = 'JavaScript';
let len = s5.length;

console.log("String Length: " + len);

// 2. String Concatenation
// You can combine two or more strings using + Operator.
let s6 = 'Java';
let s7 = 'Script';
let res = s6 + s7;

console.log("Concatenated String: " + res);

// 5. Find Substring of a String
// We can extract a portion of a string using the substring() method.

let s8 = 'JavaScript Tutorial';
let s9 = s1.substring(0, 10);

console.log(s9);

// Uppercase & lowercase
// .toUpperCase();
// .toLowerCase();

// 9. Trimming Whitespace from String
let s10 = '    Learn JavaScript       ';
let s11 = s10.trim();

console.log(s11);

// 10. Access Characters from String
// Access individual characters in a string using bracket notation and charAt() method.

let s12 = 'Learn JavaScript';
let s13 = s12[6];
console.log(s12);
s13 = s12.charAt(6);
console.log(s13);