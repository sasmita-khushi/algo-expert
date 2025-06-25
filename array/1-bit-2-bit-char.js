function isOneBitCharacter(bits) {
  let i = 0;

  while (i < bits.length - 1) {
    if (bits[i] === 1) {
      i += 2;
    } else {
      i += 1;
    }
  }

  return i === bits.length - 1;
}
console.log(isOneBitCharacter([1, 0, 0])); // true
console.log(isOneBitCharacter([1, 1, 0])); // true
console.log(isOneBitCharacter([0, 1, 0])); //false
