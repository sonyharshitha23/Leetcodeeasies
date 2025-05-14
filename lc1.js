/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
};
// var twoSum = function(nums, target) {
//     nums=nums.sort((a,b)=>a-b);
//     let i=0;
//     for(let j=nums.length-1;j>=0;j--){
//         if(nums[i]+nums[j]<target){

//         }
//         else if(nums[i]+nums[j]==target){
//             return [i,j];
//         }
//         else{
//             continue;
//         }
//     }
// };
