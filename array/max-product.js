function maximumProduct(nums) {
  if (nums.length < 3) {
    return undefined; // or handle this gracefully
  }
  if (nums.length === 3) {
    return nums[0] * nums[1] * nums[2];
  }
  nums.sort((a, b) => a - b);
  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
  );
}

console.log(maximumProduct([1, 2, 3])); // Output: 6
console.log(maximumProduct([-10, -10, 5, 2])); // Output: 500
console.log(maximumProduct([-10, -10, 1, 3, 2])); // Output: 300
console.log(maximumProduct([1, 2, 3, 4])); // Output: 24
console.log(maximumProduct([1, 2, 3, 4, 5])); // Outputs: 60
