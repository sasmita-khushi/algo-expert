function secondLargest(arr) {
  if (arr.length < 2) return -1;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? -1 : secondLargest;
}

let arr = [1, 5, 7, 8, 3, 4];
console.log(secondLargest(arr));
