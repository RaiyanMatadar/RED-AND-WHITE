// Single Number
// Problem:
// We are given an array where every number appears exactly twice except one number.
// We need to find the number that appears only once.

// Example:
// Input: [4, 1, 2, 1, 2]
// Output: 4

// Approach 1: Hash map
// We count how many times each number appears.
// The number whose count is 1 is the answer.

// Example:
// numbers = [4, 1, 2, 1, 2]
// counts = {
//   4: 1,
//   1: 2,
//   2: 2
// }
// Only 4 appears once, so return 4.

// Pseudo logic:
// hash = {}
// for each num in nums:
//     if num not in hash:
//         hash[num] = 1
//     else:
//         hash[num]++
// for each num in nums:
//     if hash[num] == 1:
//         return num

// Time Complexity: O(n)
// Space Complexity: O(n)

// Approach 2: Bitwise XOR (best method)
// XOR of a number with itself is 0.
// XOR of 0 with another number gives that number.
// So if every number appears twice, all pairs cancel out and only the unique number remains.

// Example:
// 4 ^ 1 ^ 2 ^ 1 ^ 2 = 4

// Pseudo logic:
// result = 0
// for each num in nums:
//     result = result ^ num
// return result

// Time Complexity: O(n)
// Space Complexity: O(1)

var singleNumber = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([1]));

