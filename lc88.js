/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let l = nums1.length;
  nums1.splice(m);
  const c = nums1.concat(nums2);
  c.sort(function (a, b) {
    return a - b;
  });
  nums1.length = 0;
  nums1.push(...c);
};
