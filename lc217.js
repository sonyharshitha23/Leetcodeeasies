/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // nums.sort((a,b)=>a-b);
  // for(let i=1;i<=nums.length-1;i++){
  //     if(nums[i]==nums[i-1]){
  //         return true;
  //     }
  // }
  // return false;
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};
