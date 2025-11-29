var checkIfExist = function (arr) {
  let set = new Set();

  for (let num of arr) {
    if (set.has(num * 2) || set.has(num / 2)) {
      return true;
    }
    set.add(num);
  }

  return false;
};

console.log(checkIfExist([10, 2, 5, 3]));
console.log(checkIfExist([3, 1, 7, 11]));
