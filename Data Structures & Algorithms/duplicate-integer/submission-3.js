class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
                let set = new Set();

        for(var i  =0;i<nums.length;i++){
            if(set.has(nums[i])) return true;

            set.add(nums[i]);
        }

        return false;
    }
}
