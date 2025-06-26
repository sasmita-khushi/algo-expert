function minCostClimbingStairs(cost) {
  let n = cost.length;
  let first = cost[0];
  let second = cost[1];

  for (let i = 2; i < n; i++) {
    let current = cost[i] + Math.min(first, second);
    first = second;
    second = current;
  }

  return Math.min(first, second);
}

console.log(minCostClimbingStairs([10, 15, 20])); // Output: 15
