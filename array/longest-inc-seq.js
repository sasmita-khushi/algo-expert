function findLengthOfLCIS(nums) {
  if (nums.length === 0) return 0;
  let maxLength = 1;
  let currentLength = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 1;
    }
  }

  return maxLength;
}
console.log(findLengthOfLCIS([1, 3, 5, 4, 7])); // Output: 3
console.log(findLengthOfLCIS([2, 2, 2, 2, 2])); // Output: 1
console.log(findLengthOfLCIS([1, 2, 3, 4, 5])); // Output: 5
