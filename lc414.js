/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!arr.includes(nums[i])) {
      arr.push(nums[i]);
    }
  }
  if (arr.length >= 3) {
    max1 = Math.max(...arr);
    arr = arr.filter((element) => element != max1);
    max2 = Math.max(...arr);
    arr = arr.filter((element) => element != max2);
    max3 = Math.max(...arr);
    return max3;
  } else {
    return Math.max(...arr);
  }
};
