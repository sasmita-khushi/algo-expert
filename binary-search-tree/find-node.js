class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function BinarySearch(root, target) {
  if (root === null) return false;
  if (root.value === target) return true;
  if (target < root.value) return BinarySearch(root.left, target);
  else return BinarySearch(root.right, target);
}

// Constructing BST manually
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(20);

// Searching
console.log(BinarySearch(root, 7)); // true
console.log(BinarySearch(root, 12)); // false
