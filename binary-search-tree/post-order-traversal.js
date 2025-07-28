class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function postOrderTraversal(node, result = []) {
  if (node === null) return null;
  postOrderTraversal(node.left, result);
  postOrderTraversal(node.right, result);
  result.push(node.value);
  return result;
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);
console.log(postOrderTraversal(root));
