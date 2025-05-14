/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  let c = 1;
  let maxC = 0;
  let n = nums.length;
  if (n == 1 || n == 0) {
    return nums[n - 1];
  }
  for (let i = 1; i < n; i++) {
    if (nums[i] == nums[i - 1]) {
      c = c + 1;
    } else {
      c = 1;
    }
    maxC = Math.max(c, maxC);
    if (maxC > n / 2) {
      return nums[i];
    }
  }
};
