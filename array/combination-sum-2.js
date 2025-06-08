function combinationSum(candidates, target) {
  let x = candidates.sort((a, b) => a - b);
  const results = [];

  function backtrack(remaining, combination, start) {
    if (remaining === 0) {
      results.push([...combination]);
      return;
    }
    if (remaining < 0) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }

      const candidate = candidates[i];

      combination.push(candidate);

      backtrack(remaining - candidate, combination, i + 1);

      combination.pop();
    }
  }

  backtrack(target, [], 0);
  return results;
}

console.log(combinationSum([10, 1, 2, 7, 6, 1, 5], 8)); // [[1,1,6],[1,2,5],[1,7],[2,6]]
