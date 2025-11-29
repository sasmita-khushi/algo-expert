function SquareRoot(x) {
  if (x < 2) return x;
  let left = 1;
  let right = x;
  let ans = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sq = mid * mid;

    if (sq === x) return mid;
    if (sq < x) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
}

console.log(SquareRoot(9));
console.log(SquareRoot(25));
