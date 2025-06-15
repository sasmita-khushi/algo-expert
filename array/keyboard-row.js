function findWords(words) {
  const row1 = new Set("qwertyuiop");
  const row2 = new Set("asdfghjkl");
  const row3 = new Set("zxcvbnm");

  return words.filter((word) => {
    const lower = word.toLowerCase();
    const first = lower[0];

    let row = row1.has(first) ? row1 : row2.has(first) ? row2 : row3;

    return [...lower].every((ch) => row.has(ch));
  });
}

// Examples
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // ["Alaska","Dad"]
console.log(findWords(["omk"])); // []
console.log(findWords(["adsdf", "sfd"])); // ["adsdf","sfd"]
