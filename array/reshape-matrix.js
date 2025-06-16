function reshapemat(mat, r, c) {
  let m = mat.length;
  let n = mat[0].length;
  if (m * n !== r * c) {
    return mat; // Cannot reshape, return original mat
  }

  let flat = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      flat.push(mat[i][j]);
    }
  }
  const reshaped = [];

  for (let i = 0; i < r; i++) {
    const r = [];

    for (let j = 0; j < c; j++) {
      r.push(flat[i * c + j]);
    }
    reshaped.push(r);
  }

  return reshaped;
}

console.log(
  reshapemat(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
); // [[1, 2, 3, 4]]
