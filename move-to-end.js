function moveToEnd(array, value) {
  // Initialize a variable to keep track of the next position for non-value elements
  let nextNonValueIndex = 0;

  // Loop through the array
  for (let i = 0; i < array.length; i++) {
    // If the current element is not the value to move, swap it to the nextNonValueIndex
    if (array[i] !== value) {
      // Swap elements
      [array[i], array[nextNonValueIndex]] = [
        array[nextNonValueIndex],
        array[i],
      ];
      // Move the nextNonValueIndex forward
      nextNonValueIndex++;
    }
  }

  // No need to explicitly move values to the end; the array is already modified in place
  return array;
}

console.log(moveToEnd([2, 1, 2, 3, 2, 4, 2], 2)); // Output: [1, 3, 4, 2, 2, 2, 2]
console.log(moveToEnd([4, 5, 4, 4, 5, 4], 4)); // Output: [5, 5, 4, 4, 4, 4]
