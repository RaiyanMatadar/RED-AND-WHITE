// ---------------------------------------------------------
//                     MAP() IN JAVASCRIPT
// ---------------------------------------------------------

// map() is a Higher Order Function.
// It takes a function as an argument and applies it
// to every element of the array.
// It returns a NEW array (it never modifies the original).

const arr = [1, 7, 9, 12, 8];

// ---------------------------------------------------------
// Example 1: Using a normal function
// ---------------------------------------------------------

// double → returns each number multiplied by 2
function double(x) {
    return x * 2;
}

// binary → converts each number to binary string
function binary(x) {
    return x.toString(2);
}

// here we pass an function inside map(double) this stetement will run function for each an every 
// element of arr then it will create an new array then it will be stored in the output variable    

const Output = arr.map(binary);
console.log(Output)

// but this way we will have to first write an function then pass it as an parameter to the map function 
// intead of this we can also write inline like we can create that function within the map function 

const output1 = arr.map(function binary(x) {
    return x.toString(2);
})

const output2 = arr.map((x) => {
    return x.toString(2);
})

const output3 = arr.map((x) => x.toString(2))

// the output2 & output3 both are same just an way to write them diffrently 

console.log(Output2);
console.log(Output3);

// ---------------------------------------------------------
// Summary of MAP()
// ---------------------------------------------------------
//
// • map() loops through each element.
// • Executes the provided function.
// • Creates a new array with the returned values.
// • Does NOT change the original array.
// • You can pass a named function or write an inline arrow function.
//
// ---------------------------------------------------------

// ---------------------------------------------------------
//                     Filter() IN JAVASCRIPT
// ---------------------------------------------------------

// Returns a new array.
// Does NOT change the original array.

const arr2 = [6, 1, 8, 2, 3];

const outputFilter = arr.filter((x) => {
    return x % 2 == 0;
})

// this will give us the even numbers


// ---------------------------------------------------------
//                     Reduce() IN JAVASCRIPT
// ---------------------------------------------------------

const arr3 = [6, 1, 8, 2, 3];

// Traditinal way of geting the array sum
let sum = 0;

for (let i = 0; i < arr3.length; i++) {
    sum += arr3[i];
}
console.log(sum); // 27


// Using Reduce method for geting the array sum
const outputReduce = arr3.reduce(function(acc, curr) {
    return acc + curr;
}, 0);
console.log(sum);



// Callback Parameters:
// - acc  → stores the result after each iteration.
// - curr → the current element being processed (like the i-th value in a loop).

// The second argument (0) is the initial value of acc.

// How it works:
// 1. Start with acc = 0
// 2. For each element: acc = acc + curr
// 3. After the last element, reduce() returns the final accumulated value.

// Key Points:
// - Returns a single value.
// - Does not modify the original array.
// - Useful for sums, products, max, min, counting, etc.