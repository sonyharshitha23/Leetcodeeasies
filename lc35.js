/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let j = 0;
  if (nums[0] > target) {
    j = 0;
  } else if (nums[nums.length - 1] < target) {
    j = nums.length;
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= target) {
        j = i;
        break;
      }
    }
  }
  return j;
};
