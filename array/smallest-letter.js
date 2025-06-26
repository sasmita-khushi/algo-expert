function nextGreaterLetter(letters, target) {
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return letters[left % letters.length];
}
console.log(nextGreaterLetter(["c", "f", "j"], "a")); // Output: 'c'
console.log(nextGreaterLetter(["c", "f", "j"], "c")); // Output: 'f'
console.log(nextGreaterLetter(["c", "f", "j"], "d")); // Output: 'f'
console.log(nextGreaterLetter(["c", "f", "j"], "g")); // Output: 'j'
console.log(nextGreaterLetter(["c", "f", "j"], "j")); // Output: 'c'
