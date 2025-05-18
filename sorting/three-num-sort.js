function threeNumberSort(array, order) {
  // Write your code here.
  let result = [];
  for (let i = 0; i < order.length; i++) {
    result = result.concat(array.filter((num) => num === order[i]));
  }
  return result;
}

console.log(
  threeNumberSort([
    [1, 0, 0, -1, -1, 0, 1, 1],
    [0, 1, -1],
  ])
);
