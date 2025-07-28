class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function preOrderTraversal(node, result = []) {
  if (node === null) return null;

  result.push(node.value);
  preOrderTraversal(node.left, result);
  preOrderTraversal(node.right, result);
  return result;
}
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);
console.log(preOrderTraversal(root));
