var findDisappearedNumbers = function (nums) {
  const map = new Map();
  nums.forEach((num, i) => map.set(num, i));

  const result = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) result.push(i);
  }
  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [5, 6]
