/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let count = 0;
  for (i = 2; i < s.length; i++) {
    if (s[i] == s[i - 1] || s[i - 1] == s[i - 2] || s[i] == s[i - 2]) {
      continue;
    } else {
      count += 1;
    }
  }
  return count;
};
