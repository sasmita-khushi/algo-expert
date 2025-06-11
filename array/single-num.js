var singleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
  return nums[nums.length - 1];
};
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
