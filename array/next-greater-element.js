// function NextGreaterElement(nums1, nums2) {
//   const arr = [];
//   for (let i = 0; i < nums1.length; i++) {
//     // find the index of the current element in nums2 first
//     let index = nums2.indexOf(nums1[i]);
//     let next = -1;
//     // then move forward from that index to find a greater element
//     for (let j = index + 1; j < nums2.length; j++) {
//       if (nums2[j] > nums1[i]) {
//         next = nums2[j];

//         break;
//       }
//     }
//     arr.push(next);
//   }
//   return arr;
// }

// console.log(NextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // Output: [-1, 3, -1]

function nextGreaterElement(nums1, nums2) {
  const map = new Map();
  const ans = [];

  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    let maxNum = -1;

    for (let j = i + 1; j < nums2.length; j++) {
      if (num < nums2[j]) {
        maxNum = nums2[j];
        break;
      }
    }

    map.set(num, maxNum);
  }

  for (const num of nums1) {
    const value = map.get(num);
    ans.push(value);
  }

  return ans;
}
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // Output: [-1, 3, -1]
