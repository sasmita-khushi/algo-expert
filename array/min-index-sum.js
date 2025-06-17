var findRestaurant = function (list1, list2) {
  let indexMap = new Map();

  for (let i = 0; i < list1.length; i++) {
    indexMap.set(list1[i], i);
  }

  let min = Infinity;
  let result = [];

  for (let j = 0; j < list2.length; j++) {
    if (indexMap.has(list2[j])) {
      let sum = j + indexMap.get(list2[j]);
      if (sum < min) {
        min = sum;
        result = [list2[j]];
      } else if (sum === min) {
        result.push(list2[j]);
      }
    }
  }
  return result;
};

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  )
); // Output: ["Shogun"]
console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Burger King,Shogun", "Tapioca Express", "Piatti"]
  )
); // Output: ["Shogun"]
