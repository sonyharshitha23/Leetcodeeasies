/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function(nums) {
//     nums=nums.sort((a,b)=>a-b);
//     let diff=0;
//     for (let i=1;i<nums.length;i++){
//         if(nums[i]-nums[i-1]!=1){
//             diff=nums[i]-1;
//         }
//     }
//     if(diff!=0){
//         return diff;
//     }
//     else{
//         if(nums[0]!=0){
//             return 0;
//         }
//         if(nums[nums.length-1]==nums.length-1){
//             return nums[nums.length-1]+1;
//         }
//     }
// };
var missingNumber = function (nums) {
  let n = nums.length;
  let sum1 = (n * (n + 1)) / 2;
  let sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    sum2 += nums[i];
  }
  return sum1 - sum2;
};
