/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function (nums1, nums2) {
  let int = [];
  if (nums1.length < nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i]) && !int.includes(nums1[i])) {
        int.push(nums1[i]);
      }
    }
  } else {
    for (let i = 0; i < nums2.length; i++) {
      if (nums1.includes(nums2[i]) && !int.includes(nums2[i])) {
        int.push(nums2[i]);
      }
    }
  }
  return int;
};
