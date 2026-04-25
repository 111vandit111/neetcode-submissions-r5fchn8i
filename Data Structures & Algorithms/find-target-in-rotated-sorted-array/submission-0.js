class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0 , r = nums.length-1;
        while(l<=r){
           const mid = Math.floor((r+l)/2);
           const n1 = nums[l], n2 = nums[r];

           if(target === nums[mid]) return mid;

           if(n1 <= nums[mid]){
              if(target > nums[mid] || target < n1){
                     l = mid+1;
              }else{
                r = mid-1;
              }
           }else{
            if(target < nums[mid] || target > n2){
                r = mid-1;
            }else{
                l = mid+1;
            }
           }
        }

        return -1;
    }
}
