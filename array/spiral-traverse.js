function spiralTraverse(matrix) {
  const result = [];
  let startRow = 0;
  let endRow = matrix.length - 1;
  let startCol = 0;
  let endCol = matrix[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // Traverse from left to right along the top boundary
    for (let col = startCol; col <= endCol; col++) {
      result.push(matrix[startRow][col]);
    }
    startRow++;

    // Traverse from top to bottom along the right boundary
    for (let row = startRow; row <= endRow; row++) {
      result.push(matrix[row][endCol]);
    }
    endCol--;

    // Traverse from right to left along the bottom boundary
    if (startRow <= endRow) {
      for (let col = endCol; col >= startCol; col--) {
        result.push(matrix[endRow][col]);
      }
      endRow--;
    }

    // Traverse from bottom to top along the left boundary
    if (startCol <= endCol) {
      for (let row = endRow; row >= startRow; row--) {
        result.push(matrix[row][startCol]);
      }
      startCol++;
    }
  }

  return result;
}

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralTraverse(matrix1));
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(spiralTraverse(matrix2));
// Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
