class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let i = 0, l = nums.length-1;
        while(i<=l){
            if(nums[i]=== target) return i;
            if(nums[l]===target) return l;
            i++;
            l--;
        }

        return -1;
    }
}
