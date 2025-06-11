function majorityElement(nums) {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
}

console.log(majorityElement([3, 2, 3])); // Output: 3
