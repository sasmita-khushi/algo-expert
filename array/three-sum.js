function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let arr = [];

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];

      if (currentSum === targetSum) {
        arr.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return arr;
}
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
