class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function removeNode(root, value) {
  if (root === null) return null;
  if (value < root.value) {
    root.left = removeNode(root.left, value);
  } else if (value > root.value) {
    root.right = removeNode(root.right, value);
  } else {
    // Case 1: No children
    if (root.left === null && root.right === null) {
      return null;
    }

    // Case 2: One child
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;

    // Case 3: Two children
    let successor = findMin(root.right);
    console.log(successor);
    root.value = successor.value;
    root.right = removeNode(root.right, successor.value);
  }
  return root;
}

function findMin(node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node;
}

let root = new TreeNode(15);
root.left = new TreeNode(10);
root.left.left = new TreeNode(7);
root.left.right = new TreeNode(13);
root.right = new TreeNode(17);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(20);
root.right.right.left = new TreeNode(19);

// Delete node
root = removeNode(root, 10); // Try deleting 17
console.log(root);
