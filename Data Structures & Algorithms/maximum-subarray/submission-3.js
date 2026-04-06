class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let sum = nums[0];
        let maxSum = sum;
        for(let i = 1; i< nums.length ;i++){
            const curr = nums[i] + sum;

            if(curr < 0){
                sum = 0;
                maxSum = Math.max(maxSum,nums[i]);
            }else{
                sum = curr;
                maxSum = Math.max(maxSum,sum);
            }
        }
        return maxSum; 
    }
}
