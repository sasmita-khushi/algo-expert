function DistributeCandies(CandyType) {
  let uniques = new Set(CandyType);
  let maxCandies = CandyType.length / 2;
  return Math.min(uniques.size, maxCandies);
}

console.log(DistributeCandies([1, 1, 2, 2, 3, 3])); // Output: 3
