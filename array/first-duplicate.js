function firstDuplicateValue(array) {
  const seen = new Set();

  for (let num of array) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }
  return -1;
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]));

return -1;
