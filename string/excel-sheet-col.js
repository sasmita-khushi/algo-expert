function convertToTitle(columnNumber) {
  let result = "";

  while (columnNumber > 0) {
    columnNumber--; // Shift to 0-based index
    let remainder = columnNumber % 26;
    result = String.fromCharCode(65 + remainder) + result; // 65 -> 'A'
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
}

console.log(convertToTitle(1)); // Output: "A"
console.log(convertToTitle(28)); // Output: "AB"
console.log(convertToTitle(701)); // Output: "ZY"
console.log(convertToTitle(52)); // Output: "AZ"
