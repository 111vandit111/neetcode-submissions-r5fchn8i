class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
         let l = 0, r = nums.length-1;
         while(r>l){
            let mid = l + Math.floor((r - l) / 2);
            if(nums[r] > nums[mid]) r = mid
            else l = mid+1;
         }
         return nums[l];
    }
}
