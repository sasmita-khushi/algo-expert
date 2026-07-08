function FindDistanceVal(arr1, arr2, d) {
  let count = 0;
  for (let x of arr1) {
    let valid = true;
    for (let y of arr2) {
      if (Math.abs(x - y) <= d) {
        valid = false;
        break;
      }
    }
    if (valid) count++;
  }
  return count;
}
