class Solution {
    public int[] productExceptSelf(int[] nums) {
        int prod = 1;
        int hasZero = 0;

        for(int i =0;i<nums.length;i++){
            if(nums[i] == 0) {
                hasZero++;
                continue;
                }
            
            prod = prod*nums[i];
        }

        if(hasZero > 1) prod =0;

        for(int i = 0;i<nums.length;i++){
            if(nums[i] == 0) {
                nums[i] = prod;
                continue;
            }
            if(hasZero > 0) nums[i] = 0;
            else
            nums[i] = prod/nums[i];
        }

        return nums;
    }
}  
