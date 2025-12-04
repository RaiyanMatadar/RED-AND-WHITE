// Faulty Direction

// Description
// Given a string of length n which consists of characters {L, R, U, D}. Initially, it can be assumed 
// that you are standing at origin (x=0 and y=0). Here, L means left (x-1), R means right (x+1), U means up (y+1) and D means down (y-1).

// You are given this string so that the directions can be followed accordingly to reach a destination. You came to know that there are some 
// string that is faulty and following them ends you up to your initial position that is the origin.
// You don't want to start the trip if the string provided is faulty.
// Find whether the string is faulty or not.
// For ease of the problem, consider you are always facing the north direction.

// Input Description
// The first line of the input contains one integer t (1 ≤ t ≤ 100) — the number of test cases. Then t test cases follow.
// The first line of each test case contains a single integer n (1 ≤ n ≤ 100) — the length of the string.
// The second line of each test case contains a string s of length n.

// Output Description
// For each test case, print the answer: "Yes" if it returns to its initial position or else "No" (without quotes).

// Sample Input 1
// 2
// 5
// RLRUD
// 4
// LRUD

// Sample Output 1
// No
// Yes

let str = "LRDU"

let x = 0;
let y = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] == "L") {
        x += -1
    } else if (str[i] == "R") {
        x += 1
    } else if (str[i] == "U") {
        y += 1
    } else if (str[i] == "D") {
        y += -1
    }
}

let sum = x + y;

if (sum == 0) {
    console.log("True")
} else {
    console.log("False")
}