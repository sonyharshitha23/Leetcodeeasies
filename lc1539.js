/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let l = 0;
  let h = arr.length - 1;
  if (k < arr[0]) {
    return k;
  }
  while (l <= h) {
    let m = Math.floor((l + h) / 2);
    if (arr[m] - m - 1 < k) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return k + h + 1;
};
