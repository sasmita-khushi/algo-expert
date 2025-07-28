class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function InsertNode(root, value) {
  if (root === null) return new TreeNode(value);
  if (value < root.value) {
    root.left = InsertNode(root.left, value);
  } else {
    root.right = InsertNode(root.right, value);
  }

  return root;
}

let root = new TreeNode(15);
root.left = new TreeNode(10);
root.left.left = new TreeNode(7);
root.left.right = new TreeNode(13);
root.right = new TreeNode(17);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(20);

console.log(InsertNode(root, 19));
