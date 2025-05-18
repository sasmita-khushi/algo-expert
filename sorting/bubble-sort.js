function bubbleSort(arr) {
  // Write your code here.
  let n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    // If no elements were swapped, the array is sorted
    if (!swapped) break;
  }

  return arr;
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));
