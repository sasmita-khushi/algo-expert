function majorityElement(array) {
  let newArray = [];
  let count = 1;
  for (let i = 0; i < array.length; i++) {
    if (!newArray(array[i])) {
      newArray.push(array[i]);
    } else {
      count++;
    }
  }
  return -1;
}
