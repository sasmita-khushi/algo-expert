const secret = 6;
function guess(num) {
  if (num === secret) return 0;
  return num > secret ? -1 : 1;
}

function guessNumber(n) {
  let low = 1;
  let high = n;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const res = guess(mid);
    if (res === 0) return mid;
    if (res < 0) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

console.log(guessNumber(10));
