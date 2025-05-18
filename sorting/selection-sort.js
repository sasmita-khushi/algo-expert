function selectionSort(array) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    let minimumIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minimumIndex]) {
        minimumIndex = j;
      }
    }
    if (minimumIndex !== i) {
      [array[i], array[minimumIndex]] = [array[minimumIndex], array[i]];
    }
  }
  return array;
}

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]));
