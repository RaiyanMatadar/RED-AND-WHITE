// Nobita and Frequency 2

// Description:
// Nobita is given a number N (length of the string) and
//  a string. He needs to answer the character which is present in the string and has the lowest frequency.

// Example:
// For string "abbca":
// a = 2
// b = 2
// c = 1

// Frequency of a character = number of times it occurs in the string.

// If multiple characters have the same lowest frequency, output the one that comes first in alphabetical order.

// Example:
// For string "acbb":
// 'a' and 'c' both occur 1 time.
// Answer = 'a' (alphabetically smaller).

// Note:
// All characters of the input string are lowercase English letters.

// Input Description:
// First line: number N (length of string)
// Second line: the string

// Constraints:
// 1 <= N <= 50

// Output Description:
// Print the character with the lowest frequency. If multiple, print the alphabetically smallest.

// Sample Input:
// 6
// abcbaa

// Sample Output:
// c


let obj = {}

let str = "abbca"

for (i of str) {
    if (obj[i] == undefined) {
        obj[i] = 1
    } else {
        obj[i] += 1
    }
}

for (let i in obj) {
    if (obj[i] == 1) {
        console.log(i)
        break
    }
}