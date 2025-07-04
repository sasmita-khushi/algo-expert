function toeplitzMatrix(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) {
        return false; // If any element does not match the diagonal, return false
      }
    }
  }

  return true;
}

console.log(
  toeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [6, 5, 1, 2],
  ])
); // Output: true
console.log(
  toeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [6, 5, 1, 2],
    [7, 6, 5, 1],
  ])
); // Output: true
console.log(
  toeplitzMatrix([
    [1, 2],
    [2, 2],
  ])
);
// Output: false
