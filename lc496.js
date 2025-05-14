/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let st = [];
  let n = nums2.length;
  let n2 = new Array(n).fill(0);
  for (let j = n - 1; j >= 0; j--) {
    while (st.length != 0 && st[st.length - 1] <= nums2[j]) {
      st.pop();
    }
    if (st.length != 0) {
      n2[j] = st[st.length - 1];
    } else {
      n2[j] = -1;
    }
    st.push(nums2[j]);
  }
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    k = nums2.indexOf(nums1[i]);
    arr.push(n2[k]);
  }
  return arr;
};
