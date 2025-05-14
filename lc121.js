/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let l = 0,
    r = 1,
    maxP = 0,
    profit = 0;
  for (let i = 0; i < prices.length; i++) {
    while (r < prices.length) {
      if (prices[l] < prices[r]) {
        profit = prices[r] - prices[l];
        maxP = Math.max(maxP, profit);
      } else {
        l = r;
      }
      r++;
    }
  }
  return maxP;
};
