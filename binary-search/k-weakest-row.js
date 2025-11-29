import { isJSDocLinkLike } from "typescript";

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const m = mat.length;
  const counts = new Array(m);

  for (let i = 0; i < m; i++) {
    // count soldiers (1s) in row i
    let cnt = 0;
    const row = mat[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === 1) cnt++;
      else break; // since 1s are always before 0s, we can stop early
    }
    counts[i] = [cnt, i]; // [soldierCount, rowIndex]
  }

  // sort by count, then by index
  counts.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });

  const res = [];
  for (let t = 0; t < k; t++) res.push(counts[t][1]);
  return res;
};

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
);
