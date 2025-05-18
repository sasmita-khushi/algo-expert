function inOrderTraverse(tree, array) {
  // Write your code here.
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

function preOrderTraverse(tree, array) {
  // Write your code here.
  if (tree !== null) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }
  return array;
}

function postOrderTraverse(tree, array) {
  // Write your code here.
  if (tree !== null) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);

console.log("In-Order Traversal:", inOrderTraverse(root, [])); // Output: [4, 2, 5, 1, 3]
console.log("Pre-Order Traversal:", preOrderTraverse(root, [])); // Output: [1, 2, 4, 5, 3]
console.log("Post-Order Traversal:", postOrderTraverse(root, [])); // Output: [4, 5, 2, 3, 1]
