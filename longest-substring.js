function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLen = 0;
  const set = new Set();

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, set.size);
  }

  return maxLen;
}
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));
