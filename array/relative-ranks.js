function findRelativeRanks(score) {
  // Sort scores in descending order while keeping track of original indices
  let arr = score.map((s, i) => [s, i]);
  arr.sort((a, b) => b[0] - a[0]);

  let result = new Array(score.length);

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      result[arr[i][1]] = "Gold Medal";
    } else if (i === 1) {
      result[arr[i][1]] = "Silver Medal";
    } else if (i === 2) {
      result[arr[i][1]] = "Bronze Medal";
    } else {
      result[arr[i][1]] = (i + 1).toString();
    }
  }

  return result;
}
