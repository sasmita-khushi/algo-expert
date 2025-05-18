class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
  // Helper function to check if nodeA is an ancestor of nodeB
  function isAncestor(nodeA, nodeB) {
    let currentNode = nodeA;
    while (currentNode !== null && currentNode !== nodeB) {
      currentNode =
        nodeB.value < currentNode.value ? currentNode.left : currentNode.right;
    }
    return currentNode === nodeB;
  }

  // Check if nodeOne is an ancestor of nodeTwo and nodeTwo is an ancestor of nodeThree
  const case1 = isAncestor(nodeOne, nodeTwo) && isAncestor(nodeTwo, nodeThree);

  // Check if nodeThree is an ancestor of nodeTwo and nodeTwo is an ancestor of nodeOne
  const case2 = isAncestor(nodeThree, nodeTwo) && isAncestor(nodeTwo, nodeOne);

  // Return true if any of the cases are valid
  return case1 || case2;
}

