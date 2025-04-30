/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let min = blocks.length;
  let w = 0;
  for (let i = 0; i < k; i++) {
    if (blocks[i] == "W") {
      w += 1;
    }
  }
  min = Math.min(min, w);
  for (let i = k; i < blocks.length; i++) {
    if (blocks[i] == "W") {
      if (blocks[i - k] == "W") {
        w = w;
      } else {
        w = w + 1;
      }
    } else {
      if (blocks[i - k] == "W") {
        w = w - 1;
      } else {
        w = w;
      }
    }
    min = Math.min(min, w);
  }
  return min;
};
