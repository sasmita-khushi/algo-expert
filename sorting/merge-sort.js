function mergeSort(array) {
  // Write your code here.
  if (array.length <= 1) {
    return array;
  }
  const middleIndex = Math.floor(array.length / 2);
  const leftArray = mergeSort(array.slice(0, middleIndex));
  const rightArray = mergeSort(array.slice(middleIndex));

  return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray) {
  const sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      sortedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  // If there are remaining elements in the left or right array, append them to the sorted array
  return sortedArray
    .concat(leftArray.slice(leftIndex))
    .concat(rightArray.slice(rightIndex));
}

console.log(mergeSort([8, 5, 2, 9, 5, 6, 3]));
