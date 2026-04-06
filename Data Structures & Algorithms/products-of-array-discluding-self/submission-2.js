class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        var zero_index = -1;
        let prod = 1;
        for(var i =0;i<nums.length ;i++){
            const curr = nums[i];
            if(curr === 0){
                if(zero_index === -1){
                    zero_index = i;
                }else{
                    prod = 0;
                    break;
                }
            }
            else prod = prod*curr;
        }

        if(prod === 0) return Array.from(nums, () => 0);
        
        else return nums.map((num,index) => {
            if(zero_index === -1){
                return prod/num;
            } else {
                if(index === zero_index) return prod;
                else return 0;
            }
        })
    }
}
