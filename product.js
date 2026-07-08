let arr = [1, 2, 3, 4, 5];

function maxProduct(arr) {
  let max1 = -Infinity;
  let max2 = -Infinity;

  for (let num of arr) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }
  return max1 * max2;
}

console.log(maxProduct(arr));
