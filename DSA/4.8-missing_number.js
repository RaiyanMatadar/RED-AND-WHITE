// Missing Number
// Problem:
// We are given an array containing numbers from 0 to n, but one number is missing.
// Example: [3, 0, 1] -> missing number is 2
// We need to find the missing value efficiently.

// Approach:
// The sum of numbers from 0 to n is:
// n * (n + 1) / 2
// If we subtract the sum of the numbers actually present in the array from this expected sum,
// the remaining value will be the missing number.

// Why this works:
// The array contains all numbers from 0 to n except one value.
// So the total of all numbers from 0 to n is fixed.
// The difference between the expected total and the actual total is exactly the missing number.

// Example:
// nums = [3, 0, 1]
// expected sum = 3 * (3 + 1) / 2 = 6
// actual sum = 3 + 0 + 1 = 4
// missing = 6 - 4 = 2

// Pseudo logic:
// expected = n * (n + 1) / 2
// actual = 0
// for each num in nums:
//     actual += num
// return expected - actual

// Time Complexity: O(n)
// Space Complexity: O(1)

// Edge Cases:
// - Missing number is at the beginning (0 is missing)
// - Missing number is at the end
// - Array contains only one value
// - Array has a large range, but still follows 0 to n pattern

var missingNumber = function (nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }

  return expectedSum - actualSum;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([0, 1, 3]));
