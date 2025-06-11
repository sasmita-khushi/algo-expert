var generate = function (numRows) {
  let arr = [];
  for (let i = 0; i < numRows; i++) {
    const row = [1];
    for (let j = 1; j < i; j++) {
      const val = arr[i - 1][j - 1] + arr[i - 1][j];
      row.push(val);
    }
    if (i > 0) row.push(1);
    arr.push(row);
  }
  return arr;
};
console.log(generate(3)); // [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]


function generate(numRows) {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    const row = [1]; // first element is always 1

    for (let j = 1; j < i; j++) {
      // sum of two elements directly above
      const val = result[i - 1][j - 1] + result[i - 1][j];
      row.push(val);
    }

    if (i > 0) row.push(1); // last element is also 1 (except for first row)

    result.push(row);
  }

  return result;
}