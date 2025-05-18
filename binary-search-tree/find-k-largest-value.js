// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  // Write your code here.
  let count = 0;
  let result = -1;

  function reverseInOrderTraversal(node) {
    if (!node || count >= k) return;

    // Traverse the right subtree
    reverseInOrderTraversal(node.right);

    // Visit the node
    count++;
    if (count === k) {
      result = node.value;
      return;
    }

    // Traverse the left subtree
    reverseInOrderTraversal(node.left);
  }

  reverseInOrderTraversal(tree);
  return result;
}

// Example usage
const tree = new BST(20);
tree.left = new BST(10);
tree.right = new BST(30);
tree.left.left = new BST(5);
tree.left.right = new BST(15);
tree.right.right = new BST(40);

console.log(findKthLargestValueInBst(tree, 1)); // Output: 40 (1st largest)
console.log(findKthLargestValueInBst(tree, 2)); // Output: 30 (2nd largest)
console.log(findKthLargestValueInBst(tree, 3)); // Output: 25 (3rd largest)
console.log(findKthLargestValueInBst(tree, 4)); // Output: 15 (4th largest)
console.log(findKthLargestValueInBst(tree, 5)); // Output: 10 (5th largest)
