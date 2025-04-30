/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  let c = code.concat(code);
  let output = [];
  if (k == 0) {
    for (let i = 0; i < code.length; i++) {
      output.push(0);
    }
    return output;
  } else if (k > 0) {
    let sum = 0;
    for (let i = 1; i <= k; i++) {
      sum = sum + c[i];
    }
    output.push(sum);
    for (let i = k + 1; i < k + code.length; i++) {
      sum = sum - c[i - k] + c[i];
      output.push(sum);
    }
    return output;
  } else {
    let sum = 0;
    for (let i = code.length - 1; i >= code.length + k; i--) {
      sum = sum + c[i];
    }
    output.push(sum);
    for (let i = code.length; i < 2 * code.length - 1; i++) {
      sum = sum - c[i + k] + c[i];
      output.push(sum);
    }
    return output;
  }
};
