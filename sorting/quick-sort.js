function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  // Select the pivot element
  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  // Partition the array into two sub-arrays
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // Recursively apply quicksort to left and right sub-arrays, and combine them with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([8, 5, 2, 9, 5, 6, 3]));
