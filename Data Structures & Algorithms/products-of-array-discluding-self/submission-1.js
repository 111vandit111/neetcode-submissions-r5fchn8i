class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeroCounter = 0;
        let mul = 1;

        for(let i = 0;i<nums.length;i++){
            if(nums[i] === 0) zeroCounter += 1;
            else mul = mul*nums[i];
        }

        for(let i = 0;i<nums.length;i++){
            if(zeroCounter > 1) nums[i] = 0;
            else{
                if(nums[i] !== 0) nums[i] = zeroCounter > 0 ? 0 : mul/nums[i];
                else nums[i] = mul;
            }
        }

        return nums;
    }
}
