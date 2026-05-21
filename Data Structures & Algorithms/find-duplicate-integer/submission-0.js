class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const set = new Set();
        let i = 0,j= nums.length-1;

        while(i <= j){
           if(i === j){
             if(set.has(nums[i])) return nums[i];
             i++;j--;
           }else{
             if(set.has(nums[i])) return nums[i];
             set.add(nums[i]);
             i++;
             if(set.has(nums[j])) return nums[j];
             set.add(nums[j]);
             j--;
           }
        }

        return -1;
    }
}
