/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    let temp = 0;
    if (nums[j] == 0) {
      continue;
    } else {
      temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      i = i + 1;
    }
  }
  return nums;
};
