// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



export default function twoSum(nums, target) {

    let sortedArr = nums.sort((a, b) => a - b);
    let left = 0;
    let right = sortedArr.length - 1;

    while (left < right) {
        let sum = sortedArr[left] + sortedArr[right];
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]