function ValidPerfectSquare(num) {
  if (num < 0) return false;
  if (num === 0 || num === 1) return true;

  let left = 1;
  let right = Math.floor(num / 2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sq = mid * mid;

    if (sq === num) return true;
    if (sq < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

console.log(ValidPerfectSquare(25));
console.log(ValidPerfectSquare(14));
console.log(ValidPerfectSquare(36));
console.log(ValidPerfectSquare(16));
