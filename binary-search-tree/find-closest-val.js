function findClosestValueInBst(tree, target) {
  // Write your code here.
  let currentNode = tree;
  let closest = tree.value;

  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }

    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }

  return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const bst = new BST(10);
bst.left = new BST(5);
bst.left.left = new BST(2);
bst.left.right = new BST(5);
bst.left.left.left = new BST(1);
bst.right = new BST(15);
bst.right.right = new BST(22);
bst.right.left = new BST(13);

const target = 12;
console.log(findClosestValueInBst(bst, target));
