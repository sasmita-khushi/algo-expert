function mergeOverlappingIntervals(array) {
  // Write your code here.

  array.sort((a, b) => a[0] - b[0]);

  const merged = [];

  for (let i = 0; i < array.length; i++) {
    if (merged.length === 0 || merged[merged.length - 1][1] < array[i][0]) {
      merged.push(array[i]);
    } else {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        array[i][1]
      );
    }
  }
  return merged;
}

console.log(
  mergeOverlappingIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
