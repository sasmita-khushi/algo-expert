function a(nums) {
  let n = nums.length;
  let set = new Set();
  let missing = -1;
  let duplicate = -1;

  for (let i = 0; i < n; i++) {
    if (set.has(nums[i])) {
      duplicate = nums[i];
    }
    set.add(nums[i]);
  }

  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      missing = i;
      break;
    }
  }
  return [duplicate, missing];
}

console.log(a([1, 2, 2, 4, 5, 6])); // Output: [ 2,3]
