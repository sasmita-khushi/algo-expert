function isPalindrome(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = string.length - 1; j >= 0; j--) {
      if (string[i] === string[j]) {
        return true;
      }
      return false;
    }
  }
}

console.log(isPalindrome("alewha"));
