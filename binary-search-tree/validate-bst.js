// This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function validateBst(tree) {
    return validateBstHelper(tree, -Infinity, Infinity);
  }
  
  function validateBstHelper(node, minValue, maxValue) {
    if (node === null) return true;
  
    if (node.value < minValue || node.value >= maxValue) return false;
  
    const isLeftValid = validateBstHelper(node.left, minValue, node.value);
    const isRightValid = validateBstHelper(node.right, node.value, maxValue);
  
    return isLeftValid && isRightValid;
  }
 
  