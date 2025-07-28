class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraversal(node, result = []) {
  if (node === null) return result;

  inOrderTraversal(node.left, result); // Visit left
  result.push(node.value); // Visit current node
  inOrderTraversal(node.right, result); // Visit right

  return result;
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(20);

// Call inOrder traversal
console.log(inOrderTraversal(root)); // Output: [2, 5, 7, 10, 15, 20]
