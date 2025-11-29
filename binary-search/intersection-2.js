var intersect = function (nums1, nums2) {
  const count = {};
  const result = [];

  for (let num of nums1) {
    count[num] = (count[num] || 0) + 1;
  }

  for (let num of nums2) {
    if (count[num] > 0) {
      result.push(num);
      count[num]--;
    }
  }
  return result;
};

console.log(intersect[(1, 2, 2, 1)], [2, 2]);
console.log(intersect[(4, 9, 5)], [9, 4, 9, 8, 4]);
