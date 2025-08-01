var containsDuplicate = function (nums) {
  let seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
