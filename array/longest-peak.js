function longestPeak(array) {
  // Write your code here.
  let maxLength = 0;

  for (let i = 1; i < array.length - 1; i++) {
    // Check if the current element is a peak
    let isPeak = array[i] > array[i - 1] && array[i] > array[i + 1];

    if (!isPeak) continue;

    // Expand to the left of the peak
    let leftIdx = i - 1;
    while (leftIdx > 0 && array[leftIdx] > array[leftIdx - 1]) {
      leftIdx--;
    }

    // Expand to the right of the peak
    let rightIdx = i + 1;
    while (
      rightIdx < array.length - 1 &&
      array[rightIdx] > array[rightIdx + 1]
    ) {
      rightIdx++;
    }

    // Calculate the current peak's length
    let currentLength = rightIdx - leftIdx + 1;
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}

console.log(longestPeak([1, 2, 3, 3, 4, , 0, 10, 6, 5, -1, -3, 2, 3]));
