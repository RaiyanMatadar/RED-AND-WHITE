// Move Zeroes
// Problem:
// We need to move all zeros to the end of the array.
// The non-zero elements should remain in their original relative order.
// This must be done in-place without using extra array space.

// Example:
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

// Approach:
// Use two pointers.
// `write` keeps track of the next position where a non-zero element should be placed.
// `i` scans the array from left to right.
// Whenever we find a non-zero value, we place it at `write` and move `write` forward.
// After the scan, fill the remaining positions with zero.

// Why it works:
// We are compacting all non-zero elements to the front of the array.
// Since we traverse the array left to right, their order remains unchanged.
// The leftover positions are then filled with zeros.

// Pseudo logic:
// write = 0
// for i from 0 to n - 1:
//     if nums[i] != 0:
//         nums[write] = nums[i]
//         write++
// for j from write to n - 1:
//     nums[j] = 0

// Time Complexity: O(n)
// Space Complexity: O(1)

// Edge Cases:
// - Array with all zeros
// - Array with no zeros
// - Single-element array
// - Mixed zeros and non-zero numbers

var moveZeroes = function (nums) {
  let write = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[write] = nums[i];
      write++;
    }
  }

  for (let i = write; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1]));
console.log(moveZeroes([1, 2, 3, 4]));
