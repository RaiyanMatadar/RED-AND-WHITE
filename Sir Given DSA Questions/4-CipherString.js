// Cipher String

// Description
// You are given a string of size N. You have to convert the string into its cipher form.
// For example, the cipher form of a string "aabbcd" will be "a2b2c1d1". 
// The new generated string contains the characters, and the count of their occurrences
// in a consecutive manner.
// Note: The string contains only lower-case characters.

// Input Description
// The first line of the input contains T, the number of test cases.
// The first line of each test case contains N, the length of the string.
// The next line contains the string, for which the cipher string is to be generated.

// Constraints
// 1 <= T <= 10
// 1 <= N <= 100

// Output Description
// For each test case, print the cipher string for the given string, on a new line.

// Sample Input 1
// 2
// 5
// aabbcc
// 5
// aazaa

// Sample Output 1
// a2b2c2
// a2z1a2


let str = "abbcc";
let result = "";
let count = 1;

for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
        count++;
    } else {
        result += str[i] + count;
        count = 1;
    }
}

console.log(result);