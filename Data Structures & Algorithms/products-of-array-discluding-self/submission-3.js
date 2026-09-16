class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      const n = nums.length;
      let res = new Array(n).fill(1);

      for(let i = 1;i<n;i++){
        res[i] = nums[i-1]*res[i-1];
      }

      let postfix = 1;

      for(let j = n-1;j>=0;j--){
        res[j] = postfix*res[j];
        postfix = postfix*nums[j];
      }

      return res;
    }
}
