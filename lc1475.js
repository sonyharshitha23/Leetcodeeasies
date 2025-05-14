/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let st = [];
  let dis = new Array().fill(0);
  for (let i = prices.length - 1; i >= 0; i--) {
    while (st.length != 0 && prices[i] < st[st.length - 1]) {
      st.pop();
    }
    if (st.length != 0) {
      dis[i] = prices[i] - st[st.length - 1];
    } else {
      dis[i] = prices[i];
    }
    st.push(prices[i]);
  }
  return dis;
};
