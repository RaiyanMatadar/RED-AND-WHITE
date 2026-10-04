// Max Consecutive Ones
// Problem:
// Given a binary array, find the maximum number of consecutive 1s in the array.
// We need to count how long a streak of ones can continue without interruption.

// Example:
// Input: [1, 1, 0, 1, 1, 1]
// Output: 3

// Approach:
// Traverse the array once.
// Keep a counter `current` for the current streak of consecutive ones.
// Keep a variable `maxCount` for the longest streak seen so far.
// If the current number is 1, increase `current`.
// Otherwise, reset `current` to 0.
// Update `maxCount` whenever `current` is larger.

// Why it works:
// Every time we see a 1, we extend the current streak.
// If we see a 0, the streak ends, so we reset.
// The largest streak found during the scan is the answer.

// Pseudo logic:
// current = 0
// maxCount = 0
// for each num in nums:
//     if num == 1:
//         current++
//         maxCount = max(maxCount, current)
//     else:
//         current = 0
// return maxCount

// Time Complexity: O(n)
// Space Complexity: O(1)

// Edge Cases:
// - Array with all zeros
// - Array with all ones
// - Mixed pattern of 0s and 1s
// - Single-element array

var findMaxConsecutiveOnes = function (nums) {
  let current = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      current++;
      maxCount = Math.max(maxCount, current);
    } else {
      current = 0;
    }
  }

  return maxCount;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
console.log(findMaxConsecutiveOnes([0, 0, 0]));
