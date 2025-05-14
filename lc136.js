/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let u = 0;
  for (let i = 0; i < nums.length; i++) {
    u = u ^ nums[i];
  }
  return u;
};
