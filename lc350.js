/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let int = [];
  if (nums1.length < nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) {
        let ind = nums2.indexOf(nums1[i]);
        nums2.splice(ind, 1);
        int.push(nums1[i]);
      }
    }
  } else {
    for (let i = 0; i < nums2.length; i++) {
      if (nums1.includes(nums2[i])) {
        let ind = nums1.indexOf(nums2[i]);
        nums1.splice(ind, 1);
        int.push(nums2[i]);
      }
    }
  }
  return int;
};
