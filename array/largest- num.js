var dominantIndex = function (nums) {
  if (nums.length === 1) return 0;

  let max = -Infinity;
  let secondMax = -Infinity;
  let index = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      secondMax = max;
      max = nums[i];
      index = i;
    } else if (nums[i] > secondMax) {
      secondMax = nums[i];
    }
  }

  if (max >= 2 * secondMax) {
    return index;
  } else {
    return -1;
  }
};
console.log(dominantIndex([3, 6, 1, 0])); // Output: 1
console.log(dominantIndex([1, 2, 3, 4])); // Output: -1
