/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (op) {
  let st = [];
  for (let i = 0; i < op.length; i++) {
    switch (op[i]) {
      case "C":
        st.pop();
        break;
      case "D":
        st.push(2 * st[st.length - 1]);
        break;
      case "+":
        st.push(st[st.length - 1] + st[st.length - 2]);
        break;
      default:
        st.push(parseInt(op[i]));
    }
  }
  let sum = 0;
  if (st.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < st.length; i++) {
      sum = sum + st[i];
    }
    return sum;
  }
};
