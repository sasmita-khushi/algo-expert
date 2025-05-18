function minHeightBst(array, start = 0, end = array.length - 1) {
  if (end < start) return null;

  const mid = Math.floor((start + end) / 2);
  const node = new BST(array[mid]);

  node.left = minHeightBst(array, start, mid - 1);
  node.right = minHeightBst(array, mid + 1, end);

  return node;
}
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

console.log(minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22]));
