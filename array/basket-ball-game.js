function calPoint(operations) {
  let stack = [];
  for (const op of operations) {
    if (op === "+") {
      const last = stack[stack.length - 1];
      const secondLast = stack[stack.length - 2];
      stack.push(last + secondLast);
    } else if (op === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (op === "C") {
      stack.pop();
    } else {
      stack.push(parseInt(op));
    }
  }
  return stack.reduce((sum, score) => sum + score, 0);
}

console.log(calPoint(["5", "2", "C", "D", "+"])); // Output: 30
console.log(calPoint(["5", "-2", "4", "C", "D", "9", "+", "+"])); // Output: 27
console.log(calPoint(["1"])); // Output: 1
console.log(calPoint(["1", "C"])); // Output: 0
