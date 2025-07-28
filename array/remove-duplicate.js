export default function removeDuplicate(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");
