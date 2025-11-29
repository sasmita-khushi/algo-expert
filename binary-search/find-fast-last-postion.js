function findFastLastPosition(nums, target) {
  let first = -1;
  let last = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (first === -1) first = i;
      last = i;
    }
  }
  return [first, last];
}

console.log(findFastLastPosition([5, 7, 7, 8, 8, 10], 8));
